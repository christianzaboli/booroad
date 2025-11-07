# BooRoad - App di Viaggio

Benvenuti in **BooRoad**, l'applicazione web per la gestione dei viaggi turistici. Questa app permette alle guide di accedere facilmente alle informazioni sui viaggi e visualizzare i dettagli di tutti gli utenti partecipanti.

## 🚀 Caratteristiche Principali

- **Gestione Viaggi**: Le guide possono aprire e consultare le informazioni dettagliate sui viaggi programmati.
- **Visualizzazione Utenti**: Accesso completo alla lista degli utenti iscritti, con tutte le loro informazioni personali.
- **Interfaccia Intuitiva**: Costruita con React e Bootstrap per un'esperienza utente fluida e responsive.
- **Tecnologie Moderne**: Utilizza Vite per un sviluppo rapido e prestazioni ottimali.

## 📦 Installazione

Per installare e avviare l'applicazione, segui questi passaggi:

1. Clona il repository:
   ```
   git clone <url-del-repository>
   cd booroad
   ```

2. Installa le dipendenze:
   ```
   npm install
   ```

3. Avvia il server di sviluppo:
   ```
   npm run dev
   ```

L'applicazione sarà disponibile su `http://localhost:5173` (porta predefinita di Vite).

## 🛠️ Script Disponibili

- `npm run dev`: Avvia il server di sviluppo
- `npm run build`: Costruisce l'app per la produzione
- `npm run lint`: Esegue il controllo del codice con ESLint
- `npm run preview`: Anteprima dell'app costruita
- `npm run pretty`: Formatta il codice con Prettier per .js, .jsx e .json

## 📁 Struttura del Progetto

- `src/`: Codice sorgente dell'applicazione
  - `components/`: Componenti riutilizzabili
    - `MyHeader.jsx`: Header dell'applicazione
    - `TravelList.jsx`: Lista dei viaggi
  - `data/`: File di dati
    - `diagram.png`: Diagramma
    - `partecipanti.jsx`: Dati dei partecipanti
    - `viaggi.jsx`: Dati dei viaggi
  - `layout/`: Layout dell'applicazione
    - `DefaultLayout.jsx`: Layout predefinito
  - `pages/`: Pagine dell'applicazione
    - `HomePage.jsx`: Pagina principale
    - `TravelPage.jsx`: Pagina dei viaggi
  - `App.jsx`: Componente principale
  - `App.css`: Stili principali
  - `index.css`: Stili globali
  - `main.jsx`: Punto di ingresso
- `public/`: File statici
- `eslint.config.js`: Configurazione ESLint
- `vite.config.js`: Configurazione Vite
- `package.json`: Dipendenze e script

## 🎨 Formattazione del Codice

Il progetto utilizza Prettier per mantenere uno stile di codice consistente. Esegui `npm run pretty` per formattare automaticamente i file .js, .jsx e .json.

## 🤝 Contributi

Siamo felici di ricevere contributi! Sentiti libero di aprire issue o pull request per migliorare l'app.

Prima di aprire una pull request, assicurati di eseguire `npm run pretty` per formattare il codice secondo le regole del progetto.

## 📄 Licenza

Questo progetto è distribuito sotto la licenza MIT.