import Buscador from '@/componentes/Buscador'
import AcercaDe from '@/componentes/AcercaDe'
import DetallePista from '@/componentes/DetallePista'

const rutas = [
  {
    path: '/',
    component: Buscador,
    name: 'buscador'
  },
  {
    path: '/acerca-de',
    component: AcercaDe,
    name: 'sobre-la-app'
  },
  {
    path: '/pista/:identificacion',
    component: DetallePista,
    name: 'pista'
  }
]

export default rutas
