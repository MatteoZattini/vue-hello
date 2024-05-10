const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'A belli',
      text: 'ciao',
      immagine: './img/01.webp',
      immagine2: './img/02.webp',
      
    }
  },

  methods: {
    cambia() {
        console.log("spooderman")
        let x = document.getElementById("img1")
        let y = document.getElementById("img2")

        if(x.classList.contains("d-none")){
          x.classList.remove("d-none")
          y.classList.add("d-none")
        } else {
          x.classList.add("d-none")
          y.classList.remove("d-none")
        }

    }
  }
}).mount('#app')