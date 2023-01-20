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

var $7Hbkn = parcelRequire("7Hbkn");

var $7PrnQ = parcelRequire("7PrnQ");
const $446220435cdf4a64$var$id = "#popup";
function $446220435cdf4a64$export$f22da7240b7add18() {
    let popupScrollBar;
    let popupContentRef = (0, $7Hbkn.els)(".popupContentRef");
    const popupRef = (0, $7Hbkn.el)("#popup");
    const popupCloseRef = (0, $7Hbkn.els)(".popupCloseRef");
    const popupContainer7 = (0, $7Hbkn.el)(".popupContainer_7");
    const popupContainer9 = (0, $7Hbkn.el)(".popupContainer_9");
    const buttonNext = (0, $7Hbkn.els)("#popup .ButtonBlock .buttonArrowRef");
    const popup9 = (0, $7Hbkn.els)("#screen9 .projectBlock").length;
    const popup7 = (0, $7Hbkn.els)("#screen7 .blockAnimation").length;
    const calcNextPopup = (id)=>{
        id = id + 1;
        if (id > popup7 + popup9 - 1) id = popup7;
        return id;
    };
    buttonNext.forEach((item)=>item.addEventListener("click", (e)=>(0, $dfMDe.updateOneState)("activePopupId", calcNextPopup((0, $dfMDe.getState)().activePopupId))));
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().activePopupId) {
            popupRef.addEventListener("click", ()=>{
                (0, $dfMDe.updateOneState)("activePopupId", null);
            });
            popupCloseRef.forEach((item)=>item.addEventListener("click", ()=>{
                    (0, $dfMDe.updateOneState)("activePopupId", null);
                }, true));
            popupContentRef[(0, $dfMDe.getState)().activePopupId].addEventListener("click", (e)=>{
                e.stopPropagation();
            });
            popupScrollBar = (0, $7PrnQ.initSmoothScrollbar)(popupContentRef[(0, $dfMDe.getState)().activePopupId], false);
        }
    }, "activePopupId");
    const nextPopup = ()=>{
        popupScrollBar.scrollTo(0, 0);
    //  nextPopupId(9);
    };
    const previousPopup = ()=>{
        popupScrollBar.scrollTo(0, 0);
    //   previousPopupId(9);
    };
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().activePopupId !== null) {
            popupRef.classList.add("active");
            if ((0, $dfMDe.getState)().activePopupScreen === "7") {
                popupContainer7.classList.add("active");
                popupContainer9.classList.remove("active");
                for(let i = 0; i < popupContentRef.length; i++)if (i === Number((0, $dfMDe.getState)().activePopupId)) popupContentRef[i].classList.add("active");
                else popupContentRef[i].classList.remove("active");
            }
            if ((0, $dfMDe.getState)().activePopupScreen === "9") {
                popupContainer7.classList.remove("active");
                popupContainer9.classList.add("active");
                for(let i1 = 0; i1 < popupContentRef.length; i1++)if (i1 === Number((0, $dfMDe.getState)().activePopupId)) popupContentRef[i1].classList.add("active");
                else popupContentRef[i1].classList.remove("active");
            }
        } else {
            popupRef.classList.remove("active");
            popupContainer7.classList.remove("active");
            popupContainer9.classList.remove("active");
            for(let i2 = 0; i2 < popupContentRef.length; i2++)popupContentRef[i2].classList.remove("active");
        }
    }, "activePopupId");
}
(0, $jbrIz.onDomReady)($446220435cdf4a64$export$f22da7240b7add18);


