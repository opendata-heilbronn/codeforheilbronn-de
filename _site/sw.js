const version = '20180408011653';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/2018/04/02/CFHN-Community-StandUp.html","/2018/03/30/copter-repair-day.html","/2018/03/07/smart-city-heilbronn-hackathon.html","/2018/02/23/open-data-day-heilbronn.html","/2018/02/17/fablab-opening.html","/2017/11/23/coding-abend.html","/2017/11/23/coding-abend.html","/2017/11/15/zweiter-softwareclub.html","/2017/11/14/34C3-Hackathon.html","/2017/11/09/slammaster-ui-entwuerfe.html","/about","/badges","/categories/","/events","/","/oldstyles/main.back","/projects","/satzung","/verein","/manifest.json","/assets/search.json","/assets/styles.css","/scHack1","/schack1","/sc-hack-v1","/180307","/bd502","/bd501","/redirects.json","/feed.xml","/sitemap.xml","/robots.txt","/uploads/CodeForHeilbronn.svg", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
