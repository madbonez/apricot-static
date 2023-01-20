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
function $18587e7a2ccf68ce$export$f22da7240b7add18() {
    const innerRef = (0, $1A24E.el)("#cursor");
    let timelineCursor;
    (0, $gkwRL.selectState)((newState)=>{
        if (window.innerWidth > 900 && !(0, $ix1dx.isTouchDevice)()) {
            if (!timelineCursor) timelineCursor = (0, $h8x9E.gsap).timeline({
                paused: true
            }).to(innerRef, {
                opacity: 1
            }).to(innerRef, {
                width: 70,
                height: 70,
                delay: 0.3,
                duration: 0.3,
                ease: "power4.out"
            }).fromTo("#cursor .cursorArrow", {
                opacity: 0
            }, {
                opacity: 1,
                delay: 0.3,
                duration: 0.3,
                ease: "power4.out"
            }, "<").to(innerRef, {
                width: 140,
                height: 140,
                duration: 0.3,
                ease: "power4.out"
            }).to("#cursor .cursorText", {
                display: "block",
                duration: 0.1,
                opacity: 0,
                y: 70
            }, "<").fromTo("#cursor .cursorText", {
                y: 70
            }, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power4.out"
            }, "<0.1").to("#cursor .cursorText", {
                duration: 3
            }).addLabel("smallCursor").fromTo("#cursor .cursorText", {
                y: 0,
                opacity: 1
            }, {
                y: -70,
                opacity: 0,
                duration: 0.7,
                ease: "power4.out"
            }).to("#cursor .cursorText", {
                display: "none",
                duration: 0.1
            }).to(innerRef, {
                width: 70,
                height: 70,
                duration: 0.8,
                ease: "power4.out"
            }, "<");
            if ((0, $gkwRL.getState)().cursorState === "enter") {
                innerRef.style.display = "flex";
                timelineCursor.play();
            }
            if ((0, $gkwRL.getState)().cursorState === "toSmall") {
                innerRef.style.display = "flex";
                timelineCursor.seek(timelineCursor.nextLabel()).resume();
            }
            if ((0, $gkwRL.getState)().cursorState === "leave") {
                innerRef.style.display = "none";
                timelineCursor.pause().progress(0);
            }
        }
    }, "cursorState");
}
(0, $ix1dx.onDomReady)($18587e7a2ccf68ce$export$f22da7240b7add18);

})();
