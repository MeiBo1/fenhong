self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('ah-calc-v1').then((cache) => cache.addAll([
    './', './index.html', './manifest.webmanifest'
  ])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});