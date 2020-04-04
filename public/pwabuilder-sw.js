//
//  Code is poetry
//  Created by Nick aka black.dragon74
//
//  This file creates and registers the service workers for my Portfolio PWA
//

// Unique cache ID
const CACHE = "nicks-portfolio-cache";

// The fallback page that lives on my server
const offlineFallbackPage = "offline-sw-page.html";

// Install PWA to the browser, open a cache and add the offline page to it
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            return cache.add(offlineFallbackPage);
        })
    );
});

// If fetch fails, show the offline page
self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fetch(event.request).catch(function () {
            // If for some reason, fetch fails, catch and show offline page but verify
            // That the request was to 'navigate' to a new 'document'
            if (
                event.request.destination !== "document" ||
                event.request.mode !== "navigate"
            ) {
                return;
            }

            return caches.open(CACHE).then(function (cache) {
                return cache.match(offlineFallbackPage);
            });
        })
    );
});

// If this event is fired, update the offline page, pwease?
self.addEventListener("refreshOffline", function () {
    const offlinePageRequest = new Request(offlineFallbackPage);

    return fetch(offlineFallbackPage).then(function (response) {
        return caches.open(CACHE).then(function (cache) {
            return cache.put(offlinePageRequest, response);
        });
    });
});
