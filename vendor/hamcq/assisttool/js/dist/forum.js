(() => {
	var t = {
			293: function(t, e, n) {
				t.exports = function() {
					"use strict";

					function t(t, e) {
						var n = Object.keys(t);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(t);
							e && (o = o.filter((function(e) {
								return Object.getOwnPropertyDescriptor(t, e).enumerable
							}))), n.push.apply(n, o)
						}
						return n
					}

					function e(e) {
						for (var n = 1; n < arguments.length; n++) {
							var o = null != arguments[n] ? arguments[n] : {};
							n % 2 ? t(Object(o), !0).forEach((function(t) {
								var n, r, i;
								n = e, r = t, i = o[t], (r = f(r)) in n ? Object.defineProperty(n, r, {
									value: i,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = i
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
							}))
						}
						return e
					}

					function o(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}

					function r(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, f(o.key), o)
						}
					}

					function i(t, e, n) {
						return e && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
							writable: !1
						}), t
					}

					function a(t) {
						return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						}, a(t)
					}

					function c(t, e) {
						return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
							return t.__proto__ = e, t
						}, c(t, e)
					}

					function s(t, e) {
						if (e && ("object" == typeof e || "function" == typeof e)) return e;
						if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
						return function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t)
					}

					function u(t) {
						var e = function() {
							if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
							if (Reflect.construct.sham) return !1;
							if ("function" == typeof Proxy) return !0;
							try {
								return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
							} catch (t) {
								return !1
							}
						}();
						return function() {
							var n, o = a(t);
							if (e) {
								var r = a(this).constructor;
								n = Reflect.construct(o, arguments, r)
							} else n = o.apply(this, arguments);
							return s(this, n)
						}
					}

					function A(t, e) {
						(null == e || e > t.length) && (e = t.length);
						for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
						return o
					}

					function l(t, e) {
						var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (!n) {
							if (Array.isArray(t) || (n = function(t, e) {
									if (t) {
										if ("string" == typeof t) return A(t, e);
										var n = Object.prototype.toString.call(t).slice(8, -1);
										return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(t, e) : void 0
									}
								}(t)) || e && t && "number" == typeof t.length) {
								n && (t = n);
								var o = 0,
									r = function() {};
								return {
									s: r,
									n: function() {
										return o >= t.length ? {
											done: !0
										} : {
											done: !1,
											value: t[o++]
										}
									},
									e: function(t) {
										throw t
									},
									f: r
								}
							}
							throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}
						var i, a = !0,
							c = !1;
						return {
							s: function() {
								n = n.call(t)
							},
							n: function() {
								var t = n.next();
								return a = t.done, t
							},
							e: function(t) {
								c = !0, i = t
							},
							f: function() {
								try {
									a || null == n.return || n.return()
								} finally {
									if (c) throw i
								}
							}
						}
					}

					function f(t) {
						var e = function(t, e) {
							if ("object" != typeof t || null === t) return t;
							var n = t[Symbol.toPrimitive];
							if (void 0 !== n) {
								var o = n.call(t, e || "default");
								if ("object" != typeof o) return o;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(t, "string");
						return "symbol" == typeof e ? e : String(e)
					}
					var p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

					function d(t, e, n) {
						return t(n = {
							path: e,
							exports: {},
							require: function(t, e) {
								return function() {
									throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
								}(null == e && n.path)
							}
						}, n.exports), n.exports
					}
					var g, h, m = function(t) {
							return t && t.Math === Math && t
						},
						v = m("object" == typeof globalThis && globalThis) || m("object" == typeof window && window) || m("object" == typeof self && self) || m("object" == typeof p && p) || function() {
							return this
						}() || p || Function("return this")(),
						y = function(t) {
							try {
								return !!t()
							} catch (t) {
								return !0
							}
						},
						b = !y((function() {
							return 7 !== Object.defineProperty({}, 1, {
								get: function() {
									return 7
								}
							})[1]
						})),
						w = !y((function() {
							var t = function() {}.bind();
							return "function" != typeof t || t.hasOwnProperty("prototype")
						})),
						E = Function.prototype.call,
						S = w ? E.bind(E) : function() {
							return E.apply(E, arguments)
						},
						B = {}.propertyIsEnumerable,
						x = Object.getOwnPropertyDescriptor,
						C = {
							f: x && !B.call({
								1: 2
							}, 1) ? function(t) {
								var e = x(this, t);
								return !!e && e.enumerable
							} : B
						},
						O = function(t, e) {
							return {
								enumerable: !(1 & t),
								configurable: !(2 & t),
								writable: !(4 & t),
								value: e
							}
						},
						I = Function.prototype,
						R = I.call,
						k = w && I.bind.bind(R, R),
						Q = w ? k : function(t) {
							return function() {
								return R.apply(t, arguments)
							}
						},
						T = Q({}.toString),
						N = Q("".slice),
						U = function(t) {
							return N(T(t), 8, -1)
						},
						M = Object,
						P = Q("".split),
						D = y((function() {
							return !M("z").propertyIsEnumerable(0)
						})) ? function(t) {
							return "String" === U(t) ? P(t, "") : M(t)
						} : M,
						z = function(t) {
							return null == t
						},
						V = TypeError,
						K = function(t) {
							if (z(t)) throw new V("Can't call method on " + t);
							return t
						},
						j = function(t) {
							return D(K(t))
						},
						F = "object" == typeof document && document.all,
						J = {
							all: F,
							IS_HTMLDDA: void 0 === F && void 0 !== F
						},
						G = J.all,
						W = J.IS_HTMLDDA ? function(t) {
							return "function" == typeof t || t === G
						} : function(t) {
							return "function" == typeof t
						},
						H = J.all,
						L = J.IS_HTMLDDA ? function(t) {
							return "object" == typeof t ? null !== t : W(t) || t === H
						} : function(t) {
							return "object" == typeof t ? null !== t : W(t)
						},
						Y = function(t, e) {
							return arguments.length < 2 ? (n = v[t], W(n) ? n : void 0) : v[t] && v[t][e];
							var n
						},
						q = Q({}.isPrototypeOf),
						Z = "undefined" != typeof navigator && String(navigator.userAgent) || "",
						X = v.process,
						_ = v.Deno,
						$ = X && X.versions || _ && _.version,
						tt = $ && $.v8;
					tt && (h = (g = tt.split("."))[0] > 0 && g[0] < 4 ? 1 : +(g[0] + g[1])), !h && Z && (!(g = Z.match(/Edge\/(\d+)/)) || g[1] >= 74) && (g = Z.match(/Chrome\/(\d+)/)) && (h = +g[1]);
					var et = h,
						nt = v.String,
						ot = !!Object.getOwnPropertySymbols && !y((function() {
							var t = Symbol("symbol detection");
							return !nt(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && et && et < 41
						})),
						rt = ot && !Symbol.sham && "symbol" == typeof Symbol.iterator,
						it = Object,
						at = rt ? function(t) {
							return "symbol" == typeof t
						} : function(t) {
							var e = Y("Symbol");
							return W(e) && q(e.prototype, it(t))
						},
						ct = String,
						st = function(t) {
							try {
								return ct(t)
							} catch (t) {
								return "Object"
							}
						},
						ut = TypeError,
						At = function(t) {
							if (W(t)) return t;
							throw new ut(st(t) + " is not a function")
						},
						lt = function(t, e) {
							var n = t[e];
							return z(n) ? void 0 : At(n)
						},
						ft = TypeError,
						pt = Object.defineProperty,
						dt = function(t, e) {
							try {
								pt(v, t, {
									value: e,
									configurable: !0,
									writable: !0
								})
							} catch (n) {
								v[t] = e
							}
							return e
						},
						gt = "__core-js_shared__",
						ht = v[gt] || dt(gt, {}),
						mt = d((function(t) {
							(t.exports = function(t, e) {
								return ht[t] || (ht[t] = void 0 !== e ? e : {})
							})("versions", []).push({
								version: "3.33.2",
								mode: "global",
								copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
								license: "https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",
								source: "https://github.com/zloirock/core-js"
							})
						})),
						vt = Object,
						yt = function(t) {
							return vt(K(t))
						},
						bt = Q({}.hasOwnProperty),
						wt = Object.hasOwn || function(t, e) {
							return bt(yt(t), e)
						},
						Et = 0,
						St = Math.random(),
						Bt = Q(1..toString),
						xt = function(t) {
							return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Bt(++Et + St, 36)
						},
						Ct = v.Symbol,
						Ot = mt("wks"),
						It = rt ? Ct.for || Ct : Ct && Ct.withoutSetter || xt,
						Rt = function(t) {
							return wt(Ot, t) || (Ot[t] = ot && wt(Ct, t) ? Ct[t] : It("Symbol." + t)), Ot[t]
						},
						kt = TypeError,
						Qt = Rt("toPrimitive"),
						Tt = function(t, e) {
							if (!L(t) || at(t)) return t;
							var n, o = lt(t, Qt);
							if (o) {
								if (void 0 === e && (e = "default"), n = S(o, t, e), !L(n) || at(n)) return n;
								throw new kt("Can't convert object to primitive value")
							}
							return void 0 === e && (e = "number"),
								function(t, e) {
									var n, o;
									if ("string" === e && W(n = t.toString) && !L(o = S(n, t))) return o;
									if (W(n = t.valueOf) && !L(o = S(n, t))) return o;
									if ("string" !== e && W(n = t.toString) && !L(o = S(n, t))) return o;
									throw new ft("Can't convert object to primitive value")
								}(t, e)
						},
						Nt = function(t) {
							var e = Tt(t, "string");
							return at(e) ? e : e + ""
						},
						Ut = v.document,
						Mt = L(Ut) && L(Ut.createElement),
						Pt = function(t) {
							return Mt ? Ut.createElement(t) : {}
						},
						Dt = !b && !y((function() {
							return 7 !== Object.defineProperty(Pt("div"), "a", {
								get: function() {
									return 7
								}
							}).a
						})),
						zt = Object.getOwnPropertyDescriptor,
						Vt = {
							f: b ? zt : function(t, e) {
								if (t = j(t), e = Nt(e), Dt) try {
									return zt(t, e)
								} catch (t) {}
								if (wt(t, e)) return O(!S(C.f, t, e), t[e])
							}
						},
						Kt = b && y((function() {
							return 42 !== Object.defineProperty((function() {}), "prototype", {
								value: 42,
								writable: !1
							}).prototype
						})),
						jt = String,
						Ft = TypeError,
						Jt = function(t) {
							if (L(t)) return t;
							throw new Ft(jt(t) + " is not an object")
						},
						Gt = TypeError,
						Wt = Object.defineProperty,
						Ht = Object.getOwnPropertyDescriptor,
						Lt = "enumerable",
						Yt = "configurable",
						qt = "writable",
						Zt = {
							f: b ? Kt ? function(t, e, n) {
								if (Jt(t), e = Nt(e), Jt(n), "function" == typeof t && "prototype" === e && "value" in n && qt in n && !n[qt]) {
									var o = Ht(t, e);
									o && o[qt] && (t[e] = n.value, n = {
										configurable: Yt in n ? n[Yt] : o[Yt],
										enumerable: Lt in n ? n[Lt] : o[Lt],
										writable: !1
									})
								}
								return Wt(t, e, n)
							} : Wt : function(t, e, n) {
								if (Jt(t), e = Nt(e), Jt(n), Dt) try {
									return Wt(t, e, n)
								} catch (t) {}
								if ("get" in n || "set" in n) throw new Gt("Accessors not supported");
								return "value" in n && (t[e] = n.value), t
							}
						},
						Xt = b ? function(t, e, n) {
							return Zt.f(t, e, O(1, n))
						} : function(t, e, n) {
							return t[e] = n, t
						},
						_t = Function.prototype,
						$t = b && Object.getOwnPropertyDescriptor,
						te = wt(_t, "name"),
						ee = {
							EXISTS: te,
							PROPER: te && "something" === function() {}.name,
							CONFIGURABLE: te && (!b || b && $t(_t, "name").configurable)
						},
						ne = Q(Function.toString);
					W(ht.inspectSource) || (ht.inspectSource = function(t) {
						return ne(t)
					});
					var oe, re, ie, ae = ht.inspectSource,
						ce = v.WeakMap,
						se = W(ce) && /native code/.test(String(ce)),
						ue = mt("keys"),
						Ae = function(t) {
							return ue[t] || (ue[t] = xt(t))
						},
						le = {},
						fe = "Object already initialized",
						pe = v.TypeError,
						de = v.WeakMap;
					if (se || ht.state) {
						var ge = ht.state || (ht.state = new de);
						ge.get = ge.get, ge.has = ge.has, ge.set = ge.set, oe = function(t, e) {
							if (ge.has(t)) throw new pe(fe);
							return e.facade = t, ge.set(t, e), e
						}, re = function(t) {
							return ge.get(t) || {}
						}, ie = function(t) {
							return ge.has(t)
						}
					} else {
						var he = Ae("state");
						le[he] = !0, oe = function(t, e) {
							if (wt(t, he)) throw new pe(fe);
							return e.facade = t, Xt(t, he, e), e
						}, re = function(t) {
							return wt(t, he) ? t[he] : {}
						}, ie = function(t) {
							return wt(t, he)
						}
					}
					var me = {
							set: oe,
							get: re,
							has: ie,
							enforce: function(t) {
								return ie(t) ? re(t) : oe(t, {})
							},
							getterFor: function(t) {
								return function(e) {
									var n;
									if (!L(e) || (n = re(e)).type !== t) throw new pe("Incompatible receiver, " + t + " required");
									return n
								}
							}
						},
						ve = d((function(t) {
							var e = ee.CONFIGURABLE,
								n = me.enforce,
								o = me.get,
								r = String,
								i = Object.defineProperty,
								a = Q("".slice),
								c = Q("".replace),
								s = Q([].join),
								u = b && !y((function() {
									return 8 !== i((function() {}), "length", {
										value: 8
									}).length
								})),
								A = String(String).split("String"),
								l = t.exports = function(t, o, l) {
									"Symbol(" === a(r(o), 0, 7) && (o = "[" + c(r(o), /^Symbol\(([^)]*)\)/, "$1") + "]"), l && l.getter && (o = "get " + o), l && l.setter && (o = "set " + o), (!wt(t, "name") || e && t.name !== o) && (b ? i(t, "name", {
										value: o,
										configurable: !0
									}) : t.name = o), u && l && wt(l, "arity") && t.length !== l.arity && i(t, "length", {
										value: l.arity
									});
									try {
										l && wt(l, "constructor") && l.constructor ? b && i(t, "prototype", {
											writable: !1
										}) : t.prototype && (t.prototype = void 0)
									} catch (t) {}
									var f = n(t);
									return wt(f, "source") || (f.source = s(A, "string" == typeof o ? o : "")), t
								};
							Function.prototype.toString = l((function() {
								return W(this) && o(this).source || ae(this)
							}), "toString")
						})),
						ye = function(t, e, n, o) {
							o || (o = {});
							var r = o.enumerable,
								i = void 0 !== o.name ? o.name : e;
							if (W(n) && ve(n, i, o), o.global) r ? t[e] = n : dt(e, n);
							else {
								try {
									o.unsafe ? t[e] && (r = !0) : delete t[e]
								} catch (t) {}
								r ? t[e] = n : Zt.f(t, e, {
									value: n,
									enumerable: !1,
									configurable: !o.nonConfigurable,
									writable: !o.nonWritable
								})
							}
							return t
						},
						be = Math.ceil,
						we = Math.floor,
						Ee = Math.trunc || function(t) {
							var e = +t;
							return (e > 0 ? we : be)(e)
						},
						Se = function(t) {
							var e = +t;
							return e != e || 0 === e ? 0 : Ee(e)
						},
						Be = Math.max,
						xe = Math.min,
						Ce = function(t, e) {
							var n = Se(t);
							return n < 0 ? Be(n + e, 0) : xe(n, e)
						},
						Oe = Math.min,
						Ie = function(t) {
							return t > 0 ? Oe(Se(t), 9007199254740991) : 0
						},
						Re = function(t) {
							return Ie(t.length)
						},
						ke = function(t) {
							return function(e, n, o) {
								var r, i = j(e),
									a = Re(i),
									c = Ce(o, a);
								if (t && n != n) {
									for (; a > c;)
										if ((r = i[c++]) != r) return !0
								} else
									for (; a > c; c++)
										if ((t || c in i) && i[c] === n) return t || c || 0;
								return !t && -1
							}
						},
						Qe = {
							includes: ke(!0),
							indexOf: ke(!1)
						},
						Te = Qe.indexOf,
						Ne = Q([].push),
						Ue = function(t, e) {
							var n, o = j(t),
								r = 0,
								i = [];
							for (n in o) !wt(le, n) && wt(o, n) && Ne(i, n);
							for (; e.length > r;) wt(o, n = e[r++]) && (~Te(i, n) || Ne(i, n));
							return i
						},
						Me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
						Pe = Me.concat("length", "prototype"),
						De = {
							f: Object.getOwnPropertyNames || function(t) {
								return Ue(t, Pe)
							}
						},
						ze = {
							f: Object.getOwnPropertySymbols
						},
						Ve = Q([].concat),
						Ke = Y("Reflect", "ownKeys") || function(t) {
							var e = De.f(Jt(t)),
								n = ze.f;
							return n ? Ve(e, n(t)) : e
						},
						je = function(t, e, n) {
							for (var o = Ke(e), r = Zt.f, i = Vt.f, a = 0; a < o.length; a++) {
								var c = o[a];
								wt(t, c) || n && wt(n, c) || r(t, c, i(e, c))
							}
						},
						Fe = /#|\.prototype\./,
						Je = function(t, e) {
							var n = We[Ge(t)];
							return n === Le || n !== He && (W(e) ? y(e) : !!e)
						},
						Ge = Je.normalize = function(t) {
							return String(t).replace(Fe, ".").toLowerCase()
						},
						We = Je.data = {},
						He = Je.NATIVE = "N",
						Le = Je.POLYFILL = "P",
						Ye = Je,
						qe = Vt.f,
						Ze = function(t, e) {
							var n, o, r, i, a, c = t.target,
								s = t.global,
								u = t.stat;
							if (n = s ? v : u ? v[c] || dt(c, {}) : (v[c] || {}).prototype)
								for (o in e) {
									if (i = e[o], r = t.dontCallGetSet ? (a = qe(n, o)) && a.value : n[o], !Ye(s ? o : c + (u ? "." : "#") + o, t.forced) && void 0 !== r) {
										if (typeof i == typeof r) continue;
										je(i, r)
									}(t.sham || r && r.sham) && Xt(i, "sham", !0), ye(n, o, i, t)
								}
						},
						Xe = function(t) {
							if ("Function" === U(t)) return Q(t)
						},
						_e = Xe(Xe.bind),
						$e = Array.isArray || function(t) {
							return "Array" === U(t)
						},
						tn = {};
					tn[Rt("toStringTag")] = "z";
					var en = "[object z]" === String(tn),
						nn = Rt("toStringTag"),
						on = Object,
						rn = "Arguments" === U(function() {
							return arguments
						}()),
						an = en ? U : function(t) {
							var e, n, o;
							return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
								try {
									return t[e]
								} catch (t) {}
							}(e = on(t), nn)) ? n : rn ? U(e) : "Object" === (o = U(e)) && W(e.callee) ? "Arguments" : o
						},
						cn = function() {},
						sn = [],
						un = Y("Reflect", "construct"),
						An = /^\s*(?:class|function)\b/,
						ln = Q(An.exec),
						fn = !An.test(cn),
						pn = function(t) {
							if (!W(t)) return !1;
							try {
								return un(cn, sn, t), !0
							} catch (t) {
								return !1
							}
						},
						dn = function(t) {
							if (!W(t)) return !1;
							switch (an(t)) {
								case "AsyncFunction":
								case "GeneratorFunction":
								case "AsyncGeneratorFunction":
									return !1
							}
							try {
								return fn || !!ln(An, ae(t))
							} catch (t) {
								return !0
							}
						};
					dn.sham = !0;
					var gn = !un || y((function() {
							var t;
							return pn(pn.call) || !pn(Object) || !pn((function() {
								t = !0
							})) || t
						})) ? dn : pn,
						hn = Rt("species"),
						mn = Array,
						vn = function(t, e) {
							return new(function(t) {
								var e;
								return $e(t) && (e = t.constructor, (gn(e) && (e === mn || $e(e.prototype)) || L(e) && null === (e = e[hn])) && (e = void 0)), void 0 === e ? mn : e
							}(t))(0 === e ? 0 : e)
						},
						yn = Q([].push),
						bn = function(t) {
							var e = 1 === t,
								n = 2 === t,
								o = 3 === t,
								r = 4 === t,
								i = 6 === t,
								a = 7 === t,
								c = 5 === t || i;
							return function(s, u, A, l) {
								for (var f, p, d = yt(s), g = D(d), h = function(t, e) {
										return At(t), void 0 === e ? t : w ? _e(t, e) : function() {
											return t.apply(e, arguments)
										}
									}(u, A), m = Re(g), v = 0, y = l || vn, b = e ? y(s, m) : n || a ? y(s, 0) : void 0; m > v; v++)
									if ((c || v in g) && (p = h(f = g[v], v, d), t))
										if (e) b[v] = p;
										else if (p) switch (t) {
									case 3:
										return !0;
									case 5:
										return f;
									case 6:
										return v;
									case 2:
										yn(b, f)
								} else switch (t) {
									case 4:
										return !1;
									case 7:
										yn(b, f)
								}
								return i ? -1 : o || r ? r : b
							}
						},
						wn = {
							forEach: bn(0),
							map: bn(1),
							filter: bn(2),
							some: bn(3),
							every: bn(4),
							find: bn(5),
							findIndex: bn(6),
							filterReject: bn(7)
						},
						En = Rt("species"),
						Sn = function(t) {
							return et >= 51 || !y((function() {
								var e = [];
								return (e.constructor = {})[En] = function() {
									return {
										foo: 1
									}
								}, 1 !== e[t](Boolean).foo
							}))
						},
						Bn = wn.map;
					Ze({
						target: "Array",
						proto: !0,
						forced: !Sn("map")
					}, {
						map: function(t) {
							return Bn(this, t, arguments.length > 1 ? arguments[1] : void 0)
						}
					}), window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
					var xn = TypeError,
						Cn = function(t) {
							if (t > 9007199254740991) throw xn("Maximum allowed index exceeded");
							return t
						},
						On = function(t, e, n) {
							var o = Nt(e);
							o in t ? Zt.f(t, o, O(0, n)) : t[o] = n
						},
						In = Rt("isConcatSpreadable"),
						Rn = et >= 51 || !y((function() {
							var t = [];
							return t[In] = !1, t.concat()[0] !== t
						})),
						kn = function(t) {
							if (!L(t)) return !1;
							var e = t[In];
							return void 0 !== e ? !!e : $e(t)
						};
					Ze({
						target: "Array",
						proto: !0,
						arity: 1,
						forced: !Rn || !Sn("concat")
					}, {
						concat: function(t) {
							var e, n, o, r, i, a = yt(this),
								c = vn(a, 0),
								s = 0;
							for (e = -1, o = arguments.length; e < o; e++)
								if (kn(i = -1 === e ? a : arguments[e]))
									for (r = Re(i), Cn(s + r), n = 0; n < r; n++, s++) n in i && On(c, s, i[n]);
								else Cn(s + 1), On(c, s++, i);
							return c.length = s, c
						}
					});
					var Qn, Tn = Object.keys || function(t) {
							return Ue(t, Me)
						},
						Nn = {
							f: b && !Kt ? Object.defineProperties : function(t, e) {
								Jt(t);
								for (var n, o = j(e), r = Tn(e), i = r.length, a = 0; i > a;) Zt.f(t, n = r[a++], o[n]);
								return t
							}
						},
						Un = Y("document", "documentElement"),
						Mn = "prototype",
						Pn = "script",
						Dn = Ae("IE_PROTO"),
						zn = function() {},
						Vn = function(t) {
							return "<" + Pn + ">" + t + "</" + Pn + ">"
						},
						Kn = function(t) {
							t.write(Vn("")), t.close();
							var e = t.parentWindow.Object;
							return t = null, e
						},
						jn = function() {
							try {
								Qn = new ActiveXObject("htmlfile")
							} catch (t) {}
							var t, e, n;
							jn = "undefined" != typeof document ? document.domain && Qn ? Kn(Qn) : (e = Pt("iframe"), n = "java" + Pn + ":", e.style.display = "none", Un.appendChild(e), e.src = String(n), (t = e.contentWindow.document).open(), t.write(Vn("document.F=Object")), t.close(), t.F) : Kn(Qn);
							for (var o = Me.length; o--;) delete jn[Mn][Me[o]];
							return jn()
						};
					le[Dn] = !0;
					var Fn = Object.create || function(t, e) {
							var n;
							return null !== t ? (zn[Mn] = Jt(t), n = new zn, zn[Mn] = null, n[Dn] = t) : n = jn(), void 0 === e ? n : Nn.f(n, e)
						},
						Jn = Zt.f,
						Gn = Rt("unscopables"),
						Wn = Array.prototype;
					void 0 === Wn[Gn] && Jn(Wn, Gn, {
						configurable: !0,
						value: Fn(null)
					});
					var Hn = function(t) {
							Wn[Gn][t] = !0
						},
						Ln = Qe.includes;
					Ze({
						target: "Array",
						proto: !0,
						forced: y((function() {
							return !Array(1).includes()
						}))
					}, {
						includes: function(t) {
							return Ln(this, t, arguments.length > 1 ? arguments[1] : void 0)
						}
					}), Hn("includes");
					var Yn = Rt("match"),
						qn = function(t) {
							var e;
							return L(t) && (void 0 !== (e = t[Yn]) ? !!e : "RegExp" === U(t))
						},
						Zn = TypeError,
						Xn = String,
						_n = function(t) {
							if ("Symbol" === an(t)) throw new TypeError("Cannot convert a Symbol value to a string");
							return Xn(t)
						},
						$n = Rt("match"),
						to = Q("".indexOf);
					Ze({
						target: "String",
						proto: !0,
						forced: ! function(t) {
							var e = /./;
							try {
								"/./" [t](e)
							} catch (n) {
								try {
									return e[$n] = !1, "/./" [t](e)
								} catch (t) {}
							}
							return !1
						}("includes")
					}, {
						includes: function(t) {
							return !!~to(_n(K(this)), _n(function(t) {
								if (qn(t)) throw new Zn("The method doesn't accept regular expressions");
								return t
							}(t)), arguments.length > 1 ? arguments[1] : void 0)
						}
					});
					var eo = function(t, e) {
							var n = [][t];
							return !!n && y((function() {
								n.call(null, e || function() {
									return 1
								}, 1)
							}))
						},
						no = Q([].join);
					Ze({
						target: "Array",
						proto: !0,
						forced: D !== Object || !eo("join", ",")
					}, {
						join: function(t) {
							return no(j(this), void 0 === t ? "," : t)
						}
					});
					var oo = en ? {}.toString : function() {
						return "[object " + an(this) + "]"
					};
					en || ye(Object.prototype, "toString", oo, {
						unsafe: !0
					}), Ze({
						target: "Object",
						stat: !0,
						forced: y((function() {
							Tn(1)
						}))
					}, {
						keys: function(t) {
							return Tn(yt(t))
						}
					});
					var ro = function() {
							var t = Jt(this),
								e = "";
							return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
						},
						io = v.RegExp,
						ao = y((function() {
							var t = io("a", "y");
							return t.lastIndex = 2, null !== t.exec("abcd")
						})),
						co = ao || y((function() {
							return !io("a", "y").sticky
						})),
						so = {
							BROKEN_CARET: ao || y((function() {
								var t = io("^r", "gy");
								return t.lastIndex = 2, null !== t.exec("str")
							})),
							MISSED_STICKY: co,
							UNSUPPORTED_Y: ao
						},
						uo = v.RegExp,
						Ao = y((function() {
							var t = uo(".", "s");
							return !(t.dotAll && t.test("\n") && "s" === t.flags)
						})),
						lo = v.RegExp,
						fo = y((function() {
							var t = lo("(?<a>b)", "g");
							return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
						})),
						po = me.get,
						go = mt("native-string-replace", String.prototype.replace),
						ho = RegExp.prototype.exec,
						mo = ho,
						vo = Q("".charAt),
						yo = Q("".indexOf),
						bo = Q("".replace),
						wo = Q("".slice),
						Eo = function() {
							var t = /a/,
								e = /b*/g;
							return S(ho, t, "a"), S(ho, e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
						}(),
						So = so.BROKEN_CARET,
						Bo = void 0 !== /()??/.exec("")[1];
					(Eo || Bo || So || Ao || fo) && (mo = function(t) {
						var e, n, o, r, i, a, c, s = this,
							u = po(s),
							A = _n(t),
							l = u.raw;
						if (l) return l.lastIndex = s.lastIndex, e = S(mo, l, A), s.lastIndex = l.lastIndex, e;
						var f = u.groups,
							p = So && s.sticky,
							d = S(ro, s),
							g = s.source,
							h = 0,
							m = A;
						if (p && (d = bo(d, "y", ""), -1 === yo(d, "g") && (d += "g"), m = wo(A, s.lastIndex), s.lastIndex > 0 && (!s.multiline || s.multiline && "\n" !== vo(A, s.lastIndex - 1)) && (g = "(?: " + g + ")", m = " " + m, h++), n = new RegExp("^(?:" + g + ")", d)), Bo && (n = new RegExp("^" + g + "$(?!\\s)", d)), Eo && (o = s.lastIndex), r = S(ho, p ? n : s, m), p ? r ? (r.input = wo(r.input, h), r[0] = wo(r[0], h), r.index = s.lastIndex, s.lastIndex += r[0].length) : s.lastIndex = 0 : Eo && r && (s.lastIndex = s.global ? r.index + r[0].length : o), Bo && r && r.length > 1 && S(go, r[0], n, (function() {
								for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
							})), r && f)
							for (r.groups = a = Fn(null), i = 0; i < f.length; i++) a[(c = f[i])[0]] = r[c[1]];
						return r
					});
					var xo = mo;
					Ze({
						target: "RegExp",
						proto: !0,
						forced: /./.exec !== xo
					}, {
						exec: xo
					});
					var Co = Function.prototype,
						Oo = Co.apply,
						Io = Co.call,
						Ro = "object" == typeof Reflect && Reflect.apply || (w ? Io.bind(Oo) : function() {
							return Io.apply(Oo, arguments)
						}),
						ko = Rt("species"),
						Qo = RegExp.prototype,
						To = Q("".charAt),
						No = Q("".charCodeAt),
						Uo = Q("".slice),
						Mo = function(t) {
							return function(e, n) {
								var o, r, i = _n(K(e)),
									a = Se(n),
									c = i.length;
								return a < 0 || a >= c ? t ? "" : void 0 : (o = No(i, a)) < 55296 || o > 56319 || a + 1 === c || (r = No(i, a + 1)) < 56320 || r > 57343 ? t ? To(i, a) : o : t ? Uo(i, a, a + 2) : r - 56320 + (o - 55296 << 10) + 65536
							}
						},
						Po = (Mo(!1), Mo(!0)),
						Do = function(t, e, n) {
							return e + (n ? Po(t, e).length : 1)
						},
						zo = Math.floor,
						Vo = Q("".charAt),
						Ko = Q("".replace),
						jo = Q("".slice),
						Fo = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
						Jo = /\$([$&'`]|\d{1,2})/g,
						Go = function(t, e, n, o, r, i) {
							var a = n + t.length,
								c = o.length,
								s = Jo;
							return void 0 !== r && (r = yt(r), s = Fo), Ko(i, s, (function(i, s) {
								var u;
								switch (Vo(s, 0)) {
									case "$":
										return "$";
									case "&":
										return t;
									case "`":
										return jo(e, 0, n);
									case "'":
										return jo(e, a);
									case "<":
										u = r[jo(s, 1, -1)];
										break;
									default:
										var A = +s;
										if (0 === A) return i;
										if (A > c) {
											var l = zo(A / 10);
											return 0 === l ? i : l <= c ? void 0 === o[l - 1] ? Vo(s, 1) : o[l - 1] + Vo(s, 1) : i
										}
										u = o[A - 1]
								}
								return void 0 === u ? "" : u
							}))
						},
						Wo = TypeError,
						Ho = function(t, e) {
							var n = t.exec;
							if (W(n)) {
								var o = S(n, t, e);
								return null !== o && Jt(o), o
							}
							if ("RegExp" === U(t)) return S(xo, t, e);
							throw new Wo("RegExp#exec called on incompatible receiver")
						},
						Lo = Rt("replace"),
						Yo = Math.max,
						qo = Math.min,
						Zo = Q([].concat),
						Xo = Q([].push),
						_o = Q("".indexOf),
						$o = Q("".slice),
						tr = "$0" === "a".replace(/./, "$0"),
						er = !!/./ [Lo] && "" === /./ [Lo]("a", "$0");
					! function(t, e, n, o) {
						var r = Rt(t),
							i = !y((function() {
								var e = {};
								return e[r] = function() {
									return 7
								}, 7 !== "" [t](e)
							})),
							a = i && !y((function() {
								var e = !1,
									n = /a/;
								return "split" === t && ((n = {}).constructor = {}, n.constructor[ko] = function() {
									return n
								}, n.flags = "", n[r] = /./ [r]), n.exec = function() {
									return e = !0, null
								}, n[r](""), !e
							}));
						if (!i || !a || n) {
							var c = Xe(/./ [r]),
								s = e(r, "" [t], (function(t, e, n, o, r) {
									var a = Xe(t),
										s = e.exec;
									return s === xo || s === Qo.exec ? i && !r ? {
										done: !0,
										value: c(e, n, o)
									} : {
										done: !0,
										value: a(n, e, o)
									} : {
										done: !1
									}
								}));
							ye(String.prototype, t, s[0]), ye(Qo, r, s[1])
						}
						o && Xt(Qo[r], "sham", !0)
					}("replace", (function(t, e, n) {
						var o = er ? "$" : "$0";
						return [function(t, n) {
							var o = K(this),
								r = z(t) ? void 0 : lt(t, Lo);
							return r ? S(r, t, o, n) : S(e, _n(o), t, n)
						}, function(t, r) {
							var i = Jt(this),
								a = _n(t);
							if ("string" == typeof r && -1 === _o(r, o) && -1 === _o(r, "$<")) {
								var c = n(e, i, a, r);
								if (c.done) return c.value
							}
							var s = W(r);
							s || (r = _n(r));
							var u, A, l = i.global;
							l && (u = i.unicode, i.lastIndex = 0);
							for (var f, p = []; null !== (f = Ho(i, a)) && (Xo(p, f), l);) "" === _n(f[0]) && (i.lastIndex = Do(a, Ie(i.lastIndex), u));
							for (var d = "", g = 0, h = 0; h < p.length; h++) {
								for (var m, v = _n((f = p[h])[0]), y = Yo(qo(Se(f.index), a.length), 0), b = [], w = 1; w < f.length; w++) Xo(b, void 0 === (A = f[w]) ? A : String(A));
								var E = f.groups;
								if (s) {
									var S = Zo([v], b, y, a);
									void 0 !== E && Xo(S, E), m = _n(Ro(r, void 0, S))
								} else m = Go(v, a, y, b, E, r);
								y >= g && (d += $o(a, g, y) + m, g = y + v.length)
							}
							return d + $o(a, g)
						}]
					}), !!y((function() {
						var t = /./;
						return t.exec = function() {
							var t = [];
							return t.groups = {
								a: "7"
							}, t
						}, "7" !== "".replace(t, "$<a>")
					})) || !tr || er);
					var nr = d((function(t, e) {
							t.exports = function() {
								function t() {
									for (var t = 0, e = {}; t < arguments.length; t++) {
										var n = arguments[t];
										for (var o in n) e[o] = n[o]
									}
									return e
								}

								function e(t) {
									return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
								}

								function n(o) {
									function r() {}

									function i(e, n, i) {
										if ("undefined" != typeof document) {
											"number" == typeof(i = t({
												path: "/"
											}, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
											try {
												var a = JSON.stringify(n);
												/^[\{\[]/.test(a) && (n = a)
											} catch (t) {}
											n = o.write ? o.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
											var c = "";
											for (var s in i) i[s] && (c += "; " + s, !0 !== i[s] && (c += "=" + i[s].split(";")[0]));
											return document.cookie = e + "=" + n + c
										}
									}

									function a(t, n) {
										if ("undefined" != typeof document) {
											for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
												var c = i[a].split("="),
													s = c.slice(1).join("=");
												n || '"' !== s.charAt(0) || (s = s.slice(1, -1));
												try {
													var u = e(c[0]);
													if (s = (o.read || o)(s, u) || e(s), n) try {
														s = JSON.parse(s)
													} catch (t) {}
													if (r[u] = s, t === u) break
												} catch (t) {}
											}
											return t ? r[t] : r
										}
									}
									return r.set = i, r.get = function(t) {
										return a(t, !1)
									}, r.getJSON = function(t) {
										return a(t, !0)
									}, r.remove = function(e, n) {
										i(e, "", t(n, {
											expires: -1
										}))
									}, r.defaults = {}, r.withConverter = n, r
								}
								return n((function() {}))
							}()
						})),
						or = function(t, e, n) {
							var o = {
								show: !1,
								audio: !1,
								speed: "middle",
								zomm: .1,
								cursor: !1,
								pointer: !1,
								bigtext: !1,
								overead: !1
							};
							nr.get(n) && (o = JSON.parse(nr.get(n))), o[t] = e, nr.set(n, JSON.stringify(o), {
								domain: ""
							})
						},
						rr = function(t, e) {
							var n = "";
							return nr.get(e) && (n = JSON.parse(nr.get(e))[t]), n
						},
						ir = function(t) {
							nr.remove(t, {
								domain: ""
							})
						},
						ar = function(t) {
							var e = "".concat(t, "-ignore"),
								n = [];
							nr.get(e) && (n = JSON.parse(nr.get(e)));
							var o = location,
								r = o.origin,
								i = o.pathname,
								a = "".concat(r).concat(i);
							!n.includes(a) && n.push("".concat(r).concat(i)), nr.set(e, JSON.stringify(n), {
								domain: ""
							})
						},
						cr = function(t) {
							var e = "".concat(t, "-ignore"),
								n = [];
							return nr.get(e) && (n = JSON.parse(nr.get(e))), n
						},
						sr = function(t, e, n) {
							var o = ["DOMContentLoaded"].includes(e) ? e : "on" + e;
							t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent(o, n) : t[o] = n
						},
						ur = function(t, e, n) {
							var o = ["DOMContentLoaded"].includes(e) ? e : "on" + e;
							t.removeEventListener ? t.removeEventListener(e, n) : t.detachEvent ? t.detachEvent(o, n) : t[o] = null
						},
						Ar = function(t) {
							var e = function(t) {
									var e = !!t.getAttribute("role") && t.getAttribute("role").toUpperCase() || t.tagName.toUpperCase();
									return "INPUT" == e ? "radio" == t.type ? "单选框" : "checkbox" == t.type ? "复选框" : "text" == t.type ? "文本框" : "submit" == t.type ? "提交按钮" : "reset" == t.type ? "重置按钮" : "password" == t.type ? "密码输入框" : "输入框" : {
										IMG: "Image: ",
										BUTTON: "Button: ",
										INPUT: "Input: ",
										CHECKBOX: "Checkbox: ",
										RADIO: "Radio button: ",
										OPTION: "Option: ",
										A: "Link: "
									} [e] || "Text: "
								}(t),
								n = !!t.getAttribute("role") && t.getAttribute("role").toUpperCase();
							if ("A" === n || "A" === t.tagName) return "Link: ".concat(t.alt || t.title || t.innerText);
							if (0 === t.children.length) {
								if ("IMG" === n || "IMG" === t.tagName) return "图片 ".concat(t.alt || t.title);
								if ("BUTTON" === n || "BUTTON" === t.tagName) return "按钮 ".concat(t.alt || t.title || t.innerText);
								if ("INPUT" === n || "INPUT" === t.tagName) return "".concat(e, " ").concat(t.alt || t.title || t.value);
								if ("LABEL" === n || "LABEL" === t.tagName) {
									var o = t.getAttribute("for"),
										r = document.getElementById(o);
									if (r && r.type && "radio" == r.type) return "单选 ".concat(t.alt || t.title || t.innerText)
								}
								return t.alt || t.title || t.innerText ? "".concat(e, " ").concat(t.alt || t.title || t.innerText) : ""
							}
							return t.children.length < 5 && (t.alt || t.title || t.innerText) ? "".concat(e, " ").concat(t.alt || t.title || t.innerText) : ""
						},
						lr = function(t) {
							window.ActiveXobject || "ActiveXObject" in window || /Trident\/7\./.test(navigator.userAgent) ? t.removeNode(!0) : t.remove()
						},
						fr = {
							CSSRuleList: 0,
							CSSStyleDeclaration: 0,
							CSSValueList: 0,
							ClientRectList: 0,
							DOMRectList: 0,
							DOMStringList: 0,
							DOMTokenList: 1,
							DataTransferItemList: 0,
							FileList: 0,
							HTMLAllCollection: 0,
							HTMLCollection: 0,
							HTMLFormElement: 0,
							HTMLSelectElement: 0,
							MediaList: 0,
							MimeTypeArray: 0,
							NamedNodeMap: 0,
							NodeList: 1,
							PaintRequestList: 0,
							Plugin: 0,
							PluginArray: 0,
							SVGLengthList: 0,
							SVGNumberList: 0,
							SVGPathSegList: 0,
							SVGPointList: 0,
							SVGStringList: 0,
							SVGTransformList: 0,
							SourceBufferList: 0,
							StyleSheetList: 0,
							TextTrackCueList: 0,
							TextTrackList: 0,
							TouchList: 0
						},
						pr = Pt("span").classList,
						dr = pr && pr.constructor && pr.constructor.prototype,
						gr = dr === Object.prototype ? void 0 : dr,
						hr = wn.forEach,
						mr = eo("forEach") ? [].forEach : function(t) {
							return hr(this, t, arguments.length > 1 ? arguments[1] : void 0)
						},
						vr = function(t) {
							if (t && t.forEach !== mr) try {
								Xt(t, "forEach", mr)
							} catch (e) {
								t.forEach = mr
							}
						};
					for (var yr in fr) fr[yr] && vr(v[yr] && v[yr].prototype);
					vr(gr);
					var br = TypeError,
						wr = Object.getOwnPropertyDescriptor,
						Er = b && ! function() {
							if (void 0 !== this) return !0;
							try {
								Object.defineProperty([], "length", {
									writable: !1
								}).length = 1
							} catch (t) {
								return t instanceof TypeError
							}
						}() ? function(t, e) {
							if ($e(t) && !wr(t, "length").writable) throw new br("Cannot set read only .length");
							return t.length = e
						} : function(t, e) {
							return t.length = e
						},
						Sr = TypeError,
						Br = function(t, e) {
							if (!delete t[e]) throw new Sr("Cannot delete property " + st(e) + " of " + st(t))
						},
						xr = Sn("splice"),
						Cr = Math.max,
						Or = Math.min;
					Ze({
						target: "Array",
						proto: !0,
						forced: !xr
					}, {
						splice: function(t, e) {
							var n, o, r, i, a, c, s = yt(this),
								u = Re(s),
								A = Ce(t, u),
								l = arguments.length;
							for (0 === l ? n = o = 0 : 1 === l ? (n = 0, o = u - A) : (n = l - 2, o = Or(Cr(Se(e), 0), u - A)), Cn(u + n - o), r = vn(s, o), i = 0; i < o; i++)(a = A + i) in s && On(r, i, s[a]);
							if (r.length = o, n < o) {
								for (i = A; i < u - o; i++) c = i + n, (a = i + o) in s ? s[c] = s[a] : Br(s, c);
								for (i = u; i > u - o + n; i--) Br(s, i - 1)
							} else if (n > o)
								for (i = u - o; i > A; i--) c = i + n - 1, (a = i + o - 1) in s ? s[c] = s[a] : Br(s, c);
							for (i = 0; i < n; i++) s[i + A] = arguments[i + 2];
							return Er(s, u - o + n), r
						}
					});
					var Ir = {
							list: {},
							subscribe: function(t, e) {
								this.list[t] || (this.list[t] = []), this.list[t].push(e)
							},
							unsubscribe: function(t, e) {
								var n = this.list[t];
								if (!n) return !1;
								e ? n.forEach((function(t, o) {
									t === e && n.splice(o, 1)
								})) : n && (n.length = 0)
							},
							publish: function(t) {
								if (!this.list[t]) return !1;
								for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
								var r, i = l(this.list[t]);
								try {
									for (i.s(); !(r = i.n()).done;) {
										var a = r.value;
										a && a.call.apply(a, [this].concat(n))
									}
								} catch (t) {
									i.e(t)
								} finally {
									i.f()
								}
							}
						},
						Rr = function() {
							function t() {
								o(this, t), this.config = {
									namespace: "wza-assist",
									domain: ".xxx.com",
									url: ""
								}, this.message = Ir, this.tmplStyle = [], this.tmplHtml = [], this.registeOpen()
							}
							return i(t, [{
								key: "mergeConfig",
								value: function(t) {
									this.config = e(e({}, this.config), t), this.creatContainer()
								}
							}, {
								key: "use",
								value: function(t) {
									for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
									t.init.apply(t, [this].concat(n))
								}
							}, {
								key: "useEvent",
								value: function(t) {
									for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
									t.setEvents.apply(t, [this].concat(n))
								}
							}, {
								key: "creatContainer",
								value: function() {
									var t = this.config.namespace;
									if (!document.getElementById(t)) {
										var e = document.createElement("div");
										e.id = t, document.body.appendChild(e)
									}
								}
							}, {
								key: "registeOpen",
								value: function() {
									var t = this;
									sr(document, "click", (function(e) {
										if ("assist-open" == ((e = window.event || e).target || e.srcElement).getAttribute("id"))
											if (t.existIgnore()) {
												var n = t.config.namespace;
												or("show", !0, n);
												var o = document.getElementById("assist-open").getAttribute("assist-href");
												window.location.href = o
											} else t.show(), t.message.publish("openState", !0)
									}))
								}
							}, {
								key: "isShow",
								value: function() {
									var t = this,
										e = this.config.namespace;
									sr(window, "DOMContentLoaded", (function() {
										rr("show", e) && !t.existIgnore() ? (t.isShowTopBar(!0), t.message.publish("openState", !0)) : t.message.publish("openState", !1)
									}))
								}
							}, {
								key: "existIgnore",
								value: function() {
									var t = this.config.namespace,
										e = location,
										n = e.origin,
										o = e.pathname,
										r = "".concat(n).concat(o);
									return cr(t).includes(r)
								}
							}, {
								key: "show",
								value: function() {
									this.isShowTopBar(!0)
								}
							}, {
								key: "close",
								value: function() {
									this.isShowTopBar(!1)
								}
							}, {
								key: "showTag",
								value: function() {
									var t = this.config.namespace;
									ar(t), this.resetAction()
								}
							}, {
								key: "isShowTopBar",
								value: function(t) {
									var e = this.config.namespace,
										n = document.getElementById("".concat(e, "-topbar-html"));
									t ? (document.body.style.marginTop = "100px", n.style.display = "block", or("show", !0, e), this.hideModules()) : (document.body.style.cssText = "", ir("".concat(e)), location.reload())
								}
							}, {
								key: "hideModules",
								value: function() {
									for (var t = this.config.namespace, e = document.getElementsByClassName("".concat(t, "-hide")), n = 0; n < e.length; n++) e[n].style.display = "none"
								}
							}, {
								key: "creatStyle",
								value: function(t, e) {
									if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) {
										var n = this.config.namespace,
											o = document.createElement("style");
										o.type = "text/css", o.id = "".concat(n, "-").concat(t), o.className = t, o.styleSheet ? o.styleSheet.cssText = e : o.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(o)
									} else this.tmplStyle.push(e)
								}
							}, {
								key: "creatHtml",
								value: function(t, e) {
									var n = this.config.namespace,
										o = document.createElement("div");
									if (o.id = "".concat(n, "-").concat(t), o.className = t, o.style.display = "none", "function" == typeof e) {
										var r = e(n);
										o.innerHTML = r, this.tmplHtml.push(o.outerHTML)
									}
								}
							}, {
								key: "registeHtml",
								value: function() {
									var t = this.config.namespace;
									document.getElementById(t).innerHTML = this.tmplHtml.join("")
								}
							}, {
								key: "registeStyle",
								value: function() {
									var t = this.config.namespace,
										e = document.createElement("style");
									e.type = "text/css", e.id = "".concat(t, "-style");
									var n = this.tmplStyle.join("\n");
									e.styleSheet ? e.styleSheet.cssText = n : e.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(e)
								}
							}, {
								key: "formatLongText",
								value: function() {
									var t = this.config.namespace,
										e = document.getElementsByClassName("".concat(t, "-long-text")) || [];
									[].forEach.call(e, (function(t) {
										var e = t.innerText.split("。"),
											n = [];
										e.map((function(t) {
											n.push("<label>".concat(t, "</label>"))
										})), t.innerHTML = n.join("。")
									}))
								}
							}]), t
						}(),
						kr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAD///////////////////////////////////////8zMzM5OTk8PDz8/PxcXFzu7u6zs7NHR0diYmJBQUG3t7eqqqqkpKSBgYHQ0NC+vr5MTEybm5v5+fnz8/Po6OjV1dWfn590dHRPT0/h4eHd3d3b29vLy8vFxcWvr6+WlpaHh4dmZmZXV1dubm6MjIwpqEHtAAAACnRSTlMAvfPZlHYzJgQRpdOjTAAAA69JREFUaN7t2mlTpDAQBuAZj1WbTkBuGOa+D/X//7sdDTHRWbTTzqRqq3w/7g4+SRMghPR07m7711dw1lxd92/veh/zpw8XSv+PxdzfwAVzc6+dhz5cNP2Htj9Uhy+pPt3AxXPzNg7AQ15HRB88pH+8fsBL7nq34CW3PiqnancNXnLduwIvueqBp/xCvxAbitZ1Pp0WeVZFoHNuSE6aUGAqMAgQhRCY7Cp5fmhSiiPxKUKU1VkhmQ2EDdjWPJNng7JYMR1UXJ8HWoSa6aTCFbQZzuIw50HNyZlBPP2nQtVvFLxmxoCig7CbjiLcN3meF2WSorClcATHlKoJE2doEaPVkdljZLehfrYsHIwBIFTtyVyhpbBG8k4rJsOtNRrTJcCT+u2jIzS22vvYMYg3ZkRixITG5k+UEroiC1PdMQsaxZpJ1/BVVnNNzTmQTNAMKJXvf4oMqBDakQBUiQEt9aHJEAiZtc1yh0LdH+UQ+sSD6raFT5KgRKvVapKyIBm3HVp9Y6j7WyqOQQ6UCXVEQSja4B1gQHN1REwo3Cb9AVS1HdrA95niD6BSHTAAQtbBKVQRIdl2aAuUnJwjpD34TOWQeAm9xGgnLoEK7VTZn4EZMpSoytVACx9C/RwjhQ9F6hSlQAsfqhR0AFr4UKagEjipy3JDhXJ1jgqOk7/NMIiQmm1g7miYeRNuaNA0YEO1auP0spApRkGDtuocNQzohX73No/xPQOaKaimQZV6lCUMKFGXekWDImTfGUTnzatH+Dk9i3YCCUQo1KfUNbmCDiTIvE3OnKHn4C0NFZowazdEPWVwmzPgzhEqWkiC4yxISCdHtjM86pzB1E5kTlDdHlVRITOFGtC7ZObGc9Chz71x7wC9oCmD+9vEmuxMUM/X6ZDpUpCOiI6cB9YNlfPGJ2mXUNh2KARHaIF0yX5bXrpC0Aj627IMtVOAMwQHcp9G4XujJAOK3ldO5qsvnXWKgUo8AgYEC2Gv+3VF7jUTiDGwIFha66abDiYbWGtOwIRgLAw12A5Pq7sT1i+W4AwZyWqvwOc6spXHGZr/xXgBP4BglHxcU02TssjzvNl/WlMVhwh+BIEsSKvEDQATMlkS1r0XwIbs1N+s5GcA54FAZnPRxQyo3yaIqf7xtQWFKCcAQIXIVpMgHjl8JVIUYTNx/X5ET1RleTGdbut193D+v77x/UL+IW/bDLxtnPC2FcTb5hZv23V8bUDytqXK1yYxb9vefG3k87U10etmS2/bR/8CfLm94E4nnEwAAAAASUVORK5CYII=",
						Qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////8zMzM4ODg+Pj719fWoqKg7OztGRkbg4OD39/d1dXVbW1vIyMj7+/tMTEzj4+OUlJSCgoJCQkLo6Oi9vb1RUVHs7Ozb29vX19fw8PDAwMC6urpwcHC0tLRVVVWlpaVpaWnQ0NCurq6enp6ZmZmLi4uIiIh7e3thYWGg660bAAAABnRSTlMA+uWnfzGozdCBAAADiklEQVRo3u3a7XKqMBAGYK3HJeFEUEHRgqj41dqP+7+805MNs5lhILF2memM758iJTwG1hDbDL4yHj0NgS3Dp9F4oPOHSyHrj3agh3xJ4yH0kOF4MIJeMho8QS95GgyhlwwH0FMe0AN6QA/ot0FRNhFikm3sfQxQnIlAR2S0kwGKP1VQJwcMBxTPyKE+3Q81HYGGkUoA4ICMQ/kA4IDC2hHvH7ghgQEiR80BKtzkgKg/ewD4K/Rm/PNQeCSHoPDHIXKegQdqOjxQ02mH4u29UJgbR2mnBXoXIp3fBW0bDkG2g5XvgDz70w4lASb6LhRfUro/HRDUR0U3QcXhnEqhowKM2EEnVBlpsvWHinc8PYacTig0PRdnb+giReBwCKKsV3QrvaBLkwkUOU2oWOO+SJoxPfSCyiYj5BxaoXAmRBCjZC7e0gcKJw1FZGtoh7ACCr33VWH/Qw/opMz502ypc9phsxZojUfn+qB4hdDVDQ0n2LDxwWuDFhIbvOndzwo76IY2eKTcgieU5PTY/conNr84oZOgVl5Q3aUg1fv3+CpzQssAT+APQWkuwou+SwKvnROa0nFekN5GaaZ/ccZ3WnBAiSkgfV8PUndvxwHVJz/ozyH+4pUF2uKNqfQLrIYpCwQzukm0zQFVpsCpGnIe6A2rwT4DD7S0oA8+iFrRpUv5i+GTsRhCu7zxSXFmgXAkVfZgt2SBcmt8m9Mo0Q5RoSa3QAccVI9W0cmN3/NIljdAG4nnPlkjkAIXNDet/KGinqEmVvvKCSWmWZV4QkmAkThtzPDF3glBhpJI33ZznXLbCRXoiJl+ZxtsrWI3VKjARJqI4z5ph9bKntrPUM3ADcFLLVHkcd0KwVEfsrBnWyJyQ3Tx7IhV1AptAylX+EZi80yfghsyE9tGZNQGQVKWMX01pA65Idil0iERRElm6KgluCDKoRKirgWSuqHKXIg0dkN2wmjzP/NXkjqhq7kKqvzut/JIktQBTQLMHr4LwYKkDggPEidwQDf2qQlNqRDckL/UhMJASXUFF+QvtZf3fL8AN+Qvcf0ZrVkRPBBJK5J4oKa0BrgilDBAtrQ74IYCDsiWBP48AzBAWhKGoqkBA6QlG8rxFt0Luftkao4FgnWuUJEpTSQ4IIhfUiWlSk8x7WOAdIqybPTmN/979AE9oF8C9bWkqrdFYr0te+ttIV9fSxP7W2zZ2/LRf1C1IJ35WNi4AAAAAElFTkSuQmCC",
						Tr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABqCAMAAABnCuSYAAAAw1BMVEUAAAD///////////////////////////////////////////////////////////8zMzP8/Px5eXk6Ojrj4+NBQUE3Nzf5+fn09PRISEjn5+fb29ubm5uWlpbGxsaoqKiDg4N+fn5zc3NtbW1kZGRUVFTf39/U1NTLy8tPT09MTEzw8PCxsbGPj49hYWHr6+u4uLiioqKSkpJpaWnY2NiLi4uHh4ddXV3l5eW7u7vDw8O1tbWsrKyfn5/t7e3Pz8+/v7+8gE6lAAAAD3RSTlMAyDfs3bdeSxoQ5K2klG8zW7abAAAEyUlEQVRo3u2aiW7iMBBAs9tu2z3HTiAOuSDhvinQAqXX/3/Vih0Tb9jER49IK/WpqlQ1ybM9kxknYFXJ11/fP70j3399Rc/lN3hnvl0ePBdQAReWdXUGFXB2Zf2ESvhpnUMlnFsUKoFaUBEfog/Rh4jDgl0zXN7eRA/3sQ/Im4v8fTIkf+NsljF7a9H8ukuKcNNn+oaiQdslpdSn8zcSxR0ix7n130BUaxM1TsheKaKhc7JQm7adJOmqe7KY3cGrRP6MCNxZNHgUQ+gtWrksjOjLRXd1kjG7H8M/BNMGyejMXypqkgx7DcXQvcj7Ue9loogcacuuQBeNLID9l4imhNN4Bjne1CWI0zcXPWRLPwYlcf04p8BUNCGcFgUNesPj9H0zUd/lKd0EPbwVQTbUROTxATox6EJbBJmaiGyCLEAf2ibInb7omSARmOB1eZiYroiN8IwUzKjx3FvqiiJeJz0wZOBiBgV6orGDidADY0JesPREkQiQKYxna09H5OFKjwpDSg8/EmIUJTqiezx2AkXMm81HqWmGy+5piDaYo7RoPtv6oZzJTHc4zHu1qIdHXkMRf7YpK5DRxTapFoWYofOiCfFBSKd0jcf4SlEHWx0UscSL3IIEn4dYJWJueSrQBuGhlk0JR5qoRAO81rbIc0c4TZAQYTKpRLjEI2lNJ12QwIf6qBC1SmsI9cSecSBZO4aHPClEuMKhZPelrOsjjLJC1ChveBshcn3JlFbYKxQiV8w7Dw3405ey4uLqt+Qiym/JrIbSbY1zi2m7EBWKwriWwYDmNoS2XDQ+ye4Hh+QZML64FChLicCd0lxtSeWiOZ415xOKyQkjClFWzBKSY5Lbeq7kIg/PqQFycyqKgPrH1e2RPHbujk21YrQWg8tTowApD3aL5LnJjS6Ri8DBSHDtuPHvtegA0y9wSY76lgcpwcqrEA2zvoWm0BYke0pFy2ngb5sT+fkmGypE7fy2lgKS+6uZz4DTQ3HPsVOIbng7kkA9XF/R8YsSN1CI7nG9KcjAe7ek4+/wP0whCvCwvnRKQZYAjJaMYqNs5XURSmkXLT1siFFWimx1awO6K+/pff7sohRNlGsndg83pfFzPKWIp1QLpIS8K5VtqG2NnarNW5t0RvQQpX35ti7WEMWi2khMbBI9Fez3Ga8XVCUSFcapgUD7sSIUt5datCC8OpizxQDXPS0RHcofydUP5iFoiMRDubMGQ5a8AHqaIuADGz2CEQuC7EBXVOPlecbAgD4/awW6ItFxEtBn3uCF1jcQgW3wbgvpdcUbGgORN5S8rZO+sZuCkQh6xxNHAWjQdAmSUiMRhhZxnkEFaxFOh4GpCAYO4di+YtmGhLPxwFwE/br4RMCDUtZiB95mYChCeiOxO1xuoQg6aJOMhIKxCBmnRNCZ+KeW/hKHonr9iiIp17l977DVjGseBWDj9S5M67n/reE1Igg65B+co13gLhmoRCr2DaJkFQC8WgSsOVJongB0RGroflVqqbf6ANoiNf7DzC2w2DsGYCZS48VR2nUzxyy5xkTTFZlBH2vrp37ge1DM//ZZ+YfoQ/R/ic6gEs6sL1AJX6xLqIRLy/oBFfDj8J3OChbvC36v8+Ic3pXzC+vI1ed35Mo68BtVKaeQ+hFKXwAAAABJRU5ErkJggg==",
						Nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEX8/PwAAAD///////////////////8zMzM3Nzfg4OBERERRUVE+Pj6kpKTn5+fi4uKFhYVubm5YWFj4+Pj09PTAwMCbm5vs7OzZ2dmSkpKKiopNTU1BQUFra2vw8PDPz8+ysrKvr6/FxcWOjo54eHhiYmLLy8u4uLhwcHBmZmY7OzvS0tKVlZWAgIB9fX10dHSqqqpJSUleXl4uaMzTAAAABnRSTlP+AOWnfzGF0eAUAAAD5UlEQVRo3u3a2XqqMBAAYLpNIhakrCog7vtW3//hjoeJRhrwZNTynQvnplVC/jAJCWkxXl5ePt5e4Rfj9e3jiByhdwN+OYz3v9A71BDvL8aHATXEkXmDWuLNeIVa4tWAmuIJPaEn9ITuhFqB5YzTw2K+7fRXPn73cKg3GCeMcc6OgT/ddfZ4KJgzJC6Ds+/QfiRk9GPBlFib1sOgYVxGSKrrPwSKdsV6MQpfJbMHQG2TS4OZ6cgazPr7cOvyy2yO7oYCzs8pSgeXPe9NO+bZ4ql/HxSer2YZRurh6eR8PG7dA41lh/cqBkrzVOQzux0anTKzu9LcfiJKfbZuhfpMhAXXwnZR4k3/NijjoneGcD28ncje102QnYhebuBnnTHTuQXChPBEazJbCymgQ3uRuBVoxRyLmx4VipbYxD7ohd/EBHSoUBfPG4Fu2J+YgYgGRZiJpCwTQycsG8eWaBoN6uBZg7IKj98zo6Sib7ykHgUycGjHZSs6r2r3DKE9BRpWD9ZG3hdp6Q2Rn+RSoHGeuSZUQl9QeUmsQYDyynhIhLxlfpqlD7WxaTYRgk2eiLk+hCP1G6jQLD9vqQ1hy7hDhiKRCW3IxZuIDIGZQ0NtCGeTjA5NcDToQgZmoDBrBYemCJycTp++Cnly8pyvdaEeQp4yPErD/zlz8a4uZGMNSvKVUBaGMG/P5g6IVUdXhYipuzyyqIYyNXXEwVCY77fnTloWtxKBslzyji4EWGn7R0EMMXuLT15xZUxpwxuaefkZ/T7CtS/QhnY4nMiQL9YJbQgHj0uGhthvhjY0FbciFcJNwQS0IQNHQ58KmbheakLytplQIJmIFQESG5Y2DZqL9ZIA+fhYt4CqacMBNVY4FNb6kJwIpqCGW3WtBzzHJkFtVv2M1o1Lt0wBXtCY+JA/lwNPL7xY9CsFkpfE27rQjosLIkLQFTurSM8JRcNsMuSLLazr6TiB3L/TIHn78bmGNOVM3g9UCPZCcu1/OZYomUQ3QeCIdpqrq4zhMAFlcBtkTLioYX+lVANLyQ6iQ9CLT1IcVBSJHPmnNLN1KwT+gjMRh6zseMixgJToEEZXPu80rWI93nAsGFWiQzBgTFrm1grarchuZIPOhDPJmIpEhiAzL7PDi7+I3y3DUSQyBN4aa62Myd/KpUSGZLS2rIrizJ1hISnRIRl29zO3FGaHN7MikSFZLhgnxZ5hy9TC2UmRaJAajcEojRN+rMpNN5ZcqhTJJkDkQEmdxQkQSVK3pQSILHHl+8dCKKnPdr8CwcB1lfXi//2v5RN6Qk/oCT02antJrLbX3mp7ka+uVxPre9myttdH/wB03iKbr43v3gAAAABJRU5ErkJggg==",
						Ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzM2NjY4ODj7+/tSUlLi4uJERESTk5OFhYX4+Pjn5+fAwMCkpKRYWFhBQUH09PSbm5vs7Ox2dnbZ2dlra2tiYmJNTU08PDzPz8+ysrKvr6+pqamJiYmOjo5/f3/w8PDLy8t7e3twcHDT09PGxsbk5ORmZmZeXl5JSUm3t7e6urrPoq9IAAAABnRSTlMA+uWnfzGozdCBAAADxklEQVRo3u3a7XaaQBCAYZM0M7sIyJcIgkHFbxOT3P/NNd3ZIoRod4zh9IfvjzanUR9YB8RTeh89PtzDD3b/8NhT/bqDH+7ul3Kggz6kxzvooLvH3gN00kPvHjrpvgcddYNu0A26Qd+E7CAcpNkh3y7d6S4GRgxoNUuHiFLgR/R35BbXh4ItElFP4uvIvyZkTSfEtBO4tK8G7SdtoE6V8VWgJG0ul5RCSNmghu9XgMaOrF5QoJMtwtnbdD7aRAJr2sL6LhRIUS1RNnuGY97adbD6ZRZ/DxpVe/M0SqDVOq9WdGJ/A7LSao7L1Yk97ldbUlwOLQRSqX1m9If6UcPnS6Ep6kI4lx+RJPrxZVAh9Jrs4Xxe+nciLoL8IT1bv8tGM+NeAkWSDkYfDHK1FPChuV64HRi1pYc7HhdKnlA1BbPivpKEy4VKWrgFmObTlomEByWSDg0PjAsFbRoPcmmHZmCe9UonkRUHsmi0JxYweqO1m3OgfTWsnCL1pIgDpULtEPB6R5XNgNQEiRET8tTT5NwcGqPKB2ZLtRBbcyhUM/cK3N4U9GQM0ZaJARtK9EoYQ5E+iNg5CtobQ3Q2KfhQTtNgClmoSqBWcOh/Wdb4/B6IP5BrCq0I8pofGqeKP5+5ZGkK+ahqLX6r1gfDSI3r0hR6bkN4urINMZfOgmMvp6Hi89KJkjkMq/o/bY5X4PQHJZon3pI3DEAvOv7Ef5XnQb1MjXdoDPXVxr4BO/rsC4yhFGkFuMWoso0hGp6IDe2VIyxjaF0dirwWagNzMIYsGqrpRedUOTKH9GGTMx29EDsGNMXmgHMui1+BAcV0WffCcnb63MeBQJ8I1hzoQO/sMwsaI3InPKAdSoEFwZY7eN5Ev69MSO+SNJ6HlE62G2BCUOpvVomZM9Ib5rOhWH+FjTyzN4gKgQtVh5/YGkhridXxwIZgrqXIB+qfjxwmfIgunuj5zu4sYw1QQwVcBlm51K8wt+Bkdi6abxAfgtVEaGkSwNclA5TaEY59KQTxi0Ddofjq9yNJD2hKfAis8njx0w+br+PtN8Q0JT5EzRCPlrMJg7Gd+HYxc3OBR8ZpSWwICqe+OrL5g/45tAYtiQ2B5wqB58ptAGhIfIiylyhPIAKjdwBoSXyI8hdDFG1GYroDqiXxIcoKNh+WqCNPWegDZSARZJY9W2SToUTpRNkyHFtAtSWfBfGrpByOMSCW1P5ayoDYkoR6DIglta/tfgSC2SEK4VP/7/9a3qAbdINu0HXr7Caxzm576+xGvq5uTezuZsvObh/9DX0gIQxCgyCMAAAAAElFTkSuQmCC",
						Mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEUAAAD///////////////////////8zMzM5OTnT09M/Pz/7+/tGRkY1NTXv7+9OTk7c3Nx6enpYWFjo6OjFxcVfX1/39/fW1tbMzMy7u7usrKyNjY1oaGhTU1Pz8/Pk5OTQ0NC3t7eysrJzc3NKSkqjo6OdnZ2Tk5OAgIDr6+vg4OCXl5dvb29ra2tjY2O+vr6Dg4Onp6eJiYmMMDgYAAAABnRSTlMA+uWnfzGozdCBAAAC8UlEQVRo3u3ay3LiMBAFUAzhCmxjg23wA8wbwpsk//9xk4nUyC6YmgVqVRbcDVBenFJJ5W4JNb7TbjUdsMVpttqNn7zxKWS9/TiwkG+p7cBCnHajBStpNZqwkmbDgZU4DVjKC3pBL8gKNN+8LwPUwwDtT+I7boFKOCAvEjIfHigs0FZQTiNQOKCJuGVIE8UCuUInPECGA+qIStw5KEwQcZ0cFB4op7XX+wTACHWnt0UxBjgheAOSBiNWCHgn6RLwQih6SipjXggJLT4/5YWQ+kpyE14Is5CW+ZIXQjAUKkdeCKMVSTuPFQK+SDpPeSFsSIr2vBByWubrPi+EzKVlnvFC6K+pbix4IewjobLhhTA9k/TFC8HbkbQasULAUbdHvBCWVDfCGS+ExKW60eWFdN3oJLwQ4pLqRsELIbgIlXdeqNoeeawQMCZpMuWF8EnLPIp5IVx13eCFMHf1foMVwiFUkr/nhXR7NOCEnOAwX7hqSKahuJ/lxXa8Ow1DSVBGhqFI3IVnRPk/oA9j0MKTn+XjAQWmoI1YqrL3yIn6MARthQgd+TZdV4WeH11W48SDCYj6BNXLFZKYLJI0nhqtsLSPLdXGwpez4plvt6ggXGvdfmEa0huWoRqSK3sgzzC0E7cktTO2pVHIGQidi+qL5ZBKhpMTSlZdHCI3B3krqmyybJ9VcZCPI2NQdiYnVSNLa+swMQXd6mcffbWFUMVCPh+agrQDnOR39VL7oDkzCa0PANCtleyZnLPJ01CknXBWPTjuqV9qzrrPQjvtxJDJqhWO5uz0LDTrKKfcgzKUQ1LwiubsOQiLzt2xY1I7XU3lr+2zEGa70p8UDyauE1S71PNz0OPkekeUU+O4YoCoMXHjz1BQjhwQNSY9cYsbsEBeSAA5V7BAKOrO5ACAAar3Wr1BChkGCHOaH3ccg8IB4er/ZdabKXRYIIwWx23m4T6//w/fF/SCXtB/Yu1KlbVLYtauvVm7yGfraqK9y5bWro/+AdOIGl9J8J/ZAAAAAElFTkSuQmCC",
						Pr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAUVBMVEUAAAD///////////////////////8zMzPz8/NZWVnAwMA/Pz/a2tpzc3P4+Pi6urpOTk47Ozvu7u6qqqp6enphYWHS0tLHx8ebm5uTk5Nra2tiB1jKAAAABnRSTlMA++WnfzGVrfkxAAABBElEQVRo3u3aW46CQBCF4S6QU+04w8XLzOj+F6qCLZrYSSfaFSDn38CXEOCljrtUlYUgW1KUletbCTInq96BQRepEhgklSthUukKmFQ4gUniYBQhQoSWDYk3gbb7TtsGT+WA6lav7fBQFuhf+7oaY1mgkw79YiwLtNahL4wRAqEQIRAKEQKhECEQChHCkiEf7bAZanysOhna7jca7RtDPxpt3aRBvlVNguLtkqCjvg11PgU6vA/p36Sgjzy6Sb0MH3i9p/bBLvJfR4gQoVuEQChECIRChEDo3qyPIC/POrM+VL08vc37mHiNECFCS4esJlVmIzGz2ZvZkM9qmmg3tjSbj54BcxwE/PC391YAAAAASUVORK5CYII=",
						Dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////////8zMzOysrI3NzdgYGBcXFzOzs6VlZU1NTX8/Pz39/dmZmZFRUW8vLyrq6uenp6BgYFwcHBXV1dBQUH09PTh4eHZ2dnHx8eSkpJQUFBLS0s8PDzl5eXU1NR0dHTw8PDb29vAwMCvr6+mpqaMjIx6enrr6+tiYmIKA4ZdAAAAB3RSTlMA+uWnfzED0RzAUQAAAf1JREFUaN7t2tlSwjAUgOGyeQ6B0n2je9kFff/HUybRGUenSROaUSf/NeQbaHJBONZ7i9kURmw6W1j3nuYTGLnJ/OkdmoOG5pa1mICGJgtrBlqaWVPQ0tQCTRnIQAb6J9DODpcDO5f5UKioW5TJ8S/eACi/OihdGwpDRYtKJa4YtA9QsdQTgV4CVC4RgFwfH9CSD12QFVyj5cDiA0HaNudBboO0jQsSFSukxTwoRNozyOUxKXA50I2+bgWylewI2hyIbbk9SJewr74fKhQ+EOtEl/D7IZu+qgaFtngv64dCla3AyugG74eWH+dNIbrviIH+IxSla07+Jn8AdEN+pM2VoT2KRDbKUOQISakyVAk55KoMuRnhOw7ZKUNwTLb4ra9455ePP0f2x8P/moEMZCADGchABjKQgQz0c3u6TDw65BG8V40OQYQOOimMD0GVpNHf/rFsoCHQZXSoolCsAjX0UrUfKimUKDjsRK/7oePnHa90Z7rEoR+CTPUK0mUrRByoZjfxR1koQtqOA52Q5ntyjt3R978CB4IDk5pQ4jm91ARpFRcqCbK6bDWwxkHWK3AhiFG97U4AglTZcc4gAnkHRYeEwINYtaPitDaIQnDypZlu44EQxCpiv+nIwIL1Lfxkft9/5QYy0DhpGxLTNvambZBP12iivmFLbeOjbzu6QQG065M4AAAAAElFTkSuQmCC",
						zr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAk1BMVEUAAAD///////////////////////////8zMzM8PDyQkJDv7++pqal0dHRJSUlZWVk4ODj8/PyxsbH39/ejo6Nvb2/5+fnOzs6fn5+3t7ebm5uXl5fi4uKHh4d+fn5nZ2dMTExERETo6Ojd3d2/v7+Dg4N5eXnIyMiVlZVTU1Pz8/PU1NTQ0NCMjIzY2NhgYGCtra3alU/RAAAAB3RSTlMA+uWnfzED0RzAUQAAAoNJREFUaN7t2ttu4jAQgGFO7UwwFDvHpuRAIMBCgfb9n27JxNpuF21jSMcqUv47JOCLIyLI4N65h+EAGBsMH3pVj6M+MNcfPZ6hEVhodD5vfbBQ/6E3BCsNewOw0qAHluqgDuqgDvqBkIj98fX5sbgOes3x1vKDOaSO2KZUmUIBtitQZtAY23Y0glbYvpMJtEGddK5Noi4wgDz97HQJ17c86mPcN0MRUhnc1hqpbTMUI/V6I3RCym2GJkiJG6E9Uj475HVQB1mHwMGqmB/K8Jwj+CGRIxYlsEK6VeQBO6S7fyicbNaRBcib4bkjPzRHKvC4oRzrZktmaIa64tUShLLkh3Q+O5RLpNaKGXK3DlK5YIZgtUBqlzBDIN6QKiJmCMINUjJmharmWDfnhiCWSG1CZgiiAqk3wQxBskNqsWKGYJ8j5WyZIVBrpOSBEUrK9+dx5iA144JCAFEbOsUDJQEAvOBHBbBApwJjAO/pA3r+3ntYDR0cxEUI4KJOjpX5Xbk5tJF6Dap6GLjlwfvyOgodpNYJ/JuqC8PQqwo/QTpHAGyrq1VdMTnR4f/alZcQHvXUym2EVhKNO1xCMgFY6SV933Qr+wwV1TFO9fzEbYRgagwFQGVILZIUz0X1J2rWDCnjNU3+Ptu7JSwlfT+M6bEwmakG8qpR43aHMqvemJakX+uZTYlL/xc1p150z3V+1SSCj/Zk0pJ0Ae/cO8XLH/wskFjUTNxwwbYvmTrFJoJP/Yi/DKxD5XraWDZRraEUjXpTLaETGua2hN5NobQltDWF/JYQ5GbOYt8W8sazp8Z2qbij66iDOgg6qIP+dMeQrU1i1ra9WdvIZ2tror3Nlta2j/4GQjRJ2VA0dAoAAAAASUVORK5CYII=",
						Vr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzNDQ0OlpaX7+/vq6upQUFDk5OTf3983Nzfx8fHDw8OSkpLS0tKDg4N+fn5bW1v39/fZ2dmYmJiLi4tVVVV5eXljY2M6OjrKysqioqKdnZ1zc3NnZ2dfX19LS0tHR0e/v7+7u7u0tLSurq5sbGw/Pz+qqqpZWVmIiIjs7OzFxcURI+eeAAAABnRSTlMA+uWnfzGozdCBAAADWUlEQVRo3u3aaXOiQBAGYI+1wRkuRRRFUeMZjxz//89tVnnH1JaQbqywtbv0tyTdPjJMzwwVGh/RabfoG6PV7jQu8aNJ3xzNHxeHKogPqdOkCqLZabSpkmg3WlRJtBpUUdRQDdXQPw6p2BVkl4fOqWXNxJQc2lm/YqiEZXJoZV1iLiyTQ/YV6tKnqKH/BQpUJVDPsdIoKIT2yWn9/iCk+pdPnRVBi8vP/YegYGWhPXOhIL3+4hiUh7RjZXHOh0LkJFoOGQfxng+5JsnR5aC3m5OofIiebtJbGUjNLMRQUwE0GprEmSoBDUx5NCruo9HUpA7k0LMpXny9MixN8rMU0ieUdjlLUBfZJy2Enm7Xw4FogfwnGdS7DToPoggVPRH0gvmmuJAaokQC7bKi1OVvE16aFe0EEC5oLNmPxrgkPhSj05UEUlhJYjb0mlUcZDvsISubcCGVfdZWySDU2YoJzc0dkkHmLs2ZEPJdKeThGzKhdbY3yE9BSbaI8yDlX9P7cqh//ZuvWJCHxpND+6zUY0E93CI55GK940BY8k90P5yijSfFt2BAGGgnB4owOvdig9vLgSaFqzBpGx+Vv0hOOBAWoBXlSa/DY96OnR1oXlnQAM0gD0ADydC9yAj50OFIs5EzZjIsWdAB7S13FPYXUcN6csgTNazGWVAO4dSpWRAWmYHYQTPbxIOOmA1l58KRCeHUGUodPJMtmZBnlRy7AaYRE8ICnWqZo1Msx1xojEsqd0FjNqT9rGc9UROhSrMhmhY/gxQ/6UyJD4XFzyDFTzqhADLf7uSxB+5kRkECuT7O+QHPCXDC910RRH0MxEpxHLVCfp9k0ChB5VQxnCmyk5EQothH7Vp/5eg1cv2YpBCdLcQ2LHbCrUk9kxyiiSn3z6pg2Lq+SZyQFELbIpx9XtLeQQ5aVQ6po3WL9fxeynxo3eKoxBCkyPoUydL9rUeXyee/R3DkENrJxCZa7GI3CNx4t5hiChQ0EB+inm2xwu7RYxDpFcdZaSoPIfbbr5gt5uRjEI2WduGojUf0MASq6+QxThfMgxAinGzujNkEqxMD4od7iNY2DHsdHdBXPEgYgRvPw9gt3A//un/41lAN1dAfgip7Sayy194qe5GvqlcTq3vZsrLXR38CNzUbwKsmamQAAAAASUVORK5CYII=",
						Kr = function(t) {
							return "<div class='topbar-html-content' id='".concat(t, "-topbar-html-content'>\n        <div id='").concat(t, "-reset' class='topbar-html-content-item'>\n          <span>Reset</span>\n          <img src='").concat(kr, "' source-src='").concat(kr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEUAAAAAvssAv8wAvswAv8sAv8sAvssAvs0AxNEAv8wAw9IAv8sAvsv////x+/z3/P38/v71/Pz4/f0Fv8xe1t7u+/vK8vTz+/waxNASw8/g9/jl+PosydTF8PNz2+JS09ye5us2zNY8zdfA7/Jp2OBZ1d0kx9KY5Op53ONu2uJ93uTa9vez6++C3+VK0Nrp+ftCz9jQ8/Wq6e5k2N8JwM2P4uiT7n99AAAADHRSTlMA2b69u5R2MybzEfI7x2vHAAAEAElEQVRo3u3a2XLaMBQGYNKkadIeS5aM9x2D2ZdC+v6v1gTJxqkHcqSAZjqT/yqJTT50LAlbaNDk6fHh7hmumue7h8enwfv8uIcb5f5H1/kON8z3lvn5DW6abz8ldENHSjp106/eDzCQtx5xDwZy/zp+wEieBo9gJI+DBzCSh8EdGMnd4BmM5HkAhvIFfUHaULjLx7NZNp+UASCiBTnlwiPcJcy2OSUuo+l6dAOoLHzCrfexCSlG14UmkW93hK61HDpXg4Yxsc6HbPPrQLVHrMvxvQRkXvaxN9aDFtT+p1qU9f7EMtkprbcjew0orPxulbjrTRfj8TwrKpd2G8rSEF4zpcffSmWo3lKrCeWrYXfwBPmqY/Ho7Zh3/NmdqEIJaWtEyDroD61D5Lfl2yYAv8W5Q0UoOFUmOteJNzFrJBZoQjVpnen5seJkp64RaEFhLP8BdXeXC7yksk1LLSjl0vFCuBwnZfJUpgHNfVk2z/l4vq247HvqUNK8yQo1la3k6eqQJy4Q914AlZTrQbkonP0b054wSZLStXUgJ5YXKEEwlu2S11AdaEKEkyE+eKOmKTrQUrwiRhRu41r60Eg0yN/Ax5n5n4AKUY0IENlZfWiEhYg4/wCY9K4RXwESkpWjDqDyJ6bdxFPAQmsx+FagGTSUisrlgIs+xESpA0BFHwoE5AIu+lAphmAFuOhDcv6Zgk42RbHBQnN6nLgzHWds2RYvkFDGj6NoruEEohttcNDsONTZWAPK2fE9zm4NyWLwDAcd2PEaLTSgP2LWR87euX6v28s5BQeNxDhKNaBUDPURDgq59swgp/0AB8nTeajs1M3khYS85gNZNWMBVVhoIWq3V4ZWohRrLFS2pVbLC5O3DFjIETc2bK06XCUEoHgXRBw1aCtuows8VPo63SEnsnJ4CCLrmEilSY580RIAlO+9pyrzHJNlUIGgeZrYoZ1SPk1sHSVINslyQ8XC+WJCVX7io56DG0KeaJDtgSJUU0tBctLm9EQVah9HWPXyseMxefIclCGo0G0KmxU9noIGFG5t+fJlctHZuc3KSRzqQFC77VJgdmEtaMosGVKDFgSJ1cSPN2eYYdQ6VgCaEATEbqno4PSPrwk5rRcnoA1BHfFTq+gqD7rKcE9PreFxDZ+AIEzfralStyqy+Xi8mKYuJ50jfhWCLiQzZ/1V4v6fFgCfhSDxfOtyiFeDBtRPfnklPx4CXAcCZ7IkZ76b8KMJgD7Uz6ggvW9bOGFFCYCG0NY6ZcwllNs2Iy4n3qJ0ANCQWoJyMs9ms0O+O9+d/6/v+L4g85CpbQa/jG2cMLYVxNjmFmPbdUxtQDK2pcrUJjFT296MbeQztDXR7GZLY9tH/wJaqhlff2pFzgAAAABJRU5ErkJggg==", "'></img>\n        </div>\n        <div id='").concat(t, "-audio' class='topbar-html-content-item topbar-html-margin0'>\n          <span>Sound on/off</span>\n          <img src='").concat(Qr, "' name='audio' source-src='").concat(Qr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAnFBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////3/P35/f0Mwc39/v70/Pxt2eHw+/zu+vvl+PoGv8ys6u5R09spyNPX9fff9/gjx9Imx9KF4OYdxdEPws7p+frL8vQZxNDQ8/VX1Nwyy9UvydQTw8983uRe1t687vGy6++d5utH0NlFz9lx2+LH8POa5eqT4+k/ztil6OyO4uhm2OA6zddz/xLXAAAABnRSTlMA++WnfzGVrfkxAAADxUlEQVRo3u3abXeaMBQHcNuuNwnJglFB6wNK1epmrW33/b/bXC7bZeMAmdvlnJ7j/00hgj8DIb226Z1zf3d7A2y5ub277/l84lLI+uQd6CBn6Z6zP9Sn+94ddJK73i10ktveDXSSmx50lCt0ha7QFfpo0OjYV6q/H5XbGCC3l0qco+WeGhkg92xEEZ0UbRxQhA5GHbGRAYoWUpRi8nMbA0SO1vjjFYABIke+vOJGDBxQtCwc8xVgp32XOCByVue9z35HRaHQZQ4nNPvlDIETmiWFI9HhgNBR1J9ayK3boXCnHnqRMj39E7SuOASVHRz5l0NRyamHnMCMLoWiU5+cBgiK0aJGfwVl26fUyh9RRpDTBO1Q0v11OJS9SCMo5DRBs1Rhl56CoW9WlgR6fpohmMaaPlII9A2Pr/SnFsqm2DayeLCdBUF5lVH2C9RC0cIo4VDCC24eQqCo/4ciY7mfQj0ktBB6nvnWTSHNAqDPpnj/dP/gcxhGAPXQFPuc+IPcHKFNADRHRkyA0gSNDZ7w5puHuDdvhx7xSLuGQMglWgiafJ7x9FMrdDB0VhAE42Kspb595ff0sRV6w0s+C4cgLy7Cux9L+NT2W6EBHRcG0fhZ+Bee8JZlHJDr42Xw93VrffeG/x+iN9/6KU/5FzYs0BpvzMDvWNxmgWBJN4m2OaBdMcBpNCQ8ED4UpvwOPNADjmm//coH0Vl06VIeaFEMAJrtlixQMe/sStP/EwuEM6nxk53DL04PLFCCU5Cf377SLNEIveA57m+grSk9Oq/aQ49t0EH54/JQiIofeyjNQBaaIOq5tuFQpjT++vZX4YTQrhVyRnhp4AIhJ34rG/d45VatEBxlUQS9Db/45OtGKCtKv6XzJYdE1bVDmREYbWMfK5OVq4emplzaL7Rv3odUqu+mWhAvp7UQYBU0LldbchICwVFVJBVPaqG1sHaOHySa49EDCICosC1Hk1QZ3i7P3W9fDc0kEIJhalskgijuWVKN3wxRtjuprE+sSGqGdsWTkboQiDIbPf7IaSM1SQ3QJi5GzuOl38pH8U9p1AT1BWYFl0IwJqkBsjiyD3A5BBOS6qGBxoEQBIVLVSgSxpoNtEHhUv3w/roaQwgULrH+BXJMEi9Ekh0xQVVpCrDRHnIcEEnxcCuKapsDQgkBJahMZIBQwlBpwAHBeF6SdOJvEQPkJfXLETNsY4Fgmhh0TEqFBAcE7j01NjbpIaI2Bsgny/NKbz7yv0ev0BX6IFBXS6o6WyTW2bK3zhbydbU0sbvFlp0tH/0OpJspgKLrZusAAAAASUVORK5CYII=", "'    selected-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAyVBMVEUAAAD///////////////////////////////8zMzM/Pz/c3NzCwsI6Ojo2Njb8/Pw4ODg8PDxCQkLt7e2ampqwsLD4+Pj09PSMjIyJiYlnZ2dhYWFTU1NPT09ISEioqKilpaVvb29sbGzS0tK5ubmmpqaFhYV8fHxKSkrx8fHq6urW1tbOzs7Ly8vExMStra2rq6uWlpZycnJLS0vm5ubGxsaSkpLIyMi/v7+ysrKioqKPj494eHh1dXVtbW1eXl7g4OCfn59bW1uBhrKlAAAACHRSTlMA+uWnfzED/pS6TTQAAAL/SURBVGje7dprU+IwFIBhbupJJW1apNwsXkBYUFAQ1ivr5f//qC1puidsZ+KgPZlhhvcTExyeSaikDCnEHZRLRSCrWCofFNYdVqgUtCqHMVQBC1XidSuChYoHhTJYqVwogZVKhSJYqVgAS+2hPbSH9tBOQaPH84/6eHOMAKoNhCNcR3R6OEYBXQeCqZagooB6PsMecTw/CB2MLyCOAupxpicG8RgFdKPm4wqRiAEABXTDlXM/Dj9dOaURAYROdwRQlZNzjgkgdMYQQw4VNNEcOggd0a0BJfSQzudXDSgh3aGElppDCU00hxLqaw4B9D6tn6+bdXx0cocaL13f4WIdU7n36OQGXfmcYejkDQ19ZnDyg+Yi4zgROrlBz25mOnzVgNyhmp/OgieK6LbilzNCYSuI+rDRojmsmqGBWrjT/sKTqXET1GJxVxt7/vrpuhFyJOM3ceRrKGDrzrR7MvlsZIJ68k/cDmwDRUx2989J5MAE9ZMXmG4F1VnS7YbDWgZIXXOithUEMyXJd+VYOe3QBJ0klxpsB8HvVEKn04DcIZTcJ80hgeBFSegQQdBkWm8NoIBQQocQglbqfI6AGsKr3MrSuY8kEDooVemgF6YnUCL6h60PlTSlgfAjyEulpRn6cCUUfv9D1XtNHvMHI/SUfJO7+f42gdK7CVoGct7Nn2x83orJBiYoFExW/clW7s3lwNAEwaWbvJfPIwNjujlBqWqEjrlaYdE9lXWG1fALKGwGp33Q82ZB9ARGCC6UhDlBHSD/O9Uwctn/+TMvfwgaTGSluZc/BGGbZyR+4eUHYZOI86xEAAEs7prz9ro3n6NEAGm1UKKF4BYlWgjOUaKF4CqV/ni0kC7RQrpEC8FZKl16tJAu0UFZaUoIobQ6UvsjH5NAKHUd9cADEgjupIRdxmMEUEbi1xBHAsGtjw7eT+UIocRTxseFo4Bgcu+4MeP4JzhGAsHRdNDuvPYboLfbP4/uoT20O5CtI1XWDolZO/Zm7SCfraOJ9g5bWjs++hf/oHqtqKJk0gAAAABJRU5ErkJggg==", "'   selected-hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////v+/v1/P1N0dosydP8/v4Ev8z5/f33/f3x+/x+3uTs+vsWw88Pws6z6++U4+lh1t5l2ODh9/m37PCP4uhy2+Ju2uFq2eFI0Nrk+PnF8PO97vFDz9g1zNbe9vit6u6k6OxX1N08zdcKwM3W9PaF4OYYxNDK8fSZ5eocxdHZ9fcqyNOK4ecjx9LQ8/U2dbEYAAAABnRSTlMA++WnfzGVrfkxAAAC0klEQVRo3u3aa2/aMBiGYSjjMabOoSEQBrThfFpbKN3+/19bY9geOkup6PxGqsT9KRIoF7EgNoprbzUbN3WIVb9pNGu2b1IKrW/WQQW9Sc06KqjerDVQSY3aDSrpplZHJdVrqKgrdIWu0BX6UlC6Ht1le7xLAOrsolYUxnqyAROA5kmkbEblYN6heaxYG8wbRIfpn2BeoY1W50U7MJ/Q5nQ9RkdHMQH8Q7yecLHfPhs7dh0BiM44Bdr24loHAYjOE96gloVu/UOzM0cGch1BiM536whAriMJ5X+dDiShmePIQOszRwA65P1R0ePEcTxC6es4bumoyCg63qH7WCtGxze0ilWJ4w/qRo4Tv9DxBo3Mv4zRyxTeoY4+nT3WxhaNewegFNr2kpc13rXvrdrl0O40cL/W+8AGWynUK47vcda8eDkrhVqWiYdgH0KJokRHLUqg01vMBJdAC2V7eH8SlZRB6+MUnV8EZepYH7bbRNl6ZdAotOuozkUQHinRmW7LoDtVZHARRCmjM6HjEcKrspns8MdJIQJheJLoeIcosWc63iH0HEcCokRHHsrARIcubIOJfBkoiUF0KMn+YFfKFuVgMrcgSuWQsVDw6ZsqpVkplB2nic1/TBPB0v3P7kK5PUE0/PzER6lXBgWRsrU/PZVTWpVBGBhVFI5SsEsXJ0HXfthS6FYrmw7HP2yTVTv4ANoOT8stSo/JIkMphO5RYqaV9AH/K9XtwrhL4jsBCKkKXakrAGE71Y6kux4hNnuJtCMFHiG2fxgup0XPWlPyCbkNKclC6FOShXBPSQpyJVmI0iCQglxJFsIDJSnIlYQgVwKQx3IQpSUwCO3RkwhEadxStiiAd4gSMwMwXxDvRkzPwfxBrrQD8wa5UsyBk4AwW7RMwTjrCF8Qy3fTyXKd4ryv/Xj0Cl2hrwNVtaWqsk1ilW17q2wjX1VbE6vbbFnZ9tHfnZ0j0oLHnMYAAAAASUVORK5CYII=", "'></img>\n        </div>\n        <div id='").concat(t, "-audio-speed' class='topbar-html-content-item topbar-html-mright'>\n          <span>Speech Speed</span>\n          <img src='").concat(Tr, "' name='speed' source-src='").concat(Tr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAsVBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8Fv8x53eRR09zu+/z6/v79//8kx9J/3uUrydT3/f70/P1Ez9kextEMwc4JwM237PCs6u5p2eFX1N0ZxNAQws7f9/kxytXa9vjE8POd5uuE4OY+ztiN4uhu2+JJ0Nrl+fo3zNYVw8/i+PnU9PbI8fSY5erA7/K67vGx6++I4ed13ONj19/p+vum6e2i5+xd1t5N0tvN8/aT4+lAZSgTAAAABnRSTlMA++WnfzGVrfkxAAAEnklEQVRo3u2a6VbaQBSAQeudQEIIZiGQEPZd2bSgvv+DtYc7k2k0mQVoTnuO378eQ79Z7iam8puH+7sq/DWqd/cPlTM/dC36rh9nD5TAb9NDFUqg+lC5h1K4r9xBKdxVqlAK1QqUxLfoW/SviwKnPq3tPz5Gh47rAXJzkXc69hrkD1pPeze4tSg6rEkeVlg3bigatxukEHMS3Ug0GxAxrWfvBiK7TeS0asaVIqPZ+nRQT+1weNxt+xbJ0HevEnlPf178YOQu+RLs7rBHOI3RFaI3k6Q8dWL4QjKZ8yc20aWiTiNdbpgUne2Jx/3KuUw0Ioy2AwK66a7MxSWiSbrQOojxJ2zrjwt9UY15BkuFVDPZnhxd0QvzDJVKjN1n2/f0RIlFo2AKasRbFp2Gjiju0Yx3QZlnaproiEKCdEEDVqve1EVvBBmBDv6aXlOgKgrowe1AD5vG3l5JxDN17YMmLoaQ5aiJlo8YCDZo08Ql/lQTjdgF6WP0MSlsFVGMJ90L4AJmNMtVRB189gUuYoDHHiuIsNfNjdxEbv6cGipb6shFNj55yL2CDSEkBCGYTAO5qInXGQFAwamOhaIDLtSTijbY6iCPd0KkW4oaeMUyUWAVh4JDh5RIIRyOMpFLdy7quU2FpJ3LRAdMotxQeKWiuTDwxvjQUiIaYg0R1HRZ9wjwksYS0aD4cMJUNAARPbxliei1cMlLi6Q4ItEWe4VEZBWmypRwnuU9/VksMopX/I63h/ObqFVN8EGxKP4U3bFbp3SoARvBFMvVW53h+p/ieycWRSiK+GCYZUhPsE//R445zo6eW7HIx0/ZPHOyjMHH/uvScOeseONU2BHghxJeyTP00rve4aVx+DF8YA2SiOh66Y5aJEstrXiNyCVZTKAcz//8kIh6mb71kv1t/D3gOT3aZj3WKds5mxJROzvWOtMap2uci1wX44+gj/6sYwPDxJyXiCa0HQkw5ugoeDCi1ywR0XQx5I0gr4TwDTcCkYg3t4WwiVrM81RYgd6lrfxV3tt4Ha8XFu+JVBSyzJf3NrKGryzwRzOp6IWdnXymIqfCk3v0pSK/lTfU5obMKidkfJPWbqkIsBFYnkjkn2+yUzzWzWQiPtR+iG+plb/p4JXNQHIRrFV+PVrWF4IUOyiJuizp9fHwgk1fSQR9FlPatNmEqSaq0y92El3Png6YvpKIL2y11PN0+XypKLJpwxsYOp4F/dQW5CKekMhRwxPR7mF66iJeNp9xTxrfbzXeQEcU96lpo3hPrsm/c9IRgc0mrZ6j4pmy4SIETREkjwR5rEs1wZBQNoa2CFxmImEk9sz6aceNQV8EC5OwTTVjKCTZ8VElgEtE4PRIqtp7Bftuk5SjAZeJIN6RlMbm5YtrsV/xB6wpgK6Ic7Ayf+kYTmd2DADGMuk2d2ZmLE/gGhE4G/KFFrNzrH0AMpGM05xI2ToAV4sg6KwkmjGAikiOcdo0iizmMAFQFsnxagMrxxJ2AwA9kRx/NgrXVuoYDKd8L9oiOUs7GS8cT1Aq/qu/lX+LvkX/l6isV6pKe0mstNfeSnuRr6xXE8t72bK010d/AQQIN3f3lf4mAAAAAElFTkSuQmCC", "'  selected-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAA3lBMVEUAAAD///////////////////////8zMzPb29s3NzdYWFg6Ojr9/f329vb8/Pz4+PhPT0/v7+89PT3o6Ohubm7s7Ozk5OTT09ODg4NSUlLz8/Pf39+bm5uOjo54eHhra2tBQUHX19erq6t9fX1mZmZMTExJSUnCwsK4uLizs7Ourq6Hh4eAgIBhYWHGxsaTk5Nzc3NjY2Px8fHh4eHa2trPz8/MzMy7u7uoqKiRkZFeXl5DQ0M/Pz/JycnExMSfn5+Xl5eVlZVpaWm/v7+hoaGYmJhGRkakpKRwcHCLi4tOBDJdAAAABnRSTlMA++WnfzGVrfkxAAAFBklEQVRo3u2aaVfiMBSGi44JpRtQ9h2FUWQVUFldcET9/39oHG5iSkuSFpiemXN8P3lOYh56c7ekVT51dnoSQX9NkZPTM2WjHzLK4awfGw4KQZ+kswgKQZEz5RSFolPlBIWiEyWCQlFEQSHpG/QN+tdBVvR+Upq2P54fz5c2Ah0dZLc6ceyUNuv3jGOD0m8xvEvq4MU8IugupWKuauX0kUC9GyyW1raPAMqksFxayToQZJY0vKXFrFrpXAxWeZcx83cHgeyuc+O7T0u2HeboKrflhc/6/qDLGlunez5EHo3Lazajkd4XNGGLVMY827bymKpZ3A/0hKlSohX0q5903jy7D6iMiX6+ILGMMvWMZDY46JFybhI+Qm1Bo7cYFNSinJyvFFPM08e3g4HqxBjqBPnTsEpIMzMIqEAiROshv9JzhFQOAqpg0BXyL53mqkv/oBca7CiICnmyTYZfkNGE/xigYMqQRDL1C3qG+TFjRyK4vBYE750KHlT0B0okwRFGO4Zin8s88kklkrAEIG/qeUJetTcj/GeyiLeO/IAKEOVNa8c6Sf4egB4A1PEDOoe518ire5KUEF9dMPvQB2gGPmryw0szBSUMppzLQSOY+WuX29OyXkd8QTB15SBwHHVXtbzCROcC0C+YYktBjc28KtqhAQVdCEA2TGnJQJbKdYWCRkFxJNAN/BYZaAlLZXglCiSqha/gTDIQmLiJdijFQJei/pn8Fgkox80hQ5WB+gKQBVNuJSCw8KvYcriBBGrCLktAa27Bg1oN4ZzUBSCY2JeAVO9zgxIw8gDpbiwAgfVzYpAJpokij66hRTRX0pAtg3+LQQmudwOgTYpIR+rf72JQGkBpyo1S3YLl7kghyNP0F2XKbLWeVTGo4CxcQ88ZbK2jhCNMjA7gieJZRycwEIN0Z3q+wG61IT3TkH13Df/cFMsPyR6BNGKhP6phJhaFna9Cv/SMZ9nva0tAcYg28rdLeVaBVxDcLhVZkS1JQCnS1rIlmbRNeI1pyN55OCmHIe4loLLTZa5SMaZZrgjbmCShtgJijOrm1XI47lgCuob/Fp1VGmDdLCz4xulgDAkoSneVrz6ELBh5buzu/WLSUj4nWylrdIhLetvWOOyyFFQh/sVXAjMtCu5RYtEHKagltJ3b7V85XbNmiEGsBckJQCxjJD0dqVHj9EkKpx1VbT6IxVef19b1ZCDWp3/wQXXK0RKehmENSU8Xg0AxWCTDBZka91xc4jbUCrfzrcpCFmuevjmjgesbvkB6XHYkn9Ki4ZJexdwoVPiHcq3ODVmOv/QFx3JF0JM2wTS8Z55ybA6JWw5ipsZdi0PKNLBW1t05QRNtrsKLFEmzY3jye5pc29XsACBUCXC3BRrl2QEgAKhA81kDYtL/jd004H3daI5BzagfzoT2XQM9IAjVkzRxvkgxVg4TNazgd6pLSsIVW8x5+Kobs8I+t8TZ+Vc1KA0FKXbAuiBjv3vvYpMVnn5md+guHW3zhbnvTX7C2fM2rm03JdtvsnF1cshLkLftLj436WUKOkJWYnxfel9sjdUPe60TvcEeaZTOpE6Ng19UtdZYqlURoYNByJo0xZjqLTrSOz6z1eBSFjnYnMNBIPuxq3op88q9hdDxQCCj9zzIf9Fq3c4bnBiODQLp6Uz9Nhu1Xbnmv31X/g36Bv1foLA+qQrtI7HQPnsL7UO+sD5NDO9jy9A+H/0NycNHk3RuOUIAAAAASUVORK5CYII=", "'   selected-hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAq1BMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8uytQMwc4HwMzR8/YTw8/6/f39/v7d9vg2zNYjx9L3/P3r+vvC7/K47fCD3+a07O+I4OZY1N1H0NkexdEZxNCt6u6d5uuX5Op+3uX1/Pzl+PrY9ffH8POi5+xm2OApyNPz+/zh9/l33ONM0drv+/uN4udr2eE9zte97vFf1t5x2+JCz9in6O1R09yQ4+jK8fTO8vXaeG6JAAAABnRSTlMA++WnfzGVrfkxAAAExklEQVRo3u2aa3OiMBSGtd2eAAUBL4iCiPda71rb/f+/bLtNSOjG5IB1md2Zvh86nTHyJOfkXIipvevh/q4Of031u/uH2od+YJSvs358cKACvZMe6lCB6g+1e6hE97U7qER3tTpUonoNKtI36Bv0r4Ms43xMw+Fr8DzvR0B1c1B0mLkNklPzLeybtwbFx0dySc7gbN0QtOs2iFKtTXwjUL9N9GoOoxuA/C7B1UytL4KstEk+af3WGSSzwX7ikE+anL4EiqZ5x0+DU5xbai9xiVAj+AJotSZc060NkozNWIxox9eCtg0+3YEBCh0mnLRcXAcK+BM6C9Cox1fV8q4BbfhEz6CXucmWPvLKg5656e0CobbO1rQoCzpknKRQillMsuVH5UCew3bBEYrJ7mS70yoDMl0W8X0orCEjbcqABoSqByWU5apVcdCZUAVQRuaEucksCjKX9BsDKCe/Rb8XakFypD6aIMlazTXBe3JoUlwUA9kjuhH8Cx/9fH/Ms5qU0im+oKD8ggLVzmqo12S5NCj8IiBzTV1qXXjOE/OBUn0W5UVAWzp2rt6NbVBrSs1uIyAxdGypw2ukK2FsmjjIpyMvedzMyrqnIdFgmuKglLozBlk9wrRVUUTWj1BQm5Y6XWIiMw0oprXpgIEsh9pYZzniqihipjMMdKKP8hUliskGrAMYY6Bn9ZS7ArTS9c9sLggoUeYQ2xGgUAOyqJN2CIhaONVbjuxBoyX1MgIaKwserdVvH3+fVBAxMERADl230nJ9mu4MtKYP9SCLqJ4zp+0U7NGQ3VA360G2Iq6BAYYQsDDBilJXD4opKM64RqYd3UsnljUnWRAvDC7/U4R09CBTxKvo1YTGfM32x+jEITm5Xi5iB8hmyPtoRv7UkKfn1R8hnKstr9S4CGjELPRbLQm04/iAl9O8PDG/IQJyabSJ//OaiO2358Gd10JUzhQBUWtseFHPa/QRXkYWsjuJ080ZooeAXvNbptd5FHpLFnnrGrCnRD6gHVi5jWsgoDmaYhhg7tEHHi/X4YaJgAy8KwhpR0WN3DIvZ6CfgICYhVO00VmrmhiXehkFvbD9pZZNhNbSgphFVyjogNvOFaBAkbtHJgLiLUiiAYmM8WQrGuoXQEDcdk6kBon4ClVtXR8DicTyqgYZPIKlBVnjLPniIHiUX4+khKiaTKpsqGvKzreD9YikGUuNe1MEFw4CF3slD3nRkPsSEYU46Mw8YOhD1okUExibWpDcky5jbSSFCptzU+Agv6k/bgG/TUZSkvGaknMxEGzR9xNTmkM8ZgdcEQ6SX4WGFhSUP2HHVCsoAzJdxWkdemK3AQUIOW4hrlGEc2yw4YPSJ5DeU5Y4zyjGSvhxpVUaBKcRYXqJEbPxujE1rzkl9lq8GqQaTxmijeyY1517L5ai8ISRYt0CQ2bWtSf5du4pjfZcYnnhUgxwtl/5EeT4uYtPjn3f/O192+il3bXU4V8PAqNNJDU5ncsJTcBAmA5jgmq/AEBBqKztUo/p7AAKgXDUYd9QUdaJcA4OwhU9Tx2Z0hr0LIByIFxmPxhMHM6YJkckDSIgRLFv7DwjklLFf/pb+TfoG/R/gaq6UlXZJbHKrr1VdpGvqquJ1V22rOz66C+wOzeLd8XkIgAAAABJRU5ErkJggg==", "'></img>\n        </div>\n        <div id='").concat(t, "-zoom-out' class='topbar-html-content-item'>\n          <span>Zoom In</span>\n          <img src='").concat(Nr, "' source-src='").concat(Nr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAApVBMVEUAAAAAvssAv8wAvswAv8sAv80AwdAAvsv////5/f37/v79/v73/f0HwMwlx9K17PDx+/zo+fqY5eofxtHX9PaH4OY7zdft+vtQ0tsOwc7d9vgTw8+T4+ly2+IYxNDS8/bG8POg5+uN4uhs2eFk199g1t4xytXN8vXA7/K67fFI0NoqydP0/Pzh9/mv6++q6e193uRZ1d1Cz9ik6OyB3+V23OPZ9feaBTLJAAAAB3RSTlMA/Prlp38x8V/kKgAABD5JREFUaN7t2mlz2jAQBmByNJJWMtQ4Prnv+4b8/5/WoDUZE9up1qGeTsv7pVPa+BHr1QFx5T0vz08P7I/l4en5paLz45H94Tz+0A4rIe/SyyMrIY8vlWdWSp4rT6yUPFUeWCl5qLCScofu0B36V6FqcKpvZt3puueOvJARQoAaw43PpRL8PfpPOXG920NBDQTwT1F8dXRuCo0iCTwzAnrVm0HzCCTPjZDN8CZQY80heV2lQCh19ZK/uwE0tgWPA4Lbs35ruBsNtoeOkIrHkbL/bShQ8FGi2TB55629a8vLIGAWfg/aShkzy22bpbLvXppERNXvQJvLZaDZyGmUt7hRxE+vONSPHbn+YrgjP57DP52i0EjGt7rFvorTQUm8hcUgD+K7M2dfx1rH/7NWCHJ8MLjLmCO+d3CLQFgQ8I0WMxewygEdGsTlMFyga0JDtkWF2ksc4oiZJXzVknCpUBN/rs9M4/zECrRpUEPp9+NnVWJeP2b1cQtwaDTIxU4YZl2QS8UzBmCtdOupBgny9RuK8t4rZI17pyExoEBzmdusC30vapkTAs4/NKFAG125KPMglA/tcEZUCZC+mDgRIWuJtTOHxlzHIUKsJ861q5lDLd3cK0aFsHZLc6gH5xLUyVA7roQxNNG1HpKheFbMjSFcTTw6NNVTdmAMcZ2rVSvovmIiPGTFf3urXdWpDmfoaAo1ELKSm4bg2QEeJlcuda550xRycIdIvmRnKqmNYXuGoEeDIPkS5EKy+RmSvW+Ubspz4xUvncV1GldTSwGG49YLGMGD1HapXFOIYWONP/EYXL1n1iXXJwfd3i1j6FWPeUefRyvcXYyhjcQKUKEQj3cLUwibh0/IEO6XwjKG9ti4IRXq6+7uMmPIwqPJiAjhtFZHc4hNJQ6NBu3jiUWARqBrN6ZBa4H7JQEKdTeIGctZNmTWpujhlxwuBWIHXK33WYcqmdPBXTznOyRooRsVOpnH8lWU5QTY2xtGgi4fQ0bMNFYkceEiQmOpITU2hfDMKQ6MCMWfW8BumzlbwFZok6HQx5pPLBMnwLpBi5EhtgeupbWBtFc4qmmhj/8DiVLH+Z0zAHT8diGI1QVKvvd1v9VxRFJ4Rb+imaIEYsDyU+0KjmmxolAjEhypKGDZadfh4gi7WhRi4RQuX/1NvKx/PypkEhIZwjQlxwB/O11fx5ofPhiZkqgQGwJ8jJjbh1MwrradhTd0uyA1g/MaUhIVYp6dqA4oGaMqUTJxYvWURIaY5YLg+QHoVhm7lugQptrLpQSf4PkvJVEhjNP3JaQUqeQamzFDokMYKzj4XIjE3eLLWgtXp1yJDmEWw/5s5Suu7M6sd8KtKlNyCBA9KKVWcQJEl2RyayFAZEmxZAgQScr8tvj2EBtOOqn94u/9reUdukN36H+BynqkqrSHxEp77K20B/nKejSxvIctS3t89BeexFWlWRwk5gAAAABJRU5ErkJggg==", "'></img>\n        </div>\n        <div id='").concat(t, "-zoom-min' class='topbar-html-content-item topbar-html-mright'>\n          <span>Zoom Out</span>\n          <img src='").concat(Ur, "' source-src='").concat(Ur, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAApVBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////8/v74/f36/f4Hv8zX9fckx9Lp+fofxtGY5Ok7zdft+/tQ0tsRws8Lwc1z2+IYxNDE8POI4efz/Py87vF/3uUxytXl+Pm17PCh5+yT4+ls2eFDz9nd9viN4uhh1t7S8/av6++q6e3K8vSF4ObP8vVj198oyNPg9/im6Ox43eNl2N9b1d5Y1N1K0dqc5ut7OHYxAAAABnRSTlMA++WnfzGVrfkxAAAD9UlEQVRo3u3aaVPbMBAG4ATKaldO4tjxlfu+CVeh//+nlchL7YBJtSH1dNq8X5iBcR55tY5so8prbq6vqvDHUr26vqmYfJMqcuubcaCEvEo3VSgh1ZvKNZSS68oVlJKrShVKSbUCJeUCXaAL9K9C9VbUXHc3yWrUXnghCCKAgt3aV0havcb8xNutd36oNUSN6l1IDXruOSFnMUOtCkP4o342aHqPxQpT4+AsULxSeYeIkIgOfuU/nwHqD0hxUKtGdx49PX+f9EZLrSiz5l+GWvQ2ORq7Ozc/cdN2Q739EbvB16Ce4lCnFxfMXvJWVprVvwKt8XcT/lJDPuGOdzo0Ry7M6shwFz5fw379VGjBDEZwLO6S0nOqhadBHnJNpnA84QrTAg9Pglwf7WY56xlsnwLdUlp5FyyyxZRqyaEJF84DqwzTYQ1CKRR3lMkC7BLWtBlXWwqNyRw3B9u4nbQCsQyKjaMaglU0MqdEcxnUNhA+gX2cgTJSIIEc3zgzkOQ7mtpNJNBL1qyCLI10K4HWpt4zkOXZQOpOAJkOokch5KSHTeyhvjJxQZjRvhA4tIci03P3UofboWMPjfYHUFMMxVwJa2hjav0E4jQMNLWG0m8TTw4l3A2WkKNM4oO7oU2tMMODOjX1HtraQkEKhflFQ6vioAref3PR2BZy04+AXAaFyoeFobeH8McXIPwUwvz4Hw00EpbOgSxd9Wm896XTY2EzBAeXFmFR9OEX79g0Q9sWAjJQ/x1fnMM7B9PekTVUM8X/DuLcmwNb1tAauQLChLxOWEM94hVMFl4vybGGpmnjBlJobgaYgDXkkIEWMoYva+rZQ9DFPZQIHY8vLAG0QG5wUVamEAMQQGF6n9o94YRoK4HggXgJEyTRZmZdEdQ3Di4FTis9oTWIIBhqYeOFM55XIdRPDyPbfuB7TnoAIcTPLdiI7ZweDywWQwE/wm4c+wlSGIEYgik/W64spCkpvh7kUPYUu3R/50wwfWLxYznEN0/7kO8dZZwmpnUjD06DnIT49dnkSPnuEq3SRCCGOMGMeJJnLShO3ERiRzfqUiiTupol3BTVJewRMyxJoSxjxdGqFtUPK/vyQDpjWJJDnB1i7u3z6LHVr8funbdrJ1r9YrCBmSSGON4gN2wkZnW+ZPToNDNJDnHCLZL6PIjJ/sPzkhzi1EefUlrd8rvoA0kOcdy5j/qDgoQrbsYPkhziOK0HXxHlENUZRi5wCiU5xLl7mg/vfVLUWHZHES9VRZIrgeTJpASyCCC5hCFkEUBiiSAfASSUcAsHEUCC7DbLD+vF3/tfywt0gS7Q/wKVtaWqtE1ipW17K20jX1lbE8vbbFna9tGfpbEkz2i9HpUAAAAASUVORK5CYII=", "'></img>\n        </div>\n        <div id='").concat(t, "-cursor-auto' class='topbar-html-content-item topbar-html-margin0'>\n          <span>Mouse Style</span>\n          <img src='").concat(Mr, "' source-src='").concat(Mr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAn1BMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////4/f04zNYFv8zt+vv8/v7Z9ff0/Pzn+frf9/gsydQVw88bxdBp2eBY1N1T09w8ztc0y9Ulx9IPws7O8vWr6e5K0dogxtEJwc3S9Pa97vG47fCx6+/H8PPC7/Kk6Oyf5+uO4uiI4OZy2+JCztnx+/ya5eqB3+Ve1t7j+PmT4+h83uR33ONk199wOre6AAAABnRSTlMA++WnfzGVrfkxAAAC80lEQVRo3u3aSXfaMBQFYIZyBTKTR2wz2oEwhiQk//+3NUV6WLTp6cJ6Ol1wV4EsvmOkk/sU1PhKp91qgi3NVrvTuOYHn0LWj6sDB/mSOk04SLPTaMNJ2o0WnKTVaMJJmg04ygN6QA/ICTQ57F8D3IcBCkvxFS+CEQ5IToXKiwSFBfoQlHIJCge0EbdMaaFYoJOoMs6gwgF1hRFvAgoTNNRSNwGFB0pWWuofADBCvbwQOjuAE4J8Jmm2ZIWAPUmbnBdC1NfSYMELYU6bb5TyQkhHWhrOeSEsBrTNP3khBGuhc+aFsJyRtJWsEPBOUpnzQlVFTUNeCHGXesPnhTDxqt5gheCPqTdiXgjhVOgceCHkJUnvvBDklqSnJSsEnElaB7wQPm+9kfFCZm/wQmZvsEJmb0S8EPLbzLznhSBnJD1LVgjYkVTkvBAOtM1XIS+EhHrjzeeFqt44TXghZNQbo5AXQjClvccKBVkv9vQj2YZC/5hEl932aT1QBGVpGVqJ38P0RPFfoBdr0KvENYNvHS+wBR3Epwa/c1Y+6kM0pg7UT3JsCt3RajPbzSVsQDQn6FkuUkQRH9NFbrlh9+rz0QeLkdpm0v64RYWQ0HJdE1mHXoTOVD+Sp0Z9aRnailv0KHJRr17tQs+iykYPDCc11lmEaDSgTMzNIWJ7kHyiZlO1XeKaYEhrZgk6ltrxUv1k6d2Bdm4LGpPjw9dHCF0W6vdrSxBl5APQH6IPc8sfrUJvGQD07io7U2tW1IZWlTNeqLcKNWz/Uqtd36sLbYmp/nl2NBuuWrOaUDYkJwRlrYpBv0FrVhNCrKSN0Zzzu1Nyql5d6kJYbAdeEcGMmuGGgTmllvWg75NUJ6JkLVRmDBANJqcwqur8zAHRYNI3px8OiAaTKsMELBCie6fIALBA5iP1ZylUGCBMaH2GuwUoHBCSt+vf2Y8cVVggLOPz5SjxZ/7/L3wf0AN6QP+IsytVzi6JObv25uwin6urie4uWzq7PvoTA1gcp9niWMsAAAAASUVORK5CYII=", "'></img>\n        </div>\n        <div id='").concat(t, "-pointer-follow' class='topbar-html-content-item'>\n          <span>Crosshair</span>\n          <img src='").concat(Pr, "' source-src='").concat(Pr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAWlBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8Pws7Q8/VP0tuw6u4vydTw+/vv+vv1/P3e9vjG8POD3+VV09w/ztgWw88IwMzs+vu57fCq6e2i5+xt2eFp2eBa1N0bVuUsAAAABnRSTlMA+uWnfzGozdCBAAABDElEQVRo3u3aC66CMBCF4Q7Iab1Xxffb/W9TBZtqYpWoHcGcfwNfQlqSZsacKvJMkCzJ8sJU9QSJk17lQKGTVAgUksLkUCk3GVTKjEAlMVCKECFCPw45RPootNiUdnzATSkgN7bn9rgqCTS1VeUSoSTQ2tbNEUoC9S/QH0KEQMhHCIR8hEDIRwiEfITwy5CLNhnVzVysZWNosV3ZaAPU/dto/dkzKLwXXoJCu0bQ1L4Nla4JNHkfsvNWQR/5dK06DArHu9GFHdY9uLCt/AURIkToEiEQ8hECIR8hEPJ1G7o7BOn0WOfuoKrTo7fYMLHb41FChAh9CxKoJGpLYmprb2qLfFqriXrLlmrro0c+CAVx4/q+RAAAAABJRU5ErkJggg==", "'></img>\n        </div>\n        <div id='").concat(t, "-bigtext' class='topbar-html-content-item topbar-html-mright'>\n          <span>Magnifier</span>\n          <img src='").concat(Dr, "' source-src='").concat(Dr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAAAvssAv8wAvswAv8sAv80AwdAA2/8Avsv///9h1t75/f3H8PP9/v7L8fSF3+Y+zdf7/v4JwM3j+Plo2OAQws7u+vu/7vJR0tsix9L0/P3R8/ae5uswytTb9vez6++u6u7q+fqI4OZ73eRY1N02zNYqydSn6O2Q4uh23ONu2uFI0NpDz9nD7/IZxNCK4efrtanHAAAACHRSTlMA/Prlp38xA5BBKAUAAAIJSURBVGje7drZjtowFIDhsM4xwWQn+8IOhZm+/9uV6rjVVKpyHJtYXfxfR/6I5FzYHOfZcj6bwGhNZvOl8723xRRGbrp4e0ILMNDCcZZTMNB06czBSHNnBkaaORMw0sQBQ1nIQhYaF8r942pgWZ0Mhc77iKnE0zgcACXXgCkXZdLQOWJaVZLQacs0a0MZ6GPHtKtkoJS9oCMNrZgousargd06l2HbhIQasU+9EBTK10I6UNCRYV9ArVBIOwq64HNrUK3muIJPQLjl+AmUqxDy+qGceiG6My6R9kM+PrUHjfB7L/uhjNwKdCVu8H5ohdBKB8J951roX4TidkOUeskLoEvAGZUbJdrQicnkHrShOJCBeKsN3eXe6KoNQenSTlDk+lBSbfnncBn+uSKtX/8d+biMB79mIQtZyEIWspCFLGQhC/2+kzg9jA6FLnvGH6NDELOAB62JM+yj6uK/+7BsIWPQRga6I3TTgRq8ZO6HaoQqoKK+aLbphxIufo564m6x64eg1L6CFCvEBLT/eROvWMywnIDOHJ97D9Ucv/hxz0xA0DGsyRSYj33AsDsJ1QETFeV6YE3ARO9AQnBj+m1zCQhabYdnIAOFnabjZkBC2NdAx4keIAtBnSozhReCHITlh7Qp3IHtNpejYP7E/8ot9L9BpkaqjA2JGRt7MzbIZ2o00dywpbHx0W/4CGtodLp8vQAAAABJRU5ErkJggg==", "'></img>\n        </div>\n        <div id='").concat(t, "-pointeread' class='topbar-html-content-item topbar-html-mright'>\n          <span>Point Reading</span>\n          <img src='").concat(zr, "' source-src='").concat(zr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAn1BMVEUAAAAAvssAv8wAvswAv8sAv80AwdAAvsv////0/PyL4ecSws5s2eGu6u7k+frQ8/Vh1t4Lwc0HwMz6/v502+L4/f4Vw889zth33OOo6e2b5uuW5OmF4OZ73eRa1d05zdckx9IcxdHr+vuC3+VR09wsydTh9/nZ9fey6++h5+x/3uUzy9XJ8fTA7/K37fBF0Nm97vGQ4+ln2ODU9PaS4+iKiZWvAAAAB3RSTlMA/Prlp38x8V/kKgAAApBJREFUaN7t2mmPokAQgGGvsQqP4RJQVC7xGs9x5v//tpWyk87uzoZWrM6a8HzSL74B1Ja2GlfdTrsJbJrtTrdB3lrArPVGHdDgWuq2QINWt9EBLTqNNmjRbjRBi2YDNKlDdagO1SH1kB+NevcbR/59ofiMjzrEd4Q+sYqpcmiD1RwVQz2s6lsptMTqdiqhCQqecS8PhY1CyDHEJU3hfuk3Es8uDwVItvCYEMmpPBQhiR8M7ZBY5aEBEv/BkI1kpBzq16E69DIhMLAQsYbkV6WR8of8A2KWA19IWgY28Iak1w85g0kYaAjZJl598oc+xAJuc4cOeGOmzCEThfedphAaOXNIGrOHzi6S0GEOWScDybnPHILlCsk6YQ6Bv0eSBcwhcCZIvIg1VFjgzYI7BJGHZOIwhyDIkOx95hAkaySrJXMI+mckxok5BE6IxI0ZQ0l+GfdCA4nJFXIA/FtDcHhCyQYA5ihlz7zjk6FdhhGA/S5D8yfew8pQbCCuHAALBbf3xLtyGZoYtO6Jp0crj22lfYYwgR84gn3l/LTCGj7AqVgq7tg5cT3PLeC/rPM/Q+LX3bE4k6WhpYvK4r9DbnJ7iXVpCGaKFXkl93iTeYg4FPsnVmkIhsqhDZAtklUyxavg9o4yy0PqO3YDcbY9umQppMWDfX9GZ98vD8Hu6KodkBB8obctvkzokDwkdlmI9PPRjCwKH4U5GZPR1SAAyYYCHZJw5N33nqKwT0FiCPkrypgWSCwhSIZGNgngN//FXwbaQ3k4LLW9VA9NUcmhamiHiqyKoYtqaFoxdFINjSqG4KDWWfWrhuye+V7qa+q/0OeoDtUhqEN1iI+2kSptQ2Laxt60DfLpGk3UN2ypbXz0F72CSzMm2iCFAAAAAElFTkSuQmCC", "'></img>\n        </div>\n        <div id='").concat(t, "-close' class='topbar-html-content-item'>\n          <span>Close Menu</span>\n          <img src='").concat(Vr, "' source-src='").concat(Vr, "'  hover-src='").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAqFBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////t+vtx2uIbxdAFv8wjx9L4/f1M0drZ9ffP8/UTw8+e5uuS4+k2zNYHwMzl+PrV9PbD7/KI4OZ93uUpyNPq+frL8vS+7vKv6++p6e2i5+yY5epr2eFR0ttCz9j8/v7d9vi57fBm2OBf1t4vytQnyNMJwM3z/Pzg9/iD3+V43eNW1N3H8PM8zdcNws6M4ed13OOQ5B26AAAABnRSTlMA+uWnfzGozdCBAAADfUlEQVRo3u3a+VPiMBQHcI7lBZIe9KKclVoQkEMB0f//P1vFHO4ObfLqbJ2d6fc3xzw/mPYlqbbxnk671YR/lmar3Wlc8wur4K1fVwcqyLvUaUIFaXYabagk7UYLKkmr0YRK0mxARamhGqqhn4GikCJGl4eyAyFDC1uFhxbkI32GLMNDCblmiSzDQ9NPKEOW4aHuJ9SDL6mhH4a8qBLIcYmdeoXQKe6ene9CI/KRYRHUu349+hbkJYS3Zz50sck1a688RF3Ck+VDL2JMTHWQ3iFOPmTJQS4tB3nK6bN8CO6U5JWB2JCIzCgUQJeZHDhkJaB7WZ7ui/toP5dD7/HQoyx+068MRzn4EQvRrijtgR6CnhjdpUjoTjkmELyJ8Xc4yBF1vumi6stOQEF9cb9FplAkSvoYaMGLbMt8m9jZvGiBgMSnG2P2o2fxK5lDIS9ZRRgoWvGy0BgKeMUGt8NueFlgCjH+s6YMB0VT3kvMEFrKK4SDYCx2LyNIXVULC+144bMhdOYbGWAhiPkibgYx3hAjPDTi7ceMoIloPCykGn1nBDniEuEhS6x3ekgt+Qe4nVXRxnPI/RSN3Ile5UCpmJ1beVKXVw8Fhasw0Gtbvhau+oEeUoeFBPKk+/46b8ceqqODHvJFM2CjIB83dYjgp06tWE9oRd0MYz2kVvsHhnfYA99fUA07wUMTVMNSeRZERp06qREEU3HroOPzHRPMoDW/G0rfC2sjSJ2kX3CKeiY7GkI7zaOB9gFkYgiBy/cvinMo3zFdMIWeSanbwRdHBmOIPvCenaCaSFRRYwjmhc8gmiedOZhDYeEziOZJJ0RA8tMdJsYTd5CzgIEsW5zzPTPHW8knHRQEr4QnYSYOS8T4V8BB+1hUziO9E83F6HiPhGBrqz9n6Bw6E2PtLWAhyIjIICx2woEcmgEegkCW21kBwzJbDgwABam2lXFPeYNOrho1h3IQWxOV2fLWkOWMqKwZElJSSr4kPv7VIrtx/PX7KYNSkDqHqwzSt8XW8jxruzim8hZQ5+3yEDhdYpSuA9+DgCYmTkJBC2lzGuiYwQlAD+lzGU8LZ218AQRUmH3PzWPc3h4AAWkTBoMbcxaEAICE9LE2/rkrJ+zsb3hfISBEPGu7fNlaRfvh//cP3xqqoRr6M5W9UlXZS2KVvfZW2Yt8Vb2aWN3LlpW9PvobhVMftSFfeGQAAAAASUVORK5CYII=", "'></img>\n        </div>\n      </div>")
						},
						jr = {
							init: function(t) {
								var e = t.config.namespace;
								this.namespace = e, t.creatStyle("topbar-style", ".topbar-html {\n  width: 100%;\n  background: #797F8D;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 50px !important;\n}\n.topbar-html-margin0 {\n  margin: 0 !important;\n}\n.topbar-html-content {\n  width: 100%;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n.topbar-html-content-item {\n  cursor: pointer;\n  margin: 0 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: PingFangSC-Medium;\n}\n.topbar-html-content-item img {\n  height: 52px;\n  width: 52px;\n  border-radius: 5px;\n  display: block;\n}"), t.creatHtml("topbar-html", Kr)
							},
							setEvents: function(t) {
								var e = this,
									n = t.config.namespace,
									o = document.getElementById("".concat(n, "-close")),
									r = document.getElementById("".concat(n, "-reset")),
									i = document.getElementById("".concat(n, "-topbar-html-content"));
								o.onclick = function() {
									t.close()
								}, r.onclick = function() {
									t.resetAction()
								}, navigator.userAgent.indexOf("Firefox") > -1 && (document.getElementById("".concat(n, "-zoom-out")).style.display = "none", document.getElementById("".concat(n, "-zoom-min")).style.display = "none"), [].forEach.call(i.children, (function(t) {
									sr(t, "mouseover", e.mouseOver), sr(t, "mouseout", e.mouseOut)
								}))
							},
							mouseOver: function(t) {
								var e = (t = window.event || t).target || t.srcElement;
								if ("IMG" === e.tagName) {
									var n = e.getAttribute("name"),
										o = e.getAttribute("hover-src");
									"audio" == n ? rr("audio", jr.namespace) ? e.src = o : e.src = e.getAttribute("selected-hover-src") : "speed" == n && "fast" == rr("speed", jr.namespace) ? e.src = e.getAttribute("selected-hover-src") : e.src = o
								}
							},
							mouseOut: function(t) {
								var e = (t = window.event || t).target || t.srcElement;
								if ("IMG" === e.tagName) {
									var n = e.getAttribute("name"),
										o = e.getAttribute("source-src");
									"audio" == n ? rr("audio", jr.namespace) ? e.src = o : e.src = e.getAttribute("selected-src") : "speed" == n && "fast" == rr("speed", jr.namespace) ? e.src = e.getAttribute("selected-src") : e.src = o
								}
							}
						},
						Fr = wn.find,
						Jr = "find",
						Gr = !0;
					Jr in [] && Array(1)[Jr]((function() {
						Gr = !1
					})), Ze({
						target: "Array",
						proto: !0,
						forced: Gr
					}, {
						find: function(t) {
							return Fr(this, t, arguments.length > 1 ? arguments[1] : void 0)
						}
					}), Hn(Jr);
					var Wr, Hr, Lr, Yr, qr = String,
						Zr = TypeError,
						Xr = Object.setPrototypeOf || ("__proto__" in {} ? function() {
							var t, e = !1,
								n = {};
							try {
								(t = function(t, e, n) {
									try {
										return Q(At(Object.getOwnPropertyDescriptor(t, e)[n]))
									} catch (t) {}
								}(Object.prototype, "__proto__", "set"))(n, []), e = n instanceof Array
							} catch (t) {}
							return function(n, o) {
								return Jt(n),
									function(t) {
										if ("object" == typeof t || W(t)) return t;
										throw new Zr("Can't set " + qr(t) + " as a prototype")
									}(o), e ? t(n, o) : n.__proto__ = o, n
							}
						}() : void 0),
						_r = RegExp.prototype,
						$r = function(t) {
							var e = t.flags;
							return void 0 !== e || "flags" in _r || wt(t, "flags") || !q(_r, t) ? e : S(ro, t)
						},
						ti = Zt.f,
						ei = function(t, e, n) {
							n in t || ti(t, n, {
								configurable: !0,
								get: function() {
									return e[n]
								},
								set: function(t) {
									e[n] = t
								}
							})
						},
						ni = Rt("species"),
						oi = De.f,
						ri = me.enforce,
						ii = Rt("match"),
						ai = v.RegExp,
						ci = ai.prototype,
						si = v.SyntaxError,
						ui = Q(ci.exec),
						Ai = Q("".charAt),
						li = Q("".replace),
						fi = Q("".indexOf),
						pi = Q("".slice),
						di = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
						gi = /a/g,
						hi = /a/g,
						mi = new ai(gi) !== gi,
						vi = so.MISSED_STICKY,
						yi = so.UNSUPPORTED_Y,
						bi = b && (!mi || vi || Ao || fo || y((function() {
							return hi[ii] = !1, ai(gi) !== gi || ai(hi) === hi || "/a/i" !== String(ai(gi, "i"))
						})));
					if (Ye("RegExp", bi)) {
						for (var wi = function(t, e) {
								var n, o, r, i, a, c, s, u, A, l, f, p = q(ci, this),
									d = qn(t),
									g = void 0 === e,
									h = [],
									m = t;
								if (!p && d && g && t.constructor === wi) return t;
								if ((d || q(ci, t)) && (t = t.source, g && (e = $r(m))), t = void 0 === t ? "" : _n(t), e = void 0 === e ? "" : _n(e), m = t, Ao && "dotAll" in gi && (o = !!e && fi(e, "s") > -1) && (e = li(e, /s/g, "")), n = e, vi && "sticky" in gi && (r = !!e && fi(e, "y") > -1) && yi && (e = li(e, /y/g, "")), fo && (t = (i = function(t) {
										for (var e, n = t.length, o = 0, r = "", i = [], a = {}, c = !1, s = !1, u = 0, A = ""; o <= n; o++) {
											if ("\\" === (e = Ai(t, o))) e += Ai(t, ++o);
											else if ("]" === e) c = !1;
											else if (!c) switch (!0) {
												case "[" === e:
													c = !0;
													break;
												case "(" === e:
													ui(di, pi(t, o + 1)) && (o += 2, s = !0), r += e, u++;
													continue;
												case ">" === e && s:
													if ("" === A || wt(a, A)) throw new si("Invalid capture group name");
													a[A] = !0, i[i.length] = [A, u], s = !1, A = "";
													continue
											}
											s ? A += e : r += e
										}
										return [r, i]
									}(t))[0], h = i[1]), s = ai(t, e), u = p ? this : ci, A = wi, Xr && W(l = u.constructor) && l !== A && L(f = l.prototype) && f !== A.prototype && Xr(s, f), a = s, (o || r || h.length) && (c = ri(a), o && (c.dotAll = !0, c.raw = wi(function(t) {
										for (var e, n = t.length, o = 0, r = "", i = !1; o <= n; o++) "\\" !== (e = Ai(t, o)) ? i || "." !== e ? ("[" === e ? i = !0 : "]" === e && (i = !1), r += e) : r += "[\\s\\S]" : r += e + Ai(t, ++o);
										return r
									}(t), n)), r && (c.sticky = !0), h.length && (c.groups = h)), t !== m) try {
									Xt(a, "source", "" === m ? "(?:)" : m)
								} catch (t) {}
								return a
							}, Ei = oi(ai), Si = 0; Ei.length > Si;) ei(wi, ai, Ei[Si++]);
						ci.constructor = wi, wi.prototype = ci, ye(v, "RegExp", wi, {
							constructor: !0
						})
					}
					Yr = Y("RegExp"), b && Yr && !Yr[ni] && (Wr = Yr, Hr = ni, (Lr = {
						configurable: !0,
						get: function() {
							return this
						}
					}).get && ve(Lr.get, Hr, {
						getter: !0
					}), Lr.set && ve(Lr.set, Hr, {
						setter: !0
					}), Zt.f(Wr, Hr, Lr));
					var Bi = ee.PROPER,
						xi = "toString",
						Ci = RegExp.prototype[xi],
						Oi = y((function() {
							return "/a/b" !== Ci.call({
								source: "a",
								flags: "b"
							})
						})),
						Ii = Bi && Ci.name !== xi;
					(Oi || Ii) && ye(RegExp.prototype, xi, (function() {
						var t = Jt(this);
						return "/" + _n(t.source) + "/" + _n($r(t))
					}), {
						unsafe: !0
					});
					var Ri = {
							pointeread: "已开启指读模式",
							bigtextOpen: "大字幕已开启",
							bigtextClose: "大字幕已关闭",
							pointerFollowOpen: "十字线已开启",
							pointerFollowClose: "十字线已关闭",
							cursorAutoOpen: "大鼠标已开启",
							cursorAutoClose: "大鼠标已关闭",
							zoomOut: "页面已放大",
							zoomOutEnd: "页面已放到最大",
							zoomMin: "页面已缩小",
							zoomMinEnd: "页面已缩至最小",
							speedQuick: "语速已加快",
							speedMiddle: "语速已正常",
							audioOpen: "声音已开启",
							audioClose: "声音关闭",
							reset: "已重置"
						},
						ki = new RegExp("[]"),
						Qi = function(t) {
							return "<audio autoplay id='".concat(t, "-audio-media'>\n               <source src='' id='").concat(t, "-audio-source'>\n               <embed height=\"0\" width=\"0\"  src='' id='").concat(t, "-audio-embed'>\n        </audio>\n        ")
						},
						Ti = {
							init: function(t) {
								var e = t.config,
									n = e.namespace,
									o = e.url;
								this.body = document.body, this.namespace = n, this.AudioApi = o, t.creatStyle("audio-style", ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #505050;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n}"), t.creatHtml("audio-html", Qi), this.isAudio = rr("audio", n), this.isOveread = rr("overead", n)
							},
							setEvents: function(t) {
								var e = t.config.namespace;
								this.registeDom(e), this.toggleAudio(), this.isAudio ? (this.addEventMove(), sr(document, "click", this.forceSafariPlayAudio)) : this.audioTabImg.src = this.audioTabImg.getAttribute("selected-src"), this.isOveread ? this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute("selected-src") : this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute("source-src"), "fast" == this.speed ? this.speedTabImg.src = this.speedTabImg.getAttribute("selected-src") : this.speedTabImg.src = this.speedTabImg.getAttribute("source-src")
							},
							registeDom: function(t) {
								this.audio = document.getElementById("".concat(t, "-audio-media")) || "", this.audioTab = document.getElementById("".concat(t, "-audio")) || "", this.audioTabImg = this.audioTab.getElementsByTagName("img")[0], this.speed = rr("speed", t), this.speedTab = document.getElementById("".concat(t, "-audio-speed")) || "", this.speedTabImg = this.speedTab.getElementsByTagName("img")[0], this.pointeReadTab = document.getElementById("".concat(t, "-pointeread")) || "", this.pointeReadTabIcon = document.querySelector("#".concat(t, "-pointeread img"))
							},
							toggleAudio: function() {
								var t = this,
									e = Ti.namespace;
								this.audioTab.onclick = function() {
									t.isAudio ? t.closeAudio() : (t.showAudio(), Ti.playAudio(Ri.audioOpen))
								}, this.speedTab.onclick = function() {
									"middle" == t.speed ? (t.speed = "fast", t.speedTabImg.src = t.speedTabImg.getAttribute("selected-src"), Ti.playAudio(Ri.speedQuick)) : (t.speed = "middle", t.speedTabImg.src = t.speedTabImg.getAttribute("source-src"), Ti.playAudio(Ri.speedMiddle)), or("speed", t.speed, e)
								}, this.pointeReadTab.onclick = function() {
									t.isAudio ? (Ti.playAudio(Ri.pointereadClose), t.closeAudio()) : (t.showAudio(), Ti.playAudio(Ri.pointeread))
								}
							},
							showAudio: function() {
								var t = Ti.namespace;
								this.isAudio = !0, this.addEventMove(), or("audio", !0, t), or("overead", !0, t), this.audioTabImg.src = this.audioTabImg.getAttribute("source-src"), this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute("selected-src")
							},
							closeAudio: function() {
								var t = Ti.namespace;
								this.isAudio = !1, this.stopAudio(), this.removeEventMove(), or("audio", !1, t), or("overead", !1, t), this.audioTabImg.src = this.audioTabImg.getAttribute("selected-src"), this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute("source-src")
							},
							addEventMove: function() {
								sr(this.body, "mouseover", this.mouseOver)
							},
							removeEventMove: function() {
								ur(this.body, "mouseover", this.mouseOver)
							},
							forceSafariPlayAudio: function() {
								var t = Ti.audio;
								try {
									t.load(), t.play()
								} catch (t) {}
							},
							mouseOver: function(t) {
								var e = (t = window.event || t).target || t.srcElement,
									n = Ar(e).replace(ki, ""),
									o = e.parentNode.id.indexOf(Ti.namespace) > -1;
								"" == n || "文本" == n.replace(/(^\s*)|(\s*$)/g, "") || o || Ti.playAudio(n)
							},
							playAudio: function(t) {
								window.speechSynthesis && this.systemAudioAction(t)
							},
							stopAudio: function() {
								window.speechSynthesis ? window.speechSynthesis.cancel() : this.audio.pause()
							},
							getWindowVoice: function() {
								return window.speechSynthesis.getVoices().find((function(t) {
									return t.localService && "zh-CN" === t.lang
								}))
							},
							systemAudioAction: function(t) {
								var e = Ti.isAudio,
									n = Ti.speed;
								if (e) {
									var o = "middle" == n ? 1 : 1.5,
										r = window.speechSynthesis;
									r.speaking && r.cancel();
									var i = new SpeechSynthesisUtterance;
									i.text = t, i.lang = "zh-CN", i.volume = 1, i.rate = o, i.pitch = 1, i.voice = this.getWindowVoice(), r.speak(i)
								}
							},
							reset: function() {
								var t = Ti.namespace;
								this.closeAudio(), this.speedTabImg.src = this.speedTabImg.getAttribute("source-src"), this.speed = "middle", or("speed", "middle", t)
							}
						},
						Ni = Q(1..valueOf),
						Ui = RangeError,
						Mi = RangeError,
						Pi = String,
						Di = Math.floor,
						zi = Q((function(t) {
							var e = _n(K(this)),
								n = "",
								o = Se(t);
							if (o < 0 || o === 1 / 0) throw new Ui("Wrong number of repetitions");
							for (; o > 0;
								(o >>>= 1) && (e += e)) 1 & o && (n += e);
							return n
						})),
						Vi = Q("".slice),
						Ki = Q(1..toFixed),
						ji = function t(e, n, o) {
							return 0 === n ? o : n % 2 == 1 ? t(e, n - 1, o * e) : t(e * e, n / 2, o)
						},
						Fi = function(t, e, n) {
							for (var o = -1, r = n; ++o < 6;) r += e * t[o], t[o] = r % 1e7, r = Di(r / 1e7)
						},
						Ji = function(t, e) {
							for (var n = 6, o = 0; --n >= 0;) o += t[n], t[n] = Di(o / e), o = o % e * 1e7
						},
						Gi = function(t) {
							for (var e = 6, n = ""; --e >= 0;)
								if ("" !== n || 0 === e || 0 !== t[e]) {
									var o = Pi(t[e]);
									n = "" === n ? o : n + zi("0", 7 - o.length) + o
								} return n
						};
					Ze({
						target: "Number",
						proto: !0,
						forced: y((function() {
							return "0.000" !== Ki(8e-5, 3) || "1" !== Ki(.9, 0) || "1.25" !== Ki(1.255, 2) || "1000000000000000128" !== Ki(0xde0b6b3a7640080, 0)
						})) || !y((function() {
							Ki({})
						}))
					}, {
						toFixed: function(t) {
							var e, n, o, r, i = Ni(this),
								a = Se(t),
								c = [0, 0, 0, 0, 0, 0],
								s = "",
								u = "0";
							if (a < 0 || a > 20) throw new Mi("Incorrect fraction digits");
							if (i != i) return "NaN";
							if (i <= -1e21 || i >= 1e21) return Pi(i);
							if (i < 0 && (s = "-", i = -i), i > 1e-21)
								if (n = (e = function(t) {
										for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
										for (; n >= 2;) e += 1, n /= 2;
										return e
									}(i * ji(2, 69, 1)) - 69) < 0 ? i * ji(2, -e, 1) : i / ji(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
									for (Fi(c, 0, n), o = a; o >= 7;) Fi(c, 1e7, 0), o -= 7;
									for (Fi(c, ji(10, o, 1), 0), o = e - 1; o >= 23;) Ji(c, 1 << 23), o -= 23;
									Ji(c, 1 << o), Fi(c, 1, 1), Ji(c, 2), u = Gi(c)
								} else Fi(c, 0, n), Fi(c, 1 << -e, 0), u = Gi(c) + zi("0", a);
							return a > 0 ? s + ((r = u.length) <= a ? "0." + zi("0", a - r) + u : Vi(u, 0, r - a) + "." + Vi(u, r - a)) : s + u
						}
					});
					var Wi = {
							init: function(t) {
								var e = t.config.namespace;
								this.size = rr("zomm", e) || 1, this.ignore = ["LINK", "SCRIPT"], this.namespace = e, this.set()
							},
							setEvents: function(t) {
								var e = this,
									n = t.config.namespace;
								document.getElementById("".concat(n, "-zoom-out")).onclick = function() {
									e.zoomOut(t)
								}, document.getElementById("".concat(n, "-zoom-min")).onclick = function() {
									e.zoomMin(t)
								}, sr(window, "DOMContentLoaded", (function() {
									e.updateZoomState(t)
								}))
							},
							updateZoomState: function(t) {
								t.message.publish("zoomState", this.size)
							},
							zoomOut: function(t) {
								if (this.size >= 1.3) return Ti.playAudio(Ri.zoomOutEnd), void this.updateZoomState(t);
								this.size = parseFloat((this.size + .1).toFixed(10)), this.updateZoomState(t), this.set(), Ti.playAudio(Ri.zoomOut)
							},
							zoomMin: function(t) {
								if (this.size <= 1) return Ti.playAudio(Ri.zoomMinEnd), void this.updateZoomState(t);
								this.size = parseFloat((this.size - .1).toFixed(10)), this.updateZoomState(t), this.set(), Ti.playAudio(Ri.zoomMin)
							},
							set: function() {
								var t = this;
								[].forEach.call(document.body.children, (function(e) {
									var n = e.tagName.toUpperCase();
									t.ignore.indexOf(n) > -1 || e.id == t.namespace || (e.style.zoom = t.size)
								})), or("zomm", this.size, this.namespace)
							},
							reset: function() {
								this.size = 1, this.set()
							}
						},
						Hi = function() {
							return '<div class=\'pointer-follow-html\'>\n        <div  class="pointer-follow-html-x" id="pointer-follow-html-x"></div>\n        <div class="pointer-follow-html-y" id="pointer-follow-html-y"></div>\n      </div>'
						},
						Li = {
							init: function(t) {
								t.config.namespace, this.body = document.body, t.creatStyle("pointer-follow-style", ".pointer-follow-html-x, .pointer-follow-html-y {\n  z-index: 99999999999;\n  transform: none;\n  transform-origin: 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #ff0000 !important;\n  width: 100%;\n  height: 4px;\n}\n.pointer-follow-html-y {\n  height: 100%;\n  width: 4px;\n}"), t.creatHtml("pointer-follow-html", Hi)
							},
							setEvents: function(t) {
								var e = t.config.namespace;
								rr("pointer", e) && this.show(t), this.togglePointer(t, e)
							},
							addEventMove: function() {
								sr(this.body, "mousemove", this.mouseMove)
							},
							removeEventMove: function() {
								ur(this.body, "mousemove", this.mouseMove)
							},
							togglePointer: function(t, e) {
								var n = this,
									o = document.getElementById("".concat(e, "-pointer-follow")),
									r = document.getElementById("".concat(e, "-pointer-follow-html"));
								o.onclick = function() {
									"block" == r.style.display ? (n.reset(t), Ti.playAudio(Ri.pointerFollowClose)) : (n.show(t), Ti.playAudio(Ri.pointerFollowOpen))
								}
							},
							mouseMove: function(t) {
								t = window.event || t;
								var e = document.getElementById("pointer-follow-html-x"),
									n = document.getElementById("pointer-follow-html-y");
								e.style.top = t.clientY - 10 + "px", n.style.left = t.clientX - 10 + "px"
							},
							show: function(t) {
								var e = t.config.namespace;
								document.getElementById("".concat(e, "-pointer-follow-html")).style.display = "block", this.addEventMove(), or("pointer", !0, e)
							},
							reset: function(t) {
								var e = t.config.namespace;
								document.getElementById("".concat(e, "-pointer-follow-html")).style.display = "none", this.removeEventMove(), or("pointer", !1, e)
							}
						},
						Yi = '* {\n  cursor: url("./allaw.cur"), auto !important;\n}\n\na {\n  cursor: url("./linkaw.cur"), auto !important;\n}',
						qi = {
							init: function(t) {
								t.config.namespace
							},
							setEvents: function(t) {
								var e = t.config.namespace;
								rr("cursor", e) && t.creatStyle("cursor-auto-style", Yi, !0), document.getElementById("".concat(e, "-cursor-auto")).onclick = function() {
									var n = document.getElementById("".concat(e, "-cursor-auto-style"));
									n ? (lr(n), or("cursor", !1, e), Ti.playAudio(Ri.cursorAutoClose)) : (or("cursor", !0, e), t.creatStyle("cursor-auto-style", Yi, !0), Ti.playAudio(Ri.cursorAutoOpen))
								}
							},
							reset: function(t) {
								var e = t.config.namespace,
									n = document.getElementById("".concat(e, "-cursor-auto-style"));
								n && lr(n)
							}
						},
						Zi = function(t) {
							return "<div id='".concat(t, "-bigtext-html' class='bigtext-html'>\n           <div id='").concat(t, "-bigtext-content' class='bigtext-html-content'></div>\n           <div class='bigtext-html-btn' id='").concat(t, "-bigtext-close'>\n              <i class='bigtext-html-close' role='button' title='关闭大字幕模式'>X</i>\n           </div>\n        </div>")
						},
						Xi = function() {
							return "<div class='bigtext-html-bone'></div>"
						},
						_i = {
							init: function(t) {
								var e = t.config.namespace;
								this.body = document.body, this.namespace = e, t.creatStyle("bigtext-style", ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #797F8D;\n  background-color: #FFFFFF;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n  width: 93%;\n  margin: 0 auto;\n}\n.bigtext-html-btn {\n  width: 20px;\n  height: 20px;\n  background-color: red;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  border-radius: 10px;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.bigtext-html-bone {\n  width: 100%;\n  height: 151px;\n}"), t.creatHtml("bigtext-html", Zi), t.creatHtml("bigtext-bone", Xi)
							},
							setEvents: function(t) {
								var e = this,
									n = t.config.namespace;
								sr(window, "DOMContentLoaded", (function() {
									rr("bigtext", n) && e.show(t)
								})), this.toggleBigText(t, n)
							},
							addEventMove: function() {
								sr(this.body, "mouseover", this.mouseOver)
							},
							removeEventMove: function() {
								ur(this.body, "mouseover", this.mouseOver)
							},
							toggleBigText: function(t, e) {
								var n = this,
									o = document.getElementById("".concat(e, "-bigtext")),
									r = document.getElementById("".concat(e, "-bigtext-close"));
								o.onclick = function() {
									"block" == document.getElementById("".concat(e, "-bigtext-html")).style.display ? (n.reset(t), Ti.playAudio(Ri.bigtextClose)) : (n.show(t), Ti.playAudio(Ri.bigtextOpen))
								}, r.onclick = function() {
									n.reset(t), Ti.playAudio(Ri.bigtextClose)
								}
							},
							mouseOver: function(t) {
								var e = (t = window.event || t).target || t.srcElement,
									n = _i.namespace,
									o = e.parentNode.id.indexOf(n) > -1,
									r = document.getElementById("".concat(n, "-bigtext-content"));
								r.innerText = Ar(e).replace(ki, ""), (o || "文本" == r.innerText) && (r.innerText = "")
							},
							show: function(t) {
								var e = t.config.namespace,
									n = document.getElementById("".concat(e, "-bigtext-html")),
									o = document.getElementById("".concat(e, "-bigtext-bone"));
								n.style.display = "block", o.style.display = "block", this.addEventMove(), or("bigtext", !0, e), t.message.publish("bigTextState", !0)
							},
							reset: function(t) {
								var e = t.config.namespace,
									n = document.getElementById("".concat(e, "-bigtext-html")),
									o = document.getElementById("".concat(e, "-bigtext-bone"));
								n.style.display = "none", o.style.display = "none", this.removeEventMove(), or("bigtext", !1, e), t.message.publish("bigTextState", !1)
							}
						},
						$i = [jr, Ti, Wi, Li, qi, _i],
						ta = function(t) {
							! function(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										writable: !0,
										configurable: !0
									}
								}), Object.defineProperty(t, "prototype", {
									writable: !1
								}), e && c(t, e)
							}(n, t);
							var e = u(n);

							function n() {
								var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								return o(this, n), (t = e.call(this, r)).mergeConfig(r), t.init(), t.isShow(), t.resetAction = t.reset, t
							}
							return i(n, [{
								key: "init",
								value: function() {
									var t = this;
									$i.map((function(e) {
										return t.use(e)
									})), this.registeStyle(), this.registeHtml(), $i.map((function(e) {
										return t.useEvent(e)
									})), this.formatLongText()
								}
							}, {
								key: "reset",
								value: function() {
									Ti.reset(), Wi.reset(), qi.reset(this), Li.reset(this), _i.reset(this)
								}
							}]), n
						}(Rr);
					return ta
				}()
			}
		},
		e = {};

	function n(o) {
		var r = e[o];
		if (void 0 !== r) return r.exports;
		var i = e[o] = {
			exports: {}
		};
		return t[o].call(i.exports, i, i.exports, n), i.exports
	}
	n.n = t => {
		var e = t && t.__esModule ? () => t.default : () => t;
		return n.d(e, {
			a: e
		}), e
	}, n.d = (t, e) => {
		for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
			enumerable: !0,
			get: e[o]
		})
	}, n.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (t) {
			if ("object" == typeof window) return window
		}
	}(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	};
	var o = {};
	(() => {
		"use strict";
		n.r(o);
		const t = flarum.core.compat["forum/app"];
		var e = n.n(t);
		const r = flarum.core.compat["common/extend"],
			i = flarum.core.compat["forum/components/HeaderSecondary"];
		var a = n.n(i);
		flarum.core.compat["common/components/Button"], flarum.core.compat["common/components/LinkButton"];
		var c = n(293),
			s = n.n(c);
		e().initializers.add("hamcq/assisttool", (function() {
			(0, r.extend)(a().prototype, "items", (function(t) {
				new(s())({
					namespace: "hamcq-assist",
					domain: ""
				}), t.add("assist-tool", m("div", {
					class: "Button-label hamcq-assist",
					style: "color:var(--button-color);cursor: pointer;",
					id: "assist-open"
				}, m("i", {
					class: "fas fa-wheelchair"
				}), "Accessibility Menu"), 20)
			}))
		}))
	})(), module.exports = o
})();
//# sourceMappingURL=forum.js.map