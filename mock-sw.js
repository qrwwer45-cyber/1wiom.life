// Mock Service Worker for CAVEMINES
// This is a no-op service worker that doesn't actually cache anything

self.addEventListener('install', function(event) {
  console.log('CAVEMINES: Service Worker installing');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('CAVEMINES: Service Worker activating');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Let all requests pass through without caching
  event.respondWith(fetch(event.request));
});

console.log('CAVEMINES: Mock Service Worker loaded');
