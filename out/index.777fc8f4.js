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

var $3NF51 = parcelRequire("3NF51");
const $ae4b743cea4204d8$var$id = "#screen10";
function $ae4b743cea4204d8$export$f22da7240b7add18() {
    const innerRef = (0, $1A24E.el)("#screen10");
    const scrollTrigger = (0, $gkwRL.getState)().scrollTriggers[`screen10Enter`];
    const stepBlock = (0, $1A24E.els)("#screen10 .stepBlock");
    const stepContainer = (0, $1A24E.el)("#screen10 .stepContainer");
    let activeStep = 0;
    const xStart = stepContainer.getBoundingClientRect().x;
    const changeActiveStep = ()=>{
        (0, $gkwRL.updateOneState)("cursorState", "toSmall");
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
    (0, $h8x9E.gsap).registerPlugin((0, $3NF51.Draggable));
    (0, $3NF51.Draggable).create(stepContainer, {
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
    if (window.innerWidth > 900 && !(0, $ix1dx.isTouchDevice)()) {
        innerRef.addEventListener("mouseenter", (e)=>handleCursorFolowMove(e), false);
        innerRef.addEventListener("mouseleave", (e)=>handleCursorFolowLeave(e), false);
    }
    const handleCursorFolowMove = (e)=>{
        (0, $gkwRL.updateOneState)("cursorState", "enter");
    };
    const handleCursorFolowLeave = (e)=>{
        (0, $gkwRL.updateOneState)("cursorState", "leave");
    };
    (0, $h8x9E.gsap).context(()=>{
        scrollTrigger.toggleActions = "play none none reset";
        const tl = (0, $h8x9E.gsap).timeline({
            scrollTrigger: scrollTrigger,
            paused: true
        }).from(stepContainer, {
            xPercent: 100,
            ease: "back.out(1.7)",
            duration: 0.8
        });
    }, innerRef);
}
(0, $ix1dx.onDomReady)($ae4b743cea4204d8$export$f22da7240b7add18);

})();
