function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
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
$parcel$export(module.exports, "height", function () { return $95a056f974859800$export$ac607276a8fe9f0a; });
$parcel$export(module.exports, "calcOverflowOffset", function () { return $95a056f974859800$export$95227ead4e4cbbd; });
$parcel$export(module.exports, "getRandomInt", function () { return $95a056f974859800$export$b141de964f0a90c1; });
$parcel$export(module.exports, "isTouchDevice", function () { return $95a056f974859800$export$a1d0d20ee9546562; });
function $95a056f974859800$export$537b54b30f329b90(fn) {
    document.addEventListener("DOMContentLoaded", fn);
}
function $95a056f974859800$export$ac607276a8fe9f0a(ref) {
    return ref.offsetHeight;
}
function $95a056f974859800$export$7e3df82ee760448c(ref) {
    return ref.offsetWidth;
}
function $95a056f974859800$export$dc81048565b75a98(ref) {
    return ref.scrollWidth;
}
function $95a056f974859800$export$95227ead4e4cbbd(ref, viewport) {
    let h = $95a056f974859800$export$ac607276a8fe9f0a(ref);
    let ratioRel = h / viewport;
    let ratioNum = Math.floor(ratioRel);
    if (ratioRel > 1) {
        ratioRel;
        // 1638 - 811 - 811
        // console.log((h - viewport * ratioNum) + viewport * (ratioNum - 1))
        // minus all contained in screen viewports heights, then keep one for user
        return h - viewport * ratioNum + viewport * (ratioNum - 1);
    }
    return 0;
}
function $95a056f974859800$export$61fc7d43ac8f84b0(callback, wait) {
    let timeoutId = null;
    return (...args)=>{
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(()=>{
            callback.apply(null, args);
        }, wait);
    };
}
function $95a056f974859800$export$41fb34e2d77e3aca() {
    let check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function $95a056f974859800$export$b141de964f0a90c1(max) {
    return Math.floor(Math.random() * max);
}
function $95a056f974859800$export$a1d0d20ee9546562() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

});

parcelRequire.register("kcA29", function(module, exports) {
(function(global, factory) {
    factory(module.exports);
})(module.exports, function(exports1) {
    "use strict";
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    /*!
   * Observer 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */ var gsap, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context, _getGSAP = function _getGSAP() {
        return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
    }, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function _bridge(name, value) {
        return value;
    }, _integrate = function _integrate() {
        var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
        scrollers.push.apply(scrollers, _scrollers);
        proxies.push.apply(proxies, _proxies);
        _scrollers = scrollers;
        _proxies = proxies;
        _bridge = function _bridge(name, value) {
            return data[name](value);
        };
    }, _getProxyProp = function _getProxyProp(element, property) {
        return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
    }, _isViewport = function _isViewport(el) {
        return !!~_root.indexOf(el);
    }, _addListener = function _addListener(element, type, func, nonPassive, capture) {
        return element.addEventListener(type, func, {
            passive: !nonPassive,
            capture: !!capture
        });
    }, _removeListener = function _removeListener(element, type, func, capture) {
        return element.removeEventListener(type, func, !!capture);
    }, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll() {
        return _normalizer && _normalizer.isPressed || _scrollers.cache++;
    }, _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
        var cachingFunc = function cachingFunc(value) {
            if (value || value === 0) {
                _startup && (_win.history.scrollRestoration = "manual");
                var isNormalizing = _normalizer && _normalizer.isPressed;
                value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
                f(value);
                cachingFunc.cacheID = _scrollers.cache;
                isNormalizing && _bridge("ss", value);
            } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
                cachingFunc.cacheID = _scrollers.cache;
                cachingFunc.v = f();
            }
            return cachingFunc.v + cachingFunc.offset;
        };
        cachingFunc.offset = 0;
        return f && cachingFunc;
    }, _horizontal = {
        s: _scrollLeft,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
        })
    }, _vertical = {
        s: _scrollTop,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: _horizontal,
        sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
        })
    }, _getTarget = function _getTarget(t) {
        return gsap.utils.toArray(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
    }, _getScrollFunc = function _getScrollFunc(element, _ref) {
        var s = _ref.s, sc = _ref.sc;
        _isViewport(element) && (element = _doc.scrollingElement || _docEl);
        var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
        !~i && (i = _scrollers.push(element) - 1);
        _scrollers[i + offset] || element.addEventListener("scroll", _onScroll);
        var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
            return arguments.length ? element[s] = value : element[s];
        })));
        func.target = element;
        prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
        return func;
    }, _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
        var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
            var t = _getTime();
            if (force || t - t1 > min) {
                v2 = v1;
                v1 = value;
                t2 = t1;
                t1 = t;
            } else if (useDelta) v1 += value;
            else v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
        }, reset = function reset() {
            v2 = v1 = useDelta ? 0 : v1;
            t2 = t1 = 0;
        }, getVelocity = function getVelocity(latestValue) {
            var tOld = t2, vOld = v2, t = _getTime();
            (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
            return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
        };
        return {
            update: update,
            reset: reset,
            getVelocity: getVelocity
        };
    }, _getEvent = function _getEvent(e, preventDefault) {
        preventDefault && !e._gsapAllow && e.preventDefault();
        return e.changedTouches ? e.changedTouches[0] : e;
    }, _getAbsoluteMax = function _getAbsoluteMax(a) {
        var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
        return Math.abs(max) >= Math.abs(min) ? max : min;
    }, _setScrollTrigger = function _setScrollTrigger() {
        ScrollTrigger = gsap.core.globals().ScrollTrigger;
        ScrollTrigger && ScrollTrigger.core && _integrate();
    }, _initCore = function _initCore(core) {
        gsap = core || _getGSAP();
        if (gsap && typeof document !== "undefined" && document.body) {
            _win = window;
            _doc = document;
            _docEl = _doc.documentElement;
            _body = _doc.body;
            _root = [
                _win,
                _doc,
                _docEl,
                _body
            ];
            _clamp = gsap.utils.clamp;
            _context = gsap.core.context || function() {};
            _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
            _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
            _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
            setTimeout(function() {
                return _startup = 0;
            }, 500);
            _setScrollTrigger();
            _coreInitted = 1;
        }
        return _coreInitted;
    };
    _horizontal.op = _vertical;
    _scrollers.cache = 0;
    var Observer = function() {
        function Observer(vars) {
            this.init(vars);
        }
        var _proto = Observer.prototype;
        _proto.init = function init(vars) {
            _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
            ScrollTrigger || _setScrollTrigger();
            var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
            this.target = target = _getTarget(target) || _docEl;
            this.vars = vars;
            ignore && (ignore = gsap.utils.toArray(ignore));
            tolerance = tolerance || 1e-9;
            dragMinimum = dragMinimum || 0;
            wheelSpeed = wheelSpeed || 1;
            scrollSpeed = scrollSpeed || 1;
            type = type || "wheel,touch,pointer";
            debounce = debounce !== false;
            lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
            var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [
                0,
                0,
                0
            ], deltaY = [
                0,
                0,
                0
            ], onClickTime = 0, clickCapture = function clickCapture() {
                return onClickTime = _getTime();
            }, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
                return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
            }, onStopFunc = function onStopFunc() {
                self._vx.reset();
                self._vy.reset();
                onStopDelayedCall.pause();
                onStop && onStop(self);
            }, update = function update() {
                var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
                onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
                if (changedX) {
                    onRight && self.deltaX > 0 && onRight(self);
                    onLeft && self.deltaX < 0 && onLeft(self);
                    onChangeX && onChangeX(self);
                    onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
                    prevDeltaX = self.deltaX;
                    deltaX[0] = deltaX[1] = deltaX[2] = 0;
                }
                if (changedY) {
                    onDown && self.deltaY > 0 && onDown(self);
                    onUp && self.deltaY < 0 && onUp(self);
                    onChangeY && onChangeY(self);
                    onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
                    prevDeltaY = self.deltaY;
                    deltaY[0] = deltaY[1] = deltaY[2] = 0;
                }
                if (moved || dragged) {
                    onMove && onMove(self);
                    if (dragged) {
                        onDrag(self);
                        dragged = false;
                    }
                    moved = false;
                }
                locked && (locked = false, true) && onLockAxis && onLockAxis(self);
                if (wheeled) {
                    onWheel(self);
                    wheeled = false;
                }
                id = 0;
            }, onDelta = function onDelta(x, y, index) {
                deltaX[index] += x;
                deltaY[index] += y;
                self._vx.update(x);
                self._vy.update(y);
                debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
                if (lockAxis && !axis) {
                    self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                    locked = true;
                }
                if (axis !== "y") {
                    deltaX[2] += x;
                    self._vx.update(x, true);
                }
                if (axis !== "x") {
                    deltaY[2] += y;
                    self._vy.update(y, true);
                }
                debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, _onDrag = function _onDrag(e) {
                if (_ignoreCheck(e, 1)) return;
                e = _getEvent(e, preventDefault);
                var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
                self.x = x;
                self.y = y;
                if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
                    onDrag && (dragged = true);
                    isDragging || (self.isDragging = true);
                    onTouchOrPointerDelta(dx, dy);
                    isDragging || onDragStart && onDragStart(self);
                }
            }, _onPress = self.onPress = function(e) {
                if (_ignoreCheck(e, 1)) return;
                self.axis = axis = null;
                onStopDelayedCall.pause();
                self.isPressed = true;
                e = _getEvent(e);
                prevDeltaX = prevDeltaY = 0;
                self.startX = self.x = e.clientX;
                self.startY = self.y = e.clientY;
                self._vx.reset();
                self._vy.reset();
                _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
                self.deltaX = self.deltaY = 0;
                onPress && onPress(self);
            }, _onRelease = function _onRelease(e) {
                if (_ignoreCheck(e, 1)) return;
                _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
                if (!wasDragging && isTrackingDrag) {
                    self._vx.reset();
                    self._vy.reset();
                    if (preventDefault && allowClicks) gsap.delayedCall(0.08, function() {
                        if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (ownerDoc.createEvent) {
                                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                                e.target.dispatchEvent(syntheticEvent);
                            }
                        }
                    });
                }
                self.isDragging = self.isGesturing = self.isPressed = false;
                onStop && !isNormalizer && onStopDelayedCall.restart(true);
                onDragEnd && wasDragging && onDragEnd(self);
                onRelease && onRelease(self, wasDragging);
            }, _onGestureStart = function _onGestureStart(e) {
                return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
            }, _onGestureEnd = function _onGestureEnd() {
                return self.isGesturing = false, onGestureEnd(self);
            }, onScroll = function onScroll(e) {
                if (_ignoreCheck(e)) return;
                var x = scrollFuncX(), y = scrollFuncY();
                onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
                scrollX = x;
                scrollY = y;
                onStop && onStopDelayedCall.restart(true);
            }, _onWheel = function _onWheel(e) {
                if (_ignoreCheck(e)) return;
                e = _getEvent(e, preventDefault);
                onWheel && (wheeled = true);
                var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
                onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
                onStop && !isNormalizer && onStopDelayedCall.restart(true);
            }, _onMove = function _onMove(e) {
                if (_ignoreCheck(e)) return;
                var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
                self.x = x;
                self.y = y;
                moved = true;
                (dx || dy) && onTouchOrPointerDelta(dx, dy);
            }, _onHover = function _onHover(e) {
                self.event = e;
                onHover(self);
            }, _onHoverEnd = function _onHoverEnd(e) {
                self.event = e;
                onHoverEnd(self);
            }, _onClick = function _onClick(e) {
                return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
            };
            onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
            self.deltaX = self.deltaY = 0;
            self._vx = _getVelocityProp(0, 50, true);
            self._vy = _getVelocityProp(0, 50, true);
            self.scrollX = scrollFuncX;
            self.scrollY = scrollFuncY;
            self.isDragging = self.isGesturing = self.isPressed = false;
            _context(this);
            self.enable = function(e) {
                if (!self.isEnabled) {
                    _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                    type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
                    type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
                    if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                        _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
                        _addListener(ownerDoc, _eventTypes[2], _onRelease);
                        _addListener(ownerDoc, _eventTypes[3], _onRelease);
                        allowClicks && _addListener(target, "click", clickCapture, false, true);
                        onClick && _addListener(target, "click", _onClick);
                        onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                        onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                        onHover && _addListener(target, _pointerType + "enter", _onHover);
                        onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                        onMove && _addListener(target, _pointerType + "move", _onMove);
                    }
                    self.isEnabled = true;
                    e && e.type && _onPress(e);
                    onEnable && onEnable(self);
                }
                return self;
            };
            self.disable = function() {
                if (self.isEnabled) {
                    _observers.filter(function(o) {
                        return o !== self && _isViewport(o.target);
                    }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                    if (self.isPressed) {
                        self._vx.reset();
                        self._vy.reset();
                        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                    }
                    _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                    _removeListener(target, "wheel", _onWheel, capture);
                    _removeListener(target, _eventTypes[0], _onPress, capture);
                    _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                    _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                    _removeListener(target, "click", clickCapture, true);
                    _removeListener(target, "click", _onClick);
                    _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                    _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                    _removeListener(target, _pointerType + "enter", _onHover);
                    _removeListener(target, _pointerType + "leave", _onHoverEnd);
                    _removeListener(target, _pointerType + "move", _onMove);
                    self.isEnabled = self.isPressed = self.isDragging = false;
                    onDisable && onDisable(self);
                }
            };
            self.kill = self.revert = function() {
                self.disable();
                var i = _observers.indexOf(self);
                i >= 0 && _observers.splice(i, 1);
                _normalizer === self && (_normalizer = 0);
            };
            _observers.push(self);
            isNormalizer && _isViewport(target) && (_normalizer = self);
            self.enable(event);
        };
        _createClass(Observer, [
            {
                key: "velocityX",
                get: function get() {
                    return this._vx.getVelocity();
                }
            },
            {
                key: "velocityY",
                get: function get() {
                    return this._vy.getVelocity();
                }
            }
        ]);
        return Observer;
    }();
    Observer.version = "3.11.4";
    Observer.create = function(vars) {
        return new Observer(vars);
    };
    Observer.register = _initCore;
    Observer.getAll = function() {
        return _observers.slice();
    };
    Observer.getById = function(id) {
        return _observers.filter(function(o) {
            return o.vars.id === id;
        })[0];
    };
    _getGSAP() && gsap.registerPlugin(Observer);
    /*!
   * ScrollTrigger 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */ var gsap$1, _coreInitted$1, _win$1, _doc$1, _docEl$1, _body$1, _root$1, _resizeDelay, _toArray, _clamp$1, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer$1, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context$1, _scrollRestoration, _limitCallbacks, _startup$1 = 1, _getTime$1 = Date.now, _time1 = _getTime$1(), _lastScrollTime = 0, _enabled = 0, _pointerDownHandler = function _pointerDownHandler() {
        return _pointerIsDown = 1;
    }, _pointerUpHandler = function _pointerUpHandler() {
        return _pointerIsDown = 0;
    }, _passThrough = function _passThrough(v) {
        return v;
    }, _round = function _round(value) {
        return Math.round(value * 100000) / 100000 || 0;
    }, _windowExists = function _windowExists() {
        return typeof window !== "undefined";
    }, _getGSAP$1 = function _getGSAP() {
        return gsap$1 || _windowExists() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
    }, _isViewport$1 = function _isViewport(e) {
        return !!~_root$1.indexOf(e);
    }, _getBoundsFunc = function _getBoundsFunc(element) {
        return _getProxyProp(element, "getBoundingClientRect") || (_isViewport$1(element) ? function() {
            _winOffsets.width = _win$1.innerWidth;
            _winOffsets.height = _win$1.innerHeight;
            return _winOffsets;
        } : function() {
            return _getBounds(element);
        });
    }, _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
        var d = _ref.d, d2 = _ref.d2, a = _ref.a;
        return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
            return a()[d];
        } : function() {
            return (isViewport ? _win$1["inner" + d2] : scroller["client" + d2]) || 0;
        };
    }, _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
        return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
            return _winOffsets;
        };
    }, _maxScroll = function _maxScroll(element, _ref2) {
        var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
        return (s = "scroll" + d2, a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport$1(element) ? (_docEl$1[s] || _body$1[s]) - (_win$1["inner" + d2] || _docEl$1["client" + d2] || _body$1["client" + d2]) : element[s] - element["offset" + d2];
    }, _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
        for(var i = 0; i < _autoRefresh.length; i += 3)(!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }, _isString = function _isString(value) {
        return typeof value === "string";
    }, _isFunction = function _isFunction(value) {
        return typeof value === "function";
    }, _isNumber = function _isNumber(value) {
        return typeof value === "number";
    }, _isObject = function _isObject(value) {
        return typeof value === "object";
    }, _endAnimation = function _endAnimation(animation, reversed, pause) {
        return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
    }, _callback = function _callback(self, func) {
        if (self.enabled) {
            var result = func(self);
            result && result.totalTime && (self.callbackAnimation = result);
        }
    }, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle(element) {
        return _win$1.getComputedStyle(element);
    }, _makePositionable = function _makePositionable(element) {
        var position = _getComputedStyle(element).position;
        element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
    }, _setDefaults = function _setDefaults(obj, defaults) {
        for(var p in defaults)p in obj || (obj[p] = defaults[p]);
        return obj;
    }, _getBounds = function _getBounds(element, withoutTransforms) {
        var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(element, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), bounds = element.getBoundingClientRect();
        tween && tween.progress(0).kill();
        return bounds;
    }, _getSize = function _getSize(element, _ref3) {
        var d2 = _ref3.d2;
        return element["offset" + d2] || element["client" + d2] || 0;
    }, _getLabelRatioArray = function _getLabelRatioArray(timeline) {
        var a = [], labels = timeline.labels, duration = timeline.duration(), p;
        for(p in labels)a.push(labels[p] / duration);
        return a;
    }, _getClosestLabel = function _getClosestLabel(animation) {
        return function(value) {
            return gsap$1.utils.snap(_getLabelRatioArray(animation), value);
        };
    }, _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
        var snap = gsap$1.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
            return a - b;
        });
        return a ? function(value, direction, threshold) {
            if (threshold === void 0) threshold = 1e-3;
            var i;
            if (!direction) return snap(value);
            if (direction > 0) {
                value -= threshold;
                for(i = 0; i < a.length; i++){
                    if (a[i] >= value) return a[i];
                }
                return a[i - 1];
            } else {
                i = a.length;
                value += threshold;
                while(i--){
                    if (a[i] <= value) return a[i];
                }
            }
            return a[0];
        } : function(value, direction, threshold) {
            if (threshold === void 0) threshold = 1e-3;
            var snapped = snap(value);
            return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
        };
    }, _getLabelAtDirection = function _getLabelAtDirection(timeline) {
        return function(value, st) {
            return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
        };
    }, _multiListener = function _multiListener(func, element, types, callback) {
        return types.split(",").forEach(function(type) {
            return func(element, type, callback);
        });
    }, _addListener$1 = function _addListener(element, type, func, nonPassive, capture) {
        return element.addEventListener(type, func, {
            passive: !nonPassive,
            capture: !!capture
        });
    }, _removeListener$1 = function _removeListener(element, type, func, capture) {
        return element.removeEventListener(type, func, !!capture);
    }, _wheelListener = function _wheelListener(func, el, scrollFunc) {
        return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
    }, _markerDefaults = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, _defaults = {
        toggleActions: "play",
        anticipatePin: 0
    }, _keywords = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1
    }, _offsetToPx = function _offsetToPx(value, size) {
        if (_isString(value)) {
            var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
            if (~eqIndex) {
                value.indexOf("%") > eqIndex && (relative *= size / 100);
                value = value.substr(0, eqIndex - 1);
            }
            value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
        }
        return value;
    }, _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
        var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
        var e = _doc$1.createElement("div"), useFixedPosition = _isViewport$1(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body$1 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
        (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
        matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
        e._isStart = isStart;
        e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
        e.style.cssText = css;
        e.innerText = name || name === 0 ? type + "-" + name : type;
        parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
        e._offset = e["offset" + direction.op.d2];
        _positionMarker(e, 0, direction, isStart);
        return e;
    }, _positionMarker = function _positionMarker(marker, start, direction, flipped) {
        var vars = {
            display: "block"
        }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
        marker._isFlipped = flipped;
        vars[direction.a + "Percent"] = flipped ? -100 : 0;
        vars[direction.a] = flipped ? "1px" : 0;
        vars["border" + side + _Width] = 1;
        vars["border" + oppositeSide + _Width] = 0;
        vars[direction.p] = start + "px";
        gsap$1.set(marker, vars);
    }, _triggers = [], _ids = {}, _rafID, _sync = function _sync() {
        return _getTime$1() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
    }, _onScroll$1 = function _onScroll() {
        if (!_normalizer$1 || !_normalizer$1.isPressed || _normalizer$1.startX > _body$1.clientWidth) {
            _scrollers.cache++;
            if (_normalizer$1) _rafID || (_rafID = requestAnimationFrame(_updateAll));
            else _updateAll();
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime$1();
        }
    }, _setBaseDimensions = function _setBaseDimensions() {
        _baseScreenWidth = _win$1.innerWidth;
        _baseScreenHeight = _win$1.innerHeight;
    }, _onResize = function _onResize() {
        _scrollers.cache++;
        !_refreshing && !_ignoreResize && !_doc$1.fullscreenElement && !_doc$1.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$1.innerWidth || Math.abs(_win$1.innerHeight - _baseScreenHeight) > _win$1.innerHeight * 0.25) && _resizeDelay.restart(true);
    }, _listeners = {}, _emptyArray = [], _softRefresh = function _softRefresh() {
        return _removeListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh) || _refreshAll(true);
    }, _dispatch = function _dispatch(type) {
        return _listeners[type] && _listeners[type].map(function(f) {
            return f();
        }) || _emptyArray;
    }, _savedStyles = [], _revertRecorded = function _revertRecorded(media) {
        for(var i = 0; i < _savedStyles.length; i += 5)if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
            _savedStyles[i].style.cssText = _savedStyles[i + 1];
            _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
            _savedStyles[i + 3].uncache = 1;
        }
    }, _revertAll = function _revertAll(kill, media) {
        var trigger;
        for(_i = 0; _i < _triggers.length; _i++){
            trigger = _triggers[_i];
            if (trigger && (!media || trigger._ctx === media)) {
                if (kill) trigger.kill(1);
                else trigger.revert(true, true);
            }
        }
        media && _revertRecorded(media);
        media || _dispatch("revert");
    }, _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
        _scrollers.cache++;
        (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
            return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
        });
        _isString(scrollRestoration) && (_win$1.history.scrollRestoration = _scrollRestoration = scrollRestoration);
    }, _refreshingAll, _refreshID = 0, _queueRefreshID, _queueRefreshAll = function _queueRefreshAll() {
        if (_queueRefreshID !== _refreshID) {
            var id = _queueRefreshID = _refreshID;
            requestAnimationFrame(function() {
                return id === _refreshID && _refreshAll(true);
            });
        }
    }, _refreshAll = function _refreshAll(force, skipRevert) {
        if (_lastScrollTime && !force) {
            _addListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh);
            return;
        }
        _refreshingAll = ScrollTrigger$1.isRefreshing = true;
        _scrollers.forEach(function(obj) {
            return _isFunction(obj) && obj.cacheID++ && (obj.rec = obj());
        });
        var refreshInits = _dispatch("refreshInit");
        _sort && ScrollTrigger$1.sort();
        skipRevert || _revertAll();
        _scrollers.forEach(function(obj) {
            if (_isFunction(obj)) {
                obj.smooth && (obj.target.style.scrollBehavior = "auto");
                obj(0);
            }
        });
        _triggers.slice(0).forEach(function(t) {
            return t.refresh();
        });
        _triggers.forEach(function(t, i) {
            if (t._subPinOffset && t.pin) {
                var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
                t.revert(true, 1);
                t.adjustPinSpacing(t.pin[prop] - original);
                t.revert(false, 1);
            }
        });
        _triggers.forEach(function(t) {
            return t.vars.end === "max" && t.setPositions(t.start, Math.max(t.start + 1, _maxScroll(t.scroller, t._dir)));
        });
        refreshInits.forEach(function(result) {
            return result && result.render && result.render(-1);
        });
        _scrollers.forEach(function(obj) {
            if (_isFunction(obj)) {
                obj.smooth && requestAnimationFrame(function() {
                    return obj.target.style.scrollBehavior = "smooth";
                });
                obj.rec && obj(obj.rec);
            }
        });
        _clearScrollMemory(_scrollRestoration, 1);
        _resizeDelay.pause();
        _refreshID++;
        _updateAll(2);
        _triggers.forEach(function(t) {
            return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
        });
        _refreshingAll = ScrollTrigger$1.isRefreshing = false;
        _dispatch("refresh");
    }, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll(force) {
        if (!_refreshingAll || force === 2) {
            ScrollTrigger$1.isUpdating = true;
            _primary && _primary.update(0);
            var l = _triggers.length, time = _getTime$1(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
            _direction = _lastScroll > scroll ? -1 : 1;
            _lastScroll = scroll;
            if (recordVelocity) {
                if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                    _lastScrollTime = 0;
                    _dispatch("scrollEnd");
                }
                _time2 = _time1;
                _time1 = time;
            }
            if (_direction < 0) {
                _i = l;
                while(_i-- > 0)_triggers[_i] && _triggers[_i].update(0, recordVelocity);
                _direction = 1;
            } else for(_i = 0; _i < l; _i++)_triggers[_i] && _triggers[_i].update(0, recordVelocity);
            ScrollTrigger$1.isUpdating = false;
        }
        _rafID = 0;
    }, _propNamesToCopy = [
        _left,
        _top,
        _bottom,
        _right,
        _margin + _Bottom,
        _margin + _Right,
        _margin + _Top,
        _margin + _Left,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order"
    ], _stateProps = _propNamesToCopy.concat([
        _width,
        _height,
        "boxSizing",
        "max" + _Width,
        "max" + _Height,
        "position",
        _margin,
        _padding,
        _padding + _Top,
        _padding + _Right,
        _padding + _Bottom,
        _padding + _Left
    ]), _swapPinOut = function _swapPinOut(pin, spacer, state) {
        _setState(state);
        var cache = pin._gsap;
        if (cache.spacerIsNative) _setState(cache.spacerState);
        else if (pin._gsap.swappedIn) {
            var parent = spacer.parentNode;
            if (parent) {
                parent.insertBefore(pin, spacer);
                parent.removeChild(spacer);
            }
        }
        pin._gsap.swappedIn = false;
    }, _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
        if (!pin._gsap.swappedIn) {
            var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
            while(i--){
                p = _propNamesToCopy[i];
                spacerStyle[p] = cs[p];
            }
            spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
            cs.display === "inline" && (spacerStyle.display = "inline-block");
            pinStyle[_bottom] = pinStyle[_right] = "auto";
            spacerStyle.flexBasis = cs.flexBasis || "auto";
            spacerStyle.overflow = "visible";
            spacerStyle.boxSizing = "border-box";
            spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
            spacerStyle[_height] = _getSize(pin, _vertical) + _px;
            spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
            _setState(spacerState);
            pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
            pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
            pinStyle[_padding] = cs[_padding];
            if (pin.parentNode !== spacer) {
                pin.parentNode.insertBefore(spacer, pin);
                spacer.appendChild(pin);
            }
            pin._gsap.swappedIn = true;
        }
    }, _capsExp = /([A-Z])/g, _setState = function _setState(state) {
        if (state) {
            var style = state.t.style, l = state.length, i = 0, p, value;
            (state.t._gsap || gsap$1.core.getCache(state.t)).uncache = 1;
            for(; i < l; i += 2){
                value = state[i + 1];
                p = state[i];
                if (value) style[p] = value;
                else if (style[p]) style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
            }
        }
    }, _getState = function _getState(element) {
        var l = _stateProps.length, style = element.style, state = [], i = 0;
        for(; i < l; i++)state.push(_stateProps[i], style[_stateProps[i]]);
        state.t = element;
        return state;
    }, _copyState = function _copyState(state, override, omitOffsets) {
        var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
        for(; i < l; i += 2){
            p = state[i];
            result.push(p, p in override ? override[p] : state[i + 1]);
        }
        result.t = state.t;
        return result;
    }, _winOffsets = {
        left: 0,
        top: 0
    }, _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
        _isFunction(value) && (value = value(self));
        if (_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
        var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
        containerAnimation && containerAnimation.seek(0);
        if (!_isNumber(value)) {
            _isFunction(trigger) && (trigger = trigger(self));
            var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
            element = _getTarget(trigger) || _body$1;
            bounds = _getBounds(element) || {};
            if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
                display = element.style.display;
                element.style.display = "block";
                bounds = _getBounds(element);
                display ? element.style.display = display : element.style.removeProperty("display");
            }
            localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
            globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
            value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
            markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
            scrollerSize -= scrollerSize - globalOffset;
        } else if (markerScroller) _positionMarker(markerScroller, scrollerSize, direction, true);
        if (marker) {
            var position = value + scrollerSize, isStart = marker._isStart;
            p1 = "scroll" + direction.d2;
            _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$1[p1], _docEl$1[p1]) : marker.parentNode[p1]) <= position + 1);
            if (useFixedPosition) {
                scrollerBounds = _getBounds(markerScroller);
                useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
            }
        }
        if (containerAnimation && element) {
            p1 = _getBounds(element);
            containerAnimation.seek(scrollerMax);
            p2 = _getBounds(element);
            containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
            value = value / containerAnimation._caScrollDist * scrollerMax;
        }
        containerAnimation && containerAnimation.seek(time);
        return containerAnimation ? value : Math.round(value);
    }, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent(element, parent, top, left) {
        if (element.parentNode !== parent) {
            var style = element.style, p, cs;
            if (parent === _body$1) {
                element._stOrig = style.cssText;
                cs = _getComputedStyle(element);
                for(p in cs)if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
                style.top = top;
                style.left = left;
            } else style.cssText = element._stOrig;
            gsap$1.core.getCache(element).uncache = 1;
            parent.appendChild(element);
        }
    }, _getTweenCreator = function _getTweenCreator(scroller, direction) {
        var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
            var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
            initialValue = initialValue || getScroll();
            change2 = change1 && change2 || 0;
            change1 = change1 || scrollTo - initialValue;
            tween && tween.kill();
            lastScroll1 = Math.round(initialValue);
            vars[prop] = scrollTo;
            vars.modifiers = modifiers;
            modifiers[prop] = function(value) {
                value = Math.round(getScroll());
                if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 3 && Math.abs(value - lastScroll2) > 3) {
                    tween.kill();
                    getTween.tween = 0;
                } else value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
                lastScroll2 = lastScroll1;
                return lastScroll1 = Math.round(value);
            };
            vars.onUpdate = function() {
                _scrollers.cache++;
                _updateAll();
            };
            vars.onComplete = function() {
                getTween.tween = 0;
                onComplete && onComplete.call(tween);
            };
            tween = getTween.tween = gsap$1.to(scroller, vars);
            return tween;
        };
        scroller[prop] = getScroll;
        getScroll.wheelHandler = function() {
            return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
        };
        _addListener$1(scroller, "wheel", getScroll.wheelHandler);
        return getTween;
    };
    var ScrollTrigger$1 = function() {
        function ScrollTrigger(vars, animation) {
            _coreInitted$1 || ScrollTrigger.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
            this.init(vars, animation);
        }
        var _proto = ScrollTrigger.prototype;
        _proto.init = function init(vars, animation) {
            this.progress = this.start = 0;
            this.vars && this.kill(true, true);
            if (!_enabled) {
                this.update = this.refresh = this.kill = _passThrough;
                return;
            }
            vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
                trigger: vars
            } : vars, _defaults);
            var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win$1), scrollerCache = gsap$1.core.getCache(scroller), isViewport = _isViewport$1(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
                vars.onEnter,
                vars.onLeave,
                vars.onEnterBack,
                vars.onLeaveBack
            ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
                return vars.onRefreshInit(self);
            }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
            _context$1(self);
            self._dir = direction;
            anticipatePin *= 45;
            self.scroller = scroller;
            self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
            scroll1 = scrollFunc();
            self.vars = vars;
            animation = animation || vars.animation;
            if ("refreshPriority" in vars) {
                _sort = 1;
                vars.refreshPriority === -9999 && (_primary = self);
            }
            scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
                top: _getTweenCreator(scroller, _vertical),
                left: _getTweenCreator(scroller, _horizontal)
            };
            self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
            self.scrubDuration = function(value) {
                scrubSmooth = _isNumber(value) && value;
                if (!scrubSmooth) {
                    scrubTween && scrubTween.progress(1).kill();
                    scrubTween = 0;
                } else scrubTween ? scrubTween.duration(value) : scrubTween = gsap$1.to(animation, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: scrubSmooth,
                    paused: true,
                    onComplete: function onComplete() {
                        return onScrubComplete && onScrubComplete(self);
                    }
                });
            };
            if (animation) {
                animation.vars.lazy = false;
                animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
                self.animation = animation.pause();
                animation.scrollTrigger = self;
                self.scrubDuration(scrub);
                snap1 = 0;
                id || (id = animation.vars.id);
            }
            _triggers.push(self);
            if (snap) {
                if (!_isObject(snap) || snap.push) snap = {
                    snapTo: snap
                };
                "scrollBehavior" in _body$1.style && gsap$1.set(isViewport ? [
                    _body$1,
                    _docEl$1
                ] : scroller, {
                    scrollBehavior: "auto"
                });
                _scrollers.forEach(function(o) {
                    return _isFunction(o) && o.target === (isViewport ? _doc$1.scrollingElement || _docEl$1 : scroller) && (o.smooth = false);
                });
                snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                    return _snapDirectional(snap.snapTo)(value, _getTime$1() - lastRefresh < 500 ? 0 : st.direction);
                } : gsap$1.utils.snap(snap.snapTo);
                snapDurClamp = snap.duration || {
                    min: 0.1,
                    max: 2
                };
                snapDurClamp = _isObject(snapDurClamp) ? _clamp$1(snapDurClamp.min, snapDurClamp.max) : _clamp$1(snapDurClamp, snapDurClamp);
                snapDelayedCall = gsap$1.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                    var scroll = scrollFunc(), refreshedRecently = _getTime$1() - lastRefresh < 500, tween = tweenTo.tween;
                    if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                        var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime$1() - _time2) * 1000 || 0, change1 = gsap$1.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = _clamp$1(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                        if (scroll <= end && scroll >= start && endScroll !== scroll) {
                            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) return;
                            if (snap.inertia === false) change1 = endValue - progress;
                            tweenTo(endScroll, {
                                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                                ease: snap.ease || "power3",
                                data: _abs(endScroll - scroll),
                                onInterrupt: function onInterrupt() {
                                    return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                                },
                                onComplete: function onComplete() {
                                    self.update();
                                    lastSnap = scrollFunc();
                                    snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                    onSnapComplete && onSnapComplete(self);
                                    _onComplete && _onComplete(self);
                                }
                            }, scroll, change1 * change, endScroll - scroll - change1 * change);
                            onStart && onStart(self, tweenTo.tween);
                        }
                    } else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
                }).pause();
            }
            id && (_ids[id] = self);
            trigger = self.trigger = _getTarget(trigger || pin);
            customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
            customRevertReturn && (customRevertReturn = customRevertReturn(self));
            pin = pin === true ? trigger : _getTarget(pin);
            _isString(toggleClass) && (toggleClass = {
                targets: trigger,
                className: toggleClass
            });
            if (pin) {
                pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
                self.pin = pin;
                pinCache = gsap$1.core.getCache(pin);
                if (!pinCache.spacer) {
                    if (pinSpacer) {
                        pinSpacer = _getTarget(pinSpacer);
                        pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
                        pinCache.spacerIsNative = !!pinSpacer;
                        pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                    }
                    pinCache.spacer = spacer = pinSpacer || _doc$1.createElement("div");
                    spacer.classList.add("pin-spacer");
                    id && spacer.classList.add("pin-spacer-" + id);
                    pinCache.pinState = pinOriginalState = _getState(pin);
                } else pinOriginalState = pinCache.pinState;
                vars.force3D !== false && gsap$1.set(pin, {
                    force3D: true
                });
                self.spacer = spacer = pinCache.spacer;
                cs = _getComputedStyle(pin);
                spacingStart = cs[pinSpacing + direction.os2];
                pinGetter = gsap$1.getProperty(pin);
                pinSetter = gsap$1.quickSetter(pin, direction.a, _px);
                _swapPinIn(pin, spacer, cs);
                pinState = _getState(pin);
            }
            if (markers) {
                markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
                markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
                markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
                offset = markerStartTrigger["offset" + direction.op.d2];
                var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
                markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
                markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
                containerAnimation && (caMarkerSetter = gsap$1.quickSetter([
                    markerStart,
                    markerEnd
                ], direction.a, _px));
                if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
                    _makePositionable(isViewport ? _body$1 : scroller);
                    gsap$1.set([
                        markerStartTrigger,
                        markerEndTrigger
                    ], {
                        force3D: true
                    });
                    markerStartSetter = gsap$1.quickSetter(markerStartTrigger, direction.a, _px);
                    markerEndSetter = gsap$1.quickSetter(markerEndTrigger, direction.a, _px);
                }
            }
            if (containerAnimation) {
                var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
                containerAnimation.eventCallback("onUpdate", function() {
                    self.update(0, 0, 1);
                    oldOnUpdate && oldOnUpdate.apply(oldParams || []);
                });
            }
            self.previous = function() {
                return _triggers[_triggers.indexOf(self) - 1];
            };
            self.next = function() {
                return _triggers[_triggers.indexOf(self) + 1];
            };
            self.revert = function(revert, temp) {
                if (!temp) return self.kill(true);
                var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
                if (r !== self.isReverted) {
                    if (r) {
                        prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
                        prevProgress = self.progress;
                        prevAnimProgress = animation && animation.progress();
                    }
                    markerStart && [
                        markerStart,
                        markerEnd,
                        markerStartTrigger,
                        markerEndTrigger
                    ].forEach(function(m) {
                        return m.style.display = r ? "none" : "block";
                    });
                    if (r) {
                        _refreshing = 1;
                        self.update(r);
                    }
                    if (pin && (!pinReparent || !self.isActive)) {
                        if (r) _swapPinOut(pin, spacer, pinOriginalState);
                        else _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                    }
                    r || self.update(r);
                    _refreshing = prevRefreshing;
                    self.isReverted = r;
                }
            };
            self.refresh = function(soft, force) {
                if ((_refreshing || !self.enabled) && !force) return;
                if (pin && soft && _lastScrollTime) {
                    _addListener$1(ScrollTrigger, "scrollEnd", _softRefresh);
                    return;
                }
                !_refreshingAll && onRefreshInit && onRefreshInit(self);
                _refreshing = 1;
                lastRefresh = _getTime$1();
                if (tweenTo.tween) {
                    tweenTo.tween.kill();
                    tweenTo.tween = 0;
                }
                scrubTween && scrubTween.pause();
                invalidateOnRefresh && animation && animation.revert({
                    kill: false
                }).invalidate();
                self.isReverted || self.revert(true, true);
                self._subPinOffset = false;
                var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow;
                while(i--){
                    curTrigger = _triggers[i];
                    curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
                    curPin = curTrigger.pin;
                    if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
                        revertedPins || (revertedPins = []);
                        revertedPins.unshift(curTrigger);
                        curTrigger.revert(true, true);
                    }
                    if (curTrigger !== _triggers[i]) {
                        triggerIndex--;
                        i--;
                    }
                }
                _isFunction(parsedStart) && (parsedStart = parsedStart(self));
                start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
                _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
                if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                    if (~parsedEnd.indexOf(" ")) parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                    else {
                        offset = _offsetToPx(parsedEnd.substr(2), size);
                        parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
                        parsedEndTrigger = trigger;
                    }
                }
                end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
                change = end - start || (start -= 0.01) && 0.001;
                offset = 0;
                i = triggerIndex;
                while(i--){
                    curTrigger = _triggers[i];
                    curPin = curTrigger.pin;
                    if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                        cs = curTrigger.end - curTrigger.start;
                        if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && !_isNumber(parsedStart)) offset += cs * (1 - curTrigger.progress);
                        curPin === pin && (otherPinOffset += cs);
                    }
                }
                start += offset;
                end += offset;
                self._pinPush = otherPinOffset;
                if (markerStart && offset) {
                    cs = {};
                    cs[direction.a] = "+=" + offset;
                    pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                    gsap$1.set([
                        markerStart,
                        markerEnd
                    ], cs);
                }
                if (pin) {
                    cs = _getComputedStyle(pin);
                    isVertical = direction === _vertical;
                    scroll = scrollFunc();
                    pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                    if (!max && end > 1) {
                        forcedOverflow = (isViewport ? _doc$1.scrollingElement || _docEl$1 : scroller).style;
                        forcedOverflow = {
                            style: forcedOverflow,
                            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                        };
                        forcedOverflow["overflow" + direction.a.toUpperCase()] = "scroll";
                    }
                    _swapPinIn(pin, spacer, cs);
                    pinState = _getState(pin);
                    bounds = _getBounds(pin, true);
                    oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
                    if (pinSpacing) {
                        spacerState = [
                            pinSpacing + direction.os2,
                            change + otherPinOffset + _px
                        ];
                        spacerState.t = spacer;
                        i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                        i && spacerState.push(direction.d, i + _px);
                        _setState(spacerState);
                        if (pinnedContainer) _triggers.forEach(function(t) {
                            if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
                        });
                        useFixedPosition && scrollFunc(prevScroll);
                    }
                    if (useFixedPosition) {
                        override = {
                            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                            boxSizing: "border-box",
                            position: "fixed"
                        };
                        override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                        override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                        override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                        override[_padding] = cs[_padding];
                        override[_padding + _Top] = cs[_padding + _Top];
                        override[_padding + _Right] = cs[_padding + _Right];
                        override[_padding + _Bottom] = cs[_padding + _Bottom];
                        override[_padding + _Left] = cs[_padding + _Left];
                        pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                        _refreshingAll && scrollFunc(0);
                    }
                    if (animation) {
                        initted = animation._initted;
                        _suppressOverwrites(1);
                        animation.render(animation.duration(), true, true);
                        pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                        pinMoves = Math.abs(change - pinChange) > 1;
                        useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
                        animation.render(0, true, true);
                        initted || animation.invalidate(true);
                        animation.parent || animation.totalTime(animation.totalTime());
                        _suppressOverwrites(0);
                    } else pinChange = change;
                    forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
                } else if (trigger && scrollFunc() && !containerAnimation) {
                    bounds = trigger.parentNode;
                    while(bounds && bounds !== _body$1){
                        if (bounds._pinOffset) {
                            start -= bounds._pinOffset;
                            end -= bounds._pinOffset;
                        }
                        bounds = bounds.parentNode;
                    }
                }
                revertedPins && revertedPins.forEach(function(t) {
                    return t.revert(false, true);
                });
                self.start = start;
                self.end = end;
                scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
                if (!containerAnimation && !_refreshingAll) {
                    scroll1 < prevScroll && scrollFunc(prevScroll);
                    self.scroll.rec = 0;
                }
                self.revert(false, true);
                if (snapDelayedCall) {
                    lastSnap = -1;
                    self.isActive && scrollFunc(start + change * prevProgress);
                    snapDelayedCall.restart(true);
                }
                _refreshing = 0;
                animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
                if (prevProgress !== self.progress || containerAnimation) {
                    animation && !isToggle && animation.totalProgress(prevProgress, true);
                    self.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
                }
                pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
                onRefresh && !_refreshingAll && onRefresh(self);
            };
            self.getVelocity = function() {
                return (scrollFunc() - scroll2) / (_getTime$1() - _time2) * 1000 || 0;
            };
            self.endAnimation = function() {
                _endAnimation(self.callbackAnimation);
                if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
            };
            self.labelToScroll = function(label) {
                return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
            };
            self.getTrailing = function(name) {
                var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
                return (_isString(name) ? a.filter(function(t) {
                    return t.vars.preventOverlaps === name;
                }) : a).filter(function(t) {
                    return self.direction > 0 ? t.end <= start : t.start >= end;
                });
            };
            self.update = function(reset, recordVelocity, forceFake) {
                if (containerAnimation && !forceFake && !reset) return;
                var scroll = _refreshingAll ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
                if (recordVelocity) {
                    scroll2 = scroll1;
                    scroll1 = containerAnimation ? scrollFunc() : scroll;
                    if (snap) {
                        snap2 = snap1;
                        snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                    }
                }
                anticipatePin && !clipped && pin && !_refreshing && !_startup$1 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime$1() - _time2) * anticipatePin && (clipped = 0.0001);
                if (clipped !== prevProgress && self.enabled) {
                    isActive = self.isActive = !!clipped && clipped < 1;
                    wasActive = !!prevProgress && prevProgress < 1;
                    toggled = isActive !== wasActive;
                    stateChanged = toggled || !!clipped !== !!prevProgress;
                    self.direction = clipped > prevProgress ? 1 : -1;
                    self.progress = clipped;
                    if (stateChanged && !_refreshing) {
                        toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;
                        if (isToggle) {
                            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                        }
                    }
                    preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
                        return t.endAnimation();
                    }));
                    if (!isToggle) {
                        if (scrubTween && !_refreshing && !_startup$1) {
                            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                            if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                            else {
                                scrubTween.vars.totalProgress = clipped;
                                scrubTween.invalidate().restart();
                            }
                        } else if (animation) animation.totalProgress(clipped, !!_refreshing);
                    }
                    if (pin) {
                        reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                        if (!useFixedPosition) pinSetter(_round(pinStart + pinChange * clipped));
                        else if (stateChanged) {
                            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                            if (pinReparent) {
                                if (!reset && (isActive || isAtMax)) {
                                    var bounds = _getBounds(pin, true), _offset = scroll - start;
                                    _reparent(pin, _body$1, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                                } else _reparent(pin, spacer);
                            }
                            _setState(isActive || isAtMax ? pinActiveState : pinState);
                            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                        }
                    }
                    snap && !tweenTo.tween && !_refreshing && !_startup$1 && snapDelayedCall.restart(true);
                    toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                        return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                    });
                    onUpdate && !isToggle && !reset && onUpdate(self);
                    if (stateChanged && !_refreshing) {
                        if (isToggle) {
                            if (isTakingAction) {
                                if (action === "complete") animation.pause().totalProgress(1);
                                else if (action === "reset") animation.restart(true).pause();
                                else if (action === "restart") animation.restart(true);
                                else animation[action]();
                            }
                            onUpdate && onUpdate(self);
                        }
                        if (toggled || !_limitCallbacks) {
                            onToggle && toggled && _callback(self, onToggle);
                            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
                            if (!toggled) {
                                toggleState = clipped === 1 ? 1 : 3;
                                callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                            }
                        }
                        if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                            _endAnimation(self.callbackAnimation);
                            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                        }
                    } else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
                }
                if (markerEndSetter) {
                    var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                    markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                    markerEndSetter(n);
                }
                caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
            };
            self.enable = function(reset, refresh) {
                if (!self.enabled) {
                    self.enabled = true;
                    _addListener$1(scroller, "resize", _onResize);
                    _addListener$1(isViewport ? _doc$1 : scroller, "scroll", _onScroll$1);
                    onRefreshInit && _addListener$1(ScrollTrigger, "refreshInit", onRefreshInit);
                    if (reset !== false) {
                        self.progress = prevProgress = 0;
                        scroll1 = scroll2 = lastSnap = scrollFunc();
                    }
                    refresh !== false && self.refresh();
                }
            };
            self.getTween = function(snap) {
                return snap && tweenTo ? tweenTo.tween : scrubTween;
            };
            self.setPositions = function(newStart, newEnd) {
                if (pin) {
                    pinStart += newStart - start;
                    pinChange += newEnd - newStart - change;
                    pinSpacing === _padding && self.adjustPinSpacing(newEnd - newStart - change);
                }
                self.start = start = newStart;
                self.end = end = newEnd;
                change = newEnd - newStart;
                self.update();
            };
            self.adjustPinSpacing = function(amount) {
                if (spacerState) {
                    var i = spacerState.indexOf(direction.d) + 1;
                    spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
                    spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
                    _setState(spacerState);
                }
            };
            self.disable = function(reset, allowAnimation) {
                if (self.enabled) {
                    reset !== false && self.revert(true, true);
                    self.enabled = self.isActive = false;
                    allowAnimation || scrubTween && scrubTween.pause();
                    prevScroll = 0;
                    pinCache && (pinCache.uncache = 1);
                    onRefreshInit && _removeListener$1(ScrollTrigger, "refreshInit", onRefreshInit);
                    if (snapDelayedCall) {
                        snapDelayedCall.pause();
                        tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                    }
                    if (!isViewport) {
                        var i = _triggers.length;
                        while(i--){
                            if (_triggers[i].scroller === scroller && _triggers[i] !== self) return;
                        }
                        _removeListener$1(scroller, "resize", _onResize);
                        _removeListener$1(scroller, "scroll", _onScroll$1);
                    }
                }
            };
            self.kill = function(revert, allowAnimation) {
                self.disable(revert, allowAnimation);
                scrubTween && !allowAnimation && scrubTween.kill();
                id && delete _ids[id];
                var i = _triggers.indexOf(self);
                i >= 0 && _triggers.splice(i, 1);
                i === _i && _direction > 0 && _i--;
                i = 0;
                _triggers.forEach(function(t) {
                    return t.scroller === self.scroller && (i = 1);
                });
                i || _refreshingAll || (self.scroll.rec = 0);
                if (animation) {
                    animation.scrollTrigger = null;
                    revert && animation.revert({
                        kill: false
                    });
                    allowAnimation || animation.kill();
                }
                markerStart && [
                    markerStart,
                    markerEnd,
                    markerStartTrigger,
                    markerEndTrigger
                ].forEach(function(m) {
                    return m.parentNode && m.parentNode.removeChild(m);
                });
                _primary === self && (_primary = 0);
                if (pin) {
                    pinCache && (pinCache.uncache = 1);
                    i = 0;
                    _triggers.forEach(function(t) {
                        return t.pin === pin && i++;
                    });
                    i || (pinCache.spacer = 0);
                }
                vars.onKill && vars.onKill(self);
            };
            self.enable(false, false);
            customRevertReturn && customRevertReturn(self);
            !animation || !animation.add || change ? self.refresh() : gsap$1.delayedCall(0.01, function() {
                return start || end || self.refresh();
            }) && (change = 0.01) && (start = end = 0);
            pin && _queueRefreshAll();
        };
        ScrollTrigger.register = function register(core) {
            if (!_coreInitted$1) {
                gsap$1 = core || _getGSAP$1();
                _windowExists() && window.document && ScrollTrigger.enable();
                _coreInitted$1 = _enabled;
            }
            return _coreInitted$1;
        };
        ScrollTrigger.defaults = function defaults(config) {
            if (config) for(var p in config)_defaults[p] = config[p];
            return _defaults;
        };
        ScrollTrigger.disable = function disable(reset, kill) {
            _enabled = 0;
            _triggers.forEach(function(trigger) {
                return trigger[kill ? "kill" : "disable"](reset);
            });
            _removeListener$1(_win$1, "wheel", _onScroll$1);
            _removeListener$1(_doc$1, "scroll", _onScroll$1);
            clearInterval(_syncInterval);
            _removeListener$1(_doc$1, "touchcancel", _passThrough);
            _removeListener$1(_body$1, "touchstart", _passThrough);
            _multiListener(_removeListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
            _multiListener(_removeListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
            _resizeDelay.kill();
            _iterateAutoRefresh(_removeListener$1);
            for(var i = 0; i < _scrollers.length; i += 3){
                _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);
                _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
            }
        };
        ScrollTrigger.enable = function enable() {
            _win$1 = window;
            _doc$1 = document;
            _docEl$1 = _doc$1.documentElement;
            _body$1 = _doc$1.body;
            if (gsap$1) {
                _toArray = gsap$1.utils.toArray;
                _clamp$1 = gsap$1.utils.clamp;
                _context$1 = gsap$1.core.context || _passThrough;
                _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough;
                _scrollRestoration = _win$1.history.scrollRestoration || "auto";
                gsap$1.core.globals("ScrollTrigger", ScrollTrigger);
                if (_body$1) {
                    _enabled = 1;
                    Observer.register(gsap$1);
                    ScrollTrigger.isTouch = Observer.isTouch;
                    _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
                    _addListener$1(_win$1, "wheel", _onScroll$1);
                    _root$1 = [
                        _win$1,
                        _doc$1,
                        _docEl$1,
                        _body$1
                    ];
                    if (gsap$1.matchMedia) {
                        ScrollTrigger.matchMedia = function(vars) {
                            var mm = gsap$1.matchMedia(), p;
                            for(p in vars)mm.add(p, vars[p]);
                            return mm;
                        };
                        gsap$1.addEventListener("matchMediaInit", function() {
                            return _revertAll();
                        });
                        gsap$1.addEventListener("matchMediaRevert", function() {
                            return _revertRecorded();
                        });
                        gsap$1.addEventListener("matchMedia", function() {
                            _refreshAll(0, 1);
                            _dispatch("matchMedia");
                        });
                        gsap$1.matchMedia("(orientation: portrait)", function() {
                            _setBaseDimensions();
                            return _setBaseDimensions;
                        });
                    } else console.warn("Requires GSAP 3.11.0 or later");
                    _setBaseDimensions();
                    _addListener$1(_doc$1, "scroll", _onScroll$1);
                    var bodyStyle = _body$1.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap$1.core.Animation.prototype, bounds, i;
                    AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                        value: function value() {
                            return this.time(-0.01, true);
                        }
                    });
                    bodyStyle.borderTopStyle = "solid";
                    bounds = _getBounds(_body$1);
                    _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
                    _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
                    border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
                    _syncInterval = setInterval(_sync, 250);
                    gsap$1.delayedCall(0.5, function() {
                        return _startup$1 = 0;
                    });
                    _addListener$1(_doc$1, "touchcancel", _passThrough);
                    _addListener$1(_body$1, "touchstart", _passThrough);
                    _multiListener(_addListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                    _multiListener(_addListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
                    _transformProp = gsap$1.utils.checkPrefix("transform");
                    _stateProps.push(_transformProp);
                    _coreInitted$1 = _getTime$1();
                    _resizeDelay = gsap$1.delayedCall(0.2, _refreshAll).pause();
                    _autoRefresh = [
                        _doc$1,
                        "visibilitychange",
                        function() {
                            var w = _win$1.innerWidth, h = _win$1.innerHeight;
                            if (_doc$1.hidden) {
                                _prevWidth = w;
                                _prevHeight = h;
                            } else if (_prevWidth !== w || _prevHeight !== h) _onResize();
                        },
                        _doc$1,
                        "DOMContentLoaded",
                        _refreshAll,
                        _win$1,
                        "load",
                        _refreshAll,
                        _win$1,
                        "resize",
                        _onResize
                    ];
                    _iterateAutoRefresh(_addListener$1);
                    _triggers.forEach(function(trigger) {
                        return trigger.enable(0, 1);
                    });
                    for(i = 0; i < _scrollers.length; i += 3){
                        _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);
                        _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
                    }
                }
            }
        };
        ScrollTrigger.config = function config(vars) {
            "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
            var ms = vars.syncInterval;
            ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
            "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
            if ("autoRefreshEvents" in vars) {
                _iterateAutoRefresh(_removeListener$1) || _iterateAutoRefresh(_addListener$1, vars.autoRefreshEvents || "none");
                _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
            }
        };
        ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
            var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport$1(t);
            if (~i) _scrollers.splice(i, isViewport ? 6 : 2);
            if (vars) isViewport ? _proxies.unshift(_win$1, vars, _body$1, vars, _docEl$1, vars) : _proxies.unshift(t, vars);
        };
        ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
            _triggers.forEach(function(t) {
                return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
            });
        };
        ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
            var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
            return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win$1.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win$1.innerHeight;
        };
        ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
            _isString(element) && (element = _getTarget(element));
            var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
            return horizontal ? (bounds.left + offset) / _win$1.innerWidth : (bounds.top + offset) / _win$1.innerHeight;
        };
        ScrollTrigger.killAll = function killAll(allowListeners) {
            _triggers.slice(0).forEach(function(t) {
                return t.vars.id !== "ScrollSmoother" && t.kill();
            });
            if (allowListeners !== true) {
                var listeners = _listeners.killAll || [];
                _listeners = {};
                listeners.forEach(function(f) {
                    return f();
                });
            }
        };
        return ScrollTrigger;
    }();
    ScrollTrigger$1.version = "3.11.4";
    ScrollTrigger$1.saveStyles = function(targets) {
        return targets ? _toArray(targets).forEach(function(target) {
            if (target && target.style) {
                var i = _savedStyles.indexOf(target);
                i >= 0 && _savedStyles.splice(i, 5);
                _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$1.core.getCache(target), _context$1());
            }
        }) : _savedStyles;
    };
    ScrollTrigger$1.revert = function(soft, media) {
        return _revertAll(!soft, media);
    };
    ScrollTrigger$1.create = function(vars, animation) {
        return new ScrollTrigger$1(vars, animation);
    };
    ScrollTrigger$1.refresh = function(safe) {
        return safe ? _onResize() : (_coreInitted$1 || ScrollTrigger$1.register()) && _refreshAll(true);
    };
    ScrollTrigger$1.update = function(force) {
        return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
    };
    ScrollTrigger$1.clearScrollMemory = _clearScrollMemory;
    ScrollTrigger$1.maxScroll = function(element, horizontal) {
        return _maxScroll(element, horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger$1.getScrollFunc = function(element, horizontal) {
        return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger$1.getById = function(id) {
        return _ids[id];
    };
    ScrollTrigger$1.getAll = function() {
        return _triggers.filter(function(t) {
            return t.vars.id !== "ScrollSmoother";
        });
    };
    ScrollTrigger$1.isScrolling = function() {
        return !!_lastScrollTime;
    };
    ScrollTrigger$1.snapDirectional = _snapDirectional;
    ScrollTrigger$1.addEventListener = function(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    };
    ScrollTrigger$1.removeEventListener = function(type, callback) {
        var a = _listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    };
    ScrollTrigger$1.batch = function(targets, vars) {
        var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
            var elements = [], triggers = [], delay = gsap$1.delayedCall(interval, function() {
                callback(elements, triggers);
                elements = [];
                triggers = [];
            }).pause();
            return function(self) {
                elements.length || delay.restart(true);
                elements.push(self.trigger);
                triggers.push(self);
                batchMax <= elements.length && delay.progress(1);
            };
        }, p;
        for(p in vars)varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
        if (_isFunction(batchMax)) {
            batchMax = batchMax();
            _addListener$1(ScrollTrigger$1, "refresh", function() {
                return batchMax = vars.batchMax();
            });
        }
        _toArray(targets).forEach(function(target) {
            var config = {};
            for(p in varsCopy)config[p] = varsCopy[p];
            config.trigger = target;
            result.push(ScrollTrigger$1.create(config));
        });
        return result;
    };
    var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
        current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
        return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
    }, _allowNativePanning = function _allowNativePanning(target, direction) {
        if (direction === true) target.style.removeProperty("touch-action");
        else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
        target === _docEl$1 && _allowNativePanning(_body$1, direction);
    }, _overflow = {
        auto: 1,
        scroll: 1
    }, _nestedScroll = function _nestedScroll(_ref5) {
        var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
        var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap$1.core.getCache(node), time = _getTime$1(), cs;
        if (!cache._isScrollT || time - cache._isScrollT > 2000) {
            while(node && node !== _body$1 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX])))node = node.parentNode;
            cache._isScroll = node && node !== target && !_isViewport$1(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
            cache._isScrollT = time;
        }
        if (cache._isScroll || axis === "x") {
            event.stopPropagation();
            event._gsapAllow = true;
        }
    }, _inputObserver = function _inputObserver(target, type, inputs, nested) {
        return Observer.create({
            target: target,
            capture: true,
            debounce: false,
            lockAxis: true,
            type: type,
            onWheel: nested = nested && _nestedScroll,
            onPress: nested,
            onDrag: nested,
            onScroll: nested,
            onEnable: function onEnable() {
                return inputs && _addListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, false, true);
            },
            onDisable: function onDisable() {
                return _removeListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, true);
            }
        });
    }, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs(e) {
        var isInput = _inputExp.test(e.target.tagName);
        if (isInput || _inputIsFocused) {
            e._gsapAllow = true;
            _inputIsFocused = isInput;
        }
    }, _getScrollNormalizer = function _getScrollNormalizer(vars) {
        _isObject(vars) || (vars = {});
        vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
        vars.type || (vars.type = "wheel,touch");
        vars.debounce = !!vars.debounce;
        vars.id = vars.id || "normalizer";
        var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self, maxY, target = _getTarget(vars.target) || _docEl$1, smoother = gsap$1.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win$1.visualViewport ? _win$1.visualViewport.scale * _win$1.visualViewport.width : _win$1.outerWidth) / _win$1.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
            return momentum(self);
        } : function() {
            return momentum || 2.8;
        }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
            return skipTouchMove = false;
        }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps() {
            maxY = _maxScroll(target, _vertical);
            scrollClampY = _clamp$1(_fixIOSBug ? 1 : 0, maxY);
            normalizeScrollX && (scrollClampX = _clamp$1(0, _maxScroll(target, _horizontal)));
            lastRefreshID = _refreshID;
        }, removeContentOffset = function removeContentOffset() {
            content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
            scrollFuncY.offset = scrollFuncY.cacheID = 0;
        }, ignoreDrag = function ignoreDrag() {
            if (skipTouchMove) {
                requestAnimationFrame(resumeTouchMove);
                var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
                if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                    scrollFuncY.offset = scroll - scrollFuncY.v;
                    var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                    content._gsap.y = y + "px";
                    scrollFuncY.cacheID = _scrollers.cache;
                    _updateAll();
                }
                return true;
            }
            scrollFuncY.offset && removeContentOffset();
            skipTouchMove = true;
        }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
            updateClamps();
            if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
        };
        content && gsap$1.set(content, {
            y: "+=0"
        });
        vars.ignoreCheck = function(e) {
            return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
        };
        vars.onPress = function() {
            var prevScale = scale;
            scale = _round((_win$1.visualViewport && _win$1.visualViewport.scale || 1) / initialScale);
            tween.pause();
            prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
            startScrollX = scrollFuncX();
            startScrollY = scrollFuncY();
            updateClamps();
            lastRefreshID = _refreshID;
        };
        vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
            scrollFuncY.offset && removeContentOffset();
            if (!wasDragging) onStopDelayedCall.restart(true);
            else {
                _scrollers.cache++;
                var dur = resolveMomentumDuration(), currentScroll, endScroll;
                if (normalizeScrollX) {
                    currentScroll = scrollFuncX();
                    endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227;
                    dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
                    tween.vars.scrollX = scrollClampX(endScroll);
                }
                currentScroll = scrollFuncY();
                endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227;
                dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
                tween.vars.scrollY = scrollClampY(endScroll);
                tween.invalidate().duration(dur).play(0.01);
                if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) gsap$1.to({}, {
                    onUpdate: onResize,
                    duration: dur
                });
            }
        };
        vars.onWheel = function() {
            tween._ts && tween.pause();
            if (_getTime$1() - wheelRefresh > 1000) {
                lastRefreshID = 0;
                wheelRefresh = _getTime$1();
            }
        };
        vars.onChange = function(self, dx, dy, xArray, yArray) {
            _refreshID !== lastRefreshID && updateClamps();
            dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1]));
            if (dy) {
                scrollFuncY.offset && removeContentOffset();
                var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
                isTouch && y !== yClamped && (startScrollY += yClamped - y);
                scrollFuncY(yClamped);
            }
            (dy || dx) && _updateAll();
        };
        vars.onEnable = function() {
            _allowNativePanning(target, normalizeScrollX ? false : "x");
            ScrollTrigger$1.addEventListener("refresh", onResize);
            _addListener$1(_win$1, "resize", onResize);
            if (scrollFuncY.smooth) {
                scrollFuncY.target.style.scrollBehavior = "auto";
                scrollFuncY.smooth = scrollFuncX.smooth = false;
            }
            inputObserver.enable();
        };
        vars.onDisable = function() {
            _allowNativePanning(target, true);
            _removeListener$1(_win$1, "resize", onResize);
            ScrollTrigger$1.removeEventListener("refresh", onResize);
            inputObserver.kill();
        };
        vars.lockAxis = vars.lockAxis !== false;
        self = new Observer(vars);
        self.iOS = _fixIOSBug;
        _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
        _fixIOSBug && gsap$1.ticker.add(_passThrough);
        onStopDelayedCall = self._dc;
        tween = gsap$1.to(self, {
            ease: "power4",
            paused: true,
            scrollX: normalizeScrollX ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: onStopDelayedCall.vars.onComplete
        });
        return self;
    };
    ScrollTrigger$1.sort = function(func) {
        return _triggers.sort(func || function(a, b) {
            return (a.vars.refreshPriority || 0) * -1000000 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1000000);
        });
    };
    ScrollTrigger$1.observe = function(vars) {
        return new Observer(vars);
    };
    ScrollTrigger$1.normalizeScroll = function(vars) {
        if (typeof vars === "undefined") return _normalizer$1;
        if (vars === true && _normalizer$1) return _normalizer$1.enable();
        if (vars === false) return _normalizer$1 && _normalizer$1.kill();
        var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
        _normalizer$1 && _normalizer$1.target === normalizer.target && _normalizer$1.kill();
        _isViewport$1(normalizer.target) && (_normalizer$1 = normalizer);
        return normalizer;
    };
    ScrollTrigger$1.core = {
        _getVelocityProp: _getVelocityProp,
        _inputObserver: _inputObserver,
        _scrollers: _scrollers,
        _proxies: _proxies,
        bridge: {
            ss: function ss() {
                _lastScrollTime || _dispatch("scrollStart");
                _lastScrollTime = _getTime$1();
            },
            ref: function ref() {
                return _refreshing;
            }
        }
    };
    _getGSAP$1() && gsap$1.registerPlugin(ScrollTrigger$1);
    exports1.ScrollTrigger = ScrollTrigger$1;
    exports1.default = ScrollTrigger$1;
    if (typeof window === "undefined" || window !== exports1) Object.defineProperty(exports1, "__esModule", {
        value: true
    });
    else delete window.default;
});

});

