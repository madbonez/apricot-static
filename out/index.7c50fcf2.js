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

var $1A24E = parcelRequire("1A24E");
const $c1fd9851a894a4d1$var$id = "#header";
function $c1fd9851a894a4d1$export$f22da7240b7add18() {
    const header = (0, $1A24E.el)(".header");
    const burgerIcon = (0, $1A24E.el)(".burger-icon");
    const closeIcon = (0, $1A24E.el)(".close-icon");
    const navbarLink = (0, $1A24E.els)(".navbarLink");
    const buttonArrow = (0, $1A24E.el)(".header__buttonArrow");
    const logo = (0, $1A24E.el)("#header .logo");
    const buttonWhite = (0, $1A24E.el)("#header .buttonWhite");
    buttonArrow.addEventListener("click", ()=>{
        (0, $gkwRL.updateOneState)("scrollPage", "form");
    });
    logo.addEventListener("click", ()=>{
        (0, $gkwRL.updateOneState)("scrollPage", "top");
    });
    buttonWhite.addEventListener("click", ()=>{
        burgerIcon.classList.add("visible");
        closeIcon.classList.remove("visible");
        header.classList.remove("navActive");
        (0, $gkwRL.updateOneState)("scrollPage", "form");
    });
    //  const [lang, setlang] = useState('En');
    for(let i = 0; i < navbarLink.length; i++)navbarLink[i].addEventListener("click", ()=>{
        burgerIcon.classList.add("visible");
        closeIcon.classList.remove("visible");
        header.classList.remove("navActive");
        (0, $gkwRL.updateOneState)("scrollPage", navbarLink[i].dataset.link);
    });
    const burgerChange = ()=>{
        (0, $gkwRL.updateOneState)("burger", ()=>!(0, $gkwRL.getState)().burger);
        header.classList.toggle("navActive");
        burgerIcon.classList.toggle("visible");
        closeIcon.classList.toggle("visible");
    };
    const mobileBtn = (0, $1A24E.el)(".mobileBtn");
    mobileBtn.addEventListener("click", burgerChange);
}
(0, $ix1dx.onDomReady)($c1fd9851a894a4d1$export$f22da7240b7add18);

})();
