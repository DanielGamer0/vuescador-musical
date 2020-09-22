import servicio from '@/servicios/spotify-web-api'

const urlServicio = servicio.urlSpotifyWebAPI
const tokenDeConsulta = servicio.obtenerTokenSpotifyWebAPI()

async function buscar (consulta, token) {
  const resultado = await fetch(`${urlServicio}search?q=${consulta}&type=track`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token }
  })
  const datos = await resultado.json()
  // console.log('Resultado: ' + JSON.stringify(datos))
  return datos.tracks.items
}

async function obtenerPistaPor (identificacion, token) {
  const respuesta = await fetch(
    `${urlServicio}tracks/${identificacion}`,
    {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token }
    }
  )
  const resultado = await respuesta.json()
  return resultado
}

export default {
  tokenDeConsulta,
  buscar,
  obtenerPistaPor
}
