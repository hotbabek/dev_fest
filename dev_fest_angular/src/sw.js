self.addEventListener('install', event => {
    console.log('Installation du Service Worker...');
    });
    self.addEventListener('activate', event => {
    console.log('Activation du Service Worker...');
    });
window.addEventListener('fetch', (e) => {
   
  });

  self.addEventListener('activate', event => {
    console.log('Activating new service worker...');
    const cacheWhitelist = [STATIC_CACHE_NAME];
    // suppression des caches excepté le cache courant (STATIC_CACHE_NAME)
    event.waitUntil(
    caches.keys().then(cacheNames => {
    return Promise.all(
    cacheNames.map(cacheName => {
    if (cacheWhitelist.indexOf(cacheName) < 0) {
    return caches.delete(cacheName);
    }
    })
    );
    })
    );
  });