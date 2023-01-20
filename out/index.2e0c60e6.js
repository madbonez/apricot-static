var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireb921"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireb921"] = parcelRequire;
}

var $jbrIz = parcelRequire("jbrIz");

var $dfMDe = parcelRequire("dfMDe");

var $l6B09 = parcelRequire("l6B09");

var $kcA29 = parcelRequire("kcA29");

var $7Hbkn = parcelRequire("7Hbkn");
const $efe7ade519a43ee5$var$id = "#screen5";
function $efe7ade519a43ee5$export$f22da7240b7add18() {
    (0, $l6B09.gsap).registerPlugin((0, $kcA29.ScrollTrigger));
    const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen5Horizontal`];
    const sliderRef = (0, $7Hbkn.el)("#screen5 #sliderRef");
    const innerRef = (0, $7Hbkn.el)("#screen5");
    if (!scrollTrigger) return;
    const offset = sliderRef.offsetHeight - innerRef.offsetHeight + 150;
    scrollTrigger.scrub = true;
    (0, $l6B09.gsap).context(()=>{
        const timeline = (0, $l6B09.gsap).timeline({
            paused: true,
            scrollTrigger: scrollTrigger
        }).to(sliderRef, {
            y: `-=${offset}px`
        });
    }, innerRef);
}
(0, $jbrIz.onDomReady)($efe7ade519a43ee5$export$f22da7240b7add18);


