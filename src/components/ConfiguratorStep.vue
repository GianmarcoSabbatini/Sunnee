<template>
  <div class="configurator-step">
    <div class="container">
      <div class="step-layout">
        <div class="selection-panel">
          <div class="step-header">
            <div class="step-progress">
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }"
                ></div>
              </div>
              <p class="step-counter">Passo {{ currentStepIndex + 1 }} di {{ totalSteps }}</p>
            </div>
            
            <h1 class="step-title">
              <span class="part-icon">{{ getPartIcon(currentPart.key) }}</span>
              {{ currentPart.name }}
            </h1>
            <p class="step-description">{{ currentPart.description }}</p>
          </div>

          <div class="colors-grid">
            <div 
              v-for="color in availableColors" 
              :key="color.name"
              class="color-option"
              :class="{ 'selected': isSelected(color) }"
              @click="selectColor(color)"
            >
              <div 
                class="color-circle"
                :style="{ background: color.gradient }"
              >
                <div class="selection-check" v-if="isSelected(color)">✓</div>
              </div>
              <span class="color-name">{{ color.name }}</span>
            </div>
          </div>

          <div class="navigation-buttons">
            <button 
              v-if="currentStepIndex > 0"
              @click="goToPrevious"
              class="nav-btn secondary"
            >
              ← Indietro
            </button>
            
            <button 
              @click="goToNext"
              class="nav-btn primary"
              :class="{ 'final-step': isLastStep }"
            >
              {{ isLastStep ? '🎉 Completa la tua borraccia!' : 'Avanti →' }}
            </button>
          </div>
        </div>

      
        <div class="preview-panel">
          <div class="preview-header">
            <h3>La tua borraccia</h3>
            <p>Guarda come sta diventando!</p>
          </div>
          
          <BottlePreview />
          
          <div class="current-selection" v-if="selectedColor">
            <h4>Colore scelto per {{ currentPart.name.toLowerCase() }}:</h4>
            <div class="selected-color-info">
              <div 
                class="selected-color-swatch"
                :style="{ background: selectedColor.gradient }"
              ></div>
              <span class="selected-color-name">{{ selectedColor.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { store, COLORS, BOTTLE_PARTS } from '../store/index.js'
import BottlePreview from './BottlePreview.vue'

export default {
  name: 'ConfiguratorStep',
  components: {
    BottlePreview
  },
  props: {
    part: {
      type: String,
      required: true
    }
  },
  setup(props) {
    
    const currentStepIndex = computed(() => {
      return BOTTLE_PARTS.findIndex(p => p.key === props.part)
    })
    
    
    const currentPart = computed(() => {
      return BOTTLE_PARTS.find(p => p.key === props.part) || BOTTLE_PARTS[0]
    })
    
   
    const availableColors = computed(() => {
      return COLORS[props.part] || []
    })
    
    
    const selectedColor = computed(() => {
      return store.configuration[props.part]
    })
    
    const totalSteps = BOTTLE_PARTS.length
    const isLastStep = computed(() => currentStepIndex.value === totalSteps - 1)

    return {
      store,
      currentStepIndex,
      currentPart,
      availableColors,
      selectedColor,
      totalSteps,
      isLastStep
    }
  },
  methods: {
    selectColor(color) {
      store.setColor(this.part, color)
    },
    
    isSelected(color) {
      return this.selectedColor && this.selectedColor.name === color.name
    },
    
    getPartIcon(partKey) {
      const icons = {
        cap: '🎯',
        body: '💧',
        bottom: '🔹'
      }
      return icons[partKey] || '🎨'
    },
    
    goToPrevious() {
      if (this.currentStepIndex > 0) {
        const prevPart = BOTTLE_PARTS[this.currentStepIndex - 1]
        this.$router.push(`/step/${prevPart.key}`)
      }
    },
    
    goToNext() {
      if (this.isLastStep) {
        
        this.$router.push('/thank-you')
      } else {
       
        const nextPart = BOTTLE_PARTS[this.currentStepIndex + 1]
        this.$router.push(`/step/${nextPart.key}`)
      }
    }
  }
}
</script>

<style scoped>
.configurator-step {
  min-height: calc(100vh - 200px);
  padding: 20px 0;
}

.step-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  align-items: start;
}

.selection-panel {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.step-header {
  margin-bottom: 30px;
  text-align: center;
}

.step-progress {
  margin-bottom: 20px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 112, 67, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF7043, #FF5722);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.step-counter {
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
}

.step-title {
  color: #FF7043;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.part-icon {
  font-size: 2rem;
}

.step-description {
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.4;
}

.colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.color-option {
  text-align: center;
  cursor: pointer;
  padding: 15px;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 3px solid transparent;
}

.color-option:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.8);
  border-color: #FFE082;
}

.color-option.selected {
  background: rgba(255, 255, 255, 0.9);
  border-color: #FF7043;
}

.color-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto 10px;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.selection-check {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.color-name {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
  display: block;
  text-align: center;
  line-height: 1.2;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.nav-btn {
  flex: 1;
  padding: 15px 25px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Quicksand', sans-serif;
}

.nav-btn.secondary {
  background: rgba(108, 117, 125, 0.1);
  color: #6c757d;
  border: 2px solid #6c757d;
}

.nav-btn.secondary:hover {
  background: #6c757d;
  color: white;
}

.nav-btn.primary {
  background: linear-gradient(135deg, #FF7043, #FF5722);
  color: white;
}

.nav-btn.primary:hover {
  background: linear-gradient(135deg, #FF5722, #E53935);
}

.nav-btn.final-step {
  background: linear-gradient(135deg, #4CAF50, #388E3C);
}

.nav-btn.final-step:hover {
  background: linear-gradient(135deg, #388E3C, #2E7D32);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}

.preview-panel {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 120px;
}

.preview-header {
  text-align: center;
  margin-bottom: 20px;
}

.preview-header h3 {
  color: #FF7043;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.preview-header p {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
}

.current-selection {
  margin-top: 25px;
  text-align: center;
}

.current-selection h4 {
  color: #666;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.selected-color-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background: rgba(255, 112, 67, 0.1);
  border-radius: 10px;
}

.selected-color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.selected-color-name {
  color: #FF7043;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .step-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .step-title {
    font-size: 1.8rem;
  }
  
  .colors-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .navigation-buttons {
    flex-direction: column;
  }
}
</style>