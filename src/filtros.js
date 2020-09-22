import Vue from 'vue'

/* retorna el valor ingresado en milisegundos
 a tiempo en formato [minutos]:[segundos] */
const msATiempo = Vue.filter('ms-a-tiempo', function (miliSegundos) {
  if (!miliSegundos) return ''
  const minutos = Math.floor(miliSegundos / 60000)
  const segundos = (miliSegundos % 60000 / 1000).toFixed(0)
  return `${minutos}:${segundos}`
})

export default { msATiempo }
