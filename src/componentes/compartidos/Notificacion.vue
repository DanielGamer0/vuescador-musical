<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification" v-bind:class="tipoNotificacion">
          <slot name="nota">notificar</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tipoNotificacion: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.notification {
  margin: 10px;
}
</style>
