# falsinvalsi

Simulazione INVALSI per studenti di 2ª superiore, con consegna online, pagina admin e database Supabase.

## File

| File | Descrizione |
|------|-------------|
| `index.html` | Pagina del test (studenti) |
| `app.js` | Logica del test |
| `style.css` | Stili |
| `admin.html` | Pannello amministratore |
| `supabase-config.js` | Credenziali Supabase + password admin |
| `setup.sql` | Schema SQL da eseguire su Supabase |

---

## Setup Supabase

### 1. Crea il progetto
Vai su [supabase.com](https://supabase.com), crea un nuovo progetto gratuito.

### 2. Crea le tabelle
Nel pannello Supabase → **SQL Editor**, esegui il contenuto di `setup.sql`.

### 3. Configura le credenziali
Apri `supabase-config.js` e compila:
```js
const SUPABASE_URL = 'https://xxxxxxxxxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...';
const ADMIN_PASSWORD = 'la-tua-password'; // cambia prima del deploy!
```
Le credenziali si trovano in: **Supabase Dashboard → Settings → API**.

---

## Flusso studente

1. Lo studente apre `index.html` (o `index.html?test_id=<UUID>` per un test specifico creato dall'admin).
2. Inserisce nome e cognome nel modal di benvenuto.
3. Svolge il test con navigazione libera, contrassegni e strumenti di accessibilità.
4. Clicca **Consegna** → conferma → le risposte vengono salvate su Supabase.
5. Viene mostrata la pagina di conferma con il punteggio.

> Se `supabase-config.js` non è compilato, il test funziona comunque (usa i dati integrati) ma le risposte **non vengono salvate**.

---

## Pannello Admin (`admin.html`)

Accesso con la password definita in `supabase-config.js` (default: `admin123`).

### Funzionalità
- **Test** – elenco dei test creati, link da condividere, visualizzazione JSON, eliminazione.
- **Crea nuovo test** – incolla un JSON di sezioni/domande (vedi esempio nel pannello) e salva su Supabase.
- **Risultati** – tabella di tutte le consegne con filtro per test, punteggio e dettaglio risposta per risposta.
- **Esporta CSV** – scarica tutti i risultati filtrati in formato CSV.

### Struttura JSON per creare un test

```json
[
  {
    "id": "sezione-1",
    "title": "Sezione 1",
    "textTitle": "Titolo del testo",
    "attribution": "(Autore, Opera, Anno)",
    "text": "<p>Contenuto HTML del brano...</p>",
    "questions": [
      {
        "id": 1,
        "text": "1. Domanda di esempio?",
        "instruction": "Devi selezionare solo una scelta",
        "type": "single",
        "options": [
          { "label": "A", "text": "Prima risposta" },
          { "label": "B", "text": "Seconda risposta" },
          { "label": "C", "text": "Terza risposta" },
          { "label": "D", "text": "Quarta risposta" }
        ],
        "correct": "B"
      }
    ]
  }
]
```
