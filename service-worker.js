self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('my-pwa-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/search.html',
        '/search-results.html',
        '/css/search.css',
        '/css/index.css',
        '/searchicon-192.png',
        '/searchicon-512.png'
        
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