const cacheName = 'my-pwa-cache';
const filesToCache = [
    '/',
    '../sw.js',
    '/Manifest.webmanifest',
    '/IMG/dice2 copy.png',
    '/CSS/style.css',
    '/Javascript/sw-reg.js',
    '/Javascript/View.js',
    '/Javascript/Permission.js',
    '/Javascript/main.js',
    '/Javascript/Dice.js',
    '/Javascript/StartPage.js',
    '/Javascript/ChooseDicePage.js',
    '/Javascript/DicePage.js'
  ];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});