parcelRequire.register("7PrnQ", function(module, exports) {

$parcel$export(module.exports, "initSmoothScrollbar", function () { return $5b3289a793e15167$export$5c67ce8f97fe3303; });

var $lr4JC = parcelRequire("lr4JC");

var $kcA29 = parcelRequire("kcA29");

var $QqU65 = parcelRequire("QqU65");

var $14BZW = parcelRequire("14BZW");
function $5b3289a793e15167$export$5c67ce8f97fe3303(topContainerRef, disabledFirst = true) {
    if (!document || !topContainerRef) return;
    (0, $lr4JC.default).use((0, $QqU65.ScrollbarModalPlugin));
    (0, $lr4JC.default).use((0, $14BZW.ScrollbarScreenStopPlugin));
    const bodyScrollBar = (0, $lr4JC.default).init(topContainerRef, {
        damping: 0.03,
        // delegateTo: document,
        alwaysShowTracks: true,
        continuousScrolling: false,
        renderByPixels: true,
        plugins: {
            modal: {
                open: disabledFirst
            }
        }
    });
    (0, $kcA29.ScrollTrigger).scrollerProxy(topContainerRef, {
        scrollTop (value) {
            if (arguments.length) bodyScrollBar.scrollTop = value;
            return bodyScrollBar.scrollTop;
        }
    });
    bodyScrollBar.addListener((0, $kcA29.ScrollTrigger).update);
    (0, $kcA29.ScrollTrigger).defaults({
        scroller: topContainerRef
    });
    return bodyScrollBar;
}

});
parcelRequire.register("lr4JC", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $f9afcad2abdd15df$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "ScrollbarPlugin", function () { return (parcelRequire("cQUk8")).ScrollbarPlugin; });

var $16swy = parcelRequire("16swy");
parcelRequire("bJS68");

var $ew8Ba = parcelRequire("ew8Ba");

var $cQUk8 = parcelRequire("cQUk8");

