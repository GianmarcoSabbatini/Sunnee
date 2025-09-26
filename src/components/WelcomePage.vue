<template>
  <div class="welcome-page">
    <div class="container">
      <div class="welcome-content">
        <div class="hero-section">
          <div class="hero-icon">🌍</div>
          <h1>Benvenuto nel mondo Sunnee!</h1>
          <p class="hero-subtitle">
            Tutti i costumi Sunnee sono sostenibili e ricavati esclusivamente da materiali di riciclo.
            Crea la tua borraccia riutilizzabile personalizzata e diventa un piccolo eroe dell'ambiente! 
          </p>
        </div>

        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">♻️</div>
            <h3>Ricicla e Riusa</h3>
            <p>Ogni borraccia che riusi salva il nostro pianeta! Una borraccia può vivere mille avventure.</p>
          </div>
          
          <div class="info-card">
            <div class="card-icon">🎨</div>
            <h3>Personalizza</h3>
            <p>Scegli i tuoi colori preferiti e crea una borraccia unica, proprio come te!</p>
          </div>
        </div>
                <div class="cta-section">
          <button @click="startConfiguration" class="start-btn">
            <span class="btn-icon">✨</span>
            Crea la tua borraccia!
            <span class="btn-icon">✨</span>
          </button>
          <p class="cta-text">Ci vogliono solo 3 semplici passi!</p>
        </div>

        <div class="about-sunnee">
          <h3>A proposito di Sunnee</h3>
          <div>
            <div>
              <p>Nel 2018 la fondatrice ha lanciato Sunnee con l’obiettivo di creare un brand che riflettesse i suoi valori e le sue esigenze di sportiva e amante del mare.
                Nel tempo, il progetto ha attirato persone con la stessa visione e oggi Sunnee è un team strutturato e operativo nel settore del beachwear sostenibile.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { store, BOTTLE_PARTS } from '../store/index.js'

export default {
  name: 'WelcomePage',
  methods: {
    startConfiguration() {
      store.resetConfiguration()
      this.$router.push(`/step/${BOTTLE_PARTS[0].key}`)
    }
  }
}
</script>

<style scoped>
.welcome-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-content {
  text-align: center;
  max-width: 900px;
}

.hero-section {
  margin-bottom: 50px;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: bounce 2s infinite;
}

.hero-section h1 {
  font-size: 3rem;
  color: #FF7043;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 20px;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.info-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 3px solid transparent;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-color: #FFE082;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.info-card h3 {
  color: #FF7043;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.info-card p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

.about-sunnee {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.about-sunnee h3 {
  color: #FF7043;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}


.about-sunnee p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
}

.cta-section {
  margin-top: 40px;
  margin-bottom: 40px;
}

.start-btn {
  background: linear-gradient(135deg, #FF7043, #FF5722);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 112, 67, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Quicksand', sans-serif;
}

.start-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 112, 67, 0.4);
  background: linear-gradient(135deg, #FF5722, #E53935);
}

.start-btn:active {
  transform: translateY(-1px);
}

.btn-icon {
  animation: sparkle 1.5s infinite;
}

.cta-text {
  color: #666;
  font-size: 1rem;
  margin-top: 15px;
  font-weight: 500;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .info-cards {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .info-card {
    padding: 25px;
  }
  

  
  .start-btn {
    padding: 15px 30px;
    font-size: 1.1rem;
  }
}
</style>