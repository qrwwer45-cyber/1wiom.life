"use strict";
(self.webpackChunkcoin_flip_app_ts = self.webpackChunkcoin_flip_app_ts || []).push([
    [5638], {
        5196: function(t, e, n) {
            n.d(e, {
                Hg: function() {
                    return r
                },
                lN: function() {
                    return i
                },
                Np: function() {
                    return s
                },
                oV: function() {
                    return o
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                finishRound: function() {
                    return j
                },
                getLiveBetsHistory: function() {
                    return b
                },
                getSession: function() {
                    return g
                },
                getSettings: function() {
                    return v
                },
                getUser: function() {
                    return m
                },
                getUsersHistory: function() {
                    return Z
                },
                patchSession: function() {
                    return w
                },
                patchWin: function() {
                    return y
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                deleteRound: function() {
                    return H
                },
                getSession: function() {
                    return E
                },
                getSessionStats: function() {
                    return M
                },
                getSessions: function() {
                    return N
                },
                getSettings: function() {
                    return S
                },
                getUser: function() {
                    return k
                },
                patchSession: function() {
                    return B
                }
            });
            var s = {};
            n.r(s), n.d(s, {
                finishSession: function() {
                    return R
                },
                getSession: function() {
                    return I
                },
                getSessionStats: function() {
                    return D
                },
                getSessions: function() {
                    return P
                },
                getSettings: function() {
                    return U
                },
                getUser: function() {
                    return F
                },
                patchSession: function() {
                    return G
                },
                putRound: function() {
                    return T
                }
            });
            var o = {};
            n.r(o), n.d(o, {
                finishSession: function() {
                    return Y
                },
                getSession: function() {
                    return z
                },
                getSessionStats: function() {
                    return tt
                },
                getSessions: function() {
                    return $
                },
                getSettings: function() {
                    return J
                },
                getUser: function() {
                    return q
                },
                patchSession: function() {
                    return K
                },
                putRound: function() {
                    return X
                }
            });
            var a, u, c, l, d, p = n(4165),
                f = n(5861),
                C = n(2659),
                h = "/coin/session",
                x = (0, C.p8)(null !== (a = "") ? a : ""),
                v = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.get("/coin/settings"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.get("/coin/user"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.get(h));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.post(h, e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e, n, r) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.post("/coin/session/".concat(r, "/round/").concat(n), {
                                        selected: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.post("/coin/session/".concat(e, "/cashout")));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                Z = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.get("/coin/history"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", x.get("/coin/wins-history"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                _ = "/double/session",
                L = "/double/round",
                A = (0, C.p8)(null !== (u = "") ? u : ""),
                S = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", A.get("/double/settings"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", A.get("/double/user"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", A.get("".concat(_, "/").concat(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                M = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", A.get("".concat(_, "/").concat(e, "/stats")));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", A.put(L, e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                N = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e, n) {
                        var r;
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = JSON.stringify({
                                        states: n
                                    }), t.abrupt("return", A.get("".concat("/double/sessions", "?filter=").concat(r), {
                                        params: e
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                H = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", A.delete(L));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                O = "/mines/session",
                V = (0, C.p8)(null !== (c = "") ? c : ""),
                F = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", V.get("/mines/user"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                U = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", V.get("/mines/settings"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", V.get("".concat(O, "/").concat(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                R = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", V.put("".concat(O, "/").concat(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                G = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", V.post(O, e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", V.put("/mines/round", e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                P = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e, n) {
                        var r;
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = "?filter=".concat(JSON.stringify({
                                        states: [n]
                                    })), t.abrupt("return", V.get("".concat("/mines/sessions").concat(n ? r : ""), {
                                        params: e
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", V.get("".concat(O, "/").concat(e, "/stats")));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                W = "/tower/session",
                Q = (0, C.p8)(null !== (l = "") ? l : ""),
                q = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Q.get("/tower/user"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                J = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t() {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Q.get("/tower/settings"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                z = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Q.get("".concat(W, "/").concat(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                Y = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Q.put("".concat(W, "/").concat(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                K = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Q.post(W, e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                X = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Q.put("/tower/round", e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                $ = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e, n) {
                        var r;
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = "?filter=".concat(JSON.stringify({
                                        states: [n]
                                    })), t.abrupt("return", Q.get("".concat("/tower/sessions").concat(n ? r : ""), {
                                        params: e
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                tt = function() {
                    var t = (0, f.Z)((0, p.Z)().mark((function t(e) {
                        return (0, p.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Q.get("".concat(W, "/").concat(e, "/stats")));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                et = (n(6761), "/public/api/v1");
            "".concat(et, "/settings"), "".concat(et, "/join"), "".concat(et, "/history"), "".concat(et, "/roll"), "".concat(et, "/get_active_game"), "".concat(et, "/user/balance"), (0, C.p8)(null !== (d = "") ? d : "")
        },
        2659: function(t, e, n) {
            n.d(e, {
                FG: function() {
                    return S
                },
                p8: function() {
                    return A
                }
            });
            var r, i, s = n(4165),
                o = n(5861),
                a = n(1044),
                u = n(6761),
                c = n(1468),
                l = n(3144),
                d = n(5671),
                p = n(136),
                f = n(9388),
                C = "one-play-handshake",
                h = n(1752),
                x = n(1120),
                v = function(t) {
                    (0, p.Z)(n, t);
                    var e = (0, f.Z)(n);

                    function n() {
                        var t;
                        (0, d.Z)(this, n), t = e.call(this);
                        var r = new MessageChannel;
                        return t.addPort(r.port1), window.parent.postMessage(C, "*", [r.port2]), t
                    }
                    return (0, l.Z)(n)
                }(function(t) {
                    (0, p.Z)(n, t);
                    var e = (0, f.Z)(n);

                    function n() {
                        var t;
                        return (0, d.Z)(this, n), (t = e.call(this)).ports = [], t
                    }
                    return (0, l.Z)(n, [{
                        key: "addPort",
                        value: function(t) {
                            this.ports.push(t), t.onmessage = this.onMessage.bind(this)
                        }
                    }, {
                        key: "onMessage",
                        value: function(t) {
                            var e = JSON.parse(t.data);
                            (0, h.Z)((0, x.Z)(n.prototype), "emit", this).call(this, e.name, e.payload)
                        }
                    }, {
                        key: "emit",
                        value: function(t, e) {
                            this.ports.forEach((function(n) {
                                return n.postMessage(JSON.stringify({
                                    name: t,
                                    payload: e
                                }))
                            })), (0, h.Z)((0, x.Z)(n.prototype), "emit", this).call(this, t, e)
                        }
                    }]), n
                }(function() {
                    function t() {
                        (0, d.Z)(this, t), this.listeners = void 0, this.listeners = {}
                    }
                    return (0, l.Z)(t, [{
                        key: "emit",
                        value: function(t, e) {
                            var n = this.listeners[t] || [];
                            Object.values(n).forEach((function(t) {
                                t(e)
                            }))
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            var n = this;
                            return this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e),
                                function() {
                                    n.listeners[t] = n.listeners[t].filter((function(t) {
                                        return t !== e
                                    }))
                                }
                        }
                    }, {
                        key: "once",
                        value: function(t, e) {
                            var n = this.on(t, (function(t) {
                                n(), e(t)
                            }));
                            return n
                        }
                    }]), t
                }())),
                m = window.webkit,
                g = window.androidBridge,
                w = function(t) {
                    var e = t.name,
                        n = t.payload,
                        r = JSON.stringify({
                            name: e,
                            payload: n
                        });
                    window.postMessage(r),
                        function(t) {
                            m && m.messageHandlers.message.postMessage(t)
                        }(r),
                        function(t) {
                            g && g.nativePostMessage(t)
                        }(r)
                },
                j = n(4423),
                y = n(7454),
                Z = function(t, e, n) {
                    switch (t.message) {
                        case "Insufficient funds":
                            null === n || void 0 === n || n.noFunds();
                            break;
                        case "Currency not supported":
                            null === n || void 0 === n || n.currencyNotSupported();
                            break;
                        case "Rate below the minimum":
                            null === n || void 0 === n || n.smallBid();
                            break;
                        case "Rate above the maximum":
                            null === n || void 0 === n || n.highBid();
                            break;
                        case "AxiosError: Request failed with status code 500":
                            null === n || void 0 === n || n.serverError();
                            break;
                        default:
                            null === n || void 0 === n || n.defaultError({
                                header: e.exists(t.header) ? e.t(t.header) : e.t("SomethingWentWrong"),
                                body: e.t(t.message)
                            })
                    }
                },
                b = new v,
                _ = [j.V[2], j.V[3], j.V[4], j.V[5]],
                L = null !== (r = null === (i = document.querySelector('meta[name="csrf-token"]')) || void 0 === i ? void 0 : i.getAttribute("content")) && void 0 !== r ? r : null,
                A = function(t, e, n) {
                    var r = a.ZP.create({
                        timeout: 2e4,
                        baseURL: t,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "X-CSRF-Token": L
                        },
                        params: {
                            thanus_debug: new URLSearchParams(window.location.search).has("thanus_debug")
                        }
                    });
                    return r.interceptors.request.use((function(t) {
                        return t.headers ? (t.headers["x-auth-token"] = (0, u.He)(), "post" !== t.method && "put" !== t.method || "demo" !== t.headers["x-auth-token"] || (b.emit("authorization_error", null), w({
                            name: "authorization_error",
                            payload: null
                        })), t) : t
                    }), function() {
                        var t = (0, o.Z)((0, s.Z)().mark((function t(e) {
                            return (0, s.Z)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", Promise.reject(e));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()), r.interceptors.response.use((function(t) {
                        return t
                    }), function() {
                        var t = (0, o.Z)((0, s.Z)().mark((function t(r) {
                            var i, o, a, u, l, d;
                            return (0, s.Z)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("ERR_NETWORK" !== r.code || window.navigator.onLine || (e ? e.noInternetDebounced() : c.C.R0.noInternet()), 400 !== (null === r || void 0 === r || null === (i = r.response) || void 0 === i ? void 0 : i.status) && 500 !== (null === r || void 0 === r || null === (o = r.response) || void 0 === o ? void 0 : o.status)) {
                                            t.next = 13;
                                            break
                                        }
                                        if (null === r || void 0 === r || null === (a = r.response) || void 0 === a || !a.data.error.type) {
                                            t.next = 12;
                                            break
                                        }
                                        if (l = null === r || void 0 === r || null === (u = r.response) || void 0 === u ? void 0 : u.data.error, !n || !e) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.next = 7, n;
                                    case 7:
                                        d = t.sent, Z(l, d, e), t.next = 12;
                                        break;
                                    case 11:
                                        _.every((function(t) {
                                            return t !== l.type
                                        })) && y.R0.default(l.header, l.message);
                                    case 12:
                                        throw r.response.data.error ? r.response.data.error : {};
                                    case 13:
                                        throw new Error(r);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()), r
                },
                S = "AxiosError: Request failed with status code 404"
        },
        2486: function(t, e, n) {
            n.d(e, {
                M5: function() {
                    return i
                },
                Se: function() {
                    return s
                },
                Ws: function() {
                    return u
                },
                gm: function() {
                    return c
                },
                nM: function() {
                    return l
                },
                EF: function() {
                    return d
                },
                lQ: function() {
                    return o
                },
                kV: function() {
                    return a
                }
            });
            var r = n(184),
                i = function() {
                    return (0, r.jsxs)("svg", {
                        width: "127",
                        height: "22",
                        viewBox: "0 0 127 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("mask", {
                            id: "mask0_310_7828",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "1",
                            y: "3",
                            width: "126",
                            height: "16",
                            children: (0, r.jsx)("path", {
                                d: "M127 3.25673H1.00781V18.7433H127V3.25673Z",
                                fill: "white"
                            })
                        }), (0, r.jsxs)("g", {
                            mask: "url(#mask0_310_7828)",
                            children: [(0, r.jsx)("path", {
                                d: "M74.811 14.2275V18.7503H69.5721V6.52647H84.6075V9.72214H74.811V11.0318H84.6075V14.2275H74.811Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M100.864 15.0306V18.7501H86.5273V6.52628H91.7665V15.0306H100.864Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M107.46 6.52647V18.7503H102.221V6.52647H107.46Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M114.693 15.5023V18.7503H109.455V6.52647H120.562C122.947 6.52647 124.619 6.84081 125.573 7.46946C126.528 8.09811 127.005 9.23901 127.005 10.8921V11.1366C127.005 12.685 126.516 13.8026 125.538 14.4895C124.571 15.1646 122.913 15.5023 120.562 15.5023H114.693ZM119.827 9.72214H114.693V12.3066H119.827C120.608 12.3066 121.126 12.2251 121.382 12.0621C121.638 11.8875 121.766 11.5615 121.766 11.0842V10.9445C121.766 10.4672 121.638 10.1471 121.382 9.98408C121.126 9.80945 120.608 9.72214 119.827 9.72214Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M11.034 18.9245H9.28779C6.23765 18.9245 4.09556 18.4995 2.86154 17.6497C1.62751 16.7998 1.0105 15.2457 1.0105 12.9872V12.2886C1.0105 10.0301 1.62751 8.47596 2.86154 7.6261C4.09556 6.77626 6.23765 6.35133 9.28779 6.35133H11.034C13.8514 6.35133 15.8828 6.7064 17.1285 7.41655C18.3741 8.1267 19.0901 9.38401 19.2764 11.1885H13.9328C13.7582 10.618 13.438 10.2455 12.9724 10.0709C12.5067 9.89625 11.5929 9.80894 10.2307 9.80894H10.0911C9.26449 9.80894 8.60674 9.8555 8.11779 9.94864C7.62884 10.0301 7.25047 10.1873 6.98272 10.4201C6.7266 10.6413 6.55779 10.9033 6.4763 11.2059C6.3948 11.5086 6.35406 11.9219 6.35406 12.4458V12.8474C6.35406 13.5459 6.43555 14.0698 6.59854 14.4191C6.76152 14.7567 7.11077 15.0186 7.64629 15.2049C8.19346 15.3795 9.00838 15.4669 10.0911 15.4669H10.2307C11.5929 15.4669 12.5067 15.3795 12.9724 15.2049C13.438 15.0303 13.7582 14.6577 13.9328 14.0872H19.2764C19.0901 15.8917 18.3741 17.149 17.1285 17.8592C15.8828 18.5693 13.8514 18.9245 11.034 18.9245Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M46.4944 6.52628V18.7501H41.2556V6.52628H46.4944Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M67.5768 6.52628V18.7501H59.6489L53.5543 10.7872H53.3797V18.7501H48.4902V6.52628H56.4182L62.5126 14.5067H62.6873V6.52628H67.5768Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M32.2404 16.2533L30.4731 16.6715C27.3803 17.4034 25.1074 17.5048 23.6541 16.9753C22.2123 16.4433 21.2312 15.0783 20.7111 12.8805L20.5502 12.2007C20.0301 10.003 20.2953 8.34312 21.3457 7.22121C22.4075 6.09661 24.4848 5.16834 27.5775 4.43641L29.3448 4.01817C32.4376 3.28624 34.7049 3.18632 36.1468 3.71841C37.6 4.24781 38.5867 5.61141 39.1069 7.80921L39.2677 8.48893C39.7878 10.6867 39.517 12.3479 38.4552 13.4726C37.4047 14.5944 35.3331 15.5213 32.2404 16.2533ZM30.3906 13.138L30.7304 13.0576C31.4328 12.8913 32.0096 12.7249 32.4606 12.5583C32.909 12.3805 33.2614 12.2014 33.5178 12.021C33.7855 11.838 33.9676 11.6215 34.0639 11.3714C34.1575 11.11 34.1975 10.8493 34.1839 10.5893C34.1815 10.3267 34.1321 9.99143 34.0356 9.58359L33.9431 9.19275C33.8439 8.77358 33.7365 8.44608 33.6209 8.21026C33.5166 7.97175 33.3653 7.76229 33.1671 7.5819C32.9775 7.38749 32.7221 7.2685 32.4007 7.22492C32.0794 7.18134 31.6797 7.18619 31.2018 7.23947C30.7213 7.28142 30.1298 7.38551 29.4274 7.55174L29.0875 7.63216C28.3852 7.79839 27.8097 7.97045 27.3614 8.14834C26.9103 8.31492 26.5509 8.4897 26.2831 8.67269C26.0154 8.85569 25.8347 9.07791 25.7411 9.33933C25.6561 9.58676 25.6148 9.84178 25.617 10.1044C25.6308 10.3644 25.6872 10.7039 25.7863 11.1231L25.8788 11.514C25.9995 12.0237 26.1343 12.4165 26.2833 12.6923C26.4297 12.9568 26.6656 13.1701 26.9911 13.3323C27.3139 13.4832 27.741 13.5437 28.2722 13.5137C28.8121 13.4697 29.5182 13.3444 30.3906 13.138Z",
                                fill: "#D8BB31"
                            })]
                        })]
                    })
                },
                s = function() {
                    return (0, r.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            clipPath: "url(#clip0_788_63415)",
                            children: [(0, r.jsx)("path", {
                                d: "M12.0474 23.9014C18.4847 23.9014 23.7031 18.6829 23.7031 12.2456C23.7031 5.80831 18.4847 0.589844 12.0474 0.589844C5.61007 0.589844 0.391602 5.80831 0.391602 12.2456C0.391602 18.6829 5.61007 23.9014 12.0474 23.9014Z",
                                fill: "url(#paint0_linear_788_63415)"
                            }), (0, r.jsx)("path", {
                                d: "M12.0474 23.3877C18.4847 23.3877 23.7031 18.1692 23.7031 11.7319C23.7031 5.29464 18.4847 0.0761719 12.0474 0.0761719C5.61007 0.0761719 0.391602 5.29464 0.391602 11.7319C0.391602 18.1692 5.61007 23.3877 12.0474 23.3877Z",
                                fill: "url(#paint1_linear_788_63415)"
                            }), (0, r.jsx)("path", {
                                d: "M12.0472 22.9988C18.2698 22.9988 23.3142 17.9544 23.3142 11.7318C23.3142 5.50924 18.2698 0.464844 12.0472 0.464844C5.82467 0.464844 0.780273 5.50924 0.780273 11.7318C0.780273 17.9544 5.82467 22.9988 12.0472 22.9988Z",
                                fill: "url(#paint2_linear_788_63415)"
                            }), (0, r.jsx)("path", {
                                d: "M12.0473 21.2362C17.2964 21.2362 21.5516 16.9809 21.5516 11.7319C21.5516 6.48276 17.2964 2.22754 12.0473 2.22754C6.79819 2.22754 2.54297 6.48276 2.54297 11.7319C2.54297 16.9809 6.79819 21.2362 12.0473 21.2362Z",
                                fill: "url(#paint3_linear_788_63415)"
                            }), (0, r.jsx)("path", {
                                opacity: "0.7",
                                d: "M19.5267 17.6006C20.5932 16.1026 21.219 14.2702 21.219 12.291C21.219 7.22763 17.1137 3.12227 12.0503 3.12227C6.98468 3.12227 2.87933 7.22763 2.87933 12.291C2.87933 14.2702 3.50518 16.1026 4.57163 17.6006C3.30184 15.9851 2.54492 13.9449 2.54492 11.7307C2.54492 6.48203 6.79941 2.22754 12.0503 2.22754C17.2989 2.22754 21.5534 6.48203 21.5534 11.7307C21.5534 13.9449 20.7965 15.9851 19.5267 17.6006Z",
                                fill: "url(#paint4_linear_788_63415)"
                            }), (0, r.jsx)("path", {
                                d: "M18.2996 7.03807C16.5843 5.80271 14.4108 5.06396 12.0482 5.06396C9.68567 5.06396 7.51217 5.80271 5.79688 7.03807C7.13403 5.19814 9.43358 3.98438 12.0482 3.98438C14.6629 3.98438 16.9625 5.19814 18.2996 7.03807Z",
                                fill: "url(#paint5_linear_788_63415)"
                            }), (0, r.jsx)("path", {
                                d: "M6.39551 20.6709C7.94593 21.5133 9.91052 22.0171 12.046 22.0171C14.1815 22.0171 16.1461 21.5133 17.6965 20.6709C16.4879 21.9256 14.4094 22.7533 12.046 22.7533C9.68265 22.7533 7.60413 21.9256 6.39551 20.6709Z",
                                fill: "url(#paint6_linear_788_63415)"
                            }), (0, r.jsx)("g", {
                                filter: "url(#filter0_i_788_63415)",
                                children: (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M15.0325 11.081L17.73 10.2081C17.6231 9.93791 17.4846 9.68077 17.3145 9.4367C16.8569 8.77021 16.2202 8.25294 15.4046 7.88488C14.5988 7.50687 13.6787 7.31787 12.6441 7.31787C11.2415 7.31787 10.0578 7.62127 9.09284 8.22807C8.12793 8.83487 7.48632 9.66549 7.168 10.7199H5.88477V12.2121H6.9591V12.6H5.88477V14.0921H7.168C7.48632 15.1466 8.12296 15.9772 9.07792 16.584C10.0428 17.1908 11.2316 17.4942 12.6441 17.4942C13.6787 17.4942 14.5988 17.3102 15.4046 16.9421C16.2202 16.574 16.8569 16.0618 17.3145 15.4052C17.4846 15.1574 17.6231 14.898 17.73 14.6268L15.0325 13.7806C14.9277 14.0689 14.7433 14.312 14.4794 14.5099C14.0417 14.8382 13.43 15.0023 12.6441 15.0023C12.0174 15.0023 11.5001 14.9277 11.0923 14.7785C10.6844 14.6293 10.381 14.4005 10.1821 14.0921H14.0915V12.6H9.86875V12.2121H14.0915V10.7199H10.2119C10.6297 10.1131 11.4355 9.80973 12.6292 9.80973C13.3852 9.80973 13.992 9.98381 14.4496 10.332C14.7295 10.5388 14.9238 10.7885 15.0325 11.081Z",
                                    fill: "#FD981C"
                                })
                            })]
                        }), (0, r.jsxs)("defs", {
                            children: [(0, r.jsxs)("filter", {
                                id: "filter0_i_788_63415",
                                x: "5.88477",
                                y: "7.31787",
                                width: "11.8447",
                                height: "10.1763",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, r.jsx)("feOffset", {
                                    dy: "0.42189"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.868571 0 0 0 0 0.464762 0 0 0 0 0.0114286 0 0 0 1 0"
                                }), (0, r.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect1_innerShadow_788_63415"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint0_linear_788_63415",
                                x1: "12.0474",
                                y1: "0.589331",
                                x2: "12.0474",
                                y2: "23.9014",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.341442",
                                    stopColor: "#F85C03"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.64054",
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F85A03"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint1_linear_788_63415",
                                x1: "12.0474",
                                y1: "0.0761719",
                                x2: "12.0474",
                                y2: "23.3877",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    offset: "4e-07",
                                    stopColor: "#FDBC2E"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.754955",
                                    stopColor: "#FF7C00"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint2_linear_788_63415",
                                x1: "12.0472",
                                y1: "0.464844",
                                x2: "12.0472",
                                y2: "22.9988",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FAE28E"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.751352",
                                    stopColor: "#FAE25C"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint3_linear_788_63415",
                                x1: "12.0473",
                                y1: "2.22754",
                                x2: "12.0473",
                                y2: "21.2362",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FAE25C"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.751352",
                                    stopColor: "#FDBC2E"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint4_linear_788_63415",
                                x1: "12.049",
                                y1: "2.22772",
                                x2: "12.049",
                                y2: "17.6004",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.341442",
                                    stopColor: "#F85C03"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.64054",
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F85A03"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint5_linear_788_63415",
                                x1: "5.79666",
                                y1: "5.51147",
                                x2: "18.2997",
                                y2: "5.51147",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "white",
                                    stopOpacity: "0"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.355856",
                                    stopColor: "white"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.640541",
                                    stopColor: "white",
                                    stopOpacity: "0.999"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint6_linear_788_63415",
                                x1: "17.6966",
                                y1: "21.7124",
                                x2: "6.3953",
                                y2: "21.7124",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "white",
                                    stopOpacity: "0"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.323423",
                                    stopColor: "white"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.687387",
                                    stopColor: "white",
                                    stopOpacity: "0.999"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsx)("clipPath", {
                                id: "clip0_788_63415",
                                children: (0, r.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white"
                                })
                            })]
                        })]
                    })
                },
                o = function() {
                    return (0, r.jsxs)("svg", {
                        width: "25",
                        height: "24",
                        viewBox: "0 0 25 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            clipPath: "url(#clip0_818_13083)",
                            children: [(0, r.jsx)("path", {
                                d: "M12.5483 23.9004C18.9856 23.9004 24.2041 18.6819 24.2041 12.2446C24.2041 5.80733 18.9856 0.588867 12.5483 0.588867C6.11104 0.588867 0.892578 5.80733 0.892578 12.2446C0.892578 18.6819 6.11104 23.9004 12.5483 23.9004Z",
                                fill: "url(#paint0_linear_818_13083)"
                            }), (0, r.jsx)("path", {
                                d: "M12.5483 23.3869C18.9856 23.3869 24.2041 18.1684 24.2041 11.7311C24.2041 5.29378 18.9856 0.0753174 12.5483 0.0753174C6.11104 0.0753174 0.892578 5.29378 0.892578 11.7311C0.892578 18.1684 6.11104 23.3869 12.5483 23.3869Z",
                                fill: "url(#paint1_linear_818_13083)"
                            }), (0, r.jsx)("path", {
                                d: "M12.5492 22.998C18.7718 22.998 23.8162 17.9536 23.8162 11.7311C23.8162 5.5085 18.7718 0.464111 12.5492 0.464111C6.32662 0.464111 1.28223 5.5085 1.28223 11.7311C1.28223 17.9536 6.32662 22.998 12.5492 22.998Z",
                                fill: "url(#paint2_linear_818_13083)"
                            }), (0, r.jsx)("path", {
                                d: "M12.5473 21.2356C17.7964 21.2356 22.0516 16.9803 22.0516 11.7312C22.0516 6.48215 17.7964 2.22693 12.5473 2.22693C7.2982 2.22693 3.04297 6.48215 3.04297 11.7312C3.04297 16.9803 7.2982 21.2356 12.5473 21.2356Z",
                                fill: "url(#paint3_linear_818_13083)"
                            }), (0, r.jsx)("path", {
                                opacity: "0.7",
                                d: "M20.0267 17.6C21.0932 16.102 21.719 14.2696 21.719 12.2904C21.719 7.22702 17.6137 3.12166 12.5503 3.12166C7.48468 3.12166 3.37933 7.22702 3.37933 12.2904C3.37933 14.2696 4.00518 16.102 5.07163 17.6C3.80184 15.9845 3.04492 13.9443 3.04492 11.73C3.04492 6.48142 7.29941 2.22693 12.5503 2.22693C17.7989 2.22693 22.0534 6.48142 22.0534 11.73C22.0534 13.9443 21.2965 15.9845 20.0267 17.6Z",
                                fill: "url(#paint4_linear_818_13083)"
                            }), (0, r.jsx)("path", {
                                d: "M18.7996 7.0377C17.0843 5.80234 14.9108 5.0636 12.5482 5.0636C10.1857 5.0636 8.01217 5.80234 6.29688 7.0377C7.63403 5.19777 9.93358 3.98401 12.5482 3.98401C15.1629 3.98401 17.4625 5.19777 18.7996 7.0377Z",
                                fill: "url(#paint5_linear_818_13083)"
                            }), (0, r.jsx)("path", {
                                d: "M6.89648 20.6705C8.44691 21.513 10.4115 22.0167 12.547 22.0167C14.6825 22.0167 16.6471 21.513 18.1975 20.6705C16.9889 21.9252 14.9103 22.753 12.547 22.753C10.1836 22.753 8.1051 21.9252 6.89648 20.6705Z",
                                fill: "url(#paint6_linear_818_13083)"
                            }), (0, r.jsx)("g", {
                                filter: "url(#filter0_i_818_13083)",
                                children: (0, r.jsx)("path", {
                                    d: "M14.1977 11.3458C16.3989 11.5893 17.4995 12.3783 17.4995 13.7126V13.8587C17.4995 14.6379 17.1927 15.2808 16.5791 15.7872C15.9655 16.2937 15.0938 16.6298 13.9639 16.7953V18.0226H10.779V16.7953C8.47059 16.4837 7.31641 15.4317 7.31641 13.6396V13.5373H10.1653V13.6396C10.1653 14.0194 10.3504 14.3019 10.7205 14.487C11.1004 14.6623 11.6896 14.7499 12.4883 14.7499C13.1896 14.7499 13.7009 14.7012 14.0224 14.6038C14.3535 14.4967 14.5191 14.336 14.5191 14.1217V14.0341C14.5191 13.8782 14.446 13.7613 14.2999 13.6834C14.1539 13.5958 13.9104 13.5324 13.5695 13.4935L10.6913 13.1867C8.53877 12.9529 7.46251 12.1348 7.46251 10.7322V10.5861C7.46251 9.86536 7.74983 9.27609 8.32449 8.81831C8.89915 8.36053 9.7173 8.0586 10.779 7.9125V6.67065H13.9639V7.92711C15.0451 8.09269 15.8632 8.42384 16.4184 8.92058C16.9833 9.40758 17.2658 10.0553 17.2658 10.8637V10.966H14.446V10.8637C14.446 10.5423 14.2756 10.3134 13.9347 10.177C13.5938 10.0309 13.0338 9.95789 12.2546 9.95789C11.602 9.95789 11.1247 10.0017 10.8228 10.0894C10.5306 10.1673 10.3845 10.2988 10.3845 10.4838V10.5715C10.3845 10.6981 10.4575 10.7955 10.6036 10.8637C10.7497 10.9319 11.0176 10.9855 11.4072 11.0244L14.1977 11.3458Z",
                                    fill: "#FD981C"
                                })
                            })]
                        }), (0, r.jsxs)("defs", {
                            children: [(0, r.jsxs)("filter", {
                                id: "filter0_i_818_13083",
                                x: "7.31641",
                                y: "6.67065",
                                width: "10.1836",
                                height: "11.3519",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, r.jsx)("feOffset", {
                                    dy: "0.413086"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.868571 0 0 0 0 0.464762 0 0 0 0 0.0114286 0 0 0 1 0"
                                }), (0, r.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect1_innerShadow_818_13083"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint0_linear_818_13083",
                                x1: "12.5483",
                                y1: "0.588355",
                                x2: "12.5483",
                                y2: "23.9004",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.341442",
                                    stopColor: "#F85C03"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.64054",
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F85A03"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint1_linear_818_13083",
                                x1: "12.5483",
                                y1: "0.0753174",
                                x2: "12.5483",
                                y2: "23.3869",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    offset: "4e-07",
                                    stopColor: "#FDBC2E"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.754955",
                                    stopColor: "#FF7C00"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint2_linear_818_13083",
                                x1: "12.5492",
                                y1: "0.464111",
                                x2: "12.5492",
                                y2: "22.998",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FAE28E"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.751352",
                                    stopColor: "#FAE25C"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint3_linear_818_13083",
                                x1: "12.5473",
                                y1: "2.22693",
                                x2: "12.5473",
                                y2: "21.2356",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FAE25C"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.751352",
                                    stopColor: "#FDBC2E"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint4_linear_818_13083",
                                x1: "12.549",
                                y1: "2.22711",
                                x2: "12.549",
                                y2: "17.5998",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.341442",
                                    stopColor: "#F85C03"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.64054",
                                    stopColor: "#FF7C00"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F85A03"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint5_linear_818_13083",
                                x1: "6.29666",
                                y1: "5.51111",
                                x2: "18.7997",
                                y2: "5.51111",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "white",
                                    stopOpacity: "0"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.355856",
                                    stopColor: "white"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.640541",
                                    stopColor: "white",
                                    stopOpacity: "0.999"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint6_linear_818_13083",
                                x1: "18.1976",
                                y1: "21.712",
                                x2: "6.89627",
                                y2: "21.712",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "white",
                                    stopOpacity: "0"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.323423",
                                    stopColor: "white"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.687387",
                                    stopColor: "white",
                                    stopOpacity: "0.999"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsx)("clipPath", {
                                id: "clip0_818_13083",
                                children: (0, r.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white",
                                    transform: "translate(0.5)"
                                })
                            })]
                        })]
                    })
                },
                a = function() {
                    return (0, r.jsxs)("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("rect", {
                            width: "28",
                            height: "28",
                            rx: "14",
                            fill: "#FD4F5A",
                            fillOpacity: "0.2"
                        }), (0, r.jsxs)("g", {
                            opacity: "0.4",
                            children: [(0, r.jsx)("path", {
                                d: "M22.79 12.3304C20.652 9.43442 17.454 7.77441 14.012 7.77441C10.554 7.77441 7.346 9.44641 5.21 12.3644C5.09186 12.5253 5.11881 12.7503 5.27161 12.8787L6.94812 14.2879C7.11594 14.429 7.36803 14.399 7.498 14.2224C9.084 12.0584 11.458 10.8164 14.012 10.8164C16.554 10.8164 18.922 12.0484 20.508 14.1964C20.6377 14.3737 20.8905 14.4037 21.0581 14.2617L22.7293 12.8458C22.8817 12.7166 22.9083 12.4915 22.79 12.3304Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M22.79 12.3304C20.652 9.43442 17.454 7.77441 14.012 7.77441C10.554 7.77441 7.346 9.44641 5.21 12.3644C5.09186 12.5253 5.11881 12.7503 5.27161 12.8787L6.94812 14.2879C7.11594 14.429 7.36803 14.399 7.498 14.2224C9.084 12.0584 11.458 10.8164 14.012 10.8164C16.554 10.8164 18.922 12.0484 20.508 14.1964C20.6377 14.3737 20.8905 14.4037 21.0581 14.2617L22.7293 12.8458C22.8817 12.7166 22.9083 12.4915 22.79 12.3304Z",
                                fill: "#FD4F5A"
                            })]
                        }), (0, r.jsx)("path", {
                            d: "M14.0116 12.3428C11.8696 12.3428 9.88356 13.3768 8.56156 15.1828C8.44342 15.3437 8.47037 15.5686 8.62317 15.6971L10.2997 17.1063C10.4675 17.2474 10.7196 17.2173 10.8496 17.0408C11.6196 15.9888 12.7716 15.3848 14.0116 15.3848C15.2436 15.3848 16.3936 15.9848 17.1636 17.0288C17.2934 17.2051 17.5454 17.2347 17.7126 17.0932L19.3847 15.678C19.5372 15.5489 19.5638 15.3238 19.4456 15.1628C18.1236 13.3708 16.1436 12.3428 14.0116 12.3428Z",
                            fill: "white"
                        }), (0, r.jsx)("path", {
                            d: "M14.0116 12.3428C11.8696 12.3428 9.88356 13.3768 8.56156 15.1828C8.44342 15.3437 8.47037 15.5686 8.62317 15.6971L10.2997 17.1063C10.4675 17.2474 10.7196 17.2173 10.8496 17.0408C11.6196 15.9888 12.7716 15.3848 14.0116 15.3848C15.2436 15.3848 16.3936 15.9848 17.1636 17.0288C17.2934 17.2051 17.5454 17.2347 17.7126 17.0932L19.3847 15.678C19.5372 15.5489 19.5638 15.3238 19.4456 15.1628C18.1236 13.3708 16.1436 12.3428 14.0116 12.3428Z",
                            fill: "#FD4F5A"
                        }), (0, r.jsx)("path", {
                            d: "M14.0121 16.9102C13.1881 16.9102 12.4241 17.3082 11.9161 18.0002C11.7978 18.1623 11.8253 18.3884 11.9789 18.5175L12.9208 19.309C13.5512 19.8388 14.4716 19.8373 15.1002 19.3053L16.0435 18.5071C16.1955 18.3785 16.2212 18.1537 16.1021 17.9942C15.5941 17.3042 14.8321 16.9102 14.0121 16.9102Z",
                            fill: "white"
                        }), (0, r.jsx)("path", {
                            d: "M14.0121 16.9102C13.1881 16.9102 12.4241 17.3082 11.9161 18.0002C11.7978 18.1623 11.8253 18.3884 11.9789 18.5175L12.9208 19.309C13.5512 19.8388 14.4716 19.8373 15.1002 19.3053L16.0435 18.5071C16.1955 18.3785 16.2212 18.1537 16.1021 17.9942C15.5941 17.3042 14.8321 16.9102 14.0121 16.9102Z",
                            fill: "#FD4F5A"
                        })]
                    })
                },
                u = function() {
                    return (0, r.jsxs)("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("rect", {
                            width: "28",
                            height: "28",
                            rx: "14",
                            fill: "#13F36C",
                            fillOpacity: "0.2"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.0001 12.7501C17.8661 12.7501 21.0002 11.6308 21.0002 10.25C21.0002 8.8693 17.8661 7.75 14.0001 7.75C10.134 7.75 7 8.8693 7 10.25C7 11.6308 10.134 12.7501 14.0001 12.7501ZM14.0001 18.5838C17.0483 18.5838 19.6415 17.888 20.6022 16.9168C20.8599 17.1773 21.0002 17.4577 21.0002 17.7498C21.0002 19.1305 17.8661 20.2498 14.0001 20.2498C10.134 20.2498 7 19.1305 7 17.7498C7 17.4577 7.14024 17.1773 7.39799 16.9168C8.35868 17.888 10.9519 18.5838 14.0001 18.5838ZM20.6022 14.4168C19.6415 15.3879 17.0483 16.0838 14.0001 16.0838C10.9519 16.0838 8.35868 15.3879 7.39799 14.4168C7.14024 14.6773 7 14.9577 7 15.2498C7 16.6305 10.134 17.7498 14.0001 17.7498C17.8661 17.7498 21.0002 16.6305 21.0002 15.2498C21.0002 14.9577 20.8599 14.6773 20.6022 14.4168ZM14.0001 13.584C17.0483 13.584 19.6415 12.8882 20.6022 11.917C20.8599 12.1775 21.0002 12.4579 21.0002 12.75C21.0002 14.1307 17.8661 15.25 14.0001 15.25C10.134 15.25 7 14.1307 7 12.75C7 12.4579 7.14024 12.1775 7.39799 11.917C8.35868 12.8882 10.9519 13.584 14.0001 13.584Z",
                            fill: "#13F36C"
                        })]
                    })
                },
                c = function(t) {
                    var e = "won" === t.type;
                    return (0, r.jsx)(r.Fragment, {
                        children: e ? (0, r.jsxs)("svg", {
                            id: "winCoinIcon",
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "animated-icon",
                            children: [(0, r.jsxs)("g", {
                                clipPath: "url(#clip0_1_31224)",
                                children: [(0, r.jsx)("path", {
                                    d: "M24.0877 47.8028C36.9623 47.8028 47.3992 37.3658 47.3992 24.4912C47.3992 11.6166 36.9623 1.17969 24.0877 1.17969C11.2131 1.17969 0.776123 11.6166 0.776123 24.4912C0.776123 37.3658 11.2131 47.8028 24.0877 47.8028Z",
                                    fill: "url(#paint0_linear_1_31224)"
                                }), (0, r.jsx)("path", {
                                    d: "M24.0877 46.7754C36.9623 46.7754 47.3992 36.3385 47.3992 23.4639C47.3992 10.5893 36.9623 0.152344 24.0877 0.152344C11.2131 0.152344 0.776123 10.5893 0.776123 23.4639C0.776123 36.3385 11.2131 46.7754 24.0877 46.7754Z",
                                    fill: "url(#paint1_linear_1_31224)"
                                }), (0, r.jsx)("path", {
                                    d: "M24.0889 45.9975C36.534 45.9975 46.6228 35.9088 46.6228 23.4636C46.6228 11.0185 36.534 0.929688 24.0889 0.929688C11.6437 0.929688 1.55493 11.0185 1.55493 23.4636C1.55493 35.9088 11.6437 45.9975 24.0889 45.9975Z",
                                    fill: "url(#paint2_linear_1_31224)"
                                }), (0, r.jsx)("path", {
                                    d: "M24.0868 42.4723C34.5849 42.4723 43.0954 33.9619 43.0954 23.4637C43.0954 12.9655 34.5849 4.45508 24.0868 4.45508C13.5886 4.45508 5.07812 12.9655 5.07812 23.4637C5.07812 33.9619 13.5886 42.4723 24.0868 42.4723Z",
                                    fill: "url(#paint3_linear_1_31224)"
                                }), (0, r.jsx)("path", {
                                    opacity: "0.7",
                                    d: "M39.0442 35.2018C41.177 32.2058 42.4288 28.541 42.4288 24.5825C42.4288 14.4558 34.218 6.24504 24.0913 6.24504C13.9601 6.24504 5.74937 14.4558 5.74937 24.5825C5.74937 28.541 7.00107 32.2058 9.13398 35.2018C6.59439 31.9708 5.08057 27.8902 5.08057 23.4618C5.08057 12.9645 13.5895 4.45557 24.0913 4.45557C34.5886 4.45557 43.0975 12.9645 43.0975 23.4618C43.0975 27.8902 41.5837 31.9708 39.0442 35.2018Z",
                                    fill: "url(#paint4_linear_1_31224)"
                                }), (0, r.jsx)("path", {
                                    d: "M36.5922 14.0761C33.1616 11.6054 28.8146 10.1279 24.0894 10.1279C19.3643 10.1279 15.0173 11.6054 11.5867 14.0761C14.261 10.3963 18.8601 7.96875 24.0894 7.96875C29.3188 7.96875 33.9179 10.3963 36.5922 14.0761Z",
                                    fill: "url(#paint5_linear_1_31224)"
                                }), (0, r.jsx)("path", {
                                    d: "M12.7864 41.3423C15.8872 43.0272 19.8164 44.0347 24.0874 44.0347C28.3584 44.0347 32.2875 43.0272 35.3884 41.3423C32.9711 43.8517 28.8141 45.5071 24.0874 45.5071C19.3607 45.5071 15.2036 43.8517 12.7864 41.3423Z",
                                    fill: "url(#paint6_linear_1_31224)"
                                }), (0, r.jsx)("g", {
                                    filter: "url(#filter0_i_1_31224)",
                                    children: (0, r.jsx)("path", {
                                        d: "M26.8782 22.9805C30.6433 23.397 32.5258 24.7464 32.5258 27.0288V27.2787C32.5258 28.6115 32.001 29.711 30.9515 30.5773C29.9019 31.4436 28.4109 32.0184 26.4783 32.3016V34.4007H21.0307V32.3016C17.0823 31.7685 15.1082 29.9692 15.1082 26.9038V26.7289H19.9811V26.9038C19.9811 27.5536 20.2976 28.0367 20.9307 28.3532C21.5804 28.6531 22.5883 28.803 23.9544 28.803C25.1539 28.803 26.0285 28.7197 26.5783 28.5531C27.1447 28.3699 27.4279 28.095 27.4279 27.7285V27.5786C27.4279 27.312 27.303 27.1121 27.0531 26.9788C26.8032 26.8289 26.3867 26.7206 25.8036 26.654L20.8807 26.1292C17.1989 25.7293 15.358 24.3299 15.358 21.9309V21.6811C15.358 20.4482 15.8495 19.4403 16.8324 18.6573C17.8153 17.8743 19.2148 17.3579 21.0307 17.108V14.9839H26.4783V17.133C28.3276 17.4162 29.727 17.9826 30.6766 18.8323C31.6428 19.6652 32.126 20.7731 32.126 22.1559V22.3308H27.303V22.1559C27.303 21.6061 27.0115 21.2146 26.4284 20.9813C25.8453 20.7315 24.8874 20.6065 23.5546 20.6065C22.4384 20.6065 21.6221 20.6815 21.1056 20.8314C20.6058 20.9647 20.3559 21.1896 20.3559 21.5061V21.6561C20.3559 21.8726 20.4809 22.0392 20.7308 22.1559C20.9807 22.2725 21.4388 22.3641 22.1052 22.4307L26.8782 22.9805Z",
                                        fill: "#FD981C"
                                    })
                                })]
                            }), (0, r.jsxs)("defs", {
                                children: [(0, r.jsxs)("filter", {
                                    id: "filter0_i_1_31224",
                                    x: "15.1082",
                                    y: "14.9839",
                                    width: "17.4177",
                                    height: "19.417",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, r.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, r.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        result: "shape"
                                    }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha"
                                    }), (0, r.jsx)("feOffset", {
                                        dy: "0.70656"
                                    }), (0, r.jsx)("feComposite", {
                                        in2: "hardAlpha",
                                        operator: "arithmetic",
                                        k2: "-1",
                                        k3: "1"
                                    }), (0, r.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values: "0 0 0 0 0.868571 0 0 0 0 0.464762 0 0 0 0 0.0114286 0 0 0 1 0"
                                    }), (0, r.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "shape",
                                        result: "effect1_innerShadow_1_31224"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint0_linear_1_31224",
                                    x1: "24.0877",
                                    y1: "1.17866",
                                    x2: "24.0877",
                                    y2: "47.8028",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.341442",
                                        stopColor: "#F85C03"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.64054",
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#F85A03"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint1_linear_1_31224",
                                    x1: "24.0877",
                                    y1: "0.152344",
                                    x2: "24.0877",
                                    y2: "46.7754",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "4e-07",
                                        stopColor: "#FDBC2E"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.754955",
                                        stopColor: "#FF7C00"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint2_linear_1_31224",
                                    x1: "24.0889",
                                    y1: "0.929688",
                                    x2: "24.0889",
                                    y2: "45.9975",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FAE28E"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.751352",
                                        stopColor: "#FAE25C"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint3_linear_1_31224",
                                    x1: "24.0868",
                                    y1: "4.45508",
                                    x2: "24.0868",
                                    y2: "42.4723",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FAE25C"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.751352",
                                        stopColor: "#FDBC2E"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint4_linear_1_31224",
                                    x1: "24.0886",
                                    y1: "4.45592",
                                    x2: "24.0886",
                                    y2: "35.2012",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.341442",
                                        stopColor: "#F85C03"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.64054",
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#F85A03"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint5_linear_1_31224",
                                    x1: "11.5862",
                                    y1: "11.0229",
                                    x2: "36.5923",
                                    y2: "11.0229",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.355856",
                                        stopColor: "white"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.640541",
                                        stopColor: "white",
                                        stopOpacity: "0.999"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint6_linear_1_31224",
                                    x1: "35.3885",
                                    y1: "43.4252",
                                    x2: "12.786",
                                    y2: "43.4252",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.323423",
                                        stopColor: "white"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.687387",
                                        stopColor: "white",
                                        stopOpacity: "0.999"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    })]
                                }), (0, r.jsx)("clipPath", {
                                    id: "clip0_1_31224",
                                    children: (0, r.jsx)("rect", {
                                        width: "48",
                                        height: "48",
                                        fill: "white"
                                    })
                                })]
                            })]
                        }) : (0, r.jsxs)("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M24 46.486C36.4187 46.486 46.486 36.4187 46.486 24C46.486 11.5813 36.4187 1.51402 24 1.51402C11.5813 1.51402 1.51402 11.5813 1.51402 24C1.51402 36.4187 11.5813 46.486 24 46.486ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z",
                                fill: "#545C78"
                            }), (0, r.jsx)("path", {
                                d: "M27.3963 22.6905C31.7987 23.1775 33.9999 24.7554 33.9999 27.4241V27.7162C33.9999 29.2746 33.3863 30.5603 32.1591 31.5732C30.9319 32.5861 29.1885 33.2582 26.9288 33.5893V36.0438H20.559V33.5893C15.9424 32.966 13.634 30.8622 13.634 27.278V27.0734H19.3318V27.278C19.3318 28.0377 19.7019 28.6026 20.4421 28.9727C21.2018 29.3233 22.3804 29.4986 23.9777 29.4986C25.3802 29.4986 26.4029 29.4012 27.0457 29.2064C27.708 28.9922 28.0392 28.6707 28.0392 28.2422V28.0669C28.0392 27.7552 27.8931 27.5214 27.6009 27.3656C27.3087 27.1903 26.8217 27.0637 26.1399 26.9858L20.3837 26.3722C16.0787 25.9046 13.9262 24.2684 13.9262 21.4633V21.1711C13.9262 19.7296 14.5009 18.5511 15.6502 17.6356C16.7995 16.72 18.4357 16.1162 20.559 15.824V13.3403H26.9288V15.8532C29.0911 16.1843 30.7273 16.8467 31.8377 17.8401C32.9675 18.8141 33.5324 20.1095 33.5324 21.7263V21.9308H27.8931V21.7263C27.8931 21.0835 27.5522 20.6257 26.8704 20.353C26.1886 20.0608 25.0685 19.9147 23.5102 19.9147C22.205 19.9147 21.2505 20.0023 20.6467 20.1777C20.0623 20.3335 19.7701 20.5965 19.7701 20.9666V21.1419C19.7701 21.3951 19.9162 21.5899 20.2084 21.7263C20.5006 21.8626 21.0363 21.9698 21.8154 22.0477L27.3963 22.6905Z",
                                fill: "#545C78"
                            })]
                        })
                    })
                },
                l = function(t) {
                    var e = "won" === t.type;
                    return (0, r.jsx)(r.Fragment, {
                        children: e ? (0, r.jsxs)("svg", {
                            id: e && "winCoinIcon",
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: e && "animated-icon",
                            children: [(0, r.jsxs)("g", {
                                clipPath: "url(#clip0_1_31230)",
                                children: [(0, r.jsx)("path", {
                                    d: "M24.0872 47.8028C36.9618 47.8028 47.3987 37.3658 47.3987 24.4912C47.3987 11.6166 36.9618 1.17969 24.0872 1.17969C11.2126 1.17969 0.775635 11.6166 0.775635 24.4912C0.775635 37.3658 11.2126 47.8028 24.0872 47.8028Z",
                                    fill: "url(#paint0_linear_1_31230)"
                                }), (0, r.jsx)("path", {
                                    d: "M24.0872 46.7749C36.9618 46.7749 47.3987 36.338 47.3987 23.4634C47.3987 10.5888 36.9618 0.151855 24.0872 0.151855C11.2126 0.151855 0.775635 10.5888 0.775635 23.4634C0.775635 36.338 11.2126 46.7749 24.0872 46.7749Z",
                                    fill: "url(#paint1_linear_1_31230)"
                                }), (0, r.jsx)("path", {
                                    d: "M24.0884 45.9975C36.5335 45.9975 46.6223 35.9088 46.6223 23.4636C46.6223 11.0185 36.5335 0.929688 24.0884 0.929688C11.6432 0.929688 1.55444 11.0185 1.55444 23.4636C1.55444 35.9088 11.6432 45.9975 24.0884 45.9975Z",
                                    fill: "url(#paint2_linear_1_31230)"
                                }), (0, r.jsx)("path", {
                                    d: "M24.0855 42.4723C34.5837 42.4723 43.0942 33.9619 43.0942 23.4637C43.0942 12.9655 34.5837 4.45508 24.0855 4.45508C13.5874 4.45508 5.0769 12.9655 5.0769 23.4637C5.0769 33.9619 13.5874 42.4723 24.0855 42.4723Z",
                                    fill: "url(#paint3_linear_1_31230)"
                                }), (0, r.jsx)("path", {
                                    opacity: "0.7",
                                    d: "M39.0444 35.2018C41.1773 32.2058 42.429 28.541 42.429 24.5825C42.429 14.4558 34.2183 6.24504 24.0916 6.24504C13.9603 6.24504 5.74962 14.4558 5.74962 24.5825C5.74962 28.541 7.00132 32.2058 9.13422 35.2018C6.59464 31.9708 5.08081 27.8902 5.08081 23.4618C5.08081 12.9645 13.5898 4.45557 24.0916 4.45557C34.5888 4.45557 43.0978 12.9645 43.0978 23.4618C43.0978 27.8902 41.584 31.9708 39.0444 35.2018Z",
                                    fill: "url(#paint4_linear_1_31230)"
                                }), (0, r.jsx)("path", {
                                    d: "M36.5919 14.0761C33.1613 11.6054 28.8143 10.1279 24.0892 10.1279C19.364 10.1279 15.017 11.6054 11.5864 14.0761C14.2607 10.3963 18.8598 7.96875 24.0892 7.96875C29.3185 7.96875 33.9176 10.3963 36.5919 14.0761Z",
                                    fill: "url(#paint5_linear_1_31230)"
                                }), (0, r.jsx)("path", {
                                    d: "M12.7861 41.3423C15.887 43.0272 19.8162 44.0347 24.0871 44.0347C28.3581 44.0347 32.2873 43.0272 35.3882 41.3423C32.9709 43.8517 28.8139 45.5071 24.0871 45.5071C19.3604 45.5071 15.2034 43.8517 12.7861 41.3423Z",
                                    fill: "url(#paint6_linear_1_31230)"
                                }), (0, r.jsx)("g", {
                                    filter: "url(#filter0_i_1_31230)",
                                    children: (0, r.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M29.7399 22.3L34.8548 20.6449C34.6522 20.1325 34.3896 19.645 34.067 19.1822C33.1994 17.9184 31.9922 16.9376 30.4455 16.2397C28.9177 15.5229 27.1729 15.1646 25.2113 15.1646C22.5517 15.1646 20.3072 15.7398 18.4775 16.8904C16.6479 18.041 15.4313 19.616 14.8277 21.6154H12.3945V24.4447H14.4316V25.1803H12.3945V28.0096H14.8277C15.4313 30.009 16.6385 31.584 18.4492 32.7345C20.2789 33.8851 22.5329 34.4604 25.2113 34.4604C27.1729 34.4604 28.9177 34.1115 30.4455 33.4136C31.9922 32.7157 33.1994 31.7443 34.067 30.4994C34.3896 30.0296 34.6522 29.5376 34.8548 29.0235L29.7399 27.4188C29.5413 27.9655 29.1917 28.4265 28.6913 28.8018C27.8614 29.4243 26.7014 29.7355 25.2113 29.7355C24.023 29.7355 23.0422 29.594 22.2688 29.3111C21.4955 29.0281 20.9202 28.5943 20.5429 28.0096H27.9557V25.1803H19.9488V24.4447H27.9557V21.6154H20.5995C21.3917 20.4648 22.9195 19.8895 25.183 19.8895C26.6165 19.8895 27.7671 20.2196 28.6347 20.8797C29.1654 21.272 29.5338 21.7454 29.7399 22.3Z",
                                        fill: "#FD981C"
                                    })
                                }), (0, r.jsx)("g", {
                                    filter: "url(#filter1_i_1_31230)",
                                    children: (0, r.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M21.3968 21.6154C21.078 21.8414 20.8122 22.1088 20.5995 22.4178H27.9557V21.6154H21.3968ZM27.9557 25.2471H19.9488V25.9827H27.9557V25.2471ZM21.3095 28.812H20.5429C20.9202 29.3967 21.4955 29.8306 22.2688 30.1135C23.0421 30.3964 24.023 30.5379 25.2113 30.5379C26.7014 30.5379 27.8614 30.2267 28.6913 29.6042C29.1917 29.2289 29.5412 28.7679 29.7399 28.2212L34.5338 29.7252C34.6537 29.496 34.7607 29.2621 34.8548 29.0235L29.7399 27.4188C29.5412 27.9655 29.1917 28.4265 28.6913 28.8018C27.8614 29.4242 26.7014 29.7355 25.2113 29.7355C24.023 29.7355 23.0421 29.594 22.2688 29.3111C21.9053 29.1781 21.5855 29.0117 21.3095 28.812ZM12.3945 25.9827H14.4316V25.2471H12.3945V25.9827ZM12.3945 22.4178V21.6154H14.8277C15.4313 19.616 16.6479 18.041 18.4775 16.8904C20.3072 15.7398 22.5517 15.1646 25.2113 15.1646C27.1729 15.1646 28.9177 15.5229 30.4455 16.2397C31.9922 16.9376 33.1994 17.9184 34.067 19.1822C34.3896 19.645 34.6522 20.1325 34.8548 20.6449L34.5334 20.7489C34.3951 20.487 34.2396 20.2323 34.067 19.9846C33.1994 18.7208 31.9922 17.74 30.4455 17.0421C28.9177 16.3254 27.1729 15.967 25.2113 15.967C22.5517 15.967 20.3072 16.5423 18.4775 17.6929C16.6479 18.8434 15.4313 20.4184 14.8277 22.4178H12.3945Z",
                                        fill: "#FD981C"
                                    })
                                })]
                            }), (0, r.jsxs)("defs", {
                                children: [(0, r.jsxs)("filter", {
                                    id: "filter0_i_1_31230",
                                    x: "12.3945",
                                    y: "15.1646",
                                    width: "22.4602",
                                    height: "19.2959",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, r.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, r.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        result: "shape"
                                    }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha"
                                    }), (0, r.jsx)("feOffset", {
                                        dy: "0.799968"
                                    }), (0, r.jsx)("feComposite", {
                                        in2: "hardAlpha",
                                        operator: "arithmetic",
                                        k2: "-1",
                                        k3: "1"
                                    }), (0, r.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values: "0 0 0 0 0.868571 0 0 0 0 0.464762 0 0 0 0 0.0114286 0 0 0 1 0"
                                    }), (0, r.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "shape",
                                        result: "effect1_innerShadow_1_31230"
                                    })]
                                }), (0, r.jsxs)("filter", {
                                    id: "filter1_i_1_31230",
                                    x: "12.3945",
                                    y: "15.1646",
                                    width: "22.4602",
                                    height: "15.3735",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, r.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, r.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        result: "shape"
                                    }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha"
                                    }), (0, r.jsx)("feOffset", {
                                        dy: "0.799968"
                                    }), (0, r.jsx)("feComposite", {
                                        in2: "hardAlpha",
                                        operator: "arithmetic",
                                        k2: "-1",
                                        k3: "1"
                                    }), (0, r.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values: "0 0 0 0 0.868571 0 0 0 0 0.464762 0 0 0 0 0.0114286 0 0 0 1 0"
                                    }), (0, r.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "shape",
                                        result: "effect1_innerShadow_1_31230"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint0_linear_1_31230",
                                    x1: "24.0872",
                                    y1: "1.17866",
                                    x2: "24.0872",
                                    y2: "47.8028",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.341442",
                                        stopColor: "#F85C03"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.64054",
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#F85A03"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint1_linear_1_31230",
                                    x1: "24.0872",
                                    y1: "0.151855",
                                    x2: "24.0872",
                                    y2: "46.7749",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "4e-07",
                                        stopColor: "#FDBC2E"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.754955",
                                        stopColor: "#FF7C00"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint2_linear_1_31230",
                                    x1: "24.0884",
                                    y1: "0.929688",
                                    x2: "24.0884",
                                    y2: "45.9975",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FAE28E"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.751352",
                                        stopColor: "#FAE25C"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint3_linear_1_31230",
                                    x1: "24.0855",
                                    y1: "4.45508",
                                    x2: "24.0855",
                                    y2: "42.4723",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FAE25C"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.751352",
                                        stopColor: "#FDBC2E"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint4_linear_1_31230",
                                    x1: "24.0889",
                                    y1: "4.45592",
                                    x2: "24.0889",
                                    y2: "35.2012",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.341442",
                                        stopColor: "#F85C03"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.64054",
                                        stopColor: "#FF7C00"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#F85A03"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint5_linear_1_31230",
                                    x1: "11.586",
                                    y1: "11.0229",
                                    x2: "36.5921",
                                    y2: "11.0229",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.355856",
                                        stopColor: "white"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.640541",
                                        stopColor: "white",
                                        stopOpacity: "0.999"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    })]
                                }), (0, r.jsxs)("linearGradient", {
                                    id: "paint6_linear_1_31230",
                                    x1: "35.3883",
                                    y1: "43.4252",
                                    x2: "12.7857",
                                    y2: "43.4252",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.323423",
                                        stopColor: "white"
                                    }), (0, r.jsx)("stop", {
                                        offset: "0.687387",
                                        stopColor: "white",
                                        stopOpacity: "0.999"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    })]
                                }), (0, r.jsx)("clipPath", {
                                    id: "clip0_1_31230",
                                    children: (0, r.jsx)("rect", {
                                        width: "48",
                                        height: "48",
                                        fill: "white"
                                    })
                                })]
                            })]
                        }) : (0, r.jsxs)("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M24 46.486C36.4187 46.486 46.486 36.4187 46.486 24C46.486 11.5813 36.4187 1.51402 24 1.51402C11.5813 1.51402 1.51402 11.5813 1.51402 24C1.51402 36.4187 11.5813 46.486 24 46.486ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z",
                                fill: "#545C78"
                            }), (0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M29.1201 21.3958L34.4634 19.6803C34.2517 19.1493 33.9774 18.6439 33.6404 18.1642C32.734 16.8543 31.4729 15.8377 29.8571 15.1144C28.2611 14.3715 26.4384 14 24.3892 14C21.6108 14 19.266 14.5963 17.3547 15.7889C15.4434 16.9814 14.1724 18.6139 13.5419 20.6862H11V23.6188H13.1281V24.3812H11V27.3138H13.5419C14.1724 29.3861 15.4335 31.0186 17.3251 32.2111C19.2365 33.4037 21.5911 34 24.3892 34C26.4384 34 28.2611 33.6383 29.8571 32.915C31.4729 32.1916 32.734 31.1848 33.6404 29.8944C33.9774 29.4075 34.2517 28.8975 34.4634 28.3646L29.1201 26.7014C28.9125 27.2681 28.5474 27.7459 28.0246 28.1349C27.1576 28.7801 25.9458 29.1026 24.3892 29.1026C23.1478 29.1026 22.1232 28.956 21.3153 28.6628C20.5074 28.3695 19.9064 27.9198 19.5123 27.3138H27.2562V24.3812H18.8916V23.6188H27.2562V20.6862H19.5714C20.399 19.4936 21.9951 18.8974 24.3596 18.8974C25.8571 18.8974 27.0591 19.2395 27.9655 19.9238C28.5199 20.3303 28.9048 20.821 29.1201 21.3958Z",
                                fill: "#545C78"
                            })]
                        })
                    })
                },
                d = function(t) {
                    var e = "active" === t.type;
                    return (0, r.jsx)(r.Fragment, {
                        children: e ? (0, r.jsxs)("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M47.9494 25.5712L46.4385 25.4735C46.47 24.9866 46.486 24.4953 46.486 24C46.486 23.5047 46.47 23.0134 46.4385 22.5265L47.9494 22.4288C47.983 22.9482 48 23.4721 48 24C48 24.5279 47.983 25.0518 47.9494 25.5712ZM47.5432 19.3161L46.0579 19.6099C45.8659 18.639 45.6113 17.6906 45.2986 16.7692L46.7323 16.2826C47.0662 17.2667 47.3381 18.2794 47.5432 19.3161ZM45.5298 13.3828L44.1724 14.0534C43.7362 13.1706 43.2437 12.3204 42.6995 11.5075L43.9576 10.6652C44.5384 11.5328 45.0641 12.4403 45.5298 13.3828ZM42.0445 8.17558L40.9066 9.17429C40.2589 8.43633 39.5637 7.74111 38.8257 7.09343L39.8244 5.95553C40.6117 6.64654 41.3535 7.38826 42.0445 8.17558ZM37.3348 4.04243L36.4925 5.30053C35.6796 4.7563 34.8294 4.26378 33.9466 3.8276L34.6172 2.47022C35.5597 2.93589 36.4672 3.46163 37.3348 4.04243ZM31.7174 1.26774L31.2308 2.70144C30.3094 2.38872 29.361 2.13413 28.3901 1.94205L28.6839 0.456816C29.7206 0.661911 30.7333 0.933776 31.7174 1.26774ZM25.5712 0.0506073L25.4735 1.56148C24.9866 1.53001 24.4953 1.51402 24 1.51402C23.5047 1.51402 23.0134 1.53001 22.5265 1.56148L22.4288 0.0506074C22.9482 0.0170425 23.4721 0 24 0C24.5279 0 25.0518 0.0170425 25.5712 0.0506073ZM19.3161 0.456817L19.6099 1.94205C18.639 2.13414 17.6906 2.38872 16.7692 2.70145L16.2826 1.26774C17.2667 0.933777 18.2794 0.661912 19.3161 0.456817ZM13.3828 2.47022L14.0534 3.8276C13.1706 4.26378 12.3204 4.7563 11.5075 5.30053L10.6652 4.04243C11.5328 3.46163 12.4403 2.93589 13.3828 2.47022ZM8.17558 5.95553L9.17429 7.09344C8.43633 7.74112 7.74111 8.43634 7.09343 9.17429L5.95552 8.17559C6.64654 7.38826 7.38826 6.64654 8.17558 5.95553ZM4.04243 10.6652L5.30053 11.5075C4.7563 12.3204 4.26378 13.1706 3.8276 14.0534L2.47022 13.3828C2.93589 12.4403 3.46163 11.5328 4.04243 10.6652ZM1.26774 16.2826L2.70144 16.7692C2.38872 17.6906 2.13413 18.639 1.94205 19.6099L0.456816 19.3161C0.661911 18.2794 0.933776 17.2667 1.26774 16.2826ZM0.0506073 22.4288C0.0170425 22.9482 0 23.4721 0 24C0 24.5279 0.0170425 25.0518 0.0506074 25.5712L1.56148 25.4735C1.53001 24.9866 1.51402 24.4953 1.51402 24C1.51402 23.5047 1.53001 23.0134 1.56148 22.5265L0.0506073 22.4288ZM0.456817 28.6839L1.94205 28.3901C2.13414 29.361 2.38872 30.3094 2.70145 31.2308L1.26774 31.7174C0.933777 30.7333 0.661913 29.7206 0.456817 28.6839ZM2.47022 34.6172L3.8276 33.9466C4.26378 34.8294 4.7563 35.6796 5.30053 36.4925L4.04243 37.3348C3.46163 36.4672 2.93589 35.5597 2.47022 34.6172ZM5.95553 39.8244L7.09344 38.8257C7.74112 39.5637 8.43634 40.2589 9.17429 40.9066L8.17559 42.0445C7.38826 41.3535 6.64654 40.6117 5.95553 39.8244ZM10.6652 43.9576L11.5075 42.6995C12.3204 43.2437 13.1706 43.7362 14.0534 44.1724L13.3828 45.5298C12.4403 45.0641 11.5328 44.5384 10.6652 43.9576ZM16.2826 46.7323L16.7692 45.2986C17.6906 45.6113 18.639 45.8659 19.6099 46.0579L19.3161 47.5432C18.2794 47.3381 17.2667 47.0662 16.2826 46.7323ZM22.4288 47.9494L22.5265 46.4385C23.0134 46.47 23.5047 46.486 24 46.486C24.4953 46.486 24.9866 46.47 25.4735 46.4385L25.5712 47.9494C25.0518 47.983 24.5279 48 24 48C23.4721 48 22.9482 47.983 22.4288 47.9494ZM28.6839 47.5432L28.3901 46.0579C29.361 45.8659 30.3094 45.6113 31.2308 45.2986L31.7174 46.7323C30.7333 47.0662 29.7206 47.3381 28.6839 47.5432ZM34.6172 45.5298L33.9466 44.1724C34.8294 43.7362 35.6796 43.2437 36.4925 42.6995L37.3348 43.9576C36.4672 44.5384 35.5597 45.0641 34.6172 45.5298ZM39.8244 42.0445L38.8257 40.9066C39.5637 40.2589 40.2589 39.5637 40.9066 38.8257L42.0445 39.8244C41.3535 40.6117 40.6117 41.3535 39.8244 42.0445ZM43.9576 37.3348L42.6995 36.4925C43.2437 35.6796 43.7362 34.8294 44.1724 33.9466L45.5298 34.6172C45.0641 35.5597 44.5384 36.4672 43.9576 37.3348ZM46.7323 31.7174L45.2986 31.2308C45.6113 30.3094 45.8659 29.361 46.0579 28.3901L47.5432 28.6839C47.3381 29.7206 47.0662 30.7333 46.7323 31.7174Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M22.0144 26.5879C22.0144 25.5612 22.2197 24.7586 22.6304 24.1799C23.0597 23.6012 23.853 23.0226 25.0104 22.4439C26.0557 21.9212 26.737 21.5106 27.0544 21.2119C27.3904 20.9132 27.5584 20.5586 27.5584 20.1479V19.8959C27.5584 19.2612 27.2504 18.7666 26.6344 18.4119C26.0184 18.0572 25.141 17.8799 24.0024 17.8799C22.789 17.8799 21.837 18.1132 21.1464 18.5799C20.4557 19.0466 20.1104 19.6906 20.1104 20.5119V21.0719H16.1624V20.5119C16.1624 18.5892 16.853 17.0772 18.2344 15.9759C19.6344 14.8559 21.5477 14.2959 23.9744 14.2959C25.4304 14.2959 26.7464 14.5292 27.9224 14.9959C29.0984 15.4626 30.013 16.1066 30.6664 16.9279C31.3384 17.7492 31.6744 18.6732 31.6744 19.6999V20.0919C31.6744 20.9506 31.413 21.7159 30.8904 22.3879C30.3677 23.0412 29.5464 23.6572 28.4264 24.2359C27.6424 24.6279 27.073 24.9452 26.7184 25.1879C26.3637 25.4119 26.121 25.6266 25.9904 25.8319C25.8597 26.0372 25.7944 26.2892 25.7944 26.5879V27.0639H22.0144V26.5879ZM23.8904 33.3359C23.181 33.3359 22.6024 33.1212 22.1544 32.6919C21.7064 32.2439 21.4824 31.6746 21.4824 30.9839C21.4824 30.2932 21.7064 29.7332 22.1544 29.3039C22.6024 28.8559 23.181 28.6319 23.8904 28.6319C24.5997 28.6319 25.1784 28.8559 25.6264 29.3039C26.093 29.7332 26.3264 30.2932 26.3264 30.9839C26.3264 31.6746 26.093 32.2439 25.6264 32.6919C25.1784 33.1212 24.5997 33.3359 23.8904 33.3359Z",
                                fill: "white"
                            })]
                        }) : (0, r.jsxs)("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M47.9494 25.5712L46.4385 25.4735C46.47 24.9866 46.486 24.4953 46.486 24C46.486 23.5047 46.47 23.0134 46.4385 22.5265L47.9494 22.4288C47.983 22.9482 48 23.4721 48 24C48 24.5279 47.983 25.0518 47.9494 25.5712ZM47.5432 19.3161L46.0579 19.6099C45.8659 18.639 45.6113 17.6906 45.2986 16.7692L46.7323 16.2826C47.0662 17.2667 47.3381 18.2794 47.5432 19.3161ZM45.5298 13.3828L44.1724 14.0534C43.7362 13.1706 43.2437 12.3204 42.6995 11.5075L43.9576 10.6652C44.5384 11.5328 45.0641 12.4403 45.5298 13.3828ZM42.0445 8.17558L40.9066 9.17429C40.2589 8.43633 39.5637 7.74111 38.8257 7.09343L39.8244 5.95553C40.6117 6.64654 41.3535 7.38826 42.0445 8.17558ZM37.3348 4.04243L36.4925 5.30053C35.6796 4.7563 34.8294 4.26378 33.9466 3.8276L34.6172 2.47022C35.5597 2.93589 36.4672 3.46163 37.3348 4.04243ZM31.7174 1.26774L31.2308 2.70144C30.3094 2.38872 29.361 2.13413 28.3901 1.94205L28.6839 0.456816C29.7206 0.661911 30.7333 0.933776 31.7174 1.26774ZM25.5712 0.0506073L25.4735 1.56148C24.9866 1.53001 24.4953 1.51402 24 1.51402C23.5047 1.51402 23.0134 1.53001 22.5265 1.56148L22.4288 0.0506074C22.9482 0.0170425 23.4721 0 24 0C24.5279 0 25.0518 0.0170425 25.5712 0.0506073ZM19.3161 0.456817L19.6099 1.94205C18.639 2.13414 17.6906 2.38872 16.7692 2.70145L16.2826 1.26774C17.2667 0.933777 18.2794 0.661912 19.3161 0.456817ZM13.3828 2.47022L14.0534 3.8276C13.1706 4.26378 12.3204 4.7563 11.5075 5.30053L10.6652 4.04243C11.5328 3.46163 12.4403 2.93589 13.3828 2.47022ZM8.17558 5.95553L9.17429 7.09344C8.43633 7.74112 7.74111 8.43634 7.09343 9.17429L5.95552 8.17559C6.64654 7.38826 7.38826 6.64654 8.17558 5.95553ZM4.04243 10.6652L5.30053 11.5075C4.7563 12.3204 4.26378 13.1706 3.8276 14.0534L2.47022 13.3828C2.93589 12.4403 3.46163 11.5328 4.04243 10.6652ZM1.26774 16.2826L2.70144 16.7692C2.38872 17.6906 2.13413 18.639 1.94205 19.6099L0.456816 19.3161C0.661911 18.2794 0.933776 17.2667 1.26774 16.2826ZM0.0506073 22.4288C0.0170425 22.9482 0 23.4721 0 24C0 24.5279 0.0170425 25.0518 0.0506074 25.5712L1.56148 25.4735C1.53001 24.9866 1.51402 24.4953 1.51402 24C1.51402 23.5047 1.53001 23.0134 1.56148 22.5265L0.0506073 22.4288ZM0.456817 28.6839L1.94205 28.3901C2.13414 29.361 2.38872 30.3094 2.70145 31.2308L1.26774 31.7174C0.933777 30.7333 0.661913 29.7206 0.456817 28.6839ZM2.47022 34.6172L3.8276 33.9466C4.26378 34.8294 4.7563 35.6796 5.30053 36.4925L4.04243 37.3348C3.46163 36.4672 2.93589 35.5597 2.47022 34.6172ZM5.95553 39.8244L7.09344 38.8257C7.74112 39.5637 8.43634 40.2589 9.17429 40.9066L8.17559 42.0445C7.38826 41.3535 6.64654 40.6117 5.95553 39.8244ZM10.6652 43.9576L11.5075 42.6995C12.3204 43.2437 13.1706 43.7362 14.0534 44.1724L13.3828 45.5298C12.4403 45.0641 11.5328 44.5384 10.6652 43.9576ZM16.2826 46.7323L16.7692 45.2986C17.6906 45.6113 18.639 45.8659 19.6099 46.0579L19.3161 47.5432C18.2794 47.3381 17.2667 47.0662 16.2826 46.7323ZM22.4288 47.9494L22.5265 46.4385C23.0134 46.47 23.5047 46.486 24 46.486C24.4953 46.486 24.9866 46.47 25.4735 46.4385L25.5712 47.9494C25.0518 47.983 24.5279 48 24 48C23.4721 48 22.9482 47.983 22.4288 47.9494ZM28.6839 47.5432L28.3901 46.0579C29.361 45.8659 30.3094 45.6113 31.2308 45.2986L31.7174 46.7323C30.7333 47.0662 29.7206 47.3381 28.6839 47.5432ZM34.6172 45.5298L33.9466 44.1724C34.8294 43.7362 35.6796 43.2437 36.4925 42.6995L37.3348 43.9576C36.4672 44.5384 35.5597 45.0641 34.6172 45.5298ZM39.8244 42.0445L38.8257 40.9066C39.5637 40.2589 40.2589 39.5637 40.9066 38.8257L42.0445 39.8244C41.3535 40.6117 40.6117 41.3535 39.8244 42.0445ZM43.9576 37.3348L42.6995 36.4925C43.2437 35.6796 43.7362 34.8294 44.1724 33.9466L45.5298 34.6172C45.0641 35.5597 44.5384 36.4672 43.9576 37.3348ZM46.7323 31.7174L45.2986 31.2308C45.6113 30.3094 45.8659 29.361 46.0579 28.3901L47.5432 28.6839C47.3381 29.7206 47.0662 30.7333 46.7323 31.7174Z",
                                fill: "#545C78"
                            }), (0, r.jsx)("path", {
                                d: "M22.0144 26.5879C22.0144 25.5612 22.2197 24.7586 22.6304 24.1799C23.0597 23.6012 23.853 23.0226 25.0104 22.4439C26.0557 21.9212 26.737 21.5106 27.0544 21.2119C27.3904 20.9132 27.5584 20.5586 27.5584 20.1479V19.8959C27.5584 19.2612 27.2504 18.7666 26.6344 18.4119C26.0184 18.0572 25.141 17.8799 24.0024 17.8799C22.789 17.8799 21.837 18.1132 21.1464 18.5799C20.4557 19.0466 20.1104 19.6906 20.1104 20.5119V21.0719H16.1624V20.5119C16.1624 18.5892 16.853 17.0772 18.2344 15.9759C19.6344 14.8559 21.5477 14.2959 23.9744 14.2959C25.4304 14.2959 26.7464 14.5292 27.9224 14.9959C29.0984 15.4626 30.013 16.1066 30.6664 16.9279C31.3384 17.7492 31.6744 18.6732 31.6744 19.6999V20.0919C31.6744 20.9506 31.413 21.7159 30.8904 22.3879C30.3677 23.0412 29.5464 23.6572 28.4264 24.2359C27.6424 24.6279 27.073 24.9452 26.7184 25.1879C26.3637 25.4119 26.121 25.6266 25.9904 25.8319C25.8597 26.0372 25.7944 26.2892 25.7944 26.5879V27.0639H22.0144V26.5879ZM23.8904 33.3359C23.181 33.3359 22.6024 33.1212 22.1544 32.6919C21.7064 32.2439 21.4824 31.6746 21.4824 30.9839C21.4824 30.2932 21.7064 29.7332 22.1544 29.3039C22.6024 28.8559 23.181 28.6319 23.8904 28.6319C24.5997 28.6319 25.1784 28.8559 25.6264 29.3039C26.093 29.7332 26.3264 30.2932 26.3264 30.9839C26.3264 31.6746 26.093 32.2439 25.6264 32.6919C25.1784 33.1212 24.5997 33.3359 23.8904 33.3359Z",
                                fill: "#545C78"
                            })]
                        })
                    })
                }
        },
        2669: function(t, e, n) {
            n.d(e, {
                f7: function() {
                    return o.f7
                },
                k_: function() {
                    return o.k_
                },
                V0: function() {
                    return i
                },
                sQ: function() {
                    return o.sQ
                },
                D8: function() {
                    return s.D8
                },
                TC: function() {
                    return s.TC
                },
                H5: function() {
                    return r.H
                }
            });
            var r = n(7793),
                i = function(t) {
                    return t[t.single = 0] = "single", t[t.multiple = 1] = "multiple", t
                }({}),
                s = n(6315),
                o = n(5177)
        },
        7793: function(t, e, n) {
            n.d(e, {
                H: function() {
                    return o
                },
                a: function() {
                    return s
                }
            });
            var r = n(2791),
                i = (0, r.createContext)(null),
                s = i.Provider,
                o = function() {
                    var t = (0, r.useContext)(i);
                    if (!t) throw new Error("Can not use 'useBetPanelContext' outside of the BetPanelProvider");
                    return t
                }
        },
        2140: function(t, e, n) {
            n.d(e, {
                N: function() {
                    return u
                }
            });
            var r = n(9439),
                i = n(2791),
                s = n(8182),
                o = n(3168),
                a = n(184),
                u = function(t) {
                    var e, n = t.autoBet,
                        u = t.setAutoBet,
                        c = t.autoBetCountChange,
                        l = t.autoBetCount,
                        d = t.fieldDisabled,
                        p = t.sx,
                        f = (0, o.$)().t,
                        C = (0, i.useState)(!0),
                        h = (0, r.Z)(C, 2),
                        x = h[0],
                        v = h[1];
                    return (0, i.useEffect)((function() {
                        n || (v(!0), c(""))
                    }), [n, c]), (0, a.jsx)("div", {
                        className: "bet-panel__auto-betting",
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [(0, a.jsx)("div", {
                                className: "bet-panel__auto-betting__switcher",
                                children: (0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, a.jsx)("div", {
                                        className: (0, s.Z)("checkbox", {
                                            active: n
                                        }),
                                        children: (0, a.jsx)("input", {
                                            type: "checkbox",
                                            checked: n,
                                            onChange: function(t) {
                                                return u(t.target.checked)
                                            }
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "ml-2",
                                        children: (0, a.jsx)("span", {
                                            children: f("auto")
                                        })
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: (0, s.Z)("bet-panel__auto-betting__field base-input flex-1 ".concat(null !== (e = null === p || void 0 === p ? void 0 : p.autoBetInputClass) && void 0 !== e ? e : ""), {
                                    active: n
                                }),
                                children: [(0, a.jsx)("div", {
                                    className: "".concat(x ? "infinity" : "")
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [(0, a.jsx)("span", {
                                        className: "bet-panel__auto-betting__field-label w-1/2 text-left",
                                        children: f("totalBets")
                                    }), (0, a.jsx)("input", {
                                        onFocus: function() {
                                            v(!1)
                                        },
                                        onBlur: function(t) {
                                            "" === t.target.value && v(!0)
                                        },
                                        className: "bet-panel__auto-betting__field-input text-right font-bold w-1/2",
                                        value: l,
                                        onChange: function(t) {
                                            (Number(t.target.value) && !t.target.value.includes(".") || "" === t.target.value) && c(t.target.value)
                                        },
                                        disabled: d || !n
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        1681: function(t, e, n) {
            n.d(e, {
                r: function() {
                    return a
                }
            });
            var r = n(2669),
                i = n(2791),
                s = n(8182),
                o = n(184),
                a = (0, i.forwardRef)((function(t, e) {
                    var n = t.amount,
                        i = t.onChange,
                        a = t.onBlur,
                        u = t.currency,
                        c = t.minInputWidth,
                        l = t.step,
                        d = t.sx;
                    return (0, o.jsxs)("div", {
                        className: (0, s.Z)("app-input flex flex-1 justify-center", null === d || void 0 === d ? void 0 : d.inputClass),
                        children: [(0, o.jsx)("input", {
                            ref: e,
                            id: "amount_field",
                            style: {
                                width: String(n).length * (null !== l && void 0 !== l ? l : 10) + (null !== c && void 0 !== c ? c : 60)
                            },
                            value: n,
                            maxLength: 8,
                            onChange: function(t) {
                                i((0, r.TC)(t.target.value))
                            },
                            onBlur: function() {
                                a && a()
                            },
                            autoComplete: "off"
                        }), u && (0, o.jsx)("div", {
                            className: "ml-1 my-auto",
                            children: (0, o.jsx)("div", {
                                id: "currentBetCurrency",
                                className: "app-input__currency",
                                children: u
                            })
                        })]
                    })
                }));
            a.defaultProps = {
                minInputWidth: 60,
                step: 10
            }
        },
        5177: function(t, e, n) {
            n.d(e, {
                f7: function() {
                    return M
                },
                kX: function() {
                    return g
                },
                k_: function() {
                    return N
                },
                f8: function() {
                    return A
                },
                sQ: function() {
                    return S
                },
                ax: function() {
                    return k
                }
            });
            var r = n(3433),
                i = n(9439),
                s = n(2791),
                o = n(3168),
                a = n(5523),
                u = n(184),
                c = function(t) {
                    var e = t.amount,
                        n = t.disabled,
                        r = t.children,
                        i = t.onClick;
                    return (0, u.jsx)(a.J, {
                        buttonColor: "gray",
                        text: r,
                        disabled: n,
                        clickHandler: function() {
                            return i(e)
                        },
                        size: "medium"
                    })
                },
                l = function(t) {
                    var e = t.disabled,
                        n = t.betsList,
                        a = t.onClick,
                        l = (0, s.useState)([]),
                        d = (0, i.Z)(l, 2),
                        p = d[0],
                        f = d[1],
                        C = (0, o.$)().t;
                    return (0, s.useEffect)((function() {
                        f([
                            ["min", n.min]
                        ].concat((0, r.Z)(Object.entries(n).filter((function(t) {
                            return "min" !== t[0] && "max" !== t[0]
                        }))), [
                            ["max", n.max]
                        ]))
                    }), [n]), (0, u.jsx)("div", {
                        className: "bet-panel__quick-bids",
                        children: p.length > 0 ? p.map((function(t) {
                            var n = (0, i.Z)(t, 2),
                                r = n[0],
                                s = n[1];
                            return (0, u.jsx)(c, {
                                amount: s,
                                onClick: function() {
                                    return a(s, r)
                                },
                                disabled: e,
                                children: Number.isInteger(+r) ? "+".concat(r) : C(r)
                            }, r)
                        })) : null
                    })
                },
                d = n(2140),
                p = n(7410),
                f = n(7830),
                C = n(9010),
                h = n(4761),
                x = n(7793),
                v = function(t) {
                    var e = t.disabled,
                        n = (0, x.H)(),
                        r = n.session,
                        i = n.actions,
                        s = i.onPlayButtonClick,
                        o = i.onCashoutButtonClick;
                    return h.GC[r.state] === h.GC["Not started"] ? (0, u.jsx)(p.W, {
                        id: "play_btn",
                        disabled: e,
                        onClick: s
                    }) : r.availableCashout ? (0, u.jsx)(f.M, {
                        currency: r.currency,
                        winAmount: r.availableCashout,
                        disabled: e,
                        onClick: function() {
                            o()
                        }
                    }) : (0, u.jsx)(C.f, {
                        color: "blue",
                        spanId: "waitingButton"
                    })
                },
                m = n(8182),
                g = function(t) {
                    var e = t.id,
                        n = t.icon,
                        r = t.border,
                        i = t.disabled,
                        s = void 0 !== i && i,
                        o = t.onClick,
                        a = t.withBorder,
                        c = t.iconType;
                    return (0, u.jsxs)("button", {
                        type: "button",
                        id: e,
                        disabled: s,
                        onClick: o,
                        className: (0, m.W)("bet-panel__control", "".concat("withoutBG" === c ? "" : "w-[38px] h-[38px] bg-[#151B2E] rounded-lg m-[7px]")),
                        children: [(0, u.jsx)("div", {
                            className: (0, m.W)("".concat(a ? "bet-panel__control-border" : ""), "".concat(r))
                        }), (0, u.jsx)("span", {
                            className: "bet-panel__control-icon".concat("withoutBG" === c ? "" : "BG"),
                            children: n
                        })]
                    })
                };
            g.defaultProps = {
                id: void 0,
                withBorder: !0,
                iconType: "withoutBG"
            };
            var w = n(2669),
                j = n(7454),
                y = n(5856),
                Z = n(8767),
                b = n(1681),
                _ = n(6315),
                L = function() {
                    var t = (0, x.H)(),
                        e = t.session,
                        n = t.bet,
                        r = t.betSettings,
                        a = t.onClickSound,
                        c = t.balance,
                        l = t.isDisableToChangeBet,
                        d = (0, Z.K)(),
                        p = (0, i.Z)(d, 2),
                        f = p[0],
                        C = p[1];
                    (0, s.useEffect)((function() {
                        document.activeElement === f.current && C()
                    }));
                    var v = (0, o.$)().t,
                        m = function(t) {
                            var e = (0, _.kN)(t.toString(), 8);
                            n.onChangeAmount((0, _.TC)(e))
                        },
                        L = (0, s.useCallback)(y.ZP.debounce(j.wJ, 700, !0), [v]),
                        S = function() {
                            a && a();
                            var t = n.amount / 2;
                            if (t < r.minBet) return L("small", v), void m(r.minBet);
                            m(t)
                        },
                        k = function() {
                            a && a();
                            var t = 2 * n.amount;
                            if (0 !== t) return t > c && t < r.maxBet ? (L("noFunds", v), void m(c)) : t > r.maxBet ? (L("high", v), void m(r.maxBet)) : void m(t);
                            m(r.minBet)
                        };
                    (0, s.useEffect)((function() {
                        r.defaultBet && n.onChangeAmount(r.defaultBet)
                    }), [r.defaultBet]);
                    var E = function() {
                        return (0, u.jsxs)("div", {
                            className: "flex w-full",
                            children: [(0, u.jsx)(g, {
                                icon: "-",
                                border: "right",
                                onClick: function() {},
                                disabled: !0
                            }), (0, u.jsx)(w.sQ, {
                                amount: n.amount,
                                text: "".concat(v("YourBid"), ":"),
                                currency: r.currency
                            }), (0, u.jsx)(g, {
                                icon: "+",
                                border: "left",
                                onClick: function() {},
                                disabled: !0
                            })]
                        })
                    };
                    return (0, u.jsx)("div", {
                        className: "input-state-panel base-input",
                        children: function() {
                            var t, i;
                            if (h.GC[e.state] === h.GC["Not started"]) return (0, u.jsxs)("div", {
                                className: "flex w-full",
                                children: [(0, u.jsx)(g, {
                                    id: "decrease_bet_btn",
                                    icon: "-",
                                    border: "right",
                                    onClick: S,
                                    disabled: l
                                }), (0, u.jsx)(b.r, {
                                    ref: f,
                                    amount: n.amount,
                                    onChange: n.onChangeAmount,
                                    currency: r.currency
                                }), (0, u.jsx)(g, {
                                    id: "increase_bet_btn",
                                    icon: "+",
                                    border: "left",
                                    onClick: k,
                                    disabled: l
                                })]
                            });
                            if (null !== (t = n.alternativeShowBetAmountState) && void 0 !== t && t.enable) {
                                if (n.alternativeShowBetAmountState.isShow) return E()
                            } else if (h.GC[e.state] === h.GC.Active) return E();
                            if (null !== (i = n.alternativeShowResultState) && void 0 !== i && i.enable) {
                                if (n.alternativeShowResultState.win) return (0, u.jsx)(A, {
                                    isWin: !0
                                });
                                if (n.alternativeShowResultState.lose) return (0, u.jsx)(A, {
                                    isWin: !1
                                })
                            } else {
                                if (h.GC[e.state] === h.GC.Win) return (0, u.jsx)(A, {
                                    isWin: !0
                                });
                                if (h.GC[e.state] === h.GC.Loss) return (0, u.jsx)(A, {
                                    isWin: !1
                                })
                            }
                            return null
                        }()
                    })
                },
                A = function(t) {
                    var e = t.isWin,
                        n = void 0 !== e && e,
                        r = (0, o.$)().t;
                    return (0, u.jsx)("div", {
                        className: (0, m.Z)("state win-lose w-full", {
                            win: n,
                            lose: !n
                        }),
                        children: (0, u.jsx)("div", {
                            className: "round-result-state-animate game-state-animate",
                            id: "loseMessage",
                            children: "".concat(r(n ? "YouWon" : "TryAgain"))
                        })
                    })
                },
                S = function(t) {
                    var e = t.amount,
                        n = t.text,
                        r = t.currency;
                    return (0, u.jsxs)("div", {
                        className: "state amount session-bet-amount flex-1",
                        children: [(0, u.jsxs)("div", {
                            className: "bet-amount flex items-center justify-center",
                            children: [(0, u.jsx)("span", {
                                children: e
                            }), (0, u.jsx)("div", {
                                className: "currency-label",
                                children: r
                            })]
                        }), (0, u.jsx)("div", {
                            className: "bet-amount-label",
                            children: n
                        })]
                    })
                },
                k = function(t) {
                    var e = t.currRoundId,
                        n = t.rounds,
                        r = (0, o.$)().t;
                    return (0, u.jsx)("div", {
                        className: "state rounds",
                        children: (0, u.jsx)("div", {
                            className: "session-rounds-state-animate game-state-animate",
                            children: (0, u.jsxs)("div", {
                                className: "flex items-center flex-col",
                                children: [(0, u.jsxs)("span", {
                                    className: "round-title",
                                    children: [e + 1, " ", r("Round")]
                                }), (0, u.jsx)("div", {
                                    className: "circles",
                                    children: n.map((function(t) {
                                        return (0, u.jsx)("div", {
                                            className: (0, m.Z)("circle", {
                                                completed: !1 === t.isWin || !0 === t.isWin
                                            })
                                        }, t.id)
                                    }))
                                })]
                            })
                        })
                    })
                },
                E = n(1413),
                M = function(t) {
                    var e = (0, E.Z)({}, t);
                    return (0, u.jsx)(x.a, {
                        value: e,
                        children: (0, u.jsx)(w.k_, {})
                    })
                },
                B = {
                    min: "1",
                    max: "1",
                    "1/2": "1/2",
                    x2: "x2"
                },
                N = function() {
                    var t, e, n, r, i, s, o, a, c, p, f, C, m, g, j, y = (0, x.H)(),
                        Z = y.session,
                        b = y.bet,
                        A = y.addons,
                        S = y.roundType,
                        k = y.isLoading,
                        E = y.onClickSound,
                        M = y.betAmountIsValid,
                        N = y.sx,
                        H = h.GC[Z.state] === h.GC.Active,
                        O = null !== (t = null === A || void 0 === A || null === (e = A.quickBets) || void 0 === e ? void 0 : e.isEnabled) && void 0 !== t && t,
                        V = null !== (n = null === A || void 0 === A || null === (r = A.quickBets) || void 0 === r ? void 0 : r.bets) && void 0 !== n ? n : B,
                        F = null !== (i = null === A || void 0 === A || null === (s = A.autoBets) || void 0 === s ? void 0 : s.isEnabled) && void 0 !== i && i,
                        U = null !== (o = null === A || void 0 === A || null === (a = A.autoBets) || void 0 === a ? void 0 : a.count) && void 0 !== o ? o : "",
                        I = null !== (c = null === A || void 0 === A || null === (p = A.autoBets) || void 0 === p ? void 0 : p.checked) && void 0 !== c && c,
                        R = null === A || void 0 === A || null === (f = A.autoBets) || void 0 === f ? void 0 : f.toggleChecked,
                        G = null === A || void 0 === A || null === (C = A.autoBets) || void 0 === C ? void 0 : C.setCount,
                        T = null !== (m = null === A || void 0 === A || null === (g = A.autoBets) || void 0 === g ? void 0 : g.fieldDisabled) && void 0 !== m && m;
                    return (0, u.jsxs)("div", {
                        className: "bet-panel ".concat(null !== (j = null === N || void 0 === N ? void 0 : N.betPanelClass) && void 0 !== j ? j : ""),
                        children: [(0, u.jsx)("div", {
                            className: "bet-panel__actions",
                            children: (0, u.jsxs)("div", {
                                className: "flex flex-wrap flex-row mobile:flex-col mobile:gap-y-3",
                                children: [(0, u.jsx)("div", {
                                    className: "basis-2/3",
                                    children: S === w.V0.single ? (0, u.jsx)(y.BetPanelFieldComponent, {}) : (0, u.jsx)(L, {})
                                }), (0, u.jsx)("div", {
                                    className: "basis-1/3 pl-2 mobile:pl-0 mobile:basis-auto mobile:h-[3.25rem]",
                                    children: S === w.V0.single ? (0, u.jsx)(y.BetPanelButtonComponent, {}) : (0, u.jsx)(v, {
                                        disabled: k || !M
                                    })
                                })]
                            })
                        }), O && (0, u.jsx)(l, {
                            onClick: function(t, e) {
                                if (E && E(), Number.isNaN(Number(e))) b.onChangeAmount((0, w.TC)(t));
                                else {
                                    var n = parseFloat(b.amount.toString()) + parseFloat((0, w.TC)(t));
                                    b.onChangeAmount(n)
                                }
                            },
                            disabled: H,
                            betsList: (0, _.G0)(V, b.amount)
                        }), F && (0, u.jsx)(d.N, {
                            autoBetCountChange: G ? function(t) {
                                return G(t)
                            } : function() {},
                            fieldDisabled: T,
                            autoBet: I,
                            setAutoBet: R ? function(t) {
                                return R(t)
                            } : function() {},
                            autoBetCount: U,
                            sx: null !== N && void 0 !== N ? N : {}
                        })]
                    })
                }
        },
        6315: function(t, e, n) {
            n.d(e, {
                D8: function() {
                    return u
                },
                G0: function() {
                    return s
                },
                TC: function() {
                    return i
                },
                kN: function() {
                    return o
                },
                qb: function() {
                    return a
                }
            });
            var r = n(1413),
                i = n(9664).ZP.createPipe({
                    mask: Number,
                    scale: 2,
                    normalizeZeros: !1,
                    padFractionalZeros: !1,
                    radix: ".",
                    mapToRadix: ["."],
                    min: 0,
                    max: 99999999
                }),
                s = function(t, e) {
                    if (!t) return {};
                    var n = (0, r.Z)({}, t);
                    return Object.keys(t).forEach((function(r) {
                        switch (r) {
                            case "x2":
                                var i = 2 * e,
                                    s = parseFloat(t.max);
                                i > s && (i = s), n[r] = String(i);
                                break;
                            case "1/2":
                                var o = parseInt(e.toString(), 10),
                                    a = "";
                                if (!Number.isNaN(o) && BigInt(o) > Number.MAX_SAFE_INTEGER) a = String(BigInt(o) / BigInt(2));
                                else {
                                    var u = Number(e) / 2,
                                        c = parseFloat(t.min);
                                    u < c && (u = c), e < c && (u = e), a = String(u)
                                }
                                n[r] = a;
                                break;
                            case "min":
                                n[r] = t.min;
                                break;
                            case "max":
                                n[r] = t.max
                        }
                    })), n
                },
                o = function(t, e) {
                    if (t.length <= e) return t;
                    var n = Number(t);
                    if (Number.isNaN(n)) throw new Error("amount arg is not a number");
                    return Math.ceil(n).toString()
                },
                a = function(t) {
                    return Boolean(t.toString().match(/^(?![\s\S])|^0+\.*0*$|^[.]+|[.]$/))
                },
                u = function(t) {
                    return t
                }
        },
        7830: function(t, e, n) {
            n.d(e, {
                M: function() {
                    return o
                }
            });
            n(2791);
            var r = n(5523),
                i = n(3168),
                s = n(184),
                o = function(t) {
                    var e = t.disabled,
                        n = t.onClick,
                        o = t.currency,
                        a = t.winAmount,
                        u = (0, i.$)().t;
                    return (0, s.jsx)(r.J, {
                        id: "takePrizeButton",
                        text: (0, s.jsxs)("div", {
                            children: [(0, s.jsxs)("div", {
                                className: "cashout-amount",
                                children: [(0, s.jsxs)("span", {
                                    className: "font-bold",
                                    id: "prizeValue",
                                    children: [a || "0.00", "\xa0"]
                                }), (0, s.jsx)("span", {
                                    className: "font-normal",
                                    id: "prizeCurrency",
                                    children: o
                                })]
                            }), (0, s.jsx)("div", {
                                children: (0, s.jsx)("span", {
                                    children: u("TakeMoney")
                                })
                            })]
                        }),
                        clickHandler: n,
                        buttonColor: "orange",
                        isBlock: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        size: "big",
                        disabled: e
                    })
                }
        },
        7410: function(t, e, n) {
            n.d(e, {
                W: function() {
                    return o
                }
            });
            n(2791);
            var r = n(3168),
                i = n(5523),
                s = n(184),
                o = function(t) {
                    var e = t.id,
                        n = t.disabled,
                        o = t.onClick,
                        a = (0, r.$)().t;
                    return (0, s.jsx)(i.J, {
                        id: e,
                        text: a("Play"),
                        clickHandler: function() {
                            o()
                        },
                        buttonColor: "blue",
                        size: "big",
                        isBlock: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        disabled: n
                    })
                };
            o.defaultProps = {
                id: ""
            }
        },
        9010: function(t, e, n) {
            n.d(e, {
                f: function() {
                    return o
                }
            });
            n(2791);
            var r = n(5523),
                i = n(3168),
                s = n(184),
                o = function(t) {
                    var e = (0, i.$)().t,
                        n = t.color,
                        o = t.spanId;
                    return (0, s.jsx)(r.J, {
                        size: "big",
                        buttonColor: n,
                        text: e("Waiting"),
                        classes: "btn-waiting",
                        disabled: !0,
                        isBlock: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        clickHandler: function() {},
                        spanId: o
                    })
                };
            o.defaultProps = {
                spanId: ""
            }
        },
        8665: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return c
                }
            });
            var r = n(1413),
                i = n(9439),
                s = n(2791),
                o = n(8182),
                a = n(3892),
                u = n(184),
                c = function(t) {
                    var e = t.show,
                        n = t.clickHideModal,
                        c = t.modalSlides,
                        l = t.converter,
                        d = t.onChangeSlide,
                        p = l(c),
                        f = (0, s.useState)(0),
                        C = (0, i.Z)(f, 2),
                        h = C[0],
                        x = C[1];
                    (0, s.useEffect)((function() {
                        e && x(0)
                    }), [e]);
                    var v = (0, a.QS)({
                        onSwipedLeft: function() {
                            h < p.length - 1 && (x(h + 1), d && d())
                        },
                        onSwipedRight: function() {
                            h > 0 && (x(h - 1), d && d())
                        },
                        onTap: function() {
                            h < p.length - 1 && (x(h + 1), d && d())
                        }
                    });
                    (0, s.useEffect)((function() {
                        var t = document.querySelector(".carousel-controls__prev");
                        null !== t && e && t.focus()
                    }), [e]);
                    var m = function(t) {
                            "ArrowRight" === t.key ? h < p.length - 1 && (x(h + 1), d && d()) : "ArrowLeft" === t.key ? h > 0 && (x(h - 1), d && d()) : "Escape" === t.key && n()
                        },
                        g = function(t) {
                            x(t), d && d()
                        };
                    return (0, u.jsx)("div", {
                        className: e ? "modal active" : "modal",
                        children: (0, u.jsxs)("div", {
                            className: "modal__content",
                            children: [(0, u.jsx)("div", {
                                className: "modal__header",
                                children: (0, u.jsx)("button", {
                                    type: "button",
                                    className: "modal__close",
                                    onClick: function() {
                                        return n()
                                    },
                                    children: (0, u.jsx)("img", {
                                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAFVBMVEVHcEz///////////////////////+3ygHaAAAABnRSTlMAX2B/gN+dgdDrAAAAO0lEQVQY0wXBQRHEQAgAsMwsAlYCJoqD8r9zAP5FNPGDR1/OiqGSvmcRUwm9oAbO9kVlDGfpq5IYf3g/VfsINU+oyVYAAAAASUVORK5CYII=",
                                        alt: "iconClose"
                                    })
                                })
                            }), (0, u.jsx)("div", {
                                className: "modal__body",
                                children: (0, u.jsx)("div", {
                                    className: "modal__body-wrapper",
                                    children: (0, u.jsx)("div", {
                                        className: "modal__body-wrapper-item",
                                        children: (0, u.jsxs)("div", {
                                            className: "carousel",
                                            children: [(0, u.jsxs)("div", {
                                                className: "carousel-slides",
                                                children: [p[h - 1] && (0, u.jsx)("div", {
                                                    className: "carousel-slides__prev",
                                                    children: (0, u.jsx)("img", {
                                                        src: p[h - 1].img,
                                                        alt: "tour-slide"
                                                    })
                                                }), (0, u.jsx)("div", (0, r.Z)((0, r.Z)({}, v), {}, {
                                                    className: "carousel-slides__current",
                                                    children: (0, u.jsx)("img", {
                                                        src: p[h].img,
                                                        alt: "tour-slide"
                                                    })
                                                })), p[h + 1] && (0, u.jsx)("div", {
                                                    className: "carousel-slides__next",
                                                    children: (0, u.jsx)("img", {
                                                        src: p[h + 1].img,
                                                        alt: "tour-slide"
                                                    })
                                                })]
                                            }), (0, u.jsxs)("div", {
                                                className: "carousel-body",
                                                children: [(0, u.jsxs)("div", {
                                                    className: "carousel-text",
                                                    children: [p[h].header && (0, u.jsx)("div", {
                                                        className: "carousel-text__header",
                                                        children: p[h].header
                                                    }), p[h].body && (0, u.jsx)("div", {
                                                        className: "carousel-text__body",
                                                        children: p[h].body
                                                    }), p[h].footer && (0, u.jsx)("div", {
                                                        className: "carousel-text__footer",
                                                        children: p[h].footer
                                                    })]
                                                }), (0, u.jsxs)("div", {
                                                    className: "carousel-controls",
                                                    children: [(0, u.jsx)("div", {
                                                        className: (0, o.W)("carousel-controls__prev", !p[h - 1] && "disabled"),
                                                        onClick: function() {
                                                            x(h - 1), d && d()
                                                        },
                                                        onKeyDown: m,
                                                        tabIndex: 0,
                                                        role: "button"
                                                    }), (0, u.jsx)("div", {
                                                        className: "carousel-controls__slides",
                                                        children: p.map((function(t, e) {
                                                            return (0, u.jsx)("div", {
                                                                onClick: function() {
                                                                    return g(e)
                                                                },
                                                                onKeyDown: function() {
                                                                    return g(e)
                                                                },
                                                                tabIndex: 0,
                                                                role: "button",
                                                                className: (0, o.W)(e === h && "activated")
                                                            }, t.img)
                                                        }))
                                                    }), (0, u.jsx)("div", {
                                                        id: "nextButtonHowModal",
                                                        className: (0, o.W)("carousel-controls__next", !p[h + 1] && "disabled"),
                                                        onClick: function() {
                                                            x(h + 1), d && d()
                                                        },
                                                        onKeyDown: m,
                                                        tabIndex: 0,
                                                        role: "button"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                };
            c.defaultProps = {
                onChangeSlide: function() {}
            }
        },
        6876: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return u
                }
            });
            var r = n(9439),
                i = n(2791),
                s = n(3168),
                o = n(8182),
                a = n(184),
                u = function(t) {
                    var e = t.myHistoryContent,
                        n = t.liveBetsContent,
                        u = t.logoIcon,
                        c = t.logoText,
                        l = (0, s.$)().t,
                        d = (0, i.useState)("feed"),
                        p = (0, r.Z)(d, 2),
                        f = p[0],
                        C = p[1];
                    return (0, a.jsxs)("div", {
                        className: "history-panel",
                        children: [(0, a.jsxs)("div", {
                            className: "history-header",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, a.jsx)("div", {
                                    className: "logo-icon",
                                    children: u
                                }), (0, a.jsx)("div", {
                                    className: "logo",
                                    children: c
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "header-buttons",
                                children: [(0, a.jsx)("div", {
                                    id: "history_live_btn",
                                    role: "button",
                                    className: (0, o.W)("header-buttons__item", "feed" === f && "active"),
                                    tabIndex: 0,
                                    onClick: function() {
                                        return C("feed")
                                    },
                                    onKeyDown: function() {
                                        return C("feed")
                                    },
                                    children: "Live"
                                }), (0, a.jsx)("div", {
                                    id: "history_my_btn",
                                    role: "button",
                                    className: (0, o.W)("header-buttons__item", "history" === f && "active"),
                                    tabIndex: 0,
                                    onClick: function() {
                                        return C("history")
                                    },
                                    onKeyDown: function() {
                                        return C("history")
                                    },
                                    children: l("My")
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "separator mb-[12px]"
                        }), "history" === f ? e : n]
                    })
                }
        },
        4619: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return V
                }
            });
            var r, i, s, o, a, u, c, l, d = n(2791),
                p = ["title", "titleId"];

            function f() {
                return f = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, f.apply(this, arguments)
            }

            function C(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        s = Object.keys(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }

            function h(t, e) {
                var n = t.title,
                    h = t.titleId,
                    x = C(t, p);
                return d.createElement("svg", f({
                    viewBox: "0 0 2158 908",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: e,
                    "aria-labelledby": h
                }, x), n ? d.createElement("title", {
                    id: h
                }, n) : null, r || (r = d.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M106.21 712.238L128.834 593.463C88.1689 571.567 27.8755 550.479 10.0591 502.968C-15.3926 443.581 10.0591 375.71 69.4463 347.43C128.901 320.222 187.801 289.438 249.022 266.479C261.748 261.707 274.474 256.935 287.2 256.935H530.405C566.924 256.935 601.033 283.156 632.212 299.355L657.663 313.494C668.975 288.043 691.599 256.935 742.502 254.107H869.761C917.464 254.107 943.619 286.225 977.223 316.322C994.191 276.731 1025.3 254.107 1067.72 254.107H1161.04C1178.01 254.107 1189.32 259.763 1200.63 265.419L1240.22 288.043C1259.61 268.661 1283.86 259.641 1310.92 256.935C1268.5 234.311 1240.22 189.064 1240.22 138.16C1240.22 61.8054 1302.44 2.41809 1375.97 2.41809C1407.07 2.41809 1440.62 11.7194 1463.24 28.6872C1525.46 71.1067 1565.44 109.881 1565.44 163.612C1565.44 200.376 1551.3 234.311 1528.68 256.935C1525.85 262.591 1520.19 265.419 1517.37 268.247L1531.5 273.903C1545.64 265.419 1562.61 256.935 1588.06 256.935C1633.79 256.935 1681.5 250.382 1723.81 271.075L1771.88 296.527C1808.65 273.903 1848.24 259.763 1887.83 256.935C1958.71 256.935 2028.84 280.324 2084.41 325.494C2117.61 352.48 2141.74 387.009 2150.83 429.441C2159.31 463.377 2159.31 497.312 2153.66 531.248L2105.58 794.249C2102.75 816.872 2097.1 842.324 2082.96 862.12C2065.99 887.572 2037.14 904.47 2003.2 904.47H1919.34C1902.37 904.47 1885 896.056 1873.69 890.4L1814.3 859.292C1804.88 854.58 1797.25 847.824 1789.8 840.443C1781.64 853.305 1771.32 865.765 1761 873.504C1735.63 893.24 1704.62 904.517 1673.6 904.517C1637.55 904.517 1601.5 904.539 1565.44 904.539C1545.64 904.539 1531.5 898.883 1520.19 893.228L1463.63 864.948C1452.32 881.916 1426.87 904.539 1384.45 904.539H1296.78C1279.82 904.539 1265.68 898.883 1254.36 893.228L1189.32 859.292C1166.5 847.881 1150.94 821.289 1146.9 797.077C1136.39 825.118 1126.11 854.627 1104.48 876.26C1084.69 893.228 1065.33 904.486 1037.05 904.486H909.789C886.278 904.486 863.796 901.117 843.245 889.737C818.722 876.156 793.443 862.157 773.61 842.324C767.954 853.636 762.298 864.948 753.814 873.432C734.018 893.228 714.223 904.539 685.943 904.539H575.652C553.029 904.539 536.061 901.711 519.093 893.228L451.222 859.292C442.197 853.275 433.451 847.177 425.77 839.496C417.286 853.636 405.974 867.776 394.662 876.26C369.211 896.056 338.103 907.367 306.995 907.367C259.897 907.367 219.394 880.84 179.737 859.292C160.223 848.689 142.973 833.84 128.834 816.873C111.866 794.249 103.382 765.969 103.382 737.689C103.382 729.206 103.382 720.722 106.21 712.238ZM1375.97 39.1817C1322.24 39.1817 1276.99 84.4291 1276.99 138.16C1276.99 191.892 1319.41 237.139 1375.97 237.139C1432.53 237.139 1474.95 191.892 1474.95 138.16C1474.95 84.4291 1429.7 39.1817 1375.97 39.1817Z",
                    fill: "black"
                })), i || (i = d.createElement("path", {
                    d: "M1194.98 375.712L1033.78 777.283C1016.82 816.875 1002.68 839.499 965.913 839.499H838.655C799.063 839.499 776.439 814.047 773.611 768.8L765.128 565.186L680.289 774.456C666.149 808.391 652.009 836.671 618.073 836.671H507.783C462.535 836.671 437.083 814.047 437.083 760.316L431.427 613.261L465.363 429.444C479.503 350.261 451.223 319.153 431.427 293.701H524.75C561.514 293.701 575.654 310.669 578.482 355.916L589.794 601.95L700.084 330.465C711.396 305.013 728.364 293.701 762.3 293.701H844.311C872.59 293.701 898.042 310.669 898.042 361.572L909.354 601.95L1019.64 333.293C1030.96 305.013 1050.75 293.701 1081.86 293.701H1158.21C1200.63 293.701 1211.95 333.293 1194.98 375.712Z",
                    fill: "white"
                })), s || (s = d.createElement("path", {
                    d: "M1474.95 138.163C1474.95 191.895 1432.53 237.142 1375.97 237.142C1319.41 237.142 1276.99 191.895 1276.99 138.163C1276.99 84.432 1322.24 39.1846 1375.97 39.1846C1429.7 39.1846 1474.95 84.432 1474.95 138.163Z",
                    fill: "white",
                    stroke: "black",
                    strokeWidth: 1.41398,
                    strokeMiterlimit: 10
                })), o || (o = d.createElement("path", {
                    d: "M2051.85 491.655L2003.78 757.484C1998.12 797.075 1986.81 836.667 1938.74 836.667H1853.9C1817.13 836.667 1797.34 808.387 1802.99 763.14L1836.93 556.698C1842.58 517.107 1834.1 491.655 1814.3 474.687C1783.2 449.236 1735.12 460.547 1712.5 485.999C1698.36 502.967 1689.87 522.763 1684.22 568.01L1650.28 760.312C1644.63 797.075 1633.32 839.495 1582.41 839.495H1497.57C1443.84 839.495 1441.01 794.248 1446.67 765.968L1517.37 364.397C1523.02 333.289 1531.51 307.837 1568.27 299.353C1576.76 296.525 1585.24 296.525 1596.55 296.525H1658.77C1706.84 296.525 1735.12 313.493 1720.98 381.364L1715.33 415.3C1749.26 347.429 1828.44 296.525 1899.14 296.525C1952.88 296.525 1978.33 305.009 2006.61 333.289C2054.68 372.88 2063.17 440.752 2051.85 491.655Z",
                    fill: "white",
                    stroke: "black",
                    strokeWidth: 1.41398,
                    strokeMiterlimit: 10
                })), a || (a = d.createElement("path", {
                    d: "M2051.85 491.655L2003.78 757.484C1998.12 797.075 1986.81 836.667 1938.74 836.667H1853.9C1817.13 836.667 1797.34 808.387 1802.99 763.14L1836.93 556.698C1842.58 517.107 1834.1 491.655 1814.3 474.687C1783.2 449.236 1735.12 460.547 1712.5 485.999C1698.36 502.967 1689.87 522.763 1684.22 568.01L1650.28 760.312C1644.63 797.075 1633.32 839.495 1582.41 839.495H1497.57C1443.84 839.495 1441.01 794.248 1446.67 765.968L1517.37 364.397C1523.02 333.289 1531.51 307.837 1568.27 299.353C1576.76 296.525 1585.24 296.525 1596.55 296.525H1658.77C1706.84 296.525 1735.12 313.493 1720.98 381.364L1715.33 415.3C1749.26 347.429 1828.44 296.525 1899.14 296.525C1952.88 296.525 1978.33 305.009 2006.61 333.289C2054.68 372.88 2063.17 440.752 2051.85 491.655Z",
                    fill: "white"
                })), u || (u = d.createElement("path", {
                    d: "M1449.49 378.542L1378.79 760.317C1373.14 802.737 1359 839.501 1310.92 839.501H1223.25C1180.84 839.501 1166.7 808.393 1172.35 768.801L1243.05 367.23C1248.71 324.811 1268.24 296.263 1321.97 296.263H1387.01C1454.12 296.263 1463.63 319.155 1449.49 378.542Z",
                    fill: "white"
                })), c || (c = d.createElement("path", {
                    d: "M1474.95 138.163C1474.95 191.895 1432.53 237.142 1375.97 237.142C1319.41 237.142 1276.99 191.895 1276.99 138.163C1276.99 84.432 1322.24 39.1846 1375.97 39.1846C1429.7 39.1846 1474.95 84.432 1474.95 138.163Z",
                    fill: "#00A3FF"
                })), l || (l = d.createElement("path", {
                    d: "M403.144 415.301L340.929 751.829C332.445 808.388 278.714 842.324 222.154 833.84C171.251 822.528 131.66 774.453 142.971 715.065L179.735 519.936L157.111 531.247C114.692 551.043 66.6163 531.247 49.6485 488.828C29.8527 446.408 49.6485 398.333 92.068 378.537L258.918 302.182C298.51 282.386 335.273 285.214 366.381 305.01C397.413 327.947 414.456 367.225 403.144 415.301Z",
                    fill: "#00A3FF"
                })))
            }
            var x, v, m, g, w, j = d.forwardRef(h),
                y = (n.p, ["title", "titleId"]);

            function Z() {
                return Z = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, Z.apply(this, arguments)
            }

            function b(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        s = Object.keys(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }

            function _(t, e) {
                var n = t.title,
                    r = t.titleId,
                    i = b(t, y);
                return d.createElement("svg", Z({
                    width: 284,
                    height: 100,
                    viewBox: "0 0 284 100",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: e,
                    "aria-labelledby": r
                }, i), n ? d.createElement("title", {
                    id: r
                }, n) : null, x || (x = d.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M125.504 9.0625H137.397V35.9779H151.514C150.848 34.0194 150.515 31.8017 150.515 29.3246V9.0625H162.407V28.9718C162.407 31.5592 162.861 33.4409 163.768 34.617C164.709 35.7931 166.053 36.3811 167.8 36.3811C169.547 36.3811 170.874 35.7931 171.781 34.617C172.721 33.4409 173.192 31.5592 173.192 28.9718V9.0625H184.883V21.2925C185.275 20.1535 185.782 19.0674 186.404 18.0344C188.117 15.2118 190.469 13.0277 193.459 11.482C196.449 9.90269 199.809 9.11301 203.538 9.11301C206.965 9.11301 210.022 9.71786 212.71 10.9275C214.376 11.6775 215.861 12.634 217.166 13.7972V9.0625H228.857V21.8881L240.448 9.0625H257.172L264.378 21.2601L271.635 9.0625H283.125L269.821 31.5423V45.2015H257.928V31.3911L248.102 14.8994L239.289 24.6099L254.744 45.2015H240.986L231.528 32.6744L228.857 35.6482V45.2015H217.166V41.3239C215.861 42.4871 214.376 43.4437 212.71 44.1936C210.022 45.4033 206.965 46.0081 203.538 46.0081C199.809 46.0081 196.449 45.2352 193.459 43.6895C190.469 42.1102 188.117 39.9261 186.404 37.1371C185.627 35.8315 185.03 34.4467 184.612 32.9829C184.054 36.5342 182.632 39.4143 180.348 41.623C177.324 44.5464 173.108 46.0081 167.699 46.0081C162.29 46.0081 158.074 44.5464 155.05 41.623C154.405 40.9994 153.829 40.3222 153.321 39.5915V45.2016H125.504V9.0625ZM211.853 32.248L217.166 36.9914V18.1297L211.853 22.8731C209.669 20.1177 207.099 18.74 204.143 18.74C201.657 18.74 199.658 19.5465 198.146 21.1594C196.634 22.7387 195.878 24.8724 195.878 27.5606C195.878 30.2487 196.634 32.3992 198.146 34.0121C199.658 35.5915 201.657 36.3811 204.143 36.3811C207.099 36.3811 209.669 35.0034 211.853 32.248Z",
                    fill: "white"
                })), v || (v = d.createElement("path", {
                    d: "M162.425 90.1811V63.1146L141.882 63.1148C138.825 63.1148 137.296 63.854 137.296 65.3325C137.296 66.0382 137.75 66.5758 138.657 66.9454C139.564 67.2814 141.059 67.6511 143.142 68.0543C145.829 68.5583 148.097 69.1464 149.945 69.8184C151.793 70.4569 153.389 71.5153 154.732 72.9938C156.11 74.4723 156.798 76.4884 156.798 79.0422C156.798 81.2599 156.177 83.276 154.934 85.0906C153.691 86.8715 151.826 88.2996 149.34 89.3748C146.888 90.4165 143.898 90.9373 140.37 90.9373C137.447 90.9373 134.592 90.6181 131.803 89.9796C129.048 89.3076 126.781 88.4172 125 87.3083L128.83 78.6389C130.51 79.6134 132.391 80.4031 134.474 81.0079C136.557 81.5791 138.556 81.8648 140.471 81.8648C142.117 81.8648 143.293 81.7135 143.998 81.4111C144.704 81.0751 145.057 80.5879 145.057 79.9494C145.057 79.2102 144.586 78.6557 143.646 78.2861C142.739 77.9165 141.227 77.5133 139.11 77.0765C136.389 76.5052 134.121 75.9004 132.307 75.262C130.493 74.5899 128.914 73.5146 127.57 72.0361C126.226 70.5241 125.554 68.4911 125.554 65.9374C125.554 63.7196 126.176 61.7035 127.419 59.889C128.662 58.0745 130.51 56.6464 132.962 55.6048C135.448 54.5631 138.455 54.0422 141.983 54.0422L184.649 54.0422V63.1146H174.318V90.1811H162.425Z",
                    fill: "white"
                })), m || (m = d.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M229.106 80.4534H232.331L238.925 90.1811H251.624L243.619 78.4373C245.769 77.3284 247.415 75.8332 248.557 73.9514C249.7 72.0697 250.271 69.8688 250.271 67.3486C250.271 64.6605 249.616 62.3083 248.306 60.2922C246.995 58.2761 245.131 56.7304 242.712 55.6551C240.293 54.5798 237.454 54.0422 234.195 54.0422H217.213V81.5278L205.208 54.0422H193.29L177.505 90.1811H189.882L199.249 65.7803L208.616 90.1811H229.106V80.4534ZM237.068 64.3245C237.874 65.0301 238.277 66.0382 238.277 67.3486C238.277 68.6591 237.874 69.684 237.068 70.4232C236.261 71.1289 235.052 71.4817 233.439 71.4817H229.106V63.2156H233.439C235.052 63.2156 236.261 63.5852 237.068 64.3245Z",
                    fill: "white"
                })), g || (g = d.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.901 9.1913C22.1016 0.558952 32.7363 -3.18 39.8941 3.21753C43.7633 6.67581 47.2041 10.6129 50.1268 14.9482C53.0496 10.6128 56.4905 6.67566 60.3598 3.21733C67.5175 -3.1802 78.1522 0.558742 82.3528 9.19109L85.2553 15.156L90.8087 17.8583C99.441 22.0589 103.18 32.6936 96.7824 39.8513C93.449 43.5809 89.6707 46.9124 85.5197 49.7656C89.6707 52.6187 93.449 55.9503 96.7825 59.6798C103.18 66.8376 99.441 77.4723 90.8087 81.6728L85.369 84.3198L82.1311 90.883C77.8837 99.4925 67.229 103.174 60.106 96.7374C56.3394 93.3338 52.9852 89.4743 50.127 85.2347C47.2687 89.4744 43.9145 93.334 40.1478 96.7376C33.0248 103.174 22.3701 99.4927 18.1227 90.8832L14.8697 84.2893L9.11675 81.4512C0.507331 77.2038 -3.17386 66.549 3.26242 59.4261C6.54032 55.7985 10.2411 52.5534 14.2971 49.7656C10.2411 46.9777 6.54031 43.7327 3.26242 40.1051C-3.17386 32.9821 0.507339 22.3273 9.11676 18.08L14.9843 15.1853L17.901 9.1913ZM25.8338 71.6366C25.3856 72.6134 26.3934 73.6212 27.3702 73.1731L50.1713 62.7132L72.9716 73.1731C73.9485 73.6212 74.9563 72.6134 74.5081 71.6366L64.0482 48.8362L74.5081 26.0352C74.9562 25.0583 73.9484 24.0505 72.9716 24.4987L50.1713 34.9593L27.3703 24.4987C26.3934 24.0506 25.3856 25.0583 25.8338 26.0352L36.2944 48.8362L25.8338 71.6366Z",
                    fill: "white"
                })), w || (w = d.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.901 9.1913C22.1016 0.558952 32.7363 -3.18 39.8941 3.21753C43.7633 6.67581 47.2041 10.6129 50.1268 14.9482C53.0496 10.6128 56.4905 6.67566 60.3598 3.21733C67.5175 -3.1802 78.1522 0.558742 82.3528 9.19109L85.2553 15.156L90.8087 17.8583C99.441 22.0589 103.18 32.6936 96.7824 39.8513C93.449 43.5809 89.6707 46.9124 85.5197 49.7656C89.6707 52.6187 93.449 55.9503 96.7825 59.6798C103.18 66.8376 99.441 77.4723 90.8087 81.6728L85.369 84.3198L82.1311 90.883C77.8837 99.4925 67.229 103.174 60.106 96.7374C56.3394 93.3338 52.9852 89.4743 50.127 85.2347C47.2687 89.4744 43.9145 93.334 40.1478 96.7376C33.0248 103.174 22.3701 99.4927 18.1227 90.8832L14.8697 84.2893L9.11675 81.4512C0.507331 77.2038 -3.17386 66.549 3.26242 59.4261C6.54032 55.7985 10.2411 52.5534 14.2971 49.7656C10.2411 46.9777 6.54031 43.7327 3.26242 40.1051C-3.17386 32.9821 0.507339 22.3273 9.11676 18.08L14.9843 15.1853L17.901 9.1913ZM25.8338 71.6366C25.3856 72.6134 26.3934 73.6212 27.3702 73.1731L50.1713 62.7132L72.9716 73.1731C73.9485 73.6212 74.9563 72.6134 74.5081 71.6366L64.0482 48.8362L74.5081 26.0352C74.9562 25.0583 73.9484 24.0505 72.9716 24.4987L50.1713 34.9593L27.3703 24.4987C26.3934 24.0506 25.3856 25.0583 25.8338 26.0352L36.2944 48.8362L25.8338 71.6366Z",
                    fill: "#00C968"
                })))
            }
            var L, A, S = d.forwardRef(_),
                k = (n.p, ["title", "titleId"]);

            function E() {
                return E = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, E.apply(this, arguments)
            }

            function M(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        s = Object.keys(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }

            function B(t, e) {
                var n = t.title,
                    r = t.titleId,
                    i = M(t, k);
                return d.createElement("svg", E({
                    width: 1103,
                    height: 520,
                    viewBox: "0 0 1103 520",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: e,
                    "aria-labelledby": r
                }, i), n ? d.createElement("title", {
                    id: r
                }, n) : null, L || (L = d.createElement("path", {
                    d: "M368.27 3.50131C388.97 28.2359 413.276 59.2851 401.347 132.963L368.895 306.805L374.859 446.792C376.087 496.612 399.944 519.066 442.045 519.066H547.649C581.155 519.066 594.663 493.454 608.17 461.177L688.688 262.424L696.933 452.23C697.635 494.331 719.036 519.241 757.629 519.241H877.971C912.179 519.241 926.386 498.542 941.468 461.528L1095.14 80.8624C1111.81 41.3921 1102.16 3.32617 1060.58 3.32617H983.222C954.456 3.32617 935.331 13.1499 923.931 40.5156L820.259 295.579L810.782 68.0564C809.203 19.6397 786.047 3.50131 759.208 3.50131H680.794C649.745 3.50131 631.676 15.6051 622.028 39.2873L517.828 295.754L508.53 62.6183C507.127 18.9383 492.743 3.50131 457.658 3.50131H389.945C388.663 3.50131 368.27 3.50131 368.27 3.50131Z",
                    fill: "white"
                })), A || (A = d.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M306.248 16.1679C336.596 38.2706 353.612 70.7241 344.315 117.035L284.32 437.882C275.549 490.157 225.203 524.54 172.928 514.717C123.634 505.243 87.3215 458.932 97.1453 403.324L131.177 217.552L109.951 227.2C70.6566 244.918 24.3452 227.2 6.80307 187.555C-10.7391 147.909 6.80307 101.423 46.0976 83.5292L204.503 13.1857C241.869 -5.58459 277.479 -3.12863 306.248 16.1679Z",
                    fill: "white"
                })))
            }
            var N = d.forwardRef(B),
                H = (n.p, n(184)),
                O = function(t) {
                    return t.LUCKY_STAR = "lucky_star", t.JACKPOT_PALACE = "jackpot_palace", t.ONEWIN_NEW_LOGO = "onewin_new_logo", t
                }({}),
                V = function() {
                    var t = "true";
                    return (0, d.useMemo)((function() {
                        return !0
                    }), [t]) ? (0, H.jsx)("div", {
                        className: "preloader",
                        children: function() {
                            switch (t) {
                                case O.LUCKY_STAR:
                                    return (0, H.jsx)(S, {});
                                case O.JACKPOT_PALACE:
                                    return (0, H.jsx)("span", {
                                        className: "jackpot-palace-logo",
                                        children: "Jackpotpalace"
                                    });
                                case O.ONEWIN_NEW_LOGO:
                                    return (0, H.jsx)(N, {});
                                default:
                                    return (0, H.jsx)(j, {})
                            }
                        }()
                    }) : null
                }
        },
        4366: function(t, e, n) {
            n.d(e, {
                Fw: function() {
                    return i
                },
                aX: function() {
                    return r
                },
                jc: function() {
                    return s
                },
                y_: function() {
                    return o
                }
            });
            var r = {
                    sessionId: "",
                    currency: "USD",
                    balance: 0,
                    avatar: "",
                    name: " ",
                    isLoaded: !1
                },
                i = {
                    id: 0,
                    amount: 0,
                    availableCash: 0,
                    odd: 1.95,
                    isWin: null
                },
                s = {
                    hash: "",
                    salt: "",
                    currentRoundId: 0,
                    availableCashout: !1,
                    rounds: [{
                        id: 0,
                        amount: 0,
                        availableCash: 0,
                        odd: 0
                    }, {
                        id: 1,
                        amount: 0,
                        availableCash: 0,
                        odd: 0
                    }, {
                        id: 2,
                        amount: 0,
                        availableCash: 0,
                        odd: 0
                    }, {
                        id: 3,
                        amount: 0,
                        availableCash: 0,
                        odd: 0
                    }, {
                        id: 4,
                        amount: 0,
                        availableCash: 0,
                        odd: 0
                    }, {
                        id: 5,
                        amount: 0,
                        availableCash: 0,
                        odd: 0
                    }, {
                        id: 6,
                        amount: 0,
                        availableCash: 0,
                        odd: 0
                    }],
                    roundsPlayed: 0,
                    roundsTotal: 0
                },
                o = {
                    roundsCount: 0,
                    betsOdds: [],
                    currenciesList: void 0,
                    expirationTime: 0,
                    supportedCurrencies: ["USD"],
                    bets: {
                        RUB: {
                            quickBets: {
                                x2: "0.1",
                                "1/2": "0.1",
                                min: "0.1",
                                max: "0.1"
                            },
                            defaultBet: 10
                        },
                        USD: {
                            quickBets: {
                                x2: "0.1",
                                "1/2": "0.1",
                                min: "0.1",
                                max: "0.1"
                            },
                            defaultBet: 10
                        }
                    }
                }
        },
        3990: function(t, e, n) {
            n.d(e, {
                MW: function() {
                    return s
                },
                Qy: function() {
                    return i
                },
                xC: function() {
                    return r
                }
            });
            var r = function(t) {
                    var e = 0;
                    return t.forEach((function(t) {
                        t.isDefault && (e = t.presetValue)
                    })), e
                },
                i = function(t, e) {
                    e(!t)
                },
                s = (function() {
                    var t, e = null === (t = new URLSearchParams(window.location.search).get("exitUrl")) || void 0 === t ? void 0 : t.split(".").pop();
                    null === e || void 0 === e || e.includes("mx")
                }(), function(t, e) {
                    try {
                        var n = "".concat(t, "WasLaunched");
                        localStorage.getItem(n) || (e(), localStorage.setItem(n, "true"))
                    } catch (r) {}
                })
        },
        8767: function(t, e, n) {
            n.d(e, {
                K: function() {
                    return i
                }
            });
            var r = n(2791),
                i = function() {
                    var t = (0, r.useRef)(null);
                    return [t, function() {
                        var e, n;
                        return null === t || void 0 === t || null === (e = t.current) || void 0 === e || null === (n = e.focus) || void 0 === n ? void 0 : n.call(e)
                    }]
                }
        },
        967: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(1413),
                i = n(5523),
                s = n(184),
                o = function(t, e, n) {
                    return t.map((function(t) {
                        return (0, r.Z)((0, r.Z)({}, t), {}, {
                            body: t.body ? "".concat(e(t.body)) : void 0,
                            footer: t.footer ? (0, s.jsx)(i.J, (0, r.Z)((0, r.Z)({}, t.footer.props), {}, {
                                text: "".concat(e(t.footer.props.text)),
                                clickHandler: function() {
                                    return n()
                                }
                            })) : void 0,
                            header: t.header ? "".concat(e(t.header)) : void 0
                        })
                    }))
                }
        },
        4423: function(t, e, n) {
            n.d(e, {
                V: function() {
                    return r
                }
            });
            var r = function(t) {
                return t[t.changedCurrency = 0] = "changedCurrency", t[t.sessionExpired = 1] = "sessionExpired", t[t.insufficientFunds = 2] = "insufficientFunds", t[t.currencyNotSupported = 3] = "currencyNotSupported", t[t.highBid = 4] = "highBid", t[t.lowBid = 5] = "lowBid", t[t.smthWentWrong = 6] = "smthWentWrong", t
            }({})
        },
        7454: function(t, e, n) {
            n.d(e, {
                R0: function() {
                    return f
                },
                wJ: function() {
                    return h
                },
                Vp: function() {
                    return C
                }
            });
            n(2791);
            var r = n(5985),
                i = n(2486),
                s = n(8825),
                o = n(184),
                a = function(t) {
                    var e = t.body,
                        n = t.header,
                        r = t.headerId;
                    return (0, o.jsxs)("div", {
                        className: "app-popup__toast-body__wrapper",
                        id: "popUp",
                        children: [n && (0, o.jsx)("h4", {
                            className: "app-popup__toast-body__header",
                            id: r,
                            children: n
                        }), (0, o.jsx)("p", {
                            className: "app-popup__toast-body__body",
                            children: e
                        })]
                    })
                },
                u = n(3168),
                c = function(t) {
                    var e = t.amount,
                        n = t.currency,
                        r = t.odd,
                        i = (0, u.$)().t;
                    return (0, o.jsxs)("div", {
                        className: "app-popup__toast-body__win",
                        children: [(0, o.jsxs)("div", {
                            className: "left-side",
                            children: [(0, o.jsx)("div", {
                                className: "left-side__label",
                                children: i("YourWinnings")
                            }), (0, o.jsxs)("p", {
                                className: "left-side__lightgreen",
                                id: "winValuePopup",
                                children: [e, "\xa0", (0, o.jsx)("span", {
                                    className: "left-side__small-gray",
                                    id: "winCurrencyPopup",
                                    children: n
                                })]
                            })]
                        }), (0, o.jsxs)("div", {
                            className: "right-side",
                            id: "winCoefPopup",
                            children: ["x", r]
                        })]
                    })
                },
                l = function(t) {
                    var e = t.body,
                        n = t.header;
                    return (0, o.jsxs)("div", {
                        className: "app-popup__toast-body__wrapper",
                        id: "popUp",
                        children: [n && (0, o.jsx)("h4", {
                            className: "app-popup__toast-body__header",
                            children: n
                        }), (0, o.jsx)("p", {
                            className: "app-popup__toast-body__body",
                            children: e
                        })]
                    })
                },
                d = n(5856),
                p = (n(5251), {
                    wifi: (0, o.jsx)(i.kV, {}),
                    default: (0, o.jsx)(i.kV, {}),
                    money: (0, o.jsx)(i.Ws, {})
                }),
                f = {
                    default: function(t, e, n, u) {
                        (0, r.Am)((0, o.jsx)(a, {
                            body: (0, s.t)(e),
                            header: (0, s.t)(t),
                            headerId: u
                        }), {
                            type: "error",
                            icon: n ? p[n] : (0, o.jsx)(i.kV, {})
                        })
                    },
                    noInternet: d.ZP.debounce((function() {
                        this.default((0, s.t)("OnLineErrorHeader"), (0, s.t)("OnLineErrorBody"), "wifi")
                    }), 2e3, !0),
                    serverError: function(t) {
                        t ? this.default(t("Server error"), t("There was a problem connecting to the server. Try again later.")) : this.default((0, s.t)("Server error"), (0, s.t)("There was a problem connecting to the server. Try again later."), "wifi")
                    },
                    noFunds: function(t) {
                        t ? this.default(t("Insufficient funds"), t("To make a bet, top-up the balance."), "money") : this.default((0, s.t)("Insufficient funds"), (0, s.t)("To make a bet, top-up the balance."), "money")
                    },
                    currencyNotSupported: function(t) {
                        t ? this.default(t("Currency isn't supported"), t("Please choose the available one."), "money") : this.default((0, s.t)("Currency isn't supported"), (0, s.t)("Please choose the available one."), "money")
                    },
                    smallBid: function(t) {
                        t ? this.default(t("Try to bid higher"), t("Your bid is lower than the minimum."), "money") : this.default((0, s.t)("Try to bid higher"), (0, s.t)("Your bid is lower than the minimum."), "money")
                    },
                    highBid: function(t) {
                        t ? this.default(t("Try to bid lower"), t("Your bid is higher than the maximum."), "money") : this.default((0, s.t)("Try to bid lower"), (0, s.t)("Your bid is higher than the maximum."), "money")
                    },
                    incognitoMode: function(t) {
                        t ? this.default(t("Incognito mode"), t("Switch to the normal version of the browser for the correct display of the game.")) : this.default((0, s.t)("Incognito mode"), (0, s.t)("Switch to the normal version of the browser for the correct display of the game."))
                    }
                },
                C = {
                    default: function(t, e, n) {
                        (0, r.Am)((0, o.jsx)(l, {
                            header: t,
                            body: e
                        }), {
                            type: "success",
                            icon: null === n || void 0 === n || n
                        })
                    },
                    winRound: function(t, e, n) {
                        (0, r.Am)((0, o.jsx)(c, {
                            amount: t,
                            currency: e,
                            odd: n
                        }), {
                            className: "app-popup__toast win"
                        })
                    }
                },
                h = function(t, e) {
                    switch (t) {
                        case "small":
                            f.smallBid(e);
                            break;
                        case "high":
                            f.highBid(e);
                            break;
                        case "noFunds":
                            f.noFunds(e)
                    }
                }
        },
        1164: function(t, e, n) {
            n.d(e, {
                y4: function() {
                    return i.y
                },
                hi: function() {
                    return r
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                finishRound: function() {
                    return C
                },
                finishSession: function() {
                    return p
                },
                getFeedHistory: function() {
                    return x
                },
                getHistory: function() {
                    return h
                },
                getRound: function() {
                    return f
                },
                getSession: function() {
                    return l
                },
                getSettings: function() {
                    return c
                },
                getUser: function() {
                    return u
                },
                startSession: function() {
                    return d
                }
            });
            var i = n(5611),
                s = (n(2433), n(3252), n(4165)),
                o = n(5861),
                a = n(5196),
                u = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t() {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.getUser();
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t() {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.getSettings();
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t() {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.getSession();
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t(e) {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.patchSession(e);
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t(e) {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.patchWin(e);
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t() {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.getSession();
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t(e, n, r) {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.finishRound(e, n, r);
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t() {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.getUsersHistory();
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var t = (0, o.Z)((0, s.Z)().mark((function t() {
                        return (0, s.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.Hg.getLiveBetsHistory();
                                case 2:
                                    return t.abrupt("return", t.sent.data);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
            n(239)
        },
        3252: function(t, e, n) {
            n.d(e, {
                y: function() {
                    return i
                }
            });
            var r = n(2433),
                i = function(t, e) {
                    t.on("connect", (function() {
                        e({
                            type: r.Gi.SET_LIVE_BETS_CONNECTED,
                            payload: {
                                connected: !0
                            }
                        })
                    })), t.on("disconnect", (function() {
                        e({
                            type: r.Gi.SET_LIVE_BETS_CONNECTED,
                            payload: {
                                connected: !1
                            }
                        }), t.connect()
                    })), t.on("coin_live_bet_event", (function(t) {
                        var n = [];
                        n.push(t), e({
                            type: r.Gi.SET_LIVE_BETS,
                            payload: {
                                list: n,
                                firstList: !1
                            }
                        })
                    }))
                }
        },
        5611: function(t, e, n) {
            n.d(e, {
                y: function() {
                    return b
                },
                b: function() {
                    return _
                }
            });
            var r = n(4165),
                i = n(5861),
                s = n(9439),
                o = n(1413),
                a = n(2791),
                u = n(4428),
                c = n(6761),
                l = n(3252),
                d = n(4366),
                p = n(3533),
                f = n(4731),
                C = n(8077),
                h = n(3433),
                x = n(2433),
                v = n(5251),
                m = n.n(v);

            function g(t, e) {
                switch (m().info("ACTION: ", x.Gi[e.type]), m().info("PAYLOAD: ", e.payload), e.type) {
                    case x.Gi.UPDATE_SESSION:
                        return Array.isArray(e.payload) ? t : (0, o.Z)((0, o.Z)({}, t), {}, {
                            session: (0, o.Z)({}, e.payload)
                        });
                    case x.Gi.UPDATE_SETTINGS:
                        var n = e.payload;
                        return n && Object.keys(n.bets).forEach((function(t) {
                            var e = n.bets[t];
                            n.bets[t] = (0, o.Z)((0, o.Z)({}, e), {}, {
                                min: String(e.min),
                                max: String(e.max)
                            })
                        })), (0, o.Z)((0, o.Z)({}, t), {}, {
                            settings: (0, o.Z)({}, n)
                        });
                    case x.Gi.UPDATE_USER_DATA:
                        return (0, o.Z)((0, o.Z)({}, t), {}, {
                            user: (0, o.Z)((0, o.Z)({}, e.payload), {}, {
                                isLoaded: !0
                            })
                        });
                    case x.Gi.SET_LIVE_BETS:
                        var r = e.payload,
                            i = [];
                        return r.firstList ? i = r.list : (i = (0, h.Z)(t.liveBets.list), r.list.forEach((function(t) {
                            i.unshift(t)
                        })), i.length > 20 && (i = i.slice(0, 20))), (0, o.Z)((0, o.Z)({}, t), {}, {
                            liveBets: (0, o.Z)((0, o.Z)({}, t.liveBets), {}, {
                                list: i
                            })
                        });
                    case x.Gi.SET_LIVE_BETS_CONNECTED:
                        return (0, o.Z)((0, o.Z)({}, t), {}, {
                            liveBets: (0, o.Z)((0, o.Z)({}, t.liveBets), e.payload)
                        });
                    case x.Gi.SET_HISTORY:
                        return (0, o.Z)((0, o.Z)({}, t), {}, {
                            history: e.payload
                        });
                    default:
                        return t
                }
            }
            var w = {
                    session: (0, o.Z)({}, d.jc),
                    settings: (0, o.Z)({}, d.y_),
                    currentRound: (0, o.Z)({}, d.Fw),
                    user: (0, o.Z)({}, d.aX),
                    liveBets: {
                        connected: !1,
                        list: []
                    },
                    history: []
                },
                j = n(239),
                y = n(184),
                Z = (0, a.createContext)({
                    state: w,
                    dispatch: function() {
                        return null
                    },
                    computed: {
                        currentRound: (0, o.Z)({}, d.Fw),
                        activeRound: (0, o.Z)({}, d.Fw),
                        previousRound: (0, o.Z)({}, d.Fw),
                        isSessionActive: !1
                    }
                }),
                b = function(t) {
                    var e = t.children,
                        n = a.useReducer(g, w),
                        o = (0, s.Z)(n, 2),
                        d = o[0],
                        h = o[1],
                        x = (0, a.useState)(C.L),
                        v = (0, s.Z)(x, 2),
                        m = v[0],
                        b = v[1],
                        _ = (0, a.useMemo)((function() {
                            return function(t) {
                                return {
                                    currentRound: t.session.rounds.find((function(t) {
                                        return !t.userChoice
                                    })),
                                    activeRound: t.session.rounds[t.session.roundsPlayed] ? t.session.rounds[t.session.roundsPlayed] : t.session.rounds[t.session.roundsPlayed - 1],
                                    isSessionActive: Boolean(t.session.hash),
                                    previousRound: t.session.rounds[0 === t.session.roundsPlayed ? 0 : t.session.roundsPlayed - 1]
                                }
                            }(d)
                        }), [d, d.session.roundsPlayed]),
                        L = (0, j.y)(d, h, _),
                        A = (0, a.useMemo)((function() {
                            return {
                                state: d,
                                dispatch: h,
                                computed: _,
                                controller: L
                            }
                        }), [d, _, L]),
                        S = (0, a.useCallback)((0, i.Z)((0, r.Z)().mark((function t() {
                            var e;
                            return (0, r.Z)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (0, f.p)("Coin");
                                    case 2:
                                        e = t.sent, b(e);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), []);
                    return (0, a.useEffect)((function() {
                        S()
                    }), []), (0, a.useEffect)((function() {
                        var t = (0, u.io)("".concat("https://prod-rnd-websocket-php-orchestra.100hp.app/coin"), {
                            transports: ["websocket"],
                            auth: {
                                payload: (0, c.He)()
                            }
                        });
                        return (0, l.y)(t, h),
                            function() {
                                t.disconnect()
                            }
                    }), []), (0, y.jsx)(p.a, {
                        i18n: m,
                        children: (0, y.jsx)(Z.Provider, {
                            value: A,
                            children: e
                        })
                    })
                };

            function _() {
                var t = (0, a.useContext)(Z);
                if (void 0 === t) throw new Error("useCount must be used within a CountProvider");
                return t
            }
        },
        2433: function(t, e, n) {
            n.d(e, {
                CT: function() {
                    return i
                },
                Gi: function() {
                    return r
                },
                Nw: function() {
                    return s
                }
            });
            var r = function(t) {
                    return t[t.UPDATE_SETTINGS = 0] = "UPDATE_SETTINGS", t[t.UPDATE_SESSION = 1] = "UPDATE_SESSION", t[t.UPDATE_USER_DATA = 2] = "UPDATE_USER_DATA", t[t.SET_LIVE_BETS = 3] = "SET_LIVE_BETS", t[t.SET_LIVE_BETS_CONNECTED = 4] = "SET_LIVE_BETS_CONNECTED", t[t.SET_HISTORY = 5] = "SET_HISTORY", t
                }({}),
                i = function(t) {
                    return {
                        type: r.UPDATE_SESSION,
                        payload: t
                    }
                },
                s = {
                    updateSession: i,
                    fetchUserData: function(t) {
                        return {
                            type: r.UPDATE_USER_DATA,
                            payload: t
                        }
                    },
                    updateSettings: function(t) {
                        return {
                            type: r.UPDATE_SETTINGS,
                            payload: t
                        }
                    }
                }
        },
        239: function(t, e, n) {
            n.d(e, {
                y: function() {
                    return C
                }
            });
            var r = n(4165),
                i = n(1413),
                s = n(5861),
                o = n(1468),
                a = n(2433),
                u = n(2205),
                c = n(4366),
                l = n(5251),
                d = n.n(l),
                p = n(8077),
                f = n(4761),
                C = function(t, e, n) {
                    var l = {
                        flushSession: function() {
                            var n = (0, s.Z)((0, r.Z)().mark((function n() {
                                return (0, r.Z)().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            setTimeout((0, s.Z)((0, r.Z)().mark((function n() {
                                                return (0, r.Z)().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return e(a.Nw.updateSession((0, i.Z)((0, i.Z)({}, c.jc), {}, {
                                                                rounds: c.jc.rounds.map((function(e) {
                                                                    return (0, i.Z)((0, i.Z)({}, e), {}, {
                                                                        amount: t.session.rounds[0].amount
                                                                    })
                                                                }))
                                                            }))), n.next = 3, l.fetchUserData();
                                                        case 3:
                                                            return n.next = 5, l.fetchHistory();
                                                        case 5:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))), 1e3);
                                        case 1:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        fetchUserData: function() {
                            var t = (0, s.Z)((0, r.Z)().mark((function t() {
                                var n;
                                return (0, r.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, o.k.getUser();
                                        case 2:
                                            n = t.sent, e(a.Nw.fetchUserData(n));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        fetchSettingsData: function() {
                            var t = (0, s.Z)((0, r.Z)().mark((function t() {
                                var n;
                                return (0, r.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, o.k.getSettings();
                                        case 2:
                                            n = t.sent, e(a.Nw.updateSettings(n));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        fetchSessionData: function() {
                            var t = (0, s.Z)((0, r.Z)().mark((function t() {
                                var n;
                                return (0, r.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, o.k.getSession();
                                        case 2:
                                            n = t.sent, e(a.Nw.updateSession(n));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        finishActiveRound: function() {
                            var u = (0, s.Z)((0, r.Z)().mark((function s(u, c) {
                                var l, d;
                                return (0, r.Z)().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, o.k.finishRound(u, String(null === (l = n.activeRound) || void 0 === l ? void 0 : l.id), null !== c && void 0 !== c ? c : String(t.session.id));
                                        case 2:
                                            return d = r.sent, e((0, a.CT)((0, i.Z)((0, i.Z)({}, t.session), d))), r.abrupt("return", d);
                                        case 5:
                                        case "end":
                                            return r.stop()
                                    }
                                }), s)
                            })));
                            return function(t, e) {
                                return u.apply(this, arguments)
                            }
                        }(),
                        initGame: function() {
                            var e = (0, s.Z)((0, r.Z)().mark((function e() {
                                return (0, r.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, l.fetchUserData();
                                        case 3:
                                            return e.next = 5, l.fetchSettingsData();
                                        case 5:
                                            return e.next = 7, l.fetchSessionData();
                                        case 7:
                                            window.sessionStorage.setItem("previousAmount", String(t.session.rounds[0].amount)), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), (0, u.d)(e.t0, p.L.t);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        fetchHistory: function() {
                            var t = (0, s.Z)((0, r.Z)().mark((function t() {
                                return (0, r.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.t0 = e, t.t1 = a.Gi.SET_HISTORY, t.next = 4, o.k.getHistory();
                                        case 4:
                                            t.t2 = t.sent, t.t3 = {
                                                type: t.t1,
                                                payload: t.t2
                                            }, (0, t.t0)(t.t3);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        finishSession: function() {
                            var e = (0, s.Z)((0, r.Z)().mark((function e() {
                                return (0, r.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, o.k.finishSession(String(t.session.id));
                                        case 3:
                                            o.C.Vp.winRound(n.previousRound.availableCash, f.F[t.user.currency], n.previousRound.odd), e.next = 9;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), d().log("ERROR WHILE FINISHING SESSION: ", e.t0);
                                        case 9:
                                            return e.prev = 9, e.next = 12, l.flushSession();
                                        case 12:
                                            return e.finish(9);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6, 9, 13]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        startSession: function() {
                            var n = (0, s.Z)((0, r.Z)().mark((function n(s) {
                                var c;
                                return (0, r.Z)().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, o.k.startSession({
                                                amount: s
                                            });
                                        case 3:
                                            return c = n.sent, l.fetchUserData(), e((0, a.CT)((0, i.Z)((0, i.Z)({}, t.session), c))), n.abrupt("return", String(c.id));
                                        case 9:
                                            n.prev = 9, n.t0 = n.catch(0), (0, u.d)(n.t0, p.L.t);
                                        case 12:
                                            return n.abrupt("return", void 0);
                                        case 13:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 9]
                                ])
                            })));
                            return function(t) {
                                return n.apply(this, arguments)
                            }
                        }()
                    };
                    return l
                }
        },
        1468: function(t, e, n) {
            n.d(e, {
                C: function() {
                    return i
                },
                k: function() {
                    return r.hi
                }
            });
            var r = n(1164),
                i = n(7454)
        },
        6591: function(t, e, n) {
            n.d(e, {
                T: function() {
                    return o
                }
            });
            var r = n(5251),
                i = n.n(r),
                s = function(t) {
                    var e = document.createElement("textarea");
                    e.value = t, e.style.top = "0", e.style.left = "0", e.style.position = "fixed", document.body.appendChild(e), e.focus(), e.select();
                    try {
                        var n = document.execCommand("copy") ? "successful" : "unsuccessful";
                        i().log("Fallback: Copying text command was ".concat(n))
                    } catch (r) {
                        i().error("Fallback: Oops, unable to copy", r)
                    }
                    document.body.removeChild(e)
                },
                o = function(t) {
                    navigator.clipboard ? navigator.clipboard.writeText(t).then((function() {
                        i().log("Async: Copying to clipboard was successful!")
                    }), (function(e) {
                        i().error("Async: Could not copy text: ", e), s(t)
                    })) : s(t)
                }
        },
        2205: function(t, e, n) {
            n.d(e, {
                d: function() {
                    return a
                }
            });
            var r = n(1468),
                i = n(8825),
                s = n(5251),
                o = n.n(s);

            function a(t, e) {
                switch (t.message) {
                    case "Insufficient funds":
                        r.C.R0.noFunds(e);
                        break;
                    case "Currency not supported":
                        r.C.R0.currencyNotSupported(e);
                        break;
                    case "Rate below the minimum":
                        r.C.R0.smallBid(e);
                        break;
                    case "Rate above the maximum":
                        r.C.R0.highBid(e);
                        break;
                    case "AxiosError: Request failed with status code 500":
                        r.C.R0.serverError(e);
                        break;
                    default:
                        o().error((0, i.t)("SomethingWentWrong"), t.message)
                }
            }
        },
        1435: function(t) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAMAAADNLv/0AAAAP1BMVEVHcEwgr/8gr/cop/clqvQjqfkjrPolqvckq/gkq/kkq/ckq/okq/gkqfolq/ckq/gkqvklrPgjrPgkq/gkq/iqnynEAAAAFHRSTlMAECAgMFBfYHB/gI+Pj6C/z9/f79Z8nPkAAAAySURBVBjTLcq3AYAwAAMw0QKhF/9/KwNoltIB/ejOBOW5tGcqNUeDNcuW/WtzMvuVAV4xowFq/yBO2wAAAABJRU5ErkJggg=="
        },
        1956: function(t) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAS1BMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////ScsZwAAAAGHRSTlMAEB8gMD9AT1BfYG9wf4CPkJ+gr7/P3+9EA2Z9AAABGElEQVQ4y9XUy3aEIBAE0GpbcZQQxkSh/v9Ls/AxoBJNTjaplco9ArY0kEZ8JD3Qc0kANJJjlzFoIMkJGFZIgSVJvmcwkJ/OKqDWzWkA9M4FMnWGdDiNxgxaUs4hhgy6fIJ8KL1rGUrQ5q9oSzMDLX4WqY0RoNaiqAFAR5Ks8CivsedWD1aXu17qdQmFN6H5V9DeheKaYulcCi/yC6hxKKFH/Otd+wz2pCnAkH+eyNCpAoAuAQBRfTKBFngjSY7rBckgy/j0giOAPszP/AqjoCXJQV5wbi9N1wmAtptTA2i7+XRucNeIjn1lgwzW7JOcdIn8Jmlhx7vQ3IX4KLu8I8hUhH73//qCmw7tTYdwZNGdtkGp9smGvwCP4jJ85+hX2AAAAABJRU5ErkJggg=="
        },
        3457: function(t) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAP1UlEQVR4XrVYCXhW1ZnOM9bighJcGNtxLNN2ZJF9M4CyFi2CrILIGgEBkSUINOwEEREIslYEHHArtUBAoBA0y599JSSBEJJA9hUChEKL8N9zvrfvOTfS8tfO+Oj0PM/Jvf+9537n/d5vPfHz+wEDe3/eCIkBgYjrtEFi24epxO5pEt+9EKl9iiWhe4rEd4zWx1uuR3LABGT2aur7/b90wNPOH5FtZiO9r0dnjxGVOw1O8VtwqjfCqQiFrnkfTvkGztXQVXxWGALn9OtKzoyGRHVKU8dbjIcnoKmv3P+3gYNN/fHHJ4IlrudFVRgMb+m7kKvboS5tAf68B6p6O5yyUKjKLQS8mZPX8jVQF7bBW7YG+uJmqKpQOHmzlU4fDmT02o2wex/33ecHDYQ16U42zjlng6BrCaLsbW66nte1UGRRla+FvvQJWd0NVbgeuLwP6uKnnB9Bbhwk4HVUYD3XbIJTEgJdsRbO+QVahzfLhqfjBN/9vtfQR5qHqOQXRJetIEtkqPxd6OrVcIqWQSo2QacvgI6bA/HMgERMhcTOA+IXQ8J5f3wSdPQU6LS5QCGVurgVTimBXnyPLkJFK96Byhjh1Qd+shp7Gzfy3fs7Dx32Hx+ojDHKKX+HTCwheyto8lVQ2QQVPgr6897QXwyHxBBo1gpIbigkn65QtANSsBVyYjkkeRHkyKtcOxB6L9enTqaib0NfoBuUUVb5SkjZUsprlYSDzZv6Yvg/hz7S+iOngAAu0Wzlq2i+VZDipdwwAHpHa27aB5JJV6haC7lMYH8+CLl+CHLtMOcR6D/tpw9/yvkRlFEu43XoQ0OgPmgG9WFbmp/uU2mAroK+shG6ZLHIsQ6F2N3U3xfLPx3688fWOidGK2/pcgIMgbcoGE5yINRvn4Tazo3inocqm0nTLWawkMEbWYBzGdB/ASC4PeQacDOPYA/atbpqLlTSIKgdLaA2tYaKeonMrqGiJghXQJcvBQ43i/TF860D+38xS6UMFS9N7ZQspKmXwXt0AJw1baAOd4aTS1ZKxgPXyNaNU4C6QkSqHpgD0dc5r9l7C1pu8vVV4Osc4v4DzT6HAfcynMOd4IS2gooYxvS2AN7CeVSELpE5BnpPk7W+uO4Y2On3uEQ+W+dUvwVvwUzoSubHiOHwrm4B/VUvmmcUo3UUQe7nxqk0dQI3jyKjidB1R8ncl/a5rjvClBXL50mQumN2jb4aDn15P+dncApehi4cyiB8Dt51ZPbYcAbZYubcOZxvQuL6eZ1PGz/ri+/20B89slMql9AcK6nlPEj5MmrdnEzSL88zaGqm0d/m0kRLIFfWQZcxUC7vAq4T5BXjnx6CPWYBybVIprI99PHfce6EKuZ3ZWStnIBKfgNVwGAsGAInviec1f8FxzMSXlrQKWPQls9nALbJ9MVnB37ftCk1oWkYqZdX0wcXwUs/0sf7QucNhs7nrGC6yScT58dCFU2ElC7kM6aryo0EGsZ5lIFxzLKoLx9i3uSzGoIsWwldyjRWNJMAR0AXvwQnn0DPDeP9SLpBZ3gNIQVz6cskp/Q3kIyXBeFt/jHH4nDLXep8ELUJ5gY0+ZEB8L73C6i8/tBn6aNn+rMU/opAGQx5w6DOMeUUv0kAS1ygBKRrdvHbfWTwC7L5Ga8f890WCKNbKNfJH0dwo6HODoTKfYGTKStvILMJ2fxdezh7fmWrnVNFVmuWAQeaee4Eufnex9XRpx2pXkrq58F7eiq8G5pBZ/SDyiHI08/ByeoJxas2gE/xmj+Sm04m4OlM/Kzr1Zsg1cydVe9Daj+BXCBwU/tNFTvH1FQ8m4yNp4xfU3ED8EXe93cVzx3AZ+PgXduBvk0lL2ymvAWQ1MHA7sd63QaqPvQfp06Ogbc4iEE0Bd6oV6A+bktwTNA5FGyB9mZCH0A2KfTM85yDGBCTIYXT6QqzGGhkoZAmq9zgAixaBFPNpJTXAvr2mRGcdB+jOGWpzB6UQVkFAyiDSudPBuoSmCGq6T7MDlVMVxXzgR0PvXcbqGz336/KmDZK5zBNTIezqyNUqgFJn83ubc2jzxBwVl9WpX5wTrqbmI3VqQGWWSli8j/HWTCbwFkoihbQxK+SNfp0Pq9nh1DR/vY7KXoJcn4oJG8QhAxL0av8PQvyJ2aRuhIC/Yxllo1MFZX8/L8L/8bovlZ1TsWbdGQ6c+EsJuSWBNjX1TiXAHPIYE5/qJO9XJPxqk72JKihBE1FTlGRkhkENZyMM+BKKCNnFBVhGsojW7kEm/OctY4UDLIuJGdfZLkd5JJwtj+BsrTmcUYwQHOZw0maU07Fv+oGbGcfYP5oTx92QwRayeDImgC1p60NIHWih50GnJPeHZpMSsFg3j/LxGyygVlD3zVgz7zIOYSbcJ4ZxnWjLduSS9YIxqwTyhH6uM7gPVOTzqLFMvhtdh9LhkrvBv0lr/HMBOcnMVsEQRIHAhvvb+OHfc17qePd2A3R4S8tgPMlNzweYIWqtO6uIJpMGXAZBH2KALMZ/dm9ILyKUSiLdZ+Mi4nk9B4uWyZo+I1lzShl7smkkWPlGhKMZdID7B6SRZlZtFgC3+9/moxOg/c8XSbjJeAD//F+2OLfy4npTZoZELXzocJp0pjO/JAACUAz2iWzj8sEBVufMm6Q2t0+E5MBuLEwksUoldbNKmCeqdSuBPiMaxUqoNPM/TP2mRjA5j1/q+TOVKaPZdqwK8d7WwvLFfp5Nivhjn+f7Ydtjwaq6B5MS28wpbBpYF2XjD6WAZ36tA0gndKF92TZ3JureWcCihuJ8VuzWcozFog+Yb4z7/gsqQO/DXCfG2tQidty0ntaxbVxKa4RExNUwK4Pa8fsw5xbM4cZZzQQ+uNlflj7QKAyPnrB1FlSfbQLNyczKWTVmogfJz/N3pKC6UMqiSykdKvfwLzjs8T2vHZxn5v1BKPJkpWT5rqMGFaTKMdYKZWsG0VT3G/NOmMNldjJvT9OtsumWfPL6VeAbQ8t90Owfw8dzbRTwRclk9ihvwCd2IUfkc1kamrMk0QASQF0cgaZEZZsWOrmgkvib2OylO6uSQ17iQZkL5epjGetHJ1AQAwYy6aRQcVhsolRinuJYTilowWqvurLNDkBuMpqlvoCsMmfpg+5v50+1J6lczL9lIk5icER8RQkvgMjzpjcAO3Ejfjb+Jlh1PghWdHxHV2mDVMmYo1yVEZO97N+rY0MuglO9XOViqcCyWYdLUAfN9+ruPbue7M2lWu5h4rsTZDzWZ3egI6kQmsfZDBtaOove5oxhzL/1TLpklkJ72g/lmQKS+gCpNF0CYbhrtaEEk9GklwlDJsS1wY61piQwZZEELHtuDHXGLaSOluGrRJ0IcOsiqVl4syajlYRoRsJZVsLxnaFk8aet2oqEz6r3ie/JFD/njbhY+NDdapwPKvBDMusjuhqTShxhtVO9T5KgbGtmBHaumATuZmHAOO4mQk2sy6hI2c9sPh2UDFGAbOmg2uRxA4uIHNvrGDWUWExVvK0BFJ4PdaRLshcXj7Jkidbn1AI8nePJ3jr3jCdxd6wii9LuSiaTEa3pKb0t2g2J9Gt6lkkGA9bP5pLyJQk8HdcW/verNcx7dx3BCn0aSFrxn3EMBfP53GUEVv/zLBnlI41SnSyaw3DTjhPEaXjWUpns2MbCay87+TtEoo1D8+SzzqIt4hlr3IiO50J4DGZbLS1YAyzOoYAIwkmsrllUsw7M82mZM1d194Fws3Fw3fGJ817s95jlDDP29h1xietHJPq7FpaI7wNnBweU4pZ1arZP8TSVxc2WP83oCF+/ljzqOMUjSHtoxlxLGFxZDWqlSuYIC2jnlauOxgmYtzNJZrvjPkNUMN8lFnfvv65CaAAFwh9XZt3NK9E82pkU3H7rYn6qNbs8rmm+lU4Na/R7DyXbXwYmO9zJEHwfRE41E10DWts6StklYesWAqhqV1ABqQxIQFFPVUPqJ27oTVh/b1RJJr3GSyjCawyCSyz8QyyVBaSdNbtZGaJiOaAqf1GlrGKYZiyHXb86sJkEsWW8GgAENzw3B0gLdAZTbpj5f2i89mC1Uxkh00XYAOiI550AUYaQO0suzqytWXAmtokdoLWEc1sMODEcy6g0zyqZDIXng0CzvFsdSIQyGZwJPQlOGYSU2Yjn3IVO8GUdWYgm6LxBMkjdDW/W/+EYNk9/3gUMUOW3ndAtjYh7eNYUl/hUXkMW7Lnvx2QqS6MdJigIZtgZkCGYa+PCyiTjXDOXKByO3uCxUB+CFC4jClsAtllXxBjgqw+E/BI4pTQitWBvPIstZ9MB99d5Ivv9vh6SuMnsLRxrRzrRM2G84A2hU3sNNvy3QHIpC6CBlORdQlOmNIYTeYz2ESc5zEibzkb4s08D+0Aynex31xHoOupwBRWp0Cauqt1GWUKQxWDt5KuVsPnif1Fz2ug8Ibfz3zx3TF00L8FycKGWk4N5kGL3T5Z1Rfot6YAfAPo70xm3cEk+2j6WipLYjrbsoIQtneryObnPNR9yskzVMUfgJIdbD7Y/JyeQaU6sDP6NfuL4dbUcmEiz2Jk+r1HgEUPLvfF9a1Dv9lgg4Q2ESfjeaD2NTI7lb0AD1/sM5WJYFN5vnqSgFvU+217C157eE0bRVPPI4Nkr5wn0dL/4fX3vO6GlOykAu+wI6KVSk1bOZMN8jCW7jFspEdA3n0IMuPHB3zx/K9DTb5np4Q0FieCTWzRSAvUOLthwGGVUkwxOroFAbIgeEzCf8oGimFUchfS5Nstm6jaB1z4Iw99e8kq2a3cBlW7jnmStbzmDVagsTR/f2A1iZl+bxqC/L77P8m+GbfGP/CuntXgpoR1EYfR6JSOItAR1vGdIp6Pzg1ll97XNhwmT8oJHuAyx5HRYID+CcNozQHgcjh9/QhdKYzW2U6QdI26EJ56mdi/oIVWNoQz/UeZCPweIL8ZOrDxAj29ocg7jXiQYwtYxY7m6jr67WI2DkFkmmf1irHWfLr6dSrDU2g1zVu7jaA+AW5EQtcd4AyD/MUDucb7S3SLIvrq5sehZjTwOlPuD/Xd93sNTGcr+Fqjs3rOXSIf0zdP8iRZHQx9PQpMDwRwEnLdQzA07/Uv+Swd8nUqcLMAuMX3qhb6Zj7EGwNUb4SEsTSGPCZqTqM6NemuIb77/eDhHXfXOHn9wUJnyt1eWfUAwD5WzjIwLn8MuRnHeYYzB7Q3ZwXkRob9D58Uf0jXmA7Zy9TzNv161k8v6Rn+y293Rf+qoWY9PME79u5IzHtUsLQJZOZdghUPirz/n5D3fy6y9Wciv2Vh2EpFtrBnCO2q1YJfKrWoXaxe9szsuiE/wBe/z0Cgv/+t0X6Db428Z4kztdFBNbFh9K0xP8pwxj2QryY8dswJvC/sZuAj678e+fDYa6EvMkHibl8Z33X8FZe52loyH0WEAAAAAElFTkSuQmCC"
        }
    }
]);
//# sourceMappingURL=5638.dc2af924.chunk.js.map