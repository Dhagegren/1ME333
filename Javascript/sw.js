const cacheName = 'my-pwa-cache';
const filesToCache = [
  '/',
  '/Manifest.webmanifest',
  '/IMG/dice2 copy.png',
  '/CSS/style.css',
  'sw.js',
  'sw-reg.js',
  'View.js',
  'Permission.js',
  'main.js',
  'Dice.js',
  'StartPage.js',
  'ChooseDicePage.js',
  'DicePage.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});