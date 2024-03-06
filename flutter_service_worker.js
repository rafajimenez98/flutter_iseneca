'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "478c4565966c3422b3e9265e5f7f7001",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "89454f850927573d890a02760233a218",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "598c4101af7bceedad5fbf2847b5aa0b",
".git/logs/refs/heads/main": "90d31911c831a22e762cbfb809c2b326",
".git/logs/refs/remotes/origin/main": "7d506a6f861ba604f22761203a50a432",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/0d/46b9b55d5797013b59413fb79f2eaba3b4bf10": "11a8c4004cee071c490a2036d1e96a87",
".git/objects/13/d5c1756326fce1ef2728dc69e7a6eaf35115b2": "95a16879302b39afa0ae00f33f230d95",
".git/objects/1a/bde3a4e0640c03c6995b9a56e38168fd50ecf3": "c9dcfc9e213a6db430918b090aa539ba",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/de1e32344a0770248964d23a000b8a3cbdae3b": "3c77fdb417500364a2649f7e5d09a1e8",
".git/objects/37/9fae642bb96790f1b785cca8a7289dc465dcbb": "d7b15ace7ffe1af40b48ee9b3ab86414",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/5bdcd1eb433f0a91da9d9a79a23e5e2af75dcc": "f839c27f3d4572584abfb6236d2e54b1",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/41/acdb3c984cd8e109462e3dde627398a227b43c": "2d84cc0bf03690579d8a396946db067c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/4aa99e0b1c1a570d9a7ec4e20b167c4b71fc00": "0f08b0d7953b8c532299388bcc45a336",
".git/objects/4c/afb4bd43ba04da714a3889e1f7053273f6a1e9": "d57cadf6036346ac7ca8c40b5a7ea429",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/5e/56e5d1042265b3c7b3f17934d8d8bce6e8c82d": "61358bf53c6530b2743f39037376eea8",
".git/objects/83/07ac227ef8316c6cdf9af2912295b1f2c729d3": "d10c61eb8ac475dffc549631f19f59a6",
".git/objects/87/6571c1e6060ed353acf5d045b0e61c51c35c77": "167981f775df4ba4a6fb850ff0b5468d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9d5b23697ef95beef02a55d58caea6fda84679": "932f6db24e119e96529c3b9c232cb011",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/3320acee108fbc1eebd396ee133af51af38e01": "069805fab5ce882d109574d145b0b0bb",
".git/objects/9f/e5f9003a3674dcd8fa10947c34c063ddb8e77e": "feffe377f4c9be47b8e6cf5dca14225f",
".git/objects/a0/3cd8890715e8c79c82c7570aeb5b92911d025f": "c4669e66197235e63bbbaad8fcb00588",
".git/objects/b4/79f939a99f526ea235fda9e8db6c4cbf044233": "923813a47e0509bb2a2d162ebcb47e4b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a0cbabb742b979795b1d237f073af8848f5ab4": "54b19a20159728726f9c90bc36322697",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/34efce6a1875d4a2341c7242e8e4cc16357ef5": "57d86fec432335a0f7c67f07b174be28",
".git/objects/be/339c56677f7c4957d2b99b721d1e4279764c33": "8e6ea9e6a5a640c9e4310345e38c4cbd",
".git/objects/c4/8983f39b7ac141a468b4ddfe443be572d50e4b": "1a999bc4c505f96455ac3a6069c65d43",
".git/objects/c6/f07994d91ad10df3e555f5caf7e2a56d7bfa2c": "f7337d981b9a63d433365abd4df812f5",
".git/objects/d1/6cf1250a6af73e0949375f3ec7ca234d09d324": "ab0bb8fd127761d1c3d3719c29302ea4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/b2824b80c7a42b1ea766d468f32c57bcac893e": "2115dc9dbc898315696d58278e2b9611",
".git/objects/e8/f072491dd535ad16330cf242edc1d69684cbcb": "3f6f017cdb5550840422ea1c36428d13",
".git/objects/e9/5a4b74cd4a7d63e8b06bb173b6fd0e4f00f21d": "ad09a8311036bec3c123346fde8a8ffd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/d3b0114250338911b2f26a943dd33078328845": "04adfca35e71df628de587c98547e20d",
".git/objects/f1/53c9571ac0d6feaa83d3313e35acf3cf49d247": "a3d433fbcd6add30a5632d547d52dbce",
".git/objects/f1/f9f80a7b53f5846344677ca6962c4a03cefbca": "8e5d55f29b054a7ac6f66bba25fdebf8",
".git/objects/fa/3b6ce9f752f8ae8280be964b748b1304b4c7d8": "1b14de498c2388cc150f951a3251ab64",
".git/refs/heads/main": "123d762906fc8bb36470826d60584a09",
".git/refs/remotes/origin/main": "123d762906fc8bb36470826d60584a09",
"assets/AssetManifest.bin": "2db3a6be41a2c1bda8849c83abfd088f",
"assets/AssetManifest.bin.json": "34ff783404fd0371344e0714d09f7908",
"assets/AssetManifest.json": "7ed13d318e87a9cb9c6bbf0451adfeba",
"assets/assets/images/alumno.jpg": "7566bb8209742522f8f4dc5488750129",
"assets/assets/images/alumno0.jpg": "5cc4cd02b7e875a082e5c35f9362ba6d",
"assets/assets/images/alumno1.jpg": "b4157f7118e6935fba1c8f66f8f1237e",
"assets/assets/images/alumno10.jpg": "d3926083cfcc98f588f9d8e2cf75f690",
"assets/assets/images/alumno2.jpg": "fbc192e87d127ed2e3d3be778e8dbcf0",
"assets/assets/images/alumno3.jpg": "8df927ca550122bdac58e1c03011c2e2",
"assets/assets/images/alumno4.jpg": "6c52d018563bbb9ba7dd92f082b6aee4",
"assets/assets/images/alumno5.jpg": "8d47408a9486494a529a61126afd0da3",
"assets/assets/images/alumno6.jpg": "674ab099788ebab02e938758098579c9",
"assets/assets/images/alumno7.jpg": "eb21ba7e82f4479607526510bde18596",
"assets/assets/images/alumno8.jpg": "0cc1b168e3a59de9938bd9a77dc4e445",
"assets/assets/images/alumno9.jpg": "547477104e952f085fbfc53a6f525632",
"assets/assets/images/corona.png": "920a15678a308ece74e84f9de894eff1",
"assets/assets/images/logo.png": "9ef012e6e0a5659b740ad53eaae9c211",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "2294525e711cb0fc30bf90fa38ca866e",
"assets/NOTICES": "fa442e5da7e917b1578664180a891335",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8ccb58f89779e2fd802db8932a55652",
"/": "e8ccb58f89779e2fd802db8932a55652",
"main.dart.js": "925704a3e599c1aaabd9b3fcef23fb25",
"manifest.json": "fae923ac60b3ef331afa6652c3f0d795",
"version.json": "3eaef9adebcd12605f21dff3fadd3992"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
