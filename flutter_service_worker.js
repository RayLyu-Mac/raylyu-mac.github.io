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
"assets/assest/3Dprint/1.png": "3fa9270382e411ce9dcc7a344fc99bac",
"assets/assest/3Dprint/10.png": "5b76259fe0dc28e811ae0bed71771366",
"assets/assest/3Dprint/11.png": "da7e6b0e8706525d725b16a754c4712d",
"assets/assest/3Dprint/12.png": "51f28ac45fb4f2ba717bbf2989179cf7",
"assets/assest/3Dprint/13.png": "735e603669530eb0ea65629cd009facb",
"assets/assest/3Dprint/14.png": "53cb98f182413ac2feef8e014ca5f0cc",
"assets/assest/3Dprint/15.png": "5f714979a3edbcc25931b83b6b20623e",
"assets/assest/3Dprint/16.png": "2efb176f7887fed473b58e198182cc07",
"assets/assest/3Dprint/17.png": "fd5a5fb18d25ed6fce8b8bb7283d75bf",
"assets/assest/3Dprint/18.png": "416b445a8cfdad4096b23f979562e39b",
"assets/assest/3Dprint/19.png": "7adbab7d8b306655148a29484553498b",
"assets/assest/3Dprint/2.png": "cbf63136236b2bb5eb78dfd8f054b620",
"assets/assest/3Dprint/20.png": "024f94d916e9e327b6522c2224215c2f",
"assets/assest/3Dprint/21.png": "954c5668f19fbd377be2260f8e913f19",
"assets/assest/3Dprint/22.png": "77f22cba58e4471544b47e4ddab7bdfe",
"assets/assest/3Dprint/23.png": "b3a938ae2dee608b91a7fadda06db494",
"assets/assest/3Dprint/24.png": "305a5b5f310f9f40d5fc9dac32db5208",
"assets/assest/3Dprint/25.png": "0c0dc3d87c91b6e20882d522787a5f38",
"assets/assest/3Dprint/26.png": "34e6dfa4def65e83ed378e113995f163",
"assets/assest/3Dprint/27.png": "f1e71e519d8ed8c3685a6c9bba3ea079",
"assets/assest/3Dprint/28.png": "7c78363184609bb4aec6e2cce3ded615",
"assets/assest/3Dprint/29.png": "6f8db531e34ac0b43e60d9b6d98baf25",
"assets/assest/3Dprint/3.png": "2a9b9a7c10ed286cd81c983297697e02",
"assets/assest/3Dprint/30.png": "c12c5df7facafcd2a03a5d605e17016d",
"assets/assest/3Dprint/31.png": "7d419e71a9dee3976b113cc0c60b1917",
"assets/assest/3Dprint/4.png": "115b0880b7571ec4b52cb8374aaed68d",
"assets/assest/3Dprint/5.png": "ef85d1c8059c5b511d94700d4fba09ac",
"assets/assest/3Dprint/6.png": "ae73e95cf3bedd7084ce5f597b585872",
"assets/assest/3Dprint/7.png": "703bc8c6a48e7e4fa9a6880da3d488c6",
"assets/assest/3Dprint/8.png": "c161123e1f13a58b88cba95d43491e54",
"assets/assest/3Dprint/9.png": "464b0ba73967c5c5039a790e04901bb1",
"assets/assest/3Dprint/cover/1.1.png": "51e9a2ce40bb5745dfcd02a193d03d4f",
"assets/assest/3Dprint/cover/1.2.png": "11cdbc4c1fed6d915b1654979f423bf7",
"assets/assest/3Dprint/cover/1.3.png": "7204b1a426842eb09679380da792ee8e",
"assets/assest/3Dprint/cover/1.4.png": "5f401d76e0b72f2035856b7320183faa",
"assets/assest/3Dprint/cover/1.5.png": "86beb787e9addd18eaeeae25719e3e50",
"assets/assest/App/E1.png": "f7255fc2e4f3a4b66dd5cd0782b1d6a8",
"assets/assest/App/E2.png": "4534d574b8df5da5d8a8361c21536302",
"assets/assest/App/E3.png": "5114885488e6f959df38a9df363d0762",
"assets/assest/App/E4.png": "48ab7a7fb7c6814862deac8b5e401b32",
"assets/assest/App/E6.png": "ff763f3d5fcc551f3ca38045bc416c11",
"assets/assest/App/E7.png": "5812570659cd7fbdcc3d2fcdde3248a7",
"assets/assest/App/E8.jpg": "1ad6888b65916d8f24f0b85b314dd8cb",
"assets/assest/App/E9.jpg": "183b6e82d611fc49c4abe1ac43474f3b",
"assets/assest/App/F1.png": "6a9f84ee3ac65004848e1f34bf1b26ce",
"assets/assest/App/F2.png": "502b9074c311c9991baf1229d56f626b",
"assets/assest/App/F3.png": "31ffd4a7c645c3ff932fddf21e829c16",
"assets/assest/App/F4.png": "2bb17754923c5de4585c3ab4abbd1ebe",
"assets/assest/App/F5.png": "1a5ce01068bdb4eac6078ea7d691d8fd",
"assets/assest/App/G1.png": "a377a3f1edf262b74cf55eb24898df63",
"assets/assest/App/G2.png": "e5433ecd1b54763ea74d0792ff8768f0",
"assets/assest/App/G3.png": "0571740ba15e2a818da6fe5f87bf5113",
"assets/assest/App/G4.png": "6c9ef2928a8d6911616c8823cb08584e",
"assets/assest/App/G5.png": "f04b02884cdb84598367b03aee47cf58",
"assets/assest/App/O1.png": "86ea2a0db68478c1cf1d4022e999485f",
"assets/assest/App/O2.png": "d50847caf1c7922ed4f6f73c68c5ef5d",
"assets/assest/App/O3.png": "34f89495c6344cd40754d4fcf78e8795",
"assets/assest/App/O4.png": "2b321a603da8bd3343fbdc22dadefa90",
"assets/assest/App/O5.png": "3a9a3949e23390dc0cf223dea52cc990",
"assets/assest/App/O6.png": "34d1afd2010948f597e65e4d9672f6b6",
"assets/assest/App/s1.png": "722ed8665dc9de32dcde2c67093d580e",
"assets/assest/App/s2.png": "2653865ea2556da1d0cc19d7169a65c0",
"assets/assest/App/s3.png": "e7710905a23b72dcd35397fbee1ac6be",
"assets/assest/App/s4.png": "3c4d7ede55c245741866519310e021b0",
"assets/assest/App/s5.png": "e9e94273ebcc376cfc6d3437726251f8",
"assets/assest/App/s6.png": "5f778a73ccd92c4aa417f0db3629e9a4",
"assets/assest/App/t1.png": "9e762f8e4f3f88aac4bec6d702375688",
"assets/assest/App/t2.png": "38701f1bac9da7d2074ace0a32ab6ec2",
"assets/assest/App/t3.png": "e6e44e66a2456ae1ba72c321d58bfc9f",
"assets/assest/App/t4.png": "421ebafe9898d340b22aa9e3a9e43d75",
"assets/assest/App/t5.png": "95693b02c5ef6689c4173a5867bf6621",
"assets/assest/App/t6.png": "329009c4541125287a6f263de4a83a88",
"assets/assest/App/t7.png": "17ef7ff0d33aa34e4ba5bb7485476521",
"assets/assest/background/back.png": "7ae3da4ea9c555d2bec701ba1b0ad6cd",
"assets/assest/background/back10.png": "ab193fce8b5b1f44ca5642e7e674db9a",
"assets/assest/background/back11.png": "f43aa9442ddf9425bd41d305e6e4dead",
"assets/assest/background/back12.png": "b4a9d40169dae0186dadd6fd46377514",
"assets/assest/background/back13.png": "9c64103ab9547af80ad49518cf46ca0f",
"assets/assest/background/back14.png": "64311811cf68d871b479024672fb711c",
"assets/assest/background/back15.png": "bb7739704dab33c1954a23a021ec1691",
"assets/assest/background/back16.png": "3bfafc94a02327f2c153be51d61dce13",
"assets/assest/background/back17.png": "fdf7d854861eb27535f20799015a40a5",
"assets/assest/background/back18.png": "5bb17d6f7e71c7cefddf4db56fa14bca",
"assets/assest/background/back19.png": "b2b8286390cada7df87381c1709f7f4f",
"assets/assest/background/back2.png": "b76bcf9a2d802542e9a6f92cab3ca8ee",
"assets/assest/background/back20.png": "a37e495481c3be3cbdc855fa119d4470",
"assets/assest/background/back21.png": "eeaeb8ce0c9ca4053559c9a397fdc81c",
"assets/assest/background/back23.png": "ef3111358929aef856fbaf1a1da51aa9",
"assets/assest/background/back24.png": "16e673e4a1ea9412843f790371d12b5a",
"assets/assest/background/back25.png": "bf45efa65afcac06e76eef82f5e67f2e",
"assets/assest/background/back26.png": "347c5308aca9e7265ef24a6297d9f5e0",
"assets/assest/background/back27.png": "789eea161f529e94bc94a224b2f54695",
"assets/assest/background/back28.png": "fc9d8523a577b7d4d7d94c23f1626b64",
"assets/assest/background/back29.png": "c5762e91bf2c60f4055374effa9b2267",
"assets/assest/background/back3.png": "214fd3f7682f918178d1984517e7260a",
"assets/assest/background/back30.png": "94aac3e13f1fdab8ac0f83efbd0b81ed",
"assets/assest/background/back31.png": "3d19b5ae4d2e474a67908e95b414e67e",
"assets/assest/background/back32.png": "982cf6bd8d17c1b6e22b7d7dc66d3926",
"assets/assest/background/back33.png": "e83228e73ab522cf006d5dc983723af0",
"assets/assest/background/back34.png": "21e4ba27bd015afeb54015053a41d08b",
"assets/assest/background/back35.png": "f9655d768f3f36fa28cec94e120be9c9",
"assets/assest/background/back36.png": "20bc8ce80408a43cbbe4f08b7be1485a",
"assets/assest/background/back37.png": "7c1372516ef34db690fa2daa15c82ad2",
"assets/assest/background/back4.png": "a21f5ec5585cb34e8e58c913c05cde6b",
"assets/assest/background/back5.png": "e864341b734b0cce69cf5a3c62fecb3d",
"assets/assest/background/back6.png": "20e238d8167dcad661a39c67dcf9288c",
"assets/assest/background/back7.png": "82191daf615f1aaf85ff6aeaf9f538a8",
"assets/assest/background/back8.png": "3e0e9f3fef32ae66a8ee0775c107d97b",
"assets/assest/background/back9.png": "de9f8800b3e4361b4e1c03355ce9b9da",
"assets/assest/background.png": "c97e97ca50e5e143baa895a439a17ffe",
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
"assets/assest/citypic/jinhua/37.png": "5fb2ceae2605806159c14c60e80ec2ae",
"assets/assest/citypic/jinhua/4.png": "3ac7f73ebaa0a060a7edff057c55c7d0",
"assets/assest/citypic/jinhua/41.png": "71114e017886c8baf1f963139ca803d1",
"assets/assest/citypic/jinhua/42.png": "b23727a6bd1be1550faf61cf3aa18bd9",
"assets/assest/citypic/jinhua/43.png": "d87743a7354d5fccb70c1779b95a4193",
"assets/assest/citypic/jinhua/44.png": "2913d8849ea75610dac3b9a9b6261e67",
"assets/assest/citypic/jinhua/45.png": "95c25ee93e921da0a4623a45fde66c2f",
"assets/assest/citypic/jinhua/46.png": "d6f8b412a7aee412eafc4503892823ac",
"assets/assest/citypic/jinhua/47.png": "f48bcebff953eef48cd01550b410f869",
"assets/assest/citypic/jinhua/48.png": "76aea38a34754d54908c559c2ceb42d9",
"assets/assest/citypic/jinhua/5.png": "1e41c9f509a7c3dd9df5746263aeb921",
"assets/assest/citypic/jinhua/53.png": "a64e0137cece7e66b43dc93e7133e73b",
"assets/assest/citypic/jinhua/54.png": "f8f23697615dad35d6c877e8df2e86a9",
"assets/assest/citypic/jinhua/55.png": "a2fe174a52075294056595b5f71f3514",
"assets/assest/citypic/jinhua/56.png": "bacb4f2abfc99d19c785424e1cbaee8f",
"assets/assest/citypic/jinhua/57.png": "b00d1b3f69c9fdded98678494494c710",
"assets/assest/citypic/jinhua/6.png": "1977310328f4a07f75dbcce7547f090b",
"assets/assest/citypic/jinhua/61.png": "cba6ceb65826dd461f20e04c4b01d556",
"assets/assest/citypic/jinhua/62.png": "dc24c47d9abcb23a66d4366ac160ce41",
"assets/assest/citypic/jinhua/63.png": "003175939ce2f8648e71fea7594311ca",
"assets/assest/citypic/jinhua/64.png": "5c344067ce7f0a06310649c9abfba98f",
"assets/assest/citypic/jinhua/65.png": "d2e2dc4500e86c83aa14a41f31990eb8",
"assets/assest/citypic/jinhua/66.png": "56c32b19a975c2316885113aab225d45",
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
"assets/assest/citypic/yunnan/47.png": "24eb90cf1977ecc9d9518d43460b27d4",
"assets/assest/citypic/yunnan/48.png": "e9a457f02c11f54cc00ad693c164395c",
"assets/assest/citypic/yunnan/5.png": "c1fb1d52e130a7c3b039a3f53da19479",
"assets/assest/citypic/yunnan/51.png": "b66ef69f1be3df4cdbace27c80153a16",
"assets/assest/citypic/yunnan/52.png": "9111d90637f758f1eaa3ea966d684c62",
"assets/assest/citypic/yunnan/53.png": "3115524bed616e160e659e9b6efc0fda",
"assets/assest/citypic/yunnan/54.png": "0c4d75fc09cc2221055c3c407b137e4f",
"assets/assest/citypic/yunnan/55.png": "02686a28491340a10b34ced2076ab1f5",
"assets/assest/citypic/yunnan/56.png": "9c975decfe9f00f66acc11dbfb14cfdf",
"assets/assest/citypic/yunnan/57.png": "dae4d7347b0a24169250f8b9781434fa",
"assets/assest/citypic/yunnan/6.png": "679a60430a8b00175612639d8ec60996",
"assets/assest/citypic/yunnan/61.png": "dc9529d83e7239509add1977f5a4af74",
"assets/assest/citypic/yunnan/62.png": "07c04fd7c0de931ace06e3204e38c017",
"assets/assest/citypic/yunnan/63.png": "79f722b05977733708a6e18659771133",
"assets/assest/citypic/yunnan/64.png": "e73928127802ac747127b57edfdd8138",
"assets/assest/citypic/yunnan/65.png": "d2f8c31bde2a1dd0bfe82db04a4c8467",
"assets/assest/citypic/yunnan/cover.png": "52219d30c33eed6eae1e9ad2057886a3",
"assets/assest/mj.jpg": "59ac47b6100be0b1704e960a3c2a5b47",
"assets/assest/nature/jhe/s1.png": "823fab14aa96471a2475bfd234b45416",
"assets/assest/nature/jhe/s2.png": "7776781b0c0eb3f650713f315bcecaa5",
"assets/assest/nature/jhe/s3.png": "f51dc9c62eed887aaea6ed8780064595",
"assets/assest/nature/jhe/s4.png": "ecfbcdfcc8f830817275470b20782983",
"assets/assest/nature/lake/Fall.png": "517f175bbe815193a72343b441b4b186",
"assets/assest/nature/lake/spring.png": "dee972cc6d6b01b7b8bb22c7a8825c98",
"assets/assest/nature/lake/Summer.png": "451270cb5df63a6ac37d7b1c90c1a37b",
"assets/assest/nature/lake/winter.png": "c7275da3b67f04adbdbb4d1a655db92c",
"assets/assest/nature/waterFall/fall.png": "56dbc5f76bd5652c8a469b7402986f84",
"assets/assest/nature/waterFall/spring.png": "71118d70b7a236d1ddf108f70f976bed",
"assets/assest/nature/waterFall/summer.png": "a74f9a7c538f1148fee3f28be0e3fd79",
"assets/assest/nature/waterFall/winter.png": "ef03e02c39e6c8d956dc8337885545f7",
"assets/assest/nature.png": "84a2d64d7475f3340417c0669d7ac0b4",
"assets/assest/Personal%2520Pic/1.01.png": "8aa3a2c5e215bc63c0ebacbed6f4763b",
"assets/assest/Personal%2520Pic/1.02.png": "b81e69411082da688c9af4f37a0f6d2c",
"assets/assest/Personal%2520Pic/1.03.png": "a79f192a5959fc3b085158a23726f9af",
"assets/assest/Personal%2520Pic/1.png": "de9641bc019bd5850d215c585baf234d",
"assets/assest/Personal%2520Pic/10.png": "2db9fc388e02da288a7189f6dc839142",
"assets/assest/Personal%2520Pic/11.png": "69d677f27435124078a284d3ba31ca86",
"assets/assest/Personal%2520Pic/12.1.png": "777b60ee97e4815cb797ea76dcdc9f50",
"assets/assest/Personal%2520Pic/12.png": "b505c65779d9c3f743d41a8463d88feb",
"assets/assest/Personal%2520Pic/13.png": "d03b83ca92b6648207926fb9ba12a69e",
"assets/assest/Personal%2520Pic/14.png": "aef7975d4f68d44575b99300a1cffaff",
"assets/assest/Personal%2520Pic/15.png": "acd1749a7cb6774022fa402a65ff0da1",
"assets/assest/Personal%2520Pic/16.png": "992a3a3aae602b6e031c3394743626fd",
"assets/assest/Personal%2520Pic/17.png": "bcdd31df9662891f7deee90c0d3a1c29",
"assets/assest/Personal%2520Pic/18.png": "7f3184326ce5f49143d732647c28f52a",
"assets/assest/Personal%2520Pic/19.png": "417259e57c5bdc2fa5905d9aa8e2294c",
"assets/assest/Personal%2520Pic/2.png": "f05284151e3e23c2b19a1a2108f9231f",
"assets/assest/Personal%2520Pic/20.png": "be9dcaf7917bc28afe5bde80d1890dac",
"assets/assest/Personal%2520Pic/21.png": "fc1f2ed6458b4b79f6d87eecee51aa3f",
"assets/assest/Personal%2520Pic/22.1.png": "f0ba46c2739a08aa0090aa76d1666195",
"assets/assest/Personal%2520Pic/22.png": "8e153281ddb8533b7c070a0c18243efc",
"assets/assest/Personal%2520Pic/23.png": "6bec2d7b685df747c5b648c3881216ee",
"assets/assest/Personal%2520Pic/24.png": "039096ad44f2cbe8742af574118dca78",
"assets/assest/Personal%2520Pic/25.png": "0d67589973e4d40443c43bbf871b694d",
"assets/assest/Personal%2520Pic/26.png": "6fcb0170e1a775318351516bb7033544",
"assets/assest/Personal%2520Pic/27.png": "082e11ca90e5d149f24c287b7f7e99b4",
"assets/assest/Personal%2520Pic/28.png": "eab36f116237d84e8d6b7fd6d1954264",
"assets/assest/Personal%2520Pic/29.png": "3e37ad826901158f39bf8a36eed3edfa",
"assets/assest/Personal%2520Pic/3.png": "45404c0f55d83e935a5a49ee38be45b8",
"assets/assest/Personal%2520Pic/30.png": "f27696304bfc22a1ca9dac5284a8631c",
"assets/assest/Personal%2520Pic/31.png": "baca71b3ecf4baad1694263f1e782800",
"assets/assest/Personal%2520Pic/32.png": "edb19b02ee3979723d4e62107defe619",
"assets/assest/Personal%2520Pic/33.png": "78ab49af9e2f3fe76da4ec25e5b90bf0",
"assets/assest/Personal%2520Pic/34.png": "7f761aebd8a52d9e46c8d0d9009582a1",
"assets/assest/Personal%2520Pic/35.png": "29301c69a1a72da460b27b25eb78a3af",
"assets/assest/Personal%2520Pic/36.png": "458327c23a58387619829c8809405944",
"assets/assest/Personal%2520Pic/37.png": "8dd7bbaf7c567e56c13f7afdfb753173",
"assets/assest/Personal%2520Pic/38.png": "5a971e029a796c490cd2a6693be8283a",
"assets/assest/Personal%2520Pic/4.png": "d2d9b7c609443721e43f6dda25b7de7a",
"assets/assest/Personal%2520Pic/5.png": "4a0978dfcf41a811a1e1595f4ffe2465",
"assets/assest/Personal%2520Pic/6.png": "e1925848b4d9f66e8ecbdcea2c5ecdfc",
"assets/assest/Personal%2520Pic/7.1.png": "5e2aaae2eb3b0779ba3a53d7b9cc114e",
"assets/assest/Personal%2520Pic/7.png": "e3483afba431d2d4899130947b71b17e",
"assets/assest/Personal%2520Pic/8.png": "64ef33b984d7c35eea5b43cdc4ca3d7b",
"assets/assest/Personal%2520Pic/9.png": "5d9081cdf06dd4958a3b8487ce878328",
"assets/assest/personal.jpg": "38431a7d3430693fc8073a3045861d5a",
"assets/assest/Phone/cover.png": "96fbc9a2840fc12d133c26a9ee599486",
"assets/assest/poem/1.png": "8a722229a8c38b2dc8d3c8951a1d68f2",
"assets/assest/poem/2.png": "db17c7bf8b12f0a1677c7ecf975d0dfb",
"assets/assest/poem/3.png": "c236550b475fe65c8915b0160a2d172a",
"assets/assest/poem/4.png": "9fe86d0b06deddadd395ae9f0ef10eee",
"assets/assest/poem/5.png": "7ef5b5a023d6f7e6d835171b280005b6",
"assets/assest/poem/guTi/m1.png": "13b089ddaa91c1d669fe6702ede32f36",
"assets/assest/poem/guTi/m2.png": "196e51f8ebf6bd664d7402803f42be37",
"assets/assest/poem/guTi/m3.png": "423b195975ecb57108732e8c030612e7",
"assets/assest/poem/guTi/m4.png": "bd76d1a67351bac41f5ecbcd2b13edff",
"assets/assest/poem/guTi/o1.png": "2bacbedcfc670d76a4d1f72fe68bb891",
"assets/assest/poem/guTi/o10.png": "fd9e2e31d1580dfccfc8efce4659228a",
"assets/assest/poem/guTi/o11.png": "050aa09f97e8c406497809a8a4f2798f",
"assets/assest/poem/guTi/o12.png": "e1fdd66cc8f5913fb935a974c0ceecbe",
"assets/assest/poem/guTi/o2.png": "e47b1c5bbbc8f6a5c3693131eaaadc5c",
"assets/assest/poem/guTi/o3.png": "37d2b0b01f9cb93aa7c07e74b58c83ff",
"assets/assest/poem/guTi/o4.png": "167eaf894e0225d054b18d3f3b2dfb75",
"assets/assest/poem/guTi/o5.png": "1703366e653295275827979011b2ef57",
"assets/assest/poem/guTi/o6.png": "edb5fe16997e71bbc63b0d2b6309d2dd",
"assets/assest/poem/guTi/o7.png": "16b8a704b4d9a8e38f3ec6b42a002715",
"assets/assest/poem/guTi/o8.png": "0069c524f6b4dd2546a697da65d1ac1b",
"assets/assest/poem/guTi/o9.png": "7253d7c9987f6a48b44c07bf6f56734b",
"assets/assest/poem/guTi/s1.png": "1d510d9d2db66ebd1ebce4969ec3e8b3",
"assets/assest/poem/guTi/s2.png": "44815d6f2974a025da5c08867d997ccf",
"assets/assest/poem/guTi/s3.png": "fdb23e84fbc7b0baeb124280e4db3762",
"assets/assest/poem/guTi/s4.png": "b63b0d93ec011b60be52c3626d45dc60",
"assets/assest/poem/guTi/s5.png": "c76435a82af7c2515d26fc5b629d4231",
"assets/assest/poem/guTi/x1.png": "7d30d379aaa4ed7d0941f8c81b8a7d6f",
"assets/assest/poem/guTi/x2.png": "30747175579458f8fad1236b68c460e3",
"assets/assest/poem/guTi/x3.png": "a2dbd91647a03f8eb635acf6bdb107ee",
"assets/assest/poem/guTi/x4.png": "47bf233d4ea51c9e2d0bf6ad89e27033",
"assets/assest/poem/guTi/x5.png": "a05277a16e4615c76c2318af2bcae9a2",
"assets/assest/poem/guTi/x6.png": "5bd7ffbb73062bcb2d6cd0159e58bb8e",
"assets/assest/poem/guTi/x7.png": "a410bb2dc9c1ec29e4320f699ffd9309",
"assets/assest/poem/guTi/y1.png": "e69e8bbb3adb62ee6a7bb8252ac9be36",
"assets/assest/poem/guTi/y2.png": "47a0e54ad7de016a563b7b364db0afdf",
"assets/assest/poem/guTi/y3.png": "2333d704f89d30ed2edf1048b080d6d3",
"assets/assest/poem/guTi/z1.png": "77f65c4b3c56b83451265f1a57611e3d",
"assets/assest/poem/guTi/z2.png": "17e86c5e3bc7d312bbe9ffd311144ee9",
"assets/assest/poem/guTi/z3.png": "943847764b1166d2365a0a8c36794432",
"assets/assest/poem/guTi/z4.png": "5674eecfff82375f10c93b7f1512c7b4",
"assets/assest/poem/guTi/z6.png": "19130f1ba713a30404dab00bb2c72245",
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
"assets/assest/teacher/teac1.png": "bd6b0d0c36bd3b8d1c894d767c4245a0",
"assets/assest/teacher/teac2.png": "3307f0138a9698bc3920a6b36648f95f",
"assets/AssetManifest.json": "18f9d2f9c6e987ec371ec25a75baaff2",
"assets/font/bgothm.TTF": "1d9f2941c1cb3bc8eaf9ade805f14421",
"assets/font/comsc.TTF": "38a66d692cb7a2b42af8c49dfdc94136",
"assets/font/nan.TTF": "6f68403b8ab039d56562d65faa6a8037",
"assets/font/SHOWG.TTF": "d66fa62dabed66f2226a1b2d17da0579",
"assets/font/sw.TTF": "7e567868541c1ea55de3e5b1ecef4c3e",
"assets/font/yuan.TTF": "0b3711a6568ab67ada2e2dcae652bfc1",
"assets/FontManifest.json": "d5a31fe05685eab0d1a0f38f64bbae31",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f484b64ecc8cf4d15c288d750c450340",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "245b94a80f47cbc9c36b61270c6ee625",
"/": "245b94a80f47cbc9c36b61270c6ee625",
"main.dart.js": "a7a77dbe5f976a57497b1493b6f4b4ec",
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
