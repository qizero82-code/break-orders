# Break Orders - PWA

Sistema di gestione ordini per Break Billiard Club con sincronizzazione Firebase in tempo reale.

## 📦 File necessari per PWABuilder

Tutti i file in questa cartella sono necessari per creare l'APK:

- **`index.html`** - Applicazione principale
- **`manifest.json`** - Manifest PWA
- **`service-worker.js`** - Service Worker per funzionalità offline
- **`icon-192.png`** - Icona 192x192
- **`icon-512.png`** - Icona 512x512
- **`.gitignore`** - File da escludere dal repository

## 🚀 Come caricare su GitHub

### Opzione 1: Via Web Interface

1. Vai su https://github.com/qizero82-code/break-orders
2. Clicca su "Add file" → "Upload files"
3. Trascina i seguenti file:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`
   - `.gitignore`
4. Scrivi un messaggio di commit (es. "Update v7 - Layout verticale")
5. Clicca "Commit changes"

### Opzione 2: Via Git Command Line

```bash
cd /path/to/PWAbuilder
git init
git add index.html manifest.json service-worker.js icon-192.png icon-512.png .gitignore
git commit -m "Update v7 - Layout verticale"
git branch -M main
git remote add origin https://github.com/qizero82-code/break-orders.git
git push -u origin main
```

## 🌐 Abilitare GitHub Pages

1. Vai su https://github.com/qizero82-code/break-orders/settings/pages
2. In **"Source"** seleziona **"Deploy from a branch"**
3. Seleziona branch **"main"** e cartella **"/ (root)"**
4. Clicca **"Save"**
5. Dopo 1-2 minuti il sito sarà disponibile su:
   - **https://qizero82-code.github.io/break-orders/**

## 📱 Come creare l'APK con PWABuilder

1. Vai su **https://www.pwabuilder.com/**
2. Inserisci l'URL: `https://qizero82-code.github.io/break-orders/`
3. Clicca **"Start"**
4. PWABuilder analizzerà la tua PWA (attendi il completamento)
5. Clicca **"Package for Stores"**
6. Seleziona **"Android"**
7. Configura le opzioni:
   - **Package ID**: `com.breakbilliard.orders`
   - **App name**: `Break Orders`
   - **Version**: `9.0.0`
8. Clicca **"Generate"** e scarica l'APK

## ✨ Caratteristiche v9.0

### Gestione Ordini
- ✅ Gestione ordini per tavoli multipli
- ✅ Tavoli personalizzabili (nomi e numero)
- ✅ Ordini salvati con stato "Consegnato"
- ✅ Acconto parziale su ordini
- ✅ Storico completo ordini
- ✅ **Lista ordini invertita** - Totale in alto, ordini dal più recente
- ✅ **Separatore "CONSEGNATO"** - Divide ordini nuovi da quelli già consegnati

### Prodotti e Categorie
- ✅ 8 categorie (Caffè, Spina, Frigo, Super, Snack, Tempo, Quote, Cassa)
- ✅ Sottocategorie personalizzabili
- ✅ 5 modificatori (SR, M, K, S, GH)
- ✅ Gestione prezzi dinamici

### Layout e UI
- ✅ **Layout verticale ottimizzato per tablet**
- ✅ **Popup ordini 90%** - Larghezza e altezza al 90% con bordo
- ✅ **Ordini salvati a griglia 4x4** - Tutta la larghezza dello schermo
- ✅ Sottocategorie a 2 colonne
- ✅ Modificatori in 1 riga da 5 tasti sempre in alto
- ✅ **Tempo/Cassa pad 90%** - Centrati e ben visibili
- ✅ Ordini espandibili a schermo intero

### Funzionalità Avanzate
- ✅ **Sincronizzazione Firebase in tempo reale**
- ✅ Refill automatico prodotti frigo
- ✅ Lista spesa basata su refill
- ✅ Totali per categoria
- ✅ Ordini evasi recuperabili
- ✅ Funzionalità offline (Service Worker)
- ✅ **Divisione tempo con input vuoto** - Placeholder suggerisce "2"

### Personalizzazione
- ✅ Font personalizzabili per ogni sezione
- ✅ Dimensioni testo regolabili
- ✅ Colori testo personalizzabili
- ✅ Cambio sfondo
- ✅ Padding personalizzabile

## 🔧 Configurazione Firebase (Opzionale)

Se vuoi usare la sincronizzazione in tempo reale tra dispositivi, vedi `FIREBASE_SETUP.md`.

L'app funziona anche senza Firebase usando solo localStorage locale.

## 📋 Changelog v9.0

- **Ordini salvati a griglia 4x4** - Tutta la larghezza dello schermo
- **Popup ordini 90%** - Dimensioni ottimizzate con bordo visibile
- **Lista ordini invertita** - Totale in alto, ordini più recenti per primi
- **Separatore "CONSEGNATO"** - Divide visivamente ordini nuovi da vecchi
- **Tempo/Cassa pad 90%** - Centrati e ben dimensionati
- **Input divisione tempo vuoto** - Campo vuoto con placeholder "2"
- **Fix layout e posizionamento** - Tutti gli elementi perfettamente allineati

## 📞 Supporto

Per problemi o richieste: https://github.com/qizero82-code/break-orders/issues

---

**Versione**: 9.0.0  
**Data**: Ottobre 2025  
**Autore**: Break Billiard Club
