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

var $l6B09 = parcelRequire("l6B09");

var $7Hbkn = parcelRequire("7Hbkn");

var $dfMDe = parcelRequire("dfMDe");
const $5c52558e4badd034$var$id = "#screen1";
function $5c52558e4badd034$export$f22da7240b7add18() {
    const word1Ref = document.querySelector("#word1Ref");
    const word2Ref = document.querySelector("#word2Ref");
    const word3Ref = document.querySelector("#word3Ref");
    const buttonArrow = (0, $7Hbkn.el)("#screen1 .buttonArrow");
    let tl = (0, $l6B09.gsap).timeline();
    tl.from(word1Ref, {
        y: 120,
        opacity: 0,
        ease: "power4.Out",
        duration: 1,
        delay: 0.15
    });
    tl.from(word2Ref, {
        y: 120,
        opacity: 0,
        ease: "power4.Out",
        duration: 1
    }, "<0.15");
    tl.from(word3Ref, {
        y: 120,
        opacity: 0,
        ease: "power4.Out",
        duration: 1
    }, "<0.15");
    buttonArrow.addEventListener("click", ()=>{
        (0, $dfMDe.updateOneState)("scrollPage", "form");
    });
}
(0, $jbrIz.onDomReady)($5c52558e4badd034$export$f22da7240b7add18);


