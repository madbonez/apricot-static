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
const $f007ed80e47be936$var$id = "#footer";
function $f007ed80e47be936$export$f22da7240b7add18() {
    const orangeText = (0, $7Hbkn.el)("#footer .orangeText a");
    const socialAnimation = (0, $7Hbkn.els)("#footer .socialAnimation");
    const infoLinks = (0, $7Hbkn.el)("#footer .infoLinksInnerDiv");
    const buttonBack = (0, $7Hbkn.el)("#footer .buttonBack");
    orangeText.addEventListener("mouseover", (e)=>onMouseOverOrangeText(e));
    orangeText.addEventListener("mouseleave", (e)=>onMouseLeaveOrangeText(e));
    for(let i = 0; i < socialAnimation.length; i++){
        socialAnimation[i].addEventListener("mouseover", (e)=>onMouseOverSocial(socialAnimation[i].dataset.index));
        socialAnimation[i].addEventListener("mouseleave", (e)=>onMouseLeaveSocial(socialAnimation[i].dataset.index));
    }
    infoLinks.addEventListener("mouseover", ()=>onMouseOverLinks());
    infoLinks.addEventListener("mouseleave", ()=>onMouseLeaveLinks());
    buttonBack.addEventListener("mouseover", ()=>onMouseOverTop());
    buttonBack.addEventListener("mouseleave", ()=>onMouseLeaveTop());
    buttonBack.addEventListener("click", ()=>(0, $dfMDe.updateOneState)("scrollPage", "top"));
    const onMouseOverOrangeText = (e)=>{
        (0, $l6B09.gsap).timeline().to(e.target, {
            color: getComputedStyle(window.document.body).getPropertyValue("--orange"),
            duration: 0.8,
            ease: "power4.out"
        });
    };
    const onMouseLeaveOrangeText = (e)=>{
        (0, $l6B09.gsap).timeline().to(e.target, {
            color: getComputedStyle(window.document.body).getPropertyValue("--white"),
            duration: 0.8,
            ease: "power4.out"
        });
    };
    const onMouseOverSocial = (id)=>{
        (0, $l6B09.gsap).timeline().to(`.socialAnimation${id} svg`, {
            color: getComputedStyle(window.document.body).getPropertyValue("--orange"),
            duration: 0.4,
            ease: "power4.out"
        });
    };
    const onMouseLeaveSocial = (id)=>{
        (0, $l6B09.gsap).timeline().to(`.socialAnimation${id} svg`, {
            color: getComputedStyle(window.document.body).getPropertyValue("--white"),
            duration: 0.4,
            ease: "power4.out"
        });
    };
    const onMouseOverTop = ()=>{
        (0, $l6B09.gsap).timeline().to(".arrow", {
            y: -30,
            duration: 0.6,
            ease: "power4.out"
        }).to(".textToTop", {
            color: getComputedStyle(window.document.body).getPropertyValue("--orange"),
            duration: 0.6,
            ease: "power4.out"
        }, "<").to(".arrowAnimation", {
            y: -30,
            duration: 0.6,
            ease: "power4.out"
        }, "<");
    };
    const onMouseLeaveTop = ()=>{
        (0, $l6B09.gsap).timeline().to(".arrow", {
            y: 0,
            duration: 0.6,
            ease: "power4.out"
        }).to(".textToTop", {
            color: getComputedStyle(window.document.body).getPropertyValue("--white"),
            duration: 0.6,
            ease: "power4.out"
        }, "<").to(".arrowAnimation", {
            y: 0,
            duration: 0.6,
            ease: "power4.out"
        }, "<");
    };
    const onMouseOverLinks = ()=>{
        (0, $l6B09.gsap).timeline().to(".infoLink", {
            y: -25,
            duration: 0.6,
            ease: "power4.out",
            color: getComputedStyle(window.document.body).getPropertyValue("--orange")
        }).to(".actionInfoLinks", {
            y: -20,
            duration: 0.6,
            ease: "power4.out"
        }, "<");
    };
    const onMouseLeaveLinks = ()=>{
        (0, $l6B09.gsap).timeline().to(".infoLink", {
            y: 0,
            duration: 0.6,
            ease: "power4.out",
            color: getComputedStyle(window.document.body).getPropertyValue("--white")
        }).to(".actionInfoLinks", {
            y: 0,
            duration: 0.6,
            ease: "power4.out"
        }, "<");
    };
}
(0, $jbrIz.onDomReady)($f007ed80e47be936$export$f22da7240b7add18);


