<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-start">
            <div class="navbar-item">
              <strong>📻 Vuescador Musical</strong>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <router-link to="/">Buscar 🕵</router-link>
            </div>
            <div class="navbar-item">
              <router-link :to="{name:'sobre-la-app'}">Sobre la app 💽</router-link>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Vuescador Musical</h1>
        <h2 class="subtitle">¡🕺 buscador de canciones vue-nísimas 💃!</h2>
        <reproductor/>
      </div>
    </div>
  </section>
</template>

<script>
import Reproductor from '@/componentes/Reproductor'

export default {
  components: { Reproductor }
}
</script>
