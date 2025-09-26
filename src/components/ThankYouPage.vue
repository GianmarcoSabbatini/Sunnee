<template>
  <div class="thank-you-page">
    <div class="container">
      <div class="thank-you-content">
     
        <div class="celebration-header">
          <div class="success-icon">🎉</div>
          <h1 class="thank-you-title">
            Fantastico!<br>
            La tua borraccia è pronta!
          </h1>
          <p class="thank-you-subtitle">
            Hai appena creato qualcosa di speciale che aiuterà il nostro pianeta! 🌍
          </p>
        </div>

      
        <div class="final-preview">
          <div class="preview-container">
            <BottlePreview :showColorInfo="true" size="large" />
          </div>
        </div>


        <div class="fun-section">
          <h3>Divertiti con la tua borraccia! 🎈</h3>
          <div class="fun-tips">
            <div class="tip-card">
              <div class="tip-icon">🥤</div>
              <h4>Idratazione Super</h4>
              <p>Porta sempre con te la tua borraccia e bevi almeno 8 bicchieri d'acqua al giorno!</p>
            </div>
            <div class="tip-card">
              <div class="tip-icon">🎨</div>
              <h4>Personalizza ancora</h4>
              <p>Aggiungi adesivi eco-friendly o disegni con pennarelli lavabili!</p>
            </div>
            <div class="tip-card">
              <div class="tip-icon">👨‍👩‍👧‍👦</div>
              <h4>Condividi l'amore</h4>
              <p>Racconta alla famiglia e agli amici quanto è importante prendersi cura del pianeta!</p>
            </div>
          </div>
        </div>


        <div class="final-actions">
          <button @click="createAnother" class="action-btn primary">
            <span class="btn-icon">🎨</span>
            Crea un'altra borraccia
          </button>
          
          
          <button @click="goHome" class="action-btn tertiary">
            <span class="btn-icon">🏠</span>
            Torna all'inizio
          </button>
        </div>


        <div class="final-message">
          <p>
            <strong>Grazie per aver scelto Sunnee!</strong><br>
            Insieme stiamo costruendo un futuro più sostenibile, una borraccia alla volta. 🌈
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/index.js'
import BottlePreview from './BottlePreview.vue'

export default {
  name: 'ThankYouPage',
  components: {
    BottlePreview
  },
  setup() {
    return {
      store
    }
  },
  methods: {
    createAnother() {
      store.resetConfiguration()
      this.$router.push('/step/cap')
    },
    
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style scoped>
.thank-you-page {
  min-height: calc(100vh - 200px);
  padding: 40px 0;
  background: linear-gradient(135deg, #d4ff9c 0%, #64af41 50%, #65c219 100%);
  position: relative;
  overflow: hidden;
}

.thank-you-content {
  max-width: 1000px;
  margin: 0 auto;
}

.celebration-header {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: bounce 1s ease infinite;
}

.thank-you-title {
  font-size: 3.5rem;
  color: white;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
}

.thank-you-subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.final-preview {
  margin-bottom: 50px;
  align-items: center;
}

.preview-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.fun-section {
  margin-bottom: 40px;
}

.fun-section h3 {
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.fun-tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.tip-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
}

.tip-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.tip-card h4 {
  color: #FF7043;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.tip-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.4;
}

.final-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Quicksand', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.action-btn.primary {
  background: linear-gradient(135deg, #4c93af, #39388e);
  color: white;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.action-btn.primary:hover {
  background: linear-gradient(160deg, #4c93af, #39388e);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}



.action-btn.tertiary {
  background: rgba(255, 255, 255, 0.9);
  color: #666;
  border: 2px solid #ddd;
}

.action-btn.tertiary:hover {
  background: white;
  color: #FF7043;
  border-color: #FF7043;
  transform: translateY(-2px);
}

.final-message {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.final-message p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.final-message strong {
  color: #FF7043;
}



@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes celebration {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1) rotate(-5deg); }
  50% { transform: scale(1.2) rotate(0deg); }
  75% { transform: scale(1.1) rotate(5deg); }
}



@media (max-width: 768px) {
  .thank-you-title {
    font-size: 2.5rem;
  }
  

  
  .final-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .action-btn {
    min-width: 250px;
  }
  
  .fun-tips {
    grid-template-columns: 1fr;
  }
}
</style>