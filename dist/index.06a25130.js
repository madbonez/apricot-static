function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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
parcelRequire.register("jbrIz", function(module, exports) {

$parcel$export(module.exports, "onDomReady", function () { return $95a056f974859800$export$537b54b30f329b90; });
function $95a056f974859800$export$e0969da9b8fb378d() {
    console.log("test");
}
function $95a056f974859800$export$537b54b30f329b90(fn) {
    document.addEventListener("DOMContentLoaded", fn);
}

});

parcelRequire.register("dfMDe", function(module, exports) {

$parcel$export(module.exports, "updateState", function () { return $38418c12d21a830c$export$4971331372cec95a; });
$parcel$export(module.exports, "getState", function () { return $38418c12d21a830c$export$50fdfeece43146fd; });
$parcel$export(module.exports, "selectState", function () { return $38418c12d21a830c$export$7d0529cae993db76; });
let $38418c12d21a830c$var$globalState = {};
const $38418c12d21a830c$var$listeners = [];
function $38418c12d21a830c$export$4971331372cec95a(newState) {
    $38418c12d21a830c$var$globalState = {
        ...newState
    };
    $38418c12d21a830c$var$listeners.forEach((fn)=>fn($38418c12d21a830c$var$globalState));
}
function $38418c12d21a830c$export$50fdfeece43146fd() {
    return $38418c12d21a830c$var$globalState;
}
function $38418c12d21a830c$export$7d0529cae993db76(fn) {
    if ($38418c12d21a830c$var$listeners.indexOf(fn) === -1) $38418c12d21a830c$var$listeners.push(fn);
    fn($38418c12d21a830c$var$globalState);
}
function $38418c12d21a830c$export$f500693cef883ffd(fn) {
    const index = $38418c12d21a830c$var$listeners.indexOf(fn);
    if (index !== -1) $38418c12d21a830c$var$listeners.splice(index, 1);
}

});


var $jbrIz = parcelRequire("jbrIz");

var $dfMDe = parcelRequire("dfMDe");
const $5c52558e4badd034$var$id = "#screen1";
function $5c52558e4badd034$export$f22da7240b7add18() {
    document.querySelector(`${$5c52558e4badd034$var$id} button`).addEventListener("click", ()=>{
        console.log("clicked 1");
        const state = (0, $dfMDe.getState)();
        (0, $dfMDe.updateState)({
            counter: (state.counter ?? 0) + 1
        });
    });
}
(0, $jbrIz.onDomReady)($5c52558e4badd034$export$f22da7240b7add18);


