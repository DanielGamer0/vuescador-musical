<template>
  <div v-if="pista.album" class="container">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image"><img :src="pista.album.images[0].url"></p>
          <!--<p class="buttons"><a class="button is-primary is-large">
            <span class="icon" @click="seleccionarPista">▶</span>
          </a></p>-->
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">{{ pista.name }}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(valor, clave) in pista" :key="clave">
                    <li>
                      <strong>{{ clave }}</strong>:&nbsp;<span>{{ valor }}</span>
                    </li>
                  </ul>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item"></a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'DetallePista',
  /*
  data () {
    return {
      audio: {}
    }
  },
  */
  methods: {
    traerPista () {
      const identificacion = this.$route.params.identificacion
      // const token = await servicioPista.tokenDeConsulta
      // this.audio = await servicioPista.obtenerPistaPor(identificacion, token)
      if (!this.pista.id || this.pista.id !== identificacion) {
        // No se necesita recargar nuevamente la pista con el mismo id
        this.obtenerPistaPorId(identificacion)
          .then(() => console.log('Pista cargada 🎶'))
      }
    },
    ...mapActions(['obtenerPistaPorId'])
  },
  created () {
    this.traerPista()
  },
  // mixins: [mixinPista],
  computed: {
    ...mapState(['pista']),
    ...mapGetters(['titulo'])
  }
}
</script>

<style scoped>
.column {
  margin: 20px;
}

/*.button {
  margin-top: 20px;
}*/
</style>
