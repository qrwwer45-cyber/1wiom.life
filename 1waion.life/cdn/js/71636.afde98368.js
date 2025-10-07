"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [71636], {
        186031: (a, e, l) => {
            l.d(e, {
                Z: () => f
            });
            var s = l(166252),
                n = l(3577),
                t = l(602262),
                r = l(695139);
            const o = ["src", "allow", "scrolling"],
                i = ["innerHTML"],
                m = (0, s.aZ)({
                    __name: "CasinoGameFrame",
                    props: {
                        launchData: {},
                        iframeAllowProperty: {},
                        disabled: {
                            type: Boolean
                        },
                        scrollable: {
                            type: Boolean
                        },
                        large: {
                            type: Boolean
                        }
                    },
                    setup(a, {
                        expose: e
                    }) {
                        const l = a,
                            m = (0, t.iH)(null),
                            u = (0, t.iH)(null);
                        return (0, r.zW)({
                            gameLaunchData: (0, t.Vh)((() => l.launchData)),
                            gameHtmlRef: m,
                            gameFrameRef: u
                        }), e({
                            gameHtmlRef: m,
                            gameFrameRef: u
                        }), (a, e) => a.launchData.link ? ((0, s.wg)(), (0, s.iD)("iframe", {
                            key: 0,
                            ref_key: "gameFrameRef",
                            ref: u,
                            class: (0, n.C_)([a.$style.root, a.disabled && a.$style.disabled]),
                            src: a.launchData.link,
                            allow: a.iframeAllowProperty,
                            scrolling: a.scrollable ? "yes" : void 0
                        }, null, 10, o)) : a.launchData.html ? ((0, s.wg)(), (0, s.iD)("div", {
                            key: 1,
                            ref_key: "gameHtmlRef",
                            ref: m,
                            class: (0, n.C_)([a.$style.root, a.disabled && a.$style.disabled, a.scrollable && a.$style.scroll, a.large && a.$style.large]),
                            innerHTML: a.launchData.html
                        }, null, 10, i)) : (0, s.kq)("", !0)
                    }
                }),
                u = {
                    root: "CasinoGameFrame_root_V6yFR",
                    disabled: "CasinoGameFrame_disabled_LP2yz",
                    scroll: "CasinoGameFrame_scroll_CR4uy",
                    large: "CasinoGameFrame_large_Zc_9H"
                };
            var c = l(348118);
            const d = {};
            d["$style"] = u;
            const g = (0, c.Z)(m, [
                    ["__cssModules", d]
                ]),
                f = g
        },
        71636: (a, e, l) => {
            l.r(e), l.d(e, {
                default: () => _
            });
            var s = l(166252),
                n = l(602262),
                t = l(3577),
                r = l(322201),
                o = l(280894),
                i = l(186031),
                m = l(432519),
                u = l(695139),
                c = l(878417),
                d = l(678316),
                g = l(894710);
            const f = (0, s.aZ)({
                    __name: "CasinoOneWinGame",
                    emits: ["loadingStatusChange"],
                    setup(a, {
                        emit: e
                    }) {
                        const l = e,
                            f = (0, o.oR)(),
                            h = (0, c.L)(),
                            _ = (0, r.yj)(),
                            y = (0, n.Vh)((() => Boolean(f.getters.balanceCurrentEmpty))),
                            {
                                gameUrl: p,
                                gameData: C,
                                isLoading: b
                            } = (0, u.wU)({
                                gameId: (0, n.Vh)((() => _.params.id)),
                                promocode: (0, n.Vh)((() => (0, d.G$)(_)))
                            });
                        (0, u.NV)(C);
                        const R = (0, s.AE)("frameRef");
                        return (0, u.CL)({
                            container: (0, n.Vh)((() => {
                                var a, e, l, s;
                                return null != (s = null != (l = null == (a = R.value) ? void 0 : a.gameHtmlRef) ? l : null == (e = R.value) ? void 0 : e.gameFrameRef) ? s : null
                            })),
                            isBalanceEmpty: y,
                            isAuthed: () => h.isAuthed,
                            isAviatorHash: () => _.hash === m.RW,
                            isGameLoaded: () => void 0 !== p.value && !b.value,
                            modalRegisterConstant: g.bn,
                            modalDepositConstant: g.bZ
                        }), (0, s.YP)(b, (a => {
                            l("loadingStatusChange", a)
                        }), {
                            immediate: !0,
                            flush: "post"
                        }), (a, e) => (0, n.SU)(p) ? ((0, s.wg)(), (0, s.j4)(i.Z, {
                            key: 0,
                            ref_key: "frameRef",
                            ref: R,
                            class: (0, t.C_)(a.$attrs.class),
                            "launch-data": (0, n.SU)(p)
                        }, null, 8, ["class", "launch-data"])) : (0, s.kq)("", !0)
                    }
                }),
                h = f,
                _ = h
        }
    }
]);