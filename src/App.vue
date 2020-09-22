<template>
  <div id="app">
    <encabezado/>
    <router-view/>
    <p-d-p/>
  </div>
</template>

<script>
import PDP from '@/componentes/disenno/PieDePagina'
import Encabezado from '@/componentes/disenno/Encabezado'

export default {
  name: 'App',
  components: {
    PDP, // Pié de página
    Encabezado
  }
}
</script>

<style>
@import '~bulma/css/bulma.min.css';

.mover-enter-active, .mover-leave-active {
  transform: translateX(0);
  transition: all 0.5s linear;
}

.mover-enter, .mover-leave-to {
  transform: translateX(100%);
}
</style>
