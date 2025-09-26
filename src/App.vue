<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <div class="logo">
          <h1>🌞 Sunnee Kids</h1>
          <p>Configura la tua borraccia speciale!</p>
        </div>
      </div>
    </header>
    
    <main class="app-main">
      <router-view />
    </main>
    
    <footer class="app-footer">
      <div class="container">
        <p>© 2025 Sunnee</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Quicksand', sans-serif;
  background: linear-gradient(135deg, #FFE082 0%, #FFAB40 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo h1 {
  color: #FF7043;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
  text-align: center;
}

.logo p {
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}

.app-main {
  flex: 1;
  padding: 0;
}

.app-footer {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 0;
  text-align: center;
  color: #666;
  font-weight: 500;
}

@media (max-width: 768px) {
  .logo h1 {
    font-size: 2rem;
  }
  
  .logo p {
    font-size: 1rem;
  }
  
  .app-main {
    padding: 20px 0;
  }
}
</style>