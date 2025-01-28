function UC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i)
        if (o !== "default" && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(i, o);
          a &&
            Object.defineProperty(
              e,
              o,
              a.get ? a : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const l of a.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = n(o);
    fetch(o.href, a);
  }
})();
var Xu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function C0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lh = { exports: {} },
  Ma = {},
  uh = { exports: {} },
  tt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pv;
function $C() {
  if (Pv) return tt;
  Pv = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function y(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (g && O[g]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    S = {};
  function E(O, q, Ne) {
    (this.props = O),
      (this.context = q),
      (this.refs = S),
      (this.updater = Ne || w);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (O, q) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, O, q, "setState");
    }),
    (E.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    });
  function b() {}
  b.prototype = E.prototype;
  function P(O, q, Ne) {
    (this.props = O),
      (this.context = q),
      (this.refs = S),
      (this.updater = Ne || w);
  }
  var R = (P.prototype = new b());
  (R.constructor = P), x(R, E.prototype), (R.isPureReactComponent = !0);
  var j = Array.isArray,
    T = Object.prototype.hasOwnProperty,
    M = { current: null },
    V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(O, q, Ne) {
    var Me,
      Ie = {},
      ze = null,
      be = null;
    if (q != null)
      for (Me in (q.ref !== void 0 && (be = q.ref),
      q.key !== void 0 && (ze = "" + q.key),
      q))
        T.call(q, Me) && !V.hasOwnProperty(Me) && (Ie[Me] = q[Me]);
    var Te = arguments.length - 2;
    if (Te === 1) Ie.children = Ne;
    else if (1 < Te) {
      for (var Re = Array(Te), Xe = 0; Xe < Te; Xe++)
        Re[Xe] = arguments[Xe + 2];
      Ie.children = Re;
    }
    if (O && O.defaultProps)
      for (Me in ((Te = O.defaultProps), Te))
        Ie[Me] === void 0 && (Ie[Me] = Te[Me]);
    return {
      $$typeof: e,
      type: O,
      key: ze,
      ref: be,
      props: Ie,
      _owner: M.current,
    };
  }
  function Y(O, q) {
    return {
      $$typeof: e,
      type: O.type,
      key: q,
      ref: O.ref,
      props: O.props,
      _owner: O._owner,
    };
  }
  function Q(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }
  function ce(O) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (Ne) {
        return q[Ne];
      })
    );
  }
  var X = /\/+/g;
  function ie(O, q) {
    return typeof O == "object" && O !== null && O.key != null
      ? ce("" + O.key)
      : q.toString(36);
  }
  function he(O, q, Ne, Me, Ie) {
    var ze = typeof O;
    (ze === "undefined" || ze === "boolean") && (O = null);
    var be = !1;
    if (O === null) be = !0;
    else
      switch (ze) {
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case e:
            case t:
              be = !0;
          }
      }
    if (be)
      return (
        (be = O),
        (Ie = Ie(be)),
        (O = Me === "" ? "." + ie(be, 0) : Me),
        j(Ie)
          ? ((Ne = ""),
            O != null && (Ne = O.replace(X, "$&/") + "/"),
            he(Ie, q, Ne, "", function (Xe) {
              return Xe;
            }))
          : Ie != null &&
            (Q(Ie) &&
              (Ie = Y(
                Ie,
                Ne +
                  (!Ie.key || (be && be.key === Ie.key)
                    ? ""
                    : ("" + Ie.key).replace(X, "$&/") + "/") +
                  O
              )),
            q.push(Ie)),
        1
      );
    if (((be = 0), (Me = Me === "" ? "." : Me + ":"), j(O)))
      for (var Te = 0; Te < O.length; Te++) {
        ze = O[Te];
        var Re = Me + ie(ze, Te);
        be += he(ze, q, Ne, Re, Ie);
      }
    else if (((Re = y(O)), typeof Re == "function"))
      for (O = Re.call(O), Te = 0; !(ze = O.next()).done; )
        (ze = ze.value),
          (Re = Me + ie(ze, Te++)),
          (be += he(ze, q, Ne, Re, Ie));
    else if (ze === "object")
      throw (
        ((q = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return be;
  }
  function pe(O, q, Ne) {
    if (O == null) return O;
    var Me = [],
      Ie = 0;
    return (
      he(O, Me, "", "", function (ze) {
        return q.call(Ne, ze, Ie++);
      }),
      Me
    );
  }
  function me(O) {
    if (O._status === -1) {
      var q = O._result;
      (q = q()),
        q.then(
          function (Ne) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = Ne));
          },
          function (Ne) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = Ne));
          }
        ),
        O._status === -1 && ((O._status = 0), (O._result = q));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var le = { current: null },
    H = { transition: null },
    J = {
      ReactCurrentDispatcher: le,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: M,
    };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (tt.Children = {
      map: pe,
      forEach: function (O, q, Ne) {
        pe(
          O,
          function () {
            q.apply(this, arguments);
          },
          Ne
        );
      },
      count: function (O) {
        var q = 0;
        return (
          pe(O, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (O) {
        return (
          pe(O, function (q) {
            return q;
          }) || []
        );
      },
      only: function (O) {
        if (!Q(O))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return O;
      },
    }),
    (tt.Component = E),
    (tt.Fragment = n),
    (tt.Profiler = o),
    (tt.PureComponent = P),
    (tt.StrictMode = i),
    (tt.Suspense = f),
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (tt.act = ee),
    (tt.cloneElement = function (O, q, Ne) {
      if (O == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            O +
            "."
        );
      var Me = x({}, O.props),
        Ie = O.key,
        ze = O.ref,
        be = O._owner;
      if (q != null) {
        if (
          (q.ref !== void 0 && ((ze = q.ref), (be = M.current)),
          q.key !== void 0 && (Ie = "" + q.key),
          O.type && O.type.defaultProps)
        )
          var Te = O.type.defaultProps;
        for (Re in q)
          T.call(q, Re) &&
            !V.hasOwnProperty(Re) &&
            (Me[Re] = q[Re] === void 0 && Te !== void 0 ? Te[Re] : q[Re]);
      }
      var Re = arguments.length - 2;
      if (Re === 1) Me.children = Ne;
      else if (1 < Re) {
        Te = Array(Re);
        for (var Xe = 0; Xe < Re; Xe++) Te[Xe] = arguments[Xe + 2];
        Me.children = Te;
      }
      return {
        $$typeof: e,
        type: O.type,
        key: Ie,
        ref: ze,
        props: Me,
        _owner: be,
      };
    }),
    (tt.createContext = function (O) {
      return (
        (O = {
          $$typeof: l,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (O.Provider = { $$typeof: a, _context: O }),
        (O.Consumer = O)
      );
    }),
    (tt.createElement = F),
    (tt.createFactory = function (O) {
      var q = F.bind(null, O);
      return (q.type = O), q;
    }),
    (tt.createRef = function () {
      return { current: null };
    }),
    (tt.forwardRef = function (O) {
      return { $$typeof: c, render: O };
    }),
    (tt.isValidElement = Q),
    (tt.lazy = function (O) {
      return { $$typeof: p, _payload: { _status: -1, _result: O }, _init: me };
    }),
    (tt.memo = function (O, q) {
      return { $$typeof: h, type: O, compare: q === void 0 ? null : q };
    }),
    (tt.startTransition = function (O) {
      var q = H.transition;
      H.transition = {};
      try {
        O();
      } finally {
        H.transition = q;
      }
    }),
    (tt.unstable_act = ee),
    (tt.useCallback = function (O, q) {
      return le.current.useCallback(O, q);
    }),
    (tt.useContext = function (O) {
      return le.current.useContext(O);
    }),
    (tt.useDebugValue = function () {}),
    (tt.useDeferredValue = function (O) {
      return le.current.useDeferredValue(O);
    }),
    (tt.useEffect = function (O, q) {
      return le.current.useEffect(O, q);
    }),
    (tt.useId = function () {
      return le.current.useId();
    }),
    (tt.useImperativeHandle = function (O, q, Ne) {
      return le.current.useImperativeHandle(O, q, Ne);
    }),
    (tt.useInsertionEffect = function (O, q) {
      return le.current.useInsertionEffect(O, q);
    }),
    (tt.useLayoutEffect = function (O, q) {
      return le.current.useLayoutEffect(O, q);
    }),
    (tt.useMemo = function (O, q) {
      return le.current.useMemo(O, q);
    }),
    (tt.useReducer = function (O, q, Ne) {
      return le.current.useReducer(O, q, Ne);
    }),
    (tt.useRef = function (O) {
      return le.current.useRef(O);
    }),
    (tt.useState = function (O) {
      return le.current.useState(O);
    }),
    (tt.useSyncExternalStore = function (O, q, Ne) {
      return le.current.useSyncExternalStore(O, q, Ne);
    }),
    (tt.useTransition = function () {
      return le.current.useTransition();
    }),
    (tt.version = "18.3.1"),
    tt
  );
}
var Rv;
function Fp() {
  return Rv || ((Rv = 1), (uh.exports = $C())), uh.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Av;
function WC() {
  if (Av) return Ma;
  Av = 1;
  var e = Fp(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, f, h) {
    var p,
      g = {},
      y = null,
      w = null;
    h !== void 0 && (y = "" + h),
      f.key !== void 0 && (y = "" + f.key),
      f.ref !== void 0 && (w = f.ref);
    for (p in f) i.call(f, p) && !a.hasOwnProperty(p) && (g[p] = f[p]);
    if (c && c.defaultProps)
      for (p in ((f = c.defaultProps), f)) g[p] === void 0 && (g[p] = f[p]);
    return {
      $$typeof: t,
      type: c,
      key: y,
      ref: w,
      props: g,
      _owner: o.current,
    };
  }
  return (Ma.Fragment = n), (Ma.jsx = l), (Ma.jsxs = l), Ma;
}
var Nv;
function HC() {
  return Nv || ((Nv = 1), (lh.exports = WC())), lh.exports;
}
var C = HC(),
  _ = Fp();
const rt = C0(_),
  ZC = UC({ __proto__: null, default: rt }, [_]);
var Qu = {},
  ch = { exports: {} },
  Pn = {},
  dh = { exports: {} },
  fh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jv;
function KC() {
  return (
    jv ||
      ((jv = 1),
      (function (e) {
        function t(H, J) {
          var ee = H.length;
          H.push(J);
          e: for (; 0 < ee; ) {
            var O = (ee - 1) >>> 1,
              q = H[O];
            if (0 < o(q, J)) (H[O] = J), (H[ee] = q), (ee = O);
            else break e;
          }
        }
        function n(H) {
          return H.length === 0 ? null : H[0];
        }
        function i(H) {
          if (H.length === 0) return null;
          var J = H[0],
            ee = H.pop();
          if (ee !== J) {
            H[0] = ee;
            e: for (var O = 0, q = H.length, Ne = q >>> 1; O < Ne; ) {
              var Me = 2 * (O + 1) - 1,
                Ie = H[Me],
                ze = Me + 1,
                be = H[ze];
              if (0 > o(Ie, ee))
                ze < q && 0 > o(be, Ie)
                  ? ((H[O] = be), (H[ze] = ee), (O = ze))
                  : ((H[O] = Ie), (H[Me] = ee), (O = Me));
              else if (ze < q && 0 > o(be, ee))
                (H[O] = be), (H[ze] = ee), (O = ze);
              else break e;
            }
          }
          return J;
        }
        function o(H, J) {
          var ee = H.sortIndex - J.sortIndex;
          return ee !== 0 ? ee : H.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var a = performance;
          e.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            c = l.now();
          e.unstable_now = function () {
            return l.now() - c;
          };
        }
        var f = [],
          h = [],
          p = 1,
          g = null,
          y = 3,
          w = !1,
          x = !1,
          S = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          b = typeof clearTimeout == "function" ? clearTimeout : null,
          P = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function R(H) {
          for (var J = n(h); J !== null; ) {
            if (J.callback === null) i(h);
            else if (J.startTime <= H)
              i(h), (J.sortIndex = J.expirationTime), t(f, J);
            else break;
            J = n(h);
          }
        }
        function j(H) {
          if (((S = !1), R(H), !x))
            if (n(f) !== null) (x = !0), me(T);
            else {
              var J = n(h);
              J !== null && le(j, J.startTime - H);
            }
        }
        function T(H, J) {
          (x = !1), S && ((S = !1), b(F), (F = -1)), (w = !0);
          var ee = y;
          try {
            for (
              R(J), g = n(f);
              g !== null && (!(g.expirationTime > J) || (H && !ce()));

            ) {
              var O = g.callback;
              if (typeof O == "function") {
                (g.callback = null), (y = g.priorityLevel);
                var q = O(g.expirationTime <= J);
                (J = e.unstable_now()),
                  typeof q == "function"
                    ? (g.callback = q)
                    : g === n(f) && i(f),
                  R(J);
              } else i(f);
              g = n(f);
            }
            if (g !== null) var Ne = !0;
            else {
              var Me = n(h);
              Me !== null && le(j, Me.startTime - J), (Ne = !1);
            }
            return Ne;
          } finally {
            (g = null), (y = ee), (w = !1);
          }
        }
        var M = !1,
          V = null,
          F = -1,
          Y = 5,
          Q = -1;
        function ce() {
          return !(e.unstable_now() - Q < Y);
        }
        function X() {
          if (V !== null) {
            var H = e.unstable_now();
            Q = H;
            var J = !0;
            try {
              J = V(!0, H);
            } finally {
              J ? ie() : ((M = !1), (V = null));
            }
          } else M = !1;
        }
        var ie;
        if (typeof P == "function")
          ie = function () {
            P(X);
          };
        else if (typeof MessageChannel < "u") {
          var he = new MessageChannel(),
            pe = he.port2;
          (he.port1.onmessage = X),
            (ie = function () {
              pe.postMessage(null);
            });
        } else
          ie = function () {
            E(X, 0);
          };
        function me(H) {
          (V = H), M || ((M = !0), ie());
        }
        function le(H, J) {
          F = E(function () {
            H(e.unstable_now());
          }, J);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            x || w || ((x = !0), me(T));
          }),
          (e.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Y = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(f);
          }),
          (e.unstable_next = function (H) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = y;
            }
            var ee = y;
            y = J;
            try {
              return H();
            } finally {
              y = ee;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (H, J) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var ee = y;
            y = H;
            try {
              return J();
            } finally {
              y = ee;
            }
          }),
          (e.unstable_scheduleCallback = function (H, J, ee) {
            var O = e.unstable_now();
            switch (
              (typeof ee == "object" && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == "number" && 0 < ee ? O + ee : O))
                : (ee = O),
              H)
            ) {
              case 1:
                var q = -1;
                break;
              case 2:
                q = 250;
                break;
              case 5:
                q = 1073741823;
                break;
              case 4:
                q = 1e4;
                break;
              default:
                q = 5e3;
            }
            return (
              (q = ee + q),
              (H = {
                id: p++,
                callback: J,
                priorityLevel: H,
                startTime: ee,
                expirationTime: q,
                sortIndex: -1,
              }),
              ee > O
                ? ((H.sortIndex = ee),
                  t(h, H),
                  n(f) === null &&
                    H === n(h) &&
                    (S ? (b(F), (F = -1)) : (S = !0), le(j, ee - O)))
                : ((H.sortIndex = q), t(f, H), x || w || ((x = !0), me(T))),
              H
            );
          }),
          (e.unstable_shouldYield = ce),
          (e.unstable_wrapCallback = function (H) {
            var J = y;
            return function () {
              var ee = y;
              y = J;
              try {
                return H.apply(this, arguments);
              } finally {
                y = ee;
              }
            };
          });
      })(fh)),
    fh
  );
}
var Dv;
function GC() {
  return Dv || ((Dv = 1), (dh.exports = KC())), dh.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ov;
function qC() {
  if (Ov) return Pn;
  Ov = 1;
  var e = Fp(),
    t = GC();
  function n(r) {
    for (
      var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r,
        u = 1;
      u < arguments.length;
      u++
    )
      s += "&args[]=" + encodeURIComponent(arguments[u]);
    return (
      "Minified React error #" +
      r +
      "; visit " +
      s +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    o = {};
  function a(r, s) {
    l(r, s), l(r + "Capture", s);
  }
  function l(r, s) {
    for (o[r] = s, r = 0; r < s.length; r++) i.add(s[r]);
  }
  var c = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    f = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    p = {},
    g = {};
  function y(r) {
    return f.call(g, r)
      ? !0
      : f.call(p, r)
      ? !1
      : h.test(r)
      ? (g[r] = !0)
      : ((p[r] = !0), !1);
  }
  function w(r, s, u, d) {
    if (u !== null && u.type === 0) return !1;
    switch (typeof s) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d
          ? !1
          : u !== null
          ? !u.acceptsBooleans
          : ((r = r.toLowerCase().slice(0, 5)), r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function x(r, s, u, d) {
    if (s === null || typeof s > "u" || w(r, s, u, d)) return !0;
    if (d) return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !s;
        case 4:
          return s === !1;
        case 5:
          return isNaN(s);
        case 6:
          return isNaN(s) || 1 > s;
      }
    return !1;
  }
  function S(r, s, u, d, m, v, k) {
    (this.acceptsBooleans = s === 2 || s === 3 || s === 4),
      (this.attributeName = d),
      (this.attributeNamespace = m),
      (this.mustUseProperty = u),
      (this.propertyName = r),
      (this.type = s),
      (this.sanitizeURL = v),
      (this.removeEmptyString = k);
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (r) {
      E[r] = new S(r, 0, !1, r, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (r) {
      var s = r[0];
      E[s] = new S(s, 1, !1, r[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      r
    ) {
      E[r] = new S(r, 2, !1, r.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (r) {
      E[r] = new S(r, 2, !1, r, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (r) {
        E[r] = new S(r, 3, !1, r.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (r) {
      E[r] = new S(r, 3, !0, r, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (r) {
      E[r] = new S(r, 4, !1, r, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (r) {
      E[r] = new S(r, 6, !1, r, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (r) {
      E[r] = new S(r, 5, !1, r.toLowerCase(), null, !1, !1);
    });
  var b = /[\-:]([a-z])/g;
  function P(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (r) {
      var s = r.replace(b, P);
      E[s] = new S(s, 1, !1, r, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (r) {
        var s = r.replace(b, P);
        E[s] = new S(s, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
      var s = r.replace(b, P);
      E[s] = new S(s, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (r) {
      E[r] = new S(r, 1, !1, r.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new S(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (r) {
      E[r] = new S(r, 1, !1, r.toLowerCase(), null, !0, !0);
    });
  function R(r, s, u, d) {
    var m = E.hasOwnProperty(s) ? E[s] : null;
    (m !== null
      ? m.type !== 0
      : d ||
        !(2 < s.length) ||
        (s[0] !== "o" && s[0] !== "O") ||
        (s[1] !== "n" && s[1] !== "N")) &&
      (x(s, u, m, d) && (u = null),
      d || m === null
        ? y(s) &&
          (u === null ? r.removeAttribute(s) : r.setAttribute(s, "" + u))
        : m.mustUseProperty
        ? (r[m.propertyName] = u === null ? (m.type === 3 ? !1 : "") : u)
        : ((s = m.attributeName),
          (d = m.attributeNamespace),
          u === null
            ? r.removeAttribute(s)
            : ((m = m.type),
              (u = m === 3 || (m === 4 && u === !0) ? "" : "" + u),
              d ? r.setAttributeNS(d, s, u) : r.setAttribute(s, u))));
  }
  var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    T = Symbol.for("react.element"),
    M = Symbol.for("react.portal"),
    V = Symbol.for("react.fragment"),
    F = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    Q = Symbol.for("react.provider"),
    ce = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    ie = Symbol.for("react.suspense"),
    he = Symbol.for("react.suspense_list"),
    pe = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    le = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function J(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (H && r[H]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var ee = Object.assign,
    O;
  function q(r) {
    if (O === void 0)
      try {
        throw Error();
      } catch (u) {
        var s = u.stack.trim().match(/\n( *(at )?)/);
        O = (s && s[1]) || "";
      }
    return (
      `
` +
      O +
      r
    );
  }
  var Ne = !1;
  function Me(r, s) {
    if (!r || Ne) return "";
    Ne = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (s)
        if (
          ((s = function () {
            throw Error();
          }),
          Object.defineProperty(s.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(s, []);
          } catch (W) {
            var d = W;
          }
          Reflect.construct(r, [], s);
        } else {
          try {
            s.call();
          } catch (W) {
            d = W;
          }
          r.call(s.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          d = W;
        }
        r();
      }
    } catch (W) {
      if (W && d && typeof W.stack == "string") {
        for (
          var m = W.stack.split(`
`),
            v = d.stack.split(`
`),
            k = m.length - 1,
            A = v.length - 1;
          1 <= k && 0 <= A && m[k] !== v[A];

        )
          A--;
        for (; 1 <= k && 0 <= A; k--, A--)
          if (m[k] !== v[A]) {
            if (k !== 1 || A !== 1)
              do
                if ((k--, A--, 0 > A || m[k] !== v[A])) {
                  var D =
                    `
` + m[k].replace(" at new ", " at ");
                  return (
                    r.displayName &&
                      D.includes("<anonymous>") &&
                      (D = D.replace("<anonymous>", r.displayName)),
                    D
                  );
                }
              while (1 <= k && 0 <= A);
            break;
          }
      }
    } finally {
      (Ne = !1), (Error.prepareStackTrace = u);
    }
    return (r = r ? r.displayName || r.name : "") ? q(r) : "";
  }
  function Ie(r) {
    switch (r.tag) {
      case 5:
        return q(r.type);
      case 16:
        return q("Lazy");
      case 13:
        return q("Suspense");
      case 19:
        return q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (r = Me(r.type, !1)), r;
      case 11:
        return (r = Me(r.type.render, !1)), r;
      case 1:
        return (r = Me(r.type, !0)), r;
      default:
        return "";
    }
  }
  function ze(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case V:
        return "Fragment";
      case M:
        return "Portal";
      case Y:
        return "Profiler";
      case F:
        return "StrictMode";
      case ie:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case ce:
          return (r.displayName || "Context") + ".Consumer";
        case Q:
          return (r._context.displayName || "Context") + ".Provider";
        case X:
          var s = r.render;
          return (
            (r = r.displayName),
            r ||
              ((r = s.displayName || s.name || ""),
              (r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")),
            r
          );
        case pe:
          return (
            (s = r.displayName || null), s !== null ? s : ze(r.type) || "Memo"
          );
        case me:
          (s = r._payload), (r = r._init);
          try {
            return ze(r(s));
          } catch {}
      }
    return null;
  }
  function be(r) {
    var s = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (r = s.render),
          (r = r.displayName || r.name || ""),
          s.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ze(s);
      case 8:
        return s === F ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof s == "function") return s.displayName || s.name || null;
        if (typeof s == "string") return s;
    }
    return null;
  }
  function Te(r) {
    switch (typeof r) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return r;
      case "object":
        return r;
      default:
        return "";
    }
  }
  function Re(r) {
    var s = r.type;
    return (
      (r = r.nodeName) &&
      r.toLowerCase() === "input" &&
      (s === "checkbox" || s === "radio")
    );
  }
  function Xe(r) {
    var s = Re(r) ? "checked" : "value",
      u = Object.getOwnPropertyDescriptor(r.constructor.prototype, s),
      d = "" + r[s];
    if (
      !r.hasOwnProperty(s) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var m = u.get,
        v = u.set;
      return (
        Object.defineProperty(r, s, {
          configurable: !0,
          get: function () {
            return m.call(this);
          },
          set: function (k) {
            (d = "" + k), v.call(this, k);
          },
        }),
        Object.defineProperty(r, s, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return d;
          },
          setValue: function (k) {
            d = "" + k;
          },
          stopTracking: function () {
            (r._valueTracker = null), delete r[s];
          },
        }
      );
    }
  }
  function nt(r) {
    r._valueTracker || (r._valueTracker = Xe(r));
  }
  function _e(r) {
    if (!r) return !1;
    var s = r._valueTracker;
    if (!s) return !0;
    var u = s.getValue(),
      d = "";
    return (
      r && (d = Re(r) ? (r.checked ? "true" : "false") : r.value),
      (r = d),
      r !== u ? (s.setValue(r), !0) : !1
    );
  }
  function We(r) {
    if (
      ((r = r || (typeof document < "u" ? document : void 0)), typeof r > "u")
    )
      return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function ct(r, s) {
    var u = s.checked;
    return ee({}, s, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: u ?? r._wrapperState.initialChecked,
    });
  }
  function Pt(r, s) {
    var u = s.defaultValue == null ? "" : s.defaultValue,
      d = s.checked != null ? s.checked : s.defaultChecked;
    (u = Te(s.value != null ? s.value : u)),
      (r._wrapperState = {
        initialChecked: d,
        initialValue: u,
        controlled:
          s.type === "checkbox" || s.type === "radio"
            ? s.checked != null
            : s.value != null,
      });
  }
  function Wt(r, s) {
    (s = s.checked), s != null && R(r, "checked", s, !1);
  }
  function Xt(r, s) {
    Wt(r, s);
    var u = Te(s.value),
      d = s.type;
    if (u != null)
      d === "number"
        ? ((u === 0 && r.value === "") || r.value != u) && (r.value = "" + u)
        : r.value !== "" + u && (r.value = "" + u);
    else if (d === "submit" || d === "reset") {
      r.removeAttribute("value");
      return;
    }
    s.hasOwnProperty("value")
      ? z(r, s.type, u)
      : s.hasOwnProperty("defaultValue") && z(r, s.type, Te(s.defaultValue)),
      s.checked == null &&
        s.defaultChecked != null &&
        (r.defaultChecked = !!s.defaultChecked);
  }
  function N(r, s, u) {
    if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
      var d = s.type;
      if (
        !(
          (d !== "submit" && d !== "reset") ||
          (s.value !== void 0 && s.value !== null)
        )
      )
        return;
      (s = "" + r._wrapperState.initialValue),
        u || s === r.value || (r.value = s),
        (r.defaultValue = s);
    }
    (u = r.name),
      u !== "" && (r.name = ""),
      (r.defaultChecked = !!r._wrapperState.initialChecked),
      u !== "" && (r.name = u);
  }
  function z(r, s, u) {
    (s !== "number" || We(r.ownerDocument) !== r) &&
      (u == null
        ? (r.defaultValue = "" + r._wrapperState.initialValue)
        : r.defaultValue !== "" + u && (r.defaultValue = "" + u));
  }
  var Z = Array.isArray;
  function ue(r, s, u, d) {
    if (((r = r.options), s)) {
      s = {};
      for (var m = 0; m < u.length; m++) s["$" + u[m]] = !0;
      for (u = 0; u < r.length; u++)
        (m = s.hasOwnProperty("$" + r[u].value)),
          r[u].selected !== m && (r[u].selected = m),
          m && d && (r[u].defaultSelected = !0);
    } else {
      for (u = "" + Te(u), s = null, m = 0; m < r.length; m++) {
        if (r[m].value === u) {
          (r[m].selected = !0), d && (r[m].defaultSelected = !0);
          return;
        }
        s !== null || r[m].disabled || (s = r[m]);
      }
      s !== null && (s.selected = !0);
    }
  }
  function de(r, s) {
    if (s.dangerouslySetInnerHTML != null) throw Error(n(91));
    return ee({}, s, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue,
    });
  }
  function ae(r, s) {
    var u = s.value;
    if (u == null) {
      if (((u = s.children), (s = s.defaultValue), u != null)) {
        if (s != null) throw Error(n(92));
        if (Z(u)) {
          if (1 < u.length) throw Error(n(93));
          u = u[0];
        }
        s = u;
      }
      s == null && (s = ""), (u = s);
    }
    r._wrapperState = { initialValue: Te(u) };
  }
  function je(r, s) {
    var u = Te(s.value),
      d = Te(s.defaultValue);
    u != null &&
      ((u = "" + u),
      u !== r.value && (r.value = u),
      s.defaultValue == null && r.defaultValue !== u && (r.defaultValue = u)),
      d != null && (r.defaultValue = "" + d);
  }
  function Fe(r) {
    var s = r.textContent;
    s === r._wrapperState.initialValue &&
      s !== "" &&
      s !== null &&
      (r.value = s);
  }
  function lt(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function yt(r, s) {
    return r == null || r === "http://www.w3.org/1999/xhtml"
      ? lt(s)
      : r === "http://www.w3.org/2000/svg" && s === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : r;
  }
  var Ht,
    Rr = (function (r) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (s, u, d, m) {
            MSApp.execUnsafeLocalFunction(function () {
              return r(s, u, d, m);
            });
          }
        : r;
    })(function (r, s) {
      if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r)
        r.innerHTML = s;
      else {
        for (
          Ht = Ht || document.createElement("div"),
            Ht.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = Ht.firstChild;
          r.firstChild;

        )
          r.removeChild(r.firstChild);
        for (; s.firstChild; ) r.appendChild(s.firstChild);
      }
    });
  function bt(r, s) {
    if (s) {
      var u = r.firstChild;
      if (u && u === r.lastChild && u.nodeType === 3) {
        u.nodeValue = s;
        return;
      }
    }
    r.textContent = s;
  }
  var an = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ar = ["Webkit", "ms", "Moz", "O"];
  Object.keys(an).forEach(function (r) {
    Ar.forEach(function (s) {
      (s = s + r.charAt(0).toUpperCase() + r.substring(1)), (an[s] = an[r]);
    });
  });
  function jn(r, s, u) {
    return s == null || typeof s == "boolean" || s === ""
      ? ""
      : u || typeof s != "number" || s === 0 || (an.hasOwnProperty(r) && an[r])
      ? ("" + s).trim()
      : s + "px";
  }
  function Ei(r, s) {
    r = r.style;
    for (var u in s)
      if (s.hasOwnProperty(u)) {
        var d = u.indexOf("--") === 0,
          m = jn(u, s[u], d);
        u === "float" && (u = "cssFloat"), d ? r.setProperty(u, m) : (r[u] = m);
      }
  }
  var Qr = ee(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Nr(r, s) {
    if (s) {
      if (Qr[r] && (s.children != null || s.dangerouslySetInnerHTML != null))
        throw Error(n(137, r));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(n(60));
        if (
          typeof s.dangerouslySetInnerHTML != "object" ||
          !("__html" in s.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(n(62));
    }
  }
  function _i(r, s) {
    if (r.indexOf("-") === -1) return typeof s.is == "string";
    switch (r) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jr = null;
  function Ci(r) {
    return (
      (r = r.target || r.srcElement || window),
      r.correspondingUseElement && (r = r.correspondingUseElement),
      r.nodeType === 3 ? r.parentNode : r
    );
  }
  var ki = null,
    or = null,
    Kn = null;
  function jr(r) {
    if ((r = Sa(r))) {
      if (typeof ki != "function") throw Error(n(280));
      var s = r.stateNode;
      s && ((s = fu(s)), ki(r.stateNode, r.type, s));
    }
  }
  function ei(r) {
    or ? (Kn ? Kn.push(r) : (Kn = [r])) : (or = r);
  }
  function ps() {
    if (or) {
      var r = or,
        s = Kn;
      if (((Kn = or = null), jr(r), s)) for (r = 0; r < s.length; r++) jr(s[r]);
    }
  }
  function Js(r, s) {
    return r(s);
  }
  function L() {}
  var B = !1;
  function K(r, s, u) {
    if (B) return r(s, u);
    B = !0;
    try {
      return Js(r, s, u);
    } finally {
      (B = !1), (or !== null || Kn !== null) && (L(), ps());
    }
  }
  function ne(r, s) {
    var u = r.stateNode;
    if (u === null) return null;
    var d = fu(u);
    if (d === null) return null;
    u = d[s];
    e: switch (s) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) ||
          ((r = r.type),
          (d = !(
            r === "button" ||
            r === "input" ||
            r === "select" ||
            r === "textarea"
          ))),
          (r = !d);
        break e;
      default:
        r = !1;
    }
    if (r) return null;
    if (u && typeof u != "function") throw Error(n(231, s, typeof u));
    return u;
  }
  var xe = !1;
  if (c)
    try {
      var De = {};
      Object.defineProperty(De, "passive", {
        get: function () {
          xe = !0;
        },
      }),
        window.addEventListener("test", De, De),
        window.removeEventListener("test", De, De);
    } catch {
      xe = !1;
    }
  function Ze(r, s, u, d, m, v, k, A, D) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(u, W);
    } catch (re) {
      this.onError(re);
    }
  }
  var Ee = !1,
    Pe = null,
    ye = !1,
    Ke = null,
    Je = {
      onError: function (r) {
        (Ee = !0), (Pe = r);
      },
    };
  function xt(r, s, u, d, m, v, k, A, D) {
    (Ee = !1), (Pe = null), Ze.apply(Je, arguments);
  }
  function Zt(r, s, u, d, m, v, k, A, D) {
    if ((xt.apply(this, arguments), Ee)) {
      if (Ee) {
        var W = Pe;
        (Ee = !1), (Pe = null);
      } else throw Error(n(198));
      ye || ((ye = !0), (Ke = W));
    }
  }
  function ht(r) {
    var s = r,
      u = r;
    if (r.alternate) for (; s.return; ) s = s.return;
    else {
      r = s;
      do (s = r), s.flags & 4098 && (u = s.return), (r = s.return);
      while (r);
    }
    return s.tag === 3 ? u : null;
  }
  function vt(r) {
    if (r.tag === 13) {
      var s = r.memoizedState;
      if (
        (s === null && ((r = r.alternate), r !== null && (s = r.memoizedState)),
        s !== null)
      )
        return s.dehydrated;
    }
    return null;
  }
  function Lt(r) {
    if (ht(r) !== r) throw Error(n(188));
  }
  function Ti(r) {
    var s = r.alternate;
    if (!s) {
      if (((s = ht(r)), s === null)) throw Error(n(188));
      return s !== r ? null : r;
    }
    for (var u = r, d = s; ; ) {
      var m = u.return;
      if (m === null) break;
      var v = m.alternate;
      if (v === null) {
        if (((d = m.return), d !== null)) {
          u = d;
          continue;
        }
        break;
      }
      if (m.child === v.child) {
        for (v = m.child; v; ) {
          if (v === u) return Lt(m), r;
          if (v === d) return Lt(m), s;
          v = v.sibling;
        }
        throw Error(n(188));
      }
      if (u.return !== d.return) (u = m), (d = v);
      else {
        for (var k = !1, A = m.child; A; ) {
          if (A === u) {
            (k = !0), (u = m), (d = v);
            break;
          }
          if (A === d) {
            (k = !0), (d = m), (u = v);
            break;
          }
          A = A.sibling;
        }
        if (!k) {
          for (A = v.child; A; ) {
            if (A === u) {
              (k = !0), (u = v), (d = m);
              break;
            }
            if (A === d) {
              (k = !0), (d = v), (u = m);
              break;
            }
            A = A.sibling;
          }
          if (!k) throw Error(n(189));
        }
      }
      if (u.alternate !== d) throw Error(n(190));
    }
    if (u.tag !== 3) throw Error(n(188));
    return u.stateNode.current === u ? r : s;
  }
  function Pi(r) {
    return (r = Ti(r)), r !== null ? Gn(r) : null;
  }
  function Gn(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var s = Gn(r);
      if (s !== null) return s;
      r = r.sibling;
    }
    return null;
  }
  var Dn = t.unstable_scheduleCallback,
    eo = t.unstable_cancelCallback,
    ms = t.unstable_shouldYield,
    ti = t.unstable_requestPaint,
    wt = t.unstable_now,
    to = t.unstable_getCurrentPriorityLevel,
    pt = t.unstable_ImmediatePriority,
    Kt = t.unstable_UserBlockingPriority,
    ni = t.unstable_NormalPriority,
    gs = t.unstable_LowPriority,
    Rt = t.unstable_IdlePriority,
    ar = null,
    On = null;
  function Td(r) {
    if (On && typeof On.onCommitFiberRoot == "function")
      try {
        On.onCommitFiberRoot(ar, r, void 0, (r.current.flags & 128) === 128);
      } catch {}
  }
  var lr = Math.clz32 ? Math.clz32 : a_,
    s_ = Math.log,
    o_ = Math.LN2;
  function a_(r) {
    return (r >>>= 0), r === 0 ? 32 : (31 - ((s_(r) / o_) | 0)) | 0;
  }
  var Gl = 64,
    ql = 4194304;
  function ra(r) {
    switch (r & -r) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return r;
    }
  }
  function Yl(r, s) {
    var u = r.pendingLanes;
    if (u === 0) return 0;
    var d = 0,
      m = r.suspendedLanes,
      v = r.pingedLanes,
      k = u & 268435455;
    if (k !== 0) {
      var A = k & ~m;
      A !== 0 ? (d = ra(A)) : ((v &= k), v !== 0 && (d = ra(v)));
    } else (k = u & ~m), k !== 0 ? (d = ra(k)) : v !== 0 && (d = ra(v));
    if (d === 0) return 0;
    if (
      s !== 0 &&
      s !== d &&
      !(s & m) &&
      ((m = d & -d), (v = s & -s), m >= v || (m === 16 && (v & 4194240) !== 0))
    )
      return s;
    if ((d & 4 && (d |= u & 16), (s = r.entangledLanes), s !== 0))
      for (r = r.entanglements, s &= d; 0 < s; )
        (u = 31 - lr(s)), (m = 1 << u), (d |= r[u]), (s &= ~m);
    return d;
  }
  function l_(r, s) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return s + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return s + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function u_(r, s) {
    for (
      var u = r.suspendedLanes,
        d = r.pingedLanes,
        m = r.expirationTimes,
        v = r.pendingLanes;
      0 < v;

    ) {
      var k = 31 - lr(v),
        A = 1 << k,
        D = m[k];
      D === -1
        ? (!(A & u) || A & d) && (m[k] = l_(A, s))
        : D <= s && (r.expiredLanes |= A),
        (v &= ~A);
    }
  }
  function Pd(r) {
    return (
      (r = r.pendingLanes & -1073741825),
      r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    );
  }
  function sg() {
    var r = Gl;
    return (Gl <<= 1), !(Gl & 4194240) && (Gl = 64), r;
  }
  function Rd(r) {
    for (var s = [], u = 0; 31 > u; u++) s.push(r);
    return s;
  }
  function ia(r, s, u) {
    (r.pendingLanes |= s),
      s !== 536870912 && ((r.suspendedLanes = 0), (r.pingedLanes = 0)),
      (r = r.eventTimes),
      (s = 31 - lr(s)),
      (r[s] = u);
  }
  function c_(r, s) {
    var u = r.pendingLanes & ~s;
    (r.pendingLanes = s),
      (r.suspendedLanes = 0),
      (r.pingedLanes = 0),
      (r.expiredLanes &= s),
      (r.mutableReadLanes &= s),
      (r.entangledLanes &= s),
      (s = r.entanglements);
    var d = r.eventTimes;
    for (r = r.expirationTimes; 0 < u; ) {
      var m = 31 - lr(u),
        v = 1 << m;
      (s[m] = 0), (d[m] = -1), (r[m] = -1), (u &= ~v);
    }
  }
  function Ad(r, s) {
    var u = (r.entangledLanes |= s);
    for (r = r.entanglements; u; ) {
      var d = 31 - lr(u),
        m = 1 << d;
      (m & s) | (r[d] & s) && (r[d] |= s), (u &= ~m);
    }
  }
  var gt = 0;
  function og(r) {
    return (
      (r &= -r), 1 < r ? (4 < r ? (r & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ag,
    Nd,
    lg,
    ug,
    cg,
    jd = !1,
    Xl = [],
    Ri = null,
    Ai = null,
    Ni = null,
    sa = new Map(),
    oa = new Map(),
    ji = [],
    d_ =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function dg(r, s) {
    switch (r) {
      case "focusin":
      case "focusout":
        Ri = null;
        break;
      case "dragenter":
      case "dragleave":
        Ai = null;
        break;
      case "mouseover":
      case "mouseout":
        Ni = null;
        break;
      case "pointerover":
      case "pointerout":
        sa.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oa.delete(s.pointerId);
    }
  }
  function aa(r, s, u, d, m, v) {
    return r === null || r.nativeEvent !== v
      ? ((r = {
          blockedOn: s,
          domEventName: u,
          eventSystemFlags: d,
          nativeEvent: v,
          targetContainers: [m],
        }),
        s !== null && ((s = Sa(s)), s !== null && Nd(s)),
        r)
      : ((r.eventSystemFlags |= d),
        (s = r.targetContainers),
        m !== null && s.indexOf(m) === -1 && s.push(m),
        r);
  }
  function f_(r, s, u, d, m) {
    switch (s) {
      case "focusin":
        return (Ri = aa(Ri, r, s, u, d, m)), !0;
      case "dragenter":
        return (Ai = aa(Ai, r, s, u, d, m)), !0;
      case "mouseover":
        return (Ni = aa(Ni, r, s, u, d, m)), !0;
      case "pointerover":
        var v = m.pointerId;
        return sa.set(v, aa(sa.get(v) || null, r, s, u, d, m)), !0;
      case "gotpointercapture":
        return (
          (v = m.pointerId), oa.set(v, aa(oa.get(v) || null, r, s, u, d, m)), !0
        );
    }
    return !1;
  }
  function fg(r) {
    var s = ys(r.target);
    if (s !== null) {
      var u = ht(s);
      if (u !== null) {
        if (((s = u.tag), s === 13)) {
          if (((s = vt(u)), s !== null)) {
            (r.blockedOn = s),
              cg(r.priority, function () {
                lg(u);
              });
            return;
          }
        } else if (s === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function Ql(r) {
    if (r.blockedOn !== null) return !1;
    for (var s = r.targetContainers; 0 < s.length; ) {
      var u = Od(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (u === null) {
        u = r.nativeEvent;
        var d = new u.constructor(u.type, u);
        (Jr = d), u.target.dispatchEvent(d), (Jr = null);
      } else return (s = Sa(u)), s !== null && Nd(s), (r.blockedOn = u), !1;
      s.shift();
    }
    return !0;
  }
  function hg(r, s, u) {
    Ql(r) && u.delete(s);
  }
  function h_() {
    (jd = !1),
      Ri !== null && Ql(Ri) && (Ri = null),
      Ai !== null && Ql(Ai) && (Ai = null),
      Ni !== null && Ql(Ni) && (Ni = null),
      sa.forEach(hg),
      oa.forEach(hg);
  }
  function la(r, s) {
    r.blockedOn === s &&
      ((r.blockedOn = null),
      jd ||
        ((jd = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, h_)));
  }
  function ua(r) {
    function s(m) {
      return la(m, r);
    }
    if (0 < Xl.length) {
      la(Xl[0], r);
      for (var u = 1; u < Xl.length; u++) {
        var d = Xl[u];
        d.blockedOn === r && (d.blockedOn = null);
      }
    }
    for (
      Ri !== null && la(Ri, r),
        Ai !== null && la(Ai, r),
        Ni !== null && la(Ni, r),
        sa.forEach(s),
        oa.forEach(s),
        u = 0;
      u < ji.length;
      u++
    )
      (d = ji[u]), d.blockedOn === r && (d.blockedOn = null);
    for (; 0 < ji.length && ((u = ji[0]), u.blockedOn === null); )
      fg(u), u.blockedOn === null && ji.shift();
  }
  var no = j.ReactCurrentBatchConfig,
    Jl = !0;
  function p_(r, s, u, d) {
    var m = gt,
      v = no.transition;
    no.transition = null;
    try {
      (gt = 1), Dd(r, s, u, d);
    } finally {
      (gt = m), (no.transition = v);
    }
  }
  function m_(r, s, u, d) {
    var m = gt,
      v = no.transition;
    no.transition = null;
    try {
      (gt = 4), Dd(r, s, u, d);
    } finally {
      (gt = m), (no.transition = v);
    }
  }
  function Dd(r, s, u, d) {
    if (Jl) {
      var m = Od(r, s, u, d);
      if (m === null) Xd(r, s, d, eu, u), dg(r, d);
      else if (f_(m, r, s, u, d)) d.stopPropagation();
      else if ((dg(r, d), s & 4 && -1 < d_.indexOf(r))) {
        for (; m !== null; ) {
          var v = Sa(m);
          if (
            (v !== null && ag(v),
            (v = Od(r, s, u, d)),
            v === null && Xd(r, s, d, eu, u),
            v === m)
          )
            break;
          m = v;
        }
        m !== null && d.stopPropagation();
      } else Xd(r, s, d, null, u);
    }
  }
  var eu = null;
  function Od(r, s, u, d) {
    if (((eu = null), (r = Ci(d)), (r = ys(r)), r !== null))
      if (((s = ht(r)), s === null)) r = null;
      else if (((u = s.tag), u === 13)) {
        if (((r = vt(s)), r !== null)) return r;
        r = null;
      } else if (u === 3) {
        if (s.stateNode.current.memoizedState.isDehydrated)
          return s.tag === 3 ? s.stateNode.containerInfo : null;
        r = null;
      } else s !== r && (r = null);
    return (eu = r), null;
  }
  function pg(r) {
    switch (r) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (to()) {
          case pt:
            return 1;
          case Kt:
            return 4;
          case ni:
          case gs:
            return 16;
          case Rt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Di = null,
    Ld = null,
    tu = null;
  function mg() {
    if (tu) return tu;
    var r,
      s = Ld,
      u = s.length,
      d,
      m = "value" in Di ? Di.value : Di.textContent,
      v = m.length;
    for (r = 0; r < u && s[r] === m[r]; r++);
    var k = u - r;
    for (d = 1; d <= k && s[u - d] === m[v - d]; d++);
    return (tu = m.slice(r, 1 < d ? 1 - d : void 0));
  }
  function nu(r) {
    var s = r.keyCode;
    return (
      "charCode" in r
        ? ((r = r.charCode), r === 0 && s === 13 && (r = 13))
        : (r = s),
      r === 10 && (r = 13),
      32 <= r || r === 13 ? r : 0
    );
  }
  function ru() {
    return !0;
  }
  function gg() {
    return !1;
  }
  function Ln(r) {
    function s(u, d, m, v, k) {
      (this._reactName = u),
        (this._targetInst = m),
        (this.type = d),
        (this.nativeEvent = v),
        (this.target = k),
        (this.currentTarget = null);
      for (var A in r)
        r.hasOwnProperty(A) && ((u = r[A]), (this[A] = u ? u(v) : v[A]));
      return (
        (this.isDefaultPrevented = (
          v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1
        )
          ? ru
          : gg),
        (this.isPropagationStopped = gg),
        this
      );
    }
    return (
      ee(s.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != "unknown" && (u.returnValue = !1),
            (this.isDefaultPrevented = ru));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
            (this.isPropagationStopped = ru));
        },
        persist: function () {},
        isPersistent: ru,
      }),
      s
    );
  }
  var ro = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (r) {
        return r.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Md = Ln(ro),
    ca = ee({}, ro, { view: 0, detail: 0 }),
    g_ = Ln(ca),
    Fd,
    Id,
    da,
    iu = ee({}, ca, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bd,
      button: 0,
      buttons: 0,
      relatedTarget: function (r) {
        return r.relatedTarget === void 0
          ? r.fromElement === r.srcElement
            ? r.toElement
            : r.fromElement
          : r.relatedTarget;
      },
      movementX: function (r) {
        return "movementX" in r
          ? r.movementX
          : (r !== da &&
              (da && r.type === "mousemove"
                ? ((Fd = r.screenX - da.screenX), (Id = r.screenY - da.screenY))
                : (Id = Fd = 0),
              (da = r)),
            Fd);
      },
      movementY: function (r) {
        return "movementY" in r ? r.movementY : Id;
      },
    }),
    yg = Ln(iu),
    y_ = ee({}, iu, { dataTransfer: 0 }),
    v_ = Ln(y_),
    x_ = ee({}, ca, { relatedTarget: 0 }),
    Vd = Ln(x_),
    w_ = ee({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    S_ = Ln(w_),
    b_ = ee({}, ro, {
      clipboardData: function (r) {
        return "clipboardData" in r ? r.clipboardData : window.clipboardData;
      },
    }),
    E_ = Ln(b_),
    __ = ee({}, ro, { data: 0 }),
    vg = Ln(__),
    C_ = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    k_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    T_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function P_(r) {
    var s = this.nativeEvent;
    return s.getModifierState
      ? s.getModifierState(r)
      : (r = T_[r])
      ? !!s[r]
      : !1;
  }
  function Bd() {
    return P_;
  }
  var R_ = ee({}, ca, {
      key: function (r) {
        if (r.key) {
          var s = C_[r.key] || r.key;
          if (s !== "Unidentified") return s;
        }
        return r.type === "keypress"
          ? ((r = nu(r)), r === 13 ? "Enter" : String.fromCharCode(r))
          : r.type === "keydown" || r.type === "keyup"
          ? k_[r.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bd,
      charCode: function (r) {
        return r.type === "keypress" ? nu(r) : 0;
      },
      keyCode: function (r) {
        return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
      },
      which: function (r) {
        return r.type === "keypress"
          ? nu(r)
          : r.type === "keydown" || r.type === "keyup"
          ? r.keyCode
          : 0;
      },
    }),
    A_ = Ln(R_),
    N_ = ee({}, iu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xg = Ln(N_),
    j_ = ee({}, ca, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bd,
    }),
    D_ = Ln(j_),
    O_ = ee({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    L_ = Ln(O_),
    M_ = ee({}, iu, {
      deltaX: function (r) {
        return "deltaX" in r
          ? r.deltaX
          : "wheelDeltaX" in r
          ? -r.wheelDeltaX
          : 0;
      },
      deltaY: function (r) {
        return "deltaY" in r
          ? r.deltaY
          : "wheelDeltaY" in r
          ? -r.wheelDeltaY
          : "wheelDelta" in r
          ? -r.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    F_ = Ln(M_),
    I_ = [9, 13, 27, 32],
    zd = c && "CompositionEvent" in window,
    fa = null;
  c && "documentMode" in document && (fa = document.documentMode);
  var V_ = c && "TextEvent" in window && !fa,
    wg = c && (!zd || (fa && 8 < fa && 11 >= fa)),
    Sg = " ",
    bg = !1;
  function Eg(r, s) {
    switch (r) {
      case "keyup":
        return I_.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _g(r) {
    return (r = r.detail), typeof r == "object" && "data" in r ? r.data : null;
  }
  var io = !1;
  function B_(r, s) {
    switch (r) {
      case "compositionend":
        return _g(s);
      case "keypress":
        return s.which !== 32 ? null : ((bg = !0), Sg);
      case "textInput":
        return (r = s.data), r === Sg && bg ? null : r;
      default:
        return null;
    }
  }
  function z_(r, s) {
    if (io)
      return r === "compositionend" || (!zd && Eg(r, s))
        ? ((r = mg()), (tu = Ld = Di = null), (io = !1), r)
        : null;
    switch (r) {
      case "paste":
        return null;
      case "keypress":
        if (!(s.ctrlKey || s.altKey || s.metaKey) || (s.ctrlKey && s.altKey)) {
          if (s.char && 1 < s.char.length) return s.char;
          if (s.which) return String.fromCharCode(s.which);
        }
        return null;
      case "compositionend":
        return wg && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var U_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Cg(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s === "input" ? !!U_[r.type] : s === "textarea";
  }
  function kg(r, s, u, d) {
    ei(d),
      (s = uu(s, "onChange")),
      0 < s.length &&
        ((u = new Md("onChange", "change", null, u, d)),
        r.push({ event: u, listeners: s }));
  }
  var ha = null,
    pa = null;
  function $_(r) {
    Wg(r, 0);
  }
  function su(r) {
    var s = uo(r);
    if (_e(s)) return r;
  }
  function W_(r, s) {
    if (r === "change") return s;
  }
  var Tg = !1;
  if (c) {
    var Ud;
    if (c) {
      var $d = "oninput" in document;
      if (!$d) {
        var Pg = document.createElement("div");
        Pg.setAttribute("oninput", "return;"),
          ($d = typeof Pg.oninput == "function");
      }
      Ud = $d;
    } else Ud = !1;
    Tg = Ud && (!document.documentMode || 9 < document.documentMode);
  }
  function Rg() {
    ha && (ha.detachEvent("onpropertychange", Ag), (pa = ha = null));
  }
  function Ag(r) {
    if (r.propertyName === "value" && su(pa)) {
      var s = [];
      kg(s, pa, r, Ci(r)), K($_, s);
    }
  }
  function H_(r, s, u) {
    r === "focusin"
      ? (Rg(), (ha = s), (pa = u), ha.attachEvent("onpropertychange", Ag))
      : r === "focusout" && Rg();
  }
  function Z_(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown")
      return su(pa);
  }
  function K_(r, s) {
    if (r === "click") return su(s);
  }
  function G_(r, s) {
    if (r === "input" || r === "change") return su(s);
  }
  function q_(r, s) {
    return (r === s && (r !== 0 || 1 / r === 1 / s)) || (r !== r && s !== s);
  }
  var ur = typeof Object.is == "function" ? Object.is : q_;
  function ma(r, s) {
    if (ur(r, s)) return !0;
    if (
      typeof r != "object" ||
      r === null ||
      typeof s != "object" ||
      s === null
    )
      return !1;
    var u = Object.keys(r),
      d = Object.keys(s);
    if (u.length !== d.length) return !1;
    for (d = 0; d < u.length; d++) {
      var m = u[d];
      if (!f.call(s, m) || !ur(r[m], s[m])) return !1;
    }
    return !0;
  }
  function Ng(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function jg(r, s) {
    var u = Ng(r);
    r = 0;
    for (var d; u; ) {
      if (u.nodeType === 3) {
        if (((d = r + u.textContent.length), r <= s && d >= s))
          return { node: u, offset: s - r };
        r = d;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Ng(u);
    }
  }
  function Dg(r, s) {
    return r && s
      ? r === s
        ? !0
        : r && r.nodeType === 3
        ? !1
        : s && s.nodeType === 3
        ? Dg(r, s.parentNode)
        : "contains" in r
        ? r.contains(s)
        : r.compareDocumentPosition
        ? !!(r.compareDocumentPosition(s) & 16)
        : !1
      : !1;
  }
  function Og() {
    for (var r = window, s = We(); s instanceof r.HTMLIFrameElement; ) {
      try {
        var u = typeof s.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) r = s.contentWindow;
      else break;
      s = We(r.document);
    }
    return s;
  }
  function Wd(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return (
      s &&
      ((s === "input" &&
        (r.type === "text" ||
          r.type === "search" ||
          r.type === "tel" ||
          r.type === "url" ||
          r.type === "password")) ||
        s === "textarea" ||
        r.contentEditable === "true")
    );
  }
  function Y_(r) {
    var s = Og(),
      u = r.focusedElem,
      d = r.selectionRange;
    if (
      s !== u &&
      u &&
      u.ownerDocument &&
      Dg(u.ownerDocument.documentElement, u)
    ) {
      if (d !== null && Wd(u)) {
        if (
          ((s = d.start),
          (r = d.end),
          r === void 0 && (r = s),
          "selectionStart" in u)
        )
          (u.selectionStart = s),
            (u.selectionEnd = Math.min(r, u.value.length));
        else if (
          ((r = ((s = u.ownerDocument || document) && s.defaultView) || window),
          r.getSelection)
        ) {
          r = r.getSelection();
          var m = u.textContent.length,
            v = Math.min(d.start, m);
          (d = d.end === void 0 ? v : Math.min(d.end, m)),
            !r.extend && v > d && ((m = d), (d = v), (v = m)),
            (m = jg(u, v));
          var k = jg(u, d);
          m &&
            k &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== m.node ||
              r.anchorOffset !== m.offset ||
              r.focusNode !== k.node ||
              r.focusOffset !== k.offset) &&
            ((s = s.createRange()),
            s.setStart(m.node, m.offset),
            r.removeAllRanges(),
            v > d
              ? (r.addRange(s), r.extend(k.node, k.offset))
              : (s.setEnd(k.node, k.offset), r.addRange(s)));
        }
      }
      for (s = [], r = u; (r = r.parentNode); )
        r.nodeType === 1 &&
          s.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < s.length; u++)
        (r = s[u]),
          (r.element.scrollLeft = r.left),
          (r.element.scrollTop = r.top);
    }
  }
  var X_ = c && "documentMode" in document && 11 >= document.documentMode,
    so = null,
    Hd = null,
    ga = null,
    Zd = !1;
  function Lg(r, s, u) {
    var d =
      u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Zd ||
      so == null ||
      so !== We(d) ||
      ((d = so),
      "selectionStart" in d && Wd(d)
        ? (d = { start: d.selectionStart, end: d.selectionEnd })
        : ((d = (
            (d.ownerDocument && d.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset,
          })),
      (ga && ma(ga, d)) ||
        ((ga = d),
        (d = uu(Hd, "onSelect")),
        0 < d.length &&
          ((s = new Md("onSelect", "select", null, s, u)),
          r.push({ event: s, listeners: d }),
          (s.target = so))));
  }
  function ou(r, s) {
    var u = {};
    return (
      (u[r.toLowerCase()] = s.toLowerCase()),
      (u["Webkit" + r] = "webkit" + s),
      (u["Moz" + r] = "moz" + s),
      u
    );
  }
  var oo = {
      animationend: ou("Animation", "AnimationEnd"),
      animationiteration: ou("Animation", "AnimationIteration"),
      animationstart: ou("Animation", "AnimationStart"),
      transitionend: ou("Transition", "TransitionEnd"),
    },
    Kd = {},
    Mg = {};
  c &&
    ((Mg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete oo.animationend.animation,
      delete oo.animationiteration.animation,
      delete oo.animationstart.animation),
    "TransitionEvent" in window || delete oo.transitionend.transition);
  function au(r) {
    if (Kd[r]) return Kd[r];
    if (!oo[r]) return r;
    var s = oo[r],
      u;
    for (u in s) if (s.hasOwnProperty(u) && u in Mg) return (Kd[r] = s[u]);
    return r;
  }
  var Fg = au("animationend"),
    Ig = au("animationiteration"),
    Vg = au("animationstart"),
    Bg = au("transitionend"),
    zg = new Map(),
    Ug =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Oi(r, s) {
    zg.set(r, s), a(s, [r]);
  }
  for (var Gd = 0; Gd < Ug.length; Gd++) {
    var qd = Ug[Gd],
      Q_ = qd.toLowerCase(),
      J_ = qd[0].toUpperCase() + qd.slice(1);
    Oi(Q_, "on" + J_);
  }
  Oi(Fg, "onAnimationEnd"),
    Oi(Ig, "onAnimationIteration"),
    Oi(Vg, "onAnimationStart"),
    Oi("dblclick", "onDoubleClick"),
    Oi("focusin", "onFocus"),
    Oi("focusout", "onBlur"),
    Oi(Bg, "onTransitionEnd"),
    l("onMouseEnter", ["mouseout", "mouseover"]),
    l("onMouseLeave", ["mouseout", "mouseover"]),
    l("onPointerEnter", ["pointerout", "pointerover"]),
    l("onPointerLeave", ["pointerout", "pointerover"]),
    a(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    a(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    a(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    a(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    a(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ya =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    eC = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ya)
    );
  function $g(r, s, u) {
    var d = r.type || "unknown-event";
    (r.currentTarget = u), Zt(d, s, void 0, r), (r.currentTarget = null);
  }
  function Wg(r, s) {
    s = (s & 4) !== 0;
    for (var u = 0; u < r.length; u++) {
      var d = r[u],
        m = d.event;
      d = d.listeners;
      e: {
        var v = void 0;
        if (s)
          for (var k = d.length - 1; 0 <= k; k--) {
            var A = d[k],
              D = A.instance,
              W = A.currentTarget;
            if (((A = A.listener), D !== v && m.isPropagationStopped()))
              break e;
            $g(m, A, W), (v = D);
          }
        else
          for (k = 0; k < d.length; k++) {
            if (
              ((A = d[k]),
              (D = A.instance),
              (W = A.currentTarget),
              (A = A.listener),
              D !== v && m.isPropagationStopped())
            )
              break e;
            $g(m, A, W), (v = D);
          }
      }
    }
    if (ye) throw ((r = Ke), (ye = !1), (Ke = null), r);
  }
  function Et(r, s) {
    var u = s[rf];
    u === void 0 && (u = s[rf] = new Set());
    var d = r + "__bubble";
    u.has(d) || (Hg(s, r, 2, !1), u.add(d));
  }
  function Yd(r, s, u) {
    var d = 0;
    s && (d |= 4), Hg(u, r, d, s);
  }
  var lu = "_reactListening" + Math.random().toString(36).slice(2);
  function va(r) {
    if (!r[lu]) {
      (r[lu] = !0),
        i.forEach(function (u) {
          u !== "selectionchange" && (eC.has(u) || Yd(u, !1, r), Yd(u, !0, r));
        });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      s === null || s[lu] || ((s[lu] = !0), Yd("selectionchange", !1, s));
    }
  }
  function Hg(r, s, u, d) {
    switch (pg(s)) {
      case 1:
        var m = p_;
        break;
      case 4:
        m = m_;
        break;
      default:
        m = Dd;
    }
    (u = m.bind(null, s, u, r)),
      (m = void 0),
      !xe ||
        (s !== "touchstart" && s !== "touchmove" && s !== "wheel") ||
        (m = !0),
      d
        ? m !== void 0
          ? r.addEventListener(s, u, { capture: !0, passive: m })
          : r.addEventListener(s, u, !0)
        : m !== void 0
        ? r.addEventListener(s, u, { passive: m })
        : r.addEventListener(s, u, !1);
  }
  function Xd(r, s, u, d, m) {
    var v = d;
    if (!(s & 1) && !(s & 2) && d !== null)
      e: for (;;) {
        if (d === null) return;
        var k = d.tag;
        if (k === 3 || k === 4) {
          var A = d.stateNode.containerInfo;
          if (A === m || (A.nodeType === 8 && A.parentNode === m)) break;
          if (k === 4)
            for (k = d.return; k !== null; ) {
              var D = k.tag;
              if (
                (D === 3 || D === 4) &&
                ((D = k.stateNode.containerInfo),
                D === m || (D.nodeType === 8 && D.parentNode === m))
              )
                return;
              k = k.return;
            }
          for (; A !== null; ) {
            if (((k = ys(A)), k === null)) return;
            if (((D = k.tag), D === 5 || D === 6)) {
              d = v = k;
              continue e;
            }
            A = A.parentNode;
          }
        }
        d = d.return;
      }
    K(function () {
      var W = v,
        re = Ci(u),
        se = [];
      e: {
        var te = zg.get(r);
        if (te !== void 0) {
          var we = Md,
            ke = r;
          switch (r) {
            case "keypress":
              if (nu(u) === 0) break e;
            case "keydown":
            case "keyup":
              we = A_;
              break;
            case "focusin":
              (ke = "focus"), (we = Vd);
              break;
            case "focusout":
              (ke = "blur"), (we = Vd);
              break;
            case "beforeblur":
            case "afterblur":
              we = Vd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = yg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = v_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = D_;
              break;
            case Fg:
            case Ig:
            case Vg:
              we = S_;
              break;
            case Bg:
              we = L_;
              break;
            case "scroll":
              we = g_;
              break;
            case "wheel":
              we = F_;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = E_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = xg;
          }
          var Ae = (s & 4) !== 0,
            It = !Ae && r === "scroll",
            U = Ae ? (te !== null ? te + "Capture" : null) : te;
          Ae = [];
          for (var I = W, $; I !== null; ) {
            $ = I;
            var fe = $.stateNode;
            if (
              ($.tag === 5 &&
                fe !== null &&
                (($ = fe),
                U !== null &&
                  ((fe = ne(I, U)), fe != null && Ae.push(xa(I, fe, $)))),
              It)
            )
              break;
            I = I.return;
          }
          0 < Ae.length &&
            ((te = new we(te, ke, null, u, re)),
            se.push({ event: te, listeners: Ae }));
        }
      }
      if (!(s & 7)) {
        e: {
          if (
            ((te = r === "mouseover" || r === "pointerover"),
            (we = r === "mouseout" || r === "pointerout"),
            te &&
              u !== Jr &&
              (ke = u.relatedTarget || u.fromElement) &&
              (ys(ke) || ke[ri]))
          )
            break e;
          if (
            (we || te) &&
            ((te =
              re.window === re
                ? re
                : (te = re.ownerDocument)
                ? te.defaultView || te.parentWindow
                : window),
            we
              ? ((ke = u.relatedTarget || u.toElement),
                (we = W),
                (ke = ke ? ys(ke) : null),
                ke !== null &&
                  ((It = ht(ke)),
                  ke !== It || (ke.tag !== 5 && ke.tag !== 6)) &&
                  (ke = null))
              : ((we = null), (ke = W)),
            we !== ke)
          ) {
            if (
              ((Ae = yg),
              (fe = "onMouseLeave"),
              (U = "onMouseEnter"),
              (I = "mouse"),
              (r === "pointerout" || r === "pointerover") &&
                ((Ae = xg),
                (fe = "onPointerLeave"),
                (U = "onPointerEnter"),
                (I = "pointer")),
              (It = we == null ? te : uo(we)),
              ($ = ke == null ? te : uo(ke)),
              (te = new Ae(fe, I + "leave", we, u, re)),
              (te.target = It),
              (te.relatedTarget = $),
              (fe = null),
              ys(re) === W &&
                ((Ae = new Ae(U, I + "enter", ke, u, re)),
                (Ae.target = $),
                (Ae.relatedTarget = It),
                (fe = Ae)),
              (It = fe),
              we && ke)
            )
              t: {
                for (Ae = we, U = ke, I = 0, $ = Ae; $; $ = ao($)) I++;
                for ($ = 0, fe = U; fe; fe = ao(fe)) $++;
                for (; 0 < I - $; ) (Ae = ao(Ae)), I--;
                for (; 0 < $ - I; ) (U = ao(U)), $--;
                for (; I--; ) {
                  if (Ae === U || (U !== null && Ae === U.alternate)) break t;
                  (Ae = ao(Ae)), (U = ao(U));
                }
                Ae = null;
              }
            else Ae = null;
            we !== null && Zg(se, te, we, Ae, !1),
              ke !== null && It !== null && Zg(se, It, ke, Ae, !0);
          }
        }
        e: {
          if (
            ((te = W ? uo(W) : window),
            (we = te.nodeName && te.nodeName.toLowerCase()),
            we === "select" || (we === "input" && te.type === "file"))
          )
            var Oe = W_;
          else if (Cg(te))
            if (Tg) Oe = G_;
            else {
              Oe = Z_;
              var Ve = H_;
            }
          else
            (we = te.nodeName) &&
              we.toLowerCase() === "input" &&
              (te.type === "checkbox" || te.type === "radio") &&
              (Oe = K_);
          if (Oe && (Oe = Oe(r, W))) {
            kg(se, Oe, u, re);
            break e;
          }
          Ve && Ve(r, te, W),
            r === "focusout" &&
              (Ve = te._wrapperState) &&
              Ve.controlled &&
              te.type === "number" &&
              z(te, "number", te.value);
        }
        switch (((Ve = W ? uo(W) : window), r)) {
          case "focusin":
            (Cg(Ve) || Ve.contentEditable === "true") &&
              ((so = Ve), (Hd = W), (ga = null));
            break;
          case "focusout":
            ga = Hd = so = null;
            break;
          case "mousedown":
            Zd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Zd = !1), Lg(se, u, re);
            break;
          case "selectionchange":
            if (X_) break;
          case "keydown":
          case "keyup":
            Lg(se, u, re);
        }
        var Be;
        if (zd)
          e: {
            switch (r) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
        else
          io
            ? Eg(r, u) && (Ge = "onCompositionEnd")
            : r === "keydown" &&
              u.keyCode === 229 &&
              (Ge = "onCompositionStart");
        Ge &&
          (wg &&
            u.locale !== "ko" &&
            (io || Ge !== "onCompositionStart"
              ? Ge === "onCompositionEnd" && io && (Be = mg())
              : ((Di = re),
                (Ld = "value" in Di ? Di.value : Di.textContent),
                (io = !0))),
          (Ve = uu(W, Ge)),
          0 < Ve.length &&
            ((Ge = new vg(Ge, r, null, u, re)),
            se.push({ event: Ge, listeners: Ve }),
            Be
              ? (Ge.data = Be)
              : ((Be = _g(u)), Be !== null && (Ge.data = Be)))),
          (Be = V_ ? B_(r, u) : z_(r, u)) &&
            ((W = uu(W, "onBeforeInput")),
            0 < W.length &&
              ((re = new vg("onBeforeInput", "beforeinput", null, u, re)),
              se.push({ event: re, listeners: W }),
              (re.data = Be)));
      }
      Wg(se, s);
    });
  }
  function xa(r, s, u) {
    return { instance: r, listener: s, currentTarget: u };
  }
  function uu(r, s) {
    for (var u = s + "Capture", d = []; r !== null; ) {
      var m = r,
        v = m.stateNode;
      m.tag === 5 &&
        v !== null &&
        ((m = v),
        (v = ne(r, u)),
        v != null && d.unshift(xa(r, v, m)),
        (v = ne(r, s)),
        v != null && d.push(xa(r, v, m))),
        (r = r.return);
    }
    return d;
  }
  function ao(r) {
    if (r === null) return null;
    do r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Zg(r, s, u, d, m) {
    for (var v = s._reactName, k = []; u !== null && u !== d; ) {
      var A = u,
        D = A.alternate,
        W = A.stateNode;
      if (D !== null && D === d) break;
      A.tag === 5 &&
        W !== null &&
        ((A = W),
        m
          ? ((D = ne(u, v)), D != null && k.unshift(xa(u, D, A)))
          : m || ((D = ne(u, v)), D != null && k.push(xa(u, D, A)))),
        (u = u.return);
    }
    k.length !== 0 && r.push({ event: s, listeners: k });
  }
  var tC = /\r\n?/g,
    nC = /\u0000|\uFFFD/g;
  function Kg(r) {
    return (typeof r == "string" ? r : "" + r)
      .replace(
        tC,
        `
`
      )
      .replace(nC, "");
  }
  function cu(r, s, u) {
    if (((s = Kg(s)), Kg(r) !== s && u)) throw Error(n(425));
  }
  function du() {}
  var Qd = null,
    Jd = null;
  function ef(r, s) {
    return (
      r === "textarea" ||
      r === "noscript" ||
      typeof s.children == "string" ||
      typeof s.children == "number" ||
      (typeof s.dangerouslySetInnerHTML == "object" &&
        s.dangerouslySetInnerHTML !== null &&
        s.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tf = typeof setTimeout == "function" ? setTimeout : void 0,
    rC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Gg = typeof Promise == "function" ? Promise : void 0,
    iC =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Gg < "u"
        ? function (r) {
            return Gg.resolve(null).then(r).catch(sC);
          }
        : tf;
  function sC(r) {
    setTimeout(function () {
      throw r;
    });
  }
  function nf(r, s) {
    var u = s,
      d = 0;
    do {
      var m = u.nextSibling;
      if ((r.removeChild(u), m && m.nodeType === 8))
        if (((u = m.data), u === "/$")) {
          if (d === 0) {
            r.removeChild(m), ua(s);
            return;
          }
          d--;
        } else (u !== "$" && u !== "$?" && u !== "$!") || d++;
      u = m;
    } while (u);
    ua(s);
  }
  function Li(r) {
    for (; r != null; r = r.nextSibling) {
      var s = r.nodeType;
      if (s === 1 || s === 3) break;
      if (s === 8) {
        if (((s = r.data), s === "$" || s === "$!" || s === "$?")) break;
        if (s === "/$") return null;
      }
    }
    return r;
  }
  function qg(r) {
    r = r.previousSibling;
    for (var s = 0; r; ) {
      if (r.nodeType === 8) {
        var u = r.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (s === 0) return r;
          s--;
        } else u === "/$" && s++;
      }
      r = r.previousSibling;
    }
    return null;
  }
  var lo = Math.random().toString(36).slice(2),
    Dr = "__reactFiber$" + lo,
    wa = "__reactProps$" + lo,
    ri = "__reactContainer$" + lo,
    rf = "__reactEvents$" + lo,
    oC = "__reactListeners$" + lo,
    aC = "__reactHandles$" + lo;
  function ys(r) {
    var s = r[Dr];
    if (s) return s;
    for (var u = r.parentNode; u; ) {
      if ((s = u[ri] || u[Dr])) {
        if (
          ((u = s.alternate),
          s.child !== null || (u !== null && u.child !== null))
        )
          for (r = qg(r); r !== null; ) {
            if ((u = r[Dr])) return u;
            r = qg(r);
          }
        return s;
      }
      (r = u), (u = r.parentNode);
    }
    return null;
  }
  function Sa(r) {
    return (
      (r = r[Dr] || r[ri]),
      !r || (r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3)
        ? null
        : r
    );
  }
  function uo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function fu(r) {
    return r[wa] || null;
  }
  var sf = [],
    co = -1;
  function Mi(r) {
    return { current: r };
  }
  function _t(r) {
    0 > co || ((r.current = sf[co]), (sf[co] = null), co--);
  }
  function St(r, s) {
    co++, (sf[co] = r.current), (r.current = s);
  }
  var Fi = {},
    ln = Mi(Fi),
    En = Mi(!1),
    vs = Fi;
  function fo(r, s) {
    var u = r.type.contextTypes;
    if (!u) return Fi;
    var d = r.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === s)
      return d.__reactInternalMemoizedMaskedChildContext;
    var m = {},
      v;
    for (v in u) m[v] = s[v];
    return (
      d &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = s),
        (r.__reactInternalMemoizedMaskedChildContext = m)),
      m
    );
  }
  function _n(r) {
    return (r = r.childContextTypes), r != null;
  }
  function hu() {
    _t(En), _t(ln);
  }
  function Yg(r, s, u) {
    if (ln.current !== Fi) throw Error(n(168));
    St(ln, s), St(En, u);
  }
  function Xg(r, s, u) {
    var d = r.stateNode;
    if (((s = s.childContextTypes), typeof d.getChildContext != "function"))
      return u;
    d = d.getChildContext();
    for (var m in d) if (!(m in s)) throw Error(n(108, be(r) || "Unknown", m));
    return ee({}, u, d);
  }
  function pu(r) {
    return (
      (r =
        ((r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext) ||
        Fi),
      (vs = ln.current),
      St(ln, r),
      St(En, En.current),
      !0
    );
  }
  function Qg(r, s, u) {
    var d = r.stateNode;
    if (!d) throw Error(n(169));
    u
      ? ((r = Xg(r, s, vs)),
        (d.__reactInternalMemoizedMergedChildContext = r),
        _t(En),
        _t(ln),
        St(ln, r))
      : _t(En),
      St(En, u);
  }
  var ii = null,
    mu = !1,
    of = !1;
  function Jg(r) {
    ii === null ? (ii = [r]) : ii.push(r);
  }
  function lC(r) {
    (mu = !0), Jg(r);
  }
  function Ii() {
    if (!of && ii !== null) {
      of = !0;
      var r = 0,
        s = gt;
      try {
        var u = ii;
        for (gt = 1; r < u.length; r++) {
          var d = u[r];
          do d = d(!0);
          while (d !== null);
        }
        (ii = null), (mu = !1);
      } catch (m) {
        throw (ii !== null && (ii = ii.slice(r + 1)), Dn(pt, Ii), m);
      } finally {
        (gt = s), (of = !1);
      }
    }
    return null;
  }
  var ho = [],
    po = 0,
    gu = null,
    yu = 0,
    qn = [],
    Yn = 0,
    xs = null,
    si = 1,
    oi = "";
  function ws(r, s) {
    (ho[po++] = yu), (ho[po++] = gu), (gu = r), (yu = s);
  }
  function ey(r, s, u) {
    (qn[Yn++] = si), (qn[Yn++] = oi), (qn[Yn++] = xs), (xs = r);
    var d = si;
    r = oi;
    var m = 32 - lr(d) - 1;
    (d &= ~(1 << m)), (u += 1);
    var v = 32 - lr(s) + m;
    if (30 < v) {
      var k = m - (m % 5);
      (v = (d & ((1 << k) - 1)).toString(32)),
        (d >>= k),
        (m -= k),
        (si = (1 << (32 - lr(s) + m)) | (u << m) | d),
        (oi = v + r);
    } else (si = (1 << v) | (u << m) | d), (oi = r);
  }
  function af(r) {
    r.return !== null && (ws(r, 1), ey(r, 1, 0));
  }
  function lf(r) {
    for (; r === gu; )
      (gu = ho[--po]), (ho[po] = null), (yu = ho[--po]), (ho[po] = null);
    for (; r === xs; )
      (xs = qn[--Yn]),
        (qn[Yn] = null),
        (oi = qn[--Yn]),
        (qn[Yn] = null),
        (si = qn[--Yn]),
        (qn[Yn] = null);
  }
  var Mn = null,
    Fn = null,
    Tt = !1,
    cr = null;
  function ty(r, s) {
    var u = er(5, null, null, 0);
    (u.elementType = "DELETED"),
      (u.stateNode = s),
      (u.return = r),
      (s = r.deletions),
      s === null ? ((r.deletions = [u]), (r.flags |= 16)) : s.push(u);
  }
  function ny(r, s) {
    switch (r.tag) {
      case 5:
        var u = r.type;
        return (
          (s =
            s.nodeType !== 1 || u.toLowerCase() !== s.nodeName.toLowerCase()
              ? null
              : s),
          s !== null
            ? ((r.stateNode = s), (Mn = r), (Fn = Li(s.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (s = r.pendingProps === "" || s.nodeType !== 3 ? null : s),
          s !== null ? ((r.stateNode = s), (Mn = r), (Fn = null), !0) : !1
        );
      case 13:
        return (
          (s = s.nodeType !== 8 ? null : s),
          s !== null
            ? ((u = xs !== null ? { id: si, overflow: oi } : null),
              (r.memoizedState = {
                dehydrated: s,
                treeContext: u,
                retryLane: 1073741824,
              }),
              (u = er(18, null, null, 0)),
              (u.stateNode = s),
              (u.return = r),
              (r.child = u),
              (Mn = r),
              (Fn = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function uf(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function cf(r) {
    if (Tt) {
      var s = Fn;
      if (s) {
        var u = s;
        if (!ny(r, s)) {
          if (uf(r)) throw Error(n(418));
          s = Li(u.nextSibling);
          var d = Mn;
          s && ny(r, s)
            ? ty(d, u)
            : ((r.flags = (r.flags & -4097) | 2), (Tt = !1), (Mn = r));
        }
      } else {
        if (uf(r)) throw Error(n(418));
        (r.flags = (r.flags & -4097) | 2), (Tt = !1), (Mn = r);
      }
    }
  }
  function ry(r) {
    for (
      r = r.return;
      r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13;

    )
      r = r.return;
    Mn = r;
  }
  function vu(r) {
    if (r !== Mn) return !1;
    if (!Tt) return ry(r), (Tt = !0), !1;
    var s;
    if (
      ((s = r.tag !== 3) &&
        !(s = r.tag !== 5) &&
        ((s = r.type),
        (s = s !== "head" && s !== "body" && !ef(r.type, r.memoizedProps))),
      s && (s = Fn))
    ) {
      if (uf(r)) throw (iy(), Error(n(418)));
      for (; s; ) ty(r, s), (s = Li(s.nextSibling));
    }
    if ((ry(r), r.tag === 13)) {
      if (((r = r.memoizedState), (r = r !== null ? r.dehydrated : null), !r))
        throw Error(n(317));
      e: {
        for (r = r.nextSibling, s = 0; r; ) {
          if (r.nodeType === 8) {
            var u = r.data;
            if (u === "/$") {
              if (s === 0) {
                Fn = Li(r.nextSibling);
                break e;
              }
              s--;
            } else (u !== "$" && u !== "$!" && u !== "$?") || s++;
          }
          r = r.nextSibling;
        }
        Fn = null;
      }
    } else Fn = Mn ? Li(r.stateNode.nextSibling) : null;
    return !0;
  }
  function iy() {
    for (var r = Fn; r; ) r = Li(r.nextSibling);
  }
  function mo() {
    (Fn = Mn = null), (Tt = !1);
  }
  function df(r) {
    cr === null ? (cr = [r]) : cr.push(r);
  }
  var uC = j.ReactCurrentBatchConfig;
  function ba(r, s, u) {
    if (
      ((r = u.ref),
      r !== null && typeof r != "function" && typeof r != "object")
    ) {
      if (u._owner) {
        if (((u = u._owner), u)) {
          if (u.tag !== 1) throw Error(n(309));
          var d = u.stateNode;
        }
        if (!d) throw Error(n(147, r));
        var m = d,
          v = "" + r;
        return s !== null &&
          s.ref !== null &&
          typeof s.ref == "function" &&
          s.ref._stringRef === v
          ? s.ref
          : ((s = function (k) {
              var A = m.refs;
              k === null ? delete A[v] : (A[v] = k);
            }),
            (s._stringRef = v),
            s);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!u._owner) throw Error(n(290, r));
    }
    return r;
  }
  function xu(r, s) {
    throw (
      ((r = Object.prototype.toString.call(s)),
      Error(
        n(
          31,
          r === "[object Object]"
            ? "object with keys {" + Object.keys(s).join(", ") + "}"
            : r
        )
      ))
    );
  }
  function sy(r) {
    var s = r._init;
    return s(r._payload);
  }
  function oy(r) {
    function s(U, I) {
      if (r) {
        var $ = U.deletions;
        $ === null ? ((U.deletions = [I]), (U.flags |= 16)) : $.push(I);
      }
    }
    function u(U, I) {
      if (!r) return null;
      for (; I !== null; ) s(U, I), (I = I.sibling);
      return null;
    }
    function d(U, I) {
      for (U = new Map(); I !== null; )
        I.key !== null ? U.set(I.key, I) : U.set(I.index, I), (I = I.sibling);
      return U;
    }
    function m(U, I) {
      return (U = Zi(U, I)), (U.index = 0), (U.sibling = null), U;
    }
    function v(U, I, $) {
      return (
        (U.index = $),
        r
          ? (($ = U.alternate),
            $ !== null
              ? (($ = $.index), $ < I ? ((U.flags |= 2), I) : $)
              : ((U.flags |= 2), I))
          : ((U.flags |= 1048576), I)
      );
    }
    function k(U) {
      return r && U.alternate === null && (U.flags |= 2), U;
    }
    function A(U, I, $, fe) {
      return I === null || I.tag !== 6
        ? ((I = nh($, U.mode, fe)), (I.return = U), I)
        : ((I = m(I, $)), (I.return = U), I);
    }
    function D(U, I, $, fe) {
      var Oe = $.type;
      return Oe === V
        ? re(U, I, $.props.children, fe, $.key)
        : I !== null &&
          (I.elementType === Oe ||
            (typeof Oe == "object" &&
              Oe !== null &&
              Oe.$$typeof === me &&
              sy(Oe) === I.type))
        ? ((fe = m(I, $.props)), (fe.ref = ba(U, I, $)), (fe.return = U), fe)
        : ((fe = $u($.type, $.key, $.props, null, U.mode, fe)),
          (fe.ref = ba(U, I, $)),
          (fe.return = U),
          fe);
    }
    function W(U, I, $, fe) {
      return I === null ||
        I.tag !== 4 ||
        I.stateNode.containerInfo !== $.containerInfo ||
        I.stateNode.implementation !== $.implementation
        ? ((I = rh($, U.mode, fe)), (I.return = U), I)
        : ((I = m(I, $.children || [])), (I.return = U), I);
    }
    function re(U, I, $, fe, Oe) {
      return I === null || I.tag !== 7
        ? ((I = Ps($, U.mode, fe, Oe)), (I.return = U), I)
        : ((I = m(I, $)), (I.return = U), I);
    }
    function se(U, I, $) {
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return (I = nh("" + I, U.mode, $)), (I.return = U), I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case T:
            return (
              ($ = $u(I.type, I.key, I.props, null, U.mode, $)),
              ($.ref = ba(U, null, I)),
              ($.return = U),
              $
            );
          case M:
            return (I = rh(I, U.mode, $)), (I.return = U), I;
          case me:
            var fe = I._init;
            return se(U, fe(I._payload), $);
        }
        if (Z(I) || J(I))
          return (I = Ps(I, U.mode, $, null)), (I.return = U), I;
        xu(U, I);
      }
      return null;
    }
    function te(U, I, $, fe) {
      var Oe = I !== null ? I.key : null;
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return Oe !== null ? null : A(U, I, "" + $, fe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case T:
            return $.key === Oe ? D(U, I, $, fe) : null;
          case M:
            return $.key === Oe ? W(U, I, $, fe) : null;
          case me:
            return (Oe = $._init), te(U, I, Oe($._payload), fe);
        }
        if (Z($) || J($)) return Oe !== null ? null : re(U, I, $, fe, null);
        xu(U, $);
      }
      return null;
    }
    function we(U, I, $, fe, Oe) {
      if ((typeof fe == "string" && fe !== "") || typeof fe == "number")
        return (U = U.get($) || null), A(I, U, "" + fe, Oe);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case T:
            return (
              (U = U.get(fe.key === null ? $ : fe.key) || null), D(I, U, fe, Oe)
            );
          case M:
            return (
              (U = U.get(fe.key === null ? $ : fe.key) || null), W(I, U, fe, Oe)
            );
          case me:
            var Ve = fe._init;
            return we(U, I, $, Ve(fe._payload), Oe);
        }
        if (Z(fe) || J(fe))
          return (U = U.get($) || null), re(I, U, fe, Oe, null);
        xu(I, fe);
      }
      return null;
    }
    function ke(U, I, $, fe) {
      for (
        var Oe = null, Ve = null, Be = I, Ge = (I = 0), en = null;
        Be !== null && Ge < $.length;
        Ge++
      ) {
        Be.index > Ge ? ((en = Be), (Be = null)) : (en = Be.sibling);
        var dt = te(U, Be, $[Ge], fe);
        if (dt === null) {
          Be === null && (Be = en);
          break;
        }
        r && Be && dt.alternate === null && s(U, Be),
          (I = v(dt, I, Ge)),
          Ve === null ? (Oe = dt) : (Ve.sibling = dt),
          (Ve = dt),
          (Be = en);
      }
      if (Ge === $.length) return u(U, Be), Tt && ws(U, Ge), Oe;
      if (Be === null) {
        for (; Ge < $.length; Ge++)
          (Be = se(U, $[Ge], fe)),
            Be !== null &&
              ((I = v(Be, I, Ge)),
              Ve === null ? (Oe = Be) : (Ve.sibling = Be),
              (Ve = Be));
        return Tt && ws(U, Ge), Oe;
      }
      for (Be = d(U, Be); Ge < $.length; Ge++)
        (en = we(Be, U, Ge, $[Ge], fe)),
          en !== null &&
            (r &&
              en.alternate !== null &&
              Be.delete(en.key === null ? Ge : en.key),
            (I = v(en, I, Ge)),
            Ve === null ? (Oe = en) : (Ve.sibling = en),
            (Ve = en));
      return (
        r &&
          Be.forEach(function (Ki) {
            return s(U, Ki);
          }),
        Tt && ws(U, Ge),
        Oe
      );
    }
    function Ae(U, I, $, fe) {
      var Oe = J($);
      if (typeof Oe != "function") throw Error(n(150));
      if ((($ = Oe.call($)), $ == null)) throw Error(n(151));
      for (
        var Ve = (Oe = null), Be = I, Ge = (I = 0), en = null, dt = $.next();
        Be !== null && !dt.done;
        Ge++, dt = $.next()
      ) {
        Be.index > Ge ? ((en = Be), (Be = null)) : (en = Be.sibling);
        var Ki = te(U, Be, dt.value, fe);
        if (Ki === null) {
          Be === null && (Be = en);
          break;
        }
        r && Be && Ki.alternate === null && s(U, Be),
          (I = v(Ki, I, Ge)),
          Ve === null ? (Oe = Ki) : (Ve.sibling = Ki),
          (Ve = Ki),
          (Be = en);
      }
      if (dt.done) return u(U, Be), Tt && ws(U, Ge), Oe;
      if (Be === null) {
        for (; !dt.done; Ge++, dt = $.next())
          (dt = se(U, dt.value, fe)),
            dt !== null &&
              ((I = v(dt, I, Ge)),
              Ve === null ? (Oe = dt) : (Ve.sibling = dt),
              (Ve = dt));
        return Tt && ws(U, Ge), Oe;
      }
      for (Be = d(U, Be); !dt.done; Ge++, dt = $.next())
        (dt = we(Be, U, Ge, dt.value, fe)),
          dt !== null &&
            (r &&
              dt.alternate !== null &&
              Be.delete(dt.key === null ? Ge : dt.key),
            (I = v(dt, I, Ge)),
            Ve === null ? (Oe = dt) : (Ve.sibling = dt),
            (Ve = dt));
      return (
        r &&
          Be.forEach(function (zC) {
            return s(U, zC);
          }),
        Tt && ws(U, Ge),
        Oe
      );
    }
    function It(U, I, $, fe) {
      if (
        (typeof $ == "object" &&
          $ !== null &&
          $.type === V &&
          $.key === null &&
          ($ = $.props.children),
        typeof $ == "object" && $ !== null)
      ) {
        switch ($.$$typeof) {
          case T:
            e: {
              for (var Oe = $.key, Ve = I; Ve !== null; ) {
                if (Ve.key === Oe) {
                  if (((Oe = $.type), Oe === V)) {
                    if (Ve.tag === 7) {
                      u(U, Ve.sibling),
                        (I = m(Ve, $.props.children)),
                        (I.return = U),
                        (U = I);
                      break e;
                    }
                  } else if (
                    Ve.elementType === Oe ||
                    (typeof Oe == "object" &&
                      Oe !== null &&
                      Oe.$$typeof === me &&
                      sy(Oe) === Ve.type)
                  ) {
                    u(U, Ve.sibling),
                      (I = m(Ve, $.props)),
                      (I.ref = ba(U, Ve, $)),
                      (I.return = U),
                      (U = I);
                    break e;
                  }
                  u(U, Ve);
                  break;
                } else s(U, Ve);
                Ve = Ve.sibling;
              }
              $.type === V
                ? ((I = Ps($.props.children, U.mode, fe, $.key)),
                  (I.return = U),
                  (U = I))
                : ((fe = $u($.type, $.key, $.props, null, U.mode, fe)),
                  (fe.ref = ba(U, I, $)),
                  (fe.return = U),
                  (U = fe));
            }
            return k(U);
          case M:
            e: {
              for (Ve = $.key; I !== null; ) {
                if (I.key === Ve)
                  if (
                    I.tag === 4 &&
                    I.stateNode.containerInfo === $.containerInfo &&
                    I.stateNode.implementation === $.implementation
                  ) {
                    u(U, I.sibling),
                      (I = m(I, $.children || [])),
                      (I.return = U),
                      (U = I);
                    break e;
                  } else {
                    u(U, I);
                    break;
                  }
                else s(U, I);
                I = I.sibling;
              }
              (I = rh($, U.mode, fe)), (I.return = U), (U = I);
            }
            return k(U);
          case me:
            return (Ve = $._init), It(U, I, Ve($._payload), fe);
        }
        if (Z($)) return ke(U, I, $, fe);
        if (J($)) return Ae(U, I, $, fe);
        xu(U, $);
      }
      return (typeof $ == "string" && $ !== "") || typeof $ == "number"
        ? (($ = "" + $),
          I !== null && I.tag === 6
            ? (u(U, I.sibling), (I = m(I, $)), (I.return = U), (U = I))
            : (u(U, I), (I = nh($, U.mode, fe)), (I.return = U), (U = I)),
          k(U))
        : u(U, I);
    }
    return It;
  }
  var go = oy(!0),
    ay = oy(!1),
    wu = Mi(null),
    Su = null,
    yo = null,
    ff = null;
  function hf() {
    ff = yo = Su = null;
  }
  function pf(r) {
    var s = wu.current;
    _t(wu), (r._currentValue = s);
  }
  function mf(r, s, u) {
    for (; r !== null; ) {
      var d = r.alternate;
      if (
        ((r.childLanes & s) !== s
          ? ((r.childLanes |= s), d !== null && (d.childLanes |= s))
          : d !== null && (d.childLanes & s) !== s && (d.childLanes |= s),
        r === u)
      )
        break;
      r = r.return;
    }
  }
  function vo(r, s) {
    (Su = r),
      (ff = yo = null),
      (r = r.dependencies),
      r !== null &&
        r.firstContext !== null &&
        (r.lanes & s && (Cn = !0), (r.firstContext = null));
  }
  function Xn(r) {
    var s = r._currentValue;
    if (ff !== r)
      if (((r = { context: r, memoizedValue: s, next: null }), yo === null)) {
        if (Su === null) throw Error(n(308));
        (yo = r), (Su.dependencies = { lanes: 0, firstContext: r });
      } else yo = yo.next = r;
    return s;
  }
  var Ss = null;
  function gf(r) {
    Ss === null ? (Ss = [r]) : Ss.push(r);
  }
  function ly(r, s, u, d) {
    var m = s.interleaved;
    return (
      m === null ? ((u.next = u), gf(s)) : ((u.next = m.next), (m.next = u)),
      (s.interleaved = u),
      ai(r, d)
    );
  }
  function ai(r, s) {
    r.lanes |= s;
    var u = r.alternate;
    for (u !== null && (u.lanes |= s), u = r, r = r.return; r !== null; )
      (r.childLanes |= s),
        (u = r.alternate),
        u !== null && (u.childLanes |= s),
        (u = r),
        (r = r.return);
    return u.tag === 3 ? u.stateNode : null;
  }
  var Vi = !1;
  function yf(r) {
    r.updateQueue = {
      baseState: r.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function uy(r, s) {
    (r = r.updateQueue),
      s.updateQueue === r &&
        (s.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          effects: r.effects,
        });
  }
  function li(r, s) {
    return {
      eventTime: r,
      lane: s,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Bi(r, s, u) {
    var d = r.updateQueue;
    if (d === null) return null;
    if (((d = d.shared), ut & 2)) {
      var m = d.pending;
      return (
        m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
        (d.pending = s),
        ai(r, u)
      );
    }
    return (
      (m = d.interleaved),
      m === null ? ((s.next = s), gf(d)) : ((s.next = m.next), (m.next = s)),
      (d.interleaved = s),
      ai(r, u)
    );
  }
  function bu(r, s, u) {
    if (
      ((s = s.updateQueue), s !== null && ((s = s.shared), (u & 4194240) !== 0))
    ) {
      var d = s.lanes;
      (d &= r.pendingLanes), (u |= d), (s.lanes = u), Ad(r, u);
    }
  }
  function cy(r, s) {
    var u = r.updateQueue,
      d = r.alternate;
    if (d !== null && ((d = d.updateQueue), u === d)) {
      var m = null,
        v = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var k = {
            eventTime: u.eventTime,
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          };
          v === null ? (m = v = k) : (v = v.next = k), (u = u.next);
        } while (u !== null);
        v === null ? (m = v = s) : (v = v.next = s);
      } else m = v = s;
      (u = {
        baseState: d.baseState,
        firstBaseUpdate: m,
        lastBaseUpdate: v,
        shared: d.shared,
        effects: d.effects,
      }),
        (r.updateQueue = u);
      return;
    }
    (r = u.lastBaseUpdate),
      r === null ? (u.firstBaseUpdate = s) : (r.next = s),
      (u.lastBaseUpdate = s);
  }
  function Eu(r, s, u, d) {
    var m = r.updateQueue;
    Vi = !1;
    var v = m.firstBaseUpdate,
      k = m.lastBaseUpdate,
      A = m.shared.pending;
    if (A !== null) {
      m.shared.pending = null;
      var D = A,
        W = D.next;
      (D.next = null), k === null ? (v = W) : (k.next = W), (k = D);
      var re = r.alternate;
      re !== null &&
        ((re = re.updateQueue),
        (A = re.lastBaseUpdate),
        A !== k &&
          (A === null ? (re.firstBaseUpdate = W) : (A.next = W),
          (re.lastBaseUpdate = D)));
    }
    if (v !== null) {
      var se = m.baseState;
      (k = 0), (re = W = D = null), (A = v);
      do {
        var te = A.lane,
          we = A.eventTime;
        if ((d & te) === te) {
          re !== null &&
            (re = re.next =
              {
                eventTime: we,
                lane: 0,
                tag: A.tag,
                payload: A.payload,
                callback: A.callback,
                next: null,
              });
          e: {
            var ke = r,
              Ae = A;
            switch (((te = s), (we = u), Ae.tag)) {
              case 1:
                if (((ke = Ae.payload), typeof ke == "function")) {
                  se = ke.call(we, se, te);
                  break e;
                }
                se = ke;
                break e;
              case 3:
                ke.flags = (ke.flags & -65537) | 128;
              case 0:
                if (
                  ((ke = Ae.payload),
                  (te = typeof ke == "function" ? ke.call(we, se, te) : ke),
                  te == null)
                )
                  break e;
                se = ee({}, se, te);
                break e;
              case 2:
                Vi = !0;
            }
          }
          A.callback !== null &&
            A.lane !== 0 &&
            ((r.flags |= 64),
            (te = m.effects),
            te === null ? (m.effects = [A]) : te.push(A));
        } else
          (we = {
            eventTime: we,
            lane: te,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null,
          }),
            re === null ? ((W = re = we), (D = se)) : (re = re.next = we),
            (k |= te);
        if (((A = A.next), A === null)) {
          if (((A = m.shared.pending), A === null)) break;
          (te = A),
            (A = te.next),
            (te.next = null),
            (m.lastBaseUpdate = te),
            (m.shared.pending = null);
        }
      } while (!0);
      if (
        (re === null && (D = se),
        (m.baseState = D),
        (m.firstBaseUpdate = W),
        (m.lastBaseUpdate = re),
        (s = m.shared.interleaved),
        s !== null)
      ) {
        m = s;
        do (k |= m.lane), (m = m.next);
        while (m !== s);
      } else v === null && (m.shared.lanes = 0);
      (_s |= k), (r.lanes = k), (r.memoizedState = se);
    }
  }
  function dy(r, s, u) {
    if (((r = s.effects), (s.effects = null), r !== null))
      for (s = 0; s < r.length; s++) {
        var d = r[s],
          m = d.callback;
        if (m !== null) {
          if (((d.callback = null), (d = u), typeof m != "function"))
            throw Error(n(191, m));
          m.call(d);
        }
      }
  }
  var Ea = {},
    Or = Mi(Ea),
    _a = Mi(Ea),
    Ca = Mi(Ea);
  function bs(r) {
    if (r === Ea) throw Error(n(174));
    return r;
  }
  function vf(r, s) {
    switch ((St(Ca, s), St(_a, r), St(Or, Ea), (r = s.nodeType), r)) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : yt(null, "");
        break;
      default:
        (r = r === 8 ? s.parentNode : s),
          (s = r.namespaceURI || null),
          (r = r.tagName),
          (s = yt(s, r));
    }
    _t(Or), St(Or, s);
  }
  function xo() {
    _t(Or), _t(_a), _t(Ca);
  }
  function fy(r) {
    bs(Ca.current);
    var s = bs(Or.current),
      u = yt(s, r.type);
    s !== u && (St(_a, r), St(Or, u));
  }
  function xf(r) {
    _a.current === r && (_t(Or), _t(_a));
  }
  var At = Mi(0);
  function _u(r) {
    for (var s = r; s !== null; ) {
      if (s.tag === 13) {
        var u = s.memoizedState;
        if (
          u !== null &&
          ((u = u.dehydrated), u === null || u.data === "$?" || u.data === "$!")
        )
          return s;
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
        if (s.flags & 128) return s;
      } else if (s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === r) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r) return null;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
    return null;
  }
  var wf = [];
  function Sf() {
    for (var r = 0; r < wf.length; r++)
      wf[r]._workInProgressVersionPrimary = null;
    wf.length = 0;
  }
  var Cu = j.ReactCurrentDispatcher,
    bf = j.ReactCurrentBatchConfig,
    Es = 0,
    Nt = null,
    Gt = null,
    Qt = null,
    ku = !1,
    ka = !1,
    Ta = 0,
    cC = 0;
  function un() {
    throw Error(n(321));
  }
  function Ef(r, s) {
    if (s === null) return !1;
    for (var u = 0; u < s.length && u < r.length; u++)
      if (!ur(r[u], s[u])) return !1;
    return !0;
  }
  function _f(r, s, u, d, m, v) {
    if (
      ((Es = v),
      (Nt = s),
      (s.memoizedState = null),
      (s.updateQueue = null),
      (s.lanes = 0),
      (Cu.current = r === null || r.memoizedState === null ? pC : mC),
      (r = u(d, m)),
      ka)
    ) {
      v = 0;
      do {
        if (((ka = !1), (Ta = 0), 25 <= v)) throw Error(n(301));
        (v += 1),
          (Qt = Gt = null),
          (s.updateQueue = null),
          (Cu.current = gC),
          (r = u(d, m));
      } while (ka);
    }
    if (
      ((Cu.current = Ru),
      (s = Gt !== null && Gt.next !== null),
      (Es = 0),
      (Qt = Gt = Nt = null),
      (ku = !1),
      s)
    )
      throw Error(n(300));
    return r;
  }
  function Cf() {
    var r = Ta !== 0;
    return (Ta = 0), r;
  }
  function Lr() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Qt === null ? (Nt.memoizedState = Qt = r) : (Qt = Qt.next = r), Qt;
  }
  function Qn() {
    if (Gt === null) {
      var r = Nt.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = Gt.next;
    var s = Qt === null ? Nt.memoizedState : Qt.next;
    if (s !== null) (Qt = s), (Gt = r);
    else {
      if (r === null) throw Error(n(310));
      (Gt = r),
        (r = {
          memoizedState: Gt.memoizedState,
          baseState: Gt.baseState,
          baseQueue: Gt.baseQueue,
          queue: Gt.queue,
          next: null,
        }),
        Qt === null ? (Nt.memoizedState = Qt = r) : (Qt = Qt.next = r);
    }
    return Qt;
  }
  function Pa(r, s) {
    return typeof s == "function" ? s(r) : s;
  }
  function kf(r) {
    var s = Qn(),
      u = s.queue;
    if (u === null) throw Error(n(311));
    u.lastRenderedReducer = r;
    var d = Gt,
      m = d.baseQueue,
      v = u.pending;
    if (v !== null) {
      if (m !== null) {
        var k = m.next;
        (m.next = v.next), (v.next = k);
      }
      (d.baseQueue = m = v), (u.pending = null);
    }
    if (m !== null) {
      (v = m.next), (d = d.baseState);
      var A = (k = null),
        D = null,
        W = v;
      do {
        var re = W.lane;
        if ((Es & re) === re)
          D !== null &&
            (D = D.next =
              {
                lane: 0,
                action: W.action,
                hasEagerState: W.hasEagerState,
                eagerState: W.eagerState,
                next: null,
              }),
            (d = W.hasEagerState ? W.eagerState : r(d, W.action));
        else {
          var se = {
            lane: re,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null,
          };
          D === null ? ((A = D = se), (k = d)) : (D = D.next = se),
            (Nt.lanes |= re),
            (_s |= re);
        }
        W = W.next;
      } while (W !== null && W !== v);
      D === null ? (k = d) : (D.next = A),
        ur(d, s.memoizedState) || (Cn = !0),
        (s.memoizedState = d),
        (s.baseState = k),
        (s.baseQueue = D),
        (u.lastRenderedState = d);
    }
    if (((r = u.interleaved), r !== null)) {
      m = r;
      do (v = m.lane), (Nt.lanes |= v), (_s |= v), (m = m.next);
      while (m !== r);
    } else m === null && (u.lanes = 0);
    return [s.memoizedState, u.dispatch];
  }
  function Tf(r) {
    var s = Qn(),
      u = s.queue;
    if (u === null) throw Error(n(311));
    u.lastRenderedReducer = r;
    var d = u.dispatch,
      m = u.pending,
      v = s.memoizedState;
    if (m !== null) {
      u.pending = null;
      var k = (m = m.next);
      do (v = r(v, k.action)), (k = k.next);
      while (k !== m);
      ur(v, s.memoizedState) || (Cn = !0),
        (s.memoizedState = v),
        s.baseQueue === null && (s.baseState = v),
        (u.lastRenderedState = v);
    }
    return [v, d];
  }
  function hy() {}
  function py(r, s) {
    var u = Nt,
      d = Qn(),
      m = s(),
      v = !ur(d.memoizedState, m);
    if (
      (v && ((d.memoizedState = m), (Cn = !0)),
      (d = d.queue),
      Pf(yy.bind(null, u, d, r), [r]),
      d.getSnapshot !== s || v || (Qt !== null && Qt.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Ra(9, gy.bind(null, u, d, m, s), void 0, null),
        Jt === null)
      )
        throw Error(n(349));
      Es & 30 || my(u, s, m);
    }
    return m;
  }
  function my(r, s, u) {
    (r.flags |= 16384),
      (r = { getSnapshot: s, value: u }),
      (s = Nt.updateQueue),
      s === null
        ? ((s = { lastEffect: null, stores: null }),
          (Nt.updateQueue = s),
          (s.stores = [r]))
        : ((u = s.stores), u === null ? (s.stores = [r]) : u.push(r));
  }
  function gy(r, s, u, d) {
    (s.value = u), (s.getSnapshot = d), vy(s) && xy(r);
  }
  function yy(r, s, u) {
    return u(function () {
      vy(s) && xy(r);
    });
  }
  function vy(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var u = s();
      return !ur(r, u);
    } catch {
      return !0;
    }
  }
  function xy(r) {
    var s = ai(r, 1);
    s !== null && pr(s, r, 1, -1);
  }
  function wy(r) {
    var s = Lr();
    return (
      typeof r == "function" && (r = r()),
      (s.memoizedState = s.baseState = r),
      (r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pa,
        lastRenderedState: r,
      }),
      (s.queue = r),
      (r = r.dispatch = hC.bind(null, Nt, r)),
      [s.memoizedState, r]
    );
  }
  function Ra(r, s, u, d) {
    return (
      (r = { tag: r, create: s, destroy: u, deps: d, next: null }),
      (s = Nt.updateQueue),
      s === null
        ? ((s = { lastEffect: null, stores: null }),
          (Nt.updateQueue = s),
          (s.lastEffect = r.next = r))
        : ((u = s.lastEffect),
          u === null
            ? (s.lastEffect = r.next = r)
            : ((d = u.next), (u.next = r), (r.next = d), (s.lastEffect = r))),
      r
    );
  }
  function Sy() {
    return Qn().memoizedState;
  }
  function Tu(r, s, u, d) {
    var m = Lr();
    (Nt.flags |= r),
      (m.memoizedState = Ra(1 | s, u, void 0, d === void 0 ? null : d));
  }
  function Pu(r, s, u, d) {
    var m = Qn();
    d = d === void 0 ? null : d;
    var v = void 0;
    if (Gt !== null) {
      var k = Gt.memoizedState;
      if (((v = k.destroy), d !== null && Ef(d, k.deps))) {
        m.memoizedState = Ra(s, u, v, d);
        return;
      }
    }
    (Nt.flags |= r), (m.memoizedState = Ra(1 | s, u, v, d));
  }
  function by(r, s) {
    return Tu(8390656, 8, r, s);
  }
  function Pf(r, s) {
    return Pu(2048, 8, r, s);
  }
  function Ey(r, s) {
    return Pu(4, 2, r, s);
  }
  function _y(r, s) {
    return Pu(4, 4, r, s);
  }
  function Cy(r, s) {
    if (typeof s == "function")
      return (
        (r = r()),
        s(r),
        function () {
          s(null);
        }
      );
    if (s != null)
      return (
        (r = r()),
        (s.current = r),
        function () {
          s.current = null;
        }
      );
  }
  function ky(r, s, u) {
    return (
      (u = u != null ? u.concat([r]) : null), Pu(4, 4, Cy.bind(null, s, r), u)
    );
  }
  function Rf() {}
  function Ty(r, s) {
    var u = Qn();
    s = s === void 0 ? null : s;
    var d = u.memoizedState;
    return d !== null && s !== null && Ef(s, d[1])
      ? d[0]
      : ((u.memoizedState = [r, s]), r);
  }
  function Py(r, s) {
    var u = Qn();
    s = s === void 0 ? null : s;
    var d = u.memoizedState;
    return d !== null && s !== null && Ef(s, d[1])
      ? d[0]
      : ((r = r()), (u.memoizedState = [r, s]), r);
  }
  function Ry(r, s, u) {
    return Es & 21
      ? (ur(u, s) ||
          ((u = sg()), (Nt.lanes |= u), (_s |= u), (r.baseState = !0)),
        s)
      : (r.baseState && ((r.baseState = !1), (Cn = !0)), (r.memoizedState = u));
  }
  function dC(r, s) {
    var u = gt;
    (gt = u !== 0 && 4 > u ? u : 4), r(!0);
    var d = bf.transition;
    bf.transition = {};
    try {
      r(!1), s();
    } finally {
      (gt = u), (bf.transition = d);
    }
  }
  function Ay() {
    return Qn().memoizedState;
  }
  function fC(r, s, u) {
    var d = Wi(r);
    if (
      ((u = {
        lane: d,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ny(r))
    )
      jy(s, u);
    else if (((u = ly(r, s, u, d)), u !== null)) {
      var m = yn();
      pr(u, r, d, m), Dy(u, s, d);
    }
  }
  function hC(r, s, u) {
    var d = Wi(r),
      m = {
        lane: d,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ny(r)) jy(s, m);
    else {
      var v = r.alternate;
      if (
        r.lanes === 0 &&
        (v === null || v.lanes === 0) &&
        ((v = s.lastRenderedReducer), v !== null)
      )
        try {
          var k = s.lastRenderedState,
            A = v(k, u);
          if (((m.hasEagerState = !0), (m.eagerState = A), ur(A, k))) {
            var D = s.interleaved;
            D === null
              ? ((m.next = m), gf(s))
              : ((m.next = D.next), (D.next = m)),
              (s.interleaved = m);
            return;
          }
        } catch {
        } finally {
        }
      (u = ly(r, s, m, d)),
        u !== null && ((m = yn()), pr(u, r, d, m), Dy(u, s, d));
    }
  }
  function Ny(r) {
    var s = r.alternate;
    return r === Nt || (s !== null && s === Nt);
  }
  function jy(r, s) {
    ka = ku = !0;
    var u = r.pending;
    u === null ? (s.next = s) : ((s.next = u.next), (u.next = s)),
      (r.pending = s);
  }
  function Dy(r, s, u) {
    if (u & 4194240) {
      var d = s.lanes;
      (d &= r.pendingLanes), (u |= d), (s.lanes = u), Ad(r, u);
    }
  }
  var Ru = {
      readContext: Xn,
      useCallback: un,
      useContext: un,
      useEffect: un,
      useImperativeHandle: un,
      useInsertionEffect: un,
      useLayoutEffect: un,
      useMemo: un,
      useReducer: un,
      useRef: un,
      useState: un,
      useDebugValue: un,
      useDeferredValue: un,
      useTransition: un,
      useMutableSource: un,
      useSyncExternalStore: un,
      useId: un,
      unstable_isNewReconciler: !1,
    },
    pC = {
      readContext: Xn,
      useCallback: function (r, s) {
        return (Lr().memoizedState = [r, s === void 0 ? null : s]), r;
      },
      useContext: Xn,
      useEffect: by,
      useImperativeHandle: function (r, s, u) {
        return (
          (u = u != null ? u.concat([r]) : null),
          Tu(4194308, 4, Cy.bind(null, s, r), u)
        );
      },
      useLayoutEffect: function (r, s) {
        return Tu(4194308, 4, r, s);
      },
      useInsertionEffect: function (r, s) {
        return Tu(4, 2, r, s);
      },
      useMemo: function (r, s) {
        var u = Lr();
        return (
          (s = s === void 0 ? null : s),
          (r = r()),
          (u.memoizedState = [r, s]),
          r
        );
      },
      useReducer: function (r, s, u) {
        var d = Lr();
        return (
          (s = u !== void 0 ? u(s) : s),
          (d.memoizedState = d.baseState = s),
          (r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: s,
          }),
          (d.queue = r),
          (r = r.dispatch = fC.bind(null, Nt, r)),
          [d.memoizedState, r]
        );
      },
      useRef: function (r) {
        var s = Lr();
        return (r = { current: r }), (s.memoizedState = r);
      },
      useState: wy,
      useDebugValue: Rf,
      useDeferredValue: function (r) {
        return (Lr().memoizedState = r);
      },
      useTransition: function () {
        var r = wy(!1),
          s = r[0];
        return (r = dC.bind(null, r[1])), (Lr().memoizedState = r), [s, r];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (r, s, u) {
        var d = Nt,
          m = Lr();
        if (Tt) {
          if (u === void 0) throw Error(n(407));
          u = u();
        } else {
          if (((u = s()), Jt === null)) throw Error(n(349));
          Es & 30 || my(d, s, u);
        }
        m.memoizedState = u;
        var v = { value: u, getSnapshot: s };
        return (
          (m.queue = v),
          by(yy.bind(null, d, v, r), [r]),
          (d.flags |= 2048),
          Ra(9, gy.bind(null, d, v, u, s), void 0, null),
          u
        );
      },
      useId: function () {
        var r = Lr(),
          s = Jt.identifierPrefix;
        if (Tt) {
          var u = oi,
            d = si;
          (u = (d & ~(1 << (32 - lr(d) - 1))).toString(32) + u),
            (s = ":" + s + "R" + u),
            (u = Ta++),
            0 < u && (s += "H" + u.toString(32)),
            (s += ":");
        } else (u = cC++), (s = ":" + s + "r" + u.toString(32) + ":");
        return (r.memoizedState = s);
      },
      unstable_isNewReconciler: !1,
    },
    mC = {
      readContext: Xn,
      useCallback: Ty,
      useContext: Xn,
      useEffect: Pf,
      useImperativeHandle: ky,
      useInsertionEffect: Ey,
      useLayoutEffect: _y,
      useMemo: Py,
      useReducer: kf,
      useRef: Sy,
      useState: function () {
        return kf(Pa);
      },
      useDebugValue: Rf,
      useDeferredValue: function (r) {
        var s = Qn();
        return Ry(s, Gt.memoizedState, r);
      },
      useTransition: function () {
        var r = kf(Pa)[0],
          s = Qn().memoizedState;
        return [r, s];
      },
      useMutableSource: hy,
      useSyncExternalStore: py,
      useId: Ay,
      unstable_isNewReconciler: !1,
    },
    gC = {
      readContext: Xn,
      useCallback: Ty,
      useContext: Xn,
      useEffect: Pf,
      useImperativeHandle: ky,
      useInsertionEffect: Ey,
      useLayoutEffect: _y,
      useMemo: Py,
      useReducer: Tf,
      useRef: Sy,
      useState: function () {
        return Tf(Pa);
      },
      useDebugValue: Rf,
      useDeferredValue: function (r) {
        var s = Qn();
        return Gt === null ? (s.memoizedState = r) : Ry(s, Gt.memoizedState, r);
      },
      useTransition: function () {
        var r = Tf(Pa)[0],
          s = Qn().memoizedState;
        return [r, s];
      },
      useMutableSource: hy,
      useSyncExternalStore: py,
      useId: Ay,
      unstable_isNewReconciler: !1,
    };
  function dr(r, s) {
    if (r && r.defaultProps) {
      (s = ee({}, s)), (r = r.defaultProps);
      for (var u in r) s[u] === void 0 && (s[u] = r[u]);
      return s;
    }
    return s;
  }
  function Af(r, s, u, d) {
    (s = r.memoizedState),
      (u = u(d, s)),
      (u = u == null ? s : ee({}, s, u)),
      (r.memoizedState = u),
      r.lanes === 0 && (r.updateQueue.baseState = u);
  }
  var Au = {
    isMounted: function (r) {
      return (r = r._reactInternals) ? ht(r) === r : !1;
    },
    enqueueSetState: function (r, s, u) {
      r = r._reactInternals;
      var d = yn(),
        m = Wi(r),
        v = li(d, m);
      (v.payload = s),
        u != null && (v.callback = u),
        (s = Bi(r, v, m)),
        s !== null && (pr(s, r, m, d), bu(s, r, m));
    },
    enqueueReplaceState: function (r, s, u) {
      r = r._reactInternals;
      var d = yn(),
        m = Wi(r),
        v = li(d, m);
      (v.tag = 1),
        (v.payload = s),
        u != null && (v.callback = u),
        (s = Bi(r, v, m)),
        s !== null && (pr(s, r, m, d), bu(s, r, m));
    },
    enqueueForceUpdate: function (r, s) {
      r = r._reactInternals;
      var u = yn(),
        d = Wi(r),
        m = li(u, d);
      (m.tag = 2),
        s != null && (m.callback = s),
        (s = Bi(r, m, d)),
        s !== null && (pr(s, r, d, u), bu(s, r, d));
    },
  };
  function Oy(r, s, u, d, m, v, k) {
    return (
      (r = r.stateNode),
      typeof r.shouldComponentUpdate == "function"
        ? r.shouldComponentUpdate(d, v, k)
        : s.prototype && s.prototype.isPureReactComponent
        ? !ma(u, d) || !ma(m, v)
        : !0
    );
  }
  function Ly(r, s, u) {
    var d = !1,
      m = Fi,
      v = s.contextType;
    return (
      typeof v == "object" && v !== null
        ? (v = Xn(v))
        : ((m = _n(s) ? vs : ln.current),
          (d = s.contextTypes),
          (v = (d = d != null) ? fo(r, m) : Fi)),
      (s = new s(u, v)),
      (r.memoizedState =
        s.state !== null && s.state !== void 0 ? s.state : null),
      (s.updater = Au),
      (r.stateNode = s),
      (s._reactInternals = r),
      d &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = m),
        (r.__reactInternalMemoizedMaskedChildContext = v)),
      s
    );
  }
  function My(r, s, u, d) {
    (r = s.state),
      typeof s.componentWillReceiveProps == "function" &&
        s.componentWillReceiveProps(u, d),
      typeof s.UNSAFE_componentWillReceiveProps == "function" &&
        s.UNSAFE_componentWillReceiveProps(u, d),
      s.state !== r && Au.enqueueReplaceState(s, s.state, null);
  }
  function Nf(r, s, u, d) {
    var m = r.stateNode;
    (m.props = u), (m.state = r.memoizedState), (m.refs = {}), yf(r);
    var v = s.contextType;
    typeof v == "object" && v !== null
      ? (m.context = Xn(v))
      : ((v = _n(s) ? vs : ln.current), (m.context = fo(r, v))),
      (m.state = r.memoizedState),
      (v = s.getDerivedStateFromProps),
      typeof v == "function" && (Af(r, s, v, u), (m.state = r.memoizedState)),
      typeof s.getDerivedStateFromProps == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function" ||
        (typeof m.UNSAFE_componentWillMount != "function" &&
          typeof m.componentWillMount != "function") ||
        ((s = m.state),
        typeof m.componentWillMount == "function" && m.componentWillMount(),
        typeof m.UNSAFE_componentWillMount == "function" &&
          m.UNSAFE_componentWillMount(),
        s !== m.state && Au.enqueueReplaceState(m, m.state, null),
        Eu(r, u, m, d),
        (m.state = r.memoizedState)),
      typeof m.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function wo(r, s) {
    try {
      var u = "",
        d = s;
      do (u += Ie(d)), (d = d.return);
      while (d);
      var m = u;
    } catch (v) {
      m =
        `
Error generating stack: ` +
        v.message +
        `
` +
        v.stack;
    }
    return { value: r, source: s, stack: m, digest: null };
  }
  function jf(r, s, u) {
    return { value: r, source: null, stack: u ?? null, digest: s ?? null };
  }
  function Df(r, s) {
    try {
      console.error(s.value);
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  var yC = typeof WeakMap == "function" ? WeakMap : Map;
  function Fy(r, s, u) {
    (u = li(-1, u)), (u.tag = 3), (u.payload = { element: null });
    var d = s.value;
    return (
      (u.callback = function () {
        Fu || ((Fu = !0), (Gf = d)), Df(r, s);
      }),
      u
    );
  }
  function Iy(r, s, u) {
    (u = li(-1, u)), (u.tag = 3);
    var d = r.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var m = s.value;
      (u.payload = function () {
        return d(m);
      }),
        (u.callback = function () {
          Df(r, s);
        });
    }
    var v = r.stateNode;
    return (
      v !== null &&
        typeof v.componentDidCatch == "function" &&
        (u.callback = function () {
          Df(r, s),
            typeof d != "function" &&
              (Ui === null ? (Ui = new Set([this])) : Ui.add(this));
          var k = s.stack;
          this.componentDidCatch(s.value, {
            componentStack: k !== null ? k : "",
          });
        }),
      u
    );
  }
  function Vy(r, s, u) {
    var d = r.pingCache;
    if (d === null) {
      d = r.pingCache = new yC();
      var m = new Set();
      d.set(s, m);
    } else (m = d.get(s)), m === void 0 && ((m = new Set()), d.set(s, m));
    m.has(u) || (m.add(u), (r = NC.bind(null, r, s, u)), s.then(r, r));
  }
  function By(r) {
    do {
      var s;
      if (
        ((s = r.tag === 13) &&
          ((s = r.memoizedState),
          (s = s !== null ? s.dehydrated !== null : !0)),
        s)
      )
        return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function zy(r, s, u, d, m) {
    return r.mode & 1
      ? ((r.flags |= 65536), (r.lanes = m), r)
      : (r === s
          ? (r.flags |= 65536)
          : ((r.flags |= 128),
            (u.flags |= 131072),
            (u.flags &= -52805),
            u.tag === 1 &&
              (u.alternate === null
                ? (u.tag = 17)
                : ((s = li(-1, 1)), (s.tag = 2), Bi(u, s, 1))),
            (u.lanes |= 1)),
        r);
  }
  var vC = j.ReactCurrentOwner,
    Cn = !1;
  function gn(r, s, u, d) {
    s.child = r === null ? ay(s, null, u, d) : go(s, r.child, u, d);
  }
  function Uy(r, s, u, d, m) {
    u = u.render;
    var v = s.ref;
    return (
      vo(s, m),
      (d = _f(r, s, u, d, v, m)),
      (u = Cf()),
      r !== null && !Cn
        ? ((s.updateQueue = r.updateQueue),
          (s.flags &= -2053),
          (r.lanes &= ~m),
          ui(r, s, m))
        : (Tt && u && af(s), (s.flags |= 1), gn(r, s, d, m), s.child)
    );
  }
  function $y(r, s, u, d, m) {
    if (r === null) {
      var v = u.type;
      return typeof v == "function" &&
        !th(v) &&
        v.defaultProps === void 0 &&
        u.compare === null &&
        u.defaultProps === void 0
        ? ((s.tag = 15), (s.type = v), Wy(r, s, v, d, m))
        : ((r = $u(u.type, null, d, s, s.mode, m)),
          (r.ref = s.ref),
          (r.return = s),
          (s.child = r));
    }
    if (((v = r.child), !(r.lanes & m))) {
      var k = v.memoizedProps;
      if (
        ((u = u.compare), (u = u !== null ? u : ma), u(k, d) && r.ref === s.ref)
      )
        return ui(r, s, m);
    }
    return (
      (s.flags |= 1),
      (r = Zi(v, d)),
      (r.ref = s.ref),
      (r.return = s),
      (s.child = r)
    );
  }
  function Wy(r, s, u, d, m) {
    if (r !== null) {
      var v = r.memoizedProps;
      if (ma(v, d) && r.ref === s.ref)
        if (((Cn = !1), (s.pendingProps = d = v), (r.lanes & m) !== 0))
          r.flags & 131072 && (Cn = !0);
        else return (s.lanes = r.lanes), ui(r, s, m);
    }
    return Of(r, s, u, d, m);
  }
  function Hy(r, s, u) {
    var d = s.pendingProps,
      m = d.children,
      v = r !== null ? r.memoizedState : null;
    if (d.mode === "hidden")
      if (!(s.mode & 1))
        (s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          St(bo, In),
          (In |= u);
      else {
        if (!(u & 1073741824))
          return (
            (r = v !== null ? v.baseLanes | u : u),
            (s.lanes = s.childLanes = 1073741824),
            (s.memoizedState = {
              baseLanes: r,
              cachePool: null,
              transitions: null,
            }),
            (s.updateQueue = null),
            St(bo, In),
            (In |= r),
            null
          );
        (s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (d = v !== null ? v.baseLanes : u),
          St(bo, In),
          (In |= d);
      }
    else
      v !== null ? ((d = v.baseLanes | u), (s.memoizedState = null)) : (d = u),
        St(bo, In),
        (In |= d);
    return gn(r, s, m, u), s.child;
  }
  function Zy(r, s) {
    var u = s.ref;
    ((r === null && u !== null) || (r !== null && r.ref !== u)) &&
      ((s.flags |= 512), (s.flags |= 2097152));
  }
  function Of(r, s, u, d, m) {
    var v = _n(u) ? vs : ln.current;
    return (
      (v = fo(s, v)),
      vo(s, m),
      (u = _f(r, s, u, d, v, m)),
      (d = Cf()),
      r !== null && !Cn
        ? ((s.updateQueue = r.updateQueue),
          (s.flags &= -2053),
          (r.lanes &= ~m),
          ui(r, s, m))
        : (Tt && d && af(s), (s.flags |= 1), gn(r, s, u, m), s.child)
    );
  }
  function Ky(r, s, u, d, m) {
    if (_n(u)) {
      var v = !0;
      pu(s);
    } else v = !1;
    if ((vo(s, m), s.stateNode === null))
      ju(r, s), Ly(s, u, d), Nf(s, u, d, m), (d = !0);
    else if (r === null) {
      var k = s.stateNode,
        A = s.memoizedProps;
      k.props = A;
      var D = k.context,
        W = u.contextType;
      typeof W == "object" && W !== null
        ? (W = Xn(W))
        : ((W = _n(u) ? vs : ln.current), (W = fo(s, W)));
      var re = u.getDerivedStateFromProps,
        se =
          typeof re == "function" ||
          typeof k.getSnapshotBeforeUpdate == "function";
      se ||
        (typeof k.UNSAFE_componentWillReceiveProps != "function" &&
          typeof k.componentWillReceiveProps != "function") ||
        ((A !== d || D !== W) && My(s, k, d, W)),
        (Vi = !1);
      var te = s.memoizedState;
      (k.state = te),
        Eu(s, d, k, m),
        (D = s.memoizedState),
        A !== d || te !== D || En.current || Vi
          ? (typeof re == "function" &&
              (Af(s, u, re, d), (D = s.memoizedState)),
            (A = Vi || Oy(s, u, A, d, te, D, W))
              ? (se ||
                  (typeof k.UNSAFE_componentWillMount != "function" &&
                    typeof k.componentWillMount != "function") ||
                  (typeof k.componentWillMount == "function" &&
                    k.componentWillMount(),
                  typeof k.UNSAFE_componentWillMount == "function" &&
                    k.UNSAFE_componentWillMount()),
                typeof k.componentDidMount == "function" &&
                  (s.flags |= 4194308))
              : (typeof k.componentDidMount == "function" &&
                  (s.flags |= 4194308),
                (s.memoizedProps = d),
                (s.memoizedState = D)),
            (k.props = d),
            (k.state = D),
            (k.context = W),
            (d = A))
          : (typeof k.componentDidMount == "function" && (s.flags |= 4194308),
            (d = !1));
    } else {
      (k = s.stateNode),
        uy(r, s),
        (A = s.memoizedProps),
        (W = s.type === s.elementType ? A : dr(s.type, A)),
        (k.props = W),
        (se = s.pendingProps),
        (te = k.context),
        (D = u.contextType),
        typeof D == "object" && D !== null
          ? (D = Xn(D))
          : ((D = _n(u) ? vs : ln.current), (D = fo(s, D)));
      var we = u.getDerivedStateFromProps;
      (re =
        typeof we == "function" ||
        typeof k.getSnapshotBeforeUpdate == "function") ||
        (typeof k.UNSAFE_componentWillReceiveProps != "function" &&
          typeof k.componentWillReceiveProps != "function") ||
        ((A !== se || te !== D) && My(s, k, d, D)),
        (Vi = !1),
        (te = s.memoizedState),
        (k.state = te),
        Eu(s, d, k, m);
      var ke = s.memoizedState;
      A !== se || te !== ke || En.current || Vi
        ? (typeof we == "function" && (Af(s, u, we, d), (ke = s.memoizedState)),
          (W = Vi || Oy(s, u, W, d, te, ke, D) || !1)
            ? (re ||
                (typeof k.UNSAFE_componentWillUpdate != "function" &&
                  typeof k.componentWillUpdate != "function") ||
                (typeof k.componentWillUpdate == "function" &&
                  k.componentWillUpdate(d, ke, D),
                typeof k.UNSAFE_componentWillUpdate == "function" &&
                  k.UNSAFE_componentWillUpdate(d, ke, D)),
              typeof k.componentDidUpdate == "function" && (s.flags |= 4),
              typeof k.getSnapshotBeforeUpdate == "function" &&
                (s.flags |= 1024))
            : (typeof k.componentDidUpdate != "function" ||
                (A === r.memoizedProps && te === r.memoizedState) ||
                (s.flags |= 4),
              typeof k.getSnapshotBeforeUpdate != "function" ||
                (A === r.memoizedProps && te === r.memoizedState) ||
                (s.flags |= 1024),
              (s.memoizedProps = d),
              (s.memoizedState = ke)),
          (k.props = d),
          (k.state = ke),
          (k.context = D),
          (d = W))
        : (typeof k.componentDidUpdate != "function" ||
            (A === r.memoizedProps && te === r.memoizedState) ||
            (s.flags |= 4),
          typeof k.getSnapshotBeforeUpdate != "function" ||
            (A === r.memoizedProps && te === r.memoizedState) ||
            (s.flags |= 1024),
          (d = !1));
    }
    return Lf(r, s, u, d, v, m);
  }
  function Lf(r, s, u, d, m, v) {
    Zy(r, s);
    var k = (s.flags & 128) !== 0;
    if (!d && !k) return m && Qg(s, u, !1), ui(r, s, v);
    (d = s.stateNode), (vC.current = s);
    var A =
      k && typeof u.getDerivedStateFromError != "function" ? null : d.render();
    return (
      (s.flags |= 1),
      r !== null && k
        ? ((s.child = go(s, r.child, null, v)), (s.child = go(s, null, A, v)))
        : gn(r, s, A, v),
      (s.memoizedState = d.state),
      m && Qg(s, u, !0),
      s.child
    );
  }
  function Gy(r) {
    var s = r.stateNode;
    s.pendingContext
      ? Yg(r, s.pendingContext, s.pendingContext !== s.context)
      : s.context && Yg(r, s.context, !1),
      vf(r, s.containerInfo);
  }
  function qy(r, s, u, d, m) {
    return mo(), df(m), (s.flags |= 256), gn(r, s, u, d), s.child;
  }
  var Mf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ff(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function Yy(r, s, u) {
    var d = s.pendingProps,
      m = At.current,
      v = !1,
      k = (s.flags & 128) !== 0,
      A;
    if (
      ((A = k) ||
        (A = r !== null && r.memoizedState === null ? !1 : (m & 2) !== 0),
      A
        ? ((v = !0), (s.flags &= -129))
        : (r === null || r.memoizedState !== null) && (m |= 1),
      St(At, m & 1),
      r === null)
    )
      return (
        cf(s),
        (r = s.memoizedState),
        r !== null && ((r = r.dehydrated), r !== null)
          ? (s.mode & 1
              ? r.data === "$!"
                ? (s.lanes = 8)
                : (s.lanes = 1073741824)
              : (s.lanes = 1),
            null)
          : ((k = d.children),
            (r = d.fallback),
            v
              ? ((d = s.mode),
                (v = s.child),
                (k = { mode: "hidden", children: k }),
                !(d & 1) && v !== null
                  ? ((v.childLanes = 0), (v.pendingProps = k))
                  : (v = Wu(k, d, 0, null)),
                (r = Ps(r, d, u, null)),
                (v.return = s),
                (r.return = s),
                (v.sibling = r),
                (s.child = v),
                (s.child.memoizedState = Ff(u)),
                (s.memoizedState = Mf),
                r)
              : If(s, k))
      );
    if (((m = r.memoizedState), m !== null && ((A = m.dehydrated), A !== null)))
      return xC(r, s, k, d, A, m, u);
    if (v) {
      (v = d.fallback), (k = s.mode), (m = r.child), (A = m.sibling);
      var D = { mode: "hidden", children: d.children };
      return (
        !(k & 1) && s.child !== m
          ? ((d = s.child),
            (d.childLanes = 0),
            (d.pendingProps = D),
            (s.deletions = null))
          : ((d = Zi(m, D)), (d.subtreeFlags = m.subtreeFlags & 14680064)),
        A !== null ? (v = Zi(A, v)) : ((v = Ps(v, k, u, null)), (v.flags |= 2)),
        (v.return = s),
        (d.return = s),
        (d.sibling = v),
        (s.child = d),
        (d = v),
        (v = s.child),
        (k = r.child.memoizedState),
        (k =
          k === null
            ? Ff(u)
            : {
                baseLanes: k.baseLanes | u,
                cachePool: null,
                transitions: k.transitions,
              }),
        (v.memoizedState = k),
        (v.childLanes = r.childLanes & ~u),
        (s.memoizedState = Mf),
        d
      );
    }
    return (
      (v = r.child),
      (r = v.sibling),
      (d = Zi(v, { mode: "visible", children: d.children })),
      !(s.mode & 1) && (d.lanes = u),
      (d.return = s),
      (d.sibling = null),
      r !== null &&
        ((u = s.deletions),
        u === null ? ((s.deletions = [r]), (s.flags |= 16)) : u.push(r)),
      (s.child = d),
      (s.memoizedState = null),
      d
    );
  }
  function If(r, s) {
    return (
      (s = Wu({ mode: "visible", children: s }, r.mode, 0, null)),
      (s.return = r),
      (r.child = s)
    );
  }
  function Nu(r, s, u, d) {
    return (
      d !== null && df(d),
      go(s, r.child, null, u),
      (r = If(s, s.pendingProps.children)),
      (r.flags |= 2),
      (s.memoizedState = null),
      r
    );
  }
  function xC(r, s, u, d, m, v, k) {
    if (u)
      return s.flags & 256
        ? ((s.flags &= -257), (d = jf(Error(n(422)))), Nu(r, s, k, d))
        : s.memoizedState !== null
        ? ((s.child = r.child), (s.flags |= 128), null)
        : ((v = d.fallback),
          (m = s.mode),
          (d = Wu({ mode: "visible", children: d.children }, m, 0, null)),
          (v = Ps(v, m, k, null)),
          (v.flags |= 2),
          (d.return = s),
          (v.return = s),
          (d.sibling = v),
          (s.child = d),
          s.mode & 1 && go(s, r.child, null, k),
          (s.child.memoizedState = Ff(k)),
          (s.memoizedState = Mf),
          v);
    if (!(s.mode & 1)) return Nu(r, s, k, null);
    if (m.data === "$!") {
      if (((d = m.nextSibling && m.nextSibling.dataset), d)) var A = d.dgst;
      return (
        (d = A), (v = Error(n(419))), (d = jf(v, d, void 0)), Nu(r, s, k, d)
      );
    }
    if (((A = (k & r.childLanes) !== 0), Cn || A)) {
      if (((d = Jt), d !== null)) {
        switch (k & -k) {
          case 4:
            m = 2;
            break;
          case 16:
            m = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            m = 32;
            break;
          case 536870912:
            m = 268435456;
            break;
          default:
            m = 0;
        }
        (m = m & (d.suspendedLanes | k) ? 0 : m),
          m !== 0 &&
            m !== v.retryLane &&
            ((v.retryLane = m), ai(r, m), pr(d, r, m, -1));
      }
      return eh(), (d = jf(Error(n(421)))), Nu(r, s, k, d);
    }
    return m.data === "$?"
      ? ((s.flags |= 128),
        (s.child = r.child),
        (s = jC.bind(null, r)),
        (m._reactRetry = s),
        null)
      : ((r = v.treeContext),
        (Fn = Li(m.nextSibling)),
        (Mn = s),
        (Tt = !0),
        (cr = null),
        r !== null &&
          ((qn[Yn++] = si),
          (qn[Yn++] = oi),
          (qn[Yn++] = xs),
          (si = r.id),
          (oi = r.overflow),
          (xs = s)),
        (s = If(s, d.children)),
        (s.flags |= 4096),
        s);
  }
  function Xy(r, s, u) {
    r.lanes |= s;
    var d = r.alternate;
    d !== null && (d.lanes |= s), mf(r.return, s, u);
  }
  function Vf(r, s, u, d, m) {
    var v = r.memoizedState;
    v === null
      ? (r.memoizedState = {
          isBackwards: s,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: u,
          tailMode: m,
        })
      : ((v.isBackwards = s),
        (v.rendering = null),
        (v.renderingStartTime = 0),
        (v.last = d),
        (v.tail = u),
        (v.tailMode = m));
  }
  function Qy(r, s, u) {
    var d = s.pendingProps,
      m = d.revealOrder,
      v = d.tail;
    if ((gn(r, s, d.children, u), (d = At.current), d & 2))
      (d = (d & 1) | 2), (s.flags |= 128);
    else {
      if (r !== null && r.flags & 128)
        e: for (r = s.child; r !== null; ) {
          if (r.tag === 13) r.memoizedState !== null && Xy(r, u, s);
          else if (r.tag === 19) Xy(r, u, s);
          else if (r.child !== null) {
            (r.child.return = r), (r = r.child);
            continue;
          }
          if (r === s) break e;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === s) break e;
            r = r.return;
          }
          (r.sibling.return = r.return), (r = r.sibling);
        }
      d &= 1;
    }
    if ((St(At, d), !(s.mode & 1))) s.memoizedState = null;
    else
      switch (m) {
        case "forwards":
          for (u = s.child, m = null; u !== null; )
            (r = u.alternate),
              r !== null && _u(r) === null && (m = u),
              (u = u.sibling);
          (u = m),
            u === null
              ? ((m = s.child), (s.child = null))
              : ((m = u.sibling), (u.sibling = null)),
            Vf(s, !1, m, u, v);
          break;
        case "backwards":
          for (u = null, m = s.child, s.child = null; m !== null; ) {
            if (((r = m.alternate), r !== null && _u(r) === null)) {
              s.child = m;
              break;
            }
            (r = m.sibling), (m.sibling = u), (u = m), (m = r);
          }
          Vf(s, !0, u, null, v);
          break;
        case "together":
          Vf(s, !1, null, null, void 0);
          break;
        default:
          s.memoizedState = null;
      }
    return s.child;
  }
  function ju(r, s) {
    !(s.mode & 1) &&
      r !== null &&
      ((r.alternate = null), (s.alternate = null), (s.flags |= 2));
  }
  function ui(r, s, u) {
    if (
      (r !== null && (s.dependencies = r.dependencies),
      (_s |= s.lanes),
      !(u & s.childLanes))
    )
      return null;
    if (r !== null && s.child !== r.child) throw Error(n(153));
    if (s.child !== null) {
      for (
        r = s.child, u = Zi(r, r.pendingProps), s.child = u, u.return = s;
        r.sibling !== null;

      )
        (r = r.sibling),
          (u = u.sibling = Zi(r, r.pendingProps)),
          (u.return = s);
      u.sibling = null;
    }
    return s.child;
  }
  function wC(r, s, u) {
    switch (s.tag) {
      case 3:
        Gy(s), mo();
        break;
      case 5:
        fy(s);
        break;
      case 1:
        _n(s.type) && pu(s);
        break;
      case 4:
        vf(s, s.stateNode.containerInfo);
        break;
      case 10:
        var d = s.type._context,
          m = s.memoizedProps.value;
        St(wu, d._currentValue), (d._currentValue = m);
        break;
      case 13:
        if (((d = s.memoizedState), d !== null))
          return d.dehydrated !== null
            ? (St(At, At.current & 1), (s.flags |= 128), null)
            : u & s.child.childLanes
            ? Yy(r, s, u)
            : (St(At, At.current & 1),
              (r = ui(r, s, u)),
              r !== null ? r.sibling : null);
        St(At, At.current & 1);
        break;
      case 19:
        if (((d = (u & s.childLanes) !== 0), r.flags & 128)) {
          if (d) return Qy(r, s, u);
          s.flags |= 128;
        }
        if (
          ((m = s.memoizedState),
          m !== null &&
            ((m.rendering = null), (m.tail = null), (m.lastEffect = null)),
          St(At, At.current),
          d)
        )
          break;
        return null;
      case 22:
      case 23:
        return (s.lanes = 0), Hy(r, s, u);
    }
    return ui(r, s, u);
  }
  var Jy, Bf, ev, tv;
  (Jy = function (r, s) {
    for (var u = s.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6) r.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        (u.child.return = u), (u = u.child);
        continue;
      }
      if (u === s) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === s) return;
        u = u.return;
      }
      (u.sibling.return = u.return), (u = u.sibling);
    }
  }),
    (Bf = function () {}),
    (ev = function (r, s, u, d) {
      var m = r.memoizedProps;
      if (m !== d) {
        (r = s.stateNode), bs(Or.current);
        var v = null;
        switch (u) {
          case "input":
            (m = ct(r, m)), (d = ct(r, d)), (v = []);
            break;
          case "select":
            (m = ee({}, m, { value: void 0 })),
              (d = ee({}, d, { value: void 0 })),
              (v = []);
            break;
          case "textarea":
            (m = de(r, m)), (d = de(r, d)), (v = []);
            break;
          default:
            typeof m.onClick != "function" &&
              typeof d.onClick == "function" &&
              (r.onclick = du);
        }
        Nr(u, d);
        var k;
        u = null;
        for (W in m)
          if (!d.hasOwnProperty(W) && m.hasOwnProperty(W) && m[W] != null)
            if (W === "style") {
              var A = m[W];
              for (k in A) A.hasOwnProperty(k) && (u || (u = {}), (u[k] = ""));
            } else
              W !== "dangerouslySetInnerHTML" &&
                W !== "children" &&
                W !== "suppressContentEditableWarning" &&
                W !== "suppressHydrationWarning" &&
                W !== "autoFocus" &&
                (o.hasOwnProperty(W)
                  ? v || (v = [])
                  : (v = v || []).push(W, null));
        for (W in d) {
          var D = d[W];
          if (
            ((A = m != null ? m[W] : void 0),
            d.hasOwnProperty(W) && D !== A && (D != null || A != null))
          )
            if (W === "style")
              if (A) {
                for (k in A)
                  !A.hasOwnProperty(k) ||
                    (D && D.hasOwnProperty(k)) ||
                    (u || (u = {}), (u[k] = ""));
                for (k in D)
                  D.hasOwnProperty(k) &&
                    A[k] !== D[k] &&
                    (u || (u = {}), (u[k] = D[k]));
              } else u || (v || (v = []), v.push(W, u)), (u = D);
            else
              W === "dangerouslySetInnerHTML"
                ? ((D = D ? D.__html : void 0),
                  (A = A ? A.__html : void 0),
                  D != null && A !== D && (v = v || []).push(W, D))
                : W === "children"
                ? (typeof D != "string" && typeof D != "number") ||
                  (v = v || []).push(W, "" + D)
                : W !== "suppressContentEditableWarning" &&
                  W !== "suppressHydrationWarning" &&
                  (o.hasOwnProperty(W)
                    ? (D != null && W === "onScroll" && Et("scroll", r),
                      v || A === D || (v = []))
                    : (v = v || []).push(W, D));
        }
        u && (v = v || []).push("style", u);
        var W = v;
        (s.updateQueue = W) && (s.flags |= 4);
      }
    }),
    (tv = function (r, s, u, d) {
      u !== d && (s.flags |= 4);
    });
  function Aa(r, s) {
    if (!Tt)
      switch (r.tailMode) {
        case "hidden":
          s = r.tail;
          for (var u = null; s !== null; )
            s.alternate !== null && (u = s), (s = s.sibling);
          u === null ? (r.tail = null) : (u.sibling = null);
          break;
        case "collapsed":
          u = r.tail;
          for (var d = null; u !== null; )
            u.alternate !== null && (d = u), (u = u.sibling);
          d === null
            ? s || r.tail === null
              ? (r.tail = null)
              : (r.tail.sibling = null)
            : (d.sibling = null);
      }
  }
  function cn(r) {
    var s = r.alternate !== null && r.alternate.child === r.child,
      u = 0,
      d = 0;
    if (s)
      for (var m = r.child; m !== null; )
        (u |= m.lanes | m.childLanes),
          (d |= m.subtreeFlags & 14680064),
          (d |= m.flags & 14680064),
          (m.return = r),
          (m = m.sibling);
    else
      for (m = r.child; m !== null; )
        (u |= m.lanes | m.childLanes),
          (d |= m.subtreeFlags),
          (d |= m.flags),
          (m.return = r),
          (m = m.sibling);
    return (r.subtreeFlags |= d), (r.childLanes = u), s;
  }
  function SC(r, s, u) {
    var d = s.pendingProps;
    switch ((lf(s), s.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return cn(s), null;
      case 1:
        return _n(s.type) && hu(), cn(s), null;
      case 3:
        return (
          (d = s.stateNode),
          xo(),
          _t(En),
          _t(ln),
          Sf(),
          d.pendingContext &&
            ((d.context = d.pendingContext), (d.pendingContext = null)),
          (r === null || r.child === null) &&
            (vu(s)
              ? (s.flags |= 4)
              : r === null ||
                (r.memoizedState.isDehydrated && !(s.flags & 256)) ||
                ((s.flags |= 1024), cr !== null && (Xf(cr), (cr = null)))),
          Bf(r, s),
          cn(s),
          null
        );
      case 5:
        xf(s);
        var m = bs(Ca.current);
        if (((u = s.type), r !== null && s.stateNode != null))
          ev(r, s, u, d, m),
            r.ref !== s.ref && ((s.flags |= 512), (s.flags |= 2097152));
        else {
          if (!d) {
            if (s.stateNode === null) throw Error(n(166));
            return cn(s), null;
          }
          if (((r = bs(Or.current)), vu(s))) {
            (d = s.stateNode), (u = s.type);
            var v = s.memoizedProps;
            switch (((d[Dr] = s), (d[wa] = v), (r = (s.mode & 1) !== 0), u)) {
              case "dialog":
                Et("cancel", d), Et("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                Et("load", d);
                break;
              case "video":
              case "audio":
                for (m = 0; m < ya.length; m++) Et(ya[m], d);
                break;
              case "source":
                Et("error", d);
                break;
              case "img":
              case "image":
              case "link":
                Et("error", d), Et("load", d);
                break;
              case "details":
                Et("toggle", d);
                break;
              case "input":
                Pt(d, v), Et("invalid", d);
                break;
              case "select":
                (d._wrapperState = { wasMultiple: !!v.multiple }),
                  Et("invalid", d);
                break;
              case "textarea":
                ae(d, v), Et("invalid", d);
            }
            Nr(u, v), (m = null);
            for (var k in v)
              if (v.hasOwnProperty(k)) {
                var A = v[k];
                k === "children"
                  ? typeof A == "string"
                    ? d.textContent !== A &&
                      (v.suppressHydrationWarning !== !0 &&
                        cu(d.textContent, A, r),
                      (m = ["children", A]))
                    : typeof A == "number" &&
                      d.textContent !== "" + A &&
                      (v.suppressHydrationWarning !== !0 &&
                        cu(d.textContent, A, r),
                      (m = ["children", "" + A]))
                  : o.hasOwnProperty(k) &&
                    A != null &&
                    k === "onScroll" &&
                    Et("scroll", d);
              }
            switch (u) {
              case "input":
                nt(d), N(d, v, !0);
                break;
              case "textarea":
                nt(d), Fe(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (d.onclick = du);
            }
            (d = m), (s.updateQueue = d), d !== null && (s.flags |= 4);
          } else {
            (k = m.nodeType === 9 ? m : m.ownerDocument),
              r === "http://www.w3.org/1999/xhtml" && (r = lt(u)),
              r === "http://www.w3.org/1999/xhtml"
                ? u === "script"
                  ? ((r = k.createElement("div")),
                    (r.innerHTML = "<script></script>"),
                    (r = r.removeChild(r.firstChild)))
                  : typeof d.is == "string"
                  ? (r = k.createElement(u, { is: d.is }))
                  : ((r = k.createElement(u)),
                    u === "select" &&
                      ((k = r),
                      d.multiple
                        ? (k.multiple = !0)
                        : d.size && (k.size = d.size)))
                : (r = k.createElementNS(r, u)),
              (r[Dr] = s),
              (r[wa] = d),
              Jy(r, s, !1, !1),
              (s.stateNode = r);
            e: {
              switch (((k = _i(u, d)), u)) {
                case "dialog":
                  Et("cancel", r), Et("close", r), (m = d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Et("load", r), (m = d);
                  break;
                case "video":
                case "audio":
                  for (m = 0; m < ya.length; m++) Et(ya[m], r);
                  m = d;
                  break;
                case "source":
                  Et("error", r), (m = d);
                  break;
                case "img":
                case "image":
                case "link":
                  Et("error", r), Et("load", r), (m = d);
                  break;
                case "details":
                  Et("toggle", r), (m = d);
                  break;
                case "input":
                  Pt(r, d), (m = ct(r, d)), Et("invalid", r);
                  break;
                case "option":
                  m = d;
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!d.multiple }),
                    (m = ee({}, d, { value: void 0 })),
                    Et("invalid", r);
                  break;
                case "textarea":
                  ae(r, d), (m = de(r, d)), Et("invalid", r);
                  break;
                default:
                  m = d;
              }
              Nr(u, m), (A = m);
              for (v in A)
                if (A.hasOwnProperty(v)) {
                  var D = A[v];
                  v === "style"
                    ? Ei(r, D)
                    : v === "dangerouslySetInnerHTML"
                    ? ((D = D ? D.__html : void 0), D != null && Rr(r, D))
                    : v === "children"
                    ? typeof D == "string"
                      ? (u !== "textarea" || D !== "") && bt(r, D)
                      : typeof D == "number" && bt(r, "" + D)
                    : v !== "suppressContentEditableWarning" &&
                      v !== "suppressHydrationWarning" &&
                      v !== "autoFocus" &&
                      (o.hasOwnProperty(v)
                        ? D != null && v === "onScroll" && Et("scroll", r)
                        : D != null && R(r, v, D, k));
                }
              switch (u) {
                case "input":
                  nt(r), N(r, d, !1);
                  break;
                case "textarea":
                  nt(r), Fe(r);
                  break;
                case "option":
                  d.value != null && r.setAttribute("value", "" + Te(d.value));
                  break;
                case "select":
                  (r.multiple = !!d.multiple),
                    (v = d.value),
                    v != null
                      ? ue(r, !!d.multiple, v, !1)
                      : d.defaultValue != null &&
                        ue(r, !!d.multiple, d.defaultValue, !0);
                  break;
                default:
                  typeof m.onClick == "function" && (r.onclick = du);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break e;
                case "img":
                  d = !0;
                  break e;
                default:
                  d = !1;
              }
            }
            d && (s.flags |= 4);
          }
          s.ref !== null && ((s.flags |= 512), (s.flags |= 2097152));
        }
        return cn(s), null;
      case 6:
        if (r && s.stateNode != null) tv(r, s, r.memoizedProps, d);
        else {
          if (typeof d != "string" && s.stateNode === null) throw Error(n(166));
          if (((u = bs(Ca.current)), bs(Or.current), vu(s))) {
            if (
              ((d = s.stateNode),
              (u = s.memoizedProps),
              (d[Dr] = s),
              (v = d.nodeValue !== u) && ((r = Mn), r !== null))
            )
              switch (r.tag) {
                case 3:
                  cu(d.nodeValue, u, (r.mode & 1) !== 0);
                  break;
                case 5:
                  r.memoizedProps.suppressHydrationWarning !== !0 &&
                    cu(d.nodeValue, u, (r.mode & 1) !== 0);
              }
            v && (s.flags |= 4);
          } else
            (d = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(d)),
              (d[Dr] = s),
              (s.stateNode = d);
        }
        return cn(s), null;
      case 13:
        if (
          (_t(At),
          (d = s.memoizedState),
          r === null ||
            (r.memoizedState !== null && r.memoizedState.dehydrated !== null))
        ) {
          if (Tt && Fn !== null && s.mode & 1 && !(s.flags & 128))
            iy(), mo(), (s.flags |= 98560), (v = !1);
          else if (((v = vu(s)), d !== null && d.dehydrated !== null)) {
            if (r === null) {
              if (!v) throw Error(n(318));
              if (
                ((v = s.memoizedState),
                (v = v !== null ? v.dehydrated : null),
                !v)
              )
                throw Error(n(317));
              v[Dr] = s;
            } else
              mo(),
                !(s.flags & 128) && (s.memoizedState = null),
                (s.flags |= 4);
            cn(s), (v = !1);
          } else cr !== null && (Xf(cr), (cr = null)), (v = !0);
          if (!v) return s.flags & 65536 ? s : null;
        }
        return s.flags & 128
          ? ((s.lanes = u), s)
          : ((d = d !== null),
            d !== (r !== null && r.memoizedState !== null) &&
              d &&
              ((s.child.flags |= 8192),
              s.mode & 1 &&
                (r === null || At.current & 1 ? qt === 0 && (qt = 3) : eh())),
            s.updateQueue !== null && (s.flags |= 4),
            cn(s),
            null);
      case 4:
        return (
          xo(),
          Bf(r, s),
          r === null && va(s.stateNode.containerInfo),
          cn(s),
          null
        );
      case 10:
        return pf(s.type._context), cn(s), null;
      case 17:
        return _n(s.type) && hu(), cn(s), null;
      case 19:
        if ((_t(At), (v = s.memoizedState), v === null)) return cn(s), null;
        if (((d = (s.flags & 128) !== 0), (k = v.rendering), k === null))
          if (d) Aa(v, !1);
          else {
            if (qt !== 0 || (r !== null && r.flags & 128))
              for (r = s.child; r !== null; ) {
                if (((k = _u(r)), k !== null)) {
                  for (
                    s.flags |= 128,
                      Aa(v, !1),
                      d = k.updateQueue,
                      d !== null && ((s.updateQueue = d), (s.flags |= 4)),
                      s.subtreeFlags = 0,
                      d = u,
                      u = s.child;
                    u !== null;

                  )
                    (v = u),
                      (r = d),
                      (v.flags &= 14680066),
                      (k = v.alternate),
                      k === null
                        ? ((v.childLanes = 0),
                          (v.lanes = r),
                          (v.child = null),
                          (v.subtreeFlags = 0),
                          (v.memoizedProps = null),
                          (v.memoizedState = null),
                          (v.updateQueue = null),
                          (v.dependencies = null),
                          (v.stateNode = null))
                        : ((v.childLanes = k.childLanes),
                          (v.lanes = k.lanes),
                          (v.child = k.child),
                          (v.subtreeFlags = 0),
                          (v.deletions = null),
                          (v.memoizedProps = k.memoizedProps),
                          (v.memoizedState = k.memoizedState),
                          (v.updateQueue = k.updateQueue),
                          (v.type = k.type),
                          (r = k.dependencies),
                          (v.dependencies =
                            r === null
                              ? null
                              : {
                                  lanes: r.lanes,
                                  firstContext: r.firstContext,
                                })),
                      (u = u.sibling);
                  return St(At, (At.current & 1) | 2), s.child;
                }
                r = r.sibling;
              }
            v.tail !== null &&
              wt() > Eo &&
              ((s.flags |= 128), (d = !0), Aa(v, !1), (s.lanes = 4194304));
          }
        else {
          if (!d)
            if (((r = _u(k)), r !== null)) {
              if (
                ((s.flags |= 128),
                (d = !0),
                (u = r.updateQueue),
                u !== null && ((s.updateQueue = u), (s.flags |= 4)),
                Aa(v, !0),
                v.tail === null &&
                  v.tailMode === "hidden" &&
                  !k.alternate &&
                  !Tt)
              )
                return cn(s), null;
            } else
              2 * wt() - v.renderingStartTime > Eo &&
                u !== 1073741824 &&
                ((s.flags |= 128), (d = !0), Aa(v, !1), (s.lanes = 4194304));
          v.isBackwards
            ? ((k.sibling = s.child), (s.child = k))
            : ((u = v.last),
              u !== null ? (u.sibling = k) : (s.child = k),
              (v.last = k));
        }
        return v.tail !== null
          ? ((s = v.tail),
            (v.rendering = s),
            (v.tail = s.sibling),
            (v.renderingStartTime = wt()),
            (s.sibling = null),
            (u = At.current),
            St(At, d ? (u & 1) | 2 : u & 1),
            s)
          : (cn(s), null);
      case 22:
      case 23:
        return (
          Jf(),
          (d = s.memoizedState !== null),
          r !== null && (r.memoizedState !== null) !== d && (s.flags |= 8192),
          d && s.mode & 1
            ? In & 1073741824 &&
              (cn(s), s.subtreeFlags & 6 && (s.flags |= 8192))
            : cn(s),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function bC(r, s) {
    switch ((lf(s), s.tag)) {
      case 1:
        return (
          _n(s.type) && hu(),
          (r = s.flags),
          r & 65536 ? ((s.flags = (r & -65537) | 128), s) : null
        );
      case 3:
        return (
          xo(),
          _t(En),
          _t(ln),
          Sf(),
          (r = s.flags),
          r & 65536 && !(r & 128) ? ((s.flags = (r & -65537) | 128), s) : null
        );
      case 5:
        return xf(s), null;
      case 13:
        if (
          (_t(At), (r = s.memoizedState), r !== null && r.dehydrated !== null)
        ) {
          if (s.alternate === null) throw Error(n(340));
          mo();
        }
        return (
          (r = s.flags), r & 65536 ? ((s.flags = (r & -65537) | 128), s) : null
        );
      case 19:
        return _t(At), null;
      case 4:
        return xo(), null;
      case 10:
        return pf(s.type._context), null;
      case 22:
      case 23:
        return Jf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Du = !1,
    dn = !1,
    EC = typeof WeakSet == "function" ? WeakSet : Set,
    Ce = null;
  function So(r, s) {
    var u = r.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (d) {
          Mt(r, s, d);
        }
      else u.current = null;
  }
  function zf(r, s, u) {
    try {
      u();
    } catch (d) {
      Mt(r, s, d);
    }
  }
  var nv = !1;
  function _C(r, s) {
    if (((Qd = Jl), (r = Og()), Wd(r))) {
      if ("selectionStart" in r)
        var u = { start: r.selectionStart, end: r.selectionEnd };
      else
        e: {
          u = ((u = r.ownerDocument) && u.defaultView) || window;
          var d = u.getSelection && u.getSelection();
          if (d && d.rangeCount !== 0) {
            u = d.anchorNode;
            var m = d.anchorOffset,
              v = d.focusNode;
            d = d.focusOffset;
            try {
              u.nodeType, v.nodeType;
            } catch {
              u = null;
              break e;
            }
            var k = 0,
              A = -1,
              D = -1,
              W = 0,
              re = 0,
              se = r,
              te = null;
            t: for (;;) {
              for (
                var we;
                se !== u || (m !== 0 && se.nodeType !== 3) || (A = k + m),
                  se !== v || (d !== 0 && se.nodeType !== 3) || (D = k + d),
                  se.nodeType === 3 && (k += se.nodeValue.length),
                  (we = se.firstChild) !== null;

              )
                (te = se), (se = we);
              for (;;) {
                if (se === r) break t;
                if (
                  (te === u && ++W === m && (A = k),
                  te === v && ++re === d && (D = k),
                  (we = se.nextSibling) !== null)
                )
                  break;
                (se = te), (te = se.parentNode);
              }
              se = we;
            }
            u = A === -1 || D === -1 ? null : { start: A, end: D };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (
      Jd = { focusedElem: r, selectionRange: u }, Jl = !1, Ce = s;
      Ce !== null;

    )
      if (
        ((s = Ce), (r = s.child), (s.subtreeFlags & 1028) !== 0 && r !== null)
      )
        (r.return = s), (Ce = r);
      else
        for (; Ce !== null; ) {
          s = Ce;
          try {
            var ke = s.alternate;
            if (s.flags & 1024)
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ke !== null) {
                    var Ae = ke.memoizedProps,
                      It = ke.memoizedState,
                      U = s.stateNode,
                      I = U.getSnapshotBeforeUpdate(
                        s.elementType === s.type ? Ae : dr(s.type, Ae),
                        It
                      );
                    U.__reactInternalSnapshotBeforeUpdate = I;
                  }
                  break;
                case 3:
                  var $ = s.stateNode.containerInfo;
                  $.nodeType === 1
                    ? ($.textContent = "")
                    : $.nodeType === 9 &&
                      $.documentElement &&
                      $.removeChild($.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(n(163));
              }
          } catch (fe) {
            Mt(s, s.return, fe);
          }
          if (((r = s.sibling), r !== null)) {
            (r.return = s.return), (Ce = r);
            break;
          }
          Ce = s.return;
        }
    return (ke = nv), (nv = !1), ke;
  }
  function Na(r, s, u) {
    var d = s.updateQueue;
    if (((d = d !== null ? d.lastEffect : null), d !== null)) {
      var m = (d = d.next);
      do {
        if ((m.tag & r) === r) {
          var v = m.destroy;
          (m.destroy = void 0), v !== void 0 && zf(s, u, v);
        }
        m = m.next;
      } while (m !== d);
    }
  }
  function Ou(r, s) {
    if (
      ((s = s.updateQueue), (s = s !== null ? s.lastEffect : null), s !== null)
    ) {
      var u = (s = s.next);
      do {
        if ((u.tag & r) === r) {
          var d = u.create;
          u.destroy = d();
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function Uf(r) {
    var s = r.ref;
    if (s !== null) {
      var u = r.stateNode;
      switch (r.tag) {
        case 5:
          r = u;
          break;
        default:
          r = u;
      }
      typeof s == "function" ? s(r) : (s.current = r);
    }
  }
  function rv(r) {
    var s = r.alternate;
    s !== null && ((r.alternate = null), rv(s)),
      (r.child = null),
      (r.deletions = null),
      (r.sibling = null),
      r.tag === 5 &&
        ((s = r.stateNode),
        s !== null &&
          (delete s[Dr],
          delete s[wa],
          delete s[rf],
          delete s[oC],
          delete s[aC])),
      (r.stateNode = null),
      (r.return = null),
      (r.dependencies = null),
      (r.memoizedProps = null),
      (r.memoizedState = null),
      (r.pendingProps = null),
      (r.stateNode = null),
      (r.updateQueue = null);
  }
  function iv(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function sv(r) {
    e: for (;;) {
      for (; r.sibling === null; ) {
        if (r.return === null || iv(r.return)) return null;
        r = r.return;
      }
      for (
        r.sibling.return = r.return, r = r.sibling;
        r.tag !== 5 && r.tag !== 6 && r.tag !== 18;

      ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        (r.child.return = r), (r = r.child);
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function $f(r, s, u) {
    var d = r.tag;
    if (d === 5 || d === 6)
      (r = r.stateNode),
        s
          ? u.nodeType === 8
            ? u.parentNode.insertBefore(r, s)
            : u.insertBefore(r, s)
          : (u.nodeType === 8
              ? ((s = u.parentNode), s.insertBefore(r, u))
              : ((s = u), s.appendChild(r)),
            (u = u._reactRootContainer),
            u != null || s.onclick !== null || (s.onclick = du));
    else if (d !== 4 && ((r = r.child), r !== null))
      for ($f(r, s, u), r = r.sibling; r !== null; )
        $f(r, s, u), (r = r.sibling);
  }
  function Wf(r, s, u) {
    var d = r.tag;
    if (d === 5 || d === 6)
      (r = r.stateNode), s ? u.insertBefore(r, s) : u.appendChild(r);
    else if (d !== 4 && ((r = r.child), r !== null))
      for (Wf(r, s, u), r = r.sibling; r !== null; )
        Wf(r, s, u), (r = r.sibling);
  }
  var tn = null,
    fr = !1;
  function zi(r, s, u) {
    for (u = u.child; u !== null; ) ov(r, s, u), (u = u.sibling);
  }
  function ov(r, s, u) {
    if (On && typeof On.onCommitFiberUnmount == "function")
      try {
        On.onCommitFiberUnmount(ar, u);
      } catch {}
    switch (u.tag) {
      case 5:
        dn || So(u, s);
      case 6:
        var d = tn,
          m = fr;
        (tn = null),
          zi(r, s, u),
          (tn = d),
          (fr = m),
          tn !== null &&
            (fr
              ? ((r = tn),
                (u = u.stateNode),
                r.nodeType === 8
                  ? r.parentNode.removeChild(u)
                  : r.removeChild(u))
              : tn.removeChild(u.stateNode));
        break;
      case 18:
        tn !== null &&
          (fr
            ? ((r = tn),
              (u = u.stateNode),
              r.nodeType === 8
                ? nf(r.parentNode, u)
                : r.nodeType === 1 && nf(r, u),
              ua(r))
            : nf(tn, u.stateNode));
        break;
      case 4:
        (d = tn),
          (m = fr),
          (tn = u.stateNode.containerInfo),
          (fr = !0),
          zi(r, s, u),
          (tn = d),
          (fr = m);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !dn &&
          ((d = u.updateQueue), d !== null && ((d = d.lastEffect), d !== null))
        ) {
          m = d = d.next;
          do {
            var v = m,
              k = v.destroy;
            (v = v.tag),
              k !== void 0 && (v & 2 || v & 4) && zf(u, s, k),
              (m = m.next);
          } while (m !== d);
        }
        zi(r, s, u);
        break;
      case 1:
        if (
          !dn &&
          (So(u, s),
          (d = u.stateNode),
          typeof d.componentWillUnmount == "function")
        )
          try {
            (d.props = u.memoizedProps),
              (d.state = u.memoizedState),
              d.componentWillUnmount();
          } catch (A) {
            Mt(u, s, A);
          }
        zi(r, s, u);
        break;
      case 21:
        zi(r, s, u);
        break;
      case 22:
        u.mode & 1
          ? ((dn = (d = dn) || u.memoizedState !== null), zi(r, s, u), (dn = d))
          : zi(r, s, u);
        break;
      default:
        zi(r, s, u);
    }
  }
  function av(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var u = r.stateNode;
      u === null && (u = r.stateNode = new EC()),
        s.forEach(function (d) {
          var m = DC.bind(null, r, d);
          u.has(d) || (u.add(d), d.then(m, m));
        });
    }
  }
  function hr(r, s) {
    var u = s.deletions;
    if (u !== null)
      for (var d = 0; d < u.length; d++) {
        var m = u[d];
        try {
          var v = r,
            k = s,
            A = k;
          e: for (; A !== null; ) {
            switch (A.tag) {
              case 5:
                (tn = A.stateNode), (fr = !1);
                break e;
              case 3:
                (tn = A.stateNode.containerInfo), (fr = !0);
                break e;
              case 4:
                (tn = A.stateNode.containerInfo), (fr = !0);
                break e;
            }
            A = A.return;
          }
          if (tn === null) throw Error(n(160));
          ov(v, k, m), (tn = null), (fr = !1);
          var D = m.alternate;
          D !== null && (D.return = null), (m.return = null);
        } catch (W) {
          Mt(m, s, W);
        }
      }
    if (s.subtreeFlags & 12854)
      for (s = s.child; s !== null; ) lv(s, r), (s = s.sibling);
  }
  function lv(r, s) {
    var u = r.alternate,
      d = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((hr(s, r), Mr(r), d & 4)) {
          try {
            Na(3, r, r.return), Ou(3, r);
          } catch (Ae) {
            Mt(r, r.return, Ae);
          }
          try {
            Na(5, r, r.return);
          } catch (Ae) {
            Mt(r, r.return, Ae);
          }
        }
        break;
      case 1:
        hr(s, r), Mr(r), d & 512 && u !== null && So(u, u.return);
        break;
      case 5:
        if (
          (hr(s, r),
          Mr(r),
          d & 512 && u !== null && So(u, u.return),
          r.flags & 32)
        ) {
          var m = r.stateNode;
          try {
            bt(m, "");
          } catch (Ae) {
            Mt(r, r.return, Ae);
          }
        }
        if (d & 4 && ((m = r.stateNode), m != null)) {
          var v = r.memoizedProps,
            k = u !== null ? u.memoizedProps : v,
            A = r.type,
            D = r.updateQueue;
          if (((r.updateQueue = null), D !== null))
            try {
              A === "input" && v.type === "radio" && v.name != null && Wt(m, v),
                _i(A, k);
              var W = _i(A, v);
              for (k = 0; k < D.length; k += 2) {
                var re = D[k],
                  se = D[k + 1];
                re === "style"
                  ? Ei(m, se)
                  : re === "dangerouslySetInnerHTML"
                  ? Rr(m, se)
                  : re === "children"
                  ? bt(m, se)
                  : R(m, re, se, W);
              }
              switch (A) {
                case "input":
                  Xt(m, v);
                  break;
                case "textarea":
                  je(m, v);
                  break;
                case "select":
                  var te = m._wrapperState.wasMultiple;
                  m._wrapperState.wasMultiple = !!v.multiple;
                  var we = v.value;
                  we != null
                    ? ue(m, !!v.multiple, we, !1)
                    : te !== !!v.multiple &&
                      (v.defaultValue != null
                        ? ue(m, !!v.multiple, v.defaultValue, !0)
                        : ue(m, !!v.multiple, v.multiple ? [] : "", !1));
              }
              m[wa] = v;
            } catch (Ae) {
              Mt(r, r.return, Ae);
            }
        }
        break;
      case 6:
        if ((hr(s, r), Mr(r), d & 4)) {
          if (r.stateNode === null) throw Error(n(162));
          (m = r.stateNode), (v = r.memoizedProps);
          try {
            m.nodeValue = v;
          } catch (Ae) {
            Mt(r, r.return, Ae);
          }
        }
        break;
      case 3:
        if (
          (hr(s, r), Mr(r), d & 4 && u !== null && u.memoizedState.isDehydrated)
        )
          try {
            ua(s.containerInfo);
          } catch (Ae) {
            Mt(r, r.return, Ae);
          }
        break;
      case 4:
        hr(s, r), Mr(r);
        break;
      case 13:
        hr(s, r),
          Mr(r),
          (m = r.child),
          m.flags & 8192 &&
            ((v = m.memoizedState !== null),
            (m.stateNode.isHidden = v),
            !v ||
              (m.alternate !== null && m.alternate.memoizedState !== null) ||
              (Kf = wt())),
          d & 4 && av(r);
        break;
      case 22:
        if (
          ((re = u !== null && u.memoizedState !== null),
          r.mode & 1 ? ((dn = (W = dn) || re), hr(s, r), (dn = W)) : hr(s, r),
          Mr(r),
          d & 8192)
        ) {
          if (
            ((W = r.memoizedState !== null),
            (r.stateNode.isHidden = W) && !re && r.mode & 1)
          )
            for (Ce = r, re = r.child; re !== null; ) {
              for (se = Ce = re; Ce !== null; ) {
                switch (((te = Ce), (we = te.child), te.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Na(4, te, te.return);
                    break;
                  case 1:
                    So(te, te.return);
                    var ke = te.stateNode;
                    if (typeof ke.componentWillUnmount == "function") {
                      (d = te), (u = te.return);
                      try {
                        (s = d),
                          (ke.props = s.memoizedProps),
                          (ke.state = s.memoizedState),
                          ke.componentWillUnmount();
                      } catch (Ae) {
                        Mt(d, u, Ae);
                      }
                    }
                    break;
                  case 5:
                    So(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      dv(se);
                      continue;
                    }
                }
                we !== null ? ((we.return = te), (Ce = we)) : dv(se);
              }
              re = re.sibling;
            }
          e: for (re = null, se = r; ; ) {
            if (se.tag === 5) {
              if (re === null) {
                re = se;
                try {
                  (m = se.stateNode),
                    W
                      ? ((v = m.style),
                        typeof v.setProperty == "function"
                          ? v.setProperty("display", "none", "important")
                          : (v.display = "none"))
                      : ((A = se.stateNode),
                        (D = se.memoizedProps.style),
                        (k =
                          D != null && D.hasOwnProperty("display")
                            ? D.display
                            : null),
                        (A.style.display = jn("display", k)));
                } catch (Ae) {
                  Mt(r, r.return, Ae);
                }
              }
            } else if (se.tag === 6) {
              if (re === null)
                try {
                  se.stateNode.nodeValue = W ? "" : se.memoizedProps;
                } catch (Ae) {
                  Mt(r, r.return, Ae);
                }
            } else if (
              ((se.tag !== 22 && se.tag !== 23) ||
                se.memoizedState === null ||
                se === r) &&
              se.child !== null
            ) {
              (se.child.return = se), (se = se.child);
              continue;
            }
            if (se === r) break e;
            for (; se.sibling === null; ) {
              if (se.return === null || se.return === r) break e;
              re === se && (re = null), (se = se.return);
            }
            re === se && (re = null),
              (se.sibling.return = se.return),
              (se = se.sibling);
          }
        }
        break;
      case 19:
        hr(s, r), Mr(r), d & 4 && av(r);
        break;
      case 21:
        break;
      default:
        hr(s, r), Mr(r);
    }
  }
  function Mr(r) {
    var s = r.flags;
    if (s & 2) {
      try {
        e: {
          for (var u = r.return; u !== null; ) {
            if (iv(u)) {
              var d = u;
              break e;
            }
            u = u.return;
          }
          throw Error(n(160));
        }
        switch (d.tag) {
          case 5:
            var m = d.stateNode;
            d.flags & 32 && (bt(m, ""), (d.flags &= -33));
            var v = sv(r);
            Wf(r, v, m);
            break;
          case 3:
          case 4:
            var k = d.stateNode.containerInfo,
              A = sv(r);
            $f(r, A, k);
            break;
          default:
            throw Error(n(161));
        }
      } catch (D) {
        Mt(r, r.return, D);
      }
      r.flags &= -3;
    }
    s & 4096 && (r.flags &= -4097);
  }
  function CC(r, s, u) {
    (Ce = r), uv(r);
  }
  function uv(r, s, u) {
    for (var d = (r.mode & 1) !== 0; Ce !== null; ) {
      var m = Ce,
        v = m.child;
      if (m.tag === 22 && d) {
        var k = m.memoizedState !== null || Du;
        if (!k) {
          var A = m.alternate,
            D = (A !== null && A.memoizedState !== null) || dn;
          A = Du;
          var W = dn;
          if (((Du = k), (dn = D) && !W))
            for (Ce = m; Ce !== null; )
              (k = Ce),
                (D = k.child),
                k.tag === 22 && k.memoizedState !== null
                  ? fv(m)
                  : D !== null
                  ? ((D.return = k), (Ce = D))
                  : fv(m);
          for (; v !== null; ) (Ce = v), uv(v), (v = v.sibling);
          (Ce = m), (Du = A), (dn = W);
        }
        cv(r);
      } else
        m.subtreeFlags & 8772 && v !== null
          ? ((v.return = m), (Ce = v))
          : cv(r);
    }
  }
  function cv(r) {
    for (; Ce !== null; ) {
      var s = Ce;
      if (s.flags & 8772) {
        var u = s.alternate;
        try {
          if (s.flags & 8772)
            switch (s.tag) {
              case 0:
              case 11:
              case 15:
                dn || Ou(5, s);
                break;
              case 1:
                var d = s.stateNode;
                if (s.flags & 4 && !dn)
                  if (u === null) d.componentDidMount();
                  else {
                    var m =
                      s.elementType === s.type
                        ? u.memoizedProps
                        : dr(s.type, u.memoizedProps);
                    d.componentDidUpdate(
                      m,
                      u.memoizedState,
                      d.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var v = s.updateQueue;
                v !== null && dy(s, v, d);
                break;
              case 3:
                var k = s.updateQueue;
                if (k !== null) {
                  if (((u = null), s.child !== null))
                    switch (s.child.tag) {
                      case 5:
                        u = s.child.stateNode;
                        break;
                      case 1:
                        u = s.child.stateNode;
                    }
                  dy(s, k, u);
                }
                break;
              case 5:
                var A = s.stateNode;
                if (u === null && s.flags & 4) {
                  u = A;
                  var D = s.memoizedProps;
                  switch (s.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      D.autoFocus && u.focus();
                      break;
                    case "img":
                      D.src && (u.src = D.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (s.memoizedState === null) {
                  var W = s.alternate;
                  if (W !== null) {
                    var re = W.memoizedState;
                    if (re !== null) {
                      var se = re.dehydrated;
                      se !== null && ua(se);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(n(163));
            }
          dn || (s.flags & 512 && Uf(s));
        } catch (te) {
          Mt(s, s.return, te);
        }
      }
      if (s === r) {
        Ce = null;
        break;
      }
      if (((u = s.sibling), u !== null)) {
        (u.return = s.return), (Ce = u);
        break;
      }
      Ce = s.return;
    }
  }
  function dv(r) {
    for (; Ce !== null; ) {
      var s = Ce;
      if (s === r) {
        Ce = null;
        break;
      }
      var u = s.sibling;
      if (u !== null) {
        (u.return = s.return), (Ce = u);
        break;
      }
      Ce = s.return;
    }
  }
  function fv(r) {
    for (; Ce !== null; ) {
      var s = Ce;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var u = s.return;
            try {
              Ou(4, s);
            } catch (D) {
              Mt(s, u, D);
            }
            break;
          case 1:
            var d = s.stateNode;
            if (typeof d.componentDidMount == "function") {
              var m = s.return;
              try {
                d.componentDidMount();
              } catch (D) {
                Mt(s, m, D);
              }
            }
            var v = s.return;
            try {
              Uf(s);
            } catch (D) {
              Mt(s, v, D);
            }
            break;
          case 5:
            var k = s.return;
            try {
              Uf(s);
            } catch (D) {
              Mt(s, k, D);
            }
        }
      } catch (D) {
        Mt(s, s.return, D);
      }
      if (s === r) {
        Ce = null;
        break;
      }
      var A = s.sibling;
      if (A !== null) {
        (A.return = s.return), (Ce = A);
        break;
      }
      Ce = s.return;
    }
  }
  var kC = Math.ceil,
    Lu = j.ReactCurrentDispatcher,
    Hf = j.ReactCurrentOwner,
    Jn = j.ReactCurrentBatchConfig,
    ut = 0,
    Jt = null,
    $t = null,
    nn = 0,
    In = 0,
    bo = Mi(0),
    qt = 0,
    ja = null,
    _s = 0,
    Mu = 0,
    Zf = 0,
    Da = null,
    kn = null,
    Kf = 0,
    Eo = 1 / 0,
    ci = null,
    Fu = !1,
    Gf = null,
    Ui = null,
    Iu = !1,
    $i = null,
    Vu = 0,
    Oa = 0,
    qf = null,
    Bu = -1,
    zu = 0;
  function yn() {
    return ut & 6 ? wt() : Bu !== -1 ? Bu : (Bu = wt());
  }
  function Wi(r) {
    return r.mode & 1
      ? ut & 2 && nn !== 0
        ? nn & -nn
        : uC.transition !== null
        ? (zu === 0 && (zu = sg()), zu)
        : ((r = gt),
          r !== 0 || ((r = window.event), (r = r === void 0 ? 16 : pg(r.type))),
          r)
      : 1;
  }
  function pr(r, s, u, d) {
    if (50 < Oa) throw ((Oa = 0), (qf = null), Error(n(185)));
    ia(r, u, d),
      (!(ut & 2) || r !== Jt) &&
        (r === Jt && (!(ut & 2) && (Mu |= u), qt === 4 && Hi(r, nn)),
        Tn(r, d),
        u === 1 &&
          ut === 0 &&
          !(s.mode & 1) &&
          ((Eo = wt() + 500), mu && Ii()));
  }
  function Tn(r, s) {
    var u = r.callbackNode;
    u_(r, s);
    var d = Yl(r, r === Jt ? nn : 0);
    if (d === 0)
      u !== null && eo(u), (r.callbackNode = null), (r.callbackPriority = 0);
    else if (((s = d & -d), r.callbackPriority !== s)) {
      if ((u != null && eo(u), s === 1))
        r.tag === 0 ? lC(pv.bind(null, r)) : Jg(pv.bind(null, r)),
          iC(function () {
            !(ut & 6) && Ii();
          }),
          (u = null);
      else {
        switch (og(d)) {
          case 1:
            u = pt;
            break;
          case 4:
            u = Kt;
            break;
          case 16:
            u = ni;
            break;
          case 536870912:
            u = Rt;
            break;
          default:
            u = ni;
        }
        u = bv(u, hv.bind(null, r));
      }
      (r.callbackPriority = s), (r.callbackNode = u);
    }
  }
  function hv(r, s) {
    if (((Bu = -1), (zu = 0), ut & 6)) throw Error(n(327));
    var u = r.callbackNode;
    if (_o() && r.callbackNode !== u) return null;
    var d = Yl(r, r === Jt ? nn : 0);
    if (d === 0) return null;
    if (d & 30 || d & r.expiredLanes || s) s = Uu(r, d);
    else {
      s = d;
      var m = ut;
      ut |= 2;
      var v = gv();
      (Jt !== r || nn !== s) && ((ci = null), (Eo = wt() + 500), ks(r, s));
      do
        try {
          RC();
          break;
        } catch (A) {
          mv(r, A);
        }
      while (!0);
      hf(),
        (Lu.current = v),
        (ut = m),
        $t !== null ? (s = 0) : ((Jt = null), (nn = 0), (s = qt));
    }
    if (s !== 0) {
      if (
        (s === 2 && ((m = Pd(r)), m !== 0 && ((d = m), (s = Yf(r, m)))),
        s === 1)
      )
        throw ((u = ja), ks(r, 0), Hi(r, d), Tn(r, wt()), u);
      if (s === 6) Hi(r, d);
      else {
        if (
          ((m = r.current.alternate),
          !(d & 30) &&
            !TC(m) &&
            ((s = Uu(r, d)),
            s === 2 && ((v = Pd(r)), v !== 0 && ((d = v), (s = Yf(r, v)))),
            s === 1))
        )
          throw ((u = ja), ks(r, 0), Hi(r, d), Tn(r, wt()), u);
        switch (((r.finishedWork = m), (r.finishedLanes = d), s)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Ts(r, kn, ci);
            break;
          case 3:
            if (
              (Hi(r, d),
              (d & 130023424) === d && ((s = Kf + 500 - wt()), 10 < s))
            ) {
              if (Yl(r, 0) !== 0) break;
              if (((m = r.suspendedLanes), (m & d) !== d)) {
                yn(), (r.pingedLanes |= r.suspendedLanes & m);
                break;
              }
              r.timeoutHandle = tf(Ts.bind(null, r, kn, ci), s);
              break;
            }
            Ts(r, kn, ci);
            break;
          case 4:
            if ((Hi(r, d), (d & 4194240) === d)) break;
            for (s = r.eventTimes, m = -1; 0 < d; ) {
              var k = 31 - lr(d);
              (v = 1 << k), (k = s[k]), k > m && (m = k), (d &= ~v);
            }
            if (
              ((d = m),
              (d = wt() - d),
              (d =
                (120 > d
                  ? 120
                  : 480 > d
                  ? 480
                  : 1080 > d
                  ? 1080
                  : 1920 > d
                  ? 1920
                  : 3e3 > d
                  ? 3e3
                  : 4320 > d
                  ? 4320
                  : 1960 * kC(d / 1960)) - d),
              10 < d)
            ) {
              r.timeoutHandle = tf(Ts.bind(null, r, kn, ci), d);
              break;
            }
            Ts(r, kn, ci);
            break;
          case 5:
            Ts(r, kn, ci);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return Tn(r, wt()), r.callbackNode === u ? hv.bind(null, r) : null;
  }
  function Yf(r, s) {
    var u = Da;
    return (
      r.current.memoizedState.isDehydrated && (ks(r, s).flags |= 256),
      (r = Uu(r, s)),
      r !== 2 && ((s = kn), (kn = u), s !== null && Xf(s)),
      r
    );
  }
  function Xf(r) {
    kn === null ? (kn = r) : kn.push.apply(kn, r);
  }
  function TC(r) {
    for (var s = r; ; ) {
      if (s.flags & 16384) {
        var u = s.updateQueue;
        if (u !== null && ((u = u.stores), u !== null))
          for (var d = 0; d < u.length; d++) {
            var m = u[d],
              v = m.getSnapshot;
            m = m.value;
            try {
              if (!ur(v(), m)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((u = s.child), s.subtreeFlags & 16384 && u !== null))
        (u.return = s), (s = u);
      else {
        if (s === r) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === r) return !0;
          s = s.return;
        }
        (s.sibling.return = s.return), (s = s.sibling);
      }
    }
    return !0;
  }
  function Hi(r, s) {
    for (
      s &= ~Zf,
        s &= ~Mu,
        r.suspendedLanes |= s,
        r.pingedLanes &= ~s,
        r = r.expirationTimes;
      0 < s;

    ) {
      var u = 31 - lr(s),
        d = 1 << u;
      (r[u] = -1), (s &= ~d);
    }
  }
  function pv(r) {
    if (ut & 6) throw Error(n(327));
    _o();
    var s = Yl(r, 0);
    if (!(s & 1)) return Tn(r, wt()), null;
    var u = Uu(r, s);
    if (r.tag !== 0 && u === 2) {
      var d = Pd(r);
      d !== 0 && ((s = d), (u = Yf(r, d)));
    }
    if (u === 1) throw ((u = ja), ks(r, 0), Hi(r, s), Tn(r, wt()), u);
    if (u === 6) throw Error(n(345));
    return (
      (r.finishedWork = r.current.alternate),
      (r.finishedLanes = s),
      Ts(r, kn, ci),
      Tn(r, wt()),
      null
    );
  }
  function Qf(r, s) {
    var u = ut;
    ut |= 1;
    try {
      return r(s);
    } finally {
      (ut = u), ut === 0 && ((Eo = wt() + 500), mu && Ii());
    }
  }
  function Cs(r) {
    $i !== null && $i.tag === 0 && !(ut & 6) && _o();
    var s = ut;
    ut |= 1;
    var u = Jn.transition,
      d = gt;
    try {
      if (((Jn.transition = null), (gt = 1), r)) return r();
    } finally {
      (gt = d), (Jn.transition = u), (ut = s), !(ut & 6) && Ii();
    }
  }
  function Jf() {
    (In = bo.current), _t(bo);
  }
  function ks(r, s) {
    (r.finishedWork = null), (r.finishedLanes = 0);
    var u = r.timeoutHandle;
    if ((u !== -1 && ((r.timeoutHandle = -1), rC(u)), $t !== null))
      for (u = $t.return; u !== null; ) {
        var d = u;
        switch ((lf(d), d.tag)) {
          case 1:
            (d = d.type.childContextTypes), d != null && hu();
            break;
          case 3:
            xo(), _t(En), _t(ln), Sf();
            break;
          case 5:
            xf(d);
            break;
          case 4:
            xo();
            break;
          case 13:
            _t(At);
            break;
          case 19:
            _t(At);
            break;
          case 10:
            pf(d.type._context);
            break;
          case 22:
          case 23:
            Jf();
        }
        u = u.return;
      }
    if (
      ((Jt = r),
      ($t = r = Zi(r.current, null)),
      (nn = In = s),
      (qt = 0),
      (ja = null),
      (Zf = Mu = _s = 0),
      (kn = Da = null),
      Ss !== null)
    ) {
      for (s = 0; s < Ss.length; s++)
        if (((u = Ss[s]), (d = u.interleaved), d !== null)) {
          u.interleaved = null;
          var m = d.next,
            v = u.pending;
          if (v !== null) {
            var k = v.next;
            (v.next = m), (d.next = k);
          }
          u.pending = d;
        }
      Ss = null;
    }
    return r;
  }
  function mv(r, s) {
    do {
      var u = $t;
      try {
        if ((hf(), (Cu.current = Ru), ku)) {
          for (var d = Nt.memoizedState; d !== null; ) {
            var m = d.queue;
            m !== null && (m.pending = null), (d = d.next);
          }
          ku = !1;
        }
        if (
          ((Es = 0),
          (Qt = Gt = Nt = null),
          (ka = !1),
          (Ta = 0),
          (Hf.current = null),
          u === null || u.return === null)
        ) {
          (qt = 1), (ja = s), ($t = null);
          break;
        }
        e: {
          var v = r,
            k = u.return,
            A = u,
            D = s;
          if (
            ((s = nn),
            (A.flags |= 32768),
            D !== null && typeof D == "object" && typeof D.then == "function")
          ) {
            var W = D,
              re = A,
              se = re.tag;
            if (!(re.mode & 1) && (se === 0 || se === 11 || se === 15)) {
              var te = re.alternate;
              te
                ? ((re.updateQueue = te.updateQueue),
                  (re.memoizedState = te.memoizedState),
                  (re.lanes = te.lanes))
                : ((re.updateQueue = null), (re.memoizedState = null));
            }
            var we = By(k);
            if (we !== null) {
              (we.flags &= -257),
                zy(we, k, A, v, s),
                we.mode & 1 && Vy(v, W, s),
                (s = we),
                (D = W);
              var ke = s.updateQueue;
              if (ke === null) {
                var Ae = new Set();
                Ae.add(D), (s.updateQueue = Ae);
              } else ke.add(D);
              break e;
            } else {
              if (!(s & 1)) {
                Vy(v, W, s), eh();
                break e;
              }
              D = Error(n(426));
            }
          } else if (Tt && A.mode & 1) {
            var It = By(k);
            if (It !== null) {
              !(It.flags & 65536) && (It.flags |= 256),
                zy(It, k, A, v, s),
                df(wo(D, A));
              break e;
            }
          }
          (v = D = wo(D, A)),
            qt !== 4 && (qt = 2),
            Da === null ? (Da = [v]) : Da.push(v),
            (v = k);
          do {
            switch (v.tag) {
              case 3:
                (v.flags |= 65536), (s &= -s), (v.lanes |= s);
                var U = Fy(v, D, s);
                cy(v, U);
                break e;
              case 1:
                A = D;
                var I = v.type,
                  $ = v.stateNode;
                if (
                  !(v.flags & 128) &&
                  (typeof I.getDerivedStateFromError == "function" ||
                    ($ !== null &&
                      typeof $.componentDidCatch == "function" &&
                      (Ui === null || !Ui.has($))))
                ) {
                  (v.flags |= 65536), (s &= -s), (v.lanes |= s);
                  var fe = Iy(v, A, s);
                  cy(v, fe);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        vv(u);
      } catch (Oe) {
        (s = Oe), $t === u && u !== null && ($t = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gv() {
    var r = Lu.current;
    return (Lu.current = Ru), r === null ? Ru : r;
  }
  function eh() {
    (qt === 0 || qt === 3 || qt === 2) && (qt = 4),
      Jt === null || (!(_s & 268435455) && !(Mu & 268435455)) || Hi(Jt, nn);
  }
  function Uu(r, s) {
    var u = ut;
    ut |= 2;
    var d = gv();
    (Jt !== r || nn !== s) && ((ci = null), ks(r, s));
    do
      try {
        PC();
        break;
      } catch (m) {
        mv(r, m);
      }
    while (!0);
    if ((hf(), (ut = u), (Lu.current = d), $t !== null)) throw Error(n(261));
    return (Jt = null), (nn = 0), qt;
  }
  function PC() {
    for (; $t !== null; ) yv($t);
  }
  function RC() {
    for (; $t !== null && !ms(); ) yv($t);
  }
  function yv(r) {
    var s = Sv(r.alternate, r, In);
    (r.memoizedProps = r.pendingProps),
      s === null ? vv(r) : ($t = s),
      (Hf.current = null);
  }
  function vv(r) {
    var s = r;
    do {
      var u = s.alternate;
      if (((r = s.return), s.flags & 32768)) {
        if (((u = bC(u, s)), u !== null)) {
          (u.flags &= 32767), ($t = u);
          return;
        }
        if (r !== null)
          (r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null);
        else {
          (qt = 6), ($t = null);
          return;
        }
      } else if (((u = SC(u, s, In)), u !== null)) {
        $t = u;
        return;
      }
      if (((s = s.sibling), s !== null)) {
        $t = s;
        return;
      }
      $t = s = r;
    } while (s !== null);
    qt === 0 && (qt = 5);
  }
  function Ts(r, s, u) {
    var d = gt,
      m = Jn.transition;
    try {
      (Jn.transition = null), (gt = 1), AC(r, s, u, d);
    } finally {
      (Jn.transition = m), (gt = d);
    }
    return null;
  }
  function AC(r, s, u, d) {
    do _o();
    while ($i !== null);
    if (ut & 6) throw Error(n(327));
    u = r.finishedWork;
    var m = r.finishedLanes;
    if (u === null) return null;
    if (((r.finishedWork = null), (r.finishedLanes = 0), u === r.current))
      throw Error(n(177));
    (r.callbackNode = null), (r.callbackPriority = 0);
    var v = u.lanes | u.childLanes;
    if (
      (c_(r, v),
      r === Jt && (($t = Jt = null), (nn = 0)),
      (!(u.subtreeFlags & 2064) && !(u.flags & 2064)) ||
        Iu ||
        ((Iu = !0),
        bv(ni, function () {
          return _o(), null;
        })),
      (v = (u.flags & 15990) !== 0),
      u.subtreeFlags & 15990 || v)
    ) {
      (v = Jn.transition), (Jn.transition = null);
      var k = gt;
      gt = 1;
      var A = ut;
      (ut |= 4),
        (Hf.current = null),
        _C(r, u),
        lv(u, r),
        Y_(Jd),
        (Jl = !!Qd),
        (Jd = Qd = null),
        (r.current = u),
        CC(u),
        ti(),
        (ut = A),
        (gt = k),
        (Jn.transition = v);
    } else r.current = u;
    if (
      (Iu && ((Iu = !1), ($i = r), (Vu = m)),
      (v = r.pendingLanes),
      v === 0 && (Ui = null),
      Td(u.stateNode),
      Tn(r, wt()),
      s !== null)
    )
      for (d = r.onRecoverableError, u = 0; u < s.length; u++)
        (m = s[u]), d(m.value, { componentStack: m.stack, digest: m.digest });
    if (Fu) throw ((Fu = !1), (r = Gf), (Gf = null), r);
    return (
      Vu & 1 && r.tag !== 0 && _o(),
      (v = r.pendingLanes),
      v & 1 ? (r === qf ? Oa++ : ((Oa = 0), (qf = r))) : (Oa = 0),
      Ii(),
      null
    );
  }
  function _o() {
    if ($i !== null) {
      var r = og(Vu),
        s = Jn.transition,
        u = gt;
      try {
        if (((Jn.transition = null), (gt = 16 > r ? 16 : r), $i === null))
          var d = !1;
        else {
          if (((r = $i), ($i = null), (Vu = 0), ut & 6)) throw Error(n(331));
          var m = ut;
          for (ut |= 4, Ce = r.current; Ce !== null; ) {
            var v = Ce,
              k = v.child;
            if (Ce.flags & 16) {
              var A = v.deletions;
              if (A !== null) {
                for (var D = 0; D < A.length; D++) {
                  var W = A[D];
                  for (Ce = W; Ce !== null; ) {
                    var re = Ce;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Na(8, re, v);
                    }
                    var se = re.child;
                    if (se !== null) (se.return = re), (Ce = se);
                    else
                      for (; Ce !== null; ) {
                        re = Ce;
                        var te = re.sibling,
                          we = re.return;
                        if ((rv(re), re === W)) {
                          Ce = null;
                          break;
                        }
                        if (te !== null) {
                          (te.return = we), (Ce = te);
                          break;
                        }
                        Ce = we;
                      }
                  }
                }
                var ke = v.alternate;
                if (ke !== null) {
                  var Ae = ke.child;
                  if (Ae !== null) {
                    ke.child = null;
                    do {
                      var It = Ae.sibling;
                      (Ae.sibling = null), (Ae = It);
                    } while (Ae !== null);
                  }
                }
                Ce = v;
              }
            }
            if (v.subtreeFlags & 2064 && k !== null) (k.return = v), (Ce = k);
            else
              e: for (; Ce !== null; ) {
                if (((v = Ce), v.flags & 2048))
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Na(9, v, v.return);
                  }
                var U = v.sibling;
                if (U !== null) {
                  (U.return = v.return), (Ce = U);
                  break e;
                }
                Ce = v.return;
              }
          }
          var I = r.current;
          for (Ce = I; Ce !== null; ) {
            k = Ce;
            var $ = k.child;
            if (k.subtreeFlags & 2064 && $ !== null) ($.return = k), (Ce = $);
            else
              e: for (k = I; Ce !== null; ) {
                if (((A = Ce), A.flags & 2048))
                  try {
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ou(9, A);
                    }
                  } catch (Oe) {
                    Mt(A, A.return, Oe);
                  }
                if (A === k) {
                  Ce = null;
                  break e;
                }
                var fe = A.sibling;
                if (fe !== null) {
                  (fe.return = A.return), (Ce = fe);
                  break e;
                }
                Ce = A.return;
              }
          }
          if (
            ((ut = m),
            Ii(),
            On && typeof On.onPostCommitFiberRoot == "function")
          )
            try {
              On.onPostCommitFiberRoot(ar, r);
            } catch {}
          d = !0;
        }
        return d;
      } finally {
        (gt = u), (Jn.transition = s);
      }
    }
    return !1;
  }
  function xv(r, s, u) {
    (s = wo(u, s)),
      (s = Fy(r, s, 1)),
      (r = Bi(r, s, 1)),
      (s = yn()),
      r !== null && (ia(r, 1, s), Tn(r, s));
  }
  function Mt(r, s, u) {
    if (r.tag === 3) xv(r, r, u);
    else
      for (; s !== null; ) {
        if (s.tag === 3) {
          xv(s, r, u);
          break;
        } else if (s.tag === 1) {
          var d = s.stateNode;
          if (
            typeof s.type.getDerivedStateFromError == "function" ||
            (typeof d.componentDidCatch == "function" &&
              (Ui === null || !Ui.has(d)))
          ) {
            (r = wo(u, r)),
              (r = Iy(s, r, 1)),
              (s = Bi(s, r, 1)),
              (r = yn()),
              s !== null && (ia(s, 1, r), Tn(s, r));
            break;
          }
        }
        s = s.return;
      }
  }
  function NC(r, s, u) {
    var d = r.pingCache;
    d !== null && d.delete(s),
      (s = yn()),
      (r.pingedLanes |= r.suspendedLanes & u),
      Jt === r &&
        (nn & u) === u &&
        (qt === 4 || (qt === 3 && (nn & 130023424) === nn && 500 > wt() - Kf)
          ? ks(r, 0)
          : (Zf |= u)),
      Tn(r, s);
  }
  function wv(r, s) {
    s === 0 &&
      (r.mode & 1
        ? ((s = ql), (ql <<= 1), !(ql & 130023424) && (ql = 4194304))
        : (s = 1));
    var u = yn();
    (r = ai(r, s)), r !== null && (ia(r, s, u), Tn(r, u));
  }
  function jC(r) {
    var s = r.memoizedState,
      u = 0;
    s !== null && (u = s.retryLane), wv(r, u);
  }
  function DC(r, s) {
    var u = 0;
    switch (r.tag) {
      case 13:
        var d = r.stateNode,
          m = r.memoizedState;
        m !== null && (u = m.retryLane);
        break;
      case 19:
        d = r.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    d !== null && d.delete(s), wv(r, u);
  }
  var Sv;
  Sv = function (r, s, u) {
    if (r !== null)
      if (r.memoizedProps !== s.pendingProps || En.current) Cn = !0;
      else {
        if (!(r.lanes & u) && !(s.flags & 128)) return (Cn = !1), wC(r, s, u);
        Cn = !!(r.flags & 131072);
      }
    else (Cn = !1), Tt && s.flags & 1048576 && ey(s, yu, s.index);
    switch (((s.lanes = 0), s.tag)) {
      case 2:
        var d = s.type;
        ju(r, s), (r = s.pendingProps);
        var m = fo(s, ln.current);
        vo(s, u), (m = _f(null, s, d, r, m, u));
        var v = Cf();
        return (
          (s.flags |= 1),
          typeof m == "object" &&
          m !== null &&
          typeof m.render == "function" &&
          m.$$typeof === void 0
            ? ((s.tag = 1),
              (s.memoizedState = null),
              (s.updateQueue = null),
              _n(d) ? ((v = !0), pu(s)) : (v = !1),
              (s.memoizedState =
                m.state !== null && m.state !== void 0 ? m.state : null),
              yf(s),
              (m.updater = Au),
              (s.stateNode = m),
              (m._reactInternals = s),
              Nf(s, d, r, u),
              (s = Lf(null, s, d, !0, v, u)))
            : ((s.tag = 0), Tt && v && af(s), gn(null, s, m, u), (s = s.child)),
          s
        );
      case 16:
        d = s.elementType;
        e: {
          switch (
            (ju(r, s),
            (r = s.pendingProps),
            (m = d._init),
            (d = m(d._payload)),
            (s.type = d),
            (m = s.tag = LC(d)),
            (r = dr(d, r)),
            m)
          ) {
            case 0:
              s = Of(null, s, d, r, u);
              break e;
            case 1:
              s = Ky(null, s, d, r, u);
              break e;
            case 11:
              s = Uy(null, s, d, r, u);
              break e;
            case 14:
              s = $y(null, s, d, dr(d.type, r), u);
              break e;
          }
          throw Error(n(306, d, ""));
        }
        return s;
      case 0:
        return (
          (d = s.type),
          (m = s.pendingProps),
          (m = s.elementType === d ? m : dr(d, m)),
          Of(r, s, d, m, u)
        );
      case 1:
        return (
          (d = s.type),
          (m = s.pendingProps),
          (m = s.elementType === d ? m : dr(d, m)),
          Ky(r, s, d, m, u)
        );
      case 3:
        e: {
          if ((Gy(s), r === null)) throw Error(n(387));
          (d = s.pendingProps),
            (v = s.memoizedState),
            (m = v.element),
            uy(r, s),
            Eu(s, d, null, u);
          var k = s.memoizedState;
          if (((d = k.element), v.isDehydrated))
            if (
              ((v = {
                element: d,
                isDehydrated: !1,
                cache: k.cache,
                pendingSuspenseBoundaries: k.pendingSuspenseBoundaries,
                transitions: k.transitions,
              }),
              (s.updateQueue.baseState = v),
              (s.memoizedState = v),
              s.flags & 256)
            ) {
              (m = wo(Error(n(423)), s)), (s = qy(r, s, d, u, m));
              break e;
            } else if (d !== m) {
              (m = wo(Error(n(424)), s)), (s = qy(r, s, d, u, m));
              break e;
            } else
              for (
                Fn = Li(s.stateNode.containerInfo.firstChild),
                  Mn = s,
                  Tt = !0,
                  cr = null,
                  u = ay(s, null, d, u),
                  s.child = u;
                u;

              )
                (u.flags = (u.flags & -3) | 4096), (u = u.sibling);
          else {
            if ((mo(), d === m)) {
              s = ui(r, s, u);
              break e;
            }
            gn(r, s, d, u);
          }
          s = s.child;
        }
        return s;
      case 5:
        return (
          fy(s),
          r === null && cf(s),
          (d = s.type),
          (m = s.pendingProps),
          (v = r !== null ? r.memoizedProps : null),
          (k = m.children),
          ef(d, m) ? (k = null) : v !== null && ef(d, v) && (s.flags |= 32),
          Zy(r, s),
          gn(r, s, k, u),
          s.child
        );
      case 6:
        return r === null && cf(s), null;
      case 13:
        return Yy(r, s, u);
      case 4:
        return (
          vf(s, s.stateNode.containerInfo),
          (d = s.pendingProps),
          r === null ? (s.child = go(s, null, d, u)) : gn(r, s, d, u),
          s.child
        );
      case 11:
        return (
          (d = s.type),
          (m = s.pendingProps),
          (m = s.elementType === d ? m : dr(d, m)),
          Uy(r, s, d, m, u)
        );
      case 7:
        return gn(r, s, s.pendingProps, u), s.child;
      case 8:
        return gn(r, s, s.pendingProps.children, u), s.child;
      case 12:
        return gn(r, s, s.pendingProps.children, u), s.child;
      case 10:
        e: {
          if (
            ((d = s.type._context),
            (m = s.pendingProps),
            (v = s.memoizedProps),
            (k = m.value),
            St(wu, d._currentValue),
            (d._currentValue = k),
            v !== null)
          )
            if (ur(v.value, k)) {
              if (v.children === m.children && !En.current) {
                s = ui(r, s, u);
                break e;
              }
            } else
              for (v = s.child, v !== null && (v.return = s); v !== null; ) {
                var A = v.dependencies;
                if (A !== null) {
                  k = v.child;
                  for (var D = A.firstContext; D !== null; ) {
                    if (D.context === d) {
                      if (v.tag === 1) {
                        (D = li(-1, u & -u)), (D.tag = 2);
                        var W = v.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var re = W.pending;
                          re === null
                            ? (D.next = D)
                            : ((D.next = re.next), (re.next = D)),
                            (W.pending = D);
                        }
                      }
                      (v.lanes |= u),
                        (D = v.alternate),
                        D !== null && (D.lanes |= u),
                        mf(v.return, u, s),
                        (A.lanes |= u);
                      break;
                    }
                    D = D.next;
                  }
                } else if (v.tag === 10) k = v.type === s.type ? null : v.child;
                else if (v.tag === 18) {
                  if (((k = v.return), k === null)) throw Error(n(341));
                  (k.lanes |= u),
                    (A = k.alternate),
                    A !== null && (A.lanes |= u),
                    mf(k, u, s),
                    (k = v.sibling);
                } else k = v.child;
                if (k !== null) k.return = v;
                else
                  for (k = v; k !== null; ) {
                    if (k === s) {
                      k = null;
                      break;
                    }
                    if (((v = k.sibling), v !== null)) {
                      (v.return = k.return), (k = v);
                      break;
                    }
                    k = k.return;
                  }
                v = k;
              }
          gn(r, s, m.children, u), (s = s.child);
        }
        return s;
      case 9:
        return (
          (m = s.type),
          (d = s.pendingProps.children),
          vo(s, u),
          (m = Xn(m)),
          (d = d(m)),
          (s.flags |= 1),
          gn(r, s, d, u),
          s.child
        );
      case 14:
        return (
          (d = s.type),
          (m = dr(d, s.pendingProps)),
          (m = dr(d.type, m)),
          $y(r, s, d, m, u)
        );
      case 15:
        return Wy(r, s, s.type, s.pendingProps, u);
      case 17:
        return (
          (d = s.type),
          (m = s.pendingProps),
          (m = s.elementType === d ? m : dr(d, m)),
          ju(r, s),
          (s.tag = 1),
          _n(d) ? ((r = !0), pu(s)) : (r = !1),
          vo(s, u),
          Ly(s, d, m),
          Nf(s, d, m, u),
          Lf(null, s, d, !0, r, u)
        );
      case 19:
        return Qy(r, s, u);
      case 22:
        return Hy(r, s, u);
    }
    throw Error(n(156, s.tag));
  };
  function bv(r, s) {
    return Dn(r, s);
  }
  function OC(r, s, u, d) {
    (this.tag = r),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = s),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = d),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function er(r, s, u, d) {
    return new OC(r, s, u, d);
  }
  function th(r) {
    return (r = r.prototype), !(!r || !r.isReactComponent);
  }
  function LC(r) {
    if (typeof r == "function") return th(r) ? 1 : 0;
    if (r != null) {
      if (((r = r.$$typeof), r === X)) return 11;
      if (r === pe) return 14;
    }
    return 2;
  }
  function Zi(r, s) {
    var u = r.alternate;
    return (
      u === null
        ? ((u = er(r.tag, s, r.key, r.mode)),
          (u.elementType = r.elementType),
          (u.type = r.type),
          (u.stateNode = r.stateNode),
          (u.alternate = r),
          (r.alternate = u))
        : ((u.pendingProps = s),
          (u.type = r.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = r.flags & 14680064),
      (u.childLanes = r.childLanes),
      (u.lanes = r.lanes),
      (u.child = r.child),
      (u.memoizedProps = r.memoizedProps),
      (u.memoizedState = r.memoizedState),
      (u.updateQueue = r.updateQueue),
      (s = r.dependencies),
      (u.dependencies =
        s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }),
      (u.sibling = r.sibling),
      (u.index = r.index),
      (u.ref = r.ref),
      u
    );
  }
  function $u(r, s, u, d, m, v) {
    var k = 2;
    if (((d = r), typeof r == "function")) th(r) && (k = 1);
    else if (typeof r == "string") k = 5;
    else
      e: switch (r) {
        case V:
          return Ps(u.children, m, v, s);
        case F:
          (k = 8), (m |= 8);
          break;
        case Y:
          return (
            (r = er(12, u, s, m | 2)), (r.elementType = Y), (r.lanes = v), r
          );
        case ie:
          return (r = er(13, u, s, m)), (r.elementType = ie), (r.lanes = v), r;
        case he:
          return (r = er(19, u, s, m)), (r.elementType = he), (r.lanes = v), r;
        case le:
          return Wu(u, m, v, s);
        default:
          if (typeof r == "object" && r !== null)
            switch (r.$$typeof) {
              case Q:
                k = 10;
                break e;
              case ce:
                k = 9;
                break e;
              case X:
                k = 11;
                break e;
              case pe:
                k = 14;
                break e;
              case me:
                (k = 16), (d = null);
                break e;
            }
          throw Error(n(130, r == null ? r : typeof r, ""));
      }
    return (
      (s = er(k, u, s, m)), (s.elementType = r), (s.type = d), (s.lanes = v), s
    );
  }
  function Ps(r, s, u, d) {
    return (r = er(7, r, d, s)), (r.lanes = u), r;
  }
  function Wu(r, s, u, d) {
    return (
      (r = er(22, r, d, s)),
      (r.elementType = le),
      (r.lanes = u),
      (r.stateNode = { isHidden: !1 }),
      r
    );
  }
  function nh(r, s, u) {
    return (r = er(6, r, null, s)), (r.lanes = u), r;
  }
  function rh(r, s, u) {
    return (
      (s = er(4, r.children !== null ? r.children : [], r.key, s)),
      (s.lanes = u),
      (s.stateNode = {
        containerInfo: r.containerInfo,
        pendingChildren: null,
        implementation: r.implementation,
      }),
      s
    );
  }
  function MC(r, s, u, d, m) {
    (this.tag = s),
      (this.containerInfo = r),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Rd(0)),
      (this.expirationTimes = Rd(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Rd(0)),
      (this.identifierPrefix = d),
      (this.onRecoverableError = m),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ih(r, s, u, d, m, v, k, A, D) {
    return (
      (r = new MC(r, s, u, A, D)),
      s === 1 ? ((s = 1), v === !0 && (s |= 8)) : (s = 0),
      (v = er(3, null, null, s)),
      (r.current = v),
      (v.stateNode = r),
      (v.memoizedState = {
        element: d,
        isDehydrated: u,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      yf(v),
      r
    );
  }
  function FC(r, s, u) {
    var d =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: d == null ? null : "" + d,
      children: r,
      containerInfo: s,
      implementation: u,
    };
  }
  function Ev(r) {
    if (!r) return Fi;
    r = r._reactInternals;
    e: {
      if (ht(r) !== r || r.tag !== 1) throw Error(n(170));
      var s = r;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (_n(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(n(171));
    }
    if (r.tag === 1) {
      var u = r.type;
      if (_n(u)) return Xg(r, u, s);
    }
    return s;
  }
  function _v(r, s, u, d, m, v, k, A, D) {
    return (
      (r = ih(u, d, !0, r, m, v, k, A, D)),
      (r.context = Ev(null)),
      (u = r.current),
      (d = yn()),
      (m = Wi(u)),
      (v = li(d, m)),
      (v.callback = s ?? null),
      Bi(u, v, m),
      (r.current.lanes = m),
      ia(r, m, d),
      Tn(r, d),
      r
    );
  }
  function Hu(r, s, u, d) {
    var m = s.current,
      v = yn(),
      k = Wi(m);
    return (
      (u = Ev(u)),
      s.context === null ? (s.context = u) : (s.pendingContext = u),
      (s = li(v, k)),
      (s.payload = { element: r }),
      (d = d === void 0 ? null : d),
      d !== null && (s.callback = d),
      (r = Bi(m, s, k)),
      r !== null && (pr(r, m, k, v), bu(r, m, k)),
      k
    );
  }
  function Zu(r) {
    if (((r = r.current), !r.child)) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function Cv(r, s) {
    if (((r = r.memoizedState), r !== null && r.dehydrated !== null)) {
      var u = r.retryLane;
      r.retryLane = u !== 0 && u < s ? u : s;
    }
  }
  function sh(r, s) {
    Cv(r, s), (r = r.alternate) && Cv(r, s);
  }
  var kv =
    typeof reportError == "function"
      ? reportError
      : function (r) {
          console.error(r);
        };
  function oh(r) {
    this._internalRoot = r;
  }
  (Ku.prototype.render = oh.prototype.render =
    function (r) {
      var s = this._internalRoot;
      if (s === null) throw Error(n(409));
      Hu(r, s, null, null);
    }),
    (Ku.prototype.unmount = oh.prototype.unmount =
      function () {
        var r = this._internalRoot;
        if (r !== null) {
          this._internalRoot = null;
          var s = r.containerInfo;
          Cs(function () {
            Hu(null, r, null, null);
          }),
            (s[ri] = null);
        }
      });
  function Ku(r) {
    this._internalRoot = r;
  }
  Ku.prototype.unstable_scheduleHydration = function (r) {
    if (r) {
      var s = ug();
      r = { blockedOn: null, target: r, priority: s };
      for (var u = 0; u < ji.length && s !== 0 && s < ji[u].priority; u++);
      ji.splice(u, 0, r), u === 0 && fg(r);
    }
  };
  function ah(r) {
    return !(!r || (r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11));
  }
  function Gu(r) {
    return !(
      !r ||
      (r.nodeType !== 1 &&
        r.nodeType !== 9 &&
        r.nodeType !== 11 &&
        (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Tv() {}
  function IC(r, s, u, d, m) {
    if (m) {
      if (typeof d == "function") {
        var v = d;
        d = function () {
          var W = Zu(k);
          v.call(W);
        };
      }
      var k = _v(s, d, r, 0, null, !1, !1, "", Tv);
      return (
        (r._reactRootContainer = k),
        (r[ri] = k.current),
        va(r.nodeType === 8 ? r.parentNode : r),
        Cs(),
        k
      );
    }
    for (; (m = r.lastChild); ) r.removeChild(m);
    if (typeof d == "function") {
      var A = d;
      d = function () {
        var W = Zu(D);
        A.call(W);
      };
    }
    var D = ih(r, 0, !1, null, null, !1, !1, "", Tv);
    return (
      (r._reactRootContainer = D),
      (r[ri] = D.current),
      va(r.nodeType === 8 ? r.parentNode : r),
      Cs(function () {
        Hu(s, D, u, d);
      }),
      D
    );
  }
  function qu(r, s, u, d, m) {
    var v = u._reactRootContainer;
    if (v) {
      var k = v;
      if (typeof m == "function") {
        var A = m;
        m = function () {
          var D = Zu(k);
          A.call(D);
        };
      }
      Hu(s, k, r, m);
    } else k = IC(u, s, r, m, d);
    return Zu(k);
  }
  (ag = function (r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var u = ra(s.pendingLanes);
          u !== 0 &&
            (Ad(s, u | 1), Tn(s, wt()), !(ut & 6) && ((Eo = wt() + 500), Ii()));
        }
        break;
      case 13:
        Cs(function () {
          var d = ai(r, 1);
          if (d !== null) {
            var m = yn();
            pr(d, r, 1, m);
          }
        }),
          sh(r, 1);
    }
  }),
    (Nd = function (r) {
      if (r.tag === 13) {
        var s = ai(r, 134217728);
        if (s !== null) {
          var u = yn();
          pr(s, r, 134217728, u);
        }
        sh(r, 134217728);
      }
    }),
    (lg = function (r) {
      if (r.tag === 13) {
        var s = Wi(r),
          u = ai(r, s);
        if (u !== null) {
          var d = yn();
          pr(u, r, s, d);
        }
        sh(r, s);
      }
    }),
    (ug = function () {
      return gt;
    }),
    (cg = function (r, s) {
      var u = gt;
      try {
        return (gt = r), s();
      } finally {
        gt = u;
      }
    }),
    (ki = function (r, s, u) {
      switch (s) {
        case "input":
          if ((Xt(r, u), (s = u.name), u.type === "radio" && s != null)) {
            for (u = r; u.parentNode; ) u = u.parentNode;
            for (
              u = u.querySelectorAll(
                "input[name=" + JSON.stringify("" + s) + '][type="radio"]'
              ),
                s = 0;
              s < u.length;
              s++
            ) {
              var d = u[s];
              if (d !== r && d.form === r.form) {
                var m = fu(d);
                if (!m) throw Error(n(90));
                _e(d), Xt(d, m);
              }
            }
          }
          break;
        case "textarea":
          je(r, u);
          break;
        case "select":
          (s = u.value), s != null && ue(r, !!u.multiple, s, !1);
      }
    }),
    (Js = Qf),
    (L = Cs);
  var VC = { usingClientEntryPoint: !1, Events: [Sa, uo, fu, ei, ps, Qf] },
    La = {
      findFiberByHostInstance: ys,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    BC = {
      bundleType: La.bundleType,
      version: La.version,
      rendererPackageName: La.rendererPackageName,
      rendererConfig: La.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: j.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (r) {
        return (r = Pi(r)), r === null ? null : r.stateNode;
      },
      findFiberByHostInstance: La.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yu.isDisabled && Yu.supportsFiber)
      try {
        (ar = Yu.inject(BC)), (On = Yu);
      } catch {}
  }
  return (
    (Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VC),
    (Pn.createPortal = function (r, s) {
      var u =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ah(s)) throw Error(n(200));
      return FC(r, s, null, u);
    }),
    (Pn.createRoot = function (r, s) {
      if (!ah(r)) throw Error(n(299));
      var u = !1,
        d = "",
        m = kv;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (d = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (m = s.onRecoverableError)),
        (s = ih(r, 1, !1, null, null, u, !1, d, m)),
        (r[ri] = s.current),
        va(r.nodeType === 8 ? r.parentNode : r),
        new oh(s)
      );
    }),
    (Pn.findDOMNode = function (r) {
      if (r == null) return null;
      if (r.nodeType === 1) return r;
      var s = r._reactInternals;
      if (s === void 0)
        throw typeof r.render == "function"
          ? Error(n(188))
          : ((r = Object.keys(r).join(",")), Error(n(268, r)));
      return (r = Pi(s)), (r = r === null ? null : r.stateNode), r;
    }),
    (Pn.flushSync = function (r) {
      return Cs(r);
    }),
    (Pn.hydrate = function (r, s, u) {
      if (!Gu(s)) throw Error(n(200));
      return qu(null, r, s, !0, u);
    }),
    (Pn.hydrateRoot = function (r, s, u) {
      if (!ah(r)) throw Error(n(405));
      var d = (u != null && u.hydratedSources) || null,
        m = !1,
        v = "",
        k = kv;
      if (
        (u != null &&
          (u.unstable_strictMode === !0 && (m = !0),
          u.identifierPrefix !== void 0 && (v = u.identifierPrefix),
          u.onRecoverableError !== void 0 && (k = u.onRecoverableError)),
        (s = _v(s, null, r, 1, u ?? null, m, !1, v, k)),
        (r[ri] = s.current),
        va(r),
        d)
      )
        for (r = 0; r < d.length; r++)
          (u = d[r]),
            (m = u._getVersion),
            (m = m(u._source)),
            s.mutableSourceEagerHydrationData == null
              ? (s.mutableSourceEagerHydrationData = [u, m])
              : s.mutableSourceEagerHydrationData.push(u, m);
      return new Ku(s);
    }),
    (Pn.render = function (r, s, u) {
      if (!Gu(s)) throw Error(n(200));
      return qu(null, r, s, !1, u);
    }),
    (Pn.unmountComponentAtNode = function (r) {
      if (!Gu(r)) throw Error(n(40));
      return r._reactRootContainer
        ? (Cs(function () {
            qu(null, null, r, !1, function () {
              (r._reactRootContainer = null), (r[ri] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Pn.unstable_batchedUpdates = Qf),
    (Pn.unstable_renderSubtreeIntoContainer = function (r, s, u, d) {
      if (!Gu(u)) throw Error(n(200));
      if (r == null || r._reactInternals === void 0) throw Error(n(38));
      return qu(r, s, u, !1, d);
    }),
    (Pn.version = "18.3.1-next-f1338f8080-20240426"),
    Pn
  );
}
var Lv;
function k0() {
  if (Lv) return ch.exports;
  Lv = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (ch.exports = qC()), ch.exports;
}
var Mv;
function YC() {
  if (Mv) return Qu;
  Mv = 1;
  var e = k0();
  return (Qu.createRoot = e.createRoot), (Qu.hydrateRoot = e.hydrateRoot), Qu;
}
var XC = YC(),
  Fa = {},
  Fv;
function QC() {
  if (Fv) return Fa;
  (Fv = 1),
    Object.defineProperty(Fa, "__esModule", { value: !0 }),
    (Fa.parse = l),
    (Fa.serialize = h);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    n =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    a = (() => {
      const y = function () {};
      return (y.prototype = Object.create(null)), y;
    })();
  function l(y, w) {
    const x = new a(),
      S = y.length;
    if (S < 2) return x;
    const E = (w == null ? void 0 : w.decode) || p;
    let b = 0;
    do {
      const P = y.indexOf("=", b);
      if (P === -1) break;
      const R = y.indexOf(";", b),
        j = R === -1 ? S : R;
      if (P > j) {
        b = y.lastIndexOf(";", P - 1) + 1;
        continue;
      }
      const T = c(y, b, P),
        M = f(y, P, T),
        V = y.slice(T, M);
      if (x[V] === void 0) {
        let F = c(y, P + 1, j),
          Y = f(y, j, F);
        const Q = E(y.slice(F, Y));
        x[V] = Q;
      }
      b = j + 1;
    } while (b < S);
    return x;
  }
  function c(y, w, x) {
    do {
      const S = y.charCodeAt(w);
      if (S !== 32 && S !== 9) return w;
    } while (++w < x);
    return x;
  }
  function f(y, w, x) {
    for (; w > x; ) {
      const S = y.charCodeAt(--w);
      if (S !== 32 && S !== 9) return w + 1;
    }
    return x;
  }
  function h(y, w, x) {
    const S = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!e.test(y)) throw new TypeError(`argument name is invalid: ${y}`);
    const E = S(w);
    if (!t.test(E)) throw new TypeError(`argument val is invalid: ${w}`);
    let b = y + "=" + E;
    if (!x) return b;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      b += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!n.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      b += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!i.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      b += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!g(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      b += "; Expires=" + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (b += "; HttpOnly"),
      x.secure && (b += "; Secure"),
      x.partitioned && (b += "; Partitioned"),
      x.priority)
    )
      switch (
        typeof x.priority == "string" ? x.priority.toLowerCase() : void 0
      ) {
        case "low":
          b += "; Priority=Low";
          break;
        case "medium":
          b += "; Priority=Medium";
          break;
        case "high":
          b += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (
        typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite
      ) {
        case !0:
        case "strict":
          b += "; SameSite=Strict";
          break;
        case "lax":
          b += "; SameSite=Lax";
          break;
        case "none":
          b += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return b;
  }
  function p(y) {
    if (y.indexOf("%") === -1) return y;
    try {
      return decodeURIComponent(y);
    } catch {
      return y;
    }
  }
  function g(y) {
    return o.call(y) === "[object Date]";
  }
  return Fa;
}
QC();
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Iv = "popstate";
function JC(e = {}) {
  function t(i, o) {
    let { pathname: a, search: l, hash: c } = i.location;
    return al(
      "",
      { pathname: a, search: l, hash: c },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(i, o) {
    return typeof o == "string" ? o : ts(o);
  }
  return tk(t, n, null, e);
}
function st(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ek() {
  return Math.random().toString(36).substring(2, 10);
}
function Vv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function al(e, t, n = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? ds(t) : t),
    state: n,
    key: (t && t.key) || i || ek(),
  };
}
function ts({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function ds(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let i = e.indexOf("?");
    i >= 0 && ((t.search = e.substring(i)), (e = e.substring(0, i))),
      e && (t.pathname = e);
  }
  return t;
}
function tk(e, t, n, i = {}) {
  let { window: o = document.defaultView, v5Compat: a = !1 } = i,
    l = o.history,
    c = "POP",
    f = null,
    h = p();
  h == null && ((h = 0), l.replaceState({ ...l.state, idx: h }, ""));
  function p() {
    return (l.state || { idx: null }).idx;
  }
  function g() {
    c = "POP";
    let E = p(),
      b = E == null ? null : E - h;
    (h = E), f && f({ action: c, location: S.location, delta: b });
  }
  function y(E, b) {
    c = "PUSH";
    let P = al(S.location, E, b);
    h = p() + 1;
    let R = Vv(P, h),
      j = S.createHref(P);
    try {
      l.pushState(R, "", j);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      o.location.assign(j);
    }
    a && f && f({ action: c, location: S.location, delta: 1 });
  }
  function w(E, b) {
    c = "REPLACE";
    let P = al(S.location, E, b);
    h = p();
    let R = Vv(P, h),
      j = S.createHref(P);
    l.replaceState(R, "", j),
      a && f && f({ action: c, location: S.location, delta: 0 });
  }
  function x(E) {
    let b = o.location.origin !== "null" ? o.location.origin : o.location.href,
      P = typeof E == "string" ? E : ts(E);
    return (
      (P = P.replace(/ $/, "%20")),
      st(
        b,
        `No window.location.(origin|href) available to create URL for href: ${P}`
      ),
      new URL(P, b)
    );
  }
  let S = {
    get action() {
      return c;
    },
    get location() {
      return e(o, l);
    },
    listen(E) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Iv, g),
        (f = E),
        () => {
          o.removeEventListener(Iv, g), (f = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: x,
    encodeLocation(E) {
      let b = x(E);
      return { pathname: b.pathname, search: b.search, hash: b.hash };
    },
    push: y,
    replace: w,
    go(E) {
      return l.go(E);
    },
  };
  return S;
}
var nk = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function rk(e) {
  return e.index === !0;
}
function kc(e, t, n = [], i = {}) {
  return e.map((o, a) => {
    let l = [...n, String(a)],
      c = typeof o.id == "string" ? o.id : l.join("-");
    if (
      (st(
        o.index !== !0 || !o.children,
        "Cannot specify children on an index route"
      ),
      st(
        !i[c],
        `Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`
      ),
      rk(o))
    ) {
      let f = { ...o, ...t(o), id: c };
      return (i[c] = f), f;
    } else {
      let f = { ...o, ...t(o), id: c, children: void 0 };
      return (
        (i[c] = f), o.children && (f.children = kc(o.children, t, l, i)), f
      );
    }
  });
}
function Ji(e, t, n = "/") {
  return fc(e, t, n, !1);
}
function fc(e, t, n, i) {
  let o = typeof t == "string" ? ds(t) : t,
    a = _r(o.pathname || "/", n);
  if (a == null) return null;
  let l = T0(e);
  sk(l);
  let c = null;
  for (let f = 0; c == null && f < l.length; ++f) {
    let h = gk(a);
    c = pk(l[f], h, i);
  }
  return c;
}
function ik(e, t) {
  let { route: n, pathname: i, params: o } = e;
  return { id: n.id, pathname: i, params: o, data: t[n.id], handle: n.handle };
}
function T0(e, t = [], n = [], i = "") {
  let o = (a, l, c) => {
    let f = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: l,
      route: a,
    };
    f.relativePath.startsWith("/") &&
      (st(
        f.relativePath.startsWith(i),
        `Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (f.relativePath = f.relativePath.slice(i.length)));
    let h = zr([i, f.relativePath]),
      p = n.concat(f);
    a.children &&
      a.children.length > 0 &&
      (st(
        a.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      T0(a.children, t, p, h)),
      !(a.path == null && !a.index) &&
        t.push({ path: h, score: fk(h, a.index), routesMeta: p });
  };
  return (
    e.forEach((a, l) => {
      var c;
      if (a.path === "" || !((c = a.path) != null && c.includes("?"))) o(a, l);
      else for (let f of P0(a.path)) o(a, l, f);
    }),
    t
  );
}
function P0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...i] = t,
    o = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (i.length === 0) return o ? [a, ""] : [a];
  let l = P0(i.join("/")),
    c = [];
  return (
    c.push(...l.map((f) => (f === "" ? a : [a, f].join("/")))),
    o && c.push(...l),
    c.map((f) => (e.startsWith("/") && f === "" ? "/" : f))
  );
}
function sk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : hk(
          t.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var ok = /^:[\w-]+$/,
  ak = 3,
  lk = 2,
  uk = 1,
  ck = 10,
  dk = -2,
  Bv = (e) => e === "*";
function fk(e, t) {
  let n = e.split("/"),
    i = n.length;
  return (
    n.some(Bv) && (i += dk),
    t && (i += lk),
    n
      .filter((o) => !Bv(o))
      .reduce((o, a) => o + (ok.test(a) ? ak : a === "" ? uk : ck), i)
  );
}
function hk(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, o) => i === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function pk(e, t, n = !1) {
  let { routesMeta: i } = e,
    o = {},
    a = "/",
    l = [];
  for (let c = 0; c < i.length; ++c) {
    let f = i[c],
      h = c === i.length - 1,
      p = a === "/" ? t : t.slice(a.length) || "/",
      g = Tc(
        { path: f.relativePath, caseSensitive: f.caseSensitive, end: h },
        p
      ),
      y = f.route;
    if (
      (!g &&
        h &&
        n &&
        !i[i.length - 1].route.index &&
        (g = Tc(
          { path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 },
          p
        )),
      !g)
    )
      return null;
    Object.assign(o, g.params),
      l.push({
        params: o,
        pathname: zr([a, g.pathname]),
        pathnameBase: xk(zr([a, g.pathnameBase])),
        route: y,
      }),
      g.pathnameBase !== "/" && (a = zr([a, g.pathnameBase]));
  }
  return l;
}
function Tc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, i] = mk(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let a = o[0],
    l = a.replace(/(.)\/+$/, "$1"),
    c = o.slice(1);
  return {
    params: i.reduce((h, { paramName: p, isOptional: g }, y) => {
      if (p === "*") {
        let x = c[y] || "";
        l = a.slice(0, a.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const w = c[y];
      return (
        g && !w ? (h[p] = void 0) : (h[p] = (w || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: a,
    pathnameBase: l,
    pattern: e,
  };
}
function mk(e, t = !1, n = !0) {
  sn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, c, f) => (
            i.push({ paramName: c, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), i]
  );
}
function gk(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      sn(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function _r(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(n);
  return i && i !== "/" ? null : e.slice(n) || "/";
}
function yk(e, t = "/") {
  let {
    pathname: n,
    search: i = "",
    hash: o = "",
  } = typeof e == "string" ? ds(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : vk(n, t)) : t,
    search: wk(i),
    hash: Sk(o),
  };
}
function vk(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function hh(e, t, n, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function R0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ip(e) {
  let t = R0(e);
  return t.map((n, i) => (i === t.length - 1 ? n.pathname : n.pathnameBase));
}
function Vp(e, t, n, i = !1) {
  let o;
  typeof e == "string"
    ? (o = ds(e))
    : ((o = { ...e }),
      st(
        !o.pathname || !o.pathname.includes("?"),
        hh("?", "pathname", "search", o)
      ),
      st(
        !o.pathname || !o.pathname.includes("#"),
        hh("#", "pathname", "hash", o)
      ),
      st(!o.search || !o.search.includes("#"), hh("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "",
    l = a ? "/" : o.pathname,
    c;
  if (l == null) c = n;
  else {
    let g = t.length - 1;
    if (!i && l.startsWith("..")) {
      let y = l.split("/");
      for (; y[0] === ".."; ) y.shift(), (g -= 1);
      o.pathname = y.join("/");
    }
    c = g >= 0 ? t[g] : "/";
  }
  let f = yk(o, c),
    h = l && l !== "/" && l.endsWith("/"),
    p = (a || l === ".") && n.endsWith("/");
  return !f.pathname.endsWith("/") && (h || p) && (f.pathname += "/"), f;
}
var zr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  xk = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wk = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sk = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Pc = class {
    constructor(e, t, n, i = !1) {
      (this.status = e),
        (this.statusText = t || ""),
        (this.internal = i),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n);
    }
  };
function td(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var A0 = ["POST", "PUT", "PATCH", "DELETE"],
  bk = new Set(A0),
  Ek = ["GET", ...A0],
  _k = new Set(Ek),
  Ck = new Set([301, 302, 303, 307, 308]),
  kk = new Set([307, 308]),
  ph = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Tk = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ia = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Bp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pk = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  N0 = "remix-router-transitions",
  j0 = Symbol("ResetLoaderData");
function Rk(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  st(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i = e.mapRouteProperties || Pk,
    o = {},
    a = kc(e.routes, i, void 0, o),
    l,
    c = e.basename || "/",
    f = e.dataStrategy || Ok,
    h = e.patchRoutesOnNavigation,
    p = { ...e.future },
    g = null,
    y = new Set(),
    w = null,
    x = null,
    S = null,
    E = e.hydrationData != null,
    b = Ji(a, e.history.location, c),
    P = null;
  if (b == null && !h) {
    let L = rr(404, { pathname: e.history.location.pathname }),
      { matches: B, route: K } = Xv(a);
    (b = B), (P = { [K.id]: L });
  }
  b &&
    !e.hydrationData &&
    jr(b, a, e.history.location.pathname).active &&
    (b = null);
  let R;
  if (b)
    if (b.some((L) => L.route.lazy)) R = !1;
    else if (!b.some((L) => L.route.loader)) R = !0;
    else {
      let L = e.hydrationData ? e.hydrationData.loaderData : null,
        B = e.hydrationData ? e.hydrationData.errors : null;
      if (B) {
        let K = b.findIndex((ne) => B[ne.route.id] !== void 0);
        R = b.slice(0, K + 1).every((ne) => !Yh(ne.route, L, B));
      } else R = b.every((K) => !Yh(K.route, L, B));
    }
  else {
    (R = !1), (b = []);
    let L = jr(null, a, e.history.location.pathname);
    L.active && L.matches && (b = L.matches);
  }
  let j,
    T = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: R,
      navigation: ph,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || P,
      fetchers: new Map(),
      blockers: new Map(),
    },
    M = "POP",
    V = !1,
    F,
    Y = !1,
    Q = new Map(),
    ce = null,
    X = !1,
    ie = !1,
    he = new Set(),
    pe = new Map(),
    me = 0,
    le = -1,
    H = new Map(),
    J = new Set(),
    ee = new Map(),
    O = new Map(),
    q = new Set(),
    Ne = new Map(),
    Me,
    Ie = null;
  function ze() {
    if (
      ((g = e.history.listen(({ action: L, location: B, delta: K }) => {
        if (Me) {
          Me(), (Me = void 0);
          return;
        }
        sn(
          Ne.size === 0 || K != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let ne = _i({
          currentLocation: T.location,
          nextLocation: B,
          historyAction: L,
        });
        if (ne && K != null) {
          let xe = new Promise((De) => {
            Me = De;
          });
          e.history.go(K * -1),
            Nr(ne, {
              state: "blocked",
              location: B,
              proceed() {
                Nr(ne, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: B,
                }),
                  xe.then(() => e.history.go(K));
              },
              reset() {
                let De = new Map(T.blockers);
                De.set(ne, Ia), Re({ blockers: De });
              },
            });
          return;
        }
        return We(L, B);
      })),
      n)
    ) {
      Hk(t, Q);
      let L = () => Zk(t, Q);
      t.addEventListener("pagehide", L),
        (ce = () => t.removeEventListener("pagehide", L));
    }
    return T.initialized || We("POP", T.location, { initialHydration: !0 }), j;
  }
  function be() {
    g && g(),
      ce && ce(),
      y.clear(),
      F && F.abort(),
      T.fetchers.forEach((L, B) => Ht(B)),
      T.blockers.forEach((L, B) => Qr(B));
  }
  function Te(L) {
    return y.add(L), () => y.delete(L);
  }
  function Re(L, B = {}) {
    T = { ...T, ...L };
    let K = [],
      ne = [];
    T.fetchers.forEach((xe, De) => {
      xe.state === "idle" && (q.has(De) ? K.push(De) : ne.push(De));
    }),
      q.forEach((xe) => {
        !T.fetchers.has(xe) && !pe.has(xe) && K.push(xe);
      }),
      [...y].forEach((xe) =>
        xe(T, {
          deletedFetchers: K,
          viewTransitionOpts: B.viewTransitionOpts,
          flushSync: B.flushSync === !0,
        })
      ),
      K.forEach((xe) => Ht(xe)),
      ne.forEach((xe) => T.fetchers.delete(xe));
  }
  function Xe(L, B, { flushSync: K } = {}) {
    var ye, Ke;
    let ne =
        T.actionData != null &&
        T.navigation.formMethod != null &&
        gr(T.navigation.formMethod) &&
        T.navigation.state === "loading" &&
        ((ye = L.state) == null ? void 0 : ye._isRedirect) !== !0,
      xe;
    B.actionData
      ? Object.keys(B.actionData).length > 0
        ? (xe = B.actionData)
        : (xe = null)
      : ne
      ? (xe = T.actionData)
      : (xe = null);
    let De = B.loaderData
        ? qv(T.loaderData, B.loaderData, B.matches || [], B.errors)
        : T.loaderData,
      Ze = T.blockers;
    Ze.size > 0 && ((Ze = new Map(Ze)), Ze.forEach((Je, xt) => Ze.set(xt, Ia)));
    let Ee =
      V === !0 ||
      (T.navigation.formMethod != null &&
        gr(T.navigation.formMethod) &&
        ((Ke = L.state) == null ? void 0 : Ke._isRedirect) !== !0);
    l && ((a = l), (l = void 0)),
      X ||
        M === "POP" ||
        (M === "PUSH"
          ? e.history.push(L, L.state)
          : M === "REPLACE" && e.history.replace(L, L.state));
    let Pe;
    if (M === "POP") {
      let Je = Q.get(T.location.pathname);
      Je && Je.has(L.pathname)
        ? (Pe = { currentLocation: T.location, nextLocation: L })
        : Q.has(L.pathname) &&
          (Pe = { currentLocation: L, nextLocation: T.location });
    } else if (Y) {
      let Je = Q.get(T.location.pathname);
      Je
        ? Je.add(L.pathname)
        : ((Je = new Set([L.pathname])), Q.set(T.location.pathname, Je)),
        (Pe = { currentLocation: T.location, nextLocation: L });
    }
    Re(
      {
        ...B,
        actionData: xe,
        loaderData: De,
        historyAction: M,
        location: L,
        initialized: !0,
        navigation: ph,
        revalidation: "idle",
        restoreScrollPosition: Kn(L, B.matches || T.matches),
        preventScrollReset: Ee,
        blockers: Ze,
      },
      { viewTransitionOpts: Pe, flushSync: K === !0 }
    ),
      (M = "POP"),
      (V = !1),
      (Y = !1),
      (X = !1),
      (ie = !1),
      Ie == null || Ie.resolve(),
      (Ie = null);
  }
  async function nt(L, B) {
    if (typeof L == "number") {
      e.history.go(L);
      return;
    }
    let K = qh(
        T.location,
        T.matches,
        c,
        L,
        B == null ? void 0 : B.fromRouteId,
        B == null ? void 0 : B.relative
      ),
      { path: ne, submission: xe, error: De } = zv(!1, K, B),
      Ze = T.location,
      Ee = al(T.location, ne, B && B.state);
    Ee = { ...Ee, ...e.history.encodeLocation(Ee) };
    let Pe = B && B.replace != null ? B.replace : void 0,
      ye = "PUSH";
    Pe === !0
      ? (ye = "REPLACE")
      : Pe === !1 ||
        (xe != null &&
          gr(xe.formMethod) &&
          xe.formAction === T.location.pathname + T.location.search &&
          (ye = "REPLACE"));
    let Ke =
        B && "preventScrollReset" in B ? B.preventScrollReset === !0 : void 0,
      Je = (B && B.flushSync) === !0,
      xt = _i({ currentLocation: Ze, nextLocation: Ee, historyAction: ye });
    if (xt) {
      Nr(xt, {
        state: "blocked",
        location: Ee,
        proceed() {
          Nr(xt, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Ee,
          }),
            nt(L, B);
        },
        reset() {
          let Zt = new Map(T.blockers);
          Zt.set(xt, Ia), Re({ blockers: Zt });
        },
      });
      return;
    }
    await We(ye, Ee, {
      submission: xe,
      pendingError: De,
      preventScrollReset: Ke,
      replace: B && B.replace,
      enableViewTransition: B && B.viewTransition,
      flushSync: Je,
    });
  }
  function _e() {
    Ie || (Ie = Kk()), je(), Re({ revalidation: "loading" });
    let L = Ie.promise;
    return T.navigation.state === "submitting"
      ? L
      : T.navigation.state === "idle"
      ? (We(T.historyAction, T.location, {
          startUninterruptedRevalidation: !0,
        }),
        L)
      : (We(M || T.historyAction, T.navigation.location, {
          overrideNavigation: T.navigation,
          enableViewTransition: Y === !0,
        }),
        L);
  }
  async function We(L, B, K) {
    F && F.abort(),
      (F = null),
      (M = L),
      (X = (K && K.startUninterruptedRevalidation) === !0),
      or(T.location, T.matches),
      (V = (K && K.preventScrollReset) === !0),
      (Y = (K && K.enableViewTransition) === !0);
    let ne = l || a,
      xe = K && K.overrideNavigation,
      De = Ji(ne, B, c),
      Ze = (K && K.flushSync) === !0,
      Ee = jr(De, ne, B.pathname);
    if ((Ee.active && Ee.matches && (De = Ee.matches), !De)) {
      let { error: ht, notFoundMatches: vt, route: Lt } = Jr(B.pathname);
      Xe(
        B,
        { matches: vt, loaderData: {}, errors: { [Lt.id]: ht } },
        { flushSync: Ze }
      );
      return;
    }
    if (
      T.initialized &&
      !ie &&
      Bk(T.location, B) &&
      !(K && K.submission && gr(K.submission.formMethod))
    ) {
      Xe(B, { matches: De }, { flushSync: Ze });
      return;
    }
    F = new AbortController();
    let Pe = Co(e.history, B, F.signal, K && K.submission),
      ye;
    if (K && K.pendingError)
      ye = [js(De).route.id, { type: "error", error: K.pendingError }];
    else if (K && K.submission && gr(K.submission.formMethod)) {
      let ht = await ct(Pe, B, K.submission, De, Ee.active, {
        replace: K.replace,
        flushSync: Ze,
      });
      if (ht.shortCircuited) return;
      if (ht.pendingActionResult) {
        let [vt, Lt] = ht.pendingActionResult;
        if (Vn(Lt) && td(Lt.error) && Lt.error.status === 404) {
          (F = null),
            Xe(B, {
              matches: ht.matches,
              loaderData: {},
              errors: { [vt]: Lt.error },
            });
          return;
        }
      }
      (De = ht.matches || De),
        (ye = ht.pendingActionResult),
        (xe = mh(B, K.submission)),
        (Ze = !1),
        (Ee.active = !1),
        (Pe = Co(e.history, Pe.url, Pe.signal));
    }
    let {
      shortCircuited: Ke,
      matches: Je,
      loaderData: xt,
      errors: Zt,
    } = await Pt(
      Pe,
      B,
      De,
      Ee.active,
      xe,
      K && K.submission,
      K && K.fetcherSubmission,
      K && K.replace,
      K && K.initialHydration === !0,
      Ze,
      ye
    );
    Ke ||
      ((F = null),
      Xe(B, { matches: Je || De, ...Yv(ye), loaderData: xt, errors: Zt }));
  }
  async function ct(L, B, K, ne, xe, De = {}) {
    je();
    let Ze = $k(B, K);
    if ((Re({ navigation: Ze }, { flushSync: De.flushSync === !0 }), xe)) {
      let ye = await ei(ne, B.pathname, L.signal);
      if (ye.type === "aborted") return { shortCircuited: !0 };
      if (ye.type === "error") {
        let Ke = js(ye.partialMatches).route.id;
        return {
          matches: ye.partialMatches,
          pendingActionResult: [Ke, { type: "error", error: ye.error }],
        };
      } else if (ye.matches) ne = ye.matches;
      else {
        let { notFoundMatches: Ke, error: Je, route: xt } = Jr(B.pathname);
        return {
          matches: Ke,
          pendingActionResult: [xt.id, { type: "error", error: Je }],
        };
      }
    }
    let Ee,
      Pe = Ka(ne, B);
    if (!Pe.route.action && !Pe.route.lazy)
      Ee = {
        type: "error",
        error: rr(405, {
          method: L.method,
          pathname: B.pathname,
          routeId: Pe.route.id,
        }),
      };
    else if (
      ((Ee = (await de("action", T, L, [Pe], ne, null))[Pe.route.id]),
      L.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Ds(Ee)) {
      let ye;
      return (
        De && De.replace != null
          ? (ye = De.replace)
          : (ye =
              Zv(Ee.response.headers.get("Location"), new URL(L.url), c) ===
              T.location.pathname + T.location.search),
        await ue(L, Ee, !0, { submission: K, replace: ye }),
        { shortCircuited: !0 }
      );
    }
    if (Vn(Ee)) {
      let ye = js(ne, Pe.route.id);
      return (
        (De && De.replace) !== !0 && (M = "PUSH"),
        { matches: ne, pendingActionResult: [ye.route.id, Ee] }
      );
    }
    return { matches: ne, pendingActionResult: [Pe.route.id, Ee] };
  }
  async function Pt(L, B, K, ne, xe, De, Ze, Ee, Pe, ye, Ke) {
    let Je = xe || mh(B, De),
      xt = De || Ze || Jv(Je),
      Zt = !X && !Pe;
    if (ne) {
      if (Zt) {
        let Kt = Wt(Ke);
        Re(
          { navigation: Je, ...(Kt !== void 0 ? { actionData: Kt } : {}) },
          { flushSync: ye }
        );
      }
      let pt = await ei(K, B.pathname, L.signal);
      if (pt.type === "aborted") return { shortCircuited: !0 };
      if (pt.type === "error") {
        let Kt = js(pt.partialMatches).route.id;
        return {
          matches: pt.partialMatches,
          loaderData: {},
          errors: { [Kt]: pt.error },
        };
      } else if (pt.matches) K = pt.matches;
      else {
        let { error: Kt, notFoundMatches: ni, route: gs } = Jr(B.pathname);
        return { matches: ni, loaderData: {}, errors: { [gs.id]: Kt } };
      }
    }
    let ht = l || a,
      [vt, Lt] = $v(
        e.history,
        T,
        K,
        xt,
        B,
        Pe === !0,
        ie,
        he,
        q,
        ee,
        J,
        ht,
        c,
        Ke
      );
    if (((le = ++me), vt.length === 0 && Lt.length === 0)) {
      let pt = Ar();
      return (
        Xe(
          B,
          {
            matches: K,
            loaderData: {},
            errors: Ke && Vn(Ke[1]) ? { [Ke[0]]: Ke[1].error } : null,
            ...Yv(Ke),
            ...(pt ? { fetchers: new Map(T.fetchers) } : {}),
          },
          { flushSync: ye }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Zt) {
      let pt = {};
      if (!ne) {
        pt.navigation = Je;
        let Kt = Wt(Ke);
        Kt !== void 0 && (pt.actionData = Kt);
      }
      Lt.length > 0 && (pt.fetchers = Xt(Lt)), Re(pt, { flushSync: ye });
    }
    Lt.forEach((pt) => {
      bt(pt.key), pt.controller && pe.set(pt.key, pt.controller);
    });
    let Ti = () => Lt.forEach((pt) => bt(pt.key));
    F && F.signal.addEventListener("abort", Ti);
    let { loaderResults: Pi, fetcherResults: Gn } = await ae(T, K, vt, Lt, L);
    if (L.signal.aborted) return { shortCircuited: !0 };
    F && F.signal.removeEventListener("abort", Ti),
      Lt.forEach((pt) => pe.delete(pt.key));
    let Dn = Ju(Pi);
    if (Dn)
      return (
        await ue(L, Dn.result, !0, { replace: Ee }), { shortCircuited: !0 }
      );
    if (((Dn = Ju(Gn)), Dn))
      return (
        J.add(Dn.key),
        await ue(L, Dn.result, !0, { replace: Ee }),
        { shortCircuited: !0 }
      );
    let { loaderData: eo, errors: ms } = Gv(T, K, Pi, Ke, Lt, Gn);
    Pe && T.errors && (ms = { ...T.errors, ...ms });
    let ti = Ar(),
      wt = jn(le),
      to = ti || wt || Lt.length > 0;
    return {
      matches: K,
      loaderData: eo,
      errors: ms,
      ...(to ? { fetchers: new Map(T.fetchers) } : {}),
    };
  }
  function Wt(L) {
    if (L && !Vn(L[1])) return { [L[0]]: L[1].data };
    if (T.actionData)
      return Object.keys(T.actionData).length === 0 ? null : T.actionData;
  }
  function Xt(L) {
    return (
      L.forEach((B) => {
        let K = T.fetchers.get(B.key),
          ne = Va(void 0, K ? K.data : void 0);
        T.fetchers.set(B.key, ne);
      }),
      new Map(T.fetchers)
    );
  }
  async function N(L, B, K, ne) {
    bt(L);
    let xe = (ne && ne.flushSync) === !0,
      De = l || a,
      Ze = qh(
        T.location,
        T.matches,
        c,
        K,
        B,
        ne == null ? void 0 : ne.relative
      ),
      Ee = Ji(De, Ze, c),
      Pe = jr(Ee, De, Ze);
    if ((Pe.active && Pe.matches && (Ee = Pe.matches), !Ee)) {
      lt(L, B, rr(404, { pathname: Ze }), { flushSync: xe });
      return;
    }
    let { path: ye, submission: Ke, error: Je } = zv(!0, Ze, ne);
    if (Je) {
      lt(L, B, Je, { flushSync: xe });
      return;
    }
    let xt = Ka(Ee, ye),
      Zt = (ne && ne.preventScrollReset) === !0;
    if (Ke && gr(Ke.formMethod)) {
      await z(L, B, ye, xt, Ee, Pe.active, xe, Zt, Ke);
      return;
    }
    ee.set(L, { routeId: B, path: ye }),
      await Z(L, B, ye, xt, Ee, Pe.active, xe, Zt, Ke);
  }
  async function z(L, B, K, ne, xe, De, Ze, Ee, Pe) {
    je(), ee.delete(L);
    function ye(Rt) {
      if (!Rt.route.action && !Rt.route.lazy) {
        let ar = rr(405, { method: Pe.formMethod, pathname: K, routeId: B });
        return lt(L, B, ar, { flushSync: Ze }), !0;
      }
      return !1;
    }
    if (!De && ye(ne)) return;
    let Ke = T.fetchers.get(L);
    Fe(L, Wk(Pe, Ke), { flushSync: Ze });
    let Je = new AbortController(),
      xt = Co(e.history, K, Je.signal, Pe);
    if (De) {
      let Rt = await ei(xe, K, xt.signal);
      if (Rt.type === "aborted") return;
      if (Rt.type === "error") {
        lt(L, B, Rt.error, { flushSync: Ze });
        return;
      } else if (Rt.matches) {
        if (((xe = Rt.matches), (ne = Ka(xe, K)), ye(ne))) return;
      } else {
        lt(L, B, rr(404, { pathname: K }), { flushSync: Ze });
        return;
      }
    }
    pe.set(L, Je);
    let Zt = me,
      vt = (await de("action", T, xt, [ne], xe, L))[ne.route.id];
    if (xt.signal.aborted) {
      pe.get(L) === Je && pe.delete(L);
      return;
    }
    if (q.has(L)) {
      if (Ds(vt) || Vn(vt)) {
        Fe(L, Yi(void 0));
        return;
      }
    } else {
      if (Ds(vt))
        if ((pe.delete(L), le > Zt)) {
          Fe(L, Yi(void 0));
          return;
        } else
          return (
            J.add(L),
            Fe(L, Va(Pe)),
            ue(xt, vt, !1, { fetcherSubmission: Pe, preventScrollReset: Ee })
          );
      if (Vn(vt)) {
        lt(L, B, vt.error);
        return;
      }
    }
    let Lt = T.navigation.location || T.location,
      Ti = Co(e.history, Lt, Je.signal),
      Pi = l || a,
      Gn =
        T.navigation.state !== "idle"
          ? Ji(Pi, T.navigation.location, c)
          : T.matches;
    st(Gn, "Didn't find any matches after fetcher action");
    let Dn = ++me;
    H.set(L, Dn);
    let eo = Va(Pe, vt.data);
    T.fetchers.set(L, eo);
    let [ms, ti] = $v(e.history, T, Gn, Pe, Lt, !1, ie, he, q, ee, J, Pi, c, [
      ne.route.id,
      vt,
    ]);
    ti
      .filter((Rt) => Rt.key !== L)
      .forEach((Rt) => {
        let ar = Rt.key,
          On = T.fetchers.get(ar),
          Td = Va(void 0, On ? On.data : void 0);
        T.fetchers.set(ar, Td),
          bt(ar),
          Rt.controller && pe.set(ar, Rt.controller);
      }),
      Re({ fetchers: new Map(T.fetchers) });
    let wt = () => ti.forEach((Rt) => bt(Rt.key));
    Je.signal.addEventListener("abort", wt);
    let { loaderResults: to, fetcherResults: pt } = await ae(T, Gn, ms, ti, Ti);
    if (Je.signal.aborted) return;
    Je.signal.removeEventListener("abort", wt),
      H.delete(L),
      pe.delete(L),
      ti.forEach((Rt) => pe.delete(Rt.key));
    let Kt = Ju(to);
    if (Kt) return ue(Ti, Kt.result, !1, { preventScrollReset: Ee });
    if (((Kt = Ju(pt)), Kt))
      return J.add(Kt.key), ue(Ti, Kt.result, !1, { preventScrollReset: Ee });
    let { loaderData: ni, errors: gs } = Gv(T, Gn, to, void 0, ti, pt);
    if (T.fetchers.has(L)) {
      let Rt = Yi(vt.data);
      T.fetchers.set(L, Rt);
    }
    jn(Dn),
      T.navigation.state === "loading" && Dn > le
        ? (st(M, "Expected pending action"),
          F && F.abort(),
          Xe(T.navigation.location, {
            matches: Gn,
            loaderData: ni,
            errors: gs,
            fetchers: new Map(T.fetchers),
          }))
        : (Re({
            errors: gs,
            loaderData: qv(T.loaderData, ni, Gn, gs),
            fetchers: new Map(T.fetchers),
          }),
          (ie = !1));
  }
  async function Z(L, B, K, ne, xe, De, Ze, Ee, Pe) {
    let ye = T.fetchers.get(L);
    Fe(L, Va(Pe, ye ? ye.data : void 0), { flushSync: Ze });
    let Ke = new AbortController(),
      Je = Co(e.history, K, Ke.signal);
    if (De) {
      let vt = await ei(xe, K, Je.signal);
      if (vt.type === "aborted") return;
      if (vt.type === "error") {
        lt(L, B, vt.error, { flushSync: Ze });
        return;
      } else if (vt.matches) (xe = vt.matches), (ne = Ka(xe, K));
      else {
        lt(L, B, rr(404, { pathname: K }), { flushSync: Ze });
        return;
      }
    }
    pe.set(L, Ke);
    let xt = me,
      ht = (await de("loader", T, Je, [ne], xe, L))[ne.route.id];
    if ((pe.get(L) === Ke && pe.delete(L), !Je.signal.aborted)) {
      if (q.has(L)) {
        Fe(L, Yi(void 0));
        return;
      }
      if (Ds(ht))
        if (le > xt) {
          Fe(L, Yi(void 0));
          return;
        } else {
          J.add(L), await ue(Je, ht, !1, { preventScrollReset: Ee });
          return;
        }
      if (Vn(ht)) {
        lt(L, B, ht.error);
        return;
      }
      Fe(L, Yi(ht.data));
    }
  }
  async function ue(
    L,
    B,
    K,
    {
      submission: ne,
      fetcherSubmission: xe,
      preventScrollReset: De,
      replace: Ze,
    } = {}
  ) {
    B.response.headers.has("X-Remix-Revalidate") && (ie = !0);
    let Ee = B.response.headers.get("Location");
    st(Ee, "Expected a Location header on the redirect Response"),
      (Ee = Zv(Ee, new URL(L.url), c));
    let Pe = al(T.location, Ee, { _isRedirect: !0 });
    if (n) {
      let ht = !1;
      if (B.response.headers.has("X-Remix-Reload-Document")) ht = !0;
      else if (Bp.test(Ee)) {
        const vt = e.history.createURL(Ee);
        ht = vt.origin !== t.location.origin || _r(vt.pathname, c) == null;
      }
      if (ht) {
        Ze ? t.location.replace(Ee) : t.location.assign(Ee);
        return;
      }
    }
    F = null;
    let ye =
        Ze === !0 || B.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: Ke, formAction: Je, formEncType: xt } = T.navigation;
    !ne && !xe && Ke && Je && xt && (ne = Jv(T.navigation));
    let Zt = ne || xe;
    if (kk.has(B.response.status) && Zt && gr(Zt.formMethod))
      await We(ye, Pe, {
        submission: { ...Zt, formAction: Ee },
        preventScrollReset: De || V,
        enableViewTransition: K ? Y : void 0,
      });
    else {
      let ht = mh(Pe, ne);
      await We(ye, Pe, {
        overrideNavigation: ht,
        fetcherSubmission: xe,
        preventScrollReset: De || V,
        enableViewTransition: K ? Y : void 0,
      });
    }
  }
  async function de(L, B, K, ne, xe, De) {
    let Ze,
      Ee = {};
    try {
      Ze = await Lk(f, L, B, K, ne, xe, De, o, i);
    } catch (Pe) {
      return (
        ne.forEach((ye) => {
          Ee[ye.route.id] = { type: "error", error: Pe };
        }),
        Ee
      );
    }
    for (let [Pe, ye] of Object.entries(Ze))
      if (zk(ye)) {
        let Ke = ye.result;
        Ee[Pe] = { type: "redirect", response: Ik(Ke, K, Pe, xe, c) };
      } else Ee[Pe] = await Fk(ye);
    return Ee;
  }
  async function ae(L, B, K, ne, xe) {
    let De = de("loader", L, xe, K, B, null),
      Ze = Promise.all(
        ne.map(async (ye) => {
          if (ye.matches && ye.match && ye.controller) {
            let Je = (
              await de(
                "loader",
                L,
                Co(e.history, ye.path, ye.controller.signal),
                [ye.match],
                ye.matches,
                ye.key
              )
            )[ye.match.route.id];
            return { [ye.key]: Je };
          } else
            return Promise.resolve({
              [ye.key]: {
                type: "error",
                error: rr(404, { pathname: ye.path }),
              },
            });
        })
      ),
      Ee = await De,
      Pe = (await Ze).reduce((ye, Ke) => Object.assign(ye, Ke), {});
    return { loaderResults: Ee, fetcherResults: Pe };
  }
  function je() {
    (ie = !0),
      ee.forEach((L, B) => {
        pe.has(B) && he.add(B), bt(B);
      });
  }
  function Fe(L, B, K = {}) {
    T.fetchers.set(L, B),
      Re(
        { fetchers: new Map(T.fetchers) },
        { flushSync: (K && K.flushSync) === !0 }
      );
  }
  function lt(L, B, K, ne = {}) {
    let xe = js(T.matches, B);
    Ht(L),
      Re(
        { errors: { [xe.route.id]: K }, fetchers: new Map(T.fetchers) },
        { flushSync: (ne && ne.flushSync) === !0 }
      );
  }
  function yt(L) {
    return (
      O.set(L, (O.get(L) || 0) + 1),
      q.has(L) && q.delete(L),
      T.fetchers.get(L) || Tk
    );
  }
  function Ht(L) {
    let B = T.fetchers.get(L);
    pe.has(L) && !(B && B.state === "loading" && H.has(L)) && bt(L),
      ee.delete(L),
      H.delete(L),
      J.delete(L),
      q.delete(L),
      he.delete(L),
      T.fetchers.delete(L);
  }
  function Rr(L) {
    let B = (O.get(L) || 0) - 1;
    B <= 0 ? (O.delete(L), q.add(L)) : O.set(L, B),
      Re({ fetchers: new Map(T.fetchers) });
  }
  function bt(L) {
    let B = pe.get(L);
    B && (B.abort(), pe.delete(L));
  }
  function an(L) {
    for (let B of L) {
      let K = yt(B),
        ne = Yi(K.data);
      T.fetchers.set(B, ne);
    }
  }
  function Ar() {
    let L = [],
      B = !1;
    for (let K of J) {
      let ne = T.fetchers.get(K);
      st(ne, `Expected fetcher: ${K}`),
        ne.state === "loading" && (J.delete(K), L.push(K), (B = !0));
    }
    return an(L), B;
  }
  function jn(L) {
    let B = [];
    for (let [K, ne] of H)
      if (ne < L) {
        let xe = T.fetchers.get(K);
        st(xe, `Expected fetcher: ${K}`),
          xe.state === "loading" && (bt(K), H.delete(K), B.push(K));
      }
    return an(B), B.length > 0;
  }
  function Ei(L, B) {
    let K = T.blockers.get(L) || Ia;
    return Ne.get(L) !== B && Ne.set(L, B), K;
  }
  function Qr(L) {
    T.blockers.delete(L), Ne.delete(L);
  }
  function Nr(L, B) {
    let K = T.blockers.get(L) || Ia;
    st(
      (K.state === "unblocked" && B.state === "blocked") ||
        (K.state === "blocked" && B.state === "blocked") ||
        (K.state === "blocked" && B.state === "proceeding") ||
        (K.state === "blocked" && B.state === "unblocked") ||
        (K.state === "proceeding" && B.state === "unblocked"),
      `Invalid blocker state transition: ${K.state} -> ${B.state}`
    );
    let ne = new Map(T.blockers);
    ne.set(L, B), Re({ blockers: ne });
  }
  function _i({ currentLocation: L, nextLocation: B, historyAction: K }) {
    if (Ne.size === 0) return;
    Ne.size > 1 && sn(!1, "A router only supports one blocker at a time");
    let ne = Array.from(Ne.entries()),
      [xe, De] = ne[ne.length - 1],
      Ze = T.blockers.get(xe);
    if (
      !(Ze && Ze.state === "proceeding") &&
      De({ currentLocation: L, nextLocation: B, historyAction: K })
    )
      return xe;
  }
  function Jr(L) {
    let B = rr(404, { pathname: L }),
      K = l || a,
      { matches: ne, route: xe } = Xv(K);
    return { notFoundMatches: ne, route: xe, error: B };
  }
  function Ci(L, B, K) {
    if (((w = L), (S = B), (x = K || null), !E && T.navigation === ph)) {
      E = !0;
      let ne = Kn(T.location, T.matches);
      ne != null && Re({ restoreScrollPosition: ne });
    }
    return () => {
      (w = null), (S = null), (x = null);
    };
  }
  function ki(L, B) {
    return (
      (x &&
        x(
          L,
          B.map((ne) => ik(ne, T.loaderData))
        )) ||
      L.key
    );
  }
  function or(L, B) {
    if (w && S) {
      let K = ki(L, B);
      w[K] = S();
    }
  }
  function Kn(L, B) {
    if (w) {
      let K = ki(L, B),
        ne = w[K];
      if (typeof ne == "number") return ne;
    }
    return null;
  }
  function jr(L, B, K) {
    if (h)
      if (L) {
        if (Object.keys(L[0].params).length > 0)
          return { active: !0, matches: fc(B, K, c, !0) };
      } else return { active: !0, matches: fc(B, K, c, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ei(L, B, K) {
    if (!h) return { type: "success", matches: L };
    let ne = L;
    for (;;) {
      let xe = l == null,
        De = l || a,
        Ze = o;
      try {
        await h({
          path: B,
          matches: ne,
          patch: (ye, Ke) => {
            K.aborted || Hv(ye, Ke, De, Ze, i);
          },
        });
      } catch (ye) {
        return { type: "error", error: ye, partialMatches: ne };
      } finally {
        xe && !K.aborted && (a = [...a]);
      }
      if (K.aborted) return { type: "aborted" };
      let Ee = Ji(De, B, c);
      if (Ee) return { type: "success", matches: Ee };
      let Pe = fc(De, B, c, !0);
      if (
        !Pe ||
        (ne.length === Pe.length &&
          ne.every((ye, Ke) => ye.route.id === Pe[Ke].route.id))
      )
        return { type: "success", matches: null };
      ne = Pe;
    }
  }
  function ps(L) {
    (o = {}), (l = kc(L, i, void 0, o));
  }
  function Js(L, B) {
    let K = l == null;
    Hv(L, B, l || a, o, i), K && ((a = [...a]), Re({}));
  }
  return (
    (j = {
      get basename() {
        return c;
      },
      get future() {
        return p;
      },
      get state() {
        return T;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: ze,
      subscribe: Te,
      enableScrollRestoration: Ci,
      navigate: nt,
      fetch: N,
      revalidate: _e,
      createHref: (L) => e.history.createHref(L),
      encodeLocation: (L) => e.history.encodeLocation(L),
      getFetcher: yt,
      deleteFetcher: Rr,
      dispose: be,
      getBlocker: Ei,
      deleteBlocker: Qr,
      patchRoutes: Js,
      _internalFetchControllers: pe,
      _internalSetRoutes: ps,
    }),
    j
  );
}
function Ak(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function qh(e, t, n, i, o, a) {
  let l, c;
  if (o) {
    l = [];
    for (let h of t)
      if ((l.push(h), h.route.id === o)) {
        c = h;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let f = Vp(i || ".", Ip(l), _r(e.pathname, n) || e.pathname, a === "path");
  if (
    (i == null && ((f.search = e.search), (f.hash = e.hash)),
    (i == null || i === "" || i === ".") && c)
  ) {
    let h = zp(f.search);
    if (c.route.index && !h)
      f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
    else if (!c.route.index && h) {
      let p = new URLSearchParams(f.search),
        g = p.getAll("index");
      p.delete("index"),
        g.filter((w) => w).forEach((w) => p.append("index", w));
      let y = p.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (
    n !== "/" && (f.pathname = f.pathname === "/" ? n : zr([n, f.pathname])),
    ts(f)
  );
}
function zv(e, t, n) {
  if (!n || !Ak(n)) return { path: t };
  if (n.formMethod && !Uk(n.formMethod))
    return { path: t, error: rr(405, { method: n.formMethod }) };
  let i = () => ({ path: t, error: rr(400, { type: "invalid-body" }) }),
    a = (n.formMethod || "get").toUpperCase(),
    l = O0(t);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!gr(a)) return i();
      let g =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce(
              (y, [w, x]) => `${y}${w}=${x}
`,
              ""
            )
          : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: a,
          formAction: l,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!gr(a)) return i();
      try {
        let g = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: a,
            formAction: l,
            formEncType: n.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  st(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let c, f;
  if (n.formData) (c = Xh(n.formData)), (f = n.formData);
  else if (n.body instanceof FormData) (c = Xh(n.body)), (f = n.body);
  else if (n.body instanceof URLSearchParams) (c = n.body), (f = Kv(c));
  else if (n.body == null) (c = new URLSearchParams()), (f = new FormData());
  else
    try {
      (c = new URLSearchParams(n.body)), (f = Kv(c));
    } catch {
      return i();
    }
  let h = {
    formMethod: a,
    formAction: l,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: f,
    json: void 0,
    text: void 0,
  };
  if (gr(h.formMethod)) return { path: t, submission: h };
  let p = ds(t);
  return (
    e && p.search && zp(p.search) && c.append("index", ""),
    (p.search = `?${c}`),
    { path: ts(p), submission: h }
  );
}
function Uv(e, t, n = !1) {
  let i = e.findIndex((o) => o.route.id === t);
  return i >= 0 ? e.slice(0, n ? i + 1 : i) : e;
}
function $v(e, t, n, i, o, a, l, c, f, h, p, g, y, w) {
  let x = w ? (Vn(w[1]) ? w[1].error : w[1].data) : void 0,
    S = e.createURL(t.location),
    E = e.createURL(o),
    b = n;
  a && t.errors
    ? (b = Uv(n, Object.keys(t.errors)[0], !0))
    : w && Vn(w[1]) && (b = Uv(n, w[0]));
  let P = w ? w[1].statusCode : void 0,
    R = P && P >= 400,
    j = b.filter((M, V) => {
      let { route: F } = M;
      if (F.lazy) return !0;
      if (F.loader == null) return !1;
      if (a) return Yh(F, t.loaderData, t.errors);
      if (Nk(t.loaderData, t.matches[V], M)) return !0;
      let Y = t.matches[V],
        Q = M;
      return Wv(M, {
        currentUrl: S,
        currentParams: Y.params,
        nextUrl: E,
        nextParams: Q.params,
        ...i,
        actionResult: x,
        actionStatus: P,
        defaultShouldRevalidate: R
          ? !1
          : l ||
            S.pathname + S.search === E.pathname + E.search ||
            S.search !== E.search ||
            jk(Y, Q),
      });
    }),
    T = [];
  return (
    h.forEach((M, V) => {
      if (a || !n.some((X) => X.route.id === M.routeId) || f.has(V)) return;
      let F = Ji(g, M.path, y);
      if (!F) {
        T.push({
          key: V,
          routeId: M.routeId,
          path: M.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Y = t.fetchers.get(V),
        Q = Ka(F, M.path),
        ce = !1;
      p.has(V)
        ? (ce = !1)
        : c.has(V)
        ? (c.delete(V), (ce = !0))
        : Y && Y.state !== "idle" && Y.data === void 0
        ? (ce = l)
        : (ce = Wv(Q, {
            currentUrl: S,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: E,
            nextParams: n[n.length - 1].params,
            ...i,
            actionResult: x,
            actionStatus: P,
            defaultShouldRevalidate: R ? !1 : l,
          })),
        ce &&
          T.push({
            key: V,
            routeId: M.routeId,
            path: M.path,
            matches: F,
            match: Q,
            controller: new AbortController(),
          });
    }),
    [j, T]
  );
}
function Yh(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let i = t != null && t[e.id] !== void 0,
    o = n != null && n[e.id] !== void 0;
  return !i && o
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !i && !o;
}
function Nk(e, t, n) {
  let i = !t || n.route.id !== t.route.id,
    o = !e.hasOwnProperty(n.route.id);
  return i || o;
}
function jk(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Wv(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function Hv(e, t, n, i, o) {
  let a;
  if (e) {
    let f = i[e];
    st(f, `No route found to patch children into: routeId = ${e}`),
      f.children || (f.children = []),
      (a = f.children);
  } else a = n;
  let l = t.filter((f) => !a.some((h) => D0(f, h))),
    c = kc(
      l,
      o,
      [e || "_", "patch", String((a == null ? void 0 : a.length) || "0")],
      i
    );
  a.push(...c);
}
function D0(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((n, i) => {
          var o;
          return (o = t.children) == null ? void 0 : o.some((a) => D0(n, a));
        })
    : !1;
}
async function Dk(e, t, n) {
  if (!e.lazy) return;
  let i = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  st(o, "No route found in manifest");
  let a = {};
  for (let l in i) {
    let f = o[l] !== void 0 && l !== "hasErrorBoundary";
    sn(
      !f,
      `Route "${o.id}" has a static property "${l}" defined but its lazy function is also returning a value for this property. The lazy route property "${l}" will be ignored.`
    ),
      !f && !nk.has(l) && (a[l] = i[l]);
  }
  Object.assign(o, a), Object.assign(o, { ...t(o), lazy: void 0 });
}
async function Ok({ matches: e }) {
  let t = e.filter((i) => i.shouldLoad);
  return (await Promise.all(t.map((i) => i.resolve()))).reduce(
    (i, o, a) => Object.assign(i, { [t[a].route.id]: o }),
    {}
  );
}
async function Lk(e, t, n, i, o, a, l, c, f, h) {
  let p = a.map((w) => (w.route.lazy ? Dk(w.route, f, c) : void 0)),
    g = a.map((w, x) => {
      let S = p[x],
        E = o.some((P) => P.route.id === w.route.id);
      return {
        ...w,
        shouldLoad: E,
        resolve: async (P) => (
          P &&
            i.method === "GET" &&
            (w.route.lazy || w.route.loader) &&
            (E = !0),
          E
            ? Mk(t, i, w, S, P, h)
            : Promise.resolve({ type: "data", result: void 0 })
        ),
      };
    }),
    y = await e({
      matches: g,
      request: i,
      params: a[0].params,
      fetcherKey: l,
      context: h,
    });
  try {
    await Promise.all(p);
  } catch {}
  return y;
}
async function Mk(e, t, n, i, o, a) {
  let l,
    c,
    f = (h) => {
      let p,
        g = new Promise((x, S) => (p = S));
      (c = () => p()), t.signal.addEventListener("abort", c);
      let y = (x) =>
          typeof h != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${n.route.id}]`
                )
              )
            : h(
                { request: t, params: n.params, context: a },
                ...(x !== void 0 ? [x] : [])
              ),
        w = (async () => {
          try {
            return { type: "data", result: await (o ? o((S) => y(S)) : y()) };
          } catch (x) {
            return { type: "error", result: x };
          }
        })();
      return Promise.race([w, g]);
    };
  try {
    let h = n.route[e];
    if (i)
      if (h) {
        let p,
          [g] = await Promise.all([
            f(h).catch((y) => {
              p = y;
            }),
            i,
          ]);
        if (p !== void 0) throw p;
        l = g;
      } else if ((await i, (h = n.route[e]), h)) l = await f(h);
      else if (e === "action") {
        let p = new URL(t.url),
          g = p.pathname + p.search;
        throw rr(405, { method: t.method, pathname: g, routeId: n.route.id });
      } else return { type: "data", result: void 0 };
    else if (h) l = await f(h);
    else {
      let p = new URL(t.url),
        g = p.pathname + p.search;
      throw rr(404, { pathname: g });
    }
  } catch (h) {
    return { type: "error", result: h };
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  return l;
}
async function Fk(e) {
  var i, o, a, l;
  let { result: t, type: n } = e;
  if (L0(t)) {
    let c;
    try {
      let f = t.headers.get("Content-Type");
      f && /\bapplication\/json\b/.test(f)
        ? t.body == null
          ? (c = null)
          : (c = await t.json())
        : (c = await t.text());
    } catch (f) {
      return { type: "error", error: f };
    }
    return n === "error"
      ? {
          type: "error",
          error: new Pc(t.status, t.statusText, c),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: c, statusCode: t.status, headers: t.headers };
  }
  if (n === "error") {
    if (Qv(t)) {
      if (t.data instanceof Error)
        return {
          type: "error",
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
        };
      t = new Pc(
        ((o = t.init) == null ? void 0 : o.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: "error", error: t, statusCode: td(t) ? t.status : void 0 };
  }
  return Qv(t)
    ? {
        type: "data",
        data: t.data,
        statusCode: (a = t.init) == null ? void 0 : a.status,
        headers:
          (l = t.init) != null && l.headers
            ? new Headers(t.init.headers)
            : void 0,
      }
    : { type: "data", data: t };
}
function Ik(e, t, n, i, o) {
  let a = e.headers.get("Location");
  if (
    (st(
      a,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Bp.test(a))
  ) {
    let l = i.slice(0, i.findIndex((c) => c.route.id === n) + 1);
    (a = qh(new URL(t.url), l, o, a)), e.headers.set("Location", a);
  }
  return e;
}
function Zv(e, t, n) {
  if (Bp.test(e)) {
    let i = e,
      o = i.startsWith("//") ? new URL(t.protocol + i) : new URL(i),
      a = _r(o.pathname, n) != null;
    if (o.origin === t.origin && a) return o.pathname + o.search + o.hash;
  }
  return e;
}
function Co(e, t, n, i) {
  let o = e.createURL(O0(t)).toString(),
    a = { signal: n };
  if (i && gr(i.formMethod)) {
    let { formMethod: l, formEncType: c } = i;
    (a.method = l.toUpperCase()),
      c === "application/json"
        ? ((a.headers = new Headers({ "Content-Type": c })),
          (a.body = JSON.stringify(i.json)))
        : c === "text/plain"
        ? (a.body = i.text)
        : c === "application/x-www-form-urlencoded" && i.formData
        ? (a.body = Xh(i.formData))
        : (a.body = i.formData);
  }
  return new Request(o, a);
}
function Xh(e) {
  let t = new URLSearchParams();
  for (let [n, i] of e.entries())
    t.append(n, typeof i == "string" ? i : i.name);
  return t;
}
function Kv(e) {
  let t = new FormData();
  for (let [n, i] of e.entries()) t.append(n, i);
  return t;
}
function Vk(e, t, n, i = !1, o = !1) {
  let a = {},
    l = null,
    c,
    f = !1,
    h = {},
    p = n && Vn(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((g) => {
      if (!(g.route.id in t)) return;
      let y = g.route.id,
        w = t[y];
      if (
        (st(!Ds(w), "Cannot handle redirect results in processLoaderData"),
        Vn(w))
      ) {
        let x = w.error;
        if ((p !== void 0 && ((x = p), (p = void 0)), (l = l || {}), o))
          l[y] = x;
        else {
          let S = js(e, y);
          l[S.route.id] == null && (l[S.route.id] = x);
        }
        i || (a[y] = j0),
          f || ((f = !0), (c = td(w.error) ? w.error.status : 500)),
          w.headers && (h[y] = w.headers);
      } else
        (a[y] = w.data),
          w.statusCode && w.statusCode !== 200 && !f && (c = w.statusCode),
          w.headers && (h[y] = w.headers);
    }),
    p !== void 0 && n && ((l = { [n[0]]: p }), (a[n[0]] = void 0)),
    { loaderData: a, errors: l, statusCode: c || 200, loaderHeaders: h }
  );
}
function Gv(e, t, n, i, o, a) {
  let { loaderData: l, errors: c } = Vk(t, n, i);
  return (
    o.forEach((f) => {
      let { key: h, match: p, controller: g } = f,
        y = a[h];
      if (
        (st(y, "Did not find corresponding fetcher result"),
        !(g && g.signal.aborted))
      )
        if (Vn(y)) {
          let w = js(e.matches, p == null ? void 0 : p.route.id);
          (c && c[w.route.id]) || (c = { ...c, [w.route.id]: y.error }),
            e.fetchers.delete(h);
        } else if (Ds(y)) st(!1, "Unhandled fetcher revalidation redirect");
        else {
          let w = Yi(y.data);
          e.fetchers.set(h, w);
        }
    }),
    { loaderData: l, errors: c }
  );
}
function qv(e, t, n, i) {
  let o = Object.entries(t)
    .filter(([, a]) => a !== j0)
    .reduce((a, [l, c]) => ((a[l] = c), a), {});
  for (let a of n) {
    let l = a.route.id;
    if (
      (!t.hasOwnProperty(l) &&
        e.hasOwnProperty(l) &&
        a.route.loader &&
        (o[l] = e[l]),
      i && i.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function Yv(e) {
  return e
    ? Vn(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function js(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((i) => i.route.id === t) + 1) : [...e])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || e[0]
  );
}
function Xv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function rr(
  e,
  { pathname: t, routeId: n, method: i, type: o, message: a } = {}
) {
  let l = "Unknown Server Error",
    c = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        i && t && n
          ? (c = `You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`)
          : o === "invalid-body" && (c = "Unable to encode submission body"))
      : e === 403
      ? ((l = "Forbidden"), (c = `Route "${n}" does not match URL "${t}"`))
      : e === 404
      ? ((l = "Not Found"), (c = `No route matches URL "${t}"`))
      : e === 405 &&
        ((l = "Method Not Allowed"),
        i && t && n
          ? (c = `You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`)
          : i && (c = `Invalid request method "${i.toUpperCase()}"`)),
    new Pc(e || 500, l, new Error(c), !0)
  );
}
function Ju(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [i, o] = t[n];
    if (Ds(o)) return { key: i, result: o };
  }
}
function O0(e) {
  let t = typeof e == "string" ? ds(e) : e;
  return ts({ ...t, hash: "" });
}
function Bk(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function zk(e) {
  return L0(e.result) && Ck.has(e.result.status);
}
function Vn(e) {
  return e.type === "error";
}
function Ds(e) {
  return (e && e.type) === "redirect";
}
function Qv(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function L0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Uk(e) {
  return _k.has(e.toUpperCase());
}
function gr(e) {
  return bk.has(e.toUpperCase());
}
function zp(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ka(e, t) {
  let n = typeof t == "string" ? ds(t).search : t.search;
  if (e[e.length - 1].route.index && zp(n || "")) return e[e.length - 1];
  let i = R0(e);
  return i[i.length - 1];
}
function Jv(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: i,
    text: o,
    formData: a,
    json: l,
  } = e;
  if (!(!t || !n || !i)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: i,
        formData: a,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: i,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function mh(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function $k(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Va(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Wk(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Yi(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Hk(e, t) {
  try {
    let n = e.sessionStorage.getItem(N0);
    if (n) {
      let i = JSON.parse(n);
      for (let [o, a] of Object.entries(i || {}))
        a && Array.isArray(a) && t.set(o, new Set(a || []));
    }
  } catch {}
}
function Zk(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [i, o] of t) n[i] = [...o];
    try {
      e.sessionStorage.setItem(N0, JSON.stringify(n));
    } catch (i) {
      sn(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`
      );
    }
  }
}
function Kk() {
  let e,
    t,
    n = new Promise((i, o) => {
      (e = async (a) => {
        i(a);
        try {
          await n;
        } catch {}
      }),
        (t = async (a) => {
          o(a);
          try {
            await n;
          } catch {}
        });
    });
  return { promise: n, resolve: e, reject: t };
}
var qs = _.createContext(null);
qs.displayName = "DataRouter";
var Dl = _.createContext(null);
Dl.displayName = "DataRouterState";
var Up = _.createContext({ isTransitioning: !1 });
Up.displayName = "ViewTransition";
var M0 = _.createContext(new Map());
M0.displayName = "Fetchers";
var Gk = _.createContext(null);
Gk.displayName = "Await";
var qr = _.createContext(null);
qr.displayName = "Navigation";
var nd = _.createContext(null);
nd.displayName = "Location";
var Yr = _.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Yr.displayName = "Route";
var $p = _.createContext(null);
$p.displayName = "RouteError";
function qk(e, { relative: t } = {}) {
  st(
    Ol(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: i } = _.useContext(qr),
    { hash: o, pathname: a, search: l } = Ll(e, { relative: t }),
    c = a;
  return (
    n !== "/" && (c = a === "/" ? n : zr([n, a])),
    i.createHref({ pathname: c, search: l, hash: o })
  );
}
function Ol() {
  return _.useContext(nd) != null;
}
function Ys() {
  return (
    st(
      Ol(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    _.useContext(nd).location
  );
}
var F0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function I0(e) {
  _.useContext(qr).static || _.useLayoutEffect(e);
}
function Yk() {
  let { isDataRoute: e } = _.useContext(Yr);
  return e ? dT() : Xk();
}
function Xk() {
  st(
    Ol(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = _.useContext(qs),
    { basename: t, navigator: n } = _.useContext(qr),
    { matches: i } = _.useContext(Yr),
    { pathname: o } = Ys(),
    a = JSON.stringify(Ip(i)),
    l = _.useRef(!1);
  return (
    I0(() => {
      l.current = !0;
    }),
    _.useCallback(
      (f, h = {}) => {
        if ((sn(l.current, F0), !l.current)) return;
        if (typeof f == "number") {
          n.go(f);
          return;
        }
        let p = Vp(f, JSON.parse(a), o, h.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : zr([t, p.pathname])),
          (h.replace ? n.replace : n.push)(p, h.state, h);
      },
      [t, n, a, o, e]
    )
  );
}
var Qk = _.createContext(null);
function Jk(e) {
  let t = _.useContext(Yr).outlet;
  return t && _.createElement(Qk.Provider, { value: e }, t);
}
function Ll(e, { relative: t } = {}) {
  let { matches: n } = _.useContext(Yr),
    { pathname: i } = Ys(),
    o = JSON.stringify(Ip(n));
  return _.useMemo(() => Vp(e, JSON.parse(o), i, t === "path"), [e, o, i, t]);
}
function eT(e, t, n, i) {
  st(
    Ol(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = _.useContext(qr),
    { matches: a } = _.useContext(Yr),
    l = a[a.length - 1],
    c = l ? l.params : {},
    f = l ? l.pathname : "/",
    h = l ? l.pathnameBase : "/",
    p = l && l.route;
  {
    let b = (p && p.path) || "";
    V0(
      f,
      !p || b.endsWith("*") || b.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${
        b === "/" ? "*" : `${b}/*`
      }">.`
    );
  }
  let g = Ys(),
    y;
  y = g;
  let w = y.pathname || "/",
    x = w;
  if (h !== "/") {
    let b = h.replace(/^\//, "").split("/");
    x = "/" + w.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let S = Ji(e, { pathname: x });
  return (
    sn(
      p || S != null,
      `No routes matched location "${y.pathname}${y.search}${y.hash}" `
    ),
    sn(
      S == null ||
        S[S.length - 1].route.element !== void 0 ||
        S[S.length - 1].route.Component !== void 0 ||
        S[S.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    sT(
      S &&
        S.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, c, b.params),
            pathname: zr([
              h,
              o.encodeLocation
                ? o.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? h
                : zr([
                    h,
                    o.encodeLocation
                      ? o.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      i
    )
  );
}
function tT() {
  let e = cT(),
    t = td(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: i },
    a = { padding: "2px 4px", backgroundColor: i },
    l = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (l = _.createElement(
      _.Fragment,
      null,
      _.createElement("p", null, "💿 Hey developer 👋"),
      _.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        _.createElement("code", { style: a }, "ErrorBoundary"),
        " or",
        " ",
        _.createElement("code", { style: a }, "errorElement"),
        " prop on your route."
      )
    )),
    _.createElement(
      _.Fragment,
      null,
      _.createElement("h2", null, "Unexpected Application Error!"),
      _.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? _.createElement("pre", { style: o }, n) : null,
      l
    )
  );
}
var nT = _.createElement(tT, null),
  rT = class extends _.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? _.createElement(
            Yr.Provider,
            { value: this.props.routeContext },
            _.createElement($p.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function iT({ routeContext: e, match: t, children: n }) {
  let i = _.useContext(qs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    _.createElement(Yr.Provider, { value: e }, n)
  );
}
function sT(e, t = [], n = null, i = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let o = e,
    a = n == null ? void 0 : n.errors;
  if (a != null) {
    let f = o.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0
    );
    st(
      f >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let l = !1,
    c = -1;
  if (n)
    for (let f = 0; f < o.length; f++) {
      let h = o[f];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = f),
        h.route.id)
      ) {
        let { loaderData: p, errors: g } = n,
          y =
            h.route.loader &&
            !p.hasOwnProperty(h.route.id) &&
            (!g || g[h.route.id] === void 0);
        if (h.route.lazy || y) {
          (l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, h, p) => {
    let g,
      y = !1,
      w = null,
      x = null;
    n &&
      ((g = a && h.route.id ? a[h.route.id] : void 0),
      (w = h.route.errorElement || nT),
      l &&
        (c < 0 && p === 0
          ? (V0(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (y = !0),
            (x = null))
          : c === p &&
            ((y = !0), (x = h.route.hydrateFallbackElement || null))));
    let S = t.concat(o.slice(0, p + 1)),
      E = () => {
        let b;
        return (
          g
            ? (b = w)
            : y
            ? (b = x)
            : h.route.Component
            ? (b = _.createElement(h.route.Component, null))
            : h.route.element
            ? (b = h.route.element)
            : (b = f),
          _.createElement(iT, {
            match: h,
            routeContext: { outlet: f, matches: S, isDataRoute: n != null },
            children: b,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || p === 0)
      ? _.createElement(rT, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: E(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function Wp(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function oT(e) {
  let t = _.useContext(qs);
  return st(t, Wp(e)), t;
}
function aT(e) {
  let t = _.useContext(Dl);
  return st(t, Wp(e)), t;
}
function lT(e) {
  let t = _.useContext(Yr);
  return st(t, Wp(e)), t;
}
function Hp(e) {
  let t = lT(e),
    n = t.matches[t.matches.length - 1];
  return (
    st(
      n.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    n.route.id
  );
}
function uT() {
  return Hp("useRouteId");
}
function cT() {
  var i;
  let e = _.useContext($p),
    t = aT("useRouteError"),
    n = Hp("useRouteError");
  return e !== void 0 ? e : (i = t.errors) == null ? void 0 : i[n];
}
function dT() {
  let { router: e } = oT("useNavigate"),
    t = Hp("useNavigate"),
    n = _.useRef(!1);
  return (
    I0(() => {
      n.current = !0;
    }),
    _.useCallback(
      async (o, a = {}) => {
        sn(n.current, F0),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : await e.navigate(o, { fromRouteId: t, ...a }));
      },
      [e, t]
    )
  );
}
var ex = {};
function V0(e, t, n) {
  !t && !ex[e] && ((ex[e] = !0), sn(!1, n));
}
var tx = {};
function nx(e, t) {
  !e && !tx[t] && ((tx[t] = !0), console.warn(t));
}
function fT(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        sn(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        sn(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        sn(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var hT = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((e, t) => {
        (this.resolve = (n) => {
          this.status === "pending" && ((this.status = "resolved"), e(n));
        }),
          (this.reject = (n) => {
            this.status === "pending" && ((this.status = "rejected"), t(n));
          });
      }));
  }
};
function pT({ router: e, flushSync: t }) {
  let [n, i] = _.useState(e.state),
    [o, a] = _.useState(),
    [l, c] = _.useState({ isTransitioning: !1 }),
    [f, h] = _.useState(),
    [p, g] = _.useState(),
    [y, w] = _.useState(),
    x = _.useRef(new Map()),
    S = _.useCallback(
      (R, { deletedFetchers: j, flushSync: T, viewTransitionOpts: M }) => {
        R.fetchers.forEach((F, Y) => {
          F.data !== void 0 && x.current.set(Y, F.data);
        }),
          j.forEach((F) => x.current.delete(F)),
          nx(
            T === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let V =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (nx(
            M == null || V,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !M || !V)
        ) {
          t && T ? t(() => i(R)) : _.startTransition(() => i(R));
          return;
        }
        if (t && T) {
          t(() => {
            p && (f && f.resolve(), p.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: M.currentLocation,
                nextLocation: M.nextLocation,
              });
          });
          let F = e.window.document.startViewTransition(() => {
            t(() => i(R));
          });
          F.finished.finally(() => {
            t(() => {
              h(void 0), g(void 0), a(void 0), c({ isTransitioning: !1 });
            });
          }),
            t(() => g(F));
          return;
        }
        p
          ? (f && f.resolve(),
            p.skipTransition(),
            w({
              state: R,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation,
            }))
          : (a(R),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation,
            }));
      },
      [e.window, t, p, f]
    );
  _.useLayoutEffect(() => e.subscribe(S), [e, S]),
    _.useEffect(() => {
      l.isTransitioning && !l.flushSync && h(new hT());
    }, [l]),
    _.useEffect(() => {
      if (f && o && e.window) {
        let R = o,
          j = f.promise,
          T = e.window.document.startViewTransition(async () => {
            _.startTransition(() => i(R)), await j;
          });
        T.finished.finally(() => {
          h(void 0), g(void 0), a(void 0), c({ isTransitioning: !1 });
        }),
          g(T);
      }
    }, [o, f, e.window]),
    _.useEffect(() => {
      f && o && n.location.key === o.location.key && f.resolve();
    }, [f, p, n.location, o]),
    _.useEffect(() => {
      !l.isTransitioning &&
        y &&
        (a(y.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [l.isTransitioning, y]);
  let E = _.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (R) => e.navigate(R),
        push: (R, j, T) =>
          e.navigate(R, {
            state: j,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
        replace: (R, j, T) =>
          e.navigate(R, {
            replace: !0,
            state: j,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
      }),
      [e]
    ),
    b = e.basename || "/",
    P = _.useMemo(
      () => ({ router: e, navigator: E, static: !1, basename: b }),
      [e, E, b]
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      qs.Provider,
      { value: P },
      _.createElement(
        Dl.Provider,
        { value: n },
        _.createElement(
          M0.Provider,
          { value: x.current },
          _.createElement(
            Up.Provider,
            { value: l },
            _.createElement(
              vT,
              {
                basename: b,
                location: n.location,
                navigationType: n.historyAction,
                navigator: E,
              },
              _.createElement(mT, {
                routes: e.routes,
                future: e.future,
                state: n,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var mT = _.memo(gT);
function gT({ routes: e, future: t, state: n }) {
  return eT(e, void 0, n, t);
}
function yT(e) {
  return Jk(e.context);
}
function vT({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: i = "POP",
  navigator: o,
  static: a = !1,
}) {
  st(
    !Ol(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let l = e.replace(/^\/*/, "/"),
    c = _.useMemo(
      () => ({ basename: l, navigator: o, static: a, future: {} }),
      [l, o, a]
    );
  typeof n == "string" && (n = ds(n));
  let {
      pathname: f = "/",
      search: h = "",
      hash: p = "",
      state: g = null,
      key: y = "default",
    } = n,
    w = _.useMemo(() => {
      let x = _r(f, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: h, hash: p, state: g, key: y },
            navigationType: i,
          };
    }, [l, f, h, p, g, y, i]);
  return (
    sn(
      w != null,
      `<Router basename="${l}"> is not able to match the URL "${f}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : _.createElement(
          qr.Provider,
          { value: c },
          _.createElement(nd.Provider, { children: t, value: w })
        )
  );
}
var hc = "get",
  pc = "application/x-www-form-urlencoded";
function rd(e) {
  return e != null && typeof e.tagName == "string";
}
function xT(e) {
  return rd(e) && e.tagName.toLowerCase() === "button";
}
function wT(e) {
  return rd(e) && e.tagName.toLowerCase() === "form";
}
function ST(e) {
  return rd(e) && e.tagName.toLowerCase() === "input";
}
function bT(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ET(e, t) {
  return e.button === 0 && (!t || t === "_self") && !bT(e);
}
var ec = null;
function _T() {
  if (ec === null)
    try {
      new FormData(document.createElement("form"), 0), (ec = !1);
    } catch {
      ec = !0;
    }
  return ec;
}
var CT = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function gh(e) {
  return e != null && !CT.has(e)
    ? (sn(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pc}"`
      ),
      null)
    : e;
}
function kT(e, t) {
  let n, i, o, a, l;
  if (wT(e)) {
    let c = e.getAttribute("action");
    (i = c ? _r(c, t) : null),
      (n = e.getAttribute("method") || hc),
      (o = gh(e.getAttribute("enctype")) || pc),
      (a = new FormData(e));
  } else if (xT(e) || (ST(e) && (e.type === "submit" || e.type === "image"))) {
    let c = e.form;
    if (c == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let f = e.getAttribute("formaction") || c.getAttribute("action");
    if (
      ((i = f ? _r(f, t) : null),
      (n = e.getAttribute("formmethod") || c.getAttribute("method") || hc),
      (o =
        gh(e.getAttribute("formenctype")) ||
        gh(c.getAttribute("enctype")) ||
        pc),
      (a = new FormData(c, e)),
      !_T())
    ) {
      let { name: h, type: p, value: g } = e;
      if (p === "image") {
        let y = h ? `${h}.` : "";
        a.append(`${y}x`, "0"), a.append(`${y}y`, "0");
      } else h && a.append(h, g);
    }
  } else {
    if (rd(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = hc), (i = null), (o = pc), (l = e);
  }
  return (
    a && o === "text/plain" && ((l = a), (a = void 0)),
    { action: i, method: n.toLowerCase(), encType: o, formData: a, body: l }
  );
}
function Zp(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function TT(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function PT(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function RT(e, t, n) {
  let i = await Promise.all(
    e.map(async (o) => {
      let a = t.routes[o.route.id];
      if (a) {
        let l = await TT(a, n);
        return l.links ? l.links() : [];
      }
      return [];
    })
  );
  return DT(
    i
      .flat(1)
      .filter(PT)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function rx(e, t, n, i, o, a) {
  let l = (f, h) => (n[h] ? f.route.id !== n[h].route.id : !0),
    c = (f, h) => {
      var p;
      return (
        n[h].pathname !== f.pathname ||
        (((p = n[h].route.path) == null ? void 0 : p.endsWith("*")) &&
          n[h].params["*"] !== f.params["*"])
      );
    };
  return a === "assets"
    ? t.filter((f, h) => l(f, h) || c(f, h))
    : a === "data"
    ? t.filter((f, h) => {
        var g;
        let p = i.routes[f.route.id];
        if (!p || !p.hasLoader) return !1;
        if (l(f, h) || c(f, h)) return !0;
        if (f.route.shouldRevalidate) {
          let y = f.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((g = n[0]) == null ? void 0 : g.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: f.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof y == "boolean") return y;
        }
        return !0;
      })
    : [];
}
function AT(e, t) {
  return NT(
    e
      .map((n) => {
        let i = t.routes[n.route.id];
        if (!i) return [];
        let o = [i.module];
        return i.imports && (o = o.concat(i.imports)), o;
      })
      .flat(1)
  );
}
function NT(e) {
  return [...new Set(e)];
}
function jT(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let i of n) t[i] = e[i];
  return t;
}
function DT(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((i, o) => {
      let a = JSON.stringify(jT(o));
      return n.has(a) || (n.add(a), i.push({ key: a, link: o })), i;
    }, [])
  );
}
function OT(e) {
  let t =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    t.pathname === "/"
      ? (t.pathname = "_root.data")
      : (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
    t
  );
}
function LT() {
  let e = _.useContext(qs);
  return (
    Zp(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function MT() {
  let e = _.useContext(Dl);
  return (
    Zp(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var Kp = _.createContext(void 0);
Kp.displayName = "FrameworkContext";
function B0() {
  let e = _.useContext(Kp);
  return (
    Zp(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function FT(e, t) {
  let n = _.useContext(Kp),
    [i, o] = _.useState(!1),
    [a, l] = _.useState(!1),
    {
      onFocus: c,
      onBlur: f,
      onMouseEnter: h,
      onMouseLeave: p,
      onTouchStart: g,
    } = t,
    y = _.useRef(null);
  _.useEffect(() => {
    if ((e === "render" && l(!0), e === "viewport")) {
      let S = (b) => {
          b.forEach((P) => {
            l(P.isIntersecting);
          });
        },
        E = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        y.current && E.observe(y.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]),
    _.useEffect(() => {
      if (i) {
        let S = setTimeout(() => {
          l(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [i]);
  let w = () => {
      o(!0);
    },
    x = () => {
      o(!1), l(!1);
    };
  return n
    ? e !== "intent"
      ? [a, y, {}]
      : [
          a,
          y,
          {
            onFocus: Ba(c, w),
            onBlur: Ba(f, x),
            onMouseEnter: Ba(h, w),
            onMouseLeave: Ba(p, x),
            onTouchStart: Ba(g, w),
          },
        ]
    : [!1, y, {}];
}
function Ba(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function IT({ page: e, ...t }) {
  let { router: n } = LT(),
    i = _.useMemo(() => Ji(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return i ? _.createElement(BT, { page: e, matches: i, ...t }) : null;
}
function VT(e) {
  let { manifest: t, routeModules: n } = B0(),
    [i, o] = _.useState([]);
  return (
    _.useEffect(() => {
      let a = !1;
      return (
        RT(e, t, n).then((l) => {
          a || o(l);
        }),
        () => {
          a = !0;
        }
      );
    }, [e, t, n]),
    i
  );
}
function BT({ page: e, matches: t, ...n }) {
  let i = Ys(),
    { manifest: o, routeModules: a } = B0(),
    { loaderData: l, matches: c } = MT(),
    f = _.useMemo(() => rx(e, t, c, o, i, "data"), [e, t, c, o, i]),
    h = _.useMemo(() => rx(e, t, c, o, i, "assets"), [e, t, c, o, i]),
    p = _.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let w = new Set(),
        x = !1;
      if (
        (t.forEach((E) => {
          var P;
          let b = o.routes[E.route.id];
          !b ||
            !b.hasLoader ||
            ((!f.some((R) => R.route.id === E.route.id) &&
              E.route.id in l &&
              (P = a[E.route.id]) != null &&
              P.shouldRevalidate) ||
            b.hasClientLoader
              ? (x = !0)
              : w.add(E.route.id));
        }),
        w.size === 0)
      )
        return [];
      let S = OT(e);
      return (
        x &&
          w.size > 0 &&
          S.searchParams.set(
            "_routes",
            t
              .filter((E) => w.has(E.route.id))
              .map((E) => E.route.id)
              .join(",")
          ),
        [S.pathname + S.search]
      );
    }, [l, i, o, f, t, e, a]),
    g = _.useMemo(() => AT(h, o), [h, o]),
    y = VT(h);
  return _.createElement(
    _.Fragment,
    null,
    p.map((w) =>
      _.createElement("link", {
        key: w,
        rel: "prefetch",
        as: "fetch",
        href: w,
        ...n,
      })
    ),
    g.map((w) =>
      _.createElement("link", { key: w, rel: "modulepreload", href: w, ...n })
    ),
    y.map(({ key: w, link: x }) => _.createElement("link", { key: w, ...x }))
  );
}
function zT(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var z0 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  z0 && (window.__reactRouterVersion = "7.1.3");
} catch {}
function UT(e, t) {
  return Rk({
    basename: t == null ? void 0 : t.basename,
    future: t == null ? void 0 : t.future,
    history: JC({ window: t == null ? void 0 : t.window }),
    hydrationData: $T(),
    routes: e,
    mapRouteProperties: fT,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function $T() {
  let e = window == null ? void 0 : window.__staticRouterHydrationData;
  return e && e.errors && (e = { ...e, errors: WT(e.errors) }), e;
}
function WT(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [i, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[i] = new Pc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let a = window[o.__subType];
        if (typeof a == "function")
          try {
            let l = new a(o.message);
            (l.stack = ""), (n[i] = l);
          } catch {}
      }
      if (n[i] == null) {
        let a = new Error(o.message);
        (a.stack = ""), (n[i] = a);
      }
    } else n[i] = o;
  return n;
}
var U0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sr = _.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: i = "none",
      relative: o,
      reloadDocument: a,
      replace: l,
      state: c,
      target: f,
      to: h,
      preventScrollReset: p,
      viewTransition: g,
      ...y
    },
    w
  ) {
    let { basename: x } = _.useContext(qr),
      S = typeof h == "string" && U0.test(h),
      E,
      b = !1;
    if (typeof h == "string" && S && ((E = h), z0))
      try {
        let Y = new URL(window.location.href),
          Q = h.startsWith("//") ? new URL(Y.protocol + h) : new URL(h),
          ce = _r(Q.pathname, x);
        Q.origin === Y.origin && ce != null
          ? (h = ce + Q.search + Q.hash)
          : (b = !0);
      } catch {
        sn(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let P = qk(h, { relative: o }),
      [R, j, T] = FT(i, y),
      M = GT(h, {
        replace: l,
        state: c,
        target: f,
        preventScrollReset: p,
        relative: o,
        viewTransition: g,
      });
    function V(Y) {
      t && t(Y), Y.defaultPrevented || M(Y);
    }
    let F = _.createElement("a", {
      ...y,
      ...T,
      href: E || P,
      onClick: b || a ? t : V,
      ref: zT(w, j),
      target: f,
      "data-discover": !S && n === "render" ? "true" : void 0,
    });
    return R && !S
      ? _.createElement(_.Fragment, null, F, _.createElement(IT, { page: P }))
      : F;
  });
sr.displayName = "Link";
var HT = _.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: i = "",
    end: o = !1,
    style: a,
    to: l,
    viewTransition: c,
    children: f,
    ...h
  },
  p
) {
  let g = Ll(l, { relative: h.relative }),
    y = Ys(),
    w = _.useContext(Dl),
    { navigator: x, basename: S } = _.useContext(qr),
    E = w != null && JT(g) && c === !0,
    b = x.encodeLocation ? x.encodeLocation(g).pathname : g.pathname,
    P = y.pathname,
    R =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  n ||
    ((P = P.toLowerCase()),
    (R = R ? R.toLowerCase() : null),
    (b = b.toLowerCase())),
    R && S && (R = _r(R, S) || R);
  const j = b !== "/" && b.endsWith("/") ? b.length - 1 : b.length;
  let T = P === b || (!o && P.startsWith(b) && P.charAt(j) === "/"),
    M =
      R != null &&
      (R === b || (!o && R.startsWith(b) && R.charAt(b.length) === "/")),
    V = { isActive: T, isPending: M, isTransitioning: E },
    F = T ? t : void 0,
    Y;
  typeof i == "function"
    ? (Y = i(V))
    : (Y = [
        i,
        T ? "active" : null,
        M ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Q = typeof a == "function" ? a(V) : a;
  return _.createElement(
    sr,
    {
      ...h,
      "aria-current": F,
      className: Y,
      ref: p,
      style: Q,
      to: l,
      viewTransition: c,
    },
    typeof f == "function" ? f(V) : f
  );
});
HT.displayName = "NavLink";
var ZT = _.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: i,
      replace: o,
      state: a,
      method: l = hc,
      action: c,
      onSubmit: f,
      relative: h,
      preventScrollReset: p,
      viewTransition: g,
      ...y
    },
    w
  ) => {
    let x = XT(),
      S = QT(c, { relative: h }),
      E = l.toLowerCase() === "get" ? "get" : "post",
      b = typeof c == "string" && U0.test(c),
      P = (R) => {
        if ((f && f(R), R.defaultPrevented)) return;
        R.preventDefault();
        let j = R.nativeEvent.submitter,
          T = (j == null ? void 0 : j.getAttribute("formmethod")) || l;
        x(j || R.currentTarget, {
          fetcherKey: t,
          method: T,
          navigate: n,
          replace: o,
          state: a,
          relative: h,
          preventScrollReset: p,
          viewTransition: g,
        });
      };
    return _.createElement("form", {
      ref: w,
      method: E,
      action: S,
      onSubmit: i ? f : P,
      ...y,
      "data-discover": !b && e === "render" ? "true" : void 0,
    });
  }
);
ZT.displayName = "Form";
function KT(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $0(e) {
  let t = _.useContext(qs);
  return st(t, KT(e)), t;
}
function GT(
  e,
  {
    target: t,
    replace: n,
    state: i,
    preventScrollReset: o,
    relative: a,
    viewTransition: l,
  } = {}
) {
  let c = Yk(),
    f = Ys(),
    h = Ll(e, { relative: a });
  return _.useCallback(
    (p) => {
      if (ET(p, t)) {
        p.preventDefault();
        let g = n !== void 0 ? n : ts(f) === ts(h);
        c(e, {
          replace: g,
          state: i,
          preventScrollReset: o,
          relative: a,
          viewTransition: l,
        });
      }
    },
    [f, c, h, n, i, t, e, o, a, l]
  );
}
var qT = 0,
  YT = () => `__${String(++qT)}__`;
function XT() {
  let { router: e } = $0("useSubmit"),
    { basename: t } = _.useContext(qr),
    n = uT();
  return _.useCallback(
    async (i, o = {}) => {
      let { action: a, method: l, encType: c, formData: f, body: h } = kT(i, t);
      if (o.navigate === !1) {
        let p = o.fetcherKey || YT();
        await e.fetch(p, n, o.action || a, {
          preventScrollReset: o.preventScrollReset,
          formData: f,
          body: h,
          formMethod: o.method || l,
          formEncType: o.encType || c,
          flushSync: o.flushSync,
        });
      } else
        await e.navigate(o.action || a, {
          preventScrollReset: o.preventScrollReset,
          formData: f,
          body: h,
          formMethod: o.method || l,
          formEncType: o.encType || c,
          replace: o.replace,
          state: o.state,
          fromRouteId: n,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [e, t, n]
  );
}
function QT(e, { relative: t } = {}) {
  let { basename: n } = _.useContext(qr),
    i = _.useContext(Yr);
  st(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1),
    a = { ...Ll(e || ".", { relative: t }) },
    l = Ys();
  if (e == null) {
    a.search = l.search;
    let c = new URLSearchParams(a.search),
      f = c.getAll("index");
    if (f.some((p) => p === "")) {
      c.delete("index"),
        f.filter((g) => g).forEach((g) => c.append("index", g));
      let p = c.toString();
      a.search = p ? `?${p}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (a.pathname = a.pathname === "/" ? n : zr([n, a.pathname])),
    ts(a)
  );
}
function JT(e, t = {}) {
  let n = _.useContext(Up);
  st(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = $0("useViewTransitionState"),
    o = Ll(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let a = _r(n.currentLocation.pathname, i) || n.currentLocation.pathname,
    l = _r(n.nextLocation.pathname, i) || n.nextLocation.pathname;
  return Tc(o.pathname, l) != null || Tc(o.pathname, a) != null;
}
new TextEncoder();
var id = k0();
const eP = C0(id);
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tP(e) {
  return _.createElement(pT, { flushSync: id.flushSync, ...e });
}
function W0(e) {
  var t,
    n,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = W0(e[t])) && (i && (i += " "), (i += n));
    } else for (n in e) e[n] && (i && (i += " "), (i += n));
  return i;
}
function H0() {
  for (var e, t, n = 0, i = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = W0(e)) && (i && (i += " "), (i += t));
  return i;
}
const Gp = "-",
  nP = (e) => {
    const t = iP(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = e;
    return {
      getClassGroupId: (l) => {
        const c = l.split(Gp);
        return c[0] === "" && c.length !== 1 && c.shift(), Z0(c, t) || rP(l);
      },
      getConflictingClassGroupIds: (l, c) => {
        const f = n[l] || [];
        return c && i[l] ? [...f, ...i[l]] : f;
      },
    };
  },
  Z0 = (e, t) => {
    var l;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      i = t.nextPart.get(n),
      o = i ? Z0(e.slice(1), i) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const a = e.join(Gp);
    return (l = t.validators.find(({ validator: c }) => c(a))) == null
      ? void 0
      : l.classGroupId;
  },
  ix = /^\[(.+)\]$/,
  rP = (e) => {
    if (ix.test(e)) {
      const t = ix.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  iP = (e) => {
    const { theme: t, prefix: n } = e,
      i = { nextPart: new Map(), validators: [] };
    return (
      oP(Object.entries(e.classGroups), n).forEach(([a, l]) => {
        Qh(l, i, a, t);
      }),
      i
    );
  },
  Qh = (e, t, n, i) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const a = o === "" ? t : sx(t, o);
        a.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (sP(o)) {
          Qh(o(i), t, n, i);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([a, l]) => {
        Qh(l, sx(t, a), n, i);
      });
    });
  },
  sx = (e, t) => {
    let n = e;
    return (
      t.split(Gp).forEach((i) => {
        n.nextPart.has(i) ||
          n.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(i));
      }),
      n
    );
  },
  sP = (e) => e.isThemeGetter,
  oP = (e, t) =>
    t
      ? e.map(([n, i]) => {
          const o = i.map((a) =>
            typeof a == "string"
              ? t + a
              : typeof a == "object"
              ? Object.fromEntries(
                  Object.entries(a).map(([l, c]) => [t + l, c])
                )
              : a
          );
          return [n, o];
        })
      : e,
  aP = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      i = new Map();
    const o = (a, l) => {
      n.set(a, l), t++, t > e && ((t = 0), (i = n), (n = new Map()));
    };
    return {
      get(a) {
        let l = n.get(a);
        if (l !== void 0) return l;
        if ((l = i.get(a)) !== void 0) return o(a, l), l;
      },
      set(a, l) {
        n.has(a) ? n.set(a, l) : o(a, l);
      },
    };
  },
  K0 = "!",
  lP = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      i = t.length === 1,
      o = t[0],
      a = t.length,
      l = (c) => {
        const f = [];
        let h = 0,
          p = 0,
          g;
        for (let E = 0; E < c.length; E++) {
          let b = c[E];
          if (h === 0) {
            if (b === o && (i || c.slice(E, E + a) === t)) {
              f.push(c.slice(p, E)), (p = E + a);
              continue;
            }
            if (b === "/") {
              g = E;
              continue;
            }
          }
          b === "[" ? h++ : b === "]" && h--;
        }
        const y = f.length === 0 ? c : c.substring(p),
          w = y.startsWith(K0),
          x = w ? y.substring(1) : y,
          S = g && g > p ? g - p : void 0;
        return {
          modifiers: f,
          hasImportantModifier: w,
          baseClassName: x,
          maybePostfixModifierPosition: S,
        };
      };
    return n ? (c) => n({ className: c, parseClassName: l }) : l;
  },
  uP = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((i) => {
        i[0] === "[" ? (t.push(...n.sort(), i), (n = [])) : n.push(i);
      }),
      t.push(...n.sort()),
      t
    );
  },
  cP = (e) => ({ cache: aP(e.cacheSize), parseClassName: lP(e), ...nP(e) }),
  dP = /\s+/,
  fP = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: i,
        getConflictingClassGroupIds: o,
      } = t,
      a = [],
      l = e.trim().split(dP);
    let c = "";
    for (let f = l.length - 1; f >= 0; f -= 1) {
      const h = l[f],
        {
          modifiers: p,
          hasImportantModifier: g,
          baseClassName: y,
          maybePostfixModifierPosition: w,
        } = n(h);
      let x = !!w,
        S = i(x ? y.substring(0, w) : y);
      if (!S) {
        if (!x) {
          c = h + (c.length > 0 ? " " + c : c);
          continue;
        }
        if (((S = i(y)), !S)) {
          c = h + (c.length > 0 ? " " + c : c);
          continue;
        }
        x = !1;
      }
      const E = uP(p).join(":"),
        b = g ? E + K0 : E,
        P = b + S;
      if (a.includes(P)) continue;
      a.push(P);
      const R = o(S, x);
      for (let j = 0; j < R.length; ++j) {
        const T = R[j];
        a.push(b + T);
      }
      c = h + (c.length > 0 ? " " + c : c);
    }
    return c;
  };
function hP() {
  let e = 0,
    t,
    n,
    i = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = G0(t)) && (i && (i += " "), (i += n));
  return i;
}
const G0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (t = G0(e[i])) && (n && (n += " "), (n += t));
  return n;
};
function pP(e, ...t) {
  let n,
    i,
    o,
    a = l;
  function l(f) {
    const h = t.reduce((p, g) => g(p), e());
    return (n = cP(h)), (i = n.cache.get), (o = n.cache.set), (a = c), c(f);
  }
  function c(f) {
    const h = i(f);
    if (h) return h;
    const p = fP(f, n);
    return o(f, p), p;
  }
  return function () {
    return a(hP.apply(null, arguments));
  };
}
const Ct = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  q0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  mP = /^\d+\/\d+$/,
  gP = new Set(["px", "full", "screen"]),
  yP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  vP =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  xP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  wP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  SP =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  di = (e) => Fo(e) || gP.has(e) || mP.test(e),
  Gi = (e) => qo(e, "length", RP),
  Fo = (e) => !!e && !Number.isNaN(Number(e)),
  yh = (e) => qo(e, "number", Fo),
  za = (e) => !!e && Number.isInteger(Number(e)),
  bP = (e) => e.endsWith("%") && Fo(e.slice(0, -1)),
  Qe = (e) => q0.test(e),
  qi = (e) => yP.test(e),
  EP = new Set(["length", "size", "percentage"]),
  _P = (e) => qo(e, EP, Y0),
  CP = (e) => qo(e, "position", Y0),
  kP = new Set(["image", "url"]),
  TP = (e) => qo(e, kP, NP),
  PP = (e) => qo(e, "", AP),
  Ua = () => !0,
  qo = (e, t, n) => {
    const i = q0.exec(e);
    return i
      ? i[1]
        ? typeof t == "string"
          ? i[1] === t
          : t.has(i[1])
        : n(i[2])
      : !1;
  },
  RP = (e) => vP.test(e) && !xP.test(e),
  Y0 = () => !1,
  AP = (e) => wP.test(e),
  NP = (e) => SP.test(e),
  jP = () => {
    const e = Ct("colors"),
      t = Ct("spacing"),
      n = Ct("blur"),
      i = Ct("brightness"),
      o = Ct("borderColor"),
      a = Ct("borderRadius"),
      l = Ct("borderSpacing"),
      c = Ct("borderWidth"),
      f = Ct("contrast"),
      h = Ct("grayscale"),
      p = Ct("hueRotate"),
      g = Ct("invert"),
      y = Ct("gap"),
      w = Ct("gradientColorStops"),
      x = Ct("gradientColorStopPositions"),
      S = Ct("inset"),
      E = Ct("margin"),
      b = Ct("opacity"),
      P = Ct("padding"),
      R = Ct("saturate"),
      j = Ct("scale"),
      T = Ct("sepia"),
      M = Ct("skew"),
      V = Ct("space"),
      F = Ct("translate"),
      Y = () => ["auto", "contain", "none"],
      Q = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ce = () => ["auto", Qe, t],
      X = () => [Qe, t],
      ie = () => ["", di, Gi],
      he = () => ["auto", Fo, Qe],
      pe = () => [
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
      me = () => ["solid", "dashed", "dotted", "double", "none"],
      le = () => [
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
      H = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      J = () => ["", "0", Qe],
      ee = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      O = () => [Fo, Qe];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ua],
        spacing: [di, Gi],
        blur: ["none", "", qi, Qe],
        brightness: O(),
        borderColor: [e],
        borderRadius: ["none", "", "full", qi, Qe],
        borderSpacing: X(),
        borderWidth: ie(),
        contrast: O(),
        grayscale: J(),
        hueRotate: O(),
        invert: J(),
        gap: X(),
        gradientColorStops: [e],
        gradientColorStopPositions: [bP, Gi],
        inset: ce(),
        margin: ce(),
        opacity: O(),
        padding: X(),
        saturate: O(),
        scale: O(),
        sepia: J(),
        skew: O(),
        space: X(),
        translate: X(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Qe] }],
        container: ["container"],
        columns: [{ columns: [qi] }],
        "break-after": [{ "break-after": ee() }],
        "break-before": [{ "break-before": ee() }],
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
        "object-position": [{ object: [...pe(), Qe] }],
        overflow: [{ overflow: Q() }],
        "overflow-x": [{ "overflow-x": Q() }],
        "overflow-y": [{ "overflow-y": Q() }],
        overscroll: [{ overscroll: Y() }],
        "overscroll-x": [{ "overscroll-x": Y() }],
        "overscroll-y": [{ "overscroll-y": Y() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [S] }],
        "inset-x": [{ "inset-x": [S] }],
        "inset-y": [{ "inset-y": [S] }],
        start: [{ start: [S] }],
        end: [{ end: [S] }],
        top: [{ top: [S] }],
        right: [{ right: [S] }],
        bottom: [{ bottom: [S] }],
        left: [{ left: [S] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", za, Qe] }],
        basis: [{ basis: ce() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Qe] }],
        grow: [{ grow: J() }],
        shrink: [{ shrink: J() }],
        order: [{ order: ["first", "last", "none", za, Qe] }],
        "grid-cols": [{ "grid-cols": [Ua] }],
        "col-start-end": [{ col: ["auto", { span: ["full", za, Qe] }, Qe] }],
        "col-start": [{ "col-start": he() }],
        "col-end": [{ "col-end": he() }],
        "grid-rows": [{ "grid-rows": [Ua] }],
        "row-start-end": [{ row: ["auto", { span: [za, Qe] }, Qe] }],
        "row-start": [{ "row-start": he() }],
        "row-end": [{ "row-end": he() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Qe] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Qe] }],
        gap: [{ gap: [y] }],
        "gap-x": [{ "gap-x": [y] }],
        "gap-y": [{ "gap-y": [y] }],
        "justify-content": [{ justify: ["normal", ...H()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...H(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...H(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [P] }],
        px: [{ px: [P] }],
        py: [{ py: [P] }],
        ps: [{ ps: [P] }],
        pe: [{ pe: [P] }],
        pt: [{ pt: [P] }],
        pr: [{ pr: [P] }],
        pb: [{ pb: [P] }],
        pl: [{ pl: [P] }],
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [V] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [V] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Qe, t] }],
        "min-w": [{ "min-w": [Qe, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Qe,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [qi] },
              qi,
            ],
          },
        ],
        h: [{ h: [Qe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Qe, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Qe, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Qe, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", qi, Gi] }],
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
              yh,
            ],
          },
        ],
        "font-family": [{ font: [Ua] }],
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
              Qe,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Fo, yh] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              di,
              Qe,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Qe] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Qe] }],
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
        "text-decoration-style": [{ decoration: [...me(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", di, Gi] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", di, Qe] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
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
              Qe,
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
        content: [{ content: ["none", Qe] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [b] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...pe(), CP] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", _P] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              TP,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [a] }],
        "rounded-s": [{ "rounded-s": [a] }],
        "rounded-e": [{ "rounded-e": [a] }],
        "rounded-t": [{ "rounded-t": [a] }],
        "rounded-r": [{ "rounded-r": [a] }],
        "rounded-b": [{ "rounded-b": [a] }],
        "rounded-l": [{ "rounded-l": [a] }],
        "rounded-ss": [{ "rounded-ss": [a] }],
        "rounded-se": [{ "rounded-se": [a] }],
        "rounded-ee": [{ "rounded-ee": [a] }],
        "rounded-es": [{ "rounded-es": [a] }],
        "rounded-tl": [{ "rounded-tl": [a] }],
        "rounded-tr": [{ "rounded-tr": [a] }],
        "rounded-br": [{ "rounded-br": [a] }],
        "rounded-bl": [{ "rounded-bl": [a] }],
        "border-w": [{ border: [c] }],
        "border-w-x": [{ "border-x": [c] }],
        "border-w-y": [{ "border-y": [c] }],
        "border-w-s": [{ "border-s": [c] }],
        "border-w-e": [{ "border-e": [c] }],
        "border-w-t": [{ "border-t": [c] }],
        "border-w-r": [{ "border-r": [c] }],
        "border-w-b": [{ "border-b": [c] }],
        "border-w-l": [{ "border-l": [c] }],
        "border-opacity": [{ "border-opacity": [b] }],
        "border-style": [{ border: [...me(), "hidden"] }],
        "divide-x": [{ "divide-x": [c] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [c] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: me() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...me()] }],
        "outline-offset": [{ "outline-offset": [di, Qe] }],
        "outline-w": [{ outline: [di, Gi] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ie() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [di, Gi] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", qi, PP] }],
        "shadow-color": [{ shadow: [Ua] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [
          { "mix-blend": [...le(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": le() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [i] }],
        contrast: [{ contrast: [f] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", qi, Qe] }],
        grayscale: [{ grayscale: [h] }],
        "hue-rotate": [{ "hue-rotate": [p] }],
        invert: [{ invert: [g] }],
        saturate: [{ saturate: [R] }],
        sepia: [{ sepia: [T] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [i] }],
        "backdrop-contrast": [{ "backdrop-contrast": [f] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [h] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
        "backdrop-invert": [{ "backdrop-invert": [g] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [R] }],
        "backdrop-sepia": [{ "backdrop-sepia": [T] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [l] }],
        "border-spacing-x": [{ "border-spacing-x": [l] }],
        "border-spacing-y": [{ "border-spacing-y": [l] }],
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
              Qe,
            ],
          },
        ],
        duration: [{ duration: O() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Qe] }],
        delay: [{ delay: O() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Qe] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [j] }],
        "scale-x": [{ "scale-x": [j] }],
        "scale-y": [{ "scale-y": [j] }],
        rotate: [{ rotate: [za, Qe] }],
        "translate-x": [{ "translate-x": [F] }],
        "translate-y": [{ "translate-y": [F] }],
        "skew-x": [{ "skew-x": [M] }],
        "skew-y": [{ "skew-y": [M] }],
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
              Qe,
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
              Qe,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", Qe] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [di, Gi, yh] }],
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
  DP = pP(jP);
function ot(...e) {
  return DP(H0(e));
}
const X0 = ({ className: e }) =>
  C.jsx("div", {
    className: ot("h-16 w-[184px]", e),
    children: C.jsx("img", {
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
 */ const OP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Q0 = (...e) =>
    e
      .filter((t, n, i) => !!t && t.trim() !== "" && i.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var LP = {
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
 */ const MP = _.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: a,
      iconNode: l,
      ...c
    },
    f
  ) =>
    _.createElement(
      "svg",
      {
        ref: f,
        ...LP,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: i ? (Number(n) * 24) / Number(t) : n,
        className: Q0("lucide", o),
        ...c,
      },
      [
        ...l.map(([h, p]) => _.createElement(h, p)),
        ...(Array.isArray(a) ? a : [a]),
      ]
    )
);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ml = (e, t) => {
  const n = _.forwardRef(({ className: i, ...o }, a) =>
    _.createElement(MP, {
      ref: a,
      iconNode: t,
      className: Q0(`lucide-${OP(e)}`, i),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FP = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  J0 = Ml("ArrowUpRight", FP);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IP = [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ],
  eS = Ml("Loader", IP);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VP = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  BP = Ml("MapPin", VP);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zP = [
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
  UP = Ml("Smartphone", zP);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $P = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  WP = Ml("Upload", $P);
function ox(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function tS(...e) {
  return (t) => {
    let n = !1;
    const i = e.map((o) => {
      const a = ox(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < i.length; o++) {
          const a = i[o];
          typeof a == "function" ? a() : ox(e[o], null);
        }
      };
  };
}
function Hn(...e) {
  return _.useCallback(tS(...e), e);
}
var zs = _.forwardRef((e, t) => {
  const { children: n, ...i } = e,
    o = _.Children.toArray(n),
    a = o.find(ZP);
  if (a) {
    const l = a.props.children,
      c = o.map((f) =>
        f === a
          ? _.Children.count(l) > 1
            ? _.Children.only(null)
            : _.isValidElement(l)
            ? l.props.children
            : null
          : f
      );
    return C.jsx(Jh, {
      ...i,
      ref: t,
      children: _.isValidElement(l) ? _.cloneElement(l, void 0, c) : null,
    });
  }
  return C.jsx(Jh, { ...i, ref: t, children: n });
});
zs.displayName = "Slot";
var Jh = _.forwardRef((e, t) => {
  const { children: n, ...i } = e;
  if (_.isValidElement(n)) {
    const o = GP(n);
    return _.cloneElement(n, { ...KP(i, n.props), ref: t ? tS(t, o) : o });
  }
  return _.Children.count(n) > 1 ? _.Children.only(null) : null;
});
Jh.displayName = "SlotClone";
var HP = ({ children: e }) => C.jsx(C.Fragment, { children: e });
function ZP(e) {
  return _.isValidElement(e) && e.type === HP;
}
function KP(e, t) {
  const n = { ...t };
  for (const i in t) {
    const o = e[i],
      a = t[i];
    /^on[A-Z]/.test(i)
      ? o && a
        ? (n[i] = (...c) => {
            a(...c), o(...c);
          })
        : o && (n[i] = o)
      : i === "style"
      ? (n[i] = { ...o, ...a })
      : i === "className" && (n[i] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function GP(e) {
  var i, o;
  let t =
      (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : i.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
const ax = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  lx = H0,
  nS = (e, t) => (n) => {
    var i;
    if ((t == null ? void 0 : t.variants) == null)
      return lx(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: a } = t,
      l = Object.keys(o).map((h) => {
        const p = n == null ? void 0 : n[h],
          g = a == null ? void 0 : a[h];
        if (p === null) return null;
        const y = ax(p) || ax(g);
        return o[h][y];
      }),
      c =
        n &&
        Object.entries(n).reduce((h, p) => {
          let [g, y] = p;
          return y === void 0 || (h[g] = y), h;
        }, {}),
      f =
        t == null || (i = t.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((h, p) => {
              let { class: g, className: y, ...w } = p;
              return Object.entries(w).every((x) => {
                let [S, E] = x;
                return Array.isArray(E)
                  ? E.includes({ ...a, ...c }[S])
                  : { ...a, ...c }[S] === E;
              })
                ? [...h, g, y]
                : h;
            }, []);
    return lx(
      e,
      l,
      f,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  qP = nS(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[18px] leading-[140%] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-on_primary shadow hover:bg-primary/90",
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
          lg: "h-[88px] rounded-[2px] px-8 ",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  wn = _.forwardRef(
    ({ className: e, variant: t, size: n, asChild: i = !1, ...o }, a) => {
      const l = i ? zs : "button";
      return C.jsx(l, {
        className: ot(qP({ variant: t, size: n, className: e })),
        ref: a,
        ...o,
      });
    }
  );
wn.displayName = "Button";
const YP = [
    { title: "Медиа", link: "" },
    { title: "Контакты", link: "" },
  ],
  XP = [
    { title: "О выставке", link: "/about" },
    { title: "Посетителям", link: "" },
    { title: "Экспонентам", link: "" },
  ],
  QP = () =>
    C.jsxs("header", {
      className: "",
      children: [
        C.jsx("div", {
          className:
            "h-12 bg-primary text-on_primary flex items-center overflow-hidden",
          children: C.jsxs(Zn, {
            className: "flex items-center justify-between",
            children: [
              C.jsxs("div", {
                className: "gap-8 flex items-center justify-between",
                children: [
                  C.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      C.jsx(BP, {}),
                      C.jsx("h4", {
                        className: "text-sm",
                        children: "Ашхабад, Туркменистан",
                      }),
                    ],
                  }),
                  C.jsx("nav", {
                    className: "flex items-center gap-6",
                    children: YP.map(({ title: e, link: t }) =>
                      C.jsx(sr, { className: "py-2", to: t, children: e }, e)
                    ),
                  }),
                ],
              }),
              C.jsxs("div", {
                className: "flex items-center gap-6",
                children: [
                  C.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      C.jsx(UP, { size: 16, strokeWidth: "3px" }),
                      C.jsx("h4", {
                        className: "text-sm",
                        children: "+993(62) 00-62-00",
                      }),
                    ],
                  }),
                  C.jsx(ON, {}),
                ],
              }),
            ],
          }),
        }),
        C.jsx("div", {
          className:
            "bg-white py-2 flex items-center justify-between h-20 overflow-hidden",
          children: C.jsxs(Zn, {
            className: "flex items-center justify-between ",
            children: [
              C.jsxs("div", {
                className: "flex items-center gap-8",
                children: [
                  C.jsx(sr, { to: "/", children: C.jsx(X0, {}) }),
                  C.jsx("nav", {
                    className: "flex items-center gap-6",
                    children: XP.map(({ title: e, link: t }) =>
                      C.jsxs(
                        sr,
                        {
                          to: t,
                          className: "flex items-center gap-2",
                          children: [
                            e,
                            " ",
                            C.jsx("img", { src: "/chevron.svg" }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
              C.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  C.jsxs(wn, {
                    variant: "outline",
                    size: "sm",
                    children: ["QACIS 2025", C.jsx(J0, {})],
                  }),
                  C.jsx(wn, {
                    variant: "secondary",
                    size: "sm",
                    className:
                      "bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90",
                    children: "Официальная поддержка",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  JP = () =>
    C.jsx("footer", {
      className: "py-5 bg-bg_surface_container",
      children: C.jsxs(Zn, {
        className: "flex flex-col gap-6",
        children: [
          C.jsxs("div", {
            className: "flex items-end justify-between",
            children: [
              C.jsx(X0, {}),
              C.jsxs("div", {
                className: "flex items-center gap-6",
                children: [
                  C.jsx("img", { src: "/inst.svg" }),
                  C.jsx("img", { src: "/in.svg" }),
                  C.jsx("img", { src: "/x.svg" }),
                ],
              }),
            ],
          }),
          C.jsx("hr", { className: "border-outline_v" }),
          C.jsx("h5", {
            className: "text-base text-center normal  text-on_surface_v",
            children: "©2025 Все права защищены",
          }),
        ],
      }),
    });
function on(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Yo(e, t = []) {
  let n = [];
  function i(a, l) {
    const c = _.createContext(l),
      f = n.length;
    n = [...n, l];
    const h = (g) => {
      var b;
      const { scope: y, children: w, ...x } = g,
        S = ((b = y == null ? void 0 : y[e]) == null ? void 0 : b[f]) || c,
        E = _.useMemo(() => x, Object.values(x));
      return C.jsx(S.Provider, { value: E, children: w });
    };
    h.displayName = a + "Provider";
    function p(g, y) {
      var S;
      const w = ((S = y == null ? void 0 : y[e]) == null ? void 0 : S[f]) || c,
        x = _.useContext(w);
      if (x) return x;
      if (l !== void 0) return l;
      throw new Error(`\`${g}\` must be used within \`${a}\``);
    }
    return [h, p];
  }
  const o = () => {
    const a = n.map((l) => _.createContext(l));
    return function (c) {
      const f = (c == null ? void 0 : c[e]) || a;
      return _.useMemo(() => ({ [`__scope${e}`]: { ...c, [e]: f } }), [c, f]);
    };
  };
  return (o.scopeName = e), [i, eR(o, ...t)];
}
function eR(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const i = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (a) {
      const l = i.reduce((c, { useScope: f, scopeName: h }) => {
        const g = f(a)[`__scope${h}`];
        return { ...c, ...g };
      }, {});
      return _.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var tR = [
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
  bn = tR.reduce((e, t) => {
    const n = _.forwardRef((i, o) => {
      const { asChild: a, ...l } = i,
        c = a ? zs : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        C.jsx(c, { ...l, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function nR(e, t) {
  e && id.flushSync(() => e.dispatchEvent(t));
}
function vi(e) {
  const t = _.useRef(e);
  return (
    _.useEffect(() => {
      t.current = e;
    }),
    _.useMemo(
      () =>
        (...n) => {
          var i;
          return (i = t.current) == null ? void 0 : i.call(t, ...n);
        },
      []
    )
  );
}
function rR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = vi(e);
  _.useEffect(() => {
    const i = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", i, { capture: !0 }),
      () => t.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [n, t]);
}
var iR = "DismissableLayer",
  ep = "dismissableLayer.update",
  sR = "dismissableLayer.pointerDownOutside",
  oR = "dismissableLayer.focusOutside",
  ux,
  rS = _.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  iS = _.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: l,
        onDismiss: c,
        ...f
      } = e,
      h = _.useContext(rS),
      [p, g] = _.useState(null),
      y =
        (p == null ? void 0 : p.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, w] = _.useState({}),
      x = Hn(t, (V) => g(V)),
      S = Array.from(h.layers),
      [E] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = S.indexOf(E),
      P = p ? S.indexOf(p) : -1,
      R = h.layersWithOutsidePointerEventsDisabled.size > 0,
      j = P >= b,
      T = uR((V) => {
        const F = V.target,
          Y = [...h.branches].some((Q) => Q.contains(F));
        !j ||
          Y ||
          (o == null || o(V),
          l == null || l(V),
          V.defaultPrevented || c == null || c());
      }, y),
      M = cR((V) => {
        const F = V.target;
        [...h.branches].some((Q) => Q.contains(F)) ||
          (a == null || a(V),
          l == null || l(V),
          V.defaultPrevented || c == null || c());
      }, y);
    return (
      rR((V) => {
        P === h.layers.size - 1 &&
          (i == null || i(V),
          !V.defaultPrevented && c && (V.preventDefault(), c()));
      }, y),
      _.useEffect(() => {
        if (p)
          return (
            n &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ux = y.body.style.pointerEvents),
                (y.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(p)),
            h.layers.add(p),
            cx(),
            () => {
              n &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (y.body.style.pointerEvents = ux);
            }
          );
      }, [p, y, n, h]),
      _.useEffect(
        () => () => {
          p &&
            (h.layers.delete(p),
            h.layersWithOutsidePointerEventsDisabled.delete(p),
            cx());
        },
        [p, h]
      ),
      _.useEffect(() => {
        const V = () => w({});
        return (
          document.addEventListener(ep, V),
          () => document.removeEventListener(ep, V)
        );
      }, []),
      C.jsx(bn.div, {
        ...f,
        ref: x,
        style: {
          pointerEvents: R ? (j ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: on(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: on(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: on(
          e.onPointerDownCapture,
          T.onPointerDownCapture
        ),
      })
    );
  });
iS.displayName = iR;
var aR = "DismissableLayerBranch",
  lR = _.forwardRef((e, t) => {
    const n = _.useContext(rS),
      i = _.useRef(null),
      o = Hn(t, i);
    return (
      _.useEffect(() => {
        const a = i.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      C.jsx(bn.div, { ...e, ref: o })
    );
  });
lR.displayName = aR;
function uR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = vi(e),
    i = _.useRef(!1),
    o = _.useRef(() => {});
  return (
    _.useEffect(() => {
      const a = (c) => {
          if (c.target && !i.current) {
            let f = function () {
              sS(sR, n, h, { discrete: !0 });
            };
            const h = { originalEvent: c };
            c.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = f),
                t.addEventListener("click", o.current, { once: !0 }))
              : f();
          } else t.removeEventListener("click", o.current);
          i.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function cR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = vi(e),
    i = _.useRef(!1);
  return (
    _.useEffect(() => {
      const o = (a) => {
        a.target &&
          !i.current &&
          sS(oR, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function cx() {
  const e = new CustomEvent(ep);
  document.dispatchEvent(e);
}
function sS(e, t, n, { discrete: i }) {
  const o = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    i ? nR(o, a) : o.dispatchEvent(a);
}
var vh = 0;
function dR() {
  _.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? dx()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? dx()),
      vh++,
      () => {
        vh === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          vh--;
      }
    );
  }, []);
}
function dx() {
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
var xh = "focusScope.autoFocusOnMount",
  wh = "focusScope.autoFocusOnUnmount",
  fx = { bubbles: !1, cancelable: !0 },
  fR = "FocusScope",
  oS = _.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: i = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        ...l
      } = e,
      [c, f] = _.useState(null),
      h = vi(o),
      p = vi(a),
      g = _.useRef(null),
      y = Hn(t, (S) => f(S)),
      w = _.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    _.useEffect(() => {
      if (i) {
        let S = function (R) {
            if (w.paused || !c) return;
            const j = R.target;
            c.contains(j) ? (g.current = j) : Xi(g.current, { select: !0 });
          },
          E = function (R) {
            if (w.paused || !c) return;
            const j = R.relatedTarget;
            j !== null && (c.contains(j) || Xi(g.current, { select: !0 }));
          },
          b = function (R) {
            if (document.activeElement === document.body)
              for (const T of R) T.removedNodes.length > 0 && Xi(c);
          };
        document.addEventListener("focusin", S),
          document.addEventListener("focusout", E);
        const P = new MutationObserver(b);
        return (
          c && P.observe(c, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", S),
              document.removeEventListener("focusout", E),
              P.disconnect();
          }
        );
      }
    }, [i, c, w.paused]),
      _.useEffect(() => {
        if (c) {
          px.add(w);
          const S = document.activeElement;
          if (!c.contains(S)) {
            const b = new CustomEvent(xh, fx);
            c.addEventListener(xh, h),
              c.dispatchEvent(b),
              b.defaultPrevented ||
                (hR(vR(aS(c)), { select: !0 }),
                document.activeElement === S && Xi(c));
          }
          return () => {
            c.removeEventListener(xh, h),
              setTimeout(() => {
                const b = new CustomEvent(wh, fx);
                c.addEventListener(wh, p),
                  c.dispatchEvent(b),
                  b.defaultPrevented || Xi(S ?? document.body, { select: !0 }),
                  c.removeEventListener(wh, p),
                  px.remove(w);
              }, 0);
          };
        }
      }, [c, h, p, w]);
    const x = _.useCallback(
      (S) => {
        if ((!n && !i) || w.paused) return;
        const E = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey,
          b = document.activeElement;
        if (E && b) {
          const P = S.currentTarget,
            [R, j] = pR(P);
          R && j
            ? !S.shiftKey && b === j
              ? (S.preventDefault(), n && Xi(R, { select: !0 }))
              : S.shiftKey &&
                b === R &&
                (S.preventDefault(), n && Xi(j, { select: !0 }))
            : b === P && S.preventDefault();
        }
      },
      [n, i, w.paused]
    );
    return C.jsx(bn.div, { tabIndex: -1, ...l, ref: y, onKeyDown: x });
  });
oS.displayName = fR;
function hR(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const i of e)
    if ((Xi(i, { select: t }), document.activeElement !== n)) return;
}
function pR(e) {
  const t = aS(e),
    n = hx(t, e),
    i = hx(t.reverse(), e);
  return [n, i];
}
function aS(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const o = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || o
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function hx(e, t) {
  for (const n of e) if (!mR(n, { upTo: t })) return n;
}
function mR(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function gR(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Xi(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && gR(e) && t && e.select();
  }
}
var px = yR();
function yR() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = mx(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = mx(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function mx(e, t) {
  const n = [...e],
    i = n.indexOf(t);
  return i !== -1 && n.splice(i, 1), n;
}
function vR(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Us =
    globalThis != null && globalThis.document ? _.useLayoutEffect : () => {},
  xR = ZC.useId || (() => {}),
  wR = 0;
function lS(e) {
  const [t, n] = _.useState(xR());
  return (
    Us(() => {
      n((i) => i ?? String(wR++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const SR = ["top", "right", "bottom", "left"],
  ns = Math.min,
  Bn = Math.max,
  Rc = Math.round,
  tc = Math.floor,
  Ur = (e) => ({ x: e, y: e }),
  bR = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ER = { start: "end", end: "start" };
function tp(e, t, n) {
  return Bn(e, ns(t, n));
}
function xi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wi(e) {
  return e.split("-")[0];
}
function Xo(e) {
  return e.split("-")[1];
}
function qp(e) {
  return e === "x" ? "y" : "x";
}
function Yp(e) {
  return e === "y" ? "height" : "width";
}
function rs(e) {
  return ["top", "bottom"].includes(wi(e)) ? "y" : "x";
}
function Xp(e) {
  return qp(rs(e));
}
function _R(e, t, n) {
  n === void 0 && (n = !1);
  const i = Xo(e),
    o = Xp(e),
    a = Yp(o);
  let l =
    o === "x"
      ? i === (n ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
      ? "bottom"
      : "top";
  return t.reference[a] > t.floating[a] && (l = Ac(l)), [l, Ac(l)];
}
function CR(e) {
  const t = Ac(e);
  return [np(e), t, np(t)];
}
function np(e) {
  return e.replace(/start|end/g, (t) => ER[t]);
}
function kR(e, t, n) {
  const i = ["left", "right"],
    o = ["right", "left"],
    a = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : i) : t ? i : o;
    case "left":
    case "right":
      return t ? a : l;
    default:
      return [];
  }
}
function TR(e, t, n, i) {
  const o = Xo(e);
  let a = kR(wi(e), n === "start", i);
  return (
    o && ((a = a.map((l) => l + "-" + o)), t && (a = a.concat(a.map(np)))), a
  );
}
function Ac(e) {
  return e.replace(/left|right|bottom|top/g, (t) => bR[t]);
}
function PR(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function uS(e) {
  return typeof e != "number"
    ? PR(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Nc(e) {
  const { x: t, y: n, width: i, height: o } = e;
  return {
    width: i,
    height: o,
    top: n,
    left: t,
    right: t + i,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function gx(e, t, n) {
  let { reference: i, floating: o } = e;
  const a = rs(t),
    l = Xp(t),
    c = Yp(l),
    f = wi(t),
    h = a === "y",
    p = i.x + i.width / 2 - o.width / 2,
    g = i.y + i.height / 2 - o.height / 2,
    y = i[c] / 2 - o[c] / 2;
  let w;
  switch (f) {
    case "top":
      w = { x: p, y: i.y - o.height };
      break;
    case "bottom":
      w = { x: p, y: i.y + i.height };
      break;
    case "right":
      w = { x: i.x + i.width, y: g };
      break;
    case "left":
      w = { x: i.x - o.width, y: g };
      break;
    default:
      w = { x: i.x, y: i.y };
  }
  switch (Xo(t)) {
    case "start":
      w[l] -= y * (n && h ? -1 : 1);
      break;
    case "end":
      w[l] += y * (n && h ? -1 : 1);
      break;
  }
  return w;
}
const RR = async (e, t, n) => {
  const {
      placement: i = "bottom",
      strategy: o = "absolute",
      middleware: a = [],
      platform: l,
    } = n,
    c = a.filter(Boolean),
    f = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: p, y: g } = gx(h, i, f),
    y = i,
    w = {},
    x = 0;
  for (let S = 0; S < c.length; S++) {
    const { name: E, fn: b } = c[S],
      {
        x: P,
        y: R,
        data: j,
        reset: T,
      } = await b({
        x: p,
        y: g,
        initialPlacement: i,
        placement: y,
        strategy: o,
        middlewareData: w,
        rects: h,
        platform: l,
        elements: { reference: e, floating: t },
      });
    (p = P ?? p),
      (g = R ?? g),
      (w = { ...w, [E]: { ...w[E], ...j } }),
      T &&
        x <= 50 &&
        (x++,
        typeof T == "object" &&
          (T.placement && (y = T.placement),
          T.rects &&
            (h =
              T.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : T.rects),
          ({ x: p, y: g } = gx(h, y, f))),
        (S = -1));
  }
  return { x: p, y: g, placement: y, strategy: o, middlewareData: w };
};
async function ll(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: i, y: o, platform: a, rects: l, elements: c, strategy: f } = e,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: g = "floating",
      altBoundary: y = !1,
      padding: w = 0,
    } = xi(t, e),
    x = uS(w),
    E = c[y ? (g === "floating" ? "reference" : "floating") : g],
    b = Nc(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(E))) == null ||
          n
            ? E
            : E.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(c.floating))),
        boundary: h,
        rootBoundary: p,
        strategy: f,
      })
    ),
    P =
      g === "floating"
        ? { x: i, y: o, width: l.floating.width, height: l.floating.height }
        : l.reference,
    R = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(c.floating)),
    j = (await (a.isElement == null ? void 0 : a.isElement(R)))
      ? (await (a.getScale == null ? void 0 : a.getScale(R))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    T = Nc(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: P,
            offsetParent: R,
            strategy: f,
          })
        : P
    );
  return {
    top: (b.top - T.top + x.top) / j.y,
    bottom: (T.bottom - b.bottom + x.bottom) / j.y,
    left: (b.left - T.left + x.left) / j.x,
    right: (T.right - b.right + x.right) / j.x,
  };
}
const AR = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: i,
          placement: o,
          rects: a,
          platform: l,
          elements: c,
          middlewareData: f,
        } = t,
        { element: h, padding: p = 0 } = xi(e, t) || {};
      if (h == null) return {};
      const g = uS(p),
        y = { x: n, y: i },
        w = Xp(o),
        x = Yp(w),
        S = await l.getDimensions(h),
        E = w === "y",
        b = E ? "top" : "left",
        P = E ? "bottom" : "right",
        R = E ? "clientHeight" : "clientWidth",
        j = a.reference[x] + a.reference[w] - y[w] - a.floating[x],
        T = y[w] - a.reference[w],
        M = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
      let V = M ? M[R] : 0;
      (!V || !(await (l.isElement == null ? void 0 : l.isElement(M)))) &&
        (V = c.floating[R] || a.floating[x]);
      const F = j / 2 - T / 2,
        Y = V / 2 - S[x] / 2 - 1,
        Q = ns(g[b], Y),
        ce = ns(g[P], Y),
        X = Q,
        ie = V - S[x] - ce,
        he = V / 2 - S[x] / 2 + F,
        pe = tp(X, he, ie),
        me =
          !f.arrow &&
          Xo(o) != null &&
          he !== pe &&
          a.reference[x] / 2 - (he < X ? Q : ce) - S[x] / 2 < 0,
        le = me ? (he < X ? he - X : he - ie) : 0;
      return {
        [w]: y[w] + le,
        data: {
          [w]: pe,
          centerOffset: he - pe - le,
          ...(me && { alignmentOffset: le }),
        },
        reset: me,
      };
    },
  }),
  NR = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, i;
          const {
              placement: o,
              middlewareData: a,
              rects: l,
              initialPlacement: c,
              platform: f,
              elements: h,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: g = !0,
              fallbackPlacements: y,
              fallbackStrategy: w = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: S = !0,
              ...E
            } = xi(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const b = wi(o),
            P = rs(c),
            R = wi(c) === c,
            j = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)),
            T = y || (R || !S ? [Ac(c)] : CR(c)),
            M = x !== "none";
          !y && M && T.push(...TR(c, S, x, j));
          const V = [c, ...T],
            F = await ll(t, E),
            Y = [];
          let Q = ((i = a.flip) == null ? void 0 : i.overflows) || [];
          if ((p && Y.push(F[b]), g)) {
            const he = _R(o, l, j);
            Y.push(F[he[0]], F[he[1]]);
          }
          if (
            ((Q = [...Q, { placement: o, overflows: Y }]),
            !Y.every((he) => he <= 0))
          ) {
            var ce, X;
            const he = (((ce = a.flip) == null ? void 0 : ce.index) || 0) + 1,
              pe = V[he];
            if (pe)
              return {
                data: { index: he, overflows: Q },
                reset: { placement: pe },
              };
            let me =
              (X = Q.filter((le) => le.overflows[0] <= 0).sort(
                (le, H) => le.overflows[1] - H.overflows[1]
              )[0]) == null
                ? void 0
                : X.placement;
            if (!me)
              switch (w) {
                case "bestFit": {
                  var ie;
                  const le =
                    (ie = Q.filter((H) => {
                      if (M) {
                        const J = rs(H.placement);
                        return J === P || J === "y";
                      }
                      return !0;
                    })
                      .map((H) => [
                        H.placement,
                        H.overflows
                          .filter((J) => J > 0)
                          .reduce((J, ee) => J + ee, 0),
                      ])
                      .sort((H, J) => H[1] - J[1])[0]) == null
                      ? void 0
                      : ie[0];
                  le && (me = le);
                  break;
                }
                case "initialPlacement":
                  me = c;
                  break;
              }
            if (o !== me) return { reset: { placement: me } };
          }
          return {};
        },
      }
    );
  };
function yx(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function vx(e) {
  return SR.some((t) => e[t] >= 0);
}
const jR = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: i = "referenceHidden", ...o } = xi(e, t);
        switch (i) {
          case "referenceHidden": {
            const a = await ll(t, { ...o, elementContext: "reference" }),
              l = yx(a, n.reference);
            return {
              data: { referenceHiddenOffsets: l, referenceHidden: vx(l) },
            };
          }
          case "escaped": {
            const a = await ll(t, { ...o, altBoundary: !0 }),
              l = yx(a, n.floating);
            return { data: { escapedOffsets: l, escaped: vx(l) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function DR(e, t) {
  const { placement: n, platform: i, elements: o } = e,
    a = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)),
    l = wi(n),
    c = Xo(n),
    f = rs(n) === "y",
    h = ["left", "top"].includes(l) ? -1 : 1,
    p = a && f ? -1 : 1,
    g = xi(t, e);
  let {
    mainAxis: y,
    crossAxis: w,
    alignmentAxis: x,
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: g.mainAxis || 0,
        crossAxis: g.crossAxis || 0,
        alignmentAxis: g.alignmentAxis,
      };
  return (
    c && typeof x == "number" && (w = c === "end" ? x * -1 : x),
    f ? { x: w * p, y: y * h } : { x: y * h, y: w * p }
  );
}
const OR = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, i;
          const { x: o, y: a, placement: l, middlewareData: c } = t,
            f = await DR(t, e);
          return l === ((n = c.offset) == null ? void 0 : n.placement) &&
            (i = c.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: o + f.x, y: a + f.y, data: { ...f, placement: l } };
        },
      }
    );
  },
  LR = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: i, placement: o } = t,
            {
              mainAxis: a = !0,
              crossAxis: l = !1,
              limiter: c = {
                fn: (E) => {
                  let { x: b, y: P } = E;
                  return { x: b, y: P };
                },
              },
              ...f
            } = xi(e, t),
            h = { x: n, y: i },
            p = await ll(t, f),
            g = rs(wi(o)),
            y = qp(g);
          let w = h[y],
            x = h[g];
          if (a) {
            const E = y === "y" ? "top" : "left",
              b = y === "y" ? "bottom" : "right",
              P = w + p[E],
              R = w - p[b];
            w = tp(P, w, R);
          }
          if (l) {
            const E = g === "y" ? "top" : "left",
              b = g === "y" ? "bottom" : "right",
              P = x + p[E],
              R = x - p[b];
            x = tp(P, x, R);
          }
          const S = c.fn({ ...t, [y]: w, [g]: x });
          return {
            ...S,
            data: { x: S.x - n, y: S.y - i, enabled: { [y]: a, [g]: l } },
          };
        },
      }
    );
  },
  MR = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: i, placement: o, rects: a, middlewareData: l } = t,
            { offset: c = 0, mainAxis: f = !0, crossAxis: h = !0 } = xi(e, t),
            p = { x: n, y: i },
            g = rs(o),
            y = qp(g);
          let w = p[y],
            x = p[g];
          const S = xi(c, t),
            E =
              typeof S == "number"
                ? { mainAxis: S, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...S };
          if (f) {
            const R = y === "y" ? "height" : "width",
              j = a.reference[y] - a.floating[R] + E.mainAxis,
              T = a.reference[y] + a.reference[R] - E.mainAxis;
            w < j ? (w = j) : w > T && (w = T);
          }
          if (h) {
            var b, P;
            const R = y === "y" ? "width" : "height",
              j = ["top", "left"].includes(wi(o)),
              T =
                a.reference[g] -
                a.floating[R] +
                ((j && ((b = l.offset) == null ? void 0 : b[g])) || 0) +
                (j ? 0 : E.crossAxis),
              M =
                a.reference[g] +
                a.reference[R] +
                (j ? 0 : ((P = l.offset) == null ? void 0 : P[g]) || 0) -
                (j ? E.crossAxis : 0);
            x < T ? (x = T) : x > M && (x = M);
          }
          return { [y]: w, [g]: x };
        },
      }
    );
  },
  FR = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, i;
          const { placement: o, rects: a, platform: l, elements: c } = t,
            { apply: f = () => {}, ...h } = xi(e, t),
            p = await ll(t, h),
            g = wi(o),
            y = Xo(o),
            w = rs(o) === "y",
            { width: x, height: S } = a.floating;
          let E, b;
          g === "top" || g === "bottom"
            ? ((E = g),
              (b =
                y ===
                ((await (l.isRTL == null ? void 0 : l.isRTL(c.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((b = g), (E = y === "end" ? "top" : "bottom"));
          const P = S - p.top - p.bottom,
            R = x - p.left - p.right,
            j = ns(S - p[E], P),
            T = ns(x - p[b], R),
            M = !t.middlewareData.shift;
          let V = j,
            F = T;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (F = R),
            (i = t.middlewareData.shift) != null && i.enabled.y && (V = P),
            M && !y)
          ) {
            const Q = Bn(p.left, 0),
              ce = Bn(p.right, 0),
              X = Bn(p.top, 0),
              ie = Bn(p.bottom, 0);
            w
              ? (F =
                  x - 2 * (Q !== 0 || ce !== 0 ? Q + ce : Bn(p.left, p.right)))
              : (V =
                  S - 2 * (X !== 0 || ie !== 0 ? X + ie : Bn(p.top, p.bottom)));
          }
          await f({ ...t, availableWidth: F, availableHeight: V });
          const Y = await l.getDimensions(c.floating);
          return x !== Y.width || S !== Y.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function sd() {
  return typeof window < "u";
}
function Qo(e) {
  return cS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function zn(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Xr(e) {
  var t;
  return (t = (cS(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function cS(e) {
  return sd() ? e instanceof Node || e instanceof zn(e).Node : !1;
}
function Cr(e) {
  return sd() ? e instanceof Element || e instanceof zn(e).Element : !1;
}
function Zr(e) {
  return sd() ? e instanceof HTMLElement || e instanceof zn(e).HTMLElement : !1;
}
function xx(e) {
  return !sd() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof zn(e).ShadowRoot;
}
function Fl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: o } = kr(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + i + n) &&
    !["inline", "contents"].includes(o)
  );
}
function IR(e) {
  return ["table", "td", "th"].includes(Qo(e));
}
function od(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Qp(e) {
  const t = Jp(),
    n = Cr(e) ? kr(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((i) =>
      n[i] ? n[i] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (i) => (n.willChange || "").includes(i)
    ) ||
    ["paint", "layout", "strict", "content"].some((i) =>
      (n.contain || "").includes(i)
    )
  );
}
function VR(e) {
  let t = is(e);
  for (; Zr(t) && !zo(t); ) {
    if (Qp(t)) return t;
    if (od(t)) return null;
    t = is(t);
  }
  return null;
}
function Jp() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function zo(e) {
  return ["html", "body", "#document"].includes(Qo(e));
}
function kr(e) {
  return zn(e).getComputedStyle(e);
}
function ad(e) {
  return Cr(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function is(e) {
  if (Qo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (xx(e) && e.host) || Xr(e);
  return xx(t) ? t.host : t;
}
function dS(e) {
  const t = is(e);
  return zo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Zr(t) && Fl(t)
    ? t
    : dS(t);
}
function ul(e, t, n) {
  var i;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = dS(e),
    a = o === ((i = e.ownerDocument) == null ? void 0 : i.body),
    l = zn(o);
  if (a) {
    const c = rp(l);
    return t.concat(
      l,
      l.visualViewport || [],
      Fl(o) ? o : [],
      c && n ? ul(c) : []
    );
  }
  return t.concat(o, ul(o, [], n));
}
function rp(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fS(e) {
  const t = kr(e);
  let n = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const o = Zr(e),
    a = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : i,
    c = Rc(n) !== a || Rc(i) !== l;
  return c && ((n = a), (i = l)), { width: n, height: i, $: c };
}
function em(e) {
  return Cr(e) ? e : e.contextElement;
}
function Io(e) {
  const t = em(e);
  if (!Zr(t)) return Ur(1);
  const n = t.getBoundingClientRect(),
    { width: i, height: o, $: a } = fS(t);
  let l = (a ? Rc(n.width) : n.width) / i,
    c = (a ? Rc(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: l, y: c }
  );
}
const BR = Ur(0);
function hS(e) {
  const t = zn(e);
  return !Jp() || !t.visualViewport
    ? BR
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function zR(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== zn(e)) ? !1 : t;
}
function $s(e, t, n, i) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    a = em(e);
  let l = Ur(1);
  t && (i ? Cr(i) && (l = Io(i)) : (l = Io(e)));
  const c = zR(a, n, i) ? hS(a) : Ur(0);
  let f = (o.left + c.x) / l.x,
    h = (o.top + c.y) / l.y,
    p = o.width / l.x,
    g = o.height / l.y;
  if (a) {
    const y = zn(a),
      w = i && Cr(i) ? zn(i) : i;
    let x = y,
      S = rp(x);
    for (; S && i && w !== x; ) {
      const E = Io(S),
        b = S.getBoundingClientRect(),
        P = kr(S),
        R = b.left + (S.clientLeft + parseFloat(P.paddingLeft)) * E.x,
        j = b.top + (S.clientTop + parseFloat(P.paddingTop)) * E.y;
      (f *= E.x),
        (h *= E.y),
        (p *= E.x),
        (g *= E.y),
        (f += R),
        (h += j),
        (x = zn(S)),
        (S = rp(x));
    }
  }
  return Nc({ width: p, height: g, x: f, y: h });
}
function tm(e, t) {
  const n = ad(e).scrollLeft;
  return t ? t.left + n : $s(Xr(e)).left + n;
}
function pS(e, t, n) {
  n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    o = i.left + t.scrollLeft - (n ? 0 : tm(e, i)),
    a = i.top + t.scrollTop;
  return { x: o, y: a };
}
function UR(e) {
  let { elements: t, rect: n, offsetParent: i, strategy: o } = e;
  const a = o === "fixed",
    l = Xr(i),
    c = t ? od(t.floating) : !1;
  if (i === l || (c && a)) return n;
  let f = { scrollLeft: 0, scrollTop: 0 },
    h = Ur(1);
  const p = Ur(0),
    g = Zr(i);
  if (
    (g || (!g && !a)) &&
    ((Qo(i) !== "body" || Fl(l)) && (f = ad(i)), Zr(i))
  ) {
    const w = $s(i);
    (h = Io(i)), (p.x = w.x + i.clientLeft), (p.y = w.y + i.clientTop);
  }
  const y = l && !g && !a ? pS(l, f, !0) : Ur(0);
  return {
    width: n.width * h.x,
    height: n.height * h.y,
    x: n.x * h.x - f.scrollLeft * h.x + p.x + y.x,
    y: n.y * h.y - f.scrollTop * h.y + p.y + y.y,
  };
}
function $R(e) {
  return Array.from(e.getClientRects());
}
function WR(e) {
  const t = Xr(e),
    n = ad(e),
    i = e.ownerDocument.body,
    o = Bn(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    a = Bn(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let l = -n.scrollLeft + tm(e);
  const c = -n.scrollTop;
  return (
    kr(i).direction === "rtl" && (l += Bn(t.clientWidth, i.clientWidth) - o),
    { width: o, height: a, x: l, y: c }
  );
}
function HR(e, t) {
  const n = zn(e),
    i = Xr(e),
    o = n.visualViewport;
  let a = i.clientWidth,
    l = i.clientHeight,
    c = 0,
    f = 0;
  if (o) {
    (a = o.width), (l = o.height);
    const h = Jp();
    (!h || (h && t === "fixed")) && ((c = o.offsetLeft), (f = o.offsetTop));
  }
  return { width: a, height: l, x: c, y: f };
}
function ZR(e, t) {
  const n = $s(e, !0, t === "fixed"),
    i = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    a = Zr(e) ? Io(e) : Ur(1),
    l = e.clientWidth * a.x,
    c = e.clientHeight * a.y,
    f = o * a.x,
    h = i * a.y;
  return { width: l, height: c, x: f, y: h };
}
function wx(e, t, n) {
  let i;
  if (t === "viewport") i = HR(e, n);
  else if (t === "document") i = WR(Xr(e));
  else if (Cr(t)) i = ZR(t, n);
  else {
    const o = hS(e);
    i = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Nc(i);
}
function mS(e, t) {
  const n = is(e);
  return n === t || !Cr(n) || zo(n)
    ? !1
    : kr(n).position === "fixed" || mS(n, t);
}
function KR(e, t) {
  const n = t.get(e);
  if (n) return n;
  let i = ul(e, [], !1).filter((c) => Cr(c) && Qo(c) !== "body"),
    o = null;
  const a = kr(e).position === "fixed";
  let l = a ? is(e) : e;
  for (; Cr(l) && !zo(l); ) {
    const c = kr(l),
      f = Qp(l);
    !f && c.position === "fixed" && (o = null),
      (
        a
          ? !f && !o
          : (!f &&
              c.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Fl(l) && !f && mS(e, l))
      )
        ? (i = i.filter((p) => p !== l))
        : (o = c),
      (l = is(l));
  }
  return t.set(e, i), i;
}
function GR(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: o } = e;
  const l = [
      ...(n === "clippingAncestors"
        ? od(t)
          ? []
          : KR(t, this._c)
        : [].concat(n)),
      i,
    ],
    c = l[0],
    f = l.reduce((h, p) => {
      const g = wx(t, p, o);
      return (
        (h.top = Bn(g.top, h.top)),
        (h.right = ns(g.right, h.right)),
        (h.bottom = ns(g.bottom, h.bottom)),
        (h.left = Bn(g.left, h.left)),
        h
      );
    }, wx(t, c, o));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top,
  };
}
function qR(e) {
  const { width: t, height: n } = fS(e);
  return { width: t, height: n };
}
function YR(e, t, n) {
  const i = Zr(t),
    o = Xr(t),
    a = n === "fixed",
    l = $s(e, !0, a, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const f = Ur(0);
  if (i || (!i && !a))
    if (((Qo(t) !== "body" || Fl(o)) && (c = ad(t)), i)) {
      const y = $s(t, !0, a, t);
      (f.x = y.x + t.clientLeft), (f.y = y.y + t.clientTop);
    } else o && (f.x = tm(o));
  const h = o && !i && !a ? pS(o, c) : Ur(0),
    p = l.left + c.scrollLeft - f.x - h.x,
    g = l.top + c.scrollTop - f.y - h.y;
  return { x: p, y: g, width: l.width, height: l.height };
}
function Sh(e) {
  return kr(e).position === "static";
}
function Sx(e, t) {
  if (!Zr(e) || kr(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Xr(e) === n && (n = n.ownerDocument.body), n;
}
function gS(e, t) {
  const n = zn(e);
  if (od(e)) return n;
  if (!Zr(e)) {
    let o = is(e);
    for (; o && !zo(o); ) {
      if (Cr(o) && !Sh(o)) return o;
      o = is(o);
    }
    return n;
  }
  let i = Sx(e, t);
  for (; i && IR(i) && Sh(i); ) i = Sx(i, t);
  return i && zo(i) && Sh(i) && !Qp(i) ? n : i || VR(e) || n;
}
const XR = async function (e) {
  const t = this.getOffsetParent || gS,
    n = this.getDimensions,
    i = await n(e.floating);
  return {
    reference: YR(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function QR(e) {
  return kr(e).direction === "rtl";
}
const JR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: UR,
  getDocumentElement: Xr,
  getClippingRect: GR,
  getOffsetParent: gS,
  getElementRects: XR,
  getClientRects: $R,
  getDimensions: qR,
  getScale: Io,
  isElement: Cr,
  isRTL: QR,
};
function yS(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function eA(e, t) {
  let n = null,
    i;
  const o = Xr(e);
  function a() {
    var c;
    clearTimeout(i), (c = n) == null || c.disconnect(), (n = null);
  }
  function l(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), a();
    const h = e.getBoundingClientRect(),
      { left: p, top: g, width: y, height: w } = h;
    if ((c || t(), !y || !w)) return;
    const x = tc(g),
      S = tc(o.clientWidth - (p + y)),
      E = tc(o.clientHeight - (g + w)),
      b = tc(p),
      R = {
        rootMargin: -x + "px " + -S + "px " + -E + "px " + -b + "px",
        threshold: Bn(0, ns(1, f)) || 1,
      };
    let j = !0;
    function T(M) {
      const V = M[0].intersectionRatio;
      if (V !== f) {
        if (!j) return l();
        V
          ? l(!1, V)
          : (i = setTimeout(() => {
              l(!1, 1e-7);
            }, 1e3));
      }
      V === 1 && !yS(h, e.getBoundingClientRect()) && l(), (j = !1);
    }
    try {
      n = new IntersectionObserver(T, { ...R, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(T, R);
    }
    n.observe(e);
  }
  return l(!0), a;
}
function tA(e, t, n, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: a = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: c = typeof IntersectionObserver == "function",
      animationFrame: f = !1,
    } = i,
    h = em(e),
    p = o || a ? [...(h ? ul(h) : []), ...ul(t)] : [];
  p.forEach((b) => {
    o && b.addEventListener("scroll", n, { passive: !0 }),
      a && b.addEventListener("resize", n);
  });
  const g = h && c ? eA(h, n) : null;
  let y = -1,
    w = null;
  l &&
    ((w = new ResizeObserver((b) => {
      let [P] = b;
      P &&
        P.target === h &&
        w &&
        (w.unobserve(t),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          var R;
          (R = w) == null || R.observe(t);
        }))),
        n();
    })),
    h && !f && w.observe(h),
    w.observe(t));
  let x,
    S = f ? $s(e) : null;
  f && E();
  function E() {
    const b = $s(e);
    S && !yS(S, b) && n(), (S = b), (x = requestAnimationFrame(E));
  }
  return (
    n(),
    () => {
      var b;
      p.forEach((P) => {
        o && P.removeEventListener("scroll", n),
          a && P.removeEventListener("resize", n);
      }),
        g == null || g(),
        (b = w) == null || b.disconnect(),
        (w = null),
        f && cancelAnimationFrame(x);
    }
  );
}
const nA = OR,
  rA = LR,
  iA = NR,
  sA = FR,
  oA = jR,
  bx = AR,
  aA = MR,
  lA = (e, t, n) => {
    const i = new Map(),
      o = { platform: JR, ...n },
      a = { ...o.platform, _c: i };
    return RR(e, t, { ...o, platform: a });
  };
var mc = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function jc(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, i, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (i = n; i-- !== 0; ) if (!jc(e[i], t[i])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (i = n; i-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[i])) return !1;
    for (i = n; i-- !== 0; ) {
      const a = o[i];
      if (!(a === "_owner" && e.$$typeof) && !jc(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vS(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ex(e, t) {
  const n = vS(e);
  return Math.round(t * n) / n;
}
function bh(e) {
  const t = _.useRef(e);
  return (
    mc(() => {
      t.current = e;
    }),
    t
  );
}
function uA(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: i = [],
      platform: o,
      elements: { reference: a, floating: l } = {},
      transform: c = !0,
      whileElementsMounted: f,
      open: h,
    } = e,
    [p, g] = _.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [y, w] = _.useState(i);
  jc(y, i) || w(i);
  const [x, S] = _.useState(null),
    [E, b] = _.useState(null),
    P = _.useCallback((H) => {
      H !== M.current && ((M.current = H), S(H));
    }, []),
    R = _.useCallback((H) => {
      H !== V.current && ((V.current = H), b(H));
    }, []),
    j = a || x,
    T = l || E,
    M = _.useRef(null),
    V = _.useRef(null),
    F = _.useRef(p),
    Y = f != null,
    Q = bh(f),
    ce = bh(o),
    X = bh(h),
    ie = _.useCallback(() => {
      if (!M.current || !V.current) return;
      const H = { placement: t, strategy: n, middleware: y };
      ce.current && (H.platform = ce.current),
        lA(M.current, V.current, H).then((J) => {
          const ee = { ...J, isPositioned: X.current !== !1 };
          he.current &&
            !jc(F.current, ee) &&
            ((F.current = ee),
            id.flushSync(() => {
              g(ee);
            }));
        });
    }, [y, t, n, ce, X]);
  mc(() => {
    h === !1 &&
      F.current.isPositioned &&
      ((F.current.isPositioned = !1), g((H) => ({ ...H, isPositioned: !1 })));
  }, [h]);
  const he = _.useRef(!1);
  mc(
    () => (
      (he.current = !0),
      () => {
        he.current = !1;
      }
    ),
    []
  ),
    mc(() => {
      if ((j && (M.current = j), T && (V.current = T), j && T)) {
        if (Q.current) return Q.current(j, T, ie);
        ie();
      }
    }, [j, T, ie, Q, Y]);
  const pe = _.useMemo(
      () => ({ reference: M, floating: V, setReference: P, setFloating: R }),
      [P, R]
    ),
    me = _.useMemo(() => ({ reference: j, floating: T }), [j, T]),
    le = _.useMemo(() => {
      const H = { position: n, left: 0, top: 0 };
      if (!me.floating) return H;
      const J = Ex(me.floating, p.x),
        ee = Ex(me.floating, p.y);
      return c
        ? {
            ...H,
            transform: "translate(" + J + "px, " + ee + "px)",
            ...(vS(me.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: J, top: ee };
    }, [n, c, me.floating, p.x, p.y]);
  return _.useMemo(
    () => ({ ...p, update: ie, refs: pe, elements: me, floatingStyles: le }),
    [p, ie, pe, me, le]
  );
}
const cA = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: i, padding: o } = typeof e == "function" ? e(n) : e;
        return i && t(i)
          ? i.current != null
            ? bx({ element: i.current, padding: o }).fn(n)
            : {}
          : i
          ? bx({ element: i, padding: o }).fn(n)
          : {};
      },
    };
  },
  dA = (e, t) => ({ ...nA(e), options: [e, t] }),
  fA = (e, t) => ({ ...rA(e), options: [e, t] }),
  hA = (e, t) => ({ ...aA(e), options: [e, t] }),
  pA = (e, t) => ({ ...iA(e), options: [e, t] }),
  mA = (e, t) => ({ ...sA(e), options: [e, t] }),
  gA = (e, t) => ({ ...oA(e), options: [e, t] }),
  yA = (e, t) => ({ ...cA(e), options: [e, t] });
var vA = "Arrow",
  xS = _.forwardRef((e, t) => {
    const { children: n, width: i = 10, height: o = 5, ...a } = e;
    return C.jsx(bn.svg, {
      ...a,
      ref: t,
      width: i,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : C.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
xS.displayName = vA;
var xA = xS;
function wS(e) {
  const [t, n] = _.useState(void 0);
  return (
    Us(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const i = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const a = o[0];
          let l, c;
          if ("borderBoxSize" in a) {
            const f = a.borderBoxSize,
              h = Array.isArray(f) ? f[0] : f;
            (l = h.inlineSize), (c = h.blockSize);
          } else (l = e.offsetWidth), (c = e.offsetHeight);
          n({ width: l, height: c });
        });
        return i.observe(e, { box: "border-box" }), () => i.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var nm = "Popper",
  [SS, bS] = Yo(nm),
  [wA, ES] = SS(nm),
  _S = (e) => {
    const { __scopePopper: t, children: n } = e,
      [i, o] = _.useState(null);
    return C.jsx(wA, { scope: t, anchor: i, onAnchorChange: o, children: n });
  };
_S.displayName = nm;
var CS = "PopperAnchor",
  kS = _.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: i, ...o } = e,
      a = ES(CS, n),
      l = _.useRef(null),
      c = Hn(t, l);
    return (
      _.useEffect(() => {
        a.onAnchorChange((i == null ? void 0 : i.current) || l.current);
      }),
      i ? null : C.jsx(bn.div, { ...o, ref: c })
    );
  });
kS.displayName = CS;
var rm = "PopperContent",
  [SA, bA] = SS(rm),
  TS = _.forwardRef((e, t) => {
    var be, Te, Re, Xe, nt, _e;
    const {
        __scopePopper: n,
        side: i = "bottom",
        sideOffset: o = 0,
        align: a = "center",
        alignOffset: l = 0,
        arrowPadding: c = 0,
        avoidCollisions: f = !0,
        collisionBoundary: h = [],
        collisionPadding: p = 0,
        sticky: g = "partial",
        hideWhenDetached: y = !1,
        updatePositionStrategy: w = "optimized",
        onPlaced: x,
        ...S
      } = e,
      E = ES(rm, n),
      [b, P] = _.useState(null),
      R = Hn(t, (We) => P(We)),
      [j, T] = _.useState(null),
      M = wS(j),
      V = (M == null ? void 0 : M.width) ?? 0,
      F = (M == null ? void 0 : M.height) ?? 0,
      Y = i + (a !== "center" ? "-" + a : ""),
      Q =
        typeof p == "number"
          ? p
          : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      ce = Array.isArray(h) ? h : [h],
      X = ce.length > 0,
      ie = { padding: Q, boundary: ce.filter(_A), altBoundary: X },
      {
        refs: he,
        floatingStyles: pe,
        placement: me,
        isPositioned: le,
        middlewareData: H,
      } = uA({
        strategy: "fixed",
        placement: Y,
        whileElementsMounted: (...We) =>
          tA(...We, { animationFrame: w === "always" }),
        elements: { reference: E.anchor },
        middleware: [
          dA({ mainAxis: o + F, alignmentAxis: l }),
          f &&
            fA({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? hA() : void 0,
              ...ie,
            }),
          f && pA({ ...ie }),
          mA({
            ...ie,
            apply: ({
              elements: We,
              rects: ct,
              availableWidth: Pt,
              availableHeight: Wt,
            }) => {
              const { width: Xt, height: N } = ct.reference,
                z = We.floating.style;
              z.setProperty("--radix-popper-available-width", `${Pt}px`),
                z.setProperty("--radix-popper-available-height", `${Wt}px`),
                z.setProperty("--radix-popper-anchor-width", `${Xt}px`),
                z.setProperty("--radix-popper-anchor-height", `${N}px`);
            },
          }),
          j && yA({ element: j, padding: c }),
          CA({ arrowWidth: V, arrowHeight: F }),
          y && gA({ strategy: "referenceHidden", ...ie }),
        ],
      }),
      [J, ee] = AS(me),
      O = vi(x);
    Us(() => {
      le && (O == null || O());
    }, [le, O]);
    const q = (be = H.arrow) == null ? void 0 : be.x,
      Ne = (Te = H.arrow) == null ? void 0 : Te.y,
      Me = ((Re = H.arrow) == null ? void 0 : Re.centerOffset) !== 0,
      [Ie, ze] = _.useState();
    return (
      Us(() => {
        b && ze(window.getComputedStyle(b).zIndex);
      }, [b]),
      C.jsx("div", {
        ref: he.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...pe,
          transform: le ? pe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ie,
          "--radix-popper-transform-origin": [
            (Xe = H.transformOrigin) == null ? void 0 : Xe.x,
            (nt = H.transformOrigin) == null ? void 0 : nt.y,
          ].join(" "),
          ...(((_e = H.hide) == null ? void 0 : _e.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: C.jsx(SA, {
          scope: n,
          placedSide: J,
          onArrowChange: T,
          arrowX: q,
          arrowY: Ne,
          shouldHideArrow: Me,
          children: C.jsx(bn.div, {
            "data-side": J,
            "data-align": ee,
            ...S,
            ref: R,
            style: { ...S.style, animation: le ? void 0 : "none" },
          }),
        }),
      })
    );
  });
TS.displayName = rm;
var PS = "PopperArrow",
  EA = { top: "bottom", right: "left", bottom: "top", left: "right" },
  RS = _.forwardRef(function (t, n) {
    const { __scopePopper: i, ...o } = t,
      a = bA(PS, i),
      l = EA[a.placedSide];
    return C.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [l]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0,
      },
      children: C.jsx(xA, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
RS.displayName = PS;
function _A(e) {
  return e !== null;
}
var CA = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var E, b, P;
    const { placement: n, rects: i, middlewareData: o } = t,
      l = ((E = o.arrow) == null ? void 0 : E.centerOffset) !== 0,
      c = l ? 0 : e.arrowWidth,
      f = l ? 0 : e.arrowHeight,
      [h, p] = AS(n),
      g = { start: "0%", center: "50%", end: "100%" }[p],
      y = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + c / 2,
      w = (((P = o.arrow) == null ? void 0 : P.y) ?? 0) + f / 2;
    let x = "",
      S = "";
    return (
      h === "bottom"
        ? ((x = l ? g : `${y}px`), (S = `${-f}px`))
        : h === "top"
        ? ((x = l ? g : `${y}px`), (S = `${i.floating.height + f}px`))
        : h === "right"
        ? ((x = `${-f}px`), (S = l ? g : `${w}px`))
        : h === "left" &&
          ((x = `${i.floating.width + f}px`), (S = l ? g : `${w}px`)),
      { data: { x, y: S } }
    );
  },
});
function AS(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var kA = _S,
  NS = kS,
  TA = TS,
  PA = RS,
  RA = "Portal",
  jS = _.forwardRef((e, t) => {
    var c;
    const { container: n, ...i } = e,
      [o, a] = _.useState(!1);
    Us(() => a(!0), []);
    const l =
      n ||
      (o &&
        ((c = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : c.body));
    return l ? eP.createPortal(C.jsx(bn.div, { ...i, ref: t }), l) : null;
  });
jS.displayName = RA;
function AA(e, t) {
  return _.useReducer((n, i) => t[n][i] ?? n, e);
}
var ld = (e) => {
  const { present: t, children: n } = e,
    i = NA(t),
    o =
      typeof n == "function" ? n({ present: i.isPresent }) : _.Children.only(n),
    a = Hn(i.ref, jA(o));
  return typeof n == "function" || i.isPresent
    ? _.cloneElement(o, { ref: a })
    : null;
};
ld.displayName = "Presence";
function NA(e) {
  const [t, n] = _.useState(),
    i = _.useRef({}),
    o = _.useRef(e),
    a = _.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [c, f] = AA(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    _.useEffect(() => {
      const h = nc(i.current);
      a.current = c === "mounted" ? h : "none";
    }, [c]),
    Us(() => {
      const h = i.current,
        p = o.current;
      if (p !== e) {
        const y = a.current,
          w = nc(h);
        e
          ? f("MOUNT")
          : w === "none" || (h == null ? void 0 : h.display) === "none"
          ? f("UNMOUNT")
          : f(p && y !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, f]),
    Us(() => {
      if (t) {
        let h;
        const p = t.ownerDocument.defaultView ?? window,
          g = (w) => {
            const S = nc(i.current).includes(w.animationName);
            if (w.target === t && S && (f("ANIMATION_END"), !o.current)) {
              const E = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (h = p.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = E);
                }));
            }
          },
          y = (w) => {
            w.target === t && (a.current = nc(i.current));
          };
        return (
          t.addEventListener("animationstart", y),
          t.addEventListener("animationcancel", g),
          t.addEventListener("animationend", g),
          () => {
            p.clearTimeout(h),
              t.removeEventListener("animationstart", y),
              t.removeEventListener("animationcancel", g),
              t.removeEventListener("animationend", g);
          }
        );
      } else f("ANIMATION_END");
    }, [t, f]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(c),
      ref: _.useCallback((h) => {
        h && (i.current = getComputedStyle(h)), n(h);
      }, []),
    }
  );
}
function nc(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function jA(e) {
  var i, o;
  let t =
      (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : i.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function im({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [i, o] = DA({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : i,
    c = vi(n),
    f = _.useCallback(
      (h) => {
        if (a) {
          const g = typeof h == "function" ? h(e) : h;
          g !== e && c(g);
        } else o(h);
      },
      [a, e, o, c]
    );
  return [l, f];
}
function DA({ defaultProp: e, onChange: t }) {
  const n = _.useState(e),
    [i] = n,
    o = _.useRef(i),
    a = vi(t);
  return (
    _.useEffect(() => {
      o.current !== i && (a(i), (o.current = i));
    }, [i, o, a]),
    n
  );
}
var OA = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ko = new WeakMap(),
  rc = new WeakMap(),
  ic = {},
  Eh = 0,
  DS = function (e) {
    return e && (e.host || DS(e.parentNode));
  },
  LA = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var i = DS(n);
        return i && e.contains(i)
          ? i
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
  MA = function (e, t, n, i) {
    var o = LA(t, Array.isArray(e) ? e : [e]);
    ic[n] || (ic[n] = new WeakMap());
    var a = ic[n],
      l = [],
      c = new Set(),
      f = new Set(o),
      h = function (g) {
        !g || c.has(g) || (c.add(g), h(g.parentNode));
      };
    o.forEach(h);
    var p = function (g) {
      !g ||
        f.has(g) ||
        Array.prototype.forEach.call(g.children, function (y) {
          if (c.has(y)) p(y);
          else
            try {
              var w = y.getAttribute(i),
                x = w !== null && w !== "false",
                S = (ko.get(y) || 0) + 1,
                E = (a.get(y) || 0) + 1;
              ko.set(y, S),
                a.set(y, E),
                l.push(y),
                S === 1 && x && rc.set(y, !0),
                E === 1 && y.setAttribute(n, "true"),
                x || y.setAttribute(i, "true");
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", y, b);
            }
        });
    };
    return (
      p(t),
      c.clear(),
      Eh++,
      function () {
        l.forEach(function (g) {
          var y = ko.get(g) - 1,
            w = a.get(g) - 1;
          ko.set(g, y),
            a.set(g, w),
            y || (rc.has(g) || g.removeAttribute(i), rc.delete(g)),
            w || g.removeAttribute(n);
        }),
          Eh--,
          Eh ||
            ((ko = new WeakMap()),
            (ko = new WeakMap()),
            (rc = new WeakMap()),
            (ic = {}));
      }
    );
  },
  FA = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var i = Array.from(Array.isArray(e) ? e : [e]),
      o = OA(e);
    return o
      ? (i.push.apply(i, Array.from(o.querySelectorAll("[aria-live]"))),
        MA(i, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ir = function () {
    return (
      (Ir =
        Object.assign ||
        function (t) {
          for (var n, i = 1, o = arguments.length; i < o; i++) {
            n = arguments[i];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }),
      Ir.apply(this, arguments)
    );
  };
function OS(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
        (n[i[o]] = e[i[o]]);
  return n;
}
function IA(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, o = t.length, a; i < o; i++)
      (a || !(i in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, i)), (a[i] = t[i]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var gc = "right-scroll-bar-position",
  yc = "width-before-scroll-bar",
  VA = "with-scroll-bars-hidden",
  BA = "--removed-body-scroll-bar-size";
function _h(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function zA(e, t) {
  var n = _.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(i) {
          var o = n.value;
          o !== i && ((n.value = i), n.callback(i, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var UA = typeof window < "u" ? _.useLayoutEffect : _.useEffect,
  _x = new WeakMap();
function $A(e, t) {
  var n = zA(null, function (i) {
    return e.forEach(function (o) {
      return _h(o, i);
    });
  });
  return (
    UA(
      function () {
        var i = _x.get(n);
        if (i) {
          var o = new Set(i),
            a = new Set(e),
            l = n.current;
          o.forEach(function (c) {
            a.has(c) || _h(c, null);
          }),
            a.forEach(function (c) {
              o.has(c) || _h(c, l);
            });
        }
        _x.set(n, e);
      },
      [e]
    ),
    n
  );
}
function WA(e) {
  return e;
}
function HA(e, t) {
  t === void 0 && (t = WA);
  var n = [],
    i = !1,
    o = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var l = t(a, i);
        return (
          n.push(l),
          function () {
            n = n.filter(function (c) {
              return c !== l;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (i = !0; n.length; ) {
          var l = n;
          (n = []), l.forEach(a);
        }
        n = {
          push: function (c) {
            return a(c);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        i = !0;
        var l = [];
        if (n.length) {
          var c = n;
          (n = []), c.forEach(a), (l = n);
        }
        var f = function () {
            var p = l;
            (l = []), p.forEach(a);
          },
          h = function () {
            return Promise.resolve().then(f);
          };
        h(),
          (n = {
            push: function (p) {
              l.push(p), h();
            },
            filter: function (p) {
              return (l = l.filter(p)), n;
            },
          });
      },
    };
  return o;
}
function ZA(e) {
  e === void 0 && (e = {});
  var t = HA(null);
  return (t.options = Ir({ async: !0, ssr: !1 }, e)), t;
}
var LS = function (e) {
  var t = e.sideCar,
    n = OS(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var i = t.read();
  if (!i) throw new Error("Sidecar medium not found");
  return _.createElement(i, Ir({}, n));
};
LS.isSideCarExport = !0;
function KA(e, t) {
  return e.useMedium(t), LS;
}
var MS = ZA(),
  Ch = function () {},
  ud = _.forwardRef(function (e, t) {
    var n = _.useRef(null),
      i = _.useState({
        onScrollCapture: Ch,
        onWheelCapture: Ch,
        onTouchMoveCapture: Ch,
      }),
      o = i[0],
      a = i[1],
      l = e.forwardProps,
      c = e.children,
      f = e.className,
      h = e.removeScrollBar,
      p = e.enabled,
      g = e.shards,
      y = e.sideCar,
      w = e.noIsolation,
      x = e.inert,
      S = e.allowPinchZoom,
      E = e.as,
      b = E === void 0 ? "div" : E,
      P = e.gapMode,
      R = OS(e, [
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
      j = y,
      T = $A([n, t]),
      M = Ir(Ir({}, R), o);
    return _.createElement(
      _.Fragment,
      null,
      p &&
        _.createElement(j, {
          sideCar: MS,
          removeScrollBar: h,
          shards: g,
          noIsolation: w,
          inert: x,
          setCallbacks: a,
          allowPinchZoom: !!S,
          lockRef: n,
          gapMode: P,
        }),
      l
        ? _.cloneElement(_.Children.only(c), Ir(Ir({}, M), { ref: T }))
        : _.createElement(b, Ir({}, M, { className: f, ref: T }), c)
    );
  });
ud.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ud.classNames = { fullWidth: yc, zeroRight: gc };
var GA = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function qA() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = GA();
  return t && e.setAttribute("nonce", t), e;
}
function YA(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function XA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var QA = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = qA()) && (YA(t, n), XA(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  JA = function () {
    var e = QA();
    return function (t, n) {
      _.useEffect(
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
  FS = function () {
    var e = JA(),
      t = function (n) {
        var i = n.styles,
          o = n.dynamic;
        return e(i, o), null;
      };
    return t;
  },
  eN = { left: 0, top: 0, right: 0, gap: 0 },
  kh = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  tN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      i = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [kh(n), kh(i), kh(o)];
  },
  nN = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return eN;
    var t = tN(e),
      n = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, i - n + t[2] - t[0]),
    };
  },
  rN = FS(),
  Vo = "data-scroll-locked",
  iN = function (e, t, n, i) {
    var o = e.left,
      a = e.top,
      l = e.right,
      c = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          VA,
          ` {
   overflow: hidden `
        )
        .concat(
          i,
          `;
   padding-right: `
        )
        .concat(c, "px ")
        .concat(
          i,
          `;
  }
  body[`
        )
        .concat(
          Vo,
          `] {
    overflow: hidden `
        )
        .concat(
          i,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(i, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  a,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(c, "px ")
                .concat(
                  i,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(c, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          gc,
          ` {
    right: `
        )
        .concat(c, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(
          yc,
          ` {
    margin-right: `
        )
        .concat(c, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(gc, " .")
        .concat(
          gc,
          ` {
    right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(yc, " .")
        .concat(
          yc,
          ` {
    margin-right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  body[`
        )
        .concat(
          Vo,
          `] {
    `
        )
        .concat(BA, ": ")
        .concat(
          c,
          `px;
  }
`
        )
    );
  },
  Cx = function () {
    var e = parseInt(document.body.getAttribute(Vo) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  sN = function () {
    _.useEffect(function () {
      return (
        document.body.setAttribute(Vo, (Cx() + 1).toString()),
        function () {
          var e = Cx() - 1;
          e <= 0
            ? document.body.removeAttribute(Vo)
            : document.body.setAttribute(Vo, e.toString());
        }
      );
    }, []);
  },
  oN = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      i = e.gapMode,
      o = i === void 0 ? "margin" : i;
    sN();
    var a = _.useMemo(
      function () {
        return nN(o);
      },
      [o]
    );
    return _.createElement(rN, { styles: iN(a, !t, o, n ? "" : "!important") });
  },
  ip = !1;
if (typeof window < "u")
  try {
    var sc = Object.defineProperty({}, "passive", {
      get: function () {
        return (ip = !0), !0;
      },
    });
    window.addEventListener("test", sc, sc),
      window.removeEventListener("test", sc, sc);
  } catch {
    ip = !1;
  }
var To = ip ? { passive: !1 } : !1,
  aN = function (e) {
    return e.tagName === "TEXTAREA";
  },
  IS = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !aN(e) && n[t] === "visible")
    );
  },
  lN = function (e) {
    return IS(e, "overflowY");
  },
  uN = function (e) {
    return IS(e, "overflowX");
  },
  kx = function (e, t) {
    var n = t.ownerDocument,
      i = t;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var o = VS(e, i);
      if (o) {
        var a = BS(e, i),
          l = a[1],
          c = a[2];
        if (l > c) return !0;
      }
      i = i.parentNode;
    } while (i && i !== n.body);
    return !1;
  },
  cN = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      i = e.clientHeight;
    return [t, n, i];
  },
  dN = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      i = e.clientWidth;
    return [t, n, i];
  },
  VS = function (e, t) {
    return e === "v" ? lN(t) : uN(t);
  },
  BS = function (e, t) {
    return e === "v" ? cN(t) : dN(t);
  },
  fN = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  hN = function (e, t, n, i, o) {
    var a = fN(e, window.getComputedStyle(t).direction),
      l = a * i,
      c = n.target,
      f = t.contains(c),
      h = !1,
      p = l > 0,
      g = 0,
      y = 0;
    do {
      var w = BS(e, c),
        x = w[0],
        S = w[1],
        E = w[2],
        b = S - E - a * x;
      (x || b) && VS(e, c) && ((g += b), (y += x)),
        c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
    } while ((!f && c !== document.body) || (f && (t.contains(c) || t === c)));
    return ((p && Math.abs(g) < 1) || (!p && Math.abs(y) < 1)) && (h = !0), h;
  },
  oc = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Tx = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Px = function (e) {
    return e && "current" in e ? e.current : e;
  },
  pN = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  mN = function (e) {
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
  gN = 0,
  Po = [];
function yN(e) {
  var t = _.useRef([]),
    n = _.useRef([0, 0]),
    i = _.useRef(),
    o = _.useState(gN++)[0],
    a = _.useState(FS)[0],
    l = _.useRef(e);
  _.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    _.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var S = IA([e.lockRef.current], (e.shards || []).map(Px), !0).filter(
            Boolean
          );
          return (
            S.forEach(function (E) {
              return E.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                S.forEach(function (E) {
                  return E.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var c = _.useCallback(function (S, E) {
      if (
        ("touches" in S && S.touches.length === 2) ||
        (S.type === "wheel" && S.ctrlKey)
      )
        return !l.current.allowPinchZoom;
      var b = oc(S),
        P = n.current,
        R = "deltaX" in S ? S.deltaX : P[0] - b[0],
        j = "deltaY" in S ? S.deltaY : P[1] - b[1],
        T,
        M = S.target,
        V = Math.abs(R) > Math.abs(j) ? "h" : "v";
      if ("touches" in S && V === "h" && M.type === "range") return !1;
      var F = kx(V, M);
      if (!F) return !0;
      if ((F ? (T = V) : ((T = V === "v" ? "h" : "v"), (F = kx(V, M))), !F))
        return !1;
      if (
        (!i.current && "changedTouches" in S && (R || j) && (i.current = T), !T)
      )
        return !0;
      var Y = i.current || T;
      return hN(Y, E, S, Y === "h" ? R : j);
    }, []),
    f = _.useCallback(function (S) {
      var E = S;
      if (!(!Po.length || Po[Po.length - 1] !== a)) {
        var b = "deltaY" in E ? Tx(E) : oc(E),
          P = t.current.filter(function (T) {
            return (
              T.name === E.type &&
              (T.target === E.target || E.target === T.shadowParent) &&
              pN(T.delta, b)
            );
          })[0];
        if (P && P.should) {
          E.cancelable && E.preventDefault();
          return;
        }
        if (!P) {
          var R = (l.current.shards || [])
              .map(Px)
              .filter(Boolean)
              .filter(function (T) {
                return T.contains(E.target);
              }),
            j = R.length > 0 ? c(E, R[0]) : !l.current.noIsolation;
          j && E.cancelable && E.preventDefault();
        }
      }
    }, []),
    h = _.useCallback(function (S, E, b, P) {
      var R = { name: S, delta: E, target: b, should: P, shadowParent: vN(b) };
      t.current.push(R),
        setTimeout(function () {
          t.current = t.current.filter(function (j) {
            return j !== R;
          });
        }, 1);
    }, []),
    p = _.useCallback(function (S) {
      (n.current = oc(S)), (i.current = void 0);
    }, []),
    g = _.useCallback(function (S) {
      h(S.type, Tx(S), S.target, c(S, e.lockRef.current));
    }, []),
    y = _.useCallback(function (S) {
      h(S.type, oc(S), S.target, c(S, e.lockRef.current));
    }, []);
  _.useEffect(function () {
    return (
      Po.push(a),
      e.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: y,
      }),
      document.addEventListener("wheel", f, To),
      document.addEventListener("touchmove", f, To),
      document.addEventListener("touchstart", p, To),
      function () {
        (Po = Po.filter(function (S) {
          return S !== a;
        })),
          document.removeEventListener("wheel", f, To),
          document.removeEventListener("touchmove", f, To),
          document.removeEventListener("touchstart", p, To);
      }
    );
  }, []);
  var w = e.removeScrollBar,
    x = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    x ? _.createElement(a, { styles: mN(o) }) : null,
    w ? _.createElement(oN, { gapMode: e.gapMode }) : null
  );
}
function vN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const xN = KA(MS, yN);
var zS = _.forwardRef(function (e, t) {
  return _.createElement(ud, Ir({}, e, { ref: t, sideCar: xN }));
});
zS.classNames = ud.classNames;
var sm = "Popover",
  [US, YV] = Yo(sm, [bS]),
  Il = bS(),
  [wN, fs] = US(sm),
  $S = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: i,
        defaultOpen: o,
        onOpenChange: a,
        modal: l = !1,
      } = e,
      c = Il(t),
      f = _.useRef(null),
      [h, p] = _.useState(!1),
      [g = !1, y] = im({ prop: i, defaultProp: o, onChange: a });
    return C.jsx(kA, {
      ...c,
      children: C.jsx(wN, {
        scope: t,
        contentId: lS(),
        triggerRef: f,
        open: g,
        onOpenChange: y,
        onOpenToggle: _.useCallback(() => y((w) => !w), [y]),
        hasCustomAnchor: h,
        onCustomAnchorAdd: _.useCallback(() => p(!0), []),
        onCustomAnchorRemove: _.useCallback(() => p(!1), []),
        modal: l,
        children: n,
      }),
    });
  };
$S.displayName = sm;
var WS = "PopoverAnchor",
  SN = _.forwardRef((e, t) => {
    const { __scopePopover: n, ...i } = e,
      o = fs(WS, n),
      a = Il(n),
      { onCustomAnchorAdd: l, onCustomAnchorRemove: c } = o;
    return (
      _.useEffect(() => (l(), () => c()), [l, c]),
      C.jsx(NS, { ...a, ...i, ref: t })
    );
  });
SN.displayName = WS;
var HS = "PopoverTrigger",
  ZS = _.forwardRef((e, t) => {
    const { __scopePopover: n, ...i } = e,
      o = fs(HS, n),
      a = Il(n),
      l = Hn(t, o.triggerRef),
      c = C.jsx(bn.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": XS(o.open),
        ...i,
        ref: l,
        onClick: on(e.onClick, o.onOpenToggle),
      });
    return o.hasCustomAnchor
      ? c
      : C.jsx(NS, { asChild: !0, ...a, children: c });
  });
ZS.displayName = HS;
var om = "PopoverPortal",
  [bN, EN] = US(om, { forceMount: void 0 }),
  KS = (e) => {
    const { __scopePopover: t, forceMount: n, children: i, container: o } = e,
      a = fs(om, t);
    return C.jsx(bN, {
      scope: t,
      forceMount: n,
      children: C.jsx(ld, {
        present: n || a.open,
        children: C.jsx(jS, { asChild: !0, container: o, children: i }),
      }),
    });
  };
KS.displayName = om;
var Uo = "PopoverContent",
  GS = _.forwardRef((e, t) => {
    const n = EN(Uo, e.__scopePopover),
      { forceMount: i = n.forceMount, ...o } = e,
      a = fs(Uo, e.__scopePopover);
    return C.jsx(ld, {
      present: i || a.open,
      children: a.modal
        ? C.jsx(_N, { ...o, ref: t })
        : C.jsx(CN, { ...o, ref: t }),
    });
  });
GS.displayName = Uo;
var _N = _.forwardRef((e, t) => {
    const n = fs(Uo, e.__scopePopover),
      i = _.useRef(null),
      o = Hn(t, i),
      a = _.useRef(!1);
    return (
      _.useEffect(() => {
        const l = i.current;
        if (l) return FA(l);
      }, []),
      C.jsx(zS, {
        as: zs,
        allowPinchZoom: !0,
        children: C.jsx(qS, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: on(e.onCloseAutoFocus, (l) => {
            var c;
            l.preventDefault(),
              a.current || (c = n.triggerRef.current) == null || c.focus();
          }),
          onPointerDownOutside: on(
            e.onPointerDownOutside,
            (l) => {
              const c = l.detail.originalEvent,
                f = c.button === 0 && c.ctrlKey === !0,
                h = c.button === 2 || f;
              a.current = h;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: on(e.onFocusOutside, (l) => l.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  CN = _.forwardRef((e, t) => {
    const n = fs(Uo, e.__scopePopover),
      i = _.useRef(!1),
      o = _.useRef(!1);
    return C.jsx(qS, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        var l, c;
        (l = e.onCloseAutoFocus) == null || l.call(e, a),
          a.defaultPrevented ||
            (i.current || (c = n.triggerRef.current) == null || c.focus(),
            a.preventDefault()),
          (i.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (a) => {
        var f, h;
        (f = e.onInteractOutside) == null || f.call(e, a),
          a.defaultPrevented ||
            ((i.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const l = a.target;
        ((h = n.triggerRef.current) == null ? void 0 : h.contains(l)) &&
          a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            o.current &&
            a.preventDefault();
      },
    });
  }),
  qS = _.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: i,
        onOpenAutoFocus: o,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: l,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: h,
        onInteractOutside: p,
        ...g
      } = e,
      y = fs(Uo, n),
      w = Il(n);
    return (
      dR(),
      C.jsx(oS, {
        asChild: !0,
        loop: !0,
        trapped: i,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: C.jsx(iS, {
          asChild: !0,
          disableOutsidePointerEvents: l,
          onInteractOutside: p,
          onEscapeKeyDown: c,
          onPointerDownOutside: f,
          onFocusOutside: h,
          onDismiss: () => y.onOpenChange(!1),
          children: C.jsx(TA, {
            "data-state": XS(y.open),
            role: "dialog",
            id: y.contentId,
            ...w,
            ...g,
            ref: t,
            style: {
              ...g.style,
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
  YS = "PopoverClose",
  kN = _.forwardRef((e, t) => {
    const { __scopePopover: n, ...i } = e,
      o = fs(YS, n);
    return C.jsx(bn.button, {
      type: "button",
      ...i,
      ref: t,
      onClick: on(e.onClick, () => o.onOpenChange(!1)),
    });
  });
kN.displayName = YS;
var TN = "PopoverArrow",
  PN = _.forwardRef((e, t) => {
    const { __scopePopover: n, ...i } = e,
      o = Il(n);
    return C.jsx(PA, { ...o, ...i, ref: t });
  });
PN.displayName = TN;
function XS(e) {
  return e ? "open" : "closed";
}
var RN = $S,
  AN = ZS,
  NN = KS,
  QS = GS;
const jN = RN,
  DN = AN,
  JS = _.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...i }, o) =>
      C.jsx(NN, {
        children: C.jsx(QS, {
          ref: o,
          align: t,
          sideOffset: n,
          className: ot(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
          ...i,
        }),
      })
  );
JS.displayName = QS.displayName;
const ON = () =>
    C.jsxs(jN, {
      children: [
        C.jsxs(DN, {
          className: "flex items-center gap-2 pointer-events-none",
          children: [
            C.jsx("img", { src: "/ru.svg", alt: "" }),
            "Ру",
            C.jsx("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: C.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M4.23008 8.01443C4.35907 7.70304 4.66293 7.5 4.99998 7.5H15C15.337 7.5 15.6409 7.70304 15.7699 8.01443C15.8989 8.32583 15.8276 8.68426 15.5892 8.92259L10.5892 13.9226C10.2638 14.248 9.73617 14.248 9.41073 13.9226L4.41073 8.92259C4.1724 8.68426 4.1011 8.32583 4.23008 8.01443ZM7.01183 9.16667L9.99998 12.1548L12.9881 9.16667H7.01183Z",
                fill: "#fff",
              }),
            }),
          ],
        }),
        C.jsx(JS, {}),
      ],
    }),
  Zn = ({ className: e, children: t }) =>
    C.jsx("div", {
      className: ot("w-full mx-auto max-w-[1240px] px-4", e),
      children: t,
    }),
  ac = ({ className: e, nums: t, text: n }) =>
    C.jsxs("article", {
      className: ot(
        "px-6 py-4 relative bg-bg_surface_container h-[160px] w-full overflow-hidden",
        e
      ),
      children: [
        C.jsx("img", {
          src: "/bg-logo.svg",
          className: "absolute top-2 right-0",
        }),
        C.jsx("h2", {
          className: "text-primary text-[32px] semibold leading-[130%] mb-4",
          children: t,
        }),
        C.jsx("h4", {
          className: "text-on_surface normal text-base",
          children: n,
        }),
      ],
    }),
  LN = ({ className: e, subtitle: t, title: n, img: i }) =>
    C.jsxs("div", {
      className: ot("flex items-center gap-4", e),
      children: [
        C.jsx("img", { src: i, alt: "contact icon" }),
        C.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            C.jsx("h5", { className: "text-sm text-[#454545]", children: t }),
            C.jsx("h4", { className: "text-[#171717] semibold", children: n }),
          ],
        }),
      ],
    }),
  eb = ({ className: e, name: t, date: n, bottomClassName: i }) =>
    C.jsxs("div", {
      className: ot("rounded-t-[4px] overflow-hidden", e),
      children: [
        C.jsx("div", {
          className:
            "bg-teritary_07 flex items-center text-teritary_11 h-11 px-4",
          children: t,
        }),
        C.jsx("div", {
          className: ot(
            "h-14 bg-bg_surface_container semibold flex items-center text-lg px-4",
            i
          ),
          children: n,
        }),
      ],
    }),
  Rx = ({ className: e, title: t, text: n, img: i }) =>
    C.jsxs("article", {
      className: ot(
        "px-8 py-6 relative overflow-hidden h-[296px] w-full text-on_primary",
        e
      ),
      children: [
        C.jsx("div", {
          className:
            "absolute size-full z-10  top-0 left-0 bg-gradient-to-r from-25% from-[#2C57A7] to-[#2C57A7]/20 ",
        }),
        C.jsx("img", {
          src: i,
          className: "absolute top-0 right-0 object-cover",
        }),
        C.jsxs("div", {
          className: "relative z-20",
          children: [
            C.jsx("h4", {
              className: "text-2xl mb-4 max-w-[444px] z-20 h-16",
              children: t,
            }),
            C.jsx("p", {
              className: "text-base w-regular max-w-[360px] z-20",
              children: n,
            }),
            C.jsxs(wn, {
              className: "text-sm px-0 mt-4 py-1.5 z-20",
              variant: "link",
              children: ["Скачать PDF ", C.jsx(J0, {})],
            }),
          ],
        }),
      ],
    }),
  am = _.createContext({});
function lm(e) {
  const t = _.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const cd = _.createContext(null),
  um = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class MN extends _.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const i = n.offsetParent,
        o = (i instanceof HTMLElement && i.offsetWidth) || 0,
        a = this.props.sizeRef.current;
      (a.height = n.offsetHeight || 0),
        (a.width = n.offsetWidth || 0),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = o - a.width - a.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function FN({ children: e, isPresent: t, anchorX: n }) {
  const i = _.useId(),
    o = _.useRef(null),
    a = _.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: l } = _.useContext(um);
  return (
    _.useInsertionEffect(() => {
      const { width: c, height: f, top: h, left: p, right: g } = a.current;
      if (t || !o.current || !c || !f) return;
      const y = n === "left" ? `left: ${p}` : `right: ${g}`;
      o.current.dataset.motionPopId = i;
      const w = document.createElement("style");
      return (
        l && (w.nonce = l),
        document.head.appendChild(w),
        w.sheet &&
          w.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            ${y}px !important;
            top: ${h}px !important;
          }
        `),
        () => {
          document.head.removeChild(w);
        }
      );
    }, [t]),
    C.jsx(MN, {
      isPresent: t,
      childRef: o,
      sizeRef: a,
      children: _.cloneElement(e, { ref: o }),
    })
  );
}
const IN = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: i,
  custom: o,
  presenceAffectsLayout: a,
  mode: l,
  anchorX: c,
}) => {
  const f = lm(VN),
    h = _.useId(),
    p = _.useCallback(
      (y) => {
        f.set(y, !0);
        for (const w of f.values()) if (!w) return;
        i && i();
      },
      [f, i]
    ),
    g = _.useMemo(
      () => ({
        id: h,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: p,
        register: (y) => (f.set(y, !1), () => f.delete(y)),
      }),
      a ? [Math.random(), p] : [n, p]
    );
  return (
    _.useMemo(() => {
      f.forEach((y, w) => f.set(w, !1));
    }, [n]),
    _.useEffect(() => {
      !n && !f.size && i && i();
    }, [n]),
    l === "popLayout" &&
      (e = C.jsx(FN, { isPresent: n, anchorX: c, children: e })),
    C.jsx(cd.Provider, { value: g, children: e })
  );
};
function VN() {
  return new Map();
}
function tb(e = !0) {
  const t = _.useContext(cd);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: i, register: o } = t,
    a = _.useId();
  _.useEffect(() => {
    e && o(a);
  }, [e]);
  const l = _.useCallback(() => e && i && i(a), [a, i, e]);
  return !n && i ? [!1, l] : [!0];
}
const lc = (e) => e.key || "";
function Ax(e) {
  const t = [];
  return (
    _.Children.forEach(e, (n) => {
      _.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const cm = typeof window < "u",
  nb = cm ? _.useLayoutEffect : _.useEffect,
  vc = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: i,
    presenceAffectsLayout: o = !0,
    mode: a = "sync",
    propagate: l = !1,
    anchorX: c = "left",
  }) => {
    const [f, h] = tb(l),
      p = _.useMemo(() => Ax(e), [e]),
      g = l && !f ? [] : p.map(lc),
      y = _.useRef(!0),
      w = _.useRef(p),
      x = lm(() => new Map()),
      [S, E] = _.useState(p),
      [b, P] = _.useState(p);
    nb(() => {
      (y.current = !1), (w.current = p);
      for (let T = 0; T < b.length; T++) {
        const M = lc(b[T]);
        g.includes(M) ? x.delete(M) : x.get(M) !== !0 && x.set(M, !1);
      }
    }, [b, g.length, g.join("-")]);
    const R = [];
    if (p !== S) {
      let T = [...p];
      for (let M = 0; M < b.length; M++) {
        const V = b[M],
          F = lc(V);
        g.includes(F) || (T.splice(M, 0, V), R.push(V));
      }
      a === "wait" && R.length && (T = R), P(Ax(T)), E(p);
      return;
    }
    const { forceRender: j } = _.useContext(am);
    return C.jsx(C.Fragment, {
      children: b.map((T) => {
        const M = lc(T),
          V = l && !f ? !1 : p === b || g.includes(M),
          F = () => {
            if (x.has(M)) x.set(M, !0);
            else return;
            let Y = !0;
            x.forEach((Q) => {
              Q || (Y = !1);
            }),
              Y &&
                (j == null || j(),
                P(w.current),
                l && (h == null || h()),
                i && i());
          };
        return C.jsx(
          IN,
          {
            isPresent: V,
            initial: !y.current || n ? void 0 : !1,
            custom: V ? void 0 : t,
            presenceAffectsLayout: o,
            mode: a,
            onExitComplete: V ? void 0 : F,
            anchorX: c,
            children: T,
          },
          M
        );
      }),
    });
  },
  Un = (e) => e;
let sp = Un;
const BN = { skipAnimations: !1, useManualTiming: !1 };
function zN(e) {
  let t = new Set(),
    n = new Set(),
    i = !1,
    o = !1;
  const a = new WeakSet();
  let l = { delta: 0, timestamp: 0, isProcessing: !1 };
  function c(h) {
    a.has(h) && (f.schedule(h), e()), h(l);
  }
  const f = {
    schedule: (h, p = !1, g = !1) => {
      const w = g && i ? t : n;
      return p && a.add(h), w.has(h) || w.add(h), h;
    },
    cancel: (h) => {
      n.delete(h), a.delete(h);
    },
    process: (h) => {
      if (((l = h), i)) {
        o = !0;
        return;
      }
      (i = !0),
        ([t, n] = [n, t]),
        t.forEach(c),
        t.clear(),
        (i = !1),
        o && ((o = !1), f.process(h));
    },
  };
  return f;
}
const uc = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  UN = 40;
function rb(e, t) {
  let n = !1,
    i = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    l = uc.reduce((b, P) => ((b[P] = zN(a)), b), {}),
    {
      read: c,
      resolveKeyframes: f,
      update: h,
      preRender: p,
      render: g,
      postRender: y,
    } = l,
    w = () => {
      const b = performance.now();
      (n = !1),
        (o.delta = i ? 1e3 / 60 : Math.max(Math.min(b - o.timestamp, UN), 1)),
        (o.timestamp = b),
        (o.isProcessing = !0),
        c.process(o),
        f.process(o),
        h.process(o),
        p.process(o),
        g.process(o),
        y.process(o),
        (o.isProcessing = !1),
        n && t && ((i = !1), e(w));
    },
    x = () => {
      (n = !0), (i = !0), o.isProcessing || e(w);
    };
  return {
    schedule: uc.reduce((b, P) => {
      const R = l[P];
      return (b[P] = (j, T = !1, M = !1) => (n || x(), R.schedule(j, T, M))), b;
    }, {}),
    cancel: (b) => {
      for (let P = 0; P < uc.length; P++) l[uc[P]].cancel(b);
    },
    state: o,
    steps: l,
  };
}
const {
    schedule: kt,
    cancel: ss,
    state: rn,
    steps: Th,
  } = rb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Un, !0),
  ib = _.createContext({ strict: !1 }),
  Nx = {
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
  $o = {};
for (const e in Nx) $o[e] = { isEnabled: (t) => Nx[e].some((n) => !!t[n]) };
function $N(e) {
  for (const t in e) $o[t] = { ...$o[t], ...e[t] };
}
const WN = new Set([
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
function Dc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    WN.has(e)
  );
}
let sb = (e) => !Dc(e);
function HN(e) {
  e && (sb = (t) => (t.startsWith("on") ? !Dc(t) : e(t)));
}
try {
  HN(require("@emotion/is-prop-valid").default);
} catch {}
function ZN(e, t, n) {
  const i = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((sb(o) ||
        (n === !0 && Dc(o)) ||
        (!t && !Dc(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (i[o] = e[o]));
  return i;
}
function KN(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...i) => e(...i);
  return new Proxy(n, {
    get: (i, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
const dd = _.createContext({});
function cl(e) {
  return typeof e == "string" || Array.isArray(e);
}
function fd(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const dm = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  fm = ["initial", ...dm];
function hd(e) {
  return fd(e.animate) || fm.some((t) => cl(e[t]));
}
function ob(e) {
  return !!(hd(e) || e.variants);
}
function GN(e, t) {
  if (hd(e)) {
    const { initial: n, animate: i } = e;
    return {
      initial: n === !1 || cl(n) ? n : void 0,
      animate: cl(i) ? i : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function qN(e) {
  const { initial: t, animate: n } = GN(e, _.useContext(dd));
  return _.useMemo(() => ({ initial: t, animate: n }), [jx(t), jx(n)]);
}
function jx(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const YN = Symbol.for("motionComponentSymbol");
function No(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function XN(e, t, n) {
  return _.useCallback(
    (i) => {
      i && e.onMount && e.onMount(i),
        t && (i ? t.mount(i) : t.unmount()),
        n && (typeof n == "function" ? n(i) : No(n) && (n.current = i));
    },
    [t]
  );
}
const hm = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  QN = "framerAppearId",
  ab = "data-" + hm(QN),
  { schedule: pm, cancel: XV } = rb(queueMicrotask, !1),
  lb = _.createContext({});
function JN(e, t, n, i, o) {
  var a, l;
  const { visualElement: c } = _.useContext(dd),
    f = _.useContext(ib),
    h = _.useContext(cd),
    p = _.useContext(um).reducedMotion,
    g = _.useRef(null);
  (i = i || f.renderer),
    !g.current &&
      i &&
      (g.current = i(e, {
        visualState: t,
        parent: c,
        props: n,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: p,
      }));
  const y = g.current,
    w = _.useContext(lb);
  y &&
    !y.projection &&
    o &&
    (y.type === "html" || y.type === "svg") &&
    ej(g.current, n, o, w);
  const x = _.useRef(!1);
  _.useInsertionEffect(() => {
    y && x.current && y.update(n, h);
  });
  const S = n[ab],
    E = _.useRef(
      !!S &&
        !(
          !((a = window.MotionHandoffIsComplete) === null || a === void 0) &&
          a.call(window, S)
        ) &&
        ((l = window.MotionHasOptimisedAnimation) === null || l === void 0
          ? void 0
          : l.call(window, S))
    );
  return (
    nb(() => {
      y &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        y.updateFeatures(),
        pm.render(y.render),
        E.current && y.animationState && y.animationState.animateChanges());
    }),
    _.useEffect(() => {
      y &&
        (!E.current && y.animationState && y.animationState.animateChanges(),
        E.current &&
          (queueMicrotask(() => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) === null ||
              b === void 0 ||
              b.call(window, S);
          }),
          (E.current = !1)));
    }),
    y
  );
}
function ej(e, t, n, i) {
  const {
    layoutId: o,
    layout: a,
    drag: l,
    dragConstraints: c,
    layoutScroll: f,
    layoutRoot: h,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : ub(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: a,
      alwaysMeasureLayout: !!l || (c && No(c)),
      visualElement: e,
      animationType: typeof a == "string" ? a : "both",
      initialPromotionConfig: i,
      layoutScroll: f,
      layoutRoot: h,
    });
}
function ub(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : ub(e.parent);
}
function tj({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: i,
  Component: o,
}) {
  var a, l;
  e && $N(e);
  function c(h, p) {
    let g;
    const y = { ..._.useContext(um), ...h, layoutId: nj(h) },
      { isStatic: w } = y,
      x = qN(h),
      S = i(h, w);
    if (!w && cm) {
      rj();
      const E = ij(y);
      (g = E.MeasureLayout),
        (x.visualElement = JN(o, S, y, t, E.ProjectionNode));
    }
    return C.jsxs(dd.Provider, {
      value: x,
      children: [
        g && x.visualElement
          ? C.jsx(g, { visualElement: x.visualElement, ...y })
          : null,
        n(o, h, XN(S, x.visualElement, p), S, w, x.visualElement),
      ],
    });
  }
  c.displayName = `motion.${
    typeof o == "string"
      ? o
      : `create(${
          (l = (a = o.displayName) !== null && a !== void 0 ? a : o.name) !==
            null && l !== void 0
            ? l
            : ""
        })`
  }`;
  const f = _.forwardRef(c);
  return (f[YN] = o), f;
}
function nj({ layoutId: e }) {
  const t = _.useContext(am).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rj(e, t) {
  _.useContext(ib).strict;
}
function ij(e) {
  const { drag: t, layout: n } = $o;
  if (!t && !n) return {};
  const i = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
const sj = [
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
function mm(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(sj.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Dx(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, i) => {
        (t[0][i] = n.get()), (t[1][i] = n.getVelocity());
      }),
    t
  );
}
function gm(e, t, n, i) {
  if (typeof t == "function") {
    const [o, a] = Dx(i);
    t = t(n !== void 0 ? n : e.custom, o, a);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, a] = Dx(i);
    t = t(n !== void 0 ? n : e.custom, o, a);
  }
  return t;
}
const op = (e) => Array.isArray(e),
  oj = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  aj = (e) => (op(e) ? e[e.length - 1] || 0 : e),
  pn = (e) => !!(e && e.getVelocity);
function xc(e) {
  const t = pn(e) ? e.get() : e;
  return oj(t) ? t.toValue() : t;
}
function lj(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  i,
  o,
  a
) {
  const l = { latestValues: uj(i, o, a, e), renderState: t() };
  return (
    n &&
      ((l.onMount = (c) => n({ props: i, current: c, ...l })),
      (l.onUpdate = (c) => n(c))),
    l
  );
}
const cb = (e) => (t, n) => {
  const i = _.useContext(dd),
    o = _.useContext(cd),
    a = () => lj(e, t, i, o);
  return n ? a() : lm(a);
};
function uj(e, t, n, i) {
  const o = {},
    a = i(e, {});
  for (const y in a) o[y] = xc(a[y]);
  let { initial: l, animate: c } = e;
  const f = hd(e),
    h = ob(e);
  t &&
    h &&
    !f &&
    e.inherit !== !1 &&
    (l === void 0 && (l = t.initial), c === void 0 && (c = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || l === !1;
  const g = p ? c : l;
  if (g && typeof g != "boolean" && !fd(g)) {
    const y = Array.isArray(g) ? g : [g];
    for (let w = 0; w < y.length; w++) {
      const x = gm(e, y[w]);
      if (x) {
        const { transitionEnd: S, transition: E, ...b } = x;
        for (const P in b) {
          let R = b[P];
          if (Array.isArray(R)) {
            const j = p ? R.length - 1 : 0;
            R = R[j];
          }
          R !== null && (o[P] = R);
        }
        for (const P in S) o[P] = S[P];
      }
    }
  }
  return o;
}
const Jo = [
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
  Xs = new Set(Jo),
  db = (e) => (t) => typeof t == "string" && t.startsWith(e),
  ym = db("--"),
  cj = db("var(--"),
  vm = (e) => (cj(e) ? dj.test(e.split("/*")[0].trim()) : !1),
  dj =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  fb = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Si = (e, t, n) => (n > t ? t : n < e ? e : n),
  ea = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  dl = { ...ea, transform: (e) => Si(0, 1, e) },
  cc = { ...ea, default: 1 },
  Vl = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Qi = Vl("deg"),
  $r = Vl("%"),
  Ue = Vl("px"),
  fj = Vl("vh"),
  hj = Vl("vw"),
  Ox = {
    ...$r,
    parse: (e) => $r.parse(e) / 100,
    transform: (e) => $r.transform(e * 100),
  },
  pj = {
    borderWidth: Ue,
    borderTopWidth: Ue,
    borderRightWidth: Ue,
    borderBottomWidth: Ue,
    borderLeftWidth: Ue,
    borderRadius: Ue,
    radius: Ue,
    borderTopLeftRadius: Ue,
    borderTopRightRadius: Ue,
    borderBottomRightRadius: Ue,
    borderBottomLeftRadius: Ue,
    width: Ue,
    maxWidth: Ue,
    height: Ue,
    maxHeight: Ue,
    top: Ue,
    right: Ue,
    bottom: Ue,
    left: Ue,
    padding: Ue,
    paddingTop: Ue,
    paddingRight: Ue,
    paddingBottom: Ue,
    paddingLeft: Ue,
    margin: Ue,
    marginTop: Ue,
    marginRight: Ue,
    marginBottom: Ue,
    marginLeft: Ue,
    backgroundPositionX: Ue,
    backgroundPositionY: Ue,
  },
  mj = {
    rotate: Qi,
    rotateX: Qi,
    rotateY: Qi,
    rotateZ: Qi,
    scale: cc,
    scaleX: cc,
    scaleY: cc,
    scaleZ: cc,
    skew: Qi,
    skewX: Qi,
    skewY: Qi,
    distance: Ue,
    translateX: Ue,
    translateY: Ue,
    translateZ: Ue,
    x: Ue,
    y: Ue,
    z: Ue,
    perspective: Ue,
    transformPerspective: Ue,
    opacity: dl,
    originX: Ox,
    originY: Ox,
    originZ: Ue,
  },
  Lx = { ...ea, transform: Math.round },
  xm = {
    ...pj,
    ...mj,
    zIndex: Lx,
    size: Ue,
    fillOpacity: dl,
    strokeOpacity: dl,
    numOctaves: Lx,
  },
  gj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  yj = Jo.length;
function vj(e, t, n) {
  let i = "",
    o = !0;
  for (let a = 0; a < yj; a++) {
    const l = Jo[a],
      c = e[l];
    if (c === void 0) continue;
    let f = !0;
    if (
      (typeof c == "number"
        ? (f = c === (l.startsWith("scale") ? 1 : 0))
        : (f = parseFloat(c) === 0),
      !f || n)
    ) {
      const h = fb(c, xm[l]);
      if (!f) {
        o = !1;
        const p = gj[l] || l;
        i += `${p}(${h}) `;
      }
      n && (t[l] = h);
    }
  }
  return (i = i.trim()), n ? (i = n(t, o ? "" : i)) : o && (i = "none"), i;
}
function wm(e, t, n) {
  const { style: i, vars: o, transformOrigin: a } = e;
  let l = !1,
    c = !1;
  for (const f in t) {
    const h = t[f];
    if (Xs.has(f)) {
      l = !0;
      continue;
    } else if (ym(f)) {
      o[f] = h;
      continue;
    } else {
      const p = fb(h, xm[f]);
      f.startsWith("origin") ? ((c = !0), (a[f] = p)) : (i[f] = p);
    }
  }
  if (
    (t.transform ||
      (l || n
        ? (i.transform = vj(t, e.transform, n))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    const { originX: f = "50%", originY: h = "50%", originZ: p = 0 } = a;
    i.transformOrigin = `${f} ${h} ${p}`;
  }
}
const xj = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  wj = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Sj(e, t, n = 1, i = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? xj : wj;
  e[a.offset] = Ue.transform(-i);
  const l = Ue.transform(t),
    c = Ue.transform(n);
  e[a.array] = `${l} ${c}`;
}
function Mx(e, t, n) {
  return typeof e == "string" ? e : Ue.transform(t + n * e);
}
function bj(e, t, n) {
  const i = Mx(t, e.x, e.width),
    o = Mx(n, e.y, e.height);
  return `${i} ${o}`;
}
function Sm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: i,
    originX: o,
    originY: a,
    pathLength: l,
    pathSpacing: c = 1,
    pathOffset: f = 0,
    ...h
  },
  p,
  g
) {
  if ((wm(e, h, g), p)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: y, style: w, dimensions: x } = e;
  y.transform && (x && (w.transform = y.transform), delete y.transform),
    x &&
      (o !== void 0 || a !== void 0 || w.transform) &&
      (w.transformOrigin = bj(
        x,
        o !== void 0 ? o : 0.5,
        a !== void 0 ? a : 0.5
      )),
    t !== void 0 && (y.x = t),
    n !== void 0 && (y.y = n),
    i !== void 0 && (y.scale = i),
    l !== void 0 && Sj(y, l, c, f, !1);
}
const bm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  hb = () => ({ ...bm(), attrs: {} }),
  Em = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function pb(e, { style: t, vars: n }, i, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(i));
  for (const a in n) e.style.setProperty(a, n[a]);
}
const mb = new Set([
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
function gb(e, t, n, i) {
  pb(e, t, void 0, i);
  for (const o in t.attrs) e.setAttribute(mb.has(o) ? o : hm(o), t.attrs[o]);
}
const fl = {};
function Ej(e) {
  for (const t in e) (fl[t] = e[t]), ym(t) && (fl[t].isCSSVariable = !0);
}
function yb(e, { layout: t, layoutId: n }) {
  return (
    Xs.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!fl[e] || e === "opacity"))
  );
}
function _m(e, t, n) {
  var i;
  const { style: o } = e,
    a = {};
  for (const l in o)
    (pn(o[l]) ||
      (t.style && pn(t.style[l])) ||
      yb(l, e) ||
      ((i = n == null ? void 0 : n.getValue(l)) === null || i === void 0
        ? void 0
        : i.liveStyle) !== void 0) &&
      (a[l] = o[l]);
  return a;
}
function vb(e, t, n) {
  const i = _m(e, t, n);
  for (const o in e)
    if (pn(e[o]) || pn(t[o])) {
      const a =
        Jo.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      i[a] = e[o];
    }
  return i;
}
function _j(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Fx = ["x", "y", "width", "height", "cx", "cy", "r"],
  Cj = {
    useVisualState: cb({
      scrapeMotionValuesFromProps: vb,
      createRenderState: hb,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: i,
        latestValues: o,
      }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (const c in o)
            if (Xs.has(c)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let l = !t;
        if (t)
          for (let c = 0; c < Fx.length; c++) {
            const f = Fx[c];
            e[f] !== t[f] && (l = !0);
          }
        l &&
          kt.read(() => {
            _j(n, i),
              kt.render(() => {
                Sm(i, o, Em(n.tagName), e.transformTemplate), gb(n, i);
              });
          });
      },
    }),
  },
  kj = {
    useVisualState: cb({
      scrapeMotionValuesFromProps: _m,
      createRenderState: bm,
    }),
  };
function xb(e, t, n) {
  for (const i in t) !pn(t[i]) && !yb(i, n) && (e[i] = t[i]);
}
function Tj({ transformTemplate: e }, t) {
  return _.useMemo(() => {
    const n = bm();
    return wm(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Pj(e, t) {
  const n = e.style || {},
    i = {};
  return xb(i, n, e), Object.assign(i, Tj(e, t)), i;
}
function Rj(e, t) {
  const n = {},
    i = Pj(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = i),
    n
  );
}
function Aj(e, t, n, i) {
  const o = _.useMemo(() => {
    const a = hb();
    return (
      Sm(a, t, Em(i), e.transformTemplate),
      { ...a.attrs, style: { ...a.style } }
    );
  }, [t]);
  if (e.style) {
    const a = {};
    xb(a, e.style, e), (o.style = { ...a, ...o.style });
  }
  return o;
}
function Nj(e = !1) {
  return (n, i, o, { latestValues: a }, l) => {
    const f = (mm(n) ? Aj : Rj)(i, a, l, n),
      h = ZN(i, typeof n == "string", e),
      p = n !== _.Fragment ? { ...h, ...f, ref: o } : {},
      { children: g } = i,
      y = _.useMemo(() => (pn(g) ? g.get() : g), [g]);
    return _.createElement(n, { ...p, children: y });
  };
}
function jj(e, t) {
  return function (i, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const l = {
      ...(mm(i) ? Cj : kj),
      preloadedFeatures: e,
      useRender: Nj(o),
      createVisualElement: t,
      Component: i,
    };
    return tj(l);
  };
}
function wb(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
function pd(e, t, n) {
  const i = e.getProps();
  return gm(i, t, n !== void 0 ? n : i.custom, e);
}
function Cm(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Sb = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jo,
]);
let wc;
function Dj() {
  wc = void 0;
}
const Wr = {
  now: () => (
    wc === void 0 &&
      Wr.set(
        rn.isProcessing || BN.useManualTiming ? rn.timestamp : performance.now()
      ),
    wc
  ),
  set: (e) => {
    (wc = e), queueMicrotask(Dj);
  },
};
function km(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Tm(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Pm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return km(this.subscriptions, t), () => Tm(this.subscriptions, t);
  }
  notify(t, n, i) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, i);
      else
        for (let a = 0; a < o; a++) {
          const l = this.subscriptions[a];
          l && l(t, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function bb(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ix = 30,
  Oj = (e) => !isNaN(parseFloat(e));
class Lj {
  constructor(t, n = {}) {
    (this.version = "12.0.6"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (i, o = !0) => {
        const a = Wr.now();
        this.updatedAt !== a && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(i),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Wr.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Oj(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Pm());
    const i = this.events[t].add(n);
    return t === "change"
      ? () => {
          i(),
            kt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : i;
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
  setWithVelocity(t, n, i) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - i);
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
    const t = Wr.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ix
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ix);
    return bb(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function hl(e, t) {
  return new Lj(e, t);
}
function Mj(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hl(n));
}
function Fj(e, t) {
  const n = pd(e, t);
  let { transitionEnd: i = {}, transition: o = {}, ...a } = n || {};
  a = { ...a, ...i };
  for (const l in a) {
    const c = aj(a[l]);
    Mj(e, l, c);
  }
}
function Ij(e) {
  return !!(pn(e) && e.add);
}
function ap(e, t) {
  const n = e.getValue("willChange");
  if (Ij(n)) return n.add(t);
}
function Eb(e) {
  return e.props[ab];
}
function Rm(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Vj = Rm(() => window.ScrollTimeline !== void 0);
class Bj {
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
    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = n;
  }
  attachTimeline(t, n) {
    const i = this.animations.map((o) => {
      if (Vj() && o.attachTimeline) return o.attachTimeline(t);
      if (typeof n == "function") return n(o);
    });
    return () => {
      i.forEach((o, a) => {
        o && o(), this.animations[a].stop();
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
class zj extends Bj {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const mi = (e) => e * 1e3,
  gi = (e) => e / 1e3;
function Am(e) {
  return typeof e == "function";
}
function Vx(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Nm = (e) => Array.isArray(e) && typeof e[0] == "number",
  Uj = { linearEasing: void 0 };
function $j(e, t) {
  const n = Rm(e);
  return () => {
    var i;
    return (i = Uj[t]) !== null && i !== void 0 ? i : n();
  };
}
const Oc = $j(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Wo = (e, t, n) => {
    const i = t - e;
    return i === 0 ? 1 : (n - e) / i;
  },
  _b = (e, t, n = 10) => {
    let i = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let a = 0; a < o; a++) i += e(Wo(0, o - 1, a)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  };
function Cb(e) {
  return !!(
    (typeof e == "function" && Oc()) ||
    !e ||
    (typeof e == "string" && (e in lp || Oc())) ||
    Nm(e) ||
    (Array.isArray(e) && e.every(Cb))
  );
}
const Ga = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
  lp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ga([0, 0.65, 0.55, 1]),
    circOut: Ga([0.55, 0, 1, 0.45]),
    backIn: Ga([0.31, 0.01, 0.66, -0.59]),
    backOut: Ga([0.33, 1.53, 0.69, 0.99]),
  };
function kb(e, t) {
  if (e)
    return typeof e == "function" && Oc()
      ? _b(e, t)
      : Nm(e)
      ? Ga(e)
      : Array.isArray(e)
      ? e.map((n) => kb(n, t) || lp.easeOut)
      : lp[e];
}
const Tb = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Wj = 1e-7,
  Hj = 12;
function Zj(e, t, n, i, o) {
  let a,
    l,
    c = 0;
  do (l = t + (n - t) / 2), (a = Tb(l, i, o) - e), a > 0 ? (n = l) : (t = l);
  while (Math.abs(a) > Wj && ++c < Hj);
  return l;
}
function Bl(e, t, n, i) {
  if (e === t && n === i) return Un;
  const o = (a) => Zj(a, 0, 1, e, n);
  return (a) => (a === 0 || a === 1 ? a : Tb(o(a), t, i));
}
const Pb = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Rb = (e) => (t) => 1 - e(1 - t),
  Ab = Bl(0.33, 1.53, 0.69, 0.99),
  jm = Rb(Ab),
  Nb = Pb(jm),
  jb = (e) =>
    (e *= 2) < 1 ? 0.5 * jm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Dm = (e) => 1 - Math.sin(Math.acos(e)),
  Db = Rb(Dm),
  Ob = Pb(Dm),
  Lb = (e) => /^0[^.\s]+$/u.test(e);
function Kj(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Lb(e)
    : !0;
}
const el = (e) => Math.round(e * 1e5) / 1e5,
  Om = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Gj(e) {
  return e == null;
}
const qj =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Lm = (e, t) => (n) =>
    !!(
      (typeof n == "string" && qj.test(n) && n.startsWith(e)) ||
      (t && !Gj(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Mb = (e, t, n) => (i) => {
    if (typeof i != "string") return i;
    const [o, a, l, c] = i.match(Om);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(a),
      [n]: parseFloat(l),
      alpha: c !== void 0 ? parseFloat(c) : 1,
    };
  },
  Yj = (e) => Si(0, 255, e),
  Ph = { ...ea, transform: (e) => Math.round(Yj(e)) },
  Os = {
    test: Lm("rgb", "red"),
    parse: Mb("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) =>
      "rgba(" +
      Ph.transform(e) +
      ", " +
      Ph.transform(t) +
      ", " +
      Ph.transform(n) +
      ", " +
      el(dl.transform(i)) +
      ")",
  };
function Xj(e) {
  let t = "",
    n = "",
    i = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (i = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (i = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (i += i),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const up = { test: Lm("#"), parse: Xj, transform: Os.transform },
  jo = {
    test: Lm("hsl", "hue"),
    parse: Mb("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: i = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      $r.transform(el(t)) +
      ", " +
      $r.transform(el(n)) +
      ", " +
      el(dl.transform(i)) +
      ")",
  },
  fn = {
    test: (e) => Os.test(e) || up.test(e) || jo.test(e),
    parse: (e) =>
      Os.test(e) ? Os.parse(e) : jo.test(e) ? jo.parse(e) : up.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Os.transform(e)
        : jo.transform(e),
  },
  Qj =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Jj(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Om)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Qj)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Fb = "number",
  Ib = "color",
  eD = "var",
  tD = "var(",
  Bx = "${}",
  nD =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pl(e) {
  const t = e.toString(),
    n = [],
    i = { color: [], number: [], var: [] },
    o = [];
  let a = 0;
  const c = t
    .replace(
      nD,
      (f) => (
        fn.test(f)
          ? (i.color.push(a), o.push(Ib), n.push(fn.parse(f)))
          : f.startsWith(tD)
          ? (i.var.push(a), o.push(eD), n.push(f))
          : (i.number.push(a), o.push(Fb), n.push(parseFloat(f))),
        ++a,
        Bx
      )
    )
    .split(Bx);
  return { values: n, split: c, indexes: i, types: o };
}
function Vb(e) {
  return pl(e).values;
}
function Bb(e) {
  const { split: t, types: n } = pl(e),
    i = t.length;
  return (o) => {
    let a = "";
    for (let l = 0; l < i; l++)
      if (((a += t[l]), o[l] !== void 0)) {
        const c = n[l];
        c === Fb
          ? (a += el(o[l]))
          : c === Ib
          ? (a += fn.transform(o[l]))
          : (a += o[l]);
      }
    return a;
  };
}
const rD = (e) => (typeof e == "number" ? 0 : e);
function iD(e) {
  const t = Vb(e);
  return Bb(e)(t.map(rD));
}
const os = {
    test: Jj,
    parse: Vb,
    createTransformer: Bb,
    getAnimatableNone: iD,
  },
  sD = new Set(["brightness", "contrast", "saturate", "opacity"]);
function oD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [i] = n.match(Om) || [];
  if (!i) return e;
  const o = n.replace(i, "");
  let a = sD.has(t) ? 1 : 0;
  return i !== n && (a *= 100), t + "(" + a + o + ")";
}
const aD = /\b([a-z-]*)\(.*?\)/gu,
  cp = {
    ...os,
    getAnimatableNone: (e) => {
      const t = e.match(aD);
      return t ? t.map(oD).join(" ") : e;
    },
  },
  lD = {
    ...xm,
    color: fn,
    backgroundColor: fn,
    outlineColor: fn,
    fill: fn,
    stroke: fn,
    borderColor: fn,
    borderTopColor: fn,
    borderRightColor: fn,
    borderBottomColor: fn,
    borderLeftColor: fn,
    filter: cp,
    WebkitFilter: cp,
  },
  Mm = (e) => lD[e];
function zb(e, t) {
  let n = Mm(e);
  return (
    n !== cp && (n = os), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const uD = new Set(["auto", "none", "0"]);
function cD(e, t, n) {
  let i = 0,
    o;
  for (; i < e.length && !o; ) {
    const a = e[i];
    typeof a == "string" && !uD.has(a) && pl(a).values.length && (o = e[i]),
      i++;
  }
  if (o && n) for (const a of t) e[a] = zb(n, o);
}
const zx = (e) => e === ea || e === Ue,
  Ux = (e, t) => parseFloat(e.split(", ")[t]),
  $x =
    (e, t) =>
    (n, { transform: i }) => {
      if (i === "none" || !i) return 0;
      const o = i.match(/^matrix3d\((.+)\)$/u);
      if (o) return Ux(o[1], t);
      {
        const a = i.match(/^matrix\((.+)\)$/u);
        return a ? Ux(a[1], e) : 0;
      }
    },
  dD = new Set(["x", "y", "z"]),
  fD = Jo.filter((e) => !dD.has(e));
function hD(e) {
  const t = [];
  return (
    fD.forEach((n) => {
      const i = e.getValue(n);
      i !== void 0 &&
        (t.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ho = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: $x(4, 13),
  y: $x(5, 14),
};
Ho.translateX = Ho.x;
Ho.translateY = Ho.y;
const Is = new Set();
let dp = !1,
  fp = !1;
function Ub() {
  if (fp) {
    const e = Array.from(Is).filter((i) => i.needsMeasurement),
      t = new Set(e.map((i) => i.element)),
      n = new Map();
    t.forEach((i) => {
      const o = hD(i);
      o.length && (n.set(i, o), i.render());
    }),
      e.forEach((i) => i.measureInitialState()),
      t.forEach((i) => {
        i.render();
        const o = n.get(i);
        o &&
          o.forEach(([a, l]) => {
            var c;
            (c = i.getValue(a)) === null || c === void 0 || c.set(l);
          });
      }),
      e.forEach((i) => i.measureEndState()),
      e.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      });
  }
  (fp = !1), (dp = !1), Is.forEach((e) => e.complete()), Is.clear();
}
function $b() {
  Is.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (fp = !0);
  });
}
function pD() {
  $b(), Ub();
}
class Fm {
  constructor(t, n, i, o, a, l = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = i),
      (this.motionValue = o),
      (this.element = a),
      (this.isAsync = l);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Is.add(this),
          dp || ((dp = !0), kt.read($b), kt.resolveKeyframes(Ub)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: i,
      motionValue: o,
    } = this;
    for (let a = 0; a < t.length; a++)
      if (t[a] === null)
        if (a === 0) {
          const l = o == null ? void 0 : o.get(),
            c = t[t.length - 1];
          if (l !== void 0) t[0] = l;
          else if (i && n) {
            const f = i.readValue(n, c);
            f != null && (t[0] = f);
          }
          t[0] === void 0 && (t[0] = c), o && l === void 0 && o.set(t[0]);
        } else t[a] = t[a - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Is.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Is.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Wb = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  mD = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function gD(e) {
  const t = mD.exec(e);
  if (!t) return [,];
  const [, n, i, o] = t;
  return [`--${n ?? i}`, o];
}
function Hb(e, t, n = 1) {
  const [i, o] = gD(e);
  if (!i) return;
  const a = window.getComputedStyle(t).getPropertyValue(i);
  if (a) {
    const l = a.trim();
    return Wb(l) ? parseFloat(l) : l;
  }
  return vm(o) ? Hb(o, t, n + 1) : o;
}
const Zb = (e) => (t) => t.test(e),
  yD = { test: (e) => e === "auto", parse: (e) => e },
  Kb = [ea, Ue, $r, Qi, hj, fj, yD],
  Wx = (e) => Kb.find(Zb(e));
class Gb extends Fm {
  constructor(t, n, i, o, a) {
    super(t, n, i, o, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: i } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let f = 0; f < t.length; f++) {
      let h = t[f];
      if (typeof h == "string" && ((h = h.trim()), vm(h))) {
        const p = Hb(h, n.current);
        p !== void 0 && (t[f] = p),
          f === t.length - 1 && (this.finalKeyframe = h);
      }
    }
    if ((this.resolveNoneKeyframes(), !Sb.has(i) || t.length !== 2)) return;
    const [o, a] = t,
      l = Wx(o),
      c = Wx(a);
    if (l !== c)
      if (zx(l) && zx(c))
        for (let f = 0; f < t.length; f++) {
          const h = t[f];
          typeof h == "string" && (t[f] = parseFloat(h));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      i = [];
    for (let o = 0; o < t.length; o++) Kj(t[o]) && i.push(o);
    i.length && cD(t, i, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: i } = this;
    if (!t || !t.current) return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ho[i](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(i, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: i, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const a = n.getValue(i);
    a && a.jump(this.measuredOrigin, !1);
    const l = o.length - 1,
      c = o[l];
    (o[l] = Ho[i](n.measureViewportBox(), window.getComputedStyle(n.current))),
      c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([f, h]) => {
          n.getValue(f).set(h);
        }),
      this.resolveNoneKeyframes();
  }
}
const Hx = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (os.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function vD(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function xD(e, t, n, i) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const a = e[e.length - 1],
    l = Hx(o, t),
    c = Hx(a, t);
  return !l || !c ? !1 : vD(e) || ((n === "spring" || Am(n)) && i);
}
const wD = (e) => e !== null;
function md(e, { repeat: t, repeatType: n = "loop" }, i) {
  const o = e.filter(wD),
    a = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const SD = 40;
class qb {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: i = "keyframes",
    repeat: o = 0,
    repeatDelay: a = 0,
    repeatType: l = "loop",
    ...c
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Wr.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: i,
        repeat: o,
        repeatDelay: a,
        repeatType: l,
        ...c,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > SD
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && pD(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Wr.now()), (this.hasAttemptedResolve = !0);
    const {
      name: i,
      type: o,
      velocity: a,
      delay: l,
      onComplete: c,
      onUpdate: f,
      isGenerator: h,
    } = this.options;
    if (!h && !xD(t, i, o, a))
      if (l) this.options.duration = 0;
      else {
        f && f(md(t, this.options, n)), c && c(), this.resolveFinishedPromise();
        return;
      }
    const p = this.initPlayback(t, n);
    p !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...p }),
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
const hp = 2e4;
function Yb(e) {
  let t = 0;
  const n = 50;
  let i = e.next(t);
  for (; !i.done && t < hp; ) (t += n), (i = e.next(t));
  return t >= hp ? 1 / 0 : t;
}
const Dt = (e, t, n) => e + (t - e) * n;
function Rh(e, t, n) {
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
function bD({ hue: e, saturation: t, lightness: n, alpha: i }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    a = 0,
    l = 0;
  if (!t) o = a = l = n;
  else {
    const c = n < 0.5 ? n * (1 + t) : n + t - n * t,
      f = 2 * n - c;
    (o = Rh(f, c, e + 1 / 3)), (a = Rh(f, c, e)), (l = Rh(f, c, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(l * 255),
    alpha: i,
  };
}
function Lc(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ah = (e, t, n) => {
    const i = e * e,
      o = n * (t * t - i) + i;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  ED = [up, Os, jo],
  _D = (e) => ED.find((t) => t.test(e));
function Zx(e) {
  const t = _D(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === jo && (n = bD(n)), n;
}
const Kx = (e, t) => {
    const n = Zx(e),
      i = Zx(t);
    if (!n || !i) return Lc(e, t);
    const o = { ...n };
    return (a) => (
      (o.red = Ah(n.red, i.red, a)),
      (o.green = Ah(n.green, i.green, a)),
      (o.blue = Ah(n.blue, i.blue, a)),
      (o.alpha = Dt(n.alpha, i.alpha, a)),
      Os.transform(o)
    );
  },
  CD = (e, t) => (n) => t(e(n)),
  zl = (...e) => e.reduce(CD),
  pp = new Set(["none", "hidden"]);
function kD(e, t) {
  return pp.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function TD(e, t) {
  return (n) => Dt(e, t, n);
}
function Im(e) {
  return typeof e == "number"
    ? TD
    : typeof e == "string"
    ? vm(e)
      ? Lc
      : fn.test(e)
      ? Kx
      : AD
    : Array.isArray(e)
    ? Xb
    : typeof e == "object"
    ? fn.test(e)
      ? Kx
      : PD
    : Lc;
}
function Xb(e, t) {
  const n = [...e],
    i = n.length,
    o = e.map((a, l) => Im(a)(a, t[l]));
  return (a) => {
    for (let l = 0; l < i; l++) n[l] = o[l](a);
    return n;
  };
}
function PD(e, t) {
  const n = { ...e, ...t },
    i = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (i[o] = Im(e[o])(e[o], t[o]));
  return (o) => {
    for (const a in i) n[a] = i[a](o);
    return n;
  };
}
function RD(e, t) {
  var n;
  const i = [],
    o = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < t.values.length; a++) {
    const l = t.types[a],
      c = e.indexes[l][o[l]],
      f = (n = e.values[c]) !== null && n !== void 0 ? n : 0;
    (i[a] = f), o[l]++;
  }
  return i;
}
const AD = (e, t) => {
  const n = os.createTransformer(t),
    i = pl(e),
    o = pl(t);
  return i.indexes.var.length === o.indexes.var.length &&
    i.indexes.color.length === o.indexes.color.length &&
    i.indexes.number.length >= o.indexes.number.length
    ? (pp.has(e) && !o.values.length) || (pp.has(t) && !i.values.length)
      ? kD(e, t)
      : zl(Xb(RD(i, o), o.values), n)
    : Lc(e, t);
};
function Qb(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Dt(e, t, n)
    : Im(e)(e, t);
}
const ND = 5;
function Jb(e, t, n) {
  const i = Math.max(t - ND, 0);
  return bb(n - e(i), t - i);
}
const Ft = {
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
  Gx = 0.001;
function jD({
  duration: e = Ft.duration,
  bounce: t = Ft.bounce,
  velocity: n = Ft.velocity,
  mass: i = Ft.mass,
}) {
  let o,
    a,
    l = 1 - t;
  (l = Si(Ft.minDamping, Ft.maxDamping, l)),
    (e = Si(Ft.minDuration, Ft.maxDuration, gi(e))),
    l < 1
      ? ((o = (h) => {
          const p = h * l,
            g = p * e,
            y = p - n,
            w = mp(h, l),
            x = Math.exp(-g);
          return Gx - (y / w) * x;
        }),
        (a = (h) => {
          const g = h * l * e,
            y = g * n + n,
            w = Math.pow(l, 2) * Math.pow(h, 2) * e,
            x = Math.exp(-g),
            S = mp(Math.pow(h, 2), l);
          return ((-o(h) + Gx > 0 ? -1 : 1) * ((y - w) * x)) / S;
        }))
      : ((o = (h) => {
          const p = Math.exp(-h * e),
            g = (h - n) * e + 1;
          return -0.001 + p * g;
        }),
        (a = (h) => {
          const p = Math.exp(-h * e),
            g = (n - h) * (e * e);
          return p * g;
        }));
  const c = 5 / e,
    f = OD(o, a, c);
  if (((e = mi(e)), isNaN(f)))
    return { stiffness: Ft.stiffness, damping: Ft.damping, duration: e };
  {
    const h = Math.pow(f, 2) * i;
    return { stiffness: h, damping: l * 2 * Math.sqrt(i * h), duration: e };
  }
}
const DD = 12;
function OD(e, t, n) {
  let i = n;
  for (let o = 1; o < DD; o++) i = i - e(i) / t(i);
  return i;
}
function mp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const LD = ["duration", "bounce"],
  MD = ["stiffness", "damping", "mass"];
function qx(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function FD(e) {
  let t = {
    velocity: Ft.velocity,
    stiffness: Ft.stiffness,
    damping: Ft.damping,
    mass: Ft.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!qx(e, MD) && qx(e, LD))
    if (e.visualDuration) {
      const n = e.visualDuration,
        i = (2 * Math.PI) / (n * 1.2),
        o = i * i,
        a = 2 * Si(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: Ft.mass, stiffness: o, damping: a };
    } else {
      const n = jD(e);
      (t = { ...t, ...n, mass: Ft.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function eE(e = Ft.visualDuration, t = Ft.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: i, restDelta: o } = n;
  const a = n.keyframes[0],
    l = n.keyframes[n.keyframes.length - 1],
    c = { done: !1, value: a },
    {
      stiffness: f,
      damping: h,
      mass: p,
      duration: g,
      velocity: y,
      isResolvedFromDuration: w,
    } = FD({ ...n, velocity: -gi(n.velocity || 0) }),
    x = y || 0,
    S = h / (2 * Math.sqrt(f * p)),
    E = l - a,
    b = gi(Math.sqrt(f / p)),
    P = Math.abs(E) < 5;
  i || (i = P ? Ft.restSpeed.granular : Ft.restSpeed.default),
    o || (o = P ? Ft.restDelta.granular : Ft.restDelta.default);
  let R;
  if (S < 1) {
    const T = mp(b, S);
    R = (M) => {
      const V = Math.exp(-S * b * M);
      return (
        l - V * (((x + S * b * E) / T) * Math.sin(T * M) + E * Math.cos(T * M))
      );
    };
  } else if (S === 1) R = (T) => l - Math.exp(-b * T) * (E + (x + b * E) * T);
  else {
    const T = b * Math.sqrt(S * S - 1);
    R = (M) => {
      const V = Math.exp(-S * b * M),
        F = Math.min(T * M, 300);
      return (
        l - (V * ((x + S * b * E) * Math.sinh(F) + T * E * Math.cosh(F))) / T
      );
    };
  }
  const j = {
    calculatedDuration: (w && g) || null,
    next: (T) => {
      const M = R(T);
      if (w) c.done = T >= g;
      else {
        let V = 0;
        S < 1 && (V = T === 0 ? mi(x) : Jb(R, T, M));
        const F = Math.abs(V) <= i,
          Y = Math.abs(l - M) <= o;
        c.done = F && Y;
      }
      return (c.value = c.done ? l : M), c;
    },
    toString: () => {
      const T = Math.min(Yb(j), hp),
        M = _b((V) => j.next(T * V).value, T, 30);
      return T + "ms " + M;
    },
  };
  return j;
}
function Yx({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: i = 325,
  bounceDamping: o = 10,
  bounceStiffness: a = 500,
  modifyTarget: l,
  min: c,
  max: f,
  restDelta: h = 0.5,
  restSpeed: p,
}) {
  const g = e[0],
    y = { done: !1, value: g },
    w = (F) => (c !== void 0 && F < c) || (f !== void 0 && F > f),
    x = (F) =>
      c === void 0
        ? f
        : f === void 0 || Math.abs(c - F) < Math.abs(f - F)
        ? c
        : f;
  let S = n * t;
  const E = g + S,
    b = l === void 0 ? E : l(E);
  b !== E && (S = b - g);
  const P = (F) => -S * Math.exp(-F / i),
    R = (F) => b + P(F),
    j = (F) => {
      const Y = P(F),
        Q = R(F);
      (y.done = Math.abs(Y) <= h), (y.value = y.done ? b : Q);
    };
  let T, M;
  const V = (F) => {
    w(y.value) &&
      ((T = F),
      (M = eE({
        keyframes: [y.value, x(y.value)],
        velocity: Jb(R, F, y.value),
        damping: o,
        stiffness: a,
        restDelta: h,
        restSpeed: p,
      })));
  };
  return (
    V(0),
    {
      calculatedDuration: null,
      next: (F) => {
        let Y = !1;
        return (
          !M && T === void 0 && ((Y = !0), j(F), V(F)),
          T !== void 0 && F >= T ? M.next(F - T) : (!Y && j(F), y)
        );
      },
    }
  );
}
const ID = Bl(0.42, 0, 1, 1),
  VD = Bl(0, 0, 0.58, 1),
  tE = Bl(0.42, 0, 0.58, 1),
  BD = (e) => Array.isArray(e) && typeof e[0] != "number",
  Xx = {
    linear: Un,
    easeIn: ID,
    easeInOut: tE,
    easeOut: VD,
    circIn: Dm,
    circInOut: Ob,
    circOut: Db,
    backIn: jm,
    backInOut: Nb,
    backOut: Ab,
    anticipate: jb,
  },
  Qx = (e) => {
    if (Nm(e)) {
      sp(e.length === 4);
      const [t, n, i, o] = e;
      return Bl(t, n, i, o);
    } else if (typeof e == "string") return sp(Xx[e] !== void 0), Xx[e];
    return e;
  };
function zD(e, t, n) {
  const i = [],
    o = n || Qb,
    a = e.length - 1;
  for (let l = 0; l < a; l++) {
    let c = o(e[l], e[l + 1]);
    if (t) {
      const f = Array.isArray(t) ? t[l] || Un : t;
      c = zl(f, c);
    }
    i.push(c);
  }
  return i;
}
function UD(e, t, { clamp: n = !0, ease: i, mixer: o } = {}) {
  const a = e.length;
  if ((sp(a === t.length), a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  const l = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const c = zD(t, i, o),
    f = c.length,
    h = (p) => {
      if (l && p < e[0]) return t[0];
      let g = 0;
      if (f > 1) for (; g < e.length - 2 && !(p < e[g + 1]); g++);
      const y = Wo(e[g], e[g + 1], p);
      return c[g](y);
    };
  return n ? (p) => h(Si(e[0], e[a - 1], p)) : h;
}
function $D(e, t) {
  const n = e[e.length - 1];
  for (let i = 1; i <= t; i++) {
    const o = Wo(0, t, i);
    e.push(Dt(n, 1, o));
  }
}
function WD(e) {
  const t = [0];
  return $D(t, e.length - 1), t;
}
function HD(e, t) {
  return e.map((n) => n * t);
}
function ZD(e, t) {
  return e.map(() => t || tE).splice(0, e.length - 1);
}
function Mc({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: i = "easeInOut",
}) {
  const o = BD(i) ? i.map(Qx) : Qx(i),
    a = { done: !1, value: t[0] },
    l = HD(n && n.length === t.length ? n : WD(t), e),
    c = UD(l, t, { ease: Array.isArray(o) ? o : ZD(t, o) });
  return {
    calculatedDuration: e,
    next: (f) => ((a.value = c(f)), (a.done = f >= e), a),
  };
}
const KD = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => kt.update(t, !0),
      stop: () => ss(t),
      now: () => (rn.isProcessing ? rn.timestamp : Wr.now()),
    };
  },
  GD = { decay: Yx, inertia: Yx, tween: Mc, keyframes: Mc, spring: eE },
  qD = (e) => e / 100;
class Vm extends qb {
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
        const { onStop: f } = this.options;
        f && f();
      });
    const { name: n, motionValue: i, element: o, keyframes: a } = this.options,
      l = (o == null ? void 0 : o.KeyframeResolver) || Fm,
      c = (f, h) => this.onKeyframesResolved(f, h);
    (this.resolver = new l(a, c, n, i, o)), this.resolver.scheduleResolve();
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
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: a,
        velocity: l = 0,
      } = this.options,
      c = Am(n) ? n : GD[n] || Mc;
    let f, h;
    c !== Mc &&
      typeof t[0] != "number" &&
      ((f = zl(qD, Qb(t[0], t[1]))), (t = [0, 100]));
    const p = c({ ...this.options, keyframes: t });
    a === "mirror" &&
      (h = c({ ...this.options, keyframes: [...t].reverse(), velocity: -l })),
      p.calculatedDuration === null && (p.calculatedDuration = Yb(p));
    const { calculatedDuration: g } = p,
      y = g + o,
      w = y * (i + 1) - o;
    return {
      generator: p,
      mirroredGenerator: h,
      mapPercentToKeyframes: f,
      calculatedDuration: g,
      resolvedDuration: y,
      totalDuration: w,
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
    const { resolved: i } = this;
    if (!i) {
      const { keyframes: F } = this.options;
      return { done: !0, value: F[F.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: a,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      keyframes: f,
      calculatedDuration: h,
      totalDuration: p,
      resolvedDuration: g,
    } = i;
    if (this.startTime === null) return a.next(0);
    const {
      delay: y,
      repeat: w,
      repeatType: x,
      repeatDelay: S,
      onUpdate: E,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - p / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const b = this.currentTime - y * (this.speed >= 0 ? 1 : -1),
      P = this.speed >= 0 ? b < 0 : b > p;
    (this.currentTime = Math.max(b, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = p);
    let R = this.currentTime,
      j = a;
    if (w) {
      const F = Math.min(this.currentTime, p) / g;
      let Y = Math.floor(F),
        Q = F % 1;
      !Q && F >= 1 && (Q = 1),
        Q === 1 && Y--,
        (Y = Math.min(Y, w + 1)),
        !!(Y % 2) &&
          (x === "reverse"
            ? ((Q = 1 - Q), S && (Q -= S / g))
            : x === "mirror" && (j = l)),
        (R = Si(0, 1, Q) * g);
    }
    const T = P ? { done: !1, value: f[0] } : j.next(R);
    c && (T.value = c(T.value));
    let { done: M } = T;
    !P &&
      h !== null &&
      (M = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
    const V =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && M));
    return (
      V && o !== void 0 && (T.value = md(f, this.options, o)),
      E && E(T.value),
      V && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? gi(t.calculatedDuration) : 0;
  }
  get time() {
    return gi(this.currentTime);
  }
  set time(t) {
    (t = mi(t)),
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
    (this.playbackSpeed = t), n && (this.time = gi(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = KD, onPlay: n, startTime: i } = this.options;
    this.driver || (this.driver = t((a) => this.tick(a))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = i ?? this.calcStartTime()),
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
const YD = new Set(["opacity", "clipPath", "filter", "transform"]);
function XD(
  e,
  t,
  n,
  {
    delay: i = 0,
    duration: o = 300,
    repeat: a = 0,
    repeatType: l = "loop",
    ease: c = "easeInOut",
    times: f,
  } = {}
) {
  const h = { [t]: n };
  f && (h.offset = f);
  const p = kb(c, o);
  return (
    Array.isArray(p) && (h.easing = p),
    e.animate(h, {
      delay: i,
      duration: o,
      easing: Array.isArray(p) ? "linear" : p,
      fill: "both",
      iterations: a + 1,
      direction: l === "reverse" ? "alternate" : "normal",
    })
  );
}
const QD = Rm(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Fc = 10,
  JD = 2e4;
function eO(e) {
  return Am(e.type) || e.type === "spring" || !Cb(e.ease);
}
function tO(e, t) {
  const n = new Vm({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let i = { done: !1, value: e[0] };
  const o = [];
  let a = 0;
  for (; !i.done && a < JD; ) (i = n.sample(a)), o.push(i.value), (a += Fc);
  return { times: void 0, keyframes: o, duration: a - Fc, ease: "linear" };
}
const nE = { anticipate: jb, backInOut: Nb, circInOut: Ob };
function nO(e) {
  return e in nE;
}
class Jx extends qb {
  constructor(t) {
    super(t);
    const { name: n, motionValue: i, element: o, keyframes: a } = this.options;
    (this.resolver = new Gb(
      a,
      (l, c) => this.onKeyframesResolved(l, c),
      n,
      i,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: i = 300,
      times: o,
      ease: a,
      type: l,
      motionValue: c,
      name: f,
      startTime: h,
    } = this.options;
    if (!c.owner || !c.owner.current) return !1;
    if (
      (typeof a == "string" && Oc() && nO(a) && (a = nE[a]), eO(this.options))
    ) {
      const {
          onComplete: g,
          onUpdate: y,
          motionValue: w,
          element: x,
          ...S
        } = this.options,
        E = tO(t, S);
      (t = E.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = E.duration),
        (o = E.times),
        (a = E.ease),
        (l = "keyframes");
    }
    const p = XD(c.owner.current, f, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: a,
    });
    return (
      (p.startTime = h ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Vx(p, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (p.onfinish = () => {
            const { onComplete: g } = this.options;
            c.set(md(t, this.options, n)),
              g && g(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: p, duration: i, times: o, type: l, ease: a, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return gi(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return gi(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: i } = n;
    i.currentTime = mi(t);
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
    const { animation: i } = n;
    i.playbackRate = t;
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
      if (!n) return Un;
      const { animation: i } = n;
      Vx(i, t);
    }
    return Un;
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
      keyframes: i,
      duration: o,
      type: a,
      ease: l,
      times: c,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: h,
          onUpdate: p,
          onComplete: g,
          element: y,
          ...w
        } = this.options,
        x = new Vm({
          ...w,
          keyframes: i,
          duration: o,
          type: a,
          ease: l,
          times: c,
          isGenerator: !0,
        }),
        S = mi(this.time);
      h.setWithVelocity(x.sample(S - Fc).value, x.sample(S).value, Fc);
    }
    const { onStop: f } = this.options;
    f && f(), this.cancel();
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
      name: i,
      repeatDelay: o,
      repeatType: a,
      damping: l,
      type: c,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: f, transformTemplate: h } = n.owner.getProps();
    return (
      QD() &&
      i &&
      YD.has(i) &&
      !f &&
      !h &&
      !o &&
      a !== "mirror" &&
      l !== 0 &&
      c !== "inertia"
    );
  }
}
const rO = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  iO = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  sO = { type: "keyframes", duration: 0.8 },
  oO = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  aO = (e, { keyframes: t }) =>
    t.length > 2
      ? sO
      : Xs.has(e)
      ? e.startsWith("scale")
        ? iO(t[1])
        : rO
      : oO;
function lO({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: i,
  staggerDirection: o,
  repeat: a,
  repeatType: l,
  repeatDelay: c,
  from: f,
  elapsed: h,
  ...p
}) {
  return !!Object.keys(p).length;
}
const Bm =
  (e, t, n, i = {}, o, a) =>
  (l) => {
    const c = Cm(i, e) || {},
      f = c.delay || i.delay || 0;
    let { elapsed: h = 0 } = i;
    h = h - mi(f);
    let p = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...c,
      delay: -h,
      onUpdate: (y) => {
        t.set(y), c.onUpdate && c.onUpdate(y);
      },
      onComplete: () => {
        l(), c.onComplete && c.onComplete();
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : o,
    };
    lO(c) || (p = { ...p, ...aO(e, p) }),
      p.duration && (p.duration = mi(p.duration)),
      p.repeatDelay && (p.repeatDelay = mi(p.repeatDelay)),
      p.from !== void 0 && (p.keyframes[0] = p.from);
    let g = !1;
    if (
      ((p.type === !1 || (p.duration === 0 && !p.repeatDelay)) &&
        ((p.duration = 0), p.delay === 0 && (g = !0)),
      g && !a && t.get() !== void 0)
    ) {
      const y = md(p.keyframes, c);
      if (y !== void 0)
        return (
          kt.update(() => {
            p.onUpdate(y), p.onComplete();
          }),
          new zj([])
        );
    }
    return !a && Jx.supports(p) ? new Jx(p) : new Vm(p);
  };
function uO({ protectedKeys: e, needsAnimating: t }, n) {
  const i = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), i;
}
function rE(e, t, { delay: n = 0, transitionOverride: i, type: o } = {}) {
  var a;
  let { transition: l = e.getDefaultTransition(), transitionEnd: c, ...f } = t;
  i && (l = i);
  const h = [],
    p = o && e.animationState && e.animationState.getState()[o];
  for (const g in f) {
    const y = e.getValue(
        g,
        (a = e.latestValues[g]) !== null && a !== void 0 ? a : null
      ),
      w = f[g];
    if (w === void 0 || (p && uO(p, g))) continue;
    const x = { delay: n, ...Cm(l || {}, g) };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const b = Eb(e);
      if (b) {
        const P = window.MotionHandoffAnimation(b, g, kt);
        P !== null && ((x.startTime = P), (S = !0));
      }
    }
    ap(e, g),
      y.start(
        Bm(g, y, w, e.shouldReduceMotion && Sb.has(g) ? { type: !1 } : x, e, S)
      );
    const E = y.animation;
    E && h.push(E);
  }
  return (
    c &&
      Promise.all(h).then(() => {
        kt.update(() => {
          c && Fj(e, c);
        });
      }),
    h
  );
}
function gp(e, t, n = {}) {
  var i;
  const o = pd(
    e,
    t,
    n.type === "exit"
      ? (i = e.presenceContext) === null || i === void 0
        ? void 0
        : i.custom
      : void 0
  );
  let { transition: a = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (a = n.transitionOverride);
  const l = o ? () => Promise.all(rE(e, o, n)) : () => Promise.resolve(),
    c =
      e.variantChildren && e.variantChildren.size
        ? (h = 0) => {
            const {
              delayChildren: p = 0,
              staggerChildren: g,
              staggerDirection: y,
            } = a;
            return cO(e, t, p + h, g, y, n);
          }
        : () => Promise.resolve(),
    { when: f } = a;
  if (f) {
    const [h, p] = f === "beforeChildren" ? [l, c] : [c, l];
    return h().then(() => p());
  } else return Promise.all([l(), c(n.delay)]);
}
function cO(e, t, n = 0, i = 0, o = 1, a) {
  const l = [],
    c = (e.variantChildren.size - 1) * i,
    f = o === 1 ? (h = 0) => h * i : (h = 0) => c - h * i;
  return (
    Array.from(e.variantChildren)
      .sort(dO)
      .forEach((h, p) => {
        h.notify("AnimationStart", t),
          l.push(
            gp(h, t, { ...a, delay: n + f(p) }).then(() =>
              h.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(l)
  );
}
function dO(e, t) {
  return e.sortNodePosition(t);
}
function fO(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let i;
  if (Array.isArray(t)) {
    const o = t.map((a) => gp(e, a, n));
    i = Promise.all(o);
  } else if (typeof t == "string") i = gp(e, t, n);
  else {
    const o = typeof t == "function" ? pd(e, t, n.custom) : t;
    i = Promise.all(rE(e, o, n));
  }
  return i.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const hO = fm.length;
function iE(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? iE(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < hO; n++) {
    const i = fm[n],
      o = e.props[i];
    (cl(o) || o === !1) && (t[i] = o);
  }
  return t;
}
const pO = [...dm].reverse(),
  mO = dm.length;
function gO(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: i }) => fO(e, n, i)));
}
function yO(e) {
  let t = gO(e),
    n = ew(),
    i = !0;
  const o = (f) => (h, p) => {
    var g;
    const y = pd(
      e,
      p,
      f === "exit"
        ? (g = e.presenceContext) === null || g === void 0
          ? void 0
          : g.custom
        : void 0
    );
    if (y) {
      const { transition: w, transitionEnd: x, ...S } = y;
      h = { ...h, ...S, ...x };
    }
    return h;
  };
  function a(f) {
    t = f(e);
  }
  function l(f) {
    const { props: h } = e,
      p = iE(e.parent) || {},
      g = [],
      y = new Set();
    let w = {},
      x = 1 / 0;
    for (let E = 0; E < mO; E++) {
      const b = pO[E],
        P = n[b],
        R = h[b] !== void 0 ? h[b] : p[b],
        j = cl(R),
        T = b === f ? P.isActive : null;
      T === !1 && (x = E);
      let M = R === p[b] && R !== h[b] && j;
      if (
        (M && i && e.manuallyAnimateOnMount && (M = !1),
        (P.protectedKeys = { ...w }),
        (!P.isActive && T === null) ||
          (!R && !P.prevProp) ||
          fd(R) ||
          typeof R == "boolean")
      )
        continue;
      const V = vO(P.prevProp, R);
      let F = V || (b === f && P.isActive && !M && j) || (E > x && j),
        Y = !1;
      const Q = Array.isArray(R) ? R : [R];
      let ce = Q.reduce(o(b), {});
      T === !1 && (ce = {});
      const { prevResolvedValues: X = {} } = P,
        ie = { ...X, ...ce },
        he = (le) => {
          (F = !0),
            y.has(le) && ((Y = !0), y.delete(le)),
            (P.needsAnimating[le] = !0);
          const H = e.getValue(le);
          H && (H.liveStyle = !1);
        };
      for (const le in ie) {
        const H = ce[le],
          J = X[le];
        if (w.hasOwnProperty(le)) continue;
        let ee = !1;
        op(H) && op(J) ? (ee = !wb(H, J)) : (ee = H !== J),
          ee
            ? H != null
              ? he(le)
              : y.add(le)
            : H !== void 0 && y.has(le)
            ? he(le)
            : (P.protectedKeys[le] = !0);
      }
      (P.prevProp = R),
        (P.prevResolvedValues = ce),
        P.isActive && (w = { ...w, ...ce }),
        i && e.blockInitialAnimation && (F = !1),
        F &&
          (!(M && V) || Y) &&
          g.push(...Q.map((le) => ({ animation: le, options: { type: b } })));
    }
    if (y.size) {
      const E = {};
      y.forEach((b) => {
        const P = e.getBaseTarget(b),
          R = e.getValue(b);
        R && (R.liveStyle = !0), (E[b] = P ?? null);
      }),
        g.push({ animation: E });
    }
    let S = !!g.length;
    return (
      i &&
        (h.initial === !1 || h.initial === h.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (i = !1),
      S ? t(g) : Promise.resolve()
    );
  }
  function c(f, h) {
    var p;
    if (n[f].isActive === h) return Promise.resolve();
    (p = e.variantChildren) === null ||
      p === void 0 ||
      p.forEach((y) => {
        var w;
        return (w = y.animationState) === null || w === void 0
          ? void 0
          : w.setActive(f, h);
      }),
      (n[f].isActive = h);
    const g = l(f);
    for (const y in n) n[y].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: l,
    setActive: c,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      (n = ew()), (i = !0);
    },
  };
}
function vO(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wb(t, e) : !1;
}
function Rs(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ew() {
  return {
    animate: Rs(!0),
    whileInView: Rs(),
    whileHover: Rs(),
    whileTap: Rs(),
    whileDrag: Rs(),
    whileFocus: Rs(),
    exit: Rs(),
  };
}
class hs {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class xO extends hs {
  constructor(t) {
    super(t), t.animationState || (t.animationState = yO(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    fd(t) && (this.unmountControls = t.subscribe(this.node));
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
let wO = 0;
class SO extends hs {
  constructor() {
    super(...arguments), (this.id = wO++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const bO = { animation: { Feature: xO }, exit: { Feature: SO } },
  mr = { x: !1, y: !1 };
function sE() {
  return mr.x || mr.y;
}
function EO(e) {
  return e === "x" || e === "y"
    ? mr[e]
      ? null
      : ((mr[e] = !0),
        () => {
          mr[e] = !1;
        })
    : mr.x || mr.y
    ? null
    : ((mr.x = mr.y = !0),
      () => {
        mr.x = mr.y = !1;
      });
}
const zm = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ml(e, t, n, i = { passive: !0 }) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n);
}
function Ul(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const _O = (e) => (t) => zm(t) && e(t, Ul(t));
function tl(e, t, n, i) {
  return ml(e, t, _O(n), i);
}
const tw = (e, t) => Math.abs(e - t);
function CO(e, t) {
  const n = tw(e.x, t.x),
    i = tw(e.y, t.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class oE {
  constructor(
    t,
    n,
    { transformPagePoint: i, contextWindow: o, dragSnapToOrigin: a = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const g = jh(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          w = CO(g.offset, { x: 0, y: 0 }) >= 3;
        if (!y && !w) return;
        const { point: x } = g,
          { timestamp: S } = rn;
        this.history.push({ ...x, timestamp: S });
        const { onStart: E, onMove: b } = this.handlers;
        y ||
          (E && E(this.lastMoveEvent, g),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, g);
      }),
      (this.handlePointerMove = (g, y) => {
        (this.lastMoveEvent = g),
          (this.lastMoveEventInfo = Nh(y, this.transformPagePoint)),
          kt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (g, y) => {
        this.end();
        const { onEnd: w, onSessionEnd: x, resumeAnimation: S } = this.handlers;
        if (
          (this.dragSnapToOrigin && S && S(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const E = jh(
          g.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Nh(y, this.transformPagePoint),
          this.history
        );
        this.startEvent && w && w(g, E), x && x(g, E);
      }),
      !zm(t))
    )
      return;
    (this.dragSnapToOrigin = a),
      (this.handlers = n),
      (this.transformPagePoint = i),
      (this.contextWindow = o || window);
    const l = Ul(t),
      c = Nh(l, this.transformPagePoint),
      { point: f } = c,
      { timestamp: h } = rn;
    this.history = [{ ...f, timestamp: h }];
    const { onSessionStart: p } = n;
    p && p(t, jh(c, this.history)),
      (this.removeListeners = zl(
        tl(this.contextWindow, "pointermove", this.handlePointerMove),
        tl(this.contextWindow, "pointerup", this.handlePointerUp),
        tl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ss(this.updatePoint);
  }
}
function Nh(e, t) {
  return t ? { point: t(e.point) } : e;
}
function nw(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function jh({ point: e }, t) {
  return {
    point: e,
    delta: nw(e, aE(t)),
    offset: nw(e, kO(t)),
    velocity: TO(t, 0.1),
  };
}
function kO(e) {
  return e[0];
}
function aE(e) {
  return e[e.length - 1];
}
function TO(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    i = null;
  const o = aE(e);
  for (; n >= 0 && ((i = e[n]), !(o.timestamp - i.timestamp > mi(t))); ) n--;
  if (!i) return { x: 0, y: 0 };
  const a = gi(o.timestamp - i.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const l = { x: (o.x - i.x) / a, y: (o.y - i.y) / a };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l;
}
const lE = 1e-4,
  PO = 1 - lE,
  RO = 1 + lE,
  uE = 0.01,
  AO = 0 - uE,
  NO = 0 + uE;
function xn(e) {
  return e.max - e.min;
}
function jO(e, t, n) {
  return Math.abs(e - t) <= n;
}
function rw(e, t, n, i = 0.5) {
  (e.origin = i),
    (e.originPoint = Dt(t.min, t.max, e.origin)),
    (e.scale = xn(n) / xn(t)),
    (e.translate = Dt(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= PO && e.scale <= RO) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= AO && e.translate <= NO) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function nl(e, t, n, i) {
  rw(e.x, t.x, n.x, i ? i.originX : void 0),
    rw(e.y, t.y, n.y, i ? i.originY : void 0);
}
function iw(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + xn(t));
}
function DO(e, t, n) {
  iw(e.x, t.x, n.x), iw(e.y, t.y, n.y);
}
function sw(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + xn(t));
}
function rl(e, t, n) {
  sw(e.x, t.x, n.x), sw(e.y, t.y, n.y);
}
function OO(e, { min: t, max: n }, i) {
  return (
    t !== void 0 && e < t
      ? (e = i ? Dt(t, e, i.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = i ? Dt(n, e, i.max) : Math.min(e, n)),
    e
  );
}
function ow(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function LO(e, { top: t, left: n, bottom: i, right: o }) {
  return { x: ow(e.x, n, o), y: ow(e.y, t, i) };
}
function aw(e, t) {
  let n = t.min - e.min,
    i = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i };
}
function MO(e, t) {
  return { x: aw(e.x, t.x), y: aw(e.y, t.y) };
}
function FO(e, t) {
  let n = 0.5;
  const i = xn(e),
    o = xn(t);
  return (
    o > i
      ? (n = Wo(t.min, t.max - i, e.min))
      : i > o && (n = Wo(e.min, e.max - o, t.min)),
    Si(0, 1, n)
  );
}
function IO(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const yp = 0.35;
function VO(e = yp) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = yp),
    { x: lw(e, "left", "right"), y: lw(e, "top", "bottom") }
  );
}
function lw(e, t, n) {
  return { min: uw(e, t), max: uw(e, n) };
}
function uw(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const cw = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Do = () => ({ x: cw(), y: cw() }),
  dw = () => ({ min: 0, max: 0 }),
  Vt = () => ({ x: dw(), y: dw() });
function nr(e) {
  return [e("x"), e("y")];
}
function cE({ top: e, left: t, right: n, bottom: i }) {
  return { x: { min: t, max: n }, y: { min: e, max: i } };
}
function BO({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function zO(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    i = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function Dh(e) {
  return e === void 0 || e === 1;
}
function vp({ scale: e, scaleX: t, scaleY: n }) {
  return !Dh(e) || !Dh(t) || !Dh(n);
}
function As(e) {
  return (
    vp(e) ||
    dE(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function dE(e) {
  return fw(e.x) || fw(e.y);
}
function fw(e) {
  return e && e !== "0%";
}
function Ic(e, t, n) {
  const i = e - n,
    o = t * i;
  return n + o;
}
function hw(e, t, n, i, o) {
  return o !== void 0 && (e = Ic(e, o, i)), Ic(e, n, i) + t;
}
function xp(e, t = 0, n = 1, i, o) {
  (e.min = hw(e.min, t, n, i, o)), (e.max = hw(e.max, t, n, i, o));
}
function fE(e, { x: t, y: n }) {
  xp(e.x, t.translate, t.scale, t.originPoint),
    xp(e.y, n.translate, n.scale, n.originPoint);
}
const pw = 0.999999999999,
  mw = 1.0000000000001;
function UO(e, t, n, i = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let a, l;
  for (let c = 0; c < o; c++) {
    (a = n[c]), (l = a.projectionDelta);
    const { visualElement: f } = a.options;
    (f && f.props.style && f.props.style.display === "contents") ||
      (i &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Lo(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      l && ((t.x *= l.x.scale), (t.y *= l.y.scale), fE(e, l)),
      i && As(a.latestValues) && Lo(e, a.latestValues));
  }
  t.x < mw && t.x > pw && (t.x = 1), t.y < mw && t.y > pw && (t.y = 1);
}
function Oo(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function gw(e, t, n, i, o = 0.5) {
  const a = Dt(e.min, e.max, o);
  xp(e, t, n, a, i);
}
function Lo(e, t) {
  gw(e.x, t.x, t.scaleX, t.scale, t.originX),
    gw(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function hE(e, t) {
  return cE(zO(e.getBoundingClientRect(), t));
}
function $O(e, t, n) {
  const i = hE(e, n),
    { scroll: o } = t;
  return o && (Oo(i.x, o.offset.x), Oo(i.y, o.offset.y)), i;
}
const pE = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  WO = new WeakMap();
class HO {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Vt()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (p) => {
        const { dragSnapToOrigin: g } = this.getProps();
        g ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ul(p).point);
      },
      a = (p, g) => {
        const { drag: y, dragPropagation: w, onDragStart: x } = this.getProps();
        if (
          y &&
          !w &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = EO(y)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          nr((E) => {
            let b = this.getAxisMotionValue(E).get() || 0;
            if ($r.test(b)) {
              const { projection: P } = this.visualElement;
              if (P && P.layout) {
                const R = P.layout.layoutBox[E];
                R && (b = xn(R) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[E] = b;
          }),
          x && kt.postRender(() => x(p, g)),
          ap(this.visualElement, "transform");
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      l = (p, g) => {
        const {
          dragPropagation: y,
          dragDirectionLock: w,
          onDirectionLock: x,
          onDrag: S,
        } = this.getProps();
        if (!y && !this.openDragLock) return;
        const { offset: E } = g;
        if (w && this.currentDirection === null) {
          (this.currentDirection = ZO(E)),
            this.currentDirection !== null && x && x(this.currentDirection);
          return;
        }
        this.updateAxis("x", g.point, E),
          this.updateAxis("y", g.point, E),
          this.visualElement.render(),
          S && S(p, g);
      },
      c = (p, g) => this.stop(p, g),
      f = () =>
        nr((p) => {
          var g;
          return (
            this.getAnimationState(p) === "paused" &&
            ((g = this.getAxisMotionValue(p).animation) === null || g === void 0
              ? void 0
              : g.play())
          );
        }),
      { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new oE(
      t,
      {
        onSessionStart: o,
        onStart: a,
        onMove: l,
        onSessionEnd: c,
        resumeAnimation: f,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: h,
        contextWindow: pE(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && kt.postRender(() => a(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: i } = this.getProps();
    !i &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, i) {
    const { drag: o } = this.getProps();
    if (!i || !dc(t, o, this.currentDirection)) return;
    const a = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + i[t];
    this.constraints &&
      this.constraints[t] &&
      (l = OO(l, this.constraints[t], this.elastic[t])),
      a.set(l);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: i } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      a = this.constraints;
    n && No(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = LO(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = VO(i)),
      a !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        nr((l) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(l) &&
            (this.constraints[l] = IO(o.layoutBox[l], this.constraints[l]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !No(t)) return !1;
    const i = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const a = $O(i, o.root, this.visualElement.getTransformPagePoint());
    let l = MO(o.layout.layoutBox, a);
    if (n) {
      const c = n(BO(l));
      (this.hasMutatedConstraints = !!c), c && (l = cE(c));
    }
    return l;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: i,
        dragElastic: o,
        dragTransition: a,
        dragSnapToOrigin: l,
        onDragTransitionEnd: c,
      } = this.getProps(),
      f = this.constraints || {},
      h = nr((p) => {
        if (!dc(p, n, this.currentDirection)) return;
        let g = f[p] || {};
        l && (g = { min: 0, max: 0 });
        const y = o ? 200 : 1e6,
          w = o ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: i ? t[p] : 0,
            bounceStiffness: y,
            bounceDamping: w,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...a,
            ...g,
          };
        return this.startAxisValueAnimation(p, x);
      });
    return Promise.all(h).then(c);
  }
  startAxisValueAnimation(t, n) {
    const i = this.getAxisMotionValue(t);
    return (
      ap(this.visualElement, t), i.start(Bm(t, i, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    nr((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    nr((t) => {
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
      i = this.visualElement.getProps(),
      o = i[n];
    return (
      o ||
      this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    nr((n) => {
      const { drag: i } = this.getProps();
      if (!dc(n, i, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        a = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: l, max: c } = o.layout.layoutBox[n];
        a.set(t[n] - Dt(l, c, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!No(n) || !i || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    nr((l) => {
      const c = this.getAxisMotionValue(l);
      if (c && this.constraints !== !1) {
        const f = c.get();
        o[l] = FO({ min: f, max: f }, this.constraints[l]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      nr((l) => {
        if (!dc(l, t, null)) return;
        const c = this.getAxisMotionValue(l),
          { min: f, max: h } = this.constraints[l];
        c.set(Dt(f, h, o[l]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    WO.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = tl(t, "pointerdown", (f) => {
        const { drag: h, dragListener: p = !0 } = this.getProps();
        h && p && this.start(f);
      }),
      i = () => {
        const { dragConstraints: f } = this.getProps();
        No(f) && f.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      a = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      kt.read(i);
    const l = ml(window, "resize", () => this.scalePositionWithinConstraints()),
      c = o.addEventListener(
        "didUpdate",
        ({ delta: f, hasLayoutChanged: h }) => {
          this.isDragging &&
            h &&
            (nr((p) => {
              const g = this.getAxisMotionValue(p);
              g &&
                ((this.originPoint[p] += f[p].translate),
                g.set(g.get() + f[p].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      l(), n(), a(), c && c();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: i = !1,
        dragPropagation: o = !1,
        dragConstraints: a = !1,
        dragElastic: l = yp,
        dragMomentum: c = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: o,
      dragConstraints: a,
      dragElastic: l,
      dragMomentum: c,
    };
  }
}
function dc(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ZO(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class KO extends hs {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Un),
      (this.removeListeners = Un),
      (this.controls = new HO(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Un);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const yw = (e) => (t, n) => {
  e && kt.postRender(() => e(t, n));
};
class GO extends hs {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Un);
  }
  onPointerDown(t) {
    this.session = new oE(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: pE(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: i,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: yw(t),
      onStart: yw(n),
      onMove: i,
      onEnd: (a, l) => {
        delete this.session, o && kt.postRender(() => o(a, l));
      },
    };
  }
  mount() {
    this.removePointerDownListener = tl(this.node.current, "pointerdown", (t) =>
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
const Sc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function vw(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const $a = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (Ue.test(e)) e = parseFloat(e);
        else return e;
      const n = vw(e, t.target.x),
        i = vw(e, t.target.y);
      return `${n}% ${i}%`;
    },
  },
  qO = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const i = e,
        o = os.parse(e);
      if (o.length > 5) return i;
      const a = os.createTransformer(e),
        l = typeof o[0] != "number" ? 1 : 0,
        c = n.x.scale * t.x,
        f = n.y.scale * t.y;
      (o[0 + l] /= c), (o[1 + l] /= f);
      const h = Dt(c, f, 0.5);
      return (
        typeof o[2 + l] == "number" && (o[2 + l] /= h),
        typeof o[3 + l] == "number" && (o[3 + l] /= h),
        a(o)
      );
    },
  };
class YO extends _.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: i,
        layoutId: o,
      } = this.props,
      { projection: a } = t;
    Ej(XO),
      a &&
        (n.group && n.group.add(a),
        i && i.register && o && i.register(a),
        a.root.didUpdate(),
        a.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        a.setOptions({
          ...a.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Sc.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: i,
        drag: o,
        isPresent: a,
      } = this.props,
      l = i.projection;
    return (
      l &&
        ((l.isPresent = a),
        o || t.layoutDependency !== n || n === void 0
          ? l.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== a &&
          (a
            ? l.promote()
            : l.relegate() ||
              kt.postRender(() => {
                const c = l.getStack();
                (!c || !c.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      pm.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: i,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      i && i.deregister && i.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function mE(e) {
  const [t, n] = tb(),
    i = _.useContext(am);
  return C.jsx(YO, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: _.useContext(lb),
    isPresent: t,
    safeToRemove: n,
  });
}
const XO = {
  borderRadius: {
    ...$a,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: $a,
  borderTopRightRadius: $a,
  borderBottomLeftRadius: $a,
  borderBottomRightRadius: $a,
  boxShadow: qO,
};
function QO(e, t, n) {
  const i = pn(e) ? e : hl(e);
  return i.start(Bm("", i, t, n)), i.animation;
}
function JO(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const eL = (e, t) => e.depth - t.depth;
class tL {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    km(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Tm(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(eL),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function nL(e, t) {
  const n = Wr.now(),
    i = ({ timestamp: o }) => {
      const a = o - n;
      a >= t && (ss(i), e(a - t));
    };
  return kt.read(i, !0), () => ss(i);
}
const gE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  rL = gE.length,
  xw = (e) => (typeof e == "string" ? parseFloat(e) : e),
  ww = (e) => typeof e == "number" || Ue.test(e);
function iL(e, t, n, i, o, a) {
  o
    ? ((e.opacity = Dt(0, n.opacity !== void 0 ? n.opacity : 1, sL(i))),
      (e.opacityExit = Dt(t.opacity !== void 0 ? t.opacity : 1, 0, oL(i))))
    : a &&
      (e.opacity = Dt(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        i
      ));
  for (let l = 0; l < rL; l++) {
    const c = `border${gE[l]}Radius`;
    let f = Sw(t, c),
      h = Sw(n, c);
    if (f === void 0 && h === void 0) continue;
    f || (f = 0),
      h || (h = 0),
      f === 0 || h === 0 || ww(f) === ww(h)
        ? ((e[c] = Math.max(Dt(xw(f), xw(h), i), 0)),
          ($r.test(h) || $r.test(f)) && (e[c] += "%"))
        : (e[c] = h);
  }
  (t.rotate || n.rotate) && (e.rotate = Dt(t.rotate || 0, n.rotate || 0, i));
}
function Sw(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const sL = yE(0, 0.5, Db),
  oL = yE(0.5, 0.95, Un);
function yE(e, t, n) {
  return (i) => (i < e ? 0 : i > t ? 1 : n(Wo(e, t, i)));
}
function bw(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function tr(e, t) {
  bw(e.x, t.x), bw(e.y, t.y);
}
function Ew(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function _w(e, t, n, i, o) {
  return (
    (e -= t), (e = Ic(e, 1 / n, i)), o !== void 0 && (e = Ic(e, 1 / o, i)), e
  );
}
function aL(e, t = 0, n = 1, i = 0.5, o, a = e, l = e) {
  if (
    ($r.test(t) &&
      ((t = parseFloat(t)), (t = Dt(l.min, l.max, t / 100) - l.min)),
    typeof t != "number")
  )
    return;
  let c = Dt(a.min, a.max, i);
  e === a && (c -= t),
    (e.min = _w(e.min, t, n, c, o)),
    (e.max = _w(e.max, t, n, c, o));
}
function Cw(e, t, [n, i, o], a, l) {
  aL(e, t[n], t[i], t[o], t.scale, a, l);
}
const lL = ["x", "scaleX", "originX"],
  uL = ["y", "scaleY", "originY"];
function kw(e, t, n, i) {
  Cw(e.x, t, lL, n ? n.x : void 0, i ? i.x : void 0),
    Cw(e.y, t, uL, n ? n.y : void 0, i ? i.y : void 0);
}
function Tw(e) {
  return e.translate === 0 && e.scale === 1;
}
function vE(e) {
  return Tw(e.x) && Tw(e.y);
}
function Pw(e, t) {
  return e.min === t.min && e.max === t.max;
}
function cL(e, t) {
  return Pw(e.x, t.x) && Pw(e.y, t.y);
}
function Rw(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function xE(e, t) {
  return Rw(e.x, t.x) && Rw(e.y, t.y);
}
function Aw(e) {
  return xn(e.x) / xn(e.y);
}
function Nw(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class dL {
  constructor() {
    this.members = [];
  }
  add(t) {
    km(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Tm(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let i;
    for (let o = n; o >= 0; o--) {
      const a = this.members[o];
      if (a.isPresent !== !1) {
        i = a;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(t, n) {
    const i = this.lead;
    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
      i.instance && i.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = i),
        n && (t.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((t.snapshot = i.snapshot),
          (t.snapshot.latestValues = i.animationValues || i.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: i } = t;
      n.onExitComplete && n.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete();
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
function fL(e, t, n) {
  let i = "";
  const o = e.x.translate / t.x,
    a = e.y.translate / t.y,
    l = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || a || l) && (i = `translate3d(${o}px, ${a}px, ${l}px) `),
    (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: h,
      rotate: p,
      rotateX: g,
      rotateY: y,
      skewX: w,
      skewY: x,
    } = n;
    h && (i = `perspective(${h}px) ${i}`),
      p && (i += `rotate(${p}deg) `),
      g && (i += `rotateX(${g}deg) `),
      y && (i += `rotateY(${y}deg) `),
      w && (i += `skewX(${w}deg) `),
      x && (i += `skewY(${x}deg) `);
  }
  const c = e.x.scale * t.x,
    f = e.y.scale * t.y;
  return (c !== 1 || f !== 1) && (i += `scale(${c}, ${f})`), i || "none";
}
const Ns = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  qa = typeof window < "u" && window.MotionDebug !== void 0,
  Oh = ["", "X", "Y", "Z"],
  hL = { visibility: "hidden" },
  jw = 1e3;
let pL = 0;
function Lh(e, t, n, i) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
}
function wE(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Eb(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: a } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", kt, !(o || a));
  }
  const { parent: i } = e;
  i && !i.hasCheckedOptimisedAppear && wE(i);
}
function SE({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: i,
  resetTransform: o,
}) {
  return class {
    constructor(l = {}, c = t == null ? void 0 : t()) {
      (this.id = pL++),
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
            qa &&
              (Ns.totalNodes =
                Ns.resolvedTargetDeltas =
                Ns.recalculatedProjection =
                  0),
            this.nodes.forEach(yL),
            this.nodes.forEach(bL),
            this.nodes.forEach(EL),
            this.nodes.forEach(vL),
            qa && window.MotionDebug.record(Ns);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = l),
        (this.root = c ? c.root || c : this),
        (this.path = c ? [...c.path, c] : []),
        (this.parent = c),
        (this.depth = c ? c.depth + 1 : 0);
      for (let f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new tL());
    }
    addEventListener(l, c) {
      return (
        this.eventHandlers.has(l) || this.eventHandlers.set(l, new Pm()),
        this.eventHandlers.get(l).add(c)
      );
    }
    notifyListeners(l, ...c) {
      const f = this.eventHandlers.get(l);
      f && f.notify(...c);
    }
    hasListeners(l) {
      return this.eventHandlers.has(l);
    }
    mount(l, c = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = JO(l)), (this.instance = l);
      const { layoutId: f, layout: h, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(l),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        c && (h || f) && (this.isLayoutDirty = !0),
        e)
      ) {
        let g;
        const y = () => (this.root.updateBlockedByResize = !1);
        e(l, () => {
          (this.root.updateBlockedByResize = !0),
            g && g(),
            (g = nL(y, 250)),
            Sc.hasAnimatedSinceResize &&
              ((Sc.hasAnimatedSinceResize = !1), this.nodes.forEach(Ow));
        });
      }
      f && this.root.registerSharedNode(f, this),
        this.options.animate !== !1 &&
          p &&
          (f || h) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: y,
              hasRelativeLayoutChanged: w,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const S =
                  this.options.transition || p.getDefaultTransition() || PL,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: b } =
                  p.getProps(),
                P = !this.targetLayout || !xE(this.targetLayout, x),
                R = !y && w;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                R ||
                (y && (P || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(g, R);
                const j = { ...Cm(S, "layout"), onPlay: E, onComplete: b };
                (p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((j.delay = 0), (j.type = !1)),
                  this.startAnimation(j);
              } else
                y || Ow(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ss(this.updateProjection);
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
        this.nodes && this.nodes.forEach(_L),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: l } = this.options;
      return l && l.getProps().transformTemplate;
    }
    willUpdate(l = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          wE(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        (g.shouldResetTransform = !0),
          g.updateScroll("snapshot"),
          g.options.layoutRoot && g.willUpdate(!1);
      }
      const { layoutId: c, layout: f } = this.options;
      if (c === void 0 && !f) return;
      const h = this.getTransformTemplate();
      (this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        l && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Dw);
        return;
      }
      this.isUpdating || this.nodes.forEach(wL),
        (this.isUpdating = !1),
        this.nodes.forEach(SL),
        this.nodes.forEach(mL),
        this.nodes.forEach(gL),
        this.clearAllSnapshots();
      const c = Wr.now();
      (rn.delta = Si(0, 1e3 / 60, c - rn.timestamp)),
        (rn.timestamp = c),
        (rn.isProcessing = !0),
        Th.update.process(rn),
        Th.preRender.process(rn),
        Th.render.process(rn),
        (rn.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), pm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(xL), this.sharedNodes.forEach(CL);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        kt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      kt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !xn(this.snapshot.measuredBox.x) &&
          !xn(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
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
        for (let f = 0; f < this.path.length; f++) this.path[f].updateScroll();
      const l = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Vt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: c } = this.options;
      c &&
        c.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          l ? l.layoutBox : void 0
        );
    }
    updateScroll(l = "measure") {
      let c = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === l &&
          (c = !1),
        c)
      ) {
        const f = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: f,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : f,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const l =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        c = this.projectionDelta && !vE(this.projectionDelta),
        f = this.getTransformTemplate(),
        h = f ? f(this.latestValues, "") : void 0,
        p = h !== this.prevTransformTemplateValue;
      l &&
        (c || As(this.latestValues) || p) &&
        (o(this.instance, h),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(l = !0) {
      const c = this.measurePageBox();
      let f = this.removeElementScroll(c);
      return (
        l && (f = this.removeTransform(f)),
        RL(f),
        {
          animationId: this.root.animationId,
          measuredBox: c,
          layoutBox: f,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var l;
      const { visualElement: c } = this.options;
      if (!c) return Vt();
      const f = c.measureViewportBox();
      if (
        !(
          ((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) ||
          this.path.some(AL)
        )
      ) {
        const { scroll: p } = this.root;
        p && (Oo(f.x, p.offset.x), Oo(f.y, p.offset.y));
      }
      return f;
    }
    removeElementScroll(l) {
      var c;
      const f = Vt();
      if (
        (tr(f, l), !((c = this.scroll) === null || c === void 0) && c.wasRoot)
      )
        return f;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h],
          { scroll: g, options: y } = p;
        p !== this.root &&
          g &&
          y.layoutScroll &&
          (g.wasRoot && tr(f, l), Oo(f.x, g.offset.x), Oo(f.y, g.offset.y));
      }
      return f;
    }
    applyTransform(l, c = !1) {
      const f = Vt();
      tr(f, l);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        !c &&
          p.options.layoutScroll &&
          p.scroll &&
          p !== p.root &&
          Lo(f, { x: -p.scroll.offset.x, y: -p.scroll.offset.y }),
          As(p.latestValues) && Lo(f, p.latestValues);
      }
      return As(this.latestValues) && Lo(f, this.latestValues), f;
    }
    removeTransform(l) {
      const c = Vt();
      tr(c, l);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        if (!h.instance || !As(h.latestValues)) continue;
        vp(h.latestValues) && h.updateSnapshot();
        const p = Vt(),
          g = h.measurePageBox();
        tr(p, g),
          kw(c, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, p);
      }
      return As(this.latestValues) && kw(c, this.latestValues), c;
    }
    setTargetDelta(l) {
      (this.targetDelta = l),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== rn.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var c;
      const f = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== f;
      if (
        !(
          l ||
          (h && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((c = this.parent) === null || c === void 0) &&
            c.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!(!this.layout || !(g || y))) {
        if (
          ((this.resolvedRelativeTargetAt = rn.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const w = this.getClosestProjectingParent();
          w && w.layout && this.animationProgress !== 1
            ? ((this.relativeParent = w),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Vt()),
              (this.relativeTargetOrigin = Vt()),
              rl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                w.layout.layoutBox
              ),
              tr(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Vt()), (this.targetWithTransforms = Vt())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                DO(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : tr(this.target, this.layout.layoutBox),
                fE(this.target, this.targetDelta))
              : tr(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const w = this.getClosestProjectingParent();
            w &&
            !!w.resumingFrom == !!this.resumingFrom &&
            !w.options.layoutScroll &&
            w.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = w),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Vt()),
                (this.relativeTargetOrigin = Vt()),
                rl(this.relativeTargetOrigin, this.target, w.target),
                tr(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          qa && Ns.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          vp(this.parent.latestValues) ||
          dE(this.parent.latestValues)
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
      var l;
      const c = this.getLead(),
        f = !!this.resumingFrom || this !== c;
      let h = !0;
      if (
        ((this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty)) &&
          (h = !1),
        f &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (h = !1),
        this.resolvedRelativeTargetAt === rn.timestamp && (h = !1),
        h)
      )
        return;
      const { layout: p, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || g))
      )
        return;
      tr(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x,
        w = this.treeScale.y;
      UO(this.layoutCorrected, this.treeScale, this.path, f),
        c.layout &&
          !c.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((c.target = c.layout.layoutBox), (c.targetWithTransforms = Vt()));
      const { target: x } = c;
      if (!x) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ew(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ew(this.prevProjectionDelta.y, this.projectionDelta.y)),
        nl(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== y ||
          this.treeScale.y !== w ||
          !Nw(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Nw(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        qa && Ns.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(l = !0) {
      var c;
      if (
        ((c = this.options.visualElement) === null ||
          c === void 0 ||
          c.scheduleRender(),
        l)
      ) {
        const f = this.getStack();
        f && f.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Do()),
        (this.projectionDelta = Do()),
        (this.projectionDeltaWithTransform = Do());
    }
    setAnimationOrigin(l, c = !1) {
      const f = this.snapshot,
        h = f ? f.latestValues : {},
        p = { ...this.latestValues },
        g = Do();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !c);
      const y = Vt(),
        w = f ? f.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        S = w !== x,
        E = this.getStack(),
        b = !E || E.members.length <= 1,
        P = !!(S && !b && this.options.crossfade === !0 && !this.path.some(TL));
      this.animationProgress = 0;
      let R;
      (this.mixTargetDelta = (j) => {
        const T = j / 1e3;
        Lw(g.x, l.x, T),
          Lw(g.y, l.y, T),
          this.setTargetDelta(g),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (rl(y, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            kL(this.relativeTarget, this.relativeTargetOrigin, y, T),
            R && cL(this.relativeTarget, R) && (this.isProjectionDirty = !1),
            R || (R = Vt()),
            tr(R, this.relativeTarget)),
          S &&
            ((this.animationValues = p), iL(p, h, this.latestValues, T, P, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ss(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = kt.update(() => {
          (Sc.hasAnimatedSinceResize = !0),
            (this.currentAnimation = QO(0, jw, {
              ...l,
              onUpdate: (c) => {
                this.mixTargetDelta(c), l.onUpdate && l.onUpdate(c);
              },
              onComplete: () => {
                l.onComplete && l.onComplete(), this.completeAnimation();
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
      const l = this.getStack();
      l && l.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(jw),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let {
        targetWithTransforms: c,
        target: f,
        layout: h,
        latestValues: p,
      } = l;
      if (!(!c || !f || !h)) {
        if (
          this !== l &&
          this.layout &&
          h &&
          bE(this.options.animationType, this.layout.layoutBox, h.layoutBox)
        ) {
          f = this.target || Vt();
          const g = xn(this.layout.layoutBox.x);
          (f.x.min = l.target.x.min), (f.x.max = f.x.min + g);
          const y = xn(this.layout.layoutBox.y);
          (f.y.min = l.target.y.min), (f.y.max = f.y.min + y);
        }
        tr(c, f),
          Lo(c, p),
          nl(this.projectionDeltaWithTransform, this.layoutCorrected, c, p);
      }
    }
    registerSharedNode(l, c) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new dL()),
        this.sharedNodes.get(l).add(c);
      const h = c.options.initialPromotionConfig;
      c.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity:
          h && h.shouldPreserveFollowOpacity
            ? h.shouldPreserveFollowOpacity(c)
            : void 0,
      });
    }
    isLead() {
      const l = this.getStack();
      return l ? l.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: c } = this.options;
      return c
        ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: c } = this.options;
      return c
        ? (l = this.getStack()) === null || l === void 0
          ? void 0
          : l.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: l } = this.options;
      if (l) return this.root.sharedNodes.get(l);
    }
    promote({ needsReset: l, transition: c, preserveFollowOpacity: f } = {}) {
      const h = this.getStack();
      h && h.promote(this, f),
        l && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        c && this.setOptions({ transition: c });
    }
    relegate() {
      const l = this.getStack();
      return l ? l.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: l } = this.options;
      if (!l) return;
      let c = !1;
      const { latestValues: f } = l;
      if (
        ((f.z ||
          f.rotate ||
          f.rotateX ||
          f.rotateY ||
          f.rotateZ ||
          f.skewX ||
          f.skewY) &&
          (c = !0),
        !c)
      )
        return;
      const h = {};
      f.z && Lh("z", l, h, this.animationValues);
      for (let p = 0; p < Oh.length; p++)
        Lh(`rotate${Oh[p]}`, l, h, this.animationValues),
          Lh(`skew${Oh[p]}`, l, h, this.animationValues);
      l.render();
      for (const p in h)
        l.setStaticValue(p, h[p]),
          this.animationValues && (this.animationValues[p] = h[p]);
      l.scheduleRender();
    }
    getProjectionStyles(l) {
      var c, f;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return hL;
      const h = { visibility: "" },
        p = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (h.opacity = ""),
          (h.pointerEvents = xc(l == null ? void 0 : l.pointerEvents) || ""),
          (h.transform = p ? p(this.latestValues, "") : "none"),
          h
        );
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        const S = {};
        return (
          this.options.layoutId &&
            ((S.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (S.pointerEvents = xc(l == null ? void 0 : l.pointerEvents) || "")),
          this.hasProjected &&
            !As(this.latestValues) &&
            ((S.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)),
          S
        );
      }
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(),
        (h.transform = fL(
          this.projectionDeltaWithTransform,
          this.treeScale,
          y
        )),
        p && (h.transform = p(y, h.transform));
      const { x: w, y: x } = this.projectionDelta;
      (h.transformOrigin = `${w.origin * 100}% ${x.origin * 100}% 0`),
        g.animationValues
          ? (h.opacity =
              g === this
                ? (f =
                    (c = y.opacity) !== null && c !== void 0
                      ? c
                      : this.latestValues.opacity) !== null && f !== void 0
                  ? f
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : y.opacityExit)
          : (h.opacity =
              g === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                ? y.opacityExit
                : 0);
      for (const S in fl) {
        if (y[S] === void 0) continue;
        const { correct: E, applyTo: b, isCSSVariable: P } = fl[S],
          R = h.transform === "none" ? y[S] : E(y[S], g);
        if (b) {
          const j = b.length;
          for (let T = 0; T < j; T++) h[b[T]] = R;
        } else
          P ? (this.options.visualElement.renderState.vars[S] = R) : (h[S] = R);
      }
      return (
        this.options.layoutId &&
          (h.pointerEvents =
            g === this
              ? xc(l == null ? void 0 : l.pointerEvents) || ""
              : "none"),
        h
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((l) => {
        var c;
        return (c = l.currentAnimation) === null || c === void 0
          ? void 0
          : c.stop();
      }),
        this.root.nodes.forEach(Dw),
        this.root.sharedNodes.clear();
    }
  };
}
function mL(e) {
  e.updateLayout();
}
function gL(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: o } = e.layout,
      { animationType: a } = e.options,
      l = n.source !== e.layout.source;
    a === "size"
      ? nr((g) => {
          const y = l ? n.measuredBox[g] : n.layoutBox[g],
            w = xn(y);
          (y.min = i[g].min), (y.max = y.min + w);
        })
      : bE(a, n.layoutBox, i) &&
        nr((g) => {
          const y = l ? n.measuredBox[g] : n.layoutBox[g],
            w = xn(i[g]);
          (y.max = y.min + w),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[g].max = e.relativeTarget[g].min + w));
        });
    const c = Do();
    nl(c, i, n.layoutBox);
    const f = Do();
    l ? nl(f, e.applyTransform(o, !0), n.measuredBox) : nl(f, i, n.layoutBox);
    const h = !vE(c);
    let p = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: y, layout: w } = g;
        if (y && w) {
          const x = Vt();
          rl(x, n.layoutBox, y.layoutBox);
          const S = Vt();
          rl(S, i, w.layoutBox),
            xE(x, S) || (p = !0),
            g.options.layoutRoot &&
              ((e.relativeTarget = S),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = g));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: f,
      layoutDelta: c,
      hasLayoutChanged: h,
      hasRelativeLayoutChanged: p,
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function yL(e) {
  qa && Ns.totalNodes++,
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
function vL(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xL(e) {
  e.clearSnapshot();
}
function Dw(e) {
  e.clearMeasurements();
}
function wL(e) {
  e.isLayoutDirty = !1;
}
function SL(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ow(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function bL(e) {
  e.resolveTargetDelta();
}
function EL(e) {
  e.calcProjection();
}
function _L(e) {
  e.resetSkewAndRotation();
}
function CL(e) {
  e.removeLeadSnapshot();
}
function Lw(e, t, n) {
  (e.translate = Dt(t.translate, 0, n)),
    (e.scale = Dt(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Mw(e, t, n, i) {
  (e.min = Dt(t.min, n.min, i)), (e.max = Dt(t.max, n.max, i));
}
function kL(e, t, n, i) {
  Mw(e.x, t.x, n.x, i), Mw(e.y, t.y, n.y, i);
}
function TL(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const PL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Fw = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Iw = Fw("applewebkit/") && !Fw("chrome/") ? Math.round : Un;
function Vw(e) {
  (e.min = Iw(e.min)), (e.max = Iw(e.max));
}
function RL(e) {
  Vw(e.x), Vw(e.y);
}
function bE(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !jO(Aw(t), Aw(n), 0.2))
  );
}
function AL(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const NL = SE({
    attachResizeListener: (e, t) => ml(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Mh = { current: void 0 },
  EE = SE({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Mh.current) {
        const e = new NL({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Mh.current = e);
      }
      return Mh.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  jL = {
    pan: { Feature: GO },
    drag: { Feature: KO, ProjectionNode: EE, MeasureLayout: mE },
  };
function DL(e, t, n) {
  var i;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let o = document;
    const a = (i = void 0) !== null && i !== void 0 ? i : o.querySelectorAll(e);
    return a ? Array.from(a) : [];
  }
  return Array.from(e);
}
function _E(e, t) {
  const n = DL(e),
    i = new AbortController(),
    o = { passive: !0, ...t, signal: i.signal };
  return [n, o, () => i.abort()];
}
function Bw(e) {
  return !(e.pointerType === "touch" || sE());
}
function OL(e, t, n = {}) {
  const [i, o, a] = _E(e, n),
    l = (c) => {
      if (!Bw(c)) return;
      const { target: f } = c,
        h = t(f, c);
      if (typeof h != "function" || !f) return;
      const p = (g) => {
        Bw(g) && (h(g), f.removeEventListener("pointerleave", p));
      };
      f.addEventListener("pointerleave", p, o);
    };
  return (
    i.forEach((c) => {
      c.addEventListener("pointerenter", l, o);
    }),
    a
  );
}
function zw(e, t, n) {
  const { props: i } = e;
  e.animationState &&
    i.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    a = i[o];
  a && kt.postRender(() => a(t, Ul(t)));
}
class LL extends hs {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = OL(
        t,
        (n, i) => (zw(this.node, i, "Start"), (o) => zw(this.node, o, "End"))
      ));
  }
  unmount() {}
}
class ML extends hs {
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
    this.unmount = zl(
      ml(this.node.current, "focus", () => this.onFocus()),
      ml(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const CE = (e, t) => (t ? (e === t ? !0 : CE(e, t.parentElement)) : !1),
  FL = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function IL(e) {
  return FL.has(e.tagName) || e.tabIndex !== -1;
}
const Ya = new WeakSet();
function Uw(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Fh(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const VL = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const i = Uw(() => {
    if (Ya.has(n)) return;
    Fh(n, "down");
    const o = Uw(() => {
        Fh(n, "up");
      }),
      a = () => Fh(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", a, t);
  });
  n.addEventListener("keydown", i, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", i), t);
};
function $w(e) {
  return zm(e) && !sE();
}
function BL(e, t, n = {}) {
  const [i, o, a] = _E(e, n),
    l = (c) => {
      const f = c.currentTarget;
      if (!$w(c) || Ya.has(f)) return;
      Ya.add(f);
      const h = t(f, c),
        p = (w, x) => {
          window.removeEventListener("pointerup", g),
            window.removeEventListener("pointercancel", y),
            !(!$w(w) || !Ya.has(f)) &&
              (Ya.delete(f), typeof h == "function" && h(w, { success: x }));
        },
        g = (w) => {
          p(w, n.useGlobalTarget || CE(f, w.target));
        },
        y = (w) => {
          p(w, !1);
        };
      window.addEventListener("pointerup", g, o),
        window.addEventListener("pointercancel", y, o);
    };
  return (
    i.forEach((c) => {
      !IL(c) && c.getAttribute("tabindex") === null && (c.tabIndex = 0),
        (n.useGlobalTarget ? window : c).addEventListener("pointerdown", l, o),
        c.addEventListener("focus", (h) => VL(h, o), o);
    }),
    a
  );
}
function Ww(e, t, n) {
  const { props: i } = e;
  e.animationState &&
    i.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    a = i[o];
  a && kt.postRender(() => a(t, Ul(t)));
}
class zL extends hs {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = BL(
        t,
        (n, i) => (
          Ww(this.node, i, "Start"),
          (o, { success: a }) => Ww(this.node, o, a ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const wp = new WeakMap(),
  Ih = new WeakMap(),
  UL = (e) => {
    const t = wp.get(e.target);
    t && t(e);
  },
  $L = (e) => {
    e.forEach(UL);
  };
function WL({ root: e, ...t }) {
  const n = e || document;
  Ih.has(n) || Ih.set(n, {});
  const i = Ih.get(n),
    o = JSON.stringify(t);
  return i[o] || (i[o] = new IntersectionObserver($L, { root: e, ...t })), i[o];
}
function HL(e, t, n) {
  const i = WL(t);
  return (
    wp.set(e, n),
    i.observe(e),
    () => {
      wp.delete(e), i.unobserve(e);
    }
  );
}
const ZL = { some: 0, all: 1 };
class KL extends hs {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: i, amount: o = "some", once: a } = t,
      l = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof o == "number" ? o : ZL[o],
      },
      c = (f) => {
        const { isIntersecting: h } = f;
        if (
          this.isInView === h ||
          ((this.isInView = h), a && !h && this.hasEnteredView)
        )
          return;
        h && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", h);
        const { onViewportEnter: p, onViewportLeave: g } = this.node.getProps(),
          y = h ? p : g;
        y && y(f);
      };
    return HL(this.node.current, l, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(GL(t, n)) && this.startObserver();
  }
  unmount() {}
}
function GL({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const qL = {
    inView: { Feature: KL },
    tap: { Feature: zL },
    focus: { Feature: ML },
    hover: { Feature: LL },
  },
  YL = { layout: { ProjectionNode: EE, MeasureLayout: mE } },
  Sp = { current: null },
  kE = { current: !1 };
function XL() {
  if (((kE.current = !0), !!cm))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Sp.current = e.matches);
      e.addListener(t), t();
    } else Sp.current = !1;
}
const QL = [...Kb, fn, os],
  JL = (e) => QL.find(Zb(e)),
  Hw = new WeakMap();
function eM(e, t, n) {
  for (const i in t) {
    const o = t[i],
      a = n[i];
    if (pn(o)) e.addValue(i, o);
    else if (pn(a)) e.addValue(i, hl(o, { owner: e }));
    else if (a !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, hl(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Zw = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class tM {
  scrapeMotionValuesFromProps(t, n, i) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: i,
      reducedMotionConfig: o,
      blockInitialAnimation: a,
      visualState: l,
    },
    c = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Fm),
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
        const w = Wr.now();
        this.renderScheduledAt < w &&
          ((this.renderScheduledAt = w), kt.render(this.render, !1, !0));
      });
    const { latestValues: f, renderState: h, onUpdate: p } = l;
    (this.onUpdate = p),
      (this.latestValues = f),
      (this.baseTarget = { ...f }),
      (this.initialValues = n.initial ? { ...f } : {}),
      (this.renderState = h),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = i),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = c),
      (this.blockInitialAnimation = !!a),
      (this.isControllingVariants = hd(n)),
      (this.isVariantNode = ob(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: g, ...y } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const w in y) {
      const x = y[w];
      f[w] !== void 0 && pn(x) && x.set(f[w], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Hw.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      kE.current || XL(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Sp.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Hw.delete(this.current),
      this.projection && this.projection.unmount(),
      ss(this.notifyUpdate),
      ss(this.render),
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
    const i = Xs.has(t),
      o = n.on("change", (c) => {
        (this.latestValues[t] = c),
          this.props.onUpdate && kt.preRender(this.notifyUpdate),
          i && this.projection && (this.projection.isTransformDirty = !0);
      }),
      a = n.on("renderRequest", this.scheduleRender);
    let l;
    window.MotionCheckAppearSync &&
      (l = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), a(), l && l(), n.owner && n.stop();
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
    for (t in $o) {
      const n = $o[t];
      if (!n) continue;
      const { isEnabled: i, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          i(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const a = this.features[t];
        a.isMounted ? a.update() : (a.mount(), (a.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Vt();
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
    for (let i = 0; i < Zw.length; i++) {
      const o = Zw[i];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const a = "on" + o,
        l = t[a];
      l && (this.propEventSubscriptions[o] = this.on(o, l));
    }
    (this.prevMotionValues = eM(
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
    const i = this.values.get(t);
    n !== i &&
      (i && this.removeValue(t),
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
    let i = this.values.get(t);
    return (
      i === void 0 &&
        n !== void 0 &&
        ((i = hl(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, i)),
      i
    );
  }
  readValue(t, n) {
    var i;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (i = this.getBaseTargetFromProps(this.props, t)) !== null &&
          i !== void 0
        ? i
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (Wb(o) || Lb(o))
          ? (o = parseFloat(o))
          : !JL(o) && os.test(n) && (o = zb(t, n)),
        this.setBaseTarget(t, pn(o) ? o.get() : o)),
      pn(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: i } = this.props;
    let o;
    if (typeof i == "string" || typeof i == "object") {
      const l = gm(
        this.props,
        i,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      l && (o = l[t]);
    }
    if (i && o !== void 0) return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !pn(a)
      ? a
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Pm()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class TE extends tM {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Gb);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: i }) {
    delete n[t], delete i[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    pn(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function nM(e) {
  return window.getComputedStyle(e);
}
class rM extends TE {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = pb);
  }
  readValueFromInstance(t, n) {
    if (Xs.has(n)) {
      const i = Mm(n);
      return (i && i.default) || 0;
    } else {
      const i = nM(t),
        o = (ym(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return hE(t, n);
  }
  build(t, n, i) {
    wm(t, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, i) {
    return _m(t, n, i);
  }
}
class iM extends TE {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Vt);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Xs.has(n)) {
      const i = Mm(n);
      return (i && i.default) || 0;
    }
    return (n = mb.has(n) ? n : hm(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, i) {
    return vb(t, n, i);
  }
  build(t, n, i) {
    Sm(t, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, i, o) {
    gb(t, n, i, o);
  }
  mount(t) {
    (this.isSVGTag = Em(t.tagName)), super.mount(t);
  }
}
const sM = (e, t) =>
    mm(e) ? new iM(t) : new rM(t, { allowProjection: e !== _.Fragment }),
  oM = jj({ ...bO, ...qL, ...jL, ...YL }, sM),
  yi = KN(oM);
var $l = (e) => e.type === "checkbox",
  Ls = (e) => e instanceof Date,
  vn = (e) => e == null;
const PE = (e) => typeof e == "object";
var zt = (e) => !vn(e) && !Array.isArray(e) && PE(e) && !Ls(e),
  RE = (e) =>
    zt(e) && e.target ? ($l(e.target) ? e.target.checked : e.target.value) : e,
  aM = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  AE = (e, t) => e.has(aM(t)),
  lM = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return zt(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Um =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Rn(e) {
  let t;
  const n = Array.isArray(e),
    i = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(Um && (e instanceof Blob || i)) && (n || zt(e)))
    if (((t = n ? [] : {}), !n && !lM(e))) t = e;
    else for (const o in e) e.hasOwnProperty(o) && (t[o] = Rn(e[o]));
  else return e;
  return t;
}
var gd = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Bt = (e) => e === void 0,
  ge = (e, t, n) => {
    if (!t || !zt(e)) return n;
    const i = gd(t.split(/[,[\].]+?/)).reduce((o, a) => (vn(o) ? o : o[a]), e);
    return Bt(i) || i === e ? (Bt(e[t]) ? n : e[t]) : i;
  },
  ir = (e) => typeof e == "boolean",
  $m = (e) => /^\w*$/.test(e),
  NE = (e) => gd(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  mt = (e, t, n) => {
    let i = -1;
    const o = $m(t) ? [t] : NE(t),
      a = o.length,
      l = a - 1;
    for (; ++i < a; ) {
      const c = o[i];
      let f = n;
      if (i !== l) {
        const h = e[c];
        f = zt(h) || Array.isArray(h) ? h : isNaN(+o[i + 1]) ? {} : [];
      }
      if (c === "__proto__" || c === "constructor" || c === "prototype") return;
      (e[c] = f), (e = e[c]);
    }
    return e;
  };
const Vc = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  wr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  fi = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  jE = rt.createContext(null),
  Qs = () => rt.useContext(jE),
  uM = (e) => {
    const { children: t, ...n } = e;
    return rt.createElement(jE.Provider, { value: n }, t);
  };
var DE = (e, t, n, i = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const a in e)
      Object.defineProperty(o, a, {
        get: () => {
          const l = a;
          return (
            t._proxyFormState[l] !== wr.all &&
              (t._proxyFormState[l] = !i || wr.all),
            n && (n[l] = !0),
            e[l]
          );
        },
      });
    return o;
  },
  An = (e) => zt(e) && !Object.keys(e).length,
  OE = (e, t, n, i) => {
    n(e);
    const { name: o, ...a } = e;
    return (
      An(a) ||
      Object.keys(a).length >= Object.keys(t).length ||
      Object.keys(a).find((l) => t[l] === (!i || wr.all))
    );
  },
  il = (e) => (Array.isArray(e) ? e : [e]),
  LE = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    il(e).some((i) => i && (n ? i === t : i.startsWith(t) || t.startsWith(i)));
function Wm(e) {
  const t = rt.useRef(e);
  (t.current = e),
    rt.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function cM(e) {
  const t = Qs(),
    { control: n = t.control, disabled: i, name: o, exact: a } = e,
    [l, c] = rt.useState(n._formState),
    f = rt.useRef(!0),
    h = rt.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    p = rt.useRef(o);
  return (
    (p.current = o),
    Wm({
      disabled: i,
      next: (g) =>
        f.current &&
        LE(p.current, g.name, a) &&
        OE(g, h.current, n._updateFormState) &&
        c({ ...n._formState, ...g }),
      subject: n._subjects.state,
    }),
    rt.useEffect(
      () => (
        (f.current = !0),
        h.current.isValid && n._updateValid(!0),
        () => {
          f.current = !1;
        }
      ),
      [n]
    ),
    rt.useMemo(() => DE(l, n, h.current, !1), [l, n])
  );
}
var Br = (e) => typeof e == "string",
  ME = (e, t, n, i, o) =>
    Br(e)
      ? (i && t.watch.add(e), ge(n, e, o))
      : Array.isArray(e)
      ? e.map((a) => (i && t.watch.add(a), ge(n, a)))
      : (i && (t.watchAll = !0), n);
function dM(e) {
  const t = Qs(),
    {
      control: n = t.control,
      name: i,
      defaultValue: o,
      disabled: a,
      exact: l,
    } = e,
    c = rt.useRef(i);
  (c.current = i),
    Wm({
      disabled: a,
      subject: n._subjects.values,
      next: (p) => {
        LE(c.current, p.name, l) &&
          h(Rn(ME(c.current, n._names, p.values || n._formValues, !1, o)));
      },
    });
  const [f, h] = rt.useState(n._getWatch(i, o));
  return rt.useEffect(() => n._removeUnmounted()), f;
}
function fM(e) {
  const t = Qs(),
    { name: n, disabled: i, control: o = t.control, shouldUnregister: a } = e,
    l = AE(o._names.array, n),
    c = dM({
      control: o,
      name: n,
      defaultValue: ge(
        o._formValues,
        n,
        ge(o._defaultValues, n, e.defaultValue)
      ),
      exact: !0,
    }),
    f = cM({ control: o, name: n, exact: !0 }),
    h = rt.useRef(
      o.register(n, {
        ...e.rules,
        value: c,
        ...(ir(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    p = rt.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ge(f.errors, n) },
            isDirty: { enumerable: !0, get: () => !!ge(f.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!ge(f.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!ge(f.validatingFields, n),
            },
            error: { enumerable: !0, get: () => ge(f.errors, n) },
          }
        ),
      [f, n]
    ),
    g = rt.useMemo(
      () => ({
        name: n,
        value: c,
        ...(ir(i) || f.disabled ? { disabled: f.disabled || i } : {}),
        onChange: (y) =>
          h.current.onChange({
            target: { value: RE(y), name: n },
            type: Vc.CHANGE,
          }),
        onBlur: () =>
          h.current.onBlur({
            target: { value: ge(o._formValues, n), name: n },
            type: Vc.BLUR,
          }),
        ref: (y) => {
          const w = ge(o._fields, n);
          w &&
            y &&
            (w._f.ref = {
              focus: () => y.focus(),
              select: () => y.select(),
              setCustomValidity: (x) => y.setCustomValidity(x),
              reportValidity: () => y.reportValidity(),
            });
        },
      }),
      [n, o._formValues, i, f.disabled, c, o._fields]
    );
  return (
    rt.useEffect(() => {
      const y = o._options.shouldUnregister || a,
        w = (x, S) => {
          const E = ge(o._fields, x);
          E && E._f && (E._f.mount = S);
        };
      if ((w(n, !0), y)) {
        const x = Rn(ge(o._options.defaultValues, n));
        mt(o._defaultValues, n, x),
          Bt(ge(o._formValues, n)) && mt(o._formValues, n, x);
      }
      return (
        !l && o.register(n),
        () => {
          (l ? y && !o._state.action : y) ? o.unregister(n) : w(n, !1);
        }
      );
    }, [n, o, l, a]),
    rt.useEffect(() => {
      o._updateDisabledField({ disabled: i, fields: o._fields, name: n });
    }, [i, n, o]),
    rt.useMemo(() => ({ field: g, formState: f, fieldState: p }), [g, f, p])
  );
}
const hM = (e) => e.render(fM(e));
var FE = (e, t, n, i, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [i]: o || !0 },
        }
      : {},
  Kw = (e) => ({
    isOnSubmit: !e || e === wr.onSubmit,
    isOnBlur: e === wr.onBlur,
    isOnChange: e === wr.onChange,
    isOnAll: e === wr.all,
    isOnTouch: e === wr.onTouched,
  }),
  Gw = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))
      ));
const sl = (e, t, n, i) => {
  for (const o of n || Object.keys(e)) {
    const a = ge(e, o);
    if (a) {
      const { _f: l, ...c } = a;
      if (l) {
        if (l.refs && l.refs[0] && t(l.refs[0], o) && !i) return !0;
        if (l.ref && t(l.ref, l.name) && !i) return !0;
        if (sl(c, t)) break;
      } else if (zt(c) && sl(c, t)) break;
    }
  }
};
var pM = (e, t, n) => {
    const i = il(ge(e, n));
    return mt(i, "root", t[n]), mt(e, n, i), e;
  },
  Hm = (e) => e.type === "file",
  Vr = (e) => typeof e == "function",
  Bc = (e) => {
    if (!Um) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  bc = (e) => Br(e),
  Zm = (e) => e.type === "radio",
  zc = (e) => e instanceof RegExp;
const qw = { value: !1, isValid: !1 },
  Yw = { value: !0, isValid: !0 };
var IE = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Bt(e[0].attributes.value)
        ? Bt(e[0].value) || e[0].value === ""
          ? Yw
          : { value: e[0].value, isValid: !0 }
        : Yw
      : qw;
  }
  return qw;
};
const Xw = { isValid: !1, value: null };
var VE = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Xw
      )
    : Xw;
function Qw(e, t, n = "validate") {
  if (bc(e) || (Array.isArray(e) && e.every(bc)) || (ir(e) && !e))
    return { type: n, message: bc(e) ? e : "", ref: t };
}
var Ro = (e) => (zt(e) && !zc(e) ? e : { value: e, message: "" }),
  Jw = async (e, t, n, i, o, a) => {
    const {
        ref: l,
        refs: c,
        required: f,
        maxLength: h,
        minLength: p,
        min: g,
        max: y,
        pattern: w,
        validate: x,
        name: S,
        valueAsNumber: E,
        mount: b,
      } = e._f,
      P = ge(n, S);
    if (!b || t.has(S)) return {};
    const R = c ? c[0] : l,
      j = (X) => {
        o &&
          R.reportValidity &&
          (R.setCustomValidity(ir(X) ? "" : X || ""), R.reportValidity());
      },
      T = {},
      M = Zm(l),
      V = $l(l),
      F = M || V,
      Y =
        ((E || Hm(l)) && Bt(l.value) && Bt(P)) ||
        (Bc(l) && l.value === "") ||
        P === "" ||
        (Array.isArray(P) && !P.length),
      Q = FE.bind(null, S, i, T),
      ce = (X, ie, he, pe = fi.maxLength, me = fi.minLength) => {
        const le = X ? ie : he;
        T[S] = {
          type: X ? pe : me,
          message: le,
          ref: l,
          ...Q(X ? pe : me, le),
        };
      };
    if (
      a
        ? !Array.isArray(P) || !P.length
        : f &&
          ((!F && (Y || vn(P))) ||
            (ir(P) && !P) ||
            (V && !IE(c).isValid) ||
            (M && !VE(c).isValid))
    ) {
      const { value: X, message: ie } = bc(f)
        ? { value: !!f, message: f }
        : Ro(f);
      if (
        X &&
        ((T[S] = {
          type: fi.required,
          message: ie,
          ref: R,
          ...Q(fi.required, ie),
        }),
        !i)
      )
        return j(ie), T;
    }
    if (!Y && (!vn(g) || !vn(y))) {
      let X, ie;
      const he = Ro(y),
        pe = Ro(g);
      if (!vn(P) && !isNaN(P)) {
        const me = l.valueAsNumber || (P && +P);
        vn(he.value) || (X = me > he.value),
          vn(pe.value) || (ie = me < pe.value);
      } else {
        const me = l.valueAsDate || new Date(P),
          le = (ee) => new Date(new Date().toDateString() + " " + ee),
          H = l.type == "time",
          J = l.type == "week";
        Br(he.value) &&
          P &&
          (X = H
            ? le(P) > le(he.value)
            : J
            ? P > he.value
            : me > new Date(he.value)),
          Br(pe.value) &&
            P &&
            (ie = H
              ? le(P) < le(pe.value)
              : J
              ? P < pe.value
              : me < new Date(pe.value));
      }
      if ((X || ie) && (ce(!!X, he.message, pe.message, fi.max, fi.min), !i))
        return j(T[S].message), T;
    }
    if ((h || p) && !Y && (Br(P) || (a && Array.isArray(P)))) {
      const X = Ro(h),
        ie = Ro(p),
        he = !vn(X.value) && P.length > +X.value,
        pe = !vn(ie.value) && P.length < +ie.value;
      if ((he || pe) && (ce(he, X.message, ie.message), !i))
        return j(T[S].message), T;
    }
    if (w && !Y && Br(P)) {
      const { value: X, message: ie } = Ro(w);
      if (
        zc(X) &&
        !P.match(X) &&
        ((T[S] = {
          type: fi.pattern,
          message: ie,
          ref: l,
          ...Q(fi.pattern, ie),
        }),
        !i)
      )
        return j(ie), T;
    }
    if (x) {
      if (Vr(x)) {
        const X = await x(P, n),
          ie = Qw(X, R);
        if (ie && ((T[S] = { ...ie, ...Q(fi.validate, ie.message) }), !i))
          return j(ie.message), T;
      } else if (zt(x)) {
        let X = {};
        for (const ie in x) {
          if (!An(X) && !i) break;
          const he = Qw(await x[ie](P, n), R, ie);
          he &&
            ((X = { ...he, ...Q(ie, he.message) }),
            j(he.message),
            i && (T[S] = X));
        }
        if (!An(X) && ((T[S] = { ref: R, ...X }), !i)) return T;
      }
    }
    return j(!0), T;
  };
function mM(e, t) {
  const n = t.slice(0, -1).length;
  let i = 0;
  for (; i < n; ) e = Bt(e) ? i++ : e[t[i++]];
  return e;
}
function gM(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Bt(e[t])) return !1;
  return !0;
}
function Yt(e, t) {
  const n = Array.isArray(t) ? t : $m(t) ? [t] : NE(t),
    i = n.length === 1 ? e : mM(e, n),
    o = n.length - 1,
    a = n[o];
  return (
    i && delete i[a],
    o !== 0 &&
      ((zt(i) && An(i)) || (Array.isArray(i) && gM(i))) &&
      Yt(e, n.slice(0, -1)),
    e
  );
}
var Vh = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const a of e) a.next && a.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((a) => a !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  bp = (e) => vn(e) || !PE(e);
function es(e, t) {
  if (bp(e) || bp(t)) return e === t;
  if (Ls(e) && Ls(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (const o of n) {
    const a = e[o];
    if (!i.includes(o)) return !1;
    if (o !== "ref") {
      const l = t[o];
      if (
        (Ls(a) && Ls(l)) ||
        (zt(a) && zt(l)) ||
        (Array.isArray(a) && Array.isArray(l))
          ? !es(a, l)
          : a !== l
      )
        return !1;
    }
  }
  return !0;
}
var BE = (e) => e.type === "select-multiple",
  yM = (e) => Zm(e) || $l(e),
  Bh = (e) => Bc(e) && e.isConnected,
  zE = (e) => {
    for (const t in e) if (Vr(e[t])) return !0;
    return !1;
  };
function Uc(e, t = {}) {
  const n = Array.isArray(e);
  if (zt(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || (zt(e[i]) && !zE(e[i]))
        ? ((t[i] = Array.isArray(e[i]) ? [] : {}), Uc(e[i], t[i]))
        : vn(e[i]) || (t[i] = !0);
  return t;
}
function UE(e, t, n) {
  const i = Array.isArray(e);
  if (zt(e) || i)
    for (const o in e)
      Array.isArray(e[o]) || (zt(e[o]) && !zE(e[o]))
        ? Bt(t) || bp(n[o])
          ? (n[o] = Array.isArray(e[o]) ? Uc(e[o], []) : { ...Uc(e[o]) })
          : UE(e[o], vn(t) ? {} : t[o], n[o])
        : (n[o] = !es(e[o], t[o]));
  return n;
}
var Wa = (e, t) => UE(e, t, Uc(t)),
  $E = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: i }) =>
    Bt(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && Br(e)
      ? new Date(e)
      : i
      ? i(e)
      : e;
function zh(e) {
  const t = e.ref;
  return Hm(t)
    ? t.files
    : Zm(t)
    ? VE(e.refs).value
    : BE(t)
    ? [...t.selectedOptions].map(({ value: n }) => n)
    : $l(t)
    ? IE(e.refs).value
    : $E(Bt(t.value) ? e.ref.value : t.value, e);
}
var vM = (e, t, n, i) => {
    const o = {};
    for (const a of e) {
      const l = ge(t, a);
      l && mt(o, a, l._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: i,
    };
  },
  Ha = (e) =>
    Bt(e)
      ? e
      : zc(e)
      ? e.source
      : zt(e)
      ? zc(e.value)
        ? e.value.source
        : e.value
      : e;
const e0 = "AsyncFunction";
var xM = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (Vr(e.validate) && e.validate.constructor.name === e0) ||
      (zt(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === e0))
    ),
  wM = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function t0(e, t, n) {
  const i = ge(e, n);
  if (i || $m(n)) return { error: i, name: n };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."),
      l = ge(t, a),
      c = ge(e, a);
    if (l && !Array.isArray(l) && n !== a) return { name: n };
    if (c && c.type) return { name: a, error: c };
    o.pop();
  }
  return { name: n };
}
var SM = (e, t, n, i, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
      ? !(t || e)
      : (n ? i.isOnBlur : o.isOnBlur)
      ? !e
      : (n ? i.isOnChange : o.isOnChange)
      ? e
      : !0,
  bM = (e, t) => !gd(ge(e, t)).length && Yt(e, t);
const EM = {
  mode: wr.onSubmit,
  reValidateMode: wr.onChange,
  shouldFocusError: !0,
};
function _M(e = {}) {
  let t = { ...EM, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Vr(t.defaultValues),
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
    i = {},
    o =
      zt(t.defaultValues) || zt(t.values)
        ? Rn(t.defaultValues || t.values) || {}
        : {},
    a = t.shouldUnregister ? {} : Rn(o),
    l = { action: !1, mount: !1, watch: !1 },
    c = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    f,
    h = 0;
  const p = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    g = { values: Vh(), array: Vh(), state: Vh() },
    y = Kw(t.mode),
    w = Kw(t.reValidateMode),
    x = t.criteriaMode === wr.all,
    S = (N) => (z) => {
      clearTimeout(h), (h = setTimeout(N, z));
    },
    E = async (N) => {
      if (!t.disabled && (p.isValid || N)) {
        const z = t.resolver ? An((await F()).errors) : await Q(i, !0);
        z !== n.isValid && g.state.next({ isValid: z });
      }
    },
    b = (N, z) => {
      !t.disabled &&
        (p.isValidating || p.validatingFields) &&
        ((N || Array.from(c.mount)).forEach((Z) => {
          Z && (z ? mt(n.validatingFields, Z, z) : Yt(n.validatingFields, Z));
        }),
        g.state.next({
          validatingFields: n.validatingFields,
          isValidating: !An(n.validatingFields),
        }));
    },
    P = (N, z = [], Z, ue, de = !0, ae = !0) => {
      if (ue && Z && !t.disabled) {
        if (((l.action = !0), ae && Array.isArray(ge(i, N)))) {
          const je = Z(ge(i, N), ue.argA, ue.argB);
          de && mt(i, N, je);
        }
        if (ae && Array.isArray(ge(n.errors, N))) {
          const je = Z(ge(n.errors, N), ue.argA, ue.argB);
          de && mt(n.errors, N, je), bM(n.errors, N);
        }
        if (p.touchedFields && ae && Array.isArray(ge(n.touchedFields, N))) {
          const je = Z(ge(n.touchedFields, N), ue.argA, ue.argB);
          de && mt(n.touchedFields, N, je);
        }
        p.dirtyFields && (n.dirtyFields = Wa(o, a)),
          g.state.next({
            name: N,
            isDirty: X(N, z),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else mt(a, N, z);
    },
    R = (N, z) => {
      mt(n.errors, N, z), g.state.next({ errors: n.errors });
    },
    j = (N) => {
      (n.errors = N), g.state.next({ errors: n.errors, isValid: !1 });
    },
    T = (N, z, Z, ue) => {
      const de = ge(i, N);
      if (de) {
        const ae = ge(a, N, Bt(Z) ? ge(o, N) : Z);
        Bt(ae) || (ue && ue.defaultChecked) || z
          ? mt(a, N, z ? ae : zh(de._f))
          : pe(N, ae),
          l.mount && E();
      }
    },
    M = (N, z, Z, ue, de) => {
      let ae = !1,
        je = !1;
      const Fe = { name: N };
      if (!t.disabled) {
        const lt = !!(ge(i, N) && ge(i, N)._f && ge(i, N)._f.disabled);
        if (!Z || ue) {
          p.isDirty &&
            ((je = n.isDirty),
            (n.isDirty = Fe.isDirty = X()),
            (ae = je !== Fe.isDirty));
          const yt = lt || es(ge(o, N), z);
          (je = !!(!lt && ge(n.dirtyFields, N))),
            yt || lt ? Yt(n.dirtyFields, N) : mt(n.dirtyFields, N, !0),
            (Fe.dirtyFields = n.dirtyFields),
            (ae = ae || (p.dirtyFields && je !== !yt));
        }
        if (Z) {
          const yt = ge(n.touchedFields, N);
          yt ||
            (mt(n.touchedFields, N, Z),
            (Fe.touchedFields = n.touchedFields),
            (ae = ae || (p.touchedFields && yt !== Z)));
        }
        ae && de && g.state.next(Fe);
      }
      return ae ? Fe : {};
    },
    V = (N, z, Z, ue) => {
      const de = ge(n.errors, N),
        ae = p.isValid && ir(z) && n.isValid !== z;
      if (
        (t.delayError && Z
          ? ((f = S(() => R(N, Z))), f(t.delayError))
          : (clearTimeout(h),
            (f = null),
            Z ? mt(n.errors, N, Z) : Yt(n.errors, N)),
        (Z ? !es(de, Z) : de) || !An(ue) || ae)
      ) {
        const je = {
          ...ue,
          ...(ae && ir(z) ? { isValid: z } : {}),
          errors: n.errors,
          name: N,
        };
        (n = { ...n, ...je }), g.state.next(je);
      }
    },
    F = async (N) => {
      b(N, !0);
      const z = await t.resolver(
        a,
        t.context,
        vM(N || c.mount, i, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return b(N), z;
    },
    Y = async (N) => {
      const { errors: z } = await F(N);
      if (N)
        for (const Z of N) {
          const ue = ge(z, Z);
          ue ? mt(n.errors, Z, ue) : Yt(n.errors, Z);
        }
      else n.errors = z;
      return z;
    },
    Q = async (N, z, Z = { valid: !0 }) => {
      for (const ue in N) {
        const de = N[ue];
        if (de) {
          const { _f: ae, ...je } = de;
          if (ae) {
            const Fe = c.array.has(ae.name),
              lt = de._f && xM(de._f);
            lt && p.validatingFields && b([ue], !0);
            const yt = await Jw(
              de,
              c.disabled,
              a,
              x,
              t.shouldUseNativeValidation && !z,
              Fe
            );
            if (
              (lt && p.validatingFields && b([ue]),
              yt[ae.name] && ((Z.valid = !1), z))
            )
              break;
            !z &&
              (ge(yt, ae.name)
                ? Fe
                  ? pM(n.errors, yt, ae.name)
                  : mt(n.errors, ae.name, yt[ae.name])
                : Yt(n.errors, ae.name));
          }
          !An(je) && (await Q(je, z, Z));
        }
      }
      return Z.valid;
    },
    ce = () => {
      for (const N of c.unMount) {
        const z = ge(i, N);
        z &&
          (z._f.refs ? z._f.refs.every((Z) => !Bh(Z)) : !Bh(z._f.ref)) &&
          ze(N);
      }
      c.unMount = new Set();
    },
    X = (N, z) => !t.disabled && (N && z && mt(a, N, z), !es(O(), o)),
    ie = (N, z, Z) =>
      ME(N, c, { ...(l.mount ? a : Bt(z) ? o : Br(N) ? { [N]: z } : z) }, Z, z),
    he = (N) =>
      gd(ge(l.mount ? a : o, N, t.shouldUnregister ? ge(o, N, []) : [])),
    pe = (N, z, Z = {}) => {
      const ue = ge(i, N);
      let de = z;
      if (ue) {
        const ae = ue._f;
        ae &&
          (!ae.disabled && mt(a, N, $E(z, ae)),
          (de = Bc(ae.ref) && vn(z) ? "" : z),
          BE(ae.ref)
            ? [...ae.ref.options].forEach(
                (je) => (je.selected = de.includes(je.value))
              )
            : ae.refs
            ? $l(ae.ref)
              ? ae.refs.length > 1
                ? ae.refs.forEach(
                    (je) =>
                      (!je.defaultChecked || !je.disabled) &&
                      (je.checked = Array.isArray(de)
                        ? !!de.find((Fe) => Fe === je.value)
                        : de === je.value)
                  )
                : ae.refs[0] && (ae.refs[0].checked = !!de)
              : ae.refs.forEach((je) => (je.checked = je.value === de))
            : Hm(ae.ref)
            ? (ae.ref.value = "")
            : ((ae.ref.value = de),
              ae.ref.type || g.values.next({ name: N, values: { ...a } })));
      }
      (Z.shouldDirty || Z.shouldTouch) &&
        M(N, de, Z.shouldTouch, Z.shouldDirty, !0),
        Z.shouldValidate && ee(N);
    },
    me = (N, z, Z) => {
      for (const ue in z) {
        const de = z[ue],
          ae = `${N}.${ue}`,
          je = ge(i, ae);
        (c.array.has(N) || zt(de) || (je && !je._f)) && !Ls(de)
          ? me(ae, de, Z)
          : pe(ae, de, Z);
      }
    },
    le = (N, z, Z = {}) => {
      const ue = ge(i, N),
        de = c.array.has(N),
        ae = Rn(z);
      mt(a, N, ae),
        de
          ? (g.array.next({ name: N, values: { ...a } }),
            (p.isDirty || p.dirtyFields) &&
              Z.shouldDirty &&
              g.state.next({
                name: N,
                dirtyFields: Wa(o, a),
                isDirty: X(N, ae),
              }))
          : ue && !ue._f && !vn(ae)
          ? me(N, ae, Z)
          : pe(N, ae, Z),
        Gw(N, c) && g.state.next({ ...n }),
        g.values.next({ name: l.mount ? N : void 0, values: { ...a } });
    },
    H = async (N) => {
      l.mount = !0;
      const z = N.target;
      let Z = z.name,
        ue = !0;
      const de = ge(i, Z),
        ae = () => (z.type ? zh(de._f) : RE(N)),
        je = (Fe) => {
          ue =
            Number.isNaN(Fe) ||
            (Ls(Fe) && isNaN(Fe.getTime())) ||
            es(Fe, ge(a, Z, Fe));
        };
      if (de) {
        let Fe, lt;
        const yt = ae(),
          Ht = N.type === Vc.BLUR || N.type === Vc.FOCUS_OUT,
          Rr =
            (!wM(de._f) && !t.resolver && !ge(n.errors, Z) && !de._f.deps) ||
            SM(Ht, ge(n.touchedFields, Z), n.isSubmitted, w, y),
          bt = Gw(Z, c, Ht);
        mt(a, Z, yt),
          Ht
            ? (de._f.onBlur && de._f.onBlur(N), f && f(0))
            : de._f.onChange && de._f.onChange(N);
        const an = M(Z, yt, Ht, !1),
          Ar = !An(an) || bt;
        if (
          (!Ht && g.values.next({ name: Z, type: N.type, values: { ...a } }),
          Rr)
        )
          return (
            p.isValid && (t.mode === "onBlur" && Ht ? E() : Ht || E()),
            Ar && g.state.next({ name: Z, ...(bt ? {} : an) })
          );
        if ((!Ht && bt && g.state.next({ ...n }), t.resolver)) {
          const { errors: jn } = await F([Z]);
          if ((je(yt), ue)) {
            const Ei = t0(n.errors, i, Z),
              Qr = t0(jn, i, Ei.name || Z);
            (Fe = Qr.error), (Z = Qr.name), (lt = An(jn));
          }
        } else
          b([Z], !0),
            (Fe = (await Jw(de, c.disabled, a, x, t.shouldUseNativeValidation))[
              Z
            ]),
            b([Z]),
            je(yt),
            ue && (Fe ? (lt = !1) : p.isValid && (lt = await Q(i, !0)));
        ue && (de._f.deps && ee(de._f.deps), V(Z, lt, Fe, an));
      }
    },
    J = (N, z) => {
      if (ge(n.errors, z) && N.focus) return N.focus(), 1;
    },
    ee = async (N, z = {}) => {
      let Z, ue;
      const de = il(N);
      if (t.resolver) {
        const ae = await Y(Bt(N) ? N : de);
        (Z = An(ae)), (ue = N ? !de.some((je) => ge(ae, je)) : Z);
      } else
        N
          ? ((ue = (
              await Promise.all(
                de.map(async (ae) => {
                  const je = ge(i, ae);
                  return await Q(je && je._f ? { [ae]: je } : je);
                })
              )
            ).every(Boolean)),
            !(!ue && !n.isValid) && E())
          : (ue = Z = await Q(i));
      return (
        g.state.next({
          ...(!Br(N) || (p.isValid && Z !== n.isValid) ? {} : { name: N }),
          ...(t.resolver || !N ? { isValid: Z } : {}),
          errors: n.errors,
        }),
        z.shouldFocus && !ue && sl(i, J, N ? de : c.mount),
        ue
      );
    },
    O = (N) => {
      const z = { ...(l.mount ? a : o) };
      return Bt(N) ? z : Br(N) ? ge(z, N) : N.map((Z) => ge(z, Z));
    },
    q = (N, z) => ({
      invalid: !!ge((z || n).errors, N),
      isDirty: !!ge((z || n).dirtyFields, N),
      error: ge((z || n).errors, N),
      isValidating: !!ge(n.validatingFields, N),
      isTouched: !!ge((z || n).touchedFields, N),
    }),
    Ne = (N) => {
      N && il(N).forEach((z) => Yt(n.errors, z)),
        g.state.next({ errors: N ? n.errors : {} });
    },
    Me = (N, z, Z) => {
      const ue = (ge(i, N, { _f: {} })._f || {}).ref,
        de = ge(n.errors, N) || {},
        { ref: ae, message: je, type: Fe, ...lt } = de;
      mt(n.errors, N, { ...lt, ...z, ref: ue }),
        g.state.next({ name: N, errors: n.errors, isValid: !1 }),
        Z && Z.shouldFocus && ue && ue.focus && ue.focus();
    },
    Ie = (N, z) =>
      Vr(N)
        ? g.values.subscribe({ next: (Z) => N(ie(void 0, z), Z) })
        : ie(N, z, !0),
    ze = (N, z = {}) => {
      for (const Z of N ? il(N) : c.mount)
        c.mount.delete(Z),
          c.array.delete(Z),
          z.keepValue || (Yt(i, Z), Yt(a, Z)),
          !z.keepError && Yt(n.errors, Z),
          !z.keepDirty && Yt(n.dirtyFields, Z),
          !z.keepTouched && Yt(n.touchedFields, Z),
          !z.keepIsValidating && Yt(n.validatingFields, Z),
          !t.shouldUnregister && !z.keepDefaultValue && Yt(o, Z);
      g.values.next({ values: { ...a } }),
        g.state.next({ ...n, ...(z.keepDirty ? { isDirty: X() } : {}) }),
        !z.keepIsValid && E();
    },
    be = ({ disabled: N, name: z, field: Z, fields: ue }) => {
      ((ir(N) && l.mount) || N || c.disabled.has(z)) &&
        (N ? c.disabled.add(z) : c.disabled.delete(z),
        M(z, zh(Z ? Z._f : ge(ue, z)._f), !1, !1, !0));
    },
    Te = (N, z = {}) => {
      let Z = ge(i, N);
      const ue = ir(z.disabled) || ir(t.disabled);
      return (
        mt(i, N, {
          ...(Z || {}),
          _f: {
            ...(Z && Z._f ? Z._f : { ref: { name: N } }),
            name: N,
            mount: !0,
            ...z,
          },
        }),
        c.mount.add(N),
        Z
          ? be({
              field: Z,
              disabled: ir(z.disabled) ? z.disabled : t.disabled,
              name: N,
            })
          : T(N, !0, z.value),
        {
          ...(ue ? { disabled: z.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!z.required,
                min: Ha(z.min),
                max: Ha(z.max),
                minLength: Ha(z.minLength),
                maxLength: Ha(z.maxLength),
                pattern: Ha(z.pattern),
              }
            : {}),
          name: N,
          onChange: H,
          onBlur: H,
          ref: (de) => {
            if (de) {
              Te(N, z), (Z = ge(i, N));
              const ae =
                  (Bt(de.value) &&
                    de.querySelectorAll &&
                    de.querySelectorAll("input,select,textarea")[0]) ||
                  de,
                je = yM(ae),
                Fe = Z._f.refs || [];
              if (je ? Fe.find((lt) => lt === ae) : ae === Z._f.ref) return;
              mt(i, N, {
                _f: {
                  ...Z._f,
                  ...(je
                    ? {
                        refs: [
                          ...Fe.filter(Bh),
                          ae,
                          ...(Array.isArray(ge(o, N)) ? [{}] : []),
                        ],
                        ref: { type: ae.type, name: N },
                      }
                    : { ref: ae }),
                },
              }),
                T(N, !1, void 0, ae);
            } else
              (Z = ge(i, N, {})),
                Z._f && (Z._f.mount = !1),
                (t.shouldUnregister || z.shouldUnregister) &&
                  !(AE(c.array, N) && l.action) &&
                  c.unMount.add(N);
          },
        }
      );
    },
    Re = () => t.shouldFocusError && sl(i, J, c.mount),
    Xe = (N) => {
      ir(N) &&
        (g.state.next({ disabled: N }),
        sl(
          i,
          (z, Z) => {
            const ue = ge(i, Z);
            ue &&
              ((z.disabled = ue._f.disabled || N),
              Array.isArray(ue._f.refs) &&
                ue._f.refs.forEach((de) => {
                  de.disabled = ue._f.disabled || N;
                }));
          },
          0,
          !1
        ));
    },
    nt = (N, z) => async (Z) => {
      let ue;
      Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
      let de = Rn(a);
      if (c.disabled.size) for (const ae of c.disabled) mt(de, ae, void 0);
      if ((g.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: ae, values: je } = await F();
        (n.errors = ae), (de = je);
      } else await Q(i);
      if ((Yt(n.errors, "root"), An(n.errors))) {
        g.state.next({ errors: {} });
        try {
          await N(de, Z);
        } catch (ae) {
          ue = ae;
        }
      } else z && (await z({ ...n.errors }, Z)), Re(), setTimeout(Re);
      if (
        (g.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: An(n.errors) && !ue,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        ue)
      )
        throw ue;
    },
    _e = (N, z = {}) => {
      ge(i, N) &&
        (Bt(z.defaultValue)
          ? le(N, Rn(ge(o, N)))
          : (le(N, z.defaultValue), mt(o, N, Rn(z.defaultValue))),
        z.keepTouched || Yt(n.touchedFields, N),
        z.keepDirty ||
          (Yt(n.dirtyFields, N),
          (n.isDirty = z.defaultValue ? X(N, Rn(ge(o, N))) : X())),
        z.keepError || (Yt(n.errors, N), p.isValid && E()),
        g.state.next({ ...n }));
    },
    We = (N, z = {}) => {
      const Z = N ? Rn(N) : o,
        ue = Rn(Z),
        de = An(N),
        ae = de ? o : ue;
      if ((z.keepDefaultValues || (o = Z), !z.keepValues)) {
        if (z.keepDirtyValues) {
          const je = new Set([...c.mount, ...Object.keys(Wa(o, a))]);
          for (const Fe of Array.from(je))
            ge(n.dirtyFields, Fe) ? mt(ae, Fe, ge(a, Fe)) : le(Fe, ge(ae, Fe));
        } else {
          if (Um && Bt(N))
            for (const je of c.mount) {
              const Fe = ge(i, je);
              if (Fe && Fe._f) {
                const lt = Array.isArray(Fe._f.refs)
                  ? Fe._f.refs[0]
                  : Fe._f.ref;
                if (Bc(lt)) {
                  const yt = lt.closest("form");
                  if (yt) {
                    yt.reset();
                    break;
                  }
                }
              }
            }
          i = {};
        }
        (a = t.shouldUnregister ? (z.keepDefaultValues ? Rn(o) : {}) : Rn(ae)),
          g.array.next({ values: { ...ae } }),
          g.values.next({ values: { ...ae } });
      }
      (c = {
        mount: z.keepDirtyValues ? c.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (l.mount = !p.isValid || !!z.keepIsValid || !!z.keepDirtyValues),
        (l.watch = !!t.shouldUnregister),
        g.state.next({
          submitCount: z.keepSubmitCount ? n.submitCount : 0,
          isDirty: de
            ? !1
            : z.keepDirty
            ? n.isDirty
            : !!(z.keepDefaultValues && !es(N, o)),
          isSubmitted: z.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: de
            ? {}
            : z.keepDirtyValues
            ? z.keepDefaultValues && a
              ? Wa(o, a)
              : n.dirtyFields
            : z.keepDefaultValues && N
            ? Wa(o, N)
            : z.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: z.keepTouched ? n.touchedFields : {},
          errors: z.keepErrors ? n.errors : {},
          isSubmitSuccessful: z.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    ct = (N, z) => We(Vr(N) ? N(a) : N, z);
  return {
    control: {
      register: Te,
      unregister: ze,
      getFieldState: q,
      handleSubmit: nt,
      setError: Me,
      _executeSchema: F,
      _getWatch: ie,
      _getDirty: X,
      _updateValid: E,
      _removeUnmounted: ce,
      _updateFieldArray: P,
      _updateDisabledField: be,
      _getFieldArray: he,
      _reset: We,
      _resetDefaultValues: () =>
        Vr(t.defaultValues) &&
        t.defaultValues().then((N) => {
          ct(N, t.resetOptions), g.state.next({ isLoading: !1 });
        }),
      _updateFormState: (N) => {
        n = { ...n, ...N };
      },
      _disableForm: Xe,
      _subjects: g,
      _proxyFormState: p,
      _setErrors: j,
      get _fields() {
        return i;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return l;
      },
      set _state(N) {
        l = N;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return c;
      },
      set _names(N) {
        c = N;
      },
      get _formState() {
        return n;
      },
      set _formState(N) {
        n = N;
      },
      get _options() {
        return t;
      },
      set _options(N) {
        t = { ...t, ...N };
      },
    },
    trigger: ee,
    register: Te,
    handleSubmit: nt,
    watch: Ie,
    setValue: le,
    getValues: O,
    reset: ct,
    resetField: _e,
    clearErrors: Ne,
    unregister: ze,
    setError: Me,
    setFocus: (N, z = {}) => {
      const Z = ge(i, N),
        ue = Z && Z._f;
      if (ue) {
        const de = ue.refs ? ue.refs[0] : ue.ref;
        de.focus &&
          (de.focus(), z.shouldSelect && Vr(de.select) && de.select());
      }
    },
    getFieldState: q,
  };
}
function WE(e = {}) {
  const t = rt.useRef(void 0),
    n = rt.useRef(void 0),
    [i, o] = rt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Vr(e.defaultValues),
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
      defaultValues: Vr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ..._M(e), formState: i });
  const a = t.current.control;
  return (
    (a._options = e),
    Wm({
      subject: a._subjects.state,
      next: (l) => {
        OE(l, a._proxyFormState, a._updateFormState, !0) &&
          o({ ...a._formState });
      },
    }),
    rt.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]),
    rt.useEffect(() => {
      if (a._proxyFormState.isDirty) {
        const l = a._getDirty();
        l !== i.isDirty && a._subjects.state.next({ isDirty: l });
      }
    }, [a, i.isDirty]),
    rt.useEffect(() => {
      e.values && !es(e.values, n.current)
        ? (a._reset(e.values, a._options.resetOptions),
          (n.current = e.values),
          o((l) => ({ ...l })))
        : a._resetDefaultValues();
    }, [e.values, a]),
    rt.useEffect(() => {
      e.errors && a._setErrors(e.errors);
    }, [e.errors, a]),
    rt.useEffect(() => {
      a._state.mount || (a._updateValid(), (a._state.mount = !0)),
        a._state.watch &&
          ((a._state.watch = !1), a._subjects.state.next({ ...a._formState })),
        a._removeUnmounted();
    }),
    rt.useEffect(() => {
      e.shouldUnregister && a._subjects.values.next({ values: a._getWatch() });
    }, [e.shouldUnregister, a]),
    (t.current.formState = DE(i, a)),
    t.current
  );
}
const n0 = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const i = ge(n, t);
      e.setCustomValidity((i && i.message) || ""), e.reportValidity();
    }
  },
  HE = (e, t) => {
    for (const n in t.fields) {
      const i = t.fields[n];
      i && i.ref && "reportValidity" in i.ref
        ? n0(i.ref, n, e)
        : i.refs && i.refs.forEach((o) => n0(o, n, e));
    }
  },
  CM = (e, t) => {
    t.shouldUseNativeValidation && HE(e, t);
    const n = {};
    for (const i in e) {
      const o = ge(t.fields, i),
        a = Object.assign(e[i] || {}, { ref: o && o.ref });
      if (kM(t.names || Object.keys(e), i)) {
        const l = Object.assign({}, ge(n, i));
        mt(l, "root", a), mt(n, i, l);
      } else mt(n, i, a);
    }
    return n;
  },
  kM = (e, t) => e.some((n) => n.startsWith(t + "."));
var TM = function (e, t) {
    for (var n = {}; e.length; ) {
      var i = e[0],
        o = i.code,
        a = i.message,
        l = i.path.join(".");
      if (!n[l])
        if ("unionErrors" in i) {
          var c = i.unionErrors[0].errors[0];
          n[l] = { message: c.message, type: c.code };
        } else n[l] = { message: a, type: o };
      if (
        ("unionErrors" in i &&
          i.unionErrors.forEach(function (p) {
            return p.errors.forEach(function (g) {
              return e.push(g);
            });
          }),
        t)
      ) {
        var f = n[l].types,
          h = f && f[i.code];
        n[l] = FE(l, t, n, o, h ? [].concat(h, i.message) : i.message);
      }
      e.shift();
    }
    return n;
  },
  ZE = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (i, o, a) {
        try {
          return Promise.resolve(
            (function (l, c) {
              try {
                var f = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](i, t)
                ).then(function (h) {
                  return (
                    a.shouldUseNativeValidation && HE({}, a),
                    { errors: {}, values: n.raw ? i : h }
                  );
                });
              } catch (h) {
                return c(h);
              }
              return f && f.then ? f.then(void 0, c) : f;
            })(0, function (l) {
              if (
                (function (c) {
                  return Array.isArray(c == null ? void 0 : c.errors);
                })(l)
              )
                return {
                  values: {},
                  errors: CM(
                    TM(
                      l.errors,
                      !a.shouldUseNativeValidation && a.criteriaMode === "all"
                    ),
                    a
                  ),
                };
              throw l;
            })
          );
        } catch (l) {
          return Promise.reject(l);
        }
      }
    );
  };
function KE(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: PM } = Object.prototype,
  { getPrototypeOf: Km } = Object,
  yd = ((e) => (t) => {
    const n = PM.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Pr = (e) => ((e = e.toLowerCase()), (t) => yd(t) === e),
  vd = (e) => (t) => typeof t === e,
  { isArray: ta } = Array,
  gl = vd("undefined");
function RM(e) {
  return (
    e !== null &&
    !gl(e) &&
    e.constructor !== null &&
    !gl(e.constructor) &&
    $n(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const GE = Pr("ArrayBuffer");
function AM(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && GE(e.buffer)),
    t
  );
}
const NM = vd("string"),
  $n = vd("function"),
  qE = vd("number"),
  xd = (e) => e !== null && typeof e == "object",
  jM = (e) => e === !0 || e === !1,
  Ec = (e) => {
    if (yd(e) !== "object") return !1;
    const t = Km(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  DM = Pr("Date"),
  OM = Pr("File"),
  LM = Pr("Blob"),
  MM = Pr("FileList"),
  FM = (e) => xd(e) && $n(e.pipe),
  IM = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        ($n(e.append) &&
          ((t = yd(e)) === "formdata" ||
            (t === "object" &&
              $n(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  VM = Pr("URLSearchParams"),
  [BM, zM, UM, $M] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Pr
  ),
  WM = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, o;
  if ((typeof e != "object" && (e = [e]), ta(e)))
    for (i = 0, o = e.length; i < o; i++) t.call(null, e[i], i, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = a.length;
    let c;
    for (i = 0; i < l; i++) (c = a[i]), t.call(null, e[c], c, e);
  }
}
function YE(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let i = n.length,
    o;
  for (; i-- > 0; ) if (((o = n[i]), t === o.toLowerCase())) return o;
  return null;
}
const Ms =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  XE = (e) => !gl(e) && e !== Ms;
function Ep() {
  const { caseless: e } = (XE(this) && this) || {},
    t = {},
    n = (i, o) => {
      const a = (e && YE(t, o)) || o;
      Ec(t[a]) && Ec(i)
        ? (t[a] = Ep(t[a], i))
        : Ec(i)
        ? (t[a] = Ep({}, i))
        : ta(i)
        ? (t[a] = i.slice())
        : (t[a] = i);
    };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Wl(arguments[i], n);
  return t;
}
const HM = (e, t, n, { allOwnKeys: i } = {}) => (
    Wl(
      t,
      (o, a) => {
        n && $n(o) ? (e[a] = KE(o, n)) : (e[a] = o);
      },
      { allOwnKeys: i }
    ),
    e
  ),
  ZM = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  KM = (e, t, n, i) => {
    (e.prototype = Object.create(t.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  GM = (e, t, n, i) => {
    let o, a, l;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
        (l = o[a]), (!i || i(l, e, t)) && !c[l] && ((t[l] = e[l]), (c[l] = !0));
      e = n !== !1 && Km(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  qM = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const i = e.indexOf(t, n);
    return i !== -1 && i === n;
  },
  YM = (e) => {
    if (!e) return null;
    if (ta(e)) return e;
    let t = e.length;
    if (!qE(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  XM = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Km(Uint8Array)),
  QM = (e, t) => {
    const i = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = i.next()) && !o.done; ) {
      const a = o.value;
      t.call(e, a[0], a[1]);
    }
  },
  JM = (e, t) => {
    let n;
    const i = [];
    for (; (n = e.exec(t)) !== null; ) i.push(n);
    return i;
  },
  e2 = Pr("HTMLFormElement"),
  t2 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, i, o) {
      return i.toUpperCase() + o;
    }),
  r0 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  n2 = Pr("RegExp"),
  QE = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      i = {};
    Wl(n, (o, a) => {
      let l;
      (l = t(o, a, e)) !== !1 && (i[a] = l || o);
    }),
      Object.defineProperties(e, i);
  },
  r2 = (e) => {
    QE(e, (t, n) => {
      if ($n(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const i = e[n];
      if ($n(i)) {
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
  i2 = (e, t) => {
    const n = {},
      i = (o) => {
        o.forEach((a) => {
          n[a] = !0;
        });
      };
    return ta(e) ? i(e) : i(String(e).split(t)), n;
  },
  s2 = () => {},
  o2 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Uh = "abcdefghijklmnopqrstuvwxyz",
  i0 = "0123456789",
  JE = { DIGIT: i0, ALPHA: Uh, ALPHA_DIGIT: Uh + Uh.toUpperCase() + i0 },
  a2 = (e = 16, t = JE.ALPHA_DIGIT) => {
    let n = "";
    const { length: i } = t;
    for (; e--; ) n += t[(Math.random() * i) | 0];
    return n;
  };
function l2(e) {
  return !!(
    e &&
    $n(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const u2 = (e) => {
    const t = new Array(10),
      n = (i, o) => {
        if (xd(i)) {
          if (t.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            t[o] = i;
            const a = ta(i) ? [] : {};
            return (
              Wl(i, (l, c) => {
                const f = n(l, o + 1);
                !gl(f) && (a[c] = f);
              }),
              (t[o] = void 0),
              a
            );
          }
        }
        return i;
      };
    return n(e, 0);
  },
  c2 = Pr("AsyncFunction"),
  d2 = (e) => e && (xd(e) || $n(e)) && $n(e.then) && $n(e.catch),
  e1 = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, i) => (
          Ms.addEventListener(
            "message",
            ({ source: o, data: a }) => {
              o === Ms && a === n && i.length && i.shift()();
            },
            !1
          ),
          (o) => {
            i.push(o), Ms.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    $n(Ms.postMessage)
  ),
  f2 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ms)
      : (typeof process < "u" && process.nextTick) || e1,
  G = {
    isArray: ta,
    isArrayBuffer: GE,
    isBuffer: RM,
    isFormData: IM,
    isArrayBufferView: AM,
    isString: NM,
    isNumber: qE,
    isBoolean: jM,
    isObject: xd,
    isPlainObject: Ec,
    isReadableStream: BM,
    isRequest: zM,
    isResponse: UM,
    isHeaders: $M,
    isUndefined: gl,
    isDate: DM,
    isFile: OM,
    isBlob: LM,
    isRegExp: n2,
    isFunction: $n,
    isStream: FM,
    isURLSearchParams: VM,
    isTypedArray: XM,
    isFileList: MM,
    forEach: Wl,
    merge: Ep,
    extend: HM,
    trim: WM,
    stripBOM: ZM,
    inherits: KM,
    toFlatObject: GM,
    kindOf: yd,
    kindOfTest: Pr,
    endsWith: qM,
    toArray: YM,
    forEachEntry: QM,
    matchAll: JM,
    isHTMLForm: e2,
    hasOwnProperty: r0,
    hasOwnProp: r0,
    reduceDescriptors: QE,
    freezeMethods: r2,
    toObjectSet: i2,
    toCamelCase: t2,
    noop: s2,
    toFiniteNumber: o2,
    findKey: YE,
    global: Ms,
    isContextDefined: XE,
    ALPHABET: JE,
    generateString: a2,
    isSpecCompliantForm: l2,
    toJSONObject: u2,
    isAsyncFn: c2,
    isThenable: d2,
    setImmediate: e1,
    asap: f2,
  };
function qe(e, t, n, i, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    i && (this.request = i),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
G.inherits(qe, Error, {
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
      config: G.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const t1 = qe.prototype,
  n1 = {};
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
  n1[e] = { value: e };
});
Object.defineProperties(qe, n1);
Object.defineProperty(t1, "isAxiosError", { value: !0 });
qe.from = (e, t, n, i, o, a) => {
  const l = Object.create(t1);
  return (
    G.toFlatObject(
      e,
      l,
      function (f) {
        return f !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    qe.call(l, e.message, t, n, i, o),
    (l.cause = e),
    (l.name = e.name),
    a && Object.assign(l, a),
    l
  );
};
const h2 = null;
function _p(e) {
  return G.isPlainObject(e) || G.isArray(e);
}
function r1(e) {
  return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function s0(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, a) {
          return (o = r1(o)), !n && a ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function p2(e) {
  return G.isArray(e) && !e.some(_p);
}
const m2 = G.toFlatObject(G, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function wd(e, t, n) {
  if (!G.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = G.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, E) {
        return !G.isUndefined(E[S]);
      }
    ));
  const i = n.metaTokens,
    o = n.visitor || p,
    a = n.dots,
    l = n.indexes,
    f = (n.Blob || (typeof Blob < "u" && Blob)) && G.isSpecCompliantForm(t);
  if (!G.isFunction(o)) throw new TypeError("visitor must be a function");
  function h(x) {
    if (x === null) return "";
    if (G.isDate(x)) return x.toISOString();
    if (!f && G.isBlob(x))
      throw new qe("Blob is not supported. Use a Buffer instead.");
    return G.isArrayBuffer(x) || G.isTypedArray(x)
      ? f && typeof Blob == "function"
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function p(x, S, E) {
    let b = x;
    if (x && !E && typeof x == "object") {
      if (G.endsWith(S, "{}"))
        (S = i ? S : S.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (G.isArray(x) && p2(x)) ||
        ((G.isFileList(x) || G.endsWith(S, "[]")) && (b = G.toArray(x)))
      )
        return (
          (S = r1(S)),
          b.forEach(function (R, j) {
            !(G.isUndefined(R) || R === null) &&
              t.append(
                l === !0 ? s0([S], j, a) : l === null ? S : S + "[]",
                h(R)
              );
          }),
          !1
        );
    }
    return _p(x) ? !0 : (t.append(s0(E, S, a), h(x)), !1);
  }
  const g = [],
    y = Object.assign(m2, {
      defaultVisitor: p,
      convertValue: h,
      isVisitable: _p,
    });
  function w(x, S) {
    if (!G.isUndefined(x)) {
      if (g.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      g.push(x),
        G.forEach(x, function (b, P) {
          (!(G.isUndefined(b) || b === null) &&
            o.call(t, b, G.isString(P) ? P.trim() : P, S, y)) === !0 &&
            w(b, S ? S.concat(P) : [P]);
        }),
        g.pop();
    }
  }
  if (!G.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function o0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return t[i];
  });
}
function Gm(e, t) {
  (this._pairs = []), e && wd(e, this, t);
}
const i1 = Gm.prototype;
i1.append = function (t, n) {
  this._pairs.push([t, n]);
};
i1.toString = function (t) {
  const n = t
    ? function (i) {
        return t.call(this, i, o0);
      }
    : o0;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function g2(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function s1(e, t, n) {
  if (!t) return e;
  const i = (n && n.encode) || g2;
  G.isFunction(n) && (n = { serialize: n });
  const o = n && n.serialize;
  let a;
  if (
    (o
      ? (a = o(t, n))
      : (a = G.isURLSearchParams(t) ? t.toString() : new Gm(t, n).toString(i)),
    a)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a);
  }
  return e;
}
class a0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, i) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
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
    G.forEach(this.handlers, function (i) {
      i !== null && t(i);
    });
  }
}
const o1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  y2 = typeof URLSearchParams < "u" ? URLSearchParams : Gm,
  v2 = typeof FormData < "u" ? FormData : null,
  x2 = typeof Blob < "u" ? Blob : null,
  w2 = {
    isBrowser: !0,
    classes: { URLSearchParams: y2, FormData: v2, Blob: x2 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  qm = typeof window < "u" && typeof document < "u",
  Cp = (typeof navigator == "object" && navigator) || void 0,
  S2 =
    qm &&
    (!Cp || ["ReactNative", "NativeScript", "NS"].indexOf(Cp.product) < 0),
  b2 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  E2 = (qm && window.location.href) || "http://localhost",
  _2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: qm,
        hasStandardBrowserEnv: S2,
        hasStandardBrowserWebWorkerEnv: b2,
        navigator: Cp,
        origin: E2,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hn = { ..._2, ...w2 };
function C2(e, t) {
  return wd(
    e,
    new hn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, i, o, a) {
          return hn.isNode && G.isBuffer(n)
            ? (this.append(i, n.toString("base64")), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function k2(e) {
  return G.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function T2(e) {
  const t = {},
    n = Object.keys(e);
  let i;
  const o = n.length;
  let a;
  for (i = 0; i < o; i++) (a = n[i]), (t[a] = e[a]);
  return t;
}
function a1(e) {
  function t(n, i, o, a) {
    let l = n[a++];
    if (l === "__proto__") return !0;
    const c = Number.isFinite(+l),
      f = a >= n.length;
    return (
      (l = !l && G.isArray(o) ? o.length : l),
      f
        ? (G.hasOwnProp(o, l) ? (o[l] = [o[l], i]) : (o[l] = i), !c)
        : ((!o[l] || !G.isObject(o[l])) && (o[l] = []),
          t(n, i, o[l], a) && G.isArray(o[l]) && (o[l] = T2(o[l])),
          !c)
    );
  }
  if (G.isFormData(e) && G.isFunction(e.entries)) {
    const n = {};
    return (
      G.forEachEntry(e, (i, o) => {
        t(k2(i), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function P2(e, t, n) {
  if (G.isString(e))
    try {
      return (t || JSON.parse)(e), G.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (0, JSON.stringify)(e);
}
const Hl = {
  transitional: o1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const i = n.getContentType() || "",
        o = i.indexOf("application/json") > -1,
        a = G.isObject(t);
      if ((a && G.isHTMLForm(t) && (t = new FormData(t)), G.isFormData(t)))
        return o ? JSON.stringify(a1(t)) : t;
      if (
        G.isArrayBuffer(t) ||
        G.isBuffer(t) ||
        G.isStream(t) ||
        G.isFile(t) ||
        G.isBlob(t) ||
        G.isReadableStream(t)
      )
        return t;
      if (G.isArrayBufferView(t)) return t.buffer;
      if (G.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let c;
      if (a) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return C2(t, this.formSerializer).toString();
        if ((c = G.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return wd(
            c ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), P2(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Hl.transitional,
        i = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (G.isResponse(t) || G.isReadableStream(t)) return t;
      if (t && G.isString(t) && ((i && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (l)
            throw c.name === "SyntaxError"
              ? qe.from(c, qe.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
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
  env: { FormData: hn.classes.FormData, Blob: hn.classes.Blob },
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
G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hl.headers[e] = {};
});
const R2 = G.toObjectSet([
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
  A2 = (e) => {
    const t = {};
    let n, i, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (o = l.indexOf(":")),
              (n = l.substring(0, o).trim().toLowerCase()),
              (i = l.substring(o + 1).trim()),
              !(!n || (t[n] && R2[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(i)
                    : (t[n] = [i])
                  : (t[n] = t[n] ? t[n] + ", " + i : i));
          }),
      t
    );
  },
  l0 = Symbol("internals");
function Za(e) {
  return e && String(e).trim().toLowerCase();
}
function _c(e) {
  return e === !1 || e == null ? e : G.isArray(e) ? e.map(_c) : String(e);
}
function N2(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = n.exec(e)); ) t[i[1]] = i[2];
  return t;
}
const j2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $h(e, t, n, i, o) {
  if (G.isFunction(i)) return i.call(this, t, n);
  if ((o && (t = n), !!G.isString(t))) {
    if (G.isString(i)) return t.indexOf(i) !== -1;
    if (G.isRegExp(i)) return i.test(t);
  }
}
function D2(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, i) => n.toUpperCase() + i);
}
function O2(e, t) {
  const n = G.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + n, {
      value: function (o, a, l) {
        return this[i].call(this, t, o, a, l);
      },
      configurable: !0,
    });
  });
}
class Nn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, i) {
    const o = this;
    function a(c, f, h) {
      const p = Za(f);
      if (!p) throw new Error("header name must be a non-empty string");
      const g = G.findKey(o, p);
      (!g || o[g] === void 0 || h === !0 || (h === void 0 && o[g] !== !1)) &&
        (o[g || f] = _c(c));
    }
    const l = (c, f) => G.forEach(c, (h, p) => a(h, p, f));
    if (G.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (G.isString(t) && (t = t.trim()) && !j2(t)) l(A2(t), n);
    else if (G.isHeaders(t)) for (const [c, f] of t.entries()) a(f, c, i);
    else t != null && a(n, t, i);
    return this;
  }
  get(t, n) {
    if (((t = Za(t)), t)) {
      const i = G.findKey(this, t);
      if (i) {
        const o = this[i];
        if (!n) return o;
        if (n === !0) return N2(o);
        if (G.isFunction(n)) return n.call(this, o, i);
        if (G.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Za(t)), t)) {
      const i = G.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!n || $h(this, this[i], i, n)));
    }
    return !1;
  }
  delete(t, n) {
    const i = this;
    let o = !1;
    function a(l) {
      if (((l = Za(l)), l)) {
        const c = G.findKey(i, l);
        c && (!n || $h(i, i[c], c, n)) && (delete i[c], (o = !0));
      }
    }
    return G.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let i = n.length,
      o = !1;
    for (; i--; ) {
      const a = n[i];
      (!t || $h(this, this[a], a, t, !0)) && (delete this[a], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      i = {};
    return (
      G.forEach(this, (o, a) => {
        const l = G.findKey(i, a);
        if (l) {
          (n[l] = _c(o)), delete n[a];
          return;
        }
        const c = t ? D2(a) : String(a).trim();
        c !== a && delete n[a], (n[c] = _c(o)), (i[c] = !0);
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
      G.forEach(this, (i, o) => {
        i != null && i !== !1 && (n[o] = t && G.isArray(i) ? i.join(", ") : i);
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
    const i = new this(t);
    return n.forEach((o) => i.set(o)), i;
  }
  static accessor(t) {
    const i = (this[l0] = this[l0] = { accessors: {} }).accessors,
      o = this.prototype;
    function a(l) {
      const c = Za(l);
      i[c] || (O2(o, l), (i[c] = !0));
    }
    return G.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Nn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
G.reduceDescriptors(Nn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[n] = i;
    },
  };
});
G.freezeMethods(Nn);
function Wh(e, t) {
  const n = this || Hl,
    i = t || n,
    o = Nn.from(i.headers);
  let a = i.data;
  return (
    G.forEach(e, function (c) {
      a = c.call(n, a, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    a
  );
}
function l1(e) {
  return !!(e && e.__CANCEL__);
}
function na(e, t, n) {
  qe.call(this, e ?? "canceled", qe.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
G.inherits(na, qe, { __CANCEL__: !0 });
function u1(e, t, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status)
    ? e(n)
    : t(
        new qe(
          "Request failed with status code " + n.status,
          [qe.ERR_BAD_REQUEST, qe.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function L2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function M2(e, t) {
  e = e || 10;
  const n = new Array(e),
    i = new Array(e);
  let o = 0,
    a = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const h = Date.now(),
        p = i[a];
      l || (l = h), (n[o] = f), (i[o] = h);
      let g = a,
        y = 0;
      for (; g !== o; ) (y += n[g++]), (g = g % e);
      if (((o = (o + 1) % e), o === a && (a = (a + 1) % e), h - l < t)) return;
      const w = p && h - p;
      return w ? Math.round((y * 1e3) / w) : void 0;
    }
  );
}
function F2(e, t) {
  let n = 0,
    i = 1e3 / t,
    o,
    a;
  const l = (h, p = Date.now()) => {
    (n = p), (o = null), a && (clearTimeout(a), (a = null)), e.apply(null, h);
  };
  return [
    (...h) => {
      const p = Date.now(),
        g = p - n;
      g >= i
        ? l(h, p)
        : ((o = h),
          a ||
            (a = setTimeout(() => {
              (a = null), l(o);
            }, i - g)));
    },
    () => o && l(o),
  ];
}
const $c = (e, t, n = 3) => {
    let i = 0;
    const o = M2(50, 250);
    return F2((a) => {
      const l = a.loaded,
        c = a.lengthComputable ? a.total : void 0,
        f = l - i,
        h = o(f),
        p = l <= c;
      i = l;
      const g = {
        loaded: l,
        total: c,
        progress: c ? l / c : void 0,
        bytes: f,
        rate: h || void 0,
        estimated: h && c && p ? (c - l) / h : void 0,
        event: a,
        lengthComputable: c != null,
        [t ? "download" : "upload"]: !0,
      };
      e(g);
    }, n);
  },
  u0 = (e, t) => {
    const n = e != null;
    return [(i) => t[0]({ lengthComputable: n, total: e, loaded: i }), t[1]];
  },
  c0 =
    (e) =>
    (...t) =>
      G.asap(() => e(...t)),
  I2 = hn.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, hn.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(hn.origin),
        hn.navigator && /(msie|trident)/i.test(hn.navigator.userAgent)
      )
    : () => !0,
  V2 = hn.hasStandardBrowserEnv
    ? {
        write(e, t, n, i, o, a) {
          const l = [e + "=" + encodeURIComponent(t)];
          G.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            G.isString(i) && l.push("path=" + i),
            G.isString(o) && l.push("domain=" + o),
            a === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
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
function B2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function z2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function c1(e, t) {
  return e && !B2(t) ? z2(e, t) : t;
}
const d0 = (e) => (e instanceof Nn ? { ...e } : e);
function Ws(e, t) {
  t = t || {};
  const n = {};
  function i(h, p, g, y) {
    return G.isPlainObject(h) && G.isPlainObject(p)
      ? G.merge.call({ caseless: y }, h, p)
      : G.isPlainObject(p)
      ? G.merge({}, p)
      : G.isArray(p)
      ? p.slice()
      : p;
  }
  function o(h, p, g, y) {
    if (G.isUndefined(p)) {
      if (!G.isUndefined(h)) return i(void 0, h, g, y);
    } else return i(h, p, g, y);
  }
  function a(h, p) {
    if (!G.isUndefined(p)) return i(void 0, p);
  }
  function l(h, p) {
    if (G.isUndefined(p)) {
      if (!G.isUndefined(h)) return i(void 0, h);
    } else return i(void 0, p);
  }
  function c(h, p, g) {
    if (g in t) return i(h, p);
    if (g in e) return i(void 0, h);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: c,
    headers: (h, p, g) => o(d0(h), d0(p), g, !0),
  };
  return (
    G.forEach(Object.keys(Object.assign({}, e, t)), function (p) {
      const g = f[p] || o,
        y = g(e[p], t[p], p);
      (G.isUndefined(y) && g !== c) || (n[p] = y);
    }),
    n
  );
}
const d1 = (e) => {
    const t = Ws({}, e);
    let {
      data: n,
      withXSRFToken: i,
      xsrfHeaderName: o,
      xsrfCookieName: a,
      headers: l,
      auth: c,
    } = t;
    (t.headers = l = Nn.from(l)),
      (t.url = s1(c1(t.baseURL, t.url), e.params, e.paramsSerializer)),
      c &&
        l.set(
          "Authorization",
          "Basic " +
            btoa(
              (c.username || "") +
                ":" +
                (c.password ? unescape(encodeURIComponent(c.password)) : "")
            )
        );
    let f;
    if (G.isFormData(n)) {
      if (hn.hasStandardBrowserEnv || hn.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((f = l.getContentType()) !== !1) {
        const [h, ...p] = f
          ? f
              .split(";")
              .map((g) => g.trim())
              .filter(Boolean)
          : [];
        l.setContentType([h || "multipart/form-data", ...p].join("; "));
      }
    }
    if (
      hn.hasStandardBrowserEnv &&
      (i && G.isFunction(i) && (i = i(t)), i || (i !== !1 && I2(t.url)))
    ) {
      const h = o && a && V2.read(a);
      h && l.set(o, h);
    }
    return t;
  },
  U2 = typeof XMLHttpRequest < "u",
  $2 =
    U2 &&
    function (e) {
      return new Promise(function (n, i) {
        const o = d1(e);
        let a = o.data;
        const l = Nn.from(o.headers).normalize();
        let { responseType: c, onUploadProgress: f, onDownloadProgress: h } = o,
          p,
          g,
          y,
          w,
          x;
        function S() {
          w && w(),
            x && x(),
            o.cancelToken && o.cancelToken.unsubscribe(p),
            o.signal && o.signal.removeEventListener("abort", p);
        }
        let E = new XMLHttpRequest();
        E.open(o.method.toUpperCase(), o.url, !0), (E.timeout = o.timeout);
        function b() {
          if (!E) return;
          const R = Nn.from(
              "getAllResponseHeaders" in E && E.getAllResponseHeaders()
            ),
            T = {
              data:
                !c || c === "text" || c === "json"
                  ? E.responseText
                  : E.response,
              status: E.status,
              statusText: E.statusText,
              headers: R,
              config: e,
              request: E,
            };
          u1(
            function (V) {
              n(V), S();
            },
            function (V) {
              i(V), S();
            },
            T
          ),
            (E = null);
        }
        "onloadend" in E
          ? (E.onloadend = b)
          : (E.onreadystatechange = function () {
              !E ||
                E.readyState !== 4 ||
                (E.status === 0 &&
                  !(E.responseURL && E.responseURL.indexOf("file:") === 0)) ||
                setTimeout(b);
            }),
          (E.onabort = function () {
            E &&
              (i(new qe("Request aborted", qe.ECONNABORTED, e, E)), (E = null));
          }),
          (E.onerror = function () {
            i(new qe("Network Error", qe.ERR_NETWORK, e, E)), (E = null);
          }),
          (E.ontimeout = function () {
            let j = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const T = o.transitional || o1;
            o.timeoutErrorMessage && (j = o.timeoutErrorMessage),
              i(
                new qe(
                  j,
                  T.clarifyTimeoutError ? qe.ETIMEDOUT : qe.ECONNABORTED,
                  e,
                  E
                )
              ),
              (E = null);
          }),
          a === void 0 && l.setContentType(null),
          "setRequestHeader" in E &&
            G.forEach(l.toJSON(), function (j, T) {
              E.setRequestHeader(T, j);
            }),
          G.isUndefined(o.withCredentials) ||
            (E.withCredentials = !!o.withCredentials),
          c && c !== "json" && (E.responseType = o.responseType),
          h && (([y, x] = $c(h, !0)), E.addEventListener("progress", y)),
          f &&
            E.upload &&
            (([g, w] = $c(f)),
            E.upload.addEventListener("progress", g),
            E.upload.addEventListener("loadend", w)),
          (o.cancelToken || o.signal) &&
            ((p = (R) => {
              E &&
                (i(!R || R.type ? new na(null, e, E) : R),
                E.abort(),
                (E = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(p),
            o.signal &&
              (o.signal.aborted ? p() : o.signal.addEventListener("abort", p)));
        const P = L2(o.url);
        if (P && hn.protocols.indexOf(P) === -1) {
          i(new qe("Unsupported protocol " + P + ":", qe.ERR_BAD_REQUEST, e));
          return;
        }
        E.send(a || null);
      });
    },
  W2 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let i = new AbortController(),
        o;
      const a = function (h) {
        if (!o) {
          (o = !0), c();
          const p = h instanceof Error ? h : this.reason;
          i.abort(
            p instanceof qe ? p : new na(p instanceof Error ? p.message : p)
          );
        }
      };
      let l =
        t &&
        setTimeout(() => {
          (l = null), a(new qe(`timeout ${t} of ms exceeded`, qe.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (l && clearTimeout(l),
          (l = null),
          e.forEach((h) => {
            h.unsubscribe
              ? h.unsubscribe(a)
              : h.removeEventListener("abort", a);
          }),
          (e = null));
      };
      e.forEach((h) => h.addEventListener("abort", a));
      const { signal: f } = i;
      return (f.unsubscribe = () => G.asap(c)), f;
    }
  },
  H2 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let i = 0,
      o;
    for (; i < n; ) (o = i + t), yield e.slice(i, o), (i = o);
  },
  Z2 = async function* (e, t) {
    for await (const n of K2(e)) yield* H2(n, t);
  },
  K2 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: i } = await t.read();
        if (n) break;
        yield i;
      }
    } finally {
      await t.cancel();
    }
  },
  f0 = (e, t, n, i) => {
    const o = Z2(e, t);
    let a = 0,
      l,
      c = (f) => {
        l || ((l = !0), i && i(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: h, value: p } = await o.next();
            if (h) {
              c(), f.close();
              return;
            }
            let g = p.byteLength;
            if (n) {
              let y = (a += g);
              n(y);
            }
            f.enqueue(new Uint8Array(p));
          } catch (h) {
            throw (c(h), h);
          }
        },
        cancel(f) {
          return c(f), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Sd =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  f1 = Sd && typeof ReadableStream == "function",
  G2 =
    Sd &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  h1 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  q2 =
    f1 &&
    h1(() => {
      let e = !1;
      const t = new Request(hn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  h0 = 64 * 1024,
  kp = f1 && h1(() => G.isReadableStream(new Response("").body)),
  Wc = { stream: kp && ((e) => e.body) };
Sd &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Wc[t] &&
        (Wc[t] = G.isFunction(e[t])
          ? (n) => n[t]()
          : (n, i) => {
              throw new qe(
                `Response type '${t}' is not supported`,
                qe.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const Y2 = async (e) => {
    if (e == null) return 0;
    if (G.isBlob(e)) return e.size;
    if (G.isSpecCompliantForm(e))
      return (
        await new Request(hn.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (G.isArrayBufferView(e) || G.isArrayBuffer(e)) return e.byteLength;
    if ((G.isURLSearchParams(e) && (e = e + ""), G.isString(e)))
      return (await G2(e)).byteLength;
  },
  X2 = async (e, t) => {
    const n = G.toFiniteNumber(e.getContentLength());
    return n ?? Y2(t);
  },
  Q2 =
    Sd &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: i,
        signal: o,
        cancelToken: a,
        timeout: l,
        onDownloadProgress: c,
        onUploadProgress: f,
        responseType: h,
        headers: p,
        withCredentials: g = "same-origin",
        fetchOptions: y,
      } = d1(e);
      h = h ? (h + "").toLowerCase() : "text";
      let w = W2([o, a && a.toAbortSignal()], l),
        x;
      const S =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let E;
      try {
        if (
          f &&
          q2 &&
          n !== "get" &&
          n !== "head" &&
          (E = await X2(p, i)) !== 0
        ) {
          let T = new Request(t, { method: "POST", body: i, duplex: "half" }),
            M;
          if (
            (G.isFormData(i) &&
              (M = T.headers.get("content-type")) &&
              p.setContentType(M),
            T.body)
          ) {
            const [V, F] = u0(E, $c(c0(f)));
            i = f0(T.body, h0, V, F);
          }
        }
        G.isString(g) || (g = g ? "include" : "omit");
        const b = "credentials" in Request.prototype;
        x = new Request(t, {
          ...y,
          signal: w,
          method: n.toUpperCase(),
          headers: p.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: b ? g : void 0,
        });
        let P = await fetch(x);
        const R = kp && (h === "stream" || h === "response");
        if (kp && (c || (R && S))) {
          const T = {};
          ["status", "statusText", "headers"].forEach((Y) => {
            T[Y] = P[Y];
          });
          const M = G.toFiniteNumber(P.headers.get("content-length")),
            [V, F] = (c && u0(M, $c(c0(c), !0))) || [];
          P = new Response(
            f0(P.body, h0, V, () => {
              F && F(), S && S();
            }),
            T
          );
        }
        h = h || "text";
        let j = await Wc[G.findKey(Wc, h) || "text"](P, e);
        return (
          !R && S && S(),
          await new Promise((T, M) => {
            u1(T, M, {
              data: j,
              headers: Nn.from(P.headers),
              status: P.status,
              statusText: P.statusText,
              config: e,
              request: x,
            });
          })
        );
      } catch (b) {
        throw (
          (S && S(),
          b && b.name === "TypeError" && /fetch/i.test(b.message)
            ? Object.assign(new qe("Network Error", qe.ERR_NETWORK, e, x), {
                cause: b.cause || b,
              })
            : qe.from(b, b && b.code, e, x))
        );
      }
    }),
  Tp = { http: h2, xhr: $2, fetch: Q2 };
G.forEach(Tp, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const p0 = (e) => `- ${e}`,
  J2 = (e) => G.isFunction(e) || e === null || e === !1,
  p1 = {
    getAdapter: (e) => {
      e = G.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, i;
      const o = {};
      for (let a = 0; a < t; a++) {
        n = e[a];
        let l;
        if (
          ((i = n),
          !J2(n) && ((i = Tp[(l = String(n)).toLowerCase()]), i === void 0))
        )
          throw new qe(`Unknown adapter '${l}'`);
        if (i) break;
        o[l || "#" + a] = i;
      }
      if (!i) {
        const a = Object.entries(o).map(
          ([c, f]) =>
            `adapter ${c} ` +
            (f === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? a.length > 1
            ? `since :
` +
              a.map(p0).join(`
`)
            : " " + p0(a[0])
          : "as no adapter specified";
        throw new qe(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: Tp,
  };
function Hh(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new na(null, e);
}
function m0(e) {
  return (
    Hh(e),
    (e.headers = Nn.from(e.headers)),
    (e.data = Wh.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    p1
      .getAdapter(e.adapter || Hl.adapter)(e)
      .then(
        function (i) {
          return (
            Hh(e),
            (i.data = Wh.call(e, e.transformResponse, i)),
            (i.headers = Nn.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            l1(i) ||
              (Hh(e),
              i &&
                i.response &&
                ((i.response.data = Wh.call(
                  e,
                  e.transformResponse,
                  i.response
                )),
                (i.response.headers = Nn.from(i.response.headers)))),
            Promise.reject(i)
          );
        }
      )
  );
}
const m1 = "1.7.9",
  bd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    bd[e] = function (i) {
      return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const g0 = {};
bd.transitional = function (t, n, i) {
  function o(a, l) {
    return (
      "[Axios v" +
      m1 +
      "] Transitional option '" +
      a +
      "'" +
      l +
      (i ? ". " + i : "")
    );
  }
  return (a, l, c) => {
    if (t === !1)
      throw new qe(
        o(l, " has been removed" + (n ? " in " + n : "")),
        qe.ERR_DEPRECATED
      );
    return (
      n &&
        !g0[l] &&
        ((g0[l] = !0),
        console.warn(
          o(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(a, l, c) : !0
    );
  };
};
bd.spelling = function (t) {
  return (n, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function eF(e, t, n) {
  if (typeof e != "object")
    throw new qe("options must be an object", qe.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let o = i.length;
  for (; o-- > 0; ) {
    const a = i[o],
      l = t[a];
    if (l) {
      const c = e[a],
        f = c === void 0 || l(c, a, e);
      if (f !== !0)
        throw new qe("option " + a + " must be " + f, qe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new qe("Unknown option " + a, qe.ERR_BAD_OPTION);
  }
}
const Cc = { assertOptions: eF, validators: bd },
  Fr = Cc.validators;
class Vs {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new a0(), response: new a0() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (i) {
      if (i instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? a &&
              !String(i.stack).endsWith(a.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + a)
            : (i.stack = a);
        } catch {}
      }
      throw i;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ws(this.defaults, n));
    const { transitional: i, paramsSerializer: o, headers: a } = n;
    i !== void 0 &&
      Cc.assertOptions(
        i,
        {
          silentJSONParsing: Fr.transitional(Fr.boolean),
          forcedJSONParsing: Fr.transitional(Fr.boolean),
          clarifyTimeoutError: Fr.transitional(Fr.boolean),
        },
        !1
      ),
      o != null &&
        (G.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Cc.assertOptions(
              o,
              { encode: Fr.function, serialize: Fr.function },
              !0
            )),
      Cc.assertOptions(
        n,
        {
          baseUrl: Fr.spelling("baseURL"),
          withXsrfToken: Fr.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = a && G.merge(a.common, a[n.method]);
    a &&
      G.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (x) => {
          delete a[x];
        }
      ),
      (n.headers = Nn.concat(l, a));
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(n) === !1) ||
        ((f = f && S.synchronous), c.unshift(S.fulfilled, S.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (S) {
      h.push(S.fulfilled, S.rejected);
    });
    let p,
      g = 0,
      y;
    if (!f) {
      const x = [m0.bind(this), void 0];
      for (
        x.unshift.apply(x, c),
          x.push.apply(x, h),
          y = x.length,
          p = Promise.resolve(n);
        g < y;

      )
        p = p.then(x[g++], x[g++]);
      return p;
    }
    y = c.length;
    let w = n;
    for (g = 0; g < y; ) {
      const x = c[g++],
        S = c[g++];
      try {
        w = x(w);
      } catch (E) {
        S.call(this, E);
        break;
      }
    }
    try {
      p = m0.call(this, w);
    } catch (x) {
      return Promise.reject(x);
    }
    for (g = 0, y = h.length; g < y; ) p = p.then(h[g++], h[g++]);
    return p;
  }
  getUri(t) {
    t = Ws(this.defaults, t);
    const n = c1(t.baseURL, t.url);
    return s1(n, t.params, t.paramsSerializer);
  }
}
G.forEach(["delete", "get", "head", "options"], function (t) {
  Vs.prototype[t] = function (n, i) {
    return this.request(
      Ws(i || {}, { method: t, url: n, data: (i || {}).data })
    );
  };
});
G.forEach(["post", "put", "patch"], function (t) {
  function n(i) {
    return function (a, l, c) {
      return this.request(
        Ws(c || {}, {
          method: t,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: a,
          data: l,
        })
      );
    };
  }
  (Vs.prototype[t] = n()), (Vs.prototype[t + "Form"] = n(!0));
});
class Ym {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (a) {
      n = a;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let a = i._listeners.length;
      for (; a-- > 0; ) i._listeners[a](o);
      i._listeners = null;
    }),
      (this.promise.then = (o) => {
        let a;
        const l = new Promise((c) => {
          i.subscribe(c), (a = c);
        }).then(o);
        return (
          (l.cancel = function () {
            i.unsubscribe(a);
          }),
          l
        );
      }),
      t(function (a, l, c) {
        i.reason || ((i.reason = new na(a, l, c)), n(i.reason));
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
      n = (i) => {
        t.abort(i);
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
      token: new Ym(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function tF(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function nF(e) {
  return G.isObject(e) && e.isAxiosError === !0;
}
const Pp = {
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
Object.entries(Pp).forEach(([e, t]) => {
  Pp[t] = e;
});
function g1(e) {
  const t = new Vs(e),
    n = KE(Vs.prototype.request, t);
  return (
    G.extend(n, Vs.prototype, t, { allOwnKeys: !0 }),
    G.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return g1(Ws(e, o));
    }),
    n
  );
}
const Ut = g1(Hl);
Ut.Axios = Vs;
Ut.CanceledError = na;
Ut.CancelToken = Ym;
Ut.isCancel = l1;
Ut.VERSION = m1;
Ut.toFormData = wd;
Ut.AxiosError = qe;
Ut.Cancel = Ut.CanceledError;
Ut.all = function (t) {
  return Promise.all(t);
};
Ut.spread = tF;
Ut.isAxiosError = nF;
Ut.mergeConfig = Ws;
Ut.AxiosHeaders = Nn;
Ut.formToJSON = (e) => a1(G.isHTMLForm(e) ? new FormData(e) : e);
Ut.getAdapter = p1.getAdapter;
Ut.HttpStatusCode = Pp;
Ut.default = Ut;
var at;
(function (e) {
  e.assertEqual = (o) => o;
  function t(o) {}
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (o) => {
      const a = {};
      for (const l of o) a[l] = l;
      return a;
    }),
    (e.getValidEnumValues = (o) => {
      const a = e.objectKeys(o).filter((c) => typeof o[o[c]] != "number"),
        l = {};
      for (const c of a) l[c] = o[c];
      return e.objectValues(l);
    }),
    (e.objectValues = (o) =>
      e.objectKeys(o).map(function (a) {
        return o[a];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (o) => Object.keys(o)
        : (o) => {
            const a = [];
            for (const l in o)
              Object.prototype.hasOwnProperty.call(o, l) && a.push(l);
            return a;
          }),
    (e.find = (o, a) => {
      for (const l of o) if (a(l)) return l;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o);
  function i(o, a = " | ") {
    return o.map((l) => (typeof l == "string" ? `'${l}'` : l)).join(a);
  }
  (e.joinValues = i),
    (e.jsonStringifyReplacer = (o, a) =>
      typeof a == "bigint" ? a.toString() : a);
})(at || (at = {}));
var Rp;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Rp || (Rp = {}));
const Se = at.arrayToEnum([
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
  pi = (e) => {
    switch (typeof e) {
      case "undefined":
        return Se.undefined;
      case "string":
        return Se.string;
      case "number":
        return isNaN(e) ? Se.nan : Se.number;
      case "boolean":
        return Se.boolean;
      case "function":
        return Se.function;
      case "bigint":
        return Se.bigint;
      case "symbol":
        return Se.symbol;
      case "object":
        return Array.isArray(e)
          ? Se.array
          : e === null
          ? Se.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? Se.promise
          : typeof Map < "u" && e instanceof Map
          ? Se.map
          : typeof Set < "u" && e instanceof Set
          ? Se.set
          : typeof Date < "u" && e instanceof Date
          ? Se.date
          : Se.object;
      default:
        return Se.unknown;
    }
  },
  oe = at.arrayToEnum([
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
  rF = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Wn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
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
        function (a) {
          return a.message;
        },
      i = { _errors: [] },
      o = (a) => {
        for (const l of a.issues)
          if (l.code === "invalid_union") l.unionErrors.map(o);
          else if (l.code === "invalid_return_type") o(l.returnTypeError);
          else if (l.code === "invalid_arguments") o(l.argumentsError);
          else if (l.path.length === 0) i._errors.push(n(l));
          else {
            let c = i,
              f = 0;
            for (; f < l.path.length; ) {
              const h = l.path[f];
              f === l.path.length - 1
                ? ((c[h] = c[h] || { _errors: [] }), c[h]._errors.push(n(l)))
                : (c[h] = c[h] || { _errors: [] }),
                (c = c[h]),
                f++;
            }
          }
      };
    return o(this), i;
  }
  static assert(t) {
    if (!(t instanceof Wn)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, at.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      i = [];
    for (const o of this.issues)
      o.path.length > 0
        ? ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(t(o)))
        : i.push(t(o));
    return { formErrors: i, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Wn.create = (e) => new Wn(e);
const Zo = (e, t) => {
  let n;
  switch (e.code) {
    case oe.invalid_type:
      e.received === Se.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case oe.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        at.jsonStringifyReplacer
      )}`;
      break;
    case oe.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${at.joinValues(e.keys, ", ")}`;
      break;
    case oe.invalid_union:
      n = "Invalid input";
      break;
    case oe.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${at.joinValues(e.options)}`;
      break;
    case oe.invalid_enum_value:
      n = `Invalid enum value. Expected ${at.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case oe.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case oe.invalid_return_type:
      n = "Invalid function return type";
      break;
    case oe.invalid_date:
      n = "Invalid date";
      break;
    case oe.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : at.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case oe.too_small:
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
    case oe.too_big:
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
    case oe.custom:
      n = "Invalid input";
      break;
    case oe.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case oe.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case oe.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), at.assertNever(e);
  }
  return { message: n };
};
let y1 = Zo;
function iF(e) {
  y1 = e;
}
function Hc() {
  return y1;
}
const Zc = (e) => {
    const { data: t, path: n, errorMaps: i, issueData: o } = e,
      a = [...n, ...(o.path || [])],
      l = { ...o, path: a };
    if (o.message !== void 0) return { ...o, path: a, message: o.message };
    let c = "";
    const f = i
      .filter((h) => !!h)
      .slice()
      .reverse();
    for (const h of f) c = h(l, { data: t, defaultError: c }).message;
    return { ...o, path: a, message: c };
  },
  sF = [];
function ve(e, t) {
  const n = Hc(),
    i = Zc({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === Zo ? void 0 : Zo,
      ].filter((o) => !!o),
    });
  e.common.issues.push(i);
}
class mn {
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
    const i = [];
    for (const o of n) {
      if (o.status === "aborted") return He;
      o.status === "dirty" && t.dirty(), i.push(o.value);
    }
    return { status: t.value, value: i };
  }
  static async mergeObjectAsync(t, n) {
    const i = [];
    for (const o of n) {
      const a = await o.key,
        l = await o.value;
      i.push({ key: a, value: l });
    }
    return mn.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, n) {
    const i = {};
    for (const o of n) {
      const { key: a, value: l } = o;
      if (a.status === "aborted" || l.status === "aborted") return He;
      a.status === "dirty" && t.dirty(),
        l.status === "dirty" && t.dirty(),
        a.value !== "__proto__" &&
          (typeof l.value < "u" || o.alwaysSet) &&
          (i[a.value] = l.value);
    }
    return { status: t.value, value: i };
  }
}
const He = Object.freeze({ status: "aborted" }),
  Mo = (e) => ({ status: "dirty", value: e }),
  Sn = (e) => ({ status: "valid", value: e }),
  Ap = (e) => e.status === "aborted",
  Np = (e) => e.status === "dirty",
  Hs = (e) => e.status === "valid",
  yl = (e) => typeof Promise < "u" && e instanceof Promise;
function Kc(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function v1(e, t, n, i, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var Le;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(Le || (Le = {}));
var Xa, Qa;
class Kr {
  constructor(t, n, i, o) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = i),
      (this._key = o);
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
const y0 = (e, t) => {
  if (Hs(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new Wn(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function Ye(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: i,
    description: o,
  } = e;
  if (t && (n || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: o }
    : {
        errorMap: (l, c) => {
          var f, h;
          const { message: p } = e;
          return l.code === "invalid_enum_value"
            ? { message: p ?? c.defaultError }
            : typeof c.data > "u"
            ? {
                message:
                  (f = p ?? i) !== null && f !== void 0 ? f : c.defaultError,
              }
            : l.code !== "invalid_type"
            ? { message: c.defaultError }
            : {
                message:
                  (h = p ?? n) !== null && h !== void 0 ? h : c.defaultError,
              };
        },
        description: o,
      };
}
class et {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return pi(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: pi(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new mn(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: pi(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (yl(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const i = this.safeParse(t, n);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(t, n) {
    var i;
    const o = {
        common: {
          issues: [],
          async:
            (i = n == null ? void 0 : n.async) !== null && i !== void 0
              ? i
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: pi(t),
      },
      a = this._parseSync({ data: t, path: o.path, parent: o });
    return y0(o, a);
  }
  "~validate"(t) {
    var n, i;
    const o = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: pi(t),
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: t, path: [], parent: o });
        return Hs(a) ? { value: a.value } : { issues: o.common.issues };
      } catch (a) {
        !(
          (i =
            (n = a == null ? void 0 : a.message) === null || n === void 0
              ? void 0
              : n.toLowerCase()) === null || i === void 0
        ) &&
          i.includes("encountered") &&
          (this["~standard"].async = !0),
          (o.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: o }).then((a) =>
      Hs(a) ? { value: a.value } : { issues: o.common.issues }
    );
  }
  async parseAsync(t, n) {
    const i = await this.safeParseAsync(t, n);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(t, n) {
    const i = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: pi(t),
      },
      o = this._parse({ data: t, path: i.path, parent: i }),
      a = await (yl(o) ? o : Promise.resolve(o));
    return y0(i, a);
  }
  refine(t, n) {
    const i = (o) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(o)
        : n;
    return this._refinement((o, a) => {
      const l = t(o),
        c = () => a.addIssue({ code: oe.custom, ...i(o) });
      return typeof Promise < "u" && l instanceof Promise
        ? l.then((f) => (f ? !0 : (c(), !1)))
        : l
        ? !0
        : (c(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, o) =>
      t(i) ? !0 : (o.addIssue(typeof n == "function" ? n(i, o) : n), !1)
    );
  }
  _refinement(t) {
    return new Tr({
      schema: this,
      typeName: $e.ZodEffects,
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
    return Hr.create(this, this._def);
  }
  nullable() {
    return cs.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return br.create(this);
  }
  promise() {
    return Go.create(this, this._def);
  }
  or(t) {
    return Sl.create([this, t], this._def);
  }
  and(t) {
    return bl.create(this, t, this._def);
  }
  transform(t) {
    return new Tr({
      ...Ye(this._def),
      schema: this,
      typeName: $e.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Tl({
      ...Ye(this._def),
      innerType: this,
      defaultValue: n,
      typeName: $e.ZodDefault,
    });
  }
  brand() {
    return new Xm({ typeName: $e.ZodBranded, type: this, ...Ye(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Pl({
      ...Ye(this._def),
      innerType: this,
      catchValue: n,
      typeName: $e.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return Zl.create(this, t);
  }
  readonly() {
    return Rl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const oF = /^c[^\s-]{8,}$/i,
  aF = /^[0-9a-z]+$/,
  lF = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  uF =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  cF = /^[a-z0-9_-]{21}$/i,
  dF = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  fF =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  hF =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  pF = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Zh;
const mF =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  gF =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  yF =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  vF =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  xF = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  wF = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  x1 =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  SF = new RegExp(`^${x1}$`);
function w1(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function bF(e) {
  return new RegExp(`^${w1(e)}$`);
}
function S1(e) {
  let t = `${x1}T${w1(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function EF(e, t) {
  return !!(
    ((t === "v4" || !t) && mF.test(e)) ||
    ((t === "v6" || !t) && yF.test(e))
  );
}
function _F(e, t) {
  if (!dF.test(e)) return !1;
  try {
    const [n] = e.split("."),
      i = n
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), "="),
      o = JSON.parse(atob(i));
    return !(
      typeof o != "object" ||
      o === null ||
      !o.typ ||
      !o.alg ||
      (t && o.alg !== t)
    );
  } catch {
    return !1;
  }
}
function CF(e, t) {
  return !!(
    ((t === "v4" || !t) && gF.test(e)) ||
    ((t === "v6" || !t) && vF.test(e))
  );
}
class Sr extends et {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== Se.string)
    ) {
      const a = this._getOrReturnCtx(t);
      return (
        ve(a, {
          code: oe.invalid_type,
          expected: Se.string,
          received: a.parsedType,
        }),
        He
      );
    }
    const i = new mn();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value &&
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            code: oe.too_small,
            minimum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "max")
        t.data.length > a.value &&
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            code: oe.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "length") {
        const l = t.data.length > a.value,
          c = t.data.length < a.value;
        (l || c) &&
          ((o = this._getOrReturnCtx(t, o)),
          l
            ? ve(o, {
                code: oe.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              })
            : c &&
              ve(o, {
                code: oe.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              }),
          i.dirty());
      } else if (a.kind === "email")
        hF.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            validation: "email",
            code: oe.invalid_string,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "emoji")
        Zh || (Zh = new RegExp(pF, "u")),
          Zh.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "emoji",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty());
      else if (a.kind === "uuid")
        uF.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            validation: "uuid",
            code: oe.invalid_string,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "nanoid")
        cF.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            validation: "nanoid",
            code: oe.invalid_string,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "cuid")
        oF.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            validation: "cuid",
            code: oe.invalid_string,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "cuid2")
        aF.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            validation: "cuid2",
            code: oe.invalid_string,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "ulid")
        lF.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            validation: "ulid",
            code: oe.invalid_string,
            message: a.message,
          }),
          i.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "url",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty();
        }
      else
        a.kind === "regex"
          ? ((a.regex.lastIndex = 0),
            a.regex.test(t.data) ||
              ((o = this._getOrReturnCtx(t, o)),
              ve(o, {
                validation: "regex",
                code: oe.invalid_string,
                message: a.message,
              }),
              i.dirty()))
          : a.kind === "trim"
          ? (t.data = t.data.trim())
          : a.kind === "includes"
          ? t.data.includes(a.value, a.position) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              code: oe.invalid_string,
              validation: { includes: a.value, position: a.position },
              message: a.message,
            }),
            i.dirty())
          : a.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : a.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : a.kind === "startsWith"
          ? t.data.startsWith(a.value) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              code: oe.invalid_string,
              validation: { startsWith: a.value },
              message: a.message,
            }),
            i.dirty())
          : a.kind === "endsWith"
          ? t.data.endsWith(a.value) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              code: oe.invalid_string,
              validation: { endsWith: a.value },
              message: a.message,
            }),
            i.dirty())
          : a.kind === "datetime"
          ? S1(a).test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              code: oe.invalid_string,
              validation: "datetime",
              message: a.message,
            }),
            i.dirty())
          : a.kind === "date"
          ? SF.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              code: oe.invalid_string,
              validation: "date",
              message: a.message,
            }),
            i.dirty())
          : a.kind === "time"
          ? bF(a).test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              code: oe.invalid_string,
              validation: "time",
              message: a.message,
            }),
            i.dirty())
          : a.kind === "duration"
          ? fF.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "duration",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty())
          : a.kind === "ip"
          ? EF(t.data, a.version) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "ip",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty())
          : a.kind === "jwt"
          ? _F(t.data, a.alg) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "jwt",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty())
          : a.kind === "cidr"
          ? CF(t.data, a.version) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "cidr",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty())
          : a.kind === "base64"
          ? xF.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "base64",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty())
          : a.kind === "base64url"
          ? wF.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            ve(o, {
              validation: "base64url",
              code: oe.invalid_string,
              message: a.message,
            }),
            i.dirty())
          : at.assertNever(a);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: oe.invalid_string,
      ...Le.errToObj(i),
    });
  }
  _addCheck(t) {
    return new Sr({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Le.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Le.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Le.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Le.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Le.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Le.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Le.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Le.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Le.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...Le.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...Le.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Le.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...Le.errToObj(t) });
  }
  datetime(t) {
    var n, i;
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
            (i = t == null ? void 0 : t.local) !== null && i !== void 0
              ? i
              : !1,
          ...Le.errToObj(t == null ? void 0 : t.message),
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
          ...Le.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Le.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...Le.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Le.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...Le.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...Le.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...Le.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...Le.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...Le.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, Le.errToObj(t));
  }
  trim() {
    return new Sr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Sr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Sr({
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
Sr.create = (e) => {
  var t;
  return new Sr({
    checks: [],
    typeName: $e.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ye(e),
  });
};
function kF(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    i = (t.toString().split(".")[1] || "").length,
    o = n > i ? n : i,
    a = parseInt(e.toFixed(o).replace(".", "")),
    l = parseInt(t.toFixed(o).replace(".", ""));
  return (a % l) / Math.pow(10, o);
}
class as extends et {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== Se.number)
    ) {
      const a = this._getOrReturnCtx(t);
      return (
        ve(a, {
          code: oe.invalid_type,
          expected: Se.number,
          received: a.parsedType,
        }),
        He
      );
    }
    let i;
    const o = new mn();
    for (const a of this._def.checks)
      a.kind === "int"
        ? at.isInteger(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, {
            code: oe.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message,
          }),
          o.dirty())
        : a.kind === "min"
        ? (a.inclusive ? t.data < a.value : t.data <= a.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, {
            code: oe.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          o.dirty())
        : a.kind === "max"
        ? (a.inclusive ? t.data > a.value : t.data >= a.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, {
            code: oe.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          o.dirty())
        : a.kind === "multipleOf"
        ? kF(t.data, a.value) !== 0 &&
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, {
            code: oe.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          o.dirty())
        : a.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, { code: oe.not_finite, message: a.message }),
          o.dirty())
        : at.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Le.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Le.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Le.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Le.toString(n));
  }
  setLimit(t, n, i, o) {
    return new as({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: i, message: Le.toString(o) },
      ],
    });
  }
  _addCheck(t) {
    return new as({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: Le.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Le.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Le.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Le.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Le.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Le.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: Le.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Le.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Le.toString(t),
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
        t.kind === "int" || (t.kind === "multipleOf" && at.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min"
        ? (n === null || i.value > n) && (n = i.value)
        : i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
as.create = (e) =>
  new as({
    checks: [],
    typeName: $e.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...Ye(e),
  });
class ls extends et {
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
    if (this._getType(t) !== Se.bigint) return this._getInvalidInput(t);
    let i;
    const o = new mn();
    for (const a of this._def.checks)
      a.kind === "min"
        ? (a.inclusive ? t.data < a.value : t.data <= a.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, {
            code: oe.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          o.dirty())
        : a.kind === "max"
        ? (a.inclusive ? t.data > a.value : t.data >= a.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, {
            code: oe.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          o.dirty())
        : a.kind === "multipleOf"
        ? t.data % a.value !== BigInt(0) &&
          ((i = this._getOrReturnCtx(t, i)),
          ve(i, {
            code: oe.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          o.dirty())
        : at.assertNever(a);
    return { status: o.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return (
      ve(n, {
        code: oe.invalid_type,
        expected: Se.bigint,
        received: n.parsedType,
      }),
      He
    );
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Le.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Le.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Le.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Le.toString(n));
  }
  setLimit(t, n, i, o) {
    return new ls({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: i, message: Le.toString(o) },
      ],
    });
  }
  _addCheck(t) {
    return new ls({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Le.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Le.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Le.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Le.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Le.toString(n),
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
ls.create = (e) => {
  var t;
  return new ls({
    checks: [],
    typeName: $e.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ye(e),
  });
};
class vl extends et {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Se.boolean)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.boolean,
          received: i.parsedType,
        }),
        He
      );
    }
    return Sn(t.data);
  }
}
vl.create = (e) =>
  new vl({
    typeName: $e.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...Ye(e),
  });
class Zs extends et {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== Se.date)
    ) {
      const a = this._getOrReturnCtx(t);
      return (
        ve(a, {
          code: oe.invalid_type,
          expected: Se.date,
          received: a.parsedType,
        }),
        He
      );
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ve(a, { code: oe.invalid_date }), He;
    }
    const i = new mn();
    let o;
    for (const a of this._def.checks)
      a.kind === "min"
        ? t.data.getTime() < a.value &&
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            code: oe.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date",
          }),
          i.dirty())
        : a.kind === "max"
        ? t.data.getTime() > a.value &&
          ((o = this._getOrReturnCtx(t, o)),
          ve(o, {
            code: oe.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date",
          }),
          i.dirty())
        : at.assertNever(a);
    return { status: i.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new Zs({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Le.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Le.toString(n),
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
Zs.create = (e) =>
  new Zs({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: $e.ZodDate,
    ...Ye(e),
  });
class Gc extends et {
  _parse(t) {
    if (this._getType(t) !== Se.symbol) {
      const i = this._getOrReturnCtx(t);
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.symbol,
          received: i.parsedType,
        }),
        He
      );
    }
    return Sn(t.data);
  }
}
Gc.create = (e) => new Gc({ typeName: $e.ZodSymbol, ...Ye(e) });
class xl extends et {
  _parse(t) {
    if (this._getType(t) !== Se.undefined) {
      const i = this._getOrReturnCtx(t);
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.undefined,
          received: i.parsedType,
        }),
        He
      );
    }
    return Sn(t.data);
  }
}
xl.create = (e) => new xl({ typeName: $e.ZodUndefined, ...Ye(e) });
class wl extends et {
  _parse(t) {
    if (this._getType(t) !== Se.null) {
      const i = this._getOrReturnCtx(t);
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.null,
          received: i.parsedType,
        }),
        He
      );
    }
    return Sn(t.data);
  }
}
wl.create = (e) => new wl({ typeName: $e.ZodNull, ...Ye(e) });
class Ko extends et {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Sn(t.data);
  }
}
Ko.create = (e) => new Ko({ typeName: $e.ZodAny, ...Ye(e) });
class Bs extends et {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Sn(t.data);
  }
}
Bs.create = (e) => new Bs({ typeName: $e.ZodUnknown, ...Ye(e) });
class bi extends et {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      ve(n, {
        code: oe.invalid_type,
        expected: Se.never,
        received: n.parsedType,
      }),
      He
    );
  }
}
bi.create = (e) => new bi({ typeName: $e.ZodNever, ...Ye(e) });
class qc extends et {
  _parse(t) {
    if (this._getType(t) !== Se.undefined) {
      const i = this._getOrReturnCtx(t);
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.void,
          received: i.parsedType,
        }),
        He
      );
    }
    return Sn(t.data);
  }
}
qc.create = (e) => new qc({ typeName: $e.ZodVoid, ...Ye(e) });
class br extends et {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t),
      o = this._def;
    if (n.parsedType !== Se.array)
      return (
        ve(n, {
          code: oe.invalid_type,
          expected: Se.array,
          received: n.parsedType,
        }),
        He
      );
    if (o.exactLength !== null) {
      const l = n.data.length > o.exactLength.value,
        c = n.data.length < o.exactLength.value;
      (l || c) &&
        (ve(n, {
          code: l ? oe.too_big : oe.too_small,
          minimum: c ? o.exactLength.value : void 0,
          maximum: l ? o.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (o.minLength !== null &&
        n.data.length < o.minLength.value &&
        (ve(n, {
          code: oe.too_small,
          minimum: o.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        i.dirty()),
      o.maxLength !== null &&
        n.data.length > o.maxLength.value &&
        (ve(n, {
          code: oe.too_big,
          maximum: o.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        i.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((l, c) => o.type._parseAsync(new Kr(n, l, n.path, c)))
      ).then((l) => mn.mergeArray(i, l));
    const a = [...n.data].map((l, c) =>
      o.type._parseSync(new Kr(n, l, n.path, c))
    );
    return mn.mergeArray(i, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new br({
      ...this._def,
      minLength: { value: t, message: Le.toString(n) },
    });
  }
  max(t, n) {
    return new br({
      ...this._def,
      maxLength: { value: t, message: Le.toString(n) },
    });
  }
  length(t, n) {
    return new br({
      ...this._def,
      exactLength: { value: t, message: Le.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
br.create = (e, t) =>
  new br({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: $e.ZodArray,
    ...Ye(t),
  });
function Ao(e) {
  if (e instanceof jt) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = Hr.create(Ao(i));
    }
    return new jt({ ...e._def, shape: () => t });
  } else
    return e instanceof br
      ? new br({ ...e._def, type: Ao(e.element) })
      : e instanceof Hr
      ? Hr.create(Ao(e.unwrap()))
      : e instanceof cs
      ? cs.create(Ao(e.unwrap()))
      : e instanceof Gr
      ? Gr.create(e.items.map((t) => Ao(t)))
      : e;
}
class jt extends et {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = at.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== Se.object) {
      const h = this._getOrReturnCtx(t);
      return (
        ve(h, {
          code: oe.invalid_type,
          expected: Se.object,
          received: h.parsedType,
        }),
        He
      );
    }
    const { status: i, ctx: o } = this._processInputParams(t),
      { shape: a, keys: l } = this._getCached(),
      c = [];
    if (
      !(this._def.catchall instanceof bi && this._def.unknownKeys === "strip")
    )
      for (const h in o.data) l.includes(h) || c.push(h);
    const f = [];
    for (const h of l) {
      const p = a[h],
        g = o.data[h];
      f.push({
        key: { status: "valid", value: h },
        value: p._parse(new Kr(o, g, o.path, h)),
        alwaysSet: h in o.data,
      });
    }
    if (this._def.catchall instanceof bi) {
      const h = this._def.unknownKeys;
      if (h === "passthrough")
        for (const p of c)
          f.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: o.data[p] },
          });
      else if (h === "strict")
        c.length > 0 &&
          (ve(o, { code: oe.unrecognized_keys, keys: c }), i.dirty());
      else if (h !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const h = this._def.catchall;
      for (const p of c) {
        const g = o.data[p];
        f.push({
          key: { status: "valid", value: p },
          value: h._parse(new Kr(o, g, o.path, p)),
          alwaysSet: p in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const h = [];
            for (const p of f) {
              const g = await p.key,
                y = await p.value;
              h.push({ key: g, value: y, alwaysSet: p.alwaysSet });
            }
            return h;
          })
          .then((h) => mn.mergeObjectSync(i, h))
      : mn.mergeObjectSync(i, f);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      Le.errToObj,
      new jt({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, i) => {
                var o, a, l, c;
                const f =
                  (l =
                    (a = (o = this._def).errorMap) === null || a === void 0
                      ? void 0
                      : a.call(o, n, i).message) !== null && l !== void 0
                    ? l
                    : i.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (c = Le.errToObj(t).message) !== null && c !== void 0
                          ? c
                          : f,
                    }
                  : { message: f };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new jt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new jt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new jt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new jt({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: $e.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new jt({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      at.objectKeys(t).forEach((i) => {
        t[i] && this.shape[i] && (n[i] = this.shape[i]);
      }),
      new jt({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      at.objectKeys(this.shape).forEach((i) => {
        t[i] || (n[i] = this.shape[i]);
      }),
      new jt({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Ao(this);
  }
  partial(t) {
    const n = {};
    return (
      at.objectKeys(this.shape).forEach((i) => {
        const o = this.shape[i];
        t && !t[i] ? (n[i] = o) : (n[i] = o.optional());
      }),
      new jt({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      at.objectKeys(this.shape).forEach((i) => {
        if (t && !t[i]) n[i] = this.shape[i];
        else {
          let a = this.shape[i];
          for (; a instanceof Hr; ) a = a._def.innerType;
          n[i] = a;
        }
      }),
      new jt({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return b1(at.objectKeys(this.shape));
  }
}
jt.create = (e, t) =>
  new jt({
    shape: () => e,
    unknownKeys: "strip",
    catchall: bi.create(),
    typeName: $e.ZodObject,
    ...Ye(t),
  });
jt.strictCreate = (e, t) =>
  new jt({
    shape: () => e,
    unknownKeys: "strict",
    catchall: bi.create(),
    typeName: $e.ZodObject,
    ...Ye(t),
  });
jt.lazycreate = (e, t) =>
  new jt({
    shape: e,
    unknownKeys: "strip",
    catchall: bi.create(),
    typeName: $e.ZodObject,
    ...Ye(t),
  });
class Sl extends et {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      i = this._def.options;
    function o(a) {
      for (const c of a) if (c.result.status === "valid") return c.result;
      for (const c of a)
        if (c.result.status === "dirty")
          return n.common.issues.push(...c.ctx.common.issues), c.result;
      const l = a.map((c) => new Wn(c.ctx.common.issues));
      return ve(n, { code: oe.invalid_union, unionErrors: l }), He;
    }
    if (n.common.async)
      return Promise.all(
        i.map(async (a) => {
          const l = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await a._parseAsync({
              data: n.data,
              path: n.path,
              parent: l,
            }),
            ctx: l,
          };
        })
      ).then(o);
    {
      let a;
      const l = [];
      for (const f of i) {
        const h = { ...n, common: { ...n.common, issues: [] }, parent: null },
          p = f._parseSync({ data: n.data, path: n.path, parent: h });
        if (p.status === "valid") return p;
        p.status === "dirty" && !a && (a = { result: p, ctx: h }),
          h.common.issues.length && l.push(h.common.issues);
      }
      if (a) return n.common.issues.push(...a.ctx.common.issues), a.result;
      const c = l.map((f) => new Wn(f));
      return ve(n, { code: oe.invalid_union, unionErrors: c }), He;
    }
  }
  get options() {
    return this._def.options;
  }
}
Sl.create = (e, t) => new Sl({ options: e, typeName: $e.ZodUnion, ...Ye(t) });
const hi = (e) =>
  e instanceof _l
    ? hi(e.schema)
    : e instanceof Tr
    ? hi(e.innerType())
    : e instanceof Cl
    ? [e.value]
    : e instanceof us
    ? e.options
    : e instanceof kl
    ? at.objectValues(e.enum)
    : e instanceof Tl
    ? hi(e._def.innerType)
    : e instanceof xl
    ? [void 0]
    : e instanceof wl
    ? [null]
    : e instanceof Hr
    ? [void 0, ...hi(e.unwrap())]
    : e instanceof cs
    ? [null, ...hi(e.unwrap())]
    : e instanceof Xm || e instanceof Rl
    ? hi(e.unwrap())
    : e instanceof Pl
    ? hi(e._def.innerType)
    : [];
class Ed extends et {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Se.object)
      return (
        ve(n, {
          code: oe.invalid_type,
          expected: Se.object,
          received: n.parsedType,
        }),
        He
      );
    const i = this.discriminator,
      o = n.data[i],
      a = this.optionsMap.get(o);
    return a
      ? n.common.async
        ? a._parseAsync({ data: n.data, path: n.path, parent: n })
        : a._parseSync({ data: n.data, path: n.path, parent: n })
      : (ve(n, {
          code: oe.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [i],
        }),
        He);
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
  static create(t, n, i) {
    const o = new Map();
    for (const a of n) {
      const l = hi(a.shape[t]);
      if (!l.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const c of l) {
        if (o.has(c))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              c
            )}`
          );
        o.set(c, a);
      }
    }
    return new Ed({
      typeName: $e.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Ye(i),
    });
  }
}
function jp(e, t) {
  const n = pi(e),
    i = pi(t);
  if (e === t) return { valid: !0, data: e };
  if (n === Se.object && i === Se.object) {
    const o = at.objectKeys(t),
      a = at.objectKeys(e).filter((c) => o.indexOf(c) !== -1),
      l = { ...e, ...t };
    for (const c of a) {
      const f = jp(e[c], t[c]);
      if (!f.valid) return { valid: !1 };
      l[c] = f.data;
    }
    return { valid: !0, data: l };
  } else if (n === Se.array && i === Se.array) {
    if (e.length !== t.length) return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const l = e[a],
        c = t[a],
        f = jp(l, c);
      if (!f.valid) return { valid: !1 };
      o.push(f.data);
    }
    return { valid: !0, data: o };
  } else
    return n === Se.date && i === Se.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class bl extends et {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t),
      o = (a, l) => {
        if (Ap(a) || Ap(l)) return He;
        const c = jp(a.value, l.value);
        return c.valid
          ? ((Np(a) || Np(l)) && n.dirty(), { status: n.value, value: c.data })
          : (ve(i, { code: oe.invalid_intersection_types }), He);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i,
          }),
        ]).then(([a, l]) => o(a, l))
      : o(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
        );
  }
}
bl.create = (e, t, n) =>
  new bl({ left: e, right: t, typeName: $e.ZodIntersection, ...Ye(n) });
class Gr extends et {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Se.array)
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.array,
          received: i.parsedType,
        }),
        He
      );
    if (i.data.length < this._def.items.length)
      return (
        ve(i, {
          code: oe.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        He
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (ve(i, {
        code: oe.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const a = [...i.data]
      .map((l, c) => {
        const f = this._def.items[c] || this._def.rest;
        return f ? f._parse(new Kr(i, l, i.path, c)) : null;
      })
      .filter((l) => !!l);
    return i.common.async
      ? Promise.all(a).then((l) => mn.mergeArray(n, l))
      : mn.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Gr({ ...this._def, rest: t });
  }
}
Gr.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Gr({ items: e, typeName: $e.ZodTuple, rest: null, ...Ye(t) });
};
class El extends et {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Se.object)
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.object,
          received: i.parsedType,
        }),
        He
      );
    const o = [],
      a = this._def.keyType,
      l = this._def.valueType;
    for (const c in i.data)
      o.push({
        key: a._parse(new Kr(i, c, i.path, c)),
        value: l._parse(new Kr(i, i.data[c], i.path, c)),
        alwaysSet: c in i.data,
      });
    return i.common.async
      ? mn.mergeObjectAsync(n, o)
      : mn.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof et
      ? new El({ keyType: t, valueType: n, typeName: $e.ZodRecord, ...Ye(i) })
      : new El({
          keyType: Sr.create(),
          valueType: t,
          typeName: $e.ZodRecord,
          ...Ye(n),
        });
  }
}
class Yc extends et {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Se.map)
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.map,
          received: i.parsedType,
        }),
        He
      );
    const o = this._def.keyType,
      a = this._def.valueType,
      l = [...i.data.entries()].map(([c, f], h) => ({
        key: o._parse(new Kr(i, c, i.path, [h, "key"])),
        value: a._parse(new Kr(i, f, i.path, [h, "value"])),
      }));
    if (i.common.async) {
      const c = new Map();
      return Promise.resolve().then(async () => {
        for (const f of l) {
          const h = await f.key,
            p = await f.value;
          if (h.status === "aborted" || p.status === "aborted") return He;
          (h.status === "dirty" || p.status === "dirty") && n.dirty(),
            c.set(h.value, p.value);
        }
        return { status: n.value, value: c };
      });
    } else {
      const c = new Map();
      for (const f of l) {
        const h = f.key,
          p = f.value;
        if (h.status === "aborted" || p.status === "aborted") return He;
        (h.status === "dirty" || p.status === "dirty") && n.dirty(),
          c.set(h.value, p.value);
      }
      return { status: n.value, value: c };
    }
  }
}
Yc.create = (e, t, n) =>
  new Yc({ valueType: t, keyType: e, typeName: $e.ZodMap, ...Ye(n) });
class Ks extends et {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Se.set)
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.set,
          received: i.parsedType,
        }),
        He
      );
    const o = this._def;
    o.minSize !== null &&
      i.data.size < o.minSize.value &&
      (ve(i, {
        code: oe.too_small,
        minimum: o.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      n.dirty()),
      o.maxSize !== null &&
        i.data.size > o.maxSize.value &&
        (ve(i, {
          code: oe.too_big,
          maximum: o.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        n.dirty());
    const a = this._def.valueType;
    function l(f) {
      const h = new Set();
      for (const p of f) {
        if (p.status === "aborted") return He;
        p.status === "dirty" && n.dirty(), h.add(p.value);
      }
      return { status: n.value, value: h };
    }
    const c = [...i.data.values()].map((f, h) =>
      a._parse(new Kr(i, f, i.path, h))
    );
    return i.common.async ? Promise.all(c).then((f) => l(f)) : l(c);
  }
  min(t, n) {
    return new Ks({
      ...this._def,
      minSize: { value: t, message: Le.toString(n) },
    });
  }
  max(t, n) {
    return new Ks({
      ...this._def,
      maxSize: { value: t, message: Le.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ks.create = (e, t) =>
  new Ks({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: $e.ZodSet,
    ...Ye(t),
  });
class Bo extends et {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Se.function)
      return (
        ve(n, {
          code: oe.invalid_type,
          expected: Se.function,
          received: n.parsedType,
        }),
        He
      );
    function i(c, f) {
      return Zc({
        data: c,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Hc(),
          Zo,
        ].filter((h) => !!h),
        issueData: { code: oe.invalid_arguments, argumentsError: f },
      });
    }
    function o(c, f) {
      return Zc({
        data: c,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Hc(),
          Zo,
        ].filter((h) => !!h),
        issueData: { code: oe.invalid_return_type, returnTypeError: f },
      });
    }
    const a = { errorMap: n.common.contextualErrorMap },
      l = n.data;
    if (this._def.returns instanceof Go) {
      const c = this;
      return Sn(async function (...f) {
        const h = new Wn([]),
          p = await c._def.args.parseAsync(f, a).catch((w) => {
            throw (h.addIssue(i(f, w)), h);
          }),
          g = await Reflect.apply(l, this, p);
        return await c._def.returns._def.type.parseAsync(g, a).catch((w) => {
          throw (h.addIssue(o(g, w)), h);
        });
      });
    } else {
      const c = this;
      return Sn(function (...f) {
        const h = c._def.args.safeParse(f, a);
        if (!h.success) throw new Wn([i(f, h.error)]);
        const p = Reflect.apply(l, this, h.data),
          g = c._def.returns.safeParse(p, a);
        if (!g.success) throw new Wn([o(p, g.error)]);
        return g.data;
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
    return new Bo({ ...this._def, args: Gr.create(t).rest(Bs.create()) });
  }
  returns(t) {
    return new Bo({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, i) {
    return new Bo({
      args: t || Gr.create([]).rest(Bs.create()),
      returns: n || Bs.create(),
      typeName: $e.ZodFunction,
      ...Ye(i),
    });
  }
}
class _l extends et {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
_l.create = (e, t) => new _l({ getter: e, typeName: $e.ZodLazy, ...Ye(t) });
class Cl extends et {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        ve(n, {
          received: n.data,
          code: oe.invalid_literal,
          expected: this._def.value,
        }),
        He
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Cl.create = (e, t) => new Cl({ value: e, typeName: $e.ZodLiteral, ...Ye(t) });
function b1(e, t) {
  return new us({ values: e, typeName: $e.ZodEnum, ...Ye(t) });
}
class us extends et {
  constructor() {
    super(...arguments), Xa.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        i = this._def.values;
      return (
        ve(n, {
          expected: at.joinValues(i),
          received: n.parsedType,
          code: oe.invalid_type,
        }),
        He
      );
    }
    if (
      (Kc(this, Xa) || v1(this, Xa, new Set(this._def.values)),
      !Kc(this, Xa).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        i = this._def.values;
      return (
        ve(n, { received: n.data, code: oe.invalid_enum_value, options: i }), He
      );
    }
    return Sn(t.data);
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
    return us.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return us.create(
      this.options.filter((i) => !t.includes(i)),
      { ...this._def, ...n }
    );
  }
}
Xa = new WeakMap();
us.create = b1;
class kl extends et {
  constructor() {
    super(...arguments), Qa.set(this, void 0);
  }
  _parse(t) {
    const n = at.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(t);
    if (i.parsedType !== Se.string && i.parsedType !== Se.number) {
      const o = at.objectValues(n);
      return (
        ve(i, {
          expected: at.joinValues(o),
          received: i.parsedType,
          code: oe.invalid_type,
        }),
        He
      );
    }
    if (
      (Kc(this, Qa) ||
        v1(this, Qa, new Set(at.getValidEnumValues(this._def.values))),
      !Kc(this, Qa).has(t.data))
    ) {
      const o = at.objectValues(n);
      return (
        ve(i, { received: i.data, code: oe.invalid_enum_value, options: o }), He
      );
    }
    return Sn(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Qa = new WeakMap();
kl.create = (e, t) =>
  new kl({ values: e, typeName: $e.ZodNativeEnum, ...Ye(t) });
class Go extends et {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Se.promise && n.common.async === !1)
      return (
        ve(n, {
          code: oe.invalid_type,
          expected: Se.promise,
          received: n.parsedType,
        }),
        He
      );
    const i = n.parsedType === Se.promise ? n.data : Promise.resolve(n.data);
    return Sn(
      i.then((o) =>
        this._def.type.parseAsync(o, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
Go.create = (e, t) => new Go({ type: e, typeName: $e.ZodPromise, ...Ye(t) });
class Tr extends et {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === $e.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t),
      o = this._def.effect || null,
      a = {
        addIssue: (l) => {
          ve(i, l), l.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((a.addIssue = a.addIssue.bind(a)), o.type === "preprocess")) {
      const l = o.transform(i.data, a);
      if (i.common.async)
        return Promise.resolve(l).then(async (c) => {
          if (n.value === "aborted") return He;
          const f = await this._def.schema._parseAsync({
            data: c,
            path: i.path,
            parent: i,
          });
          return f.status === "aborted"
            ? He
            : f.status === "dirty" || n.value === "dirty"
            ? Mo(f.value)
            : f;
        });
      {
        if (n.value === "aborted") return He;
        const c = this._def.schema._parseSync({
          data: l,
          path: i.path,
          parent: i,
        });
        return c.status === "aborted"
          ? He
          : c.status === "dirty" || n.value === "dirty"
          ? Mo(c.value)
          : c;
      }
    }
    if (o.type === "refinement") {
      const l = (c) => {
        const f = o.refinement(c, a);
        if (i.common.async) return Promise.resolve(f);
        if (f instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return c;
      };
      if (i.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return c.status === "aborted"
          ? He
          : (c.status === "dirty" && n.dirty(),
            l(c.value),
            { status: n.value, value: c.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((c) =>
            c.status === "aborted"
              ? He
              : (c.status === "dirty" && n.dirty(),
                l(c.value).then(() => ({ status: n.value, value: c.value })))
          );
    }
    if (o.type === "transform")
      if (i.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        if (!Hs(l)) return l;
        const c = o.transform(l.value, a);
        if (c instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: c };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((l) =>
            Hs(l)
              ? Promise.resolve(o.transform(l.value, a)).then((c) => ({
                  status: n.value,
                  value: c,
                }))
              : l
          );
    at.assertNever(o);
  }
}
Tr.create = (e, t, n) =>
  new Tr({ schema: e, typeName: $e.ZodEffects, effect: t, ...Ye(n) });
Tr.createWithPreprocess = (e, t, n) =>
  new Tr({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: $e.ZodEffects,
    ...Ye(n),
  });
class Hr extends et {
  _parse(t) {
    return this._getType(t) === Se.undefined
      ? Sn(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Hr.create = (e, t) =>
  new Hr({ innerType: e, typeName: $e.ZodOptional, ...Ye(t) });
class cs extends et {
  _parse(t) {
    return this._getType(t) === Se.null
      ? Sn(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
cs.create = (e, t) =>
  new cs({ innerType: e, typeName: $e.ZodNullable, ...Ye(t) });
class Tl extends et {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return (
      n.parsedType === Se.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Tl.create = (e, t) =>
  new Tl({
    innerType: e,
    typeName: $e.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...Ye(t),
  });
class Pl extends et {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      i = { ...n, common: { ...n.common, issues: [] } },
      o = this._def.innerType._parse({
        data: i.data,
        path: i.path,
        parent: { ...i },
      });
    return yl(o)
      ? o.then((a) => ({
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new Wn(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Wn(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Pl.create = (e, t) =>
  new Pl({
    innerType: e,
    typeName: $e.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...Ye(t),
  });
class Xc extends et {
  _parse(t) {
    if (this._getType(t) !== Se.nan) {
      const i = this._getOrReturnCtx(t);
      return (
        ve(i, {
          code: oe.invalid_type,
          expected: Se.nan,
          received: i.parsedType,
        }),
        He
      );
    }
    return { status: "valid", value: t.data };
  }
}
Xc.create = (e) => new Xc({ typeName: $e.ZodNaN, ...Ye(e) });
const TF = Symbol("zod_brand");
class Xm extends et {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      i = n.data;
    return this._def.type._parse({ data: i, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class Zl extends et {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return a.status === "aborted"
          ? He
          : a.status === "dirty"
          ? (n.dirty(), Mo(a.value))
          : this._def.out._parseAsync({
              data: a.value,
              path: i.path,
              parent: i,
            });
      })();
    {
      const o = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i,
      });
      return o.status === "aborted"
        ? He
        : o.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: o.value })
        : this._def.out._parseSync({ data: o.value, path: i.path, parent: i });
    }
  }
  static create(t, n) {
    return new Zl({ in: t, out: n, typeName: $e.ZodPipeline });
  }
}
class Rl extends et {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      i = (o) => (Hs(o) && (o.value = Object.freeze(o.value)), o);
    return yl(n) ? n.then((o) => i(o)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Rl.create = (e, t) =>
  new Rl({ innerType: e, typeName: $e.ZodReadonly, ...Ye(t) });
function E1(e, t = {}, n) {
  return e
    ? Ko.create().superRefine((i, o) => {
        var a, l;
        if (!e(i)) {
          const c =
              typeof t == "function"
                ? t(i)
                : typeof t == "string"
                ? { message: t }
                : t,
            f =
              (l = (a = c.fatal) !== null && a !== void 0 ? a : n) !== null &&
              l !== void 0
                ? l
                : !0,
            h = typeof c == "string" ? { message: c } : c;
          o.addIssue({ code: "custom", ...h, fatal: f });
        }
      })
    : Ko.create();
}
const PF = { object: jt.lazycreate };
var $e;
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
})($e || ($e = {}));
const RF = (e, t = { message: `Input not instance of ${e.name}` }) =>
    E1((n) => n instanceof e, t),
  _1 = Sr.create,
  C1 = as.create,
  AF = Xc.create,
  NF = ls.create,
  k1 = vl.create,
  jF = Zs.create,
  DF = Gc.create,
  OF = xl.create,
  LF = wl.create,
  MF = Ko.create,
  FF = Bs.create,
  IF = bi.create,
  VF = qc.create,
  BF = br.create,
  zF = jt.create,
  UF = jt.strictCreate,
  $F = Sl.create,
  WF = Ed.create,
  HF = bl.create,
  ZF = Gr.create,
  KF = El.create,
  GF = Yc.create,
  qF = Ks.create,
  YF = Bo.create,
  XF = _l.create,
  QF = Cl.create,
  JF = us.create,
  eI = kl.create,
  tI = Go.create,
  v0 = Tr.create,
  nI = Hr.create,
  rI = cs.create,
  iI = Tr.createWithPreprocess,
  sI = Zl.create,
  oI = () => _1().optional(),
  aI = () => C1().optional(),
  lI = () => k1().optional(),
  uI = {
    string: (e) => Sr.create({ ...e, coerce: !0 }),
    number: (e) => as.create({ ...e, coerce: !0 }),
    boolean: (e) => vl.create({ ...e, coerce: !0 }),
    bigint: (e) => ls.create({ ...e, coerce: !0 }),
    date: (e) => Zs.create({ ...e, coerce: !0 }),
  },
  cI = He;
var it = Object.freeze({
  __proto__: null,
  defaultErrorMap: Zo,
  setErrorMap: iF,
  getErrorMap: Hc,
  makeIssue: Zc,
  EMPTY_PATH: sF,
  addIssueToContext: ve,
  ParseStatus: mn,
  INVALID: He,
  DIRTY: Mo,
  OK: Sn,
  isAborted: Ap,
  isDirty: Np,
  isValid: Hs,
  isAsync: yl,
  get util() {
    return at;
  },
  get objectUtil() {
    return Rp;
  },
  ZodParsedType: Se,
  getParsedType: pi,
  ZodType: et,
  datetimeRegex: S1,
  ZodString: Sr,
  ZodNumber: as,
  ZodBigInt: ls,
  ZodBoolean: vl,
  ZodDate: Zs,
  ZodSymbol: Gc,
  ZodUndefined: xl,
  ZodNull: wl,
  ZodAny: Ko,
  ZodUnknown: Bs,
  ZodNever: bi,
  ZodVoid: qc,
  ZodArray: br,
  ZodObject: jt,
  ZodUnion: Sl,
  ZodDiscriminatedUnion: Ed,
  ZodIntersection: bl,
  ZodTuple: Gr,
  ZodRecord: El,
  ZodMap: Yc,
  ZodSet: Ks,
  ZodFunction: Bo,
  ZodLazy: _l,
  ZodLiteral: Cl,
  ZodEnum: us,
  ZodNativeEnum: kl,
  ZodPromise: Go,
  ZodEffects: Tr,
  ZodTransformer: Tr,
  ZodOptional: Hr,
  ZodNullable: cs,
  ZodDefault: Tl,
  ZodCatch: Pl,
  ZodNaN: Xc,
  BRAND: TF,
  ZodBranded: Xm,
  ZodPipeline: Zl,
  ZodReadonly: Rl,
  custom: E1,
  Schema: et,
  ZodSchema: et,
  late: PF,
  get ZodFirstPartyTypeKind() {
    return $e;
  },
  coerce: uI,
  any: MF,
  array: BF,
  bigint: NF,
  boolean: k1,
  date: jF,
  discriminatedUnion: WF,
  effect: v0,
  enum: JF,
  function: YF,
  instanceof: RF,
  intersection: HF,
  lazy: XF,
  literal: QF,
  map: GF,
  nan: AF,
  nativeEnum: eI,
  never: IF,
  null: LF,
  nullable: rI,
  number: C1,
  object: zF,
  oboolean: lI,
  onumber: aI,
  optional: nI,
  ostring: oI,
  pipeline: sI,
  preprocess: iI,
  promise: tI,
  record: KF,
  set: qF,
  strictObject: UF,
  string: _1,
  symbol: DF,
  transformer: v0,
  tuple: ZF,
  undefined: OF,
  union: $F,
  unknown: FF,
  void: VF,
  NEVER: cI,
  ZodIssueCode: oe,
  quotelessJson: rF,
  ZodError: Wn,
});
const dI = it.object({
    type: it.string(),
    company_name: it
      .string()
      .min(3, { message: "Название компании должно быть не менее 3 символов" }),
    representative_name: it
      .string()
      .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),
    job_title: it
      .string()
      .min(3, { message: "Должность должна быть не менее 3 символов" }),
    participants_number: it
      .string()
      .min(1, { message: "Укажите количество участников" }),
    country: it
      .string()
      .min(3, { message: "Название страны должно быть не менее 3 символов" }),
    email_address: it.string().email({ message: "Укажите корректный email" }),
    phone_number: it
      .string()
      .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),
    website: it.string().optional(),
    meeting_objective: it.string().optional(),
    proposal_description: it.string().optional(),
    government_agency: it.string().optional(),
    sector_industry: it.string().optional(),
    key_services: it.string().optional(),
    government_experience: it.string().optional(),
    preferred_meeting_datetime: it.string().optional(),
    meeting_mode: it.string().optional(),
    language_preference: it.string().optional(),
    technical_requirements: it.string().optional(),
    company_profile: it
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    proposal_presentation: it
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    relevant_certification: it
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
  }),
  fI = {
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
var hI = "Label",
  T1 = _.forwardRef((e, t) =>
    C.jsx(bn.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
T1.displayName = hI;
var P1 = T1;
const pI = nS(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  R1 = _.forwardRef(({ className: e, ...t }, n) =>
    C.jsx(P1, { ref: n, className: ot(pI(), e), ...t })
  );
R1.displayName = P1.displayName;
const A1 = uM,
  N1 = _.createContext({}),
  Qc = ({ ...e }) =>
    C.jsx(N1.Provider, {
      value: { name: e.name },
      children: C.jsx(hM, { ...e }),
    }),
  _d = () => {
    const e = _.useContext(N1),
      t = _.useContext(j1),
      { getFieldState: n, formState: i } = Qs(),
      o = n(e.name, i);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: a } = t;
    return {
      id: a,
      name: e.name,
      formItemId: `${a}-form-item`,
      formDescriptionId: `${a}-form-item-description`,
      formMessageId: `${a}-form-item-message`,
      ...o,
    };
  },
  j1 = _.createContext({}),
  yr = _.forwardRef(({ className: e, ...t }, n) => {
    const i = _.useId();
    return C.jsx(j1.Provider, {
      value: { id: i },
      children: C.jsx("div", { ref: n, className: ot("space-y-2", e), ...t }),
    });
  });
yr.displayName = "FormItem";
const vr = _.forwardRef(({ className: e, ...t }, n) => {
  const { error: i, formItemId: o } = _d();
  return C.jsx(R1, {
    ref: n,
    className: ot(i && "text-destructive", e),
    htmlFor: o,
    ...t,
  });
});
vr.displayName = "FormLabel";
const xr = _.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: i,
    formDescriptionId: o,
    formMessageId: a,
  } = _d();
  return C.jsx(zs, {
    ref: t,
    id: i,
    "aria-describedby": n ? `${o} ${a}` : `${o}`,
    "aria-invalid": !!n,
    ...e,
  });
});
xr.displayName = "FormControl";
const mI = _.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: i } = _d();
  return C.jsx("p", {
    ref: n,
    id: i,
    className: ot("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
mI.displayName = "FormDescription";
const D1 = _.forwardRef(({ className: e, children: t, ...n }, i) => {
  const { error: o, formMessageId: a } = _d(),
    l = o ? String(o == null ? void 0 : o.message) : t;
  return l
    ? C.jsx("p", {
        ref: i,
        id: a,
        className: ot("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: l,
      })
    : null;
});
D1.displayName = "FormMessage";
function gI(e) {
  const t = e + "CollectionProvider",
    [n, i] = Yo(t),
    [o, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (w) => {
      const { scope: x, children: S } = w,
        E = rt.useRef(null),
        b = rt.useRef(new Map()).current;
      return C.jsx(o, { scope: x, itemMap: b, collectionRef: E, children: S });
    };
  l.displayName = t;
  const c = e + "CollectionSlot",
    f = rt.forwardRef((w, x) => {
      const { scope: S, children: E } = w,
        b = a(c, S),
        P = Hn(x, b.collectionRef);
      return C.jsx(zs, { ref: P, children: E });
    });
  f.displayName = c;
  const h = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    g = rt.forwardRef((w, x) => {
      const { scope: S, children: E, ...b } = w,
        P = rt.useRef(null),
        R = Hn(x, P),
        j = a(h, S);
      return (
        rt.useEffect(
          () => (
            j.itemMap.set(P, { ref: P, ...b }), () => void j.itemMap.delete(P)
          )
        ),
        C.jsx(zs, { [p]: "", ref: R, children: E })
      );
    });
  g.displayName = h;
  function y(w) {
    const x = a(e + "CollectionConsumer", w);
    return rt.useCallback(() => {
      const E = x.collectionRef.current;
      if (!E) return [];
      const b = Array.from(E.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (j, T) => b.indexOf(j.ref.current) - b.indexOf(T.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: l, Slot: f, ItemSlot: g }, y, i];
}
var yI = _.createContext(void 0);
function O1(e) {
  const t = _.useContext(yI);
  return e || t || "ltr";
}
var Kh = "rovingFocusGroup.onEntryFocus",
  vI = { bubbles: !1, cancelable: !0 },
  Cd = "RovingFocusGroup",
  [Dp, L1, xI] = gI(Cd),
  [wI, M1] = Yo(Cd, [xI]),
  [SI, bI] = wI(Cd),
  F1 = _.forwardRef((e, t) =>
    C.jsx(Dp.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: C.jsx(Dp.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: C.jsx(EI, { ...e, ref: t }),
      }),
    })
  );
F1.displayName = Cd;
var EI = _.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: i,
        loop: o = !1,
        dir: a,
        currentTabStopId: l,
        defaultCurrentTabStopId: c,
        onCurrentTabStopIdChange: f,
        onEntryFocus: h,
        preventScrollOnEntryFocus: p = !1,
        ...g
      } = e,
      y = _.useRef(null),
      w = Hn(t, y),
      x = O1(a),
      [S = null, E] = im({ prop: l, defaultProp: c, onChange: f }),
      [b, P] = _.useState(!1),
      R = vi(h),
      j = L1(n),
      T = _.useRef(!1),
      [M, V] = _.useState(0);
    return (
      _.useEffect(() => {
        const F = y.current;
        if (F)
          return F.addEventListener(Kh, R), () => F.removeEventListener(Kh, R);
      }, [R]),
      C.jsx(SI, {
        scope: n,
        orientation: i,
        dir: x,
        loop: o,
        currentTabStopId: S,
        onItemFocus: _.useCallback((F) => E(F), [E]),
        onItemShiftTab: _.useCallback(() => P(!0), []),
        onFocusableItemAdd: _.useCallback(() => V((F) => F + 1), []),
        onFocusableItemRemove: _.useCallback(() => V((F) => F - 1), []),
        children: C.jsx(bn.div, {
          tabIndex: b || M === 0 ? -1 : 0,
          "data-orientation": i,
          ...g,
          ref: w,
          style: { outline: "none", ...e.style },
          onMouseDown: on(e.onMouseDown, () => {
            T.current = !0;
          }),
          onFocus: on(e.onFocus, (F) => {
            const Y = !T.current;
            if (F.target === F.currentTarget && Y && !b) {
              const Q = new CustomEvent(Kh, vI);
              if ((F.currentTarget.dispatchEvent(Q), !Q.defaultPrevented)) {
                const ce = j().filter((me) => me.focusable),
                  X = ce.find((me) => me.active),
                  ie = ce.find((me) => me.id === S),
                  pe = [X, ie, ...ce]
                    .filter(Boolean)
                    .map((me) => me.ref.current);
                B1(pe, p);
              }
            }
            T.current = !1;
          }),
          onBlur: on(e.onBlur, () => P(!1)),
        }),
      })
    );
  }),
  I1 = "RovingFocusGroupItem",
  V1 = _.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: i = !0,
        active: o = !1,
        tabStopId: a,
        ...l
      } = e,
      c = lS(),
      f = a || c,
      h = bI(I1, n),
      p = h.currentTabStopId === f,
      g = L1(n),
      { onFocusableItemAdd: y, onFocusableItemRemove: w } = h;
    return (
      _.useEffect(() => {
        if (i) return y(), () => w();
      }, [i, y, w]),
      C.jsx(Dp.ItemSlot, {
        scope: n,
        id: f,
        focusable: i,
        active: o,
        children: C.jsx(bn.span, {
          tabIndex: p ? 0 : -1,
          "data-orientation": h.orientation,
          ...l,
          ref: t,
          onMouseDown: on(e.onMouseDown, (x) => {
            i ? h.onItemFocus(f) : x.preventDefault();
          }),
          onFocus: on(e.onFocus, () => h.onItemFocus(f)),
          onKeyDown: on(e.onKeyDown, (x) => {
            if (x.key === "Tab" && x.shiftKey) {
              h.onItemShiftTab();
              return;
            }
            if (x.target !== x.currentTarget) return;
            const S = kI(x, h.orientation, h.dir);
            if (S !== void 0) {
              if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
              x.preventDefault();
              let b = g()
                .filter((P) => P.focusable)
                .map((P) => P.ref.current);
              if (S === "last") b.reverse();
              else if (S === "prev" || S === "next") {
                S === "prev" && b.reverse();
                const P = b.indexOf(x.currentTarget);
                b = h.loop ? TI(b, P + 1) : b.slice(P + 1);
              }
              setTimeout(() => B1(b));
            }
          }),
        }),
      })
    );
  });
V1.displayName = I1;
var _I = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function CI(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function kI(e, t, n) {
  const i = CI(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))
  )
    return _I[i];
}
function B1(e, t = !1) {
  const n = document.activeElement;
  for (const i of e)
    if (
      i === n ||
      (i.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function TI(e, t) {
  return e.map((n, i) => e[(t + i) % e.length]);
}
var PI = F1,
  RI = V1;
function AI(e) {
  const t = _.useRef({ value: e, previous: e });
  return _.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var Qm = "Radio",
  [NI, z1] = Yo(Qm),
  [jI, DI] = NI(Qm),
  U1 = _.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: i,
        checked: o = !1,
        required: a,
        disabled: l,
        value: c = "on",
        onCheck: f,
        form: h,
        ...p
      } = e,
      [g, y] = _.useState(null),
      w = Hn(t, (E) => y(E)),
      x = _.useRef(!1),
      S = g ? h || !!g.closest("form") : !0;
    return C.jsxs(jI, {
      scope: n,
      checked: o,
      disabled: l,
      children: [
        C.jsx(bn.button, {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": H1(o),
          "data-disabled": l ? "" : void 0,
          disabled: l,
          value: c,
          ...p,
          ref: w,
          onClick: on(e.onClick, (E) => {
            o || f == null || f(),
              S &&
                ((x.current = E.isPropagationStopped()),
                x.current || E.stopPropagation());
          }),
        }),
        S &&
          C.jsx(OI, {
            control: g,
            bubbles: !x.current,
            name: i,
            value: c,
            checked: o,
            required: a,
            disabled: l,
            form: h,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
U1.displayName = Qm;
var $1 = "RadioIndicator",
  W1 = _.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: i, ...o } = e,
      a = DI($1, n);
    return C.jsx(ld, {
      present: i || a.checked,
      children: C.jsx(bn.span, {
        "data-state": H1(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
      }),
    });
  });
W1.displayName = $1;
var OI = (e) => {
  const { control: t, checked: n, bubbles: i = !0, ...o } = e,
    a = _.useRef(null),
    l = AI(n),
    c = wS(t);
  return (
    _.useEffect(() => {
      const f = a.current,
        h = window.HTMLInputElement.prototype,
        g = Object.getOwnPropertyDescriptor(h, "checked").set;
      if (l !== n && g) {
        const y = new Event("click", { bubbles: i });
        g.call(f, n), f.dispatchEvent(y);
      }
    }, [l, n, i]),
    C.jsx("input", {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...c,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function H1(e) {
  return e ? "checked" : "unchecked";
}
var LI = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Jm = "RadioGroup",
  [MI, JV] = Yo(Jm, [M1, z1]),
  Z1 = M1(),
  K1 = z1(),
  [FI, II] = MI(Jm),
  G1 = _.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: i,
        defaultValue: o,
        value: a,
        required: l = !1,
        disabled: c = !1,
        orientation: f,
        dir: h,
        loop: p = !0,
        onValueChange: g,
        ...y
      } = e,
      w = Z1(n),
      x = O1(h),
      [S, E] = im({ prop: a, defaultProp: o, onChange: g });
    return C.jsx(FI, {
      scope: n,
      name: i,
      required: l,
      disabled: c,
      value: S,
      onValueChange: E,
      children: C.jsx(PI, {
        asChild: !0,
        ...w,
        orientation: f,
        dir: x,
        loop: p,
        children: C.jsx(bn.div, {
          role: "radiogroup",
          "aria-required": l,
          "aria-orientation": f,
          "data-disabled": c ? "" : void 0,
          dir: x,
          ...y,
          ref: t,
        }),
      }),
    });
  });
G1.displayName = Jm;
var q1 = "RadioGroupItem",
  Y1 = _.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: i, ...o } = e,
      a = II(q1, n),
      l = a.disabled || i,
      c = Z1(n),
      f = K1(n),
      h = _.useRef(null),
      p = Hn(t, h),
      g = a.value === o.value,
      y = _.useRef(!1);
    return (
      _.useEffect(() => {
        const w = (S) => {
            LI.includes(S.key) && (y.current = !0);
          },
          x = () => (y.current = !1);
        return (
          document.addEventListener("keydown", w),
          document.addEventListener("keyup", x),
          () => {
            document.removeEventListener("keydown", w),
              document.removeEventListener("keyup", x);
          }
        );
      }, []),
      C.jsx(RI, {
        asChild: !0,
        ...c,
        focusable: !l,
        active: g,
        children: C.jsx(U1, {
          disabled: l,
          required: a.required,
          checked: g,
          ...f,
          ...o,
          name: a.name,
          ref: p,
          onCheck: () => a.onValueChange(o.value),
          onKeyDown: on((w) => {
            w.key === "Enter" && w.preventDefault();
          }),
          onFocus: on(o.onFocus, () => {
            var w;
            y.current && ((w = h.current) == null || w.click());
          }),
        }),
      })
    );
  });
Y1.displayName = q1;
var VI = "RadioGroupIndicator",
  BI = _.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...i } = e,
      o = K1(n);
    return C.jsx(W1, { ...o, ...i, ref: t });
  });
BI.displayName = VI;
var X1 = G1,
  Q1 = Y1;
const Jc = _.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(X1, { className: ot("grid gap-2", e), ...t, ref: n })
);
Jc.displayName = X1.displayName;
const Fs = _.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(Q1, {
    ref: n,
    className: ot(
      t.checked
        ? "border-primary after:bg-opacity-1"
        : "border-on_surface bg-transparent after:bg-opacity-0",
      "size-5 rounded-full border-[2px] after:size-[9px] after:bg-primary before:scale-0  hover:before:scale-100 before:size-10 before:rounded-full before:transition-all before:absolute before:-top-3 before:-left-3 before:bg-on_surface/[8%] duration-300 after:rounded-full flex relative items-center justify-center text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
  })
);
Fs.displayName = Q1.displayName;
const zI = ({ handleNext: e }) => {
    const { control: t, formState: n } = Qs();
    return C.jsxs(yi.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, y: "100%", transition: { duration: 0.2 } },
      className: "w-full",
      children: [
        C.jsx("h3", {
          className: "h2 mb-8",
          children: "Информация об экспоненте:",
        }),
        C.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            C.jsx(Qc, {
              defaultValue: 1,
              control: t,
              name: "type",
              render: ({ field: i }) =>
                C.jsxs(yr, {
                  className: "space-y-3",
                  children: [
                    C.jsx(vr, { className: "text-xl", children: "Тип:" }),
                    C.jsx(xr, {
                      children: C.jsxs(Jc, {
                        onValueChange: i.onChange,
                        defaultValue: i.value,
                        className: "flex flex-col space-y-4",
                        children: [
                          C.jsxs(yr, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              C.jsx(xr, {
                                children: C.jsx(Fs, {
                                  value: "B2B",
                                  checked: i.value === "B2B",
                                }),
                              }),
                              C.jsx(vr, {
                                className: "text-base",
                                children: "B2B",
                              }),
                            ],
                          }),
                          C.jsxs(yr, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              C.jsx(xr, {
                                children: C.jsx(Fs, {
                                  value: "B2G",
                                  checked: i.value === "B2G",
                                }),
                              }),
                              C.jsx(vr, {
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
            C.jsx(ft, {
              control: t,
              name: "company_name",
              error: n.errors.company_name,
              placeholder: "",
              label: "Название компании/организации",
            }),
            C.jsx(ft, {
              control: t,
              name: "representative_name",
              error: n.errors.representative_name,
              placeholder: "",
              label: "Имя представителя",
            }),
            C.jsx(ft, {
              control: t,
              name: "job_title",
              error: n.errors.job_title,
              placeholder: "",
              label: "Название должности/позиция",
            }),
            C.jsx(ft, {
              control: t,
              name: "participants_number",
              error: n.errors.participants_number,
              placeholder: "",
              label: "Количество участников",
            }),
            C.jsx(ft, {
              control: t,
              name: "country",
              error: n.errors.country,
              placeholder: "",
              label: "Страна",
            }),
            C.jsx(ft, {
              control: t,
              name: "email_address",
              error: n.errors.email_address,
              placeholder: "",
              label: "E-mail адрес",
            }),
            C.jsx(ft, {
              control: t,
              name: "phone_number",
              error: n.errors.phone_number,
              placeholder: "",
              label: "Номер телефона",
            }),
            C.jsx(ft, {
              control: t,
              name: "website",
              placeholder: "",
              label: "Вебсайт",
            }),
          ],
        }),
        C.jsx(wn, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: "Далее",
        }),
      ],
    });
  },
  UI = ({ handleNext: e }) => {
    const { control: t, formState: n } = Qs();
    return C.jsxs(yi.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      exit: { opacity: 0, y: 100 },
      children: [
        C.jsx("h3", { className: "h2 mb-8", children: "Цели встречи:" }),
        C.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            C.jsx(ft, {
              control: t,
              name: "meeting_objective",
              error: n.errors.meeting_objective,
              placeholder: "",
              label: "Основная цель встречи",
            }),
            C.jsx(ft, {
              control: t,
              name: "proposal_description",
              error: n.errors.proposal_description,
              placeholder: "",
              label: "Краткое описание вашего предложения/проекта/запроса",
            }),
            C.jsx(ft, {
              control: t,
              name: "government_agency",
              error: n.errors.government_agency,
              placeholder: "",
              label: "Соответствующее государственное учреждение/департамент",
            }),
            C.jsx("h3", {
              className: "h2 mt-4",
              children: "Информация о компании/организации:",
            }),
            C.jsx(ft, {
              control: t,
              name: "sector_industry",
              error: n.errors.sector_industry,
              placeholder: "",
              label: "Отраслевая промышленность",
            }),
            C.jsx(ft, {
              control: t,
              name: "key_services",
              error: n.errors.key_services,
              placeholder: "",
              label: "Ключевые услуги/продукты",
            }),
            C.jsx(ft, {
              control: t,
              name: "government_experience",
              error: n.errors.government_experience,
              placeholder: "",
              label:
                "Предыдущий опыт работы с правительствами (если применимо)",
            }),
          ],
        }),
        C.jsx(wn, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: "Далее",
        }),
      ],
    });
  },
  Op = _.forwardRef(({ className: e, type: t, ...n }, i) =>
    t !== "file"
      ? C.jsx("input", {
          type: t,
          className: ot(
            "flex h-14 rounded-[2px] border p-4 focus:border-[3px] focus:outline-none focus:border-primary transition-all hover:border-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            e
          ),
          ref: i,
          ...n,
        })
      : C.jsxs("div", {
          className: "relative w-[160px] h-9 overflow-hidden !cursor-pointer",
          children: [
            C.jsx("input", {
              ref: i,
              accept: ".pdf, .png, .jpeg, .jpg",
              type: t,
              className: ot(
                "h-9 absolute top-0 left-0 !cursor-pointer opacity-0 z-20 size-full"
              ),
              onChange: n.onChange,
              ...n,
            }),
            C.jsxs("div", {
              className:
                "absolute rounded-[2px] cursor-pointer size-full flex items-center gap-4 px-3 py-2.5 top-0 left-0 bg-secondary_container",
              children: [
                C.jsx(WP, { className: "cursor-pointer", size: 16 }),
                " Upload file",
              ],
            }),
          ],
        })
  );
Op.displayName = "Input";
const ft = ({
    control: e,
    name: t,
    label: n,
    placeholder: i,
    error: o,
    type: a = "text",
    className: l,
    disabled: c,
    ref: f,
    textDark: h,
    supporText: p,
    handleChange: g,
  }) =>
    C.jsx(Qc, {
      control: e,
      name: t,
      render: ({ field: y }) =>
        C.jsxs(yr, {
          className: ot(l, "flex flex-col w-full relative"),
          children: [
            C.jsx(vr, {
              className: ot(
                "text-xl",
                h ? "text-on_surface" : "text-on_surface_v"
              ),
              children: n,
            }),
            C.jsx(xr, {
              children: C.jsxs(C.Fragment, {
                children: [
                  a !== "file" &&
                    C.jsx(Op, {
                      type: a,
                      placeholder: i,
                      ...y,
                      disabled: c,
                      className: o && "border-[#BA1A1A]",
                    }),
                  a === "file" &&
                    C.jsxs("div", {
                      className: "relative",
                      children: [
                        C.jsx(Op, {
                          ref: f,
                          type: "file",
                          placeholder: i,
                          onChange: (w) => {
                            var S;
                            const x =
                              ((S = w.target.files) == null ? void 0 : S[0]) ||
                              null;
                            console.log("Выбранный файл:", x),
                              y.onChange(x),
                              g && g(w);
                          },
                          disabled: c,
                          className:
                            (o == null ? void 0 : o.message) &&
                            "border-[#BA1A1A]",
                        }),
                        y.value &&
                          C.jsxs("div", {
                            className:
                              "text-sm mt-2 text-gray-500 absolute top-8",
                            children: ["Выбранный файл: ", y.value.name],
                          }),
                      ],
                    }),
                ],
              }),
            }),
            C.jsx(D1, {
              className: ot(
                "absolute -bottom-5 left-0 text-sm font-medium leading-[130%] ",
                !!o && "text-[#BA1A1A]"
              ),
              children: o ? o.message : p,
            }),
          ],
        }),
    }),
  $I = () => {
    const { control: e, formState: t } = Qs();
    return C.jsxs(yi.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      transition: { duration: 1 },
      children: [
        C.jsx("h3", { className: "h2 mb-8", children: "Логистика встречи:" }),
        C.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            C.jsx(ft, {
              control: e,
              name: "preferred_meeting_datetime",
              error: t.errors.preferred_meeting_datetime,
              placeholder: "",
              label: "Предпочтительная дата и время ",
            }),
            C.jsx(ft, {
              control: e,
              name: "preferred_mode",
              error: t.errors.preferred_mode,
              placeholder: "",
              label:
                "Предпочтительный способ проведения встречи (лично, виртуально (через zoom/ teams/другое), гибридный)",
            }),
            C.jsx(ft, {
              control: e,
              name: "language_preference",
              error: t.errors.language_preference,
              placeholder: "",
              label:
                "Предпочитаемый язык (английский, туркменский, русский, другой)",
            }),
            C.jsx(ft, {
              control: e,
              name: "additional_technical",
              error: t.errors.additional_technical,
              placeholder: "",
              label:
                "Дополнительные технические или логистические требования (например, аудио-видео оборудование, переводчики и т.д.)",
            }),
            C.jsx("h3", {
              className: "h2 mt-4",
              children: "Название компании/организации",
            }),
            C.jsx(ft, {
              control: e,
              name: "sector_industry",
              error: t.errors.sector_industry,
              placeholder: "",
              label: "Sector Industry",
            }),
            C.jsx(ft, {
              control: e,
              name: "key_services",
              error: t.errors.key_services,
              placeholder: "",
              label: "Key Services/Products",
            }),
            C.jsx(ft, {
              control: e,
              name: "government_experience",
              error: t.errors.government_experience,
              placeholder: "",
              label:
                "Previous Experience working with Governments (if applicable)",
            }),
          ],
        }),
        C.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            C.jsxs("div", {
              className: "",
              children: [
                C.jsx("h3", { className: "h2 mt-10", children: "Attachments" }),
                C.jsx("h5", {
                  className: "text-on_surface_v",
                  children:
                    "(Please attach the following documents as applicable)",
                }),
              ],
            }),
            C.jsx(ft, {
              control: e,
              name: "company_profile",
              label: "Company/organization profile",
              type: "file",
              textDark: !0,
            }),
            C.jsx(ft, {
              control: e,
              name: "proposal_presentation",
              label: "Proposal presentation",
              type: "file",
              textDark: !0,
            }),
            C.jsx(ft, {
              control: e,
              name: "relevant_certification",
              label: "Relevant certification/licenses",
              type: "file",
              textDark: !0,
            }),
          ],
        }),
        C.jsx(wn, {
          disabled: t.isSubmitting,
          type: "submit",
          className: "w-full mt-10",
          children: t.isSubmitting
            ? C.jsx(eS, { className: "animate-spin" })
            : "Отправить",
        }),
      ],
    });
  },
  WI = ({ stage: e, setStage: t }) => {
    const [n, i] = _.useState(!1),
      o = WE({ resolver: ZE(dI), defaultValues: fI, mode: "onChange" }),
      a = (f) => {
        switch (f) {
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
      l = async () => {
        const f = a(e);
        (await o.trigger(f)) && t((p) => p + 1);
      },
      c = async (f) => {
        try {
          const h = new FormData();
          Object.entries(f).forEach(([g, y]) => {
            y instanceof File
              ? (console.log(`Добавляем файл: ${g}`, y), h.append(g, y))
              : y !== void 0 &&
                (console.log(`Добавляем поле: ${g}`, y), h.append(g, y));
          }),
            (
              await Ut.post("https://itse.turkmenexpo.com/app/api/v1/form", h, {
                headers: { "Content-Type": "multipart/form-data" },
              })
            ).status === 201 &&
              (console.log("Форма успешно отправлена!"), i(!0));
        } catch (h) {
          console.error("Ошибка при отправке формы:", h);
        }
      };
    return C.jsx(A1, {
      ...o,
      children: C.jsx("form", {
        onSubmit: o.handleSubmit(c),
        children: C.jsxs("div", {
          className: "relative",
          children: [
            C.jsx(vc, { children: e === 1 && C.jsx(zI, { handleNext: l }) }),
            C.jsx(vc, { children: e === 2 && C.jsx(UI, { handleNext: l }) }),
            C.jsx(vc, { children: e === 3 && n === !1 && C.jsx($I, {}) }),
            n &&
              C.jsxs(yi.div, {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                className: "flex flex-col gap-8 mt-20",
                children: [
                  C.jsx("h3", {
                    className: "text-3xl text-center ",
                    children: "Форма успешно отправлена!",
                  }),
                  C.jsx(sr, {
                    className: "w-fit mx-auto",
                    to: "/",
                    children: C.jsx(wn, {
                      variant: "outline",
                      children: "Вернуться на главную",
                    }),
                  }),
                ],
              }),
          ],
        }),
      }),
    });
  },
  HI = ({ className: e, stage: t }) =>
    C.jsx("div", {
      className: e,
      children: C.jsx("div", {
        className: "w-[808px] mx-auto my-20",
        children: C.jsxs("div", {
          className: "relative h-14 w-full",
          children: [
            C.jsx("div", {
              className: ot(
                "h-2 absolute bg-[#D0D3D8] rounded-[2px] w-full top-0 left-0"
              ),
            }),
            C.jsx(yi.div, {
              initial: { width: 0 },
              animate: t === 2 ? { width: "20%" } : t === 3 && { width: "75%" },
              transition: { delay: 0.5, duration: 0.5 },
              className: ot(
                "h-2 absolute bg-primary rounded-[2px] top-0 left-0 z-[5]",
                { "w-[20%]": t === 2, "w-[75%]": t === 3 }
              ),
            }),
            C.jsx(yi.div, {
              initial: { width: "50%" },
              animate:
                t === 2 ? { width: "75%" } : t === 3 && { width: "100%" },
              className: ot(
                "bg-primary_container w-1/2 absolute top-0 left-0 rounded-[2px] z-[3] h-2"
              ),
            }),
            C.jsx(yi.div, {
              className: ot(
                "progress-circle absolute transition-all duration-500 -top-6 flex items-center justify-center",
                {
                  "bg-primary_container left-1/2": t === 1,
                  "bg-primary left-[20%] !text-on_primary": t === 2 || t === 3,
                }
              ),
              children: "1",
            }),
            C.jsx("div", {
              className: ot(
                "progress-circle absolute -top-6 right-[17%] transition-all -translate-x-1/2 flex items-center justify-center",
                {
                  "bg-[#D0D3D8]": t === 1,
                  "bg-primary_container": t === 2,
                  "bg-primary !text-on_primary": t === 3,
                }
              ),
              children: "2",
            }),
            C.jsx("div", {
              className: ot(
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
    }),
  ZI = ({ className: e, delay: t = 0.15 }) =>
    C.jsxs(yi.div, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: t } },
      className: ot("flex flex-col gap-8 mt-20", e),
      children: [
        C.jsx("h3", {
          className: "text-3xl text-center",
          children: "Форма успешно отправлена!",
        }),
        C.jsx(sr, {
          className: "w-fit mx-auto",
          to: "/",
          children: C.jsx(wn, {
            variant: "outline",
            children: "Вернуться на главную",
          }),
        }),
      ],
    });
function KI(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function x0(e) {
  return KI(e) || Array.isArray(e);
}
function GI() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function eg(e, t) {
  const n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})),
    a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a
    ? !1
    : n.every((l) => {
        const c = e[l],
          f = t[l];
        return typeof c == "function"
          ? `${c}` == `${f}`
          : !x0(c) || !x0(f)
          ? c === f
          : eg(c, f);
      });
}
function w0(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function qI(e, t) {
  if (e.length !== t.length) return !1;
  const n = w0(e),
    i = w0(t);
  return n.every((o, a) => {
    const l = i[a];
    return eg(o, l);
  });
}
function tg(e) {
  return typeof e == "number";
}
function Lp(e) {
  return typeof e == "string";
}
function kd(e) {
  return typeof e == "boolean";
}
function S0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ot(e) {
  return Math.abs(e);
}
function ng(e) {
  return Math.sign(e);
}
function ol(e, t) {
  return Ot(e - t);
}
function YI(e, t) {
  if (e === 0 || t === 0 || Ot(e) <= Ot(t)) return 0;
  const n = ol(Ot(e), Ot(t));
  return Ot(n / e);
}
function XI(e) {
  return Math.round(e * 100) / 100;
}
function Al(e) {
  return Nl(e).map(Number);
}
function Er(e) {
  return e[Kl(e)];
}
function Kl(e) {
  return Math.max(0, e.length - 1);
}
function rg(e, t) {
  return t === Kl(e);
}
function b0(e, t = 0) {
  return Array.from(Array(e), (n, i) => t + i);
}
function Nl(e) {
  return Object.keys(e);
}
function J1(e, t) {
  return [e, t].reduce(
    (n, i) => (
      Nl(i).forEach((o) => {
        const a = n[o],
          l = i[o],
          c = S0(a) && S0(l);
        n[o] = c ? J1(a, l) : l;
      }),
      n
    ),
    {}
  );
}
function Mp(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function QI(e, t) {
  const n = { start: i, center: o, end: a };
  function i() {
    return 0;
  }
  function o(f) {
    return a(f) / 2;
  }
  function a(f) {
    return t - f;
  }
  function l(f, h) {
    return Lp(e) ? n[e](f) : e(t, f, h);
  }
  return { measure: l };
}
function jl() {
  let e = [];
  function t(o, a, l, c = { passive: !0 }) {
    let f;
    if ("addEventListener" in o)
      o.addEventListener(a, l, c), (f = () => o.removeEventListener(a, l, c));
    else {
      const h = o;
      h.addListener(l), (f = () => h.removeListener(l));
    }
    return e.push(f), i;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const i = { add: t, clear: n };
  return i;
}
function JI(e, t, n, i) {
  const o = jl(),
    a = 1e3 / 60;
  let l = null,
    c = 0,
    f = 0;
  function h() {
    o.add(e, "visibilitychange", () => {
      e.hidden && x();
    });
  }
  function p() {
    w(), o.clear();
  }
  function g(E) {
    if (!f) return;
    l || ((l = E), n(), n());
    const b = E - l;
    for (l = E, c += b; c >= a; ) n(), (c -= a);
    const P = c / a;
    i(P), f && (f = t.requestAnimationFrame(g));
  }
  function y() {
    f || (f = t.requestAnimationFrame(g));
  }
  function w() {
    t.cancelAnimationFrame(f), (l = null), (c = 0), (f = 0);
  }
  function x() {
    (l = null), (c = 0);
  }
  return { init: h, destroy: p, start: y, stop: w, update: n, render: i };
}
function eV(e, t) {
  const n = t === "rtl",
    i = e === "y",
    o = i ? "y" : "x",
    a = i ? "x" : "y",
    l = !i && n ? -1 : 1,
    c = p(),
    f = g();
  function h(x) {
    const { height: S, width: E } = x;
    return i ? S : E;
  }
  function p() {
    return i ? "top" : n ? "right" : "left";
  }
  function g() {
    return i ? "bottom" : n ? "left" : "right";
  }
  function y(x) {
    return x * l;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: c,
    endEdge: f,
    measureSize: h,
    direction: y,
  };
}
function Gs(e = 0, t = 0) {
  const n = Ot(e - t);
  function i(h) {
    return h < e;
  }
  function o(h) {
    return h > t;
  }
  function a(h) {
    return i(h) || o(h);
  }
  function l(h) {
    return a(h) ? (i(h) ? e : t) : h;
  }
  function c(h) {
    return n ? h - n * Math.ceil((h - t) / n) : h;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: l,
    reachedAny: a,
    reachedMax: o,
    reachedMin: i,
    removeOffset: c,
  };
}
function e_(e, t, n) {
  const { constrain: i } = Gs(0, e),
    o = e + 1;
  let a = l(t);
  function l(y) {
    return n ? Ot((o + y) % o) : i(y);
  }
  function c() {
    return a;
  }
  function f(y) {
    return (a = l(y)), g;
  }
  function h(y) {
    return p().set(c() + y);
  }
  function p() {
    return e_(e, c(), n);
  }
  const g = { get: c, set: f, add: h, clone: p };
  return g;
}
function tV(e, t, n, i, o, a, l, c, f, h, p, g, y, w, x, S, E, b, P) {
  const { cross: R, direction: j } = e,
    T = ["INPUT", "SELECT", "TEXTAREA"],
    M = { passive: !1 },
    V = jl(),
    F = jl(),
    Y = Gs(50, 225).constrain(w.measure(20)),
    Q = { mouse: 300, touch: 400 },
    ce = { mouse: 500, touch: 600 },
    X = x ? 43 : 25;
  let ie = !1,
    he = 0,
    pe = 0,
    me = !1,
    le = !1,
    H = !1,
    J = !1;
  function ee(_e) {
    if (!P) return;
    function We(Pt) {
      (kd(P) || P(_e, Pt)) && ze(Pt);
    }
    const ct = t;
    V.add(ct, "dragstart", (Pt) => Pt.preventDefault(), M)
      .add(ct, "touchmove", () => {}, M)
      .add(ct, "touchend", () => {})
      .add(ct, "touchstart", We)
      .add(ct, "mousedown", We)
      .add(ct, "touchcancel", Te)
      .add(ct, "contextmenu", Te)
      .add(ct, "click", Re, !0);
  }
  function O() {
    V.clear(), F.clear();
  }
  function q() {
    const _e = J ? n : t;
    F.add(_e, "touchmove", be, M)
      .add(_e, "touchend", Te)
      .add(_e, "mousemove", be, M)
      .add(_e, "mouseup", Te);
  }
  function Ne(_e) {
    const We = _e.nodeName || "";
    return T.includes(We);
  }
  function Me() {
    return (x ? ce : Q)[J ? "mouse" : "touch"];
  }
  function Ie(_e, We) {
    const ct = g.add(ng(_e) * -1),
      Pt = p.byDistance(_e, !x).distance;
    return x || Ot(_e) < Y
      ? Pt
      : E && We
      ? Pt * 0.5
      : p.byIndex(ct.get(), 0).distance;
  }
  function ze(_e) {
    const We = Mp(_e, i);
    (J = We),
      (H = x && We && !_e.buttons && ie),
      (ie = ol(o.get(), l.get()) >= 2),
      !(We && _e.button !== 0) &&
        (Ne(_e.target) ||
          ((me = !0),
          a.pointerDown(_e),
          h.useFriction(0).useDuration(0),
          o.set(l),
          q(),
          (he = a.readPoint(_e)),
          (pe = a.readPoint(_e, R)),
          y.emit("pointerDown")));
  }
  function be(_e) {
    if (!Mp(_e, i) && _e.touches.length >= 2) return Te(_e);
    const ct = a.readPoint(_e),
      Pt = a.readPoint(_e, R),
      Wt = ol(ct, he),
      Xt = ol(Pt, pe);
    if (!le && !J && (!_e.cancelable || ((le = Wt > Xt), !le))) return Te(_e);
    const N = a.pointerMove(_e);
    Wt > S && (H = !0),
      h.useFriction(0.3).useDuration(0.75),
      c.start(),
      o.add(j(N)),
      _e.preventDefault();
  }
  function Te(_e) {
    const ct = p.byDistance(0, !1).index !== g.get(),
      Pt = a.pointerUp(_e) * Me(),
      Wt = Ie(j(Pt), ct),
      Xt = YI(Pt, Wt),
      N = X - 10 * Xt,
      z = b + Xt / 50;
    (le = !1),
      (me = !1),
      F.clear(),
      h.useDuration(N).useFriction(z),
      f.distance(Wt, !x),
      (J = !1),
      y.emit("pointerUp");
  }
  function Re(_e) {
    H && (_e.stopPropagation(), _e.preventDefault(), (H = !1));
  }
  function Xe() {
    return me;
  }
  return { init: ee, destroy: O, pointerDown: Xe };
}
function nV(e, t) {
  let i, o;
  function a(g) {
    return g.timeStamp;
  }
  function l(g, y) {
    const x = `client${(y || e.scroll) === "x" ? "X" : "Y"}`;
    return (Mp(g, t) ? g : g.touches[0])[x];
  }
  function c(g) {
    return (i = g), (o = g), l(g);
  }
  function f(g) {
    const y = l(g) - l(o),
      w = a(g) - a(i) > 170;
    return (o = g), w && (i = g), y;
  }
  function h(g) {
    if (!i || !o) return 0;
    const y = l(o) - l(i),
      w = a(g) - a(i),
      x = a(g) - a(o) > 170,
      S = y / w;
    return w && !x && Ot(S) > 0.1 ? S : 0;
  }
  return { pointerDown: c, pointerMove: f, pointerUp: h, readPoint: l };
}
function rV() {
  function e(n) {
    const { offsetTop: i, offsetLeft: o, offsetWidth: a, offsetHeight: l } = n;
    return {
      top: i,
      right: o + a,
      bottom: i + l,
      left: o,
      width: a,
      height: l,
    };
  }
  return { measure: e };
}
function iV(e) {
  function t(i) {
    return e * (i / 100);
  }
  return { measure: t };
}
function sV(e, t, n, i, o, a, l) {
  const c = [e].concat(i);
  let f,
    h,
    p = [],
    g = !1;
  function y(E) {
    return o.measureSize(l.measure(E));
  }
  function w(E) {
    if (!a) return;
    (h = y(e)), (p = i.map(y));
    function b(P) {
      for (const R of P) {
        if (g) return;
        const j = R.target === e,
          T = i.indexOf(R.target),
          M = j ? h : p[T],
          V = y(j ? e : i[T]);
        if (Ot(V - M) >= 0.5) {
          E.reInit(), t.emit("resize");
          break;
        }
      }
    }
    (f = new ResizeObserver((P) => {
      (kd(a) || a(E, P)) && b(P);
    })),
      n.requestAnimationFrame(() => {
        c.forEach((P) => f.observe(P));
      });
  }
  function x() {
    (g = !0), f && f.disconnect();
  }
  return { init: w, destroy: x };
}
function oV(e, t, n, i, o, a) {
  let l = 0,
    c = 0,
    f = o,
    h = a,
    p = e.get(),
    g = 0;
  function y() {
    const M = i.get() - e.get(),
      V = !f;
    let F = 0;
    return (
      V
        ? ((l = 0), n.set(i), e.set(i), (F = M))
        : (n.set(e), (l += M / f), (l *= h), (p += l), e.add(l), (F = p - g)),
      (c = ng(F)),
      (g = p),
      T
    );
  }
  function w() {
    const M = i.get() - t.get();
    return Ot(M) < 0.001;
  }
  function x() {
    return f;
  }
  function S() {
    return c;
  }
  function E() {
    return l;
  }
  function b() {
    return R(o);
  }
  function P() {
    return j(a);
  }
  function R(M) {
    return (f = M), T;
  }
  function j(M) {
    return (h = M), T;
  }
  const T = {
    direction: S,
    duration: x,
    velocity: E,
    seek: y,
    settled: w,
    useBaseFriction: P,
    useBaseDuration: b,
    useFriction: j,
    useDuration: R,
  };
  return T;
}
function aV(e, t, n, i, o) {
  const a = o.measure(10),
    l = o.measure(50),
    c = Gs(0.1, 0.99);
  let f = !1;
  function h() {
    return !(f || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function p(w) {
    if (!h()) return;
    const x = e.reachedMin(t.get()) ? "min" : "max",
      S = Ot(e[x] - t.get()),
      E = n.get() - t.get(),
      b = c.constrain(S / l);
    n.subtract(E * b),
      !w &&
        Ot(E) < a &&
        (n.set(e.constrain(n.get())), i.useDuration(25).useBaseFriction());
  }
  function g(w) {
    f = !w;
  }
  return { shouldConstrain: h, constrain: p, toggleActive: g };
}
function lV(e, t, n, i, o) {
  const a = Gs(-t + e, 0),
    l = g(),
    c = p(),
    f = y();
  function h(x, S) {
    return ol(x, S) <= 1;
  }
  function p() {
    const x = l[0],
      S = Er(l),
      E = l.lastIndexOf(x),
      b = l.indexOf(S) + 1;
    return Gs(E, b);
  }
  function g() {
    return n
      .map((x, S) => {
        const { min: E, max: b } = a,
          P = a.constrain(x),
          R = !S,
          j = rg(n, S);
        return R ? b : j || h(E, P) ? E : h(b, P) ? b : P;
      })
      .map((x) => parseFloat(x.toFixed(3)));
  }
  function y() {
    if (t <= e + o) return [a.max];
    if (i === "keepSnaps") return l;
    const { min: x, max: S } = c;
    return l.slice(x, S);
  }
  return { snapsContained: f, scrollContainLimit: c };
}
function uV(e, t, n) {
  const i = t[0],
    o = n ? i - e : Er(t);
  return { limit: Gs(o, i) };
}
function cV(e, t, n, i) {
  const a = t.min + 0.1,
    l = t.max + 0.1,
    { reachedMin: c, reachedMax: f } = Gs(a, l);
  function h(y) {
    return y === 1 ? f(n.get()) : y === -1 ? c(n.get()) : !1;
  }
  function p(y) {
    if (!h(y)) return;
    const w = e * (y * -1);
    i.forEach((x) => x.add(w));
  }
  return { loop: p };
}
function dV(e) {
  const { max: t, length: n } = e;
  function i(a) {
    const l = a - t;
    return n ? l / -n : 0;
  }
  return { get: i };
}
function fV(e, t, n, i, o) {
  const { startEdge: a, endEdge: l } = e,
    { groupSlides: c } = o,
    f = g().map(t.measure),
    h = y(),
    p = w();
  function g() {
    return c(i)
      .map((S) => Er(S)[l] - S[0][a])
      .map(Ot);
  }
  function y() {
    return i.map((S) => n[a] - S[a]).map((S) => -Ot(S));
  }
  function w() {
    return c(h)
      .map((S) => S[0])
      .map((S, E) => S + f[E]);
  }
  return { snaps: h, snapsAligned: p };
}
function hV(e, t, n, i, o, a) {
  const { groupSlides: l } = o,
    { min: c, max: f } = i,
    h = p();
  function p() {
    const y = l(a),
      w = !e || t === "keepSnaps";
    return n.length === 1
      ? [a]
      : w
      ? y
      : y.slice(c, f).map((x, S, E) => {
          const b = !S,
            P = rg(E, S);
          if (b) {
            const R = Er(E[0]) + 1;
            return b0(R);
          }
          if (P) {
            const R = Kl(a) - Er(E)[0] + 1;
            return b0(R, Er(E)[0]);
          }
          return x;
        });
  }
  return { slideRegistry: h };
}
function pV(e, t, n, i, o) {
  const { reachedAny: a, removeOffset: l, constrain: c } = i;
  function f(x) {
    return x.concat().sort((S, E) => Ot(S) - Ot(E))[0];
  }
  function h(x) {
    const S = e ? l(x) : c(x),
      E = t
        .map((P, R) => ({ diff: p(P - S, 0), index: R }))
        .sort((P, R) => Ot(P.diff) - Ot(R.diff)),
      { index: b } = E[0];
    return { index: b, distance: S };
  }
  function p(x, S) {
    const E = [x, x + n, x - n];
    if (!e) return x;
    if (!S) return f(E);
    const b = E.filter((P) => ng(P) === S);
    return b.length ? f(b) : Er(E) - n;
  }
  function g(x, S) {
    const E = t[x] - o.get(),
      b = p(E, S);
    return { index: x, distance: b };
  }
  function y(x, S) {
    const E = o.get() + x,
      { index: b, distance: P } = h(E),
      R = !e && a(E);
    if (!S || R) return { index: b, distance: x };
    const j = t[b] - P,
      T = x + p(j, 0);
    return { index: b, distance: T };
  }
  return { byDistance: y, byIndex: g, shortcut: p };
}
function mV(e, t, n, i, o, a, l) {
  function c(g) {
    const y = g.distance,
      w = g.index !== t.get();
    a.add(y),
      y && (i.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      w && (n.set(t.get()), t.set(g.index), l.emit("select"));
  }
  function f(g, y) {
    const w = o.byDistance(g, y);
    c(w);
  }
  function h(g, y) {
    const w = t.clone().set(g),
      x = o.byIndex(w.get(), y);
    c(x);
  }
  return { distance: f, index: h };
}
function gV(e, t, n, i, o, a, l, c) {
  const f = { passive: !0, capture: !0 };
  let h = 0;
  function p(w) {
    if (!c) return;
    function x(S) {
      if (new Date().getTime() - h > 10) return;
      l.emit("slideFocusStart"), (e.scrollLeft = 0);
      const P = n.findIndex((R) => R.includes(S));
      tg(P) && (o.useDuration(0), i.index(P, 0), l.emit("slideFocus"));
    }
    a.add(document, "keydown", g, !1),
      t.forEach((S, E) => {
        a.add(
          S,
          "focus",
          (b) => {
            (kd(c) || c(w, b)) && x(E);
          },
          f
        );
      });
  }
  function g(w) {
    w.code === "Tab" && (h = new Date().getTime());
  }
  return { init: p };
}
function Ja(e) {
  let t = e;
  function n() {
    return t;
  }
  function i(f) {
    t = l(f);
  }
  function o(f) {
    t += l(f);
  }
  function a(f) {
    t -= l(f);
  }
  function l(f) {
    return tg(f) ? f : f.get();
  }
  return { get: n, set: i, add: o, subtract: a };
}
function t_(e, t) {
  const n = e.scroll === "x" ? l : c,
    i = t.style;
  let o = null,
    a = !1;
  function l(y) {
    return `translate3d(${y}px,0px,0px)`;
  }
  function c(y) {
    return `translate3d(0px,${y}px,0px)`;
  }
  function f(y) {
    if (a) return;
    const w = XI(e.direction(y));
    w !== o && ((i.transform = n(w)), (o = w));
  }
  function h(y) {
    a = !y;
  }
  function p() {
    a ||
      ((i.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: p, to: f, toggleActive: h };
}
function yV(e, t, n, i, o, a, l, c, f) {
  const p = Al(o),
    g = Al(o).reverse(),
    y = b().concat(P());
  function w(V, F) {
    return V.reduce((Y, Q) => Y - o[Q], F);
  }
  function x(V, F) {
    return V.reduce((Y, Q) => (w(Y, F) > 0 ? Y.concat([Q]) : Y), []);
  }
  function S(V) {
    return a.map((F, Y) => ({
      start: F - i[Y] + 0.5 + V,
      end: F + t - 0.5 + V,
    }));
  }
  function E(V, F, Y) {
    const Q = S(F);
    return V.map((ce) => {
      const X = Y ? 0 : -n,
        ie = Y ? n : 0,
        he = Y ? "end" : "start",
        pe = Q[ce][he];
      return {
        index: ce,
        loopPoint: pe,
        slideLocation: Ja(-1),
        translate: t_(e, f[ce]),
        target: () => (c.get() > pe ? X : ie),
      };
    });
  }
  function b() {
    const V = l[0],
      F = x(g, V);
    return E(F, n, !1);
  }
  function P() {
    const V = t - l[0] - 1,
      F = x(p, V);
    return E(F, -n, !0);
  }
  function R() {
    return y.every(({ index: V }) => {
      const F = p.filter((Y) => Y !== V);
      return w(F, t) <= 0.1;
    });
  }
  function j() {
    y.forEach((V) => {
      const { target: F, translate: Y, slideLocation: Q } = V,
        ce = F();
      ce !== Q.get() && (Y.to(ce), Q.set(ce));
    });
  }
  function T() {
    y.forEach((V) => V.translate.clear());
  }
  return { canLoop: R, clear: T, loop: j, loopPoints: y };
}
function vV(e, t, n) {
  let i,
    o = !1;
  function a(f) {
    if (!n) return;
    function h(p) {
      for (const g of p)
        if (g.type === "childList") {
          f.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (i = new MutationObserver((p) => {
      o || ((kd(n) || n(f, p)) && h(p));
    })),
      i.observe(e, { childList: !0 });
  }
  function l() {
    i && i.disconnect(), (o = !0);
  }
  return { init: a, destroy: l };
}
function xV(e, t, n, i) {
  const o = {};
  let a = null,
    l = null,
    c,
    f = !1;
  function h() {
    (c = new IntersectionObserver(
      (x) => {
        f ||
          (x.forEach((S) => {
            const E = t.indexOf(S.target);
            o[E] = S;
          }),
          (a = null),
          (l = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: i }
    )),
      t.forEach((x) => c.observe(x));
  }
  function p() {
    c && c.disconnect(), (f = !0);
  }
  function g(x) {
    return Nl(o).reduce((S, E) => {
      const b = parseInt(E),
        { isIntersecting: P } = o[b];
      return ((x && P) || (!x && !P)) && S.push(b), S;
    }, []);
  }
  function y(x = !0) {
    if (x && a) return a;
    if (!x && l) return l;
    const S = g(x);
    return x && (a = S), x || (l = S), S;
  }
  return { init: h, destroy: p, get: y };
}
function wV(e, t, n, i, o, a) {
  const { measureSize: l, startEdge: c, endEdge: f } = e,
    h = n[0] && o,
    p = x(),
    g = S(),
    y = n.map(l),
    w = E();
  function x() {
    if (!h) return 0;
    const P = n[0];
    return Ot(t[c] - P[c]);
  }
  function S() {
    if (!h) return 0;
    const P = a.getComputedStyle(Er(i));
    return parseFloat(P.getPropertyValue(`margin-${f}`));
  }
  function E() {
    return n
      .map((P, R, j) => {
        const T = !R,
          M = rg(j, R);
        return T ? y[R] + p : M ? y[R] + g : j[R + 1][c] - P[c];
      })
      .map(Ot);
  }
  return { slideSizes: y, slideSizesWithGaps: w, startGap: p, endGap: g };
}
function SV(e, t, n, i, o, a, l, c, f) {
  const { startEdge: h, endEdge: p, direction: g } = e,
    y = tg(n);
  function w(b, P) {
    return Al(b)
      .filter((R) => R % P === 0)
      .map((R) => b.slice(R, R + P));
  }
  function x(b) {
    return b.length
      ? Al(b)
          .reduce((P, R, j) => {
            const T = Er(P) || 0,
              M = T === 0,
              V = R === Kl(b),
              F = o[h] - a[T][h],
              Y = o[h] - a[R][p],
              Q = !i && M ? g(l) : 0,
              ce = !i && V ? g(c) : 0,
              X = Ot(Y - ce - (F + Q));
            return j && X > t + f && P.push(R), V && P.push(b.length), P;
          }, [])
          .map((P, R, j) => {
            const T = Math.max(j[R - 1] || 0);
            return b.slice(T, P);
          })
      : [];
  }
  function S(b) {
    return y ? w(b, n) : x(b);
  }
  return { groupSlides: S };
}
function bV(e, t, n, i, o, a, l) {
  const {
      align: c,
      axis: f,
      direction: h,
      startIndex: p,
      loop: g,
      duration: y,
      dragFree: w,
      dragThreshold: x,
      inViewThreshold: S,
      slidesToScroll: E,
      skipSnaps: b,
      containScroll: P,
      watchResize: R,
      watchSlides: j,
      watchDrag: T,
      watchFocus: M,
    } = a,
    V = 2,
    F = rV(),
    Y = F.measure(t),
    Q = n.map(F.measure),
    ce = eV(f, h),
    X = ce.measureSize(Y),
    ie = iV(X),
    he = QI(c, X),
    pe = !g && !!P,
    me = g || !!P,
    {
      slideSizes: le,
      slideSizesWithGaps: H,
      startGap: J,
      endGap: ee,
    } = wV(ce, Y, Q, n, me, o),
    O = SV(ce, X, E, g, Y, Q, J, ee, V),
    { snaps: q, snapsAligned: Ne } = fV(ce, he, Y, Q, O),
    Me = -Er(q) + Er(H),
    { snapsContained: Ie, scrollContainLimit: ze } = lV(X, Me, Ne, P, V),
    be = pe ? Ie : Ne,
    { limit: Te } = uV(Me, be, g),
    Re = e_(Kl(be), p, g),
    Xe = Re.clone(),
    nt = Al(n),
    _e = ({
      dragHandler: bt,
      scrollBody: an,
      scrollBounds: Ar,
      options: { loop: jn },
    }) => {
      jn || Ar.constrain(bt.pointerDown()), an.seek();
    },
    We = (
      {
        scrollBody: bt,
        translate: an,
        location: Ar,
        offsetLocation: jn,
        previousLocation: Ei,
        scrollLooper: Qr,
        slideLooper: Nr,
        dragHandler: _i,
        animation: Jr,
        eventHandler: Ci,
        scrollBounds: ki,
        options: { loop: or },
      },
      Kn
    ) => {
      const jr = bt.settled(),
        ei = !ki.shouldConstrain(),
        ps = or ? jr : jr && ei;
      ps && !_i.pointerDown() && (Jr.stop(), Ci.emit("settle")),
        ps || Ci.emit("scroll");
      const Js = Ar.get() * Kn + Ei.get() * (1 - Kn);
      jn.set(Js), or && (Qr.loop(bt.direction()), Nr.loop()), an.to(jn.get());
    },
    ct = JI(
      i,
      o,
      () => _e(Rr),
      (bt) => We(Rr, bt)
    ),
    Pt = 0.68,
    Wt = be[Re.get()],
    Xt = Ja(Wt),
    N = Ja(Wt),
    z = Ja(Wt),
    Z = Ja(Wt),
    ue = oV(Xt, z, N, Z, y, Pt),
    de = pV(g, be, Me, Te, Z),
    ae = mV(ct, Re, Xe, ue, de, Z, l),
    je = dV(Te),
    Fe = jl(),
    lt = xV(t, n, l, S),
    { slideRegistry: yt } = hV(pe, P, be, ze, O, nt),
    Ht = gV(e, n, yt, ae, ue, Fe, l, M),
    Rr = {
      ownerDocument: i,
      ownerWindow: o,
      eventHandler: l,
      containerRect: Y,
      slideRects: Q,
      animation: ct,
      axis: ce,
      dragHandler: tV(
        ce,
        e,
        i,
        o,
        Z,
        nV(ce, o),
        Xt,
        ct,
        ae,
        ue,
        de,
        Re,
        l,
        ie,
        w,
        x,
        b,
        Pt,
        T
      ),
      eventStore: Fe,
      percentOfView: ie,
      index: Re,
      indexPrevious: Xe,
      limit: Te,
      location: Xt,
      offsetLocation: z,
      previousLocation: N,
      options: a,
      resizeHandler: sV(t, l, o, n, ce, R, F),
      scrollBody: ue,
      scrollBounds: aV(Te, z, Z, ue, ie),
      scrollLooper: cV(Me, Te, z, [Xt, z, N, Z]),
      scrollProgress: je,
      scrollSnapList: be.map(je.get),
      scrollSnaps: be,
      scrollTarget: de,
      scrollTo: ae,
      slideLooper: yV(ce, X, Me, le, H, q, be, z, n),
      slideFocus: Ht,
      slidesHandler: vV(t, l, j),
      slidesInView: lt,
      slideIndexes: nt,
      slideRegistry: yt,
      slidesToScroll: O,
      target: Z,
      translate: t_(ce, t),
    };
  return Rr;
}
function EV() {
  let e = {},
    t;
  function n(h) {
    t = h;
  }
  function i(h) {
    return e[h] || [];
  }
  function o(h) {
    return i(h).forEach((p) => p(t, h)), f;
  }
  function a(h, p) {
    return (e[h] = i(h).concat([p])), f;
  }
  function l(h, p) {
    return (e[h] = i(h).filter((g) => g !== p)), f;
  }
  function c() {
    e = {};
  }
  const f = { init: n, emit: o, off: l, on: a, clear: c };
  return f;
}
const _V = {
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
function CV(e) {
  function t(a, l) {
    return J1(a, l || {});
  }
  function n(a) {
    const l = a.breakpoints || {},
      c = Nl(l)
        .filter((f) => e.matchMedia(f).matches)
        .map((f) => l[f])
        .reduce((f, h) => t(f, h), {});
    return t(a, c);
  }
  function i(a) {
    return a
      .map((l) => Nl(l.breakpoints || {}))
      .reduce((l, c) => l.concat(c), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: i };
}
function kV(e) {
  let t = [];
  function n(a, l) {
    return (
      (t = l.filter(({ options: c }) => e.optionsAtMedia(c).active !== !1)),
      t.forEach((c) => c.init(a, e)),
      l.reduce((c, f) => Object.assign(c, { [f.name]: f }), {})
    );
  }
  function i() {
    t = t.filter((a) => a.destroy());
  }
  return { init: n, destroy: i };
}
function ed(e, t, n) {
  const i = e.ownerDocument,
    o = i.defaultView,
    a = CV(o),
    l = kV(a),
    c = jl(),
    f = EV(),
    { mergeOptions: h, optionsAtMedia: p, optionsMediaQueries: g } = a,
    { on: y, off: w, emit: x } = f,
    S = ce;
  let E = !1,
    b,
    P = h(_V, ed.globalOptions),
    R = h(P),
    j = [],
    T,
    M,
    V;
  function F() {
    const { container: nt, slides: _e } = R;
    M = (Lp(nt) ? e.querySelector(nt) : nt) || e.children[0];
    const ct = Lp(_e) ? M.querySelectorAll(_e) : _e;
    V = [].slice.call(ct || M.children);
  }
  function Y(nt) {
    const _e = bV(e, M, V, i, o, nt, f);
    if (nt.loop && !_e.slideLooper.canLoop()) {
      const We = Object.assign({}, nt, { loop: !1 });
      return Y(We);
    }
    return _e;
  }
  function Q(nt, _e) {
    E ||
      ((P = h(P, nt)),
      (R = p(P)),
      (j = _e || j),
      F(),
      (b = Y(R)),
      g([P, ...j.map(({ options: We }) => We)]).forEach((We) =>
        c.add(We, "change", ce)
      ),
      R.active &&
        (b.translate.to(b.location.get()),
        b.animation.init(),
        b.slidesInView.init(),
        b.slideFocus.init(Xe),
        b.eventHandler.init(Xe),
        b.resizeHandler.init(Xe),
        b.slidesHandler.init(Xe),
        b.options.loop && b.slideLooper.loop(),
        M.offsetParent && V.length && b.dragHandler.init(Xe),
        (T = l.init(Xe, j))));
  }
  function ce(nt, _e) {
    const We = O();
    X(), Q(h({ startIndex: We }, nt), _e), f.emit("reInit");
  }
  function X() {
    b.dragHandler.destroy(),
      b.eventStore.clear(),
      b.translate.clear(),
      b.slideLooper.clear(),
      b.resizeHandler.destroy(),
      b.slidesHandler.destroy(),
      b.slidesInView.destroy(),
      b.animation.destroy(),
      l.destroy(),
      c.clear();
  }
  function ie() {
    E || ((E = !0), c.clear(), X(), f.emit("destroy"), f.clear());
  }
  function he(nt, _e, We) {
    !R.active ||
      E ||
      (b.scrollBody.useBaseFriction().useDuration(_e === !0 ? 0 : R.duration),
      b.scrollTo.index(nt, We || 0));
  }
  function pe(nt) {
    const _e = b.index.add(1).get();
    he(_e, nt, -1);
  }
  function me(nt) {
    const _e = b.index.add(-1).get();
    he(_e, nt, 1);
  }
  function le() {
    return b.index.add(1).get() !== O();
  }
  function H() {
    return b.index.add(-1).get() !== O();
  }
  function J() {
    return b.scrollSnapList;
  }
  function ee() {
    return b.scrollProgress.get(b.location.get());
  }
  function O() {
    return b.index.get();
  }
  function q() {
    return b.indexPrevious.get();
  }
  function Ne() {
    return b.slidesInView.get();
  }
  function Me() {
    return b.slidesInView.get(!1);
  }
  function Ie() {
    return T;
  }
  function ze() {
    return b;
  }
  function be() {
    return e;
  }
  function Te() {
    return M;
  }
  function Re() {
    return V;
  }
  const Xe = {
    canScrollNext: le,
    canScrollPrev: H,
    containerNode: Te,
    internalEngine: ze,
    destroy: ie,
    off: w,
    on: y,
    emit: x,
    plugins: Ie,
    previousScrollSnap: q,
    reInit: S,
    rootNode: be,
    scrollNext: pe,
    scrollPrev: me,
    scrollProgress: ee,
    scrollSnapList: J,
    scrollTo: he,
    selectedScrollSnap: O,
    slideNodes: Re,
    slidesInView: Ne,
    slidesNotInView: Me,
  };
  return Q(t, n), setTimeout(() => f.emit("init"), 0), Xe;
}
ed.globalOptions = void 0;
function ig(e = {}, t = []) {
  const n = _.useRef(e),
    i = _.useRef(t),
    [o, a] = _.useState(),
    [l, c] = _.useState(),
    f = _.useCallback(() => {
      o && o.reInit(n.current, i.current);
    }, [o]);
  return (
    _.useEffect(() => {
      eg(n.current, e) || ((n.current = e), f());
    }, [e, f]),
    _.useEffect(() => {
      qI(i.current, t) || ((i.current = t), f());
    }, [t, f]),
    _.useEffect(() => {
      if (GI() && l) {
        ed.globalOptions = ig.globalOptions;
        const h = ed(l, n.current, i.current);
        return a(h), () => h.destroy();
      } else a(void 0);
    }, [l, a]),
    [c, o]
  );
}
ig.globalOptions = void 0;
var Gh, E0;
function TV() {
  if (E0) return Gh;
  E0 = 1;
  var e = "Expected a function",
    t = NaN,
    n = "[object Symbol]",
    i = /^\s+|\s+$/g,
    o = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    l = /^0o[0-7]+$/i,
    c = parseInt,
    f = typeof Xu == "object" && Xu && Xu.Object === Object && Xu,
    h = typeof self == "object" && self && self.Object === Object && self,
    p = f || h || Function("return this")(),
    g = Object.prototype,
    y = g.toString,
    w = Math.max,
    x = Math.min,
    S = function () {
      return p.Date.now();
    };
  function E(T, M, V) {
    var F,
      Y,
      Q,
      ce,
      X,
      ie,
      he = 0,
      pe = !1,
      me = !1,
      le = !0;
    if (typeof T != "function") throw new TypeError(e);
    (M = j(M) || 0),
      b(V) &&
        ((pe = !!V.leading),
        (me = "maxWait" in V),
        (Q = me ? w(j(V.maxWait) || 0, M) : Q),
        (le = "trailing" in V ? !!V.trailing : le));
    function H(be) {
      var Te = F,
        Re = Y;
      return (F = Y = void 0), (he = be), (ce = T.apply(Re, Te)), ce;
    }
    function J(be) {
      return (he = be), (X = setTimeout(q, M)), pe ? H(be) : ce;
    }
    function ee(be) {
      var Te = be - ie,
        Re = be - he,
        Xe = M - Te;
      return me ? x(Xe, Q - Re) : Xe;
    }
    function O(be) {
      var Te = be - ie,
        Re = be - he;
      return ie === void 0 || Te >= M || Te < 0 || (me && Re >= Q);
    }
    function q() {
      var be = S();
      if (O(be)) return Ne(be);
      X = setTimeout(q, ee(be));
    }
    function Ne(be) {
      return (X = void 0), le && F ? H(be) : ((F = Y = void 0), ce);
    }
    function Me() {
      X !== void 0 && clearTimeout(X), (he = 0), (F = ie = Y = X = void 0);
    }
    function Ie() {
      return X === void 0 ? ce : Ne(S());
    }
    function ze() {
      var be = S(),
        Te = O(be);
      if (((F = arguments), (Y = this), (ie = be), Te)) {
        if (X === void 0) return J(ie);
        if (me) return (X = setTimeout(q, M)), H(ie);
      }
      return X === void 0 && (X = setTimeout(q, M)), ce;
    }
    return (ze.cancel = Me), (ze.flush = Ie), ze;
  }
  function b(T) {
    var M = typeof T;
    return !!T && (M == "object" || M == "function");
  }
  function P(T) {
    return !!T && typeof T == "object";
  }
  function R(T) {
    return typeof T == "symbol" || (P(T) && y.call(T) == n);
  }
  function j(T) {
    if (typeof T == "number") return T;
    if (R(T)) return t;
    if (b(T)) {
      var M = typeof T.valueOf == "function" ? T.valueOf() : T;
      T = b(M) ? M + "" : M;
    }
    if (typeof T != "string") return T === 0 ? T : +T;
    T = T.replace(i, "");
    var V = a.test(T);
    return V || l.test(T) ? c(T.slice(2), V ? 2 : 8) : o.test(T) ? t : +T;
  }
  return (Gh = E), Gh;
}
TV();
var PV = typeof window < "u" ? _.useLayoutEffect : _.useEffect,
  RV = typeof window > "u";
function _0(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
  const i = (c) => (RV ? t : window.matchMedia(c).matches),
    [o, a] = _.useState(() => (n ? i(e) : t));
  function l() {
    a(i(e));
  }
  return (
    PV(() => {
      const c = window.matchMedia(e);
      return (
        l(),
        c.addListener ? c.addListener(l) : c.addEventListener("change", l),
        () => {
          c.removeListener
            ? c.removeListener(l)
            : c.removeEventListener("change", l);
        }
      );
    }, [e]),
    o
  );
}
const AV = [
    { title: "План выставки", link: "" },
    { title: "Забронировать стенд", link: "/stend-form" },
    { title: "B2B | B2G встречи", link: "/B2B-B2G" },
    { title: "Стать спонсором", link: "" },
  ],
  NV = () => {
    const [e] = ig(),
      t = _0("(min-width: 1024px)"),
      n = _0("(min-width: 768px)");
    function i() {
      return t
        ? "/banners/ru/l.jpg"
        : n
        ? "/banners/ru/m.jpg"
        : "/banners/ru/s.jpg";
    }
    return C.jsxs("section", {
      className: "flex flex-col gap-5",
      children: [
        C.jsx("div", {
          ref: e,
          className: "embla",
          children: C.jsx("div", {
            className: "embla__container",
            children: C.jsx("div", {
              className: "embla__slide",
              children: C.jsx("img", {
                src: i(),
                alt: "",
                className: " max-h-[600px] object-cover",
              }),
            }),
          }),
        }),
        C.jsx(Zn, {
          className: "flex items-center gap-6 text-2xl",
          children: AV.map(({ title: o, link: a }) =>
            C.jsx(
              sr,
              {
                to: a,
                className: "w-full",
                children: C.jsx(wn, {
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
  n_ = [
    { name: "Монтаж выставки", date: "1 — 27 апреля 2025 года" },
    { name: "Работа", date: "29 — 1 мая 2025 года" },
    { name: "Демонтаж", date: "1 — 2 мая 2025 года" },
  ],
  jV = [
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
  DV = ({ className: e }) =>
    C.jsx("section", {
      className: ot("bg-surface_high pt-10 pb-20", e),
      children: C.jsxs(Zn, {
        children: [
          C.jsx("h2", { className: "h2 mb-10", children: "Время мероприятий" }),
          C.jsxs("div", {
            className: "flex flex-col gap-6",
            children: [
              C.jsx("div", {
                className: "flex items-center gap-6",
                children: n_.map((t) =>
                  _.createElement(eb, {
                    ...t,
                    key: t.name,
                    className: "w-full",
                  })
                ),
              }),
              C.jsx("div", {
                className: "p-10 flex items-center gap-6",
                children: jV.map((t) =>
                  _.createElement(LN, {
                    ...t,
                    key: t.title,
                    className: "w-full",
                  })
                ),
              }),
              C.jsx(sr, {
                to: "/stend-form",
                className: "w-fit mx-auto",
                children: C.jsx(wn, {
                  children: "Забронируйте стенд в качестве экспонента",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  OV = () =>
    C.jsx("section", {
      children: C.jsxs(Zn, {
        className: "flex flex-col gap-6",
        children: [
          C.jsxs("div", {
            className: "text-center",
            children: [
              C.jsx("h2", {
                className: "h2 mb-3",
                children:
                  "Выставка-ярмарка «Международная Торговля и Услуги» в Ашхабаде",
              }),
              C.jsx("p", {
                className: "text-base normal text-[#454545]",
                children:
                  "С 29 апреля по 1 мая 2025 года столица Туркменистана, Ашхабад, станет центром международного делового сообщества благодаря крупнейшей выставке-ярмарке «Торговля и услуги». Организованная Торгово-промышленной палатой Туркменистана и компанией Turkmen Expo, эта выставка направлена на укрепление глобальных торговых связей, привлечение инвестиций и демонстрацию экономического потенциала страны.",
              }),
            ],
          }),
          C.jsxs("div", {
            className: "flex items-center gap-6",
            children: [
              C.jsx(ac, { nums: "4,200 m²", text: "выставочной площади" }),
              C.jsx(ac, {
                nums: "10000+",
                text: "Посетители посетят выставку",
              }),
              C.jsx(ac, {
                nums: "100+",
                text: "Экспоненты из более чем 30 стран",
              }),
              C.jsx(ac, {
                nums: "80%",
                text: "Участники принимают участие в принятии решений о закупках",
              }),
            ],
          }),
          C.jsx(sr, {
            to: "/about",
            className: "mx-auto",
            children: C.jsx(wn, {
              variant: "outline",
              children: "Подробнее о выставке",
            }),
          }),
        ],
      }),
    }),
  r_ = ({ className: e, img: t, title: n }) =>
    C.jsxs("article", {
      className: ot(
        "bg-bg_surface_container relative hover:bg-teritary_surface_container transition-all px-6 h-[224px]",
        e
      ),
      children: [
        C.jsx("div", {
          className: "bg-primary size-full -z-[10] absolute top-2.5 left-2.5",
        }),
        C.jsx("img", { src: t, alt: "theme icon" }),
        C.jsx("h3", { className: "mt-6 text-xl", children: n }),
      ],
    }),
  i_ = [
    { title: "Пищевая продукция и сельское хозяйство", img: "/theme/1.svg" },
    { title: "Товары и услуги", img: "/theme/2.svg" },
    { title: "E-commerce", img: "/theme/3.svg" },
    { title: "Волокна, текстиль и одежда", img: "/theme/4.svg" },
    { title: "Продукция промышленного производства", img: "/theme/5.svg" },
    { title: "Профессиональные услуги", img: "/theme/6.svg" },
    { title: "Ремесленные производства", img: "/theme/7.svg" },
    { title: "Креативные индустрии", img: "/theme/8.svg" },
  ],
  LV = () =>
    C.jsx("section", {
      className: "",
      children: C.jsxs(Zn, {
        children: [
          C.jsx("h2", {
            className: "h2 mb-10 text-center",
            children: "Тематические направления выставки",
          }),
          C.jsx("div", {
            className: "grid grid-cols-4 gap-6",
            children: i_.map((e) => C.jsx(r_, { ...e }, e.title)),
          }),
        ],
      }),
    }),
  MV = () =>
    C.jsx("section", {
      className: "bg-surface_high py-10 relative",
      children: C.jsx(Zn, {
        children: C.jsx("div", {
          className: "overflow-hidden",
          children: C.jsxs("div", {
            className: "mb-2 flex gap-6",
            children: [
              C.jsx(Rx, {
                img: "/offer-1.png",
                className: "flex-[0_0_50%]",
                title: "Гостиницы, трансфер, визы",
                text: "По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки",
              }),
              C.jsx(Rx, {
                img: "/offer-2.png",
                className: "flex-[0_0_50%]",
                title: "Ознакомьтесь с планом выставки ITSE 2025",
                text: "Как выбрать лучшее место на выставке? Вы всегда должны помнить, что удачное расположение выставочной экспозиции повышает Ваши шансы привлечь внимание Ваших потенциальных клиентов",
              }),
            ],
          }),
        }),
      }),
    }),
  FV = ({ className: e }) =>
    C.jsxs("section", {
      className: ot("relative w-full bg-[#FDE8C4] -z-10 h-[722px] py-10", e),
      children: [
        C.jsx("img", {
          src: "/about-bg.svg",
          alt: "",
          className: "absolute top-0 left-0 size-full object-cover",
        }),
        C.jsxs(Zn, {
          children: [
            C.jsx("h3", { className: "h2 mb-4", children: "Отрасли" }),
            C.jsx("p", {
              className: "text-lg text-on_surface_v mb-6",
              children:
                "Мероприятие объединит ключевых игроков в таких отраслях, как:",
            }),
            C.jsx("div", {
              className: "grid grid-cols-4 gap-6",
              children: i_.map((t) =>
                C.jsx(
                  r_,
                  { className: "!bg-teritary_surface_container", ...t },
                  t.title
                )
              ),
            }),
            C.jsxs("div", {
              className:
                "flex items-center gap-3 mt-8 text-on_surface_v text-lg",
              children: [
                C.jsx("div", { className: "w-1 h-[38px] bg-teritary_08" }),
                C.jsx("p", {
                  className: "text-18",
                  children:
                    "Участники смогут продемонстрировать свои инновационные решения, наладить взаимовыгодные партнерства и выйти на новые рынки.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  IV = ({ className: e }) =>
    C.jsx("section", {
      className: ot("bg-bg_surface_container py-[160px]", e),
      children: C.jsxs(Zn, {
        children: [
          C.jsx("h3", { className: "h2 mb-6", children: "Время выставки" }),
          C.jsx("div", {
            className: "flex items-center gap-6",
            children: n_.map((t) =>
              _.createElement(eb, {
                bottomClassName: "!bg-white rounded-b-[2px]",
                ...t,
                key: t.name,
                className: "w-full",
              })
            ),
          }),
        ],
      }),
    }),
  VV = ({ className: e }) =>
    C.jsx("section", {
      className: ot(
        "flex items-center gap-6 relative h-[556px] overflow-hidden",
        e
      ),
      children: C.jsxs(Zn, {
        children: [
          C.jsx("h3", {
            className: "h2 w-[312px] mb-6",
            children: "Место проведения",
          }),
          C.jsx("p", {
            className: "text-lg w-[490px] text-on_surface_v normal",
            children:
              "Торгово-промышленная палата Туркменистана создана в целях содействия развитию экономики Туркменистана, ее интегрированию в мировую хозяйственную систему, формированию современной промышленной, финансовой и торговой инфраструктуры, создания благоприятных условий для предпринимательской деятельности, оказания содействия в установлении торгово-экономических, научных и технических связей с зарубежными партнерами.",
          }),
          C.jsx("img", {
            src: "/map.png",
            alt: "map",
            className: "absolute top-0 right-0 w-[900px] h-full object-cover",
          }),
        ],
      }),
    }),
  BV = ({ className: e }) =>
    C.jsxs("section", {
      className: ot("py-20 relative h-[384px] overflow-hidden", e),
      children: [
        C.jsx("img", {
          src: "/CTA.png",
          className: "absolute top-0 left-0 size-full -z-10 object-cover",
        }),
        C.jsxs(Zn, {
          children: [
            C.jsx("h3", {
              className: "h2 text-center !text-on_primary mb-6",
              children: "Приглашение к участию",
            }),
            C.jsx("p", {
              className:
                "text-center text-lg text-primary_04 max-w-[808px] mx-auto mb-10",
              children:
                "Торгово-промышленная палата Туркменистана приглашает бизнес-сообщество со всего мира присоединиться к этому уникальному событию, которое станет важным шагом к укреплению позиций Туркменистана на глобальной экономической арене.",
            }),
            C.jsxs("div", {
              className: "flex items-center gap-6",
              children: [
                C.jsx(sr, {
                  to: "/stend-form",
                  className: "w-full",
                  children: C.jsxs(wn, {
                    className: "bg-white w-full text-primary hover:bg-white/90",
                    children: [" ", "Забронировать стенд"],
                  }),
                }),
                C.jsx(sr, {
                  to: "/B2B-B2G",
                  className: "w-full",
                  children: C.jsx(wn, {
                    className: "bg-white w-full hover:bg-white/90 text-primary",
                    children: "B2B | B2G встречи",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
function zV() {
  return C.jsxs("main", {
    className: "flex flex-col min-h-screen",
    children: [
      C.jsx(QP, {}),
      C.jsx("div", { className: "flex-auto", children: C.jsx(yT, {}) }),
      C.jsx(JP, {}),
    ],
  });
}
const UV = () =>
    C.jsxs("div", {
      className: "flex flex-col gap-20",
      children: [
        C.jsx(NV, {}),
        C.jsx(OV, {}),
        C.jsx(MV, {}),
        C.jsx(LV, {}),
        C.jsx(DV, {}),
      ],
    }),
  $V = () => {
    const [e, t] = _.useState(1);
    return (
      _.useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
      }, [e]),
      C.jsxs("div", {
        className: "pb-[120px]",
        children: [
          C.jsxs("div", {
            className:
              "relative flex items-center h-[216px] w-full justify-center",
            children: [
              C.jsx("img", {
                src: "/b2b-cover.png",
                className: "-z-10 absolute size-full object-cover top-0 left-0",
              }),
              C.jsx("h1", {
                className: "text-on_primary text-5xl",
                children: "B2B | B2G встречи",
              }),
            ],
          }),
          e !== 0 && C.jsx(HI, { stage: e }),
          C.jsx("div", {
            className: "w-[808px] mx-auto",
            children: C.jsx(WI, { stage: e, setStage: t }),
          }),
        ],
      })
    );
  },
  WV = it.object({
    space_package: it.string(),
    company_name: it
      .string()
      .min(3, { message: "Название компании должно быть не менее 3 символов" }),
    rep_name: it
      .string()
      .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),
    job_title: it
      .string()
      .min(3, { message: "Должность должна быть не менее 3 символов" }),
    participants_number: it.preprocess(
      (e) => Number(e),
      it.number().min(1, "Укажите количество участников")
    ),
    country: it
      .string()
      .min(3, { message: "Название страны должно быть не менее 3 символов" }),
    email: it.string().email({ message: "Укажите корректный email" }),
    phone: it
      .string()
      .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),
    website: it.string().optional(),
    visa_support: it.string().optional(),
  }),
  HV = {
    space_package: "space",
    company_name: "",
    rep_name: "",
    job_title: "",
    participants_number: 1,
    country: "",
    email: "",
    phone: "",
    website: "",
    visa_support: "",
  },
  ZV = ({ className: e }) => {
    const [t, n] = _.useState(!1),
      i = WE({ resolver: ZE(WV), defaultValues: HV }),
      o = async (l) => {
        (
          await Ut.post(
            "https://itse.turkmenexpo.com/app/api/v1/book_stand_form",
            l
          )
        ).status === 201 && n(!0);
      };
    _.useEffect(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, [status]);
    const { errors: a } = i.formState;
    return C.jsxs("div", {
      className: e,
      children: [
        C.jsxs("div", {
          className:
            "relative flex items-center h-[216px] w-full justify-center",
          children: [
            C.jsx("img", {
              src: "/b2b-cover.png",
              className: "-z-10 absolute size-full object-cover top-0 left-0",
            }),
            C.jsx("h1", {
              className: "text-on_primary text-5xl",
              children: "Забронировать стенд",
            }),
          ],
        }),
        C.jsx(vc, {
          children:
            !t &&
            C.jsx(A1, {
              ...i,
              children: C.jsxs(yi.form, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "w-[808px] mx-auto mt-20 mb-[120px] flex flex-col gap-8",
                onSubmit: i.handleSubmit(o),
                children: [
                  C.jsx(Qc, {
                    control: i.control,
                    name: "space_package",
                    render: ({ field: l }) =>
                      C.jsxs(yr, {
                        className: "space-y-5",
                        children: [
                          C.jsx(vr, {
                            className: "text-xl",
                            children: "Выберите один из вариантов:",
                          }),
                          C.jsx(xr, {
                            children: C.jsxs(Jc, {
                              onValueChange: l.onChange,
                              defaultValue: l.value,
                              className: "flex flex-col space-y-4 ml-3",
                              children: [
                                C.jsxs(yr, {
                                  className:
                                    "flex items-center space-x-5 space-y-0",
                                  children: [
                                    C.jsx(xr, {
                                      children: C.jsx(Fs, {
                                        value: "space",
                                        checked: l.value === "space",
                                      }),
                                    }),
                                    C.jsx(vr, {
                                      className: "text-base",
                                      children: "Только стенд",
                                    }),
                                  ],
                                }),
                                C.jsxs(yr, {
                                  className:
                                    "flex items-center space-x-5 space-y-0",
                                  children: [
                                    C.jsx(xr, {
                                      children: C.jsx(Fs, {
                                        value: "package",
                                        checked: l.value === "package",
                                      }),
                                    }),
                                    C.jsx(vr, {
                                      className: "text-base",
                                      children: "Комплексное предложение",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  }),
                  C.jsx(ft, {
                    label: "Название компании/организации",
                    name: "company_name",
                    control: i.control,
                    error: a.company_name,
                  }),
                  C.jsx(ft, {
                    label: "Имя представителя",
                    name: "rep_name",
                    control: i.control,
                    error: a.rep_name,
                  }),
                  C.jsx(ft, {
                    label: "Название должности/позиция",
                    name: "job_title",
                    control: i.control,
                    error: a.job_title,
                  }),
                  C.jsx(ft, {
                    label: "Количество участников",
                    type: "number",
                    name: "participants_number",
                    control: i.control,
                    error: a.participants_number,
                  }),
                  C.jsx(ft, {
                    label: "Страна",
                    name: "country",
                    control: i.control,
                    error: a.country,
                  }),
                  C.jsx(ft, {
                    label: "E-mail адрес",
                    name: "email",
                    control: i.control,
                    error: a.email,
                  }),
                  C.jsx(ft, {
                    label: "Номер телефона",
                    name: "phone",
                    control: i.control,
                    error: a.phone,
                  }),
                  C.jsx(ft, {
                    label: "Вебсайт",
                    name: "website",
                    control: i.control,
                  }),
                  C.jsx(Qc, {
                    control: i.control,
                    name: "visa_support",
                    render: ({ field: l }) =>
                      C.jsxs(yr, {
                        className: "space-y-5",
                        children: [
                          C.jsx(vr, {
                            className: "text-xl",
                            children: "Визовая поддержка:",
                          }),
                          C.jsx(xr, {
                            children: C.jsxs(Jc, {
                              onValueChange: l.onChange,
                              defaultValue: l.value,
                              className: "flex flex-col space-y-4 ml-3",
                              children: [
                                C.jsxs(yr, {
                                  className:
                                    "flex items-center space-x-5 space-y-0",
                                  children: [
                                    C.jsx(xr, {
                                      children: C.jsx(Fs, {
                                        value: "yes",
                                        checked: l.value === "yes",
                                      }),
                                    }),
                                    C.jsx(vr, {
                                      className: "text-base",
                                      children: "Да",
                                    }),
                                  ],
                                }),
                                C.jsxs(yr, {
                                  className:
                                    "flex items-center space-x-5 space-y-0 ",
                                  children: [
                                    C.jsx(xr, {
                                      children: C.jsx(Fs, {
                                        value: "no",
                                        checked: l.value === "no",
                                      }),
                                    }),
                                    C.jsx(vr, {
                                      className: "text-base",
                                      children: "Нет",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  }),
                  C.jsx(wn, {
                    disabled: i.formState.isSubmitting,
                    className: "mt-5",
                    children: i.formState.isSubmitting
                      ? C.jsx(eS, { className: "animate-spin" })
                      : "Отправить",
                  }),
                ],
              }),
            }),
        }),
        t && C.jsx(ZI, { delay: 0.3 }),
      ],
    });
  },
  KV = (e) => {
    _.useEffect(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, [e]);
  },
  GV = ({ className: e }) => (
    KV(),
    C.jsxs("div", {
      className: ot("", e),
      children: [
        C.jsxs("div", {
          className:
            "relative flex items-center h-[216px] w-full justify-center ",
          children: [
            C.jsx("img", {
              src: "/b2b-cover.png",
              className: "-z-10 absolute size-full object-cover top-0 left-0",
            }),
            C.jsx("h1", {
              className: "text-on_primary text-5xl",
              children: "О выставке",
            }),
          ],
        }),
        C.jsxs(Zn, {
          className: "flex flex-col my-20 gap-16",
          children: [
            C.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                C.jsx("h3", {
                  className: "h2",
                  children:
                    "Международная выставка-ярмарка «Торговля и услуги»",
                }),
                C.jsx("p", {
                  className: "text-18",
                  children:
                    "Международная выставка-ярмарка «Торговля и услуги» в Ашхабаде: новые возможности для бизнеса С 29 апреля по 1 мая 2025 года столица Туркменистана, Ашхабад, станет центром международного делового сообщества благодаря крупнейшей выставке-ярмарке «Торговля и услуги». Организованная Торгово-промышленной палатой Туркменистана и компанией Turkmen Expo, эта выставка направлена на укрепление глобальных торговых связей, привлечение инвестиций и демонстрацию экономического потенциала страны.",
                }),
              ],
            }),
            C.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                C.jsx("h3", { className: "h2", children: "Цели выставки" }),
                C.jsxs("ul", {
                  className:
                    "list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal",
                  children: [
                    C.jsx("li", {
                      children:
                        "Поддержка малых и средних предприятий, их интеграция в международную экономику.",
                    }),
                    C.jsx("li", {
                      children:
                        "Продвижение экспортного потенциала Туркменистана.",
                    }),
                    C.jsx("li", {
                      children:
                        "Укрепление деловых связей через B2B- и B2G-встречи.",
                    }),
                    C.jsx("li", {
                      children:
                        "Привлечение инвестиций в ключевые секторы экономики.",
                    }),
                  ],
                }),
              ],
            }),
            C.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                C.jsx("h3", {
                  className: "h2",
                  children: "Ключевые особенности мероприятия",
                }),
                C.jsxs("ul", {
                  className:
                    "list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal",
                  children: [
                    C.jsx("li", {
                      children: "Специализированные выставочные зоны ",
                    }),
                    C.jsx("li", { children: "Форумы по качеству продукции" }),
                    C.jsx("li", { children: "Воркшопы и бизнес-миссии" }),
                  ],
                }),
                C.jsx("p", {
                  className: "text-18",
                  children:
                    "Участники смогут обсудить современные технологии, лучшие практики и эффективные стратегии для устойчивого бизнеса.",
                }),
              ],
            }),
          ],
        }),
        C.jsx(FV, {}),
        C.jsx(IV, {}),
        C.jsx(VV, {}),
        C.jsx(BV, {}),
      ],
    })
  ),
  qV = UT([
    {
      element: C.jsx(zV, {}),
      path: "/",
      children: [
        { element: C.jsx(UV, {}), path: "" },
        { element: C.jsx($V, {}), path: "/B2B-B2G" },
        { element: C.jsx(ZV, {}), path: "/stend-form" },
        { element: C.jsx(GV, {}), path: "/about" },
      ],
    },
  ]);
XC.createRoot(document.getElementById("root")).render(
  C.jsx(_.StrictMode, { children: C.jsx(tP, { router: qV }) })
);
