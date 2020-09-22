import Vue from 'vue'

const difuminacion = Vue.directive('difuminar', {
  bind (elemento, vinculate) {
    elemento.style.filter = !vinculate.value ? 'blur(1px)' : '(none)'
    elemento.style.cursor = !vinculate.value ? 'not-allowed' : 'inherit'
    elemento.querySelectorAll('button').forEach(boton => {
      if (!vinculate.value) {
        boton.setAttribute('disabled', true)
      } else {
        boton.removeAttribute('disabled')
      }
    })
  }
})

export default { difuminacion }
