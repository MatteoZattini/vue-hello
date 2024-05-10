const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'A belli',
      text: 'ciao',
      immagine: './img/01.webp'
    }
  },

  methods: {
    cambia() {
        console.log("spooderman")
    }
  }
}).mount('#app')