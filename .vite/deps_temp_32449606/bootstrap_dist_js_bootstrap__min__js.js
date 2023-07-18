import {
  afterMain,
  afterRead,
  afterWrite,
  arrow_default,
  auto,
  basePlacements,
  beforeMain,
  beforeRead,
  beforeWrite,
  bottom,
  clippingParents,
  computeStyles_default,
  createPopper,
  detectOverflow,
  end,
  eventListeners_default,
  flip_default,
  getNodeName,
  hide_default,
  init_arrow,
  init_computeStyles,
  init_createPopper,
  init_enums,
  init_eventListeners,
  init_flip,
  init_getNodeName,
  init_hide,
  init_instanceOf,
  init_offset,
  init_popperOffsets,
  init_preventOverflow,
  isHTMLElement,
  left,
  main,
  modifierPhases,
  offset_default,
  placements,
  popper,
  popperGenerator,
  popperOffsets_default,
  preventOverflow_default,
  read,
  reference,
  right,
  start,
  top,
  variationPlacements,
  viewport,
  write
} from "./chunk-F6YACWQW.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-ROME4SDB.js";

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default;
var init_applyStyles = __esm({
  "node_modules/@popperjs/core/lib/modifiers/applyStyles.js"() {
    init_getNodeName();
    init_instanceOf();
    applyStyles_default = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: applyStyles,
      effect,
      requires: ["computeStyles"]
    };
  }
});

// node_modules/@popperjs/core/lib/modifiers/index.js
var init_modifiers = __esm({
  "node_modules/@popperjs/core/lib/modifiers/index.js"() {
    init_applyStyles();
    init_arrow();
    init_computeStyles();
    init_eventListeners();
    init_flip();
    init_hide();
    init_offset();
    init_popperOffsets();
    init_preventOverflow();
  }
});

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers, createPopper2;
var init_popper_lite = __esm({
  "node_modules/@popperjs/core/lib/popper-lite.js"() {
    init_createPopper();
    init_eventListeners();
    init_popperOffsets();
    init_computeStyles();
    init_applyStyles();
    defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
    createPopper2 = popperGenerator({
      defaultModifiers
    });
  }
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2, createPopper3;
var init_popper = __esm({
  "node_modules/@popperjs/core/lib/popper.js"() {
    init_createPopper();
    init_eventListeners();
    init_popperOffsets();
    init_computeStyles();
    init_applyStyles();
    init_offset();
    init_flip();
    init_preventOverflow();
    init_arrow();
    init_hide();
    init_popper_lite();
    init_modifiers();
    defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
    createPopper3 = popperGenerator({
      defaultModifiers: defaultModifiers2
    });
  }
});

// node_modules/@popperjs/core/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  afterMain: () => afterMain,
  afterRead: () => afterRead,
  afterWrite: () => afterWrite,
  applyStyles: () => applyStyles_default,
  arrow: () => arrow_default,
  auto: () => auto,
  basePlacements: () => basePlacements,
  beforeMain: () => beforeMain,
  beforeRead: () => beforeRead,
  beforeWrite: () => beforeWrite,
  bottom: () => bottom,
  clippingParents: () => clippingParents,
  computeStyles: () => computeStyles_default,
  createPopper: () => createPopper3,
  createPopperBase: () => createPopper,
  createPopperLite: () => createPopper2,
  detectOverflow: () => detectOverflow,
  end: () => end,
  eventListeners: () => eventListeners_default,
  flip: () => flip_default,
  hide: () => hide_default,
  left: () => left,
  main: () => main,
  modifierPhases: () => modifierPhases,
  offset: () => offset_default,
  placements: () => placements,
  popper: () => popper,
  popperGenerator: () => popperGenerator,
  popperOffsets: () => popperOffsets_default,
  preventOverflow: () => preventOverflow_default,
  read: () => read,
  reference: () => reference,
  right: () => right,
  start: () => start,
  top: () => top,
  variationPlacements: () => variationPlacements,
  viewport: () => viewport,
  write: () => write
});
var init_lib = __esm({
  "node_modules/@popperjs/core/lib/index.js"() {
    init_enums();
    init_modifiers();
    init_createPopper();
    init_popper();
    init_popper_lite();
  }
});

