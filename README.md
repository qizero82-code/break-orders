# Break Orders PWA

Sistema di gestione ordini per Break Billiard Club - Progressive Web App

## 📱 Caratteristiche

- **Interfaccia touch-friendly**: Ottimizzata per tablet e dispositivi mobili
- **Gestione ordini in tempo reale**: Sincronizzazione con Firebase
- **Modalità offline**: Funziona anche senza connessione internet
- **Export Excel**: Esportazione dati in formato Excel
- **PWA**: Installabile come app nativa su Android/iOS

## 🚀 Deploy su GitHub Pages

### 1. Carica i file su GitHub
```bash
git add .
git commit -m "PWA ready for deployment"
git push origin main
```

### 2. Abilita GitHub Pages
1. Vai nelle **Settings** del repository `break-orders`
2. Scorri fino a **Pages**
3. Seleziona **Source**: Deploy from a branch
4. Seleziona **Branch**: `main` e **Directory**: `/ (root)`
5. Clicca **Save**

L'app sarà disponibile a: `https://qizero82-code.github.io/break-orders/`

## 📦 Generare APK con PWABuilder

### 1. Vai su PWABuilder
- Visita: https://www.pwabuilder.com/
- Inserisci l'URL: `https://qizero82-code.github.io/break-orders/`

### 2. Verifica PWA
PWABuilder controllerà automaticamente:
- ✅ **Manifest**: Configurazione PWA
- ✅ **Service Worker**: Funzionalità offline
- ✅ **HTTPS**: Connessione sicura
- ✅ **Icons**: Icone app (192x192, 512x512)

### 3. Genera APK Android
1. Clicca **"Build My PWA"**
2. Seleziona **"Android Package"**
3. Configura i parametri:
   - **Package ID**: `com.breakclub.orders`
   - **App Name**: `Break Orders`
   - **Version**: `1.0.0`
4. Clicca **"Generate Package"**
5. Scarica l'APK generato

## 📁 File Essenziali (Inclusi)

✅ **File ottimizzati per PWABuilder**:
- `index.html` - App principale (328KB)
- `manifest.json` - Configurazione PWA ottimizzata
- `service-worker.js` - Cache e funzionalità offline
- `icon-192.png` - Icona 192x192 (26KB)
- `icon-512.png` - Icona 512x512 (84KB)

## 🔧 Configurazione Firebase

Per il pieno funzionamento dell'app:
1. Crea un progetto Firebase
2. Abilita **Realtime Database**
3. Configura le regole di sicurezza
4. Aggiorna le credenziali Firebase nel codice

## 💻 Tecnologie

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Database**: Firebase Realtime Database
- **PWA**: Service Worker, Web App Manifest
- **Offline**: Cache API, Background Sync
- **Export**: SheetJS (XLSX)

## 📱 Installazione come App

### Android:
1. Apri l'app nel browser Chrome
2. Tocca **"Aggiungi alla schermata Home"**
3. L'app verrà installata come app nativa

### iOS:
1. Apri l'app in Safari
2. Tocca il pulsante **"Condividi"**
3. Seleziona **"Aggiungi alla schermata Home"**

## 🔄 Aggiornamenti

Dopo ogni modifica:
- Incrementa il numero di versione in `service-worker.js` (attualmente v10)
- Esegui hard refresh (Ctrl+F5) per forzare l'aggiornamento

## 📄 Licenza

Tutti i diritti riservati - Break Billiard Club

---

**✨ La tua PWA è pronta per il deployment!**
