const mixinPista = {
  methods: {
    seleccionarPista () {
      /*
      this.$root.$emit('montar-pista', this.audio) // emite un evento global
      */
      this.$emit('seleccionar', this.audio.id)
      this.$store.commit('establecerPista', this.audio)
    }
  }
}
export default mixinPista
