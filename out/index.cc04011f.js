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
const $c8f4927d2bde1571$var$id = "#screen6";
function $c8f4927d2bde1571$export$f22da7240b7add18() {
    const innerRef = (0, $7Hbkn.el)("#screen6");
    const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen6Enter`];
    const imageRef = (0, $7Hbkn.els)("#screen6 .imageRef");
    const accordionElements = (0, $7Hbkn.els)("#screen6 .accordion-element");
    for(let i = 0; i < accordionElements.length; i++)accordionElements[i].addEventListener("click", ()=>handleClick(i));
    (0, $dfMDe.selectState)((newState)=>{
        for(let i = 0; i < accordionElements.length; i++){
            const accordionElementUl = accordionElements[i].querySelector(".element-ul");
            if (i === (0, $dfMDe.getState)().activeRowIndex) {
                accordionElements[i].classList.add("active");
                accordionElementUl.classList.remove("item-list");
                accordionElementUl.classList.add("itemlistactive");
            } else {
                accordionElements[i].classList.remove("active");
                accordionElementUl.classList.remove("itemlistactive");
                accordionElementUl.classList.add("item-list");
            }
        }
        (0, $l6B09.gsap).to(".item-list", {
            height: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
        (0, $l6B09.gsap).to(".itemlistactive", {
            height: "auto",
            duration: 0.6,
            ease: "back.out(1.7)"
        });
    }, "activeRowIndex");
    (0, $dfMDe.selectState)((newState)=>{
        for(let i = 0; i < imageRef.length; i++)if (i === (0, $dfMDe.getState)().imageNumber) imageRef[i].classList.add("visible");
        else imageRef[i].classList.remove("visible");
    }, "imageNumber");
    const handleClick = (index)=>{
        (0, $dfMDe.updateOneState)("imageNumber", (0, $jbrIz.getRandomInt)(4));
        index === (0, $dfMDe.getState)().activeRowIndex ? (0, $dfMDe.updateOneState)("activeRowIndex", undefined) : (0, $dfMDe.updateOneState)("activeRowIndex", index);
    };
    if (!scrollTrigger) return;
    scrollTrigger.toggleActions = "play none none reset";
    const tl = (0, $l6B09.gsap).timeline({
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
(0, $jbrIz.onDomReady)($c8f4927d2bde1571$export$f22da7240b7add18);


