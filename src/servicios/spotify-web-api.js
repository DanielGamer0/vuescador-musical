import ServicioSpotifyWebAPI from '@/servicios/configuracion'

const obtenerTokenSpotifyWebAPI = async () => {
  const resultado = await fetch(ServicioSpotifyWebAPI.urlParaCredencialesDelCliente, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(ServicioSpotifyWebAPI.idCliente + ':' + ServicioSpotifyWebAPI.secretoCliente)
    },
    body: 'grant_type=client_credentials'
  })
  const datos = await resultado.json()
  // console.log('Token: ' + JSON.stringify(datos))
  return datos.access_token
}

const urlSpotifyWebAPI = ServicioSpotifyWebAPI.urlWebAPI

export default {
  urlSpotifyWebAPI,
  obtenerTokenSpotifyWebAPI
}
