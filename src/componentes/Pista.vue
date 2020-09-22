<template>
  <div v-if="audio.album" class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :alt="audio.album.name" v-bind:src="audio.album.images[0].url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :alt="audio.album.name" v-bind:src="audio.album.images[0].url">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6"><strong>{{ audio.name }}</strong></p>
          <ul class="subtitle is-6" style="list-style-type: none">
            <li v-for="artista in audio.artists" :key="artista.id">{{ artista.name }}</li>
          </ul>
        </div>
      </div>
      <div class="content">
        <small>{{ audio.duration_ms | ms-a-tiempo }}</small>
        <nav class="level">
          <div class="level-left">
            <button class="level-item button is-primary" @click="seleccionarPista">
              <span class="icon is-small">⏯</span>
            </button>
          </div>
          <div class="level-left">
            <button class="level-item button is-warning">
              <span class="icon is-small" @click="irALaPista(audio.id)">🌎</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import mixinPista from '@/mixins/pista'

export default {
  name: 'PistaMusical',
  props: {
    audio: {
      type: Object,
      require: true
    }
  },
  methods: {
    irALaPista (identificador) {
      this.$router.push({
        name: 'pista',
        params: { identificacion: identificador }
      })
    }
  },
  mixins: [mixinPista]
}
</script>
