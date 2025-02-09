var bu = (e) => {
  throw TypeError(e);
};
var oa = (e, t, n) => t.has(e) || bu("Cannot " + n);
var E = (e, t, n) => (
    oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ne = (e, t, n) =>
    t.has(e)
      ? bu("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  H = (e, t, n, r) => (
    oa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  pe = (e, t, n) => (oa(e, t, "access private method"), n);
var Fi = (e, t, n, r) => ({
  set _(s) {
    H(e, t, s, n);
  },
  get _() {
    return E(e, t, r);
  },
});
import {
  r as xv,
  a as v,
  R as wv,
  b as mh,
  c as _v,
  d as fe,
  L as Be,
  e as Ii,
} from "./react-vendor-OnsDvTPE.js";
var aa = { exports: {} },
  ws = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xu;
function Sv() {
  if (xu) return ws;
  xu = 1;
  var e = xv(),
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
  return (ws.Fragment = n), (ws.jsx = o), (ws.jsxs = o), ws;
}
var wu;
function Cv() {
  return wu || ((wu = 1), (aa.exports = Sv())), aa.exports;
}
var p = Cv();
function gh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = gh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function yh() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = gh(e)) && (r && (r += " "), (r += t));
  return r;
}
const qc = "-",
  Ev = (e) => {
    const t = Av(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(qc);
        return a[0] === "" && a.length !== 1 && a.shift(), vh(a, t) || Tv(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const c = n[o] || [];
        return a && r[o] ? [...c, ...r[o]] : c;
      },
    };
  },
  vh = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? vh(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(qc);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  _u = /^\[(.+)\]$/,
  Tv = (e) => {
    if (_u.test(e)) {
      const t = _u.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Av = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Pv(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        za(o, r, i, t);
      }),
      r
    );
  },
  za = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Su(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (Rv(s)) {
          za(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        za(o, Su(t, i), n, r);
      });
    });
  },
  Su = (e, t) => {
    let n = e;
    return (
      t.split(qc).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Rv = (e) => e.isThemeGetter,
  Pv = (e, t) =>
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
  kv = (e) => {
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
  bh = "!",
  Ov = (e) => {
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
          m = f.startsWith(bh),
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
  jv = (e) => {
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
  Nv = (e) => ({ cache: kv(e.cacheSize), parseClassName: Ov(e), ...Ev(e) }),
  Dv = /\s+/,
  Mv = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(Dv);
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
      const y = jv(u).join(":"),
        b = d ? y + bh : y,
        x = b + h;
      if (i.includes(x)) continue;
      i.push(x);
      const w = s(h, g);
      for (let C = 0; C < w.length; ++C) {
        const _ = w[C];
        i.push(b + _);
      }
      a = l + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Fv() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = xh(t)) && (r && (r += " "), (r += n));
  return r;
}
const xh = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xh(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Iv(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(c) {
    const l = t.reduce((u, d) => d(u), e());
    return (n = Nv(l)), (r = n.cache.get), (s = n.cache.set), (i = a), a(c);
  }
  function a(c) {
    const l = r(c);
    if (l) return l;
    const u = Mv(c, n);
    return s(c, u), u;
  }
  return function () {
    return i(Fv.apply(null, arguments));
  };
}
const Ce = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  wh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Lv = /^\d+\/\d+$/,
  Vv = new Set(["px", "full", "screen"]),
  Bv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Uv =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  $v = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  zv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Wv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  un = (e) => Br(e) || Vv.has(e) || Lv.test(e),
  Sn = (e) => fs(e, "length", Yv),
  Br = (e) => !!e && !Number.isNaN(Number(e)),
  ca = (e) => fs(e, "number", Br),
  _s = (e) => !!e && Number.isInteger(Number(e)),
  Hv = (e) => e.endsWith("%") && Br(e.slice(0, -1)),
  le = (e) => wh.test(e),
  Cn = (e) => Bv.test(e),
  qv = new Set(["length", "size", "percentage"]),
  Gv = (e) => fs(e, qv, _h),
  Zv = (e) => fs(e, "position", _h),
  Kv = new Set(["image", "url"]),
  Qv = (e) => fs(e, Kv, eb),
  Xv = (e) => fs(e, "", Jv),
  Ss = () => !0,
  fs = (e, t, n) => {
    const r = wh.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Yv = (e) => Uv.test(e) && !$v.test(e),
  _h = () => !1,
  Jv = (e) => zv.test(e),
  eb = (e) => Wv.test(e),
  tb = () => {
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
      _ = Ce("sepia"),
      P = Ce("skew"),
      T = Ce("space"),
      A = Ce("translate"),
      j = () => ["auto", "contain", "none"],
      M = () => ["auto", "hidden", "clip", "visible", "scroll"],
      V = () => ["auto", le, t],
      N = () => [le, t],
      B = () => ["", un, Sn],
      W = () => ["auto", Br, le],
      ee = () => [
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
      Q = () => ["solid", "dashed", "dotted", "double", "none"],
      G = () => [
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
      ie = () => ["", "0", le],
      ye = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      ve = () => [Br, le];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ss],
        spacing: [un, Sn],
        blur: ["none", "", Cn, le],
        brightness: ve(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Cn, le],
        borderSpacing: N(),
        borderWidth: B(),
        contrast: ve(),
        grayscale: ie(),
        hueRotate: ve(),
        invert: ie(),
        gap: N(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Hv, Sn],
        inset: V(),
        margin: V(),
        opacity: ve(),
        padding: N(),
        saturate: ve(),
        scale: ve(),
        sepia: ie(),
        skew: ve(),
        space: N(),
        translate: N(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", le] }],
        container: ["container"],
        columns: [{ columns: [Cn] }],
        "break-after": [{ "break-after": ye() }],
        "break-before": [{ "break-before": ye() }],
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
        "object-position": [{ object: [...ee(), le] }],
        overflow: [{ overflow: M() }],
        "overflow-x": [{ "overflow-x": M() }],
        "overflow-y": [{ "overflow-y": M() }],
        overscroll: [{ overscroll: j() }],
        "overscroll-x": [{ "overscroll-x": j() }],
        "overscroll-y": [{ "overscroll-y": j() }],
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
        z: [{ z: ["auto", _s, le] }],
        basis: [{ basis: V() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", le] }],
        grow: [{ grow: ie() }],
        shrink: [{ shrink: ie() }],
        order: [{ order: ["first", "last", "none", _s, le] }],
        "grid-cols": [{ "grid-cols": [Ss] }],
        "col-start-end": [{ col: ["auto", { span: ["full", _s, le] }, le] }],
        "col-start": [{ "col-start": W() }],
        "col-end": [{ "col-end": W() }],
        "grid-rows": [{ "grid-rows": [Ss] }],
        "row-start-end": [{ row: ["auto", { span: [_s, le] }, le] }],
        "row-start": [{ "row-start": W() }],
        "row-end": [{ "row-end": W() }],
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
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
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
              { screen: [Cn] },
              Cn,
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
        "font-size": [{ text: ["base", Cn, Sn] }],
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
              ca,
            ],
          },
        ],
        "font-family": [{ font: [Ss] }],
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
        "line-clamp": [{ "line-clamp": ["none", Br, ca] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              un,
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
        "text-decoration-style": [{ decoration: [...Q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", un, Sn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", un, le] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: N() }],
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
        "bg-position": [{ bg: [...ee(), Zv] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Gv] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Qv,
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
        "border-style": [{ border: [...Q(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: Q() }],
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
        "outline-style": [{ outline: ["", ...Q()] }],
        "outline-offset": [{ "outline-offset": [un, le] }],
        "outline-w": [{ outline: [un, Sn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: B() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [un, Sn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Cn, Xv] }],
        "shadow-color": [{ shadow: [Ss] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [{ "mix-blend": [...G(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": G() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Cn, le] }],
        grayscale: [{ grayscale: [l] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [_] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [_] }],
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
        rotate: [{ rotate: [_s, le] }],
        "translate-x": [{ "translate-x": [A] }],
        "translate-y": [{ "translate-y": [A] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
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
        "scroll-m": [{ "scroll-m": N() }],
        "scroll-mx": [{ "scroll-mx": N() }],
        "scroll-my": [{ "scroll-my": N() }],
        "scroll-ms": [{ "scroll-ms": N() }],
        "scroll-me": [{ "scroll-me": N() }],
        "scroll-mt": [{ "scroll-mt": N() }],
        "scroll-mr": [{ "scroll-mr": N() }],
        "scroll-mb": [{ "scroll-mb": N() }],
        "scroll-ml": [{ "scroll-ml": N() }],
        "scroll-p": [{ "scroll-p": N() }],
        "scroll-px": [{ "scroll-px": N() }],
        "scroll-py": [{ "scroll-py": N() }],
        "scroll-ps": [{ "scroll-ps": N() }],
        "scroll-pe": [{ "scroll-pe": N() }],
        "scroll-pt": [{ "scroll-pt": N() }],
        "scroll-pr": [{ "scroll-pr": N() }],
        "scroll-pb": [{ "scroll-pb": N() }],
        "scroll-pl": [{ "scroll-pl": N() }],
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
        "stroke-w": [{ stroke: [un, Sn, ca] }],
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
  nb = Iv(tb);
function se(...e) {
  return nb(yh(e));
}
const Sh = ({ className: e }) =>
  p.jsx("div", {
    className: se("h-16 w-[184px]", e),
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
 */ const rb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ch = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var sb = {
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
 */ const ib = v.forwardRef(
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
        ...sb,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Ch("lucide", s),
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
 */ const Cr = (e, t) => {
  const n = v.forwardRef(({ className: r, ...s }, i) =>
    v.createElement(ib, {
      ref: i,
      iconNode: t,
      className: Ch(`lucide-${rb(e)}`, r),
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
 */ const ob = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Gc = Cr("ArrowUpRight", ob);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ab = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  cb = Cr("Facebook", ab);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lb = [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ],
  ub = Cr("Loader", lb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const db = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  fb = Cr("MapPin", db);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hb = [
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
  pb = Cr("Smartphone", hb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mb = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  gb = Cr("Upload", mb);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yb = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  vb = Cr("X", yb);
function Cu(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Eh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Cu(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Cu(e[s], null);
        }
      };
  };
}
function qe(...e) {
  return v.useCallback(Eh(...e), e);
}
var In = v.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    s = v.Children.toArray(n),
    i = s.find(xb);
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
    return p.jsx(Wa, {
      ...r,
      ref: t,
      children: v.isValidElement(o) ? v.cloneElement(o, void 0, a) : null,
    });
  }
  return p.jsx(Wa, { ...r, ref: t, children: n });
});
In.displayName = "Slot";
var Wa = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const s = _b(n);
    return v.cloneElement(n, { ...wb(r, n.props), ref: t ? Eh(t, s) : s });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
Wa.displayName = "SlotClone";
var bb = ({ children: e }) => p.jsx(p.Fragment, { children: e });
function xb(e) {
  return v.isValidElement(e) && e.type === bb;
}
function wb(e, t) {
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
function _b(e) {
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
const Eu = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Tu = yh,
  Zc = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Tu(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((l) => {
        const u = n == null ? void 0 : n[l],
          d = i == null ? void 0 : i[l];
        if (u === null) return null;
        const f = Eu(u) || Eu(d);
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
    return Tu(
      e,
      o,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  Sb = Zc(
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
  Qe = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...s }, i) => {
      const o = r ? In : "button";
      return p.jsx(o, {
        className: se(Sb({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
      });
    }
  );
Qe.displayName = "Button";
function Te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Cb(e, t) {
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
function Er(e, t = []) {
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
  return (s.scopeName = e), [r, Eb(s, ...t)];
}
function Eb(...e) {
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
var mr =
    globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  Tb = wv.useId || (() => {}),
  Ab = 0;
function Ms(e) {
  const [t, n] = v.useState(Tb());
  return (
    mr(() => {
      n((r) => r ?? String(Ab++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
function Vt(e) {
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
function Fo({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = Rb({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    o = i ? e : r,
    a = Vt(n),
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
function Rb({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    s = v.useRef(r),
    i = Vt(t);
  return (
    v.useEffect(() => {
      s.current !== r && (i(r), (s.current = r));
    }, [r, s, i]),
    n
  );
}
var Pb = [
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
  De = Pb.reduce((e, t) => {
    const n = v.forwardRef((r, s) => {
      const { asChild: i, ...o } = r,
        a = i ? In : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(a, { ...o, ref: s })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Th(e, t) {
  e && mh.flushSync(() => e.dispatchEvent(t));
}
function Ah(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e);
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
var kb = "DismissableLayer",
  Ha = "dismissableLayer.update",
  Ob = "dismissableLayer.pointerDownOutside",
  jb = "dismissableLayer.focusOutside",
  Au,
  Rh = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ph = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = e,
      l = v.useContext(Rh),
      [u, d] = v.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = v.useState({}),
      g = qe(t, (T) => d(T)),
      h = Array.from(l.layers),
      [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = h.indexOf(y),
      x = u ? h.indexOf(u) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      C = x >= b,
      _ = Mb((T) => {
        const A = T.target,
          j = [...l.branches].some((M) => M.contains(A));
        !C ||
          j ||
          (s == null || s(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, f),
      P = Fb((T) => {
        const A = T.target;
        [...l.branches].some((M) => M.contains(A)) ||
          (i == null || i(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, f);
    return (
      Ah((T) => {
        x === l.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Au = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            Ru(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Au);
            }
          );
      }, [u, f, n, l]),
      v.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            Ru());
        },
        [u, l]
      ),
      v.useEffect(() => {
        const T = () => m({});
        return (
          document.addEventListener(Ha, T),
          () => document.removeEventListener(Ha, T)
        );
      }, []),
      p.jsx(De.div, {
        ...c,
        ref: g,
        style: {
          pointerEvents: w ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Te(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Te(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        ),
      })
    );
  });
Ph.displayName = kb;
var Nb = "DismissableLayerBranch",
  Db = v.forwardRef((e, t) => {
    const n = v.useContext(Rh),
      r = v.useRef(null),
      s = qe(t, r);
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
      p.jsx(De.div, { ...e, ref: s })
    );
  });
Db.displayName = Nb;
function Mb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              kh(Ob, n, l, { discrete: !0 });
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
function Fb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          kh(jb, n, { originalEvent: i }, { discrete: !1 });
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
function Ru() {
  const e = new CustomEvent(Ha);
  document.dispatchEvent(e);
}
function kh(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? Th(s, i) : s.dispatchEvent(i);
}
var la = "focusScope.autoFocusOnMount",
  ua = "focusScope.autoFocusOnUnmount",
  Pu = { bubbles: !1, cancelable: !0 },
  Ib = "FocusScope",
  Kc = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        ...o
      } = e,
      [a, c] = v.useState(null),
      l = Vt(s),
      u = Vt(i),
      d = v.useRef(null),
      f = qe(t, (h) => c(h)),
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
            a.contains(C) ? (d.current = C) : Tn(d.current, { select: !0 });
          },
          y = function (w) {
            if (m.paused || !a) return;
            const C = w.relatedTarget;
            C !== null && (a.contains(C) || Tn(d.current, { select: !0 }));
          },
          b = function (w) {
            if (document.activeElement === document.body)
              for (const _ of w) _.removedNodes.length > 0 && Tn(a);
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
          Ou.add(m);
          const h = document.activeElement;
          if (!a.contains(h)) {
            const b = new CustomEvent(la, Pu);
            a.addEventListener(la, l),
              a.dispatchEvent(b),
              b.defaultPrevented ||
                (Lb(zb(Oh(a)), { select: !0 }),
                document.activeElement === h && Tn(a));
          }
          return () => {
            a.removeEventListener(la, l),
              setTimeout(() => {
                const b = new CustomEvent(ua, Pu);
                a.addEventListener(ua, u),
                  a.dispatchEvent(b),
                  b.defaultPrevented || Tn(h ?? document.body, { select: !0 }),
                  a.removeEventListener(ua, u),
                  Ou.remove(m);
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
            [w, C] = Vb(x);
          w && C
            ? !h.shiftKey && b === C
              ? (h.preventDefault(), n && Tn(w, { select: !0 }))
              : h.shiftKey &&
                b === w &&
                (h.preventDefault(), n && Tn(C, { select: !0 }))
            : b === x && h.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return p.jsx(De.div, { tabIndex: -1, ...o, ref: f, onKeyDown: g });
  });
Kc.displayName = Ib;
function Lb(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Tn(r, { select: t }), document.activeElement !== n)) return;
}
function Vb(e) {
  const t = Oh(e),
    n = ku(t, e),
    r = ku(t.reverse(), e);
  return [n, r];
}
function Oh(e) {
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
function ku(e, t) {
  for (const n of e) if (!Bb(n, { upTo: t })) return n;
}
function Bb(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ub(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Tn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ub(e) && t && e.select();
  }
}
var Ou = $b();
function $b() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = ju(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = ju(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function ju(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function zb(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Wb = "Portal",
  Qc = v.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = v.useState(!1);
    mr(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? _v.createPortal(p.jsx(De.div, { ...r, ref: t }), o) : null;
  });
Qc.displayName = Wb;
function Hb(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Tr = (e) => {
  const { present: t, children: n } = e,
    r = qb(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = qe(r.ref, Gb(s));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(s, { ref: i })
    : null;
};
Tr.displayName = "Presence";
function qb(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    s = v.useRef(e),
    i = v.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, c] = Hb(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const l = Li(r.current);
      i.current = a === "mounted" ? l : "none";
    }, [a]),
    mr(() => {
      const l = r.current,
        u = s.current;
      if (u !== e) {
        const f = i.current,
          m = Li(l);
        e
          ? c("MOUNT")
          : m === "none" || (l == null ? void 0 : l.display) === "none"
          ? c("UNMOUNT")
          : c(u && f !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, c]),
    mr(() => {
      if (t) {
        let l;
        const u = t.ownerDocument.defaultView ?? window,
          d = (m) => {
            const h = Li(r.current).includes(m.animationName);
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
            m.target === t && (i.current = Li(r.current));
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
function Li(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Gb(e) {
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
var da = 0;
function jh() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Nu()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Nu()),
      da++,
      () => {
        da === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          da--;
      }
    );
  }, []);
}
function Nu() {
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
var Yt = function () {
  return (
    (Yt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Yt.apply(this, arguments)
  );
};
function Nh(e, t) {
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
function Zb(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Xi = "right-scroll-bar-position",
  Yi = "width-before-scroll-bar",
  Kb = "with-scroll-bars-hidden",
  Qb = "--removed-body-scroll-bar-size";
function fa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Xb(e, t) {
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
var Yb = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Du = new WeakMap();
function Jb(e, t) {
  var n = Xb(null, function (r) {
    return e.forEach(function (s) {
      return fa(s, r);
    });
  });
  return (
    Yb(
      function () {
        var r = Du.get(n);
        if (r) {
          var s = new Set(r),
            i = new Set(e),
            o = n.current;
          s.forEach(function (a) {
            i.has(a) || fa(a, null);
          }),
            i.forEach(function (a) {
              s.has(a) || fa(a, o);
            });
        }
        Du.set(n, e);
      },
      [e]
    ),
    n
  );
}
function ex(e) {
  return e;
}
function tx(e, t) {
  t === void 0 && (t = ex);
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
function nx(e) {
  e === void 0 && (e = {});
  var t = tx(null);
  return (t.options = Yt({ async: !0, ssr: !1 }, e)), t;
}
var Dh = function (e) {
  var t = e.sideCar,
    n = Nh(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, Yt({}, n));
};
Dh.isSideCarExport = !0;
function rx(e, t) {
  return e.useMedium(t), Dh;
}
var Mh = nx(),
  ha = function () {},
  Io = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: ha,
        onWheelCapture: ha,
        onTouchMoveCapture: ha,
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
      w = Nh(e, [
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
      _ = Jb([n, t]),
      P = Yt(Yt({}, w), s);
    return v.createElement(
      v.Fragment,
      null,
      u &&
        v.createElement(C, {
          sideCar: Mh,
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
        ? v.cloneElement(v.Children.only(a), Yt(Yt({}, P), { ref: _ }))
        : v.createElement(b, Yt({}, P, { className: c, ref: _ }), a)
    );
  });
Io.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Io.classNames = { fullWidth: Yi, zeroRight: Xi };
var sx = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ix() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sx();
  return t && e.setAttribute("nonce", t), e;
}
function ox(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function ax(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cx = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = ix()) && (ox(t, n), ax(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  lx = function () {
    var e = cx();
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
  Fh = function () {
    var e = lx(),
      t = function (n) {
        var r = n.styles,
          s = n.dynamic;
        return e(r, s), null;
      };
    return t;
  },
  ux = { left: 0, top: 0, right: 0, gap: 0 },
  pa = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  dx = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [pa(n), pa(r), pa(s)];
  },
  fx = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return ux;
    var t = dx(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  hx = Fh(),
  Ur = "data-scroll-locked",
  px = function (e, t, n, r) {
    var s = e.left,
      i = e.top,
      o = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Kb,
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
          Ur,
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
          Xi,
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
          Yi,
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
        .concat(Xi, " .")
        .concat(
          Xi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Yi, " .")
        .concat(
          Yi,
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
          Ur,
          `] {
    `
        )
        .concat(Qb, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Mu = function () {
    var e = parseInt(document.body.getAttribute(Ur) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  mx = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(Ur, (Mu() + 1).toString()),
        function () {
          var e = Mu() - 1;
          e <= 0
            ? document.body.removeAttribute(Ur)
            : document.body.setAttribute(Ur, e.toString());
        }
      );
    }, []);
  },
  gx = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      s = r === void 0 ? "margin" : r;
    mx();
    var i = v.useMemo(
      function () {
        return fx(s);
      },
      [s]
    );
    return v.createElement(hx, { styles: px(i, !t, s, n ? "" : "!important") });
  },
  qa = !1;
if (typeof window < "u")
  try {
    var Vi = Object.defineProperty({}, "passive", {
      get: function () {
        return (qa = !0), !0;
      },
    });
    window.addEventListener("test", Vi, Vi),
      window.removeEventListener("test", Vi, Vi);
  } catch {
    qa = !1;
  }
var Pr = qa ? { passive: !1 } : !1,
  yx = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ih = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !yx(e) && n[t] === "visible")
    );
  },
  vx = function (e) {
    return Ih(e, "overflowY");
  },
  bx = function (e) {
    return Ih(e, "overflowX");
  },
  Fu = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = Lh(e, r);
      if (s) {
        var i = Vh(e, r),
          o = i[1],
          a = i[2];
        if (o > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  xx = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  wx = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Lh = function (e, t) {
    return e === "v" ? vx(t) : bx(t);
  },
  Vh = function (e, t) {
    return e === "v" ? xx(t) : wx(t);
  },
  _x = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Sx = function (e, t, n, r, s) {
    var i = _x(e, window.getComputedStyle(t).direction),
      o = i * r,
      a = n.target,
      c = t.contains(a),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      var m = Vh(e, a),
        g = m[0],
        h = m[1],
        y = m[2],
        b = h - y - i * g;
      (g || b) && Lh(e, a) && ((d += b), (f += g)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!c && a !== document.body) || (c && (t.contains(a) || t === a)));
    return ((u && Math.abs(d) < 1) || (!u && Math.abs(f) < 1)) && (l = !0), l;
  },
  Bi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Iu = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Lu = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Cx = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Ex = function (e) {
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
  Tx = 0,
  kr = [];
function Ax(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    s = v.useState(Tx++)[0],
    i = v.useState(Fh)[0],
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
          var h = Zb([e.lockRef.current], (e.shards || []).map(Lu), !0).filter(
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
      var b = Bi(h),
        x = n.current,
        w = "deltaX" in h ? h.deltaX : x[0] - b[0],
        C = "deltaY" in h ? h.deltaY : x[1] - b[1],
        _,
        P = h.target,
        T = Math.abs(w) > Math.abs(C) ? "h" : "v";
      if ("touches" in h && T === "h" && P.type === "range") return !1;
      var A = Fu(T, P);
      if (!A) return !0;
      if ((A ? (_ = T) : ((_ = T === "v" ? "h" : "v"), (A = Fu(T, P))), !A))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (w || C) && (r.current = _), !_)
      )
        return !0;
      var j = r.current || _;
      return Sx(j, y, h, j === "h" ? w : C);
    }, []),
    c = v.useCallback(function (h) {
      var y = h;
      if (!(!kr.length || kr[kr.length - 1] !== i)) {
        var b = "deltaY" in y ? Iu(y) : Bi(y),
          x = t.current.filter(function (_) {
            return (
              _.name === y.type &&
              (_.target === y.target || y.target === _.shadowParent) &&
              Cx(_.delta, b)
            );
          })[0];
        if (x && x.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!x) {
          var w = (o.current.shards || [])
              .map(Lu)
              .filter(Boolean)
              .filter(function (_) {
                return _.contains(y.target);
              }),
            C = w.length > 0 ? a(y, w[0]) : !o.current.noIsolation;
          C && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    l = v.useCallback(function (h, y, b, x) {
      var w = { name: h, delta: y, target: b, should: x, shadowParent: Rx(b) };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== w;
          });
        }, 1);
    }, []),
    u = v.useCallback(function (h) {
      (n.current = Bi(h)), (r.current = void 0);
    }, []),
    d = v.useCallback(function (h) {
      l(h.type, Iu(h), h.target, a(h, e.lockRef.current));
    }, []),
    f = v.useCallback(function (h) {
      l(h.type, Bi(h), h.target, a(h, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      kr.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", c, Pr),
      document.addEventListener("touchmove", c, Pr),
      document.addEventListener("touchstart", u, Pr),
      function () {
        (kr = kr.filter(function (h) {
          return h !== i;
        })),
          document.removeEventListener("wheel", c, Pr),
          document.removeEventListener("touchmove", c, Pr),
          document.removeEventListener("touchstart", u, Pr);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(i, { styles: Ex(s) }) : null,
    m ? v.createElement(gx, { gapMode: e.gapMode }) : null
  );
}
function Rx(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Px = rx(Mh, Ax);
var Xc = v.forwardRef(function (e, t) {
  return v.createElement(Io, Yt({}, e, { ref: t, sideCar: Px }));
});
Xc.classNames = Io.classNames;
var kx = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Or = new WeakMap(),
  Ui = new WeakMap(),
  $i = {},
  ma = 0,
  Bh = function (e) {
    return e && (e.host || Bh(e.parentNode));
  },
  Ox = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Bh(n);
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
  jx = function (e, t, n, r) {
    var s = Ox(t, Array.isArray(e) ? e : [e]);
    $i[n] || ($i[n] = new WeakMap());
    var i = $i[n],
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
                h = (Or.get(f) || 0) + 1,
                y = (i.get(f) || 0) + 1;
              Or.set(f, h),
                i.set(f, y),
                o.push(f),
                h === 1 && g && Ui.set(f, !0),
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
      ma++,
      function () {
        o.forEach(function (d) {
          var f = Or.get(d) - 1,
            m = i.get(d) - 1;
          Or.set(d, f),
            i.set(d, m),
            f || (Ui.has(d) || d.removeAttribute(r), Ui.delete(d)),
            m || d.removeAttribute(n);
        }),
          ma--,
          ma ||
            ((Or = new WeakMap()),
            (Or = new WeakMap()),
            (Ui = new WeakMap()),
            ($i = {}));
      }
    );
  },
  Uh = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      s = kx(e);
    return s
      ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
        jx(r, s, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Yc = "Dialog",
  [$h, x1] = Er(Yc),
  [Nx, zt] = $h(Yc),
  zh = (e) => {
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
      [l = !1, u] = Fo({ prop: r, defaultProp: s, onChange: i });
    return p.jsx(Nx, {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: Ms(),
      titleId: Ms(),
      descriptionId: Ms(),
      open: l,
      onOpenChange: u,
      onOpenToggle: v.useCallback(() => u((d) => !d), [u]),
      modal: o,
      children: n,
    });
  };
zh.displayName = Yc;
var Wh = "DialogTrigger",
  Hh = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = zt(Wh, n),
      i = qe(t, s.triggerRef);
    return p.jsx(De.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": tl(s.open),
      ...r,
      ref: i,
      onClick: Te(e.onClick, s.onOpenToggle),
    });
  });
Hh.displayName = Wh;
var Jc = "DialogPortal",
  [Dx, qh] = $h(Jc, { forceMount: void 0 }),
  Gh = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
      i = zt(Jc, t);
    return p.jsx(Dx, {
      scope: t,
      forceMount: n,
      children: v.Children.map(r, (o) =>
        p.jsx(Tr, {
          present: n || i.open,
          children: p.jsx(Qc, { asChild: !0, container: s, children: o }),
        })
      ),
    });
  };
Gh.displayName = Jc;
var ao = "DialogOverlay",
  Zh = v.forwardRef((e, t) => {
    const n = qh(ao, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = zt(ao, e.__scopeDialog);
    return i.modal
      ? p.jsx(Tr, {
          present: r || i.open,
          children: p.jsx(Mx, { ...s, ref: t }),
        })
      : null;
  });
Zh.displayName = ao;
var Mx = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = zt(ao, n);
    return p.jsx(Xc, {
      as: In,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: p.jsx(De.div, {
        "data-state": tl(s.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  gr = "DialogContent",
  Kh = v.forwardRef((e, t) => {
    const n = qh(gr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = zt(gr, e.__scopeDialog);
    return p.jsx(Tr, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(Fx, { ...s, ref: t })
        : p.jsx(Ix, { ...s, ref: t }),
    });
  });
Kh.displayName = gr;
var Fx = v.forwardRef((e, t) => {
    const n = zt(gr, e.__scopeDialog),
      r = v.useRef(null),
      s = qe(t, n.contentRef, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i) return Uh(i);
      }, []),
      p.jsx(Qh, {
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
  Ix = v.forwardRef((e, t) => {
    const n = zt(gr, e.__scopeDialog),
      r = v.useRef(!1),
      s = v.useRef(!1);
    return p.jsx(Qh, {
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
  Qh = v.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        ...o
      } = e,
      a = zt(gr, n),
      c = v.useRef(null),
      l = qe(t, c);
    return (
      jh(),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(Kc, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: i,
            children: p.jsx(Ph, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": tl(a.open),
              ...o,
              ref: l,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(Lx, { titleId: a.titleId }),
              p.jsx(Bx, { contentRef: c, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  el = "DialogTitle",
  Xh = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = zt(el, n);
    return p.jsx(De.h2, { id: s.titleId, ...r, ref: t });
  });
Xh.displayName = el;
var Yh = "DialogDescription",
  Jh = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = zt(Yh, n);
    return p.jsx(De.p, { id: s.descriptionId, ...r, ref: t });
  });
Jh.displayName = Yh;
var ep = "DialogClose",
  tp = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = zt(ep, n);
    return p.jsx(De.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Te(e.onClick, () => s.onOpenChange(!1)),
    });
  });
tp.displayName = ep;
function tl(e) {
  return e ? "open" : "closed";
}
var np = "DialogTitleWarning",
  [w1, rp] = Cb(np, { contentName: gr, titleName: el, docsSlug: "dialog" }),
  Lx = ({ titleId: e }) => {
    const t = rp(np),
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
  Vx = "DialogDescriptionWarning",
  Bx = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      rp(Vx).contentName
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
  Ux = zh,
  $x = Hh,
  zx = Gh,
  sp = Zh,
  ip = Kh,
  op = Xh,
  ap = Jh,
  cp = tp;
const Wx = Ux,
  Hx = $x,
  qx = cp,
  Gx = zx,
  lp = v.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(sp, {
      className: se(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
lp.displayName = sp.displayName;
const Zx = Zc(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
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
  up = v.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, s) =>
      p.jsxs(Gx, {
        children: [
          p.jsx(lp, {}),
          p.jsxs(ip, {
            ref: s,
            className: se(Zx({ side: e }), t),
            ...r,
            children: [
              p.jsxs(cp, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  p.jsx(vb, { className: "size-8" }),
                  p.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              n,
            ],
          }),
        ],
      })
  );
up.displayName = ip.displayName;
const dp = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: se("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
dp.displayName = "SheetHeader";
const Kx = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(op, {
    ref: n,
    className: se("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
Kx.displayName = op.displayName;
const Qx = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(ap, { ref: n, className: se("text-sm text-muted-foreground", e), ...t })
);
Qx.displayName = ap.displayName;
const Vu = (e) => {
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
  Xx = (e) => (e ? Vu(e) : Vu),
  Yx = (e) => e;
function Jx(e, t = Yx) {
  const n = fe.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return fe.useDebugValue(n), n;
}
const ew = (e) => {
    const t = Xx(e),
      n = (r) => Jx(t, r);
    return Object.assign(n, t), n;
  },
  tw = (e) => ew;
function nw(e, t) {
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
const Ga = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Ga(r)(n);
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
          return Ga(r)(n);
        },
      };
    }
  },
  rw = (e, t) => (n, r, s) => {
    let i = {
        storage: nw(() => localStorage),
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
      return Ga(l.getItem.bind(l))(i.name)
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
          const [C, _] = x;
          if (((m = i.merge(_, (w = r()) != null ? w : f)), n(m, !0), C))
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
  sw = rw;
var nt = ((e) => ((e.EN = "en"), (e.RU = "ru"), e))(nt || {});
const Ge = tw()(
    sw((e) => ({ lang: "en", setLang: (t) => e({ lang: t }) }), {
      name: "lang-storage",
    })
  ),
  Y = (e) => (e === nt.RU ? 0 : 1),
  iw = [
    {
      data: [
        { title: "О выставке", link: "/about" },
        { title: "Посетителям", link: "" },
        { title: "Экспонентам", link: "" },
        { title: "Медиа", link: "" },
        { title: "Контакты", link: "/contacts" },
      ],
    },
    {
      data: [
        { title: "About exhibition", link: "/about" },
        { title: "To the Visitors", link: "" },
        { title: "To the Exhibitors", link: "" },
        { title: "Media", link: "" },
        { title: "Contacts", link: "/contacts" },
      ],
    },
  ],
  ow = () => {
    const [e, t] = v.useState(!1),
      n = Ge((r) => r.lang);
    return p.jsxs(Wx, {
      onOpenChange: () => t(!e),
      open: e,
      children: [
        p.jsx(Hx, {
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
        p.jsxs(up, {
          className: "overflow-y-auto",
          children: [
            p.jsx(qx, {}),
            p.jsxs(dp, {
              className: "mt-16 flex flex-col gap-2",
              children: [
                p.jsx(Be, {
                  to: "https://qacis.turkmenexpo.com/",
                  target: "_blank",
                  children: p.jsxs(Qe, {
                    variant: "outline",
                    className: "w-full",
                    size: "sm",
                    children: ["QACIS 2025", p.jsx(Gc, {})],
                  }),
                }),
                p.jsx(Be, {
                  to:
                    n === "ru"
                      ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                      : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg",
                  children: p.jsx(Qe, {
                    variant: "secondary",
                    size: "sm",
                    className:
                      "bg-[#FFAE2A] w-full text-on_teritary hover:bg-[#FFAE2A]/90",
                    children:
                      n === "ru" ? "Официальная поддержка" : "Official Support",
                  }),
                }),
                p.jsx(Be, {
                  to: "/B2B-B2G",
                  onClick: () => t(!1),
                  children: p.jsx(Qe, {
                    className: "text-base w-full",
                    variant: "teritary",
                    size: "sm",
                    children:
                      n === "ru" ? "B2B | B2G встречи" : "B2B | B2G meetings",
                  }),
                }),
              ],
            }),
            p.jsx("hr", { className: "border-slate-500/20 my-8" }),
            p.jsx("div", {
              className: "flex flex-col gap-6",
              children: iw[Y(n)].data.map((r) =>
                p.jsx(
                  Be,
                  {
                    onClick: () => t(!1),
                    className: "h-10 text-on_surface ",
                    to: r.link,
                    children: r.title,
                  },
                  r.title
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  Bu = [
    {
      data: [
        { title: "Путеводитель", link: "" },
        {
          title: "Новости",
          dropDown: !0,
          dropDownContent: [
            { text: "Новости", link: "" },
            { text: "Подписаться на новости" },
          ],
        },
        { title: "Контакты", link: "/contacts" },
        {
          title: "О выставке",
          dropDown: !0,
          dropDownContent: [
            { text: "О выставке", link: "/about" },
            { text: "Медиа", link: "" },
          ],
        },
        {
          title: "Посетителям",
          dropDown: !0,
          dropDownContent: [
            { text: "Почему стоит посетить?", link: "", blank: !0 },
            { text: "Список участников", link: "", blank: !0 },
            {
              text: "Путеводитель",
              link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
              blank: !0,
            },
          ],
        },
        {
          title: "Участникам",
          dropDown: !0,
          dropDownContent: [
            { text: "Забронировать стенд", link: "/stend-form" },
            { text: "Почему стоить участвовать?", link: "" },
            { text: "Тематические разделы ", link: "" },
          ],
        },
      ],
    },
    {
      data: [
        { title: "Travel Guide", link: "" },
        { title: "Contacts", link: "/contacts" },
        {
          title: "News",
          dropDown: !0,
          dropDownContent: [
            { text: "News", link: "" },
            { text: "Subscribe to the news" },
          ],
        },
        {
          title: "About exhibition",
          dropDown: !0,
          dropDownContent: [
            { text: "About exhibition", link: "/about" },
            { text: "Media", link: "" },
          ],
        },
        {
          title: "Visitors",
          dropDown: !0,
          dropDownContent: [
            { text: "Why visit?", link: "" },
            { text: "List of Participants", link: "", blank: !0 },
            { text: "Programme", link: "", blank: !0 },
            {
              text: "Travel Guide",
              link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
              blank: !0,
            },
          ],
        },
        {
          title: "Exhibitors",
          dropDown: !0,
          dropDownContent: [
            { text: "Book a stand", link: "/stend-form" },
            { text: "Why exhibit?", link: "" },
            { text: "Thematic areas of the exhibition", link: "" },
          ],
        },
      ],
    },
  ],
  _1 = () => {
    const e = Ge((t) => t.lang);
    return p.jsxs("header", {
      children: [
        p.jsx("div", {
          className:
            "h-12 hidden lg:flex bg-primary text-on_primary items-center overflow-hidden",
          children: p.jsxs(wt, {
            className: "flex items-center justify-between",
            children: [
              p.jsxs("div", {
                className: "gap-8 flex items-center justify-between",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      p.jsx(fb, {}),
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
                    children: Bu[Y(e)].data.slice(0, 3).map((t) =>
                      t.dropDown
                        ? p.jsx(
                            Wf,
                            {
                              color: "white",
                              dropDownContent: t.dropDownContent,
                              title: t.title,
                            },
                            t.title
                          )
                        : p.jsx(
                            Be,
                            {
                              className: "py-2",
                              to: t.link || "",
                              children: t.title,
                            },
                            t.title
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
                      p.jsx(pb, { size: 16, strokeWidth: "3px" }),
                      p.jsx("h4", {
                        className: "text-sm",
                        children: "+99371871814",
                      }),
                    ],
                  }),
                  p.jsx(ud, {}),
                ],
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className:
            "bg-white py-2 flex items-center justify-between h-20 overflow-hidden",
          children: p.jsxs(wt, {
            className: "flex items-center justify-between ",
            children: [
              p.jsxs("div", {
                className: "flex items-center gap-8",
                children: [
                  p.jsx(Be, { to: "/", children: p.jsx(Sh, {}) }),
                  p.jsx("nav", {
                    className: "lg:flex hidden items-center gap-6",
                    children: Bu[Y(e)].data.slice(3, 6).map((t) =>
                      t.dropDown
                        ? p.jsx(
                            Wf,
                            {
                              dropDownContent: t.dropDownContent,
                              title: t.title,
                              color: "black",
                            },
                            t.title
                          )
                        : p.jsx(
                            Be,
                            {
                              className: "py-2",
                              to: t.link || "",
                              children: t.title,
                            },
                            t.title
                          )
                    ),
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex items-center",
                children: [
                  p.jsx(ud, { className: "lg:hidden" }),
                  p.jsx(ow, {}),
                ],
              }),
              p.jsxs("div", {
                className: "lg:flex hidden items-center gap-2",
                children: [
                  p.jsx(Be, {
                    to: "https://qacis.turkmenexpo.com/",
                    target: "_blank",
                    children: p.jsxs(Qe, {
                      variant: "outline",
                      size: "sm",
                      children: ["QACIS 2025", p.jsx(Gc, {})],
                    }),
                  }),
                  p.jsx(Be, {
                    target: "_blank",
                    to:
                      e === "ru"
                        ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                        : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg",
                    children: p.jsx(Qe, {
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
var _i = (e) => e.type === "checkbox",
  er = (e) => e instanceof Date,
  ct = (e) => e == null;
const fp = (e) => typeof e == "object";
var Ue = (e) => !ct(e) && !Array.isArray(e) && fp(e) && !er(e),
  hp = (e) =>
    Ue(e) && e.target ? (_i(e.target) ? e.target.checked : e.target.value) : e,
  aw = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  pp = (e, t) => e.has(aw(t)),
  cw = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Ue(t) && t.hasOwnProperty("isPrototypeOf");
  },
  nl =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function ut(e) {
  let t;
  const n = Array.isArray(e),
    r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(nl && (e instanceof Blob || r)) && (n || Ue(e)))
    if (((t = n ? [] : {}), !n && !cw(e))) t = e;
    else for (const s in e) e.hasOwnProperty(s) && (t[s] = ut(e[s]));
  else return e;
  return t;
}
var Lo = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Le = (e) => e === void 0,
  L = (e, t, n) => {
    if (!t || !Ue(e)) return n;
    const r = Lo(t.split(/[,[\].]+?/)).reduce((s, i) => (ct(s) ? s : s[i]), e);
    return Le(r) || r === e ? (Le(e[t]) ? n : e[t]) : r;
  },
  Rt = (e) => typeof e == "boolean",
  rl = (e) => /^\w*$/.test(e),
  mp = (e) => Lo(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  xe = (e, t, n) => {
    let r = -1;
    const s = rl(t) ? [t] : mp(t),
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
const co = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Mt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  dn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  gp = fe.createContext(null),
  Ar = () => fe.useContext(gp),
  lw = (e) => {
    const { children: t, ...n } = e;
    return fe.createElement(gp.Provider, { value: n }, t);
  };
var yp = (e, t, n, r = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(s, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== Mt.all &&
              (t._proxyFormState[o] = !r || Mt.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return s;
  },
  ft = (e) => Ue(e) && !Object.keys(e).length,
  vp = (e, t, n, r) => {
    n(e);
    const { name: s, ...i } = e;
    return (
      ft(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!r || Mt.all))
    );
  },
  Fs = (e) => (Array.isArray(e) ? e : [e]),
  bp = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    Fs(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function sl(e) {
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
function uw(e) {
  const t = Ar(),
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
    sl({
      disabled: r,
      next: (d) =>
        c.current &&
        bp(u.current, d.name, i) &&
        vp(d, l.current, n._updateFormState) &&
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
    fe.useMemo(() => yp(o, n, l.current, !1), [o, n])
  );
}
var en = (e) => typeof e == "string",
  xp = (e, t, n, r, s) =>
    en(e)
      ? (r && t.watch.add(e), L(n, e, s))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), L(n, i)))
      : (r && (t.watchAll = !0), n);
function dw(e) {
  const t = Ar(),
    {
      control: n = t.control,
      name: r,
      defaultValue: s,
      disabled: i,
      exact: o,
    } = e,
    a = fe.useRef(r);
  (a.current = r),
    sl({
      disabled: i,
      subject: n._subjects.values,
      next: (u) => {
        bp(a.current, u.name, o) &&
          l(ut(xp(a.current, n._names, u.values || n._formValues, !1, s)));
      },
    });
  const [c, l] = fe.useState(n._getWatch(r, s));
  return fe.useEffect(() => n._removeUnmounted()), c;
}
function fw(e) {
  const t = Ar(),
    { name: n, disabled: r, control: s = t.control, shouldUnregister: i } = e,
    o = pp(s._names.array, n),
    a = dw({
      control: s,
      name: n,
      defaultValue: L(s._formValues, n, L(s._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    c = uw({ control: s, name: n, exact: !0 }),
    l = fe.useRef(
      s.register(n, {
        ...e.rules,
        value: a,
        ...(Rt(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    u = fe.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!L(c.errors, n) },
            isDirty: { enumerable: !0, get: () => !!L(c.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!L(c.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!L(c.validatingFields, n),
            },
            error: { enumerable: !0, get: () => L(c.errors, n) },
          }
        ),
      [c, n]
    ),
    d = fe.useMemo(
      () => ({
        name: n,
        value: a,
        ...(Rt(r) || c.disabled ? { disabled: c.disabled || r } : {}),
        onChange: (f) =>
          l.current.onChange({
            target: { value: hp(f), name: n },
            type: co.CHANGE,
          }),
        onBlur: () =>
          l.current.onBlur({
            target: { value: L(s._formValues, n), name: n },
            type: co.BLUR,
          }),
        ref: (f) => {
          const m = L(s._fields, n);
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
          const y = L(s._fields, g);
          y && y._f && (y._f.mount = h);
        };
      if ((m(n, !0), f)) {
        const g = ut(L(s._options.defaultValues, n));
        xe(s._defaultValues, n, g),
          Le(L(s._formValues, n)) && xe(s._formValues, n, g);
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
const hw = (e) => e.render(fw(e));
var wp = (e, t, n, r, s) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: s || !0 },
        }
      : {},
  Uu = (e) => ({
    isOnSubmit: !e || e === Mt.onSubmit,
    isOnBlur: e === Mt.onBlur,
    isOnChange: e === Mt.onChange,
    isOnAll: e === Mt.all,
    isOnTouch: e === Mt.onTouched,
  }),
  $u = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Is = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const i = L(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !r) return !0;
        if (o.ref && t(o.ref, o.name) && !r) return !0;
        if (Is(a, t)) break;
      } else if (Ue(a) && Is(a, t)) break;
    }
  }
};
var pw = (e, t, n) => {
    const r = Fs(L(e, n));
    return xe(r, "root", t[n]), xe(e, n, r), e;
  },
  il = (e) => e.type === "file",
  Jt = (e) => typeof e == "function",
  lo = (e) => {
    if (!nl) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ji = (e) => en(e),
  ol = (e) => e.type === "radio",
  uo = (e) => e instanceof RegExp;
const zu = { value: !1, isValid: !1 },
  Wu = { value: !0, isValid: !0 };
var _p = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Le(e[0].attributes.value)
        ? Le(e[0].value) || e[0].value === ""
          ? Wu
          : { value: e[0].value, isValid: !0 }
        : Wu
      : zu;
  }
  return zu;
};
const Hu = { isValid: !1, value: null };
var Sp = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Hu
      )
    : Hu;
function qu(e, t, n = "validate") {
  if (Ji(e) || (Array.isArray(e) && e.every(Ji)) || (Rt(e) && !e))
    return { type: n, message: Ji(e) ? e : "", ref: t };
}
var jr = (e) => (Ue(e) && !uo(e) ? e : { value: e, message: "" }),
  Gu = async (e, t, n, r, s, i) => {
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
      x = L(n, h);
    if (!b || t.has(h)) return {};
    const w = a ? a[0] : o,
      C = (N) => {
        s &&
          w.reportValidity &&
          (w.setCustomValidity(Rt(N) ? "" : N || ""), w.reportValidity());
      },
      _ = {},
      P = ol(o),
      T = _i(o),
      A = P || T,
      j =
        ((y || il(o)) && Le(o.value) && Le(x)) ||
        (lo(o) && o.value === "") ||
        x === "" ||
        (Array.isArray(x) && !x.length),
      M = wp.bind(null, h, r, _),
      V = (N, B, W, ee = dn.maxLength, Q = dn.minLength) => {
        const G = N ? B : W;
        _[h] = { type: N ? ee : Q, message: G, ref: o, ...M(N ? ee : Q, G) };
      };
    if (
      i
        ? !Array.isArray(x) || !x.length
        : c &&
          ((!A && (j || ct(x))) ||
            (Rt(x) && !x) ||
            (T && !_p(a).isValid) ||
            (P && !Sp(a).isValid))
    ) {
      const { value: N, message: B } = Ji(c)
        ? { value: !!c, message: c }
        : jr(c);
      if (
        N &&
        ((_[h] = {
          type: dn.required,
          message: B,
          ref: w,
          ...M(dn.required, B),
        }),
        !r)
      )
        return C(B), _;
    }
    if (!j && (!ct(d) || !ct(f))) {
      let N, B;
      const W = jr(f),
        ee = jr(d);
      if (!ct(x) && !isNaN(x)) {
        const Q = o.valueAsNumber || (x && +x);
        ct(W.value) || (N = Q > W.value), ct(ee.value) || (B = Q < ee.value);
      } else {
        const Q = o.valueAsDate || new Date(x),
          G = (ye) => new Date(new Date().toDateString() + " " + ye),
          q = o.type == "time",
          ie = o.type == "week";
        en(W.value) &&
          x &&
          (N = q
            ? G(x) > G(W.value)
            : ie
            ? x > W.value
            : Q > new Date(W.value)),
          en(ee.value) &&
            x &&
            (B = q
              ? G(x) < G(ee.value)
              : ie
              ? x < ee.value
              : Q < new Date(ee.value));
      }
      if ((N || B) && (V(!!N, W.message, ee.message, dn.max, dn.min), !r))
        return C(_[h].message), _;
    }
    if ((l || u) && !j && (en(x) || (i && Array.isArray(x)))) {
      const N = jr(l),
        B = jr(u),
        W = !ct(N.value) && x.length > +N.value,
        ee = !ct(B.value) && x.length < +B.value;
      if ((W || ee) && (V(W, N.message, B.message), !r))
        return C(_[h].message), _;
    }
    if (m && !j && en(x)) {
      const { value: N, message: B } = jr(m);
      if (
        uo(N) &&
        !x.match(N) &&
        ((_[h] = { type: dn.pattern, message: B, ref: o, ...M(dn.pattern, B) }),
        !r)
      )
        return C(B), _;
    }
    if (g) {
      if (Jt(g)) {
        const N = await g(x, n),
          B = qu(N, w);
        if (B && ((_[h] = { ...B, ...M(dn.validate, B.message) }), !r))
          return C(B.message), _;
      } else if (Ue(g)) {
        let N = {};
        for (const B in g) {
          if (!ft(N) && !r) break;
          const W = qu(await g[B](x, n), w, B);
          W &&
            ((N = { ...W, ...M(B, W.message) }), C(W.message), r && (_[h] = N));
        }
        if (!ft(N) && ((_[h] = { ref: w, ...N }), !r)) return _;
      }
    }
    return C(!0), _;
  };
function mw(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Le(e) ? r++ : e[t[r++]];
  return e;
}
function gw(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Le(e[t])) return !1;
  return !0;
}
function We(e, t) {
  const n = Array.isArray(t) ? t : rl(t) ? [t] : mp(t),
    r = n.length === 1 ? e : mw(e, n),
    s = n.length - 1,
    i = n[s];
  return (
    r && delete r[i],
    s !== 0 &&
      ((Ue(r) && ft(r)) || (Array.isArray(r) && gw(r))) &&
      We(e, n.slice(0, -1)),
    e
  );
}
var ga = () => {
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
  Za = (e) => ct(e) || !fp(e);
function Pn(e, t) {
  if (Za(e) || Za(t)) return e === t;
  if (er(e) && er(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const i = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (er(i) && er(o)) ||
        (Ue(i) && Ue(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !Pn(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var Cp = (e) => e.type === "select-multiple",
  yw = (e) => ol(e) || _i(e),
  ya = (e) => lo(e) && e.isConnected,
  Ep = (e) => {
    for (const t in e) if (Jt(e[t])) return !0;
    return !1;
  };
function fo(e, t = {}) {
  const n = Array.isArray(e);
  if (Ue(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Ue(e[r]) && !Ep(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), fo(e[r], t[r]))
        : ct(e[r]) || (t[r] = !0);
  return t;
}
function Tp(e, t, n) {
  const r = Array.isArray(e);
  if (Ue(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || (Ue(e[s]) && !Ep(e[s]))
        ? Le(t) || Za(n[s])
          ? (n[s] = Array.isArray(e[s]) ? fo(e[s], []) : { ...fo(e[s]) })
          : Tp(e[s], ct(t) ? {} : t[s], n[s])
        : (n[s] = !Pn(e[s], t[s]));
  return n;
}
var Cs = (e, t) => Tp(e, t, fo(t)),
  Ap = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Le(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && en(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function va(e) {
  const t = e.ref;
  return il(t)
    ? t.files
    : ol(t)
    ? Sp(e.refs).value
    : Cp(t)
    ? [...t.selectedOptions].map(({ value: n }) => n)
    : _i(t)
    ? _p(e.refs).value
    : Ap(Le(t.value) ? e.ref.value : t.value, e);
}
var vw = (e, t, n, r) => {
    const s = {};
    for (const i of e) {
      const o = L(t, i);
      o && xe(s, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r,
    };
  },
  Es = (e) =>
    Le(e)
      ? e
      : uo(e)
      ? e.source
      : Ue(e)
      ? uo(e.value)
        ? e.value.source
        : e.value
      : e;
const Zu = "AsyncFunction";
var bw = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (Jt(e.validate) && e.validate.constructor.name === Zu) ||
      (Ue(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === Zu))
    ),
  xw = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Ku(e, t, n) {
  const r = L(e, n);
  if (r || rl(n)) return { error: r, name: n };
  const s = n.split(".");
  for (; s.length; ) {
    const i = s.join("."),
      o = L(t, i),
      a = L(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    s.pop();
  }
  return { name: n };
}
var ww = (e, t, n, r, s) =>
    s.isOnAll
      ? !1
      : !n && s.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : s.isOnBlur)
      ? !e
      : (n ? r.isOnChange : s.isOnChange)
      ? e
      : !0,
  _w = (e, t) => !Lo(L(e, t)).length && We(e, t);
const Sw = {
  mode: Mt.onSubmit,
  reValidateMode: Mt.onChange,
  shouldFocusError: !0,
};
function Cw(e = {}) {
  let t = { ...Sw, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Jt(t.defaultValues),
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
        ? ut(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : ut(s),
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
    d = { values: ga(), array: ga(), state: ga() },
    f = Uu(t.mode),
    m = Uu(t.reValidateMode),
    g = t.criteriaMode === Mt.all,
    h = (S) => (R) => {
      clearTimeout(l), (l = setTimeout(S, R));
    },
    y = async (S) => {
      if (!t.disabled && (u.isValid || S)) {
        const R = t.resolver ? ft((await A()).errors) : await M(r, !0);
        R !== n.isValid && d.state.next({ isValid: R });
      }
    },
    b = (S, R) => {
      !t.disabled &&
        (u.isValidating || u.validatingFields) &&
        ((S || Array.from(a.mount)).forEach((O) => {
          O && (R ? xe(n.validatingFields, O, R) : We(n.validatingFields, O));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !ft(n.validatingFields),
        }));
    },
    x = (S, R = [], O, U, I = !0, F = !0) => {
      if (U && O && !t.disabled) {
        if (((o.action = !0), F && Array.isArray(L(r, S)))) {
          const X = O(L(r, S), U.argA, U.argB);
          I && xe(r, S, X);
        }
        if (F && Array.isArray(L(n.errors, S))) {
          const X = O(L(n.errors, S), U.argA, U.argB);
          I && xe(n.errors, S, X), _w(n.errors, S);
        }
        if (u.touchedFields && F && Array.isArray(L(n.touchedFields, S))) {
          const X = O(L(n.touchedFields, S), U.argA, U.argB);
          I && xe(n.touchedFields, S, X);
        }
        u.dirtyFields && (n.dirtyFields = Cs(s, i)),
          d.state.next({
            name: S,
            isDirty: N(S, R),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else xe(i, S, R);
    },
    w = (S, R) => {
      xe(n.errors, S, R), d.state.next({ errors: n.errors });
    },
    C = (S) => {
      (n.errors = S), d.state.next({ errors: n.errors, isValid: !1 });
    },
    _ = (S, R, O, U) => {
      const I = L(r, S);
      if (I) {
        const F = L(i, S, Le(O) ? L(s, S) : O);
        Le(F) || (U && U.defaultChecked) || R
          ? xe(i, S, R ? F : va(I._f))
          : ee(S, F),
          o.mount && y();
      }
    },
    P = (S, R, O, U, I) => {
      let F = !1,
        X = !1;
      const ce = { name: S };
      if (!t.disabled) {
        const ze = !!(L(r, S) && L(r, S)._f && L(r, S)._f.disabled);
        if (!O || U) {
          u.isDirty &&
            ((X = n.isDirty),
            (n.isDirty = ce.isDirty = N()),
            (F = X !== ce.isDirty));
          const Fe = ze || Pn(L(s, S), R);
          (X = !!(!ze && L(n.dirtyFields, S))),
            Fe || ze ? We(n.dirtyFields, S) : xe(n.dirtyFields, S, !0),
            (ce.dirtyFields = n.dirtyFields),
            (F = F || (u.dirtyFields && X !== !Fe));
        }
        if (O) {
          const Fe = L(n.touchedFields, S);
          Fe ||
            (xe(n.touchedFields, S, O),
            (ce.touchedFields = n.touchedFields),
            (F = F || (u.touchedFields && Fe !== O)));
        }
        F && I && d.state.next(ce);
      }
      return F ? ce : {};
    },
    T = (S, R, O, U) => {
      const I = L(n.errors, S),
        F = u.isValid && Rt(R) && n.isValid !== R;
      if (
        (t.delayError && O
          ? ((c = h(() => w(S, O))), c(t.delayError))
          : (clearTimeout(l),
            (c = null),
            O ? xe(n.errors, S, O) : We(n.errors, S)),
        (O ? !Pn(I, O) : I) || !ft(U) || F)
      ) {
        const X = {
          ...U,
          ...(F && Rt(R) ? { isValid: R } : {}),
          errors: n.errors,
          name: S,
        };
        (n = { ...n, ...X }), d.state.next(X);
      }
    },
    A = async (S) => {
      b(S, !0);
      const R = await t.resolver(
        i,
        t.context,
        vw(S || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return b(S), R;
    },
    j = async (S) => {
      const { errors: R } = await A(S);
      if (S)
        for (const O of S) {
          const U = L(R, O);
          U ? xe(n.errors, O, U) : We(n.errors, O);
        }
      else n.errors = R;
      return R;
    },
    M = async (S, R, O = { valid: !0 }) => {
      for (const U in S) {
        const I = S[U];
        if (I) {
          const { _f: F, ...X } = I;
          if (F) {
            const ce = a.array.has(F.name),
              ze = I._f && bw(I._f);
            ze && u.validatingFields && b([U], !0);
            const Fe = await Gu(
              I,
              a.disabled,
              i,
              g,
              t.shouldUseNativeValidation && !R,
              ce
            );
            if (
              (ze && u.validatingFields && b([U]),
              Fe[F.name] && ((O.valid = !1), R))
            )
              break;
            !R &&
              (L(Fe, F.name)
                ? ce
                  ? pw(n.errors, Fe, F.name)
                  : xe(n.errors, F.name, Fe[F.name])
                : We(n.errors, F.name));
          }
          !ft(X) && (await M(X, R, O));
        }
      }
      return O.valid;
    },
    V = () => {
      for (const S of a.unMount) {
        const R = L(r, S);
        R &&
          (R._f.refs ? R._f.refs.every((O) => !ya(O)) : !ya(R._f.ref)) &&
          it(S);
      }
      a.unMount = new Set();
    },
    N = (S, R) => !t.disabled && (S && R && xe(i, S, R), !Pn(ve(), s)),
    B = (S, R, O) =>
      xp(S, a, { ...(o.mount ? i : Le(R) ? s : en(S) ? { [S]: R } : R) }, O, R),
    W = (S) => Lo(L(o.mount ? i : s, S, t.shouldUnregister ? L(s, S, []) : [])),
    ee = (S, R, O = {}) => {
      const U = L(r, S);
      let I = R;
      if (U) {
        const F = U._f;
        F &&
          (!F.disabled && xe(i, S, Ap(R, F)),
          (I = lo(F.ref) && ct(R) ? "" : R),
          Cp(F.ref)
            ? [...F.ref.options].forEach(
                (X) => (X.selected = I.includes(X.value))
              )
            : F.refs
            ? _i(F.ref)
              ? F.refs.length > 1
                ? F.refs.forEach(
                    (X) =>
                      (!X.defaultChecked || !X.disabled) &&
                      (X.checked = Array.isArray(I)
                        ? !!I.find((ce) => ce === X.value)
                        : I === X.value)
                  )
                : F.refs[0] && (F.refs[0].checked = !!I)
              : F.refs.forEach((X) => (X.checked = X.value === I))
            : il(F.ref)
            ? (F.ref.value = "")
            : ((F.ref.value = I),
              F.ref.type || d.values.next({ name: S, values: { ...i } })));
      }
      (O.shouldDirty || O.shouldTouch) &&
        P(S, I, O.shouldTouch, O.shouldDirty, !0),
        O.shouldValidate && ye(S);
    },
    Q = (S, R, O) => {
      for (const U in R) {
        const I = R[U],
          F = `${S}.${U}`,
          X = L(r, F);
        (a.array.has(S) || Ue(I) || (X && !X._f)) && !er(I)
          ? Q(F, I, O)
          : ee(F, I, O);
      }
    },
    G = (S, R, O = {}) => {
      const U = L(r, S),
        I = a.array.has(S),
        F = ut(R);
      xe(i, S, F),
        I
          ? (d.array.next({ name: S, values: { ...i } }),
            (u.isDirty || u.dirtyFields) &&
              O.shouldDirty &&
              d.state.next({
                name: S,
                dirtyFields: Cs(s, i),
                isDirty: N(S, F),
              }))
          : U && !U._f && !ct(F)
          ? Q(S, F, O)
          : ee(S, F, O),
        $u(S, a) && d.state.next({ ...n }),
        d.values.next({ name: o.mount ? S : void 0, values: { ...i } });
    },
    q = async (S) => {
      o.mount = !0;
      const R = S.target;
      let O = R.name,
        U = !0;
      const I = L(r, O),
        F = () => (R.type ? va(I._f) : hp(S)),
        X = (ce) => {
          U =
            Number.isNaN(ce) ||
            (er(ce) && isNaN(ce.getTime())) ||
            Pn(ce, L(i, O, ce));
        };
      if (I) {
        let ce, ze;
        const Fe = F(),
          Ht = S.type === co.BLUR || S.type === co.FOCUS_OUT,
          bs =
            (!xw(I._f) && !t.resolver && !L(n.errors, O) && !I._f.deps) ||
            ww(Ht, L(n.touchedFields, O), n.isSubmitted, m, f),
          qt = $u(O, a, Ht);
        xe(i, O, Fe),
          Ht
            ? (I._f.onBlur && I._f.onBlur(S), c && c(0))
            : I._f.onChange && I._f.onChange(S);
        const Kn = P(O, Fe, Ht, !1),
          xs = !ft(Kn) || qt;
        if (
          (!Ht && d.values.next({ name: O, type: S.type, values: { ...i } }),
          bs)
        )
          return (
            u.isValid && (t.mode === "onBlur" && Ht ? y() : Ht || y()),
            xs && d.state.next({ name: O, ...(qt ? {} : Kn) })
          );
        if ((!Ht && qt && d.state.next({ ...n }), t.resolver)) {
          const { errors: Qn } = await A([O]);
          if ((X(Fe), U)) {
            const ia = Ku(n.errors, r, O),
              Mi = Ku(Qn, r, ia.name || O);
            (ce = Mi.error), (O = Mi.name), (ze = ft(Qn));
          }
        } else
          b([O], !0),
            (ce = (await Gu(I, a.disabled, i, g, t.shouldUseNativeValidation))[
              O
            ]),
            b([O]),
            X(Fe),
            U && (ce ? (ze = !1) : u.isValid && (ze = await M(r, !0)));
        U && (I._f.deps && ye(I._f.deps), T(O, ze, ce, Kn));
      }
    },
    ie = (S, R) => {
      if (L(n.errors, R) && S.focus) return S.focus(), 1;
    },
    ye = async (S, R = {}) => {
      let O, U;
      const I = Fs(S);
      if (t.resolver) {
        const F = await j(Le(S) ? S : I);
        (O = ft(F)), (U = S ? !I.some((X) => L(F, X)) : O);
      } else
        S
          ? ((U = (
              await Promise.all(
                I.map(async (F) => {
                  const X = L(r, F);
                  return await M(X && X._f ? { [F]: X } : X);
                })
              )
            ).every(Boolean)),
            !(!U && !n.isValid) && y())
          : (U = O = await M(r));
      return (
        d.state.next({
          ...(!en(S) || (u.isValid && O !== n.isValid) ? {} : { name: S }),
          ...(t.resolver || !S ? { isValid: O } : {}),
          errors: n.errors,
        }),
        R.shouldFocus && !U && Is(r, ie, S ? I : a.mount),
        U
      );
    },
    ve = (S) => {
      const R = { ...(o.mount ? i : s) };
      return Le(S) ? R : en(S) ? L(R, S) : S.map((O) => L(R, O));
    },
    Xe = (S, R) => ({
      invalid: !!L((R || n).errors, S),
      isDirty: !!L((R || n).dirtyFields, S),
      error: L((R || n).errors, S),
      isValidating: !!L(n.validatingFields, S),
      isTouched: !!L((R || n).touchedFields, S),
    }),
    pt = (S) => {
      S && Fs(S).forEach((R) => We(n.errors, R)),
        d.state.next({ errors: S ? n.errors : {} });
    },
    Ye = (S, R, O) => {
      const U = (L(r, S, { _f: {} })._f || {}).ref,
        I = L(n.errors, S) || {},
        { ref: F, message: X, type: ce, ...ze } = I;
      xe(n.errors, S, { ...ze, ...R, ref: U }),
        d.state.next({ name: S, errors: n.errors, isValid: !1 }),
        O && O.shouldFocus && U && U.focus && U.focus();
    },
    Pt = (S, R) =>
      Jt(S)
        ? d.values.subscribe({ next: (O) => S(B(void 0, R), O) })
        : B(S, R, !0),
    it = (S, R = {}) => {
      for (const O of S ? Fs(S) : a.mount)
        a.mount.delete(O),
          a.array.delete(O),
          R.keepValue || (We(r, O), We(i, O)),
          !R.keepError && We(n.errors, O),
          !R.keepDirty && We(n.dirtyFields, O),
          !R.keepTouched && We(n.touchedFields, O),
          !R.keepIsValidating && We(n.validatingFields, O),
          !t.shouldUnregister && !R.keepDefaultValue && We(s, O);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(R.keepDirty ? { isDirty: N() } : {}) }),
        !R.keepIsValid && y();
    },
    de = ({ disabled: S, name: R, field: O, fields: U }) => {
      ((Rt(S) && o.mount) || S || a.disabled.has(R)) &&
        (S ? a.disabled.add(R) : a.disabled.delete(R),
        P(R, va(O ? O._f : L(U, R)._f), !1, !1, !0));
    },
    be = (S, R = {}) => {
      let O = L(r, S);
      const U = Rt(R.disabled) || Rt(t.disabled);
      return (
        xe(r, S, {
          ...(O || {}),
          _f: {
            ...(O && O._f ? O._f : { ref: { name: S } }),
            name: S,
            mount: !0,
            ...R,
          },
        }),
        a.mount.add(S),
        O
          ? de({
              field: O,
              disabled: Rt(R.disabled) ? R.disabled : t.disabled,
              name: S,
            })
          : _(S, !0, R.value),
        {
          ...(U ? { disabled: R.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!R.required,
                min: Es(R.min),
                max: Es(R.max),
                minLength: Es(R.minLength),
                maxLength: Es(R.maxLength),
                pattern: Es(R.pattern),
              }
            : {}),
          name: S,
          onChange: q,
          onBlur: q,
          ref: (I) => {
            if (I) {
              be(S, R), (O = L(r, S));
              const F =
                  (Le(I.value) &&
                    I.querySelectorAll &&
                    I.querySelectorAll("input,select,textarea")[0]) ||
                  I,
                X = yw(F),
                ce = O._f.refs || [];
              if (X ? ce.find((ze) => ze === F) : F === O._f.ref) return;
              xe(r, S, {
                _f: {
                  ...O._f,
                  ...(X
                    ? {
                        refs: [
                          ...ce.filter(ya),
                          F,
                          ...(Array.isArray(L(s, S)) ? [{}] : []),
                        ],
                        ref: { type: F.type, name: S },
                      }
                    : { ref: F }),
                },
              }),
                _(S, !1, void 0, F);
            } else
              (O = L(r, S, {})),
                O._f && (O._f.mount = !1),
                (t.shouldUnregister || R.shouldUnregister) &&
                  !(pp(a.array, S) && o.action) &&
                  a.unMount.add(S);
          },
        }
      );
    },
    Me = () => t.shouldFocusError && Is(r, ie, a.mount),
    $e = (S) => {
      Rt(S) &&
        (d.state.next({ disabled: S }),
        Is(
          r,
          (R, O) => {
            const U = L(r, O);
            U &&
              ((R.disabled = U._f.disabled || S),
              Array.isArray(U._f.refs) &&
                U._f.refs.forEach((I) => {
                  I.disabled = U._f.disabled || S;
                }));
          },
          0,
          !1
        ));
    },
    _e = (S, R) => async (O) => {
      let U;
      O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
      let I = ut(i);
      if (a.disabled.size) for (const F of a.disabled) xe(I, F, void 0);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: F, values: X } = await A();
        (n.errors = F), (I = X);
      } else await M(r);
      if ((We(n.errors, "root"), ft(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await S(I, O);
        } catch (F) {
          U = F;
        }
      } else R && (await R({ ...n.errors }, O)), Me(), setTimeout(Me);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: ft(n.errors) && !U,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        U)
      )
        throw U;
    },
    Z = (S, R = {}) => {
      L(r, S) &&
        (Le(R.defaultValue)
          ? G(S, ut(L(s, S)))
          : (G(S, R.defaultValue), xe(s, S, ut(R.defaultValue))),
        R.keepTouched || We(n.touchedFields, S),
        R.keepDirty ||
          (We(n.dirtyFields, S),
          (n.isDirty = R.defaultValue ? N(S, ut(L(s, S))) : N())),
        R.keepError || (We(n.errors, S), u.isValid && y()),
        d.state.next({ ...n }));
    },
    he = (S, R = {}) => {
      const O = S ? ut(S) : s,
        U = ut(O),
        I = ft(S),
        F = I ? s : U;
      if ((R.keepDefaultValues || (s = O), !R.keepValues)) {
        if (R.keepDirtyValues) {
          const X = new Set([...a.mount, ...Object.keys(Cs(s, i))]);
          for (const ce of Array.from(X))
            L(n.dirtyFields, ce) ? xe(F, ce, L(i, ce)) : G(ce, L(F, ce));
        } else {
          if (nl && Le(S))
            for (const X of a.mount) {
              const ce = L(r, X);
              if (ce && ce._f) {
                const ze = Array.isArray(ce._f.refs)
                  ? ce._f.refs[0]
                  : ce._f.ref;
                if (lo(ze)) {
                  const Fe = ze.closest("form");
                  if (Fe) {
                    Fe.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = t.shouldUnregister ? (R.keepDefaultValues ? ut(s) : {}) : ut(F)),
          d.array.next({ values: { ...F } }),
          d.values.next({ values: { ...F } });
      }
      (a = {
        mount: R.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !u.isValid || !!R.keepIsValid || !!R.keepDirtyValues),
        (o.watch = !!t.shouldUnregister),
        d.state.next({
          submitCount: R.keepSubmitCount ? n.submitCount : 0,
          isDirty: I
            ? !1
            : R.keepDirty
            ? n.isDirty
            : !!(R.keepDefaultValues && !Pn(S, s)),
          isSubmitted: R.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: I
            ? {}
            : R.keepDirtyValues
            ? R.keepDefaultValues && i
              ? Cs(s, i)
              : n.dirtyFields
            : R.keepDefaultValues && S
            ? Cs(s, S)
            : R.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: R.keepTouched ? n.touchedFields : {},
          errors: R.keepErrors ? n.errors : {},
          isSubmitSuccessful: R.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Se = (S, R) => he(Jt(S) ? S(i) : S, R);
  return {
    control: {
      register: be,
      unregister: it,
      getFieldState: Xe,
      handleSubmit: _e,
      setError: Ye,
      _executeSchema: A,
      _getWatch: B,
      _getDirty: N,
      _updateValid: y,
      _removeUnmounted: V,
      _updateFieldArray: x,
      _updateDisabledField: de,
      _getFieldArray: W,
      _reset: he,
      _resetDefaultValues: () =>
        Jt(t.defaultValues) &&
        t.defaultValues().then((S) => {
          Se(S, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (S) => {
        n = { ...n, ...S };
      },
      _disableForm: $e,
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
      set _state(S) {
        o = S;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(S) {
        a = S;
      },
      get _formState() {
        return n;
      },
      set _formState(S) {
        n = S;
      },
      get _options() {
        return t;
      },
      set _options(S) {
        t = { ...t, ...S };
      },
    },
    trigger: ye,
    register: be,
    handleSubmit: _e,
    watch: Pt,
    setValue: G,
    getValues: ve,
    reset: Se,
    resetField: Z,
    clearErrors: pt,
    unregister: it,
    setError: Ye,
    setFocus: (S, R = {}) => {
      const O = L(r, S),
        U = O && O._f;
      if (U) {
        const I = U.refs ? U.refs[0] : U.ref;
        I.focus && (I.focus(), R.shouldSelect && Jt(I.select) && I.select());
      }
    },
    getFieldState: Xe,
  };
}
function Rp(e = {}) {
  const t = fe.useRef(void 0),
    n = fe.useRef(void 0),
    [r, s] = fe.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Jt(e.defaultValues),
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
      defaultValues: Jt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...Cw(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    sl({
      subject: i._subjects.state,
      next: (o) => {
        vp(o, i._proxyFormState, i._updateFormState, !0) &&
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
      e.values && !Pn(e.values, n.current)
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
    (t.current.formState = yp(r, i)),
    t.current
  );
}
const Qu = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = L(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  Pp = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref
        ? Qu(r.ref, n, e)
        : r.refs && r.refs.forEach((s) => Qu(s, n, e));
    }
  },
  Ew = (e, t) => {
    t.shouldUseNativeValidation && Pp(e, t);
    const n = {};
    for (const r in e) {
      const s = L(t.fields, r),
        i = Object.assign(e[r] || {}, { ref: s && s.ref });
      if (Tw(t.names || Object.keys(e), r)) {
        const o = Object.assign({}, L(n, r));
        xe(o, "root", i), xe(n, r, o);
      } else xe(n, r, i);
    }
    return n;
  },
  Tw = (e, t) => e.some((n) => n.startsWith(t + "."));
var Aw = function (e, t) {
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
        n[o] = wp(o, t, n, s, l ? [].concat(l, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  kp = function (e, t, n) {
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
                    i.shouldUseNativeValidation && Pp({}, i),
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
                  errors: Ew(
                    Aw(
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
  ge;
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
})(ge || (ge = {}));
var Ka;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Ka || (Ka = {}));
const z = ge.arrayToEnum([
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
  mn = (e) => {
    switch (typeof e) {
      case "undefined":
        return z.undefined;
      case "string":
        return z.string;
      case "number":
        return isNaN(e) ? z.nan : z.number;
      case "boolean":
        return z.boolean;
      case "function":
        return z.function;
      case "bigint":
        return z.bigint;
      case "symbol":
        return z.symbol;
      case "object":
        return Array.isArray(e)
          ? z.array
          : e === null
          ? z.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? z.promise
          : typeof Map < "u" && e instanceof Map
          ? z.map
          : typeof Set < "u" && e instanceof Set
          ? z.set
          : typeof Date < "u" && e instanceof Date
          ? z.date
          : z.object;
      default:
        return z.unknown;
    }
  },
  D = ge.arrayToEnum([
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
  Rw = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class yt extends Error {
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
    if (!(t instanceof yt)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ge.jsonStringifyReplacer, 2);
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
yt.create = (e) => new yt(e);
const ss = (e, t) => {
  let n;
  switch (e.code) {
    case D.invalid_type:
      e.received === z.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case D.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        ge.jsonStringifyReplacer
      )}`;
      break;
    case D.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ge.joinValues(e.keys, ", ")}`;
      break;
    case D.invalid_union:
      n = "Invalid input";
      break;
    case D.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ge.joinValues(e.options)}`;
      break;
    case D.invalid_enum_value:
      n = `Invalid enum value. Expected ${ge.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case D.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case D.invalid_return_type:
      n = "Invalid function return type";
      break;
    case D.invalid_date:
      n = "Invalid date";
      break;
    case D.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : ge.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case D.too_small:
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
    case D.too_big:
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
    case D.custom:
      n = "Invalid input";
      break;
    case D.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case D.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case D.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), ge.assertNever(e);
  }
  return { message: n };
};
let Op = ss;
function Pw(e) {
  Op = e;
}
function ho() {
  return Op;
}
const po = (e) => {
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
  kw = [];
function $(e, t) {
  const n = ho(),
    r = po({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === ss ? void 0 : ss,
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
  Dr = (e) => ({ status: "dirty", value: e }),
  lt = (e) => ({ status: "valid", value: e }),
  Qa = (e) => e.status === "aborted",
  Xa = (e) => e.status === "dirty",
  yr = (e) => e.status === "valid",
  qs = (e) => typeof Promise < "u" && e instanceof Promise;
function mo(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function jp(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var K;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(K || (K = {}));
var Rs, Ps;
class on {
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
const Xu = (e, t) => {
  if (yr(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new yt(e.common.issues);
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
    return mn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: mn(t.data),
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
        parsedType: mn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (qs(n)) throw new Error("Synchronous parse encountered promise.");
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
        parsedType: mn(t),
      },
      i = this._parseSync({ data: t, path: s.path, parent: s });
    return Xu(s, i);
  }
  "~validate"(t) {
    var n, r;
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: mn(t),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: t, path: [], parent: s });
        return yr(i) ? { value: i.value } : { issues: s.common.issues };
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
      yr(i) ? { value: i.value } : { issues: s.common.issues }
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
        parsedType: mn(t),
      },
      s = this._parse({ data: t, path: r.path, parent: r }),
      i = await (qs(s) ? s : Promise.resolve(s));
    return Xu(r, i);
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
        a = () => i.addIssue({ code: D.custom, ...r(s) });
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
    return new Bt({
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
    return tn.create(this, this._def);
  }
  nullable() {
    return Un.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return It.create(this);
  }
  promise() {
    return os.create(this, this._def);
  }
  or(t) {
    return Qs.create([this, t], this._def);
  }
  and(t) {
    return Xs.create(this, t, this._def);
  }
  transform(t) {
    return new Bt({
      ...ae(this._def),
      schema: this,
      typeName: te.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ni({
      ...ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: te.ZodDefault,
    });
  }
  brand() {
    return new al({ typeName: te.ZodBranded, type: this, ...ae(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ri({
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
    return Si.create(this, t);
  }
  readonly() {
    return si.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ow = /^c[^\s-]{8,}$/i,
  jw = /^[0-9a-z]+$/,
  Nw = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Dw =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Mw = /^[a-z0-9_-]{21}$/i,
  Fw = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Iw =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Lw =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Vw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ba;
const Bw =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Uw =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  $w =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  zw =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Ww = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Hw = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Np =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  qw = new RegExp(`^${Np}$`);
function Dp(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function Gw(e) {
  return new RegExp(`^${Dp(e)}$`);
}
function Mp(e) {
  let t = `${Np}T${Dp(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function Zw(e, t) {
  return !!(
    ((t === "v4" || !t) && Bw.test(e)) ||
    ((t === "v6" || !t) && $w.test(e))
  );
}
function Kw(e, t) {
  if (!Fw.test(e)) return !1;
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
function Qw(e, t) {
  return !!(
    ((t === "v4" || !t) && Uw.test(e)) ||
    ((t === "v6" || !t) && zw.test(e))
  );
}
class Ft extends ue {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== z.string)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        $(i, {
          code: D.invalid_type,
          expected: z.string,
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
          $(s, {
            code: D.too_small,
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
          $(s, {
            code: D.too_big,
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
            ? $(s, {
                code: D.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : a &&
              $(s, {
                code: D.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          r.dirty());
      } else if (i.kind === "email")
        Lw.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          $(s, {
            validation: "email",
            code: D.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "emoji")
        ba || (ba = new RegExp(Vw, "u")),
          ba.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "emoji",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty());
      else if (i.kind === "uuid")
        Dw.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          $(s, {
            validation: "uuid",
            code: D.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "nanoid")
        Mw.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          $(s, {
            validation: "nanoid",
            code: D.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid")
        Ow.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          $(s, {
            validation: "cuid",
            code: D.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid2")
        jw.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          $(s, {
            validation: "cuid2",
            code: D.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "ulid")
        Nw.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          $(s, {
            validation: "ulid",
            code: D.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "url",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              $(s, {
                validation: "regex",
                code: D.invalid_string,
                message: i.message,
              }),
              r.dirty()))
          : i.kind === "trim"
          ? (t.data = t.data.trim())
          : i.kind === "includes"
          ? t.data.includes(i.value, i.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              code: D.invalid_string,
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
            $(s, {
              code: D.invalid_string,
              validation: { startsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "endsWith"
          ? t.data.endsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              code: D.invalid_string,
              validation: { endsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "datetime"
          ? Mp(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              code: D.invalid_string,
              validation: "datetime",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "date"
          ? qw.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              code: D.invalid_string,
              validation: "date",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "time"
          ? Gw(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              code: D.invalid_string,
              validation: "time",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "duration"
          ? Iw.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "duration",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "ip"
          ? Zw(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "ip",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "jwt"
          ? Kw(t.data, i.alg) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "jwt",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "cidr"
          ? Qw(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "cidr",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64"
          ? Ww.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "base64",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64url"
          ? Hw.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            $(s, {
              validation: "base64url",
              code: D.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : ge.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: D.invalid_string,
      ...K.errToObj(r),
    });
  }
  _addCheck(t) {
    return new Ft({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...K.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...K.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...K.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...K.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...K.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...K.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...K.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...K.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...K.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...K.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...K.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...K.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...K.errToObj(t) });
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
          ...K.errToObj(t == null ? void 0 : t.message),
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
          ...K.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...K.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...K.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...K.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...K.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...K.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...K.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...K.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...K.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, K.errToObj(t));
  }
  trim() {
    return new Ft({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Ft({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Ft({
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
Ft.create = (e) => {
  var t;
  return new Ft({
    checks: [],
    typeName: te.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ae(e),
  });
};
function Xw(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    i = parseInt(e.toFixed(s).replace(".", "")),
    o = parseInt(t.toFixed(s).replace(".", ""));
  return (i % o) / Math.pow(10, s);
}
class Ln extends ue {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== z.number)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        $(i, {
          code: D.invalid_type,
          expected: z.number,
          received: i.parsedType,
        }),
        re
      );
    }
    let r;
    const s = new st();
    for (const i of this._def.checks)
      i.kind === "int"
        ? ge.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          $(r, {
            code: D.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          $(r, {
            code: D.too_small,
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
          $(r, {
            code: D.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? Xw(t.data, i.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          $(r, {
            code: D.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          $(r, { code: D.not_finite, message: i.message }),
          s.dirty())
        : ge.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, K.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Ln({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: K.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Ln({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: K.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: K.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: K.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: K.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: K.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: K.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: K.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: K.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: K.toString(t),
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
        t.kind === "int" || (t.kind === "multipleOf" && ge.isInteger(t.value))
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
Ln.create = (e) =>
  new Ln({
    checks: [],
    typeName: te.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ae(e),
  });
class Vn extends ue {
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
    if (this._getType(t) !== z.bigint) return this._getInvalidInput(t);
    let r;
    const s = new st();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          $(r, {
            code: D.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          $(r, {
            code: D.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? t.data % i.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          $(r, {
            code: D.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : ge.assertNever(i);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return (
      $(n, {
        code: D.invalid_type,
        expected: z.bigint,
        received: n.parsedType,
      }),
      re
    );
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, K.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Vn({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: K.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Vn({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: K.toString(n),
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
Vn.create = (e) => {
  var t;
  return new Vn({
    checks: [],
    typeName: te.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ae(e),
  });
};
class Gs extends ue {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== z.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        $(r, {
          code: D.invalid_type,
          expected: z.boolean,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
Gs.create = (e) =>
  new Gs({
    typeName: te.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ae(e),
  });
class vr extends ue {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== z.date)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        $(i, {
          code: D.invalid_type,
          expected: z.date,
          received: i.parsedType,
        }),
        re
      );
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return $(i, { code: D.invalid_date }), re;
    }
    const r = new st();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? t.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          $(s, {
            code: D.too_small,
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
          $(s, {
            code: D.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: "date",
          }),
          r.dirty())
        : ge.assertNever(i);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new vr({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: K.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: K.toString(n),
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
vr.create = (e) =>
  new vr({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: te.ZodDate,
    ...ae(e),
  });
class go extends ue {
  _parse(t) {
    if (this._getType(t) !== z.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        $(r, {
          code: D.invalid_type,
          expected: z.symbol,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
go.create = (e) => new go({ typeName: te.ZodSymbol, ...ae(e) });
class Zs extends ue {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        $(r, {
          code: D.invalid_type,
          expected: z.undefined,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
Zs.create = (e) => new Zs({ typeName: te.ZodUndefined, ...ae(e) });
class Ks extends ue {
  _parse(t) {
    if (this._getType(t) !== z.null) {
      const r = this._getOrReturnCtx(t);
      return (
        $(r, {
          code: D.invalid_type,
          expected: z.null,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
Ks.create = (e) => new Ks({ typeName: te.ZodNull, ...ae(e) });
class is extends ue {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return lt(t.data);
  }
}
is.create = (e) => new is({ typeName: te.ZodAny, ...ae(e) });
class dr extends ue {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return lt(t.data);
  }
}
dr.create = (e) => new dr({ typeName: te.ZodUnknown, ...ae(e) });
class bn extends ue {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      $(n, { code: D.invalid_type, expected: z.never, received: n.parsedType }),
      re
    );
  }
}
bn.create = (e) => new bn({ typeName: te.ZodNever, ...ae(e) });
class yo extends ue {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        $(r, {
          code: D.invalid_type,
          expected: z.void,
          received: r.parsedType,
        }),
        re
      );
    }
    return lt(t.data);
  }
}
yo.create = (e) => new yo({ typeName: te.ZodVoid, ...ae(e) });
class It extends ue {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      s = this._def;
    if (n.parsedType !== z.array)
      return (
        $(n, {
          code: D.invalid_type,
          expected: z.array,
          received: n.parsedType,
        }),
        re
      );
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value,
        a = n.data.length < s.exactLength.value;
      (o || a) &&
        ($(n, {
          code: o ? D.too_big : D.too_small,
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
        ($(n, {
          code: D.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        r.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        ($(n, {
          code: D.too_big,
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
        [...n.data].map((o, a) => s.type._parseAsync(new on(n, o, n.path, a)))
      ).then((o) => st.mergeArray(r, o));
    const i = [...n.data].map((o, a) =>
      s.type._parseSync(new on(n, o, n.path, a))
    );
    return st.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new It({
      ...this._def,
      minLength: { value: t, message: K.toString(n) },
    });
  }
  max(t, n) {
    return new It({
      ...this._def,
      maxLength: { value: t, message: K.toString(n) },
    });
  }
  length(t, n) {
    return new It({
      ...this._def,
      exactLength: { value: t, message: K.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
It.create = (e, t) =>
  new It({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: te.ZodArray,
    ...ae(t),
  });
function Nr(e) {
  if (e instanceof Pe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = tn.create(Nr(r));
    }
    return new Pe({ ...e._def, shape: () => t });
  } else
    return e instanceof It
      ? new It({ ...e._def, type: Nr(e.element) })
      : e instanceof tn
      ? tn.create(Nr(e.unwrap()))
      : e instanceof Un
      ? Un.create(Nr(e.unwrap()))
      : e instanceof an
      ? an.create(e.items.map((t) => Nr(t)))
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
      n = ge.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== z.object) {
      const l = this._getOrReturnCtx(t);
      return (
        $(l, {
          code: D.invalid_type,
          expected: z.object,
          received: l.parsedType,
        }),
        re
      );
    }
    const { status: r, ctx: s } = this._processInputParams(t),
      { shape: i, keys: o } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof bn && this._def.unknownKeys === "strip")
    )
      for (const l in s.data) o.includes(l) || a.push(l);
    const c = [];
    for (const l of o) {
      const u = i[l],
        d = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new on(s, d, s.path, l)),
        alwaysSet: l in s.data,
      });
    }
    if (this._def.catchall instanceof bn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of a)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] },
          });
      else if (l === "strict")
        a.length > 0 &&
          ($(s, { code: D.unrecognized_keys, keys: a }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of a) {
        const d = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(new on(s, d, s.path, u)),
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
      K.errToObj,
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
                        (a = K.errToObj(t).message) !== null && a !== void 0
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
      ge.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      ge.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Nr(this);
  }
  partial(t) {
    const n = {};
    return (
      ge.objectKeys(this.shape).forEach((r) => {
        const s = this.shape[r];
        t && !t[r] ? (n[r] = s) : (n[r] = s.optional());
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      ge.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let i = this.shape[r];
          for (; i instanceof tn; ) i = i._def.innerType;
          n[r] = i;
        }
      }),
      new Pe({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return Fp(ge.objectKeys(this.shape));
  }
}
Pe.create = (e, t) =>
  new Pe({
    shape: () => e,
    unknownKeys: "strip",
    catchall: bn.create(),
    typeName: te.ZodObject,
    ...ae(t),
  });
Pe.strictCreate = (e, t) =>
  new Pe({
    shape: () => e,
    unknownKeys: "strict",
    catchall: bn.create(),
    typeName: te.ZodObject,
    ...ae(t),
  });
Pe.lazycreate = (e, t) =>
  new Pe({
    shape: e,
    unknownKeys: "strip",
    catchall: bn.create(),
    typeName: te.ZodObject,
    ...ae(t),
  });
class Qs extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function s(i) {
      for (const a of i) if (a.result.status === "valid") return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new yt(a.ctx.common.issues));
      return $(n, { code: D.invalid_union, unionErrors: o }), re;
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
      const a = o.map((c) => new yt(c));
      return $(n, { code: D.invalid_union, unionErrors: a }), re;
    }
  }
  get options() {
    return this._def.options;
  }
}
Qs.create = (e, t) => new Qs({ options: e, typeName: te.ZodUnion, ...ae(t) });
const hn = (e) =>
  e instanceof Js
    ? hn(e.schema)
    : e instanceof Bt
    ? hn(e.innerType())
    : e instanceof ei
    ? [e.value]
    : e instanceof Bn
    ? e.options
    : e instanceof ti
    ? ge.objectValues(e.enum)
    : e instanceof ni
    ? hn(e._def.innerType)
    : e instanceof Zs
    ? [void 0]
    : e instanceof Ks
    ? [null]
    : e instanceof tn
    ? [void 0, ...hn(e.unwrap())]
    : e instanceof Un
    ? [null, ...hn(e.unwrap())]
    : e instanceof al || e instanceof si
    ? hn(e.unwrap())
    : e instanceof ri
    ? hn(e._def.innerType)
    : [];
class Vo extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.object)
      return (
        $(n, {
          code: D.invalid_type,
          expected: z.object,
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
      : ($(n, {
          code: D.invalid_union_discriminator,
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
      const o = hn(i.shape[t]);
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
    return new Vo({
      typeName: te.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...ae(r),
    });
  }
}
function Ya(e, t) {
  const n = mn(e),
    r = mn(t);
  if (e === t) return { valid: !0, data: e };
  if (n === z.object && r === z.object) {
    const s = ge.objectKeys(t),
      i = ge.objectKeys(e).filter((a) => s.indexOf(a) !== -1),
      o = { ...e, ...t };
    for (const a of i) {
      const c = Ya(e[a], t[a]);
      if (!c.valid) return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (n === z.array && r === z.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i],
        a = t[i],
        c = Ya(o, a);
      if (!c.valid) return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return n === z.date && r === z.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Xs extends ue {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = (i, o) => {
        if (Qa(i) || Qa(o)) return re;
        const a = Ya(i.value, o.value);
        return a.valid
          ? ((Xa(i) || Xa(o)) && n.dirty(), { status: n.value, value: a.data })
          : ($(r, { code: D.invalid_intersection_types }), re);
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
Xs.create = (e, t, n) =>
  new Xs({ left: e, right: t, typeName: te.ZodIntersection, ...ae(n) });
class an extends ue {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.array)
      return (
        $(r, {
          code: D.invalid_type,
          expected: z.array,
          received: r.parsedType,
        }),
        re
      );
    if (r.data.length < this._def.items.length)
      return (
        $(r, {
          code: D.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        re
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      ($(r, {
        code: D.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...r.data]
      .map((o, a) => {
        const c = this._def.items[a] || this._def.rest;
        return c ? c._parse(new on(r, o, r.path, a)) : null;
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
    return new an({ ...this._def, rest: t });
  }
}
an.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new an({ items: e, typeName: te.ZodTuple, rest: null, ...ae(t) });
};
class Ys extends ue {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.object)
      return (
        $(r, {
          code: D.invalid_type,
          expected: z.object,
          received: r.parsedType,
        }),
        re
      );
    const s = [],
      i = this._def.keyType,
      o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new on(r, a, r.path, a)),
        value: o._parse(new on(r, r.data[a], r.path, a)),
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
      ? new Ys({ keyType: t, valueType: n, typeName: te.ZodRecord, ...ae(r) })
      : new Ys({
          keyType: Ft.create(),
          valueType: t,
          typeName: te.ZodRecord,
          ...ae(n),
        });
  }
}
class vo extends ue {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.map)
      return (
        $(r, { code: D.invalid_type, expected: z.map, received: r.parsedType }),
        re
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...r.data.entries()].map(([a, c], l) => ({
        key: s._parse(new on(r, a, r.path, [l, "key"])),
        value: i._parse(new on(r, c, r.path, [l, "value"])),
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
vo.create = (e, t, n) =>
  new vo({ valueType: t, keyType: e, typeName: te.ZodMap, ...ae(n) });
class br extends ue {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.set)
      return (
        $(r, { code: D.invalid_type, expected: z.set, received: r.parsedType }),
        re
      );
    const s = this._def;
    s.minSize !== null &&
      r.data.size < s.minSize.value &&
      ($(r, {
        code: D.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        r.data.size > s.maxSize.value &&
        ($(r, {
          code: D.too_big,
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
      i._parse(new on(r, c, r.path, l))
    );
    return r.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(t, n) {
    return new br({
      ...this._def,
      minSize: { value: t, message: K.toString(n) },
    });
  }
  max(t, n) {
    return new br({
      ...this._def,
      maxSize: { value: t, message: K.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
br.create = (e, t) =>
  new br({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: te.ZodSet,
    ...ae(t),
  });
class $r extends ue {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.function)
      return (
        $(n, {
          code: D.invalid_type,
          expected: z.function,
          received: n.parsedType,
        }),
        re
      );
    function r(a, c) {
      return po({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ho(),
          ss,
        ].filter((l) => !!l),
        issueData: { code: D.invalid_arguments, argumentsError: c },
      });
    }
    function s(a, c) {
      return po({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ho(),
          ss,
        ].filter((l) => !!l),
        issueData: { code: D.invalid_return_type, returnTypeError: c },
      });
    }
    const i = { errorMap: n.common.contextualErrorMap },
      o = n.data;
    if (this._def.returns instanceof os) {
      const a = this;
      return lt(async function (...c) {
        const l = new yt([]),
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
        if (!l.success) throw new yt([r(c, l.error)]);
        const u = Reflect.apply(o, this, l.data),
          d = a._def.returns.safeParse(u, i);
        if (!d.success) throw new yt([s(u, d.error)]);
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
    return new $r({ ...this._def, args: an.create(t).rest(dr.create()) });
  }
  returns(t) {
    return new $r({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new $r({
      args: t || an.create([]).rest(dr.create()),
      returns: n || dr.create(),
      typeName: te.ZodFunction,
      ...ae(r),
    });
  }
}
class Js extends ue {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Js.create = (e, t) => new Js({ getter: e, typeName: te.ZodLazy, ...ae(t) });
class ei extends ue {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        $(n, {
          received: n.data,
          code: D.invalid_literal,
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
ei.create = (e, t) => new ei({ value: e, typeName: te.ZodLiteral, ...ae(t) });
function Fp(e, t) {
  return new Bn({ values: e, typeName: te.ZodEnum, ...ae(t) });
}
class Bn extends ue {
  constructor() {
    super(...arguments), Rs.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        $(n, {
          expected: ge.joinValues(r),
          received: n.parsedType,
          code: D.invalid_type,
        }),
        re
      );
    }
    if (
      (mo(this, Rs) || jp(this, Rs, new Set(this._def.values)),
      !mo(this, Rs).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        $(n, { received: n.data, code: D.invalid_enum_value, options: r }), re
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
    return Bn.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return Bn.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
Rs = new WeakMap();
Bn.create = Fp;
class ti extends ue {
  constructor() {
    super(...arguments), Ps.set(this, void 0);
  }
  _parse(t) {
    const n = ge.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== z.string && r.parsedType !== z.number) {
      const s = ge.objectValues(n);
      return (
        $(r, {
          expected: ge.joinValues(s),
          received: r.parsedType,
          code: D.invalid_type,
        }),
        re
      );
    }
    if (
      (mo(this, Ps) ||
        jp(this, Ps, new Set(ge.getValidEnumValues(this._def.values))),
      !mo(this, Ps).has(t.data))
    ) {
      const s = ge.objectValues(n);
      return (
        $(r, { received: r.data, code: D.invalid_enum_value, options: s }), re
      );
    }
    return lt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ps = new WeakMap();
ti.create = (e, t) =>
  new ti({ values: e, typeName: te.ZodNativeEnum, ...ae(t) });
class os extends ue {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.promise && n.common.async === !1)
      return (
        $(n, {
          code: D.invalid_type,
          expected: z.promise,
          received: n.parsedType,
        }),
        re
      );
    const r = n.parsedType === z.promise ? n.data : Promise.resolve(n.data);
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
os.create = (e, t) => new os({ type: e, typeName: te.ZodPromise, ...ae(t) });
class Bt extends ue {
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
          $(r, o), o.fatal ? n.abort() : n.dirty();
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
            ? Dr(c.value)
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
          ? Dr(a.value)
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
        if (!yr(o)) return o;
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
            yr(o)
              ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : o
          );
    ge.assertNever(s);
  }
}
Bt.create = (e, t, n) =>
  new Bt({ schema: e, typeName: te.ZodEffects, effect: t, ...ae(n) });
Bt.createWithPreprocess = (e, t, n) =>
  new Bt({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: te.ZodEffects,
    ...ae(n),
  });
class tn extends ue {
  _parse(t) {
    return this._getType(t) === z.undefined
      ? lt(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
tn.create = (e, t) =>
  new tn({ innerType: e, typeName: te.ZodOptional, ...ae(t) });
class Un extends ue {
  _parse(t) {
    return this._getType(t) === z.null
      ? lt(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Un.create = (e, t) =>
  new Un({ innerType: e, typeName: te.ZodNullable, ...ae(t) });
class ni extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === z.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ni.create = (e, t) =>
  new ni({
    innerType: e,
    typeName: te.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...ae(t),
  });
class ri extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return qs(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new yt(r.common.issues);
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
                    return new yt(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ri.create = (e, t) =>
  new ri({
    innerType: e,
    typeName: te.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...ae(t),
  });
class bo extends ue {
  _parse(t) {
    if (this._getType(t) !== z.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        $(r, { code: D.invalid_type, expected: z.nan, received: r.parsedType }),
        re
      );
    }
    return { status: "valid", value: t.data };
  }
}
bo.create = (e) => new bo({ typeName: te.ZodNaN, ...ae(e) });
const Yw = Symbol("zod_brand");
class al extends ue {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class Si extends ue {
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
          ? (n.dirty(), Dr(i.value))
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
    return new Si({ in: t, out: n, typeName: te.ZodPipeline });
  }
}
class si extends ue {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (s) => (yr(s) && (s.value = Object.freeze(s.value)), s);
    return qs(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
si.create = (e, t) =>
  new si({ innerType: e, typeName: te.ZodReadonly, ...ae(t) });
function Ip(e, t = {}, n) {
  return e
    ? is.create().superRefine((r, s) => {
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
    : is.create();
}
const Jw = { object: Pe.lazycreate };
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
const e0 = (e, t = { message: `Input not instance of ${e.name}` }) =>
    Ip((n) => n instanceof e, t),
  Lp = Ft.create,
  Vp = Ln.create,
  t0 = bo.create,
  n0 = Vn.create,
  Bp = Gs.create,
  r0 = vr.create,
  s0 = go.create,
  i0 = Zs.create,
  o0 = Ks.create,
  a0 = is.create,
  c0 = dr.create,
  l0 = bn.create,
  u0 = yo.create,
  d0 = It.create,
  f0 = Pe.create,
  h0 = Pe.strictCreate,
  p0 = Qs.create,
  m0 = Vo.create,
  g0 = Xs.create,
  y0 = an.create,
  v0 = Ys.create,
  b0 = vo.create,
  x0 = br.create,
  w0 = $r.create,
  _0 = Js.create,
  S0 = ei.create,
  C0 = Bn.create,
  E0 = ti.create,
  T0 = os.create,
  Yu = Bt.create,
  A0 = tn.create,
  R0 = Un.create,
  P0 = Bt.createWithPreprocess,
  k0 = Si.create,
  O0 = () => Lp().optional(),
  j0 = () => Vp().optional(),
  N0 = () => Bp().optional(),
  D0 = {
    string: (e) => Ft.create({ ...e, coerce: !0 }),
    number: (e) => Ln.create({ ...e, coerce: !0 }),
    boolean: (e) => Gs.create({ ...e, coerce: !0 }),
    bigint: (e) => Vn.create({ ...e, coerce: !0 }),
    date: (e) => vr.create({ ...e, coerce: !0 }),
  },
  M0 = re;
var Ee = Object.freeze({
  __proto__: null,
  defaultErrorMap: ss,
  setErrorMap: Pw,
  getErrorMap: ho,
  makeIssue: po,
  EMPTY_PATH: kw,
  addIssueToContext: $,
  ParseStatus: st,
  INVALID: re,
  DIRTY: Dr,
  OK: lt,
  isAborted: Qa,
  isDirty: Xa,
  isValid: yr,
  isAsync: qs,
  get util() {
    return ge;
  },
  get objectUtil() {
    return Ka;
  },
  ZodParsedType: z,
  getParsedType: mn,
  ZodType: ue,
  datetimeRegex: Mp,
  ZodString: Ft,
  ZodNumber: Ln,
  ZodBigInt: Vn,
  ZodBoolean: Gs,
  ZodDate: vr,
  ZodSymbol: go,
  ZodUndefined: Zs,
  ZodNull: Ks,
  ZodAny: is,
  ZodUnknown: dr,
  ZodNever: bn,
  ZodVoid: yo,
  ZodArray: It,
  ZodObject: Pe,
  ZodUnion: Qs,
  ZodDiscriminatedUnion: Vo,
  ZodIntersection: Xs,
  ZodTuple: an,
  ZodRecord: Ys,
  ZodMap: vo,
  ZodSet: br,
  ZodFunction: $r,
  ZodLazy: Js,
  ZodLiteral: ei,
  ZodEnum: Bn,
  ZodNativeEnum: ti,
  ZodPromise: os,
  ZodEffects: Bt,
  ZodTransformer: Bt,
  ZodOptional: tn,
  ZodNullable: Un,
  ZodDefault: ni,
  ZodCatch: ri,
  ZodNaN: bo,
  BRAND: Yw,
  ZodBranded: al,
  ZodPipeline: Si,
  ZodReadonly: si,
  custom: Ip,
  Schema: ue,
  ZodSchema: ue,
  late: Jw,
  get ZodFirstPartyTypeKind() {
    return te;
  },
  coerce: D0,
  any: a0,
  array: d0,
  bigint: n0,
  boolean: Bp,
  date: r0,
  discriminatedUnion: m0,
  effect: Yu,
  enum: C0,
  function: w0,
  instanceof: e0,
  intersection: g0,
  lazy: _0,
  literal: S0,
  map: b0,
  nan: t0,
  nativeEnum: E0,
  never: l0,
  null: o0,
  nullable: R0,
  number: Vp,
  object: f0,
  oboolean: N0,
  onumber: j0,
  optional: A0,
  ostring: O0,
  pipeline: k0,
  preprocess: P0,
  promise: T0,
  record: v0,
  set: x0,
  strictObject: h0,
  string: Lp,
  symbol: s0,
  transformer: Yu,
  tuple: y0,
  undefined: i0,
  union: p0,
  unknown: c0,
  void: u0,
  NEVER: M0,
  ZodIssueCode: D,
  quotelessJson: Rw,
  ZodError: yt,
});
const Ju = (e, t) => (Ge((r) => r.lang) === "ru" ? e : t),
  F0 = Ee.object({ email: Ee.string().email() }),
  I0 = () => {
    var n, r;
    const e = Rp({ resolver: kp(F0), defaultValues: { email: "" } });
    async function t(s) {
      console.log(s);
    }
    return p.jsx("form", {
      onSubmit: e.handleSubmit(t),
      className: "py-8 bg-bg_surface_container",
      children: p.jsxs(wt, {
        className: "flex items-center justify-between",
        children: [
          p.jsx("h2", {
            className: "h2",
            children: Ju("Подпишитесь на новости:", "Subscribe to the news:"),
          }),
          p.jsxs("div", {
            className: "relative",
            children: [
              p.jsx("input", {
                ...e.register("email"),
                placeholder: "E-mail",
                className: "input xl:w-[392px] w-[320px]",
              }),
              p.jsx("span", {
                className: "text-error absolute -bottom-6 text-sm left-0",
                children:
                  (r = (n = e.formState.errors) == null ? void 0 : n.email) ==
                  null
                    ? void 0
                    : r.message,
              }),
            ],
          }),
          p.jsx(Qe, {
            className: "xl:w-[288px] w-[220px]",
            children: Ju("Подписаться", "Subscribe"),
          }),
        ],
      }),
    });
  },
  S1 = () => {
    const e = Ge((t) => t.lang);
    return p.jsxs("footer", {
      children: [
        p.jsx(I0, {}),
        p.jsx("div", {
          className: "py-5 bg-surface_high",
          children: p.jsxs(wt, {
            className: "flex flex-col gap-6",
            children: [
              p.jsxs("div", {
                className:
                  "flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center",
                children: [
                  p.jsx(Sh, {}),
                  p.jsxs("div", {
                    className: "flex items-center gap-6",
                    children: [
                      p.jsx(Be, {
                        target: "_blank",
                        to: "https://www.facebook.com/profile.php?id=61567254728028",
                        children: p.jsx(cb, { className: "text-on_surface" }),
                      }),
                      p.jsx(Be, {
                        target: "_blank",
                        to: "https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq",
                        children: p.jsx("img", { src: "/inst.svg" }),
                      }),
                      p.jsx(Be, {
                        target: "_blank",
                        to: "https://www.linkedin.com/company/turkmen-expo",
                        children: p.jsx("img", { src: "/in.svg" }),
                      }),
                      p.jsx(Be, {
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
                  e === nt.RU
                    ? "©2025 Все права защищены"
                    : "All rights reserved",
              }),
            ],
          }),
        }),
      ],
    });
  };
var L0 = "DismissableLayer",
  Ja = "dismissableLayer.update",
  V0 = "dismissableLayer.pointerDownOutside",
  B0 = "dismissableLayer.focusOutside",
  ed,
  Up = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  $p = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = e,
      l = v.useContext(Up),
      [u, d] = v.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = v.useState({}),
      g = qe(t, (T) => d(T)),
      h = Array.from(l.layers),
      [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = h.indexOf(y),
      x = u ? h.indexOf(u) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      C = x >= b,
      _ = z0((T) => {
        const A = T.target,
          j = [...l.branches].some((M) => M.contains(A));
        !C ||
          j ||
          (s == null || s(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, f),
      P = W0((T) => {
        const A = T.target;
        [...l.branches].some((M) => M.contains(A)) ||
          (i == null || i(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, f);
    return (
      Ah((T) => {
        x === l.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ed = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            td(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = ed);
            }
          );
      }, [u, f, n, l]),
      v.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            td());
        },
        [u, l]
      ),
      v.useEffect(() => {
        const T = () => m({});
        return (
          document.addEventListener(Ja, T),
          () => document.removeEventListener(Ja, T)
        );
      }, []),
      p.jsx(De.div, {
        ...c,
        ref: g,
        style: {
          pointerEvents: w ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Te(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Te(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        ),
      })
    );
  });
$p.displayName = L0;
var U0 = "DismissableLayerBranch",
  $0 = v.forwardRef((e, t) => {
    const n = v.useContext(Up),
      r = v.useRef(null),
      s = qe(t, r);
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
      p.jsx(De.div, { ...e, ref: s })
    );
  });
$0.displayName = U0;
function z0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              zp(V0, n, l, { discrete: !0 });
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
function W0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          zp(B0, n, { originalEvent: i }, { discrete: !1 });
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
function td() {
  const e = new CustomEvent(Ja);
  document.dispatchEvent(e);
}
function zp(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? Th(s, i) : s.dispatchEvent(i);
}
const H0 = ["top", "right", "bottom", "left"],
  $n = Math.min,
  gt = Math.max,
  xo = Math.round,
  zi = Math.floor,
  nn = (e) => ({ x: e, y: e }),
  q0 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  G0 = { start: "end", end: "start" };
function ec(e, t, n) {
  return gt(e, $n(t, n));
}
function xn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wn(e) {
  return e.split("-")[0];
}
function hs(e) {
  return e.split("-")[1];
}
function cl(e) {
  return e === "x" ? "y" : "x";
}
function ll(e) {
  return e === "y" ? "height" : "width";
}
function zn(e) {
  return ["top", "bottom"].includes(wn(e)) ? "y" : "x";
}
function ul(e) {
  return cl(zn(e));
}
function Z0(e, t, n) {
  n === void 0 && (n = !1);
  const r = hs(e),
    s = ul(e),
    i = ll(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (o = wo(o)), [o, wo(o)];
}
function K0(e) {
  const t = wo(e);
  return [tc(e), t, tc(t)];
}
function tc(e) {
  return e.replace(/start|end/g, (t) => G0[t]);
}
function Q0(e, t, n) {
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
function X0(e, t, n, r) {
  const s = hs(e);
  let i = Q0(wn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(tc)))), i
  );
}
function wo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => q0[t]);
}
function Y0(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Wp(e) {
  return typeof e != "number"
    ? Y0(e)
    : { top: e, right: e, bottom: e, left: e };
}
function _o(e) {
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
function nd(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = zn(t),
    o = ul(t),
    a = ll(o),
    c = wn(t),
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
  switch (hs(t)) {
    case "start":
      m[o] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      m[o] += f * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const J0 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let l = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: d } = nd(l, r, c),
    f = r,
    m = {},
    g = 0;
  for (let h = 0; h < a.length; h++) {
    const { name: y, fn: b } = a[h],
      {
        x,
        y: w,
        data: C,
        reset: _,
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
      _ &&
        g <= 50 &&
        (g++,
        typeof _ == "object" &&
          (_.placement && (f = _.placement),
          _.rects &&
            (l =
              _.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : _.rects),
          ({ x: u, y: d } = nd(l, f, c))),
        (h = -1));
  }
  return { x: u, y: d, placement: f, strategy: s, middlewareData: m };
};
async function ii(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: c } = e,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = xn(t, e),
    g = Wp(m),
    y = a[f ? (d === "floating" ? "reference" : "floating") : d],
    b = _o(
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
    _ = _o(
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
    top: (b.top - _.top + g.top) / C.y,
    bottom: (_.bottom - b.bottom + g.bottom) / C.y,
    left: (b.left - _.left + g.left) / C.x,
    right: (_.right - b.right + g.right) / C.x,
  };
}
const e_ = (e) => ({
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
        { element: l, padding: u = 0 } = xn(e, t) || {};
      if (l == null) return {};
      const d = Wp(u),
        f = { x: n, y: r },
        m = ul(s),
        g = ll(m),
        h = await o.getDimensions(l),
        y = m === "y",
        b = y ? "top" : "left",
        x = y ? "bottom" : "right",
        w = y ? "clientHeight" : "clientWidth",
        C = i.reference[g] + i.reference[m] - f[m] - i.floating[g],
        _ = f[m] - i.reference[m],
        P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
      let T = P ? P[w] : 0;
      (!T || !(await (o.isElement == null ? void 0 : o.isElement(P)))) &&
        (T = a.floating[w] || i.floating[g]);
      const A = C / 2 - _ / 2,
        j = T / 2 - h[g] / 2 - 1,
        M = $n(d[b], j),
        V = $n(d[x], j),
        N = M,
        B = T - h[g] - V,
        W = T / 2 - h[g] / 2 + A,
        ee = ec(N, W, B),
        Q =
          !c.arrow &&
          hs(s) != null &&
          W !== ee &&
          i.reference[g] / 2 - (W < N ? M : V) - h[g] / 2 < 0,
        G = Q ? (W < N ? W - N : W - B) : 0;
      return {
        [m]: f[m] + G,
        data: {
          [m]: ee,
          centerOffset: W - ee - G,
          ...(Q && { alignmentOffset: G }),
        },
        reset: Q,
      };
    },
  }),
  t_ = function (e) {
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
            } = xn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const b = wn(s),
            x = zn(a),
            w = wn(a) === a,
            C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
            _ = f || (w || !h ? [wo(a)] : K0(a)),
            P = g !== "none";
          !f && P && _.push(...X0(a, h, g, C));
          const T = [a, ..._],
            A = await ii(t, y),
            j = [];
          let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((u && j.push(A[b]), d)) {
            const W = Z0(s, o, C);
            j.push(A[W[0]], A[W[1]]);
          }
          if (
            ((M = [...M, { placement: s, overflows: j }]),
            !j.every((W) => W <= 0))
          ) {
            var V, N;
            const W = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1,
              ee = T[W];
            if (ee)
              return {
                data: { index: W, overflows: M },
                reset: { placement: ee },
              };
            let Q =
              (N = M.filter((G) => G.overflows[0] <= 0).sort(
                (G, q) => G.overflows[1] - q.overflows[1]
              )[0]) == null
                ? void 0
                : N.placement;
            if (!Q)
              switch (m) {
                case "bestFit": {
                  var B;
                  const G =
                    (B = M.filter((q) => {
                      if (P) {
                        const ie = zn(q.placement);
                        return ie === x || ie === "y";
                      }
                      return !0;
                    })
                      .map((q) => [
                        q.placement,
                        q.overflows
                          .filter((ie) => ie > 0)
                          .reduce((ie, ye) => ie + ye, 0),
                      ])
                      .sort((q, ie) => q[1] - ie[1])[0]) == null
                      ? void 0
                      : B[0];
                  G && (Q = G);
                  break;
                }
                case "initialPlacement":
                  Q = a;
                  break;
              }
            if (s !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function rd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function sd(e) {
  return H0.some((t) => e[t] >= 0);
}
const n_ = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...s } = xn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await ii(t, { ...s, elementContext: "reference" }),
              o = rd(i, n.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: sd(o) },
            };
          }
          case "escaped": {
            const i = await ii(t, { ...s, altBoundary: !0 }),
              o = rd(i, n.floating);
            return { data: { escapedOffsets: o, escaped: sd(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function r_(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = wn(n),
    a = hs(n),
    c = zn(n) === "y",
    l = ["left", "top"].includes(o) ? -1 : 1,
    u = i && c ? -1 : 1,
    d = xn(t, e);
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
const s_ = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            c = await r_(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + c.x, y: i + c.y, data: { ...c, placement: o } };
        },
      }
    );
  },
  i_ = function (e) {
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
            } = xn(e, t),
            l = { x: n, y: r },
            u = await ii(t, c),
            d = zn(wn(s)),
            f = cl(d);
          let m = l[f],
            g = l[d];
          if (i) {
            const y = f === "y" ? "top" : "left",
              b = f === "y" ? "bottom" : "right",
              x = m + u[y],
              w = m - u[b];
            m = ec(x, m, w);
          }
          if (o) {
            const y = d === "y" ? "top" : "left",
              b = d === "y" ? "bottom" : "right",
              x = g + u[y],
              w = g - u[b];
            g = ec(x, g, w);
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
  o_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: c = !0, crossAxis: l = !0 } = xn(e, t),
            u = { x: n, y: r },
            d = zn(s),
            f = cl(d);
          let m = u[f],
            g = u[d];
          const h = xn(a, t),
            y =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            const w = f === "y" ? "height" : "width",
              C = i.reference[f] - i.floating[w] + y.mainAxis,
              _ = i.reference[f] + i.reference[w] - y.mainAxis;
            m < C ? (m = C) : m > _ && (m = _);
          }
          if (l) {
            var b, x;
            const w = f === "y" ? "width" : "height",
              C = ["top", "left"].includes(wn(s)),
              _ =
                i.reference[d] -
                i.floating[w] +
                ((C && ((b = o.offset) == null ? void 0 : b[d])) || 0) +
                (C ? 0 : y.crossAxis),
              P =
                i.reference[d] +
                i.reference[w] +
                (C ? 0 : ((x = o.offset) == null ? void 0 : x[d]) || 0) -
                (C ? y.crossAxis : 0);
            g < _ ? (g = _) : g > P && (g = P);
          }
          return { [f]: m, [d]: g };
        },
      }
    );
  },
  a_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: c = () => {}, ...l } = xn(e, t),
            u = await ii(t, l),
            d = wn(s),
            f = hs(s),
            m = zn(s) === "y",
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
            C = $n(h - u[y], x),
            _ = $n(g - u[b], w),
            P = !t.middlewareData.shift;
          let T = C,
            A = _;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (A = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = x),
            P && !f)
          ) {
            const M = gt(u.left, 0),
              V = gt(u.right, 0),
              N = gt(u.top, 0),
              B = gt(u.bottom, 0);
            m
              ? (A = g - 2 * (M !== 0 || V !== 0 ? M + V : gt(u.left, u.right)))
              : (T =
                  h - 2 * (N !== 0 || B !== 0 ? N + B : gt(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: A, availableHeight: T });
          const j = await o.getDimensions(a.floating);
          return g !== j.width || h !== j.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Bo() {
  return typeof window < "u";
}
function ps(e) {
  return Hp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ln(e) {
  var t;
  return (t = (Hp(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Hp(e) {
  return Bo() ? e instanceof Node || e instanceof vt(e).Node : !1;
}
function Ut(e) {
  return Bo() ? e instanceof Element || e instanceof vt(e).Element : !1;
}
function cn(e) {
  return Bo() ? e instanceof HTMLElement || e instanceof vt(e).HTMLElement : !1;
}
function id(e) {
  return !Bo() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot;
}
function Ci(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = $t(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(s)
  );
}
function c_(e) {
  return ["table", "td", "th"].includes(ps(e));
}
function Uo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function dl(e) {
  const t = fl(),
    n = Ut(e) ? $t(e) : e;
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
function l_(e) {
  let t = Wn(e);
  for (; cn(t) && !as(t); ) {
    if (dl(t)) return t;
    if (Uo(t)) return null;
    t = Wn(t);
  }
  return null;
}
function fl() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function as(e) {
  return ["html", "body", "#document"].includes(ps(e));
}
function $t(e) {
  return vt(e).getComputedStyle(e);
}
function $o(e) {
  return Ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Wn(e) {
  if (ps(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (id(e) && e.host) || ln(e);
  return id(t) ? t.host : t;
}
function qp(e) {
  const t = Wn(e);
  return as(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : cn(t) && Ci(t)
    ? t
    : qp(t);
}
function oi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = qp(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = vt(s);
  if (i) {
    const a = nc(o);
    return t.concat(
      o,
      o.visualViewport || [],
      Ci(s) ? s : [],
      a && n ? oi(a) : []
    );
  }
  return t.concat(s, oi(s, [], n));
}
function nc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gp(e) {
  const t = $t(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = cn(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = xo(n) !== i || xo(r) !== o;
  return a && ((n = i), (r = o)), { width: n, height: r, $: a };
}
function hl(e) {
  return Ut(e) ? e : e.contextElement;
}
function zr(e) {
  const t = hl(e);
  if (!cn(t)) return nn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = Gp(t);
  let o = (i ? xo(n.width) : n.width) / r,
    a = (i ? xo(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const u_ = nn(0);
function Zp(e) {
  const t = vt(e);
  return !fl() || !t.visualViewport
    ? u_
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function d_(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== vt(e)) ? !1 : t;
}
function xr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    i = hl(e);
  let o = nn(1);
  t && (r ? Ut(r) && (o = zr(r)) : (o = zr(e)));
  const a = d_(i, n, r) ? Zp(i) : nn(0);
  let c = (s.left + a.x) / o.x,
    l = (s.top + a.y) / o.y,
    u = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const f = vt(i),
      m = r && Ut(r) ? vt(r) : r;
    let g = f,
      h = nc(g);
    for (; h && r && m !== g; ) {
      const y = zr(h),
        b = h.getBoundingClientRect(),
        x = $t(h),
        w = b.left + (h.clientLeft + parseFloat(x.paddingLeft)) * y.x,
        C = b.top + (h.clientTop + parseFloat(x.paddingTop)) * y.y;
      (c *= y.x),
        (l *= y.y),
        (u *= y.x),
        (d *= y.y),
        (c += w),
        (l += C),
        (g = vt(h)),
        (h = nc(g));
    }
  }
  return _o({ width: u, height: d, x: c, y: l });
}
function pl(e, t) {
  const n = $o(e).scrollLeft;
  return t ? t.left + n : xr(ln(e)).left + n;
}
function Kp(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : pl(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function f_(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = ln(r),
    a = t ? Uo(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = nn(1);
  const u = nn(0),
    d = cn(r);
  if (
    (d || (!d && !i)) &&
    ((ps(r) !== "body" || Ci(o)) && (c = $o(r)), cn(r))
  ) {
    const m = xr(r);
    (l = zr(r)), (u.x = m.x + r.clientLeft), (u.y = m.y + r.clientTop);
  }
  const f = o && !d && !i ? Kp(o, c, !0) : nn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function h_(e) {
  return Array.from(e.getClientRects());
}
function p_(e) {
  const t = ln(e),
    n = $o(e),
    r = e.ownerDocument.body,
    s = gt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = gt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + pl(e);
  const a = -n.scrollTop;
  return (
    $t(r).direction === "rtl" && (o += gt(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function m_(e, t) {
  const n = vt(e),
    r = ln(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    c = 0;
  if (s) {
    (i = s.width), (o = s.height);
    const l = fl();
    (!l || (l && t === "fixed")) && ((a = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: c };
}
function g_(e, t) {
  const n = xr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = cn(e) ? zr(e) : nn(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    c = s * i.x,
    l = r * i.y;
  return { width: o, height: a, x: c, y: l };
}
function od(e, t, n) {
  let r;
  if (t === "viewport") r = m_(e, n);
  else if (t === "document") r = p_(ln(e));
  else if (Ut(t)) r = g_(t, n);
  else {
    const s = Zp(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return _o(r);
}
function Qp(e, t) {
  const n = Wn(e);
  return n === t || !Ut(n) || as(n)
    ? !1
    : $t(n).position === "fixed" || Qp(n, t);
}
function y_(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = oi(e, [], !1).filter((a) => Ut(a) && ps(a) !== "body"),
    s = null;
  const i = $t(e).position === "fixed";
  let o = i ? Wn(e) : e;
  for (; Ut(o) && !as(o); ) {
    const a = $t(o),
      c = dl(o);
    !c && a.position === "fixed" && (s = null),
      (
        i
          ? !c && !s
          : (!c &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Ci(o) && !c && Qp(e, o))
      )
        ? (r = r.filter((u) => u !== o))
        : (s = a),
      (o = Wn(o));
  }
  return t.set(e, r), r;
}
function v_(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Uo(t)
          ? []
          : y_(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    c = o.reduce((l, u) => {
      const d = od(t, u, s);
      return (
        (l.top = gt(d.top, l.top)),
        (l.right = $n(d.right, l.right)),
        (l.bottom = $n(d.bottom, l.bottom)),
        (l.left = gt(d.left, l.left)),
        l
      );
    }, od(t, a, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function b_(e) {
  const { width: t, height: n } = Gp(e);
  return { width: t, height: n };
}
function x_(e, t, n) {
  const r = cn(t),
    s = ln(t),
    i = n === "fixed",
    o = xr(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = nn(0);
  if (r || (!r && !i))
    if (((ps(t) !== "body" || Ci(s)) && (a = $o(t)), r)) {
      const f = xr(t, !0, i, t);
      (c.x = f.x + t.clientLeft), (c.y = f.y + t.clientTop);
    } else s && (c.x = pl(s));
  const l = s && !r && !i ? Kp(s, a) : nn(0),
    u = o.left + a.scrollLeft - c.x - l.x,
    d = o.top + a.scrollTop - c.y - l.y;
  return { x: u, y: d, width: o.width, height: o.height };
}
function xa(e) {
  return $t(e).position === "static";
}
function ad(e, t) {
  if (!cn(e) || $t(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return ln(e) === n && (n = n.ownerDocument.body), n;
}
function Xp(e, t) {
  const n = vt(e);
  if (Uo(e)) return n;
  if (!cn(e)) {
    let s = Wn(e);
    for (; s && !as(s); ) {
      if (Ut(s) && !xa(s)) return s;
      s = Wn(s);
    }
    return n;
  }
  let r = ad(e, t);
  for (; r && c_(r) && xa(r); ) r = ad(r, t);
  return r && as(r) && xa(r) && !dl(r) ? n : r || l_(e) || n;
}
const w_ = async function (e) {
  const t = this.getOffsetParent || Xp,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: x_(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function __(e) {
  return $t(e).direction === "rtl";
}
const S_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: f_,
  getDocumentElement: ln,
  getClippingRect: v_,
  getOffsetParent: Xp,
  getElementRects: w_,
  getClientRects: h_,
  getDimensions: b_,
  getScale: zr,
  isElement: Ut,
  isRTL: __,
};
function Yp(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function C_(e, t) {
  let n = null,
    r;
  const s = ln(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function o(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: m } = l;
    if ((a || t(), !f || !m)) return;
    const g = zi(d),
      h = zi(s.clientWidth - (u + f)),
      y = zi(s.clientHeight - (d + m)),
      b = zi(u),
      w = {
        rootMargin: -g + "px " + -h + "px " + -y + "px " + -b + "px",
        threshold: gt(0, $n(1, c)) || 1,
      };
    let C = !0;
    function _(P) {
      const T = P[0].intersectionRatio;
      if (T !== c) {
        if (!C) return o();
        T
          ? o(!1, T)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      T === 1 && !Yp(l, e.getBoundingClientRect()) && o(), (C = !1);
    }
    try {
      n = new IntersectionObserver(_, { ...w, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(_, w);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function E_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    l = hl(e),
    u = s || i ? [...(l ? oi(l) : []), ...oi(t)] : [];
  u.forEach((b) => {
    s && b.addEventListener("scroll", n, { passive: !0 }),
      i && b.addEventListener("resize", n);
  });
  const d = l && a ? C_(l, n) : null;
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
    h = c ? xr(e) : null;
  c && y();
  function y() {
    const b = xr(e);
    h && !Yp(h, b) && n(), (h = b), (g = requestAnimationFrame(y));
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
const T_ = s_,
  A_ = i_,
  R_ = t_,
  P_ = a_,
  k_ = n_,
  cd = e_,
  O_ = o_,
  j_ = (e, t, n) => {
    const r = new Map(),
      s = { platform: S_, ...n },
      i = { ...s.platform, _c: r };
    return J0(e, t, { ...s, platform: i });
  };
var eo = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function So(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!So(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !So(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Jp(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ld(e, t) {
  const n = Jp(e);
  return Math.round(t * n) / n;
}
function wa(e) {
  const t = v.useRef(e);
  return (
    eo(() => {
      t.current = e;
    }),
    t
  );
}
function N_(e) {
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
  So(f, r) || m(r);
  const [g, h] = v.useState(null),
    [y, b] = v.useState(null),
    x = v.useCallback((q) => {
      q !== P.current && ((P.current = q), h(q));
    }, []),
    w = v.useCallback((q) => {
      q !== T.current && ((T.current = q), b(q));
    }, []),
    C = i || g,
    _ = o || y,
    P = v.useRef(null),
    T = v.useRef(null),
    A = v.useRef(u),
    j = c != null,
    M = wa(c),
    V = wa(s),
    N = wa(l),
    B = v.useCallback(() => {
      if (!P.current || !T.current) return;
      const q = { placement: t, strategy: n, middleware: f };
      V.current && (q.platform = V.current),
        j_(P.current, T.current, q).then((ie) => {
          const ye = { ...ie, isPositioned: N.current !== !1 };
          W.current &&
            !So(A.current, ye) &&
            ((A.current = ye),
            mh.flushSync(() => {
              d(ye);
            }));
        });
    }, [f, t, n, V, N]);
  eo(() => {
    l === !1 &&
      A.current.isPositioned &&
      ((A.current.isPositioned = !1), d((q) => ({ ...q, isPositioned: !1 })));
  }, [l]);
  const W = v.useRef(!1);
  eo(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    []
  ),
    eo(() => {
      if ((C && (P.current = C), _ && (T.current = _), C && _)) {
        if (M.current) return M.current(C, _, B);
        B();
      }
    }, [C, _, B, M, j]);
  const ee = v.useMemo(
      () => ({ reference: P, floating: T, setReference: x, setFloating: w }),
      [x, w]
    ),
    Q = v.useMemo(() => ({ reference: C, floating: _ }), [C, _]),
    G = v.useMemo(() => {
      const q = { position: n, left: 0, top: 0 };
      if (!Q.floating) return q;
      const ie = ld(Q.floating, u.x),
        ye = ld(Q.floating, u.y);
      return a
        ? {
            ...q,
            transform: "translate(" + ie + "px, " + ye + "px)",
            ...(Jp(Q.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: ie, top: ye };
    }, [n, a, Q.floating, u.x, u.y]);
  return v.useMemo(
    () => ({ ...u, update: B, refs: ee, elements: Q, floatingStyles: G }),
    [u, B, ee, Q, G]
  );
}
const D_ = (e) => {
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
            ? cd({ element: r.current, padding: s }).fn(n)
            : {}
          : r
          ? cd({ element: r, padding: s }).fn(n)
          : {};
      },
    };
  },
  M_ = (e, t) => ({ ...T_(e), options: [e, t] }),
  F_ = (e, t) => ({ ...A_(e), options: [e, t] }),
  I_ = (e, t) => ({ ...O_(e), options: [e, t] }),
  L_ = (e, t) => ({ ...R_(e), options: [e, t] }),
  V_ = (e, t) => ({ ...P_(e), options: [e, t] }),
  B_ = (e, t) => ({ ...k_(e), options: [e, t] }),
  U_ = (e, t) => ({ ...D_(e), options: [e, t] });
var $_ = "Arrow",
  em = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return p.jsx(De.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
em.displayName = $_;
var z_ = em;
function tm(e) {
  const [t, n] = v.useState(void 0);
  return (
    mr(() => {
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
var ml = "Popper",
  [nm, rm] = Er(ml),
  [W_, sm] = nm(ml),
  im = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, s] = v.useState(null);
    return p.jsx(W_, { scope: t, anchor: r, onAnchorChange: s, children: n });
  };
im.displayName = ml;
var om = "PopperAnchor",
  am = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = sm(om, n),
      o = v.useRef(null),
      a = qe(t, o);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : p.jsx(De.div, { ...s, ref: a })
    );
  });
am.displayName = om;
var gl = "PopperContent",
  [H_, q_] = nm(gl),
  cm = v.forwardRef((e, t) => {
    var de, be, Me, $e, _e, Z;
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
      y = sm(gl, n),
      [b, x] = v.useState(null),
      w = qe(t, (he) => x(he)),
      [C, _] = v.useState(null),
      P = tm(C),
      T = (P == null ? void 0 : P.width) ?? 0,
      A = (P == null ? void 0 : P.height) ?? 0,
      j = r + (i !== "center" ? "-" + i : ""),
      M =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      V = Array.isArray(l) ? l : [l],
      N = V.length > 0,
      B = { padding: M, boundary: V.filter(Z_), altBoundary: N },
      {
        refs: W,
        floatingStyles: ee,
        placement: Q,
        isPositioned: G,
        middlewareData: q,
      } = N_({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...he) =>
          E_(...he, { animationFrame: m === "always" }),
        elements: { reference: y.anchor },
        middleware: [
          M_({ mainAxis: s + A, alignmentAxis: o }),
          c &&
            F_({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? I_() : void 0,
              ...B,
            }),
          c && L_({ ...B }),
          V_({
            ...B,
            apply: ({
              elements: he,
              rects: Se,
              availableWidth: He,
              availableHeight: mt,
            }) => {
              const { width: St, height: S } = Se.reference,
                R = he.floating.style;
              R.setProperty("--radix-popper-available-width", `${He}px`),
                R.setProperty("--radix-popper-available-height", `${mt}px`),
                R.setProperty("--radix-popper-anchor-width", `${St}px`),
                R.setProperty("--radix-popper-anchor-height", `${S}px`);
            },
          }),
          C && U_({ element: C, padding: a }),
          K_({ arrowWidth: T, arrowHeight: A }),
          f && B_({ strategy: "referenceHidden", ...B }),
        ],
      }),
      [ie, ye] = dm(Q),
      ve = Vt(g);
    mr(() => {
      G && (ve == null || ve());
    }, [G, ve]);
    const Xe = (de = q.arrow) == null ? void 0 : de.x,
      pt = (be = q.arrow) == null ? void 0 : be.y,
      Ye = ((Me = q.arrow) == null ? void 0 : Me.centerOffset) !== 0,
      [Pt, it] = v.useState();
    return (
      mr(() => {
        b && it(window.getComputedStyle(b).zIndex);
      }, [b]),
      p.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ee,
          transform: G ? ee.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Pt,
          "--radix-popper-transform-origin": [
            ($e = q.transformOrigin) == null ? void 0 : $e.x,
            (_e = q.transformOrigin) == null ? void 0 : _e.y,
          ].join(" "),
          ...(((Z = q.hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(H_, {
          scope: n,
          placedSide: ie,
          onArrowChange: _,
          arrowX: Xe,
          arrowY: pt,
          shouldHideArrow: Ye,
          children: p.jsx(De.div, {
            "data-side": ie,
            "data-align": ye,
            ...h,
            ref: w,
            style: { ...h.style, animation: G ? void 0 : "none" },
          }),
        }),
      })
    );
  });
cm.displayName = gl;
var lm = "PopperArrow",
  G_ = { top: "bottom", right: "left", bottom: "top", left: "right" },
  um = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = q_(lm, r),
      o = G_[i.placedSide];
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
      children: p.jsx(z_, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
um.displayName = lm;
function Z_(e) {
  return e !== null;
}
var K_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, b, x;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((y = s.arrow) == null ? void 0 : y.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      c = o ? 0 : e.arrowHeight,
      [l, u] = dm(n),
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
function dm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Q_ = im,
  fm = am,
  X_ = cm,
  Y_ = um,
  yl = "Popover",
  [hm, C1] = Er(yl, [rm]),
  Ei = rm(),
  [J_, Gn] = hm(yl),
  pm = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !1,
      } = e,
      a = Ei(t),
      c = v.useRef(null),
      [l, u] = v.useState(!1),
      [d = !1, f] = Fo({ prop: r, defaultProp: s, onChange: i });
    return p.jsx(Q_, {
      ...a,
      children: p.jsx(J_, {
        scope: t,
        contentId: Ms(),
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
pm.displayName = yl;
var mm = "PopoverAnchor",
  eS = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Gn(mm, n),
      i = Ei(n),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: a } = s;
    return (
      v.useEffect(() => (o(), () => a()), [o, a]),
      p.jsx(fm, { ...i, ...r, ref: t })
    );
  });
eS.displayName = mm;
var gm = "PopoverTrigger",
  ym = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Gn(gm, n),
      i = Ei(n),
      o = qe(t, s.triggerRef),
      a = p.jsx(De.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": _m(s.open),
        ...r,
        ref: o,
        onClick: Te(e.onClick, s.onOpenToggle),
      });
    return s.hasCustomAnchor
      ? a
      : p.jsx(fm, { asChild: !0, ...i, children: a });
  });
ym.displayName = gm;
var vl = "PopoverPortal",
  [tS, nS] = hm(vl, { forceMount: void 0 }),
  vm = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: s } = e,
      i = Gn(vl, t);
    return p.jsx(tS, {
      scope: t,
      forceMount: n,
      children: p.jsx(Tr, {
        present: n || i.open,
        children: p.jsx(Qc, { asChild: !0, container: s, children: r }),
      }),
    });
  };
vm.displayName = vl;
var cs = "PopoverContent",
  bm = v.forwardRef((e, t) => {
    const n = nS(cs, e.__scopePopover),
      { forceMount: r = n.forceMount, ...s } = e,
      i = Gn(cs, e.__scopePopover);
    return p.jsx(Tr, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(rS, { ...s, ref: t })
        : p.jsx(sS, { ...s, ref: t }),
    });
  });
bm.displayName = cs;
var rS = v.forwardRef((e, t) => {
    const n = Gn(cs, e.__scopePopover),
      r = v.useRef(null),
      s = qe(t, r),
      i = v.useRef(!1);
    return (
      v.useEffect(() => {
        const o = r.current;
        if (o) return Uh(o);
      }, []),
      p.jsx(Xc, {
        as: In,
        allowPinchZoom: !0,
        children: p.jsx(xm, {
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
  sS = v.forwardRef((e, t) => {
    const n = Gn(cs, e.__scopePopover),
      r = v.useRef(!1),
      s = v.useRef(!1);
    return p.jsx(xm, {
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
  xm = v.forwardRef((e, t) => {
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
      f = Gn(cs, n),
      m = Ei(n);
    return (
      jh(),
      p.jsx(Kc, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: p.jsx($p, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: u,
          onEscapeKeyDown: a,
          onPointerDownOutside: c,
          onFocusOutside: l,
          onDismiss: () => f.onOpenChange(!1),
          children: p.jsx(X_, {
            "data-state": _m(f.open),
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
  wm = "PopoverClose",
  iS = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Gn(wm, n);
    return p.jsx(De.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Te(e.onClick, () => s.onOpenChange(!1)),
    });
  });
iS.displayName = wm;
var oS = "PopoverArrow",
  aS = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Ei(n);
    return p.jsx(Y_, { ...s, ...r, ref: t });
  });
aS.displayName = oS;
function _m(e) {
  return e ? "open" : "closed";
}
var cS = pm,
  lS = ym,
  uS = vm,
  Sm = bm;
const Cm = cS,
  Em = lS,
  bl = v.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, s) =>
      p.jsx(uS, {
        children: p.jsx(Sm, {
          ref: s,
          align: t,
          sideOffset: n,
          className: se(
            "z-50 w-32 bg-white rounded-[2px] p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
          ...r,
        }),
      })
  );
bl.displayName = Sm.displayName;
const dS = [{ lang: nt.RU }, { lang: nt.EN }],
  ud = ({ className: e }) => {
    const t = Ge((i) => i.lang),
      n = Ge((i) => i.setLang),
      [r, s] = v.useState(!1);
    return p.jsxs(Cm, {
      open: r,
      onOpenChange: () => s(!r),
      children: [
        p.jsxs(Em, {
          className: se("flex items-center gap-2", e),
          children: [
            p.jsx("img", {
              src: t === nt.RU ? "/ru.svg" : "/english.svg",
              alt: "",
            }),
            t === nt.RU ? "Ру" : "En",
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
                fill: "#fff",
              }),
            }),
          ],
        }),
        p.jsx(bl, {
          className: "flex flex-col gap-6",
          children: dS
            .filter((i) => i.lang !== t)
            .map((i, o) =>
              p.jsxs(
                "div",
                {
                  onClick: () => {
                    n(i.lang), s(!1);
                  },
                  className: "flex gap-3 py-1 items-center cursor-pointer",
                  children: [
                    p.jsx("img", {
                      src: i.lang === nt.RU ? "/ru.svg" : "/english.svg",
                      alt: "flag",
                    }),
                    p.jsx("h5", {
                      children: i.lang === nt.RU ? "Русский" : "English",
                    }),
                  ],
                },
                o
              )
            ),
        }),
      ],
    });
  },
  wt = ({ className: e, children: t }) =>
    p.jsx("div", {
      className: se("w-full mx-auto max-w-[1240px] px-4", e),
      children: t,
    }),
  fS = ({ className: e, nums: t, text: n }) =>
    p.jsxs("article", {
      className: se(
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
  hS = ({ className: e, subtitle: t, title: n, img: r }) =>
    p.jsxs("div", {
      className: se("flex items-center gap-4", e),
      children: [
        p.jsx("img", { src: r, alt: "contact icon" }),
        p.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            p.jsx("h5", { className: "text-sm text-[#454545]", children: t }),
            p.jsx("h4", { className: "text-[#171717] semibold", children: n }),
          ],
        }),
      ],
    }),
  Tm = ({ className: e, name: t, date: n, bottomClassName: r }) =>
    p.jsxs("div", {
      className: se("rounded-t-[4px] overflow-hidden", e),
      children: [
        p.jsx("div", {
          className:
            "bg-teritary_07 flex items-center text-teritary_11 h-11 px-4",
          children: t,
        }),
        p.jsx("div", {
          className: se(
            "h-14 bg-bg_surface_container semibold flex items-center text-lg px-4",
            r
          ),
          children: n,
        }),
      ],
    }),
  pS = ({ className: e, title: t, text: n, img: r, link: s, btnText: i }) =>
    p.jsxs("article", {
      className: se(
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
            p.jsx(Be, {
              className: "absolute bottom-0 left-0",
              target: "_blank",
              to: s,
              children: p.jsxs(Qe, {
                className: "text-sm px-0 h-fit py-0 z-20",
                variant: "link",
                children: [i, " ", p.jsx(Gc, {})],
              }),
            }),
          ],
        }),
      ],
    }),
  mS = ({ className: e, slides: t, active: n, scrollTo: r }) =>
    p.jsx("div", {
      className: se("flex items-center justify-center gap-2", e),
      children: Array.from({ length: t }).map((s, i) =>
        p.jsx(
          "span",
          {
            onClick: () => r(i),
            className: se(n === i ? "dot-active" : "dot"),
          },
          i
        )
      ),
    }),
  xl = v.createContext({});
function wl(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const zo = v.createContext(null),
  _l = v.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class gS extends v.Component {
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
function yS({ children: e, isPresent: t }) {
  const n = v.useId(),
    r = v.useRef(null),
    s = v.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = v.useContext(_l);
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
    p.jsx(gS, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: v.cloneElement(e, { ref: r }),
    })
  );
}
const vS = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const a = wl(bS),
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
    o === "popLayout" && (e = p.jsx(yS, { isPresent: n, children: e })),
    p.jsx(zo.Provider, { value: u, children: e })
  );
};
function bS() {
  return new Map();
}
function Am(e = !0) {
  const t = v.useContext(zo);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = v.useId();
  v.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = v.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Wi = (e) => e.key || "";
function dd(e) {
  const t = [];
  return (
    v.Children.forEach(e, (n) => {
      v.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Sl = typeof window < "u",
  Rm = Sl ? v.useLayoutEffect : v.useEffect,
  _a = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
  }) => {
    const [a, c] = Am(o),
      l = v.useMemo(() => dd(e), [e]),
      u = o && !a ? [] : l.map(Wi),
      d = v.useRef(!0),
      f = v.useRef(l),
      m = wl(() => new Map()),
      [g, h] = v.useState(l),
      [y, b] = v.useState(l);
    Rm(() => {
      (d.current = !1), (f.current = l);
      for (let C = 0; C < y.length; C++) {
        const _ = Wi(y[C]);
        u.includes(_) ? m.delete(_) : m.get(_) !== !0 && m.set(_, !1);
      }
    }, [y, u.length, u.join("-")]);
    const x = [];
    if (l !== g) {
      let C = [...l];
      for (let _ = 0; _ < y.length; _++) {
        const P = y[_],
          T = Wi(P);
        u.includes(T) || (C.splice(_, 0, P), x.push(P));
      }
      i === "wait" && x.length && (C = x), b(dd(C)), h(l);
      return;
    }
    const { forceRender: w } = v.useContext(xl);
    return p.jsx(p.Fragment, {
      children: y.map((C) => {
        const _ = Wi(C),
          P = o && !a ? !1 : l === y || u.includes(_),
          T = () => {
            if (m.has(_)) m.set(_, !0);
            else return;
            let A = !0;
            m.forEach((j) => {
              j || (A = !1);
            }),
              A &&
                (w == null || w(),
                b(f.current),
                o && (c == null || c()),
                r && r());
          };
        return p.jsx(
          vS,
          {
            isPresent: P,
            initial: !d.current || n ? void 0 : !1,
            custom: P ? void 0 : t,
            presenceAffectsLayout: s,
            mode: i,
            onExitComplete: P ? void 0 : T,
            children: C,
          },
          _
        );
      }),
    });
  },
  bt = (e) => e;
let rc = bt;
const xS = { skipAnimations: !1, useManualTiming: !1 };
function wS(e) {
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
const Hi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  _S = 40;
function Pm(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Hi.reduce((b, x) => ((b[x] = wS(i)), b), {}),
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
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(b - s.timestamp, _S), 1)),
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
    schedule: Hi.reduce((b, x) => {
      const w = o[x];
      return (b[x] = (C, _ = !1, P = !1) => (n || g(), w.schedule(C, _, P))), b;
    }, {}),
    cancel: (b) => {
      for (let x = 0; x < Hi.length; x++) o[Hi[x]].cancel(b);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: Ae,
    cancel: Hn,
    state: Ze,
    steps: Sa,
  } = Pm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : bt, !0),
  km = v.createContext({ strict: !1 }),
  fd = {
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
  ls = {};
for (const e in fd) ls[e] = { isEnabled: (t) => fd[e].some((n) => !!t[n]) };
function SS(e) {
  for (const t in e) ls[t] = { ...ls[t], ...e[t] };
}
const CS = new Set([
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
function Co(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    CS.has(e)
  );
}
let Om = (e) => !Co(e);
function ES(e) {
  e && (Om = (t) => (t.startsWith("on") ? !Co(t) : e(t)));
}
try {
  ES(require("@emotion/is-prop-valid").default);
} catch {}
function TS(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Om(s) ||
        (n === !0 && Co(s)) ||
        (!t && !Co(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function AS(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const Wo = v.createContext({});
function ai(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ho(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Cl = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  El = ["initial", ...Cl];
function qo(e) {
  return Ho(e.animate) || El.some((t) => ai(e[t]));
}
function jm(e) {
  return !!(qo(e) || e.variants);
}
function RS(e, t) {
  if (qo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ai(n) ? n : void 0,
      animate: ai(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function PS(e) {
  const { initial: t, animate: n } = RS(e, v.useContext(Wo));
  return v.useMemo(() => ({ initial: t, animate: n }), [hd(t), hd(n)]);
}
function hd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const kS = Symbol.for("motionComponentSymbol");
function Mr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function OS(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Mr(n) && (n.current = r));
    },
    [t]
  );
}
const Tl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  jS = "framerAppearId",
  Nm = "data-" + Tl(jS),
  { schedule: Al, cancel: E1 } = Pm(queueMicrotask, !1),
  Dm = v.createContext({});
function NS(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = v.useContext(Wo),
    c = v.useContext(km),
    l = v.useContext(zo),
    u = v.useContext(_l).reducedMotion,
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
    m = v.useContext(Dm);
  f &&
    !f.projection &&
    s &&
    (f.type === "html" || f.type === "svg") &&
    DS(d.current, n, s, m);
  const g = v.useRef(!1);
  v.useInsertionEffect(() => {
    f && g.current && f.update(n, l);
  });
  const h = n[Nm],
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
    Rm(() => {
      f &&
        ((g.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Al.render(f.render),
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
function DS(e, t, n, r) {
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
    t["data-framer-portal-id"] ? void 0 : Mm(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && Mr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    });
}
function Mm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Mm(e.parent);
}
function MS({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && SS(e);
  function a(l, u) {
    let d;
    const f = { ...v.useContext(_l), ...l, layoutId: FS(l) },
      { isStatic: m } = f,
      g = PS(l),
      h = r(l, m);
    if (!m && Sl) {
      IS();
      const y = LS(f);
      (d = y.MeasureLayout),
        (g.visualElement = NS(s, h, f, t, y.ProjectionNode));
    }
    return p.jsxs(Wo.Provider, {
      value: g,
      children: [
        d && g.visualElement
          ? p.jsx(d, { visualElement: g.visualElement, ...f })
          : null,
        n(s, l, OS(h, g.visualElement, u), h, m, g.visualElement),
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
  return (c[kS] = s), c;
}
function FS({ layoutId: e }) {
  const t = v.useContext(xl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function IS(e, t) {
  v.useContext(km).strict;
}
function LS(e) {
  const { drag: t, layout: n } = ls;
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
const VS = [
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
function Rl(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(VS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function pd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Pl(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = pd(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = pd(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const sc = (e) => Array.isArray(e),
  BS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  US = (e) => (sc(e) ? e[e.length - 1] || 0 : e),
  rt = (e) => !!(e && e.getVelocity);
function to(e) {
  const t = rt(e) ? e.get() : e;
  return BS(t) ? t.toValue() : t;
}
function $S(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i
) {
  const o = { latestValues: zS(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const Fm = (e) => (t, n) => {
  const r = v.useContext(Wo),
    s = v.useContext(zo),
    i = () => $S(e, t, r, s);
  return n ? i() : wl(i);
};
function zS(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = to(i[f]);
  let { initial: o, animate: a } = e;
  const c = qo(e),
    l = jm(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const d = u ? a : o;
  if (d && typeof d != "boolean" && !Ho(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const g = Pl(e, f[m]);
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
const ms = [
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
  Rr = new Set(ms),
  Im = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Lm = Im("--"),
  WS = Im("var(--"),
  kl = (e) => (WS(e) ? HS.test(e.split("/*")[0].trim()) : !1),
  HS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Vm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  _n = (e, t, n) => (n > t ? t : n < e ? e : n),
  gs = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ci = { ...gs, transform: (e) => _n(0, 1, e) },
  qi = { ...gs, default: 1 },
  Ti = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  An = Ti("deg"),
  rn = Ti("%"),
  J = Ti("px"),
  qS = Ti("vh"),
  GS = Ti("vw"),
  md = {
    ...rn,
    parse: (e) => rn.parse(e) / 100,
    transform: (e) => rn.transform(e * 100),
  },
  ZS = {
    borderWidth: J,
    borderTopWidth: J,
    borderRightWidth: J,
    borderBottomWidth: J,
    borderLeftWidth: J,
    borderRadius: J,
    radius: J,
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomRightRadius: J,
    borderBottomLeftRadius: J,
    width: J,
    maxWidth: J,
    height: J,
    maxHeight: J,
    top: J,
    right: J,
    bottom: J,
    left: J,
    padding: J,
    paddingTop: J,
    paddingRight: J,
    paddingBottom: J,
    paddingLeft: J,
    margin: J,
    marginTop: J,
    marginRight: J,
    marginBottom: J,
    marginLeft: J,
    backgroundPositionX: J,
    backgroundPositionY: J,
  },
  KS = {
    rotate: An,
    rotateX: An,
    rotateY: An,
    rotateZ: An,
    scale: qi,
    scaleX: qi,
    scaleY: qi,
    scaleZ: qi,
    skew: An,
    skewX: An,
    skewY: An,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: ci,
    originX: md,
    originY: md,
    originZ: J,
  },
  gd = { ...gs, transform: Math.round },
  Ol = {
    ...ZS,
    ...KS,
    zIndex: gd,
    size: J,
    fillOpacity: ci,
    strokeOpacity: ci,
    numOctaves: gd,
  },
  QS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  XS = ms.length;
function YS(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < XS; i++) {
    const o = ms[i],
      a = e[o];
    if (a === void 0) continue;
    let c = !0;
    if (
      (typeof a == "number"
        ? (c = a === (o.startsWith("scale") ? 1 : 0))
        : (c = parseFloat(a) === 0),
      !c || n)
    ) {
      const l = Vm(a, Ol[o]);
      if (!c) {
        s = !1;
        const u = QS[o] || o;
        r += `${u}(${l}) `;
      }
      n && (t[o] = l);
    }
  }
  return (r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r;
}
function jl(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const c in t) {
    const l = t[c];
    if (Rr.has(c)) {
      o = !0;
      continue;
    } else if (Lm(c)) {
      s[c] = l;
      continue;
    } else {
      const u = Vm(l, Ol[c]);
      c.startsWith("origin") ? ((a = !0), (i[c] = u)) : (r[c] = u);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = YS(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
const JS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  eC = { offset: "strokeDashoffset", array: "strokeDasharray" };
function tC(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? JS : eC;
  e[i.offset] = J.transform(-r);
  const o = J.transform(t),
    a = J.transform(n);
  e[i.array] = `${o} ${a}`;
}
function yd(e, t, n) {
  return typeof e == "string" ? e : J.transform(t + n * e);
}
function nC(e, t, n) {
  const r = yd(t, e.x, e.width),
    s = yd(n, e.y, e.height);
  return `${r} ${s}`;
}
function Nl(
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
  if ((jl(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: m, dimensions: g } = e;
  f.transform && (g && (m.transform = f.transform), delete f.transform),
    g &&
      (s !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = nC(
        g,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && tC(f, o, a, c, !1);
}
const Dl = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Bm = () => ({ ...Dl(), attrs: {} }),
  Ml = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Um(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const $m = new Set([
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
function zm(e, t, n, r) {
  Um(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute($m.has(s) ? s : Tl(s), t.attrs[s]);
}
const Eo = {};
function rC(e) {
  Object.assign(Eo, e);
}
function Wm(e, { layout: t, layoutId: n }) {
  return (
    Rr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Eo[e] || e === "opacity"))
  );
}
function Fl(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (rt(s[o]) ||
      (t.style && rt(t.style[o])) ||
      Wm(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function Hm(e, t, n) {
  const r = Fl(e, t, n);
  for (const s in e)
    if (rt(e[s]) || rt(t[s])) {
      const i =
        ms.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function sC(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const vd = ["x", "y", "width", "height", "cx", "cy", "r"],
  iC = {
    useVisualState: Fm({
      scrapeMotionValuesFromProps: Hm,
      createRenderState: Bm,
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
            if (Rr.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < vd.length; a++) {
            const c = vd[a];
            e[c] !== t[c] && (o = !0);
          }
        o &&
          Ae.read(() => {
            sC(n, r),
              Ae.render(() => {
                Nl(r, s, Ml(n.tagName), e.transformTemplate), zm(n, r);
              });
          });
      },
    }),
  },
  oC = {
    useVisualState: Fm({
      scrapeMotionValuesFromProps: Fl,
      createRenderState: Dl,
    }),
  };
function qm(e, t, n) {
  for (const r in t) !rt(t[r]) && !Wm(r, n) && (e[r] = t[r]);
}
function aC({ transformTemplate: e }, t) {
  return v.useMemo(() => {
    const n = Dl();
    return jl(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function cC(e, t) {
  const n = e.style || {},
    r = {};
  return qm(r, n, e), Object.assign(r, aC(e, t)), r;
}
function lC(e, t) {
  const n = {},
    r = cC(e, t);
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
function uC(e, t, n, r) {
  const s = v.useMemo(() => {
    const i = Bm();
    return (
      Nl(i, t, Ml(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    qm(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function dC(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const c = (Rl(n) ? uC : lC)(r, i, o, n),
      l = TS(r, typeof n == "string", e),
      u = n !== v.Fragment ? { ...l, ...c, ref: s } : {},
      { children: d } = r,
      f = v.useMemo(() => (rt(d) ? d.get() : d), [d]);
    return v.createElement(n, { ...u, children: f });
  };
}
function fC(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Rl(r) ? iC : oC),
      preloadedFeatures: e,
      useRender: dC(s),
      createVisualElement: t,
      Component: r,
    };
    return MS(o);
  };
}
function Gm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Go(e, t, n) {
  const r = e.getProps();
  return Pl(r, t, n !== void 0 ? n : r.custom, e);
}
function Il(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Zm = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ms,
]);
let no;
function hC() {
  no = void 0;
}
const sn = {
  now: () => (
    no === void 0 &&
      sn.set(
        Ze.isProcessing || xS.useManualTiming ? Ze.timestamp : performance.now()
      ),
    no
  ),
  set: (e) => {
    (no = e), queueMicrotask(hC);
  },
};
function Ll(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Vl(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Bl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ll(this.subscriptions, t), () => Vl(this.subscriptions, t);
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
function Km(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const bd = 30,
  pC = (e) => !isNaN(parseFloat(e));
class mC {
  constructor(t, n = {}) {
    (this.version = "12.0.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = sn.now();
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
      (this.updatedAt = sn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = pC(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Bl());
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
    const t = sn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > bd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, bd);
    return Km(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function li(e, t) {
  return new mC(e, t);
}
function gC(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, li(n));
}
function yC(e, t) {
  const n = Go(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = US(i[o]);
    gC(e, o, a);
  }
}
function vC(e) {
  return !!(rt(e) && e.add);
}
function ic(e, t) {
  const n = e.getValue("willChange");
  if (vC(n)) return n.add(t);
}
function Qm(e) {
  return e.props[Nm];
}
function Ul(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const bC = Ul(() => window.ScrollTimeline !== void 0);
class xC {
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
      if (bC() && s.attachTimeline) return s.attachTimeline(t);
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
class wC extends xC {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const yn = (e) => e * 1e3,
  vn = (e) => e / 1e3;
function $l(e) {
  return typeof e == "function";
}
function xd(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const zl = (e) => Array.isArray(e) && typeof e[0] == "number",
  _C = { linearEasing: void 0 };
function SC(e, t) {
  const n = Ul(e);
  return () => {
    var r;
    return (r = _C[t]) !== null && r !== void 0 ? r : n();
  };
}
const To = SC(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  us = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Xm = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(us(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Ym(e) {
  return !!(
    (typeof e == "function" && To()) ||
    !e ||
    (typeof e == "string" && (e in oc || To())) ||
    zl(e) ||
    (Array.isArray(e) && e.every(Ym))
  );
}
const ks = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  oc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ks([0, 0.65, 0.55, 1]),
    circOut: ks([0.55, 0, 1, 0.45]),
    backIn: ks([0.31, 0.01, 0.66, -0.59]),
    backOut: ks([0.33, 1.53, 0.69, 0.99]),
  };
function Jm(e, t) {
  if (e)
    return typeof e == "function" && To()
      ? Xm(e, t)
      : zl(e)
      ? ks(e)
      : Array.isArray(e)
      ? e.map((n) => Jm(n, t) || oc.easeOut)
      : oc[e];
}
const eg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  CC = 1e-7,
  EC = 12;
function TC(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (i = eg(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > CC && ++a < EC);
  return o;
}
function Ai(e, t, n, r) {
  if (e === t && n === r) return bt;
  const s = (i) => TC(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : eg(s(i), t, r));
}
const tg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  ng = (e) => (t) => 1 - e(1 - t),
  rg = Ai(0.33, 1.53, 0.69, 0.99),
  Wl = ng(rg),
  sg = tg(Wl),
  ig = (e) =>
    (e *= 2) < 1 ? 0.5 * Wl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Hl = (e) => 1 - Math.sin(Math.acos(e)),
  og = ng(Hl),
  ag = tg(Hl),
  cg = (e) => /^0[^.\s]+$/u.test(e);
function AC(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || cg(e)
    : !0;
}
const Ls = (e) => Math.round(e * 1e5) / 1e5,
  ql = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function RC(e) {
  return e == null;
}
const PC =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Gl = (e, t) => (n) =>
    !!(
      (typeof n == "string" && PC.test(n) && n.startsWith(e)) ||
      (t && !RC(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  lg = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(ql);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  kC = (e) => _n(0, 255, e),
  Ca = { ...gs, transform: (e) => Math.round(kC(e)) },
  tr = {
    test: Gl("rgb", "red"),
    parse: lg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ca.transform(e) +
      ", " +
      Ca.transform(t) +
      ", " +
      Ca.transform(n) +
      ", " +
      Ls(ci.transform(r)) +
      ")",
  };
function OC(e) {
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
const ac = { test: Gl("#"), parse: OC, transform: tr.transform },
  Fr = {
    test: Gl("hsl", "hue"),
    parse: lg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      rn.transform(Ls(t)) +
      ", " +
      rn.transform(Ls(n)) +
      ", " +
      Ls(ci.transform(r)) +
      ")",
  },
  et = {
    test: (e) => tr.test(e) || ac.test(e) || Fr.test(e),
    parse: (e) =>
      tr.test(e) ? tr.parse(e) : Fr.test(e) ? Fr.parse(e) : ac.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? tr.transform(e)
        : Fr.transform(e),
  },
  jC =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function NC(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(ql)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(jC)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ug = "number",
  dg = "color",
  DC = "var",
  MC = "var(",
  wd = "${}",
  FC =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ui(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      FC,
      (c) => (
        et.test(c)
          ? (r.color.push(i), s.push(dg), n.push(et.parse(c)))
          : c.startsWith(MC)
          ? (r.var.push(i), s.push(DC), n.push(c))
          : (r.number.push(i), s.push(ug), n.push(parseFloat(c))),
        ++i,
        wd
      )
    )
    .split(wd);
  return { values: n, split: a, indexes: r, types: s };
}
function fg(e) {
  return ui(e).values;
}
function hg(e) {
  const { split: t, types: n } = ui(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === ug
          ? (i += Ls(s[o]))
          : a === dg
          ? (i += et.transform(s[o]))
          : (i += s[o]);
      }
    return i;
  };
}
const IC = (e) => (typeof e == "number" ? 0 : e);
function LC(e) {
  const t = fg(e);
  return hg(e)(t.map(IC));
}
const qn = {
    test: NC,
    parse: fg,
    createTransformer: hg,
    getAnimatableNone: LC,
  },
  VC = new Set(["brightness", "contrast", "saturate", "opacity"]);
function BC(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ql) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = VC.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const UC = /\b([a-z-]*)\(.*?\)/gu,
  cc = {
    ...qn,
    getAnimatableNone: (e) => {
      const t = e.match(UC);
      return t ? t.map(BC).join(" ") : e;
    },
  },
  $C = {
    ...Ol,
    color: et,
    backgroundColor: et,
    outlineColor: et,
    fill: et,
    stroke: et,
    borderColor: et,
    borderTopColor: et,
    borderRightColor: et,
    borderBottomColor: et,
    borderLeftColor: et,
    filter: cc,
    WebkitFilter: cc,
  },
  Zl = (e) => $C[e];
function pg(e, t) {
  let n = Zl(e);
  return (
    n !== cc && (n = qn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const zC = new Set(["auto", "none", "0"]);
function WC(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !zC.has(i) && ui(i).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const i of t) e[i] = pg(n, s);
}
const _d = (e) => e === gs || e === J,
  Sd = (e, t) => parseFloat(e.split(", ")[t]),
  Cd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return Sd(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Sd(i[1], e) : 0;
      }
    },
  HC = new Set(["x", "y", "z"]),
  qC = ms.filter((e) => !HC.has(e));
function GC(e) {
  const t = [];
  return (
    qC.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ds = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Cd(4, 13),
  y: Cd(5, 14),
};
ds.translateX = ds.x;
ds.translateY = ds.y;
const fr = new Set();
let lc = !1,
  uc = !1;
function mg() {
  if (uc) {
    const e = Array.from(fr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = GC(r);
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
  (uc = !1), (lc = !1), fr.forEach((e) => e.complete()), fr.clear();
}
function gg() {
  fr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (uc = !0);
  });
}
function ZC() {
  gg(), mg();
}
class Kl {
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
        ? (fr.add(this),
          lc || ((lc = !0), Ae.read(gg), Ae.resolveKeyframes(mg)))
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
      fr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), fr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const yg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  KC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function QC(e) {
  const t = KC.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function vg(e, t, n = 1) {
  const [r, s] = QC(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return yg(o) ? parseFloat(o) : o;
  }
  return kl(s) ? vg(s, t, n + 1) : s;
}
const bg = (e) => (t) => t.test(e),
  XC = { test: (e) => e === "auto", parse: (e) => e },
  xg = [gs, J, rn, An, GS, qS, XC],
  Ed = (e) => xg.find(bg(e));
class wg extends Kl {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && ((l = l.trim()), kl(l))) {
        const u = vg(l, n.current);
        u !== void 0 && (t[c] = u),
          c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !Zm.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Ed(s),
      a = Ed(i);
    if (o !== a)
      if (_d(o) && _d(a))
        for (let c = 0; c < t.length; c++) {
          const l = t[c];
          typeof l == "string" && (t[c] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) AC(t[s]) && r.push(s);
    r.length && WC(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ds[r](
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
    (s[o] = ds[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([c, l]) => {
          n.getValue(c).set(l);
        }),
      this.resolveNoneKeyframes();
  }
}
const Td = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (qn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function YC(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function JC(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Td(s, t),
    a = Td(i, t);
  return !o || !a ? !1 : YC(e) || ((n === "spring" || $l(n)) && r);
}
const eE = (e) => e !== null;
function Zo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(eE),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const tE = 40;
class _g {
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
      (this.createdAt = sn.now()),
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
      ? this.resolvedAt - this.createdAt > tE
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ZC(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = sn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: c,
      isGenerator: l,
    } = this.options;
    if (!l && !JC(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        c && c(Zo(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const dc = 2e4;
function Sg(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < dc; ) (t += n), (r = e.next(t));
  return t >= dc ? 1 / 0 : t;
}
const ke = (e, t, n) => e + (t - e) * n;
function Ea(e, t, n) {
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
function nE({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - a;
    (s = Ea(c, a, e + 1 / 3)), (i = Ea(c, a, e)), (o = Ea(c, a, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ao(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ta = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  rE = [ac, tr, Fr],
  sE = (e) => rE.find((t) => t.test(e));
function Ad(e) {
  const t = sE(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Fr && (n = nE(n)), n;
}
const Rd = (e, t) => {
    const n = Ad(e),
      r = Ad(t);
    if (!n || !r) return Ao(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = Ta(n.red, r.red, i)),
      (s.green = Ta(n.green, r.green, i)),
      (s.blue = Ta(n.blue, r.blue, i)),
      (s.alpha = ke(n.alpha, r.alpha, i)),
      tr.transform(s)
    );
  },
  iE = (e, t) => (n) => t(e(n)),
  Ri = (...e) => e.reduce(iE),
  fc = new Set(["none", "hidden"]);
function oE(e, t) {
  return fc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function aE(e, t) {
  return (n) => ke(e, t, n);
}
function Ql(e) {
  return typeof e == "number"
    ? aE
    : typeof e == "string"
    ? kl(e)
      ? Ao
      : et.test(e)
      ? Rd
      : uE
    : Array.isArray(e)
    ? Cg
    : typeof e == "object"
    ? et.test(e)
      ? Rd
      : cE
    : Ao;
}
function Cg(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => Ql(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function cE(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Ql(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function lE(e, t) {
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
const uE = (e, t) => {
  const n = qn.createTransformer(t),
    r = ui(e),
    s = ui(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (fc.has(e) && !s.values.length) || (fc.has(t) && !r.values.length)
      ? oE(e, t)
      : Ri(Cg(lE(r, s), s.values), n)
    : Ao(e, t);
};
function Eg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ke(e, t, n)
    : Ql(e)(e, t);
}
const dE = 5;
function Tg(e, t, n) {
  const r = Math.max(t - dE, 0);
  return Km(n - e(r), t - r);
}
const Ne = {
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
  Pd = 0.001;
function fE({
  duration: e = Ne.duration,
  bounce: t = Ne.bounce,
  velocity: n = Ne.velocity,
  mass: r = Ne.mass,
}) {
  let s,
    i,
    o = 1 - t;
  (o = _n(Ne.minDamping, Ne.maxDamping, o)),
    (e = _n(Ne.minDuration, Ne.maxDuration, vn(e))),
    o < 1
      ? ((s = (l) => {
          const u = l * o,
            d = u * e,
            f = u - n,
            m = hc(l, o),
            g = Math.exp(-d);
          return Pd - (f / m) * g;
        }),
        (i = (l) => {
          const d = l * o * e,
            f = d * n + n,
            m = Math.pow(o, 2) * Math.pow(l, 2) * e,
            g = Math.exp(-d),
            h = hc(Math.pow(l, 2), o);
          return ((-s(l) + Pd > 0 ? -1 : 1) * ((f - m) * g)) / h;
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
    c = pE(s, i, a);
  if (((e = yn(e)), isNaN(c)))
    return { stiffness: Ne.stiffness, damping: Ne.damping, duration: e };
  {
    const l = Math.pow(c, 2) * r;
    return { stiffness: l, damping: o * 2 * Math.sqrt(r * l), duration: e };
  }
}
const hE = 12;
function pE(e, t, n) {
  let r = n;
  for (let s = 1; s < hE; s++) r = r - e(r) / t(r);
  return r;
}
function hc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mE = ["duration", "bounce"],
  gE = ["stiffness", "damping", "mass"];
function kd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function yE(e) {
  let t = {
    velocity: Ne.velocity,
    stiffness: Ne.stiffness,
    damping: Ne.damping,
    mass: Ne.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!kd(e, gE) && kd(e, mE))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * _n(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: Ne.mass, stiffness: s, damping: i };
    } else {
      const n = fE(e);
      (t = { ...t, ...n, mass: Ne.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Ag(e = Ne.visualDuration, t = Ne.bounce) {
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
    } = yE({ ...n, velocity: -vn(n.velocity || 0) }),
    g = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    y = o - i,
    b = vn(Math.sqrt(c / u)),
    x = Math.abs(y) < 5;
  r || (r = x ? Ne.restSpeed.granular : Ne.restSpeed.default),
    s || (s = x ? Ne.restDelta.granular : Ne.restDelta.default);
  let w;
  if (h < 1) {
    const _ = hc(b, h);
    w = (P) => {
      const T = Math.exp(-h * b * P);
      return (
        o - T * (((g + h * b * y) / _) * Math.sin(_ * P) + y * Math.cos(_ * P))
      );
    };
  } else if (h === 1) w = (_) => o - Math.exp(-b * _) * (y + (g + b * y) * _);
  else {
    const _ = b * Math.sqrt(h * h - 1);
    w = (P) => {
      const T = Math.exp(-h * b * P),
        A = Math.min(_ * P, 300);
      return (
        o - (T * ((g + h * b * y) * Math.sinh(A) + _ * y * Math.cosh(A))) / _
      );
    };
  }
  const C = {
    calculatedDuration: (m && d) || null,
    next: (_) => {
      const P = w(_);
      if (m) a.done = _ >= d;
      else {
        let T = 0;
        h < 1 && (T = _ === 0 ? yn(g) : Tg(w, _, P));
        const A = Math.abs(T) <= r,
          j = Math.abs(o - P) <= s;
        a.done = A && j;
      }
      return (a.value = a.done ? o : P), a;
    },
    toString: () => {
      const _ = Math.min(Sg(C), dc),
        P = Xm((T) => C.next(_ * T).value, _, 30);
      return _ + "ms " + P;
    },
  };
  return C;
}
function Od({
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
    m = (A) => (a !== void 0 && A < a) || (c !== void 0 && A > c),
    g = (A) =>
      a === void 0
        ? c
        : c === void 0 || Math.abs(a - A) < Math.abs(c - A)
        ? a
        : c;
  let h = n * t;
  const y = d + h,
    b = o === void 0 ? y : o(y);
  b !== y && (h = b - d);
  const x = (A) => -h * Math.exp(-A / r),
    w = (A) => b + x(A),
    C = (A) => {
      const j = x(A),
        M = w(A);
      (f.done = Math.abs(j) <= l), (f.value = f.done ? b : M);
    };
  let _, P;
  const T = (A) => {
    m(f.value) &&
      ((_ = A),
      (P = Ag({
        keyframes: [f.value, g(f.value)],
        velocity: Tg(w, A, f.value),
        damping: s,
        stiffness: i,
        restDelta: l,
        restSpeed: u,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let j = !1;
        return (
          !P && _ === void 0 && ((j = !0), C(A), T(A)),
          _ !== void 0 && A >= _ ? P.next(A - _) : (!j && C(A), f)
        );
      },
    }
  );
}
const vE = Ai(0.42, 0, 1, 1),
  bE = Ai(0, 0, 0.58, 1),
  Rg = Ai(0.42, 0, 0.58, 1),
  xE = (e) => Array.isArray(e) && typeof e[0] != "number",
  jd = {
    linear: bt,
    easeIn: vE,
    easeInOut: Rg,
    easeOut: bE,
    circIn: Hl,
    circInOut: ag,
    circOut: og,
    backIn: Wl,
    backInOut: sg,
    backOut: rg,
    anticipate: ig,
  },
  Nd = (e) => {
    if (zl(e)) {
      rc(e.length === 4);
      const [t, n, r, s] = e;
      return Ai(t, n, r, s);
    } else if (typeof e == "string") return rc(jd[e] !== void 0), jd[e];
    return e;
  };
function wE(e, t, n) {
  const r = [],
    s = n || Eg,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[o] || bt : t;
      a = Ri(c, a);
    }
    r.push(a);
  }
  return r;
}
function _E(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((rc(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = wE(t, r, s),
    c = a.length,
    l = (u) => {
      if (o && u < e[0]) return t[0];
      let d = 0;
      if (c > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = us(e[d], e[d + 1], u);
      return a[d](f);
    };
  return n ? (u) => l(_n(e[0], e[i - 1], u)) : l;
}
function SE(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = us(0, t, r);
    e.push(ke(n, 1, s));
  }
}
function CE(e) {
  const t = [0];
  return SE(t, e.length - 1), t;
}
function EE(e, t) {
  return e.map((n) => n * t);
}
function TE(e, t) {
  return e.map(() => t || Rg).splice(0, e.length - 1);
}
function Ro({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = xE(r) ? r.map(Nd) : Nd(r),
    i = { done: !1, value: t[0] },
    o = EE(n && n.length === t.length ? n : CE(t), e),
    a = _E(o, t, { ease: Array.isArray(s) ? s : TE(t, s) });
  return {
    calculatedDuration: e,
    next: (c) => ((i.value = a(c)), (i.done = c >= e), i),
  };
}
const AE = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ae.update(t, !0),
      stop: () => Hn(t),
      now: () => (Ze.isProcessing ? Ze.timestamp : sn.now()),
    };
  },
  RE = { decay: Od, inertia: Od, tween: Ro, keyframes: Ro, spring: Ag },
  PE = (e) => e / 100;
class Xl extends _g {
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
      o = (s == null ? void 0 : s.KeyframeResolver) || Kl,
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
      a = $l(n) ? n : RE[n] || Ro;
    let c, l;
    a !== Ro &&
      typeof t[0] != "number" &&
      ((c = Ri(PE, Eg(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (l = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = Sg(u));
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
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
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
      const A = Math.min(this.currentTime, u) / d;
      let j = Math.floor(A),
        M = A % 1;
      !M && A >= 1 && (M = 1),
        M === 1 && j--,
        (j = Math.min(j, m + 1)),
        !!(j % 2) &&
          (g === "reverse"
            ? ((M = 1 - M), h && (M -= h / d))
            : g === "mirror" && (C = o)),
        (w = _n(0, 1, M) * d);
    }
    const _ = x ? { done: !1, value: c[0] } : C.next(w);
    a && (_.value = a(_.value));
    let { done: P } = _;
    !x &&
      l !== null &&
      (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      T && s !== void 0 && (_.value = Zo(c, this.options, s)),
      y && y(_.value),
      T && this.finish(),
      _
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? vn(t.calculatedDuration) : 0;
  }
  get time() {
    return vn(this.currentTime);
  }
  set time(t) {
    (t = yn(t)),
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
    (this.playbackSpeed = t), n && (this.time = vn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = AE, onPlay: n, startTime: r } = this.options;
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
const kE = new Set(["opacity", "clipPath", "filter", "transform"]);
function OE(
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
  const u = Jm(a, s);
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
const jE = Ul(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Po = 10,
  NE = 2e4;
function DE(e) {
  return $l(e.type) || e.type === "spring" || !Ym(e.ease);
}
function ME(e, t) {
  const n = new Xl({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < NE; ) (r = n.sample(i)), s.push(r.value), (i += Po);
  return { times: void 0, keyframes: s, duration: i - Po, ease: "linear" };
}
const Pg = { anticipate: ig, backInOut: sg, circInOut: ag };
function FE(e) {
  return e in Pg;
}
class Dd extends _g {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    (this.resolver = new wg(
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
      (typeof i == "string" && To() && FE(i) && (i = Pg[i]), DE(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: m,
          element: g,
          ...h
        } = this.options,
        y = ME(t, h);
      (t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = y.duration),
        (s = y.times),
        (i = y.ease),
        (o = "keyframes");
    }
    const u = OE(a.owner.current, c, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (u.startTime = l ?? this.calcStartTime()),
      this.pendingTimeline
        ? (xd(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Zo(t, this.options, n)),
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
    return vn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return vn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = yn(t);
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
      if (!n) return bt;
      const { animation: r } = n;
      xd(r, t);
    }
    return bt;
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
        g = new Xl({
          ...m,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        h = yn(this.time);
      l.setWithVelocity(g.sample(h - Po).value, g.sample(h).value, Po);
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
      jE() &&
      r &&
      kE.has(r) &&
      !c &&
      !l &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const IE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  LE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  VE = { type: "keyframes", duration: 0.8 },
  BE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  UE = (e, { keyframes: t }) =>
    t.length > 2
      ? VE
      : Rr.has(e)
      ? e.startsWith("scale")
        ? LE(t[1])
        : IE
      : BE;
function $E({
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
const Yl =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = Il(r, e) || {},
      c = a.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - yn(c);
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
    $E(a) || (u = { ...u, ...UE(e, u) }),
      u.duration && (u.duration = yn(u.duration)),
      u.repeatDelay && (u.repeatDelay = yn(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = Zo(u.keyframes, a);
      if (f !== void 0)
        return (
          Ae.update(() => {
            u.onUpdate(f), u.onComplete();
          }),
          new wC([])
        );
    }
    return !i && Dd.supports(u) ? new Dd(u) : new Xl(u);
  };
function zE({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function kg(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
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
    if (m === void 0 || (u && zE(u, d))) continue;
    const g = { delay: n, ...Il(o || {}, d) };
    let h = !1;
    if (window.MotionHandoffAnimation) {
      const b = Qm(e);
      if (b) {
        const x = window.MotionHandoffAnimation(b, d, Ae);
        x !== null && ((g.startTime = x), (h = !0));
      }
    }
    ic(e, d),
      f.start(
        Yl(d, f, m, e.shouldReduceMotion && Zm.has(d) ? { type: !1 } : g, e, h)
      );
    const y = f.animation;
    y && l.push(y);
  }
  return (
    a &&
      Promise.all(l).then(() => {
        Ae.update(() => {
          a && yC(e, a);
        });
      }),
    l
  );
}
function pc(e, t, n = {}) {
  var r;
  const s = Go(
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
  const o = s ? () => Promise.all(kg(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return WE(e, t, u + l, d, f, n);
          }
        : () => Promise.resolve(),
    { when: c } = i;
  if (c) {
    const [l, u] = c === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function WE(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    c = s === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return (
    Array.from(e.variantChildren)
      .sort(HE)
      .forEach((l, u) => {
        l.notify("AnimationStart", t),
          o.push(
            pc(l, t, { ...i, delay: n + c(u) }).then(() =>
              l.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function HE(e, t) {
  return e.sortNodePosition(t);
}
function qE(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => pc(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = pc(e, t, n);
  else {
    const s = typeof t == "function" ? Go(e, t, n.custom) : t;
    r = Promise.all(kg(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const GE = El.length;
function Og(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Og(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < GE; n++) {
    const r = El[n],
      s = e.props[r];
    (ai(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const ZE = [...Cl].reverse(),
  KE = Cl.length;
function QE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => qE(e, n, r)));
}
function XE(e) {
  let t = QE(e),
    n = Md(),
    r = !0;
  const s = (c) => (l, u) => {
    var d;
    const f = Go(
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
      u = Og(e.parent) || {},
      d = [],
      f = new Set();
    let m = {},
      g = 1 / 0;
    for (let y = 0; y < KE; y++) {
      const b = ZE[y],
        x = n[b],
        w = l[b] !== void 0 ? l[b] : u[b],
        C = ai(w),
        _ = b === c ? x.isActive : null;
      _ === !1 && (g = y);
      let P = w === u[b] && w !== l[b] && C;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (x.protectedKeys = { ...m }),
        (!x.isActive && _ === null) ||
          (!w && !x.prevProp) ||
          Ho(w) ||
          typeof w == "boolean")
      )
        continue;
      const T = YE(x.prevProp, w);
      let A = T || (b === c && x.isActive && !P && C) || (y > g && C),
        j = !1;
      const M = Array.isArray(w) ? w : [w];
      let V = M.reduce(s(b), {});
      _ === !1 && (V = {});
      const { prevResolvedValues: N = {} } = x,
        B = { ...N, ...V },
        W = (G) => {
          (A = !0),
            f.has(G) && ((j = !0), f.delete(G)),
            (x.needsAnimating[G] = !0);
          const q = e.getValue(G);
          q && (q.liveStyle = !1);
        };
      for (const G in B) {
        const q = V[G],
          ie = N[G];
        if (m.hasOwnProperty(G)) continue;
        let ye = !1;
        sc(q) && sc(ie) ? (ye = !Gm(q, ie)) : (ye = q !== ie),
          ye
            ? q != null
              ? W(G)
              : f.add(G)
            : q !== void 0 && f.has(G)
            ? W(G)
            : (x.protectedKeys[G] = !0);
      }
      (x.prevProp = w),
        (x.prevResolvedValues = V),
        x.isActive && (m = { ...m, ...V }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          (!(P && T) || j) &&
          d.push(...M.map((G) => ({ animation: G, options: { type: b } })));
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
      (n = Md()), (r = !0);
    },
  };
}
function YE(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Gm(t, e) : !1;
}
function Xn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Md() {
  return {
    animate: Xn(!0),
    whileInView: Xn(),
    whileHover: Xn(),
    whileTap: Xn(),
    whileDrag: Xn(),
    whileFocus: Xn(),
    exit: Xn(),
  };
}
class Zn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class JE extends Zn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = XE(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ho(t) && (this.unmountControls = t.subscribe(this.node));
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
let eT = 0;
class tT extends Zn {
  constructor() {
    super(...arguments), (this.id = eT++);
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
const nT = { animation: { Feature: JE }, exit: { Feature: tT } },
  Ot = { x: !1, y: !1 };
function jg() {
  return Ot.x || Ot.y;
}
function rT(e) {
  return e === "x" || e === "y"
    ? Ot[e]
      ? null
      : ((Ot[e] = !0),
        () => {
          Ot[e] = !1;
        })
    : Ot.x || Ot.y
    ? null
    : ((Ot.x = Ot.y = !0),
      () => {
        Ot.x = Ot.y = !1;
      });
}
const Jl = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function di(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Pi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const sT = (e) => (t) => Jl(t) && e(t, Pi(t));
function Vs(e, t, n, r) {
  return di(e, t, sT(n), r);
}
const Fd = (e, t) => Math.abs(e - t);
function iT(e, t) {
  const n = Fd(e.x, t.x),
    r = Fd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ng {
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
        const d = Ra(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          m = iT(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !m) return;
        const { point: g } = d,
          { timestamp: h } = Ze;
        this.history.push({ ...g, timestamp: h });
        const { onStart: y, onMove: b } = this.handlers;
        f ||
          (y && y(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Aa(f, this.transformPagePoint)),
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
        const y = Ra(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Aa(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(d, y), g && g(d, y);
      }),
      !Jl(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = Pi(t),
      a = Aa(o, this.transformPagePoint),
      { point: c } = a,
      { timestamp: l } = Ze;
    this.history = [{ ...c, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Ra(a, this.history)),
      (this.removeListeners = Ri(
        Vs(this.contextWindow, "pointermove", this.handlePointerMove),
        Vs(this.contextWindow, "pointerup", this.handlePointerUp),
        Vs(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Hn(this.updatePoint);
  }
}
function Aa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Id(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ra({ point: e }, t) {
  return {
    point: e,
    delta: Id(e, Dg(t)),
    offset: Id(e, oT(t)),
    velocity: aT(t, 0.1),
  };
}
function oT(e) {
  return e[0];
}
function Dg(e) {
  return e[e.length - 1];
}
function aT(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = Dg(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > yn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = vn(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const Mg = 1e-4,
  cT = 1 - Mg,
  lT = 1 + Mg,
  Fg = 0.01,
  uT = 0 - Fg,
  dT = 0 + Fg;
function _t(e) {
  return e.max - e.min;
}
function fT(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ld(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ke(t.min, t.max, e.origin)),
    (e.scale = _t(n) / _t(t)),
    (e.translate = ke(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= cT && e.scale <= lT) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= uT && e.translate <= dT) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Bs(e, t, n, r) {
  Ld(e.x, t.x, n.x, r ? r.originX : void 0),
    Ld(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Vd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + _t(t));
}
function hT(e, t, n) {
  Vd(e.x, t.x, n.x), Vd(e.y, t.y, n.y);
}
function Bd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + _t(t));
}
function Us(e, t, n) {
  Bd(e.x, t.x, n.x), Bd(e.y, t.y, n.y);
}
function pT(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ke(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ke(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ud(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function mT(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: Ud(e.x, n, s), y: Ud(e.y, t, r) };
}
function $d(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function gT(e, t) {
  return { x: $d(e.x, t.x), y: $d(e.y, t.y) };
}
function yT(e, t) {
  let n = 0.5;
  const r = _t(e),
    s = _t(t);
  return (
    s > r
      ? (n = us(t.min, t.max - r, e.min))
      : r > s && (n = us(e.min, e.max - s, t.min)),
    _n(0, 1, n)
  );
}
function vT(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const mc = 0.35;
function bT(e = mc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = mc),
    { x: zd(e, "left", "right"), y: zd(e, "top", "bottom") }
  );
}
function zd(e, t, n) {
  return { min: Wd(e, t), max: Wd(e, n) };
}
function Wd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Hd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ir = () => ({ x: Hd(), y: Hd() }),
  qd = () => ({ min: 0, max: 0 }),
  Ie = () => ({ x: qd(), y: qd() });
function Et(e) {
  return [e("x"), e("y")];
}
function Ig({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function xT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function wT(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Pa(e) {
  return e === void 0 || e === 1;
}
function gc({ scale: e, scaleX: t, scaleY: n }) {
  return !Pa(e) || !Pa(t) || !Pa(n);
}
function Yn(e) {
  return (
    gc(e) ||
    Lg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Lg(e) {
  return Gd(e.x) || Gd(e.y);
}
function Gd(e) {
  return e && e !== "0%";
}
function ko(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function Zd(e, t, n, r, s) {
  return s !== void 0 && (e = ko(e, s, r)), ko(e, n, r) + t;
}
function yc(e, t = 0, n = 1, r, s) {
  (e.min = Zd(e.min, t, n, r, s)), (e.max = Zd(e.max, t, n, r, s));
}
function Vg(e, { x: t, y: n }) {
  yc(e.x, t.translate, t.scale, t.originPoint),
    yc(e.y, n.translate, n.scale, n.originPoint);
}
const Kd = 0.999999999999,
  Qd = 1.0000000000001;
function _T(e, t, n, r = !1) {
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
        Vr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Vg(e, o)),
      r && Yn(i.latestValues) && Vr(e, i.latestValues));
  }
  t.x < Qd && t.x > Kd && (t.x = 1), t.y < Qd && t.y > Kd && (t.y = 1);
}
function Lr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Xd(e, t, n, r, s = 0.5) {
  const i = ke(e.min, e.max, s);
  yc(e, t, n, i, r);
}
function Vr(e, t) {
  Xd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Xd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Bg(e, t) {
  return Ig(wT(e.getBoundingClientRect(), t));
}
function ST(e, t, n) {
  const r = Bg(e, n),
    { scroll: s } = t;
  return s && (Lr(r.x, s.offset.x), Lr(r.y, s.offset.y)), r;
}
const Ug = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  CT = new WeakMap();
class ET {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ie()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Pi(u).point);
      },
      i = (u, d) => {
        const { drag: f, dragPropagation: m, onDragStart: g } = this.getProps();
        if (
          f &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = rT(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Et((y) => {
            let b = this.getAxisMotionValue(y).get() || 0;
            if (rn.test(b)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const w = x.layout.layoutBox[y];
                w && (b = _t(w) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[y] = b;
          }),
          g && Ae.postRender(() => g(u, d)),
          ic(this.visualElement, "transform");
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
          (this.currentDirection = TT(y)),
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
        Et((u) => {
          var d;
          return (
            this.getAnimationState(u) === "paused" &&
            ((d = this.getAxisMotionValue(u).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new Ng(
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
        contextWindow: Ug(this.visualElement),
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
    if (!r || !Gi(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = pT(o, this.constraints[t], this.elastic[t])),
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
    n && Mr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = mT(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = bT(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Et((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = vT(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Mr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = ST(r, s.root, this.visualElement.getTransformPagePoint());
    let o = gT(s.layout.layoutBox, i);
    if (n) {
      const a = n(xT(o));
      (this.hasMutatedConstraints = !!a), a && (o = Ig(a));
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
      l = Et((u) => {
        if (!Gi(u, n, this.currentDirection)) return;
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
      ic(this.visualElement, t), r.start(Yl(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Et((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Et((t) => {
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
    Et((n) => {
      const { drag: r } = this.getProps();
      if (!Gi(n, r, this.currentDirection)) return;
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
    if (!Mr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Et((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[o] = yT({ min: c, max: c }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Et((o) => {
        if (!Gi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: c, max: l } = this.constraints[o];
        a.set(ke(c, l, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    CT.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Vs(t, "pointerdown", (c) => {
        const { drag: l, dragListener: u = !0 } = this.getProps();
        l && u && this.start(c);
      }),
      r = () => {
        const { dragConstraints: c } = this.getProps();
        Mr(c) && c.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      Ae.read(r);
    const o = di(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: l }) => {
          this.isDragging &&
            l &&
            (Et((u) => {
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
        dragElastic: o = mc,
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
function Gi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function TT(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class AT extends Zn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = bt),
      (this.removeListeners = bt),
      (this.controls = new ET(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || bt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Yd = (e) => (t, n) => {
  e && Ae.postRender(() => e(t, n));
};
class RT extends Zn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = bt);
  }
  onPointerDown(t) {
    this.session = new Ng(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ug(this.node),
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
      onSessionStart: Yd(t),
      onStart: Yd(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && Ae.postRender(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Vs(this.node.current, "pointerdown", (t) =>
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
const ro = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Jd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ts = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (J.test(e)) e = parseFloat(e);
        else return e;
      const n = Jd(e, t.target.x),
        r = Jd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  PT = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = qn.parse(e);
      if (s.length > 5) return r;
      const i = qn.createTransformer(e),
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
class kT extends v.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    rC(OT),
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
      (ro.hasEverUpdated = !0);
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
      Al.postRender(() => {
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
function $g(e) {
  const [t, n] = Am(),
    r = v.useContext(xl);
  return p.jsx(kT, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: v.useContext(Dm),
    isPresent: t,
    safeToRemove: n,
  });
}
const OT = {
  borderRadius: {
    ...Ts,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Ts,
  borderTopRightRadius: Ts,
  borderBottomLeftRadius: Ts,
  borderBottomRightRadius: Ts,
  boxShadow: PT,
};
function jT(e, t, n) {
  const r = rt(e) ? e : li(e);
  return r.start(Yl("", r, t, n)), r.animation;
}
function NT(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const DT = (e, t) => e.depth - t.depth;
class MT {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ll(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Vl(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(DT),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function FT(e, t) {
  const n = sn.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Hn(r), e(i - t));
    };
  return Ae.read(r, !0), () => Hn(r);
}
const zg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  IT = zg.length,
  ef = (e) => (typeof e == "string" ? parseFloat(e) : e),
  tf = (e) => typeof e == "number" || J.test(e);
function LT(e, t, n, r, s, i) {
  s
    ? ((e.opacity = ke(0, n.opacity !== void 0 ? n.opacity : 1, VT(r))),
      (e.opacityExit = ke(t.opacity !== void 0 ? t.opacity : 1, 0, BT(r))))
    : i &&
      (e.opacity = ke(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < IT; o++) {
    const a = `border${zg[o]}Radius`;
    let c = nf(t, a),
      l = nf(n, a);
    if (c === void 0 && l === void 0) continue;
    c || (c = 0),
      l || (l = 0),
      c === 0 || l === 0 || tf(c) === tf(l)
        ? ((e[a] = Math.max(ke(ef(c), ef(l), r), 0)),
          (rn.test(l) || rn.test(c)) && (e[a] += "%"))
        : (e[a] = l);
  }
  (t.rotate || n.rotate) && (e.rotate = ke(t.rotate || 0, n.rotate || 0, r));
}
function nf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const VT = Wg(0, 0.5, og),
  BT = Wg(0.5, 0.95, bt);
function Wg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(us(e, t, r)));
}
function rf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ct(e, t) {
  rf(e.x, t.x), rf(e.y, t.y);
}
function sf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function of(e, t, n, r, s) {
  return (
    (e -= t), (e = ko(e, 1 / n, r)), s !== void 0 && (e = ko(e, 1 / s, r)), e
  );
}
function UT(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (rn.test(t) &&
      ((t = parseFloat(t)), (t = ke(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ke(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = of(e.min, t, n, a, s)),
    (e.max = of(e.max, t, n, a, s));
}
function af(e, t, [n, r, s], i, o) {
  UT(e, t[n], t[r], t[s], t.scale, i, o);
}
const $T = ["x", "scaleX", "originX"],
  zT = ["y", "scaleY", "originY"];
function cf(e, t, n, r) {
  af(e.x, t, $T, n ? n.x : void 0, r ? r.x : void 0),
    af(e.y, t, zT, n ? n.y : void 0, r ? r.y : void 0);
}
function lf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Hg(e) {
  return lf(e.x) && lf(e.y);
}
function uf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function WT(e, t) {
  return uf(e.x, t.x) && uf(e.y, t.y);
}
function df(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function qg(e, t) {
  return df(e.x, t.x) && df(e.y, t.y);
}
function ff(e) {
  return _t(e.x) / _t(e.y);
}
function hf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class HT {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ll(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Vl(this.members, t),
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
function qT(e, t, n) {
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
const Jn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Os = typeof window < "u" && window.MotionDebug !== void 0,
  ka = ["", "X", "Y", "Z"],
  GT = { visibility: "hidden" },
  pf = 1e3;
let ZT = 0;
function Oa(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Gg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Qm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ae, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Gg(r);
}
function Zg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = ZT++),
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
            Os &&
              (Jn.totalNodes =
                Jn.resolvedTargetDeltas =
                Jn.recalculatedProjection =
                  0),
            this.nodes.forEach(XT),
            this.nodes.forEach(nA),
            this.nodes.forEach(rA),
            this.nodes.forEach(YT),
            Os && window.MotionDebug.record(Jn);
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
      this.root === this && (this.nodes = new MT());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Bl()),
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
      (this.isSVG = NT(o)), (this.instance = o);
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
            (d = FT(f, 250)),
            ro.hasAnimatedSinceResize &&
              ((ro.hasAnimatedSinceResize = !1), this.nodes.forEach(gf));
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
                  this.options.transition || u.getDefaultTransition() || cA,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } =
                  u.getProps(),
                x = !this.targetLayout || !qg(this.targetLayout, g),
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
                const C = { ...Il(h, "layout"), onPlay: y, onComplete: b };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || gf(this),
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
        Hn(this.updateProjection);
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
        this.nodes && this.nodes.forEach(sA),
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
          Gg(this),
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mf);
        return;
      }
      this.isUpdating || this.nodes.forEach(eA),
        (this.isUpdating = !1),
        this.nodes.forEach(tA),
        this.nodes.forEach(KT),
        this.nodes.forEach(QT),
        this.clearAllSnapshots();
      const a = sn.now();
      (Ze.delta = _n(0, 1e3 / 60, a - Ze.timestamp)),
        (Ze.timestamp = a),
        (Ze.isProcessing = !0),
        Sa.update.process(Ze),
        Sa.preRender.process(Ze),
        Sa.render.process(Ze),
        (Ze.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Al.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(JT), this.sharedNodes.forEach(iA);
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
        (this.layoutCorrected = Ie()),
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
        a = this.projectionDelta && !Hg(this.projectionDelta),
        c = this.getTransformTemplate(),
        l = c ? c(this.latestValues, "") : void 0,
        u = l !== this.prevTransformTemplateValue;
      o &&
        (a || Yn(this.latestValues) || u) &&
        (s(this.instance, l),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return (
        o && (c = this.removeTransform(c)),
        lA(c),
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
      if (!a) return Ie();
      const c = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(uA)
        )
      ) {
        const { scroll: u } = this.root;
        u && (Lr(c.x, u.offset.x), Lr(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(o) {
      var a;
      const c = Ie();
      if (
        (Ct(c, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return c;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: d, options: f } = u;
        u !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Ct(c, o), Lr(c.x, d.offset.x), Lr(c.y, d.offset.y));
      }
      return c;
    }
    applyTransform(o, a = !1) {
      const c = Ie();
      Ct(c, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Vr(c, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Yn(u.latestValues) && Vr(c, u.latestValues);
      }
      return Yn(this.latestValues) && Vr(c, this.latestValues), c;
    }
    removeTransform(o) {
      const a = Ie();
      Ct(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !Yn(l.latestValues)) continue;
        gc(l.latestValues) && l.updateSnapshot();
        const u = Ie(),
          d = l.measurePageBox();
        Ct(u, d),
          cf(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return Yn(this.latestValues) && cf(a, this.latestValues), a;
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
        this.relativeParent.resolvedRelativeTargetAt !== Ze.timestamp &&
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
          ((this.resolvedRelativeTargetAt = Ze.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ie()),
              (this.relativeTargetOrigin = Ie()),
              Us(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Ct(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ie()), (this.targetWithTransforms = Ie())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                hT(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ct(this.target, this.layout.layoutBox),
                Vg(this.target, this.targetDelta))
              : Ct(this.target, this.layout.layoutBox),
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
                (this.relativeTarget = Ie()),
                (this.relativeTargetOrigin = Ie()),
                Us(this.relativeTargetOrigin, this.target, m.target),
                Ct(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Os && Jn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          gc(this.parent.latestValues) ||
          Lg(this.parent.latestValues)
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
        this.resolvedRelativeTargetAt === Ze.timestamp && (l = !1),
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
      Ct(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      _T(this.layoutCorrected, this.treeScale, this.path, c),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ie()));
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (sf(this.prevProjectionDelta.x, this.projectionDelta.x),
          sf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Bs(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== m ||
          !hf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)),
        Os && Jn.recalculatedProjection++;
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
      (this.prevProjectionDelta = Ir()),
        (this.projectionDelta = Ir()),
        (this.projectionDeltaWithTransform = Ir());
    }
    setAnimationOrigin(o, a = !1) {
      const c = this.snapshot,
        l = c ? c.latestValues : {},
        u = { ...this.latestValues },
        d = Ir();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ie(),
        m = c ? c.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        h = m !== g,
        y = this.getStack(),
        b = !y || y.members.length <= 1,
        x = !!(h && !b && this.options.crossfade === !0 && !this.path.some(aA));
      this.animationProgress = 0;
      let w;
      (this.mixTargetDelta = (C) => {
        const _ = C / 1e3;
        yf(d.x, o.x, _),
          yf(d.y, o.y, _),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Us(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            oA(this.relativeTarget, this.relativeTargetOrigin, f, _),
            w && WT(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = Ie()),
            Ct(w, this.relativeTarget)),
          h &&
            ((this.animationValues = u), LT(u, l, this.latestValues, _, x, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = _);
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
          (Hn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ae.update(() => {
          (ro.hasAnimatedSinceResize = !0),
            (this.currentAnimation = jT(0, pf, {
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
        (this.mixTargetDelta && this.mixTargetDelta(pf),
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
          Kg(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          c = this.target || Ie();
          const d = _t(this.layout.layoutBox.x);
          (c.x.min = o.target.x.min), (c.x.max = c.x.min + d);
          const f = _t(this.layout.layoutBox.y);
          (c.y.min = o.target.y.min), (c.y.max = c.y.min + f);
        }
        Ct(a, c),
          Vr(a, u),
          Bs(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new HT()),
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
      c.z && Oa("z", o, l, this.animationValues);
      for (let u = 0; u < ka.length; u++)
        Oa(`rotate${ka[u]}`, o, l, this.animationValues),
          Oa(`skew${ka[u]}`, o, l, this.animationValues);
      o.render();
      for (const u in l)
        o.setStaticValue(u, l[u]),
          this.animationValues && (this.animationValues[u] = l[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, c;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return GT;
      const l = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ""),
          (l.pointerEvents = to(o == null ? void 0 : o.pointerEvents) || ""),
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
            (h.pointerEvents = to(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Yn(this.latestValues) &&
            ((h.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          h
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (l.transform = qT(
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
      for (const h in Eo) {
        if (f[h] === void 0) continue;
        const { correct: y, applyTo: b } = Eo[h],
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
              ? to(o == null ? void 0 : o.pointerEvents) || ""
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
        this.root.nodes.forEach(mf),
        this.root.sharedNodes.clear();
    }
  };
}
function KT(e) {
  e.updateLayout();
}
function QT(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? Et((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = _t(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : Kg(i, n.layoutBox, r) &&
        Et((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = _t(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const a = Ir();
    Bs(a, r, n.layoutBox);
    const c = Ir();
    o ? Bs(c, e.applyTransform(s, !0), n.measuredBox) : Bs(c, r, n.layoutBox);
    const l = !Hg(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const g = Ie();
          Us(g, n.layoutBox, f.layoutBox);
          const h = Ie();
          Us(h, r, m.layoutBox),
            qg(g, h) || (u = !0),
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
function XT(e) {
  Os && Jn.totalNodes++,
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
function YT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function JT(e) {
  e.clearSnapshot();
}
function mf(e) {
  e.clearMeasurements();
}
function eA(e) {
  e.isLayoutDirty = !1;
}
function tA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function gf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function nA(e) {
  e.resolveTargetDelta();
}
function rA(e) {
  e.calcProjection();
}
function sA(e) {
  e.resetSkewAndRotation();
}
function iA(e) {
  e.removeLeadSnapshot();
}
function yf(e, t, n) {
  (e.translate = ke(t.translate, 0, n)),
    (e.scale = ke(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function vf(e, t, n, r) {
  (e.min = ke(t.min, n.min, r)), (e.max = ke(t.max, n.max, r));
}
function oA(e, t, n, r) {
  vf(e.x, t.x, n.x, r), vf(e.y, t.y, n.y, r);
}
function aA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const cA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  bf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  xf = bf("applewebkit/") && !bf("chrome/") ? Math.round : bt;
function wf(e) {
  (e.min = xf(e.min)), (e.max = xf(e.max));
}
function lA(e) {
  wf(e.x), wf(e.y);
}
function Kg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !fT(ff(t), ff(n), 0.2))
  );
}
function uA(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const dA = Zg({
    attachResizeListener: (e, t) => di(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ja = { current: void 0 },
  Qg = Zg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ja.current) {
        const e = new dA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ja.current = e);
      }
      return ja.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  fA = {
    pan: { Feature: RT },
    drag: { Feature: AT, ProjectionNode: Qg, MeasureLayout: $g },
  };
function hA(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Xg(e, t) {
  const n = hA(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function _f(e) {
  return !(e.pointerType === "touch" || jg());
}
function pA(e, t, n = {}) {
  const [r, s, i] = Xg(e, n),
    o = (a) => {
      if (!_f(a)) return;
      const { target: c } = a,
        l = t(c, a);
      if (typeof l != "function" || !c) return;
      const u = (d) => {
        _f(d) && (l(d), c.removeEventListener("pointerleave", u));
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
function Sf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && Ae.postRender(() => i(t, Pi(t)));
}
class mA extends Zn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = pA(
        t,
        (n, r) => (Sf(this.node, r, "Start"), (s) => Sf(this.node, s, "End"))
      ));
  }
  unmount() {}
}
class gA extends Zn {
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
    this.unmount = Ri(
      di(this.node.current, "focus", () => this.onFocus()),
      di(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Yg = (e, t) => (t ? (e === t ? !0 : Yg(e, t.parentElement)) : !1),
  yA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function vA(e) {
  return yA.has(e.tagName) || e.tabIndex !== -1;
}
const js = new WeakSet();
function Cf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Na(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const bA = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Cf(() => {
    if (js.has(n)) return;
    Na(n, "down");
    const s = Cf(() => {
        Na(n, "up");
      }),
      i = () => Na(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ef(e) {
  return Jl(e) && !jg();
}
function xA(e, t, n = {}) {
  const [r, s, i] = Xg(e, n),
    o = (a) => {
      const c = a.currentTarget;
      if (!Ef(a) || js.has(c)) return;
      js.add(c);
      const l = t(c, a),
        u = (m, g) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!Ef(m) || !js.has(c)) &&
              (js.delete(c), typeof l == "function" && l(m, { success: g }));
        },
        d = (m) => {
          u(m, n.useGlobalTarget || Yg(c, m.target));
        },
        f = (m) => {
          u(m, !1);
        };
      window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", f, s);
    };
  return (
    r.forEach((a) => {
      !vA(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (l) => bA(l, s), s);
    }),
    i
  );
}
function Tf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && Ae.postRender(() => i(t, Pi(t)));
}
class wA extends Zn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = xA(
        t,
        (n, r) => (
          Tf(this.node, r, "Start"),
          (s, { success: i }) => Tf(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const vc = new WeakMap(),
  Da = new WeakMap(),
  _A = (e) => {
    const t = vc.get(e.target);
    t && t(e);
  },
  SA = (e) => {
    e.forEach(_A);
  };
function CA({ root: e, ...t }) {
  const n = e || document;
  Da.has(n) || Da.set(n, {});
  const r = Da.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(SA, { root: e, ...t })), r[s];
}
function EA(e, t, n) {
  const r = CA(t);
  return (
    vc.set(e, n),
    r.observe(e),
    () => {
      vc.delete(e), r.unobserve(e);
    }
  );
}
const TA = { some: 0, all: 1 };
class AA extends Zn {
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
        threshold: typeof s == "number" ? s : TA[s],
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
    return EA(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(RA(t, n)) && this.startObserver();
  }
  unmount() {}
}
function RA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const PA = {
    inView: { Feature: AA },
    tap: { Feature: wA },
    focus: { Feature: gA },
    hover: { Feature: mA },
  },
  kA = { layout: { ProjectionNode: Qg, MeasureLayout: $g } },
  bc = { current: null },
  Jg = { current: !1 };
function OA() {
  if (((Jg.current = !0), !!Sl))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (bc.current = e.matches);
      e.addListener(t), t();
    } else bc.current = !1;
}
const jA = [...xg, et, qn],
  NA = (e) => jA.find(bg(e)),
  Af = new WeakMap();
function DA(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (rt(s)) e.addValue(r, s);
    else if (rt(i)) e.addValue(r, li(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, li(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Rf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class MA {
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
      (this.KeyframeResolver = Kl),
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
        const m = sn.now();
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
      (this.isControllingVariants = qo(n)),
      (this.isVariantNode = jm(n)),
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
      Af.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Jg.current || OA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : bc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Af.delete(this.current),
      this.projection && this.projection.unmount(),
      Hn(this.notifyUpdate),
      Hn(this.render),
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
    const r = Rr.has(t),
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
    for (t in ls) {
      const n = ls[t];
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
      : Ie();
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
    for (let r = 0; r < Rf.length; r++) {
      const s = Rf[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = DA(
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
        ((r = li(n === null ? void 0 : n, { owner: this })),
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
        (typeof s == "string" && (yg(s) || cg(s))
          ? (s = parseFloat(s))
          : !NA(s) && qn.test(n) && (s = pg(t, n)),
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
      const o = Pl(
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
    return this.events[t] || (this.events[t] = new Bl()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ey extends MA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = wg);
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
function FA(e) {
  return window.getComputedStyle(e);
}
class IA extends ey {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Um);
  }
  readValueFromInstance(t, n) {
    if (Rr.has(n)) {
      const r = Zl(n);
      return (r && r.default) || 0;
    } else {
      const r = FA(t),
        s = (Lm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Bg(t, n);
  }
  build(t, n, r) {
    jl(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Fl(t, n, r);
  }
}
class LA extends ey {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ie);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Rr.has(n)) {
      const r = Zl(n);
      return (r && r.default) || 0;
    }
    return (n = $m.has(n) ? n : Tl(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Hm(t, n, r);
  }
  build(t, n, r) {
    Nl(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    zm(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = Ml(t.tagName)), super.mount(t);
  }
}
const VA = (e, t) =>
    Rl(e) ? new LA(t) : new IA(t, { allowProjection: e !== v.Fragment }),
  BA = fC({ ...nT, ...PA, ...fA, ...kA }, VA),
  hr = AS(BA);
function ty(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: UA } = Object.prototype,
  { getPrototypeOf: eu } = Object,
  Ko = ((e) => (t) => {
    const n = UA.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Wt = (e) => ((e = e.toLowerCase()), (t) => Ko(t) === e),
  Qo = (e) => (t) => typeof t === e,
  { isArray: ys } = Array,
  fi = Qo("undefined");
function $A(e) {
  return (
    e !== null &&
    !fi(e) &&
    e.constructor !== null &&
    !fi(e.constructor) &&
    xt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ny = Wt("ArrayBuffer");
function zA(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ny(e.buffer)),
    t
  );
}
const WA = Qo("string"),
  xt = Qo("function"),
  ry = Qo("number"),
  Xo = (e) => e !== null && typeof e == "object",
  HA = (e) => e === !0 || e === !1,
  so = (e) => {
    if (Ko(e) !== "object") return !1;
    const t = eu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  qA = Wt("Date"),
  GA = Wt("File"),
  ZA = Wt("Blob"),
  KA = Wt("FileList"),
  QA = (e) => Xo(e) && xt(e.pipe),
  XA = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (xt(e.append) &&
          ((t = Ko(e)) === "formdata" ||
            (t === "object" &&
              xt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  YA = Wt("URLSearchParams"),
  [JA, eR, tR, nR] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Wt
  ),
  rR = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ki(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), ys(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function sy(e, t) {
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
  iy = (e) => !fi(e) && e !== nr;
function xc() {
  const { caseless: e } = (iy(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && sy(t, s)) || s;
      so(t[i]) && so(r)
        ? (t[i] = xc(t[i], r))
        : so(r)
        ? (t[i] = xc({}, r))
        : ys(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ki(arguments[r], n);
  return t;
}
const sR = (e, t, n, { allOwnKeys: r } = {}) => (
    ki(
      t,
      (s, i) => {
        n && xt(s) ? (e[i] = ty(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  iR = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  oR = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  aR = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && eu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  cR = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  lR = (e) => {
    if (!e) return null;
    if (ys(e)) return e;
    let t = e.length;
    if (!ry(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  uR = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && eu(Uint8Array)),
  dR = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  fR = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  hR = Wt("HTMLFormElement"),
  pR = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Pf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  mR = Wt("RegExp"),
  oy = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ki(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  gR = (e) => {
    oy(e, (t, n) => {
      if (xt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (xt(r)) {
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
  yR = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return ys(e) ? r(e) : r(String(e).split(t)), n;
  },
  vR = () => {},
  bR = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ma = "abcdefghijklmnopqrstuvwxyz",
  kf = "0123456789",
  ay = { DIGIT: kf, ALPHA: Ma, ALPHA_DIGIT: Ma + Ma.toUpperCase() + kf },
  xR = (e = 16, t = ay.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function wR(e) {
  return !!(
    e &&
    xt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const _R = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Xo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = ys(r) ? [] : {};
            return (
              ki(r, (o, a) => {
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
  SR = Wt("AsyncFunction"),
  CR = (e) => e && (Xo(e) || xt(e)) && xt(e.then) && xt(e.catch),
  cy = ((e, t) =>
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
    xt(nr.postMessage)
  ),
  ER =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(nr)
      : (typeof process < "u" && process.nextTick) || cy,
  k = {
    isArray: ys,
    isArrayBuffer: ny,
    isBuffer: $A,
    isFormData: XA,
    isArrayBufferView: zA,
    isString: WA,
    isNumber: ry,
    isBoolean: HA,
    isObject: Xo,
    isPlainObject: so,
    isReadableStream: JA,
    isRequest: eR,
    isResponse: tR,
    isHeaders: nR,
    isUndefined: fi,
    isDate: qA,
    isFile: GA,
    isBlob: ZA,
    isRegExp: mR,
    isFunction: xt,
    isStream: QA,
    isURLSearchParams: YA,
    isTypedArray: uR,
    isFileList: KA,
    forEach: ki,
    merge: xc,
    extend: sR,
    trim: rR,
    stripBOM: iR,
    inherits: oR,
    toFlatObject: aR,
    kindOf: Ko,
    kindOfTest: Wt,
    endsWith: cR,
    toArray: lR,
    forEachEntry: dR,
    matchAll: fR,
    isHTMLForm: hR,
    hasOwnProperty: Pf,
    hasOwnProp: Pf,
    reduceDescriptors: oy,
    freezeMethods: gR,
    toObjectSet: yR,
    toCamelCase: pR,
    noop: vR,
    toFiniteNumber: bR,
    findKey: sy,
    global: nr,
    isContextDefined: iy,
    ALPHABET: ay,
    generateString: xR,
    isSpecCompliantForm: wR,
    toJSONObject: _R,
    isAsyncFn: SR,
    isThenable: CR,
    setImmediate: cy,
    asap: ER,
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
const ly = oe.prototype,
  uy = {};
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
  uy[e] = { value: e };
});
Object.defineProperties(oe, uy);
Object.defineProperty(ly, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, s, i) => {
  const o = Object.create(ly);
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
const TR = null;
function wc(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function dy(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Of(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = dy(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function AR(e) {
  return k.isArray(e) && !e.some(wc);
}
const RR = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Yo(e, t, n) {
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
        (k.isArray(g) && AR(g)) ||
        ((k.isFileList(g) || k.endsWith(h, "[]")) && (b = k.toArray(g)))
      )
        return (
          (h = dy(h)),
          b.forEach(function (w, C) {
            !(k.isUndefined(w) || w === null) &&
              t.append(
                o === !0 ? Of([h], C, i) : o === null ? h : h + "[]",
                l(w)
              );
          }),
          !1
        );
    }
    return wc(g) ? !0 : (t.append(Of(y, h, i), l(g)), !1);
  }
  const d = [],
    f = Object.assign(RR, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: wc,
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
function jf(e) {
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
function tu(e, t) {
  (this._pairs = []), e && Yo(e, this, t);
}
const fy = tu.prototype;
fy.append = function (t, n) {
  this._pairs.push([t, n]);
};
fy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, jf);
      }
    : jf;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function PR(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function hy(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || PR;
  k.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = k.isURLSearchParams(t) ? t.toString() : new tu(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Nf {
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
const py = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  kR = typeof URLSearchParams < "u" ? URLSearchParams : tu,
  OR = typeof FormData < "u" ? FormData : null,
  jR = typeof Blob < "u" ? Blob : null,
  NR = {
    isBrowser: !0,
    classes: { URLSearchParams: kR, FormData: OR, Blob: jR },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  nu = typeof window < "u" && typeof document < "u",
  _c = (typeof navigator == "object" && navigator) || void 0,
  DR =
    nu &&
    (!_c || ["ReactNative", "NativeScript", "NS"].indexOf(_c.product) < 0),
  MR =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  FR = (nu && window.location.href) || "http://localhost",
  IR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: nu,
        hasStandardBrowserEnv: DR,
        hasStandardBrowserWebWorkerEnv: MR,
        navigator: _c,
        origin: FR,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tt = { ...IR, ...NR };
function LR(e, t) {
  return Yo(
    e,
    new tt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return tt.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function VR(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function BR(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function my(e) {
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
          t(n, r, s[o], i) && k.isArray(s[o]) && (s[o] = BR(s[o])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, s) => {
        t(VR(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function UR(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Oi = {
  transitional: py,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = k.isObject(t);
      if ((i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return s ? JSON.stringify(my(t)) : t;
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
          return LR(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Yo(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), UR(t)) : t;
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
  env: { FormData: tt.classes.FormData, Blob: tt.classes.Blob },
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
const $R = k.toObjectSet([
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
  zR = (e) => {
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
              !(!n || (t[n] && $R[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Df = Symbol("internals");
function As(e) {
  return e && String(e).trim().toLowerCase();
}
function io(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(io) : String(e);
}
function WR(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const HR = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fa(e, t, n, r, s) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function qR(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function GR(e, t) {
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
class ht {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, c, l) {
      const u = As(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = k.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || (l === void 0 && s[d] !== !1)) &&
        (s[d || c] = io(a));
    }
    const o = (a, c) => k.forEach(a, (l, u) => i(l, u, c));
    if (k.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (k.isString(t) && (t = t.trim()) && !HR(t)) o(zR(t), n);
    else if (k.isHeaders(t)) for (const [a, c] of t.entries()) i(c, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = As(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return WR(s);
        if (k.isFunction(n)) return n.call(this, s, r);
        if (k.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = As(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Fa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = As(o)), o)) {
        const a = k.findKey(r, o);
        a && (!n || Fa(r, r[a], a, n)) && (delete r[a], (s = !0));
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
      (!t || Fa(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
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
        const a = t ? qR(i) : String(i).trim();
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
    const r = (this[Df] = this[Df] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = As(o);
      r[a] || (GR(s, o), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ht.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(ht.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(ht);
function Ia(e, t) {
  const n = this || Oi,
    r = t || n,
    s = ht.from(r.headers);
  let i = r.data;
  return (
    k.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function gy(e) {
  return !!(e && e.__CANCEL__);
}
function vs(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(vs, oe, { __CANCEL__: !0 });
function yy(e, t, n) {
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
function ZR(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function KR(e, t) {
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
function QR(e, t) {
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
const Oo = (e, t, n = 3) => {
    let r = 0;
    const s = KR(50, 250);
    return QR((i) => {
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
  Mf = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Ff =
    (e) =>
    (...t) =>
      k.asap(() => e(...t)),
  XR = tt.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, tt.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(tt.origin),
        tt.navigator && /(msie|trident)/i.test(tt.navigator.userAgent)
      )
    : () => !0,
  YR = tt.hasStandardBrowserEnv
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
function JR(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function eP(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function vy(e, t) {
  return e && !JR(t) ? eP(e, t) : t;
}
const If = (e) => (e instanceof ht ? { ...e } : e);
function wr(e, t) {
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
    headers: (l, u, d) => s(If(l), If(u), d, !0),
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
const by = (e) => {
    const t = wr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = ht.from(o)),
      (t.url = hy(vy(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
      if (tt.hasStandardBrowserEnv || tt.hasStandardBrowserWebWorkerEnv)
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
      tt.hasStandardBrowserEnv &&
      (r && k.isFunction(r) && (r = r(t)), r || (r !== !1 && XR(t.url)))
    ) {
      const l = s && i && YR.read(i);
      l && o.set(s, l);
    }
    return t;
  },
  tP = typeof XMLHttpRequest < "u",
  nP =
    tP &&
    function (e) {
      return new Promise(function (n, r) {
        const s = by(e);
        let i = s.data;
        const o = ht.from(s.headers).normalize();
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
          const w = ht.from(
              "getAllResponseHeaders" in y && y.getAllResponseHeaders()
            ),
            _ = {
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
          yy(
            function (T) {
              n(T), h();
            },
            function (T) {
              r(T), h();
            },
            _
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
            const _ = s.transitional || py;
            s.timeoutErrorMessage && (C = s.timeoutErrorMessage),
              r(
                new oe(
                  C,
                  _.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
                  e,
                  y
                )
              ),
              (y = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in y &&
            k.forEach(o.toJSON(), function (C, _) {
              y.setRequestHeader(_, C);
            }),
          k.isUndefined(s.withCredentials) ||
            (y.withCredentials = !!s.withCredentials),
          a && a !== "json" && (y.responseType = s.responseType),
          l && (([f, g] = Oo(l, !0)), y.addEventListener("progress", f)),
          c &&
            y.upload &&
            (([d, m] = Oo(c)),
            y.upload.addEventListener("progress", d),
            y.upload.addEventListener("loadend", m)),
          (s.cancelToken || s.signal) &&
            ((u = (w) => {
              y &&
                (r(!w || w.type ? new vs(null, e, y) : w),
                y.abort(),
                (y = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal &&
              (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
        const x = ZR(s.url);
        if (x && tt.protocols.indexOf(x) === -1) {
          r(new oe("Unsupported protocol " + x + ":", oe.ERR_BAD_REQUEST, e));
          return;
        }
        y.send(i || null);
      });
    },
  rP = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (l) {
        if (!s) {
          (s = !0), a();
          const u = l instanceof Error ? l : this.reason;
          r.abort(
            u instanceof oe ? u : new vs(u instanceof Error ? u.message : u)
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
  sP = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  iP = async function* (e, t) {
    for await (const n of oP(e)) yield* sP(n, t);
  },
  oP = async function* (e) {
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
  Lf = (e, t, n, r) => {
    const s = iP(e, t);
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
  Jo =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  xy = Jo && typeof ReadableStream == "function",
  aP =
    Jo &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  wy = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  cP =
    xy &&
    wy(() => {
      let e = !1;
      const t = new Request(tt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Vf = 64 * 1024,
  Sc = xy && wy(() => k.isReadableStream(new Response("").body)),
  jo = { stream: Sc && ((e) => e.body) };
Jo &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !jo[t] &&
        (jo[t] = k.isFunction(e[t])
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
const lP = async (e) => {
    if (e == null) return 0;
    if (k.isBlob(e)) return e.size;
    if (k.isSpecCompliantForm(e))
      return (
        await new Request(tt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (k.isArrayBufferView(e) || k.isArrayBuffer(e)) return e.byteLength;
    if ((k.isURLSearchParams(e) && (e = e + ""), k.isString(e)))
      return (await aP(e)).byteLength;
  },
  uP = async (e, t) => {
    const n = k.toFiniteNumber(e.getContentLength());
    return n ?? lP(t);
  },
  dP =
    Jo &&
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
      } = by(e);
      l = l ? (l + "").toLowerCase() : "text";
      let m = rP([s, i && i.toAbortSignal()], o),
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
          cP &&
          n !== "get" &&
          n !== "head" &&
          (y = await uP(u, r)) !== 0
        ) {
          let _ = new Request(t, { method: "POST", body: r, duplex: "half" }),
            P;
          if (
            (k.isFormData(r) &&
              (P = _.headers.get("content-type")) &&
              u.setContentType(P),
            _.body)
          ) {
            const [T, A] = Mf(y, Oo(Ff(c)));
            r = Lf(_.body, Vf, T, A);
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
        const w = Sc && (l === "stream" || l === "response");
        if (Sc && (a || (w && h))) {
          const _ = {};
          ["status", "statusText", "headers"].forEach((j) => {
            _[j] = x[j];
          });
          const P = k.toFiniteNumber(x.headers.get("content-length")),
            [T, A] = (a && Mf(P, Oo(Ff(a), !0))) || [];
          x = new Response(
            Lf(x.body, Vf, T, () => {
              A && A(), h && h();
            }),
            _
          );
        }
        l = l || "text";
        let C = await jo[k.findKey(jo, l) || "text"](x, e);
        return (
          !w && h && h(),
          await new Promise((_, P) => {
            yy(_, P, {
              data: C,
              headers: ht.from(x.headers),
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
  Cc = { http: TR, xhr: nP, fetch: dP };
k.forEach(Cc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Bf = (e) => `- ${e}`,
  fP = (e) => k.isFunction(e) || e === null || e === !1,
  _y = {
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
          !fP(n) && ((r = Cc[(o = String(n)).toLowerCase()]), r === void 0))
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
              i.map(Bf).join(`
`)
            : " " + Bf(i[0])
          : "as no adapter specified";
        throw new oe(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Cc,
  };
function La(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new vs(null, e);
}
function Uf(e) {
  return (
    La(e),
    (e.headers = ht.from(e.headers)),
    (e.data = Ia.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    _y
      .getAdapter(e.adapter || Oi.adapter)(e)
      .then(
        function (r) {
          return (
            La(e),
            (r.data = Ia.call(e, e.transformResponse, r)),
            (r.headers = ht.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            gy(r) ||
              (La(e),
              r &&
                r.response &&
                ((r.response.data = Ia.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = ht.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Sy = "1.7.9",
  ea = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ea[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const $f = {};
ea.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      Sy +
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
        !$f[o] &&
        (($f[o] = !0),
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
ea.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function hP(e, t, n) {
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
const oo = { assertOptions: hP, validators: ea },
  Gt = oo.validators;
class pr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Nf(), response: new Nf() });
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
      (n = wr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      oo.assertOptions(
        r,
        {
          silentJSONParsing: Gt.transitional(Gt.boolean),
          forcedJSONParsing: Gt.transitional(Gt.boolean),
          clarifyTimeoutError: Gt.transitional(Gt.boolean),
        },
        !1
      ),
      s != null &&
        (k.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : oo.assertOptions(
              s,
              { encode: Gt.function, serialize: Gt.function },
              !0
            )),
      oo.assertOptions(
        n,
        {
          baseUrl: Gt.spelling("baseURL"),
          withXsrfToken: Gt.spelling("withXSRFToken"),
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
      (n.headers = ht.concat(o, i));
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
      const g = [Uf.bind(this), void 0];
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
      u = Uf.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = l.length; d < f; ) u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = wr(this.defaults, t);
    const n = vy(t.baseURL, t.url);
    return hy(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  pr.prototype[t] = function (n, r) {
    return this.request(
      wr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        wr(a || {}, {
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
class ru {
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
        r.reason || ((r.reason = new vs(i, o, a)), n(r.reason));
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
      token: new ru(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function pP(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function mP(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const Ec = {
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
Object.entries(Ec).forEach(([e, t]) => {
  Ec[t] = e;
});
function Cy(e) {
  const t = new pr(e),
    n = ty(pr.prototype.request, t);
  return (
    k.extend(n, pr.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Cy(wr(e, s));
    }),
    n
  );
}
const Re = Cy(Oi);
Re.Axios = pr;
Re.CanceledError = vs;
Re.CancelToken = ru;
Re.isCancel = gy;
Re.VERSION = Sy;
Re.toFormData = Yo;
Re.AxiosError = oe;
Re.Cancel = Re.CanceledError;
Re.all = function (t) {
  return Promise.all(t);
};
Re.spread = pP;
Re.isAxiosError = mP;
Re.mergeConfig = wr;
Re.AxiosHeaders = ht;
Re.formToJSON = (e) => my(k.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = _y.getAdapter;
Re.HttpStatusCode = Ec;
Re.default = Re;
const gP = Ee.object({
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
  yP = {
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
var vP = "Label",
  Ey = v.forwardRef((e, t) =>
    p.jsx(De.label, {
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
Ey.displayName = vP;
var Ty = Ey;
const bP = Zc(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Ay = v.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Ty, { ref: n, className: se(bP(), e), ...t })
  );
Ay.displayName = Ty.displayName;
const xP = lw,
  Ry = v.createContext({}),
  Py = ({ ...e }) =>
    p.jsx(Ry.Provider, {
      value: { name: e.name },
      children: p.jsx(hw, { ...e }),
    }),
  ta = () => {
    const e = v.useContext(Ry),
      t = v.useContext(ky),
      { getFieldState: n, formState: r } = Ar(),
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
  ky = v.createContext({}),
  $s = v.forwardRef(({ className: e, ...t }, n) => {
    const r = v.useId();
    return p.jsx(ky.Provider, {
      value: { id: r },
      children: p.jsx("div", { ref: n, className: se("space-y-2", e), ...t }),
    });
  });
$s.displayName = "FormItem";
const zs = v.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = ta();
  return p.jsx(Ay, {
    ref: n,
    className: se(r && "text-destructive", e),
    htmlFor: s,
    ...t,
  });
});
zs.displayName = "FormLabel";
const Ws = v.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: i,
  } = ta();
  return p.jsx(In, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${s} ${i}` : `${s}`,
    "aria-invalid": !!n,
    ...e,
  });
});
Ws.displayName = "FormControl";
const wP = v.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ta();
  return p.jsx("p", {
    ref: n,
    id: r,
    className: se("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
wP.displayName = "FormDescription";
const Oy = v.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: s, formMessageId: i } = ta(),
    o = s ? String(s == null ? void 0 : s.message) : t;
  return o
    ? p.jsx("p", {
        ref: r,
        id: i,
        className: se("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: o,
      })
    : null;
});
Oy.displayName = "FormMessage";
function _P(e) {
  const t = e + "CollectionProvider",
    [n, r] = Er(t),
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
        x = qe(g, b.collectionRef);
      return p.jsx(In, { ref: x, children: y });
    });
  c.displayName = a;
  const l = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    d = fe.forwardRef((m, g) => {
      const { scope: h, children: y, ...b } = m,
        x = fe.useRef(null),
        w = qe(g, x),
        C = i(l, h);
      return (
        fe.useEffect(
          () => (
            C.itemMap.set(x, { ref: x, ...b }), () => void C.itemMap.delete(x)
          )
        ),
        p.jsx(In, { [u]: "", ref: w, children: y })
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
        (C, _) => b.indexOf(C.ref.current) - b.indexOf(_.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: o, Slot: c, ItemSlot: d }, f, r];
}
var SP = v.createContext(void 0);
function jy(e) {
  const t = v.useContext(SP);
  return e || t || "ltr";
}
var Va = "rovingFocusGroup.onEntryFocus",
  CP = { bubbles: !1, cancelable: !0 },
  na = "RovingFocusGroup",
  [Tc, Ny, EP] = _P(na),
  [TP, Dy] = Er(na, [EP]),
  [AP, RP] = TP(na),
  My = v.forwardRef((e, t) =>
    p.jsx(Tc.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: p.jsx(Tc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(PP, { ...e, ref: t }),
      }),
    })
  );
My.displayName = na;
var PP = v.forwardRef((e, t) => {
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
      m = qe(t, f),
      g = jy(i),
      [h = null, y] = Fo({ prop: o, defaultProp: a, onChange: c }),
      [b, x] = v.useState(!1),
      w = Vt(l),
      C = Ny(n),
      _ = v.useRef(!1),
      [P, T] = v.useState(0);
    return (
      v.useEffect(() => {
        const A = f.current;
        if (A)
          return A.addEventListener(Va, w), () => A.removeEventListener(Va, w);
      }, [w]),
      p.jsx(AP, {
        scope: n,
        orientation: r,
        dir: g,
        loop: s,
        currentTabStopId: h,
        onItemFocus: v.useCallback((A) => y(A), [y]),
        onItemShiftTab: v.useCallback(() => x(!0), []),
        onFocusableItemAdd: v.useCallback(() => T((A) => A + 1), []),
        onFocusableItemRemove: v.useCallback(() => T((A) => A - 1), []),
        children: p.jsx(De.div, {
          tabIndex: b || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: Te(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: Te(e.onFocus, (A) => {
            const j = !_.current;
            if (A.target === A.currentTarget && j && !b) {
              const M = new CustomEvent(Va, CP);
              if ((A.currentTarget.dispatchEvent(M), !M.defaultPrevented)) {
                const V = C().filter((Q) => Q.focusable),
                  N = V.find((Q) => Q.active),
                  B = V.find((Q) => Q.id === h),
                  ee = [N, B, ...V].filter(Boolean).map((Q) => Q.ref.current);
                Ly(ee, u);
              }
            }
            _.current = !1;
          }),
          onBlur: Te(e.onBlur, () => x(!1)),
        }),
      })
    );
  }),
  Fy = "RovingFocusGroupItem",
  Iy = v.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: s = !1,
        tabStopId: i,
        ...o
      } = e,
      a = Ms(),
      c = i || a,
      l = RP(Fy, n),
      u = l.currentTabStopId === c,
      d = Ny(n),
      { onFocusableItemAdd: f, onFocusableItemRemove: m } = l;
    return (
      v.useEffect(() => {
        if (r) return f(), () => m();
      }, [r, f, m]),
      p.jsx(Tc.ItemSlot, {
        scope: n,
        id: c,
        focusable: r,
        active: s,
        children: p.jsx(De.span, {
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
            const h = jP(g, l.orientation, l.dir);
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
                b = l.loop ? NP(b, x + 1) : b.slice(x + 1);
              }
              setTimeout(() => Ly(b));
            }
          }),
        }),
      })
    );
  });
Iy.displayName = Fy;
var kP = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function OP(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function jP(e, t, n) {
  const r = OP(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return kP[r];
}
function Ly(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function NP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var DP = My,
  MP = Iy;
function FP(e) {
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
var su = "Radio",
  [IP, Vy] = Er(su),
  [LP, VP] = IP(su),
  By = v.forwardRef((e, t) => {
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
      m = qe(t, (y) => f(y)),
      g = v.useRef(!1),
      h = d ? l || !!d.closest("form") : !0;
    return p.jsxs(LP, {
      scope: n,
      checked: s,
      disabled: o,
      children: [
        p.jsx(De.button, {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": zy(s),
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
          p.jsx(BP, {
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
By.displayName = su;
var Uy = "RadioIndicator",
  $y = v.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...s } = e,
      i = VP(Uy, n);
    return p.jsx(Tr, {
      present: r || i.checked,
      children: p.jsx(De.span, {
        "data-state": zy(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...s,
        ref: t,
      }),
    });
  });
$y.displayName = Uy;
var BP = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...s } = e,
    i = v.useRef(null),
    o = FP(n),
    a = tm(t);
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
function zy(e) {
  return e ? "checked" : "unchecked";
}
var UP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  iu = "RadioGroup",
  [$P, A1] = Er(iu, [Dy, Vy]),
  Wy = Dy(),
  Hy = Vy(),
  [zP, WP] = $P(iu),
  qy = v.forwardRef((e, t) => {
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
      m = Wy(n),
      g = jy(l),
      [h, y] = Fo({ prop: i, defaultProp: s, onChange: d });
    return p.jsx(zP, {
      scope: n,
      name: r,
      required: o,
      disabled: a,
      value: h,
      onValueChange: y,
      children: p.jsx(DP, {
        asChild: !0,
        ...m,
        orientation: c,
        dir: g,
        loop: u,
        children: p.jsx(De.div, {
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
qy.displayName = iu;
var Gy = "RadioGroupItem",
  Zy = v.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...s } = e,
      i = WP(Gy, n),
      o = i.disabled || r,
      a = Wy(n),
      c = Hy(n),
      l = v.useRef(null),
      u = qe(t, l),
      d = i.value === s.value,
      f = v.useRef(!1);
    return (
      v.useEffect(() => {
        const m = (h) => {
            UP.includes(h.key) && (f.current = !0);
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
      p.jsx(MP, {
        asChild: !0,
        ...a,
        focusable: !o,
        active: d,
        children: p.jsx(By, {
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
Zy.displayName = Gy;
var HP = "RadioGroupIndicator",
  qP = v.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      s = Hy(n);
    return p.jsx($y, { ...s, ...r, ref: t });
  });
qP.displayName = HP;
var Ky = qy,
  Qy = Zy;
const Xy = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Ky, { className: se("grid gap-2", e), ...t, ref: n })
);
Xy.displayName = Ky.displayName;
const Ac = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Qy, {
    ref: n,
    className: se(
      t.checked
        ? "border-primary after:bg-opacity-1"
        : "border-on_surface bg-transparent after:bg-opacity-0",
      "size-5 rounded-full border-[2px] after:size-[9px] after:bg-primary before:scale-0  hover:before:scale-100 before:size-10 before:rounded-full before:transition-all before:absolute before:-top-3 before:-left-3 before:bg-on_surface/[8%] duration-300 after:rounded-full flex relative items-center justify-center text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
  })
);
Ac.displayName = Qy.displayName;
const fn = [
    {
      h2: "Информация об экспоненте:",
      data: [
        { label: "Название компании/организации" },
        { label: "Имя представителя" },
        { label: "Название должности/позиция" },
        { label: "Количество участников" },
        { label: "Страна" },
        { label: "E-mail адрес" },
        { label: "Номер телефона" },
        { label: "Вебсайт" },
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
        { label: "E-mail address" },
        { label: "Phone number" },
        { label: "Website" },
      ],
    },
  ],
  En = [
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
  kt = [
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
  GP = ({ handleNext: e }) => {
    const { control: t, formState: n } = Ar(),
      r = Ge((s) => s.lang);
    return p.jsxs(hr.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, y: "100%", transition: { duration: 0.2 } },
      className: "w-full",
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: fn[Y(r)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            p.jsx(Py, {
              defaultValue: 1,
              control: t,
              name: "type",
              render: ({ field: s }) =>
                p.jsxs($s, {
                  className: "space-y-3",
                  children: [
                    p.jsx(zs, {
                      className: "text-xl",
                      children: r === nt.RU ? "Тип:" : "Type:",
                    }),
                    p.jsx(Ws, {
                      children: p.jsxs(Xy, {
                        onValueChange: s.onChange,
                        defaultValue: s.value,
                        className: "flex flex-col space-y-4",
                        children: [
                          p.jsxs($s, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              p.jsx(Ws, {
                                children: p.jsx(Ac, {
                                  value: "B2B",
                                  checked: s.value === "B2B",
                                }),
                              }),
                              p.jsx(zs, {
                                className: "text-base",
                                children: "B2B",
                              }),
                            ],
                          }),
                          p.jsxs($s, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              p.jsx(Ws, {
                                children: p.jsx(Ac, {
                                  value: "B2G",
                                  checked: s.value === "B2G",
                                }),
                              }),
                              p.jsx(zs, {
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
            p.jsx(Ve, {
              control: t,
              name: "company_name",
              error: n.errors.company_name,
              placeholder: "",
              label: fn[Y(r)].data[0].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "representative_name",
              error: n.errors.representative_name,
              placeholder: "",
              label: fn[Y(r)].data[1].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "job_title",
              error: n.errors.job_title,
              placeholder: "",
              label: fn[Y(r)].data[2].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "participants_number",
              error: n.errors.participants_number,
              placeholder: "",
              label: fn[Y(r)].data[3].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "country",
              error: n.errors.country,
              placeholder: "",
              label: fn[Y(r)].data[4].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "email_address",
              error: n.errors.email_address,
              placeholder: "",
              label: fn[Y(r)].data[5].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "phone_number",
              error: n.errors.phone_number,
              placeholder: "",
              label: fn[Y(r)].data[6].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "website",
              placeholder: "",
              label: fn[Y(r)].data[7].label,
            }),
          ],
        }),
        p.jsx(Qe, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: r === nt.RU ? "Далее" : "Next",
        }),
      ],
    });
  },
  ZP = ({ handleNext: e }) => {
    const { control: t, formState: n } = Ar(),
      r = Ge((s) => s.lang);
    return p.jsxs(hr.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      exit: { opacity: 0, y: 100 },
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: En[Y(r)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            p.jsx(Ve, {
              control: t,
              name: "meeting_objective",
              error: n.errors.meeting_objective,
              placeholder: "",
              label: En[Y(r)].data[0].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "proposal_description",
              error: n.errors.proposal_description,
              placeholder: "",
              label: En[Y(r)].data[1].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "government_agency",
              error: n.errors.government_agency,
              placeholder: "",
              label: En[Y(r)].data[2].label,
            }),
            p.jsx("h2", { className: "h2 mt-4", children: En[Y(r)].secondH2 }),
            p.jsx(Ve, {
              control: t,
              name: "sector_industry",
              error: n.errors.sector_industry,
              placeholder: "",
              label: En[Y(r)].data[3].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "key_services",
              error: n.errors.key_services,
              placeholder: "",
              label: En[Y(r)].data[4].label,
            }),
            p.jsx(Ve, {
              control: t,
              name: "government_experience",
              error: n.errors.government_experience,
              placeholder: "",
              label: En[Y(r)].data[5].label,
            }),
          ],
        }),
        p.jsx(Qe, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: r === nt.RU ? "Далее" : "Next",
        }),
      ],
    });
  },
  Rc = v.forwardRef(({ className: e, type: t, ...n }, r) =>
    t !== "file"
      ? p.jsx("input", {
          type: t,
          className: se(
            "flex h-14 rounded-[2px] border p-4 focus:border-[3px] focus:outline-none focus:border-primary transition-all hover:border-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
              className: se(
                "h-9 absolute top-0 left-0 !cursor-pointer opacity-0 z-20 size-full"
              ),
              ...n,
            }),
            p.jsxs("div", {
              className:
                "absolute rounded-[2px] cursor-pointer size-full flex items-center gap-4 px-3 py-2.5 top-0 left-0 bg-secondary_container",
              children: [
                p.jsx(gb, { className: "cursor-pointer", size: 16 }),
                " Upload file",
              ],
            }),
          ],
        })
  );
Rc.displayName = "Input";
const Yy = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx("textarea", {
    className: se(
      "flex rounded-[2px] resize-none  border p-4 focus:border-[3px] focus:outline-none focus:border-primary transition-all hover:border-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
Yy.displayName = "Textarea";
const Ve = ({
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
    p.jsx(Py, {
      control: e,
      name: t,
      render: ({ field: m }) =>
        p.jsxs($s, {
          className: se(o, "flex flex-col w-full relative"),
          children: [
            p.jsx(zs, {
              className: se(
                "text-xl",
                f && "!text-on_primary",
                l ? "text-on_surface" : "text-on_surface_v"
              ),
              children: n,
            }),
            p.jsx(Ws, {
              children: p.jsx(p.Fragment, {
                children: c
                  ? p.jsx(Yy, {
                      rows: 3,
                      ...m,
                      placeholder: r,
                      className: se(
                        s && "border-[#BA1A1A]",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : i !== "file"
                  ? p.jsx(Rc, {
                      ...m,
                      type: i,
                      placeholder: r,
                      disabled: a,
                      className: se(
                        s && "border-[#BA1A1A]",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : p.jsxs("div", {
                      className: "relative",
                      children: [
                        p.jsx(Rc, {
                          type: "file",
                          placeholder: r,
                          onChange: (g) => {
                            var y;
                            const h =
                              ((y = g.target.files) == null ? void 0 : y[0]) ||
                              null;
                            console.log("Выбранный файл:", h),
                              m.onChange(h),
                              d && d(g);
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
            p.jsx(Oy, {
              className: se(
                "absolute -bottom-5 left-0 text-sm font-medium leading-[130%]",
                s && f ? "text-teritary_04" : "text-[#BA1A1A]"
              ),
              children: s ? s.message : u,
            }),
          ],
        }),
    }),
  KP = () => {
    const { control: e, formState: t } = Ar(),
      n = Ge((r) => r.lang);
    return p.jsxs(hr.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      transition: { duration: 1 },
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: kt[Y(n)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            p.jsx(Ve, {
              control: e,
              name: "preferred_meeting_datetime",
              error: t.errors.preferred_meeting_datetime,
              placeholder: "",
              label: kt[Y(n)].data[0].label,
            }),
            p.jsx(Ve, {
              control: e,
              name: "preferred_mode",
              error: t.errors.preferred_mode,
              placeholder: "",
              label: kt[Y(n)].data[1].label,
            }),
            p.jsx(Ve, {
              control: e,
              name: "language_preference",
              error: t.errors.language_preference,
              placeholder: "",
              label: kt[Y(n)].data[2].label,
            }),
            p.jsx(Ve, {
              control: e,
              name: "additional_technical",
              error: t.errors.additional_technical,
              placeholder: "",
              label: kt[Y(n)].data[3].label,
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
                  children: kt[Y(n)].secondH2,
                }),
                p.jsx("h5", {
                  className: "text-on_surface_v",
                  children: kt[Y(n)].subtitle,
                }),
              ],
            }),
            p.jsx(Ve, {
              control: e,
              name: "company_profile",
              label: kt[Y(n)].data[4].label,
              type: "file",
              textDark: !0,
            }),
            p.jsx(Ve, {
              control: e,
              name: "proposal_presentation",
              label: kt[Y(n)].data[5].label,
              type: "file",
              textDark: !0,
            }),
            p.jsx(Ve, {
              control: e,
              name: "relevant_certification",
              label: kt[Y(n)].data[6].label,
              type: "file",
              textDark: !0,
            }),
          ],
        }),
        p.jsx(Qe, {
          disabled: t.isSubmitting,
          type: "submit",
          className: "w-full mt-10",
          children: t.isSubmitting
            ? p.jsx(ub, { className: "animate-spin" })
            : kt[Y(n)].button,
        }),
      ],
    });
  },
  R1 = ({ stage: e, setStage: t }) => {
    const [n, r] = v.useState(!1),
      s = Rp({ resolver: kp(gP), defaultValues: yP, mode: "onChange" }),
      i = (c) => {
        switch (c) {
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
        const c = i(e);
        (await s.trigger(c)) && t((u) => u + 1);
      },
      a = async (c) => {
        try {
          const l = new FormData();
          Object.entries(c).forEach(([d, f]) => {
            f instanceof File
              ? (console.log(`Добавляем файл: ${d}`, f), l.append(d, f))
              : f !== void 0 &&
                (console.log(`Добавляем поле: ${d}`, f), l.append(d, f));
          }),
            (
              await Re.post("https://itse.turkmenexpo.com/app/api/v1/form", l, {
                headers: { "Content-Type": "multipart/form-data" },
              })
            ).status === 201 &&
              (console.log("Форма успешно отправлена!"), r(!0));
        } catch (l) {
          console.error("Ошибка при отправке B2B формы:", l);
        }
      };
    return p.jsx(xP, {
      ...s,
      children: p.jsx("form", {
        onSubmit: s.handleSubmit(a),
        children: p.jsxs("div", {
          className: "relative",
          children: [
            p.jsx(_a, { children: e === 1 && p.jsx(GP, { handleNext: o }) }),
            p.jsx(_a, { children: e === 2 && p.jsx(ZP, { handleNext: o }) }),
            p.jsx(_a, { children: e === 3 && n === !1 && p.jsx(KP, {}) }),
            n && p.jsx(JP, {}),
          ],
        }),
      }),
    });
  };
var Ba, zf;
function QP() {
  if (zf) return Ba;
  zf = 1;
  var e = "Expected a function",
    t = NaN,
    n = "[object Symbol]",
    r = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    a = parseInt,
    c = typeof Ii == "object" && Ii && Ii.Object === Object && Ii,
    l = typeof self == "object" && self && self.Object === Object && self,
    u = c || l || Function("return this")(),
    d = Object.prototype,
    f = d.toString,
    m = Math.max,
    g = Math.min,
    h = function () {
      return u.Date.now();
    };
  function y(_, P, T) {
    var A,
      j,
      M,
      V,
      N,
      B,
      W = 0,
      ee = !1,
      Q = !1,
      G = !0;
    if (typeof _ != "function") throw new TypeError(e);
    (P = C(P) || 0),
      b(T) &&
        ((ee = !!T.leading),
        (Q = "maxWait" in T),
        (M = Q ? m(C(T.maxWait) || 0, P) : M),
        (G = "trailing" in T ? !!T.trailing : G));
    function q(de) {
      var be = A,
        Me = j;
      return (A = j = void 0), (W = de), (V = _.apply(Me, be)), V;
    }
    function ie(de) {
      return (W = de), (N = setTimeout(Xe, P)), ee ? q(de) : V;
    }
    function ye(de) {
      var be = de - B,
        Me = de - W,
        $e = P - be;
      return Q ? g($e, M - Me) : $e;
    }
    function ve(de) {
      var be = de - B,
        Me = de - W;
      return B === void 0 || be >= P || be < 0 || (Q && Me >= M);
    }
    function Xe() {
      var de = h();
      if (ve(de)) return pt(de);
      N = setTimeout(Xe, ye(de));
    }
    function pt(de) {
      return (N = void 0), G && A ? q(de) : ((A = j = void 0), V);
    }
    function Ye() {
      N !== void 0 && clearTimeout(N), (W = 0), (A = B = j = N = void 0);
    }
    function Pt() {
      return N === void 0 ? V : pt(h());
    }
    function it() {
      var de = h(),
        be = ve(de);
      if (((A = arguments), (j = this), (B = de), be)) {
        if (N === void 0) return ie(B);
        if (Q) return (N = setTimeout(Xe, P)), q(B);
      }
      return N === void 0 && (N = setTimeout(Xe, P)), V;
    }
    return (it.cancel = Ye), (it.flush = Pt), it;
  }
  function b(_) {
    var P = typeof _;
    return !!_ && (P == "object" || P == "function");
  }
  function x(_) {
    return !!_ && typeof _ == "object";
  }
  function w(_) {
    return typeof _ == "symbol" || (x(_) && f.call(_) == n);
  }
  function C(_) {
    if (typeof _ == "number") return _;
    if (w(_)) return t;
    if (b(_)) {
      var P = typeof _.valueOf == "function" ? _.valueOf() : _;
      _ = b(P) ? P + "" : P;
    }
    if (typeof _ != "string") return _ === 0 ? _ : +_;
    _ = _.replace(r, "");
    var T = i.test(_);
    return T || o.test(_) ? a(_.slice(2), T ? 2 : 8) : s.test(_) ? t : +_;
  }
  return (Ba = y), Ba;
}
QP();
var XP = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  YP = typeof window > "u";
function Pc(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
  const r = (a) => (YP ? t : window.matchMedia(a).matches),
    [s, i] = v.useState(() => (n ? r(e) : t));
  function o() {
    i(r(e));
  }
  return (
    XP(() => {
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
const P1 = ({ className: e, stage: t }) => {
    const n = Pc("(min-width: 768px");
    return p.jsx("div", {
      className: e,
      children: p.jsx("div", {
        className: "max-w-[808px] md:mx-auto my-20 mx-5",
        children: p.jsxs("div", {
          className: "relative h-14 w-full",
          children: [
            p.jsx("div", {
              className: se(
                "h-2 absolute bg-[#D0D3D8] rounded-[2px] w-full top-0 left-0"
              ),
            }),
            p.jsx(hr.div, {
              initial: { width: 0 },
              animate: t === 2 ? { width: "20%" } : t === 3 && { width: "75%" },
              transition: { delay: 0.5, duration: 0.5 },
              className: se(
                "h-2 absolute bg-primary rounded-[2px] top-0 left-0 z-[5]",
                { "w-[20%]": t === 2, "w-[75%]": t === 3 }
              ),
            }),
            p.jsx(hr.div, {
              initial: { width: n ? "50%" : "35%" },
              animate:
                t === 2 ? { width: "75%" } : t === 3 && { width: "100%" },
              className: se(
                "bg-primary_container w-1/2 absolute top-0 left-0 rounded-[2px] z-[3] h-2"
              ),
            }),
            p.jsx(hr.div, {
              className: se(
                "progress-circle absolute transition-all duration-500 -top-6 flex items-center justify-center",
                {
                  "bg-primary_container md:left-1/2 left-1/3": t === 1,
                  "bg-primary left-[20%] !text-on_primary": t === 2 || t === 3,
                }
              ),
              children: "1",
            }),
            p.jsx("div", {
              className: se(
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
              className: se(
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
  JP = ({ className: e, delay: t = 0.15 }) =>
    p.jsxs(hr.div, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: t } },
      className: se("flex flex-col gap-8 my-16", e),
      children: [
        p.jsx("h3", {
          className: "text-3xl text-center",
          children: "Форма успешно отправлена!",
        }),
        p.jsx(Be, {
          className: "w-fit mx-auto",
          to: "/",
          children: p.jsx(Qe, {
            variant: "outline",
            children: "Вернуться на главную",
          }),
        }),
      ],
    }),
  k1 = ({ title: e }) =>
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
  Wf = ({ title: e, dropDownContent: t, color: n, onMenu: r }) => {
    const [s, i] = v.useState(!1);
    return p.jsxs(Cm, {
      open: s,
      onOpenChange: () => i(!s),
      children: [
        p.jsxs(Em, {
          className: "flex items-center gap-2",
          children: [e, p.jsx(ek, { color: n })],
        }),
        p.jsx(bl, {
          className: "w-fit px-0 py-2 cursor-pointer bg-slate-100",
          children:
            t &&
            t.map((o) =>
              o.link
                ? p.jsxs(
                    Be,
                    {
                      onClick: () => i(!1),
                      className:
                        "h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all",
                      target: o.blank ? "_blank" : "",
                      to: o.link,
                      children: [
                        o.text,
                        o.blank && p.jsx("img", { src: "/pdf.svg" }),
                      ],
                    },
                    o.text
                  )
                : p.jsx(
                    "div",
                    {
                      className:
                        "h-14 px-3 flex items-center hover:bg-slate-300/50 transition-all",
                      onClick: () => {
                        i(!1), r == null || r();
                      },
                      children: o.text,
                    },
                    o.text
                  )
            ),
        }),
      ],
    });
  },
  ek = ({ color: e = "black" }) =>
    p.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: p.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.23021 8.01443C4.35919 7.70304 4.66305 7.5 5.00011 7.5H15.0001C15.3372 7.5 15.641 7.70304 15.77 8.01443C15.899 8.32583 15.8277 8.68426 15.5894 8.92259L10.5894 13.9226C10.2639 14.248 9.73629 14.248 9.41085 13.9226L4.41085 8.92259C4.17252 8.68426 4.10122 8.32583 4.23021 8.01443ZM7.01195 9.16667L10.0001 12.1548L12.9883 9.16667H7.01195Z",
        fill: e,
      }),
    });
function tk(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Hf(e) {
  return tk(e) || Array.isArray(e);
}
function nk() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function ou(e, t) {
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
          : !Hf(a) || !Hf(c)
          ? a === c
          : ou(a, c);
      });
}
function qf(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function rk(e, t) {
  if (e.length !== t.length) return !1;
  const n = qf(e),
    r = qf(t);
  return n.every((s, i) => {
    const o = r[i];
    return ou(s, o);
  });
}
function au(e) {
  return typeof e == "number";
}
function kc(e) {
  return typeof e == "string";
}
function ra(e) {
  return typeof e == "boolean";
}
function Gf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Oe(e) {
  return Math.abs(e);
}
function cu(e) {
  return Math.sign(e);
}
function Hs(e, t) {
  return Oe(e - t);
}
function sk(e, t) {
  if (e === 0 || t === 0 || Oe(e) <= Oe(t)) return 0;
  const n = Hs(Oe(e), Oe(t));
  return Oe(n / e);
}
function ik(e) {
  return Math.round(e * 100) / 100;
}
function hi(e) {
  return pi(e).map(Number);
}
function Lt(e) {
  return e[ji(e)];
}
function ji(e) {
  return Math.max(0, e.length - 1);
}
function lu(e, t) {
  return t === ji(e);
}
function Zf(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function pi(e) {
  return Object.keys(e);
}
function Jy(e, t) {
  return [e, t].reduce(
    (n, r) => (
      pi(r).forEach((s) => {
        const i = n[s],
          o = r[s],
          a = Gf(i) && Gf(o);
        n[s] = a ? Jy(i, o) : o;
      }),
      n
    ),
    {}
  );
}
function Oc(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function ok(e, t) {
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
    return kc(e) ? n[e](c) : e(t, c, l);
  }
  return { measure: o };
}
function mi() {
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
function ak(e, t, n, r) {
  const s = mi(),
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
function ck(e, t) {
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
function _r(e = 0, t = 0) {
  const n = Oe(e - t);
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
function ev(e, t, n) {
  const { constrain: r } = _r(0, e),
    s = e + 1;
  let i = o(t);
  function o(f) {
    return n ? Oe((s + f) % s) : r(f);
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
    return ev(e, a(), n);
  }
  const d = { get: a, set: c, add: l, clone: u };
  return d;
}
function lk(e, t, n, r, s, i, o, a, c, l, u, d, f, m, g, h, y, b, x) {
  const { cross: w, direction: C } = e,
    _ = ["INPUT", "SELECT", "TEXTAREA"],
    P = { passive: !1 },
    T = mi(),
    A = mi(),
    j = _r(50, 225).constrain(m.measure(20)),
    M = { mouse: 300, touch: 400 },
    V = { mouse: 500, touch: 600 },
    N = g ? 43 : 25;
  let B = !1,
    W = 0,
    ee = 0,
    Q = !1,
    G = !1,
    q = !1,
    ie = !1;
  function ye(Z) {
    if (!x) return;
    function he(He) {
      (ra(x) || x(Z, He)) && it(He);
    }
    const Se = t;
    T.add(Se, "dragstart", (He) => He.preventDefault(), P)
      .add(Se, "touchmove", () => {}, P)
      .add(Se, "touchend", () => {})
      .add(Se, "touchstart", he)
      .add(Se, "mousedown", he)
      .add(Se, "touchcancel", be)
      .add(Se, "contextmenu", be)
      .add(Se, "click", Me, !0);
  }
  function ve() {
    T.clear(), A.clear();
  }
  function Xe() {
    const Z = ie ? n : t;
    A.add(Z, "touchmove", de, P)
      .add(Z, "touchend", be)
      .add(Z, "mousemove", de, P)
      .add(Z, "mouseup", be);
  }
  function pt(Z) {
    const he = Z.nodeName || "";
    return _.includes(he);
  }
  function Ye() {
    return (g ? V : M)[ie ? "mouse" : "touch"];
  }
  function Pt(Z, he) {
    const Se = d.add(cu(Z) * -1),
      He = u.byDistance(Z, !g).distance;
    return g || Oe(Z) < j
      ? He
      : y && he
      ? He * 0.5
      : u.byIndex(Se.get(), 0).distance;
  }
  function it(Z) {
    const he = Oc(Z, r);
    (ie = he),
      (q = g && he && !Z.buttons && B),
      (B = Hs(s.get(), o.get()) >= 2),
      !(he && Z.button !== 0) &&
        (pt(Z.target) ||
          ((Q = !0),
          i.pointerDown(Z),
          l.useFriction(0).useDuration(0),
          s.set(o),
          Xe(),
          (W = i.readPoint(Z)),
          (ee = i.readPoint(Z, w)),
          f.emit("pointerDown")));
  }
  function de(Z) {
    if (!Oc(Z, r) && Z.touches.length >= 2) return be(Z);
    const Se = i.readPoint(Z),
      He = i.readPoint(Z, w),
      mt = Hs(Se, W),
      St = Hs(He, ee);
    if (!G && !ie && (!Z.cancelable || ((G = mt > St), !G))) return be(Z);
    const S = i.pointerMove(Z);
    mt > h && (q = !0),
      l.useFriction(0.3).useDuration(0.75),
      a.start(),
      s.add(C(S)),
      Z.preventDefault();
  }
  function be(Z) {
    const Se = u.byDistance(0, !1).index !== d.get(),
      He = i.pointerUp(Z) * Ye(),
      mt = Pt(C(He), Se),
      St = sk(He, mt),
      S = N - 10 * St,
      R = b + St / 50;
    (G = !1),
      (Q = !1),
      A.clear(),
      l.useDuration(S).useFriction(R),
      c.distance(mt, !g),
      (ie = !1),
      f.emit("pointerUp");
  }
  function Me(Z) {
    q && (Z.stopPropagation(), Z.preventDefault(), (q = !1));
  }
  function $e() {
    return Q;
  }
  return { init: ye, destroy: ve, pointerDown: $e };
}
function uk(e, t) {
  let r, s;
  function i(d) {
    return d.timeStamp;
  }
  function o(d, f) {
    const g = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (Oc(d, t) ? d : d.touches[0])[g];
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
    return m && !g && Oe(h) > 0.1 ? h : 0;
  }
  return { pointerDown: a, pointerMove: c, pointerUp: l, readPoint: o };
}
function dk() {
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
function fk(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function hk(e, t, n, r, s, i, o) {
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
          _ = r.indexOf(w.target),
          P = C ? l : u[_],
          T = f(C ? e : r[_]);
        if (Oe(T - P) >= 0.5) {
          y.reInit(), t.emit("resize");
          break;
        }
      }
    }
    (c = new ResizeObserver((x) => {
      (ra(i) || i(y, x)) && b(x);
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
function pk(e, t, n, r, s, i) {
  let o = 0,
    a = 0,
    c = s,
    l = i,
    u = e.get(),
    d = 0;
  function f() {
    const P = r.get() - e.get(),
      T = !c;
    let A = 0;
    return (
      T
        ? ((o = 0), n.set(r), e.set(r), (A = P))
        : (n.set(e), (o += P / c), (o *= l), (u += o), e.add(o), (A = u - d)),
      (a = cu(A)),
      (d = u),
      _
    );
  }
  function m() {
    const P = r.get() - t.get();
    return Oe(P) < 0.001;
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
  function w(P) {
    return (c = P), _;
  }
  function C(P) {
    return (l = P), _;
  }
  const _ = {
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
  return _;
}
function mk(e, t, n, r, s) {
  const i = s.measure(10),
    o = s.measure(50),
    a = _r(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max",
      h = Oe(e[g] - t.get()),
      y = n.get() - t.get(),
      b = a.constrain(h / o);
    n.subtract(y * b),
      !m &&
        Oe(y) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return { shouldConstrain: l, constrain: u, toggleActive: d };
}
function gk(e, t, n, r, s) {
  const i = _r(-t + e, 0),
    o = d(),
    a = u(),
    c = f();
  function l(g, h) {
    return Hs(g, h) <= 1;
  }
  function u() {
    const g = o[0],
      h = Lt(o),
      y = o.lastIndexOf(g),
      b = o.indexOf(h) + 1;
    return _r(y, b);
  }
  function d() {
    return n
      .map((g, h) => {
        const { min: y, max: b } = i,
          x = i.constrain(g),
          w = !h,
          C = lu(n, h);
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
function yk(e, t, n) {
  const r = t[0],
    s = n ? r - e : Lt(t);
  return { limit: _r(s, r) };
}
function vk(e, t, n, r) {
  const i = t.min + 0.1,
    o = t.max + 0.1,
    { reachedMin: a, reachedMax: c } = _r(i, o);
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
function bk(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const o = i - t;
    return n ? o / -n : 0;
  }
  return { get: r };
}
function xk(e, t, n, r, s) {
  const { startEdge: i, endEdge: o } = e,
    { groupSlides: a } = s,
    c = d().map(t.measure),
    l = f(),
    u = m();
  function d() {
    return a(r)
      .map((h) => Lt(h)[o] - h[0][i])
      .map(Oe);
  }
  function f() {
    return r.map((h) => n[i] - h[i]).map((h) => -Oe(h));
  }
  function m() {
    return a(l)
      .map((h) => h[0])
      .map((h, y) => h + c[y]);
  }
  return { snaps: l, snapsAligned: u };
}
function wk(e, t, n, r, s, i) {
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
            x = lu(y, h);
          if (b) {
            const w = Lt(y[0]) + 1;
            return Zf(w);
          }
          if (x) {
            const w = ji(i) - Lt(y)[0] + 1;
            return Zf(w, Lt(y)[0]);
          }
          return g;
        });
  }
  return { slideRegistry: l };
}
function _k(e, t, n, r, s) {
  const { reachedAny: i, removeOffset: o, constrain: a } = r;
  function c(g) {
    return g.concat().sort((h, y) => Oe(h) - Oe(y))[0];
  }
  function l(g) {
    const h = e ? o(g) : a(g),
      y = t
        .map((x, w) => ({ diff: u(x - h, 0), index: w }))
        .sort((x, w) => Oe(x.diff) - Oe(w.diff)),
      { index: b } = y[0];
    return { index: b, distance: h };
  }
  function u(g, h) {
    const y = [g, g + n, g - n];
    if (!e) return g;
    if (!h) return c(y);
    const b = y.filter((x) => cu(x) === h);
    return b.length ? c(b) : Lt(y) - n;
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
      _ = g + u(C, 0);
    return { index: b, distance: _ };
  }
  return { byDistance: f, byIndex: d, shortcut: u };
}
function Sk(e, t, n, r, s, i, o) {
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
function Ck(e, t, n, r, s, i, o, a) {
  const c = { passive: !0, capture: !0 };
  let l = 0;
  function u(m) {
    if (!a) return;
    function g(h) {
      if (new Date().getTime() - l > 10) return;
      o.emit("slideFocusStart"), (e.scrollLeft = 0);
      const x = n.findIndex((w) => w.includes(h));
      au(x) && (s.useDuration(0), r.index(x, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", d, !1),
      t.forEach((h, y) => {
        i.add(
          h,
          "focus",
          (b) => {
            (ra(a) || a(m, b)) && g(y);
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
function Ns(e) {
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
    return au(c) ? c : c.get();
  }
  return { get: n, set: r, add: s, subtract: i };
}
function tv(e, t) {
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
    const m = ik(e.direction(f));
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
function Ek(e, t, n, r, s, i, o, a, c) {
  const u = hi(s),
    d = hi(s).reverse(),
    f = b().concat(x());
  function m(T, A) {
    return T.reduce((j, M) => j - s[M], A);
  }
  function g(T, A) {
    return T.reduce((j, M) => (m(j, A) > 0 ? j.concat([M]) : j), []);
  }
  function h(T) {
    return i.map((A, j) => ({
      start: A - r[j] + 0.5 + T,
      end: A + t - 0.5 + T,
    }));
  }
  function y(T, A, j) {
    const M = h(A);
    return T.map((V) => {
      const N = j ? 0 : -n,
        B = j ? n : 0,
        W = j ? "end" : "start",
        ee = M[V][W];
      return {
        index: V,
        loopPoint: ee,
        slideLocation: Ns(-1),
        translate: tv(e, c[V]),
        target: () => (a.get() > ee ? N : B),
      };
    });
  }
  function b() {
    const T = o[0],
      A = g(d, T);
    return y(A, n, !1);
  }
  function x() {
    const T = t - o[0] - 1,
      A = g(u, T);
    return y(A, -n, !0);
  }
  function w() {
    return f.every(({ index: T }) => {
      const A = u.filter((j) => j !== T);
      return m(A, t) <= 0.1;
    });
  }
  function C() {
    f.forEach((T) => {
      const { target: A, translate: j, slideLocation: M } = T,
        V = A();
      V !== M.get() && (j.to(V), M.set(V));
    });
  }
  function _() {
    f.forEach((T) => T.translate.clear());
  }
  return { canLoop: w, clear: _, loop: C, loopPoints: f };
}
function Tk(e, t, n) {
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
      s || ((ra(n) || n(c, u)) && l(u));
    })),
      r.observe(e, { childList: !0 });
  }
  function o() {
    r && r.disconnect(), (s = !0);
  }
  return { init: i, destroy: o };
}
function Ak(e, t, n, r) {
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
    return pi(s).reduce((h, y) => {
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
function Rk(e, t, n, r, s, i) {
  const { measureSize: o, startEdge: a, endEdge: c } = e,
    l = n[0] && s,
    u = g(),
    d = h(),
    f = n.map(o),
    m = y();
  function g() {
    if (!l) return 0;
    const x = n[0];
    return Oe(t[a] - x[a]);
  }
  function h() {
    if (!l) return 0;
    const x = i.getComputedStyle(Lt(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function y() {
    return n
      .map((x, w, C) => {
        const _ = !w,
          P = lu(C, w);
        return _ ? f[w] + u : P ? f[w] + d : C[w + 1][a] - x[a];
      })
      .map(Oe);
  }
  return { slideSizes: f, slideSizesWithGaps: m, startGap: u, endGap: d };
}
function Pk(e, t, n, r, s, i, o, a, c) {
  const { startEdge: l, endEdge: u, direction: d } = e,
    f = au(n);
  function m(b, x) {
    return hi(b)
      .filter((w) => w % x === 0)
      .map((w) => b.slice(w, w + x));
  }
  function g(b) {
    return b.length
      ? hi(b)
          .reduce((x, w, C) => {
            const _ = Lt(x) || 0,
              P = _ === 0,
              T = w === ji(b),
              A = s[l] - i[_][l],
              j = s[l] - i[w][u],
              M = !r && P ? d(o) : 0,
              V = !r && T ? d(a) : 0,
              N = Oe(j - V - (A + M));
            return C && N > t + c && x.push(w), T && x.push(b.length), x;
          }, [])
          .map((x, w, C) => {
            const _ = Math.max(C[w - 1] || 0);
            return b.slice(_, x);
          })
      : [];
  }
  function h(b) {
    return f ? m(b, n) : g(b);
  }
  return { groupSlides: h };
}
function kk(e, t, n, r, s, i, o) {
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
      watchDrag: _,
      watchFocus: P,
    } = i,
    T = 2,
    A = dk(),
    j = A.measure(t),
    M = n.map(A.measure),
    V = ck(c, l),
    N = V.measureSize(j),
    B = fk(N),
    W = ok(a, N),
    ee = !d && !!x,
    Q = d || !!x,
    {
      slideSizes: G,
      slideSizesWithGaps: q,
      startGap: ie,
      endGap: ye,
    } = Rk(V, j, M, n, Q, s),
    ve = Pk(V, N, y, d, j, M, ie, ye, T),
    { snaps: Xe, snapsAligned: pt } = xk(V, W, j, M, ve),
    Ye = -Lt(Xe) + Lt(q),
    { snapsContained: Pt, scrollContainLimit: it } = gk(N, Ye, pt, x, T),
    de = ee ? Pt : pt,
    { limit: be } = yk(Ye, de, d),
    Me = ev(ji(de), u, d),
    $e = Me.clone(),
    _e = hi(n),
    Z = ({
      dragHandler: qt,
      scrollBody: Kn,
      scrollBounds: xs,
      options: { loop: Qn },
    }) => {
      Qn || xs.constrain(qt.pointerDown()), Kn.seek();
    },
    he = (
      {
        scrollBody: qt,
        translate: Kn,
        location: xs,
        offsetLocation: Qn,
        previousLocation: ia,
        scrollLooper: Mi,
        slideLooper: pv,
        dragHandler: mv,
        animation: gv,
        eventHandler: pu,
        scrollBounds: yv,
        options: { loop: mu },
      },
      gu
    ) => {
      const yu = qt.settled(),
        vv = !yv.shouldConstrain(),
        vu = mu ? yu : yu && vv;
      vu && !mv.pointerDown() && (gv.stop(), pu.emit("settle")),
        vu || pu.emit("scroll");
      const bv = xs.get() * gu + ia.get() * (1 - gu);
      Qn.set(bv), mu && (Mi.loop(qt.direction()), pv.loop()), Kn.to(Qn.get());
    },
    Se = ak(
      r,
      s,
      () => Z(bs),
      (qt) => he(bs, qt)
    ),
    He = 0.68,
    mt = de[Me.get()],
    St = Ns(mt),
    S = Ns(mt),
    R = Ns(mt),
    O = Ns(mt),
    U = pk(St, R, S, O, f, He),
    I = _k(d, de, Ye, be, O),
    F = Sk(Se, Me, $e, U, I, O, o),
    X = bk(be),
    ce = mi(),
    ze = Ak(t, n, o, h),
    { slideRegistry: Fe } = wk(ee, x, de, it, ve, _e),
    Ht = Ck(e, n, Fe, F, U, ce, o, P),
    bs = {
      ownerDocument: r,
      ownerWindow: s,
      eventHandler: o,
      containerRect: j,
      slideRects: M,
      animation: Se,
      axis: V,
      dragHandler: lk(
        V,
        e,
        r,
        s,
        O,
        uk(V, s),
        St,
        Se,
        F,
        U,
        I,
        Me,
        o,
        B,
        m,
        g,
        b,
        He,
        _
      ),
      eventStore: ce,
      percentOfView: B,
      index: Me,
      indexPrevious: $e,
      limit: be,
      location: St,
      offsetLocation: R,
      previousLocation: S,
      options: i,
      resizeHandler: hk(t, o, s, n, V, w, A),
      scrollBody: U,
      scrollBounds: mk(be, R, O, U, B),
      scrollLooper: vk(Ye, be, R, [St, R, S, O]),
      scrollProgress: X,
      scrollSnapList: de.map(X.get),
      scrollSnaps: de,
      scrollTarget: I,
      scrollTo: F,
      slideLooper: Ek(V, N, Ye, G, q, Xe, de, R, n),
      slideFocus: Ht,
      slidesHandler: Tk(t, o, C),
      slidesInView: ze,
      slideIndexes: _e,
      slideRegistry: Fe,
      slidesToScroll: ve,
      target: O,
      translate: tv(V, t),
    };
  return bs;
}
function Ok() {
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
const jk = {
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
function Nk(e) {
  function t(i, o) {
    return Jy(i, o || {});
  }
  function n(i) {
    const o = i.breakpoints || {},
      a = pi(o)
        .filter((c) => e.matchMedia(c).matches)
        .map((c) => o[c])
        .reduce((c, l) => t(c, l), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((o) => pi(o.breakpoints || {}))
      .reduce((o, a) => o.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function Dk(e) {
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
function No(e, t, n) {
  const r = e.ownerDocument,
    s = r.defaultView,
    i = Nk(s),
    o = Dk(i),
    a = mi(),
    c = Ok(),
    { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = i,
    { on: f, off: m, emit: g } = c,
    h = V;
  let y = !1,
    b,
    x = l(jk, No.globalOptions),
    w = l(x),
    C = [],
    _,
    P,
    T;
  function A() {
    const { container: _e, slides: Z } = w;
    P = (kc(_e) ? e.querySelector(_e) : _e) || e.children[0];
    const Se = kc(Z) ? P.querySelectorAll(Z) : Z;
    T = [].slice.call(Se || P.children);
  }
  function j(_e) {
    const Z = kk(e, P, T, r, s, _e, c);
    if (_e.loop && !Z.slideLooper.canLoop()) {
      const he = Object.assign({}, _e, { loop: !1 });
      return j(he);
    }
    return Z;
  }
  function M(_e, Z) {
    y ||
      ((x = l(x, _e)),
      (w = u(x)),
      (C = Z || C),
      A(),
      (b = j(w)),
      d([x, ...C.map(({ options: he }) => he)]).forEach((he) =>
        a.add(he, "change", V)
      ),
      w.active &&
        (b.translate.to(b.location.get()),
        b.animation.init(),
        b.slidesInView.init(),
        b.slideFocus.init($e),
        b.eventHandler.init($e),
        b.resizeHandler.init($e),
        b.slidesHandler.init($e),
        b.options.loop && b.slideLooper.loop(),
        P.offsetParent && T.length && b.dragHandler.init($e),
        (_ = o.init($e, C))));
  }
  function V(_e, Z) {
    const he = ve();
    N(), M(l({ startIndex: he }, _e), Z), c.emit("reInit");
  }
  function N() {
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
  function B() {
    y || ((y = !0), a.clear(), N(), c.emit("destroy"), c.clear());
  }
  function W(_e, Z, he) {
    !w.active ||
      y ||
      (b.scrollBody.useBaseFriction().useDuration(Z === !0 ? 0 : w.duration),
      b.scrollTo.index(_e, he || 0));
  }
  function ee(_e) {
    const Z = b.index.add(1).get();
    W(Z, _e, -1);
  }
  function Q(_e) {
    const Z = b.index.add(-1).get();
    W(Z, _e, 1);
  }
  function G() {
    return b.index.add(1).get() !== ve();
  }
  function q() {
    return b.index.add(-1).get() !== ve();
  }
  function ie() {
    return b.scrollSnapList;
  }
  function ye() {
    return b.scrollProgress.get(b.location.get());
  }
  function ve() {
    return b.index.get();
  }
  function Xe() {
    return b.indexPrevious.get();
  }
  function pt() {
    return b.slidesInView.get();
  }
  function Ye() {
    return b.slidesInView.get(!1);
  }
  function Pt() {
    return _;
  }
  function it() {
    return b;
  }
  function de() {
    return e;
  }
  function be() {
    return P;
  }
  function Me() {
    return T;
  }
  const $e = {
    canScrollNext: G,
    canScrollPrev: q,
    containerNode: be,
    internalEngine: it,
    destroy: B,
    off: m,
    on: f,
    emit: g,
    plugins: Pt,
    previousScrollSnap: Xe,
    reInit: h,
    rootNode: de,
    scrollNext: ee,
    scrollPrev: Q,
    scrollProgress: ye,
    scrollSnapList: ie,
    scrollTo: W,
    selectedScrollSnap: ve,
    slideNodes: Me,
    slidesInView: pt,
    slidesNotInView: Ye,
  };
  return M(t, n), setTimeout(() => c.emit("init"), 0), $e;
}
No.globalOptions = void 0;
function Ni(e = {}, t = []) {
  const n = v.useRef(e),
    r = v.useRef(t),
    [s, i] = v.useState(),
    [o, a] = v.useState(),
    c = v.useCallback(() => {
      s && s.reInit(n.current, r.current);
    }, [s]);
  return (
    v.useEffect(() => {
      ou(n.current, e) || ((n.current = e), c());
    }, [e, c]),
    v.useEffect(() => {
      rk(r.current, t) || ((r.current = t), c());
    }, [t, c]),
    v.useEffect(() => {
      if (nk() && o) {
        No.globalOptions = Ni.globalOptions;
        const l = No(o, n.current, r.current);
        return i(l), () => l.destroy();
      } else i(void 0);
    }, [o, i]),
    [a, s]
  );
}
Ni.globalOptions = void 0;
const Mk = [
    {
      data: [
        {
          title: "План выставки",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
          blank: !0,
        },
        { title: "Забронировать стенд", link: "/stend-form" },
        { title: "B2B | B2G встречи", link: "/B2B-B2G" },
        { title: "Стать спонсором", link: "/become-sponsor" },
      ],
    },
    {
      data: [
        {
          title: "Floor Plan",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
          blank: !0,
        },
        { title: "Book a stand", link: "/stend-form" },
        { title: "B2B | B2G meetings", link: "/B2B-B2G" },
        { title: "Become a sponsor", link: "/become-sponsor" },
      ],
    },
  ],
  O1 = () => {
    const [e] = Ni(),
      t = Ge((o) => o.lang),
      n = t === nt.RU ? nt.RU : nt.EN,
      r = Pc("(min-width: 1024px)"),
      s = Pc("(min-width: 768px)");
    function i() {
      return r
        ? `/banners/${n}/lg.jpg`
        : s
        ? `/banners/${n}/md.jpg`
        : `/banners/${n}/sm.jpg`;
    }
    return p.jsxs("section", {
      className: "flex flex-col gap-5",
      children: [
        p.jsx("div", {
          ref: e,
          className: "embla",
          children: p.jsx("div", {
            className: "embla__container",
            children: p.jsx("div", {
              className: "embla__slide",
              children: p.jsx("img", {
                src: i(),
                alt: "",
                className:
                  "size-full object-cover lg:max-h-[600px] lg:min-h-[320px]",
              }),
            }),
          }),
        }),
        p.jsx(wt, {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl",
          children: Mk[Y(t)].data.map(({ title: o, link: a, blank: c }) =>
            p.jsx(
              Be,
              {
                target: c ? "_blank" : "",
                to: a,
                className: "w-full",
                children: p.jsx(Qe, {
                  size: "lg",
                  variant: "secondary",
                  className:
                    "w-full drop-shadow-sm shadow-md bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90",
                  children: o,
                }),
              },
              o
            )
          ),
        }),
      ],
    });
  },
  Do = [
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
  ],
  Fk = [
    {
      data: [
        {
          title: "contact@turkmenexpo.com",
          subtitle: "Адрес электронной почты",
          img: "/contacts/mail.svg",
        },
        {
          title: "здание ТПП Туркменистана",
          subtitle: "Адрес выставки",
          img: "/contacts/location.svg",
        },
        {
          title: "+99371871814; 99363719588",
          subtitle: "Контактный номер",
          img: "/contacts/mobile.svg",
        },
      ],
    },
    {
      data: [
        {
          title: "contact@turkmenexpo.com",
          subtitle: "E-mail Address",
          img: "/contacts/mail.svg",
        },
        {
          title: "Building of the CCI of Turkmenistan",
          subtitle: "Exhibition address",
          img: "/contacts/location.svg",
        },
        {
          title: "+99371871814; 99363719588",
          subtitle: "Contact Number",
          img: "/contacts/mobile.svg",
        },
      ],
    },
  ],
  sa = "https://itse.turkmenexpo.com/app/api/v1",
  j1 = async (e) => (await Re.post(`${sa}/book_stand_form`, e)).status === 201,
  N1 = async (e) =>
    (await Re.post(`${sa}/become_sponsor_form`, e)).status === 201,
  D1 = async (e) => (await Re.post(`${sa}/contact_form`, e)).status === 201,
  Ik = async () => Re.get(`${sa}/exhibition_time`);
var Di = class {
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
  Sr = typeof window > "u" || "Deno" in globalThis;
function At() {}
function Lk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function nv(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Wr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Kf(e, t) {
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
      if (t.queryHash !== uu(o, t.options)) return !1;
    } else if (!yi(t.queryKey, o)) return !1;
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
function Qf(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (gi(t.options.mutationKey) !== gi(i)) return !1;
    } else if (!yi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function uu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || gi)(e);
}
function gi(e) {
  return JSON.stringify(e, (t, n) =>
    Dc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n
  );
}
function yi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !yi(e[n], t[n]))
    : !1;
}
function rv(e, t) {
  if (e === t) return e;
  const n = Xf(e) && Xf(t);
  if (n || (Dc(e) && Dc(t))) {
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
        : ((a[u] = rv(e[u], t[u])), a[u] === e[u] && e[u] !== void 0 && c++);
    }
    return s === o && c === s ? e : a;
  }
  return t;
}
function Nc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Xf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Dc(e) {
  if (!Yf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Yf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Yf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Vk(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Mc(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? rv(e, t)
    : t;
}
function Bk(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Uk(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var du = Symbol();
function sv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === du
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var rr,
  kn,
  Hr,
  oh,
  $k =
    ((oh = class extends Di {
      constructor() {
        super();
        ne(this, rr);
        ne(this, kn);
        ne(this, Hr);
        H(this, Hr, (t) => {
          if (!Sr && window.addEventListener) {
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
        E(this, kn) || this.setEventListener(E(this, Hr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, kn)) == null || t.call(this), H(this, kn, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, Hr, t),
          (n = E(this, kn)) == null || n.call(this),
          H(
            this,
            kn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        E(this, rr) !== t && (H(this, rr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof E(this, rr) == "boolean"
          ? E(this, rr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (rr = new WeakMap()),
    (kn = new WeakMap()),
    (Hr = new WeakMap()),
    oh),
  fu = new $k(),
  qr,
  On,
  Gr,
  ah,
  zk =
    ((ah = class extends Di {
      constructor() {
        super();
        ne(this, qr, !0);
        ne(this, On);
        ne(this, Gr);
        H(this, Gr, (t) => {
          if (!Sr && window.addEventListener) {
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
        E(this, On) || this.setEventListener(E(this, Gr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, On)) == null || t.call(this), H(this, On, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, Gr, t),
          (n = E(this, On)) == null || n.call(this),
          H(this, On, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        E(this, qr) !== t &&
          (H(this, qr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return E(this, qr);
      }
    }),
    (qr = new WeakMap()),
    (On = new WeakMap()),
    (Gr = new WeakMap()),
    ah),
  Mo = new zk();
function Fc() {
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
function Wk(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function iv(e) {
  return (e ?? "online") === "online" ? Mo.isOnline() : !0;
}
var ov = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ua(e) {
  return e instanceof ov;
}
function av(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = Fc(),
    o = (h) => {
      var y;
      r || (f(new ov(h)), (y = e.abort) == null || y.call(e));
    },
    a = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      fu.isFocused() &&
      (e.networkMode === "always" || Mo.isOnline()) &&
      e.canRun(),
    u = () => iv(e.networkMode) && e.canRun(),
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
          var P;
          if (r) return;
          const x = e.retry ?? (Sr ? 0 : 3),
            w = e.retryDelay ?? Wk,
            C = typeof w == "function" ? w(n, b) : w,
            _ =
              x === !0 ||
              (typeof x == "number" && n < x) ||
              (typeof x == "function" && x(n, b));
          if (t || !_) {
            f(b);
            return;
          }
          n++,
            (P = e.onFail) == null || P.call(e, n, b),
            Vk(C)
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
function Hk() {
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
var Ke = Hk(),
  sr,
  ch,
  cv =
    ((ch = class {
      constructor() {
        ne(this, sr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          jc(this.gcTime) &&
            H(
              this,
              sr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Sr ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        E(this, sr) && (clearTimeout(E(this, sr)), H(this, sr, void 0));
      }
    }),
    (sr = new WeakMap()),
    ch),
  Zr,
  Kr,
  Tt,
  ir,
  Je,
  vi,
  or,
  jt,
  pn,
  lh,
  qk =
    ((lh = class extends cv {
      constructor(t) {
        super();
        ne(this, jt);
        ne(this, Zr);
        ne(this, Kr);
        ne(this, Tt);
        ne(this, ir);
        ne(this, Je);
        ne(this, vi);
        ne(this, or);
        H(this, or, !1),
          H(this, vi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          H(this, ir, t.client),
          H(this, Tt, E(this, ir).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          H(this, Zr, Gk(this.options)),
          (this.state = t.state ?? E(this, Zr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = E(this, Je)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...E(this, vi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          E(this, Tt).remove(this);
      }
      setData(t, n) {
        const r = Mc(this.state.data, t, this.options);
        return (
          pe(this, jt, pn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        pe(this, jt, pn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = E(this, Je)) == null ? void 0 : r.promise;
        return (
          (s = E(this, Je)) == null || s.cancel(t),
          n ? n.then(At).catch(At) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(E(this, Zr));
      }
      isActive() {
        return this.observers.some((t) => Dt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === du ||
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
          !nv(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Je)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Je)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          E(this, Tt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (E(this, Je) &&
              (E(this, or)
                ? E(this, Je).cancel({ revert: !0 })
                : E(this, Je).cancelRetry()),
            this.scheduleGc()),
          E(this, Tt).notify({
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
          pe(this, jt, pn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, l, u;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (E(this, Je))
            return E(this, Je).continueRetry(), E(this, Je).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((f) => f.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          s = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (H(this, or, !0), r.signal),
            });
          },
          i = () => {
            const d = sv(this.options, n),
              f = {
                client: E(this, ir),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              s(f),
              H(this, or, !1),
              this.options.persister ? this.options.persister(d, f, this) : d(f)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: E(this, ir),
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (c = this.options.behavior) == null || c.onFetch(o, this),
          H(this, Kr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((l = o.fetchOptions) == null ? void 0 : l.meta)) &&
            pe(this, jt, pn).call(this, {
              type: "fetch",
              meta: (u = o.fetchOptions) == null ? void 0 : u.meta,
            });
        const a = (d) => {
          var f, m, g, h;
          (Ua(d) && d.silent) ||
            pe(this, jt, pn).call(this, { type: "error", error: d }),
            Ua(d) ||
              ((m = (f = E(this, Tt).config).onError) == null ||
                m.call(f, d, this),
              (h = (g = E(this, Tt).config).onSettled) == null ||
                h.call(g, this.state.data, d, this)),
            this.scheduleGc();
        };
        return (
          H(
            this,
            Je,
            av({
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
                (m = (f = E(this, Tt).config).onSuccess) == null ||
                  m.call(f, d, this),
                  (h = (g = E(this, Tt).config).onSettled) == null ||
                    h.call(g, d, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (d, f) => {
                pe(this, jt, pn).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: f,
                });
              },
              onPause: () => {
                pe(this, jt, pn).call(this, { type: "pause" });
              },
              onContinue: () => {
                pe(this, jt, pn).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          E(this, Je).start()
        );
      }
    }),
    (Zr = new WeakMap()),
    (Kr = new WeakMap()),
    (Tt = new WeakMap()),
    (ir = new WeakMap()),
    (Je = new WeakMap()),
    (vi = new WeakMap()),
    (or = new WeakMap()),
    (jt = new WeakSet()),
    (pn = function (t) {
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
              ...lv(r.data, this.options),
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
            return Ua(s) && s.revert && E(this, Kr)
              ? { ...E(this, Kr), fetchStatus: "idle" }
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
        Ke.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            E(this, Tt).notify({ query: this, type: "updated", action: t });
        });
    }),
    lh);
function lv(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: iv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Gk(e) {
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
var Zt,
  uh,
  Zk =
    ((uh = class extends Di {
      constructor(t = {}) {
        super();
        ne(this, Zt);
        (this.config = t), H(this, Zt, new Map());
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? uu(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new qk({
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
        E(this, Zt).has(t.queryHash) ||
          (E(this, Zt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = E(this, Zt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && E(this, Zt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ke.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return E(this, Zt).get(t);
      }
      getAll() {
        return [...E(this, Zt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Kf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Kf(t, r)) : n;
      }
      notify(t) {
        Ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Zt = new WeakMap()),
    uh),
  Kt,
  ot,
  ar,
  Qt,
  Rn,
  dh,
  Kk =
    ((dh = class extends cv {
      constructor(t) {
        super();
        ne(this, Qt);
        ne(this, Kt);
        ne(this, ot);
        ne(this, ar);
        (this.mutationId = t.mutationId),
          H(this, ot, t.mutationCache),
          H(this, Kt, []),
          (this.state = t.state || Qk()),
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
        E(this, Kt).includes(t) ||
          (E(this, Kt).push(t),
          this.clearGcTimeout(),
          E(this, ot).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        H(
          this,
          Kt,
          E(this, Kt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          E(this, ot).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        E(this, Kt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : E(this, ot).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = E(this, ar)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, a, c, l, u, d, f, m, g, h, y, b, x, w, C, _, P, T;
        H(
          this,
          ar,
          av({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, j) => {
              pe(this, Qt, Rn).call(this, {
                type: "failed",
                failureCount: A,
                error: j,
              });
            },
            onPause: () => {
              pe(this, Qt, Rn).call(this, { type: "pause" });
            },
            onContinue: () => {
              pe(this, Qt, Rn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, ot).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !E(this, ar).canStart();
        try {
          if (!n) {
            pe(this, Qt, Rn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (s = E(this, ot).config).onMutate) == null
                ? void 0
                : i.call(s, t, this));
            const j = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            j !== this.state.context &&
              pe(this, Qt, Rn).call(this, {
                type: "pending",
                context: j,
                variables: t,
                isPaused: r,
              });
          }
          const A = await E(this, ar).start();
          return (
            await ((l = (c = E(this, ot).config).onSuccess) == null
              ? void 0
              : l.call(c, A, t, this.state.context, this)),
            await ((d = (u = this.options).onSuccess) == null
              ? void 0
              : d.call(u, A, t, this.state.context)),
            await ((m = (f = E(this, ot).config).onSettled) == null
              ? void 0
              : m.call(
                  f,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((h = (g = this.options).onSettled) == null
              ? void 0
              : h.call(g, A, null, t, this.state.context)),
            pe(this, Qt, Rn).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              (await ((b = (y = E(this, ot).config).onError) == null
                ? void 0
                : b.call(y, A, t, this.state.context, this)),
              await ((w = (x = this.options).onError) == null
                ? void 0
                : w.call(x, A, t, this.state.context)),
              await ((_ = (C = E(this, ot).config).onSettled) == null
                ? void 0
                : _.call(
                    C,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((T = (P = this.options).onSettled) == null
                ? void 0
                : T.call(P, void 0, A, t, this.state.context)),
              A)
            );
          } finally {
            pe(this, Qt, Rn).call(this, { type: "error", error: A });
          }
        } finally {
          E(this, ot).runNext(this);
        }
      }
    }),
    (Kt = new WeakMap()),
    (ot = new WeakMap()),
    (ar = new WeakMap()),
    (Qt = new WeakSet()),
    (Rn = function (t) {
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
        Ke.batch(() => {
          E(this, Kt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            E(this, ot).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    dh);
function Qk() {
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
var gn,
  Nt,
  bi,
  fh,
  Xk =
    ((fh = class extends Di {
      constructor(t = {}) {
        super();
        ne(this, gn);
        ne(this, Nt);
        ne(this, bi);
        (this.config = t),
          H(this, gn, new Set()),
          H(this, Nt, new Map()),
          H(this, bi, 0);
      }
      build(t, n, r) {
        const s = new Kk({
          mutationCache: this,
          mutationId: ++Fi(this, bi)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(t) {
        E(this, gn).add(t);
        const n = Zi(t);
        if (typeof n == "string") {
          const r = E(this, Nt).get(n);
          r ? r.push(t) : E(this, Nt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (E(this, gn).delete(t)) {
          const n = Zi(t);
          if (typeof n == "string") {
            const r = E(this, Nt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && E(this, Nt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Zi(t);
        if (typeof n == "string") {
          const r = E(this, Nt).get(n),
            s =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Zi(t);
        if (typeof n == "string") {
          const s =
            (r = E(this, Nt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ke.batch(() => {
          E(this, gn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            E(this, gn).clear(),
            E(this, Nt).clear();
        });
      }
      getAll() {
        return Array.from(E(this, gn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Qf(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Qf(t, n));
      }
      notify(t) {
        Ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ke.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(At)))
        );
      }
    }),
    (gn = new WeakMap()),
    (Nt = new WeakMap()),
    (bi = new WeakMap()),
    fh);
function Zi(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Jf(e) {
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
          b = sv(t.options, t.fetchOptions),
          x = async (w, C, _) => {
            if (h) return Promise.reject();
            if (C == null && w.pages.length) return Promise.resolve(w);
            const P = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: C,
              direction: _ ? "backward" : "forward",
              meta: t.options.meta,
            };
            y(P);
            const T = await b(P),
              { maxPages: A } = t.options,
              j = _ ? Uk : Bk;
            return {
              pages: j(w.pages, T, A),
              pageParams: j(w.pageParams, C, A),
            };
          };
        if (s && i.length) {
          const w = s === "backward",
            C = w ? Yk : eh,
            _ = { pages: i, pageParams: o },
            P = C(r, _);
          a = await x(_, P, w);
        } else {
          const w = e ?? i.length;
          do {
            const C = c === 0 ? o[0] ?? r.initialPageParam : eh(r, a);
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
function eh(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Yk(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var je,
  jn,
  Nn,
  Qr,
  Xr,
  Dn,
  Yr,
  Jr,
  hh,
  M1 =
    ((hh = class {
      constructor(e = {}) {
        ne(this, je);
        ne(this, jn);
        ne(this, Nn);
        ne(this, Qr);
        ne(this, Xr);
        ne(this, Dn);
        ne(this, Yr);
        ne(this, Jr);
        H(this, je, e.queryCache || new Zk()),
          H(this, jn, e.mutationCache || new Xk()),
          H(this, Nn, e.defaultOptions || {}),
          H(this, Qr, new Map()),
          H(this, Xr, new Map()),
          H(this, Dn, 0);
      }
      mount() {
        Fi(this, Dn)._++,
          E(this, Dn) === 1 &&
            (H(
              this,
              Yr,
              fu.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, je).onFocus());
              })
            ),
            H(
              this,
              Jr,
              Mo.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, je).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Fi(this, Dn)._--,
          E(this, Dn) === 0 &&
            ((e = E(this, Yr)) == null || e.call(this),
            H(this, Yr, void 0),
            (t = E(this, Jr)) == null || t.call(this),
            H(this, Jr, void 0));
      }
      isFetching(e) {
        return E(this, je).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return E(this, jn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, je).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = E(this, je).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Wr(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return E(this, je)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = E(this, je).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = Lk(t, i);
        if (o !== void 0)
          return E(this, je)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ke.batch(() =>
          E(this, je)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, je).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = E(this, je);
        Ke.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = E(this, je),
          r = { type: "active", ...e };
        return Ke.batch(
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
          r = Ke.batch(() =>
            E(this, je)
              .findAll(e)
              .map((s) => s.cancel(n))
          );
        return Promise.all(r).then(At).catch(At);
      }
      invalidateQueries(e, t = {}) {
        return Ke.batch(() => {
          if (
            (E(this, je)
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
          r = Ke.batch(() =>
            E(this, je)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(At)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(At);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = E(this, je).build(this, t);
        return n.isStaleByTime(Wr(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(At).catch(At);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Jf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(At).catch(At);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Jf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Mo.isOnline()
          ? E(this, jn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return E(this, je);
      }
      getMutationCache() {
        return E(this, jn);
      }
      getDefaultOptions() {
        return E(this, Nn);
      }
      setDefaultOptions(e) {
        H(this, Nn, e);
      }
      setQueryDefaults(e, t) {
        E(this, Qr).set(gi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...E(this, Qr).values()],
          n = {};
        return (
          t.forEach((r) => {
            yi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        E(this, Xr).set(gi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...E(this, Xr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            yi(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...E(this, Nn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = uu(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === du && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...E(this, Nn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        E(this, je).clear(), E(this, jn).clear();
      }
    }),
    (je = new WeakMap()),
    (jn = new WeakMap()),
    (Nn = new WeakMap()),
    (Qr = new WeakMap()),
    (Xr = new WeakMap()),
    (Dn = new WeakMap()),
    (Yr = new WeakMap()),
    (Jr = new WeakMap()),
    hh),
  dt,
  me,
  xi,
  at,
  cr,
  es,
  Mn,
  Xt,
  wi,
  ts,
  ns,
  lr,
  ur,
  Fn,
  rs,
  we,
  Ds,
  Ic,
  Lc,
  Vc,
  Bc,
  Uc,
  $c,
  zc,
  uv,
  ph,
  Jk =
    ((ph = class extends Di {
      constructor(t, n) {
        super();
        ne(this, we);
        ne(this, dt);
        ne(this, me);
        ne(this, xi);
        ne(this, at);
        ne(this, cr);
        ne(this, es);
        ne(this, Mn);
        ne(this, Xt);
        ne(this, wi);
        ne(this, ts);
        ne(this, ns);
        ne(this, lr);
        ne(this, ur);
        ne(this, Fn);
        ne(this, rs, new Set());
        (this.options = n),
          H(this, dt, t),
          H(this, Xt, null),
          H(this, Mn, Fc()),
          this.options.experimental_prefetchInRender ||
            E(this, Mn).reject(
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
          (E(this, me).addObserver(this),
          th(E(this, me), this.options)
            ? pe(this, we, Ds).call(this)
            : this.updateResult(),
          pe(this, we, Bc).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Wc(E(this, me), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Wc(E(this, me), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          pe(this, we, Uc).call(this),
          pe(this, we, $c).call(this),
          E(this, me).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          s = E(this, me);
        if (
          ((this.options = E(this, dt).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Dt(this.options.enabled, E(this, me)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        pe(this, we, zc).call(this),
          E(this, me).setOptions(this.options),
          r._defaulted &&
            !Nc(this.options, r) &&
            E(this, dt)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: E(this, me),
                observer: this,
              });
        const i = this.hasListeners();
        i && nh(E(this, me), s, this.options, r) && pe(this, we, Ds).call(this),
          this.updateResult(n),
          i &&
            (E(this, me) !== s ||
              Dt(this.options.enabled, E(this, me)) !==
                Dt(r.enabled, E(this, me)) ||
              Wr(this.options.staleTime, E(this, me)) !==
                Wr(r.staleTime, E(this, me))) &&
            pe(this, we, Ic).call(this);
        const o = pe(this, we, Lc).call(this);
        i &&
          (E(this, me) !== s ||
            Dt(this.options.enabled, E(this, me)) !==
              Dt(r.enabled, E(this, me)) ||
            o !== E(this, Fn)) &&
          pe(this, we, Vc).call(this, o);
      }
      getOptimisticResult(t) {
        const n = E(this, dt).getQueryCache().build(E(this, dt), t),
          r = this.createResult(n, t);
        return (
          t1(this, r) &&
            (H(this, at, r),
            H(this, es, this.options),
            H(this, cr, E(this, me).state)),
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
        E(this, rs).add(t);
      }
      getCurrentQuery() {
        return E(this, me);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = E(this, dt).defaultQueryOptions(t),
          r = E(this, dt).getQueryCache().build(E(this, dt), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return pe(this, we, Ds)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), E(this, at)));
      }
      createResult(t, n) {
        var A;
        const r = E(this, me),
          s = this.options,
          i = E(this, at),
          o = E(this, cr),
          a = E(this, es),
          l = t !== r ? t.state : E(this, xi),
          { state: u } = t;
        let d = { ...u },
          f = !1,
          m;
        if (n._optimisticResults) {
          const j = this.hasListeners(),
            M = !j && th(t, n),
            V = j && nh(t, r, n, s);
          (M || V) && (d = { ...d, ...lv(u.data, t.options) }),
            n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
        }
        let { error: g, errorUpdatedAt: h, status: y } = d;
        if (n.select && d.data !== void 0)
          if (
            i &&
            d.data === (o == null ? void 0 : o.data) &&
            n.select === E(this, wi)
          )
            m = E(this, ts);
          else
            try {
              H(this, wi, n.select),
                (m = n.select(d.data)),
                (m = Mc(i == null ? void 0 : i.data, m, n)),
                H(this, ts, m),
                H(this, Xt, null);
            } catch (j) {
              H(this, Xt, j);
            }
        else m = d.data;
        if (n.placeholderData !== void 0 && m === void 0 && y === "pending") {
          let j;
          if (
            i != null &&
            i.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            j = i.data;
          else if (
            ((j =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (A = E(this, ns)) == null ? void 0 : A.state.data,
                    E(this, ns)
                  )
                : n.placeholderData),
            n.select && j !== void 0)
          )
            try {
              (j = n.select(j)), H(this, Xt, null);
            } catch (M) {
              H(this, Xt, M);
            }
          j !== void 0 &&
            ((y = "success"),
            (m = Mc(i == null ? void 0 : i.data, j, n)),
            (f = !0));
        }
        E(this, Xt) &&
          ((g = E(this, Xt)),
          (m = E(this, ts)),
          (h = Date.now()),
          (y = "error"));
        const b = d.fetchStatus === "fetching",
          x = y === "pending",
          w = y === "error",
          C = x && b,
          _ = m !== void 0,
          T = {
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
            isLoadingError: w && !_,
            isPaused: d.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: w && _,
            isStale: hu(t, n),
            refetch: this.refetch,
            promise: E(this, Mn),
          };
        if (this.options.experimental_prefetchInRender) {
          const j = (N) => {
              T.status === "error"
                ? N.reject(T.error)
                : T.data !== void 0 && N.resolve(T.data);
            },
            M = () => {
              const N = H(this, Mn, (T.promise = Fc()));
              j(N);
            },
            V = E(this, Mn);
          switch (V.status) {
            case "pending":
              t.queryHash === r.queryHash && j(V);
              break;
            case "fulfilled":
              (T.status === "error" || T.data !== V.value) && M();
              break;
            case "rejected":
              (T.status !== "error" || T.error !== V.reason) && M();
              break;
          }
        }
        return T;
      }
      updateResult(t) {
        const n = E(this, at),
          r = this.createResult(E(this, me), this.options);
        if (
          (H(this, cr, E(this, me).state),
          H(this, es, this.options),
          E(this, cr).data !== void 0 && H(this, ns, E(this, me)),
          Nc(r, n))
        )
          return;
        H(this, at, r);
        const s = {},
          i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == "function" ? o() : o;
            if (a === "all" || (!a && !E(this, rs).size)) return !0;
            const c = new Set(a ?? E(this, rs));
            return (
              this.options.throwOnError && c.add("error"),
              Object.keys(E(this, at)).some((l) => {
                const u = l;
                return E(this, at)[u] !== n[u] && c.has(u);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0),
          pe(this, we, uv).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && pe(this, we, Bc).call(this);
      }
    }),
    (dt = new WeakMap()),
    (me = new WeakMap()),
    (xi = new WeakMap()),
    (at = new WeakMap()),
    (cr = new WeakMap()),
    (es = new WeakMap()),
    (Mn = new WeakMap()),
    (Xt = new WeakMap()),
    (wi = new WeakMap()),
    (ts = new WeakMap()),
    (ns = new WeakMap()),
    (lr = new WeakMap()),
    (ur = new WeakMap()),
    (Fn = new WeakMap()),
    (rs = new WeakMap()),
    (we = new WeakSet()),
    (Ds = function (t) {
      pe(this, we, zc).call(this);
      let n = E(this, me).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(At)), n;
    }),
    (Ic = function () {
      pe(this, we, Uc).call(this);
      const t = Wr(this.options.staleTime, E(this, me));
      if (Sr || E(this, at).isStale || !jc(t)) return;
      const r = nv(E(this, at).dataUpdatedAt, t) + 1;
      H(
        this,
        lr,
        setTimeout(() => {
          E(this, at).isStale || this.updateResult();
        }, r)
      );
    }),
    (Lc = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(E(this, me))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Vc = function (t) {
      pe(this, we, $c).call(this),
        H(this, Fn, t),
        !(
          Sr ||
          Dt(this.options.enabled, E(this, me)) === !1 ||
          !jc(E(this, Fn)) ||
          E(this, Fn) === 0
        ) &&
          H(
            this,
            ur,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || fu.isFocused()) &&
                pe(this, we, Ds).call(this);
            }, E(this, Fn))
          );
    }),
    (Bc = function () {
      pe(this, we, Ic).call(this),
        pe(this, we, Vc).call(this, pe(this, we, Lc).call(this));
    }),
    (Uc = function () {
      E(this, lr) && (clearTimeout(E(this, lr)), H(this, lr, void 0));
    }),
    ($c = function () {
      E(this, ur) && (clearInterval(E(this, ur)), H(this, ur, void 0));
    }),
    (zc = function () {
      const t = E(this, dt).getQueryCache().build(E(this, dt), this.options);
      if (t === E(this, me)) return;
      const n = E(this, me);
      H(this, me, t),
        H(this, xi, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (uv = function (t) {
      Ke.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(E(this, at));
          }),
          E(this, dt)
            .getQueryCache()
            .notify({ query: E(this, me), type: "observerResultsUpdated" });
      });
    }),
    ph);
function e1(e, t) {
  return (
    Dt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function th(e, t) {
  return e1(e, t) || (e.state.data !== void 0 && Wc(e, t, t.refetchOnMount));
}
function Wc(e, t, n) {
  if (Dt(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && hu(e, t));
  }
  return !1;
}
function nh(e, t, n, r) {
  return (
    (e !== t || Dt(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    hu(e, n)
  );
}
function hu(e, t) {
  return Dt(t.enabled, e) !== !1 && e.isStaleByTime(Wr(t.staleTime, e));
}
function t1(e, t) {
  return !Nc(e.getCurrentResult(), t);
}
var dv = v.createContext(void 0),
  n1 = (e) => {
    const t = v.useContext(dv);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  F1 = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    p.jsx(dv.Provider, { value: e, children: t })
  ),
  fv = v.createContext(!1),
  r1 = () => v.useContext(fv);
fv.Provider;
function s1() {
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
var i1 = v.createContext(s1()),
  o1 = () => v.useContext(i1);
function a1(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function rh() {}
var c1 = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  l1 = (e) => {
    v.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  u1 = ({
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
    ((s && e.data === void 0) || a1(n, [e.error, r])),
  d1 = (e) => {
    const t = e.staleTime;
    e.suspense &&
      ((e.staleTime =
        typeof t == "function"
          ? (...n) => Math.max(t(...n), 1e3)
          : Math.max(t ?? 1e3, 1e3)),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  f1 = (e, t) => e.isLoading && e.isFetching && !t,
  h1 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  sh = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function p1(e, t, n) {
  var d, f, m, g, h;
  const r = n1(),
    s = r1(),
    i = o1(),
    o = r.defaultQueryOptions(e);
  (f =
    (d = r.getDefaultOptions().queries) == null
      ? void 0
      : d._experimental_beforeQuery) == null || f.call(d, o),
    (o._optimisticResults = s ? "isRestoring" : "optimistic"),
    d1(o),
    c1(o, i),
    l1(i);
  const a = !r.getQueryCache().get(o.queryHash),
    [c] = v.useState(() => new t(r, o)),
    l = c.getOptimisticResult(o),
    u = !s && e.subscribed !== !1;
  if (
    (v.useSyncExternalStore(
      v.useCallback(
        (y) => {
          const b = u ? c.subscribe(Ke.batchCalls(y)) : rh;
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
    h1(o, l))
  )
    throw sh(o, c, i);
  if (
    u1({
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
    o.experimental_prefetchInRender && !Sr && f1(l, s))
  ) {
    const y = a
      ? sh(o, c, i)
      : (h = r.getQueryCache().get(o.queryHash)) == null
      ? void 0
      : h.promise;
    y == null ||
      y.catch(rh).finally(() => {
        c.updateResult();
      });
  }
  return o.notifyOnChangeProps ? l : c.trackResult(l);
}
function m1(e, t) {
  return p1(e, Jk);
}
const g1 = () => {
    const { data: e, isPending: t } = m1({
      queryKey: ["exhibiton-time"],
      queryFn: () => Ik(),
    });
    return { data: e, isPending: t };
  },
  I1 = ({ className: e }) => {
    const t = Ge((r) => r.lang),
      { data: n } = g1();
    return (
      console.log(n),
      p.jsx("section", {
        className: se("bg-surface_high pt-10 pb-20", e),
        children: p.jsxs(wt, {
          children: [
            p.jsx("h2", { className: "h2 mb-10", children: Do[Y(t)].title }),
            p.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                p.jsx("div", {
                  className: "flex flex-col md:flex-row items-center gap-6",
                  children: Do[Y(t)].data.map((r) =>
                    v.createElement(Tm, {
                      ...r,
                      key: r.name,
                      className: "w-full",
                    })
                  ),
                }),
                p.jsx("div", {
                  className:
                    "md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6",
                  children: Fk[Y(t)].data.map((r) =>
                    v.createElement(hS, {
                      ...r,
                      key: r.title,
                      className: "w-full",
                    })
                  ),
                }),
                p.jsx(Be, {
                  to: "/stend-form",
                  className: "md:w-fit w-full mx-auto",
                  children: p.jsx(Qe, {
                    className: "w-full",
                    children:
                      t === nt.RU ? "Забронируйте стенд" : "Book a stand",
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Ki = [
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
        { nums: "10,000 m²", text: "выставочной площади" },
        { nums: "10000+", text: "Посетители посетят выставку" },
        { nums: "100+", text: "Экспоненты из более чем 30 стран" },
        {
          nums: "80%",
          text: "Участники принимают участие в принятии решений о закупках",
        },
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
        { nums: "10,000 m²", text: "Of the exhibition area" },
        {
          nums: "10000+",
          text: "Visitors and specialists attend the exhibition",
        },
        { nums: "100+", text: "More than 100 exhibitors from 30 countries " },
        { nums: "80%", text: "Visitors are involved in procurement decisions" },
      ],
    },
  ],
  L1 = () => {
    const [e] = Ni(),
      t = Ge((n) => n.lang);
    return p.jsx("section", {
      children: p.jsxs(wt, {
        className: "flex flex-col gap-6",
        children: [
          p.jsxs("div", {
            className: "text-center",
            children: [
              p.jsx("h2", {
                className: "h2 md:mb-3 mb-6 text-left sm:text-center",
                children: Ki[Y(t)].mainData[0].h2,
              }),
              p.jsx("p", {
                className:
                  "md:text-base text-sm normal text-left sm:text-center text-[#454545]",
                children: Ki[Y(t)].mainData[0].p,
              }),
            ],
          }),
          p.jsx("div", {
            ref: e,
            className: "embla overflow-hidden",
            children: p.jsx("div", {
              className: "flex embla__container items-center gap-6",
              children: Ki[Y(t)].data.map((n) =>
                p.jsx(
                  fS,
                  { ...n, className: "embla__slide flex-[0_0_288px]" },
                  n.text
                )
              ),
            }),
          }),
          p.jsx(Be, {
            to: "/about",
            className: "mx-auto",
            children: p.jsx(Qe, {
              variant: "outline",
              children: Ki[Y(t)].mainData[0].button,
            }),
          }),
        ],
      }),
    });
  },
  hv = ({ className: e, img: t, title: n }) =>
    p.jsxs("article", {
      className: se(
        "bg-bg_surface_container relative hover:bg-teritary_surface_container transition-all md:px-6 px-2 md:h-[224px] h-[124px]",
        e
      ),
      children: [
        p.jsx("div", {
          className: "bg-primary size-full -z-[10] absolute top-2.5 left-2.5",
        }),
        p.jsx("img", {
          src: t,
          alt: "theme icon",
          className: "md:size-20 size-12",
        }),
        p.jsx("h3", {
          className: "md:mt-6 mt-2 md:text-xl text-sm",
          children: n,
        }),
      ],
    }),
  Hc = [
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
  V1 = () => {
    const e = Ge((t) => t.lang);
    return p.jsx("section", {
      className: "",
      children: p.jsxs(wt, {
        children: [
          p.jsx("h2", {
            className: "h2 mb-10 text-center",
            children: Hc[Y(e)].h2,
          }),
          p.jsx("div", {
            className: "grid md:grid-cols-4 grid-cols-2 gap-6",
            children: Hc[Y(e)].data.map((t) => p.jsx(hv, { ...t }, t.title)),
          }),
        ],
      }),
    });
  },
  y1 = [
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
          link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
        },
        {
          img: "/offer-2.png",
          title: "Explore the ITSE 2025 Exhibition Plan",
          btnText: "Download Exhibition plan",
          text: "How to choose the best location at the exhibition? A Prime spot increases your chances of attracting potential clients.",
          link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
        },
      ],
    },
  ],
  B1 = () => {
    const [e, t] = Ni({ align: "start" }),
      n = Ge((o) => o.lang),
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
        children: p.jsx(wt, {
          children: p.jsxs("div", {
            ref: e,
            className: "embla",
            children: [
              p.jsx("div", {
                className: "mb-2 flex gap-6 embla__container",
                children: y1[Y(n)].data.map((o) =>
                  v.createElement(pS, {
                    className:
                      "embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]",
                    ...o,
                    key: o.title,
                  })
                ),
              }),
              p.jsx(mS, {
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
  $a = [
    {
      title: "Отрасли",
      subtitle: "Мероприятие объединит ключевых игроков в таких отраслях, как:",
      bottomText: `
        Участники смогут продемонстрировать свои инновационные решения, наладить взаимовыгодные партнерства и выйти на новые рынки.`,
    },
    {
      title:
        "The event will bring together key players from industries such as:",
      subtitle:
        "The event will bring together key players from industries such as:",
      bottomText:
        "Participants will be able to showcase innovative solutions, establish mutually beneficial partnerships, and enter new markets.",
    },
  ],
  U1 = ({ className: e }) => {
    const t = Ge((n) => n.lang);
    return p.jsxs("section", {
      className: se("relative w-full bg-[#FDE8C4] -z-10 py-10", e),
      children: [
        p.jsx("img", {
          src: "/about-bg.svg",
          alt: "",
          className: "absolute top-0 left-0 size-full object-cover",
        }),
        p.jsxs(wt, {
          children: [
            p.jsxs("h3", {
              className: "h2 mb-4",
              children: [" ", $a[Y(t)].title],
            }),
            p.jsx("p", {
              className: "text-lg text-on_surface_v mb-6",
              children: $a[Y(t)].subtitle,
            }),
            p.jsx("div", {
              className: "grid md:grid-cols-4 grid-cols-2 gap-6",
              children: Hc[Y(t)].data.map((n) =>
                p.jsx(
                  hv,
                  { className: "!bg-teritary_surface_container", ...n },
                  n.title
                )
              ),
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
                  children: $a[Y(t)].bottomText,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  $1 = ({ className: e }) => {
    const t = Ge((n) => n.lang);
    return p.jsx("section", {
      className: se("bg-bg_surface_container py-10 md:py-[80px]", e),
      children: p.jsxs(wt, {
        children: [
          p.jsx("h2", { className: "h2 mb-6", children: Do[Y(t)].title }),
          p.jsx("div", {
            className: "flex flex-col md:flex-row items-center gap-6",
            children: Do[Y(t)].data.map((n) =>
              v.createElement(Tm, {
                bottomClassName: "!bg-white rounded-b-[2px]",
                ...n,
                key: n.name,
                className: "w-full",
              })
            ),
          }),
        ],
      }),
    });
  },
  ih = [
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
  z1 = ({ className: e }) => {
    const t = Ge((n) => n.lang);
    return p.jsx("section", {
      className: se("gap-6 relative overflow-hidden", e),
      children: p.jsxs(wt, {
        className:
          "md:py-20 py-10 grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 grid",
        children: [
          p.jsxs("div", {
            className: "",
            children: [
              p.jsx("h3", { className: "h2 mb-6", children: ih[Y(t)].title }),
              p.jsx("div", {
                className:
                  "text-lg flex flex-col gap-6 text-on_surface_v normal  mb-10",
                children: ih[Y(t)].data.map((n) =>
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
  Qi = [
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
  W1 = ({ className: e }) => {
    const t = Ge((n) => n.lang);
    return p.jsxs("section", {
      className: se("md:py-20 py-10 relative overflow-hidden", e),
      children: [
        p.jsx("img", {
          src: "/CTA.png",
          className: "absolute top-0 left-0 size-full -z-10 object-cover",
        }),
        p.jsxs(wt, {
          children: [
            p.jsx("h3", {
              className: "h2 text-center !text-on_primary mb-6",
              children: Qi[Y(t)].title,
            }),
            p.jsx("p", {
              className:
                "text-center md:text-lg text-sm  text-primary_04 max-w-[808px] mx-auto mb-10",
              children: Qi[Y(t)].p,
            }),
            p.jsxs("div", {
              className: "flex flex-col md:flex-row items-center gap-6",
              children: [
                p.jsx(Be, {
                  to: "/stend-form",
                  className: "w-full",
                  children: p.jsx(Qe, {
                    className: "bg-white w-full text-primary hover:bg-white/90",
                    children: Qi[Y(t)].button1,
                  }),
                }),
                p.jsx(Be, {
                  to: "/become-sponsor",
                  className: "w-full",
                  children: p.jsx(Qe, {
                    className: "bg-white w-full hover:bg-white/90 text-primary",
                    children: Qi[Y(t)].button2,
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
  _a as A,
  P1 as B,
  k1 as C,
  $1 as D,
  z1 as E,
  S1 as F,
  W1 as G,
  _1 as H,
  se as I,
  D1 as J,
  N1 as K,
  nt as L,
  F1 as M,
  M1 as Q,
  Xy as R,
  O1 as a,
  L1 as b,
  B1 as c,
  V1 as d,
  I1 as e,
  R1 as f,
  Rp as g,
  Y as h,
  xP as i,
  p as j,
  Py as k,
  $s as l,
  hr as m,
  zs as n,
  Ws as o,
  Ac as p,
  Ve as q,
  Qe as r,
  ub as s,
  JP as t,
  Ge as u,
  kp as v,
  j1 as w,
  wt as x,
  U1 as y,
  Ee as z,
};
