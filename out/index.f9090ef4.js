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
const $84711ff85ae69b9e$var$id = "#screen6";
function $84711ff85ae69b9e$export$f22da7240b7add18() {
    const innerRef = (0, $1A24E.el)("#screen6");
    const scrollTrigger = (0, $gkwRL.getState)().scrollTriggers[`screen6Enter`];
    const imageRef = (0, $1A24E.els)("#screen6 .imageRef");
    const accordionElements = (0, $1A24E.els)("#screen6 .accordion-element");
    for(let i = 0; i < accordionElements.length; i++)accordionElements[i].addEventListener("click", ()=>handleClick(i));
    (0, $gkwRL.selectState)((newState)=>{
        for(let i = 0; i < accordionElements.length; i++){
            const accordionElementUl = accordionElements[i].querySelector(".element-ul");
            if (i === (0, $gkwRL.getState)().activeRowIndex) {
                accordionElements[i].classList.add("active");
                accordionElementUl.classList.remove("item-list");
                accordionElementUl.classList.add("itemlistactive");
            } else {
                accordionElements[i].classList.remove("active");
                accordionElementUl.classList.remove("itemlistactive");
                accordionElementUl.classList.add("item-list");
            }
        }
        (0, $h8x9E.gsap).to(".item-list", {
            height: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
        (0, $h8x9E.gsap).to(".itemlistactive", {
            height: "auto",
            duration: 0.6,
            ease: "back.out(1.7)"
        });
    }, "activeRowIndex");
    (0, $gkwRL.selectState)((newState)=>{
        for(let i = 0; i < imageRef.length; i++)if (i === (0, $gkwRL.getState)().imageNumber) imageRef[i].classList.add("visible");
        else imageRef[i].classList.remove("visible");
    }, "imageNumber");
    const handleClick = (index)=>{
        (0, $gkwRL.updateOneState)("imageNumber", (0, $ix1dx.getRandomInt)(4));
        index === (0, $gkwRL.getState)().activeRowIndex ? (0, $gkwRL.updateOneState)("activeRowIndex", undefined) : (0, $gkwRL.updateOneState)("activeRowIndex", index);
    };
    if (!scrollTrigger) return;
    scrollTrigger.toggleActions = "play none none reset";
    const tl = (0, $h8x9E.gsap).timeline({
        scrollTrigger: scrollTrigger,
        paused: true
    }).from(imageRef, {
        y: 70,
        duration: 0.8,
        opacity: 0,
        ease: "power4.out"
    }).from(".accordion-item", {
        y: 70,
        duration: 1,
        marginBottom: 50,
        ease: "power4.out",
        opacity: 0
    }, "<0.4");
}
(0, $ix1dx.onDomReady)($84711ff85ae69b9e$export$f22da7240b7add18);

})();
