# 🔥 Guida Configurazione Firebase per Break Orders

## ✅ Cosa fa Firebase?
Firebase permette di **sincronizzare gli ordini in tempo reale tra più dispositivi**. Quando un dispositivo modifica un ordine, tutti gli altri dispositivi vedranno immediatamente la modifica.

---

## 📋 Passaggi per Configurare Firebase

### 1️⃣ Crea un Progetto Firebase

1. Vai su **https://console.firebase.google.com/**
2. Clicca su **"Aggiungi progetto"** (o "Add project")
3. Inserisci un nome per il progetto, ad esempio: `break-orders`
4. Disabilita Google Analytics (non serve per questa app)
5. Clicca su **"Crea progetto"**

---

### 2️⃣ Attiva Realtime Database

1. Nel menu a sinistra, clicca su **"Realtime Database"**
2. Clicca su **"Crea database"**
3. Scegli la località più vicina (es. `europe-west1`)
4. Seleziona **"Inizia in modalità test"** (per ora)
5. Clicca su **"Abilita"**

---

### 3️⃣ Configura le Regole di Sicurezza

1. Vai su **"Realtime Database" → "Regole"**
2. Sostituisci le regole con questo codice:

```json
{
  "rules": {
    "breakOrders": {
      ".read": true,
      ".write": true
    }
  }
}
```

3. Clicca su **"Pubblica"**

⚠️ **IMPORTANTE**: Queste regole permettono a chiunque di leggere/scrivere. Per maggiore sicurezza, puoi aggiungere autenticazione in seguito.

---

### 4️⃣ Ottieni le Credenziali Firebase

1. Clicca sull'icona **⚙️ Impostazioni** → **"Impostazioni progetto"**
2. Scorri in basso fino a **"Le tue app"**
3. Clicca sull'icona **</>** (Web)
4. Inserisci un nickname per l'app: `break-orders-web`
5. **NON** selezionare "Configura anche Firebase Hosting"
6. Clicca su **"Registra app"**
7. Copia il codice di configurazione che appare

---

### 5️⃣ Inserisci le Credenziali nell'App

1. Apri il file **`index.html`**
2. Cerca questa sezione (circa riga 211):

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

3. Sostituisci i valori con quelli che hai copiato da Firebase
4. Salva il file

---

### 6️⃣ Testa la Sincronizzazione

1. Apri l'app su **2 dispositivi diversi** (o 2 browser/tab)
2. Crea un ordine sul **primo dispositivo**
3. Controlla che appaia **automaticamente sul secondo dispositivo**
4. ✅ Se funziona, la sincronizzazione è attiva!

---

## 🔍 Come Verificare che Firebase Funzioni

Apri la **Console del Browser** (F12) e cerca questi messaggi:

- ✅ `Firebase inizializzato correttamente` → Firebase è attivo
- ⚠️ `Firebase non configurato` → Devi inserire le credenziali
- 📥 `Ricevuti dati da Firebase` → Sincronizzazione funzionante

---

## 🛡️ Sicurezza Avanzata (Opzionale)

Per proteggere i dati, puoi abilitare l'autenticazione:

### Opzione 1: Autenticazione Anonima
```json
{
  "rules": {
    "breakOrders": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

### Opzione 2: Password Condivisa (più semplice)
Aggiungi una password nel codice:

```javascript
const SECRET_PASSWORD = "breakbc2025";

// Prima di salvare, verifica la password
if(prompt("Inserisci password:") !== SECRET_PASSWORD){
  alert("Password errata!");
  return;
}
```

---

## ❓ Problemi Comuni

### ❌ "Firebase non configurato"
→ Hai inserito le credenziali corrette in `firebaseConfig`?

### ❌ "Permission denied"
→ Controlla le regole del database (vedi punto 3)

### ❌ I dispositivi non si sincronizzano
→ Verifica che entrambi i dispositivi siano connessi a Internet
→ Controlla la console del browser per errori

---

## 💾 Backup Locale

L'app continua a salvare i dati anche in **localStorage** come backup. Se Firebase non funziona, l'app continuerà a funzionare normalmente sul singolo dispositivo.

---

## 📞 Supporto

Per problemi o domande:
- Controlla la console del browser (F12)
- Verifica le regole Firebase
- Assicurati che le credenziali siano corrette

---

**🎉 Fatto! Ora i tuoi ordini si sincronizzano automaticamente tra tutti i dispositivi!**
