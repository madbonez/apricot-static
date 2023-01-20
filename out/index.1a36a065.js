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

var $h8x9E = parcelRequire("h8x9E");

var $1A24E = parcelRequire("1A24E");
function $6e62dfbf5a1f06fa$export$f22da7240b7add18() {
    let buttonArrows = (0, $1A24E.els)(".buttonArrowRef");
    for(let i = 0; i < buttonArrows.length; i++){
        const circle = buttonArrows[i].querySelector(".circle");
        const arrow = buttonArrows[i].querySelector(".arrow");
        const onMouseOverButton = ()=>{
            (0, $h8x9E.gsap).to(circle, {
                scale: 14,
                duration: 0.6,
                ease: "power4.Out"
            });
            (0, $h8x9E.gsap).to(arrow, {
                duration: 0.6,
                x: 38,
                y: -46,
                ease: "power4.Out"
            });
        };
        const onMouseLeaveButton = ()=>{
            (0, $h8x9E.gsap).to(circle, {
                scale: 1,
                duration: 0.6,
                ease: "power4.Out"
            });
            (0, $h8x9E.gsap).fromTo(arrow, {
                duration: 0.6,
                x: -38,
                y: 46,
                ease: "power4.Out"
            }, {
                duration: 0.6,
                x: 0,
                y: 0,
                ease: "power4.Out"
            });
        };
        const onClickHandler = ()=>{
            (0, $h8x9E.gsap).to(circle, {
                scale: 12,
                duration: 0.6,
                ease: "power4.Out"
            });
            (0, $h8x9E.gsap).to(arrow, {
                duration: 0.6,
                x: 38,
                y: -46,
                ease: "power4.Out"
            });
            (0, $h8x9E.gsap).to(circle, {
                delay: 1,
                scale: 1,
                duration: 0.6,
                ease: "power4.Out"
            });
            (0, $h8x9E.gsap).fromTo(arrow, {
                delay: 1,
                duration: 0.6,
                x: -38,
                y: 46,
                ease: "power4.Out"
            }, {
                duration: 0.6,
                x: 0,
                y: 0,
                ease: "power4.Out"
            });
        };
        buttonArrows[i].addEventListener("mouseleave", (e)=>onMouseLeaveButton());
        buttonArrows[i].addEventListener("click", (e)=>onClickHandler(), {
            capture: false
        });
        buttonArrows[i].addEventListener("mouseenter", (e)=>onMouseOverButton());
    }
}
(0, $ix1dx.onDomReady)($6e62dfbf5a1f06fa$export$f22da7240b7add18);

})();
