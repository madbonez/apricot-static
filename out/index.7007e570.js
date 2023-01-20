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

var $7Hbkn = parcelRequire("7Hbkn");
const $892ce6811d140023$var$id = "#screen11";
function $892ce6811d140023$export$f22da7240b7add18() {
    const innerRef = (0, $7Hbkn.el)("#screen11");
    const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen11Enter`];
    const titleFormRef = (0, $7Hbkn.el)("#screen11 .titleFormRef");
    if (!scrollTrigger) return;
    (0, $l6B09.gsap).context(()=>{
        scrollTrigger.toggleActions = "play none none reset";
        const tl = (0, $l6B09.gsap).timeline({
            scrollTrigger: scrollTrigger,
            paused: true
        }).from(`.title-form`, {
            marginTop: 70,
            duration: 1,
            lineHeight: 50 + parseInt(window.getComputedStyle(titleFormRef).lineHeight) + "px",
            ease: "power4.out",
            opacity: 0
        });
    }, innerRef);
}
(0, $jbrIz.onDomReady)($892ce6811d140023$export$f22da7240b7add18);


