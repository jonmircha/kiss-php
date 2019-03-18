;
//https://www.pwabuilder.com/serviceworker
//This is the service worker with the Cache-first network

//asignar un nombre y versión al cache
const CACHE_NAME = 'kiss-cache-v1',
  urlsToCache = [
    /* Add an array of files to precache for your app */
    'https://fonts.googleapis.com/css?family=Raleway:400,700',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyCMIT5lu.woff2',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0ITw.woff2',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqhPAMif.woff2',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
    'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
    'https://use.fontawesome.com/releases/v5.5.0/webfonts/fa-solid-900.woff2',
    'https://use.fontawesome.com/releases/v5.5.0/webfonts/fa-brands-400.woff2',
    'https://use.fontawesome.com/releases/v5.5.0/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css',
    './style.css',
    './script.js',
    './humans.txt',
    './sitemap.xml',
    '/img/favicon1024.png',
    '/img/favicon512.png',
    '/img/favicon384.png',
    '/img/favicon256.png',
    '/img/favicon192.png',
    '/img/favicon128.png',
    '/img/favicon96.png',
    '/img/favicon64.png',
    '/img/favicon32.png',
    './img/favicon.png',
    './img/apple-touch-startup-image.png',
    './img/apple-touch-icon.png',
    './img/logo.png',
    '/',
    '/acerca',
    '/contacto'
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
