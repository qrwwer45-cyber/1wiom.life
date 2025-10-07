! function() {
    "use strict";
    var e = {},
        t = {};

    function n(r) {
        var f = t[r];
        if (void 0 !== f) return f.exports;
        var a = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
    }
    n.m = e,
        function() {
            var e = [];
            n.O = function(t, r, f, a) {
                if (!r) {
                    var c = 1 / 0;
                    for (u = 0; u < e.length; u++) {
                        r = e[u][0], f = e[u][1], a = e[u][2];
                        for (var o = !0, d = 0; d < r.length; d++)(!1 & a || c >= a) && Object.keys(n.O).every((function(e) {
                            return n.O[e](r[d])
                        })) ? r.splice(d--, 1) : (o = !1, a < c && (c = a));
                        if (o) {
                            e.splice(u--, 1);
                            var i = f();
                            void 0 !== i && (t = i)
                        }
                    }
                    return t
                }
                a = a || 0;
                for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
                e[u] = [r, f, a]
            }
        }(), n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        },
        function() {
            var e, t = Object.getPrototypeOf ? function(e) {
                return Object.getPrototypeOf(e)
            } : function(e) {
                return e.__proto__
            };
            n.t = function(r, f) {
                if (1 & f && (r = this(r)), 8 & f) return r;
                if ("object" === typeof r && r) {
                    if (4 & f && r.__esModule) return r;
                    if (16 & f && "function" === typeof r.then) return r
                }
                var a = Object.create(null);
                n.r(a);
                var c = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var o = 2 & f && r;
                    "object" == typeof o && !~e.indexOf(o); o = t(o)) Object.getOwnPropertyNames(o).forEach((function(e) {
                    c[e] = function() {
                        return r[e]
                    }
                }));
                return c.default = function() {
                    return r
                }, n.d(a, c), a
            }
        }(), n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.f = {}, n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(t, r) {
                return n.f[r](e, t), t
            }), []))
        }, n.u = function(e) {
            return "static/js/" + e + "." + {
                70: "cdc0dd9f",
                264: "503e2528",
                299: "1a3384ea",
                352: "dd5409f2",
                354: "20f47159",
                472: "ae546b5d",
                674: "6c3a7dc0",
                739: "9b80e2ee",
                787: "32079662",
                838: "5f21b9b2",
                966: "44834d57",
                1003: "57e90c15",
                1073: "63befdc6",
                1176: "1fb85016",
                1187: "627eee99",
                1247: "f8cfd164",
                1284: "6dd5713f",
                1447: "b3f958f4",
                1463: "f69f93e8",
                1483: "63b49bb1",
                1520: "a0e50287",
                1561: "b795c189",
                1736: "6b1a8c26",
                1760: "531f5a44",
                1773: "435692b1",
                1845: "e103b46f",
                1971: "4bf91d83",
                2023: "5b176762",
                2060: "ee09c5f0",
                2079: "03e1e3d0",
                2128: "f51718eb",
                2140: "b87aba43",
                2151: "9ca32d3e",
                2189: "1ff0c537",
                2351: "3c8e0925",
                2368: "8e1fea22",
                2389: "676fab40",
                2461: "298ed87a",
                2464: "f2e9b902",
                2579: "4fc974c6",
                2580: "433f03f7",
                2651: "6bc5e4af",
                2702: "81665d83",
                2799: "351d19d0",
                2950: "abe374bc",
                3036: "cb2d3ec8",
                3059: "b9b3a893",
                3345: "65434969",
                3372: "3d353c98",
                3378: "d0e57f31",
                3430: "6c2e5da6",
                3446: "759bc993",
                3551: "e0dd6ae1",
                3576: "0baacb3b",
                3655: "2e809a62",
                3750: "67dee2b1",
                3906: "cba10d1d",
                3918: "075437eb",
                4127: "271dc840",
                4145: "c2aff3a5",
                4196: "ee659ea5",
                4277: "6097304e",
                4555: "cce2fade",
                4563: "6180289f",
                4635: "7cf9fc42",
                4651: "d4043b22",
                4690: "4672e43c",
                4757: "b43d4554",
                4851: "fdab537b",
                4866: "b20ff7a4",
                5038: "2c443355",
                5047: "80ef20f6",
                5053: "8134a23d",
                5065: "c22a59c7",
                5097: "774576e1",
                5187: "1f812d19",
                5251: "619c080f",
                5330: "c1680555",
                5331: "3befae61",
                5351: "121bec2a",
                5476: "50008933",
                5566: "8ad2cf2b",
                5588: "7514929d",
                5638: "dc2af924",
                5647: "e811a8ba",
                5668: "aa0d31d0",
                5755: "ffd63dc5",
                5784: "093e3285",
                5790: "100537c7",
                5982: "89b7c781",
                6e3: "881e26ee",
                6008: "9d6b42dd",
                6020: "e6d88a8b",
                6150: "d83b18cb",
                6167: "92e94fdb",
                6210: "2be26580",
                6316: "5b1b89f2",
                6344: "4bb52628",
                6360: "5cb2ce50",
                6364: "265836ed",
                6463: "0d52bcb7",
                6550: "bbed4dd8",
                6592: "b8f4570f",
                6622: "67a31a9a",
                6670: "cb65a412",
                6773: "cdb2fdcc",
                6797: "bb3b4447",
                6804: "65f02910",
                6918: "c960fb61",
                6950: "882e6cf4",
                7025: "b11323ae",
                7033: "0fbc1b10",
                7041: "901c4054",
                7055: "19b34205",
                7102: "e51f5015",
                7115: "07ecceea",
                7179: "7d0c2d3c",
                7208: "966752fe",
                7242: "e6d8d5e6",
                7256: "8f7fbbf7",
                7268: "6fab5328",
                7356: "9719368d",
                7374: "3f147019",
                7565: "b550a4b4",
                7617: "d1bfad39",
                7654: "71b4214d",
                7719: "97306d71",
                7734: "eb5ef2d8",
                7967: "bd5b2076",
                7975: "c5309ffe",
                8125: "6a51650a",
                8148: "41812f2b",
                8306: "bee899e5",
                8474: "93435479",
                8542: "24fd6144",
                8554: "4ad396d2",
                8582: "e8f65e65",
                8622: "6621747f",
                8653: "b310310a",
                8679: "97da5912",
                8697: "b297e9f6",
                8744: "a27d36bf",
                8790: "338cc732",
                8856: "2e7bb965",
                8933: "1da71026",
                8979: "2eb10656",
                9013: "dc7f66bb",
                9024: "37f442ab",
                9029: "9cc0db35",
                9043: "d2a47956",
                9062: "ff6ad788",
                9072: "8b038bc9",
                9080: "7fa9d2d2",
                9096: "f5b40d38",
                9169: "2e4ac434",
                9252: "dca1898e",
                9255: "b80ed7b5",
                9258: "50813b35",
                9276: "6d3bffed",
                9370: "53760d3d",
                9382: "a230bc1a",
                9394: "51d11405",
                9414: "8e333096",
                9418: "3921e6a9",
                9423: "1ef2bb2d",
                9565: "dfba92c2",
                9577: "92d95a8c",
                9579: "34b44bb2",
                9641: "30d5b41e",
                9645: "91962e18",
                9655: "41ed4940",
                9656: "5b4b0465",
                9708: "e7623b29",
                9808: "cf16fb3b",
                9816: "d5fe09ad",
                9831: "badebf09",
                9833: "2c638ae7",
                9837: "94d88330",
                9849: "bc981d9d",
                9882: "8ae17752",
                9938: "3131c98b",
                9956: "175218eb",
                9968: "c2cdf668"
            }[e] + ".chunk.js"
        }, n.miniCssF = function(e) {
            return "static/css/" + e + ".b27b5137.chunk.css"
        }, n.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), n.hmd = function(e) {
            return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
                enumerable: !0,
                set: function() {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                }
            }), e
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {},
                t = "coin-flip-app-ts:";
            n.l = function(r, f, a, c) {
                if (e[r]) e[r].push(f);
                else {
                    var o, d;
                    if (void 0 !== a)
                        for (var i = document.getElementsByTagName("script"), u = 0; u < i.length; u++) {
                            var b = i[u];
                            if (b.getAttribute("src") == r || b.getAttribute("data-webpack") == t + a) {
                                o = b;
                                break
                            }
                        }
                    o || (d = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + a), o.src = r), e[r] = [f];
                    var l = function(t, n) {
                            o.onerror = o.onload = null, clearTimeout(s);
                            var f = e[r];
                            if (delete e[r], o.parentNode && o.parentNode.removeChild(o), f && f.forEach((function(e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        s = setTimeout(l.bind(null, void 0, {
                            type: "timeout",
                            target: o
                        }), 12e4);
                    o.onerror = l.bind(null, o.onerror), o.onload = l.bind(null, o.onload), d && document.head.appendChild(o)
                }
            }
        }(), n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/",
        function() {
            if ("undefined" !== typeof document) {
                var e = function(e) {
                        return new Promise((function(t, r) {
                            var f = n.miniCssF(e),
                                a = n.p + f;
                            if (function(e, t) {
                                    for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                                        var f = (c = n[r]).getAttribute("data-href") || c.getAttribute("href");
                                        if ("stylesheet" === c.rel && (f === e || f === t)) return c
                                    }
                                    var a = document.getElementsByTagName("style");
                                    for (r = 0; r < a.length; r++) {
                                        var c;
                                        if ((f = (c = a[r]).getAttribute("data-href")) === e || f === t) return c
                                    }
                                }(f, a)) return t();
                            ! function(e, t, n, r, f) {
                                var a = document.createElement("link");
                                a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = function(n) {
                                    if (a.onerror = a.onload = null, "load" === n.type) r();
                                    else {
                                        var c = n && ("load" === n.type ? "missing" : n.type),
                                            o = n && n.target && n.target.href || t,
                                            d = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                                        d.code = "CSS_CHUNK_LOAD_FAILED", d.type = c, d.request = o, a.parentNode && a.parentNode.removeChild(a), f(d)
                                    }
                                }, a.href = t, n ? n.parentNode.insertBefore(a, n.nextSibling) : document.head.appendChild(a)
                            }(e, a, null, t, r)
                        }))
                    },
                    t = {
                        3666: 0
                    };
                n.f.miniCss = function(n, r) {
                    t[n] ? r.push(t[n]) : 0 !== t[n] && {
                        7967: 1
                    }[n] && r.push(t[n] = e(n).then((function() {
                        t[n] = 0
                    }), (function(e) {
                        throw delete t[n], e
                    })))
                }
            }
        }(),
        function() {
            var e = {
                3666: 0
            };
            n.f.j = function(t, r) {
                var f = n.o(e, t) ? e[t] : void 0;
                if (0 !== f)
                    if (f) r.push(f[2]);
                    else if (/^(3666|7967)$/.test(t)) e[t] = 0;
                else {
                    var a = new Promise((function(n, r) {
                        f = e[t] = [n, r]
                    }));
                    r.push(f[2] = a);
                    var c = n.p + n.u(t),
                        o = new Error;
                    n.l(c, (function(r) {
                        if (n.o(e, t) && (0 !== (f = e[t]) && (e[t] = void 0), f)) {
                            var a = r && ("load" === r.type ? "missing" : r.type),
                                c = r && r.target && r.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + a + ": " + c + ")", o.name = "ChunkLoadError", o.type = a, o.request = c, f[1](o)
                        }
                    }), "chunk-" + t, t)
                }
            }, n.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, r) {
                    var f, a, c = r[0],
                        o = r[1],
                        d = r[2],
                        i = 0;
                    if (c.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (f in o) n.o(o, f) && (n.m[f] = o[f]);
                        if (d) var u = d(n)
                    }
                    for (t && t(r); i < c.length; i++) a = c[i], n.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                    return n.O(u)
                },
                r = self.webpackChunkcoin_flip_app_ts = self.webpackChunkcoin_flip_app_ts || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }()
}();
//# sourceMappingURL=runtime.830375236abe52ab9f6f.js.map