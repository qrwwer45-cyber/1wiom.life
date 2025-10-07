"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [21148], {
        321148: (e, a, n) => {
            n.r(a), n.d(a, {
                default: () => k
            });
            var s = n(166252),
                i = n(602262),
                t = n(3577),
                o = n(322201),
                r = n(280894),
                l = n(432519),
                u = n(932256),
                c = n(695139),
                m = n(305653);
            const _ = {
                    id: "casino"
                },
                d = (0, s.aZ)({
                    __name: "Casino",
                    setup(e) {
                        const a = (0, c.OG)({
                                name: m.Z.HOME
                            }),
                            n = (0, r.oR)(),
                            d = (0, o.yj)(),
                            f = (0, c.Wv)((() => d.params.id), !1),
                            w = (0, i.iH)(!1),
                            k = (0, i.iH)(null);
                        return (0, c.TF)(k), (0, s.JJ)(l.ut, w), (e, o) => {
                            const r = (0, s.up)("RouterView");
                            return (0, s.wg)(), (0, s.iD)("article", _, [(0, i.SU)(a) && (0, i.SU)(f).showAsideNavigation ? ((0, s.wg)(), (0, s.iD)("aside", {
                                key: 0,
                                class: (0, t.C_)(["aside", (0, i.SU)(d).meta[(0, i.SU)(u.uFh)] && "no-scroll"])
                            }, [(0, s.Wm)(r, {
                                name: "navigation"
                            })], 2)) : (0, s.kq)("", !0), (0, i.SU)(a) ? ((0, s.wg)(), (0, s.iD)("main", {
                                key: 1,
                                ref_key: "root",
                                ref: k,
                                class: (0, t.C_)(["main", (0, i.SU)(n).getters.fullscreen && "allow-fullscreen"])
                            }, [(0, s.Wm)(r, {
                                name: "topPanel"
                            }), (0, s.Wm)(r, {
                                name: "default"
                            })], 2)) : (0, s.kq)("", !0)])
                        }
                    }
                });
            var f = n(348118);
            const w = (0, f.Z)(d, [
                    ["__scopeId", "data-v-3b0707f0"]
                ]),
                k = w
        }
    }
]);