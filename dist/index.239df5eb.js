(function () {
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
parcelRequire.register("ix1dx", function(module, exports) {

$parcel$export(module.exports, "onDomReady", function () { return $f9c3f774c17381db$export$537b54b30f329b90; });
function $f9c3f774c17381db$export$e0969da9b8fb378d() {
    console.log("test");
}
function $f9c3f774c17381db$export$537b54b30f329b90(fn) {
    document.addEventListener("DOMContentLoaded", fn);
}

});

parcelRequire.register("gkwRL", function(module, exports) {

$parcel$export(module.exports, "updateState", function () { return $11c42eabf89ba9f0$export$4971331372cec95a; });
$parcel$export(module.exports, "getState", function () { return $11c42eabf89ba9f0$export$50fdfeece43146fd; });
$parcel$export(module.exports, "selectState", function () { return $11c42eabf89ba9f0$export$7d0529cae993db76; });
let $11c42eabf89ba9f0$var$globalState = {};
const $11c42eabf89ba9f0$var$listeners = [];
function $11c42eabf89ba9f0$export$4971331372cec95a(newState) {
    $11c42eabf89ba9f0$var$globalState = {
        ...newState
    };
    $11c42eabf89ba9f0$var$listeners.forEach((fn)=>fn($11c42eabf89ba9f0$var$globalState));
}
function $11c42eabf89ba9f0$export$50fdfeece43146fd() {
    return $11c42eabf89ba9f0$var$globalState;
}
function $11c42eabf89ba9f0$export$7d0529cae993db76(fn) {
    if ($11c42eabf89ba9f0$var$listeners.indexOf(fn) === -1) $11c42eabf89ba9f0$var$listeners.push(fn);
    fn($11c42eabf89ba9f0$var$globalState);
}
function $11c42eabf89ba9f0$export$f500693cef883ffd(fn) {
    const index = $11c42eabf89ba9f0$var$listeners.indexOf(fn);
    if (index !== -1) $11c42eabf89ba9f0$var$listeners.splice(index, 1);
}

});


var $ix1dx = parcelRequire("ix1dx");

var $gkwRL = parcelRequire("gkwRL");
const $6a61ee6ad0dce8c9$var$id = "#screen1";
function $6a61ee6ad0dce8c9$export$f22da7240b7add18() {
    document.querySelector(`${$6a61ee6ad0dce8c9$var$id} button`).addEventListener("click", ()=>{
        console.log("clicked 1");
        const state = (0, $gkwRL.getState)();
        var _counter;
        (0, $gkwRL.updateState)({
            counter: ((_counter = state.counter) !== null && _counter !== void 0 ? _counter : 0) + 1
        });
    });
}
(0, $ix1dx.onDomReady)($6a61ee6ad0dce8c9$export$f22da7240b7add18);

})();
