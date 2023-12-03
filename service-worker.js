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
        '/icons/art-svgrepo-com.svg',
        
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
