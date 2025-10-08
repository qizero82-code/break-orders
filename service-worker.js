const CACHE_NAME = 'break-orders-v10';
const RUNTIME_CACHE = 'break-orders-runtime-v10';

// File essenziali da cachare immediatamente
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Risorse esterne da cachare (Firebase, Google Fonts)
const externalResources = [
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js',
  'https://fonts.googleapis.com/css2?family=Bangers&family=Caveat+Brush&family=Cherry+Cream+Soda&family=Dokdo&family=DynaPuff:wght@400..700&family=Indie+Flower&family=Irish+Grover&family=Knewave&family=Mountains+of+Christmas:wght@400;700&family=Permanent+Marker&family=Rampart+One&family=Rubik+Vinyl&family=Swanky+and+Moo+Moo&display=swap'
];

// Install service worker
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker v10...');
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Cache risorse esterne in modo non bloccante
        return caches.open(RUNTIME_CACHE)
          .then(cache => {
            return Promise.allSettled(
              externalResources.map(url => 
                cache.add(url).catch(err => console.log('[SW] Failed to cache:', url))
              )
            );
          });
      })
      .then(() => console.log('[SW] Installation complete'))
      .catch(err => console.error('[SW] Installation failed:', err))
  );
});

// Strategia: Network First con fallback a Cache (per Firebase)
// Cache First per risorse statiche
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignora richieste non-GET
  if (request.method !== 'GET') return;
  
  // Ignora Firebase Realtime Database (sempre network)
  if (url.hostname.includes('firebasedatabase.app')) {
    return;
  }
  
  // Cache First per risorse statiche locali
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Aggiorna cache in background
            fetch(request).then(response => {
              if (response && response.status === 200) {
                caches.open(CACHE_NAME).then(cache => cache.put(request, response));
              }
            }).catch(() => {});
            return cachedResponse;
          }
          
          // Se non in cache, fetch e salva
          return fetch(request).then(response => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, responseToCache));
            return response;
          });
        })
        .catch(() => {
          // Fallback offline
          if (request.destination === 'document') {
            return caches.match('./index.html');
          }
        })
    );
  }
  // Network First per risorse esterne (Firebase, Google Fonts)
  else {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE).then(cache => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(() => {
          // Fallback a cache se offline
          return caches.match(request);
        })
    );
  }
});

// Update service worker e pulisci vecchie cache
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker v10...');
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    ]).then(() => console.log('[SW] Activation complete'))
  );
});

// Gestione messaggi dal client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // Forza aggiornamento cache
  if (event.data && event.data.type === 'FORCE_UPDATE') {
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(urlsToCache).then(() => {
        event.ports[0].postMessage({ success: true });
      });
    });
  }
});
