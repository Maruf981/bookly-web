// Минимальный service worker — нужен, чтобы браузер предложил "Установить"
// личный кабинет как приложение. Офлайн-кэширование пока не делаем,
// чтобы не усложнять и не рисковать показом устаревших данных.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Просто пропускаем все запросы напрямую в сеть — этого достаточно,
  // чтобы страница считалась "PWA-совместимой"
  event.respondWith(fetch(event.request));
});