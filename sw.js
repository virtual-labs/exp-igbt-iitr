importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"448a190c981602c52f4a3c91050e42cd","url":"contributors.html"},{"revision":"414130bc18a68f8011d6a0b73d97e407","url":"feedback.html"},{"revision":"81da1aa45d069940fda66320ca11de62","url":"images/circuit.png"},{"revision":"1f0d970e156199575568a7caf11fbf7b","url":"images/igbt.jpg"},{"revision":"5b9627597dd43b74d8a4c5f95c66a0bf","url":"images/iitrLogo.png"},{"revision":"28b5042607514fcf68031ce7e1161632","url":"images/structure.jpg"},{"revision":"236307f0250406780d624f977484992a","url":"images/structure.png"},{"revision":"ffe885a13aff2c4cef6086ca5ae32bf0","url":"images/symbol.png"},{"revision":"e6831da583b1cdf005c25531248d2eb2","url":"images/transfer characteristics.png"},{"revision":"a394b07568e261b42afec2f2af29a5ab","url":"images/VI characteristics.png"},{"revision":"538be8aa2d46209252fb97a7e0950877","url":"index.html"},{"revision":"2142535d8308c76bb3eee85a28a5a44d","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"31021700abc020ce8d0b997e1061f941","url":"posttest.html"},{"revision":"d0408f1f95b6ce3bc6f22e0b90e6c62b","url":"posttest.json"},{"revision":"212c9e63d6fa56da429f878b5b8d5f1a","url":"pretest.html"},{"revision":"c2532e9ccd00446bdb8c034bf8be4a48","url":"pretest.json"},{"revision":"117752c73a5c81fb8f480116599e4bed","url":"procedure.html"},{"revision":"d9d95d7f9f4e386f154cfb5d190660b1","url":"references.html"},{"revision":"6088fda3ac40037bbe13ccdf0f713e18","url":"simulation.html"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"78796c854ebfb3c5a05b643102baa18d","url":"simulation/css/new-style.css"},{"revision":"541be06f3fd8eded18db0fc31084e356","url":"simulation/css/popup.css"},{"revision":"5ee4712dc955759331533a1a7992b87f","url":"simulation/css/style.css"},{"revision":"f67e92a0af1629a524b17a0e57e2e309","url":"simulation/index.html"},{"revision":"45d2606f0159ad26777930489af61ae7","url":"simulation/js/graph.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"aeb398800f612b1083ca09f01534e03c","url":"simulation/js/popup.js"},{"revision":"fd4fe2ae520794d2dcc6370f901281fb","url":"simulation/js/script.js"},{"revision":"9a539e10404f65529425e2988c4b7321","url":"simulation/new-img/404-error.png"},{"revision":"5e1d6656e3f220521f6fe66db4271340","url":"simulation/new-img/404-tick.png"},{"revision":"0dcc5a14e004bb4716186c477bc90651","url":"simulation/new-img/404-warning.png"},{"revision":"7e6e65385c31bb14eb0b3b2ced3d3b14","url":"simulation/new-img/ac.png"},{"revision":"01d20b9499a37288ab7e6d4082709264","url":"simulation/new-img/acsourceuse.png"},{"revision":"3d47b78c09e27e217826c71dfa10006d","url":"simulation/new-img/ammeter.png"},{"revision":"9c2b0db82e144b5e43128aab6f49363b","url":"simulation/new-img/ammeteruse.png"},{"revision":"3fc5832af8c967d93049443af274298b","url":"simulation/new-img/capacitor.png"},{"revision":"e3b8cabb76736907d7a86cc5954d74f0","url":"simulation/new-img/capacitoruse.png"},{"revision":"0d151bb6e84c06a9f4cde6e684e08948","url":"simulation/new-img/dcsource.png"},{"revision":"d7fa6c9bb08cc9f0b5e69ce97ecadcf1","url":"simulation/new-img/dcsourceuse.png"},{"revision":"02f710571e8e5415bad37ebd94e96e38","url":"simulation/new-img/grid2.png"},{"revision":"14dd6c1fe87c360e4cdc8d38d6d5f307","url":"simulation/new-img/ground.png"},{"revision":"d979e25ebc8d1289574eab8f192f78ab","url":"simulation/new-img/ground11.png"},{"revision":"52f3f4915eb69064f797085843cedf24","url":"simulation/new-img/igbt.png"},{"revision":"ddd93cd8f8d1d240c32387286a7b5423","url":"simulation/new-img/igbtuse.png"},{"revision":"97d95414be734830c923f8ac9123df09","url":"simulation/new-img/inductor.png"},{"revision":"b523106feceec706313f99e7cc060831","url":"simulation/new-img/inductoruse.png"},{"revision":"4c8c351915efbcedb4eee4906bf240af","url":"simulation/new-img/MicrosoftTeams-image.png"},{"revision":"6481e91ea541998c348dfaf1ac0238ce","url":"simulation/new-img/mosfetn - Copy.png"},{"revision":"649d9cdfbe59d0456578e7f366eca907","url":"simulation/new-img/mosfetn.png"},{"revision":"03e752da1b6d27ebb259a2deef01a418","url":"simulation/new-img/notuse - Copy.png"},{"revision":"d83c476e76dae315f8ad57aa00133c66","url":"simulation/new-img/notuse.png"},{"revision":"536e356e0463574d371599dd9ccac3e8","url":"simulation/new-img/opamp.png"},{"revision":"12082f0d0803c437c2f58f85a36a4fe7","url":"simulation/new-img/opampn.png"},{"revision":"ce746f1225c7008f03e82388a734eda0","url":"simulation/new-img/pulse.png"},{"revision":"983ad6eabf6719e71808364eabc921f0","url":"simulation/new-img/pulsruse.png"},{"revision":"bf5a82042d9b67ac733ef2d92a705746","url":"simulation/new-img/resistor.png"},{"revision":"e8a450275a7c50bca2d52dcca558a275","url":"simulation/new-img/resistoruse.png"},{"revision":"7611bdc76761d76e2840fa9d96f54d3e","url":"simulation/new-img/switchuse - Copy.png"},{"revision":"b457d4331be35963851c860c485e261c","url":"simulation/new-img/switchuse.png"},{"revision":"7a5700e175c1df78bc56f69a6bb4d558","url":"simulation/new-img/tri.png"},{"revision":"cc1c5e997b699dc3f738f2e4c8b2f280","url":"simulation/new-img/triwave.png"},{"revision":"35eda927115ca5d107c8ebd464908999","url":"simulation/new-img/Untitled.png"},{"revision":"2d1f76d87c9e069950c353eede04099a","url":"simulation/new-img/vmeter.png"},{"revision":"0245ddcd66bc3d9b4a64658630f6daeb","url":"simulation/new-img/vmeteruse.png"},{"revision":"761df3ced7fb0a7ad3d58d738cd7112b","url":"simulation/new-img/voltmeter.png"},{"revision":"78796c854ebfb3c5a05b643102baa18d","url":"simulation/transfer/css/new-style.css"},{"revision":"541be06f3fd8eded18db0fc31084e356","url":"simulation/transfer/css/popup.css"},{"revision":"ad9515a90c1a642cdc52702645449702","url":"simulation/transfer/css/style.css"},{"revision":"a673af2fd2aa00be62fb6eaf6cf0742e","url":"simulation/transfer/js/graph.js"},{"revision":"aeb398800f612b1083ca09f01534e03c","url":"simulation/transfer/js/popup.js"},{"revision":"a5a55470f87ce0f19f1e1b5d6f8afe69","url":"simulation/transfer/js/script.js"},{"revision":"9a539e10404f65529425e2988c4b7321","url":"simulation/transfer/new-img/404-error.png"},{"revision":"5e1d6656e3f220521f6fe66db4271340","url":"simulation/transfer/new-img/404-tick.png"},{"revision":"0dcc5a14e004bb4716186c477bc90651","url":"simulation/transfer/new-img/404-warning.png"},{"revision":"7e6e65385c31bb14eb0b3b2ced3d3b14","url":"simulation/transfer/new-img/ac.png"},{"revision":"01d20b9499a37288ab7e6d4082709264","url":"simulation/transfer/new-img/acsourceuse.png"},{"revision":"3d47b78c09e27e217826c71dfa10006d","url":"simulation/transfer/new-img/ammeter.png"},{"revision":"9c2b0db82e144b5e43128aab6f49363b","url":"simulation/transfer/new-img/ammeteruse.png"},{"revision":"3fc5832af8c967d93049443af274298b","url":"simulation/transfer/new-img/capacitor.png"},{"revision":"e3b8cabb76736907d7a86cc5954d74f0","url":"simulation/transfer/new-img/capacitoruse.png"},{"revision":"0d151bb6e84c06a9f4cde6e684e08948","url":"simulation/transfer/new-img/dcsource.png"},{"revision":"d7fa6c9bb08cc9f0b5e69ce97ecadcf1","url":"simulation/transfer/new-img/dcsourceuse.png"},{"revision":"02f710571e8e5415bad37ebd94e96e38","url":"simulation/transfer/new-img/grid2.png"},{"revision":"14dd6c1fe87c360e4cdc8d38d6d5f307","url":"simulation/transfer/new-img/ground.png"},{"revision":"d979e25ebc8d1289574eab8f192f78ab","url":"simulation/transfer/new-img/ground11.png"},{"revision":"52f3f4915eb69064f797085843cedf24","url":"simulation/transfer/new-img/igbt.png"},{"revision":"ddd93cd8f8d1d240c32387286a7b5423","url":"simulation/transfer/new-img/igbtuse.png"},{"revision":"97d95414be734830c923f8ac9123df09","url":"simulation/transfer/new-img/inductor.png"},{"revision":"b523106feceec706313f99e7cc060831","url":"simulation/transfer/new-img/inductoruse.png"},{"revision":"4c8c351915efbcedb4eee4906bf240af","url":"simulation/transfer/new-img/MicrosoftTeams-image.png"},{"revision":"6481e91ea541998c348dfaf1ac0238ce","url":"simulation/transfer/new-img/mosfetn - Copy.png"},{"revision":"649d9cdfbe59d0456578e7f366eca907","url":"simulation/transfer/new-img/mosfetn.png"},{"revision":"03e752da1b6d27ebb259a2deef01a418","url":"simulation/transfer/new-img/notuse - Copy.png"},{"revision":"d83c476e76dae315f8ad57aa00133c66","url":"simulation/transfer/new-img/notuse.png"},{"revision":"536e356e0463574d371599dd9ccac3e8","url":"simulation/transfer/new-img/opamp.png"},{"revision":"12082f0d0803c437c2f58f85a36a4fe7","url":"simulation/transfer/new-img/opampn.png"},{"revision":"ce746f1225c7008f03e82388a734eda0","url":"simulation/transfer/new-img/pulse.png"},{"revision":"983ad6eabf6719e71808364eabc921f0","url":"simulation/transfer/new-img/pulsruse.png"},{"revision":"bf5a82042d9b67ac733ef2d92a705746","url":"simulation/transfer/new-img/resistor.png"},{"revision":"e8a450275a7c50bca2d52dcca558a275","url":"simulation/transfer/new-img/resistoruse.png"},{"revision":"7611bdc76761d76e2840fa9d96f54d3e","url":"simulation/transfer/new-img/switchuse - Copy.png"},{"revision":"b457d4331be35963851c860c485e261c","url":"simulation/transfer/new-img/switchuse.png"},{"revision":"7a5700e175c1df78bc56f69a6bb4d558","url":"simulation/transfer/new-img/tri.png"},{"revision":"cc1c5e997b699dc3f738f2e4c8b2f280","url":"simulation/transfer/new-img/triwave.png"},{"revision":"35eda927115ca5d107c8ebd464908999","url":"simulation/transfer/new-img/Untitled.png"},{"revision":"2d1f76d87c9e069950c353eede04099a","url":"simulation/transfer/new-img/vmeter.png"},{"revision":"0245ddcd66bc3d9b4a64658630f6daeb","url":"simulation/transfer/new-img/vmeteruse.png"},{"revision":"761df3ced7fb0a7ad3d58d738cd7112b","url":"simulation/transfer/new-img/voltmeter.png"},{"revision":"522aff078d93d399e95543d61335ede7","url":"simulation/transfer/transfer.html"},{"revision":"28f25ea1cd03ab45672c3e3cff711357","url":"theory.html"},{"revision":"1b95f99c2163893f7f2335fa9c78620b","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );