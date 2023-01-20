// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3CcKB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "136502ad604c8427";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2FWbZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "main", ()=>main);
var _utils = require("../utils/utils");
var _state = require("../state/state");
var _gsap = require("gsap");
var _scrollTrigger = require("gsap/dist/ScrollTrigger");
var _draggable = require("gsap/dist/Draggable");
var _dom = require("../utils/dom");
function main() {
    const sliders = (0, _dom.els)(".slider");
    console.log(sliders);
    for(let ii = 0; ii < sliders.length; ii++){
        const slider = sliders[ii];
        const slides = slider.querySelectorAll(".circleImage");
        const scrollerRef = slider.querySelector(".scrollerRef");
        const sliderRef = slider.querySelector(".sliderRef");
        let circleWidth = 0;
        let overlap = 60;
        let timeline;
        let enterTimeline;
        let breakpoints = [];
        let indicatorActive = 5;
        let endDragTween;
        let scrollTrigger = (0, _state.getState)().scrollTriggers[`screen${slider.dataset.block}Horizontal`];
        let enterScrollTrigger = (0, _state.getState)().scrollTriggers[`screen${slider.dataset.block}Enter`];
        const indicators = slider.querySelectorAll(".indicators");
        const targetToString = (arr1, arr2)=>{
            const result = arr1.map((item)=>{
                return `#screen${slider.dataset.block} .circle-image-${item}`;
            }).join(", ") + (arr2.length > 0 ? `, ${arr2.map((item)=>{
                return `#screen${slider.dataset.block} .circle-text-${item}`;
            }).join(" , ")}` : "");
            return result;
        };
        (0, _gsap.gsap).registerPlugin((0, _scrollTrigger.ScrollTrigger), (0, _draggable.Draggable));
        (0, _gsap.gsap).context(()=>{
            let allCircles = (0, _gsap.gsap).utils.toArray(slider.querySelectorAll(".circle"));
            circleWidth = allCircles[0].offsetHeight;
            console.log(circleWidth);
            overlap = circleWidth * 0.1 > 60 ? 60 : circleWidth * 0.1;
            let accumulator = 0;
            allCircles.forEach((circle, index)=>{
                let offset = index === 0 ? 0 : overlap;
                (0, _gsap.gsap).set(circle, {
                    x: circleWidth * index - offset * index
                });
                accumulator += circleWidth - offset;
            });
            sliderRef.style.width = `${accumulator}px`;
        }, scrollerRef);
        // if (!scrollTrigger || !enterScrollTrigger) {
        //     return;
        // }
        if (window.innerWidth > 900 && !(0, _utils.isTouchDevice)()) {
            sliderRef.addEventListener("mouseenter", (e)=>handleCursorFolowEnter(e), false);
            sliderRef.addEventListener("mouseleave", (e)=>handleCursorFolowLeave(e), false);
        }
        const handleCursorFolowEnter = (e)=>{
            console.log("slider enter");
            (0, _state.updateOneState)("cursorState", "enter");
            console.log((0, _state.getState)().cursorState);
        };
        const handleCursorFolowLeave = (e)=>{
            console.log("slider leave");
            (0, _state.updateOneState)("cursorState", "leave");
            console.log((0, _state.getState)().cursorState);
        };
        const indicatorChange = (id)=>{
            (0, _gsap.gsap).context(()=>{
                if (id !== indicatorActive) {
                    (0, _gsap.gsap).fromTo(slider.querySelector(`.indicator-${id}`), {
                        x: -12,
                        y: 24,
                        opacity: 0,
                        ease: "back.out(1.7)",
                        duration: 0.5
                    }, {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        ease: "back.out(1.7)",
                        duration: 0.5
                    });
                    (0, _gsap.gsap).to(slider.querySelector(`.indicator-${indicatorActive}`), {
                        x: 12,
                        y: -24,
                        opacity: 0,
                        ease: "back.out(1.7)",
                        duration: 0.5
                    });
                    indicatorActive = id;
                }
            }, scrollerRef);
        };
        indicatorChange(0);
        onScrollTriggersReady();
        function onScrollTriggersReady() {
            const handlerIndicatorMouseEnter = (id)=>{
                if (window.innerWidth > 900 && !(0, _utils.isTouchDevice)() && id !== indicatorActive) (0, _gsap.gsap).context(()=>{
                    (0, _gsap.gsap).fromTo(slider.querySelector(`.indicator-${id}`), {
                        x: -12,
                        y: 24,
                        opacity: 0,
                        ease: "back.out(1.7)",
                        delay: 0.5
                    }, {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        ease: "back.out(1.7)",
                        delay: 0.5
                    });
                }, scrollerRef);
            };
            const handlerIndicatorMouseLeave = (id)=>{
                if (window.innerWidth > 900 && !(0, _utils.isTouchDevice)() && id !== indicatorActive) (0, _gsap.gsap).context(()=>{
                    (0, _gsap.gsap).to(slider.querySelector(`.indicator-${id}`), {
                        x: 12,
                        y: -24,
                        opacity: 0,
                        ease: "back.out(1.7)",
                        delay: 0.5
                    });
                }, scrollerRef);
            };
            const handlerIndicatorClick = (id)=>{
                const mapperX = (0, _gsap.gsap).utils.mapRange(0, (circleWidth - overlap) * (slides.length * 2 - 1), 0, 1);
                (0, _gsap.gsap).to(timeline, {
                    progress: mapperX(2 * id * (circleWidth - overlap)),
                    ease: "power4.out",
                    onComplete: ()=>{
                        window.innerWidth > 900 && !(0, _utils.isTouchDevice)() && scrollTrigger.scroll(breakpoints[id]);
                        indicatorUpdate();
                    }
                });
            };
            const indicatorUpdate = ()=>{
                const mapperX = (0, _gsap.gsap).utils.mapRange(0, (circleWidth - overlap) * (2 * slides.length - 1), 0, 1);
                const breakpointsNorm = breakpoints.map((item)=>Math.round(mapperX(item - scrollTrigger.start) * 1000));
                if (breakpointsNorm.findIndex((item)=>item > Math.round(timeline.progress() * 1000)) > 0) indicatorChange(breakpointsNorm.findIndex((item)=>item > Math.round(timeline.progress() * 1000)) - 1);
                else indicatorChange(breakpointsNorm.length - 2);
            };
            function calcBreakpoints(slides, circleWidth, overlap) {
                if (breakpoints.length || !scrollTrigger) return;
                breakpoints.push(scrollTrigger.start);
                let acc = scrollTrigger.start;
                for(let i = 0; i < slides.length - 1; i++){
                    acc += (circleWidth - overlap) * 2;
                    breakpoints.push(acc);
                }
                breakpoints.push((circleWidth - overlap) * (2 * slides.length - 1) + scrollTrigger.start);
            }
            for(let y = 0; y < indicators.length; y++){
                indicators[y].addEventListener("mouseenter", ()=>handlerIndicatorMouseEnter(y));
                indicators[y].addEventListener("mouseleave", ()=>handlerIndicatorMouseLeave(y));
                indicators[y].addEventListener("click", ()=>handlerIndicatorClick(y));
            }
            calcBreakpoints(slides, circleWidth, overlap);
            scrollTrigger.scrub = true;
            const allTargets = slides.length > 3 ? targetToString([
                0,
                1,
                2,
                3
            ], [
                0,
                1,
                2,
                3
            ]) : targetToString([
                0,
                1,
                2
            ], [
                0,
                1,
                2
            ]);
            const targetsStep1 = slides.length > 3 ? targetToString([
                0,
                1,
                2,
                3
            ], [
                1,
                2,
                3
            ]) : targetToString([
                0,
                1,
                2
            ], [
                1,
                2
            ]);
            const targetsStep2 = slides.length > 3 ? targetToString([
                1,
                2,
                3
            ], [
                2,
                3
            ]) : targetToString([
                1,
                2
            ], [
                2
            ]);
            const targetsStep3 = slides.length > 3 ? targetToString([
                2,
                3
            ], [
                3
            ]) : targetToString([
                2
            ], []);
            const targetsStep4 = slides.length > 3 ? targetToString([
                3
            ], []) : "";
            timeline = window.innerWidth > 900 && !(0, _utils.isTouchDevice)() ? (0, _gsap.gsap).timeline({
                paused: true,
                scrollTrigger,
                ease: "none"
            }) : (0, _gsap.gsap).timeline({
                paused: true,
                ease: "none"
            });
            timeline.to(targetsStep1, {
                x: `-=${circleWidth - overlap}px`,
                ease: "none",
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }).addLabel("overlap1", "<").to(slider.querySelectorAll(".imageAnimation"), {
                attr: {
                    x: "+=10%",
                    ease: "none"
                },
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }, "<").to(allTargets, {
                x: `-=${circleWidth - overlap}px`,
                ease: "none",
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }).addLabel("shift1", "<").to(slider.querySelectorAll(".imageAnimation"), {
                attr: {
                    x: "+=10%",
                    ease: "none"
                },
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }, "<").to(targetsStep2, {
                x: `-=${circleWidth - overlap}px`,
                ease: "none",
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }).addLabel("overlap2", "<").to(slider.querySelectorAll(".imageAnimation"), {
                attr: {
                    x: "+=10%",
                    ease: "none"
                },
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }, "<").to(allTargets, {
                x: `-=${circleWidth - overlap}px`,
                ease: "none",
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }).addLabel("shift2", "<").to(slider.querySelectorAll(".imageAnimation"), {
                attr: {
                    x: "+=10%",
                    ease: "none"
                },
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }, "<").to(targetsStep3, {
                x: `-=${circleWidth - overlap}px`,
                ease: "none",
                onComplete: indicatorUpdate,
                onReverseComplete: indicatorUpdate
            }).addLabel("overlap3", "<").to(slider.querySelectorAll(".imageAnimation"), {
                attr: {
                    ease: "none",
                    x: "+=10%"
                },
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }, "<");
            if (slides.length > 3) timeline.to(allTargets, {
                x: `-=${circleWidth - overlap}px`,
                ease: "none",
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }).addLabel("shift3", "<").to(slider.querySelectorAll(".imageAnimation"), {
                attr: {
                    ease: "none",
                    x: "+=10%"
                },
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }, "<").to(targetsStep4, {
                x: `-=${circleWidth - overlap}px`,
                ease: "none",
                onComplete: indicatorUpdate,
                onReverseComplete: indicatorUpdate
            }).addLabel("overlap4", "<").to(slider.querySelectorAll(".imageAnimation"), {
                attr: {
                    ease: "none",
                    x: "+=10%"
                },
                onReverseComplete: indicatorUpdate,
                onComplete: indicatorUpdate
            }, "<");
            let startDrag;
            let progress;
            let scrollProgress;
            let moveDeltaControl = 0;
            const mapperX = window.innerWidth > 900 && !(0, _utils.isTouchDevice)() ? (0, _gsap.gsap).utils.mapRange(0, scrollTrigger?.end - scrollTrigger?.start, 0, 1) : (0, _gsap.gsap).utils.mapRange(0, (circleWidth - overlap) * (slides.length * 2 - 1), 0, 1);
            const startDragHandle = (e)=>{
                if (endDragTween?.isActive()) return;
                console.log("slider drag");
                (0, _state.updateOneState)("cursorState", "toSmall");
                startDrag = e.clientX ? e.clientX : e.changedTouches?.[0]?.clientX;
                progress = timeline.progress();
                scrollProgress = scrollTrigger.scroll();
            };
            const updateTimeline = (e)=>{
                if (endDragTween?.isActive()) return;
                let moveDrag = e.clientX ? e.clientX : e.changedTouches?.[0]?.clientX;
                const moveDelta = moveDrag - startDrag;
                let nextPosition = window.innerWidth > 900 && !(0, _utils.isTouchDevice)() ? scrollProgress - moveDelta : progress - mapperX(moveDelta);
                if (!moveDelta) return;
                if (moveDeltaControl && Math.abs(moveDelta) < moveDeltaControl) {
                    startDrag = moveDrag;
                    scrollProgress = scrollTrigger.scroll();
                    progress = timeline.progress();
                    moveDeltaControl = Math.abs(moveDelta);
                    return;
                }
                moveDeltaControl = Math.abs(moveDelta);
                if (window.innerWidth > 900 && !(0, _utils.isTouchDevice)()) {
                    if (nextPosition >= scrollTrigger.end) nextPosition = scrollTrigger.end;
                    if (nextPosition <= scrollTrigger.start) nextPosition = scrollTrigger.start;
                    scrollTrigger.scroll(nextPosition);
                } else (0, _gsap.gsap).to(timeline, {
                    progress: nextPosition,
                    ease: "power4.out"
                });
                indicatorUpdate();
            };
            const endDragHandle = (e)=>{
                if (endDragTween?.isActive()) return;
                if (e.clientX - startDrag > 0) {
                    if (window.innerWidth > 900 && !(0, _utils.isTouchDevice)()) {
                        for(let j = 0; j < breakpoints.length; j++)if (scrollTrigger.scroll() > breakpoints[j] && scrollTrigger.scroll() < breakpoints[j + 1]) endDragTween = (0, _gsap.gsap).to(timeline, {
                            progress: mapperX(breakpoints[j] - scrollTrigger.start),
                            ease: "power1.out",
                            duration: 0.8,
                            onComplete: ()=>{
                                scrollTrigger.scroll(breakpoints[j]);
                                indicatorUpdate();
                            }
                        });
                    } else {
                        for(let i = 0; i < slides.length; i++)if (timeline.progress() > mapperX(i * 2 * (circleWidth - overlap)) && timeline.progress() < mapperX((i + 1) * 2 * (circleWidth - overlap))) endDragTween = (0, _gsap.gsap).to(timeline, {
                            progress: mapperX(i * 2 * (circleWidth - overlap)),
                            ease: "power1.out",
                            duration: 0.8,
                            onComplete: indicatorUpdate
                        });
                    }
                } else {
                    if (window.innerWidth > 900 && !(0, _utils.isTouchDevice)()) {
                        for(let j1 = 1; j1 < breakpoints.length; j1++)if (scrollTrigger.scroll() < breakpoints[j1] && scrollTrigger.scroll() > breakpoints[j1 - 1]) {
                            if (j1 === breakpoints.length - 1) endDragTween = (0, _gsap.gsap).to(timeline, {
                                progress: 1,
                                duration: 0.8,
                                ease: "power1.out",
                                onComplete: ()=>{
                                    scrollTrigger.scroll(scrollTrigger.end);
                                    indicatorUpdate();
                                }
                            });
                            else endDragTween = (0, _gsap.gsap).to(timeline, {
                                progress: mapperX(breakpoints[j1] - scrollTrigger.start),
                                duration: 0.8,
                                ease: "power1.out",
                                onComplete: ()=>{
                                    scrollTrigger.scroll(breakpoints[j1]);
                                    indicatorUpdate();
                                }
                            });
                        }
                    } else for(let i1 = 1; i1 < slides.length; i1++){
                        if (timeline.progress() < mapperX(i1 * 2 * (circleWidth - overlap)) && timeline.progress() > mapperX((i1 - 1) * 2 * (circleWidth - overlap))) endDragTween = (0, _gsap.gsap).to(timeline, {
                            progress: mapperX(i1 * 2 * (circleWidth - overlap)),
                            ease: "power1.out",
                            duration: 0.8,
                            onComplete: indicatorUpdate
                        });
                        if (timeline.progress() > mapperX(i1 * 2 * (circleWidth - overlap))) endDragTween = (0, _gsap.gsap).to(timeline, {
                            progress: 1,
                            ease: "power1.out",
                            duration: 0.8,
                            onComplete: indicatorUpdate
                        });
                    }
                }
            };
            (0, _draggable.Draggable).create(slider.querySelector(".drag"), {
                type: "x",
                trigger: sliderRef,
                duration: 0.4,
                ease: "power4.out",
                lockAxis: true,
                onDragStart: (e)=>startDragHandle(e),
                onDrag: (e)=>updateTimeline(e),
                onDragEnd: (e)=>endDragHandle(e)
            });
        }
        enterScrollTrigger.scrub = false;
        enterScrollTrigger.toggleActions = "play none none reset";
        enterTimeline = (0, _gsap.gsap).timeline({
            paused: true,
            scrollTrigger: enterScrollTrigger
        }).to(sliderRef, {
            xPercent: -100,
            ease: "back.out(1.7)",
            duration: 0.8
        });
    }
}
(0, _utils.onDomReady)(main);

},{"../utils/utils":"ea5wt","../state/state":"8LIzr","gsap":"fPSuC","gsap/dist/ScrollTrigger":"CiOCQ","gsap/dist/Draggable":"ibRNG","../utils/dom":"8THqZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibRNG":[function(require,module,exports) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }
    function _assertThisInitialized(self) {
        if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    }
    var _doc, _win, _docElement, _body, _divContainer, _svgContainer, _identityMatrix, _gEl, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _hasOffsetBug, _setDoc = function _setDoc(element) {
        var doc = element.ownerDocument || element;
        if (!(_transformProp in element.style) && "msTransform" in element.style) {
            _transformProp = "msTransform";
            _transformOriginProp = _transformProp + "Origin";
        }
        while(doc.parentNode && (doc = doc.parentNode));
        _win = window;
        _identityMatrix = new Matrix2D();
        if (doc) {
            _doc = doc;
            _docElement = doc.documentElement;
            _body = doc.body;
            _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g");
            _gEl.style.transform = "none";
            var d1 = doc.createElement("div"), d2 = doc.createElement("div");
            _body.appendChild(d1);
            d1.appendChild(d2);
            d1.style.position = "static";
            d1.style[_transformProp] = "translate3d(0,0,1px)";
            _hasOffsetBug = d2.offsetParent !== d1;
            _body.removeChild(d1);
        }
        return doc;
    }, _forceNonZeroScale = function _forceNonZeroScale(e) {
        var a, cache;
        while(e && e !== _body){
            cache = e._gsap;
            cache && cache.uncache && cache.get(e, "x");
            if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
                cache.scaleX = cache.scaleY = 1e-4;
                cache.renderTransform(1, cache);
                a ? a.push(cache) : a = [
                    cache
                ];
            }
            e = e.parentNode;
        }
        return a;
    }, _svgTemps = [], _divTemps = [], _getDocScrollTop = function _getDocScrollTop() {
        return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
    }, _getDocScrollLeft = function _getDocScrollLeft() {
        return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
    }, _svgOwner = function _svgOwner(element) {
        return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
    }, _isFixed = function _isFixed(element) {
        if (_win.getComputedStyle(element).position === "fixed") return true;
        element = element.parentNode;
        if (element && element.nodeType === 1) return _isFixed(element);
    }, _createSibling = function _createSibling(element, i) {
        if (element.parentNode && (_doc || _setDoc(element))) {
            var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);
            if (i) {
                if (!svg) {
                    if (!_divContainer) {
                        _divContainer = _createSibling(element);
                        _divContainer.style.cssText = css;
                    }
                    e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                    _divContainer.appendChild(e);
                } else {
                    _svgContainer || (_svgContainer = _createSibling(element));
                    e.setAttribute("width", 0.01);
                    e.setAttribute("height", 0.01);
                    e.setAttribute("transform", "translate(" + x + "," + y + ")");
                    _svgContainer.appendChild(e);
                }
            }
            return e;
        }
        throw "Need document and parent.";
    }, _consolidate = function _consolidate(m) {
        var c = new Matrix2D(), i = 0;
        for(; i < m.numberOfItems; i++)c.multiply(m.getItem(i).matrix);
        return c;
    }, _getCTM = function _getCTM(svg) {
        var m = svg.getCTM(), transform;
        if (!m) {
            transform = svg.style[_transformProp];
            svg.style[_transformProp] = "none";
            svg.appendChild(_gEl);
            m = _gEl.getCTM();
            svg.removeChild(_gEl);
            transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
        }
        return m || _identityMatrix.clone();
    }, _placeSiblings = function _placeSiblings(element, adjustGOffset) {
        var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
        if (element === _win) return element;
        siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
        container = svg ? _svgContainer : _divContainer;
        if (svg) {
            if (isRootSVG) {
                b = _getCTM(element);
                x = -b.e / b.a;
                y = -b.f / b.d;
                m = _identityMatrix;
            } else if (element.getBBox) {
                b = element.getBBox();
                m = element.transform ? element.transform.baseVal : {};
                m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
                x = m.a * b.x + m.c * b.y;
                y = m.b * b.x + m.d * b.y;
            } else {
                m = new Matrix2D();
                x = y = 0;
            }
            if (adjustGOffset && element.tagName.toLowerCase() === "g") x = y = 0;
            (isRootSVG ? svg : parent).appendChild(container);
            container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
        } else {
            x = y = 0;
            if (_hasOffsetBug) {
                m = element.offsetParent;
                b = element;
                while(b && (b = b.parentNode) && b !== m && b.parentNode)if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
                    x = b.offsetLeft;
                    y = b.offsetTop;
                    b = 0;
                }
            }
            cs = _win.getComputedStyle(element);
            if (cs.position !== "absolute" && cs.position !== "fixed") {
                m = element.offsetParent;
                while(parent && parent !== m){
                    x += parent.scrollLeft || 0;
                    y += parent.scrollTop || 0;
                    parent = parent.parentNode;
                }
            }
            b = container.style;
            b.top = element.offsetTop - y + "px";
            b.left = element.offsetLeft - x + "px";
            b[_transformProp] = cs[_transformProp];
            b[_transformOriginProp] = cs[_transformOriginProp];
            b.position = cs.position === "fixed" ? "fixed" : "absolute";
            element.parentNode.appendChild(container);
        }
        return container;
    }, _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
        m.a = a;
        m.b = b;
        m.c = c;
        m.d = d;
        m.e = e;
        m.f = f;
        return m;
    };
    var Matrix2D = function() {
        function Matrix2D(a, b, c, d, e, f) {
            if (a === void 0) a = 1;
            if (b === void 0) b = 0;
            if (c === void 0) c = 0;
            if (d === void 0) d = 1;
            if (e === void 0) e = 0;
            if (f === void 0) f = 0;
            _setMatrix(this, a, b, c, d, e, f);
        }
        var _proto = Matrix2D.prototype;
        _proto.inverse = function inverse() {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
            return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
        };
        _proto.multiply = function multiply(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
            return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
        };
        _proto.clone = function clone() {
            return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        _proto.equals = function equals(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
        };
        _proto.apply = function apply(point, decoratee) {
            if (decoratee === void 0) decoratee = {};
            var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            decoratee.x = x * a + y * c + e || 0;
            decoratee.y = x * b + y * d + f || 0;
            return decoratee;
        };
        return Matrix2D;
    }();
    function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
        if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) return new Matrix2D();
        var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
        parent.removeChild(container);
        if (zeroScales) {
            b1 = zeroScales.length;
            while(b1--){
                b2 = zeroScales[b1];
                b2.scaleX = b2.scaleY = 0;
                b2.renderTransform(1, b2);
            }
        }
        return inverse ? m.inverse() : m;
    }
    var gsap, _win$1, _doc$1, _docElement$1, _body$1, _tempDiv, _placeholderDiv, _coreInitted, _checkPrefix, _toArray, _supportsPassive, _isTouchDevice, _touchEventLookup, _isMultiTouching, _isAndroid, InertiaPlugin, _defaultCursor, _supportsPointer, _context, _dragCount = 0, _windowExists = function _windowExists() {
        return typeof window !== "undefined";
    }, _getGSAP = function _getGSAP() {
        return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
    }, _isFunction = function _isFunction(value) {
        return typeof value === "function";
    }, _isObject = function _isObject(value) {
        return typeof value === "object";
    }, _isUndefined = function _isUndefined(value) {
        return typeof value === "undefined";
    }, _emptyFunc = function _emptyFunc() {
        return false;
    }, _transformProp$1 = "transform", _transformOriginProp$1 = "transformOrigin", _round = function _round(value) {
        return Math.round(value * 10000) / 10000;
    }, _isArray = Array.isArray, _createElement = function _createElement(type, ns) {
        var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
        return e.style ? e : _doc$1.createElement(type);
    }, _RAD2DEG = 180 / Math.PI, _bigNum = 1e20, _identityMatrix$1 = new Matrix2D(), _getTime = Date.now || function() {
        return new Date().getTime();
    }, _renderQueue = [], _lookup = {}, _lookupCount = 0, _clickableTagExp = /^(?:a|input|textarea|button|select)$/i, _lastDragTime = 0, _temp1 = {}, _windowProxy = {}, _copy = function _copy(obj, factor) {
        var copy = {}, p;
        for(p in obj)copy[p] = factor ? obj[p] * factor : obj[p];
        return copy;
    }, _extend = function _extend(obj, defaults) {
        for(var p in defaults)if (!(p in obj)) obj[p] = defaults[p];
        return obj;
    }, _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants(elements, value) {
        var i = elements.length, children;
        while(i--){
            value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
            children = elements[i].children;
            children && children.length && _setTouchActionForAllDescendants(children, value);
        }
    }, _renderQueueTick = function _renderQueueTick() {
        return _renderQueue.forEach(function(func) {
            return func();
        });
    }, _addToRenderQueue = function _addToRenderQueue(func) {
        _renderQueue.push(func);
        if (_renderQueue.length === 1) gsap.ticker.add(_renderQueueTick);
    }, _renderQueueTimeout = function _renderQueueTimeout() {
        return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
    }, _removeFromRenderQueue = function _removeFromRenderQueue(func) {
        var i = _renderQueue.length;
        while(i--)if (_renderQueue[i] === func) _renderQueue.splice(i, 1);
        gsap.to(_renderQueueTimeout, {
            overwrite: true,
            delay: 15,
            duration: 0,
            onComplete: _renderQueueTimeout,
            data: "_draggable"
        });
    }, _setDefaults = function _setDefaults(obj, defaults) {
        for(var p in defaults)if (!(p in obj)) obj[p] = defaults[p];
        return obj;
    }, _addListener = function _addListener(element, type, func, capture) {
        if (element.addEventListener) {
            var touchType = _touchEventLookup[type];
            capture = capture || (_supportsPassive ? {
                passive: false
            } : null);
            element.addEventListener(touchType || type, func, capture);
            touchType && type !== touchType && element.addEventListener(type, func, capture);
        }
    }, _removeListener = function _removeListener(element, type, func, capture) {
        if (element.removeEventListener) {
            var touchType = _touchEventLookup[type];
            element.removeEventListener(touchType || type, func, capture);
            touchType && type !== touchType && element.removeEventListener(type, func, capture);
        }
    }, _preventDefault = function _preventDefault(event) {
        event.preventDefault && event.preventDefault();
        event.preventManipulation && event.preventManipulation();
    }, _hasTouchID = function _hasTouchID(list, ID) {
        var i = list.length;
        while(i--){
            if (list[i].identifier === ID) return true;
        }
    }, _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(event) {
        _isMultiTouching = event.touches && _dragCount < event.touches.length;
        _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd);
    }, _onMultiTouchDocument = function _onMultiTouchDocument(event) {
        _isMultiTouching = event.touches && _dragCount < event.touches.length;
        _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
    }, _getDocScrollTop$1 = function _getDocScrollTop(doc) {
        return _win$1.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
    }, _getDocScrollLeft$1 = function _getDocScrollLeft(doc) {
        return _win$1.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
    }, _addScrollListener = function _addScrollListener(e, callback) {
        _addListener(e, "scroll", callback);
        if (!_isRoot(e.parentNode)) _addScrollListener(e.parentNode, callback);
    }, _removeScrollListener = function _removeScrollListener(e, callback) {
        _removeListener(e, "scroll", callback);
        if (!_isRoot(e.parentNode)) _removeScrollListener(e.parentNode, callback);
    }, _isRoot = function _isRoot(e) {
        return !!(!e || e === _docElement$1 || e.nodeType === 9 || e === _doc$1.body || e === _win$1 || !e.nodeType || !e.parentNode);
    }, _getMaxScroll = function _getMaxScroll(element, axis) {
        var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
        return Math.max(0, _isRoot(element) ? Math.max(_docElement$1[scroll], _body$1[scroll]) - (_win$1["inner" + dim] || _docElement$1[client] || _body$1[client]) : element[scroll] - element[client]);
    }, _recordMaxScrolls = function _recordMaxScrolls(e, skipCurrent) {
        var x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
        if (_isRoot(e)) e = _windowProxy;
        else _recordMaxScrolls(e.parentNode, skipCurrent);
        e._gsMaxScrollX = x;
        e._gsMaxScrollY = y;
        if (!skipCurrent) {
            e._gsScrollX = e.scrollLeft || 0;
            e._gsScrollY = e.scrollTop || 0;
        }
    }, _setStyle = function _setStyle(element, property, value) {
        var style = element.style;
        if (!style) return;
        if (_isUndefined(style[property])) property = _checkPrefix(property, element) || property;
        if (value == null) style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
        else style[property] = value;
    }, _getComputedStyle = function _getComputedStyle(element) {
        return _win$1.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
    }, _tempRect = {}, _parseRect = function _parseRect(e) {
        if (e === _win$1) {
            _tempRect.left = _tempRect.top = 0;
            _tempRect.width = _tempRect.right = _docElement$1.clientWidth || e.innerWidth || _body$1.clientWidth || 0;
            _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement$1.clientHeight ? _docElement$1.clientHeight : e.innerHeight || _body$1.clientHeight || 0;
            return _tempRect;
        }
        var doc = e.ownerDocument || _doc$1, r = !_isUndefined(e.pageX) ? {
            left: e.pageX - _getDocScrollLeft$1(doc),
            top: e.pageY - _getDocScrollTop$1(doc),
            right: e.pageX - _getDocScrollLeft$1(doc) + 1,
            bottom: e.pageY - _getDocScrollTop$1(doc) + 1
        } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();
        if (_isUndefined(r.right) && !_isUndefined(r.width)) {
            r.right = r.left + r.width;
            r.bottom = r.top + r.height;
        } else if (_isUndefined(r.width)) r = {
            width: r.right - r.left,
            height: r.bottom - r.top,
            right: r.right,
            left: r.left,
            bottom: r.bottom,
            top: r.top
        };
        return r;
    }, _dispatchEvent = function _dispatchEvent(target, type, callbackName) {
        var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
        if (_isFunction(callback)) result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [
            target.pointerEvent
        ]);
        if (listeners && target.dispatchEvent(type) === false) result = false;
        return result;
    }, _getBounds = function _getBounds(target, context) {
        var e = _toArray(target)[0], top, left, offset;
        if (!e.nodeType && e !== _win$1) {
            if (!_isUndefined(target.left)) {
                offset = {
                    x: 0,
                    y: 0
                };
                return {
                    left: target.left - offset.x,
                    top: target.top - offset.y,
                    width: target.width,
                    height: target.height
                };
            }
            left = target.min || target.minX || target.minRotation || 0;
            top = target.min || target.minY || 0;
            return {
                left: left,
                top: top,
                width: (target.max || target.maxX || target.maxRotation || 0) - left,
                height: (target.max || target.maxY || 0) - top
            };
        }
        return _getElementBounds(e, context);
    }, _point1 = {}, _getElementBounds = function _getElementBounds(element, context) {
        context = _toArray(context)[0];
        var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc$1, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs;
        if (element === _win$1) {
            top = _getDocScrollTop$1(doc);
            left = _getDocScrollLeft$1(doc);
            right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
            bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
        } else if (context === _win$1 || _isUndefined(context)) return element.getBoundingClientRect();
        else {
            left = top = 0;
            if (isSVG) {
                bbox = element.getBBox();
                width = bbox.width;
                height = bbox.height;
            } else {
                if (element.viewBox && (bbox = element.viewBox.baseVal)) {
                    left = bbox.x || 0;
                    top = bbox.y || 0;
                    width = bbox.width;
                    height = bbox.height;
                }
                if (!width) {
                    cs = _getComputedStyle(element);
                    bbox = cs.boxSizing === "border-box";
                    width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
                    height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
                }
            }
            right = width;
            bottom = height;
        }
        if (element === context) return {
            left: left,
            top: top,
            width: right - left,
            height: bottom - top
        };
        matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
        p1 = matrix.apply({
            x: left,
            y: top
        });
        p2 = matrix.apply({
            x: right,
            y: top
        });
        p3 = matrix.apply({
            x: right,
            y: bottom
        });
        p4 = matrix.apply({
            x: left,
            y: bottom
        });
        left = Math.min(p1.x, p2.x, p3.x, p4.x);
        top = Math.min(p1.y, p2.y, p3.y, p4.y);
        return {
            left: left,
            top: top,
            width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
            height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
        };
    }, _parseInertia = function _parseInertia(draggable, snap, max, min, factor, forceZeroVelocity) {
        var vars = {}, a, i, l;
        if (snap) {
            if (factor !== 1 && snap instanceof Array) {
                vars.end = a = [];
                l = snap.length;
                if (_isObject(snap[0])) for(i = 0; i < l; i++)a[i] = _copy(snap[i], factor);
                else for(i = 0; i < l; i++)a[i] = snap[i] * factor;
                max += 1.1;
                min -= 1.1;
            } else if (_isFunction(snap)) vars.end = function(value) {
                var result = snap.call(draggable, value), copy, p;
                if (factor !== 1) {
                    if (_isObject(result)) {
                        copy = {};
                        for(p in result)copy[p] = result[p] * factor;
                        result = copy;
                    } else result *= factor;
                }
                return result;
            };
            else vars.end = snap;
        }
        if (max || max === 0) vars.max = max;
        if (min || min === 0) vars.min = min;
        if (forceZeroVelocity) vars.velocity = 0;
        return vars;
    }, _isClickable = function _isClickable(element) {
        var data;
        return !element || !element.getAttribute || element === _body$1 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable(element.parentNode);
    }, _setSelectable = function _setSelectable(elements, selectable) {
        var i = elements.length, e;
        while(i--){
            e = elements[i];
            e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
            gsap.set(e, {
                lazy: true,
                userSelect: selectable ? "text" : "none"
            });
        }
    }, _isFixed$1 = function _isFixed(element) {
        if (_getComputedStyle(element).position === "fixed") return true;
        element = element.parentNode;
        if (element && element.nodeType === 1) return _isFixed(element);
    }, _supports3D, _addPaddingBR, ScrollProxy = function ScrollProxy(element, vars) {
        element = gsap.utils.toArray(element)[0];
        vars = vars || {};
        var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
        if (_supports3D && vars.force3D !== false) {
            transformStart = "translate3d(";
            transformEnd = "px,0px)";
        } else if (_transformProp$1) {
            transformStart = "translate(";
            transformEnd = "px)";
        }
        this.scrollTop = function(value, force) {
            if (!arguments.length) return -this.top();
            this.top(-value, force);
        };
        this.scrollLeft = function(value, force) {
            if (!arguments.length) return -this.left();
            this.left(-value, force);
        };
        this.left = function(value, force) {
            if (!arguments.length) return -(element.scrollLeft + offsetLeft);
            var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
            if ((dif > 2 || dif < -2) && !force) {
                prevLeft = element.scrollLeft;
                gsap.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                });
                this.left(-prevLeft);
                if (vars.onKill) vars.onKill();
                return;
            }
            value = -value;
            if (value < 0) {
                offsetLeft = value - 0.5 | 0;
                value = 0;
            } else if (value > maxLeft) {
                offsetLeft = value - maxLeft | 0;
                value = maxLeft;
            } else offsetLeft = 0;
            if (offsetLeft || oldOffset) {
                if (!this._skip) style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
                if (offsetLeft + extraPadRight >= 0) style.paddingRight = offsetLeft + extraPadRight + "px";
            }
            element.scrollLeft = value | 0;
            prevLeft = element.scrollLeft;
        };
        this.top = function(value, force) {
            if (!arguments.length) return -(element.scrollTop + offsetTop);
            var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
            if ((dif > 2 || dif < -2) && !force) {
                prevTop = element.scrollTop;
                gsap.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                });
                this.top(-prevTop);
                if (vars.onKill) vars.onKill();
                return;
            }
            value = -value;
            if (value < 0) {
                offsetTop = value - 0.5 | 0;
                value = 0;
            } else if (value > maxTop) {
                offsetTop = value - maxTop | 0;
                value = maxTop;
            } else offsetTop = 0;
            if (offsetTop || oldOffset) {
                if (!this._skip) style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
            }
            element.scrollTop = value | 0;
            prevTop = element.scrollTop;
        };
        this.maxScrollTop = function() {
            return maxTop;
        };
        this.maxScrollLeft = function() {
            return maxLeft;
        };
        this.disable = function() {
            node = content.firstChild;
            while(node){
                nextNode = node.nextSibling;
                element.appendChild(node);
                node = nextNode;
            }
            if (element === content.parentNode) element.removeChild(content);
        };
        this.enable = function() {
            node = element.firstChild;
            if (node === content) return;
            while(node){
                nextNode = node.nextSibling;
                content.appendChild(node);
                node = nextNode;
            }
            element.appendChild(content);
            this.calibrate();
        };
        this.calibrate = function(force) {
            var widthMatches = element.clientWidth === elementWidth, cs, x, y;
            prevTop = element.scrollTop;
            prevLeft = element.scrollLeft;
            if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) return;
            if (offsetTop || offsetLeft) {
                x = this.left();
                y = this.top();
                this.left(-element.scrollLeft);
                this.top(-element.scrollTop);
            }
            cs = _getComputedStyle(element);
            if (!widthMatches || force) {
                style.display = "block";
                style.width = "auto";
                style.paddingRight = "0px";
                extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
                if (extraPadRight) extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
            }
            style.display = "inline-block";
            style.position = "relative";
            style.overflow = "visible";
            style.verticalAlign = "top";
            style.boxSizing = "content-box";
            style.width = "100%";
            style.paddingRight = extraPadRight + "px";
            if (_addPaddingBR) style.paddingBottom = cs.paddingBottom;
            elementWidth = element.clientWidth;
            elementHeight = element.clientHeight;
            scrollWidth = element.scrollWidth;
            scrollHeight = element.scrollHeight;
            maxLeft = element.scrollWidth - elementWidth;
            maxTop = element.scrollHeight - elementHeight;
            contentHeight = content.offsetHeight;
            style.display = "block";
            if (x || y) {
                this.left(x);
                this.top(y);
            }
        };
        this.content = content;
        this.element = element;
        this._skip = false;
        this.enable();
    }, _initCore = function _initCore(required) {
        if (_windowExists() && document.body) {
            var nav = window && window.navigator;
            _win$1 = window;
            _doc$1 = document;
            _docElement$1 = _doc$1.documentElement;
            _body$1 = _doc$1.body;
            _tempDiv = _createElement("div");
            _supportsPointer = !!window.PointerEvent;
            _placeholderDiv = _createElement("div");
            _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
            _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
            _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
            _isTouchDevice = "ontouchstart" in _docElement$1 && "orientation" in _win$1 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
            _addPaddingBR = function() {
                var div = _createElement("div"), child = _createElement("div"), childStyle = child.style, parent = _body$1, val;
                childStyle.display = "inline-block";
                childStyle.position = "relative";
                div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
                div.appendChild(child);
                parent.appendChild(div);
                val = child.offsetHeight + 18 > div.scrollHeight;
                parent.removeChild(div);
                return val;
            }();
            _touchEventLookup = function(types) {
                var standard = types.split(","), converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i = 4;
                while(--i > -1){
                    obj[standard[i]] = converted[i];
                    obj[converted[i]] = standard[i];
                }
                try {
                    _docElement$1.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function get() {
                            _supportsPassive = 1;
                        }
                    }));
                } catch (e) {}
                return obj;
            }("touchstart,touchmove,touchend,touchcancel");
            _addListener(_doc$1, "touchcancel", _emptyFunc);
            _addListener(_win$1, "touchmove", _emptyFunc);
            _body$1 && _body$1.addEventListener("touchstart", _emptyFunc);
            _addListener(_doc$1, "contextmenu", function() {
                for(var p in _lookup)if (_lookup[p].isPressed) _lookup[p].endDrag();
            });
            gsap = _coreInitted = _getGSAP();
        }
        if (gsap) {
            InertiaPlugin = gsap.plugins.inertia;
            _context = gsap.core.context || function() {};
            _checkPrefix = gsap.utils.checkPrefix;
            _transformProp$1 = _checkPrefix(_transformProp$1);
            _transformOriginProp$1 = _checkPrefix(_transformOriginProp$1);
            _toArray = gsap.utils.toArray;
            _supports3D = !!_checkPrefix("perspective");
        } else if (required) console.warn("Please gsap.registerPlugin(Draggable)");
    };
    var EventDispatcher = function() {
        function EventDispatcher(target) {
            this._listeners = {};
            this.target = target || this;
        }
        var _proto = EventDispatcher.prototype;
        _proto.addEventListener = function addEventListener(type, callback) {
            var list = this._listeners[type] || (this._listeners[type] = []);
            if (!~list.indexOf(callback)) list.push(callback);
        };
        _proto.removeEventListener = function removeEventListener(type, callback) {
            var list = this._listeners[type], i = list && list.indexOf(callback);
            i >= 0 && list.splice(i, 1);
        };
        _proto.dispatchEvent = function dispatchEvent(type) {
            var _this = this;
            var result;
            (this._listeners[type] || []).forEach(function(callback) {
                return callback.call(_this, {
                    type: type,
                    target: _this.target
                }) === false && (result = false);
            });
            return result;
        };
        return EventDispatcher;
    }();
    var Draggable = function(_EventDispatcher) {
        _inheritsLoose(Draggable, _EventDispatcher);
        function Draggable(target, vars) {
            var _this2;
            _this2 = _EventDispatcher.call(this) || this;
            _coreInitted || _initCore(1);
            target = _toArray(target)[0];
            if (!InertiaPlugin) InertiaPlugin = gsap.plugins.inertia;
            _this2.vars = vars = _copy(vars || {});
            _this2.target = target;
            _this2.x = _this2.y = _this2.rotation = 0;
            _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
            _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
            _this2.lockAxis = vars.lockAxis;
            _this2.autoScroll = vars.autoScroll || 0;
            _this2.lockedAxis = null;
            _this2.allowEventDefault = !!vars.allowEventDefault;
            gsap.getProperty(target, "x");
            var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self = _assertThisInitialized(_this2), triggers = _toArray(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap.core.getCache(target), isFixed = _isFixed$1(target), getPropAsNum = function getPropAsNum(property, unit) {
                return parseFloat(gsCache.get(target, property, unit));
            }, ownerDoc = target.ownerDocument || _doc$1, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu(e) {
                _preventDefault(e);
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                return false;
            }, render = function render(suppressEvents) {
                if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
                    var e = target, autoScrollFactor = self.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
                    checkAutoScrollBounds = false;
                    _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
                    _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
                    pointerX = self.pointerX - _windowProxy.scrollLeft;
                    pointerY = self.pointerY - _windowProxy.scrollTop;
                    while(e && !isRoot){
                        isRoot = _isRoot(e.parentNode);
                        parent = isRoot ? _windowProxy : e.parentNode;
                        rect = isRoot ? {
                            bottom: Math.max(_docElement$1.clientHeight, _win$1.innerHeight || 0),
                            right: Math.max(_docElement$1.clientWidth, _win$1.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : parent.getBoundingClientRect();
                        changeX = changeY = 0;
                        if (allowY) {
                            gap = parent._gsMaxScrollY - parent.scrollTop;
                            if (gap < 0) changeY = gap;
                            else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                                checkAutoScrollBounds = true;
                                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
                            } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                                checkAutoScrollBounds = true;
                                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
                            }
                            if (changeY) parent.scrollTop += changeY;
                        }
                        if (allowX) {
                            gap = parent._gsMaxScrollX - parent.scrollLeft;
                            if (gap < 0) changeX = gap;
                            else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                                checkAutoScrollBounds = true;
                                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
                            } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                                checkAutoScrollBounds = true;
                                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
                            }
                            if (changeX) parent.scrollLeft += changeX;
                        }
                        if (isRoot && (changeX || changeY)) {
                            _win$1.scrollTo(parent.scrollLeft, parent.scrollTop);
                            setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
                        }
                        e = parent;
                    }
                }
                if (dirty) {
                    var x = self.x, y = self.y;
                    if (rotationMode) {
                        self.deltaX = x - parseFloat(gsCache.rotation);
                        self.rotation = x;
                        gsCache.rotation = x + "deg";
                        gsCache.renderTransform(1, gsCache);
                    } else {
                        if (scrollProxy) {
                            if (allowY) {
                                self.deltaY = y - scrollProxy.top();
                                scrollProxy.top(y);
                            }
                            if (allowX) {
                                self.deltaX = x - scrollProxy.left();
                                scrollProxy.left(x);
                            }
                        } else if (xyMode) {
                            if (allowY) {
                                self.deltaY = y - parseFloat(gsCache.y);
                                gsCache.y = y + "px";
                            }
                            if (allowX) {
                                self.deltaX = x - parseFloat(gsCache.x);
                                gsCache.x = x + "px";
                            }
                            gsCache.renderTransform(1, gsCache);
                        } else {
                            if (allowY) {
                                self.deltaY = y - parseFloat(target.style.top || 0);
                                target.style.top = y + "px";
                            }
                            if (allowX) {
                                self.deltaX = x - parseFloat(target.style.left || 0);
                                target.style.left = x + "px";
                            }
                        }
                    }
                    if (hasDragCallback && !suppressEvents && !isDispatching) {
                        isDispatching = true;
                        if (_dispatchEvent(self, "drag", "onDrag") === false) {
                            if (allowX) self.x -= self.deltaX;
                            if (allowY) self.y -= self.deltaY;
                            render(true);
                        }
                        isDispatching = false;
                    }
                }
                dirty = false;
            }, syncXY = function syncXY(skipOnUpdate, skipSnap) {
                var x = self.x, y = self.y, snappedValue, cs;
                if (!target._gsap) gsCache = gsap.core.getCache(target);
                gsCache.uncache && gsap.getProperty(target, "x");
                if (xyMode) {
                    self.x = parseFloat(gsCache.x);
                    self.y = parseFloat(gsCache.y);
                } else if (rotationMode) self.x = self.rotation = parseFloat(gsCache.rotation);
                else if (scrollProxy) {
                    self.y = scrollProxy.top();
                    self.x = scrollProxy.left();
                } else {
                    self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
                    self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
                }
                if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
                    if (snapXY) {
                        _temp1.x = self.x;
                        _temp1.y = self.y;
                        snappedValue = snapXY(_temp1);
                        if (snappedValue.x !== self.x) {
                            self.x = snappedValue.x;
                            dirty = true;
                        }
                        if (snappedValue.y !== self.y) {
                            self.y = snappedValue.y;
                            dirty = true;
                        }
                    }
                    if (snapX) {
                        snappedValue = snapX(self.x);
                        if (snappedValue !== self.x) {
                            self.x = snappedValue;
                            if (rotationMode) self.rotation = snappedValue;
                            dirty = true;
                        }
                    }
                    if (snapY) {
                        snappedValue = snapY(self.y);
                        if (snappedValue !== self.y) self.y = snappedValue;
                        dirty = true;
                    }
                }
                dirty && render(true);
                if (!skipOnUpdate) {
                    self.deltaX = self.x - x;
                    self.deltaY = self.y - y;
                    _dispatchEvent(self, "throwupdate", "onThrowUpdate");
                }
            }, buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
                if (min == null) min = -_bigNum;
                if (max == null) max = _bigNum;
                if (_isFunction(snap)) return function(n) {
                    var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
                    return snap.call(self, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
                };
                if (_isArray(snap)) return function(n) {
                    var i = snap.length, closest = 0, absDif = _bigNum, val, dif;
                    while(--i > -1){
                        val = snap[i];
                        dif = val - n;
                        if (dif < 0) dif = -dif;
                        if (dif < absDif && val >= min && val <= max) {
                            closest = i;
                            absDif = dif;
                        }
                    }
                    return snap[closest];
                };
                return isNaN(snap) ? function(n) {
                    return n;
                } : function() {
                    return snap * factor;
                };
            }, buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
                radius = radius && radius < _bigNum ? radius * radius : _bigNum;
                if (_isFunction(snap)) return function(point) {
                    var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x = point.x, y = point.y, result, dx, dy;
                    point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
                    point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
                    result = snap.call(self, point);
                    if (result !== point) {
                        point.x = result.x;
                        point.y = result.y;
                    }
                    if (factor !== 1) {
                        point.x *= factor;
                        point.y *= factor;
                    }
                    if (radius < _bigNum) {
                        dx = point.x - x;
                        dy = point.y - y;
                        if (dx * dx + dy * dy > radius) {
                            point.x = x;
                            point.y = y;
                        }
                    }
                    return point;
                };
                if (_isArray(snap)) return function(p) {
                    var i = snap.length, closest = 0, minDist = _bigNum, x, y, point, dist;
                    while(--i > -1){
                        point = snap[i];
                        x = point.x - p.x;
                        y = point.y - p.y;
                        dist = x * x + y * y;
                        if (dist < minDist) {
                            closest = i;
                            minDist = dist;
                        }
                    }
                    return minDist <= radius ? snap[closest] : p;
                };
                return function(n) {
                    return n;
                };
            }, calculateBounds = function calculateBounds() {
                var bounds, targetBounds, snap, snapIsRaw;
                hasBounds = false;
                if (scrollProxy) {
                    scrollProxy.calibrate();
                    self.minX = minX = -scrollProxy.maxScrollLeft();
                    self.minY = minY = -scrollProxy.maxScrollTop();
                    self.maxX = maxX = self.maxY = maxY = 0;
                    hasBounds = true;
                } else if (!!vars.bounds) {
                    bounds = _getBounds(vars.bounds, target.parentNode);
                    if (rotationMode) {
                        self.minX = minX = bounds.left;
                        self.maxX = maxX = bounds.left + bounds.width;
                        self.minY = minY = self.maxY = maxY = 0;
                    } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
                        bounds = vars.bounds;
                        self.minX = minX = bounds.minX;
                        self.minY = minY = bounds.minY;
                        self.maxX = maxX = bounds.maxX;
                        self.maxY = maxY = bounds.maxY;
                    } else {
                        targetBounds = _getBounds(target, target.parentNode);
                        self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
                        self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
                        self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
                        self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
                    }
                    if (minX > maxX) {
                        self.minX = maxX;
                        self.maxX = maxX = minX;
                        minX = self.minX;
                    }
                    if (minY > maxY) {
                        self.minY = maxY;
                        self.maxY = maxY = minY;
                        minY = self.minY;
                    }
                    if (rotationMode) {
                        self.minRotation = minX;
                        self.maxRotation = maxX;
                    }
                    hasBounds = true;
                }
                if (vars.liveSnap) {
                    snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
                    snapIsRaw = _isArray(snap) || _isFunction(snap);
                    if (rotationMode) {
                        snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
                        snapY = null;
                    } else if (snap.points) snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
                    else {
                        if (allowX) snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
                        if (allowY) snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
                    }
                }
            }, onThrowComplete = function onThrowComplete() {
                self.isThrowing = false;
                _dispatchEvent(self, "throwcomplete", "onThrowComplete");
            }, onThrowInterrupt = function onThrowInterrupt() {
                self.isThrowing = false;
            }, animate = function animate(inertia, forceZeroVelocity) {
                var snap, snapIsRaw, tween, overshootTolerance;
                if (inertia && InertiaPlugin) {
                    if (inertia === true) {
                        snap = vars.snap || vars.liveSnap || {};
                        snapIsRaw = _isArray(snap) || _isFunction(snap);
                        inertia = {
                            resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
                        };
                        if (rotationMode) inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
                        else {
                            if (allowX) inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
                            if (allowY) inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
                            if (snap.points || _isArray(snap) && _isObject(snap[0])) {
                                inertia.linkedProps = xProp + "," + yProp;
                                inertia.radius = snap.radius;
                            }
                        }
                    }
                    self.isThrowing = true;
                    overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
                    if (!inertia.duration) inertia.duration = {
                        max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
                        min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
                        overshoot: overshootTolerance
                    };
                    self.tween = tween = gsap.to(scrollProxy || target, {
                        inertia: inertia,
                        data: "_draggable",
                        onComplete: onThrowComplete,
                        onInterrupt: onThrowInterrupt,
                        onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
                        onUpdateParams: vars.fastMode ? [
                            self,
                            "onthrowupdate",
                            "onThrowUpdate"
                        ] : snap && snap.radius ? [
                            false,
                            true
                        ] : []
                    });
                    if (!vars.fastMode) {
                        if (scrollProxy) scrollProxy._skip = true;
                        tween.render(1e9, true, true);
                        syncXY(true, true);
                        self.endX = self.x;
                        self.endY = self.y;
                        if (rotationMode) self.endRotation = self.x;
                        tween.play(0);
                        syncXY(true, true);
                        if (scrollProxy) scrollProxy._skip = false;
                    }
                } else if (hasBounds) self.applyBounds();
            }, updateMatrix = function updateMatrix(shiftStart) {
                var start = matrix, p;
                matrix = getGlobalMatrix(target.parentNode, true);
                if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
                    p = start.inverse().apply({
                        x: startPointerX,
                        y: startPointerY
                    });
                    matrix.apply(p, p);
                    startPointerX = p.x;
                    startPointerY = p.y;
                }
                if (matrix.equals(_identityMatrix$1)) matrix = null;
            }, recordStartPositions = function recordStartPositions() {
                var edgeTolerance = 1 - self.edgeResistance, offsetX = isFixed ? _getDocScrollLeft$1(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop$1(ownerDoc) : 0, parsedOrigin, x, y;
                if (xyMode) {
                    gsCache.x = getPropAsNum(xProp, "px") + "px";
                    gsCache.y = getPropAsNum(yProp, "px") + "px";
                    gsCache.renderTransform();
                }
                updateMatrix(false);
                _point1.x = self.pointerX - offsetX;
                _point1.y = self.pointerY - offsetY;
                matrix && matrix.apply(_point1, _point1);
                startPointerX = _point1.x;
                startPointerY = _point1.y;
                if (dirty) {
                    setPointerPosition(self.pointerX, self.pointerY);
                    render(true);
                }
                innerMatrix = getGlobalMatrix(target);
                if (scrollProxy) {
                    calculateBounds();
                    startElementY = scrollProxy.top();
                    startElementX = scrollProxy.left();
                } else {
                    if (isTweening()) {
                        syncXY(true, true);
                        calculateBounds();
                    } else self.applyBounds();
                    if (rotationMode) {
                        parsedOrigin = target.ownerSVGElement ? [
                            gsCache.xOrigin - target.getBBox().x,
                            gsCache.yOrigin - target.getBBox().y
                        ] : (_getComputedStyle(target)[_transformOriginProp$1] || "0 0").split(" ");
                        rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
                            x: parseFloat(parsedOrigin[0]) || 0,
                            y: parseFloat(parsedOrigin[1]) || 0
                        });
                        syncXY(true, true);
                        x = self.pointerX - rotationOrigin.x - offsetX;
                        y = rotationOrigin.y - self.pointerY + offsetY;
                        startElementX = self.x;
                        startElementY = self.y = Math.atan2(y, x) * _RAD2DEG;
                    } else {
                        startElementY = getPropAsNum(yProp, "px");
                        startElementX = getPropAsNum(xProp, "px");
                    }
                }
                if (hasBounds && edgeTolerance) {
                    if (startElementX > maxX) startElementX = maxX + (startElementX - maxX) / edgeTolerance;
                    else if (startElementX < minX) startElementX = minX - (minX - startElementX) / edgeTolerance;
                    if (!rotationMode) {
                        if (startElementY > maxY) startElementY = maxY + (startElementY - maxY) / edgeTolerance;
                        else if (startElementY < minY) startElementY = minY - (minY - startElementY) / edgeTolerance;
                    }
                }
                self.startX = startElementX = _round(startElementX);
                self.startY = startElementY = _round(startElementY);
            }, isTweening = function isTweening() {
                return self.tween && self.tween.isActive();
            }, removePlaceholder = function removePlaceholder() {
                if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) _placeholderDiv.parentNode.removeChild(_placeholderDiv);
            }, onPress = function onPress(e, force) {
                var i;
                if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
                    isPreventingDefault && e && enabled && _preventDefault(e);
                    return;
                }
                interrupted = isTweening();
                dragged = false;
                self.pointerEvent = e;
                if (_touchEventLookup[e.type]) {
                    touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;
                    _addListener(touchEventTarget, "touchend", onRelease);
                    _addListener(touchEventTarget, "touchmove", onMove);
                    _addListener(touchEventTarget, "touchcancel", onRelease);
                    _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
                } else {
                    touchEventTarget = null;
                    _addListener(ownerDoc, "mousemove", onMove);
                }
                touchDragAxis = null;
                if (!_supportsPointer || !touchEventTarget) {
                    _addListener(ownerDoc, "mouseup", onRelease);
                    e && e.target && _addListener(e.target, "mouseup", onRelease);
                }
                isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;
                if (isClicking) {
                    _addListener(e.target, "change", onRelease);
                    _dispatchEvent(self, "pressInit", "onPressInit");
                    _dispatchEvent(self, "press", "onPress");
                    _setSelectable(triggers, true);
                    isPreventingDefault = false;
                    return;
                }
                allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
                isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;
                if (isPreventingDefault) {
                    _preventDefault(e);
                    _addListener(_win$1, "touchforcechange", _preventDefault);
                }
                if (e.changedTouches) {
                    e = touch = e.changedTouches[0];
                    touchID = e.identifier;
                } else if (e.pointerId) touchID = e.pointerId;
                else touch = touchID = null;
                _dragCount++;
                _addToRenderQueue(render);
                startPointerY = self.pointerY = e.pageY;
                startPointerX = self.pointerX = e.pageX;
                _dispatchEvent(self, "pressInit", "onPressInit");
                if (allowNativeTouchScrolling || self.autoScroll) _recordMaxScrolls(target.parentNode);
                if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
                    _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
                    target.parentNode.appendChild(_placeholderDiv);
                }
                recordStartPositions();
                self.tween && self.tween.kill();
                self.isThrowing = false;
                gsap.killTweensOf(scrollProxy || target, killProps, true);
                scrollProxy && gsap.killTweensOf(target, {
                    scrollTo: 1
                }, true);
                self.tween = self.lockedAxis = null;
                if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) target.style.zIndex = Draggable.zIndex++;
                self.isPressed = true;
                hasDragCallback = !!(vars.onDrag || self._listeners.drag);
                hasMoveCallback = !!(vars.onMove || self._listeners.move);
                if (vars.cursor !== false || vars.activeCursor) {
                    i = triggers.length;
                    while(--i > -1)gsap.set(triggers[i], {
                        cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
                    });
                }
                _dispatchEvent(self, "press", "onPress");
            }, onMove = function onMove(e) {
                var originalEvent = e, touches, pointerX, pointerY, i, dx, dy;
                if (!enabled || _isMultiTouching || !self.isPressed || !e) {
                    isPreventingDefault && e && enabled && _preventDefault(e);
                    return;
                }
                self.pointerEvent = e;
                touches = e.changedTouches;
                if (touches) {
                    e = touches[0];
                    if (e !== touch && e.identifier !== touchID) {
                        i = touches.length;
                        while(--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target);
                        if (i < 0) return;
                    }
                } else if (e.pointerId && touchID && e.pointerId !== touchID) return;
                if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
                    _point1.x = e.pageX - (isFixed ? _getDocScrollLeft$1(ownerDoc) : 0);
                    _point1.y = e.pageY - (isFixed ? _getDocScrollTop$1(ownerDoc) : 0);
                    matrix && matrix.apply(_point1, _point1);
                    pointerX = _point1.x;
                    pointerY = _point1.y;
                    dx = Math.abs(pointerX - startPointerX);
                    dy = Math.abs(pointerY - startPointerY);
                    if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                        touchDragAxis = dx > dy && allowX ? "x" : "y";
                        if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) _addListener(_win$1, "touchforcechange", _preventDefault);
                        if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
                            self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
                            _isFunction(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
                        }
                        if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                            onRelease(originalEvent);
                            return;
                        }
                    }
                }
                if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
                    _preventDefault(originalEvent);
                    isPreventingDefault = true;
                } else if (isPreventingDefault) isPreventingDefault = false;
                if (self.autoScroll) checkAutoScrollBounds = true;
                setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
            }, setPointerPosition = function setPointerPosition(pointerX, pointerY, invokeOnMove) {
                var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, prevPointerX = self.pointerX, prevPointerY = self.pointerY, prevStartElementY = startElementY, prevX = self.x, prevY = self.y, prevEndX = self.endX, prevEndY = self.endY, prevEndRotation = self.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
                self.pointerX = pointerX;
                self.pointerY = pointerY;
                if (isFixed) {
                    pointerX -= _getDocScrollLeft$1(ownerDoc);
                    pointerY -= _getDocScrollTop$1(ownerDoc);
                }
                if (rotationMode) {
                    y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
                    dif = self.y - y;
                    if (dif > 180) {
                        startElementY -= 360;
                        self.y = y;
                    } else if (dif < -180) {
                        startElementY += 360;
                        self.y = y;
                    }
                    if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
                        self.y = y;
                        x = startElementX + (startElementY - y) * dragTolerance;
                    } else x = startElementX;
                } else {
                    if (matrix) {
                        temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
                        pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
                        pointerX = temp;
                    }
                    yChange = pointerY - startPointerY;
                    xChange = pointerX - startPointerX;
                    if (yChange < minimumMovement && yChange > -minimumMovement) yChange = 0;
                    if (xChange < minimumMovement && xChange > -minimumMovement) xChange = 0;
                    if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
                        temp = self.lockedAxis;
                        if (!temp) {
                            self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
                            if (temp && _isFunction(self.vars.onLockAxis)) self.vars.onLockAxis.call(self, self.pointerEvent);
                        }
                        if (temp === "y") yChange = 0;
                        else if (temp === "x") xChange = 0;
                    }
                    x = _round(startElementX + xChange * dragTolerance);
                    y = _round(startElementY + yChange * dragTolerance);
                }
                if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
                    if (snapXY) {
                        _temp1.x = x;
                        _temp1.y = y;
                        temp = snapXY(_temp1);
                        x = _round(temp.x);
                        y = _round(temp.y);
                    }
                    if (snapX) x = _round(snapX(x));
                    if (snapY) y = _round(snapY(y));
                }
                if (hasBounds) {
                    if (x > maxX) x = maxX + Math.round((x - maxX) * edgeTolerance);
                    else if (x < minX) x = minX + Math.round((x - minX) * edgeTolerance);
                    if (!rotationMode) {
                        if (y > maxY) y = Math.round(maxY + (y - maxY) * edgeTolerance);
                        else if (y < minY) y = Math.round(minY + (y - minY) * edgeTolerance);
                    }
                }
                if (self.x !== x || self.y !== y && !rotationMode) {
                    if (rotationMode) {
                        self.endRotation = self.x = self.endX = x;
                        dirty = true;
                    } else {
                        if (allowY) {
                            self.y = self.endY = y;
                            dirty = true;
                        }
                        if (allowX) {
                            self.x = self.endX = x;
                            dirty = true;
                        }
                    }
                    if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
                        if (!self.isDragging && self.isPressed) {
                            self.isDragging = dragged = true;
                            _dispatchEvent(self, "dragstart", "onDragStart");
                        }
                    } else {
                        self.pointerX = prevPointerX;
                        self.pointerY = prevPointerY;
                        startElementY = prevStartElementY;
                        self.x = prevX;
                        self.y = prevY;
                        self.endX = prevEndX;
                        self.endY = prevEndY;
                        self.endRotation = prevEndRotation;
                        dirty = prevDirty;
                    }
                }
            }, onRelease = function onRelease(e, force) {
                if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
                    isPreventingDefault && e && enabled && _preventDefault(e);
                    return;
                }
                self.isPressed = false;
                var originalEvent = e, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap.delayedCall(0.001, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
                if (touchEventTarget) {
                    _removeListener(touchEventTarget, "touchend", onRelease);
                    _removeListener(touchEventTarget, "touchmove", onMove);
                    _removeListener(touchEventTarget, "touchcancel", onRelease);
                    _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
                } else _removeListener(ownerDoc, "mousemove", onMove);
                _removeListener(_win$1, "touchforcechange", _preventDefault);
                if (!_supportsPointer || !touchEventTarget) {
                    _removeListener(ownerDoc, "mouseup", onRelease);
                    e && e.target && _removeListener(e.target, "mouseup", onRelease);
                }
                dirty = false;
                if (wasDragging) {
                    dragEndTime = _lastDragTime = _getTime();
                    self.isDragging = false;
                }
                _removeFromRenderQueue(render);
                if (isClicking && !isContextMenuRelease) {
                    if (e) {
                        _removeListener(e.target, "change", onRelease);
                        self.pointerEvent = originalEvent;
                    }
                    _setSelectable(triggers, false);
                    _dispatchEvent(self, "release", "onRelease");
                    _dispatchEvent(self, "click", "onClick");
                    isClicking = false;
                    return;
                }
                i = triggers.length;
                while(--i > -1)_setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
                _dragCount--;
                if (e) {
                    touches = e.changedTouches;
                    if (touches) {
                        e = touches[0];
                        if (e !== touch && e.identifier !== touchID) {
                            i = touches.length;
                            while(--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target);
                            if (i < 0 && !force) return;
                        }
                    }
                    self.pointerEvent = originalEvent;
                    self.pointerX = e.pageX;
                    self.pointerY = e.pageY;
                }
                if (isContextMenuRelease && originalEvent) {
                    _preventDefault(originalEvent);
                    isPreventingDefault = true;
                    _dispatchEvent(self, "release", "onRelease");
                } else if (originalEvent && !wasDragging) {
                    isPreventingDefault = false;
                    if (interrupted && (vars.snap || vars.bounds)) animate(vars.inertia || vars.throwProps);
                    _dispatchEvent(self, "release", "onRelease");
                    if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
                        _dispatchEvent(self, "click", "onClick");
                        if (_getTime() - clickTime < 300) _dispatchEvent(self, "doubleclick", "onDoubleClick");
                        eventTarget = originalEvent.target || target;
                        clickTime = _getTime();
                        syntheticClick = function syntheticClick() {
                            if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                                if (eventTarget.click) eventTarget.click();
                                else if (ownerDoc.createEvent) {
                                    syntheticEvent = ownerDoc.createEvent("MouseEvents");
                                    syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                                    eventTarget.dispatchEvent(syntheticEvent);
                                }
                            }
                        };
                        if (!_isAndroid && !originalEvent.defaultPrevented) gsap.delayedCall(0.05, syntheticClick);
                    }
                } else {
                    animate(vars.inertia || vars.throwProps);
                    if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
                        isPreventingDefault = true;
                        _preventDefault(originalEvent);
                    } else isPreventingDefault = false;
                    _dispatchEvent(self, "release", "onRelease");
                }
                isTweening() && placeholderDelayedCall.duration(self.tween.duration());
                wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
                return true;
            }, updateScroll = function updateScroll(e) {
                if (e && self.isDragging && !scrollProxy) {
                    var parent = e.target || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
                    if (deltaX || deltaY) {
                        if (matrix) {
                            startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
                            startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
                        } else {
                            startPointerX -= deltaX;
                            startPointerY -= deltaY;
                        }
                        parent._gsScrollX += deltaX;
                        parent._gsScrollY += deltaY;
                        setPointerPosition(self.pointerX, self.pointerY);
                    }
                }
            }, onClick = function onClick(e) {
                var time = _getTime(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
                if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) e.stopImmediatePropagation();
                if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
                    if (trusted && alreadyDispatched) trustedClickDispatch = clickTime;
                    clickDispatch = clickTime;
                    return;
                }
                if (self.isPressed || recentlyDragged || recentlyClicked) {
                    if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) _preventDefault(e);
                }
                if (!recentlyClicked && !recentlyDragged && !dragged) {
                    e && e.target && (self.pointerEvent = e);
                    _dispatchEvent(self, "click", "onClick");
                }
            }, localizePoint = function localizePoint(p) {
                return matrix ? {
                    x: p.x * matrix.a + p.y * matrix.c + matrix.e,
                    y: p.x * matrix.b + p.y * matrix.d + matrix.f
                } : {
                    x: p.x,
                    y: p.y
                };
            };
            old = Draggable.get(target);
            old && old.kill();
            _this2.startDrag = function(event, align) {
                var r1, r2, p1, p2;
                onPress(event || self.pointerEvent, true);
                if (align && !self.hitTest(event || self.pointerEvent)) {
                    r1 = _parseRect(event || self.pointerEvent);
                    r2 = _parseRect(target);
                    p1 = localizePoint({
                        x: r1.left + r1.width / 2,
                        y: r1.top + r1.height / 2
                    });
                    p2 = localizePoint({
                        x: r2.left + r2.width / 2,
                        y: r2.top + r2.height / 2
                    });
                    startPointerX -= p1.x - p2.x;
                    startPointerY -= p1.y - p2.y;
                }
                if (!self.isDragging) {
                    self.isDragging = dragged = true;
                    _dispatchEvent(self, "dragstart", "onDragStart");
                }
            };
            _this2.drag = onMove;
            _this2.endDrag = function(e) {
                return onRelease(e || self.pointerEvent, true);
            };
            _this2.timeSinceDrag = function() {
                return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
            };
            _this2.timeSinceClick = function() {
                return (_getTime() - clickTime) / 1000;
            };
            _this2.hitTest = function(target, threshold) {
                return Draggable.hitTest(self.target, target, threshold);
            };
            _this2.getDirection = function(from, diagonalThreshold) {
                var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
                if (mode === "element") {
                    r1 = _parseRect(self.target);
                    r2 = _parseRect(from);
                }
                xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
                if (rotationMode) return xChange < 0 ? "counter-clockwise" : "clockwise";
                else {
                    diagonalThreshold = diagonalThreshold || 2;
                    yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
                    ratio = Math.abs(xChange / yChange);
                    direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
                    if (ratio < diagonalThreshold) {
                        if (direction !== "") direction += "-";
                        direction += yChange < 0 ? "up" : "down";
                    }
                }
                return direction;
            };
            _this2.applyBounds = function(newBounds, sticky) {
                var x, y, forceZeroVelocity, e, parent, isRoot;
                if (newBounds && vars.bounds !== newBounds) {
                    vars.bounds = newBounds;
                    return self.update(true, sticky);
                }
                syncXY(true);
                calculateBounds();
                if (hasBounds && !isTweening()) {
                    x = self.x;
                    y = self.y;
                    if (x > maxX) x = maxX;
                    else if (x < minX) x = minX;
                    if (y > maxY) y = maxY;
                    else if (y < minY) y = minY;
                    if (self.x !== x || self.y !== y) {
                        forceZeroVelocity = true;
                        self.x = self.endX = x;
                        if (rotationMode) self.endRotation = x;
                        else self.y = self.endY = y;
                        dirty = true;
                        render(true);
                        if (self.autoScroll && !self.isDragging) {
                            _recordMaxScrolls(target.parentNode);
                            e = target;
                            _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
                            _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
                            while(e && !isRoot){
                                isRoot = _isRoot(e.parentNode);
                                parent = isRoot ? _windowProxy : e.parentNode;
                                if (allowY && parent.scrollTop > parent._gsMaxScrollY) parent.scrollTop = parent._gsMaxScrollY;
                                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) parent.scrollLeft = parent._gsMaxScrollX;
                                e = parent;
                            }
                        }
                    }
                    if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) animate(vars.inertia || vars.throwProps, forceZeroVelocity);
                }
                return self;
            };
            _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
                if (sticky && self.isPressed) {
                    var m = getGlobalMatrix(target), p = innerMatrix.apply({
                        x: self.x - startElementX,
                        y: self.y - startElementY
                    }), m2 = getGlobalMatrix(target.parentNode, true);
                    m2.apply({
                        x: m.e - p.x,
                        y: m.f - p.y
                    }, p);
                    self.x -= p.x - m2.e;
                    self.y -= p.y - m2.f;
                    render(true);
                    recordStartPositions();
                }
                var x = self.x, y = self.y;
                updateMatrix(!sticky);
                if (applyBounds) self.applyBounds();
                else {
                    dirty && ignoreExternalChanges && render(true);
                    syncXY(true);
                }
                if (sticky) {
                    setPointerPosition(self.pointerX, self.pointerY);
                    dirty && render(true);
                }
                if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) recordStartPositions();
                if (self.autoScroll) {
                    _recordMaxScrolls(target.parentNode, self.isDragging);
                    checkAutoScrollBounds = self.isDragging;
                    render(true);
                    _removeScrollListener(target, updateScroll);
                    _addScrollListener(target, updateScroll);
                }
                return self;
            };
            _this2.enable = function(type) {
                var setVars = {
                    lazy: true
                }, id, i, trigger;
                if (vars.cursor !== false) setVars.cursor = vars.cursor || _defaultCursor;
                if (gsap.utils.checkPrefix("touchCallout")) setVars.touchCallout = "none";
                if (type !== "soft") {
                    _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
                    i = triggers.length;
                    while(--i > -1){
                        trigger = triggers[i];
                        _supportsPointer || _addListener(trigger, "mousedown", onPress);
                        _addListener(trigger, "touchstart", onPress);
                        _addListener(trigger, "click", onClick, true);
                        gsap.set(trigger, setVars);
                        if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) gsap.set(trigger.ownerSVGElement, {
                            touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
                        });
                        vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
                    }
                    _setSelectable(triggers, false);
                }
                _addScrollListener(target, updateScroll);
                enabled = true;
                if (InertiaPlugin && type !== "soft") InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
                target._gsDragID = id = "d" + _lookupCount++;
                _lookup[id] = self;
                if (scrollProxy) {
                    scrollProxy.enable();
                    scrollProxy.element._gsDragID = id;
                }
                (vars.bounds || rotationMode) && recordStartPositions();
                vars.bounds && self.applyBounds();
                return self;
            };
            _this2.disable = function(type) {
                var dragging = self.isDragging, i = triggers.length, trigger;
                while(--i > -1)_setStyle(triggers[i], "cursor", null);
                if (type !== "soft") {
                    _setTouchActionForAllDescendants(triggers, null);
                    i = triggers.length;
                    while(--i > -1){
                        trigger = triggers[i];
                        _setStyle(trigger, "touchCallout", null);
                        _removeListener(trigger, "mousedown", onPress);
                        _removeListener(trigger, "touchstart", onPress);
                        _removeListener(trigger, "click", onClick, true);
                        _removeListener(trigger, "contextmenu", onContextMenu);
                    }
                    _setSelectable(triggers, true);
                    if (touchEventTarget) {
                        _removeListener(touchEventTarget, "touchcancel", onRelease);
                        _removeListener(touchEventTarget, "touchend", onRelease);
                        _removeListener(touchEventTarget, "touchmove", onMove);
                    }
                    _removeListener(ownerDoc, "mouseup", onRelease);
                    _removeListener(ownerDoc, "mousemove", onMove);
                }
                _removeScrollListener(target, updateScroll);
                enabled = false;
                InertiaPlugin && type !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
                scrollProxy && scrollProxy.disable();
                _removeFromRenderQueue(render);
                self.isDragging = self.isPressed = isClicking = false;
                dragging && _dispatchEvent(self, "dragend", "onDragEnd");
                return self;
            };
            _this2.enabled = function(value, type) {
                return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
            };
            _this2.kill = _this2.revert = function() {
                self.isThrowing = false;
                self.tween && self.tween.kill();
                self.disable();
                gsap.set(triggers, {
                    clearProps: "userSelect"
                });
                delete _lookup[target._gsDragID];
                return self;
            };
            if (~type.indexOf("scroll")) {
                scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
                    onKill: function onKill() {
                        self.isPressed && onRelease(null);
                    }
                }, vars));
                target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
                target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
                target = scrollProxy.content;
            }
            if (rotationMode) killProps.rotation = 1;
            else {
                if (allowX) killProps[xProp] = 1;
                if (allowY) killProps[yProp] = 1;
            }
            gsCache.force3D = "force3D" in vars ? vars.force3D : true;
            _context(_assertThisInitialized(_this2));
            _this2.enable();
            return _this2;
        }
        Draggable.register = function register(core) {
            gsap = core;
            _initCore();
        };
        Draggable.create = function create(targets, vars) {
            _coreInitted || _initCore(true);
            return _toArray(targets).map(function(target) {
                return new Draggable(target, vars);
            });
        };
        Draggable.get = function get(target) {
            return _lookup[(_toArray(target)[0] || {})._gsDragID];
        };
        Draggable.timeSinceDrag = function timeSinceDrag() {
            return (_getTime() - _lastDragTime) / 1000;
        };
        Draggable.hitTest = function hitTest(obj1, obj2, threshold) {
            if (obj1 === obj2) return false;
            var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
            if (isOutside || !threshold) return !isOutside;
            isRatio = (threshold + "").indexOf("%") !== -1;
            threshold = parseFloat(threshold) || 0;
            overlap = {
                left: Math.max(left, r2.left),
                top: Math.max(top, r2.top)
            };
            overlap.width = Math.min(right, r2.right) - overlap.left;
            overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
            if (overlap.width < 0 || overlap.height < 0) return false;
            if (isRatio) {
                threshold *= 0.01;
                area = overlap.width * overlap.height;
                return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
            }
            return overlap.width > threshold && overlap.height > threshold;
        };
        return Draggable;
    }(EventDispatcher);
    _setDefaults(Draggable.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: false,
        isPressed: false
    });
    Draggable.zIndex = 1000;
    Draggable.version = "3.11.4";
    _getGSAP() && gsap.registerPlugin(Draggable);
    exports1.Draggable = Draggable;
    exports1.default = Draggable;
    if (typeof window === "undefined" || window !== exports1) Object.defineProperty(exports1, "__esModule", {
        value: true
    });
    else delete window.default;
});

},{}]},["3CcKB","2FWbZ"], "2FWbZ", "parcelRequireb921")

//# sourceMappingURL=index.604c8427.js.map
