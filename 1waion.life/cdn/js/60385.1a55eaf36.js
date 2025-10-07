"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [60385], {
        810979: (e, s, n) => {
            n.d(s, {
                Z: () => A
            });
            var o = n(166252),
                t = n(602262),
                a = n(322201),
                r = n(280894),
                l = n(3577),
                i = n(559166),
                u = n(432519),
                m = n(920346),
                p = n(262884),
                v = n(240380),
                c = n(677137);
            const _ = ["src"],
                d = !1,
                B = (0, o.aZ)({
                    __name: "BaseBonusFreespins",
                    props: {
                        promo: {},
                        mode: {
                            default: u.wN.BANNER
                        },
                        promoTransferWin: {
                            default: void 0
                        }
                    },
                    emits: ["cancel", "payout", "play", "expired"],
                    setup(e, {
                        emit: s
                    }) {
                        const n = Object.freeze({
                                PLAY: "play",
                                PROGRESS: "progress",
                                SUCCESS: "success",
                                COMPLETE: "complete"
                            }),
                            a = e,
                            r = s,
                            B = (0, m.Jr)("common.bonusFreespins"),
                            y = (0, t.Vh)((() => a.promo.games[0])),
                            g = (0, t.Vh)((() => {
                                var e, s;
                                return null != (s = null == (e = a.promo.win) ? void 0 : e.wageringPercent) ? s : 0
                            })),
                            S = (0, o.Fl)((() => a.promoTransferWin ? n.COMPLETE : a.promo.freespin ? n.PLAY : g.value >= 100 ? n.SUCCESS : n.PROGRESS)),
                            w = (0, p.Kq)(void 0, (() => {
                                var e, s;
                                return null != (s = null == (e = a.promo.win) ? void 0 : e.currency) ? s : "USD"
                            })),
                            C = (0, p.Kq)(void 0, (() => {
                                var e, s;
                                return null != (s = null == (e = a.promoTransferWin) ? void 0 : e.currency) ? s : "USD"
                            })),
                            f = (0, p.Ux)(),
                            h = (0, t.Vh)((() => {
                                var e, s, o, t;
                                return S.value === n.COMPLETE ? C.value.format(null != (s = null == (e = a.promoTransferWin) ? void 0 : e.amount) ? s : 0) : w.value.format(null != (t = null == (o = a.promo.win) ? void 0 : o.amount) ? t : 0)
                            })),
                            P = (0, o.Fl)((() => S.value === n.PLAY ? "Freespins" : S.value === n.COMPLETE ? `${B.titleComplete} 🎉` : B.titleDefault)),
                            F = (0, m.mN)(),
                            b = (0, o.Fl)((() => {
                                var e, s, o, t;
                                return S.value === n.PLAY ? F.format(B.subTitlePlay, f.value.format(null != (s = null == (e = a.promo.freespin) ? void 0 : e.freeSpinCount) ? s : 0)) : S.value === n.COMPLETE ? F.format(B.subTitleComplete, C.value.format(null != (t = null == (o = a.promoTransferWin) ? void 0 : o.amount) ? t : 0)) : null
                            })),
                            k = Object.fromEntries(Object.values(n).map((e => [e, `status${(0,v.Z)(e)}`]))),
                            E = (0, o.Fl)((() => k[S.value])),
                            D = Object.fromEntries(Object.values(u.wN).map((e => [e, `mode${(0,v.Z)(e)}`]))),
                            A = (0, o.Fl)((() => D[a.mode])),
                            U = (0, t.iH)([]),
                            $ = (0, t.iH)(),
                            T = () => {
                                clearInterval($.value), $.value = void 0
                            },
                            q = () => {
                                var e, s, o, t;
                                const l = S.value === n.PROGRESS;
                                if (l && !(null == (e = a.promo.win) ? void 0 : e.endsAt)) return void(U.value = []);
                                if (S.value === n.PLAY && !(null == (s = a.promo.freespin) ? void 0 : s.endsAt)) return void(U.value = []);
                                const i = l ? null == (o = a.promo.win) ? void 0 : o.endsAt : null == (t = a.promo.freespin) ? void 0 : t.endsAt;
                                if (i) {
                                    const e = new Date(i);
                                    if (e < new Date) return U.value = [], T(), void r("expired");
                                    const {
                                        hours: s,
                                        minutes: n,
                                        seconds: o
                                    } = (0, c.EE)(e, !1);
                                    U.value = [s, n, o]
                                }
                            },
                            I = () => {
                                $.value || (q(), $.value = setInterval(q, 1e3))
                            };
                        return (0, o.YP)(S, (e => {
                            e !== n.PROGRESS && e !== n.PLAY ? T() : I()
                        }), {
                            immediate: !0
                        }), (0, o.Jd)((() => {
                            clearInterval($.value)
                        })), (e, s) => {
                            var a, u;
                            return (0, o.wg)(), (0, o.iD)("div", {
                                class: (0, l.C_)([e.$style.root, E.value && e.$style[E.value], A.value && e.$style[A.value]]),
                                style: (0, l.j5)({
                                    "--bonus-free-spins-progress": g.value
                                })
                            }, [S.value === (0, t.SU)(n).PROGRESS ? ((0, o.wg)(), (0, o.iD)("button", {
                                key: 0,
                                class: (0, l.C_)(e.$style.cancel),
                                type: "button",
                                onClick: s[0] || (s[0] = e => r("cancel"))
                            }, [(0, o.Wm)(i.Z, {
                                icon: "close"
                            })], 2)) : (0, o.kq)("", !0), d ? ((0, o.wg)(), (0, o.iD)("button", {
                                key: 1,
                                class: (0, l.C_)(e.$style.question),
                                type: "button"
                            }, [(0, o.Wm)(i.Z, {
                                icon: "question"
                            })], 2)) : (0, o.kq)("", !0), (0, o._)("div", {
                                class: (0, l.C_)(e.$style.title)
                            }, [(0, o.Uk)((0, l.zw)(P.value) + " ", 1), d ? ((0, o.wg)(), (0, o.iD)("button", {
                                key: 0,
                                class: (0, l.C_)(e.$style.questionInTitle),
                                type: "button"
                            }, [(0, o.Wm)(i.Z, {
                                icon: "question"
                            })], 2)) : (0, o.kq)("", !0)], 2), b.value ? ((0, o.wg)(), (0, o.iD)("div", {
                                key: 2,
                                class: (0, l.C_)(e.$style.subTitle)
                            }, (0, l.zw)(b.value), 3)) : (0, o.kq)("", !0), S.value !== (0, t.SU)(n).PLAY ? ((0, o.wg)(), (0, o.iD)("div", {
                                key: 3,
                                class: (0, l.C_)(e.$style.amount)
                            }, [(0, o.Wm)(i.Z, {
                                class: (0, l.C_)(e.$style.amountIcon),
                                icon: "shine"
                            }, null, 8, ["class"]), (0, o.Uk)(" " + (0, l.zw)(h.value), 1)], 2)) : ((0, o.wg)(), (0, o.iD)("div", {
                                key: 4,
                                class: (0, l.C_)(e.$style.game)
                            }, [(0, o._)("div", {
                                class: (0, l.C_)(e.$style.gameImgWrapper)
                            }, [(0, o.Wm)(i.Z, {
                                class: (0, l.C_)(e.$style.gameIcon),
                                icon: "shine"
                            }, null, 8, ["class"]), (null == (a = y.value) ? void 0 : a.imageUrl) ? ((0, o.wg)(), (0, o.iD)("img", {
                                key: 0,
                                class: (0, l.C_)(e.$style.gameImg),
                                src: y.value.imageUrl
                            }, null, 10, _)) : (0, o.kq)("", !0)], 2)], 2)), S.value === (0, t.SU)(n).PROGRESS || S.value === (0, t.SU)(n).SUCCESS ? ((0, o.wg)(), (0, o.iD)("div", {
                                key: 5,
                                class: (0, l.C_)(e.$style.progressBar)
                            }, null, 2)) : (0, o.kq)("", !0), S.value === (0, t.SU)(n).PROGRESS && (null == (u = e.promo.win) ? void 0 : u.wagerAmountTotal) ? ((0, o.wg)(), (0, o.iD)("div", {
                                key: 6,
                                class: (0, l.C_)(e.$style.progressAmounts)
                            }, [(0, o._)("div", {
                                class: (0, l.C_)(e.$style.progressAmount)
                            }, (0, l.zw)((0, t.SU)(w).format(0)), 3), (0, o._)("div", {
                                class: (0, l.C_)(e.$style.progressAmount)
                            }, (0, l.zw)((0, t.SU)(w).format(e.promo.win.wagerAmountTotal)), 3)], 2)) : (0, o.kq)("", !0), S.value === (0, t.SU)(n).PROGRESS || S.value === (0, t.SU)(n).PLAY ? ((0, o.wg)(), (0, o.iD)("div", {
                                key: 7,
                                class: (0, l.C_)(e.$style.timerBlock)
                            }, [(0, o._)("div", {
                                class: (0, l.C_)(e.$style.timerTitle)
                            }, (0, l.zw)((0, t.SU)(B).bonusAvailable), 3), (0, o._)("div", {
                                class: (0, l.C_)(e.$style.timer)
                            }, [((0, o.wg)(!0), (0, o.iD)(o.HY, null, (0, o.Ko)(U.value, ((s, n) => ((0, o.wg)(), (0, o.iD)(o.HY, {
                                key: n
                            }, [0 !== n ? ((0, o.wg)(), (0, o.iD)("span", {
                                key: 0,
                                class: (0, l.C_)(e.$style.timerSeparator)
                            }, " : ", 2)) : (0, o.kq)("", !0), (0, o._)("span", {
                                class: (0, l.C_)(e.$style.timerItem)
                            }, (0, l.zw)(s), 3)], 64)))), 128))], 2)], 2)) : (0, o.kq)("", !0), S.value === (0, t.SU)(n).SUCCESS ? ((0, o.wg)(), (0, o.iD)("button", {
                                key: 8,
                                class: (0, l.C_)(e.$style.buttonWhite),
                                type: "button",
                                onClick: s[1] || (s[1] = e => r("payout"))
                            }, (0, l.zw)((0, t.SU)(B).btnGetBonus), 3)) : (0, o.kq)("", !0), S.value === (0, t.SU)(n).COMPLETE ? ((0, o.wg)(), (0, o.iD)("button", {
                                key: 9,
                                class: (0, l.C_)(e.$style.buttonTransition),
                                type: "button",
                                onClick: s[2] || (s[2] = e => r("cancel"))
                            }, (0, l.zw)((0, t.SU)(B).btnClose), 3)) : (0, o.kq)("", !0), S.value === (0, t.SU)(n).PLAY ? ((0, o.wg)(), (0, o.iD)("button", {
                                key: 10,
                                class: (0, l.C_)(e.$style.buttonWhite),
                                type: "button",
                                onClick: s[3] || (s[3] = e => r("play"))
                            }, (0, l.zw)((0, t.SU)(B).btnStartPlay), 3)) : (0, o.kq)("", !0)], 6)
                        }
                    }
                }),
                y = {
                    root: "BaseBonusFreespins_root_EuXbZ",
                    statusPlay: "BaseBonusFreespins_statusPlay_JB6Dq",
                    modeWide: "BaseBonusFreespins_modeWide_voVMb",
                    modeMobile: "BaseBonusFreespins_modeMobile_BmFKy",
                    statusComplete: "BaseBonusFreespins_statusComplete_dwn1D",
                    cancel: "BaseBonusFreespins_cancel_VuajB",
                    question: "BaseBonusFreespins_question_XE56d",
                    questionInTitle: "BaseBonusFreespins_questionInTitle_cVDFK",
                    statusProgress: "BaseBonusFreespins_statusProgress_mHmnQ",
                    statusSuccess: "BaseBonusFreespins_statusSuccess_nu2nN",
                    title: "BaseBonusFreespins_title_movd_",
                    subTitle: "BaseBonusFreespins_subTitle_FgHWI",
                    modeBanner: "BaseBonusFreespins_modeBanner_wp7yi",
                    amount: "BaseBonusFreespins_amount_RUpQz",
                    game: "BaseBonusFreespins_game_DQTiQ",
                    gameImg: "BaseBonusFreespins_gameImg_zjN7C",
                    gameImgWrapper: "BaseBonusFreespins_gameImgWrapper_mWZRP",
                    gameIcon: "BaseBonusFreespins_gameIcon_UsDg7",
                    amountIcon: "BaseBonusFreespins_amountIcon_tMI45",
                    progressBar: "BaseBonusFreespins_progressBar_hZ3qf",
                    progressAmounts: "BaseBonusFreespins_progressAmounts_xoWw0",
                    progressAmount: "BaseBonusFreespins_progressAmount_S3zo9",
                    timerTitle: "BaseBonusFreespins_timerTitle_fpkzJ",
                    timerBlock: "BaseBonusFreespins_timerBlock_hJCeq",
                    timer: "BaseBonusFreespins_timer_YxtD9",
                    timerItem: "BaseBonusFreespins_timerItem_Lfful",
                    timerSeparator: "BaseBonusFreespins_timerSeparator_rzXbQ",
                    buttonWhite: "BaseBonusFreespins_buttonWhite_t61wA",
                    buttonTransition: "BaseBonusFreespins_buttonTransition_w7lkr"
                };
            var g = n(348118);
            const S = {};
            S["$style"] = y;
            const w = (0, g.Z)(B, [
                    ["__cssModules", S]
                ]),
                C = w;
            var f = n(523016),
                h = n(894710),
                P = n(305653),
                F = n(59394),
                b = n(173870),
                k = (e, s, n) => new Promise(((o, t) => {
                    var a = e => {
                            try {
                                l(n.next(e))
                            } catch (s) {
                                t(s)
                            }
                        },
                        r = e => {
                            try {
                                l(n.throw(e))
                            } catch (s) {
                                t(s)
                            }
                        },
                        l = e => e.done ? o(e.value) : Promise.resolve(e.value).then(a, r);
                    l((n = n.apply(e, s)).next())
                }));
            const E = (0, o.aZ)({
                    __name: "BonusFreespins",
                    props: {
                        mode: {
                            default: u.wN.BANNER
                        }
                    },
                    emits: ["hide", "redirect"],
                    setup(e, {
                        emit: s
                    }) {
                        const n = s,
                            l = (0, r.oR)(),
                            i = (0, m.dd)(),
                            u = (0, f.V)(),
                            p = (0, t.iH)(!1),
                            v = (0, t.Vh)((() => l.getters.isMobile)),
                            c = (0, o.Fl)((() => !!u.promoTransferWin)),
                            _ = () => {
                                p.value || (c.value ? n("hide") : i.openOver(v.value ? F.Rq : h.Rq, {
                                    listeners: {
                                        cancel: () => {
                                            u.promoCancelWin(), n("hide")
                                        }
                                    }
                                }))
                            },
                            d = (0, m.lm)(),
                            B = () => k(this, null, (function*() {
                                if (!p.value) {
                                    p.value = !0;
                                    try {
                                        yield u.promoPayoutWin()
                                    } catch (e) {
                                        d.error(e)
                                    } finally {
                                        p.value = !1
                                    }
                                }
                            })),
                            y = (0, a.tv)(),
                            g = (0, o.Fl)((() => v.value ? b.Z.CASINO_GAME : P.Z.CASINO_GAME)),
                            S = (0, o.Fl)((() => v.value ? b.Z.CASINO_PROMO : P.Z.CASINO_PROMO)),
                            w = () => {
                                var e, s;
                                n("redirect");
                                const o = null == (e = u.freespinData) ? void 0 : e.games;
                                1 === (null == o ? void 0 : o.length) && o[0] ? y.push({
                                    name: g.value,
                                    params: {
                                        id: o[0].id
                                    }
                                }) : (null == (s = u.freespinData) ? void 0 : s.freespin) && y.push({
                                    name: S.value,
                                    params: {
                                        id: u.freespinData.freespin.nominationId
                                    }
                                })
                            };
                        return (0, o.Jd)((() => {
                            c.value && u.clearPromo()
                        })), (e, s) => (0, t.SU)(u).freespinData ? ((0, o.wg)(), (0, o.j4)(C, {
                            key: 0,
                            promo: (0, t.SU)(u).freespinData,
                            "promo-transfer-win": (0, t.SU)(u).promoTransferWin,
                            mode: e.mode,
                            onCancel: _,
                            onPayout: B,
                            onPlay: w,
                            onExpired: s[0] || (s[0] = e => n("hide"))
                        }, null, 8, ["promo", "promo-transfer-win", "mode"])) : (0, o.kq)("", !0)
                    }
                }),
                D = E,
                A = D
        },
        541272: (e, s, n) => {
            n.d(s, {
                Z: () => r
            });
            var o = n(523016);
            const t = {
                    name: "BonusFreespinsHelper",
                    setup() {
                        const e = (0, o.V)();
                        return {
                            freespinStore: e
                        }
                    },
                    data: () => ({
                        hide: !1
                    }),
                    computed: {
                        showPromo() {
                            return !this.hide && this.freespinStore.showPromo
                        }
                    },
                    methods: {
                        hidePromo() {
                            this.hide = !0
                        }
                    },
                    render() {
                        return this.$slots.default({
                            hidePromo: this.hidePromo,
                            showPromo: this.showPromo,
                            class: this.$attrs.class
                        })
                    }
                },
                a = t,
                r = a
        }
    }
]);