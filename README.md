# 🌞 Sunnee - Configuratore Bottiglie Kids

Un'applicazione Vue.js interattiva per personalizzare bottiglie riutilizzabili del brand Sunnee, pensata per bambini e famiglie con un forte messaggio ecologico.

## Caratteristiche

- **Configurazione interattiva**: 3 step guidati per personalizzare tappo, corpo e fondo della borraccia
- **Anteprima in tempo reale**: Visualizzazione dinamica della borraccia che si aggiorna ad ogni scelta
- **Design kid-friendly**: Interface colorata e accattivante con animazioni divertenti
- **Messaggio ecologico**: Focus sull'importanza del riciclo e della sostenibilità
- **Responsive design**: Ottimizzato per desktop, tablet e mobile
- **30 colori unici**: 10 colori per ogni parte della borraccia con nomi creativi

## Struttura del Progetto

```
sunnee/
├── src/
│   ├── components/
│   │   ├── WelcomePage.vue      
│   │   ├── ConfiguratorStep.vue 
│   │   ├── BottlePreview.vue    
│   │   └── ThankYouPage.vue     
│   ├── store/
│   │   └── index.js            
│   ├── App.vue                 
│   └── main.js                 
├── package.json
├── vite.config.js
├── README.md
└── index.html
```

## Setup e Installazione

### Prerequisiti
- Node.js (versione 16 o superiore)
- npm o yarn

### Installazione
```bash
# Clona il repository
git clone <https://github.com/GianmarcoSabbatini/Sunnee>
cd sunnee

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# L'app sarà disponibile su http://localhost:5173
```

### Build per produzione
```bash
npm run build
```