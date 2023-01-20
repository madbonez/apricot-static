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
const $b58587e08feaaaeb$var$id = "#screen7";
function $b58587e08feaaaeb$export$f22da7240b7add18() {
    const innerRef = (0, $1A24E.el)("#screen7");
    const scrollTrigger = (0, $gkwRL.getState)().scrollTriggers[`screen7Enter`];
    const block = (0, $1A24E.els)("#screen7 .block");
    for(let i = 0; i < block.length; i++){
        block[i].addEventListener("click", ()=>{
            (0, $gkwRL.updateOneState)("activePopupScreen", "7");
            (0, $gkwRL.updateOneState)("activePopupId", block[i].dataset.popup);
        });
        block[i].addEventListener("mouseover", ()=>onMouseOverButton(block[i].dataset.popup));
        block[i].addEventListener("mouseleave", ()=>onMouseLeaveButton(block[i].dataset.popup));
    }
    const onMouseOverButton = (id)=>{
        const tl = (0, $h8x9E.gsap).timeline({}).fromTo(`#screen7 .arrow2-${id}`, {
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
        (0, $h8x9E.gsap).to(`#screen7 .line-${id}`, {
            background: "#04000A",
            width: "50%",
            height: 1,
            duration: 0.5
        });
    };
    const onMouseLeaveButton = (id)=>{
        const tl = (0, $h8x9E.gsap).timeline({}).fromTo(`#screen7 .arrow2-${id}`, {
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
        (0, $h8x9E.gsap).to(`#screen7 .line-${id}`, {
            background: "#EEF1FA",
            width: "100%",
            duration: 0.5
        });
    };
    if (!scrollTrigger) return;
    scrollTrigger.toggleActions = "play none none reset";
    const tl = (0, $h8x9E.gsap).timeline({
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
(0, $ix1dx.onDomReady)($b58587e08feaaaeb$export$f22da7240b7add18);

})();
