
 const CACHE_NAME = "expense-tracker-cache-v1";
const urlsToCache = [
    "index.html",
    "styles.css",
    "tracker.js",
    "manifest.json",
    "icon-192.png",
    "icon-512.png"
];

// Install Service Worker & Cache Files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("✅ Files Cached");
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch Cached Files for Offline Use
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});