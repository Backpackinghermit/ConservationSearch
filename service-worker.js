self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('my-pwa-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/index.css',
        '/css/style.css',
        '/js/script.js',
        '/search-results.html',
        '/css/search-results.css',
        '/searchicon.svg',
        
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== 'my-pwa-cache';
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

