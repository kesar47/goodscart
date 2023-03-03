var staticCacheName = "pwa";
self.addEventListener("fetch", function (event) {
console.log("Service Worker Has been Enabled");
});
self.addEventListener("install", function (e) {
e.waitUntil(
caches.open(staticCacheName).then(function (cache) {
return cache.addAll(["/img/cat-4.jpg"]);
})
);
});
self.addEventListener("install", function (e) {
e.waitUntil(
caches.open(staticCacheName).then(function (cache) {
return cache.addAll(["/css/style.css"]);
})
);
});
self.addEventListener("install", function (e) {
    e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(["/img/vendor-1.jpg"]);
    })
    );
    });
    self.addEventListener("install", function (e) {
    e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(["/contact.html"]);
    })
    );
    });
    self.addEventListener("install", function (e) {
    e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(["/index.html"]);
    })
    );
    });
    self.addEventListener("install", function (e) {
    e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(["/js/main.js"]);
    })
    );
    });
    self.addEventListener("install", function (e) {
    e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(["/img/vendor-2.jpg"]);
    })
    );
    });
    self.addEventListener("fetch", function (event) {
    console.log(event.request.url);
    event.respondWith(
    caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
    })
    );
});
self.addEventListener("fetch", function (event) {
console.log("Service Worker Has been Enabled");
});