// node_modules/bootstrap/dist/js/bootstrap.min.js
var require_bootstrap_min = __commonJS({
  "node_modules/bootstrap/dist/js/bootstrap.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e((init_lib(), __toCommonJS(lib_exports))) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
    }(exports, function(t) {
      "use strict";
      function e(t2) {
        const e2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
        if (t2) {
          for (const s2 in t2)
            if ("default" !== s2) {
              const i2 = Object.getOwnPropertyDescriptor(t2, s2);
              Object.defineProperty(e2, s2, i2.get ? i2 : { enumerable: true, get: () => t2[s2] });
            }
        }
        return e2.default = t2, Object.freeze(e2);
      }
      const s = e(t), i = /* @__PURE__ */ new Map(), n = { set(t2, e2, s2) {
        i.has(t2) || i.set(t2, /* @__PURE__ */ new Map());
        const n2 = i.get(t2);
        n2.has(e2) || 0 === n2.size ? n2.set(e2, s2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n2.keys())[0]}.`);
      }, get: (t2, e2) => i.has(t2) && i.get(t2).get(e2) || null, remove(t2, e2) {
        if (!i.has(t2))
          return;
        const s2 = i.get(t2);
        s2.delete(e2), 0 === s2.size && i.delete(t2);
      } }, o = "transitionend", r = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), a = (t2) => {
        t2.dispatchEvent(new Event(o));
      }, l = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), c = (t2) => l(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(r(t2)) : null, h = (t2) => {
        if (!l(t2) || 0 === t2.getClientRects().length)
          return false;
        const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), s2 = t2.closest("details:not([open])");
        if (!s2)
          return e2;
        if (s2 !== t2) {
          const e3 = t2.closest("summary");
          if (e3 && e3.parentNode !== s2)
            return false;
          if (null === e3)
            return false;
        }
        return e2;
      }, d = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), u = (t2) => {
        if (!document.documentElement.attachShadow)
          return null;
        if ("function" == typeof t2.getRootNode) {
          const e2 = t2.getRootNode();
          return e2 instanceof ShadowRoot ? e2 : null;
        }
        return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? u(t2.parentNode) : null;
      }, _ = () => {
      }, g = (t2) => {
        t2.offsetHeight;
      }, f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, m = [], p = () => "rtl" === document.documentElement.dir, b = (t2) => {
        var e2;
        e2 = () => {
          const e3 = f();
          if (e3) {
            const s2 = t2.NAME, i2 = e3.fn[s2];
            e3.fn[s2] = t2.jQueryInterface, e3.fn[s2].Constructor = t2, e3.fn[s2].noConflict = () => (e3.fn[s2] = i2, t2.jQueryInterface);
          }
        }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", () => {
          for (const t3 of m)
            t3();
        }), m.push(e2)) : e2();
      }, v = (t2, e2 = [], s2 = t2) => "function" == typeof t2 ? t2(...e2) : s2, y = (t2, e2, s2 = true) => {
        if (!s2)
          return void v(t2);
        const i2 = ((t3) => {
          if (!t3)
            return 0;
          let { transitionDuration: e3, transitionDelay: s3 } = window.getComputedStyle(t3);
          const i3 = Number.parseFloat(e3), n3 = Number.parseFloat(s3);
          return i3 || n3 ? (e3 = e3.split(",")[0], s3 = s3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(s3))) : 0;
        })(e2) + 5;
        let n2 = false;
        const r2 = ({ target: s3 }) => {
          s3 === e2 && (n2 = true, e2.removeEventListener(o, r2), v(t2));
        };
        e2.addEventListener(o, r2), setTimeout(() => {
          n2 || a(e2);
        }, i2);
      }, w = (t2, e2, s2, i2) => {
        const n2 = t2.length;
        let o2 = t2.indexOf(e2);
        return -1 === o2 ? !s2 && i2 ? t2[n2 - 1] : t2[0] : (o2 += s2 ? 1 : -1, i2 && (o2 = (o2 + n2) % n2), t2[Math.max(0, Math.min(o2, n2 - 1))]);
      }, A = /[^.]*(?=\..*)\.|.*/, E = /\..*/, C = /::\d+$/, T = {};
      let k = 1;
      const S = { mouseenter: "mouseover", mouseleave: "mouseout" }, L = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function O(t2, e2) {
        return e2 && `${e2}::${k++}` || t2.uidEvent || k++;
      }
      function I(t2) {
        const e2 = O(t2);
        return t2.uidEvent = e2, T[e2] = T[e2] || {}, T[e2];
      }
      function D(t2, e2, s2 = null) {
        return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === s2);
      }
      function N(t2, e2, s2) {
        const i2 = "string" == typeof e2, n2 = i2 ? s2 : e2 || s2;
        let o2 = j(t2);
        return L.has(o2) || (o2 = t2), [i2, n2, o2];
      }
      function P(t2, e2, s2, i2, n2) {
        if ("string" != typeof e2 || !t2)
          return;
        let [o2, r2, a2] = N(e2, s2, i2);
        if (e2 in S) {
          const t3 = (t4) => function(e3) {
            if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
              return t4.call(this, e3);
          };
          r2 = t3(r2);
        }
        const l2 = I(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = D(c2, r2, o2 ? s2 : null);
        if (h2)
          return void (h2.oneOff = h2.oneOff && n2);
        const d2 = O(r2, e2.replace(A, "")), u2 = o2 ? function(t3, e3, s3) {
          return function i3(n3) {
            const o3 = t3.querySelectorAll(e3);
            for (let { target: r3 } = n3; r3 && r3 !== this; r3 = r3.parentNode)
              for (const a3 of o3)
                if (a3 === r3)
                  return $(n3, { delegateTarget: r3 }), i3.oneOff && F.off(t3, n3.type, e3, s3), s3.apply(r3, [n3]);
          };
        }(t2, s2, r2) : function(t3, e3) {
          return function s3(i3) {
            return $(i3, { delegateTarget: t3 }), s3.oneOff && F.off(t3, i3.type, e3), e3.apply(t3, [i3]);
          };
        }(t2, r2);
        u2.delegationSelector = o2 ? s2 : null, u2.callable = r2, u2.oneOff = n2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
      }
      function x(t2, e2, s2, i2, n2) {
        const o2 = D(e2[s2], i2, n2);
        o2 && (t2.removeEventListener(s2, o2, Boolean(n2)), delete e2[s2][o2.uidEvent]);
      }
      function M(t2, e2, s2, i2) {
        const n2 = e2[s2] || {};
        for (const [o2, r2] of Object.entries(n2))
          o2.includes(i2) && x(t2, e2, s2, r2.callable, r2.delegationSelector);
      }
      function j(t2) {
        return t2 = t2.replace(E, ""), S[t2] || t2;
      }
      const F = { on(t2, e2, s2, i2) {
        P(t2, e2, s2, i2, false);
      }, one(t2, e2, s2, i2) {
        P(t2, e2, s2, i2, true);
      }, off(t2, e2, s2, i2) {
        if ("string" != typeof e2 || !t2)
          return;
        const [n2, o2, r2] = N(e2, s2, i2), a2 = r2 !== e2, l2 = I(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
        if (void 0 === o2) {
          if (h2)
            for (const s3 of Object.keys(l2))
              M(t2, l2, s3, e2.slice(1));
          for (const [s3, i3] of Object.entries(c2)) {
            const n3 = s3.replace(C, "");
            a2 && !e2.includes(n3) || x(t2, l2, r2, i3.callable, i3.delegationSelector);
          }
        } else {
          if (!Object.keys(c2).length)
            return;
          x(t2, l2, r2, o2, n2 ? s2 : null);
        }
      }, trigger(t2, e2, s2) {
        if ("string" != typeof e2 || !t2)
          return null;
        const i2 = f();
        let n2 = null, o2 = true, r2 = true, a2 = false;
        e2 !== j(e2) && i2 && (n2 = i2.Event(e2, s2), i2(t2).trigger(n2), o2 = !n2.isPropagationStopped(), r2 = !n2.isImmediatePropagationStopped(), a2 = n2.isDefaultPrevented());
        const l2 = $(new Event(e2, { bubbles: o2, cancelable: true }), s2);
        return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && n2 && n2.preventDefault(), l2;
      } };
      function $(t2, e2 = {}) {
        for (const [s2, i2] of Object.entries(e2))
          try {
            t2[s2] = i2;
          } catch (e3) {
            Object.defineProperty(t2, s2, { configurable: true, get: () => i2 });
          }
        return t2;
      }
      function z(t2) {
        if ("true" === t2)
          return true;
        if ("false" === t2)
          return false;
        if (t2 === Number(t2).toString())
          return Number(t2);
        if ("" === t2 || "null" === t2)
          return null;
        if ("string" != typeof t2)
          return t2;
        try {
          return JSON.parse(decodeURIComponent(t2));
        } catch (e2) {
          return t2;
        }
      }
      function H(t2) {
        return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
      }
      const B = { setDataAttribute(t2, e2, s2) {
        t2.setAttribute(`data-bs-${H(e2)}`, s2);
      }, removeDataAttribute(t2, e2) {
        t2.removeAttribute(`data-bs-${H(e2)}`);
      }, getDataAttributes(t2) {
        if (!t2)
          return {};
        const e2 = {}, s2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
        for (const i2 of s2) {
          let s3 = i2.replace(/^bs/, "");
          s3 = s3.charAt(0).toLowerCase() + s3.slice(1, s3.length), e2[s3] = z(t2.dataset[i2]);
        }
        return e2;
      }, getDataAttribute: (t2, e2) => z(t2.getAttribute(`data-bs-${H(e2)}`)) };
      class q {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t2) {
          return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
        }
        _configAfterMerge(t2) {
          return t2;
        }
        _mergeConfigObj(t2, e2) {
          const s2 = l(e2) ? B.getDataAttribute(e2, "config") : {};
          return { ...this.constructor.Default, ..."object" == typeof s2 ? s2 : {}, ...l(e2) ? B.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
        }
        _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
          for (const [i2, n2] of Object.entries(e2)) {
            const e3 = t2[i2], o2 = l(e3) ? "element" : null == (s2 = e3) ? `${s2}` : Object.prototype.toString.call(s2).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(n2).test(o2))
              throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i2}" provided type "${o2}" but expected type "${n2}".`);
          }
          var s2;
        }
      }
      class W extends q {
        constructor(t2, e2) {
          super(), (t2 = c(t2)) && (this._element = t2, this._config = this._getConfig(e2), n.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          n.remove(this._element, this.constructor.DATA_KEY), F.off(this._element, this.constructor.EVENT_KEY);
          for (const t2 of Object.getOwnPropertyNames(this))
            this[t2] = null;
        }
        _queueCallback(t2, e2, s2 = true) {
          y(t2, e2, s2);
        }
        _getConfig(t2) {
          return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
        }
        static getInstance(t2) {
          return n.get(c(t2), this.DATA_KEY);
        }
        static getOrCreateInstance(t2, e2 = {}) {
          return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
        }
        static get VERSION() {
          return "5.3.0";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(t2) {
          return `${t2}${this.EVENT_KEY}`;
        }
      }
      const R = (t2) => {
        let e2 = t2.getAttribute("data-bs-target");
        if (!e2 || "#" === e2) {
          let s2 = t2.getAttribute("href");
          if (!s2 || !s2.includes("#") && !s2.startsWith("."))
            return null;
          s2.includes("#") && !s2.startsWith("#") && (s2 = `#${s2.split("#")[1]}`), e2 = s2 && "#" !== s2 ? s2.trim() : null;
        }
        return r(e2);
      }, K = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
        const s2 = [];
        let i2 = t2.parentNode.closest(e2);
        for (; i2; )
          s2.push(i2), i2 = i2.parentNode.closest(e2);
        return s2;
      }, prev(t2, e2) {
        let s2 = t2.previousElementSibling;
        for (; s2; ) {
          if (s2.matches(e2))
            return [s2];
          s2 = s2.previousElementSibling;
        }
        return [];
      }, next(t2, e2) {
        let s2 = t2.nextElementSibling;
        for (; s2; ) {
          if (s2.matches(e2))
            return [s2];
          s2 = s2.nextElementSibling;
        }
        return [];
      }, focusableChildren(t2) {
        const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
        return this.find(e2, t2).filter((t3) => !d(t3) && h(t3));
      }, getSelectorFromElement(t2) {
        const e2 = R(t2);
        return e2 && K.findOne(e2) ? e2 : null;
      }, getElementFromSelector(t2) {
        const e2 = R(t2);
        return e2 ? K.findOne(e2) : null;
      }, getMultipleElementsFromSelector(t2) {
        const e2 = R(t2);
        return e2 ? K.find(e2) : [];
      } }, V = (t2, e2 = "hide") => {
        const s2 = `click.dismiss${t2.EVENT_KEY}`, i2 = t2.NAME;
        F.on(document, s2, `[data-bs-dismiss="${i2}"]`, function(s3) {
          if (["A", "AREA"].includes(this.tagName) && s3.preventDefault(), d(this))
            return;
          const n2 = K.getElementFromSelector(this) || this.closest(`.${i2}`);
          t2.getOrCreateInstance(n2)[e2]();
        });
      };
      class Q extends W {
        static get NAME() {
          return "alert";
        }
        close() {
          if (F.trigger(this._element, "close.bs.alert").defaultPrevented)
            return;
          this._element.classList.remove("show");
          const t2 = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, t2);
        }
        _destroyElement() {
          this._element.remove(), F.trigger(this._element, "closed.bs.alert"), this.dispose();
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = Q.getOrCreateInstance(this);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                throw new TypeError(`No method named "${t2}"`);
              e2[t2](this);
            }
          });
        }
      }
      V(Q, "close"), b(Q);
      const X = '[data-bs-toggle="button"]';
      class Y extends W {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = Y.getOrCreateInstance(this);
            "toggle" === t2 && e2[t2]();
          });
        }
      }
      F.on(document, "click.bs.button.data-api", X, (t2) => {
        t2.preventDefault();
        const e2 = t2.target.closest(X);
        Y.getOrCreateInstance(e2).toggle();
      }), b(Y);
      const U = { endCallback: null, leftCallback: null, rightCallback: null }, G = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
      class J extends q {
        constructor(t2, e2) {
          super(), this._element = t2, t2 && J.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
          return U;
        }
        static get DefaultType() {
          return G;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          F.off(this._element, ".bs.swipe");
        }
        _start(t2) {
          this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
        }
        _end(t2) {
          this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
        }
        _move(t2) {
          this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const t2 = Math.abs(this._deltaX);
          if (t2 <= 40)
            return;
          const e2 = t2 / this._deltaX;
          this._deltaX = 0, e2 && v(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
          this._supportPointerEvents ? (F.on(this._element, "pointerdown.bs.swipe", (t2) => this._start(t2)), F.on(this._element, "pointerup.bs.swipe", (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (F.on(this._element, "touchstart.bs.swipe", (t2) => this._start(t2)), F.on(this._element, "touchmove.bs.swipe", (t2) => this._move(t2)), F.on(this._element, "touchend.bs.swipe", (t2) => this._end(t2)));
        }
        _eventIsPointerPenTouch(t2) {
          return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
        }
        static isSupported() {
          return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
      }
      const Z = "next", tt = "prev", et = "left", st = "right", it = "slid.bs.carousel", nt = "carousel", ot = "active", rt = { ArrowLeft: st, ArrowRight: et }, at = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, lt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
      class ct extends W {
        constructor(t2, e2) {
          super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = K.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === nt && this.cycle();
        }
        static get Default() {
          return at;
        }
        static get DefaultType() {
          return lt;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(Z);
        }
        nextWhenVisible() {
          !document.hidden && h(this._element) && this.next();
        }
        prev() {
          this._slide(tt);
        }
        pause() {
          this._isSliding && a(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
          this._config.ride && (this._isSliding ? F.one(this._element, it, () => this.cycle()) : this.cycle());
        }
        to(t2) {
          const e2 = this._getItems();
          if (t2 > e2.length - 1 || t2 < 0)
            return;
          if (this._isSliding)
            return void F.one(this._element, it, () => this.to(t2));
          const s2 = this._getItemIndex(this._getActive());
          if (s2 === t2)
            return;
          const i2 = t2 > s2 ? Z : tt;
          this._slide(i2, e2[t2]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t2) {
          return t2.defaultInterval = t2.interval, t2;
        }
        _addEventListeners() {
          this._config.keyboard && F.on(this._element, "keydown.bs.carousel", (t2) => this._keydown(t2)), "hover" === this._config.pause && (F.on(this._element, "mouseenter.bs.carousel", () => this.pause()), F.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && J.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const t3 of K.find(".carousel-item img", this._element))
            F.on(t3, "dragstart.bs.carousel", (t4) => t4.preventDefault());
          const t2 = { leftCallback: () => this._slide(this._directionToOrder(et)), rightCallback: () => this._slide(this._directionToOrder(st)), endCallback: () => {
            "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
          } };
          this._swipeHelper = new J(this._element, t2);
        }
        _keydown(t2) {
          if (/input|textarea/i.test(t2.target.tagName))
            return;
          const e2 = rt[t2.key];
          e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
        }
        _getItemIndex(t2) {
          return this._getItems().indexOf(t2);
        }
        _setActiveIndicatorElement(t2) {
          if (!this._indicatorsElement)
            return;
          const e2 = K.findOne(".active", this._indicatorsElement);
          e2.classList.remove(ot), e2.removeAttribute("aria-current");
          const s2 = K.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
          s2 && (s2.classList.add(ot), s2.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const t2 = this._activeElement || this._getActive();
          if (!t2)
            return;
          const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
          this._config.interval = e2 || this._config.defaultInterval;
        }
        _slide(t2, e2 = null) {
          if (this._isSliding)
            return;
          const s2 = this._getActive(), i2 = t2 === Z, n2 = e2 || w(this._getItems(), s2, i2, this._config.wrap);
          if (n2 === s2)
            return;
          const o2 = this._getItemIndex(n2), r2 = (e3) => F.trigger(this._element, e3, { relatedTarget: n2, direction: this._orderToDirection(t2), from: this._getItemIndex(s2), to: o2 });
          if (r2("slide.bs.carousel").defaultPrevented)
            return;
          if (!s2 || !n2)
            return;
          const a2 = Boolean(this._interval);
          this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = n2;
          const l2 = i2 ? "carousel-item-start" : "carousel-item-end", c2 = i2 ? "carousel-item-next" : "carousel-item-prev";
          n2.classList.add(c2), g(n2), s2.classList.add(l2), n2.classList.add(l2), this._queueCallback(() => {
            n2.classList.remove(l2, c2), n2.classList.add(ot), s2.classList.remove(ot, c2, l2), this._isSliding = false, r2(it);
          }, s2, this._isAnimated()), a2 && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return K.findOne(".active.carousel-item", this._element);
        }
        _getItems() {
          return K.find(".carousel-item", this._element);
        }
        _clearInterval() {
          this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t2) {
          return p() ? t2 === et ? tt : Z : t2 === et ? Z : tt;
        }
        _orderToDirection(t2) {
          return p() ? t2 === tt ? et : st : t2 === tt ? st : et;
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = ct.getOrCreateInstance(this, t2);
            if ("number" != typeof t2) {
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            } else
              e2.to(t2);
          });
        }
      }
      F.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t2) {
        const e2 = K.getElementFromSelector(this);
        if (!e2 || !e2.classList.contains(nt))
          return;
        t2.preventDefault();
        const s2 = ct.getOrCreateInstance(e2), i2 = this.getAttribute("data-bs-slide-to");
        return i2 ? (s2.to(i2), void s2._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (s2.next(), void s2._maybeEnableCycle()) : (s2.prev(), void s2._maybeEnableCycle());
      }), F.on(window, "load.bs.carousel.data-api", () => {
        const t2 = K.find('[data-bs-ride="carousel"]');
        for (const e2 of t2)
          ct.getOrCreateInstance(e2);
      }), b(ct);
      const ht = "show", dt = "collapse", ut = "collapsing", _t = '[data-bs-toggle="collapse"]', gt = { parent: null, toggle: true }, ft = { parent: "(null|element)", toggle: "boolean" };
      class mt extends W {
        constructor(t2, e2) {
          super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
          const s2 = K.find(_t);
          for (const t3 of s2) {
            const e3 = K.getSelectorFromElement(t3), s3 = K.find(e3).filter((t4) => t4 === this._element);
            null !== e3 && s3.length && this._triggerArray.push(t3);
          }
          this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
          return gt;
        }
        static get DefaultType() {
          return ft;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown())
            return;
          let t2 = [];
          if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => mt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning)
            return;
          if (F.trigger(this._element, "show.bs.collapse").defaultPrevented)
            return;
          for (const e3 of t2)
            e3.hide();
          const e2 = this._getDimension();
          this._element.classList.remove(dt), this._element.classList.add(ut), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
          const s2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
          this._queueCallback(() => {
            this._isTransitioning = false, this._element.classList.remove(ut), this._element.classList.add(dt, ht), this._element.style[e2] = "", F.trigger(this._element, "shown.bs.collapse");
          }, this._element, true), this._element.style[e2] = `${this._element[s2]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown())
            return;
          if (F.trigger(this._element, "hide.bs.collapse").defaultPrevented)
            return;
          const t2 = this._getDimension();
          this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, g(this._element), this._element.classList.add(ut), this._element.classList.remove(dt, ht);
          for (const t3 of this._triggerArray) {
            const e2 = K.getElementFromSelector(t3);
            e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
          }
          this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
            this._isTransitioning = false, this._element.classList.remove(ut), this._element.classList.add(dt), F.trigger(this._element, "hidden.bs.collapse");
          }, this._element, true);
        }
        _isShown(t2 = this._element) {
          return t2.classList.contains(ht);
        }
        _configAfterMerge(t2) {
          return t2.toggle = Boolean(t2.toggle), t2.parent = c(t2.parent), t2;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
          if (!this._config.parent)
            return;
          const t2 = this._getFirstLevelChildren(_t);
          for (const e2 of t2) {
            const t3 = K.getElementFromSelector(e2);
            t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
          }
        }
        _getFirstLevelChildren(t2) {
          const e2 = K.find(":scope .collapse .collapse", this._config.parent);
          return K.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
        }
        _addAriaAndCollapsedClass(t2, e2) {
          if (t2.length)
            for (const s2 of t2)
              s2.classList.toggle("collapsed", !e2), s2.setAttribute("aria-expanded", e2);
        }
        static jQueryInterface(t2) {
          const e2 = {};
          return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
            const s2 = mt.getOrCreateInstance(this, e2);
            if ("string" == typeof t2) {
              if (void 0 === s2[t2])
                throw new TypeError(`No method named "${t2}"`);
              s2[t2]();
            }
          });
        }
      }
      F.on(document, "click.bs.collapse.data-api", _t, function(t2) {
        ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
        for (const t3 of K.getMultipleElementsFromSelector(this))
          mt.getOrCreateInstance(t3, { toggle: false }).toggle();
      }), b(mt);
      const pt = "dropdown", bt = "ArrowUp", vt = "ArrowDown", yt = "click.bs.dropdown.data-api", wt = "keydown.bs.dropdown.data-api", At = "show", Et = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ct = `${Et}.show`, Tt = ".dropdown-menu", kt = p() ? "top-end" : "top-start", St = p() ? "top-start" : "top-end", Lt = p() ? "bottom-end" : "bottom-start", Ot = p() ? "bottom-start" : "bottom-end", It = p() ? "left-start" : "right-start", Dt = p() ? "right-start" : "left-start", Nt = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Pt = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
      class xt extends W {
        constructor(t2, e2) {
          super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = K.next(this._element, Tt)[0] || K.prev(this._element, Tt)[0] || K.findOne(Tt, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
          return Nt;
        }
        static get DefaultType() {
          return Pt;
        }
        static get NAME() {
          return pt;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (d(this._element) || this._isShown())
            return;
          const t2 = { relatedTarget: this._element };
          if (!F.trigger(this._element, "show.bs.dropdown", t2).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
              for (const t3 of [].concat(...document.body.children))
                F.on(t3, "mouseover", _);
            this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(At), this._element.classList.add(At), F.trigger(this._element, "shown.bs.dropdown", t2);
          }
        }
        hide() {
          if (d(this._element) || !this._isShown())
            return;
          const t2 = { relatedTarget: this._element };
          this._completeHide(t2);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t2) {
          if (!F.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
              for (const t3 of [].concat(...document.body.children))
                F.off(t3, "mouseover", _);
            this._popper && this._popper.destroy(), this._menu.classList.remove(At), this._element.classList.remove(At), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), F.trigger(this._element, "hidden.bs.dropdown", t2);
          }
        }
        _getConfig(t2) {
          if ("object" == typeof (t2 = super._getConfig(t2)).reference && !l(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect)
            throw new TypeError(`${pt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          return t2;
        }
        _createPopper() {
          if (void 0 === s)
            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let t2 = this._element;
          "parent" === this._config.reference ? t2 = this._parent : l(this._config.reference) ? t2 = c(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
          const e2 = this._getPopperConfig();
          this._popper = s.createPopper(t2, this._menu, e2);
        }
        _isShown() {
          return this._menu.classList.contains(At);
        }
        _getPlacement() {
          const t2 = this._parent;
          if (t2.classList.contains("dropend"))
            return It;
          if (t2.classList.contains("dropstart"))
            return Dt;
          if (t2.classList.contains("dropup-center"))
            return "top";
          if (t2.classList.contains("dropdown-center"))
            return "bottom";
          const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
          return t2.classList.contains("dropup") ? e2 ? St : kt : e2 ? Ot : Lt;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: t2 } = this._config;
          return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
        }
        _getPopperConfig() {
          const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
          return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...v(this._config.popperConfig, [t2]) };
        }
        _selectMenuItem({ key: t2, target: e2 }) {
          const s2 = K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => h(t3));
          s2.length && w(s2, e2, t2 === vt, !s2.includes(e2)).focus();
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = xt.getOrCreateInstance(this, t2);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2])
                throw new TypeError(`No method named "${t2}"`);
              e2[t2]();
            }
          });
        }
        static clearMenus(t2) {
          if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)
            return;
          const e2 = K.find(Ct);
          for (const s2 of e2) {
            const e3 = xt.getInstance(s2);
            if (!e3 || false === e3._config.autoClose)
              continue;
            const i2 = t2.composedPath(), n2 = i2.includes(e3._menu);
            if (i2.includes(e3._element) || "inside" === e3._config.autoClose && !n2 || "outside" === e3._config.autoClose && n2)
              continue;
            if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName)))
              continue;
            const o2 = { relatedTarget: e3._element };
            "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
          }
        }
        static dataApiKeydownHandler(t2) {
          const e2 = /input|textarea/i.test(t2.target.tagName), s2 = "Escape" === t2.key, i2 = [bt, vt].includes(t2.key);
          if (!i2 && !s2)
            return;
          if (e2 && !s2)
            return;
          t2.preventDefault();
          const n2 = this.matches(Et) ? this : K.prev(this, Et)[0] || K.next(this, Et)[0] || K.findOne(Et, t2.delegateTarget.parentNode), o2 = xt.getOrCreateInstance(n2);
          if (i2)
            return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
          o2._isShown() && (t2.stopPropagation(), o2.hide(), n2.focus());
        }
      }
      F.on(document, wt, Et, xt.dataApiKeydownHandler), F.on(document, wt, Tt, xt.dataApiKeydownHandler), F.on(document, yt, xt.clearMenus), F.on(document, "keyup.bs.dropdown.data-api", xt.clearMenus), F.on(document, yt, Et, function(t2) {
        t2.preventDefault(), xt.getOrCreateInstance(this).toggle();
      }), b(xt);
      const Mt = "show", jt = "mousedown.bs.backdrop", Ft = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, $t = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
      class zt extends q {
        constructor(t2) {
          super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
        }
        static get Default() {
          return Ft;
        }
        static get DefaultType() {
          return $t;
        }
        static get NAME() {
          return "backdrop";
        }
        show(t2) {
          if (!this._config.isVisible)
            return void v(t2);
          this._append();
          const e2 = this._getElement();
          this._config.isAnimated && g(e2), e2.classList.add(Mt), this._emulateAnimation(() => {
            v(t2);
          });
        }
        hide(t2) {
          this._config.isVisible ? (this._getElement().classList.remove(Mt), this._emulateAnimation(() => {
            this.dispose(), v(t2);
          })) : v(t2);
        }
        dispose() {
          this._isAppended && (F.off(this._element, jt), this._element.remove(), this._isAppended = false);
        }
        _getElement() {
          if (!this._element) {
            const t2 = document.createElement("div");
            t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
          }
          return this._element;
        }
        _configAfterMerge(t2) {
          return t2.rootElement = c(t2.rootElement), t2;
        }
        _append() {
          if (this._isAppended)
            return;
          const t2 = this._getElement();
          this._config.rootElement.append(t2), F.on(t2, jt, () => {
            v(this._config.clickCallback);
          }), this._isAppended = true;
        }
        _emulateAnimation(t2) {
          y(t2, this._getElement(), this._config.isAnimated);
        }
      }
      const Ht = ".bs.focustrap", Bt = "backward", qt = { autofocus: true, trapElement: null }, Wt = { autofocus: "boolean", trapElement: "element" };
      class Rt extends q {
        constructor(t2) {
          super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
        }
        static get Default() {
          return qt;
        }
        static get DefaultType() {
          return Wt;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive || (this._config.autofocus && this._config.trapElement.focus(), F.off(document, Ht), F.on(document, "focusin.bs.focustrap", (t2) => this._handleFocusin(t2)), F.on(document, "keydown.tab.bs.focustrap", (t2) => this._handleKeydown(t2)), this._isActive = true);
        }
        deactivate() {
          this._isActive && (this._isActive = false, F.off(document, Ht));
        }
        _handleFocusin(t2) {
          const { trapElement: e2 } = this._config;
          if (t2.target === document || t2.target === e2 || e2.contains(t2.target))
            return;
          const s2 = K.focusableChildren(e2);
          0 === s2.length ? e2.focus() : this._lastTabNavDirection === Bt ? s2[s2.length - 1].focus() : s2[0].focus();
        }
        _handleKeydown(t2) {
          "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? Bt : "forward");
        }
      }
      const Kt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Vt = ".sticky-top", Qt = "padding-right", Xt = "margin-right";
      class Yt {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const t2 = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t2);
        }
        hide() {
          const t2 = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, Qt, (e2) => e2 + t2), this._setElementAttributes(Kt, Qt, (e2) => e2 + t2), this._setElementAttributes(Vt, Xt, (e2) => e2 - t2);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Qt), this._resetElementAttributes(Kt, Qt), this._resetElementAttributes(Vt, Xt);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t2, e2, s2) {
          const i2 = this.getWidth();
          this._applyManipulationCallback(t2, (t3) => {
            if (t3 !== this._element && window.innerWidth > t3.clientWidth + i2)
              return;
            this._saveInitialAttribute(t3, e2);
            const n2 = window.getComputedStyle(t3).getPropertyValue(e2);
            t3.style.setProperty(e2, `${s2(Number.parseFloat(n2))}px`);
          });
        }
        _saveInitialAttribute(t2, e2) {
          const s2 = t2.style.getPropertyValue(e2);
          s2 && B.setDataAttribute(t2, e2, s2);
        }
        _resetElementAttributes(t2, e2) {
          this._applyManipulationCallback(t2, (t3) => {
            const s2 = B.getDataAttribute(t3, e2);
            null !== s2 ? (B.removeDataAttribute(t3, e2), t3.style.setProperty(e2, s2)) : t3.style.removeProperty(e2);
          });
        }
        _applyManipulationCallback(t2, e2) {
          if (l(t2))
            e2(t2);
          else
            for (const s2 of K.find(t2, this._element))
              e2(s2);
        }
      }
      const Ut = ".bs.modal", Gt = "hidden.bs.modal", Jt = "show.bs.modal", Zt = "modal-open", te = "show", ee = "modal-static", se = { backdrop: true, focus: true, keyboard: true }, ie = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
      class ne extends W {
        constructor(t2, e2) {
          super(t2, e2), this._dialog = K.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new Yt(), this._addEventListeners();
        }
        static get Default() {
          return se;
        }
        static get DefaultType() {
          return ie;
        }
        static get NAME() {
          return "modal";
        }
        toggle(t2) {
          return this._isShown ? this.hide() : this.show(t2);
        }
        show(t2) {
          this._isShown || this._isTransitioning || F.trigger(this._element, Jt, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Zt), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
        }
        hide() {
          this._isShown && !this._isTransitioning && (F.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(te), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
          F.off(window, Ut), F.off(this._dialog, Ut), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new zt({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
        }
        _initializeFocusTrap() {
          return new Rt({ trapElement: this._element });
        }
        _showElement(t2) {
          document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
          const e2 = K.findOne(".modal-body", this._dialog);
          e2 && (e2.scrollTop = 0), g(this._element), this._element.classList.add(te), this._queueCallback(() => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = false, F.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
          }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
          F.on(this._element, "keydown.dismiss.bs.modal", (t2) => {
            "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
          }), F.on(window, "resize.bs.modal", () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }), F.on(this._element, "mousedown.dismiss.bs.modal", (t2) => {
            F.one(this._element, "click.dismiss.bs.modal", (e2) => {
              this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
            });
          });
        }
        _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
            document.body.classList.remove(Zt), this._resetAdjustments(), this._scrollBar.reset(), F.trigger(this._element, Gt);
          });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (F.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
            return;
          const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
          "hidden" === e2 || this._element.classList.contains(ee) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(ee), this._queueCallback(() => {
            this._element.classList.remove(ee), this._queueCallback(() => {
              this._element.style.overflowY = e2;
            }, this._dialog);
          }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
          const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), s2 = e2 > 0;
          if (s2 && !t2) {
            const t3 = p() ? "paddingLeft" : "paddingRight";
            this._element.style[t3] = `${e2}px`;
          }
          if (!s2 && t2) {
            const t3 = p() ? "paddingRight" : "paddingLeft";
            this._element.style[t3] = `${e2}px`;
          }
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t2, e2) {
          return this.each(function() {
            const s2 = ne.getOrCreateInstance(this, t2);
            if ("string" == typeof t2) {
              if (void 0 === s2[t2])
                throw new TypeError(`No method named "${t2}"`);
              s2[t2](e2);
            }
          });
        }
      }
      F.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t2) {
        const e2 = K.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), F.one(e2, Jt, (t3) => {
          t3.defaultPrevented || F.one(e2, Gt, () => {
            h(this) && this.focus();
          });
        });
        const s2 = K.findOne(".modal.show");
        s2 && ne.getInstance(s2).hide(), ne.getOrCreateInstance(e2).toggle(this);
      }), V(ne), b(ne);
      const oe = "show", re = "showing", ae = "hiding", le = ".offcanvas.show", ce = "hidePrevented.bs.offcanvas", he = "hidden.bs.offcanvas", de = { backdrop: true, keyboard: true, scroll: false }, ue = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
      class _e extends W {
        constructor(t2, e2) {
          super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
          return de;
        }
        static get DefaultType() {
          return ue;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(t2) {
          return this._isShown ? this.hide() : this.show(t2);
        }
        show(t2) {
          this._isShown || F.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new Yt().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(re), this._queueCallback(() => {
            this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(oe), this._element.classList.remove(re), F.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
          }, this._element, true));
        }
        hide() {
          this._isShown && (F.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(ae), this._backdrop.hide(), this._queueCallback(() => {
            this._element.classList.remove(oe, ae), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Yt().reset(), F.trigger(this._element, he);
          }, this._element, true)));
        }
        dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
          const t2 = Boolean(this._config.backdrop);
          return new zt({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
            "static" !== this._config.backdrop ? this.hide() : F.trigger(this._element, ce);
          } : null });
        }
        _initializeFocusTrap() {
          return new Rt({ trapElement: this._element });
        }
        _addEventListeners() {
          F.on(this._element, "keydown.dismiss.bs.offcanvas", (t2) => {
            "Escape" === t2.key && (this._config.keyboard ? this.hide() : F.trigger(this._element, ce));
          });
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = _e.getOrCreateInstance(this, t2);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                throw new TypeError(`No method named "${t2}"`);
              e2[t2](this);
            }
          });
        }
      }
      F.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t2) {
        const e2 = K.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), d(this))
          return;
        F.one(e2, he, () => {
          h(this) && this.focus();
        });
        const s2 = K.findOne(le);
        s2 && s2 !== e2 && _e.getInstance(s2).hide(), _e.getOrCreateInstance(e2).toggle(this);
      }), F.on(window, "load.bs.offcanvas.data-api", () => {
        for (const t2 of K.find(le))
          _e.getOrCreateInstance(t2).show();
      }), F.on(window, "resize.bs.offcanvas", () => {
        for (const t2 of K.find("[aria-modal][class*=show][class*=offcanvas-]"))
          "fixed" !== getComputedStyle(t2).position && _e.getOrCreateInstance(t2).hide();
      }), V(_e), b(_e);
      const ge = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, fe = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), me = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, pe = (t2, e2) => {
        const s2 = t2.nodeName.toLowerCase();
        return e2.includes(s2) ? !fe.has(s2) || Boolean(me.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(s2));
      }, be = { allowList: ge, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, ve = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, ye = { entry: "(string|element|function|null)", selector: "(string|element)" };
      class we extends q {
        constructor(t2) {
          super(), this._config = this._getConfig(t2);
        }
        static get Default() {
          return be;
        }
        static get DefaultType() {
          return ve;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(t2) {
          return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
        }
        toHtml() {
          const t2 = document.createElement("div");
          t2.innerHTML = this._maybeSanitize(this._config.template);
          for (const [e3, s3] of Object.entries(this._config.content))
            this._setContent(t2, s3, e3);
          const e2 = t2.children[0], s2 = this._resolvePossibleFunction(this._config.extraClass);
          return s2 && e2.classList.add(...s2.split(" ")), e2;
        }
        _typeCheckConfig(t2) {
          super._typeCheckConfig(t2), this._checkContent(t2.content);
        }
        _checkContent(t2) {
          for (const [e2, s2] of Object.entries(t2))
            super._typeCheckConfig({ selector: e2, entry: s2 }, ye);
        }
        _setContent(t2, e2, s2) {
          const i2 = K.findOne(s2, t2);
          i2 && ((e2 = this._resolvePossibleFunction(e2)) ? l(e2) ? this._putElementInTemplate(c(e2), i2) : this._config.html ? i2.innerHTML = this._maybeSanitize(e2) : i2.textContent = e2 : i2.remove());
        }
        _maybeSanitize(t2) {
          return this._config.sanitize ? function(t3, e2, s2) {
            if (!t3.length)
              return t3;
            if (s2 && "function" == typeof s2)
              return s2(t3);
            const i2 = new window.DOMParser().parseFromString(t3, "text/html"), n2 = [].concat(...i2.body.querySelectorAll("*"));
            for (const t4 of n2) {
              const s3 = t4.nodeName.toLowerCase();
              if (!Object.keys(e2).includes(s3)) {
                t4.remove();
                continue;
              }
              const i3 = [].concat(...t4.attributes), n3 = [].concat(e2["*"] || [], e2[s3] || []);
              for (const e3 of i3)
                pe(e3, n3) || t4.removeAttribute(e3.nodeName);
            }
            return i2.body.innerHTML;
          }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
        }
        _resolvePossibleFunction(t2) {
          return v(t2, [this]);
        }
        _putElementInTemplate(t2, e2) {
          if (this._config.html)
            return e2.innerHTML = "", void e2.append(t2);
          e2.textContent = t2.textContent;
        }
      }
      const Ae = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ee = "fade", Ce = "show", Te = ".modal", ke = "hide.bs.modal", Se = "hover", Le = "focus", Oe = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, Ie = { allowList: ge, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, De = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
      class Ne extends W {
        constructor(t2, e2) {
          if (void 0 === s)
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
          return Ie;
        }
        static get DefaultType() {
          return De;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = true;
        }
        disable() {
          this._isEnabled = false;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout), F.off(this._element.closest(Te), ke, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled)
            return;
          const t2 = F.trigger(this._element, this.constructor.eventName("show")), e2 = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
          if (t2.defaultPrevented || !e2)
            return;
          this._disposePopper();
          const s2 = this._getTipElement();
          this._element.setAttribute("aria-describedby", s2.getAttribute("id"));
          const { container: i2 } = this._config;
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (i2.append(s2), F.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(s2), s2.classList.add(Ce), "ontouchstart" in document.documentElement)
            for (const t3 of [].concat(...document.body.children))
              F.on(t3, "mouseover", _);
          this._queueCallback(() => {
            F.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
          }, this.tip, this._isAnimated());
        }
        hide() {
          if (this._isShown() && !F.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
            if (this._getTipElement().classList.remove(Ce), "ontouchstart" in document.documentElement)
              for (const t2 of [].concat(...document.body.children))
                F.off(t2, "mouseover", _);
            this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false, this._isHovered = null, this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), F.trigger(this._element, this.constructor.eventName("hidden")));
            }, this.tip, this._isAnimated());
          }
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t2) {
          const e2 = this._getTemplateFactory(t2).toHtml();
          if (!e2)
            return null;
          e2.classList.remove(Ee, Ce), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
          const s2 = ((t3) => {
            do {
              t3 += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t3));
            return t3;
          })(this.constructor.NAME).toString();
          return e2.setAttribute("id", s2), this._isAnimated() && e2.classList.add(Ee), e2;
        }
        setContent(t2) {
          this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t2) {
          return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new we({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
        }
        _getContentForTemplate() {
          return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t2) {
          return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(Ee);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(Ce);
        }
        _createPopper(t2) {
          const e2 = v(this._config.placement, [this, t2, this._element]), i2 = Oe[e2.toUpperCase()];
          return s.createPopper(this._element, t2, this._getPopperConfig(i2));
        }
        _getOffset() {
          const { offset: t2 } = this._config;
          return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
        }
        _resolvePossibleFunction(t2) {
          return v(t2, [this._element]);
        }
        _getPopperConfig(t2) {
          const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
            this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
          } }] };
          return { ...e2, ...v(this._config.popperConfig, [e2]) };
        }
        _setListeners() {
          const t2 = this._config.trigger.split(" ");
          for (const e2 of t2)
            if ("click" === e2)
              F.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
                this._initializeOnDelegatedTarget(t3).toggle();
              });
            else if ("manual" !== e2) {
              const t3 = e2 === Se ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), s2 = e2 === Se ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              F.on(this._element, t3, this._config.selector, (t4) => {
                const e3 = this._initializeOnDelegatedTarget(t4);
                e3._activeTrigger["focusin" === t4.type ? Le : Se] = true, e3._enter();
              }), F.on(this._element, s2, this._config.selector, (t4) => {
                const e3 = this._initializeOnDelegatedTarget(t4);
                e3._activeTrigger["focusout" === t4.type ? Le : Se] = e3._element.contains(t4.relatedTarget), e3._leave();
              });
            }
          this._hideModalHandler = () => {
            this._element && this.hide();
          }, F.on(this._element.closest(Te), ke, this._hideModalHandler);
        }
        _fixTitle() {
          const t2 = this._element.getAttribute("title");
          t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
        }
        _setTimeout(t2, e2) {
          clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(true);
        }
        _getConfig(t2) {
          const e2 = B.getDataAttributes(this._element);
          for (const t3 of Object.keys(e2))
            Ae.has(t3) && delete e2[t3];
          return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
        }
        _configAfterMerge(t2) {
          return t2.container = false === t2.container ? document.body : c(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
        }
        _getDelegateConfig() {
          const t2 = {};
          for (const [e2, s2] of Object.entries(this._config))
            this.constructor.Default[e2] !== s2 && (t2[e2] = s2);
          return t2.selector = false, t2.trigger = "manual", t2;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = Ne.getOrCreateInstance(this, t2);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2])
                throw new TypeError(`No method named "${t2}"`);
              e2[t2]();
            }
          });
        }
      }
      b(Ne);
      const Pe = { ...Ne.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, xe = { ...Ne.DefaultType, content: "(null|string|element|function)" };
      class Me extends Ne {
        static get Default() {
          return Pe;
        }
        static get DefaultType() {
          return xe;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = Me.getOrCreateInstance(this, t2);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2])
                throw new TypeError(`No method named "${t2}"`);
              e2[t2]();
            }
          });
        }
      }
      b(Me);
      const je = "click.bs.scrollspy", Fe = "active", $e = "[href]", ze = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, He = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
      class Be extends W {
        constructor(t2, e2) {
          super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
        }
        static get Default() {
          return ze;
        }
        static get DefaultType() {
          return He;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
          for (const t2 of this._observableSections.values())
            this._observer.observe(t2);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t2) {
          return t2.target = c(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll && (F.off(this._config.target, je), F.on(this._config.target, je, $e, (t2) => {
            const e2 = this._observableSections.get(t2.target.hash);
            if (e2) {
              t2.preventDefault();
              const s2 = this._rootElement || window, i2 = e2.offsetTop - this._element.offsetTop;
              if (s2.scrollTo)
                return void s2.scrollTo({ top: i2, behavior: "smooth" });
              s2.scrollTop = i2;
            }
          }));
        }
        _getNewObserver() {
          const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
          return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
        }
        _observerCallback(t2) {
          const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), s2 = (t3) => {
            this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
          }, i2 = (this._rootElement || document.documentElement).scrollTop, n2 = i2 >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = i2;
          for (const o2 of t2) {
            if (!o2.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e2(o2));
              continue;
            }
            const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (n2 && t3) {
              if (s2(o2), !i2)
                return;
            } else
              n2 || t3 || s2(o2);
          }
        }
        _initializeTargetsAndObservables() {
          this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
          const t2 = K.find($e, this._config.target);
          for (const e2 of t2) {
            if (!e2.hash || d(e2))
              continue;
            const t3 = K.findOne(decodeURI(e2.hash), this._element);
            h(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
          }
        }
        _process(t2) {
          this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(Fe), this._activateParents(t2), F.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t2 }));
        }
        _activateParents(t2) {
          if (t2.classList.contains("dropdown-item"))
            K.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(Fe);
          else
            for (const e2 of K.parents(t2, ".nav, .list-group"))
              for (const t3 of K.prev(e2, ".nav-link, .nav-item > .nav-link, .list-group-item"))
                t3.classList.add(Fe);
        }
        _clearActiveClass(t2) {
          t2.classList.remove(Fe);
          const e2 = K.find("[href].active", t2);
          for (const t3 of e2)
            t3.classList.remove(Fe);
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = Be.getOrCreateInstance(this, t2);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                throw new TypeError(`No method named "${t2}"`);
              e2[t2]();
            }
          });
        }
      }
      F.on(window, "load.bs.scrollspy.data-api", () => {
        for (const t2 of K.find('[data-bs-spy="scroll"]'))
          Be.getOrCreateInstance(t2);
      }), b(Be);
      const qe = "ArrowLeft", We = "ArrowRight", Re = "ArrowUp", Ke = "ArrowDown", Ve = "active", Qe = "fade", Xe = "show", Ye = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ue = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ye}`;
      class Ge extends W {
        constructor(t2) {
          super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), F.on(this._element, "keydown.bs.tab", (t3) => this._keydown(t3)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const t2 = this._element;
          if (this._elemIsActive(t2))
            return;
          const e2 = this._getActiveElem(), s2 = e2 ? F.trigger(e2, "hide.bs.tab", { relatedTarget: t2 }) : null;
          F.trigger(t2, "show.bs.tab", { relatedTarget: e2 }).defaultPrevented || s2 && s2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
        }
        _activate(t2, e2) {
          t2 && (t2.classList.add(Ve), this._activate(K.getElementFromSelector(t2)), this._queueCallback(() => {
            "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), F.trigger(t2, "shown.bs.tab", { relatedTarget: e2 })) : t2.classList.add(Xe);
          }, t2, t2.classList.contains(Qe)));
        }
        _deactivate(t2, e2) {
          t2 && (t2.classList.remove(Ve), t2.blur(), this._deactivate(K.getElementFromSelector(t2)), this._queueCallback(() => {
            "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), F.trigger(t2, "hidden.bs.tab", { relatedTarget: e2 })) : t2.classList.remove(Xe);
          }, t2, t2.classList.contains(Qe)));
        }
        _keydown(t2) {
          if (![qe, We, Re, Ke].includes(t2.key))
            return;
          t2.stopPropagation(), t2.preventDefault();
          const e2 = [We, Ke].includes(t2.key), s2 = w(this._getChildren().filter((t3) => !d(t3)), t2.target, e2, true);
          s2 && (s2.focus({ preventScroll: true }), Ge.getOrCreateInstance(s2).show());
        }
        _getChildren() {
          return K.find(Ue, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
        }
        _setInitialAttributes(t2, e2) {
          this._setAttributeIfNotExists(t2, "role", "tablist");
          for (const t3 of e2)
            this._setInitialAttributesOnChild(t3);
        }
        _setInitialAttributesOnChild(t2) {
          t2 = this._getInnerElement(t2);
          const e2 = this._elemIsActive(t2), s2 = this._getOuterElement(t2);
          t2.setAttribute("aria-selected", e2), s2 !== t2 && this._setAttributeIfNotExists(s2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
        }
        _setInitialAttributesOnTargetPanel(t2) {
          const e2 = K.getElementFromSelector(t2);
          e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
        }
        _toggleDropDown(t2, e2) {
          const s2 = this._getOuterElement(t2);
          if (!s2.classList.contains("dropdown"))
            return;
          const i2 = (t3, i3) => {
            const n2 = K.findOne(t3, s2);
            n2 && n2.classList.toggle(i3, e2);
          };
          i2(".dropdown-toggle", Ve), i2(".dropdown-menu", Xe), s2.setAttribute("aria-expanded", e2);
        }
        _setAttributeIfNotExists(t2, e2, s2) {
          t2.hasAttribute(e2) || t2.setAttribute(e2, s2);
        }
        _elemIsActive(t2) {
          return t2.classList.contains(Ve);
        }
        _getInnerElement(t2) {
          return t2.matches(Ue) ? t2 : K.findOne(Ue, t2);
        }
        _getOuterElement(t2) {
          return t2.closest(".nav-item, .list-group-item") || t2;
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = Ge.getOrCreateInstance(this);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                throw new TypeError(`No method named "${t2}"`);
              e2[t2]();
            }
          });
        }
      }
      F.on(document, "click.bs.tab", Ye, function(t2) {
        ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), d(this) || Ge.getOrCreateInstance(this).show();
      }), F.on(window, "load.bs.tab", () => {
        for (const t2 of K.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
          Ge.getOrCreateInstance(t2);
      }), b(Ge);
      const Je = "hide", Ze = "show", ts = "showing", es = { animation: "boolean", autohide: "boolean", delay: "number" }, ss = { animation: true, autohide: true, delay: 5e3 };
      class is extends W {
        constructor(t2, e2) {
          super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
        }
        static get Default() {
          return ss;
        }
        static get DefaultType() {
          return es;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          F.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Je), g(this._element), this._element.classList.add(Ze, ts), this._queueCallback(() => {
            this._element.classList.remove(ts), F.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
          }, this._element, this._config.animation));
        }
        hide() {
          this.isShown() && (F.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ts), this._queueCallback(() => {
            this._element.classList.add(Je), this._element.classList.remove(ts, Ze), F.trigger(this._element, "hidden.bs.toast");
          }, this._element, this._config.animation)));
        }
        dispose() {
          this._clearTimeout(), this.isShown() && this._element.classList.remove(Ze), super.dispose();
        }
        isShown() {
          return this._element.classList.contains(Ze);
        }
        _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
        }
        _onInteraction(t2, e2) {
          switch (t2.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = e2;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = e2;
          }
          if (e2)
            return void this._clearTimeout();
          const s2 = t2.relatedTarget;
          this._element === s2 || this._element.contains(s2) || this._maybeScheduleHide();
        }
        _setListeners() {
          F.on(this._element, "mouseover.bs.toast", (t2) => this._onInteraction(t2, true)), F.on(this._element, "mouseout.bs.toast", (t2) => this._onInteraction(t2, false)), F.on(this._element, "focusin.bs.toast", (t2) => this._onInteraction(t2, true)), F.on(this._element, "focusout.bs.toast", (t2) => this._onInteraction(t2, false));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t2) {
          return this.each(function() {
            const e2 = is.getOrCreateInstance(this, t2);
            if ("string" == typeof t2) {
              if (void 0 === e2[t2])
                throw new TypeError(`No method named "${t2}"`);
              e2[t2](this);
            }
          });
        }
      }
      return V(is), b(is), { Alert: Q, Button: Y, Carousel: ct, Collapse: mt, Dropdown: xt, Modal: ne, Offcanvas: _e, Popover: Me, ScrollSpy: Be, Tab: Ge, Toast: is, Tooltip: Ne };
    });
  }
});
export default require_bootstrap_min();
/*! Bundled license information:

bootstrap/dist/js/bootstrap.min.js:
  (*!
    * Bootstrap v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=bootstrap_dist_js_bootstrap__min__js.js.map
