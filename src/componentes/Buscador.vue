<template>
  <main>
    <transition name="mover">
      <notificacion
        v-show="mostrarNotificacion"
        :tipo-notificacion="this.pistas.length > 0 ? 'is-success' : 'is-danger'"
      >
        <p slot="nota">
        <span v-if="this.pistas.length === 0">
          ❌ No se encontraron resultados 😕, intente nuevamente
        </span>
          <span v-else>
          ✔️Busqueda completada exitosamente 👍
        </span>
        </p>
      </notificacion>
    </transition>
    <transition name="mover">
      <cargador v-show="estaCargando"/>
    </transition>
    <section v-show="!estaCargando" class="section">
      <nav class="navbar has-shadow">
        <div class="container">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input
                v-model="consulta"
                class="input is-large"
                placeholder="Buscar canción 🎶"
                type="text"
                @keyup.enter="buscar"
              >
            </div>
            <div class="control"><a class="button is-info is-large" v-on:click="buscar">🔍</a></div>
            <div class="control"><a class="button is-danger is-large" @click="borrarConsulta">&times;</a></div>
          </div>
        </div>
      </nav>
      <div class="container"><p><small>{{ mensajeDeBusqueda }}</small></p></div>
      <div class="container resultados">
        <div class="columns is-multiline">
          <div v-for="pista in pistas" :key="pista.id" class="column is-one-quarter">
            <pista-musical
              v-difuminar="pista.preview_url"
              v-bind:audio="pista"
              v-bind:class="{'esta-activa': pista.id === pistaSeleccionada}"
              @seleccionar="asignarPistaSeleccionada(pista.id)"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import servicioDePista from '@/servicios/pista'
import PistaMusical from '@/componentes/Pista'
import Cargador from '@/componentes/compartidos/Cargador'
import Notificacion from '@/componentes/compartidos/Notificacion'

export default {
  name: 'Buscador',
  data () {
    return {
      pistas: [],
      consulta: null,
      estaCargando: false,
      pistaSeleccionada: null,
      mostrarNotificacion: false
    }
  },
  computed: {
    mensajeDeBusqueda () {
      return `🎵 encontradas: ${this.pistas.length} resultados`
    }
  },
  methods: {
    obtenerToken () {
      return servicioDePista.tokenDeConsulta
    },
    encontrarPistas (consultaMusica, tokenOAuth) {
      return servicioDePista.buscar(consultaMusica, tokenOAuth)
    },
    async buscar () {
      if (this.consulta) {
        this.estaCargando = true
        try {
          const token = await this.obtenerToken()
          // console.log(this.token)
          this.pistas = await this.encontrarPistas(this.consulta, token)
        } catch (excepcion) {
          this.consulta = null
          this.pistas = []
          console.log(excepcion)
        } finally {
          this.mostrarNotificacion = true
          this.estaCargando = false
        }
      }
    },
    asignarPistaSeleccionada (identificacion) {
      this.pistaSeleccionada = identificacion
      // console.log(this.pistaSeleccionada)
    },
    borrarConsulta () {
      this.consulta = null
    }
  },
  components: {
    PistaMusical,
    Cargador,
    Notificacion
  },
  watch: {
    mostrarNotificacion () {
      if (this.mostrarNotificacion) {
        setTimeout(
          () => {
            this.mostrarNotificacion = false
          },
          3000
        )
      }
    }
  }
}
</script>

<style>
.resultados {
  margin-top: 50px;
}

.esta-activa {
  border: 3px #23d160 solid;
}
</style>
