"use strict";
(self.webpackChunkcoin_flip_app_ts = self.webpackChunkcoin_flip_app_ts || []).push([
    [5330], {
        5960: function(e, t, n) {
            n.r(t), n.d(t, {
                MinesPage: function() {
                    return je
                },
                default: function() {
                    return Ne
                }
            });
            var s = n(2791),
                r = n(4165),
                i = n(5861),
                a = n(9439),
                o = n(6876),
                c = n(1641),
                u = n(5131),
                l = n(4535),
                d = n(4761),
                f = n(1963),
                p = n(5196),
                v = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e() {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.getUser();
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e() {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.getSettings();
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e(t) {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.patchSession(t);
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e(t) {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.putRound(t);
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e(t, n) {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.getSessions(t, n);
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e(t) {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.getSession(t);
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e(t) {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.finishSession(t);
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = (0, i.Z)((0, r.Z)().mark((function e(t) {
                        return (0, r.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p.Np.getSessionStats(t);
                                case 2:
                                    return e.abrupt("return", e.sent.data);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = {
                    getUser: v,
                    getSettings: h,
                    getSessions: Z,
                    startSession: m,
                    finishRound: x,
                    getSession: S,
                    finishSession: b,
                    getSessionStats: w
                },
                g = n(3533),
                k = n(4731),
                C = n(3433),
                j = n(1413),
                N = n(5251),
                T = n.n(N),
                E = function(e, t) {
                    switch (T().info("ACTION: ", f.M[t.type]), T().info("PAYLOAD: ", t.payload), t.type) {
                        case f.M.SET_USER:
                            return (0, j.Z)((0, j.Z)({}, e), {}, {
                                user: (0, j.Z)((0, j.Z)({}, t.payload), {}, {
                                    isLoaded: !0
                                })
                            });
                        case f.M.UPDATE_SESSION:
                            return (0, j.Z)((0, j.Z)({}, e), {}, {
                                session: (0, j.Z)({}, t.payload)
                            });
                        case f.M.UPDATE_SETTINGS:
                            var n = t.payload;
                            return n && Object.keys(n.bets).forEach((function(e) {
                                var t = n.bets[e].quickBets;
                                n.bets[e].quickBets = (0, j.Z)((0, j.Z)({}, t), {}, {
                                    min: String(t.min),
                                    max: String(t.max)
                                })
                            })), (0, j.Z)((0, j.Z)({}, e), {}, {
                                settings: (0, j.Z)({}, n)
                            });
                        case f.M.UPDATE_USER_DATA:
                            return (0, j.Z)((0, j.Z)({}, e), {}, {
                                user: (0, j.Z)({}, t.payload)
                            });
                        case f.M.SET_SESSIONS:
                            return (0, j.Z)((0, j.Z)({}, e), {}, {
                                sessions: t.payload
                            });
                        case f.M.SET_LIVE_BETS_CONNECTED:
                            return (0, j.Z)((0, j.Z)({}, e), {}, {
                                liveBets: (0, j.Z)((0, j.Z)({}, e.liveBets), t.payload)
                            });
                        case f.M.SET_LIVE_BETS:
                            var s, r = t.payload,
                                i = r.data;
                            return (s = Array.isArray(i) ? i : [(0, j.Z)((0, j.Z)({}, i), {}, {
                                bet: i.bet,
                                resultBalance: i.resultBalance
                            })].concat((0, C.Z)(e.liveBets.list))).length > 20 && (s = s.slice(0, 20)), (0, j.Z)((0, j.Z)({}, e), {}, {
                                liveBets: (0, j.Z)((0, j.Z)({}, e.liveBets), {}, {
                                    list: s,
                                    isFirstList: r.isFirstList
                                })
                            });
                        default:
                            return e
                    }
                },
                _ = n(4428),
                A = n(6761),
                D = n(8077),
                B = {
                    id: "",
                    state: "Not started",
                    bet: 0,
                    hash: "",
                    salt: "",
                    lastRound: 0,
                    coefficient: 0,
                    availableCashout: 0,
                    startDate: "",
                    endDate: "",
                    currency: "USD",
                    gameData: {
                        presetValue: 0,
                        coefficients: [],
                        userChoices: [],
                        expectedChoices: []
                    }
                },
                H = {
                    session: (0, j.Z)({}, B),
                    settings: (0, j.Z)({}, {
                        bets: {
                            USD: {
                                defaultBet: 0,
                                quickBets: {
                                    x2: "0.1",
                                    "1/2": "0.1",
                                    min: "0.1",
                                    max: "1"
                                }
                            }
                        },
                        presets: [{
                            presetValue: 3,
                            isDefault: !0
                        }],
                        roundsCount: 25,
                        rates: [],
                        supportedCurrencies: ["USD"]
                    }),
                    user: (0, j.Z)({}, {
                        currency: "USD",
                        balance: "0",
                        avatar: "",
                        fullName: "",
                        language: "en",
                        exchangeRate: 0,
                        isLoaded: !1
                    }),
                    sessions: (0, j.Z)({}, {
                        data: [],
                        limit: 0,
                        offset: 0
                    }),
                    liveBets: {
                        connected: !1,
                        list: [],
                        isFirstList: !0
                    }
                },
                F = n(2205),
                L = n(184),
                M = (0, s.createContext)({
                    state: H,
                    dispatch: function() {
                        return null
                    },
                    computed: {
                        isSessionActive: !1,
                        isSessionNotStarted: !0,
                        isSessionFinished: !1,
                        isLastStep: !1,
                        isFullWin: !1
                    }
                }),
                R = function(e) {
                    var t = e.children,
                        n = (0, s.useReducer)(E, H),
                        o = (0, a.Z)(n, 2),
                        c = o[0],
                        u = o[1],
                        l = (0, s.useMemo)((function() {
                            return function(e) {
                                return {
                                    isSessionActive: d.GC[e.session.state] === d.GC.Active,
                                    isSessionNotStarted: d.GC[e.session.state] === d.GC["Not started"],
                                    isSessionFinished: d.GC[e.session.state] === d.GC.Loss || d.GC[e.session.state] === d.GC.Win,
                                    isLastStep: e.session.lastRound > 0 && e.session.lastRound === e.session.gameData.coefficients.length - 1,
                                    isFullWin: e.session.lastRound > 0 && e.session.lastRound === e.session.gameData.coefficients.length
                                }
                            }(c)
                        }), [c]),
                        p = function(e, t) {
                            var n = {
                                fetchUserData: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e() {
                                        var n;
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, y.getUser();
                                                case 2:
                                                    n = e.sent, t(f.N.setUser(n));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                fetchSettingsData: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e() {
                                        var n;
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, y.getSettings();
                                                case 2:
                                                    n = e.sent, t(f.N.updateSettings(n));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                fetchSessionData: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e(n) {
                                        var s;
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, y.getSession(n);
                                                case 2:
                                                    s = e.sent, t(f.N.updateSession(s));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                finishActiveRound: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e(t) {
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.abrupt("return", y.finishRound(t));
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                initGame: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e() {
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, n.fetchSettingsData();
                                                case 3:
                                                    return e.next = 5, n.fetchUserData();
                                                case 5:
                                                    e.next = 11;
                                                    break;
                                                case 7:
                                                    e.prev = 7, e.t0 = e.catch(0), (0, F.d)(e.t0, D.L.t), T().error(e.t0);
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 7]
                                        ])
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                checkActiveSession: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e() {
                                        var t;
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, y.getSessions({
                                                        limit: 1,
                                                        offset: 0
                                                    }, "Active");
                                                case 3:
                                                    if (!(t = e.sent).data.length) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 7, n.fetchSessionData(t.data[0].id);
                                                case 7:
                                                    e.next = 13;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t0 = e.catch(0), (0, F.d)(e.t0, D.L.t), T().error(e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 9]
                                        ])
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                fetchHistory: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e() {
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.t0 = t, e.t1 = f.N, e.next = 4, y.getSessions({
                                                        limit: 30,
                                                        offset: 0
                                                    });
                                                case 4:
                                                    e.t2 = e.sent, e.t3 = e.t1.updateSessions.call(e.t1, e.t2), (0, e.t0)(e.t3);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                finishSession: function() {
                                    var n = (0, i.Z)((0, r.Z)().mark((function n() {
                                        var s;
                                        return (0, r.Z)().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, y.finishSession(e.session.id);
                                                case 2:
                                                    s = n.sent, t(f.N.updateSession(s));
                                                case 4:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                startSession: function() {
                                    var e = (0, i.Z)((0, r.Z)().mark((function e(s, i) {
                                        var a;
                                        return (0, r.Z)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, y.startSession({
                                                        amount: s,
                                                        presetValue: i
                                                    });
                                                case 2:
                                                    a = e.sent, t(f.N.updateSession(a)), n.fetchUserData();
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                clearSession: function() {
                                    t(f.N.updateSession(B))
                                }
                            };
                            return n
                        }(c, u),
                        v = (0, s.useMemo)((function() {
                            return {
                                state: c,
                                dispatch: u,
                                computed: l,
                                controller: p
                            }
                        }), [c, l, p]),
                        h = (0, s.useState)(D.L),
                        m = (0, a.Z)(h, 2),
                        x = m[0],
                        Z = m[1],
                        S = (0, s.useCallback)((0, i.Z)((0, r.Z)().mark((function e() {
                            var t;
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, k.p)("Mines");
                                    case 2:
                                        t = e.sent, Z(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []);
                    return (0, s.useEffect)((function() {
                        S()
                    }), []), (0, s.useEffect)((function() {
                        var e = (0, _.io)("".concat("https://prod-rnd-websocket-php-orchestra.100hp.app/mines"), {
                            transports: ["websocket"],
                            auth: {
                                payload: (0, A.He)()
                            }
                        });
                        return function(e, t) {
                                e.on("connect", (function() {
                                    t(f.N.liveBetsConnected({
                                        connected: !0
                                    }))
                                })), e.on("disconnect", (function() {
                                    t(f.N.liveBetsConnected({
                                        connected: !1
                                    })), e.connect()
                                })), e.on("mines_live_bet_event", (function(e) {
                                    t(f.N.setLiveBets({
                                        data: e,
                                        isFirstList: !1
                                    }))
                                }))
                            }(e, u),
                            function() {
                                e.disconnect()
                            }
                    }), []), (0, L.jsx)(g.a, {
                        i18n: x,
                        children: (0, L.jsx)(M.Provider, {
                            value: v,
                            children: t
                        })
                    })
                },
                P = function() {
                    var e = (0, s.useContext)(M);
                    if (void 0 === e) throw new Error("useMinesContext must be used within a MinesStateProvider");
                    return e
                },
                U = n(3856),
                I = n(3168),
                G = n.p + "static/media/tour-1.b6a3c18cd827983f3091.webp",
                W = n.p + "static/media/tour-2.6815bbba7f02489d72d5.webp",
                V = n.p + "static/media/tour-3.90c8e32825b5aff60a45.webp",
                O = n.p + "static/media/tour-4.d0fc08bedf177ffbbd59.webp",
                z = n.p + "static/media/tour-5.b6a3c18cd827983f3091.webp",
                J = n(5523),
                q = [{
                    header: "Welcome",
                    body: "PopupStep1",
                    img: G
                }, {
                    body: "PopupStep2",
                    img: W
                }, {
                    body: "PopupStep3",
                    img: V
                }, {
                    body: "PopupStep4",
                    img: O
                }, {
                    header: "HaveNiceGame",
                    img: z,
                    footer: (0, L.jsx)(J.J, {
                        id: "playButtonHowModal",
                        text: "Play",
                        buttonColor: "blue",
                        size: "big",
                        isBlock: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        clickHandler: function() {}
                    })
                }],
                $ = n(967),
                Y = n.p + "static/media/footer.a650de3af39c3672822e.webp",
                K = n.p + "static/media/mines_ui_click.20e12728da961b98f6e6.mp3",
                Q = n.p + "static/media/mines_ui_step.c4f0e283ad748b7e6dca.mp3",
                X = n.p + "static/media/mines_ui_lose.7593aa08a79e45574e68.mp3",
                ee = n.p + "static/media/mines_ui_cashout.a57b5c370bb9cd225fa1.mp3",
                te = n.p + "static/media/mines_ui_gloss.d9a2c8210da42282370a.mp3",
                ne = n.p + "static/media/mines_ui_restart.b8eb1789b526b6f543f5.mp3",
                se = n(1845),
                re = {
                    click: {
                        audio: new se.Howl({
                            src: K
                        })
                    },
                    step: {
                        audio: new se.Howl({
                            src: Q
                        })
                    },
                    lose: {
                        audio: new se.Howl({
                            src: X
                        })
                    },
                    cashout: {
                        audio: new se.Howl({
                            src: ee
                        })
                    },
                    gloss: {
                        audio: new se.Howl({
                            src: te
                        })
                    },
                    restart: {
                        audio: new se.Howl({
                            src: ne
                        })
                    }
                },
                ie = n(3990),
                ae = n(1468),
                oe = n(2669),
                ce = n(5331),
                ue = n(4423),
                le = n(1684),
                de = n(2659),
                fe = n(7454),
                pe = function(e) {
                    return e[e.cellHide = 0] = "cellHide", e[e.cellShow = 1] = "cellShow", e[e.cellTap = 2] = "cellTap", e[e.resultShow = 3] = "resultShow", e[e.resultHide = 4] = "resultHide", e
                }({}),
                ve = function(e, t) {
                    var n = (0, s.useState)((function() {
                            return 1 === e ? (0, L.jsx)(U.b2, {
                                id: t
                            }) : (0, L.jsx)(U.nH, {
                                id: t
                            })
                        })),
                        r = (0, a.Z)(n, 2),
                        i = r[0],
                        o = r[1],
                        c = (0, s.useCallback)((function() {
                            return i
                        }), [i]);
                    return {
                        cell: (0, s.useMemo)((function() {
                            return {
                                play: function(n, s) {
                                    o(function() {
                                        switch (n) {
                                            case pe.cellHide:
                                                return function(e, t) {
                                                    return 1 === e ? (0, L.jsx)(U.cU, {
                                                        id: t
                                                    }) : (0, L.jsx)(U.nW, {
                                                        id: t
                                                    })
                                                }(e, t);
                                            case pe.cellShow:
                                                return function(e, t) {
                                                    return 1 === e ? (0, L.jsx)(U.b2, {
                                                        id: t
                                                    }) : (0, L.jsx)(U.nH, {
                                                        id: t
                                                    })
                                                }(e, t);
                                            case pe.cellTap:
                                                return function(e, t) {
                                                    return 1 === e ? (0, L.jsx)(U.qx, {
                                                        id: t
                                                    }) : (0, L.jsx)(U.Ic, {
                                                        id: t
                                                    })
                                                }(e, t);
                                            case pe.resultHide:
                                                return function(e) {
                                                    return 1 === e ? (0, L.jsx)(U.k7, {}) : (0, L.jsx)(U.iw, {})
                                                }(s);
                                            case pe.resultShow:
                                                return function(e) {
                                                    return 1 === e ? (0, L.jsx)(U.yu, {}) : (0, L.jsx)(U.CA, {})
                                                }(s);
                                            default:
                                                return (0, L.jsx)("div", {})
                                        }
                                    }())
                                }
                            }
                        }), [e, t]),
                        CellComponent: c
                    }
                },
                he = n(8182),
                me = function(e) {
                    var t = e.category,
                        n = e.idx,
                        r = e.isAllClosed,
                        i = e.onClick,
                        o = e.disabled,
                        c = (0, s.useState)(!0),
                        u = (0, a.Z)(c, 2),
                        l = u[0],
                        d = u[1],
                        f = ve(n % 2 === 0 ? 2 : 1, n),
                        p = f.cell,
                        v = f.CellComponent;
                    return (0, s.useEffect)((function() {
                        void 0 !== t && r && (d((function(e) {
                            return !e
                        })), p.play(pe.cellTap), setTimeout((function() {
                            return p.play(pe.cellHide)
                        }), 300), setTimeout((function() {
                            return p.play(pe.resultShow, t)
                        }), 500))
                    }), [t]), (0, s.useEffect)((function() {
                        r ? void 0 === t || l || (d((function(e) {
                            return !e
                        })), p.play(pe.resultHide, t), setTimeout((function() {
                            return p.play(pe.cellShow)
                        }), 1e3)) : l && (d((function(e) {
                            return !e
                        })), p.play(pe.cellTap), setTimeout((function() {
                            return p.play(pe.cellHide)
                        }), 600), setTimeout((function() {
                            return p.play(pe.resultShow, t)
                        }), 1e3)), void 0 !== t || l || (d((function(e) {
                            return !e
                        })), p.play(pe.resultHide, 0), setTimeout((function() {
                            return p.play(pe.cellShow)
                        }), 1e3))
                    }), [r, t]), (0, L.jsx)("button", {
                        id: "cellButton",
                        type: "button",
                        disabled: !l || o,
                        className: (0, he.Z)("cell", l && !o && "cell-hovered"),
                        onClick: function() {
                            i()
                        },
                        children: (0, L.jsx)(v, {})
                    })
                },
                xe = function(e, t) {
                    var n;
                    return e && e.forEach((function(e) {
                        JSON.stringify(t) === JSON.stringify(e.value) && (n = e.category)
                    })), n
                },
                Ze = function(e) {
                    for (var t = [], n = 0; n < 5; n += 1)
                        for (var s = 0; s < 5; s += 1) t.push({
                            value: {
                                col: s,
                                row: n
                            },
                            category: xe(e, {
                                col: s,
                                row: n
                            })
                        });
                    return t
                },
                Se = function(e) {
                    var t = e.showOpenBoardTime,
                        n = e.isLoading,
                        o = e.setIsLoading,
                        c = P(),
                        u = c.state,
                        l = c.computed,
                        d = c.controller,
                        f = (0, s.useState)(!0),
                        p = (0, a.Z)(f, 2),
                        v = p[0],
                        h = p[1],
                        m = (0, s.useState)([]),
                        x = (0, a.Z)(m, 2),
                        Z = x[0],
                        S = x[1],
                        b = !l.isSessionActive || n,
                        w = (0, s.useRef)(0),
                        y = (0, I.$)().t;
                    (0, s.useEffect)((function() {
                        h(!0), S(Ze()), w.current = 0
                    }), [u.session.id]);
                    var g = function() {
                        S(Z.map((function(e) {
                            return e.category = xe(u.session.gameData.userChoices, e.value), e
                        })))
                    };
                    (0, s.useEffect)((function() {
                        w.current < u.session.lastRound && (g(), w.current = u.session.lastRound)
                    }), [u.session.lastRound]), (0, s.useEffect)((function() {
                        if (l.isSessionFinished) return S(Ze(u.session.gameData.expectedChoices)), h(!1), void setTimeout((function() {
                            h(!0), re.restart.audio.play()
                        }), t);
                        var e;
                        l.isSessionActive && (setTimeout((function() {
                            ce.ZP.set(".cells-board-mask", {
                                display: "none",
                                zIndex: "0"
                            })
                        }), 700), (null === (e = u.session.gameData.userChoices) || void 0 === e ? void 0 : e.length) > 0 && g(), o(!1))
                    }), [u.session.state]);
                    var k = (0, s.useCallback)((function(e, t) {
                            var n = t.userChoices[t.userChoices.length - 1];
                            S(Z.map((function(t) {
                                var s, r, i, a;
                                return (null === (s = t.value) || void 0 === s ? void 0 : s.col) === (null === (r = e.value) || void 0 === r ? void 0 : r.col) && (null === (i = t.value) || void 0 === i ? void 0 : i.row) === (null === (a = e.value) || void 0 === a ? void 0 : a.row) && (t.category = n.category), t
                            }))), 1 === n.category ? setTimeout((function() {
                                return re.lose.audio.play()
                            }), 300) : (re.step.audio.play(), setTimeout((function() {
                                return o(!1)
                            }), 100))
                        }), [Z]),
                        C = (0, s.useCallback)(function() {
                            var e = (0, i.Z)((0, r.Z)().mark((function e(t) {
                                var n;
                                return (0, r.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o(!0), !t.value) {
                                                e.next = 16;
                                                break
                                            }
                                            return re.click.audio.play(), e.prev = 3, e.next = 6, null === d || void 0 === d ? void 0 : d.finishActiveRound(t.value);
                                        case 6:
                                            (n = e.sent) && (k(t, n), w.current += 1, null === d || void 0 === d || d.fetchSessionData(u.session.id)), e.next = 16;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(3), e.t0.type !== ue.V[ue.V.sessionExpired] && e.t0.type !== ue.V[ue.V.changedCurrency] && e.t0.message !== de.FG || (null === d || void 0 === d || d.clearSession(), null === d || void 0 === d || d.fetchUserData(), ce.ZP.set(".cells-board-mask", {
                                                display: "block",
                                                zIndex: "2"
                                            }), e.t0.message === de.FG && fe.R0.serverError()), "Round with this column and row already exists" === e.t0.message && (null === d || void 0 === d || d.fetchSessionData(u.session.id)), (0, F.d)(e.t0, y), o(!1);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 10]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [u.session.id, Z]);
                    return (0, L.jsx)("div", {
                        className: "flex justify-center align-middle",
                        children: (0, L.jsx)("div", {
                            className: "cells-board-wrapper",
                            children: (0, L.jsxs)("div", {
                                className: "cells-board",
                                children: [Z.map((function(e, t) {
                                    var n, s;
                                    return (0, L.jsx)(me, {
                                        category: e.category,
                                        onClick: (0, i.Z)((0, r.Z)().mark((function t() {
                                            return (0, r.Z)().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", C(e));
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))),
                                        idx: t,
                                        isAllClosed: v,
                                        disabled: b
                                    }, e.value && "".concat(null === (n = e.value) || void 0 === n ? void 0 : n.col).concat(null === (s = e.value) || void 0 === s ? void 0 : s.row))
                                })), (0, L.jsx)("div", {
                                    className: "cells-board-mask",
                                    children: (0, L.jsx)("div", {
                                        className: "animated-highlight"
                                    })
                                })]
                            })
                        })
                    })
                },
                be = function(e) {
                    var t = e.show,
                        n = e.amount,
                        r = e.onClick,
                        i = (0, I.$)().t,
                        a = P().computed,
                        o = (0, s.useRef)(n);
                    return (0, s.useEffect)((function() {
                        n && a.isFullWin && (o.current = n)
                    }), [a.isFullWin]), (0, L.jsx)("div", {
                        className: (0, he.Z)("modal", t && "active"),
                        children: (0, L.jsxs)("div", {
                            className: "mines-win-popup",
                            id: "winJackpotPopup",
                            children: [(0, L.jsx)("div", {
                                className: "win-amount",
                                children: (0, L.jsx)("span", {
                                    id: "winJackpotAmount",
                                    children: o.current
                                })
                            }), (0, L.jsx)(J.J, {
                                id: "takeWinJackpotButton",
                                text: i("TakeMoney"),
                                clickHandler: r,
                                buttonColor: "orange",
                                classes: "win-popup-btn",
                                size: "big"
                            })]
                        })
                    })
                },
                we = n(6315),
                ye = n(4619),
                ge = function() {
                    var e, t, n, o, c, u, l = P(),
                        f = l.state,
                        p = l.computed,
                        v = l.controller,
                        h = (0, s.useState)(!1),
                        m = (0, a.Z)(h, 2),
                        x = m[0],
                        Z = m[1],
                        S = (0, s.useState)(0),
                        b = (0, a.Z)(S, 2),
                        w = b[0],
                        y = b[1],
                        g = (0, s.useState)(0),
                        k = (0, a.Z)(g, 2),
                        C = k[0],
                        N = k[1],
                        T = (0, s.useState)(!1),
                        E = (0, a.Z)(T, 2),
                        _ = E[0],
                        A = E[1],
                        D = (0, I.$)().t,
                        B = (0, s.useState)(!0),
                        H = (0, a.Z)(B, 2),
                        M = H[0],
                        R = H[1],
                        G = null !== (e = null === (t = f.settings.bets[f.user.currency]) || void 0 === t ? void 0 : t.quickBets) && void 0 !== e ? e : {
                            min: 10,
                            max: 100
                        },
                        W = function() {
                            var e = (0, i.Z)((0, r.Z)().mark((function e() {
                                return (0, r.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return Z(!0), e.next = 3, null === v || void 0 === v ? void 0 : v.initGame();
                                        case 3:
                                            return e.next = 5, null === v || void 0 === v ? void 0 : v.checkActiveSession();
                                        case 5:
                                            Z(!1), R(!1);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, s.useEffect)((function() {
                        W()
                    }), []), (0, s.useEffect)((function() {
                        var e;
                        N((0, ie.xC)(null !== (e = f.settings.presets) && void 0 !== e ? e : []))
                    }), [f.settings.presets]);
                    var V = (0, s.useCallback)((0, i.Z)((0, r.Z)().mark((function e() {
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Z(!0), re.click.audio.play(), e.prev = 2, e.next = 5, null === v || void 0 === v ? void 0 : v.startSession(w, C);
                                    case 5:
                                        Z(!1), re.gloss.audio.play(), ce.ZP.fromTo(".animated-highlight", {
                                            x: -170,
                                            y: 50
                                        }, {
                                            x: 550,
                                            y: 150,
                                            duration: .7
                                        }), setTimeout((function() {
                                            ce.ZP.set(".cells-board-mask", {
                                                display: "none",
                                                zIndex: "0"
                                            })
                                        }), 700), e.next = 21;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(2), (0, F.d)(e.t0, D), "Active session already exists" !== e.t0.message) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 17, null === v || void 0 === v ? void 0 : v.checkActiveSession();
                                    case 17:
                                        Z(!1), e.next = 21;
                                        break;
                                    case 20:
                                        Z(!1);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 11]
                            ])
                        }))), [C, w]),
                        O = (0, s.useCallback)((0, i.Z)((0, r.Z)().mark((function e() {
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Z(!0), re.click.audio.play(), e.prev = 2, e.next = 5, null === v || void 0 === v ? void 0 : v.finishSession();
                                    case 5:
                                        re.cashout.audio.play(), ae.C.Vp.winRound(f.session.availableCashout, d.F[f.session.currency], f.session.coefficient), null === v || void 0 === v || v.fetchUserData(), e.next = 15;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(2), e.t0.type !== ue.V[ue.V.sessionExpired] && "Invalid session state for cashout" !== e.t0.message || (null === v || void 0 === v || v.clearSession(), null === v || void 0 === v || v.fetchUserData(), ce.ZP.set(".cells-board-mask", {
                                            display: "block",
                                            zIndex: "2"
                                        })), (0, F.d)(e.t0, D), Z(!1);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 10]
                            ])
                        }))), [f.session.availableCashout, f.session.coefficient]);
                    (0, s.useEffect)((function() {
                        p.isFullWin && (Z(!0), null === v || void 0 === v || v.finishSession(), setTimeout((function() {
                            return A(!0)
                        }), 2700))
                    }), [p.isFullWin]), (0, s.useEffect)((function() {
                        p.isSessionFinished && (Z(!0), setTimeout((function() {
                            null === v || void 0 === v || v.clearSession(), null === v || void 0 === v || v.fetchHistory(), Z(!1), ce.ZP.set(".cells-board-mask", {
                                display: "block",
                                zIndex: "2"
                            })
                        }), 4e3))
                    }), [p.isSessionFinished]);
                    var z = (0, oe.D8)({
                            actions: {
                                onPlayButtonClick: function() {
                                    V()
                                },
                                onCashoutButtonClick: function() {
                                    O()
                                }
                            },
                            balance: +f.user.balance,
                            bet: {
                                amount: p.isSessionActive ? f.session.bet : w,
                                onChangeAmount: y
                            },
                            betSettings: {
                                defaultBet: null !== (n = null === (o = f.settings.bets[f.user.currency]) || void 0 === o ? void 0 : o.defaultBet) && void 0 !== n ? n : 0,
                                currency: d.F[f.user.currency],
                                maxBet: +G.max,
                                minBet: +G.min
                            },
                            session: {
                                state: f.session.state,
                                availableCashout: f.session.availableCashout,
                                currency: d.F[f.session.currency]
                            },
                            roundType: oe.V0.multiple,
                            isLoading: x,
                            betAmountIsValid: !(0, we.qb)(w)
                        }),
                        J = {
                            presets: {
                                currentPreset: C,
                                onChangePreset: N,
                                presetsList: null !== (c = f.settings.presets) && void 0 !== c ? c : []
                            },
                            amount: {
                                showMaxAmount: p.isSessionNotStarted || p.isFullWin,
                                bet: w
                            },
                            rates: null !== (u = f.settings.rates) && void 0 !== u ? u : [],
                            icon: (0, L.jsx)(U.me, {
                                width: 32,
                                height: 32,
                                id: "status"
                            }),
                            label: D("Traps"),
                            coefficients: f.session.gameData.coefficients,
                            activeItemIndex: f.session.lastRound,
                            showLastStep: p.isLastStep || p.isFullWin,
                            currency: d.F[f.user.currency],
                            isSessionNotStarted: p.isSessionNotStarted,
                            onClickSound: function() {
                                re.click.audio.play()
                            }
                        };
                    return (0, L.jsxs)(L.Fragment, {
                        children: [M && (0, L.jsx)(ye.Z, {}), (0, L.jsx)(Se, {
                            showOpenBoardTime: 4e3,
                            isLoading: x,
                            setIsLoading: Z
                        }), (0, L.jsxs)("div", {
                            className: "flex flex-col items-center gap-y-3 mx-1.5",
                            children: [(0, L.jsx)(le.A, (0, j.Z)({}, J)), (0, L.jsx)(oe.f7, (0, j.Z)({}, z))]
                        }), (0, L.jsx)(be, {
                            show: _,
                            amount: "".concat(f.session.availableCashout, " ").concat(d.F[f.user.currency]),
                            onClick: function() {
                                re.click.audio.play(), A(!1), null === v || void 0 === v || v.fetchUserData(), re.cashout.audio.play(), Z(!1)
                            }
                        })]
                    })
                },
                ke = n(8665),
                Ce = function() {
                    var e, t = P(),
                        n = t.state,
                        p = t.dispatch,
                        v = (0, s.useState)(!1),
                        h = (0, a.Z)(v, 2),
                        m = h[0],
                        x = h[1],
                        Z = (0, I.$)().t,
                        S = (0, s.useCallback)((0, i.Z)((0, r.Z)().mark((function e() {
                            var t;
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, y.getSessions({
                                            limit: 30,
                                            offset: 0
                                        }, "Inactive");
                                    case 3:
                                        t = e.sent, p(f.N.updateSessions(t)), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), T().error(e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [p]);
                    return (0, s.useEffect)((function() {
                        var e;
                        null !== (e = n.user) && void 0 !== e && e.isLoaded && S()
                    }), [S, null === (e = n.user) || void 0 === e ? void 0 : e.isLoaded]), (0, s.useEffect)((function() {
                        return (0, ie.MW)("mines", (function() {
                            return x(!0)
                        }))
                    }), []), (0, L.jsx)("section", {
                        className: "game-config",
                        children: (0, L.jsxs)("div", {
                            className: "app-wrapper laptop:flex-col",
                            children: [(0, L.jsxs)("div", {
                                className: "game__content block laptop:px-0 relative mines__bg",
                                children: [(0, L.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, L.jsx)(ke.Y, {
                                        converter: function(e) {
                                            return (0, $.Z)(e, Z, (function() {
                                                return x(!1)
                                            }))
                                        },
                                        modalSlides: q,
                                        show: m,
                                        clickHideModal: function() {
                                            return x(!1)
                                        }
                                    }), (0, L.jsx)(l.z, {
                                        toggleModalAboutGame: function() {
                                            re.click.audio.play(), x((function(e) {
                                                return !e
                                            }))
                                        },
                                        isGameWithMusic: !1,
                                        balance: "".concat(n.user.balance, " ").concat(d.F[n.user.currency])
                                    })]
                                }), (0, L.jsx)(ge, {}), (0, L.jsx)("div", {
                                    className: "mines-footer__wrapper",
                                    children: (0, L.jsx)("div", {
                                        className: "mines-footer",
                                        children: (0, L.jsx)("img", {
                                            src: Y,
                                            alt: "",
                                            className: "w-full h-auto"
                                        })
                                    })
                                })]
                            }), (0, L.jsx)("div", {
                                className: "game-right-sidebar mobile:min-w-0 mobile:w-full",
                                children: (0, L.jsx)(o.A, {
                                    logoText: "CaveMines",
                                    logoIcon: (0, L.jsx)(U.me, {
                                        id: "history"
                                    }),
                                    myHistoryContent: (0, L.jsx)(c.G, {
                                        list: n.sessions.data,
                                        gameApi: y
                                    }),
                                    liveBetsContent: (0, L.jsx)(u.O, {
                                        list: n.liveBets.list
                                    })
                                })
                            })]
                        })
                    })
                },
                je = function() {
                    return (0, L.jsx)(R, {
                        children: (0, L.jsx)("div", {
                            className: "App",
                            children: (0, L.jsx)(Ce, {})
                        })
                    })
                },
                Ne = je
        }
    }
]);
//# sourceMappingURL=5330.c1680555.chunk.js.map