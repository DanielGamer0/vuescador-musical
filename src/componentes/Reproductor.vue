<template>
  <div v-if="pista.album" class="content">
    <p class="is-128x128">
      <img :src="pista.album.images[0].url">
    </p>
    <p>
      <strong>{{ pista.name }}</strong>&nbsp;<small>[{{ pista.duration_ms | ms-a-tiempo }}]</small>
    </p>
    <p v-show="pista.preview_url">
      <audio class="reproductor" controls v-bind:src="pista.preview_url"/>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Reproductor',
  /*
    data () {
      return {
        pista: {}
      }
    },
    created () {
      this.$root.$on('montar-pista', (audio) => {
      // recibe un evento global y procesa
        this.pista = audio
      })
    },
  */
  computed: {
    ...mapState(['pista'])
  }
}
</script>

<style scoped>
img {
  width: 124px;
  border-radius: 50%;
}

/*.reproductor{
  height: 55px;
}*/
</style>
