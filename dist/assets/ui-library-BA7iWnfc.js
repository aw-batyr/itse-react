import {
  r as dg,
  a as v,
  R as fg,
  b as md,
  c as hg,
  d as le,
  L as Me,
  e as Rs,
} from "./react-vendor-OnsDvTPE.js";
var Gi = { exports: {} },
  wr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc;
function pg() {
  if (Uc) return wr;
  Uc = 1;
  var e = dg(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, c) {
    var u,
      d = {},
      f = null,
      g = null;
    c !== void 0 && (f = "" + c),
      l.key !== void 0 && (f = "" + l.key),
      l.ref !== void 0 && (g = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps)
      for (u in ((l = a.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return {
      $$typeof: t,
      type: a,
      key: f,
      ref: g,
      props: d,
      _owner: s.current,
    };
  }
  return (wr.Fragment = n), (wr.jsx = o), (wr.jsxs = o), wr;
}
var $c;
function mg() {
  return $c || (($c = 1), (Gi.exports = pg())), Gi.exports;
}
var p = mg();
function gd(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = gd(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function yd() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = gd(e)) && (r && (r += " "), (r += t));
  return r;
}
const ba = "-",
  gg = (e) => {
    const t = vg(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(ba);
        return a[0] === "" && a.length !== 1 && a.shift(), vd(a, t) || yg(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  vd = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? vd(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(ba);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  zc = /^\[(.+)\]$/,
  yg = (e) => {
    if (zc.test(e)) {
      const t = zc.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  vg = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      xg(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        Po(o, r, i, t);
      }),
      r
    );
  },
  Po = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Wc(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (bg(s)) {
          Po(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Po(o, Wc(t, i), n, r);
      });
    });
  },
  Wc = (e, t) => {
    let n = e;
    return (
      t.split(ba).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  bg = (e) => e.isThemeGetter,
  xg = (e, t) =>
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
  wg = (e) => {
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
  bd = "!",
  _g = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let c = 0,
          u = 0,
          d;
        for (let y = 0; y < a.length; y++) {
          let b = a[y];
          if (c === 0) {
            if (b === s && (r || a.slice(y, y + i) === t)) {
              l.push(a.slice(u, y)), (u = y + i);
              continue;
            }
            if (b === "/") {
              d = y;
              continue;
            }
          }
          b === "[" ? c++ : b === "]" && c--;
        }
        const f = l.length === 0 ? a : a.substring(u),
          g = f.startsWith(bd),
          m = g ? f.substring(1) : f,
          h = d && d > u ? d - u : void 0;
        return {
          modifiers: l,
          hasImportantModifier: g,
          baseClassName: m,
          maybePostfixModifierPosition: h,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  Sg = (e) => {
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
  Eg = (e) => ({ cache: wg(e.cacheSize), parseClassName: _g(e), ...gg(e) }),
  Tg = /\s+/,
  Ag = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(Tg);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const c = o[l],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: g,
        } = n(c);
      let m = !!g,
        h = r(m ? f.substring(0, g) : f);
      if (!h) {
        if (!m) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((h = r(f)), !h)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        m = !1;
      }
      const y = Sg(u).join(":"),
        b = d ? y + bd : y,
        x = b + h;
      if (i.includes(x)) continue;
      i.push(x);
      const _ = s(h, m);
      for (let E = 0; E < _.length; ++E) {
        const w = _[E];
        i.push(b + w);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Cg() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = xd(t)) && (r && (r += " "), (r += n));
  return r;
}
const xd = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xd(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Rg(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(l) {
    const c = t.reduce((u, d) => d(u), e());
    return (n = Eg(c)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const u = Ag(l, n);
    return s(l, u), u;
  }
  return function () {
    return i(Cg.apply(null, arguments));
  };
}
const ve = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  wd = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Pg = /^\d+\/\d+$/,
  kg = new Set(["px", "full", "screen"]),
  Ng = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  jg =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Og = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Dg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Mg =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  $t = (e) => er(e) || kg.has(e) || Pg.test(e),
  Qt = (e) => fr(e, "length", zg),
  er = (e) => !!e && !Number.isNaN(Number(e)),
  qi = (e) => fr(e, "number", er),
  _r = (e) => !!e && Number.isInteger(Number(e)),
  Fg = (e) => e.endsWith("%") && er(e.slice(0, -1)),
  oe = (e) => wd.test(e),
  en = (e) => Ng.test(e),
  Lg = new Set(["length", "size", "percentage"]),
  Ig = (e) => fr(e, Lg, _d),
  Vg = (e) => fr(e, "position", _d),
  Bg = new Set(["image", "url"]),
  Ug = (e) => fr(e, Bg, Hg),
  $g = (e) => fr(e, "", Wg),
  Sr = () => !0,
  fr = (e, t, n) => {
    const r = wd.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  zg = (e) => jg.test(e) && !Og.test(e),
  _d = () => !1,
  Wg = (e) => Dg.test(e),
  Hg = (e) => Mg.test(e),
  Zg = () => {
    const e = ve("colors"),
      t = ve("spacing"),
      n = ve("blur"),
      r = ve("brightness"),
      s = ve("borderColor"),
      i = ve("borderRadius"),
      o = ve("borderSpacing"),
      a = ve("borderWidth"),
      l = ve("contrast"),
      c = ve("grayscale"),
      u = ve("hueRotate"),
      d = ve("invert"),
      f = ve("gap"),
      g = ve("gradientColorStops"),
      m = ve("gradientColorStopPositions"),
      h = ve("inset"),
      y = ve("margin"),
      b = ve("opacity"),
      x = ve("padding"),
      _ = ve("saturate"),
      E = ve("scale"),
      w = ve("sepia"),
      R = ve("skew"),
      A = ve("space"),
      C = ve("translate"),
      O = () => ["auto", "contain", "none"],
      M = () => ["auto", "hidden", "clip", "visible", "scroll"],
      U = () => ["auto", oe, t],
      N = () => [oe, t],
      I = () => ["", $t, Qt],
      z = () => ["auto", er, oe],
      J = () => [
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
      q = () => ["solid", "dashed", "dotted", "double", "none"],
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
      W = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      ne = () => ["", "0", oe],
      fe = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      he = () => [er, oe];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Sr],
        spacing: [$t, Qt],
        blur: ["none", "", en, oe],
        brightness: he(),
        borderColor: [e],
        borderRadius: ["none", "", "full", en, oe],
        borderSpacing: N(),
        borderWidth: I(),
        contrast: he(),
        grayscale: ne(),
        hueRotate: he(),
        invert: ne(),
        gap: N(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Fg, Qt],
        inset: U(),
        margin: U(),
        opacity: he(),
        padding: N(),
        saturate: he(),
        scale: he(),
        sepia: ne(),
        skew: he(),
        space: N(),
        translate: N(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", oe] }],
        container: ["container"],
        columns: [{ columns: [en] }],
        "break-after": [{ "break-after": fe() }],
        "break-before": [{ "break-before": fe() }],
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
        "object-position": [{ object: [...J(), oe] }],
        overflow: [{ overflow: M() }],
        "overflow-x": [{ "overflow-x": M() }],
        "overflow-y": [{ "overflow-y": M() }],
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
        z: [{ z: ["auto", _r, oe] }],
        basis: [{ basis: U() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", oe] }],
        grow: [{ grow: ne() }],
        shrink: [{ shrink: ne() }],
        order: [{ order: ["first", "last", "none", _r, oe] }],
        "grid-cols": [{ "grid-cols": [Sr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", _r, oe] }, oe] }],
        "col-start": [{ "col-start": z() }],
        "col-end": [{ "col-end": z() }],
        "grid-rows": [{ "grid-rows": [Sr] }],
        "row-start-end": [{ row: ["auto", { span: [_r, oe] }, oe] }],
        "row-start": [{ "row-start": z() }],
        "row-end": [{ "row-end": z() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", oe] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", oe] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...W()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...W(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...W(), "baseline"] }],
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
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", oe, t] }],
        "min-w": [{ "min-w": [oe, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              oe,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [en] },
              en,
            ],
          },
        ],
        h: [{ h: [oe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [oe, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [oe, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [oe, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", en, Qt] }],
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
              qi,
            ],
          },
        ],
        "font-family": [{ font: [Sr] }],
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
              oe,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", er, qi] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              $t,
              oe,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", oe] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", oe] }],
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
        "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", $t, Qt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", $t, oe] }],
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
              oe,
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
        content: [{ content: ["none", oe] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [b] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...J(), Vg] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Ig] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Ug,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [m] }],
        "gradient-via-pos": [{ via: [m] }],
        "gradient-to-pos": [{ to: [m] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
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
        "border-style": [{ border: [...q(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: q() }],
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
        "outline-style": [{ outline: ["", ...q()] }],
        "outline-offset": [{ "outline-offset": [$t, oe] }],
        "outline-w": [{ outline: [$t, Qt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: I() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [$t, Qt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", en, $g] }],
        "shadow-color": [{ shadow: [Sr] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", en, oe] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [_] }],
        sepia: [{ sepia: [w] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [_] }],
        "backdrop-sepia": [{ "backdrop-sepia": [w] }],
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
              oe,
            ],
          },
        ],
        duration: [{ duration: he() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", oe] }],
        delay: [{ delay: he() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", oe] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [_r, oe] }],
        "translate-x": [{ "translate-x": [C] }],
        "translate-y": [{ "translate-y": [C] }],
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
              oe,
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
              oe,
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
          { "will-change": ["auto", "scroll", "contents", "transform", oe] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [$t, Qt, qi] }],
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
  Gg = Rg(Zg);
function te(...e) {
  return Gg(yd(e));
}
const Sd = ({ className: e }) =>
  p.jsx("div", {
    className: te("h-16 w-[184px]", e),
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
 */ const qg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ed = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Kg = {
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
 */ const Xg = v.forwardRef(
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
    l
  ) =>
    v.createElement(
      "svg",
      {
        ref: l,
        ...Kg,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Ed("lucide", s),
        ...a,
      },
      [
        ...o.map(([c, u]) => v.createElement(c, u)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const In = (e, t) => {
  const n = v.forwardRef(({ className: r, ...s }, i) =>
    v.createElement(Xg, {
      ref: i,
      iconNode: t,
      className: Ed(`lucide-${qg(e)}`, r),
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
 */ const Yg = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  xa = In("ArrowUpRight", Yg);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  Qg = In("Facebook", Jg);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ],
  ty = In("Loader", ey);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ny = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  ry = In("MapPin", ny);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sy = [
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
  iy = In("Smartphone", sy);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oy = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  ay = In("Upload", oy);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  ly = In("X", cy);
function Hc(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Td(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Hc(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Hc(e[s], null);
        }
      };
  };
}
function Ve(...e) {
  return v.useCallback(Td(...e), e);
}
var on = v.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    s = v.Children.toArray(n),
    i = s.find(dy);
  if (i) {
    const o = i.props.children,
      a = s.map((l) =>
        l === i
          ? v.Children.count(o) > 1
            ? v.Children.only(null)
            : v.isValidElement(o)
            ? o.props.children
            : null
          : l
      );
    return p.jsx(ko, {
      ...r,
      ref: t,
      children: v.isValidElement(o) ? v.cloneElement(o, void 0, a) : null,
    });
  }
  return p.jsx(ko, { ...r, ref: t, children: n });
});
on.displayName = "Slot";
var ko = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const s = hy(n);
    return v.cloneElement(n, { ...fy(r, n.props), ref: t ? Td(t, s) : s });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
ko.displayName = "SlotClone";
var uy = ({ children: e }) => p.jsx(p.Fragment, { children: e });
function dy(e) {
  return v.isValidElement(e) && e.type === uy;
}
function fy(e, t) {
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
function hy(e) {
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
const Zc = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Gc = yd,
  wa = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Gc(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((c) => {
        const u = n == null ? void 0 : n[c],
          d = i == null ? void 0 : i[c];
        if (u === null) return null;
        const f = Zc(u) || Zc(d);
        return s[c][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, u) => {
          let [d, f] = u;
          return f === void 0 || (c[d] = f), c;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, u) => {
              let { class: d, className: f, ...g } = u;
              return Object.entries(g).every((m) => {
                let [h, y] = m;
                return Array.isArray(y)
                  ? y.includes({ ...i, ...a }[h])
                  : { ...i, ...a }[h] === y;
              })
                ? [...c, d, f]
                : c;
            }, []);
    return Gc(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  py = wa(
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
  $e = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...s }, i) => {
      const o = r ? on : "button";
      return p.jsx(o, {
        className: te(py({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
      });
    }
  );
$e.displayName = "Button";
function xe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function my(e, t) {
  const n = v.createContext(t),
    r = (i) => {
      const { children: o, ...a } = i,
        l = v.useMemo(() => a, Object.values(a));
      return p.jsx(n.Provider, { value: l, children: o });
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
function Vn(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = v.createContext(o),
      l = n.length;
    n = [...n, o];
    const c = (d) => {
      var b;
      const { scope: f, children: g, ...m } = d,
        h = ((b = f == null ? void 0 : f[e]) == null ? void 0 : b[l]) || a,
        y = v.useMemo(() => m, Object.values(m));
      return p.jsx(h.Provider, { value: y, children: g });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      var h;
      const g = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a,
        m = v.useContext(g);
      if (m) return m;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const s = () => {
    const i = n.map((o) => v.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (s.scopeName = e), [r, gy(s, ...t)];
}
function gy(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var kn =
    globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  yy = fg.useId || (() => {}),
  vy = 0;
function Dr(e) {
  const [t, n] = v.useState(yy());
  return (
    kn(() => {
      n((r) => r ?? String(vy++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
function _t(e) {
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
function Ei({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = by({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    o = i ? e : r,
    a = _t(n),
    l = v.useCallback(
      (c) => {
        if (i) {
          const d = typeof c == "function" ? c(e) : c;
          d !== e && a(d);
        } else s(c);
      },
      [i, e, s, a]
    );
  return [o, l];
}
function by({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    s = v.useRef(r),
    i = _t(t);
  return (
    v.useEffect(() => {
      s.current !== r && (i(r), (s.current = r));
    }, [r, s, i]),
    n
  );
}
var xy = [
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
  Ae = xy.reduce((e, t) => {
    const n = v.forwardRef((r, s) => {
      const { asChild: i, ...o } = r,
        a = i ? on : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(a, { ...o, ref: s })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Ad(e, t) {
  e && md.flushSync(() => e.dispatchEvent(t));
}
function Cd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _t(e);
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
var wy = "DismissableLayer",
  No = "dismissableLayer.update",
  _y = "dismissableLayer.pointerDownOutside",
  Sy = "dismissableLayer.focusOutside",
  qc,
  Rd = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Pd = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      c = v.useContext(Rd),
      [u, d] = v.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = v.useState({}),
      m = Ve(t, (A) => d(A)),
      h = Array.from(c.layers),
      [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = h.indexOf(y),
      x = u ? h.indexOf(u) : -1,
      _ = c.layersWithOutsidePointerEventsDisabled.size > 0,
      E = x >= b,
      w = Ay((A) => {
        const C = A.target,
          O = [...c.branches].some((M) => M.contains(C));
        !E ||
          O ||
          (s == null || s(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f),
      R = Cy((A) => {
        const C = A.target;
        [...c.branches].some((M) => M.contains(C)) ||
          (i == null || i(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f);
    return (
      Cd((A) => {
        x === c.layers.size - 1 &&
          (r == null || r(A),
          !A.defaultPrevented && a && (A.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (u)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((qc = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            Kc(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = qc);
            }
          );
      }, [u, f, n, c]),
      v.useEffect(
        () => () => {
          u &&
            (c.layers.delete(u),
            c.layersWithOutsidePointerEventsDisabled.delete(u),
            Kc());
        },
        [u, c]
      ),
      v.useEffect(() => {
        const A = () => g({});
        return (
          document.addEventListener(No, A),
          () => document.removeEventListener(No, A)
        );
      }, []),
      p.jsx(Ae.div, {
        ...l,
        ref: m,
        style: {
          pointerEvents: _ ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: xe(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: xe(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        ),
      })
    );
  });
Pd.displayName = wy;
var Ey = "DismissableLayerBranch",
  Ty = v.forwardRef((e, t) => {
    const n = v.useContext(Rd),
      r = v.useRef(null),
      s = Ve(t, r);
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
      p.jsx(Ae.div, { ...e, ref: s })
    );
  });
Ty.displayName = Ey;
function Ay(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _t(e),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              kd(_y, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
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
function Cy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _t(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          kd(Sy, n, { originalEvent: i }, { discrete: !1 });
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
function Kc() {
  const e = new CustomEvent(No);
  document.dispatchEvent(e);
}
function kd(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? Ad(s, i) : s.dispatchEvent(i);
}
var Ki = "focusScope.autoFocusOnMount",
  Xi = "focusScope.autoFocusOnUnmount",
  Xc = { bubbles: !1, cancelable: !0 },
  Ry = "FocusScope",
  _a = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        ...o
      } = e,
      [a, l] = v.useState(null),
      c = _t(s),
      u = _t(i),
      d = v.useRef(null),
      f = Ve(t, (h) => l(h)),
      g = v.useRef({
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
        let h = function (_) {
            if (g.paused || !a) return;
            const E = _.target;
            a.contains(E) ? (d.current = E) : nn(d.current, { select: !0 });
          },
          y = function (_) {
            if (g.paused || !a) return;
            const E = _.relatedTarget;
            E !== null && (a.contains(E) || nn(d.current, { select: !0 }));
          },
          b = function (_) {
            if (document.activeElement === document.body)
              for (const w of _) w.removedNodes.length > 0 && nn(a);
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
    }, [r, a, g.paused]),
      v.useEffect(() => {
        if (a) {
          Jc.add(g);
          const h = document.activeElement;
          if (!a.contains(h)) {
            const b = new CustomEvent(Ki, Xc);
            a.addEventListener(Ki, c),
              a.dispatchEvent(b),
              b.defaultPrevented ||
                (Py(Dy(Nd(a)), { select: !0 }),
                document.activeElement === h && nn(a));
          }
          return () => {
            a.removeEventListener(Ki, c),
              setTimeout(() => {
                const b = new CustomEvent(Xi, Xc);
                a.addEventListener(Xi, u),
                  a.dispatchEvent(b),
                  b.defaultPrevented || nn(h ?? document.body, { select: !0 }),
                  a.removeEventListener(Xi, u),
                  Jc.remove(g);
              }, 0);
          };
        }
      }, [a, c, u, g]);
    const m = v.useCallback(
      (h) => {
        if ((!n && !r) || g.paused) return;
        const y = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
          b = document.activeElement;
        if (y && b) {
          const x = h.currentTarget,
            [_, E] = ky(x);
          _ && E
            ? !h.shiftKey && b === E
              ? (h.preventDefault(), n && nn(_, { select: !0 }))
              : h.shiftKey &&
                b === _ &&
                (h.preventDefault(), n && nn(E, { select: !0 }))
            : b === x && h.preventDefault();
        }
      },
      [n, r, g.paused]
    );
    return p.jsx(Ae.div, { tabIndex: -1, ...o, ref: f, onKeyDown: m });
  });
_a.displayName = Ry;
function Py(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((nn(r, { select: t }), document.activeElement !== n)) return;
}
function ky(e) {
  const t = Nd(e),
    n = Yc(t, e),
    r = Yc(t.reverse(), e);
  return [n, r];
}
function Nd(e) {
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
function Yc(e, t) {
  for (const n of e) if (!Ny(n, { upTo: t })) return n;
}
function Ny(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function jy(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && jy(e) && t && e.select();
  }
}
var Jc = Oy();
function Oy() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Qc(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Qc(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Qc(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Dy(e) {
  return e.filter((t) => t.tagName !== "A");
}
var My = "Portal",
  Sa = v.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = v.useState(!1);
    kn(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? hg.createPortal(p.jsx(Ae.div, { ...r, ref: t }), o) : null;
  });
Sa.displayName = My;
function Fy(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bn = (e) => {
  const { present: t, children: n } = e,
    r = Ly(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = Ve(r.ref, Iy(s));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(s, { ref: i })
    : null;
};
Bn.displayName = "Presence";
function Ly(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    s = v.useRef(e),
    i = v.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = Fy(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const c = Ps(r.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    kn(() => {
      const c = r.current,
        u = s.current;
      if (u !== e) {
        const f = i.current,
          g = Ps(c);
        e
          ? l("MOUNT")
          : g === "none" || (c == null ? void 0 : c.display) === "none"
          ? l("UNMOUNT")
          : l(u && f !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, l]),
    kn(() => {
      if (t) {
        let c;
        const u = t.ownerDocument.defaultView ?? window,
          d = (g) => {
            const h = Ps(r.current).includes(g.animationName);
            if (g.target === t && h && (l("ANIMATION_END"), !s.current)) {
              const y = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = u.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = y);
                }));
            }
          },
          f = (g) => {
            g.target === t && (i.current = Ps(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            u.clearTimeout(c),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: v.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function Ps(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Iy(e) {
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
var Yi = 0;
function jd() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? el()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? el()),
      Yi++,
      () => {
        Yi === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Yi--;
      }
    );
  }, []);
}
function el() {
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
var Nt = function () {
  return (
    (Nt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Nt.apply(this, arguments)
  );
};
function Od(e, t) {
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
function Vy(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Us = "right-scroll-bar-position",
  $s = "width-before-scroll-bar",
  By = "with-scroll-bars-hidden",
  Uy = "--removed-body-scroll-bar-size";
function Ji(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $y(e, t) {
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
var zy = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  tl = new WeakMap();
function Wy(e, t) {
  var n = $y(null, function (r) {
    return e.forEach(function (s) {
      return Ji(s, r);
    });
  });
  return (
    zy(
      function () {
        var r = tl.get(n);
        if (r) {
          var s = new Set(r),
            i = new Set(e),
            o = n.current;
          s.forEach(function (a) {
            i.has(a) || Ji(a, null);
          }),
            i.forEach(function (a) {
              s.has(a) || Ji(a, o);
            });
        }
        tl.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Hy(e) {
  return e;
}
function Zy(e, t) {
  t === void 0 && (t = Hy);
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
        var l = function () {
            var u = o;
            (o = []), u.forEach(i);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(),
          (n = {
            push: function (u) {
              o.push(u), c();
            },
            filter: function (u) {
              return (o = o.filter(u)), n;
            },
          });
      },
    };
  return s;
}
function Gy(e) {
  e === void 0 && (e = {});
  var t = Zy(null);
  return (t.options = Nt({ async: !0, ssr: !1 }, e)), t;
}
var Dd = function (e) {
  var t = e.sideCar,
    n = Od(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, Nt({}, n));
};
Dd.isSideCarExport = !0;
function qy(e, t) {
  return e.useMedium(t), Dd;
}
var Md = Gy(),
  Qi = function () {},
  Ti = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: Qi,
        onWheelCapture: Qi,
        onTouchMoveCapture: Qi,
      }),
      s = r[0],
      i = r[1],
      o = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      g = e.noIsolation,
      m = e.inert,
      h = e.allowPinchZoom,
      y = e.as,
      b = y === void 0 ? "div" : y,
      x = e.gapMode,
      _ = Od(e, [
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
      E = f,
      w = Wy([n, t]),
      R = Nt(Nt({}, _), s);
    return v.createElement(
      v.Fragment,
      null,
      u &&
        v.createElement(E, {
          sideCar: Md,
          removeScrollBar: c,
          shards: d,
          noIsolation: g,
          inert: m,
          setCallbacks: i,
          allowPinchZoom: !!h,
          lockRef: n,
          gapMode: x,
        }),
      o
        ? v.cloneElement(v.Children.only(a), Nt(Nt({}, R), { ref: w }))
        : v.createElement(b, Nt({}, R, { className: l, ref: w }), a)
    );
  });
Ti.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ti.classNames = { fullWidth: $s, zeroRight: Us };
var Ky = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Xy() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ky();
  return t && e.setAttribute("nonce", t), e;
}
function Yy(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Jy(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Qy = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Xy()) && (Yy(t, n), Jy(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  ev = function () {
    var e = Qy();
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
  Fd = function () {
    var e = ev(),
      t = function (n) {
        var r = n.styles,
          s = n.dynamic;
        return e(r, s), null;
      };
    return t;
  },
  tv = { left: 0, top: 0, right: 0, gap: 0 },
  eo = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  nv = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [eo(n), eo(r), eo(s)];
  },
  rv = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return tv;
    var t = nv(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  sv = Fd(),
  tr = "data-scroll-locked",
  iv = function (e, t, n, r) {
    var s = e.left,
      i = e.top,
      o = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          By,
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
          tr,
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
          Us,
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
          $s,
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
        .concat(Us, " .")
        .concat(
          Us,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat($s, " .")
        .concat(
          $s,
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
          tr,
          `] {
    `
        )
        .concat(Uy, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  nl = function () {
    var e = parseInt(document.body.getAttribute(tr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ov = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(tr, (nl() + 1).toString()),
        function () {
          var e = nl() - 1;
          e <= 0
            ? document.body.removeAttribute(tr)
            : document.body.setAttribute(tr, e.toString());
        }
      );
    }, []);
  },
  av = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      s = r === void 0 ? "margin" : r;
    ov();
    var i = v.useMemo(
      function () {
        return rv(s);
      },
      [s]
    );
    return v.createElement(sv, { styles: iv(i, !t, s, n ? "" : "!important") });
  },
  jo = !1;
if (typeof window < "u")
  try {
    var ks = Object.defineProperty({}, "passive", {
      get: function () {
        return (jo = !0), !0;
      },
    });
    window.addEventListener("test", ks, ks),
      window.removeEventListener("test", ks, ks);
  } catch {
    jo = !1;
  }
var zn = jo ? { passive: !1 } : !1,
  cv = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ld = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !cv(e) && n[t] === "visible")
    );
  },
  lv = function (e) {
    return Ld(e, "overflowY");
  },
  uv = function (e) {
    return Ld(e, "overflowX");
  },
  rl = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = Id(e, r);
      if (s) {
        var i = Vd(e, r),
          o = i[1],
          a = i[2];
        if (o > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  dv = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  fv = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Id = function (e, t) {
    return e === "v" ? lv(t) : uv(t);
  },
  Vd = function (e, t) {
    return e === "v" ? dv(t) : fv(t);
  },
  hv = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  pv = function (e, t, n, r, s) {
    var i = hv(e, window.getComputedStyle(t).direction),
      o = i * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      var g = Vd(e, a),
        m = g[0],
        h = g[1],
        y = g[2],
        b = h - y - i * m;
      (m || b) && Id(e, a) && ((d += b), (f += m)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return ((u && Math.abs(d) < 1) || (!u && Math.abs(f) < 1)) && (c = !0), c;
  },
  Ns = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  sl = function (e) {
    return [e.deltaX, e.deltaY];
  },
  il = function (e) {
    return e && "current" in e ? e.current : e;
  },
  mv = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  gv = function (e) {
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
  yv = 0,
  Wn = [];
function vv(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    s = v.useState(yv++)[0],
    i = v.useState(Fd)[0],
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
          var h = Vy([e.lockRef.current], (e.shards || []).map(il), !0).filter(
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
      var b = Ns(h),
        x = n.current,
        _ = "deltaX" in h ? h.deltaX : x[0] - b[0],
        E = "deltaY" in h ? h.deltaY : x[1] - b[1],
        w,
        R = h.target,
        A = Math.abs(_) > Math.abs(E) ? "h" : "v";
      if ("touches" in h && A === "h" && R.type === "range") return !1;
      var C = rl(A, R);
      if (!C) return !0;
      if ((C ? (w = A) : ((w = A === "v" ? "h" : "v"), (C = rl(A, R))), !C))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (_ || E) && (r.current = w), !w)
      )
        return !0;
      var O = r.current || w;
      return pv(O, y, h, O === "h" ? _ : E);
    }, []),
    l = v.useCallback(function (h) {
      var y = h;
      if (!(!Wn.length || Wn[Wn.length - 1] !== i)) {
        var b = "deltaY" in y ? sl(y) : Ns(y),
          x = t.current.filter(function (w) {
            return (
              w.name === y.type &&
              (w.target === y.target || y.target === w.shadowParent) &&
              mv(w.delta, b)
            );
          })[0];
        if (x && x.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!x) {
          var _ = (o.current.shards || [])
              .map(il)
              .filter(Boolean)
              .filter(function (w) {
                return w.contains(y.target);
              }),
            E = _.length > 0 ? a(y, _[0]) : !o.current.noIsolation;
          E && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    c = v.useCallback(function (h, y, b, x) {
      var _ = { name: h, delta: y, target: b, should: x, shadowParent: bv(b) };
      t.current.push(_),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== _;
          });
        }, 1);
    }, []),
    u = v.useCallback(function (h) {
      (n.current = Ns(h)), (r.current = void 0);
    }, []),
    d = v.useCallback(function (h) {
      c(h.type, sl(h), h.target, a(h, e.lockRef.current));
    }, []),
    f = v.useCallback(function (h) {
      c(h.type, Ns(h), h.target, a(h, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      Wn.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, zn),
      document.addEventListener("touchmove", l, zn),
      document.addEventListener("touchstart", u, zn),
      function () {
        (Wn = Wn.filter(function (h) {
          return h !== i;
        })),
          document.removeEventListener("wheel", l, zn),
          document.removeEventListener("touchmove", l, zn),
          document.removeEventListener("touchstart", u, zn);
      }
    );
  }, []);
  var g = e.removeScrollBar,
    m = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    m ? v.createElement(i, { styles: gv(s) }) : null,
    g ? v.createElement(av, { gapMode: e.gapMode }) : null
  );
}
function bv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const xv = qy(Md, vv);
var Ea = v.forwardRef(function (e, t) {
  return v.createElement(Ti, Nt({}, e, { ref: t, sideCar: xv }));
});
Ea.classNames = Ti.classNames;
var wv = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Hn = new WeakMap(),
  js = new WeakMap(),
  Os = {},
  to = 0,
  Bd = function (e) {
    return e && (e.host || Bd(e.parentNode));
  },
  _v = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Bd(n);
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
  Sv = function (e, t, n, r) {
    var s = _v(t, Array.isArray(e) ? e : [e]);
    Os[n] || (Os[n] = new WeakMap());
    var i = Os[n],
      o = [],
      a = new Set(),
      l = new Set(s),
      c = function (d) {
        !d || a.has(d) || (a.add(d), c(d.parentNode));
      };
    s.forEach(c);
    var u = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) u(f);
          else
            try {
              var g = f.getAttribute(r),
                m = g !== null && g !== "false",
                h = (Hn.get(f) || 0) + 1,
                y = (i.get(f) || 0) + 1;
              Hn.set(f, h),
                i.set(f, y),
                o.push(f),
                h === 1 && m && js.set(f, !0),
                y === 1 && f.setAttribute(n, "true"),
                m || f.setAttribute(r, "true");
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", f, b);
            }
        });
    };
    return (
      u(t),
      a.clear(),
      to++,
      function () {
        o.forEach(function (d) {
          var f = Hn.get(d) - 1,
            g = i.get(d) - 1;
          Hn.set(d, f),
            i.set(d, g),
            f || (js.has(d) || d.removeAttribute(r), js.delete(d)),
            g || d.removeAttribute(n);
        }),
          to--,
          to ||
            ((Hn = new WeakMap()),
            (Hn = new WeakMap()),
            (js = new WeakMap()),
            (Os = {}));
      }
    );
  },
  Ud = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      s = wv(e);
    return s
      ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
        Sv(r, s, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ta = "Dialog",
  [$d, kR] = Vn(Ta),
  [Ev, At] = $d(Ta),
  zd = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !0,
      } = e,
      a = v.useRef(null),
      l = v.useRef(null),
      [c = !1, u] = Ei({ prop: r, defaultProp: s, onChange: i });
    return p.jsx(Ev, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Dr(),
      titleId: Dr(),
      descriptionId: Dr(),
      open: c,
      onOpenChange: u,
      onOpenToggle: v.useCallback(() => u((d) => !d), [u]),
      modal: o,
      children: n,
    });
  };
zd.displayName = Ta;
var Wd = "DialogTrigger",
  Hd = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = At(Wd, n),
      i = Ve(t, s.triggerRef);
    return p.jsx(Ae.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": Ra(s.open),
      ...r,
      ref: i,
      onClick: xe(e.onClick, s.onOpenToggle),
    });
  });
Hd.displayName = Wd;
var Aa = "DialogPortal",
  [Tv, Zd] = $d(Aa, { forceMount: void 0 }),
  Gd = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
      i = At(Aa, t);
    return p.jsx(Tv, {
      scope: t,
      forceMount: n,
      children: v.Children.map(r, (o) =>
        p.jsx(Bn, {
          present: n || i.open,
          children: p.jsx(Sa, { asChild: !0, container: s, children: o }),
        })
      ),
    });
  };
Gd.displayName = Aa;
var Ys = "DialogOverlay",
  qd = v.forwardRef((e, t) => {
    const n = Zd(Ys, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = At(Ys, e.__scopeDialog);
    return i.modal
      ? p.jsx(Bn, {
          present: r || i.open,
          children: p.jsx(Av, { ...s, ref: t }),
        })
      : null;
  });
qd.displayName = Ys;
var Av = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = At(Ys, n);
    return p.jsx(Ea, {
      as: on,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: p.jsx(Ae.div, {
        "data-state": Ra(s.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Nn = "DialogContent",
  Kd = v.forwardRef((e, t) => {
    const n = Zd(Nn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = At(Nn, e.__scopeDialog);
    return p.jsx(Bn, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(Cv, { ...s, ref: t })
        : p.jsx(Rv, { ...s, ref: t }),
    });
  });
Kd.displayName = Nn;
var Cv = v.forwardRef((e, t) => {
    const n = At(Nn, e.__scopeDialog),
      r = v.useRef(null),
      s = Ve(t, n.contentRef, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i) return Ud(i);
      }, []),
      p.jsx(Xd, {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: xe(e.onCloseAutoFocus, (i) => {
          var o;
          i.preventDefault(), (o = n.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: xe(e.onPointerDownOutside, (i) => {
          const o = i.detail.originalEvent,
            a = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: xe(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  Rv = v.forwardRef((e, t) => {
    const n = At(Nn, e.__scopeDialog),
      r = v.useRef(!1),
      s = v.useRef(!1);
    return p.jsx(Xd, {
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
        var l, c;
        (l = e.onInteractOutside) == null || l.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((c = n.triggerRef.current) == null ? void 0 : c.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  Xd = v.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        ...o
      } = e,
      a = At(Nn, n),
      l = v.useRef(null),
      c = Ve(t, l);
    return (
      jd(),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(_a, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: i,
            children: p.jsx(Pd, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Ra(a.open),
              ...o,
              ref: c,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(Pv, { titleId: a.titleId }),
              p.jsx(Nv, { contentRef: l, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ca = "DialogTitle",
  Yd = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = At(Ca, n);
    return p.jsx(Ae.h2, { id: s.titleId, ...r, ref: t });
  });
Yd.displayName = Ca;
var Jd = "DialogDescription",
  Qd = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = At(Jd, n);
    return p.jsx(Ae.p, { id: s.descriptionId, ...r, ref: t });
  });
Qd.displayName = Jd;
var ef = "DialogClose",
  tf = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = At(ef, n);
    return p.jsx(Ae.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: xe(e.onClick, () => s.onOpenChange(!1)),
    });
  });
tf.displayName = ef;
function Ra(e) {
  return e ? "open" : "closed";
}
var nf = "DialogTitleWarning",
  [NR, rf] = my(nf, { contentName: Nn, titleName: Ca, docsSlug: "dialog" }),
  Pv = ({ titleId: e }) => {
    const t = rf(nf),
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
  kv = "DialogDescriptionWarning",
  Nv = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      rf(kv).contentName
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
  jv = zd,
  Ov = Hd,
  Dv = Gd,
  sf = qd,
  of = Kd,
  af = Yd,
  cf = Qd,
  lf = tf;
const Mv = jv,
  Fv = Ov,
  Lv = lf,
  Iv = Dv,
  uf = v.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(sf, {
      className: te(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
uf.displayName = sf.displayName;
const Vv = wa(
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
  df = v.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, s) =>
      p.jsxs(Iv, {
        children: [
          p.jsx(uf, {}),
          p.jsxs(of, {
            ref: s,
            className: te(Vv({ side: e }), t),
            ...r,
            children: [
              p.jsxs(lf, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  p.jsx(ly, { className: "size-8" }),
                  p.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              n,
            ],
          }),
        ],
      })
  );
df.displayName = of.displayName;
const ff = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: te("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
ff.displayName = "SheetHeader";
const Bv = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(af, {
    ref: n,
    className: te("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
Bv.displayName = af.displayName;
const Uv = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(cf, { ref: n, className: te("text-sm text-muted-foreground", e), ...t })
);
Uv.displayName = cf.displayName;
const ol = (e) => {
    let t;
    const n = new Set(),
      r = (c, u) => {
        const d = typeof c == "function" ? c(t) : c;
        if (!Object.is(d, t)) {
          const f = t;
          (t =
            u ?? (typeof d != "object" || d === null)
              ? d
              : Object.assign({}, t, d)),
            n.forEach((g) => g(t, f));
        }
      },
      s = () => t,
      a = {
        setState: r,
        getState: s,
        getInitialState: () => l,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
      },
      l = (t = e(r, s, a));
    return a;
  },
  $v = (e) => (e ? ol(e) : ol),
  zv = (e) => e;
function Wv(e, t = zv) {
  const n = le.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return le.useDebugValue(n), n;
}
const Hv = (e) => {
    const t = $v(e),
      n = (r) => Wv(t, r);
    return Object.assign(n, t), n;
  },
  Zv = (e) => Hv;
function Gv(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const o = (l) => (l === null ? null : JSON.parse(l, void 0)),
        a = (i = n.getItem(s)) != null ? i : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (s, i) => n.setItem(s, JSON.stringify(i, void 0)),
    removeItem: (s) => n.removeItem(s),
  };
}
const Oo = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Oo(r)(n);
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
          return Oo(r)(n);
        },
      };
    }
  },
  qv = (e, t) => (n, r, s) => {
    let i = {
        storage: Gv(() => localStorage),
        partialize: (h) => h,
        version: 0,
        merge: (h, y) => ({ ...y, ...h }),
        ...t,
      },
      o = !1;
    const a = new Set(),
      l = new Set();
    let c = i.storage;
    if (!c)
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
        return c.setItem(i.name, { state: h, version: i.version });
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
    let g;
    const m = () => {
      var h, y;
      if (!c) return;
      (o = !1),
        a.forEach((x) => {
          var _;
          return x((_ = r()) != null ? _ : f);
        });
      const b =
        ((y = i.onRehydrateStorage) == null
          ? void 0
          : y.call(i, (h = r()) != null ? h : f)) || void 0;
      return Oo(c.getItem.bind(c))(i.name)
        .then((x) => {
          if (x)
            if (typeof x.version == "number" && x.version !== i.version) {
              if (i.migrate) {
                const _ = i.migrate(x.state, x.version);
                return _ instanceof Promise ? _.then((E) => [!0, E]) : [!0, _];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, x.state];
          return [!1, void 0];
        })
        .then((x) => {
          var _;
          const [E, w] = x;
          if (((g = i.merge(w, (_ = r()) != null ? _ : f)), n(g, !0), E))
            return u();
        })
        .then(() => {
          b == null || b(g, void 0),
            (g = r()),
            (o = !0),
            l.forEach((x) => x(g));
        })
        .catch((x) => {
          b == null || b(void 0, x);
        });
    };
    return (
      (s.persist = {
        setOptions: (h) => {
          (i = { ...i, ...h }), h.storage && (c = h.storage);
        },
        clearStorage: () => {
          c == null || c.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => m(),
        hasHydrated: () => o,
        onHydrate: (h) => (
          a.add(h),
          () => {
            a.delete(h);
          }
        ),
        onFinishHydration: (h) => (
          l.add(h),
          () => {
            l.delete(h);
          }
        ),
      }),
      i.skipHydration || m(),
      g || f
    );
  },
  Kv = qv;
var Ge = ((e) => ((e.EN = "en"), (e.RU = "ru"), e))(Ge || {});
const Be = Zv()(
    Kv((e) => ({ lang: "en", setLang: (t) => e({ lang: t }) }), {
      name: "lang-storage",
    })
  ),
  X = (e) => (e === Ge.RU ? 0 : 1),
  hf = [
    {
      data: [
        { title: "Медиа", link: "" },
        { title: "Контакты", link: "/contacts" },
      ],
    },
    {
      data: [
        { title: "Media", link: "" },
        { title: "Contacts", link: "/contacts" },
      ],
    },
  ],
  pf = [
    {
      data: [
        { title: "О выставке", link: "/about" },
        { title: "Посетителям", link: "" },
        { title: "Экспонентам", link: "" },
      ],
    },
    {
      data: [
        { title: "About exhibition", link: "/about" },
        { title: "To the Visitors", link: "" },
        { title: "To the Exhibitors", link: "" },
      ],
    },
  ],
  Xv = [
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
  Yv = () => {
    const [e, t] = v.useState(!1),
      n = Be((s) => s.lang),
      r = hf.concat(pf);
    return (
      console.log(r),
      p.jsxs(Mv, {
        onOpenChange: () => t(!e),
        open: e,
        children: [
          p.jsx(Fv, {
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
          p.jsxs(df, {
            className: "overflow-y-auto",
            children: [
              p.jsx(Lv, {}),
              p.jsxs(ff, {
                className: "mt-16 flex flex-col gap-2",
                children: [
                  p.jsx(Me, {
                    to: "https://qacis.turkmenexpo.com/",
                    target: "_blank",
                    children: p.jsxs($e, {
                      variant: "outline",
                      className: "w-full",
                      size: "sm",
                      children: ["QACIS 2025", p.jsx(xa, {})],
                    }),
                  }),
                  p.jsx(Me, {
                    to:
                      n === "ru"
                        ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                        : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg",
                    children: p.jsx($e, {
                      variant: "secondary",
                      size: "sm",
                      className:
                        "bg-[#FFAE2A] w-full text-on_teritary hover:bg-[#FFAE2A]/90",
                      children:
                        n === "ru"
                          ? "Официальная поддержка"
                          : "Official Support",
                    }),
                  }),
                  p.jsx(Me, {
                    to: "/B2B-B2G",
                    onClick: () => t(!1),
                    children: p.jsx($e, {
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
                children: Xv[X(n)].data.map((s) =>
                  p.jsx(
                    Me,
                    {
                      onClick: () => t(!1),
                      className: "h-10 text-on_surface ",
                      to: s.link,
                      children: s.title,
                    },
                    s.title
                  )
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  jR = () => {
    const e = Be((t) => t.lang);
    return p.jsxs("header", {
      children: [
        p.jsx("div", {
          className:
            "h-12 hidden lg:flex bg-primary text-on_primary items-center overflow-hidden",
          children: p.jsxs(lt, {
            className: "flex items-center justify-between",
            children: [
              p.jsxs("div", {
                className: "gap-8 flex items-center justify-between",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      p.jsx(ry, {}),
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
                    children: hf[X(e)].data.map((t) =>
                      p.jsx(
                        Me,
                        { className: "py-2", to: t.link, children: t.title },
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
                      p.jsx(iy, { size: 16, strokeWidth: "3px" }),
                      p.jsx("h4", {
                        className: "text-sm",
                        children: "+99371871814",
                      }),
                    ],
                  }),
                  p.jsx(Nl, {}),
                ],
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className:
            "bg-white py-2 flex items-center justify-between h-20 overflow-hidden",
          children: p.jsxs(lt, {
            className: "flex items-center justify-between ",
            children: [
              p.jsxs("div", {
                className: "flex items-center gap-8",
                children: [
                  p.jsx(Me, { to: "/", children: p.jsx(Sd, {}) }),
                  p.jsx("nav", {
                    className: "lg:flex hidden items-center gap-6",
                    children: pf[X(e)].data.map(({ title: t, link: n }) =>
                      p.jsxs(
                        Me,
                        {
                          to: n,
                          className: "flex items-center gap-2",
                          children: [
                            t,
                            " ",
                            p.jsx("img", { src: "/chevron.svg" }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex items-center",
                children: [
                  p.jsx(Nl, { className: "lg:hidden" }),
                  p.jsx(Yv, {}),
                ],
              }),
              p.jsxs("div", {
                className: "lg:flex hidden items-center gap-2",
                children: [
                  p.jsx(Me, {
                    to: "https://qacis.turkmenexpo.com/",
                    target: "_blank",
                    children: p.jsxs($e, {
                      variant: "outline",
                      size: "sm",
                      children: ["QACIS 2025", p.jsx(xa, {})],
                    }),
                  }),
                  p.jsx(Me, {
                    target: "_blank",
                    to:
                      e === "ru"
                        ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                        : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg",
                    children: p.jsx($e, {
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
var ms = (e) => e.type === "checkbox",
  Sn = (e) => e instanceof Date,
  Ye = (e) => e == null;
const mf = (e) => typeof e == "object";
var je = (e) => !Ye(e) && !Array.isArray(e) && mf(e) && !Sn(e),
  gf = (e) =>
    je(e) && e.target ? (ms(e.target) ? e.target.checked : e.target.value) : e,
  Jv = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  yf = (e, t) => e.has(Jv(t)),
  Qv = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return je(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Pa =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Qe(e) {
  let t;
  const n = Array.isArray(e),
    r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(Pa && (e instanceof Blob || r)) && (n || je(e)))
    if (((t = n ? [] : {}), !n && !Qv(e))) t = e;
    else for (const s in e) e.hasOwnProperty(s) && (t[s] = Qe(e[s]));
  else return e;
  return t;
}
var Ai = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  ke = (e) => e === void 0,
  L = (e, t, n) => {
    if (!t || !je(e)) return n;
    const r = Ai(t.split(/[,[\].]+?/)).reduce((s, i) => (Ye(s) ? s : s[i]), e);
    return ke(r) || r === e ? (ke(e[t]) ? n : e[t]) : r;
  },
  pt = (e) => typeof e == "boolean",
  ka = (e) => /^\w*$/.test(e),
  vf = (e) => Ai(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  me = (e, t, n) => {
    let r = -1;
    const s = ka(t) ? [t] : vf(t),
      i = s.length,
      o = i - 1;
    for (; ++r < i; ) {
      const a = s[r];
      let l = n;
      if (r !== o) {
        const c = e[a];
        l = je(c) || Array.isArray(c) ? c : isNaN(+s[r + 1]) ? {} : [];
      }
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      (e[a] = l), (e = e[a]);
    }
    return e;
  };
const Js = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  vt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  zt = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  bf = le.createContext(null),
  Un = () => le.useContext(bf),
  eb = (e) => {
    const { children: t, ...n } = e;
    return le.createElement(bf.Provider, { value: n }, t);
  };
var xf = (e, t, n, r = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(s, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== vt.all &&
              (t._proxyFormState[o] = !r || vt.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return s;
  },
  et = (e) => je(e) && !Object.keys(e).length,
  wf = (e, t, n, r) => {
    n(e);
    const { name: s, ...i } = e;
    return (
      et(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!r || vt.all))
    );
  },
  Mr = (e) => (Array.isArray(e) ? e : [e]),
  _f = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    Mr(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Na(e) {
  const t = le.useRef(e);
  (t.current = e),
    le.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function tb(e) {
  const t = Un(),
    { control: n = t.control, disabled: r, name: s, exact: i } = e,
    [o, a] = le.useState(n._formState),
    l = le.useRef(!0),
    c = le.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    u = le.useRef(s);
  return (
    (u.current = s),
    Na({
      disabled: r,
      next: (d) =>
        l.current &&
        _f(u.current, d.name, i) &&
        wf(d, c.current, n._updateFormState) &&
        a({ ...n._formState, ...d }),
      subject: n._subjects.state,
    }),
    le.useEffect(
      () => (
        (l.current = !0),
        c.current.isValid && n._updateValid(!0),
        () => {
          l.current = !1;
        }
      ),
      [n]
    ),
    le.useMemo(() => xf(o, n, c.current, !1), [o, n])
  );
}
var Ot = (e) => typeof e == "string",
  Sf = (e, t, n, r, s) =>
    Ot(e)
      ? (r && t.watch.add(e), L(n, e, s))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), L(n, i)))
      : (r && (t.watchAll = !0), n);
function nb(e) {
  const t = Un(),
    {
      control: n = t.control,
      name: r,
      defaultValue: s,
      disabled: i,
      exact: o,
    } = e,
    a = le.useRef(r);
  (a.current = r),
    Na({
      disabled: i,
      subject: n._subjects.values,
      next: (u) => {
        _f(a.current, u.name, o) &&
          c(Qe(Sf(a.current, n._names, u.values || n._formValues, !1, s)));
      },
    });
  const [l, c] = le.useState(n._getWatch(r, s));
  return le.useEffect(() => n._removeUnmounted()), l;
}
function rb(e) {
  const t = Un(),
    { name: n, disabled: r, control: s = t.control, shouldUnregister: i } = e,
    o = yf(s._names.array, n),
    a = nb({
      control: s,
      name: n,
      defaultValue: L(s._formValues, n, L(s._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    l = tb({ control: s, name: n, exact: !0 }),
    c = le.useRef(
      s.register(n, {
        ...e.rules,
        value: a,
        ...(pt(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    u = le.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!L(l.errors, n) },
            isDirty: { enumerable: !0, get: () => !!L(l.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!L(l.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!L(l.validatingFields, n),
            },
            error: { enumerable: !0, get: () => L(l.errors, n) },
          }
        ),
      [l, n]
    ),
    d = le.useMemo(
      () => ({
        name: n,
        value: a,
        ...(pt(r) || l.disabled ? { disabled: l.disabled || r } : {}),
        onChange: (f) =>
          c.current.onChange({
            target: { value: gf(f), name: n },
            type: Js.CHANGE,
          }),
        onBlur: () =>
          c.current.onBlur({
            target: { value: L(s._formValues, n), name: n },
            type: Js.BLUR,
          }),
        ref: (f) => {
          const g = L(s._fields, n);
          g &&
            f &&
            (g._f.ref = {
              focus: () => f.focus(),
              select: () => f.select(),
              setCustomValidity: (m) => f.setCustomValidity(m),
              reportValidity: () => f.reportValidity(),
            });
        },
      }),
      [n, s._formValues, r, l.disabled, a, s._fields]
    );
  return (
    le.useEffect(() => {
      const f = s._options.shouldUnregister || i,
        g = (m, h) => {
          const y = L(s._fields, m);
          y && y._f && (y._f.mount = h);
        };
      if ((g(n, !0), f)) {
        const m = Qe(L(s._options.defaultValues, n));
        me(s._defaultValues, n, m),
          ke(L(s._formValues, n)) && me(s._formValues, n, m);
      }
      return (
        !o && s.register(n),
        () => {
          (o ? f && !s._state.action : f) ? s.unregister(n) : g(n, !1);
        }
      );
    }, [n, s, o, i]),
    le.useEffect(() => {
      s._updateDisabledField({ disabled: r, fields: s._fields, name: n });
    }, [r, n, s]),
    le.useMemo(() => ({ field: d, formState: l, fieldState: u }), [d, l, u])
  );
}
const sb = (e) => e.render(rb(e));
var Ef = (e, t, n, r, s) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: s || !0 },
        }
      : {},
  al = (e) => ({
    isOnSubmit: !e || e === vt.onSubmit,
    isOnBlur: e === vt.onBlur,
    isOnChange: e === vt.onChange,
    isOnAll: e === vt.all,
    isOnTouch: e === vt.onTouched,
  }),
  cl = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Fr = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const i = L(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !r) return !0;
        if (o.ref && t(o.ref, o.name) && !r) return !0;
        if (Fr(a, t)) break;
      } else if (je(a) && Fr(a, t)) break;
    }
  }
};
var ib = (e, t, n) => {
    const r = Mr(L(e, n));
    return me(r, "root", t[n]), me(e, n, r), e;
  },
  ja = (e) => e.type === "file",
  jt = (e) => typeof e == "function",
  Qs = (e) => {
    if (!Pa) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  zs = (e) => Ot(e),
  Oa = (e) => e.type === "radio",
  ei = (e) => e instanceof RegExp;
const ll = { value: !1, isValid: !1 },
  ul = { value: !0, isValid: !0 };
var Tf = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !ke(e[0].attributes.value)
        ? ke(e[0].value) || e[0].value === ""
          ? ul
          : { value: e[0].value, isValid: !0 }
        : ul
      : ll;
  }
  return ll;
};
const dl = { isValid: !1, value: null };
var Af = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        dl
      )
    : dl;
function fl(e, t, n = "validate") {
  if (zs(e) || (Array.isArray(e) && e.every(zs)) || (pt(e) && !e))
    return { type: n, message: zs(e) ? e : "", ref: t };
}
var Zn = (e) => (je(e) && !ei(e) ? e : { value: e, message: "" }),
  hl = async (e, t, n, r, s, i) => {
    const {
        ref: o,
        refs: a,
        required: l,
        maxLength: c,
        minLength: u,
        min: d,
        max: f,
        pattern: g,
        validate: m,
        name: h,
        valueAsNumber: y,
        mount: b,
      } = e._f,
      x = L(n, h);
    if (!b || t.has(h)) return {};
    const _ = a ? a[0] : o,
      E = (N) => {
        s &&
          _.reportValidity &&
          (_.setCustomValidity(pt(N) ? "" : N || ""), _.reportValidity());
      },
      w = {},
      R = Oa(o),
      A = ms(o),
      C = R || A,
      O =
        ((y || ja(o)) && ke(o.value) && ke(x)) ||
        (Qs(o) && o.value === "") ||
        x === "" ||
        (Array.isArray(x) && !x.length),
      M = Ef.bind(null, h, r, w),
      U = (N, I, z, J = zt.maxLength, q = zt.minLength) => {
        const H = N ? I : z;
        w[h] = { type: N ? J : q, message: H, ref: o, ...M(N ? J : q, H) };
      };
    if (
      i
        ? !Array.isArray(x) || !x.length
        : l &&
          ((!C && (O || Ye(x))) ||
            (pt(x) && !x) ||
            (A && !Tf(a).isValid) ||
            (R && !Af(a).isValid))
    ) {
      const { value: N, message: I } = zs(l)
        ? { value: !!l, message: l }
        : Zn(l);
      if (
        N &&
        ((w[h] = {
          type: zt.required,
          message: I,
          ref: _,
          ...M(zt.required, I),
        }),
        !r)
      )
        return E(I), w;
    }
    if (!O && (!Ye(d) || !Ye(f))) {
      let N, I;
      const z = Zn(f),
        J = Zn(d);
      if (!Ye(x) && !isNaN(x)) {
        const q = o.valueAsNumber || (x && +x);
        Ye(z.value) || (N = q > z.value), Ye(J.value) || (I = q < J.value);
      } else {
        const q = o.valueAsDate || new Date(x),
          H = (fe) => new Date(new Date().toDateString() + " " + fe),
          W = o.type == "time",
          ne = o.type == "week";
        Ot(z.value) &&
          x &&
          (N = W
            ? H(x) > H(z.value)
            : ne
            ? x > z.value
            : q > new Date(z.value)),
          Ot(J.value) &&
            x &&
            (I = W
              ? H(x) < H(J.value)
              : ne
              ? x < J.value
              : q < new Date(J.value));
      }
      if ((N || I) && (U(!!N, z.message, J.message, zt.max, zt.min), !r))
        return E(w[h].message), w;
    }
    if ((c || u) && !O && (Ot(x) || (i && Array.isArray(x)))) {
      const N = Zn(c),
        I = Zn(u),
        z = !Ye(N.value) && x.length > +N.value,
        J = !Ye(I.value) && x.length < +I.value;
      if ((z || J) && (U(z, N.message, I.message), !r))
        return E(w[h].message), w;
    }
    if (g && !O && Ot(x)) {
      const { value: N, message: I } = Zn(g);
      if (
        ei(N) &&
        !x.match(N) &&
        ((w[h] = { type: zt.pattern, message: I, ref: o, ...M(zt.pattern, I) }),
        !r)
      )
        return E(I), w;
    }
    if (m) {
      if (jt(m)) {
        const N = await m(x, n),
          I = fl(N, _);
        if (I && ((w[h] = { ...I, ...M(zt.validate, I.message) }), !r))
          return E(I.message), w;
      } else if (je(m)) {
        let N = {};
        for (const I in m) {
          if (!et(N) && !r) break;
          const z = fl(await m[I](x, n), _, I);
          z &&
            ((N = { ...z, ...M(I, z.message) }), E(z.message), r && (w[h] = N));
        }
        if (!et(N) && ((w[h] = { ref: _, ...N }), !r)) return w;
      }
    }
    return E(!0), w;
  };
function ob(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = ke(e) ? r++ : e[t[r++]];
  return e;
}
function ab(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !ke(e[t])) return !1;
  return !0;
}
function Le(e, t) {
  const n = Array.isArray(t) ? t : ka(t) ? [t] : vf(t),
    r = n.length === 1 ? e : ob(e, n),
    s = n.length - 1,
    i = n[s];
  return (
    r && delete r[i],
    s !== 0 &&
      ((je(r) && et(r)) || (Array.isArray(r) && ab(r))) &&
      Le(e, n.slice(0, -1)),
    e
  );
}
var no = () => {
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
  Do = (e) => Ye(e) || !mf(e);
function sn(e, t) {
  if (Do(e) || Do(t)) return e === t;
  if (Sn(e) && Sn(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const i = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (Sn(i) && Sn(o)) ||
        (je(i) && je(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !sn(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var Cf = (e) => e.type === "select-multiple",
  cb = (e) => Oa(e) || ms(e),
  ro = (e) => Qs(e) && e.isConnected,
  Rf = (e) => {
    for (const t in e) if (jt(e[t])) return !0;
    return !1;
  };
function ti(e, t = {}) {
  const n = Array.isArray(e);
  if (je(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (je(e[r]) && !Rf(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), ti(e[r], t[r]))
        : Ye(e[r]) || (t[r] = !0);
  return t;
}
function Pf(e, t, n) {
  const r = Array.isArray(e);
  if (je(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || (je(e[s]) && !Rf(e[s]))
        ? ke(t) || Do(n[s])
          ? (n[s] = Array.isArray(e[s]) ? ti(e[s], []) : { ...ti(e[s]) })
          : Pf(e[s], Ye(t) ? {} : t[s], n[s])
        : (n[s] = !sn(e[s], t[s]));
  return n;
}
var Er = (e, t) => Pf(e, t, ti(t)),
  kf = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    ke(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && Ot(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function so(e) {
  const t = e.ref;
  return ja(t)
    ? t.files
    : Oa(t)
    ? Af(e.refs).value
    : Cf(t)
    ? [...t.selectedOptions].map(({ value: n }) => n)
    : ms(t)
    ? Tf(e.refs).value
    : kf(ke(t.value) ? e.ref.value : t.value, e);
}
var lb = (e, t, n, r) => {
    const s = {};
    for (const i of e) {
      const o = L(t, i);
      o && me(s, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r,
    };
  },
  Tr = (e) =>
    ke(e)
      ? e
      : ei(e)
      ? e.source
      : je(e)
      ? ei(e.value)
        ? e.value.source
        : e.value
      : e;
const pl = "AsyncFunction";
var ub = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (jt(e.validate) && e.validate.constructor.name === pl) ||
      (je(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === pl))
    ),
  db = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function ml(e, t, n) {
  const r = L(e, n);
  if (r || ka(n)) return { error: r, name: n };
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
var fb = (e, t, n, r, s) =>
    s.isOnAll
      ? !1
      : !n && s.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : s.isOnBlur)
      ? !e
      : (n ? r.isOnChange : s.isOnChange)
      ? e
      : !0,
  hb = (e, t) => !Ai(L(e, t)).length && Le(e, t);
const pb = {
  mode: vt.onSubmit,
  reValidateMode: vt.onChange,
  shouldFocusError: !0,
};
function mb(e = {}) {
  let t = { ...pb, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: jt(t.defaultValues),
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
      je(t.defaultValues) || je(t.values)
        ? Qe(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : Qe(s),
    o = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    c = 0;
  const u = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: no(), array: no(), state: no() },
    f = al(t.mode),
    g = al(t.reValidateMode),
    m = t.criteriaMode === vt.all,
    h = (S) => (T) => {
      clearTimeout(c), (c = setTimeout(S, T));
    },
    y = async (S) => {
      if (!t.disabled && (u.isValid || S)) {
        const T = t.resolver ? et((await C()).errors) : await M(r, !0);
        T !== n.isValid && d.state.next({ isValid: T });
      }
    },
    b = (S, T) => {
      !t.disabled &&
        (u.isValidating || u.validatingFields) &&
        ((S || Array.from(a.mount)).forEach((k) => {
          k && (T ? me(n.validatingFields, k, T) : Le(n.validatingFields, k));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !et(n.validatingFields),
        }));
    },
    x = (S, T = [], k, V, F = !0, D = !0) => {
      if (V && k && !t.disabled) {
        if (((o.action = !0), D && Array.isArray(L(r, S)))) {
          const K = k(L(r, S), V.argA, V.argB);
          F && me(r, S, K);
        }
        if (D && Array.isArray(L(n.errors, S))) {
          const K = k(L(n.errors, S), V.argA, V.argB);
          F && me(n.errors, S, K), hb(n.errors, S);
        }
        if (u.touchedFields && D && Array.isArray(L(n.touchedFields, S))) {
          const K = k(L(n.touchedFields, S), V.argA, V.argB);
          F && me(n.touchedFields, S, K);
        }
        u.dirtyFields && (n.dirtyFields = Er(s, i)),
          d.state.next({
            name: S,
            isDirty: N(S, T),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else me(i, S, T);
    },
    _ = (S, T) => {
      me(n.errors, S, T), d.state.next({ errors: n.errors });
    },
    E = (S) => {
      (n.errors = S), d.state.next({ errors: n.errors, isValid: !1 });
    },
    w = (S, T, k, V) => {
      const F = L(r, S);
      if (F) {
        const D = L(i, S, ke(k) ? L(s, S) : k);
        ke(D) || (V && V.defaultChecked) || T
          ? me(i, S, T ? D : so(F._f))
          : J(S, D),
          o.mount && y();
      }
    },
    R = (S, T, k, V, F) => {
      let D = !1,
        K = !1;
      const ie = { name: S };
      if (!t.disabled) {
        const De = !!(L(r, S) && L(r, S)._f && L(r, S)._f.disabled);
        if (!k || V) {
          u.isDirty &&
            ((K = n.isDirty),
            (n.isDirty = ie.isDirty = N()),
            (D = K !== ie.isDirty));
          const Re = De || sn(L(s, S), T);
          (K = !!(!De && L(n.dirtyFields, S))),
            Re || De ? Le(n.dirtyFields, S) : me(n.dirtyFields, S, !0),
            (ie.dirtyFields = n.dirtyFields),
            (D = D || (u.dirtyFields && K !== !Re));
        }
        if (k) {
          const Re = L(n.touchedFields, S);
          Re ||
            (me(n.touchedFields, S, k),
            (ie.touchedFields = n.touchedFields),
            (D = D || (u.touchedFields && Re !== k)));
        }
        D && F && d.state.next(ie);
      }
      return D ? ie : {};
    },
    A = (S, T, k, V) => {
      const F = L(n.errors, S),
        D = u.isValid && pt(T) && n.isValid !== T;
      if (
        (t.delayError && k
          ? ((l = h(() => _(S, k))), l(t.delayError))
          : (clearTimeout(c),
            (l = null),
            k ? me(n.errors, S, k) : Le(n.errors, S)),
        (k ? !sn(F, k) : F) || !et(V) || D)
      ) {
        const K = {
          ...V,
          ...(D && pt(T) ? { isValid: T } : {}),
          errors: n.errors,
          name: S,
        };
        (n = { ...n, ...K }), d.state.next(K);
      }
    },
    C = async (S) => {
      b(S, !0);
      const T = await t.resolver(
        i,
        t.context,
        lb(S || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return b(S), T;
    },
    O = async (S) => {
      const { errors: T } = await C(S);
      if (S)
        for (const k of S) {
          const V = L(T, k);
          V ? me(n.errors, k, V) : Le(n.errors, k);
        }
      else n.errors = T;
      return T;
    },
    M = async (S, T, k = { valid: !0 }) => {
      for (const V in S) {
        const F = S[V];
        if (F) {
          const { _f: D, ...K } = F;
          if (D) {
            const ie = a.array.has(D.name),
              De = F._f && ub(F._f);
            De && u.validatingFields && b([V], !0);
            const Re = await hl(
              F,
              a.disabled,
              i,
              m,
              t.shouldUseNativeValidation && !T,
              ie
            );
            if (
              (De && u.validatingFields && b([V]),
              Re[D.name] && ((k.valid = !1), T))
            )
              break;
            !T &&
              (L(Re, D.name)
                ? ie
                  ? ib(n.errors, Re, D.name)
                  : me(n.errors, D.name, Re[D.name])
                : Le(n.errors, D.name));
          }
          !et(K) && (await M(K, T, k));
        }
      }
      return k.valid;
    },
    U = () => {
      for (const S of a.unMount) {
        const T = L(r, S);
        T &&
          (T._f.refs ? T._f.refs.every((k) => !ro(k)) : !ro(T._f.ref)) &&
          Xe(S);
      }
      a.unMount = new Set();
    },
    N = (S, T) => !t.disabled && (S && T && me(i, S, T), !sn(he(), s)),
    I = (S, T, k) =>
      Sf(S, a, { ...(o.mount ? i : ke(T) ? s : Ot(S) ? { [S]: T } : T) }, k, T),
    z = (S) => Ai(L(o.mount ? i : s, S, t.shouldUnregister ? L(s, S, []) : [])),
    J = (S, T, k = {}) => {
      const V = L(r, S);
      let F = T;
      if (V) {
        const D = V._f;
        D &&
          (!D.disabled && me(i, S, kf(T, D)),
          (F = Qs(D.ref) && Ye(T) ? "" : T),
          Cf(D.ref)
            ? [...D.ref.options].forEach(
                (K) => (K.selected = F.includes(K.value))
              )
            : D.refs
            ? ms(D.ref)
              ? D.refs.length > 1
                ? D.refs.forEach(
                    (K) =>
                      (!K.defaultChecked || !K.disabled) &&
                      (K.checked = Array.isArray(F)
                        ? !!F.find((ie) => ie === K.value)
                        : F === K.value)
                  )
                : D.refs[0] && (D.refs[0].checked = !!F)
              : D.refs.forEach((K) => (K.checked = K.value === F))
            : ja(D.ref)
            ? (D.ref.value = "")
            : ((D.ref.value = F),
              D.ref.type || d.values.next({ name: S, values: { ...i } })));
      }
      (k.shouldDirty || k.shouldTouch) &&
        R(S, F, k.shouldTouch, k.shouldDirty, !0),
        k.shouldValidate && fe(S);
    },
    q = (S, T, k) => {
      for (const V in T) {
        const F = T[V],
          D = `${S}.${V}`,
          K = L(r, D);
        (a.array.has(S) || je(F) || (K && !K._f)) && !Sn(F)
          ? q(D, F, k)
          : J(D, F, k);
      }
    },
    H = (S, T, k = {}) => {
      const V = L(r, S),
        F = a.array.has(S),
        D = Qe(T);
      me(i, S, D),
        F
          ? (d.array.next({ name: S, values: { ...i } }),
            (u.isDirty || u.dirtyFields) &&
              k.shouldDirty &&
              d.state.next({
                name: S,
                dirtyFields: Er(s, i),
                isDirty: N(S, D),
              }))
          : V && !V._f && !Ye(D)
          ? q(S, D, k)
          : J(S, D, k),
        cl(S, a) && d.state.next({ ...n }),
        d.values.next({ name: o.mount ? S : void 0, values: { ...i } });
    },
    W = async (S) => {
      o.mount = !0;
      const T = S.target;
      let k = T.name,
        V = !0;
      const F = L(r, k),
        D = () => (T.type ? so(F._f) : gf(S)),
        K = (ie) => {
          V =
            Number.isNaN(ie) ||
            (Sn(ie) && isNaN(ie.getTime())) ||
            sn(ie, L(i, k, ie));
        };
      if (F) {
        let ie, De;
        const Re = D(),
          Rt = S.type === Js.BLUR || S.type === Js.FOCUS_OUT,
          br =
            (!db(F._f) && !t.resolver && !L(n.errors, k) && !F._f.deps) ||
            fb(Rt, L(n.touchedFields, k), n.isSubmitted, g, f),
          Pt = cl(k, a, Rt);
        me(i, k, Re),
          Rt
            ? (F._f.onBlur && F._f.onBlur(S), l && l(0))
            : F._f.onChange && F._f.onChange(S);
        const vn = R(k, Re, Rt, !1),
          xr = !et(vn) || Pt;
        if (
          (!Rt && d.values.next({ name: k, type: S.type, values: { ...i } }),
          br)
        )
          return (
            u.isValid && (t.mode === "onBlur" && Rt ? y() : Rt || y()),
            xr && d.state.next({ name: k, ...(Pt ? {} : vn) })
          );
        if ((!Rt && Pt && d.state.next({ ...n }), t.resolver)) {
          const { errors: bn } = await C([k]);
          if ((K(Re), V)) {
            const Zi = ml(n.errors, r, k),
              Cs = ml(bn, r, Zi.name || k);
            (ie = Cs.error), (k = Cs.name), (De = et(bn));
          }
        } else
          b([k], !0),
            (ie = (await hl(F, a.disabled, i, m, t.shouldUseNativeValidation))[
              k
            ]),
            b([k]),
            K(Re),
            V && (ie ? (De = !1) : u.isValid && (De = await M(r, !0)));
        V && (F._f.deps && fe(F._f.deps), A(k, De, ie, vn));
      }
    },
    ne = (S, T) => {
      if (L(n.errors, T) && S.focus) return S.focus(), 1;
    },
    fe = async (S, T = {}) => {
      let k, V;
      const F = Mr(S);
      if (t.resolver) {
        const D = await O(ke(S) ? S : F);
        (k = et(D)), (V = S ? !F.some((K) => L(D, K)) : k);
      } else
        S
          ? ((V = (
              await Promise.all(
                F.map(async (D) => {
                  const K = L(r, D);
                  return await M(K && K._f ? { [D]: K } : K);
                })
              )
            ).every(Boolean)),
            !(!V && !n.isValid) && y())
          : (V = k = await M(r));
      return (
        d.state.next({
          ...(!Ot(S) || (u.isValid && k !== n.isValid) ? {} : { name: S }),
          ...(t.resolver || !S ? { isValid: k } : {}),
          errors: n.errors,
        }),
        T.shouldFocus && !V && Fr(r, ne, S ? F : a.mount),
        V
      );
    },
    he = (S) => {
      const T = { ...(o.mount ? i : s) };
      return ke(S) ? T : Ot(S) ? L(T, S) : S.map((k) => L(T, k));
    },
    ze = (S, T) => ({
      invalid: !!L((T || n).errors, S),
      isDirty: !!L((T || n).dirtyFields, S),
      error: L((T || n).errors, S),
      isValidating: !!L(n.validatingFields, S),
      isTouched: !!L((T || n).touchedFields, S),
    }),
    nt = (S) => {
      S && Mr(S).forEach((T) => Le(n.errors, T)),
        d.state.next({ errors: S ? n.errors : {} });
    },
    We = (S, T, k) => {
      const V = (L(r, S, { _f: {} })._f || {}).ref,
        F = L(n.errors, S) || {},
        { ref: D, message: K, type: ie, ...De } = F;
      me(n.errors, S, { ...De, ...T, ref: V }),
        d.state.next({ name: S, errors: n.errors, isValid: !1 }),
        k && k.shouldFocus && V && V.focus && V.focus();
    },
    mt = (S, T) =>
      jt(S)
        ? d.values.subscribe({ next: (k) => S(I(void 0, T), k) })
        : I(S, T, !0),
    Xe = (S, T = {}) => {
      for (const k of S ? Mr(S) : a.mount)
        a.mount.delete(k),
          a.array.delete(k),
          T.keepValue || (Le(r, k), Le(i, k)),
          !T.keepError && Le(n.errors, k),
          !T.keepDirty && Le(n.dirtyFields, k),
          !T.keepTouched && Le(n.touchedFields, k),
          !T.keepIsValidating && Le(n.validatingFields, k),
          !t.shouldUnregister && !T.keepDefaultValue && Le(s, k);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(T.keepDirty ? { isDirty: N() } : {}) }),
        !T.keepIsValid && y();
    },
    ce = ({ disabled: S, name: T, field: k, fields: V }) => {
      ((pt(S) && o.mount) || S || a.disabled.has(T)) &&
        (S ? a.disabled.add(T) : a.disabled.delete(T),
        R(T, so(k ? k._f : L(V, T)._f), !1, !1, !0));
    },
    pe = (S, T = {}) => {
      let k = L(r, S);
      const V = pt(T.disabled) || pt(t.disabled);
      return (
        me(r, S, {
          ...(k || {}),
          _f: {
            ...(k && k._f ? k._f : { ref: { name: S } }),
            name: S,
            mount: !0,
            ...T,
          },
        }),
        a.mount.add(S),
        k
          ? ce({
              field: k,
              disabled: pt(T.disabled) ? T.disabled : t.disabled,
              name: S,
            })
          : w(S, !0, T.value),
        {
          ...(V ? { disabled: T.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!T.required,
                min: Tr(T.min),
                max: Tr(T.max),
                minLength: Tr(T.minLength),
                maxLength: Tr(T.maxLength),
                pattern: Tr(T.pattern),
              }
            : {}),
          name: S,
          onChange: W,
          onBlur: W,
          ref: (F) => {
            if (F) {
              pe(S, T), (k = L(r, S));
              const D =
                  (ke(F.value) &&
                    F.querySelectorAll &&
                    F.querySelectorAll("input,select,textarea")[0]) ||
                  F,
                K = cb(D),
                ie = k._f.refs || [];
              if (K ? ie.find((De) => De === D) : D === k._f.ref) return;
              me(r, S, {
                _f: {
                  ...k._f,
                  ...(K
                    ? {
                        refs: [
                          ...ie.filter(ro),
                          D,
                          ...(Array.isArray(L(s, S)) ? [{}] : []),
                        ],
                        ref: { type: D.type, name: S },
                      }
                    : { ref: D }),
                },
              }),
                w(S, !1, void 0, D);
            } else
              (k = L(r, S, {})),
                k._f && (k._f.mount = !1),
                (t.shouldUnregister || T.shouldUnregister) &&
                  !(yf(a.array, S) && o.action) &&
                  a.unMount.add(S);
          },
        }
      );
    },
    Ce = () => t.shouldFocusError && Fr(r, ne, a.mount),
    Oe = (S) => {
      pt(S) &&
        (d.state.next({ disabled: S }),
        Fr(
          r,
          (T, k) => {
            const V = L(r, k);
            V &&
              ((T.disabled = V._f.disabled || S),
              Array.isArray(V._f.refs) &&
                V._f.refs.forEach((F) => {
                  F.disabled = V._f.disabled || S;
                }));
          },
          0,
          !1
        ));
    },
    ge = (S, T) => async (k) => {
      let V;
      k && (k.preventDefault && k.preventDefault(), k.persist && k.persist());
      let F = Qe(i);
      if (a.disabled.size) for (const D of a.disabled) me(F, D, void 0);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: D, values: K } = await C();
        (n.errors = D), (F = K);
      } else await M(r);
      if ((Le(n.errors, "root"), et(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await S(F, k);
        } catch (D) {
          V = D;
        }
      } else T && (await T({ ...n.errors }, k)), Ce(), setTimeout(Ce);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: et(n.errors) && !V,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        V)
      )
        throw V;
    },
    Z = (S, T = {}) => {
      L(r, S) &&
        (ke(T.defaultValue)
          ? H(S, Qe(L(s, S)))
          : (H(S, T.defaultValue), me(s, S, Qe(T.defaultValue))),
        T.keepTouched || Le(n.touchedFields, S),
        T.keepDirty ||
          (Le(n.dirtyFields, S),
          (n.isDirty = T.defaultValue ? N(S, Qe(L(s, S))) : N())),
        T.keepError || (Le(n.errors, S), u.isValid && y()),
        d.state.next({ ...n }));
    },
    ue = (S, T = {}) => {
      const k = S ? Qe(S) : s,
        V = Qe(k),
        F = et(S),
        D = F ? s : V;
      if ((T.keepDefaultValues || (s = k), !T.keepValues)) {
        if (T.keepDirtyValues) {
          const K = new Set([...a.mount, ...Object.keys(Er(s, i))]);
          for (const ie of Array.from(K))
            L(n.dirtyFields, ie) ? me(D, ie, L(i, ie)) : H(ie, L(D, ie));
        } else {
          if (Pa && ke(S))
            for (const K of a.mount) {
              const ie = L(r, K);
              if (ie && ie._f) {
                const De = Array.isArray(ie._f.refs)
                  ? ie._f.refs[0]
                  : ie._f.ref;
                if (Qs(De)) {
                  const Re = De.closest("form");
                  if (Re) {
                    Re.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = t.shouldUnregister ? (T.keepDefaultValues ? Qe(s) : {}) : Qe(D)),
          d.array.next({ values: { ...D } }),
          d.values.next({ values: { ...D } });
      }
      (a = {
        mount: T.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !u.isValid || !!T.keepIsValid || !!T.keepDirtyValues),
        (o.watch = !!t.shouldUnregister),
        d.state.next({
          submitCount: T.keepSubmitCount ? n.submitCount : 0,
          isDirty: F
            ? !1
            : T.keepDirty
            ? n.isDirty
            : !!(T.keepDefaultValues && !sn(S, s)),
          isSubmitted: T.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: F
            ? {}
            : T.keepDirtyValues
            ? T.keepDefaultValues && i
              ? Er(s, i)
              : n.dirtyFields
            : T.keepDefaultValues && S
            ? Er(s, S)
            : T.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: T.keepTouched ? n.touchedFields : {},
          errors: T.keepErrors ? n.errors : {},
          isSubmitSuccessful: T.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    ye = (S, T) => ue(jt(S) ? S(i) : S, T);
  return {
    control: {
      register: pe,
      unregister: Xe,
      getFieldState: ze,
      handleSubmit: ge,
      setError: We,
      _executeSchema: C,
      _getWatch: I,
      _getDirty: N,
      _updateValid: y,
      _removeUnmounted: U,
      _updateFieldArray: x,
      _updateDisabledField: ce,
      _getFieldArray: z,
      _reset: ue,
      _resetDefaultValues: () =>
        jt(t.defaultValues) &&
        t.defaultValues().then((S) => {
          ye(S, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (S) => {
        n = { ...n, ...S };
      },
      _disableForm: Oe,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: E,
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
    trigger: fe,
    register: pe,
    handleSubmit: ge,
    watch: mt,
    setValue: H,
    getValues: he,
    reset: ye,
    resetField: Z,
    clearErrors: nt,
    unregister: Xe,
    setError: We,
    setFocus: (S, T = {}) => {
      const k = L(r, S),
        V = k && k._f;
      if (V) {
        const F = V.refs ? V.refs[0] : V.ref;
        F.focus && (F.focus(), T.shouldSelect && jt(F.select) && F.select());
      }
    },
    getFieldState: ze,
  };
}
function Nf(e = {}) {
  const t = le.useRef(void 0),
    n = le.useRef(void 0),
    [r, s] = le.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: jt(e.defaultValues),
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
      defaultValues: jt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...mb(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    Na({
      subject: i._subjects.state,
      next: (o) => {
        wf(o, i._proxyFormState, i._updateFormState, !0) &&
          s({ ...i._formState });
      },
    }),
    le.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    le.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== r.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, r.isDirty]),
    le.useEffect(() => {
      e.values && !sn(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          s((o) => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    le.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    le.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    le.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = xf(r, i)),
    t.current
  );
}
const gl = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = L(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  jf = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref
        ? gl(r.ref, n, e)
        : r.refs && r.refs.forEach((s) => gl(s, n, e));
    }
  },
  gb = (e, t) => {
    t.shouldUseNativeValidation && jf(e, t);
    const n = {};
    for (const r in e) {
      const s = L(t.fields, r),
        i = Object.assign(e[r] || {}, { ref: s && s.ref });
      if (yb(t.names || Object.keys(e), r)) {
        const o = Object.assign({}, L(n, r));
        me(o, "root", i), me(n, r, o);
      } else me(n, r, i);
    }
    return n;
  },
  yb = (e, t) => e.some((n) => n.startsWith(t + "."));
var vb = function (e, t) {
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
        var l = n[o].types,
          c = l && l[r.code];
        n[o] = Ef(o, t, n, s, c ? [].concat(c, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  Of = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, s, i) {
        try {
          return Promise.resolve(
            (function (o, a) {
              try {
                var l = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)
                ).then(function (c) {
                  return (
                    i.shouldUseNativeValidation && jf({}, i),
                    { errors: {}, values: n.raw ? r : c }
                  );
                });
              } catch (c) {
                return a(c);
              }
              return l && l.then ? l.then(void 0, a) : l;
            })(0, function (o) {
              if (
                (function (a) {
                  return Array.isArray(a == null ? void 0 : a.errors);
                })(o)
              )
                return {
                  values: {},
                  errors: gb(
                    vb(
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
  de;
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
})(de || (de = {}));
var Mo;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Mo || (Mo = {}));
const $ = de.arrayToEnum([
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
  Zt = (e) => {
    switch (typeof e) {
      case "undefined":
        return $.undefined;
      case "string":
        return $.string;
      case "number":
        return isNaN(e) ? $.nan : $.number;
      case "boolean":
        return $.boolean;
      case "function":
        return $.function;
      case "bigint":
        return $.bigint;
      case "symbol":
        return $.symbol;
      case "object":
        return Array.isArray(e)
          ? $.array
          : e === null
          ? $.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? $.promise
          : typeof Map < "u" && e instanceof Map
          ? $.map
          : typeof Set < "u" && e instanceof Set
          ? $.set
          : typeof Date < "u" && e instanceof Date
          ? $.date
          : $.object;
      default:
        return $.unknown;
    }
  },
  j = de.arrayToEnum([
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
  bb = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class it extends Error {
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
              l = 0;
            for (; l < o.path.length; ) {
              const c = o.path[l];
              l === o.path.length - 1
                ? ((a[c] = a[c] || { _errors: [] }), a[c]._errors.push(n(o)))
                : (a[c] = a[c] || { _errors: [] }),
                (a = a[c]),
                l++;
            }
          }
      };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof it)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, de.jsonStringifyReplacer, 2);
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
it.create = (e) => new it(e);
const sr = (e, t) => {
  let n;
  switch (e.code) {
    case j.invalid_type:
      e.received === $.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case j.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        de.jsonStringifyReplacer
      )}`;
      break;
    case j.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${de.joinValues(e.keys, ", ")}`;
      break;
    case j.invalid_union:
      n = "Invalid input";
      break;
    case j.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${de.joinValues(e.options)}`;
      break;
    case j.invalid_enum_value:
      n = `Invalid enum value. Expected ${de.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case j.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case j.invalid_return_type:
      n = "Invalid function return type";
      break;
    case j.invalid_date:
      n = "Invalid date";
      break;
    case j.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : de.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case j.too_small:
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
    case j.too_big:
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
    case j.custom:
      n = "Invalid input";
      break;
    case j.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case j.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case j.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), de.assertNever(e);
  }
  return { message: n };
};
let Df = sr;
function xb(e) {
  Df = e;
}
function ni() {
  return Df;
}
const ri = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: s } = e,
      i = [...n, ...(s.path || [])],
      o = { ...s, path: i };
    if (s.message !== void 0) return { ...s, path: i, message: s.message };
    let a = "";
    const l = r
      .filter((c) => !!c)
      .slice()
      .reverse();
    for (const c of l) a = c(o, { data: t, defaultError: a }).message;
    return { ...s, path: i, message: a };
  },
  wb = [];
function B(e, t) {
  const n = ni(),
    r = ri({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === sr ? void 0 : sr,
      ].filter((s) => !!s),
    });
  e.common.issues.push(r);
}
class Ke {
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
      if (s.status === "aborted") return ee;
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
    return Ke.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted") return ee;
      i.status === "dirty" && t.dirty(),
        o.status === "dirty" && t.dirty(),
        i.value !== "__proto__" &&
          (typeof o.value < "u" || s.alwaysSet) &&
          (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const ee = Object.freeze({ status: "aborted" }),
  qn = (e) => ({ status: "dirty", value: e }),
  Je = (e) => ({ status: "valid", value: e }),
  Fo = (e) => e.status === "aborted",
  Lo = (e) => e.status === "dirty",
  jn = (e) => e.status === "valid",
  Hr = (e) => typeof Promise < "u" && e instanceof Promise;
function si(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function Mf(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var G;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(G || (G = {}));
var Rr, Pr;
class It {
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
const yl = (e, t) => {
  if (jn(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new it(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function se(e) {
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
          var l, c;
          const { message: u } = e;
          return o.code === "invalid_enum_value"
            ? { message: u ?? a.defaultError }
            : typeof a.data > "u"
            ? {
                message:
                  (l = u ?? r) !== null && l !== void 0 ? l : a.defaultError,
              }
            : o.code !== "invalid_type"
            ? { message: a.defaultError }
            : {
                message:
                  (c = u ?? n) !== null && c !== void 0 ? c : a.defaultError,
              };
        },
        description: s,
      };
}
class ae {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Zt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: Zt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Ke(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Zt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Hr(n)) throw new Error("Synchronous parse encountered promise.");
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
        parsedType: Zt(t),
      },
      i = this._parseSync({ data: t, path: s.path, parent: s });
    return yl(s, i);
  }
  "~validate"(t) {
    var n, r;
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Zt(t),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: t, path: [], parent: s });
        return jn(i) ? { value: i.value } : { issues: s.common.issues };
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
      jn(i) ? { value: i.value } : { issues: s.common.issues }
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
        parsedType: Zt(t),
      },
      s = this._parse({ data: t, path: r.path, parent: r }),
      i = await (Hr(s) ? s : Promise.resolve(s));
    return yl(r, i);
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
        a = () => i.addIssue({ code: j.custom, ...r(s) });
      return typeof Promise < "u" && o instanceof Promise
        ? o.then((l) => (l ? !0 : (a(), !1)))
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
    return new St({
      schema: this,
      typeName: Q.ZodEffects,
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
    return Dt.create(this, this._def);
  }
  nullable() {
    return un.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return xt.create(this);
  }
  promise() {
    return or.create(this, this._def);
  }
  or(t) {
    return Kr.create([this, t], this._def);
  }
  and(t) {
    return Xr.create(this, t, this._def);
  }
  transform(t) {
    return new St({
      ...se(this._def),
      schema: this,
      typeName: Q.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ts({
      ...se(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Q.ZodDefault,
    });
  }
  brand() {
    return new Da({ typeName: Q.ZodBranded, type: this, ...se(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ns({
      ...se(this._def),
      innerType: this,
      catchValue: n,
      typeName: Q.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return gs.create(this, t);
  }
  readonly() {
    return rs.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const _b = /^c[^\s-]{8,}$/i,
  Sb = /^[0-9a-z]+$/,
  Eb = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Tb =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Ab = /^[a-z0-9_-]{21}$/i,
  Cb = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Rb =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Pb =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  kb = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let io;
const Nb =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  jb =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  Ob =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  Db =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Mb = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Fb = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Ff =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  Lb = new RegExp(`^${Ff}$`);
function Lf(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function Ib(e) {
  return new RegExp(`^${Lf(e)}$`);
}
function If(e) {
  let t = `${Ff}T${Lf(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function Vb(e, t) {
  return !!(
    ((t === "v4" || !t) && Nb.test(e)) ||
    ((t === "v6" || !t) && Ob.test(e))
  );
}
function Bb(e, t) {
  if (!Cb.test(e)) return !1;
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
function Ub(e, t) {
  return !!(
    ((t === "v4" || !t) && jb.test(e)) ||
    ((t === "v6" || !t) && Db.test(e))
  );
}
class bt extends ae {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== $.string)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        B(i, {
          code: j.invalid_type,
          expected: $.string,
          received: i.parsedType,
        }),
        ee
      );
    }
    const r = new Ke();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            code: j.too_small,
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
          B(s, {
            code: j.too_big,
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
            ? B(s, {
                code: j.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : a &&
              B(s, {
                code: j.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          r.dirty());
      } else if (i.kind === "email")
        Pb.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            validation: "email",
            code: j.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "emoji")
        io || (io = new RegExp(kb, "u")),
          io.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "emoji",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty());
      else if (i.kind === "uuid")
        Tb.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            validation: "uuid",
            code: j.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "nanoid")
        Ab.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            validation: "nanoid",
            code: j.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid")
        _b.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            validation: "cuid",
            code: j.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid2")
        Sb.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            validation: "cuid2",
            code: j.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "ulid")
        Eb.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            validation: "ulid",
            code: j.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "url",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              B(s, {
                validation: "regex",
                code: j.invalid_string,
                message: i.message,
              }),
              r.dirty()))
          : i.kind === "trim"
          ? (t.data = t.data.trim())
          : i.kind === "includes"
          ? t.data.includes(i.value, i.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              code: j.invalid_string,
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
            B(s, {
              code: j.invalid_string,
              validation: { startsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "endsWith"
          ? t.data.endsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              code: j.invalid_string,
              validation: { endsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "datetime"
          ? If(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              code: j.invalid_string,
              validation: "datetime",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "date"
          ? Lb.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              code: j.invalid_string,
              validation: "date",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "time"
          ? Ib(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              code: j.invalid_string,
              validation: "time",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "duration"
          ? Rb.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "duration",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "ip"
          ? Vb(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "ip",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "jwt"
          ? Bb(t.data, i.alg) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "jwt",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "cidr"
          ? Ub(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "cidr",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64"
          ? Mb.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "base64",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64url"
          ? Fb.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            B(s, {
              validation: "base64url",
              code: j.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : de.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: j.invalid_string,
      ...G.errToObj(r),
    });
  }
  _addCheck(t) {
    return new bt({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...G.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...G.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...G.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...G.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...G.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...G.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...G.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...G.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...G.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...G.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...G.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...G.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...G.errToObj(t) });
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
          ...G.errToObj(t == null ? void 0 : t.message),
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
          ...G.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...G.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...G.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...G.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...G.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...G.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...G.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...G.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...G.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, G.errToObj(t));
  }
  trim() {
    return new bt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new bt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new bt({
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
bt.create = (e) => {
  var t;
  return new bt({
    checks: [],
    typeName: Q.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...se(e),
  });
};
function $b(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    i = parseInt(e.toFixed(s).replace(".", "")),
    o = parseInt(t.toFixed(s).replace(".", ""));
  return (i % o) / Math.pow(10, s);
}
class an extends ae {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== $.number)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        B(i, {
          code: j.invalid_type,
          expected: $.number,
          received: i.parsedType,
        }),
        ee
      );
    }
    let r;
    const s = new Ke();
    for (const i of this._def.checks)
      i.kind === "int"
        ? de.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: j.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: j.too_small,
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
          B(r, {
            code: j.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? $b(t.data, i.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: j.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          B(r, { code: j.not_finite, message: i.message }),
          s.dirty())
        : de.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, G.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, G.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, G.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, G.toString(n));
  }
  setLimit(t, n, r, s) {
    return new an({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: G.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new an({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: G.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: G.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: G.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: G.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: G.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: G.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: G.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: G.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: G.toString(t),
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
        t.kind === "int" || (t.kind === "multipleOf" && de.isInteger(t.value))
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
an.create = (e) =>
  new an({
    checks: [],
    typeName: Q.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...se(e),
  });
class cn extends ae {
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
    if (this._getType(t) !== $.bigint) return this._getInvalidInput(t);
    let r;
    const s = new Ke();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: j.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: j.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? t.data % i.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: j.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : de.assertNever(i);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return (
      B(n, {
        code: j.invalid_type,
        expected: $.bigint,
        received: n.parsedType,
      }),
      ee
    );
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, G.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, G.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, G.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, G.toString(n));
  }
  setLimit(t, n, r, s) {
    return new cn({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: G.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new cn({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: G.toString(n),
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
cn.create = (e) => {
  var t;
  return new cn({
    checks: [],
    typeName: Q.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...se(e),
  });
};
class Zr extends ae {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== $.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: j.invalid_type,
          expected: $.boolean,
          received: r.parsedType,
        }),
        ee
      );
    }
    return Je(t.data);
  }
}
Zr.create = (e) =>
  new Zr({
    typeName: Q.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...se(e),
  });
class On extends ae {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== $.date)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        B(i, {
          code: j.invalid_type,
          expected: $.date,
          received: i.parsedType,
        }),
        ee
      );
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return B(i, { code: j.invalid_date }), ee;
    }
    const r = new Ke();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? t.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          B(s, {
            code: j.too_small,
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
          B(s, {
            code: j.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: "date",
          }),
          r.dirty())
        : de.assertNever(i);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new On({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: G.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: G.toString(n),
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
On.create = (e) =>
  new On({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: Q.ZodDate,
    ...se(e),
  });
class ii extends ae {
  _parse(t) {
    if (this._getType(t) !== $.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: j.invalid_type,
          expected: $.symbol,
          received: r.parsedType,
        }),
        ee
      );
    }
    return Je(t.data);
  }
}
ii.create = (e) => new ii({ typeName: Q.ZodSymbol, ...se(e) });
class Gr extends ae {
  _parse(t) {
    if (this._getType(t) !== $.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: j.invalid_type,
          expected: $.undefined,
          received: r.parsedType,
        }),
        ee
      );
    }
    return Je(t.data);
  }
}
Gr.create = (e) => new Gr({ typeName: Q.ZodUndefined, ...se(e) });
class qr extends ae {
  _parse(t) {
    if (this._getType(t) !== $.null) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: j.invalid_type,
          expected: $.null,
          received: r.parsedType,
        }),
        ee
      );
    }
    return Je(t.data);
  }
}
qr.create = (e) => new qr({ typeName: Q.ZodNull, ...se(e) });
class ir extends ae {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Je(t.data);
  }
}
ir.create = (e) => new ir({ typeName: Q.ZodAny, ...se(e) });
class An extends ae {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Je(t.data);
  }
}
An.create = (e) => new An({ typeName: Q.ZodUnknown, ...se(e) });
class Kt extends ae {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      B(n, { code: j.invalid_type, expected: $.never, received: n.parsedType }),
      ee
    );
  }
}
Kt.create = (e) => new Kt({ typeName: Q.ZodNever, ...se(e) });
class oi extends ae {
  _parse(t) {
    if (this._getType(t) !== $.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: j.invalid_type,
          expected: $.void,
          received: r.parsedType,
        }),
        ee
      );
    }
    return Je(t.data);
  }
}
oi.create = (e) => new oi({ typeName: Q.ZodVoid, ...se(e) });
class xt extends ae {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      s = this._def;
    if (n.parsedType !== $.array)
      return (
        B(n, {
          code: j.invalid_type,
          expected: $.array,
          received: n.parsedType,
        }),
        ee
      );
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value,
        a = n.data.length < s.exactLength.value;
      (o || a) &&
        (B(n, {
          code: o ? j.too_big : j.too_small,
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
        (B(n, {
          code: j.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        r.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        (B(n, {
          code: j.too_big,
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
        [...n.data].map((o, a) => s.type._parseAsync(new It(n, o, n.path, a)))
      ).then((o) => Ke.mergeArray(r, o));
    const i = [...n.data].map((o, a) =>
      s.type._parseSync(new It(n, o, n.path, a))
    );
    return Ke.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new xt({
      ...this._def,
      minLength: { value: t, message: G.toString(n) },
    });
  }
  max(t, n) {
    return new xt({
      ...this._def,
      maxLength: { value: t, message: G.toString(n) },
    });
  }
  length(t, n) {
    return new xt({
      ...this._def,
      exactLength: { value: t, message: G.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
xt.create = (e, t) =>
  new xt({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Q.ZodArray,
    ...se(t),
  });
function Gn(e) {
  if (e instanceof _e) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Dt.create(Gn(r));
    }
    return new _e({ ...e._def, shape: () => t });
  } else
    return e instanceof xt
      ? new xt({ ...e._def, type: Gn(e.element) })
      : e instanceof Dt
      ? Dt.create(Gn(e.unwrap()))
      : e instanceof un
      ? un.create(Gn(e.unwrap()))
      : e instanceof Vt
      ? Vt.create(e.items.map((t) => Gn(t)))
      : e;
}
class _e extends ae {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = de.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== $.object) {
      const c = this._getOrReturnCtx(t);
      return (
        B(c, {
          code: j.invalid_type,
          expected: $.object,
          received: c.parsedType,
        }),
        ee
      );
    }
    const { status: r, ctx: s } = this._processInputParams(t),
      { shape: i, keys: o } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof Kt && this._def.unknownKeys === "strip")
    )
      for (const c in s.data) o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const u = i[c],
        d = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new It(s, d, s.path, c)),
        alwaysSet: c in s.data,
      });
    }
    if (this._def.catchall instanceof Kt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] },
          });
      else if (c === "strict")
        a.length > 0 &&
          (B(s, { code: j.unrecognized_keys, keys: a }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of a) {
        const d = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(new It(s, d, s.path, u)),
          alwaysSet: u in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const c = [];
            for (const u of l) {
              const d = await u.key,
                f = await u.value;
              c.push({ key: d, value: f, alwaysSet: u.alwaysSet });
            }
            return c;
          })
          .then((c) => Ke.mergeObjectSync(r, c))
      : Ke.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      G.errToObj,
      new _e({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var s, i, o, a;
                const l =
                  (o =
                    (i = (s = this._def).errorMap) === null || i === void 0
                      ? void 0
                      : i.call(s, n, r).message) !== null && o !== void 0
                    ? o
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (a = G.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : l,
                    }
                  : { message: l };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new _e({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new _e({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new _e({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new _e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: Q.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new _e({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      de.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new _e({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      de.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new _e({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Gn(this);
  }
  partial(t) {
    const n = {};
    return (
      de.objectKeys(this.shape).forEach((r) => {
        const s = this.shape[r];
        t && !t[r] ? (n[r] = s) : (n[r] = s.optional());
      }),
      new _e({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      de.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let i = this.shape[r];
          for (; i instanceof Dt; ) i = i._def.innerType;
          n[r] = i;
        }
      }),
      new _e({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return Vf(de.objectKeys(this.shape));
  }
}
_e.create = (e, t) =>
  new _e({
    shape: () => e,
    unknownKeys: "strip",
    catchall: Kt.create(),
    typeName: Q.ZodObject,
    ...se(t),
  });
_e.strictCreate = (e, t) =>
  new _e({
    shape: () => e,
    unknownKeys: "strict",
    catchall: Kt.create(),
    typeName: Q.ZodObject,
    ...se(t),
  });
_e.lazycreate = (e, t) =>
  new _e({
    shape: e,
    unknownKeys: "strip",
    catchall: Kt.create(),
    typeName: Q.ZodObject,
    ...se(t),
  });
class Kr extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function s(i) {
      for (const a of i) if (a.result.status === "valid") return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new it(a.ctx.common.issues));
      return B(n, { code: j.invalid_union, unionErrors: o }), ee;
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
      for (const l of r) {
        const c = { ...n, common: { ...n.common, issues: [] }, parent: null },
          u = l._parseSync({ data: n.data, path: n.path, parent: c });
        if (u.status === "valid") return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: c }),
          c.common.issues.length && o.push(c.common.issues);
      }
      if (i) return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new it(l));
      return B(n, { code: j.invalid_union, unionErrors: a }), ee;
    }
  }
  get options() {
    return this._def.options;
  }
}
Kr.create = (e, t) => new Kr({ options: e, typeName: Q.ZodUnion, ...se(t) });
const Ht = (e) =>
  e instanceof Jr
    ? Ht(e.schema)
    : e instanceof St
    ? Ht(e.innerType())
    : e instanceof Qr
    ? [e.value]
    : e instanceof ln
    ? e.options
    : e instanceof es
    ? de.objectValues(e.enum)
    : e instanceof ts
    ? Ht(e._def.innerType)
    : e instanceof Gr
    ? [void 0]
    : e instanceof qr
    ? [null]
    : e instanceof Dt
    ? [void 0, ...Ht(e.unwrap())]
    : e instanceof un
    ? [null, ...Ht(e.unwrap())]
    : e instanceof Da || e instanceof rs
    ? Ht(e.unwrap())
    : e instanceof ns
    ? Ht(e._def.innerType)
    : [];
class Ci extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $.object)
      return (
        B(n, {
          code: j.invalid_type,
          expected: $.object,
          received: n.parsedType,
        }),
        ee
      );
    const r = this.discriminator,
      s = n.data[r],
      i = this.optionsMap.get(s);
    return i
      ? n.common.async
        ? i._parseAsync({ data: n.data, path: n.path, parent: n })
        : i._parseSync({ data: n.data, path: n.path, parent: n })
      : (B(n, {
          code: j.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        ee);
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
      const o = Ht(i.shape[t]);
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
    return new Ci({
      typeName: Q.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...se(r),
    });
  }
}
function Io(e, t) {
  const n = Zt(e),
    r = Zt(t);
  if (e === t) return { valid: !0, data: e };
  if (n === $.object && r === $.object) {
    const s = de.objectKeys(t),
      i = de.objectKeys(e).filter((a) => s.indexOf(a) !== -1),
      o = { ...e, ...t };
    for (const a of i) {
      const l = Io(e[a], t[a]);
      if (!l.valid) return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === $.array && r === $.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i],
        a = t[i],
        l = Io(o, a);
      if (!l.valid) return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return n === $.date && r === $.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Xr extends ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = (i, o) => {
        if (Fo(i) || Fo(o)) return ee;
        const a = Io(i.value, o.value);
        return a.valid
          ? ((Lo(i) || Lo(o)) && n.dirty(), { status: n.value, value: a.data })
          : (B(r, { code: j.invalid_intersection_types }), ee);
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
Xr.create = (e, t, n) =>
  new Xr({ left: e, right: t, typeName: Q.ZodIntersection, ...se(n) });
class Vt extends ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $.array)
      return (
        B(r, {
          code: j.invalid_type,
          expected: $.array,
          received: r.parsedType,
        }),
        ee
      );
    if (r.data.length < this._def.items.length)
      return (
        B(r, {
          code: j.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        ee
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (B(r, {
        code: j.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...r.data]
      .map((o, a) => {
        const l = this._def.items[a] || this._def.rest;
        return l ? l._parse(new It(r, o, r.path, a)) : null;
      })
      .filter((o) => !!o);
    return r.common.async
      ? Promise.all(i).then((o) => Ke.mergeArray(n, o))
      : Ke.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Vt({ ...this._def, rest: t });
  }
}
Vt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Vt({ items: e, typeName: Q.ZodTuple, rest: null, ...se(t) });
};
class Yr extends ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $.object)
      return (
        B(r, {
          code: j.invalid_type,
          expected: $.object,
          received: r.parsedType,
        }),
        ee
      );
    const s = [],
      i = this._def.keyType,
      o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new It(r, a, r.path, a)),
        value: o._parse(new It(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data,
      });
    return r.common.async
      ? Ke.mergeObjectAsync(n, s)
      : Ke.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ae
      ? new Yr({ keyType: t, valueType: n, typeName: Q.ZodRecord, ...se(r) })
      : new Yr({
          keyType: bt.create(),
          valueType: t,
          typeName: Q.ZodRecord,
          ...se(n),
        });
  }
}
class ai extends ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $.map)
      return (
        B(r, { code: j.invalid_type, expected: $.map, received: r.parsedType }),
        ee
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...r.data.entries()].map(([a, l], c) => ({
        key: s._parse(new It(r, a, r.path, [c, "key"])),
        value: i._parse(new It(r, l, r.path, [c, "value"])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key,
            u = await l.value;
          if (c.status === "aborted" || u.status === "aborted") return ee;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(),
            a.set(c.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = new Map();
      for (const l of o) {
        const c = l.key,
          u = l.value;
        if (c.status === "aborted" || u.status === "aborted") return ee;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(),
          a.set(c.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
ai.create = (e, t, n) =>
  new ai({ valueType: t, keyType: e, typeName: Q.ZodMap, ...se(n) });
class Dn extends ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $.set)
      return (
        B(r, { code: j.invalid_type, expected: $.set, received: r.parsedType }),
        ee
      );
    const s = this._def;
    s.minSize !== null &&
      r.data.size < s.minSize.value &&
      (B(r, {
        code: j.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        r.data.size > s.maxSize.value &&
        (B(r, {
          code: j.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const c = new Set();
      for (const u of l) {
        if (u.status === "aborted") return ee;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const a = [...r.data.values()].map((l, c) =>
      i._parse(new It(r, l, r.path, c))
    );
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(t, n) {
    return new Dn({
      ...this._def,
      minSize: { value: t, message: G.toString(n) },
    });
  }
  max(t, n) {
    return new Dn({
      ...this._def,
      maxSize: { value: t, message: G.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Dn.create = (e, t) =>
  new Dn({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Q.ZodSet,
    ...se(t),
  });
class nr extends ae {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $.function)
      return (
        B(n, {
          code: j.invalid_type,
          expected: $.function,
          received: n.parsedType,
        }),
        ee
      );
    function r(a, l) {
      return ri({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ni(),
          sr,
        ].filter((c) => !!c),
        issueData: { code: j.invalid_arguments, argumentsError: l },
      });
    }
    function s(a, l) {
      return ri({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ni(),
          sr,
        ].filter((c) => !!c),
        issueData: { code: j.invalid_return_type, returnTypeError: l },
      });
    }
    const i = { errorMap: n.common.contextualErrorMap },
      o = n.data;
    if (this._def.returns instanceof or) {
      const a = this;
      return Je(async function (...l) {
        const c = new it([]),
          u = await a._def.args.parseAsync(l, i).catch((g) => {
            throw (c.addIssue(r(l, g)), c);
          }),
          d = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(d, i).catch((g) => {
          throw (c.addIssue(s(d, g)), c);
        });
      });
    } else {
      const a = this;
      return Je(function (...l) {
        const c = a._def.args.safeParse(l, i);
        if (!c.success) throw new it([r(l, c.error)]);
        const u = Reflect.apply(o, this, c.data),
          d = a._def.returns.safeParse(u, i);
        if (!d.success) throw new it([s(u, d.error)]);
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
    return new nr({ ...this._def, args: Vt.create(t).rest(An.create()) });
  }
  returns(t) {
    return new nr({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new nr({
      args: t || Vt.create([]).rest(An.create()),
      returns: n || An.create(),
      typeName: Q.ZodFunction,
      ...se(r),
    });
  }
}
class Jr extends ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Jr.create = (e, t) => new Jr({ getter: e, typeName: Q.ZodLazy, ...se(t) });
class Qr extends ae {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        B(n, {
          received: n.data,
          code: j.invalid_literal,
          expected: this._def.value,
        }),
        ee
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Qr.create = (e, t) => new Qr({ value: e, typeName: Q.ZodLiteral, ...se(t) });
function Vf(e, t) {
  return new ln({ values: e, typeName: Q.ZodEnum, ...se(t) });
}
class ln extends ae {
  constructor() {
    super(...arguments), Rr.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        B(n, {
          expected: de.joinValues(r),
          received: n.parsedType,
          code: j.invalid_type,
        }),
        ee
      );
    }
    if (
      (si(this, Rr) || Mf(this, Rr, new Set(this._def.values)),
      !si(this, Rr).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        B(n, { received: n.data, code: j.invalid_enum_value, options: r }), ee
      );
    }
    return Je(t.data);
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
    return ln.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return ln.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
Rr = new WeakMap();
ln.create = Vf;
class es extends ae {
  constructor() {
    super(...arguments), Pr.set(this, void 0);
  }
  _parse(t) {
    const n = de.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== $.string && r.parsedType !== $.number) {
      const s = de.objectValues(n);
      return (
        B(r, {
          expected: de.joinValues(s),
          received: r.parsedType,
          code: j.invalid_type,
        }),
        ee
      );
    }
    if (
      (si(this, Pr) ||
        Mf(this, Pr, new Set(de.getValidEnumValues(this._def.values))),
      !si(this, Pr).has(t.data))
    ) {
      const s = de.objectValues(n);
      return (
        B(r, { received: r.data, code: j.invalid_enum_value, options: s }), ee
      );
    }
    return Je(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Pr = new WeakMap();
es.create = (e, t) =>
  new es({ values: e, typeName: Q.ZodNativeEnum, ...se(t) });
class or extends ae {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $.promise && n.common.async === !1)
      return (
        B(n, {
          code: j.invalid_type,
          expected: $.promise,
          received: n.parsedType,
        }),
        ee
      );
    const r = n.parsedType === $.promise ? n.data : Promise.resolve(n.data);
    return Je(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
or.create = (e, t) => new or({ type: e, typeName: Q.ZodPromise, ...se(t) });
class St extends ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Q.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = this._def.effect || null,
      i = {
        addIssue: (o) => {
          B(r, o), o.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
      const o = s.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === "aborted") return ee;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r,
          });
          return l.status === "aborted"
            ? ee
            : l.status === "dirty" || n.value === "dirty"
            ? qn(l.value)
            : l;
        });
      {
        if (n.value === "aborted") return ee;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? ee
          : a.status === "dirty" || n.value === "dirty"
          ? qn(a.value)
          : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
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
          ? ee
          : (a.status === "dirty" && n.dirty(),
            o(a.value),
            { status: n.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            a.status === "aborted"
              ? ee
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
        if (!jn(o)) return o;
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
            jn(o)
              ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : o
          );
    de.assertNever(s);
  }
}
St.create = (e, t, n) =>
  new St({ schema: e, typeName: Q.ZodEffects, effect: t, ...se(n) });
St.createWithPreprocess = (e, t, n) =>
  new St({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: Q.ZodEffects,
    ...se(n),
  });
class Dt extends ae {
  _parse(t) {
    return this._getType(t) === $.undefined
      ? Je(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dt.create = (e, t) =>
  new Dt({ innerType: e, typeName: Q.ZodOptional, ...se(t) });
class un extends ae {
  _parse(t) {
    return this._getType(t) === $.null
      ? Je(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
un.create = (e, t) =>
  new un({ innerType: e, typeName: Q.ZodNullable, ...se(t) });
class ts extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === $.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ts.create = (e, t) =>
  new ts({
    innerType: e,
    typeName: Q.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...se(t),
  });
class ns extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Hr(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new it(r.common.issues);
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
                    return new it(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ns.create = (e, t) =>
  new ns({
    innerType: e,
    typeName: Q.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...se(t),
  });
class ci extends ae {
  _parse(t) {
    if (this._getType(t) !== $.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, { code: j.invalid_type, expected: $.nan, received: r.parsedType }),
        ee
      );
    }
    return { status: "valid", value: t.data };
  }
}
ci.create = (e) => new ci({ typeName: Q.ZodNaN, ...se(e) });
const zb = Symbol("zod_brand");
class Da extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class gs extends ae {
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
          ? ee
          : i.status === "dirty"
          ? (n.dirty(), qn(i.value))
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
        ? ee
        : s.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new gs({ in: t, out: n, typeName: Q.ZodPipeline });
  }
}
class rs extends ae {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (s) => (jn(s) && (s.value = Object.freeze(s.value)), s);
    return Hr(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
rs.create = (e, t) =>
  new rs({ innerType: e, typeName: Q.ZodReadonly, ...se(t) });
function Bf(e, t = {}, n) {
  return e
    ? ir.create().superRefine((r, s) => {
        var i, o;
        if (!e(r)) {
          const a =
              typeof t == "function"
                ? t(r)
                : typeof t == "string"
                ? { message: t }
                : t,
            l =
              (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null &&
              o !== void 0
                ? o
                : !0,
            c = typeof a == "string" ? { message: a } : a;
          s.addIssue({ code: "custom", ...c, fatal: l });
        }
      })
    : ir.create();
}
const Wb = { object: _e.lazycreate };
var Q;
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
})(Q || (Q = {}));
const Hb = (e, t = { message: `Input not instance of ${e.name}` }) =>
    Bf((n) => n instanceof e, t),
  Uf = bt.create,
  $f = an.create,
  Zb = ci.create,
  Gb = cn.create,
  zf = Zr.create,
  qb = On.create,
  Kb = ii.create,
  Xb = Gr.create,
  Yb = qr.create,
  Jb = ir.create,
  Qb = An.create,
  ex = Kt.create,
  tx = oi.create,
  nx = xt.create,
  rx = _e.create,
  sx = _e.strictCreate,
  ix = Kr.create,
  ox = Ci.create,
  ax = Xr.create,
  cx = Vt.create,
  lx = Yr.create,
  ux = ai.create,
  dx = Dn.create,
  fx = nr.create,
  hx = Jr.create,
  px = Qr.create,
  mx = ln.create,
  gx = es.create,
  yx = or.create,
  vl = St.create,
  vx = Dt.create,
  bx = un.create,
  xx = St.createWithPreprocess,
  wx = gs.create,
  _x = () => Uf().optional(),
  Sx = () => $f().optional(),
  Ex = () => zf().optional(),
  Tx = {
    string: (e) => bt.create({ ...e, coerce: !0 }),
    number: (e) => an.create({ ...e, coerce: !0 }),
    boolean: (e) => Zr.create({ ...e, coerce: !0 }),
    bigint: (e) => cn.create({ ...e, coerce: !0 }),
    date: (e) => On.create({ ...e, coerce: !0 }),
  },
  Ax = ee;
var be = Object.freeze({
  __proto__: null,
  defaultErrorMap: sr,
  setErrorMap: xb,
  getErrorMap: ni,
  makeIssue: ri,
  EMPTY_PATH: wb,
  addIssueToContext: B,
  ParseStatus: Ke,
  INVALID: ee,
  DIRTY: qn,
  OK: Je,
  isAborted: Fo,
  isDirty: Lo,
  isValid: jn,
  isAsync: Hr,
  get util() {
    return de;
  },
  get objectUtil() {
    return Mo;
  },
  ZodParsedType: $,
  getParsedType: Zt,
  ZodType: ae,
  datetimeRegex: If,
  ZodString: bt,
  ZodNumber: an,
  ZodBigInt: cn,
  ZodBoolean: Zr,
  ZodDate: On,
  ZodSymbol: ii,
  ZodUndefined: Gr,
  ZodNull: qr,
  ZodAny: ir,
  ZodUnknown: An,
  ZodNever: Kt,
  ZodVoid: oi,
  ZodArray: xt,
  ZodObject: _e,
  ZodUnion: Kr,
  ZodDiscriminatedUnion: Ci,
  ZodIntersection: Xr,
  ZodTuple: Vt,
  ZodRecord: Yr,
  ZodMap: ai,
  ZodSet: Dn,
  ZodFunction: nr,
  ZodLazy: Jr,
  ZodLiteral: Qr,
  ZodEnum: ln,
  ZodNativeEnum: es,
  ZodPromise: or,
  ZodEffects: St,
  ZodTransformer: St,
  ZodOptional: Dt,
  ZodNullable: un,
  ZodDefault: ts,
  ZodCatch: ns,
  ZodNaN: ci,
  BRAND: zb,
  ZodBranded: Da,
  ZodPipeline: gs,
  ZodReadonly: rs,
  custom: Bf,
  Schema: ae,
  ZodSchema: ae,
  late: Wb,
  get ZodFirstPartyTypeKind() {
    return Q;
  },
  coerce: Tx,
  any: Jb,
  array: nx,
  bigint: Gb,
  boolean: zf,
  date: qb,
  discriminatedUnion: ox,
  effect: vl,
  enum: mx,
  function: fx,
  instanceof: Hb,
  intersection: ax,
  lazy: hx,
  literal: px,
  map: ux,
  nan: Zb,
  nativeEnum: gx,
  never: ex,
  null: Yb,
  nullable: bx,
  number: $f,
  object: rx,
  oboolean: Ex,
  onumber: Sx,
  optional: vx,
  ostring: _x,
  pipeline: wx,
  preprocess: xx,
  promise: yx,
  record: lx,
  set: dx,
  strictObject: sx,
  string: Uf,
  symbol: Kb,
  transformer: vl,
  tuple: cx,
  undefined: Xb,
  union: ix,
  unknown: Qb,
  void: tx,
  NEVER: Ax,
  ZodIssueCode: j,
  quotelessJson: bb,
  ZodError: it,
});
const bl = (e, t) => (Be((r) => r.lang) === "ru" ? e : t),
  Cx = be.object({ email: be.string().email() }),
  Rx = () => {
    var n, r;
    const e = Nf({ resolver: Of(Cx), defaultValues: { email: "" } });
    async function t(s) {
      console.log(s);
    }
    return p.jsx("form", {
      onSubmit: e.handleSubmit(t),
      className: "py-8 bg-bg_surface_container",
      children: p.jsxs(lt, {
        className: "flex items-center justify-between",
        children: [
          p.jsx("h2", {
            className: "h2",
            children: bl("Подпишитесь на новости:", "Subscribe to the news:"),
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
          p.jsx($e, {
            className: "xl:w-[288px] w-[220px]",
            children: bl("Подписаться", "Subscribe"),
          }),
        ],
      }),
    });
  },
  OR = () => {
    const e = Be((t) => t.lang);
    return p.jsxs("footer", {
      children: [
        p.jsx(Rx, {}),
        p.jsx("div", {
          className: "py-5 bg-surface_high",
          children: p.jsxs(lt, {
            className: "flex flex-col gap-6",
            children: [
              p.jsxs("div", {
                className:
                  "flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center",
                children: [
                  p.jsx(Sd, {}),
                  p.jsxs("div", {
                    className: "flex items-center gap-6",
                    children: [
                      p.jsx(Me, {
                        target: "_blank",
                        to: "https://www.facebook.com/profile.php?id=61567254728028",
                        children: p.jsx(Qg, { className: "text-on_surface" }),
                      }),
                      p.jsx(Me, {
                        target: "_blank",
                        to: "https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq",
                        children: p.jsx("img", { src: "/inst.svg" }),
                      }),
                      p.jsx(Me, {
                        target: "_blank",
                        to: "https://www.linkedin.com/company/turkmen-expo",
                        children: p.jsx("img", { src: "/in.svg" }),
                      }),
                      p.jsx(Me, {
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
                  e === Ge.RU
                    ? "©2025 Все права защищены"
                    : "All rights reserved",
              }),
            ],
          }),
        }),
      ],
    });
  };
var Px = "DismissableLayer",
  Vo = "dismissableLayer.update",
  kx = "dismissableLayer.pointerDownOutside",
  Nx = "dismissableLayer.focusOutside",
  xl,
  Wf = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Hf = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      c = v.useContext(Wf),
      [u, d] = v.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = v.useState({}),
      m = Ve(t, (A) => d(A)),
      h = Array.from(c.layers),
      [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = h.indexOf(y),
      x = u ? h.indexOf(u) : -1,
      _ = c.layersWithOutsidePointerEventsDisabled.size > 0,
      E = x >= b,
      w = Dx((A) => {
        const C = A.target,
          O = [...c.branches].some((M) => M.contains(C));
        !E ||
          O ||
          (s == null || s(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f),
      R = Mx((A) => {
        const C = A.target;
        [...c.branches].some((M) => M.contains(C)) ||
          (i == null || i(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, f);
    return (
      Cd((A) => {
        x === c.layers.size - 1 &&
          (r == null || r(A),
          !A.defaultPrevented && a && (A.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (u)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((xl = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            wl(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = xl);
            }
          );
      }, [u, f, n, c]),
      v.useEffect(
        () => () => {
          u &&
            (c.layers.delete(u),
            c.layersWithOutsidePointerEventsDisabled.delete(u),
            wl());
        },
        [u, c]
      ),
      v.useEffect(() => {
        const A = () => g({});
        return (
          document.addEventListener(Vo, A),
          () => document.removeEventListener(Vo, A)
        );
      }, []),
      p.jsx(Ae.div, {
        ...l,
        ref: m,
        style: {
          pointerEvents: _ ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: xe(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: xe(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        ),
      })
    );
  });
Hf.displayName = Px;
var jx = "DismissableLayerBranch",
  Ox = v.forwardRef((e, t) => {
    const n = v.useContext(Wf),
      r = v.useRef(null),
      s = Ve(t, r);
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
      p.jsx(Ae.div, { ...e, ref: s })
    );
  });
Ox.displayName = jx;
function Dx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _t(e),
    r = v.useRef(!1),
    s = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Zf(kx, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
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
function Mx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _t(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          Zf(Nx, n, { originalEvent: i }, { discrete: !1 });
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
function wl() {
  const e = new CustomEvent(Vo);
  document.dispatchEvent(e);
}
function Zf(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? Ad(s, i) : s.dispatchEvent(i);
}
const Fx = ["top", "right", "bottom", "left"],
  dn = Math.min,
  st = Math.max,
  li = Math.round,
  Ds = Math.floor,
  Mt = (e) => ({ x: e, y: e }),
  Lx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Ix = { start: "end", end: "start" };
function Bo(e, t, n) {
  return st(e, dn(t, n));
}
function Xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Yt(e) {
  return e.split("-")[0];
}
function hr(e) {
  return e.split("-")[1];
}
function Ma(e) {
  return e === "x" ? "y" : "x";
}
function Fa(e) {
  return e === "y" ? "height" : "width";
}
function fn(e) {
  return ["top", "bottom"].includes(Yt(e)) ? "y" : "x";
}
function La(e) {
  return Ma(fn(e));
}
function Vx(e, t, n) {
  n === void 0 && (n = !1);
  const r = hr(e),
    s = La(e),
    i = Fa(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (o = ui(o)), [o, ui(o)];
}
function Bx(e) {
  const t = ui(e);
  return [Uo(e), t, Uo(t)];
}
function Uo(e) {
  return e.replace(/start|end/g, (t) => Ix[t]);
}
function Ux(e, t, n) {
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
function $x(e, t, n, r) {
  const s = hr(e);
  let i = Ux(Yt(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(Uo)))), i
  );
}
function ui(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lx[t]);
}
function zx(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Gf(e) {
  return typeof e != "number"
    ? zx(e)
    : { top: e, right: e, bottom: e, left: e };
}
function di(e) {
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
function _l(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = fn(t),
    o = La(t),
    a = Fa(o),
    l = Yt(t),
    c = i === "y",
    u = r.x + r.width / 2 - s.width / 2,
    d = r.y + r.height / 2 - s.height / 2,
    f = r[a] / 2 - s[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = { x: u, y: r.y - s.height };
      break;
    case "bottom":
      g = { x: u, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: d };
      break;
    case "left":
      g = { x: r.x - s.width, y: d };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (hr(t)) {
    case "start":
      g[o] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[o] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const Wx = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: d } = _l(c, r, l),
    f = r,
    g = {},
    m = 0;
  for (let h = 0; h < a.length; h++) {
    const { name: y, fn: b } = a[h],
      {
        x,
        y: _,
        data: E,
        reset: w,
      } = await b({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: s,
        middlewareData: g,
        rects: c,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (u = x ?? u),
      (d = _ ?? d),
      (g = { ...g, [y]: { ...g[y], ...E } }),
      w &&
        m <= 50 &&
        (m++,
        typeof w == "object" &&
          (w.placement && (f = w.placement),
          w.rects &&
            (c =
              w.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : w.rects),
          ({ x: u, y: d } = _l(c, f, l))),
        (h = -1));
  }
  return { x: u, y: d, placement: f, strategy: s, middlewareData: g };
};
async function ss(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: g = 0,
    } = Xt(t, e),
    m = Gf(g),
    y = a[f ? (d === "floating" ? "reference" : "floating") : d],
    b = di(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      })
    ),
    x =
      d === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(_)))
      ? (await (i.getScale == null ? void 0 : i.getScale(_))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    w = di(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: x,
            offsetParent: _,
            strategy: l,
          })
        : x
    );
  return {
    top: (b.top - w.top + m.top) / E.y,
    bottom: (w.bottom - b.bottom + m.bottom) / E.y,
    left: (b.left - w.left + m.left) / E.x,
    right: (w.right - b.right + m.right) / E.x,
  };
}
const Hx = (e) => ({
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
          middlewareData: l,
        } = t,
        { element: c, padding: u = 0 } = Xt(e, t) || {};
      if (c == null) return {};
      const d = Gf(u),
        f = { x: n, y: r },
        g = La(s),
        m = Fa(g),
        h = await o.getDimensions(c),
        y = g === "y",
        b = y ? "top" : "left",
        x = y ? "bottom" : "right",
        _ = y ? "clientHeight" : "clientWidth",
        E = i.reference[m] + i.reference[g] - f[g] - i.floating[m],
        w = f[g] - i.reference[g],
        R = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
      let A = R ? R[_] : 0;
      (!A || !(await (o.isElement == null ? void 0 : o.isElement(R)))) &&
        (A = a.floating[_] || i.floating[m]);
      const C = E / 2 - w / 2,
        O = A / 2 - h[m] / 2 - 1,
        M = dn(d[b], O),
        U = dn(d[x], O),
        N = M,
        I = A - h[m] - U,
        z = A / 2 - h[m] / 2 + C,
        J = Bo(N, z, I),
        q =
          !l.arrow &&
          hr(s) != null &&
          z !== J &&
          i.reference[m] / 2 - (z < N ? M : U) - h[m] / 2 < 0,
        H = q ? (z < N ? z - N : z - I) : 0;
      return {
        [g]: f[g] + H,
        data: {
          [g]: J,
          centerOffset: z - J - H,
          ...(q && { alignmentOffset: H }),
        },
        reset: q,
      };
    },
  }),
  Zx = function (e) {
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
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: m = "none",
              flipAlignment: h = !0,
              ...y
            } = Xt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const b = Yt(s),
            x = fn(a),
            _ = Yt(a) === a,
            E = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            w = f || (_ || !h ? [ui(a)] : Bx(a)),
            R = m !== "none";
          !f && R && w.push(...$x(a, h, m, E));
          const A = [a, ...w],
            C = await ss(t, y),
            O = [];
          let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((u && O.push(C[b]), d)) {
            const z = Vx(s, o, E);
            O.push(C[z[0]], C[z[1]]);
          }
          if (
            ((M = [...M, { placement: s, overflows: O }]),
            !O.every((z) => z <= 0))
          ) {
            var U, N;
            const z = (((U = i.flip) == null ? void 0 : U.index) || 0) + 1,
              J = A[z];
            if (J)
              return {
                data: { index: z, overflows: M },
                reset: { placement: J },
              };
            let q =
              (N = M.filter((H) => H.overflows[0] <= 0).sort(
                (H, W) => H.overflows[1] - W.overflows[1]
              )[0]) == null
                ? void 0
                : N.placement;
            if (!q)
              switch (g) {
                case "bestFit": {
                  var I;
                  const H =
                    (I = M.filter((W) => {
                      if (R) {
                        const ne = fn(W.placement);
                        return ne === x || ne === "y";
                      }
                      return !0;
                    })
                      .map((W) => [
                        W.placement,
                        W.overflows
                          .filter((ne) => ne > 0)
                          .reduce((ne, fe) => ne + fe, 0),
                      ])
                      .sort((W, ne) => W[1] - ne[1])[0]) == null
                      ? void 0
                      : I[0];
                  H && (q = H);
                  break;
                }
                case "initialPlacement":
                  q = a;
                  break;
              }
            if (s !== q) return { reset: { placement: q } };
          }
          return {};
        },
      }
    );
  };
function Sl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function El(e) {
  return Fx.some((t) => e[t] >= 0);
}
const Gx = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...s } = Xt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await ss(t, { ...s, elementContext: "reference" }),
              o = Sl(i, n.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: El(o) },
            };
          }
          case "escaped": {
            const i = await ss(t, { ...s, altBoundary: !0 }),
              o = Sl(i, n.floating);
            return { data: { escapedOffsets: o, escaped: El(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function qx(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = Yt(n),
    a = hr(n),
    l = fn(n) === "y",
    c = ["left", "top"].includes(o) ? -1 : 1,
    u = i && l ? -1 : 1,
    d = Xt(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: m,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof m == "number" && (g = a === "end" ? m * -1 : m),
    l ? { x: g * u, y: f * c } : { x: f * c, y: g * u }
  );
}
const Kx = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await qx(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  Xx = function (e) {
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
              ...l
            } = Xt(e, t),
            c = { x: n, y: r },
            u = await ss(t, l),
            d = fn(Yt(s)),
            f = Ma(d);
          let g = c[f],
            m = c[d];
          if (i) {
            const y = f === "y" ? "top" : "left",
              b = f === "y" ? "bottom" : "right",
              x = g + u[y],
              _ = g - u[b];
            g = Bo(x, g, _);
          }
          if (o) {
            const y = d === "y" ? "top" : "left",
              b = d === "y" ? "bottom" : "right",
              x = m + u[y],
              _ = m - u[b];
            m = Bo(x, m, _);
          }
          const h = a.fn({ ...t, [f]: g, [d]: m });
          return {
            ...h,
            data: { x: h.x - n, y: h.y - r, enabled: { [f]: i, [d]: o } },
          };
        },
      }
    );
  },
  Yx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Xt(e, t),
            u = { x: n, y: r },
            d = fn(s),
            f = Ma(d);
          let g = u[f],
            m = u[d];
          const h = Xt(a, t),
            y =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (l) {
            const _ = f === "y" ? "height" : "width",
              E = i.reference[f] - i.floating[_] + y.mainAxis,
              w = i.reference[f] + i.reference[_] - y.mainAxis;
            g < E ? (g = E) : g > w && (g = w);
          }
          if (c) {
            var b, x;
            const _ = f === "y" ? "width" : "height",
              E = ["top", "left"].includes(Yt(s)),
              w =
                i.reference[d] -
                i.floating[_] +
                ((E && ((b = o.offset) == null ? void 0 : b[d])) || 0) +
                (E ? 0 : y.crossAxis),
              R =
                i.reference[d] +
                i.reference[_] +
                (E ? 0 : ((x = o.offset) == null ? void 0 : x[d]) || 0) -
                (E ? y.crossAxis : 0);
            m < w ? (m = w) : m > R && (m = R);
          }
          return { [f]: g, [d]: m };
        },
      }
    );
  },
  Jx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...c } = Xt(e, t),
            u = await ss(t, c),
            d = Yt(s),
            f = hr(s),
            g = fn(s) === "y",
            { width: m, height: h } = i.floating;
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
            _ = m - u.left - u.right,
            E = dn(h - u[y], x),
            w = dn(m - u[b], _),
            R = !t.middlewareData.shift;
          let A = E,
            C = w;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (C = _),
            (r = t.middlewareData.shift) != null && r.enabled.y && (A = x),
            R && !f)
          ) {
            const M = st(u.left, 0),
              U = st(u.right, 0),
              N = st(u.top, 0),
              I = st(u.bottom, 0);
            g
              ? (C = m - 2 * (M !== 0 || U !== 0 ? M + U : st(u.left, u.right)))
              : (A =
                  h - 2 * (N !== 0 || I !== 0 ? N + I : st(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: C, availableHeight: A });
          const O = await o.getDimensions(a.floating);
          return m !== O.width || h !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ri() {
  return typeof window < "u";
}
function pr(e) {
  return qf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ut(e) {
  var t;
  return (t = (qf(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function qf(e) {
  return Ri() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function Et(e) {
  return Ri() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function Bt(e) {
  return Ri() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function Tl(e) {
  return !Ri() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
function ys(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = Tt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(s)
  );
}
function Qx(e) {
  return ["table", "td", "th"].includes(pr(e));
}
function Pi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ia(e) {
  const t = Va(),
    n = Et(e) ? Tt(e) : e;
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
function ew(e) {
  let t = hn(e);
  for (; Bt(t) && !ar(t); ) {
    if (Ia(t)) return t;
    if (Pi(t)) return null;
    t = hn(t);
  }
  return null;
}
function Va() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function ar(e) {
  return ["html", "body", "#document"].includes(pr(e));
}
function Tt(e) {
  return ot(e).getComputedStyle(e);
}
function ki(e) {
  return Et(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function hn(e) {
  if (pr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Tl(e) && e.host) || Ut(e);
  return Tl(t) ? t.host : t;
}
function Kf(e) {
  const t = hn(e);
  return ar(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Bt(t) && ys(t)
    ? t
    : Kf(t);
}
function is(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Kf(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = ot(s);
  if (i) {
    const a = $o(o);
    return t.concat(
      o,
      o.visualViewport || [],
      ys(s) ? s : [],
      a && n ? is(a) : []
    );
  }
  return t.concat(s, is(s, [], n));
}
function $o(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xf(e) {
  const t = Tt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = Bt(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = li(n) !== i || li(r) !== o;
  return a && ((n = i), (r = o)), { width: n, height: r, $: a };
}
function Ba(e) {
  return Et(e) ? e : e.contextElement;
}
function rr(e) {
  const t = Ba(e);
  if (!Bt(t)) return Mt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = Xf(t);
  let o = (i ? li(n.width) : n.width) / r,
    a = (i ? li(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const tw = Mt(0);
function Yf(e) {
  const t = ot(e);
  return !Va() || !t.visualViewport
    ? tw
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function nw(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ot(e)) ? !1 : t;
}
function Mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    i = Ba(e);
  let o = Mt(1);
  t && (r ? Et(r) && (o = rr(r)) : (o = rr(e)));
  const a = nw(i, n, r) ? Yf(i) : Mt(0);
  let l = (s.left + a.x) / o.x,
    c = (s.top + a.y) / o.y,
    u = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const f = ot(i),
      g = r && Et(r) ? ot(r) : r;
    let m = f,
      h = $o(m);
    for (; h && r && g !== m; ) {
      const y = rr(h),
        b = h.getBoundingClientRect(),
        x = Tt(h),
        _ = b.left + (h.clientLeft + parseFloat(x.paddingLeft)) * y.x,
        E = b.top + (h.clientTop + parseFloat(x.paddingTop)) * y.y;
      (l *= y.x),
        (c *= y.y),
        (u *= y.x),
        (d *= y.y),
        (l += _),
        (c += E),
        (m = ot(h)),
        (h = $o(m));
    }
  }
  return di({ width: u, height: d, x: l, y: c });
}
function Ua(e, t) {
  const n = ki(e).scrollLeft;
  return t ? t.left + n : Mn(Ut(e)).left + n;
}
function Jf(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : Ua(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function rw(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = Ut(r),
    a = t ? Pi(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = Mt(1);
  const u = Mt(0),
    d = Bt(r);
  if (
    (d || (!d && !i)) &&
    ((pr(r) !== "body" || ys(o)) && (l = ki(r)), Bt(r))
  ) {
    const g = Mn(r);
    (c = rr(r)), (u.x = g.x + r.clientLeft), (u.y = g.y + r.clientTop);
  }
  const f = o && !d && !i ? Jf(o, l, !0) : Mt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y,
  };
}
function sw(e) {
  return Array.from(e.getClientRects());
}
function iw(e) {
  const t = Ut(e),
    n = ki(e),
    r = e.ownerDocument.body,
    s = st(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = st(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Ua(e);
  const a = -n.scrollTop;
  return (
    Tt(r).direction === "rtl" && (o += st(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function ow(e, t) {
  const n = ot(e),
    r = Ut(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    (i = s.width), (o = s.height);
    const c = Va();
    (!c || (c && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
function aw(e, t) {
  const n = Mn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = Bt(e) ? rr(e) : Mt(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    c = r * i.y;
  return { width: o, height: a, x: l, y: c };
}
function Al(e, t, n) {
  let r;
  if (t === "viewport") r = ow(e, n);
  else if (t === "document") r = iw(Ut(e));
  else if (Et(t)) r = aw(t, n);
  else {
    const s = Yf(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return di(r);
}
function Qf(e, t) {
  const n = hn(e);
  return n === t || !Et(n) || ar(n)
    ? !1
    : Tt(n).position === "fixed" || Qf(n, t);
}
function cw(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = is(e, [], !1).filter((a) => Et(a) && pr(a) !== "body"),
    s = null;
  const i = Tt(e).position === "fixed";
  let o = i ? hn(e) : e;
  for (; Et(o) && !ar(o); ) {
    const a = Tt(o),
      l = Ia(o);
    !l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (ys(o) && !l && Qf(e, o))
      )
        ? (r = r.filter((u) => u !== o))
        : (s = a),
      (o = hn(o));
  }
  return t.set(e, r), r;
}
function lw(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Pi(t)
          ? []
          : cw(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce((c, u) => {
      const d = Al(t, u, s);
      return (
        (c.top = st(d.top, c.top)),
        (c.right = dn(d.right, c.right)),
        (c.bottom = dn(d.bottom, c.bottom)),
        (c.left = st(d.left, c.left)),
        c
      );
    }, Al(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function uw(e) {
  const { width: t, height: n } = Xf(e);
  return { width: t, height: n };
}
function dw(e, t, n) {
  const r = Bt(t),
    s = Ut(t),
    i = n === "fixed",
    o = Mn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Mt(0);
  if (r || (!r && !i))
    if (((pr(t) !== "body" || ys(s)) && (a = ki(t)), r)) {
      const f = Mn(t, !0, i, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else s && (l.x = Ua(s));
  const c = s && !r && !i ? Jf(s, a) : Mt(0),
    u = o.left + a.scrollLeft - l.x - c.x,
    d = o.top + a.scrollTop - l.y - c.y;
  return { x: u, y: d, width: o.width, height: o.height };
}
function oo(e) {
  return Tt(e).position === "static";
}
function Cl(e, t) {
  if (!Bt(e) || Tt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Ut(e) === n && (n = n.ownerDocument.body), n;
}
function eh(e, t) {
  const n = ot(e);
  if (Pi(e)) return n;
  if (!Bt(e)) {
    let s = hn(e);
    for (; s && !ar(s); ) {
      if (Et(s) && !oo(s)) return s;
      s = hn(s);
    }
    return n;
  }
  let r = Cl(e, t);
  for (; r && Qx(r) && oo(r); ) r = Cl(r, t);
  return r && ar(r) && oo(r) && !Ia(r) ? n : r || ew(e) || n;
}
const fw = async function (e) {
  const t = this.getOffsetParent || eh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: dw(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function hw(e) {
  return Tt(e).direction === "rtl";
}
const pw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rw,
  getDocumentElement: Ut,
  getClippingRect: lw,
  getOffsetParent: eh,
  getElementRects: fw,
  getClientRects: sw,
  getDimensions: uw,
  getScale: rr,
  isElement: Et,
  isRTL: hw,
};
function th(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function mw(e, t) {
  let n = null,
    r;
  const s = Ut(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: g } = c;
    if ((a || t(), !f || !g)) return;
    const m = Ds(d),
      h = Ds(s.clientWidth - (u + f)),
      y = Ds(s.clientHeight - (d + g)),
      b = Ds(u),
      _ = {
        rootMargin: -m + "px " + -h + "px " + -y + "px " + -b + "px",
        threshold: st(0, dn(1, l)) || 1,
      };
    let E = !0;
    function w(R) {
      const A = R[0].intersectionRatio;
      if (A !== l) {
        if (!E) return o();
        A
          ? o(!1, A)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      A === 1 && !th(c, e.getBoundingClientRect()) && o(), (E = !1);
    }
    try {
      n = new IntersectionObserver(w, { ..._, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(w, _);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function gw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = Ba(e),
    u = s || i ? [...(c ? is(c) : []), ...is(t)] : [];
  u.forEach((b) => {
    s && b.addEventListener("scroll", n, { passive: !0 }),
      i && b.addEventListener("resize", n);
  });
  const d = c && a ? mw(c, n) : null;
  let f = -1,
    g = null;
  o &&
    ((g = new ResizeObserver((b) => {
      let [x] = b;
      x &&
        x.target === c &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var _;
          (_ = g) == null || _.observe(t);
        }))),
        n();
    })),
    c && !l && g.observe(c),
    g.observe(t));
  let m,
    h = l ? Mn(e) : null;
  l && y();
  function y() {
    const b = Mn(e);
    h && !th(h, b) && n(), (h = b), (m = requestAnimationFrame(y));
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
        (b = g) == null || b.disconnect(),
        (g = null),
        l && cancelAnimationFrame(m);
    }
  );
}
const yw = Kx,
  vw = Xx,
  bw = Zx,
  xw = Jx,
  ww = Gx,
  Rl = Hx,
  _w = Yx,
  Sw = (e, t, n) => {
    const r = new Map(),
      s = { platform: pw, ...n },
      i = { ...s.platform, _c: r };
    return Wx(e, t, { ...s, platform: i });
  };
var Ws = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function fi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!fi(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !fi(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function nh(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pl(e, t) {
  const n = nh(e);
  return Math.round(t * n) / n;
}
function ao(e) {
  const t = v.useRef(e);
  return (
    Ws(() => {
      t.current = e;
    }),
    t
  );
}
function Ew(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [u, d] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, g] = v.useState(r);
  fi(f, r) || g(r);
  const [m, h] = v.useState(null),
    [y, b] = v.useState(null),
    x = v.useCallback((W) => {
      W !== R.current && ((R.current = W), h(W));
    }, []),
    _ = v.useCallback((W) => {
      W !== A.current && ((A.current = W), b(W));
    }, []),
    E = i || m,
    w = o || y,
    R = v.useRef(null),
    A = v.useRef(null),
    C = v.useRef(u),
    O = l != null,
    M = ao(l),
    U = ao(s),
    N = ao(c),
    I = v.useCallback(() => {
      if (!R.current || !A.current) return;
      const W = { placement: t, strategy: n, middleware: f };
      U.current && (W.platform = U.current),
        Sw(R.current, A.current, W).then((ne) => {
          const fe = { ...ne, isPositioned: N.current !== !1 };
          z.current &&
            !fi(C.current, fe) &&
            ((C.current = fe),
            md.flushSync(() => {
              d(fe);
            }));
        });
    }, [f, t, n, U, N]);
  Ws(() => {
    c === !1 &&
      C.current.isPositioned &&
      ((C.current.isPositioned = !1), d((W) => ({ ...W, isPositioned: !1 })));
  }, [c]);
  const z = v.useRef(!1);
  Ws(
    () => (
      (z.current = !0),
      () => {
        z.current = !1;
      }
    ),
    []
  ),
    Ws(() => {
      if ((E && (R.current = E), w && (A.current = w), E && w)) {
        if (M.current) return M.current(E, w, I);
        I();
      }
    }, [E, w, I, M, O]);
  const J = v.useMemo(
      () => ({ reference: R, floating: A, setReference: x, setFloating: _ }),
      [x, _]
    ),
    q = v.useMemo(() => ({ reference: E, floating: w }), [E, w]),
    H = v.useMemo(() => {
      const W = { position: n, left: 0, top: 0 };
      if (!q.floating) return W;
      const ne = Pl(q.floating, u.x),
        fe = Pl(q.floating, u.y);
      return a
        ? {
            ...W,
            transform: "translate(" + ne + "px, " + fe + "px)",
            ...(nh(q.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: ne, top: fe };
    }, [n, a, q.floating, u.x, u.y]);
  return v.useMemo(
    () => ({ ...u, update: I, refs: J, elements: q, floatingStyles: H }),
    [u, I, J, q, H]
  );
}
const Tw = (e) => {
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
            ? Rl({ element: r.current, padding: s }).fn(n)
            : {}
          : r
          ? Rl({ element: r, padding: s }).fn(n)
          : {};
      },
    };
  },
  Aw = (e, t) => ({ ...yw(e), options: [e, t] }),
  Cw = (e, t) => ({ ...vw(e), options: [e, t] }),
  Rw = (e, t) => ({ ..._w(e), options: [e, t] }),
  Pw = (e, t) => ({ ...bw(e), options: [e, t] }),
  kw = (e, t) => ({ ...xw(e), options: [e, t] }),
  Nw = (e, t) => ({ ...ww(e), options: [e, t] }),
  jw = (e, t) => ({ ...Tw(e), options: [e, t] });
var Ow = "Arrow",
  rh = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return p.jsx(Ae.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
rh.displayName = Ow;
var Dw = rh;
function sh(e) {
  const [t, n] = v.useState(void 0);
  return (
    kn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (o = c.inlineSize), (a = c.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          n({ width: o, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var $a = "Popper",
  [ih, oh] = Vn($a),
  [Mw, ah] = ih($a),
  ch = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, s] = v.useState(null);
    return p.jsx(Mw, { scope: t, anchor: r, onAnchorChange: s, children: n });
  };
ch.displayName = $a;
var lh = "PopperAnchor",
  uh = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = ah(lh, n),
      o = v.useRef(null),
      a = Ve(t, o);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : p.jsx(Ae.div, { ...s, ref: a })
    );
  });
uh.displayName = lh;
var za = "PopperContent",
  [Fw, Lw] = ih(za),
  dh = v.forwardRef((e, t) => {
    var ce, pe, Ce, Oe, ge, Z;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: u = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: m,
        ...h
      } = e,
      y = ah(za, n),
      [b, x] = v.useState(null),
      _ = Ve(t, (ue) => x(ue)),
      [E, w] = v.useState(null),
      R = sh(E),
      A = (R == null ? void 0 : R.width) ?? 0,
      C = (R == null ? void 0 : R.height) ?? 0,
      O = r + (i !== "center" ? "-" + i : ""),
      M =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      U = Array.isArray(c) ? c : [c],
      N = U.length > 0,
      I = { padding: M, boundary: U.filter(Vw), altBoundary: N },
      {
        refs: z,
        floatingStyles: J,
        placement: q,
        isPositioned: H,
        middlewareData: W,
      } = Ew({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...ue) =>
          gw(...ue, { animationFrame: g === "always" }),
        elements: { reference: y.anchor },
        middleware: [
          Aw({ mainAxis: s + C, alignmentAxis: o }),
          l &&
            Cw({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? Rw() : void 0,
              ...I,
            }),
          l && Pw({ ...I }),
          kw({
            ...I,
            apply: ({
              elements: ue,
              rects: ye,
              availableWidth: Ie,
              availableHeight: rt,
            }) => {
              const { width: dt, height: S } = ye.reference,
                T = ue.floating.style;
              T.setProperty("--radix-popper-available-width", `${Ie}px`),
                T.setProperty("--radix-popper-available-height", `${rt}px`),
                T.setProperty("--radix-popper-anchor-width", `${dt}px`),
                T.setProperty("--radix-popper-anchor-height", `${S}px`);
            },
          }),
          E && jw({ element: E, padding: a }),
          Bw({ arrowWidth: A, arrowHeight: C }),
          f && Nw({ strategy: "referenceHidden", ...I }),
        ],
      }),
      [ne, fe] = ph(q),
      he = _t(m);
    kn(() => {
      H && (he == null || he());
    }, [H, he]);
    const ze = (ce = W.arrow) == null ? void 0 : ce.x,
      nt = (pe = W.arrow) == null ? void 0 : pe.y,
      We = ((Ce = W.arrow) == null ? void 0 : Ce.centerOffset) !== 0,
      [mt, Xe] = v.useState();
    return (
      kn(() => {
        b && Xe(window.getComputedStyle(b).zIndex);
      }, [b]),
      p.jsx("div", {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: H ? J.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: mt,
          "--radix-popper-transform-origin": [
            (Oe = W.transformOrigin) == null ? void 0 : Oe.x,
            (ge = W.transformOrigin) == null ? void 0 : ge.y,
          ].join(" "),
          ...(((Z = W.hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(Fw, {
          scope: n,
          placedSide: ne,
          onArrowChange: w,
          arrowX: ze,
          arrowY: nt,
          shouldHideArrow: We,
          children: p.jsx(Ae.div, {
            "data-side": ne,
            "data-align": fe,
            ...h,
            ref: _,
            style: { ...h.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
dh.displayName = za;
var fh = "PopperArrow",
  Iw = { top: "bottom", right: "left", bottom: "top", left: "right" },
  hh = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = Lw(fh, r),
      o = Iw[i.placedSide];
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
      children: p.jsx(Dw, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
hh.displayName = fh;
function Vw(e) {
  return e !== null;
}
var Bw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, b, x;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((y = s.arrow) == null ? void 0 : y.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [c, u] = ph(n),
      d = { start: "0%", center: "50%", end: "100%" }[u],
      f = (((b = s.arrow) == null ? void 0 : b.x) ?? 0) + a / 2,
      g = (((x = s.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let m = "",
      h = "";
    return (
      c === "bottom"
        ? ((m = o ? d : `${f}px`), (h = `${-l}px`))
        : c === "top"
        ? ((m = o ? d : `${f}px`), (h = `${r.floating.height + l}px`))
        : c === "right"
        ? ((m = `${-l}px`), (h = o ? d : `${g}px`))
        : c === "left" &&
          ((m = `${r.floating.width + l}px`), (h = o ? d : `${g}px`)),
      { data: { x: m, y: h } }
    );
  },
});
function ph(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Uw = ch,
  mh = uh,
  $w = dh,
  zw = hh,
  Wa = "Popover",
  [gh, DR] = Vn(Wa, [oh]),
  vs = oh(),
  [Ww, gn] = gh(Wa),
  yh = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !1,
      } = e,
      a = vs(t),
      l = v.useRef(null),
      [c, u] = v.useState(!1),
      [d = !1, f] = Ei({ prop: r, defaultProp: s, onChange: i });
    return p.jsx(Uw, {
      ...a,
      children: p.jsx(Ww, {
        scope: t,
        contentId: Dr(),
        triggerRef: l,
        open: d,
        onOpenChange: f,
        onOpenToggle: v.useCallback(() => f((g) => !g), [f]),
        hasCustomAnchor: c,
        onCustomAnchorAdd: v.useCallback(() => u(!0), []),
        onCustomAnchorRemove: v.useCallback(() => u(!1), []),
        modal: o,
        children: n,
      }),
    });
  };
yh.displayName = Wa;
var vh = "PopoverAnchor",
  Hw = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = gn(vh, n),
      i = vs(n),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: a } = s;
    return (
      v.useEffect(() => (o(), () => a()), [o, a]),
      p.jsx(mh, { ...i, ...r, ref: t })
    );
  });
Hw.displayName = vh;
var bh = "PopoverTrigger",
  xh = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = gn(bh, n),
      i = vs(n),
      o = Ve(t, s.triggerRef),
      a = p.jsx(Ae.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Th(s.open),
        ...r,
        ref: o,
        onClick: xe(e.onClick, s.onOpenToggle),
      });
    return s.hasCustomAnchor
      ? a
      : p.jsx(mh, { asChild: !0, ...i, children: a });
  });
xh.displayName = bh;
var Ha = "PopoverPortal",
  [Zw, Gw] = gh(Ha, { forceMount: void 0 }),
  wh = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: s } = e,
      i = gn(Ha, t);
    return p.jsx(Zw, {
      scope: t,
      forceMount: n,
      children: p.jsx(Bn, {
        present: n || i.open,
        children: p.jsx(Sa, { asChild: !0, container: s, children: r }),
      }),
    });
  };
wh.displayName = Ha;
var cr = "PopoverContent",
  _h = v.forwardRef((e, t) => {
    const n = Gw(cr, e.__scopePopover),
      { forceMount: r = n.forceMount, ...s } = e,
      i = gn(cr, e.__scopePopover);
    return p.jsx(Bn, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(qw, { ...s, ref: t })
        : p.jsx(Kw, { ...s, ref: t }),
    });
  });
_h.displayName = cr;
var qw = v.forwardRef((e, t) => {
    const n = gn(cr, e.__scopePopover),
      r = v.useRef(null),
      s = Ve(t, r),
      i = v.useRef(!1);
    return (
      v.useEffect(() => {
        const o = r.current;
        if (o) return Ud(o);
      }, []),
      p.jsx(Ea, {
        as: on,
        allowPinchZoom: !0,
        children: p.jsx(Sh, {
          ...e,
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: xe(e.onCloseAutoFocus, (o) => {
            var a;
            o.preventDefault(),
              i.current || (a = n.triggerRef.current) == null || a.focus();
          }),
          onPointerDownOutside: xe(
            e.onPointerDownOutside,
            (o) => {
              const a = o.detail.originalEvent,
                l = a.button === 0 && a.ctrlKey === !0,
                c = a.button === 2 || l;
              i.current = c;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: xe(e.onFocusOutside, (o) => o.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  Kw = v.forwardRef((e, t) => {
    const n = gn(cr, e.__scopePopover),
      r = v.useRef(!1),
      s = v.useRef(!1);
    return p.jsx(Sh, {
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
        var l, c;
        (l = e.onInteractOutside) == null || l.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((c = n.triggerRef.current) == null ? void 0 : c.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  Sh = v.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: o,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: c,
        onInteractOutside: u,
        ...d
      } = e,
      f = gn(cr, n),
      g = vs(n);
    return (
      jd(),
      p.jsx(_a, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: p.jsx(Hf, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: u,
          onEscapeKeyDown: a,
          onPointerDownOutside: l,
          onFocusOutside: c,
          onDismiss: () => f.onOpenChange(!1),
          children: p.jsx($w, {
            "data-state": Th(f.open),
            role: "dialog",
            id: f.contentId,
            ...g,
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
  Eh = "PopoverClose",
  Xw = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = gn(Eh, n);
    return p.jsx(Ae.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: xe(e.onClick, () => s.onOpenChange(!1)),
    });
  });
Xw.displayName = Eh;
var Yw = "PopoverArrow",
  Jw = v.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = vs(n);
    return p.jsx(zw, { ...s, ...r, ref: t });
  });
Jw.displayName = Yw;
function Th(e) {
  return e ? "open" : "closed";
}
var Qw = yh,
  e0 = xh,
  t0 = wh,
  Ah = _h;
const n0 = Qw,
  r0 = e0,
  Ch = v.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, s) =>
      p.jsx(t0, {
        children: p.jsx(Ah, {
          ref: s,
          align: t,
          sideOffset: n,
          className: te(
            "z-50 w-32 bg-white rounded-[2px] p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
          ...r,
        }),
      })
  );
Ch.displayName = Ah.displayName;
const kl = [{ lang: Ge.RU }, { lang: Ge.EN }],
  Nl = ({ className: e }) => {
    const t = Be((i) => i.lang),
      n = Be((i) => i.setLang),
      [r, s] = v.useState(!1);
    return (
      console.log(kl.filter((i) => i.lang === t)),
      p.jsxs(n0, {
        open: r,
        onOpenChange: () => s(!r),
        children: [
          p.jsxs(r0, {
            className: te("flex items-center gap-2", e),
            children: [
              p.jsx("img", {
                src: t === Ge.RU ? "/ru.svg" : "/en.svg",
                alt: "",
              }),
              t === Ge.RU ? "Ру" : "En",
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
          p.jsx(Ch, {
            className: "flex flex-col gap-6",
            children: kl
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
                        src: i.lang === Ge.RU ? "/ru.svg" : "/en.svg",
                        alt: "flag",
                      }),
                      p.jsx("h5", {
                        children: i.lang === Ge.RU ? "Русский" : "English",
                      }),
                    ],
                  },
                  o
                )
              ),
          }),
        ],
      })
    );
  },
  lt = ({ className: e, children: t }) =>
    p.jsx("div", {
      className: te("w-full mx-auto max-w-[1240px] px-4", e),
      children: t,
    }),
  s0 = ({ className: e, nums: t, text: n }) =>
    p.jsxs("article", {
      className: te(
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
  i0 = ({ className: e, subtitle: t, title: n, img: r }) =>
    p.jsxs("div", {
      className: te("flex items-center gap-4", e),
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
  Rh = ({ className: e, name: t, date: n, bottomClassName: r }) =>
    p.jsxs("div", {
      className: te("rounded-t-[4px] overflow-hidden", e),
      children: [
        p.jsx("div", {
          className:
            "bg-teritary_07 flex items-center text-teritary_11 h-11 px-4",
          children: t,
        }),
        p.jsx("div", {
          className: te(
            "h-14 bg-bg_surface_container semibold flex items-center text-lg px-4",
            r
          ),
          children: n,
        }),
      ],
    }),
  o0 = ({ className: e, title: t, text: n, img: r, link: s, btnText: i }) =>
    p.jsxs("article", {
      className: te(
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
            p.jsx(Me, {
              className: "absolute bottom-0 left-0",
              target: "_blank",
              to: s,
              children: p.jsxs($e, {
                className: "text-sm px-0 h-fit py-0 z-20",
                variant: "link",
                children: [i, " ", p.jsx(xa, {})],
              }),
            }),
          ],
        }),
      ],
    }),
  a0 = ({ className: e, slides: t, active: n, scrollTo: r }) =>
    p.jsx("div", {
      className: te("flex items-center justify-center gap-2", e),
      children: Array.from({ length: t }).map((s, i) =>
        p.jsx(
          "span",
          {
            onClick: () => r(i),
            className: te(n === i ? "dot-active" : "dot"),
          },
          i
        )
      ),
    }),
  Za = v.createContext({});
function Ga(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ni = v.createContext(null),
  qa = v.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class c0 extends v.Component {
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
function l0({ children: e, isPresent: t }) {
  const n = v.useId(),
    r = v.useRef(null),
    s = v.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = v.useContext(qa);
  return (
    v.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: c } = s.current;
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
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    p.jsx(c0, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: v.cloneElement(e, { ref: r }),
    })
  );
}
const u0 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const a = Ga(d0),
    l = v.useId(),
    c = v.useCallback(
      (d) => {
        a.set(d, !0);
        for (const f of a.values()) if (!f) return;
        r && r();
      },
      [a, r]
    ),
    u = v.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: c,
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      i ? [Math.random(), c] : [n, c]
    );
  return (
    v.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    v.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = p.jsx(l0, { isPresent: n, children: e })),
    p.jsx(Ni.Provider, { value: u, children: e })
  );
};
function d0() {
  return new Map();
}
function Ph(e = !0) {
  const t = v.useContext(Ni);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = v.useId();
  v.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = v.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Ms = (e) => e.key || "";
function jl(e) {
  const t = [];
  return (
    v.Children.forEach(e, (n) => {
      v.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ka = typeof window < "u",
  kh = Ka ? v.useLayoutEffect : v.useEffect,
  co = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
  }) => {
    const [a, l] = Ph(o),
      c = v.useMemo(() => jl(e), [e]),
      u = o && !a ? [] : c.map(Ms),
      d = v.useRef(!0),
      f = v.useRef(c),
      g = Ga(() => new Map()),
      [m, h] = v.useState(c),
      [y, b] = v.useState(c);
    kh(() => {
      (d.current = !1), (f.current = c);
      for (let E = 0; E < y.length; E++) {
        const w = Ms(y[E]);
        u.includes(w) ? g.delete(w) : g.get(w) !== !0 && g.set(w, !1);
      }
    }, [y, u.length, u.join("-")]);
    const x = [];
    if (c !== m) {
      let E = [...c];
      for (let w = 0; w < y.length; w++) {
        const R = y[w],
          A = Ms(R);
        u.includes(A) || (E.splice(w, 0, R), x.push(R));
      }
      i === "wait" && x.length && (E = x), b(jl(E)), h(c);
      return;
    }
    const { forceRender: _ } = v.useContext(Za);
    return p.jsx(p.Fragment, {
      children: y.map((E) => {
        const w = Ms(E),
          R = o && !a ? !1 : c === y || u.includes(w),
          A = () => {
            if (g.has(w)) g.set(w, !0);
            else return;
            let C = !0;
            g.forEach((O) => {
              O || (C = !1);
            }),
              C &&
                (_ == null || _(),
                b(f.current),
                o && (l == null || l()),
                r && r());
          };
        return p.jsx(
          u0,
          {
            isPresent: R,
            initial: !d.current || n ? void 0 : !1,
            custom: R ? void 0 : t,
            presenceAffectsLayout: s,
            mode: i,
            onExitComplete: R ? void 0 : A,
            children: E,
          },
          w
        );
      }),
    });
  },
  at = (e) => e;
let zo = at;
const f0 = { skipAnimations: !1, useManualTiming: !1 };
function h0(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(o);
  }
  const l = {
    schedule: (c, u = !1, d = !1) => {
      const g = d && r ? t : n;
      return u && i.add(c), g.has(c) || g.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), i.delete(c);
    },
    process: (c) => {
      if (((o = c), r)) {
        s = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        s && ((s = !1), l.process(c));
    },
  };
  return l;
}
const Fs = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  p0 = 40;
function Nh(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Fs.reduce((b, x) => ((b[x] = h0(i)), b), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    g = () => {
      const b = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(b - s.timestamp, p0), 1)),
        (s.timestamp = b),
        (s.isProcessing = !0),
        a.process(s),
        l.process(s),
        c.process(s),
        u.process(s),
        d.process(s),
        f.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    m = () => {
      (n = !0), (r = !0), s.isProcessing || e(g);
    };
  return {
    schedule: Fs.reduce((b, x) => {
      const _ = o[x];
      return (b[x] = (E, w = !1, R = !1) => (n || m(), _.schedule(E, w, R))), b;
    }, {}),
    cancel: (b) => {
      for (let x = 0; x < Fs.length; x++) o[Fs[x]].cancel(b);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: we,
    cancel: pn,
    state: Ue,
    steps: lo,
  } = Nh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : at, !0),
  jh = v.createContext({ strict: !1 }),
  Ol = {
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
  lr = {};
for (const e in Ol) lr[e] = { isEnabled: (t) => Ol[e].some((n) => !!t[n]) };
function m0(e) {
  for (const t in e) lr[t] = { ...lr[t], ...e[t] };
}
const g0 = new Set([
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
function hi(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    g0.has(e)
  );
}
let Oh = (e) => !hi(e);
function y0(e) {
  e && (Oh = (t) => (t.startsWith("on") ? !hi(t) : e(t)));
}
try {
  y0(require("@emotion/is-prop-valid").default);
} catch {}
function v0(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Oh(s) ||
        (n === !0 && hi(s)) ||
        (!t && !hi(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function b0(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const ji = v.createContext({});
function os(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Oi(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Xa = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ya = ["initial", ...Xa];
function Di(e) {
  return Oi(e.animate) || Ya.some((t) => os(e[t]));
}
function Dh(e) {
  return !!(Di(e) || e.variants);
}
function x0(e, t) {
  if (Di(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || os(n) ? n : void 0,
      animate: os(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function w0(e) {
  const { initial: t, animate: n } = x0(e, v.useContext(ji));
  return v.useMemo(() => ({ initial: t, animate: n }), [Dl(t), Dl(n)]);
}
function Dl(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const _0 = Symbol.for("motionComponentSymbol");
function Kn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function S0(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Kn(n) && (n.current = r));
    },
    [t]
  );
}
const Ja = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  E0 = "framerAppearId",
  Mh = "data-" + Ja(E0),
  { schedule: Qa, cancel: MR } = Nh(queueMicrotask, !1),
  Fh = v.createContext({});
function T0(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = v.useContext(ji),
    l = v.useContext(jh),
    c = v.useContext(Ni),
    u = v.useContext(qa).reducedMotion,
    d = v.useRef(null);
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const f = d.current,
    g = v.useContext(Fh);
  f &&
    !f.projection &&
    s &&
    (f.type === "html" || f.type === "svg") &&
    A0(d.current, n, s, g);
  const m = v.useRef(!1);
  v.useInsertionEffect(() => {
    f && m.current && f.update(n, c);
  });
  const h = n[Mh],
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
    kh(() => {
      f &&
        ((m.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Qa.render(f.render),
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
function A0(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Lh(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && Kn(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function Lh(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Lh(e.parent);
}
function C0({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && m0(e);
  function a(c, u) {
    let d;
    const f = { ...v.useContext(qa), ...c, layoutId: R0(c) },
      { isStatic: g } = f,
      m = w0(c),
      h = r(c, g);
    if (!g && Ka) {
      P0();
      const y = k0(f);
      (d = y.MeasureLayout),
        (m.visualElement = T0(s, h, f, t, y.ProjectionNode));
    }
    return p.jsxs(ji.Provider, {
      value: m,
      children: [
        d && m.visualElement
          ? p.jsx(d, { visualElement: m.visualElement, ...f })
          : null,
        n(s, c, S0(h, m.visualElement, u), h, g, m.visualElement),
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
  const l = v.forwardRef(a);
  return (l[_0] = s), l;
}
function R0({ layoutId: e }) {
  const t = v.useContext(Za).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function P0(e, t) {
  v.useContext(jh).strict;
}
function k0(e) {
  const { drag: t, layout: n } = lr;
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
const N0 = [
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
function ec(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(N0.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Ml(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function tc(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Ml(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Ml(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const Wo = (e) => Array.isArray(e),
  j0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  O0 = (e) => (Wo(e) ? e[e.length - 1] || 0 : e),
  qe = (e) => !!(e && e.getVelocity);
function Hs(e) {
  const t = qe(e) ? e.get() : e;
  return j0(t) ? t.toValue() : t;
}
function D0(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i
) {
  const o = { latestValues: M0(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const Ih = (e) => (t, n) => {
  const r = v.useContext(ji),
    s = v.useContext(Ni),
    i = () => D0(e, t, r, s);
  return n ? i() : Ga(i);
};
function M0(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = Hs(i[f]);
  let { initial: o, animate: a } = e;
  const l = Di(e),
    c = Dh(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const d = u ? a : o;
  if (d && typeof d != "boolean" && !Oi(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let g = 0; g < f.length; g++) {
      const m = tc(e, f[g]);
      if (m) {
        const { transitionEnd: h, transition: y, ...b } = m;
        for (const x in b) {
          let _ = b[x];
          if (Array.isArray(_)) {
            const E = u ? _.length - 1 : 0;
            _ = _[E];
          }
          _ !== null && (s[x] = _);
        }
        for (const x in h) s[x] = h[x];
      }
    }
  }
  return s;
}
const mr = [
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
  $n = new Set(mr),
  Vh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Bh = Vh("--"),
  F0 = Vh("var(--"),
  nc = (e) => (F0(e) ? L0.test(e.split("/*")[0].trim()) : !1),
  L0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Uh = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Jt = (e, t, n) => (n > t ? t : n < e ? e : n),
  gr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  as = { ...gr, transform: (e) => Jt(0, 1, e) },
  Ls = { ...gr, default: 1 },
  bs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  rn = bs("deg"),
  Ft = bs("%"),
  Y = bs("px"),
  I0 = bs("vh"),
  V0 = bs("vw"),
  Fl = {
    ...Ft,
    parse: (e) => Ft.parse(e) / 100,
    transform: (e) => Ft.transform(e * 100),
  },
  B0 = {
    borderWidth: Y,
    borderTopWidth: Y,
    borderRightWidth: Y,
    borderBottomWidth: Y,
    borderLeftWidth: Y,
    borderRadius: Y,
    radius: Y,
    borderTopLeftRadius: Y,
    borderTopRightRadius: Y,
    borderBottomRightRadius: Y,
    borderBottomLeftRadius: Y,
    width: Y,
    maxWidth: Y,
    height: Y,
    maxHeight: Y,
    top: Y,
    right: Y,
    bottom: Y,
    left: Y,
    padding: Y,
    paddingTop: Y,
    paddingRight: Y,
    paddingBottom: Y,
    paddingLeft: Y,
    margin: Y,
    marginTop: Y,
    marginRight: Y,
    marginBottom: Y,
    marginLeft: Y,
    backgroundPositionX: Y,
    backgroundPositionY: Y,
  },
  U0 = {
    rotate: rn,
    rotateX: rn,
    rotateY: rn,
    rotateZ: rn,
    scale: Ls,
    scaleX: Ls,
    scaleY: Ls,
    scaleZ: Ls,
    skew: rn,
    skewX: rn,
    skewY: rn,
    distance: Y,
    translateX: Y,
    translateY: Y,
    translateZ: Y,
    x: Y,
    y: Y,
    z: Y,
    perspective: Y,
    transformPerspective: Y,
    opacity: as,
    originX: Fl,
    originY: Fl,
    originZ: Y,
  },
  Ll = { ...gr, transform: Math.round },
  rc = {
    ...B0,
    ...U0,
    zIndex: Ll,
    size: Y,
    fillOpacity: as,
    strokeOpacity: as,
    numOctaves: Ll,
  },
  $0 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  z0 = mr.length;
function W0(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < z0; i++) {
    const o = mr[i],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = Uh(a, rc[o]);
      if (!l) {
        s = !1;
        const u = $0[o] || o;
        r += `${u}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r;
}
function sc(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if ($n.has(l)) {
      o = !0;
      continue;
    } else if (Bh(l)) {
      s[l] = c;
      continue;
    } else {
      const u = Uh(c, rc[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = u)) : (r[l] = u);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = W0(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const H0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Z0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function G0(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? H0 : Z0;
  e[i.offset] = Y.transform(-r);
  const o = Y.transform(t),
    a = Y.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Il(e, t, n) {
  return typeof e == "string" ? e : Y.transform(t + n * e);
}
function q0(e, t, n) {
  const r = Il(t, e.x, e.width),
    s = Il(n, e.y, e.height);
  return `${r} ${s}`;
}
function ic(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  d
) {
  if ((sc(e, c, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: g, dimensions: m } = e;
  f.transform && (m && (g.transform = f.transform), delete f.transform),
    m &&
      (s !== void 0 || i !== void 0 || g.transform) &&
      (g.transformOrigin = q0(
        m,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && G0(f, o, a, l, !1);
}
const oc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  $h = () => ({ ...oc(), attrs: {} }),
  ac = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function zh(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Wh = new Set([
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
function Hh(e, t, n, r) {
  zh(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(Wh.has(s) ? s : Ja(s), t.attrs[s]);
}
const pi = {};
function K0(e) {
  Object.assign(pi, e);
}
function Zh(e, { layout: t, layoutId: n }) {
  return (
    $n.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!pi[e] || e === "opacity"))
  );
}
function cc(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (qe(s[o]) ||
      (t.style && qe(t.style[o])) ||
      Zh(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function Gh(e, t, n) {
  const r = cc(e, t, n);
  for (const s in e)
    if (qe(e[s]) || qe(t[s])) {
      const i =
        mr.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function X0(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Vl = ["x", "y", "width", "height", "cx", "cy", "r"],
  Y0 = {
    useVisualState: Ih({
      scrapeMotionValuesFromProps: Gh,
      createRenderState: $h,
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
            if ($n.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Vl.length; a++) {
            const l = Vl[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          we.read(() => {
            X0(n, r),
              we.render(() => {
                ic(r, s, ac(n.tagName), e.transformTemplate), Hh(n, r);
              });
          });
      },
    }),
  },
  J0 = {
    useVisualState: Ih({
      scrapeMotionValuesFromProps: cc,
      createRenderState: oc,
    }),
  };
function qh(e, t, n) {
  for (const r in t) !qe(t[r]) && !Zh(r, n) && (e[r] = t[r]);
}
function Q0({ transformTemplate: e }, t) {
  return v.useMemo(() => {
    const n = oc();
    return sc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function e_(e, t) {
  const n = e.style || {},
    r = {};
  return qh(r, n, e), Object.assign(r, Q0(e, t)), r;
}
function t_(e, t) {
  const n = {},
    r = e_(e, t);
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
function n_(e, t, n, r) {
  const s = v.useMemo(() => {
    const i = $h();
    return (
      ic(i, t, ac(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    qh(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function r_(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (ec(n) ? n_ : t_)(r, i, o, n),
      c = v0(r, typeof n == "string", e),
      u = n !== v.Fragment ? { ...c, ...l, ref: s } : {},
      { children: d } = r,
      f = v.useMemo(() => (qe(d) ? d.get() : d), [d]);
    return v.createElement(n, { ...u, children: f });
  };
}
function s_(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(ec(r) ? Y0 : J0),
      preloadedFeatures: e,
      useRender: r_(s),
      createVisualElement: t,
      Component: r,
    };
    return C0(o);
  };
}
function Kh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Mi(e, t, n) {
  const r = e.getProps();
  return tc(r, t, n !== void 0 ? n : r.custom, e);
}
function lc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Xh = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...mr,
]);
let Zs;
function i_() {
  Zs = void 0;
}
const Lt = {
  now: () => (
    Zs === void 0 &&
      Lt.set(
        Ue.isProcessing || f0.useManualTiming ? Ue.timestamp : performance.now()
      ),
    Zs
  ),
  set: (e) => {
    (Zs = e), queueMicrotask(i_);
  },
};
function uc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function dc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class fc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return uc(this.subscriptions, t), () => dc(this.subscriptions, t);
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
function Yh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Bl = 30,
  o_ = (e) => !isNaN(parseFloat(e));
class a_ {
  constructor(t, n = {}) {
    (this.version = "12.0.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = Lt.now();
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
      (this.updatedAt = Lt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = o_(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new fc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            we.read(() => {
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
    const t = Lt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Bl
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bl);
    return Yh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function cs(e, t) {
  return new a_(e, t);
}
function c_(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, cs(n));
}
function l_(e, t) {
  const n = Mi(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = O0(i[o]);
    c_(e, o, a);
  }
}
function u_(e) {
  return !!(qe(e) && e.add);
}
function Ho(e, t) {
  const n = e.getValue("willChange");
  if (u_(n)) return n.add(t);
}
function Jh(e) {
  return e.props[Mh];
}
function hc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const d_ = hc(() => window.ScrollTimeline !== void 0);
class f_ {
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
      if (d_() && s.attachTimeline) return s.attachTimeline(t);
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
class h_ extends f_ {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const Gt = (e) => e * 1e3,
  qt = (e) => e / 1e3;
function pc(e) {
  return typeof e == "function";
}
function Ul(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const mc = (e) => Array.isArray(e) && typeof e[0] == "number",
  p_ = { linearEasing: void 0 };
function m_(e, t) {
  const n = hc(e);
  return () => {
    var r;
    return (r = p_[t]) !== null && r !== void 0 ? r : n();
  };
}
const mi = m_(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ur = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Qh = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(ur(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function ep(e) {
  return !!(
    (typeof e == "function" && mi()) ||
    !e ||
    (typeof e == "string" && (e in Zo || mi())) ||
    mc(e) ||
    (Array.isArray(e) && e.every(ep))
  );
}
const kr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Zo = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: kr([0, 0.65, 0.55, 1]),
    circOut: kr([0.55, 0, 1, 0.45]),
    backIn: kr([0.31, 0.01, 0.66, -0.59]),
    backOut: kr([0.33, 1.53, 0.69, 0.99]),
  };
function tp(e, t) {
  if (e)
    return typeof e == "function" && mi()
      ? Qh(e, t)
      : mc(e)
      ? kr(e)
      : Array.isArray(e)
      ? e.map((n) => tp(n, t) || Zo.easeOut)
      : Zo[e];
}
const np = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  g_ = 1e-7,
  y_ = 12;
function v_(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (i = np(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > g_ && ++a < y_);
  return o;
}
function xs(e, t, n, r) {
  if (e === t && n === r) return at;
  const s = (i) => v_(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : np(s(i), t, r));
}
const rp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  sp = (e) => (t) => 1 - e(1 - t),
  ip = xs(0.33, 1.53, 0.69, 0.99),
  gc = sp(ip),
  op = rp(gc),
  ap = (e) =>
    (e *= 2) < 1 ? 0.5 * gc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  yc = (e) => 1 - Math.sin(Math.acos(e)),
  cp = sp(yc),
  lp = rp(yc),
  up = (e) => /^0[^.\s]+$/u.test(e);
function b_(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || up(e)
    : !0;
}
const Lr = (e) => Math.round(e * 1e5) / 1e5,
  vc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function x_(e) {
  return e == null;
}
const w_ =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  bc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && w_.test(n) && n.startsWith(e)) ||
      (t && !x_(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  dp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(vc);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  __ = (e) => Jt(0, 255, e),
  uo = { ...gr, transform: (e) => Math.round(__(e)) },
  En = {
    test: bc("rgb", "red"),
    parse: dp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      uo.transform(e) +
      ", " +
      uo.transform(t) +
      ", " +
      uo.transform(n) +
      ", " +
      Lr(as.transform(r)) +
      ")",
  };
function S_(e) {
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
const Go = { test: bc("#"), parse: S_, transform: En.transform },
  Xn = {
    test: bc("hsl", "hue"),
    parse: dp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ft.transform(Lr(t)) +
      ", " +
      Ft.transform(Lr(n)) +
      ", " +
      Lr(as.transform(r)) +
      ")",
  },
  He = {
    test: (e) => En.test(e) || Go.test(e) || Xn.test(e),
    parse: (e) =>
      En.test(e) ? En.parse(e) : Xn.test(e) ? Xn.parse(e) : Go.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? En.transform(e)
        : Xn.transform(e),
  },
  E_ =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function T_(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(vc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(E_)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const fp = "number",
  hp = "color",
  A_ = "var",
  C_ = "var(",
  $l = "${}",
  R_ =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ls(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      R_,
      (l) => (
        He.test(l)
          ? (r.color.push(i), s.push(hp), n.push(He.parse(l)))
          : l.startsWith(C_)
          ? (r.var.push(i), s.push(A_), n.push(l))
          : (r.number.push(i), s.push(fp), n.push(parseFloat(l))),
        ++i,
        $l
      )
    )
    .split($l);
  return { values: n, split: a, indexes: r, types: s };
}
function pp(e) {
  return ls(e).values;
}
function mp(e) {
  const { split: t, types: n } = ls(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === fp
          ? (i += Lr(s[o]))
          : a === hp
          ? (i += He.transform(s[o]))
          : (i += s[o]);
      }
    return i;
  };
}
const P_ = (e) => (typeof e == "number" ? 0 : e);
function k_(e) {
  const t = pp(e);
  return mp(e)(t.map(P_));
}
const mn = {
    test: T_,
    parse: pp,
    createTransformer: mp,
    getAnimatableNone: k_,
  },
  N_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
function j_(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(vc) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = N_.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const O_ = /\b([a-z-]*)\(.*?\)/gu,
  qo = {
    ...mn,
    getAnimatableNone: (e) => {
      const t = e.match(O_);
      return t ? t.map(j_).join(" ") : e;
    },
  },
  D_ = {
    ...rc,
    color: He,
    backgroundColor: He,
    outlineColor: He,
    fill: He,
    stroke: He,
    borderColor: He,
    borderTopColor: He,
    borderRightColor: He,
    borderBottomColor: He,
    borderLeftColor: He,
    filter: qo,
    WebkitFilter: qo,
  },
  xc = (e) => D_[e];
function gp(e, t) {
  let n = xc(e);
  return (
    n !== qo && (n = mn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const M_ = new Set(["auto", "none", "0"]);
function F_(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !M_.has(i) && ls(i).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const i of t) e[i] = gp(n, s);
}
const zl = (e) => e === gr || e === Y,
  Wl = (e, t) => parseFloat(e.split(", ")[t]),
  Hl =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return Wl(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Wl(i[1], e) : 0;
      }
    },
  L_ = new Set(["x", "y", "z"]),
  I_ = mr.filter((e) => !L_.has(e));
function V_(e) {
  const t = [];
  return (
    I_.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const dr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Hl(4, 13),
  y: Hl(5, 14),
};
dr.translateX = dr.x;
dr.translateY = dr.y;
const Cn = new Set();
let Ko = !1,
  Xo = !1;
function yp() {
  if (Xo) {
    const e = Array.from(Cn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = V_(r);
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
  (Xo = !1), (Ko = !1), Cn.forEach((e) => e.complete()), Cn.clear();
}
function vp() {
  Cn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Xo = !0);
  });
}
function B_() {
  vp(), yp();
}
class wc {
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
        ? (Cn.add(this),
          Ko || ((Ko = !0), we.read(vp), we.resolveKeyframes(yp)))
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
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
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
      Cn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Cn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const bp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  U_ = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function $_(e) {
  const t = U_.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function xp(e, t, n = 1) {
  const [r, s] = $_(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return bp(o) ? parseFloat(o) : o;
  }
  return nc(s) ? xp(s, t, n + 1) : s;
}
const wp = (e) => (t) => t.test(e),
  z_ = { test: (e) => e === "auto", parse: (e) => e },
  _p = [gr, Y, Ft, rn, V0, I0, z_],
  Zl = (e) => _p.find(wp(e));
class Sp extends wc {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), nc(c))) {
        const u = xp(c, n.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Xh.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Zl(s),
      a = Zl(i);
    if (o !== a)
      if (zl(o) && zl(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) b_(t[s]) && r.push(s);
    r.length && F_(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = dr[r](
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
    (s[o] = dr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
const Gl = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (mn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function W_(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function H_(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Gl(s, t),
    a = Gl(i, t);
  return !o || !a ? !1 : W_(e) || ((n === "spring" || pc(n)) && r);
}
const Z_ = (e) => e !== null;
function Fi(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(Z_),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const G_ = 40;
class Ep {
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
      (this.createdAt = Lt.now()),
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
      ? this.resolvedAt - this.createdAt > G_
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && B_(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Lt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !H_(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        l && l(Fi(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const Yo = 2e4;
function Tp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Yo; ) (t += n), (r = e.next(t));
  return t >= Yo ? 1 / 0 : t;
}
const Se = (e, t, n) => e + (t - e) * n;
function fo(e, t, n) {
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
function q_({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (s = fo(l, a, e + 1 / 3)), (i = fo(l, a, e)), (o = fo(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function gi(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ho = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  K_ = [Go, En, Xn],
  X_ = (e) => K_.find((t) => t.test(e));
function ql(e) {
  const t = X_(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Xn && (n = q_(n)), n;
}
const Kl = (e, t) => {
    const n = ql(e),
      r = ql(t);
    if (!n || !r) return gi(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = ho(n.red, r.red, i)),
      (s.green = ho(n.green, r.green, i)),
      (s.blue = ho(n.blue, r.blue, i)),
      (s.alpha = Se(n.alpha, r.alpha, i)),
      En.transform(s)
    );
  },
  Y_ = (e, t) => (n) => t(e(n)),
  ws = (...e) => e.reduce(Y_),
  Jo = new Set(["none", "hidden"]);
function J_(e, t) {
  return Jo.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Q_(e, t) {
  return (n) => Se(e, t, n);
}
function _c(e) {
  return typeof e == "number"
    ? Q_
    : typeof e == "string"
    ? nc(e)
      ? gi
      : He.test(e)
      ? Kl
      : nS
    : Array.isArray(e)
    ? Ap
    : typeof e == "object"
    ? He.test(e)
      ? Kl
      : eS
    : gi;
}
function Ap(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => _c(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function eS(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = _c(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function tS(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), s[o]++;
  }
  return r;
}
const nS = (e, t) => {
  const n = mn.createTransformer(t),
    r = ls(e),
    s = ls(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (Jo.has(e) && !s.values.length) || (Jo.has(t) && !r.values.length)
      ? J_(e, t)
      : ws(Ap(tS(r, s), s.values), n)
    : gi(e, t);
};
function Cp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Se(e, t, n)
    : _c(e)(e, t);
}
const rS = 5;
function Rp(e, t, n) {
  const r = Math.max(t - rS, 0);
  return Yh(n - e(r), t - r);
}
const Te = {
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
  Xl = 0.001;
function sS({
  duration: e = Te.duration,
  bounce: t = Te.bounce,
  velocity: n = Te.velocity,
  mass: r = Te.mass,
}) {
  let s,
    i,
    o = 1 - t;
  (o = Jt(Te.minDamping, Te.maxDamping, o)),
    (e = Jt(Te.minDuration, Te.maxDuration, qt(e))),
    o < 1
      ? ((s = (c) => {
          const u = c * o,
            d = u * e,
            f = u - n,
            g = Qo(c, o),
            m = Math.exp(-d);
          return Xl - (f / g) * m;
        }),
        (i = (c) => {
          const d = c * o * e,
            f = d * n + n,
            g = Math.pow(o, 2) * Math.pow(c, 2) * e,
            m = Math.exp(-d),
            h = Qo(Math.pow(c, 2), o);
          return ((-s(c) + Xl > 0 ? -1 : 1) * ((f - g) * m)) / h;
        }))
      : ((s = (c) => {
          const u = Math.exp(-c * e),
            d = (c - n) * e + 1;
          return -0.001 + u * d;
        }),
        (i = (c) => {
          const u = Math.exp(-c * e),
            d = (n - c) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    l = oS(s, i, a);
  if (((e = Gt(e)), isNaN(l)))
    return { stiffness: Te.stiffness, damping: Te.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const iS = 12;
function oS(e, t, n) {
  let r = n;
  for (let s = 1; s < iS; s++) r = r - e(r) / t(r);
  return r;
}
function Qo(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const aS = ["duration", "bounce"],
  cS = ["stiffness", "damping", "mass"];
function Yl(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function lS(e) {
  let t = {
    velocity: Te.velocity,
    stiffness: Te.stiffness,
    damping: Te.damping,
    mass: Te.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Yl(e, cS) && Yl(e, aS))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * Jt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: Te.mass, stiffness: s, damping: i };
    } else {
      const n = sS(e);
      (t = { ...t, ...n, mass: Te.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Pp(e = Te.visualDuration, t = Te.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: g,
    } = lS({ ...n, velocity: -qt(n.velocity || 0) }),
    m = f || 0,
    h = c / (2 * Math.sqrt(l * u)),
    y = o - i,
    b = qt(Math.sqrt(l / u)),
    x = Math.abs(y) < 5;
  r || (r = x ? Te.restSpeed.granular : Te.restSpeed.default),
    s || (s = x ? Te.restDelta.granular : Te.restDelta.default);
  let _;
  if (h < 1) {
    const w = Qo(b, h);
    _ = (R) => {
      const A = Math.exp(-h * b * R);
      return (
        o - A * (((m + h * b * y) / w) * Math.sin(w * R) + y * Math.cos(w * R))
      );
    };
  } else if (h === 1) _ = (w) => o - Math.exp(-b * w) * (y + (m + b * y) * w);
  else {
    const w = b * Math.sqrt(h * h - 1);
    _ = (R) => {
      const A = Math.exp(-h * b * R),
        C = Math.min(w * R, 300);
      return (
        o - (A * ((m + h * b * y) * Math.sinh(C) + w * y * Math.cosh(C))) / w
      );
    };
  }
  const E = {
    calculatedDuration: (g && d) || null,
    next: (w) => {
      const R = _(w);
      if (g) a.done = w >= d;
      else {
        let A = 0;
        h < 1 && (A = w === 0 ? Gt(m) : Rp(_, w, R));
        const C = Math.abs(A) <= r,
          O = Math.abs(o - R) <= s;
        a.done = C && O;
      }
      return (a.value = a.done ? o : R), a;
    },
    toString: () => {
      const w = Math.min(Tp(E), Yo),
        R = Qh((A) => E.next(w * A).value, w, 30);
      return w + "ms " + R;
    },
  };
  return E;
}
function Jl({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    g = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
    m = (C) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - C) < Math.abs(l - C)
        ? a
        : l;
  let h = n * t;
  const y = d + h,
    b = o === void 0 ? y : o(y);
  b !== y && (h = b - d);
  const x = (C) => -h * Math.exp(-C / r),
    _ = (C) => b + x(C),
    E = (C) => {
      const O = x(C),
        M = _(C);
      (f.done = Math.abs(O) <= c), (f.value = f.done ? b : M);
    };
  let w, R;
  const A = (C) => {
    g(f.value) &&
      ((w = C),
      (R = Pp({
        keyframes: [f.value, m(f.value)],
        velocity: Rp(_, C, f.value),
        damping: s,
        stiffness: i,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let O = !1;
        return (
          !R && w === void 0 && ((O = !0), E(C), A(C)),
          w !== void 0 && C >= w ? R.next(C - w) : (!O && E(C), f)
        );
      },
    }
  );
}
const uS = xs(0.42, 0, 1, 1),
  dS = xs(0, 0, 0.58, 1),
  kp = xs(0.42, 0, 0.58, 1),
  fS = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ql = {
    linear: at,
    easeIn: uS,
    easeInOut: kp,
    easeOut: dS,
    circIn: yc,
    circInOut: lp,
    circOut: cp,
    backIn: gc,
    backInOut: op,
    backOut: ip,
    anticipate: ap,
  },
  eu = (e) => {
    if (mc(e)) {
      zo(e.length === 4);
      const [t, n, r, s] = e;
      return xs(t, n, r, s);
    } else if (typeof e == "string") return zo(Ql[e] !== void 0), Ql[e];
    return e;
  };
function hS(e, t, n) {
  const r = [],
    s = n || Cp,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || at : t;
      a = ws(l, a);
    }
    r.push(a);
  }
  return r;
}
function pS(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((zo(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = hS(t, r, s),
    l = a.length,
    c = (u) => {
      if (o && u < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = ur(e[d], e[d + 1], u);
      return a[d](f);
    };
  return n ? (u) => c(Jt(e[0], e[i - 1], u)) : c;
}
function mS(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = ur(0, t, r);
    e.push(Se(n, 1, s));
  }
}
function gS(e) {
  const t = [0];
  return mS(t, e.length - 1), t;
}
function yS(e, t) {
  return e.map((n) => n * t);
}
function vS(e, t) {
  return e.map(() => t || kp).splice(0, e.length - 1);
}
function yi({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = fS(r) ? r.map(eu) : eu(r),
    i = { done: !1, value: t[0] },
    o = yS(n && n.length === t.length ? n : gS(t), e),
    a = pS(o, t, { ease: Array.isArray(s) ? s : vS(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const bS = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => we.update(t, !0),
      stop: () => pn(t),
      now: () => (Ue.isProcessing ? Ue.timestamp : Lt.now()),
    };
  },
  xS = { decay: Jl, inertia: Jl, tween: yi, keyframes: yi, spring: Pp },
  wS = (e) => e / 100;
class Sc extends Ep {
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
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || wc,
      a = (l, c) => this.onKeyframesResolved(l, c);
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
      a = pc(n) ? n : xS[n] || yi;
    let l, c;
    a !== yi &&
      typeof t[0] != "number" &&
      ((l = ws(wS, Cp(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = Tp(u));
    const { calculatedDuration: d } = u,
      f = d + s,
      g = f * (r + 1) - s;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: g,
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
      const { keyframes: C } = this.options;
      return { done: !0, value: C[C.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: g,
      repeatType: m,
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
    let _ = this.currentTime,
      E = i;
    if (g) {
      const C = Math.min(this.currentTime, u) / d;
      let O = Math.floor(C),
        M = C % 1;
      !M && C >= 1 && (M = 1),
        M === 1 && O--,
        (O = Math.min(O, g + 1)),
        !!(O % 2) &&
          (m === "reverse"
            ? ((M = 1 - M), h && (M -= h / d))
            : m === "mirror" && (E = o)),
        (_ = Jt(0, 1, M) * d);
    }
    const w = x ? { done: !1, value: l[0] } : E.next(_);
    a && (w.value = a(w.value));
    let { done: R } = w;
    !x &&
      c !== null &&
      (R = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && R));
    return (
      A && s !== void 0 && (w.value = Fi(l, this.options, s)),
      y && y(w.value),
      A && this.finish(),
      w
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? qt(t.calculatedDuration) : 0;
  }
  get time() {
    return qt(this.currentTime);
  }
  set time(t) {
    (t = Gt(t)),
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
    (this.playbackSpeed = t), n && (this.time = qt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = bS, onPlay: n, startTime: r } = this.options;
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
const _S = new Set(["opacity", "clipPath", "filter", "transform"]);
function SS(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = tp(a, s);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: s,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const ES = hc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  vi = 10,
  TS = 2e4;
function AS(e) {
  return pc(e.type) || e.type === "spring" || !ep(e.ease);
}
function CS(e, t) {
  const n = new Sc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < TS; ) (r = n.sample(i)), s.push(r.value), (i += vi);
  return { times: void 0, keyframes: s, duration: i - vi, ease: "linear" };
}
const Np = { anticipate: ap, backInOut: op, circInOut: lp };
function RS(e) {
  return e in Np;
}
class tu extends Ep {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    (this.resolver = new Sp(
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
      name: l,
      startTime: c,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && mi() && RS(i) && (i = Np[i]), AS(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: g,
          element: m,
          ...h
        } = this.options,
        y = CS(t, h);
      (t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = y.duration),
        (s = y.times),
        (i = y.ease),
        (o = "keyframes");
    }
    const u = SS(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (u.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Ul(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Fi(t, this.options, n)),
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
    return qt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return qt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Gt(t);
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
      if (!n) return at;
      const { animation: r } = n;
      Ul(r, t);
    }
    return at;
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
          motionValue: c,
          onUpdate: u,
          onComplete: d,
          element: f,
          ...g
        } = this.options,
        m = new Sc({
          ...g,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        h = Gt(this.time);
      c.setWithVelocity(m.sample(h - vi).value, m.sample(h).value, vi);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
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
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return (
      ES() &&
      r &&
      _S.has(r) &&
      !l &&
      !c &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const PS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  kS = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  NS = { type: "keyframes", duration: 0.8 },
  jS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  OS = (e, { keyframes: t }) =>
    t.length > 2
      ? NS
      : $n.has(e)
      ? e.startsWith("scale")
        ? kS(t[1])
        : PS
      : jS;
function DS({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const Ec =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = lc(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - Gt(l);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
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
    DS(a) || (u = { ...u, ...OS(e, u) }),
      u.duration && (u.duration = Gt(u.duration)),
      u.repeatDelay && (u.repeatDelay = Gt(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = Fi(u.keyframes, a);
      if (f !== void 0)
        return (
          we.update(() => {
            u.onUpdate(f), u.onComplete();
          }),
          new h_([])
        );
    }
    return !i && tu.supports(u) ? new tu(u) : new Sc(u);
  };
function MS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function jp(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const c = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const d in l) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      g = l[d];
    if (g === void 0 || (u && MS(u, d))) continue;
    const m = { delay: n, ...lc(o || {}, d) };
    let h = !1;
    if (window.MotionHandoffAnimation) {
      const b = Jh(e);
      if (b) {
        const x = window.MotionHandoffAnimation(b, d, we);
        x !== null && ((m.startTime = x), (h = !0));
      }
    }
    Ho(e, d),
      f.start(
        Ec(d, f, g, e.shouldReduceMotion && Xh.has(d) ? { type: !1 } : m, e, h)
      );
    const y = f.animation;
    y && c.push(y);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        we.update(() => {
          a && l_(e, a);
        });
      }),
    c
  );
}
function ea(e, t, n = {}) {
  var r;
  const s = Mi(
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
  const o = s ? () => Promise.all(jp(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return FS(e, t, u + c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function FS(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(LS)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          o.push(
            ea(c, t, { ...i, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function LS(e, t) {
  return e.sortNodePosition(t);
}
function IS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => ea(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = ea(e, t, n);
  else {
    const s = typeof t == "function" ? Mi(e, t, n.custom) : t;
    r = Promise.all(jp(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const VS = Ya.length;
function Op(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Op(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < VS; n++) {
    const r = Ya[n],
      s = e.props[r];
    (os(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const BS = [...Xa].reverse(),
  US = Xa.length;
function $S(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => IS(e, n, r)));
}
function zS(e) {
  let t = $S(e),
    n = nu(),
    r = !0;
  const s = (l) => (c, u) => {
    var d;
    const f = Mi(
      e,
      u,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: g, transitionEnd: m, ...h } = f;
      c = { ...c, ...h, ...m };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      u = Op(e.parent) || {},
      d = [],
      f = new Set();
    let g = {},
      m = 1 / 0;
    for (let y = 0; y < US; y++) {
      const b = BS[y],
        x = n[b],
        _ = c[b] !== void 0 ? c[b] : u[b],
        E = os(_),
        w = b === l ? x.isActive : null;
      w === !1 && (m = y);
      let R = _ === u[b] && _ !== c[b] && E;
      if (
        (R && r && e.manuallyAnimateOnMount && (R = !1),
        (x.protectedKeys = { ...g }),
        (!x.isActive && w === null) ||
          (!_ && !x.prevProp) ||
          Oi(_) ||
          typeof _ == "boolean")
      )
        continue;
      const A = WS(x.prevProp, _);
      let C = A || (b === l && x.isActive && !R && E) || (y > m && E),
        O = !1;
      const M = Array.isArray(_) ? _ : [_];
      let U = M.reduce(s(b), {});
      w === !1 && (U = {});
      const { prevResolvedValues: N = {} } = x,
        I = { ...N, ...U },
        z = (H) => {
          (C = !0),
            f.has(H) && ((O = !0), f.delete(H)),
            (x.needsAnimating[H] = !0);
          const W = e.getValue(H);
          W && (W.liveStyle = !1);
        };
      for (const H in I) {
        const W = U[H],
          ne = N[H];
        if (g.hasOwnProperty(H)) continue;
        let fe = !1;
        Wo(W) && Wo(ne) ? (fe = !Kh(W, ne)) : (fe = W !== ne),
          fe
            ? W != null
              ? z(H)
              : f.add(H)
            : W !== void 0 && f.has(H)
            ? z(H)
            : (x.protectedKeys[H] = !0);
      }
      (x.prevProp = _),
        (x.prevResolvedValues = U),
        x.isActive && (g = { ...g, ...U }),
        r && e.blockInitialAnimation && (C = !1),
        C &&
          (!(R && A) || O) &&
          d.push(...M.map((H) => ({ animation: H, options: { type: b } })));
    }
    if (f.size) {
      const y = {};
      f.forEach((b) => {
        const x = e.getBaseTarget(b),
          _ = e.getValue(b);
        _ && (_.liveStyle = !0), (y[b] = x ?? null);
      }),
        d.push({ animation: y });
    }
    let h = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (h = !1),
      (r = !1),
      h ? t(d) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((f) => {
        var g;
        return (g = f.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, c);
      }),
      (n[l].isActive = c);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = nu()), (r = !0);
    },
  };
}
function WS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Kh(t, e) : !1;
}
function xn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function nu() {
  return {
    animate: xn(!0),
    whileInView: xn(),
    whileHover: xn(),
    whileTap: xn(),
    whileDrag: xn(),
    whileFocus: xn(),
    exit: xn(),
  };
}
class yn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class HS extends yn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = zS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Oi(t) && (this.unmountControls = t.subscribe(this.node));
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
let ZS = 0;
class GS extends yn {
  constructor() {
    super(...arguments), (this.id = ZS++);
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
const qS = { animation: { Feature: HS }, exit: { Feature: GS } },
  yt = { x: !1, y: !1 };
function Dp() {
  return yt.x || yt.y;
}
function KS(e) {
  return e === "x" || e === "y"
    ? yt[e]
      ? null
      : ((yt[e] = !0),
        () => {
          yt[e] = !1;
        })
    : yt.x || yt.y
    ? null
    : ((yt.x = yt.y = !0),
      () => {
        yt.x = yt.y = !1;
      });
}
const Tc = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function us(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function _s(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const XS = (e) => (t) => Tc(t) && e(t, _s(t));
function Ir(e, t, n, r) {
  return us(e, t, XS(n), r);
}
const ru = (e, t) => Math.abs(e - t);
function YS(e, t) {
  const n = ru(e.x, t.x),
    r = ru(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Mp {
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
        const d = mo(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          g = YS(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !g) return;
        const { point: m } = d,
          { timestamp: h } = Ue;
        this.history.push({ ...m, timestamp: h });
        const { onStart: y, onMove: b } = this.handlers;
        f ||
          (y && y(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = po(f, this.transformPagePoint)),
          we.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: g, onSessionEnd: m, resumeAnimation: h } = this.handlers;
        if (
          (this.dragSnapToOrigin && h && h(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const y = mo(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : po(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(d, y), m && m(d, y);
      }),
      !Tc(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = _s(t),
      a = po(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = Ue;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, mo(a, this.history)),
      (this.removeListeners = ws(
        Ir(this.contextWindow, "pointermove", this.handlePointerMove),
        Ir(this.contextWindow, "pointerup", this.handlePointerUp),
        Ir(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), pn(this.updatePoint);
  }
}
function po(e, t) {
  return t ? { point: t(e.point) } : e;
}
function su(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function mo({ point: e }, t) {
  return {
    point: e,
    delta: su(e, Fp(t)),
    offset: su(e, JS(t)),
    velocity: QS(t, 0.1),
  };
}
function JS(e) {
  return e[0];
}
function Fp(e) {
  return e[e.length - 1];
}
function QS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = Fp(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Gt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = qt(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const Lp = 1e-4,
  eE = 1 - Lp,
  tE = 1 + Lp,
  Ip = 0.01,
  nE = 0 - Ip,
  rE = 0 + Ip;
function ut(e) {
  return e.max - e.min;
}
function sE(e, t, n) {
  return Math.abs(e - t) <= n;
}
function iu(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Se(t.min, t.max, e.origin)),
    (e.scale = ut(n) / ut(t)),
    (e.translate = Se(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= eE && e.scale <= tE) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= nE && e.translate <= rE) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Vr(e, t, n, r) {
  iu(e.x, t.x, n.x, r ? r.originX : void 0),
    iu(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ou(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + ut(t));
}
function iE(e, t, n) {
  ou(e.x, t.x, n.x), ou(e.y, t.y, n.y);
}
function au(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + ut(t));
}
function Br(e, t, n) {
  au(e.x, t.x, n.x), au(e.y, t.y, n.y);
}
function oE(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function cu(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function aE(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: cu(e.x, n, s), y: cu(e.y, t, r) };
}
function lu(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function cE(e, t) {
  return { x: lu(e.x, t.x), y: lu(e.y, t.y) };
}
function lE(e, t) {
  let n = 0.5;
  const r = ut(e),
    s = ut(t);
  return (
    s > r
      ? (n = ur(t.min, t.max - r, e.min))
      : r > s && (n = ur(e.min, e.max - s, t.min)),
    Jt(0, 1, n)
  );
}
function uE(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ta = 0.35;
function dE(e = ta) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ta),
    { x: uu(e, "left", "right"), y: uu(e, "top", "bottom") }
  );
}
function uu(e, t, n) {
  return { min: du(e, t), max: du(e, n) };
}
function du(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const fu = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Yn = () => ({ x: fu(), y: fu() }),
  hu = () => ({ min: 0, max: 0 }),
  Pe = () => ({ x: hu(), y: hu() });
function ht(e) {
  return [e("x"), e("y")];
}
function Vp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function fE({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hE(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function go(e) {
  return e === void 0 || e === 1;
}
function na({ scale: e, scaleX: t, scaleY: n }) {
  return !go(e) || !go(t) || !go(n);
}
function wn(e) {
  return (
    na(e) ||
    Bp(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Bp(e) {
  return pu(e.x) || pu(e.y);
}
function pu(e) {
  return e && e !== "0%";
}
function bi(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function mu(e, t, n, r, s) {
  return s !== void 0 && (e = bi(e, s, r)), bi(e, n, r) + t;
}
function ra(e, t = 0, n = 1, r, s) {
  (e.min = mu(e.min, t, n, r, s)), (e.max = mu(e.max, t, n, r, s));
}
function Up(e, { x: t, y: n }) {
  ra(e.x, t.translate, t.scale, t.originPoint),
    ra(e.y, n.translate, n.scale, n.originPoint);
}
const gu = 0.999999999999,
  yu = 1.0000000000001;
function pE(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    (i = n[a]), (o = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Qn(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Up(e, o)),
      r && wn(i.latestValues) && Qn(e, i.latestValues));
  }
  t.x < yu && t.x > gu && (t.x = 1), t.y < yu && t.y > gu && (t.y = 1);
}
function Jn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function vu(e, t, n, r, s = 0.5) {
  const i = Se(e.min, e.max, s);
  ra(e, t, n, i, r);
}
function Qn(e, t) {
  vu(e.x, t.x, t.scaleX, t.scale, t.originX),
    vu(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function $p(e, t) {
  return Vp(hE(e.getBoundingClientRect(), t));
}
function mE(e, t, n) {
  const r = $p(e, n),
    { scroll: s } = t;
  return s && (Jn(r.x, s.offset.x), Jn(r.y, s.offset.y)), r;
}
const zp = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  gE = new WeakMap();
class yE {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Pe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(_s(u).point);
      },
      i = (u, d) => {
        const { drag: f, dragPropagation: g, onDragStart: m } = this.getProps();
        if (
          f &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = KS(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ht((y) => {
            let b = this.getAxisMotionValue(y).get() || 0;
            if (Ft.test(b)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const _ = x.layout.layoutBox[y];
                _ && (b = ut(_) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[y] = b;
          }),
          m && we.postRender(() => m(u, d)),
          Ho(this.visualElement, "transform");
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      o = (u, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: g,
          onDirectionLock: m,
          onDrag: h,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: y } = d;
        if (g && this.currentDirection === null) {
          (this.currentDirection = vE(y)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, y),
          this.updateAxis("y", d.point, y),
          this.visualElement.render(),
          h && h(u, d);
      },
      a = (u, d) => this.stop(u, d),
      l = () =>
        ht((u) => {
          var d;
          return (
            this.getAnimationState(u) === "paused" &&
            ((d = this.getAxisMotionValue(u).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Mp(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: zp(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && we.postRender(() => i(t, n));
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
    if (!r || !Is(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = oE(o, this.constraints[t], this.elastic[t])),
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
    n && Kn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = aE(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = dE(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ht((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = uE(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Kn(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = mE(r, s.root, this.visualElement.getTransformPagePoint());
    let o = cE(s.layout.layoutBox, i);
    if (n) {
      const a = n(fE(o));
      (this.hasMutatedConstraints = !!a), a && (o = Vp(a));
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
      l = this.constraints || {},
      c = ht((u) => {
        if (!Is(u, n, this.currentDirection)) return;
        let d = l[u] || {};
        o && (d = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          g = s ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[u] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Ho(this.visualElement, t), r.start(Ec(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ht((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ht((t) => {
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
    ht((n) => {
      const { drag: r } = this.getProps();
      if (!Is(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - Se(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Kn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    ht((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = lE({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ht((o) => {
        if (!Is(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(Se(l, c, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    gE.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ir(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Kn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      we.read(r);
    const o = us(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (ht((u) => {
              const d = this.getAxisMotionValue(u);
              d &&
                ((this.originPoint[u] += l[u].translate),
                d.set(d.get() + l[u].translate));
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
        dragElastic: o = ta,
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
function Is(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function vE(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class bE extends yn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = at),
      (this.removeListeners = at),
      (this.controls = new yE(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || at);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const bu = (e) => (t, n) => {
  e && we.postRender(() => e(t, n));
};
class xE extends yn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = at);
  }
  onPointerDown(t) {
    this.session = new Mp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: zp(this.node),
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
      onSessionStart: bu(t),
      onStart: bu(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && we.postRender(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ir(this.node.current, "pointerdown", (t) =>
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
const Gs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function xu(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ar = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (Y.test(e)) e = parseFloat(e);
        else return e;
      const n = xu(e, t.target.x),
        r = xu(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  wE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = mn.parse(e);
      if (s.length > 5) return r;
      const i = mn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (s[0 + o] /= a), (s[1 + o] /= l);
      const c = Se(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= c),
        typeof s[3 + o] == "number" && (s[3 + o] /= c),
        i(s)
      );
    },
  };
class _E extends v.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    K0(SE),
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
      (Gs.hasEverUpdated = !0);
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
              we.postRender(() => {
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
      Qa.postRender(() => {
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
function Wp(e) {
  const [t, n] = Ph(),
    r = v.useContext(Za);
  return p.jsx(_E, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: v.useContext(Fh),
    isPresent: t,
    safeToRemove: n,
  });
}
const SE = {
  borderRadius: {
    ...Ar,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Ar,
  borderTopRightRadius: Ar,
  borderBottomLeftRadius: Ar,
  borderBottomRightRadius: Ar,
  boxShadow: wE,
};
function EE(e, t, n) {
  const r = qe(e) ? e : cs(e);
  return r.start(Ec("", r, t, n)), r.animation;
}
function TE(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const AE = (e, t) => e.depth - t.depth;
class CE {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    uc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    dc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(AE),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function RE(e, t) {
  const n = Lt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (pn(r), e(i - t));
    };
  return we.read(r, !0), () => pn(r);
}
const Hp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  PE = Hp.length,
  wu = (e) => (typeof e == "string" ? parseFloat(e) : e),
  _u = (e) => typeof e == "number" || Y.test(e);
function kE(e, t, n, r, s, i) {
  s
    ? ((e.opacity = Se(0, n.opacity !== void 0 ? n.opacity : 1, NE(r))),
      (e.opacityExit = Se(t.opacity !== void 0 ? t.opacity : 1, 0, jE(r))))
    : i &&
      (e.opacity = Se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < PE; o++) {
    const a = `border${Hp[o]}Radius`;
    let l = Su(t, a),
      c = Su(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || _u(l) === _u(c)
        ? ((e[a] = Math.max(Se(wu(l), wu(c), r), 0)),
          (Ft.test(c) || Ft.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r));
}
function Su(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const NE = Zp(0, 0.5, cp),
  jE = Zp(0.5, 0.95, at);
function Zp(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ur(e, t, r)));
}
function Eu(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ft(e, t) {
  Eu(e.x, t.x), Eu(e.y, t.y);
}
function Tu(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Au(e, t, n, r, s) {
  return (
    (e -= t), (e = bi(e, 1 / n, r)), s !== void 0 && (e = bi(e, 1 / s, r)), e
  );
}
function OE(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (Ft.test(t) &&
      ((t = parseFloat(t)), (t = Se(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = Se(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Au(e.min, t, n, a, s)),
    (e.max = Au(e.max, t, n, a, s));
}
function Cu(e, t, [n, r, s], i, o) {
  OE(e, t[n], t[r], t[s], t.scale, i, o);
}
const DE = ["x", "scaleX", "originX"],
  ME = ["y", "scaleY", "originY"];
function Ru(e, t, n, r) {
  Cu(e.x, t, DE, n ? n.x : void 0, r ? r.x : void 0),
    Cu(e.y, t, ME, n ? n.y : void 0, r ? r.y : void 0);
}
function Pu(e) {
  return e.translate === 0 && e.scale === 1;
}
function Gp(e) {
  return Pu(e.x) && Pu(e.y);
}
function ku(e, t) {
  return e.min === t.min && e.max === t.max;
}
function FE(e, t) {
  return ku(e.x, t.x) && ku(e.y, t.y);
}
function Nu(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function qp(e, t) {
  return Nu(e.x, t.x) && Nu(e.y, t.y);
}
function ju(e) {
  return ut(e.x) / ut(e.y);
}
function Ou(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class LE {
  constructor() {
    this.members = [];
  }
  add(t) {
    uc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (dc(this.members, t),
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
function IE(e, t, n) {
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
      transformPerspective: c,
      rotate: u,
      rotateX: d,
      rotateY: f,
      skewX: g,
      skewY: m,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      g && (r += `skewX(${g}deg) `),
      m && (r += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const _n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Nr = typeof window < "u" && window.MotionDebug !== void 0,
  yo = ["", "X", "Y", "Z"],
  VE = { visibility: "hidden" },
  Du = 1e3;
let BE = 0;
function vo(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Kp(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Jh(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", we, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Kp(r);
}
function Xp({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = BE++),
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
            Nr &&
              (_n.totalNodes =
                _n.resolvedTargetDeltas =
                _n.recalculatedProjection =
                  0),
            this.nodes.forEach(zE),
            this.nodes.forEach(qE),
            this.nodes.forEach(KE),
            this.nodes.forEach(WE),
            Nr && window.MotionDebug.record(_n);
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
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new CE());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new fc()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = TE(o)), (this.instance = o);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = RE(f, 250)),
            Gs.hasAnimatedSinceResize &&
              ((Gs.hasAnimatedSinceResize = !1), this.nodes.forEach(Fu));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: g,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const h =
                  this.options.transition || u.getDefaultTransition() || eT,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } =
                  u.getProps(),
                x = !this.targetLayout || !qp(this.targetLayout, m),
                _ = !f && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                _ ||
                (f && (x || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, _);
                const E = { ...lc(h, "layout"), onPlay: y, onComplete: b };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E);
              } else
                f || Fu(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        pn(this.updateProjection);
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
        this.nodes && this.nodes.forEach(XE),
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
          Kp(this),
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
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mu);
        return;
      }
      this.isUpdating || this.nodes.forEach(ZE),
        (this.isUpdating = !1),
        this.nodes.forEach(GE),
        this.nodes.forEach(UE),
        this.nodes.forEach($E),
        this.clearAllSnapshots();
      const a = Lt.now();
      (Ue.delta = Jt(0, 1e3 / 60, a - Ue.timestamp)),
        (Ue.timestamp = a),
        (Ue.isProcessing = !0),
        lo.update.process(Ue),
        lo.preRender.process(Ue),
        lo.render.process(Ue),
        (Ue.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Qa.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(HE), this.sharedNodes.forEach(YE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        we.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      we.postRender(() => {
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
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Pe()),
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
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Gp(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      o &&
        (a || wn(this.latestValues) || u) &&
        (s(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        tT(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return Pe();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(nT)
        )
      ) {
        const { scroll: u } = this.root;
        u && (Jn(l.x, u.offset.x), Jn(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = Pe();
      if (
        (ft(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: d, options: f } = u;
        u !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && ft(l, o), Jn(l.x, d.offset.x), Jn(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = Pe();
      ft(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Qn(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          wn(u.latestValues) && Qn(l, u.latestValues);
      }
      return wn(this.latestValues) && Qn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Pe();
      ft(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !wn(c.latestValues)) continue;
        na(c.latestValues) && c.updateSnapshot();
        const u = Pe(),
          d = c.measurePageBox();
        ft(u, d),
          Ru(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return wn(this.latestValues) && Ru(a, this.latestValues), a;
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
        this.relativeParent.resolvedRelativeTargetAt !== Ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
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
          ((this.resolvedRelativeTargetAt = Ue.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Pe()),
              (this.relativeTargetOrigin = Pe()),
              Br(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              ft(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Pe()), (this.targetWithTransforms = Pe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                iE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ft(this.target, this.layout.layoutBox),
                Up(this.target, this.targetDelta))
              : ft(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Pe()),
                (this.relativeTargetOrigin = Pe()),
                Br(this.relativeTargetOrigin, this.target, g.target),
                ft(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Nr && _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          na(this.parent.latestValues) ||
          Bp(this.parent.latestValues)
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
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ue.timestamp && (c = !1),
        c)
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
      ft(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        g = this.treeScale.y;
      pE(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Pe()));
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Tu(this.prevProjectionDelta.x, this.projectionDelta.x),
          Tu(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Vr(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== g ||
          !Ou(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ou(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        Nr && _n.recalculatedProjection++;
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
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Yn()),
        (this.projectionDelta = Yn()),
        (this.projectionDeltaWithTransform = Yn());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        d = Yn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Pe(),
        g = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        h = g !== m,
        y = this.getStack(),
        b = !y || y.members.length <= 1,
        x = !!(h && !b && this.options.crossfade === !0 && !this.path.some(QE));
      this.animationProgress = 0;
      let _;
      (this.mixTargetDelta = (E) => {
        const w = E / 1e3;
        Lu(d.x, o.x, w),
          Lu(d.y, o.y, w),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Br(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            JE(this.relativeTarget, this.relativeTargetOrigin, f, w),
            _ && FE(this.relativeTarget, _) && (this.isProjectionDirty = !1),
            _ || (_ = Pe()),
            ft(_, this.relativeTarget)),
          h &&
            ((this.animationValues = u), kE(u, c, this.latestValues, w, x, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
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
          (pn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = we.update(() => {
          (Gs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = EE(0, Du, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Du),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Yp(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Pe();
          const d = ut(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = ut(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        ft(a, l),
          Qn(a, u),
          Vr(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new LE()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
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
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
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
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && vo("z", o, c, this.animationValues);
      for (let u = 0; u < yo.length; u++)
        vo(`rotate${yo[u]}`, o, c, this.animationValues),
          vo(`skew${yo[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return VE;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Hs(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
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
            (h.pointerEvents = Hs(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !wn(this.latestValues) &&
            ((h.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          h
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = IE(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        u && (c.transform = u(f, c.transform));
      const { x: g, y: m } = this.projectionDelta;
      (c.transformOrigin = `${g.origin * 100}% ${m.origin * 100}% 0`),
        d.animationValues
          ? (c.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (c.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const h in pi) {
        if (f[h] === void 0) continue;
        const { correct: y, applyTo: b } = pi[h],
          x = c.transform === "none" ? f[h] : y(f[h], d);
        if (b) {
          const _ = b.length;
          for (let E = 0; E < _; E++) c[b[E]] = x;
        } else c[h] = x;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            d === this
              ? Hs(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
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
        this.root.nodes.forEach(Mu),
        this.root.sharedNodes.clear();
    }
  };
}
function UE(e) {
  e.updateLayout();
}
function $E(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? ht((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            g = ut(f);
          (f.min = r[d].min), (f.max = f.min + g);
        })
      : Yp(i, n.layoutBox, r) &&
        ht((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            g = ut(r[d]);
          (f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + g));
        });
    const a = Yn();
    Vr(a, r, n.layoutBox);
    const l = Yn();
    o ? Vr(l, e.applyTransform(s, !0), n.measuredBox) : Vr(l, r, n.layoutBox);
    const c = !Gp(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const m = Pe();
          Br(m, n.layoutBox, f.layoutBox);
          const h = Pe();
          Br(h, r, g.layoutBox),
            qp(m, h) || (u = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = h),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function zE(e) {
  Nr && _n.totalNodes++,
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
function WE(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function HE(e) {
  e.clearSnapshot();
}
function Mu(e) {
  e.clearMeasurements();
}
function ZE(e) {
  e.isLayoutDirty = !1;
}
function GE(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Fu(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function qE(e) {
  e.resolveTargetDelta();
}
function KE(e) {
  e.calcProjection();
}
function XE(e) {
  e.resetSkewAndRotation();
}
function YE(e) {
  e.removeLeadSnapshot();
}
function Lu(e, t, n) {
  (e.translate = Se(t.translate, 0, n)),
    (e.scale = Se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Iu(e, t, n, r) {
  (e.min = Se(t.min, n.min, r)), (e.max = Se(t.max, n.max, r));
}
function JE(e, t, n, r) {
  Iu(e.x, t.x, n.x, r), Iu(e.y, t.y, n.y, r);
}
function QE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const eT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Vu = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Bu = Vu("applewebkit/") && !Vu("chrome/") ? Math.round : at;
function Uu(e) {
  (e.min = Bu(e.min)), (e.max = Bu(e.max));
}
function tT(e) {
  Uu(e.x), Uu(e.y);
}
function Yp(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !sE(ju(t), ju(n), 0.2))
  );
}
function nT(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const rT = Xp({
    attachResizeListener: (e, t) => us(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  bo = { current: void 0 },
  Jp = Xp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!bo.current) {
        const e = new rT({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (bo.current = e);
      }
      return bo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  sT = {
    pan: { Feature: xE },
    drag: { Feature: bE, ProjectionNode: Jp, MeasureLayout: Wp },
  };
function iT(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Qp(e, t) {
  const n = iT(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function $u(e) {
  return !(e.pointerType === "touch" || Dp());
}
function oT(e, t, n = {}) {
  const [r, s, i] = Qp(e, n),
    o = (a) => {
      if (!$u(a)) return;
      const { target: l } = a,
        c = t(l, a);
      if (typeof c != "function" || !l) return;
      const u = (d) => {
        $u(d) && (c(d), l.removeEventListener("pointerleave", u));
      };
      l.addEventListener("pointerleave", u, s);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
function zu(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && we.postRender(() => i(t, _s(t)));
}
class aT extends yn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = oT(
        t,
        (n, r) => (zu(this.node, r, "Start"), (s) => zu(this.node, s, "End"))
      ));
  }
  unmount() {}
}
class cT extends yn {
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
    this.unmount = ws(
      us(this.node.current, "focus", () => this.onFocus()),
      us(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const em = (e, t) => (t ? (e === t ? !0 : em(e, t.parentElement)) : !1),
  lT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function uT(e) {
  return lT.has(e.tagName) || e.tabIndex !== -1;
}
const jr = new WeakSet();
function Wu(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function xo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const dT = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Wu(() => {
    if (jr.has(n)) return;
    xo(n, "down");
    const s = Wu(() => {
        xo(n, "up");
      }),
      i = () => xo(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Hu(e) {
  return Tc(e) && !Dp();
}
function fT(e, t, n = {}) {
  const [r, s, i] = Qp(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Hu(a) || jr.has(l)) return;
      jr.add(l);
      const c = t(l, a),
        u = (g, m) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!Hu(g) || !jr.has(l)) &&
              (jr.delete(l), typeof c == "function" && c(g, { success: m }));
        },
        d = (g) => {
          u(g, n.useGlobalTarget || em(l, g.target));
        },
        f = (g) => {
          u(g, !1);
        };
      window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", f, s);
    };
  return (
    r.forEach((a) => {
      !uT(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (c) => dT(c, s), s);
    }),
    i
  );
}
function Zu(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && we.postRender(() => i(t, _s(t)));
}
class hT extends yn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = fT(
        t,
        (n, r) => (
          Zu(this.node, r, "Start"),
          (s, { success: i }) => Zu(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const sa = new WeakMap(),
  wo = new WeakMap(),
  pT = (e) => {
    const t = sa.get(e.target);
    t && t(e);
  },
  mT = (e) => {
    e.forEach(pT);
  };
function gT({ root: e, ...t }) {
  const n = e || document;
  wo.has(n) || wo.set(n, {});
  const r = wo.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(mT, { root: e, ...t })), r[s];
}
function yT(e, t, n) {
  const r = gT(t);
  return (
    sa.set(e, n),
    r.observe(e),
    () => {
      sa.delete(e), r.unobserve(e);
    }
  );
}
const vT = { some: 0, all: 1 };
class bT extends yn {
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
        threshold: typeof s == "number" ? s : vT[s],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          f = c ? u : d;
        f && f(l);
      };
    return yT(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(xT(t, n)) && this.startObserver();
  }
  unmount() {}
}
function xT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const wT = {
    inView: { Feature: bT },
    tap: { Feature: hT },
    focus: { Feature: cT },
    hover: { Feature: aT },
  },
  _T = { layout: { ProjectionNode: Jp, MeasureLayout: Wp } },
  ia = { current: null },
  tm = { current: !1 };
function ST() {
  if (((tm.current = !0), !!Ka))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ia.current = e.matches);
      e.addListener(t), t();
    } else ia.current = !1;
}
const ET = [..._p, He, mn],
  TT = (e) => ET.find(wp(e)),
  Gu = new WeakMap();
function AT(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (qe(s)) e.addValue(r, s);
    else if (qe(i)) e.addValue(r, cs(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, cs(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const qu = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class CT {
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
      (this.KeyframeResolver = wc),
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
        const g = Lt.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), we.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c, onUpdate: u } = o;
    (this.onUpdate = u),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Di(n)),
      (this.isVariantNode = Dh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const g in f) {
      const m = f[g];
      l[g] !== void 0 && qe(m) && m.set(l[g], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Gu.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      tm.current || ST(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : ia.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Gu.delete(this.current),
      this.projection && this.projection.unmount(),
      pn(this.notifyUpdate),
      pn(this.render),
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
    const r = $n.has(t),
      s = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && we.preRender(this.notifyUpdate),
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
    for (t in lr) {
      const n = lr[t];
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
      : Pe();
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
    for (let r = 0; r < qu.length; r++) {
      const s = qu[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = AT(
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
        ((r = cs(n === null ? void 0 : n, { owner: this })),
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
        (typeof s == "string" && (bp(s) || up(s))
          ? (s = parseFloat(s))
          : !TT(s) && mn.test(n) && (s = gp(t, n)),
        this.setBaseTarget(t, qe(s) ? s.get() : s)),
      qe(s) ? s.get() : s
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
      const o = tc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !qe(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new fc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class nm extends CT {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Sp);
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
    qe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function RT(e) {
  return window.getComputedStyle(e);
}
class PT extends nm {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = zh);
  }
  readValueFromInstance(t, n) {
    if ($n.has(n)) {
      const r = xc(n);
      return (r && r.default) || 0;
    } else {
      const r = RT(t),
        s = (Bh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return $p(t, n);
  }
  build(t, n, r) {
    sc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return cc(t, n, r);
  }
}
class kT extends nm {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Pe);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if ($n.has(n)) {
      const r = xc(n);
      return (r && r.default) || 0;
    }
    return (n = Wh.has(n) ? n : Ja(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Gh(t, n, r);
  }
  build(t, n, r) {
    ic(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    Hh(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = ac(t.tagName)), super.mount(t);
  }
}
const NT = (e, t) =>
    ec(e) ? new kT(t) : new PT(t, { allowProjection: e !== v.Fragment }),
  jT = s_({ ...qS, ...wT, ...sT, ..._T }, NT),
  Rn = b0(jT);
function rm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: OT } = Object.prototype,
  { getPrototypeOf: Ac } = Object,
  Li = ((e) => (t) => {
    const n = OT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ct = (e) => ((e = e.toLowerCase()), (t) => Li(t) === e),
  Ii = (e) => (t) => typeof t === e,
  { isArray: yr } = Array,
  ds = Ii("undefined");
function DT(e) {
  return (
    e !== null &&
    !ds(e) &&
    e.constructor !== null &&
    !ds(e.constructor) &&
    ct(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const sm = Ct("ArrayBuffer");
function MT(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && sm(e.buffer)),
    t
  );
}
const FT = Ii("string"),
  ct = Ii("function"),
  im = Ii("number"),
  Vi = (e) => e !== null && typeof e == "object",
  LT = (e) => e === !0 || e === !1,
  qs = (e) => {
    if (Li(e) !== "object") return !1;
    const t = Ac(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  IT = Ct("Date"),
  VT = Ct("File"),
  BT = Ct("Blob"),
  UT = Ct("FileList"),
  $T = (e) => Vi(e) && ct(e.pipe),
  zT = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ct(e.append) &&
          ((t = Li(e)) === "formdata" ||
            (t === "object" &&
              ct(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  WT = Ct("URLSearchParams"),
  [HT, ZT, GT, qT] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ct
  ),
  KT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ss(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), yr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function om(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Tn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  am = (e) => !ds(e) && e !== Tn;
function oa() {
  const { caseless: e } = (am(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && om(t, s)) || s;
      qs(t[i]) && qs(r)
        ? (t[i] = oa(t[i], r))
        : qs(r)
        ? (t[i] = oa({}, r))
        : yr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Ss(arguments[r], n);
  return t;
}
const XT = (e, t, n, { allOwnKeys: r } = {}) => (
    Ss(
      t,
      (s, i) => {
        n && ct(s) ? (e[i] = rm(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  YT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  JT = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  QT = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && Ac(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  eA = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  tA = (e) => {
    if (!e) return null;
    if (yr(e)) return e;
    let t = e.length;
    if (!im(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  nA = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ac(Uint8Array)),
  rA = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  sA = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  iA = Ct("HTMLFormElement"),
  oA = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Ku = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  aA = Ct("RegExp"),
  cm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ss(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  cA = (e) => {
    cm(e, (t, n) => {
      if (ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ct(r)) {
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
  lA = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return yr(e) ? r(e) : r(String(e).split(t)), n;
  },
  uA = () => {},
  dA = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  _o = "abcdefghijklmnopqrstuvwxyz",
  Xu = "0123456789",
  lm = { DIGIT: Xu, ALPHA: _o, ALPHA_DIGIT: _o + _o.toUpperCase() + Xu },
  fA = (e = 16, t = lm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function hA(e) {
  return !!(
    e &&
    ct(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const pA = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Vi(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = yr(r) ? [] : {};
            return (
              Ss(r, (o, a) => {
                const l = n(o, s + 1);
                !ds(l) && (i[a] = l);
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
  mA = Ct("AsyncFunction"),
  gA = (e) => e && (Vi(e) || ct(e)) && ct(e.then) && ct(e.catch),
  um = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Tn.addEventListener(
            "message",
            ({ source: s, data: i }) => {
              s === Tn && i === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Tn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    ct(Tn.postMessage)
  ),
  yA =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Tn)
      : (typeof process < "u" && process.nextTick) || um,
  P = {
    isArray: yr,
    isArrayBuffer: sm,
    isBuffer: DT,
    isFormData: zT,
    isArrayBufferView: MT,
    isString: FT,
    isNumber: im,
    isBoolean: LT,
    isObject: Vi,
    isPlainObject: qs,
    isReadableStream: HT,
    isRequest: ZT,
    isResponse: GT,
    isHeaders: qT,
    isUndefined: ds,
    isDate: IT,
    isFile: VT,
    isBlob: BT,
    isRegExp: aA,
    isFunction: ct,
    isStream: $T,
    isURLSearchParams: WT,
    isTypedArray: nA,
    isFileList: UT,
    forEach: Ss,
    merge: oa,
    extend: XT,
    trim: KT,
    stripBOM: YT,
    inherits: JT,
    toFlatObject: QT,
    kindOf: Li,
    kindOfTest: Ct,
    endsWith: eA,
    toArray: tA,
    forEachEntry: rA,
    matchAll: sA,
    isHTMLForm: iA,
    hasOwnProperty: Ku,
    hasOwnProp: Ku,
    reduceDescriptors: cm,
    freezeMethods: cA,
    toObjectSet: lA,
    toCamelCase: oA,
    noop: uA,
    toFiniteNumber: dA,
    findKey: om,
    global: Tn,
    isContextDefined: am,
    ALPHABET: lm,
    generateString: fA,
    isSpecCompliantForm: hA,
    toJSONObject: pA,
    isAsyncFn: mA,
    isThenable: gA,
    setImmediate: um,
    asap: yA,
  };
function re(e, t, n, r, s) {
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
P.inherits(re, Error, {
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
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const dm = re.prototype,
  fm = {};
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
  fm[e] = { value: e };
});
Object.defineProperties(re, fm);
Object.defineProperty(dm, "isAxiosError", { value: !0 });
re.from = (e, t, n, r, s, i) => {
  const o = Object.create(dm);
  return (
    P.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    re.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const vA = null;
function aa(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function hm(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = hm(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function bA(e) {
  return P.isArray(e) && !e.some(aa);
}
const xA = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Bi(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, y) {
        return !P.isUndefined(y[h]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || u,
    i = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (P.isDate(m)) return m.toISOString();
    if (!l && P.isBlob(m))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(m) || P.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, h, y) {
    let b = m;
    if (m && !y && typeof m == "object") {
      if (P.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (P.isArray(m) && bA(m)) ||
        ((P.isFileList(m) || P.endsWith(h, "[]")) && (b = P.toArray(m)))
      )
        return (
          (h = hm(h)),
          b.forEach(function (_, E) {
            !(P.isUndefined(_) || _ === null) &&
              t.append(
                o === !0 ? Yu([h], E, i) : o === null ? h : h + "[]",
                c(_)
              );
          }),
          !1
        );
    }
    return aa(m) ? !0 : (t.append(Yu(y, h, i), c(m)), !1);
  }
  const d = [],
    f = Object.assign(xA, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: aa,
    });
  function g(m, h) {
    if (!P.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(m),
        P.forEach(m, function (b, x) {
          (!(P.isUndefined(b) || b === null) &&
            s.call(t, b, P.isString(x) ? x.trim() : x, h, f)) === !0 &&
            g(b, h ? h.concat(x) : [x]);
        }),
        d.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function Ju(e) {
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
function Cc(e, t) {
  (this._pairs = []), e && Bi(e, this, t);
}
const pm = Cc.prototype;
pm.append = function (t, n) {
  this._pairs.push([t, n]);
};
pm.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ju);
      }
    : Ju;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function wA(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function mm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || wA;
  P.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = P.isURLSearchParams(t) ? t.toString() : new Cc(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Qu {
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
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const gm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  _A = typeof URLSearchParams < "u" ? URLSearchParams : Cc,
  SA = typeof FormData < "u" ? FormData : null,
  EA = typeof Blob < "u" ? Blob : null,
  TA = {
    isBrowser: !0,
    classes: { URLSearchParams: _A, FormData: SA, Blob: EA },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Rc = typeof window < "u" && typeof document < "u",
  ca = (typeof navigator == "object" && navigator) || void 0,
  AA =
    Rc &&
    (!ca || ["ReactNative", "NativeScript", "NS"].indexOf(ca.product) < 0),
  CA =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  RA = (Rc && window.location.href) || "http://localhost",
  PA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Rc,
        hasStandardBrowserEnv: AA,
        hasStandardBrowserWebWorkerEnv: CA,
        navigator: ca,
        origin: RA,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ze = { ...PA, ...TA };
function kA(e, t) {
  return Bi(
    e,
    new Ze.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return Ze.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function NA(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function jA(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function ym(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = i >= n.length;
    return (
      (o = !o && P.isArray(s) ? s.length : o),
      l
        ? (P.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !P.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && P.isArray(s[o]) && (s[o] = jA(s[o])),
          !a)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, s) => {
        t(NA(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function OA(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Es = {
  transitional: gm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = P.isObject(t);
      if ((i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return s ? JSON.stringify(ym(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t) ||
        P.isReadableStream(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
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
          return kA(t, this.formSerializer).toString();
        if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Bi(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), OA(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Es.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t)) return t;
      if (t && P.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? re.from(a, re.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: Ze.classes.FormData, Blob: Ze.classes.Blob },
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
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Es.headers[e] = {};
});
const DA = P.toObjectSet([
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
  MA = (e) => {
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
              !(!n || (t[n] && DA[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ed = Symbol("internals");
function Cr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ks(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Ks) : String(e);
}
function FA(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const LA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function So(e, t, n, r, s) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function IA(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function VA(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class tt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, l, c) {
      const u = Cr(l);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = P.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || (c === void 0 && s[d] !== !1)) &&
        (s[d || l] = Ks(a));
    }
    const o = (a, l) => P.forEach(a, (c, u) => i(c, u, l));
    if (P.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (P.isString(t) && (t = t.trim()) && !LA(t)) o(MA(t), n);
    else if (P.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Cr(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return FA(s);
        if (P.isFunction(n)) return n.call(this, s, r);
        if (P.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Cr(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || So(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = Cr(o)), o)) {
        const a = P.findKey(r, o);
        a && (!n || So(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return P.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || So(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (s, i) => {
        const o = P.findKey(r, i);
        if (o) {
          (n[o] = Ks(s)), delete n[i];
          return;
        }
        const a = t ? IA(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Ks(s)), (r[a] = !0);
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
      P.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && P.isArray(r) ? r.join(", ") : r);
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
    const r = (this[ed] = this[ed] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = Cr(o);
      r[a] || (VA(s, o), (r[a] = !0));
    }
    return P.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
tt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(tt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
P.freezeMethods(tt);
function Eo(e, t) {
  const n = this || Es,
    r = t || n,
    s = tt.from(r.headers);
  let i = r.data;
  return (
    P.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function vm(e) {
  return !!(e && e.__CANCEL__);
}
function vr(e, t, n) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(vr, re, { __CANCEL__: !0 });
function bm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new re(
          "Request failed with status code " + n.status,
          [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function BA(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function UA(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        u = r[i];
      o || (o = c), (n[s] = l), (r[s] = c);
      let d = i,
        f = 0;
      for (; d !== s; ) (f += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t)) return;
      const g = u && c - u;
      return g ? Math.round((f * 1e3) / g) : void 0;
    }
  );
}
function $A(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (c, u = Date.now()) => {
    (n = u), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? o(c, u)
        : ((s = c),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - d)));
    },
    () => s && o(s),
  ];
}
const xi = (e, t, n = 3) => {
    let r = 0;
    const s = UA(50, 250);
    return $A((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = o - r,
        c = s(l),
        u = o <= a;
      r = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && a && u ? (a - o) / c : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  td = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  nd =
    (e) =>
    (...t) =>
      P.asap(() => e(...t)),
  zA = Ze.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Ze.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Ze.origin),
        Ze.navigator && /(msie|trident)/i.test(Ze.navigator.userAgent)
      )
    : () => !0,
  WA = Ze.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          P.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            P.isString(r) && o.push("path=" + r),
            P.isString(s) && o.push("domain=" + s),
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
function HA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ZA(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xm(e, t) {
  return e && !HA(t) ? ZA(e, t) : t;
}
const rd = (e) => (e instanceof tt ? { ...e } : e);
function Fn(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d, f) {
    return P.isPlainObject(c) && P.isPlainObject(u)
      ? P.merge.call({ caseless: f }, c, u)
      : P.isPlainObject(u)
      ? P.merge({}, u)
      : P.isArray(u)
      ? u.slice()
      : u;
  }
  function s(c, u, d, f) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(c)) return r(void 0, c, d, f);
    } else return r(c, u, d, f);
  }
  function i(c, u) {
    if (!P.isUndefined(u)) return r(void 0, u);
  }
  function o(c, u) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in t) return r(c, u);
    if (d in e) return r(void 0, c);
  }
  const l = {
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
    headers: (c, u, d) => s(rd(c), rd(u), d, !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = l[u] || s,
        f = d(e[u], t[u], u);
      (P.isUndefined(f) && d !== a) || (n[u] = f);
    }),
    n
  );
}
const wm = (e) => {
    const t = Fn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = tt.from(o)),
      (t.url = mm(xm(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
    let l;
    if (P.isFormData(n)) {
      if (Ze.hasStandardBrowserEnv || Ze.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [c, ...u] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([c || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      Ze.hasStandardBrowserEnv &&
      (r && P.isFunction(r) && (r = r(t)), r || (r !== !1 && zA(t.url)))
    ) {
      const c = s && i && WA.read(i);
      c && o.set(s, c);
    }
    return t;
  },
  GA = typeof XMLHttpRequest < "u",
  qA =
    GA &&
    function (e) {
      return new Promise(function (n, r) {
        const s = wm(e);
        let i = s.data;
        const o = tt.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = s,
          u,
          d,
          f,
          g,
          m;
        function h() {
          g && g(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener("abort", u);
        }
        let y = new XMLHttpRequest();
        y.open(s.method.toUpperCase(), s.url, !0), (y.timeout = s.timeout);
        function b() {
          if (!y) return;
          const _ = tt.from(
              "getAllResponseHeaders" in y && y.getAllResponseHeaders()
            ),
            w = {
              data:
                !a || a === "text" || a === "json"
                  ? y.responseText
                  : y.response,
              status: y.status,
              statusText: y.statusText,
              headers: _,
              config: e,
              request: y,
            };
          bm(
            function (A) {
              n(A), h();
            },
            function (A) {
              r(A), h();
            },
            w
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
              (r(new re("Request aborted", re.ECONNABORTED, e, y)), (y = null));
          }),
          (y.onerror = function () {
            r(new re("Network Error", re.ERR_NETWORK, e, y)), (y = null);
          }),
          (y.ontimeout = function () {
            let E = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = s.transitional || gm;
            s.timeoutErrorMessage && (E = s.timeoutErrorMessage),
              r(
                new re(
                  E,
                  w.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
                  e,
                  y
                )
              ),
              (y = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in y &&
            P.forEach(o.toJSON(), function (E, w) {
              y.setRequestHeader(w, E);
            }),
          P.isUndefined(s.withCredentials) ||
            (y.withCredentials = !!s.withCredentials),
          a && a !== "json" && (y.responseType = s.responseType),
          c && (([f, m] = xi(c, !0)), y.addEventListener("progress", f)),
          l &&
            y.upload &&
            (([d, g] = xi(l)),
            y.upload.addEventListener("progress", d),
            y.upload.addEventListener("loadend", g)),
          (s.cancelToken || s.signal) &&
            ((u = (_) => {
              y &&
                (r(!_ || _.type ? new vr(null, e, y) : _),
                y.abort(),
                (y = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal &&
              (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
        const x = BA(s.url);
        if (x && Ze.protocols.indexOf(x) === -1) {
          r(new re("Unsupported protocol " + x + ":", re.ERR_BAD_REQUEST, e));
          return;
        }
        y.send(i || null);
      });
    },
  KA = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (c) {
        if (!s) {
          (s = !0), a();
          const u = c instanceof Error ? c : this.reason;
          r.abort(
            u instanceof re ? u : new vr(u instanceof Error ? u.message : u)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new re(`timeout ${t} of ms exceeded`, re.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(i)
              : c.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", i));
      const { signal: l } = r;
      return (l.unsubscribe = () => P.asap(a)), l;
    }
  },
  XA = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  YA = async function* (e, t) {
    for await (const n of JA(e)) yield* XA(n, t);
  },
  JA = async function* (e) {
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
  sd = (e, t, n, r) => {
    const s = YA(e, t);
    let i = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: c, value: u } = await s.next();
            if (c) {
              a(), l.close();
              return;
            }
            let d = u.byteLength;
            if (n) {
              let f = (i += d);
              n(f);
            }
            l.enqueue(new Uint8Array(u));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(l) {
          return a(l), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ui =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  _m = Ui && typeof ReadableStream == "function",
  QA =
    Ui &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Sm = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  eC =
    _m &&
    Sm(() => {
      let e = !1;
      const t = new Request(Ze.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  id = 64 * 1024,
  la = _m && Sm(() => P.isReadableStream(new Response("").body)),
  wi = { stream: la && ((e) => e.body) };
Ui &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !wi[t] &&
        (wi[t] = P.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new re(
                `Response type '${t}' is not supported`,
                re.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const tC = async (e) => {
    if (e == null) return 0;
    if (P.isBlob(e)) return e.size;
    if (P.isSpecCompliantForm(e))
      return (
        await new Request(Ze.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (P.isArrayBufferView(e) || P.isArrayBuffer(e)) return e.byteLength;
    if ((P.isURLSearchParams(e) && (e = e + ""), P.isString(e)))
      return (await QA(e)).byteLength;
  },
  nC = async (e, t) => {
    const n = P.toFiniteNumber(e.getContentLength());
    return n ?? tC(t);
  },
  rC =
    Ui &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = wm(e);
      c = c ? (c + "").toLowerCase() : "text";
      let g = KA([s, i && i.toAbortSignal()], o),
        m;
      const h =
        g &&
        g.unsubscribe &&
        (() => {
          g.unsubscribe();
        });
      let y;
      try {
        if (
          l &&
          eC &&
          n !== "get" &&
          n !== "head" &&
          (y = await nC(u, r)) !== 0
        ) {
          let w = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (P.isFormData(r) &&
              (R = w.headers.get("content-type")) &&
              u.setContentType(R),
            w.body)
          ) {
            const [A, C] = td(y, xi(nd(l)));
            r = sd(w.body, id, A, C);
          }
        }
        P.isString(d) || (d = d ? "include" : "omit");
        const b = "credentials" in Request.prototype;
        m = new Request(t, {
          ...f,
          signal: g,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: b ? d : void 0,
        });
        let x = await fetch(m);
        const _ = la && (c === "stream" || c === "response");
        if (la && (a || (_ && h))) {
          const w = {};
          ["status", "statusText", "headers"].forEach((O) => {
            w[O] = x[O];
          });
          const R = P.toFiniteNumber(x.headers.get("content-length")),
            [A, C] = (a && td(R, xi(nd(a), !0))) || [];
          x = new Response(
            sd(x.body, id, A, () => {
              C && C(), h && h();
            }),
            w
          );
        }
        c = c || "text";
        let E = await wi[P.findKey(wi, c) || "text"](x, e);
        return (
          !_ && h && h(),
          await new Promise((w, R) => {
            bm(w, R, {
              data: E,
              headers: tt.from(x.headers),
              status: x.status,
              statusText: x.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (b) {
        throw (
          (h && h(),
          b && b.name === "TypeError" && /fetch/i.test(b.message)
            ? Object.assign(new re("Network Error", re.ERR_NETWORK, e, m), {
                cause: b.cause || b,
              })
            : re.from(b, b && b.code, e, m))
        );
      }
    }),
  ua = { http: vA, xhr: qA, fetch: rC };
P.forEach(ua, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const od = (e) => `- ${e}`,
  sC = (e) => P.isFunction(e) || e === null || e === !1,
  Em = {
    getAdapter: (e) => {
      e = P.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((r = n),
          !sC(n) && ((r = ua[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new re(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(od).join(`
`)
            : " " + od(i[0])
          : "as no adapter specified";
        throw new re(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ua,
  };
function To(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new vr(null, e);
}
function ad(e) {
  return (
    To(e),
    (e.headers = tt.from(e.headers)),
    (e.data = Eo.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Em.getAdapter(e.adapter || Es.adapter)(e).then(
      function (r) {
        return (
          To(e),
          (r.data = Eo.call(e, e.transformResponse, r)),
          (r.headers = tt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          vm(r) ||
            (To(e),
            r &&
              r.response &&
              ((r.response.data = Eo.call(e, e.transformResponse, r.response)),
              (r.response.headers = tt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Tm = "1.7.9",
  $i = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    $i[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const cd = {};
$i.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      Tm +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new re(
        s(o, " has been removed" + (n ? " in " + n : "")),
        re.ERR_DEPRECATED
      );
    return (
      n &&
        !cd[o] &&
        ((cd[o] = !0),
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
$i.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function iC(e, t, n) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        l = a === void 0 || o(a, i, e);
      if (l !== !0)
        throw new re("option " + i + " must be " + l, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new re("Unknown option " + i, re.ERR_BAD_OPTION);
  }
}
const Xs = { assertOptions: iC, validators: $i },
  kt = Xs.validators;
class Pn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Qu(), response: new Qu() });
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
      (n = Fn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      Xs.assertOptions(
        r,
        {
          silentJSONParsing: kt.transitional(kt.boolean),
          forcedJSONParsing: kt.transitional(kt.boolean),
          clarifyTimeoutError: kt.transitional(kt.boolean),
        },
        !1
      ),
      s != null &&
        (P.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Xs.assertOptions(
              s,
              { encode: kt.function, serialize: kt.function },
              !0
            )),
      Xs.assertOptions(
        n,
        {
          baseUrl: kt.spelling("baseURL"),
          withXsrfToken: kt.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && P.merge(i.common, i[n.method]);
    i &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete i[m];
        }
      ),
      (n.headers = tt.concat(o, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
        ((l = l && h.synchronous), a.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (h) {
      c.push(h.fulfilled, h.rejected);
    });
    let u,
      d = 0,
      f;
    if (!l) {
      const m = [ad.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, c),
          f = m.length,
          u = Promise.resolve(n);
        d < f;

      )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    f = a.length;
    let g = n;
    for (d = 0; d < f; ) {
      const m = a[d++],
        h = a[d++];
      try {
        g = m(g);
      } catch (y) {
        h.call(this, y);
        break;
      }
    }
    try {
      u = ad.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Fn(this.defaults, t);
    const n = xm(t.baseURL, t.url);
    return mm(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function (t) {
  Pn.prototype[t] = function (n, r) {
    return this.request(
      Fn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        Fn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (Pn.prototype[t] = n()), (Pn.prototype[t + "Form"] = n(!0));
});
class Pc {
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
        r.reason || ((r.reason = new vr(i, o, a)), n(r.reason));
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
      token: new Pc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function oC(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function aC(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const da = {
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
Object.entries(da).forEach(([e, t]) => {
  da[t] = e;
});
function Am(e) {
  const t = new Pn(e),
    n = rm(Pn.prototype.request, t);
  return (
    P.extend(n, Pn.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Am(Fn(e, s));
    }),
    n
  );
}
const Fe = Am(Es);
Fe.Axios = Pn;
Fe.CanceledError = vr;
Fe.CancelToken = Pc;
Fe.isCancel = vm;
Fe.VERSION = Tm;
Fe.toFormData = Bi;
Fe.AxiosError = re;
Fe.Cancel = Fe.CanceledError;
Fe.all = function (t) {
  return Promise.all(t);
};
Fe.spread = oC;
Fe.isAxiosError = aC;
Fe.mergeConfig = Fn;
Fe.AxiosHeaders = tt;
Fe.formToJSON = (e) => ym(P.isHTMLForm(e) ? new FormData(e) : e);
Fe.getAdapter = Em.getAdapter;
Fe.HttpStatusCode = da;
Fe.default = Fe;
const cC = be.object({
    type: be.string(),
    company_name: be
      .string()
      .min(3, { message: "Название компании должно быть не менее 3 символов" }),
    representative_name: be
      .string()
      .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),
    job_title: be
      .string()
      .min(3, { message: "Должность должна быть не менее 3 символов" }),
    participants_number: be
      .string()
      .min(1, { message: "Укажите количество участников" }),
    country: be
      .string()
      .min(3, { message: "Название страны должно быть не менее 3 символов" }),
    email_address: be.string().email({ message: "Укажите корректный email" }),
    phone_number: be
      .string()
      .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),
    website: be.string().optional(),
    meeting_objective: be.string().min(3, { message: "Укажите цель встречи" }),
    proposal_description: be.string().optional(),
    government_agency: be.string().optional(),
    sector_industry: be.string().optional(),
    key_services: be.string().optional(),
    government_experience: be.string().optional(),
    preferred_meeting_datetime: be.string().optional(),
    meeting_mode: be.string().optional(),
    language_preference: be.string().optional(),
    technical_requirements: be.string().optional(),
    company_profile: be
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    proposal_presentation: be
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    relevant_certification: be
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
  }),
  lC = {
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
var uC = "Label",
  Cm = v.forwardRef((e, t) =>
    p.jsx(Ae.label, {
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
Cm.displayName = uC;
var Rm = Cm;
const dC = wa(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Pm = v.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Rm, { ref: n, className: te(dC(), e), ...t })
  );
Pm.displayName = Rm.displayName;
const fC = eb,
  km = v.createContext({}),
  Nm = ({ ...e }) =>
    p.jsx(km.Provider, {
      value: { name: e.name },
      children: p.jsx(sb, { ...e }),
    }),
  zi = () => {
    const e = v.useContext(km),
      t = v.useContext(jm),
      { getFieldState: n, formState: r } = Un(),
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
  jm = v.createContext({}),
  Ur = v.forwardRef(({ className: e, ...t }, n) => {
    const r = v.useId();
    return p.jsx(jm.Provider, {
      value: { id: r },
      children: p.jsx("div", { ref: n, className: te("space-y-2", e), ...t }),
    });
  });
Ur.displayName = "FormItem";
const $r = v.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = zi();
  return p.jsx(Pm, {
    ref: n,
    className: te(r && "text-destructive", e),
    htmlFor: s,
    ...t,
  });
});
$r.displayName = "FormLabel";
const zr = v.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: i,
  } = zi();
  return p.jsx(on, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${s} ${i}` : `${s}`,
    "aria-invalid": !!n,
    ...e,
  });
});
zr.displayName = "FormControl";
const hC = v.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = zi();
  return p.jsx("p", {
    ref: n,
    id: r,
    className: te("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
hC.displayName = "FormDescription";
const Om = v.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: s, formMessageId: i } = zi(),
    o = s ? String(s == null ? void 0 : s.message) : t;
  return o
    ? p.jsx("p", {
        ref: r,
        id: i,
        className: te("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: o,
      })
    : null;
});
Om.displayName = "FormMessage";
function pC(e) {
  const t = e + "CollectionProvider",
    [n, r] = Vn(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (g) => {
      const { scope: m, children: h } = g,
        y = le.useRef(null),
        b = le.useRef(new Map()).current;
      return p.jsx(s, { scope: m, itemMap: b, collectionRef: y, children: h });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = le.forwardRef((g, m) => {
      const { scope: h, children: y } = g,
        b = i(a, h),
        x = Ve(m, b.collectionRef);
      return p.jsx(on, { ref: x, children: y });
    });
  l.displayName = a;
  const c = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    d = le.forwardRef((g, m) => {
      const { scope: h, children: y, ...b } = g,
        x = le.useRef(null),
        _ = Ve(m, x),
        E = i(c, h);
      return (
        le.useEffect(
          () => (
            E.itemMap.set(x, { ref: x, ...b }), () => void E.itemMap.delete(x)
          )
        ),
        p.jsx(on, { [u]: "", ref: _, children: y })
      );
    });
  d.displayName = c;
  function f(g) {
    const m = i(e + "CollectionConsumer", g);
    return le.useCallback(() => {
      const y = m.collectionRef.current;
      if (!y) return [];
      const b = Array.from(y.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (E, w) => b.indexOf(E.ref.current) - b.indexOf(w.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [{ Provider: o, Slot: l, ItemSlot: d }, f, r];
}
var mC = v.createContext(void 0);
function Dm(e) {
  const t = v.useContext(mC);
  return e || t || "ltr";
}
var Ao = "rovingFocusGroup.onEntryFocus",
  gC = { bubbles: !1, cancelable: !0 },
  Wi = "RovingFocusGroup",
  [fa, Mm, yC] = pC(Wi),
  [vC, Fm] = Vn(Wi, [yC]),
  [bC, xC] = vC(Wi),
  Lm = v.forwardRef((e, t) =>
    p.jsx(fa.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: p.jsx(fa.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(wC, { ...e, ref: t }),
      }),
    })
  );
Lm.displayName = Wi;
var wC = v.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: s = !1,
        dir: i,
        currentTabStopId: o,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: c,
        preventScrollOnEntryFocus: u = !1,
        ...d
      } = e,
      f = v.useRef(null),
      g = Ve(t, f),
      m = Dm(i),
      [h = null, y] = Ei({ prop: o, defaultProp: a, onChange: l }),
      [b, x] = v.useState(!1),
      _ = _t(c),
      E = Mm(n),
      w = v.useRef(!1),
      [R, A] = v.useState(0);
    return (
      v.useEffect(() => {
        const C = f.current;
        if (C)
          return C.addEventListener(Ao, _), () => C.removeEventListener(Ao, _);
      }, [_]),
      p.jsx(bC, {
        scope: n,
        orientation: r,
        dir: m,
        loop: s,
        currentTabStopId: h,
        onItemFocus: v.useCallback((C) => y(C), [y]),
        onItemShiftTab: v.useCallback(() => x(!0), []),
        onFocusableItemAdd: v.useCallback(() => A((C) => C + 1), []),
        onFocusableItemRemove: v.useCallback(() => A((C) => C - 1), []),
        children: p.jsx(Ae.div, {
          tabIndex: b || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: xe(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: xe(e.onFocus, (C) => {
            const O = !w.current;
            if (C.target === C.currentTarget && O && !b) {
              const M = new CustomEvent(Ao, gC);
              if ((C.currentTarget.dispatchEvent(M), !M.defaultPrevented)) {
                const U = E().filter((q) => q.focusable),
                  N = U.find((q) => q.active),
                  I = U.find((q) => q.id === h),
                  J = [N, I, ...U].filter(Boolean).map((q) => q.ref.current);
                Bm(J, u);
              }
            }
            w.current = !1;
          }),
          onBlur: xe(e.onBlur, () => x(!1)),
        }),
      })
    );
  }),
  Im = "RovingFocusGroupItem",
  Vm = v.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: s = !1,
        tabStopId: i,
        ...o
      } = e,
      a = Dr(),
      l = i || a,
      c = xC(Im, n),
      u = c.currentTabStopId === l,
      d = Mm(n),
      { onFocusableItemAdd: f, onFocusableItemRemove: g } = c;
    return (
      v.useEffect(() => {
        if (r) return f(), () => g();
      }, [r, f, g]),
      p.jsx(fa.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: s,
        children: p.jsx(Ae.span, {
          tabIndex: u ? 0 : -1,
          "data-orientation": c.orientation,
          ...o,
          ref: t,
          onMouseDown: xe(e.onMouseDown, (m) => {
            r ? c.onItemFocus(l) : m.preventDefault();
          }),
          onFocus: xe(e.onFocus, () => c.onItemFocus(l)),
          onKeyDown: xe(e.onKeyDown, (m) => {
            if (m.key === "Tab" && m.shiftKey) {
              c.onItemShiftTab();
              return;
            }
            if (m.target !== m.currentTarget) return;
            const h = EC(m, c.orientation, c.dir);
            if (h !== void 0) {
              if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
              m.preventDefault();
              let b = d()
                .filter((x) => x.focusable)
                .map((x) => x.ref.current);
              if (h === "last") b.reverse();
              else if (h === "prev" || h === "next") {
                h === "prev" && b.reverse();
                const x = b.indexOf(m.currentTarget);
                b = c.loop ? TC(b, x + 1) : b.slice(x + 1);
              }
              setTimeout(() => Bm(b));
            }
          }),
        }),
      })
    );
  });
Vm.displayName = Im;
var _C = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function SC(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function EC(e, t, n) {
  const r = SC(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return _C[r];
}
function Bm(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function TC(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var AC = Lm,
  CC = Vm;
function RC(e) {
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
var kc = "Radio",
  [PC, Um] = Vn(kc),
  [kC, NC] = PC(kc),
  $m = v.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: r,
        checked: s = !1,
        required: i,
        disabled: o,
        value: a = "on",
        onCheck: l,
        form: c,
        ...u
      } = e,
      [d, f] = v.useState(null),
      g = Ve(t, (y) => f(y)),
      m = v.useRef(!1),
      h = d ? c || !!d.closest("form") : !0;
    return p.jsxs(kC, {
      scope: n,
      checked: s,
      disabled: o,
      children: [
        p.jsx(Ae.button, {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": Hm(s),
          "data-disabled": o ? "" : void 0,
          disabled: o,
          value: a,
          ...u,
          ref: g,
          onClick: xe(e.onClick, (y) => {
            s || l == null || l(),
              h &&
                ((m.current = y.isPropagationStopped()),
                m.current || y.stopPropagation());
          }),
        }),
        h &&
          p.jsx(jC, {
            control: d,
            bubbles: !m.current,
            name: r,
            value: a,
            checked: s,
            required: i,
            disabled: o,
            form: c,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
$m.displayName = kc;
var zm = "RadioIndicator",
  Wm = v.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...s } = e,
      i = NC(zm, n);
    return p.jsx(Bn, {
      present: r || i.checked,
      children: p.jsx(Ae.span, {
        "data-state": Hm(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...s,
        ref: t,
      }),
    });
  });
Wm.displayName = zm;
var jC = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...s } = e,
    i = v.useRef(null),
    o = RC(n),
    a = sh(t);
  return (
    v.useEffect(() => {
      const l = i.current,
        c = window.HTMLInputElement.prototype,
        d = Object.getOwnPropertyDescriptor(c, "checked").set;
      if (o !== n && d) {
        const f = new Event("click", { bubbles: r });
        d.call(l, n), l.dispatchEvent(f);
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
function Hm(e) {
  return e ? "checked" : "unchecked";
}
var OC = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Nc = "RadioGroup",
  [DC, LR] = Vn(Nc, [Fm, Um]),
  Zm = Fm(),
  Gm = Um(),
  [MC, FC] = DC(Nc),
  qm = v.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: r,
        defaultValue: s,
        value: i,
        required: o = !1,
        disabled: a = !1,
        orientation: l,
        dir: c,
        loop: u = !0,
        onValueChange: d,
        ...f
      } = e,
      g = Zm(n),
      m = Dm(c),
      [h, y] = Ei({ prop: i, defaultProp: s, onChange: d });
    return p.jsx(MC, {
      scope: n,
      name: r,
      required: o,
      disabled: a,
      value: h,
      onValueChange: y,
      children: p.jsx(AC, {
        asChild: !0,
        ...g,
        orientation: l,
        dir: m,
        loop: u,
        children: p.jsx(Ae.div, {
          role: "radiogroup",
          "aria-required": o,
          "aria-orientation": l,
          "data-disabled": a ? "" : void 0,
          dir: m,
          ...f,
          ref: t,
        }),
      }),
    });
  });
qm.displayName = Nc;
var Km = "RadioGroupItem",
  Xm = v.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...s } = e,
      i = FC(Km, n),
      o = i.disabled || r,
      a = Zm(n),
      l = Gm(n),
      c = v.useRef(null),
      u = Ve(t, c),
      d = i.value === s.value,
      f = v.useRef(!1);
    return (
      v.useEffect(() => {
        const g = (h) => {
            OC.includes(h.key) && (f.current = !0);
          },
          m = () => (f.current = !1);
        return (
          document.addEventListener("keydown", g),
          document.addEventListener("keyup", m),
          () => {
            document.removeEventListener("keydown", g),
              document.removeEventListener("keyup", m);
          }
        );
      }, []),
      p.jsx(CC, {
        asChild: !0,
        ...a,
        focusable: !o,
        active: d,
        children: p.jsx($m, {
          disabled: o,
          required: i.required,
          checked: d,
          ...l,
          ...s,
          name: i.name,
          ref: u,
          onCheck: () => i.onValueChange(s.value),
          onKeyDown: xe((g) => {
            g.key === "Enter" && g.preventDefault();
          }),
          onFocus: xe(s.onFocus, () => {
            var g;
            f.current && ((g = c.current) == null || g.click());
          }),
        }),
      })
    );
  });
Xm.displayName = Km;
var LC = "RadioGroupIndicator",
  IC = v.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      s = Gm(n);
    return p.jsx(Wm, { ...s, ...r, ref: t });
  });
IC.displayName = LC;
var Ym = qm,
  Jm = Xm;
const Qm = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Ym, { className: te("grid gap-2", e), ...t, ref: n })
);
Qm.displayName = Ym.displayName;
const ha = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Jm, {
    ref: n,
    className: te(
      t.checked
        ? "border-primary after:bg-opacity-1"
        : "border-on_surface bg-transparent after:bg-opacity-0",
      "size-5 rounded-full border-[2px] after:size-[9px] after:bg-primary before:scale-0  hover:before:scale-100 before:size-10 before:rounded-full before:transition-all before:absolute before:-top-3 before:-left-3 before:bg-on_surface/[8%] duration-300 after:rounded-full flex relative items-center justify-center text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
  })
);
ha.displayName = Jm.displayName;
const Wt = [
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
  tn = [
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
  gt = [
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
  VC = ({ handleNext: e }) => {
    const { control: t, formState: n } = Un(),
      r = Be((s) => s.lang);
    return p.jsxs(Rn.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, y: "100%", transition: { duration: 0.2 } },
      className: "w-full",
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: Wt[X(r)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            p.jsx(Nm, {
              defaultValue: 1,
              control: t,
              name: "type",
              render: ({ field: s }) =>
                p.jsxs(Ur, {
                  className: "space-y-3",
                  children: [
                    p.jsx($r, {
                      className: "text-xl",
                      children: r === Ge.RU ? "Тип:" : "Type:",
                    }),
                    p.jsx(zr, {
                      children: p.jsxs(Qm, {
                        onValueChange: s.onChange,
                        defaultValue: s.value,
                        className: "flex flex-col space-y-4",
                        children: [
                          p.jsxs(Ur, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              p.jsx(zr, {
                                children: p.jsx(ha, {
                                  value: "B2B",
                                  checked: s.value === "B2B",
                                }),
                              }),
                              p.jsx($r, {
                                className: "text-base",
                                children: "B2B",
                              }),
                            ],
                          }),
                          p.jsxs(Ur, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              p.jsx(zr, {
                                children: p.jsx(ha, {
                                  value: "B2G",
                                  checked: s.value === "B2G",
                                }),
                              }),
                              p.jsx($r, {
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
            p.jsx(Ne, {
              control: t,
              name: "company_name",
              error: n.errors.company_name,
              placeholder: "",
              label: Wt[X(r)].data[0].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "representative_name",
              error: n.errors.representative_name,
              placeholder: "",
              label: Wt[X(r)].data[1].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "job_title",
              error: n.errors.job_title,
              placeholder: "",
              label: Wt[X(r)].data[2].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "participants_number",
              error: n.errors.participants_number,
              placeholder: "",
              label: Wt[X(r)].data[3].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "country",
              error: n.errors.country,
              placeholder: "",
              label: Wt[X(r)].data[4].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "email_address",
              error: n.errors.email_address,
              placeholder: "",
              label: Wt[X(r)].data[5].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "phone_number",
              error: n.errors.phone_number,
              placeholder: "",
              label: Wt[X(r)].data[6].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "website",
              placeholder: "",
              label: Wt[X(r)].data[7].label,
            }),
          ],
        }),
        p.jsx($e, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: r === Ge.RU ? "Далее" : "Next",
        }),
      ],
    });
  },
  BC = ({ handleNext: e }) => {
    const { control: t, formState: n } = Un(),
      r = Be((s) => s.lang);
    return p.jsxs(Rn.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      exit: { opacity: 0, y: 100 },
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: tn[X(r)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            p.jsx(Ne, {
              control: t,
              name: "meeting_objective",
              error: n.errors.meeting_objective,
              placeholder: "",
              label: tn[X(r)].data[0].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "proposal_description",
              error: n.errors.proposal_description,
              placeholder: "",
              label: tn[X(r)].data[1].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "government_agency",
              error: n.errors.government_agency,
              placeholder: "",
              label: tn[X(r)].data[2].label,
            }),
            p.jsx("h2", { className: "h2 mt-4", children: tn[X(r)].secondH2 }),
            p.jsx(Ne, {
              control: t,
              name: "sector_industry",
              error: n.errors.sector_industry,
              placeholder: "",
              label: tn[X(r)].data[3].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "key_services",
              error: n.errors.key_services,
              placeholder: "",
              label: tn[X(r)].data[4].label,
            }),
            p.jsx(Ne, {
              control: t,
              name: "government_experience",
              error: n.errors.government_experience,
              placeholder: "",
              label: tn[X(r)].data[5].label,
            }),
          ],
        }),
        p.jsx($e, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: r === Ge.RU ? "Далее" : "Next",
        }),
      ],
    });
  },
  pa = v.forwardRef(({ className: e, type: t, ...n }, r) =>
    t !== "file"
      ? p.jsx("input", {
          type: t,
          className: te(
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
              className: te(
                "h-9 absolute top-0 left-0 !cursor-pointer opacity-0 z-20 size-full"
              ),
              ...n,
            }),
            p.jsxs("div", {
              className:
                "absolute rounded-[2px] cursor-pointer size-full flex items-center gap-4 px-3 py-2.5 top-0 left-0 bg-secondary_container",
              children: [
                p.jsx(ay, { className: "cursor-pointer", size: 16 }),
                " Upload file",
              ],
            }),
          ],
        })
  );
pa.displayName = "Input";
const eg = v.forwardRef(({ className: e, ...t }, n) =>
  p.jsx("textarea", {
    className: te(
      "flex rounded-[2px] resize-none  border p-4 focus:border-[3px] focus:outline-none focus:border-primary transition-all hover:border-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
eg.displayName = "Textarea";
const Ne = ({
    control: e,
    name: t,
    label: n,
    placeholder: r,
    error: s,
    type: i = "text",
    className: o,
    disabled: a,
    textArea: l = !1,
    textDark: c,
    supporText: u,
    handleChange: d,
    onPrimary: f = !1,
  }) =>
    p.jsx(Nm, {
      control: e,
      name: t,
      render: ({ field: g }) =>
        p.jsxs(Ur, {
          className: te(o, "flex flex-col w-full relative"),
          children: [
            p.jsx($r, {
              className: te(
                "text-xl",
                f && "!text-on_primary",
                c ? "text-on_surface" : "text-on_surface_v"
              ),
              children: n,
            }),
            p.jsx(zr, {
              children: p.jsx(p.Fragment, {
                children: l
                  ? p.jsx(eg, {
                      rows: 3,
                      ...g,
                      placeholder: r,
                      className: te(
                        s && "border-[#BA1A1A]",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : i !== "file"
                  ? p.jsx(pa, {
                      ...g,
                      type: i,
                      placeholder: r,
                      disabled: a,
                      className: te(
                        s && "border-[#BA1A1A]",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : p.jsxs("div", {
                      className: "relative",
                      children: [
                        p.jsx(pa, {
                          type: "file",
                          placeholder: r,
                          onChange: (m) => {
                            var y;
                            const h =
                              ((y = m.target.files) == null ? void 0 : y[0]) ||
                              null;
                            console.log("Выбранный файл:", h),
                              g.onChange(h),
                              d && d(m);
                          },
                          disabled: a,
                        }),
                        g.value &&
                          p.jsxs("div", {
                            className:
                              "text-sm mt-2 text-gray-500 absolute top-8",
                            children: ["Выбранный файл: ", g.value.name],
                          }),
                      ],
                    }),
              }),
            }),
            p.jsx(Om, {
              className: te(
                "absolute -bottom-5 left-0 text-sm font-medium leading-[130%]",
                s && f ? "text-teritary_04" : "text-[#BA1A1A]"
              ),
              children: s ? s.message : u,
            }),
          ],
        }),
    }),
  UC = () => {
    const { control: e, formState: t } = Un(),
      n = Be((r) => r.lang);
    return p.jsxs(Rn.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      transition: { duration: 1 },
      children: [
        p.jsx("h2", { className: "h2 mb-8", children: gt[X(n)].h2 }),
        p.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            p.jsx(Ne, {
              control: e,
              name: "preferred_meeting_datetime",
              error: t.errors.preferred_meeting_datetime,
              placeholder: "",
              label: gt[X(n)].data[0].label,
            }),
            p.jsx(Ne, {
              control: e,
              name: "preferred_mode",
              error: t.errors.preferred_mode,
              placeholder: "",
              label: gt[X(n)].data[1].label,
            }),
            p.jsx(Ne, {
              control: e,
              name: "language_preference",
              error: t.errors.language_preference,
              placeholder: "",
              label: gt[X(n)].data[2].label,
            }),
            p.jsx(Ne, {
              control: e,
              name: "additional_technical",
              error: t.errors.additional_technical,
              placeholder: "",
              label: gt[X(n)].data[3].label,
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
                  children: gt[X(n)].secondH2,
                }),
                p.jsx("h5", {
                  className: "text-on_surface_v",
                  children: gt[X(n)].subtitle,
                }),
              ],
            }),
            p.jsx(Ne, {
              control: e,
              name: "company_profile",
              label: gt[X(n)].data[4].label,
              type: "file",
              textDark: !0,
            }),
            p.jsx(Ne, {
              control: e,
              name: "proposal_presentation",
              label: gt[X(n)].data[5].label,
              type: "file",
              textDark: !0,
            }),
            p.jsx(Ne, {
              control: e,
              name: "relevant_certification",
              label: gt[X(n)].data[6].label,
              type: "file",
              textDark: !0,
            }),
          ],
        }),
        p.jsx($e, {
          disabled: t.isSubmitting,
          type: "submit",
          className: "w-full mt-10",
          children: t.isSubmitting
            ? p.jsx(ty, { className: "animate-spin" })
            : gt[X(n)].button,
        }),
      ],
    });
  },
  IR = ({ stage: e, setStage: t }) => {
    const [n, r] = v.useState(!1),
      s = Nf({ resolver: Of(cC), defaultValues: lC, mode: "onChange" }),
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
        (await s.trigger(l)) && t((u) => u + 1);
      },
      a = async (l) => {
        try {
          const c = new FormData();
          Object.entries(l).forEach(([d, f]) => {
            f instanceof File
              ? (console.log(`Добавляем файл: ${d}`, f), c.append(d, f))
              : f !== void 0 &&
                (console.log(`Добавляем поле: ${d}`, f), c.append(d, f));
          }),
            (
              await Fe.post("https://itse.turkmenexpo.com/app/api/v1/form", c, {
                headers: { "Content-Type": "multipart/form-data" },
              })
            ).status === 201 &&
              (console.log("Форма успешно отправлена!"), r(!0));
        } catch (c) {
          console.error("Ошибка при отправке B2B формы:", c);
        }
      };
    return p.jsx(fC, {
      ...s,
      children: p.jsx("form", {
        onSubmit: s.handleSubmit(a),
        children: p.jsxs("div", {
          className: "relative",
          children: [
            p.jsx(co, { children: e === 1 && p.jsx(VC, { handleNext: o }) }),
            p.jsx(co, { children: e === 2 && p.jsx(BC, { handleNext: o }) }),
            p.jsx(co, { children: e === 3 && n === !1 && p.jsx(UC, {}) }),
            n && p.jsx(HC, {}),
          ],
        }),
      }),
    });
  };
var Co, ld;
function $C() {
  if (ld) return Co;
  ld = 1;
  var e = "Expected a function",
    t = NaN,
    n = "[object Symbol]",
    r = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    a = parseInt,
    l = typeof Rs == "object" && Rs && Rs.Object === Object && Rs,
    c = typeof self == "object" && self && self.Object === Object && self,
    u = l || c || Function("return this")(),
    d = Object.prototype,
    f = d.toString,
    g = Math.max,
    m = Math.min,
    h = function () {
      return u.Date.now();
    };
  function y(w, R, A) {
    var C,
      O,
      M,
      U,
      N,
      I,
      z = 0,
      J = !1,
      q = !1,
      H = !0;
    if (typeof w != "function") throw new TypeError(e);
    (R = E(R) || 0),
      b(A) &&
        ((J = !!A.leading),
        (q = "maxWait" in A),
        (M = q ? g(E(A.maxWait) || 0, R) : M),
        (H = "trailing" in A ? !!A.trailing : H));
    function W(ce) {
      var pe = C,
        Ce = O;
      return (C = O = void 0), (z = ce), (U = w.apply(Ce, pe)), U;
    }
    function ne(ce) {
      return (z = ce), (N = setTimeout(ze, R)), J ? W(ce) : U;
    }
    function fe(ce) {
      var pe = ce - I,
        Ce = ce - z,
        Oe = R - pe;
      return q ? m(Oe, M - Ce) : Oe;
    }
    function he(ce) {
      var pe = ce - I,
        Ce = ce - z;
      return I === void 0 || pe >= R || pe < 0 || (q && Ce >= M);
    }
    function ze() {
      var ce = h();
      if (he(ce)) return nt(ce);
      N = setTimeout(ze, fe(ce));
    }
    function nt(ce) {
      return (N = void 0), H && C ? W(ce) : ((C = O = void 0), U);
    }
    function We() {
      N !== void 0 && clearTimeout(N), (z = 0), (C = I = O = N = void 0);
    }
    function mt() {
      return N === void 0 ? U : nt(h());
    }
    function Xe() {
      var ce = h(),
        pe = he(ce);
      if (((C = arguments), (O = this), (I = ce), pe)) {
        if (N === void 0) return ne(I);
        if (q) return (N = setTimeout(ze, R)), W(I);
      }
      return N === void 0 && (N = setTimeout(ze, R)), U;
    }
    return (Xe.cancel = We), (Xe.flush = mt), Xe;
  }
  function b(w) {
    var R = typeof w;
    return !!w && (R == "object" || R == "function");
  }
  function x(w) {
    return !!w && typeof w == "object";
  }
  function _(w) {
    return typeof w == "symbol" || (x(w) && f.call(w) == n);
  }
  function E(w) {
    if (typeof w == "number") return w;
    if (_(w)) return t;
    if (b(w)) {
      var R = typeof w.valueOf == "function" ? w.valueOf() : w;
      w = b(R) ? R + "" : R;
    }
    if (typeof w != "string") return w === 0 ? w : +w;
    w = w.replace(r, "");
    var A = i.test(w);
    return A || o.test(w) ? a(w.slice(2), A ? 2 : 8) : s.test(w) ? t : +w;
  }
  return (Co = y), Co;
}
$C();
var zC = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  WC = typeof window > "u";
function ma(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
  const r = (a) => (WC ? t : window.matchMedia(a).matches),
    [s, i] = v.useState(() => (n ? r(e) : t));
  function o() {
    i(r(e));
  }
  return (
    zC(() => {
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
const VR = ({ className: e, stage: t }) => {
    const n = ma("(min-width: 768px");
    return p.jsx("div", {
      className: e,
      children: p.jsx("div", {
        className: "max-w-[808px] md:mx-auto my-20 mx-5",
        children: p.jsxs("div", {
          className: "relative h-14 w-full",
          children: [
            p.jsx("div", {
              className: te(
                "h-2 absolute bg-[#D0D3D8] rounded-[2px] w-full top-0 left-0"
              ),
            }),
            p.jsx(Rn.div, {
              initial: { width: 0 },
              animate: t === 2 ? { width: "20%" } : t === 3 && { width: "75%" },
              transition: { delay: 0.5, duration: 0.5 },
              className: te(
                "h-2 absolute bg-primary rounded-[2px] top-0 left-0 z-[5]",
                { "w-[20%]": t === 2, "w-[75%]": t === 3 }
              ),
            }),
            p.jsx(Rn.div, {
              initial: { width: n ? "50%" : "35%" },
              animate:
                t === 2 ? { width: "75%" } : t === 3 && { width: "100%" },
              className: te(
                "bg-primary_container w-1/2 absolute top-0 left-0 rounded-[2px] z-[3] h-2"
              ),
            }),
            p.jsx(Rn.div, {
              className: te(
                "progress-circle absolute transition-all duration-500 -top-6 flex items-center justify-center",
                {
                  "bg-primary_container md:left-1/2 left-1/3": t === 1,
                  "bg-primary left-[20%] !text-on_primary": t === 2 || t === 3,
                }
              ),
              children: "1",
            }),
            p.jsx("div", {
              className: te(
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
              className: te(
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
  HC = ({ className: e, delay: t = 0.15 }) =>
    p.jsxs(Rn.div, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: t } },
      className: te("flex flex-col gap-8 my-16", e),
      children: [
        p.jsx("h3", {
          className: "text-3xl text-center",
          children: "Форма успешно отправлена!",
        }),
        p.jsx(Me, {
          className: "w-fit mx-auto",
          to: "/",
          children: p.jsx($e, {
            variant: "outline",
            children: "Вернуться на главную",
          }),
        }),
      ],
    }),
  BR = ({ title: e }) =>
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
    });
function ZC(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ud(e) {
  return ZC(e) || Array.isArray(e);
}
function GC() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function jc(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const s = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== i
    ? !1
    : n.every((o) => {
        const a = e[o],
          l = t[o];
        return typeof a == "function"
          ? `${a}` == `${l}`
          : !ud(a) || !ud(l)
          ? a === l
          : jc(a, l);
      });
}
function dd(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function qC(e, t) {
  if (e.length !== t.length) return !1;
  const n = dd(e),
    r = dd(t);
  return n.every((s, i) => {
    const o = r[i];
    return jc(s, o);
  });
}
function Oc(e) {
  return typeof e == "number";
}
function ga(e) {
  return typeof e == "string";
}
function Hi(e) {
  return typeof e == "boolean";
}
function fd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ee(e) {
  return Math.abs(e);
}
function Dc(e) {
  return Math.sign(e);
}
function Wr(e, t) {
  return Ee(e - t);
}
function KC(e, t) {
  if (e === 0 || t === 0 || Ee(e) <= Ee(t)) return 0;
  const n = Wr(Ee(e), Ee(t));
  return Ee(n / e);
}
function XC(e) {
  return Math.round(e * 100) / 100;
}
function fs(e) {
  return hs(e).map(Number);
}
function wt(e) {
  return e[Ts(e)];
}
function Ts(e) {
  return Math.max(0, e.length - 1);
}
function Mc(e, t) {
  return t === Ts(e);
}
function hd(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function hs(e) {
  return Object.keys(e);
}
function tg(e, t) {
  return [e, t].reduce(
    (n, r) => (
      hs(r).forEach((s) => {
        const i = n[s],
          o = r[s],
          a = fd(i) && fd(o);
        n[s] = a ? tg(i, o) : o;
      }),
      n
    ),
    {}
  );
}
function ya(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function YC(e, t) {
  const n = { start: r, center: s, end: i };
  function r() {
    return 0;
  }
  function s(l) {
    return i(l) / 2;
  }
  function i(l) {
    return t - l;
  }
  function o(l, c) {
    return ga(e) ? n[e](l) : e(t, l, c);
  }
  return { measure: o };
}
function ps() {
  let e = [];
  function t(s, i, o, a = { passive: !0 }) {
    let l;
    if ("addEventListener" in s)
      s.addEventListener(i, o, a), (l = () => s.removeEventListener(i, o, a));
    else {
      const c = s;
      c.addListener(o), (l = () => c.removeListener(o));
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((s) => s());
  }
  const r = { add: t, clear: n };
  return r;
}
function JC(e, t, n, r) {
  const s = ps(),
    i = 1e3 / 60;
  let o = null,
    a = 0,
    l = 0;
  function c() {
    s.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function u() {
    g(), s.clear();
  }
  function d(y) {
    if (!l) return;
    o || ((o = y), n(), n());
    const b = y - o;
    for (o = y, a += b; a >= i; ) n(), (a -= i);
    const x = a / i;
    r(x), l && (l = t.requestAnimationFrame(d));
  }
  function f() {
    l || (l = t.requestAnimationFrame(d));
  }
  function g() {
    t.cancelAnimationFrame(l), (o = null), (a = 0), (l = 0);
  }
  function m() {
    (o = null), (a = 0);
  }
  return { init: c, destroy: u, start: f, stop: g, update: n, render: r };
}
function QC(e, t) {
  const n = t === "rtl",
    r = e === "y",
    s = r ? "y" : "x",
    i = r ? "x" : "y",
    o = !r && n ? -1 : 1,
    a = u(),
    l = d();
  function c(m) {
    const { height: h, width: y } = m;
    return r ? h : y;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function f(m) {
    return m * o;
  }
  return {
    scroll: s,
    cross: i,
    startEdge: a,
    endEdge: l,
    measureSize: c,
    direction: f,
  };
}
function Ln(e = 0, t = 0) {
  const n = Ee(e - t);
  function r(c) {
    return c < e;
  }
  function s(c) {
    return c > t;
  }
  function i(c) {
    return r(c) || s(c);
  }
  function o(c) {
    return i(c) ? (r(c) ? e : t) : c;
  }
  function a(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
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
function ng(e, t, n) {
  const { constrain: r } = Ln(0, e),
    s = e + 1;
  let i = o(t);
  function o(f) {
    return n ? Ee((s + f) % s) : r(f);
  }
  function a() {
    return i;
  }
  function l(f) {
    return (i = o(f)), d;
  }
  function c(f) {
    return u().set(a() + f);
  }
  function u() {
    return ng(e, a(), n);
  }
  const d = { get: a, set: l, add: c, clone: u };
  return d;
}
function eR(e, t, n, r, s, i, o, a, l, c, u, d, f, g, m, h, y, b, x) {
  const { cross: _, direction: E } = e,
    w = ["INPUT", "SELECT", "TEXTAREA"],
    R = { passive: !1 },
    A = ps(),
    C = ps(),
    O = Ln(50, 225).constrain(g.measure(20)),
    M = { mouse: 300, touch: 400 },
    U = { mouse: 500, touch: 600 },
    N = m ? 43 : 25;
  let I = !1,
    z = 0,
    J = 0,
    q = !1,
    H = !1,
    W = !1,
    ne = !1;
  function fe(Z) {
    if (!x) return;
    function ue(Ie) {
      (Hi(x) || x(Z, Ie)) && Xe(Ie);
    }
    const ye = t;
    A.add(ye, "dragstart", (Ie) => Ie.preventDefault(), R)
      .add(ye, "touchmove", () => {}, R)
      .add(ye, "touchend", () => {})
      .add(ye, "touchstart", ue)
      .add(ye, "mousedown", ue)
      .add(ye, "touchcancel", pe)
      .add(ye, "contextmenu", pe)
      .add(ye, "click", Ce, !0);
  }
  function he() {
    A.clear(), C.clear();
  }
  function ze() {
    const Z = ne ? n : t;
    C.add(Z, "touchmove", ce, R)
      .add(Z, "touchend", pe)
      .add(Z, "mousemove", ce, R)
      .add(Z, "mouseup", pe);
  }
  function nt(Z) {
    const ue = Z.nodeName || "";
    return w.includes(ue);
  }
  function We() {
    return (m ? U : M)[ne ? "mouse" : "touch"];
  }
  function mt(Z, ue) {
    const ye = d.add(Dc(Z) * -1),
      Ie = u.byDistance(Z, !m).distance;
    return m || Ee(Z) < O
      ? Ie
      : y && ue
      ? Ie * 0.5
      : u.byIndex(ye.get(), 0).distance;
  }
  function Xe(Z) {
    const ue = ya(Z, r);
    (ne = ue),
      (W = m && ue && !Z.buttons && I),
      (I = Wr(s.get(), o.get()) >= 2),
      !(ue && Z.button !== 0) &&
        (nt(Z.target) ||
          ((q = !0),
          i.pointerDown(Z),
          c.useFriction(0).useDuration(0),
          s.set(o),
          ze(),
          (z = i.readPoint(Z)),
          (J = i.readPoint(Z, _)),
          f.emit("pointerDown")));
  }
  function ce(Z) {
    if (!ya(Z, r) && Z.touches.length >= 2) return pe(Z);
    const ye = i.readPoint(Z),
      Ie = i.readPoint(Z, _),
      rt = Wr(ye, z),
      dt = Wr(Ie, J);
    if (!H && !ne && (!Z.cancelable || ((H = rt > dt), !H))) return pe(Z);
    const S = i.pointerMove(Z);
    rt > h && (W = !0),
      c.useFriction(0.3).useDuration(0.75),
      a.start(),
      s.add(E(S)),
      Z.preventDefault();
  }
  function pe(Z) {
    const ye = u.byDistance(0, !1).index !== d.get(),
      Ie = i.pointerUp(Z) * We(),
      rt = mt(E(Ie), ye),
      dt = KC(Ie, rt),
      S = N - 10 * dt,
      T = b + dt / 50;
    (H = !1),
      (q = !1),
      C.clear(),
      c.useDuration(S).useFriction(T),
      l.distance(rt, !m),
      (ne = !1),
      f.emit("pointerUp");
  }
  function Ce(Z) {
    W && (Z.stopPropagation(), Z.preventDefault(), (W = !1));
  }
  function Oe() {
    return q;
  }
  return { init: fe, destroy: he, pointerDown: Oe };
}
function tR(e, t) {
  let r, s;
  function i(d) {
    return d.timeStamp;
  }
  function o(d, f) {
    const m = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (ya(d, t) ? d : d.touches[0])[m];
  }
  function a(d) {
    return (r = d), (s = d), o(d);
  }
  function l(d) {
    const f = o(d) - o(s),
      g = i(d) - i(r) > 170;
    return (s = d), g && (r = d), f;
  }
  function c(d) {
    if (!r || !s) return 0;
    const f = o(s) - o(r),
      g = i(d) - i(r),
      m = i(d) - i(s) > 170,
      h = f / g;
    return g && !m && Ee(h) > 0.1 ? h : 0;
  }
  return { pointerDown: a, pointerMove: l, pointerUp: c, readPoint: o };
}
function nR() {
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
function rR(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function sR(e, t, n, r, s, i, o) {
  const a = [e].concat(r);
  let l,
    c,
    u = [],
    d = !1;
  function f(y) {
    return s.measureSize(o.measure(y));
  }
  function g(y) {
    if (!i) return;
    (c = f(e)), (u = r.map(f));
    function b(x) {
      for (const _ of x) {
        if (d) return;
        const E = _.target === e,
          w = r.indexOf(_.target),
          R = E ? c : u[w],
          A = f(E ? e : r[w]);
        if (Ee(A - R) >= 0.5) {
          y.reInit(), t.emit("resize");
          break;
        }
      }
    }
    (l = new ResizeObserver((x) => {
      (Hi(i) || i(y, x)) && b(x);
    })),
      n.requestAnimationFrame(() => {
        a.forEach((x) => l.observe(x));
      });
  }
  function m() {
    (d = !0), l && l.disconnect();
  }
  return { init: g, destroy: m };
}
function iR(e, t, n, r, s, i) {
  let o = 0,
    a = 0,
    l = s,
    c = i,
    u = e.get(),
    d = 0;
  function f() {
    const R = r.get() - e.get(),
      A = !l;
    let C = 0;
    return (
      A
        ? ((o = 0), n.set(r), e.set(r), (C = R))
        : (n.set(e), (o += R / l), (o *= c), (u += o), e.add(o), (C = u - d)),
      (a = Dc(C)),
      (d = u),
      w
    );
  }
  function g() {
    const R = r.get() - t.get();
    return Ee(R) < 0.001;
  }
  function m() {
    return l;
  }
  function h() {
    return a;
  }
  function y() {
    return o;
  }
  function b() {
    return _(s);
  }
  function x() {
    return E(i);
  }
  function _(R) {
    return (l = R), w;
  }
  function E(R) {
    return (c = R), w;
  }
  const w = {
    direction: h,
    duration: m,
    velocity: y,
    seek: f,
    settled: g,
    useBaseFriction: x,
    useBaseDuration: b,
    useFriction: E,
    useDuration: _,
  };
  return w;
}
function oR(e, t, n, r, s) {
  const i = s.measure(10),
    o = s.measure(50),
    a = Ln(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(g) {
    if (!c()) return;
    const m = e.reachedMin(t.get()) ? "min" : "max",
      h = Ee(e[m] - t.get()),
      y = n.get() - t.get(),
      b = a.constrain(h / o);
    n.subtract(y * b),
      !g &&
        Ee(y) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(g) {
    l = !g;
  }
  return { shouldConstrain: c, constrain: u, toggleActive: d };
}
function aR(e, t, n, r, s) {
  const i = Ln(-t + e, 0),
    o = d(),
    a = u(),
    l = f();
  function c(m, h) {
    return Wr(m, h) <= 1;
  }
  function u() {
    const m = o[0],
      h = wt(o),
      y = o.lastIndexOf(m),
      b = o.indexOf(h) + 1;
    return Ln(y, b);
  }
  function d() {
    return n
      .map((m, h) => {
        const { min: y, max: b } = i,
          x = i.constrain(m),
          _ = !h,
          E = Mc(n, h);
        return _ ? b : E || c(y, x) ? y : c(b, x) ? b : x;
      })
      .map((m) => parseFloat(m.toFixed(3)));
  }
  function f() {
    if (t <= e + s) return [i.max];
    if (r === "keepSnaps") return o;
    const { min: m, max: h } = a;
    return o.slice(m, h);
  }
  return { snapsContained: l, scrollContainLimit: a };
}
function cR(e, t, n) {
  const r = t[0],
    s = n ? r - e : wt(t);
  return { limit: Ln(s, r) };
}
function lR(e, t, n, r) {
  const i = t.min + 0.1,
    o = t.max + 0.1,
    { reachedMin: a, reachedMax: l } = Ln(i, o);
  function c(f) {
    return f === 1 ? l(n.get()) : f === -1 ? a(n.get()) : !1;
  }
  function u(f) {
    if (!c(f)) return;
    const g = e * (f * -1);
    r.forEach((m) => m.add(g));
  }
  return { loop: u };
}
function uR(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const o = i - t;
    return n ? o / -n : 0;
  }
  return { get: r };
}
function dR(e, t, n, r, s) {
  const { startEdge: i, endEdge: o } = e,
    { groupSlides: a } = s,
    l = d().map(t.measure),
    c = f(),
    u = g();
  function d() {
    return a(r)
      .map((h) => wt(h)[o] - h[0][i])
      .map(Ee);
  }
  function f() {
    return r.map((h) => n[i] - h[i]).map((h) => -Ee(h));
  }
  function g() {
    return a(c)
      .map((h) => h[0])
      .map((h, y) => h + l[y]);
  }
  return { snaps: c, snapsAligned: u };
}
function fR(e, t, n, r, s, i) {
  const { groupSlides: o } = s,
    { min: a, max: l } = r,
    c = u();
  function u() {
    const f = o(i),
      g = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : g
      ? f
      : f.slice(a, l).map((m, h, y) => {
          const b = !h,
            x = Mc(y, h);
          if (b) {
            const _ = wt(y[0]) + 1;
            return hd(_);
          }
          if (x) {
            const _ = Ts(i) - wt(y)[0] + 1;
            return hd(_, wt(y)[0]);
          }
          return m;
        });
  }
  return { slideRegistry: c };
}
function hR(e, t, n, r, s) {
  const { reachedAny: i, removeOffset: o, constrain: a } = r;
  function l(m) {
    return m.concat().sort((h, y) => Ee(h) - Ee(y))[0];
  }
  function c(m) {
    const h = e ? o(m) : a(m),
      y = t
        .map((x, _) => ({ diff: u(x - h, 0), index: _ }))
        .sort((x, _) => Ee(x.diff) - Ee(_.diff)),
      { index: b } = y[0];
    return { index: b, distance: h };
  }
  function u(m, h) {
    const y = [m, m + n, m - n];
    if (!e) return m;
    if (!h) return l(y);
    const b = y.filter((x) => Dc(x) === h);
    return b.length ? l(b) : wt(y) - n;
  }
  function d(m, h) {
    const y = t[m] - s.get(),
      b = u(y, h);
    return { index: m, distance: b };
  }
  function f(m, h) {
    const y = s.get() + m,
      { index: b, distance: x } = c(y),
      _ = !e && i(y);
    if (!h || _) return { index: b, distance: m };
    const E = t[b] - x,
      w = m + u(E, 0);
    return { index: b, distance: w };
  }
  return { byDistance: f, byIndex: d, shortcut: u };
}
function pR(e, t, n, r, s, i, o) {
  function a(d) {
    const f = d.distance,
      g = d.index !== t.get();
    i.add(f),
      f && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      g && (n.set(t.get()), t.set(d.index), o.emit("select"));
  }
  function l(d, f) {
    const g = s.byDistance(d, f);
    a(g);
  }
  function c(d, f) {
    const g = t.clone().set(d),
      m = s.byIndex(g.get(), f);
    a(m);
  }
  return { distance: l, index: c };
}
function mR(e, t, n, r, s, i, o, a) {
  const l = { passive: !0, capture: !0 };
  let c = 0;
  function u(g) {
    if (!a) return;
    function m(h) {
      if (new Date().getTime() - c > 10) return;
      o.emit("slideFocusStart"), (e.scrollLeft = 0);
      const x = n.findIndex((_) => _.includes(h));
      Oc(x) && (s.useDuration(0), r.index(x, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", d, !1),
      t.forEach((h, y) => {
        i.add(
          h,
          "focus",
          (b) => {
            (Hi(a) || a(g, b)) && m(y);
          },
          l
        );
      });
  }
  function d(g) {
    g.code === "Tab" && (c = new Date().getTime());
  }
  return { init: u };
}
function Or(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = o(l);
  }
  function s(l) {
    t += o(l);
  }
  function i(l) {
    t -= o(l);
  }
  function o(l) {
    return Oc(l) ? l : l.get();
  }
  return { get: n, set: r, add: s, subtract: i };
}
function rg(e, t) {
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
  function l(f) {
    if (i) return;
    const g = XC(e.direction(f));
    g !== s && ((r.transform = n(g)), (s = g));
  }
  function c(f) {
    i = !f;
  }
  function u() {
    i ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: u, to: l, toggleActive: c };
}
function gR(e, t, n, r, s, i, o, a, l) {
  const u = fs(s),
    d = fs(s).reverse(),
    f = b().concat(x());
  function g(A, C) {
    return A.reduce((O, M) => O - s[M], C);
  }
  function m(A, C) {
    return A.reduce((O, M) => (g(O, C) > 0 ? O.concat([M]) : O), []);
  }
  function h(A) {
    return i.map((C, O) => ({
      start: C - r[O] + 0.5 + A,
      end: C + t - 0.5 + A,
    }));
  }
  function y(A, C, O) {
    const M = h(C);
    return A.map((U) => {
      const N = O ? 0 : -n,
        I = O ? n : 0,
        z = O ? "end" : "start",
        J = M[U][z];
      return {
        index: U,
        loopPoint: J,
        slideLocation: Or(-1),
        translate: rg(e, l[U]),
        target: () => (a.get() > J ? N : I),
      };
    });
  }
  function b() {
    const A = o[0],
      C = m(d, A);
    return y(C, n, !1);
  }
  function x() {
    const A = t - o[0] - 1,
      C = m(u, A);
    return y(C, -n, !0);
  }
  function _() {
    return f.every(({ index: A }) => {
      const C = u.filter((O) => O !== A);
      return g(C, t) <= 0.1;
    });
  }
  function E() {
    f.forEach((A) => {
      const { target: C, translate: O, slideLocation: M } = A,
        U = C();
      U !== M.get() && (O.to(U), M.set(U));
    });
  }
  function w() {
    f.forEach((A) => A.translate.clear());
  }
  return { canLoop: _, clear: w, loop: E, loopPoints: f };
}
function yR(e, t, n) {
  let r,
    s = !1;
  function i(l) {
    if (!n) return;
    function c(u) {
      for (const d of u)
        if (d.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((u) => {
      s || ((Hi(n) || n(l, u)) && c(u));
    })),
      r.observe(e, { childList: !0 });
  }
  function o() {
    r && r.disconnect(), (s = !0);
  }
  return { init: i, destroy: o };
}
function vR(e, t, n, r) {
  const s = {};
  let i = null,
    o = null,
    a,
    l = !1;
  function c() {
    (a = new IntersectionObserver(
      (m) => {
        l ||
          (m.forEach((h) => {
            const y = t.indexOf(h.target);
            s[y] = h;
          }),
          (i = null),
          (o = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r }
    )),
      t.forEach((m) => a.observe(m));
  }
  function u() {
    a && a.disconnect(), (l = !0);
  }
  function d(m) {
    return hs(s).reduce((h, y) => {
      const b = parseInt(y),
        { isIntersecting: x } = s[b];
      return ((m && x) || (!m && !x)) && h.push(b), h;
    }, []);
  }
  function f(m = !0) {
    if (m && i) return i;
    if (!m && o) return o;
    const h = d(m);
    return m && (i = h), m || (o = h), h;
  }
  return { init: c, destroy: u, get: f };
}
function bR(e, t, n, r, s, i) {
  const { measureSize: o, startEdge: a, endEdge: l } = e,
    c = n[0] && s,
    u = m(),
    d = h(),
    f = n.map(o),
    g = y();
  function m() {
    if (!c) return 0;
    const x = n[0];
    return Ee(t[a] - x[a]);
  }
  function h() {
    if (!c) return 0;
    const x = i.getComputedStyle(wt(r));
    return parseFloat(x.getPropertyValue(`margin-${l}`));
  }
  function y() {
    return n
      .map((x, _, E) => {
        const w = !_,
          R = Mc(E, _);
        return w ? f[_] + u : R ? f[_] + d : E[_ + 1][a] - x[a];
      })
      .map(Ee);
  }
  return { slideSizes: f, slideSizesWithGaps: g, startGap: u, endGap: d };
}
function xR(e, t, n, r, s, i, o, a, l) {
  const { startEdge: c, endEdge: u, direction: d } = e,
    f = Oc(n);
  function g(b, x) {
    return fs(b)
      .filter((_) => _ % x === 0)
      .map((_) => b.slice(_, _ + x));
  }
  function m(b) {
    return b.length
      ? fs(b)
          .reduce((x, _, E) => {
            const w = wt(x) || 0,
              R = w === 0,
              A = _ === Ts(b),
              C = s[c] - i[w][c],
              O = s[c] - i[_][u],
              M = !r && R ? d(o) : 0,
              U = !r && A ? d(a) : 0,
              N = Ee(O - U - (C + M));
            return E && N > t + l && x.push(_), A && x.push(b.length), x;
          }, [])
          .map((x, _, E) => {
            const w = Math.max(E[_ - 1] || 0);
            return b.slice(w, x);
          })
      : [];
  }
  function h(b) {
    return f ? g(b, n) : m(b);
  }
  return { groupSlides: h };
}
function wR(e, t, n, r, s, i, o) {
  const {
      align: a,
      axis: l,
      direction: c,
      startIndex: u,
      loop: d,
      duration: f,
      dragFree: g,
      dragThreshold: m,
      inViewThreshold: h,
      slidesToScroll: y,
      skipSnaps: b,
      containScroll: x,
      watchResize: _,
      watchSlides: E,
      watchDrag: w,
      watchFocus: R,
    } = i,
    A = 2,
    C = nR(),
    O = C.measure(t),
    M = n.map(C.measure),
    U = QC(l, c),
    N = U.measureSize(O),
    I = rR(N),
    z = YC(a, N),
    J = !d && !!x,
    q = d || !!x,
    {
      slideSizes: H,
      slideSizesWithGaps: W,
      startGap: ne,
      endGap: fe,
    } = bR(U, O, M, n, q, s),
    he = xR(U, N, y, d, O, M, ne, fe, A),
    { snaps: ze, snapsAligned: nt } = dR(U, z, O, M, he),
    We = -wt(ze) + wt(W),
    { snapsContained: mt, scrollContainLimit: Xe } = aR(N, We, nt, x, A),
    ce = J ? mt : nt,
    { limit: pe } = cR(We, ce, d),
    Ce = ng(Ts(ce), u, d),
    Oe = Ce.clone(),
    ge = fs(n),
    Z = ({
      dragHandler: Pt,
      scrollBody: vn,
      scrollBounds: xr,
      options: { loop: bn },
    }) => {
      bn || xr.constrain(Pt.pointerDown()), vn.seek();
    },
    ue = (
      {
        scrollBody: Pt,
        translate: vn,
        location: xr,
        offsetLocation: bn,
        previousLocation: Zi,
        scrollLooper: Cs,
        slideLooper: ig,
        dragHandler: og,
        animation: ag,
        eventHandler: Fc,
        scrollBounds: cg,
        options: { loop: Lc },
      },
      Ic
    ) => {
      const Vc = Pt.settled(),
        lg = !cg.shouldConstrain(),
        Bc = Lc ? Vc : Vc && lg;
      Bc && !og.pointerDown() && (ag.stop(), Fc.emit("settle")),
        Bc || Fc.emit("scroll");
      const ug = xr.get() * Ic + Zi.get() * (1 - Ic);
      bn.set(ug), Lc && (Cs.loop(Pt.direction()), ig.loop()), vn.to(bn.get());
    },
    ye = JC(
      r,
      s,
      () => Z(br),
      (Pt) => ue(br, Pt)
    ),
    Ie = 0.68,
    rt = ce[Ce.get()],
    dt = Or(rt),
    S = Or(rt),
    T = Or(rt),
    k = Or(rt),
    V = iR(dt, T, S, k, f, Ie),
    F = hR(d, ce, We, pe, k),
    D = pR(ye, Ce, Oe, V, F, k, o),
    K = uR(pe),
    ie = ps(),
    De = vR(t, n, o, h),
    { slideRegistry: Re } = fR(J, x, ce, Xe, he, ge),
    Rt = mR(e, n, Re, D, V, ie, o, R),
    br = {
      ownerDocument: r,
      ownerWindow: s,
      eventHandler: o,
      containerRect: O,
      slideRects: M,
      animation: ye,
      axis: U,
      dragHandler: eR(
        U,
        e,
        r,
        s,
        k,
        tR(U, s),
        dt,
        ye,
        D,
        V,
        F,
        Ce,
        o,
        I,
        g,
        m,
        b,
        Ie,
        w
      ),
      eventStore: ie,
      percentOfView: I,
      index: Ce,
      indexPrevious: Oe,
      limit: pe,
      location: dt,
      offsetLocation: T,
      previousLocation: S,
      options: i,
      resizeHandler: sR(t, o, s, n, U, _, C),
      scrollBody: V,
      scrollBounds: oR(pe, T, k, V, I),
      scrollLooper: lR(We, pe, T, [dt, T, S, k]),
      scrollProgress: K,
      scrollSnapList: ce.map(K.get),
      scrollSnaps: ce,
      scrollTarget: F,
      scrollTo: D,
      slideLooper: gR(U, N, We, H, W, ze, ce, T, n),
      slideFocus: Rt,
      slidesHandler: yR(t, o, E),
      slidesInView: De,
      slideIndexes: ge,
      slideRegistry: Re,
      slidesToScroll: he,
      target: k,
      translate: rg(U, t),
    };
  return br;
}
function _R() {
  let e = {},
    t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function s(c) {
    return r(c).forEach((u) => u(t, c)), l;
  }
  function i(c, u) {
    return (e[c] = r(c).concat([u])), l;
  }
  function o(c, u) {
    return (e[c] = r(c).filter((d) => d !== u)), l;
  }
  function a() {
    e = {};
  }
  const l = { init: n, emit: s, off: o, on: i, clear: a };
  return l;
}
const SR = {
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
function ER(e) {
  function t(i, o) {
    return tg(i, o || {});
  }
  function n(i) {
    const o = i.breakpoints || {},
      a = hs(o)
        .filter((l) => e.matchMedia(l).matches)
        .map((l) => o[l])
        .reduce((l, c) => t(l, c), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((o) => hs(o.breakpoints || {}))
      .reduce((o, a) => o.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function TR(e) {
  let t = [];
  function n(i, o) {
    return (
      (t = o.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
      t.forEach((a) => a.init(i, e)),
      o.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function _i(e, t, n) {
  const r = e.ownerDocument,
    s = r.defaultView,
    i = ER(s),
    o = TR(i),
    a = ps(),
    l = _R(),
    { mergeOptions: c, optionsAtMedia: u, optionsMediaQueries: d } = i,
    { on: f, off: g, emit: m } = l,
    h = U;
  let y = !1,
    b,
    x = c(SR, _i.globalOptions),
    _ = c(x),
    E = [],
    w,
    R,
    A;
  function C() {
    const { container: ge, slides: Z } = _;
    R = (ga(ge) ? e.querySelector(ge) : ge) || e.children[0];
    const ye = ga(Z) ? R.querySelectorAll(Z) : Z;
    A = [].slice.call(ye || R.children);
  }
  function O(ge) {
    const Z = wR(e, R, A, r, s, ge, l);
    if (ge.loop && !Z.slideLooper.canLoop()) {
      const ue = Object.assign({}, ge, { loop: !1 });
      return O(ue);
    }
    return Z;
  }
  function M(ge, Z) {
    y ||
      ((x = c(x, ge)),
      (_ = u(x)),
      (E = Z || E),
      C(),
      (b = O(_)),
      d([x, ...E.map(({ options: ue }) => ue)]).forEach((ue) =>
        a.add(ue, "change", U)
      ),
      _.active &&
        (b.translate.to(b.location.get()),
        b.animation.init(),
        b.slidesInView.init(),
        b.slideFocus.init(Oe),
        b.eventHandler.init(Oe),
        b.resizeHandler.init(Oe),
        b.slidesHandler.init(Oe),
        b.options.loop && b.slideLooper.loop(),
        R.offsetParent && A.length && b.dragHandler.init(Oe),
        (w = o.init(Oe, E))));
  }
  function U(ge, Z) {
    const ue = he();
    N(), M(c({ startIndex: ue }, ge), Z), l.emit("reInit");
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
  function I() {
    y || ((y = !0), a.clear(), N(), l.emit("destroy"), l.clear());
  }
  function z(ge, Z, ue) {
    !_.active ||
      y ||
      (b.scrollBody.useBaseFriction().useDuration(Z === !0 ? 0 : _.duration),
      b.scrollTo.index(ge, ue || 0));
  }
  function J(ge) {
    const Z = b.index.add(1).get();
    z(Z, ge, -1);
  }
  function q(ge) {
    const Z = b.index.add(-1).get();
    z(Z, ge, 1);
  }
  function H() {
    return b.index.add(1).get() !== he();
  }
  function W() {
    return b.index.add(-1).get() !== he();
  }
  function ne() {
    return b.scrollSnapList;
  }
  function fe() {
    return b.scrollProgress.get(b.location.get());
  }
  function he() {
    return b.index.get();
  }
  function ze() {
    return b.indexPrevious.get();
  }
  function nt() {
    return b.slidesInView.get();
  }
  function We() {
    return b.slidesInView.get(!1);
  }
  function mt() {
    return w;
  }
  function Xe() {
    return b;
  }
  function ce() {
    return e;
  }
  function pe() {
    return R;
  }
  function Ce() {
    return A;
  }
  const Oe = {
    canScrollNext: H,
    canScrollPrev: W,
    containerNode: pe,
    internalEngine: Xe,
    destroy: I,
    off: g,
    on: f,
    emit: m,
    plugins: mt,
    previousScrollSnap: ze,
    reInit: h,
    rootNode: ce,
    scrollNext: J,
    scrollPrev: q,
    scrollProgress: fe,
    scrollSnapList: ne,
    scrollTo: z,
    selectedScrollSnap: he,
    slideNodes: Ce,
    slidesInView: nt,
    slidesNotInView: We,
  };
  return M(t, n), setTimeout(() => l.emit("init"), 0), Oe;
}
_i.globalOptions = void 0;
function As(e = {}, t = []) {
  const n = v.useRef(e),
    r = v.useRef(t),
    [s, i] = v.useState(),
    [o, a] = v.useState(),
    l = v.useCallback(() => {
      s && s.reInit(n.current, r.current);
    }, [s]);
  return (
    v.useEffect(() => {
      jc(n.current, e) || ((n.current = e), l());
    }, [e, l]),
    v.useEffect(() => {
      qC(r.current, t) || ((r.current = t), l());
    }, [t, l]),
    v.useEffect(() => {
      if (GC() && o) {
        _i.globalOptions = As.globalOptions;
        const c = _i(o, n.current, r.current);
        return i(c), () => c.destroy();
      } else i(void 0);
    }, [o, i]),
    [a, s]
  );
}
As.globalOptions = void 0;
const AR = [
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
  UR = () => {
    const [e] = As(),
      t = Be((o) => o.lang),
      n = t === Ge.RU ? Ge.RU : Ge.EN,
      r = ma("(min-width: 1024px)"),
      s = ma("(min-width: 768px)");
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
        p.jsx(lt, {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl",
          children: AR[X(t)].data.map(({ title: o, link: a, blank: l }) =>
            p.jsx(
              Me,
              {
                target: l ? "_blank" : "",
                to: a,
                className: "w-full",
                children: p.jsx($e, {
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
  Si = [
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
  CR = [
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
  $R = ({ className: e }) => {
    const t = Be((n) => n.lang);
    return p.jsx("section", {
      className: te("bg-surface_high pt-10 pb-20", e),
      children: p.jsxs(lt, {
        children: [
          p.jsx("h2", { className: "h2 mb-10", children: Si[X(t)].title }),
          p.jsxs("div", {
            className: "flex flex-col gap-6",
            children: [
              p.jsx("div", {
                className: "flex flex-col md:flex-row items-center gap-6",
                children: Si[X(t)].data.map((n) =>
                  v.createElement(Rh, {
                    ...n,
                    key: n.name,
                    className: "w-full",
                  })
                ),
              }),
              p.jsx("div", {
                className:
                  "md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6",
                children: CR[X(t)].data.map((n) =>
                  v.createElement(i0, {
                    ...n,
                    key: n.title,
                    className: "w-full",
                  })
                ),
              }),
              p.jsx(Me, {
                to: "/stend-form",
                className: "md:w-fit w-full mx-auto",
                children: p.jsx($e, {
                  className: "w-full",
                  children: t === Ge.RU ? "Забронируйте стенд" : "Book a stand",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Vs = [
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
  zR = () => {
    const [e] = As(),
      t = Be((n) => n.lang);
    return p.jsx("section", {
      children: p.jsxs(lt, {
        className: "flex flex-col gap-6",
        children: [
          p.jsxs("div", {
            className: "text-center",
            children: [
              p.jsx("h2", {
                className: "h2 md:mb-3 mb-6 text-left sm:text-center",
                children: Vs[X(t)].mainData[0].h2,
              }),
              p.jsx("p", {
                className:
                  "md:text-base text-sm normal text-left sm:text-center text-[#454545]",
                children: Vs[X(t)].mainData[0].p,
              }),
            ],
          }),
          p.jsx("div", {
            ref: e,
            className: "embla overflow-hidden",
            children: p.jsx("div", {
              className: "flex embla__container items-center gap-6",
              children: Vs[X(t)].data.map((n) =>
                p.jsx(
                  s0,
                  { ...n, className: "embla__slide flex-[0_0_288px]" },
                  n.text
                )
              ),
            }),
          }),
          p.jsx(Me, {
            to: "/about",
            className: "mx-auto",
            children: p.jsx($e, {
              variant: "outline",
              children: Vs[X(t)].mainData[0].button,
            }),
          }),
        ],
      }),
    });
  },
  sg = ({ className: e, img: t, title: n }) =>
    p.jsxs("article", {
      className: te(
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
  va = [
    {
      h2: "Тематические направления выставки",
      data: [
        {
          title: "Пищевая продукция и сельское хозяйство",
          img: "/theme/1.svg",
        },
        { title: "Товары и услуги", img: "/theme/2.svg" },
        { title: "E-commerce", img: "/theme/3.svg" },
        { title: "Волокна, текстиль и одежда", img: "/theme/4.svg" },
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
        { title: "Fibers, textiles and clothing", img: "/theme/4.svg" },
        { title: "Manufactured goods", img: "/theme/5.svg" },
        { title: "Professional services", img: "/theme/6.svg" },
        { title: "Crafts", img: "/theme/7.svg" },
        { title: "Creative industries", img: "/theme/8.svg" },
      ],
    },
  ],
  WR = () => {
    const e = Be((t) => t.lang);
    return p.jsx("section", {
      className: "",
      children: p.jsxs(lt, {
        children: [
          p.jsx("h2", {
            className: "h2 mb-10 text-center",
            children: va[X(e)].h2,
          }),
          p.jsx("div", {
            className: "grid md:grid-cols-4 grid-cols-2 gap-6",
            children: va[X(e)].data.map((t) => p.jsx(sg, { ...t }, t.title)),
          }),
        ],
      }),
    });
  },
  RR = [
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
          title: "Hotels, transfers, visa",
          btnText: "Download the Travel guide",
          text: `Regarding hotel accommodation, visa support, 
        transportation and excursion services you can check out the Travel guide`,
          link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
        },
        {
          img: "/offer-2.png",
          title: "Check out the ITSE 2025 Exhibition plan ",
          btnText: "Download the Floor plan",
          text: `How to choose the best place in the exhibition? 
        You should always remember that the good location of the exhibition increases your chance to attract the attention of your potential customers…`,
          link: "https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
        },
      ],
    },
  ],
  HR = () => {
    const [e, t] = As({ align: "start" }),
      n = Be((o) => o.lang),
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
        children: p.jsx(lt, {
          children: p.jsxs("div", {
            ref: e,
            className: "embla",
            children: [
              p.jsx("div", {
                className: "mb-2 flex gap-6 embla__container",
                children: RR[X(n)].data.map((o) =>
                  v.createElement(o0, {
                    className:
                      "embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]",
                    ...o,
                    key: o.title,
                  })
                ),
              }),
              p.jsx(a0, {
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
  Ro = [
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
  ZR = ({ className: e }) => {
    const t = Be((n) => n.lang);
    return p.jsxs("section", {
      className: te("relative w-full bg-[#FDE8C4] -z-10 py-10", e),
      children: [
        p.jsx("img", {
          src: "/about-bg.svg",
          alt: "",
          className: "absolute top-0 left-0 size-full object-cover",
        }),
        p.jsxs(lt, {
          children: [
            p.jsxs("h3", {
              className: "h2 mb-4",
              children: [" ", Ro[X(t)].title],
            }),
            p.jsx("p", {
              className: "text-lg text-on_surface_v mb-6",
              children: Ro[X(t)].subtitle,
            }),
            p.jsx("div", {
              className: "grid md:grid-cols-4 grid-cols-2 gap-6",
              children: va[X(t)].data.map((n) =>
                p.jsx(
                  sg,
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
                  children: Ro[X(t)].bottomText,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  GR = ({ className: e }) => {
    const t = Be((n) => n.lang);
    return p.jsx("section", {
      className: te("bg-bg_surface_container py-10 md:py-[160px]", e),
      children: p.jsxs(lt, {
        children: [
          p.jsx("h2", { className: "h2 mb-6", children: Si[X(t)].title }),
          p.jsx("div", {
            className: "flex flex-col md:flex-row items-center gap-6",
            children: Si[X(t)].data.map((n) =>
              v.createElement(Rh, {
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
  pd = [
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
  qR = ({ className: e }) => {
    const t = Be((n) => n.lang);
    return p.jsx("section", {
      className: te("gap-6 relative overflow-hidden", e),
      children: p.jsxs(lt, {
        className:
          "md:py-20 py-10 grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 grid",
        children: [
          p.jsxs("div", {
            className: "",
            children: [
              p.jsx("h3", { className: "h2 mb-6", children: pd[X(t)].title }),
              p.jsx("div", {
                className:
                  "text-lg flex flex-col gap-6 text-on_surface_v normal  mb-10",
                children: pd[X(t)].data.map((n) =>
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
  Bs = [
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
  KR = ({ className: e }) => {
    const t = Be((n) => n.lang);
    return p.jsxs("section", {
      className: te("md:py-20 py-10 relative overflow-hidden", e),
      children: [
        p.jsx("img", {
          src: "/CTA.png",
          className: "absolute top-0 left-0 size-full -z-10 object-cover",
        }),
        p.jsxs(lt, {
          children: [
            p.jsx("h3", {
              className: "h2 text-center !text-on_primary mb-6",
              children: Bs[X(t)].title,
            }),
            p.jsx("p", {
              className:
                "text-center md:text-lg text-sm  text-primary_04 max-w-[808px] mx-auto mb-10",
              children: Bs[X(t)].p,
            }),
            p.jsxs("div", {
              className: "flex flex-col md:flex-row items-center gap-6",
              children: [
                p.jsx(Me, {
                  to: "/stend-form",
                  className: "w-full",
                  children: p.jsx($e, {
                    className: "bg-white w-full text-primary hover:bg-white/90",
                    children: Bs[X(t)].button1,
                  }),
                }),
                p.jsx(Me, {
                  to: "/become-sponsor",
                  className: "w-full",
                  children: p.jsx($e, {
                    className: "bg-white w-full hover:bg-white/90 text-primary",
                    children: Bs[X(t)].button2,
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
  co as A,
  VR as B,
  BR as C,
  GR as D,
  qR as E,
  OR as F,
  KR as G,
  jR as H,
  te as I,
  Ge as L,
  Qm as R,
  UR as a,
  zR as b,
  HR as c,
  WR as d,
  $R as e,
  IR as f,
  Fe as g,
  Nf as h,
  X as i,
  p as j,
  fC as k,
  Nm as l,
  Rn as m,
  Ur as n,
  $r as o,
  zr as p,
  ha as q,
  Ne as r,
  $e as s,
  ty as t,
  Be as u,
  HC as v,
  Of as w,
  lt as x,
  ZR as y,
  be as z,
};
