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
const $862d21d15872420f$var$id = "#screen7";
function $862d21d15872420f$export$f22da7240b7add18() {
    const innerRef = (0, $7Hbkn.el)("#screen7");
    const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen7Enter`];
    const block = (0, $7Hbkn.els)("#screen7 .block");
    for(let i = 0; i < block.length; i++){
        block[i].addEventListener("click", ()=>{
            (0, $dfMDe.updateOneState)("activePopupScreen", "7");
            (0, $dfMDe.updateOneState)("activePopupId", block[i].dataset.popup);
        });
        block[i].addEventListener("mouseover", ()=>onMouseOverButton(block[i].dataset.popup));
        block[i].addEventListener("mouseleave", ()=>onMouseLeaveButton(block[i].dataset.popup));
    }
    const onMouseOverButton = (id)=>{
        const tl = (0, $l6B09.gsap).timeline({}).fromTo(`#screen7 .arrow2-${id}`, {
            x: -20,
            y: 0,
            duration: 0.5,
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 0,
            y: -20,
            ease: "power4.Out"
        }).fromTo(`#screen7 .arrow-${id}`, {
            x: 0,
            y: 0,
            duration: 0.5,
            visibility: "hidden",
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 20,
            visibility: "visible",
            y: -20,
            ease: "power4.Out"
        }, "<");
        (0, $l6B09.gsap).to(`#screen7 .line-${id}`, {
            background: "#04000A",
            width: "50%",
            height: 1,
            duration: 0.5
        });
    };
    const onMouseLeaveButton = (id)=>{
        const tl = (0, $l6B09.gsap).timeline({}).fromTo(`#screen7 .arrow2-${id}`, {
            x: -20,
            y: 0,
            duration: 0.5,
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 0,
            y: -20,
            ease: "power4.Out"
        }).fromTo(`#screen7 .arrow-${id}`, {
            x: 0,
            y: 0,
            duration: 0.5,
            visibility: "hidden",
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 20,
            visibility: "visible",
            y: -20,
            ease: "power4.Out"
        }, "<");
        (0, $l6B09.gsap).to(`#screen7 .line-${id}`, {
            background: "#EEF1FA",
            width: "100%",
            duration: 0.5
        });
    };
    if (!scrollTrigger) return;
    scrollTrigger.toggleActions = "play none none reset";
    const tl = (0, $l6B09.gsap).timeline({
        scrollTrigger: scrollTrigger,
        paused: true
    }).from("#screen7 .contentBlockAnimation", {
        y: 208,
        duration: 1,
        opacity: 0,
        ease: "power4.out"
    }).from("#screen7  .blockAnimation", {
        duration: 1,
        ease: "power4.out",
        marginBottom: "+=78"
    }, "<0.4");
}
(0, $jbrIz.onDomReady)($862d21d15872420f$export$f22da7240b7add18);


