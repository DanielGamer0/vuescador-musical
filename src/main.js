import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import rutas from '@/rutas'
import filtros from '@/filtros'
import directivas from '@/directivas'
import almacen from '@/almacen'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(filtros)
Vue.use(directivas)

const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: enrutador,
  store: almacen
}).$mount('#app')
