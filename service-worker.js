/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "abd4d78a66f16f95f3f0f955b7724e9e"
  },
  {
    "url": "assets/css/0.styles.4bd91579.css",
    "revision": "69ab6df2283a248e5635c7a9610fe41f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6aeb5f32.js",
    "revision": "4cba2a33cd915c4c4a3e1ce379432587"
  },
  {
    "url": "assets/js/11.0aeb7ad9.js",
    "revision": "774139c7a4399b485bc97c91cedde866"
  },
  {
    "url": "assets/js/12.17c33f58.js",
    "revision": "aef8967186a834876f907ac1cfaa7ccd"
  },
  {
    "url": "assets/js/13.7db2c4ea.js",
    "revision": "ad9bc81b71bce1753638c91930257a8e"
  },
  {
    "url": "assets/js/14.2fb6aff6.js",
    "revision": "a9b6696cd642354d993e308f5482468e"
  },
  {
    "url": "assets/js/15.50dcee51.js",
    "revision": "44e411191f66490982e8318423bf011e"
  },
  {
    "url": "assets/js/16.98305130.js",
    "revision": "e47089665bf3114f5ebd7ec028164e64"
  },
  {
    "url": "assets/js/17.85589ceb.js",
    "revision": "82d154442e8a671bc24d8c6f87a19f8b"
  },
  {
    "url": "assets/js/18.0d846b4e.js",
    "revision": "b67e50f9bf6d8bd913dea170364f65f5"
  },
  {
    "url": "assets/js/19.1a663e73.js",
    "revision": "c8f2378b8ec317abb4476c383ac612ce"
  },
  {
    "url": "assets/js/2.8b5d6ce7.js",
    "revision": "f212df4bee9dc302e94af52716e97b9b"
  },
  {
    "url": "assets/js/20.c63d800e.js",
    "revision": "32f08248f27b6aa192356e74fbc24c17"
  },
  {
    "url": "assets/js/21.49227688.js",
    "revision": "980c70b55c232e3ab0fedeea381e5895"
  },
  {
    "url": "assets/js/22.077c5153.js",
    "revision": "3fc4822323071cf53f9c61a10e4ffcbf"
  },
  {
    "url": "assets/js/23.faf1ef16.js",
    "revision": "8e99f9da819487f4b6a004a0abd45633"
  },
  {
    "url": "assets/js/24.5fda670e.js",
    "revision": "12e6b6b769b3e2da33478ecf89a6c386"
  },
  {
    "url": "assets/js/25.9477ed22.js",
    "revision": "e687a125eacc9432a517e134ccea8011"
  },
  {
    "url": "assets/js/26.20411f30.js",
    "revision": "b4df321a06d187ad401aabf3b0aca9bd"
  },
  {
    "url": "assets/js/27.f54dabe1.js",
    "revision": "ac1e017f80a50d949c50c427139033ef"
  },
  {
    "url": "assets/js/28.560b15a9.js",
    "revision": "8a771286f56a07a6910098ff2a377cfa"
  },
  {
    "url": "assets/js/29.9b340e06.js",
    "revision": "00e53a6bd0715a92d7947622c64e4427"
  },
  {
    "url": "assets/js/3.312d4ca0.js",
    "revision": "7b1a1649fb5264b6af51225dd70f47e7"
  },
  {
    "url": "assets/js/30.4c90e651.js",
    "revision": "4698a5654a1f0309b2bd9bf42b291b2c"
  },
  {
    "url": "assets/js/31.4bbc609a.js",
    "revision": "818a4df96c182408b84d6f5c11320ce1"
  },
  {
    "url": "assets/js/32.85956fc4.js",
    "revision": "e4184d0daa24b2d47795390c0a467814"
  },
  {
    "url": "assets/js/33.09536258.js",
    "revision": "b3b333bc8b9adaa1b3f809c7e9eb2801"
  },
  {
    "url": "assets/js/34.b039d28e.js",
    "revision": "aedfdc21d550985e16f6a32050cfed15"
  },
  {
    "url": "assets/js/35.6d74e481.js",
    "revision": "6b264fe8a5442541dda11d7875e0024e"
  },
  {
    "url": "assets/js/36.d3e933e2.js",
    "revision": "7610b4b3a8c36854afd783316d22c122"
  },
  {
    "url": "assets/js/37.3382c467.js",
    "revision": "50e150e1a3228f13f0ab965a11b20bd8"
  },
  {
    "url": "assets/js/38.1c87198a.js",
    "revision": "bcadeb785dc657c147c1d1ff905b5c59"
  },
  {
    "url": "assets/js/39.18e0c6c0.js",
    "revision": "71ba68d1406297386d0e7e50f3a74a38"
  },
  {
    "url": "assets/js/4.3b2aee18.js",
    "revision": "f798a00b8de8a4293c3c5e67c0dafd60"
  },
  {
    "url": "assets/js/40.6772494f.js",
    "revision": "244ad7621a5347b2038ff48ab914fddf"
  },
  {
    "url": "assets/js/41.df4e2865.js",
    "revision": "d6ac1d015a4294ce7a586fcd608daabb"
  },
  {
    "url": "assets/js/42.ed59d9a4.js",
    "revision": "0d75b998c035476ce4df1a2bc597852a"
  },
  {
    "url": "assets/js/43.4848b590.js",
    "revision": "4d6c6ef6f12ec2fb959c20dae5d7781e"
  },
  {
    "url": "assets/js/44.e36f93b6.js",
    "revision": "0e71efdc5bc78706c767e68eb0aff1fd"
  },
  {
    "url": "assets/js/45.8b2c9aab.js",
    "revision": "3e76764e2f976c292c4313c0b984632f"
  },
  {
    "url": "assets/js/46.c4dd4e04.js",
    "revision": "60fa0eed0e3ffdb89f55117053a5b23c"
  },
  {
    "url": "assets/js/47.5979f068.js",
    "revision": "8e2a7a06359c142a3dc49bbd6abdd99b"
  },
  {
    "url": "assets/js/5.0bc640bb.js",
    "revision": "3df88a897eeff833eed12a10dfb4e494"
  },
  {
    "url": "assets/js/6.6d836341.js",
    "revision": "e1add17cda2178d19cb73e26e2a2aadc"
  },
  {
    "url": "assets/js/7.2a4694dd.js",
    "revision": "1955ab7640ced79153851b5a2d5223f9"
  },
  {
    "url": "assets/js/8.969b6633.js",
    "revision": "2275a2364c3dae329114a35264d2d079"
  },
  {
    "url": "assets/js/9.a7023764.js",
    "revision": "f3a3c6f3cebbfe3f3b1f93638dbb1d9b"
  },
  {
    "url": "assets/js/app.6f6f1152.js",
    "revision": "18876fd8333ab8420d1d334e355a5e66"
  },
  {
    "url": "guide/browser.html",
    "revision": "7151563d2d0a6e49d13aec9b324fd597"
  },
  {
    "url": "guide/computer-vision.html",
    "revision": "8ae00c319cb3d5610e01bd85395dddc0"
  },
  {
    "url": "guide/contributing.html",
    "revision": "aee2351707453b865829bfc4356d6359"
  },
  {
    "url": "guide/coverage.html",
    "revision": "96ea35d1a770dedd7e8c021b1d27c5fb"
  },
  {
    "url": "guide/debugging.html",
    "revision": "16a6fb183aed0d1b1c9dfdccb7844d9c"
  },
  {
    "url": "guide/environment-setup.html",
    "revision": "cb6a874fc2b00591523f61d437555cbe"
  },
  {
    "url": "guide/faq.html",
    "revision": "9e52e186f3a62d54551922dd8b44ece4"
  },
  {
    "url": "guide/helpful-settings.html",
    "revision": "2ac579f2e2f2020e6cd47566e2e847fc"
  },
  {
    "url": "guide/index.html",
    "revision": "fddb15a2e0b7670a1f29bcf2052d09b4"
  },
  {
    "url": "guide/java.html",
    "revision": "9659095be2dfdc1735f0687b7cfe9499"
  },
  {
    "url": "guide/marmot.html",
    "revision": "e13930cda2968a04d54156f06afedd6a"
  },
  {
    "url": "guide/monkey-testing.html",
    "revision": "1cb1d28fce95c3aeecfd365707628262"
  },
  {
    "url": "guide/nodejs.html",
    "revision": "7ee1d7a0948b6e4287a1a96c8b8504c0"
  },
  {
    "url": "guide/python.html",
    "revision": "0cdb8cd3cc182908be9184b36a2ad719"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "828f8e4c97fc9124bee7a55d9dc8266d"
  },
  {
    "url": "guide/recorder.html",
    "revision": "f8b34369fe760b7cf49dc521be5a63a3"
  },
  {
    "url": "guide/roadmap.html",
    "revision": "30ef7bc6bee5a6e554ba19036062dfc7"
  },
  {
    "url": "guide/run-with-docker.html",
    "revision": "4680c4031939de92e6cceafd91d9c17a"
  },
  {
    "url": "guide/run-with-scripts.html",
    "revision": "42741f4e0db37ad56f45e799f1e2400e"
  },
  {
    "url": "guide/support.html",
    "revision": "48fba06f649e3ad3d67fc2729739e530"
  },
  {
    "url": "guide/versioning.html",
    "revision": "9f1c5c8aec52629d4496d1130a9f9be8"
  },
  {
    "url": "index.html",
    "revision": "8668f99e8f6513cb3ce944bdd05530d5"
  },
  {
    "url": "logo/macaca.svg",
    "revision": "31b8461b3134caabf041a5c772e10a88"
  },
  {
    "url": "zh/guide/browser.html",
    "revision": "b4a1107cd345cfdaa914894951a99abd"
  },
  {
    "url": "zh/guide/computer-vision.html",
    "revision": "a1ca30408c448b1222db0e8509299b98"
  },
  {
    "url": "zh/guide/contributing.html",
    "revision": "b19f933c64ab7fa39e7614dfb6835a84"
  },
  {
    "url": "zh/guide/coverage.html",
    "revision": "7a571e7f54e98381decdc4a61fdc9a6e"
  },
  {
    "url": "zh/guide/debugging.html",
    "revision": "00545095d0655c18d042848ccf0ba1d2"
  },
  {
    "url": "zh/guide/environment-setup.html",
    "revision": "93f8af0abdde75b7f6ba2f995f18f75e"
  },
  {
    "url": "zh/guide/faq.html",
    "revision": "68ab49453d837f9fc4ab58905d5425d9"
  },
  {
    "url": "zh/guide/helpful-settings.html",
    "revision": "0d3217a8c4856ed38df4ee11f6dd7b07"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a55c04aa748c434d91c5c397cd1b4e7b"
  },
  {
    "url": "zh/guide/java.html",
    "revision": "45b4ce790cf850481c487a55d0757b8d"
  },
  {
    "url": "zh/guide/marmot.html",
    "revision": "9ae77785a7c3bab58cb2247b7ad6e64e"
  },
  {
    "url": "zh/guide/monkey-testing.html",
    "revision": "1875927c2a1db8e0130953123f2c6cc6"
  },
  {
    "url": "zh/guide/nodejs.html",
    "revision": "f7b7b4a145535087405c814183967524"
  },
  {
    "url": "zh/guide/python.html",
    "revision": "351227fc32c56615c7ffb69445d5beb3"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "a368163d5e0ee7813b13ae2dc5eb2c69"
  },
  {
    "url": "zh/guide/recorder.html",
    "revision": "c71a8b948e47501c7d13d4bb3d89c126"
  },
  {
    "url": "zh/guide/roadmap.html",
    "revision": "753a8f5ffcff12ce266937c873ca1f95"
  },
  {
    "url": "zh/guide/run-with-docker.html",
    "revision": "e49ebaf9d552777730e6e25752523859"
  },
  {
    "url": "zh/guide/run-with-scripts.html",
    "revision": "4b3d88226632557003b7d32ffc106afd"
  },
  {
    "url": "zh/guide/support.html",
    "revision": "96aa84b0f71b2182824212c87ede242a"
  },
  {
    "url": "zh/guide/versioning.html",
    "revision": "dd588a9230454aaaecd25d6373fca81f"
  },
  {
    "url": "zh/index.html",
    "revision": "c327ab3a6e976ba20820551697e606f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
