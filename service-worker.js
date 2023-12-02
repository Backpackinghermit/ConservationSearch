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
        '/search.css',
        '/search-results.css',
        '/art-svgrepo-com.svg',
        
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
