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
function $b8ad3c0a465522bd$export$f22da7240b7add18() {
    const innerRef = (0, $7Hbkn.el)("#cursor");
    let timelineCursor;
    (0, $dfMDe.selectState)((newState)=>{
        if (window.innerWidth > 900 && !(0, $jbrIz.isTouchDevice)()) {
            if (!timelineCursor) timelineCursor = (0, $l6B09.gsap).timeline({
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
            if ((0, $dfMDe.getState)().cursorState === "enter") {
                innerRef.style.display = "flex";
                timelineCursor.play();
            }
            if ((0, $dfMDe.getState)().cursorState === "toSmall") {
                innerRef.style.display = "flex";
                timelineCursor.seek(timelineCursor.nextLabel()).resume();
            }
            if ((0, $dfMDe.getState)().cursorState === "leave") {
                innerRef.style.display = "none";
                timelineCursor.pause().progress(0);
            }
        }
    }, "cursorState");
}
(0, $jbrIz.onDomReady)($b8ad3c0a465522bd$export$f22da7240b7add18);


