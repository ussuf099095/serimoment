const CACHE_NAME = 'seri-moment';
const FILES_TO_CACHE = [
    "/assets/agar.jpeg",
    "/assets/bingka-bakar.jpeg",
    "/assets/Bolu-Coklat.jpeg",
    "/assets/bolu-ori.jpeg",
    "/assets/bolu-red.jpeg",
    "/assets/brown.jpeg",
    "/assets/brownies.jpeg",
    "/assets/icon-192.png",
    "/assets/icon-512.png",
    "/assets/kentang.jpeg",
    "/assets/kopi.jpeg",
    "/assets/kue-lapis.jpeg",
    "/assets/kukus.jpeg",
    "/assets/lekker-holland.jpeg",
    "/assets/mini.jpeg",
    "/assets/nyiur.jpeg",
    "/assets/pandan.jpeg",
    "/assets/pisang.jpeg",
    "/assets/pudding-tapai.jpeg",
    "/assets/pudding.jpeg",
    "/assets/tapai.jpeg",
    "/assets/zebra.jpeg"
  ];
  

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Pre-caching');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});