# 🌞 Sunnee - Configuratore Bottiglie Kids

Un'applicazione Vue.js interattiva per personalizzare bottiglie riutilizzabili del brand Sunnee, pensata per bambini e famiglie con un forte messaggio ecologico.

## ✨ Caratteristiche

- **Configurazione interattiva**: 3 step guidati per personalizzare tappo, corpo e fondo della borraccia
- **Anteprima in tempo reale**: Visualizzazione dinamica della borraccia che si aggiorna ad ogni scelta
- **Design kid-friendly**: Interface colorata e accattivante con animazioni divertenti
- **Messaggio ecologico**: Focus sull'importanza del riciclo e della sostenibilità
- **Responsive design**: Ottimizzato per desktop, tablet e mobile
- **30 colori unici**: 10 colori per ogni parte della borraccia con nomi creativi

## 🏗️ Struttura del Progetto

```
sunnee/
├── src/
│   ├── components/
│   │   ├── WelcomePage.vue      # Pagina di benvenuto con messaggio ecologico
│   │   ├── ConfiguratorStep.vue # Componente riutilizzabile per selezione colori
│   │   ├── BottlePreview.vue    # Anteprima 3D della borraccia
│   │   └── ThankYouPage.vue     # Pagina finale di ringraziamento
│   ├── store/
│   │   └── index.js            # Store reattivo per gestire configurazione
│   ├── App.vue                 # Componente principale
│   └── main.js                 # Entry point dell'applicazione
├── package.json
├── vite.config.js
├── README.md
└── index.html
```

## 🚀 Setup e Installazione

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

## 🎨 Funzionalità Principali

### 1. Pagina di Benvenuto
- Introduzione al brand Sunnee
- Messaggio educativo sul riciclo
- Animazioni accattivanti
- Call-to-action per iniziare la configurazione

### 2. Configuratore (3 Step)
- **Step 1**: Selezione colore del tappo
- **Step 2**: Selezione colore del corpo
- **Step 3**: Selezione colore del fondo
- Progress bar per mostrare l'avanzamento
- Navigazione fluida tra gli step

### 3. Anteprima borraccia
- Rendering CSS puro della borraccia
- Aggiornamento in tempo reale dei colori
- Effetti di luce e ombreggiature
- Animazioni al passaggio del mouse

### 4. Pagina di Ringraziamento
- Celebrazione del completamento
- Anteprima finale con dettagli colori
- Messaggi motivazionali sull'impatto ambientale
- Opzioni per condividere o creare una nuova borraccia

## 🎯 Palette Colori

### Tappo (10 colori)
- Rosso Fragola, Blu Oceano, Verde Mela, Giallo Sole
- Viola Unicorno, Arancio Carota, Rosa Ciliegia, Turchese Mare
- Lime Acido, Indaco Notte

### Corpo (10 colori)
- Azzurro Cielo, Verde Bosco, Rosa Pastello, Giallo Banana
- Viola Lavanda, Corallo Tropicale, Acqua Marina, Verde Menta
- Pesca Dolce, Blu Cobalto

### Fondo (10 colori)
- Marrone Terra, Grigio Roccia, Verde Oliva, Blu Notte
- Bordeaux, Verde Smeraldo, Oro Antico, Prugna Scura
- Ruggine, Petrolio

## 📱 Design Responsive

L'applicazione è completamente responsiva e ottimizzata per:
- **Desktop**: Layout a due colonne con anteprima laterale
- **Tablet**: Layout adattivo con componenti riorganizzati
- **Mobile**: Layout verticale con interfaccia touch-friendly

## 🛠️ Tecnologie Utilizzate

- **Vue.js 3**: Framework JavaScript progressivo
- **Vue Router 4**: Routing per Single Page Application
- **Vite**: Build tool veloce e moderno
- **CSS puro**: Styling avanzato con animazioni e gradient
- **Responsive Design**: Media queries per adattabilità

## 🌍 Messaggio Ecologico

L'app promuove la sostenibilità attraverso:
- Educazione sull'importanza del riciclo
- Statistiche sull'impatto ambientale
- Messaggi motivazionali per bambini
- Focus sulla riduzione della plastica monouso

## 📊 Performance

- **Componenti ottimizzati**: Massimo 400 righe per file Vue
- **Lazy loading**: Caricamento ottimizzato delle risorse
- **Animazioni fluide**: Transizioni CSS hardware-accelerated
- **Bundle size ridotto**: Dipendenze minime per prestazioni ottimali

## 🔄 Flusso Utente

1. **Welcome**: Introduzione e motivazione
2. **Step 1**: Scelta colore tappo + anteprima
3. **Step 2**: Scelta colore corpo + anteprima aggiornata
4. **Step 3**: Scelta colore fondo + anteprima finale
5. **Thank You**: Celebrazione, condivisione, nuova configurazione

## 💡 Caratteristiche Tecniche

- **Store reattivo**: Gestione stato centralizzata
- **Routing dinamico**: Navigazione basata su parametri
- **Componenti riutilizzabili**: ConfiguratorStep usato per tutti gli step
- **Animazioni CSS**: Effetti fluidi senza librerie esterne
- **Fallback graceful**: Supporto per browser meno recenti

## 🎉 Easter Eggs

- Animazioni confetti nella pagina finale
- Effetti particellari nella borraccia
- Suoni di celebrazione (opzionali)
- Messaggi nascosti per sviluppatori

---

**Creato con ❤️ per un futuro più sostenibile**  
© 2025 Sunnee - Insieme per un pianeta più verde! 🌱