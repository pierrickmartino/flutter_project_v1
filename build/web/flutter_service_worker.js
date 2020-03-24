'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "4d3697c5a436e99f4c390fd6aa5e9e6d",
"/assets/assets/flutter-icon.png": "8a50b602aa79b19775c22d02a290f51f",
"/assets/FontManifest.json": "3e80007992f75cecd90a93e76bb2e07a",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"/assets/LICENSE": "11ffa3cfa3613b97c8a57ae6ff74e095",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "dd82cb242bd8dcc23d154b117e16f570",
"/main.dart.js": "135ac2f47bcb2c3cedbd0e6fccd07005",
"/manifest.json": "82ec6ca316635e290c603dce40d8c131"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
