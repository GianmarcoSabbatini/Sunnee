<template>
  <div class="bottle-preview">
    <div class="bottle-container">
      <div class="bottle-wrapper">
        
        <div 
          class="bottle-cap" 
          :style="{ background: store.configuration.cap.gradient }"
        >
          <div class="cap-highlight"></div>
          <div class="cap-shadow"></div>
        </div>

        <div 
          class="bottle-body" 
          :style="{ background: store.configuration.body.gradient }"
        >
          <div class="body-highlight"></div>
          <div class="body-shadow"></div>
        </div>
        
        <div 
          class="bottle-bottom" 
          :style="{ background: store.configuration.bottom.gradient }"
        >
          <div class="bottom-highlight"></div>
          <div class="bottom-shadow"></div>
        </div>
        
      
        <div class="bottle-shine"></div>
      </div>
      
    
      <div class="color-info" v-if="showColorInfo">
        <div class="color-item">
          <div class="color-swatch" :style="{ background: store.configuration.cap.gradient }"></div>
          <span>{{ store.configuration.cap.name }}</span>
        </div>
        <div class="color-item">
          <div class="color-swatch" :style="{ background: store.configuration.body.gradient }"></div>
          <span>{{ store.configuration.body.name }}</span>
        </div>
        <div class="color-item">
          <div class="color-swatch" :style="{ background: store.configuration.bottom.gradient }"></div>
          <span>{{ store.configuration.bottom.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/index.js'

export default {
  name: 'BottlePreview',
  props: {
    showColorInfo: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal', // 'small', 'normal', 'large'
    }
  },
  setup() {
    return {
      store
    }
  }
}
</script>

<style scoped>
.bottle-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
}

.bottle-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottle-wrapper {
  position: relative;
  width: 120px;
  height: 400px;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  transition: all 0.3s ease;
}

.bottle-wrapper:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.2));
}


.bottle-cap {
  width: 60px;
  height: 40px;
  border-radius: 15px 15px 8px 8px;
  margin: 0 auto 5px;
  position: relative;
  z-index: 5;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.3);
}

.cap-highlight {
  position: absolute;
  top: 5px;
  left: 8px;
  right: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}

.cap-shadow {
  position: absolute;
  bottom: -2px;
  left: 2px;
  right: 2px;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
}



.bottle-body {
  width: 100px;
  height: 250px;
  margin: 0 auto;
  border-radius: 15px 15px 0 0;
  position: relative;
  z-index: 3;
  box-shadow: inset 0 10px 0 rgba(255, 255, 255, 0.2);
}

.body-highlight {
  position: absolute;
  top: 20px;
  left: 15px;
  width: 12px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  filter: blur(2px);
}


.body-shadow {
  position: absolute;
  bottom: 10px;
  right: 15px;
  width: 8px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  filter: blur(3px);
}


.bottle-bottom {
  width: 100px;
  height: 75px;
  margin: 0 auto;
  border-radius: 0 0 25px 25px;
  position: relative;
  z-index: 2;
  box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.2);
}

.bottom-highlight {
  position: absolute;
  top: 5px;
  left: 15px;
  width: 8px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  filter: blur(1px);
}

.bottom-shadow {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 15px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 15px 15px;
  filter: blur(2px);
}


.bottle-shine {
  position: absolute;
  top: 50px;
  left: -20px;
  width: 3px;
  height: 200px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 30%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.4) 70%,
    transparent 100%
  );
  border-radius: 2px;
  filter: blur(1px);
  z-index: 10;
  animation: shine 3s ease-in-out infinite;
}


.color-info {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.color-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}

.color-swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

@keyframes shine {
  0%, 100% { opacity: 0.3; transform: translateX(0); }
  50% { opacity: 0.8; transform: translateX(5px); }
}


.bottle-preview[data-size="small"] .bottle-wrapper {
  width: 80px;
  height: 280px;
}

.bottle-preview[data-size="large"] .bottle-wrapper {
  width: 150px;
  height: 500px;
}

@media (max-width: 768px) {
  .bottle-wrapper {
    width: 100px;
    height: 350px;
  }
  
  .bottle-body {
    width: 85px;
    height: 220px;
  }
  
  .bottle-bottom,
  .bottle-body {
    width: 85px;
  }
  
  .bottle-cap {
    width: 50px;
    height: 35px;
  }
  
  .bottle-neck {
    width: 38px;
  }
}
</style>