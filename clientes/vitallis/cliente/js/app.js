/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/raf.js
var raf_win = window;

var raf = raf_win.requestAnimationFrame
  || raf_win.webkitRequestAnimationFrame
  || raf_win.mozRequestAnimationFrame
  || raf_win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/caf.js
var caf_win = window;

var caf = caf_win.cancelAnimationFrame
  || caf_win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/extend.js
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/checkStorageValue.js
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setLocalStorage.js
function setLocalStorage(storage, key, value, access) {
  if (access) { storage.setItem(key, value); }
  return value;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getSlideId.js
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getBody.js
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/docElement.js
var docElement = document.documentElement;
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setFakeBody.js


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = docElement.style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  return docOverflow;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/resetFakeBody.js


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    docElement.offsetHeight;
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/calc.js
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = getBody(),
      docOverflow = setFakeBody(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return result;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/percentageLayout.js
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();

  return supported;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js




function mediaquerySupport () {
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return position === "absolute";
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/createStyleSheet.js
// create and append style sheet
function createStyleSheet (media) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addCSSRule.js
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeCSSRule.js
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/toDegree.js
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getTouchDirection.js
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/forEachNodeList.js
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEachNodeList (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/classListSupport.js
var classListSupport = 'classList' in document.createElement('_');
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hasClass.js


var hasClass = classListSupport ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };


// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addClass.js

var addClass = classListSupport ?
    function (el, str) {
      if (!hasClass(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!hasClass(el,  str)) { el.className += ' ' + str; }
    };


// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeClass.js

var removeClass = classListSupport ?
    function (el, str) {
      if (hasClass(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (hasClass(el, str)) { el.className = el.className.replace(str, ''); }
    };


// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hasAttr.js
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getAttr.js
function getAttr(el, attr) {
  return el.getAttribute(attr);
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/isNodeList.js
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setAttrs.js


function setAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeAttrs.js


function removeAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hideElement.js



function hideElement(el) {
  if (!hasAttr(el, 'hidden')) {
    setAttrs(el, {'hidden': ''});
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/showElement.js



function showElement(el) {
  if (hasAttr(el, 'hidden')) {
    removeAttrs(el, 'hidden');
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/isVisible.js
function isVisible(el) {
  return el.offsetWidth > 0 && el.offsetHeight > 0;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/whichProperty.js
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/has3DTransforms.js




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? resetFakeBody(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getEndProperty.js
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/passiveOption.js
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var passiveOption_opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, passiveOption_opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addEvents.js


function addEvents(el, obj) {
  for (var prop in obj) {
    var option = (prop === 'touchstart' || prop === 'touchmove') ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeEvents.js


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/events.js
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };
};
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/jsTransform.js
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/tiny-slider.module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
// helper functions
if (!Object.keys) {
    Object.keys = function (object) {
        var keys = [];
        for (var name in object) {
            if (Object.prototype.hasOwnProperty.call(object, name)) {
                keys.push(name);
            }
        }
        return keys;
    };
}
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}



































var tns = function(options) {
  options = extend({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    controls: true,
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  
  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      list = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'], optionsElements = {};
  for (var i = list.length; i--;) {
    var item = list[i];
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  }

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = extend(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
      }
      if (nested === 'outer' && key === 'autoHeight') { obj[key] = true; }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel || nested === 'outer') { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn;
  if (responsive) { setBreakpointZone(); }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = createStyleSheet(),
      lazyload = options.lazyload,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return Math.floor(- rightBoundary / (fixedWidth + gutter)) + 1; };
        } else if (autoWidth) {
          return function() {
            for (var i = slideCountNew, result = i - 1; i--;) {
              if (slidePositions[i] > - rightBoundary) { result = i; }
            }
            return result;
          };
        } else {
          return function() {
            return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new Events(),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || getSlideId(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': imgLoadedOrError,
        'error': imgLoadedOrError
      },
      imgsComplete;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        visibleNavIndexes = [],
        visibleNavIndexesCached = visibleNavIndexes,
        navClicked = -1,
        navCurrentIndex = getAbsIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex = 0,
        getDist = horizontal ? 
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }
  
  // disable slider when slidecount <= items
  resetVariblesWhenDisable(disable || freeze);

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  sliderInit();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getClientWidth (el) {
    return el.clientWidth || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    return getClientWidth(containerParent) - (edgePadding * 2 - gutter);
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor(viewport / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem) {
    var str = '';

    if (edgePaddingTem) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (TRANSITIONDURATION && speedTem) { str += getTrsnsitionDurationStyle(speedTem); }
    
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? 
        CALC + '(100% / ' + dividend + ')' : 
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTrsnsitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function sliderInit () {
    initStructure();

    // add id, class, aria attributes 
    // before clone slides
    for (var x = 0; x < slideCount; x++) {
      var item = slideItems[x];
      if (!item.id) { item.id = slideId + '-item' + x; }
      addClass(item, 'tns-item');
      if (!carousel && animateNormal) { addClass(item, animateNormal); }
      setAttrs(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(), 
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        removeAttrs(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          removeAttrs(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

    initSheet();
    initSliderTransform();
    if (!autoWidth) { initUI(); }
    if (responsive) { setBreakpointZone(); }

    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      addEvents(container, eve);
    }

    if (touch) { addEvents(container, touchEvents); }
    if (mouseDrag) { addEvents(container, dragEvents); }
    if (arrowKeys) { addEvents(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || !horizontal) {
      addEvents(win, {'resize': onResize});
    }

    if (nested === 'outer') {
      events.on('innerLoaded', runAutoHeight);
    } else if ((autoHeight || !carousel) && !disable) {
      runAutoHeight();
    }

    if (!autoWidth) { lazyLoad(); }

    if (disable) {
      disableSlider();
    } else if (freeze) {
      freezeSlider();
    }

    events.on('indexChanged', additionalUpdates);
    if (typeof onInit === 'function') { onInit(info()); }
    if (nested === 'inner') { events.emit('innerLoaded', info()); }

    isOn = true;
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';
    if (autoHeight) { innerWrapper.className += ' tns-ah'; }

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (carousel) { newContainerClasses += ' tns-' + options.axis; }
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      var middleWrapper = doc.createElement('div');
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);
  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add complete class if all images are loaded/failed
      forEachNodeList(imgs, function(img) {
        var src = img.src;

        if (src.indexOf('data:image') < 0) {
          addEvents(img, imgEvents);
          img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
          img.src = src;
        } else {
          addClass(img, imgCompleteClass);
        }
      });

      raf(function(){ imageLoaded(arrayFromNodeList(imgs), function() {
        // set imgsComplete to true
        imgsComplete = true;

        // check styles application
        var num = loop ? index : slideCount - 1;
        (function checkStylesApplication() {
          slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ?
          temp() :
          setTimeout(function(){ checkStylesApplication() }, 16);
        })();

        function temp () {
          // run Fn()s which are rely on image loading
          if (!disable) {
            if (!horizontal || autoWidth) {
              getSlidePositions();
              lazyLoad();

              if (autoWidth) {
                // items = getOption('items');
                rightBoundary = getRightBoundary();
                if (freezable) { freeze = getFreeze(); }
                indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=

                if (freeze) {
                  controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
                }

                // update slider UI
                initUI();

              } else {
                updateContentWrapperHeight();
              }
            }

            // set container transform property
            if (carousel) {
              doContainerTransformSilent();
            }
          }
        }

      }); });
    }
    if (carousel && horizontal && !autoWidth) { doContainerTransformSilent(); }
  }

  function initSheet () {
    // activate visible slides
    // add aria attrs
    // set animation classes and left value for gallery slider
    // use slide count when slides are fewer than items
    for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
      var item = slideItems[i];
      setAttrs(item, {'aria-hidden': 'false'});
      removeAttrs(item, ['tabindex']);
      addClass(item, slideActiveClass);

      if (!carousel) { 
        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (carousel && horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
        addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
      } else {
        forEachNodeList(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // inner wrapper styles
      var str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed);
      addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTrsnsitionDurationStyle(speed); }
        addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTrsnsitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            gutterBP = getOption('gutter', bp);

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTrsnsitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTrsnsitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initUI () {
    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        setAttrs(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML('afterbegin', '<button data-action="' + txt + '" type="button">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        addEvents(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { addEvents(container, hoverEvents); }
        if (autoplayResetOnVisibility) { addEvents(container, visibilityEvent); }
      }
    }
 
    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        for (var i = 0; i < slideCount; i++) {
          var item = navItems[i];
          if (item) {
            setAttrs(item, {
              'data-nav': i,
              'tabindex': '-1',
              'aria-selected': 'false',
              'aria-controls': slideItems[initIndex + i].id,
            });
          }
        }

      // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'hidden';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-selected="false" aria-controls="' + slideItems[initIndex + i].id + '" ' + hiddenStr + ' type="button"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML('afterbegin', navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
      }

      setAttrs(navItems[navCurrentIndex], {'tabindex': '0', 'aria-selected': 'true'});
      addClass(navItems[navCurrentIndex], navActiveClass);

      // add events
      addEvents(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (controlsContainer || (prevButton && nextButton)) {
        if (controlsContainer) {
          prevButton = controlsContainer.children[0];
          nextButton = controlsContainer.children[1];
          setAttrs(controlsContainer, {
            'aria-label': 'Carousel Navigation',
            'tabindex': '0'
          });
          setAttrs(controlsContainer.children, {
            'aria-controls': slideId,
            'tabindex': '-1',
          });
        }
        
        setAttrs(prevButton, {'data-controls' : 'prev'});
        setAttrs(nextButton, {'data-controls' : 'next'});
      } else {
        outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        addEvents(controlsContainer, controlsEvents);
      } else {
        addEvents(prevButton, controlsEvents);
        addEvents(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();


  }

  function destroy () {
    // sheet
    sheet.disabled = true;

    // remove win event listeners
    removeEvents(win, {'resize': onResize});

    // remove arrowKeys event listener
    if (arrowKeys) { removeEvents(doc, docmentKeydownEvent); }

    // controls
    if (controlsContainer) { removeEvents(controlsContainer, controlsEvents); }
    if (controlsContainerHTML) { controlsContainer.outerHTML = controlsContainerHTML; }

    // nav
    if (navContainer) { removeEvents(navContainer, navEvents); }
    if (navContainerHTML) { navContainer.outerHTML = navContainerHTML; }

    // autoplay
    removeEvents(container, hoverEvents);
    removeEvents(container, visibilityEvent);
    if (autoplayButton) { removeEvents(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }
    if (autoplayButtonHTML) { autoplayButton.outerHTML = autoplayButtonHTML; }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      removeEvents(container, eve);
    }
    if (touch) { removeEvents(container, touchEvents); }
    if (mouseDrag) { removeEvents(container, dragEvents); }
    outerWrapper.outerHTML = containerHTML;
    // outerWrapper.insertAdjacentHTML('beforebegin', containerHTML);
    // outerWrapper.remove();

    // reset variables
    animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = visibleNavIndexes = visibleNavIndexesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, visibleNavIndexes, visibleNavIndexesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    this.getInfo = this.events = this.goTo = this.play = this.pause = this.destroy = null;
    this.isOn = isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    raf(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      getSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= getSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }
    
    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        addEvents(doc, docmentKeydownEvent) :
        removeEvents(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      controls ?
        showElement(controlsContainer) :
        hideElement(controlsContainer); 
    }
    if (nav !== navTem) {
      if (nav) {
        showElement(navContainer);
        updateNavVisibility();
      } else {
        hideElement(navContainer);
      }
    }
    if (touch !== touchTem) {
      touch ?
        addEvents(container, touchEvents) :
        removeEvents(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        addEvents(container, dragEvents) :
        removeEvents(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { showElement(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { hideElement(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        addEvents(container, hoverEvents) :
        removeEvents(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        addEvents(doc, visibilityEvent) :
        removeEvents(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    }

    indChanged = index !== indexTem;
    if (indChanged) { 
      events.emit('indexChanged', info());
      needContainerTransform = true;
    }

    if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
      if (!carousel) { updateGallerySlidePositions(); }
    }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        }
      }

      // auto height
      if (autoHeight || !carousel) { runAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) { return slideCount <= items; }

    if (fixedWidth) {
      return (fixedWidth + gutter) * slideCount <= viewport + edgePadding * 2;
    } else {
      var width = loop ? slidePositions[slideCount] : getSliderWidth();
      return width <= viewport + edgePadding * 2;
    }
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? 
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge padding
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if (viewport%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { hideElement(autoplayButton); }
    if (!nav && navContainer) { hideElement(navContainer); }
    if (!controls && controlsContainer) { hideElement(controlsContainer); }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { showElement(autoplayButton); }
    if (nav && navContainer) { showElement(navContainer); }
    if (controls && controlsContainer) { showElement(controlsContainer); }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { addClass(slideItems[i], str); }
        addClass(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { removeClass(slideItems[i], str); }
        removeClass(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    removeAttrs(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { hideElement(slideItems[j]); }
        hideElement(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { removeAttrs(innerWrapper, ['style']); }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        removeAttrs(item, ['style']);
        removeClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { showElement(slideItems[j]); }
        showElement(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function lazyLoad () {
    if (lazyload && !disable) {
      var i = index, len;

      if (!autoWidth) {
        len = index + items;
      } else {
        var a = index + 1,
            len = a,
            edge = slidePositions[index] + viewport + edgePadding - gutter;
        while (slidePositions[a] < edge) {
          a++;
          len = a;
        }
      }

      if (edgePadding) {
        i -=1;
        if (!autoWidth) { len +=1; }
      }

      i = Math.floor(Math.max(i, 0));
      len = Math.ceil(Math.min(len, slideCountNew));

      for(; i < len; i++) {
        forEachNodeList(slideItems[i].querySelectorAll('.tns-lazy-img'), function (img) {
          // stop propagationl transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          addEvents(img, eve);

          if (!hasClass(img, 'loaded')) {
            img.src = getAttr(img, 'data-src');
            addClass(img, 'loaded');
          }
        });
      }
    }
  }


  function imgLoadedOrError (e) {
    var img = getTarget(e);
    addClass(img, imgCompleteClass);
    removeEvents(img, imgEvents);
  }

  function getImageArray (slideStart, slideRange) {
    var imgs = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      forEachNodeList(slideItems[i].querySelectorAll('img'), function (img) {
        imgs.push(img);
      });
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function runAutoHeight () {
    var imgs = autoHeight ?
        getImageArray(index, items) :
        getImageArray(cloneCount, slideCount);

    raf(function(){ imageLoaded(imgs, updateInnerWrapperHeight); });
  }

  function imageLoaded (imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check selected image classes otherwise
    imgs.forEach(function (img, index) {
      if (hasClass(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    raf(function(){ imageLoaded(imgs, cb); });
  } 

  function additionalUpdates () {
    lazyLoad(); 
    updateSlideStatus();
    updateControlsStatus();
    updateNavVisibility();
    updateNavStatus();
  }


  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? 
        getMaxSlideHeight(index, items) :
        getMaxSlideHeight(cloneCount, slideCount);

    if (innerWrapper.style.height !== maxHeight) { innerWrapper.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function getSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        first = slideItems[0].getBoundingClientRect()[attr],
        position;
    for (var i = 1; i < slideCountNew; i++) {
      position = slideItems[i].getBoundingClientRect()[attr];
      slidePositions.push(position - first);
    }
  }

  // update slide
  function updateSlideStatus () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];
      
      // visible slides
      if (i >= index && i < l) {
        if (hasAttr(item, 'tabindex')) {
          setAttrs(item, {'aria-hidden': 'false'});
          removeAttrs(item, ['tabindex']);
          addClass(item, slideActiveClass);
        }
      // hidden slides
      } else {
        if (!hasAttr(item, 'tabindex')) {
          setAttrs(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
        }
        if (hasClass(item, slideActiveClass)) {
          removeClass(item, slideActiveClass);
        }
      }
    }
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        addClass(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        addClass(item, animateNormal);
        removeClass(item, animateIn);
      }

      // remove outlet animation
      removeClass(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      forEachNodeList(slideItems, function(el) {
        removeClass(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex & aria-selected on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked !== -1 ? navClicked : getAbsIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        setAttrs(navPrev, {
          'tabindex': '-1',
          'aria-selected': 'false'
        });
        setAttrs(navCurrent, {
          'tabindex': '0',
          'aria-selected': 'true'
        });
        removeClass(navPrev, navActiveClass);
        addClass(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew :
        slidePositions[slideCountNew - 1] + slideItems[slideCountNew - 1].getBoundingClientRect().width;
  }

  function getRightBoundary () {
    var result = viewport - (getSliderWidth() - gutter);
    if (edgePadding) { result += edgePadding - gutter; }
    if (result > 0) { result = 0; }
    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }
    // // remove edge padding for non-loop
    // if (horizontal && !loop && edgePadding) {
    //   var gap = edgePadding;

    //   if (!autoWidth && !fixedWidth) {
    //     gap = TRANSFORM ? gap * 100 / (viewport * slideCountNew / items) : gap / viewport;
    //   }

    //   if (num <= 0) {
    //     val -= gap;
    //   } else if (num >= indexMax && !autoWidth && !fixedWidth) {
    //     val += gap;
    //   }
    // }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
    setTimeout(function() { resetDuration(container, ''); }, 10);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      removeClass(item, classOut);
      addClass(item, classIn);
      
      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!speed || !isVisible(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { runAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) { 
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          removeClass(item, animateOut);
          addClass(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */
      if (!event || 
          !carousel && event.target.parentNode === container || 
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) { 
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) { 
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        } 

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) { onTransitionEnd(); }

      var absIndex = getAbsIndex(), 
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) {
            targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
          }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) { onTransitionEnd(); }

    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = e.target || e.srcElement;

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) { onTransitionEnd(); }
    
    e = getEvent(e);
    var target = e.target || e.srcElement,
        navIndex;

    // find the clicked nav item
    while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
    if (hasAttr(target, 'data-nav')) {
      navIndex = navClicked = [].indexOf.call(navItems, target);
      goTo(navIndex, e);
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    setAttrs(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) { 
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) { 
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document 
  function onDocumentKeydown (e) {
    e = getEvent(e);
    switch(e.keyCode) {
      case KEYS.LEFT:
        onControlsClick(e, -1);
        break;
      case KEYS.RIGHT:
        onControlsClick(e, 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var code = e.keyCode;

    switch (code) {
      case KEYS.LEFT:
      case KEYS.UP:
      case KEYS.PAGEUP:
          if (!prevButton.disabled) {
            onControlsClick(e, -1);
          }
          break;
      case KEYS.RIGHT:
      case KEYS.DOWN:
      case KEYS.PAGEDOWN:
          if (!nextButton.disabled) {
            onControlsClick(e, 1);
          }
          break;
      case KEYS.HOME:
        goTo('first', e);
        break;
      case KEYS.END:
        goTo('last', e);
        break;
    }
  }

  // set focus
  function setFocus (focus) {
    focus.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    var curElement = doc.activeElement;
    if (!hasAttr(curElement, 'data-nav')) { return; }

    e = getEvent(e);
    var code = e.keyCode,
        navIndex = [].indexOf.call(navItems, curElement),
        len = visibleNavIndexes.length,
        current = visibleNavIndexes.indexOf(navIndex);

    if (options.navContainer) {
      len = slideCount;
      current = navIndex;
    }

    function getNavIndex (num) {
      return options.navContainer ? num : visibleNavIndexes[num];
    }

    switch(code) {
      case KEYS.LEFT:
      case KEYS.PAGEUP:
        if (current > 0) { setFocus(navItems[getNavIndex(current - 1)]); }
        break;

      case KEYS.UP:
      case KEYS.HOME:
        if (current > 0) { setFocus(navItems[getNavIndex(0)]); }
        break;

      case KEYS.RIGHT:
      case KEYS.PAGEDOWN:
        if (current < len - 1) { setFocus(navItems[getNavIndex(current + 1)]); }
        break;

      case KEYS.DOWN:
      case KEYS.END:
        if (current < len - 1) { setFocus(navItems[getNavIndex(len - 1)]); }
        break;

      // Can't use onNavClick here,
      // Because onNavClick require event.target as nav items
      case KEYS.ENTER:
      case KEYS.SPACE:
        navClicked = navIndex;
        goTo(navIndex, e);
        break;
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function onPanStart (e) {
    if (running) { onTransitionEnd(); }
    
    panStart = true;
    if (carousel) {
      caf(rafIndex);
      rafIndex = 0;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = parseInt($.clientX);
    lastPosition.y = initPosition.y = parseInt($.clientY);
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, '').replace(transformPostfix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = parseInt($.clientX);
      lastPosition.y = parseInt($.clientY);

      if (carousel && !rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
    }
  }

  function updateMoveDirectionExpected () {
    if (
      moveDirectionExpected === '?' && 
      lastPosition.x !== initPosition.x && 
      lastPosition.y !== initPosition.y) {
      moveDirectionExpected = getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    caf(rafIndex);
    if (panStart) { rafIndex = raf(function(){ panUpdate(e); }); }

    updateMoveDirectionExpected();
    if (moveDirectionExpected) {
      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / (viewport * slideCountNew): dist * 100 / viewport;
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (carousel) {
        caf(rafIndex);
        resetDuration(container, '');
      }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = parseInt($.clientX);
      lastPosition.y = parseInt($.clientY);
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist) >= 5) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          addEvents(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            removeEvents(target, {'click': preventClick});
          }}); 
        }

        if (carousel) {
          rafIndex = raf(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / viewport;
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slidePositions.length - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          updateMoveDirectionExpected();
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    if (swipeAngle) { moveDirectionExpected = '?'; } // reset
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    innerWrapper.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  /*
   * get nav item indexes per items
   * add 1 more if the nav items cann't cover all slides
   * [0, 1, 2, 3, 4] / 3 => [0, 3]
   */
  function getVisibleNavIndex () {
    // reset visibleNavIndexes
    visibleNavIndexes = [];

    var absIndexMin = getAbsIndex()%items;
    while (absIndexMin < slideCount) {
      if (carousel && !loop && absIndexMin + items > slideCount) { absIndexMin = slideCount - items; }
      visibleNavIndexes.push(absIndexMin);
      absIndexMin += items;
    }

    // nav count * items < slide count means
    // some slides can not be displayed only by nav clicking
    if (loop && visibleNavIndexes.length * items < slideCount ||
        !loop && visibleNavIndexes[0] > 0) {
      visibleNavIndexes.unshift(0);
    }
  }
  
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }
    getVisibleNavIndex();

    if (visibleNavIndexes !== visibleNavIndexesCached) {
      forEachNodeList(navItems, function(el, i) {
        if (visibleNavIndexes.indexOf(i) < 0) {
          hideElement(el);
        } else {
          showElement(el);
        }
      });

      // cache visible nav indexes
      visibleNavIndexesCached = visibleNavIndexes;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      visibleNavIndexes: visibleNavIndexes,
      visibleNavIndexesCached: visibleNavIndexesCached,
      sheet: sheet,
      event: e || {},
    };
  }

  return {
    version: '2.8.4',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(extend(options, optionsElements));
    }
  };
};

/***/ }),

/***/ 12:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/accordion/src/helpers.mjs


const touchEnabled = "ontouchstart" in document.documentElement;
const pressEvent   = touchEnabled ? "touchend" : "click";


/**
 * Name of the onTransitionEnd event supported by this browser.
 * @const {String} transitionEnd
 */
const transitionEnd = (function(){
	const names = "transitionend webkitTransitionEnd oTransitionEnd otransitionend".split(" ");
	for(let i = 0; i < 4; ++i)
		if("on" + names[i].toLowerCase() in window)
			return names[i];
	return names[0];
}());



/**
 * Conditionally add or remove a token from a token-list.
 *
 * @param {DOMTokenList} list
 * @param {String} token
 * @param {Boolean} enabled
 */
function setToken(list, token, enabled){
	enabled ? list.add(token) : list.remove(token);
}



/**
 * Stop a function from firing too quickly.
 *
 * Returns a copy of the original function that runs only after the designated
 * number of milliseconds have elapsed. Useful for throttling onResize handlers.
 *
 * @param {Function} fn - Function to debounce
 * @param {Number} [limit=0] - Threshold to stall execution by, in milliseconds.
 * @param {Boolean} [asap=false] - Call function *before* threshold elapses, not after.
 * @return {Function}
 */
function debounce(fn, limit = 0, asap = false){
	let started, context, args, timing;
	
	const delayed = function(){
		const timeSince = Date.now() - started;
		if(timeSince >= limit){
			if(!asap) fn.apply(context, args);
			if(timing) clearTimeout(timing);
			timing = context = args = null;
		}
		else timing = setTimeout(delayed, limit - timeSince);
	};
	
	// Debounced copy of original function
	return function(){
		context = this,
		args    = arguments;
		if(!limit)
			return fn.apply(context, args);
		started = Date.now();
		if(!timing){
			if(asap) fn.apply(context, args);
			timing = setTimeout(delayed, limit);
		}
	};
}



const uniqueID = (function(){
	const IDs     = {};
	const indexes = {};
	
	
	/**
	 * Generate a unique ID for a DOM element.
	 *
	 * By default, minimalist IDs like "_1" or "_2" are generated using internally
	 * tracked incrementation. Uglier, more collision-proof IDs can be generated by
	 * passing a truthy value to the function's first argument.
	 *
	 * Irrespective of whether values are being generated simply or randomly, the
	 * document tree is always consulted first to ensure a duplicate ID is never
	 * returned.
	 *
	 * @param {String}  prefix - Prefix prepended to result. Default: "_"
	 * @param {Boolean} random - Generate collision-proof IDs using random symbols
	 * @param {Number}  length - Length of random passwords. Default: 6
	 * @return {String}
	 */
	function uniqueID(prefix, complex, length){
		length     = +(length || 6);
		let result =  (prefix = prefix || "_");
		
		// Simple IDs
		if(!complex){
			
			// Set this prefix's starting index if it's not been used yet
			if(!indexes[prefix])
				indexes[prefix] = 0;
			
			result += ++indexes[prefix];
		}
		
		// Uglier, more collision-proof IDs
		else{
			const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			result += chars[ Math.round(Math.random() * 51) ];
			while(result.length < length)
				result += chars[ Math.round(Math.random() * 61)];
		}
		
		return IDs[result] || document.getElementById(result)
			? uniqueID(prefix, complex)
			: (IDs[result] = true, result);
	}
	
	
	return uniqueID;
}());



// Name of the CSSOM property used by this browser for CSS transforms
const cssTransform = (function(n){
	s = document.documentElement.style;
	if((prop = n.toLowerCase()) in s) return prop;
	for(var prop, s, p = "Webkit Moz Ms O Khtml", p = (p.toLowerCase() + p).split(" "), i = 0; i < 10; ++i)
		if((prop = p[i]+n) in s) return prop;
	return "";
}("Transform"));


// Whether 3D transforms are supported by this browser
const css3DSupported = (function(propName){
	const e = document.createElement("div"), s = e.style;
	const v = [["translateY(", ")"], ["translate3d(0,", ",0)"]];
	try{ s[propName] = v[1].join("1px"); } catch(e){}
	return v[+!!s[propName]] === v[1];
}(cssTransform));

// CONCATENATED MODULE: ./node_modules/accordion/src/fold.mjs




const fold_folds = [];


/**
 * Represents a single panel of togglable content inside an Accordion.
 *
 * @class
 */
class fold_Fold{
	
	/**
	 * Instantiate a new Fold instance.
	 *
	 * @param {Accordion} accordion
	 * @param {HTMLElement} el
	 * @constructor
	 */
	constructor(accordion, el){
		let heading          = el.firstElementChild;
		let content          = el.lastElementChild;
		let useBorders       = accordion.useBorders;
		
		this.index           = fold_folds.push(this) - 1;
		this.accordion       = accordion;
		this.el              = el;
		this.heading         = heading;
		this.content         = content;
		this.openClass       = accordion.openClass;
		this.closeClass      = accordion.closeClass;
		this.ariaEnabled     = !accordion.noAria;
		this.heightOffset    = accordion.heightOffset;
		this.useBorders      = "auto" === useBorders ? (0 !== this.elBorder + this.headingBorder) : useBorders;
		this.useTransforms   = !accordion.noTransforms && cssTransform;
		this.onToggle        = accordion.onToggle;
		el.accordionFold     = this.index;
		
		
		// Keyboard navigation
		if(!accordion.noKeys){
			heading.tabIndex = 0;
			heading.addEventListener("keydown", this.onKeyDown = e => {
				const key = e.keyCode;
				let fold;
				
				switch(key){

					// Spacebar: Toggle
					case 32:
						e.preventDefault(); // Fall-through
					
					
					// Enter: Toggle
					case 13:
						this.open = !this.open;
						if("A" === e.target.tagName)
							e.preventDefault();
						break;
					
					
					// Escape: Clear focus
					case 27:
						e.target.blur();
						break;
					
					
					// Up arrow: Previous section
					case 38:{
						
						// Is there a previous sibling to navigate up to?
						if(fold = this.previousFold){
							let children = fold.childAccordions;
							
							// Is it open, and does it have nested accordions?
							if(fold.open && children){
								let lastAcc;
								let lastFold;
								
								// Locate the deepest/nearest accordion that's currently exposed
								while(children){
									lastAcc  = children[children.length - 1];
									lastFold = lastAcc.folds[lastAcc.folds.length - 1];
									if(!lastFold.open) break;
									children = lastFold.childAccordions;
								}
								
								lastFold.heading.focus();
							}
							
							// Nope
							else fold.heading.focus();
						}
						
						// Is there a higher level we can jump back up to?
						else if(this.accordion.parent)
							this.accordion.parentFold.heading.focus();
						
						// There's nothing to move back to, so just let the browser run its usual behaviour
						else return true;
						
						e.preventDefault();
						return false;
					}
					
					
					
					// Down arrow: Next section
					case 40:{
						const children = this.childAccordions;
						
						// Is there a nested accordion to jump into?
						if(this.open && children)
							children[0].folds[0].heading.focus();
						
						// No, there isn't. Is there another sibling to move down to?
						else if(fold = this.nextFold)
							fold.heading.focus();
						
						// Is there a containing accordion we can navigate back up to?
						else if(this.accordion.parent){
							let parent = this;
							while(parent = parent.accordion.parentFold)
								if(fold = parent.nextFold){
									fold.heading.focus();
									break;
								}
							
							// Nowhere left to go...
							if(!parent) return true;
						}
						
						// Nah. Just scroll the window normally, as per browser default
						else return true;
						
						e.preventDefault();
						return false;
					}
					
					
					// Left arrow
					case 37:{
						
						// Close an opened section
						if(this.open) this.open = false;
						
						// Switch focus back to parent
						else if(this.accordion.parent)
							this.accordion.parentFold.heading.focus();
						
						break;
					}
					
					// Right arrow
					case 39:{
						
						// Open a closed section
						if(!this.open) this.open = true;
						
						// Switch focus to a nested accordion
						else if(this.childAccordions)
							this.childAccordions[0].folds[0].heading.focus();
						
						break;
					}
				}
			});
		}
		
		
		// Listener to record the viewport's scroll offsets at the beginning of a touch
		let scrollX, scrollY;
		touchEnabled && heading.addEventListener("touchstart", this.onTouchStart = () => {
			scrollX = window.pageXOffset;
			scrollY = window.pageYOffset;
		}, {passive: true});
		
		
		heading.addEventListener(pressEvent, this.onPress = e => {
			
			// Pressed on something inside the header
			if(e.target !== heading && heading.contains(e.target)){
				
				// Cancel fold-toggle if user clicked on an anchor-link
				if("A" === e.target.tagName && e.target.href)
					return true;
			}
			
			if(e.type !== "touchend" || (e.cancelable && window.pageXOffset === scrollX && window.pageYOffset === scrollY)){
				this.open = !this.open;
				e.preventDefault();
			}
			return false;
		});
	}
	
	
	
	/**
	 * Adjust a fold's container to fit its content.
	 */
	fit(){
		let height = this.headingHeight;
		if(this.open)        height += this.content.scrollHeight;
		if(this.useBorders)  height += this.elBorder;
		this.height = height;
	}
	
	
	
	/**
	 * Add or remove relevant ARIA attributes from the fold's elements.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get ariaEnabled(){ return this._ariaEnabled; }
	set ariaEnabled(input){
		if((input = !!input) !== !!this._ariaEnabled){
			const heading = this.heading;
			const content = this.content;
			this._ariaEnabled = input;
			
			// Enable ARIA-attribute management
			if(input){
				heading.setAttribute("role", "tab");
				content.setAttribute("role", "tabpanel");
				
				
				// Ensure the fold's elements have unique ID attributes.
				const headingSuffix = "-heading";
				const contentSuffix = "-content";
				let elID            = this.el.id;
				let id;
				
				// Neither of the fold's elements have an ID attribute
				if(!heading.id && !content.id){
					id             = elID || uniqueID("a");
					heading.id     = id + headingSuffix;
					content.id     = id + contentSuffix;
				}
				
				// Either the heading or element lack an ID
				else if(!content.id) content.id   = (elID || heading.id) + contentSuffix;
				else if(!heading.id) heading.id   = (elID || content.id) + headingSuffix;
				
				// Finally, double-check each element's ID is really unique
				const $ = s => document.querySelectorAll("#"+s);
				while($(content.id).length > 1 || $(heading.id).length > 1){
					id         = uniqueID("a");
					content.id = id + contentSuffix;
					heading.id = id + headingSuffix;
				}
				
				// Update ARIA attributes
				heading.setAttribute("aria-controls",    content.id);
				content.setAttribute("aria-labelledby",  heading.id);
				
				
				// Update the attributes that're controlled by .open's setter
				heading.setAttribute("aria-selected",  !!this._open);
				heading.setAttribute("aria-expanded",  !!this._open);
				content.setAttribute("aria-hidden",     !this._open);
			}
			
			// Disabling; remove all relevant attributes
			else{
				heading.removeAttribute("role");
				heading.removeAttribute("aria-controls");
				heading.removeAttribute("aria-selected");
				heading.removeAttribute("aria-expanded");
				
				content.removeAttribute("role");
				content.removeAttribute("aria-labelledby");
				content.removeAttribute("aria-hidden");
			}
		}
	}
	
	
	
	/**
	 * Whether or not the fold's currently opened.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get open(){
		
		// Derive the fold's opened state from the DOM if it's not been determined yet
		if(undefined === this._open){
			const classes = this.el.classList;
			this._open    = classes.contains(this.openClass);
			setToken(classes, this.closeClass, !this._open);
		}
		
		return this._open;
	}
	
	set open(input){
		if((input = !!input) !== this._open){
			
			// If an onToggle callback was specified, run it. Avoid doing anything if it returns false.
			if("function" === typeof this.onToggle && false === this.onToggle.call(null, this, input))
				return;
			
			setToken(this.el.classList, this.openClass,   input);
			setToken(this.el.classList, this.closeClass, !input);
			this._open = input;
			
			// Update ARIA attributes
			if(this.ariaEnabled){
				const heading = this.heading;
				heading.setAttribute("aria-selected",      input);
				heading.setAttribute("aria-expanded",      input);
				this.content.setAttribute("aria-hidden",  !input);
			}
			
			// If this fold was closed when the screen resized, run a full update in case its contents were juggled around
			if(this.needsRefresh){
				delete this.needsRefresh;
				this.accordion.refresh();
			}
			else this.accordion.update();
			
			// Close other folds if accordion is modal
			if(this.accordion.modal && input){
				for(const fold of this.accordion.folds)
					if(this !== fold) fold.open = false;
			}
		}
	}
	
	
	
	/**
	 * Whether the fold's been deactivated.
	 *
	 * Not set directly; changed when setting an accordion's .disabled property.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get disabled(){ return this._disabled; }
	set disabled(input){
		if((input = !!input) !== !!this._disabled){
			let heading = this.heading;
			let style   = this.el.style;
			let classes = this.el.classList;
			
			// Deactivated
			if(this._disabled = input){
				style.height = null;
				this.useTransforms
					? (style[cssTransform] = null)
					: (style.top = null);
				
				touchEnabled && heading.removeEventListener("touchstart", this.onTouchStart);
				heading.removeEventListener(pressEvent, this.onPress);
				classes.remove(this.openClass, this.closeClass);
				if(this.onKeyDown){
					heading.removeEventListener("keydown", this.onKeyDown);
					heading.removeAttribute("tabindex");
				}
				
				if(this.ariaEnabled){
					this.ariaEnabled  = false;
					this._ariaEnabled = true;
				}
			}
			
			// Reactivated
			else{
				style.height = this._height + "px";
				this.useTransforms
					? style[cssTransform] =
						css3DSupported
							? ("translate3D(0," + this._y + "px,0)")
							: ("translateY("    + this._y + "px)")
					: (style.top = this._y + "px");
				
				touchEnabled && heading.addEventListener("touchstart", this.onTouchStart);
				heading.addEventListener(pressEvent, this.onPress);
				
				if(this.onKeyDown){
					heading.addEventListener("keydown", this.onKeyDown);
					heading.tabIndex = 0;
				}
			}
		}
	}
	
	
	/**
	 * Vertical position of the fold within an accordion's container.
	 *
	 * @property
	 * @type {Number}
	 */
	get y(){
		if(undefined === this._y)
			return (this._y = parseInt(this.el.style.top) || 0);
		return this._y;
	}
	
	set y(input){
		if((input = +input) !== this._y){
			this._y     = input;
			const style = this.el.style;
			this.useTransforms
				? style[cssTransform] =
					css3DSupported
						? ("translate3D(0," + input + "px,0)")
						: ("translateY("    + input + "px)")
				: (style.top = input + "px");
		}
	}
	
	
	
	/**
	 * Height of the fold's outermost container.
	 *
	 * @property
	 * @type {Number}
	 */
	get height(){
		if(undefined === this._height){
			let height           = this.headingHeight + this.content.scrollHeight;
			this.el.style.height = height + "px";
			return (this._height = height);
		}
		return this._height;
	}
	
	set height(input){
		if(input && (input = +input) !== this._height){
			this.el.style.height = input + "px";
			this._height         = input;
		}
	}
	
	
	
	/**
	 * Current height of the fold's heading.
	 *
	 * @type {Number}
	 * @readonly
	 */
	get headingHeight(){
		return this.heading.scrollHeight
			+ this.heightOffset
			+ (this.useBorders ? this.headingBorder : 0);
	}
	
	/**
	 * Total height consumed by the heading element's CSS borders, if any.
	 *
	 * @type {Number}
	 * @readonly
	 */
	get headingBorder(){
		let heading = this.heading;
		return (heading.offsetHeight || 0) - (heading.clientHeight || 0);
	}
	
	
	/**
	 * Total height of the fold's container element.
	 *
	 * @type {Number}
	 * @readonly
	 */
	get elHeight(){
		return this.el.scrollHeight + (this.useBorders ? this.elBorder : 0);
	}
	
	/**
	 * Total height consumed by container element's CSS borders, if any.
	 * 
	 * @type {Number}
	 * @readonly
	 */
	get elBorder(){
		let el = this.el;
		return (el.offsetHeight || 0) - (el.clientHeight || 0);
	}
	
	
	/**
	 * Whether the fold's container has been resized incorrectly.
	 *
	 * @type {Boolean}
	 * @readonly
	 * @property
	 */
	get wrongSize(){
		return this.headingHeight + this.content.scrollHeight !== this.el.scrollHeight;
	}
}

// CONCATENATED MODULE: ./node_modules/accordion/src/accordion.mjs
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accordion_Accordion; });





const accordions     = [];
let activeAccordions = 0;
let lastResizeRate;


/**
 * Represents a column of collapsible content regions.
 * @class
 */
class accordion_Accordion {

	/**
	 * Instantiate a new Accordion instance.
	 *
	 * @param {HTMLElement} el                    - Container wrapped around each immediate fold
	 * @param {Object}      options               - Optional hash of settings
	 * @param {String}      options.openClass     - CSS class controlling each fold's "open" state
	 * @param {String}      options.closeClass    - CSS class used to mark a fold as closed
	 * @param {String}      options.edgeClass     - CSS class toggled based on whether the bottom-edge is visible
	 * @param {String}      options.snapClass     - CSS class for disabling transitions between window resizes
	 * @param {String}      options.enabledClass  - CSS class marking an accordion as enabled
	 * @param {String}      options.disabledClass - CSS class marking an accordion as disabled
	 * @param {Boolean}     options.disabled      - Whether to disable the accordion on creation
	 * @param {Boolean}     options.modal         - Whether to close the current fold when opening another
	 * @param {Boolean}     options.noAria        - Disable the addition and management of ARIA attributes
	 * @param {Boolean}     options.noKeys        - Disable keyboard navigation
	 * @param {Boolean}     options.noTransforms  - Disable CSS transforms; positioning will be used instead
	 * @param {Number}      options.heightOffset  - Distance to offset each fold by
	 * @param {Boolean}     options.useBorders    - Consider borders when calculating fold heights
	 * @param {Function}    options.onToggle      - Callback executed when opening or closing a fold
	 * @constructor
	 */
	constructor(el, options){
		this.index = accordions.push(this) - 1;
		
		// Parse options
		options            = options || {};
		this.openClass     = options.openClass  || "open";
		this.closeClass    = options.closeClass || "closed";
		this.edgeClass     = (undefined === options.edgeClass    ? "edge-visible" : options.edgeClass);
		this.snapClass     = (undefined === options.snapClass    ? "snap"         : options.snapClass);
		this.enabledClass  = (undefined === options.enabledClass ? "accordion"    : options.enabledClass);
		this.disabledClass = options.disabledClass;
		this.modal         = !!options.modal;
		this.noAria        = !!options.noAria;
		this.noKeys        = !!options.noKeys;
		this.noTransforms  = !!options.noTransforms;
		this.heightOffset  = +options.heightOffset || 0;
		this.useBorders    = undefined === options.useBorders ? "auto" : options.useBorders;
		this.onToggle      = options.onToggle;
		
		
		// Create a fold for each immediate descendant of the Accordion's container
		let folds = [];
		for(let i of Array.from(el.children)){
			let fold = new fold_Fold(this, i);
			folds.push(fold);
			
			// Connect the fold to its previous sibling, if it's not the first to be added
			let prev = folds[folds.length - 2];
			if(prev){
				prev.nextFold     = fold;
				fold.previousFold = prev;
			}
		}
		
		
		el.accordion    = this.index;
		this.noAria || el.setAttribute("role", "tablist");
		this.el         = el;
		this.folds      = folds;

		// Add .enabledClass early - it might affect the heights of each fold
		if(!options.disabled && this.enabledClass)
			el.classList.add(this.enabledClass);
		
		this.update();
		
		
		// Find out if this accordion's nested inside another
		let next = el;
		while((next = next.parentNode) && 1 === next.nodeType){
			let fold = accordion_Accordion.getFold(next);
			if(fold){
				let accordion   = fold.accordion;
				this.parent     = accordion;
				this.parentFold = fold;
				this.edgeClass && el.classList.remove(this.edgeClass);
				(accordion.childAccordions = accordion.childAccordions || []).push(this);
				(fold.childAccordions      = fold.childAccordions      || []).push(this);

				// Adjust the height of the containing fold's element
				if(fold.open){
					let scrollHeight = fold.el.scrollHeight;
					let distance     = (fold.headingHeight + fold.content.scrollHeight) - scrollHeight || (scrollHeight - fold.el.clientHeight);
					accordion.updateFold(fold, distance);
				}
				break;
			}
		}
		
		
		this.edgeClass && this.el.addEventListener(transitionEnd, this.onTransitionEnd = e => {
			if(!this.parent && e.target === el && "height" === e.propertyName && el.getBoundingClientRect().bottom > window.innerHeight)
				el.classList.remove(this.edgeClass);
		});
		
		this.disabled = !!options.disabled;
	}
	
	
	/**
	 * Get or set the accordion enclosing this one.
	 *
	 * @property
	 * @type {Accordion}
	 */
	set parent(input){ this._parent = input; }
	get parent(){
		let result = this._parent;
		if(!result) return null;
		
		// Search for the first ancestor that *isn't* disabled
		while(result){
			if(!result.disabled) return result;
			result = result.parent;
		}
		return null;
	}
	
	
	/**
	 * Get or set the fold of the accordion enclosing this one.
	 *
	 * @property
	 * @type {Fold}
	 */
	set parentFold(input){ this._parentFold = input; }
	get parentFold(){
		let fold = this._parentFold;
		if(!fold) return null;
		
		let accordion = fold.accordion;
		
		// Search for the first ancestor that *isn't* disabled
		while(fold && accordion){
			if(!accordion.disabled) return fold;
			if(accordion = accordion.parent)
				fold = accordion.parentFold;
		}
		return null;
	}
	
	
	/**
	 * Whether the accordion's been deactivated.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get disabled(){ return this._disabled; }
	set disabled(input){
		if((input = !!input) !== this._disabled){
			const el      = this.el;
			const style   = el.style;
			const classes = el.classList;
			
			this.enabledClass  && setToken(classes, this.enabledClass,  !input);
			this.disabledClass && setToken(classes, this.disabledClass,  input);
			
			
			// Deactivating
			if(this._disabled = input){
				style.height = null;
				this.snapClass && classes.remove(this.snapClass);
				if(this.edgeClass){
					el.removeEventListener(transitionEnd, this.onTransitionEnd);
					classes.remove(this.edgeClass);
				}
				
				for(let i of this.folds)
					i.disabled = true;
				
				this.noAria || el.removeAttribute("role");
				--activeAccordions;
			}
			
			
			// Reactivating
			else{
				for(let i of this.folds)
					i.disabled = false;
				
				this.noAria || el.setAttribute("role", "tablist");
				++activeAccordions;
				this.update();
			}
			

			
			// If there're no more active accordions, disable the onResize handler
			if(activeAccordions <= 0){
				activeAccordions = 0;
				accordion_Accordion.setResizeRate(false);
			}
			
			// Otherwise, reactivate the onResize handler, assuming it was previously active
			else if(lastResizeRate)
				accordion_Accordion.setResizeRate(lastResizeRate);
		}
	}
	
	
	
	/**
	 * Height of the accordion's container element.
	 *
	 * @property
	 * @type {Number}
	 */
	get height(){ return this._height; }
	set height(input){
		if(input && (input = +input) !== this._height){
			this.el.style.height = input + "px";
			this._height         = input;
		}
	}
	
	
	
	/**
	 * Internal method to check if an accordion's bottom-edge is visible to the user (or about to be).
	 *
	 * @param {Number} offset
	 * @private
	 */
	edgeCheck(offset){
		let edgeClass = this.edgeClass;
		if(edgeClass){
			let box         = this.el.getBoundingClientRect();
			let windowEdge  = window.innerHeight;
			let classes     = this.el.classList;
			
			// If the bottom-edge is visible (or about to be), enable height animation
			if(box.bottom + (offset || 0) < windowEdge)
				classes.add(edgeClass);
			
			// If the bottom-edge isn't visible anyway, disable height animation immediately
			else if(box.bottom > windowEdge)
				classes.remove(edgeClass);
		}
	}
	
	
	
	/**
	 * Update the vertical ordinate of each sibling for a particular fold.
	 *
	 * @param {Fold} fold
	 * @param {Number} offset - Pixel distance to adjust by
	 */
	updateFold(fold, offset){
		let next = fold;
		let parentFold = this.parentFold;
		
		while(next = next.nextFold)
			next.y  += offset;
		parentFold || this.edgeCheck(offset);
		fold.height += offset;
		this.height += offset;
		
		parentFold && parentFold.open && this.parent.updateFold(parentFold, offset);
	}
	
	
	/**
	 * Update the height of each fold to fit its content.
	 */
	update(){
		let y = 0;
		let height = 0;
		for(let i of this.folds){
			i.y = y;
			i.fit();
			y      += i.height;
			height += i.height;
		}
		
		let parentFold = this.parentFold;
		let diff       = height - this._height;
		parentFold
			? (parentFold.open && this.parent.updateFold(parentFold, diff))
			: this.edgeCheck(diff);
		
		this.height = height;
	}
	
	
	
	/**
	 * Recalculate the boundaries of an Accordion and its descendants.
	 *
	 * This method should only be called if the width of a container changes,
	 * or a fold's contents have resized unexpectedly (such as when images load).
	 *
	 * @param {Boolean} allowSnap - Snap folds instantly into place without transitioning
	 */
	refresh(allowSnap){
		let snap = allowSnap ? this.snapClass : false;
		snap && this.el.classList.add(snap);
		
		this.update();
		if(this.childAccordions)
			this.childAccordions.forEach(a => a.parentFold.open
				? a.refresh(allowSnap)
				: (a.parentFold.needsRefresh = true));
		
		snap && setTimeout(() => this.el.classList.remove(snap), 20);
	}
	
	
	
	/**
	 * Whether one of the Accordion's folds has been resized incorrectly.
	 *
	 * @type {Boolean}
	 * @readonly
	 * @property
	 */
	get wrongSize(){
		for(let i of this.folds)
			if(i.wrongSize) return true;
		if(this.childAccordions) for(let i of this.childAccordions)
			if(i.wrongSize) return true;
		return false;
	}
	
	
	
	/**
	 * Return the top-level ancestor this accordion's nested inside.
	 *
	 * @type {Accordion}
	 * @readonly
	 * @property
	 */
	get root(){
		let result = this;
		while(result){
			if(!result.parent) return result;
			result = result.parent;
		}
	}
	
	
	
	/**
	 * Alter the rate at which screen-resize events update accordion widths.
	 *
	 * @param {Number} delay - Rate expressed in milliseconds
	 */
	static setResizeRate(delay){
		let fn = function(){
			for(let i of accordions)
				i.parent || i.disabled || i.refresh(true);
		};
		
		window.removeEventListener("resize", this.onResize);
		
		// Make sure we weren't passed an explicit value of FALSE, or a negative value
		if(false !== delay && (delay = +delay || 0) >= 0){
			this.onResize = delay ? debounce(fn, delay) : fn;
			window.addEventListener("resize", this.onResize);
			if(delay) lastResizeRate = delay;
		}
	}
	
	
	
	/**
	 * Return the closest (most deeply-nested) accordion enclosing an element.
	 *
	 * @param {Node} node
	 * @return {Accordion}
	 */
	static getAccordion(node){
		while(node){
			if("accordion" in node)
				return accordions[node.accordion];
			
			node = node.parentNode;
			if(!node || node.nodeType !== 1) return null;
		}
	}
	
	
	/**
	 * Return the closest (most deeply-nested) fold enclosing an element.
	 *
	 * @param {Node} node
	 * @return {Fold}
	 */
	static getFold(node){
		while(node){
			if("accordionFold" in node)
				return fold_folds[node.accordionFold];
			
			node = node.parentNode;
			if(!node || node.nodeType !== 1) return null;
		}
	}
}


accordion_Accordion.setResizeRate(25);
window.Accordion = accordion_Accordion;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tinySlider = __webpack_require__(11);

var _accordion = __webpack_require__(12);

//import style from './_scss/main.scss';

//import './_scss/vendors/tiny-slider.css';
//import './_scss/vendors/accordion.css';

var TAG_HTML = document.documentElement;
var TAG_BODY = document.body;
var OPEN_CLASS = 'expanded';
var HIDDEN_CLASS = 'noscrolling';

// MENU FIXED TOP OF PAGE
(function () {
    var HEADER_BAR = document.getElementById('header');

    if (HEADER_BAR != null) {
        var onScrollingPage = function onScrollingPage() {
            if (window.pageYOffset >= STICKY) {
                HEADER_BAR.classList.add('sticky');
            } else {
                HEADER_BAR.classList.remove('sticky');
            }
            if (window.pageYOffset >= STICKY_LONG) {
                HEADER_BAR.classList.add('sticky-long');
            } else {
                HEADER_BAR.classList.remove('sticky-long');
            }
        };

        var STICKY = HEADER_BAR.offsetTop;
        var STICKY_LONG = 100;

        document.addEventListener('scroll', onScrollingPage);
    }
})();

// OPEN SEARCH MODAL
(function () {
    var SEARCH_MENU = document.querySelector('.js-search');

    if (SEARCH_MENU != null) {
        var removeOpenClass = function removeOpenClass() {
            SEARCH_CLOSE_MENU.forEach(function (item) {
                item.setAttribute('aria-expanded', 'false');
            });
            ASIDE_CONTAINER.classList.remove(OPEN_CLASS);
            TAG_HTML.classList.remove(HIDDEN_CLASS);
            TAG_BODY.classList.remove(HIDDEN_CLASS);
        };

        var insertOpenClass = function insertOpenClass() {
            SEARCH_MENU.setAttribute('aria-expanded', 'true');
            ASIDE_CONTAINER.classList.add(OPEN_CLASS);
            TAG_HTML.classList.add(HIDDEN_CLASS);
            TAG_BODY.classList.add(HIDDEN_CLASS);
        };

        var SEARCH_CLOSE_MENU = document.querySelectorAll('.js-close-search');
        var ASIDE_CONTAINER = document.querySelector('.access__aside');

        SEARCH_MENU.addEventListener('click', function (e) {
            e.preventDefault();
            if (ASIDE_CONTAINER.classList.contains(OPEN_CLASS)) {
                removeOpenClass();
            } else {
                insertOpenClass();
            }
        });

        SEARCH_CLOSE_MENU.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                if (ASIDE_CONTAINER.classList.contains(OPEN_CLASS)) {
                    removeOpenClass();
                }
            });
        });
    }
})();

// TOGGLE MAIN MENU
(function () {
    var HEADER_MENU = document.querySelector('.header__menu-all');

    if (HEADER_MENU != null) {
        var removeExpandedClass = function removeExpandedClass() {
            TOGGLE_MENU.setAttribute('aria-expanded', 'false');
            HEADER_MENU.classList.remove(EXPANDED_CLASS);
            return false;
        };

        var insertExpandedClass = function insertExpandedClass() {
            TOGGLE_MENU.setAttribute('aria-expanded', 'true');
            HEADER_MENU.classList.add(EXPANDED_CLASS);
            return false;
        };

        var TOGGLE_MENU = document.querySelector('.header__toggle');
        var EXPANDED_CLASS = 'expanded';
        TOGGLE_MENU.addEventListener('click', function () {
            if (HEADER_MENU.classList.contains(EXPANDED_CLASS)) {
                removeExpandedClass();
            } else {
                insertExpandedClass();
            }
        });
    }
})();

// TOGGLE QUICK ACCESS MENU
(function () {
    var QUICK_MENU = document.querySelector('.quick-apps');

    if (QUICK_MENU != null) {
        var removeExpandedClass = function removeExpandedClass() {
            TOGGLE_QUICK_MENU.setAttribute('aria-expanded', 'false');
            QUICK_MENU.classList.remove(EXPANDED_CLASS);
        };

        var insertExpandedClass = function insertExpandedClass() {
            TOGGLE_QUICK_MENU.setAttribute('aria-expanded', 'true');
            QUICK_MENU.classList.add(EXPANDED_CLASS);
        };

        var TOGGLE_QUICK_MENU = document.querySelector('.quick-apps li strong');
        var EXPANDED_CLASS = 'expanded';
        TOGGLE_QUICK_MENU.addEventListener('click', function () {
            if (QUICK_MENU.classList.contains(EXPANDED_CLASS)) {
                removeExpandedClass();
            } else {
                insertExpandedClass();
            }
        });
    }
})();

// CLICK TO VIEW VIDEO
(function () {
    var VIDEOS = document.querySelectorAll('.video');

    if (VIDEOS != null) {
        var n;

        (function () {
            var PLAY_VIDEO = document.querySelector('.video a');
            var IFRAME_WIDTH = '100%';
            var IFRAME_HEIGHT = '100%';

            var _loop = function _loop() {
                var EMBED = VIDEOS[n];

                PLAY_VIDEO.addEventListener('click', function (event) {
                    event.preventDefault();
                    var IFRAME = document.createElement('iframe');
                    IFRAME.setAttribute('src', 'https://www.youtube.com/embed/' + EMBED.id + '?autoplay=1&amp;rel=0&amp;controls=1&amp;showinfo=0');
                    IFRAME.style.width = IFRAME_WIDTH;
                    IFRAME.style.height = IFRAME_HEIGHT;
                    this.parentNode.replaceChild(IFRAME, this);
                });
            };

            for (n = 0; n < VIDEOS.length; n++) {
                _loop();
            }
        })();
    }
})();

// OPEN VITALLIS MENU MODAL
(function () {
    var VITALLIS_MENU = document.querySelector('.js-menu-vitallis');

    if (VITALLIS_MENU != null) {
        var removeOpenClass = function removeOpenClass() {
            VITALLIS_MENU_CLOSE_MENU.forEach(function (item) {
                item.setAttribute('aria-expanded', 'false');
            });
            VITALLIS_ASIDE_CONTAINER.classList.remove(OPEN_CLASS);
            TAG_HTML.classList.remove(HIDDEN_CLASS);
            TAG_BODY.classList.remove(HIDDEN_CLASS);
        };

        var insertOpenClass = function insertOpenClass() {
            VITALLIS_MENU.setAttribute('aria-expanded', 'true');
            VITALLIS_ASIDE_CONTAINER.classList.add(OPEN_CLASS);
            TAG_HTML.classList.add(HIDDEN_CLASS);
            TAG_BODY.classList.add(HIDDEN_CLASS);
        };

        var VITALLIS_MENU_CLOSE_MENU = document.querySelectorAll('.js-close-menu-vitallis');
        var VITALLIS_ASIDE_CONTAINER = document.querySelector('.menu-vitallis__aside');

        VITALLIS_MENU.addEventListener('click', function (e) {
            e.preventDefault();
            if (VITALLIS_ASIDE_CONTAINER.classList.contains(OPEN_CLASS)) {
                removeOpenClass();
            } else {
                insertOpenClass();
            }
        });

        VITALLIS_MENU_CLOSE_MENU.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                if (VITALLIS_ASIDE_CONTAINER.classList.contains(OPEN_CLASS)) {
                    removeOpenClass();
                }
            });
        });
    }
})();

// OPEN FORM INFO POPUP
(function () {
    var FORM_INFO = document.querySelector('.form-info');

    if (FORM_INFO != null) {
        var removeExpandedClass = function removeExpandedClass() {
            TOGGLE_INFO.setAttribute('aria-expanded', 'false');
            FORM_INFO.classList.remove(EXPANDED_CLASS);
        };

        var insertExpandedClass = function insertExpandedClass() {
            TOGGLE_INFO.setAttribute('aria-expanded', 'true');
            FORM_INFO.classList.add(EXPANDED_CLASS);
        };

        var TOGGLE_INFO = document.querySelector('.js-info-popup');
        var EXPANDED_CLASS = 'expanded';
        TOGGLE_INFO.addEventListener('click', function () {
            if (FORM_INFO.classList.contains(EXPANDED_CLASS)) {
                removeExpandedClass();
            } else {
                insertExpandedClass();
            }
        });
    }
})();

// TOGGLE BLOG MENU
(function () {
    var BLOG_MENU = document.querySelector('.menu__main');

    if (BLOG_MENU != null) {
        var removeExpandedClass = function removeExpandedClass() {
            TOGGLE_BLOG_MENU.setAttribute('aria-expanded', 'false');
            BLOG_MENU.classList.remove(EXPANDED_CLASS);
        };

        var insertExpandedClass = function insertExpandedClass() {
            TOGGLE_BLOG_MENU.setAttribute('aria-expanded', 'true');
            BLOG_MENU.classList.add(EXPANDED_CLASS);
        };

        var TOGGLE_BLOG_MENU = document.querySelector('.menu__toggle');
        var EXPANDED_CLASS = 'expanded';
        TOGGLE_BLOG_MENU.addEventListener('click', function () {
            if (BLOG_MENU.classList.contains(EXPANDED_CLASS)) {
                removeExpandedClass();
            } else {
                insertExpandedClass();
            }
        });
    }
})();

// OPEN PLAN COVERAGE MODAL
(function () {
    var PLAN_MODAL = document.querySelector('.js-plan-modal');

    if (PLAN_MODAL != null) {
        var removeOpenClass = function removeOpenClass() {
            PLAN_MODAL_CLOSE_MENU.forEach(function (item) {
                item.setAttribute('aria-expanded', 'false');
            });
            PLAN_MODAL_CONTAINER.classList.remove(OPEN_CLASS);
            TAG_HTML.classList.remove(HIDDEN_CLASS);
            TAG_BODY.classList.remove(HIDDEN_CLASS);
        };

        var insertOpenClass = function insertOpenClass() {
            PLAN_MODAL.setAttribute('aria-expanded', 'true');
            PLAN_MODAL_CONTAINER.classList.add(OPEN_CLASS);
            TAG_HTML.classList.add(HIDDEN_CLASS);
            TAG_BODY.classList.add(HIDDEN_CLASS);
        };

        var PLAN_MODAL_CLOSE_MENU = document.querySelectorAll('.js-close-plan-modal');
        var PLAN_MODAL_CONTAINER = document.querySelector('.plan-modal');

        PLAN_MODAL.addEventListener('click', function (e) {
            e.preventDefault();
            if (PLAN_MODAL_CONTAINER.classList.contains(OPEN_CLASS)) {
                removeOpenClass();
            } else {
                insertOpenClass();
            }
        });

        PLAN_MODAL_CLOSE_MENU.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                if (PLAN_MODAL_CONTAINER.classList.contains(OPEN_CLASS)) {
                    removeOpenClass();
                }
            });
        });
    }
})();

// OPEN PLAN PRICE MODAL
(function () {
    var PLAN_MODAL_PRICE = document.querySelectorAll('.js-plan-modal-price');

    if (PLAN_MODAL_PRICE != null) {
        var removeOpenClass = function removeOpenClass() {
            PLAN_MODAL_PRICE_CLOSE.forEach(function (item) {
                item.setAttribute('aria-expanded', 'false');
            });
            PLAN_MODAL_PRICE_CONTAINER.classList.remove(OPEN_CLASS);
            TAG_HTML.classList.remove(HIDDEN_CLASS);
        };

        var insertOpenClass = function insertOpenClass() {
            PLAN_MODAL_PRICE.forEach(function (item) {
                item.setAttribute('aria-expanded', 'true');
            });
            PLAN_MODAL_PRICE_CONTAINER.classList.add(OPEN_CLASS);
            TAG_HTML.classList.add(HIDDEN_CLASS);
        };

        var PLAN_MODAL_PRICE_CLOSE = document.querySelectorAll('.js-close-plan-price');
        var PLAN_MODAL_PRICE_CONTAINER = document.querySelector('.modal-plan-price');

        PLAN_MODAL_PRICE.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                if (PLAN_MODAL_PRICE_CONTAINER.classList.contains(OPEN_CLASS)) {
                    removeOpenClass();
                } else {
                    insertOpenClass();
                }
            });
        });

        PLAN_MODAL_PRICE_CLOSE.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                if (PLAN_MODAL_PRICE_CONTAINER.classList.contains(OPEN_CLASS)) {
                    removeOpenClass();
                }
            });
        });
    }
})();

// FILE INPUT
(function () {
    if (document.querySelector('.form-file') != null) {
        var n;

        (function () {
            var FILES = document.querySelectorAll('.form-file-item');
            var HIDDEN = 'hidden';

            var _loop2 = function _loop2() {
                var FILE_INPUT = document.querySelector('#form-file-' + n + ' .form-file-input');
                var FILE_TRIGGER = document.querySelector('#form-file-' + n + ' .form-file-trigger');
                var FILE_RETURN = document.querySelector('#form-file-' + n + ' .form-file-return');
                var FILE_SHOW = FILES[n + 1];

                FILE_TRIGGER.addEventListener('click', function (event) {
                    FILE_INPUT.focus();
                    return false;
                });

                FILE_INPUT.addEventListener('change', function (event) {
                    FILE_RETURN.innerHTML = this.value;
                    if (FILE_SHOW != null) {
                        FILE_SHOW.classList.remove(HIDDEN);
                    }
                });
            };

            for (n = 0; n < FILES.length; n++) {
                _loop2();
            }
        })();
    }
})();

// SHOW DEPENDENTS FORM
(function () {
    var SHOW_QUIZ = document.querySelector('.js-tenho-interesse');

    if (SHOW_QUIZ != null) {
        SHOW_QUIZ.addEventListener('click', function (e) {
            e.preventDefault();
            var QUIZ_FORM = document.getElementById('formulario-saude');
            var QUIZ_FORM_TOP = QUIZ_FORM.offsetTop;

            QUIZ_FORM.classList.add(OPEN_CLASS);
            window.scrollTo(0, QUIZ_FORM_TOP + 80);

            return false;
        });
    }
})();

// SHOW NEW DEPENDENT
(function () {
    var SHOW_DEPENDENT = document.querySelector('.js-show-dependent');

    if (SHOW_DEPENDENT != null) {
        var DEPENDENTS = document.querySelectorAll('.form-dependent-item');
        var DISABLED = 'btn-cl-disabled';

        SHOW_DEPENDENT.addEventListener('click', function (event) {

            for (var n = 1; n <= DEPENDENTS.length; n++) {
                var DEPENDENT_ITEM = document.querySelector('#dependente-' + n);

                if (!DEPENDENT_ITEM.classList.contains(OPEN_CLASS)) {
                    DEPENDENT_ITEM.classList.add(OPEN_CLASS);
                    if (n == DEPENDENTS.length) {
                        SHOW_DEPENDENT.classList.add(DISABLED);
                    }
                    return false;
                }
            }
            return false;
        });
    }
})();

// SHOW SPECIALTIES FROM MEDICAL GUIDE
(function () {
    var FORM_MEDICAL_GUIDE = document.querySelector('.form-medical-guide');

    if (FORM_MEDICAL_GUIDE != null) {
        var SPECIALTIES_OPEN = document.querySelectorAll('.js-specialties');
        var SPECIALTIES_CLOSE = document.querySelectorAll('.js-close-specialties');

        SPECIALTIES_OPEN.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                var DATA_LINK = this.getAttribute('data-link');
                var SPECIALTY = document.querySelector('#specialties-' + DATA_LINK);

                if (!SPECIALTY.classList.contains(OPEN_CLASS)) {
                    SPECIALTY.classList.add(OPEN_CLASS);
                    return false;
                }
                return false;
            });
        });

        SPECIALTIES_CLOSE.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                var DATA_LINK = this.getAttribute('data-link');
                var SPECIALTY = document.querySelector('#specialties-' + DATA_LINK);

                SPECIALTY.classList.remove(OPEN_CLASS);

                return false;
            });
        });

        var PLANS_OPEN = document.querySelectorAll('.js-plans');
        var PLANS_CLOSE = document.querySelectorAll('.js-close-plans');

        PLANS_OPEN.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                var DATA_LINK = this.getAttribute('data-link');
                var PLAN = document.querySelector('#plans-' + DATA_LINK);

                if (!PLAN.classList.contains(OPEN_CLASS)) {
                    PLAN.classList.add(OPEN_CLASS);
                    return false;
                }
                return false;
            });
        });

        PLANS_CLOSE.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                var DATA_LINK = this.getAttribute('data-link');
                var PLAN = document.querySelector('#plans-' + DATA_LINK);

                PLAN.classList.remove(OPEN_CLASS);

                return false;
            });
        });
    }
})();

// SHOW / HIDE FORM ADVANCED
(function () {
    var FORM_ADVANCED = document.querySelector('.form-advanced');

    if (FORM_ADVANCED != null) {
        var removeExpandedClass = function removeExpandedClass() {
            TOGGLE_FORM_ADVANCED.setAttribute('aria-expanded', 'false');
            FORM_ADVANCED.classList.remove(EXPANDED_CLASS);
            return false;
        };

        var insertExpandedClass = function insertExpandedClass() {
            TOGGLE_FORM_ADVANCED.setAttribute('aria-expanded', 'true');
            FORM_ADVANCED.classList.add(EXPANDED_CLASS);
            return false;
        };

        var TOGGLE_FORM_ADVANCED = document.querySelector('.js-advanced');
        var EXPANDED_CLASS = 'expanded';
        TOGGLE_FORM_ADVANCED.addEventListener('click', function (e) {
            e.preventDefault();
            if (FORM_ADVANCED.classList.contains(EXPANDED_CLASS)) {
                removeExpandedClass();
            } else {
                insertExpandedClass();
            }
        });
    }
})();

function homeSlider() {
    var HOME_HERO_CNT = document.querySelector('.hero-home-carousel-cnt');
    if (HOME_HERO_CNT !== null) {
        var HOME_HERO = (0, _tinySlider.tns)({
            container: HOME_HERO_CNT,
            controlsContainer: '.hero-home-controls',
            items: 1,
            speed: 2000,
            autoplay: true,
            autoplayTimeout: 9000,
            autoplayButtonOutput: false
        });
    }
}

function unitsSlider() {
    var UNITS_CNT = document.querySelector('.units-carousel-cnt');
    if (UNITS_CNT !== null) {
        var UNITS_CAROUSEL = (0, _tinySlider.tns)({
            container: UNITS_CNT,
            controlsContainer: '.units-carousel-controls',
            items: 1,
            speed: 1500,
            autoplay: false
        });
    }
}

function launchSlider(func) {
    func();
}

launchSlider(homeSlider);
launchSlider(unitsSlider);

function elementAccordion() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = document.querySelectorAll('.accordion')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;

            new Accordion(el);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function launchAccordion(func) {
    func();
}

launchAccordion(elementAccordion);

/***/ })

/******/ });