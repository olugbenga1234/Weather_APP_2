// install event
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});

//cache files
var cacheName = "webapp-data";
var filesToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/bg.less",
  "/js/index.js",
  "/js/request.js",
  "/js/auto_complete.js",
  "/icons/celsius.png",
  "/icons/humidity.png",
  "/icons/logo.png",
  "/icons/wind.png",
];

//install event
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

//activation
self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetched resource " + e.request.url);
});
