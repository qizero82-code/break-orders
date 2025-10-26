# Break Orders PWA

Applicazione PWA per la gestione ordini del Break Billiard Club.

## Struttura principale
- `index.html`: app principale (UI, logica, registrazione Service Worker).
- `manifest.json`: Web App Manifest (icone, start_url, scope, tema).
- `service-worker.js`: caching/offline.
- `icon-192.png`, `icon-512.png`: icone PWA.

## Requisiti PWA (già configurati)
- Manifest linkato in `index.html` con `<link rel="manifest" href="manifest.json" />`.
- Registrazione Service Worker in `index.html` (al load).
- `manifest.json` con `id`, `scope`, `start_url` relativi (compatibili con GitHub Pages project site).

## Pubblicazione su GitHub
1. Crea il repository su GitHub: `qizero82-code/break-orders`.
2. Aggiungi questi file alla root del repository e fai push su `main`.
3. Abilita GitHub Pages:
   - Settings → Pages → Source: `Deploy from a branch`.
   - Branch: `main` e Directory: `/ (root)`.
4. Attendi la pubblicazione. L'app sarà disponibile a:
   - `https://qizero82-code.github.io/break-orders/`

Nota: Il `manifest.json` usa percorsi relativi (`./`), quindi non serve modificare URL se il sito è `.../break-orders/`.

## Generare APK con PWABuilder
1. Vai su https://www.pwabuilder.com/.
2. Inserisci l’URL pubblico della PWA (es. `https://qizero82-code.github.io/break-orders/`).
3. Verifica i checks (Manifest/Service Worker dovrebbero risultare OK).
4. Seleziona “Package for Android”.
5. Configura i parametri (nome app, packageId, icone). PWABuilder può generare e firmare l’APK/AAB:
   - Puoi scaricare il pacchetto firmato oppure far generare un pacchetto non firmato e firmarlo più tardi.
6. Scarica l’APK/AAB risultante.

## Consigli
- Dopo ogni modifica, esegui hard refresh (Ctrl+F5) o incrementa i nomi cache nel `service-worker.js` per forzare l’update.
- Controlla la console per `Service Worker` registrato e eventuali messaggi di aggiornamento.

## Licenza
Specifica qui la licenza, se necessario.
