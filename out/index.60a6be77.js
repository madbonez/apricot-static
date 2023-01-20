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

var $1A24E = parcelRequire("1A24E");
const $a5c010322b2f5c09$var$id = "#ContentBlock";
function $a5c010322b2f5c09$export$f22da7240b7add18() {
    const contentBlockRefs = (0, $1A24E.els)(".contentBlockRef");
    for(let i = 0; i < contentBlockRefs.length; i++){
        const contentBlock = contentBlockRefs[i];
        const blockTextRef = contentBlock.querySelector(".blockTextRef");
        const scrollTrigger = (0, $gkwRL.getState)().scrollTriggers[`screen${contentBlock.dataset.block}Enter`];
        (0, $h8x9E.gsap).context(()=>{
            scrollTrigger.toggleActions = "play none none reset";
            const tl = (0, $h8x9E.gsap).timeline({
                scrollTrigger: scrollTrigger,
                paused: true
            }).from(blockTextRef, {
                marginTop: 70,
                duration: 1,
                lineHeight: 50 + parseInt(window.getComputedStyle(blockTextRef).lineHeight) + "px",
                ease: "power4.out",
                opacity: 0
            });
        }, contentBlock);
    }
/*    let scrollTriggers = contentBlockRefs.forEach((elem) => {
        return getState().scrollTriggers[`screen${elem.dataset.block}Enter`]
    })
    for (let elem in contentBlockRefs) {
        const index = el('.contentBlock').dataset.block;
    }


    const scrollTriggers = getState().scrollTriggers[`screen${index}Enter`]*/ }
(0, $ix1dx.onDomReady)($a5c010322b2f5c09$export$f22da7240b7add18);

})();
