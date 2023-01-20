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
function $2b4795f67f52d70d$export$f22da7240b7add18() {
    const buttonGreyRef = (0, $7Hbkn.els)(".buttonGreyRef");
    const onMouseOverGreyButton = ()=>{
        const tl = (0, $l6B09.gsap).timeline({}).to(".buttonGreyAnimation", {
            duration: 0.5,
            ease: "power4.out",
            left: 0,
            width: 228,
            height: 228
        }).to(".buttonGrey", {
            duration: 0.5,
            color: getComputedStyle(window.document.body).getPropertyValue("--white")
        }, "<");
    };
    const onMouseLeaveGreyButton = ()=>{
        const tl = (0, $l6B09.gsap).timeline({}).to(".buttonGreyAnimation", {
            left: "100%",
            duration: 0.5,
            ease: "power4.out"
        }).to(".buttonGrey", {
            duration: 0.5,
            color: getComputedStyle(window.document.body).getPropertyValue("--black")
        }, "<");
    };
    const popup9 = (0, $7Hbkn.els)("#screen9 .projectBlock").length;
    const popup7 = (0, $7Hbkn.els)("#screen7 .blockAnimation").length;
    const calcPreviousePopup = (id)=>{
        id = id - 1;
        if (id < popup7) id = popup7 + popup9 - 1;
        return id;
    };
    buttonGreyRef.forEach((item)=>item.addEventListener("click", (e)=>(0, $dfMDe.updateOneState)("activePopupId", calcPreviousePopup((0, $dfMDe.getState)().activePopupId))));
    buttonGreyRef.forEach((item)=>item.addEventListener("mouseover", ()=>onMouseOverGreyButton()));
    buttonGreyRef.forEach((item)=>item.addEventListener("mouseleave", ()=>onMouseLeaveGreyButton()));
}
(0, $jbrIz.onDomReady)($2b4795f67f52d70d$export$f22da7240b7add18);


