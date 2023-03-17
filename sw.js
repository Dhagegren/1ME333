const cacheName = 'my-pwa-cache';
const filesToCache = [
    '/',
    '../sw.js',
    '../Manifest.webmanifest'
  ];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});