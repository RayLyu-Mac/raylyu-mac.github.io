'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "ea6f0c210bf68c5de9b3b195b7615d38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b952e84637fd36e7b04517fca0198ec9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7661a3fcda821117f848bf7b8057016",
".git/logs/refs/heads/master": "f7661a3fcda821117f848bf7b8057016",
".git/objects/09/25b2d75fc1e52bc50261a4b5b67289261cc91a": "23728772d8f58a4cb103ca44ffd4bb7e",
".git/objects/12/01645ab38c2ae13b022072de93f8c20c1230b7": "d60e969c90566a831e2c9ec6d154de22",
".git/objects/15/c5e5cebd2b99297b253582237ea3c3c08c2ddd": "63f7a05fdccd7f0e709e60d0d55b1846",
".git/objects/1a/9d0014fabbcde308cad670343d594e0c6dce4a": "b9abe6c4c19bb390c6e0f887750d15c4",
".git/objects/1d/c20e2b5bfbef17d72ef1383a9c0b44da699118": "1f55cfe02c30b1a7a1a80d5709e86be0",
".git/objects/23/d9d4230f0569d9c3e9b42361f564af791e1924": "e5fdb6d6ad3711be371422f9a53b3b79",
".git/objects/26/ee3196844b137dac2417974977f94f6ff168f5": "06eea714ee72efd0bb1168d3ca860e2b",
".git/objects/2d/cb95cf8d4fa3cab8e711adbae5662bc499b038": "fc5886a2c6ccf694397ee70fd6fa96e9",
".git/objects/2e/ebb2d610211603c4b0da0a1d5194e5760ba781": "ea909c12a934cc6d83d99971fd558be6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/9f2969b0dda4a346320eed61e3276160e41a41": "83c223df8564695637211dd9e09f653f",
".git/objects/39/7d3c7302f6446befc800d0242377130a02b7e5": "902bb8b4d08f80970e3e87614bd33446",
".git/objects/3f/b85531bdc9f5da8cb175a6b296c72f76f432ff": "f8313add8b9fd53e51c096b042490f74",
".git/objects/41/ad71ef479368fa27f642314ac304ff7dbc2ec9": "136145025dbfcb6b021b46e9785dda9e",
".git/objects/44/e98711e0f535cded7fd721906fb0672eab113d": "72f1ec58cbeca3517d9822da0ececf78",
".git/objects/46/9699a941647293cf40db1b0735de332b3010de": "8df1cd2bcba422d3296b68c1dbaa37a0",
".git/objects/50/082a9c24baf1bed07dc435fe1dd8ba963dcab5": "9b485d84dea22b229a282b42e8151d55",
".git/objects/56/0273812d8442a2c58273dbe518856e79ae87f7": "7bcddbfd85ecaf0ff6c9143ea4665e4c",
".git/objects/56/fd068f507a0bf14442fb5aa29223bf75801b23": "5e3f3cbc997182f3908b6ef80def710e",
".git/objects/57/ed5fcb28063861b1c698e8cdf483b97970999c": "cc8c242002681d7c9e06755598730d41",
".git/objects/5a/a9fccb75434be9fe6057315b2cb17c7f278a38": "66964a402ed958625391bdc2eeb58c5e",
".git/objects/5e/6a36932fc544fc292f5e4676531bcdc52d392b": "0acea88a76a4f6818d5ee81fa15e3557",
".git/objects/62/4c4c254b4baec93dfd8deb4e63aa349369fd6d": "961d7c473ab8b6c3bcb63f9893c85cd8",
".git/objects/64/6540d54debda4b0f7b06c25139dfd7feae07e1": "346705c1f4a48a6aafaed2d2deef9d50",
".git/objects/66/db73a8cb621056875ae095319c8e9d637b8015": "9a8159d7949911c04307a39c9f90e264",
".git/objects/76/c7229d4141b112773fceeb30c68f59ed1d7253": "75525bb6f9c4604d0c1b53dab0d82b94",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/17848b600e7f93358ac166a7cfaa4d556ece73": "6bb7867de11c023b1fe74d1202002d0c",
".git/objects/86/eb9c19e87e2ecf8659fdef45236a1531c73729": "5fa51e5ee0363918a6c6a3e46a638113",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e8f281c2f03f2f00783e6ffeb3eb1c6e0e6e05": "75681d343fdaaa7c55198844ddc10cf2",
".git/objects/8f/ecb3cad7d24af6bcbc7a53fe236473bbd3d1c2": "b5a3576da6edce9d588811f7fae14e19",
".git/objects/94/ec7aff26b1ca2753ad201a0a5ff819c5ed6cb6": "72b51ab79f384c0331f9bff06f5fa8ab",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/1e74bcadc3d074553383102e9684c5338ddfcf": "1cf10276859751b531e24374bd5ab699",
".git/objects/a7/d942f34cd571e6a627a982333ce032c1611644": "43e6442edb6822ce30a314346799cd6e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/45a0562584e2492fbec685f130faeff72cad90": "ab7f84b72e2510ee6d251df73f27d74b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/c33ee2b16dc55c2a36b6b77821b713e792485b": "4aa94c7c9b1d1647be8b614d13be8243",
".git/objects/b3/c0940774271b098c2bd1f529446f3de7287feb": "aafd34247073c74e0c627572caa24e01",
".git/objects/b4/2bd570b130fcc5eff7180d8be203b3a1d9db06": "f69bddd3ff1c182cad2591d2fd493f9b",
".git/objects/b5/86e6ea694ae47c5ec48cf7fe35edccd933818c": "b85270fa4e0c108cfd443452a076eb90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c5a8265bc3c24d0261989bd3a6b1d710a70b2d": "0251e88090525a9a885a1a53654b2883",
".git/objects/be/b94edb3d14875d66c64f70e4c54a469359054d": "a43e676e4e4366d1e77904b1a2c5d2ea",
".git/objects/cb/e22b358f46eb1190d2a7d0809b4e09c6255a2e": "50a1fa06702642c3cd8552e72a30aff1",
".git/objects/cb/f23e897016447881ac3c9e7d0aad03d2365825": "d7918bf8309de91aebec09141ae65cfd",
".git/objects/d3/3e04f5d10a4bfabe9e9ad1f29bb8b613fa3888": "b3fec8b3f28c060f4a1467199e13ac87",
".git/objects/d3/8727762fbd0d661662ecbc1d90c76ce99532c0": "629ef2bc94a6d9ccc6db7994728c35c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2e9540a4f0ecb037066e6a68798f43ac6c0070": "396cb78bfa9d76aa4f51ad0b08d60fcd",
".git/objects/e0/4661720096ecde049b99f6c62124067f95e02a": "94a820ff7b7d106b1b901df60af968c1",
".git/objects/e2/fbeb1080727b7c101352cf83f70e1f7956b129": "90f61465751586ac776c03903d545407",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/2f02d47bb742d0bf26193094d79821be0b1883": "010f8224a0e181397b0e0630e664994e",
".git/objects/ea/bce1b9d10e80321f1f7ddf4878b6946d0a5a85": "a6fd238ef873f65e19cf7a0f6db8965a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/ddf2369e306eb9eda4801b1e4d1a4802a464b3": "3049e396a3ff07e74740c5fd256a67e4",
".git/objects/ef/2d6c4f7febfd28274c6a8ebf18eac1e51912f3": "c1c9b696d708d836dd1edbc97f49aa3f",
".git/objects/f4/376bac0c0a9f8238a2bde88e2fe27e306bcd18": "c8ac3a60285c43f2020267487cb0b191",
".git/objects/fb/6f0e877474f11fd6c2f4bc018724f06f93b269": "588ba07361acdbce0015b06e9f3749b1",
".git/refs/heads/master": "b137f808c0895373b17690aed240e63d",
"assets/assest/back.png": "7ae3da4ea9c555d2bec701ba1b0ad6cd",
"assets/assest/city.png": "97121d2293489f68b6f0e2ed23e51930",
"assets/assest/citypic/hamilton/1.png": "ed8b371334adf411b03010d973360188",
"assets/assest/citypic/hamilton/2.png": "210b353175d046b935a267768bd39730",
"assets/assest/citypic/hamilton/3.png": "beccf8638a93d1f01c22d55cd59734e7",
"assets/assest/citypic/hamilton/4.png": "ee3993f637f4e749818575850858c11e",
"assets/assest/citypic/hamilton/5.png": "ebfdd9e65dc41f61673adb6cd929c202",
"assets/assest/citypic/hamilton/6.png": "57e30edd0dd3d0c3823b5ccf637cf68e",
"assets/assest/citypic/hamilton/cover.png": "84d84b8e57e94434a1580b7b6eea0b4f",
"assets/assest/citypic/jinhua/1.png": "835baa159761338741b82c5027fb21b9",
"assets/assest/citypic/jinhua/11.png": "b2c97cf071e3565ad8cb58a7a7dd4e27",
"assets/assest/citypic/jinhua/12.png": "ebd1b4ac6a9a7d5712d38866b282e961",
"assets/assest/citypic/jinhua/13.png": "a57e2f62eb998d345b812668f23a3ba3",
"assets/assest/citypic/jinhua/14.png": "32fe4e8a23f0dfe6ee0ab3e443377246",
"assets/assest/citypic/jinhua/15.png": "43cafa5e193468a0ae35cfabfde1f5cf",
"assets/assest/citypic/jinhua/2.png": "e870e6654d920e783e017544adb42bc5",
"assets/assest/citypic/jinhua/3.png": "ecae645cef170f5046913baa53c53107",
"assets/assest/citypic/jinhua/31.png": "18b9f83573a92406d547215e300a0ab4",
"assets/assest/citypic/jinhua/32.png": "c68b681bd52d92daec71d4e5b59cc116",
"assets/assest/citypic/jinhua/33.png": "6f7c78de8afd3be95e90f22a3002d93d",
"assets/assest/citypic/jinhua/34.png": "509c48f6e24b408432d2b847b0f62f5d",
"assets/assest/citypic/jinhua/35.png": "abdaa88d46effe7f567cd05f6f2fa5e9",
"assets/assest/citypic/jinhua/36.png": "209a47b1a9fd41b2cac0938f9694b37a",
"assets/assest/citypic/jinhua/4.png": "3ac7f73ebaa0a060a7edff057c55c7d0",
"assets/assest/citypic/jinhua/41.png": "71114e017886c8baf1f963139ca803d1",
"assets/assest/citypic/jinhua/42.png": "b23727a6bd1be1550faf61cf3aa18bd9",
"assets/assest/citypic/jinhua/43.png": "d87743a7354d5fccb70c1779b95a4193",
"assets/assest/citypic/jinhua/44.png": "2913d8849ea75610dac3b9a9b6261e67",
"assets/assest/citypic/jinhua/45.png": "95c25ee93e921da0a4623a45fde66c2f",
"assets/assest/citypic/jinhua/46.png": "d6f8b412a7aee412eafc4503892823ac",
"assets/assest/citypic/jinhua/5.png": "1e41c9f509a7c3dd9df5746263aeb921",
"assets/assest/citypic/jinhua/53.png": "a64e0137cece7e66b43dc93e7133e73b",
"assets/assest/citypic/jinhua/54.png": "f8f23697615dad35d6c877e8df2e86a9",
"assets/assest/citypic/jinhua/55.png": "a2fe174a52075294056595b5f71f3514",
"assets/assest/citypic/jinhua/56.png": "bacb4f2abfc99d19c785424e1cbaee8f",
"assets/assest/citypic/jinhua/57.png": "b00d1b3f69c9fdded98678494494c710",
"assets/assest/citypic/jinhua/6.png": "1977310328f4a07f75dbcce7547f090b",
"assets/assest/citypic/jinhua/61.png": "cba6ceb65826dd461f20e04c4b01d556",
"assets/assest/citypic/jinhua/62.png": "dc24c47d9abcb23a66d4366ac160ce41",
"assets/assest/citypic/jinhua/cover.png": "28d3f0b65f59373ebf64fba172c5612a",
"assets/assest/citypic/yunnan/1.png": "b18f239aafc86733bb2b4372411055c3",
"assets/assest/citypic/yunnan/11.png": "3a5e1d8c6c9674654c766717efe4f667",
"assets/assest/citypic/yunnan/12.png": "51d3d983a15721687ffd49c68f6ea338",
"assets/assest/citypic/yunnan/13.png": "b28e18609cc1933b9f535ea74e010d90",
"assets/assest/citypic/yunnan/14.png": "8069c0181d18a97c5a59bb77bf2f3bdf",
"assets/assest/citypic/yunnan/15.png": "598735b1fe1da7574b27d96061cf62dc",
"assets/assest/citypic/yunnan/2.png": "22938bdf6ab3a679b55d9a4338d03f2c",
"assets/assest/citypic/yunnan/3.png": "d655eade3cd98237dbb4adf5dd6a855a",
"assets/assest/citypic/yunnan/31.png": "08a25a7507d48deccaa4ec93b345271c",
"assets/assest/citypic/yunnan/32.png": "28c30bdc5ea54f75bb25c18ec17045ef",
"assets/assest/citypic/yunnan/33.png": "929a8aa171cd179948f0356e0bc10be3",
"assets/assest/citypic/yunnan/34.png": "86ea3ffaaf08f6f88001b1087d5dbd99",
"assets/assest/citypic/yunnan/35.png": "08f248902fb2c7e405ffeba831e18eee",
"assets/assest/citypic/yunnan/36.png": "96b2e3c72bedce0cf981b6ca599c335c",
"assets/assest/citypic/yunnan/4.png": "4584adc236449c5fe8e3996f56238269",
"assets/assest/citypic/yunnan/41.png": "96d641d4039d7c6b7604fe613d4faaa2",
"assets/assest/citypic/yunnan/42.png": "6a43a250a03785077c4169754a73fb66",
"assets/assest/citypic/yunnan/43.png": "01109d2a6f587aaf33dc3bfbffc52dd7",
"assets/assest/citypic/yunnan/44.png": "8a6e2ffad3c94f53080703f94abb4184",
"assets/assest/citypic/yunnan/45.png": "e22f37d4830f155a892024e61b2691b5",
"assets/assest/citypic/yunnan/46.png": "45894720c9c78130e58ac26fac78a394",
"assets/assest/citypic/yunnan/5.png": "c1fb1d52e130a7c3b039a3f53da19479",
"assets/assest/citypic/yunnan/51.png": "b66ef69f1be3df4cdbace27c80153a16",
"assets/assest/citypic/yunnan/52.png": "9111d90637f758f1eaa3ea966d684c62",
"assets/assest/citypic/yunnan/53.png": "3115524bed616e160e659e9b6efc0fda",
"assets/assest/citypic/yunnan/54.png": "0c4d75fc09cc2221055c3c407b137e4f",
"assets/assest/citypic/yunnan/6.png": "679a60430a8b00175612639d8ec60996",
"assets/assest/citypic/yunnan/61.png": "dc9529d83e7239509add1977f5a4af74",
"assets/assest/citypic/yunnan/62.png": "07c04fd7c0de931ace06e3204e38c017",
"assets/assest/citypic/yunnan/63.png": "79f722b05977733708a6e18659771133",
"assets/assest/citypic/yunnan/64.png": "e73928127802ac747127b57edfdd8138",
"assets/assest/citypic/yunnan/65.png": "d2f8c31bde2a1dd0bfe82db04a4c8467",
"assets/assest/citypic/yunnan/cover.png": "52219d30c33eed6eae1e9ad2057886a3",
"assets/assest/nature.png": "84a2d64d7475f3340417c0669d7ac0b4",
"assets/assest/personal.jpg": "38431a7d3430693fc8073a3045861d5a",
"assets/assest/show.jpg": "e51ffdff03aad5c4aa3814e9b1fb1404",
"assets/assest/sky/day/1.png": "171c809ccbce1075a46c8b05b0f8ec65",
"assets/assest/sky/day/2.png": "e3f90c16fe82a1fa5869cee9423d387f",
"assets/assest/sky/day/3.png": "71724adc446222e4c935d3baa69fcfef",
"assets/assest/sky/day/cover.png": "a3f90a2cbbaffdb8c99bb60e10033d93",
"assets/assest/sky/Eve/1.png": "d1febbbf7d6a317c623b0d21519163d3",
"assets/assest/sky/Eve/2.png": "5a6c350265063882ccc9b3c33c3b89f4",
"assets/assest/sky/Eve/3.png": "1bd864e6dd37c3599595659555ec7416",
"assets/assest/sky/Eve/cover.png": "abfa59f64f09d68bcf0a272beba74eb5",
"assets/assest/sky/twilight/1.png": "df0b4f74d1a90255a233e6a317a0d460",
"assets/assest/sky/twilight/2.png": "515de583cd650a0c7ed97ac8584560f0",
"assets/assest/sky/twilight/3.png": "8b6d6012453a9783e552b24b2568c2fc",
"assets/assest/sky/twilight/cover.png": "195b46f5f90ea8c0a4dd47d0ee56622b",
"assets/assest/sky.png": "56695595611a86faea7f982ce55a2b84",
"assets/AssetManifest.json": "c81fd81ef66b97896cc3b01acba18b99",
"assets/font/SHOWG.TTF": "d66fa62dabed66f2226a1b2d17da0579",
"assets/FontManifest.json": "187c00c944ba738ca5aedaa3959d4c62",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "35e22cc72259c229009e63f5ac595fd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b047da2ec234d07422538b4d54a1ce4",
"/": "2b047da2ec234d07422538b4d54a1ce4",
"main.dart.js": "4be2728cef0ffe195531084159459536",
"manifest.json": "29d55a3e9f1a2093ae520af4b950b153",
"version.json": "716b89ca9adb017701376a7b8030b0c7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
