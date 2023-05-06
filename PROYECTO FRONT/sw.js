;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_portafolioweb_wdev',
  urlsToCache = [
    './',
    './indexplano.html',
    './js/sw.js',
    './manifest.json',
    './css/styleplano.css',
    './doc/Hoja de vida William David Doria Alean.pdf',
    './img/icon/icon1024.png',
    './img/icon/icon512.png',
    './img/icon/icon384.png',
    './img/icon/icon256.png',
    './img/icon/icon192.png',
    './img/icon/icon128.png',
    './img/icon/icon96.png',
    './img/icon/icon64.png',
    './img/icon/icon32.png',
    './img/icon/icon16.png',
    './img/01.png',
    './img/02.png',
    './img/03.png',
    './img/04.png',
    './img/ccv.png',
    './img/down.png',
    './img/git.png',
    './img/insta.png',
    './img/linkedink.png',
    './img/logo.png',
    './img/photo.png',
    './img/up.png',
    './js/funtions.js',
    './js/sw.js',
    './js/script.js',
    'https://fonts.cdnfonts.com/css/bahnschrift',
  ]                              
//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})