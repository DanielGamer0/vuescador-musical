import Vue from 'vue'
import Vuex from 'vuex'
import servicioPista from '@/servicios/pista'

Vue.use(Vuex)

const almacen = new Vuex.Store({
  state: {
    pista: {}
  },
  mutations: {
    establecerPista (estado, pista) {
      estado.pista = pista
    }
  },
  actions: {
    obtenerPistaPorId (contexto, idPista) {
      servicioPista.tokenDeConsulta.then(tokenRespuesta => {
        return servicioPista.obtenerPistaPor(idPista, tokenRespuesta)
          .then(pistaRespuesta => {
            contexto.commit('establecerPista', pistaRespuesta)
            return pistaRespuesta
          })
      })
    }
  },
  getters: {
    titulo (estado) {
      if (!estado.pista.name) return ''
      return `${estado.pista.name} - ${estado.pista.artists[0].name}`
    }
  }
})

export default almacen
