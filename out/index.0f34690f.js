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
const $1ab8beab91be6216$var$id = "#header";
function $1ab8beab91be6216$export$f22da7240b7add18() {
    const header = (0, $7Hbkn.el)(".header");
    const burgerIcon = (0, $7Hbkn.el)(".burger-icon");
    const closeIcon = (0, $7Hbkn.el)(".close-icon");
    const navbarLink = (0, $7Hbkn.els)(".navbarLink");
    const buttonArrow = (0, $7Hbkn.el)(".header__buttonArrow");
    const logo = (0, $7Hbkn.el)("#header .logo");
    const buttonWhite = (0, $7Hbkn.el)("#header .buttonWhite");
    buttonArrow.addEventListener("click", ()=>{
        (0, $dfMDe.updateOneState)("scrollPage", "form");
    });
    logo.addEventListener("click", ()=>{
        (0, $dfMDe.updateOneState)("scrollPage", "top");
    });
    buttonWhite.addEventListener("click", ()=>{
        burgerIcon.classList.add("visible");
        closeIcon.classList.remove("visible");
        header.classList.remove("navActive");
        (0, $dfMDe.updateOneState)("scrollPage", "form");
    });
    //  const [lang, setlang] = useState('En');
    for(let i = 0; i < navbarLink.length; i++)navbarLink[i].addEventListener("click", ()=>{
        burgerIcon.classList.add("visible");
        closeIcon.classList.remove("visible");
        header.classList.remove("navActive");
        (0, $dfMDe.updateOneState)("scrollPage", navbarLink[i].dataset.link);
    });
    const burgerChange = ()=>{
        (0, $dfMDe.updateOneState)("burger", ()=>!(0, $dfMDe.getState)().burger);
        header.classList.toggle("navActive");
        burgerIcon.classList.toggle("visible");
        closeIcon.classList.toggle("visible");
    };
    const mobileBtn = (0, $7Hbkn.el)(".mobileBtn");
    mobileBtn.addEventListener("click", burgerChange);
}
(0, $jbrIz.onDomReady)($1ab8beab91be6216$export$f22da7240b7add18);


