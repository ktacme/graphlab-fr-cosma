/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      490: () => {
        window.addEventListener('DOMContentLoaded', function () {
          var t = document.getElementById('citation-references'),
            e = null == t ? void 0 : t.querySelector('button'),
            n = null == t ? void 0 : t.querySelector('code');
          e &&
            e.addEventListener('click', function () {
              var t = document.createElement('a');
              t.setAttribute(
                'href',
                'data:text/plain;charset=utf-8,' + encodeURIComponent(n.textContent),
              ),
                t.setAttribute('download', 'bibliography.json'),
                (t.style.display = 'none'),
                document.body.appendChild(t),
                t.click(),
                t.remove();
            });
        });
      },
      691: function (t) {
        t.exports = (function () {
          'use strict';
          function t(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              e &&
                (r = r.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function e(e) {
            for (var n = 1; n < arguments.length; n++) {
              var r = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? t(Object(r), !0).forEach(function (t) {
                    a(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : t(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
            }
            return e;
          }
          function n(t) {
            return (
              (n =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              n(t)
            );
          }
          function r(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function i(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function o(t, e, n) {
            return (
              e && i(t.prototype, e),
              n && i(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          }
          function a(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function u(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return c(t);
              })(t) ||
              (function (t) {
                if (
                  ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                  null != t['@@iterator']
                )
                  return Array.from(t);
              })(t) ||
              (function (t, e) {
                if (t) {
                  if ('string' == typeof t) return c(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    'Object' === n && t.constructor && (n = t.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(t)
                      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? c(t, e)
                      : void 0
                  );
                }
              })(t) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              })()
            );
          }
          function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
          }
          function s(t) {
            return Array.isArray ? Array.isArray(t) : '[object Array]' === m(t);
          }
          var h = 1 / 0;
          function f(t) {
            return null == t
              ? ''
              : (function (t) {
                  if ('string' == typeof t) return t;
                  var e = t + '';
                  return '0' == e && 1 / t == -h ? '-0' : e;
                })(t);
          }
          function l(t) {
            return 'string' == typeof t;
          }
          function d(t) {
            return 'number' == typeof t;
          }
          function p(t) {
            return (
              !0 === t ||
              !1 === t ||
              ((function (t) {
                return y(t) && null !== t;
              })(t) &&
                '[object Boolean]' == m(t))
            );
          }
          function y(t) {
            return 'object' === n(t);
          }
          function g(t) {
            return null != t;
          }
          function v(t) {
            return !t.trim().length;
          }
          function m(t) {
            return null == t
              ? void 0 === t
                ? '[object Undefined]'
                : '[object Null]'
              : Object.prototype.toString.call(t);
          }
          var _ = function (t) {
              return 'Missing '.concat(t, ' property in key');
            },
            b = function (t) {
              return "Property 'weight' in key '".concat(t, "' must be a positive integer");
            },
            w = Object.prototype.hasOwnProperty,
            x = (function () {
              function t(e) {
                var n = this;
                r(this, t), (this._keys = []), (this._keyMap = {});
                var i = 0;
                e.forEach(function (t) {
                  var e = k(t);
                  (i += e.weight), n._keys.push(e), (n._keyMap[e.id] = e), (i += e.weight);
                }),
                  this._keys.forEach(function (t) {
                    t.weight /= i;
                  });
              }
              return (
                o(t, [
                  {
                    key: 'get',
                    value: function (t) {
                      return this._keyMap[t];
                    },
                  },
                  {
                    key: 'keys',
                    value: function () {
                      return this._keys;
                    },
                  },
                  {
                    key: 'toJSON',
                    value: function () {
                      return JSON.stringify(this._keys);
                    },
                  },
                ]),
                t
              );
            })();
          function k(t) {
            var e = null,
              n = null,
              r = null,
              i = 1,
              o = null;
            if (l(t) || s(t)) (r = t), (e = M(t)), (n = E(t));
            else {
              if (!w.call(t, 'name')) throw new Error(_('name'));
              var a = t.name;
              if (((r = a), w.call(t, 'weight') && (i = t.weight) <= 0)) throw new Error(b(a));
              (e = M(a)), (n = E(a)), (o = t.getFn);
            }
            return { path: e, id: n, weight: i, src: r, getFn: o };
          }
          function M(t) {
            return s(t) ? t : t.split('.');
          }
          function E(t) {
            return s(t) ? t.join('.') : t;
          }
          var A = {
              useExtendedSearch: !1,
              getFn: function (t, e) {
                var n = [],
                  r = !1;
                return (
                  (function t(e, i, o) {
                    if (g(e))
                      if (i[o]) {
                        var a = e[i[o]];
                        if (!g(a)) return;
                        if (o === i.length - 1 && (l(a) || d(a) || p(a))) n.push(f(a));
                        else if (s(a)) {
                          r = !0;
                          for (var u = 0, c = a.length; u < c; u += 1) t(a[u], i, o + 1);
                        } else i.length && t(a, i, o + 1);
                      } else n.push(e);
                  })(t, l(e) ? e.split('.') : e, 0),
                  r ? n : n[0]
                );
              },
              ignoreLocation: !1,
              ignoreFieldNorm: !1,
              fieldNormWeight: 1,
            },
            S = e(
              e(
                e(
                  e(
                    {},
                    {
                      isCaseSensitive: !1,
                      includeScore: !1,
                      keys: [],
                      shouldSort: !0,
                      sortFn: function (t, e) {
                        return t.score === e.score
                          ? t.idx < e.idx
                            ? -1
                            : 1
                          : t.score < e.score
                          ? -1
                          : 1;
                      },
                    },
                  ),
                  { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
                ),
                { location: 0, threshold: 0.6, distance: 100 },
              ),
              A,
            ),
            L = /[^ ]+/g;
          var N = (function () {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.getFn,
                i = void 0 === n ? S.getFn : n,
                o = e.fieldNormWeight,
                a = void 0 === o ? S.fieldNormWeight : o;
              r(this, t),
                (this.norm = (function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    n = new Map(),
                    r = Math.pow(10, e);
                  return {
                    get: function (e) {
                      var i = e.match(L).length;
                      if (n.has(i)) return n.get(i);
                      var o = 1 / Math.pow(i, 0.5 * t),
                        a = parseFloat(Math.round(o * r) / r);
                      return n.set(i, a), a;
                    },
                    clear: function () {
                      n.clear();
                    },
                  };
                })(a, 3)),
                (this.getFn = i),
                (this.isCreated = !1),
                this.setIndexRecords();
            }
            return (
              o(t, [
                {
                  key: 'setSources',
                  value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this.docs = t;
                  },
                },
                {
                  key: 'setIndexRecords',
                  value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this.records = t;
                  },
                },
                {
                  key: 'setKeys',
                  value: function () {
                    var t = this,
                      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    (this.keys = e),
                      (this._keysMap = {}),
                      e.forEach(function (e, n) {
                        t._keysMap[e.id] = n;
                      });
                  },
                },
                {
                  key: 'create',
                  value: function () {
                    var t = this;
                    !this.isCreated &&
                      this.docs.length &&
                      ((this.isCreated = !0),
                      l(this.docs[0])
                        ? this.docs.forEach(function (e, n) {
                            t._addString(e, n);
                          })
                        : this.docs.forEach(function (e, n) {
                            t._addObject(e, n);
                          }),
                      this.norm.clear());
                  },
                },
                {
                  key: 'add',
                  value: function (t) {
                    var e = this.size();
                    l(t) ? this._addString(t, e) : this._addObject(t, e);
                  },
                },
                {
                  key: 'removeAt',
                  value: function (t) {
                    this.records.splice(t, 1);
                    for (var e = t, n = this.size(); e < n; e += 1) this.records[e].i -= 1;
                  },
                },
                {
                  key: 'getValueForItemAtKeyId',
                  value: function (t, e) {
                    return t[this._keysMap[e]];
                  },
                },
                {
                  key: 'size',
                  value: function () {
                    return this.records.length;
                  },
                },
                {
                  key: '_addString',
                  value: function (t, e) {
                    if (g(t) && !v(t)) {
                      var n = { v: t, i: e, n: this.norm.get(t) };
                      this.records.push(n);
                    }
                  },
                },
                {
                  key: '_addObject',
                  value: function (t, e) {
                    var n = this,
                      r = { i: e, $: {} };
                    this.keys.forEach(function (e, i) {
                      var o = e.getFn ? e.getFn(t) : n.getFn(t, e.path);
                      if (g(o))
                        if (s(o))
                          !(function () {
                            for (var t = [], e = [{ nestedArrIndex: -1, value: o }]; e.length; ) {
                              var a = e.pop(),
                                u = a.nestedArrIndex,
                                c = a.value;
                              if (g(c))
                                if (l(c) && !v(c)) {
                                  var h = { v: c, i: u, n: n.norm.get(c) };
                                  t.push(h);
                                } else
                                  s(c) &&
                                    c.forEach(function (t, n) {
                                      e.push({ nestedArrIndex: n, value: t });
                                    });
                            }
                            r.$[i] = t;
                          })();
                        else if (l(o) && !v(o)) {
                          var a = { v: o, n: n.norm.get(o) };
                          r.$[i] = a;
                        }
                    }),
                      this.records.push(r);
                  },
                },
                {
                  key: 'toJSON',
                  value: function () {
                    return { keys: this.keys, records: this.records };
                  },
                },
              ]),
              t
            );
          })();
          function C(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = n.getFn,
              i = void 0 === r ? S.getFn : r,
              o = n.fieldNormWeight,
              a = void 0 === o ? S.fieldNormWeight : o,
              u = new N({ getFn: i, fieldNormWeight: a });
            return u.setKeys(t.map(k)), u.setSources(e), u.create(), u;
          }
          function T(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e.errors,
              r = void 0 === n ? 0 : n,
              i = e.currentLocation,
              o = void 0 === i ? 0 : i,
              a = e.expectedLocation,
              u = void 0 === a ? 0 : a,
              c = e.distance,
              s = void 0 === c ? S.distance : c,
              h = e.ignoreLocation,
              f = void 0 === h ? S.ignoreLocation : h,
              l = r / t.length;
            if (f) return l;
            var d = Math.abs(u - o);
            return s ? l + d / s : d ? 1 : l;
          }
          var G = 32;
          function U(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
              i = r.location,
              o = void 0 === i ? S.location : i,
              a = r.distance,
              u = void 0 === a ? S.distance : a,
              c = r.threshold,
              s = void 0 === c ? S.threshold : c,
              h = r.findAllMatches,
              f = void 0 === h ? S.findAllMatches : h,
              l = r.minMatchCharLength,
              d = void 0 === l ? S.minMatchCharLength : l,
              p = r.includeMatches,
              y = void 0 === p ? S.includeMatches : p,
              g = r.ignoreLocation,
              v = void 0 === g ? S.ignoreLocation : g;
            if (e.length > G) throw new Error('Pattern length exceeds max of '.concat(G, '.'));
            for (
              var m,
                _ = e.length,
                b = t.length,
                w = Math.max(0, Math.min(o, b)),
                x = s,
                k = w,
                M = d > 1 || y,
                E = M ? Array(b) : [];
              (m = t.indexOf(e, k)) > -1;

            ) {
              var A = T(e, {
                currentLocation: m,
                expectedLocation: w,
                distance: u,
                ignoreLocation: v,
              });
              if (((x = Math.min(A, x)), (k = m + _), M))
                for (var L = 0; L < _; ) (E[m + L] = 1), (L += 1);
            }
            k = -1;
            for (var N = [], C = 1, U = _ + b, D = 1 << (_ - 1), O = 0; O < _; O += 1) {
              for (var j = 0, z = U; j < z; )
                T(e, {
                  errors: O,
                  currentLocation: w + z,
                  expectedLocation: w,
                  distance: u,
                  ignoreLocation: v,
                }) <= x
                  ? (j = z)
                  : (U = z),
                  (z = Math.floor((U - j) / 2 + j));
              U = z;
              var P = Math.max(1, w - z + 1),
                I = f ? b : Math.min(w + z, b) + _,
                R = Array(I + 2);
              R[I + 1] = (1 << O) - 1;
              for (var F = I; F >= P; F -= 1) {
                var q = F - 1,
                  B = n[t.charAt(q)];
                if (
                  (M && (E[q] = +!!B),
                  (R[F] = ((R[F + 1] << 1) | 1) & B),
                  O && (R[F] |= ((N[F + 1] | N[F]) << 1) | 1 | N[F + 1]),
                  R[F] & D &&
                    (C = T(e, {
                      errors: O,
                      currentLocation: q,
                      expectedLocation: w,
                      distance: u,
                      ignoreLocation: v,
                    })) <= x)
                ) {
                  if (((x = C), (k = q) <= w)) break;
                  P = Math.max(1, 2 * w - k);
                }
              }
              if (
                T(e, {
                  errors: O + 1,
                  currentLocation: w,
                  expectedLocation: w,
                  distance: u,
                  ignoreLocation: v,
                }) > x
              )
                break;
              N = R;
            }
            var Y = { isMatch: k >= 0, score: Math.max(0.001, C) };
            if (M) {
              var W = (function () {
                for (
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : S.minMatchCharLength,
                    n = [],
                    r = -1,
                    i = -1,
                    o = 0,
                    a = t.length;
                  o < a;
                  o += 1
                ) {
                  var u = t[o];
                  u && -1 === r
                    ? (r = o)
                    : u || -1 === r || ((i = o - 1) - r + 1 >= e && n.push([r, i]), (r = -1));
                }
                return t[o - 1] && o - r >= e && n.push([r, o - 1]), n;
              })(E, d);
              W.length ? y && (Y.indices = W) : (Y.isMatch = !1);
            }
            return Y;
          }
          function D(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n += 1) {
              var i = t.charAt(n);
              e[i] = (e[i] || 0) | (1 << (r - n - 1));
            }
            return e;
          }
          var O = (function () {
              function t(e) {
                var n = this,
                  i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  o = i.location,
                  a = void 0 === o ? S.location : o,
                  u = i.threshold,
                  c = void 0 === u ? S.threshold : u,
                  s = i.distance,
                  h = void 0 === s ? S.distance : s,
                  f = i.includeMatches,
                  l = void 0 === f ? S.includeMatches : f,
                  d = i.findAllMatches,
                  p = void 0 === d ? S.findAllMatches : d,
                  y = i.minMatchCharLength,
                  g = void 0 === y ? S.minMatchCharLength : y,
                  v = i.isCaseSensitive,
                  m = void 0 === v ? S.isCaseSensitive : v,
                  _ = i.ignoreLocation,
                  b = void 0 === _ ? S.ignoreLocation : _;
                if (
                  (r(this, t),
                  (this.options = {
                    location: a,
                    threshold: c,
                    distance: h,
                    includeMatches: l,
                    findAllMatches: p,
                    minMatchCharLength: g,
                    isCaseSensitive: m,
                    ignoreLocation: b,
                  }),
                  (this.pattern = m ? e : e.toLowerCase()),
                  (this.chunks = []),
                  this.pattern.length)
                ) {
                  var w = function (t, e) {
                      n.chunks.push({ pattern: t, alphabet: D(t), startIndex: e });
                    },
                    x = this.pattern.length;
                  if (x > G) {
                    for (var k = 0, M = x % G, E = x - M; k < E; )
                      w(this.pattern.substr(k, G), k), (k += G);
                    if (M) {
                      var A = x - G;
                      w(this.pattern.substr(A), A);
                    }
                  } else w(this.pattern, 0);
                }
              }
              return (
                o(t, [
                  {
                    key: 'searchIn',
                    value: function (t) {
                      var e = this.options,
                        n = e.isCaseSensitive,
                        r = e.includeMatches;
                      if ((n || (t = t.toLowerCase()), this.pattern === t)) {
                        var i = { isMatch: !0, score: 0 };
                        return r && (i.indices = [[0, t.length - 1]]), i;
                      }
                      var o = this.options,
                        a = o.location,
                        c = o.distance,
                        s = o.threshold,
                        h = o.findAllMatches,
                        f = o.minMatchCharLength,
                        l = o.ignoreLocation,
                        d = [],
                        p = 0,
                        y = !1;
                      this.chunks.forEach(function (e) {
                        var n = e.pattern,
                          i = e.alphabet,
                          o = e.startIndex,
                          g = U(t, n, i, {
                            location: a + o,
                            distance: c,
                            threshold: s,
                            findAllMatches: h,
                            minMatchCharLength: f,
                            includeMatches: r,
                            ignoreLocation: l,
                          }),
                          v = g.isMatch,
                          m = g.score,
                          _ = g.indices;
                        v && (y = !0), (p += m), v && _ && (d = [].concat(u(d), u(_)));
                      });
                      var g = { isMatch: y, score: y ? p / this.chunks.length : 1 };
                      return y && r && (g.indices = d), g;
                    },
                  },
                ]),
                t
              );
            })(),
            j = [];
          function z(t, e) {
            for (var n = 0, r = j.length; n < r; n += 1) {
              var i = j[n];
              if (i.condition(t, e)) return new i(t, e);
            }
            return new O(t, e);
          }
          var P = '$and',
            I = '$or',
            R = '$path',
            F = '$val',
            q = function (t) {
              return !(!t[P] && !t[I]);
            },
            B = function (t) {
              return a(
                {},
                P,
                Object.keys(t).map(function (e) {
                  return a({}, e, t[e]);
                }),
              );
            };
          function Y(t, e) {
            var n = t.matches;
            (e.matches = []),
              g(n) &&
                n.forEach(function (t) {
                  if (g(t.indices) && t.indices.length) {
                    var n = { indices: t.indices, value: t.value };
                    t.key && (n.key = t.key.src),
                      t.idx > -1 && (n.refIndex = t.idx),
                      e.matches.push(n);
                  }
                });
          }
          function W(t, e) {
            e.score = t.score;
          }
          var K = (function () {
            function t(n) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = arguments.length > 2 ? arguments[2] : void 0;
              if ((r(this, t), (this.options = e(e({}, S), i)), this.options.useExtendedSearch))
                throw new Error('Extended search is not available');
              (this._keyStore = new x(this.options.keys)), this.setCollection(n, o);
            }
            return (
              o(t, [
                {
                  key: 'setCollection',
                  value: function (t, e) {
                    if (((this._docs = t), e && !(e instanceof N)))
                      throw new Error("Incorrect 'index' type");
                    this._myIndex =
                      e ||
                      C(this.options.keys, this._docs, {
                        getFn: this.options.getFn,
                        fieldNormWeight: this.options.fieldNormWeight,
                      });
                  },
                },
                {
                  key: 'add',
                  value: function (t) {
                    g(t) && (this._docs.push(t), this._myIndex.add(t));
                  },
                },
                {
                  key: 'remove',
                  value: function () {
                    for (
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : function () {
                                return !1;
                              },
                        e = [],
                        n = 0,
                        r = this._docs.length;
                      n < r;
                      n += 1
                    ) {
                      var i = this._docs[n];
                      t(i, n) && (this.removeAt(n), (n -= 1), (r -= 1), e.push(i));
                    }
                    return e;
                  },
                },
                {
                  key: 'removeAt',
                  value: function (t) {
                    this._docs.splice(t, 1), this._myIndex.removeAt(t);
                  },
                },
                {
                  key: 'getIndex',
                  value: function () {
                    return this._myIndex;
                  },
                },
                {
                  key: 'search',
                  value: function (t) {
                    var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                        .limit,
                      n = void 0 === e ? -1 : e,
                      r = this.options,
                      i = r.includeMatches,
                      o = r.includeScore,
                      a = r.shouldSort,
                      u = r.sortFn,
                      c = r.ignoreFieldNorm,
                      s = l(t)
                        ? l(this._docs[0])
                          ? this._searchStringList(t)
                          : this._searchObjectList(t)
                        : this._searchLogical(t);
                    return (
                      (function (t, e) {
                        var n = e.ignoreFieldNorm,
                          r = void 0 === n ? S.ignoreFieldNorm : n;
                        t.forEach(function (t) {
                          var e = 1;
                          t.matches.forEach(function (t) {
                            var n = t.key,
                              i = t.norm,
                              o = t.score,
                              a = n ? n.weight : null;
                            e *= Math.pow(
                              0 === o && a ? Number.EPSILON : o,
                              (a || 1) * (r ? 1 : i),
                            );
                          }),
                            (t.score = e);
                        });
                      })(s, { ignoreFieldNorm: c }),
                      a && s.sort(u),
                      d(n) && n > -1 && (s = s.slice(0, n)),
                      (function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                          r = n.includeMatches,
                          i = void 0 === r ? S.includeMatches : r,
                          o = n.includeScore,
                          a = void 0 === o ? S.includeScore : o,
                          u = [];
                        return (
                          i && u.push(Y),
                          a && u.push(W),
                          t.map(function (t) {
                            var n = t.idx,
                              r = { item: e[n], refIndex: n };
                            return (
                              u.length &&
                                u.forEach(function (e) {
                                  e(t, r);
                                }),
                              r
                            );
                          })
                        );
                      })(s, this._docs, { includeMatches: i, includeScore: o })
                    );
                  },
                },
                {
                  key: '_searchStringList',
                  value: function (t) {
                    var e = z(t, this.options),
                      n = this._myIndex.records,
                      r = [];
                    return (
                      n.forEach(function (t) {
                        var n = t.v,
                          i = t.i,
                          o = t.n;
                        if (g(n)) {
                          var a = e.searchIn(n),
                            u = a.isMatch,
                            c = a.score,
                            s = a.indices;
                          u &&
                            r.push({
                              item: n,
                              idx: i,
                              matches: [{ score: c, value: n, norm: o, indices: s }],
                            });
                        }
                      }),
                      r
                    );
                  },
                },
                {
                  key: '_searchLogical',
                  value: function (t) {
                    throw new Error('Logical search is not available');
                  },
                },
                {
                  key: '_searchObjectList',
                  value: function (t) {
                    var e = this,
                      n = z(t, this.options),
                      r = this._myIndex,
                      i = r.keys,
                      o = r.records,
                      a = [];
                    return (
                      o.forEach(function (t) {
                        var r = t.$,
                          o = t.i;
                        if (g(r)) {
                          var c = [];
                          i.forEach(function (t, i) {
                            c.push.apply(
                              c,
                              u(e._findMatches({ key: t, value: r[i], searcher: n })),
                            );
                          }),
                            c.length && a.push({ idx: o, item: r, matches: c });
                        }
                      }),
                      a
                    );
                  },
                },
                {
                  key: '_findMatches',
                  value: function (t) {
                    var e = t.key,
                      n = t.value,
                      r = t.searcher;
                    if (!g(n)) return [];
                    var i = [];
                    if (s(n))
                      n.forEach(function (t) {
                        var n = t.v,
                          o = t.i,
                          a = t.n;
                        if (g(n)) {
                          var u = r.searchIn(n),
                            c = u.isMatch,
                            s = u.score,
                            h = u.indices;
                          c && i.push({ score: s, key: e, value: n, idx: o, norm: a, indices: h });
                        }
                      });
                    else {
                      var o = n.v,
                        a = n.n,
                        u = r.searchIn(o),
                        c = u.isMatch,
                        h = u.score,
                        f = u.indices;
                      c && i.push({ score: h, key: e, value: o, norm: a, indices: f });
                    }
                    return i;
                  },
                },
              ]),
              t
            );
          })();
          return (
            (K.version = '6.6.2'),
            (K.createIndex = C),
            (K.parseIndex = function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.getFn,
                r = void 0 === n ? S.getFn : n,
                i = e.fieldNormWeight,
                o = void 0 === i ? S.fieldNormWeight : i,
                a = t.keys,
                u = t.records,
                c = new N({ getFn: r, fieldNormWeight: o });
              return c.setKeys(a), c.setIndexRecords(u), c;
            }),
            (K.config = S),
            (K.parseQuery = function (t, e) {
              var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).auto,
                r = void 0 === n || n;
              return (
                q(t) || (t = B(t)),
                (function t(n) {
                  var i = Object.keys(n),
                    o = (function (t) {
                      return !!t[R];
                    })(n);
                  if (!o && i.length > 1 && !q(n)) return t(B(n));
                  if (
                    (function (t) {
                      return !s(t) && y(t) && !q(t);
                    })(n)
                  ) {
                    var a = o ? n[R] : i[0],
                      u = o ? n[F] : n[a];
                    if (!l(u))
                      throw new Error(
                        (function (t) {
                          return 'Invalid value for key '.concat(t);
                        })(a),
                      );
                    var c = { keyId: E(a), pattern: u };
                    return r && (c.searcher = z(u, e)), c;
                  }
                  var h = { children: [], operator: i[0] };
                  return (
                    i.forEach(function (e) {
                      var r = n[e];
                      s(r) &&
                        r.forEach(function (e) {
                          h.children.push(t(e));
                        });
                    }),
                    h
                  );
                })(t)
              );
            }),
            K
          );
        })();
      },
      12: (t, e, n) => {
        var r = n(453);
        function i(t) {
          (this.graph = t),
            (this.queue = new r(Array, t.order)),
            (this.seen = new Set()),
            (this.size = 0);
        }
        (i.prototype.hasAlreadySeenEverything = function () {
          return this.seen.size === this.graph.order;
        }),
          (i.prototype.countUnseenNodes = function () {
            return this.graph.order - this.seen.size;
          }),
          (i.prototype.forEachNodeYetUnseen = function (t) {
            var e = this.seen,
              n = this.graph;
            n.someNode(function (r, i) {
              return e.size === n.order || (!e.has(r) && !!t(r, i));
            });
          }),
          (i.prototype.has = function (t) {
            return this.seen.has(t);
          }),
          (i.prototype.push = function (t) {
            var e = this.seen.size;
            return this.seen.add(t), e !== this.seen.size && (this.queue.push(t), this.size++, !0);
          }),
          (i.prototype.pushWith = function (t, e) {
            var n = this.seen.size;
            return this.seen.add(t), n !== this.seen.size && (this.queue.push(e), this.size++, !0);
          }),
          (i.prototype.shift = function () {
            var t = this.queue.shift();
            return (this.size = this.queue.size), t;
          }),
          (t.exports = i);
      },
      181: (t, e, n) => {
        var r = n(186),
          i = n(12),
          o = n(480),
          a = o.TraversalRecord,
          u = o.capitalize;
        e.a = function (t, e, n, o) {
          if (((o = o || {}), !r(t)))
            throw new Error('graphology-traversal/bfs: expecting a graphology instance.');
          if ('function' != typeof n)
            throw new Error('graphology-traversal/bfs: given callback is not a function.');
          if (0 !== t.order) {
            var c,
              s = new i(t),
              h = t['forEach' + u(o.mode || 'outbound') + 'Neighbor'].bind(t);
            (null === e
              ? s.forEachNodeYetUnseen.bind(s)
              : function (n) {
                  n((e = '' + e), t.getNodeAttributes(e));
                })(function (t, e) {
              for (s.pushWith(t, new a(t, e, 0)); 0 !== s.size; )
                (c = s.shift()), !0 !== n(c.node, c.attributes, c.depth) && h(c.node, f);
            });
          }
          function f(t, e) {
            s.pushWith(t, new a(t, e, c.depth + 1));
          }
        };
      },
      480: (t, e) => {
        (e.TraversalRecord = function (t, e, n) {
          (this.node = t), (this.attributes = e), (this.depth = n);
        }),
          (e.capitalize = function (t) {
            return t[0].toUpperCase() + t.slice(1);
          });
      },
      186: (t) => {
        t.exports = function (t) {
          return (
            null !== t &&
            'object' == typeof t &&
            'function' == typeof t.addUndirectedEdgeWithKey &&
            'function' == typeof t.dropNode &&
            'boolean' == typeof t.multi
          );
        };
      },
      698: function (t) {
        t.exports = (function () {
          'use strict';
          function t(e) {
            return (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(e);
          }
          function e(t, e) {
            (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), r(t, e);
          }
          function n(t) {
            return (
              (n = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              n(t)
            );
          }
          function r(t, e) {
            return (
              (r = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              r(t, e)
            );
          }
          function i(t, e, n) {
            return (
              (i = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? Reflect.construct.bind()
                : function (t, e, n) {
                    var i = [null];
                    i.push.apply(i, e);
                    var o = new (Function.bind.apply(t, i))();
                    return n && r(o, n.prototype), o;
                  }),
              i.apply(null, arguments)
            );
          }
          function o(t) {
            var e = 'function' == typeof Map ? new Map() : void 0;
            return (
              (o = function (t) {
                if (
                  null === t ||
                  ((o = t), -1 === Function.toString.call(o).indexOf('[native code]'))
                )
                  return t;
                var o;
                if ('function' != typeof t)
                  throw new TypeError('Super expression must either be null or a function');
                if (void 0 !== e) {
                  if (e.has(t)) return e.get(t);
                  e.set(t, a);
                }
                function a() {
                  return i(t, arguments, n(this).constructor);
                }
                return (
                  (a.prototype = Object.create(t.prototype, {
                    constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                  r(a, t)
                );
              }),
              o(t)
            );
          }
          function a(t) {
            if (void 0 === t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
          }
          var u = function () {
            for (var t = arguments[0], e = 1, n = arguments.length; e < n; e++)
              if (arguments[e]) for (var r in arguments[e]) t[r] = arguments[e][r];
            return t;
          };
          function c(t, e, n, r) {
            var i = t._nodes.get(e),
              o = null;
            return i
              ? (o =
                  'mixed' === r
                    ? (i.out && i.out[n]) || (i.undirected && i.undirected[n])
                    : 'directed' === r
                    ? i.out && i.out[n]
                    : i.undirected && i.undirected[n])
              : o;
          }
          function s(e) {
            return 'object' === t(e) && null !== e && e.constructor === Object;
          }
          function h(t) {
            var e;
            for (e in t) return !1;
            return !0;
          }
          function f(t, e, n) {
            Object.defineProperty(t, e, {
              enumerable: !1,
              configurable: !1,
              writable: !0,
              value: n,
            });
          }
          function l(t, e, n) {
            var r = { enumerable: !0, configurable: !0 };
            'function' == typeof n ? (r.get = n) : ((r.value = n), (r.writable = !1)),
              Object.defineProperty(t, e, r);
          }
          function d(t) {
            return !(!s(t) || (t.attributes && !Array.isArray(t.attributes)));
          }
          'function' == typeof Object.assign && (u = Object.assign);
          var p,
            y = { exports: {} },
            g = 'object' == typeof Reflect ? Reflect : null,
            v =
              g && 'function' == typeof g.apply
                ? g.apply
                : function (t, e, n) {
                    return Function.prototype.apply.call(t, e, n);
                  };
          p =
            g && 'function' == typeof g.ownKeys
              ? g.ownKeys
              : Object.getOwnPropertySymbols
              ? function (t) {
                  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
                }
              : function (t) {
                  return Object.getOwnPropertyNames(t);
                };
          var m =
            Number.isNaN ||
            function (t) {
              return t != t;
            };
          function _() {
            _.init.call(this);
          }
          (y.exports = _),
            (y.exports.once = function (t, e) {
              return new Promise(function (n, r) {
                function i(n) {
                  t.removeListener(e, o), r(n);
                }
                function o() {
                  'function' == typeof t.removeListener && t.removeListener('error', i),
                    n([].slice.call(arguments));
                }
                N(t, e, o, { once: !0 }),
                  'error' !== e &&
                    (function (t, e, n) {
                      'function' == typeof t.on && N(t, 'error', e, { once: !0 });
                    })(t, i);
              });
            }),
            (_.EventEmitter = _),
            (_.prototype._events = void 0),
            (_.prototype._eventsCount = 0),
            (_.prototype._maxListeners = void 0);
          var b = 10;
          function w(t) {
            if ('function' != typeof t)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' + typeof t,
              );
          }
          function x(t) {
            return void 0 === t._maxListeners ? _.defaultMaxListeners : t._maxListeners;
          }
          function k(t, e, n, r) {
            var i, o, a, u;
            if (
              (w(n),
              void 0 === (o = t._events)
                ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
                : (void 0 !== o.newListener &&
                    (t.emit('newListener', e, n.listener ? n.listener : n), (o = t._events)),
                  (a = o[e])),
              void 0 === a)
            )
              (a = o[e] = n), ++t._eventsCount;
            else if (
              ('function' == typeof a
                ? (a = o[e] = r ? [n, a] : [a, n])
                : r
                ? a.unshift(n)
                : a.push(n),
              (i = x(t)) > 0 && a.length > i && !a.warned)
            ) {
              a.warned = !0;
              var c = new Error(
                'Possible EventEmitter memory leak detected. ' +
                  a.length +
                  ' ' +
                  String(e) +
                  ' listeners added. Use emitter.setMaxListeners() to increase limit',
              );
              (c.name = 'MaxListenersExceededWarning'),
                (c.emitter = t),
                (c.type = e),
                (c.count = a.length),
                (u = c),
                console && console.warn && console.warn(u);
            }
            return t;
          }
          function M() {
            if (!this.fired)
              return (
                this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                0 === arguments.length
                  ? this.listener.call(this.target)
                  : this.listener.apply(this.target, arguments)
              );
          }
          function E(t, e, n) {
            var r = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n },
              i = M.bind(r);
            return (i.listener = n), (r.wrapFn = i), i;
          }
          function A(t, e, n) {
            var r = t._events;
            if (void 0 === r) return [];
            var i = r[e];
            return void 0 === i
              ? []
              : 'function' == typeof i
              ? n
                ? [i.listener || i]
                : [i]
              : n
              ? (function (t) {
                  for (var e = new Array(t.length), n = 0; n < e.length; ++n)
                    e[n] = t[n].listener || t[n];
                  return e;
                })(i)
              : L(i, i.length);
          }
          function S(t) {
            var e = this._events;
            if (void 0 !== e) {
              var n = e[t];
              if ('function' == typeof n) return 1;
              if (void 0 !== n) return n.length;
            }
            return 0;
          }
          function L(t, e) {
            for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
            return n;
          }
          function N(t, e, n, r) {
            if ('function' == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
            else {
              if ('function' != typeof t.addEventListener)
                throw new TypeError(
                  'The "emitter" argument must be of type EventEmitter. Received type ' + typeof t,
                );
              t.addEventListener(e, function i(o) {
                r.once && t.removeEventListener(e, i), n(o);
              });
            }
          }
          function C(t) {
            if ('function' != typeof t)
              throw new Error('obliterator/iterator: expecting a function!');
            this.next = t;
          }
          Object.defineProperty(_, 'defaultMaxListeners', {
            enumerable: !0,
            get: function () {
              return b;
            },
            set: function (t) {
              if ('number' != typeof t || t < 0 || m(t))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    t +
                    '.',
                );
              b = t;
            },
          }),
            (_.init = function () {
              (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (_.prototype.setMaxListeners = function (t) {
              if ('number' != typeof t || t < 0 || m(t))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    t +
                    '.',
                );
              return (this._maxListeners = t), this;
            }),
            (_.prototype.getMaxListeners = function () {
              return x(this);
            }),
            (_.prototype.emit = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
              var r = 'error' === t,
                i = this._events;
              if (void 0 !== i) r = r && void 0 === i.error;
              else if (!r) return !1;
              if (r) {
                var o;
                if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
                var a = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
                throw ((a.context = o), a);
              }
              var u = i[t];
              if (void 0 === u) return !1;
              if ('function' == typeof u) v(u, this, e);
              else {
                var c = u.length,
                  s = L(u, c);
                for (n = 0; n < c; ++n) v(s[n], this, e);
              }
              return !0;
            }),
            (_.prototype.addListener = function (t, e) {
              return k(this, t, e, !1);
            }),
            (_.prototype.on = _.prototype.addListener),
            (_.prototype.prependListener = function (t, e) {
              return k(this, t, e, !0);
            }),
            (_.prototype.once = function (t, e) {
              return w(e), this.on(t, E(this, t, e)), this;
            }),
            (_.prototype.prependOnceListener = function (t, e) {
              return w(e), this.prependListener(t, E(this, t, e)), this;
            }),
            (_.prototype.removeListener = function (t, e) {
              var n, r, i, o, a;
              if ((w(e), void 0 === (r = this._events))) return this;
              if (void 0 === (n = r[t])) return this;
              if (n === e || n.listener === e)
                0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : (delete r[t],
                    r.removeListener && this.emit('removeListener', t, n.listener || e));
              else if ('function' != typeof n) {
                for (i = -1, o = n.length - 1; o >= 0; o--)
                  if (n[o] === e || n[o].listener === e) {
                    (a = n[o].listener), (i = o);
                    break;
                  }
                if (i < 0) return this;
                0 === i
                  ? n.shift()
                  : (function (t, e) {
                      for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                      t.pop();
                    })(n, i),
                  1 === n.length && (r[t] = n[0]),
                  void 0 !== r.removeListener && this.emit('removeListener', t, a || e);
              }
              return this;
            }),
            (_.prototype.off = _.prototype.removeListener),
            (_.prototype.removeAllListeners = function (t) {
              var e, n, r;
              if (void 0 === (n = this._events)) return this;
              if (void 0 === n.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                    : void 0 !== n[t] &&
                      (0 == --this._eventsCount
                        ? (this._events = Object.create(null))
                        : delete n[t]),
                  this
                );
              if (0 === arguments.length) {
                var i,
                  o = Object.keys(n);
                for (r = 0; r < o.length; ++r)
                  'removeListener' !== (i = o[r]) && this.removeAllListeners(i);
                return (
                  this.removeAllListeners('removeListener'),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ('function' == typeof (e = n[t])) this.removeListener(t, e);
              else if (void 0 !== e)
                for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
              return this;
            }),
            (_.prototype.listeners = function (t) {
              return A(this, t, !0);
            }),
            (_.prototype.rawListeners = function (t) {
              return A(this, t, !1);
            }),
            (_.listenerCount = function (t, e) {
              return 'function' == typeof t.listenerCount ? t.listenerCount(e) : S.call(t, e);
            }),
            (_.prototype.listenerCount = S),
            (_.prototype.eventNames = function () {
              return this._eventsCount > 0 ? p(this._events) : [];
            }),
            'undefined' != typeof Symbol &&
              (C.prototype[Symbol.iterator] = function () {
                return this;
              }),
            (C.of = function () {
              var t = arguments,
                e = t.length,
                n = 0;
              return new C(function () {
                return n >= e ? { done: !0 } : { done: !1, value: t[n++] };
              });
            }),
            (C.empty = function () {
              return new C(function () {
                return { done: !0 };
              });
            }),
            (C.fromSequence = function (t) {
              var e = 0,
                n = t.length;
              return new C(function () {
                return e >= n ? { done: !0 } : { done: !1, value: t[e++] };
              });
            }),
            (C.is = function (t) {
              return (
                t instanceof C ||
                ('object' == typeof t && null !== t && 'function' == typeof t.next)
              );
            });
          var T = C,
            G = {};
          (G.ARRAY_BUFFER_SUPPORT = 'undefined' != typeof ArrayBuffer),
            (G.SYMBOL_SUPPORT = 'undefined' != typeof Symbol);
          var U = T,
            D = G,
            O = D.ARRAY_BUFFER_SUPPORT,
            j = D.SYMBOL_SUPPORT,
            z = function (t) {
              var e = (function (t) {
                return 'string' == typeof t || Array.isArray(t) || (O && ArrayBuffer.isView(t))
                  ? U.fromSequence(t)
                  : 'object' != typeof t || null === t
                  ? null
                  : j && 'function' == typeof t[Symbol.iterator]
                  ? t[Symbol.iterator]()
                  : 'function' == typeof t.next
                  ? t
                  : null;
              })(t);
              if (!e) throw new Error('obliterator: target is not iterable nor a valid iterator.');
              return e;
            },
            P = z,
            I = function (t, e) {
              for (
                var n,
                  r = arguments.length > 1 ? e : 1 / 0,
                  i = r !== 1 / 0 ? new Array(r) : [],
                  o = 0,
                  a = P(t);
                ;

              ) {
                if (o === r) return i;
                if ((n = a.next()).done) return o !== e && (i.length = o), i;
                i[o++] = n.value;
              }
            },
            R = (function (t) {
              function n(e) {
                var n;
                return ((n = t.call(this) || this).name = 'GraphError'), (n.message = e), n;
              }
              return e(n, t), n;
            })(o(Error)),
            F = (function (t) {
              function n(e) {
                var r;
                return (
                  ((r = t.call(this, e) || this).name = 'InvalidArgumentsGraphError'),
                  'function' == typeof Error.captureStackTrace &&
                    Error.captureStackTrace(a(r), n.prototype.constructor),
                  r
                );
              }
              return e(n, t), n;
            })(R),
            q = (function (t) {
              function n(e) {
                var r;
                return (
                  ((r = t.call(this, e) || this).name = 'NotFoundGraphError'),
                  'function' == typeof Error.captureStackTrace &&
                    Error.captureStackTrace(a(r), n.prototype.constructor),
                  r
                );
              }
              return e(n, t), n;
            })(R),
            B = (function (t) {
              function n(e) {
                var r;
                return (
                  ((r = t.call(this, e) || this).name = 'UsageGraphError'),
                  'function' == typeof Error.captureStackTrace &&
                    Error.captureStackTrace(a(r), n.prototype.constructor),
                  r
                );
              }
              return e(n, t), n;
            })(R);
          function Y(t, e) {
            (this.key = t), (this.attributes = e), this.clear();
          }
          function W(t, e) {
            (this.key = t), (this.attributes = e), this.clear();
          }
          function K(t, e) {
            (this.key = t), (this.attributes = e), this.clear();
          }
          function H(t, e, n, r, i) {
            (this.key = e),
              (this.attributes = i),
              (this.undirected = t),
              (this.source = n),
              (this.target = r);
          }
          function X(t, e, n, r, i, o, a) {
            var u, c, s, h;
            if (((r = '' + r), 0 === n)) {
              if (!(u = t._nodes.get(r)))
                throw new q(
                  'Graph.'.concat(e, ': could not find the "').concat(r, '" node in the graph.'),
                );
              (s = i), (h = o);
            } else if (3 === n) {
              if (((i = '' + i), !(c = t._edges.get(i))))
                throw new q(
                  'Graph.'.concat(e, ': could not find the "').concat(i, '" edge in the graph.'),
                );
              var f = c.source.key,
                l = c.target.key;
              if (r === f) u = c.target;
              else {
                if (r !== l)
                  throw new q(
                    'Graph.'
                      .concat(e, ': the "')
                      .concat(r, '" node is not attached to the "')
                      .concat(i, '" edge (')
                      .concat(f, ', ')
                      .concat(l, ').'),
                  );
                u = c.source;
              }
              (s = o), (h = a);
            } else {
              if (!(c = t._edges.get(r)))
                throw new q(
                  'Graph.'.concat(e, ': could not find the "').concat(r, '" edge in the graph.'),
                );
              (u = 1 === n ? c.source : c.target), (s = i), (h = o);
            }
            return [u, s, h];
          }
          (Y.prototype.clear = function () {
            (this.inDegree = 0),
              (this.outDegree = 0),
              (this.undirectedDegree = 0),
              (this.undirectedLoops = 0),
              (this.directedLoops = 0),
              (this.in = {}),
              (this.out = {}),
              (this.undirected = {});
          }),
            (W.prototype.clear = function () {
              (this.inDegree = 0),
                (this.outDegree = 0),
                (this.directedLoops = 0),
                (this.in = {}),
                (this.out = {});
            }),
            (K.prototype.clear = function () {
              (this.undirectedDegree = 0), (this.undirectedLoops = 0), (this.undirected = {});
            }),
            (H.prototype.attach = function () {
              var t = 'out',
                e = 'in';
              this.undirected && (t = e = 'undirected');
              var n = this.source.key,
                r = this.target.key;
              (this.source[t][r] = this),
                (this.undirected && n === r) || (this.target[e][n] = this);
            }),
            (H.prototype.attachMulti = function () {
              var t = 'out',
                e = 'in',
                n = this.source.key,
                r = this.target.key;
              this.undirected && (t = e = 'undirected');
              var i = this.source[t],
                o = i[r];
              if (void 0 === o)
                return (
                  (i[r] = this), void ((this.undirected && n === r) || (this.target[e][n] = this))
                );
              (o.previous = this), (this.next = o), (i[r] = this), (this.target[e][n] = this);
            }),
            (H.prototype.detach = function () {
              var t = this.source.key,
                e = this.target.key,
                n = 'out',
                r = 'in';
              this.undirected && (n = r = 'undirected'),
                delete this.source[n][e],
                delete this.target[r][t];
            }),
            (H.prototype.detachMulti = function () {
              var t = this.source.key,
                e = this.target.key,
                n = 'out',
                r = 'in';
              this.undirected && (n = r = 'undirected'),
                void 0 === this.previous
                  ? void 0 === this.next
                    ? (delete this.source[n][e], delete this.target[r][t])
                    : ((this.next.previous = void 0),
                      (this.source[n][e] = this.next),
                      (this.target[r][t] = this.next))
                  : ((this.previous.next = this.next),
                    void 0 !== this.next && (this.next.previous = this.previous));
            });
          var $ = [
              {
                name: function (t) {
                  return 'get'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o = X(this, e, n, t, r, i),
                      a = o[0],
                      u = o[1];
                    return a.attributes[u];
                  };
                },
              },
              {
                name: function (t) {
                  return 'get'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r) {
                    return X(this, e, n, t, r)[0].attributes;
                  };
                },
              },
              {
                name: function (t) {
                  return 'has'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o = X(this, e, n, t, r, i),
                      a = o[0],
                      u = o[1];
                    return a.attributes.hasOwnProperty(u);
                  };
                },
              },
              {
                name: function (t) {
                  return 'set'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i, o) {
                    var a = X(this, e, n, t, r, i, o),
                      u = a[0],
                      c = a[1],
                      s = a[2];
                    return (
                      (u.attributes[c] = s),
                      this.emit('nodeAttributesUpdated', {
                        key: u.key,
                        type: 'set',
                        attributes: u.attributes,
                        name: c,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'update'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i, o) {
                    var a = X(this, e, n, t, r, i, o),
                      u = a[0],
                      c = a[1],
                      s = a[2];
                    if ('function' != typeof s)
                      throw new F('Graph.'.concat(e, ': updater should be a function.'));
                    var h = u.attributes,
                      f = s(h[c]);
                    return (
                      (h[c] = f),
                      this.emit('nodeAttributesUpdated', {
                        key: u.key,
                        type: 'set',
                        attributes: u.attributes,
                        name: c,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'remove'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o = X(this, e, n, t, r, i),
                      a = o[0],
                      u = o[1];
                    return (
                      delete a.attributes[u],
                      this.emit('nodeAttributesUpdated', {
                        key: a.key,
                        type: 'remove',
                        attributes: a.attributes,
                        name: u,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'replace'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o = X(this, e, n, t, r, i),
                      a = o[0],
                      u = o[1];
                    if (!s(u))
                      throw new F(
                        'Graph.'.concat(e, ': provided attributes are not a plain object.'),
                      );
                    return (
                      (a.attributes = u),
                      this.emit('nodeAttributesUpdated', {
                        key: a.key,
                        type: 'replace',
                        attributes: a.attributes,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'merge'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o = X(this, e, n, t, r, i),
                      a = o[0],
                      c = o[1];
                    if (!s(c))
                      throw new F(
                        'Graph.'.concat(e, ': provided attributes are not a plain object.'),
                      );
                    return (
                      u(a.attributes, c),
                      this.emit('nodeAttributesUpdated', {
                        key: a.key,
                        type: 'merge',
                        attributes: a.attributes,
                        data: c,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'update'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o = X(this, e, n, t, r, i),
                      a = o[0],
                      u = o[1];
                    if ('function' != typeof u)
                      throw new F('Graph.'.concat(e, ': provided updater is not a function.'));
                    return (
                      (a.attributes = u(a.attributes)),
                      this.emit('nodeAttributesUpdated', {
                        key: a.key,
                        type: 'update',
                        attributes: a.attributes,
                      }),
                      this
                    );
                  };
                },
              },
            ],
            V = [
              {
                name: function (t) {
                  return 'get'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r) {
                    var i;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 2) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var o = '' + t,
                        a = '' + r;
                      if (((r = arguments[2]), !(i = c(this, o, a, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(o, '" - "')
                            .concat(a, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(i = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    return i.attributes[r];
                  };
                },
              },
              {
                name: function (t) {
                  return 'get'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t) {
                    var r;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 1) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var i = '' + t,
                        o = '' + arguments[1];
                      if (!(r = c(this, i, o, n)))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(i, '" - "')
                            .concat(o, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(r = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    return r.attributes;
                  };
                },
              },
              {
                name: function (t) {
                  return 'has'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r) {
                    var i;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 2) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var o = '' + t,
                        a = '' + r;
                      if (((r = arguments[2]), !(i = c(this, o, a, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(o, '" - "')
                            .concat(a, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(i = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    return i.attributes.hasOwnProperty(r);
                  };
                },
              },
              {
                name: function (t) {
                  return 'set'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 3) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var a = '' + t,
                        u = '' + r;
                      if (((r = arguments[2]), (i = arguments[3]), !(o = c(this, a, u, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(a, '" - "')
                            .concat(u, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(o = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    return (
                      (o.attributes[r] = i),
                      this.emit('edgeAttributesUpdated', {
                        key: o.key,
                        type: 'set',
                        attributes: o.attributes,
                        name: r,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'update'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r, i) {
                    var o;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 3) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var a = '' + t,
                        u = '' + r;
                      if (((r = arguments[2]), (i = arguments[3]), !(o = c(this, a, u, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(a, '" - "')
                            .concat(u, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(o = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    if ('function' != typeof i)
                      throw new F('Graph.'.concat(e, ': updater should be a function.'));
                    return (
                      (o.attributes[r] = i(o.attributes[r])),
                      this.emit('edgeAttributesUpdated', {
                        key: o.key,
                        type: 'set',
                        attributes: o.attributes,
                        name: r,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'remove'.concat(t, 'Attribute');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r) {
                    var i;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 2) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var o = '' + t,
                        a = '' + r;
                      if (((r = arguments[2]), !(i = c(this, o, a, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(o, '" - "')
                            .concat(a, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(i = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    return (
                      delete i.attributes[r],
                      this.emit('edgeAttributesUpdated', {
                        key: i.key,
                        type: 'remove',
                        attributes: i.attributes,
                        name: r,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'replace'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r) {
                    var i;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 2) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var o = '' + t,
                        a = '' + r;
                      if (((r = arguments[2]), !(i = c(this, o, a, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(o, '" - "')
                            .concat(a, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(i = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    if (!s(r))
                      throw new F(
                        'Graph.'.concat(e, ': provided attributes are not a plain object.'),
                      );
                    return (
                      (i.attributes = r),
                      this.emit('edgeAttributesUpdated', {
                        key: i.key,
                        type: 'replace',
                        attributes: i.attributes,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'merge'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r) {
                    var i;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 2) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var o = '' + t,
                        a = '' + r;
                      if (((r = arguments[2]), !(i = c(this, o, a, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(o, '" - "')
                            .concat(a, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(i = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    if (!s(r))
                      throw new F(
                        'Graph.'.concat(e, ': provided attributes are not a plain object.'),
                      );
                    return (
                      u(i.attributes, r),
                      this.emit('edgeAttributesUpdated', {
                        key: i.key,
                        type: 'merge',
                        attributes: i.attributes,
                        data: r,
                      }),
                      this
                    );
                  };
                },
              },
              {
                name: function (t) {
                  return 'update'.concat(t, 'Attributes');
                },
                attacher: function (t, e, n) {
                  t.prototype[e] = function (t, r) {
                    var i;
                    if ('mixed' !== this.type && 'mixed' !== n && n !== this.type)
                      throw new B(
                        'Graph.'
                          .concat(e, ': cannot find this type of edges in your ')
                          .concat(this.type, ' graph.'),
                      );
                    if (arguments.length > 2) {
                      if (this.multi)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.",
                          ),
                        );
                      var o = '' + t,
                        a = '' + r;
                      if (((r = arguments[2]), !(i = c(this, o, a, n))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find an edge for the given path ("')
                            .concat(o, '" - "')
                            .concat(a, '").'),
                        );
                    } else {
                      if ('mixed' !== n)
                        throw new B(
                          'Graph.'.concat(
                            e,
                            ': calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.',
                          ),
                        );
                      if (((t = '' + t), !(i = this._edges.get(t))))
                        throw new q(
                          'Graph.'
                            .concat(e, ': could not find the "')
                            .concat(t, '" edge in the graph.'),
                        );
                    }
                    if ('function' != typeof r)
                      throw new F('Graph.'.concat(e, ': provided updater is not a function.'));
                    return (
                      (i.attributes = r(i.attributes)),
                      this.emit('edgeAttributesUpdated', {
                        key: i.key,
                        type: 'update',
                        attributes: i.attributes,
                      }),
                      this
                    );
                  };
                },
              },
            ],
            Z = T,
            J = z,
            Q = function () {
              var t = arguments,
                e = null,
                n = -1;
              return new Z(function () {
                for (var r = null; ; ) {
                  if (null === e) {
                    if (++n >= t.length) return { done: !0 };
                    e = J(t[n]);
                  }
                  if (!0 !== (r = e.next()).done) break;
                  e = null;
                }
                return r;
              });
            },
            tt = [
              { name: 'edges', type: 'mixed' },
              { name: 'inEdges', type: 'directed', direction: 'in' },
              { name: 'outEdges', type: 'directed', direction: 'out' },
              { name: 'inboundEdges', type: 'mixed', direction: 'in' },
              { name: 'outboundEdges', type: 'mixed', direction: 'out' },
              { name: 'directedEdges', type: 'directed' },
              { name: 'undirectedEdges', type: 'undirected' },
            ];
          function et(t, e, n, r) {
            var i = !1;
            for (var o in e)
              if (o !== r) {
                var a = e[o];
                if (
                  ((i = n(
                    a.key,
                    a.attributes,
                    a.source.key,
                    a.target.key,
                    a.source.attributes,
                    a.target.attributes,
                    a.undirected,
                  )),
                  t && i)
                )
                  return a.key;
              }
          }
          function nt(t, e, n, r) {
            var i,
              o,
              a,
              u = !1;
            for (var c in e)
              if (c !== r) {
                i = e[c];
                do {
                  if (
                    ((o = i.source),
                    (a = i.target),
                    (u = n(
                      i.key,
                      i.attributes,
                      o.key,
                      a.key,
                      o.attributes,
                      a.attributes,
                      i.undirected,
                    )),
                    t && u)
                  )
                    return i.key;
                  i = i.next;
                } while (void 0 !== i);
              }
          }
          function rt(t, e) {
            var n,
              r = Object.keys(t),
              i = r.length,
              o = 0;
            return new T(function () {
              do {
                if (n) n = n.next;
                else {
                  if (o >= i) return { done: !0 };
                  var a = r[o++];
                  if (a === e) {
                    n = void 0;
                    continue;
                  }
                  n = t[a];
                }
              } while (!n);
              return {
                done: !1,
                value: {
                  edge: n.key,
                  attributes: n.attributes,
                  source: n.source.key,
                  target: n.target.key,
                  sourceAttributes: n.source.attributes,
                  targetAttributes: n.target.attributes,
                  undirected: n.undirected,
                },
              };
            });
          }
          function it(t, e, n, r) {
            var i = e[n];
            if (i) {
              var o = i.source,
                a = i.target;
              return r(
                i.key,
                i.attributes,
                o.key,
                a.key,
                o.attributes,
                a.attributes,
                i.undirected,
              ) && t
                ? i.key
                : void 0;
            }
          }
          function ot(t, e, n, r) {
            var i = e[n];
            if (i) {
              var o = !1;
              do {
                if (
                  ((o = r(
                    i.key,
                    i.attributes,
                    i.source.key,
                    i.target.key,
                    i.source.attributes,
                    i.target.attributes,
                    i.undirected,
                  )),
                  t && o)
                )
                  return i.key;
                i = i.next;
              } while (void 0 !== i);
            }
          }
          function at(t, e) {
            var n = t[e];
            return void 0 !== n.next
              ? new T(function () {
                  if (!n) return { done: !0 };
                  var t = {
                    edge: n.key,
                    attributes: n.attributes,
                    source: n.source.key,
                    target: n.target.key,
                    sourceAttributes: n.source.attributes,
                    targetAttributes: n.target.attributes,
                    undirected: n.undirected,
                  };
                  return (n = n.next), { done: !1, value: t };
                })
              : T.of({
                  edge: n.key,
                  attributes: n.attributes,
                  source: n.source.key,
                  target: n.target.key,
                  sourceAttributes: n.source.attributes,
                  targetAttributes: n.target.attributes,
                  undirected: n.undirected,
                });
          }
          function ut(t, e, n, r) {
            if (0 !== e.size)
              for (
                var i,
                  o,
                  a = 'mixed' !== n && n !== e.type,
                  u = 'undirected' === n,
                  c = !1,
                  s = e._edges.values();
                !0 !== (i = s.next()).done;

              )
                if (((o = i.value), !a || o.undirected === u)) {
                  var h = o,
                    f = h.key,
                    l = h.attributes,
                    d = h.source,
                    p = h.target;
                  if (
                    ((c = r(f, l, d.key, p.key, d.attributes, p.attributes, o.undirected)), t && c)
                  )
                    return f;
                }
          }
          function ct(t, e, n, r, i, o) {
            var a,
              u = e ? nt : et;
            if ('undirected' !== n) {
              if ('out' !== r && ((a = u(t, i.in, o)), t && a)) return a;
              if ('in' !== r && ((a = u(t, i.out, o, r ? void 0 : i.key)), t && a)) return a;
            }
            if ('directed' !== n && ((a = u(t, i.undirected, o)), t && a)) return a;
          }
          function st(t, e, n, r, i, o, a) {
            var u,
              c = n ? ot : it;
            if ('undirected' !== e) {
              if (void 0 !== i.in && 'out' !== r && ((u = c(t, i.in, o, a)), t && u)) return u;
              if (
                void 0 !== i.out &&
                'in' !== r &&
                (r || i.key !== o) &&
                ((u = c(t, i.out, o, a)), t && u)
              )
                return u;
            }
            if (
              'directed' !== e &&
              void 0 !== i.undirected &&
              ((u = c(t, i.undirected, o, a)), t && u)
            )
              return u;
          }
          var ht = [
            { name: 'neighbors', type: 'mixed' },
            { name: 'inNeighbors', type: 'directed', direction: 'in' },
            { name: 'outNeighbors', type: 'directed', direction: 'out' },
            { name: 'inboundNeighbors', type: 'mixed', direction: 'in' },
            { name: 'outboundNeighbors', type: 'mixed', direction: 'out' },
            { name: 'directedNeighbors', type: 'directed' },
            { name: 'undirectedNeighbors', type: 'undirected' },
          ];
          function ft() {
            (this.A = null), (this.B = null);
          }
          function lt(t, e, n, r, i) {
            for (var o in r) {
              var a = r[o],
                u = a.source,
                c = a.target,
                s = u === n ? c : u;
              if (!e || !e.has(s.key)) {
                var h = i(s.key, s.attributes);
                if (t && h) return s.key;
              }
            }
          }
          function dt(t, e, n, r, i) {
            if ('mixed' !== e) {
              if ('undirected' === e) return lt(t, null, r, r.undirected, i);
              if ('string' == typeof n) return lt(t, null, r, r[n], i);
            }
            var o,
              a = new ft();
            if ('undirected' !== e) {
              if ('out' !== n) {
                if (((o = lt(t, null, r, r.in, i)), t && o)) return o;
                a.wrap(r.in);
              }
              if ('in' !== n) {
                if (((o = lt(t, a, r, r.out, i)), t && o)) return o;
                a.wrap(r.out);
              }
            }
            if ('directed' !== e && ((o = lt(t, a, r, r.undirected, i)), t && o)) return o;
          }
          function pt(t, e, n) {
            var r = Object.keys(n),
              i = r.length,
              o = 0;
            return new T(function () {
              var a = null;
              do {
                if (o >= i) return t && t.wrap(n), { done: !0 };
                var u = n[r[o++]],
                  c = u.source,
                  s = u.target;
                (a = c === e ? s : c), t && t.has(a.key) && (a = null);
              } while (null === a);
              return { done: !1, value: { neighbor: a.key, attributes: a.attributes } };
            });
          }
          function yt(t, e, n, r, i) {
            for (
              var o, a, u, c, s, h, f, l = r._nodes.values(), d = r.type;
              !0 !== (o = l.next()).done;

            ) {
              var p = !1;
              if (((a = o.value), 'undirected' !== d))
                for (u in (c = a.out)) {
                  s = c[u];
                  do {
                    if (
                      ((h = s.target),
                      (p = !0),
                      (f = i(
                        a.key,
                        h.key,
                        a.attributes,
                        h.attributes,
                        s.key,
                        s.attributes,
                        s.undirected,
                      )),
                      t && f)
                    )
                      return s;
                    s = s.next;
                  } while (s);
                }
              if ('directed' !== d)
                for (u in (c = a.undirected))
                  if (!(e && a.key > u)) {
                    s = c[u];
                    do {
                      if (
                        ((h = s.target).key !== u && (h = s.source),
                        (p = !0),
                        (f = i(
                          a.key,
                          h.key,
                          a.attributes,
                          h.attributes,
                          s.key,
                          s.attributes,
                          s.undirected,
                        )),
                        t && f)
                      )
                        return s;
                      s = s.next;
                    } while (s);
                  }
              if (n && !p && ((f = i(a.key, null, a.attributes, null, null, null, null)), t && f))
                return null;
            }
          }
          function gt(t) {
            if (!s(t))
              throw new F(
                'Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.',
              );
            if (!('key' in t)) throw new F('Graph.import: serialized node is missing its key.');
            if ('attributes' in t && (!s(t.attributes) || null === t.attributes))
              throw new F(
                'Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.',
              );
          }
          function vt(t) {
            if (!s(t))
              throw new F(
                'Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.',
              );
            if (!('source' in t))
              throw new F('Graph.import: serialized edge is missing its source.');
            if (!('target' in t))
              throw new F('Graph.import: serialized edge is missing its target.');
            if ('attributes' in t && (!s(t.attributes) || null === t.attributes))
              throw new F(
                'Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.',
              );
            if ('undirected' in t && 'boolean' != typeof t.undirected)
              throw new F(
                'Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.',
              );
          }
          (ft.prototype.wrap = function (t) {
            null === this.A ? (this.A = t) : null === this.B && (this.B = t);
          }),
            (ft.prototype.has = function (t) {
              return (null !== this.A && t in this.A) || (null !== this.B && t in this.B);
            });
          var mt,
            _t =
              ((mt = 255 & Math.floor(256 * Math.random())),
              function () {
                return mt++;
              }),
            bt = new Set(['directed', 'undirected', 'mixed']),
            wt = new Set(['domain', '_events', '_eventsCount', '_maxListeners']),
            xt = { allowSelfLoops: !0, multi: !1, type: 'mixed' };
          function kt(t, e, n) {
            var r = new t.NodeDataClass(e, n);
            return t._nodes.set(e, r), t.emit('nodeAdded', { key: e, attributes: n }), r;
          }
          function Mt(t, e, n, r, i, o, a, u) {
            if (!r && 'undirected' === t.type)
              throw new B(
                'Graph.'.concat(
                  e,
                  ': you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.',
                ),
              );
            if (r && 'directed' === t.type)
              throw new B(
                'Graph.'.concat(
                  e,
                  ': you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.',
                ),
              );
            if (u && !s(u))
              throw new F(
                'Graph.'
                  .concat(e, ': invalid attributes. Expecting an object but got "')
                  .concat(u, '"'),
              );
            if (((o = '' + o), (a = '' + a), (u = u || {}), !t.allowSelfLoops && o === a))
              throw new B(
                'Graph.'
                  .concat(e, ': source & target are the same ("')
                  .concat(
                    o,
                    "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.",
                  ),
              );
            var c = t._nodes.get(o),
              h = t._nodes.get(a);
            if (!c) throw new q('Graph.'.concat(e, ': source node "').concat(o, '" not found.'));
            if (!h) throw new q('Graph.'.concat(e, ': target node "').concat(a, '" not found.'));
            var f = { key: null, undirected: r, source: o, target: a, attributes: u };
            if (n) i = t._edgeKeyGenerator();
            else if (((i = '' + i), t._edges.has(i)))
              throw new B(
                'Graph.'.concat(e, ': the "').concat(i, '" edge already exists in the graph.'),
              );
            if (!t.multi && (r ? void 0 !== c.undirected[a] : void 0 !== c.out[a]))
              throw new B(
                'Graph.'
                  .concat(e, ': an edge linking "')
                  .concat(o, '" to "')
                  .concat(
                    a,
                    "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.",
                  ),
              );
            var l = new H(r, i, c, h, u);
            t._edges.set(i, l);
            var d = o === a;
            return (
              r
                ? (c.undirectedDegree++,
                  h.undirectedDegree++,
                  d && (c.undirectedLoops++, t._undirectedSelfLoopCount++))
                : (c.outDegree++,
                  h.inDegree++,
                  d && (c.directedLoops++, t._directedSelfLoopCount++)),
              t.multi ? l.attachMulti() : l.attach(),
              r ? t._undirectedSize++ : t._directedSize++,
              (f.key = i),
              t.emit('edgeAdded', f),
              i
            );
          }
          function Et(t, e, n, r, i, o, a, c, h) {
            if (!r && 'undirected' === t.type)
              throw new B(
                'Graph.'.concat(
                  e,
                  ': you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.',
                ),
              );
            if (r && 'directed' === t.type)
              throw new B(
                'Graph.'.concat(
                  e,
                  ': you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.',
                ),
              );
            if (c)
              if (h) {
                if ('function' != typeof c)
                  throw new F(
                    'Graph.'
                      .concat(e, ': invalid updater function. Expecting a function but got "')
                      .concat(c, '"'),
                  );
              } else if (!s(c))
                throw new F(
                  'Graph.'
                    .concat(e, ': invalid attributes. Expecting an object but got "')
                    .concat(c, '"'),
                );
            var f;
            if (
              ((o = '' + o),
              (a = '' + a),
              h && ((f = c), (c = void 0)),
              !t.allowSelfLoops && o === a)
            )
              throw new B(
                'Graph.'
                  .concat(e, ': source & target are the same ("')
                  .concat(
                    o,
                    "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.",
                  ),
              );
            var l,
              d,
              p = t._nodes.get(o),
              y = t._nodes.get(a);
            if (!n && (l = t._edges.get(i))) {
              if (
                !(
                  (l.source.key === o && l.target.key === a) ||
                  (r && l.source.key === a && l.target.key === o)
                )
              )
                throw new B(
                  'Graph.'
                    .concat(e, ': inconsistency detected when attempting to merge the "')
                    .concat(i, '" edge with "')
                    .concat(o, '" source & "')
                    .concat(a, '" target vs. ("')
                    .concat(l.source.key, '", "')
                    .concat(l.target.key, '").'),
                );
              d = l;
            }
            if ((d || t.multi || !p || (d = r ? p.undirected[a] : p.out[a]), d)) {
              var g = [d.key, !1, !1, !1];
              if (h ? !f : !c) return g;
              if (h) {
                var v = d.attributes;
                (d.attributes = f(v)),
                  t.emit('edgeAttributesUpdated', {
                    type: 'replace',
                    key: d.key,
                    attributes: d.attributes,
                  });
              } else
                u(d.attributes, c),
                  t.emit('edgeAttributesUpdated', {
                    type: 'merge',
                    key: d.key,
                    attributes: d.attributes,
                    data: c,
                  });
              return g;
            }
            (c = c || {}), h && f && (c = f(c));
            var m = { key: null, undirected: r, source: o, target: a, attributes: c };
            if (n) i = t._edgeKeyGenerator();
            else if (((i = '' + i), t._edges.has(i)))
              throw new B(
                'Graph.'.concat(e, ': the "').concat(i, '" edge already exists in the graph.'),
              );
            var _ = !1,
              b = !1;
            p || ((p = kt(t, o, {})), (_ = !0), o === a && ((y = p), (b = !0))),
              y || ((y = kt(t, a, {})), (b = !0)),
              (l = new H(r, i, p, y, c)),
              t._edges.set(i, l);
            var w = o === a;
            return (
              r
                ? (p.undirectedDegree++,
                  y.undirectedDegree++,
                  w && (p.undirectedLoops++, t._undirectedSelfLoopCount++))
                : (p.outDegree++,
                  y.inDegree++,
                  w && (p.directedLoops++, t._directedSelfLoopCount++)),
              t.multi ? l.attachMulti() : l.attach(),
              r ? t._undirectedSize++ : t._directedSize++,
              (m.key = i),
              t.emit('edgeAdded', m),
              [i, !0, _, b]
            );
          }
          function At(t, e) {
            t._edges.delete(e.key);
            var n = e.source,
              r = e.target,
              i = e.attributes,
              o = e.undirected,
              a = n === r;
            o
              ? (n.undirectedDegree--,
                r.undirectedDegree--,
                a && (n.undirectedLoops--, t._undirectedSelfLoopCount--))
              : (n.outDegree--, r.inDegree--, a && (n.directedLoops--, t._directedSelfLoopCount--)),
              t.multi ? e.detachMulti() : e.detach(),
              o ? t._undirectedSize-- : t._directedSize--,
              t.emit('edgeDropped', {
                key: e.key,
                attributes: i,
                source: n.key,
                target: r.key,
                undirected: o,
              });
          }
          var St = (function (n) {
            function r(t) {
              var e;
              if (((e = n.call(this) || this), 'boolean' != typeof (t = u({}, xt, t)).multi))
                throw new F(
                  "Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(
                    t.multi,
                    '".',
                  ),
                );
              if (!bt.has(t.type))
                throw new F(
                  'Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(
                    t.type,
                    '".',
                  ),
                );
              if ('boolean' != typeof t.allowSelfLoops)
                throw new F(
                  "Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(
                    t.allowSelfLoops,
                    '".',
                  ),
                );
              var r = 'mixed' === t.type ? Y : 'directed' === t.type ? W : K;
              f(a(e), 'NodeDataClass', r);
              var i = 'geid_' + _t() + '_',
                o = 0;
              return (
                f(a(e), '_attributes', {}),
                f(a(e), '_nodes', new Map()),
                f(a(e), '_edges', new Map()),
                f(a(e), '_directedSize', 0),
                f(a(e), '_undirectedSize', 0),
                f(a(e), '_directedSelfLoopCount', 0),
                f(a(e), '_undirectedSelfLoopCount', 0),
                f(a(e), '_edgeKeyGenerator', function () {
                  var t;
                  do {
                    t = i + o++;
                  } while (e._edges.has(t));
                  return t;
                }),
                f(a(e), '_options', t),
                wt.forEach(function (t) {
                  return f(a(e), t, e[t]);
                }),
                l(a(e), 'order', function () {
                  return e._nodes.size;
                }),
                l(a(e), 'size', function () {
                  return e._edges.size;
                }),
                l(a(e), 'directedSize', function () {
                  return e._directedSize;
                }),
                l(a(e), 'undirectedSize', function () {
                  return e._undirectedSize;
                }),
                l(a(e), 'selfLoopCount', function () {
                  return e._directedSelfLoopCount + e._undirectedSelfLoopCount;
                }),
                l(a(e), 'directedSelfLoopCount', function () {
                  return e._directedSelfLoopCount;
                }),
                l(a(e), 'undirectedSelfLoopCount', function () {
                  return e._undirectedSelfLoopCount;
                }),
                l(a(e), 'multi', e._options.multi),
                l(a(e), 'type', e._options.type),
                l(a(e), 'allowSelfLoops', e._options.allowSelfLoops),
                l(a(e), 'implementation', function () {
                  return 'graphology';
                }),
                e
              );
            }
            e(r, n);
            var i = r.prototype;
            return (
              (i._resetInstanceCounters = function () {
                (this._directedSize = 0),
                  (this._undirectedSize = 0),
                  (this._directedSelfLoopCount = 0),
                  (this._undirectedSelfLoopCount = 0);
              }),
              (i.hasNode = function (t) {
                return this._nodes.has('' + t);
              }),
              (i.hasDirectedEdge = function (t, e) {
                if ('undirected' === this.type) return !1;
                if (1 === arguments.length) {
                  var n = '' + t,
                    r = this._edges.get(n);
                  return !!r && !r.undirected;
                }
                if (2 === arguments.length) {
                  (t = '' + t), (e = '' + e);
                  var i = this._nodes.get(t);
                  return !!i && i.out.hasOwnProperty(e);
                }
                throw new F(
                  'Graph.hasDirectedEdge: invalid arity ('.concat(
                    arguments.length,
                    ', instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.',
                  ),
                );
              }),
              (i.hasUndirectedEdge = function (t, e) {
                if ('directed' === this.type) return !1;
                if (1 === arguments.length) {
                  var n = '' + t,
                    r = this._edges.get(n);
                  return !!r && r.undirected;
                }
                if (2 === arguments.length) {
                  (t = '' + t), (e = '' + e);
                  var i = this._nodes.get(t);
                  return !!i && i.undirected.hasOwnProperty(e);
                }
                throw new F(
                  'Graph.hasDirectedEdge: invalid arity ('.concat(
                    arguments.length,
                    ', instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.',
                  ),
                );
              }),
              (i.hasEdge = function (t, e) {
                if (1 === arguments.length) {
                  var n = '' + t;
                  return this._edges.has(n);
                }
                if (2 === arguments.length) {
                  (t = '' + t), (e = '' + e);
                  var r = this._nodes.get(t);
                  return (
                    !!r &&
                    ((void 0 !== r.out && r.out.hasOwnProperty(e)) ||
                      (void 0 !== r.undirected && r.undirected.hasOwnProperty(e)))
                  );
                }
                throw new F(
                  'Graph.hasEdge: invalid arity ('.concat(
                    arguments.length,
                    ', instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.',
                  ),
                );
              }),
              (i.directedEdge = function (t, e) {
                if ('undirected' !== this.type) {
                  if (((t = '' + t), (e = '' + e), this.multi))
                    throw new B(
                      'Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.',
                    );
                  var n = this._nodes.get(t);
                  if (!n)
                    throw new q(
                      'Graph.directedEdge: could not find the "'.concat(
                        t,
                        '" source node in the graph.',
                      ),
                    );
                  if (!this._nodes.has(e))
                    throw new q(
                      'Graph.directedEdge: could not find the "'.concat(
                        e,
                        '" target node in the graph.',
                      ),
                    );
                  var r = (n.out && n.out[e]) || void 0;
                  return r ? r.key : void 0;
                }
              }),
              (i.undirectedEdge = function (t, e) {
                if ('directed' !== this.type) {
                  if (((t = '' + t), (e = '' + e), this.multi))
                    throw new B(
                      'Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.',
                    );
                  var n = this._nodes.get(t);
                  if (!n)
                    throw new q(
                      'Graph.undirectedEdge: could not find the "'.concat(
                        t,
                        '" source node in the graph.',
                      ),
                    );
                  if (!this._nodes.has(e))
                    throw new q(
                      'Graph.undirectedEdge: could not find the "'.concat(
                        e,
                        '" target node in the graph.',
                      ),
                    );
                  var r = (n.undirected && n.undirected[e]) || void 0;
                  return r ? r.key : void 0;
                }
              }),
              (i.edge = function (t, e) {
                if (this.multi)
                  throw new B(
                    'Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.',
                  );
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.edge: could not find the "'.concat(t, '" source node in the graph.'),
                  );
                if (!this._nodes.has(e))
                  throw new q(
                    'Graph.edge: could not find the "'.concat(e, '" target node in the graph.'),
                  );
                var r = (n.out && n.out[e]) || (n.undirected && n.undirected[e]) || void 0;
                if (r) return r.key;
              }),
              (i.areDirectedNeighbors = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.areDirectedNeighbors: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return 'undirected' !== this.type && (e in n.in || e in n.out);
              }),
              (i.areOutNeighbors = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.areOutNeighbors: could not find the "'.concat(t, '" node in the graph.'),
                  );
                return 'undirected' !== this.type && e in n.out;
              }),
              (i.areInNeighbors = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.areInNeighbors: could not find the "'.concat(t, '" node in the graph.'),
                  );
                return 'undirected' !== this.type && e in n.in;
              }),
              (i.areUndirectedNeighbors = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.areUndirectedNeighbors: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return 'directed' !== this.type && e in n.undirected;
              }),
              (i.areNeighbors = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.areNeighbors: could not find the "'.concat(t, '" node in the graph.'),
                  );
                return (
                  ('undirected' !== this.type && (e in n.in || e in n.out)) ||
                  ('directed' !== this.type && e in n.undirected)
                );
              }),
              (i.areInboundNeighbors = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.areInboundNeighbors: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return (
                  ('undirected' !== this.type && e in n.in) ||
                  ('directed' !== this.type && e in n.undirected)
                );
              }),
              (i.areOutboundNeighbors = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.areOutboundNeighbors: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return (
                  ('undirected' !== this.type && e in n.out) ||
                  ('directed' !== this.type && e in n.undirected)
                );
              }),
              (i.inDegree = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.inDegree: could not find the "'.concat(t, '" node in the graph.'),
                  );
                return 'undirected' === this.type ? 0 : e.inDegree;
              }),
              (i.outDegree = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.outDegree: could not find the "'.concat(t, '" node in the graph.'),
                  );
                return 'undirected' === this.type ? 0 : e.outDegree;
              }),
              (i.directedDegree = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.directedDegree: could not find the "'.concat(t, '" node in the graph.'),
                  );
                return 'undirected' === this.type ? 0 : e.inDegree + e.outDegree;
              }),
              (i.undirectedDegree = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.undirectedDegree: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return 'directed' === this.type ? 0 : e.undirectedDegree;
              }),
              (i.inboundDegree = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.inboundDegree: could not find the "'.concat(t, '" node in the graph.'),
                  );
                var n = 0;
                return (
                  'directed' !== this.type && (n += e.undirectedDegree),
                  'undirected' !== this.type && (n += e.inDegree),
                  n
                );
              }),
              (i.outboundDegree = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.outboundDegree: could not find the "'.concat(t, '" node in the graph.'),
                  );
                var n = 0;
                return (
                  'directed' !== this.type && (n += e.undirectedDegree),
                  'undirected' !== this.type && (n += e.outDegree),
                  n
                );
              }),
              (i.degree = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.degree: could not find the "'.concat(t, '" node in the graph.'),
                  );
                var n = 0;
                return (
                  'directed' !== this.type && (n += e.undirectedDegree),
                  'undirected' !== this.type && (n += e.inDegree + e.outDegree),
                  n
                );
              }),
              (i.inDegreeWithoutSelfLoops = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return 'undirected' === this.type ? 0 : e.inDegree - e.directedLoops;
              }),
              (i.outDegreeWithoutSelfLoops = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return 'undirected' === this.type ? 0 : e.outDegree - e.directedLoops;
              }),
              (i.directedDegreeWithoutSelfLoops = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return 'undirected' === this.type
                  ? 0
                  : e.inDegree + e.outDegree - 2 * e.directedLoops;
              }),
              (i.undirectedDegreeWithoutSelfLoops = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                return 'directed' === this.type ? 0 : e.undirectedDegree - 2 * e.undirectedLoops;
              }),
              (i.inboundDegreeWithoutSelfLoops = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                var n = 0,
                  r = 0;
                return (
                  'directed' !== this.type &&
                    ((n += e.undirectedDegree), (r += 2 * e.undirectedLoops)),
                  'undirected' !== this.type && ((n += e.inDegree), (r += e.directedLoops)),
                  n - r
                );
              }),
              (i.outboundDegreeWithoutSelfLoops = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                var n = 0,
                  r = 0;
                return (
                  'directed' !== this.type &&
                    ((n += e.undirectedDegree), (r += 2 * e.undirectedLoops)),
                  'undirected' !== this.type && ((n += e.outDegree), (r += e.directedLoops)),
                  n - r
                );
              }),
              (i.degreeWithoutSelfLoops = function (t) {
                t = '' + t;
                var e = this._nodes.get(t);
                if (!e)
                  throw new q(
                    'Graph.degreeWithoutSelfLoops: could not find the "'.concat(
                      t,
                      '" node in the graph.',
                    ),
                  );
                var n = 0,
                  r = 0;
                return (
                  'directed' !== this.type &&
                    ((n += e.undirectedDegree), (r += 2 * e.undirectedLoops)),
                  'undirected' !== this.type &&
                    ((n += e.inDegree + e.outDegree), (r += 2 * e.directedLoops)),
                  n - r
                );
              }),
              (i.source = function (t) {
                t = '' + t;
                var e = this._edges.get(t);
                if (!e)
                  throw new q(
                    'Graph.source: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return e.source.key;
              }),
              (i.target = function (t) {
                t = '' + t;
                var e = this._edges.get(t);
                if (!e)
                  throw new q(
                    'Graph.target: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return e.target.key;
              }),
              (i.extremities = function (t) {
                t = '' + t;
                var e = this._edges.get(t);
                if (!e)
                  throw new q(
                    'Graph.extremities: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return [e.source.key, e.target.key];
              }),
              (i.opposite = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._edges.get(e);
                if (!n)
                  throw new q(
                    'Graph.opposite: could not find the "'.concat(e, '" edge in the graph.'),
                  );
                var r = n.source.key,
                  i = n.target.key;
                if (t === r) return i;
                if (t === i) return r;
                throw new q(
                  'Graph.opposite: the "'
                    .concat(t, '" node is not attached to the "')
                    .concat(e, '" edge (')
                    .concat(r, ', ')
                    .concat(i, ').'),
                );
              }),
              (i.hasExtremity = function (t, e) {
                (t = '' + t), (e = '' + e);
                var n = this._edges.get(t);
                if (!n)
                  throw new q(
                    'Graph.hasExtremity: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return n.source.key === e || n.target.key === e;
              }),
              (i.isUndirected = function (t) {
                t = '' + t;
                var e = this._edges.get(t);
                if (!e)
                  throw new q(
                    'Graph.isUndirected: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return e.undirected;
              }),
              (i.isDirected = function (t) {
                t = '' + t;
                var e = this._edges.get(t);
                if (!e)
                  throw new q(
                    'Graph.isDirected: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return !e.undirected;
              }),
              (i.isSelfLoop = function (t) {
                t = '' + t;
                var e = this._edges.get(t);
                if (!e)
                  throw new q(
                    'Graph.isSelfLoop: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return e.source === e.target;
              }),
              (i.addNode = function (t, e) {
                var n = (function (t, e, n) {
                  if (n && !s(n))
                    throw new F(
                      'Graph.addNode: invalid attributes. Expecting an object but got "'.concat(
                        n,
                        '"',
                      ),
                    );
                  if (((e = '' + e), (n = n || {}), t._nodes.has(e)))
                    throw new B(
                      'Graph.addNode: the "'.concat(e, '" node already exist in the graph.'),
                    );
                  var r = new t.NodeDataClass(e, n);
                  return t._nodes.set(e, r), t.emit('nodeAdded', { key: e, attributes: n }), r;
                })(this, t, e);
                return n.key;
              }),
              (i.mergeNode = function (t, e) {
                if (e && !s(e))
                  throw new F(
                    'Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(
                      e,
                      '"',
                    ),
                  );
                (t = '' + t), (e = e || {});
                var n = this._nodes.get(t);
                return n
                  ? (e &&
                      (u(n.attributes, e),
                      this.emit('nodeAttributesUpdated', {
                        type: 'merge',
                        key: t,
                        attributes: n.attributes,
                        data: e,
                      })),
                    [t, !1])
                  : ((n = new this.NodeDataClass(t, e)),
                    this._nodes.set(t, n),
                    this.emit('nodeAdded', { key: t, attributes: e }),
                    [t, !0]);
              }),
              (i.updateNode = function (t, e) {
                if (e && 'function' != typeof e)
                  throw new F(
                    'Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(
                      e,
                      '"',
                    ),
                  );
                t = '' + t;
                var n = this._nodes.get(t);
                if (n) {
                  if (e) {
                    var r = n.attributes;
                    (n.attributes = e(r)),
                      this.emit('nodeAttributesUpdated', {
                        type: 'replace',
                        key: t,
                        attributes: n.attributes,
                      });
                  }
                  return [t, !1];
                }
                var i = e ? e({}) : {};
                return (
                  (n = new this.NodeDataClass(t, i)),
                  this._nodes.set(t, n),
                  this.emit('nodeAdded', { key: t, attributes: i }),
                  [t, !0]
                );
              }),
              (i.dropNode = function (t) {
                t = '' + t;
                var e,
                  n = this._nodes.get(t);
                if (!n)
                  throw new q(
                    'Graph.dropNode: could not find the "'.concat(t, '" node in the graph.'),
                  );
                if ('undirected' !== this.type) {
                  for (var r in n.out) {
                    e = n.out[r];
                    do {
                      At(this, e), (e = e.next);
                    } while (e);
                  }
                  for (var i in n.in) {
                    e = n.in[i];
                    do {
                      At(this, e), (e = e.next);
                    } while (e);
                  }
                }
                if ('directed' !== this.type)
                  for (var o in n.undirected) {
                    e = n.undirected[o];
                    do {
                      At(this, e), (e = e.next);
                    } while (e);
                  }
                this._nodes.delete(t),
                  this.emit('nodeDropped', { key: t, attributes: n.attributes });
              }),
              (i.dropEdge = function (t) {
                var e;
                if (arguments.length > 1) {
                  var n = '' + arguments[0],
                    r = '' + arguments[1];
                  if (!(e = c(this, n, r, this.type)))
                    throw new q(
                      'Graph.dropEdge: could not find the "'
                        .concat(n, '" -> "')
                        .concat(r, '" edge in the graph.'),
                    );
                } else if (((t = '' + t), !(e = this._edges.get(t))))
                  throw new q(
                    'Graph.dropEdge: could not find the "'.concat(t, '" edge in the graph.'),
                  );
                return At(this, e), this;
              }),
              (i.dropDirectedEdge = function (t, e) {
                if (arguments.length < 2)
                  throw new B(
                    'Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.',
                  );
                if (this.multi)
                  throw new B(
                    'Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.',
                  );
                var n = c(this, (t = '' + t), (e = '' + e), 'directed');
                if (!n)
                  throw new q(
                    'Graph.dropDirectedEdge: could not find a "'
                      .concat(t, '" -> "')
                      .concat(e, '" edge in the graph.'),
                  );
                return At(this, n), this;
              }),
              (i.dropUndirectedEdge = function (t, e) {
                if (arguments.length < 2)
                  throw new B(
                    'Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.',
                  );
                if (this.multi)
                  throw new B(
                    'Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.',
                  );
                var n = c(this, t, e, 'undirected');
                if (!n)
                  throw new q(
                    'Graph.dropUndirectedEdge: could not find a "'
                      .concat(t, '" -> "')
                      .concat(e, '" edge in the graph.'),
                  );
                return At(this, n), this;
              }),
              (i.clear = function () {
                this._edges.clear(),
                  this._nodes.clear(),
                  this._resetInstanceCounters(),
                  this.emit('cleared');
              }),
              (i.clearEdges = function () {
                for (var t, e = this._nodes.values(); !0 !== (t = e.next()).done; ) t.value.clear();
                this._edges.clear(), this._resetInstanceCounters(), this.emit('edgesCleared');
              }),
              (i.getAttribute = function (t) {
                return this._attributes[t];
              }),
              (i.getAttributes = function () {
                return this._attributes;
              }),
              (i.hasAttribute = function (t) {
                return this._attributes.hasOwnProperty(t);
              }),
              (i.setAttribute = function (t, e) {
                return (
                  (this._attributes[t] = e),
                  this.emit('attributesUpdated', {
                    type: 'set',
                    attributes: this._attributes,
                    name: t,
                  }),
                  this
                );
              }),
              (i.updateAttribute = function (t, e) {
                if ('function' != typeof e)
                  throw new F('Graph.updateAttribute: updater should be a function.');
                var n = this._attributes[t];
                return (
                  (this._attributes[t] = e(n)),
                  this.emit('attributesUpdated', {
                    type: 'set',
                    attributes: this._attributes,
                    name: t,
                  }),
                  this
                );
              }),
              (i.removeAttribute = function (t) {
                return (
                  delete this._attributes[t],
                  this.emit('attributesUpdated', {
                    type: 'remove',
                    attributes: this._attributes,
                    name: t,
                  }),
                  this
                );
              }),
              (i.replaceAttributes = function (t) {
                if (!s(t))
                  throw new F(
                    'Graph.replaceAttributes: provided attributes are not a plain object.',
                  );
                return (
                  (this._attributes = t),
                  this.emit('attributesUpdated', { type: 'replace', attributes: this._attributes }),
                  this
                );
              }),
              (i.mergeAttributes = function (t) {
                if (!s(t))
                  throw new F('Graph.mergeAttributes: provided attributes are not a plain object.');
                return (
                  u(this._attributes, t),
                  this.emit('attributesUpdated', {
                    type: 'merge',
                    attributes: this._attributes,
                    data: t,
                  }),
                  this
                );
              }),
              (i.updateAttributes = function (t) {
                if ('function' != typeof t)
                  throw new F('Graph.updateAttributes: provided updater is not a function.');
                return (
                  (this._attributes = t(this._attributes)),
                  this.emit('attributesUpdated', { type: 'update', attributes: this._attributes }),
                  this
                );
              }),
              (i.updateEachNodeAttributes = function (t, e) {
                if ('function' != typeof t)
                  throw new F('Graph.updateEachNodeAttributes: expecting an updater function.');
                if (e && !d(e))
                  throw new F(
                    'Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}',
                  );
                for (var n, r, i = this._nodes.values(); !0 !== (n = i.next()).done; )
                  (r = n.value).attributes = t(r.key, r.attributes);
                this.emit('eachNodeAttributesUpdated', { hints: e || null });
              }),
              (i.updateEachEdgeAttributes = function (t, e) {
                if ('function' != typeof t)
                  throw new F('Graph.updateEachEdgeAttributes: expecting an updater function.');
                if (e && !d(e))
                  throw new F(
                    'Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}',
                  );
                for (var n, r, i, o, a = this._edges.values(); !0 !== (n = a.next()).done; )
                  (i = (r = n.value).source),
                    (o = r.target),
                    (r.attributes = t(
                      r.key,
                      r.attributes,
                      i.key,
                      o.key,
                      i.attributes,
                      o.attributes,
                      r.undirected,
                    ));
                this.emit('eachEdgeAttributesUpdated', { hints: e || null });
              }),
              (i.forEachAdjacencyEntry = function (t) {
                if ('function' != typeof t)
                  throw new F('Graph.forEachAdjacencyEntry: expecting a callback.');
                yt(!1, !1, !1, this, t);
              }),
              (i.forEachAdjacencyEntryWithOrphans = function (t) {
                if ('function' != typeof t)
                  throw new F('Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.');
                yt(!1, !1, !0, this, t);
              }),
              (i.forEachAssymetricAdjacencyEntry = function (t) {
                if ('function' != typeof t)
                  throw new F('Graph.forEachAssymetricAdjacencyEntry: expecting a callback.');
                yt(!1, !0, !1, this, t);
              }),
              (i.forEachAssymetricAdjacencyEntryWithOrphans = function (t) {
                if ('function' != typeof t)
                  throw new F(
                    'Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.',
                  );
                yt(!1, !0, !0, this, t);
              }),
              (i.nodes = function () {
                return 'function' == typeof Array.from
                  ? Array.from(this._nodes.keys())
                  : I(this._nodes.keys(), this._nodes.size);
              }),
              (i.forEachNode = function (t) {
                if ('function' != typeof t) throw new F('Graph.forEachNode: expecting a callback.');
                for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done; )
                  t((n = e.value).key, n.attributes);
              }),
              (i.findNode = function (t) {
                if ('function' != typeof t) throw new F('Graph.findNode: expecting a callback.');
                for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done; )
                  if (t((n = e.value).key, n.attributes)) return n.key;
              }),
              (i.mapNodes = function (t) {
                if ('function' != typeof t) throw new F('Graph.mapNode: expecting a callback.');
                for (
                  var e, n, r = this._nodes.values(), i = new Array(this.order), o = 0;
                  !0 !== (e = r.next()).done;

                )
                  (n = e.value), (i[o++] = t(n.key, n.attributes));
                return i;
              }),
              (i.someNode = function (t) {
                if ('function' != typeof t) throw new F('Graph.someNode: expecting a callback.');
                for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done; )
                  if (t((n = e.value).key, n.attributes)) return !0;
                return !1;
              }),
              (i.everyNode = function (t) {
                if ('function' != typeof t) throw new F('Graph.everyNode: expecting a callback.');
                for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done; )
                  if (!t((n = e.value).key, n.attributes)) return !1;
                return !0;
              }),
              (i.filterNodes = function (t) {
                if ('function' != typeof t) throw new F('Graph.filterNodes: expecting a callback.');
                for (var e, n, r = this._nodes.values(), i = []; !0 !== (e = r.next()).done; )
                  t((n = e.value).key, n.attributes) && i.push(n.key);
                return i;
              }),
              (i.reduceNodes = function (t, e) {
                if ('function' != typeof t) throw new F('Graph.reduceNodes: expecting a callback.');
                if (arguments.length < 2)
                  throw new F(
                    'Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.',
                  );
                for (var n, r, i = e, o = this._nodes.values(); !0 !== (n = o.next()).done; )
                  i = t(i, (r = n.value).key, r.attributes);
                return i;
              }),
              (i.nodeEntries = function () {
                var t = this._nodes.values();
                return new T(function () {
                  var e = t.next();
                  if (e.done) return e;
                  var n = e.value;
                  return { value: { node: n.key, attributes: n.attributes }, done: !1 };
                });
              }),
              (i.export = function () {
                var t = this,
                  e = new Array(this._nodes.size),
                  n = 0;
                this._nodes.forEach(function (t, r) {
                  e[n++] = (function (t, e) {
                    var n = { key: t };
                    return h(e.attributes) || (n.attributes = u({}, e.attributes)), n;
                  })(r, t);
                });
                var r = new Array(this._edges.size);
                return (
                  (n = 0),
                  this._edges.forEach(function (e, i) {
                    r[n++] = (function (t, e, n) {
                      var r = { key: e, source: n.source.key, target: n.target.key };
                      return (
                        h(n.attributes) || (r.attributes = u({}, n.attributes)),
                        'mixed' === t && n.undirected && (r.undirected = !0),
                        r
                      );
                    })(t.type, i, e);
                  }),
                  {
                    options: {
                      type: this.type,
                      multi: this.multi,
                      allowSelfLoops: this.allowSelfLoops,
                    },
                    attributes: this.getAttributes(),
                    nodes: e,
                    edges: r,
                  }
                );
              }),
              (i.import = function (t) {
                var e,
                  n,
                  i,
                  o,
                  a,
                  u = this,
                  c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t instanceof r)
                  return (
                    t.forEachNode(function (t, e) {
                      c ? u.mergeNode(t, e) : u.addNode(t, e);
                    }),
                    t.forEachEdge(function (t, e, n, r, i, o, a) {
                      c
                        ? a
                          ? u.mergeUndirectedEdgeWithKey(t, n, r, e)
                          : u.mergeDirectedEdgeWithKey(t, n, r, e)
                        : a
                        ? u.addUndirectedEdgeWithKey(t, n, r, e)
                        : u.addDirectedEdgeWithKey(t, n, r, e);
                    }),
                    this
                  );
                if (!s(t))
                  throw new F(
                    'Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.',
                  );
                if (t.attributes) {
                  if (!s(t.attributes))
                    throw new F('Graph.import: invalid attributes. Expecting a plain object.');
                  c ? this.mergeAttributes(t.attributes) : this.replaceAttributes(t.attributes);
                }
                if (t.nodes) {
                  if (((i = t.nodes), !Array.isArray(i)))
                    throw new F('Graph.import: invalid nodes. Expecting an array.');
                  for (e = 0, n = i.length; e < n; e++) {
                    gt((o = i[e]));
                    var h = o,
                      f = h.key,
                      l = h.attributes;
                    c ? this.mergeNode(f, l) : this.addNode(f, l);
                  }
                }
                if (t.edges) {
                  var d = !1;
                  if (('undirected' === this.type && (d = !0), (i = t.edges), !Array.isArray(i)))
                    throw new F('Graph.import: invalid edges. Expecting an array.');
                  for (e = 0, n = i.length; e < n; e++) {
                    vt((a = i[e]));
                    var p = a,
                      y = p.source,
                      g = p.target,
                      v = p.attributes,
                      m = p.undirected,
                      _ = void 0 === m ? d : m;
                    'key' in a
                      ? (c
                          ? _
                            ? this.mergeUndirectedEdgeWithKey
                            : this.mergeDirectedEdgeWithKey
                          : _
                          ? this.addUndirectedEdgeWithKey
                          : this.addDirectedEdgeWithKey
                        ).call(this, a.key, y, g, v)
                      : (c
                          ? _
                            ? this.mergeUndirectedEdge
                            : this.mergeDirectedEdge
                          : _
                          ? this.addUndirectedEdge
                          : this.addDirectedEdge
                        ).call(this, y, g, v);
                  }
                }
                return this;
              }),
              (i.nullCopy = function (t) {
                var e = new r(u({}, this._options, t));
                return e.replaceAttributes(u({}, this.getAttributes())), e;
              }),
              (i.emptyCopy = function (t) {
                var e = this.nullCopy(t);
                return (
                  this._nodes.forEach(function (t, n) {
                    var r = u({}, t.attributes);
                    (t = new e.NodeDataClass(n, r)), e._nodes.set(n, t);
                  }),
                  e
                );
              }),
              (i.copy = function (t) {
                if (
                  'string' == typeof (t = t || {}).type &&
                  t.type !== this.type &&
                  'mixed' !== t.type
                )
                  throw new B(
                    'Graph.copy: cannot create an incompatible copy from "'
                      .concat(this.type, '" type to "')
                      .concat(
                        t.type,
                        '" because this would mean losing information about the current graph.',
                      ),
                  );
                if ('boolean' == typeof t.multi && t.multi !== this.multi && !0 !== t.multi)
                  throw new B(
                    'Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.',
                  );
                if (
                  'boolean' == typeof t.allowSelfLoops &&
                  t.allowSelfLoops !== this.allowSelfLoops &&
                  !0 !== t.allowSelfLoops
                )
                  throw new B(
                    'Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.',
                  );
                for (
                  var e, n, r = this.emptyCopy(t), i = this._edges.values();
                  !0 !== (e = i.next()).done;

                )
                  Mt(
                    r,
                    'copy',
                    !1,
                    (n = e.value).undirected,
                    n.key,
                    n.source.key,
                    n.target.key,
                    u({}, n.attributes),
                  );
                return r;
              }),
              (i.toJSON = function () {
                return this.export();
              }),
              (i.toString = function () {
                return '[object Graph]';
              }),
              (i.inspect = function () {
                var e = this,
                  n = {};
                this._nodes.forEach(function (t, e) {
                  n[e] = t.attributes;
                });
                var r = {},
                  i = {};
                this._edges.forEach(function (t, n) {
                  var o,
                    a = t.undirected ? '--' : '->',
                    u = '',
                    c = t.source.key,
                    s = t.target.key;
                  t.undirected && c > s && ((o = c), (c = s), (s = o));
                  var h = '('.concat(c, ')').concat(a, '(').concat(s, ')');
                  n.startsWith('geid_')
                    ? e.multi &&
                      (void 0 === i[h] ? (i[h] = 0) : i[h]++, (u += ''.concat(i[h], '. ')))
                    : (u += '['.concat(n, ']: ')),
                    (r[(u += h)] = t.attributes);
                });
                var o = {};
                for (var a in this)
                  this.hasOwnProperty(a) &&
                    !wt.has(a) &&
                    'function' != typeof this[a] &&
                    'symbol' !== t(a) &&
                    (o[a] = this[a]);
                return (
                  (o.attributes = this._attributes),
                  (o.nodes = n),
                  (o.edges = r),
                  f(o, 'constructor', this.constructor),
                  o
                );
              }),
              r
            );
          })(y.exports.EventEmitter);
          'undefined' != typeof Symbol &&
            (St.prototype[Symbol.for('nodejs.util.inspect.custom')] = St.prototype.inspect),
            [
              {
                name: function (t) {
                  return ''.concat(t, 'Edge');
                },
                generateKey: !0,
              },
              {
                name: function (t) {
                  return ''.concat(t, 'DirectedEdge');
                },
                generateKey: !0,
                type: 'directed',
              },
              {
                name: function (t) {
                  return ''.concat(t, 'UndirectedEdge');
                },
                generateKey: !0,
                type: 'undirected',
              },
              {
                name: function (t) {
                  return ''.concat(t, 'EdgeWithKey');
                },
              },
              {
                name: function (t) {
                  return ''.concat(t, 'DirectedEdgeWithKey');
                },
                type: 'directed',
              },
              {
                name: function (t) {
                  return ''.concat(t, 'UndirectedEdgeWithKey');
                },
                type: 'undirected',
              },
            ].forEach(function (t) {
              ['add', 'merge', 'update'].forEach(function (e) {
                var n = t.name(e),
                  r = 'add' === e ? Mt : Et;
                t.generateKey
                  ? (St.prototype[n] = function (i, o, a) {
                      return r(
                        this,
                        n,
                        !0,
                        'undirected' === (t.type || this.type),
                        null,
                        i,
                        o,
                        a,
                        'update' === e,
                      );
                    })
                  : (St.prototype[n] = function (i, o, a, u) {
                      return r(
                        this,
                        n,
                        !1,
                        'undirected' === (t.type || this.type),
                        i,
                        o,
                        a,
                        u,
                        'update' === e,
                      );
                    });
              });
            }),
            (function (t) {
              $.forEach(function (e) {
                var n = e.name,
                  r = e.attacher;
                r(t, n('Node'), 0),
                  r(t, n('Source'), 1),
                  r(t, n('Target'), 2),
                  r(t, n('Opposite'), 3);
              });
            })(St),
            (function (t) {
              V.forEach(function (e) {
                var n = e.name,
                  r = e.attacher;
                r(t, n('Edge'), 'mixed'),
                  r(t, n('DirectedEdge'), 'directed'),
                  r(t, n('UndirectedEdge'), 'undirected');
              });
            })(St),
            (function (t) {
              tt.forEach(function (e) {
                !(function (t, e) {
                  var n = e.name,
                    r = e.type,
                    i = e.direction;
                  t.prototype[n] = function (t, e) {
                    if ('mixed' !== r && 'mixed' !== this.type && r !== this.type) return [];
                    if (!arguments.length)
                      return (function (t, e) {
                        if (0 === t.size) return [];
                        if ('mixed' === e || e === t.type)
                          return 'function' == typeof Array.from
                            ? Array.from(t._edges.keys())
                            : I(t._edges.keys(), t._edges.size);
                        for (
                          var n,
                            r,
                            i = 'undirected' === e ? t.undirectedSize : t.directedSize,
                            o = new Array(i),
                            a = 'undirected' === e,
                            u = t._edges.values(),
                            c = 0;
                          !0 !== (n = u.next()).done;

                        )
                          (r = n.value).undirected === a && (o[c++] = r.key);
                        return o;
                      })(this, r);
                    if (1 === arguments.length) {
                      t = '' + t;
                      var o = this._nodes.get(t);
                      if (void 0 === o)
                        throw new q(
                          'Graph.'
                            .concat(n, ': could not find the "')
                            .concat(t, '" node in the graph.'),
                        );
                      return (function (t, e, n, r) {
                        var i = [];
                        return (
                          ct(!1, t, e, n, r, function (t) {
                            i.push(t);
                          }),
                          i
                        );
                      })(this.multi, 'mixed' === r ? this.type : r, i, o);
                    }
                    if (2 === arguments.length) {
                      (t = '' + t), (e = '' + e);
                      var a = this._nodes.get(t);
                      if (!a)
                        throw new q(
                          'Graph.'
                            .concat(n, ':  could not find the "')
                            .concat(t, '" source node in the graph.'),
                        );
                      if (!this._nodes.has(e))
                        throw new q(
                          'Graph.'
                            .concat(n, ':  could not find the "')
                            .concat(e, '" target node in the graph.'),
                        );
                      return (function (t, e, n, r, i) {
                        var o = [];
                        return (
                          st(!1, t, e, n, r, i, function (t) {
                            o.push(t);
                          }),
                          o
                        );
                      })(r, this.multi, i, a, e);
                    }
                    throw new F(
                      'Graph.'
                        .concat(n, ': too many arguments (expecting 0, 1 or 2 and got ')
                        .concat(arguments.length, ').'),
                    );
                  };
                })(t, e),
                  (function (t, e) {
                    var n = e.name,
                      r = e.type,
                      i = e.direction,
                      o = 'forEach' + n[0].toUpperCase() + n.slice(1, -1);
                    t.prototype[o] = function (t, e, n) {
                      if ('mixed' === r || 'mixed' === this.type || r === this.type) {
                        if (1 === arguments.length) return ut(!1, this, r, (n = t));
                        if (2 === arguments.length) {
                          (t = '' + t), (n = e);
                          var a = this._nodes.get(t);
                          if (void 0 === a)
                            throw new q(
                              'Graph.'
                                .concat(o, ': could not find the "')
                                .concat(t, '" node in the graph.'),
                            );
                          return ct(!1, this.multi, 'mixed' === r ? this.type : r, i, a, n);
                        }
                        if (3 === arguments.length) {
                          (t = '' + t), (e = '' + e);
                          var u = this._nodes.get(t);
                          if (!u)
                            throw new q(
                              'Graph.'
                                .concat(o, ':  could not find the "')
                                .concat(t, '" source node in the graph.'),
                            );
                          if (!this._nodes.has(e))
                            throw new q(
                              'Graph.'
                                .concat(o, ':  could not find the "')
                                .concat(e, '" target node in the graph.'),
                            );
                          return st(!1, r, this.multi, i, u, e, n);
                        }
                        throw new F(
                          'Graph.'
                            .concat(o, ': too many arguments (expecting 1, 2 or 3 and got ')
                            .concat(arguments.length, ').'),
                        );
                      }
                    };
                    var a = 'map' + n[0].toUpperCase() + n.slice(1);
                    t.prototype[a] = function () {
                      var t,
                        e = Array.prototype.slice.call(arguments),
                        n = e.pop();
                      if (0 === e.length) {
                        var i = 0;
                        'directed' !== r && (i += this.undirectedSize),
                          'undirected' !== r && (i += this.directedSize),
                          (t = new Array(i));
                        var a = 0;
                        e.push(function (e, r, i, o, u, c, s) {
                          t[a++] = n(e, r, i, o, u, c, s);
                        });
                      } else
                        (t = []),
                          e.push(function (e, r, i, o, a, u, c) {
                            t.push(n(e, r, i, o, a, u, c));
                          });
                      return this[o].apply(this, e), t;
                    };
                    var u = 'filter' + n[0].toUpperCase() + n.slice(1);
                    t.prototype[u] = function () {
                      var t = Array.prototype.slice.call(arguments),
                        e = t.pop(),
                        n = [];
                      return (
                        t.push(function (t, r, i, o, a, u, c) {
                          e(t, r, i, o, a, u, c) && n.push(t);
                        }),
                        this[o].apply(this, t),
                        n
                      );
                    };
                    var c = 'reduce' + n[0].toUpperCase() + n.slice(1);
                    t.prototype[c] = function () {
                      var t,
                        e,
                        n = Array.prototype.slice.call(arguments);
                      if (n.length < 2 || n.length > 4)
                        throw new F(
                          'Graph.'
                            .concat(
                              c,
                              ': invalid number of arguments (expecting 2, 3 or 4 and got ',
                            )
                            .concat(n.length, ').'),
                        );
                      if (
                        'function' == typeof n[n.length - 1] &&
                        'function' != typeof n[n.length - 2]
                      )
                        throw new F(
                          'Graph.'.concat(
                            c,
                            ': missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.',
                          ),
                        );
                      2 === n.length
                        ? ((t = n[0]), (e = n[1]), (n = []))
                        : 3 === n.length
                        ? ((t = n[1]), (e = n[2]), (n = [n[0]]))
                        : 4 === n.length && ((t = n[2]), (e = n[3]), (n = [n[0], n[1]]));
                      var r = e;
                      return (
                        n.push(function (e, n, i, o, a, u, c) {
                          r = t(r, e, n, i, o, a, u, c);
                        }),
                        this[o].apply(this, n),
                        r
                      );
                    };
                  })(t, e),
                  (function (t, e) {
                    var n = e.name,
                      r = e.type,
                      i = e.direction,
                      o = 'find' + n[0].toUpperCase() + n.slice(1, -1);
                    t.prototype[o] = function (t, e, n) {
                      if ('mixed' !== r && 'mixed' !== this.type && r !== this.type) return !1;
                      if (1 === arguments.length) return ut(!0, this, r, (n = t));
                      if (2 === arguments.length) {
                        (t = '' + t), (n = e);
                        var a = this._nodes.get(t);
                        if (void 0 === a)
                          throw new q(
                            'Graph.'
                              .concat(o, ': could not find the "')
                              .concat(t, '" node in the graph.'),
                          );
                        return ct(!0, this.multi, 'mixed' === r ? this.type : r, i, a, n);
                      }
                      if (3 === arguments.length) {
                        (t = '' + t), (e = '' + e);
                        var u = this._nodes.get(t);
                        if (!u)
                          throw new q(
                            'Graph.'
                              .concat(o, ':  could not find the "')
                              .concat(t, '" source node in the graph.'),
                          );
                        if (!this._nodes.has(e))
                          throw new q(
                            'Graph.'
                              .concat(o, ':  could not find the "')
                              .concat(e, '" target node in the graph.'),
                          );
                        return st(!0, r, this.multi, i, u, e, n);
                      }
                      throw new F(
                        'Graph.'
                          .concat(o, ': too many arguments (expecting 1, 2 or 3 and got ')
                          .concat(arguments.length, ').'),
                      );
                    };
                    var a = 'some' + n[0].toUpperCase() + n.slice(1, -1);
                    t.prototype[a] = function () {
                      var t = Array.prototype.slice.call(arguments),
                        e = t.pop();
                      return (
                        t.push(function (t, n, r, i, o, a, u) {
                          return e(t, n, r, i, o, a, u);
                        }),
                        !!this[o].apply(this, t)
                      );
                    };
                    var u = 'every' + n[0].toUpperCase() + n.slice(1, -1);
                    t.prototype[u] = function () {
                      var t = Array.prototype.slice.call(arguments),
                        e = t.pop();
                      return (
                        t.push(function (t, n, r, i, o, a, u) {
                          return !e(t, n, r, i, o, a, u);
                        }),
                        !this[o].apply(this, t)
                      );
                    };
                  })(t, e),
                  (function (t, e) {
                    var n = e.name,
                      r = e.type,
                      i = e.direction,
                      o = n.slice(0, -1) + 'Entries';
                    t.prototype[o] = function (t, e) {
                      if ('mixed' !== r && 'mixed' !== this.type && r !== this.type)
                        return T.empty();
                      if (!arguments.length)
                        return (function (t, e) {
                          if (0 === t.size) return T.empty();
                          var n = 'mixed' !== e && e !== t.type,
                            r = 'undirected' === e,
                            i = t._edges.values();
                          return new T(function () {
                            for (var t, e; ; ) {
                              if ((t = i.next()).done) return t;
                              if (((e = t.value), !n || e.undirected === r)) break;
                            }
                            return {
                              value: {
                                edge: e.key,
                                attributes: e.attributes,
                                source: e.source.key,
                                target: e.target.key,
                                sourceAttributes: e.source.attributes,
                                targetAttributes: e.target.attributes,
                                undirected: e.undirected,
                              },
                              done: !1,
                            };
                          });
                        })(this, r);
                      if (1 === arguments.length) {
                        t = '' + t;
                        var n = this._nodes.get(t);
                        if (!n)
                          throw new q(
                            'Graph.'
                              .concat(o, ': could not find the "')
                              .concat(t, '" node in the graph.'),
                          );
                        return (function (t, e, n) {
                          var r = T.empty();
                          return (
                            'undirected' !== t &&
                              ('out' !== e && void 0 !== n.in && (r = Q(r, rt(n.in))),
                              'in' !== e &&
                                void 0 !== n.out &&
                                (r = Q(r, rt(n.out, e ? void 0 : n.key)))),
                            'directed' !== t &&
                              void 0 !== n.undirected &&
                              (r = Q(r, rt(n.undirected))),
                            r
                          );
                        })(r, i, n);
                      }
                      if (2 === arguments.length) {
                        (t = '' + t), (e = '' + e);
                        var a = this._nodes.get(t);
                        if (!a)
                          throw new q(
                            'Graph.'
                              .concat(o, ':  could not find the "')
                              .concat(t, '" source node in the graph.'),
                          );
                        if (!this._nodes.has(e))
                          throw new q(
                            'Graph.'
                              .concat(o, ':  could not find the "')
                              .concat(e, '" target node in the graph.'),
                          );
                        return (function (t, e, n, r) {
                          var i = T.empty();
                          return (
                            'undirected' !== t &&
                              (void 0 !== n.in &&
                                'out' !== e &&
                                r in n.in &&
                                (i = Q(i, at(n.in, r))),
                              void 0 !== n.out &&
                                'in' !== e &&
                                r in n.out &&
                                (e || n.key !== r) &&
                                (i = Q(i, at(n.out, r)))),
                            'directed' !== t &&
                              void 0 !== n.undirected &&
                              r in n.undirected &&
                              (i = Q(i, at(n.undirected, r))),
                            i
                          );
                        })(r, i, a, e);
                      }
                      throw new F(
                        'Graph.'
                          .concat(o, ': too many arguments (expecting 0, 1 or 2 and got ')
                          .concat(arguments.length, ').'),
                      );
                    };
                  })(t, e);
              });
            })(St),
            (function (t) {
              ht.forEach(function (e) {
                (function (t, e) {
                  var n = e.name,
                    r = e.type,
                    i = e.direction;
                  t.prototype[n] = function (t) {
                    if ('mixed' !== r && 'mixed' !== this.type && r !== this.type) return [];
                    t = '' + t;
                    var e = this._nodes.get(t);
                    if (void 0 === e)
                      throw new q(
                        'Graph.'
                          .concat(n, ': could not find the "')
                          .concat(t, '" node in the graph.'),
                      );
                    return (function (t, e, n) {
                      if ('mixed' !== t) {
                        if ('undirected' === t) return Object.keys(n.undirected);
                        if ('string' == typeof e) return Object.keys(n[e]);
                      }
                      var r = [];
                      return (
                        dt(!1, t, e, n, function (t) {
                          r.push(t);
                        }),
                        r
                      );
                    })('mixed' === r ? this.type : r, i, e);
                  };
                })(t, e),
                  (function (t, e) {
                    var n = e.name,
                      r = e.type,
                      i = e.direction,
                      o = 'forEach' + n[0].toUpperCase() + n.slice(1, -1);
                    t.prototype[o] = function (t, e) {
                      if ('mixed' === r || 'mixed' === this.type || r === this.type) {
                        t = '' + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n)
                          throw new q(
                            'Graph.'
                              .concat(o, ': could not find the "')
                              .concat(t, '" node in the graph.'),
                          );
                        dt(!1, 'mixed' === r ? this.type : r, i, n, e);
                      }
                    };
                    var a = 'map' + n[0].toUpperCase() + n.slice(1);
                    t.prototype[a] = function (t, e) {
                      var n = [];
                      return (
                        this[o](t, function (t, r) {
                          n.push(e(t, r));
                        }),
                        n
                      );
                    };
                    var u = 'filter' + n[0].toUpperCase() + n.slice(1);
                    t.prototype[u] = function (t, e) {
                      var n = [];
                      return (
                        this[o](t, function (t, r) {
                          e(t, r) && n.push(t);
                        }),
                        n
                      );
                    };
                    var c = 'reduce' + n[0].toUpperCase() + n.slice(1);
                    t.prototype[c] = function (t, e, n) {
                      if (arguments.length < 3)
                        throw new F(
                          'Graph.'.concat(
                            c,
                            ': missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.',
                          ),
                        );
                      var r = n;
                      return (
                        this[o](t, function (t, n) {
                          r = e(r, t, n);
                        }),
                        r
                      );
                    };
                  })(t, e),
                  (function (t, e) {
                    var n = e.name,
                      r = e.type,
                      i = e.direction,
                      o = n[0].toUpperCase() + n.slice(1, -1),
                      a = 'find' + o;
                    t.prototype[a] = function (t, e) {
                      if ('mixed' === r || 'mixed' === this.type || r === this.type) {
                        t = '' + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n)
                          throw new q(
                            'Graph.'
                              .concat(a, ': could not find the "')
                              .concat(t, '" node in the graph.'),
                          );
                        return dt(!0, 'mixed' === r ? this.type : r, i, n, e);
                      }
                    };
                    var u = 'some' + o;
                    t.prototype[u] = function (t, e) {
                      return !!this[a](t, e);
                    };
                    var c = 'every' + o;
                    t.prototype[c] = function (t, e) {
                      return !this[a](t, function (t, n) {
                        return !e(t, n);
                      });
                    };
                  })(t, e),
                  (function (t, e) {
                    var n = e.name,
                      r = e.type,
                      i = e.direction,
                      o = n.slice(0, -1) + 'Entries';
                    t.prototype[o] = function (t) {
                      if ('mixed' !== r && 'mixed' !== this.type && r !== this.type)
                        return T.empty();
                      t = '' + t;
                      var e = this._nodes.get(t);
                      if (void 0 === e)
                        throw new q(
                          'Graph.'
                            .concat(o, ': could not find the "')
                            .concat(t, '" node in the graph.'),
                        );
                      return (function (t, e, n) {
                        if ('mixed' !== t) {
                          if ('undirected' === t) return pt(null, n, n.undirected);
                          if ('string' == typeof e) return pt(null, n, n[e]);
                        }
                        var r = T.empty(),
                          i = new ft();
                        return (
                          'undirected' !== t &&
                            ('out' !== e && (r = Q(r, pt(i, n, n.in))),
                            'in' !== e && (r = Q(r, pt(i, n, n.out)))),
                          'directed' !== t && (r = Q(r, pt(i, n, n.undirected))),
                          r
                        );
                      })('mixed' === r ? this.type : r, i, e);
                    };
                  })(t, e);
              });
            })(St);
          var Lt = (function (t) {
              function n(e) {
                var n = u({ type: 'directed' }, e);
                if ('multi' in n && !1 !== n.multi)
                  throw new F(
                    'DirectedGraph.from: inconsistent indication that the graph should be multi in given options!',
                  );
                if ('directed' !== n.type)
                  throw new F(
                    'DirectedGraph.from: inconsistent "' + n.type + '" type in given options!',
                  );
                return t.call(this, n) || this;
              }
              return e(n, t), n;
            })(St),
            Nt = (function (t) {
              function n(e) {
                var n = u({ type: 'undirected' }, e);
                if ('multi' in n && !1 !== n.multi)
                  throw new F(
                    'UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!',
                  );
                if ('undirected' !== n.type)
                  throw new F(
                    'UndirectedGraph.from: inconsistent "' + n.type + '" type in given options!',
                  );
                return t.call(this, n) || this;
              }
              return e(n, t), n;
            })(St),
            Ct = (function (t) {
              function n(e) {
                var n = u({ multi: !0 }, e);
                if ('multi' in n && !0 !== n.multi)
                  throw new F(
                    'MultiGraph.from: inconsistent indication that the graph should be simple in given options!',
                  );
                return t.call(this, n) || this;
              }
              return e(n, t), n;
            })(St),
            Tt = (function (t) {
              function n(e) {
                var n = u({ type: 'directed', multi: !0 }, e);
                if ('multi' in n && !0 !== n.multi)
                  throw new F(
                    'MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!',
                  );
                if ('directed' !== n.type)
                  throw new F(
                    'MultiDirectedGraph.from: inconsistent "' + n.type + '" type in given options!',
                  );
                return t.call(this, n) || this;
              }
              return e(n, t), n;
            })(St),
            Gt = (function (t) {
              function n(e) {
                var n = u({ type: 'undirected', multi: !0 }, e);
                if ('multi' in n && !0 !== n.multi)
                  throw new F(
                    'MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!',
                  );
                if ('undirected' !== n.type)
                  throw new F(
                    'MultiUndirectedGraph.from: inconsistent "' +
                      n.type +
                      '" type in given options!',
                  );
                return t.call(this, n) || this;
              }
              return e(n, t), n;
            })(St);
          function Ut(t) {
            t.from = function (e, n) {
              var r = u({}, e.options, n),
                i = new t(r);
              return i.import(e), i;
            };
          }
          return (
            Ut(St),
            Ut(Lt),
            Ut(Nt),
            Ut(Ct),
            Ut(Tt),
            Ut(Gt),
            (St.Graph = St),
            (St.DirectedGraph = Lt),
            (St.UndirectedGraph = Nt),
            (St.MultiGraph = Ct),
            (St.MultiDirectedGraph = Tt),
            (St.MultiUndirectedGraph = Gt),
            (St.InvalidArgumentsGraphError = F),
            (St.NotFoundGraphError = q),
            (St.UsageGraphError = B),
            St
          );
        })();
      },
      453: (t, e, n) => {
        var r = n(650),
          i = n(993);
        function o(t, e) {
          if (arguments.length < 2)
            throw new Error('mnemonist/fixed-deque: expecting an Array class and a capacity.');
          if ('number' != typeof e || e <= 0)
            throw new Error('mnemonist/fixed-deque: `capacity` should be a positive number.');
          (this.ArrayClass = t),
            (this.capacity = e),
            (this.items = new t(this.capacity)),
            this.clear();
        }
        (o.prototype.clear = function () {
          (this.start = 0), (this.size = 0);
        }),
          (o.prototype.push = function (t) {
            if (this.size === this.capacity)
              throw new Error(
                'mnemonist/fixed-deque.push: deque capacity (' + this.capacity + ') exceeded!',
              );
            var e = (this.start + this.size) % this.capacity;
            return (this.items[e] = t), ++this.size;
          }),
          (o.prototype.unshift = function (t) {
            if (this.size === this.capacity)
              throw new Error(
                'mnemonist/fixed-deque.unshift: deque capacity (' + this.capacity + ') exceeded!',
              );
            var e = this.start - 1;
            return (
              0 === this.start && (e = this.capacity - 1),
              (this.items[e] = t),
              (this.start = e),
              ++this.size
            );
          }),
          (o.prototype.pop = function () {
            if (0 === this.size) return;
            const t = (this.start + this.size - 1) % this.capacity;
            return this.size--, this.items[t];
          }),
          (o.prototype.shift = function () {
            if (0 !== this.size) {
              var t = this.start;
              return (
                this.size--,
                this.start++,
                this.start === this.capacity && (this.start = 0),
                this.items[t]
              );
            }
          }),
          (o.prototype.peekFirst = function () {
            if (0 !== this.size) return this.items[this.start];
          }),
          (o.prototype.peekLast = function () {
            if (0 !== this.size) {
              var t = this.start + this.size - 1;
              return t > this.capacity && (t -= this.capacity), this.items[t];
            }
          }),
          (o.prototype.get = function (t) {
            if (0 !== this.size)
              return (t = this.start + t) > this.capacity && (t -= this.capacity), this.items[t];
          }),
          (o.prototype.forEach = function (t, e) {
            e = arguments.length > 1 ? e : this;
            for (var n = this.capacity, r = this.size, i = this.start, o = 0; o < r; )
              t.call(e, this.items[i], o, this), o++, ++i === n && (i = 0);
          }),
          (o.prototype.toArray = function () {
            var t = this.start + this.size;
            if (t < this.capacity) return this.items.slice(this.start, t);
            for (
              var e = new this.ArrayClass(this.size),
                n = this.capacity,
                r = this.size,
                i = this.start,
                o = 0;
              o < r;

            )
              (e[o] = this.items[i]), o++, ++i === n && (i = 0);
            return e;
          }),
          (o.prototype.values = function () {
            var t = this.items,
              e = this.capacity,
              n = this.size,
              r = this.start,
              o = 0;
            return new i(function () {
              if (o >= n) return { done: !0 };
              var i = t[r];
              return r++, o++, r === e && (r = 0), { value: i, done: !1 };
            });
          }),
          (o.prototype.entries = function () {
            var t = this.items,
              e = this.capacity,
              n = this.size,
              r = this.start,
              o = 0;
            return new i(function () {
              if (o >= n) return { done: !0 };
              var i = t[r];
              return ++r === e && (r = 0), { value: [o++, i], done: !1 };
            });
          }),
          'undefined' != typeof Symbol && (o.prototype[Symbol.iterator] = o.prototype.values),
          (o.prototype.inspect = function () {
            var t = this.toArray();
            return (
              (t.type = this.ArrayClass.name),
              (t.capacity = this.capacity),
              Object.defineProperty(t, 'constructor', { value: o, enumerable: !1 }),
              t
            );
          }),
          'undefined' != typeof Symbol &&
            (o.prototype[Symbol.for('nodejs.util.inspect.custom')] = o.prototype.inspect),
          (o.from = function (t, e, n) {
            if (arguments.length < 3 && 'number' != typeof (n = r.guessLength(t)))
              throw new Error(
                'mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.',
              );
            var i = new o(e, n);
            if (r.isArrayLike(t)) {
              var a, u;
              for (a = 0, u = t.length; a < u; a++) i.items[a] = t[a];
              return (i.size = u), i;
            }
            return (
              r.forEach(t, function (t) {
                i.push(t);
              }),
              i
            );
          }),
          (t.exports = o);
      },
      650: (t, e, n) => {
        var r = n(113),
          i = n(801);
        function o(t) {
          return 'number' == typeof t.length
            ? t.length
            : 'number' == typeof t.size
            ? t.size
            : void 0;
        }
        (e.isArrayLike = function (t) {
          return Array.isArray(t) || i.isTypedArray(t);
        }),
          (e.guessLength = o),
          (e.toArray = function (t) {
            var e = o(t),
              n = 'number' == typeof e ? new Array(e) : [],
              i = 0;
            return (
              r(t, function (t) {
                n[i++] = t;
              }),
              n
            );
          }),
          (e.toArrayWithIndices = function (t) {
            var e = o(t),
              n = 'number' == typeof e ? i.getPointerArray(e) : Array,
              a = 'number' == typeof e ? new Array(e) : [],
              u = 'number' == typeof e ? new n(e) : [],
              c = 0;
            return (
              r(t, function (t) {
                (a[c] = t), (u[c] = c++);
              }),
              [a, u]
            );
          });
      },
      801: (t, e) => {
        var n = Math.pow(2, 8) - 1,
          r = Math.pow(2, 16) - 1,
          i = Math.pow(2, 32) - 1,
          o = Math.pow(2, 7) - 1,
          a = Math.pow(2, 15) - 1,
          u = Math.pow(2, 31) - 1;
        (e.getPointerArray = function (t) {
          var e = t - 1;
          if (e <= n) return Uint8Array;
          if (e <= r) return Uint16Array;
          if (e <= i) return Uint32Array;
          throw new Error('mnemonist: Pointer Array of size > 4294967295 is not supported.');
        }),
          (e.getSignedPointerArray = function (t) {
            var e = t - 1;
            return e <= o ? Int8Array : e <= a ? Int16Array : e <= u ? Int32Array : Float64Array;
          }),
          (e.getNumberType = function (t) {
            return t === (0 | t)
              ? -1 === Math.sign(t)
                ? t <= 127 && t >= -128
                  ? Int8Array
                  : t <= 32767 && t >= -32768
                  ? Int16Array
                  : Int32Array
                : t <= 255
                ? Uint8Array
                : t <= 65535
                ? Uint16Array
                : Uint32Array
              : Float64Array;
          });
        var c = {
          Uint8Array: 1,
          Int8Array: 2,
          Uint16Array: 3,
          Int16Array: 4,
          Uint32Array: 5,
          Int32Array: 6,
          Float32Array: 7,
          Float64Array: 8,
        };
        (e.getMinimalRepresentation = function (t, n) {
          var r,
            i,
            o,
            a,
            u,
            s = null,
            h = 0;
          for (a = 0, u = t.length; a < u; a++)
            (o = n ? n(t[a]) : t[a]),
              (i = e.getNumberType(o)),
              (r = c[i.name]) > h && ((h = r), (s = i));
          return s;
        }),
          (e.isTypedArray = function (t) {
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView(t);
          }),
          (e.concat = function () {
            var t,
              e,
              n,
              r = 0;
            for (t = 0, n = arguments.length; t < n; t++) r += arguments[t].length;
            var i = new arguments[0].constructor(r);
            for (t = 0, e = 0; t < n; t++) i.set(arguments[t], e), (e += arguments[t].length);
            return i;
          }),
          (e.indices = function (t) {
            for (var n = new (e.getPointerArray(t))(t), r = 0; r < t; r++) n[r] = r;
            return n;
          });
      },
      113: (t, e, n) => {
        var r = n(844),
          i = r.ARRAY_BUFFER_SUPPORT,
          o = r.SYMBOL_SUPPORT;
        t.exports = function (t, e) {
          var n, r, a, u, c;
          if (!t) throw new Error('obliterator/forEach: invalid iterable.');
          if ('function' != typeof e) throw new Error('obliterator/forEach: expecting a callback.');
          if (
            Array.isArray(t) ||
            (i && ArrayBuffer.isView(t)) ||
            'string' == typeof t ||
            '[object Arguments]' === t.toString()
          )
            for (a = 0, u = t.length; a < u; a++) e(t[a], a);
          else if ('function' != typeof t.forEach)
            if (
              (o &&
                Symbol.iterator in t &&
                'function' != typeof t.next &&
                (t = t[Symbol.iterator]()),
              'function' != typeof t.next)
            )
              for (r in t) t.hasOwnProperty(r) && e(t[r], r);
            else for (n = t, a = 0; !0 !== (c = n.next()).done; ) e(c.value, a), a++;
          else t.forEach(e);
        };
      },
      993: (t) => {
        function e(t) {
          if ('function' != typeof t)
            throw new Error('obliterator/iterator: expecting a function!');
          this.next = t;
        }
        'undefined' != typeof Symbol &&
          (e.prototype[Symbol.iterator] = function () {
            return this;
          }),
          (e.of = function () {
            var t = arguments,
              n = t.length,
              r = 0;
            return new e(function () {
              return r >= n ? { done: !0 } : { done: !1, value: t[r++] };
            });
          }),
          (e.empty = function () {
            return new e(function () {
              return { done: !0 };
            });
          }),
          (e.fromSequence = function (t) {
            var n = 0,
              r = t.length;
            return new e(function () {
              return n >= r ? { done: !0 } : { done: !1, value: t[n++] };
            });
          }),
          (e.is = function (t) {
            return (
              t instanceof e || ('object' == typeof t && null !== t && 'function' == typeof t.next)
            );
          }),
          (t.exports = e);
      },
      844: (t, e) => {
        (e.ARRAY_BUFFER_SUPPORT = 'undefined' != typeof ArrayBuffer),
          (e.SYMBOL_SUPPORT = 'undefined' != typeof Symbol);
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { exports: {} });
    return t[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      'use strict';
      function t(e) {
        return (
          (t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          t(e)
        );
      }
      function e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, o(r.key), r);
        }
      }
      function r(t, n, r) {
        return (
          n && e(t.prototype, n),
          r && e(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
      }
      function i(t, e, n) {
        return (
          (e = o(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function o(e) {
        var n = (function (e, n) {
          if ('object' !== t(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, 'string');
            if ('object' !== t(i)) return i;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === t(n) ? n : String(n);
      }
      var a = r(function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
      });
      i(a, 'highlightedNodes', []),
        i(a, 'focusMode', !1),
        i(a, 'openedRecordId', void 0),
        i(a, 'position', { x: 0, y: 0, zoom: 1 }),
        window.addEventListener('DOMContentLoaded', function () {
          document.getElementById('view-save').addEventListener('click', function () {
            var t = new URL(window.location),
              e = Array.from(document.querySelectorAll('#types-form input:checked')).map(
                function (t) {
                  return t.name;
                },
              ),
              n = Array.from(document.querySelectorAll('#tags-form input:checked')).map(
                function (t) {
                  return t.name;
                },
              ),
              r = document.getElementById('focus-input').value;
            e.length > 0 && t.searchParams.set('filters', e.join('-')),
              n.length > 0 && t.searchParams.set('tags', n.join('-')),
              document.querySelector('#focus-check:checked') && t.searchParams.set('focus', r),
              window.location.replace(t);
          });
        });
      const u = {
        actualiser: function (t, e) {
          var n = new URL('#' + t, window.location);
          if (null == history.state) this.init(t, e, n);
          else {
            var r = history.state.hist;
            r.push(t), history.pushState({ hist: r }, e, n);
          }
          document.title = 'Cosma — ' + e;
        },
        init: function (t, e, n) {
          history.pushState({ hist: [t] }, e, n);
        },
      };
      function c(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      var s, h;
      1 === (s = c).length &&
        ((h = s),
        (s = function (t, e) {
          return c(h(t), e);
        }));
      var f = Array.prototype;
      f.slice, f.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2), Array.prototype.slice;
      var l = { value: function () {} };
      function d() {
        for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
          if (!(t = arguments[e] + '') || t in r) throw new Error('illegal type: ' + t);
          r[t] = [];
        }
        return new p(r);
      }
      function p(t) {
        this._ = t;
      }
      function y(t, e) {
        for (var n, r = 0, i = t.length; r < i; ++r) if ((n = t[r]).name === e) return n.value;
      }
      function g(t, e, n) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === e) {
            (t[r] = l), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != n && t.push({ name: e, value: n }), t;
      }
      p.prototype = d.prototype = {
        constructor: p,
        on: function (t, e) {
          var n,
            r,
            i = this._,
            o =
              ((r = i),
              (t + '')
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var e = '',
                    n = t.indexOf('.');
                  if (
                    (n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                    t && !r.hasOwnProperty(t))
                  )
                    throw new Error('unknown type: ' + t);
                  return { type: t, name: e };
                })),
            a = -1,
            u = o.length;
          if (!(arguments.length < 2)) {
            if (null != e && 'function' != typeof e) throw new Error('invalid callback: ' + e);
            for (; ++a < u; )
              if ((n = (t = o[a]).type)) i[n] = g(i[n], t.name, e);
              else if (null == e) for (n in i) i[n] = g(i[n], t.name, null);
            return this;
          }
          for (; ++a < u; ) if ((n = (t = o[a]).type) && (n = y(i[n], t.name))) return n;
        },
        copy: function () {
          var t = {},
            e = this._;
          for (var n in e) t[n] = e[n].slice();
          return new p(t);
        },
        call: function (t, e) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, i = new Array(n), o = 0; o < n; ++o) i[o] = arguments[o + 2];
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (o = 0, n = (r = this._[t]).length; o < n; ++o) r[o].value.apply(e, i);
        },
        apply: function (t, e, n) {
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
        },
      };
      const v = d;
      var m = 'http://www.w3.org/1999/xhtml';
      const _ = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: m,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      };
      function b(t) {
        var e = (t += ''),
          n = e.indexOf(':');
        return (
          n >= 0 && 'xmlns' !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
          _.hasOwnProperty(e) ? { space: _[e], local: t } : t
        );
      }
      function w(t) {
        return function () {
          var e = this.ownerDocument,
            n = this.namespaceURI;
          return n === m && e.documentElement.namespaceURI === m
            ? e.createElement(t)
            : e.createElementNS(n, t);
        };
      }
      function x(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      function k(t) {
        var e = b(t);
        return (e.local ? x : w)(e);
      }
      function M() {}
      function E(t) {
        return null == t
          ? M
          : function () {
              return this.querySelector(t);
            };
      }
      function A() {
        return [];
      }
      function S(t) {
        return null == t
          ? A
          : function () {
              return this.querySelectorAll(t);
            };
      }
      var L = function (t) {
        return function () {
          return this.matches(t);
        };
      };
      if ('undefined' != typeof document) {
        var N = document.documentElement;
        if (!N.matches) {
          var C =
            N.webkitMatchesSelector ||
            N.msMatchesSelector ||
            N.mozMatchesSelector ||
            N.oMatchesSelector;
          L = function (t) {
            return function () {
              return C.call(this, t);
            };
          };
        }
      }
      const T = L;
      function G(t) {
        return new Array(t.length);
      }
      function U(t, e) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = e);
      }
      U.prototype = {
        constructor: U,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, e) {
          return this._parent.insertBefore(t, e);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      function D(t, e, n, r, i, o) {
        for (var a, u = 0, c = e.length, s = o.length; u < s; ++u)
          (a = e[u]) ? ((a.__data__ = o[u]), (r[u] = a)) : (n[u] = new U(t, o[u]));
        for (; u < c; ++u) (a = e[u]) && (i[u] = a);
      }
      function O(t, e, n, r, i, o, a) {
        var u,
          c,
          s,
          h = {},
          f = e.length,
          l = o.length,
          d = new Array(f);
        for (u = 0; u < f; ++u)
          (c = e[u]) &&
            ((d[u] = s = '$' + a.call(c, c.__data__, u, e)), s in h ? (i[u] = c) : (h[s] = c));
        for (u = 0; u < l; ++u)
          (c = h[(s = '$' + a.call(t, o[u], u, o))])
            ? ((r[u] = c), (c.__data__ = o[u]), (h[s] = null))
            : (n[u] = new U(t, o[u]));
        for (u = 0; u < f; ++u) (c = e[u]) && h[d[u]] === c && (i[u] = c);
      }
      function j(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      function z(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function P(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function I(t, e) {
        return function () {
          this.setAttribute(t, e);
        };
      }
      function R(t, e) {
        return function () {
          this.setAttributeNS(t.space, t.local, e);
        };
      }
      function F(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
        };
      }
      function q(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, n);
        };
      }
      function B(t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
        );
      }
      function Y(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function W(t, e, n) {
        return function () {
          this.style.setProperty(t, e, n);
        };
      }
      function K(t, e, n) {
        return function () {
          var r = e.apply(this, arguments);
          null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
        };
      }
      function H(t, e) {
        return t.style.getPropertyValue(e) || B(t).getComputedStyle(t, null).getPropertyValue(e);
      }
      function X(t) {
        return function () {
          delete this[t];
        };
      }
      function $(t, e) {
        return function () {
          this[t] = e;
        };
      }
      function V(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n ? delete this[t] : (this[t] = n);
        };
      }
      function Z(t) {
        return t.trim().split(/^|\s+/);
      }
      function J(t) {
        return t.classList || new Q(t);
      }
      function Q(t) {
        (this._node = t), (this._names = Z(t.getAttribute('class') || ''));
      }
      function tt(t, e) {
        for (var n = J(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
      }
      function et(t, e) {
        for (var n = J(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
      }
      function nt(t) {
        return function () {
          tt(this, t);
        };
      }
      function rt(t) {
        return function () {
          et(this, t);
        };
      }
      function it(t, e) {
        return function () {
          (e.apply(this, arguments) ? tt : et)(this, t);
        };
      }
      function ot() {
        this.textContent = '';
      }
      function at(t) {
        return function () {
          this.textContent = t;
        };
      }
      function ut(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.textContent = null == e ? '' : e;
        };
      }
      function ct() {
        this.innerHTML = '';
      }
      function st(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function ht(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.innerHTML = null == e ? '' : e;
        };
      }
      function ft() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function lt() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function dt() {
        return null;
      }
      function pt() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function yt() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
      }
      function gt() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
      }
      Q.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
        },
        remove: function (t) {
          var e = this._names.indexOf(t);
          e >= 0 &&
            (this._names.splice(e, 1), this._node.setAttribute('class', this._names.join(' ')));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      var vt = {},
        mt = null;
      function _t(t, e, n) {
        return (
          (t = bt(t, e, n)),
          function (e) {
            var n = e.relatedTarget;
            (n && (n === this || 8 & n.compareDocumentPosition(this))) || t.call(this, e);
          }
        );
      }
      function bt(t, e, n) {
        return function (r) {
          var i = mt;
          mt = r;
          try {
            t.call(this, this.__data__, e, n);
          } finally {
            mt = i;
          }
        };
      }
      function wt(t) {
        return function () {
          var e = this.__on;
          if (e) {
            for (var n, r = 0, i = -1, o = e.length; r < o; ++r)
              (n = e[r]),
                (t.type && n.type !== t.type) || n.name !== t.name
                  ? (e[++i] = n)
                  : this.removeEventListener(n.type, n.listener, n.capture);
            ++i ? (e.length = i) : delete this.__on;
          }
        };
      }
      function xt(t, e, n) {
        var r = vt.hasOwnProperty(t.type) ? _t : bt;
        return function (i, o, a) {
          var u,
            c = this.__on,
            s = r(e, o, a);
          if (c)
            for (var h = 0, f = c.length; h < f; ++h)
              if ((u = c[h]).type === t.type && u.name === t.name)
                return (
                  this.removeEventListener(u.type, u.listener, u.capture),
                  this.addEventListener(u.type, (u.listener = s), (u.capture = n)),
                  void (u.value = e)
                );
          this.addEventListener(t.type, s, n),
            (u = { type: t.type, name: t.name, value: e, listener: s, capture: n }),
            c ? c.push(u) : (this.__on = [u]);
        };
      }
      function kt(t, e, n, r) {
        var i = mt;
        (t.sourceEvent = mt), (mt = t);
        try {
          return e.apply(n, r);
        } finally {
          mt = i;
        }
      }
      function Mt(t, e, n) {
        var r = B(t),
          i = r.CustomEvent;
        'function' == typeof i
          ? (i = new i(e, n))
          : ((i = r.document.createEvent('Event')),
            n
              ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
              : i.initEvent(e, !1, !1)),
          t.dispatchEvent(i);
      }
      function Et(t, e) {
        return function () {
          return Mt(this, t, e);
        };
      }
      function At(t, e) {
        return function () {
          return Mt(this, t, e.apply(this, arguments));
        };
      }
      'undefined' != typeof document &&
        ('onmouseenter' in document.documentElement ||
          (vt = { mouseenter: 'mouseover', mouseleave: 'mouseout' }));
      var St = [null];
      function Lt(t, e) {
        (this._groups = t), (this._parents = e);
      }
      function Nt() {
        return new Lt([[document.documentElement]], St);
      }
      Lt.prototype = Nt.prototype = {
        constructor: Lt,
        select: function (t) {
          'function' != typeof t && (t = E(t));
          for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
            for (var o, a, u = e[i], c = u.length, s = (r[i] = new Array(c)), h = 0; h < c; ++h)
              (o = u[h]) &&
                (a = t.call(o, o.__data__, h, u)) &&
                ('__data__' in o && (a.__data__ = o.__data__), (s[h] = a));
          return new Lt(r, this._parents);
        },
        selectAll: function (t) {
          'function' != typeof t && (t = S(t));
          for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
            for (var a, u = e[o], c = u.length, s = 0; s < c; ++s)
              (a = u[s]) && (r.push(t.call(a, a.__data__, s, u)), i.push(a));
          return new Lt(r, i);
        },
        filter: function (t) {
          'function' != typeof t && (t = T(t));
          for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
            for (var o, a = e[i], u = a.length, c = (r[i] = []), s = 0; s < u; ++s)
              (o = a[s]) && t.call(o, o.__data__, s, a) && c.push(o);
          return new Lt(r, this._parents);
        },
        data: function (t, e) {
          if (!t)
            return (
              (p = new Array(this.size())),
              (h = -1),
              this.each(function (t) {
                p[++h] = t;
              }),
              p
            );
          var n,
            r = e ? O : D,
            i = this._parents,
            o = this._groups;
          'function' != typeof t &&
            ((n = t),
            (t = function () {
              return n;
            }));
          for (
            var a = o.length, u = new Array(a), c = new Array(a), s = new Array(a), h = 0;
            h < a;
            ++h
          ) {
            var f = i[h],
              l = o[h],
              d = l.length,
              p = t.call(f, f && f.__data__, h, i),
              y = p.length,
              g = (c[h] = new Array(y)),
              v = (u[h] = new Array(y));
            r(f, l, g, v, (s[h] = new Array(d)), p, e);
            for (var m, _, b = 0, w = 0; b < y; ++b)
              if ((m = g[b])) {
                for (b >= w && (w = b + 1); !(_ = v[w]) && ++w < y; );
                m._next = _ || null;
              }
          }
          return ((u = new Lt(u, i))._enter = c), (u._exit = s), u;
        },
        enter: function () {
          return new Lt(this._enter || this._groups.map(G), this._parents);
        },
        exit: function () {
          return new Lt(this._exit || this._groups.map(G), this._parents);
        },
        merge: function (t) {
          for (
            var e = this._groups,
              n = t._groups,
              r = e.length,
              i = n.length,
              o = Math.min(r, i),
              a = new Array(r),
              u = 0;
            u < o;
            ++u
          )
            for (
              var c, s = e[u], h = n[u], f = s.length, l = (a[u] = new Array(f)), d = 0;
              d < f;
              ++d
            )
              (c = s[d] || h[d]) && (l[d] = c);
          for (; u < r; ++u) a[u] = e[u];
          return new Lt(a, this._parents);
        },
        order: function () {
          for (var t = this._groups, e = -1, n = t.length; ++e < n; )
            for (var r, i = t[e], o = i.length - 1, a = i[o]; --o >= 0; )
              (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), (a = r));
          return this;
        },
        sort: function (t) {
          function e(e, n) {
            return e && n ? t(e.__data__, n.__data__) : !e - !n;
          }
          t || (t = j);
          for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
            for (var a, u = n[o], c = u.length, s = (i[o] = new Array(c)), h = 0; h < c; ++h)
              (a = u[h]) && (s[h] = a);
            s.sort(e);
          }
          return new Lt(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          var t = new Array(this.size()),
            e = -1;
          return (
            this.each(function () {
              t[++e] = this;
            }),
            t
          );
        },
        node: function () {
          for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
            for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
              var a = r[i];
              if (a) return a;
            }
          return null;
        },
        size: function () {
          var t = 0;
          return (
            this.each(function () {
              ++t;
            }),
            t
          );
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
            for (var i, o = e[n], a = 0, u = o.length; a < u; ++a)
              (i = o[a]) && t.call(i, i.__data__, a, o);
          return this;
        },
        attr: function (t, e) {
          var n = b(t);
          if (arguments.length < 2) {
            var r = this.node();
            return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
          }
          return this.each(
            (null == e
              ? n.local
                ? P
                : z
              : 'function' == typeof e
              ? n.local
                ? q
                : F
              : n.local
              ? R
              : I)(n, e),
          );
        },
        style: function (t, e, n) {
          return arguments.length > 1
            ? this.each((null == e ? Y : 'function' == typeof e ? K : W)(t, e, null == n ? '' : n))
            : H(this.node(), t);
        },
        property: function (t, e) {
          return arguments.length > 1
            ? this.each((null == e ? X : 'function' == typeof e ? V : $)(t, e))
            : this.node()[t];
        },
        classed: function (t, e) {
          var n = Z(t + '');
          if (arguments.length < 2) {
            for (var r = J(this.node()), i = -1, o = n.length; ++i < o; )
              if (!r.contains(n[i])) return !1;
            return !0;
          }
          return this.each(('function' == typeof e ? it : e ? nt : rt)(n, e));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? ot : ('function' == typeof t ? ut : at)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? ct : ('function' == typeof t ? ht : st)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(ft);
        },
        lower: function () {
          return this.each(lt);
        },
        append: function (t) {
          var e = 'function' == typeof t ? t : k(t);
          return this.select(function () {
            return this.appendChild(e.apply(this, arguments));
          });
        },
        insert: function (t, e) {
          var n = 'function' == typeof t ? t : k(t),
            r = null == e ? dt : 'function' == typeof e ? e : E(e);
          return this.select(function () {
            return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
          });
        },
        remove: function () {
          return this.each(pt);
        },
        clone: function (t) {
          return this.select(t ? gt : yt);
        },
        datum: function (t) {
          return arguments.length ? this.property('__data__', t) : this.node().__data__;
        },
        on: function (t, e, n) {
          var r,
            i,
            o = (function (t) {
              return t
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var e = '',
                    n = t.indexOf('.');
                  return (
                    n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))), { type: t, name: e }
                  );
                });
            })(t + ''),
            a = o.length;
          if (!(arguments.length < 2)) {
            for (u = e ? xt : wt, null == n && (n = !1), r = 0; r < a; ++r)
              this.each(u(o[r], e, n));
            return this;
          }
          var u = this.node().__on;
          if (u)
            for (var c, s = 0, h = u.length; s < h; ++s)
              for (r = 0, c = u[s]; r < a; ++r)
                if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
        },
        dispatch: function (t, e) {
          return this.each(('function' == typeof e ? At : Et)(t, e));
        },
      };
      const Ct = Nt;
      function Tt(t) {
        return 'string' == typeof t
          ? new Lt([[document.querySelector(t)]], [document.documentElement])
          : new Lt([[t]], St);
      }
      var Gt = 0;
      function Ut() {
        this._ = '@' + (++Gt).toString(36);
      }
      function Dt() {
        for (var t, e = mt; (t = e.sourceEvent); ) e = t;
        return e;
      }
      function Ot(t, e) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
          var r = n.createSVGPoint();
          return (
            (r.x = e.clientX),
            (r.y = e.clientY),
            [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
          );
        }
        var i = t.getBoundingClientRect();
        return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
      }
      function jt(t) {
        var e = Dt();
        return e.changedTouches && (e = e.changedTouches[0]), Ot(t, e);
      }
      function zt(t, e, n) {
        arguments.length < 3 && ((n = e), (e = Dt().changedTouches));
        for (var r, i = 0, o = e ? e.length : 0; i < o; ++i)
          if ((r = e[i]).identifier === n) return Ot(t, r);
        return null;
      }
      function Pt() {
        mt.stopImmediatePropagation();
      }
      function It() {
        mt.preventDefault(), mt.stopImmediatePropagation();
      }
      function Rt(t) {
        var e = t.document.documentElement,
          n = Tt(t).on('dragstart.drag', It, !0);
        'onselectstart' in e
          ? n.on('selectstart.drag', It, !0)
          : ((e.__noselect = e.style.MozUserSelect), (e.style.MozUserSelect = 'none'));
      }
      function Ft(t, e) {
        var n = t.document.documentElement,
          r = Tt(t).on('dragstart.drag', null);
        e &&
          (r.on('click.drag', It, !0),
          setTimeout(function () {
            r.on('click.drag', null);
          }, 0)),
          'onselectstart' in n
            ? r.on('selectstart.drag', null)
            : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
      }
      function qt(t) {
        return function () {
          return t;
        };
      }
      function Bt(t, e, n, r, i, o, a, u, c, s) {
        (this.target = t),
          (this.type = e),
          (this.subject = n),
          (this.identifier = r),
          (this.active = i),
          (this.x = o),
          (this.y = a),
          (this.dx = u),
          (this.dy = c),
          (this._ = s);
      }
      function Yt() {
        return !mt.button;
      }
      function Wt() {
        return this.parentNode;
      }
      function Kt(t) {
        return null == t ? { x: mt.x, y: mt.y } : t;
      }
      function Ht() {
        return 'ontouchstart' in this;
      }
      function Xt(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function $t(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function Vt() {}
      (Ut.prototype = function () {
        return new Ut();
      }.prototype =
        {
          constructor: Ut,
          get: function (t) {
            for (var e = this._; !(e in t); ) if (!(t = t.parentNode)) return;
            return t[e];
          },
          set: function (t, e) {
            return (t[this._] = e);
          },
          remove: function (t) {
            return this._ in t && delete t[this._];
          },
          toString: function () {
            return this._;
          },
        }),
        (Bt.prototype.on = function () {
          var t = this._.on.apply(this._, arguments);
          return t === this._ ? this : t;
        });
      var Zt = 0.7,
        Jt = 1 / Zt,
        Qt = '\\s*([+-]?\\d+)\\s*',
        te = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        ee = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        ne = /^#([0-9a-f]{3})$/,
        re = /^#([0-9a-f]{6})$/,
        ie = new RegExp('^rgb\\(' + [Qt, Qt, Qt] + '\\)$'),
        oe = new RegExp('^rgb\\(' + [ee, ee, ee] + '\\)$'),
        ae = new RegExp('^rgba\\(' + [Qt, Qt, Qt, te] + '\\)$'),
        ue = new RegExp('^rgba\\(' + [ee, ee, ee, te] + '\\)$'),
        ce = new RegExp('^hsl\\(' + [te, ee, ee] + '\\)$'),
        se = new RegExp('^hsla\\(' + [te, ee, ee, te] + '\\)$'),
        he = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function fe(t) {
        var e;
        return (
          (t = (t + '').trim().toLowerCase()),
          (e = ne.exec(t))
            ? new ge(
                (((e = parseInt(e[1], 16)) >> 8) & 15) | ((e >> 4) & 240),
                ((e >> 4) & 15) | (240 & e),
                ((15 & e) << 4) | (15 & e),
                1,
              )
            : (e = re.exec(t))
            ? le(parseInt(e[1], 16))
            : (e = ie.exec(t))
            ? new ge(e[1], e[2], e[3], 1)
            : (e = oe.exec(t))
            ? new ge((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
            : (e = ae.exec(t))
            ? de(e[1], e[2], e[3], e[4])
            : (e = ue.exec(t))
            ? de((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
            : (e = ce.exec(t))
            ? ve(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = se.exec(t))
            ? ve(e[1], e[2] / 100, e[3] / 100, e[4])
            : he.hasOwnProperty(t)
            ? le(he[t])
            : 'transparent' === t
            ? new ge(NaN, NaN, NaN, 0)
            : null
        );
      }
      function le(t) {
        return new ge((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function de(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new ge(t, e, n, r);
      }
      function pe(t) {
        return (
          t instanceof Vt || (t = fe(t)),
          t ? new ge((t = t.rgb()).r, t.g, t.b, t.opacity) : new ge()
        );
      }
      function ye(t, e, n, r) {
        return 1 === arguments.length ? pe(t) : new ge(t, e, n, null == r ? 1 : r);
      }
      function ge(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function ve(t, e, n, r) {
        return (
          r <= 0 ? (t = e = n = NaN) : n <= 0 || n >= 1 ? (t = e = NaN) : e <= 0 && (t = NaN),
          new _e(t, e, n, r)
        );
      }
      function me(t, e, n, r) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof _e) return new _e(t.h, t.s, t.l, t.opacity);
              if ((t instanceof Vt || (t = fe(t)), !t)) return new _e();
              if (t instanceof _e) return t;
              var e = (t = t.rgb()).r / 255,
                n = t.g / 255,
                r = t.b / 255,
                i = Math.min(e, n, r),
                o = Math.max(e, n, r),
                a = NaN,
                u = o - i,
                c = (o + i) / 2;
              return (
                u
                  ? ((a =
                      e === o
                        ? (n - r) / u + 6 * (n < r)
                        : n === o
                        ? (r - e) / u + 2
                        : (e - n) / u + 4),
                    (u /= c < 0.5 ? o + i : 2 - o - i),
                    (a *= 60))
                  : (u = c > 0 && c < 1 ? 0 : a),
                new _e(a, u, c, t.opacity)
              );
            })(t)
          : new _e(t, e, n, null == r ? 1 : r);
      }
      function _e(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function be(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e)
        );
      }
      Xt(Vt, fe, {
        displayable: function () {
          return this.rgb().displayable();
        },
        toString: function () {
          return this.rgb() + '';
        },
      }),
        Xt(
          ge,
          ye,
          $t(Vt, {
            brighter: function (t) {
              return (
                (t = null == t ? Jt : Math.pow(Jt, t)),
                new ge(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? Zt : Math.pow(Zt, t)),
                new ge(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                0 <= this.r &&
                this.r <= 255 &&
                0 <= this.g &&
                this.g <= 255 &&
                0 <= this.b &&
                this.b <= 255 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            toString: function () {
              var t = this.opacity;
              return (
                (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? 'rgb(' : 'rgba(') +
                Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                ', ' +
                Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                ', ' +
                Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                (1 === t ? ')' : ', ' + t + ')')
              );
            },
          }),
        ),
        Xt(
          _e,
          me,
          $t(Vt, {
            brighter: function (t) {
              return (
                (t = null == t ? Jt : Math.pow(Jt, t)),
                new _e(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? Zt : Math.pow(Zt, t)),
                new _e(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                i = 2 * n - r;
              return new ge(
                be(t >= 240 ? t - 240 : t + 120, i, r),
                be(t, i, r),
                be(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity,
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
          }),
        );
      var we = Math.PI / 180,
        xe = 180 / Math.PI,
        ke = 0.95047,
        Me = 1,
        Ee = 1.08883,
        Ae = 4 / 29,
        Se = 6 / 29,
        Le = 3 * Se * Se,
        Ne = Se * Se * Se;
      function Ce(t) {
        if (t instanceof Te) return new Te(t.l, t.a, t.b, t.opacity);
        if (t instanceof ze) {
          var e = t.h * we;
          return new Te(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
        }
        t instanceof ge || (t = pe(t));
        var n = Oe(t.r),
          r = Oe(t.g),
          i = Oe(t.b),
          o = Ge((0.4124564 * n + 0.3575761 * r + 0.1804375 * i) / ke),
          a = Ge((0.2126729 * n + 0.7151522 * r + 0.072175 * i) / Me);
        return new Te(
          116 * a - 16,
          500 * (o - a),
          200 * (a - Ge((0.0193339 * n + 0.119192 * r + 0.9503041 * i) / Ee)),
          t.opacity,
        );
      }
      function Te(t, e, n, r) {
        (this.l = +t), (this.a = +e), (this.b = +n), (this.opacity = +r);
      }
      function Ge(t) {
        return t > Ne ? Math.pow(t, 1 / 3) : t / Le + Ae;
      }
      function Ue(t) {
        return t > Se ? t * t * t : Le * (t - Ae);
      }
      function De(t) {
        return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
      }
      function Oe(t) {
        return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function je(t, e, n, r) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof ze) return new ze(t.h, t.c, t.l, t.opacity);
              t instanceof Te || (t = Ce(t));
              var e = Math.atan2(t.b, t.a) * xe;
              return new ze(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
            })(t)
          : new ze(t, e, n, null == r ? 1 : r);
      }
      function ze(t, e, n, r) {
        (this.h = +t), (this.c = +e), (this.l = +n), (this.opacity = +r);
      }
      Xt(
        Te,
        function (t, e, n, r) {
          return 1 === arguments.length ? Ce(t) : new Te(t, e, n, null == r ? 1 : r);
        },
        $t(Vt, {
          brighter: function (t) {
            return new Te(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
          },
          darker: function (t) {
            return new Te(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
          },
          rgb: function () {
            var t = (this.l + 16) / 116,
              e = isNaN(this.a) ? t : t + this.a / 500,
              n = isNaN(this.b) ? t : t - this.b / 200;
            return (
              (t = Me * Ue(t)),
              new ge(
                De(3.2404542 * (e = ke * Ue(e)) - 1.5371385 * t - 0.4985314 * (n = Ee * Ue(n))),
                De(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
                De(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
                this.opacity,
              )
            );
          },
        }),
      ),
        Xt(
          ze,
          je,
          $t(Vt, {
            brighter: function (t) {
              return new ze(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
            },
            darker: function (t) {
              return new ze(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
            },
            rgb: function () {
              return Ce(this).rgb();
            },
          }),
        );
      var Pe = -0.14861,
        Ie = 1.78277,
        Re = -0.29227,
        Fe = -0.90649,
        qe = 1.97294,
        Be = qe * Fe,
        Ye = qe * Ie,
        We = Ie * Re - Fe * Pe;
      function Ke(t, e, n, r) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof He) return new He(t.h, t.s, t.l, t.opacity);
              t instanceof ge || (t = pe(t));
              var e = t.r / 255,
                n = t.g / 255,
                r = t.b / 255,
                i = (We * r + Be * e - Ye * n) / (We + Be - Ye),
                o = r - i,
                a = (qe * (n - i) - Re * o) / Fe,
                u = Math.sqrt(a * a + o * o) / (qe * i * (1 - i)),
                c = u ? Math.atan2(a, o) * xe - 120 : NaN;
              return new He(c < 0 ? c + 360 : c, u, i, t.opacity);
            })(t)
          : new He(t, e, n, null == r ? 1 : r);
      }
      function He(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function Xe(t, e, n, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      function $e(t) {
        return function () {
          return t;
        };
      }
      function Ve(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function Ze(t, e) {
        var n = e - t;
        return n
          ? Ve(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
          : $e(isNaN(t) ? e : t);
      }
      function Je(t, e) {
        var n = e - t;
        return n ? Ve(t, n) : $e(isNaN(t) ? e : t);
      }
      Xt(
        He,
        Ke,
        $t(Vt, {
          brighter: function (t) {
            return (
              (t = null == t ? Jt : Math.pow(Jt, t)),
              new He(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? Zt : Math.pow(Zt, t)),
              new He(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * we,
              e = +this.l,
              n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
              r = Math.cos(t),
              i = Math.sin(t);
            return new ge(
              255 * (e + n * (Pe * r + Ie * i)),
              255 * (e + n * (Re * r + Fe * i)),
              255 * (e + n * (qe * r)),
              this.opacity,
            );
          },
        }),
      );
      const Qe = (function t(e) {
        var n = (function (t) {
          return 1 == (t = +t)
            ? Je
            : function (e, n) {
                return n - e
                  ? (function (t, e, n) {
                      return (
                        (t = Math.pow(t, n)),
                        (e = Math.pow(e, n) - t),
                        (n = 1 / n),
                        function (r) {
                          return Math.pow(t + r * e, n);
                        }
                      );
                    })(e, n, t)
                  : $e(isNaN(e) ? n : e);
              };
        })(e);
        function r(t, e) {
          var r = n((t = ye(t)).r, (e = ye(e)).r),
            i = n(t.g, e.g),
            o = n(t.b, e.b),
            a = Je(t.opacity, e.opacity);
          return function (e) {
            return (t.r = r(e)), (t.g = i(e)), (t.b = o(e)), (t.opacity = a(e)), t + '';
          };
        }
        return (r.gamma = t), r;
      })(1);
      function tn(t) {
        return function (e) {
          var n,
            r,
            i = e.length,
            o = new Array(i),
            a = new Array(i),
            u = new Array(i);
          for (n = 0; n < i; ++n)
            (r = ye(e[n])), (o[n] = r.r || 0), (a[n] = r.g || 0), (u[n] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + '';
            }
          );
        };
      }
      function en(t, e) {
        return (
          (e -= t = +t),
          function (n) {
            return t + e * n;
          }
        );
      }
      tn(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r = n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * i - o,
            u = r < e - 1 ? t[r + 2] : 2 * o - i;
          return Xe((n - r / e) * e, a, i, o, u);
        };
      }),
        tn(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(r + e - 1) % e],
              o = t[r % e],
              a = t[(r + 1) % e],
              u = t[(r + 2) % e];
            return Xe((n - r / e) * e, i, o, a, u);
          };
        });
      var nn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        rn = new RegExp(nn.source, 'g');
      function on(t, e) {
        var n,
          r,
          i,
          o = (nn.lastIndex = rn.lastIndex = 0),
          a = -1,
          u = [],
          c = [];
        for (t += '', e += ''; (n = nn.exec(t)) && (r = rn.exec(e)); )
          (i = r.index) > o && ((i = e.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
            (n = n[0]) === (r = r[0])
              ? u[a]
                ? (u[a] += r)
                : (u[++a] = r)
              : ((u[++a] = null), c.push({ i: a, x: en(n, r) })),
            (o = rn.lastIndex);
        return (
          o < e.length && ((i = e.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
          u.length < 2
            ? c[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + '';
                  };
                })(c[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = c.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) u[(n = c[r]).i] = n.x(t);
                return u.join('');
              })
        );
      }
      var an,
        un,
        cn,
        sn,
        hn = 180 / Math.PI,
        fn = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
      function ln(t, e, n, r, i, o) {
        var a, u, c;
        return (
          (a = Math.sqrt(t * t + e * e)) && ((t /= a), (e /= a)),
          (c = t * n + e * r) && ((n -= t * c), (r -= e * c)),
          (u = Math.sqrt(n * n + r * r)) && ((n /= u), (r /= u), (c /= u)),
          t * r < e * n && ((t = -t), (e = -e), (c = -c), (a = -a)),
          {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(e, t) * hn,
            skewX: Math.atan(c) * hn,
            scaleX: a,
            scaleY: u,
          }
        );
      }
      function dn(t, e, n, r) {
        function i(t) {
          return t.length ? t.pop() + ' ' : '';
        }
        return function (o, a) {
          var u = [],
            c = [];
          return (
            (o = t(o)),
            (a = t(a)),
            (function (t, r, i, o, a, u) {
              if (t !== i || r !== o) {
                var c = a.push('translate(', null, e, null, n);
                u.push({ i: c - 4, x: en(t, i) }, { i: c - 2, x: en(r, o) });
              } else (i || o) && a.push('translate(' + i + e + o + n);
            })(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
            (function (t, e, n, o) {
              t !== e
                ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                  o.push({ i: n.push(i(n) + 'rotate(', null, r) - 2, x: en(t, e) }))
                : e && n.push(i(n) + 'rotate(' + e + r);
            })(o.rotate, a.rotate, u, c),
            (function (t, e, n, o) {
              t !== e
                ? o.push({ i: n.push(i(n) + 'skewX(', null, r) - 2, x: en(t, e) })
                : e && n.push(i(n) + 'skewX(' + e + r);
            })(o.skewX, a.skewX, u, c),
            (function (t, e, n, r, o, a) {
              if (t !== n || e !== r) {
                var u = o.push(i(o) + 'scale(', null, ',', null, ')');
                a.push({ i: u - 4, x: en(t, n) }, { i: u - 2, x: en(e, r) });
              } else (1 === n && 1 === r) || o.push(i(o) + 'scale(' + n + ',' + r + ')');
            })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c),
            (o = a = null),
            function (t) {
              for (var e, n = -1, r = c.length; ++n < r; ) u[(e = c[n]).i] = e.x(t);
              return u.join('');
            }
          );
        };
      }
      var pn = dn(
          function (t) {
            return 'none' === t
              ? fn
              : (an ||
                  ((an = document.createElement('DIV')),
                  (un = document.documentElement),
                  (cn = document.defaultView)),
                (an.style.transform = t),
                (t = cn.getComputedStyle(un.appendChild(an), null).getPropertyValue('transform')),
                un.removeChild(an),
                ln(+(t = t.slice(7, -1).split(','))[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
          },
          'px, ',
          'px)',
          'deg)',
        ),
        yn = dn(
          function (t) {
            return null == t
              ? fn
              : (sn || (sn = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
                sn.setAttribute('transform', t),
                (t = sn.transform.baseVal.consolidate())
                  ? ln((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                  : fn);
          },
          ', ',
          ')',
          ')',
        ),
        gn = Math.SQRT2;
      function vn(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      function mn(t, e) {
        var n,
          r,
          i = t[0],
          o = t[1],
          a = t[2],
          u = e[0],
          c = e[1],
          s = e[2],
          h = u - i,
          f = c - o,
          l = h * h + f * f;
        if (l < 1e-12)
          (r = Math.log(s / a) / gn),
            (n = function (t) {
              return [i + t * h, o + t * f, a * Math.exp(gn * t * r)];
            });
        else {
          var d = Math.sqrt(l),
            p = (s * s - a * a + 4 * l) / (2 * a * 2 * d),
            y = (s * s - a * a - 4 * l) / (2 * s * 2 * d),
            g = Math.log(Math.sqrt(p * p + 1) - p),
            v = Math.log(Math.sqrt(y * y + 1) - y);
          (r = (v - g) / gn),
            (n = function (t) {
              var e,
                n = t * r,
                u = vn(g),
                c =
                  (a / (2 * d)) *
                  (u * ((e = gn * n + g), ((e = Math.exp(2 * e)) - 1) / (e + 1)) -
                    (function (t) {
                      return ((t = Math.exp(t)) - 1 / t) / 2;
                    })(g));
              return [i + c * h, o + c * f, (a * u) / vn(gn * n + g)];
            });
        }
        return (n.duration = 1e3 * r), n;
      }
      function _n(t) {
        return function (e, n) {
          var r = t((e = me(e)).h, (n = me(n)).h),
            i = Je(e.s, n.s),
            o = Je(e.l, n.l),
            a = Je(e.opacity, n.opacity);
          return function (t) {
            return (e.h = r(t)), (e.s = i(t)), (e.l = o(t)), (e.opacity = a(t)), e + '';
          };
        };
      }
      function bn(t) {
        return function (e, n) {
          var r = t((e = je(e)).h, (n = je(n)).h),
            i = Je(e.c, n.c),
            o = Je(e.l, n.l),
            a = Je(e.opacity, n.opacity);
          return function (t) {
            return (e.h = r(t)), (e.c = i(t)), (e.l = o(t)), (e.opacity = a(t)), e + '';
          };
        };
      }
      function wn(t) {
        return (function e(n) {
          function r(e, r) {
            var i = t((e = Ke(e)).h, (r = Ke(r)).h),
              o = Je(e.s, r.s),
              a = Je(e.l, r.l),
              u = Je(e.opacity, r.opacity);
            return function (t) {
              return (
                (e.h = i(t)), (e.s = o(t)), (e.l = a(Math.pow(t, n))), (e.opacity = u(t)), e + ''
              );
            };
          }
          return (n = +n), (r.gamma = e), r;
        })(1);
      }
      _n(Ze), _n(Je), bn(Ze), bn(Je), wn(Ze);
      var xn,
        kn,
        Mn = wn(Je),
        En = 0,
        An = 0,
        Sn = 0,
        Ln = 1e3,
        Nn = 0,
        Cn = 0,
        Tn = 0,
        Gn = 'object' == typeof performance && performance.now ? performance : Date,
        Un =
          'object' == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function Dn() {
        return Cn || (Un(On), (Cn = Gn.now() + Tn));
      }
      function On() {
        Cn = 0;
      }
      function jn() {
        this._call = this._time = this._next = null;
      }
      function zn(t, e, n) {
        var r = new jn();
        return r.restart(t, e, n), r;
      }
      function Pn() {
        (Cn = (Nn = Gn.now()) + Tn), (En = An = 0);
        try {
          !(function () {
            Dn(), ++En;
            for (var t, e = xn; e; )
              (t = Cn - e._time) >= 0 && e._call.call(null, t), (e = e._next);
            --En;
          })();
        } finally {
          (En = 0),
            (function () {
              for (var t, e, n = xn, r = 1 / 0; n; )
                n._call
                  ? (r > n._time && (r = n._time), (t = n), (n = n._next))
                  : ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (xn = e)));
              (kn = t), Rn(r);
            })(),
            (Cn = 0);
        }
      }
      function In() {
        var t = Gn.now(),
          e = t - Nn;
        e > Ln && ((Tn -= e), (Nn = t));
      }
      function Rn(t) {
        En ||
          (An && (An = clearTimeout(An)),
          t - Cn > 24
            ? (t < 1 / 0 && (An = setTimeout(Pn, t - Gn.now() - Tn)),
              Sn && (Sn = clearInterval(Sn)))
            : (Sn || ((Nn = Gn.now()), (Sn = setInterval(In, Ln))), (En = 1), Un(Pn)));
      }
      function Fn(t, e, n) {
        var r = new jn();
        return (
          (e = null == e ? 0 : +e),
          r.restart(
            function (n) {
              r.stop(), t(n + e);
            },
            e,
            n,
          ),
          r
        );
      }
      jn.prototype = zn.prototype = {
        constructor: jn,
        restart: function (t, e, n) {
          if ('function' != typeof t) throw new TypeError('callback is not a function');
          (n = (null == n ? Dn() : +n) + (null == e ? 0 : +e)),
            this._next || kn === this || (kn ? (kn._next = this) : (xn = this), (kn = this)),
            (this._call = t),
            (this._time = n),
            Rn();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), Rn());
        },
      };
      var qn = v('start', 'end', 'interrupt'),
        Bn = [],
        Yn = 0,
        Wn = 2;
      function Kn(t, e, n, r, i, o) {
        var a = t.__transition;
        if (a) {
          if (n in a) return;
        } else t.__transition = {};
        !(function (t, e, n) {
          var r,
            i = t.__transition;
          function o(c) {
            var s, h, f, l;
            if (1 !== n.state) return u();
            for (s in i)
              if ((l = i[s]).name === n.name) {
                if (3 === l.state) return Fn(o);
                4 === l.state
                  ? ((l.state = 6),
                    l.timer.stop(),
                    l.on.call('interrupt', t, t.__data__, l.index, l.group),
                    delete i[s])
                  : +s < e && ((l.state = 6), l.timer.stop(), delete i[s]);
              }
            if (
              (Fn(function () {
                3 === n.state && ((n.state = 4), n.timer.restart(a, n.delay, n.time), a(c));
              }),
              (n.state = Wn),
              n.on.call('start', t, t.__data__, n.index, n.group),
              n.state === Wn)
            ) {
              for (n.state = 3, r = new Array((f = n.tween.length)), s = 0, h = -1; s < f; ++s)
                (l = n.tween[s].value.call(t, t.__data__, n.index, n.group)) && (r[++h] = l);
              r.length = h + 1;
            }
          }
          function a(e) {
            for (
              var i =
                  e < n.duration
                    ? n.ease.call(null, e / n.duration)
                    : (n.timer.restart(u), (n.state = 5), 1),
                o = -1,
                a = r.length;
              ++o < a;

            )
              r[o].call(null, i);
            5 === n.state && (n.on.call('end', t, t.__data__, n.index, n.group), u());
          }
          function u() {
            for (var r in ((n.state = 6), n.timer.stop(), delete i[e], i)) return;
            delete t.__transition;
          }
          (i[e] = n),
            (n.timer = zn(
              function (t) {
                (n.state = 1), n.timer.restart(o, n.delay, n.time), n.delay <= t && o(t - n.delay);
              },
              0,
              n.time,
            ));
        })(t, n, {
          name: e,
          index: r,
          group: i,
          on: qn,
          tween: Bn,
          time: o.time,
          delay: o.delay,
          duration: o.duration,
          ease: o.ease,
          timer: null,
          state: Yn,
        });
      }
      function Hn(t, e) {
        var n = $n(t, e);
        if (n.state > Yn) throw new Error('too late; already scheduled');
        return n;
      }
      function Xn(t, e) {
        var n = $n(t, e);
        if (n.state > Wn) throw new Error('too late; already started');
        return n;
      }
      function $n(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e])) throw new Error('transition not found');
        return n;
      }
      function Vn(t, e) {
        var n,
          r,
          i,
          o = t.__transition,
          a = !0;
        if (o) {
          for (i in ((e = null == e ? null : e + ''), o))
            (n = o[i]).name === e
              ? ((r = n.state > Wn && n.state < 5),
                (n.state = 6),
                n.timer.stop(),
                r && n.on.call('interrupt', t, t.__data__, n.index, n.group),
                delete o[i])
              : (a = !1);
          a && delete t.__transition;
        }
      }
      function Zn(t, e) {
        var n, r;
        return function () {
          var i = Xn(this, t),
            o = i.tween;
          if (o !== n)
            for (var a = 0, u = (r = n = o).length; a < u; ++a)
              if (r[a].name === e) {
                (r = r.slice()).splice(a, 1);
                break;
              }
          i.tween = r;
        };
      }
      function Jn(t, e, n) {
        var r, i;
        if ('function' != typeof n) throw new Error();
        return function () {
          var o = Xn(this, t),
            a = o.tween;
          if (a !== r) {
            i = (r = a).slice();
            for (var u = { name: e, value: n }, c = 0, s = i.length; c < s; ++c)
              if (i[c].name === e) {
                i[c] = u;
                break;
              }
            c === s && i.push(u);
          }
          o.tween = i;
        };
      }
      function Qn(t, e, n) {
        var r = t._id;
        return (
          t.each(function () {
            var t = Xn(this, r);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments);
          }),
          function (t) {
            return $n(t, r).value[e];
          }
        );
      }
      function tr(t, e) {
        var n;
        return (
          'number' == typeof e ? en : e instanceof fe ? Qe : (n = fe(e)) ? ((e = n), Qe) : on
        )(t, e);
      }
      function er(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function nr(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function rr(t, e, n) {
        var r, i;
        return function () {
          var o = this.getAttribute(t);
          return o === n ? null : o === r ? i : (i = e((r = o), n));
        };
      }
      function ir(t, e, n) {
        var r, i;
        return function () {
          var o = this.getAttributeNS(t.space, t.local);
          return o === n ? null : o === r ? i : (i = e((r = o), n));
        };
      }
      function or(t, e, n) {
        var r, i, o;
        return function () {
          var a,
            u = n(this);
          if (null != u)
            return (a = this.getAttribute(t)) === u
              ? null
              : a === r && u === i
              ? o
              : (o = e((r = a), (i = u)));
          this.removeAttribute(t);
        };
      }
      function ar(t, e, n) {
        var r, i, o;
        return function () {
          var a,
            u = n(this);
          if (null != u)
            return (a = this.getAttributeNS(t.space, t.local)) === u
              ? null
              : a === r && u === i
              ? o
              : (o = e((r = a), (i = u)));
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function ur(t, e) {
        function n() {
          var n = this,
            r = e.apply(n, arguments);
          return (
            r &&
            function (e) {
              n.setAttributeNS(t.space, t.local, r(e));
            }
          );
        }
        return (n._value = e), n;
      }
      function cr(t, e) {
        function n() {
          var n = this,
            r = e.apply(n, arguments);
          return (
            r &&
            function (e) {
              n.setAttribute(t, r(e));
            }
          );
        }
        return (n._value = e), n;
      }
      function sr(t, e) {
        return function () {
          Hn(this, t).delay = +e.apply(this, arguments);
        };
      }
      function hr(t, e) {
        return (
          (e = +e),
          function () {
            Hn(this, t).delay = e;
          }
        );
      }
      function fr(t, e) {
        return function () {
          Xn(this, t).duration = +e.apply(this, arguments);
        };
      }
      function lr(t, e) {
        return (
          (e = +e),
          function () {
            Xn(this, t).duration = e;
          }
        );
      }
      var dr = Ct.prototype.constructor,
        pr = 0;
      function yr(t, e, n, r) {
        (this._groups = t), (this._parents = e), (this._name = n), (this._id = r);
      }
      function gr() {
        return ++pr;
      }
      var vr = Ct.prototype;
      (yr.prototype = function (t) {
        return Ct().transition(t);
      }.prototype =
        {
          constructor: yr,
          select: function (t) {
            var e = this._name,
              n = this._id;
            'function' != typeof t && (t = E(t));
            for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
              for (var u, c, s = r[a], h = s.length, f = (o[a] = new Array(h)), l = 0; l < h; ++l)
                (u = s[l]) &&
                  (c = t.call(u, u.__data__, l, s)) &&
                  ('__data__' in u && (c.__data__ = u.__data__),
                  (f[l] = c),
                  Kn(f[l], e, n, l, f, $n(u, n)));
            return new yr(o, this._parents, e, n);
          },
          selectAll: function (t) {
            var e = this._name,
              n = this._id;
            'function' != typeof t && (t = S(t));
            for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
              for (var c, s = r[u], h = s.length, f = 0; f < h; ++f)
                if ((c = s[f])) {
                  for (
                    var l, d = t.call(c, c.__data__, f, s), p = $n(c, n), y = 0, g = d.length;
                    y < g;
                    ++y
                  )
                    (l = d[y]) && Kn(l, e, n, y, d, p);
                  o.push(d), a.push(c);
                }
            return new yr(o, a, e, n);
          },
          filter: function (t) {
            'function' != typeof t && (t = T(t));
            for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
              for (var o, a = e[i], u = a.length, c = (r[i] = []), s = 0; s < u; ++s)
                (o = a[s]) && t.call(o, o.__data__, s, a) && c.push(o);
            return new yr(r, this._parents, this._name, this._id);
          },
          merge: function (t) {
            if (t._id !== this._id) throw new Error();
            for (
              var e = this._groups,
                n = t._groups,
                r = e.length,
                i = n.length,
                o = Math.min(r, i),
                a = new Array(r),
                u = 0;
              u < o;
              ++u
            )
              for (
                var c, s = e[u], h = n[u], f = s.length, l = (a[u] = new Array(f)), d = 0;
                d < f;
                ++d
              )
                (c = s[d] || h[d]) && (l[d] = c);
            for (; u < r; ++u) a[u] = e[u];
            return new yr(a, this._parents, this._name, this._id);
          },
          selection: function () {
            return new dr(this._groups, this._parents);
          },
          transition: function () {
            for (
              var t = this._name, e = this._id, n = gr(), r = this._groups, i = r.length, o = 0;
              o < i;
              ++o
            )
              for (var a, u = r[o], c = u.length, s = 0; s < c; ++s)
                if ((a = u[s])) {
                  var h = $n(a, e);
                  Kn(a, t, n, s, u, {
                    time: h.time + h.delay + h.duration,
                    delay: 0,
                    duration: h.duration,
                    ease: h.ease,
                  });
                }
            return new yr(r, this._parents, t, n);
          },
          call: vr.call,
          nodes: vr.nodes,
          node: vr.node,
          size: vr.size,
          empty: vr.empty,
          each: vr.each,
          on: function (t, e) {
            var n = this._id;
            return arguments.length < 2
              ? $n(this.node(), n).on.on(t)
              : this.each(
                  (function (t, e, n) {
                    var r,
                      i,
                      o = (function (t) {
                        return (t + '')
                          .trim()
                          .split(/^|\s+/)
                          .every(function (t) {
                            var e = t.indexOf('.');
                            return e >= 0 && (t = t.slice(0, e)), !t || 'start' === t;
                          });
                      })(e)
                        ? Hn
                        : Xn;
                    return function () {
                      var a = o(this, t),
                        u = a.on;
                      u !== r && (i = (r = u).copy()).on(e, n), (a.on = i);
                    };
                  })(n, t, e),
                );
          },
          attr: function (t, e) {
            var n = b(t),
              r = 'transform' === n ? yn : tr;
            return this.attrTween(
              t,
              'function' == typeof e
                ? (n.local ? ar : or)(n, r, Qn(this, 'attr.' + t, e))
                : null == e
                ? (n.local ? nr : er)(n)
                : (n.local ? ir : rr)(n, r, e + ''),
            );
          },
          attrTween: function (t, e) {
            var n = 'attr.' + t;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == e) return this.tween(n, null);
            if ('function' != typeof e) throw new Error();
            var r = b(t);
            return this.tween(n, (r.local ? ur : cr)(r, e));
          },
          style: function (t, e, n) {
            var r = 'transform' == (t += '') ? pn : tr;
            return null == e
              ? this.styleTween(
                  t,
                  (function (t, e) {
                    var n, r, i;
                    return function () {
                      var o = H(this, t),
                        a = (this.style.removeProperty(t), H(this, t));
                      return o === a ? null : o === n && a === r ? i : (i = e((n = o), (r = a)));
                    };
                  })(t, r),
                ).on(
                  'end.style.' + t,
                  (function (t) {
                    return function () {
                      this.style.removeProperty(t);
                    };
                  })(t),
                )
              : this.styleTween(
                  t,
                  'function' == typeof e
                    ? (function (t, e, n) {
                        var r, i, o;
                        return function () {
                          var a = H(this, t),
                            u = n(this);
                          return (
                            null == u && (this.style.removeProperty(t), (u = H(this, t))),
                            a === u ? null : a === r && u === i ? o : (o = e((r = a), (i = u)))
                          );
                        };
                      })(t, r, Qn(this, 'style.' + t, e))
                    : (function (t, e, n) {
                        var r, i;
                        return function () {
                          var o = H(this, t);
                          return o === n ? null : o === r ? i : (i = e((r = o), n));
                        };
                      })(t, r, e + ''),
                  n,
                );
          },
          styleTween: function (t, e, n) {
            var r = 'style.' + (t += '');
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == e) return this.tween(r, null);
            if ('function' != typeof e) throw new Error();
            return this.tween(
              r,
              (function (t, e, n) {
                function r() {
                  var r = this,
                    i = e.apply(r, arguments);
                  return (
                    i &&
                    function (e) {
                      r.style.setProperty(t, i(e), n);
                    }
                  );
                }
                return (r._value = e), r;
              })(t, e, null == n ? '' : n),
            );
          },
          text: function (t) {
            return this.tween(
              'text',
              'function' == typeof t
                ? (function (t) {
                    return function () {
                      var e = t(this);
                      this.textContent = null == e ? '' : e;
                    };
                  })(Qn(this, 'text', t))
                : (function (t) {
                    return function () {
                      this.textContent = t;
                    };
                  })(null == t ? '' : t + ''),
            );
          },
          remove: function () {
            return this.on(
              'end.remove',
              (function (t) {
                return function () {
                  var e = this.parentNode;
                  for (var n in this.__transition) if (+n !== t) return;
                  e && e.removeChild(this);
                };
              })(this._id),
            );
          },
          tween: function (t, e) {
            var n = this._id;
            if (((t += ''), arguments.length < 2)) {
              for (var r, i = $n(this.node(), n).tween, o = 0, a = i.length; o < a; ++o)
                if ((r = i[o]).name === t) return r.value;
              return null;
            }
            return this.each((null == e ? Zn : Jn)(n, t, e));
          },
          delay: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(('function' == typeof t ? sr : hr)(e, t))
              : $n(this.node(), e).delay;
          },
          duration: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(('function' == typeof t ? fr : lr)(e, t))
              : $n(this.node(), e).duration;
          },
          ease: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(
                  (function (t, e) {
                    if ('function' != typeof e) throw new Error();
                    return function () {
                      Xn(this, t).ease = e;
                    };
                  })(e, t),
                )
              : $n(this.node(), e).ease;
          },
        }),
        (function t(e) {
          function n(t) {
            return Math.pow(t, e);
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        (function t(e) {
          function n(t) {
            return 1 - Math.pow(1 - t, e);
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        (function t(e) {
          function n(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        Math.PI;
      var mr = 1.70158,
        _r =
          ((function t(e) {
            function n(t) {
              return t * t * ((e + 1) * t - e);
            }
            return (e = +e), (n.overshoot = t), n;
          })(mr),
          (function t(e) {
            function n(t) {
              return --t * t * ((e + 1) * t + e) + 1;
            }
            return (e = +e), (n.overshoot = t), n;
          })(mr),
          (function t(e) {
            function n(t) {
              return (
                ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) /
                2
              );
            }
            return (e = +e), (n.overshoot = t), n;
          })(mr),
          2 * Math.PI),
        br =
          ((function t(e, n) {
            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= _r);
            function i(t) {
              return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n);
            }
            return (
              (i.amplitude = function (e) {
                return t(e, n * _r);
              }),
              (i.period = function (n) {
                return t(e, n);
              }),
              i
            );
          })(1, 0.3),
          (function t(e, n) {
            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= _r);
            function i(t) {
              return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n);
            }
            return (
              (i.amplitude = function (e) {
                return t(e, n * _r);
              }),
              (i.period = function (n) {
                return t(e, n);
              }),
              i
            );
          })(1, 0.3),
          (function t(e, n) {
            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= _r);
            function i(t) {
              return (
                ((t = 2 * t - 1) < 0
                  ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n)
                  : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2
              );
            }
            return (
              (i.amplitude = function (e) {
                return t(e, n * _r);
              }),
              (i.period = function (n) {
                return t(e, n);
              }),
              i
            );
          })(1, 0.3),
          {
            time: null,
            delay: 0,
            duration: 250,
            ease: function (t) {
              return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
            },
          });
      function wr(t, e) {
        for (var n; !(n = t.__transition) || !(n = n[e]); )
          if (!(t = t.parentNode)) return (br.time = Dn()), br;
        return n;
      }
      function xr(t) {
        return { type: t };
      }
      function kr(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      (Ct.prototype.interrupt = function (t) {
        return this.each(function () {
          Vn(this, t);
        });
      }),
        (Ct.prototype.transition = function (t) {
          var e, n;
          t instanceof yr
            ? ((e = t._id), (t = t._name))
            : ((e = gr()), ((n = br).time = Dn()), (t = null == t ? null : t + ''));
          for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, u = r[o], c = u.length, s = 0; s < c; ++s)
              (a = u[s]) && Kn(a, t, e, s, u, n || wr(a, e));
          return new yr(r, this._parents, t, e);
        }),
        ['e', 'w'].map(xr),
        ['n', 's'].map(xr),
        ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'].map(xr);
      var Mr = (function (t) {
        return (
          1 === t.length &&
            (t = (function (t) {
              return function (e, n) {
                return kr(t(e), n);
              };
            })(t)),
          {
            left: function (e, n, r, i) {
              for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(e[o], n) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function (e, n, r, i) {
              for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(e[o], n) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      })(kr);
      Mr.right, Mr.left;
      var Er = Array.prototype;
      Er.slice,
        Er.map,
        Math.sqrt(50),
        Math.sqrt(10),
        Math.sqrt(2),
        Math.cos,
        Math.sin,
        Math.PI,
        Math.max,
        Array.prototype.slice;
      var Ar = Math.PI,
        Sr = 2 * Ar,
        Lr = 1e-6,
        Nr = Sr - Lr;
      function Cr() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
      }
      Cr.prototype = function () {
        return new Cr();
      }.prototype = {
        constructor: Cr,
        moveTo: function (t, e) {
          this._ += 'M' + (this._x0 = this._x1 = +t) + ',' + (this._y0 = this._y1 = +e);
        },
        closePath: function () {
          null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
        },
        lineTo: function (t, e) {
          this._ += 'L' + (this._x1 = +t) + ',' + (this._y1 = +e);
        },
        quadraticCurveTo: function (t, e, n, r) {
          this._ += 'Q' + +t + ',' + +e + ',' + (this._x1 = +n) + ',' + (this._y1 = +r);
        },
        bezierCurveTo: function (t, e, n, r, i, o) {
          this._ +=
            'C' +
            +t +
            ',' +
            +e +
            ',' +
            +n +
            ',' +
            +r +
            ',' +
            (this._x1 = +i) +
            ',' +
            (this._y1 = +o);
        },
        arcTo: function (t, e, n, r, i) {
          (t = +t), (e = +e), (n = +n), (r = +r), (i = +i);
          var o = this._x1,
            a = this._y1,
            u = n - t,
            c = r - e,
            s = o - t,
            h = a - e,
            f = s * s + h * h;
          if (i < 0) throw new Error('negative radius: ' + i);
          if (null === this._x1) this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = e);
          else if (f > Lr)
            if (Math.abs(h * u - c * s) > Lr && i) {
              var l = n - o,
                d = r - a,
                p = u * u + c * c,
                y = l * l + d * d,
                g = Math.sqrt(p),
                v = Math.sqrt(f),
                m = i * Math.tan((Ar - Math.acos((p + f - y) / (2 * g * v))) / 2),
                _ = m / v,
                b = m / g;
              Math.abs(_ - 1) > Lr && (this._ += 'L' + (t + _ * s) + ',' + (e + _ * h)),
                (this._ +=
                  'A' +
                  i +
                  ',' +
                  i +
                  ',0,0,' +
                  +(h * l > s * d) +
                  ',' +
                  (this._x1 = t + b * u) +
                  ',' +
                  (this._y1 = e + b * c));
            } else this._ += 'L' + (this._x1 = t) + ',' + (this._y1 = e);
        },
        arc: function (t, e, n, r, i, o) {
          (t = +t), (e = +e);
          var a = (n = +n) * Math.cos(r),
            u = n * Math.sin(r),
            c = t + a,
            s = e + u,
            h = 1 ^ o,
            f = o ? r - i : i - r;
          if (n < 0) throw new Error('negative radius: ' + n);
          null === this._x1
            ? (this._ += 'M' + c + ',' + s)
            : (Math.abs(this._x1 - c) > Lr || Math.abs(this._y1 - s) > Lr) &&
              (this._ += 'L' + c + ',' + s),
            n &&
              (f < 0 && (f = (f % Sr) + Sr),
              f > Nr
                ? (this._ +=
                    'A' +
                    n +
                    ',' +
                    n +
                    ',0,1,' +
                    h +
                    ',' +
                    (t - a) +
                    ',' +
                    (e - u) +
                    'A' +
                    n +
                    ',' +
                    n +
                    ',0,1,' +
                    h +
                    ',' +
                    (this._x1 = c) +
                    ',' +
                    (this._y1 = s))
                : f > Lr &&
                  (this._ +=
                    'A' +
                    n +
                    ',' +
                    n +
                    ',0,' +
                    +(f >= Ar) +
                    ',' +
                    h +
                    ',' +
                    (this._x1 = t + n * Math.cos(i)) +
                    ',' +
                    (this._y1 = e + n * Math.sin(i))));
        },
        rect: function (t, e, n, r) {
          this._ +=
            'M' +
            (this._x0 = this._x1 = +t) +
            ',' +
            (this._y0 = this._y1 = +e) +
            'h' +
            +n +
            'v' +
            +r +
            'h' +
            -n +
            'Z';
        },
        toString: function () {
          return this._;
        },
      };
      var Tr = '$';
      function Gr() {}
      function Ur(t, e) {
        var n = new Gr();
        if (t instanceof Gr)
          t.each(function (t, e) {
            n.set(e, t);
          });
        else if (Array.isArray(t)) {
          var r,
            i = -1,
            o = t.length;
          if (null == e) for (; ++i < o; ) n.set(i, t[i]);
          else for (; ++i < o; ) n.set(e((r = t[i]), i, t), r);
        } else if (t) for (var a in t) n.set(a, t[a]);
        return n;
      }
      Gr.prototype = Ur.prototype = {
        constructor: Gr,
        has: function (t) {
          return Tr + t in this;
        },
        get: function (t) {
          return this[Tr + t];
        },
        set: function (t, e) {
          return (this[Tr + t] = e), this;
        },
        remove: function (t) {
          var e = Tr + t;
          return e in this && delete this[e];
        },
        clear: function () {
          for (var t in this) t[0] === Tr && delete this[t];
        },
        keys: function () {
          var t = [];
          for (var e in this) e[0] === Tr && t.push(e.slice(1));
          return t;
        },
        values: function () {
          var t = [];
          for (var e in this) e[0] === Tr && t.push(this[e]);
          return t;
        },
        entries: function () {
          var t = [];
          for (var e in this) e[0] === Tr && t.push({ key: e.slice(1), value: this[e] });
          return t;
        },
        size: function () {
          var t = 0;
          for (var e in this) e[0] === Tr && ++t;
          return t;
        },
        empty: function () {
          for (var t in this) if (t[0] === Tr) return !1;
          return !0;
        },
        each: function (t) {
          for (var e in this) e[0] === Tr && t(this[e], e.slice(1), this);
        },
      };
      const Dr = Ur;
      function Or() {}
      var jr = Dr.prototype;
      Or.prototype = function (t, e) {
        var n = new Or();
        if (t instanceof Or)
          t.each(function (t) {
            n.add(t);
          });
        else if (t) {
          var r = -1,
            i = t.length;
          if (null == e) for (; ++r < i; ) n.add(t[r]);
          else for (; ++r < i; ) n.add(e(t[r], r, t));
        }
        return n;
      }.prototype = {
        constructor: Or,
        has: jr.has,
        add: function (t) {
          return (this[Tr + (t += '')] = t), this;
        },
        remove: jr.remove,
        clear: jr.clear,
        values: jr.keys,
        size: jr.size,
        empty: jr.empty,
        each: jr.each,
      };
      var zr = {},
        Pr = {};
      function Ir(t) {
        return new Function(
          'd',
          'return {' +
            t
              .map(function (t, e) {
                return JSON.stringify(t) + ': d[' + e + ']';
              })
              .join(',') +
            '}',
        );
      }
      function Rr(t) {
        var e = new RegExp('["' + t + '\n\r]'),
          n = t.charCodeAt(0);
        function r(t, e) {
          var r,
            i = [],
            o = t.length,
            a = 0,
            u = 0,
            c = o <= 0,
            s = !1;
          function h() {
            if (c) return Pr;
            if (s) return (s = !1), zr;
            var e,
              r,
              i = a;
            if (34 === t.charCodeAt(i)) {
              for (; (a++ < o && 34 !== t.charCodeAt(a)) || 34 === t.charCodeAt(++a); );
              return (
                (e = a) >= o
                  ? (c = !0)
                  : 10 === (r = t.charCodeAt(a++))
                  ? (s = !0)
                  : 13 === r && ((s = !0), 10 === t.charCodeAt(a) && ++a),
                t.slice(i + 1, e - 1).replace(/""/g, '"')
              );
            }
            for (; a < o; ) {
              if (10 === (r = t.charCodeAt((e = a++)))) s = !0;
              else if (13 === r) (s = !0), 10 === t.charCodeAt(a) && ++a;
              else if (r !== n) continue;
              return t.slice(i, e);
            }
            return (c = !0), t.slice(i, o);
          }
          for (
            10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o;
            (r = h()) !== Pr;

          ) {
            for (var f = []; r !== zr && r !== Pr; ) f.push(r), (r = h());
            (e && null == (f = e(f, u++))) || i.push(f);
          }
          return i;
        }
        function i(e) {
          return e.map(o).join(t);
        }
        function o(t) {
          return null == t ? '' : e.test((t += '')) ? '"' + t.replace(/"/g, '""') + '"' : t;
        }
        return {
          parse: function (t, e) {
            var n,
              i,
              o = r(t, function (t, r) {
                if (n) return n(t, r - 1);
                (i = t),
                  (n = e
                    ? (function (t, e) {
                        var n = Ir(t);
                        return function (r, i) {
                          return e(n(r), i, t);
                        };
                      })(t, e)
                    : Ir(t));
              });
            return (o.columns = i || []), o;
          },
          parseRows: r,
          format: function (e, n) {
            return (
              null == n &&
                (n = (function (t) {
                  var e = Object.create(null),
                    n = [];
                  return (
                    t.forEach(function (t) {
                      for (var r in t) r in e || n.push((e[r] = r));
                    }),
                    n
                  );
                })(e)),
              [n.map(o).join(t)]
                .concat(
                  e.map(function (e) {
                    return n
                      .map(function (t) {
                        return o(e[t]);
                      })
                      .join(t);
                  }),
                )
                .join('\n')
            );
          },
          formatRows: function (t) {
            return t.map(i).join('\n');
          },
        };
      }
      var Fr = Rr(','),
        qr = Fr.parse,
        Br = (Fr.parseRows, Fr.format, Fr.formatRows, Rr('\t')),
        Yr = Br.parse;
      function Wr(t, e, n, r) {
        if (isNaN(e) || isNaN(n)) return t;
        var i,
          o,
          a,
          u,
          c,
          s,
          h,
          f,
          l,
          d = t._root,
          p = { data: r },
          y = t._x0,
          g = t._y0,
          v = t._x1,
          m = t._y1;
        if (!d) return (t._root = p), t;
        for (; d.length; )
          if (
            ((s = e >= (o = (y + v) / 2)) ? (y = o) : (v = o),
            (h = n >= (a = (g + m) / 2)) ? (g = a) : (m = a),
            (i = d),
            !(d = d[(f = (h << 1) | s)]))
          )
            return (i[f] = p), t;
        if (((u = +t._x.call(null, d.data)), (c = +t._y.call(null, d.data)), e === u && n === c))
          return (p.next = d), i ? (i[f] = p) : (t._root = p), t;
        do {
          (i = i ? (i[f] = new Array(4)) : (t._root = new Array(4))),
            (s = e >= (o = (y + v) / 2)) ? (y = o) : (v = o),
            (h = n >= (a = (g + m) / 2)) ? (g = a) : (m = a);
        } while ((f = (h << 1) | s) == (l = ((c >= a) << 1) | (u >= o)));
        return (i[l] = d), (i[f] = p), t;
      }
      function Kr(t, e, n, r, i) {
        (this.node = t), (this.x0 = e), (this.y0 = n), (this.x1 = r), (this.y1 = i);
      }
      function Hr(t) {
        return t[0];
      }
      function Xr(t) {
        return t[1];
      }
      function $r(t, e, n) {
        var r = new Vr(null == e ? Hr : e, null == n ? Xr : n, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t);
      }
      function Vr(t, e, n, r, i, o) {
        (this._x = t),
          (this._y = e),
          (this._x0 = n),
          (this._y0 = r),
          (this._x1 = i),
          (this._y1 = o),
          (this._root = void 0);
      }
      function Zr(t) {
        for (var e = { data: t.data }, n = e; (t = t.next); ) n = n.next = { data: t.data };
        return e;
      }
      Br.parseRows, Br.format, Br.formatRows;
      var Jr = ($r.prototype = Vr.prototype);
      function Qr(t) {
        return function () {
          return t;
        };
      }
      function ti() {
        return 1e-6 * (Math.random() - 0.5);
      }
      function ei(t) {
        return t.index;
      }
      function ni(t, e) {
        var n = t.get(e);
        if (!n) throw new Error('missing: ' + e);
        return n;
      }
      function ri(t) {
        return t.x;
      }
      function ii(t) {
        return t.y;
      }
      (Jr.copy = function () {
        var t,
          e,
          n = new Vr(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root;
        if (!r) return n;
        if (!r.length) return (n._root = Zr(r)), n;
        for (t = [{ source: r, target: (n._root = new Array(4)) }]; (r = t.pop()); )
          for (var i = 0; i < 4; ++i)
            (e = r.source[i]) &&
              (e.length
                ? t.push({ source: e, target: (r.target[i] = new Array(4)) })
                : (r.target[i] = Zr(e)));
        return n;
      }),
        (Jr.add = function (t) {
          var e = +this._x.call(null, t),
            n = +this._y.call(null, t);
          return Wr(this.cover(e, n), e, n, t);
        }),
        (Jr.addAll = function (t) {
          var e,
            n,
            r,
            i,
            o = t.length,
            a = new Array(o),
            u = new Array(o),
            c = 1 / 0,
            s = 1 / 0,
            h = -1 / 0,
            f = -1 / 0;
          for (n = 0; n < o; ++n)
            isNaN((r = +this._x.call(null, (e = t[n])))) ||
              isNaN((i = +this._y.call(null, e))) ||
              ((a[n] = r),
              (u[n] = i),
              r < c && (c = r),
              r > h && (h = r),
              i < s && (s = i),
              i > f && (f = i));
          for (
            h < c && ((c = this._x0), (h = this._x1)),
              f < s && ((s = this._y0), (f = this._y1)),
              this.cover(c, s).cover(h, f),
              n = 0;
            n < o;
            ++n
          )
            Wr(this, a[n], u[n], t[n]);
          return this;
        }),
        (Jr.cover = function (t, e) {
          if (isNaN((t = +t)) || isNaN((e = +e))) return this;
          var n = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1;
          if (isNaN(n)) (i = (n = Math.floor(t)) + 1), (o = (r = Math.floor(e)) + 1);
          else {
            if (!(n > t || t > i || r > e || e > o)) return this;
            var a,
              u,
              c = i - n,
              s = this._root;
            switch ((u = ((e < (r + o) / 2) << 1) | (t < (n + i) / 2))) {
              case 0:
                do {
                  ((a = new Array(4))[u] = s), (s = a);
                } while (((o = r + (c *= 2)), t > (i = n + c) || e > o));
                break;
              case 1:
                do {
                  ((a = new Array(4))[u] = s), (s = a);
                } while (((o = r + (c *= 2)), (n = i - c) > t || e > o));
                break;
              case 2:
                do {
                  ((a = new Array(4))[u] = s), (s = a);
                } while (((r = o - (c *= 2)), t > (i = n + c) || r > e));
                break;
              case 3:
                do {
                  ((a = new Array(4))[u] = s), (s = a);
                } while (((r = o - (c *= 2)), (n = i - c) > t || r > e));
            }
            this._root && this._root.length && (this._root = s);
          }
          return (this._x0 = n), (this._y0 = r), (this._x1 = i), (this._y1 = o), this;
        }),
        (Jr.data = function () {
          var t = [];
          return (
            this.visit(function (e) {
              if (!e.length)
                do {
                  t.push(e.data);
                } while ((e = e.next));
            }),
            t
          );
        }),
        (Jr.extent = function (t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
            : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
        }),
        (Jr.find = function (t, e, n) {
          var r,
            i,
            o,
            a,
            u,
            c,
            s,
            h = this._x0,
            f = this._y0,
            l = this._x1,
            d = this._y1,
            p = [],
            y = this._root;
          for (
            y && p.push(new Kr(y, h, f, l, d)),
              null == n
                ? (n = 1 / 0)
                : ((h = t - n), (f = e - n), (l = t + n), (d = e + n), (n *= n));
            (c = p.pop());

          )
            if (
              !(
                !(y = c.node) ||
                (i = c.x0) > l ||
                (o = c.y0) > d ||
                (a = c.x1) < h ||
                (u = c.y1) < f
              )
            )
              if (y.length) {
                var g = (i + a) / 2,
                  v = (o + u) / 2;
                p.push(
                  new Kr(y[3], g, v, a, u),
                  new Kr(y[2], i, v, g, u),
                  new Kr(y[1], g, o, a, v),
                  new Kr(y[0], i, o, g, v),
                ),
                  (s = ((e >= v) << 1) | (t >= g)) &&
                    ((c = p[p.length - 1]),
                    (p[p.length - 1] = p[p.length - 1 - s]),
                    (p[p.length - 1 - s] = c));
              } else {
                var m = t - +this._x.call(null, y.data),
                  _ = e - +this._y.call(null, y.data),
                  b = m * m + _ * _;
                if (b < n) {
                  var w = Math.sqrt((n = b));
                  (h = t - w), (f = e - w), (l = t + w), (d = e + w), (r = y.data);
                }
              }
          return r;
        }),
        (Jr.remove = function (t) {
          if (isNaN((o = +this._x.call(null, t))) || isNaN((a = +this._y.call(null, t))))
            return this;
          var e,
            n,
            r,
            i,
            o,
            a,
            u,
            c,
            s,
            h,
            f,
            l,
            d = this._root,
            p = this._x0,
            y = this._y0,
            g = this._x1,
            v = this._y1;
          if (!d) return this;
          if (d.length)
            for (;;) {
              if (
                ((s = o >= (u = (p + g) / 2)) ? (p = u) : (g = u),
                (h = a >= (c = (y + v) / 2)) ? (y = c) : (v = c),
                (e = d),
                !(d = d[(f = (h << 1) | s)]))
              )
                return this;
              if (!d.length) break;
              (e[(f + 1) & 3] || e[(f + 2) & 3] || e[(f + 3) & 3]) && ((n = e), (l = f));
            }
          for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this;
          return (
            (i = d.next) && delete d.next,
            r
              ? (i ? (r.next = i) : delete r.next, this)
              : e
              ? (i ? (e[f] = i) : delete e[f],
                (d = e[0] || e[1] || e[2] || e[3]) &&
                  d === (e[3] || e[2] || e[1] || e[0]) &&
                  !d.length &&
                  (n ? (n[l] = d) : (this._root = d)),
                this)
              : ((this._root = i), this)
          );
        }),
        (Jr.removeAll = function (t) {
          for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
          return this;
        }),
        (Jr.root = function () {
          return this._root;
        }),
        (Jr.size = function () {
          var t = 0;
          return (
            this.visit(function (e) {
              if (!e.length)
                do {
                  ++t;
                } while ((e = e.next));
            }),
            t
          );
        }),
        (Jr.visit = function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            u = [],
            c = this._root;
          for (c && u.push(new Kr(c, this._x0, this._y0, this._x1, this._y1)); (e = u.pop()); )
            if (!t((c = e.node), (r = e.x0), (i = e.y0), (o = e.x1), (a = e.y1)) && c.length) {
              var s = (r + o) / 2,
                h = (i + a) / 2;
              (n = c[3]) && u.push(new Kr(n, s, h, o, a)),
                (n = c[2]) && u.push(new Kr(n, r, h, s, a)),
                (n = c[1]) && u.push(new Kr(n, s, i, o, h)),
                (n = c[0]) && u.push(new Kr(n, r, i, s, h));
            }
          return this;
        }),
        (Jr.visitAfter = function (t) {
          var e,
            n = [],
            r = [];
          for (
            this._root && n.push(new Kr(this._root, this._x0, this._y0, this._x1, this._y1));
            (e = n.pop());

          ) {
            var i = e.node;
            if (i.length) {
              var o,
                a = e.x0,
                u = e.y0,
                c = e.x1,
                s = e.y1,
                h = (a + c) / 2,
                f = (u + s) / 2;
              (o = i[0]) && n.push(new Kr(o, a, u, h, f)),
                (o = i[1]) && n.push(new Kr(o, h, u, c, f)),
                (o = i[2]) && n.push(new Kr(o, a, f, h, s)),
                (o = i[3]) && n.push(new Kr(o, h, f, c, s));
            }
            r.push(e);
          }
          for (; (e = r.pop()); ) t(e.node, e.x0, e.y0, e.x1, e.y1);
          return this;
        }),
        (Jr.x = function (t) {
          return arguments.length ? ((this._x = t), this) : this._x;
        }),
        (Jr.y = function (t) {
          return arguments.length ? ((this._y = t), this) : this._y;
        });
      var oi,
        ai = Math.PI * (3 - Math.sqrt(5));
      function ui(t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf('e')) < 0)
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      function ci(t, e) {
        var n = ui(t, e);
        if (!n) return t + '';
        var r = n[0],
          i = n[1];
        return i < 0
          ? '0.' + new Array(-i).join('0') + r
          : r.length > i + 1
          ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
          : r + new Array(i - r.length + 2).join('0');
      }
      const si = {
        '': function (t, e) {
          t: for (var n, r = (t = t.toPrecision(e)).length, i = 1, o = -1; i < r; ++i)
            switch (t[i]) {
              case '.':
                o = n = i;
                break;
              case '0':
                0 === o && (o = i), (n = i);
                break;
              case 'e':
                break t;
              default:
                o > 0 && (o = 0);
            }
          return o > 0 ? t.slice(0, o) + t.slice(n + 1) : t;
        },
        '%': function (t, e) {
          return (100 * t).toFixed(e);
        },
        b: function (t) {
          return Math.round(t).toString(2);
        },
        c: function (t) {
          return t + '';
        },
        d: function (t) {
          return Math.round(t).toString(10);
        },
        e: function (t, e) {
          return t.toExponential(e);
        },
        f: function (t, e) {
          return t.toFixed(e);
        },
        g: function (t, e) {
          return t.toPrecision(e);
        },
        o: function (t) {
          return Math.round(t).toString(8);
        },
        p: function (t, e) {
          return ci(100 * t, e);
        },
        r: ci,
        s: function (t, e) {
          var n = ui(t, e);
          if (!n) return t + '';
          var r = n[0],
            i = n[1],
            o = i - (oi = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            a = r.length;
          return o === a
            ? r
            : o > a
            ? r + new Array(o - a + 1).join('0')
            : o > 0
            ? r.slice(0, o) + '.' + r.slice(o)
            : '0.' + new Array(1 - o).join('0') + ui(t, Math.max(0, e + o - 1))[0];
        },
        X: function (t) {
          return Math.round(t).toString(16).toUpperCase();
        },
        x: function (t) {
          return Math.round(t).toString(16);
        },
      };
      var hi = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
      function fi(t) {
        return new li(t);
      }
      function li(t) {
        if (!(e = hi.exec(t))) throw new Error('invalid format: ' + t);
        var e,
          n = e[1] || ' ',
          r = e[2] || '>',
          i = e[3] || '-',
          o = e[4] || '',
          a = !!e[5],
          u = e[6] && +e[6],
          c = !!e[7],
          s = e[8] && +e[8].slice(1),
          h = e[9] || '';
        'n' === h ? ((c = !0), (h = 'g')) : si[h] || (h = ''),
          (a || ('0' === n && '=' === r)) && ((a = !0), (n = '0'), (r = '=')),
          (this.fill = n),
          (this.align = r),
          (this.sign = i),
          (this.symbol = o),
          (this.zero = a),
          (this.width = u),
          (this.comma = c),
          (this.precision = s),
          (this.type = h);
      }
      function di(t) {
        return t;
      }
      (fi.prototype = li.prototype),
        (li.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? '0' : '') +
            (null == this.width ? '' : Math.max(1, 0 | this.width)) +
            (this.comma ? ',' : '') +
            (null == this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
            this.type
          );
        });
      var pi,
        yi = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
      function gi() {
        return new vi();
      }
      function vi() {
        this.reset();
      }
      (pi = (function (t) {
        var e,
          n,
          r =
            t.grouping && t.thousands
              ? ((e = t.grouping),
                (n = t.thousands),
                function (t, r) {
                  for (
                    var i = t.length, o = [], a = 0, u = e[0], c = 0;
                    i > 0 &&
                    u > 0 &&
                    (c + u + 1 > r && (u = Math.max(1, r - c)),
                    o.push(t.substring((i -= u), i + u)),
                    !((c += u + 1) > r));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(n);
                })
              : di,
          i = t.currency,
          o = t.decimal,
          a = t.numerals
            ? (function (t) {
                return function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return t[+e];
                  });
                };
              })(t.numerals)
            : di,
          u = t.percent || '%';
        function c(t) {
          var e = (t = fi(t)).fill,
            n = t.align,
            c = t.sign,
            s = t.symbol,
            h = t.zero,
            f = t.width,
            l = t.comma,
            d = t.precision,
            p = t.type,
            y = '$' === s ? i[0] : '#' === s && /[boxX]/.test(p) ? '0' + p.toLowerCase() : '',
            g = '$' === s ? i[1] : /[%p]/.test(p) ? u : '',
            v = si[p],
            m = !p || /[defgprs%]/.test(p);
          function _(t) {
            var i,
              u,
              s,
              _ = y,
              b = g;
            if ('c' === p) (b = v(t) + b), (t = '');
            else {
              var w = (t = +t) < 0;
              if (
                ((t = v(Math.abs(t), d)),
                w && 0 == +t && (w = !1),
                (_ = (w ? ('(' === c ? c : '-') : '-' === c || '(' === c ? '' : c) + _),
                (b = ('s' === p ? yi[8 + oi / 3] : '') + b + (w && '(' === c ? ')' : '')),
                m)
              )
                for (i = -1, u = t.length; ++i < u; )
                  if (48 > (s = t.charCodeAt(i)) || s > 57) {
                    (b = (46 === s ? o + t.slice(i + 1) : t.slice(i)) + b), (t = t.slice(0, i));
                    break;
                  }
            }
            l && !h && (t = r(t, 1 / 0));
            var x = _.length + t.length + b.length,
              k = x < f ? new Array(f - x + 1).join(e) : '';
            switch ((l && h && ((t = r(k + t, k.length ? f - b.length : 1 / 0)), (k = '')), n)) {
              case '<':
                t = _ + t + b + k;
                break;
              case '=':
                t = _ + k + t + b;
                break;
              case '^':
                t = k.slice(0, (x = k.length >> 1)) + _ + t + b + k.slice(x);
                break;
              default:
                t = k + _ + t + b;
            }
            return a(t);
          }
          return (
            (d =
              null == d
                ? p
                  ? 6
                  : 12
                : /[gprs]/.test(p)
                ? Math.max(1, Math.min(21, d))
                : Math.max(0, Math.min(20, d))),
            (_.toString = function () {
              return t + '';
            }),
            _
          );
        }
        return {
          format: c,
          formatPrefix: function (t, e) {
            var n,
              r = c((((t = fi(t)).type = 'f'), t)),
              i =
                3 *
                Math.max(
                  -8,
                  Math.min(8, Math.floor(((n = e), ((n = ui(Math.abs(n))) ? n[1] : NaN) / 3))),
                ),
              o = Math.pow(10, -i),
              a = yi[8 + i / 3];
            return function (t) {
              return r(o * t) + a;
            };
          },
        };
      })({ decimal: '.', thousands: ',', grouping: [3], currency: ['$', ''] })),
        pi.format,
        pi.formatPrefix,
        (vi.prototype = {
          constructor: vi,
          reset: function () {
            this.s = this.t = 0;
          },
          add: function (t) {
            _i(mi, t, this.t), _i(this, mi.s, this.s), this.s ? (this.t += mi.t) : (this.s = mi.t);
          },
          valueOf: function () {
            return this.s;
          },
        });
      var mi = new vi();
      function _i(t, e, n) {
        var r = (t.s = e + n),
          i = r - e,
          o = r - i;
        t.t = e - o + (n - i);
      }
      var bi = Math.PI,
        wi = bi / 2,
        xi = 2 * bi,
        ki = bi / 180,
        Mi = (Math.abs, Math.atan),
        Ei = Math.atan2,
        Ai = Math.cos,
        Si = (Math.ceil, Math.exp, Math.floor, Math.log, Math.pow, Math.sin),
        Li = (Math.sign, Math.sqrt);
      Math.tan;
      function Ni(t) {
        return t > 1 ? wi : t < -1 ? -wi : Math.asin(t);
      }
      function Ci(t, e) {
        return [t > bi ? t - xi : t < -bi ? t + xi : t, e];
      }
      gi(), gi(), gi(), (Ci.invert = Ci);
      gi();
      function Ti(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      var Gi = (function (t) {
        return (
          1 === t.length &&
            (t = (function (t) {
              return function (e, n) {
                return Ti(t(e), n);
              };
            })(t)),
          {
            left: function (e, n, r, i) {
              for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(e[o], n) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function (e, n, r, i) {
              for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(e[o], n) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      })(Ti);
      Gi.right, Gi.left;
      var Ui = Array.prototype;
      function Di() {}
      function Oi(t) {
        return function (e, n) {
          var r = Ai(e),
            i = Ai(n),
            o = t(r * i);
          return [o * i * Si(e), o * Si(n)];
        };
      }
      function ji(t) {
        return function (e, n) {
          var r = Li(e * e + n * n),
            i = t(r),
            o = Si(i),
            a = Ai(i);
          return [Ei(e * o, r * a), Ni(r && (n * o) / r)];
        };
      }
      function zi(t, e) {
        return [t, e];
      }
      function Pi(t) {
        var e = 0,
          n = t.children,
          r = n && n.length;
        if (r) for (; --r >= 0; ) e += n[r].value;
        else e = 1;
        t.value = e;
      }
      function Ii(t, e) {
        var n,
          r,
          i,
          o,
          a,
          u = new Bi(t),
          c = +t.value && (u.value = t.value),
          s = [u];
        for (null == e && (e = Ri); (n = s.pop()); )
          if ((c && (n.value = +n.data.value), (i = e(n.data)) && (a = i.length)))
            for (n.children = new Array(a), o = a - 1; o >= 0; --o)
              s.push((r = n.children[o] = new Bi(i[o]))), (r.parent = n), (r.depth = n.depth + 1);
        return u.eachBefore(qi);
      }
      function Ri(t) {
        return t.children;
      }
      function Fi(t) {
        t.data = t.data.data;
      }
      function qi(t) {
        var e = 0;
        do {
          t.height = e;
        } while ((t = t.parent) && t.height < ++e);
      }
      function Bi(t) {
        (this.data = t), (this.depth = this.height = 0), (this.parent = null);
      }
      function Yi(t, e, n, r, i) {
        for (
          var o, a = t.children, u = -1, c = a.length, s = t.value && (r - e) / t.value;
          ++u < c;

        )
          ((o = a[u]).y0 = n), (o.y1 = i), (o.x0 = e), (o.x1 = e += o.value * s);
      }
      function Wi(t, e, n, r, i) {
        for (
          var o, a = t.children, u = -1, c = a.length, s = t.value && (i - n) / t.value;
          ++u < c;

        )
          ((o = a[u]).x0 = e), (o.x1 = r), (o.y0 = n), (o.y1 = n += o.value * s);
      }
      Ui.slice,
        Ui.map,
        Math.sqrt(50),
        Math.sqrt(10),
        Math.sqrt(2),
        gi(),
        gi(),
        gi(),
        gi(),
        (Di.prototype = {
          constructor: Di,
          point: function (t, e) {
            this.stream.point(t, e);
          },
          sphere: function () {
            this.stream.sphere();
          },
          lineStart: function () {
            this.stream.lineStart();
          },
          lineEnd: function () {
            this.stream.lineEnd();
          },
          polygonStart: function () {
            this.stream.polygonStart();
          },
          polygonEnd: function () {
            this.stream.polygonEnd();
          },
        }),
        Ai(30 * ki),
        (Oi(function (t) {
          return Li(2 / (1 + t));
        }).invert = ji(function (t) {
          return 2 * Ni(t / 2);
        })),
        (Oi(function (t) {
          return (t = (e = t) > 1 ? 0 : e < -1 ? bi : Math.acos(e)) && t / Si(t);
          var e;
        }).invert = ji(function (t) {
          return t;
        })),
        (zi.invert = zi),
        ji(Mi),
        ji(Ni),
        ji(function (t) {
          return 2 * Mi(t);
        }),
        (Bi.prototype = Ii.prototype =
          {
            constructor: Bi,
            count: function () {
              return this.eachAfter(Pi);
            },
            each: function (t) {
              var e,
                n,
                r,
                i,
                o = this,
                a = [o];
              do {
                for (e = a.reverse(), a = []; (o = e.pop()); )
                  if ((t(o), (n = o.children))) for (r = 0, i = n.length; r < i; ++r) a.push(n[r]);
              } while (a.length);
              return this;
            },
            eachAfter: function (t) {
              for (var e, n, r, i = this, o = [i], a = []; (i = o.pop()); )
                if ((a.push(i), (e = i.children)))
                  for (n = 0, r = e.length; n < r; ++n) o.push(e[n]);
              for (; (i = a.pop()); ) t(i);
              return this;
            },
            eachBefore: function (t) {
              for (var e, n, r = this, i = [r]; (r = i.pop()); )
                if ((t(r), (e = r.children))) for (n = e.length - 1; n >= 0; --n) i.push(e[n]);
              return this;
            },
            sum: function (t) {
              return this.eachAfter(function (e) {
                for (var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0; )
                  n += r[i].value;
                e.value = n;
              });
            },
            sort: function (t) {
              return this.eachBefore(function (e) {
                e.children && e.children.sort(t);
              });
            },
            path: function (t) {
              for (
                var e = this,
                  n = (function (t, e) {
                    if (t === e) return t;
                    var n = t.ancestors(),
                      r = e.ancestors(),
                      i = null;
                    for (t = n.pop(), e = r.pop(); t === e; ) (i = t), (t = n.pop()), (e = r.pop());
                    return i;
                  })(e, t),
                  r = [e];
                e !== n;

              )
                (e = e.parent), r.push(e);
              for (var i = r.length; t !== n; ) r.splice(i, 0, t), (t = t.parent);
              return r;
            },
            ancestors: function () {
              for (var t = this, e = [t]; (t = t.parent); ) e.push(t);
              return e;
            },
            descendants: function () {
              var t = [];
              return (
                this.each(function (e) {
                  t.push(e);
                }),
                t
              );
            },
            leaves: function () {
              var t = [];
              return (
                this.eachBefore(function (e) {
                  e.children || t.push(e);
                }),
                t
              );
            },
            links: function () {
              var t = this,
                e = [];
              return (
                t.each(function (n) {
                  n !== t && e.push({ source: n.parent, target: n });
                }),
                e
              );
            },
            copy: function () {
              return Ii(this).eachBefore(Fi);
            },
          }),
        Array.prototype.slice,
        Object.create(Bi.prototype);
      var Ki = (1 + Math.sqrt(5)) / 2;
      function Hi(t, e, n, r, i, o) {
        for (
          var a,
            u,
            c,
            s,
            h,
            f,
            l,
            d,
            p,
            y,
            g,
            v = [],
            m = e.children,
            _ = 0,
            b = 0,
            w = m.length,
            x = e.value;
          _ < w;

        ) {
          (c = i - n), (s = o - r);
          do {
            h = m[b++].value;
          } while (!h && b < w);
          for (
            f = l = h,
              g = h * h * (y = Math.max(s / c, c / s) / (x * t)),
              p = Math.max(l / g, g / f);
            b < w;
            ++b
          ) {
            if (
              ((h += u = m[b].value),
              u < f && (f = u),
              u > l && (l = u),
              (g = h * h * y),
              (d = Math.max(l / g, g / f)) > p)
            ) {
              h -= u;
              break;
            }
            p = d;
          }
          v.push((a = { value: h, dice: c < s, children: m.slice(_, b) })),
            a.dice
              ? Yi(a, n, r, i, x ? (r += (s * h) / x) : o)
              : Wi(a, n, r, x ? (n += (c * h) / x) : i, o),
            (x -= h),
            (_ = b);
        }
        return v;
      }
      !(function t(e) {
        function n(t, n, r, i, o) {
          Hi(e, t, n, r, i, o);
        }
        return (
          (n.ratio = function (e) {
            return t((e = +e) > 1 ? e : 1);
          }),
          n
        );
      })(Ki),
        (function t(e) {
          function n(t, n, r, i, o) {
            if ((a = t._squarify) && a.ratio === e)
              for (var a, u, c, s, h, f = -1, l = a.length, d = t.value; ++f < l; ) {
                for (c = (u = a[f]).children, s = u.value = 0, h = c.length; s < h; ++s)
                  u.value += c[s].value;
                u.dice
                  ? Yi(u, n, r, i, (r += ((o - r) * u.value) / d))
                  : Wi(u, n, r, (n += ((i - n) * u.value) / d), o),
                  (d -= u.value);
              }
            else (t._squarify = a = Hi(e, t, n, r, i, o)), (a.ratio = e);
          }
          return (
            (n.ratio = function (e) {
              return t((e = +e) > 1 ? e : 1);
            }),
            n
          );
        })(Ki);
      var Xi = [].slice,
        $i = {};
      function Vi(t) {
        (this._size = t),
          (this._call = this._error = null),
          (this._tasks = []),
          (this._data = []),
          (this._waiting = this._active = this._ended = this._start = 0);
      }
      function Zi(t) {
        if (!t._start)
          try {
            !(function (t) {
              for (; (t._start = t._waiting && t._active < t._size); ) {
                var e = t._ended + t._active,
                  n = t._tasks[e],
                  r = n.length - 1,
                  i = n[r];
                (n[r] = Ji(t, e)),
                  --t._waiting,
                  ++t._active,
                  (n = i.apply(null, n)),
                  t._tasks[e] && (t._tasks[e] = n || $i);
              }
            })(t);
          } catch (e) {
            if (t._tasks[t._ended + t._active - 1]) Qi(t, e);
            else if (!t._data) throw e;
          }
      }
      function Ji(t, e) {
        return function (n, r) {
          t._tasks[e] &&
            (--t._active,
            ++t._ended,
            (t._tasks[e] = null),
            null == t._error &&
              (null != n ? Qi(t, n) : ((t._data[e] = r), t._waiting ? Zi(t) : to(t))));
        };
      }
      function Qi(t, e) {
        var n,
          r = t._tasks.length;
        for (t._error = e, t._data = void 0, t._waiting = NaN; --r >= 0; )
          if ((n = t._tasks[r]) && ((t._tasks[r] = null), n.abort))
            try {
              n.abort();
            } catch (e) {}
        (t._active = NaN), to(t);
      }
      function to(t) {
        if (!t._active && t._call) {
          var e = t._data;
          (t._data = void 0), t._call(t._error, e);
        }
      }
      function eo() {
        return Math.random();
      }
      (Vi.prototype = function (t) {
        if (null == t) t = 1 / 0;
        else if (!((t = +t) >= 1)) throw new Error('invalid concurrency');
        return new Vi(t);
      }.prototype =
        {
          constructor: Vi,
          defer: function (t) {
            if ('function' != typeof t) throw new Error('invalid callback');
            if (this._call) throw new Error('defer after await');
            if (null != this._error) return this;
            var e = Xi.call(arguments, 1);
            return e.push(t), ++this._waiting, this._tasks.push(e), Zi(this), this;
          },
          abort: function () {
            return null == this._error && Qi(this, new Error('abort')), this;
          },
          await: function (t) {
            if ('function' != typeof t) throw new Error('invalid callback');
            if (this._call) throw new Error('multiple await');
            return (
              (this._call = function (e, n) {
                t.apply(null, [e].concat(n));
              }),
              to(this),
              this
            );
          },
          awaitAll: function (t) {
            if ('function' != typeof t) throw new Error('invalid callback');
            if (this._call) throw new Error('multiple await');
            return (this._call = t), to(this), this;
          },
        }),
        (function t(e) {
          function n(t, n) {
            return (
              (t = null == t ? 0 : +t),
              (n = null == n ? 1 : +n),
              1 === arguments.length ? ((n = t), (t = 0)) : (n -= t),
              function () {
                return e() * n + t;
              }
            );
          }
          return (n.source = t), n;
        })(eo);
      const no = (function t(e) {
          function n(t, n) {
            var r, i;
            return (
              (t = null == t ? 0 : +t),
              (n = null == n ? 1 : +n),
              function () {
                var o;
                if (null != r) (o = r), (r = null);
                else
                  do {
                    (r = 2 * e() - 1), (o = 2 * e() - 1), (i = r * r + o * o);
                  } while (!i || i > 1);
                return t + n * o * Math.sqrt((-2 * Math.log(i)) / i);
              }
            );
          }
          return (n.source = t), n;
        })(eo),
        ro =
          ((function t(e) {
            function n() {
              var t = no.source(e).apply(this, arguments);
              return function () {
                return Math.exp(t());
              };
            }
            return (n.source = t), n;
          })(eo),
          (function t(e) {
            function n(t) {
              return function () {
                for (var n = 0, r = 0; r < t; ++r) n += e();
                return n;
              };
            }
            return (n.source = t), n;
          })(eo));
      function io(t, e) {
        var n,
          r,
          i,
          o,
          a = v('beforesend', 'progress', 'load', 'error'),
          u = Dr(),
          c = new XMLHttpRequest(),
          s = null,
          h = null,
          f = 0;
        function l(t) {
          var e,
            r = c.status;
          if (
            (!r &&
              (function (t) {
                var e = t.responseType;
                return e && 'text' !== e ? t.response : t.responseText;
              })(c)) ||
            (r >= 200 && r < 300) ||
            304 === r
          ) {
            if (i)
              try {
                e = i.call(n, c);
              } catch (t) {
                return void a.call('error', n, t);
              }
            else e = c;
            a.call('load', n, e);
          } else a.call('error', n, t);
        }
        if (
          ('undefined' != typeof XDomainRequest &&
            !('withCredentials' in c) &&
            /^(http(s)?:)?\/\//.test(t) &&
            (c = new XDomainRequest()),
          'onload' in c
            ? (c.onload = c.onerror = c.ontimeout = l)
            : (c.onreadystatechange = function (t) {
                c.readyState > 3 && l(t);
              }),
          (c.onprogress = function (t) {
            a.call('progress', n, t);
          }),
          (n = {
            header: function (t, e) {
              return (
                (t = (t + '').toLowerCase()),
                arguments.length < 2 ? u.get(t) : (null == e ? u.remove(t) : u.set(t, e + ''), n)
              );
            },
            mimeType: function (t) {
              return arguments.length ? ((r = null == t ? null : t + ''), n) : r;
            },
            responseType: function (t) {
              return arguments.length ? ((o = t), n) : o;
            },
            timeout: function (t) {
              return arguments.length ? ((f = +t), n) : f;
            },
            user: function (t) {
              return arguments.length < 1 ? s : ((s = null == t ? null : t + ''), n);
            },
            password: function (t) {
              return arguments.length < 1 ? h : ((h = null == t ? null : t + ''), n);
            },
            response: function (t) {
              return (i = t), n;
            },
            get: function (t, e) {
              return n.send('GET', t, e);
            },
            post: function (t, e) {
              return n.send('POST', t, e);
            },
            send: function (e, i, l) {
              return (
                c.open(e, t, !0, s, h),
                null == r || u.has('accept') || u.set('accept', r + ',*/*'),
                c.setRequestHeader &&
                  u.each(function (t, e) {
                    c.setRequestHeader(e, t);
                  }),
                null != r && c.overrideMimeType && c.overrideMimeType(r),
                null != o && (c.responseType = o),
                f > 0 && (c.timeout = f),
                null == l && 'function' == typeof i && ((l = i), (i = null)),
                null != l &&
                  1 === l.length &&
                  (l = (function (t) {
                    return function (e, n) {
                      t(null == e ? n : null);
                    };
                  })(l)),
                null != l &&
                  n.on('error', l).on('load', function (t) {
                    l(null, t);
                  }),
                a.call('beforesend', n, c),
                c.send(null == i ? null : i),
                n
              );
            },
            abort: function () {
              return c.abort(), n;
            },
            on: function () {
              var t = a.on.apply(a, arguments);
              return t === a ? n : t;
            },
          }),
          null != e)
        ) {
          if ('function' != typeof e) throw new Error('invalid callback: ' + e);
          return n.get(e);
        }
        return n;
      }
      function oo(t, e) {
        return function (n, r) {
          var i = io(n).mimeType(t).response(e);
          if (null != r) {
            if ('function' != typeof r) throw new Error('invalid callback: ' + r);
            return i.get(r);
          }
          return i;
        };
      }
      function ao(t, e) {
        return function (n, r, i) {
          arguments.length < 3 && ((i = r), (r = null));
          var o = io(n).mimeType(t);
          return (
            (o.row = function (t) {
              return arguments.length
                ? o.response(
                    (function (t, e) {
                      return function (n) {
                        return t(n.responseText, e);
                      };
                    })(e, (r = t)),
                  )
                : r;
            }),
            o.row(r),
            i ? o.get(i) : o
          );
        };
      }
      (function t(e) {
        function n(t) {
          var n = ro.source(e)(t);
          return function () {
            return n() / t;
          };
        }
        return (n.source = t), n;
      })(eo),
        (function t(e) {
          function n(t) {
            return function () {
              return -Math.log(1 - e()) / t;
            };
          }
          return (n.source = t), n;
        })(eo),
        oo('text/html', function (t) {
          return document.createRange().createContextualFragment(t.responseText);
        }),
        oo('application/json', function (t) {
          return JSON.parse(t.responseText);
        }),
        oo('text/plain', function (t) {
          return t.responseText;
        }),
        oo('application/xml', function (t) {
          var e = t.responseXML;
          if (!e) throw new Error('parse error');
          return e;
        }),
        ao('text/csv', qr),
        ao('text/tab-separated-values', Yr);
      var uo = Array.prototype;
      uo.map, uo.slice;
      var co = new Date(),
        so = new Date();
      function ho(t, e, n, r) {
        function i(e) {
          return t((e = new Date(+e))), e;
        }
        return (
          (i.floor = i),
          (i.ceil = function (n) {
            return t((n = new Date(n - 1))), e(n, 1), t(n), n;
          }),
          (i.round = function (t) {
            var e = i(t),
              n = i.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (i.offset = function (t, n) {
            return e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t;
          }),
          (i.range = function (n, r, o) {
            var a,
              u = [];
            if (((n = i.ceil(n)), (o = null == o ? 1 : Math.floor(o)), !(n < r && o > 0))) return u;
            do {
              u.push((a = new Date(+n))), e(n, o), t(n);
            } while (a < n && n < r);
            return u;
          }),
          (i.filter = function (n) {
            return ho(
              function (e) {
                if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
              },
              function (t, r) {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; e(t, -1), !n(t); );
                  else for (; --r >= 0; ) for (; e(t, 1), !n(t); );
              },
            );
          }),
          n &&
            ((i.count = function (e, r) {
              return co.setTime(+e), so.setTime(+r), t(co), t(so), Math.floor(n(co, so));
            }),
            (i.every = function (t) {
              return (
                (t = Math.floor(t)),
                isFinite(t) && t > 0
                  ? t > 1
                    ? i.filter(
                        r
                          ? function (e) {
                              return r(e) % t == 0;
                            }
                          : function (e) {
                              return i.count(0, e) % t == 0;
                            },
                      )
                    : i
                  : null
              );
            })),
          i
        );
      }
      var fo = ho(
        function () {},
        function (t, e) {
          t.setTime(+t + e);
        },
        function (t, e) {
          return e - t;
        },
      );
      (fo.every = function (t) {
        return (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? ho(
                  function (e) {
                    e.setTime(Math.floor(e / t) * t);
                  },
                  function (e, n) {
                    e.setTime(+e + n * t);
                  },
                  function (e, n) {
                    return (n - e) / t;
                  },
                )
              : fo
            : null
        );
      }),
        fo.range;
      var lo = 1e3,
        po = 6e4,
        yo = 36e5,
        go = 864e5,
        vo = 6048e5,
        mo = ho(
          function (t) {
            t.setTime(Math.floor(t / lo) * lo);
          },
          function (t, e) {
            t.setTime(+t + e * lo);
          },
          function (t, e) {
            return (e - t) / lo;
          },
          function (t) {
            return t.getUTCSeconds();
          },
        );
      mo.range;
      var _o = ho(
        function (t) {
          t.setTime(Math.floor(t / po) * po);
        },
        function (t, e) {
          t.setTime(+t + e * po);
        },
        function (t, e) {
          return (e - t) / po;
        },
        function (t) {
          return t.getMinutes();
        },
      );
      _o.range;
      var bo = ho(
        function (t) {
          var e = (t.getTimezoneOffset() * po) % yo;
          e < 0 && (e += yo), t.setTime(Math.floor((+t - e) / yo) * yo + e);
        },
        function (t, e) {
          t.setTime(+t + e * yo);
        },
        function (t, e) {
          return (e - t) / yo;
        },
        function (t) {
          return t.getHours();
        },
      );
      bo.range;
      var wo = ho(
        function (t) {
          t.setHours(0, 0, 0, 0);
        },
        function (t, e) {
          t.setDate(t.getDate() + e);
        },
        function (t, e) {
          return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * po) / go;
        },
        function (t) {
          return t.getDate() - 1;
        },
      );
      const xo = wo;
      function ko(t) {
        return ho(
          function (e) {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)), e.setHours(0, 0, 0, 0);
          },
          function (t, e) {
            t.setDate(t.getDate() + 7 * e);
          },
          function (t, e) {
            return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * po) / vo;
          },
        );
      }
      wo.range;
      var Mo = ko(0),
        Eo = ko(1),
        Ao = ko(2),
        So = ko(3),
        Lo = ko(4),
        No = ko(5),
        Co = ko(6),
        To =
          (Mo.range,
          Eo.range,
          Ao.range,
          So.range,
          Lo.range,
          No.range,
          Co.range,
          ho(
            function (t) {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setMonth(t.getMonth() + e);
            },
            function (t, e) {
              return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
            },
            function (t) {
              return t.getMonth();
            },
          ));
      To.range;
      var Go = ho(
        function (t) {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        function (t, e) {
          t.setFullYear(t.getFullYear() + e);
        },
        function (t, e) {
          return e.getFullYear() - t.getFullYear();
        },
        function (t) {
          return t.getFullYear();
        },
      );
      Go.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? ho(
              function (e) {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              function (e, n) {
                e.setFullYear(e.getFullYear() + n * t);
              },
            )
          : null;
      };
      const Uo = Go;
      Go.range;
      var Do = ho(
        function (t) {
          t.setUTCSeconds(0, 0);
        },
        function (t, e) {
          t.setTime(+t + e * po);
        },
        function (t, e) {
          return (e - t) / po;
        },
        function (t) {
          return t.getUTCMinutes();
        },
      );
      Do.range;
      var Oo = ho(
        function (t) {
          t.setUTCMinutes(0, 0, 0);
        },
        function (t, e) {
          t.setTime(+t + e * yo);
        },
        function (t, e) {
          return (e - t) / yo;
        },
        function (t) {
          return t.getUTCHours();
        },
      );
      Oo.range;
      var jo = ho(
        function (t) {
          t.setUTCHours(0, 0, 0, 0);
        },
        function (t, e) {
          t.setUTCDate(t.getUTCDate() + e);
        },
        function (t, e) {
          return (e - t) / go;
        },
        function (t) {
          return t.getUTCDate() - 1;
        },
      );
      const zo = jo;
      function Po(t) {
        return ho(
          function (e) {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)), e.setUTCHours(0, 0, 0, 0);
          },
          function (t, e) {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          function (t, e) {
            return (e - t) / vo;
          },
        );
      }
      jo.range;
      var Io = Po(0),
        Ro = Po(1),
        Fo = Po(2),
        qo = Po(3),
        Bo = Po(4),
        Yo = Po(5),
        Wo = Po(6),
        Ko =
          (Io.range,
          Ro.range,
          Fo.range,
          qo.range,
          Bo.range,
          Yo.range,
          Wo.range,
          ho(
            function (t) {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setUTCMonth(t.getUTCMonth() + e);
            },
            function (t, e) {
              return (
                e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
              );
            },
            function (t) {
              return t.getUTCMonth();
            },
          ));
      Ko.range;
      var Ho = ho(
        function (t) {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        function (t, e) {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        function (t, e) {
          return e.getUTCFullYear() - t.getUTCFullYear();
        },
        function (t) {
          return t.getUTCFullYear();
        },
      );
      Ho.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? ho(
              function (e) {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              function (e, n) {
                e.setUTCFullYear(e.getUTCFullYear() + n * t);
              },
            )
          : null;
      };
      const Xo = Ho;
      function $o(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function Vo(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function Zo(t) {
        return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
      }
      Ho.range;
      var Jo,
        Qo,
        ta,
        ea = { '-': '', _: ' ', 0: '0' },
        na = /^\s*\d+/,
        ra = /^%/,
        ia = /[\\^$*+?|[\]().{}]/g;
      function oa(t, e, n) {
        var r = t < 0 ? '-' : '',
          i = (r ? -t : t) + '',
          o = i.length;
        return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
      }
      function aa(t) {
        return t.replace(ia, '\\$&');
      }
      function ua(t) {
        return new RegExp('^(?:' + t.map(aa).join('|') + ')', 'i');
      }
      function ca(t) {
        for (var e = {}, n = -1, r = t.length; ++n < r; ) e[t[n].toLowerCase()] = n;
        return e;
      }
      function sa(t, e, n) {
        var r = na.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function ha(t, e, n) {
        var r = na.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function fa(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function la(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function da(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function pa(t, e, n) {
        var r = na.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function ya(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
      }
      function ga(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), n + r[0].length) : -1;
      }
      function va(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function ma(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function _a(t, e, n) {
        var r = na.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function ba(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function wa(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function xa(t, e, n) {
        var r = na.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function ka(t, e, n) {
        var r = na.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function Ma(t, e, n) {
        var r = na.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function Ea(t, e, n) {
        var r = ra.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function Aa(t, e, n) {
        var r = na.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function Sa(t, e, n) {
        var r = na.exec(e.slice(n));
        return r ? ((t.Q = 1e3 * +r[0]), n + r[0].length) : -1;
      }
      function La(t, e) {
        return oa(t.getDate(), e, 2);
      }
      function Na(t, e) {
        return oa(t.getHours(), e, 2);
      }
      function Ca(t, e) {
        return oa(t.getHours() % 12 || 12, e, 2);
      }
      function Ta(t, e) {
        return oa(1 + xo.count(Uo(t), t), e, 3);
      }
      function Ga(t, e) {
        return oa(t.getMilliseconds(), e, 3);
      }
      function Ua(t, e) {
        return Ga(t, e) + '000';
      }
      function Da(t, e) {
        return oa(t.getMonth() + 1, e, 2);
      }
      function Oa(t, e) {
        return oa(t.getMinutes(), e, 2);
      }
      function ja(t, e) {
        return oa(t.getSeconds(), e, 2);
      }
      function za(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function Pa(t, e) {
        return oa(Mo.count(Uo(t), t), e, 2);
      }
      function Ia(t, e) {
        var n = t.getDay();
        return (
          (t = n >= 4 || 0 === n ? Lo(t) : Lo.ceil(t)),
          oa(Lo.count(Uo(t), t) + (4 === Uo(t).getDay()), e, 2)
        );
      }
      function Ra(t) {
        return t.getDay();
      }
      function Fa(t, e) {
        return oa(Eo.count(Uo(t), t), e, 2);
      }
      function qa(t, e) {
        return oa(t.getFullYear() % 100, e, 2);
      }
      function Ba(t, e) {
        return oa(t.getFullYear() % 1e4, e, 4);
      }
      function Ya(t) {
        var e = t.getTimezoneOffset();
        return (e > 0 ? '-' : ((e *= -1), '+')) + oa((e / 60) | 0, '0', 2) + oa(e % 60, '0', 2);
      }
      function Wa(t, e) {
        return oa(t.getUTCDate(), e, 2);
      }
      function Ka(t, e) {
        return oa(t.getUTCHours(), e, 2);
      }
      function Ha(t, e) {
        return oa(t.getUTCHours() % 12 || 12, e, 2);
      }
      function Xa(t, e) {
        return oa(1 + zo.count(Xo(t), t), e, 3);
      }
      function $a(t, e) {
        return oa(t.getUTCMilliseconds(), e, 3);
      }
      function Va(t, e) {
        return $a(t, e) + '000';
      }
      function Za(t, e) {
        return oa(t.getUTCMonth() + 1, e, 2);
      }
      function Ja(t, e) {
        return oa(t.getUTCMinutes(), e, 2);
      }
      function Qa(t, e) {
        return oa(t.getUTCSeconds(), e, 2);
      }
      function tu(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function eu(t, e) {
        return oa(Io.count(Xo(t), t), e, 2);
      }
      function nu(t, e) {
        var n = t.getUTCDay();
        return (
          (t = n >= 4 || 0 === n ? Bo(t) : Bo.ceil(t)),
          oa(Bo.count(Xo(t), t) + (4 === Xo(t).getUTCDay()), e, 2)
        );
      }
      function ru(t) {
        return t.getUTCDay();
      }
      function iu(t, e) {
        return oa(Ro.count(Xo(t), t), e, 2);
      }
      function ou(t, e) {
        return oa(t.getUTCFullYear() % 100, e, 2);
      }
      function au(t, e) {
        return oa(t.getUTCFullYear() % 1e4, e, 4);
      }
      function uu() {
        return '+0000';
      }
      function cu() {
        return '%';
      }
      function su(t) {
        return +t;
      }
      function hu(t) {
        return Math.floor(+t / 1e3);
      }
      (Jo = (function (t) {
        var e = t.dateTime,
          n = t.date,
          r = t.time,
          i = t.periods,
          o = t.days,
          a = t.shortDays,
          u = t.months,
          c = t.shortMonths,
          s = ua(i),
          h = ca(i),
          f = ua(o),
          l = ca(o),
          d = ua(a),
          p = ca(a),
          y = ua(u),
          g = ca(u),
          v = ua(c),
          m = ca(c),
          _ = {
            a: function (t) {
              return a[t.getDay()];
            },
            A: function (t) {
              return o[t.getDay()];
            },
            b: function (t) {
              return c[t.getMonth()];
            },
            B: function (t) {
              return u[t.getMonth()];
            },
            c: null,
            d: La,
            e: La,
            f: Ua,
            H: Na,
            I: Ca,
            j: Ta,
            L: Ga,
            m: Da,
            M: Oa,
            p: function (t) {
              return i[+(t.getHours() >= 12)];
            },
            Q: su,
            s: hu,
            S: ja,
            u: za,
            U: Pa,
            V: Ia,
            w: Ra,
            W: Fa,
            x: null,
            X: null,
            y: qa,
            Y: Ba,
            Z: Ya,
            '%': cu,
          },
          b = {
            a: function (t) {
              return a[t.getUTCDay()];
            },
            A: function (t) {
              return o[t.getUTCDay()];
            },
            b: function (t) {
              return c[t.getUTCMonth()];
            },
            B: function (t) {
              return u[t.getUTCMonth()];
            },
            c: null,
            d: Wa,
            e: Wa,
            f: Va,
            H: Ka,
            I: Ha,
            j: Xa,
            L: $a,
            m: Za,
            M: Ja,
            p: function (t) {
              return i[+(t.getUTCHours() >= 12)];
            },
            Q: su,
            s: hu,
            S: Qa,
            u: tu,
            U: eu,
            V: nu,
            w: ru,
            W: iu,
            x: null,
            X: null,
            y: ou,
            Y: au,
            Z: uu,
            '%': cu,
          },
          w = {
            a: function (t, e, n) {
              var r = d.exec(e.slice(n));
              return r ? ((t.w = p[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            A: function (t, e, n) {
              var r = f.exec(e.slice(n));
              return r ? ((t.w = l[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            b: function (t, e, n) {
              var r = v.exec(e.slice(n));
              return r ? ((t.m = m[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            B: function (t, e, n) {
              var r = y.exec(e.slice(n));
              return r ? ((t.m = g[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            c: function (t, n, r) {
              return M(t, e, n, r);
            },
            d: ma,
            e: ma,
            f: Ma,
            H: ba,
            I: ba,
            j: _a,
            L: ka,
            m: va,
            M: wa,
            p: function (t, e, n) {
              var r = s.exec(e.slice(n));
              return r ? ((t.p = h[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            Q: Aa,
            s: Sa,
            S: xa,
            u: ha,
            U: fa,
            V: la,
            w: sa,
            W: da,
            x: function (t, e, r) {
              return M(t, n, e, r);
            },
            X: function (t, e, n) {
              return M(t, r, e, n);
            },
            y: ya,
            Y: pa,
            Z: ga,
            '%': Ea,
          };
        function x(t, e) {
          return function (n) {
            var r,
              i,
              o,
              a = [],
              u = -1,
              c = 0,
              s = t.length;
            for (n instanceof Date || (n = new Date(+n)); ++u < s; )
              37 === t.charCodeAt(u) &&
                (a.push(t.slice(c, u)),
                null != (i = ea[(r = t.charAt(++u))])
                  ? (r = t.charAt(++u))
                  : (i = 'e' === r ? ' ' : '0'),
                (o = e[r]) && (r = o(n, i)),
                a.push(r),
                (c = u + 1));
            return a.push(t.slice(c, u)), a.join('');
          };
        }
        function k(t, e) {
          return function (n) {
            var r,
              i,
              o = Zo(1900);
            if (M(o, t, (n += ''), 0) != n.length) return null;
            if ('Q' in o) return new Date(o.Q);
            if (('p' in o && (o.H = (o.H % 12) + 12 * o.p), 'V' in o)) {
              if (o.V < 1 || o.V > 53) return null;
              'w' in o || (o.w = 1),
                'Z' in o
                  ? ((i = (r = Vo(Zo(o.y))).getUTCDay()),
                    (r = i > 4 || 0 === i ? Ro.ceil(r) : Ro(r)),
                    (r = zo.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getUTCFullYear()),
                    (o.m = r.getUTCMonth()),
                    (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                  : ((i = (r = e(Zo(o.y))).getDay()),
                    (r = i > 4 || 0 === i ? Eo.ceil(r) : Eo(r)),
                    (r = xo.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getFullYear()),
                    (o.m = r.getMonth()),
                    (o.d = r.getDate() + ((o.w + 6) % 7)));
            } else
              ('W' in o || 'U' in o) &&
                ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
                (i = 'Z' in o ? Vo(Zo(o.y)).getUTCDay() : e(Zo(o.y)).getDay()),
                (o.m = 0),
                (o.d =
                  'W' in o
                    ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                    : o.w + 7 * o.U - ((i + 6) % 7)));
            return 'Z' in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Vo(o)) : e(o);
          };
        }
        function M(t, e, n, r) {
          for (var i, o, a = 0, u = e.length, c = n.length; a < u; ) {
            if (r >= c) return -1;
            if (37 === (i = e.charCodeAt(a++))) {
              if (
                ((i = e.charAt(a++)), !(o = w[i in ea ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0)
              )
                return -1;
            } else if (i != n.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (_.x = x(n, _)),
          (_.X = x(r, _)),
          (_.c = x(e, _)),
          (b.x = x(n, b)),
          (b.X = x(r, b)),
          (b.c = x(e, b)),
          {
            format: function (t) {
              var e = x((t += ''), _);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = k((t += ''), $o);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = x((t += ''), b);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = k(t, Vo);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          }
        );
      })({
        dateTime: '%x, %X',
        date: '%-m/%-d/%Y',
        time: '%-I:%M:%S %p',
        periods: ['AM', 'PM'],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        shortMonths: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      })),
        Jo.format,
        Jo.parse,
        (Qo = Jo.utcFormat),
        (ta = Jo.utcParse);
      var fu = '%Y-%m-%dT%H:%M:%S.%LZ';
      function lu(t) {
        return t.match(/.{6}/g).map(function (t) {
          return '#' + t;
        });
      }
      function du(t) {
        var e = t.length;
        return function (n) {
          return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
        };
      }
      Date.prototype.toISOString || Qo(fu),
        +new Date('2000-01-01T00:00:00.000Z') || ta(fu),
        lu('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
        lu(
          '393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6',
        ),
        lu(
          '3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9',
        ),
        lu(
          '1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5',
        ),
        Mn(Ke(300, 0.5, 0), Ke(-240, 0.5, 1)),
        Mn(Ke(-100, 0.75, 0.35), Ke(80, 1.5, 0.8)),
        Mn(Ke(260, 0.75, 0.35), Ke(80, 1.5, 0.8)),
        Ke(),
        du(
          lu(
            '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725',
          ),
        ),
        du(
          lu(
            '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf',
          ),
        ),
        du(
          lu(
            '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4',
          ),
        ),
        du(
          lu(
            '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921',
          ),
        ),
        Math.abs,
        Math.atan2,
        Math.cos,
        Math.max,
        Math.min,
        Math.sin,
        Math.sqrt;
      var pu = Math.PI,
        yu = 2 * pu;
      function gu(t) {
        this._context = t;
      }
      function vu(t) {
        this._curve = t;
      }
      (gu.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, e);
          }
        },
      }),
        (vu.prototype = {
          areaStart: function () {
            this._curve.areaStart();
          },
          areaEnd: function () {
            this._curve.areaEnd();
          },
          lineStart: function () {
            this._curve.lineStart();
          },
          lineEnd: function () {
            this._curve.lineEnd();
          },
          point: function (t, e) {
            this._curve.point(e * Math.sin(t), e * -Math.cos(t));
          },
        }),
        Array.prototype.slice,
        Math.sqrt(1 / 3);
      Math.sin(pu / 10), Math.sin((7 * pu) / 10);
      function mu() {}
      function _u(t, e, n) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + n) / 6,
        );
      }
      function bu(t) {
        this._context = t;
      }
      function wu(t, e) {
        (this._basis = new bu(t)), (this._beta = e);
      }
      function xu(t, e, n) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - e),
          t._y2 + t._k * (t._y1 - n),
          t._x2,
          t._y2,
        );
      }
      function ku(t, e) {
        (this._context = t), (this._k = (1 - e) / 6);
      }
      function Mu(t, e) {
        (this._context = t), (this._k = (1 - e) / 6);
      }
      function Eu(t, e) {
        (this._context = t), (this._k = (1 - e) / 6);
      }
      function Au(t, e, n) {
        var r = t._x1,
          i = t._y1,
          o = t._x2,
          a = t._y2;
        if (t._l01_a > 1e-12) {
          var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a);
          (r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
            (i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
        }
        if (t._l23_a > 1e-12) {
          var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            h = 3 * t._l23_a * (t._l23_a + t._l12_a);
          (o = (o * s + t._x1 * t._l23_2a - e * t._l12_2a) / h),
            (a = (a * s + t._y1 * t._l23_2a - n * t._l12_2a) / h);
        }
        t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
      }
      function Su(t, e) {
        (this._context = t), (this._alpha = e);
      }
      function Lu(t, e) {
        (this._context = t), (this._alpha = e);
      }
      function Nu(t, e) {
        (this._context = t), (this._alpha = e);
      }
      function Cu(t) {
        return t < 0 ? -1 : 1;
      }
      function Tu(t, e, n) {
        var r = t._x1 - t._x0,
          i = e - t._x1,
          o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          a = (n - t._y1) / (i || (r < 0 && -0)),
          u = (o * i + a * r) / (r + i);
        return (Cu(o) + Cu(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
      }
      function Gu(t, e) {
        var n = t._x1 - t._x0;
        return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
      }
      function Uu(t, e, n) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * e, o - u, a - u * n, o, a);
      }
      function Du(t) {
        this._context = t;
      }
      function Ou(t) {
        this._context = t;
      }
      function ju() {
        this._ = null;
      }
      function zu(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null;
      }
      function Pu(t, e) {
        var n = e,
          r = e.R,
          i = n.U;
        i ? (i.L === n ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (n.U = r),
          (n.R = r.L),
          n.R && (n.R.U = n),
          (r.L = n);
      }
      function Iu(t, e) {
        var n = e,
          r = e.L,
          i = n.U;
        i ? (i.L === n ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (n.U = r),
          (n.L = r.R),
          n.L && (n.L.U = n),
          (r.R = n);
      }
      function Ru(t) {
        for (; t.L; ) t = t.L;
        return t;
      }
      Math.sin(yu / 10),
        Math.cos(yu / 10),
        Math.sqrt(3),
        Math.sqrt(3),
        Math.sqrt(12),
        (bu.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 3:
                _u(this, this._x1, this._y1);
              case 2:
                this._context.lineTo(this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._context.lineTo(
                    (5 * this._x0 + this._x1) / 6,
                    (5 * this._y0 + this._y1) / 6,
                  );
              default:
                _u(this, t, e);
            }
            (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = e);
          },
        }),
        (wu.prototype = {
          lineStart: function () {
            (this._x = []), (this._y = []), this._basis.lineStart();
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              n = t.length - 1;
            if (n > 0)
              for (var r, i = t[0], o = e[0], a = t[n] - i, u = e[n] - o, c = -1; ++c <= n; )
                (r = c / n),
                  this._basis.point(
                    this._beta * t[c] + (1 - this._beta) * (i + r * a),
                    this._beta * e[c] + (1 - this._beta) * (o + r * u),
                  );
            (this._x = this._y = null), this._basis.lineEnd();
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (function t(e) {
          function n(t) {
            return 1 === e ? new bu(t) : new wu(t, e);
          }
          return (
            (n.beta = function (e) {
              return t(+e);
            }),
            n
          );
        })(0.85),
        (ku.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                xu(this, this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
              case 1:
                (this._point = 2), (this._x1 = t), (this._y1 = e);
                break;
              case 2:
                this._point = 3;
              default:
                xu(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = e);
          },
        }),
        (function t(e) {
          function n(t) {
            return new ku(t, e);
          }
          return (
            (n.tension = function (e) {
              return t(+e);
            }),
            n
          );
        })(0),
        (Mu.prototype = {
          areaStart: mu,
          areaEnd: mu,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._x5 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
              this._y5 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3), this._context.closePath();
                break;
              case 2:
                this._context.lineTo(this._x3, this._y3), this._context.closePath();
                break;
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5);
            }
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1), (this._x3 = t), (this._y3 = e);
                break;
              case 1:
                (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = e));
                break;
              case 2:
                (this._point = 3), (this._x5 = t), (this._y5 = e);
                break;
              default:
                xu(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = e);
          },
        }),
        (function t(e) {
          function n(t) {
            return new Mu(t, e);
          }
          return (
            (n.tension = function (e) {
              return t(+e);
            }),
            n
          );
        })(0),
        (Eu.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4;
              default:
                xu(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = e);
          },
        }),
        (function t(e) {
          function n(t) {
            return new Eu(t, e);
          }
          return (
            (n.tension = function (e) {
              return t(+e);
            }),
            n
          );
        })(0),
        (Su.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                this.point(this._x2, this._y2);
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            if (((t = +t), (e = +e), this._point)) {
              var n = this._x2 - t,
                r = this._y2 - e;
              this._l23_a = Math.sqrt((this._l23_2a = Math.pow(n * n + r * r, this._alpha)));
            }
            switch (this._point) {
              case 0:
                (this._point = 1),
                  this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
              default:
                Au(this, t, e);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = e);
          },
        }),
        (function t(e) {
          function n(t) {
            return e ? new Su(t, e) : new ku(t, 0);
          }
          return (
            (n.alpha = function (e) {
              return t(+e);
            }),
            n
          );
        })(0.5),
        (Lu.prototype = {
          areaStart: mu,
          areaEnd: mu,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._x5 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
              this._y5 =
                NaN),
              (this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3), this._context.closePath();
                break;
              case 2:
                this._context.lineTo(this._x3, this._y3), this._context.closePath();
                break;
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5);
            }
          },
          point: function (t, e) {
            if (((t = +t), (e = +e), this._point)) {
              var n = this._x2 - t,
                r = this._y2 - e;
              this._l23_a = Math.sqrt((this._l23_2a = Math.pow(n * n + r * r, this._alpha)));
            }
            switch (this._point) {
              case 0:
                (this._point = 1), (this._x3 = t), (this._y3 = e);
                break;
              case 1:
                (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = e));
                break;
              case 2:
                (this._point = 3), (this._x5 = t), (this._y5 = e);
                break;
              default:
                Au(this, t, e);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = e);
          },
        }),
        (function t(e) {
          function n(t) {
            return e ? new Lu(t, e) : new Mu(t, 0);
          }
          return (
            (n.alpha = function (e) {
              return t(+e);
            }),
            n
          );
        })(0.5),
        (Nu.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            if (((t = +t), (e = +e), this._point)) {
              var n = this._x2 - t,
                r = this._y2 - e;
              this._l23_a = Math.sqrt((this._l23_2a = Math.pow(n * n + r * r, this._alpha)));
            }
            switch (this._point) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4;
              default:
                Au(this, t, e);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = e);
          },
        }),
        (function t(e) {
          function n(t) {
            return e ? new Nu(t, e) : new Eu(t, 0);
          }
          return (
            (n.alpha = function (e) {
              return t(+e);
            }),
            n
          );
        })(0.5),
        (Du.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                Uu(this, this._t0, Gu(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var n = NaN;
            if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), Uu(this, Gu(this, (n = Tu(this, t, e))), n);
                  break;
                default:
                  Uu(this, this._t0, (n = Tu(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = n);
            }
          },
        }),
        ((function (t) {
          this._context = new Ou(t);
        }.prototype = Object.create(Du.prototype)).point = function (t, e) {
          Du.prototype.point.call(this, e, t);
        }),
        (Ou.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, n, r, i, o) {
            this._context.bezierCurveTo(e, t, r, n, o, i);
          },
        }),
        (ju.prototype = {
          constructor: ju,
          insert: function (t, e) {
            var n, r, i;
            if (t) {
              if (((e.P = t), (e.N = t.N), t.N && (t.N.P = e), (t.N = e), t.R)) {
                for (t = t.R; t.L; ) t = t.L;
                t.L = e;
              } else t.R = e;
              n = t;
            } else
              this._
                ? ((t = Ru(this._)), (e.P = null), (e.N = t), (t.P = t.L = e), (n = t))
                : ((e.P = e.N = null), (this._ = e), (n = null));
            for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C; )
              n === (r = n.U).L
                ? (i = r.R) && i.C
                  ? ((n.C = i.C = !1), (r.C = !0), (t = r))
                  : (t === n.R && (Pu(this, n), (n = (t = n).U)),
                    (n.C = !1),
                    (r.C = !0),
                    Iu(this, r))
                : (i = r.L) && i.C
                ? ((n.C = i.C = !1), (r.C = !0), (t = r))
                : (t === n.L && (Iu(this, n), (n = (t = n).U)),
                  (n.C = !1),
                  (r.C = !0),
                  Pu(this, r)),
                (n = t.U);
            this._.C = !1;
          },
          remove: function (t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
            var e,
              n,
              r,
              i = t.U,
              o = t.L,
              a = t.R;
            if (
              ((n = o ? (a ? Ru(a) : o) : a),
              i ? (i.L === t ? (i.L = n) : (i.R = n)) : (this._ = n),
              o && a
                ? ((r = n.C),
                  (n.C = t.C),
                  (n.L = o),
                  (o.U = n),
                  n !== a
                    ? ((i = n.U), (n.U = t.U), (t = n.R), (i.L = t), (n.R = a), (a.U = n))
                    : ((n.U = i), (i = n), (t = n.R)))
                : ((r = t.C), (t = n)),
              t && (t.U = i),
              !r)
            )
              if (t && t.C) t.C = !1;
              else {
                do {
                  if (t === this._) break;
                  if (t === i.L) {
                    if (
                      ((e = i.R).C && ((e.C = !1), (i.C = !0), Pu(this, i), (e = i.R)),
                      (e.L && e.L.C) || (e.R && e.R.C))
                    ) {
                      (e.R && e.R.C) || ((e.L.C = !1), (e.C = !0), Iu(this, e), (e = i.R)),
                        (e.C = i.C),
                        (i.C = e.R.C = !1),
                        Pu(this, i),
                        (t = this._);
                      break;
                    }
                  } else if (
                    ((e = i.L).C && ((e.C = !1), (i.C = !0), Iu(this, i), (e = i.L)),
                    (e.L && e.L.C) || (e.R && e.R.C))
                  ) {
                    (e.L && e.L.C) || ((e.R.C = !1), (e.C = !0), Pu(this, e), (e = i.L)),
                      (e.C = i.C),
                      (i.C = e.L.C = !1),
                      Iu(this, i),
                      (t = this._);
                    break;
                  }
                  (e.C = !0), (t = i), (i = i.U);
                } while (!t.C);
                t && (t.C = !1);
              }
          },
        });
      const Fu = ju;
      function qu(t, e, n, r) {
        var i = [null, null],
          o = lc.push(i) - 1;
        return (
          (i.left = t),
          (i.right = e),
          n && Yu(i, t, e, n),
          r && Yu(i, e, t, r),
          hc[t.index].halfedges.push(o),
          hc[e.index].halfedges.push(o),
          i
        );
      }
      function Bu(t, e, n) {
        var r = [e, n];
        return (r.left = t), r;
      }
      function Yu(t, e, n, r) {
        t[0] || t[1]
          ? t.left === n
            ? (t[1] = r)
            : (t[0] = r)
          : ((t[0] = r), (t.left = e), (t.right = n));
      }
      function Wu(t, e, n, r, i) {
        var o,
          a = t[0],
          u = t[1],
          c = a[0],
          s = a[1],
          h = 0,
          f = 1,
          l = u[0] - c,
          d = u[1] - s;
        if (((o = e - c), l || !(o > 0))) {
          if (((o /= l), l < 0)) {
            if (o < h) return;
            o < f && (f = o);
          } else if (l > 0) {
            if (o > f) return;
            o > h && (h = o);
          }
          if (((o = r - c), l || !(o < 0))) {
            if (((o /= l), l < 0)) {
              if (o > f) return;
              o > h && (h = o);
            } else if (l > 0) {
              if (o < h) return;
              o < f && (f = o);
            }
            if (((o = n - s), d || !(o > 0))) {
              if (((o /= d), d < 0)) {
                if (o < h) return;
                o < f && (f = o);
              } else if (d > 0) {
                if (o > f) return;
                o > h && (h = o);
              }
              if (((o = i - s), d || !(o < 0))) {
                if (((o /= d), d < 0)) {
                  if (o > f) return;
                  o > h && (h = o);
                } else if (d > 0) {
                  if (o < h) return;
                  o < f && (f = o);
                }
                return (
                  !(h > 0 || f < 1) ||
                  (h > 0 && (t[0] = [c + h * l, s + h * d]),
                  f < 1 && (t[1] = [c + f * l, s + f * d]),
                  !0)
                );
              }
            }
          }
        }
      }
      function Ku(t, e, n, r, i) {
        var o = t[1];
        if (o) return !0;
        var a,
          u,
          c = t[0],
          s = t.left,
          h = t.right,
          f = s[0],
          l = s[1],
          d = h[0],
          p = h[1],
          y = (f + d) / 2,
          g = (l + p) / 2;
        if (p === l) {
          if (y < e || y >= r) return;
          if (f > d) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [y, n];
            o = [y, i];
          } else {
            if (c) {
              if (c[1] < n) return;
            } else c = [y, i];
            o = [y, n];
          }
        } else if (((u = g - (a = (f - d) / (p - l)) * y), a < -1 || a > 1))
          if (f > d) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [(n - u) / a, n];
            o = [(i - u) / a, i];
          } else {
            if (c) {
              if (c[1] < n) return;
            } else c = [(i - u) / a, i];
            o = [(n - u) / a, n];
          }
        else if (l < p) {
          if (c) {
            if (c[0] >= r) return;
          } else c = [e, a * e + u];
          o = [r, a * r + u];
        } else {
          if (c) {
            if (c[0] < e) return;
          } else c = [r, a * r + u];
          o = [e, a * e + u];
        }
        return (t[0] = c), (t[1] = o), !0;
      }
      function Hu(t, e) {
        var n = t.site,
          r = e.left,
          i = e.right;
        return (
          n === i && ((i = r), (r = n)),
          i
            ? Math.atan2(i[1] - r[1], i[0] - r[0])
            : (n === r ? ((r = e[1]), (i = e[0])) : ((r = e[0]), (i = e[1])),
              Math.atan2(r[0] - i[0], i[1] - r[1]))
        );
      }
      function Xu(t, e) {
        return e[+(e.left !== t.site)];
      }
      function $u(t, e) {
        return e[+(e.left === t.site)];
      }
      var Vu,
        Zu = [];
      function Ju() {
        zu(this), (this.x = this.y = this.arc = this.site = this.cy = null);
      }
      function Qu(t) {
        var e = t.P,
          n = t.N;
        if (e && n) {
          var r = e.site,
            i = t.site,
            o = n.site;
          if (r !== o) {
            var a = i[0],
              u = i[1],
              c = r[0] - a,
              s = r[1] - u,
              h = o[0] - a,
              f = o[1] - u,
              l = 2 * (c * f - s * h);
            if (!(l >= -pc)) {
              var d = c * c + s * s,
                p = h * h + f * f,
                y = (f * d - s * p) / l,
                g = (c * p - h * d) / l,
                v = Zu.pop() || new Ju();
              (v.arc = t),
                (v.site = i),
                (v.x = y + a),
                (v.y = (v.cy = g + u) + Math.sqrt(y * y + g * g)),
                (t.circle = v);
              for (var m = null, _ = fc._; _; )
                if (v.y < _.y || (v.y === _.y && v.x <= _.x)) {
                  if (!_.L) {
                    m = _.P;
                    break;
                  }
                  _ = _.L;
                } else {
                  if (!_.R) {
                    m = _;
                    break;
                  }
                  _ = _.R;
                }
              fc.insert(m, v), m || (Vu = v);
            }
          }
        }
      }
      function tc(t) {
        var e = t.circle;
        e && (e.P || (Vu = e.N), fc.remove(e), Zu.push(e), zu(e), (t.circle = null));
      }
      var ec = [];
      function nc() {
        zu(this), (this.edge = this.site = this.circle = null);
      }
      function rc(t) {
        var e = ec.pop() || new nc();
        return (e.site = t), e;
      }
      function ic(t) {
        tc(t), sc.remove(t), ec.push(t), zu(t);
      }
      function oc(t) {
        var e = t.circle,
          n = e.x,
          r = e.cy,
          i = [n, r],
          o = t.P,
          a = t.N,
          u = [t];
        ic(t);
        for (
          var c = o;
          c.circle && Math.abs(n - c.circle.x) < dc && Math.abs(r - c.circle.cy) < dc;

        )
          (o = c.P), u.unshift(c), ic(c), (c = o);
        u.unshift(c), tc(c);
        for (
          var s = a;
          s.circle && Math.abs(n - s.circle.x) < dc && Math.abs(r - s.circle.cy) < dc;

        )
          (a = s.N), u.push(s), ic(s), (s = a);
        u.push(s), tc(s);
        var h,
          f = u.length;
        for (h = 1; h < f; ++h) (s = u[h]), (c = u[h - 1]), Yu(s.edge, c.site, s.site, i);
        (c = u[0]), ((s = u[f - 1]).edge = qu(c.site, s.site, null, i)), Qu(c), Qu(s);
      }
      function ac(t) {
        for (var e, n, r, i, o = t[0], a = t[1], u = sc._; u; )
          if ((r = uc(u, a) - o) > dc) u = u.L;
          else {
            if (!((i = o - cc(u, a)) > dc)) {
              r > -dc ? ((e = u.P), (n = u)) : i > -dc ? ((e = u), (n = u.N)) : (e = n = u);
              break;
            }
            if (!u.R) {
              e = u;
              break;
            }
            u = u.R;
          }
        !(function (t) {
          hc[t.index] = { site: t, halfedges: [] };
        })(t);
        var c = rc(t);
        if ((sc.insert(e, c), e || n)) {
          if (e === n)
            return (
              tc(e),
              (n = rc(e.site)),
              sc.insert(c, n),
              (c.edge = n.edge = qu(e.site, c.site)),
              Qu(e),
              void Qu(n)
            );
          if (n) {
            tc(e), tc(n);
            var s = e.site,
              h = s[0],
              f = s[1],
              l = t[0] - h,
              d = t[1] - f,
              p = n.site,
              y = p[0] - h,
              g = p[1] - f,
              v = 2 * (l * g - d * y),
              m = l * l + d * d,
              _ = y * y + g * g,
              b = [(g * m - d * _) / v + h, (l * _ - y * m) / v + f];
            Yu(n.edge, s, p, b),
              (c.edge = qu(s, t, null, b)),
              (n.edge = qu(t, p, null, b)),
              Qu(e),
              Qu(n);
          } else c.edge = qu(e.site, c.site);
        }
      }
      function uc(t, e) {
        var n = t.site,
          r = n[0],
          i = n[1],
          o = i - e;
        if (!o) return r;
        var a = t.P;
        if (!a) return -1 / 0;
        var u = (n = a.site)[0],
          c = n[1],
          s = c - e;
        if (!s) return u;
        var h = u - r,
          f = 1 / o - 1 / s,
          l = h / s;
        return f
          ? (-l + Math.sqrt(l * l - 2 * f * ((h * h) / (-2 * s) - c + s / 2 + i - o / 2))) / f + r
          : (r + u) / 2;
      }
      function cc(t, e) {
        var n = t.N;
        if (n) return uc(n, e);
        var r = t.site;
        return r[1] === e ? r[0] : 1 / 0;
      }
      var sc,
        hc,
        fc,
        lc,
        dc = 1e-6,
        pc = 1e-12;
      function yc(t, e) {
        return e[1] - t[1] || e[0] - t[0];
      }
      function gc(t, e) {
        var n,
          r,
          i,
          o = t.sort(yc).pop();
        for (lc = [], hc = new Array(t.length), sc = new Fu(), fc = new Fu(); ; )
          if (((i = Vu), o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x))))
            (o[0] === n && o[1] === r) || (ac(o), (n = o[0]), (r = o[1])), (o = t.pop());
          else {
            if (!i) break;
            oc(i.arc);
          }
        if (
          ((function () {
            for (var t, e, n, r, i = 0, o = hc.length; i < o; ++i)
              if ((t = hc[i]) && (r = (e = t.halfedges).length)) {
                var a = new Array(r),
                  u = new Array(r);
                for (n = 0; n < r; ++n) (a[n] = n), (u[n] = Hu(t, lc[e[n]]));
                for (
                  a.sort(function (t, e) {
                    return u[e] - u[t];
                  }),
                    n = 0;
                  n < r;
                  ++n
                )
                  u[n] = e[a[n]];
                for (n = 0; n < r; ++n) e[n] = u[n];
              }
          })(),
          e)
        ) {
          var a = +e[0][0],
            u = +e[0][1],
            c = +e[1][0],
            s = +e[1][1];
          !(function (t, e, n, r) {
            for (var i, o = lc.length; o--; )
              (Ku((i = lc[o]), t, e, n, r) &&
                Wu(i, t, e, n, r) &&
                (Math.abs(i[0][0] - i[1][0]) > dc || Math.abs(i[0][1] - i[1][1]) > dc)) ||
                delete lc[o];
          })(a, u, c, s),
            (function (t, e, n, r) {
              var i,
                o,
                a,
                u,
                c,
                s,
                h,
                f,
                l,
                d,
                p,
                y,
                g = hc.length,
                v = !0;
              for (i = 0; i < g; ++i)
                if ((o = hc[i])) {
                  for (a = o.site, u = (c = o.halfedges).length; u--; ) lc[c[u]] || c.splice(u, 1);
                  for (u = 0, s = c.length; u < s; )
                    (p = (d = $u(o, lc[c[u]]))[0]),
                      (y = d[1]),
                      (f = (h = Xu(o, lc[c[++u % s]]))[0]),
                      (l = h[1]),
                      (Math.abs(p - f) > dc || Math.abs(y - l) > dc) &&
                        (c.splice(
                          u,
                          0,
                          lc.push(
                            Bu(
                              a,
                              d,
                              Math.abs(p - t) < dc && r - y > dc
                                ? [t, Math.abs(f - t) < dc ? l : r]
                                : Math.abs(y - r) < dc && n - p > dc
                                ? [Math.abs(l - r) < dc ? f : n, r]
                                : Math.abs(p - n) < dc && y - e > dc
                                ? [n, Math.abs(f - n) < dc ? l : e]
                                : Math.abs(y - e) < dc && p - t > dc
                                ? [Math.abs(l - e) < dc ? f : t, e]
                                : null,
                            ),
                          ) - 1,
                        ),
                        ++s);
                  s && (v = !1);
                }
              if (v) {
                var m,
                  _,
                  b,
                  w = 1 / 0;
                for (i = 0, v = null; i < g; ++i)
                  (o = hc[i]) &&
                    (b = (m = (a = o.site)[0] - t) * m + (_ = a[1] - e) * _) < w &&
                    ((w = b), (v = o));
                if (v) {
                  var x = [t, e],
                    k = [t, r],
                    M = [n, r],
                    E = [n, e];
                  v.halfedges.push(
                    lc.push(Bu((a = v.site), x, k)) - 1,
                    lc.push(Bu(a, k, M)) - 1,
                    lc.push(Bu(a, M, E)) - 1,
                    lc.push(Bu(a, E, x)) - 1,
                  );
                }
              }
              for (i = 0; i < g; ++i) (o = hc[i]) && (o.halfedges.length || delete hc[i]);
            })(a, u, c, s);
        }
        (this.edges = lc), (this.cells = hc), (sc = fc = lc = hc = null);
      }
      function vc(t) {
        return function () {
          return t;
        };
      }
      function mc(t, e, n) {
        (this.target = t), (this.type = e), (this.transform = n);
      }
      function _c(t, e, n) {
        (this.k = t), (this.x = e), (this.y = n);
      }
      (gc.prototype = {
        constructor: gc,
        polygons: function () {
          var t = this.edges;
          return this.cells.map(function (e) {
            var n = e.halfedges.map(function (n) {
              return Xu(e, t[n]);
            });
            return (n.data = e.site.data), n;
          });
        },
        triangles: function () {
          var t = [],
            e = this.edges;
          return (
            this.cells.forEach(function (n, r) {
              if ((o = (i = n.halfedges).length))
                for (
                  var i,
                    o,
                    a,
                    u = n.site,
                    c = -1,
                    s = e[i[o - 1]],
                    h = s.left === u ? s.right : s.left;
                  ++c < o;

                )
                  (a = h),
                    (h = (s = e[i[c]]).left === u ? s.right : s.left),
                    a &&
                      h &&
                      r < a.index &&
                      r < h.index &&
                      ((l = a),
                      (d = h),
                      ((f = u)[0] - d[0]) * (l[1] - f[1]) - (f[0] - l[0]) * (d[1] - f[1]) < 0) &&
                      t.push([u.data, a.data, h.data]);
              var f, l, d;
            }),
            t
          );
        },
        links: function () {
          return this.edges
            .filter(function (t) {
              return t.right;
            })
            .map(function (t) {
              return { source: t.left.data, target: t.right.data };
            });
        },
        find: function (t, e, n) {
          for (var r, i, o = this, a = o._found || 0, u = o.cells.length; !(i = o.cells[a]); )
            if (++a >= u) return null;
          var c = t - i.site[0],
            s = e - i.site[1],
            h = c * c + s * s;
          do {
            (i = o.cells[(r = a)]),
              (a = null),
              i.halfedges.forEach(function (n) {
                var r = o.edges[n],
                  u = r.left;
                if ((u !== i.site && u) || (u = r.right)) {
                  var c = t - u[0],
                    s = e - u[1],
                    f = c * c + s * s;
                  f < h && ((h = f), (a = u.index));
                }
              });
          } while (null !== a);
          return (o._found = r), null == n || h <= n * n ? i.site : null;
        },
      }),
        (_c.prototype = {
          constructor: _c,
          scale: function (t) {
            return 1 === t ? this : new _c(this.k * t, this.x, this.y);
          },
          translate: function (t, e) {
            return (0 === t) & (0 === e)
              ? this
              : new _c(this.k, this.x + this.k * t, this.y + this.k * e);
          },
          apply: function (t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y];
          },
          applyX: function (t) {
            return t * this.k + this.x;
          },
          applyY: function (t) {
            return t * this.k + this.y;
          },
          invert: function (t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
          },
          invertX: function (t) {
            return (t - this.x) / this.k;
          },
          invertY: function (t) {
            return (t - this.y) / this.k;
          },
          rescaleX: function (t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
          },
          rescaleY: function (t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
          },
          toString: function () {
            return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
          },
        });
      var bc = new _c(1, 0, 0);
      function wc() {
        mt.stopImmediatePropagation();
      }
      function xc() {
        mt.preventDefault(), mt.stopImmediatePropagation();
      }
      function kc() {
        return !mt.button;
      }
      function Mc() {
        var t,
          e,
          n = this;
        return (
          n instanceof SVGElement
            ? ((t = (n = n.ownerSVGElement || n).width.baseVal.value), (e = n.height.baseVal.value))
            : ((t = n.clientWidth), (e = n.clientHeight)),
          [
            [0, 0],
            [t, e],
          ]
        );
      }
      function Ec() {
        return this.__zoom || bc;
      }
      function Ac() {
        return (-mt.deltaY * (mt.deltaMode ? 120 : 1)) / 500;
      }
      function Sc() {
        return 'ontouchstart' in this;
      }
      function Lc(t, e, n) {
        var r = t.invertX(e[0][0]) - n[0][0],
          i = t.invertX(e[1][0]) - n[1][0],
          o = t.invertY(e[0][1]) - n[0][1],
          a = t.invertY(e[1][1]) - n[1][1];
        return t.translate(
          i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
          a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a),
        );
      }
      _c.prototype;
      var Nc =
        'undefined' != typeof navigator && navigator.userAgent.toLowerCase().indexOf('firefox') > 0;
      function Cc(t, e, n, r) {
        t.addEventListener
          ? t.addEventListener(e, n, r)
          : t.attachEvent &&
            t.attachEvent('on'.concat(e), function () {
              n(window.event);
            });
      }
      function Tc(t, e) {
        for (var n = e.slice(0, e.length - 1), r = 0; r < n.length; r++)
          n[r] = t[n[r].toLowerCase()];
        return n;
      }
      function Gc(t) {
        'string' != typeof t && (t = '');
        for (var e = (t = t.replace(/\s/g, '')).split(','), n = e.lastIndexOf(''); n >= 0; )
          (e[n - 1] += ','), e.splice(n, 1), (n = e.lastIndexOf(''));
        return e;
      }
      for (
        var Uc = {
            backspace: 8,
            '⌫': 8,
            tab: 9,
            clear: 12,
            enter: 13,
            '↩': 13,
            return: 13,
            esc: 27,
            escape: 27,
            space: 32,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            del: 46,
            delete: 46,
            ins: 45,
            insert: 45,
            home: 36,
            end: 35,
            pageup: 33,
            pagedown: 34,
            capslock: 20,
            num_0: 96,
            num_1: 97,
            num_2: 98,
            num_3: 99,
            num_4: 100,
            num_5: 101,
            num_6: 102,
            num_7: 103,
            num_8: 104,
            num_9: 105,
            num_multiply: 106,
            num_add: 107,
            num_enter: 108,
            num_subtract: 109,
            num_decimal: 110,
            num_divide: 111,
            '⇪': 20,
            ',': 188,
            '.': 190,
            '/': 191,
            '`': 192,
            '-': Nc ? 173 : 189,
            '=': Nc ? 61 : 187,
            ';': Nc ? 59 : 186,
            "'": 222,
            '[': 219,
            ']': 221,
            '\\': 220,
          },
          Dc = {
            '⇧': 16,
            shift: 16,
            '⌥': 18,
            alt: 18,
            option: 18,
            '⌃': 17,
            ctrl: 17,
            control: 17,
            '⌘': 91,
            cmd: 91,
            command: 91,
          },
          Oc = {
            16: 'shiftKey',
            18: 'altKey',
            17: 'ctrlKey',
            91: 'metaKey',
            shiftKey: 16,
            ctrlKey: 17,
            altKey: 18,
            metaKey: 91,
          },
          jc = { 16: !1, 18: !1, 17: !1, 91: !1 },
          zc = {},
          Pc = 1;
        Pc < 20;
        Pc++
      )
        Uc['f'.concat(Pc)] = 111 + Pc;
      var Ic = [],
        Rc = !1,
        Fc = 'all',
        qc = [],
        Bc = function (t) {
          return Uc[t.toLowerCase()] || Dc[t.toLowerCase()] || t.toUpperCase().charCodeAt(0);
        };
      function Yc(t) {
        Fc = t || 'all';
      }
      function Wc() {
        return Fc || 'all';
      }
      var Kc = function (t) {
        var e = t.key,
          n = t.scope,
          r = t.method,
          i = t.splitKey,
          o = void 0 === i ? '+' : i;
        Gc(e).forEach(function (t) {
          var e = t.split(o),
            i = e.length,
            a = e[i - 1],
            u = '*' === a ? '*' : Bc(a);
          if (zc[u]) {
            n || (n = Wc());
            var c = i > 1 ? Tc(Dc, e) : [];
            zc[u] = zc[u].filter(function (t) {
              return !(
                (!r || t.method === r) &&
                t.scope === n &&
                (function (t, e) {
                  for (
                    var n = t.length >= e.length ? t : e,
                      r = t.length >= e.length ? e : t,
                      i = !0,
                      o = 0;
                    o < n.length;
                    o++
                  )
                    -1 === r.indexOf(n[o]) && (i = !1);
                  return i;
                })(t.mods, c)
              );
            });
          }
        });
      };
      function Hc(t, e, n, r) {
        var i;
        if (e.element === r && (e.scope === n || 'all' === e.scope)) {
          for (var o in ((i = e.mods.length > 0), jc))
            Object.prototype.hasOwnProperty.call(jc, o) &&
              ((!jc[o] && e.mods.indexOf(+o) > -1) || (jc[o] && -1 === e.mods.indexOf(+o))) &&
              (i = !1);
          ((0 !== e.mods.length || jc[16] || jc[18] || jc[17] || jc[91]) &&
            !i &&
            '*' !== e.shortcut) ||
            (!1 === e.method(t, e) &&
              (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
              t.stopPropagation && t.stopPropagation(),
              t.cancelBubble && (t.cancelBubble = !0)));
        }
      }
      function Xc(t, e) {
        var n = zc['*'],
          r = t.keyCode || t.which || t.charCode;
        if ($c.filter.call(this, t)) {
          if (
            ((93 !== r && 224 !== r) || (r = 91),
            -1 === Ic.indexOf(r) && 229 !== r && Ic.push(r),
            ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (e) {
              var n = Oc[e];
              t[e] && -1 === Ic.indexOf(n)
                ? Ic.push(n)
                : !t[e] && Ic.indexOf(n) > -1
                ? Ic.splice(Ic.indexOf(n), 1)
                : 'metaKey' === e &&
                  t[e] &&
                  3 === Ic.length &&
                  (t.ctrlKey || t.shiftKey || t.altKey || (Ic = Ic.slice(Ic.indexOf(n))));
            }),
            r in jc)
          ) {
            for (var i in ((jc[r] = !0), Dc)) Dc[i] === r && ($c[i] = !0);
            if (!n) return;
          }
          for (var o in jc) Object.prototype.hasOwnProperty.call(jc, o) && (jc[o] = t[Oc[o]]);
          t.getModifierState &&
            (!t.altKey || t.ctrlKey) &&
            t.getModifierState('AltGraph') &&
            (-1 === Ic.indexOf(17) && Ic.push(17),
            -1 === Ic.indexOf(18) && Ic.push(18),
            (jc[17] = !0),
            (jc[18] = !0));
          var a = Wc();
          if (n)
            for (var u = 0; u < n.length; u++)
              n[u].scope === a &&
                (('keydown' === t.type && n[u].keydown) || ('keyup' === t.type && n[u].keyup)) &&
                Hc(t, n[u], a, e);
          if (r in zc)
            for (var c = 0; c < zc[r].length; c++)
              if (
                (('keydown' === t.type && zc[r][c].keydown) ||
                  ('keyup' === t.type && zc[r][c].keyup)) &&
                zc[r][c].key
              ) {
                for (
                  var s = zc[r][c], h = s.splitKey, f = s.key.split(h), l = [], d = 0;
                  d < f.length;
                  d++
                )
                  l.push(Bc(f[d]));
                l.sort().join('') === Ic.sort().join('') && Hc(t, s, a, e);
              }
        }
      }
      function $c(t, e, n) {
        Ic = [];
        var r = Gc(t),
          i = [],
          o = 'all',
          a = document,
          u = 0,
          c = !1,
          s = !0,
          h = '+',
          f = !1;
        for (
          void 0 === n && 'function' == typeof e && (n = e),
            '[object Object]' === Object.prototype.toString.call(e) &&
              (e.scope && (o = e.scope),
              e.element && (a = e.element),
              e.keyup && (c = e.keyup),
              void 0 !== e.keydown && (s = e.keydown),
              void 0 !== e.capture && (f = e.capture),
              'string' == typeof e.splitKey && (h = e.splitKey)),
            'string' == typeof e && (o = e);
          u < r.length;
          u++
        )
          (i = []),
            (t = r[u].split(h)).length > 1 && (i = Tc(Dc, t)),
            (t = '*' === (t = t[t.length - 1]) ? '*' : Bc(t)) in zc || (zc[t] = []),
            zc[t].push({
              keyup: c,
              keydown: s,
              scope: o,
              mods: i,
              shortcut: r[u],
              method: n,
              key: r[u],
              splitKey: h,
              element: a,
            });
        void 0 !== a &&
          !(function (t) {
            return qc.indexOf(t) > -1;
          })(a) &&
          window &&
          (qc.push(a),
          Cc(
            a,
            'keydown',
            function (t) {
              Xc(t, a);
            },
            f,
          ),
          Rc ||
            ((Rc = !0),
            Cc(
              window,
              'focus',
              function () {
                Ic = [];
              },
              f,
            )),
          Cc(
            a,
            'keyup',
            function (t) {
              Xc(t, a),
                (function (t) {
                  var e = t.keyCode || t.which || t.charCode,
                    n = Ic.indexOf(e);
                  if (
                    (n >= 0 && Ic.splice(n, 1),
                    t.key && 'meta' === t.key.toLowerCase() && Ic.splice(0, Ic.length),
                    (93 !== e && 224 !== e) || (e = 91),
                    e in jc)
                  )
                    for (var r in ((jc[e] = !1), Dc)) Dc[r] === e && ($c[r] = !1);
                })(t);
            },
            f,
          ));
      }
      var Vc = {
        getPressedKeyString: function () {
          return Ic.map(function (t) {
            return (
              (e = t),
              Object.keys(Uc).find(function (t) {
                return Uc[t] === e;
              }) ||
                (function (t) {
                  return Object.keys(Dc).find(function (e) {
                    return Dc[e] === t;
                  });
                })(t) ||
                String.fromCharCode(t)
            );
            var e;
          });
        },
        setScope: Yc,
        getScope: Wc,
        deleteScope: function (t, e) {
          var n, r;
          for (var i in (t || (t = Wc()), zc))
            if (Object.prototype.hasOwnProperty.call(zc, i))
              for (n = zc[i], r = 0; r < n.length; ) n[r].scope === t ? n.splice(r, 1) : r++;
          Wc() === t && Yc(e || 'all');
        },
        getPressedKeyCodes: function () {
          return Ic.slice(0);
        },
        isPressed: function (t) {
          return 'string' == typeof t && (t = Bc(t)), -1 !== Ic.indexOf(t);
        },
        filter: function (t) {
          var e = t.target || t.srcElement,
            n = e.tagName,
            r = !0;
          return (
            (!e.isContentEditable &&
              (('INPUT' !== n && 'TEXTAREA' !== n && 'SELECT' !== n) || e.readOnly)) ||
              (r = !1),
            r
          );
        },
        trigger: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'all';
          Object.keys(zc).forEach(function (n) {
            zc[n]
              .filter(function (n) {
                return n.scope === e && n.shortcut === t;
              })
              .forEach(function (t) {
                t && t.method && t.method();
              });
          });
        },
        unbind: function (t) {
          if (void 0 === t)
            Object.keys(zc).forEach(function (t) {
              return delete zc[t];
            });
          else if (Array.isArray(t))
            t.forEach(function (t) {
              t.key && Kc(t);
            });
          else if ('object' == typeof t) t.key && Kc(t);
          else if ('string' == typeof t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
              n[r - 1] = arguments[r];
            var i = n[0],
              o = n[1];
            'function' == typeof i && ((o = i), (i = '')),
              Kc({ key: t, scope: i, method: o, splitKey: '+' });
          }
        },
        keyMap: Uc,
        modifier: Dc,
        modifierMap: Oc,
      };
      for (var Zc in Vc) Object.prototype.hasOwnProperty.call(Vc, Zc) && ($c[Zc] = Vc[Zc]);
      if ('undefined' != typeof window) {
        var Jc = window.hotkeys;
        ($c.noConflict = function (t) {
          return t && window.hotkeys === $c && (window.hotkeys = Jc), $c;
        }),
          (window.hotkeys = $c);
      }
      const Qc = {
        notFiltered: 0,
        filteredByTimeline: 1,
        filteredByFocus: 2,
        filteredByTag: 3,
        filteredByType: 4,
      };
      var ts = [];
      data.nodes = data.nodes.map(function (t) {
        return (
          ts.push(t.id), (t.hidden = Qc.notFiltered), (t.isolated = !1), (t.highlighted = !1), t
        );
      });
      var es = Tt('#graph-canvas'),
        ns = es.append('svg'),
        rs = es.node().getBoundingClientRect(),
        is = rs.width,
        os = rs.height;
      ns.attr('viewBox', [0, 0, is, os]).attr('preserveAspectRatio', 'xMinYMin meet');
      var as = (function (t) {
        var e,
          n = 1,
          r = 0.001,
          i = 1 - Math.pow(r, 1 / 300),
          o = 0,
          a = 0.6,
          u = Dr(),
          c = zn(h),
          s = v('tick', 'end');
        function h() {
          f(), s.call('tick', e), n < r && (c.stop(), s.call('end', e));
        }
        function f() {
          var e,
            r,
            c = t.length;
          for (
            n += (o - n) * i,
              u.each(function (t) {
                t(n);
              }),
              e = 0;
            e < c;
            ++e
          )
            null == (r = t[e]).fx ? (r.x += r.vx *= a) : ((r.x = r.fx), (r.vx = 0)),
              null == r.fy ? (r.y += r.vy *= a) : ((r.y = r.fy), (r.vy = 0));
        }
        function l() {
          for (var e, n = 0, r = t.length; n < r; ++n) {
            if ((((e = t[n]).index = n), isNaN(e.x) || isNaN(e.y))) {
              var i = 10 * Math.sqrt(n),
                o = n * ai;
              (e.x = i * Math.cos(o)), (e.y = i * Math.sin(o));
            }
            (isNaN(e.vx) || isNaN(e.vy)) && (e.vx = e.vy = 0);
          }
        }
        function d(e) {
          return e.initialize && e.initialize(t), e;
        }
        return (
          null == t && (t = []),
          l(),
          (e = {
            tick: f,
            restart: function () {
              return c.restart(h), e;
            },
            stop: function () {
              return c.stop(), e;
            },
            nodes: function (n) {
              return arguments.length ? ((t = n), l(), u.each(d), e) : t;
            },
            alpha: function (t) {
              return arguments.length ? ((n = +t), e) : n;
            },
            alphaMin: function (t) {
              return arguments.length ? ((r = +t), e) : r;
            },
            alphaDecay: function (t) {
              return arguments.length ? ((i = +t), e) : +i;
            },
            alphaTarget: function (t) {
              return arguments.length ? ((o = +t), e) : o;
            },
            velocityDecay: function (t) {
              return arguments.length ? ((a = 1 - t), e) : 1 - a;
            },
            force: function (t, n) {
              return arguments.length > 1
                ? (null == n ? u.remove(t) : u.set(t, d(n)), e)
                : u.get(t);
            },
            find: function (e, n, r) {
              var i,
                o,
                a,
                u,
                c,
                s = 0,
                h = t.length;
              for (null == r ? (r = 1 / 0) : (r *= r), s = 0; s < h; ++s)
                (a = (i = e - (u = t[s]).x) * i + (o = n - u.y) * o) < r && ((c = u), (r = a));
              return c;
            },
            on: function (t, n) {
              return arguments.length > 1 ? (s.on(t, n), e) : s.on(t);
            },
          })
        );
      })(data.nodes)
        .force(
          'link',
          (function (t) {
            var e,
              n,
              r,
              i,
              o,
              a = ei,
              u = function (t) {
                return 1 / Math.min(i[t.source.index], i[t.target.index]);
              },
              c = Qr(30),
              s = 1;
            function h(r) {
              for (var i = 0, a = t.length; i < s; ++i)
                for (var u, c, h, f, l, d, p, y = 0; y < a; ++y)
                  (c = (u = t[y]).source),
                    (f = (h = u.target).x + h.vx - c.x - c.vx || ti()),
                    (l = h.y + h.vy - c.y - c.vy || ti()),
                    (f *= d = (((d = Math.sqrt(f * f + l * l)) - n[y]) / d) * r * e[y]),
                    (l *= d),
                    (h.vx -= f * (p = o[y])),
                    (h.vy -= l * p),
                    (c.vx += f * (p = 1 - p)),
                    (c.vy += l * p);
            }
            function f() {
              if (r) {
                var u,
                  c,
                  s = r.length,
                  h = t.length,
                  f = Dr(r, a);
                for (u = 0, i = new Array(s); u < h; ++u)
                  ((c = t[u]).index = u),
                    'object' != typeof c.source && (c.source = ni(f, c.source)),
                    'object' != typeof c.target && (c.target = ni(f, c.target)),
                    (i[c.source.index] = (i[c.source.index] || 0) + 1),
                    (i[c.target.index] = (i[c.target.index] || 0) + 1);
                for (u = 0, o = new Array(h); u < h; ++u)
                  (c = t[u]), (o[u] = i[c.source.index] / (i[c.source.index] + i[c.target.index]));
                (e = new Array(h)), l(), (n = new Array(h)), d();
              }
            }
            function l() {
              if (r) for (var n = 0, i = t.length; n < i; ++n) e[n] = +u(t[n], n, t);
            }
            function d() {
              if (r) for (var e = 0, i = t.length; e < i; ++e) n[e] = +c(t[e], e, t);
            }
            return (
              null == t && (t = []),
              (h.initialize = function (t) {
                (r = t), f();
              }),
              (h.links = function (e) {
                return arguments.length ? ((t = e), f(), h) : t;
              }),
              (h.id = function (t) {
                return arguments.length ? ((a = t), h) : a;
              }),
              (h.iterations = function (t) {
                return arguments.length ? ((s = +t), h) : s;
              }),
              (h.strength = function (t) {
                return arguments.length ? ((u = 'function' == typeof t ? t : Qr(+t)), l(), h) : u;
              }),
              (h.distance = function (t) {
                return arguments.length ? ((c = 'function' == typeof t ? t : Qr(+t)), d(), h) : c;
              }),
              h
            );
          })(data.links).id(function (t) {
            return t.id;
          }),
        )
        .force(
          'charge',
          (function () {
            var t,
              e,
              n,
              r,
              i = Qr(-30),
              o = 1,
              a = 1 / 0,
              u = 0.81;
            function c(r) {
              var i,
                o = t.length,
                a = $r(t, ri, ii).visitAfter(h);
              for (n = r, i = 0; i < o; ++i) (e = t[i]), a.visit(f);
            }
            function s() {
              if (t) {
                var e,
                  n,
                  o = t.length;
                for (r = new Array(o), e = 0; e < o; ++e) (n = t[e]), (r[n.index] = +i(n, e, t));
              }
            }
            function h(t) {
              var e,
                n,
                i,
                o,
                a,
                u = 0,
                c = 0;
              if (t.length) {
                for (i = o = a = 0; a < 4; ++a)
                  (e = t[a]) &&
                    (n = Math.abs(e.value)) &&
                    ((u += e.value), (c += n), (i += n * e.x), (o += n * e.y));
                (t.x = i / c), (t.y = o / c);
              } else {
                ((e = t).x = e.data.x), (e.y = e.data.y);
                do {
                  u += r[e.data.index];
                } while ((e = e.next));
              }
              t.value = u;
            }
            function f(t, i, c, s) {
              if (!t.value) return !0;
              var h = t.x - e.x,
                f = t.y - e.y,
                l = s - i,
                d = h * h + f * f;
              if ((l * l) / u < d)
                return (
                  d < a &&
                    (0 === h && (d += (h = ti()) * h),
                    0 === f && (d += (f = ti()) * f),
                    d < o && (d = Math.sqrt(o * d)),
                    (e.vx += (h * t.value * n) / d),
                    (e.vy += (f * t.value * n) / d)),
                  !0
                );
              if (!(t.length || d >= a)) {
                (t.data !== e || t.next) &&
                  (0 === h && (d += (h = ti()) * h),
                  0 === f && (d += (f = ti()) * f),
                  d < o && (d = Math.sqrt(o * d)));
                do {
                  t.data !== e &&
                    ((l = (r[t.data.index] * n) / d), (e.vx += h * l), (e.vy += f * l));
                } while ((t = t.next));
              }
            }
            return (
              (c.initialize = function (e) {
                (t = e), s();
              }),
              (c.strength = function (t) {
                return arguments.length ? ((i = 'function' == typeof t ? t : Qr(+t)), s(), c) : i;
              }),
              (c.distanceMin = function (t) {
                return arguments.length ? ((o = t * t), c) : Math.sqrt(o);
              }),
              (c.distanceMax = function (t) {
                return arguments.length ? ((a = t * t), c) : Math.sqrt(a);
              }),
              (c.theta = function (t) {
                return arguments.length ? ((u = t * t), c) : Math.sqrt(u);
              }),
              c
            );
          })(),
        )
        .force(
          'center',
          (function (t, e) {
            var n;
            function r() {
              var r,
                i,
                o = n.length,
                a = 0,
                u = 0;
              for (r = 0; r < o; ++r) (a += (i = n[r]).x), (u += i.y);
              for (a = a / o - t, u = u / o - e, r = 0; r < o; ++r) ((i = n[r]).x -= a), (i.y -= u);
            }
            return (
              null == t && (t = 0),
              null == e && (e = 0),
              (r.initialize = function (t) {
                n = t;
              }),
              (r.x = function (e) {
                return arguments.length ? ((t = +e), r) : t;
              }),
              (r.y = function (t) {
                return arguments.length ? ((e = +t), r) : e;
              }),
              r
            );
          })(),
        )
        .force(
          'forceX',
          (function (t) {
            var e,
              n,
              r,
              i = Qr(0.1);
            function o(t) {
              for (var i, o = 0, a = e.length; o < a; ++o) (i = e[o]).vx += (r[o] - i.x) * n[o] * t;
            }
            function a() {
              if (e) {
                var o,
                  a = e.length;
                for (n = new Array(a), r = new Array(a), o = 0; o < a; ++o)
                  n[o] = isNaN((r[o] = +t(e[o], o, e))) ? 0 : +i(e[o], o, e);
              }
            }
            return (
              'function' != typeof t && (t = Qr(null == t ? 0 : +t)),
              (o.initialize = function (t) {
                (e = t), a();
              }),
              (o.strength = function (t) {
                return arguments.length ? ((i = 'function' == typeof t ? t : Qr(+t)), a(), o) : i;
              }),
              (o.x = function (e) {
                return arguments.length ? ((t = 'function' == typeof e ? e : Qr(+e)), a(), o) : t;
              }),
              o
            );
          })(),
        )
        .force(
          'forceY',
          (function (t) {
            var e,
              n,
              r,
              i = Qr(0.1);
            function o(t) {
              for (var i, o = 0, a = e.length; o < a; ++o) (i = e[o]).vy += (r[o] - i.y) * n[o] * t;
            }
            function a() {
              if (e) {
                var o,
                  a = e.length;
                for (n = new Array(a), r = new Array(a), o = 0; o < a; ++o)
                  n[o] = isNaN((r[o] = +t(e[o], o, e))) ? 0 : +i(e[o], o, e);
              }
            }
            return (
              'function' != typeof t && (t = Qr(null == t ? 0 : +t)),
              (o.initialize = function (t) {
                (e = t), a();
              }),
              (o.strength = function (t) {
                return arguments.length ? ((i = 'function' == typeof t ? t : Qr(+t)), a(), o) : i;
              }),
              (o.y = function (e) {
                return arguments.length ? ((t = 'function' == typeof e ? e : Qr(+e)), a(), o) : t;
              }),
              o
            );
          })(),
        );
      as
        .force('center')
        .x(0.5 * is)
        .y(0.5 * os),
        (window.updateForces = function () {
          as
            .force('charge')
            .strength(-Math.abs(graphProperties.attraction_force))
            .distanceMax(graphProperties.attraction_distance_max),
            as.force('forceX').strength(graphProperties.attraction_vertical),
            as.force('forceY').strength(graphProperties.attraction_horizontal),
            as.alpha(1).restart();
        }),
        updateForces(),
        $c('space', function (t) {
          t.preventDefault(), updateForces();
        }),
        as.on('tick', function () {
          us.links
            .attr('x1', function (t) {
              return t.source.x;
            })
            .attr('y1', function (t) {
              return t.source.y;
            })
            .attr('x2', function (t) {
              return t.target.x;
            })
            .attr('y2', function (t) {
              return t.target.y;
            }),
            us.nodes.attr('transform', function (t) {
              return 'translate(' + t.x + ',' + t.y + ')';
            }),
            Tt('#load-bar-value').style('flex-basis', 100 * as.alpha() + '%');
        });
      var us = {};
      function cs(t) {
        var e = us.nodes
          .filter(function (t) {
            return t.hidden === Qc.notFiltered;
          })
          .data()
          .map(function (t) {
            return t.id;
          });
        return {
          nodes: us.nodes.filter(function (e) {
            return t.includes(e.id);
          }),
          links: us.links.filter(function (n) {
            return !(
              (!t.includes(n.source.id) && !t.includes(n.target.id)) ||
              !e.includes(n.source.id) ||
              !e.includes(n.target.id)
            );
          }),
        };
      }
      function ss(t, e) {
        var n = [],
          r = [];
        ts.forEach(function (e) {
          t.includes(e) ? r.push(e) : n.push(e);
        }),
          (function (t, e) {
            if (
              (hideNodeNetwork(t),
              (function (t) {
                var e,
                  n = ys(t);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value;
                    _s.querySelectorAll('[data-index="' + r + '"]').forEach(function (t) {
                      t.style.display = 'none';
                    });
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
              })(t),
              void 0 === e)
            )
              throw new Error('Need priority');
            us.nodes.data().map(function (n) {
              var r = n.id,
                i = n.hidden;
              return t.includes(r) && i <= e && (n.hidden = e), n;
            });
          })(n, e),
          hs(r, e);
      }
      function hs(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qc.notFiltered,
          n = [];
        us.nodes.data().map(function (r) {
          var i = r.id,
            o = r.hidden;
          return t.includes(i) && o <= e && (n.push(i), (r.hidden = Qc.notFiltered)), r;
        }),
          displayNodeNetwork(n),
          (function (t) {
            var e,
              n = ys(
                (t = t.filter(function (t) {
                  if (
                    ps.find(function (e) {
                      return e.id === t;
                    }).hidden === Qc.notFiltered
                  )
                    return !0;
                })),
              );
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var r = e.value;
                _s.querySelectorAll('[data-index="' + r + '"]').forEach(function (t) {
                  t.style.display = null;
                });
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
          })(n);
      }
      function fs() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qc.notFiltered;
        hs(ts, t);
      }
      function ls() {
        if (0 !== a.highlightedNodes.length) {
          var t = cs(a.highlightedNodes),
            e = t.nodes,
            n = t.links;
          e.selectAll('circle').style('stroke', null),
            n.style('stroke', null),
            (a.highlightedNodes = []);
        }
      }
      function ds() {
        var t = a.position,
          e = t.x,
          n = t.y,
          r = t.zoom,
          i = [-e, -n, is / r, os / r].join(' ');
        ns.attr('viewBox', i);
      }
      (us.links = ns
        .append('g')
        .selectAll('line')
        .data(data.links)
        .enter()
        .append('line')
        .attr('stroke', function (t) {
          return t.color;
        })
        .attr('title', function (t) {
          return t.title;
        })
        .attr('data-source', function (t) {
          return t.source.id;
        })
        .attr('data-target', function (t) {
          return t.target.id;
        })
        .attr('stroke-dasharray', function (t) {
          return ('dash' === t.shape.stroke || 'dotted' === t.shape.stroke) && t.shape.dashInterval;
        })
        .attr('filter', function (t) {
          return 'double' === t.shape.stroke && 'url(#double)';
        })),
        !0 === graphProperties.graph_arrows && us.links.attr('marker-end', 'url(#arrow)'),
        (us.nodes = ns
          .append('g')
          .selectAll('g')
          .data(data.nodes)
          .enter()
          .append('g')
          .attr('data-node', function (t) {
            return t.id;
          })
          .attr('data-toto', function (t) {
            return t.superToto;
          })
          .on('click', function (t) {
            openRecord(t.id);
          })),
        (us.circles = us.nodes
          .append('circle')
          .attr('r', function (t) {
            return t.size;
          })
          .attr('fill', function (t) {
            return t.fill;
          })
          .attr('stroke', function (t) {
            return t.colorStroke;
          })
          .attr('stroke-width', function (t) {
            return t.strokeWidth;
          })
          .call(
            (function () {
              var t,
                e,
                n,
                r,
                i = Yt,
                o = Wt,
                a = Kt,
                u = Ht,
                c = {},
                s = v('start', 'drag', 'end'),
                h = 0,
                f = 0;
              function l(t) {
                t.on('mousedown.drag', d)
                  .filter(u)
                  .on('touchstart.drag', g)
                  .on('touchmove.drag', m)
                  .on('touchend.drag touchcancel.drag', _)
                  .style('touch-action', 'none')
                  .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
              }
              function d() {
                if (!r && i.apply(this, arguments)) {
                  var a = b('mouse', o.apply(this, arguments), jt, this, arguments);
                  a &&
                    (Tt(mt.view).on('mousemove.drag', p, !0).on('mouseup.drag', y, !0),
                    Rt(mt.view),
                    Pt(),
                    (n = !1),
                    (t = mt.clientX),
                    (e = mt.clientY),
                    a('start'));
                }
              }
              function p() {
                if ((It(), !n)) {
                  var r = mt.clientX - t,
                    i = mt.clientY - e;
                  n = r * r + i * i > f;
                }
                c.mouse('drag');
              }
              function y() {
                Tt(mt.view).on('mousemove.drag mouseup.drag', null),
                  Ft(mt.view, n),
                  It(),
                  c.mouse('end');
              }
              function g() {
                if (i.apply(this, arguments)) {
                  var t,
                    e,
                    n = mt.changedTouches,
                    r = o.apply(this, arguments),
                    a = n.length;
                  for (t = 0; t < a; ++t)
                    (e = b(n[t].identifier, r, zt, this, arguments)) && (Pt(), e('start'));
                }
              }
              function m() {
                var t,
                  e,
                  n = mt.changedTouches,
                  r = n.length;
                for (t = 0; t < r; ++t) (e = c[n[t].identifier]) && (It(), e('drag'));
              }
              function _() {
                var t,
                  e,
                  n = mt.changedTouches,
                  i = n.length;
                for (
                  r && clearTimeout(r),
                    r = setTimeout(function () {
                      r = null;
                    }, 500),
                    t = 0;
                  t < i;
                  ++t
                )
                  (e = c[n[t].identifier]) && (Pt(), e('end'));
              }
              function b(t, e, n, r, i) {
                var o,
                  u,
                  f,
                  d = n(e, t),
                  p = s.copy();
                if (
                  kt(new Bt(l, 'beforestart', o, t, h, d[0], d[1], 0, 0, p), function () {
                    return (
                      null != (mt.subject = o = a.apply(r, i)) &&
                      ((u = o.x - d[0] || 0), (f = o.y - d[1] || 0), !0)
                    );
                  })
                )
                  return function a(s) {
                    var y,
                      g = d;
                    switch (s) {
                      case 'start':
                        (c[t] = a), (y = h++);
                        break;
                      case 'end':
                        delete c[t], --h;
                      case 'drag':
                        (d = n(e, t)), (y = h);
                    }
                    kt(
                      new Bt(l, s, o, t, y, d[0] + u, d[1] + f, d[0] - g[0], d[1] - g[1], p),
                      p.apply,
                      p,
                      [s, r, i],
                    );
                  };
              }
              return (
                (l.filter = function (t) {
                  return arguments.length ? ((i = 'function' == typeof t ? t : qt(!!t)), l) : i;
                }),
                (l.container = function (t) {
                  return arguments.length ? ((o = 'function' == typeof t ? t : qt(t)), l) : o;
                }),
                (l.subject = function (t) {
                  return arguments.length ? ((a = 'function' == typeof t ? t : qt(t)), l) : a;
                }),
                (l.touchable = function (t) {
                  return arguments.length ? ((u = 'function' == typeof t ? t : qt(!!t)), l) : u;
                }),
                (l.on = function () {
                  var t = s.on.apply(s, arguments);
                  return t === s ? l : t;
                }),
                (l.clickDistance = function (t) {
                  return arguments.length ? ((f = (t = +t) * t), l) : Math.sqrt(f);
                }),
                l
              );
            })()
              .on('start', function (t) {
                mt.active || as.alphaTarget(0.3).restart(), (t.fx = t.x), (t.fy = t.y);
              })
              .on('drag', function (t) {
                (t.fx = mt.x), (t.fy = mt.y);
              })
              .on('end', function (t) {
                mt.active || as.alphaTarget(1e-4), (t.fx = null), (t.fy = null);
              }),
          )
          .on('mouseenter', function (t) {
            if (graphProperties.graph_highlight_on_hover) {
              var e = [t.id],
                n = us.links.filter(function (n) {
                  return (
                    (n.source.id !== t.id && n.target.id !== t.id) ||
                    (e.push(n.source.id, n.target.id), !1)
                  );
                }),
                r = us.nodes.filter(function (t) {
                  return !e.includes(t.id);
                }),
                i = us.links.filter(function (e) {
                  return e.source.id === t.id || e.target.id === t.id;
                });
              us.nodes
                .filter(function (t) {
                  return !!e.includes(t.id);
                })
                .selectAll('circle')
                .attr('stroke', function (t) {
                  return t.highlight;
                }),
                i.attr('stroke', function (t) {
                  return t.colorHighlight;
                }),
                r.attr('opacity', 0.5),
                n.attr('stroke-opacity', 0.5);
            }
          })
          .on('mouseout', function () {
            graphProperties.graph_highlight_on_hover &&
              (us.nodes.selectAll('circle').attr('stroke', function (t) {
                return t.colorStroke;
              }),
              us.links.attr('stroke', function (t) {
                return t.color;
              }),
              us.nodes.attr('opacity', 1),
              us.links.attr('stroke-opacity', 1));
          })),
        (us.labels = us.nodes
          .append('text')
          .each(function (t) {
            for (var e = t.label.split(' '), n = Tt(this), r = '', i = 0; i < e.length; i++)
              ((r += e[i] + ' ').length < 25 && i !== e.length - 1) ||
                (n.append('tspan').attr('x', 0).attr('dy', '1.2em').text(r.slice(0, -1)), (r = ''));
          })
          .attr('font-size', graphProperties.graph_text_size)
          .attr('x', 0)
          .attr('y', function (t) {
            return t.size;
          })
          .attr('dominant-baseline', 'middle')
          .attr('text-anchor', 'middle')),
        (window.zoomToNode = function (t) {
          var e = us.nodes
              .filter(function (e) {
                return e.id === t;
              })
              .datum(),
            n = e.x,
            r = e.y;
          (n = -Math.abs(n - 200)),
            (r = -Math.abs(r - 300)),
            (a.position = { x: n, y: r, zoom: 2 }),
            ds();
        }),
        $c('c', function (t) {
          t.preventDefault(), a.openedRecordId && zoomToNode(Number(a.openedRecordId));
        }),
        (window.hideNodeNetwork = function (t) {
          var e = cs(t),
            n = e.nodes,
            r = e.links;
          n.style('display', 'none'), r.style('display', 'none');
        }),
        (window.displayNodeNetwork = function (t) {
          var e = cs(t),
            n = e.nodes,
            r = e.links;
          n.style('display', null), r.style('display', null);
        }),
        (window.linksDisplayToggle = function (t) {
          t ? us.links.style('display', null) : us.links.style('display', 'none');
        }),
        (window.labelDisplayToggle = function (t) {
          t ? us.labels.style('display', null) : us.labels.style('display', 'none');
        }),
        (window.labelHighlight = function (t) {
          us.nodes.data().map(function (e) {
            return t.includes(e.id) && (e.highlighted = !0), e;
          }),
            us.nodes
              .filter(function (e) {
                return t.includes(e.id);
              })
              .select('text')
              .style('fill', 'var(--highlight)');
        }),
        (window.updateFontsize = function () {
          us.labels.attr('font-size', graphProperties.text_size);
        }),
        (window.labelUnlight = function (t) {
          us.nodes.data().map(function (e) {
            return t.includes(e.id) && (e.highlighted = !1), e;
          }),
            us.nodes
              .filter(function (e) {
                return t.includes(e.id);
              })
              .select('text')
              .style('fill', null);
        }),
        (window.labelUnlightAll = function () {
          (data.nodes = data.nodes.map(function (t) {
            return (t.highlighted = !1), t;
          })),
            us.labels.style('fill', null);
        });
      var ps = us.nodes.data();
      function ys(t, e) {
        var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (!n) {
          if (Array.isArray(t) || (n = gs(t)) || (e && t && 'number' == typeof t.length)) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function gs(t, e) {
        if (t) {
          if ('string' == typeof t) return vs(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? vs(t, e)
              : void 0
          );
        }
      }
      function vs(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      us.links.data();
      var ms = document.getElementById('record-container');
      (window.openRecord = function (t) {
        var e,
          n,
          r,
          i,
          o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          c = document.getElementById(t);
        if (
          c &&
          (void 0 !== a.openedRecordId &&
            document.getElementById(a.openedRecordId).classList.remove('active'),
          ms.classList.add('active'),
          ms.scrollTo({ top: 0 }),
          c.classList.add('active'),
          (a.openedRecordId = t),
          ls(),
          (n = cs((e = [t]))),
          (r = n.nodes),
          (i = n.links),
          r.selectAll('circle').style('stroke', 'var(--highlight)'),
          i.style('stroke', 'var(--highlight)'),
          (a.highlightedNodes = a.highlightedNodes.concat(e)),
          o)
        ) {
          var s = c.querySelector('h1').textContent;
          u.actualiser(t, s);
        }
      }),
        (window.closeRecord = function () {
          ms.classList.remove('active'),
            document.getElementById(a.openedRecordId).classList.remove('active'),
            (a.openedRecordId = void 0),
            ls();
        }),
        $c('escape', function (t) {
          t.preventDefault(), closeRecord();
        }),
        window.addEventListener('DOMContentLoaded', function () {
          var t = new URL(window.location).hash;
          if (t) {
            var e = t.substring(1);
            openRecord(e);
          }
        }),
        (window.onpopstate = function (t) {
          if (null !== t.state) {
            var e = t.state.hist,
              n = e[e.length - 1];
            openRecord(n, !1);
          }
        });
      var _s = document.getElementById('index');
      window.addEventListener('DOMContentLoaded', function () {
        var t = _s.querySelector('.sorting-select'),
          e = sorting.records;
        function n() {
          for (
            var n = _s.querySelectorAll('li'),
              r = (function (t, e) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                    if (null != n) {
                      var r,
                        i,
                        o,
                        a,
                        u = [],
                        c = !0,
                        s = !1;
                      try {
                        if (((o = (n = n.call(t)).next), 0 === e)) {
                          if (Object(n) !== n) return;
                          c = !1;
                        } else
                          for (
                            ;
                            !(c = (r = o.call(n)).done) && (u.push(r.value), u.length !== e);
                            c = !0
                          );
                      } catch (t) {
                        (s = !0), (i = t);
                      } finally {
                        try {
                          if (!c && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                        } finally {
                          if (s) throw i;
                        }
                      }
                      return u;
                    }
                  })(t, e) ||
                  gs(t, e) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                  })()
                );
              })(t.value.split(':'), 2),
              i = r[0],
              o = r[1],
              a = 0;
            a < n.length;
            a++
          ) {
            var u = e[a][i],
              c = n[a];
            'reverse' === o && (u = n.length - 1 - u), (c.style.order = u);
          }
        }
        n(), t.addEventListener('change', n);
      });
      var bs = n(691),
        ws = new (n.n(bs)())([], { includeScore: !1, keys: ['label'] });
      window.addEventListener('DOMContentLoaded', function () {
        var t = [],
          e = 0,
          n = document.getElementById('search'),
          r = document.getElementById('search-result-list');
        function i() {
          r.childNodes[e].classList.add('outline');
        }
        function o() {
          r.childNodes[e].classList.remove('outline');
        }
        n.addEventListener('focus', function () {
          ws.setCollection(
            ps.filter(function (t) {
              return 0 === t.hidden;
            }),
          ),
            console.log(ws),
            n.addEventListener('input', function () {
              if (((r.innerHTML = ''), (e = 0), (t = []), '' !== n.value)) {
                t = ws.search(n.value);
                for (
                  var i = function () {
                      var e = t[o].item,
                        n = e.id,
                        i = e.label,
                        a = e.type,
                        u = document.createElement('li');
                      u.classList.add('search-result-item'),
                        (u.innerHTML =
                          '<span\n          class="record-type-point"\n          style="color:var(--n_'
                            .concat(a, ')"\n        >⬤</span>\n        <span>')
                            .concat(i, '</span>')),
                        u.addEventListener('click', function () {
                          window.openRecord(n);
                        }),
                        r.appendChild(u);
                    },
                    o = 0;
                  o < Math.min(5, t.length);
                  o++
                )
                  i();
              }
            });
        }),
          $c('s', function (t) {
            t.preventDefault(), n.focus();
          }),
          document.addEventListener('keydown', function (r) {
            if (0 !== t.length)
              switch (r.key) {
                case 'ArrowUp':
                  if ((r.preventDefault(), 0 === e)) return void n.focus();
                  o(), e--, i();
                  break;
                case 'ArrowDown':
                  if ((r.preventDefault(), 4 === e || e === t.length - 1)) return;
                  o(), e++, i(), 1 === e && n.blur();
                  break;
                case 'Enter':
                  r.preventDefault(), openRecord(t[e].item.id), n.blur();
              }
          });
      });
      var xs = es.node().getBoundingClientRect(),
        ks = xs.width,
        Ms = xs.height,
        Es = (function () {
          var t,
            e,
            n = kc,
            r = Mc,
            i = Lc,
            o = Ac,
            a = Sc,
            u = [0, 1 / 0],
            c = [
              [-1 / 0, -1 / 0],
              [1 / 0, 1 / 0],
            ],
            s = 250,
            h = mn,
            f = [],
            l = v('start', 'zoom', 'end'),
            d = 500,
            p = 150,
            y = 0;
          function g(t) {
            t.property('__zoom', Ec)
              .on('wheel.zoom', M)
              .on('mousedown.zoom', E)
              .on('dblclick.zoom', A)
              .filter(a)
              .on('touchstart.zoom', S)
              .on('touchmove.zoom', L)
              .on('touchend.zoom touchcancel.zoom', N)
              .style('touch-action', 'none')
              .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
          }
          function m(t, e) {
            return (e = Math.max(u[0], Math.min(u[1], e))) === t.k ? t : new _c(e, t.x, t.y);
          }
          function _(t, e, n) {
            var r = e[0] - n[0] * t.k,
              i = e[1] - n[1] * t.k;
            return r === t.x && i === t.y ? t : new _c(t.k, r, i);
          }
          function b(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
          }
          function w(t, e, n) {
            t.on('start.zoom', function () {
              x(this, arguments).start();
            })
              .on('interrupt.zoom end.zoom', function () {
                x(this, arguments).end();
              })
              .tween('zoom', function () {
                var t = this,
                  i = arguments,
                  o = x(t, i),
                  a = r.apply(t, i),
                  u = n || b(a),
                  c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                  s = t.__zoom,
                  f = 'function' == typeof e ? e.apply(t, i) : e,
                  l = h(s.invert(u).concat(c / s.k), f.invert(u).concat(c / f.k));
                return function (t) {
                  if (1 === t) t = f;
                  else {
                    var e = l(t),
                      n = c / e[2];
                    t = new _c(n, u[0] - e[0] * n, u[1] - e[1] * n);
                  }
                  o.zoom(null, t);
                };
              });
          }
          function x(t, e) {
            for (var n, r = 0, i = f.length; r < i; ++r) if ((n = f[r]).that === t) return n;
            return new k(t, e);
          }
          function k(t, e) {
            (this.that = t),
              (this.args = e),
              (this.index = -1),
              (this.active = 0),
              (this.extent = r.apply(t, e));
          }
          function M() {
            if (n.apply(this, arguments)) {
              var t = x(this, arguments),
                e = this.__zoom,
                r = Math.max(u[0], Math.min(u[1], e.k * Math.pow(2, o.apply(this, arguments)))),
                a = jt(this);
              if (t.wheel)
                (t.mouse[0][0] === a[0] && t.mouse[0][1] === a[1]) ||
                  (t.mouse[1] = e.invert((t.mouse[0] = a))),
                  clearTimeout(t.wheel);
              else {
                if (e.k === r) return;
                (t.mouse = [a, e.invert(a)]), Vn(this), t.start();
              }
              xc(),
                (t.wheel = setTimeout(function () {
                  (t.wheel = null), t.end();
                }, p)),
                t.zoom('mouse', i(_(m(e, r), t.mouse[0], t.mouse[1]), t.extent, c));
            }
          }
          function E() {
            if (!e && n.apply(this, arguments)) {
              var t = x(this, arguments),
                r = Tt(mt.view)
                  .on(
                    'mousemove.zoom',
                    function () {
                      if ((xc(), !t.moved)) {
                        var e = mt.clientX - a,
                          n = mt.clientY - u;
                        t.moved = e * e + n * n > y;
                      }
                      t.zoom(
                        'mouse',
                        i(_(t.that.__zoom, (t.mouse[0] = jt(t.that)), t.mouse[1]), t.extent, c),
                      );
                    },
                    !0,
                  )
                  .on(
                    'mouseup.zoom',
                    function () {
                      r.on('mousemove.zoom mouseup.zoom', null),
                        Ft(mt.view, t.moved),
                        xc(),
                        t.end();
                    },
                    !0,
                  ),
                o = jt(this),
                a = mt.clientX,
                u = mt.clientY;
              Rt(mt.view), wc(), (t.mouse = [o, this.__zoom.invert(o)]), Vn(this), t.start();
            }
          }
          function A() {
            if (n.apply(this, arguments)) {
              var t = this.__zoom,
                e = jt(this),
                o = t.invert(e),
                a = t.k * (mt.shiftKey ? 0.5 : 2),
                u = i(_(m(t, a), e, o), r.apply(this, arguments), c);
              xc(),
                s > 0
                  ? Tt(this).transition().duration(s).call(w, u, e)
                  : Tt(this).call(g.transform, u);
            }
          }
          function S() {
            if (n.apply(this, arguments)) {
              var e,
                r,
                i,
                o,
                a = x(this, arguments),
                u = mt.changedTouches,
                c = u.length;
              for (wc(), r = 0; r < c; ++r)
                (o = [
                  (o = zt(this, u, (i = u[r]).identifier)),
                  this.__zoom.invert(o),
                  i.identifier,
                ]),
                  a.touch0 ? a.touch1 || (a.touch1 = o) : ((a.touch0 = o), (e = !0));
              if (t && ((t = clearTimeout(t)), !a.touch1))
                return (
                  a.end(), void ((o = Tt(this).on('dblclick.zoom')) && o.apply(this, arguments))
                );
              e &&
                ((t = setTimeout(function () {
                  t = null;
                }, d)),
                Vn(this),
                a.start());
            }
          }
          function L() {
            var e,
              n,
              r,
              o,
              a = x(this, arguments),
              u = mt.changedTouches,
              s = u.length;
            for (xc(), t && (t = clearTimeout(t)), e = 0; e < s; ++e)
              (r = zt(this, u, (n = u[e]).identifier)),
                a.touch0 && a.touch0[2] === n.identifier
                  ? (a.touch0[0] = r)
                  : a.touch1 && a.touch1[2] === n.identifier && (a.touch1[0] = r);
            if (((n = a.that.__zoom), a.touch1)) {
              var h = a.touch0[0],
                f = a.touch0[1],
                l = a.touch1[0],
                d = a.touch1[1],
                p = (p = l[0] - h[0]) * p + (p = l[1] - h[1]) * p,
                y = (y = d[0] - f[0]) * y + (y = d[1] - f[1]) * y;
              (n = m(n, Math.sqrt(p / y))),
                (r = [(h[0] + l[0]) / 2, (h[1] + l[1]) / 2]),
                (o = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2]);
            } else {
              if (!a.touch0) return;
              (r = a.touch0[0]), (o = a.touch0[1]);
            }
            a.zoom('touch', i(_(n, r, o), a.extent, c));
          }
          function N() {
            var t,
              n,
              r = x(this, arguments),
              i = mt.changedTouches,
              o = i.length;
            for (
              wc(),
                e && clearTimeout(e),
                e = setTimeout(function () {
                  e = null;
                }, d),
                t = 0;
              t < o;
              ++t
            )
              (n = i[t]),
                r.touch0 && r.touch0[2] === n.identifier
                  ? delete r.touch0
                  : r.touch1 && r.touch1[2] === n.identifier && delete r.touch1;
            r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1),
              r.touch0 ? (r.touch0[1] = this.__zoom.invert(r.touch0[0])) : r.end();
          }
          return (
            (g.transform = function (t, e) {
              var n = t.selection ? t.selection() : t;
              n.property('__zoom', Ec),
                t !== n
                  ? w(t, e)
                  : n.interrupt().each(function () {
                      x(this, arguments)
                        .start()
                        .zoom(null, 'function' == typeof e ? e.apply(this, arguments) : e)
                        .end();
                    });
            }),
            (g.scaleBy = function (t, e) {
              g.scaleTo(t, function () {
                return this.__zoom.k * ('function' == typeof e ? e.apply(this, arguments) : e);
              });
            }),
            (g.scaleTo = function (t, e) {
              g.transform(t, function () {
                var t = r.apply(this, arguments),
                  n = this.__zoom,
                  o = b(t),
                  a = n.invert(o),
                  u = 'function' == typeof e ? e.apply(this, arguments) : e;
                return i(_(m(n, u), o, a), t, c);
              });
            }),
            (g.translateBy = function (t, e, n) {
              g.transform(t, function () {
                return i(
                  this.__zoom.translate(
                    'function' == typeof e ? e.apply(this, arguments) : e,
                    'function' == typeof n ? n.apply(this, arguments) : n,
                  ),
                  r.apply(this, arguments),
                  c,
                );
              });
            }),
            (g.translateTo = function (t, e, n) {
              g.transform(t, function () {
                var t = r.apply(this, arguments),
                  o = this.__zoom,
                  a = b(t);
                return i(
                  bc
                    .translate(a[0], a[1])
                    .scale(o.k)
                    .translate(
                      'function' == typeof e ? -e.apply(this, arguments) : -e,
                      'function' == typeof n ? -n.apply(this, arguments) : -n,
                    ),
                  t,
                  c,
                );
              });
            }),
            (k.prototype = {
              start: function () {
                return (
                  1 == ++this.active && ((this.index = f.push(this) - 1), this.emit('start')), this
                );
              },
              zoom: function (t, e) {
                return (
                  this.mouse && 'mouse' !== t && (this.mouse[1] = e.invert(this.mouse[0])),
                  this.touch0 && 'touch' !== t && (this.touch0[1] = e.invert(this.touch0[0])),
                  this.touch1 && 'touch' !== t && (this.touch1[1] = e.invert(this.touch1[0])),
                  (this.that.__zoom = e),
                  this.emit('zoom'),
                  this
                );
              },
              end: function () {
                return (
                  0 == --this.active &&
                    (f.splice(this.index, 1), (this.index = -1), this.emit('end')),
                  this
                );
              },
              emit: function (t) {
                kt(new mc(g, t, this.that.__zoom), l.apply, l, [t, this.that, this.args]);
              },
            }),
            (g.wheelDelta = function (t) {
              return arguments.length ? ((o = 'function' == typeof t ? t : vc(+t)), g) : o;
            }),
            (g.filter = function (t) {
              return arguments.length ? ((n = 'function' == typeof t ? t : vc(!!t)), g) : n;
            }),
            (g.touchable = function (t) {
              return arguments.length ? ((a = 'function' == typeof t ? t : vc(!!t)), g) : a;
            }),
            (g.extent = function (t) {
              return arguments.length
                ? ((r =
                    'function' == typeof t
                      ? t
                      : vc([
                          [+t[0][0], +t[0][1]],
                          [+t[1][0], +t[1][1]],
                        ])),
                  g)
                : r;
            }),
            (g.scaleExtent = function (t) {
              return arguments.length ? ((u[0] = +t[0]), (u[1] = +t[1]), g) : [u[0], u[1]];
            }),
            (g.translateExtent = function (t) {
              return arguments.length
                ? ((c[0][0] = +t[0][0]),
                  (c[1][0] = +t[1][0]),
                  (c[0][1] = +t[0][1]),
                  (c[1][1] = +t[1][1]),
                  g)
                : [
                    [c[0][0], c[0][1]],
                    [c[1][0], c[1][1]],
                  ];
            }),
            (g.constrain = function (t) {
              return arguments.length ? ((i = t), g) : i;
            }),
            (g.duration = function (t) {
              return arguments.length ? ((s = +t), g) : s;
            }),
            (g.interpolate = function (t) {
              return arguments.length ? ((h = t), g) : h;
            }),
            (g.on = function () {
              var t = l.on.apply(l, arguments);
              return t === l ? g : t;
            }),
            (g.clickDistance = function (t) {
              return arguments.length ? ((y = (t = +t) * t), g) : Math.sqrt(y);
            }),
            g
          );
        })()
          .extent([
            [0, 0],
            [ks, Ms],
          ])
          .scaleExtent([1, 10])
          .on('zoom', function () {
            var t = mt.transform,
              e = t.x,
              n = t.y,
              r = t.k;
            (a.position.x = e / r || 0),
              (a.position.y = n / r || 0),
              (a.position.zoom = r || 1),
              ds();
          });
      function As() {
        (a.position.zoom = 1),
          (a.position.x = 0),
          (a.position.y = 0),
          es.call(Es.transform, bc.translate(a.position.y, a.position.x).scale(a.position.zoom)),
          ds();
      }
      function Ss(t, e) {
        var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (!n) {
          if (Array.isArray(t) || (n = Ls(t)) || (e && t && 'number' == typeof t.length)) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function Ls(t, e) {
        if (t) {
          if ('string' == typeof t) return Ns(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ns(t, e)
              : void 0
          );
        }
      }
      function Ns(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Cs() {
        var t,
          e = document.getElementById('index-counter'),
          n = document.querySelectorAll('.menu-types-list .badge'),
          r = 0,
          i = {},
          o = Ss(data.nodes);
        try {
          for (o.s(); !(t = o.n()).done; ) {
            var a = t.value,
              u = a.hidden,
              c = a.type;
            !0 !== u && ((r += 1), i[c] ? (i[c] += 1) : (i[c] = 1));
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        var s,
          h = Ss(n);
        try {
          for (h.s(); !(s = h.n()).done; ) {
            var f = s.value;
            Ts(f, i[f.previousElementSibling.name] || 0);
          }
        } catch (t) {
          h.e(t);
        } finally {
          h.f();
        }
        Ts(e, r);
      }
      function Ts(t, e) {
        var n,
          r,
          i =
            ((n = t.textContent.split('/', 2)),
            (r = 2),
            (function (t) {
              if (Array.isArray(t)) return t;
            })(n) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                if (null != n) {
                  var r,
                    i,
                    o,
                    a,
                    u = [],
                    c = !0,
                    s = !1;
                  try {
                    if (((o = (n = n.call(t)).next), 0 === e)) {
                      if (Object(n) !== n) return;
                      c = !1;
                    } else
                      for (
                        ;
                        !(c = (r = o.call(n)).done) && (u.push(r.value), u.length !== e);
                        c = !0
                      );
                  } catch (t) {
                    (s = !0), (i = t);
                  } finally {
                    try {
                      if (!c && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                    } finally {
                      if (s) throw i;
                    }
                  }
                  return u;
                }
              })(n, r) ||
              Ls(n, r) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              })()),
          o = i[0],
          a = i[1];
        (o = Number(o)),
          (a = Number(a) || o),
          (t.textContent = e === a ? a : ''.concat(e, '/').concat(a));
      }
      function Gs(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      es.call(Es),
        $c('e,alt+r', function (t) {
          t.preventDefault(), As();
        }),
        (window.zoomMore = function () {
          Es.scaleTo(es, a.position.zoom + 0.2);
        }),
        (window.zoomLess = function () {
          Es.scaleTo(es, a.position.zoom - 0.2);
        }),
        (window.zoomReset = As),
        n(490);
      var Us = timeline,
        Ds = Us.begin,
        Os = Us.end;
      function js(t) {
        return new Date(1e3 * t).toLocaleDateString(graphProperties.lang);
      }
      function zs(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                s = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (; !(c = (r = o.call(n)).done) && (u.push(r.value), u.length !== e); c = !0);
              } catch (t) {
                (s = !0), (i = t);
              } finally {
                try {
                  if (!c && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                } finally {
                  if (s) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          Ps(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function Ps(t, e) {
        if (t) {
          if ('string' == typeof t) return Is(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Is(t, e)
              : void 0
          );
        }
      }
      function Is(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Rs(t, e) {
        if (t) {
          if ('string' == typeof t) return Fs(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Fs(t, e)
              : void 0
          );
        }
      }
      function Fs(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      window.addEventListener('DOMContentLoaded', function () {
        var t = document.getElementById('timeline-checkbox'),
          e = document.getElementById('timeline-form'),
          n = document.getElementById('timeline-ticks'),
          r = e.querySelector('output'),
          i = e.querySelector('input[type="range"]');
        function o() {
          var t = i.value;
          if (((r.value = js(t)), void 0 !== Ds && void 0 !== Os)) {
            var e,
              n = [],
              o = (function (t, e) {
                var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                if (!n) {
                  if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                      if (t) {
                        if ('string' == typeof t) return Gs(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          'Object' === n && t.constructor && (n = t.constructor.name),
                          'Map' === n || 'Set' === n
                            ? Array.from(t)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? Gs(t, e)
                            : void 0
                        );
                      }
                    })(t)) ||
                    (e && t && 'number' == typeof t.length)
                  ) {
                    n && (t = n);
                    var r = 0,
                      i = function () {};
                    return {
                      s: i,
                      n: function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                      },
                      e: function (t) {
                        throw t;
                      },
                      f: i,
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                  );
                }
                var o,
                  a = !0,
                  u = !1;
                return {
                  s: function () {
                    n = n.call(t);
                  },
                  n: function () {
                    var t = n.next();
                    return (a = t.done), t;
                  },
                  e: function (t) {
                    (u = !0), (o = t);
                  },
                  f: function () {
                    try {
                      a || null == n.return || n.return();
                    } finally {
                      if (u) throw o;
                    }
                  },
                };
              })(data.nodes);
            try {
              for (o.s(); !(e = o.n()).done; ) {
                var a = e.value,
                  u = a.begin,
                  c = a.end,
                  s = a.id;
                void 0 === c && (c = Os), void 0 === u && (u = Ds), t >= u && t <= c && n.push(s);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            ss(n, Qc.filteredByTimeline), Cs();
          }
        }
        function a() {
          var t = Math.round(e.offsetWidth / 100),
            r = Math.round((Os - Ds) / t);
          n.setAttribute('style', '--list-length: '.concat(t + 1, ';')),
            (n.innerHTML = ''),
            n.insertAdjacentHTML(
              'beforeend',
              '<option value="'.concat(Ds, '">').concat(js(Ds), '</option>'),
            );
          for (var i = 1; i <= t; i++)
            i !== t
              ? n.insertAdjacentHTML(
                  'beforeend',
                  '<option value="'.concat(Ds + r * i, '">').concat(js(Ds + r * i), '</option>'),
                )
              : n.insertAdjacentHTML(
                  'beforeend',
                  '<option value="'.concat(Os, '">').concat(js(Os), '</option>'),
                );
        }
        (t.checked = !1),
          t.addEventListener('change', function () {
            t.checked
              ? (e.classList.add('active'),
                a(),
                o(),
                window.addEventListener('resize', a),
                i.addEventListener('input', o))
              : (e.classList.remove('active'),
                window.removeEventListener('resize', a),
                i.removeEventListener('input', o),
                fs(Qc.filteredByTimeline),
                Cs());
          });
      }),
        window.addEventListener('DOMContentLoaded', function () {
          for (
            var t,
              e = document.getElementById('types-form'),
              n = e.querySelectorAll('input'),
              r = 0,
              i = Object.entries(typeList);
            r < i.length;
            r++
          ) {
            var o = zs(i[r], 2),
              a = o[0],
              u = o[1].active;
            e.querySelector('[name="'.concat(a, '"]')).checked = u;
          }
          d();
          var c,
            s =
              null === (t = new URL(window.location).searchParams.get('filters')) || void 0 === t
                ? void 0
                : t.split('-');
          if (null != s && s.length) {
            for (var h = 0, f = Object.entries(typeList); h < f.length; h++) {
              var l = zs(f[h], 1)[0];
              e.querySelector('[name="'.concat(l, '"]')).checked = s.includes(l);
            }
            d();
          }
          function d() {
            var t = new FormData(e);
            t = Object.fromEntries(t);
            var n = new Set();
            (t = Object.entries(typeList)
              .filter(function (e) {
                var n = zs(e, 1)[0];
                return !!t[n];
              })
              .forEach(function (t) {
                zs(t, 2)[1].nodes.forEach(function (t) {
                  return n.add(t);
                });
              })),
              ss(Array.from(n), Qc.filteredByType);
          }
          e.addEventListener('change', d);
          var p,
            y = (function (t, e) {
              var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
              if (!n) {
                if (Array.isArray(t) || (n = Ps(t))) {
                  n && (t = n);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                    },
                    e: function (t) {
                      throw t;
                    },
                    f: i,
                  };
                }
                throw new TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              }
              var o,
                a = !0,
                u = !1;
              return {
                s: function () {
                  n = n.call(t);
                },
                n: function () {
                  var t = n.next();
                  return (a = t.done), t;
                },
                e: function (t) {
                  (u = !0), (o = t);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw o;
                  }
                },
              };
            })(n);
          try {
            var g = function () {
              var t = p.value,
                r = t.name;
              t.checked,
                t.parentElement.addEventListener('click', function (t) {
                  t.altKey &&
                    (t.stopPropagation(),
                    t.preventDefault(),
                    c === r
                      ? (v(), (c = void 0))
                      : ((function (t) {
                          n.forEach(function (e) {
                            return (e.checked = t === e.name);
                          }),
                            e.dispatchEvent(new Event('change'));
                        })(r),
                        (c = r)));
                });
            };
            for (y.s(); !(p = y.n()).done; ) g();
          } catch (t) {
            y.e(t);
          } finally {
            y.f();
          }
          function v() {
            e.querySelectorAll('input:not(:checked)').forEach(function (t) {
              return (t.checked = !0);
            }),
              e.dispatchEvent(new Event('change'));
          }
          hotkeys('alt+r', function (t) {
            t.preventDefault(), v();
          });
        }),
        window.addEventListener('DOMContentLoaded', function () {
          var t,
            e = document.getElementById('tags-form'),
            n = document.querySelector('.menu-tags .sorting-select'),
            r = sorting.tags;
          c(), s(), n.addEventListener('change', c), e.addEventListener('change', s);
          var i =
            null === (t = new URL(window.location).searchParams.get('tags')) || void 0 === t
              ? void 0
              : t.split('-');
          if (null != i && i.length) {
            var o,
              a = (function (t, e) {
                var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                if (!n) {
                  if (Array.isArray(t) || (n = Rs(t))) {
                    n && (t = n);
                    var r = 0,
                      i = function () {};
                    return {
                      s: i,
                      n: function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                      },
                      e: function (t) {
                        throw t;
                      },
                      f: i,
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                  );
                }
                var o,
                  a = !0,
                  u = !1;
                return {
                  s: function () {
                    n = n.call(t);
                  },
                  n: function () {
                    var t = n.next();
                    return (a = t.done), t;
                  },
                  e: function (t) {
                    (u = !0), (o = t);
                  },
                  f: function () {
                    try {
                      a || null == n.return || n.return();
                    } finally {
                      if (u) throw o;
                    }
                  },
                };
              })(i);
            try {
              for (a.s(); !(o = a.n()).done; ) {
                var u = o.value;
                e.querySelector('input[name="'.concat(u, '"]')).checked = !0;
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
            e.dispatchEvent(new Event('change'));
          }
          function c() {
            for (
              var t = e.querySelectorAll('label'),
                i = (function (t, e) {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                      var n =
                        null == t
                          ? null
                          : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                      if (null != n) {
                        var r,
                          i,
                          o,
                          a,
                          u = [],
                          c = !0,
                          s = !1;
                        try {
                          if (((o = (n = n.call(t)).next), 0 === e)) {
                            if (Object(n) !== n) return;
                            c = !1;
                          } else
                            for (
                              ;
                              !(c = (r = o.call(n)).done) && (u.push(r.value), u.length !== e);
                              c = !0
                            );
                        } catch (t) {
                          (s = !0), (i = t);
                        } finally {
                          try {
                            if (!c && null != n.return && ((a = n.return()), Object(a) !== a))
                              return;
                          } finally {
                            if (s) throw i;
                          }
                        }
                        return u;
                      }
                    })(t, e) ||
                    Rs(t, e) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                      );
                    })()
                  );
                })(n.value.split(':'), 2),
                o = i[0],
                a = i[1],
                u = 0;
              u < t.length;
              u++
            ) {
              var c = r[u][o],
                s = t[u];
              'reverse' === a && (c = t.length - 1 - c), (s.style.order = c);
            }
          }
          function s() {
            var t = new FormData(e);
            t = Object.fromEntries(t);
            var n = new Set();
            tagList
              .filter(function (e) {
                var n = e.name;
                return !!t[n];
              })
              .forEach(function (t) {
                t.nodes.forEach(function (t) {
                  return n.add(t);
                });
              }),
              0 !== n.size ? ss(Array.from(n), Qc.filteredByTag) : fs(Qc.filteredByTag);
          }
          $c('alt+r', function (t) {
            t.preventDefault(),
              e.querySelectorAll('input:checked').forEach(function (t) {
                return (t.checked = !1);
              }),
              e.dispatchEvent(new Event('change'));
          }),
            (window.activeTag = function (t) {
              var n = e.querySelector('input[name="'.concat(t, '"]'));
              (n.checked = !n.checked), e.dispatchEvent(new Event('change'));
            });
        });
      var qs = n(698),
        Bs = n.n(qs),
        Ys = n(181);
      function Ws(t, e) {
        var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ('string' == typeof t) return Ks(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ks(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function Ks(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Hs = (function () {
        var t,
          e = new (Bs())(),
          n = Ws(data.nodes);
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var r = t.value,
              i = r.id,
              o = r.label;
            e.hasNode(i) || e.addNode(i, { label: o });
          }
        } catch (t) {
          n.e(t);
        } finally {
          n.f();
        }
        var a,
          u = Ws(data.links);
        try {
          for (u.s(); !(a = u.n()).done; ) {
            var c = a.value,
              s = c.source,
              h = c.target;
            e.hasEdge(s.id, h.id) || e.addEdge(s.id, h.id);
          }
        } catch (t) {
          u.e(t);
        } finally {
          u.f();
        }
        return e;
      })();
      window.addEventListener('DOMContentLoaded', function () {
        var t = document.getElementById('focus-check'),
          e = document.getElementById('focus-mode-select'),
          n = document.getElementById('focus-input');
        if (!1 !== focusIsActive) {
          var r;
          t.checked = !1;
          var i = new URL(window.location).searchParams,
            o = Number(i.get('focus'));
          !1 === isNaN(o) && o > 0 && ((n.value = o), u()),
            $c('f', function (e) {
              e.preventDefault(), (t.checked = !t.checked), t.dispatchEvent(new Event('change'));
            }),
            $c('alt+r', function (e) {
              e.preventDefault(), (t.checked = !1), t.dispatchEvent(new Event('change'));
            }),
            t.addEventListener('change', function () {
              t.checked
                ? u()
                : (n.classList.remove('active'),
                  n.removeEventListener('input', c),
                  e.removeEventListener('change', s),
                  fs(Qc.filteredByFocus));
            });
        }
        function u() {
          void 0 !== a.openedRecordId
            ? (s(),
              e.addEventListener('change', s),
              c(),
              n.classList.add('active'),
              n.addEventListener('input', c),
              n.focus())
            : (t.checked = !1);
        }
        function c() {
          var t = a.openedRecordId,
            e = [];
          (0, Ys.a)(
            Hs,
            t,
            function (t, r, i) {
              return e.push(t), i >= n.valueAsNumber;
            },
            { mode: r },
          ),
            ss(e, Qc.filteredByFocus);
        }
        function s() {
          (r = e.value), c();
        }
      });
    })();
})();
