(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [34627], {
        697532: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => _
            });
            var o = s(166252),
                l = s(3577),
                n = s(248625);
            const a = (0, o.aZ)({
                    __name: "CasinoGameHeader",
                    setup(e) {
                        return (e, t) => ((0, o.wg)(), (0, o.iD)("div", {
                            class: (0, l.C_)(e.$style.root)
                        }, [(0, o.Wm)(n.Z, {
                            class: (0, l.C_)(e.$style.logo)
                        }, null, 8, ["class"])], 2))
                    }
                }),
                i = {
                    root: "CasinoGameHeader_root_eseJk",
                    logo: "CasinoGameHeader_logo_Diyz3"
                };
            var u = s(348118);
            const r = {};
            r["$style"] = i;
            const c = (0, u.Z)(a, [
                    ["__cssModules", r]
                ]),
                _ = c
        },
        537597: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            var o = s(166252),
                l = s(3577);

            function n(e, t, s, n, a, i) {
                const u = (0, o.up)("VButton");
                return (0, o.wg)(), (0, o.iD)("div", {
                    class: (0, l.C_)([e.$style.root, e.$store.getters.isMobile && e.$style.mobile])
                }, [(0, o._)("div", {
                    class: (0, l.C_)(e.$style.text)
                }, [(0, o._)("div", {
                    class: (0, l.C_)(e.$style.title)
                }, (0, l.zw)(i.text.title), 3), (0, o._)("div", {
                    class: (0, l.C_)(e.$style.subTitle)
                }, (0, l.zw)(i.text.subTitle), 3)], 2), (0, o._)("div", {
                    class: (0, l.C_)(e.$style.buttons)
                }, [(0, o.Wm)(u, {
                    class: (0, l.C_)(e.$style.button),
                    theme: "blue",
                    onClick: t[0] || (t[0] = t => e.$emit("clickLogin"))
                }, {
                    default: (0, o.w5)((() => [(0, o.Uk)((0, l.zw)(i.text.loginButton), 1)])),
                    _: 1
                }, 8, ["class"]), (0, o.Wm)(u, {
                    class: (0, l.C_)(e.$style.button),
                    theme: "green",
                    onClick: t[1] || (t[1] = t => e.$emit("clickRegistration"))
                }, {
                    default: (0, o.w5)((() => [(0, o.Uk)((0, l.zw)(i.text.registrationButton), 1)])),
                    _: 1
                }, 8, ["class"])], 2)], 2)
            }
            var a = s(583582);
            const i = {
                    components: {
                        VButton: a.Z
                    },
                    emits: ["clickLogin", "clickRegistration"],
                    computed: {
                        text() {
                            return this.$store.getters.langCommon.casinoGameNotAllowed
                        }
                    }
                },
                u = {
                    root: "CasinoGameNotAllowed_root_y107F",
                    text: "CasinoGameNotAllowed_text_SV9_i",
                    title: "CasinoGameNotAllowed_title_YWPUT",
                    subTitle: "CasinoGameNotAllowed_subTitle_PQgpf",
                    button: "CasinoGameNotAllowed_button_U42gk",
                    buttons: "CasinoGameNotAllowed_buttons_VzQGk",
                    mobile: "CasinoGameNotAllowed_mobile_PL2LV"
                };
            var r = s(348118);
            const c = {};
            c["$style"] = u;
            const _ = (0, r.Z)(i, [
                    ["render", n],
                    ["__cssModules", c]
                ]),
                m = _
        },
        34627: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => f
            });
            var o = s(166252),
                l = s(3577),
                n = s(602262),
                a = s(322201),
                i = s(280894),
                u = s(697532),
                r = s(537597),
                c = s(559166),
                _ = s(575913),
                m = s(695139),
                d = s(137101),
                C = s(878417),
                g = s(891652),
                v = s(63619),
                y = s(894710);
            const w = (0, o.aZ)({
                    __name: "CasinoGame",
                    setup(e) {
                        const t = (0, i.oR)(),
                            w = (0, a.yj)(),
                            b = (0, n.Vh)((() => w.params.id)),
                            k = (0, n.Vh)((() => t.getters.fullscreen)),
                            G = e => {
                                t.commit("setFullscreen", e)
                            },
                            $ = () => {
                                var e, t, s;
                                if (G(!k.value), k.value) {
                                    const o = null != (s = w.meta.preset) ? s : null == (t = null == (e = v.g.value) ? void 0 : e.meta) ? void 0 : t.preset;
                                    g.L.handleCasinoEvent("fullscreen", {
                                        game_name: b.value
                                    }, {
                                        page: o
                                    })
                                }
                            };
                        (0, o.Jd)((() => {
                            G(!1)
                        }));
                        const f = (0, C.L)(),
                            h = (0, n.Vh)((() => f.isAuthed)),
                            {
                                isRedirectChecked: p,
                                isNotAllowed: L
                            } = (0, m.b)({
                                gameId: b,
                                isAuthed: h,
                                isMobile: !1
                            }),
                            {
                                isGameDataLoading: U,
                                setGameDataLoading: Z,
                                gameComponentName: x
                            } = (0, m.kl)({
                                gameId: b,
                                isEnabled: p
                            }),
                            N = {},
                            S = () => {
                                const e = x.value;
                                if (void 0 !== e) return void 0 === N[e] && (N[e] = (0, o.RC)((() => s(309179)(`./${e}.vue`)))), N[e]
                            },
                            A = (0, m.Wv)(b, !1),
                            z = (0, d.d)(),
                            D = () => {
                                z.open(y._w)
                            },
                            V = () => {
                                z.open(y.bn)
                            };
                        return (e, t) => ((0, o.wg)(), (0, o.iD)("div", {
                            class: (0, l.C_)(e.$style.root)
                        }, [!(0, n.SU)(p) || (0, n.SU)(U) && !(0, n.SU)(L) ? ((0, o.wg)(), (0, o.j4)(_.Z, {
                            key: 0,
                            class: (0, l.C_)(e.$style.spinner)
                        }, null, 8, ["class"])) : (0, o.kq)("", !0), (0, n.SU)(L) ? ((0, o.wg)(), (0, o.j4)(r.Z, {
                            key: 1,
                            onClickLogin: D,
                            onClickRegistration: V
                        })) : (0, n.SU)(p) ? ((0, o.wg)(), (0, o.iD)("div", {
                            key: 2,
                            class: (0, l.C_)([e.$style.box, k.value && e.$style.full])
                        }, [k.value ? ((0, o.wg)(), (0, o.j4)(u.Z, {
                            key: 0
                        })) : (0, o.kq)("", !0), (0, o._)("div", {
                            class: (0, l.C_)([e.$style.button, "right" === (0, n.SU)(A).fullScreenButtonPosition ? e.$style.right : e.$style.left, k.value && e.$style.full]),
                            onClick: $
                        }, [(0, o.Wm)(c.Z, {
                            icon: k.value ? "fullscreen-close" : "fullscreen-open"
                        }, null, 8, ["icon"])], 2), (0, n.SU)(x) ? ((0, o.wg)(), (0, o.j4)((0, o.LL)(S()), {
                            key: (0, n.SU)(x) + b.value,
                            class: (0, l.C_)(e.$style.game),
                            onLoadingStatusChange: (0, n.SU)(Z)
                        }, null, 40, ["class", "onLoadingStatusChange"])) : (0, o.kq)("", !0)], 2)) : (0, o.kq)("", !0)], 2))
                    }
                }),
                b = {
                    root: "CasinoGame_root_wFydh",
                    box: "CasinoGame_box_LpyCo",
                    full: "CasinoGame_full_wxacc",
                    game: "CasinoGame_game_JenRc",
                    button: "CasinoGame_button_zzqiZ",
                    left: "CasinoGame_left_GuzYw",
                    right: "CasinoGame_right_N2ePu",
                    spinner: "CasinoGame_spinner_JIrIF"
                };
            var k = s(348118);
            const G = {};
            G["$style"] = b;
            const $ = (0, k.Z)(w, [
                    ["__cssModules", G]
                ]),
                f = $
        },
        309179: (e, t, s) => {
            var o = {
                "./CasinoGameCommon.vue": [526233, 26233],
                "./CasinoGameLobby.vue": [237879, 32121],
                "./CasinoGamePromoted.vue": [206381, 6381],
                "./CasinoOneWinGame.vue": [71636, 71636]
            };

            function l(e) {
                if (!s.o(o, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = o[e],
                    l = t[0];
                return s.e(t[1]).then((() => s(l)))
            }
            l.keys = () => Object.keys(o), l.id = 309179, e.exports = l
        }
    }
]);