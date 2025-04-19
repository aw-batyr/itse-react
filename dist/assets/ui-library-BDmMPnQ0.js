var Pu = (e) => {
  throw TypeError(e);
};
var ha = (e, t, n) => t.has(e) || Pu("Cannot " + n);
var E = (e, t, n) => (
    ha(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ne = (e, t, n) =>
    t.has(e)
      ? Pu("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  G = (e, t, n, r) => (
    ha(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  me = (e, t, n) => (ha(e, t, "access private method"), n);
var Bi = (e, t, n, r) => ({
  set _(s) {
    G(e, t, s, n);
  },
  get _() {
    return E(e, t, r);
  },
});
import {
  r as Bv,
  a as v,
  R as Uv,
  b as Eh,
  c as $v,
  d as fe,
  L as De,
  e as Ui,
} from "./react-vendor-hBYZTV6x.js";
var pa = { exports: {} },
  Ts = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ku;
function zv() {
  if (ku) return Ts;
  ku = 1;
  var e = Bv(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, l) {
    var u,
      d = {},
      f = null,
      m = null;
    l !== void 0 && (f = "" + l),
      c.key !== void 0 && (f = "" + c.key),
      c.ref !== void 0 && (m = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps)
      for (u in ((c = a.defaultProps), c)) d[u] === void 0 && (d[u] = c[u]);
    return {
      $$typeof: t,
      type: a,
      key: f,
      ref: m,
      props: d,
      _owner: s.current,
    };
  }
  return (Ts.Fragment = n), (Ts.jsx = o), (Ts.jsxs = o), Ts;
}
var Nu;
function Wv() {
  return Nu || ((Nu = 1), (pa.exports = zv())), pa.exports;
}
var p = Wv();
function Th(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Th(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Ah() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Th(e)) && (r && (r += " "), (r += t));
  return r;
}
const nl = "-",
  Hv = (e) => {
    const t = Gv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(nl);
        return a[0] === "" && a.length !== 1 && a.shift(), Rh(a, t) || qv(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const c = n[o] || [];
        return a && r[o] ? [...c, ...r[o]] : c;
      },
    };
  },
  Rh = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? Rh(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(nl);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Ou = /^\[(.+)\]$/,
  qv = (e) => {
    if (Ou.test(e)) {
      const t = Ou.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Gv = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Kv(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        Qa(o, r, i, t);
      }),
      r
    );
  },
  Qa = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : ju(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (Zv(s)) {
          Qa(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Qa(o, ju(t, i), n, r);
      });
    });
  },
  ju = (e, t) => {
    let n = e;
    return (
      t.split(nl).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Zv = (e) => e.isThemeGetter,
  Kv = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([o, a]) => [t + o, a])
                )
              : i
          );
          return [n, s];
        })
      : e,
  Qv = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return s(i, o), o;
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  Ph = "!",
  Xv = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const c = [];
        let l = 0,
          u = 0,
          d;
        for (let y = 0; y < a.length; y++) {
          let b = a[y];
          if (l === 0) {
            if (b === s && (r || a.slice(y, y + i) === t)) {
              c.push(a.slice(u, y)), (u = y + i);
              continue;
            }
            if (b === "/") {
              d = y;
              continue;
            }
          }
          b === "[" ? l++ : b === "]" && l--;
        }
        const f = c.length === 0 ? a : a.substring(u),
          m = f.startsWith(Ph),
          g = m ? f.substring(1) : f,
          h = d && d > u ? d - u : void 0;
        return {
          modifiers: c,
          hasImportantModifier: m,
          baseClassName: g,
          maybePostfixModifierPosition: h,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  Yv = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Jv = (e) => ({ cache: Qv(e.cacheSize), parseClassName: Xv(e), ...Hv(e) }),
  eb = /\s+/,
  tb = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(eb);
    let a = "";
    for (let c = o.length - 1; c >= 0; c -= 1) {
      const l = o[c],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: m,
        } = n(l);
      let g = !!m,
        h = r(g ? f.substring(0, m) : f);
      if (!h) {
        if (!g) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((h = r(f)), !h)) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        g = !1;
      }
      const y = Yv(u).join(":"),
        b = d ? y + Ph : y,
        x = b + h;
      if (i.includes(x)) continue;
      i.push(x);
      const w = s(h, g);
      for (let C = 0; C < w.length; ++C) {
        const S = w[C];
        i.push(b + S);
      }
      a = l + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function nb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = kh(t)) && (r && (r += " "), (r += n));
  return r;
}
const kh = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = kh(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function rb(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(c) {
    const l = t.reduce((u, d) => d(u), e());
    return (n = Jv(l)), (r = n.cache.get), (s = n.cache.set), (i = a), a(c);
  }
  function a(c) {
    const l = r(c);
    if (l) return l;
    const u = tb(c, n);
    return s(c, u), u;
  }
  return function () {
    return i(nb.apply(null, arguments));
  };
}
const Ce = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Nh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  sb = /^\d+\/\d+$/,
  ib = new Set(["px", "full", "screen"]),
  ob = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ab =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  cb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  lb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ub =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  fn = (e) => zr(e) || ib.has(e) || sb.test(e),
  En = (e) => ms(e, "length", vb),
  zr = (e) => !!e && !Number.isNaN(Number(e)),
  ma = (e) => ms(e, "number", zr),
  As = (e) => !!e && Number.isInteger(Number(e)),
  db = (e) => e.endsWith("%") && zr(e.slice(0, -1)),
  le = (e) => Nh.test(e),
  Tn = (e) => ob.test(e),
  fb = new Set(["length", "size", "percentage"]),
  hb = (e) => ms(e, fb, Oh),
  pb = (e) => ms(e, "position", Oh),
  mb = new Set(["image", "url"]),
  gb = (e) => ms(e, mb, xb),
  yb = (e) => ms(e, "", bb),
  Rs = () => !0,
  ms = (e, t, n) => {
    const r = Nh.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  vb = (e) => ab.test(e) && !cb.test(e),
  Oh = () => !1,
  bb = (e) => lb.test(e),
  xb = (e) => ub.test(e),
  wb = () => {
    const e = Ce("colors"),
      t = Ce("spacing"),
      n = Ce("blur"),
      r = Ce("brightness"),
      s = Ce("borderColor"),
      i = Ce("borderRadius"),
      o = Ce("borderSpacing"),
      a = Ce("borderWidth"),
      c = Ce("contrast"),
      l = Ce("grayscale"),
      u = Ce("hueRotate"),
      d = Ce("invert"),
      f = Ce("gap"),
      m = Ce("gradientColorStops"),
      g = Ce("gradientColorStopPositions"),
      h = Ce("inset"),
      y = Ce("margin"),
      b = Ce("opacity"),
      x = Ce("padding"),
      w = Ce("saturate"),
      C = Ce("scale"),
      S = Ce("sepia"),
      R = Ce("skew"),
      A = Ce("space"),
      T = Ce("translate"),
      O = () => ["auto", "contain", "none"],
      D = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", le, t],
      j = () => [le, t],
      U = () => ["", fn, En],
      L = () => ["auto", zr, le],
      Y = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      Z = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      q = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      se = () => ["", "0", le],
      he = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      ve = () => [zr, le];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Rs],
        spacing: [fn, En],
        blur: ["none", "", Tn, le],
        brightness: ve(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Tn, le],
        borderSpacing: j(),
        borderWidth: U(),
        contrast: ve(),
        grayscale: se(),
        hueRotate: ve(),
        invert: se(),
        gap: j(),
        gradientColorStops: [e],
        gradientColorStopPositions: [db, En],
        inset: F(),
        margin: F(),
        opacity: ve(),
        padding: j(),
        saturate: ve(),
        scale: ve(),
        sepia: se(),
        skew: ve(),
        space: j(),
        translate: j(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", le] }],
        container: ["container"],
        columns: [{ columns: [Tn] }],
        "break-after": [{ "break-after": he() }],
        "break-before": [{ "break-before": he() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Y(), le] }],
        overflow: [{ overflow: D() }],
        "overflow-x": [{ "overflow-x": D() }],
        "overflow-y": [{ "overflow-y": D() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [h] }],
        "inset-x": [{ "inset-x": [h] }],
        "inset-y": [{ "inset-y": [h] }],
        start: [{ start: [h] }],
        end: [{ end: [h] }],
        top: [{ top: [h] }],
        right: [{ right: [h] }],
        bottom: [{ bottom: [h] }],
        left: [{ left: [h] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", As, le] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", le] }],
        grow: [{ grow: se() }],
        shrink: [{ shrink: se() }],
        order: [{ order: ["first", "last", "none", As, le] }],
        "grid-cols": [{ "grid-cols": [Rs] }],
        "col-start-end": [{ col: ["auto", { span: ["full", As, le] }, le] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [Rs] }],
        "row-start-end": [{ row: ["auto", { span: [As, le] }, le] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", le] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", le] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...q()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...q(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...q(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [x] }],
        px: [{ px: [x] }],
        py: [{ py: [x] }],
        ps: [{ ps: [x] }],
        pe: [{ pe: [x] }],
        pt: [{ pt: [x] }],
        pr: [{ pr: [x] }],
        pb: [{ pb: [x] }],
        pl: [{ pl: [x] }],
        m: [{ m: [y] }],
        mx: [{ mx: [y] }],
        my: [{ my: [y] }],
        ms: [{ ms: [y] }],
        me: [{ me: [y] }],
        mt: [{ mt: [y] }],
        mr: [{ mr: [y] }],
        mb: [{ mb: [y] }],
        ml: [{ ml: [y] }],
        "space-x": [{ "space-x": [A] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [A] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, t] }],
        "min-w": [{ "min-w": [le, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              le,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Tn] },
              Tn,
            ],
          },
        ],
        h: [{ h: [le, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [le, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Tn, En] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              ma,
            ],
          },
        ],
        "font-family": [{ font: [Rs] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              le,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", zr, ma] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              fn,
              le,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", le] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", le] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [b] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [b] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", fn, En] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", fn, le] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: j() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              le,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", le] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [b] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Y(), pb] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", hb] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              gb,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [g] }],
        "gradient-via-pos": [{ via: [g] }],
        "gradient-to-pos": [{ to: [g] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [b] }],
        "border-style": [{ border: [...Z(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: Z() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...Z()] }],
        "outline-offset": [{ "outline-offset": [fn, le] }],
        "outline-w": [{ outline: [fn, En] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: U() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [fn, En] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Tn, yb] }],
        "shadow-color": [{ shadow: [Rs] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Tn, le] }],
        grayscale: [{ grayscale: [l] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              le,
            ],
          },
        ],
        duration: [{ duration: ve() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", le] }],
        delay: [{ delay: ve() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", le] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [As, le] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [R] }],
        "skew-y": [{ "skew-y": [R] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              le,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              le,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": j() }],
        "scroll-mx": [{ "scroll-mx": j() }],
        "scroll-my": [{ "scroll-my": j() }],
        "scroll-ms": [{ "scroll-ms": j() }],
        "scroll-me": [{ "scroll-me": j() }],
        "scroll-mt": [{ "scroll-mt": j() }],
        "scroll-mr": [{ "scroll-mr": j() }],
        "scroll-mb": [{ "scroll-mb": j() }],
        "scroll-ml": [{ "scroll-ml": j() }],
        "scroll-p": [{ "scroll-p": j() }],
        "scroll-px": [{ "scroll-px": j() }],
        "scroll-py": [{ "scroll-py": j() }],
        "scroll-ps": [{ "scroll-ps": j() }],
        "scroll-pe": [{ "scroll-pe": j() }],
        "scroll-pt": [{ "scroll-pt": j() }],
        "scroll-pr": [{ "scroll-pr": j() }],
        "scroll-pb": [{ "scroll-pb": j() }],
        "scroll-pl": [{ "scroll-pl": j() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", le] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [fn, En, ma] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Sb = rb(wb);
function Q(...e) {
  return Sb(Ah(e));
}
const jh = ({ className: e }) =>
  p.jsx("div", {
    className: Q("h-16 w-[184px]", e),
    children: p.jsx("img", {
      src: "/logo.svg",
      alt: "logo",
      className: "size-full object-contain",
    }),
  });
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _b = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Dh = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Cb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eb = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    c
  ) =>
    v.createElement(
      "svg",
      {
        ref: c,
        ...Cb,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Dh("lucide", s),
        ...a,
      },
      [
        ...o.map(([l, u]) => v.createElement(l, u)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kt = (e, t) => {
  const n = v.forwardRef(({ className: r, ...s }, i) =>
    v.createElement(Eb, {
      ref: i,
      iconNode: t,
      className: Dh(`lucide-${_b(e)}`, r),
      ...s,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tb = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  yN = kt("ArrowRight", Tb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ab = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  rl = kt("ArrowUpRight", Ab);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  vN = kt("Check", Rb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pb = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  bN = kt("ChevronDown", Pb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kb = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  xN = kt("ChevronUp", kb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nb = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  Ob = kt("Facebook", Nb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jb = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  Mh = kt("LoaderCircle", jb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Db = [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ],
  Mb = kt("Loader", Db);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fb = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Ib = kt("MapPin", Fb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lb = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  Vb = kt("Smartphone", Lb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bb = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  Ub = kt("Upload", Bb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $b = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Fh = kt("X", $b);
function Du(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ih(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Du(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Du(e[s], null);
        }
      };
  };
}
function Ze(...e) {
  return v.useCallback(Ih(...e), e);
}
var Vn = v.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    s = v.Children.toArray(n),
    i = s.find(Wb);
  if (i) {
    const o = i.props.children,
      a = s.map((c) =>
        c === i
          ? v.Children.count(o) > 1
            ? v.Children.only(null)
            : v.isValidElement(o)
            ? o.props.children
            : null
          : c
      );
    return p.jsx(Xa, {
      ...r,
      ref: t,
      children: v.isValidElement(o) ? v.cloneElement(o, void 0, a) : null,
    });
  }
  return p.jsx(Xa, { ...r, ref: t, children: n });
});
Vn.displayName = "Slot";
var Xa = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const s = qb(n);
    return v.cloneElement(n, { ...Hb(r, n.props), ref: t ? Ih(t, s) : s });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
Xa.displayName = "SlotClone";
var zb = ({ children: e }) => p.jsx(p.Fragment, { children: e });
function Wb(e) {
  return v.isValidElement(e) && e.type === zb;
}
function Hb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            i(...a), s(...a);
          })
        : s && (n[r] = s)
      : r === "style"
      ? (n[r] = { ...s, ...i })
      : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function qb(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
const Mu = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Fu = Ah,
  sl = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Fu(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((l) => {
        const u = n == null ? void 0 : n[l],
          d = i == null ? void 0 : i[l];
        if (u === null) return null;
        const f = Mu(u) || Mu(d);
        return s[l][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((l, u) => {
          let [d, f] = u;
          return f === void 0 || (l[d] = f), l;
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((l, u) => {
              let { class: d, className: f, ...m } = u;
              return Object.entries(m).every((g) => {
                let [h, y] = g;
                return Array.isArray(y)
                  ? y.includes({ ...i, ...a }[h])
                  : { ...i, ...a }[h] === y;
              })
                ? [...l, d, f]
                : l;
            }, []);
    return Fu(
      e,
      o,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  Gb = sl(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[18px] leading-[140%] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-on_primary shadow hover:bg-primary/90",
          teritary: "bg-teritary hover:bg-teritary/90 text-on_surface",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline: "border border-outline text-on_surface",
          secondary:
            "bg-secondary_container hover:bg-secondary_container/80 text-on_secondary_container",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-white h-8",
        },
        size: {
          default: "h-12 px-5 py-2 rounded-[2px]",
          sm: "h-10 text-base px-4 rounded-[2px]",
          lg: "lg:h-[88px] h-12 rounded-[2px] px-8 ",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Xe = v.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        loading: r,
        children: s,
        asChild: i = !1,
        ...o
      },
      a
    ) => {
      const c = i ? Vn : "button";
      return p.jsx(c, {
        className: Q(Gb({ variant: t, size: n, className: e })),
        ref: a,
        ...o,
        children: r ? p.jsx(Mh, { className: "w-5 h-5 animate-spin" }) : s,
      });
    }
  );
Xe.displayName = "Button";
function Te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Zb(e, t) {
  const n = v.createContext(t),
    r = (i) => {
      const { children: o, ...a } = i,
        c = v.useMemo(() => a, Object.values(a));
      return p.jsx(n.Provider, { value: c, children: o });
    };
  r.displayName = e + "Provider";
  function s(i) {
    const o = v.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, s];
}
function Ar(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = v.createContext(o),
      c = n.length;
    n = [...n, o];
    const l = (d) => {
      var b;
      const { scope: f, children: m, ...g } = d,
        h = ((b = f == null ? void 0 : f[e]) == null ? void 0 : b[c]) || a,
        y = v.useMemo(() => g, Object.values(g));
      return p.jsx(h.Provider, { value: y, children: m });
    };
    l.displayName = i + "Provider";
    function u(d, f) {
      var h;
      const m = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[c]) || a,
        g = v.useContext(m);
      if (g) return g;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [l, u];
  }
  const s = () => {
    const i = n.map((o) => v.createContext(o));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (s.scopeName = e), [r, Kb(s, ...t)];
}
function Kb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: c, scopeName: l }) => {
        const d = c(i)[`__scope${l}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var yr =
    globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  Qb = Uv.useId || (() => {}),
  Xb = 0;
function Bs(e) {
  const [t, n] = v.useState(Qb());
  return (
    yr(() => {
      n((r) => r ?? String(Xb++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
function Ut(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Vo({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = Yb({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    o = i ? e : r,
    a = Ut(n),
    c = v.useCallback(
      (l) => {
        if (i) {
          const d = typeof l == "function" ? l(e) : l;
          d !== e && a(d);
        } else s(l);
      },
      [i, e, s, a]
    );
  return [o, c];
}
function Yb({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    s = v.useRef(r),
    i = Ut(t);
  return (
    v.useEffect(() => {
      s.current !== r && (i(r), (s.current = r));
    }, [r, s, i]),
    n
  );
}
var Jb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Me = Jb.reduce((e, t) => {
    const n = v.forwardRef((r, s) => {
      const { asChild: i, ...o } = r,
        a = i ? Vn : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(a, { ...o, ref: s })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Lh(e, t) {
  e && Eh.flushSync(() => e.dispatchEvent(t));
}
function Vh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ut(e);
  v.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var ex = "DismissableLayer",
  Ya = "dismissableLayer.update",
  tx = "dismissableLayer.pointerDownOutside",
  nx = "dismissableLayer.focusOutside",
  Iu,
  Bh = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Uh = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = e,
      l = v.useContext(Bh),
      [u, d] = v.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = v.useState({}),
      g = Ze(t, (A) => d(A)),
      h = Array.from(l.layers),
      [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = h.indexOf(y),
      x = u ? h.indexOf(u) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      C = x >= b,
      S = ix((A) => {
        const T = A.target,
          O = [...l.branches].some((D) => D.contains(T));
        !C ||
          O ||
          (s == null || s(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f),
      R = ox((A) => {
        const T = A.target;
        [...l.branches].some((D) => D.contains(T)) ||
          (i == null || i(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f);
    return (
      Vh((A) => {
        x === l.layers.size - 1 &&
          (r == null || r(A),
          !A.defaultPrevented && a && (A.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Iu = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            Lu(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Iu);
            }
          );
      }, [u, f, n, l]),
      v.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            Lu());
        },
        [u, l]
      ),
      v.useEffect(() => {
        const A = () => m({});
        return (
          document.addEventListener(Ya, A),
          () => document.removeEventListener(Ya, A)
        );
      }, []),
      p.jsx(Me.div, {
        ...c,
        ref: g,
        style: {
          pointerEvents: w ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Te(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: Te(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        ),
      })
    );
  });
Uh.displayName = ex;
var rx = "DismissableLayerBranch",
  sx = v.forwardRef((e, t) => {
    const n = v.useContext(Bh),
      r = v.useRef(null),
      s = Ze(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      p.jsx(Me.div, { ...e, ref: s })
    );
  });
sx.displayName = rx;
function ix(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ut(e),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              $h(tx, n, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = c),
                t.addEventListener("click", s.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function ox(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ut(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          $h(nx, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Lu() {
  const e = new CustomEvent(Ya);
  document.dispatchEvent(e);
}
function $h(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? Lh(s, i) : s.dispatchEvent(i);
}
var ga = "focusScope.autoFocusOnMount",
  ya = "focusScope.autoFocusOnUnmount",
  Vu = { bubbles: !1, cancelable: !0 },
  ax = "FocusScope",
  il = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        ...o
      } = e,
      [a, c] = v.useState(null),
      l = Ut(s),
      u = Ut(i),
      d = v.useRef(null),
      f = Ze(t, (h) => c(h)),
      m = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.useEffect(() => {
      if (r) {
        let h = function (w) {
            if (m.paused || !a) return;
            const C = w.target;
            a.contains(C) ? (d.current = C) : Rn(d.current, { select: !0 });
          },
          y = function (w) {
            if (m.paused || !a) return;
            const C = w.relatedTarget;
            C !== null && (a.contains(C) || Rn(d.current, { select: !0 }));
          },
          b = function (w) {
            if (document.activeElement === document.body)
              for (const S of w) S.removedNodes.length > 0 && Rn(a);
          };
        document.addEventListener("focusin", h),
          document.addEventListener("focusout", y);
        const x = new MutationObserver(b);
        return (
          a && x.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", h),
              document.removeEventListener("focusout", y),
              x.disconnect();
          }
        );
      }
    }, [r, a, m.paused]),
      v.useEffect(() => {
        if (a) {
          Uu.add(m);
          const h = document.activeElement;
          if (!a.contains(h)) {
            const b = new CustomEvent(ga, Vu);
            a.addEventListener(ga, l),
              a.dispatchEvent(b),
              b.defaultPrevented ||
                (cx(hx(zh(a)), { select: !0 }),
                document.activeElement === h && Rn(a));
          }
          return () => {
            a.removeEventListener(ga, l),
              setTimeout(() => {
                const b = new CustomEvent(ya, Vu);
                a.addEventListener(ya, u),
                  a.dispatchEvent(b),
                  b.defaultPrevented || Rn(h ?? document.body, { select: !0 }),
                  a.removeEventListener(ya, u),
                  Uu.remove(m);
              }, 0);
          };
        }
      }, [a, l, u, m]);
    const g = v.useCallback(
      (h) => {
        if ((!n && !r) || m.paused) return;
        const y = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
          b = document.activeElement;
        if (y && b) {
          const x = h.currentTarget,
            [w, C] = lx(x);
          w && C
            ? !h.shiftKey && b === C
              ? (h.preventDefault(), n && Rn(w, { select: !0 }))
              : h.shiftKey &&
                b === w &&
                (h.preventDefault(), n && Rn(C, { select: !0 }))
            : b === x && h.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return p.jsx(Me.div, { tabIndex: -1, ...o, ref: f, onKeyDown: g });
  });
il.displayName = ax;
function cx(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Rn(r, { select: t }), document.activeElement !== n)) return;
}
function lx(e) {
  const t = zh(e),
    n = Bu(t, e),
    r = Bu(t.reverse(), e);
  return [n, r];
}
function zh(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Bu(e, t) {
  for (const n of e) if (!ux(n, { upTo: t })) return n;
}
function ux(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dx(e) && t && e.select();
  }
}
var Uu = fx();
function fx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = $u(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = $u(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function $u(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function hx(e) {
  return e.filter((t) => t.tagName !== "A");
}
var px = "Portal",
  Wh = v.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = v.useState(!1);
    yr(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? $v.createPortal(p.jsx(Me.div, { ...r, ref: t }), o) : null;
  });
Wh.displayName = px;
function mx(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var gs = (e) => {
  const { present: t, children: n } = e,
    r = gx(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = Ze(r.ref, yx(s));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(s, { ref: i })
    : null;
};
gs.displayName = "Presence";
function gx(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    s = v.useRef(e),
    i = v.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, c] = mx(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const l = $i(r.current);
      i.current = a === "mounted" ? l : "none";
    }, [a]),
    yr(() => {
      const l = r.current,
        u = s.current;
      if (u !== e) {
        const f = i.current,
          m = $i(l);
        e
          ? c("MOUNT")
          : m === "none" || (l == null ? void 0 : l.display) === "none"
          ? c("UNMOUNT")
          : c(u && f !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, c]),
    yr(() => {
      if (t) {
        let l;
        const u = t.ownerDocument.defaultView ?? window,
          d = (m) => {
            const h = $i(r.current).includes(m.animationName);
            if (m.target === t && h && (c("ANIMATION_END"), !s.current)) {
              const y = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (l = u.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = y);
                }));
            }
          },
          f = (m) => {
            m.target === t && (i.current = $i(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            u.clearTimeout(l),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: v.useCallback((l) => {
        l && (r.current = getComputedStyle(l)), n(l);
      }, []),
    }
  );
}
function $i(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function yx(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var va = 0;
function Hh() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? zu()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? zu()),
      va++,
      () => {
        va === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          va--;
      }
    );
  }, []);
}
function zu() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var en = function () {
  return (
    (en =
      Object.assign ||
      function (t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    en.apply(this, arguments)
  );
};
function qh(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
}
function vx(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var eo = "right-scroll-bar-position",
  to = "width-before-scroll-bar",
  bx = "with-scroll-bars-hidden",
  xx = "--removed-body-scroll-bar-size";
function ba(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wx(e, t) {
  var n = v.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var s = n.value;
          s !== r && ((n.value = r), n.callback(r, s));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Sx = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Wu = new WeakMap();
function _x(e, t) {
  var n = wx(null, function (r) {
    return e.forEach(function (s) {
      return ba(s, r);
    });
  });
  return (
    Sx(
      function () {
        var r = Wu.get(n);
        if (r) {
          var s = new Set(r),
            i = new Set(e),
            o = n.current;
          s.forEach(function (a) {
            i.has(a) || ba(a, null);
          }),
            i.forEach(function (a) {
              s.has(a) || ba(a, o);
            });
        }
        Wu.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Cx(e) {
  return e;
}
function Ex(e, t) {
  t === void 0 && (t = Cx);
  var n = [],
    r = !1,
    s = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var o = t(i, r);
        return (
          n.push(o),
          function () {
            n = n.filter(function (a) {
              return a !== o;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var o = n;
          (n = []), o.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var o = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (o = n);
        }
        var c = function () {
            var u = o;
            (o = []), u.forEach(i);
          },
          l = function () {
            return Promise.resolve().then(c);
          };
        l(),
          (n = {
            push: function (u) {
              o.push(u), l();
            },
            filter: function (u) {
              return (o = o.filter(u)), n;
            },
          });
      },
    };
  return s;
}
function Tx(e) {
  e === void 0 && (e = {});
  var t = Ex(null);
  return (t.options = en({ async: !0, ssr: !1 }, e)), t;
}
var Gh = function (e) {
  var t = e.sideCar,
    n = qh(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, en({}, n));
};
Gh.isSideCarExport = !0;
function Ax(e, t) {
  return e.useMedium(t), Gh;
}
var Zh = Tx(),
  xa = function () {},
  Bo = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: xa,
        onWheelCapture: xa,
        onTouchMoveCapture: xa,
      }),
      s = r[0],
      i = r[1],
      o = e.forwardProps,
      a = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      m = e.noIsolation,
      g = e.inert,
      h = e.allowPinchZoom,
      y = e.as,
      b = y === void 0 ? "div" : y,
      x = e.gapMode,
      w = qh(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = f,
      S = _x([n, t]),
      R = en(en({}, w), s);
    return v.createElement(
      v.Fragment,
      null,
      u &&
        v.createElement(C, {
          sideCar: Zh,
          removeScrollBar: l,
          shards: d,
          noIsolation: m,
          inert: g,
          setCallbacks: i,
          allowPinchZoom: !!h,
          lockRef: n,
          gapMode: x,
        }),
      o
        ? v.cloneElement(v.Children.only(a), en(en({}, R), { ref: S }))
        : v.createElement(b, en({}, R, { className: c, ref: S }), a)
    );
  });
Bo.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Bo.classNames = { fullWidth: to, zeroRight: eo };
var Rx = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Px() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Rx();
  return t && e.setAttribute("nonce", t), e;
}
function kx(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Nx(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ox = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Px()) && (kx(t, n), Nx(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  jx = function () {
    var e = Ox();
    return function (t, n) {
      v.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Kh = function () {
    var e = jx(),
      t = function (n) {
        var r = n.styles,
          s = n.dynamic;
        return e(r, s), null;
      };
    return t;
  },
  Dx = { left: 0, top: 0, right: 0, gap: 0 },
  wa = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Mx = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [wa(n), wa(r), wa(s)];
  },
  Fx = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Dx;
    var t = Mx(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Ix = Kh(),
  Wr = "data-scroll-locked",
  Lx = function (e, t, n, r) {
    var s = e.left,
      i = e.top,
      o = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          bx,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Wr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  o,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          eo,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          to,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(eo, " .")
        .concat(
          eo,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(to, " .")
        .concat(
          to,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Wr,
          `] {
    `
        )
        .concat(xx, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Hu = function () {
    var e = parseInt(document.body.getAttribute(Wr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Vx = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(Wr, (Hu() + 1).toString()),
        function () {
          var e = Hu() - 1;
          e <= 0
            ? document.body.removeAttribute(Wr)
            : document.body.setAttribute(Wr, e.toString());
        }
      );
    }, []);
  },
  Bx = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      s = r === void 0 ? "margin" : r;
    Vx();
    var i = v.useMemo(
      function () {
        return Fx(s);
      },
      [s]
    );
    return v.createElement(Ix, { styles: Lx(i, !t, s, n ? "" : "!important") });
  },
  Ja = !1;
if (typeof window < "u")
  try {
    var zi = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ja = !0), !0;
      },
    });
    window.addEventListener("test", zi, zi),
      window.removeEventListener("test", zi, zi);
  } catch {
    Ja = !1;
  }
var Or = Ja ? { passive: !1 } : !1,
  Ux = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Qh = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Ux(e) && n[t] === "visible")
    );
  },
  $x = function (e) {
    return Qh(e, "overflowY");
  },
  zx = function (e) {
    return Qh(e, "overflowX");
  },
  qu = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = Xh(e, r);
      if (s) {
        var i = Yh(e, r),
          o = i[1],
          a = i[2];
        if (o > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Wx = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Hx = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Xh = function (e, t) {
    return e === "v" ? $x(t) : zx(t);
  },
  Yh = function (e, t) {
    return e === "v" ? Wx(t) : Hx(t);
  },
  qx = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Gx = function (e, t, n, r, s) {
    var i = qx(e, window.getComputedStyle(t).direction),
      o = i * r,
      a = n.target,
      c = t.contains(a),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      var m = Yh(e, a),
        g = m[0],
        h = m[1],
        y = m[2],
        b = h - y - i * g;
      (g || b) && Xh(e, a) && ((d += b), (f += g)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!c && a !== document.body) || (c && (t.contains(a) || t === a)));
    return ((u && Math.abs(d) < 1) || (!u && Math.abs(f) < 1)) && (l = !0), l;
  },
  Wi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Gu = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Zu = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Zx = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Kx = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Qx = 0,
  jr = [];
function Xx(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    s = v.useState(Qx++)[0],
    i = v.useState(Kh)[0],
    o = v.useRef(e);
  v.useEffect(
    function () {
      o.current = e;
    },
    [e]
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var h = vx([e.lockRef.current], (e.shards || []).map(Zu), !0).filter(
            Boolean
          );
          return (
            h.forEach(function (y) {
              return y.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                h.forEach(function (y) {
                  return y.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = v.useCallback(function (h, y) {
      if (
        ("touches" in h && h.touches.length === 2) ||
        (h.type === "wheel" && h.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var b = Wi(h),
        x = n.current,
        w = "deltaX" in h ? h.deltaX : x[0] - b[0],
        C = "deltaY" in h ? h.deltaY : x[1] - b[1],
        S,
        R = h.target,
        A = Math.abs(w) > Math.abs(C) ? "h" : "v";
      if ("touches" in h && A === "h" && R.type === "range") return !1;
      var T = qu(A, R);
      if (!T) return !0;
      if ((T ? (S = A) : ((S = A === "v" ? "h" : "v"), (T = qu(A, R))), !T))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (w || C) && (r.current = S), !S)
      )
        return !0;
      var O = r.current || S;
      return Gx(O, y, h, O === "h" ? w : C);
    }, []),
    c = v.useCallback(function (h) {
      var y = h;
      if (!(!jr.length || jr[jr.length - 1] !== i)) {
        var b = "deltaY" in y ? Gu(y) : Wi(y),
          x = t.current.filter(function (S) {
            return (
              S.name === y.type &&
              (S.target === y.target || y.target === S.shadowParent) &&
              Zx(S.delta, b)
            );
          })[0];
        if (x && x.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!x) {
          var w = (o.current.shards || [])
              .map(Zu)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(y.target);
              }),
            C = w.length > 0 ? a(y, w[0]) : !o.current.noIsolation;
          C && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    l = v.useCallback(function (h, y, b, x) {
      var w = { name: h, delta: y, target: b, should: x, shadowParent: Yx(b) };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== w;
          });
        }, 1);
    }, []),
    u = v.useCallback(function (h) {
      (n.current = Wi(h)), (r.current = void 0);
    }, []),
    d = v.useCallback(function (h) {
      l(h.type, Gu(h), h.target, a(h, e.lockRef.current));
    }, []),
    f = v.useCallback(function (h) {
      l(h.type, Wi(h), h.target, a(h, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      jr.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", c, Or),
      document.addEventListener("touchmove", c, Or),
      document.addEventListener("touchstart", u, Or),
      function () {
        (jr = jr.filter(function (h) {
          return h !== i;
        })),
          document.removeEventListener("wheel", c, Or),
          document.removeEventListener("touchmove", c, Or),
          document.removeEventListener("touchstart", u, Or);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(i, { styles: Kx(s) }) : null,
    m ? v.createElement(Bx, { gapMode: e.gapMode }) : null
  );
}
function Yx(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Jx = Ax(Zh, Xx);
var ol = v.forwardRef(function (e, t) {
  return v.createElement(Bo, en({}, e, { ref: t, sideCar: Jx }));
});
ol.classNames = Bo.classNames;
var ew = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Dr = new WeakMap(),
  Hi = new WeakMap(),
  qi = {},
  Sa = 0,
  Jh = function (e) {
    return e && (e.host || Jh(e.parentNode));
  },
  tw = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Jh(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  nw = function (e, t, n, r) {
    var s = tw(t, Array.isArray(e) ? e : [e]);
    qi[n] || (qi[n] = new WeakMap());
    var i = qi[n],
      o = [],
      a = new Set(),
      c = new Set(s),
      l = function (d) {
        !d || a.has(d) || (a.add(d), l(d.parentNode));
      };
    s.forEach(l);
    var u = function (d) {
      !d ||
        c.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) u(f);
          else
            try {
              var m = f.getAttribute(r),
                g = m !== null && m !== "false",
                h = (Dr.get(f) || 0) + 1,
                y = (i.get(f) || 0) + 1;
              Dr.set(f, h),
                i.set(f, y),
                o.push(f),
                h === 1 && g && Hi.set(f, !0),
                y === 1 && f.setAttribute(n, "true"),
                g || f.setAttribute(r, "true");
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", f, b);
            }
        });
    };
    return (
      u(t),
      a.clear(),
      Sa++,
      function () {
        o.forEach(function (d) {
          var f = Dr.get(d) - 1,
            m = i.get(d) - 1;
          Dr.set(d, f),
            i.set(d, m),
            f || (Hi.has(d) || d.removeAttribute(r), Hi.delete(d)),
            m || d.removeAttribute(n);
        }),
          Sa--,
          Sa ||
            ((Dr = new WeakMap()),
            (Dr = new WeakMap()),
            (Hi = new WeakMap()),
            (qi = {}));
      }
    );
  },
  ep = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      s = ew(e);
    return s
      ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
        nw(r, s, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  al = "Dialog",
  [tp, wN] = Ar(al),
  [rw, Ht] = tp(al),
  np = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !0,
      } = e,
      a = v.useRef(null),
      c = v.useRef(null),
      [l = !1, u] = Vo({ prop: r, defaultProp: s, onChange: i });
    return p.jsx(rw, {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: Bs(),
      titleId: Bs(),
      descriptionId: Bs(),
      open: l,
      onOpenChange: u,
      onOpenToggle: v.useCallback(() => u((d) => !d), [u]),
      modal: o,
      children: n,
    });
  };
np.displayName = al;
var rp = "DialogTrigger",
  sp = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Ht(rp, n),
      i = Ze(t, s.triggerRef);
    return p.jsx(Me.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": ul(s.open),
      ...r,
      ref: i,
      onClick: Te(e.onClick, s.onOpenToggle),
    });
  });
sp.displayName = rp;
var cl = "DialogPortal",
  [sw, ip] = tp(cl, { forceMount: void 0 }),
  op = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
      i = Ht(cl, t);
    return p.jsx(sw, {
      scope: t,
      forceMount: n,
      children: v.Children.map(r, (o) =>
        p.jsx(gs, {
          present: n || i.open,
          children: p.jsx(Wh, { asChild: !0, container: s, children: o }),
        })
      ),
    });
  };
op.displayName = cl;
var uo = "DialogOverlay",
  ap = v.forwardRef((e, t) => {
    const n = ip(uo, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = Ht(uo, e.__scopeDialog);
    return i.modal
      ? p.jsx(gs, {
          present: r || i.open,
          children: p.jsx(iw, { ...s, ref: t }),
        })
      : null;
  });
ap.displayName = uo;
var iw = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Ht(uo, n);
    return p.jsx(ol, {
      as: Vn,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: p.jsx(Me.div, {
        "data-state": ul(s.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  vr = "DialogContent",
  cp = v.forwardRef((e, t) => {
    const n = ip(vr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = Ht(vr, e.__scopeDialog);
    return p.jsx(gs, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(ow, { ...s, ref: t })
        : p.jsx(aw, { ...s, ref: t }),
    });
  });
cp.displayName = vr;
var ow = v.forwardRef((e, t) => {
    const n = Ht(vr, e.__scopeDialog),
      r = v.useRef(null),
      s = Ze(t, n.contentRef, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i) return ep(i);
      }, []),
      p.jsx(lp, {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Te(e.onCloseAutoFocus, (i) => {
          var o;
          i.preventDefault(), (o = n.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: Te(e.onPointerDownOutside, (i) => {
          const o = i.detail.originalEvent,
            a = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: Te(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  aw = v.forwardRef((e, t) => {
    const n = Ht(vr, e.__scopeDialog),
      r = v.useRef(!1),
      s = v.useRef(!1);
    return p.jsx(lp, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var o, a;
        (o = e.onCloseAutoFocus) == null || o.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (i) => {
        var c, l;
        (c = e.onInteractOutside) == null || c.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((l = n.triggerRef.current) == null ? void 0 : l.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  lp = v.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        ...o
      } = e,
      a = Ht(vr, n),
      c = v.useRef(null),
      l = Ze(t, c);
    return (
      Hh(),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(il, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: i,
            children: p.jsx(Uh, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": ul(a.open),
              ...o,
              ref: l,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(cw, { titleId: a.titleId }),
              p.jsx(uw, { contentRef: c, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  ll = "DialogTitle",
  up = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Ht(ll, n);
    return p.jsx(Me.h2, { id: s.titleId, ...r, ref: t });
  });
up.displayName = ll;
var dp = "DialogDescription",
  fp = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Ht(dp, n);
    return p.jsx(Me.p, { id: s.descriptionId, ...r, ref: t });
  });
fp.displayName = dp;
var hp = "DialogClose",
  pp = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Ht(hp, n);
    return p.jsx(Me.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Te(e.onClick, () => s.onOpenChange(!1)),
    });
  });
pp.displayName = hp;
function ul(e) {
  return e ? "open" : "closed";
}
var mp = "DialogTitleWarning",
  [SN, gp] = Zb(mp, { contentName: vr, titleName: ll, docsSlug: "dialog" }),
  cw = ({ titleId: e }) => {
    const t = gp(mp),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      v.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  lw = "DialogDescriptionWarning",
  uw = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      gp(lw).contentName
    }}.`;
    return (
      v.useEffect(() => {
        var i;
        const s =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && s && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  yp = np,
  vp = sp,
  bp = op,
  Uo = ap,
  $o = cp,
  zo = up,
  Wo = fp,
  dl = pp;
const dw = yp,
  fw = vp,
  hw = dl,
  pw = bp,
  xp = v.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Uo, {
      className: Q(
        "fixed inset-0 z-20 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
xp.displayName = Uo.displayName;
const mw = sl(
    "fixed z-30 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-full data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  wp = v.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, s) =>
      p.jsxs(pw, {
        children: [
          p.jsx(xp, {}),
          p.jsxs($o, {
            ref: s,
            className: Q(mw({ side: e }), t),
            ...r,
            children: [
              p.jsxs(dl, {
                className:
                  "absolute right-4 top-4 z-[9999] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  p.jsx(Fh, { className: "size-8" }),
                  p.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              n,
            ],
          }),
        ],
      })
  );
wp.displayName = $o.displayName;
const Sp = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: Q("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
Sp.displayName = "SheetHeader";
const gw = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(zo, {
    ref: n,
    className: Q("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
gw.displayName = zo.displayName;
const yw = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Wo, { ref: n, className: Q("text-sm text-muted-foreground", e), ...t })
);
yw.displayName = Wo.displayName;
const Ku = (e) => {
    let t;
    const n = new Set(),
      r = (l, u) => {
        const d = typeof l == "function" ? l(t) : l;
        if (!Object.is(d, t)) {
          const f = t;
          (t =
            u ?? (typeof d != "object" || d === null)
              ? d
              : Object.assign({}, t, d)),
            n.forEach((m) => m(t, f));
        }
      },
      s = () => t,
      a = {
        setState: r,
        getState: s,
        getInitialState: () => c,
        subscribe: (l) => (n.add(l), () => n.delete(l)),
      },
      c = (t = e(r, s, a));
    return a;
  },
  vw = (e) => (e ? Ku(e) : Ku),
  bw = (e) => e;
function xw(e, t = bw) {
  const n = fe.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return fe.useDebugValue(n), n;
}
const ww = (e) => {
    const t = vw(e),
      n = (r) => xw(t, r);
    return Object.assign(n, t), n;
  },
  _p = (e) => ww;
function Sw(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const o = (c) => (c === null ? null : JSON.parse(c, void 0)),
        a = (i = n.getItem(s)) != null ? i : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (s, i) => n.setItem(s, JSON.stringify(i, void 0)),
    removeItem: (s) => n.removeItem(s),
  };
}
const ec = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return ec(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return ec(r)(n);
        },
      };
    }
  },
  _w = (e, t) => (n, r, s) => {
    let i = {
        storage: Sw(() => localStorage),
        partialize: (h) => h,
        version: 0,
        merge: (h, y) => ({ ...y, ...h }),
        ...t,
      },
      o = !1;
    const a = new Set(),
      c = new Set();
    let l = i.storage;
    if (!l)
      return e(
        (...h) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
          ),
            n(...h);
        },
        r,
        s
      );
    const u = () => {
        const h = i.partialize({ ...r() });
        return l.setItem(i.name, { state: h, version: i.version });
      },
      d = s.setState;
    s.setState = (h, y) => {
      d(h, y), u();
    };
    const f = e(
      (...h) => {
        n(...h), u();
      },
      r,
      s
    );
    s.getInitialState = () => f;
    let m;
    const g = () => {
      var h, y;
      if (!l) return;
      (o = !1),
        a.forEach((x) => {
          var w;
          return x((w = r()) != null ? w : f);
        });
      const b =
        ((y = i.onRehydrateStorage) == null
          ? void 0
          : y.call(i, (h = r()) != null ? h : f)) || void 0;
      return ec(l.getItem.bind(l))(i.name)
        .then((x) => {
          if (x)
            if (typeof x.version == "number" && x.version !== i.version) {
              if (i.migrate) {
                const w = i.migrate(x.state, x.version);
                return w instanceof Promise ? w.then((C) => [!0, C]) : [!0, w];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, x.state];
          return [!1, void 0];
        })
        .then((x) => {
          var w;
          const [C, S] = x;
          if (((m = i.merge(S, (w = r()) != null ? w : f)), n(m, !0), C))
            return u();
        })
        .then(() => {
          b == null || b(m, void 0),
            (m = r()),
            (o = !0),
            c.forEach((x) => x(m));
        })
        .catch((x) => {
          b == null || b(void 0, x);
        });
    };
    return (
      (s.persist = {
        setOptions: (h) => {
          (i = { ...i, ...h }), h.storage && (l = h.storage);
        },
        clearStorage: () => {
          l == null || l.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => g(),
        hasHydrated: () => o,
        onHydrate: (h) => (
          a.add(h),
          () => {
            a.delete(h);
          }
        ),
        onFinishHydration: (h) => (
          c.add(h),
          () => {
            c.delete(h);
          }
        ),
      }),
      i.skipHydration || g(),
      m || f
    );
  },
  Cw = _w;
var vt = ((e) => ((e.EN = "en"), (e.RU = "ru"), e))(vt || {});
const Re = _p()(
  Cw((e) => ({ lang: "en", setLang: (t) => e({ lang: t }) }), {
    name: "lang-storage",
  })
);
var Ew = "DismissableLayer",
  tc = "dismissableLayer.update",
  Tw = "dismissableLayer.pointerDownOutside",
  Aw = "dismissableLayer.focusOutside",
  Qu,
  Cp = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ep = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = e,
      l = v.useContext(Cp),
      [u, d] = v.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = v.useState({}),
      g = Ze(t, (A) => d(A)),
      h = Array.from(l.layers),
      [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = h.indexOf(y),
      x = u ? h.indexOf(u) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      C = x >= b,
      S = kw((A) => {
        const T = A.target,
          O = [...l.branches].some((D) => D.contains(T));
        !C ||
          O ||
          (s == null || s(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f),
      R = Nw((A) => {
        const T = A.target;
        [...l.branches].some((D) => D.contains(T)) ||
          (i == null || i(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f);
    return (
      Vh((A) => {
        x === l.layers.size - 1 &&
          (r == null || r(A),
          !A.defaultPrevented && a && (A.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Qu = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            Xu(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Qu);
            }
          );
      }, [u, f, n, l]),
      v.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            Xu());
        },
        [u, l]
      ),
      v.useEffect(() => {
        const A = () => m({});
        return (
          document.addEventListener(tc, A),
          () => document.removeEventListener(tc, A)
        );
      }, []),
      p.jsx(Me.div, {
        ...c,
        ref: g,
        style: {
          pointerEvents: w ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Te(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: Te(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        ),
      })
    );
  });
Ep.displayName = Ew;
var Rw = "DismissableLayerBranch",
  Pw = v.forwardRef((e, t) => {
    const n = v.useContext(Cp),
      r = v.useRef(null),
      s = Ze(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      p.jsx(Me.div, { ...e, ref: s })
    );
  });
Pw.displayName = Rw;
function kw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ut(e),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              Tp(Tw, n, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = c),
                t.addEventListener("click", s.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Nw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ut(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          Tp(Aw, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Xu() {
  const e = new CustomEvent(tc);
  document.dispatchEvent(e);
}
function Tp(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? Lh(s, i) : s.dispatchEvent(i);
}
const Ow = ["top", "right", "bottom", "left"],
  Bn = Math.min,
  yt = Math.max,
  fo = Math.round,
  Gi = Math.floor,
  rn = (e) => ({ x: e, y: e }),
  jw = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Dw = { start: "end", end: "start" };
function nc(e, t, n) {
  return yt(e, Bn(t, n));
}
function wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sn(e) {
  return e.split("-")[0];
}
function ys(e) {
  return e.split("-")[1];
}
function fl(e) {
  return e === "x" ? "y" : "x";
}
function hl(e) {
  return e === "y" ? "height" : "width";
}
function Un(e) {
  return ["top", "bottom"].includes(Sn(e)) ? "y" : "x";
}
function pl(e) {
  return fl(Un(e));
}
function Mw(e, t, n) {
  n === void 0 && (n = !1);
  const r = ys(e),
    s = pl(e),
    i = hl(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (o = ho(o)), [o, ho(o)];
}
function Fw(e) {
  const t = ho(e);
  return [rc(e), t, rc(t)];
}
function rc(e) {
  return e.replace(/start|end/g, (t) => Dw[t]);
}
function Iw(e, t, n) {
  const r = ["left", "right"],
    s = ["right", "left"],
    i = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? s : r) : t ? r : s;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function Lw(e, t, n, r) {
  const s = ys(e);
  let i = Iw(Sn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(rc)))), i
  );
}
function ho(e) {
  return e.replace(/left|right|bottom|top/g, (t) => jw[t]);
}
function Vw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ap(e) {
  return typeof e != "number"
    ? Vw(e)
    : { top: e, right: e, bottom: e, left: e };
}
function po(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function Yu(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = Un(t),
    o = pl(t),
    a = hl(o),
    c = Sn(t),
    l = i === "y",
    u = r.x + r.width / 2 - s.width / 2,
    d = r.y + r.height / 2 - s.height / 2,
    f = r[a] / 2 - s[a] / 2;
  let m;
  switch (c) {
    case "top":
      m = { x: u, y: r.y - s.height };
      break;
    case "bottom":
      m = { x: u, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: d };
      break;
    case "left":
      m = { x: r.x - s.width, y: d };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (ys(t)) {
    case "start":
      m[o] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      m[o] += f * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const Bw = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let l = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: d } = Yu(l, r, c),
    f = r,
    m = {},
    g = 0;
  for (let h = 0; h < a.length; h++) {
    const { name: y, fn: b } = a[h],
      {
        x,
        y: w,
        data: C,
        reset: S,
      } = await b({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: s,
        middlewareData: m,
        rects: l,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (u = x ?? u),
      (d = w ?? d),
      (m = { ...m, [y]: { ...m[y], ...C } }),
      S &&
        g <= 50 &&
        (g++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (l =
              S.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : S.rects),
          ({ x: u, y: d } = Yu(l, f, c))),
        (h = -1));
  }
  return { x: u, y: d, placement: f, strategy: s, middlewareData: m };
};
async function Xs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: c } = e,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = wn(t, e),
    g = Ap(m),
    y = a[f ? (d === "floating" ? "reference" : "floating") : d],
    b = po(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: l,
        rootBoundary: u,
        strategy: c,
      })
    ),
    x =
      d === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    w = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(w)))
      ? (await (i.getScale == null ? void 0 : i.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = po(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: x,
            offsetParent: w,
            strategy: c,
          })
        : x
    );
  return {
    top: (b.top - S.top + g.top) / C.y,
    bottom: (S.bottom - b.bottom + g.bottom) / C.y,
    left: (b.left - S.left + g.left) / C.x,
    right: (S.right - b.right + g.right) / C.x,
  };
}
const Uw = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = wn(e, t) || {};
      if (l == null) return {};
      const d = Ap(u),
        f = { x: n, y: r },
        m = pl(s),
        g = hl(m),
        h = await o.getDimensions(l),
        y = m === "y",
        b = y ? "top" : "left",
        x = y ? "bottom" : "right",
        w = y ? "clientHeight" : "clientWidth",
        C = i.reference[g] + i.reference[m] - f[m] - i.floating[g],
        S = f[m] - i.reference[m],
        R = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
      let A = R ? R[w] : 0;
      (!A || !(await (o.isElement == null ? void 0 : o.isElement(R)))) &&
        (A = a.floating[w] || i.floating[g]);
      const T = C / 2 - S / 2,
        O = A / 2 - h[g] / 2 - 1,
        D = Bn(d[b], O),
        F = Bn(d[x], O),
        j = D,
        U = A - h[g] - F,
        L = A / 2 - h[g] / 2 + T,
        Y = nc(j, L, U),
        Z =
          !c.arrow &&
          ys(s) != null &&
          L !== Y &&
          i.reference[g] / 2 - (L < j ? D : F) - h[g] / 2 < 0,
        H = Z ? (L < j ? L - j : L - U) : 0;
      return {
        [m]: f[m] + H,
        data: {
          [m]: Y,
          centerOffset: L - Y - H,
          ...(Z && { alignmentOffset: H }),
        },
        reset: Z,
      };
    },
  }),
  $w = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: c,
              elements: l,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: h = !0,
              ...y
            } = wn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const b = Sn(s),
            x = Un(a),
            w = Sn(a) === a,
            C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
            S = f || (w || !h ? [ho(a)] : Fw(a)),
            R = g !== "none";
          !f && R && S.push(...Lw(a, h, g, C));
          const A = [a, ...S],
            T = await Xs(t, y),
            O = [];
          let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((u && O.push(T[b]), d)) {
            const L = Mw(s, o, C);
            O.push(T[L[0]], T[L[1]]);
          }
          if (
            ((D = [...D, { placement: s, overflows: O }]),
            !O.every((L) => L <= 0))
          ) {
            var F, j;
            const L = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
              Y = A[L];
            if (Y)
              return {
                data: { index: L, overflows: D },
                reset: { placement: Y },
              };
            let Z =
              (j = D.filter((H) => H.overflows[0] <= 0).sort(
                (H, q) => H.overflows[1] - q.overflows[1]
              )[0]) == null
                ? void 0
                : j.placement;
            if (!Z)
              switch (m) {
                case "bestFit": {
                  var U;
                  const H =
                    (U = D.filter((q) => {
                      if (R) {
                        const se = Un(q.placement);
                        return se === x || se === "y";
                      }
                      return !0;
                    })
                      .map((q) => [
                        q.placement,
                        q.overflows
                          .filter((se) => se > 0)
                          .reduce((se, he) => se + he, 0),
                      ])
                      .sort((q, se) => q[1] - se[1])[0]) == null
                      ? void 0
                      : U[0];
                  H && (Z = H);
                  break;
                }
                case "initialPlacement":
                  Z = a;
                  break;
              }
            if (s !== Z) return { reset: { placement: Z } };
          }
          return {};
        },
      }
    );
  };
function Ju(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function ed(e) {
  return Ow.some((t) => e[t] >= 0);
}
const zw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...s } = wn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Xs(t, { ...s, elementContext: "reference" }),
              o = Ju(i, n.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: ed(o) },
            };
          }
          case "escaped": {
            const i = await Xs(t, { ...s, altBoundary: !0 }),
              o = Ju(i, n.floating);
            return { data: { escapedOffsets: o, escaped: ed(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Ww(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = Sn(n),
    a = ys(n),
    c = Un(n) === "y",
    l = ["left", "top"].includes(o) ? -1 : 1,
    u = i && c ? -1 : 1,
    d = wn(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: g,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof g == "number" && (m = a === "end" ? g * -1 : g),
    c ? { x: m * u, y: f * l } : { x: f * l, y: m * u }
  );
}
const Hw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            c = await Ww(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + c.x, y: i + c.y, data: { ...c, placement: o } };
        },
      }
    );
  },
  qw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (y) => {
                  let { x: b, y: x } = y;
                  return { x: b, y: x };
                },
              },
              ...c
            } = wn(e, t),
            l = { x: n, y: r },
            u = await Xs(t, c),
            d = Un(Sn(s)),
            f = fl(d);
          let m = l[f],
            g = l[d];
          if (i) {
            const y = f === "y" ? "top" : "left",
              b = f === "y" ? "bottom" : "right",
              x = m + u[y],
              w = m - u[b];
            m = nc(x, m, w);
          }
          if (o) {
            const y = d === "y" ? "top" : "left",
              b = d === "y" ? "bottom" : "right",
              x = g + u[y],
              w = g - u[b];
            g = nc(x, g, w);
          }
          const h = a.fn({ ...t, [f]: m, [d]: g });
          return {
            ...h,
            data: { x: h.x - n, y: h.y - r, enabled: { [f]: i, [d]: o } },
          };
        },
      }
    );
  },
  Gw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: c = !0, crossAxis: l = !0 } = wn(e, t),
            u = { x: n, y: r },
            d = Un(s),
            f = fl(d);
          let m = u[f],
            g = u[d];
          const h = wn(a, t),
            y =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            const w = f === "y" ? "height" : "width",
              C = i.reference[f] - i.floating[w] + y.mainAxis,
              S = i.reference[f] + i.reference[w] - y.mainAxis;
            m < C ? (m = C) : m > S && (m = S);
          }
          if (l) {
            var b, x;
            const w = f === "y" ? "width" : "height",
              C = ["top", "left"].includes(Sn(s)),
              S =
                i.reference[d] -
                i.floating[w] +
                ((C && ((b = o.offset) == null ? void 0 : b[d])) || 0) +
                (C ? 0 : y.crossAxis),
              R =
                i.reference[d] +
                i.reference[w] +
                (C ? 0 : ((x = o.offset) == null ? void 0 : x[d]) || 0) -
                (C ? y.crossAxis : 0);
            g < S ? (g = S) : g > R && (g = R);
          }
          return { [f]: m, [d]: g };
        },
      }
    );
  },
  Zw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: c = () => {}, ...l } = wn(e, t),
            u = await Xs(t, l),
            d = Sn(s),
            f = ys(s),
            m = Un(s) === "y",
            { width: g, height: h } = i.floating;
          let y, b;
          d === "top" || d === "bottom"
            ? ((y = d),
              (b =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((b = d), (y = f === "end" ? "top" : "bottom"));
          const x = h - u.top - u.bottom,
            w = g - u.left - u.right,
            C = Bn(h - u[y], x),
            S = Bn(g - u[b], w),
            R = !t.middlewareData.shift;
          let A = C,
            T = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (A = x),
            R && !f)
          ) {
            const D = yt(u.left, 0),
              F = yt(u.right, 0),
              j = yt(u.top, 0),
              U = yt(u.bottom, 0);
            m
              ? (T = g - 2 * (D !== 0 || F !== 0 ? D + F : yt(u.left, u.right)))
              : (A =
                  h - 2 * (j !== 0 || U !== 0 ? j + U : yt(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: T, availableHeight: A });
          const O = await o.getDimensions(a.floating);
          return g !== O.width || h !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ho() {
  return typeof window < "u";
}
function vs(e) {
  return Rp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function dn(e) {
  var t;
  return (t = (Rp(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Rp(e) {
  return Ho() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function $t(e) {
  return Ho() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function cn(e) {
  return Ho() ? e instanceof HTMLElement || e instanceof bt(e).HTMLElement : !1;
}
function td(e) {
  return !Ho() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
function Ai(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = zt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(s)
  );
}
function Kw(e) {
  return ["table", "td", "th"].includes(vs(e));
}
function qo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ml(e) {
  const t = gl(),
    n = $t(e) ? zt(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Qw(e) {
  let t = $n(e);
  for (; cn(t) && !as(t); ) {
    if (ml(t)) return t;
    if (qo(t)) return null;
    t = $n(t);
  }
  return null;
}
function gl() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function as(e) {
  return ["html", "body", "#document"].includes(vs(e));
}
function zt(e) {
  return bt(e).getComputedStyle(e);
}
function Go(e) {
  return $t(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function $n(e) {
  if (vs(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (td(e) && e.host) || dn(e);
  return td(t) ? t.host : t;
}
function Pp(e) {
  const t = $n(e);
  return as(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : cn(t) && Ai(t)
    ? t
    : Pp(t);
}
function Ys(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Pp(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = bt(s);
  if (i) {
    const a = sc(o);
    return t.concat(
      o,
      o.visualViewport || [],
      Ai(s) ? s : [],
      a && n ? Ys(a) : []
    );
  }
  return t.concat(s, Ys(s, [], n));
}
function sc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kp(e) {
  const t = zt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = cn(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = fo(n) !== i || fo(r) !== o;
  return a && ((n = i), (r = o)), { width: n, height: r, $: a };
}
function yl(e) {
  return $t(e) ? e : e.contextElement;
}
function Hr(e) {
  const t = yl(e);
  if (!cn(t)) return rn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = kp(t);
  let o = (i ? fo(n.width) : n.width) / r,
    a = (i ? fo(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const Xw = rn(0);
function Np(e) {
  const t = bt(e);
  return !gl() || !t.visualViewport
    ? Xw
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Yw(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== bt(e)) ? !1 : t;
}
function br(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    i = yl(e);
  let o = rn(1);
  t && (r ? $t(r) && (o = Hr(r)) : (o = Hr(e)));
  const a = Yw(i, n, r) ? Np(i) : rn(0);
  let c = (s.left + a.x) / o.x,
    l = (s.top + a.y) / o.y,
    u = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const f = bt(i),
      m = r && $t(r) ? bt(r) : r;
    let g = f,
      h = sc(g);
    for (; h && r && m !== g; ) {
      const y = Hr(h),
        b = h.getBoundingClientRect(),
        x = zt(h),
        w = b.left + (h.clientLeft + parseFloat(x.paddingLeft)) * y.x,
        C = b.top + (h.clientTop + parseFloat(x.paddingTop)) * y.y;
      (c *= y.x),
        (l *= y.y),
        (u *= y.x),
        (d *= y.y),
        (c += w),
        (l += C),
        (g = bt(h)),
        (h = sc(g));
    }
  }
  return po({ width: u, height: d, x: c, y: l });
}
function vl(e, t) {
  const n = Go(e).scrollLeft;
  return t ? t.left + n : br(dn(e)).left + n;
}
function Op(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : vl(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function Jw(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = dn(r),
    a = t ? qo(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = rn(1);
  const u = rn(0),
    d = cn(r);
  if (
    (d || (!d && !i)) &&
    ((vs(r) !== "body" || Ai(o)) && (c = Go(r)), cn(r))
  ) {
    const m = br(r);
    (l = Hr(r)), (u.x = m.x + r.clientLeft), (u.y = m.y + r.clientTop);
  }
  const f = o && !d && !i ? Op(o, c, !0) : rn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function e0(e) {
  return Array.from(e.getClientRects());
}
function t0(e) {
  const t = dn(e),
    n = Go(e),
    r = e.ownerDocument.body,
    s = yt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = yt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + vl(e);
  const a = -n.scrollTop;
  return (
    zt(r).direction === "rtl" && (o += yt(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function n0(e, t) {
  const n = bt(e),
    r = dn(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    c = 0;
  if (s) {
    (i = s.width), (o = s.height);
    const l = gl();
    (!l || (l && t === "fixed")) && ((a = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: c };
}
function r0(e, t) {
  const n = br(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = cn(e) ? Hr(e) : rn(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    c = s * i.x,
    l = r * i.y;
  return { width: o, height: a, x: c, y: l };
}
function nd(e, t, n) {
  let r;
  if (t === "viewport") r = n0(e, n);
  else if (t === "document") r = t0(dn(e));
  else if ($t(t)) r = r0(t, n);
  else {
    const s = Np(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return po(r);
}
function jp(e, t) {
  const n = $n(e);
  return n === t || !$t(n) || as(n)
    ? !1
    : zt(n).position === "fixed" || jp(n, t);
}
function s0(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ys(e, [], !1).filter((a) => $t(a) && vs(a) !== "body"),
    s = null;
  const i = zt(e).position === "fixed";
  let o = i ? $n(e) : e;
  for (; $t(o) && !as(o); ) {
    const a = zt(o),
      c = ml(o);
    !c && a.position === "fixed" && (s = null),
      (
        i
          ? !c && !s
          : (!c &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Ai(o) && !c && jp(e, o))
      )
        ? (r = r.filter((u) => u !== o))
        : (s = a),
      (o = $n(o));
  }
  return t.set(e, r), r;
}
function i0(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? qo(t)
          ? []
          : s0(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    c = o.reduce((l, u) => {
      const d = nd(t, u, s);
      return (
        (l.top = yt(d.top, l.top)),
        (l.right = Bn(d.right, l.right)),
        (l.bottom = Bn(d.bottom, l.bottom)),
        (l.left = yt(d.left, l.left)),
        l
      );
    }, nd(t, a, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function o0(e) {
  const { width: t, height: n } = kp(e);
  return { width: t, height: n };
}
function a0(e, t, n) {
  const r = cn(t),
    s = dn(t),
    i = n === "fixed",
    o = br(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = rn(0);
  if (r || (!r && !i))
    if (((vs(t) !== "body" || Ai(s)) && (a = Go(t)), r)) {
      const f = br(t, !0, i, t);
      (c.x = f.x + t.clientLeft), (c.y = f.y + t.clientTop);
    } else s && (c.x = vl(s));
  const l = s && !r && !i ? Op(s, a) : rn(0),
    u = o.left + a.scrollLeft - c.x - l.x,
    d = o.top + a.scrollTop - c.y - l.y;
  return { x: u, y: d, width: o.width, height: o.height };
}
function _a(e) {
  return zt(e).position === "static";
}
function rd(e, t) {
  if (!cn(e) || zt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return dn(e) === n && (n = n.ownerDocument.body), n;
}
function Dp(e, t) {
  const n = bt(e);
  if (qo(e)) return n;
  if (!cn(e)) {
    let s = $n(e);
    for (; s && !as(s); ) {
      if ($t(s) && !_a(s)) return s;
      s = $n(s);
    }
    return n;
  }
  let r = rd(e, t);
  for (; r && Kw(r) && _a(r); ) r = rd(r, t);
  return r && as(r) && _a(r) && !ml(r) ? n : r || Qw(e) || n;
}
const c0 = async function (e) {
  const t = this.getOffsetParent || Dp,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: a0(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function l0(e) {
  return zt(e).direction === "rtl";
}
const u0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jw,
  getDocumentElement: dn,
  getClippingRect: i0,
  getOffsetParent: Dp,
  getElementRects: c0,
  getClientRects: e0,
  getDimensions: o0,
  getScale: Hr,
  isElement: $t,
  isRTL: l0,
};
function Mp(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function d0(e, t) {
  let n = null,
    r;
  const s = dn(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function o(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: m } = l;
    if ((a || t(), !f || !m)) return;
    const g = Gi(d),
      h = Gi(s.clientWidth - (u + f)),
      y = Gi(s.clientHeight - (d + m)),
      b = Gi(u),
      w = {
        rootMargin: -g + "px " + -h + "px " + -y + "px " + -b + "px",
        threshold: yt(0, Bn(1, c)) || 1,
      };
    let C = !0;
    function S(R) {
      const A = R[0].intersectionRatio;
      if (A !== c) {
        if (!C) return o();
        A
          ? o(!1, A)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      A === 1 && !Mp(l, e.getBoundingClientRect()) && o(), (C = !1);
    }
    try {
      n = new IntersectionObserver(S, { ...w, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function f0(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    l = yl(e),
    u = s || i ? [...(l ? Ys(l) : []), ...Ys(t)] : [];
  u.forEach((b) => {
    s && b.addEventListener("scroll", n, { passive: !0 }),
      i && b.addEventListener("resize", n);
  });
  const d = l && a ? d0(l, n) : null;
  let f = -1,
    m = null;
  o &&
    ((m = new ResizeObserver((b) => {
      let [x] = b;
      x &&
        x.target === l &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var w;
          (w = m) == null || w.observe(t);
        }))),
        n();
    })),
    l && !c && m.observe(l),
    m.observe(t));
  let g,
    h = c ? br(e) : null;
  c && y();
  function y() {
    const b = br(e);
    h && !Mp(h, b) && n(), (h = b), (g = requestAnimationFrame(y));
  }
  return (
    n(),
    () => {
      var b;
      u.forEach((x) => {
        s && x.removeEventListener("scroll", n),
          i && x.removeEventListener("resize", n);
      }),
        d == null || d(),
        (b = m) == null || b.disconnect(),
        (m = null),
        c && cancelAnimationFrame(g);
    }
  );
}
const h0 = Hw,
  p0 = qw,
  m0 = $w,
  g0 = Zw,
  y0 = zw,
  sd = Uw,
  v0 = Gw,
  b0 = (e, t, n) => {
    const r = new Map(),
      s = { platform: u0, ...n },
      i = { ...s.platform, _c: r };
    return Bw(e, t, { ...s, platform: i });
  };
var no = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function mo(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!mo(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !mo(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fp(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function id(e, t) {
  const n = Fp(e);
  return Math.round(t * n) / n;
}
function Ca(e) {
  const t = v.useRef(e);
  return (
    no(() => {
      t.current = e;
    }),
    t
  );
}
function x0(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, m] = v.useState(r);
  mo(f, r) || m(r);
  const [g, h] = v.useState(null),
    [y, b] = v.useState(null),
    x = v.useCallback((q) => {
      q !== R.current && ((R.current = q), h(q));
    }, []),
    w = v.useCallback((q) => {
      q !== A.current && ((A.current = q), b(q));
    }, []),
    C = i || g,
    S = o || y,
    R = v.useRef(null),
    A = v.useRef(null),
    T = v.useRef(u),
    O = c != null,
    D = Ca(c),
    F = Ca(s),
    j = Ca(l),
    U = v.useCallback(() => {
      if (!R.current || !A.current) return;
      const q = { placement: t, strategy: n, middleware: f };
      F.current && (q.platform = F.current),
        b0(R.current, A.current, q).then((se) => {
          const he = { ...se, isPositioned: j.current !== !1 };
          L.current &&
            !mo(T.current, he) &&
            ((T.current = he),
            Eh.flushSync(() => {
              d(he);
            }));
        });
    }, [f, t, n, F, j]);
  no(() => {
    l === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), d((q) => ({ ...q, isPositioned: !1 })));
  }, [l]);
  const L = v.useRef(!1);
  no(
    () => (
      (L.current = !0),
      () => {
        L.current = !1;
      }
    ),
    []
  ),
    no(() => {
      if ((C && (R.current = C), S && (A.current = S), C && S)) {
        if (D.current) return D.current(C, S, U);
        U();
      }
    }, [C, S, U, D, O]);
  const Y = v.useMemo(
      () => ({ reference: R, floating: A, setReference: x, setFloating: w }),
      [x, w]
    ),
    Z = v.useMemo(() => ({ reference: C, floating: S }), [C, S]),
    H = v.useMemo(() => {
      const q = { position: n, left: 0, top: 0 };
      if (!Z.floating) return q;
      const se = id(Z.floating, u.x),
        he = id(Z.floating, u.y);
      return a
        ? {
            ...q,
            transform: "translate(" + se + "px, " + he + "px)",
            ...(Fp(Z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: se, top: he };
    }, [n, a, Z.floating, u.x, u.y]);
  return v.useMemo(
    () => ({ ...u, update: U, refs: Y, elements: Z, floatingStyles: H }),
    [u, U, Y, Z, H]
  );
}
const w0 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? sd({ element: r.current, padding: s }).fn(n)
            : {}
          : r
          ? sd({ element: r, padding: s }).fn(n)
          : {};
      },
    };
  },
  S0 = (e, t) => ({ ...h0(e), options: [e, t] }),
  _0 = (e, t) => ({ ...p0(e), options: [e, t] }),
  C0 = (e, t) => ({ ...v0(e), options: [e, t] }),
  E0 = (e, t) => ({ ...m0(e), options: [e, t] }),
  T0 = (e, t) => ({ ...g0(e), options: [e, t] }),
  A0 = (e, t) => ({ ...y0(e), options: [e, t] }),
  R0 = (e, t) => ({ ...w0(e), options: [e, t] });
var P0 = "Arrow",
  Ip = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return p.jsx(Me.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ip.displayName = P0;
var k0 = Ip;
function Lp(e) {
  const [t, n] = v.useState(void 0);
  return (
    yr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const c = i.borderBoxSize,
              l = Array.isArray(c) ? c[0] : c;
            (o = l.inlineSize), (a = l.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          n({ width: o, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var bl = "Popper",
  [Vp, Bp] = Ar(bl),
  [N0, Up] = Vp(bl),
  $p = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, s] = v.useState(null);
    return p.jsx(N0, { scope: t, anchor: r, onAnchorChange: s, children: n });
  };
$p.displayName = bl;
var zp = "PopperAnchor",
  Wp = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = Up(zp, n),
      o = v.useRef(null),
      a = Ze(t, o);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : p.jsx(Me.div, { ...s, ref: a })
    );
  });
Wp.displayName = zp;
var xl = "PopperContent",
  [O0, j0] = Vp(xl),
  Hp = v.forwardRef((e, t) => {
    var de, be, Fe, ze, Se, K;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: c = !0,
        collisionBoundary: l = [],
        collisionPadding: u = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: g,
        ...h
      } = e,
      y = Up(xl, n),
      [b, x] = v.useState(null),
      w = Ze(t, (pe) => x(pe)),
      [C, S] = v.useState(null),
      R = Lp(C),
      A = (R == null ? void 0 : R.width) ?? 0,
      T = (R == null ? void 0 : R.height) ?? 0,
      O = r + (i !== "center" ? "-" + i : ""),
      D =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      F = Array.isArray(l) ? l : [l],
      j = F.length > 0,
      U = { padding: D, boundary: F.filter(M0), altBoundary: j },
      {
        refs: L,
        floatingStyles: Y,
        placement: Z,
        isPositioned: H,
        middlewareData: q,
      } = x0({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...pe) =>
          f0(...pe, { animationFrame: m === "always" }),
        elements: { reference: y.anchor },
        middleware: [
          S0({ mainAxis: s + T, alignmentAxis: o }),
          c &&
            _0({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? C0() : void 0,
              ...U,
            }),
          c && E0({ ...U }),
          T0({
            ...U,
            apply: ({
              elements: pe,
              rects: _e,
              availableWidth: Ge,
              availableHeight: gt,
            }) => {
              const { width: Ct, height: _ } = _e.reference,
                P = pe.floating.style;
              P.setProperty("--radix-popper-available-width", `${Ge}px`),
                P.setProperty("--radix-popper-available-height", `${gt}px`),
                P.setProperty("--radix-popper-anchor-width", `${Ct}px`),
                P.setProperty("--radix-popper-anchor-height", `${_}px`);
            },
          }),
          C && R0({ element: C, padding: a }),
          F0({ arrowWidth: A, arrowHeight: T }),
          f && A0({ strategy: "referenceHidden", ...U }),
        ],
      }),
      [se, he] = Zp(Z),
      ve = Ut(g);
    yr(() => {
      H && (ve == null || ve());
    }, [H, ve]);
    const He = (de = q.arrow) == null ? void 0 : de.x,
      Ye = (be = q.arrow) == null ? void 0 : be.y,
      Je = ((Fe = q.arrow) == null ? void 0 : Fe.centerOffset) !== 0,
      [Nt, it] = v.useState();
    return (
      yr(() => {
        b && it(window.getComputedStyle(b).zIndex);
      }, [b]),
      p.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: H ? Y.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Nt,
          "--radix-popper-transform-origin": [
            (ze = q.transformOrigin) == null ? void 0 : ze.x,
            (Se = q.transformOrigin) == null ? void 0 : Se.y,
          ].join(" "),
          ...(((K = q.hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(O0, {
          scope: n,
          placedSide: se,
          onArrowChange: S,
          arrowX: He,
          arrowY: Ye,
          shouldHideArrow: Je,
          children: p.jsx(Me.div, {
            "data-side": se,
            "data-align": he,
            ...h,
            ref: w,
            style: { ...h.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Hp.displayName = xl;
var qp = "PopperArrow",
  D0 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Gp = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = j0(qp, r),
      o = D0[i.placedSide];
    return p.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(k0, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
Gp.displayName = qp;
function M0(e) {
  return e !== null;
}
var F0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, b, x;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((y = s.arrow) == null ? void 0 : y.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      c = o ? 0 : e.arrowHeight,
      [l, u] = Zp(n),
      d = { start: "0%", center: "50%", end: "100%" }[u],
      f = (((b = s.arrow) == null ? void 0 : b.x) ?? 0) + a / 2,
      m = (((x = s.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let g = "",
      h = "";
    return (
      l === "bottom"
        ? ((g = o ? d : `${f}px`), (h = `${-c}px`))
        : l === "top"
        ? ((g = o ? d : `${f}px`), (h = `${r.floating.height + c}px`))
        : l === "right"
        ? ((g = `${-c}px`), (h = o ? d : `${m}px`))
        : l === "left" &&
          ((g = `${r.floating.width + c}px`), (h = o ? d : `${m}px`)),
      { data: { x: g, y: h } }
    );
  },
});
function Zp(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var I0 = $p,
  Kp = Wp,
  L0 = Hp,
  V0 = Gp,
  wl = "Popover",
  [Qp, _N] = Ar(wl, [Bp]),
  Ri = Bp(),
  [B0, Rr] = Qp(wl),
  Xp = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !1,
      } = e,
      a = Ri(t),
      c = v.useRef(null),
      [l, u] = v.useState(!1),
      [d = !1, f] = Vo({ prop: r, defaultProp: s, onChange: i });
    return p.jsx(I0, {
      ...a,
      children: p.jsx(B0, {
        scope: t,
        contentId: Bs(),
        triggerRef: c,
        open: d,
        onOpenChange: f,
        onOpenToggle: v.useCallback(() => f((m) => !m), [f]),
        hasCustomAnchor: l,
        onCustomAnchorAdd: v.useCallback(() => u(!0), []),
        onCustomAnchorRemove: v.useCallback(() => u(!1), []),
        modal: o,
        children: n,
      }),
    });
  };
Xp.displayName = wl;
var Yp = "PopoverAnchor",
  U0 = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Rr(Yp, n),
      i = Ri(n),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: a } = s;
    return (
      v.useEffect(() => (o(), () => a()), [o, a]),
      p.jsx(Kp, { ...i, ...r, ref: t })
    );
  });
U0.displayName = Yp;
var Jp = "PopoverTrigger",
  em = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Rr(Jp, n),
      i = Ri(n),
      o = Ze(t, s.triggerRef),
      a = p.jsx(Me.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": sm(s.open),
        ...r,
        ref: o,
        onClick: Te(e.onClick, s.onOpenToggle),
      });
    return s.hasCustomAnchor
      ? a
      : p.jsx(Kp, { asChild: !0, ...i, children: a });
  });
em.displayName = Jp;
var $0 = "PopoverPortal",
  [CN, z0] = Qp($0, { forceMount: void 0 }),
  cs = "PopoverContent",
  tm = v.forwardRef((e, t) => {
    const n = z0(cs, e.__scopePopover),
      { forceMount: r = n.forceMount, ...s } = e,
      i = Rr(cs, e.__scopePopover);
    return p.jsx(gs, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(W0, { ...s, ref: t })
        : p.jsx(H0, { ...s, ref: t }),
    });
  });
tm.displayName = cs;
var W0 = v.forwardRef((e, t) => {
    const n = Rr(cs, e.__scopePopover),
      r = v.useRef(null),
      s = Ze(t, r),
      i = v.useRef(!1);
    return (
      v.useEffect(() => {
        const o = r.current;
        if (o) return ep(o);
      }, []),
      p.jsx(ol, {
        as: Vn,
        allowPinchZoom: !0,
        children: p.jsx(nm, {
          ...e,
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Te(e.onCloseAutoFocus, (o) => {
            var a;
            o.preventDefault(),
              i.current || (a = n.triggerRef.current) == null || a.focus();
          }),
          onPointerDownOutside: Te(
            e.onPointerDownOutside,
            (o) => {
              const a = o.detail.originalEvent,
                c = a.button === 0 && a.ctrlKey === !0,
                l = a.button === 2 || c;
              i.current = l;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: Te(e.onFocusOutside, (o) => o.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  H0 = v.forwardRef((e, t) => {
    const n = Rr(cs, e.__scopePopover),
      r = v.useRef(!1),
      s = v.useRef(!1);
    return p.jsx(nm, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var o, a;
        (o = e.onCloseAutoFocus) == null || o.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (i) => {
        var c, l;
        (c = e.onInteractOutside) == null || c.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((l = n.triggerRef.current) == null ? void 0 : l.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  nm = v.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: o,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        onFocusOutside: l,
        onInteractOutside: u,
        ...d
      } = e,
      f = Rr(cs, n),
      m = Ri(n);
    return (
      Hh(),
      p.jsx(il, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: p.jsx(Ep, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: u,
          onEscapeKeyDown: a,
          onPointerDownOutside: c,
          onFocusOutside: l,
          onDismiss: () => f.onOpenChange(!1),
          children: p.jsx(L0, {
            "data-state": sm(f.open),
            role: "dialog",
            id: f.contentId,
            ...m,
            ...d,
            ref: t,
            style: {
              ...d.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  rm = "PopoverClose",
  q0 = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Rr(rm, n);
    return p.jsx(Me.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Te(e.onClick, () => s.onOpenChange(!1)),
    });
  });
q0.displayName = rm;
var G0 = "PopoverArrow",
  Z0 = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Ri(n);
    return p.jsx(V0, { ...s, ...r, ref: t });
  });
Z0.displayName = G0;
function sm(e) {
  return e ? "open" : "closed";
}
var K0 = Xp,
  Q0 = em,
  im = tm;
const om = K0,
  am = Q0,
  Sl = v.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, s) =>
      p.jsx(im, {
        ref: s,
        align: t,
        sideOffset: n,
        className: Q(
          "z-50 w-fit bg-white text-on_surface rounded-[2px] p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e
        ),
        ...r,
      })
  );
Sl.displayName = im.displayName;
const ic = _p()((e) => ({
    sheet: !1,
    popover: !1,
    modal: !1,
    setModal: (t) => e({ modal: t }),
    setSheet: (t) => e({ sheet: t }),
    setPopover: (t) => e({ popover: t }),
  })),
  oc = ({
    title: e,
    dropDownContent: t,
    className: n,
    color: r,
    triggerClassName: s,
  }) => {
    const [i, o] = v.useState(!1),
      a = ic((c) => c.setSheet);
    return p.jsxs(om, {
      open: i,
      onOpenChange: () => o(!i),
      children: [
        p.jsxs(am, {
          className: Q("flex items-center gap-2", s),
          children: [
            e,
            p.jsx(Vk, {
              color: r,
              className: Q("transition-all duration-200", i && "rotate-180"),
            }),
          ],
        }),
        p.jsx(Sl, {
          className: Q("w-fit px-0 py-2 cursor-pointer bg-slate-100", n),
          children:
            t &&
            t.map((c) =>
              c.link
                ? p.jsxs(
                    De,
                    {
                      onClick: () => {
                        o(!1), a(!1);
                      },
                      className:
                        "h-14 px-3 text-on_surface flex gap-3 items-center hover:bg-slate-300/50 transition-all",
                      target: c.blank ? "_blank" : "",
                      to: c.link,
                      children: [
                        c.text,
                        c.blank && p.jsx("img", { src: "/pdf.svg" }),
                      ],
                    },
                    c.text
                  )
                : c.modal
                ? p.jsx(Hk, { title: c.text }, c.text)
                : p.jsx(
                    "div",
                    {
                      className:
                        "h-14 px-3 text-on_surface flex items-center hover:bg-slate-300/50 transition-all",
                      onClick: () => {
                        o(!1);
                      },
                      children: c.text,
                    },
                    c.text
                  )
            ),
        }),
      ],
    });
  },
  X0 = (e, t, n, r) => {
    var i, o, a, c;
    const s = [n, { code: t, ...(r || {}) }];
    if (
      (o = (i = e == null ? void 0 : e.services) == null ? void 0 : i.logger) !=
        null &&
      o.forward
    )
      return e.services.logger.forward(s, "warn", "react-i18next::", !0);
    fr(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (c = (a = e == null ? void 0 : e.services) == null ? void 0 : a.logger) !=
        null && c.warn
        ? e.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s);
  },
  od = {},
  ac = (e, t, n, r) => {
    (fr(n) && od[n]) || (fr(n) && (od[n] = new Date()), X0(e, t, n, r));
  },
  cm = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  cc = (e, t, n) => {
    e.loadNamespaces(t, cm(e, n));
  },
  ad = (e, t, n, r) => {
    if (
      (fr(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return cc(e, n, r);
    n.forEach((s) => {
      e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
    }),
      e.loadLanguages(t, cm(e, r));
  },
  Y0 = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (ac(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, s) => {
            var i;
            if (
              ((i = n.bindI18n) == null
                ? void 0
                : i.indexOf("languageChanging")) > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !s(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  fr = (e) => typeof e == "string",
  J0 = (e) => typeof e == "object" && e !== null,
  eS =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  tS = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  nS = (e) => tS[e],
  rS = (e) => e.replace(eS, nS);
let lc = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: rS,
};
const sS = (e = {}) => {
    lc = { ...lc, ...e };
  },
  iS = () => lc;
let lm;
const oS = (e) => {
    lm = e;
  },
  aS = () => lm,
  EN = {
    type: "3rdParty",
    init(e) {
      sS(e.options.react), oS(e);
    },
  },
  cS = v.createContext();
class lS {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const uS = (e, t) => {
    const n = v.useRef();
    return (
      v.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  um = (e, t, n, r) => e.getFixedT(t, n, r),
  dS = (e, t, n, r) => v.useCallback(um(e, t, n, r), [e, t, n, r]),
  Zo = (e, t = {}) => {
    var C, S, R, A;
    const { i18n: n } = t,
      { i18n: r, defaultNS: s } = v.useContext(cS) || {},
      i = n || r || aS();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new lS()), !i)) {
      ac(
        i,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next"
      );
      const T = (D, F) =>
          fr(F)
            ? F
            : J0(F) && fr(F.defaultValue)
            ? F.defaultValue
            : Array.isArray(D)
            ? D[D.length - 1]
            : D,
        O = [T, {}, !1];
      return (O.t = T), (O.i18n = {}), (O.ready = !1), O;
    }
    (C = i.options.react) != null &&
      C.wait &&
      ac(
        i,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const o = { ...iS(), ...i.options.react, ...t },
      { useSuspense: a, keyPrefix: c } = o;
    let l = e || s || ((S = i.options) == null ? void 0 : S.defaultNS);
    (l = fr(l) ? [l] : l || ["translation"]),
      (A = (R = i.reportNamespaces).addUsedNamespaces) == null || A.call(R, l);
    const u =
        (i.isInitialized || i.initializedStoreOnce) &&
        l.every((T) => Y0(T, i, o)),
      d = dS(i, t.lng || null, o.nsMode === "fallback" ? l : l[0], c),
      f = () => d,
      m = () => um(i, t.lng || null, o.nsMode === "fallback" ? l : l[0], c),
      [g, h] = v.useState(f);
    let y = l.join();
    t.lng && (y = `${t.lng}${y}`);
    const b = uS(y),
      x = v.useRef(!0);
    v.useEffect(() => {
      const { bindI18n: T, bindI18nStore: O } = o;
      (x.current = !0),
        !u &&
          !a &&
          (t.lng
            ? ad(i, t.lng, l, () => {
                x.current && h(m);
              })
            : cc(i, l, () => {
                x.current && h(m);
              })),
        u && b && b !== y && x.current && h(m);
      const D = () => {
        x.current && h(m);
      };
      return (
        T && (i == null || i.on(T, D)),
        O && (i == null || i.store.on(O, D)),
        () => {
          (x.current = !1),
            i && (T == null || T.split(" ").forEach((F) => i.off(F, D))),
            O && i && O.split(" ").forEach((F) => i.store.off(F, D));
        }
      );
    }, [i, y]),
      v.useEffect(() => {
        x.current && u && h(f);
      }, [i, c, u]);
    const w = [g, i, u];
    if (((w.t = g), (w.i18n = i), (w.ready = u), u || (!u && !a))) return w;
    throw new Promise((T) => {
      t.lng ? ad(i, t.lng, l, () => T()) : cc(i, l, () => T());
    });
  },
  fS = () => {
    const { t: e } = Zo("nav"),
      t = Re((i) => i.lang),
      n = e("navigation", { returnObjects: !0 }),
      r = ic((i) => i.sheet),
      s = ic((i) => i.setSheet);
    return p.jsxs(dw, {
      onOpenChange: () => s(!r),
      open: r,
      children: [
        p.jsx(fw, {
          children: p.jsxs("div", {
            className:
              "flex flex-col gap-1 lg:hidden items-center justify-center size-10",
            children: [
              p.jsx("div", {
                className:
                  "w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]",
              }),
              p.jsx("div", {
                className:
                  "w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]",
              }),
              p.jsx("div", {
                className:
                  "w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]",
              }),
            ],
          }),
        }),
        p.jsxs(wp, {
          className: "overflow-y-auto ",
          children: [
            p.jsx(hw, {}),
            p.jsxs(Sp, {
              className: "mt-16 flex flex-col gap-2",
              children: [
                p.jsx(De, {
                  to: "https://qacis.turkmenexpo.com/",
                  target: "_blank",
                  children: p.jsxs(Xe, {
                    variant: "outline",
                    className: "w-full",
                    size: "sm",
                    children: ["QACIS 2025", p.jsx(rl, {})],
                  }),
                }),
                p.jsx(De, {
                  to:
                    t === "ru"
                      ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                      : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg",
                  children: p.jsx(Xe, {
                    variant: "secondary",
                    size: "sm",
                    className:
                      "bg-[#FFAE2A] w-full text-on_teritary hover:bg-[#FFAE2A]/90",
                    children:
                      t === "ru" ? "Официальная поддержка" : "Official Support",
                  }),
                }),
                p.jsx(De, {
                  to: "/B2B-B2G",
                  onClick: () => s(!1),
                  children: p.jsx(Xe, {
                    className: "text-base w-full",
                    variant: "teritary",
                    size: "sm",
                    children:
                      t === "ru" ? "B2B | B2G встречи" : "B2B | B2G meetings",
                  }),
                }),
              ],
            }),
            p.jsx("hr", { className: "border-slate-500/20 my-8" }),
            p.jsx("div", {
              className: "flex flex-col gap-6 relative",
              children: n.map((i) =>
                i.drop
                  ? p.jsx(
                      oc,
                      {
                        className: "w-full",
                        triggerClassName: "justify-between",
                        color: "black",
                        dropDownContent: i.dropDownContent,
                        title: i.title,
                      },
                      i.title
                    )
                  : p.jsx(
                      De,
                      {
                        target: i.blank ?? "",
                        className: "py-2",
                        to: i.link || "",
                        onClick: () => s(!1),
                        children: i.title,
                      },
                      i.title
                    )
              ),
            }),
          ],
        }),
      ],
    });
  },
  TN = () => {
    const e = Re((r) => r.lang),
      { t } = Zo("nav"),
      n = t("navigation", { returnObjects: !0 });
    return p.jsxs("header", {
      children: [
        p.jsx("div", {
          className:
            "h-12 hidden lg:flex bg-primary text-on_primary items-center overflow-hidden",
          children: p.jsxs(ut, {
            className: "flex items-center justify-between",
            children: [
              p.jsxs("div", {
                className: "gap-8 flex items-center justify-between",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      p.jsx(Ib, {}),
                      p.jsx("h4", {
                        className: "text-sm",
                        children:
                          e === "ru"
                            ? "Ашхабад, Туркменистан"
                            : "Ashgabat, Turkmenistan",
                      }),
                    ],
                  }),
                  p.jsx("nav", {
                    className: "flex items-center gap-6",
                    children: n.slice(0, 3).map((r) =>
                      r.drop
                        ? p.jsx(
                            oc,
                            {
                              color: "white",
                              dropDownContent: r.dropDownContent,
                              title: r.title,
                            },
                            r.title
                          )
                        : p.jsx(
                            De,
                            {
                              target: r.blank ?? "",
                              className: "py-2",
                              to: r.link || "",
                              children: r.title,
                            },
                            r.title
                          )
                    ),
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex items-center gap-6",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      p.jsx(Vb, { size: 16, strokeWidth: "3px" }),
                      p.jsx("h4", {
                        className: "text-sm",
                        children: "+99371871814",
                      }),
                    ],
                  }),
                  p.jsx(Dd, {}),
                ],
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className:
            "bg-white py-2 flex items-center justify-between h-20 overflow-hidden",
          children: p.jsxs(ut, {
            className: "flex items-center justify-between ",
            children: [
              p.jsxs("div", {
                className: "flex items-center gap-8",
                children: [
                  p.jsx(De, {
                    to: "/",
                    children: p.jsx(jh, { className: "size-36" }),
                  }),
                  p.jsx("nav", {
                    className: "lg:flex hidden items-center gap-6",
                    children: n.slice(3, 6).map((r) =>
                      r.drop
                        ? p.jsx(
                            oc,
                            {
                              triggerClassName: "justify-between",
                              dropDownContent: r.dropDownContent,
                              title: r.title,
                              color: "black",
                            },
                            r.title
                          )
                        : p.jsx(
                            De,
                            {
                              className: "py-2",
                              to: r.link || "",
                              children: r.title,
                            },
                            r.title
                          )
                    ),
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  p.jsx(Dd, { chevronColor: "black", className: "lg:hidden" }),
                  p.jsx(fS, {}),
                ],
              }),
              p.jsxs("div", {
                className: "lg:flex hidden items-center gap-2",
                children: [
                  p.jsx(De, {
                    to: "https://qacis.turkmenexpo.com/",
                    target: "_blank",
                    children: p.jsxs(Xe, {
                      variant: "outline",
                      size: "sm",
                      children: ["QACIS 2025", p.jsx(rl, {})],
                    }),
                  }),
                  p.jsx(De, {
                    target: "_blank",
                    to:
                      e === "ru"
                        ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                        : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg",
                    children: p.jsx(Xe, {
                      variant: "secondary",
                      size: "sm",
                      className:
                        "bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90",
                      children:
                        e === "ru"
                          ? "Официальная поддержка"
                          : "Official Support",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
var Pi = (e) => e.type === "checkbox",
  tr = (e) => e instanceof Date,
  ct = (e) => e == null;
const dm = (e) => typeof e == "object";
var Ue = (e) => !ct(e) && !Array.isArray(e) && dm(e) && !tr(e),
  fm = (e) =>
    Ue(e) && e.target ? (Pi(e.target) ? e.target.checked : e.target.value) : e,
  hS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  hm = (e, t) => e.has(hS(t)),
  pS = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Ue(t) && t.hasOwnProperty("isPrototypeOf");
  },
  _l =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function dt(e) {
  let t;
  const n = Array.isArray(e),
    r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(_l && (e instanceof Blob || r)) && (n || Ue(e)))
    if (((t = n ? [] : {}), !n && !pS(e))) t = e;
    else for (const s in e) e.hasOwnProperty(s) && (t[s] = dt(e[s]));
  else return e;
  return t;
}
var Ko = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Ve = (e) => e === void 0,
  B = (e, t, n) => {
    if (!t || !Ue(e)) return n;
    const r = Ko(t.split(/[,[\].]+?/)).reduce((s, i) => (ct(s) ? s : s[i]), e);
    return Ve(r) || r === e ? (Ve(e[t]) ? n : e[t]) : r;
  },
  Pt = (e) => typeof e == "boolean",
  Cl = (e) => /^\w*$/.test(e),
  pm = (e) => Ko(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  xe = (e, t, n) => {
    let r = -1;
    const s = Cl(t) ? [t] : pm(t),
      i = s.length,
      o = i - 1;
    for (; ++r < i; ) {
      const a = s[r];
      let c = n;
      if (r !== o) {
        const l = e[a];
        c = Ue(l) || Array.isArray(l) ? l : isNaN(+s[r + 1]) ? {} : [];
      }
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      (e[a] = c), (e = e[a]);
    }
    return e;
  };
const go = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  It = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  hn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  mm = fe.createContext(null),
  Pr = () => fe.useContext(mm),
  mS = (e) => {
    const { children: t, ...n } = e;
    return fe.createElement(mm.Provider, { value: n }, t);
  };
var gm = (e, t, n, r = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(s, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== It.all &&
              (t._proxyFormState[o] = !r || It.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return s;
  },
  ht = (e) => Ue(e) && !Object.keys(e).length,
  ym = (e, t, n, r) => {
    n(e);
    const { name: s, ...i } = e;
    return (
      ht(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!r || It.all))
    );
  },
  Us = (e) => (Array.isArray(e) ? e : [e]),
  vm = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    Us(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function El(e) {
  const t = fe.useRef(e);
  (t.current = e),
    fe.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function gS(e) {
  const t = Pr(),
    { control: n = t.control, disabled: r, name: s, exact: i } = e,
    [o, a] = fe.useState(n._formState),
    c = fe.useRef(!0),
    l = fe.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    u = fe.useRef(s);
  return (
    (u.current = s),
    El({
      disabled: r,
      next: (d) =>
        c.current &&
        vm(u.current, d.name, i) &&
        ym(d, l.current, n._updateFormState) &&
        a({ ...n._formState, ...d }),
      subject: n._subjects.state,
    }),
    fe.useEffect(
      () => (
        (c.current = !0),
        l.current.isValid && n._updateValid(!0),
        () => {
          c.current = !1;
        }
      ),
      [n]
    ),
    fe.useMemo(() => gm(o, n, l.current, !1), [o, n])
  );
}
var nn = (e) => typeof e == "string",
  bm = (e, t, n, r, s) =>
    nn(e)
      ? (r && t.watch.add(e), B(n, e, s))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), B(n, i)))
      : (r && (t.watchAll = !0), n);
function yS(e) {
  const t = Pr(),
    {
      control: n = t.control,
      name: r,
      defaultValue: s,
      disabled: i,
      exact: o,
    } = e,
    a = fe.useRef(r);
  (a.current = r),
    El({
      disabled: i,
      subject: n._subjects.values,
      next: (u) => {
        vm(a.current, u.name, o) &&
          l(dt(bm(a.current, n._names, u.values || n._formValues, !1, s)));
      },
    });
  const [c, l] = fe.useState(n._getWatch(r, s));
  return fe.useEffect(() => n._removeUnmounted()), c;
}
function vS(e) {
  const t = Pr(),
    { name: n, disabled: r, control: s = t.control, shouldUnregister: i } = e,
    o = hm(s._names.array, n),
    a = yS({
      control: s,
      name: n,
      defaultValue: B(s._formValues, n, B(s._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    c = gS({ control: s, name: n, exact: !0 }),
    l = fe.useRef(
      s.register(n, {
        ...e.rules,
        value: a,
        ...(Pt(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    u = fe.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!B(c.errors, n) },
            isDirty: { enumerable: !0, get: () => !!B(c.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!B(c.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!B(c.validatingFields, n),
            },
            error: { enumerable: !0, get: () => B(c.errors, n) },
          }
        ),
      [c, n]
    ),
    d = fe.useMemo(
      () => ({
        name: n,
        value: a,
        ...(Pt(r) || c.disabled ? { disabled: c.disabled || r } : {}),
        onChange: (f) =>
          l.current.onChange({
            target: { value: fm(f), name: n },
            type: go.CHANGE,
          }),
        onBlur: () =>
          l.current.onBlur({
            target: { value: B(s._formValues, n), name: n },
            type: go.BLUR,
          }),
        ref: (f) => {
          const m = B(s._fields, n);
          m &&
            f &&
            (m._f.ref = {
              focus: () => f.focus(),
              select: () => f.select(),
              setCustomValidity: (g) => f.setCustomValidity(g),
              reportValidity: () => f.reportValidity(),
            });
        },
      }),
      [n, s._formValues, r, c.disabled, a, s._fields]
    );
  return (
    fe.useEffect(() => {
      const f = s._options.shouldUnregister || i,
        m = (g, h) => {
          const y = B(s._fields, g);
          y && y._f && (y._f.mount = h);
        };
      if ((m(n, !0), f)) {
        const g = dt(B(s._options.defaultValues, n));
        xe(s._defaultValues, n, g),
          Ve(B(s._formValues, n)) && xe(s._formValues, n, g);
      }
      return (
        !o && s.register(n),
        () => {
          (o ? f && !s._state.action : f) ? s.unregister(n) : m(n, !1);
        }
      );
    }, [n, s, o, i]),
    fe.useEffect(() => {
      s._updateDisabledField({ disabled: r, fields: s._fields, name: n });
    }, [r, n, s]),
    fe.useMemo(() => ({ field: d, formState: c, fieldState: u }), [d, c, u])
  );
}
const bS = (e) => e.render(vS(e));
var xm = (e, t, n, r, s) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: s || !0 },
        }
      : {},
  cd = (e) => ({
    isOnSubmit: !e || e === It.onSubmit,
    isOnBlur: e === It.onBlur,
    isOnChange: e === It.onChange,
    isOnAll: e === It.all,
    isOnTouch: e === It.onTouched,
  }),
  ld = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const $s = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const i = B(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !r) return !0;
        if (o.ref && t(o.ref, o.name) && !r) return !0;
        if ($s(a, t)) break;
      } else if (Ue(a) && $s(a, t)) break;
    }
  }
};
var xS = (e, t, n) => {
    const r = Us(B(e, n));
    return xe(r, "root", t[n]), xe(e, n, r), e;
  },
  Tl = (e) => e.type === "file",
  tn = (e) => typeof e == "function",
  yo = (e) => {
    if (!_l) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  ro = (e) => nn(e),
  Al = (e) => e.type === "radio",
  vo = (e) => e instanceof RegExp;
const ud = { value: !1, isValid: !1 },
  dd = { value: !0, isValid: !0 };
var wm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Ve(e[0].attributes.value)
        ? Ve(e[0].value) || e[0].value === ""
          ? dd
          : { value: e[0].value, isValid: !0 }
        : dd
      : ud;
  }
  return ud;
};
const fd = { isValid: !1, value: null };
var Sm = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        fd
      )
    : fd;
function hd(e, t, n = "validate") {
  if (ro(e) || (Array.isArray(e) && e.every(ro)) || (Pt(e) && !e))
    return { type: n, message: ro(e) ? e : "", ref: t };
}
var Mr = (e) => (Ue(e) && !vo(e) ? e : { value: e, message: "" }),
  pd = async (e, t, n, r, s, i) => {
    const {
        ref: o,
        refs: a,
        required: c,
        maxLength: l,
        minLength: u,
        min: d,
        max: f,
        pattern: m,
        validate: g,
        name: h,
        valueAsNumber: y,
        mount: b,
      } = e._f,
      x = B(n, h);
    if (!b || t.has(h)) return {};
    const w = a ? a[0] : o,
      C = (j) => {
        s &&
          w.reportValidity &&
          (w.setCustomValidity(Pt(j) ? "" : j || ""), w.reportValidity());
      },
      S = {},
      R = Al(o),
      A = Pi(o),
      T = R || A,
      O =
        ((y || Tl(o)) && Ve(o.value) && Ve(x)) ||
        (yo(o) && o.value === "") ||
        x === "" ||
        (Array.isArray(x) && !x.length),
      D = xm.bind(null, h, r, S),
      F = (j, U, L, Y = hn.maxLength, Z = hn.minLength) => {
        const H = j ? U : L;
        S[h] = { type: j ? Y : Z, message: H, ref: o, ...D(j ? Y : Z, H) };
      };
    if (
      i
        ? !Array.isArray(x) || !x.length
        : c &&
          ((!T && (O || ct(x))) ||
            (Pt(x) && !x) ||
            (A && !wm(a).isValid) ||
            (R && !Sm(a).isValid))
    ) {
      const { value: j, message: U } = ro(c)
        ? { value: !!c, message: c }
        : Mr(c);
      if (
        j &&
        ((S[h] = {
          type: hn.required,
          message: U,
          ref: w,
          ...D(hn.required, U),
        }),
        !r)
      )
        return C(U), S;
    }
    if (!O && (!ct(d) || !ct(f))) {
      let j, U;
      const L = Mr(f),
        Y = Mr(d);
      if (!ct(x) && !isNaN(x)) {
        const Z = o.valueAsNumber || (x && +x);
        ct(L.value) || (j = Z > L.value), ct(Y.value) || (U = Z < Y.value);
      } else {
        const Z = o.valueAsDate || new Date(x),
          H = (he) => new Date(new Date().toDateString() + " " + he),
          q = o.type == "time",
          se = o.type == "week";
        nn(L.value) &&
          x &&
          (j = q
            ? H(x) > H(L.value)
            : se
            ? x > L.value
            : Z > new Date(L.value)),
          nn(Y.value) &&
            x &&
            (U = q
              ? H(x) < H(Y.value)
              : se
              ? x < Y.value
              : Z < new Date(Y.value));
      }
      if ((j || U) && (F(!!j, L.message, Y.message, hn.max, hn.min), !r))
        return C(S[h].message), S;
    }
    if ((l || u) && !O && (nn(x) || (i && Array.isArray(x)))) {
      const j = Mr(l),
        U = Mr(u),
        L = !ct(j.value) && x.length > +j.value,
        Y = !ct(U.value) && x.length < +U.value;
      if ((L || Y) && (F(L, j.message, U.message), !r))
        return C(S[h].message), S;
    }
    if (m && !O && nn(x)) {
      const { value: j, message: U } = Mr(m);
      if (
        vo(j) &&
        !x.match(j) &&
        ((S[h] = { type: hn.pattern, message: U, ref: o, ...D(hn.pattern, U) }),
        !r)
      )
        return C(U), S;
    }
    if (g) {
      if (tn(g)) {
        const j = await g(x, n),
          U = hd(j, w);
        if (U && ((S[h] = { ...U, ...D(hn.validate, U.message) }), !r))
          return C(U.message), S;
      } else if (Ue(g)) {
        let j = {};
        for (const U in g) {
          if (!ht(j) && !r) break;
          const L = hd(await g[U](x, n), w, U);
          L &&
            ((j = { ...L, ...D(U, L.message) }), C(L.message), r && (S[h] = j));
        }
        if (!ht(j) && ((S[h] = { ref: w, ...j }), !r)) return S;
      }
    }
    return C(!0), S;
  };
function wS(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Ve(e) ? r++ : e[t[r++]];
  return e;
}
function SS(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ve(e[t])) return !1;
  return !0;
}
function qe(e, t) {
  const n = Array.isArray(t) ? t : Cl(t) ? [t] : pm(t),
    r = n.length === 1 ? e : wS(e, n),
    s = n.length - 1,
    i = n[s];
  return (
    r && delete r[i],
    s !== 0 &&
      ((Ue(r) && ht(r)) || (Array.isArray(r) && SS(r))) &&
      qe(e, n.slice(0, -1)),
    e
  );
}
var Ea = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const i of e) i.next && i.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  uc = (e) => ct(e) || !dm(e);
function Nn(e, t) {
  if (uc(e) || uc(t)) return e === t;
  if (tr(e) && tr(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const i = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (tr(i) && tr(o)) ||
        (Ue(i) && Ue(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !Nn(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var _m = (e) => e.type === "select-multiple",
  _S = (e) => Al(e) || Pi(e),
  Ta = (e) => yo(e) && e.isConnected,
  Cm = (e) => {
    for (const t in e) if (tn(e[t])) return !0;
    return !1;
  };
function bo(e, t = {}) {
  const n = Array.isArray(e);
  if (Ue(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Ue(e[r]) && !Cm(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), bo(e[r], t[r]))
        : ct(e[r]) || (t[r] = !0);
  return t;
}
function Em(e, t, n) {
  const r = Array.isArray(e);
  if (Ue(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || (Ue(e[s]) && !Cm(e[s]))
        ? Ve(t) || uc(n[s])
          ? (n[s] = Array.isArray(e[s]) ? bo(e[s], []) : { ...bo(e[s]) })
          : Em(e[s], ct(t) ? {} : t[s], n[s])
        : (n[s] = !Nn(e[s], t[s]));
  return n;
}
var Ps = (e, t) => Em(e, t, bo(t)),
  Tm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Ve(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && nn(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Aa(e) {
  const t = e.ref;
  return Tl(t)
    ? t.files
    : Al(t)
    ? Sm(e.refs).value
    : _m(t)
    ? [...t.selectedOptions].map(({ value: n }) => n)
    : Pi(t)
    ? wm(e.refs).value
    : Tm(Ve(t.value) ? e.ref.value : t.value, e);
}
var CS = (e, t, n, r) => {
    const s = {};
    for (const i of e) {
      const o = B(t, i);
      o && xe(s, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r,
    };
  },
  ks = (e) =>
    Ve(e)
      ? e
      : vo(e)
      ? e.source
      : Ue(e)
      ? vo(e.value)
        ? e.value.source
        : e.value
      : e;
const md = "AsyncFunction";
var ES = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (tn(e.validate) && e.validate.constructor.name === md) ||
      (Ue(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === md))
    ),
  TS = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function gd(e, t, n) {
  const r = B(e, n);
  if (r || Cl(n)) return { error: r, name: n };
  const s = n.split(".");
  for (; s.length; ) {
    const i = s.join("."),
      o = B(t, i),
      a = B(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    s.pop();
  }
  return { name: n };
}
var AS = (e, t, n, r, s) =>
    s.isOnAll
      ? !1
      : !n && s.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : s.isOnBlur)
      ? !e
      : (n ? r.isOnChange : s.isOnChange)
      ? e
      : !0,
  RS = (e, t) => !Ko(B(e, t)).length && qe(e, t);
const PS = {
  mode: It.onSubmit,
  reValidateMode: It.onChange,
  shouldFocusError: !0,
};
function kS(e = {}) {
  let t = { ...PS, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: tn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    s =
      Ue(t.defaultValues) || Ue(t.values)
        ? dt(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : dt(s),
    o = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    l = 0;
  const u = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: Ea(), array: Ea(), state: Ea() },
    f = cd(t.mode),
    m = cd(t.reValidateMode),
    g = t.criteriaMode === It.all,
    h = (_) => (P) => {
      clearTimeout(l), (l = setTimeout(_, P));
    },
    y = async (_) => {
      if (!t.disabled && (u.isValid || _)) {
        const P = t.resolver ? ht((await T()).errors) : await D(r, !0);
        P !== n.isValid && d.state.next({ isValid: P });
      }
    },
    b = (_, P) => {
      !t.disabled &&
        (u.isValidating || u.validatingFields) &&
        ((_ || Array.from(a.mount)).forEach((N) => {
          N && (P ? xe(n.validatingFields, N, P) : qe(n.validatingFields, N));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !ht(n.validatingFields),
        }));
    },
    x = (_, P = [], N, $, V = !0, I = !0) => {
      if ($ && N && !t.disabled) {
        if (((o.action = !0), I && Array.isArray(B(r, _)))) {
          const J = N(B(r, _), $.argA, $.argB);
          V && xe(r, _, J);
        }
        if (I && Array.isArray(B(n.errors, _))) {
          const J = N(B(n.errors, _), $.argA, $.argB);
          V && xe(n.errors, _, J), RS(n.errors, _);
        }
        if (u.touchedFields && I && Array.isArray(B(n.touchedFields, _))) {
          const J = N(B(n.touchedFields, _), $.argA, $.argB);
          V && xe(n.touchedFields, _, J);
        }
        u.dirtyFields && (n.dirtyFields = Ps(s, i)),
          d.state.next({
            name: _,
            isDirty: j(_, P),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else xe(i, _, P);
    },
    w = (_, P) => {
      xe(n.errors, _, P), d.state.next({ errors: n.errors });
    },
    C = (_) => {
      (n.errors = _), d.state.next({ errors: n.errors, isValid: !1 });
    },
    S = (_, P, N, $) => {
      const V = B(r, _);
      if (V) {
        const I = B(i, _, Ve(N) ? B(s, _) : N);
        Ve(I) || ($ && $.defaultChecked) || P
          ? xe(i, _, P ? I : Aa(V._f))
          : Y(_, I),
          o.mount && y();
      }
    },
    R = (_, P, N, $, V) => {
      let I = !1,
        J = !1;
      const ce = { name: _ };
      if (!t.disabled) {
        const We = !!(B(r, _) && B(r, _)._f && B(r, _)._f.disabled);
        if (!N || $) {
          u.isDirty &&
            ((J = n.isDirty),
            (n.isDirty = ce.isDirty = j()),
            (I = J !== ce.isDirty));
          const Ie = We || Nn(B(s, _), P);
          (J = !!(!We && B(n.dirtyFields, _))),
            Ie || We ? qe(n.dirtyFields, _) : xe(n.dirtyFields, _, !0),
            (ce.dirtyFields = n.dirtyFields),
            (I = I || (u.dirtyFields && J !== !Ie));
        }
        if (N) {
          const Ie = B(n.touchedFields, _);
          Ie ||
            (xe(n.touchedFields, _, N),
            (ce.touchedFields = n.touchedFields),
            (I = I || (u.touchedFields && Ie !== N)));
        }
        I && V && d.state.next(ce);
      }
      return I ? ce : {};
    },
    A = (_, P, N, $) => {
      const V = B(n.errors, _),
        I = u.isValid && Pt(P) && n.isValid !== P;
      if (
        (t.delayError && N
          ? ((c = h(() => w(_, N))), c(t.delayError))
          : (clearTimeout(l),
            (c = null),
            N ? xe(n.errors, _, N) : qe(n.errors, _)),
        (N ? !Nn(V, N) : V) || !ht($) || I)
      ) {
        const J = {
          ...$,
          ...(I && Pt(P) ? { isValid: P } : {}),
          errors: n.errors,
          name: _,
        };
        (n = { ...n, ...J }), d.state.next(J);
      }
    },
    T = async (_) => {
      b(_, !0);
      const P = await t.resolver(
        i,
        t.context,
        CS(_ || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return b(_), P;
    },
    O = async (_) => {
      const { errors: P } = await T(_);
      if (_)
        for (const N of _) {
          const $ = B(P, N);
          $ ? xe(n.errors, N, $) : qe(n.errors, N);
        }
      else n.errors = P;
      return P;
    },
    D = async (_, P, N = { valid: !0 }) => {
      for (const $ in _) {
        const V = _[$];
        if (V) {
          const { _f: I, ...J } = V;
          if (I) {
            const ce = a.array.has(I.name),
              We = V._f && ES(V._f);
            We && u.validatingFields && b([$], !0);
            const Ie = await pd(
              V,
              a.disabled,
              i,
              g,
              t.shouldUseNativeValidation && !P,
              ce
            );
            if (
              (We && u.validatingFields && b([$]),
              Ie[I.name] && ((N.valid = !1), P))
            )
              break;
            !P &&
              (B(Ie, I.name)
                ? ce
                  ? xS(n.errors, Ie, I.name)
                  : xe(n.errors, I.name, Ie[I.name])
                : qe(n.errors, I.name));
          }
          !ht(J) && (await D(J, P, N));
        }
      }
      return N.valid;
    },
    F = () => {
      for (const _ of a.unMount) {
        const P = B(r, _);
        P &&
          (P._f.refs ? P._f.refs.every((N) => !Ta(N)) : !Ta(P._f.ref)) &&
          it(_);
      }
      a.unMount = new Set();
    },
    j = (_, P) => !t.disabled && (_ && P && xe(i, _, P), !Nn(ve(), s)),
    U = (_, P, N) =>
      bm(_, a, { ...(o.mount ? i : Ve(P) ? s : nn(_) ? { [_]: P } : P) }, N, P),
    L = (_) => Ko(B(o.mount ? i : s, _, t.shouldUnregister ? B(s, _, []) : [])),
    Y = (_, P, N = {}) => {
      const $ = B(r, _);
      let V = P;
      if ($) {
        const I = $._f;
        I &&
          (!I.disabled && xe(i, _, Tm(P, I)),
          (V = yo(I.ref) && ct(P) ? "" : P),
          _m(I.ref)
            ? [...I.ref.options].forEach(
                (J) => (J.selected = V.includes(J.value))
              )
            : I.refs
            ? Pi(I.ref)
              ? I.refs.length > 1
                ? I.refs.forEach(
                    (J) =>
                      (!J.defaultChecked || !J.disabled) &&
                      (J.checked = Array.isArray(V)
                        ? !!V.find((ce) => ce === J.value)
                        : V === J.value)
                  )
                : I.refs[0] && (I.refs[0].checked = !!V)
              : I.refs.forEach((J) => (J.checked = J.value === V))
            : Tl(I.ref)
            ? (I.ref.value = "")
            : ((I.ref.value = V),
              I.ref.type || d.values.next({ name: _, values: { ...i } })));
      }
      (N.shouldDirty || N.shouldTouch) &&
        R(_, V, N.shouldTouch, N.shouldDirty, !0),
        N.shouldValidate && he(_);
    },
    Z = (_, P, N) => {
      for (const $ in P) {
        const V = P[$],
          I = `${_}.${$}`,
          J = B(r, I);
        (a.array.has(_) || Ue(V) || (J && !J._f)) && !tr(V)
          ? Z(I, V, N)
          : Y(I, V, N);
      }
    },
    H = (_, P, N = {}) => {
      const $ = B(r, _),
        V = a.array.has(_),
        I = dt(P);
      xe(i, _, I),
        V
          ? (d.array.next({ name: _, values: { ...i } }),
            (u.isDirty || u.dirtyFields) &&
              N.shouldDirty &&
              d.state.next({
                name: _,
                dirtyFields: Ps(s, i),
                isDirty: j(_, I),
              }))
          : $ && !$._f && !ct(I)
          ? Z(_, I, N)
          : Y(_, I, N),
        ld(_, a) && d.state.next({ ...n }),
        d.values.next({ name: o.mount ? _ : void 0, values: { ...i } });
    },
    q = async (_) => {
      o.mount = !0;
      const P = _.target;
      let N = P.name,
        $ = !0;
      const V = B(r, N),
        I = () => (P.type ? Aa(V._f) : fm(_)),
        J = (ce) => {
          $ =
            Number.isNaN(ce) ||
            (tr(ce) && isNaN(ce.getTime())) ||
            Nn(ce, B(i, N, ce));
        };
      if (V) {
        let ce, We;
        const Ie = I(),
          Gt = _.type === go.BLUR || _.type === go.FOCUS_OUT,
          Cs =
            (!TS(V._f) && !t.resolver && !B(n.errors, N) && !V._f.deps) ||
            AS(Gt, B(n.touchedFields, N), n.isSubmitted, m, f),
          Zt = ld(N, a, Gt);
        xe(i, N, Ie),
          Gt
            ? (V._f.onBlur && V._f.onBlur(_), c && c(0))
            : V._f.onChange && V._f.onChange(_);
        const Qn = R(N, Ie, Gt, !1),
          Es = !ht(Qn) || Zt;
        if (
          (!Gt && d.values.next({ name: N, type: _.type, values: { ...i } }),
          Cs)
        )
          return (
            u.isValid && (t.mode === "onBlur" && Gt ? y() : Gt || y()),
            Es && d.state.next({ name: N, ...(Zt ? {} : Qn) })
          );
        if ((!Gt && Zt && d.state.next({ ...n }), t.resolver)) {
          const { errors: Xn } = await T([N]);
          if ((J(Ie), $)) {
            const fa = gd(n.errors, r, N),
              Vi = gd(Xn, r, fa.name || N);
            (ce = Vi.error), (N = Vi.name), (We = ht(Xn));
          }
        } else
          b([N], !0),
            (ce = (await pd(V, a.disabled, i, g, t.shouldUseNativeValidation))[
              N
            ]),
            b([N]),
            J(Ie),
            $ && (ce ? (We = !1) : u.isValid && (We = await D(r, !0)));
        $ && (V._f.deps && he(V._f.deps), A(N, We, ce, Qn));
      }
    },
    se = (_, P) => {
      if (B(n.errors, P) && _.focus) return _.focus(), 1;
    },
    he = async (_, P = {}) => {
      let N, $;
      const V = Us(_);
      if (t.resolver) {
        const I = await O(Ve(_) ? _ : V);
        (N = ht(I)), ($ = _ ? !V.some((J) => B(I, J)) : N);
      } else
        _
          ? (($ = (
              await Promise.all(
                V.map(async (I) => {
                  const J = B(r, I);
                  return await D(J && J._f ? { [I]: J } : J);
                })
              )
            ).every(Boolean)),
            !(!$ && !n.isValid) && y())
          : ($ = N = await D(r));
      return (
        d.state.next({
          ...(!nn(_) || (u.isValid && N !== n.isValid) ? {} : { name: _ }),
          ...(t.resolver || !_ ? { isValid: N } : {}),
          errors: n.errors,
        }),
        P.shouldFocus && !$ && $s(r, se, _ ? V : a.mount),
        $
      );
    },
    ve = (_) => {
      const P = { ...(o.mount ? i : s) };
      return Ve(_) ? P : nn(_) ? B(P, _) : _.map((N) => B(P, N));
    },
    He = (_, P) => ({
      invalid: !!B((P || n).errors, _),
      isDirty: !!B((P || n).dirtyFields, _),
      error: B((P || n).errors, _),
      isValidating: !!B(n.validatingFields, _),
      isTouched: !!B((P || n).touchedFields, _),
    }),
    Ye = (_) => {
      _ && Us(_).forEach((P) => qe(n.errors, P)),
        d.state.next({ errors: _ ? n.errors : {} });
    },
    Je = (_, P, N) => {
      const $ = (B(r, _, { _f: {} })._f || {}).ref,
        V = B(n.errors, _) || {},
        { ref: I, message: J, type: ce, ...We } = V;
      xe(n.errors, _, { ...We, ...P, ref: $ }),
        d.state.next({ name: _, errors: n.errors, isValid: !1 }),
        N && N.shouldFocus && $ && $.focus && $.focus();
    },
    Nt = (_, P) =>
      tn(_)
        ? d.values.subscribe({ next: (N) => _(U(void 0, P), N) })
        : U(_, P, !0),
    it = (_, P = {}) => {
      for (const N of _ ? Us(_) : a.mount)
        a.mount.delete(N),
          a.array.delete(N),
          P.keepValue || (qe(r, N), qe(i, N)),
          !P.keepError && qe(n.errors, N),
          !P.keepDirty && qe(n.dirtyFields, N),
          !P.keepTouched && qe(n.touchedFields, N),
          !P.keepIsValidating && qe(n.validatingFields, N),
          !t.shouldUnregister && !P.keepDefaultValue && qe(s, N);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(P.keepDirty ? { isDirty: j() } : {}) }),
        !P.keepIsValid && y();
    },
    de = ({ disabled: _, name: P, field: N, fields: $ }) => {
      ((Pt(_) && o.mount) || _ || a.disabled.has(P)) &&
        (_ ? a.disabled.add(P) : a.disabled.delete(P),
        R(P, Aa(N ? N._f : B($, P)._f), !1, !1, !0));
    },
    be = (_, P = {}) => {
      let N = B(r, _);
      const $ = Pt(P.disabled) || Pt(t.disabled);
      return (
        xe(r, _, {
          ...(N || {}),
          _f: {
            ...(N && N._f ? N._f : { ref: { name: _ } }),
            name: _,
            mount: !0,
            ...P,
          },
        }),
        a.mount.add(_),
        N
          ? de({
              field: N,
              disabled: Pt(P.disabled) ? P.disabled : t.disabled,
              name: _,
            })
          : S(_, !0, P.value),
        {
          ...($ ? { disabled: P.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!P.required,
                min: ks(P.min),
                max: ks(P.max),
                minLength: ks(P.minLength),
                maxLength: ks(P.maxLength),
                pattern: ks(P.pattern),
              }
            : {}),
          name: _,
          onChange: q,
          onBlur: q,
          ref: (V) => {
            if (V) {
              be(_, P), (N = B(r, _));
              const I =
                  (Ve(V.value) &&
                    V.querySelectorAll &&
                    V.querySelectorAll("input,select,textarea")[0]) ||
                  V,
                J = _S(I),
                ce = N._f.refs || [];
              if (J ? ce.find((We) => We === I) : I === N._f.ref) return;
              xe(r, _, {
                _f: {
                  ...N._f,
                  ...(J
                    ? {
                        refs: [
                          ...ce.filter(Ta),
                          I,
                          ...(Array.isArray(B(s, _)) ? [{}] : []),
                        ],
                        ref: { type: I.type, name: _ },
                      }
                    : { ref: I }),
                },
              }),
                S(_, !1, void 0, I);
            } else
              (N = B(r, _, {})),
                N._f && (N._f.mount = !1),
                (t.shouldUnregister || P.shouldUnregister) &&
                  !(hm(a.array, _) && o.action) &&
                  a.unMount.add(_);
          },
        }
      );
    },
    Fe = () => t.shouldFocusError && $s(r, se, a.mount),
    ze = (_) => {
      Pt(_) &&
        (d.state.next({ disabled: _ }),
        $s(
          r,
          (P, N) => {
            const $ = B(r, N);
            $ &&
              ((P.disabled = $._f.disabled || _),
              Array.isArray($._f.refs) &&
                $._f.refs.forEach((V) => {
                  V.disabled = $._f.disabled || _;
                }));
          },
          0,
          !1
        ));
    },
    Se = (_, P) => async (N) => {
      let $;
      N && (N.preventDefault && N.preventDefault(), N.persist && N.persist());
      let V = dt(i);
      if (a.disabled.size) for (const I of a.disabled) xe(V, I, void 0);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: I, values: J } = await T();
        (n.errors = I), (V = J);
      } else await D(r);
      if ((qe(n.errors, "root"), ht(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await _(V, N);
        } catch (I) {
          $ = I;
        }
      } else P && (await P({ ...n.errors }, N)), Fe(), setTimeout(Fe);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: ht(n.errors) && !$,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        $)
      )
        throw $;
    },
    K = (_, P = {}) => {
      B(r, _) &&
        (Ve(P.defaultValue)
          ? H(_, dt(B(s, _)))
          : (H(_, P.defaultValue), xe(s, _, dt(P.defaultValue))),
        P.keepTouched || qe(n.touchedFields, _),
        P.keepDirty ||
          (qe(n.dirtyFields, _),
          (n.isDirty = P.defaultValue ? j(_, dt(B(s, _))) : j())),
        P.keepError || (qe(n.errors, _), u.isValid && y()),
        d.state.next({ ...n }));
    },
    pe = (_, P = {}) => {
      const N = _ ? dt(_) : s,
        $ = dt(N),
        V = ht(_),
        I = V ? s : $;
      if ((P.keepDefaultValues || (s = N), !P.keepValues)) {
        if (P.keepDirtyValues) {
          const J = new Set([...a.mount, ...Object.keys(Ps(s, i))]);
          for (const ce of Array.from(J))
            B(n.dirtyFields, ce) ? xe(I, ce, B(i, ce)) : H(ce, B(I, ce));
        } else {
          if (_l && Ve(_))
            for (const J of a.mount) {
              const ce = B(r, J);
              if (ce && ce._f) {
                const We = Array.isArray(ce._f.refs)
                  ? ce._f.refs[0]
                  : ce._f.ref;
                if (yo(We)) {
                  const Ie = We.closest("form");
                  if (Ie) {
                    Ie.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = t.shouldUnregister ? (P.keepDefaultValues ? dt(s) : {}) : dt(I)),
          d.array.next({ values: { ...I } }),
          d.values.next({ values: { ...I } });
      }
      (a = {
        mount: P.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !u.isValid || !!P.keepIsValid || !!P.keepDirtyValues),
        (o.watch = !!t.shouldUnregister),
        d.state.next({
          submitCount: P.keepSubmitCount ? n.submitCount : 0,
          isDirty: V
            ? !1
            : P.keepDirty
            ? n.isDirty
            : !!(P.keepDefaultValues && !Nn(_, s)),
          isSubmitted: P.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: V
            ? {}
            : P.keepDirtyValues
            ? P.keepDefaultValues && i
              ? Ps(s, i)
              : n.dirtyFields
            : P.keepDefaultValues && _
            ? Ps(s, _)
            : P.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: P.keepTouched ? n.touchedFields : {},
          errors: P.keepErrors ? n.errors : {},
          isSubmitSuccessful: P.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    _e = (_, P) => pe(tn(_) ? _(i) : _, P);
  return {
    control: {
      register: be,
      unregister: it,
      getFieldState: He,
      handleSubmit: Se,
      setError: Je,
      _executeSchema: T,
      _getWatch: U,
      _getDirty: j,
      _updateValid: y,
      _removeUnmounted: F,
      _updateFieldArray: x,
      _updateDisabledField: de,
      _getFieldArray: L,
      _reset: pe,
      _resetDefaultValues: () =>
        tn(t.defaultValues) &&
        t.defaultValues().then((_) => {
          _e(_, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (_) => {
        n = { ...n, ..._ };
      },
      _disableForm: ze,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: C,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(_) {
        o = _;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(_) {
        a = _;
      },
      get _formState() {
        return n;
      },
      set _formState(_) {
        n = _;
      },
      get _options() {
        return t;
      },
      set _options(_) {
        t = { ...t, ..._ };
      },
    },
    trigger: he,
    register: be,
    handleSubmit: Se,
    watch: Nt,
    setValue: H,
    getValues: ve,
    reset: _e,
    resetField: K,
    clearErrors: Ye,
    unregister: it,
    setError: Je,
    setFocus: (_, P = {}) => {
      const N = B(r, _),
        $ = N && N._f;
      if ($) {
        const V = $.refs ? $.refs[0] : $.ref;
        V.focus && (V.focus(), P.shouldSelect && tn(V.select) && V.select());
      }
    },
    getFieldState: He,
  };
}
function Am(e = {}) {
  const t = fe.useRef(void 0),
    n = fe.useRef(void 0),
    [r, s] = fe.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: tn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: tn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...kS(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    El({
      subject: i._subjects.state,
      next: (o) => {
        ym(o, i._proxyFormState, i._updateFormState, !0) &&
          s({ ...i._formState });
      },
    }),
    fe.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    fe.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== r.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, r.isDirty]),
    fe.useEffect(() => {
      e.values && !Nn(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          s((o) => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    fe.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    fe.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    fe.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = gm(r, i)),
    t.current
  );
}
const yd = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = B(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  Rm = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref
        ? yd(r.ref, n, e)
        : r.refs && r.refs.forEach((s) => yd(s, n, e));
    }
  },
  NS = (e, t) => {
    t.shouldUseNativeValidation && Rm(e, t);
    const n = {};
    for (const r in e) {
      const s = B(t.fields, r),
        i = Object.assign(e[r] || {}, { ref: s && s.ref });
      if (OS(t.names || Object.keys(e), r)) {
        const o = Object.assign({}, B(n, r));
        xe(o, "root", i), xe(n, r, o);
      } else xe(n, r, i);
    }
    return n;
  },
  OS = (e, t) => e.some((n) => n.startsWith(t + "."));
var jS = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        s = r.code,
        i = r.message,
        o = r.path.join(".");
      if (!n[o])
        if ("unionErrors" in r) {
          var a = r.unionErrors[0].errors[0];
          n[o] = { message: a.message, type: a.code };
        } else n[o] = { message: i, type: s };
      if (
        ("unionErrors" in r &&
          r.unionErrors.forEach(function (u) {
            return u.errors.forEach(function (d) {
              return e.push(d);
            });
          }),
        t)
      ) {
        var c = n[o].types,
          l = c && c[r.code];
        n[o] = xm(o, t, n, s, l ? [].concat(l, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  Pm = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, s, i) {
        try {
          return Promise.resolve(
            (function (o, a) {
              try {
                var c = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)
                ).then(function (l) {
                  return (
                    i.shouldUseNativeValidation && Rm({}, i),
                    { errors: {}, values: n.raw ? r : l }
                  );
                });
              } catch (l) {
                return a(l);
              }
              return c && c.then ? c.then(void 0, a) : c;
            })(0, function (o) {
              if (
                (function (a) {
                  return Array.isArray(a == null ? void 0 : a.errors);
                })(o)
              )
                return {
                  values: {},
                  errors: NS(
                    jS(
                      o.errors,
                      !i.shouldUseNativeValidation && i.criteriaMode === "all"
                    ),
                    i
                  ),
                };
              throw o;
            })
          );
        } catch (o) {
          return Promise.reject(o);
        }
      }
    );
  },
  ye;
(function (e) {
  e.assertEqual = (s) => s;
  function t(s) {}
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (s) => {
      const i = {};
      for (const o of s) i[o] = o;
      return i;
    }),
    (e.getValidEnumValues = (s) => {
      const i = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"),
        o = {};
      for (const a of i) o[a] = s[a];
      return e.objectValues(o);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (i) {
        return s[i];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const i = [];
            for (const o in s)
              Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
            return i;
          }),
    (e.find = (s, i) => {
      for (const o of s) if (i(o)) return o;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function r(s, i = " | ") {
    return s.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(i);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (s, i) =>
      typeof i == "bigint" ? i.toString() : i);
})(ye || (ye = {}));
var dc;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(dc || (dc = {}));
const W = ye.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  yn = (e) => {
    switch (typeof e) {
      case "undefined":
        return W.undefined;
      case "string":
        return W.string;
      case "number":
        return isNaN(e) ? W.nan : W.number;
      case "boolean":
        return W.boolean;
      case "function":
        return W.function;
      case "bigint":
        return W.bigint;
      case "symbol":
        return W.symbol;
      case "object":
        return Array.isArray(e)
          ? W.array
          : e === null
          ? W.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? W.promise
          : typeof Map < "u" && e instanceof Map
          ? W.map
          : typeof Set < "u" && e instanceof Set
          ? W.set
          : typeof Date < "u" && e instanceof Date
          ? W.date
          : W.object;
      default:
        return W.unknown;
    }
  },
  M = ye.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  DS = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class xt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  format(t) {
    const n =
        t ||
        function (i) {
          return i.message;
        },
      r = { _errors: [] },
      s = (i) => {
        for (const o of i.issues)
          if (o.code === "invalid_union") o.unionErrors.map(s);
          else if (o.code === "invalid_return_type") s(o.returnTypeError);
          else if (o.code === "invalid_arguments") s(o.argumentsError);
          else if (o.path.length === 0) r._errors.push(n(o));
          else {
            let a = r,
              c = 0;
            for (; c < o.path.length; ) {
              const l = o.path[c];
              c === o.path.length - 1
                ? ((a[l] = a[l] || { _errors: [] }), a[l]._errors.push(n(o)))
                : (a[l] = a[l] || { _errors: [] }),
                (a = a[l]),
                c++;
            }
          }
      };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof xt)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ye.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((n[s.path[0]] = n[s.path[0]] || []), n[s.path[0]].push(t(s)))
        : r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
xt.create = (e) => new xt(e);
const ls = (e, t) => {
  let n;
  switch (e.code) {
    case M.invalid_type:
      e.received === W.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case M.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        ye.jsonStringifyReplacer
      )}`;
      break;
    case M.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ye.joinValues(e.keys, ", ")}`;
      break;
    case M.invalid_union:
      n = "Invalid input";
      break;
    case M.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ye.joinValues(e.options)}`;
      break;
    case M.invalid_enum_value:
      n = `Invalid enum value. Expected ${ye.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case M.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case M.invalid_return_type:
      n = "Invalid function return type";
      break;
    case M.invalid_date:
      n = "Invalid date";
      break;
    case M.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : ye.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case M.too_small:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (n = "Invalid input");
      break;
    case M.too_big:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (n = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (n = "Invalid input");
      break;
    case M.custom:
      n = "Invalid input";
      break;
    case M.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case M.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case M.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), ye.assertNever(e);
  }
  return { message: n };
};
let km = ls;
function MS(e) {
  km = e;
}
function xo() {
  return km;
}
const wo = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: s } = e,
      i = [...n, ...(s.path || [])],
      o = { ...s, path: i };
    if (s.message !== void 0) return { ...s, path: i, message: s.message };
    let a = "";
    const c = r
      .filter((l) => !!l)
      .slice()
      .reverse();
    for (const l of c) a = l(o, { data: t, defaultError: a }).message;
    return { ...s, path: i, message: a };
  },
  FS = [];
function z(e, t) {
  const n = xo(),
    r = wo({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === ls ? void 0 : ls,
      ].filter((s) => !!s),
    });
  e.common.issues.push(r);
}
class st {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return re;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key,
        o = await s.value;
      r.push({ key: i, value: o });
    }
    return st.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted") return re;
      i.status === "dirty" && t.dirty(),
        o.status === "dirty" && t.dirty(),
        i.value !== "__proto__" &&
          (typeof o.value < "u" || s.alwaysSet) &&
          (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const re = Object.freeze({ status: "aborted" }),
  Ir = (e) => ({ status: "dirty", value: e }),
  lt = (e) => ({ status: "valid", value: e }),
  fc = (e) => e.status === "aborted",
  hc = (e) => e.status === "dirty",
  xr = (e) => e.status === "valid",
  Js = (e) => typeof Promise < "u" && e instanceof Promise;
function So(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function Nm(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var X;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(X || (X = {}));
var js, Ds;
class ln {
  constructor(t, n, r, s) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const vd = (e, t) => {
  if (xr(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new xt(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function ae(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: s,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: s }
    : {
        errorMap: (o, a) => {
          var c, l;
          const { message: u } = e;
          return o.code === "invalid_enum_value"
            ? { message: u ?? a.defaultError }
            : typeof a.data > "u"
            ? {
                message:
                  (c = u ?? r) !== null && c !== void 0 ? c : a.defaultError,
              }
            : o.code !== "invalid_type"
            ? { message: a.defaultError }
            : {
                message:
                  (l = u ?? n) !== null && l !== void 0 ? l : a.defaultError,
              };
        },
        description: s,
      };
}
class ue {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return yn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: yn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new st(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: yn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Js(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const s = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: yn(t),
      },
      i = this._parseSync({ data: t, path: s.path, parent: s });
    return vd(s, i);
  }
  "~validate"(t) {
    var n, r;
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: yn(t),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: t, path: [], parent: s });
        return xr(i) ? { value: i.value } : { issues: s.common.issues };
      } catch (i) {
        !(
          (r =
            (n = i == null ? void 0 : i.message) === null || n === void 0
              ? void 0
              : n.toLowerCase()) === null || r === void 0
        ) &&
          r.includes("encountered") &&
          (this["~standard"].async = !0),
          (s.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: s }).then((i) =>
      xr(i) ? { value: i.value } : { issues: s.common.issues }
    );
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: yn(t),
      },
      s = this._parse({ data: t, path: r.path, parent: r }),
      i = await (Js(s) ? s : Promise.resolve(s));
    return vd(r, i);
  }
  refine(t, n) {
    const r = (s) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(s)
        : n;
    return this._refinement((s, i) => {
      const o = t(s),
        a = () => i.addIssue({ code: M.custom, ...r(s) });
      return typeof Promise < "u" && o instanceof Promise
        ? o.then((c) => (c ? !0 : (a(), !1)))
        : o
        ? !0
        : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) =>
      t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1)
    );
  }
  _refinement(t) {
    return new Wt({
      schema: this,
      typeName: te.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (n) => this["~validate"](n),
      });
  }
  optional() {
    return sn.create(this, this._def);
  }
  nullable() {
    return qn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Vt.create(this);
  }
  promise() {
    return ds.create(this, this._def);
  }
  or(t) {
    return ri.create([this, t], this._def);
  }
  and(t) {
    return si.create(this, t, this._def);
  }
  transform(t) {
    return new Wt({
      ...ae(this._def),
      schema: this,
      typeName: te.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new li({
      ...ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: te.ZodDefault,
    });
  }
  brand() {
    return new Rl({ typeName: te.ZodBranded, type: this, ...ae(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ui({
      ...ae(this._def),
      innerType: this,
      catchValue: n,
      typeName: te.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return ki.create(this, t);
  }
  readonly() {
    return di.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const IS = /^c[^\s-]{8,}$/i,
  LS = /^[0-9a-z]+$/,
  VS = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  BS =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  US = /^[a-z0-9_-]{21}$/i,
  $S = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  zS =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  WS =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  HS = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ra;
const qS =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  GS =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  ZS =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  KS =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  QS = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  XS = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Om =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  YS = new RegExp(`^${Om}$`);
function jm(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function JS(e) {
  return new RegExp(`^${jm(e)}$`);
}
function Dm(e) {
  let t = `${Om}T${jm(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function e_(e, t) {
  return !!(
    ((t === "v4" || !t) && qS.test(e)) ||
    ((t === "v6" || !t) && ZS.test(e))
  );
}
function t_(e, t) {
  if (!$S.test(e)) return !1;
  try {
    const [n] = e.split("."),
      r = n
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), "="),
      s = JSON.parse(atob(r));
    return !(
      typeof s != "object" ||
      s === null ||
      !s.typ ||
      !s.alg ||
      (t && s.alg !== t)
    );
  } catch {
    return !1;
  }
}
function n_(e, t) {
  return !!(
    ((t === "v4" || !t) && GS.test(e)) ||
    ((t === "v6" || !t) && KS.test(e))
  );
}
class Lt extends ue {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== W.string)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        z(i, {
          code: M.invalid_type,
          expected: W.string,
          received: i.parsedType,
        }),
        re
      );
    }
    const r = new st();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            code: M.too_small,
            minimum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            code: M.too_big,
            maximum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value,
          a = t.data.length < i.value;
        (o || a) &&
          ((s = this._getOrReturnCtx(t, s)),
          o
            ? z(s, {
                code: M.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : a &&
              z(s, {
                code: M.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          r.dirty());
      } else if (i.kind === "email")
        WS.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            validation: "email",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "emoji")
        Ra || (Ra = new RegExp(HS, "u")),
          Ra.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "emoji",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty());
      else if (i.kind === "uuid")
        BS.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            validation: "uuid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "nanoid")
        US.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            validation: "nanoid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid")
        IS.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            validation: "cuid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid2")
        LS.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            validation: "cuid2",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "ulid")
        VS.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            validation: "ulid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "url",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              z(s, {
                validation: "regex",
                code: M.invalid_string,
                message: i.message,
              }),
              r.dirty()))
          : i.kind === "trim"
          ? (t.data = t.data.trim())
          : i.kind === "includes"
          ? t.data.includes(i.value, i.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              code: M.invalid_string,
              validation: { includes: i.value, position: i.position },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : i.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : i.kind === "startsWith"
          ? t.data.startsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              code: M.invalid_string,
              validation: { startsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "endsWith"
          ? t.data.endsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              code: M.invalid_string,
              validation: { endsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "datetime"
          ? Dm(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              code: M.invalid_string,
              validation: "datetime",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "date"
          ? YS.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              code: M.invalid_string,
              validation: "date",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "time"
          ? JS(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              code: M.invalid_string,
              validation: "time",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "duration"
          ? zS.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "duration",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "ip"
          ? e_(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "ip",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "jwt"
          ? t_(t.data, i.alg) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "jwt",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "cidr"
          ? n_(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "cidr",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64"
          ? QS.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "base64",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64url"
          ? XS.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            z(s, {
              validation: "base64url",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : ye.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: M.invalid_string,
      ...X.errToObj(r),
    });
  }
  _addCheck(t) {
    return new Lt({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...X.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...X.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...X.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...X.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...X.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...X.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...X.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...X.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...X.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...X.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...X.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...X.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...X.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          local:
            (r = t == null ? void 0 : t.local) !== null && r !== void 0
              ? r
              : !1,
          ...X.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          ...X.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...X.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...X.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...X.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...X.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...X.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...X.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...X.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...X.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, X.errToObj(t));
  }
  trim() {
    return new Lt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Lt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Lt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Lt.create = (e) => {
  var t;
  return new Lt({
    checks: [],
    typeName: te.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ae(e),
  });
};
function r_(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    i = parseInt(e.toFixed(s).replace(".", "")),
    o = parseInt(t.toFixed(s).replace(".", ""));
  return (i % o) / Math.pow(10, s);
}
class zn extends ue {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== W.number)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        z(i, {
          code: M.invalid_type,
          expected: W.number,
          received: i.parsedType,
        }),
        re
      );
    }
    let r;
    const s = new st();
    for (const i of this._def.checks)
      i.kind === "int"
        ? ye.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          z(r, {
            code: M.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          z(r, {
            code: M.too_small,
            minimum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          z(r, {
            code: M.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? r_(t.data, i.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          z(r, {
            code: M.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          z(r, { code: M.not_finite, message: i.message }),
          s.dirty())
        : ye.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, X.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, X.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, X.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, X.toString(n));
  }
  setLimit(t, n, r, s) {
    return new zn({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: X.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new zn({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: X.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: X.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: X.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: X.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: X.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: X.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: X.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: X.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: X.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && ye.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
zn.create = (e) =>
  new zn({
    checks: [],
    typeName: te.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ae(e),
  });
class Wn extends ue {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== W.bigint) return this._getInvalidInput(t);
    let r;
    const s = new st();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          z(r, {
            code: M.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          z(r, {
            code: M.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? t.data % i.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          z(r, {
            code: M.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : ye.assertNever(i);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return (
      z(n, {
        code: M.invalid_type,
        expected: W.bigint,
        received: n.parsedType,
      }),
      re
    );
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, X.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, X.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, X.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, X.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Wn({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: X.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Wn({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: X.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: X.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: X.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: X.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: X.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Wn.create = (e) => {
  var t;
  return new Wn({
    checks: [],
    typeName: te.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ae(e),
  });
};
class ei extends ue {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== W.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        z(r, {
          code: M.invalid_type,
          expected: W.boolean,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
ei.create = (e) =>
  new ei({
    typeName: te.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ae(e),
  });
class wr extends ue {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== W.date)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        z(i, {
          code: M.invalid_type,
          expected: W.date,
          received: i.parsedType,
        }),
        re
      );
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return z(i, { code: M.invalid_date }), re;
    }
    const r = new st();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? t.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            code: M.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          r.dirty())
        : i.kind === "max"
        ? t.data.getTime() > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          z(s, {
            code: M.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: "date",
          }),
          r.dirty())
        : ye.assertNever(i);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new wr({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: X.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: X.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
wr.create = (e) =>
  new wr({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: te.ZodDate,
    ...ae(e),
  });
class _o extends ue {
  _parse(t) {
    if (this._getType(t) !== W.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        z(r, {
          code: M.invalid_type,
          expected: W.symbol,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
_o.create = (e) => new _o({ typeName: te.ZodSymbol, ...ae(e) });
class ti extends ue {
  _parse(t) {
    if (this._getType(t) !== W.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        z(r, {
          code: M.invalid_type,
          expected: W.undefined,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
ti.create = (e) => new ti({ typeName: te.ZodUndefined, ...ae(e) });
class ni extends ue {
  _parse(t) {
    if (this._getType(t) !== W.null) {
      const r = this._getOrReturnCtx(t);
      return (
        z(r, {
          code: M.invalid_type,
          expected: W.null,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
ni.create = (e) => new ni({ typeName: te.ZodNull, ...ae(e) });
class us extends ue {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return lt(t.data);
  }
}
us.create = (e) => new us({ typeName: te.ZodAny, ...ae(e) });
class hr extends ue {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return lt(t.data);
  }
}
hr.create = (e) => new hr({ typeName: te.ZodUnknown, ...ae(e) });
class _n extends ue {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      z(n, { code: M.invalid_type, expected: W.never, received: n.parsedType }),
      re
    );
  }
}
_n.create = (e) => new _n({ typeName: te.ZodNever, ...ae(e) });
class Co extends ue {
  _parse(t) {
    if (this._getType(t) !== W.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        z(r, {
          code: M.invalid_type,
          expected: W.void,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
Co.create = (e) => new Co({ typeName: te.ZodVoid, ...ae(e) });
class Vt extends ue {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      s = this._def;
    if (n.parsedType !== W.array)
      return (
        z(n, {
          code: M.invalid_type,
          expected: W.array,
          received: n.parsedType,
        }),
        re
      );
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value,
        a = n.data.length < s.exactLength.value;
      (o || a) &&
        (z(n, {
          code: o ? M.too_big : M.too_small,
          minimum: a ? s.exactLength.value : void 0,
          maximum: o ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (s.minLength !== null &&
        n.data.length < s.minLength.value &&
        (z(n, {
          code: M.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        r.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        (z(n, {
          code: M.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((o, a) => s.type._parseAsync(new ln(n, o, n.path, a)))
      ).then((o) => st.mergeArray(r, o));
    const i = [...n.data].map((o, a) =>
      s.type._parseSync(new ln(n, o, n.path, a))
    );
    return st.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Vt({
      ...this._def,
      minLength: { value: t, message: X.toString(n) },
    });
  }
  max(t, n) {
    return new Vt({
      ...this._def,
      maxLength: { value: t, message: X.toString(n) },
    });
  }
  length(t, n) {
    return new Vt({
      ...this._def,
      exactLength: { value: t, message: X.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Vt.create = (e, t) =>
  new Vt({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: te.ZodArray,
    ...ae(t),
  });
function Fr(e) {
  if (e instanceof Pe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = sn.create(Fr(r));
    }
    return new Pe({ ...e._def, shape: () => t });
  } else
    return e instanceof Vt
      ? new Vt({ ...e._def, type: Fr(e.element) })
      : e instanceof sn
      ? sn.create(Fr(e.unwrap()))
      : e instanceof qn
      ? qn.create(Fr(e.unwrap()))
      : e instanceof un
      ? un.create(e.items.map((t) => Fr(t)))
      : e;
}
class Pe extends ue {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = ye.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== W.object) {
      const l = this._getOrReturnCtx(t);
      return (
        z(l, {
          code: M.invalid_type,
          expected: W.object,
          received: l.parsedType,
        }),
        re
      );
    }
    const { status: r, ctx: s } = this._processInputParams(t),
      { shape: i, keys: o } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof _n && this._def.unknownKeys === "strip")
    )
      for (const l in s.data) o.includes(l) || a.push(l);
    const c = [];
    for (const l of o) {
      const u = i[l],
        d = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new ln(s, d, s.path, l)),
        alwaysSet: l in s.data,
      });
    }
    if (this._def.catchall instanceof _n) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of a)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] },
          });
      else if (l === "strict")
        a.length > 0 &&
          (z(s, { code: M.unrecognized_keys, keys: a }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of a) {
        const d = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(new ln(s, d, s.path, u)),
          alwaysSet: u in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const u of c) {
              const d = await u.key,
                f = await u.value;
              l.push({ key: d, value: f, alwaysSet: u.alwaysSet });
            }
            return l;
          })
          .then((l) => st.mergeObjectSync(r, l))
      : st.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      X.errToObj,
      new Pe({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var s, i, o, a;
                const c =
                  (o =
                    (i = (s = this._def).errorMap) === null || i === void 0
                      ? void 0
                      : i.call(s, n, r).message) !== null && o !== void 0
                    ? o
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (a = X.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : c,
                    }
                  : { message: c };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Pe({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Pe({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new Pe({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new Pe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: te.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new Pe({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      ye.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      ye.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Fr(this);
  }
  partial(t) {
    const n = {};
    return (
      ye.objectKeys(this.shape).forEach((r) => {
        const s = this.shape[r];
        t && !t[r] ? (n[r] = s) : (n[r] = s.optional());
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      ye.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let i = this.shape[r];
          for (; i instanceof sn; ) i = i._def.innerType;
          n[r] = i;
        }
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return Mm(ye.objectKeys(this.shape));
  }
}
Pe.create = (e, t) =>
  new Pe({
    shape: () => e,
    unknownKeys: "strip",
    catchall: _n.create(),
    typeName: te.ZodObject,
    ...ae(t),
  });
Pe.strictCreate = (e, t) =>
  new Pe({
    shape: () => e,
    unknownKeys: "strict",
    catchall: _n.create(),
    typeName: te.ZodObject,
    ...ae(t),
  });
Pe.lazycreate = (e, t) =>
  new Pe({
    shape: e,
    unknownKeys: "strip",
    catchall: _n.create(),
    typeName: te.ZodObject,
    ...ae(t),
  });
class ri extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function s(i) {
      for (const a of i) if (a.result.status === "valid") return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new xt(a.ctx.common.issues));
      return z(n, { code: M.invalid_union, unionErrors: o }), re;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (i) => {
          const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: n.data,
              path: n.path,
              parent: o,
            }),
            ctx: o,
          };
        })
      ).then(s);
    {
      let i;
      const o = [];
      for (const c of r) {
        const l = { ...n, common: { ...n.common, issues: [] }, parent: null },
          u = c._parseSync({ data: n.data, path: n.path, parent: l });
        if (u.status === "valid") return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: l }),
          l.common.issues.length && o.push(l.common.issues);
      }
      if (i) return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((c) => new xt(c));
      return z(n, { code: M.invalid_union, unionErrors: a }), re;
    }
  }
  get options() {
    return this._def.options;
  }
}
ri.create = (e, t) => new ri({ options: e, typeName: te.ZodUnion, ...ae(t) });
const mn = (e) =>
  e instanceof oi
    ? mn(e.schema)
    : e instanceof Wt
    ? mn(e.innerType())
    : e instanceof ai
    ? [e.value]
    : e instanceof Hn
    ? e.options
    : e instanceof ci
    ? ye.objectValues(e.enum)
    : e instanceof li
    ? mn(e._def.innerType)
    : e instanceof ti
    ? [void 0]
    : e instanceof ni
    ? [null]
    : e instanceof sn
    ? [void 0, ...mn(e.unwrap())]
    : e instanceof qn
    ? [null, ...mn(e.unwrap())]
    : e instanceof Rl || e instanceof di
    ? mn(e.unwrap())
    : e instanceof ui
    ? mn(e._def.innerType)
    : [];
class Qo extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== W.object)
      return (
        z(n, {
          code: M.invalid_type,
          expected: W.object,
          received: n.parsedType,
        }),
        re
      );
    const r = this.discriminator,
      s = n.data[r],
      i = this.optionsMap.get(s);
    return i
      ? n.common.async
        ? i._parseAsync({ data: n.data, path: n.path, parent: n })
        : i._parseSync({ data: n.data, path: n.path, parent: n })
      : (z(n, {
          code: M.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        re);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const s = new Map();
    for (const i of n) {
      const o = mn(i.shape[t]);
      if (!o.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const a of o) {
        if (s.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              a
            )}`
          );
        s.set(a, i);
      }
    }
    return new Qo({
      typeName: te.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...ae(r),
    });
  }
}
function pc(e, t) {
  const n = yn(e),
    r = yn(t);
  if (e === t) return { valid: !0, data: e };
  if (n === W.object && r === W.object) {
    const s = ye.objectKeys(t),
      i = ye.objectKeys(e).filter((a) => s.indexOf(a) !== -1),
      o = { ...e, ...t };
    for (const a of i) {
      const c = pc(e[a], t[a]);
      if (!c.valid) return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (n === W.array && r === W.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i],
        a = t[i],
        c = pc(o, a);
      if (!c.valid) return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return n === W.date && r === W.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class si extends ue {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = (i, o) => {
        if (fc(i) || fc(o)) return re;
        const a = pc(i.value, o.value);
        return a.valid
          ? ((hc(i) || hc(o)) && n.dirty(), { status: n.value, value: a.data })
          : (z(r, { code: M.invalid_intersection_types }), re);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([i, o]) => s(i, o))
      : s(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
}
si.create = (e, t, n) =>
  new si({ left: e, right: t, typeName: te.ZodIntersection, ...ae(n) });
class un extends ue {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== W.array)
      return (
        z(r, {
          code: M.invalid_type,
          expected: W.array,
          received: r.parsedType,
        }),
        re
      );
    if (r.data.length < this._def.items.length)
      return (
        z(r, {
          code: M.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        re
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (z(r, {
        code: M.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...r.data]
      .map((o, a) => {
        const c = this._def.items[a] || this._def.rest;
        return c ? c._parse(new ln(r, o, r.path, a)) : null;
      })
      .filter((o) => !!o);
    return r.common.async
      ? Promise.all(i).then((o) => st.mergeArray(n, o))
      : st.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new un({ ...this._def, rest: t });
  }
}
un.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new un({ items: e, typeName: te.ZodTuple, rest: null, ...ae(t) });
};
class ii extends ue {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== W.object)
      return (
        z(r, {
          code: M.invalid_type,
          expected: W.object,
          received: r.parsedType,
        }),
        re
      );
    const s = [],
      i = this._def.keyType,
      o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new ln(r, a, r.path, a)),
        value: o._parse(new ln(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data,
      });
    return r.common.async
      ? st.mergeObjectAsync(n, s)
      : st.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ue
      ? new ii({ keyType: t, valueType: n, typeName: te.ZodRecord, ...ae(r) })
      : new ii({
          keyType: Lt.create(),
          valueType: t,
          typeName: te.ZodRecord,
          ...ae(n),
        });
  }
}
class Eo extends ue {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== W.map)
      return (
        z(r, { code: M.invalid_type, expected: W.map, received: r.parsedType }),
        re
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...r.data.entries()].map(([a, c], l) => ({
        key: s._parse(new ln(r, a, r.path, [l, "key"])),
        value: i._parse(new ln(r, c, r.path, [l, "value"])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key,
            u = await c.value;
          if (l.status === "aborted" || u.status === "aborted") return re;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(),
            a.set(l.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = new Map();
      for (const c of o) {
        const l = c.key,
          u = c.value;
        if (l.status === "aborted" || u.status === "aborted") return re;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(),
          a.set(l.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Eo.create = (e, t, n) =>
  new Eo({ valueType: t, keyType: e, typeName: te.ZodMap, ...ae(n) });
class Sr extends ue {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== W.set)
      return (
        z(r, { code: M.invalid_type, expected: W.set, received: r.parsedType }),
        re
      );
    const s = this._def;
    s.minSize !== null &&
      r.data.size < s.minSize.value &&
      (z(r, {
        code: M.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        r.data.size > s.maxSize.value &&
        (z(r, {
          code: M.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        n.dirty());
    const i = this._def.valueType;
    function o(c) {
      const l = new Set();
      for (const u of c) {
        if (u.status === "aborted") return re;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const a = [...r.data.values()].map((c, l) =>
      i._parse(new ln(r, c, r.path, l))
    );
    return r.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(t, n) {
    return new Sr({
      ...this._def,
      minSize: { value: t, message: X.toString(n) },
    });
  }
  max(t, n) {
    return new Sr({
      ...this._def,
      maxSize: { value: t, message: X.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Sr.create = (e, t) =>
  new Sr({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: te.ZodSet,
    ...ae(t),
  });
class qr extends ue {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== W.function)
      return (
        z(n, {
          code: M.invalid_type,
          expected: W.function,
          received: n.parsedType,
        }),
        re
      );
    function r(a, c) {
      return wo({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          xo(),
          ls,
        ].filter((l) => !!l),
        issueData: { code: M.invalid_arguments, argumentsError: c },
      });
    }
    function s(a, c) {
      return wo({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          xo(),
          ls,
        ].filter((l) => !!l),
        issueData: { code: M.invalid_return_type, returnTypeError: c },
      });
    }
    const i = { errorMap: n.common.contextualErrorMap },
      o = n.data;
    if (this._def.returns instanceof ds) {
      const a = this;
      return lt(async function (...c) {
        const l = new xt([]),
          u = await a._def.args.parseAsync(c, i).catch((m) => {
            throw (l.addIssue(r(c, m)), l);
          }),
          d = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(d, i).catch((m) => {
          throw (l.addIssue(s(d, m)), l);
        });
      });
    } else {
      const a = this;
      return lt(function (...c) {
        const l = a._def.args.safeParse(c, i);
        if (!l.success) throw new xt([r(c, l.error)]);
        const u = Reflect.apply(o, this, l.data),
          d = a._def.returns.safeParse(u, i);
        if (!d.success) throw new xt([s(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new qr({ ...this._def, args: un.create(t).rest(hr.create()) });
  }
  returns(t) {
    return new qr({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new qr({
      args: t || un.create([]).rest(hr.create()),
      returns: n || hr.create(),
      typeName: te.ZodFunction,
      ...ae(r),
    });
  }
}
class oi extends ue {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
oi.create = (e, t) => new oi({ getter: e, typeName: te.ZodLazy, ...ae(t) });
class ai extends ue {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        z(n, {
          received: n.data,
          code: M.invalid_literal,
          expected: this._def.value,
        }),
        re
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ai.create = (e, t) => new ai({ value: e, typeName: te.ZodLiteral, ...ae(t) });
function Mm(e, t) {
  return new Hn({ values: e, typeName: te.ZodEnum, ...ae(t) });
}
class Hn extends ue {
  constructor() {
    super(...arguments), js.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        z(n, {
          expected: ye.joinValues(r),
          received: n.parsedType,
          code: M.invalid_type,
        }),
        re
      );
    }
    if (
      (So(this, js) || Nm(this, js, new Set(this._def.values)),
      !So(this, js).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        z(n, { received: n.data, code: M.invalid_enum_value, options: r }), re
      );
    }
    return lt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Hn.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return Hn.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
js = new WeakMap();
Hn.create = Mm;
class ci extends ue {
  constructor() {
    super(...arguments), Ds.set(this, void 0);
  }
  _parse(t) {
    const n = ye.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== W.string && r.parsedType !== W.number) {
      const s = ye.objectValues(n);
      return (
        z(r, {
          expected: ye.joinValues(s),
          received: r.parsedType,
          code: M.invalid_type,
        }),
        re
      );
    }
    if (
      (So(this, Ds) ||
        Nm(this, Ds, new Set(ye.getValidEnumValues(this._def.values))),
      !So(this, Ds).has(t.data))
    ) {
      const s = ye.objectValues(n);
      return (
        z(r, { received: r.data, code: M.invalid_enum_value, options: s }), re
      );
    }
    return lt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ds = new WeakMap();
ci.create = (e, t) =>
  new ci({ values: e, typeName: te.ZodNativeEnum, ...ae(t) });
class ds extends ue {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== W.promise && n.common.async === !1)
      return (
        z(n, {
          code: M.invalid_type,
          expected: W.promise,
          received: n.parsedType,
        }),
        re
      );
    const r = n.parsedType === W.promise ? n.data : Promise.resolve(n.data);
    return lt(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
ds.create = (e, t) => new ds({ type: e, typeName: te.ZodPromise, ...ae(t) });
class Wt extends ue {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === te.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = this._def.effect || null,
      i = {
        addIssue: (o) => {
          z(r, o), o.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
      const o = s.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === "aborted") return re;
          const c = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r,
          });
          return c.status === "aborted"
            ? re
            : c.status === "dirty" || n.value === "dirty"
            ? Ir(c.value)
            : c;
        });
      {
        if (n.value === "aborted") return re;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? re
          : a.status === "dirty" || n.value === "dirty"
          ? Ir(a.value)
          : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const c = s.refinement(a, i);
        if (r.common.async) return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? re
          : (a.status === "dirty" && n.dirty(),
            o(a.value),
            { status: n.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            a.status === "aborted"
              ? re
              : (a.status === "dirty" && n.dirty(),
                o(a.value).then(() => ({ status: n.value, value: a.value })))
          );
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!xr(o)) return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((o) =>
            xr(o)
              ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : o
          );
    ye.assertNever(s);
  }
}
Wt.create = (e, t, n) =>
  new Wt({ schema: e, typeName: te.ZodEffects, effect: t, ...ae(n) });
Wt.createWithPreprocess = (e, t, n) =>
  new Wt({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: te.ZodEffects,
    ...ae(n),
  });
class sn extends ue {
  _parse(t) {
    return this._getType(t) === W.undefined
      ? lt(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
sn.create = (e, t) =>
  new sn({ innerType: e, typeName: te.ZodOptional, ...ae(t) });
class qn extends ue {
  _parse(t) {
    return this._getType(t) === W.null
      ? lt(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
qn.create = (e, t) =>
  new qn({ innerType: e, typeName: te.ZodNullable, ...ae(t) });
class li extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === W.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
li.create = (e, t) =>
  new li({
    innerType: e,
    typeName: te.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...ae(t),
  });
class ui extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Js(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new xt(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new xt(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ui.create = (e, t) =>
  new ui({
    innerType: e,
    typeName: te.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...ae(t),
  });
class To extends ue {
  _parse(t) {
    if (this._getType(t) !== W.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        z(r, { code: M.invalid_type, expected: W.nan, received: r.parsedType }),
        re
      );
    }
    return { status: "valid", value: t.data };
  }
}
To.create = (e) => new To({ typeName: te.ZodNaN, ...ae(e) });
const s_ = Symbol("zod_brand");
class Rl extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class ki extends ue {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return i.status === "aborted"
          ? re
          : i.status === "dirty"
          ? (n.dirty(), Ir(i.value))
          : this._def.out._parseAsync({
              data: i.value,
              path: r.path,
              parent: r,
            });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return s.status === "aborted"
        ? re
        : s.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new ki({ in: t, out: n, typeName: te.ZodPipeline });
  }
}
class di extends ue {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (s) => (xr(s) && (s.value = Object.freeze(s.value)), s);
    return Js(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
di.create = (e, t) =>
  new di({ innerType: e, typeName: te.ZodReadonly, ...ae(t) });
function Fm(e, t = {}, n) {
  return e
    ? us.create().superRefine((r, s) => {
        var i, o;
        if (!e(r)) {
          const a =
              typeof t == "function"
                ? t(r)
                : typeof t == "string"
                ? { message: t }
                : t,
            c =
              (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null &&
              o !== void 0
                ? o
                : !0,
            l = typeof a == "string" ? { message: a } : a;
          s.addIssue({ code: "custom", ...l, fatal: c });
        }
      })
    : us.create();
}
const i_ = { object: Pe.lazycreate };
var te;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(te || (te = {}));
const o_ = (e, t = { message: `Input not instance of ${e.name}` }) =>
    Fm((n) => n instanceof e, t),
  Im = Lt.create,
  Lm = zn.create,
  a_ = To.create,
  c_ = Wn.create,
  Vm = ei.create,
  l_ = wr.create,
  u_ = _o.create,
  d_ = ti.create,
  f_ = ni.create,
  h_ = us.create,
  p_ = hr.create,
  m_ = _n.create,
  g_ = Co.create,
  y_ = Vt.create,
  v_ = Pe.create,
  b_ = Pe.strictCreate,
  x_ = ri.create,
  w_ = Qo.create,
  S_ = si.create,
  __ = un.create,
  C_ = ii.create,
  E_ = Eo.create,
  T_ = Sr.create,
  A_ = qr.create,
  R_ = oi.create,
  P_ = ai.create,
  k_ = Hn.create,
  N_ = ci.create,
  O_ = ds.create,
  bd = Wt.create,
  j_ = sn.create,
  D_ = qn.create,
  M_ = Wt.createWithPreprocess,
  F_ = ki.create,
  I_ = () => Im().optional(),
  L_ = () => Lm().optional(),
  V_ = () => Vm().optional(),
  B_ = {
    string: (e) => Lt.create({ ...e, coerce: !0 }),
    number: (e) => zn.create({ ...e, coerce: !0 }),
    boolean: (e) => ei.create({ ...e, coerce: !0 }),
    bigint: (e) => Wn.create({ ...e, coerce: !0 }),
    date: (e) => wr.create({ ...e, coerce: !0 }),
  },
  U_ = re;
var Ee = Object.freeze({
  __proto__: null,
  defaultErrorMap: ls,
  setErrorMap: MS,
  getErrorMap: xo,
  makeIssue: wo,
  EMPTY_PATH: FS,
  addIssueToContext: z,
  ParseStatus: st,
  INVALID: re,
  DIRTY: Ir,
  OK: lt,
  isAborted: fc,
  isDirty: hc,
  isValid: xr,
  isAsync: Js,
  get util() {
    return ye;
  },
  get objectUtil() {
    return dc;
  },
  ZodParsedType: W,
  getParsedType: yn,
  ZodType: ue,
  datetimeRegex: Dm,
  ZodString: Lt,
  ZodNumber: zn,
  ZodBigInt: Wn,
  ZodBoolean: ei,
  ZodDate: wr,
  ZodSymbol: _o,
  ZodUndefined: ti,
  ZodNull: ni,
  ZodAny: us,
  ZodUnknown: hr,
  ZodNever: _n,
  ZodVoid: Co,
  ZodArray: Vt,
  ZodObject: Pe,
  ZodUnion: ri,
  ZodDiscriminatedUnion: Qo,
  ZodIntersection: si,
  ZodTuple: un,
  ZodRecord: ii,
  ZodMap: Eo,
  ZodSet: Sr,
  ZodFunction: qr,
  ZodLazy: oi,
  ZodLiteral: ai,
  ZodEnum: Hn,
  ZodNativeEnum: ci,
  ZodPromise: ds,
  ZodEffects: Wt,
  ZodTransformer: Wt,
  ZodOptional: sn,
  ZodNullable: qn,
  ZodDefault: li,
  ZodCatch: ui,
  ZodNaN: To,
  BRAND: s_,
  ZodBranded: Rl,
  ZodPipeline: ki,
  ZodReadonly: di,
  custom: Fm,
  Schema: ue,
  ZodSchema: ue,
  late: i_,
  get ZodFirstPartyTypeKind() {
    return te;
  },
  coerce: B_,
  any: h_,
  array: y_,
  bigint: c_,
  boolean: Vm,
  date: l_,
  discriminatedUnion: w_,
  effect: bd,
  enum: k_,
  function: A_,
  instanceof: o_,
  intersection: S_,
  lazy: R_,
  literal: P_,
  map: E_,
  nan: a_,
  nativeEnum: N_,
  never: m_,
  null: f_,
  nullable: D_,
  number: Lm,
  object: v_,
  oboolean: V_,
  onumber: L_,
  optional: j_,
  ostring: I_,
  pipeline: F_,
  preprocess: M_,
  promise: O_,
  record: C_,
  set: T_,
  strictObject: b_,
  string: Im,
  symbol: u_,
  transformer: bd,
  tuple: __,
  undefined: d_,
  union: x_,
  unknown: p_,
  void: g_,
  NEVER: U_,
  ZodIssueCode: M,
  quotelessJson: DS,
  ZodError: xt,
});
const Pa = (e, t) => (Re((r) => r.lang) === "ru" ? e : t);
function Bm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: $_ } = Object.prototype,
  { getPrototypeOf: Pl } = Object,
  Xo = ((e) => (t) => {
    const n = $_.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  qt = (e) => ((e = e.toLowerCase()), (t) => Xo(t) === e),
  Yo = (e) => (t) => typeof t === e,
  { isArray: bs } = Array,
  fi = Yo("undefined");
function z_(e) {
  return (
    e !== null &&
    !fi(e) &&
    e.constructor !== null &&
    !fi(e.constructor) &&
    wt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Um = qt("ArrayBuffer");
function W_(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Um(e.buffer)),
    t
  );
}
const H_ = Yo("string"),
  wt = Yo("function"),
  $m = Yo("number"),
  Jo = (e) => e !== null && typeof e == "object",
  q_ = (e) => e === !0 || e === !1,
  so = (e) => {
    if (Xo(e) !== "object") return !1;
    const t = Pl(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  G_ = qt("Date"),
  Z_ = qt("File"),
  K_ = qt("Blob"),
  Q_ = qt("FileList"),
  X_ = (e) => Jo(e) && wt(e.pipe),
  Y_ = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (wt(e.append) &&
          ((t = Xo(e)) === "formdata" ||
            (t === "object" &&
              wt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  J_ = qt("URLSearchParams"),
  [eC, tC, nC, rC] = ["ReadableStream", "Request", "Response", "Headers"].map(
    qt
  ),
  sC = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ni(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), bs(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function zm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const nr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Wm = (e) => !fi(e) && e !== nr;
function mc() {
  const { caseless: e } = (Wm(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && zm(t, s)) || s;
      so(t[i]) && so(r)
        ? (t[i] = mc(t[i], r))
        : so(r)
        ? (t[i] = mc({}, r))
        : bs(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Ni(arguments[r], n);
  return t;
}
const iC = (e, t, n, { allOwnKeys: r } = {}) => (
    Ni(
      t,
      (s, i) => {
        n && wt(s) ? (e[i] = Bm(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  oC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  aC = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  cC = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && Pl(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  lC = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  uC = (e) => {
    if (!e) return null;
    if (bs(e)) return e;
    let t = e.length;
    if (!$m(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  dC = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Pl(Uint8Array)),
  fC = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  hC = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  pC = qt("HTMLFormElement"),
  mC = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  xd = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  gC = qt("RegExp"),
  Hm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ni(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  yC = (e) => {
    Hm(e, (t, n) => {
      if (wt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (wt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  vC = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return bs(e) ? r(e) : r(String(e).split(t)), n;
  },
  bC = () => {},
  xC = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  ka = "abcdefghijklmnopqrstuvwxyz",
  wd = "0123456789",
  qm = { DIGIT: wd, ALPHA: ka, ALPHA_DIGIT: ka + ka.toUpperCase() + wd },
  wC = (e = 16, t = qm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function SC(e) {
  return !!(
    e &&
    wt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const _C = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Jo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = bs(r) ? [] : {};
            return (
              Ni(r, (o, a) => {
                const c = n(o, s + 1);
                !fi(c) && (i[a] = c);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  CC = qt("AsyncFunction"),
  EC = (e) => e && (Jo(e) || wt(e)) && wt(e.then) && wt(e.catch),
  Gm = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          nr.addEventListener(
            "message",
            ({ source: s, data: i }) => {
              s === nr && i === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), nr.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    wt(nr.postMessage)
  ),
  TC =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(nr)
      : (typeof process < "u" && process.nextTick) || Gm,
  k = {
    isArray: bs,
    isArrayBuffer: Um,
    isBuffer: z_,
    isFormData: Y_,
    isArrayBufferView: W_,
    isString: H_,
    isNumber: $m,
    isBoolean: q_,
    isObject: Jo,
    isPlainObject: so,
    isReadableStream: eC,
    isRequest: tC,
    isResponse: nC,
    isHeaders: rC,
    isUndefined: fi,
    isDate: G_,
    isFile: Z_,
    isBlob: K_,
    isRegExp: gC,
    isFunction: wt,
    isStream: X_,
    isURLSearchParams: J_,
    isTypedArray: dC,
    isFileList: Q_,
    forEach: Ni,
    merge: mc,
    extend: iC,
    trim: sC,
    stripBOM: oC,
    inherits: aC,
    toFlatObject: cC,
    kindOf: Xo,
    kindOfTest: qt,
    endsWith: lC,
    toArray: uC,
    forEachEntry: fC,
    matchAll: hC,
    isHTMLForm: pC,
    hasOwnProperty: xd,
    hasOwnProp: xd,
    reduceDescriptors: Hm,
    freezeMethods: yC,
    toObjectSet: vC,
    toCamelCase: mC,
    noop: bC,
    toFiniteNumber: xC,
    findKey: zm,
    global: nr,
    isContextDefined: Wm,
    ALPHABET: qm,
    generateString: wC,
    isSpecCompliantForm: SC,
    toJSONObject: _C,
    isAsyncFn: CC,
    isThenable: EC,
    setImmediate: Gm,
    asap: TC,
  };
function oe(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
k.inherits(oe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Zm = oe.prototype,
  Km = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Km[e] = { value: e };
});
Object.defineProperties(oe, Km);
Object.defineProperty(Zm, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, s, i) => {
  const o = Object.create(Zm);
  return (
    k.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    oe.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const AC = null;
function gc(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function Qm(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Sd(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = Qm(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function RC(e) {
  return k.isArray(e) && !e.some(gc);
}
const PC = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ea(e, t, n) {
  if (!k.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, y) {
        return !k.isUndefined(y[h]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || u,
    i = n.dots,
    o = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(s)) throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (k.isDate(g)) return g.toISOString();
    if (!c && k.isBlob(g))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(g) || k.isTypedArray(g)
      ? c && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function u(g, h, y) {
    let b = g;
    if (g && !y && typeof g == "object") {
      if (k.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (k.isArray(g) && RC(g)) ||
        ((k.isFileList(g) || k.endsWith(h, "[]")) && (b = k.toArray(g)))
      )
        return (
          (h = Qm(h)),
          b.forEach(function (w, C) {
            !(k.isUndefined(w) || w === null) &&
              t.append(
                o === !0 ? Sd([h], C, i) : o === null ? h : h + "[]",
                l(w)
              );
          }),
          !1
        );
    }
    return gc(g) ? !0 : (t.append(Sd(y, h, i), l(g)), !1);
  }
  const d = [],
    f = Object.assign(PC, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: gc,
    });
  function m(g, h) {
    if (!k.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g),
        k.forEach(g, function (b, x) {
          (!(k.isUndefined(b) || b === null) &&
            s.call(t, b, k.isString(x) ? x.trim() : x, h, f)) === !0 &&
            m(b, h ? h.concat(x) : [x]);
        }),
        d.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function _d(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function kl(e, t) {
  (this._pairs = []), e && ea(e, this, t);
}
const Xm = kl.prototype;
Xm.append = function (t, n) {
  this._pairs.push([t, n]);
};
Xm.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, _d);
      }
    : _d;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function kC(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ym(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || kC;
  k.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = k.isURLSearchParams(t) ? t.toString() : new kl(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Cd {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Jm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  NC = typeof URLSearchParams < "u" ? URLSearchParams : kl,
  OC = typeof FormData < "u" ? FormData : null,
  jC = typeof Blob < "u" ? Blob : null,
  DC = {
    isBrowser: !0,
    classes: { URLSearchParams: NC, FormData: OC, Blob: jC },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Nl = typeof window < "u" && typeof document < "u",
  yc = (typeof navigator == "object" && navigator) || void 0,
  MC =
    Nl &&
    (!yc || ["ReactNative", "NativeScript", "NS"].indexOf(yc.product) < 0),
  FC =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  IC = (Nl && window.location.href) || "http://localhost",
  LC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Nl,
        hasStandardBrowserEnv: MC,
        hasStandardBrowserWebWorkerEnv: FC,
        navigator: yc,
        origin: IC,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nt = { ...LC, ...DC };
function VC(e, t) {
  return ea(
    e,
    new nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return nt.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function BC(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function UC(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function eg(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      c = i >= n.length;
    return (
      (o = !o && k.isArray(s) ? s.length : o),
      c
        ? (k.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !k.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && k.isArray(s[o]) && (s[o] = UC(s[o])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, s) => {
        t(BC(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function $C(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Oi = {
  transitional: Jm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = k.isObject(t);
      if ((i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return s ? JSON.stringify(eg(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t) ||
        k.isReadableStream(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return VC(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return ea(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), $C(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Oi.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (k.isResponse(t) || k.isReadableStream(t)) return t;
      if (t && k.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? oe.from(a, oe.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Oi.headers[e] = {};
});
const zC = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  WC = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && zC[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Ed = Symbol("internals");
function Ns(e) {
  return e && String(e).trim().toLowerCase();
}
function io(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(io) : String(e);
}
function HC(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const qC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Na(e, t, n, r, s) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function GC(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ZC(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class pt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, c, l) {
      const u = Ns(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = k.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || (l === void 0 && s[d] !== !1)) &&
        (s[d || c] = io(a));
    }
    const o = (a, c) => k.forEach(a, (l, u) => i(l, u, c));
    if (k.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (k.isString(t) && (t = t.trim()) && !qC(t)) o(WC(t), n);
    else if (k.isHeaders(t)) for (const [a, c] of t.entries()) i(c, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ns(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return HC(s);
        if (k.isFunction(n)) return n.call(this, s, r);
        if (k.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ns(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Na(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = Ns(o)), o)) {
        const a = k.findKey(r, o);
        a && (!n || Na(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Na(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (s, i) => {
        const o = k.findKey(r, i);
        if (o) {
          (n[o] = io(s)), delete n[i];
          return;
        }
        const a = t ? GC(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = io(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ed] = this[Ed] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = Ns(o);
      r[a] || (ZC(s, o), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
pt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(pt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(pt);
function Oa(e, t) {
  const n = this || Oi,
    r = t || n,
    s = pt.from(r.headers);
  let i = r.data;
  return (
    k.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function tg(e) {
  return !!(e && e.__CANCEL__);
}
function xs(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(xs, oe, { __CANCEL__: !0 });
function ng(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new oe(
          "Request failed with status code " + n.status,
          [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function KC(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function QC(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const l = Date.now(),
        u = r[i];
      o || (o = l), (n[s] = c), (r[s] = l);
      let d = i,
        f = 0;
      for (; d !== s; ) (f += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), l - o < t)) return;
      const m = u && l - u;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function XC(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (l, u = Date.now()) => {
    (n = u), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? o(l, u)
        : ((s = l),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - d)));
    },
    () => s && o(s),
  ];
}
const Ao = (e, t, n = 3) => {
    let r = 0;
    const s = QC(50, 250);
    return XC((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        c = o - r,
        l = s(c),
        u = o <= a;
      r = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: c,
        rate: l || void 0,
        estimated: l && a && u ? (a - o) / l : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  Td = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Ad =
    (e) =>
    (...t) =>
      k.asap(() => e(...t)),
  YC = nt.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, nt.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(nt.origin),
        nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent)
      )
    : () => !0,
  JC = nt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          k.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            k.isString(r) && o.push("path=" + r),
            k.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function eE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tE(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function rg(e, t) {
  return e && !eE(t) ? tE(e, t) : t;
}
const Rd = (e) => (e instanceof pt ? { ...e } : e);
function _r(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, f) {
    return k.isPlainObject(l) && k.isPlainObject(u)
      ? k.merge.call({ caseless: f }, l, u)
      : k.isPlainObject(u)
      ? k.merge({}, u)
      : k.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, d, f) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(l)) return r(void 0, l, d, f);
    } else return r(l, u, d, f);
  }
  function i(l, u) {
    if (!k.isUndefined(u)) return r(void 0, u);
  }
  function o(l, u) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, d) {
    if (d in t) return r(l, u);
    if (d in e) return r(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, u, d) => s(Rd(l), Rd(u), d, !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = c[u] || s,
        f = d(e[u], t[u], u);
      (k.isUndefined(f) && d !== a) || (n[u] = f);
    }),
    n
  );
}
const sg = (e) => {
    const t = _r({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = pt.from(o)),
      (t.url = Ym(rg(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let c;
    if (k.isFormData(n)) {
      if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((c = o.getContentType()) !== !1) {
        const [l, ...u] = c
          ? c
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([l || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      nt.hasStandardBrowserEnv &&
      (r && k.isFunction(r) && (r = r(t)), r || (r !== !1 && YC(t.url)))
    ) {
      const l = s && i && JC.read(i);
      l && o.set(s, l);
    }
    return t;
  },
  nE = typeof XMLHttpRequest < "u",
  rE =
    nE &&
    function (e) {
      return new Promise(function (n, r) {
        const s = sg(e);
        let i = s.data;
        const o = pt.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = s,
          u,
          d,
          f,
          m,
          g;
        function h() {
          m && m(),
            g && g(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener("abort", u);
        }
        let y = new XMLHttpRequest();
        y.open(s.method.toUpperCase(), s.url, !0), (y.timeout = s.timeout);
        function b() {
          if (!y) return;
          const w = pt.from(
              "getAllResponseHeaders" in y && y.getAllResponseHeaders()
            ),
            S = {
              data:
                !a || a === "text" || a === "json"
                  ? y.responseText
                  : y.response,
              status: y.status,
              statusText: y.statusText,
              headers: w,
              config: e,
              request: y,
            };
          ng(
            function (A) {
              n(A), h();
            },
            function (A) {
              r(A), h();
            },
            S
          ),
            (y = null);
        }
        "onloadend" in y
          ? (y.onloadend = b)
          : (y.onreadystatechange = function () {
              !y ||
                y.readyState !== 4 ||
                (y.status === 0 &&
                  !(y.responseURL && y.responseURL.indexOf("file:") === 0)) ||
                setTimeout(b);
            }),
          (y.onabort = function () {
            y &&
              (r(new oe("Request aborted", oe.ECONNABORTED, e, y)), (y = null));
          }),
          (y.onerror = function () {
            r(new oe("Network Error", oe.ERR_NETWORK, e, y)), (y = null);
          }),
          (y.ontimeout = function () {
            let C = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const S = s.transitional || Jm;
            s.timeoutErrorMessage && (C = s.timeoutErrorMessage),
              r(
                new oe(
                  C,
                  S.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
                  e,
                  y
                )
              ),
              (y = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in y &&
            k.forEach(o.toJSON(), function (C, S) {
              y.setRequestHeader(S, C);
            }),
          k.isUndefined(s.withCredentials) ||
            (y.withCredentials = !!s.withCredentials),
          a && a !== "json" && (y.responseType = s.responseType),
          l && (([f, g] = Ao(l, !0)), y.addEventListener("progress", f)),
          c &&
            y.upload &&
            (([d, m] = Ao(c)),
            y.upload.addEventListener("progress", d),
            y.upload.addEventListener("loadend", m)),
          (s.cancelToken || s.signal) &&
            ((u = (w) => {
              y &&
                (r(!w || w.type ? new xs(null, e, y) : w),
                y.abort(),
                (y = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal &&
              (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
        const x = KC(s.url);
        if (x && nt.protocols.indexOf(x) === -1) {
          r(new oe("Unsupported protocol " + x + ":", oe.ERR_BAD_REQUEST, e));
          return;
        }
        y.send(i || null);
      });
    },
  sE = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (l) {
        if (!s) {
          (s = !0), a();
          const u = l instanceof Error ? l : this.reason;
          r.abort(
            u instanceof oe ? u : new xs(u instanceof Error ? u.message : u)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new oe(`timeout ${t} of ms exceeded`, oe.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((l) => {
            l.unsubscribe
              ? l.unsubscribe(i)
              : l.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener("abort", i));
      const { signal: c } = r;
      return (c.unsubscribe = () => k.asap(a)), c;
    }
  },
  iE = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  oE = async function* (e, t) {
    for await (const n of aE(e)) yield* iE(n, t);
  },
  aE = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Pd = (e, t, n, r) => {
    const s = oE(e, t);
    let i = 0,
      o,
      a = (c) => {
        o || ((o = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: l, value: u } = await s.next();
            if (l) {
              a(), c.close();
              return;
            }
            let d = u.byteLength;
            if (n) {
              let f = (i += d);
              n(f);
            }
            c.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (a(l), l);
          }
        },
        cancel(c) {
          return a(c), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ta =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ig = ta && typeof ReadableStream == "function",
  cE =
    ta &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  og = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  lE =
    ig &&
    og(() => {
      let e = !1;
      const t = new Request(nt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  kd = 64 * 1024,
  vc = ig && og(() => k.isReadableStream(new Response("").body)),
  Ro = { stream: vc && ((e) => e.body) };
ta &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ro[t] &&
        (Ro[t] = k.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new oe(
                `Response type '${t}' is not supported`,
                oe.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const uE = async (e) => {
    if (e == null) return 0;
    if (k.isBlob(e)) return e.size;
    if (k.isSpecCompliantForm(e))
      return (
        await new Request(nt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (k.isArrayBufferView(e) || k.isArrayBuffer(e)) return e.byteLength;
    if ((k.isURLSearchParams(e) && (e = e + ""), k.isString(e)))
      return (await cE(e)).byteLength;
  },
  dE = async (e, t) => {
    const n = k.toFiniteNumber(e.getContentLength());
    return n ?? uE(t);
  },
  fE =
    ta &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: c,
        responseType: l,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = sg(e);
      l = l ? (l + "").toLowerCase() : "text";
      let m = sE([s, i && i.toAbortSignal()], o),
        g;
      const h =
        m &&
        m.unsubscribe &&
        (() => {
          m.unsubscribe();
        });
      let y;
      try {
        if (
          c &&
          lE &&
          n !== "get" &&
          n !== "head" &&
          (y = await dE(u, r)) !== 0
        ) {
          let S = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (k.isFormData(r) &&
              (R = S.headers.get("content-type")) &&
              u.setContentType(R),
            S.body)
          ) {
            const [A, T] = Td(y, Ao(Ad(c)));
            r = Pd(S.body, kd, A, T);
          }
        }
        k.isString(d) || (d = d ? "include" : "omit");
        const b = "credentials" in Request.prototype;
        g = new Request(t, {
          ...f,
          signal: m,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: b ? d : void 0,
        });
        let x = await fetch(g);
        const w = vc && (l === "stream" || l === "response");
        if (vc && (a || (w && h))) {
          const S = {};
          ["status", "statusText", "headers"].forEach((O) => {
            S[O] = x[O];
          });
          const R = k.toFiniteNumber(x.headers.get("content-length")),
            [A, T] = (a && Td(R, Ao(Ad(a), !0))) || [];
          x = new Response(
            Pd(x.body, kd, A, () => {
              T && T(), h && h();
            }),
            S
          );
        }
        l = l || "text";
        let C = await Ro[k.findKey(Ro, l) || "text"](x, e);
        return (
          !w && h && h(),
          await new Promise((S, R) => {
            ng(S, R, {
              data: C,
              headers: pt.from(x.headers),
              status: x.status,
              statusText: x.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (b) {
        throw (
          (h && h(),
          b && b.name === "TypeError" && /fetch/i.test(b.message)
            ? Object.assign(new oe("Network Error", oe.ERR_NETWORK, e, g), {
                cause: b.cause || b,
              })
            : oe.from(b, b && b.code, e, g))
        );
      }
    }),
  bc = { http: AC, xhr: rE, fetch: fE };
k.forEach(bc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Nd = (e) => `- ${e}`,
  hE = (e) => k.isFunction(e) || e === null || e === !1,
  ag = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((r = n),
          !hE(n) && ((r = bc[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new oe(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([a, c]) =>
            `adapter ${a} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(Nd).join(`
`)
            : " " + Nd(i[0])
          : "as no adapter specified";
        throw new oe(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: bc,
  };
function ja(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new xs(null, e);
}
function Od(e) {
  return (
    ja(e),
    (e.headers = pt.from(e.headers)),
    (e.data = Oa.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    ag
      .getAdapter(e.adapter || Oi.adapter)(e)
      .then(
        function (r) {
          return (
            ja(e),
            (r.data = Oa.call(e, e.transformResponse, r)),
            (r.headers = pt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            tg(r) ||
              (ja(e),
              r &&
                r.response &&
                ((r.response.data = Oa.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = pt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const cg = "1.7.9",
  na = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    na[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const jd = {};
na.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      cg +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new oe(
        s(o, " has been removed" + (n ? " in " + n : "")),
        oe.ERR_DEPRECATED
      );
    return (
      n &&
        !jd[o] &&
        ((jd[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, a) : !0
    );
  };
};
na.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function pE(e, t, n) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        c = a === void 0 || o(a, i, e);
      if (c !== !0)
        throw new oe("option " + i + " must be " + c, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new oe("Unknown option " + i, oe.ERR_BAD_OPTION);
  }
}
const oo = { assertOptions: pE, validators: na },
  Kt = oo.validators;
class pr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Cd(), response: new Cd() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = _r(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      oo.assertOptions(
        r,
        {
          silentJSONParsing: Kt.transitional(Kt.boolean),
          forcedJSONParsing: Kt.transitional(Kt.boolean),
          clarifyTimeoutError: Kt.transitional(Kt.boolean),
        },
        !1
      ),
      s != null &&
        (k.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : oo.assertOptions(
              s,
              { encode: Kt.function, serialize: Kt.function },
              !0
            )),
      oo.assertOptions(
        n,
        {
          baseUrl: Kt.spelling("baseURL"),
          withXsrfToken: Kt.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && k.merge(i.common, i[n.method]);
    i &&
      k.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete i[g];
        }
      ),
      (n.headers = pt.concat(o, i));
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
        ((c = c && h.synchronous), a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (h) {
      l.push(h.fulfilled, h.rejected);
    });
    let u,
      d = 0,
      f;
    if (!c) {
      const g = [Od.bind(this), void 0];
      for (
        g.unshift.apply(g, a),
          g.push.apply(g, l),
          f = g.length,
          u = Promise.resolve(n);
        d < f;

      )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    f = a.length;
    let m = n;
    for (d = 0; d < f; ) {
      const g = a[d++],
        h = a[d++];
      try {
        m = g(m);
      } catch (y) {
        h.call(this, y);
        break;
      }
    }
    try {
      u = Od.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = l.length; d < f; ) u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = _r(this.defaults, t);
    const n = rg(t.baseURL, t.url);
    return Ym(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  pr.prototype[t] = function (n, r) {
    return this.request(
      _r(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        _r(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (pr.prototype[t] = n()), (pr.prototype[t + "Form"] = n(!0));
});
class Ol {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        r.reason || ((r.reason = new xs(i, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ol(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function mE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function gE(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const xc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(xc).forEach(([e, t]) => {
  xc[t] = e;
});
function lg(e) {
  const t = new pr(e),
    n = Bm(pr.prototype.request, t);
  return (
    k.extend(n, pr.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return lg(_r(e, s));
    }),
    n
  );
}
const $e = lg(Oi);
$e.Axios = pr;
$e.CanceledError = xs;
$e.CancelToken = Ol;
$e.isCancel = tg;
$e.VERSION = cg;
$e.toFormData = ea;
$e.AxiosError = oe;
$e.Cancel = $e.CanceledError;
$e.all = function (t) {
  return Promise.all(t);
};
$e.spread = mE;
$e.isAxiosError = gE;
$e.mergeConfig = _r;
$e.AxiosHeaders = pt;
$e.formToJSON = (e) => eg(k.isHTMLForm(e) ? new FormData(e) : e);
$e.getAdapter = ag.getAdapter;
$e.HttpStatusCode = xc;
$e.default = $e;
const mt = $e.create({ baseURL: "https://itse.turkmenexpo.com/app/api/v1/" }),
  AN = async (e, t) =>
    (await mt.post("book_stand_form", e, { headers: { "Accept-Language": t } }))
      .status === 201,
  RN = async (e, t) =>
    (
      await mt.post("become_sponsor_form", e, {
        headers: { "Accept-Language": t },
      })
    ).status === 201,
  PN = async (e) => (await mt.post("contact_form", e)).status === 201,
  yE = async (e) => (await mt.post("subscribe_news_form", e)).status === 201,
  vE = async (e) =>
    mt.get("exhibition_time", { headers: { "Accept-Language": e } }),
  bE = async () => mt.get("partners"),
  xE = async (e, t) =>
    mt.get(`pages/${t}`, { headers: { "Accept-Language": e } }),
  wE = async (e) => mt.get("industries", { headers: { "Accept-Language": e } }),
  SE = async (e) => mt.get("stats", { headers: { "Accept-Language": e } }),
  kN = async (e) => mt("contact_info", { headers: { "Accept-Language": e } }),
  _E = async (e) => mt("contact_data", { headers: { "Accept-Language": e } }),
  NN = async (e) => mt("news", { headers: { "Accept-Language": e } }),
  ON = async (e, t = 1) =>
    mt(`news/${t}`, { headers: { "Accept-Language": e } }),
  jN = async (e) => mt("participants", { headers: { "Accept-Language": e } }),
  CE = Ee.object({ email: Ee.string().email() }),
  ug = ({ modal: e = !1 }) => {
    var a, c;
    const [t, n] = v.useState(!1),
      r = Am({ resolver: Pm(CE), defaultValues: { email: "" } });
    async function s(l) {
      try {
        const u = await yE(l);
        r.reset(), n(u);
      } catch (u) {
        console.error("POST subscribe", u);
      }
    }
    const i = Pa("Отправлено", "Submitted"),
      o = Pa("Подписаться", "Subscribe");
    return p.jsx("form", {
      onSubmit: r.handleSubmit(s),
      className: Q(
        "py-8",
        e ? "max-w-[392px] mx-auto" : "bg-bg_surface_container"
      ),
      children: p.jsxs(ut, {
        className: Q(
          "flex gap-8 justify-between",
          e ? "flex-col w-full" : "lg:flex-row flex-col lg:items-center"
        ),
        children: [
          p.jsx("h2", {
            className: "h2 !text-left",
            children: Pa("Подпишитесь на новости:", "Subscribe to the news:"),
          }),
          p.jsxs("div", {
            className: "relative",
            children: [
              p.jsx("input", {
                ...r.register("email"),
                placeholder: "Email",
                className: Q("input", {
                  "w-full": e,
                  "xl:w-[392px] lg:w-[320px] w-full": !e,
                }),
              }),
              p.jsx("span", {
                className: "text-error absolute -bottom-6 text-sm left-0",
                children:
                  (c = (a = r.formState.errors) == null ? void 0 : a.email) ==
                  null
                    ? void 0
                    : c.message,
              }),
            ],
          }),
          p.jsx(Xe, {
            loading: r.formState.isSubmitting,
            disabled: t,
            className: Q({
              "xl:w-[288px] lg:w-[220px] w-full": !e,
              "w-full": e,
            }),
            children: t ? i : o,
          }),
        ],
      }),
    });
  },
  DN = () => {
    const e = Re((t) => t.lang);
    return p.jsxs("footer", {
      children: [
        p.jsx(ug, {}),
        p.jsx("div", {
          className: "py-5 bg-surface_high",
          children: p.jsxs(ut, {
            className: "flex flex-col gap-6",
            children: [
              p.jsxs("div", {
                className:
                  "flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center",
                children: [
                  p.jsx(jh, {}),
                  p.jsxs("div", {
                    className: "flex items-center gap-6",
                    children: [
                      p.jsx(De, {
                        target: "_blank",
                        to: "https://www.facebook.com/profile.php?id=61567254728028",
                        children: p.jsx(Ob, { className: "text-on_surface" }),
                      }),
                      p.jsx(De, {
                        target: "_blank",
                        to: "https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq",
                        children: p.jsx("img", { src: "/inst.svg" }),
                      }),
                      p.jsx(De, {
                        target: "_blank",
                        to: "https://www.linkedin.com/company/turkmen-expo",
                        children: p.jsx("img", { src: "/in.svg" }),
                      }),
                      p.jsx(De, {
                        target: "_blank",
                        to: "https://x.com/turkmenexpo?t=D-XSa8d0AC8GAv5peAzteA&s=09",
                        children: p.jsx("img", { src: "/x.svg" }),
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx("hr", { className: "border-outline_v" }),
              p.jsx("h5", {
                className: "text-base text-center normal  text-on_surface_v",
                children:
                  e === vt.RU
                    ? "©2025 Все права защищены"
                    : "All rights reserved",
              }),
            ],
          }),
        }),
      ],
    });
  },
  EE = [{ lang: vt.RU }, { lang: vt.EN }],
  Dd = ({ className: e, chevronColor: t = "white" }) => {
    const n = Re((o) => o.lang),
      r = Re((o) => o.setLang),
      [s, i] = v.useState(!1);
    return p.jsxs(om, {
      open: s,
      onOpenChange: () => i(!s),
      children: [
        p.jsxs(am, {
          className: Q("flex items-center gap-2", e),
          children: [
            p.jsx("img", {
              src: n === vt.RU ? "/ru.svg" : "/english.svg",
              alt: "",
            }),
            n === vt.RU ? "Ру" : "En",
            p.jsx("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: p.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.23008 8.01443C4.35907 7.70304 4.66293 7.5 4.99998 7.5H15C15.337 7.5 15.6409 7.70304 15.7699 8.01443C15.8989 8.32583 15.8276 8.68426 15.5892 8.92259L10.5892 13.9226C10.2638 14.248 9.73617 14.248 9.41073 13.9226L4.41073 8.92259C4.1724 8.68426 4.1011 8.32583 4.23008 8.01443ZM7.01183 9.16667L9.99998 12.1548L12.9881 9.16667H7.01183Z",
                fill: t,
              }),
            }),
          ],
        }),
        p.jsx(Sl, {
          className: "flex flex-col gap-6",
          children: EE.filter((o) => o.lang !== n).map((o, a) =>
            p.jsxs(
              "div",
              {
                onClick: () => {
                  r(o.lang), i(!1);
                },
                className: "flex gap-3 py-1 items-center cursor-pointer",
                children: [
                  p.jsx("img", {
                    src: o.lang === vt.RU ? "/ru.svg" : "/english.svg",
                    alt: "flag",
                  }),
                  p.jsx("h5", {
                    children: o.lang === vt.RU ? "Русский" : "English",
                  }),
                ],
              },
              a
            )
          ),
        }),
      ],
    });
  },
  ut = ({ className: e, children: t }) =>
    p.jsx("div", {
      className: Q("w-full mx-auto max-w-[1240px] px-4", e),
      children: t,
    }),
  TE = ({ className: e, title: t, text: n }) =>
    p.jsxs("article", {
      className: Q(
        "px-6 py-4 relative bg-bg_surface_container h-[160px] w-full overflow-hidden",
        e
      ),
      children: [
        p.jsx("img", {
          src: "/bg-logo.svg",
          className: "absolute top-2 right-0",
        }),
        p.jsx("h2", {
          className: "text-primary text-[32px] semibold leading-[130%] mb-4",
          children: t,
        }),
        p.jsx("h4", {
          className: "text-on_surface normal text-base",
          children: n,
        }),
      ],
    }),
  AE = ({ className: e, info: t, title: n, image: r }) =>
    p.jsxs("div", {
      className: Q("flex items-center gap-4", e),
      children: [
        p.jsx("img", { src: r == null ? void 0 : r.path, alt: "contact icon" }),
        p.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            p.jsx("h5", { className: "text-sm text-[#454545]", children: n }),
            p.jsx("h4", { className: "text-[#171717] semibold", children: t }),
          ],
        }),
      ],
    }),
  dg = ({ className: e, title: t, text: n, bottomClassName: r }) =>
    p.jsxs("div", {
      className: Q("rounded-t-[4px] overflow-hidden", e),
      children: [
        p.jsx("div", {
          className:
            "bg-teritary_07 flex items-center text-teritary_11 h-11 px-4",
          children: t,
        }),
        p.jsx("div", {
          className: Q(
            "h-14 bg-bg_surface_container semibold flex items-center text-lg px-4",
            r
          ),
          children: n,
        }),
      ],
    }),
  RE = ({ className: e, title: t, text: n, img: r, link: s, btnText: i }) =>
    p.jsxs("article", {
      className: Q(
        "sm:px-8 sm:py-6 p-4 relative overflow-hidden h-[296px] sm:w-full w-[300px] text-on_primary",
        e
      ),
      children: [
        p.jsx("div", {
          className:
            "absolute size-full z-10  top-0 left-0 bg-gradient-to-r from-25% from-[#2C57A7] to-[#2C57A7]/20 ",
        }),
        p.jsx("img", {
          src: r,
          className: "absolute size-full top-0 right-0 object-cover",
        }),
        p.jsxs("div", {
          className: "relative z-20 h-full",
          children: [
            p.jsxs("div", {
              className: "",
              children: [
                p.jsx("h4", {
                  className: "sm:text-2xl text-lg mb-4 max-w-[444px] z-20 h-16",
                  children: t,
                }),
                p.jsx("p", {
                  className: "sm:text-base text-sm normal max-w-[360px] z-20",
                  children: n,
                }),
              ],
            }),
            p.jsx(De, {
              className: "absolute bottom-0 left-0",
              target: "_blank",
              to: s,
              children: p.jsxs(Xe, {
                className: "text-sm px-0 h-fit py-0 z-20",
                variant: "link",
                children: [i, " ", p.jsx(rl, {})],
              }),
            }),
          ],
        }),
      ],
    }),
  PE = ({ className: e, slides: t, active: n, scrollTo: r }) =>
    p.jsx("div", {
      className: Q("flex items-center justify-center gap-2", e),
      children: Array.from({ length: t }).map((s, i) =>
        p.jsx(
          "span",
          { onClick: () => r(i), className: Q(n === i ? "dot-active" : "dot") },
          i
        )
      ),
    }),
  jl = v.createContext({});
function Dl(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ra = v.createContext(null),
  Ml = v.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class kE extends v.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function NE({ children: e, isPresent: t }) {
  const n = v.useId(),
    r = v.useRef(null),
    s = v.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = v.useContext(Ml);
  return (
    v.useInsertionEffect(() => {
      const { width: o, height: a, top: c, left: l } = s.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        i && (u.nonce = i),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${c}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    p.jsx(kE, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: v.cloneElement(e, { ref: r }),
    })
  );
}
const OE = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const a = Dl(jE),
    c = v.useId(),
    l = v.useCallback(
      (d) => {
        a.set(d, !0);
        for (const f of a.values()) if (!f) return;
        r && r();
      },
      [a, r]
    ),
    u = v.useMemo(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: l,
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      i ? [Math.random(), l] : [n, l]
    );
  return (
    v.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    v.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = p.jsx(NE, { isPresent: n, children: e })),
    p.jsx(ra.Provider, { value: u, children: e })
  );
};
function jE() {
  return new Map();
}
function fg(e = !0) {
  const t = v.useContext(ra);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = v.useId();
  v.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = v.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Zi = (e) => e.key || "";
function Md(e) {
  const t = [];
  return (
    v.Children.forEach(e, (n) => {
      v.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Fl = typeof window < "u",
  hg = Fl ? v.useLayoutEffect : v.useEffect,
  Da = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
  }) => {
    const [a, c] = fg(o),
      l = v.useMemo(() => Md(e), [e]),
      u = o && !a ? [] : l.map(Zi),
      d = v.useRef(!0),
      f = v.useRef(l),
      m = Dl(() => new Map()),
      [g, h] = v.useState(l),
      [y, b] = v.useState(l);
    hg(() => {
      (d.current = !1), (f.current = l);
      for (let C = 0; C < y.length; C++) {
        const S = Zi(y[C]);
        u.includes(S) ? m.delete(S) : m.get(S) !== !0 && m.set(S, !1);
      }
    }, [y, u.length, u.join("-")]);
    const x = [];
    if (l !== g) {
      let C = [...l];
      for (let S = 0; S < y.length; S++) {
        const R = y[S],
          A = Zi(R);
        u.includes(A) || (C.splice(S, 0, R), x.push(R));
      }
      i === "wait" && x.length && (C = x), b(Md(C)), h(l);
      return;
    }
    const { forceRender: w } = v.useContext(jl);
    return p.jsx(p.Fragment, {
      children: y.map((C) => {
        const S = Zi(C),
          R = o && !a ? !1 : l === y || u.includes(S),
          A = () => {
            if (m.has(S)) m.set(S, !0);
            else return;
            let T = !0;
            m.forEach((O) => {
              O || (T = !1);
            }),
              T &&
                (w == null || w(),
                b(f.current),
                o && (c == null || c()),
                r && r());
          };
        return p.jsx(
          OE,
          {
            isPresent: R,
            initial: !d.current || n ? void 0 : !1,
            custom: R ? void 0 : t,
            presenceAffectsLayout: s,
            mode: i,
            onExitComplete: R ? void 0 : A,
            children: C,
          },
          S
        );
      }),
    });
  },
  St = (e) => e;
let wc = St;
const DE = { skipAnimations: !1, useManualTiming: !1 };
function ME(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(l) {
    i.has(l) && (c.schedule(l), e()), l(o);
  }
  const c = {
    schedule: (l, u = !1, d = !1) => {
      const m = d && r ? t : n;
      return u && i.add(l), m.has(l) || m.add(l), l;
    },
    cancel: (l) => {
      n.delete(l), i.delete(l);
    },
    process: (l) => {
      if (((o = l), r)) {
        s = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        s && ((s = !1), c.process(l));
    },
  };
  return c;
}
const Ki = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  FE = 40;
function pg(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Ki.reduce((b, x) => ((b[x] = ME(i)), b), {}),
    {
      read: a,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    m = () => {
      const b = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(b - s.timestamp, FE), 1)),
        (s.timestamp = b),
        (s.isProcessing = !0),
        a.process(s),
        c.process(s),
        l.process(s),
        u.process(s),
        d.process(s),
        f.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(m));
    },
    g = () => {
      (n = !0), (r = !0), s.isProcessing || e(m);
    };
  return {
    schedule: Ki.reduce((b, x) => {
      const w = o[x];
      return (b[x] = (C, S = !1, R = !1) => (n || g(), w.schedule(C, S, R))), b;
    }, {}),
    cancel: (b) => {
      for (let x = 0; x < Ki.length; x++) o[Ki[x]].cancel(b);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: Ae,
    cancel: Gn,
    state: Ke,
    steps: Ma,
  } = pg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0),
  mg = v.createContext({ strict: !1 }),
  Fd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  fs = {};
for (const e in Fd) fs[e] = { isEnabled: (t) => Fd[e].some((n) => !!t[n]) };
function IE(e) {
  for (const t in e) fs[t] = { ...fs[t], ...e[t] };
}
const LE = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Po(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    LE.has(e)
  );
}
let gg = (e) => !Po(e);
function VE(e) {
  e && (gg = (t) => (t.startsWith("on") ? !Po(t) : e(t)));
}
try {
  VE(require("@emotion/is-prop-valid").default);
} catch {}
function BE(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((gg(s) ||
        (n === !0 && Po(s)) ||
        (!t && !Po(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function UE(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const sa = v.createContext({});
function hi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ia(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Il = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ll = ["initial", ...Il];
function oa(e) {
  return ia(e.animate) || Ll.some((t) => hi(e[t]));
}
function yg(e) {
  return !!(oa(e) || e.variants);
}
function $E(e, t) {
  if (oa(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || hi(n) ? n : void 0,
      animate: hi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function zE(e) {
  const { initial: t, animate: n } = $E(e, v.useContext(sa));
  return v.useMemo(() => ({ initial: t, animate: n }), [Id(t), Id(n)]);
}
function Id(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const WE = Symbol.for("motionComponentSymbol");
function Lr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function HE(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Lr(n) && (n.current = r));
    },
    [t]
  );
}
const Vl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  qE = "framerAppearId",
  vg = "data-" + Vl(qE),
  { schedule: Bl, cancel: MN } = pg(queueMicrotask, !1),
  bg = v.createContext({});
function GE(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = v.useContext(sa),
    c = v.useContext(mg),
    l = v.useContext(ra),
    u = v.useContext(Ml).reducedMotion,
    d = v.useRef(null);
  (r = r || c.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const f = d.current,
    m = v.useContext(bg);
  f &&
    !f.projection &&
    s &&
    (f.type === "html" || f.type === "svg") &&
    ZE(d.current, n, s, m);
  const g = v.useRef(!1);
  v.useInsertionEffect(() => {
    f && g.current && f.update(n, l);
  });
  const h = n[vg],
    y = v.useRef(
      !!h &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, h)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, h))
    );
  return (
    hg(() => {
      f &&
        ((g.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Bl.render(f.render),
        y.current && f.animationState && f.animationState.animateChanges());
    }),
    v.useEffect(() => {
      f &&
        (!y.current && f.animationState && f.animationState.animateChanges(),
        y.current &&
          (queueMicrotask(() => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) === null ||
              b === void 0 ||
              b.call(window, h);
          }),
          (y.current = !1)));
    }),
    f
  );
}
function ZE(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: c,
    layoutRoot: l,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : xg(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && Lr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    });
}
function xg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : xg(e.parent);
}
function KE({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && IE(e);
  function a(l, u) {
    let d;
    const f = { ...v.useContext(Ml), ...l, layoutId: QE(l) },
      { isStatic: m } = f,
      g = zE(l),
      h = r(l, m);
    if (!m && Fl) {
      XE();
      const y = YE(f);
      (d = y.MeasureLayout),
        (g.visualElement = GE(s, h, f, t, y.ProjectionNode));
    }
    return p.jsxs(sa.Provider, {
      value: g,
      children: [
        d && g.visualElement
          ? p.jsx(d, { visualElement: g.visualElement, ...f })
          : null,
        n(s, l, HE(h, g.visualElement, u), h, m, g.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof s == "string"
      ? s
      : `create(${
          (o = (i = s.displayName) !== null && i !== void 0 ? i : s.name) !==
            null && o !== void 0
            ? o
            : ""
        })`
  }`;
  const c = v.forwardRef(a);
  return (c[WE] = s), c;
}
function QE({ layoutId: e }) {
  const t = v.useContext(jl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function XE(e, t) {
  v.useContext(mg).strict;
}
function YE(e) {
  const { drag: t, layout: n } = fs;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const JE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ul(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(JE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Ld(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function $l(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Ld(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Ld(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const Sc = (e) => Array.isArray(e),
  eT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  tT = (e) => (Sc(e) ? e[e.length - 1] || 0 : e),
  rt = (e) => !!(e && e.getVelocity);
function ao(e) {
  const t = rt(e) ? e.get() : e;
  return eT(t) ? t.toValue() : t;
}
function nT(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i
) {
  const o = { latestValues: rT(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const wg = (e) => (t, n) => {
  const r = v.useContext(sa),
    s = v.useContext(ra),
    i = () => nT(e, t, r, s);
  return n ? i() : Dl(i);
};
function rT(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = ao(i[f]);
  let { initial: o, animate: a } = e;
  const c = oa(e),
    l = yg(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const d = u ? a : o;
  if (d && typeof d != "boolean" && !ia(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const g = $l(e, f[m]);
      if (g) {
        const { transitionEnd: h, transition: y, ...b } = g;
        for (const x in b) {
          let w = b[x];
          if (Array.isArray(w)) {
            const C = u ? w.length - 1 : 0;
            w = w[C];
          }
          w !== null && (s[x] = w);
        }
        for (const x in h) s[x] = h[x];
      }
    }
  }
  return s;
}
const ws = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  kr = new Set(ws),
  Sg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  _g = Sg("--"),
  sT = Sg("var(--"),
  zl = (e) => (sT(e) ? iT.test(e.split("/*")[0].trim()) : !1),
  iT =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Cg = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Cn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ss = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  pi = { ...Ss, transform: (e) => Cn(0, 1, e) },
  Qi = { ...Ss, default: 1 },
  ji = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Pn = ji("deg"),
  on = ji("%"),
  ee = ji("px"),
  oT = ji("vh"),
  aT = ji("vw"),
  Vd = {
    ...on,
    parse: (e) => on.parse(e) / 100,
    transform: (e) => on.transform(e * 100),
  },
  cT = {
    borderWidth: ee,
    borderTopWidth: ee,
    borderRightWidth: ee,
    borderBottomWidth: ee,
    borderLeftWidth: ee,
    borderRadius: ee,
    radius: ee,
    borderTopLeftRadius: ee,
    borderTopRightRadius: ee,
    borderBottomRightRadius: ee,
    borderBottomLeftRadius: ee,
    width: ee,
    maxWidth: ee,
    height: ee,
    maxHeight: ee,
    top: ee,
    right: ee,
    bottom: ee,
    left: ee,
    padding: ee,
    paddingTop: ee,
    paddingRight: ee,
    paddingBottom: ee,
    paddingLeft: ee,
    margin: ee,
    marginTop: ee,
    marginRight: ee,
    marginBottom: ee,
    marginLeft: ee,
    backgroundPositionX: ee,
    backgroundPositionY: ee,
  },
  lT = {
    rotate: Pn,
    rotateX: Pn,
    rotateY: Pn,
    rotateZ: Pn,
    scale: Qi,
    scaleX: Qi,
    scaleY: Qi,
    scaleZ: Qi,
    skew: Pn,
    skewX: Pn,
    skewY: Pn,
    distance: ee,
    translateX: ee,
    translateY: ee,
    translateZ: ee,
    x: ee,
    y: ee,
    z: ee,
    perspective: ee,
    transformPerspective: ee,
    opacity: pi,
    originX: Vd,
    originY: Vd,
    originZ: ee,
  },
  Bd = { ...Ss, transform: Math.round },
  Wl = {
    ...cT,
    ...lT,
    zIndex: Bd,
    size: ee,
    fillOpacity: pi,
    strokeOpacity: pi,
    numOctaves: Bd,
  },
  uT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  dT = ws.length;
function fT(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < dT; i++) {
    const o = ws[i],
      a = e[o];
    if (a === void 0) continue;
    let c = !0;
    if (
      (typeof a == "number"
        ? (c = a === (o.startsWith("scale") ? 1 : 0))
        : (c = parseFloat(a) === 0),
      !c || n)
    ) {
      const l = Cg(a, Wl[o]);
      if (!c) {
        s = !1;
        const u = uT[o] || o;
        r += `${u}(${l}) `;
      }
      n && (t[o] = l);
    }
  }
  return (r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r;
}
function Hl(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const c in t) {
    const l = t[c];
    if (kr.has(c)) {
      o = !0;
      continue;
    } else if (_g(c)) {
      s[c] = l;
      continue;
    } else {
      const u = Cg(l, Wl[c]);
      c.startsWith("origin") ? ((a = !0), (i[c] = u)) : (r[c] = u);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = fT(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
const hT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  pT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function mT(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? hT : pT;
  e[i.offset] = ee.transform(-r);
  const o = ee.transform(t),
    a = ee.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Ud(e, t, n) {
  return typeof e == "string" ? e : ee.transform(t + n * e);
}
function gT(e, t, n) {
  const r = Ud(t, e.x, e.width),
    s = Ud(n, e.y, e.height);
  return `${r} ${s}`;
}
function ql(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d
) {
  if ((Hl(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: m, dimensions: g } = e;
  f.transform && (g && (m.transform = f.transform), delete f.transform),
    g &&
      (s !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = gT(
        g,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && mT(f, o, a, c, !1);
}
const Gl = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Eg = () => ({ ...Gl(), attrs: {} }),
  Zl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Tg(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Ag = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Rg(e, t, n, r) {
  Tg(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(Ag.has(s) ? s : Vl(s), t.attrs[s]);
}
const ko = {};
function yT(e) {
  Object.assign(ko, e);
}
function Pg(e, { layout: t, layoutId: n }) {
  return (
    kr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ko[e] || e === "opacity"))
  );
}
function Kl(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (rt(s[o]) ||
      (t.style && rt(t.style[o])) ||
      Pg(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function kg(e, t, n) {
  const r = Kl(e, t, n);
  for (const s in e)
    if (rt(e[s]) || rt(t[s])) {
      const i =
        ws.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function vT(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const $d = ["x", "y", "width", "height", "cx", "cy", "r"],
  bT = {
    useVisualState: wg({
      scrapeMotionValuesFromProps: kg,
      createRenderState: Eg,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: s,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in s)
            if (kr.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < $d.length; a++) {
            const c = $d[a];
            e[c] !== t[c] && (o = !0);
          }
        o &&
          Ae.read(() => {
            vT(n, r),
              Ae.render(() => {
                ql(r, s, Zl(n.tagName), e.transformTemplate), Rg(n, r);
              });
          });
      },
    }),
  },
  xT = {
    useVisualState: wg({
      scrapeMotionValuesFromProps: Kl,
      createRenderState: Gl,
    }),
  };
function Ng(e, t, n) {
  for (const r in t) !rt(t[r]) && !Pg(r, n) && (e[r] = t[r]);
}
function wT({ transformTemplate: e }, t) {
  return v.useMemo(() => {
    const n = Gl();
    return Hl(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function ST(e, t) {
  const n = e.style || {},
    r = {};
  return Ng(r, n, e), Object.assign(r, wT(e, t)), r;
}
function _T(e, t) {
  const n = {},
    r = ST(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function CT(e, t, n, r) {
  const s = v.useMemo(() => {
    const i = Eg();
    return (
      ql(i, t, Zl(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Ng(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function ET(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const c = (Ul(n) ? CT : _T)(r, i, o, n),
      l = BE(r, typeof n == "string", e),
      u = n !== v.Fragment ? { ...l, ...c, ref: s } : {},
      { children: d } = r,
      f = v.useMemo(() => (rt(d) ? d.get() : d), [d]);
    return v.createElement(n, { ...u, children: f });
  };
}
function TT(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Ul(r) ? bT : xT),
      preloadedFeatures: e,
      useRender: ET(s),
      createVisualElement: t,
      Component: r,
    };
    return KE(o);
  };
}
function Og(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function aa(e, t, n) {
  const r = e.getProps();
  return $l(r, t, n !== void 0 ? n : r.custom, e);
}
function Ql(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const jg = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ws,
]);
let co;
function AT() {
  co = void 0;
}
const an = {
  now: () => (
    co === void 0 &&
      an.set(
        Ke.isProcessing || DE.useManualTiming ? Ke.timestamp : performance.now()
      ),
    co
  ),
  set: (e) => {
    (co = e), queueMicrotask(AT);
  },
};
function Xl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Yl(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Jl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Xl(this.subscriptions, t), () => Yl(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Dg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const zd = 30,
  RT = (e) => !isNaN(parseFloat(e));
class PT {
  constructor(t, n = {}) {
    (this.version = "12.0.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = an.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = an.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = RT(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Jl());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Ae.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = an.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > zd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, zd);
    return Dg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function mi(e, t) {
  return new PT(e, t);
}
function kT(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, mi(n));
}
function NT(e, t) {
  const n = aa(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = tT(i[o]);
    kT(e, o, a);
  }
}
function OT(e) {
  return !!(rt(e) && e.add);
}
function _c(e, t) {
  const n = e.getValue("willChange");
  if (OT(n)) return n.add(t);
}
function Mg(e) {
  return e.props[vg];
}
function eu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const jT = eu(() => window.ScrollTimeline !== void 0);
class DT {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((s) => {
      if (jT() && s.attachTimeline) return s.attachTimeline(t);
      if (typeof n == "function") return n(s);
    });
    return () => {
      r.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class MT extends DT {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const bn = (e) => e * 1e3,
  xn = (e) => e / 1e3;
function tu(e) {
  return typeof e == "function";
}
function Wd(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const nu = (e) => Array.isArray(e) && typeof e[0] == "number",
  FT = { linearEasing: void 0 };
function IT(e, t) {
  const n = eu(e);
  return () => {
    var r;
    return (r = FT[t]) !== null && r !== void 0 ? r : n();
  };
}
const No = IT(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  hs = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Fg = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(hs(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Ig(e) {
  return !!(
    (typeof e == "function" && No()) ||
    !e ||
    (typeof e == "string" && (e in Cc || No())) ||
    nu(e) ||
    (Array.isArray(e) && e.every(Ig))
  );
}
const Ms = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Cc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ms([0, 0.65, 0.55, 1]),
    circOut: Ms([0.55, 0, 1, 0.45]),
    backIn: Ms([0.31, 0.01, 0.66, -0.59]),
    backOut: Ms([0.33, 1.53, 0.69, 0.99]),
  };
function Lg(e, t) {
  if (e)
    return typeof e == "function" && No()
      ? Fg(e, t)
      : nu(e)
      ? Ms(e)
      : Array.isArray(e)
      ? e.map((n) => Lg(n, t) || Cc.easeOut)
      : Cc[e];
}
const Vg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  LT = 1e-7,
  VT = 12;
function BT(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (i = Vg(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > LT && ++a < VT);
  return o;
}
function Di(e, t, n, r) {
  if (e === t && n === r) return St;
  const s = (i) => BT(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Vg(s(i), t, r));
}
const Bg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ug = (e) => (t) => 1 - e(1 - t),
  $g = Di(0.33, 1.53, 0.69, 0.99),
  ru = Ug($g),
  zg = Bg(ru),
  Wg = (e) =>
    (e *= 2) < 1 ? 0.5 * ru(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  su = (e) => 1 - Math.sin(Math.acos(e)),
  Hg = Ug(su),
  qg = Bg(su),
  Gg = (e) => /^0[^.\s]+$/u.test(e);
function UT(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Gg(e)
    : !0;
}
const zs = (e) => Math.round(e * 1e5) / 1e5,
  iu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $T(e) {
  return e == null;
}
const zT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ou = (e, t) => (n) =>
    !!(
      (typeof n == "string" && zT.test(n) && n.startsWith(e)) ||
      (t && !$T(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Zg = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(iu);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  WT = (e) => Cn(0, 255, e),
  Fa = { ...Ss, transform: (e) => Math.round(WT(e)) },
  rr = {
    test: ou("rgb", "red"),
    parse: Zg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Fa.transform(e) +
      ", " +
      Fa.transform(t) +
      ", " +
      Fa.transform(n) +
      ", " +
      zs(pi.transform(r)) +
      ")",
  };
function HT(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Ec = { test: ou("#"), parse: HT, transform: rr.transform },
  Vr = {
    test: ou("hsl", "hue"),
    parse: Zg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      on.transform(zs(t)) +
      ", " +
      on.transform(zs(n)) +
      ", " +
      zs(pi.transform(r)) +
      ")",
  },
  tt = {
    test: (e) => rr.test(e) || Ec.test(e) || Vr.test(e),
    parse: (e) =>
      rr.test(e) ? rr.parse(e) : Vr.test(e) ? Vr.parse(e) : Ec.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? rr.transform(e)
        : Vr.transform(e),
  },
  qT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function GT(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(iu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(qT)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Kg = "number",
  Qg = "color",
  ZT = "var",
  KT = "var(",
  Hd = "${}",
  QT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      QT,
      (c) => (
        tt.test(c)
          ? (r.color.push(i), s.push(Qg), n.push(tt.parse(c)))
          : c.startsWith(KT)
          ? (r.var.push(i), s.push(ZT), n.push(c))
          : (r.number.push(i), s.push(Kg), n.push(parseFloat(c))),
        ++i,
        Hd
      )
    )
    .split(Hd);
  return { values: n, split: a, indexes: r, types: s };
}
function Xg(e) {
  return gi(e).values;
}
function Yg(e) {
  const { split: t, types: n } = gi(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === Kg
          ? (i += zs(s[o]))
          : a === Qg
          ? (i += tt.transform(s[o]))
          : (i += s[o]);
      }
    return i;
  };
}
const XT = (e) => (typeof e == "number" ? 0 : e);
function YT(e) {
  const t = Xg(e);
  return Yg(e)(t.map(XT));
}
const Zn = {
    test: GT,
    parse: Xg,
    createTransformer: Yg,
    getAnimatableNone: YT,
  },
  JT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function eA(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(iu) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = JT.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const tA = /\b([a-z-]*)\(.*?\)/gu,
  Tc = {
    ...Zn,
    getAnimatableNone: (e) => {
      const t = e.match(tA);
      return t ? t.map(eA).join(" ") : e;
    },
  },
  nA = {
    ...Wl,
    color: tt,
    backgroundColor: tt,
    outlineColor: tt,
    fill: tt,
    stroke: tt,
    borderColor: tt,
    borderTopColor: tt,
    borderRightColor: tt,
    borderBottomColor: tt,
    borderLeftColor: tt,
    filter: Tc,
    WebkitFilter: Tc,
  },
  au = (e) => nA[e];
function Jg(e, t) {
  let n = au(e);
  return (
    n !== Tc && (n = Zn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const rA = new Set(["auto", "none", "0"]);
function sA(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !rA.has(i) && gi(i).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const i of t) e[i] = Jg(n, s);
}
const qd = (e) => e === Ss || e === ee,
  Gd = (e, t) => parseFloat(e.split(", ")[t]),
  Zd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return Gd(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Gd(i[1], e) : 0;
      }
    },
  iA = new Set(["x", "y", "z"]),
  oA = ws.filter((e) => !iA.has(e));
function aA(e) {
  const t = [];
  return (
    oA.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ps = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Zd(4, 13),
  y: Zd(5, 14),
};
ps.translateX = ps.x;
ps.translateY = ps.y;
const mr = new Set();
let Ac = !1,
  Rc = !1;
function ey() {
  if (Rc) {
    const e = Array.from(mr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = aA(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Rc = !1), (Ac = !1), mr.forEach((e) => e.complete()), mr.clear();
}
function ty() {
  mr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Rc = !0);
  });
}
function cA() {
  ty(), ey();
}
class cu {
  constructor(t, n, r, s, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (mr.add(this),
          Ac || ((Ac = !0), Ae.read(ty), Ae.resolveKeyframes(ey)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const c = r.readValue(n, a);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      mr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), mr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ny = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  lA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function uA(e) {
  const t = lA.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function ry(e, t, n = 1) {
  const [r, s] = uA(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return ny(o) ? parseFloat(o) : o;
  }
  return zl(s) ? ry(s, t, n + 1) : s;
}
const sy = (e) => (t) => t.test(e),
  dA = { test: (e) => e === "auto", parse: (e) => e },
  iy = [Ss, ee, on, Pn, aT, oT, dA],
  Kd = (e) => iy.find(sy(e));
class oy extends cu {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && ((l = l.trim()), zl(l))) {
        const u = ry(l, n.current);
        u !== void 0 && (t[c] = u),
          c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !jg.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Kd(s),
      a = Kd(i);
    if (o !== a)
      if (qd(o) && qd(a))
        for (let c = 0; c < t.length; c++) {
          const l = t[c];
          typeof l == "string" && (t[c] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) UT(t[s]) && r.push(s);
    r.length && sA(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ps[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    (s[o] = ps[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([c, l]) => {
          n.getValue(c).set(l);
        }),
      this.resolveNoneKeyframes();
  }
}
const Qd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Zn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function fA(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function hA(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Qd(s, t),
    a = Qd(i, t);
  return !o || !a ? !1 : fA(e) || ((n === "spring" || tu(n)) && r);
}
const pA = (e) => e !== null;
function ca(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(pA),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const mA = 40;
class ay {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = an.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > mA
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && cA(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = an.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: c,
      isGenerator: l,
    } = this.options;
    if (!l && !hA(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        c && c(ca(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Pc = 2e4;
function cy(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Pc; ) (t += n), (r = e.next(t));
  return t >= Pc ? 1 / 0 : t;
}
const ke = (e, t, n) => e + (t - e) * n;
function Ia(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function gA({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - a;
    (s = Ia(c, a, e + 1 / 3)), (i = Ia(c, a, e)), (o = Ia(c, a, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Oo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const La = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  yA = [Ec, rr, Vr],
  vA = (e) => yA.find((t) => t.test(e));
function Xd(e) {
  const t = vA(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Vr && (n = gA(n)), n;
}
const Yd = (e, t) => {
    const n = Xd(e),
      r = Xd(t);
    if (!n || !r) return Oo(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = La(n.red, r.red, i)),
      (s.green = La(n.green, r.green, i)),
      (s.blue = La(n.blue, r.blue, i)),
      (s.alpha = ke(n.alpha, r.alpha, i)),
      rr.transform(s)
    );
  },
  bA = (e, t) => (n) => t(e(n)),
  Mi = (...e) => e.reduce(bA),
  kc = new Set(["none", "hidden"]);
function xA(e, t) {
  return kc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function wA(e, t) {
  return (n) => ke(e, t, n);
}
function lu(e) {
  return typeof e == "number"
    ? wA
    : typeof e == "string"
    ? zl(e)
      ? Oo
      : tt.test(e)
      ? Yd
      : CA
    : Array.isArray(e)
    ? ly
    : typeof e == "object"
    ? tt.test(e)
      ? Yd
      : SA
    : Oo;
}
function ly(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => lu(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function SA(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = lu(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function _A(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      c = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = c), s[o]++;
  }
  return r;
}
const CA = (e, t) => {
  const n = Zn.createTransformer(t),
    r = gi(e),
    s = gi(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (kc.has(e) && !s.values.length) || (kc.has(t) && !r.values.length)
      ? xA(e, t)
      : Mi(ly(_A(r, s), s.values), n)
    : Oo(e, t);
};
function uy(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ke(e, t, n)
    : lu(e)(e, t);
}
const EA = 5;
function dy(e, t, n) {
  const r = Math.max(t - EA, 0);
  return Dg(n - e(r), t - r);
}
const je = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Jd = 0.001;
function TA({
  duration: e = je.duration,
  bounce: t = je.bounce,
  velocity: n = je.velocity,
  mass: r = je.mass,
}) {
  let s,
    i,
    o = 1 - t;
  (o = Cn(je.minDamping, je.maxDamping, o)),
    (e = Cn(je.minDuration, je.maxDuration, xn(e))),
    o < 1
      ? ((s = (l) => {
          const u = l * o,
            d = u * e,
            f = u - n,
            m = Nc(l, o),
            g = Math.exp(-d);
          return Jd - (f / m) * g;
        }),
        (i = (l) => {
          const d = l * o * e,
            f = d * n + n,
            m = Math.pow(o, 2) * Math.pow(l, 2) * e,
            g = Math.exp(-d),
            h = Nc(Math.pow(l, 2), o);
          return ((-s(l) + Jd > 0 ? -1 : 1) * ((f - m) * g)) / h;
        }))
      : ((s = (l) => {
          const u = Math.exp(-l * e),
            d = (l - n) * e + 1;
          return -0.001 + u * d;
        }),
        (i = (l) => {
          const u = Math.exp(-l * e),
            d = (n - l) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    c = RA(s, i, a);
  if (((e = bn(e)), isNaN(c)))
    return { stiffness: je.stiffness, damping: je.damping, duration: e };
  {
    const l = Math.pow(c, 2) * r;
    return { stiffness: l, damping: o * 2 * Math.sqrt(r * l), duration: e };
  }
}
const AA = 12;
function RA(e, t, n) {
  let r = n;
  for (let s = 1; s < AA; s++) r = r - e(r) / t(r);
  return r;
}
function Nc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const PA = ["duration", "bounce"],
  kA = ["stiffness", "damping", "mass"];
function ef(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function NA(e) {
  let t = {
    velocity: je.velocity,
    stiffness: je.stiffness,
    damping: je.damping,
    mass: je.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ef(e, kA) && ef(e, PA))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * Cn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: je.mass, stiffness: s, damping: i };
    } else {
      const n = TA(e);
      (t = { ...t, ...n, mass: je.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function fy(e = je.visualDuration, t = je.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: m,
    } = NA({ ...n, velocity: -xn(n.velocity || 0) }),
    g = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    y = o - i,
    b = xn(Math.sqrt(c / u)),
    x = Math.abs(y) < 5;
  r || (r = x ? je.restSpeed.granular : je.restSpeed.default),
    s || (s = x ? je.restDelta.granular : je.restDelta.default);
  let w;
  if (h < 1) {
    const S = Nc(b, h);
    w = (R) => {
      const A = Math.exp(-h * b * R);
      return (
        o - A * (((g + h * b * y) / S) * Math.sin(S * R) + y * Math.cos(S * R))
      );
    };
  } else if (h === 1) w = (S) => o - Math.exp(-b * S) * (y + (g + b * y) * S);
  else {
    const S = b * Math.sqrt(h * h - 1);
    w = (R) => {
      const A = Math.exp(-h * b * R),
        T = Math.min(S * R, 300);
      return (
        o - (A * ((g + h * b * y) * Math.sinh(T) + S * y * Math.cosh(T))) / S
      );
    };
  }
  const C = {
    calculatedDuration: (m && d) || null,
    next: (S) => {
      const R = w(S);
      if (m) a.done = S >= d;
      else {
        let A = 0;
        h < 1 && (A = S === 0 ? bn(g) : dy(w, S, R));
        const T = Math.abs(A) <= r,
          O = Math.abs(o - R) <= s;
        a.done = T && O;
      }
      return (a.value = a.done ? o : R), a;
    },
    toString: () => {
      const S = Math.min(cy(C), Pc),
        R = Fg((A) => C.next(S * A).value, S, 30);
      return S + "ms " + R;
    },
  };
  return C;
}
function tf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = (T) => (a !== void 0 && T < a) || (c !== void 0 && T > c),
    g = (T) =>
      a === void 0
        ? c
        : c === void 0 || Math.abs(a - T) < Math.abs(c - T)
        ? a
        : c;
  let h = n * t;
  const y = d + h,
    b = o === void 0 ? y : o(y);
  b !== y && (h = b - d);
  const x = (T) => -h * Math.exp(-T / r),
    w = (T) => b + x(T),
    C = (T) => {
      const O = x(T),
        D = w(T);
      (f.done = Math.abs(O) <= l), (f.value = f.done ? b : D);
    };
  let S, R;
  const A = (T) => {
    m(f.value) &&
      ((S = T),
      (R = fy({
        keyframes: [f.value, g(f.value)],
        velocity: dy(w, T, f.value),
        damping: s,
        stiffness: i,
        restDelta: l,
        restSpeed: u,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let O = !1;
        return (
          !R && S === void 0 && ((O = !0), C(T), A(T)),
          S !== void 0 && T >= S ? R.next(T - S) : (!O && C(T), f)
        );
      },
    }
  );
}
const OA = Di(0.42, 0, 1, 1),
  jA = Di(0, 0, 0.58, 1),
  hy = Di(0.42, 0, 0.58, 1),
  DA = (e) => Array.isArray(e) && typeof e[0] != "number",
  nf = {
    linear: St,
    easeIn: OA,
    easeInOut: hy,
    easeOut: jA,
    circIn: su,
    circInOut: qg,
    circOut: Hg,
    backIn: ru,
    backInOut: zg,
    backOut: $g,
    anticipate: Wg,
  },
  rf = (e) => {
    if (nu(e)) {
      wc(e.length === 4);
      const [t, n, r, s] = e;
      return Di(t, n, r, s);
    } else if (typeof e == "string") return wc(nf[e] !== void 0), nf[e];
    return e;
  };
function MA(e, t, n) {
  const r = [],
    s = n || uy,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[o] || St : t;
      a = Mi(c, a);
    }
    r.push(a);
  }
  return r;
}
function FA(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((wc(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = MA(t, r, s),
    c = a.length,
    l = (u) => {
      if (o && u < e[0]) return t[0];
      let d = 0;
      if (c > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = hs(e[d], e[d + 1], u);
      return a[d](f);
    };
  return n ? (u) => l(Cn(e[0], e[i - 1], u)) : l;
}
function IA(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = hs(0, t, r);
    e.push(ke(n, 1, s));
  }
}
function LA(e) {
  const t = [0];
  return IA(t, e.length - 1), t;
}
function VA(e, t) {
  return e.map((n) => n * t);
}
function BA(e, t) {
  return e.map(() => t || hy).splice(0, e.length - 1);
}
function jo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = DA(r) ? r.map(rf) : rf(r),
    i = { done: !1, value: t[0] },
    o = VA(n && n.length === t.length ? n : LA(t), e),
    a = FA(o, t, { ease: Array.isArray(s) ? s : BA(t, s) });
  return {
    calculatedDuration: e,
    next: (c) => ((i.value = a(c)), (i.done = c >= e), i),
  };
}
const UA = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ae.update(t, !0),
      stop: () => Gn(t),
      now: () => (Ke.isProcessing ? Ke.timestamp : an.now()),
    };
  },
  $A = { decay: tf, inertia: tf, tween: jo, keyframes: jo, spring: fy },
  zA = (e) => e / 100;
class uu extends ay {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: c } = this.options;
        c && c();
      });
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || cu,
      a = (c, l) => this.onKeyframesResolved(c, l);
    (this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = tu(n) ? n : $A[n] || jo;
    let c, l;
    a !== jo &&
      typeof t[0] != "number" &&
      ((c = Mi(zA, uy(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (l = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = cy(u));
    const { calculatedDuration: d } = u,
      f = d + s,
      m = f * (r + 1) - s;
    return {
      generator: u,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: c,
      calculatedDuration: l,
      totalDuration: u,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: m,
      repeatType: g,
      repeatDelay: h,
      onUpdate: y,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const b = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      x = this.speed >= 0 ? b < 0 : b > u;
    (this.currentTime = Math.max(b, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u);
    let w = this.currentTime,
      C = i;
    if (m) {
      const T = Math.min(this.currentTime, u) / d;
      let O = Math.floor(T),
        D = T % 1;
      !D && T >= 1 && (D = 1),
        D === 1 && O--,
        (O = Math.min(O, m + 1)),
        !!(O % 2) &&
          (g === "reverse"
            ? ((D = 1 - D), h && (D -= h / d))
            : g === "mirror" && (C = o)),
        (w = Cn(0, 1, D) * d);
    }
    const S = x ? { done: !1, value: c[0] } : C.next(w);
    a && (S.value = a(S.value));
    let { done: R } = S;
    !x &&
      l !== null &&
      (R = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && R));
    return (
      A && s !== void 0 && (S.value = ca(c, this.options, s)),
      y && y(S.value),
      A && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? xn(t.calculatedDuration) : 0;
  }
  get time() {
    return xn(this.currentTime);
  }
  set time(t) {
    (t = bn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = xn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = UA, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = s)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const WA = new Set(["opacity", "clipPath", "filter", "transform"]);
function HA(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: c,
  } = {}
) {
  const l = { [t]: n };
  c && (l.offset = c);
  const u = Lg(a, s);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: s,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const qA = eu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Do = 10,
  GA = 2e4;
function ZA(e) {
  return tu(e.type) || e.type === "spring" || !Ig(e.ease);
}
function KA(e, t) {
  const n = new uu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < GA; ) (r = n.sample(i)), s.push(r.value), (i += Do);
  return { times: void 0, keyframes: s, duration: i - Do, ease: "linear" };
}
const py = { anticipate: Wg, backInOut: zg, circInOut: qg };
function QA(e) {
  return e in py;
}
class sf extends ay {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    (this.resolver = new oy(
      i,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      s
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: s,
      ease: i,
      type: o,
      motionValue: a,
      name: c,
      startTime: l,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && No() && QA(i) && (i = py[i]), ZA(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: m,
          element: g,
          ...h
        } = this.options,
        y = KA(t, h);
      (t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = y.duration),
        (s = y.times),
        (i = y.ease),
        (o = "keyframes");
    }
    const u = HA(a.owner.current, c, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (u.startTime = l ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Wd(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(ca(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: r, times: s, type: o, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return xn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return xn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = bn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return St;
      const { animation: r } = n;
      Wd(r, t);
    }
    return St;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: l,
          onUpdate: u,
          onComplete: d,
          element: f,
          ...m
        } = this.options,
        g = new uu({
          ...m,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        h = bn(this.time);
      l.setWithVelocity(g.sample(h - Do).value, g.sample(h).value, Do);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: c, transformTemplate: l } = n.owner.getProps();
    return (
      qA() &&
      r &&
      WA.has(r) &&
      !c &&
      !l &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const XA = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  YA = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  JA = { type: "keyframes", duration: 0.8 },
  eR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  tR = (e, { keyframes: t }) =>
    t.length > 2
      ? JA
      : kr.has(e)
      ? e.startsWith("scale")
        ? YA(t[1])
        : XA
      : eR;
function nR({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
const du =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = Ql(r, e) || {},
      c = a.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - bn(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -l,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    nR(a) || (u = { ...u, ...tR(e, u) }),
      u.duration && (u.duration = bn(u.duration)),
      u.repeatDelay && (u.repeatDelay = bn(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = ca(u.keyframes, a);
      if (f !== void 0)
        return (
          Ae.update(() => {
            u.onUpdate(f), u.onComplete();
          }),
          new MT([])
        );
    }
    return !i && sf.supports(u) ? new sf(u) : new uu(u);
  };
function rR({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function my(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (o = r);
  const l = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const d in c) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      m = c[d];
    if (m === void 0 || (u && rR(u, d))) continue;
    const g = { delay: n, ...Ql(o || {}, d) };
    let h = !1;
    if (window.MotionHandoffAnimation) {
      const b = Mg(e);
      if (b) {
        const x = window.MotionHandoffAnimation(b, d, Ae);
        x !== null && ((g.startTime = x), (h = !0));
      }
    }
    _c(e, d),
      f.start(
        du(d, f, m, e.shouldReduceMotion && jg.has(d) ? { type: !1 } : g, e, h)
      );
    const y = f.animation;
    y && l.push(y);
  }
  return (
    a &&
      Promise.all(l).then(() => {
        Ae.update(() => {
          a && NT(e, a);
        });
      }),
    l
  );
}
function Oc(e, t, n = {}) {
  var r;
  const s = aa(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(my(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return sR(e, t, u + l, d, f, n);
          }
        : () => Promise.resolve(),
    { when: c } = i;
  if (c) {
    const [l, u] = c === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function sR(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    c = s === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return (
    Array.from(e.variantChildren)
      .sort(iR)
      .forEach((l, u) => {
        l.notify("AnimationStart", t),
          o.push(
            Oc(l, t, { ...i, delay: n + c(u) }).then(() =>
              l.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function iR(e, t) {
  return e.sortNodePosition(t);
}
function oR(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Oc(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Oc(e, t, n);
  else {
    const s = typeof t == "function" ? aa(e, t, n.custom) : t;
    r = Promise.all(my(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const aR = Ll.length;
function gy(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? gy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < aR; n++) {
    const r = Ll[n],
      s = e.props[r];
    (hi(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const cR = [...Il].reverse(),
  lR = Il.length;
function uR(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => oR(e, n, r)));
}
function dR(e) {
  let t = uR(e),
    n = of(),
    r = !0;
  const s = (c) => (l, u) => {
    var d;
    const f = aa(
      e,
      u,
      c === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: m, transitionEnd: g, ...h } = f;
      l = { ...l, ...h, ...g };
    }
    return l;
  };
  function i(c) {
    t = c(e);
  }
  function o(c) {
    const { props: l } = e,
      u = gy(e.parent) || {},
      d = [],
      f = new Set();
    let m = {},
      g = 1 / 0;
    for (let y = 0; y < lR; y++) {
      const b = cR[y],
        x = n[b],
        w = l[b] !== void 0 ? l[b] : u[b],
        C = hi(w),
        S = b === c ? x.isActive : null;
      S === !1 && (g = y);
      let R = w === u[b] && w !== l[b] && C;
      if (
        (R && r && e.manuallyAnimateOnMount && (R = !1),
        (x.protectedKeys = { ...m }),
        (!x.isActive && S === null) ||
          (!w && !x.prevProp) ||
          ia(w) ||
          typeof w == "boolean")
      )
        continue;
      const A = fR(x.prevProp, w);
      let T = A || (b === c && x.isActive && !R && C) || (y > g && C),
        O = !1;
      const D = Array.isArray(w) ? w : [w];
      let F = D.reduce(s(b), {});
      S === !1 && (F = {});
      const { prevResolvedValues: j = {} } = x,
        U = { ...j, ...F },
        L = (H) => {
          (T = !0),
            f.has(H) && ((O = !0), f.delete(H)),
            (x.needsAnimating[H] = !0);
          const q = e.getValue(H);
          q && (q.liveStyle = !1);
        };
      for (const H in U) {
        const q = F[H],
          se = j[H];
        if (m.hasOwnProperty(H)) continue;
        let he = !1;
        Sc(q) && Sc(se) ? (he = !Og(q, se)) : (he = q !== se),
          he
            ? q != null
              ? L(H)
              : f.add(H)
            : q !== void 0 && f.has(H)
            ? L(H)
            : (x.protectedKeys[H] = !0);
      }
      (x.prevProp = w),
        (x.prevResolvedValues = F),
        x.isActive && (m = { ...m, ...F }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(R && A) || O) &&
          d.push(...D.map((H) => ({ animation: H, options: { type: b } })));
    }
    if (f.size) {
      const y = {};
      f.forEach((b) => {
        const x = e.getBaseTarget(b),
          w = e.getValue(b);
        w && (w.liveStyle = !0), (y[b] = x ?? null);
      }),
        d.push({ animation: y });
    }
    let h = !!d.length;
    return (
      r &&
        (l.initial === !1 || l.initial === l.animate) &&
        !e.manuallyAnimateOnMount &&
        (h = !1),
      (r = !1),
      h ? t(d) : Promise.resolve()
    );
  }
  function a(c, l) {
    var u;
    if (n[c].isActive === l) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((f) => {
        var m;
        return (m = f.animationState) === null || m === void 0
          ? void 0
          : m.setActive(c, l);
      }),
      (n[c].isActive = l);
    const d = o(c);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = of()), (r = !0);
    },
  };
}
function fR(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Og(t, e) : !1;
}
function Yn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function of() {
  return {
    animate: Yn(!0),
    whileInView: Yn(),
    whileHover: Yn(),
    whileTap: Yn(),
    whileDrag: Yn(),
    whileFocus: Yn(),
    exit: Yn(),
  };
}
class Kn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class hR extends Kn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dR(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ia(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let pR = 0;
class mR extends Kn {
  constructor() {
    super(...arguments), (this.id = pR++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const gR = { animation: { Feature: hR }, exit: { Feature: mR } },
  jt = { x: !1, y: !1 };
function yy() {
  return jt.x || jt.y;
}
function yR(e) {
  return e === "x" || e === "y"
    ? jt[e]
      ? null
      : ((jt[e] = !0),
        () => {
          jt[e] = !1;
        })
    : jt.x || jt.y
    ? null
    : ((jt.x = jt.y = !0),
      () => {
        jt.x = jt.y = !1;
      });
}
const fu = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function yi(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Fi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const vR = (e) => (t) => fu(t) && e(t, Fi(t));
function Ws(e, t, n, r) {
  return yi(e, t, vR(n), r);
}
const af = (e, t) => Math.abs(e - t);
function bR(e, t) {
  const n = af(e.x, t.x),
    r = af(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class vy {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Ba(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          m = bR(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !m) return;
        const { point: g } = d,
          { timestamp: h } = Ke;
        this.history.push({ ...g, timestamp: h });
        const { onStart: y, onMove: b } = this.handlers;
        f ||
          (y && y(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Va(f, this.transformPagePoint)),
          Ae.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: m, onSessionEnd: g, resumeAnimation: h } = this.handlers;
        if (
          (this.dragSnapToOrigin && h && h(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const y = Ba(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Va(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(d, y), g && g(d, y);
      }),
      !fu(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = Fi(t),
      a = Va(o, this.transformPagePoint),
      { point: c } = a,
      { timestamp: l } = Ke;
    this.history = [{ ...c, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Ba(a, this.history)),
      (this.removeListeners = Mi(
        Ws(this.contextWindow, "pointermove", this.handlePointerMove),
        Ws(this.contextWindow, "pointerup", this.handlePointerUp),
        Ws(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Gn(this.updatePoint);
  }
}
function Va(e, t) {
  return t ? { point: t(e.point) } : e;
}
function cf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ba({ point: e }, t) {
  return {
    point: e,
    delta: cf(e, by(t)),
    offset: cf(e, xR(t)),
    velocity: wR(t, 0.1),
  };
}
function xR(e) {
  return e[0];
}
function by(e) {
  return e[e.length - 1];
}
function wR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = by(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > bn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = xn(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const xy = 1e-4,
  SR = 1 - xy,
  _R = 1 + xy,
  wy = 0.01,
  CR = 0 - wy,
  ER = 0 + wy;
function _t(e) {
  return e.max - e.min;
}
function TR(e, t, n) {
  return Math.abs(e - t) <= n;
}
function lf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ke(t.min, t.max, e.origin)),
    (e.scale = _t(n) / _t(t)),
    (e.translate = ke(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= SR && e.scale <= _R) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= CR && e.translate <= ER) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Hs(e, t, n, r) {
  lf(e.x, t.x, n.x, r ? r.originX : void 0),
    lf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function uf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + _t(t));
}
function AR(e, t, n) {
  uf(e.x, t.x, n.x), uf(e.y, t.y, n.y);
}
function df(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + _t(t));
}
function qs(e, t, n) {
  df(e.x, t.x, n.x), df(e.y, t.y, n.y);
}
function RR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ke(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ke(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ff(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function PR(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: ff(e.x, n, s), y: ff(e.y, t, r) };
}
function hf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function kR(e, t) {
  return { x: hf(e.x, t.x), y: hf(e.y, t.y) };
}
function NR(e, t) {
  let n = 0.5;
  const r = _t(e),
    s = _t(t);
  return (
    s > r
      ? (n = hs(t.min, t.max - r, e.min))
      : r > s && (n = hs(e.min, e.max - s, t.min)),
    Cn(0, 1, n)
  );
}
function OR(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const jc = 0.35;
function jR(e = jc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = jc),
    { x: pf(e, "left", "right"), y: pf(e, "top", "bottom") }
  );
}
function pf(e, t, n) {
  return { min: mf(e, t), max: mf(e, n) };
}
function mf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const gf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Br = () => ({ x: gf(), y: gf() }),
  yf = () => ({ min: 0, max: 0 }),
  Le = () => ({ x: yf(), y: yf() });
function Tt(e) {
  return [e("x"), e("y")];
}
function Sy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function DR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function MR(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ua(e) {
  return e === void 0 || e === 1;
}
function Dc({ scale: e, scaleX: t, scaleY: n }) {
  return !Ua(e) || !Ua(t) || !Ua(n);
}
function Jn(e) {
  return (
    Dc(e) ||
    _y(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function _y(e) {
  return vf(e.x) || vf(e.y);
}
function vf(e) {
  return e && e !== "0%";
}
function Mo(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function bf(e, t, n, r, s) {
  return s !== void 0 && (e = Mo(e, s, r)), Mo(e, n, r) + t;
}
function Mc(e, t = 0, n = 1, r, s) {
  (e.min = bf(e.min, t, n, r, s)), (e.max = bf(e.max, t, n, r, s));
}
function Cy(e, { x: t, y: n }) {
  Mc(e.x, t.translate, t.scale, t.originPoint),
    Mc(e.y, n.translate, n.scale, n.originPoint);
}
const xf = 0.999999999999,
  wf = 1.0000000000001;
function FR(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    (i = n[a]), (o = i.projectionDelta);
    const { visualElement: c } = i.options;
    (c && c.props.style && c.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        $r(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Cy(e, o)),
      r && Jn(i.latestValues) && $r(e, i.latestValues));
  }
  t.x < wf && t.x > xf && (t.x = 1), t.y < wf && t.y > xf && (t.y = 1);
}
function Ur(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Sf(e, t, n, r, s = 0.5) {
  const i = ke(e.min, e.max, s);
  Mc(e, t, n, i, r);
}
function $r(e, t) {
  Sf(e.x, t.x, t.scaleX, t.scale, t.originX),
    Sf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ey(e, t) {
  return Sy(MR(e.getBoundingClientRect(), t));
}
function IR(e, t, n) {
  const r = Ey(e, n),
    { scroll: s } = t;
  return s && (Ur(r.x, s.offset.x), Ur(r.y, s.offset.y)), r;
}
const Ty = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  LR = new WeakMap();
class VR {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Le()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Fi(u).point);
      },
      i = (u, d) => {
        const { drag: f, dragPropagation: m, onDragStart: g } = this.getProps();
        if (
          f &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = yR(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Tt((y) => {
            let b = this.getAxisMotionValue(y).get() || 0;
            if (on.test(b)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const w = x.layout.layoutBox[y];
                w && (b = _t(w) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[y] = b;
          }),
          g && Ae.postRender(() => g(u, d)),
          _c(this.visualElement, "transform");
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      o = (u, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: m,
          onDirectionLock: g,
          onDrag: h,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: y } = d;
        if (m && this.currentDirection === null) {
          (this.currentDirection = BR(y)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, y),
          this.updateAxis("y", d.point, y),
          this.visualElement.render(),
          h && h(u, d);
      },
      a = (u, d) => this.stop(u, d),
      c = () =>
        Tt((u) => {
          var d;
          return (
            this.getAnimationState(u) === "paused" &&
            ((d = this.getAxisMotionValue(u).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new vy(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l,
        contextWindow: Ty(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && Ae.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Xi(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = RR(o, this.constraints[t], this.elastic[t])),
      i.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && Lr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = PR(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = jR(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Tt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = OR(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Lr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = IR(r, s.root, this.visualElement.getTransformPagePoint());
    let o = kR(s.layout.layoutBox, i);
    if (n) {
      const a = n(DR(o));
      (this.hasMutatedConstraints = !!a), a && (o = Sy(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      c = this.constraints || {},
      l = Tt((u) => {
        if (!Xi(u, n, this.currentDirection)) return;
        let d = c[u] || {};
        o && (d = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          m = s ? 40 : 1e7,
          g = {
            type: "inertia",
            velocity: r ? t[u] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(u, g);
      });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      _c(this.visualElement, t), r.start(du(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Tt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Tt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Tt((n) => {
      const { drag: r } = this.getProps();
      if (!Xi(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - ke(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Lr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Tt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[o] = NR({ min: c, max: c }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Tt((o) => {
        if (!Xi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: c, max: l } = this.constraints[o];
        a.set(ke(c, l, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    LR.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ws(t, "pointerdown", (c) => {
        const { drag: l, dragListener: u = !0 } = this.getProps();
        l && u && this.start(c);
      }),
      r = () => {
        const { dragConstraints: c } = this.getProps();
        Lr(c) && c.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      Ae.read(r);
    const o = yi(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: l }) => {
          this.isDragging &&
            l &&
            (Tt((u) => {
              const d = this.getAxisMotionValue(u);
              d &&
                ((this.originPoint[u] += c[u].translate),
                d.set(d.get() + c[u].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = jc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Xi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function BR(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class UR extends Kn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = St),
      (this.removeListeners = St),
      (this.controls = new VR(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || St);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const _f = (e) => (t, n) => {
  e && Ae.postRender(() => e(t, n));
};
class $R extends Kn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = St);
  }
  onPointerDown(t) {
    this.session = new vy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ty(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: _f(t),
      onStart: _f(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && Ae.postRender(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ws(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const lo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Cf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Os = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (ee.test(e)) e = parseFloat(e);
        else return e;
      const n = Cf(e, t.target.x),
        r = Cf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  zR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = Zn.parse(e);
      if (s.length > 5) return r;
      const i = Zn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + o] /= a), (s[1 + o] /= c);
      const l = ke(a, c, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= l),
        typeof s[3 + o] == "number" && (s[3 + o] /= l),
        i(s)
      );
    },
  };
class WR extends v.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    yT(HR),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (lo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              Ae.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Bl.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ay(e) {
  const [t, n] = fg(),
    r = v.useContext(jl);
  return p.jsx(WR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: v.useContext(bg),
    isPresent: t,
    safeToRemove: n,
  });
}
const HR = {
  borderRadius: {
    ...Os,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Os,
  borderTopRightRadius: Os,
  borderBottomLeftRadius: Os,
  borderBottomRightRadius: Os,
  boxShadow: zR,
};
function qR(e, t, n) {
  const r = rt(e) ? e : mi(e);
  return r.start(du("", r, t, n)), r.animation;
}
function GR(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const ZR = (e, t) => e.depth - t.depth;
class KR {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Xl(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Yl(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(ZR),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function QR(e, t) {
  const n = an.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Gn(r), e(i - t));
    };
  return Ae.read(r, !0), () => Gn(r);
}
const Ry = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  XR = Ry.length,
  Ef = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Tf = (e) => typeof e == "number" || ee.test(e);
function YR(e, t, n, r, s, i) {
  s
    ? ((e.opacity = ke(0, n.opacity !== void 0 ? n.opacity : 1, JR(r))),
      (e.opacityExit = ke(t.opacity !== void 0 ? t.opacity : 1, 0, eP(r))))
    : i &&
      (e.opacity = ke(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < XR; o++) {
    const a = `border${Ry[o]}Radius`;
    let c = Af(t, a),
      l = Af(n, a);
    if (c === void 0 && l === void 0) continue;
    c || (c = 0),
      l || (l = 0),
      c === 0 || l === 0 || Tf(c) === Tf(l)
        ? ((e[a] = Math.max(ke(Ef(c), Ef(l), r), 0)),
          (on.test(l) || on.test(c)) && (e[a] += "%"))
        : (e[a] = l);
  }
  (t.rotate || n.rotate) && (e.rotate = ke(t.rotate || 0, n.rotate || 0, r));
}
function Af(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const JR = Py(0, 0.5, Hg),
  eP = Py(0.5, 0.95, St);
function Py(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(hs(e, t, r)));
}
function Rf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Et(e, t) {
  Rf(e.x, t.x), Rf(e.y, t.y);
}
function Pf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function kf(e, t, n, r, s) {
  return (
    (e -= t), (e = Mo(e, 1 / n, r)), s !== void 0 && (e = Mo(e, 1 / s, r)), e
  );
}
function tP(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (on.test(t) &&
      ((t = parseFloat(t)), (t = ke(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ke(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = kf(e.min, t, n, a, s)),
    (e.max = kf(e.max, t, n, a, s));
}
function Nf(e, t, [n, r, s], i, o) {
  tP(e, t[n], t[r], t[s], t.scale, i, o);
}
const nP = ["x", "scaleX", "originX"],
  rP = ["y", "scaleY", "originY"];
function Of(e, t, n, r) {
  Nf(e.x, t, nP, n ? n.x : void 0, r ? r.x : void 0),
    Nf(e.y, t, rP, n ? n.y : void 0, r ? r.y : void 0);
}
function jf(e) {
  return e.translate === 0 && e.scale === 1;
}
function ky(e) {
  return jf(e.x) && jf(e.y);
}
function Df(e, t) {
  return e.min === t.min && e.max === t.max;
}
function sP(e, t) {
  return Df(e.x, t.x) && Df(e.y, t.y);
}
function Mf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Ny(e, t) {
  return Mf(e.x, t.x) && Mf(e.y, t.y);
}
function Ff(e) {
  return _t(e.x) / _t(e.y);
}
function If(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class iP {
  constructor() {
    this.members = [];
  }
  add(t) {
    Xl(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Yl(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function oP(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: l,
      rotate: u,
      rotateX: d,
      rotateY: f,
      skewX: m,
      skewY: g,
    } = n;
    l && (r = `perspective(${l}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      m && (r += `skewX(${m}deg) `),
      g && (r += `skewY(${g}deg) `);
  }
  const a = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none";
}
const er = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Fs = typeof window < "u" && window.MotionDebug !== void 0,
  $a = ["", "X", "Y", "Z"],
  aP = { visibility: "hidden" },
  Lf = 1e3;
let cP = 0;
function za(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Oy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Mg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ae, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Oy(r);
}
function jy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = cP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Fs &&
              (er.totalNodes =
                er.resolvedTargetDeltas =
                er.recalculatedProjection =
                  0),
            this.nodes.forEach(dP),
            this.nodes.forEach(gP),
            this.nodes.forEach(yP),
            this.nodes.forEach(fP),
            Fs && window.MotionDebug.record(er);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new KR());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Jl()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const c = this.eventHandlers.get(o);
      c && c.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = GR(o)), (this.instance = o);
      const { layoutId: c, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (l || c) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = QR(f, 250)),
            lo.hasAnimatedSinceResize &&
              ((lo.hasAnimatedSinceResize = !1), this.nodes.forEach(Bf));
        });
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          u &&
          (c || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: m,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const h =
                  this.options.transition || u.getDefaultTransition() || SP,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } =
                  u.getProps(),
                x = !this.targetLayout || !Ny(this.targetLayout, g),
                w = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                w ||
                (f && (x || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, w);
                const C = { ...Ql(h, "layout"), onPlay: y, onComplete: b };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || Bf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Gn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(vP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Oy(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c) return;
      const l = this.getTransformTemplate();
      (this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vf);
        return;
      }
      this.isUpdating || this.nodes.forEach(pP),
        (this.isUpdating = !1),
        this.nodes.forEach(mP),
        this.nodes.forEach(lP),
        this.nodes.forEach(uP),
        this.clearAllSnapshots();
      const a = an.now();
      (Ke.delta = Cn(0, 1e3 / 60, a - Ke.timestamp)),
        (Ke.timestamp = a),
        (Ke.isProcessing = !0),
        Ma.update.process(Ke),
        Ma.preRender.process(Ke),
        Ma.render.process(Ke),
        (Ke.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Bl.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(hP), this.sharedNodes.forEach(bP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ae.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Le()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !ky(this.projectionDelta),
        c = this.getTransformTemplate(),
        l = c ? c(this.latestValues, "") : void 0,
        u = l !== this.prevTransformTemplateValue;
      o &&
        (a || Jn(this.latestValues) || u) &&
        (s(this.instance, l),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return (
        o && (c = this.removeTransform(c)),
        _P(c),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return Le();
      const c = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(CP)
        )
      ) {
        const { scroll: u } = this.root;
        u && (Ur(c.x, u.offset.x), Ur(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(o) {
      var a;
      const c = Le();
      if (
        (Et(c, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return c;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: d, options: f } = u;
        u !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Et(c, o), Ur(c.x, d.offset.x), Ur(c.y, d.offset.y));
      }
      return c;
    }
    applyTransform(o, a = !1) {
      const c = Le();
      Et(c, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          $r(c, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Jn(u.latestValues) && $r(c, u.latestValues);
      }
      return Jn(this.latestValues) && $r(c, this.latestValues), c;
    }
    removeTransform(o) {
      const a = Le();
      Et(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !Jn(l.latestValues)) continue;
        Dc(l.latestValues) && l.updateSnapshot();
        const u = Le(),
          d = l.measurePageBox();
        Et(u, d),
          Of(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return Jn(this.latestValues) && Of(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ke.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== c;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ke.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Le()),
              (this.relativeTargetOrigin = Le()),
              qs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Et(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Le()), (this.targetWithTransforms = Le())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                AR(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Et(this.target, this.layout.layoutBox),
                Cy(this.target, this.targetDelta))
              : Et(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Le()),
                (this.relativeTargetOrigin = Le()),
                qs(this.relativeTargetOrigin, this.target, m.target),
                Et(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Fs && er.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Dc(this.parent.latestValues) ||
          _y(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        c = !!this.resumingFrom || this !== a;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (l = !1),
        c &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Ke.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || d))
      )
        return;
      Et(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      FR(this.layoutCorrected, this.treeScale, this.path, c),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Le()));
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Pf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Pf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Hs(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== m ||
          !If(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !If(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)),
        Fs && er.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Br()),
        (this.projectionDelta = Br()),
        (this.projectionDeltaWithTransform = Br());
    }
    setAnimationOrigin(o, a = !1) {
      const c = this.snapshot,
        l = c ? c.latestValues : {},
        u = { ...this.latestValues },
        d = Br();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Le(),
        m = c ? c.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        h = m !== g,
        y = this.getStack(),
        b = !y || y.members.length <= 1,
        x = !!(h && !b && this.options.crossfade === !0 && !this.path.some(wP));
      this.animationProgress = 0;
      let w;
      (this.mixTargetDelta = (C) => {
        const S = C / 1e3;
        Uf(d.x, o.x, S),
          Uf(d.y, o.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            xP(this.relativeTarget, this.relativeTargetOrigin, f, S),
            w && sP(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = Le()),
            Et(w, this.relativeTarget)),
          h &&
            ((this.animationValues = u), YR(u, l, this.latestValues, S, x, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ae.update(() => {
          (lo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = qR(0, Lf, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Lf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: c,
        layout: l,
        latestValues: u,
      } = o;
      if (!(!a || !c || !l)) {
        if (
          this !== o &&
          this.layout &&
          l &&
          Dy(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          c = this.target || Le();
          const d = _t(this.layout.layoutBox.x);
          (c.x.min = o.target.x.min), (c.x.max = c.x.min + d);
          const f = _t(this.layout.layoutBox.y);
          (c.y.min = o.target.y.min), (c.y.max = c.y.min + f);
        }
        Et(a, c),
          $r(a, u),
          Hs(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new iP()),
        this.sharedNodes.get(o).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity
            ? l.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: c } = o;
      if (
        ((c.z ||
          c.rotate ||
          c.rotateX ||
          c.rotateY ||
          c.rotateZ ||
          c.skewX ||
          c.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const l = {};
      c.z && za("z", o, l, this.animationValues);
      for (let u = 0; u < $a.length; u++)
        za(`rotate${$a[u]}`, o, l, this.animationValues),
          za(`skew${$a[u]}`, o, l, this.animationValues);
      o.render();
      for (const u in l)
        o.setStaticValue(u, l[u]),
          this.animationValues && (this.animationValues[u] = l[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, c;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return aP;
      const l = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ""),
          (l.pointerEvents = ao(o == null ? void 0 : o.pointerEvents) || ""),
          (l.transform = u ? u(this.latestValues, "") : "none"),
          l
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return (
          this.options.layoutId &&
            ((h.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (h.pointerEvents = ao(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Jn(this.latestValues) &&
            ((h.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          h
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (l.transform = oP(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        u && (l.transform = u(f, l.transform));
      const { x: m, y: g } = this.projectionDelta;
      (l.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`),
        d.animationValues
          ? (l.opacity =
              d === this
                ? (c =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (l.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const h in ko) {
        if (f[h] === void 0) continue;
        const { correct: y, applyTo: b } = ko[h],
          x = l.transform === "none" ? f[h] : y(f[h], d);
        if (b) {
          const w = b.length;
          for (let C = 0; C < w; C++) l[b[C]] = x;
        } else l[h] = x;
      }
      return (
        this.options.layoutId &&
          (l.pointerEvents =
            d === this
              ? ao(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        l
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Vf),
        this.root.sharedNodes.clear();
    }
  };
}
function lP(e) {
  e.updateLayout();
}
function uP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? Tt((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = _t(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : Dy(i, n.layoutBox, r) &&
        Tt((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = _t(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const a = Br();
    Hs(a, r, n.layoutBox);
    const c = Br();
    o ? Hs(c, e.applyTransform(s, !0), n.measuredBox) : Hs(c, r, n.layoutBox);
    const l = !ky(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const g = Le();
          qs(g, n.layoutBox, f.layoutBox);
          const h = Le();
          qs(h, r, m.layoutBox),
            Ny(g, h) || (u = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = h),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function dP(e) {
  Fs && er.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function fP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function hP(e) {
  e.clearSnapshot();
}
function Vf(e) {
  e.clearMeasurements();
}
function pP(e) {
  e.isLayoutDirty = !1;
}
function mP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Bf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function gP(e) {
  e.resolveTargetDelta();
}
function yP(e) {
  e.calcProjection();
}
function vP(e) {
  e.resetSkewAndRotation();
}
function bP(e) {
  e.removeLeadSnapshot();
}
function Uf(e, t, n) {
  (e.translate = ke(t.translate, 0, n)),
    (e.scale = ke(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function $f(e, t, n, r) {
  (e.min = ke(t.min, n.min, r)), (e.max = ke(t.max, n.max, r));
}
function xP(e, t, n, r) {
  $f(e.x, t.x, n.x, r), $f(e.y, t.y, n.y, r);
}
function wP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const SP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Wf = zf("applewebkit/") && !zf("chrome/") ? Math.round : St;
function Hf(e) {
  (e.min = Wf(e.min)), (e.max = Wf(e.max));
}
function _P(e) {
  Hf(e.x), Hf(e.y);
}
function Dy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !TR(Ff(t), Ff(n), 0.2))
  );
}
function CP(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const EP = jy({
    attachResizeListener: (e, t) => yi(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Wa = { current: void 0 },
  My = jy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Wa.current) {
        const e = new EP({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Wa.current = e);
      }
      return Wa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  TP = {
    pan: { Feature: $R },
    drag: { Feature: UR, ProjectionNode: My, MeasureLayout: Ay },
  };
function AP(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Fy(e, t) {
  const n = AP(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function qf(e) {
  return !(e.pointerType === "touch" || yy());
}
function RP(e, t, n = {}) {
  const [r, s, i] = Fy(e, n),
    o = (a) => {
      if (!qf(a)) return;
      const { target: c } = a,
        l = t(c, a);
      if (typeof l != "function" || !c) return;
      const u = (d) => {
        qf(d) && (l(d), c.removeEventListener("pointerleave", u));
      };
      c.addEventListener("pointerleave", u, s);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
function Gf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && Ae.postRender(() => i(t, Fi(t)));
}
class PP extends Kn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = RP(
        t,
        (n, r) => (Gf(this.node, r, "Start"), (s) => Gf(this.node, s, "End"))
      ));
  }
  unmount() {}
}
class kP extends Kn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Mi(
      yi(this.node.current, "focus", () => this.onFocus()),
      yi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Iy = (e, t) => (t ? (e === t ? !0 : Iy(e, t.parentElement)) : !1),
  NP = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function OP(e) {
  return NP.has(e.tagName) || e.tabIndex !== -1;
}
const Is = new WeakSet();
function Zf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Ha(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const jP = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Zf(() => {
    if (Is.has(n)) return;
    Ha(n, "down");
    const s = Zf(() => {
        Ha(n, "up");
      }),
      i = () => Ha(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Kf(e) {
  return fu(e) && !yy();
}
function DP(e, t, n = {}) {
  const [r, s, i] = Fy(e, n),
    o = (a) => {
      const c = a.currentTarget;
      if (!Kf(a) || Is.has(c)) return;
      Is.add(c);
      const l = t(c, a),
        u = (m, g) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!Kf(m) || !Is.has(c)) &&
              (Is.delete(c), typeof l == "function" && l(m, { success: g }));
        },
        d = (m) => {
          u(m, n.useGlobalTarget || Iy(c, m.target));
        },
        f = (m) => {
          u(m, !1);
        };
      window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", f, s);
    };
  return (
    r.forEach((a) => {
      !OP(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (l) => jP(l, s), s);
    }),
    i
  );
}
function Qf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && Ae.postRender(() => i(t, Fi(t)));
}
class MP extends Kn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = DP(
        t,
        (n, r) => (
          Qf(this.node, r, "Start"),
          (s, { success: i }) => Qf(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Fc = new WeakMap(),
  qa = new WeakMap(),
  FP = (e) => {
    const t = Fc.get(e.target);
    t && t(e);
  },
  IP = (e) => {
    e.forEach(FP);
  };
function LP({ root: e, ...t }) {
  const n = e || document;
  qa.has(n) || qa.set(n, {});
  const r = qa.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(IP, { root: e, ...t })), r[s];
}
function VP(e, t, n) {
  const r = LP(t);
  return (
    Fc.set(e, n),
    r.observe(e),
    () => {
      Fc.delete(e), r.unobserve(e);
    }
  );
}
const BP = { some: 0, all: 1 };
class UP extends Kn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : BP[s],
      },
      a = (c) => {
        const { isIntersecting: l } = c;
        if (
          this.isInView === l ||
          ((this.isInView = l), i && !l && this.hasEnteredView)
        )
          return;
        l && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", l);
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          f = l ? u : d;
        f && f(c);
      };
    return VP(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some($P(t, n)) && this.startObserver();
  }
  unmount() {}
}
function $P({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const zP = {
    inView: { Feature: UP },
    tap: { Feature: MP },
    focus: { Feature: kP },
    hover: { Feature: PP },
  },
  WP = { layout: { ProjectionNode: My, MeasureLayout: Ay } },
  Ic = { current: null },
  Ly = { current: !1 };
function HP() {
  if (((Ly.current = !0), !!Fl))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ic.current = e.matches);
      e.addListener(t), t();
    } else Ic.current = !1;
}
const qP = [...iy, tt, Zn],
  GP = (e) => qP.find(sy(e)),
  Xf = new WeakMap();
function ZP(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (rt(s)) e.addValue(r, s);
    else if (rt(i)) e.addValue(r, mi(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, mi(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Yf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class KP {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = cu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const m = an.now();
        this.renderScheduledAt < m &&
          ((this.renderScheduledAt = m), Ae.render(this.render, !1, !0));
      });
    const { latestValues: c, renderState: l, onUpdate: u } = o;
    (this.onUpdate = u),
      (this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = oa(n)),
      (this.isVariantNode = yg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const m in f) {
      const g = f[m];
      c[m] !== void 0 && rt(g) && g.set(c[m], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Xf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Ly.current || HP(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ic.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Xf.delete(this.current),
      this.projection && this.projection.unmount(),
      Gn(this.notifyUpdate),
      Gn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = kr.has(t),
      s = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Ae.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        s(), i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in fs) {
      const n = fs[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Le();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Yf.length; r++) {
      const s = Yf[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = ZP(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = mi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (ny(s) || Gg(s))
          ? (s = parseFloat(s))
          : !GP(s) && Zn.test(n) && (s = Jg(t, n)),
        this.setBaseTarget(t, rt(s) ? s.get() : s)),
      rt(s) ? s.get() : s
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = $l(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !rt(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Jl()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Vy extends KP {
  constructor() {
    super(...arguments), (this.KeyframeResolver = oy);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    rt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function QP(e) {
  return window.getComputedStyle(e);
}
class XP extends Vy {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Tg);
  }
  readValueFromInstance(t, n) {
    if (kr.has(n)) {
      const r = au(n);
      return (r && r.default) || 0;
    } else {
      const r = QP(t),
        s = (_g(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Ey(t, n);
  }
  build(t, n, r) {
    Hl(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Kl(t, n, r);
  }
}
class YP extends Vy {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Le);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (kr.has(n)) {
      const r = au(n);
      return (r && r.default) || 0;
    }
    return (n = Ag.has(n) ? n : Vl(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return kg(t, n, r);
  }
  build(t, n, r) {
    ql(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    Rg(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = Zl(t.tagName)), super.mount(t);
  }
}
const JP = (e, t) =>
    Ul(e) ? new YP(t) : new XP(t, { allowProjection: e !== v.Fragment }),
  ek = TT({ ...gR, ...zP, ...TP, ...WP }, JP),
  gr = UE(ek),
  tk = Ee.object({
    type: Ee.string(),
    company_name: Ee.string().min(3, {
      message: "Название компании должно быть не менее 3 символов",
    }),
    representative_name: Ee.string().min(3, {
      message: "Имя представителя должно быть не менее 3 символов",
    }),
    job_title: Ee.string().min(3, {
      message: "Должность должна быть не менее 3 символов",
    }),
    participants_number: Ee.string().min(1, {
      message: "Укажите количество участников",
    }),
    country: Ee.string().min(3, {
      message: "Название страны должно быть не менее 3 символов",
    }),
    email_address: Ee.string().email({ message: "Укажите корректный email" }),
    phone_number: Ee.string().min(8, {
      message: "Номер телефона должен быть не менее 8 символов",
    }),
    website: Ee.string().optional(),
    meeting_objective: Ee.string().min(3, { message: "Укажите цель встречи" }),
    proposal_description: Ee.string().optional(),
    government_agency: Ee.string().optional(),
    sector_industry: Ee.string().optional(),
    key_services: Ee.string().optional(),
    government_experience: Ee.string().optional(),
    preferred_meeting_datetime: Ee.string().optional(),
    meeting_mode: Ee.string().optional(),
    language_preference: Ee.string().optional(),
    technical_requirements: Ee.string().optional(),
    company_profile: Ee.custom((e) => e instanceof File, {
      message: "Выберите корректный файл",
    })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    proposal_presentation: Ee.custom((e) => e instanceof File, {
      message: "Выберите корректный файл",
    })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    relevant_certification: Ee.custom((e) => e instanceof File, {
      message: "Выберите корректный файл",
    })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
  }),
  nk = {
    type: "B2B",
    company_name: "",
    representative_name: "",
    job_title: "",
    participants_number: "",
    country: "",
    email_address: "",
    phone_number: "",
    website: "",
    meeting_objective: "",
    proposal_description: "",
    government_agency: "",
    sector_industry: "",
    key_services: "",
    government_experience: "",
    preferred_meeting_datetime: "",
    meeting_mode: "",
    language_preference: "",
    technical_requirements: "",
  };
var rk = "Label",
  By = v.forwardRef((e, t) =>
    p.jsx(Me.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var s;
        n.target.closest("button, input, select, textarea") ||
          ((s = e.onMouseDown) == null || s.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
By.displayName = rk;
var Uy = By;
const sk = sl(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  $y = v.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Uy, { ref: n, className: Q(sk(), e), ...t })
  );
$y.displayName = Uy.displayName;
const ik = mS,
  zy = v.createContext({}),
  Wy = ({ ...e }) =>
    p.jsx(zy.Provider, {
      value: { name: e.name },
      children: p.jsx(bS, { ...e }),
    }),
  la = () => {
    const e = v.useContext(zy),
      t = v.useContext(Hy),
      { getFieldState: n, formState: r } = Pr(),
      s = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: i } = t;
    return {
      id: i,
      name: e.name,
      formItemId: `${i}-form-item`,
      formDescriptionId: `${i}-form-item-description`,
      formMessageId: `${i}-form-item-message`,
      ...s,
    };
  },
  Hy = v.createContext({}),
  Gs = v.forwardRef(({ className: e, ...t }, n) => {
    const r = v.useId();
    return p.jsx(Hy.Provider, {
      value: { id: r },
      children: p.jsx("div", { ref: n, className: Q("space-y-2", e), ...t }),
    });
  });
Gs.displayName = "FormItem";
const Zs = v.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = la();
  return p.jsx($y, {
    ref: n,
    className: Q(r && "text-destructive", e),
    htmlFor: s,
    ...t,
  });
});
Zs.displayName = "FormLabel";
const Ks = v.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: i,
  } = la();
  return p.jsx(Vn, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${s} ${i}` : `${s}`,
    "aria-invalid": !!n,
    ...e,
  });
});
Ks.displayName = "FormControl";
const ok = v.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = la();
  return p.jsx("p", {
    ref: n,
    id: r,
    className: Q("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
ok.displayName = "FormDescription";
const qy = v.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: s, formMessageId: i } = la(),
    o = s ? String(s == null ? void 0 : s.message) : t;
  return o
    ? p.jsx("p", {
        ref: r,
        id: i,
        className: Q("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: o,
      })
    : null;
});
qy.displayName = "FormMessage";
function ak(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ar(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (m) => {
      const { scope: g, children: h } = m,
        y = fe.useRef(null),
        b = fe.useRef(new Map()).current;
      return p.jsx(s, { scope: g, itemMap: b, collectionRef: y, children: h });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    c = fe.forwardRef((m, g) => {
      const { scope: h, children: y } = m,
        b = i(a, h),
        x = Ze(g, b.collectionRef);
      return p.jsx(Vn, { ref: x, children: y });
    });
  c.displayName = a;
  const l = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    d = fe.forwardRef((m, g) => {
      const { scope: h, children: y, ...b } = m,
        x = fe.useRef(null),
        w = Ze(g, x),
        C = i(l, h);
      return (
        fe.useEffect(
          () => (
            C.itemMap.set(x, { ref: x, ...b }), () => void C.itemMap.delete(x)
          )
        ),
        p.jsx(Vn, { [u]: "", ref: w, children: y })
      );
    });
  d.displayName = l;
  function f(m) {
    const g = i(e + "CollectionConsumer", m);
    return fe.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const b = Array.from(y.querySelectorAll(`[${u}]`));
      return Array.from(g.itemMap.values()).sort(
        (C, S) => b.indexOf(C.ref.current) - b.indexOf(S.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: o, Slot: c, ItemSlot: d }, f, r];
}
var ck = v.createContext(void 0);
function Gy(e) {
  const t = v.useContext(ck);
  return e || t || "ltr";
}
var Ga = "rovingFocusGroup.onEntryFocus",
  lk = { bubbles: !1, cancelable: !0 },
  ua = "RovingFocusGroup",
  [Lc, Zy, uk] = ak(ua),
  [dk, Ky] = Ar(ua, [uk]),
  [fk, hk] = dk(ua),
  Qy = v.forwardRef((e, t) =>
    p.jsx(Lc.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: p.jsx(Lc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(pk, { ...e, ref: t }),
      }),
    })
  );
Qy.displayName = ua;
var pk = v.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: s = !1,
        dir: i,
        currentTabStopId: o,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: c,
        onEntryFocus: l,
        preventScrollOnEntryFocus: u = !1,
        ...d
      } = e,
      f = v.useRef(null),
      m = Ze(t, f),
      g = Gy(i),
      [h = null, y] = Vo({ prop: o, defaultProp: a, onChange: c }),
      [b, x] = v.useState(!1),
      w = Ut(l),
      C = Zy(n),
      S = v.useRef(!1),
      [R, A] = v.useState(0);
    return (
      v.useEffect(() => {
        const T = f.current;
        if (T)
          return T.addEventListener(Ga, w), () => T.removeEventListener(Ga, w);
      }, [w]),
      p.jsx(fk, {
        scope: n,
        orientation: r,
        dir: g,
        loop: s,
        currentTabStopId: h,
        onItemFocus: v.useCallback((T) => y(T), [y]),
        onItemShiftTab: v.useCallback(() => x(!0), []),
        onFocusableItemAdd: v.useCallback(() => A((T) => T + 1), []),
        onFocusableItemRemove: v.useCallback(() => A((T) => T - 1), []),
        children: p.jsx(Me.div, {
          tabIndex: b || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: Te(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: Te(e.onFocus, (T) => {
            const O = !S.current;
            if (T.target === T.currentTarget && O && !b) {
              const D = new CustomEvent(Ga, lk);
              if ((T.currentTarget.dispatchEvent(D), !D.defaultPrevented)) {
                const F = C().filter((Z) => Z.focusable),
                  j = F.find((Z) => Z.active),
                  U = F.find((Z) => Z.id === h),
                  Y = [j, U, ...F].filter(Boolean).map((Z) => Z.ref.current);
                Jy(Y, u);
              }
            }
            S.current = !1;
          }),
          onBlur: Te(e.onBlur, () => x(!1)),
        }),
      })
    );
  }),
  Xy = "RovingFocusGroupItem",
  Yy = v.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: s = !1,
        tabStopId: i,
        ...o
      } = e,
      a = Bs(),
      c = i || a,
      l = hk(Xy, n),
      u = l.currentTabStopId === c,
      d = Zy(n),
      { onFocusableItemAdd: f, onFocusableItemRemove: m } = l;
    return (
      v.useEffect(() => {
        if (r) return f(), () => m();
      }, [r, f, m]),
      p.jsx(Lc.ItemSlot, {
        scope: n,
        id: c,
        focusable: r,
        active: s,
        children: p.jsx(Me.span, {
          tabIndex: u ? 0 : -1,
          "data-orientation": l.orientation,
          ...o,
          ref: t,
          onMouseDown: Te(e.onMouseDown, (g) => {
            r ? l.onItemFocus(c) : g.preventDefault();
          }),
          onFocus: Te(e.onFocus, () => l.onItemFocus(c)),
          onKeyDown: Te(e.onKeyDown, (g) => {
            if (g.key === "Tab" && g.shiftKey) {
              l.onItemShiftTab();
              return;
            }
            if (g.target !== g.currentTarget) return;
            const h = yk(g, l.orientation, l.dir);
            if (h !== void 0) {
              if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
              g.preventDefault();
              let b = d()
                .filter((x) => x.focusable)
                .map((x) => x.ref.current);
              if (h === "last") b.reverse();
              else if (h === "prev" || h === "next") {
                h === "prev" && b.reverse();
                const x = b.indexOf(g.currentTarget);
                b = l.loop ? vk(b, x + 1) : b.slice(x + 1);
              }
              setTimeout(() => Jy(b));
            }
          }),
        }),
      })
    );
  });
Yy.displayName = Xy;
var mk = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function gk(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function yk(e, t, n) {
  const r = gk(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return mk[r];
}
function Jy(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function vk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var bk = Qy,
  xk = Yy;
function wk(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var hu = "Radio",
  [Sk, ev] = Ar(hu),
  [_k, Ck] = Sk(hu),
  tv = v.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: r,
        checked: s = !1,
        required: i,
        disabled: o,
        value: a = "on",
        onCheck: c,
        form: l,
        ...u
      } = e,
      [d, f] = v.useState(null),
      m = Ze(t, (y) => f(y)),
      g = v.useRef(!1),
      h = d ? l || !!d.closest("form") : !0;
    return p.jsxs(_k, {
      scope: n,
      checked: s,
      disabled: o,
      children: [
        p.jsx(Me.button, {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": sv(s),
          "data-disabled": o ? "" : void 0,
          disabled: o,
          value: a,
          ...u,
          ref: m,
          onClick: Te(e.onClick, (y) => {
            s || c == null || c(),
              h &&
                ((g.current = y.isPropagationStopped()),
                g.current || y.stopPropagation());
          }),
        }),
        h &&
          p.jsx(Ek, {
            control: d,
            bubbles: !g.current,
            name: r,
            value: a,
            checked: s,
            required: i,
            disabled: o,
            form: l,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
tv.displayName = hu;
var nv = "RadioIndicator",
  rv = v.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...s } = e,
      i = Ck(nv, n);
    return p.jsx(gs, {
      present: r || i.checked,
      children: p.jsx(Me.span, {
        "data-state": sv(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...s,
        ref: t,
      }),
    });
  });
rv.displayName = nv;
var Ek = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...s } = e,
    i = v.useRef(null),
    o = wk(n),
    a = Lp(t);
  return (
    v.useEffect(() => {
      const c = i.current,
        l = window.HTMLInputElement.prototype,
        d = Object.getOwnPropertyDescriptor(l, "checked").set;
      if (o !== n && d) {
        const f = new Event("click", { bubbles: r });
        d.call(c, n), c.dispatchEvent(f);
      }
    }, [o, n, r]),
    p.jsx("input", {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...s,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function sv(e) {
  return e ? "checked" : "unchecked";
}
var Tk = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  pu = "RadioGroup",
  [Ak, IN] = Ar(pu, [Ky, ev]),
  iv = Ky(),
  ov = ev(),
  [Rk, Pk] = Ak(pu),
  av = v.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: r,
        defaultValue: s,
        value: i,
        required: o = !1,
        disabled: a = !1,
        orientation: c,
        dir: l,
        loop: u = !0,
        onValueChange: d,
        ...f
      } = e,
      m = iv(n),
      g = Gy(l),
      [h, y] = Vo({ prop: i, defaultProp: s, onChange: d });
    return p.jsx(Rk, {
      scope: n,
      name: r,
      required: o,
      disabled: a,
      value: h,
      onValueChange: y,
      children: p.jsx(bk, {
        asChild: !0,
        ...m,
        orientation: c,
        dir: g,
        loop: u,
        children: p.jsx(Me.div, {
          role: "radiogroup",
          "aria-required": o,
          "aria-orientation": c,
          "data-disabled": a ? "" : void 0,
          dir: g,
          ...f,
          ref: t,
        }),
      }),
    });
  });
av.displayName = pu;
var cv = "RadioGroupItem",
  lv = v.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...s } = e,
      i = Pk(cv, n),
      o = i.disabled || r,
      a = iv(n),
      c = ov(n),
      l = v.useRef(null),
      u = Ze(t, l),
      d = i.value === s.value,
      f = v.useRef(!1);
    return (
      v.useEffect(() => {
        const m = (h) => {
            Tk.includes(h.key) && (f.current = !0);
          },
          g = () => (f.current = !1);
        return (
          document.addEventListener("keydown", m),
          document.addEventListener("keyup", g),
          () => {
            document.removeEventListener("keydown", m),
              document.removeEventListener("keyup", g);
          }
        );
      }, []),
      p.jsx(xk, {
        asChild: !0,
        ...a,
        focusable: !o,
        active: d,
        children: p.jsx(tv, {
          disabled: o,
          required: i.required,
          checked: d,
          ...c,
          ...s,
          name: i.name,
          ref: u,
          onCheck: () => i.onValueChange(s.value),
          onKeyDown: Te((m) => {
            m.key === "Enter" && m.preventDefault();
          }),
          onFocus: Te(s.onFocus, () => {
            var m;
            f.current && ((m = l.current) == null || m.click());
          }),
        }),
      })
    );
  });
lv.displayName = cv;
var kk = "RadioGroupIndicator",
  Nk = v.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      s = ov(n);
    return p.jsx(rv, { ...s, ...r, ref: t });
  });
Nk.displayName = kk;
var uv = av,
  dv = lv;
const fv = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(uv, { className: Q("grid gap-2", e), ...t, ref: n })
);
fv.displayName = uv.displayName;
const Vc = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(dv, {
    ref: n,
    className: Q(
      t.checked
        ? "border-primary after:bg-opacity-1"
        : "border-on_surface bg-transparent after:bg-opacity-0",
      "size-5 rounded-full border-[2px] after:size-[9px] after:bg-primary before:scale-0  hover:before:scale-100 before:size-10 before:rounded-full before:transition-all before:absolute before:-top-3 before:-left-3 before:bg-on_surface/[8%] duration-300 after:rounded-full flex relative items-center justify-center text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
  })
);
Vc.displayName = dv.displayName;
const pn = [
    {
      h2: "Информация об участнике:",
      data: [
        { label: "Название компании/организации" },
        { label: "Имя представителя" },
        { label: "Название должности/позиция" },
        { label: "Количество участников" },
        { label: "Страна" },
        { label: "Email" },
        { label: "Номер телефона" },
        { label: "Веб-сайт" },
      ],
    },
    {
      h2: "Applicant Information:",
      data: [
        { label: "Company/Organization Name" },
        { label: "Name of Representative" },
        { label: "Job title/Position" },
        { label: "Number of the participants" },
        { label: "Country" },
        { label: "Email" },
        { label: "Phone number" },
        { label: "Website" },
      ],
    },
  ],
  An = [
    {
      h2: "Цели встречи:",
      secondH2: "Информация о компании/организации:",
      data: [
        { label: "Основная цель встречи" },
        { label: "Краткое описание вашего предложения/проекта/запроса" },
        { label: "Соответствующее государственное учреждение/департамент" },
        { label: "Отраслевая промышленность" },
        { label: "Ключевые услуги/продукты" },
        { label: "Предыдущий опыт работы с правительствами (если применимо)" },
      ],
    },
    {
      h2: "Meeting Purpose: ",
      secondH2: "Company/Organization Profile:",
      data: [
        { label: "Primary objective of the meeting" },
        { label: "Brief description of your proposal/project/request" },
        { label: "Relevant government agency/department" },
        { label: "Sector Industry " },
        { label: "Key Services/Products" },
        {
          label: "Previous Experience working with Governments (if applicable)",
        },
      ],
    },
  ],
  Ot = [
    {
      h2: "Логистика встречи:",
      secondH2: "Логистика встречи:",
      subtitle:
        "(Пожалуйста приложите следующие документы, если это необходимо)",
      data: [
        { label: "Предпочтительная дата и время" },
        {
          label:
            "Предпочтительный способ проведения встречи (лично, виртуально (через zoom/ teams/другое), гибридный)",
        },
        {
          label:
            "Предпочитаемый язык (английский, туркменский, русский, другой)",
        },
        {
          label:
            "Дополнительные технические или логистические требования (например, аудио-видео оборудование, переводчики и т.д.)",
        },
        { label: "Название компании/организации" },
        { label: "Предложение/презентация" },
        { label: "Соответствующие сертификаты/лицензии" },
      ],
      button: "Отправить",
    },
    {
      h2: "Meeting Logistics:",
      secondH2: "Attachments",
      subtitle: "(Please attach the following documents as applicable)",
      data: [
        { label: "Preferred date and time for the meeting" },
        {
          label:
            "Preferred mode of meeting (in-person, virtual (via zoom/teams/other), hybrid)",
        },
        { label: "Language preference (English, turkmen, Russian, other)" },
        {
          label:
            "Additional technical or logistical requirements (e.g. AV equipment, interpreters, etc)",
        },
        { label: "Company/organization profile" },
        { label: "Proposal presentation" },
        { label: "Relevant certification/licenses" },
      ],
      button: "Send",
    },
  ],
  ie = (e) => (e === vt.RU ? 0 : 1),
  Ok = ({ handleNext: e }) => {
    const { control: t, formState: n } = Pr(),
      r = Re((s) => s.lang);
    return p.jsxs(gr.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, y: "100%", transition: { duration: 0.2 } },
      className: "w-full",
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: pn[ie(r)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            p.jsx(Wy, {
              defaultValue: 1,
              control: t,
              name: "type",
              render: ({ field: s }) =>
                p.jsxs(Gs, {
                  className: "space-y-3",
                  children: [
                    p.jsx(Zs, {
                      className: "text-xl",
                      children: r === vt.RU ? "Тип:" : "Type:",
                    }),
                    p.jsx(Ks, {
                      children: p.jsxs(fv, {
                        onValueChange: s.onChange,
                        defaultValue: s.value,
                        className: "flex flex-col space-y-4",
                        children: [
                          p.jsxs(Gs, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              p.jsx(Ks, {
                                children: p.jsx(Vc, {
                                  value: "B2B",
                                  checked: s.value === "B2B",
                                }),
                              }),
                              p.jsx(Zs, {
                                className: "text-base",
                                children: "B2B",
                              }),
                            ],
                          }),
                          p.jsxs(Gs, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              p.jsx(Ks, {
                                children: p.jsx(Vc, {
                                  value: "B2G",
                                  checked: s.value === "B2G",
                                }),
                              }),
                              p.jsx(Zs, {
                                className: "text-base",
                                children: "B2G",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            }),
            p.jsx(Be, {
              control: t,
              name: "company_name",
              error: n.errors.company_name,
              placeholder: "",
              label: pn[ie(r)].data[0].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "representative_name",
              error: n.errors.representative_name,
              placeholder: "",
              label: pn[ie(r)].data[1].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "job_title",
              error: n.errors.job_title,
              placeholder: "",
              label: pn[ie(r)].data[2].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "participants_number",
              error: n.errors.participants_number,
              placeholder: "",
              label: pn[ie(r)].data[3].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "country",
              error: n.errors.country,
              placeholder: "",
              label: pn[ie(r)].data[4].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "email_address",
              error: n.errors.email_address,
              placeholder: "",
              label: pn[ie(r)].data[5].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "phone_number",
              error: n.errors.phone_number,
              placeholder: "",
              label: pn[ie(r)].data[6].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "website",
              placeholder: "",
              label: pn[ie(r)].data[7].label,
            }),
          ],
        }),
        p.jsx(Xe, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: r === vt.RU ? "Далее" : "Next",
        }),
      ],
    });
  },
  jk = ({ handleNext: e }) => {
    const { control: t, formState: n } = Pr(),
      r = Re((s) => s.lang);
    return p.jsxs(gr.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      exit: { opacity: 0, y: 100 },
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: An[ie(r)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            p.jsx(Be, {
              control: t,
              name: "meeting_objective",
              error: n.errors.meeting_objective,
              placeholder: "",
              label: An[ie(r)].data[0].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "proposal_description",
              error: n.errors.proposal_description,
              placeholder: "",
              label: An[ie(r)].data[1].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "government_agency",
              error: n.errors.government_agency,
              placeholder: "",
              label: An[ie(r)].data[2].label,
            }),
            p.jsx("h2", { className: "h2 mt-4", children: An[ie(r)].secondH2 }),
            p.jsx(Be, {
              control: t,
              name: "sector_industry",
              error: n.errors.sector_industry,
              placeholder: "",
              label: An[ie(r)].data[3].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "key_services",
              error: n.errors.key_services,
              placeholder: "",
              label: An[ie(r)].data[4].label,
            }),
            p.jsx(Be, {
              control: t,
              name: "government_experience",
              error: n.errors.government_experience,
              placeholder: "",
              label: An[ie(r)].data[5].label,
            }),
          ],
        }),
        p.jsx(Xe, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: r === vt.RU ? "Далее" : "Next",
        }),
      ],
    });
  },
  Bc = v.forwardRef(({ className: e, type: t, ...n }, r) =>
    t !== "file"
      ? p.jsx("input", {
          type: t,
          className: Q(
            "flex h-14 rounded-[2px] ring-outline p-4 ring-1 focus:outline-none focus:ring-[3px] focus:ring-primary transition-all hover:ring-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            e
          ),
          ref: r,
          ...n,
        })
      : p.jsxs("div", {
          className: "relative w-[160px] h-9 overflow-hidden !cursor-pointer",
          children: [
            p.jsx("input", {
              ref: r,
              accept: ".pdf, .png, .jpeg, .jpg",
              type: t,
              className: Q(
                "h-9 absolute top-0 left-0 !cursor-pointer opacity-0 z-20 size-full"
              ),
              ...n,
            }),
            p.jsxs("div", {
              className:
                "absolute rounded-[2px] cursor-pointer size-full flex items-center gap-4 px-3 py-2.5 top-0 left-0 bg-secondary_container",
              children: [
                p.jsx(Ub, { className: "cursor-pointer", size: 16 }),
                " Upload file",
              ],
            }),
          ],
        })
  );
Bc.displayName = "Input";
const hv = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx("textarea", {
    className: Q(
      "flex rounded-[2px] resize-none ring-outline p-4 ring-1 focus:outline-none focus:ring-[3px] focus:ring-primary transition-all hover:ring-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
hv.displayName = "Textarea";
const Be = ({
    control: e,
    name: t,
    label: n,
    placeholder: r,
    error: s,
    type: i = "text",
    className: o,
    disabled: a,
    textArea: c = !1,
    textDark: l,
    supporText: u,
    handleChange: d,
    onPrimary: f = !1,
  }) =>
    p.jsx(Wy, {
      control: e,
      name: t,
      render: ({ field: m }) =>
        p.jsxs(Gs, {
          className: Q(o, "flex flex-col w-full relative"),
          children: [
            p.jsx(Zs, {
              className: Q(
                "text-xl",
                f && "!text-on_primary",
                l ? "text-on_surface" : "text-on_surface_v"
              ),
              children: n,
            }),
            p.jsx(Ks, {
              children: p.jsx(p.Fragment, {
                children: c
                  ? p.jsx(hv, {
                      rows: 3,
                      ...m,
                      placeholder: r,
                      className: Q(
                        s && "border-[#BA1A1A]",
                        f &&
                          "ring-primary_outline_reverse focus:ring-white hover:ring-white focus:ring-[3px] text-on_primary"
                      ),
                    })
                  : i !== "file"
                  ? p.jsx(Bc, {
                      ...m,
                      type: i,
                      placeholder: r,
                      disabled: a,
                      className: Q(
                        s && "ring-[#BA1A1A]",
                        f &&
                          "ring-primary_outline_reverse focus:ring-white hover:ring-white focus:ring-[3px] text-on_primary"
                      ),
                    })
                  : p.jsxs("div", {
                      className: "relative",
                      children: [
                        p.jsx(Bc, {
                          type: "file",
                          placeholder: r,
                          onChange: (g) => {
                            var y;
                            const h =
                              ((y = g.target.files) == null ? void 0 : y[0]) ||
                              null;
                            m.onChange(h), d && d(g);
                          },
                          disabled: a,
                        }),
                        m.value &&
                          p.jsxs("div", {
                            className:
                              "text-sm mt-2 text-gray-500 absolute top-8",
                            children: ["Выбранный файл: ", m.value.name],
                          }),
                      ],
                    }),
              }),
            }),
            p.jsx(qy, {
              className: Q(
                "absolute -bottom-5 left-0 text-xs font-medium leading-[130%]",
                s && f ? "text-teritary_04" : "text-[#BA1A1A]"
              ),
              children: s ? s.message : u,
            }),
          ],
        }),
    }),
  Dk = () => {
    const { control: e, formState: t } = Pr(),
      n = Re((r) => r.lang);
    return p.jsxs(gr.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      transition: { duration: 1 },
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: Ot[ie(n)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            p.jsx(Be, {
              control: e,
              name: "preferred_meeting_datetime",
              error: t.errors.preferred_meeting_datetime,
              placeholder: "",
              label: Ot[ie(n)].data[0].label,
            }),
            p.jsx(Be, {
              control: e,
              name: "preferred_mode",
              error: t.errors.preferred_mode,
              placeholder: "",
              label: Ot[ie(n)].data[1].label,
            }),
            p.jsx(Be, {
              control: e,
              name: "language_preference",
              error: t.errors.language_preference,
              placeholder: "",
              label: Ot[ie(n)].data[2].label,
            }),
            p.jsx(Be, {
              control: e,
              name: "additional_technical",
              error: t.errors.additional_technical,
              placeholder: "",
              label: Ot[ie(n)].data[3].label,
            }),
          ],
        }),
        p.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            p.jsxs("div", {
              className: "",
              children: [
                p.jsx("h3", {
                  className: "h2 mt-10",
                  children: Ot[ie(n)].secondH2,
                }),
                p.jsx("h5", {
                  className: "text-on_surface_v",
                  children: Ot[ie(n)].subtitle,
                }),
              ],
            }),
            p.jsx(Be, {
              control: e,
              name: "company_profile",
              label: Ot[ie(n)].data[4].label,
              type: "file",
              textDark: !0,
            }),
            p.jsx(Be, {
              control: e,
              name: "proposal_presentation",
              label: Ot[ie(n)].data[5].label,
              type: "file",
              textDark: !0,
            }),
            p.jsx(Be, {
              control: e,
              name: "relevant_certification",
              label: Ot[ie(n)].data[6].label,
              type: "file",
              textDark: !0,
            }),
          ],
        }),
        p.jsx(Xe, {
          disabled: t.isSubmitting,
          type: "submit",
          className: "w-full mt-10",
          children: t.isSubmitting
            ? p.jsx(Mb, { className: "animate-spin" })
            : Ot[ie(n)].button,
        }),
      ],
    });
  },
  LN = ({ stage: e, setStage: t }) => {
    const [n, r] = v.useState(!1),
      s = Am({ resolver: Pm(tk), defaultValues: nk, mode: "onChange" }),
      i = (l) => {
        switch (l) {
          case 1:
            return [
              "type",
              "company_name",
              "representative_name",
              "job_title",
              "participants_number",
              "country",
              "email_address",
              "phone_number",
              "website",
            ];
          case 2:
            return [
              "meeting_objective",
              "proposal_description",
              "government_agency",
              "sector_industry",
              "key_services",
              "government_experience",
            ];
          case 3:
            return [
              "preferred_meeting_datetime",
              "meeting_mode",
              "language_preference",
              "technical_requirements",
              "company_profile",
              "proposal_presentation",
              "relevant_certification",
            ];
          default:
            return [];
        }
      },
      o = async () => {
        const l = i(e);
        (await s.trigger(l)) && t((d) => d + 1);
      },
      a = Re((l) => l.lang),
      c = async (l) => {
        try {
          const u = new FormData();
          Object.entries(l).forEach(([f, m]) => {
            m instanceof File
              ? (console.log(`Добавляем файл: ${f}`, m), u.append(f, m))
              : m !== void 0 &&
                (console.log(`Добавляем поле: ${f}`, m), u.append(f, m));
          }),
            (
              await $e.post("https://itse.turkmenexpo.com/app/api/v1/form", u, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  "Accept-Language": a,
                },
              })
            ).status === 201 &&
              (console.log("Форма успешно отправлена!"), r(!0));
        } catch (u) {
          console.error("Ошибка при отправке B2B формы:", u);
        }
      };
    return p.jsx(ik, {
      ...s,
      children: p.jsx("form", {
        onSubmit: s.handleSubmit(c),
        children: p.jsxs("div", {
          className: "relative",
          children: [
            p.jsx(Da, { children: e === 1 && p.jsx(Ok, { handleNext: o }) }),
            p.jsx(Da, { children: e === 2 && p.jsx(jk, { handleNext: o }) }),
            p.jsx(Da, { children: e === 3 && n === !1 && p.jsx(Dk, {}) }),
            n && p.jsx(Lk, {}),
          ],
        }),
      }),
    });
  };
var Za, Jf;
function Mk() {
  if (Jf) return Za;
  Jf = 1;
  var e = "Expected a function",
    t = NaN,
    n = "[object Symbol]",
    r = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    a = parseInt,
    c = typeof Ui == "object" && Ui && Ui.Object === Object && Ui,
    l = typeof self == "object" && self && self.Object === Object && self,
    u = c || l || Function("return this")(),
    d = Object.prototype,
    f = d.toString,
    m = Math.max,
    g = Math.min,
    h = function () {
      return u.Date.now();
    };
  function y(S, R, A) {
    var T,
      O,
      D,
      F,
      j,
      U,
      L = 0,
      Y = !1,
      Z = !1,
      H = !0;
    if (typeof S != "function") throw new TypeError(e);
    (R = C(R) || 0),
      b(A) &&
        ((Y = !!A.leading),
        (Z = "maxWait" in A),
        (D = Z ? m(C(A.maxWait) || 0, R) : D),
        (H = "trailing" in A ? !!A.trailing : H));
    function q(de) {
      var be = T,
        Fe = O;
      return (T = O = void 0), (L = de), (F = S.apply(Fe, be)), F;
    }
    function se(de) {
      return (L = de), (j = setTimeout(He, R)), Y ? q(de) : F;
    }
    function he(de) {
      var be = de - U,
        Fe = de - L,
        ze = R - be;
      return Z ? g(ze, D - Fe) : ze;
    }
    function ve(de) {
      var be = de - U,
        Fe = de - L;
      return U === void 0 || be >= R || be < 0 || (Z && Fe >= D);
    }
    function He() {
      var de = h();
      if (ve(de)) return Ye(de);
      j = setTimeout(He, he(de));
    }
    function Ye(de) {
      return (j = void 0), H && T ? q(de) : ((T = O = void 0), F);
    }
    function Je() {
      j !== void 0 && clearTimeout(j), (L = 0), (T = U = O = j = void 0);
    }
    function Nt() {
      return j === void 0 ? F : Ye(h());
    }
    function it() {
      var de = h(),
        be = ve(de);
      if (((T = arguments), (O = this), (U = de), be)) {
        if (j === void 0) return se(U);
        if (Z) return (j = setTimeout(He, R)), q(U);
      }
      return j === void 0 && (j = setTimeout(He, R)), F;
    }
    return (it.cancel = Je), (it.flush = Nt), it;
  }
  function b(S) {
    var R = typeof S;
    return !!S && (R == "object" || R == "function");
  }
  function x(S) {
    return !!S && typeof S == "object";
  }
  function w(S) {
    return typeof S == "symbol" || (x(S) && f.call(S) == n);
  }
  function C(S) {
    if (typeof S == "number") return S;
    if (w(S)) return t;
    if (b(S)) {
      var R = typeof S.valueOf == "function" ? S.valueOf() : S;
      S = b(R) ? R + "" : R;
    }
    if (typeof S != "string") return S === 0 ? S : +S;
    S = S.replace(r, "");
    var A = i.test(S);
    return A || o.test(S) ? a(S.slice(2), A ? 2 : 8) : s.test(S) ? t : +S;
  }
  return (Za = y), Za;
}
Mk();
var Fk = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Ik = typeof window > "u";
function Fo(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
  const r = (a) => (Ik ? t : window.matchMedia(a).matches),
    [s, i] = v.useState(() => (n ? r(e) : t));
  function o() {
    i(r(e));
  }
  return (
    Fk(() => {
      const a = window.matchMedia(e);
      return (
        o(),
        a.addListener ? a.addListener(o) : a.addEventListener("change", o),
        () => {
          a.removeListener
            ? a.removeListener(o)
            : a.removeEventListener("change", o);
        }
      );
    }, [e]),
    s
  );
}
const VN = ({ className: e, stage: t }) => {
    const n = Fo("(min-width: 768px");
    return p.jsx("div", {
      className: e,
      children: p.jsx("div", {
        className: "max-w-[808px] md:mx-auto my-20 mx-5",
        children: p.jsxs("div", {
          className: "relative h-14 w-full",
          children: [
            p.jsx("div", {
              className: Q(
                "h-2 absolute bg-[#D0D3D8] rounded-[2px] w-full top-0 left-0"
              ),
            }),
            p.jsx(gr.div, {
              initial: { width: 0 },
              animate: t === 2 ? { width: "20%" } : t === 3 && { width: "75%" },
              transition: { delay: 0.5, duration: 0.5 },
              className: Q(
                "h-2 absolute bg-primary rounded-[2px] top-0 left-0 z-[5]",
                { "w-[20%]": t === 2, "w-[75%]": t === 3 }
              ),
            }),
            p.jsx(gr.div, {
              initial: { width: n ? "50%" : "35%" },
              animate:
                t === 2 ? { width: "75%" } : t === 3 && { width: "100%" },
              className: Q(
                "bg-primary_container w-1/2 absolute top-0 left-0 rounded-[2px] z-[3] h-2"
              ),
            }),
            p.jsx(gr.div, {
              className: Q(
                "progress-circle absolute transition-all duration-500 -top-6 flex items-center justify-center",
                {
                  "bg-primary_container md:left-1/2 left-1/3": t === 1,
                  "bg-primary left-[20%] !text-on_primary": t === 2 || t === 3,
                }
              ),
              children: "1",
            }),
            p.jsx("div", {
              className: Q(
                "progress-circle absolute -top-6 right-[17%] transition-all -translate-x-1/2 flex items-center justify-center",
                {
                  "bg-[#D0D3D8]": t === 1,
                  "bg-primary_container": t === 2,
                  "bg-primary !text-on_primary": t === 3,
                }
              ),
              children: "2",
            }),
            p.jsx("div", {
              className: Q(
                "progress-circle absolute -top-6 right-0 transition-all duration-500 flex items-center justify-center",
                {
                  "bg-[#D0D3D8]": t === 1 || t === 2,
                  "bg-primary_container": t === 3,
                }
              ),
              children: "3",
            }),
          ],
        }),
      }),
    });
  },
  Lk = ({ className: e, delay: t = 0.15 }) =>
    p.jsxs(gr.div, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: t } },
      className: Q("flex flex-col gap-8 my-16", e),
      children: [
        p.jsx("h3", {
          className: "text-3xl text-center",
          children: "Форма успешно отправлена!",
        }),
        p.jsx(De, {
          className: "w-fit mx-auto",
          to: "/",
          children: p.jsx(Xe, {
            variant: "outline",
            children: "Вернуться на главную",
          }),
        }),
      ],
    }),
  BN = ({ title: e }) =>
    p.jsxs("div", {
      className: "relative flex items-center h-[216px] w-full justify-center",
      children: [
        p.jsx("img", {
          src: "/b2b-cover.png",
          className: "-z-10 absolute size-full object-cover top-0 left-0",
        }),
        p.jsx("h1", {
          className: "text-on_primary md:text-5xl text-3xl",
          children: e,
        }),
      ],
    }),
  Vk = ({ color: e = "black", className: t }) =>
    p.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      children: p.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.23021 8.01443C4.35919 7.70304 4.66305 7.5 5.00011 7.5H15.0001C15.3372 7.5 15.641 7.70304 15.77 8.01443C15.899 8.32583 15.8277 8.68426 15.5894 8.92259L10.5894 13.9226C10.2639 14.248 9.73629 14.248 9.41085 13.9226L4.41085 8.92259C4.17252 8.68426 4.10122 8.32583 4.23021 8.01443ZM7.01195 9.16667L10.0001 12.1548L12.9883 9.16667H7.01195Z",
        fill: e,
      }),
    }),
  Cr = ({ className: e }) =>
    p.jsx(ut, {
      className: Q("w-full py-20 h-full flex items-center justify-between", e),
      children: p.jsx(Mh, {
        className: "animate-spin mx-auto text-primary size-16",
      }),
    }),
  Bk = yp,
  Uk = vp,
  $k = bp,
  pv = v.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Uo, {
      ref: n,
      className: Q(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
pv.displayName = Uo.displayName;
const mv = v.forwardRef(({ className: e, children: t, ...n }, r) =>
  p.jsxs($k, {
    children: [
      p.jsx(pv, {}),
      p.jsxs($o, {
        ref: r,
        className: Q(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          p.jsxs(dl, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              p.jsx(Fh, { className: "h-4 w-4" }),
              p.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
mv.displayName = $o.displayName;
const zk = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(zo, {
    ref: n,
    className: Q("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
zk.displayName = zo.displayName;
const Wk = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Wo, { ref: n, className: Q("text-sm text-muted-foreground", e), ...t })
);
Wk.displayName = Wo.displayName;
const Hk = ({ className: e, title: t }) =>
  p.jsxs(Bk, {
    children: [
      p.jsx(Uk, {
        className: Q(
          "h-14 px-3 flex gap-3 items-center text-on_surface hover:bg-slate-300/50 transition-all",
          e
        ),
        children: t,
      }),
      p.jsx(mv, { children: p.jsx(ug, { modal: !0 }) }),
    ],
  });
function qk(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function eh(e) {
  return qk(e) || Array.isArray(e);
}
function Gk() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function mu(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const s = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== i
    ? !1
    : n.every((o) => {
        const a = e[o],
          c = t[o];
        return typeof a == "function"
          ? `${a}` == `${c}`
          : !eh(a) || !eh(c)
          ? a === c
          : mu(a, c);
      });
}
function th(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function Zk(e, t) {
  if (e.length !== t.length) return !1;
  const n = th(e),
    r = th(t);
  return n.every((s, i) => {
    const o = r[i];
    return mu(s, o);
  });
}
function gu(e) {
  return typeof e == "number";
}
function Uc(e) {
  return typeof e == "string";
}
function da(e) {
  return typeof e == "boolean";
}
function nh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ne(e) {
  return Math.abs(e);
}
function yu(e) {
  return Math.sign(e);
}
function Qs(e, t) {
  return Ne(e - t);
}
function Kk(e, t) {
  if (e === 0 || t === 0 || Ne(e) <= Ne(t)) return 0;
  const n = Qs(Ne(e), Ne(t));
  return Ne(n / e);
}
function Qk(e) {
  return Math.round(e * 100) / 100;
}
function vi(e) {
  return bi(e).map(Number);
}
function Bt(e) {
  return e[Ii(e)];
}
function Ii(e) {
  return Math.max(0, e.length - 1);
}
function vu(e, t) {
  return t === Ii(e);
}
function rh(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function bi(e) {
  return Object.keys(e);
}
function gv(e, t) {
  return [e, t].reduce(
    (n, r) => (
      bi(r).forEach((s) => {
        const i = n[s],
          o = r[s],
          a = nh(i) && nh(o);
        n[s] = a ? gv(i, o) : o;
      }),
      n
    ),
    {}
  );
}
function $c(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Xk(e, t) {
  const n = { start: r, center: s, end: i };
  function r() {
    return 0;
  }
  function s(c) {
    return i(c) / 2;
  }
  function i(c) {
    return t - c;
  }
  function o(c, l) {
    return Uc(e) ? n[e](c) : e(t, c, l);
  }
  return { measure: o };
}
function xi() {
  let e = [];
  function t(s, i, o, a = { passive: !0 }) {
    let c;
    if ("addEventListener" in s)
      s.addEventListener(i, o, a), (c = () => s.removeEventListener(i, o, a));
    else {
      const l = s;
      l.addListener(o), (c = () => l.removeListener(o));
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((s) => s());
  }
  const r = { add: t, clear: n };
  return r;
}
function Yk(e, t, n, r) {
  const s = xi(),
    i = 1e3 / 60;
  let o = null,
    a = 0,
    c = 0;
  function l() {
    s.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function u() {
    m(), s.clear();
  }
  function d(y) {
    if (!c) return;
    o || ((o = y), n(), n());
    const b = y - o;
    for (o = y, a += b; a >= i; ) n(), (a -= i);
    const x = a / i;
    r(x), c && (c = t.requestAnimationFrame(d));
  }
  function f() {
    c || (c = t.requestAnimationFrame(d));
  }
  function m() {
    t.cancelAnimationFrame(c), (o = null), (a = 0), (c = 0);
  }
  function g() {
    (o = null), (a = 0);
  }
  return { init: l, destroy: u, start: f, stop: m, update: n, render: r };
}
function Jk(e, t) {
  const n = t === "rtl",
    r = e === "y",
    s = r ? "y" : "x",
    i = r ? "x" : "y",
    o = !r && n ? -1 : 1,
    a = u(),
    c = d();
  function l(g) {
    const { height: h, width: y } = g;
    return r ? h : y;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function f(g) {
    return g * o;
  }
  return {
    scroll: s,
    cross: i,
    startEdge: a,
    endEdge: c,
    measureSize: l,
    direction: f,
  };
}
function Er(e = 0, t = 0) {
  const n = Ne(e - t);
  function r(l) {
    return l < e;
  }
  function s(l) {
    return l > t;
  }
  function i(l) {
    return r(l) || s(l);
  }
  function o(l) {
    return i(l) ? (r(l) ? e : t) : l;
  }
  function a(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: o,
    reachedAny: i,
    reachedMax: s,
    reachedMin: r,
    removeOffset: a,
  };
}
function yv(e, t, n) {
  const { constrain: r } = Er(0, e),
    s = e + 1;
  let i = o(t);
  function o(f) {
    return n ? Ne((s + f) % s) : r(f);
  }
  function a() {
    return i;
  }
  function c(f) {
    return (i = o(f)), d;
  }
  function l(f) {
    return u().set(a() + f);
  }
  function u() {
    return yv(e, a(), n);
  }
  const d = { get: a, set: c, add: l, clone: u };
  return d;
}
function e1(e, t, n, r, s, i, o, a, c, l, u, d, f, m, g, h, y, b, x) {
  const { cross: w, direction: C } = e,
    S = ["INPUT", "SELECT", "TEXTAREA"],
    R = { passive: !1 },
    A = xi(),
    T = xi(),
    O = Er(50, 225).constrain(m.measure(20)),
    D = { mouse: 300, touch: 400 },
    F = { mouse: 500, touch: 600 },
    j = g ? 43 : 25;
  let U = !1,
    L = 0,
    Y = 0,
    Z = !1,
    H = !1,
    q = !1,
    se = !1;
  function he(K) {
    if (!x) return;
    function pe(Ge) {
      (da(x) || x(K, Ge)) && it(Ge);
    }
    const _e = t;
    A.add(_e, "dragstart", (Ge) => Ge.preventDefault(), R)
      .add(_e, "touchmove", () => {}, R)
      .add(_e, "touchend", () => {})
      .add(_e, "touchstart", pe)
      .add(_e, "mousedown", pe)
      .add(_e, "touchcancel", be)
      .add(_e, "contextmenu", be)
      .add(_e, "click", Fe, !0);
  }
  function ve() {
    A.clear(), T.clear();
  }
  function He() {
    const K = se ? n : t;
    T.add(K, "touchmove", de, R)
      .add(K, "touchend", be)
      .add(K, "mousemove", de, R)
      .add(K, "mouseup", be);
  }
  function Ye(K) {
    const pe = K.nodeName || "";
    return S.includes(pe);
  }
  function Je() {
    return (g ? F : D)[se ? "mouse" : "touch"];
  }
  function Nt(K, pe) {
    const _e = d.add(yu(K) * -1),
      Ge = u.byDistance(K, !g).distance;
    return g || Ne(K) < O
      ? Ge
      : y && pe
      ? Ge * 0.5
      : u.byIndex(_e.get(), 0).distance;
  }
  function it(K) {
    const pe = $c(K, r);
    (se = pe),
      (q = g && pe && !K.buttons && U),
      (U = Qs(s.get(), o.get()) >= 2),
      !(pe && K.button !== 0) &&
        (Ye(K.target) ||
          ((Z = !0),
          i.pointerDown(K),
          l.useFriction(0).useDuration(0),
          s.set(o),
          He(),
          (L = i.readPoint(K)),
          (Y = i.readPoint(K, w)),
          f.emit("pointerDown")));
  }
  function de(K) {
    if (!$c(K, r) && K.touches.length >= 2) return be(K);
    const _e = i.readPoint(K),
      Ge = i.readPoint(K, w),
      gt = Qs(_e, L),
      Ct = Qs(Ge, Y);
    if (!H && !se && (!K.cancelable || ((H = gt > Ct), !H))) return be(K);
    const _ = i.pointerMove(K);
    gt > h && (q = !0),
      l.useFriction(0.3).useDuration(0.75),
      a.start(),
      s.add(C(_)),
      K.preventDefault();
  }
  function be(K) {
    const _e = u.byDistance(0, !1).index !== d.get(),
      Ge = i.pointerUp(K) * Je(),
      gt = Nt(C(Ge), _e),
      Ct = Kk(Ge, gt),
      _ = j - 10 * Ct,
      P = b + Ct / 50;
    (H = !1),
      (Z = !1),
      T.clear(),
      l.useDuration(_).useFriction(P),
      c.distance(gt, !g),
      (se = !1),
      f.emit("pointerUp");
  }
  function Fe(K) {
    q && (K.stopPropagation(), K.preventDefault(), (q = !1));
  }
  function ze() {
    return Z;
  }
  return { init: he, destroy: ve, pointerDown: ze };
}
function t1(e, t) {
  let r, s;
  function i(d) {
    return d.timeStamp;
  }
  function o(d, f) {
    const g = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return ($c(d, t) ? d : d.touches[0])[g];
  }
  function a(d) {
    return (r = d), (s = d), o(d);
  }
  function c(d) {
    const f = o(d) - o(s),
      m = i(d) - i(r) > 170;
    return (s = d), m && (r = d), f;
  }
  function l(d) {
    if (!r || !s) return 0;
    const f = o(s) - o(r),
      m = i(d) - i(r),
      g = i(d) - i(s) > 170,
      h = f / m;
    return m && !g && Ne(h) > 0.1 ? h : 0;
  }
  return { pointerDown: a, pointerMove: c, pointerUp: l, readPoint: o };
}
function n1() {
  function e(n) {
    const { offsetTop: r, offsetLeft: s, offsetWidth: i, offsetHeight: o } = n;
    return {
      top: r,
      right: s + i,
      bottom: r + o,
      left: s,
      width: i,
      height: o,
    };
  }
  return { measure: e };
}
function r1(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function s1(e, t, n, r, s, i, o) {
  const a = [e].concat(r);
  let c,
    l,
    u = [],
    d = !1;
  function f(y) {
    return s.measureSize(o.measure(y));
  }
  function m(y) {
    if (!i) return;
    (l = f(e)), (u = r.map(f));
    function b(x) {
      for (const w of x) {
        if (d) return;
        const C = w.target === e,
          S = r.indexOf(w.target),
          R = C ? l : u[S],
          A = f(C ? e : r[S]);
        if (Ne(A - R) >= 0.5) {
          y.reInit(), t.emit("resize");
          break;
        }
      }
    }
    (c = new ResizeObserver((x) => {
      (da(i) || i(y, x)) && b(x);
    })),
      n.requestAnimationFrame(() => {
        a.forEach((x) => c.observe(x));
      });
  }
  function g() {
    (d = !0), c && c.disconnect();
  }
  return { init: m, destroy: g };
}
function i1(e, t, n, r, s, i) {
  let o = 0,
    a = 0,
    c = s,
    l = i,
    u = e.get(),
    d = 0;
  function f() {
    const R = r.get() - e.get(),
      A = !c;
    let T = 0;
    return (
      A
        ? ((o = 0), n.set(r), e.set(r), (T = R))
        : (n.set(e), (o += R / c), (o *= l), (u += o), e.add(o), (T = u - d)),
      (a = yu(T)),
      (d = u),
      S
    );
  }
  function m() {
    const R = r.get() - t.get();
    return Ne(R) < 0.001;
  }
  function g() {
    return c;
  }
  function h() {
    return a;
  }
  function y() {
    return o;
  }
  function b() {
    return w(s);
  }
  function x() {
    return C(i);
  }
  function w(R) {
    return (c = R), S;
  }
  function C(R) {
    return (l = R), S;
  }
  const S = {
    direction: h,
    duration: g,
    velocity: y,
    seek: f,
    settled: m,
    useBaseFriction: x,
    useBaseDuration: b,
    useFriction: C,
    useDuration: w,
  };
  return S;
}
function o1(e, t, n, r, s) {
  const i = s.measure(10),
    o = s.measure(50),
    a = Er(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max",
      h = Ne(e[g] - t.get()),
      y = n.get() - t.get(),
      b = a.constrain(h / o);
    n.subtract(y * b),
      !m &&
        Ne(y) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return { shouldConstrain: l, constrain: u, toggleActive: d };
}
function a1(e, t, n, r, s) {
  const i = Er(-t + e, 0),
    o = d(),
    a = u(),
    c = f();
  function l(g, h) {
    return Qs(g, h) <= 1;
  }
  function u() {
    const g = o[0],
      h = Bt(o),
      y = o.lastIndexOf(g),
      b = o.indexOf(h) + 1;
    return Er(y, b);
  }
  function d() {
    return n
      .map((g, h) => {
        const { min: y, max: b } = i,
          x = i.constrain(g),
          w = !h,
          C = vu(n, h);
        return w ? b : C || l(y, x) ? y : l(b, x) ? b : x;
      })
      .map((g) => parseFloat(g.toFixed(3)));
  }
  function f() {
    if (t <= e + s) return [i.max];
    if (r === "keepSnaps") return o;
    const { min: g, max: h } = a;
    return o.slice(g, h);
  }
  return { snapsContained: c, scrollContainLimit: a };
}
function c1(e, t, n) {
  const r = t[0],
    s = n ? r - e : Bt(t);
  return { limit: Er(s, r) };
}
function l1(e, t, n, r) {
  const i = t.min + 0.1,
    o = t.max + 0.1,
    { reachedMin: a, reachedMax: c } = Er(i, o);
  function l(f) {
    return f === 1 ? c(n.get()) : f === -1 ? a(n.get()) : !1;
  }
  function u(f) {
    if (!l(f)) return;
    const m = e * (f * -1);
    r.forEach((g) => g.add(m));
  }
  return { loop: u };
}
function u1(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const o = i - t;
    return n ? o / -n : 0;
  }
  return { get: r };
}
function d1(e, t, n, r, s) {
  const { startEdge: i, endEdge: o } = e,
    { groupSlides: a } = s,
    c = d().map(t.measure),
    l = f(),
    u = m();
  function d() {
    return a(r)
      .map((h) => Bt(h)[o] - h[0][i])
      .map(Ne);
  }
  function f() {
    return r.map((h) => n[i] - h[i]).map((h) => -Ne(h));
  }
  function m() {
    return a(l)
      .map((h) => h[0])
      .map((h, y) => h + c[y]);
  }
  return { snaps: l, snapsAligned: u };
}
function f1(e, t, n, r, s, i) {
  const { groupSlides: o } = s,
    { min: a, max: c } = r,
    l = u();
  function u() {
    const f = o(i),
      m = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : m
      ? f
      : f.slice(a, c).map((g, h, y) => {
          const b = !h,
            x = vu(y, h);
          if (b) {
            const w = Bt(y[0]) + 1;
            return rh(w);
          }
          if (x) {
            const w = Ii(i) - Bt(y)[0] + 1;
            return rh(w, Bt(y)[0]);
          }
          return g;
        });
  }
  return { slideRegistry: l };
}
function h1(e, t, n, r, s) {
  const { reachedAny: i, removeOffset: o, constrain: a } = r;
  function c(g) {
    return g.concat().sort((h, y) => Ne(h) - Ne(y))[0];
  }
  function l(g) {
    const h = e ? o(g) : a(g),
      y = t
        .map((x, w) => ({ diff: u(x - h, 0), index: w }))
        .sort((x, w) => Ne(x.diff) - Ne(w.diff)),
      { index: b } = y[0];
    return { index: b, distance: h };
  }
  function u(g, h) {
    const y = [g, g + n, g - n];
    if (!e) return g;
    if (!h) return c(y);
    const b = y.filter((x) => yu(x) === h);
    return b.length ? c(b) : Bt(y) - n;
  }
  function d(g, h) {
    const y = t[g] - s.get(),
      b = u(y, h);
    return { index: g, distance: b };
  }
  function f(g, h) {
    const y = s.get() + g,
      { index: b, distance: x } = l(y),
      w = !e && i(y);
    if (!h || w) return { index: b, distance: g };
    const C = t[b] - x,
      S = g + u(C, 0);
    return { index: b, distance: S };
  }
  return { byDistance: f, byIndex: d, shortcut: u };
}
function p1(e, t, n, r, s, i, o) {
  function a(d) {
    const f = d.distance,
      m = d.index !== t.get();
    i.add(f),
      f && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      m && (n.set(t.get()), t.set(d.index), o.emit("select"));
  }
  function c(d, f) {
    const m = s.byDistance(d, f);
    a(m);
  }
  function l(d, f) {
    const m = t.clone().set(d),
      g = s.byIndex(m.get(), f);
    a(g);
  }
  return { distance: c, index: l };
}
function m1(e, t, n, r, s, i, o, a) {
  const c = { passive: !0, capture: !0 };
  let l = 0;
  function u(m) {
    if (!a) return;
    function g(h) {
      if (new Date().getTime() - l > 10) return;
      o.emit("slideFocusStart"), (e.scrollLeft = 0);
      const x = n.findIndex((w) => w.includes(h));
      gu(x) && (s.useDuration(0), r.index(x, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", d, !1),
      t.forEach((h, y) => {
        i.add(
          h,
          "focus",
          (b) => {
            (da(a) || a(m, b)) && g(y);
          },
          c
        );
      });
  }
  function d(m) {
    m.code === "Tab" && (l = new Date().getTime());
  }
  return { init: u };
}
function Ls(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = o(c);
  }
  function s(c) {
    t += o(c);
  }
  function i(c) {
    t -= o(c);
  }
  function o(c) {
    return gu(c) ? c : c.get();
  }
  return { get: n, set: r, add: s, subtract: i };
}
function vv(e, t) {
  const n = e.scroll === "x" ? o : a,
    r = t.style;
  let s = null,
    i = !1;
  function o(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function a(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function c(f) {
    if (i) return;
    const m = Qk(e.direction(f));
    m !== s && ((r.transform = n(m)), (s = m));
  }
  function l(f) {
    i = !f;
  }
  function u() {
    i ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: u, to: c, toggleActive: l };
}
function g1(e, t, n, r, s, i, o, a, c) {
  const u = vi(s),
    d = vi(s).reverse(),
    f = b().concat(x());
  function m(A, T) {
    return A.reduce((O, D) => O - s[D], T);
  }
  function g(A, T) {
    return A.reduce((O, D) => (m(O, T) > 0 ? O.concat([D]) : O), []);
  }
  function h(A) {
    return i.map((T, O) => ({
      start: T - r[O] + 0.5 + A,
      end: T + t - 0.5 + A,
    }));
  }
  function y(A, T, O) {
    const D = h(T);
    return A.map((F) => {
      const j = O ? 0 : -n,
        U = O ? n : 0,
        L = O ? "end" : "start",
        Y = D[F][L];
      return {
        index: F,
        loopPoint: Y,
        slideLocation: Ls(-1),
        translate: vv(e, c[F]),
        target: () => (a.get() > Y ? j : U),
      };
    });
  }
  function b() {
    const A = o[0],
      T = g(d, A);
    return y(T, n, !1);
  }
  function x() {
    const A = t - o[0] - 1,
      T = g(u, A);
    return y(T, -n, !0);
  }
  function w() {
    return f.every(({ index: A }) => {
      const T = u.filter((O) => O !== A);
      return m(T, t) <= 0.1;
    });
  }
  function C() {
    f.forEach((A) => {
      const { target: T, translate: O, slideLocation: D } = A,
        F = T();
      F !== D.get() && (O.to(F), D.set(F));
    });
  }
  function S() {
    f.forEach((A) => A.translate.clear());
  }
  return { canLoop: w, clear: S, loop: C, loopPoints: f };
}
function y1(e, t, n) {
  let r,
    s = !1;
  function i(c) {
    if (!n) return;
    function l(u) {
      for (const d of u)
        if (d.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((u) => {
      s || ((da(n) || n(c, u)) && l(u));
    })),
      r.observe(e, { childList: !0 });
  }
  function o() {
    r && r.disconnect(), (s = !0);
  }
  return { init: i, destroy: o };
}
function v1(e, t, n, r) {
  const s = {};
  let i = null,
    o = null,
    a,
    c = !1;
  function l() {
    (a = new IntersectionObserver(
      (g) => {
        c ||
          (g.forEach((h) => {
            const y = t.indexOf(h.target);
            s[y] = h;
          }),
          (i = null),
          (o = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r }
    )),
      t.forEach((g) => a.observe(g));
  }
  function u() {
    a && a.disconnect(), (c = !0);
  }
  function d(g) {
    return bi(s).reduce((h, y) => {
      const b = parseInt(y),
        { isIntersecting: x } = s[b];
      return ((g && x) || (!g && !x)) && h.push(b), h;
    }, []);
  }
  function f(g = !0) {
    if (g && i) return i;
    if (!g && o) return o;
    const h = d(g);
    return g && (i = h), g || (o = h), h;
  }
  return { init: l, destroy: u, get: f };
}
function b1(e, t, n, r, s, i) {
  const { measureSize: o, startEdge: a, endEdge: c } = e,
    l = n[0] && s,
    u = g(),
    d = h(),
    f = n.map(o),
    m = y();
  function g() {
    if (!l) return 0;
    const x = n[0];
    return Ne(t[a] - x[a]);
  }
  function h() {
    if (!l) return 0;
    const x = i.getComputedStyle(Bt(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function y() {
    return n
      .map((x, w, C) => {
        const S = !w,
          R = vu(C, w);
        return S ? f[w] + u : R ? f[w] + d : C[w + 1][a] - x[a];
      })
      .map(Ne);
  }
  return { slideSizes: f, slideSizesWithGaps: m, startGap: u, endGap: d };
}
function x1(e, t, n, r, s, i, o, a, c) {
  const { startEdge: l, endEdge: u, direction: d } = e,
    f = gu(n);
  function m(b, x) {
    return vi(b)
      .filter((w) => w % x === 0)
      .map((w) => b.slice(w, w + x));
  }
  function g(b) {
    return b.length
      ? vi(b)
          .reduce((x, w, C) => {
            const S = Bt(x) || 0,
              R = S === 0,
              A = w === Ii(b),
              T = s[l] - i[S][l],
              O = s[l] - i[w][u],
              D = !r && R ? d(o) : 0,
              F = !r && A ? d(a) : 0,
              j = Ne(O - F - (T + D));
            return C && j > t + c && x.push(w), A && x.push(b.length), x;
          }, [])
          .map((x, w, C) => {
            const S = Math.max(C[w - 1] || 0);
            return b.slice(S, x);
          })
      : [];
  }
  function h(b) {
    return f ? m(b, n) : g(b);
  }
  return { groupSlides: h };
}
function w1(e, t, n, r, s, i, o) {
  const {
      align: a,
      axis: c,
      direction: l,
      startIndex: u,
      loop: d,
      duration: f,
      dragFree: m,
      dragThreshold: g,
      inViewThreshold: h,
      slidesToScroll: y,
      skipSnaps: b,
      containScroll: x,
      watchResize: w,
      watchSlides: C,
      watchDrag: S,
      watchFocus: R,
    } = i,
    A = 2,
    T = n1(),
    O = T.measure(t),
    D = n.map(T.measure),
    F = Jk(c, l),
    j = F.measureSize(O),
    U = r1(j),
    L = Xk(a, j),
    Y = !d && !!x,
    Z = d || !!x,
    {
      slideSizes: H,
      slideSizesWithGaps: q,
      startGap: se,
      endGap: he,
    } = b1(F, O, D, n, Z, s),
    ve = x1(F, j, y, d, O, D, se, he, A),
    { snaps: He, snapsAligned: Ye } = d1(F, L, O, D, ve),
    Je = -Bt(He) + Bt(q),
    { snapsContained: Nt, scrollContainLimit: it } = a1(j, Je, Ye, x, A),
    de = Y ? Nt : Ye,
    { limit: be } = c1(Je, de, d),
    Fe = yv(Ii(de), u, d),
    ze = Fe.clone(),
    Se = vi(n),
    K = ({
      dragHandler: Zt,
      scrollBody: Qn,
      scrollBounds: Es,
      options: { loop: Xn },
    }) => {
      Xn || Es.constrain(Zt.pointerDown()), Qn.seek();
    },
    pe = (
      {
        scrollBody: Zt,
        translate: Qn,
        location: Es,
        offsetLocation: Xn,
        previousLocation: fa,
        scrollLooper: Vi,
        slideLooper: Dv,
        dragHandler: Mv,
        animation: Fv,
        eventHandler: Cu,
        scrollBounds: Iv,
        options: { loop: Eu },
      },
      Tu
    ) => {
      const Au = Zt.settled(),
        Lv = !Iv.shouldConstrain(),
        Ru = Eu ? Au : Au && Lv;
      Ru && !Mv.pointerDown() && (Fv.stop(), Cu.emit("settle")),
        Ru || Cu.emit("scroll");
      const Vv = Es.get() * Tu + fa.get() * (1 - Tu);
      Xn.set(Vv), Eu && (Vi.loop(Zt.direction()), Dv.loop()), Qn.to(Xn.get());
    },
    _e = Yk(
      r,
      s,
      () => K(Cs),
      (Zt) => pe(Cs, Zt)
    ),
    Ge = 0.68,
    gt = de[Fe.get()],
    Ct = Ls(gt),
    _ = Ls(gt),
    P = Ls(gt),
    N = Ls(gt),
    $ = i1(Ct, P, _, N, f, Ge),
    V = h1(d, de, Je, be, N),
    I = p1(_e, Fe, ze, $, V, N, o),
    J = u1(be),
    ce = xi(),
    We = v1(t, n, o, h),
    { slideRegistry: Ie } = f1(Y, x, de, it, ve, Se),
    Gt = m1(e, n, Ie, I, $, ce, o, R),
    Cs = {
      ownerDocument: r,
      ownerWindow: s,
      eventHandler: o,
      containerRect: O,
      slideRects: D,
      animation: _e,
      axis: F,
      dragHandler: e1(
        F,
        e,
        r,
        s,
        N,
        t1(F, s),
        Ct,
        _e,
        I,
        $,
        V,
        Fe,
        o,
        U,
        m,
        g,
        b,
        Ge,
        S
      ),
      eventStore: ce,
      percentOfView: U,
      index: Fe,
      indexPrevious: ze,
      limit: be,
      location: Ct,
      offsetLocation: P,
      previousLocation: _,
      options: i,
      resizeHandler: s1(t, o, s, n, F, w, T),
      scrollBody: $,
      scrollBounds: o1(be, P, N, $, U),
      scrollLooper: l1(Je, be, P, [Ct, P, _, N]),
      scrollProgress: J,
      scrollSnapList: de.map(J.get),
      scrollSnaps: de,
      scrollTarget: V,
      scrollTo: I,
      slideLooper: g1(F, j, Je, H, q, He, de, P, n),
      slideFocus: Gt,
      slidesHandler: y1(t, o, C),
      slidesInView: We,
      slideIndexes: Se,
      slideRegistry: Ie,
      slidesToScroll: ve,
      target: N,
      translate: vv(F, t),
    };
  return Cs;
}
function S1() {
  let e = {},
    t;
  function n(l) {
    t = l;
  }
  function r(l) {
    return e[l] || [];
  }
  function s(l) {
    return r(l).forEach((u) => u(t, l)), c;
  }
  function i(l, u) {
    return (e[l] = r(l).concat([u])), c;
  }
  function o(l, u) {
    return (e[l] = r(l).filter((d) => d !== u)), c;
  }
  function a() {
    e = {};
  }
  const c = { init: n, emit: s, off: o, on: i, clear: a };
  return c;
}
const _1 = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function C1(e) {
  function t(i, o) {
    return gv(i, o || {});
  }
  function n(i) {
    const o = i.breakpoints || {},
      a = bi(o)
        .filter((c) => e.matchMedia(c).matches)
        .map((c) => o[c])
        .reduce((c, l) => t(c, l), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((o) => bi(o.breakpoints || {}))
      .reduce((o, a) => o.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function E1(e) {
  let t = [];
  function n(i, o) {
    return (
      (t = o.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
      t.forEach((a) => a.init(i, e)),
      o.reduce((a, c) => Object.assign(a, { [c.name]: c }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function Io(e, t, n) {
  const r = e.ownerDocument,
    s = r.defaultView,
    i = C1(s),
    o = E1(i),
    a = xi(),
    c = S1(),
    { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = i,
    { on: f, off: m, emit: g } = c,
    h = F;
  let y = !1,
    b,
    x = l(_1, Io.globalOptions),
    w = l(x),
    C = [],
    S,
    R,
    A;
  function T() {
    const { container: Se, slides: K } = w;
    R = (Uc(Se) ? e.querySelector(Se) : Se) || e.children[0];
    const _e = Uc(K) ? R.querySelectorAll(K) : K;
    A = [].slice.call(_e || R.children);
  }
  function O(Se) {
    const K = w1(e, R, A, r, s, Se, c);
    if (Se.loop && !K.slideLooper.canLoop()) {
      const pe = Object.assign({}, Se, { loop: !1 });
      return O(pe);
    }
    return K;
  }
  function D(Se, K) {
    y ||
      ((x = l(x, Se)),
      (w = u(x)),
      (C = K || C),
      T(),
      (b = O(w)),
      d([x, ...C.map(({ options: pe }) => pe)]).forEach((pe) =>
        a.add(pe, "change", F)
      ),
      w.active &&
        (b.translate.to(b.location.get()),
        b.animation.init(),
        b.slidesInView.init(),
        b.slideFocus.init(ze),
        b.eventHandler.init(ze),
        b.resizeHandler.init(ze),
        b.slidesHandler.init(ze),
        b.options.loop && b.slideLooper.loop(),
        R.offsetParent && A.length && b.dragHandler.init(ze),
        (S = o.init(ze, C))));
  }
  function F(Se, K) {
    const pe = ve();
    j(), D(l({ startIndex: pe }, Se), K), c.emit("reInit");
  }
  function j() {
    b.dragHandler.destroy(),
      b.eventStore.clear(),
      b.translate.clear(),
      b.slideLooper.clear(),
      b.resizeHandler.destroy(),
      b.slidesHandler.destroy(),
      b.slidesInView.destroy(),
      b.animation.destroy(),
      o.destroy(),
      a.clear();
  }
  function U() {
    y || ((y = !0), a.clear(), j(), c.emit("destroy"), c.clear());
  }
  function L(Se, K, pe) {
    !w.active ||
      y ||
      (b.scrollBody.useBaseFriction().useDuration(K === !0 ? 0 : w.duration),
      b.scrollTo.index(Se, pe || 0));
  }
  function Y(Se) {
    const K = b.index.add(1).get();
    L(K, Se, -1);
  }
  function Z(Se) {
    const K = b.index.add(-1).get();
    L(K, Se, 1);
  }
  function H() {
    return b.index.add(1).get() !== ve();
  }
  function q() {
    return b.index.add(-1).get() !== ve();
  }
  function se() {
    return b.scrollSnapList;
  }
  function he() {
    return b.scrollProgress.get(b.location.get());
  }
  function ve() {
    return b.index.get();
  }
  function He() {
    return b.indexPrevious.get();
  }
  function Ye() {
    return b.slidesInView.get();
  }
  function Je() {
    return b.slidesInView.get(!1);
  }
  function Nt() {
    return S;
  }
  function it() {
    return b;
  }
  function de() {
    return e;
  }
  function be() {
    return R;
  }
  function Fe() {
    return A;
  }
  const ze = {
    canScrollNext: H,
    canScrollPrev: q,
    containerNode: be,
    internalEngine: it,
    destroy: U,
    off: m,
    on: f,
    emit: g,
    plugins: Nt,
    previousScrollSnap: He,
    reInit: h,
    rootNode: de,
    scrollNext: Y,
    scrollPrev: Z,
    scrollProgress: he,
    scrollSnapList: se,
    scrollTo: L,
    selectedScrollSnap: ve,
    slideNodes: Fe,
    slidesInView: Ye,
    slidesNotInView: Je,
  };
  return D(t, n), setTimeout(() => c.emit("init"), 0), ze;
}
Io.globalOptions = void 0;
function Nr(e = {}, t = []) {
  const n = v.useRef(e),
    r = v.useRef(t),
    [s, i] = v.useState(),
    [o, a] = v.useState(),
    c = v.useCallback(() => {
      s && s.reInit(n.current, r.current);
    }, [s]);
  return (
    v.useEffect(() => {
      mu(n.current, e) || ((n.current = e), c());
    }, [e, c]),
    v.useEffect(() => {
      Zk(r.current, t) || ((r.current = t), c());
    }, [t, c]),
    v.useEffect(() => {
      if (Gk() && o) {
        Io.globalOptions = Nr.globalOptions;
        const l = Io(o, n.current, r.current);
        return i(l), () => l.destroy();
      } else i(void 0);
    }, [o, i]),
    [a, s]
  );
}
Nr.globalOptions = void 0;
const T1 = [
    { id: 0, title: "Все участники" },
    { id: 1, title: "Туркменские компании" },
    { id: 2, title: "Иностранные компании" },
  ],
  UN = ({ className: e }) => {
    const [t, n] = v.useState(0),
      r = Fo("(min-width: 550px)"),
      [s, i] = v.useState({ left: 0, width: 0 }),
      [o, a] = Nr({ axis: "x", skipSnaps: !1 }),
      c = v.useRef([]);
    v.useEffect(() => {
      if (!a) return;
      const u = () => {
        const d = a.selectedScrollSnap();
        n(d);
      };
      return (
        a.on("select", u),
        () => {
          a.off("select", u);
        }
      );
    }, [a]),
      v.useEffect(() => {
        const u = c.current[t];
        if (u) {
          const { offsetLeft: d, offsetWidth: f } = u;
          i({ left: d, width: f });
        }
      }, [t]);
    const l = v.useCallback(
      (u) => {
        a && (a.scrollTo(u), n(u));
      },
      [a]
    );
    return p.jsxs("div", {
      role: "tablist",
      ref: r ? null : o,
      className: Q("w-[506px] mx-auto embla relative", e),
      children: [
        p.jsx("div", {
          className: "embla__container flex w-full",
          children: T1.map((u, d) =>
            p.jsx(
              "button",
              {
                ref: (f) => (c.current[d] = f),
                role: "tab",
                className: Q(
                  "embla__slide text-center h-12 mx-4 py-2 text-xs md:text-base w-fit transition-all",
                  t === u.id ? "text-primary" : "text-on_surface_v"
                ),
                onClick: () => (u ? n(d) : l(d)),
                children: u.title,
              },
              u.id
            )
          ),
        }),
        p.jsx("div", {
          className:
            "absolute bottom-0 h-[3px] rounded-t-[2px] bg-primary transition-all duration-200",
          style: s,
        }),
      ],
    });
  },
  A1 = [
    {
      data: [
        {
          title: "План выставки",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
          blank: !0,
        },
        { title: "Зарегистрироваться", link: "/stend-form" },
        {
          title: "B2B | B2G встречи",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSd3Fi6liioA_SXCJxxDv0-2DW3SRKuCUmHkkAwK075n0qAExw/viewform",
          blank: !0,
        },
        { title: "Мастер-классы <br> / семинары", link: "/become-sponsor" },
      ],
    },
    {
      data: [
        {
          title: "Floor Plan",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
          blank: !0,
        },
        { title: "Registration", link: "/stend-form" },
        {
          title: "B2B | B2G meetings",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSd3Fi6liioA_SXCJxxDv0-2DW3SRKuCUmHkkAwK075n0qAExw/viewform",
          blank: !0,
        },
        { title: "Masterclasses <br> / Seminars", link: "/become-sponsor" },
      ],
    },
  ],
  $N = () => {
    const [e] = Nr(),
      t = Re((a) => a.lang),
      { t: n } = Zo("home"),
      r = Fo("(min-width: 1024px)"),
      s = Fo("(min-width: 768px)");
    function i() {
      return n(r ? "banners.lg" : s ? "banners.md" : "banners.sm");
    }
    const o = ie(t);
    return p.jsxs("section", {
      className: "flex flex-col gap-5",
      children: [
        p.jsx("div", {
          ref: e,
          className: "embla",
          children: p.jsx("div", {
            className: "embla__container",
            children: p.jsx("div", {
              className: "embla__slide lg:max-h-[600px] lg:min-h-[320px]",
              children: p.jsx("img", {
                src: i(),
                alt: "main image",
                className: "size-full object-cover",
              }),
            }),
          }),
        }),
        p.jsx(ut, {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl",
          children: A1[o].data.map(({ title: a, link: c, blank: l }) =>
            p.jsx(
              De,
              {
                target: l ? "_blank" : "",
                to: c,
                className: "w-full",
                children: p.jsx(Xe, {
                  size: "lg",
                  variant: "secondary",
                  className:
                    "w-full overflow-hidden flex drop-shadow-sm shadow-md  bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90",
                  dangerouslySetInnerHTML: { __html: a ?? "" },
                }),
              },
              a
            )
          ),
        }),
      ],
    });
  },
  bv = [
    {
      title: "Время выставки",
      data: [
        { name: "Монтаж выставки", date: "1 — 27 апреля 2025 года" },
        { name: "Работа", date: "29 — 1 мая 2025 года" },
        { name: "Демонтаж", date: "1 — 2 мая 2025 года" },
      ],
    },
    {
      title: "Exhibition time",
      data: [
        { name: "Exhibition assembly", date: "1 — 27 april 2025" },
        { name: "Exhibition days", date: "29 — 1 may 2025" },
        { name: "Exhibition dismantling", date: "1 — 2 may 2025" },
      ],
    },
  ];
var Li = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Tr = typeof window > "u" || "Deno" in globalThis;
function Rt() {}
function R1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function xv(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Gr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sh(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== bu(o, t.options)) return !1;
    } else if (!Si(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function ih(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (wi(t.options.mutationKey) !== wi(i)) return !1;
    } else if (!Si(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function bu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || wi)(e);
}
function wi(e) {
  return JSON.stringify(e, (t, n) =>
    Hc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n
  );
}
function Si(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Si(e[n], t[n]))
    : !1;
}
function wv(e, t) {
  if (e === t) return e;
  const n = oh(e) && oh(t);
  if (n || (Hc(e) && Hc(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {};
    let c = 0;
    for (let l = 0; l < o; l++) {
      const u = n ? l : i[l];
      ((!n && r.includes(u)) || n) && e[u] === void 0 && t[u] === void 0
        ? ((a[u] = void 0), c++)
        : ((a[u] = wv(e[u], t[u])), a[u] === e[u] && e[u] !== void 0 && c++);
    }
    return s === o && c === s ? e : a;
  }
  return t;
}
function Wc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function oh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Hc(e) {
  if (!ah(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !ah(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function ah(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function P1(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function qc(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? wv(e, t)
    : t;
}
function k1(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function N1(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var xu = Symbol();
function Sv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === xu
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var sr,
  On,
  Zr,
  gh,
  O1 =
    ((gh = class extends Li {
      constructor() {
        super();
        ne(this, sr);
        ne(this, On);
        ne(this, Zr);
        G(this, Zr, (t) => {
          if (!Tr && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, On) || this.setEventListener(E(this, Zr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, On)) == null || t.call(this), G(this, On, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, Zr, t),
          (n = E(this, On)) == null || n.call(this),
          G(
            this,
            On,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        E(this, sr) !== t && (G(this, sr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof E(this, sr) == "boolean"
          ? E(this, sr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (sr = new WeakMap()),
    (On = new WeakMap()),
    (Zr = new WeakMap()),
    gh),
  wu = new O1(),
  Kr,
  jn,
  Qr,
  yh,
  j1 =
    ((yh = class extends Li {
      constructor() {
        super();
        ne(this, Kr, !0);
        ne(this, jn);
        ne(this, Qr);
        G(this, Qr, (t) => {
          if (!Tr && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, jn) || this.setEventListener(E(this, Qr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, jn)) == null || t.call(this), G(this, jn, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, Qr, t),
          (n = E(this, jn)) == null || n.call(this),
          G(this, jn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        E(this, Kr) !== t &&
          (G(this, Kr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return E(this, Kr);
      }
    }),
    (Kr = new WeakMap()),
    (jn = new WeakMap()),
    (Qr = new WeakMap()),
    yh),
  Lo = new j1();
function Gc() {
  let e, t;
  const n = new Promise((s, i) => {
    (e = s), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(s) {
    Object.assign(n, s), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (s) => {
      r({ status: "fulfilled", value: s }), e(s);
    }),
    (n.reject = (s) => {
      r({ status: "rejected", reason: s }), t(s);
    }),
    n
  );
}
function D1(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function _v(e) {
  return (e ?? "online") === "online" ? Lo.isOnline() : !0;
}
var Cv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ka(e) {
  return e instanceof Cv;
}
function Ev(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = Gc(),
    o = (h) => {
      var y;
      r || (f(new Cv(h)), (y = e.abort) == null || y.call(e));
    },
    a = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      wu.isFocused() &&
      (e.networkMode === "always" || Lo.isOnline()) &&
      e.canRun(),
    u = () => _v(e.networkMode) && e.canRun(),
    d = (h) => {
      var y;
      r ||
        ((r = !0),
        (y = e.onSuccess) == null || y.call(e, h),
        s == null || s(),
        i.resolve(h));
    },
    f = (h) => {
      var y;
      r ||
        ((r = !0),
        (y = e.onError) == null || y.call(e, h),
        s == null || s(),
        i.reject(h));
    },
    m = () =>
      new Promise((h) => {
        var y;
        (s = (b) => {
          (r || l()) && h(b);
        }),
          (y = e.onPause) == null || y.call(e);
      }).then(() => {
        var h;
        (s = void 0), r || (h = e.onContinue) == null || h.call(e);
      }),
    g = () => {
      if (r) return;
      let h;
      const y = n === 0 ? e.initialPromise : void 0;
      try {
        h = y ?? e.fn();
      } catch (b) {
        h = Promise.reject(b);
      }
      Promise.resolve(h)
        .then(d)
        .catch((b) => {
          var R;
          if (r) return;
          const x = e.retry ?? (Tr ? 0 : 3),
            w = e.retryDelay ?? D1,
            C = typeof w == "function" ? w(n, b) : w,
            S =
              x === !0 ||
              (typeof x == "number" && n < x) ||
              (typeof x == "function" && x(n, b));
          if (t || !S) {
            f(b);
            return;
          }
          n++,
            (R = e.onFail) == null || R.call(e, n, b),
            P1(C)
              .then(() => (l() ? void 0 : m()))
              .then(() => {
                t ? f(b) : g();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? g() : m().then(g), i),
  };
}
function M1() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = (a) => setTimeout(a, 0);
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      (e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((c) => {
                n(c);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let c;
      t++;
      try {
        c = a();
      } finally {
        t--, t || o();
      }
      return c;
    },
    batchCalls:
      (a) =>
      (...c) => {
        i(() => {
          a(...c);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var Qe = M1(),
  ir,
  vh,
  Tv =
    ((vh = class {
      constructor() {
        ne(this, ir);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          zc(this.gcTime) &&
            G(
              this,
              ir,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Tr ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        E(this, ir) && (clearTimeout(E(this, ir)), G(this, ir, void 0));
      }
    }),
    (ir = new WeakMap()),
    vh),
  Xr,
  Yr,
  At,
  or,
  et,
  _i,
  ar,
  Dt,
  gn,
  bh,
  F1 =
    ((bh = class extends Tv {
      constructor(t) {
        super();
        ne(this, Dt);
        ne(this, Xr);
        ne(this, Yr);
        ne(this, At);
        ne(this, or);
        ne(this, et);
        ne(this, _i);
        ne(this, ar);
        G(this, ar, !1),
          G(this, _i, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          G(this, or, t.client),
          G(this, At, E(this, or).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          G(this, Xr, I1(this.options)),
          (this.state = t.state ?? E(this, Xr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = E(this, et)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...E(this, _i), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          E(this, At).remove(this);
      }
      setData(t, n) {
        const r = qc(this.state.data, t, this.options);
        return (
          me(this, Dt, gn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        me(this, Dt, gn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = E(this, et)) == null ? void 0 : r.promise;
        return (
          (s = E(this, et)) == null || s.cancel(t),
          n ? n.then(Rt).catch(Rt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(E(this, Xr));
      }
      isActive() {
        return this.observers.some((t) => Ft(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === xu ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !xv(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, et)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, et)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          E(this, At).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (E(this, et) &&
              (E(this, ar)
                ? E(this, et).cancel({ revert: !0 })
                : E(this, et).cancelRetry()),
            this.scheduleGc()),
          E(this, At).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          me(this, Dt, gn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, l, u;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (E(this, et))
            return E(this, et).continueRetry(), E(this, et).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((f) => f.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          s = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (G(this, ar, !0), r.signal),
            });
          },
          i = () => {
            const d = Sv(this.options, n),
              f = {
                client: E(this, or),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              s(f),
              G(this, ar, !1),
              this.options.persister ? this.options.persister(d, f, this) : d(f)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: E(this, or),
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (c = this.options.behavior) == null || c.onFetch(o, this),
          G(this, Yr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((l = o.fetchOptions) == null ? void 0 : l.meta)) &&
            me(this, Dt, gn).call(this, {
              type: "fetch",
              meta: (u = o.fetchOptions) == null ? void 0 : u.meta,
            });
        const a = (d) => {
          var f, m, g, h;
          (Ka(d) && d.silent) ||
            me(this, Dt, gn).call(this, { type: "error", error: d }),
            Ka(d) ||
              ((m = (f = E(this, At).config).onError) == null ||
                m.call(f, d, this),
              (h = (g = E(this, At).config).onSettled) == null ||
                h.call(g, this.state.data, d, this)),
            this.scheduleGc();
        };
        return (
          G(
            this,
            et,
            Ev({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var f, m, g, h;
                if (d === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(d);
                } catch (y) {
                  a(y);
                  return;
                }
                (m = (f = E(this, At).config).onSuccess) == null ||
                  m.call(f, d, this),
                  (h = (g = E(this, At).config).onSettled) == null ||
                    h.call(g, d, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (d, f) => {
                me(this, Dt, gn).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: f,
                });
              },
              onPause: () => {
                me(this, Dt, gn).call(this, { type: "pause" });
              },
              onContinue: () => {
                me(this, Dt, gn).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          E(this, et).start()
        );
      }
    }),
    (Xr = new WeakMap()),
    (Yr = new WeakMap()),
    (At = new WeakMap()),
    (or = new WeakMap()),
    (et = new WeakMap()),
    (_i = new WeakMap()),
    (ar = new WeakMap()),
    (Dt = new WeakSet()),
    (gn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Av(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Ka(s) && s.revert && E(this, Yr)
              ? { ...E(this, Yr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Qe.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            E(this, At).notify({ query: this, type: "updated", action: t });
        });
    }),
    bh);
function Av(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: _v(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function I1(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Qt,
  xh,
  L1 =
    ((xh = class extends Li {
      constructor(t = {}) {
        super();
        ne(this, Qt);
        (this.config = t), G(this, Qt, new Map());
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? bu(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new F1({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        E(this, Qt).has(t.queryHash) ||
          (E(this, Qt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = E(this, Qt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && E(this, Qt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return E(this, Qt).get(t);
      }
      getAll() {
        return [...E(this, Qt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => sh(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => sh(t, r)) : n;
      }
      notify(t) {
        Qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Qt = new WeakMap()),
    xh),
  Xt,
  ot,
  cr,
  Yt,
  kn,
  wh,
  V1 =
    ((wh = class extends Tv {
      constructor(t) {
        super();
        ne(this, Yt);
        ne(this, Xt);
        ne(this, ot);
        ne(this, cr);
        (this.mutationId = t.mutationId),
          G(this, ot, t.mutationCache),
          G(this, Xt, []),
          (this.state = t.state || B1()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        E(this, Xt).includes(t) ||
          (E(this, Xt).push(t),
          this.clearGcTimeout(),
          E(this, ot).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        G(
          this,
          Xt,
          E(this, Xt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          E(this, ot).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        E(this, Xt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : E(this, ot).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = E(this, cr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, a, c, l, u, d, f, m, g, h, y, b, x, w, C, S, R, A;
        G(
          this,
          cr,
          Ev({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, O) => {
              me(this, Yt, kn).call(this, {
                type: "failed",
                failureCount: T,
                error: O,
              });
            },
            onPause: () => {
              me(this, Yt, kn).call(this, { type: "pause" });
            },
            onContinue: () => {
              me(this, Yt, kn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, ot).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !E(this, cr).canStart();
        try {
          if (!n) {
            me(this, Yt, kn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (s = E(this, ot).config).onMutate) == null
                ? void 0
                : i.call(s, t, this));
            const O = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            O !== this.state.context &&
              me(this, Yt, kn).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: r,
              });
          }
          const T = await E(this, cr).start();
          return (
            await ((l = (c = E(this, ot).config).onSuccess) == null
              ? void 0
              : l.call(c, T, t, this.state.context, this)),
            await ((d = (u = this.options).onSuccess) == null
              ? void 0
              : d.call(u, T, t, this.state.context)),
            await ((m = (f = E(this, ot).config).onSettled) == null
              ? void 0
              : m.call(
                  f,
                  T,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((h = (g = this.options).onSettled) == null
              ? void 0
              : h.call(g, T, null, t, this.state.context)),
            me(this, Yt, kn).call(this, { type: "success", data: T }),
            T
          );
        } catch (T) {
          try {
            throw (
              (await ((b = (y = E(this, ot).config).onError) == null
                ? void 0
                : b.call(y, T, t, this.state.context, this)),
              await ((w = (x = this.options).onError) == null
                ? void 0
                : w.call(x, T, t, this.state.context)),
              await ((S = (C = E(this, ot).config).onSettled) == null
                ? void 0
                : S.call(
                    C,
                    void 0,
                    T,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((A = (R = this.options).onSettled) == null
                ? void 0
                : A.call(R, void 0, T, t, this.state.context)),
              T)
            );
          } finally {
            me(this, Yt, kn).call(this, { type: "error", error: T });
          }
        } finally {
          E(this, ot).runNext(this);
        }
      }
    }),
    (Xt = new WeakMap()),
    (ot = new WeakMap()),
    (cr = new WeakMap()),
    (Yt = new WeakSet()),
    (kn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Qe.batch(() => {
          E(this, Xt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            E(this, ot).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    wh);
function B1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var vn,
  Mt,
  Ci,
  Sh,
  U1 =
    ((Sh = class extends Li {
      constructor(t = {}) {
        super();
        ne(this, vn);
        ne(this, Mt);
        ne(this, Ci);
        (this.config = t),
          G(this, vn, new Set()),
          G(this, Mt, new Map()),
          G(this, Ci, 0);
      }
      build(t, n, r) {
        const s = new V1({
          mutationCache: this,
          mutationId: ++Bi(this, Ci)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(t) {
        E(this, vn).add(t);
        const n = Yi(t);
        if (typeof n == "string") {
          const r = E(this, Mt).get(n);
          r ? r.push(t) : E(this, Mt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (E(this, vn).delete(t)) {
          const n = Yi(t);
          if (typeof n == "string") {
            const r = E(this, Mt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && E(this, Mt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Yi(t);
        if (typeof n == "string") {
          const r = E(this, Mt).get(n),
            s =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Yi(t);
        if (typeof n == "string") {
          const s =
            (r = E(this, Mt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Qe.batch(() => {
          E(this, vn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            E(this, vn).clear(),
            E(this, Mt).clear();
        });
      }
      getAll() {
        return Array.from(E(this, vn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => ih(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => ih(t, n));
      }
      notify(t) {
        Qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Qe.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Rt)))
        );
      }
    }),
    (vn = new WeakMap()),
    (Mt = new WeakMap()),
    (Ci = new WeakMap()),
    Sh);
function Yi(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function ch(e) {
  return {
    onFetch: (t, n) => {
      var u, d, f, m, g;
      const r = t.options,
        s =
          (f =
            (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        o = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        c = 0;
      const l = async () => {
        let h = !1;
        const y = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (h = !0)
                  : t.signal.addEventListener("abort", () => {
                      h = !0;
                    }),
                t.signal
              ),
            });
          },
          b = Sv(t.options, t.fetchOptions),
          x = async (w, C, S) => {
            if (h) return Promise.reject();
            if (C == null && w.pages.length) return Promise.resolve(w);
            const R = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: C,
              direction: S ? "backward" : "forward",
              meta: t.options.meta,
            };
            y(R);
            const A = await b(R),
              { maxPages: T } = t.options,
              O = S ? N1 : k1;
            return {
              pages: O(w.pages, A, T),
              pageParams: O(w.pageParams, C, T),
            };
          };
        if (s && i.length) {
          const w = s === "backward",
            C = w ? $1 : lh,
            S = { pages: i, pageParams: o },
            R = C(r, S);
          a = await x(S, R, w);
        } else {
          const w = e ?? i.length;
          do {
            const C = c === 0 ? o[0] ?? r.initialPageParam : lh(r, a);
            if (c > 0 && C == null) break;
            (a = await x(a, C)), c++;
          } while (c < w);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var h, y;
            return (y = (h = t.options).persister) == null
              ? void 0
              : y.call(
                  h,
                  l,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = l);
    },
  };
}
function lh(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function $1(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Oe,
  Dn,
  Mn,
  Jr,
  es,
  Fn,
  ts,
  ns,
  _h,
  zN =
    ((_h = class {
      constructor(e = {}) {
        ne(this, Oe);
        ne(this, Dn);
        ne(this, Mn);
        ne(this, Jr);
        ne(this, es);
        ne(this, Fn);
        ne(this, ts);
        ne(this, ns);
        G(this, Oe, e.queryCache || new L1()),
          G(this, Dn, e.mutationCache || new U1()),
          G(this, Mn, e.defaultOptions || {}),
          G(this, Jr, new Map()),
          G(this, es, new Map()),
          G(this, Fn, 0);
      }
      mount() {
        Bi(this, Fn)._++,
          E(this, Fn) === 1 &&
            (G(
              this,
              ts,
              wu.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, Oe).onFocus());
              })
            ),
            G(
              this,
              ns,
              Lo.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, Oe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Bi(this, Fn)._--,
          E(this, Fn) === 0 &&
            ((e = E(this, ts)) == null || e.call(this),
            G(this, ts, void 0),
            (t = E(this, ns)) == null || t.call(this),
            G(this, ns, void 0));
      }
      isFetching(e) {
        return E(this, Oe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return E(this, Dn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, Oe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = E(this, Oe).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Gr(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return E(this, Oe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = E(this, Oe).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = R1(t, i);
        if (o !== void 0)
          return E(this, Oe)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Qe.batch(() =>
          E(this, Oe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, Oe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = E(this, Oe);
        Qe.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = E(this, Oe),
          r = { type: "active", ...e };
        return Qe.batch(
          () => (
            n.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Qe.batch(() =>
            E(this, Oe)
              .findAll(e)
              .map((s) => s.cancel(n))
          );
        return Promise.all(r).then(Rt).catch(Rt);
      }
      invalidateQueries(e, t = {}) {
        return Qe.batch(() => {
          if (
            (E(this, Oe)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none")
          )
            return Promise.resolve();
          const n = {
            ...e,
            type:
              (e == null ? void 0 : e.refetchType) ??
              (e == null ? void 0 : e.type) ??
              "active",
          };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Qe.batch(() =>
            E(this, Oe)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Rt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(Rt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = E(this, Oe).build(this, t);
        return n.isStaleByTime(Gr(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Rt).catch(Rt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = ch(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Rt).catch(Rt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = ch(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Lo.isOnline()
          ? E(this, Dn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return E(this, Oe);
      }
      getMutationCache() {
        return E(this, Dn);
      }
      getDefaultOptions() {
        return E(this, Mn);
      }
      setDefaultOptions(e) {
        G(this, Mn, e);
      }
      setQueryDefaults(e, t) {
        E(this, Jr).set(wi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...E(this, Jr).values()],
          n = {};
        return (
          t.forEach((r) => {
            Si(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        E(this, es).set(wi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...E(this, es).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Si(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...E(this, Mn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = bu(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === xu && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...E(this, Mn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        E(this, Oe).clear(), E(this, Dn).clear();
      }
    }),
    (Oe = new WeakMap()),
    (Dn = new WeakMap()),
    (Mn = new WeakMap()),
    (Jr = new WeakMap()),
    (es = new WeakMap()),
    (Fn = new WeakMap()),
    (ts = new WeakMap()),
    (ns = new WeakMap()),
    _h),
  ft,
  ge,
  Ei,
  at,
  lr,
  rs,
  In,
  Jt,
  Ti,
  ss,
  is,
  ur,
  dr,
  Ln,
  os,
  we,
  Vs,
  Zc,
  Kc,
  Qc,
  Xc,
  Yc,
  Jc,
  el,
  Rv,
  Ch,
  z1 =
    ((Ch = class extends Li {
      constructor(t, n) {
        super();
        ne(this, we);
        ne(this, ft);
        ne(this, ge);
        ne(this, Ei);
        ne(this, at);
        ne(this, lr);
        ne(this, rs);
        ne(this, In);
        ne(this, Jt);
        ne(this, Ti);
        ne(this, ss);
        ne(this, is);
        ne(this, ur);
        ne(this, dr);
        ne(this, Ln);
        ne(this, os, new Set());
        (this.options = n),
          G(this, ft, t),
          G(this, Jt, null),
          G(this, In, Gc()),
          this.options.experimental_prefetchInRender ||
            E(this, In).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            ),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (E(this, ge).addObserver(this),
          uh(E(this, ge), this.options)
            ? me(this, we, Vs).call(this)
            : this.updateResult(),
          me(this, we, Xc).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return tl(E(this, ge), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return tl(E(this, ge), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          me(this, we, Yc).call(this),
          me(this, we, Jc).call(this),
          E(this, ge).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          s = E(this, ge);
        if (
          ((this.options = E(this, ft).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Ft(this.options.enabled, E(this, ge)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        me(this, we, el).call(this),
          E(this, ge).setOptions(this.options),
          r._defaulted &&
            !Wc(this.options, r) &&
            E(this, ft)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: E(this, ge),
                observer: this,
              });
        const i = this.hasListeners();
        i && dh(E(this, ge), s, this.options, r) && me(this, we, Vs).call(this),
          this.updateResult(n),
          i &&
            (E(this, ge) !== s ||
              Ft(this.options.enabled, E(this, ge)) !==
                Ft(r.enabled, E(this, ge)) ||
              Gr(this.options.staleTime, E(this, ge)) !==
                Gr(r.staleTime, E(this, ge))) &&
            me(this, we, Zc).call(this);
        const o = me(this, we, Kc).call(this);
        i &&
          (E(this, ge) !== s ||
            Ft(this.options.enabled, E(this, ge)) !==
              Ft(r.enabled, E(this, ge)) ||
            o !== E(this, Ln)) &&
          me(this, we, Qc).call(this, o);
      }
      getOptimisticResult(t) {
        const n = E(this, ft).getQueryCache().build(E(this, ft), t),
          r = this.createResult(n, t);
        return (
          H1(this, r) &&
            (G(this, at, r),
            G(this, rs, this.options),
            G(this, lr, E(this, ge).state)),
          r
        );
      }
      getCurrentResult() {
        return E(this, at);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(r, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), n == null || n(s), t[s]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        E(this, os).add(t);
      }
      getCurrentQuery() {
        return E(this, ge);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = E(this, ft).defaultQueryOptions(t),
          r = E(this, ft).getQueryCache().build(E(this, ft), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return me(this, we, Vs)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), E(this, at)));
      }
      createResult(t, n) {
        var T;
        const r = E(this, ge),
          s = this.options,
          i = E(this, at),
          o = E(this, lr),
          a = E(this, rs),
          l = t !== r ? t.state : E(this, Ei),
          { state: u } = t;
        let d = { ...u },
          f = !1,
          m;
        if (n._optimisticResults) {
          const O = this.hasListeners(),
            D = !O && uh(t, n),
            F = O && dh(t, r, n, s);
          (D || F) && (d = { ...d, ...Av(u.data, t.options) }),
            n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
        }
        let { error: g, errorUpdatedAt: h, status: y } = d;
        if (n.select && d.data !== void 0)
          if (
            i &&
            d.data === (o == null ? void 0 : o.data) &&
            n.select === E(this, Ti)
          )
            m = E(this, ss);
          else
            try {
              G(this, Ti, n.select),
                (m = n.select(d.data)),
                (m = qc(i == null ? void 0 : i.data, m, n)),
                G(this, ss, m),
                G(this, Jt, null);
            } catch (O) {
              G(this, Jt, O);
            }
        else m = d.data;
        if (n.placeholderData !== void 0 && m === void 0 && y === "pending") {
          let O;
          if (
            i != null &&
            i.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            O = i.data;
          else if (
            ((O =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (T = E(this, is)) == null ? void 0 : T.state.data,
                    E(this, is)
                  )
                : n.placeholderData),
            n.select && O !== void 0)
          )
            try {
              (O = n.select(O)), G(this, Jt, null);
            } catch (D) {
              G(this, Jt, D);
            }
          O !== void 0 &&
            ((y = "success"),
            (m = qc(i == null ? void 0 : i.data, O, n)),
            (f = !0));
        }
        E(this, Jt) &&
          ((g = E(this, Jt)),
          (m = E(this, ss)),
          (h = Date.now()),
          (y = "error"));
        const b = d.fetchStatus === "fetching",
          x = y === "pending",
          w = y === "error",
          C = x && b,
          S = m !== void 0,
          A = {
            status: y,
            fetchStatus: d.fetchStatus,
            isPending: x,
            isSuccess: y === "success",
            isError: w,
            isInitialLoading: C,
            isLoading: C,
            data: m,
            dataUpdatedAt: d.dataUpdatedAt,
            error: g,
            errorUpdatedAt: h,
            failureCount: d.fetchFailureCount,
            failureReason: d.fetchFailureReason,
            errorUpdateCount: d.errorUpdateCount,
            isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
            isFetchedAfterMount:
              d.dataUpdateCount > l.dataUpdateCount ||
              d.errorUpdateCount > l.errorUpdateCount,
            isFetching: b,
            isRefetching: b && !x,
            isLoadingError: w && !S,
            isPaused: d.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: w && S,
            isStale: Su(t, n),
            refetch: this.refetch,
            promise: E(this, In),
          };
        if (this.options.experimental_prefetchInRender) {
          const O = (j) => {
              A.status === "error"
                ? j.reject(A.error)
                : A.data !== void 0 && j.resolve(A.data);
            },
            D = () => {
              const j = G(this, In, (A.promise = Gc()));
              O(j);
            },
            F = E(this, In);
          switch (F.status) {
            case "pending":
              t.queryHash === r.queryHash && O(F);
              break;
            case "fulfilled":
              (A.status === "error" || A.data !== F.value) && D();
              break;
            case "rejected":
              (A.status !== "error" || A.error !== F.reason) && D();
              break;
          }
        }
        return A;
      }
      updateResult(t) {
        const n = E(this, at),
          r = this.createResult(E(this, ge), this.options);
        if (
          (G(this, lr, E(this, ge).state),
          G(this, rs, this.options),
          E(this, lr).data !== void 0 && G(this, is, E(this, ge)),
          Wc(r, n))
        )
          return;
        G(this, at, r);
        const s = {},
          i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == "function" ? o() : o;
            if (a === "all" || (!a && !E(this, os).size)) return !0;
            const c = new Set(a ?? E(this, os));
            return (
              this.options.throwOnError && c.add("error"),
              Object.keys(E(this, at)).some((l) => {
                const u = l;
                return E(this, at)[u] !== n[u] && c.has(u);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0),
          me(this, we, Rv).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && me(this, we, Xc).call(this);
      }
    }),
    (ft = new WeakMap()),
    (ge = new WeakMap()),
    (Ei = new WeakMap()),
    (at = new WeakMap()),
    (lr = new WeakMap()),
    (rs = new WeakMap()),
    (In = new WeakMap()),
    (Jt = new WeakMap()),
    (Ti = new WeakMap()),
    (ss = new WeakMap()),
    (is = new WeakMap()),
    (ur = new WeakMap()),
    (dr = new WeakMap()),
    (Ln = new WeakMap()),
    (os = new WeakMap()),
    (we = new WeakSet()),
    (Vs = function (t) {
      me(this, we, el).call(this);
      let n = E(this, ge).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(Rt)), n;
    }),
    (Zc = function () {
      me(this, we, Yc).call(this);
      const t = Gr(this.options.staleTime, E(this, ge));
      if (Tr || E(this, at).isStale || !zc(t)) return;
      const r = xv(E(this, at).dataUpdatedAt, t) + 1;
      G(
        this,
        ur,
        setTimeout(() => {
          E(this, at).isStale || this.updateResult();
        }, r)
      );
    }),
    (Kc = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(E(this, ge))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Qc = function (t) {
      me(this, we, Jc).call(this),
        G(this, Ln, t),
        !(
          Tr ||
          Ft(this.options.enabled, E(this, ge)) === !1 ||
          !zc(E(this, Ln)) ||
          E(this, Ln) === 0
        ) &&
          G(
            this,
            dr,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || wu.isFocused()) &&
                me(this, we, Vs).call(this);
            }, E(this, Ln))
          );
    }),
    (Xc = function () {
      me(this, we, Zc).call(this),
        me(this, we, Qc).call(this, me(this, we, Kc).call(this));
    }),
    (Yc = function () {
      E(this, ur) && (clearTimeout(E(this, ur)), G(this, ur, void 0));
    }),
    (Jc = function () {
      E(this, dr) && (clearInterval(E(this, dr)), G(this, dr, void 0));
    }),
    (el = function () {
      const t = E(this, ft).getQueryCache().build(E(this, ft), this.options);
      if (t === E(this, ge)) return;
      const n = E(this, ge);
      G(this, ge, t),
        G(this, Ei, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (Rv = function (t) {
      Qe.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(E(this, at));
          }),
          E(this, ft)
            .getQueryCache()
            .notify({ query: E(this, ge), type: "observerResultsUpdated" });
      });
    }),
    Ch);
function W1(e, t) {
  return (
    Ft(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function uh(e, t) {
  return W1(e, t) || (e.state.data !== void 0 && tl(e, t, t.refetchOnMount));
}
function tl(e, t, n) {
  if (Ft(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Su(e, t));
  }
  return !1;
}
function dh(e, t, n, r) {
  return (
    (e !== t || Ft(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Su(e, n)
  );
}
function Su(e, t) {
  return Ft(t.enabled, e) !== !1 && e.isStaleByTime(Gr(t.staleTime, e));
}
function H1(e, t) {
  return !Wc(e.getCurrentResult(), t);
}
var Pv = v.createContext(void 0),
  q1 = (e) => {
    const t = v.useContext(Pv);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  WN = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    p.jsx(Pv.Provider, { value: e, children: t })
  ),
  kv = v.createContext(!1),
  G1 = () => v.useContext(kv);
kv.Provider;
function Z1() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var K1 = v.createContext(Z1()),
  Q1 = () => v.useContext(K1);
function X1(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function fh() {}
var Y1 = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  J1 = (e) => {
    v.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  eN = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: s,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((s && e.data === void 0) || X1(n, [e.error, r])),
  tN = (e) => {
    const t = e.staleTime;
    e.suspense &&
      ((e.staleTime =
        typeof t == "function"
          ? (...n) => Math.max(t(...n), 1e3)
          : Math.max(t ?? 1e3, 1e3)),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  nN = (e, t) => e.isLoading && e.isFetching && !t,
  rN = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  hh = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function sN(e, t, n) {
  var d, f, m, g, h;
  const r = q1(),
    s = G1(),
    i = Q1(),
    o = r.defaultQueryOptions(e);
  (f =
    (d = r.getDefaultOptions().queries) == null
      ? void 0
      : d._experimental_beforeQuery) == null || f.call(d, o),
    (o._optimisticResults = s ? "isRestoring" : "optimistic"),
    tN(o),
    Y1(o, i),
    J1(i);
  const a = !r.getQueryCache().get(o.queryHash),
    [c] = v.useState(() => new t(r, o)),
    l = c.getOptimisticResult(o),
    u = !s && e.subscribed !== !1;
  if (
    (v.useSyncExternalStore(
      v.useCallback(
        (y) => {
          const b = u ? c.subscribe(Qe.batchCalls(y)) : fh;
          return c.updateResult(), b;
        },
        [c, u]
      ),
      () => c.getCurrentResult(),
      () => c.getCurrentResult()
    ),
    v.useEffect(() => {
      c.setOptions(o, { listeners: !1 });
    }, [o, c]),
    rN(o, l))
  )
    throw hh(o, c, i);
  if (
    eN({
      result: l,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
      suspense: o.suspense,
    })
  )
    throw l.error;
  if (
    ((g =
      (m = r.getDefaultOptions().queries) == null
        ? void 0
        : m._experimental_afterQuery) == null || g.call(m, o, l),
    o.experimental_prefetchInRender && !Tr && nN(l, s))
  ) {
    const y = a
      ? hh(o, c, i)
      : (h = r.getQueryCache().get(o.queryHash)) == null
      ? void 0
      : h.promise;
    y == null ||
      y.catch(fh).finally(() => {
        c.updateResult();
      });
  }
  return o.notifyOnChangeProps ? l : c.trackResult(l);
}
function _s(e, t) {
  return sN(e, z1);
}
const Nv = () => {
    const e = Re((r) => r.lang),
      { data: t, isPending: n } = _s({
        queryKey: ["exhibiton-time", e],
        queryFn: () => vE(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  iN = () => {
    const e = Re((r) => r.lang),
      { data: t, isPending: n } = _s({
        queryKey: ["home-contacts", e],
        queryFn: () => _E(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  HN = ({ className: e }) => {
    const t = Re((i) => i.lang),
      { data: n, isPending: r } = Nv(),
      { data: s } = iN();
    return r
      ? p.jsx(Cr, {})
      : p.jsx("section", {
          className: Q("bg-surface_high pt-10 pb-20", e),
          children: p.jsxs(ut, {
            children: [
              p.jsx("h2", { className: "h2 mb-10", children: bv[ie(t)].title }),
              p.jsxs("div", {
                className: "flex flex-col gap-6",
                children: [
                  p.jsx("div", {
                    className: "flex flex-col md:flex-row items-center gap-6",
                    children:
                      n == null
                        ? void 0
                        : n.map((i, o) =>
                            v.createElement(dg, {
                              ...i,
                              key: o,
                              className: "w-full",
                            })
                          ),
                  }),
                  p.jsx("div", {
                    className:
                      "md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6",
                    children:
                      s == null
                        ? void 0
                        : s.map((i, o) =>
                            v.createElement(AE, {
                              ...i,
                              key: o,
                              className: "w-full",
                            })
                          ),
                  }),
                  p.jsx(De, {
                    to: "/stend-form",
                    className: "md:w-fit w-full mx-auto",
                    children: p.jsx(Xe, {
                      className: "w-full",
                      children:
                        t === vt.RU ? "Забронируйте стенд" : "Book a stand",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
  },
  oN = [
    {
      mainData: [
        {
          h2: "Выставка-ярмарка «Международная Торговля и Услуги» в Ашхабаде",
          p: `
      С 29 апреля по 1 мая 2025 года столица Туркменистана, Ашхабад, станет центром международного делового сообщества благодаря крупнейшей выставке-ярмарке «Торговля и услуги». Организованная Торгово-промышленной палатой Туркменистана и компанией Turkmen Expo, эта выставка направлена на укрепление глобальных торговых связей, привлечение инвестиций и демонстрацию экономического потенциала страны.
    `,
          button: "Подробнее о выставке",
        },
      ],
      data: [
        { nums: "10,000 m²", text: "Выставочной площади" },
        { nums: "10000+", text: "Ожидаемых посетителей" },
        { nums: "100+", text: "Экспонентов из более чем 30 стран" },
        { nums: "80%", text: "Участников топ-менеджмента" },
      ],
    },
    {
      mainData: [
        {
          h2: "“International Trade and Services” Expo in Ashgabat",
          p: `
      From April 29 to May 1, 2025, the capital of Turkmenistan, Ashgabat, will become a hub for the global business community, hosting the largest “International Trade and Services Expo" Organized by the Chamber of Commerce and Industry of Turkmenistan and Turkmen Expo, this event aims to strengthen global trade relations, attract investments, and showcase the country’s economic potential.
      `,
          button: "More about the exhibition",
        },
      ],
      data: [
        { nums: "10,000 m²", text: "Exhibition area" },
        { nums: "10000+", text: "Expected visitors" },
        { nums: "100+", text: "Exhibitors from over 30 countries" },
        { nums: "80%", text: "Participants are top-management" },
      ],
    },
  ],
  aN = (e) => {
    const t = Re((s) => s.lang),
      { data: n, isPending: r } = _s({
        queryKey: ["static-words", t, e],
        queryFn: () => xE(t, e),
        select: ({ data: s }) => s.data,
      });
    return { data: n, isPending: r };
  },
  cN = () => {
    const e = Re((r) => r.lang),
      { data: t, isPending: n } = _s({
        queryKey: ["stats", e],
        queryFn: () => SE(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  qN = () => {
    var l, u;
    const [e] = Nr(),
      t = Re((d) => d.lang),
      { data: n, isPending: r } = aN("1"),
      s =
        (l = n == null ? void 0 : n.find((d) => d.key === "index_1_title")) ==
        null
          ? void 0
          : l.text,
      i =
        (u =
          n == null
            ? void 0
            : n.find((d) => d.key === "index_1_description")) == null
          ? void 0
          : u.text,
      { data: o, isPending: a } = cN(),
      c = ie(t);
    return r
      ? p.jsx(Cr, {})
      : p.jsx("section", {
          children: p.jsxs(ut, {
            className: "flex flex-col gap-6",
            children: [
              p.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                  p.jsxs("div", {
                    className: "flex flex-col gap-6",
                    children: [
                      p.jsx("h2", { className: "h2 text-left", children: s }),
                      p.jsx("div", {
                        dangerouslySetInnerHTML: { __html: i || "" },
                        className:
                          "md:text-base flex flex-col gap-6 text-sm normal text-left text-[#454545]",
                      }),
                      p.jsx(De, {
                        to: "/about",
                        className: "w-fit",
                        children: p.jsx(Xe, {
                          variant: "outline",
                          children: oN[c].mainData[0].button,
                        }),
                      }),
                    ],
                  }),
                  p.jsx("video", {
                    src: "https://itse.turkmenexpo.com/app/storage/app/media/video/itse2025.mp4",
                    muted: !0,
                    controls: !0,
                    autoPlay: !0,
                    loop: !0,
                    className: "w-full h-auto",
                  }),
                ],
              }),
              p.jsx("div", {
                ref: e,
                className: "embla overflow-hidden",
                children: p.jsx("div", {
                  className: "flex embla__container items-center gap-6",
                  children: a
                    ? p.jsx(Cr, {})
                    : o == null
                    ? void 0
                    : o.map((d) =>
                        p.jsx(
                          TE,
                          { ...d, className: "embla__slide flex-[0_0_288px]" },
                          d.text
                        )
                      ),
                }),
              }),
            ],
          }),
        });
  },
  Ov = ({ className: e, image: t, title: n }) =>
    p.jsxs("article", {
      className: Q(
        "bg-bg_surface_container relative hover:bg-teritary_surface_container transition-all md:px-6 px-2 md:h-[224px] h-[124px]",
        e
      ),
      children: [
        p.jsx("div", {
          className: "bg-primary size-full -z-[10] absolute top-2.5 left-2.5",
        }),
        p.jsx("img", {
          src: t.path,
          alt: "theme icon",
          className: "md:size-20 size-12",
        }),
        p.jsx("h3", {
          className: "md:mt-6 mt-2 md:text-xl text-sm",
          children: n,
        }),
      ],
    }),
  lN = [
    {
      h2: "Тематические направления выставки",
      data: [
        {
          title: "Пищевая продукция и сельское хозяйство",
          img: "/theme/1.svg",
        },
        { title: "Товары и услуги", img: "/theme/2.svg" },
        { title: "E-commerce", img: "/theme/3.svg" },
        { title: "Потребительские товары ", img: "/theme/4.svg" },
        { title: "Продукция промышленного производства", img: "/theme/5.svg" },
        { title: "Профессиональные услуги", img: "/theme/6.svg" },
        { title: "Ремесленные производства", img: "/theme/7.svg" },
        { title: "Креативные индустрии", img: "/theme/8.svg" },
      ],
    },
    {
      h2: "Thematic areas of the exhibition",
      data: [
        { title: "Food and agriculture", img: "/theme/1.svg" },
        { title: "Goods and services", img: "/theme/2.svg" },
        { title: "E-commerce", img: "/theme/3.svg" },
        { title: "Consumer goods", img: "/theme/4.svg" },
        { title: "Industrial production", img: "/theme/5.svg" },
        { title: "Professional services", img: "/theme/6.svg" },
        { title: "Crafts", img: "/theme/7.svg" },
        { title: "Creative industries", img: "/theme/8.svg" },
      ],
    },
  ],
  jv = () => {
    const e = Re((r) => r.lang),
      { data: t, isPending: n } = _s({
        queryKey: ["industries", e],
        queryFn: () => wE(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  GN = () => {
    const e = Re((r) => r.lang),
      { data: t, isPending: n } = jv();
    return n
      ? p.jsx(Cr, {})
      : p.jsx("section", {
          className: "",
          children: p.jsxs(ut, {
            children: [
              p.jsx("h2", {
                className: "h2 mb-10 text-center",
                children: lN[ie(e)].h2,
              }),
              p.jsx("div", {
                className: "grid md:grid-cols-4 grid-cols-2 gap-6",
                children:
                  t == null ? void 0 : t.map((r, s) => p.jsx(Ov, { ...r }, s)),
              }),
            ],
          }),
        });
  },
  uN = () => {
    const { data: e, isPending: t } = _s({
      queryKey: ["partners"],
      queryFn: () => bE(),
      select: ({ data: n }) => n.data,
    });
    return { data: e, isPending: t };
  },
  dN = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null,
  };
function fN(e, t) {
  const n = e.scrollSnapList();
  return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function hN(e, t) {
  const n = e.rootNode();
  return (t && t(n)) || n;
}
function _u(e = {}) {
  let t,
    n,
    r,
    s,
    i = null,
    o = 0,
    a = !1,
    c = !1,
    l = !1,
    u = !1;
  function d(L, Y) {
    n = L;
    const { mergeOptions: Z, optionsAtMedia: H } = Y,
      q = Z(dN, _u.globalOptions),
      se = Z(q, e);
    if (((t = H(se)), n.scrollSnapList().length <= 1)) return;
    (u = t.jump), (r = !1), (s = fN(n, t.delay));
    const { eventStore: he, ownerDocument: ve } = n.internalEngine(),
      He = !!n.internalEngine().options.watchDrag,
      Ye = hN(n, t.rootNode);
    he.add(ve, "visibilitychange", b),
      He && n.on("pointerDown", w),
      He && !t.stopOnInteraction && n.on("pointerUp", C),
      t.stopOnMouseEnter && he.add(Ye, "mouseenter", S),
      t.stopOnMouseEnter && !t.stopOnInteraction && he.add(Ye, "mouseleave", R),
      t.stopOnFocusIn && n.on("slideFocusStart", y),
      t.stopOnFocusIn &&
        !t.stopOnInteraction &&
        he.add(n.containerNode(), "focusout", h),
      t.playOnInit && h();
  }
  function f() {
    n.off("pointerDown", w).off("pointerUp", C).off("slideFocusStart", y),
      y(),
      (r = !0),
      (a = !1);
  }
  function m() {
    const { ownerWindow: L } = n.internalEngine();
    L.clearTimeout(o),
      (o = L.setTimeout(F, s[n.selectedScrollSnap()])),
      (i = new Date().getTime()),
      n.emit("autoplay:timerset");
  }
  function g() {
    const { ownerWindow: L } = n.internalEngine();
    L.clearTimeout(o), (o = 0), (i = null), n.emit("autoplay:timerstopped");
  }
  function h() {
    if (!r) {
      if (x()) {
        l = !0;
        return;
      }
      a || n.emit("autoplay:play"), m(), (a = !0);
    }
  }
  function y() {
    r || (a && n.emit("autoplay:stop"), g(), (a = !1));
  }
  function b() {
    if (x()) return (l = a), y();
    l && h();
  }
  function x() {
    const { ownerDocument: L } = n.internalEngine();
    return L.visibilityState === "hidden";
  }
  function w() {
    c || y();
  }
  function C() {
    c || h();
  }
  function S() {
    (c = !0), y();
  }
  function R() {
    (c = !1), h();
  }
  function A(L) {
    typeof L < "u" && (u = L), h();
  }
  function T() {
    a && y();
  }
  function O() {
    a && h();
  }
  function D() {
    return a;
  }
  function F() {
    const { index: L } = n.internalEngine(),
      Y = L.clone().add(1).get(),
      Z = n.scrollSnapList().length - 1,
      H = t.stopOnLastSnap && Y === Z;
    if (
      (n.canScrollNext() ? n.scrollNext(u) : n.scrollTo(0, u),
      n.emit("autoplay:select"),
      H)
    )
      return y();
    h();
  }
  function j() {
    if (!i) return null;
    const L = s[n.selectedScrollSnap()],
      Y = new Date().getTime() - i;
    return L - Y;
  }
  return {
    name: "autoplay",
    options: e,
    init: d,
    destroy: f,
    play: A,
    stop: T,
    reset: O,
    isPlaying: D,
    timeUntilNext: j,
  };
}
_u.globalOptions = void 0;
const ZN = ({ className: e }) => {
    const [t] = Nr({ loop: !0, align: "center", skipSnaps: !0, duration: 40 }, [
        _u({ delay: 2e3, stopOnInteraction: !1 }),
      ]),
      { t: n } = Zo("home"),
      { data: r, isPending: s } = uN(),
      { title: i } = n("partners", { returnObjects: !0 });
    return s
      ? p.jsx(Cr, {})
      : p.jsx("section", {
          className: Q("", e),
          children: p.jsxs(ut, {
            className: "flex flex-col gap-10 relative w-full",
            children: [
              p.jsx("div", {
                className: "flex item-center justify-between",
                children: p.jsx("h2", { className: "h2", children: i }),
              }),
              p.jsx("div", {
                ref: t,
                className: "embla overflow-hidden",
                children: p.jsx("div", {
                  className: "embla__container flex",
                  children:
                    r == null
                      ? void 0
                      : r.map((o, a) => {
                          var c, l;
                          return o.link
                            ? p.jsx(
                                De,
                                {
                                  to: o.link,
                                  className:
                                    "bg-[#E0E6EB] flex embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full",
                                  children: p.jsx("img", {
                                    src:
                                      (l = o == null ? void 0 : o.image) == null
                                        ? void 0
                                        : l.path,
                                    alt: o == null ? void 0 : o.name,
                                    className: "size-full object-contain",
                                  }),
                                },
                                a
                              )
                            : p.jsx(
                                "div",
                                {
                                  className:
                                    "bg-[#E0E6EB] flex embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full",
                                  children: p.jsx("img", {
                                    src:
                                      (c = o == null ? void 0 : o.image) == null
                                        ? void 0
                                        : c.path,
                                    alt: o == null ? void 0 : o.name,
                                    className: "size-full object-contain",
                                  }),
                                },
                                a
                              );
                        }),
                }),
              }),
            ],
          }),
        });
  },
  pN = [
    {
      data: [
        {
          img: "/offer-1.png",
          title: "Гостиницы, трансфер, визы",
          btnText: "Скачать путеводитель",
          text: "По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете ознакомиться с путеводителем",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
        },
        {
          img: "/offer-2.png",
          title: "Ознакомьтесь с планом выставки ITSE 2025",
          btnText: "Скачать план выставки",
          text: "Как выбрать лучшее место на выставке? Вы всегда должны помнить, что удачное расположение выставочной экспозиции повышает Ваши шансы привлечь внимание Ваших потенциальных клиентов",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
        },
      ],
    },
    {
      data: [
        {
          img: "/offer-1.png",
          title: "Hotels; Transfers; Visas ",
          btnText: "Download the Travel guide",
          text: "For inquiries regarding hotel accommodation, visa support, transportation, and tour services, please refer to the travel guide.",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_eng.pdf",
        },
        {
          img: "/offer-2.png",
          title: "Explore the ITSE 2025 Exhibition Plan",
          btnText: "Download Exhibition plan",
          text: "How to choose the best location at the exhibition? A Prime spot increases your chances of attracting potential clients.",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
        },
      ],
    },
  ],
  KN = () => {
    const [e, t] = Nr({ align: "start" }),
      n = Re((o) => o.lang),
      [r, s] = v.useState(0),
      i = v.useCallback(
        (o) => {
          t && t.scrollTo(o);
        },
        [t]
      );
    return (
      v.useEffect(() => {
        if (!t) return;
        const o = () => {
          s(t.selectedScrollSnap());
        };
        return (
          t.on("select", o),
          () => {
            t.off("select", o);
          }
        );
      }, [t]),
      p.jsx("section", {
        className: "bg-surface_high py-10 relative overflow-hidden",
        children: p.jsx(ut, {
          children: p.jsxs("div", {
            ref: e,
            className: "embla",
            children: [
              p.jsx("div", {
                className: "mb-2 flex gap-6 embla__container",
                children: pN[ie(n)].data.map((o) =>
                  v.createElement(RE, {
                    className:
                      "embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]",
                    ...o,
                    key: o.title,
                  })
                ),
              }),
              p.jsx(PE, {
                className: "lg:hidden",
                scrollTo: i,
                active: r,
                slides: 2,
              }),
            ],
          }),
        }),
      })
    );
  },
  ph = [
    {
      title: "Отрасли",
      subtitle: "Мероприятие объединит ключевых игроков в таких отраслях, как:",
      bottomText: `
        Участники смогут продемонстрировать свои инновационные решения, наладить взаимовыгодные партнерства и выйти на новые рынки.`,
    },
    {
      title: "Industries",
      subtitle:
        "The event will bring together key players from industries such as:",
      bottomText:
        "Participants will be able to showcase innovative solutions, establish mutually beneficial partnerships, and enter new markets.",
    },
  ],
  QN = ({ className: e }) => {
    const t = Re((s) => s.lang),
      { data: n, isPending: r } = jv();
    return p.jsxs("section", {
      className: Q("relative w-full bg-[#FDE8C4] -z-10 py-10", e),
      children: [
        p.jsx("img", {
          src: "/about-bg.svg",
          alt: "",
          className: "absolute top-0 left-0 size-full object-cover",
        }),
        p.jsx(ut, {
          children: r
            ? p.jsx(Cr, {})
            : p.jsxs(p.Fragment, {
                children: [
                  p.jsxs("h3", {
                    className: "h2 mb-4",
                    children: [" ", ph[ie(t)].title],
                  }),
                  p.jsx("div", {
                    className: "grid md:grid-cols-4 grid-cols-2 gap-6",
                    children:
                      n == null
                        ? void 0
                        : n.map((s, i) => p.jsx(Ov, { ...s }, i)),
                  }),
                  p.jsxs("div", {
                    className:
                      "flex items-center gap-3 mt-8 text-on_surface_v text-lg",
                    children: [
                      p.jsx("div", {
                        className: "md:w-1 w-4 md:h-[38px] h-40 bg-teritary_08",
                      }),
                      p.jsx("p", {
                        className: "text-18",
                        children: ph[ie(t)].bottomText,
                      }),
                    ],
                  }),
                ],
              }),
        }),
      ],
    });
  },
  XN = ({ className: e }) => {
    const t = Re((s) => s.lang),
      { data: n, isPending: r } = Nv();
    return p.jsx("section", {
      className: Q("bg-bg_surface_container py-10 md:py-[80px]", e),
      children: p.jsx(ut, {
        children: r
          ? p.jsx(Cr, {})
          : p.jsxs(p.Fragment, {
              children: [
                p.jsx("h2", {
                  className: "h2 mb-6",
                  children: bv[ie(t)].title,
                }),
                p.jsx("div", {
                  className: "flex flex-col md:flex-row items-center gap-6",
                  children:
                    n == null
                      ? void 0
                      : n.map((s, i) =>
                          v.createElement(dg, {
                            bottomClassName: "!bg-white rounded-b-[2px]",
                            ...s,
                            key: i,
                            className: "w-full",
                          })
                        ),
                }),
              ],
            }),
      }),
    });
  },
  mh = [
    {
      title: "Место проведения",
      data: [
        "Выставочный центр Торгово-промышленной палаты Туркменистана – это современная площадка для проведения международных выставок, конференций, форумов и деловых встреч",
        "Центр оснащен передовыми техническими решениями, включая мультимедийное оборудование, системы звукоусиления и освещения, конференц-залы с синхронным переводом, а также удобные зоны для переговоров. Просторные выставочные павильоны обеспечивают комфортные условия для демонстрации продукции и услуг.  ",
      ],
    },
    {
      title: "Venue",
      data: [
        "The Exhibition Centre of the Chamber of Commerce and Industry of Turkmenistan is a modern venue designed for international exhibitions, conferences, forums, and business meetings.",
        "The centre is equipped with cutting-edge technical solutions, including multimedia equipment, sound and lighting systems, conference rooms with simultaneous translation, and comfortable areas for negotiations. Spacious exhibition pavilions provide ideal conditions for showcasing products and services.",
      ],
    },
  ],
  YN = ({ className: e }) => {
    const t = Re((n) => n.lang);
    return p.jsx("section", {
      className: Q("gap-6 relative overflow-hidden", e),
      children: p.jsxs(ut, {
        className:
          "md:py-20 py-10 grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 grid",
        children: [
          p.jsxs("div", {
            className: "",
            children: [
              p.jsx("h3", { className: "h2 mb-6", children: mh[ie(t)].title }),
              p.jsx("div", {
                className:
                  "text-lg flex flex-col gap-6 text-on_surface_v normal  mb-10",
                children: mh[ie(t)].data.map((n) =>
                  p.jsx("p", { children: n }, n)
                ),
              }),
            ],
          }),
          p.jsx("div", {
            className: "h-full max-size-[600px]",
            children: p.jsx("img", {
              src: "/about-place.jpg",
              alt: "",
              className: "size-full object-contain",
            }),
          }),
        ],
      }),
    });
  },
  Ji = [
    {
      title: "Приглашение к участию",
      p: "Министерство торговли и внешнеэкономических связей Туркменистана приглашает бизнес-сообщество со всего мира присоединиться к этому уникальному событию, которое станет важным шагом к укреплению позиций Туркменистана на глобальной экономической арене.",
      button1: "Забронировать стенд",
      button2: "Стать спонсором",
    },
    {
      title: "Invitation to Participate",
      p: "Ministry of Trade and Foreign Economic Relations of Turkmenistan invites the global business community to join this unique event, which will be a significant step toward strengthening Turkmenistan’s position on the global economic stage",
      button1: "Book a stand",
      button2: "Become a sponsor",
    },
  ],
  JN = ({ className: e }) => {
    const t = Re((n) => n.lang);
    return p.jsxs("section", {
      className: Q("md:py-20 py-10 relative overflow-hidden", e),
      children: [
        p.jsx("img", {
          src: "/CTA.png",
          className: "absolute top-0 left-0 size-full -z-10 object-cover",
        }),
        p.jsxs(ut, {
          children: [
            p.jsx("h3", {
              className: "h2 text-center !text-on_primary mb-6",
              children: Ji[ie(t)].title,
            }),
            p.jsx("p", {
              className:
                "text-center md:text-lg text-sm  text-primary_04 max-w-[808px] mx-auto mb-10",
              children: Ji[ie(t)].p,
            }),
            p.jsxs("div", {
              className: "flex flex-col md:flex-row items-center gap-6",
              children: [
                p.jsx(De, {
                  to: "/stend-form",
                  className: "w-full",
                  children: p.jsx(Xe, {
                    className: "bg-white w-full text-primary hover:bg-white/90",
                    children: Ji[ie(t)].button1,
                  }),
                }),
                p.jsx(De, {
                  to: "/become-sponsor",
                  className: "w-full",
                  children: p.jsx(Xe, {
                    className: "bg-white w-full hover:bg-white/90 text-primary",
                    children: Ji[ie(t)].button2,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export {
  S0 as $,
  yN as A,
  VN as B,
  BN as C,
  Be as D,
  Xe as E,
  DN as F,
  Mb as G,
  TN as H,
  Lk as I,
  Pm as J,
  AN as K,
  vt as L,
  aN as M,
  QN as N,
  XN as O,
  YN as P,
  JN as Q,
  fv as R,
  Zo as S,
  Mh as T,
  PN as U,
  kN as V,
  ON as W,
  jN as X,
  UN as Y,
  x0 as Z,
  f0 as _,
  $N as a,
  _0 as a0,
  E0 as a1,
  T0 as a2,
  R0 as a3,
  A0 as a4,
  C0 as a5,
  Tx as a6,
  qh as a7,
  _x as a8,
  en as a9,
  to as aa,
  eo as ab,
  Kh as ac,
  vx as ad,
  Bx as ae,
  Ax as af,
  ep as ag,
  bN as ah,
  xN as ai,
  vN as aj,
  qy as ak,
  RN as al,
  zN as am,
  WN as an,
  qN as b,
  KN as c,
  ZN as d,
  GN as e,
  HN as f,
  LN as g,
  Q as h,
  EN as i,
  p as j,
  _s as k,
  NN as l,
  Cr as m,
  ut as n,
  Am as o,
  ie as p,
  Da as q,
  ik as r,
  gr as s,
  Wy as t,
  Re as u,
  Gs as v,
  Zs as w,
  Ks as x,
  Vc as y,
  Ee as z,
};
