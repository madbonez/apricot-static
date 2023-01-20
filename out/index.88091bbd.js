(function () {
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

var $ix1dx = parcelRequire("ix1dx");

var $gkwRL = parcelRequire("gkwRL");

var $h8x9E = parcelRequire("h8x9E");

var $gISqU = parcelRequire("gISqU");

var $1A24E = parcelRequire("1A24E");
const $0d1bf4f183779ff2$var$id = "#screen5";
function $0d1bf4f183779ff2$export$f22da7240b7add18() {
    (0, $h8x9E.gsap).registerPlugin((0, $gISqU.ScrollTrigger));
    const scrollTrigger = (0, $gkwRL.getState)().scrollTriggers[`screen5Horizontal`];
    const sliderRef = (0, $1A24E.el)("#screen5 #sliderRef");
    const innerRef = (0, $1A24E.el)("#screen5");
    if (!scrollTrigger) return;
    const offset = sliderRef.offsetHeight - innerRef.offsetHeight + 150;
    scrollTrigger.scrub = true;
    (0, $h8x9E.gsap).context(()=>{
        const timeline = (0, $h8x9E.gsap).timeline({
            paused: true,
            scrollTrigger: scrollTrigger
        }).to(sliderRef, {
            y: `-=${offset}px`
        });
    }, innerRef);
}
(0, $ix1dx.onDomReady)($0d1bf4f183779ff2$export$f22da7240b7add18);

})();
