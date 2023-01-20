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
const $ae62ec888865158f$var$id = "#screen9";
function $ae62ec888865158f$export$f22da7240b7add18() {
    const innerRef = (0, $7Hbkn.el)("#screen9");
    const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen9Enter`];
    const projectBlock = (0, $7Hbkn.els)("#screen9 .projectBlock");
    for(let i = 0; i < projectBlock.length; i++){
        projectBlock[i].addEventListener("click", ()=>{
            (0, $dfMDe.updateOneState)("activePopupScreen", "9");
            (0, $dfMDe.updateOneState)("activePopupId", projectBlock[i].dataset.popup);
        });
        projectBlock[i].addEventListener("mouseenter", ()=>onMouseEnter(projectBlock[i].dataset.popup));
        projectBlock[i].addEventListener("mouseleave", ()=>onMouseLeave(projectBlock[i].dataset.popup));
    }
    /*    const [arrProjectList, setProjectList] = useState(projectListAll.slice(0, 2));
    const handleClick = () => {
        return () => {
            if (arrProjectList.length < 5) {
                return setProjectList(projectListAll)
            } else {
                return setProjectList(projectListAll.slice(0, 4))
            }
        }
    }*/ const videoPlay = (e)=>{
        e.target.play();
    };
    const videoPause = (e)=>{
        e.target.pause();
    };
    const onMouseEnter = (id)=>{
        const tl = (0, $l6B09.gsap).timeline({}).fromTo(`.arrow2-${id}`, {
            x: -20,
            y: 0,
            duration: 0.5,
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 0,
            y: -20,
            ease: "power4.Out"
        }).fromTo(`.arrow-${id}`, {
            x: 0,
            y: 0,
            duration: 0.5,
            visibility: "hidden",
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 20,
            visibility: "visible",
            y: -20,
            ease: "power4.Out"
        }, "<");
    };
    const onMouseLeave = (id)=>{
        const tl = (0, $l6B09.gsap).timeline({}).fromTo(`.arrow2-${id}`, {
            x: -20,
            y: 0,
            duration: 0.5,
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 0,
            y: -20,
            ease: "power4.Out"
        }).fromTo(`.arrow-${id}`, {
            x: 0,
            y: 0,
            duration: 0.5,
            visibility: "hidden",
            ease: "power4.Out"
        }, {
            duration: 0.5,
            x: 20,
            visibility: "visible",
            y: -20,
            ease: "power4.Out"
        }, "<");
    };
    if (!scrollTrigger) return;
    (0, $l6B09.gsap).context(()=>{
        scrollTrigger.toggleActions = "play none none reset";
        const tl = (0, $l6B09.gsap).timeline({
            scrollTrigger: scrollTrigger,
            paused: true
        }).from([
            ".button",
            ".tags"
        ], {
            y: 70,
            duration: 0.5,
            ease: "power4.out",
            opacity: 0,
            delay: 0.4
        });
        (0, $l6B09.gsap).utils.toArray(".projectBlock").forEach((item, index)=>{
            const tl2 = (0, $l6B09.gsap).timeline({
                scrollTrigger: scrollTrigger,
                paused: true
            }).from(item, {
                y: 80,
                duration: 1,
                delay: 0.4 + 0.1 * (index + 1),
                ease: "power4.out",
                opacity: 0
            });
        });
    }, innerRef);
}
(0, $jbrIz.onDomReady)($ae62ec888865158f$export$f22da7240b7add18);


