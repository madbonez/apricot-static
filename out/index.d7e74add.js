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
const $df6a00fc0981f862$var$id = "#ContentBlock";
function $df6a00fc0981f862$export$f22da7240b7add18() {
    const contentBlockRefs = (0, $7Hbkn.els)(".contentBlockRef");
    for(let i = 0; i < contentBlockRefs.length; i++){
        const contentBlock = contentBlockRefs[i];
        const blockTextRef = contentBlock.querySelector(".blockTextRef");
        const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen${contentBlock.dataset.block}Enter`];
        (0, $l6B09.gsap).context(()=>{
            scrollTrigger.toggleActions = "play none none reset";
            const tl = (0, $l6B09.gsap).timeline({
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
(0, $jbrIz.onDomReady)($df6a00fc0981f862$export$f22da7240b7add18);


