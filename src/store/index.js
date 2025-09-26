import { reactive } from 'vue'

export const COLORS = {
  cap: [
    { name: 'Rosso Fragola', hex: '#FF5722', gradient: 'linear-gradient(135deg, #FF5722, #E53935)' },
    { name: 'Blu Oceano', hex: '#2196F3', gradient: 'linear-gradient(135deg, #2196F3, #1976D2)' },
    { name: 'Verde Mela', hex: '#8BC34A', gradient: 'linear-gradient(135deg, #8BC34A, #689F38)' },
    { name: 'Giallo Sole', hex: '#FFEB3B', gradient: 'linear-gradient(135deg, #FFEB3B, #F57F17)' },
    { name: 'Viola Unicorno', hex: '#9C27B0', gradient: 'linear-gradient(135deg, #9C27B0, #7B1FA2)' },
    { name: 'Arancio Carota', hex: '#FF9800', gradient: 'linear-gradient(135deg, #FF9800, #F57C00)' },
    { name: 'Rosa Ciliegia', hex: '#E91E63', gradient: 'linear-gradient(135deg, #E91E63, #C2185B)' },
    { name: 'Turchese Mare', hex: '#00BCD4', gradient: 'linear-gradient(135deg, #00BCD4, #0097A7)' },
    { name: 'Lime Acido', hex: '#CDDC39', gradient: 'linear-gradient(135deg, #CDDC39, #AFB42B)' },
    { name: 'Indaco Notte', hex: '#3F51B5', gradient: 'linear-gradient(135deg, #3F51B5, #303F9F)' }
  ],
  body: [
    { name: 'Azzurro Cielo', hex: '#03A9F4', gradient: 'linear-gradient(135deg, #03A9F4, #0288D1)' },
    { name: 'Verde Bosco', hex: '#4CAF50', gradient: 'linear-gradient(135deg, #4CAF50, #388E3C)' },
    { name: 'Rosa Pastello', hex: '#F06292', gradient: 'linear-gradient(135deg, #F06292, #E91E63)' },
    { name: 'Giallo Banana', hex: '#FFC107', gradient: 'linear-gradient(135deg, #FFC107, #FF8F00)' },
    { name: 'Viola Lavanda', hex: '#BA68C8', gradient: 'linear-gradient(135deg, #BA68C8, #9C27B0)' },
    { name: 'Corallo Tropicale', hex: '#FF7043', gradient: 'linear-gradient(135deg, #FF7043, #D84315)' },
    { name: 'Acqua Marina', hex: '#26C6DA', gradient: 'linear-gradient(135deg, #26C6DA, #00ACC1)' },
    { name: 'Verde Menta', hex: '#66BB6A', gradient: 'linear-gradient(135deg, #66BB6A, #43A047)' },
    { name: 'Pesca Dolce', hex: '#FFAB91', gradient: 'linear-gradient(135deg, #FFAB91, #FF7043)' },
    { name: 'Blu Cobalto', hex: '#5C6BC0', gradient: 'linear-gradient(135deg, #5C6BC0, #3F51B5)' }
  ],
  bottom: [
    { name: 'Marrone Terra', hex: '#8D6E63', gradient: 'linear-gradient(135deg, #8D6E63, #5D4037)' },
    { name: 'Grigio Roccia', hex: '#78909C', gradient: 'linear-gradient(135deg, #78909C, #546E7A)' },
    { name: 'Verde Oliva', hex: '#9E9D24', gradient: 'linear-gradient(135deg, #9E9D24, #827717)' },
    { name: 'Blu Notte', hex: '#1A237E', gradient: 'linear-gradient(135deg, #1A237E, #0D47A1)' },
    { name: 'Bordeaux', hex: '#880E4F', gradient: 'linear-gradient(135deg, #880E4F, #AD1457)' },
    { name: 'Verde Smeraldo', hex: '#00695C', gradient: 'linear-gradient(135deg, #00695C, #004D40)' },
    { name: 'Oro Antico', hex: '#B8860B', gradient: 'linear-gradient(135deg, #B8860B, #FF8F00)' },
    { name: 'Prugna Scura', hex: '#4A148C', gradient: 'linear-gradient(135deg, #4A148C, #6A1B9A)' },
    { name: 'Ruggine', hex: '#BF360C', gradient: 'linear-gradient(135deg, #BF360C, #D84315)' },
    { name: 'Petrolio', hex: '#263238', gradient: 'linear-gradient(135deg, #263238, #37474F)' }
  ]
}

export const BOTTLE_PARTS = [
  { key: 'cap', name: 'Tappo', description: 'Scegli il colore del tappo della tua borraccia' },
  { key: 'body', name: 'Corpo', description: 'Seleziona il colore principale della borraccia' },
  { key: 'bottom', name: 'Fondo', description: 'Completa con il colore del fondo' }
]

export const store = reactive({
  configuration: {
    cap: COLORS.cap[0],
    body: COLORS.body[0], 
    bottom: COLORS.bottom[0]
  },
  
  currentStep: 0,
  
  setColor(part, color) {
    this.configuration[part] = color
  },
  
  getColor(part) {
    return this.configuration[part]
  },
  
  resetConfiguration() {
    this.configuration = {
      cap: COLORS.cap[0],
      body: COLORS.body[0],
      bottom: COLORS.bottom[0]
    }
    this.currentStep = 0
  },
  
  nextStep() {
    if (this.currentStep < BOTTLE_PARTS.length - 1) {
      this.currentStep++
    }
  },
  
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--
    }
  },
  
  getCurrentPart() {
    return BOTTLE_PARTS[this.currentStep]
  },
  
  isLastStep() {
    return this.currentStep === BOTTLE_PARTS.length - 1
  }
})