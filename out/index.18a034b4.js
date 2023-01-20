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

var $26ov3 = parcelRequire("26ov3");
const $4d5781c552e86b2f$var$id = "#screen10";
function $4d5781c552e86b2f$export$f22da7240b7add18() {
    const innerRef = (0, $7Hbkn.el)("#screen10");
    const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen10Enter`];
    const stepBlock = (0, $7Hbkn.els)("#screen10 .stepBlock");
    const stepContainer = (0, $7Hbkn.el)("#screen10 .stepContainer");
    let activeStep = 0;
    const xStart = stepContainer.getBoundingClientRect().x;
    const changeActiveStep = ()=>{
        (0, $dfMDe.updateOneState)("cursorState", "toSmall");
        if (activeStep <= Math.floor((xStart + 20 - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width)) activeStep = Math.floor((xStart + 20 - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width);
        if (activeStep > Math.floor((xStart - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width)) activeStep = Math.floor((xStart - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width) + 1;
        if (xStart - stepContainer.getBoundingClientRect().x < 1) activeStep = 0;
        changeAtiveClass();
    };
    const changeAtiveClass = ()=>{
        for(let i = 0; i < stepBlock.length; i++){
            stepBlock[activeStep].querySelector(".circle").classList.add("active");
            if (i !== activeStep) stepBlock[i].querySelector(".circle").classList.remove("active");
        }
    };
    (0, $l6B09.gsap).registerPlugin((0, $26ov3.Draggable));
    (0, $26ov3.Draggable).create(stepContainer, {
        type: "x",
        duration: 0.4,
        ease: "power4.out",
        lockAxis: true,
        bounds: {
            minX: -stepBlock[0].getBoundingClientRect().width * (stepBlock.length - 1),
            maxX: 0
        },
        onDrag: changeActiveStep
    });
    if (!scrollTrigger) return;
    if (window.innerWidth > 900 && !(0, $jbrIz.isTouchDevice)()) {
        innerRef.addEventListener("mouseenter", (e)=>handleCursorFolowMove(e), false);
        innerRef.addEventListener("mouseleave", (e)=>handleCursorFolowLeave(e), false);
    }
    const handleCursorFolowMove = (e)=>{
        (0, $dfMDe.updateOneState)("cursorState", "enter");
    };
    const handleCursorFolowLeave = (e)=>{
        (0, $dfMDe.updateOneState)("cursorState", "leave");
    };
    (0, $l6B09.gsap).context(()=>{
        scrollTrigger.toggleActions = "play none none reset";
        const tl = (0, $l6B09.gsap).timeline({
            scrollTrigger: scrollTrigger,
            paused: true
        }).from(stepContainer, {
            xPercent: 100,
            ease: "back.out(1.7)",
            duration: 0.8
        });
    }, innerRef);
}
(0, $jbrIz.onDomReady)($4d5781c552e86b2f$export$f22da7240b7add18);