var $qWms0 = parcelRequire("qWms0");
/**
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */ var $f9afcad2abdd15df$var$SmoothScrollbar = /** @class */ function(_super) {
    (0, $16swy.__extends)(SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */ SmoothScrollbar.init = function(elem, options) {
        if (!elem || elem.nodeType !== 1) throw new TypeError("expect element to be DOM Element, but got " + elem);
        // attach stylesheet
        (0, $qWms0.attachStyle)();
        if ((0, $ew8Ba.scrollbarMap).has(elem)) return (0, $ew8Ba.scrollbarMap).get(elem);
        return new (0, $ew8Ba.Scrollbar)(elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */ SmoothScrollbar.initAll = function(options) {
        return Array.from(document.querySelectorAll("[data-scrollbar]"), function(elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */ SmoothScrollbar.has = function(elem) {
        return (0, $ew8Ba.scrollbarMap).has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */ SmoothScrollbar.get = function(elem) {
        return (0, $ew8Ba.scrollbarMap).get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */ SmoothScrollbar.getAll = function() {
        return Array.from((0, $ew8Ba.scrollbarMap).values());
    };
    /**
     * Removes scrollbar on the given element
     */ SmoothScrollbar.destroy = function(elem) {
        var scrollbar = (0, $ew8Ba.scrollbarMap).get(elem);
        if (scrollbar) scrollbar.destroy();
    };
    /**
     * Removes all scrollbar instances from current document
     */ SmoothScrollbar.destroyAll = function() {
        (0, $ew8Ba.scrollbarMap).forEach(function(scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */ SmoothScrollbar.use = function() {
        var Plugins = [];
        for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
        return (0, $cQUk8.addPlugins).apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */ SmoothScrollbar.attachStyle = function() {
        return (0, $qWms0.attachStyle)();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */ SmoothScrollbar.detachStyle = function() {
        return (0, $qWms0.detachStyle)();
    };
    SmoothScrollbar.version = "8.8.1";
    SmoothScrollbar.ScrollbarPlugin = (0, $cQUk8.ScrollbarPlugin);
    return SmoothScrollbar;
}((0, $ew8Ba.Scrollbar));
var $f9afcad2abdd15df$export$2e2bcd8739ae039 = $f9afcad2abdd15df$var$SmoothScrollbar;

});
parcelRequire.register("16swy", function(module, exports) {

$parcel$export(module.exports, "__extends", function () { return $0cdc7a410c441fd3$export$a8ba968b8961cb8a; });
$parcel$export(module.exports, "__assign", function () { return $0cdc7a410c441fd3$export$18ce0697a983be9b; });
$parcel$export(module.exports, "__decorate", function () { return $0cdc7a410c441fd3$export$29e00dfd3077644b; });
$parcel$export(module.exports, "__spreadArrays", function () { return $0cdc7a410c441fd3$export$6388937ca91ccae8; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var $0cdc7a410c441fd3$var$extendStatics = function(d, b) {
    $0cdc7a410c441fd3$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return $0cdc7a410c441fd3$var$extendStatics(d, b);
};
function $0cdc7a410c441fd3$export$a8ba968b8961cb8a(d, b) {
    $0cdc7a410c441fd3$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $0cdc7a410c441fd3$export$18ce0697a983be9b = function() {
    $0cdc7a410c441fd3$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $0cdc7a410c441fd3$export$18ce0697a983be9b.apply(this, arguments);
};
function $0cdc7a410c441fd3$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $0cdc7a410c441fd3$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $0cdc7a410c441fd3$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $0cdc7a410c441fd3$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $0cdc7a410c441fd3$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $0cdc7a410c441fd3$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function $0cdc7a410c441fd3$export$45d3717a4c69092e(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function $0cdc7a410c441fd3$export$f33643c0debef087(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function $0cdc7a410c441fd3$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $0cdc7a410c441fd3$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $0cdc7a410c441fd3$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($0cdc7a410c441fd3$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $0cdc7a410c441fd3$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $0cdc7a410c441fd3$export$10c90e4f7922046c(v) {
    return this instanceof $0cdc7a410c441fd3$export$10c90e4f7922046c ? (this.v = v, this) : new $0cdc7a410c441fd3$export$10c90e4f7922046c(v);
}
function $0cdc7a410c441fd3$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $0cdc7a410c441fd3$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $0cdc7a410c441fd3$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $0cdc7a410c441fd3$export$10c90e4f7922046c(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function $0cdc7a410c441fd3$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $0cdc7a410c441fd3$export$19a8beecd37a4c45 === "function" ? $0cdc7a410c441fd3$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $0cdc7a410c441fd3$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function $0cdc7a410c441fd3$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function $0cdc7a410c441fd3$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $0cdc7a410c441fd3$export$d5dcaf168c640c35(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function $0cdc7a410c441fd3$export$d40a35129aaff81f(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

});

parcelRequire.register("bJS68", function(module, exports) {

});

parcelRequire.register("ew8Ba", function(module, exports) {

$parcel$export(module.exports, "scrollbarMap", function () { return $a91ab94f87ca906a$export$18a24ca5e48929da; });
$parcel$export(module.exports, "Scrollbar", function () { return $a91ab94f87ca906a$export$9a4e88b92edfce6b; });

var $16swy = parcelRequire("16swy");

var $6CaDf = parcelRequire("6CaDf");

var $bovpd = parcelRequire("bovpd");
parcelRequire("jyjmF");
var $3rXT1 = parcelRequire("3rXT1");
var $fc7gb = parcelRequire("fc7gb");
parcelRequire("fPyYd");
var $fKkxn = parcelRequire("fKkxn");

var $dUh0t = parcelRequire("dUh0t");
parcelRequire("892Zu");
var $dXJBg = parcelRequire("dXJBg");
var $lCEAw = parcelRequire("lCEAw");
var $1PAWD = parcelRequire("1PAWD");
parcelRequire("4yZzI");
var $90GwU = parcelRequire("90GwU");
var $fTU24 = parcelRequire("fTU24");
var $lJBG3 = parcelRequire("lJBG3");

var $cQUk8 = parcelRequire("cQUk8");

var $lTfpG = parcelRequire("lTfpG");
var $a91ab94f87ca906a$export$18a24ca5e48929da = new Map();
var $a91ab94f87ca906a$export$9a4e88b92edfce6b = /** @class */ function() {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */ this.offset = {
            x: 0,
            y: 0
        };
        /**
         * Max-allowed scrolling offsets
         */ this.limit = {
            x: Infinity,
            y: Infinity
        };
        /**
         * Container bounding rect
         */ this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        // private _observer: ResizeObserver;
        this._plugins = [];
        this._momentum = {
            x: 0,
            y: 0
        };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement("div");
        this.options = new (0, $bovpd.Options)(options);
        // mark as a scroll element
        containerEl.setAttribute("data-scrollbar", "true");
        // make container focusable
        containerEl.setAttribute("tabindex", "-1");
        (0, $3rXT1.setStyle)(containerEl, {
            overflow: "hidden",
            outline: "none"
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) containerEl.style.msTouchAction = "none";
        // mount content
        contentEl.className = "scroll-content";
        Array.from(containerEl.childNodes).forEach(function(node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new (0, $dUh0t.TrackController)(this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = (0, $cQUk8.initPlugins)(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true
        });
        // FIXME: update typescript
        var ResizeObserver = window.ResizeObserver;
        // observe
        if (typeof ResizeObserver === "function") {
            this._observer = new ResizeObserver(function() {
                _this.update();
            });
            this._observer.observe(contentEl);
        }
        $a91ab94f87ca906a$export$18a24ca5e48929da.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function() {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */ get: function() {
            var elem = this.containerEl.parentElement;
            while(elem){
                var parentScrollbar = $a91ab94f87ca906a$export$18a24ca5e48929da.get(elem);
                if (parentScrollbar) return parentScrollbar;
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */ get: function() {
            return this.offset.y;
        },
        set: function(y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */ get: function() {
            return this.offset.x;
        },
        set: function(x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */ Scrollbar.prototype.getSize = function() {
        return (0, $dXJBg.getSize)(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */ Scrollbar.prototype.update = function() {
        (0, $lCEAw.update)(this);
        this._plugins.forEach(function(plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */ Scrollbar.prototype.isVisible = function(elem) {
        return (0, $1PAWD.isVisible)(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */ Scrollbar.prototype.setPosition = function(x, y, options) {
        var _this = this;
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (options === void 0) options = {};
        var status = (0, $90GwU.setPosition)(this, x, y);
        if (!status || options.withoutCallbacks) return;
        this._listeners.forEach(function(fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */ Scrollbar.prototype.scrollTo = function(x, y, duration, options) {
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (duration === void 0) duration = 0;
        if (options === void 0) options = {};
        (0, $fTU24.scrollTo)(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */ Scrollbar.prototype.scrollIntoView = function(elem, options) {
        if (options === void 0) options = {};
        (0, $lJBG3.scrollIntoView)(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */ Scrollbar.prototype.addListener = function(fn) {
        if (typeof fn !== "function") throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */ Scrollbar.prototype.removeListener = function(fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */ Scrollbar.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function(delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, {
            x: x,
            y: y
        });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) this.addMomentum(finalDelta.x, finalDelta.y);
        if (callback) callback.call(this, willScroll);
    };
    /**
     * Increases scrollbar's momentum
     */ Scrollbar.prototype.addMomentum = function(x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */ Scrollbar.prototype.setMomentum = function(x, y) {
        if (this.limit.x === 0) x = 0;
        if (this.limit.y === 0) y = 0;
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */ Scrollbar.prototype.updatePluginOptions = function(pluginName, options) {
        this._plugins.forEach(function(plugin) {
            if (plugin.name === pluginName) Object.assign(plugin.options, options);
        });
    };
    Scrollbar.prototype.destroy = function() {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        (0, $fc7gb.clearEventsOn)(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) this._observer.disconnect();
        $a91ab94f87ca906a$export$18a24ca5e48929da.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while(containerEl.firstChild)containerEl.removeChild(containerEl.firstChild);
        childNodes.forEach(function(el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        (0, $3rXT1.setStyle)(containerEl, {
            overflow: ""
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestroy
        this._plugins.forEach(function(plugin) {
            plugin.onDestroy();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function() {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys($lTfpG).forEach(function(prop) {
            $lTfpG[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function(plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function() {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
        if (deltaX === void 0) deltaX = 0;
        if (deltaY === void 0) deltaY = 0;
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling) return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) this._updateDebounced();
        var destX = (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(deltaX + offset.x, 0, limit.x);
        var destY = (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && destX === offset.x;
        res = res && destY === offset.y;
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function() {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick("x");
            var nextY = this._nextTick("y");
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = (0, $16swy.__assign)({}, this._momentum);
        this._plugins.forEach(function(plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function(direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) return {
            momentum: 0,
            position: current + remain
        };
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) nextMomentum |= 0;
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum
        };
    };
    (0, $16swy.__decorate)([
        (0, $fKkxn.debounce)(100, {
            leading: true
        })
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}();

});
parcelRequire.register("6CaDf", function(module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var $4d0e89fb55973bb6$var$NAN = 0 / 0;
/** `Object#toString` result references. */ var $4d0e89fb55973bb6$var$symbolTag = "[object Symbol]";
/** Used to match leading and trailing whitespace. */ var $4d0e89fb55973bb6$var$reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var $4d0e89fb55973bb6$var$reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var $4d0e89fb55973bb6$var$reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var $4d0e89fb55973bb6$var$reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var $4d0e89fb55973bb6$var$freeParseInt = parseInt;
/** Used for built-in method references. */ var $4d0e89fb55973bb6$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $4d0e89fb55973bb6$var$objectToString = $4d0e89fb55973bb6$var$objectProto.toString;
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */ function $4d0e89fb55973bb6$var$baseClamp(number, lower, upper) {
    if (number === number) {
        if (upper !== undefined) number = number <= upper ? number : upper;
        if (lower !== undefined) number = number >= lower ? number : lower;
    }
    return number;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function $4d0e89fb55973bb6$var$isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function $4d0e89fb55973bb6$var$isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function $4d0e89fb55973bb6$var$isSymbol(value) {
    return typeof value == "symbol" || $4d0e89fb55973bb6$var$isObjectLike(value) && $4d0e89fb55973bb6$var$objectToString.call(value) == $4d0e89fb55973bb6$var$symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function $4d0e89fb55973bb6$var$toNumber(value) {
    if (typeof value == "number") return value;
    if ($4d0e89fb55973bb6$var$isSymbol(value)) return $4d0e89fb55973bb6$var$NAN;
    if ($4d0e89fb55973bb6$var$isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = $4d0e89fb55973bb6$var$isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = value.replace($4d0e89fb55973bb6$var$reTrim, "");
    var isBinary = $4d0e89fb55973bb6$var$reIsBinary.test(value);
    return isBinary || $4d0e89fb55973bb6$var$reIsOctal.test(value) ? $4d0e89fb55973bb6$var$freeParseInt(value.slice(2), isBinary ? 2 : 8) : $4d0e89fb55973bb6$var$reIsBadHex.test(value) ? $4d0e89fb55973bb6$var$NAN : +value;
}
/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */ function $4d0e89fb55973bb6$var$clamp(number, lower, upper) {
    if (upper === undefined) {
        upper = lower;
        lower = undefined;
    }
    if (upper !== undefined) {
        upper = $4d0e89fb55973bb6$var$toNumber(upper);
        upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
        lower = $4d0e89fb55973bb6$var$toNumber(lower);
        lower = lower === lower ? lower : 0;
    }
    return $4d0e89fb55973bb6$var$baseClamp($4d0e89fb55973bb6$var$toNumber(number), lower, upper);
}
module.exports = $4d0e89fb55973bb6$var$clamp;

});

parcelRequire.register("bovpd", function(module, exports) {

$parcel$export(module.exports, "Options", function () { return $84ba4c19c424d65e$export$c019608e5b5bb4cb; });

var $16swy = parcelRequire("16swy");
parcelRequire("fPyYd");
var $6c3bp = parcelRequire("6c3bp");
var $1x8Lx = parcelRequire("1x8Lx");
var $84ba4c19c424d65e$export$c019608e5b5bb4cb = /** @class */ function() {
    function Options(config) {
        var _this = this;
        if (config === void 0) config = {};
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */ this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */ this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */ this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */ this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */ this.continuousScrolling = true;
        /**
         * Delegate wheel events and touch events to the given element.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */ this.delegateTo = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */ this.plugins = {};
        Object.keys(config).forEach(function(prop) {
            _this[prop] = config[prop];
        });
    }
    Object.defineProperty(Options.prototype, "wheelEventTarget", {
        get: function() {
            return this.delegateTo;
        },
        set: function(el) {
            console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
            this.delegateTo = el;
        },
        enumerable: true,
        configurable: true
    });
    (0, $16swy.__decorate)([
        (0, $6c3bp.range)(0, 1)
    ], Options.prototype, "damping", void 0);
    (0, $16swy.__decorate)([
        (0, $6c3bp.range)(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    (0, $16swy.__decorate)([
        (0, $1x8Lx.boolean)
    ], Options.prototype, "renderByPixels", void 0);
    (0, $16swy.__decorate)([
        (0, $1x8Lx.boolean)
    ], Options.prototype, "alwaysShowTracks", void 0);
    (0, $16swy.__decorate)([
        (0, $1x8Lx.boolean)
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}();

});
parcelRequire.register("fPyYd", function(module, exports) {
$parcel$export(module.exports, "range", function () { return (parcelRequire("6c3bp")).range; });
$parcel$export(module.exports, "boolean", function () { return (parcelRequire("1x8Lx")).boolean; });
$parcel$export(module.exports, "debounce", function () { return (parcelRequire("fKkxn")).debounce; });
parcelRequire("6c3bp");
parcelRequire("1x8Lx");
parcelRequire("fKkxn");

});
parcelRequire.register("6c3bp", function(module, exports) {

$parcel$export(module.exports, "range", function () { return $48265526a7965198$export$d02631cccf789723; });

var $6CaDf = parcelRequire("6CaDf");
function $48265526a7965198$export$d02631cccf789723(min, max) {
    if (min === void 0) min = -Infinity;
    if (max === void 0) max = Infinity;
    return function(proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function() {
                return this[alias];
            },
            set: function(val) {
                Object.defineProperty(this, alias, {
                    value: (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true
                });
            },
            enumerable: true,
            configurable: true
        });
    };
}

});

parcelRequire.register("1x8Lx", function(module, exports) {

$parcel$export(module.exports, "boolean", function () { return $11dfac3226f39f6e$export$4a21f16c33752377; });
function $11dfac3226f39f6e$export$4a21f16c33752377(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function() {
            return this[alias];
        },
        set: function(val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true
            });
        },
        enumerable: true,
        configurable: true
    });
}

});

parcelRequire.register("fKkxn", function(module, exports) {

$parcel$export(module.exports, "debounce", function () { return $b76b152c1baf85a0$export$61fc7d43ac8f84b0; });

var $16swy = parcelRequire("16swy");

var $3v6tI = parcelRequire("3v6tI");
function $b76b152c1baf85a0$export$61fc7d43ac8f84b0() {
    var options = [];
    for(var _i = 0; _i < arguments.length; _i++)options[_i] = arguments[_i];
    return function(_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function() {
                if (!this.hasOwnProperty(key)) Object.defineProperty(this, key, {
                    value: (0, (/*@__PURE__*/$parcel$interopDefault($3v6tI))).apply(void 0, (0, $16swy.__spreadArrays)([
                        fn
                    ], options))
                });
                return this[key];
            }
        };
    };
}

});
parcelRequire.register("3v6tI", function(module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var $28c94acb5a81c347$var$FUNC_ERROR_TEXT = "Expected a function";
/** Used as references for various `Number` constants. */ var $28c94acb5a81c347$var$NAN = 0 / 0;
/** `Object#toString` result references. */ var $28c94acb5a81c347$var$symbolTag = "[object Symbol]";
/** Used to match leading and trailing whitespace. */ var $28c94acb5a81c347$var$reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var $28c94acb5a81c347$var$reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var $28c94acb5a81c347$var$reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var $28c94acb5a81c347$var$reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var $28c94acb5a81c347$var$freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var $28c94acb5a81c347$var$freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
/** Detect free variable `self`. */ var $28c94acb5a81c347$var$freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $28c94acb5a81c347$var$root = $28c94acb5a81c347$var$freeGlobal || $28c94acb5a81c347$var$freeSelf || Function("return this")();
/** Used for built-in method references. */ var $28c94acb5a81c347$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $28c94acb5a81c347$var$objectToString = $28c94acb5a81c347$var$objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var $28c94acb5a81c347$var$nativeMax = Math.max, $28c94acb5a81c347$var$nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var $28c94acb5a81c347$var$now = function() {
    return $28c94acb5a81c347$var$root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function $28c94acb5a81c347$var$debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError($28c94acb5a81c347$var$FUNC_ERROR_TEXT);
    wait = $28c94acb5a81c347$var$toNumber(wait) || 0;
    if ($28c94acb5a81c347$var$isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? $28c94acb5a81c347$var$nativeMax($28c94acb5a81c347$var$toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? $28c94acb5a81c347$var$nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = $28c94acb5a81c347$var$now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge($28c94acb5a81c347$var$now());
    }
    function debounced() {
        var time = $28c94acb5a81c347$var$now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function $28c94acb5a81c347$var$isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function $28c94acb5a81c347$var$isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function $28c94acb5a81c347$var$isSymbol(value) {
    return typeof value == "symbol" || $28c94acb5a81c347$var$isObjectLike(value) && $28c94acb5a81c347$var$objectToString.call(value) == $28c94acb5a81c347$var$symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function $28c94acb5a81c347$var$toNumber(value) {
    if (typeof value == "number") return value;
    if ($28c94acb5a81c347$var$isSymbol(value)) return $28c94acb5a81c347$var$NAN;
    if ($28c94acb5a81c347$var$isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = $28c94acb5a81c347$var$isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = value.replace($28c94acb5a81c347$var$reTrim, "");
    var isBinary = $28c94acb5a81c347$var$reIsBinary.test(value);
    return isBinary || $28c94acb5a81c347$var$reIsOctal.test(value) ? $28c94acb5a81c347$var$freeParseInt(value.slice(2), isBinary ? 2 : 8) : $28c94acb5a81c347$var$reIsBadHex.test(value) ? $28c94acb5a81c347$var$NAN : +value;
}
module.exports = $28c94acb5a81c347$var$debounce;

});




parcelRequire.register("jyjmF", function(module, exports) {
$parcel$export(module.exports, "clearEventsOn", function () { return (parcelRequire("fc7gb")).clearEventsOn; });
$parcel$export(module.exports, "eventScope", function () { return (parcelRequire("fc7gb")).eventScope; });
$parcel$export(module.exports, "getPosition", function () { return (parcelRequire("lDEed")).getPosition; });
$parcel$export(module.exports, "isOneOf", function () { return (parcelRequire("cA0ug")).isOneOf; });
$parcel$export(module.exports, "setStyle", function () { return (parcelRequire("3rXT1")).setStyle; });
$parcel$export(module.exports, "TouchRecord", function () { return (parcelRequire("kEx6l")).TouchRecord; });
parcelRequire("fc7gb");
parcelRequire("dKWSj");
parcelRequire("lDEed");
parcelRequire("cA0ug");
parcelRequire("3rXT1");
parcelRequire("kEx6l");

});
parcelRequire.register("fc7gb", function(module, exports) {

$parcel$export(module.exports, "eventScope", function () { return $b0fd9bb1ed838825$export$cfedec40817575fe; });
$parcel$export(module.exports, "clearEventsOn", function () { return $b0fd9bb1ed838825$export$2bf7a27f443e4893; });
var $b0fd9bb1ed838825$var$eventListenerOptions;
var $b0fd9bb1ed838825$var$eventMap = new WeakMap();
function $b0fd9bb1ed838825$var$getOptions() {
    if ($b0fd9bb1ed838825$var$eventListenerOptions !== undefined) return $b0fd9bb1ed838825$var$eventListenerOptions;
    var supportPassiveEvent = false;
    try {
        var noop = function() {};
        var options = Object.defineProperty({}, "passive", {
            get: function() {
                supportPassiveEvent = true;
            }
        });
        window.addEventListener("testPassive", noop, options);
        window.removeEventListener("testPassive", noop, options);
    } catch (e) {}
    $b0fd9bb1ed838825$var$eventListenerOptions = supportPassiveEvent ? {
        passive: false
    } : false;
    return $b0fd9bb1ed838825$var$eventListenerOptions;
}
function $b0fd9bb1ed838825$export$cfedec40817575fe(scrollbar) {
    var configs = $b0fd9bb1ed838825$var$eventMap.get(scrollbar) || [];
    $b0fd9bb1ed838825$var$eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) return;
            fn(event);
        }
        events.split(/\s+/g).forEach(function(eventName) {
            configs.push({
                elem: elem,
                eventName: eventName,
                handler: handler
            });
            elem.addEventListener(eventName, handler, $b0fd9bb1ed838825$var$getOptions());
        });
    };
}
function $b0fd9bb1ed838825$export$2bf7a27f443e4893(scrollbar) {
    var configs = $b0fd9bb1ed838825$var$eventMap.get(scrollbar);
    if (!configs) return;
    configs.forEach(function(_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler, $b0fd9bb1ed838825$var$getOptions());
    });
    $b0fd9bb1ed838825$var$eventMap.delete(scrollbar);
}

});

parcelRequire.register("dKWSj", function(module, exports) {

$parcel$export(module.exports, "getPointerData", function () { return $a03d3d92c107c960$export$f7b14ec3e1349d05; });
/**
 * Get pointer/touch data
 */ function $a03d3d92c107c960$export$f7b14ec3e1349d05(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}

});

parcelRequire.register("lDEed", function(module, exports) {

$parcel$export(module.exports, "getPosition", function () { return $fc0c71f8fca7e1a7$export$1690e12b840569b9; });

var $dKWSj = parcelRequire("dKWSj");
function $fc0c71f8fca7e1a7$export$1690e12b840569b9(evt) {
    var data = (0, $dKWSj.getPointerData)(evt);
    return {
        x: data.clientX,
        y: data.clientY
    };
}

});

parcelRequire.register("cA0ug", function(module, exports) {

$parcel$export(module.exports, "isOneOf", function () { return $92893989a93ab5ba$export$532a90c0e5e8e48c; });
/**
 * Check if `a` is one of `[...b]`
 */ function $92893989a93ab5ba$export$532a90c0e5e8e48c(a, b) {
    if (b === void 0) b = [];
    return b.some(function(v) {
        return a === v;
    });
}

});

parcelRequire.register("3rXT1", function(module, exports) {

$parcel$export(module.exports, "setStyle", function () { return $283258eaa8a76967$export$37a5fde709c1db82; });
var $283258eaa8a76967$var$VENDOR_PREFIX = [
    "webkit",
    "moz",
    "ms",
    "o"
];
var $283258eaa8a76967$var$RE = new RegExp("^-(?!(?:" + $283258eaa8a76967$var$VENDOR_PREFIX.join("|") + ")-)");
function $283258eaa8a76967$var$autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function(prop) {
        if (!$283258eaa8a76967$var$RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, "");
        res[prop] = val;
        $283258eaa8a76967$var$VENDOR_PREFIX.forEach(function(prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function $283258eaa8a76967$export$37a5fde709c1db82(elem, styles) {
    styles = $283258eaa8a76967$var$autoPrefix(styles);
    Object.keys(styles).forEach(function(prop) {
        var cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, function(_, $1) {
            return $1.toUpperCase();
        });
        elem.style[cssProp] = styles[prop];
    });
}

});

parcelRequire.register("kEx6l", function(module, exports) {

$parcel$export(module.exports, "TouchRecord", function () { return $f091385339e43a47$export$9da4f16074124683; });

var $16swy = parcelRequire("16swy");

var $lDEed = parcelRequire("lDEed");
var $f091385339e43a47$export$254d9747e34ddc90 = /** @class */ function() {
    function Tracker(touch) {
        this.velocityMultiplier = window.devicePixelRatio;
        this.updateTime = Date.now();
        this.delta = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.lastPosition = (0, $lDEed.getPosition)(touch);
    }
    Tracker.prototype.update = function(touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = (0, $lDEed.getPosition)(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y)
        };
        var duration = now - updateTime || 16.7;
        var vx = delta.x / duration * 16.7;
        var vy = delta.y / duration * 16.7;
        velocity.x = vx * this.velocityMultiplier;
        velocity.y = vy * this.velocityMultiplier;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}();
var $f091385339e43a47$export$9da4f16074124683 = /** @class */ function() {
    function TouchRecord() {
        this._touchList = {};
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function() {
            return {
                x: 0,
                y: 0
            };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function() {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return (0, $16swy.__assign)({}, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return (0, $16swy.__assign)({}, tracker.velocity);
    };
    TouchRecord.prototype.getEasingDistance = function(damping) {
        var deAcceleration = 1 - damping;
        var distance = {
            x: 0,
            y: 0
        };
        var vel = this.getVelocity();
        Object.keys(vel).forEach(function(dir) {
            // ignore small velocity
            var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
            while(v !== 0){
                distance[dir] += v;
                v = v * deAcceleration | 0;
            }
        });
        return distance;
    };
    TouchRecord.prototype.track = function(evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function(touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function(evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function(touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function(evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function(touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function(touch) {
        if (this._has(touch)) // reset tracker
        this._delete(touch);
        var tracker = new $f091385339e43a47$export$254d9747e34ddc90(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function(touch) {
        if (!this._has(touch)) return;
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function(touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function(touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function(touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord.prototype._getActiveTracker = function() {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}();

});


parcelRequire.register("dUh0t", function(module, exports) {

$parcel$export(module.exports, "TrackController", function () { return $a1fdb277f51e968c$export$40a0242a5dec07f5; });

var $16swy = parcelRequire("16swy");

var $2snAs = parcelRequire("2snAs");

var $bfWBC = parcelRequire("bfWBC");
parcelRequire("fPyYd");
var $fKkxn = parcelRequire("fKkxn");
var $a1fdb277f51e968c$export$40a0242a5dec07f5 = /** @class */ function() {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new (0, $2snAs.ScrollbarTrack)((0, $bfWBC.TrackDirection).X, thumbMinSize);
        this.yAxis = new (0, $2snAs.ScrollbarTrack)((0, $bfWBC.TrackDirection).Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */ TrackController.prototype.update = function() {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */ TrackController.prototype.autoHideOnIdle = function() {
        if (this._scrollbar.options.alwaysShowTracks) return;
        this.xAxis.hide();
        this.yAxis.hide();
    };
    (0, $16swy.__decorate)([
        (0, $fKkxn.debounce)(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}();

});
parcelRequire.register("2snAs", function(module, exports) {

$parcel$export(module.exports, "ScrollbarTrack", function () { return $1ca07e32da3550e6$export$9e82a9d3e0d2088; });

var $oGnc4 = parcelRequire("oGnc4");
parcelRequire("jyjmF");
var $3rXT1 = parcelRequire("3rXT1");
var $1ca07e32da3550e6$export$9e82a9d3e0d2088 = /** @class */ function() {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) thumbMinSize = 0;
        /**
         * Track element
         */ this.element = document.createElement("div");
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new (0, $oGnc4.ScrollbarThumb)(direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */ ScrollbarTrack.prototype.attachTo = function(scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */ ScrollbarTrack.prototype.show = function() {
        if (this._isShown) return;
        this._isShown = true;
        this.element.classList.add("show");
    };
    /**
     * Hide track immediately
     */ ScrollbarTrack.prototype.hide = function() {
        if (!this._isShown) return;
        this._isShown = false;
        this.element.classList.remove("show");
    };
    ScrollbarTrack.prototype.update = function(scrollOffset, containerSize, pageSize) {
        (0, $3rXT1.setStyle)(this.element, {
            display: pageSize <= containerSize ? "none" : "block"
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}();

});
parcelRequire.register("oGnc4", function(module, exports) {

$parcel$export(module.exports, "ScrollbarThumb", function () { return $04a31c6b2c64c421$export$2d610e681b8dabf8; });

var $bfWBC = parcelRequire("bfWBC");
parcelRequire("jyjmF");
var $3rXT1 = parcelRequire("3rXT1");
var $04a31c6b2c64c421$export$2d610e681b8dabf8 = /** @class */ function() {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) _minSize = 0;
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */ this.element = document.createElement("div");
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */ this.displaySize = 0;
        /**
         * Actual size of the thumb
         */ this.realSize = 0;
        /**
         * Thumb offset to the top
         */ this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */ ScrollbarThumb.prototype.attachTo = function(trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function(scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        (0, $3rXT1.setStyle)(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function() {
        switch(this._direction){
            case (0, $bfWBC.TrackDirection).X:
                return {
                    width: this.displaySize + "px",
                    "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                };
            case (0, $bfWBC.TrackDirection).Y:
                return {
                    height: this.displaySize + "px",
                    "-transform": "translate3d(0, " + this.offset + "px, 0)"
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}();

});
parcelRequire.register("bfWBC", function(module, exports) {

$parcel$export(module.exports, "TrackDirection", function () { return $831e8e50878df2ce$export$2d4c17c1fb94ad57; });
var $831e8e50878df2ce$export$2d4c17c1fb94ad57;
(function(TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})($831e8e50878df2ce$export$2d4c17c1fb94ad57 || ($831e8e50878df2ce$export$2d4c17c1fb94ad57 = {}));

});




parcelRequire.register("892Zu", function(module, exports) {
$parcel$export(module.exports, "getSize", function () { return (parcelRequire("dXJBg")).getSize; });
$parcel$export(module.exports, "isVisible", function () { return (parcelRequire("1PAWD")).isVisible; });
$parcel$export(module.exports, "update", function () { return (parcelRequire("lCEAw")).update; });
parcelRequire("dXJBg");
parcelRequire("1PAWD");
parcelRequire("lCEAw");

});
parcelRequire.register("dXJBg", function(module, exports) {

$parcel$export(module.exports, "getSize", function () { return $a2a4283f79510b0b$export$31b21d0167753bb4; });
function $a2a4283f79510b0b$export$31b21d0167753bb4(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var containerStyles = getComputedStyle(containerEl);
    var paddings = [
        "paddingTop",
        "paddingBottom",
        "paddingLeft",
        "paddingRight"
    ].map(function(prop) {
        return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
    });
    var verticalPadding = paddings[0] + paddings[1];
    var horizontalPadding = paddings[2] + paddings[3];
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight
        },
        content: {
            // border width and paddings should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
        }
    };
}

});

parcelRequire.register("1PAWD", function(module, exports) {

$parcel$export(module.exports, "isVisible", function () { return $155736513923d92f$export$795910f5f15a9633; });
function $155736513923d92f$export$795910f5f15a9633(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}

});

parcelRequire.register("lCEAw", function(module, exports) {

$parcel$export(module.exports, "update", function () { return $040ff216c96c4b86$export$722fbec263ad908a; });
function $040ff216c96c4b86$export$722fbec263ad908a(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0)
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0)
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}

});


parcelRequire.register("4yZzI", function(module, exports) {
$parcel$export(module.exports, "setPosition", function () { return (parcelRequire("90GwU")).setPosition; });
$parcel$export(module.exports, "scrollTo", function () { return (parcelRequire("fTU24")).scrollTo; });
$parcel$export(module.exports, "scrollIntoView", function () { return (parcelRequire("lJBG3")).scrollIntoView; });
parcelRequire("90GwU");
parcelRequire("fTU24");
parcelRequire("lJBG3");

});
parcelRequire.register("90GwU", function(module, exports) {

$parcel$export(module.exports, "setPosition", function () { return $68f51ab0258e52fe$export$f9b088a47202d605; });

var $16swy = parcelRequire("16swy");

var $6CaDf = parcelRequire("6CaDf");
parcelRequire("jyjmF");
var $3rXT1 = parcelRequire("3rXT1");
function $68f51ab0258e52fe$export$f9b088a47202d605(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(x, 0, limit.x);
    y = (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x) track.xAxis.show();
    if (y !== offset.y) track.yAxis.show();
    if (!options.alwaysShowTracks) track.autoHideOnIdle();
    if (x === offset.x && y === offset.y) return null;
    offset.x = x;
    offset.y = y;
    (0, $3rXT1.setStyle)(contentEl, {
        "-transform": "translate3d(" + -x + "px, " + -y + "px, 0)"
    });
    track.update();
    return {
        offset: (0, $16swy.__assign)({}, offset),
        limit: (0, $16swy.__assign)({}, limit)
    };
}

});

parcelRequire.register("fTU24", function(module, exports) {

$parcel$export(module.exports, "scrollTo", function () { return $b93774ebc77a81a6$export$3f99968195accfaf; });

var $6CaDf = parcelRequire("6CaDf");
var $b93774ebc77a81a6$var$animationIDStorage = new WeakMap();
function $b93774ebc77a81a6$export$3f99968195accfaf(scrollbar, x, y, duration, _a) {
    if (duration === void 0) duration = 0;
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? $b93774ebc77a81a6$var$defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(x, 0, limit.x) - startX;
    var disY = (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === "function") callback.call(scrollbar);
        } else {
            var animationID = requestAnimationFrame(scroll);
            $b93774ebc77a81a6$var$animationIDStorage.set(scrollbar, animationID);
        }
    }
    cancelAnimationFrame($b93774ebc77a81a6$var$animationIDStorage.get(scrollbar));
    scroll();
}
/**
 * easeOutCubic
 */ function $b93774ebc77a81a6$var$defaultEasing(t) {
    return Math.pow(t - 1, 3) + 1;
}

});

parcelRequire.register("lJBG3", function(module, exports) {

$parcel$export(module.exports, "scrollIntoView", function () { return $fd2b06dbf61acfde$export$53a0910f038337bd; });

var $6CaDf = parcelRequire("6CaDf");
function $fd2b06dbf61acfde$export$53a0910f038337bd(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem)) return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(delta, -offset.y, limit.y - offset.y));
}

});


parcelRequire.register("cQUk8", function(module, exports) {

$parcel$export(module.exports, "ScrollbarPlugin", function () { return $95b60817b7bd5d05$export$db53f857c251fca3; });
$parcel$export(module.exports, "addPlugins", function () { return $95b60817b7bd5d05$export$19ec5365ea6ce8cf; });
$parcel$export(module.exports, "initPlugins", function () { return $95b60817b7bd5d05$export$d117388934d9aaf6; });

var $16swy = parcelRequire("16swy");
var $95b60817b7bd5d05$export$db53f857c251fca3 = /** @class */ function() {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = (0, $16swy.__assign)((0, $16swy.__assign)({}, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin.prototype.onInit = function() {};
    ScrollbarPlugin.prototype.onDestroy = function() {};
    ScrollbarPlugin.prototype.onUpdate = function() {};
    ScrollbarPlugin.prototype.onRender = function(_remainMomentum) {};
    ScrollbarPlugin.prototype.transformDelta = function(delta, _evt) {
        return (0, $16swy.__assign)({}, delta);
    };
    ScrollbarPlugin.pluginName = "";
    ScrollbarPlugin.defaultOptions = {};
    return ScrollbarPlugin;
}();
var $95b60817b7bd5d05$export$905153d94e0757fa = {
    order: new Set(),
    constructors: {}
};
function $95b60817b7bd5d05$export$19ec5365ea6ce8cf() {
    var Plugins = [];
    for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
    Plugins.forEach(function(P) {
        var pluginName = P.pluginName;
        if (!pluginName) throw new TypeError("plugin name is required");
        $95b60817b7bd5d05$export$905153d94e0757fa.order.add(pluginName);
        $95b60817b7bd5d05$export$905153d94e0757fa.constructors[pluginName] = P;
    });
}
function $95b60817b7bd5d05$export$d117388934d9aaf6(scrollbar, options) {
    return Array.from($95b60817b7bd5d05$export$905153d94e0757fa.order).filter(function(pluginName) {
        return options[pluginName] !== false;
    }).map(function(pluginName) {
        var Plugin = $95b60817b7bd5d05$export$905153d94e0757fa.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}

});

parcelRequire.register("lTfpG", function(module, exports) {

var $32aiV = parcelRequire("32aiV");

var $fgxqj = parcelRequire("fgxqj");

var $g2zGU = parcelRequire("g2zGU");

var $fZIuJ = parcelRequire("fZIuJ");

var $5LOle = parcelRequire("5LOle");

var $8uYo4 = parcelRequire("8uYo4");
$parcel$exportWildcard(module.exports, $32aiV);
$parcel$exportWildcard(module.exports, $fgxqj);
$parcel$exportWildcard(module.exports, $g2zGU);
$parcel$exportWildcard(module.exports, $fZIuJ);
$parcel$exportWildcard(module.exports, $5LOle);
$parcel$exportWildcard(module.exports, $8uYo4);

});
parcelRequire.register("32aiV", function(module, exports) {

$parcel$export(module.exports, "keyboardHandler", function () { return $23598d31f779b100$export$6ff2ab7955f7f068; });
parcelRequire("jyjmF");
var $fc7gb = parcelRequire("fc7gb");
var $23598d31f779b100$var$KEY_CODE;
(function(KEY_CODE) {
    KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})($23598d31f779b100$var$KEY_CODE || ($23598d31f779b100$var$KEY_CODE = {}));
function $23598d31f779b100$export$6ff2ab7955f7f068(scrollbar) {
    var addEvent = (0, $fc7gb.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, "keydown", function(evt) {
        var activeElement = document.activeElement;
        if (activeElement !== container && !container.contains(activeElement)) return;
        if ($23598d31f779b100$var$isEditable(activeElement)) return;
        var delta = $23598d31f779b100$var$getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) return;
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) scrollbar.parent.containerEl.focus();
            }
        });
    });
}
function $23598d31f779b100$var$getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch(keyCode){
        case $23598d31f779b100$var$KEY_CODE.TAB:
            return $23598d31f779b100$var$handleTabKey(scrollbar);
        case $23598d31f779b100$var$KEY_CODE.SPACE:
            return [
                0,
                200
            ];
        case $23598d31f779b100$var$KEY_CODE.PAGE_UP:
            return [
                0,
                -size.container.height + 40
            ];
        case $23598d31f779b100$var$KEY_CODE.PAGE_DOWN:
            return [
                0,
                size.container.height - 40
            ];
        case $23598d31f779b100$var$KEY_CODE.END:
            return [
                0,
                limit.y - offset.y
            ];
        case $23598d31f779b100$var$KEY_CODE.HOME:
            return [
                0,
                -offset.y
            ];
        case $23598d31f779b100$var$KEY_CODE.LEFT:
            return [
                -40,
                0
            ];
        case $23598d31f779b100$var$KEY_CODE.UP:
            return [
                0,
                -40
            ];
        case $23598d31f779b100$var$KEY_CODE.RIGHT:
            return [
                40,
                0
            ];
        case $23598d31f779b100$var$KEY_CODE.DOWN:
            return [
                0,
                40
            ];
        default:
            return null;
    }
}
function $23598d31f779b100$var$handleTabKey(scrollbar) {
    // handle in next frame
    requestAnimationFrame(function() {
        scrollbar.scrollIntoView(document.activeElement, {
            offsetTop: scrollbar.size.container.height / 2,
            offsetLeft: scrollbar.size.container.width / 2,
            onlyScrollIfNeeded: true
        });
    });
}
function $23598d31f779b100$var$isEditable(elem) {
    if (elem.tagName === "INPUT" || elem.tagName === "SELECT" || elem.tagName === "TEXTAREA" || elem.isContentEditable) return !elem.disabled;
    return false;
}

});

parcelRequire.register("fgxqj", function(module, exports) {

$parcel$export(module.exports, "mouseHandler", function () { return $b1d246cdc7530411$export$242d43875ab79ce3; });

var $6CaDf = parcelRequire("6CaDf");
parcelRequire("jyjmF");
var $fc7gb = parcelRequire("fc7gb");
var $cA0ug = parcelRequire("cA0ug");
var $lDEed = parcelRequire("lDEed");
var $3rXT1 = parcelRequire("3rXT1");
var $b1d246cdc7530411$var$Direction;
(function(Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})($b1d246cdc7530411$var$Direction || ($b1d246cdc7530411$var$Direction = {}));
function $b1d246cdc7530411$export$242d43875ab79ce3(scrollbar) {
    var addEvent = (0, $fc7gb.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcMomentum(direction, clickPosition) {
        var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
        if (direction === $b1d246cdc7530411$var$Direction.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
        }
        if (direction === $b1d246cdc7530411$var$Direction.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if ((0, $cA0ug.isOneOf)(elem, [
            xAxis.element,
            xAxis.thumb.element
        ])) return $b1d246cdc7530411$var$Direction.X;
        if ((0, $cA0ug.isOneOf)(elem, [
            yAxis.element,
            yAxis.thumb.element
        ])) return $b1d246cdc7530411$var$Direction.Y;
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var trackDirection;
    var containerRect;
    addEvent(container, "click", function(evt) {
        if (isMouseMoving || !(0, $cA0ug.isOneOf)(evt.target, [
            xAxis.element,
            yAxis.element
        ])) return;
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = (0, $lDEed.getPosition)(evt);
        if (direction === $b1d246cdc7530411$var$Direction.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(calcMomentum(direction, offsetOnTrack), 0);
        }
        if (direction === $b1d246cdc7530411$var$Direction.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, calcMomentum(direction, offsetOnTrack));
        }
    });
    addEvent(container, "mousedown", function(evt) {
        if (!(0, $cA0ug.isOneOf)(evt.target, [
            xAxis.thumb.element,
            yAxis.thumb.element
        ])) return;
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = (0, $lDEed.getPosition)(evt);
        var thumbRect = thumb.getBoundingClientRect();
        trackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        (0, $3rXT1.setStyle)(scrollbar.containerEl, {
            "-user-select": "none"
        });
    });
    addEvent(window, "mousemove", function(evt) {
        if (!isMouseDown) return;
        isMouseMoving = true;
        var cursorPos = (0, $lDEed.getPosition)(evt);
        if (trackDirection === $b1d246cdc7530411$var$Direction.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setMomentum(calcMomentum(trackDirection, offsetOnTrack), 0);
        }
        if (trackDirection === $b1d246cdc7530411$var$Direction.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setMomentum(0, calcMomentum(trackDirection, offsetOnTrack));
        }
    });
    addEvent(window, "mouseup blur", function() {
        isMouseDown = isMouseMoving = false;
        (0, $3rXT1.setStyle)(scrollbar.containerEl, {
            "-user-select": ""
        });
    });
}

});

parcelRequire.register("g2zGU", function(module, exports) {

$parcel$export(module.exports, "resizeHandler", function () { return $bad884c4252b0b27$export$53d88fe222065052; });

var $3v6tI = parcelRequire("3v6tI");
parcelRequire("jyjmF");
var $fc7gb = parcelRequire("fc7gb");
function $bad884c4252b0b27$export$53d88fe222065052(scrollbar) {
    var addEvent = (0, $fc7gb.eventScope)(scrollbar);
    addEvent(window, "resize", (0, (/*@__PURE__*/$parcel$interopDefault($3v6tI)))(scrollbar.update.bind(scrollbar), 300));
}

});

parcelRequire.register("fZIuJ", function(module, exports) {

$parcel$export(module.exports, "selectHandler", function () { return $ba4f113b20ef1319$export$77907cd5c206b555; });

var $6CaDf = parcelRequire("6CaDf");
parcelRequire("jyjmF");
var $fc7gb = parcelRequire("fc7gb");
var $lDEed = parcelRequire("lDEed");
function $ba4f113b20ef1319$export$77907cd5c206b555(scrollbar) {
    var addEvent = (0, $fc7gb.eventScope)(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var isSelected = false;
    var isContextMenuOpened = false; // flag to prevent selection when context menu is opened
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y) return;
        var offset = scrollbar.offset, limit = scrollbar.limit;
        // DISALLOW delta transformation
        scrollbar.setMomentum((0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(offset.x + x, 0, limit.x) - offset.x, (0, (/*@__PURE__*/$parcel$interopDefault($6CaDf)))(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function() {
            scroll({
                x: x,
                y: y
            });
        });
    }
    addEvent(window, "mousemove", function(evt) {
        if (!isSelected) return;
        cancelAnimationFrame(animationID);
        var dir = $ba4f113b20ef1319$var$calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    // prevent scrolling when context menu is opened
    // NOTE: `contextmenu` event may be fired
    //          1. BEFORE `selectstart`: when user right-clicks on the text content -> prevent future scrolling,
    //          2. AFTER `selectstart`: when user right-clicks on the blank area -> cancel current scrolling,
    //        so we need to both set the flag and cancel current scrolling
    addEvent(contentEl, "contextmenu", function() {
        // set the flag to prevent future scrolling
        isContextMenuOpened = true;
        // stop current scrolling
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // reset context menu flag on mouse down
    // to ensure the scrolling is allowed in the next selection
    addEvent(contentEl, "mousedown", function() {
        isContextMenuOpened = false;
    });
    addEvent(contentEl, "selectstart", function() {
        if (isContextMenuOpened) return;
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, "mouseup blur", function() {
        cancelAnimationFrame(animationID);
        isSelected = false;
        isContextMenuOpened = false;
    });
    // patch for touch devices
    addEvent(containerEl, "scroll", function(evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function $ba4f113b20ef1319$var$calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = (0, $lDEed.getPosition)(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0
    };
    var padding = 20;
    if (x === 0 && y === 0) return res;
    if (x > right - padding) res.x = x - right + padding;
    else if (x < left + padding) res.x = x - left - padding;
    if (y > bottom - padding) res.y = y - bottom + padding;
    else if (y < top + padding) res.y = y - top - padding;
    res.x *= 2;
    res.y *= 2;
    return res;
}

});

parcelRequire.register("5LOle", function(module, exports) {

$parcel$export(module.exports, "touchHandler", function () { return $43386448dfea445b$export$2916e5349c3e671c; });
parcelRequire("jyjmF");
var $kEx6l = parcelRequire("kEx6l");
var $fc7gb = parcelRequire("fc7gb");
var $43386448dfea445b$var$activeScrollbar;
function $43386448dfea445b$export$2916e5349c3e671c(scrollbar) {
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new (0, $kEx6l.TouchRecord)();
    var addEvent = (0, $fc7gb.eventScope)(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, "touchstart", function(evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(target, "touchmove", function(evt) {
        if ($43386448dfea445b$var$activeScrollbar && $43386448dfea445b$var$activeScrollbar !== scrollbar) return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll && evt.cancelable) {
                evt.preventDefault();
                $43386448dfea445b$var$activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(target, "touchcancel touchend", function(evt) {
        var delta = touchRecord.getEasingDistance(damping);
        scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) scrollbar.options.damping = damping;
        touchRecord.release(evt);
        $43386448dfea445b$var$activeScrollbar = null;
    });
}

});

parcelRequire.register("8uYo4", function(module, exports) {

$parcel$export(module.exports, "wheelHandler", function () { return $62fff7b7c625a06b$export$14c83f6c8045ea84; });
parcelRequire("jyjmF");
var $fc7gb = parcelRequire("fc7gb");
function $62fff7b7c625a06b$export$14c83f6c8045ea84(scrollbar) {
    var addEvent = (0, $fc7gb.eventScope)(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
    addEvent(target, eventName, function(evt) {
        var _a = $62fff7b7c625a06b$var$normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
        });
    });
}
// Normalizing wheel delta
var $62fff7b7c625a06b$var$DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3
};
var $62fff7b7c625a06b$var$DELTA_MODE = [
    1.0,
    28.0,
    500.0
];
var $62fff7b7c625a06b$var$getDeltaMode = function(mode) {
    return $62fff7b7c625a06b$var$DELTA_MODE[mode] || $62fff7b7c625a06b$var$DELTA_MODE[0];
};
function $62fff7b7c625a06b$var$normalizeDelta(evt) {
    if ("deltaX" in evt) {
        var mode = $62fff7b7c625a06b$var$getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / $62fff7b7c625a06b$var$DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / $62fff7b7c625a06b$var$DELTA_SCALE.STANDARD * mode
        };
    }
    if ("wheelDeltaX" in evt) return {
        x: evt.wheelDeltaX / $62fff7b7c625a06b$var$DELTA_SCALE.OTHERS,
        y: evt.wheelDeltaY / $62fff7b7c625a06b$var$DELTA_SCALE.OTHERS
    };
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / $62fff7b7c625a06b$var$DELTA_SCALE.OTHERS
    };
}

});



parcelRequire.register("qWms0", function(module, exports) {

$parcel$export(module.exports, "attachStyle", function () { return $050fb31f81189716$export$ff76c51b0f744e0a; });
$parcel$export(module.exports, "detachStyle", function () { return $050fb31f81189716$export$11939e4e3dfbbb72; });
var $050fb31f81189716$var$TRACK_BG = "rgba(222, 222, 222, .75)";
var $050fb31f81189716$var$THUMB_BG = "rgba(0, 0, 0, .5)";
// sets content's display type to `flow-root` to suppress margin collapsing
var $050fb31f81189716$var$SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + $050fb31f81189716$var$TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + $050fb31f81189716$var$THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var $050fb31f81189716$var$STYLE_ID = "smooth-scrollbar-style";
var $050fb31f81189716$var$isStyleAttached = false;
function $050fb31f81189716$export$ff76c51b0f744e0a() {
    if ($050fb31f81189716$var$isStyleAttached || typeof window === "undefined") return;
    var styleEl = document.createElement("style");
    styleEl.id = $050fb31f81189716$var$STYLE_ID;
    styleEl.textContent = $050fb31f81189716$var$SCROLLBAR_STYLE;
    if (document.head) document.head.appendChild(styleEl);
    $050fb31f81189716$var$isStyleAttached = true;
}
function $050fb31f81189716$export$11939e4e3dfbbb72() {
    if (!$050fb31f81189716$var$isStyleAttached || typeof window === "undefined") return;
    var styleEl = document.getElementById($050fb31f81189716$var$STYLE_ID);
    if (!styleEl || !styleEl.parentNode) return;
    styleEl.parentNode.removeChild(styleEl);
    $050fb31f81189716$var$isStyleAttached = false;
}

});


parcelRequire.register("QqU65", function(module, exports) {

$parcel$export(module.exports, "ScrollbarModalPlugin", function () { return $09d9b9f9f4b39621$export$d1895f44da2d87ca; });

var $hdVda = parcelRequire("hdVda");
parcelRequire("lr4JC");
var $cQUk8 = parcelRequire("cQUk8");
class $09d9b9f9f4b39621$export$d1895f44da2d87ca extends (0, $cQUk8.ScrollbarPlugin) {
    transformDelta(delta) {
        return this.options.open ? {
            x: 0,
            y: 0
        } : delta;
    }
}
(0, $hdVda.default)($09d9b9f9f4b39621$export$d1895f44da2d87ca, "pluginName", "modal");
(0, $hdVda.default)($09d9b9f9f4b39621$export$d1895f44da2d87ca, "defaultOptions", {
    open: false
});

});
parcelRequire.register("hdVda", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $3ea9bbd6f8ebed33$export$2e2bcd8739ae039; });
function $3ea9bbd6f8ebed33$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

});


parcelRequire.register("14BZW", function(module, exports) {

$parcel$export(module.exports, "ScrollbarScreenStopPlugin", function () { return $0c83a3ccf5eaaac1$export$627047b99c13ccfa; });

var $hdVda = parcelRequire("hdVda");
parcelRequire("lr4JC");
var $cQUk8 = parcelRequire("cQUk8");
class $0c83a3ccf5eaaac1$export$627047b99c13ccfa extends (0, $cQUk8.ScrollbarPlugin) {
    onRender(remainMomentum) {
        // remainMomentum {x: 0, y: 0}
        if (!remainMomentum.y) return;
        const direction = remainMomentum.y / Math.abs(remainMomentum.y);
        let nextPointMatch;
        this.options.points.forEach((p, index)=>{
            if (direction === 1) {
                if (this.scrollbar.scrollTop < p && index === 0) nextPointMatch = p;
                if (this.scrollbar.scrollTop < p && this.scrollbar.scrollTop > this.options.points[index - 1]) nextPointMatch = p;
            } else {
                if (this.scrollbar.scrollTop > p && index === this.options.points.length - 1) nextPointMatch = p;
                if (this.scrollbar.scrollTop < p && this.scrollbar.scrollTop > this.options.points[index - 1]) nextPointMatch = this.options.points[index - 1];
            }
        });
        if (!nextPointMatch) return;
        if (direction === 1 && this.scrollbar.scrollTop + remainMomentum.y >= nextPointMatch) this.scrollbar.setMomentum(0, direction * (nextPointMatch - this.scrollbar.scrollTop));
        if (direction === -1 && this.scrollbar.scrollTop + remainMomentum.y <= nextPointMatch) this.scrollbar.setMomentum(0, direction * (this.scrollbar.scrollTop - nextPointMatch));
    }
}
(0, $hdVda.default)($0c83a3ccf5eaaac1$export$627047b99c13ccfa, "pluginName", "screenStop");
(0, $hdVda.default)($0c83a3ccf5eaaac1$export$627047b99c13ccfa, "defaultOptions", {
    points: []
});

});


parcelRequire.register("l6B09", function(module, exports) {

$parcel$export(module.exports, "gsap", function () { return $f5d6dc3e2355e925$export$99ee26438460406a; });

var $kvUf5 = parcelRequire("kvUf5");

var $7xoBs = parcelRequire("7xoBs");
var $f5d6dc3e2355e925$export$99ee26438460406a = (0, $kvUf5.gsap).registerPlugin((0, $7xoBs.CSSPlugin)) || (0, $kvUf5.gsap), // to protect from tree shaking
$f5d6dc3e2355e925$export$7b23975ad686bf91 = $f5d6dc3e2355e925$export$99ee26438460406a.core.Tween;

});
parcelRequire.register("kvUf5", function(module, exports) {

$parcel$export(module.exports, "_config", function () { return $eef254727dd68eca$export$4922bee768729a77; });
$parcel$export(module.exports, "_isString", function () { return $eef254727dd68eca$export$f664476fd67145ca; });
$parcel$export(module.exports, "_isUndefined", function () { return $eef254727dd68eca$export$a8178c063a9fd3a1; });
$parcel$export(module.exports, "_numExp", function () { return $eef254727dd68eca$export$b9d44bb6523120d6; });
$parcel$export(module.exports, "_numWithUnitExp", function () { return $eef254727dd68eca$export$65c88bbd597e7b0a; });
$parcel$export(module.exports, "_relExp", function () { return $eef254727dd68eca$export$5a680e28b0b61bc; });
$parcel$export(module.exports, "gsap", function () { return $eef254727dd68eca$export$99ee26438460406a; });
$parcel$export(module.exports, "_missingPlugin", function () { return $eef254727dd68eca$export$7fb54635790b59a5; });
$parcel$export(module.exports, "_plugins", function () { return $eef254727dd68eca$export$d305d8ec5d7c26b8; });
$parcel$export(module.exports, "GSCache", function () { return $eef254727dd68eca$export$cf10981d5419cad5; });
$parcel$export(module.exports, "_getCache", function () { return $eef254727dd68eca$export$8b9be379d2de2a39; });
$parcel$export(module.exports, "_getProperty", function () { return $eef254727dd68eca$export$51d6bbe898aef1f9; });
$parcel$export(module.exports, "_forEachName", function () { return $eef254727dd68eca$export$f9000b814859f126; });
$parcel$export(module.exports, "_round", function () { return $eef254727dd68eca$export$9c8d725d65e13f94; });
$parcel$export(module.exports, "_parseRelative", function () { return $eef254727dd68eca$export$dac762bc6301b560; });
$parcel$export(module.exports, "_ticker", function () { return $eef254727dd68eca$export$762ed8fbedb691e3; });
$parcel$export(module.exports, "getUnit", function () { return $eef254727dd68eca$export$65f2564e9a9b9222; });
$parcel$export(module.exports, "_replaceRandom", function () { return $eef254727dd68eca$export$d5962a97e3cde94d; });
$parcel$export(module.exports, "_getSetter", function () { return $eef254727dd68eca$export$d60fbc1e0278aaf0; });
$parcel$export(module.exports, "PropTween", function () { return $eef254727dd68eca$export$3a67f7f44b1e838a; });
$parcel$export(module.exports, "_colorExp", function () { return $eef254727dd68eca$export$dd733e62515be2bd; });
$parcel$export(module.exports, "_colorStringFilter", function () { return $eef254727dd68eca$export$7eb2e5eb5eeb96a4; });
$parcel$export(module.exports, "_renderComplexString", function () { return $eef254727dd68eca$export$c5bc8e04394ecb2; });
$parcel$export(module.exports, "_checkPlugin", function () { return $eef254727dd68eca$export$5c457b74208010cf; });
$parcel$export(module.exports, "_sortPropTweensByPriority", function () { return $eef254727dd68eca$export$eed5824f53346d57; });
function $eef254727dd68eca$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $eef254727dd68eca$var$_inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var $eef254727dd68eca$export$4922bee768729a77 = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, $eef254727dd68eca$var$_defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, $eef254727dd68eca$var$_suppressOverwrites, $eef254727dd68eca$var$_reverting, $eef254727dd68eca$var$_context, $eef254727dd68eca$var$_bigNum = 1e8, $eef254727dd68eca$var$_tinyNum = 1 / $eef254727dd68eca$var$_bigNum, $eef254727dd68eca$var$_2PI = Math.PI * 2, $eef254727dd68eca$var$_HALF_PI = $eef254727dd68eca$var$_2PI / 4, $eef254727dd68eca$var$_gsID = 0, $eef254727dd68eca$var$_sqrt = Math.sqrt, $eef254727dd68eca$var$_cos = Math.cos, $eef254727dd68eca$var$_sin = Math.sin, $eef254727dd68eca$export$f664476fd67145ca = function _isString(value) {
    return typeof value === "string";
}, $eef254727dd68eca$var$_isFunction = function _isFunction(value) {
    return typeof value === "function";
}, $eef254727dd68eca$var$_isNumber = function _isNumber(value) {
    return typeof value === "number";
}, $eef254727dd68eca$export$a8178c063a9fd3a1 = function _isUndefined(value) {
    return typeof value === "undefined";
}, $eef254727dd68eca$var$_isObject = function _isObject(value) {
    return typeof value === "object";
}, $eef254727dd68eca$var$_isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, $eef254727dd68eca$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $eef254727dd68eca$var$_isFuncOrString = function _isFuncOrString(value) {
    return $eef254727dd68eca$var$_isFunction(value) || $eef254727dd68eca$export$f664476fd67145ca(value);
}, $eef254727dd68eca$var$_isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
$eef254727dd68eca$var$_isArray = Array.isArray, $eef254727dd68eca$var$_strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
$eef254727dd68eca$export$b9d44bb6523120d6 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
$eef254727dd68eca$export$65c88bbd597e7b0a = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, $eef254727dd68eca$var$_complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
$eef254727dd68eca$export$5a680e28b0b61bc = /[+-]=-?[.\d]+/, $eef254727dd68eca$var$_delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
$eef254727dd68eca$var$_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, $eef254727dd68eca$var$_globalTimeline, $eef254727dd68eca$var$_win, $eef254727dd68eca$var$_coreInitted, $eef254727dd68eca$var$_doc, $eef254727dd68eca$var$_globals = {}, $eef254727dd68eca$var$_installScope = {}, $eef254727dd68eca$var$_coreReady, $eef254727dd68eca$var$_install = function _install(scope) {
    return ($eef254727dd68eca$var$_installScope = $eef254727dd68eca$var$_merge(scope, $eef254727dd68eca$var$_globals)) && $eef254727dd68eca$export$99ee26438460406a;
}, $eef254727dd68eca$export$7fb54635790b59a5 = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, $eef254727dd68eca$var$_warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, $eef254727dd68eca$var$_addGlobal = function _addGlobal(name, obj) {
    return name && ($eef254727dd68eca$var$_globals[name] = obj) && $eef254727dd68eca$var$_installScope && ($eef254727dd68eca$var$_installScope[name] = obj) || $eef254727dd68eca$var$_globals;
}, $eef254727dd68eca$var$_emptyFunc = function _emptyFunc() {
    return 0;
}, $eef254727dd68eca$var$_startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
}, $eef254727dd68eca$var$_revertConfigNoKill = {
    suppressEvents: true,
    kill: false
}, $eef254727dd68eca$var$_revertConfig = {
    suppressEvents: true
}, $eef254727dd68eca$var$_reservedProps = {}, $eef254727dd68eca$var$_lazyTweens = [], $eef254727dd68eca$var$_lazyLookup = {}, $eef254727dd68eca$var$_lastRenderedFrame, $eef254727dd68eca$export$d305d8ec5d7c26b8 = {}, $eef254727dd68eca$var$_effects = {}, $eef254727dd68eca$var$_nextGCFrame = 30, $eef254727dd68eca$var$_harnessPlugins = [], $eef254727dd68eca$var$_callbackNames = "", $eef254727dd68eca$var$_harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    $eef254727dd68eca$var$_isObject(target) || $eef254727dd68eca$var$_isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = $eef254727dd68eca$var$_harnessPlugins.length;
        while(i-- && !$eef254727dd68eca$var$_harnessPlugins[i].targetTest(target));
        harnessPlugin = $eef254727dd68eca$var$_harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new $eef254727dd68eca$export$cf10981d5419cad5(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, $eef254727dd68eca$export$8b9be379d2de2a39 = function _getCache(target) {
    return target._gsap || $eef254727dd68eca$var$_harness($eef254727dd68eca$export$45b10814cc054894(target))[0]._gsap;
}, $eef254727dd68eca$export$51d6bbe898aef1f9 = function _getProperty(target, property, v) {
    return (v = target[property]) && $eef254727dd68eca$var$_isFunction(v) ? target[property]() : $eef254727dd68eca$export$a8178c063a9fd3a1(v) && target.getAttribute && target.getAttribute(property) || v;
}, $eef254727dd68eca$export$f9000b814859f126 = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
$eef254727dd68eca$export$9c8d725d65e13f94 = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, $eef254727dd68eca$var$_roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
$eef254727dd68eca$export$dac762bc6301b560 = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, $eef254727dd68eca$var$_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, $eef254727dd68eca$var$_lazyRender = function _lazyRender() {
    var l = $eef254727dd68eca$var$_lazyTweens.length, a = $eef254727dd68eca$var$_lazyTweens.slice(0), i, tween;
    $eef254727dd68eca$var$_lazyLookup = {};
    $eef254727dd68eca$var$_lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, $eef254727dd68eca$var$_lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    $eef254727dd68eca$var$_lazyTweens.length && !$eef254727dd68eca$var$_reverting && $eef254727dd68eca$var$_lazyRender();
    animation.render(time, suppressEvents, force || $eef254727dd68eca$var$_reverting && time < 0 && (animation._initted || animation._startAt));
    $eef254727dd68eca$var$_lazyTweens.length && !$eef254727dd68eca$var$_reverting && $eef254727dd68eca$var$_lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, $eef254727dd68eca$var$_numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match($eef254727dd68eca$var$_delimitedValueExp).length < 2 ? n : $eef254727dd68eca$export$f664476fd67145ca(value) ? value.trim() : value;
}, $eef254727dd68eca$var$_passThrough = function _passThrough(p) {
    return p;
}, $eef254727dd68eca$export$dc2b19673bb53610 = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, $eef254727dd68eca$var$_setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, $eef254727dd68eca$var$_merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, $eef254727dd68eca$var$_mergeDeep = function _mergeDeep(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = $eef254727dd68eca$var$_isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    return base;
}, $eef254727dd68eca$var$_copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, $eef254727dd68eca$var$_inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || $eef254727dd68eca$var$_globalTimeline, func = vars.keyframes ? $eef254727dd68eca$var$_setKeyframeDefaults($eef254727dd68eca$var$_isArray(vars.keyframes)) : $eef254727dd68eca$export$dc2b19673bb53610;
    if ($eef254727dd68eca$var$_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, $eef254727dd68eca$var$_arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, $eef254727dd68eca$var$_addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, $eef254727dd68eca$export$cd008aa6cd8844e3 = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, $eef254727dd68eca$var$_removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
}, $eef254727dd68eca$var$_uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, $eef254727dd68eca$var$_recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, $eef254727dd68eca$var$_rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && ($eef254727dd68eca$var$_reverting ? tween._startAt.revert($eef254727dd68eca$var$_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, $eef254727dd68eca$var$_hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, $eef254727dd68eca$var$_elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? $eef254727dd68eca$var$_animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
$eef254727dd68eca$var$_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, $eef254727dd68eca$var$_parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, $eef254727dd68eca$var$_setEnd = function _setEnd(animation) {
    return animation._end = $eef254727dd68eca$var$_roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || $eef254727dd68eca$var$_tinyNum) || 0));
}, $eef254727dd68eca$var$_alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = $eef254727dd68eca$var$_roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        $eef254727dd68eca$var$_setEnd(animation);
        parent._dirty || $eef254727dd68eca$var$_uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ $eef254727dd68eca$var$_postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
        //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        t = $eef254727dd68eca$var$_parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || $eef254727dd68eca$var$_clamp(0, child.totalDuration(), t) - child._tTime > $eef254727dd68eca$var$_tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if ($eef254727dd68eca$var$_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -$eef254727dd68eca$var$_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, $eef254727dd68eca$var$_addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && $eef254727dd68eca$var$_removeFromParent(child);
    child._start = $eef254727dd68eca$var$_roundPrecise(($eef254727dd68eca$var$_isNumber(position) ? position : position || timeline !== $eef254727dd68eca$var$_globalTimeline ? $eef254727dd68eca$var$_parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = $eef254727dd68eca$var$_roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    $eef254727dd68eca$var$_addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    $eef254727dd68eca$var$_isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || $eef254727dd68eca$var$_postAddChecks(timeline, child);
    timeline._ts < 0 && $eef254727dd68eca$var$_alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)
    return timeline;
}, $eef254727dd68eca$var$_scrollTrigger = function _scrollTrigger(animation, trigger) {
    return ($eef254727dd68eca$var$_globals.ScrollTrigger || $eef254727dd68eca$export$7fb54635790b59a5("scrollTrigger", trigger)) && $eef254727dd68eca$var$_globals.ScrollTrigger.create(trigger, animation);
}, $eef254727dd68eca$var$_attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    $eef254727dd68eca$var$_initTween(tween, time, tTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && !$eef254727dd68eca$var$_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && $eef254727dd68eca$var$_lastRenderedFrame !== $eef254727dd68eca$export$762ed8fbedb691e3.frame) {
        $eef254727dd68eca$var$_lazyTweens.push(tween);
        tween._lazy = [
            tTime,
            suppressEvents
        ];
        return 1;
    }
}, $eef254727dd68eca$var$_parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
$eef254727dd68eca$var$_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, $eef254727dd68eca$var$_renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && $eef254727dd68eca$var$_parentPlayheadIsBeforeStart(tween) && !(!tween._initted && $eef254727dd68eca$var$_isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !$eef254727dd68eca$var$_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = $eef254727dd68eca$var$_clamp(0, tween._tDur, totalTime);
        iteration = $eef254727dd68eca$var$_animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== $eef254727dd68eca$var$_animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || $eef254727dd68eca$var$_reverting || force || tween._zTime === $eef254727dd68eca$var$_tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && $eef254727dd68eca$var$_attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? $eef254727dd68eca$var$_tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        totalTime < 0 && $eef254727dd68eca$var$_rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && $eef254727dd68eca$var$_callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && $eef254727dd68eca$var$_callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && $eef254727dd68eca$var$_removeFromParent(tween, 1);
            if (!suppressEvents && !$eef254727dd68eca$var$_reverting) {
                $eef254727dd68eca$var$_callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, $eef254727dd68eca$var$_findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, $eef254727dd68eca$var$_setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = $eef254727dd68eca$var$_roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : $eef254727dd68eca$var$_roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && $eef254727dd68eca$var$_alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && $eef254727dd68eca$var$_setEnd(animation);
    skipUncache || $eef254727dd68eca$var$_uncache(animation.parent, animation);
    return animation;
}, $eef254727dd68eca$var$_onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof $eef254727dd68eca$export$e6a97ba2cae5bb94 ? $eef254727dd68eca$var$_uncache(animation) : $eef254727dd68eca$var$_setDuration(animation, animation._dur);
}, $eef254727dd68eca$var$_zeroPosition = {
    _start: 0,
    endTime: $eef254727dd68eca$var$_emptyFunc,
    totalDuration: $eef254727dd68eca$var$_emptyFunc
}, $eef254727dd68eca$var$_parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || $eef254727dd68eca$var$_zeroPosition, clippedDuration = animation.duration() >= $eef254727dd68eca$var$_bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if ($eef254727dd68eca$export$f664476fd67145ca(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * ($eef254727dd68eca$var$_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, $eef254727dd68eca$var$_createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = $eef254727dd68eca$var$_isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = $eef254727dd68eca$var$_isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = $eef254727dd68eca$var$_isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new $eef254727dd68eca$export$208a41d6b4e37b97(params[0], vars, params[varsIndex + 1]);
}, $eef254727dd68eca$var$_conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, $eef254727dd68eca$var$_clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, $eef254727dd68eca$export$65f2564e9a9b9222 = function getUnit(value, v) {
    return !$eef254727dd68eca$export$f664476fd67145ca(value) || !(v = $eef254727dd68eca$var$_unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
$eef254727dd68eca$export$7d15b64cf5a3a4c4 = function clamp(min, max, value) {
    return $eef254727dd68eca$var$_conditionalReturn(value, function(v) {
        return $eef254727dd68eca$var$_clamp(min, max, v);
    });
}, $eef254727dd68eca$var$_slice = [].slice, $eef254727dd68eca$var$_isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && $eef254727dd68eca$var$_isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && $eef254727dd68eca$var$_isObject(value[0])) && !value.nodeType && value !== $eef254727dd68eca$var$_win;
}, $eef254727dd68eca$var$_flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return $eef254727dd68eca$export$f664476fd67145ca(value) && !leaveStrings || $eef254727dd68eca$var$_isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, $eef254727dd68eca$export$45b10814cc054894(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
$eef254727dd68eca$export$45b10814cc054894 = function toArray(value, scope, leaveStrings) {
    return $eef254727dd68eca$var$_context && !scope && $eef254727dd68eca$var$_context.selector ? $eef254727dd68eca$var$_context.selector(value) : $eef254727dd68eca$export$f664476fd67145ca(value) && !leaveStrings && ($eef254727dd68eca$var$_coreInitted || !$eef254727dd68eca$var$_wake()) ? $eef254727dd68eca$var$_slice.call((scope || $eef254727dd68eca$var$_doc).querySelectorAll(value), 0) : $eef254727dd68eca$var$_isArray(value) ? $eef254727dd68eca$var$_flatten(value, leaveStrings) : $eef254727dd68eca$var$_isArrayLike(value) ? $eef254727dd68eca$var$_slice.call(value, 0) : value ? [
        value
    ] : [];
}, $eef254727dd68eca$export$aea217a45095ce11 = function selector(value) {
    value = $eef254727dd68eca$export$45b10814cc054894(value)[0] || $eef254727dd68eca$var$_warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return $eef254727dd68eca$export$45b10814cc054894(v, el.querySelectorAll ? el : el === value ? $eef254727dd68eca$var$_warn("Invalid scope") || $eef254727dd68eca$var$_doc.createElement("div") : value);
    };
}, $eef254727dd68eca$export$448332262467e042 = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
$eef254727dd68eca$export$f02a9ddbe4480f19 = function distribute(v) {
    if ($eef254727dd68eca$var$_isFunction(v)) return v;
    var vars = $eef254727dd68eca$var$_isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = $eef254727dd68eca$var$_parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if ($eef254727dd68eca$export$f664476fd67145ca(from)) ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                $eef254727dd68eca$var$_bigNum
            ])[1];
            if (!wrapAt) {
                max = -$eef254727dd68eca$var$_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === $eef254727dd68eca$var$_bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = $eef254727dd68eca$var$_bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? $eef254727dd68eca$var$_sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && $eef254727dd68eca$export$448332262467e042(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = $eef254727dd68eca$export$65f2564e9a9b9222(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? $eef254727dd68eca$var$_invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return $eef254727dd68eca$var$_roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, $eef254727dd68eca$export$dd12390e6b265a17 = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = $eef254727dd68eca$var$_roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + ($eef254727dd68eca$var$_isNumber(raw) ? 0 : $eef254727dd68eca$export$65f2564e9a9b9222(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, $eef254727dd68eca$export$51a0620f7a28532b = function snap(snapTo, value) {
    var isArray = $eef254727dd68eca$var$_isArray(snapTo), radius, is2D;
    if (!isArray && $eef254727dd68eca$var$_isObject(snapTo)) {
        radius = isArray = snapTo.radius || $eef254727dd68eca$var$_bigNum;
        if (snapTo.values) {
            snapTo = $eef254727dd68eca$export$45b10814cc054894(snapTo.values);
            if (is2D = !$eef254727dd68eca$var$_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = $eef254727dd68eca$export$dd12390e6b265a17(snapTo.increment);
    }
    return $eef254727dd68eca$var$_conditionalReturn(value, !isArray ? $eef254727dd68eca$export$dd12390e6b265a17(snapTo) : $eef254727dd68eca$var$_isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = $eef254727dd68eca$var$_bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || $eef254727dd68eca$var$_isNumber(raw) ? closest : closest + $eef254727dd68eca$export$65f2564e9a9b9222(raw);
    });
}, $eef254727dd68eca$export$4385e60b38654f68 = function random(min, max, roundingIncrement, returnFunction) {
    return $eef254727dd68eca$var$_conditionalReturn($eef254727dd68eca$var$_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return $eef254727dd68eca$var$_isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, $eef254727dd68eca$export$a4627e546088548d = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, $eef254727dd68eca$export$d7502930aa5492de = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || $eef254727dd68eca$export$65f2564e9a9b9222(value));
    };
}, $eef254727dd68eca$export$a3295358bff77e = function normalize(min, max, value) {
    return $eef254727dd68eca$export$f65a7599bbc6b121(min, max, 0, 1, value);
}, $eef254727dd68eca$var$_wrapArray = function _wrapArray(a, wrapper, value) {
    return $eef254727dd68eca$var$_conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, $eef254727dd68eca$export$4997ffc0176396a6 = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return $eef254727dd68eca$var$_isArray(min) ? $eef254727dd68eca$var$_wrapArray(min, wrap(0, min.length), max) : $eef254727dd68eca$var$_conditionalReturn(value, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, $eef254727dd68eca$export$cfc0b067273edc55 = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return $eef254727dd68eca$var$_isArray(min) ? $eef254727dd68eca$var$_wrapArray(min, wrapYoyo(0, min.length - 1), max) : $eef254727dd68eca$var$_conditionalReturn(value, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, $eef254727dd68eca$export$d5962a97e3cde94d = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? $eef254727dd68eca$var$_delimitedValueExp : $eef254727dd68eca$var$_strictNumExp);
        s += value.substr(prev, i - prev) + $eef254727dd68eca$export$4385e60b38654f68(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, $eef254727dd68eca$export$f65a7599bbc6b121 = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return $eef254727dd68eca$var$_conditionalReturn(value, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, $eef254727dd68eca$export$89e29e4ab65e70a9 = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = $eef254727dd68eca$export$f664476fd67145ca(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if ($eef254727dd68eca$var$_isArray(start) && !$eef254727dd68eca$var$_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i = 1; i < l; i++)interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = $eef254727dd68eca$var$_merge($eef254727dd68eca$var$_isArray(start) ? [] : {}, start);
        if (!interpolators) {
            for(p in end)$eef254727dd68eca$var$_addPropTween.call(master, start, p, "get", end[p]);
            func = function func(p) {
                return $eef254727dd68eca$var$_renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return $eef254727dd68eca$var$_conditionalReturn(progress, func);
}, $eef254727dd68eca$var$_getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = $eef254727dd68eca$var$_bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, $eef254727dd68eca$var$_callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = $eef254727dd68eca$var$_context, context = animation._ctx, params, scope, result;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && $eef254727dd68eca$var$_lazyTweens.length && $eef254727dd68eca$var$_lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    context && ($eef254727dd68eca$var$_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    $eef254727dd68eca$var$_context = prevContext;
    return result;
}, $eef254727dd68eca$var$_interrupt = function _interrupt(animation) {
    $eef254727dd68eca$var$_removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!$eef254727dd68eca$var$_reverting);
    animation.progress() < 1 && $eef254727dd68eca$var$_callback(animation, "onInterrupt");
    return animation;
}, $eef254727dd68eca$var$_quickTween, $eef254727dd68eca$var$_createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    var name = config.name, isFunc = $eef254727dd68eca$var$_isFunction(config), Plugin = name && !isFunc && config.init ? function() {
        this._props = [];
    } : config, //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
        init: $eef254727dd68eca$var$_emptyFunc,
        render: $eef254727dd68eca$var$_renderPropTweens,
        add: $eef254727dd68eca$var$_addPropTween,
        kill: $eef254727dd68eca$var$_killPropTweensOf,
        modifier: $eef254727dd68eca$var$_addPluginModifier,
        rawVars: 0
    }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: $eef254727dd68eca$export$d60fbc1e0278aaf0,
        aliases: {},
        register: 0
    };
    $eef254727dd68eca$var$_wake();
    if (config !== Plugin) {
        if ($eef254727dd68eca$export$d305d8ec5d7c26b8[name]) return;
        $eef254727dd68eca$export$dc2b19673bb53610(Plugin, $eef254727dd68eca$export$dc2b19673bb53610($eef254727dd68eca$var$_copyExcluding(config, instanceDefaults), statics)); //static methods
        $eef254727dd68eca$var$_merge(Plugin.prototype, $eef254727dd68eca$var$_merge(instanceDefaults, $eef254727dd68eca$var$_copyExcluding(config, statics))); //instance methods
        $eef254727dd68eca$export$d305d8ec5d7c26b8[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
            $eef254727dd68eca$var$_harnessPlugins.push(Plugin);
            $eef254727dd68eca$var$_reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }
    $eef254727dd68eca$var$_addGlobal(name, Plugin);
    config.register && config.register($eef254727dd68eca$export$99ee26438460406a, Plugin, $eef254727dd68eca$export$3a67f7f44b1e838a);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ $eef254727dd68eca$var$_255 = 255, $eef254727dd68eca$var$_colorLookup = {
    aqua: [
        0,
        $eef254727dd68eca$var$_255,
        $eef254727dd68eca$var$_255
    ],
    lime: [
        0,
        $eef254727dd68eca$var$_255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        $eef254727dd68eca$var$_255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        $eef254727dd68eca$var$_255,
        $eef254727dd68eca$var$_255,
        $eef254727dd68eca$var$_255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        $eef254727dd68eca$var$_255,
        $eef254727dd68eca$var$_255,
        0
    ],
    orange: [
        $eef254727dd68eca$var$_255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        $eef254727dd68eca$var$_255,
        0,
        0
    ],
    pink: [
        $eef254727dd68eca$var$_255,
        192,
        203
    ],
    cyan: [
        0,
        $eef254727dd68eca$var$_255,
        $eef254727dd68eca$var$_255
    ],
    transparent: [
        $eef254727dd68eca$var$_255,
        $eef254727dd68eca$var$_255,
        $eef254727dd68eca$var$_255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
$eef254727dd68eca$var$_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * $eef254727dd68eca$var$_255 + .5 | 0;
}, $eef254727dd68eca$export$73d6f35be992df24 = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? $eef254727dd68eca$var$_colorLookup.black : $eef254727dd68eca$var$_isNumber(v) ? [
        v >> 16,
        v >> 8 & $eef254727dd68eca$var$_255,
        v & $eef254727dd68eca$var$_255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if ($eef254727dd68eca$var$_colorLookup[v]) a = $eef254727dd68eca$var$_colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & $eef254727dd68eca$var$_255,
                    a & $eef254727dd68eca$var$_255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & $eef254727dd68eca$var$_255,
                v & $eef254727dd68eca$var$_255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match($eef254727dd68eca$var$_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = $eef254727dd68eca$var$_hue(h + 1 / 3, r, g);
                a[1] = $eef254727dd68eca$var$_hue(h, r, g);
                a[2] = $eef254727dd68eca$var$_hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match($eef254727dd68eca$export$b9d44bb6523120d6);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match($eef254727dd68eca$var$_strictNumExp) || $eef254727dd68eca$var$_colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / $eef254727dd68eca$var$_255;
        g = a[1] / $eef254727dd68eca$var$_255;
        b = a[2] / $eef254727dd68eca$var$_255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, $eef254727dd68eca$var$_colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split($eef254727dd68eca$export$dd733e62515be2bd).forEach(function(v) {
        var a = v.match($eef254727dd68eca$export$65c88bbd597e7b0a) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, $eef254727dd68eca$var$_formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match($eef254727dd68eca$export$dd733e62515be2bd), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = $eef254727dd68eca$export$73d6f35be992df24(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = $eef254727dd68eca$var$_colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace($eef254727dd68eca$export$dd733e62515be2bd, "1").split($eef254727dd68eca$export$65c88bbd597e7b0a);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split($eef254727dd68eca$export$dd733e62515be2bd);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, $eef254727dd68eca$export$dd733e62515be2bd = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in $eef254727dd68eca$var$_colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), $eef254727dd68eca$var$_hslExp = /hsl[a]?\(/, $eef254727dd68eca$export$7eb2e5eb5eeb96a4 = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    $eef254727dd68eca$export$dd733e62515be2bd.lastIndex = 0;
    if ($eef254727dd68eca$export$dd733e62515be2bd.test(combined)) {
        toHSL = $eef254727dd68eca$var$_hslExp.test(combined);
        a[1] = $eef254727dd68eca$var$_formatColors(a[1], toHSL);
        a[0] = $eef254727dd68eca$var$_formatColors(a[0], toHSL, $eef254727dd68eca$var$_colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ $eef254727dd68eca$var$_tickerActive, $eef254727dd68eca$export$762ed8fbedb691e3 = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if ($eef254727dd68eca$var$_coreReady) {
                if (!$eef254727dd68eca$var$_coreInitted && $eef254727dd68eca$var$_windowExists()) {
                    $eef254727dd68eca$var$_win = $eef254727dd68eca$var$_coreInitted = window;
                    $eef254727dd68eca$var$_doc = $eef254727dd68eca$var$_win.document || {};
                    $eef254727dd68eca$var$_globals.gsap = $eef254727dd68eca$export$99ee26438460406a;
                    ($eef254727dd68eca$var$_win.gsapVersions || ($eef254727dd68eca$var$_win.gsapVersions = [])).push($eef254727dd68eca$export$99ee26438460406a.version);
                    $eef254727dd68eca$var$_install($eef254727dd68eca$var$_installScope || $eef254727dd68eca$var$_win.GreenSockGlobals || !$eef254727dd68eca$var$_win.gsap && $eef254727dd68eca$var$_win || {});
                    _raf = $eef254727dd68eca$var$_win.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                $eef254727dd68eca$var$_tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? $eef254727dd68eca$var$_win.cancelAnimationFrame : clearTimeout)(_id);
            $eef254727dd68eca$var$_tickerActive = 0;
            _req = $eef254727dd68eca$var$_emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            $eef254727dd68eca$var$_wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), $eef254727dd68eca$var$_wake = function _wake() {
    return !$eef254727dd68eca$var$_tickerActive && $eef254727dd68eca$export$762ed8fbedb691e3.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ $eef254727dd68eca$var$_easeMap = {}, $eef254727dd68eca$var$_customEaseExp = /^[\d.\-M][\d.\-,\s]/, $eef254727dd68eca$var$_quotesExp = /["']/g, $eef254727dd68eca$var$_parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace($eef254727dd68eca$var$_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, $eef254727dd68eca$var$_valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, $eef254727dd68eca$var$_configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = $eef254727dd68eca$var$_easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        $eef254727dd68eca$var$_parseObjectInString(split[1])
    ] : $eef254727dd68eca$var$_valueInParentheses(name).split(",").map($eef254727dd68eca$var$_numericIfPossible)) : $eef254727dd68eca$var$_easeMap._CE && $eef254727dd68eca$var$_customEaseExp.test(name) ? $eef254727dd68eca$var$_easeMap._CE("", name) : ease;
}, $eef254727dd68eca$var$_invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
$eef254727dd68eca$var$_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof $eef254727dd68eca$export$e6a97ba2cae5bb94) _propagateYoyoEase(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, $eef254727dd68eca$var$_parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : ($eef254727dd68eca$var$_isFunction(ease) ? ease : $eef254727dd68eca$var$_easeMap[ease] || $eef254727dd68eca$var$_configEaseFromString(ease)) || defaultEase;
}, $eef254727dd68eca$var$_insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    $eef254727dd68eca$export$f9000b814859f126(names, function(name) {
        $eef254727dd68eca$var$_easeMap[name] = $eef254727dd68eca$var$_globals[name] = ease;
        $eef254727dd68eca$var$_easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)$eef254727dd68eca$var$_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = $eef254727dd68eca$var$_easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, $eef254727dd68eca$var$_easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, $eef254727dd68eca$var$_configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / $eef254727dd68eca$var$_2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * $eef254727dd68eca$var$_sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : $eef254727dd68eca$var$_easeInOutFromOut(easeOut);
    p2 = $eef254727dd68eca$var$_2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, $eef254727dd68eca$var$_configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) overshoot = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : $eef254727dd68eca$var$_easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
$eef254727dd68eca$export$f9000b814859f126("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    $eef254727dd68eca$var$_insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
$eef254727dd68eca$var$_easeMap.Linear.easeNone = $eef254727dd68eca$var$_easeMap.none = $eef254727dd68eca$var$_easeMap.Linear.easeIn;
$eef254727dd68eca$var$_insertEase("Elastic", $eef254727dd68eca$var$_configElastic("in"), $eef254727dd68eca$var$_configElastic("out"), $eef254727dd68eca$var$_configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    $eef254727dd68eca$var$_insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
$eef254727dd68eca$var$_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
$eef254727dd68eca$var$_insertEase("Circ", function(p) {
    return -($eef254727dd68eca$var$_sqrt(1 - p * p) - 1);
});
$eef254727dd68eca$var$_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -$eef254727dd68eca$var$_cos(p * $eef254727dd68eca$var$_HALF_PI) + 1;
});
$eef254727dd68eca$var$_insertEase("Back", $eef254727dd68eca$var$_configBack("in"), $eef254727dd68eca$var$_configBack("out"), $eef254727dd68eca$var$_configBack());
$eef254727dd68eca$var$_easeMap.SteppedEase = $eef254727dd68eca$var$_easeMap.steps = $eef254727dd68eca$var$_globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - $eef254727dd68eca$var$_tinyNum;
        return function(p) {
            return ((p2 * $eef254727dd68eca$var$_clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
$eef254727dd68eca$var$_defaults.ease = $eef254727dd68eca$var$_easeMap["quad.out"];
$eef254727dd68eca$export$f9000b814859f126("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return $eef254727dd68eca$var$_callbackNames += name + "," + name + "Params,";
});
var $eef254727dd68eca$export$cf10981d5419cad5 = function GSCache(target, harness) {
    this.id = $eef254727dd68eca$var$_gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : $eef254727dd68eca$export$51d6bbe898aef1f9;
    this.set = harness ? harness.getSetter : $eef254727dd68eca$export$d60fbc1e0278aaf0;
};
var $eef254727dd68eca$export$c35d437ae5945fcd = /*#__PURE__*/ function() {
    function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        $eef254727dd68eca$var$_setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if ($eef254727dd68eca$var$_context) {
            this._ctx = $eef254727dd68eca$var$_context;
            $eef254727dd68eca$var$_context.data.push(this);
        }
        $eef254727dd68eca$var$_tickerActive || $eef254727dd68eca$export$762ed8fbedb691e3.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return $eef254727dd68eca$var$_setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        $eef254727dd68eca$var$_wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            $eef254727dd68eca$var$_alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || $eef254727dd68eca$var$_postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            $eef254727dd68eca$var$_addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === $eef254727dd68eca$var$_tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            $eef254727dd68eca$var$_lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + $eef254727dd68eca$var$_elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + $eef254727dd68eca$var$_elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? $eef254727dd68eca$var$_animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -$eef254727dd68eca$var$_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? $eef254727dd68eca$var$_parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -$eef254727dd68eca$var$_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime($eef254727dd68eca$var$_clamp(-this._delay, this._tDur, tTime), true);
        $eef254727dd68eca$var$_setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return $eef254727dd68eca$var$_recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                $eef254727dd68eca$var$_wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== $eef254727dd68eca$var$_tinyNum && (this._tTime -= $eef254727dd68eca$var$_tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && $eef254727dd68eca$var$_addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + ($eef254727dd68eca$var$_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : $eef254727dd68eca$var$_parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
        if (config === void 0) config = $eef254727dd68eca$var$_revertConfig;
        var prevIsReverting = $eef254727dd68eca$var$_reverting;
        $eef254727dd68eca$var$_reverting = config;
        if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        $eef254727dd68eca$var$_reverting = prevIsReverting;
        return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return $eef254727dd68eca$var$_onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            $eef254727dd68eca$var$_onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime($eef254727dd68eca$var$_parsePosition(this, position), $eef254727dd68eca$var$_isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, $eef254727dd68eca$var$_isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -$eef254727dd68eca$var$_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -$eef254727dd68eca$var$_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - $eef254727dd68eca$var$_tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = $eef254727dd68eca$var$_isFunction(onFulfilled) ? onFulfilled : $eef254727dd68eca$var$_passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                $eef254727dd68eca$var$_isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        $eef254727dd68eca$var$_interrupt(this);
    };
    return Animation;
}();
$eef254727dd68eca$export$dc2b19673bb53610($eef254727dd68eca$export$c35d437ae5945fcd.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -$eef254727dd68eca$var$_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var $eef254727dd68eca$export$e6a97ba2cae5bb94 = /*#__PURE__*/ function(_Animation) {
    $eef254727dd68eca$var$_inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
        var _this;
        if (vars === void 0) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = $eef254727dd68eca$var$_isNotFalse(vars.sortChildren);
        $eef254727dd68eca$var$_globalTimeline && $eef254727dd68eca$var$_addToTimeline(vars.parent || $eef254727dd68eca$var$_globalTimeline, $eef254727dd68eca$var$_assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && $eef254727dd68eca$var$_scrollTrigger($eef254727dd68eca$var$_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        $eef254727dd68eca$var$_createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        $eef254727dd68eca$var$_createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        $eef254727dd68eca$var$_createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        $eef254727dd68eca$var$_inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new $eef254727dd68eca$export$208a41d6b4e37b97(targets, vars, $eef254727dd68eca$var$_parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return $eef254727dd68eca$var$_addToTimeline(this, $eef254727dd68eca$export$208a41d6b4e37b97.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new $eef254727dd68eca$export$208a41d6b4e37b97(targets, vars, $eef254727dd68eca$var$_parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        $eef254727dd68eca$var$_inheritDefaults(vars).immediateRender = $eef254727dd68eca$var$_isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        $eef254727dd68eca$var$_inheritDefaults(toVars).immediateRender = $eef254727dd68eca$var$_isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : $eef254727dd68eca$var$_roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== $eef254727dd68eca$var$_globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = $eef254727dd68eca$var$_roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = $eef254727dd68eca$var$_animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : dur;
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : $eef254727dd68eca$var$_roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && $eef254727dd68eca$var$_callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    $eef254727dd68eca$var$_propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = $eef254727dd68eca$var$_findNextPauseTween(this, $eef254727dd68eca$var$_roundPrecise(prevTime), $eef254727dd68eca$var$_roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents) {
                $eef254727dd68eca$var$_callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -$eef254727dd68eca$var$_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || $eef254727dd68eca$var$_reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -$eef254727dd68eca$var$_tinyNum : $eef254727dd68eca$var$_tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -$eef254727dd68eca$var$_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    $eef254727dd68eca$var$_setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && $eef254727dd68eca$var$_callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && $eef254727dd68eca$var$_removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            $eef254727dd68eca$var$_callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        $eef254727dd68eca$var$_isNumber(position) || (position = $eef254727dd68eca$var$_parsePosition(this, position, child));
        if (!(child instanceof $eef254727dd68eca$export$c35d437ae5945fcd)) {
            if ($eef254727dd68eca$var$_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if ($eef254727dd68eca$export$f664476fd67145ca(child)) return this.addLabel(child, position);
            if ($eef254727dd68eca$var$_isFunction(child)) child = $eef254727dd68eca$export$208a41d6b4e37b97.delayedCall(0, child);
            else return this;
        }
        return this !== child ? $eef254727dd68eca$var$_addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -$eef254727dd68eca$var$_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof $eef254727dd68eca$export$208a41d6b4e37b97) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if ($eef254727dd68eca$export$f664476fd67145ca(child)) return this.removeLabel(child);
        if ($eef254727dd68eca$var$_isFunction(child)) return this.killTweensOf(child);
        $eef254727dd68eca$export$cd008aa6cd8844e3(this, child);
        if (child === this._recent) this._recent = this._last;
        return $eef254727dd68eca$var$_uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = $eef254727dd68eca$var$_roundPrecise($eef254727dd68eca$export$762ed8fbedb691e3.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = $eef254727dd68eca$var$_parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = $eef254727dd68eca$export$208a41d6b4e37b97.delayedCall(0, callback || $eef254727dd68eca$var$_emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return $eef254727dd68eca$var$_addToTimeline(this, t, $eef254727dd68eca$var$_parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = $eef254727dd68eca$var$_parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") $eef254727dd68eca$var$_removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)$eef254727dd68eca$var$_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = $eef254727dd68eca$export$45b10814cc054894(targets), child = this._first, isGlobalTime = $eef254727dd68eca$var$_isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof $eef254727dd68eca$export$208a41d6b4e37b97) {
                if ($eef254727dd68eca$var$_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!$eef254727dd68eca$var$_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = $eef254727dd68eca$var$_parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = $eef254727dd68eca$export$208a41d6b4e37b97.to(tl, $eef254727dd68eca$export$dc2b19673bb53610({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || $eef254727dd68eca$var$_tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && $eef254727dd68eca$var$_setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, $eef254727dd68eca$export$dc2b19673bb53610({
            startAt: {
                time: $eef254727dd68eca$var$_parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return $eef254727dd68eca$var$_getLabelInDirection(this, $eef254727dd68eca$var$_parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return $eef254727dd68eca$var$_getLabelInDirection(this, $eef254727dd68eca$var$_parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + $eef254727dd68eca$var$_tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return $eef254727dd68eca$var$_uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate(soft);
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return $eef254727dd68eca$var$_uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = $eef254727dd68eca$var$_bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    $eef254727dd68eca$var$_addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            $eef254727dd68eca$var$_setDuration(self, self === $eef254727dd68eca$var$_globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if ($eef254727dd68eca$var$_globalTimeline._ts) {
            $eef254727dd68eca$var$_lazySafeRender($eef254727dd68eca$var$_globalTimeline, $eef254727dd68eca$var$_parentToChildTotalTime(time, $eef254727dd68eca$var$_globalTimeline));
            $eef254727dd68eca$var$_lastRenderedFrame = $eef254727dd68eca$export$762ed8fbedb691e3.frame;
        }
        if ($eef254727dd68eca$export$762ed8fbedb691e3.frame >= $eef254727dd68eca$var$_nextGCFrame) {
            $eef254727dd68eca$var$_nextGCFrame += $eef254727dd68eca$export$4922bee768729a77.autoSleep || 120;
            var child = $eef254727dd68eca$var$_globalTimeline._first;
            if (!child || !child._ts) {
                if ($eef254727dd68eca$export$4922bee768729a77.autoSleep && $eef254727dd68eca$export$762ed8fbedb691e3._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || $eef254727dd68eca$export$762ed8fbedb691e3.sleep();
                }
            }
        }
    };
    return Timeline;
}($eef254727dd68eca$export$c35d437ae5945fcd);
$eef254727dd68eca$export$dc2b19673bb53610($eef254727dd68eca$export$e6a97ba2cae5bb94.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var $eef254727dd68eca$var$_addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new $eef254727dd68eca$export$3a67f7f44b1e838a(this._pt, target, prop, 0, 1, $eef254727dd68eca$export$c5bc8e04394ecb2, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = $eef254727dd68eca$export$d5962a97e3cde94d(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match($eef254727dd68eca$var$_complexStringNumExp) || [];
    while(result = $eef254727dd68eca$var$_complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? $eef254727dd68eca$export$dac762bc6301b560(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = $eef254727dd68eca$var$_complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if ($eef254727dd68eca$export$5a680e28b0b61bc.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, $eef254727dd68eca$var$_addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    $eef254727dd68eca$var$_isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !$eef254727dd68eca$var$_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !$eef254727dd68eca$var$_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !$eef254727dd68eca$var$_isFunction(currentValue) ? $eef254727dd68eca$var$_setterPlain : funcParam ? $eef254727dd68eca$var$_setterFuncWithParam : $eef254727dd68eca$var$_setterFunc, pt;
    if ($eef254727dd68eca$export$f664476fd67145ca(end)) {
        if (~end.indexOf("random(")) end = $eef254727dd68eca$export$d5962a97e3cde94d(end);
        if (end.charAt(1) === "=") {
            pt = $eef254727dd68eca$export$dac762bc6301b560(parsedStart, end) + ($eef254727dd68eca$export$65f2564e9a9b9222(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (!optional || parsedStart !== end || $eef254727dd68eca$var$_forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new $eef254727dd68eca$export$3a67f7f44b1e838a(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? $eef254727dd68eca$var$_renderBoolean : $eef254727dd68eca$var$_renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && $eef254727dd68eca$export$7fb54635790b59a5(prop, end);
        return $eef254727dd68eca$var$_addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || $eef254727dd68eca$export$4922bee768729a77.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
$eef254727dd68eca$var$_processVars = function _processVars(vars, index, target, targets, tween) {
    $eef254727dd68eca$var$_isFunction(vars) && (vars = $eef254727dd68eca$var$_parseFuncOrString(vars, tween, index, target, targets));
    if (!$eef254727dd68eca$var$_isObject(vars) || vars.style && vars.nodeType || $eef254727dd68eca$var$_isArray(vars) || $eef254727dd68eca$var$_isTypedArray(vars)) return $eef254727dd68eca$export$f664476fd67145ca(vars) ? $eef254727dd68eca$var$_parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {}, p;
    for(p in vars)copy[p] = $eef254727dd68eca$var$_parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, $eef254727dd68eca$export$5c457b74208010cf = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if ($eef254727dd68eca$export$d305d8ec5d7c26b8[property] && (plugin = new $eef254727dd68eca$export$d305d8ec5d7c26b8[property]()).init(target, plugin.rawVars ? vars[property] : $eef254727dd68eca$var$_processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new $eef254727dd68eca$export$3a67f7f44b1e838a(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== $eef254727dd68eca$var$_quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, $eef254727dd68eca$var$_overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
$eef254727dd68eca$var$_forceAllPropTweens, $eef254727dd68eca$var$_initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !$eef254727dd68eca$var$_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = $eef254727dd68eca$var$_parseEase(ease, $eef254727dd68eca$var$_defaults.ease);
    tween._yEase = yoyoEase ? $eef254727dd68eca$var$_invertEase($eef254727dd68eca$var$_parseEase(yoyoEase === true ? ease : yoyoEase, $eef254727dd68eca$var$_defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? $eef254727dd68eca$export$8b9be379d2de2a39(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = $eef254727dd68eca$var$_copyExcluding(vars, $eef254727dd68eca$var$_reservedProps);
        if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? $eef254727dd68eca$var$_revertConfigNoKill : $eef254727dd68eca$var$_startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
            // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            $eef254727dd68eca$var$_removeFromParent(tween._startAt = $eef254727dd68eca$export$208a41d6b4e37b97.set(targets, $eef254727dd68eca$export$dc2b19673bb53610({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: !prevStartAt && $eef254727dd68eca$var$_isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.
            tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween
            time < 0 && ($eef254727dd68eca$var$_reverting || !immediateRender && !autoRevert) && tween._startAt.revert($eef254727dd68eca$var$_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                    // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (runBackwards && dur) //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        {
            if (!prevStartAt) {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = $eef254727dd68eca$export$dc2b19673bb53610({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && !prevStartAt && $eef254727dd68eca$var$_isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                $eef254727dd68eca$var$_removeFromParent(tween._startAt = $eef254727dd68eca$export$208a41d6b4e37b97.set(targets, p));
                tween._startAt._dp = 0; // don't allow it to get put back into root timeline!
                tween._startAt._sat = tween; // used in globalTime()
                time < 0 && ($eef254727dd68eca$var$_reverting ? tween._startAt.revert($eef254727dd68eca$var$_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) _initTween(tween._startAt, $eef254727dd68eca$var$_tinyNum, $eef254727dd68eca$var$_tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && $eef254727dd68eca$var$_isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || $eef254727dd68eca$var$_harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            $eef254727dd68eca$var$_lazyLookup[gsData.id] && $eef254727dd68eca$var$_lazyTweens.length && $eef254727dd68eca$var$_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new $eef254727dd68eca$export$3a67f7f44b1e838a(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if ($eef254727dd68eca$export$d305d8ec5d7c26b8[p] && (plugin = $eef254727dd68eca$export$5c457b74208010cf(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = $eef254727dd68eca$var$_addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                $eef254727dd68eca$var$_overwritingTween = tween;
                $eef254727dd68eca$var$_globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                $eef254727dd68eca$var$_overwritingTween = 0;
            }
            tween._pt && lazy && ($eef254727dd68eca$var$_lazyLookup[gsData.id] = 1);
        }
        hasPriority && $eef254727dd68eca$export$eed5824f53346d57(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render($eef254727dd68eca$var$_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, $eef254727dd68eca$var$_updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property && pt.fp !== property)// "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
                pt = pt._next;
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                $eef254727dd68eca$var$_forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                $eef254727dd68eca$var$_initTween(tween, time);
                $eef254727dd68eca$var$_forceAllPropTweens = 0;
                return 1;
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = $eef254727dd68eca$export$9c8d725d65e13f94(value) + $eef254727dd68eca$export$65f2564e9a9b9222(rootPT.e)); // mainly for CSSPlugin (end value)
        rootPT.b && (rootPT.b = pt.s + $eef254727dd68eca$export$65f2564e9a9b9222(rootPT.b)); // (beginning value)
    }
}, $eef254727dd68eca$var$_addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? $eef254727dd68eca$export$8b9be379d2de2a39(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = $eef254727dd68eca$var$_merge({}, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
$eef254727dd68eca$var$_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if ($eef254727dd68eca$var$_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, $eef254727dd68eca$var$_parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return $eef254727dd68eca$var$_isFunction(value) ? value.call(tween, i, target, targets) : $eef254727dd68eca$export$f664476fd67145ca(value) && ~value.indexOf("random(") ? $eef254727dd68eca$export$d5962a97e3cde94d(value) : value;
}, $eef254727dd68eca$var$_staggerTweenProps = $eef254727dd68eca$var$_callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $eef254727dd68eca$var$_staggerPropsToSkip = {};
$eef254727dd68eca$export$f9000b814859f126($eef254727dd68eca$var$_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return $eef254727dd68eca$var$_staggerPropsToSkip[name] = 1;
});
var $eef254727dd68eca$export$208a41d6b4e37b97 = /*#__PURE__*/ function(_Animation2) {
    $eef254727dd68eca$var$_inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : $eef254727dd68eca$var$_inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || $eef254727dd68eca$var$_globalTimeline, parsedTargets = ($eef254727dd68eca$var$_isArray(targets) || $eef254727dd68eca$var$_isTypedArray(targets) ? $eef254727dd68eca$var$_isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : $eef254727dd68eca$export$45b10814cc054894(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? $eef254727dd68eca$var$_harness(parsedTargets) : $eef254727dd68eca$var$_warn("GSAP target " + targets + " not found. https://greensock.com", !$eef254727dd68eca$export$4922bee768729a77.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || $eef254727dd68eca$var$_isFuncOrString(duration) || $eef254727dd68eca$var$_isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new $eef254727dd68eca$export$e6a97ba2cae5bb94({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.
            tl.kill();
            tl.parent = tl._dp = $eef254727dd68eca$var$_assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || $eef254727dd68eca$var$_isFuncOrString(duration) || $eef254727dd68eca$var$_isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && $eef254727dd68eca$export$f02a9ddbe4480f19(stagger);
                if ($eef254727dd68eca$var$_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~$eef254727dd68eca$var$_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {});
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = $eef254727dd68eca$var$_copyExcluding(vars, $eef254727dd68eca$var$_staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && $eef254727dd68eca$var$_merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +$eef254727dd68eca$var$_parseFuncOrString(duration, $eef254727dd68eca$var$_assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+$eef254727dd68eca$var$_parseFuncOrString(delay, $eef254727dd68eca$var$_assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = $eef254727dd68eca$var$_easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                $eef254727dd68eca$var$_inheritDefaults($eef254727dd68eca$export$dc2b19673bb53610(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = $eef254727dd68eca$var$_parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if ($eef254727dd68eca$var$_isArray(keyframes)) {
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                    tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
                } else {
                    copy = {};
                    for(p in keyframes)p === "ease" || p === "easeEach" || $eef254727dd68eca$var$_parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a.length; i++){
                            kf = a[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !$eef254727dd68eca$var$_suppressOverwrites) {
            $eef254727dd68eca$var$_overwritingTween = $eef254727dd68eca$var$_assertThisInitialized(_this3);
            $eef254727dd68eca$var$_globalTimeline.killTweensOf(parsedTargets);
            $eef254727dd68eca$var$_overwritingTween = 0;
        }
        $eef254727dd68eca$var$_addToTimeline(parent, $eef254727dd68eca$var$_assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === $eef254727dd68eca$var$_roundPrecise(parent._time) && $eef254727dd68eca$var$_isNotFalse(immediateRender) && $eef254727dd68eca$var$_hasNoPausedAncestors($eef254727dd68eca$var$_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -$eef254727dd68eca$var$_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
        }
        scrollTrigger && $eef254727dd68eca$var$_scrollTrigger($eef254727dd68eca$var$_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - $eef254727dd68eca$var$_tinyNum && !isNegative ? tDur : totalTime < $eef254727dd68eca$var$_tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) $eef254727dd68eca$var$_renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = $eef254727dd68eca$var$_roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = $eef254727dd68eca$var$_animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && $eef254727dd68eca$var$_propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render($eef254727dd68eca$var$_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if ($eef254727dd68eca$var$_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time) // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
                return this;
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents) {
                $eef254727dd68eca$var$_callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -$eef254727dd68eca$var$_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                isNegative && $eef254727dd68eca$var$_rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                $eef254727dd68eca$var$_callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && $eef254727dd68eca$var$_callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && $eef254727dd68eca$var$_rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && $eef254727dd68eca$var$_removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    $eef254727dd68eca$var$_callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
        // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
        $eef254727dd68eca$var$_tickerActive || $eef254727dd68eca$export$762ed8fbedb691e3.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || $eef254727dd68eca$var$_initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if ($eef254727dd68eca$var$_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         //}
        $eef254727dd68eca$var$_alignPlayhead(this, 0);
        this.parent || $eef254727dd68eca$var$_addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? $eef254727dd68eca$var$_interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, $eef254727dd68eca$var$_overwritingTween && $eef254727dd68eca$var$_overwritingTween.vars.overwrite !== true)._first || $eef254727dd68eca$var$_interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && $eef254727dd68eca$var$_setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? $eef254727dd68eca$export$45b10814cc054894(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && $eef254727dd68eca$var$_arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return $eef254727dd68eca$var$_interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if ($eef254727dd68eca$export$f664476fd67145ca(vars)) {
                p = {};
                $eef254727dd68eca$export$f9000b814859f126(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = $eef254727dd68eca$var$_addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) $eef254727dd68eca$export$cd008aa6cd8844e3(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && $eef254727dd68eca$var$_interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return $eef254727dd68eca$var$_createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return $eef254727dd68eca$var$_createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return $eef254727dd68eca$var$_globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}($eef254727dd68eca$export$c35d437ae5945fcd);
$eef254727dd68eca$export$dc2b19673bb53610($eef254727dd68eca$export$208a41d6b4e37b97.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
$eef254727dd68eca$export$f9000b814859f126("staggerTo,staggerFrom,staggerFromTo", function(name) {
    $eef254727dd68eca$export$208a41d6b4e37b97[name] = function() {
        var tl = new $eef254727dd68eca$export$e6a97ba2cae5bb94(), params = $eef254727dd68eca$var$_slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var $eef254727dd68eca$var$_setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, $eef254727dd68eca$var$_setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, $eef254727dd68eca$var$_setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, $eef254727dd68eca$var$_setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, $eef254727dd68eca$export$d60fbc1e0278aaf0 = function _getSetter(target, property) {
    return $eef254727dd68eca$var$_isFunction(target[property]) ? $eef254727dd68eca$var$_setterFunc : $eef254727dd68eca$export$a8178c063a9fd3a1(target[property]) && target.setAttribute ? $eef254727dd68eca$var$_setterAttribute : $eef254727dd68eca$var$_setterPlain;
}, $eef254727dd68eca$var$_renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, $eef254727dd68eca$var$_renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, $eef254727dd68eca$export$c5bc8e04394ecb2 = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, $eef254727dd68eca$var$_renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, $eef254727dd68eca$var$_addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, $eef254727dd68eca$var$_killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) $eef254727dd68eca$export$cd008aa6cd8844e3(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, $eef254727dd68eca$var$_setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, $eef254727dd68eca$export$eed5824f53346d57 = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var $eef254727dd68eca$export$3a67f7f44b1e838a = /*#__PURE__*/ function() {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || $eef254727dd68eca$var$_renderPlain;
        this.d = data || this;
        this.set = setter || $eef254727dd68eca$var$_setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = $eef254727dd68eca$var$_setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
$eef254727dd68eca$export$f9000b814859f126($eef254727dd68eca$var$_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return $eef254727dd68eca$var$_reservedProps[name] = 1;
});
$eef254727dd68eca$var$_globals.TweenMax = $eef254727dd68eca$var$_globals.TweenLite = $eef254727dd68eca$export$208a41d6b4e37b97;
$eef254727dd68eca$var$_globals.TimelineLite = $eef254727dd68eca$var$_globals.TimelineMax = $eef254727dd68eca$export$e6a97ba2cae5bb94;
$eef254727dd68eca$var$_globalTimeline = new $eef254727dd68eca$export$e6a97ba2cae5bb94({
    sortChildren: false,
    defaults: $eef254727dd68eca$var$_defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
$eef254727dd68eca$export$4922bee768729a77.stringFilter = $eef254727dd68eca$export$7eb2e5eb5eeb96a4;
var $eef254727dd68eca$var$_media = [], $eef254727dd68eca$var$_listeners = {}, $eef254727dd68eca$var$_emptyArray = [], $eef254727dd68eca$var$_lastMediaTime = 0, $eef254727dd68eca$var$_dispatch = function _dispatch(type) {
    return ($eef254727dd68eca$var$_listeners[type] || $eef254727dd68eca$var$_emptyArray).map(function(f) {
        return f();
    });
}, $eef254727dd68eca$var$_onMediaChange = function _onMediaChange() {
    var time = Date.now(), matches = [];
    if (time - $eef254727dd68eca$var$_lastMediaTime > 2) {
        $eef254727dd68eca$var$_dispatch("matchMediaInit");
        $eef254727dd68eca$var$_media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for(p in queries){
                match = $eef254727dd68eca$var$_win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                    conditions[p] = match;
                    toggled = 1;
                }
            }
            if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
            }
        });
        $eef254727dd68eca$var$_dispatch("matchMediaRevert");
        matches.forEach(function(c) {
            return c.onMatch(c);
        });
        $eef254727dd68eca$var$_lastMediaTime = time;
        $eef254727dd68eca$var$_dispatch("matchMedia");
    }
};
var $eef254727dd68eca$var$Context = /*#__PURE__*/ function() {
    function Context(func, scope) {
        this.selector = scope && $eef254727dd68eca$export$aea217a45095ce11(scope);
        this.data = [];
        this._r = []; // returned/cleanup functions
        this.isReverted = false;
        func && this.add(func);
    }
    var _proto5 = Context.prototype;
    _proto5.add = function add(name, func, scope) {
        // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
        // if (name && _isFunction(name.revert)) {
        // 	this.data.push(name);
        // 	return (name._ctx = this);
        // }
        if ($eef254727dd68eca$var$_isFunction(name)) {
            scope = func;
            func = name;
            name = $eef254727dd68eca$var$_isFunction;
        }
        var self = this, f = function f() {
            var prev = $eef254727dd68eca$var$_context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = $eef254727dd68eca$export$aea217a45095ce11(scope));
            $eef254727dd68eca$var$_context = self;
            result = func.apply(self, arguments);
            $eef254727dd68eca$var$_isFunction(result) && self._r.push(result);
            $eef254727dd68eca$var$_context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
        };
        self.last = f;
        return name === $eef254727dd68eca$var$_isFunction ? f(self) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
        var prev = $eef254727dd68eca$var$_context;
        $eef254727dd68eca$var$_context = null;
        func(this);
        $eef254727dd68eca$var$_context = prev;
    };
    _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof $eef254727dd68eca$export$208a41d6b4e37b97 && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
    };
    _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) {
            var tweens = this.getTweens();
            this.data.forEach(function(t) {
                // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
                if (t.data === "isFlip") {
                    t.revert();
                    t.getChildren(true, true, false).forEach(function(tween) {
                        return tweens.splice(tweens.indexOf(tween), 1);
                    });
                }
            }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
            tweens.map(function(t) {
                return {
                    g: t.globalTime(0),
                    t: t
                };
            }).sort(function(a, b) {
                return b.g - a.g || -1;
            }).forEach(function(o) {
                return o.t.revert(revert);
            }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.
            this.data.forEach(function(e) {
                return !(e instanceof $eef254727dd68eca$export$c35d437ae5945fcd) && e.revert && e.revert(revert);
            });
            this._r.forEach(function(f) {
                return f(revert, _this4);
            });
            this.isReverted = true;
        } else this.data.forEach(function(e) {
            return e.kill && e.kill();
        });
        this.clear();
        if (matchMedia) {
            var i = $eef254727dd68eca$var$_media.indexOf(this);
            !!~i && $eef254727dd68eca$var$_media.splice(i, 1);
        }
    };
    _proto5.revert = function revert(config) {
        this.kill(config || {});
    };
    return Context;
}();
var $eef254727dd68eca$var$MatchMedia = /*#__PURE__*/ function() {
    function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
    }
    var _proto6 = MatchMedia.prototype;
    _proto6.add = function add(conditions, func, scope) {
        $eef254727dd68eca$var$_isObject(conditions) || (conditions = {
            matches: conditions
        });
        var context = new $eef254727dd68eca$var$Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for(p in conditions)if (p === "all") active = 1;
        else {
            mq = $eef254727dd68eca$var$_win.matchMedia(conditions[p]);
            if (mq) {
                $eef254727dd68eca$var$_media.indexOf(context) < 0 && $eef254727dd68eca$var$_media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener($eef254727dd68eca$var$_onMediaChange) : mq.addEventListener("change", $eef254727dd68eca$var$_onMediaChange);
            }
        }
        active && func(context);
        return this;
    } // refresh() {
    ;
    _proto6.revert = function revert(config) {
        this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
            return c.kill(revert, true);
        });
    };
    return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var $eef254727dd68eca$var$_gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return $eef254727dd68eca$var$_createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new $eef254727dd68eca$export$e6a97ba2cae5bb94(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return $eef254727dd68eca$var$_globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        $eef254727dd68eca$export$f664476fd67145ca(target) && (target = $eef254727dd68eca$export$45b10814cc054894(target)[0]); //in case selector text or an array is passed in
        var getter = $eef254727dd68eca$export$8b9be379d2de2a39(target || {}).get, format = unit ? $eef254727dd68eca$var$_passThrough : $eef254727dd68eca$var$_numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property, unit, uncache) {
            return format(($eef254727dd68eca$export$d305d8ec5d7c26b8[property] && $eef254727dd68eca$export$d305d8ec5d7c26b8[property].get || getter)(target, property, unit, uncache));
        } : format(($eef254727dd68eca$export$d305d8ec5d7c26b8[property] && $eef254727dd68eca$export$d305d8ec5d7c26b8[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = $eef254727dd68eca$export$45b10814cc054894(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return $eef254727dd68eca$export$99ee26438460406a.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {};
        var Plugin = $eef254727dd68eca$export$d305d8ec5d7c26b8[property], cache = $eef254727dd68eca$export$8b9be379d2de2a39(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            $eef254727dd68eca$var$_quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, $eef254727dd68eca$var$_quickTween, 0, [
                target
            ]);
            p.render(1, p);
            $eef254727dd68eca$var$_quickTween._pt && $eef254727dd68eca$var$_renderPropTweens(1, $eef254727dd68eca$var$_quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = $eef254727dd68eca$export$99ee26438460406a.to(target, $eef254727dd68eca$var$_merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return $eef254727dd68eca$var$_globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = $eef254727dd68eca$var$_parseEase(value.ease, $eef254727dd68eca$var$_defaults.ease));
        return $eef254727dd68eca$var$_mergeDeep($eef254727dd68eca$var$_defaults, value || {});
    },
    config: function config(value) {
        return $eef254727dd68eca$var$_mergeDeep($eef254727dd68eca$export$4922bee768729a77, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !$eef254727dd68eca$export$d305d8ec5d7c26b8[pluginName] && !$eef254727dd68eca$var$_globals[pluginName] && $eef254727dd68eca$var$_warn(name + " effect requires " + pluginName + " plugin.");
        });
        $eef254727dd68eca$var$_effects[name] = function(targets, vars, tl) {
            return effect($eef254727dd68eca$export$45b10814cc054894(targets), $eef254727dd68eca$export$dc2b19673bb53610(vars || {}, defaults), tl);
        };
        if (extendTimeline) $eef254727dd68eca$export$e6a97ba2cae5bb94.prototype[name] = function(targets, vars, position) {
            return this.add($eef254727dd68eca$var$_effects[name](targets, $eef254727dd68eca$var$_isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        $eef254727dd68eca$var$_easeMap[name] = $eef254727dd68eca$var$_parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? $eef254727dd68eca$var$_parseEase(ease, defaultEase) : $eef254727dd68eca$var$_easeMap;
    },
    getById: function getById(id) {
        return $eef254727dd68eca$var$_globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {};
        var tl = new $eef254727dd68eca$export$e6a97ba2cae5bb94(vars), child, next;
        tl.smoothChildTiming = $eef254727dd68eca$var$_isNotFalse(vars.smoothChildTiming);
        $eef254727dd68eca$var$_globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = $eef254727dd68eca$var$_globalTimeline._time;
        child = $eef254727dd68eca$var$_globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof $eef254727dd68eca$export$208a41d6b4e37b97 && child.vars.onComplete === child._targets[0])) $eef254727dd68eca$var$_addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        $eef254727dd68eca$var$_addToTimeline($eef254727dd68eca$var$_globalTimeline, tl, 0);
        return tl;
    },
    context: function context(func, scope) {
        return func ? new $eef254727dd68eca$var$Context(func, scope) : $eef254727dd68eca$var$_context;
    },
    matchMedia: function matchMedia(scope) {
        return new $eef254727dd68eca$var$MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
        return $eef254727dd68eca$var$_media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for(p in cond)if (cond[p]) {
                cond[p] = false;
                found = 1;
            }
            found && c.revert();
        }) || $eef254727dd68eca$var$_onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
        var a = $eef254727dd68eca$var$_listeners[type] || ($eef254727dd68eca$var$_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
        var a = $eef254727dd68eca$var$_listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    },
    utils: {
        wrap: $eef254727dd68eca$export$4997ffc0176396a6,
        wrapYoyo: $eef254727dd68eca$export$cfc0b067273edc55,
        distribute: $eef254727dd68eca$export$f02a9ddbe4480f19,
        random: $eef254727dd68eca$export$4385e60b38654f68,
        snap: $eef254727dd68eca$export$51a0620f7a28532b,
        normalize: $eef254727dd68eca$export$a3295358bff77e,
        getUnit: $eef254727dd68eca$export$65f2564e9a9b9222,
        clamp: $eef254727dd68eca$export$7d15b64cf5a3a4c4,
        splitColor: $eef254727dd68eca$export$73d6f35be992df24,
        toArray: $eef254727dd68eca$export$45b10814cc054894,
        selector: $eef254727dd68eca$export$aea217a45095ce11,
        mapRange: $eef254727dd68eca$export$f65a7599bbc6b121,
        pipe: $eef254727dd68eca$export$a4627e546088548d,
        unitize: $eef254727dd68eca$export$d7502930aa5492de,
        interpolate: $eef254727dd68eca$export$89e29e4ab65e70a9,
        shuffle: $eef254727dd68eca$export$448332262467e042
    },
    install: $eef254727dd68eca$var$_install,
    effects: $eef254727dd68eca$var$_effects,
    ticker: $eef254727dd68eca$export$762ed8fbedb691e3,
    updateRoot: $eef254727dd68eca$export$e6a97ba2cae5bb94.updateRoot,
    plugins: $eef254727dd68eca$export$d305d8ec5d7c26b8,
    globalTimeline: $eef254727dd68eca$var$_globalTimeline,
    core: {
        PropTween: $eef254727dd68eca$export$3a67f7f44b1e838a,
        globals: $eef254727dd68eca$var$_addGlobal,
        Tween: $eef254727dd68eca$export$208a41d6b4e37b97,
        Timeline: $eef254727dd68eca$export$e6a97ba2cae5bb94,
        Animation: $eef254727dd68eca$export$c35d437ae5945fcd,
        getCache: $eef254727dd68eca$export$8b9be379d2de2a39,
        _removeLinkedListItem: $eef254727dd68eca$export$cd008aa6cd8844e3,
        reverting: function reverting() {
            return $eef254727dd68eca$var$_reverting;
        },
        context: function context(toAdd) {
            if (toAdd && $eef254727dd68eca$var$_context) {
                $eef254727dd68eca$var$_context.data.push(toAdd);
                toAdd._ctx = $eef254727dd68eca$var$_context;
            }
            return $eef254727dd68eca$var$_context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
            return $eef254727dd68eca$var$_suppressOverwrites = value;
        }
    }
};
$eef254727dd68eca$export$f9000b814859f126("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return $eef254727dd68eca$var$_gsap[name] = $eef254727dd68eca$export$208a41d6b4e37b97[name];
});
$eef254727dd68eca$export$762ed8fbedb691e3.add($eef254727dd68eca$export$e6a97ba2cae5bb94.updateRoot);
$eef254727dd68eca$var$_quickTween = $eef254727dd68eca$var$_gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var $eef254727dd68eca$var$_getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, $eef254727dd68eca$var$_addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = $eef254727dd68eca$var$_getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, $eef254727dd68eca$var$_buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function(tween) {
                var temp, p;
                if ($eef254727dd68eca$export$f664476fd67145ca(vars)) {
                    temp = {};
                    $eef254727dd68eca$export$f9000b814859f126(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                $eef254727dd68eca$var$_addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var $eef254727dd68eca$export$99ee26438460406a = $eef254727dd68eca$var$_gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for(p in vars){
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v; // record the beginning value so we can revert()
            this._props.push(p);
        }
    },
    render: function render(ratio, data) {
        var pt = data._pt;
        while(pt){
            $eef254727dd68eca$var$_reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)
            pt = pt._next;
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
}, $eef254727dd68eca$var$_buildModifierPlugin("roundProps", $eef254727dd68eca$export$dd12390e6b265a17), $eef254727dd68eca$var$_buildModifierPlugin("modifiers"), $eef254727dd68eca$var$_buildModifierPlugin("snap", $eef254727dd68eca$export$51a0620f7a28532b)) || $eef254727dd68eca$var$_gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
$eef254727dd68eca$export$208a41d6b4e37b97.version = $eef254727dd68eca$export$e6a97ba2cae5bb94.version = $eef254727dd68eca$export$99ee26438460406a.version = "3.11.4";
$eef254727dd68eca$var$_coreReady = 1;
$eef254727dd68eca$var$_windowExists() && $eef254727dd68eca$var$_wake();
var $eef254727dd68eca$export$2fae1e8613537d5f = $eef254727dd68eca$var$_easeMap.Power0, $eef254727dd68eca$export$5d84ab4efbecec39 = $eef254727dd68eca$var$_easeMap.Power1, $eef254727dd68eca$export$d8c694b7490ad65d = $eef254727dd68eca$var$_easeMap.Power2, $eef254727dd68eca$export$acebdf2b184a0b6f = $eef254727dd68eca$var$_easeMap.Power3, $eef254727dd68eca$export$42e40a141003d2f0 = $eef254727dd68eca$var$_easeMap.Power4, $eef254727dd68eca$export$cff00ccf6e2392de = $eef254727dd68eca$var$_easeMap.Linear, $eef254727dd68eca$export$7005c9eb6671414d = $eef254727dd68eca$var$_easeMap.Quad, $eef254727dd68eca$export$755261d5a1567778 = $eef254727dd68eca$var$_easeMap.Cubic, $eef254727dd68eca$export$daf531446cad3d2a = $eef254727dd68eca$var$_easeMap.Quart, $eef254727dd68eca$export$4c407d38ce8ad8cc = $eef254727dd68eca$var$_easeMap.Quint, $eef254727dd68eca$export$f301627d437cff88 = $eef254727dd68eca$var$_easeMap.Strong, $eef254727dd68eca$export$56ebabebb04a9ca9 = $eef254727dd68eca$var$_easeMap.Elastic, $eef254727dd68eca$export$25e48ac541203d4a = $eef254727dd68eca$var$_easeMap.Back, $eef254727dd68eca$export$f7a11c7543d81853 = $eef254727dd68eca$var$_easeMap.SteppedEase, $eef254727dd68eca$export$d20e79fdc3899e95 = $eef254727dd68eca$var$_easeMap.Bounce, $eef254727dd68eca$export$bed2d20ad96b784c = $eef254727dd68eca$var$_easeMap.Sine, $eef254727dd68eca$export$41e9d1ff1a2fb15a = $eef254727dd68eca$var$_easeMap.Expo, $eef254727dd68eca$export$ce49a57dd865b86c = $eef254727dd68eca$var$_easeMap.Circ;

});

parcelRequire.register("7xoBs", function(module, exports) {

$parcel$export(module.exports, "CSSPlugin", function () { return $57ceb3254e6e0ac9$export$855822f522f18eef; });
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ 
var $kvUf5 = parcelRequire("kvUf5");
var $57ceb3254e6e0ac9$var$_win, $57ceb3254e6e0ac9$var$_doc, $57ceb3254e6e0ac9$var$_docElement, $57ceb3254e6e0ac9$var$_pluginInitted, $57ceb3254e6e0ac9$var$_tempDiv, $57ceb3254e6e0ac9$var$_tempDivStyler, $57ceb3254e6e0ac9$var$_recentSetterPlugin, $57ceb3254e6e0ac9$var$_reverting, $57ceb3254e6e0ac9$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $57ceb3254e6e0ac9$var$_transformProps = {}, $57ceb3254e6e0ac9$var$_RAD2DEG = 180 / Math.PI, $57ceb3254e6e0ac9$var$_DEG2RAD = Math.PI / 180, $57ceb3254e6e0ac9$var$_atan2 = Math.atan2, $57ceb3254e6e0ac9$var$_bigNum = 1e8, $57ceb3254e6e0ac9$var$_capsExp = /([A-Z])/g, $57ceb3254e6e0ac9$var$_horizontalExp = /(left|right|width|margin|padding|x)/i, $57ceb3254e6e0ac9$var$_complexExp = /[\s,\(]\S/, $57ceb3254e6e0ac9$var$_propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, $57ceb3254e6e0ac9$var$_renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, $57ceb3254e6e0ac9$var$_renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, $57ceb3254e6e0ac9$var$_renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
$57ceb3254e6e0ac9$var$_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
}, $57ceb3254e6e0ac9$var$_renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, $57ceb3254e6e0ac9$var$_renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, $57ceb3254e6e0ac9$var$_setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, $57ceb3254e6e0ac9$var$_setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, $57ceb3254e6e0ac9$var$_setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, $57ceb3254e6e0ac9$var$_setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, $57ceb3254e6e0ac9$var$_setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, $57ceb3254e6e0ac9$var$_setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, $57ceb3254e6e0ac9$var$_transformProp = "transform", $57ceb3254e6e0ac9$var$_transformOriginProp = $57ceb3254e6e0ac9$var$_transformProp + "Origin", $57ceb3254e6e0ac9$var$_saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in $57ceb3254e6e0ac9$var$_transformProps) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
            property = $57ceb3254e6e0ac9$var$_propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = $57ceb3254e6e0ac9$var$_get(target, a);
            }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : $57ceb3254e6e0ac9$var$_get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
        }
        if (this.props.indexOf($57ceb3254e6e0ac9$var$_transformProp) >= 0) return;
        if (target._gsap.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push($57ceb3254e6e0ac9$var$_transformOriginProp, isNotCSS, "");
        }
        property = $57ceb3254e6e0ac9$var$_transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, $57ceb3254e6e0ac9$var$_removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, $57ceb3254e6e0ac9$var$_revertStyle = function _revertStyle() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for(i = 0; i < props.length; i += 3)// stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace($57ceb3254e6e0ac9$var$_capsExp, "-$1").toLowerCase());
    if (this.tfm) {
        for(p in this.tfm)cache[p] = this.tfm[p];
        if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = $57ceb3254e6e0ac9$var$_reverting();
        if (i && !i.isStart && !style[$57ceb3254e6e0ac9$var$_transformProp]) {
            $57ceb3254e6e0ac9$var$_removeIndependentTransforms(style);
            cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
        }
    }
}, $57ceb3254e6e0ac9$var$_getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
        target: target,
        props: [],
        revert: $57ceb3254e6e0ac9$var$_revertStyle,
        save: $57ceb3254e6e0ac9$var$_saveStyle
    };
    properties && properties.split(",").forEach(function(p) {
        return saver.save(p);
    });
    return saver;
}, $57ceb3254e6e0ac9$var$_supports3D, $57ceb3254e6e0ac9$export$a232bb0480ae674a = function _createElement(type, ns) {
    var e = $57ceb3254e6e0ac9$var$_doc.createElementNS ? $57ceb3254e6e0ac9$var$_doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : $57ceb3254e6e0ac9$var$_doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : $57ceb3254e6e0ac9$var$_doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, $57ceb3254e6e0ac9$var$_getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace($57ceb3254e6e0ac9$var$_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, $57ceb3254e6e0ac9$export$8cbef5dd49a09c8b(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, $57ceb3254e6e0ac9$var$_prefixes = "O,Moz,ms,Ms,Webkit".split(","), $57ceb3254e6e0ac9$export$8cbef5dd49a09c8b = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || $57ceb3254e6e0ac9$var$_tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while(i-- && !($57ceb3254e6e0ac9$var$_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? $57ceb3254e6e0ac9$var$_prefixes[i] : "") + property;
}, $57ceb3254e6e0ac9$var$_initCore = function _initCore() {
    if ($57ceb3254e6e0ac9$var$_windowExists() && window.document) {
        $57ceb3254e6e0ac9$var$_win = window;
        $57ceb3254e6e0ac9$var$_doc = $57ceb3254e6e0ac9$var$_win.document;
        $57ceb3254e6e0ac9$var$_docElement = $57ceb3254e6e0ac9$var$_doc.documentElement;
        $57ceb3254e6e0ac9$var$_tempDiv = $57ceb3254e6e0ac9$export$a232bb0480ae674a("div") || {
            style: {}
        };
        $57ceb3254e6e0ac9$var$_tempDivStyler = $57ceb3254e6e0ac9$export$a232bb0480ae674a("div");
        $57ceb3254e6e0ac9$var$_transformProp = $57ceb3254e6e0ac9$export$8cbef5dd49a09c8b($57ceb3254e6e0ac9$var$_transformProp);
        $57ceb3254e6e0ac9$var$_transformOriginProp = $57ceb3254e6e0ac9$var$_transformProp + "Origin";
        $57ceb3254e6e0ac9$var$_tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        $57ceb3254e6e0ac9$var$_supports3D = !!$57ceb3254e6e0ac9$export$8cbef5dd49a09c8b("perspective");
        $57ceb3254e6e0ac9$var$_reverting = (0, $kvUf5.gsap).core.reverting;
        $57ceb3254e6e0ac9$var$_pluginInitted = 1;
    }
}, $57ceb3254e6e0ac9$var$_getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = $57ceb3254e6e0ac9$export$a232bb0480ae674a("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    $57ceb3254e6e0ac9$var$_docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack;
    } catch (e) {}
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    $57ceb3254e6e0ac9$var$_docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, $57ceb3254e6e0ac9$var$_getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, $57ceb3254e6e0ac9$export$41bc7c2d1e04f11b = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = $57ceb3254e6e0ac9$var$_getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === $57ceb3254e6e0ac9$var$_getBBoxHack || (bounds = $57ceb3254e6e0ac9$var$_getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +$57ceb3254e6e0ac9$var$_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +$57ceb3254e6e0ac9$var$_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, $57ceb3254e6e0ac9$var$_isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && $57ceb3254e6e0ac9$export$41bc7c2d1e04f11b(e));
}, //reports if the element is an SVG on which getBBox() actually works
$57ceb3254e6e0ac9$var$_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in $57ceb3254e6e0ac9$var$_transformProps && property !== $57ceb3254e6e0ac9$var$_transformOriginProp) property = $57ceb3254e6e0ac9$var$_transformProp;
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(property.replace($57ceb3254e6e0ac9$var$_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, $57ceb3254e6e0ac9$var$_addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new (0, $kvUf5.PropTween)(plugin._pt, target, property, 0, 1, onlySetAtEnd ? $57ceb3254e6e0ac9$var$_renderNonTweeningValueOnlyAtEnd : $57ceb3254e6e0ac9$var$_renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, $57ceb3254e6e0ac9$var$_nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, $57ceb3254e6e0ac9$var$_nonStandardLayouts = {
    grid: 1,
    flex: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
$57ceb3254e6e0ac9$var$_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = $57ceb3254e6e0ac9$var$_tempDiv.style, horizontal = $57ceb3254e6e0ac9$var$_horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || $57ceb3254e6e0ac9$var$_nonConvertibleUnits[unit] || $57ceb3254e6e0ac9$var$_nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && $57ceb3254e6e0ac9$var$_isSVG(target);
    if ((toPercent || curUnit === "%") && ($57ceb3254e6e0ac9$var$_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, $kvUf5._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
    if (!parent || parent === $57ceb3254e6e0ac9$var$_doc || !parent.appendChild) parent = $57ceb3254e6e0ac9$var$_doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === (0, $kvUf5._ticker).time && !cache.uncache) return (0, $kvUf5._round)(curValue / cache.width * amount);
    else {
        (toPercent || curUnit === "%") && !$57ceb3254e6e0ac9$var$_nonStandardLayouts[$57ceb3254e6e0ac9$var$_getComputedProperty(parent, "display")] && (style.position = $57ceb3254e6e0ac9$var$_getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild($57ceb3254e6e0ac9$var$_tempDiv);
        px = $57ceb3254e6e0ac9$var$_tempDiv[measureProperty];
        parent.removeChild($57ceb3254e6e0ac9$var$_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = (0, $kvUf5._getCache)(parent);
            cache.time = (0, $kvUf5._ticker).time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, $kvUf5._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, $57ceb3254e6e0ac9$var$_get = function _get(target, property, unit, uncache) {
    var value;
    $57ceb3254e6e0ac9$var$_pluginInitted || $57ceb3254e6e0ac9$var$_initCore();
    if (property in $57ceb3254e6e0ac9$var$_propertyAliases && property !== "transform") {
        property = $57ceb3254e6e0ac9$var$_propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if ($57ceb3254e6e0ac9$var$_transformProps[property] && property !== "transform") {
        value = $57ceb3254e6e0ac9$var$_parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : $57ceb3254e6e0ac9$var$_firstTwoOnly($57ceb3254e6e0ac9$var$_getComputedProperty(target, $57ceb3254e6e0ac9$var$_transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = $57ceb3254e6e0ac9$var$_specialProps[property] && $57ceb3254e6e0ac9$var$_specialProps[property](target, property, unit) || $57ceb3254e6e0ac9$var$_getComputedProperty(target, property) || (0, $kvUf5._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? $57ceb3254e6e0ac9$var$_convertToUnit(target, property, value, unit) + unit : value;
}, $57ceb3254e6e0ac9$var$_tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = $57ceb3254e6e0ac9$export$8cbef5dd49a09c8b(prop, target, 1), s = p && $57ceb3254e6e0ac9$var$_getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = $57ceb3254e6e0ac9$var$_getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new (0, $kvUf5.PropTween)(this._pt, target.style, prop, 0, 1, (0, $kvUf5._renderComplexString)), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = $57ceb3254e6e0ac9$var$_getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [
        start,
        end
    ];
    (0, $kvUf5._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match((0, $kvUf5._numWithUnitExp)) || [];
    endValues = end.match((0, $kvUf5._numWithUnitExp)) || [];
    if (endValues.length) {
        while(result = (0, $kvUf5._numWithUnitExp).exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, $kvUf5._parseRelative)(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = (0, $kvUf5._numWithUnitExp).lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || (0, $kvUf5._config).units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = $57ceb3254e6e0ac9$var$_convertToUnit(target, prop, startValue, endUnit) || 0;
                 // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? $57ceb3254e6e0ac9$var$_renderNonTweeningValueOnlyAtEnd : $57ceb3254e6e0ac9$var$_renderNonTweeningValue;
    (0, $kvUf5._relExp).test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, $57ceb3254e6e0ac9$var$_keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, $57ceb3254e6e0ac9$var$_convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = $57ceb3254e6e0ac9$var$_keywordToPercent[x] || x;
    split[1] = $57ceb3254e6e0ac9$var$_keywordToPercent[y] || y;
    return split.join(" ");
}, $57ceb3254e6e0ac9$var$_renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if ($57ceb3254e6e0ac9$var$_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? $57ceb3254e6e0ac9$var$_transformOriginProp : $57ceb3254e6e0ac9$var$_transformProp;
                }
                $57ceb3254e6e0ac9$var$_removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            $57ceb3254e6e0ac9$var$_removeProperty(target, $57ceb3254e6e0ac9$var$_transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                $57ceb3254e6e0ac9$var$_parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
                $57ceb3254e6e0ac9$var$_removeIndependentTransforms(style);
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
$57ceb3254e6e0ac9$var$_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new (0, $kvUf5.PropTween)(plugin._pt, target, property, 0, 0, $57ceb3254e6e0ac9$var$_renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ $57ceb3254e6e0ac9$var$_identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], $57ceb3254e6e0ac9$var$_rotationalProperties = {}, $57ceb3254e6e0ac9$var$_isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, $57ceb3254e6e0ac9$var$_getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = $57ceb3254e6e0ac9$var$_getComputedProperty(target, $57ceb3254e6e0ac9$var$_transformProp);
    return $57ceb3254e6e0ac9$var$_isNullTransform(matrixString) ? $57ceb3254e6e0ac9$var$_identity2DMatrix : matrixString.substr(7).match((0, $kvUf5._numExp)).map((0, $kvUf5._round));
}, $57ceb3254e6e0ac9$var$_getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, $kvUf5._getCache)(target), style = target.style, matrix = $57ceb3254e6e0ac9$var$_getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? $57ceb3254e6e0ac9$var$_identity2DMatrix : matrix;
    } else if (matrix === $57ceb3254e6e0ac9$var$_identity2DMatrix && !target.offsetParent && target !== $57ceb3254e6e0ac9$var$_docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextElementSibling;
            $57ceb3254e6e0ac9$var$_docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = $57ceb3254e6e0ac9$var$_getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : $57ceb3254e6e0ac9$var$_removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : $57ceb3254e6e0ac9$var$_docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, $57ceb3254e6e0ac9$var$_applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || $57ceb3254e6e0ac9$var$_getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = $57ceb3254e6e0ac9$export$41bc7c2d1e04f11b(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== $57ceb3254e6e0ac9$var$_identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[$57ceb3254e6e0ac9$var$_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        $57ceb3254e6e0ac9$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        $57ceb3254e6e0ac9$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        $57ceb3254e6e0ac9$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        $57ceb3254e6e0ac9$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, $57ceb3254e6e0ac9$var$_parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new (0, $kvUf5.GSCache)(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = $57ceb3254e6e0ac9$var$_getComputedProperty(target, $57ceb3254e6e0ac9$var$_transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && $57ceb3254e6e0ac9$var$_isSVG(target));
    if (cs.translate) {
        // accommodate independent transforms by combining them into normal ones.
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[$57ceb3254e6e0ac9$var$_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[$57ceb3254e6e0ac9$var$_transformProp] !== "none" ? cs[$57ceb3254e6e0ac9$var$_transformProp] : "");
        style.scale = style.rotate = style.translate = "none";
    }
    matrix = $57ceb3254e6e0ac9$var$_getMatrix(target, cache.svg);
    if (cache.svg) {
        if (cache.uncache) {
            // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
        } else t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        $57ceb3254e6e0ac9$var$_applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== $57ceb3254e6e0ac9$var$_identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? $57ceb3254e6e0ac9$var$_atan2(b, a) * $57ceb3254e6e0ac9$var$_RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? $57ceb3254e6e0ac9$var$_atan2(c, d) * $57ceb3254e6e0ac9$var$_RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * $57ceb3254e6e0ac9$var$_DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = $57ceb3254e6e0ac9$var$_atan2(a32, a33);
            rotationX = angle * $57ceb3254e6e0ac9$var$_RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = $57ceb3254e6e0ac9$var$_atan2(-c, a33);
            rotationY = angle * $57ceb3254e6e0ac9$var$_RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = $57ceb3254e6e0ac9$var$_atan2(b, a);
            rotation = angle * $57ceb3254e6e0ac9$var$_RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, $kvUf5._round)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, $kvUf5._round)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = $57ceb3254e6e0ac9$var$_atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * $57ceb3254e6e0ac9$var$_RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !$57ceb3254e6e0ac9$var$_isNullTransform($57ceb3254e6e0ac9$var$_getComputedProperty(target, $57ceb3254e6e0ac9$var$_transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, $kvUf5._round)(scaleX);
    cache.scaleY = (0, $kvUf5._round)(scaleY);
    cache.rotation = (0, $kvUf5._round)(rotation) + deg;
    cache.rotationX = (0, $kvUf5._round)(rotationX) + deg;
    cache.rotationY = (0, $kvUf5._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[$57ceb3254e6e0ac9$var$_transformOriginProp] = $57ceb3254e6e0ac9$var$_firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = (0, $kvUf5._config).force3D;
    cache.renderTransform = cache.svg ? $57ceb3254e6e0ac9$var$_renderSVGTransforms : $57ceb3254e6e0ac9$var$_supports3D ? $57ceb3254e6e0ac9$var$_renderCSSTransforms : $57ceb3254e6e0ac9$var$_renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, $57ceb3254e6e0ac9$var$_firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
$57ceb3254e6e0ac9$var$_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, $kvUf5.getUnit)(start);
    return (0, $kvUf5._round)(parseFloat(start) + parseFloat($57ceb3254e6e0ac9$var$_convertToUnit(target, "x", value + "px", unit))) + unit;
}, $57ceb3254e6e0ac9$var$_renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    $57ceb3254e6e0ac9$var$_renderCSSTransforms(ratio, cache);
}, $57ceb3254e6e0ac9$var$_zeroDeg = "0deg", $57ceb3254e6e0ac9$var$_zeroPx = "0px", $57ceb3254e6e0ac9$var$_endParenthesis = ") ", $57ceb3254e6e0ac9$var$_renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== $57ceb3254e6e0ac9$var$_zeroDeg || rotationY !== $57ceb3254e6e0ac9$var$_zeroDeg)) {
        var angle = parseFloat(rotationY) * $57ceb3254e6e0ac9$var$_DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * $57ceb3254e6e0ac9$var$_DEG2RAD;
        cos = Math.cos(angle);
        x = $57ceb3254e6e0ac9$var$_addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = $57ceb3254e6e0ac9$var$_addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = $57ceb3254e6e0ac9$var$_addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== $57ceb3254e6e0ac9$var$_zeroPx) transforms += "perspective(" + transformPerspective + $57ceb3254e6e0ac9$var$_endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== $57ceb3254e6e0ac9$var$_zeroPx || y !== $57ceb3254e6e0ac9$var$_zeroPx || z !== $57ceb3254e6e0ac9$var$_zeroPx) transforms += z !== $57ceb3254e6e0ac9$var$_zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + $57ceb3254e6e0ac9$var$_endParenthesis;
    if (rotation !== $57ceb3254e6e0ac9$var$_zeroDeg) transforms += "rotate(" + rotation + $57ceb3254e6e0ac9$var$_endParenthesis;
    if (rotationY !== $57ceb3254e6e0ac9$var$_zeroDeg) transforms += "rotateY(" + rotationY + $57ceb3254e6e0ac9$var$_endParenthesis;
    if (rotationX !== $57ceb3254e6e0ac9$var$_zeroDeg) transforms += "rotateX(" + rotationX + $57ceb3254e6e0ac9$var$_endParenthesis;
    if (skewX !== $57ceb3254e6e0ac9$var$_zeroDeg || skewY !== $57ceb3254e6e0ac9$var$_zeroDeg) transforms += "skew(" + skewX + ", " + skewY + $57ceb3254e6e0ac9$var$_endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + $57ceb3254e6e0ac9$var$_endParenthesis;
    target.style[$57ceb3254e6e0ac9$var$_transformProp] = transforms || "translate(0, 0)";
}, $57ceb3254e6e0ac9$var$_renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= $57ceb3254e6e0ac9$var$_DEG2RAD;
        skewX *= $57ceb3254e6e0ac9$var$_DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= $57ceb3254e6e0ac9$var$_DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, $kvUf5._round)(a11);
        a21 = (0, $kvUf5._round)(a21);
        a12 = (0, $kvUf5._round)(a12);
        a22 = (0, $kvUf5._round)(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = $57ceb3254e6e0ac9$var$_convertToUnit(target, "x", x, "px");
        ty = $57ceb3254e6e0ac9$var$_convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, $kvUf5._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, $kvUf5._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, $kvUf5._round)(tx + xPercent / 100 * temp.width);
        ty = (0, $kvUf5._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[$57ceb3254e6e0ac9$var$_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
}, $57ceb3254e6e0ac9$var$_addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, $kvUf5._isString)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? $57ceb3254e6e0ac9$var$_RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * $57ceb3254e6e0ac9$var$_bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * $57ceb3254e6e0ac9$var$_bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new (0, $kvUf5.PropTween)(plugin._pt, target, property, startNum, change, $57ceb3254e6e0ac9$var$_renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, $57ceb3254e6e0ac9$var$_assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, $57ceb3254e6e0ac9$var$_addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = $57ceb3254e6e0ac9$var$_assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[$57ceb3254e6e0ac9$var$_transformProp] = transforms;
        endCache = $57ceb3254e6e0ac9$var$_parseTransform(target, 1);
        $57ceb3254e6e0ac9$var$_removeProperty(target, $57ceb3254e6e0ac9$var$_transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[$57ceb3254e6e0ac9$var$_transformProp];
        style[$57ceb3254e6e0ac9$var$_transformProp] = transforms;
        endCache = $57ceb3254e6e0ac9$var$_parseTransform(target, 1);
        style[$57ceb3254e6e0ac9$var$_transformProp] = startValue;
    }
    for(p in $57ceb3254e6e0ac9$var$_transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, $kvUf5.getUnit)(startValue);
            endUnit = (0, $kvUf5.getUnit)(endValue);
            startNum = startUnit !== endUnit ? $57ceb3254e6e0ac9$var$_convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new (0, $kvUf5.PropTween)(plugin._pt, endCache, p, startNum, endNum - startNum, $57ceb3254e6e0ac9$var$_renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    $57ceb3254e6e0ac9$var$_assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, $kvUf5._forEachName)("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    $57ceb3254e6e0ac9$var$_specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return $57ceb3254e6e0ac9$var$_get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var $57ceb3254e6e0ac9$export$855822f522f18eef = {
    name: "css",
    register: $57ceb3254e6e0ac9$var$_initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
        $57ceb3254e6e0ac9$var$_pluginInitted || $57ceb3254e6e0ac9$var$_initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps
        this.styles = this.styles || $57ceb3254e6e0ac9$var$_getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if ((0, $kvUf5._plugins)[p] && (0, $kvUf5._checkPlugin)(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = $57ceb3254e6e0ac9$var$_specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = (0, $kvUf5._replaceRandom)(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                (0, $kvUf5._colorExp).lastIndex = 0;
                if (!(0, $kvUf5._colorExp).test(startValue)) {
                    // colors don't have units
                    startUnit = (0, $kvUf5.getUnit)(startValue);
                    endUnit = (0, $kvUf5.getUnit)(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = $57ceb3254e6e0ac9$var$_convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, $kvUf5._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, $kvUf5._replaceRandom)(startValue));
                    (0, $kvUf5.getUnit)(startValue + "") || (startValue += (0, $kvUf5._config).units[p] || (0, $kvUf5.getUnit)($57ceb3254e6e0ac9$var$_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = $57ceb3254e6e0ac9$var$_get(target, p)); // can't work with relative values
                } else startValue = $57ceb3254e6e0ac9$var$_get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in $57ceb3254e6e0ac9$var$_propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && $57ceb3254e6e0ac9$var$_get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        inlineProps.push("visibility", 0, style.visibility);
                        $57ceb3254e6e0ac9$var$_addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = $57ceb3254e6e0ac9$var$_propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in $57ceb3254e6e0ac9$var$_transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    this.styles.save(p);
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || $57ceb3254e6e0ac9$var$_parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new (0, $kvUf5.PropTween)(this._pt, style, $57ceb3254e6e0ac9$var$_transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new (0, $kvUf5.PropTween)(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, $kvUf5._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, $57ceb3254e6e0ac9$var$_renderCSSProp);
                        this._pt.u = 0;
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        inlineProps.push($57ceb3254e6e0ac9$var$_transformOriginProp, 0, style[$57ceb3254e6e0ac9$var$_transformOriginProp]);
                        endValue = $57ceb3254e6e0ac9$var$_convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) $57ceb3254e6e0ac9$var$_applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && $57ceb3254e6e0ac9$var$_addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            $57ceb3254e6e0ac9$var$_addNonTweeningPT(this, style, p, $57ceb3254e6e0ac9$var$_firstTwoOnly(startValue), $57ceb3254e6e0ac9$var$_firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        $57ceb3254e6e0ac9$var$_applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in $57ceb3254e6e0ac9$var$_rotationalProperties) {
                        $57ceb3254e6e0ac9$var$_addRotationalPropTween(this, cache, p, startNum, relative ? (0, $kvUf5._parseRelative)(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        $57ceb3254e6e0ac9$var$_addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        $57ceb3254e6e0ac9$var$_addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = $57ceb3254e6e0ac9$export$8cbef5dd49a09c8b(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !$57ceb3254e6e0ac9$var$_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, $kvUf5.getUnit)(endValue) || (p in (0, $kvUf5._config).units ? (0, $kvUf5._config).units[p] : startUnit);
                    startUnit !== endUnit && (startNum = $57ceb3254e6e0ac9$var$_convertToUnit(target, p, startValue, endUnit));
                    this._pt = new (0, $kvUf5.PropTween)(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, $kvUf5._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? $57ceb3254e6e0ac9$var$_renderRoundedCSSProp : $57ceb3254e6e0ac9$var$_renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = $57ceb3254e6e0ac9$var$_renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    else if (p !== "parseTransform") {
                        (0, $kvUf5._missingPlugin)(p, endValue);
                        continue;
                    }
                } else $57ceb3254e6e0ac9$var$_tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
            }
        }
        hasPriority && (0, $kvUf5._sortPropTweensByPriority)(this);
    },
    render: function render(ratio, data) {
        if (data.tween._time || !$57ceb3254e6e0ac9$var$_reverting()) {
            var pt = data._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        } else data.styles.revert();
    },
    get: $57ceb3254e6e0ac9$var$_get,
    aliases: $57ceb3254e6e0ac9$var$_propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = $57ceb3254e6e0ac9$var$_propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in $57ceb3254e6e0ac9$var$_transformProps && property !== $57ceb3254e6e0ac9$var$_transformOriginProp && (target._gsap.x || $57ceb3254e6e0ac9$var$_get(target, "x")) ? plugin && $57ceb3254e6e0ac9$var$_recentSetterPlugin === plugin ? property === "scale" ? $57ceb3254e6e0ac9$var$_setterScale : $57ceb3254e6e0ac9$var$_setterTransform : ($57ceb3254e6e0ac9$var$_recentSetterPlugin = plugin || {}, property === "scale" ? $57ceb3254e6e0ac9$var$_setterScaleWithRender : $57ceb3254e6e0ac9$var$_setterTransformWithRender) : target.style && !(0, $kvUf5._isUndefined)(target.style[property]) ? $57ceb3254e6e0ac9$var$_setterCSSStyle : ~property.indexOf("-") ? $57ceb3254e6e0ac9$var$_setterCSSProp : (0, $kvUf5._getSetter)(target, property);
    },
    core: {
        _removeProperty: $57ceb3254e6e0ac9$var$_removeProperty,
        _getMatrix: $57ceb3254e6e0ac9$var$_getMatrix
    }
};
(0, $kvUf5.gsap).utils.checkPrefix = $57ceb3254e6e0ac9$export$8cbef5dd49a09c8b;
(0, $kvUf5.gsap).core.getStyleSaver = $57ceb3254e6e0ac9$var$_getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, $kvUf5._forEachName)(positionAndScale + "," + rotation + "," + others, function(name) {
        $57ceb3254e6e0ac9$var$_transformProps[name] = 1;
    });
    (0, $kvUf5._forEachName)(rotation, function(name) {
        (0, $kvUf5._config).units[name] = "deg";
        $57ceb3254e6e0ac9$var$_rotationalProperties[name] = 1;
    });
    $57ceb3254e6e0ac9$var$_propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, $kvUf5._forEachName)(aliases, function(name) {
        var split = name.split(":");
        $57ceb3254e6e0ac9$var$_propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, $kvUf5._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    (0, $kvUf5._config).units[name] = "px";
});
(0, $kvUf5.gsap).registerPlugin($57ceb3254e6e0ac9$export$855822f522f18eef);

});


parcelRequire.register("dfMDe", function(module, exports) {

$parcel$export(module.exports, "updateOneState", function () { return $38418c12d21a830c$export$408e72d428e64956; });
$parcel$export(module.exports, "getState", function () { return $38418c12d21a830c$export$50fdfeece43146fd; });
$parcel$export(module.exports, "selectState", function () { return $38418c12d21a830c$export$7d0529cae993db76; });

var $7Hbkn = parcelRequire("7Hbkn");
let $38418c12d21a830c$var$globalState = {
    scrollTriggers: {},
    cmsData: {
        "path_to_image": "/image",
        "cursor": "Drag",
        "header": {
            "logo": "A|Apricot",
            "menu": [
                {
                    ",title": "About us",
                    "link": "about"
                },
                {
                    "title": "Technology",
                    "link": "technology"
                },
                {
                    "title": "Applying",
                    "link": "applying"
                },
                {
                    "title": "Bennefits",
                    "link": "bennefits"
                },
                {
                    "title": "Projects",
                    "link": "projects"
                },
                {
                    "title": "Steps",
                    "link": "steps"
                },
                {
                    "title": "Contacts",
                    "link": "contacts"
                }
            ],
            "languages": [
                {
                    "title": "English",
                    "link": "/"
                },
                {
                    "title": "Русский",
                    "link": "/ru/"
                },
                {
                    "title": "հայերեն",
                    "link": "/hy/"
                }
            ],
            "button_title": "Get in touch",
            "button_title_mobile": "Get <br/> in touch"
        },
        "block_1": {
            "title": "Own your reality",
            "link_title_mobile": "Get in touch",
            "video_link": "https://player.vimeo.com/progressive_redirect/playback/764937143/rendition/1080p/file.mp4?loc=external&signature=4388a208c86b8a90f77a44e530be9a0d5226ac93ec8a0598c6b0008e535d2d5b",
            "video_preview_image": "/image/screen2/1.png"
        },
        "block_2": {
            "block_name": "About us",
            "title": "Apricot is a startup in the field of Immersive Technologies",
            "elements": [
                {
                    "text": "We develop solutions for heavy and light industries, armed forces, as well as civil engineering solutions, based on the technologies of virtual and augmented reality",
                    "image": "/image/screen3/01.png"
                },
                {
                    "text": "Apart from the design of solutions \r\nand technical support, we also provide our customers services in consulting and strategic planning in the field  of emerging technologies.",
                    "image": "/image/screen3/02.png"
                },
                {
                    "text": "We are a team of highly qualified experts \r\nin immersive technologies with vast experience and an impressive portfolio of successfully implemented projects in various industries, including defense, education, and entertainment.",
                    "image": "/image/screen3/03.png"
                }
            ]
        },
        "block_3": {
            "block_name": "Our Goals",
            "title": "Creation of breakthrough technologies in the field of training simulators and Industry 4.0"
        },
        "block_4": {
            "block_name": "Technology",
            "background_text": "y — Technology — Technology — Technolog",
            "elements": [
                {
                    "image": "image/screen5/1.png",
                    "title": "Virtual Reality",
                    "text": "A completely simulated virtual environment, with a panoramic view and a possibility of interaction with other participants through visual, tactile, auditory perception, etc."
                },
                {
                    "image": "image/screen5/2.png",
                    "title": "Augmented Reality",
                    "text": "Enabling the display of additional graphical elements linked to real-life objects. Adapted for mobile devices"
                },
                {
                    "image": "image/screen5/3.png",
                    "title": "Mixed Reality",
                    "text": "A technology that is similar to AR, enhanced by headset, and glasses with an integrated camera"
                },
                {
                    "image": "image/screen5/4.png",
                    "title": "Metaverse",
                    "text": "This collective environment is shared the resulting space practically improved convergence physical reality outer space, including the sum of all turnovers in the world, augmented reality and the Internet"
                }
            ]
        },
        "block_5": {
            "block_name": "Sectors",
            "elements": [
                {
                    "title": "Industry",
                    "texts": [
                        "Production line simulation and sequencing",
                        "Planning of standard procedures and emergency scenarios",
                        "Freshmen training - navigation through various areas and rooms"
                    ]
                },
                {
                    "title": "Military-industrial complex",
                    "texts": [
                        "The VR complex creates an environment as close as possible to combat, which allows the employee to prepare for the upcoming operational and combat operations anywhere in the world",
                        "Shooting simulators from all types of weapons",
                        "Simulators for training assault units"
                    ]
                },
                {
                    "title": "Entertainment",
                    "texts": [
                        "VR gaming content",
                        "Amusement Parks",
                        "Genuine experiences of visiting any place without physical travel",
                        "Creation of an extensive information field, from text data to video content"
                    ]
                },
                {
                    "title": "Retail",
                    "texts": [
                        "Possibility to interact with the virtual environment, e.g. online shopping or bookingd",
                        "Creation of AR navigation"
                    ]
                },
                {
                    "title": "Education",
                    "texts": [
                        "Various training courses",
                        "Historical projects with a virtual immersion in the relevant epoch",
                        "Teaching schoolchildren and students with the use of virtual simulators"
                    ]
                },
                {
                    "title": "Development",
                    "texts": [
                        "Apartment visualization",
                        "Free movement",
                        "Interaction with the environment for the creation of the desired interior",
                        "Visualization of any objects and spaces, from a simple room to an entire city"
                    ]
                }
            ],
            "random_images": [
                {
                    "image": "image/screen6/1.png"
                },
                {
                    "image": "image/screen6/2.png"
                },
                {
                    "image": "image/screen6/3.png"
                },
                {
                    "image": "image/screen6/4.png"
                }
            ]
        },
        "block_6": {
            "block_name": "Applying",
            "elements": [
                {
                    "preview": {
                        "title": "Training",
                        "text": "Applying the technology of virtual reality in industry primarily serves for efficient training. Immersive simulators effectively translate skills and knowledge to personnel, reducing the time it takes them to attain a high level of expertise."
                    },
                    "detail": {
                        "title": "Training",
                        "topText": "Applying the technology of virtual reality in industry primarily serves for efficient training. Immersive simulators effectively translate skills and knowledge to personnel, reducing the time it takes them to attain a high level of expertise. In a safe immersive environment, specialists learn and practice basic skills for plant operation and maintenance, and learn proven action plans for a variety of situations.",
                        "image": "image/screen7/1.png",
                        "sub_title": "These can include accident prevention training at a plant, synchronization of multiple employees operations - infrequent, but critical procedures.",
                        "rightBottomText": "Thanks to virtual reality, a person not only formally memorizes the sequence of actions but also visually drills out the order of actions at each stage of work for both planned and emergency situations. VR technology enables the training of a large number of people and the creation of comprehensive industry-related courses. Immersive training is implemented both at the level of VR simulator to work with specific equipment, and at the level of an entire virtual plant. Here, the possibilities are only limited by the company&amp;#39;s budget.",
                        "leftBottomText": "",
                        "list": [
                            null
                        ]
                    }
                },
                {
                    "preview": {
                        "title": "Designing",
                        "text": "AR and VR technologies are presently used to provide easier solutions for a variety of problems, from  designing new industrial lines and end products to training personnel and assisting with repair work."
                    },
                    "detail": {
                        "title": "Designing",
                        "topText": "AR and VR technologies are presently used to provide easier solutions for a variety of problems, from designing new industrial lines and end products to training personnel and assisting with repair work. These technologies allow companies to reduce mishandling risks, as well as minimize human error in working at hazardous sites.",
                        "image": "image/screen7/2.png",
                        "sub_title": "The possibility of visualizing the future production facility or a manufactured product is one of the greatest advantages offered by Immersive Technologies. This is achieved by 3D design with subsequent visualization of the generated 3D models in augmented or virtual reality. This brings the quality and speed of industrial design to a whole new level, and also allows for eliminating errors both in methods of execution and in ergonomics.",
                        "rightBottomText": "VR enables visualizing and interacting with aircraft CAD geometry because it provides an environment that is identical to the inside of the physical mockups which is built for each aircraft during the design phase. Likewise, apart from the visualization of CAD representations of parts, it’s possible to move elements around their installed position, reach around obstacles, etc. It has the most beneficial impact on: – flight deck design– maintainability or accessibility verification assembly planning&#8221;\n",
                        "leftBottomText": "",
                        "list": []
                    }
                },
                {
                    "preview": {
                        "title": "Military",
                        "text": "Immersive technologies has been adopted by the military – this includes all three services (army, navy and air force) – where it is used for training purposes."
                    },
                    "detail": {
                        "title": "Military",
                        "topText": "A virtual reality simulation enables them to do so but without the risk of death or a serious injury. They can re-enact a particular scenario, for example engagement with an enemy in an environment in which they experience this but without the real world risks. This has proven to be safer and less costly than traditional training methods.",
                        "image": "image/screen7/3.png",
                        "sub_title": "Immersive technologies has been adopted by the military — this includes all three services (army, navy and air force) — where it is used for training purposes. This is particularly useful for training soldiers for combat situations or other dangerous settings where they have to learn how to react in an appropriate manner.",
                        "leftBottomText": "",
                        "rightBottomText": "",
                        "list": [
                            "Multiplayer simulators of various types of weapons",
                            "Shooting simulators from any type of weapons with immersion in an environment as close as possible to combat",
                            "Simulators of RPGs, NLAW, Javeline, ATGMs, MANPADS and various types of small arms",
                            "Assault Room",
                            "Simulators for training assault units",
                            "VR-creation complex, as close as possible to combat, which allows you to prepare the action for theupcoming operational-combat action in any perception of the world",
                            "Simulators of various types of heavy and light military equipment",
                            "Simulators for training crews of various types of military equipment",
                            "The VR-complex creates an environment as close as possible to the combat and includes various",
                            "scenarios of military operations"
                        ]
                    }
                },
                {
                    "preview": {
                        "title": "Engineers’ learning tool",
                        "text": "Immersive technologies has been adopted by the military – this includes all three services (army, navy and air force) – where it is used for training purposes."
                    },
                    "detail": {
                        "title": "Engineers’ learning tool",
                        "topText": "",
                        "image": "image/screen7/4.png",
                        "sub_title": "",
                        "leftBottomText": "Engineers don’t have accessible that many studying materials. They often need to wait for some complex structure to become available as a learning tool With the help of VR technology, their learning process would go much faster since it creates a virtual environment that allows engineers to view that composite structures and learn how to manage them well.&#8221;",
                        "rightBottomText": "",
                        "list": []
                    }
                },
                {
                    "preview": {
                        "title": "Maintenance",
                        "text": "The use of Immersive Technologies significantly increases the efficiency of repair work control."
                    },
                    "detail": {
                        "title": "Maintenance",
                        "topText": "The use of Immersive Technologies significantly increases the efficiency of repair work control. AR glasses, phone or tablet allow quick access to technical documentation, ongoing production data, and repair knowledge bases at the break location, thus increasing the quality of maintenance operations, reducing the repair time, and hence any downtime loss. As example it’s an AR application that overlays the machine with its own 3D model in real-time.",
                        "image": "image/screen7/5.png",
                        "sub_title": "The technology brings into sight everything that is under the equipment framework: from specific pieces to internal processes. This speeds up the technical maintenance service, as you will no longer need to keep multi-page manuals or seek high-cost professional advice",
                        "leftBottomText": "",
                        "rightBottomText": "The use of Immersive Technologies significantly increases the efficiency of repair work control. AR\xa0glasses, phone or tablet allow quick access to technical documentation, ongoing production data, and repair knowledge bases at the break location, thus increasing the quality of maintenance operations, reducing the repair time, and hence any downtime loss. As example it’s an AR application that overlays the machine with its own 3D model in real-time.",
                        "list": ""
                    }
                }
            ]
        },
        "block_7": {
            "title": "Benefits",
            "elements": [
                {
                    "text": "Achieving a significant economic effect in the process of training and operation",
                    "image": "/image/screen8/01.png"
                },
                {
                    "text": "Reducing the risks of improper operation of equipment and the role of the human factor when working at hazardous facilities",
                    "image": "/image/screen8/02.png"
                },
                {
                    "text": "Increasing the effectiveness of the learning process and increasing the flow of trainees",
                    "image": "/image/screen8/03.png"
                },
                {
                    "text": "The ability to model the maximum number of emergency situations at the enterprise and the method of leveling risks",
                    "image": "/image/screen8/04.png"
                }
            ]
        },
        "block_8": {
            "block_name": "Completed projects",
            "tags": [
                "IT sector",
                "production",
                "training",
                "factories",
                "universities",
                "schools",
                "entertainment",
                "retail"
            ],
            "button_previous_text": "Previous",
            "button_next_title": "Next",
            "elements": [
                {
                    "preview": {
                        "title": "Biochemical laboratory",
                        "tags": [
                            "VR",
                            "Training"
                        ],
                        "video_link": "https://player.vimeo.com/progressive_redirect/playback/765485982/rendition/720p/file.mp4?loc=external&signature=a1be537800625d608f76c263f0ee4cca5ac424418d81606a45427c75fac8aea0"
                    },
                    "detail": {
                        "title": "Simulator of chemical production with simulation of work in a chemical isolator",
                        "characteristics": [
                            {
                                "name": "Industry",
                                "value": "pharmaceutical"
                            },
                            {
                                "name": "Technology",
                                "value": "VR"
                            }
                        ],
                        "video_link_1": "https://player.vimeo.com/progressive_redirect/playback/765485982/rendition/720p/file.mp4?loc=external&signature=a1be537800625d608f76c263f0ee4cca5ac424418d81606a45427c75fac8aea0",
                        "sub_title": "Simulator of chemical production with simulation of work in a chemical isolator.",
                        "video_link_2": "https://player.vimeo.com/progressive_redirect/playback/765424814/rendition/1080p/file.mp4?loc=external&signature=87d09378576a45932cb4e4e3e1486e42327f597f9d2cc7c801e68f70e20f0a41",
                        "list": [
                            "Laboratory Simulation of work in the Bio-Chemical Laboratory. The laboratory is assembled from a real sample. The participant is in the laboratory as an employee, and he has to perform certain tasks related to the technical part.",
                            "There is a strict sequence of actions that must be followed in real life. In this scenario, the VR simulator allows you to get acquainted with the tasks, perform them using fine motor skills, follow the mandatory sequence of tasks, which is extremely important in real life.",
                            "In this simulator, if any mistake is made, there will be no critical outcome, due to which the risk of a threat to the life and health of workers is minimized."
                        ]
                    }
                },
                {
                    "preview": {
                        "title": "Mars",
                        "tags": [
                            "VR",
                            "Training"
                        ],
                        "video_link": "https://player.vimeo.com/progressive_redirect/playback/765485967/rendition/720p/file.mp4?loc=external&signature=b29c801ef9a86487d9c1c25ef29d96e1457ec0c1fda0e3166f6c3592adc98220"
                    },
                    "detail": {
                        "title": "Mars Simulation of work on Mars",
                        "characteristics": [
                            {
                                "name": "Industry",
                                "value": "pharmaceutical"
                            },
                            {
                                "name": "Technology",
                                "value": "VR"
                            }
                        ],
                        "video_link_1": "https://player.vimeo.com/progressive_redirect/playback/765485967/rendition/720p/file.mp4?loc=external&signature=b29c801ef9a86487d9c1c25ef29d96e1457ec0c1fda0e3166f6c3592adc98220",
                        "sub_title": "Mars Simulation of work on Mars",
                        "video_link_2": "https://player.vimeo.com/progressive_redirect/playback/765471334/rendition/1080p/file.mp4?loc=external&signature=7d89ad0de67a794723b49b21149f6ea1b119bc4606e2ff1fa6e81926d6dc18be",
                        "list": [
                            "The VR simulator makes it possible to simulate being on the surface of Mars, conduct work and research, collect analyzes, interact with the rover or with other astronauts. ",
                            "The simulator is suitable for demonstrating the theoretical part in order to get a visual experience.",
                            "You can program any action according to a pre-thought-out scenario."
                        ]
                    }
                }
            ]
        },
        "block_9": {
            "block_name": "Steps",
            "title": "Step-by-step process from application, information exchange, technical assignment, contract and finished product",
            "elements": [
                {
                    "text": "Application form"
                },
                {
                    "text": "Initial call with discussion of the task"
                },
                {
                    "text": "Exchange of materials (drawings, models, photos, videos)"
                },
                {
                    "text": "Technical description"
                },
                {
                    "text": "Approval of the terms of reference"
                },
                {
                    "text": "Commercial offer and contract signing"
                },
                {
                    "text": "Completing the task"
                }
            ]
        },
        "block_10": {
            "title": "Let’s start a project",
            "name_title": "Name",
            "company_title": "Company",
            "email_title": "Email",
            "phone_title": "Phone",
            "project_details_title": "Project details",
            "required_error": "Required field!",
            "email_error": "Wrong email, please enter a valid one",
            "phone_error": "Wrong phone number, please enter a valid one",
            "policy_text_1": "By clicking the Submit button you agree to our",
            "policy_text_2": "Privacy Policy terms",
            "policy_link": "#",
            "submit_text": "Submit",
            "thanks_image": "/image/form/3.png",
            "thanks_text_1": "Thanks for the application,",
            "thanks_text_2": "we will contact you soon!"
        },
        "footer": {
            "title": "Get in touch",
            "email": "Info@apricotxr.com",
            "email_href": "mailto:Info@apricotxr.com",
            "address_region": "Armenia, Yerevan",
            "phone": "+374 94 282499",
            "phone_href": "tel:+374 94 282499",
            "address_detail": "Abelyan st. 6/1, B 302",
            "copyright_text": "\xa9 2022, Apicot",
            "policy_text": "Privacy policy",
            "policy_link": "",
            "social_links": [
                {
                    "id": "instagram",
                    "link": "https://instagram.com/apricot_xr?igshid=YmMyMTA2M2Y="
                },
                {
                    "id": "whatsapp",
                    "link": "https://api.whatsapp.com/send?phone=79032296363"
                },
                {
                    "id": "linkedin",
                    "link": "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A82477794&keywords=apricot&origin=RICH_QUERY_SUGGESTION&position=0&searchId=f07d22a6-2365-469c-96d2-73ee219d0076&sid=a8D"
                }
            ],
            "to_top_button_title": "Back to top"
        }
    },
    activePopupId: null,
    activePopupScreen: null,
    cursorState: null,
    scroll3width: 0,
    scroll8width: 0,
    burger: false,
    scrollPage: "",
    activeRowIndex: 0,
    imageNumber: 0,
    formValid: true,
    buttonClick: 0,
    formSended: false,
    name: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
    nameDirty: false,
    companyDirty: false,
    emailDirty: false,
    phoneDirty: false,
    projectDetailsDirty: false,
    nameError: (0, $7Hbkn.el)("#formRef .errorMessageName").dataset.error_required,
    companyError: (0, $7Hbkn.el)("#formRef .errorMessageCompany").dataset.error_required,
    emailError: (0, $7Hbkn.el)("#formRef .errorMessageEmail").dataset.error_required,
    phoneError: (0, $7Hbkn.el)("#formRef .errorMessagePhone").dataset.error_required
};
const $38418c12d21a830c$var$listeners = {
    all: [],
    scrollTriggers: [],
    counter: [],
    cmsData: [],
    activePopupId: [],
    activePopupScreen: [],
    cursorState: [],
    scroll3width: [],
    scroll8width: [],
    burger: [],
    scrollPage: [],
    activeRowIndex: [],
    imageNumber: [],
    formValid: [],
    buttonClick: [],
    formSended: [],
    name: [],
    company: [],
    email: [],
    phone: [],
    projectDetails: [],
    nameDirty: [],
    companyDirty: [],
    emailDirty: [],
    phoneDirty: [],
    projectDetailsDirty: [],
    nameError: [],
    companyError: [],
    emailError: [],
    phoneError: []
};
function $38418c12d21a830c$export$4971331372cec95a(newState) {
    $38418c12d21a830c$var$globalState = {
        ...newState
    };
    $38418c12d21a830c$var$listeners.all.forEach((fn)=>fn($38418c12d21a830c$var$globalState));
}
function $38418c12d21a830c$export$408e72d428e64956(key, object) {
    $38418c12d21a830c$var$globalState[key] = object;
    $38418c12d21a830c$var$listeners[key].forEach((fn)=>fn($38418c12d21a830c$var$globalState));
}
function $38418c12d21a830c$export$50fdfeece43146fd() {
    return $38418c12d21a830c$var$globalState;
}
function $38418c12d21a830c$export$7d0529cae993db76(fn, ...keys) {
    if (keys) for (let item of keys){
        if ($38418c12d21a830c$var$listeners[item].indexOf(fn) === -1) $38418c12d21a830c$var$listeners[item].push(fn);
        fn($38418c12d21a830c$var$globalState[item]);
    }
    else {
        if ($38418c12d21a830c$var$listeners.all.indexOf(fn) === -1) $38418c12d21a830c$var$listeners.all.push(fn);
        fn($38418c12d21a830c$var$globalState);
    }
}
function $38418c12d21a830c$export$f500693cef883ffd(fn, ...keys) {
    if (keys) for (let key of keys){
        const index = $38418c12d21a830c$var$listeners[key].indexOf(fn);
        if (index !== -1) $38418c12d21a830c$var$listeners[key].splice(index, 1);
    }
    else {
        const index1 = $38418c12d21a830c$var$listeners.all.indexOf(fn);
        if (index1 !== -1) $38418c12d21a830c$var$listeners.all.splice(index1, 1);
    }
}

});
parcelRequire.register("7Hbkn", function(module, exports) {

$parcel$export(module.exports, "el", function () { return $fb7a841e47386b5f$export$c3da0dad1b44eea9; });
$parcel$export(module.exports, "els", function () { return $fb7a841e47386b5f$export$7236b418e6d031e1; });
function $fb7a841e47386b5f$export$c3da0dad1b44eea9(selector) {
    return document.querySelector(selector);
}
function $fb7a841e47386b5f$export$7236b418e6d031e1(selector) {
    return document.querySelectorAll(selector);
}

});



var $jbrIz = parcelRequire("jbrIz");

var $kcA29 = parcelRequire("kcA29");

var $7PrnQ = parcelRequire("7PrnQ");

var $kcA29 = parcelRequire("kcA29");

var $l6B09 = parcelRequire("l6B09");
let $48d980a24a3f1465$var$isDebugMode = false;
if (typeof window !== "undefined") $48d980a24a3f1465$var$isDebugMode = !!localStorage?.getItem("isDebugMode");
function $48d980a24a3f1465$export$2d3d93e556461272(scrollerEl, triggerEl, updateHandler) {
    return (id, startFromTop, endFromTop, scrollerStart = "top", scrollerEnd = "top", elStart = "top", elEnd = "top")=>{
        const trigger = (0, $kcA29.ScrollTrigger).create({
            id: id,
            markers: $48d980a24a3f1465$var$isDebugMode && id.indexOf("Horizontal") === -1 ? {
                startColor: "red",
                endColor: "orange",
                fontSize: "18px"
            } : false,
            scroller: scrollerEl,
            trigger: triggerEl,
            start: `${elStart}+=${startFromTop} ${scrollerStart}`,
            end: `${elEnd}+=${endFromTop} ${scrollerEnd}`,
            onUpdate: updateHandler,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            // leads to bug with Slider do not uncomment it
            // preventOverlaps: true,
            anticipatePin: true
        });
        // scrollDistance
        return trigger;
    };
}
function $48d980a24a3f1465$export$9ba0048c63cbc3aa(bodyScrollBar) {
    if ($48d980a24a3f1465$var$isDebugMode) bodyScrollBar.addListener(({ offset: offset  })=>{
        (0, $l6B09.gsap).set([
            ...document.querySelectorAll(".gsap-marker-end"),
            ...document.querySelectorAll(".gsap-marker-start"),
            ...document.querySelectorAll(".gsap-marker-scroller-start"),
            ...document.querySelectorAll(".gsap-marker-scroller-end")
        ], {
            marginTop: -offset.y
        });
    });
}


function $12519b14ec31939a$export$798047c433103370(elements) {
    return {
        total: elements.reduce((acc, el)=>{
            acc += el.offsetHeight;
            return acc;
        }, 0),
        all: elements.map((el)=>el.offsetHeight)
    };
}
function $12519b14ec31939a$export$864492cc36471f19(allScreensEl) {
    let resizeDetectorFn = (first)=>{
        const last = $12519b14ec31939a$export$798047c433103370(allScreensEl);
        if (first.total !== last.total) {
            console.error("CRITICAL ERROR:::: Some screens jumps", first.total, last.total);
            first.all.forEach((item, index)=>{
                if (item !== last.all[index]) console.log("jumpers list: " + allScreensEl[index].className);
            });
        }
    };
    resizeDetectorFn = resizeDetectorFn.bind(null, $12519b14ec31939a$export$798047c433103370(allScreensEl));
    setTimeout(resizeDetectorFn, 2000);
}



var $dfMDe = parcelRequire("dfMDe");

var $7Hbkn = parcelRequire("7Hbkn");

var $l6B09 = parcelRequire("l6B09");
(0, $l6B09.gsap).registerPlugin((0, $kcA29.ScrollTrigger));
let $bc07795d4ff84af9$var$viewportHeight;
const $bc07795d4ff84af9$var$FIRST_OFFSET = 200;
const $bc07795d4ff84af9$var$OVERLAP = 300;
let $bc07795d4ff84af9$var$bodyScrollBar;
let $bc07795d4ff84af9$var$onScrollToSection;
let $bc07795d4ff84af9$var$videoOverlap = 0;
let $bc07795d4ff84af9$var$screen1Tween = [];
let $bc07795d4ff84af9$var$screen2Tween = [];
let $bc07795d4ff84af9$var$screen3Tween = [];
let $bc07795d4ff84af9$var$screen3HorizontalTween = [];
let $bc07795d4ff84af9$var$screen4Tween = [];
let $bc07795d4ff84af9$var$screen5Tween = [];
let $bc07795d4ff84af9$var$screen5HorizontalTween = [];
let $bc07795d4ff84af9$var$screen6Tween = [];
let $bc07795d4ff84af9$var$screen7Tween = [];
let $bc07795d4ff84af9$var$screen8Tween = [];
let $bc07795d4ff84af9$var$screen8HorizontalTween = [];
let $bc07795d4ff84af9$var$screen9Tween = [];
let $bc07795d4ff84af9$var$screen10Tween = [];
let $bc07795d4ff84af9$var$screen11Tween = [];
let $bc07795d4ff84af9$var$topContainerRef;
let $bc07795d4ff84af9$var$scrollContainerRef;
let $bc07795d4ff84af9$var$ghostRef;
let $bc07795d4ff84af9$var$headerRef;
let $bc07795d4ff84af9$var$chelkaRef;
let $bc07795d4ff84af9$var$screen1Ref;
let $bc07795d4ff84af9$var$screen2Ref;
let $bc07795d4ff84af9$var$screen3Ref;
let $bc07795d4ff84af9$var$screen3SliderRef;
let $bc07795d4ff84af9$var$headerScreen3Ref;
let $bc07795d4ff84af9$var$screen4Ref;
let $bc07795d4ff84af9$var$screen5Ref;
let $bc07795d4ff84af9$var$screen5SliderRef;
let $bc07795d4ff84af9$var$screen6Ref;
let $bc07795d4ff84af9$var$screen7Ref;
let $bc07795d4ff84af9$var$screen8Ref;
let $bc07795d4ff84af9$var$screen8SliderRef;
let $bc07795d4ff84af9$var$screen9Ref;
let $bc07795d4ff84af9$var$screen10Ref;
let $bc07795d4ff84af9$var$screen11Ref;
let $bc07795d4ff84af9$var$footerRef;
let $bc07795d4ff84af9$var$submitButtonRef;
let $bc07795d4ff84af9$var$followCursorRef;
let $bc07795d4ff84af9$var$commonScreens;
let $bc07795d4ff84af9$var$footerScreens;
let $bc07795d4ff84af9$var$allScreens;
let $bc07795d4ff84af9$var$setIsHeaderVisibleGlobal;
// id -> scrollDistance
let $bc07795d4ff84af9$var$scrollDistance = new Map();
let $bc07795d4ff84af9$var$startScreenNavigationPositions = new Map();
function $bc07795d4ff84af9$export$f22da7240b7add18() {
    function addScreenNavigationPosition(id, height) {
        $bc07795d4ff84af9$var$startScreenNavigationPositions.set(id, height);
    }
    function getScreenNavigationPosition(screenId) {
        return $bc07795d4ff84af9$var$startScreenNavigationPositions.get(screenId);
    }
    function initWindowStaff() {
        window.history.scrollRestoration = "manual";
        $bc07795d4ff84af9$var$videoOverlap = (0, $jbrIz.height)($bc07795d4ff84af9$var$screen2Ref) * 0.2;
    }
    function scrollAnimationHandler(trigger) {
        if (trigger.vars.id === "screen1") {
            if (!$bc07795d4ff84af9$var$screen1Tween.length) {
                $bc07795d4ff84af9$var$screen1Tween.push((0, $l6B09.gsap).to($bc07795d4ff84af9$var$screen2Ref, {
                    top: `+=${$bc07795d4ff84af9$var$scrollDistance.get("screen1") - $bc07795d4ff84af9$var$videoOverlap}px`,
                    paused: true,
                    ease: "none"
                }));
                [
                    $bc07795d4ff84af9$var$screen3Ref,
                    ...$bc07795d4ff84af9$var$commonScreens,
                    ...$bc07795d4ff84af9$var$footerScreens
                ].forEach((screen)=>{
                    $bc07795d4ff84af9$var$screen1Tween.push((0, $l6B09.gsap).to(screen, {
                        top: `+=${$bc07795d4ff84af9$var$scrollDistance.get("screen1") - $bc07795d4ff84af9$var$videoOverlap - $bc07795d4ff84af9$var$videoOverlap / 3}px`,
                        paused: true,
                        ease: "none"
                    }));
                });
            }
            $bc07795d4ff84af9$var$screen1Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen3Horizontal") {
            if (!$bc07795d4ff84af9$var$screen3HorizontalTween.length) [
                $bc07795d4ff84af9$var$screen3Ref,
                ...$bc07795d4ff84af9$var$commonScreens,
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen3HorizontalTween.push((0, $l6B09.gsap).to(screen, {
                    top: `+=${$bc07795d4ff84af9$var$scrollDistance.get("screen3Horizontal")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen3HorizontalTween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen3") {
            if (!$bc07795d4ff84af9$var$screen3Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens,
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen3Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${(0, $jbrIz.height)($bc07795d4ff84af9$var$screen4Ref)}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen3Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen4") {
            if (!$bc07795d4ff84af9$var$screen4Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(1),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen4Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${$bc07795d4ff84af9$var$scrollDistance.get("screen4")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen4Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen5Horizontal") {
            if (!$bc07795d4ff84af9$var$screen5HorizontalTween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(1),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen5HorizontalTween.push((0, $l6B09.gsap).to(screen, {
                    top: `+=${$bc07795d4ff84af9$var$scrollDistance.get("screen5Horizontal")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen5HorizontalTween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen5") {
            if (!$bc07795d4ff84af9$var$screen5Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(2),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen5Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${$bc07795d4ff84af9$var$scrollDistance.get("screen5")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen5Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen6") {
            if (!$bc07795d4ff84af9$var$screen6Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(3),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen6Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${$bc07795d4ff84af9$var$scrollDistance.get("screen6")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen6Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen7") {
            if (!$bc07795d4ff84af9$var$screen7Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(4),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen7Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${$bc07795d4ff84af9$var$scrollDistance.get("screen7")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen7Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen8Horizontal") {
            if (!$bc07795d4ff84af9$var$screen8HorizontalTween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(4),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen8HorizontalTween.push((0, $l6B09.gsap).to(screen, {
                    top: `+=${$bc07795d4ff84af9$var$scrollDistance.get("screen8Horizontal")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen8HorizontalTween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen8") {
            if (!$bc07795d4ff84af9$var$screen8Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(5),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen8Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${$bc07795d4ff84af9$var$scrollDistance.get("screen8")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen8Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen9") {
            if (!$bc07795d4ff84af9$var$screen9Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(6),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen9Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${$bc07795d4ff84af9$var$scrollDistance.get("screen9")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen9Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen10") {
            if (!$bc07795d4ff84af9$var$screen10Tween.length) [
                ...$bc07795d4ff84af9$var$commonScreens.slice(7),
                ...$bc07795d4ff84af9$var$footerScreens
            ].forEach((screen)=>{
                $bc07795d4ff84af9$var$screen10Tween.push((0, $l6B09.gsap).to(screen, {
                    top: `-=${$bc07795d4ff84af9$var$scrollDistance.get("screen10")}px`,
                    paused: true,
                    ease: "none"
                }));
            });
            $bc07795d4ff84af9$var$screen10Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
        if (trigger.vars.id === "screen11") {
            if (!$bc07795d4ff84af9$var$screen11Tween.length) $bc07795d4ff84af9$var$screen11Tween.push((0, $l6B09.gsap).to($bc07795d4ff84af9$var$footerRef, {
                top: `+=${(0, $jbrIz.height)($bc07795d4ff84af9$var$footerRef)}px`,
                paused: true,
                ease: "none"
            }));
            if (trigger.progress < 0.3 && window.innerWidth > 1440) (0, $l6B09.gsap).set($bc07795d4ff84af9$var$screen10Ref, {
                backgroundColor: ""
            });
            if (trigger.progress > 0.6) {
                if (window.innerWidth > 1440) (0, $l6B09.gsap).set($bc07795d4ff84af9$var$screen10Ref, {
                    backgroundColor: getComputedStyle(window.document.body).getPropertyValue("--black")
                });
                (0, $l6B09.gsap).to($bc07795d4ff84af9$var$screen11Ref, {
                    scale: trigger.direction === 1 ? 0.9 : 1,
                    ease: "power2.out"
                });
                (0, $l6B09.gsap).to($bc07795d4ff84af9$var$submitButtonRef, {
                    xPercent: trigger.direction === 1 ? -5 : 5,
                    y: trigger.direction === 1 ? -((0, $jbrIz.height)($bc07795d4ff84af9$var$screen11Ref) * 0.1) / 2 : 0,
                    ease: "power2.out"
                });
            }
            $bc07795d4ff84af9$var$screen11Tween.forEach((tween)=>tween.totalProgress(trigger.progress));
        }
    }
    function initScrollTriggers() {
        let scrollTriggers = {};
        const createScrollTrigger = (0, $48d980a24a3f1465$export$2d3d93e556461272)($bc07795d4ff84af9$var$topContainerRef, $bc07795d4ff84af9$var$scrollContainerRef, scrollAnimationHandler);
        let viewportDiff = 0;
        // -----------video wrappers screens--------------
        let startScreen1 = 0;
        let endScreen1 = startScreen1 + (0, $jbrIz.height)($bc07795d4ff84af9$var$screen1Ref);
        let screen1Trigger = createScrollTrigger("screen1", startScreen1, endScreen1);
        let screen1Distance = endScreen1 - startScreen1;
        scrollTriggers = {
            ...scrollTriggers,
            screen1: screen1Trigger
        };
        $bc07795d4ff84af9$var$scrollDistance.set("screen1", screen1Distance);
        $bc07795d4ff84af9$var$scrollDistance.set("screen2", (0, $jbrIz.height)($bc07795d4ff84af9$var$screen2Ref) - $bc07795d4ff84af9$var$videoOverlap / 3);
        // next
        let deltaStart3 = (0, $jbrIz.height)($bc07795d4ff84af9$var$screen3Ref) > $bc07795d4ff84af9$var$viewportHeight + 120 ? (0, $jbrIz.height)($bc07795d4ff84af9$var$screen3Ref) - $bc07795d4ff84af9$var$viewportHeight - 120 : 0;
        let startScreen3Horizontal = endScreen1 + (0, $jbrIz.height)($bc07795d4ff84af9$var$screen2Ref) - 2 * $bc07795d4ff84af9$var$videoOverlap / 3 + deltaStart3;
        let screen3Circles = (0, $7Hbkn.els)("#screen3 .slider .circle");
        let screen3CircleWidth = screen3Circles[0].offsetHeight;
        let screen3Overlap = screen3CircleWidth * 0.1 > 60 ? 60 : screen3CircleWidth * 0.1;
        let screen3Accumulator = 0;
        screen3Circles.forEach((circle, index)=>{
            let offset = index === 0 ? 0 : screen3Overlap;
            (0, $l6B09.gsap).set(circle, {
                x: screen3CircleWidth * index - offset * index
            });
            screen3Accumulator += screen3CircleWidth - offset;
        });
        let endScreen3Horizontal = window.innerWidth > 900 && !(0, $jbrIz.isTouchDevice)() ? startScreen3Horizontal + screen3Accumulator - (0, $jbrIz.height)($bc07795d4ff84af9$var$screen3SliderRef) : startScreen3Horizontal;
        const screen3HorizontalTrigger = createScrollTrigger("screen3Horizontal", startScreen3Horizontal, endScreen3Horizontal);
        scrollTriggers = {
            ...scrollTriggers,
            screen3Horizontal: screen3HorizontalTrigger
        };
        let screen3HorizontalDistance = endScreen3Horizontal - startScreen3Horizontal;
        $bc07795d4ff84af9$var$scrollDistance.set("screen3Horizontal", screen3HorizontalDistance);
        addScreenNavigationPosition("screen3", startScreen3Horizontal);
        const screenIdEnter = `screen3Enter`;
        const startScreenEnterTrigger = getScreenNavigationPosition("screen3") - $bc07795d4ff84af9$var$viewportHeight / 3;
        const screenEnterTrigger = createScrollTrigger(screenIdEnter, startScreenEnterTrigger, startScreenEnterTrigger + 100);
        // next
        let elHeight = (0, $jbrIz.height)($bc07795d4ff84af9$var$screen4Ref);
        let startScreen3 = endScreen3Horizontal;
        let endScreen3 = startScreen3 + ((0, $jbrIz.height)($bc07795d4ff84af9$var$screen3Ref) - elHeight) - deltaStart3;
        const screen3Trigger = createScrollTrigger("screen3", startScreen3, endScreen3);
        scrollTriggers = {
            ...scrollTriggers,
            screen3: screen3Trigger,
            screen3Enter: screenEnterTrigger
        };
        let screen3Distance = endScreen3;
        $bc07795d4ff84af9$var$scrollDistance.set("screen3", screen3Distance);
        // -----------video wrappers screens--------------
        // other
        let lastEndScrollTrigger = endScreen3;
        let endScrollHorizontalTrigger = 0;
        let screenId;
        $bc07795d4ff84af9$var$commonScreens.forEach((screenRef, index)=>{
            let screenStartPosition;
            screenId = `screen${index + 4}`;
            const viewportCutOffset = (0, $jbrIz.calcOverflowOffset)(screenRef, $bc07795d4ff84af9$var$viewportHeight);
            let startScreenHorizontalTrigger = 0;
            let deltaStart8 = (0, $jbrIz.height)($bc07795d4ff84af9$var$screen8Ref) > $bc07795d4ff84af9$var$viewportHeight + 60 ? (0, $jbrIz.height)($bc07795d4ff84af9$var$screen8Ref) - $bc07795d4ff84af9$var$viewportHeight - 60 : 0;
            if (screenId === "screen5" || screenId === "screen8") {
                const extraDistance = 0;
                const screenIdHorizontal = `${screenId}Horizontal`;
                startScreenHorizontalTrigger = lastEndScrollTrigger;
                if (screenId === "screen8") startScreenHorizontalTrigger += deltaStart8;
                let screen8Circles = (0, $7Hbkn.els)("#screen8 .slider .circle");
                let screen8CircleWidth = screen8Circles[0].offsetHeight;
                let screen8Overlap = screen8CircleWidth * 0.1 > 60 ? 60 : screen8CircleWidth * 0.1;
                let screen8Accumulator = 0;
                screen8Circles.forEach((circle, index)=>{
                    let offset = index === 0 ? 0 : screen8Overlap;
                    (0, $l6B09.gsap).set(circle, {
                        x: screen8CircleWidth * index - offset * index
                    });
                    screen8Accumulator += screen8CircleWidth - offset;
                });
                const distance = screenId === "screen5" ? (0, $jbrIz.height)($bc07795d4ff84af9$var$screen5SliderRef) : window.innerWidth > 900 && !(0, $jbrIz.isTouchDevice)() ? screen8Accumulator - (0, $jbrIz.height)($bc07795d4ff84af9$var$screen3SliderRef) : 0;
                endScrollHorizontalTrigger = startScreenHorizontalTrigger + distance;
                const screenHorizontalTrigger = createScrollTrigger(screenIdHorizontal, startScreenHorizontalTrigger, endScrollHorizontalTrigger);
                const horizontalDistance = endScrollHorizontalTrigger - startScreenHorizontalTrigger;
                $bc07795d4ff84af9$var$scrollDistance.set(screenIdHorizontal, horizontalDistance);
                scrollTriggers = {
                    ...scrollTriggers,
                    [screenIdHorizontal]: screenHorizontalTrigger
                };
                lastEndScrollTrigger = endScrollHorizontalTrigger;
                if (screenId === "screen8") lastEndScrollTrigger -= deltaStart8;
                screenStartPosition = startScreenHorizontalTrigger;
            }
            elHeight = (0, $jbrIz.height)(screenRef);
            let startScreenTrigger = lastEndScrollTrigger + viewportCutOffset;
            lastEndScrollTrigger = startScreenTrigger + elHeight / 2 - viewportCutOffset / 2;
            if (!screenStartPosition) screenStartPosition = startScreenTrigger - viewportCutOffset;
            addScreenNavigationPosition(screenId, screenStartPosition);
            const screenTrigger = createScrollTrigger(screenId, startScreenTrigger, lastEndScrollTrigger);
            const distance1 = lastEndScrollTrigger - startScreenTrigger;
            $bc07795d4ff84af9$var$scrollDistance.set(screenId, distance1);
            const screenIdEnter = `${screenId}Enter`;
            const startScreenEnterTrigger = getScreenNavigationPosition(screenId) - $bc07795d4ff84af9$var$viewportHeight / 3;
            const screenEnterTrigger = createScrollTrigger(screenIdEnter, startScreenEnterTrigger, startScreenEnterTrigger);
            scrollTriggers = {
                ...scrollTriggers,
                [screenId]: screenTrigger,
                [screenIdEnter]: screenEnterTrigger
            };
        });
        addScreenNavigationPosition("screen11", lastEndScrollTrigger);
        addScreenNavigationPosition("footer", lastEndScrollTrigger + (0, $jbrIz.height)($bc07795d4ff84af9$var$screen11Ref) + (0, $jbrIz.height)($bc07795d4ff84af9$var$footerRef) - $bc07795d4ff84af9$var$viewportHeight);
        screenId = `screen11Enter`;
        const startScreen11EnterTrigger = getScreenNavigationPosition("screen11") - $bc07795d4ff84af9$var$viewportHeight / 3;
        const endScreen11EnterTrigger = startScreen11EnterTrigger + 100;
        const screen11EnterTrigger = createScrollTrigger(screenId, startScreen11EnterTrigger, endScreen11EnterTrigger);
        scrollTriggers = {
            ...scrollTriggers,
            [screenId]: screen11EnterTrigger
        };
        screenId = `screen11`;
        const extraDistance = $bc07795d4ff84af9$var$viewportHeight > (0, $jbrIz.height)($bc07795d4ff84af9$var$screen11Ref) ? ($bc07795d4ff84af9$var$viewportHeight - (0, $jbrIz.height)($bc07795d4ff84af9$var$screen11Ref)) / 2 : 0;
        const startScreen11Trigger = lastEndScrollTrigger + (0, $jbrIz.height)($bc07795d4ff84af9$var$screen11Ref) + extraDistance;
        const endScreen11Trigger = startScreen11Trigger + (0, $jbrIz.height)($bc07795d4ff84af9$var$footerRef);
        const screen11Trigger = createScrollTrigger(screenId, startScreen11Trigger, endScreen11Trigger, "bottom", "bottom");
        $bc07795d4ff84af9$var$scrollDistance.set("screen11", endScreen11Trigger - startScreen11Trigger);
        scrollTriggers = {
            ...scrollTriggers,
            [screenId]: screen11Trigger
        };
        (0, $dfMDe.updateOneState)("scrollTriggers", scrollTriggers);
    }
    function initScreensPositions() {
        let offsetAccumulator = 0;
        (0, $l6B09.gsap).set($bc07795d4ff84af9$var$screen1Ref, {
            top: offsetAccumulator
        });
        offsetAccumulator = $bc07795d4ff84af9$var$videoOverlap;
        (0, $l6B09.gsap).set($bc07795d4ff84af9$var$screen2Ref, {
            top: `${offsetAccumulator}px`
        });
        offsetAccumulator += (0, $jbrIz.height)($bc07795d4ff84af9$var$screen2Ref) - $bc07795d4ff84af9$var$videoOverlap / 3;
        (0, $l6B09.gsap).set($bc07795d4ff84af9$var$screen3Ref, {
            top: `${offsetAccumulator}px`
        });
        offsetAccumulator += (0, $jbrIz.height)($bc07795d4ff84af9$var$screen3Ref);
        [
            ...$bc07795d4ff84af9$var$commonScreens,
            $bc07795d4ff84af9$var$screen11Ref
        ].forEach((screen, index)=>{
            (0, $l6B09.gsap).set(screen, {
                top: `${offsetAccumulator}px`
            });
            offsetAccumulator += screen.offsetHeight;
        });
        (0, $l6B09.gsap).set($bc07795d4ff84af9$var$submitButtonRef, {
            top: window.innerWidth > 1400 ? `${offsetAccumulator - 340}px` : window.innerWidth > 1000 ? `${offsetAccumulator - 280}px` : `${offsetAccumulator - 230}px`
        });
        // put under form
        (0, $l6B09.gsap).set($bc07795d4ff84af9$var$footerRef, {
            top: `${offsetAccumulator - (0, $jbrIz.height)($bc07795d4ff84af9$var$footerRef)}px`
        });
        (0, $l6B09.gsap).set($bc07795d4ff84af9$var$ghostRef, {
            height: `${getScreenNavigationPosition("screen11") + (0, $jbrIz.height)($bc07795d4ff84af9$var$screen11Ref) + (0, $jbrIz.height)($bc07795d4ff84af9$var$footerRef)}px`
        });
    }
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    /*     if (!bodyScrollBar) {
        return
     }
     if (getState().burger) {
         bodyScrollBar.updatePluginOptions('modal', {open: true})
     } else {
         bodyScrollBar.updatePluginOptions('modal', {open: false})
   }*/ $bc07795d4ff84af9$var$topContainerRef = (0, $7Hbkn.el)("#topContainerRef");
    $bc07795d4ff84af9$var$scrollContainerRef = (0, $7Hbkn.el)("#scrollContainerRef");
    $bc07795d4ff84af9$var$ghostRef = (0, $7Hbkn.el)("#ghostRef");
    $bc07795d4ff84af9$var$headerRef = (0, $7Hbkn.el)("#header");
    $bc07795d4ff84af9$var$chelkaRef = (0, $7Hbkn.el)("#chelkaRef");
    $bc07795d4ff84af9$var$screen1Ref = (0, $7Hbkn.el)("#screen1");
    $bc07795d4ff84af9$var$screen2Ref = (0, $7Hbkn.el)("#screen2");
    $bc07795d4ff84af9$var$screen3Ref = (0, $7Hbkn.el)("#screen3");
    $bc07795d4ff84af9$var$screen3SliderRef = (0, $7Hbkn.el)("#screen3 .sliderRef");
    let screen3circle = (0, $7Hbkn.el)("#screen3 .circle");
    $bc07795d4ff84af9$var$headerScreen3Ref = (0, $7Hbkn.el)("#screen3 #headerScreen");
    $bc07795d4ff84af9$var$screen4Ref = (0, $7Hbkn.el)("#screen4");
    $bc07795d4ff84af9$var$screen5Ref = (0, $7Hbkn.el)("#screen5");
    $bc07795d4ff84af9$var$screen5SliderRef = (0, $7Hbkn.el)("#screen5 #sliderRef");
    $bc07795d4ff84af9$var$screen6Ref = (0, $7Hbkn.el)("#screen6");
    $bc07795d4ff84af9$var$screen7Ref = (0, $7Hbkn.el)("#screen7");
    $bc07795d4ff84af9$var$screen8Ref = (0, $7Hbkn.el)("#screen8");
    $bc07795d4ff84af9$var$screen8SliderRef = (0, $7Hbkn.el)("#screen8 .sliderRef");
    $bc07795d4ff84af9$var$screen9Ref = (0, $7Hbkn.el)("#screen9");
    $bc07795d4ff84af9$var$screen10Ref = (0, $7Hbkn.el)("#screen10");
    $bc07795d4ff84af9$var$screen11Ref = (0, $7Hbkn.el)("#screen11");
    $bc07795d4ff84af9$var$footerRef = (0, $7Hbkn.el)("#footer");
    $bc07795d4ff84af9$var$submitButtonRef = (0, $7Hbkn.el)("#submit-button");
    $bc07795d4ff84af9$var$followCursorRef = (0, $7Hbkn.el)("#cursor");
    $bc07795d4ff84af9$var$onScrollToSection = (section)=>{
        const duration = 2000;
        switch(section){
            case "about":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen3"), false);
                break;
            case "technology":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen5"), false);
                break;
            case "applying":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen7"), false);
                break;
            case "bennefits":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen8"), false);
                break;
            case "projects":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen9"), false);
                break;
            case "steps":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen10"), false);
                break;
            case "contacts":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen11"), false);
                break;
            case "form":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, getScreenNavigationPosition("screen11"), false);
                break;
            case "top":
                $bc07795d4ff84af9$var$bodyScrollBar.scrollTo(0, 0, duration);
                break;
        }
    };
    (0, $dfMDe.selectState)((newState)=>{
        $bc07795d4ff84af9$var$onScrollToSection((0, $dfMDe.getState)().scrollPage);
    }, "scrollPage");
    $bc07795d4ff84af9$var$topContainerRef.addEventListener("mousemove", (e)=>handleCursorFolowMove(e), false);
    const handleCursorFolowMove = (e)=>{
        const target = e.target;
        if (!target) return;
        $bc07795d4ff84af9$var$followCursorRef.style.left = +e.pageX + "px";
        $bc07795d4ff84af9$var$followCursorRef.style.top = $bc07795d4ff84af9$var$ghostRef.scrollTop + e.pageY + "px";
    };
    $bc07795d4ff84af9$var$footerScreens = [
        $bc07795d4ff84af9$var$screen11Ref,
        $bc07795d4ff84af9$var$footerRef,
        $bc07795d4ff84af9$var$submitButtonRef
    ];
    $bc07795d4ff84af9$var$commonScreens = [
        $bc07795d4ff84af9$var$screen4Ref,
        $bc07795d4ff84af9$var$screen5Ref,
        $bc07795d4ff84af9$var$screen6Ref,
        $bc07795d4ff84af9$var$screen7Ref,
        $bc07795d4ff84af9$var$screen8Ref,
        $bc07795d4ff84af9$var$screen9Ref,
        $bc07795d4ff84af9$var$screen10Ref
    ];
    $bc07795d4ff84af9$var$allScreens = [
        $bc07795d4ff84af9$var$screen1Ref,
        $bc07795d4ff84af9$var$screen2Ref,
        $bc07795d4ff84af9$var$screen3Ref,
        ...$bc07795d4ff84af9$var$commonScreens,
        ...$bc07795d4ff84af9$var$footerScreens
    ];
    initWindowStaff();
    $bc07795d4ff84af9$var$bodyScrollBar = (0, $7PrnQ.initSmoothScrollbar)($bc07795d4ff84af9$var$topContainerRef);
    (0, $l6B09.gsap).context(()=>{
        $bc07795d4ff84af9$var$viewportHeight = window.innerHeight;
        initScrollTriggers();
        initScreensPositions();
        (0, $48d980a24a3f1465$export$9ba0048c63cbc3aa)($bc07795d4ff84af9$var$bodyScrollBar);
    }, $bc07795d4ff84af9$var$topContainerRef.current);
    (0, $12519b14ec31939a$export$864492cc36471f19)($bc07795d4ff84af9$var$allScreens.map((screenRef)=>screenRef));
    $bc07795d4ff84af9$var$bodyScrollBar.updatePluginOptions("modal", {
        open: false
    });
    $bc07795d4ff84af9$var$bodyScrollBar.updatePluginOptions("screenStop", {
        points: Array.from($bc07795d4ff84af9$var$startScreenNavigationPositions.values())
    });
}
(0, $jbrIz.onDomReady)($bc07795d4ff84af9$export$f22da7240b7add18);

