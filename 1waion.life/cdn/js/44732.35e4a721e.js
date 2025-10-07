(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [44732], {
        81950: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(927162);
            const s = (0, n.aZ)({
                    __name: "BadgeWarning",
                    props: {
                        variant: {
                            default: "warning"
                        }
                    },
                    setup(e) {
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("span", {
                            class: (0, o.C_)([e.$style.root, e.$style[`variant${(0,r.SU)(i.Z)(e.variant)}`]])
                        }, null, 2))
                    }
                }),
                l = {
                    root: "BadgeWarning_root_yCD83",
                    variantWarning: "BadgeWarning_variantWarning_adzWV",
                    variantError: "BadgeWarning_variantError_nc5XL"
                };
            var c = a(348118);
            const d = {};
            d["$style"] = l;
            const u = (0, c.Z)(s, [
                    ["__cssModules", d]
                ]),
                p = u
        },
        612: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => r
            });
            var n = a(171589);
            const o = n.Z,
                r = o
        },
        887228: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => J
            });
            var n = a(166252),
                o = a(749963),
                r = a(3577),
                i = a(602262),
                s = a(966309),
                l = a(93356),
                c = a(858509),
                d = a(322201),
                u = a(280894),
                p = a(559166),
                m = a(753154),
                _ = a(845919);
            const h = e => {
                const t = ["<br>", "<br/>", "<br />"];
                for (const a of t) e.replaceAll(a, "\n");
                return e
            };
            var g = a(983176),
                y = a(879669),
                v = a(494546);
            const b = (0, n.aZ)({
                    __name: "CdpPopupTypeLarge",
                    props: {
                        popup: {}
                    },
                    emits: ["close", "buttonAction"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = e,
                            o = t,
                            s = (0, d.tv)(),
                            l = (0, u.oR)(),
                            c = (0, i.Vh)((() => l.getters.isMobile)),
                            b = e => {
                                const t = (0, g.G)(e.url, s);
                                t ? window.open(e.url, "_blank") : s.push(e.url), o("buttonAction", e), o("close")
                            };
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, r.C_)([e.$style.popup, c.value && e.$style.mobile])
                        }, [(0, n.Wm)((0, i.SU)(y.eL), {
                            name: "light"
                        }, {
                            default: (0, n.w5)((() => [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.imageSize)
                            }, [(0, n.Wm)(m.Z, {
                                "use-srcset-width": "",
                                class: (0, r.C_)(e.$style.image),
                                src: a.popup.content.imageUrl,
                                type: (0, i.SU)(_.ResponsivePictureTypesEnum).CDP_NOTIFICATION_POPUP_BIG,
                                "fallback-image-dpr": 2
                            }, null, 8, ["class", "src", "type"])], 2), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.content)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.title)
                            }, (0, r.zw)((0, i.SU)(h)(a.popup.content.title)), 3), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.description)
                            }, (0, r.zw)((0, i.SU)(h)(a.popup.content.description)), 3), a.popup.content.buttonsInfo.length > 0 ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: (0, r.C_)(e.$style.buttons)
                            }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(a.popup.content.buttonsInfo, ((t, a) => ((0, n.wg)(), (0, n.j4)((0, i.SU)(v.z), {
                                key: t.url,
                                class: (0, r.C_)([e.$style.button, 0 === a && e.$style.buttonMain]),
                                variant: 0 === a ? "primary" : "secondaryOnBg",
                                size: "l",
                                type: "button",
                                onClick: e => b(t)
                            }, {
                                default: (0, n.w5)((() => [(0, n.Uk)((0, r.zw)(t.text), 1)])),
                                _: 2
                            }, 1032, ["class", "variant", "onClick"])))), 128))], 2)) : (0, n.kq)("", !0)], 2), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.close),
                                onClick: t[0] || (t[0] = e => o("close", !0))
                            }, [(0, n.Wm)(p.Z, {
                                icon: "close-thin",
                                class: (0, r.C_)(e.$style.closeIcon)
                            }, null, 8, ["class"])], 2)])),
                            _: 1
                        })], 2))
                    }
                }),
                f = {
                    popup: "CdpPopupTypeLarge_popup_FIi3H",
                    title: "CdpPopupTypeLarge_title_Yo7bI",
                    description: "CdpPopupTypeLarge_description_LZUX6",
                    mobile: "CdpPopupTypeLarge_mobile_zM1fC",
                    imageSize: "CdpPopupTypeLarge_imageSize_uZGwF",
                    image: "CdpPopupTypeLarge_image_mWDML",
                    content: "CdpPopupTypeLarge_content_qFmzo",
                    buttons: "CdpPopupTypeLarge_buttons_dLJhW",
                    button: "CdpPopupTypeLarge_button_NnoOV",
                    buttonMain: "CdpPopupTypeLarge_buttonMain_wJp1p",
                    close: "CdpPopupTypeLarge_close_UdNtV"
                };
            var k = a(348118);
            const w = {};
            w["$style"] = f;
            const S = (0, k.Z)(b, [
                    ["__cssModules", w]
                ]),
                C = S;
            var I = a(724120);
            const O = (0, n.aZ)({
                    __name: "CdpPopupTypePushSmall",
                    props: {
                        popup: {}
                    },
                    emits: ["close", "buttonAction"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = e,
                            o = t,
                            s = (0, d.yj)(),
                            l = (0, u.oR)(),
                            c = (0, I.r)(),
                            g = (0, i.Vh)((() => l.getters.isMobile)),
                            b = e => {
                                c.onConfirmButtonClick(a.popup.id), o("buttonAction", e), o("close")
                            };
                        return (0, n.YP)((() => s.name), ((e, t) => {
                            t && o("close", !0)
                        })), (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, r.C_)([e.$style.popup, g.value && e.$style.mobile])
                        }, [(0, n.Wm)((0, i.SU)(y.eL), {
                            name: "light"
                        }, {
                            default: (0, n.w5)((() => [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.content)
                            }, [(0, n.Wm)(m.Z, {
                                "use-srcset-width": "",
                                class: (0, r.C_)(e.$style.image),
                                src: e.popup.content.imageUrl,
                                type: (0, i.SU)(_.ResponsivePictureTypesEnum).CDP_NOTIFICATION_POPUP_SMALL,
                                "fallback-image-dpr": 2
                            }, null, 8, ["class", "src", "type"]), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.textBlock)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.title)
                            }, (0, r.zw)((0, i.SU)(h)(e.popup.content.title)), 3), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.description)
                            }, (0, r.zw)((0, i.SU)(h)(e.popup.content.description)), 3)], 2)], 2), e.popup.content.buttonsInfo.length > 0 ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: (0, r.C_)(e.$style.buttons)
                            }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(e.popup.content.buttonsInfo, ((t, a) => ((0, n.wg)(), (0, n.j4)((0, i.SU)(v.z), {
                                key: t.url,
                                class: (0, r.C_)(e.$style.button),
                                variant: 0 === a ? "secondary" : "secondaryOnBg",
                                size: "m",
                                type: "button",
                                onClick: e => b(t)
                            }, {
                                default: (0, n.w5)((() => [(0, n.Uk)((0, r.zw)(t.text), 1)])),
                                _: 2
                            }, 1032, ["class", "variant", "onClick"])))), 128))], 2)) : (0, n.kq)("", !0), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.close),
                                onClick: t[0] || (t[0] = e => o("close", !0))
                            }, [(0, n.Wm)(p.Z, {
                                icon: "close-thin",
                                class: (0, r.C_)(e.$style.closeIcon)
                            }, null, 8, ["class"])], 2)])),
                            _: 1
                        })], 2))
                    }
                }),
                T = {
                    popup: "CdpPopupTypePushSmall_popup_cfQUf",
                    title: "CdpPopupTypePushSmall_title_VcQmR",
                    description: "CdpPopupTypePushSmall_description_wKL5J",
                    content: "CdpPopupTypePushSmall_content_FHKn2",
                    textBlock: "CdpPopupTypePushSmall_textBlock_ZVftS",
                    image: "CdpPopupTypePushSmall_image_xQKLR",
                    buttons: "CdpPopupTypePushSmall_buttons_tlV7a",
                    button: "CdpPopupTypePushSmall_button_WyYX8",
                    close: "CdpPopupTypePushSmall_close_tsSZK",
                    closeIcon: "CdpPopupTypePushSmall_closeIcon_wf08M"
                },
                P = {};
            P["$style"] = T;
            const A = (0, k.Z)(O, [
                    ["__cssModules", P]
                ]),
                L = A,
                B = (0, n.aZ)({
                    __name: "CdpPopupTypeSmall",
                    props: {
                        popup: {}
                    },
                    emits: ["close", "buttonAction"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = e,
                            o = t,
                            s = (0, d.yj)(),
                            l = (0, d.tv)(),
                            c = (0, u.oR)(),
                            b = (0, i.Vh)((() => c.getters.isMobile)),
                            f = e => {
                                const t = (0, g.G)(e.url, l);
                                t ? window.open(e.url, "_blank") : l.push(e.url), o("buttonAction", e), o("close")
                            };
                        return (0, n.YP)((() => s.name), ((e, t) => {
                            t && o("close", !0)
                        })), (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, r.C_)([e.$style.popup, b.value && e.$style.mobile])
                        }, [(0, n.Wm)((0, i.SU)(y.eL), {
                            name: "light"
                        }, {
                            default: (0, n.w5)((() => [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.content)
                            }, [(0, n.Wm)(m.Z, {
                                "use-srcset-width": "",
                                class: (0, r.C_)(e.$style.image),
                                src: a.popup.content.imageUrl,
                                type: (0, i.SU)(_.ResponsivePictureTypesEnum).CDP_NOTIFICATION_POPUP_SMALL,
                                "fallback-image-dpr": 2
                            }, null, 8, ["class", "src", "type"]), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.textBlock)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.title)
                            }, (0, r.zw)((0, i.SU)(h)(a.popup.content.title)), 3), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.description)
                            }, (0, r.zw)((0, i.SU)(h)(a.popup.content.description)), 3)], 2)], 2), a.popup.content.buttonsInfo.length > 0 ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: (0, r.C_)(e.$style.buttons)
                            }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(a.popup.content.buttonsInfo, ((t, a) => ((0, n.wg)(), (0, n.j4)((0, i.SU)(v.z), {
                                key: t.url,
                                class: (0, r.C_)([e.$style.button, 0 === a && e.$style.buttonMain]),
                                variant: 0 === a ? "primary" : "secondaryOnBg",
                                size: "l",
                                type: "button",
                                onClick: e => f(t)
                            }, {
                                default: (0, n.w5)((() => [(0, n.Uk)((0, r.zw)(t.text), 1)])),
                                _: 2
                            }, 1032, ["class", "variant", "onClick"])))), 128))], 2)) : (0, n.kq)("", !0), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.close),
                                onClick: t[0] || (t[0] = e => o("close", !0))
                            }, [(0, n.Wm)(p.Z, {
                                icon: "close-thin",
                                class: (0, r.C_)(e.$style.closeIcon)
                            }, null, 8, ["class"])], 2)])),
                            _: 1
                        })], 2))
                    }
                }),
                M = {
                    popup: "CdpPopupTypeSmall_popup_z6wll",
                    title: "CdpPopupTypeSmall_title_Xz5st",
                    description: "CdpPopupTypeSmall_description_J33G4",
                    mobile: "CdpPopupTypeSmall_mobile_P23K7",
                    content: "CdpPopupTypeSmall_content_Lgpp1",
                    textBlock: "CdpPopupTypeSmall_textBlock_b5amm",
                    image: "CdpPopupTypeSmall_image_YjmxJ",
                    buttons: "CdpPopupTypeSmall_buttons_zc0Dh",
                    button: "CdpPopupTypeSmall_button_qNRWG",
                    buttonMain: "CdpPopupTypeSmall_buttonMain_pqmju",
                    close: "CdpPopupTypeSmall_close_i2I6Z"
                },
                E = {};
            E["$style"] = M;
            const N = (0, k.Z)(B, [
                    ["__cssModules", E]
                ]),
                D = N;
            var x = a(920346),
                R = a(550541),
                j = a(301252),
                F = a(474376),
                $ = a(305653),
                z = a(173870);
            const U = 72e4,
                Z = 6e4,
                G = 5e3,
                H = 2500,
                q = "cdp-popup-overlay",
                V = (0, n.aZ)({
                    __name: "CdpPopupOverlay",
                    props: {
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    setup(e) {
                        const t = (0, u.oR)(),
                            a = (0, n.Fl)((() => t.getters["permissions/isTester"] ? G : U)),
                            p = (0, n.Fl)((() => t.getters["permissions/isTester"] ? H : Z)),
                            m = e => !e || Date.now() - e > a.value,
                            _ = e => !e || Date.now() - e > p.value,
                            h = e,
                            g = (0, x.dd)(),
                            y = (0, d.yj)(),
                            {
                                getStoredData: v,
                                updateStorageValue: b
                            } = (0, j.W)(q, a.value),
                            {
                                popups: f,
                                trackCustomTrackCode: k,
                                getTrackIdFromPath: w
                            } = (0, R.A)(),
                            S = {
                                large: C,
                                small: D,
                                push_subscription_small: L
                            },
                            I = v(),
                            O = (0, i.iH)(!1),
                            T = (0, i.iH)();
                        let {
                            lastLargeClosedTime: P,
                            lastSmallClosedTime: A
                        } = I;
                        const B = (0, s.KQJ)(),
                            {
                                isMobile: M
                            } = t.getters,
                            E = ["deposit", "/casino/play", "/poker/play", "/twain-sport/play", "/betgames/play", "/tvbet/play"],
                            N = [z.Z.BETS_COUPONS, $.Z.TVBET_GAME],
                            V = (0, n.Fl)((() => E.some((e => y.path.includes(e))))),
                            W = (0, n.Fl)((() => N.some((e => y.name && y.name === e)))),
                            Y = (0, l.mD)(!1, a),
                            K = (0, l.mD)(!1, p),
                            J = (0, i.iH)(!!P && !m(P)),
                            X = (0, i.iH)(!!A && !_(A));
                        J.value && P && setTimeout((() => {
                            J.value = !1
                        }), a.value - (Date.now() - P)), X.value && A && setTimeout((() => {
                            X.value = !1
                        }), p.value - (Date.now() - A));
                        const Q = (0, n.Fl)((() => f.value.filter((e => "large" === e.type)) || [])),
                            ee = (0, n.Fl)((() => f.value.filter((e => "small" === e.type || "push_subscription_small" === e.type)) || [])),
                            te = (0, n.Fl)((() => g.isOpen || V.value || W.value || h.disabled || Y.value || J.value)),
                            ae = (0, n.Fl)((() => g.isOpen || V.value || W.value || h.disabled || K.value || X.value)),
                            ne = (0, n.Fl)((() => T.value ? S[T.value.type] : null)),
                            oe = e => {
                                var t;
                                "large" === (null == (t = T.value) ? void 0 : t.type) && (e ? M ? (0, c.Qp)(B.value) : (0, F.q)() : M ? (0, c.tG)(B.value) : (0, F.A)())
                            },
                            re = e => {
                                let t;
                                if (void 0 === e) {
                                    if (O.value || 0 === f.value.length) return;
                                    if (te.value) return void re(!0);
                                    if (ae.value) return void re(!1);
                                    [t] = f.value
                                } else if (e) {
                                    if (O.value || 0 === ee.value.length || ae.value) return;
                                    [t] = ee.value
                                } else {
                                    if (O.value || 0 === Q.value.length || te.value) return;
                                    [t] = Q.value
                                }
                                t && (T.value = t, O.value = !0, oe(!0), T.value.openCb && T.value.openCb())
                            },
                            ie = e => {
                                O.value = !1, T.value && (T.value.closeCb && T.value.closeCb(e), K.value = !0, A = Date.now(), b("lastSmallClosedTime", A), "large" === T.value.type && (Y.value = !0, P = Date.now(), b("lastLargeClosedTime", P)), f.value = f.value.filter((e => {
                                    var t;
                                    return e.id !== (null == (t = T.value) ? void 0 : t.id)
                                })))
                            },
                            se = e => {
                                var t;
                                const a = w(e.url);
                                a && k(a), (null == (t = T.value) ? void 0 : t.buttonCb) && T.value.buttonCb(e)
                            },
                            le = () => {
                                T.value && (oe(!1), T.value = void 0)
                            },
                            ce = () => {
                                ie()
                            };
                        return (0, n.YP)(te, (e => {
                            !e && Q.value.length > 0 && re(!1)
                        })), (0, n.YP)(ae, (e => {
                            !e && ee.value.length > 0 && re(!0)
                        })), (0, n.YP)(f, (() => {
                            re()
                        }), {
                            immediate: !0,
                            deep: !0
                        }), (0, n.bv)((() => {
                            window.addEventListener("beforeunload", ce)
                        })), (0, n.Jd)((() => {
                            window.removeEventListener("beforeunload", ce)
                        })), (e, t) => ((0, n.wg)(), (0, n.j4)(o.uT, {
                            "enter-active-class": e.$style.overlayEnterActive,
                            "leave-active-class": e.$style.overlayLeaveActive,
                            "enter-from-class": e.$style.overlayEnterFrom,
                            "leave-to-class": e.$style.overlayLeaveTo,
                            name: "cdp-popup-overlay",
                            onAfterLeave: le
                        }, {
                            default: (0, n.w5)((() => {
                                var a, o, s;
                                return [O.value ? ((0, n.wg)(), (0, n.iD)("div", {
                                    key: 0,
                                    class: (0, r.C_)([e.$style.root, (0, i.SU)(M) && e.$style.mobile, "large" === (null == (a = T.value) ? void 0 : a.type) && e.$style.large, "small" === (null == (o = T.value) ? void 0 : o.type) && e.$style.small, "push_subscription_small" === (null == (s = T.value) ? void 0 : s.type) && e.$style.pushSmall])
                                }, [(0, n._)("div", {
                                    class: (0, r.C_)(e.$style.background),
                                    onClick: t[0] || (t[0] = e => {
                                        var t;
                                        return ie("large" === (null == (t = T.value) ? void 0 : t.type))
                                    })
                                }, null, 2), T.value && ne.value ? ((0, n.wg)(), (0, n.j4)((0, n.LL)(ne.value), {
                                    key: 0,
                                    class: (0, r.C_)(e.$style.translateY),
                                    popup: T.value,
                                    onClose: ie,
                                    onButtonAction: se
                                }, null, 40, ["class", "popup"])) : (0, n.kq)("", !0)], 2)) : (0, n.kq)("", !0)]
                            })),
                            _: 1
                        }, 8, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"]))
                    }
                }),
                W = {
                    root: "CdpPopupOverlay_root_l4zP7",
                    background: "CdpPopupOverlay_background_wXSm9",
                    small: "CdpPopupOverlay_small_UAvNd",
                    pushSmall: "CdpPopupOverlay_pushSmall_bddgu",
                    large: "CdpPopupOverlay_large_D_uMV",
                    mobile: "CdpPopupOverlay_mobile_IC_rz",
                    overlayEnterActive: "CdpPopupOverlay_overlayEnterActive_Lddoe",
                    overlayLeaveActive: "CdpPopupOverlay_overlayLeaveActive_lW4k0",
                    translateY: "CdpPopupOverlay_translateY_YppxZ",
                    overlayEnterFrom: "CdpPopupOverlay_overlayEnterFrom_B4Ojc",
                    overlayLeaveTo: "CdpPopupOverlay_overlayLeaveTo_SiVRx"
                },
                Y = {};
            Y["$style"] = W;
            const K = (0, k.Z)(V, [
                    ["__cssModules", Y]
                ]),
                J = K
        },
        22726: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => L
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(280894),
                s = a(920346),
                l = a(529668),
                c = a(894710),
                d = a(59394),
                u = a(512659),
                p = a(762990),
                m = Object.defineProperty,
                _ = Object.defineProperties,
                h = Object.getOwnPropertyDescriptors,
                g = Object.getOwnPropertySymbols,
                y = Object.prototype.hasOwnProperty,
                v = Object.prototype.propertyIsEnumerable,
                b = (e, t, a) => t in e ? m(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                f = (e, t) => {
                    for (var a in t || (t = {})) y.call(t, a) && b(e, a, t[a]);
                    if (g)
                        for (var a of g(t)) v.call(t, a) && b(e, a, t[a]);
                    return e
                },
                k = (e, t) => _(e, h(t));
            const w = (e, t) => (0, n.h)(p.Z, k(f({}, t.attrs), {
                    initialWidth: 16,
                    initialHeight: 16,
                    innerHTML: '<path d="M8 0C3.592 0 0 3.592 0 8c0 4.408 3.592 8 8 8 4.408 0 8-3.592 8-8 0-4.408-3.592-8-8-8zm-.6 4.8c0-.328.272-.6.6-.6.328 0 .6.272.6.6v4c0 .328-.272.6-.6.6a.604.604 0 01-.6-.6v-4zm1.336 6.704a.826.826 0 01-.168.264.924.924 0 01-.264.168A.796.796 0 018 12a.796.796 0 01-.304-.064.924.924 0 01-.264-.168.826.826 0 01-.168-.264.796.796 0 01-.064-.304c0-.104.024-.208.064-.304a.924.924 0 01.168-.264.924.924 0 01.264-.168.8.8 0 01.608 0c.096.04.184.096.264.168.072.08.128.168.168.264.04.096.064.2.064.304a.796.796 0 01-.064.304z"/>'
                })),
                S = w,
                C = S,
                I = (0, n.aZ)({
                    __name: "ChangePasswordNotification",
                    setup(e) {
                        const t = (0, s.Jr)("desktop.header"),
                            a = (0, s.dd)(),
                            p = (0, i.oR)(),
                            m = (0, l.O)(),
                            _ = (0, r.Vh)((() => p.getters.isMobile)),
                            h = (0, r.Vh)((() => m.isChangePasswordNotificationVisible)),
                            g = () => {
                                a.open(_.value ? d.zD : c.zD)
                            };
                        return (e, a) => h.value ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, o.C_)([e.$style.root, _.value ? e.$style.mobile : e.$style.desktop])
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.notification),
                            onClick: g
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.warningAndText)
                        }, [(0, n.Wm)((0, r.SU)(C), {
                            class: (0, o.C_)(e.$style.warning)
                        }, null, 8, ["class"]), (0, n.Uk)(" " + (0, o.zw)((0, r.SU)(t).changePasswordRecomendation), 1)], 2), (0, n.Wm)((0, r.SU)(u.Z), {
                            class: (0, o.C_)(e.$style.chevronRight)
                        }, null, 8, ["class"])], 2)], 2)) : (0, n.kq)("", !0)
                    }
                }),
                O = {
                    root: "ChangePasswordNotification_root_ObgRX",
                    desktop: "ChangePasswordNotification_desktop_aCqZN",
                    mobile: "ChangePasswordNotification_mobile_lWqea",
                    notification: "ChangePasswordNotification_notification_ajwht",
                    warningAndText: "ChangePasswordNotification_warningAndText_fgq6v",
                    warning: "ChangePasswordNotification_warning_lHDId",
                    chevronRight: "ChangePasswordNotification_chevronRight_tL4E0"
                };
            var T = a(348118);
            const P = {};
            P["$style"] = O;
            const A = (0, T.Z)(I, [
                    ["__cssModules", P]
                ]),
                L = A
        },
        908869: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => _
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(280894),
                s = a(557361),
                l = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const c = (0, n.aZ)({
                    __name: "CommunicationCenter",
                    setup(e) {
                        const t = (0, i.oR)(),
                            c = (0, s.m)(),
                            d = (0, r.iH)(!1),
                            u = (0, r.iH)(!1),
                            p = (0, r.Vh)((() => t.getters.isMobile)),
                            m = {
                                notifications: (0, n.RC)((() => a.e(5718).then(a.bind(a, 405718))))
                            },
                            _ = (0, n.Fl)((() => {
                                if (c.type) return m[c.type]
                            })),
                            h = () => l(this, null, (function*() {
                                u.value = !1
                            })),
                            g = () => {
                                u.value || (d.value = !1, c.closeCommunicationCenter())
                            };
                        return (0, n.YP)((() => c.type), (e => {
                            e ? d.value = !0 : u.value = !1
                        })), (0, n.YP)(d, (e => l(this, null, (function*() {
                            yield(0, n.Y3)(), requestAnimationFrame((() => {
                                u.value = e
                            }))
                        })))), (e, t) => d.value ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, o.C_)([e.$style.root, p.value && e.$style.mobile, !p.value && e.$style.desktop, u.value && e.$style.visible]),
                            onTransitionend: g
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.background)
                        }, [_.value ? ((0, n.wg)(), (0, n.j4)((0, n.LL)(_.value), {
                            key: 0,
                            onClose: h
                        }, null, 32)) : (0, n.kq)("", !0)], 2)], 34)) : (0, n.kq)("", !0)
                    }
                }),
                d = {
                    root: "CommunicationCenter_root_PKobc",
                    visible: "CommunicationCenter_visible_AXGTO",
                    mobile: "CommunicationCenter_mobile_p5UUF",
                    background: "CommunicationCenter_background_mAHUN",
                    desktop: "CommunicationCenter_desktop_V35k7"
                };
            var u = a(348118);
            const p = {};
            p["$style"] = d;
            const m = (0, u.Z)(c, [
                    ["__cssModules", p]
                ]),
                _ = m
        },
        550418: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            var n = a(324586),
                o = a(35173),
                r = a(348118);
            const i = {};
            i["$style"] = o.Z;
            const s = (0, r.Z)(n.Z, [
                    ["__cssModules", i]
                ]),
                l = s
        },
        177083: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => g
            });
            var n = a(166252),
                o = a(749963),
                r = a(3577),
                i = a(602262),
                s = a(280894),
                l = a(550418),
                c = a(28111);
            const d = ["data-testid"],
                u = (0, n.aZ)({
                    __name: "ForbiddenLocation",
                    props: {
                        parentTestId: {}
                    },
                    setup(e) {
                        (0, o.sj)((e => ({
                            "1dd7b7f2": u.value
                        })));
                        const t = (0, s.oR)(),
                            a = (0, i.iH)(!1),
                            u = (0, n.Fl)((() => t.state.country && t.state.ip ? 1 : 0));
                        return (0, n.YP)((() => t.state.country), (() => {
                            a.value = !1
                        })), (e, o) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, r.C_)(e.$style.location)
                        }, [(0, i.SU)(t).state.country && (0, i.SU)(t).state.ip ? ((0, n.wg)(), (0, n.j4)(l.Z, {
                            key: 0,
                            rounded: "",
                            class: (0, r.C_)([e.$style.countryIcon, a.value && e.$style.visible]),
                            code: (0, i.SU)(t).state.country.toLowerCase(),
                            size: 16,
                            "test-id": (0, i.SU)(c.l)("flag", e.parentTestId),
                            onLoad: o[0] || (o[0] = e => a.value = !0)
                        }, null, 8, ["class", "code", "test-id"])) : (0, n.kq)("", !0), (0, n._)("span", {
                            class: (0, r.C_)(e.$style.country),
                            "data-testid": (0, i.SU)(c.l)("country", e.parentTestId)
                        }, (0, r.zw)((0, i.SU)(t).state.country), 11, d), (0, n._)("span", {
                            class: (0, r.C_)(e.$style.ip)
                        }, (0, r.zw)((0, i.SU)(t).state.ip), 3)], 2))
                    }
                }),
                p = {
                    location: "ForbiddenLocation_location_saSLZ",
                    countryIcon: "ForbiddenLocation_countryIcon_Xz7au",
                    visible: "ForbiddenLocation_visible_WmWCF",
                    country: "ForbiddenLocation_country_TKxXe",
                    ip: "ForbiddenLocation_ip_Rtgzu"
                };
            var m = a(348118);
            const _ = {};
            _["$style"] = p;
            const h = (0, m.Z)(u, [
                    ["__cssModules", _]
                ]),
                g = h
        },
        25697: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => C
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(599119),
                s = a(749963),
                l = a(280894),
                c = a(177083),
                d = a(248625),
                u = a(809283),
                p = a(644918),
                m = a(99290),
                _ = a(920346),
                h = a(92190),
                g = a(28111);
            const y = ["data-testid"],
                v = !1,
                b = (0, n.aZ)({
                    __name: "ForbiddenScreen",
                    setup(e) {
                        const t = (0, l.oR)(),
                            a = (0, s.fb)(),
                            b = (0, _.Jr)("desktop"),
                            {
                                image: f
                            } = m.assets.forbiddenAuth,
                            k = (0, n.Fl)((() => v ? t.getters.isMobile ? a.imageMobile : a.image : a.bear));
                        return (0, n.bv)((() => {
                            var e;
                            null == (e = window.trackEvent) || e.call(window, "fe_restricted_hard")
                        })), (0, h.p)(), (0, n.Ah)((() => {
                            (0, h.c)()
                        })), (e, a) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, o.C_)(e.$style.root)
                        }, [v ? ((0, n.wg)(), (0, n.iD)("img", {
                            key: 0,
                            class: (0, o.C_)((0, r.SU)(t).getters.isMobile ? e.$style.logoLuckystarMobile : e.$style.logoLuckystar),
                            src: i
                        }, null, 2)) : ((0, n.wg)(), (0, n.iD)("div", {
                            key: 1,
                            class: (0, o.C_)(e.$style.logoContainer)
                        }, [(0, n.Wm)(d.Z)], 2)), (0, n.Wm)(p.Z, {
                            picture: {
                                png: (0, r.SU)(f).png,
                                webp: (0, r.SU)(f).webp
                            },
                            class: (0, o.C_)(k.value)
                        }, null, 8, ["picture", "class"]), (0, n._)("h1", {
                            class: (0, o.C_)(e.$style.title),
                            "data-testid": (0, r.SU)(g.l)("title", "restrictedPage")
                        }, (0, o.zw)((0, r.SU)(b).forbidden_message), 11, y), (0, n._)("p", {
                            class: (0, o.C_)(e.$style.text)
                        }, (0, o.zw)((0, r.SU)(b).forbidden_text), 3), (0, n.Wm)(c.Z, {
                            "parent-test-id": "restrictedPage"
                        }), (0, n.Wm)(u.Z, {
                            "is-phone-button-hidden": ""
                        })], 2))
                    }
                }),
                f = {
                    root: "ForbiddenScreen_root_fSYNG",
                    logoContainer: "ForbiddenScreen_logoContainer_hVJzi",
                    bear: "ForbiddenScreen_bear_Wq3vx",
                    image: "ForbiddenScreen_image_eSCjp",
                    imageMobile: "ForbiddenScreen_imageMobile_K5fFx",
                    title: "ForbiddenScreen_title_mRHi2",
                    text: "ForbiddenScreen_text_dGZlm",
                    logoLuckystar: "ForbiddenScreen_logoLuckystar_Dh6mS",
                    logoLuckystarMobile: "ForbiddenScreen_logoLuckystarMobile_FIPcw"
                };
            var k = a(348118);
            const w = {};
            w["$style"] = f;
            const S = (0, k.Z)(b, [
                    ["__cssModules", w]
                ]),
                C = S
        },
        805404: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => u
            });
            var n = a(749963),
                o = a(166252),
                r = a(3577);
            const i = {
                    __name: "BackgroundImage",
                    props: {
                        image: {
                            type: Object,
                            required: !0
                        },
                        position: {
                            type: Object,
                            default: void 0
                        }
                    },
                    setup(e) {
                        (0, n.sj)((e => ({
                            d4cf55f8: i.value,
                            "03a351a9": s.value,
                            "7a04228b": a.value
                        })));
                        const t = e,
                            a = (0, o.Fl)((() => `url(${t.image})`)),
                            i = (0, o.Fl)((() => `${Math.ceil(t.image.width/2)}px`)),
                            s = (0, o.Fl)((() => `${Math.ceil(t.image.height/2)}px`)),
                            l = (0, o.Fl)((() => {
                                if (!t.position) return;
                                const e = {
                                    position: "absolute"
                                };
                                for (const a of ["left", "right", "top", "bottom"]) a in t.position && (e[a] = `${t.position[a]}px`);
                                return e
                            }));
                        return (e, t) => ((0, o.wg)(), (0, o.iD)("div", {
                            class: (0, r.C_)(e.$style.root),
                            style: (0, r.j5)(l.value)
                        }, null, 6))
                    }
                },
                s = {
                    root: "BackgroundImage_root_Ne7K9"
                };
            var l = a(348118);
            const c = {};
            c["$style"] = s;
            const d = (0, l.Z)(i, [
                    ["__cssModules", c]
                ]),
                u = d
        },
        473614: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => u
            });
            var n = a(166252),
                o = a(3577),
                r = a(559166);
            const i = (0, n.aZ)({
                    __name: "LuckyDriveLiveBadge",
                    props: {
                        size: {}
                    },
                    setup(e) {
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, o.C_)([e.$style.root, e.$style[e.size]])
                        }, [(0, n.Wm)(r.Z, {
                            icon: "live-symbol",
                            size: "small" === e.size ? 10 : 16
                        }, null, 8, ["size"]), "large" === e.size ? ((0, n.wg)(), (0, n.iD)("span", {
                            key: 0,
                            class: (0, o.C_)(e.$style.text)
                        }, " LIVE ", 2)) : (0, n.kq)("", !0)], 2))
                    }
                }),
                s = {
                    root: "LuckyDriveLiveBadge_root_SlYAA",
                    large: "LuckyDriveLiveBadge_large_Tc_3y",
                    medium: "LuckyDriveLiveBadge_medium_SSmOW",
                    small: "LuckyDriveLiveBadge_small_tGiKK",
                    text: "LuckyDriveLiveBadge_text_ddeHN"
                };
            var l = a(348118);
            const c = {};
            c["$style"] = s;
            const d = (0, l.Z)(i, [
                    ["__cssModules", c]
                ]),
                u = d
        },
        232284: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(166252),
                o = a(3577),
                r = a(749963);
            const i = ["viewBox", "width", "height"],
                s = ["x1", "y1", "x2", "y2"],
                l = (0, n.aZ)({
                    __name: "FreeBetLogo",
                    props: {
                        active: {
                            type: Boolean
                        },
                        disabled: {
                            type: Boolean
                        },
                        short: {
                            type: Boolean
                        },
                        theme: {
                            default: "origin"
                        },
                        widthSize: {
                            default: void 0
                        },
                        heightSize: {
                            default: void 0
                        }
                    },
                    setup(e) {
                        const t = e,
                            a = (0, n.Fl)((() => {
                                var e, a;
                                const n = t.short ? 24 : 65,
                                    o = 16;
                                return {
                                    width: null != (e = t.widthSize) ? e : n,
                                    height: null != (a = t.heightSize) ? a : o
                                }
                            })),
                            l = (0, n.Fl)((() => t.short ? {
                                x1: 4.26001,
                                y1: 3.5,
                                x2: 13.8647,
                                y2: 9.575
                            } : {
                                x1: 0,
                                y1: 0,
                                x2: 39,
                                y2: 10.8
                            })),
                            c = (0, r.fb)(),
                            d = (0, n.Fl)((() => {
                                const e = {
                                    origin: c.origin,
                                    blue: c.blue,
                                    orange: c.orange
                                };
                                return e[t.theme]
                            }));
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("svg", {
                            key: e.active ? "active" : "inactive",
                            class: (0, o.C_)([e.$style.root, d.value, e.active && e.$style.active, e.disabled && e.$style.disabled]),
                            viewBox: `0 0 ${e.short?24:65} 16`,
                            width: a.value.width,
                            height: a.value.height,
                            fill: "currenColor",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [e.short ? ((0, n.wg)(), (0, n.iD)(n.HY, {
                            key: 0
                        }, [(0, n._)("path", {
                            d: "M1.19187 6.88465C1.67932 4.43285 1.92304 3.20694 2.56664 2.28969C3.13416 1.48085 3.91675 0.843481 4.82763 0.448231C5.86061 0 7.12209 0 9.64504 0H19.3816C21.178 0 22.0762 0 22.7062 0.365264C23.2588 0.685655 23.6781 1.19065 23.8887 1.7896C24.1288 2.47244 23.9553 3.34529 23.6082 5.09101L22.8081 9.11535C22.3207 11.5672 22.077 12.7931 21.4334 13.7103C20.8658 14.5191 20.0833 15.1565 19.1724 15.5518C18.1394 16 16.8779 16 14.355 16H4.61838C2.82201 16 1.92382 16 1.29379 15.6347C0.741157 15.3143 0.32191 14.8094 0.111301 14.2104C-0.128807 13.5276 0.0447264 12.6547 0.391793 10.909L1.19187 6.88465Z",
                            fill: "currentColor",
                            class: (0, o.C_)(e.$style.background)
                        }, null, 2), (0, n._)("path", {
                            d: "M6.1331 12.5H4.26001L5.85442 4.91389C6.02759 4.08993 6.75439 3.5 7.59636 3.5H11.9742L11.6476 5.10915H7.69811L7.18671 7.45426H10.7912L10.4769 8.9948H6.87247L6.1331 12.5Z",
                            class: (0, o.C_)(e.$style.text),
                            fill: "currentColor"
                        }, null, 2), (0, n._)("path", {
                            d: "M15.475 12.5H11.2174L13.109 3.5H16.7381C18.2662 3.5 19.2828 4.27963 19.2828 5.43971C19.2828 6.62474 18.4448 7.579 17.2742 7.74116L17.2618 7.85967C18.2415 8.04054 18.8515 8.72661 18.8515 9.65593C18.8515 11.315 17.4467 12.5 15.475 12.5ZM14.6925 4.89709L14.1996 7.19231H15.6783C16.695 7.19231 17.4097 6.63721 17.4097 5.85759C17.4097 5.24012 16.9476 4.89709 16.0788 4.89709H14.6925ZM13.3863 11.0218H15.1546C16.2082 11.0218 16.9722 10.4168 16.9722 9.55613C16.9722 8.85759 16.4608 8.46466 15.5305 8.46466H13.9346L13.3863 11.0218Z",
                            class: (0, o.C_)(e.$style.text),
                            fill: "currentColor"
                        }, null, 2)], 64)) : ((0, n.wg)(), (0, n.iD)(n.HY, {
                            key: 1
                        }, [(0, n._)("path", {
                            d: "M1.185 6.885c.485-2.452.727-3.678 1.367-4.595A5.349 5.349 0 0 1 4.8.448C5.827 0 7.08 0 9.589 0h50.82c1.785 0 2.678 0 3.305.365.55.32.966.826 1.175 1.425.24.682.067 1.555-.278 3.301l-.796 4.024c-.485 2.452-.727 3.678-1.367 4.595a5.35 5.35 0 0 1-2.248 1.842C59.173 16 57.92 16 55.411 16H4.591c-1.785 0-2.678 0-3.305-.365A2.669 2.669 0 0 1 .111 14.21c-.24-.682-.067-1.555.279-3.301l.795-4.024Z",
                            fill: "currentColor",
                            class: (0, o.C_)(e.$style.background)
                        }, null, 2), (0, n._)("path", {
                            d: "M6.133 12.5H4.26l1.595-7.588A1.778 1.778 0 0 1 7.595 3.5h4.379l-.327 1.61h-3.95l-.51 2.344h3.604l-.314 1.54H6.872l-.74 3.506ZM11.005 12.5l1.892-9h3.518c1.645 0 2.785 1.054 2.785 2.55 0 1.323-.844 2.52-2.2 2.97l1.22 3.48h-2.002l-1.06-3.262h-1.59l-.69 3.262h-1.873Zm3.457-7.478-.604 2.77h1.627c1.09 0 1.817-.65 1.817-1.573 0-.76-.487-1.197-1.312-1.197h-1.528ZM25.089 10.89l-.32 1.61h-5.897l1.891-9h5.89l-.326 1.61H22.31l-.462 2.101h3.795l-.308 1.49h-3.79l-.48 2.19h4.024ZM33.068 10.89l-.32 1.61H26.85l1.892-9h5.89l-.326 1.61h-4.018l-.462 2.101h3.796l-.308 1.49h-3.79l-.48 2.19h4.023ZM42.088 12.5h-4.257l1.891-9h3.63c1.527 0 2.544.78 2.544 1.94 0 1.185-.838 2.139-2.009 2.301l-.012.119c.98.18 1.59.867 1.59 1.796 0 1.659-1.405 2.844-3.377 2.844Zm-.782-7.603-.493 2.295h1.479c1.016 0 1.731-.555 1.731-1.334 0-.618-.462-.96-1.33-.96h-1.387ZM40 11.022h1.768c1.053 0 1.818-.605 1.818-1.466 0-.698-.512-1.091-1.442-1.091h-1.596l-.549 2.557ZM51.927 10.89l-.32 1.61H45.71l1.891-9h5.89l-.326 1.61h-4.017l-.462 2.101h3.795l-.308 1.49h-3.79l-.48 2.19h4.024ZM56.93 11.443a1.333 1.333 0 0 1-1.304 1.057h-.793l1.565-7.39h-2.226l.326-1.61h6.762l-.327 1.61h-2.661l-1.342 6.333Z",
                            fill: "currentColor",
                            class: (0, o.C_)(e.$style.text)
                        }, null, 2)], 64)), (0, n._)("defs", null, [(0, n._)("linearGradient", {
                            id: "linearGradientFreeBet",
                            x1: l.value.x1,
                            y1: l.value.y1,
                            x2: l.value.x2,
                            y2: l.value.y2,
                            gradientUnits: "userSpaceOnUse"
                        }, t[0] || (t[0] = [(0, n._)("stop", {
                            "stop-color": "#F7B200"
                        }, null, -1), (0, n._)("stop", {
                            offset: "1",
                            "stop-color": "#FF5C00"
                        }, null, -1)]), 8, s)])], 10, i))
                    }
                }),
                c = {
                    root: "FreeBetLogo_root_ZNCOj",
                    disabled: "FreeBetLogo_disabled_hm3M9",
                    origin: "FreeBetLogo_origin_UWD32",
                    text: "FreeBetLogo_text_mRei6",
                    background: "FreeBetLogo_background_Tbj74",
                    active: "FreeBetLogo_active_VD6WG",
                    blue: "FreeBetLogo_blue_qgKCX"
                };
            var d = a(348118);
            const u = {};
            u["$style"] = c;
            const p = (0, d.Z)(l, [
                    ["__cssModules", u]
                ]),
                m = p
        },
        633644: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p
            });
            var n = a(166252);

            function o(e, t, a, o, r, i) {
                const s = (0, n.up)("VIcon");
                return (0, n.wg)(), (0, n.j4)(s, (0, n.dG)({
                    ref: "root"
                }, e.$attrs, {
                    square: "",
                    class: [e.$style.icon, a.spin && e.$style.spin],
                    icon: a.icon,
                    margin: a.margin,
                    onLoaded: i.onLoadHandler
                }), null, 16, ["class", "icon", "margin", "onLoaded"])
            }
            var r = a(559166),
                i = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const s = {
                    name: "IconSvgGradient",
                    components: {
                        VIcon: r.Z
                    },
                    props: {
                        icon: {
                            type: String,
                            required: !0
                        },
                        gradient: {
                            type: String,
                            default: null
                        },
                        margin: {
                            type: Boolean,
                            default: !0
                        },
                        gradientTagName: {
                            type: String,
                            default: "rect"
                        },
                        multipleTags: Boolean,
                        spin: Boolean
                    },
                    methods: {
                        onLoadHandler() {
                            return i(this, null, (function*() {
                                if (!this.gradient) return;
                                yield(0, n.Y3)();
                                const e = this.$refs.root.$refs.iconWithGradientProblem.$refs.iconWithGradientProblemComponent.$el;
                                if (this.multipleTags)
                                    for (const t of e.querySelectorAll(this.gradientTagName)) t.style.fill = `url('#${this.gradient}')`;
                                else {
                                    const t = e.querySelectorAll(this.gradientTagName)[0];
                                    if (!t) return;
                                    t.style.fill = `url('#${this.gradient}')`
                                }
                            }))
                        }
                    }
                },
                l = {
                    icon: "VIconSvgGradient_icon_WJLeK",
                    spin: "VIconSvgGradient_spin_laZqj"
                };
            var c = a(348118);
            const d = {};
            d["$style"] = l;
            const u = (0, c.Z)(s, [
                    ["render", o],
                    ["__cssModules", d]
                ]),
                p = u
        },
        909720: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(262884);
            const s = (0, n.aZ)({
                    __name: "CurrencyIcon",
                    props: {
                        className: {
                            default: ""
                        },
                        currency: {},
                        size: {
                            default: "s"
                        },
                        noPadding: {
                            type: Boolean
                        }
                    },
                    setup(e) {
                        const t = e,
                            s = (0, i.e0)(),
                            l = (0, n.Fl)((() => s.value(t.currency))),
                            c = (0, n.h)("span", {}, [l.value]),
                            d = (0, n.RC)({
                                loader: () => a(540521)(`./${t.currency}.svg`),
                                errorComponent: () => c
                            });
                        return (e, a) => ((0, n.wg)(), (0, n.iD)(n.HY, null, [(0, n._)("div", {
                            class: (0, o.C_)([e.$style.icon, e.$style[t.size]])
                        }, [(0, n.Wm)((0, r.SU)(d), {
                            size: t.size,
                            class: (0, o.C_)([e.$style[e.size], e.noPadding && e.$style.noPadding])
                        }, null, 8, ["size", "class"])], 2), a[0] || (a[0] = (0, n._)("div", null, null, -1))], 64))
                    }
                }),
                l = {
                    icon: "CurrencyIcon_icon_raUqx",
                    xs: "CurrencyIcon_xs_iJPbj",
                    s: "CurrencyIcon_s_brBHC",
                    m: "CurrencyIcon_m_ykDmf",
                    l: "CurrencyIcon_l_hOpIY",
                    xl: "CurrencyIcon_xl_IOfRu",
                    noPadding: "CurrencyIcon_noPadding_DFLlc"
                };
            var c = a(348118);
            const d = {};
            d["$style"] = l;
            const u = (0, c.Z)(s, [
                    ["__cssModules", d]
                ]),
                p = u
        },
        361111: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(166252);
            const o = {
                class: "loading-dots"
            };

            function r(e, t, a, r, i, s) {
                return (0, n.wg)(), (0, n.iD)("div", o, t[0] || (t[0] = [(0, n._)("div", {
                    class: "loading-dots__dot"
                }, null, -1), (0, n._)("div", {
                    class: "loading-dots__dot"
                }, null, -1), (0, n._)("div", {
                    class: "loading-dots__dot"
                }, null, -1)]))
            }
            var i = a(749963);
            const s = {
                    name: "LoadingDots",
                    props: {
                        color: {
                            type: String,
                            default: "#fff"
                        }
                    }
                },
                l = () => {
                    (0, i.sj)((e => ({
                        d1d1b89c: e.color
                    })))
                },
                c = s.setup;
            s.setup = c ? (e, t) => (l(), c(e, t)) : l;
            const d = s;
            var u = a(348118);
            const p = (0, u.Z)(d, [
                    ["render", r],
                    ["__scopeId", "data-v-4eb0d808"]
                ]),
                m = p
        },
        248625: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => O
            });
            var n = a(166252),
                o = a(3577);

            function r(e, t, a, r, i, s) {
                return (0, n.wg)(), (0, n.j4)((0, n.LL)(e.$options.isUseDynamicLogos ? "DynamicLogo" : "SvgLogo"), (0, o.vs)((0, n.F4)(e.$props)), null, 16)
            }
            var i = a(934405),
                s = a(749963);
            const l = ["src"];

            function c(e, t, a, r, i, c) {
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, o.C_)([e.$style.logo, a.mobile && e.$style.mobile])
                }, [(0, n.Wm)(s.uT, {
                    name: "fade",
                    mode: "out-in"
                }, {
                    default: (0, n.w5)((() => [((0, n.wg)(), (0, n.iD)("img", {
                        key: e.logoPath,
                        src: e.logoPath
                    }, null, 8, l))])),
                    _: 1
                })], 2)
            }
            const d = {
                    props: {
                        mobile: Boolean
                    },
                    data: () => ({
                        logoPath: window.dynamicLogoPath
                    }),
                    created() {
                        window.addEventListener("1w:dynamicLogoChanged", this.changeLogoEventListener)
                    },
                    unmounted() {
                        window.removeEventListener("1w:dynamicLogoChanged", this.changeLogoEventListener)
                    },
                    methods: {
                        changeLogoEventListener(e) {
                            this.logoPath = e.detail.newLogoPath
                        }
                    }
                },
                u = {
                    logo: "DynamicLogo_logo_DIEuF",
                    mobile: "DynamicLogo_mobile_u4ZrD",
                    "fade-enter-active": "DynamicLogo_fade-enter-active_OjrSc",
                    "fade-leave-active": "DynamicLogo_fade-leave-active_rsB_A",
                    "fade-enter-from": "DynamicLogo_fade-enter-from_trmPj",
                    "fade-leave-to": "DynamicLogo_fade-leave-to_CXSTI"
                };
            var p = a(348118);
            const m = {};
            m["$style"] = u;
            const _ = (0, p.Z)(d, [
                    ["render", c],
                    ["__cssModules", m]
                ]),
                h = _,
                g = ["src"];

            function y(e, t, a, r, i, s) {
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, o.C_)([e.$style.svgLogoContainer, a.mobile && e.$style.mobile])
                }, [s.currentLogo ? ((0, n.wg)(), (0, n.iD)("img", {
                    key: 0,
                    src: s.currentLogo,
                    class: (0, o.C_)([e.$style.svgLogo, "small" === a.size && e.$style.small, "verySmall" === a.size && e.$style.verySmall])
                }, null, 10, g)) : (0, n.kq)("", !0)], 2)
            }
            var v = a(99290);
            const b = {
                    props: {
                        mobile: Boolean,
                        whiteTheme: Boolean,
                        size: {
                            type: String,
                            default: "",
                            validator: (0, i.kw)(["small", "verySmall", ""])
                        }
                    },
                    computed: {
                        currentLogo() {
                            return v.assets.logo[this.whiteTheme ? "white" : "normal"]
                        }
                    }
                },
                f = {
                    svgLogoContainer: "SvgLogo_svgLogoContainer_MdO5l",
                    svgLogo: "SvgLogo_svgLogo_tYTbP",
                    small: "SvgLogo_small_qiEuI",
                    verySmall: "SvgLogo_verySmall_E6PBB",
                    mobile: "SvgLogo_mobile_ePO8D"
                },
                k = {};
            k["$style"] = f;
            const w = (0, p.Z)(b, [
                    ["render", y],
                    ["__cssModules", k]
                ]),
                S = w,
                C = {
                    components: {
                        DynamicLogo: h,
                        SvgLogo: S
                    },
                    props: {
                        mobile: Boolean,
                        whiteTheme: Boolean,
                        size: {
                            type: String,
                            default: "",
                            validator: (0, i.kw)(["small", "verySmall", ""])
                        }
                    },
                    isUseDynamicLogos: window.dynamicLogoPath
                },
                I = (0, p.Z)(C, [
                    ["render", r]
                ]),
                O = I
        },
        693418: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(26016),
                o = a(118518),
                r = a(475892),
                i = a(348118);
            const s = {};
            s["$style"] = r.Z;
            const l = (0, i.Z)(o.Z, [
                    ["render", n.s],
                    ["__cssModules", s]
                ]),
                c = l
        },
        470942: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => v
            });
            var n = a(166252),
                o = a(602262),
                r = a(3577),
                i = a(280894),
                s = a(805404),
                l = a(99290),
                c = a(920346),
                d = a(724120),
                u = a(909997),
                p = a(879669);
            const m = (0, n.aZ)({
                    __name: "PushNotificationsPopupBase",
                    setup(e) {
                        const {
                            imageDesktop: t,
                            imageMobile: a
                        } = l.assets.bonuses.notificationPopup, m = (0, i.oR)(), _ = (0, d.r)(), h = (0, o.Vh)((() => m.getters.isMobile)), g = (0, n.Fl)((() => h.value ? a : t)), y = (0, c.Jr)("common.pushNotificationsPopup"), v = (0, n.Fl)((() => _.isTestTextShown && _.currentText && "ru" === m.getters.currentLang ? y[_.currentText] : _.isWithBonus ? y.withBonus : y.withoutBonus)), b = (0, n.Fl)((() => _.isWithBonus && v.value.amount ? `+${(0,d.K)(_.bonusAmount)}?` : void 0)), f = e => {
                            u.L_.sendNotificationEvent("button", {
                                notification_title: v.value.title,
                                notification_text: v.value.description,
                                notification_type: "allow_notification",
                                button_text: "refuse" === e ? v.value.buttonRefuse : v.value.buttonAccept
                            }), "accept" === e ? _.onConfirmButtonClick() : _.onRefuseButtonClick()
                        };
                        return (0, n.YP)((() => _.isPopupOpened), (() => {
                            _.isPopupOpened && u.L_.sendNotificationEvent("view", {
                                notification_title: v.value.title,
                                notification_date: (new Date).toISOString(),
                                notification_text: v.value.description,
                                notification_type: "allow_notification"
                            })
                        }), {
                            immediate: !0
                        }), (e, t) => (0, o.SU)(_).isPopupOpened ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, r.C_)([h.value ? e.$style.rootMobile : e.$style.root, !(0, o.SU)(_).isWithBonus && e.$style.rootWithoutBonus, (0, o.SU)(_).currentText && e.$style[(0, o.SU)(_).currentText]])
                        }, [(0, n.Wm)(s.Z, {
                            class: (0, r.C_)(e.$style.image),
                            image: g.value
                        }, null, 8, ["class", "image"]), (0, n._)("div", {
                            class: (0, r.C_)(e.$style.content)
                        }, [(0, n._)("div", {
                            class: (0, r.C_)(e.$style.texts)
                        }, [(0, n._)("div", {
                            class: (0, r.C_)(e.$style.indicator)
                        }, null, 2), (0, n._)("div", {
                            class: (0, r.C_)(e.$style.title)
                        }, (0, r.zw)(v.value.title), 3), (0, o.SU)(_).isWithBonus ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, r.C_)(e.$style.amount)
                        }, (0, r.zw)(b.value), 3)) : (0, n.kq)("", !0), (0, n._)("div", {
                            class: (0, r.C_)(e.$style.description)
                        }, (0, r.zw)(v.value.description), 3)], 2), (0, n._)("div", {
                            class: (0, r.C_)(e.$style.buttons)
                        }, [(0, n.Wm)((0, o.SU)(p.zx), {
                            type: "button",
                            class: (0, r.C_)(e.$style.button),
                            disabled: (0, o.SU)(_).isSubscriptionPending,
                            onClick: t[0] || (t[0] = () => f("accept"))
                        }, {
                            default: (0, n.w5)((() => [(0, n.Uk)((0, r.zw)(v.value.buttonAccept), 1)])),
                            _: 1
                        }, 8, ["class", "disabled"]), (0, n.Wm)((0, o.SU)(p.zx), {
                            type: "button",
                            variant: "static",
                            class: (0, r.C_)(e.$style.buttonRefuse),
                            disabled: (0, o.SU)(_).isSubscriptionPending,
                            onClick: t[1] || (t[1] = () => f("refuse"))
                        }, {
                            default: (0, n.w5)((() => [(0, n.Uk)((0, r.zw)(v.value.buttonRefuse), 1)])),
                            _: 1
                        }, 8, ["class", "disabled"])], 2)], 2)], 2)) : (0, n.kq)("", !0)
                    }
                }),
                _ = {
                    root: "PushNotificationsPopupBase_root_oFeOr",
                    image: "PushNotificationsPopupBase_image_UBhLs",
                    content: "PushNotificationsPopupBase_content_HoJcC",
                    texts: "PushNotificationsPopupBase_texts_B0dbH",
                    indicator: "PushNotificationsPopupBase_indicator_drra9",
                    title: "PushNotificationsPopupBase_title_JWuCb",
                    amount: "PushNotificationsPopupBase_amount_DBwbu",
                    description: "PushNotificationsPopupBase_description_JDfUx",
                    buttons: "PushNotificationsPopupBase_buttons_bYjmh",
                    button: "PushNotificationsPopupBase_button_pht0X",
                    buttonRefuse: "PushNotificationsPopupBase_buttonRefuse_gc6xT PushNotificationsPopupBase_button_pht0X",
                    withoutBonusB: "PushNotificationsPopupBase_withoutBonusB_rSlaY",
                    withoutBonusC: "PushNotificationsPopupBase_withoutBonusC_18zBh",
                    withoutBonusD: "PushNotificationsPopupBase_withoutBonusD_U5dMT",
                    withoutBonusE: "PushNotificationsPopupBase_withoutBonusE_qxmZU",
                    rootMobile: "PushNotificationsPopupBase_rootMobile_SL3iF PushNotificationsPopupBase_root_oFeOr",
                    rootWithoutBonus: "PushNotificationsPopupBase_rootWithoutBonus_gIZhi"
                };
            var h = a(348118);
            const g = {};
            g["$style"] = _;
            const y = (0, h.Z)(m, [
                    ["__cssModules", g]
                ]),
                v = y
        },
        172539: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(166252),
                o = a(602262),
                r = a(920346),
                i = a(72163);
            const s = (0, n.aZ)({
                    __name: "PwaInfoDescription",
                    props: {
                        rawMessage: {}
                    },
                    setup(e) {
                        const t = e,
                            a = (0, i.z)(),
                            {
                                appBonusText: s
                            } = (0, r.ar)(),
                            l = (0, n.Fl)((() => !a.pwaAmount)),
                            c = s(t.rawMessage);
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", null, [(0, n.WI)(e.$slots, "default", {
                            message: (0, o.SU)(c),
                            isLoading: l.value
                        })]))
                    }
                }),
                l = s,
                c = l
        },
        753154: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => v
            });
            var n = a(166252),
                o = a(3577);
            const r = {
                    key: 1
                },
                i = ["srcset", "type"];

            function s(e, t, a, s, l, c) {
                return !e.imageErrorLoaded && c.isSafari ? ((0, n.wg)(), (0, n.iD)("img", (0, o.vs)((0, n.dG)({
                    key: 0
                }, c.imgProps)), null, 16)) : e.imageErrorLoaded ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.iD)("picture", r, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(c.sources, (e => ((0, n.wg)(), (0, n.iD)("source", {
                    key: e.type,
                    srcset: e.srcset,
                    type: e.type
                }, null, 8, i)))), 128)), (0, n._)("img", (0, n.dG)({
                    ref: "img"
                }, c.imgProps), null, 16)]))
            }
            var l = a(934405),
                c = a(845919),
                d = a(112808);
            const u = {
                    png: "image/png",
                    webp: "image/webp",
                    avif: "image/avif"
                },
                p = ({
                    dpr: e = 1,
                    format: t = "png",
                    src: a,
                    typeName: n
                }) => {
                    const o = "dummy" === n ? n : `${n}_${e}x`;
                    return a.startsWith("/") ? a : `${d.appConfig.server.proxyCdn}/unsafe/${o}/plain/${a}@${t}`
                },
                m = {
                    inject: ["$platform"],
                    props: {
                        src: {
                            type: String,
                            required: !0
                        },
                        fallbackImageDpr: {
                            type: Number,
                            default: 1
                        },
                        formats: {
                            type: Array,
                            default: () => ["avif", "webp", "png"],
                            validator: (0, l.CT)((0, l.kw)(["avif", "webp", "png"]))
                        },
                        type: {
                            type: Object,
                            validator: c.X,
                            required: !0
                        },
                        useDummy: Boolean,
                        useSrcsetWidth: Boolean,
                        scaleSizes: {
                            type: Array,
                            default: null
                        },
                        loading: {
                            type: String,
                            default: "lazy"
                        },
                        ignoreTransition: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["error", "load"],
                    data: () => ({
                        isDummy: !1,
                        imageLoaded: !1,
                        imageErrorLoaded: !1
                    }),
                    computed: {
                        isSafari() {
                            var e;
                            return this.$platform.desktop.other.safari || (null == (e = this.$platform) ? void 0 : e.mobile.other.safari)
                        },
                        imgProps() {
                            return {
                                class: [this.$style.img, !this.imageLoaded && this.$style.dummy, !this.ignoreTransition && this.$style.withTransition],
                                srcset: this.getSrcset({
                                    src: this.src,
                                    format: "png",
                                    type: this.currentType
                                }),
                                loading: this.loading,
                                onLoad: this.onLoad,
                                onError: this.onError
                            }
                        },
                        sources() {
                            if (this.isDummy) return [];
                            const {
                                src: e,
                                currentType: t
                            } = this;
                            return this.formats.map((a => this.getSource({
                                format: a,
                                src: e,
                                type: t
                            })))
                        },
                        currentType() {
                            return this.isDummy ? c.ResponsivePictureTypesEnum.DUMMY : this.type
                        },
                        actualScaleSizes() {
                            return this.scaleSizes ? this.scaleSizes.filter((e => this.type.scaleSizes.includes(e))) : this.type.scaleSizes
                        }
                    },
                    watch: {
                        src: {
                            handler: "checkLoad"
                        },
                        formats: {
                            handler: "checkLoad",
                            deep: !0
                        },
                        type: {
                            handler: "checkLoad"
                        }
                    },
                    mounted() {
                        this.checkLoad()
                    },
                    methods: {
                        getSrcset({
                            src: e,
                            format: t,
                            type: a
                        }) {
                            return this.actualScaleSizes.map((n => `${p({format:t,typeName:a.name,src:e,dpr:n})} ${this.useSrcsetWidth&&this.type.width?this.type.width*n+"w":`${n}x`}`)).join(", ")
                        },
                        getSource({
                            format: e,
                            src: t,
                            type: a
                        }) {
                            return {
                                srcset: this.getSrcset({
                                    format: e,
                                    src: t,
                                    type: a
                                }),
                                type: u[e]
                            }
                        },
                        resetData() {
                            this.isDummy = !1, this.imageLoaded = !1, this.imageErrorLoaded = !1
                        },
                        checkLoad() {
                            this.resetData(), this.useDummy && !this.$refs.img.complete ? (this.isDummy = !0, (0, n.Y3)((() => {
                                this.isDummy = !1
                            }))) : this.imageLoaded = !0
                        },
                        onLoad() {
                            this.$emit("load"), this.imageLoaded = !0
                        },
                        onError() {
                            this.$emit("error"), this.imageErrorLoaded = !0
                        }
                    }
                },
                _ = {
                    img: "ResponsivePicture_img_N2UWA",
                    withTransition: "ResponsivePicture_withTransition_DgLcq",
                    dummy: "ResponsivePicture_dummy_EcYJ5"
                };
            var h = a(348118);
            const g = {};
            g["$style"] = _;
            const y = (0, h.Z)(m, [
                    ["render", s],
                    ["__cssModules", g]
                ]),
                v = y
        },
        575913: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(451331),
                o = a(553246),
                r = (a(166232), a(348118));
            const i = (0, r.Z)(o.Z, [
                    ["render", n.s],
                    ["__scopeId", "data-v-3f4d788e"]
                ]),
                s = i
        },
        150201: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            var n = a(166252),
                o = a(920346);
            const r = ({
                    open: e
                }) => ({
                    icon: "social/tg",
                    open: e,
                    spin: !1
                }),
                i = {
                    props: {
                        chatIcon: {
                            type: String,
                            default: "comments"
                        },
                        spinnerIcon: {
                            type: String,
                            default: "spinner"
                        }
                    },
                    setup(e, {
                        slots: t
                    }) {
                        const {
                            isLoading: a,
                            open: i,
                            mode: s,
                            openTgChannel: l
                        } = (0, o.YW)();
                        if ("tg" === s) return () => t.default(r({
                            open: l
                        }));
                        const c = (0, n.Fl)((() => a.value ? e.spinnerIcon : e.chatIcon));
                        return () => t.default({
                            icon: c.value,
                            open: i,
                            spin: a.value
                        })
                    }
                },
                s = i,
                l = s
        },
        809283: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => S
            });
            var n = a(166252),
                o = a(749963),
                r = a(3577),
                i = a(602262),
                s = a(966309),
                l = a(280894),
                c = a(559166),
                d = a(150201),
                u = a(583582),
                p = a(920346),
                m = a(137101),
                _ = a(495119),
                h = a(909997),
                g = a(894710),
                y = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const v = (0, n.aZ)({
                    __name: "FixedSupportPanel",
                    props: {
                        isPhoneButtonHidden: {
                            type: Boolean
                        }
                    },
                    setup(e) {
                        (0, o.sj)((e => ({
                            "0a407837": S.value
                        })));
                        const t = (0, l.oR)(),
                            a = (0, m.d)(),
                            v = (0, p.Jr)("common.vipClub.vipManagerBanner.badge"),
                            b = (0, s.CRk)((() => y(this, null, (function*() {
                                return yield t.getters.promiseByName[_.l.LOCALES], !0
                            }))), !1),
                            f = e => {
                                var a;
                                h.L_.handleSupportPanelEvent("support", {
                                    element_name: e,
                                    user_id: null == (a = t.getters.user) ? void 0 : a.id
                                })
                            },
                            k = e => {
                                f("chat"), e()
                            },
                            w = () => {
                                f("call"), a.open(g.zu)
                            },
                            S = (0, n.Fl)((() => b.value ? 1 : 0));
                        return (e, a) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, r.C_)(e.$style.root),
                            style: {
                                right: "15px"
                            }
                        }, [e.isPhoneButtonHidden || (0, i.SU)(t).getters.isMobile || !(0, i.SU)(t).getters.supportNumber ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.j4)(u.Z, {
                            key: 0,
                            class: (0, r.C_)(e.$style.call),
                            onClick: w
                        }, {
                            default: (0, n.w5)((() => [(0, n.Wm)(c.Z, {
                                icon: "phone"
                            })])),
                            _: 1
                        }, 8, ["class"])), (0, n.Wm)(u.Z, {
                            class: (0, r.C_)(e.$style.text),
                            disabled: ""
                        }, {
                            default: (0, n.w5)((() => [(0, n.Uk)((0, r.zw)((0, i.SU)(v)), 1)])),
                            _: 1
                        }, 8, ["class"]), (0, n.Wm)(d.Z, null, {
                            default: (0, n.w5)((({
                                icon: t,
                                open: a,
                                spin: o
                            }) => [(0, n.Wm)(u.Z, {
                                class: (0, r.C_)(e.$style.chat),
                                onClick: e => k(a)
                            }, {
                                default: (0, n.w5)((() => [(0, n.Wm)(c.Z, {
                                    class: (0, r.C_)(e.$style.chatIcon),
                                    icon: t,
                                    spin: o
                                }, null, 8, ["class", "icon", "spin"])])),
                                _: 2
                            }, 1032, ["class", "onClick"])])),
                            _: 1
                        })], 2))
                    }
                }),
                b = {
                    root: "FixedSupportPanel_root_wN9Oj",
                    button: "FixedSupportPanel_button_jl91M",
                    call: "FixedSupportPanel_call_YCOxJ FixedSupportPanel_button_jl91M",
                    text: "FixedSupportPanel_text_dL73M FixedSupportPanel_button_jl91M",
                    chat: "FixedSupportPanel_chat_jibpb FixedSupportPanel_button_jl91M",
                    chatIcon: "FixedSupportPanel_chatIcon_bho3A"
                };
            var f = a(348118);
            const k = {};
            k["$style"] = b;
            const w = (0, f.Z)(v, [
                    ["__cssModules", k]
                ]),
                S = w
        },
        932116: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(917752),
                o = a(465749),
                r = a(348118);
            const i = (0, r.Z)(o.Z, [
                    ["render", n.s]
                ]),
                s = i
        },
        583582: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(166252),
                o = a(3577);
            const r = {
                key: 0,
                class: "icon-wrap"
            };

            function i(e, t, a, i, s, l) {
                const c = (0, n.up)("LoadingDots"),
                    d = (0, n.up)("VIcon");
                return (0, n.wg)(), (0, n.j4)((0, n.LL)(a.tag), {
                    class: (0, o.C_)(["button", l.classObject]),
                    style: (0, o.j5)(l.style),
                    disabled: a.disabled || null,
                    type: a.notPrevent || a.submit ? "submit" : "button",
                    to: a.to,
                    onClick: l.onClick
                }, {
                    default: (0, n.w5)((() => [a.loading ? ((0, n.wg)(), (0, n.j4)(c, {
                        key: 0
                    })) : ((0, n.wg)(), (0, n.iD)(n.HY, {
                        key: 1
                    }, [a.icon ? ((0, n.wg)(), (0, n.iD)("span", r, [(0, n.Wm)(d, {
                        inline: "",
                        icon: a.icon
                    }, null, 8, ["icon"])])) : (0, n.kq)("", !0), (0, n.WI)(e.$slots, "default", {}, void 0, !0)], 64))])),
                    _: 3
                }, 8, ["class", "style", "disabled", "type", "to", "onClick"])
            }
            var s = a(559166),
                l = a(361111);
            const c = ["default", "green", "secondary", "grey", "grey-modal", "blue", "blue-modal", "text-grey", "text-primary", "grey-light", "white", "yellow", "purple"],
                d = {
                    name: "VButton",
                    components: {
                        LoadingDots: l.Z,
                        VIcon: s.Z
                    },
                    props: {
                        active: Boolean,
                        className: {
                            type: String,
                            default: null
                        },
                        disabled: Boolean,
                        rounded: Boolean,
                        size: {
                            type: String,
                            default: null
                        },
                        type: {
                            type: String,
                            default: null
                        },
                        wide: Boolean,
                        notPrevent: Boolean,
                        submit: Boolean,
                        icon: {
                            type: String,
                            default: null
                        },
                        tag: {
                            type: String,
                            default: "button"
                        },
                        to: {
                            type: [Object, String],
                            default: null
                        },
                        squareSize: {
                            type: String,
                            default: null
                        },
                        theme: {
                            type: String,
                            default: "default",
                            validator: e => c.includes(e)
                        },
                        loading: Boolean
                    },
                    emits: ["click"],
                    computed: {
                        classObject() {
                            return {
                                active: this.active,
                                [this.className]: this.className,
                                disabled: this.disabled,
                                fullwidth: this.wide,
                                rounded: this.rounded,
                                [`size-${this.size}`]: this.size,
                                [this.type]: this.type,
                                square: this.squareSize,
                                [`theme-${this.theme}`]: this.theme
                            }
                        },
                        style() {
                            return {
                                "--square-size": this.squareSize
                            }
                        }
                    },
                    methods: {
                        onClick(e) {
                            this.notPrevent || e.preventDefault(), this.$emit("click", e)
                        }
                    }
                };
            var u = a(348118);
            const p = (0, u.Z)(d, [
                    ["render", i],
                    ["__scopeId", "data-v-9174f354"]
                ]),
                m = p
        },
        317384: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => T
            });
            var n = a(166252),
                o = a(602262),
                r = a(3577),
                i = a(185983),
                s = a(66037),
                l = a(280894),
                c = a(439928),
                d = a(262884),
                u = a(153415),
                p = a(791136);
            const m = (0, n.aZ)({
                    __name: "HeaderBalanceInfo",
                    props: {
                        isOpen: {
                            type: Boolean
                        }
                    },
                    setup(e) {
                        const t = (0, l.oR)(),
                            a = (0, o.Vh)((() => t.getters.user.currency)),
                            i = (0, o.Vh)((() => t.getters.balance)),
                            s = (0, d.Kq)(void 0, a),
                            c = (0, n.Fl)((() => (0, u.bN)(s, i.value)));
                        return (e, i) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, r.C_)([e.$style.root, (0, o.SU)(t).getters.isMobile && e.$style.mobile])
                        }, [(0, n._)("div", {
                            class: (0, r.C_)(e.$style.top)
                        }, [(0, n._)("div", {
                            class: (0, r.C_)(e.$style.content)
                        }, [(0, n._)("div", {
                            class: (0, r.C_)(e.$style.name)
                        }, (0, r.zw)(a.value), 3), (0, n.Wm)((0, o.SU)(p.Z), {
                            class: (0, r.C_)([e.$style.icon, e.isOpen && e.$style.iconOpen]),
                            size: "xs"
                        }, null, 8, ["class"])], 2)], 2), (0, n._)("div", {
                            class: (0, r.C_)(e.$style.balance)
                        }, (0, r.zw)(c.value), 3)], 2))
                    }
                }),
                _ = {
                    root: "HeaderBalanceInfo_root_LYN5f",
                    top: "HeaderBalanceInfo_top_pnHwQ",
                    content: "HeaderBalanceInfo_content_Fb3qB",
                    name: "HeaderBalanceInfo_name_u2NJV",
                    icon: "HeaderBalanceInfo_icon_tlDvI",
                    iconOpen: "HeaderBalanceInfo_iconOpen_KeFSi",
                    balance: "HeaderBalanceInfo_balance_Gw9TU",
                    mobile: "HeaderBalanceInfo_mobile_WlxOi"
                };
            var h = a(348118);
            const g = {};
            g["$style"] = _;
            const y = (0, h.Z)(m, [
                    ["__cssModules", g]
                ]),
                v = y;
            var b = a(577540),
                f = a(920346),
                k = a(7473);
            const w = ["onClick"],
                S = (0, n.aZ)({
                    __name: "HeaderBalance",
                    props: {
                        isMobileIconButton: {
                            type: Boolean
                        }
                    },
                    emits: ["onButtonClick", "onWidthUpdate"],
                    setup(e) {
                        const t = (0, l.oR)(),
                            a = (0, f.uP)(),
                            d = e => {
                                a.handleMainPageEvent("header", {
                                    element_name: "balance"
                                }), e()
                            };
                        return (e, a) => ((0, n.wg)(), (0, n.j4)(k.Z, {
                            middleware: [(0, o.SU)(i.cv)(8), (0, o.SU)(s.RR)(), (0, o.SU)(s.uY)()],
                            controlled: !0,
                            "close-on-outside": !0
                        }, {
                            tooltip: (0, n.w5)((({
                                toggle: e
                            }) => [(0, n.Wm)(b.Z, {
                                onClose: () => e()
                            }, null, 8, ["onClose"])])),
                            default: (0, n.w5)((({
                                ref: i,
                                toggle: s,
                                isOpen: l
                            }) => [(0, n._)("div", {
                                ref: i,
                                class: (0, r.C_)([e.$style.root, (0, o.SU)(t).getters.isMobile && e.$style.mobile])
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.wrapper)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.content)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.info),
                                onClick: e => d((() => s()))
                            }, [(0, n.Wm)(v, {
                                "is-open": l
                            }, null, 8, ["is-open"])], 10, w), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.buttonWrapper)
                            }, [(0, n.Wm)(c.Z, {
                                "is-mobile-icon-button": e.isMobileIconButton,
                                onOnWidthUpdate: a[0] || (a[0] = t => e.$emit("onWidthUpdate", t)),
                                onOnButtonClick: a[1] || (a[1] = t => e.$emit("onButtonClick"))
                            }, null, 8, ["is-mobile-icon-button"])], 2)], 2)], 2)], 2)])),
                            _: 1
                        }, 8, ["middleware"]))
                    }
                }),
                C = {
                    root: "HeaderBalance_root_iPUwa",
                    wrapper: "HeaderBalance_wrapper_b40Mz",
                    buttonWrapper: "HeaderBalance_buttonWrapper_lzaty",
                    content: "HeaderBalance_content_vcCP3",
                    info: "HeaderBalance_info_PbAHB",
                    mobile: "HeaderBalance_mobile_BulPf"
                },
                I = {};
            I["$style"] = C;
            const O = (0, h.Z)(S, [
                    ["__cssModules", I]
                ]),
                T = O
        },
        439928: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => A
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(280894),
                s = a(920346),
                l = a(951744),
                c = a(141094),
                d = a(762990),
                u = Object.defineProperty,
                p = Object.defineProperties,
                m = Object.getOwnPropertyDescriptors,
                _ = Object.getOwnPropertySymbols,
                h = Object.prototype.hasOwnProperty,
                g = Object.prototype.propertyIsEnumerable,
                y = (e, t, a) => t in e ? u(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                v = (e, t) => {
                    for (var a in t || (t = {})) h.call(t, a) && y(e, a, t[a]);
                    if (_)
                        for (var a of _(t)) g.call(t, a) && y(e, a, t[a]);
                    return e
                },
                b = (e, t) => p(e, m(t));
            const f = (e, t) => (0, n.h)(d.Z, b(v({}, t.attrs), {
                    initialWidth: 16,
                    initialHeight: 16,
                    innerHTML: '<path d="M9.38 8.708v1.103a2.76 2.76 0 002.758 2.759h2.207v.552a1.66 1.66 0 01-1.655 1.655H3.31A3.31 3.31 0 010 11.467V7.053a3.31 3.31 0 013.31-3.31h9.38c.91 0 1.655.739 1.655 1.655v.551h-2.207a2.76 2.76 0 00-2.759 2.759zm6.62 0v1.103a1.66 1.66 0 01-1.655 1.656h-2.207a1.66 1.66 0 01-1.655-1.656V8.708c0-.916.745-1.655 1.655-1.655h2.207c.42 0 .81.16 1.103.425.337.298.552.739.552 1.23zm-2.758.552a.553.553 0 00-.552-.552.553.553 0 00-.552.552c0 .303.248.551.552.551a.553.553 0 00.552-.551zm-1.87-7.735A1.67 1.67 0 0010.465.47a1.675 1.675 0 00-1.39.005L4.447 2.64h7.244l-.32-1.114z"/>'
                })),
                k = f,
                w = k;
            var S = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const C = (0, n.aZ)({
                    __name: "DepositButton",
                    props: {
                        isMobileIconButton: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["onButtonClick", "onWidthUpdate"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = e,
                            d = t,
                            u = (0, i.oR)(),
                            p = (0, r.iH)(null),
                            m = (0, r.iH)(null),
                            _ = (0, n.Fl)((() => a.isMobileIconButton && u.getters.isMobile)),
                            h = (0, s.Jr)("desktop.modal-account-management.deposit");
                        return (0, n.bv)((() => S(this, null, (function*() {
                            var e, t;
                            yield(0, l.n)(), d("onWidthUpdate", ((null == (e = m.value) ? void 0 : e.clientWidth) || 0) + 1 - ((null == (t = p.value) ? void 0 : t.clientWidth) || 0))
                        })))), (e, t) => ((0, n.wg)(), (0, n.j4)(c.Z, {
                            variant: "primary",
                            class: (0, o.C_)([e.$style.root, (0, r.SU)(u).getters.isMobile && e.$style.mobile]),
                            size: (0, r.SU)(u).getters.isMobile ? "xs" : "m",
                            onClick: t[0] || (t[0] = t => e.$emit("onButtonClick"))
                        }, {
                            start: (0, n.w5)((() => [(0, n._)("div", {
                                class: (0, o.C_)(!_.value && e.$style.hide)
                            }, [(0, n.Wm)((0, r.SU)(w), {
                                ref_key: "buttonIconRef",
                                ref: p,
                                size: "m",
                                class: (0, o.C_)(e.$style.icon)
                            }, null, 8, ["class"])], 2)])),
                            default: (0, n.w5)((() => [(0, n._)("span", {
                                ref_key: "buttonTextRef",
                                ref: m,
                                class: (0, o.C_)([e.$style.text, _.value && e.$style.hide])
                            }, (0, o.zw)((0, r.SU)(h)), 3)])),
                            _: 1
                        }, 8, ["class", "size"]))
                    }
                }),
                I = {
                    icon: "DepositButton_icon_XcPw7",
                    hide: "DepositButton_hide_uoOq1",
                    mobile: "DepositButton_mobile_AGLns",
                    text: "DepositButton_text_qLDEY"
                };
            var O = a(348118);
            const T = {};
            T["$style"] = I;
            const P = (0, O.Z)(C, [
                    ["__cssModules", T]
                ]),
                A = P
        },
        577540: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => We
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(966309),
                s = a(858509),
                l = a(322201),
                c = a(280894),
                d = a(546420),
                u = a.n(d),
                p = a(920346),
                m = a(262884);
            const _ = ["src"],
                h = (0, n.aZ)({
                    __name: "HeaderBalanceTooltipBonus",
                    setup(e) {
                        const t = (0, p.Jr)("common.bonuses.dropdownBonusState.title"),
                            a = (0, c.oR)(),
                            i = (0, r.Vh)((() => a.getters.bonusCasino)),
                            s = (0, r.Vh)((() => a.getters.user.currency)),
                            l = (0, m.Kq)(void 0, s),
                            d = (0, n.Fl)((() => l.value.format(i.value)));
                        return (e, a) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, o.C_)(e.$style.root)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.content)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.left)
                        }, [(0, n._)("img", {
                            src: (0, r.SU)(u()).src
                        }, null, 8, _)], 2), (0, n._)("div", {
                            class: (0, o.C_)(e.$style.right)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.title)
                        }, (0, o.zw)((0, r.SU)(t)), 3), (0, n._)("div", {
                            class: (0, o.C_)(e.$style.balance)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.balanceText)
                        }, (0, o.zw)(d.value), 3)], 2)], 2)], 2)], 2))
                    }
                }),
                g = {
                    content: "HeaderBalanceTooltipBonus_content_bJRR_",
                    left: "HeaderBalanceTooltipBonus_left_uGKjF",
                    right: "HeaderBalanceTooltipBonus_right_Y4mdf",
                    title: "HeaderBalanceTooltipBonus_title_eoqom",
                    balance: "HeaderBalanceTooltipBonus_balance_nWZ72",
                    balanceText: "HeaderBalanceTooltipBonus_balanceText_L67Yo",
                    balanceIcon: "HeaderBalanceTooltipBonus_balanceIcon_u1_FJ"
                };
            var y = a(348118);
            const v = {};
            v["$style"] = g;
            const b = (0, y.Z)(h, [
                    ["__cssModules", v]
                ]),
                f = b;
            var k = a(271500),
                w = a.n(k),
                S = a(612),
                C = a(909720),
                I = a(559166),
                O = a(81948),
                T = a(945436),
                P = a(305653),
                A = a(173870);
            const L = ["src"],
                B = (0, n.aZ)({
                    __name: "HeaderBalanceTooltipBonusNew",
                    emits: ["close"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = (0, T.gD)(),
                            i = (0, c.oR)(),
                            s = (0, l.tv)(),
                            d = (0, p.Jr)("common.bonuses.dropdownBonusState"),
                            u = t,
                            _ = (0, n.Fl)((() => a.activeBonusStatus === O.RY.ACTIVE)),
                            h = (0, n.Fl)((() => a.activeBonus && (_.value || a.isActiveBonusOnPause) ? a.activeBonus.amount : 0)),
                            g = (0, n.Fl)((() => a.activeBonus && (_.value || a.isActiveBonusOnPause) ? a.activeBonus.currency : i.getters.user.currency)),
                            y = (0, m.Kq)(void 0, g),
                            v = (0, n.Fl)((() => a.isActiveBonusCryptoCurrency ? y.value.format(h.value).replace(g.value, "").trim() : y.value.format(h.value))),
                            b = (0, n.Fl)((() => {
                                if (a.activeBonusStatus) return {
                                    [O.RY.ACTIVE]: "bonus/play",
                                    [O.RY.PAUSE]: "bonus/pause"
                                }[a.activeBonusStatus]
                            })),
                            f = () => {
                                s.push({
                                    name: i.getters.isMobile ? A.Z.BONUSES : P.Z.BONUSES
                                }), u("close")
                            };
                        return (e, t) => {
                            var i;
                            return (0, n.wg)(), (0, n.iD)("div", {
                                class: (0, o.C_)(e.$style.root)
                            }, [(0, n._)("div", {
                                class: (0, o.C_)(e.$style.main),
                                onClick: f
                            }, [(0, n._)("img", {
                                class: (0, o.C_)(e.$style.mainIcon),
                                src: (0, r.SU)(w()).src
                            }, null, 10, L), (0, n._)("div", {
                                class: (0, o.C_)(e.$style.mainContent)
                            }, [(0, n._)("div", {
                                class: (0, o.C_)(e.$style.title)
                            }, (0, o.zw)((0, r.SU)(d).title), 3), (0, n._)("p", {
                                class: (0, o.C_)(e.$style.value)
                            }, [b.value ? ((0, n.wg)(), (0, n.j4)(I.Z, {
                                key: 0,
                                icon: b.value,
                                class: (0, o.C_)(e.$style.valueIcon)
                            }, null, 8, ["icon", "class"])) : (0, n.kq)("", !0), (0, n._)("span", {
                                class: (0, o.C_)(e.$style.valueNumber)
                            }, (0, o.zw)(v.value), 3), (0, r.SU)(a).isActiveBonusCryptoCurrency ? ((0, n.wg)(), (0, n.j4)(C.Z, {
                                key: 1,
                                currency: g.value,
                                size: "s"
                            }, null, 8, ["currency"])) : (0, n.kq)("", !0)], 2), (0, n.Wm)(I.Z, {
                                class: (0, o.C_)(e.$style.mainButton),
                                icon: "chevron-right-new",
                                color: "#77829B",
                                size: 11
                            }, null, 8, ["class"])], 2)], 2), _.value || (0, r.SU)(a).isActiveBonusOnPause ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: (0, o.C_)(e.$style.statusBox)
                            }, [_.value && (null == (i = (0, r.SU)(a).activeBonus) ? void 0 : i.mustCommenceBy) ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: (0, o.C_)(e.$style.statusBoxActive)
                            }, [(0, n._)("span", {
                                class: (0, o.C_)(e.$style.statusBoxActiveTitle)
                            }, (0, o.zw)((0, r.SU)(d).availableTitle), 3), (0, n.Wm)(S.Z, {
                                class: (0, o.C_)(e.$style.statusBoxActiveValue),
                                "end-time": new Date((0, r.SU)(a).activeBonus.mustCommenceBy)
                            }, null, 8, ["class", "end-time"])], 2)) : (0, n.kq)("", !0), (0, r.SU)(a).isActiveBonusOnPause ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 1,
                                class: (0, o.C_)(e.$style.statusBoxSimpleText)
                            }, (0, o.zw)((0, r.SU)(d).paused), 3)) : (0, n.kq)("", !0)], 2)) : (0, n.kq)("", !0)], 2)
                        }
                    }
                }),
                M = {
                    main: "HeaderBalanceTooltipBonusNew_main_wIrW4",
                    mainIcon: "HeaderBalanceTooltipBonusNew_mainIcon_nFXIa",
                    mainContent: "HeaderBalanceTooltipBonusNew_mainContent_Y5aEX",
                    title: "HeaderBalanceTooltipBonusNew_title_SLaKq",
                    mainButton: "HeaderBalanceTooltipBonusNew_mainButton_M8r_R",
                    value: "HeaderBalanceTooltipBonusNew_value_wLKe5",
                    valueNumber: "HeaderBalanceTooltipBonusNew_valueNumber_XeZzu",
                    valueIcon: "HeaderBalanceTooltipBonusNew_valueIcon_Iqni_",
                    statusBox: "HeaderBalanceTooltipBonusNew_statusBox_K0LhD",
                    statusBoxActive: "HeaderBalanceTooltipBonusNew_statusBoxActive_Imfl2",
                    statusBoxActiveTitle: "HeaderBalanceTooltipBonusNew_statusBoxActiveTitle_YagWA",
                    statusBoxActiveValue: "HeaderBalanceTooltipBonusNew_statusBoxActiveValue_Y8P5s",
                    statusBoxSimpleText: "HeaderBalanceTooltipBonusNew_statusBoxSimpleText_yTMjY"
                },
                E = {};
            E["$style"] = M;
            const N = (0, y.Z)(B, [
                    ["__cssModules", E]
                ]),
                D = N;
            var x = a(381711),
                R = a(571488);
            const j = ["onClick"],
                F = (0, n.aZ)({
                    __name: "HeaderBalanceActions",
                    props: {
                        currency: {
                            default: x.NE.USD
                        }
                    },
                    emits: ["close"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = t,
                            r = e,
                            i = (0, p.Jr)("desktop.CurrencyActionDropdown"),
                            {
                                isMainCurrency: s,
                                deposit: l,
                                withdraw: c,
                                makePrimary: d
                            } = (0, R.P)(r.currency),
                            u = e => {
                                e(), a("close")
                            },
                            m = (0, n.Fl)((() => [...s.value ? [] : [{
                                text: i.makePrimary,
                                handler: () => {
                                    u(d)
                                }
                            }], {
                                text: i.withdrawal,
                                handler: () => {
                                    u(c)
                                }
                            }, {
                                text: i.deposit,
                                handler: () => {
                                    u(l)
                                }
                            }]));
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, o.C_)(e.$style.root)
                        }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(m.value, (t => ((0, n.wg)(), (0, n.iD)("div", {
                            key: t.text,
                            class: (0, o.C_)(e.$style.item),
                            onClick: t.handler
                        }, (0, o.zw)(t.text), 11, j)))), 128))], 2))
                    }
                }),
                $ = {
                    root: "HeaderBalanceActions_root_kXRQQ",
                    item: "HeaderBalanceActions_item_r5HB0"
                },
                z = {};
            z["$style"] = $;
            const U = (0, y.Z)(F, [
                    ["__cssModules", z]
                ]),
                Z = U;
            var G = a(153415),
                H = a(59394),
                q = a(185983),
                V = a(7473);
            const W = (0, n.aZ)({
                    __name: "TooltipSmall",
                    props: {
                        referenceRef: {},
                        floatingRef: {},
                        middleware: {},
                        placement: {},
                        strategy: {},
                        updateOptions: {},
                        arrowWidth: {},
                        arrowHeight: {},
                        delay: {},
                        callback: {},
                        controlled: {
                            type: Boolean,
                            default: !1
                        },
                        isOpen: {}
                    },
                    setup(e) {
                        return (e, t) => ((0, n.wg)(), (0, n.j4)(V.Z, {
                            placement: "bottom-end",
                            overlay: !1,
                            strategy: "fixed",
                            "hide-arrow": !0,
                            middleware: [(0, r.SU)(q.cv)({
                                mainAxis: 10,
                                crossAxis: 12
                            })],
                            "class-name": e.$style.root,
                            controlled: e.controlled,
                            "is-open": e.isOpen,
                            "update-options": e.updateOptions
                        }, {
                            tooltip: (0, n.w5)((t => [(0, n.WI)(e.$slots, "tooltip", (0, o.vs)((0, n.F4)(t)))])),
                            default: (0, n.w5)((t => [(0, n.WI)(e.$slots, "default", (0, o.vs)((0, n.F4)(t)))])),
                            _: 3
                        }, 8, ["middleware", "class-name", "controlled", "is-open", "update-options"]))
                    }
                }),
                Y = {
                    root: "TooltipSmall_root_G9aRK"
                },
                K = {};
            K["$style"] = Y;
            const J = (0, y.Z)(W, [
                    ["__cssModules", K]
                ]),
                X = J;
            var Q = a(762990),
                ee = Object.defineProperty,
                te = Object.defineProperties,
                ae = Object.getOwnPropertyDescriptors,
                ne = Object.getOwnPropertySymbols,
                oe = Object.prototype.hasOwnProperty,
                re = Object.prototype.propertyIsEnumerable,
                ie = (e, t, a) => t in e ? ee(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                se = (e, t) => {
                    for (var a in t || (t = {})) oe.call(t, a) && ie(e, a, t[a]);
                    if (ne)
                        for (var a of ne(t)) re.call(t, a) && ie(e, a, t[a]);
                    return e
                },
                le = (e, t) => te(e, ae(t));
            const ce = (e, t) => (0, n.h)(Q.Z, le(se({}, t.attrs), {
                    initialWidth: 16,
                    initialHeight: 16,
                    innerHTML: '<g clip-path="url(#clip0_109_2947)"><circle cx="8" cy="8" r="8"/><path d="M8 4a.8.8 0 00-.8.8v2.4H4.8a.8.8 0 100 1.6h2.4v2.4a.8.8 0 001.6 0V8.8h2.4a.8.8 0 000-1.6H8.8V4.8A.8.8 0 008 4z" fill="#fff"/></g><defs><clipPath id="clip0_109_2947"><path fill="transparent" d="M0 0h16v16H0z"/></clipPath></defs>'
                })),
                de = ce,
                ue = de;
            var pe = Object.defineProperty,
                me = Object.defineProperties,
                _e = Object.getOwnPropertyDescriptors,
                he = Object.getOwnPropertySymbols,
                ge = Object.prototype.hasOwnProperty,
                ye = Object.prototype.propertyIsEnumerable,
                ve = (e, t, a) => t in e ? pe(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                be = (e, t) => {
                    for (var a in t || (t = {})) ge.call(t, a) && ve(e, a, t[a]);
                    if (he)
                        for (var a of he(t)) ye.call(t, a) && ve(e, a, t[a]);
                    return e
                },
                fe = (e, t) => me(e, _e(t));
            const ke = (e, t) => (0, n.h)(Q.Z, fe(be({}, t.attrs), {
                    initialWidth: 16,
                    initialHeight: 16,
                    innerHTML: '<path d="M7.846 3.556C6.826 3.556 6 2.76 6 1.778S6.826 0 7.846 0s1.846.796 1.846 1.778-.826 1.778-1.846 1.778zM7.846 9.778C6.826 9.778 6 8.982 6 8s.826-1.778 1.846-1.778S9.692 7.018 9.692 8s-.826 1.778-1.846 1.778zM6 14.222C6 15.204 6.826 16 7.846 16s1.846-.796 1.846-1.778-.826-1.778-1.846-1.778S6 13.24 6 14.222z"/>'
                })),
                we = ke,
                Se = we,
                Ce = (0, n.aZ)({
                    __name: "HeaderBalanceTooltipCard",
                    props: {
                        currency: {},
                        type: {},
                        value: {},
                        isScrolling: {
                            type: Boolean
                        }
                    },
                    emits: ["close"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = t,
                            i = e,
                            s = (0, c.oR)(),
                            l = (0, p.dd)(),
                            d = (0, p.uP)(),
                            {
                                deposit: u
                            } = (0, R.P)(i.currency),
                            _ = (0, m.Kq)(void 0, (() => i.currency)),
                            h = (0, n.Fl)((() => (0, G.bN)(_, i.value))),
                            g = e => {
                                e(), a("close")
                            },
                            y = () => {
                                l.open(H.rQ, {
                                    onClose() {
                                        l.close()
                                    },
                                    props: {
                                        currency: i.currency,
                                        value: i.value
                                    }
                                })
                            },
                            v = () => {
                                g(u), d.handleMainPageEvent("header", {
                                    element_name: "deposit"
                                })
                            };
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, o.C_)(e.$style.root)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.wrapper)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.left)
                        }, [(0, n.Wm)(C.Z, {
                            "no-padding": "",
                            size: "m",
                            currency: e.currency
                        }, null, 8, ["currency"])], 2), (0, n._)("div", {
                            class: (0, o.C_)(e.$style.divider)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.dividerInner)
                        }, null, 2)], 2), (0, n._)("div", {
                            class: (0, o.C_)(e.$style.content)
                        }, (0, o.zw)(h.value), 3), (0, n._)("div", {
                            class: (0, o.C_)([e.$style.right, "main" === e.type && e.$style.green])
                        }, ["main" === e.type ? ((0, n.wg)(), (0, n.j4)((0, r.SU)(ue), {
                            key: 0,
                            size: "s",
                            onClick: v
                        })) : (0, r.SU)(s).getters.isMobile ? ((0, n.wg)(), (0, n.j4)((0, r.SU)(Se), {
                            key: 1,
                            onClick: t[0] || (t[0] = e => g(y))
                        })) : ((0, n.wg)(), (0, n.j4)(X, {
                            key: 2
                        }, {
                            tooltip: (0, n.w5)((({
                                toggle: t
                            }) => [(0, n.Wm)(Z, {
                                currency: e.currency,
                                onClose: e => g(t)
                            }, null, 8, ["currency", "onClose"])])),
                            default: (0, n.w5)((({
                                ref: t,
                                open: a,
                                close: o
                            }) => [(0, n.Wm)((0, r.SU)(Se), {
                                ref: t,
                                size: "s",
                                onMouseout: t => o(!e.isScrolling),
                                onMouseover: a
                            }, null, 8, ["onMouseout", "onMouseover"])])),
                            _: 1
                        }))], 2)], 2)], 2))
                    }
                }),
                Ie = {
                    root: "HeaderBalanceTooltipCard_root_we3KG",
                    wrapper: "HeaderBalanceTooltipCard_wrapper_rjQbk",
                    left: "HeaderBalanceTooltipCard_left_rWJlt",
                    divider: "HeaderBalanceTooltipCard_divider_XGgcC",
                    content: "HeaderBalanceTooltipCard_content_IoJ6a",
                    right: "HeaderBalanceTooltipCard_right_D26UI",
                    dividerInner: "HeaderBalanceTooltipCard_dividerInner_Z4u3W",
                    green: "HeaderBalanceTooltipCard_green_wqs1o"
                },
                Oe = {};
            Oe["$style"] = Ie;
            const Te = (0, y.Z)(Ce, [
                    ["__cssModules", Oe]
                ]),
                Pe = Te;
            var Ae = a(891674),
                Le = a.n(Ae),
                Be = a(232284),
                Me = a(645445);
            const Ee = ["src"],
                Ne = (0, n.aZ)({
                    __name: "HeaderBalanceTooltipSportBonus",
                    setup(e) {
                        var t, a;
                        const i = (0, p.Jr)("common.bonuses.dropdownFreebetsState"),
                            s = (0, c.oR)(),
                            {
                                nearestFreeBet: l
                            } = (0, Me.Ms)(3),
                            d = (0, m.Kq)(void 0, null != (a = null == (t = l.value) ? void 0 : t.currency) ? a : s.getters.user.currency),
                            u = (0, n.Fl)((() => {
                                var e, t;
                                return d.value.format(null != (t = null == (e = l.value) ? void 0 : e.amount) ? t : 0)
                            }));
                        return (e, t) => {
                            var a, s;
                            return (0, n.wg)(), (0, n.iD)("div", {
                                class: (0, o.C_)(e.$style.root)
                            }, [(0, n._)("div", {
                                class: (0, o.C_)(e.$style.wrapper)
                            }, [(0, n._)("div", {
                                class: (0, o.C_)(e.$style.content)
                            }, [(0, n._)("div", {
                                class: (0, o.C_)(e.$style.left)
                            }, [(0, n._)("img", {
                                src: (0, r.SU)(Le()).src
                            }, null, 8, Ee)], 2), (0, n._)("div", {
                                class: (0, o.C_)(e.$style.right)
                            }, [(0, n._)("div", {
                                class: (0, o.C_)(e.$style.title)
                            }, (0, o.zw)((0, r.SU)(i).title), 3), (0, n._)("div", {
                                class: (0, o.C_)(e.$style.balance)
                            }, [(0, n.Wm)(I.Z, {
                                icon: "play-round-green",
                                "prevent-fill": "",
                                size: 16
                            }), (0, n._)("div", {
                                class: (0, o.C_)(e.$style.balanceText)
                            }, (0, o.zw)(u.value), 3), (0, n.Wm)(Be.Z, {
                                active: "",
                                short: ""
                            })], 2)], 2)], 2), (0, r.SU)(l) ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: (0, o.C_)(e.$style.remaningTitle)
                            }, [(0, n.Uk)((0, o.zw)((0, r.SU)(i).availableTitle) + " ", 1), (0, n._)("b", null, [(0, n.Wm)(S.Z, {
                                "end-time": new Date(null != (s = null == (a = (0, r.SU)(l)) ? void 0 : a.expiresAt) ? s : "")
                            }, null, 8, ["end-time"])])], 2)) : (0, n.kq)("", !0)], 2), (0, n._)("div", null, [(0, n.Wm)(I.Z, {
                                size: 15,
                                class: (0, o.C_)(e.$style.icon),
                                icon: "chevron-right-new"
                            }, null, 8, ["class"])])], 2)
                        }
                    }
                }),
                De = {
                    root: "HeaderBalanceTooltipSportBonus_root_XUnEk",
                    wrapper: "HeaderBalanceTooltipSportBonus_wrapper_YUTnV",
                    remaningTitle: "HeaderBalanceTooltipSportBonus_remaningTitle_GoDkF",
                    content: "HeaderBalanceTooltipSportBonus_content_mhSms",
                    left: "HeaderBalanceTooltipSportBonus_left_jfGGP",
                    right: "HeaderBalanceTooltipSportBonus_right__9ucG",
                    title: "HeaderBalanceTooltipSportBonus_title_YWdds",
                    balance: "HeaderBalanceTooltipSportBonus_balance_MBb45",
                    balanceText: "HeaderBalanceTooltipSportBonus_balanceText_cP2lw",
                    icon: "HeaderBalanceTooltipSportBonus_icon_Wh8Y8"
                },
                xe = {};
            xe["$style"] = De;
            const Re = (0, y.Z)(Ne, [
                    ["__cssModules", xe]
                ]),
                je = Re;
            var Fe = a(474376),
                $e = a(894710),
                ze = a(141094),
                Ue = a(244935),
                Ze = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const Ge = (0, n.aZ)({
                    __name: "HeaderBalanceTooltip",
                    emits: ["close"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = t,
                            d = (0, c.oR)(),
                            u = (0, l.tv)(),
                            m = (0, p.dd)(),
                            _ = (0, p.uP)(),
                            {
                                isNewBonusBalance: h
                            } = (0, T.gD)(),
                            {
                                isFreeBetsContentVisible: g
                            } = (0, Me.Ms)(3),
                            y = (0, r.Vh)((() => d.getters.balance)),
                            v = (0, r.Vh)((() => d.getters.user)),
                            b = (0, r.Vh)((() => d.getters.activeBalanceSecondaryList)),
                            k = (0, r.Vh)((() => d.getters.isMobile)),
                            w = (0, r.iH)(null),
                            {
                                isScrolling: S
                            } = (0, i.vO3)(w),
                            C = (0, p.Jr)("desktop.modal-account-management.main"),
                            I = (0, p.Jr)("desktop.HeaderMulticurrency.walletsOther"),
                            O = (0, p.Jr)("desktop.HeaderMulticurrency.walletManagement"),
                            P = (0, p.Jr)("common.actions.close"),
                            L = () => Ze(this, null, (function*() {
                                a("close"), yield d.getters.isMobile ? u.push({
                                    name: A.Z.PROFILE_WALLETS
                                }) : m.open($e.ji), _.handleProfileEvent("button", {
                                    element_name: "acc_manage"
                                }), _.handleMainPageEvent("header", {
                                    element_name: "wallet_management"
                                })
                            })),
                            B = () => {
                                a("close"), u.push("/bets/live")
                            };
                        return (0, n.bv)((() => {
                            w.value && (k.value ? (0, s.Qp)(w.value) : (0, Fe.q)())
                        })), (0, n.Jd)((() => {
                            w.value && (k.value ? (0, s.tG)(w.value) : (0, Fe.A)())
                        })), (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, o.C_)(e.$style.root)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)([e.$style.block, e.$style.small])
                        }, [(0, r.SU)(h) ? ((0, n.wg)(), (0, n.j4)(D, {
                            key: 0,
                            onClose: t[0] || (t[0] = e => a("close"))
                        })) : ((0, n.wg)(), (0, n.j4)(f, {
                            key: 1
                        }))], 2), (0, n.Wm)(Ue.Z, {
                            class: (0, o.C_)(e.$style.divider)
                        }, null, 8, ["class"]), (0, r.SU)(g) ? ((0, n.wg)(), (0, n.iD)(n.HY, {
                            key: 0
                        }, [(0, n._)("div", {
                            class: (0, o.C_)([e.$style.block, e.$style.small])
                        }, [(0, n.Wm)(je, {
                            onClick: B
                        })], 2), (0, n.Wm)(Ue.Z, {
                            class: (0, o.C_)(e.$style.divider)
                        }, null, 8, ["class"])], 64)) : (0, n.kq)("", !0), (0, n._)("div", {
                            class: (0, o.C_)(e.$style.block)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.title)
                        }, (0, o.zw)((0, r.SU)(C)), 3), (0, n.Wm)(Pe, {
                            currency: v.value.currency,
                            type: "main",
                            value: y.value,
                            onClose: t[1] || (t[1] = e => a("close"))
                        }, null, 8, ["currency", "value"])], 2), b.value.length > 0 ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 1,
                            class: (0, o.C_)(e.$style.block)
                        }, [(0, n._)("div", {
                            class: (0, o.C_)(e.$style.title)
                        }, (0, o.zw)((0, r.SU)(I)), 3), (0, n._)("div", {
                            ref_key: "list",
                            ref: w,
                            class: (0, o.C_)(e.$style.list)
                        }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(b.value, (({
                            amount: i,
                            currency: s
                        }) => ((0, n.wg)(), (0, n.iD)("div", {
                            key: s,
                            class: (0, o.C_)(e.$style.card)
                        }, [((0, n.wg)(), (0, n.j4)(Pe, {
                            key: s,
                            currency: s,
                            type: "secondary",
                            "is-scrolling": (0, r.SU)(S),
                            value: i,
                            onClose: t[2] || (t[2] = e => a("close"))
                        }, null, 8, ["currency", "is-scrolling", "value"]))], 2)))), 128))], 2)], 2)) : (0, n.kq)("", !0), (0, n._)("div", {
                            class: (0, o.C_)(e.$style.button)
                        }, [(0, n.Wm)(ze.Z, {
                            size: "l",
                            variant: "secondary",
                            block: !0,
                            onClick: L
                        }, {
                            default: (0, n.w5)((() => [(0, n.Uk)((0, o.zw)((0, r.SU)(O)), 1)])),
                            _: 1
                        })], 2), (0, r.SU)(d).getters.isMobile ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 2,
                            class: (0, o.C_)(e.$style.button)
                        }, [(0, n.Wm)(ze.Z, {
                            size: "l",
                            variant: "secondaryOnBg",
                            block: !0,
                            onClick: t[3] || (t[3] = e => a("close"))
                        }, {
                            default: (0, n.w5)((() => [(0, n.Uk)((0, o.zw)((0, r.SU)(P)), 1)])),
                            _: 1
                        })], 2)) : (0, n.kq)("", !0)], 2))
                    }
                }),
                He = {
                    root: "HeaderBalanceTooltip_root_Z8Ehu",
                    title: "HeaderBalanceTooltip_title_rsMuu",
                    block: "HeaderBalanceTooltip_block_ZZEBf",
                    small: "HeaderBalanceTooltip_small_aWX_t",
                    list: "HeaderBalanceTooltip_list_PMRW0",
                    card: "HeaderBalanceTooltip_card_z8c29",
                    button: "HeaderBalanceTooltip_button_Ypdyd",
                    divider: "HeaderBalanceTooltip_divider_dXuDg"
                },
                qe = {};
            qe["$style"] = He;
            const Ve = (0, y.Z)(Ge, [
                    ["__cssModules", qe]
                ]),
                We = Ve
        },
        374711: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => S
            });
            var n = a(166252),
                o = a(602262),
                r = a(3577),
                i = a(185983),
                s = a(66037),
                l = a(966309),
                c = a(858509),
                d = a(280894),
                u = a(439928),
                p = a(577540),
                m = a(262884),
                _ = a(474376),
                h = a(7473),
                g = a(791136);
            const y = ["onClick"],
                v = (0, n.aZ)({
                    __name: "HeaderUser",
                    props: {
                        isMobileIconButton: {
                            type: Boolean
                        }
                    },
                    emits: ["onButtonClick", "onWidthUpdate"],
                    setup(e) {
                        const t = (0, d.oR)(),
                            a = (0, o.Vh)((() => t.getters.currency)),
                            v = (0, o.Vh)((() => t.getters.user)),
                            b = (0, o.Vh)((() => v.value.name)),
                            f = (0, o.Vh)((() => t.getters.isMobile)),
                            k = (0, l.KQJ)(),
                            w = (0, m.e0)(),
                            S = (0, n.Fl)((() => w.value(a.value))),
                            C = () => {
                                f.value ? (0, c.Qp)(k.value) : (0, _.q)()
                            },
                            I = () => {
                                f.value ? (0, c.tG)(k.value) : (0, _.A)()
                            };
                        return (e, a) => ((0, n.wg)(), (0, n.j4)(h.Z, {
                            middleware: [(0, o.SU)(i.cv)(8), (0, o.SU)(s.RR)(), (0, o.SU)(s.uY)()],
                            controlled: !0,
                            "close-on-outside": !0
                        }, {
                            tooltip: (0, n.w5)((({
                                toggle: e
                            }) => [(0, n.Wm)(p.Z, {
                                onClose: () => e(),
                                onVnodeMounted: C,
                                onVnodeUnmounted: I
                            }, null, 8, ["onClose"])])),
                            default: (0, n.w5)((({
                                ref: i,
                                toggle: s,
                                isOpen: l
                            }) => [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.dropdownWrapper)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)([e.$style.root, (0, o.SU)(t).getters.isMobile && e.$style.mobile])
                            }, [(0, n._)("div", {
                                ref: i,
                                class: (0, r.C_)(e.$style.wrapper)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.left)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.top)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.name)
                            }, (0, r.zw)(b.value), 3), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.dropdownWrapper)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.dropdown),
                                onClick: () => s()
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.dropdownInner)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.currency)
                            }, (0, r.zw)(S.value), 3), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.chevron)
                            }, [(0, n.Wm)((0, o.SU)(g.Z), {
                                class: (0, r.C_)([e.$style.icon, l && e.$style.iconOpen]),
                                size: "xs"
                            }, null, 8, ["class"])], 2)], 2)], 10, y)], 2)], 2), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.bottom)
                            }, [(0, n._)("div", {
                                class: (0, r.C_)(e.$style.id)
                            }, " ID " + (0, r.zw)(v.value.id), 3)], 2)], 2), (0, n._)("div", {
                                class: (0, r.C_)(e.$style.right)
                            }, [(0, n.Wm)(u.Z, {
                                "is-mobile-icon-button": e.isMobileIconButton,
                                onOnWidthUpdate: a[0] || (a[0] = t => e.$emit("onWidthUpdate", t)),
                                onOnButtonClick: a[1] || (a[1] = t => e.$emit("onButtonClick"))
                            }, null, 8, ["is-mobile-icon-button"])], 2)], 2)], 2)], 2)])),
                            _: 1
                        }, 8, ["middleware"]))
                    }
                }),
                b = {
                    root: "HeaderUser_root_CGOGh",
                    wrapper: "HeaderUser_wrapper_x4PEp",
                    right: "HeaderUser_right_kYr98",
                    left: "HeaderUser_left_dzP8g",
                    top: "HeaderUser_top_N6TX_",
                    bottom: "HeaderUser_bottom_ulqNP",
                    name: "HeaderUser_name_VDSmT",
                    dropdownWrapper: "HeaderUser_dropdownWrapper_NyVVh",
                    dropdown: "HeaderUser_dropdown_UQ6HX",
                    dropdownInner: "HeaderUser_dropdownInner_tpnmC",
                    currency: "HeaderUser_currency_IO48G",
                    chevron: "HeaderUser_chevron_RElw8",
                    icon: "HeaderUser_icon_ij1mq",
                    iconOpen: "HeaderUser_iconOpen_H_iVT",
                    id: "HeaderUser_id_Kz2qV",
                    mobile: "HeaderUser_mobile_aY2hy"
                };
            var f = a(348118);
            const k = {};
            k["$style"] = b;
            const w = (0, f.Z)(v, [
                    ["__cssModules", k]
                ]),
                S = w
        },
        622258: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(533686),
                o = a(20038),
                r = (a(348471), a(348118));
            const i = (0, r.Z)(o.Z, [
                    ["render", n.s],
                    ["__scopeId", "data-v-743ce5dd"]
                ]),
                s = i
        },
        994174: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(909666),
                o = a(727120),
                r = (a(283208), a(348118));
            const i = (0, r.Z)(o.Z, [
                    ["render", n.s],
                    ["__scopeId", "data-v-821b99e0"]
                ]),
                s = i
        },
        723852: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(676287),
                o = a(348815),
                r = (a(608277), a(348118));
            const i = (0, r.Z)(o.Z, [
                    ["render", n.s],
                    ["__scopeId", "data-v-f17cf0ca"]
                ]),
                s = i
        },
        244935: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => u
            });
            var n = a(166252),
                o = a(3577);

            function r(e, t) {
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, o.C_)(e.$style.divider)
                }, null, 2)
            }
            const i = {
                divider: "Divider_divider_lNyhY"
            };
            var s = a(348118);
            const l = {},
                c = {};
            c["$style"] = i;
            const d = (0, s.Z)(l, [
                    ["render", r],
                    ["__cssModules", c]
                ]),
                u = d
        },
        376739: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => y
            });
            var n = a(166252),
                o = a(602262),
                r = a(3577),
                i = a(749963);

            function s(e, t) {
                return (0, n.wg)(), (0, n.j4)(i.uT, {
                    name: "fade"
                }, {
                    default: (0, n.w5)((() => [(0, n.WI)(e.$slots, "default")])),
                    _: 3
                })
            }
            var l = a(348118);
            const c = {},
                d = (0, l.Z)(c, [
                    ["render", s]
                ]),
                u = d;
            var p = a(207945);
            const m = (0, n.aZ)({
                    __name: "Overlay",
                    setup(e) {
                        const t = (0, o.iH)([]),
                            a = (0, n.Fl)((() => t.value.length)),
                            i = e => {
                                t.value.includes(e) || t.value.push(e)
                            },
                            s = e => {
                                t.value = t.value.filter((t => t !== e))
                            },
                            l = (e, t) => {
                                t ? i(e) : s(e)
                            },
                            c = (0, n.Fl)((() => ({
                                open: i,
                                close: s,
                                toggle: l
                            })));
                        return (e, t) => ((0, n.wg)(), (0, n.j4)((0, o.SU)(p.p), {
                            value: c.value
                        }, {
                            default: (0, n.w5)((() => [(0, n.Wm)(u, null, {
                                default: (0, n.w5)((() => [a.value ? ((0, n.wg)(), (0, n.iD)("div", {
                                    key: 0,
                                    class: (0, r.C_)(e.$style.root)
                                }, null, 2)) : (0, n.kq)("", !0)])),
                                _: 1
                            }), (0, n.WI)(e.$slots, "default")])),
                            _: 3
                        }, 8, ["value"]))
                    }
                }),
                _ = {
                    root: "Overlay_root_oirUO"
                },
                h = {};
            h["$style"] = _;
            const g = (0, l.Z)(m, [
                    ["__cssModules", h]
                ]),
                y = g
        },
        7473: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            var n = a(455919),
                o = a(788530),
                r = a(348118);
            const i = {};
            i["$style"] = o.Z;
            const s = (0, r.Z)(n.Z, [
                    ["__cssModules", i]
                ]),
                l = s
        },
        358192: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => r
            });
            var n = a(600559);
            const o = n.Z,
                r = o
        },
        118518: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(50982)
        },
        553246: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(489783)
        },
        465749: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(739571)
        },
        20038: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(739486)
        },
        727120: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(568364)
        },
        348815: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(216964)
        },
        533686: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => n.s
            });
            var n = a(261713)
        },
        909666: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => n.s
            });
            var n = a(9686)
        },
        171589: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(676213)
        },
        324586: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(681227)
        },
        455919: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(37632)
        },
        600559: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(908554)
        },
        788530: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(694843)
        },
        35173: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(66196)
        },
        475892: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n.Z
            });
            var n = a(140987)
        },
        166232: (e, t, a) => {
            "use strict";
            a(286621)
        },
        348471: (e, t, a) => {
            "use strict";
            a(817606)
        },
        283208: (e, t, a) => {
            "use strict";
            a(945633)
        },
        608277: (e, t, a) => {
            "use strict";
            a(806200)
        },
        50982: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => C
            });
            var n = a(858509),
                o = a(602262),
                r = a(166252),
                i = a(322201),
                s = a(932256),
                l = a(529342),
                c = a(198347),
                d = a(474376),
                u = a(622258),
                p = a(994174),
                m = a(932077),
                _ = Object.defineProperty,
                h = Object.defineProperties,
                g = Object.getOwnPropertyDescriptors,
                y = Object.getOwnPropertySymbols,
                v = Object.prototype.hasOwnProperty,
                b = Object.prototype.propertyIsEnumerable,
                f = (e, t, a) => t in e ? _(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                k = (e, t) => {
                    for (var a in t || (t = {})) v.call(t, a) && f(e, a, t[a]);
                    if (y)
                        for (var a of y(t)) b.call(t, a) && f(e, a, t[a]);
                    return e
                },
                w = (e, t) => h(e, g(t)),
                S = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const C = {
                components: {
                    ColorScheme: m.Z
                },
                inject: ["$modal"],
                setup() {
                    const e = (0, i.yj)(),
                        {
                            handleModalQueryParameters: t
                        } = (0, l.G)(),
                        a = (0, o.Vh)((() => e.query.modal)),
                        n = (0, o.Vh)((() => e.query.open));
                    (0, r.YP)([a, n], (([e, a]) => {
                        (e || a) && t()
                    }), {
                        immediate: !0
                    })
                },
                data: () => ({
                    modals: [],
                    modalWrapper: []
                }),
                watch: {
                    "$store.state.modal.queue": {
                        handler: "onQueueChange",
                        deep: !0,
                        immediate: !0
                    }
                },
                mounted() {
                    this.FullscreenPreloader = this.$store.getters.isMobile ? p.Z : u.Z
                },
                methods: {
                    onQueueChange(e) {
                        return S(this, null, (function*() {
                            const t = e.filter((e => e.isVisible)).map((e => S(this, null, (function*() {
                                    return w(k({}, e), {
                                        component: (0, o.XI)((0, r.RC)({
                                            delay: 300,
                                            loader: e.component,
                                            loadingComponent: this.FullscreenPreloader
                                        }))
                                    })
                                })))),
                                a = yield Promise.all(t);
                            this.modals = a.reduce(((e, t, a) => {
                                const n = this.modals[a];
                                return e.push((null == n ? void 0 : n.name) === t.name ? n : t), e
                            }), []), 0 === this.modals.length && this.unlockScroll()
                        }))
                    },
                    onClose(e, t) {
                        this.$modal.close(e.name, t)
                    },
                    onCloseAll() {
                        this.$modal.closeAll()
                    },
                    onBackgroundClick(e) {
                        var t;
                        !1 !== (null == (t = e.options) ? void 0 : t.closeOnBackgroundClick) && this.$modal.close(null, {
                            isBackgroundClick: !0,
                            сloseType: c.Z.MISCLICK
                        })
                    },
                    lockScroll() {
                        this.$store.getters.isMobile ? ((0, n.Qp)(this.$el, {
                            allowTouchMove: e => {
                                while (e && e !== this.$el) {
                                    if (Object.prototype.hasOwnProperty.call(e.dataset, "bodyScrollLockIgnore")) return !0;
                                    e = e.parentElement
                                }
                                return !1
                            }
                        }), this.scroll = window.pageYOffset) : (0, d.q)()
                    },
                    unlockScroll() {
                        this.$store.getters.isMobile ? ((0, n.tG)(this.$el), window.scroll(0, this.scroll)) : (0, d.A)()
                    }
                },
                MODAL_DARKEN_BG: s.Fgf,
                MODAL_DARK_BG: s.sM4
            }
        },
        489783: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(559166);
            const o = {
                name: "Spinner",
                components: {
                    VIcon: n.Z
                },
                props: {
                    fontSize: {
                        type: String,
                        required: !1,
                        default: "1em"
                    },
                    marginTop: {
                        type: String,
                        required: !1,
                        default: "10px"
                    },
                    size: {
                        type: String,
                        default: "",
                        validator: e => ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", ""].includes(e)
                    },
                    color: {
                        type: String,
                        default: "#fff"
                    },
                    icon: {
                        type: String,
                        default: "spinner"
                    }
                },
                computed: {
                    spinnerClass() {
                        return {
                            [`size-${this.size}`]: !!this.size
                        }
                    },
                    style() {
                        return `font-size: ${this.fontSize}; margin-top: ${this.marginTop}; color: ${this.color}`
                    }
                }
            }
        },
        739571: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(756732);
            const o = {
                data: () => ({}),
                svgGradients: n
            }
        },
        739486: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(575913);
            const o = {
                components: {
                    Spinner: n.Z
                }
            }
        },
        568364: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(723852);
            const o = {
                components: {
                    VLoader: n.Z
                }
            }
        },
        216964: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(559166);
            const o = {
                components: {
                    VIcon: n.Z
                },
                props: {
                    center: {
                        type: Boolean
                    },
                    heightReduction: {
                        type: Number,
                        default: 0
                    },
                    size: {
                        type: String,
                        default: "20px"
                    }
                },
                computed: {
                    style() {
                        return {
                            "--v-loader__height-reduction": `${this.heightReduction}px`,
                            "--v-loader__size": this.size
                        }
                    }
                }
            }
        },
        26016: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => i
            });
            var n = a(166252),
                o = a(3577);
            const r = ["onClick"];

            function i(e, t, a, i, s, l) {
                const c = (0, n.up)("ColorScheme");
                return e.modals.length > 0 ? ((0, n.wg)(), (0, n.iD)("div", {
                    key: 0,
                    class: (0, o.C_)(e.$style.root)
                }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(e.modals, (t => {
                    var a, i;
                    return (0, n.wg)(), (0, n.iD)("div", {
                        key: t.name,
                        class: (0, o.C_)([e.$style.wrapper, (null == (a = t.meta) ? void 0 : a[e.$options.MODAL_DARKEN_BG]) && e.$style.darkenBg, (null == (i = t.meta) ? void 0 : i[e.$options.MODAL_DARK_BG]) && e.$style.darkBg])
                    }, [(0, n.Wm)(c, {
                        name: "light"
                    }, {
                        default: (0, n.w5)((() => {
                            var a;
                            return [(0, n._)("div", {
                                class: (0, o.C_)(e.$style.backdrop),
                                onClick: e => l.onBackgroundClick(t)
                            }, null, 10, r), ((0, n.wg)(), (0, n.j4)(n.Ob, null, [((0, n.wg)(), (0, n.j4)((0, n.LL)(t.component), (0, n.dG)({
                                class: e.$style.modal,
                                ref_for: !0
                            }, t.options.props, (0, n.mx)(null != (a = t.options.listeners) ? a : {}), {
                                onClose: e => l.onClose(t, e),
                                onCloseAll: l.onCloseAll,
                                onVnodeMounted: l.lockScroll
                            }), null, 16, ["class", "onClose", "onCloseAll", "onVnodeMounted"]))], 1024))]
                        })),
                        _: 2
                    }, 1024)], 2)
                })), 128))], 2)) : (0, n.kq)("", !0)
            }
        },
        451331: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => r
            });
            var n = a(166252),
                o = a(3577);

            function r(e, t, a, r, i, s) {
                const l = (0, n.up)("VIcon");
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, o.C_)(["spinner-container", s.spinnerClass])
                }, [(0, n.Wm)(l, {
                    class: "spinner",
                    icon: a.icon,
                    style: (0, o.j5)(s.style)
                }, null, 8, ["icon", "style"])], 2)
            }
        },
        917752: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => r
            });
            var n = a(166252);
            const o = ["innerHTML"];

            function r(e, t, a, r, i, s) {
                return (0, n.wg)(), (0, n.iD)("div", null, [(0, n._)("div", {
                    innerHTML: e.$options.svgGradients
                }, null, 8, o)])
            }
        },
        261713: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => i
            });
            var n = a(166252);
            const o = {
                    class: "fullscreen-loader"
                },
                r = {
                    class: "load-wrapper"
                };

            function i(e, t, a, i, s, l) {
                const c = (0, n.up)("Spinner");
                return (0, n.wg)(), (0, n.iD)("div", o, [(0, n._)("div", r, [(0, n.Wm)(c)])])
            }
        },
        9686: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => r
            });
            var n = a(166252);
            const o = {
                class: "fullscreen-loader"
            };

            function r(e, t, a, r, i, s) {
                const l = (0, n.up)("VLoader");
                return (0, n.wg)(), (0, n.iD)("div", o, [(0, n.Wm)(l)])
            }
        },
        676287: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => r
            });
            var n = a(166252),
                o = a(3577);

            function r(e, t, a, r, i, s) {
                const l = (0, n.up)("VIcon");
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, o.C_)(["loader", {
                        center: a.center
                    }]),
                    style: (0, o.j5)(s.style)
                }, [(0, n.Wm)(l, {
                    class: "icon-spinner",
                    icon: "spinner-3",
                    margin: "",
                    square: ""
                })], 6)
            }
        },
        835925: (e, t, a) => {
            "use strict";
            a.d(t, {
                S: () => i
            });
            var n = a(453434),
                o = a(909997);
            const r = new WeakMap,
                i = {
                    created(e, t) {
                        let a = t.value;
                        !t.arg || "number" !== typeof t.arg && Number.isNaN(Number.parseInt(t.arg, 10)) || (a = (0, n.Z)(t.value, Number.parseInt(t.arg, 10)));
                        const i = (0, o.Sp)((e => {
                            e.map((e => a(e)))
                        }));
                        i.observe(e), r.set(e, i)
                    },
                    unmounted(e) {
                        const t = r.get(e);
                        t && (t.unobserve(e), r.delete(e))
                    }
                }
        },
        443999: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => g
            });
            var n = a(932256),
                o = a(957009),
                r = a(495119),
                i = a(878417),
                s = a(383722),
                l = a(112808),
                c = a(894710),
                d = a(59394),
                u = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const p = (e, t) => u(void 0, null, (function*() {
                    var a;
                    const {
                        meta: l = {}
                    } = e;
                    if (o.Bp in l) {
                        yield Promise.all([t.rootGetters.promiseByName[r.l.AUTH], t.rootGetters.promiseByName[r.l.AUTH_TOKEN]]);
                        const c = l[n.bW2] && (0, s.j)(null == (a = e.options.props) ? void 0 : a.modalSettings),
                            d = (0, i.L)(),
                            u = (0, o.i3)(l[o.Bp], d.isAuthed);
                        !1 !== u || c || (yield Promise.reject(new Error("only authorized")))
                    }
                })),
                m = (e, t, a) => u(void 0, null, (function*() {
                    var o;
                    const {
                        meta: i = {}
                    } = e;
                    if (!0 === i[n.$qw] && (null == (o = l.appConfig.options.registrationAllowedCountries) ? void 0 : o.length) && (yield t.rootGetters.promiseByName[r.l.COUNTRY], !l.appConfig.options.registrationAllowedCountries.includes(t.rootState.country))) throw a(t.rootGetters.isMobile ? d.a1 : c.a1), new Error(`Registration forbidden guard. Registration allowed only in these countries ${l.appConfig.options.registrationAllowedCountries}`)
                })),
                _ = (e, t, a) => u(void 0, null, (function*() {
                    const {
                        meta: o = {}
                    } = e;
                    if (yield Promise.all([t.rootGetters.promiseByName[r.l.COUNTRY], t.rootGetters.promiseByName[r.l.COUNTRY_SUBDIVISION]]), !0 === o[n.LU8] && t.rootGetters.isSitePartiallyForbidden) throw a(t.rootGetters.isMobile ? d.X3 : c.X3), new Error("Forbidden auth guard. Authentication is restricted in you country")
                })),
                h = (e, t, a) => u(void 0, null, (function*() {
                    var o;
                    const {
                        meta: r = {}
                    } = e;
                    if (!0 === r[n.Z4M] && (null == (o = l.appConfig.modules.payments) ? void 0 : o.depositDisabled)) throw a(t.rootGetters.isMobile ? d.y2 : c.y2), new Error("Deposit guard. Deposit is disabled")
                }));

            function g(e, t, a) {
                return u(this, null, (function*() {
                    yield Promise.all([t.rootGetters.promiseByName[r.l.LANG], p(e, t), _(e, t, a), m(e, t, a), h(e, t, a)])
                }))
            }
        },
        736645: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => c
            });
            var n = a(479810),
                o = a(112808),
                r = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const i = (e = "") => {
                    var t;
                    return null != (t = e.split("/").find(Boolean)) ? t : ""
                },
                s = e => ["casino", "games"].includes(e);
            class l {
                constructor({
                    animationFrameTime: e = 225,
                    store: t
                } = {}) {
                    this.loadedMap = {}, this.cancelTokenSource = {}, this.animationFrameTime = e, this.animationIntervalId = null, this.titleBeforeAnimationStarted = "", this.currentFormattedPath = "", this.activeTitle = null, this.store = t
                }
                get currentLang() {
                    return this.store.getters.currentLang
                }
                get needToAnimateTitle() {
                    var e;
                    return (null == (e = this.activeTitle) ? void 0 : e.is_dynamic) || s(this.currentFormattedPath)
                }
                getStorageKey(e) {
                    return `${e}_${this.currentLang}`
                }
                loadedTitleForKey(e) {
                    return this.loadedMap[e]
                }
                animateTitle() {
                    this.stopTitleAnimation(), this.titleBeforeAnimationStarted = document.title;
                    const e = `${document.title} `,
                        t = e.length;
                    let a = 0;
                    this.animationIntervalId = setInterval((() => {
                        a = a < t ? a + 1 : 1, document.title = e.slice(a, t) + e.slice(0, a)
                    }), this.animationFrameTime)
                }
                stopTitleAnimation() {
                    var e, t;
                    clearInterval(this.animationIntervalId), document.title = null != (t = null == (e = this.activeTitle) ? void 0 : e.text) ? t : o.appConfig.options.defaultTitle || ""
                }
                getTitle(e) {
                    return r(this, null, (function*() {
                        this.cancelRequest(), this.cancelTokenSource = n.axios.CancelToken.source();
                        const t = {
                                text: o.appConfig.options.defaultTitle || "",
                                is_dynamic: s(e)
                            },
                            a = "";
                        try {
                            const {
                                data: {
                                    title: o
                                }
                            } = yield n.steadyApiClient.get(`/common${a}/title?path=${e}&lang=${this.currentLang}`, {
                                cancelToken: this.cancelTokenSource.token
                            });
                            return null != o ? o : t
                        } catch (r) {
                            return t
                        }
                    }))
                }
                cancelRequest() {
                    var e, t;
                    null == (t = (e = this.cancelTokenSource).cancel) || t.call(e)
                }
                applyTitle(e) {
                    document.title = e.text, this.activeTitle = e
                }
                cacheTitle(e, t) {
                    this.loadedMap[t] = e
                }
                updateTitle(e) {
                    return r(this, arguments, (function*(e, {
                        force: t = !1
                    } = {}) {
                        const a = i(e);
                        if (!t && this.currentFormattedPath === a) return;
                        this.currentFormattedPath = a;
                        const o = this.getStorageKey(a),
                            r = this.loadedTitleForKey(o);
                        if (r) this.applyTitle(r);
                        else try {
                            const e = yield this.getTitle(a);
                            this.applyTitle(e), this.cacheTitle(e, o)
                        } catch (s) {
                            if (n.axios.isCancel(s)) return void console.error("Title request canceled", {
                                err: s
                            });
                            console.warn("Error loading title:", {
                                err: s
                            })
                        }
                    }))
                }
            }
            const c = {
                install(e, {
                    router: t,
                    store: a
                }) {
                    const n = new l({
                        store: a
                    });
                    let o, r;

                    function i() {
                        n.needToAnimateTitle && (document[o] ? n.animateTitle() : n.stopTitleAnimation())
                    }
                    t.beforeEach(((e, t, a) => {
                        e.path !== t.path && n.updateTitle(e.path), a()
                    })), t.isReady().then((() => {
                        n.updateTitle(t.currentRoute.value.path)
                    })), a.watch(((e, t) => t.currentLang), (() => n.updateTitle(t.currentRoute.path))), void 0 !== document.hidden ? (o = "hidden", r = "visibilitychange") : void 0 !== document.msHidden ? (o = "msHidden", r = "msvisibilitychange") : void 0 !== document.webkitHidden && (o = "webkitHidden", r = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === o ? console.warn("Browser does not support awesome title animation feature.") : document.addEventListener(r, i, !1)
                }
            }
        },
        957009: (e, t, a) => {
            "use strict";
            a.d(t, {
                Bp: () => n,
                XC: () => o,
                i3: () => r
            });
            const n = Symbol("Authentication rule"),
                o = Symbol("Authentication required"),
                r = (e, t) => void 0 === e || "boolean" === typeof e && e === t
        },
        470575: (e, t, a) => {
            "use strict";
            a.d(t, {
                L: () => o
            });
            var n = a(909997);
            const o = {
                install(e) {
                    e.config.globalProperties.$googleTagManager = n.L_, e.provide("$googleTagManager", n.L_)
                }
            }
        },
        283779: (e, t, a) => {
            "use strict";
            a.d(t, {
                b: () => n
            });
            const n = Symbol("Language rule")
        },
        922810: (e, t, a) => {
            "use strict";
            a.d(t, {
                Y: () => i
            });
            var n = a(198876),
                o = a(495119),
                r = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const i = {
                install(e, t) {
                    return r(this, arguments, (function*(e, {
                        store: t,
                        router: a
                    }) {
                        var r, i;
                        yield t.getters.promiseByName[o.l.AUTH], n["default"].controller.registerDeleteTokenCallback(), n["default"].controller.registerSaveTokenCallback(), null == (i = (r = n["default"].controller).registerRouter) || i.call(r, a)
                    }))
                }
            }
        },
        957079: (e, t, a) => {
            "use strict";
            a.d(t, {
                o: () => l
            });
            var n = a(166252),
                o = a(884297),
                r = a(878417),
                i = a(656459),
                s = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const l = {
                install(e, {
                    store: t
                }) {
                    const a = () => {
                            o.J_.remove(o.b4), o.J_.remove(o.eT)
                        },
                        l = (0, r.L)();
                    (0, n.YP)((() => l.isAuthed), (e => s(this, null, (function*() {
                        if (!e) return;
                        const n = o.J_.get(o.b4),
                            r = o.J_.get(o.eT);
                        if (n && r) try {
                            yield t.getters.socket.send((0, i.ON)("auth-oauth"), {
                                OAuthKey: n,
                                OAuthClient: r
                            })
                        } catch (s) {
                            console.error("Unable to store OAuth data", s)
                        } finally {
                            a()
                        }
                    })))), window.addEventListener("beforeunload", a)
                }
            }
        },
        952425: (e, t, a) => {
            "use strict";
            a.d(t, {
                W: () => n
            });
            const n = Symbol("Authentication rule")
        },
        54793: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => f
            });
            var n = a(932256),
                o = a(957009),
                r = a(283779),
                i = a(952425),
                s = a(495119),
                l = a(878417),
                c = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const d = e => c(void 0, [e], (function*({
                    to: e
                }) {
                    const t = e.matched.some((e => !0 === e.meta[o.Bp]));
                    if (!t) return !0;
                    const {
                        isAuthedPromise: a
                    } = (0, l.L)();
                    return a()
                })),
                u = e => c(void 0, [e], (function*({
                    to: e,
                    store: t
                }) {
                    return yield t.getters.promiseByName[s.l.LANG], e.matched.every((e => {
                        const a = e.meta[r.b];
                        return null == a || a.includes(t.getters.currentLang)
                    }))
                })),
                p = e => c(void 0, [e], (function*({
                    to: e,
                    store: t
                }) {
                    const a = e.matched.filter((e => !!e.meta[n.cAy]));
                    return 0 === a.length || (yield t.getters.promiseByName[s.l.COUNTRY], a.every((e => t.getters.isCountryAllowed(e.meta[n.cAy]))))
                })),
                m = e => c(void 0, [e], (function*({
                    to: e,
                    store: t
                }) {
                    const a = e.matched.some((e => !0 === e.meta[i.W]));
                    return !a || (yield Promise.all([t.getters.promiseByName[s.l.AUTH], t.getters.promiseByName[s.l.AUTH_TOKEN]]), t.getters["permissions/isTester"])
                })),
                _ = e => c(void 0, [e], (function*({
                    to: e,
                    store: t
                }) {
                    const a = e => !0 === e.meta[n.r4l],
                        o = e.matched.some((e => a(e)));
                    return !o || (yield t.getters.promiseByName[s.l.APP_HASH_DATA], !t.getters.isBlockable)
                })),
                h = e => c(void 0, [e], (function*({
                    to: e,
                    store: t
                }) {
                    var a;
                    const o = null == (a = e.matched.find((e => {
                        var t;
                        return null == (t = e.meta) ? void 0 : t[n.$fK]
                    }))) ? void 0 : a.meta[n.$fK];
                    return !o || (t.dispatch("modal/open", {
                        name: o
                    }), !1)
                }));
            var g = a(63619),
                y = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));

            function v(e, t, a) {
                const {
                    query: {
                        tg_hash: n
                    }
                } = e;
                n && (delete e.query.tg_hash, a.commit("setTelegramHash", n), t.replace(e))
            }
            const b = (e, t, a, o, r) => y(void 0, null, (function*() {
                    var i;
                    try {
                        v(e, o, r), delete e.query["auth-token"], t.meta[n.rEh] || t.params.dontSavePrevRoute || !t.name || (0, g.L)(t), e.name !== t.name && (null == (i = r.getters.socket) || i.abortHttp()), null === r.getters.isDesktopApp && r.commit("setIsDesktopApp", e.query.desktop);
                        const s = yield Promise.all([h({
                            to: e,
                            store: r
                        }), u({
                            to: e,
                            store: r
                        }), d({
                            to: e
                        }), m({
                            to: e,
                            store: r
                        }), _({
                            to: e,
                            store: r
                        }), p({
                            to: e,
                            store: r
                        })]);
                        a(s.every(Boolean) || "/")
                    } catch (s) {
                        console.error("Routing guard failed", {
                            err: s
                        })
                    }
                })),
                f = b
        },
        384714: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => b
            });
            var n = a(932256),
                o = a(178160);
            const r = e => e.slice(1).split(".").map(Number),
                i = e => e && /^v[0-9]+.[0-9]+.[0-9]+$/.test(e);
            var s = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const l = "v4.0.2961",
                [c, d, u] = r(l),
                p = 3e5;
            let m, _, h = !1;

            function g(e) {
                return !e.matched.some((e => e.meta[n.asJ]))
            }

            function y() {
                (0, o.W)({
                    module: "CheckVersionService"
                }), window.location.reload()
            }

            function v(e) {
                return s(this, null, (function*() {
                    let t;
                    try {
                        const e = yield fetch("/version.json", {
                            headers: {
                                "Cache-Control": "no-cache"
                            }
                        }).then((e => e.json()));
                        t = e.version
                    } catch (_) {
                        throw new Error("version.json file is not found or can't be parsed.")
                    }
                    if (!i(t)) return;
                    const [a, n, o] = r(t), s = c !== a, l = d !== n, p = u > o;
                    if (s) y();
                    else if (l || p) {
                        if (g(e.currentRoute)) return void y();
                        m = !0
                    }
                }))
            }
            const b = {
                start: e => {
                    try {
                        if (!e) return void console.error("Version checker. Impossible to start, router is needed.");
                        if (!i(l)) return void console.error("Version checker. Impossible to start, current tag is not correct.", l);
                        e.beforeEach(((e, t, a) => {
                            if (h) return m && g(e) ? (y(), void a(!1)) : void a();
                            a()
                        })), _ = setInterval((() => s(void 0, null, (function*() {
                            try {
                                yield v(e)
                            } catch (t) {
                                console.error("Version checker.", t.message)
                            }
                        }))), p), h = !0
                    } catch (t) {
                        console.error("Version checker.", t.message)
                    }
                },
                stop: () => {
                    clearInterval(_), h = !1
                }
            }
        },
        417105: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => r
            });
            var n = a(932256),
                o = a(27720);
            class r {
                constructor({
                    id: e,
                    factor: t,
                    name: a,
                    description: o,
                    isDisabled: r,
                    outcome: i,
                    event: s,
                    group: l,
                    freeBet: c,
                    amount: d = null
                }) {
                    this.resultId = e, this.factor = t, this.name = a, this.description = null == o ? void 0 : o.trim(), this.isDisabled = r, this.outcome = i, this.providerId = n.mGg, this.sportId = l.id, this.event = s, this.group = l, this.amount = d, this.freeBet = c, this.maxBetAmount = {}
                }
                get id() {
                    return this.resultId.toString()
                }
                set id(e) {
                    this.resultId = e
                }
                get coefficient() {
                    return +this.factor
                }
                get amountDto() {
                    return {
                        id: this.resultId,
                        providerId: this.providerId,
                        coefficient: this.coefficient,
                        match: {
                            categoryId: 0,
                            matchId: 0,
                            sportId: 0,
                            tournamentId: 0
                        },
                        odd: {
                            service: "",
                            typeId: 0,
                            subTypeId: 0,
                            specialValue: "",
                            outCome: ""
                        }
                    }
                }
                get dto() {
                    return {
                        id: this.resultId,
                        coefficient: this.factor,
                        providerId: this.providerId
                    }
                }
                get modelView() {
                    var e;
                    const t = [...new Set(null == (e = this.event.results) ? void 0 : e.map((e => e.name)))],
                        a = this.description || t[0],
                        n = this.description ? null : t[1];
                    return new o.Z({
                        id: this.id,
                        coefficient: this.factor,
                        isLive: !1,
                        name: this.name,
                        firstString: a,
                        secondString: n,
                        bottomString: `${this.group.name}. ${this.event.name}`,
                        isDisabled: this.isDisabled,
                        amount: this.amount,
                        freeBet: this.freeBet,
                        maxBetAmount: this.maxBetAmount,
                        providerId: this.providerId,
                        sportId: this.sportId
                    })
                }
            }
        },
        84018: (e, t, a) => {
            "use strict";
            a.d(t, {
                ND: () => i,
                WE: () => c,
                cO: () => l,
                ci: () => s,
                ty: () => d
            });
            var n = a(934405);
            const o = [0, 1],
                r = ({
                    id: e,
                    eventId: t,
                    title: a,
                    description: n,
                    factor: o,
                    isDisabled: r,
                    outcome: i
                }) => ({
                    id: e,
                    eventId: t,
                    name: a,
                    description: n,
                    factor: o,
                    isDisabled: r,
                    outcome: i
                }),
                i = (0, n.IM)({
                    id: (0, n.A)(0),
                    eventId: (0, n.A)(0),
                    name: (0, n.YO)(),
                    description: (0, n.Z_)(),
                    factor: (0, n.Cz)(),
                    isDisabled: (0, n.kw)(o),
                    outcome: (0, n.Rx)()
                }),
                s = ({
                    id: e,
                    groupId: t,
                    title: a,
                    isDisabled: n,
                    isCalculated: o,
                    startAt: i,
                    stopAt: s,
                    results: l = [],
                    rank: c = 0
                } = {}) => ({
                    id: e,
                    groupId: t,
                    name: a,
                    isDisabled: n,
                    isCalculated: o,
                    startAt: i,
                    stopAt: s,
                    results: l.map((e => r(e))),
                    rank: c
                }),
                l = (0, n.IM)({
                    id: (0, n.A)(0),
                    groupId: (0, n.A)(0),
                    name: (0, n.YO)(),
                    isDisabled: (0, n.kw)(o),
                    isCalculated: (0, n.kw)(o),
                    startAt: (0, n.Nt)(),
                    stopAt: (0, n.Nt)(),
                    results: (0, n.CT)(i),
                    rank: (0, n.d7)(0)
                }),
                c = ({
                    id: e,
                    title: t,
                    parentId: a,
                    events: n
                }) => ({
                    id: e,
                    name: t,
                    parentId: a,
                    hasEvents: n.length > 0
                }),
                d = (0, n.IM)({
                    id: (0, n.A)(0),
                    name: (0, n.YO)(),
                    parentId: (0, n.wY)((0, n.A)(0)),
                    hasEvents: (0, n.Xg)()
                })
        },
        27720: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            class n {
                constructor({
                    id: e,
                    name: t,
                    coefficient: a,
                    isLive: n,
                    firstString: o,
                    secondString: r,
                    bottomString: i,
                    isDisabled: s,
                    amount: l,
                    maxBetAmount: c,
                    sportId: d,
                    sportTagKey: u,
                    matchId: p,
                    providerId: m = null,
                    match: _,
                    sportIconUrl: h,
                    freeBet: g = null
                }) {
                    this.id = e, this.name = t, this.coefficient = a, this.isLive = n, this.firstString = o, this.secondString = r, this.bottomString = i, this.isDisabled = s, this.amount = l, this.maxBetAmount = c, this.sportId = d, this.sportTagKey = u, this.matchId = p, this.match = _, this.providerId = m, this.sportIconUrl = h, this.freeBet = g
                }
            }
        },
        669671: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = (e, t) => {
                const a = e.length,
                    n = [];
                for (let o = 0; o < a; o += t) {
                    const a = e.slice(o, o + t);
                    n.push(a)
                }
                return n
            }
        },
        407760: (e, t, a) => {
            "use strict";
            a.d(t, {
                Gi: () => d,
                Tg: () => c,
                oi: () => l
            });
            var n = a(374221),
                o = a(87783),
                r = a(520287),
                i = a(438643),
                s = a(112808);
            const l = e => {
                    var t, a, n, o;
                    const s = (null != (t = e.country) ? t : "").toLowerCase(),
                        l = r.hW.find((e => e.code === s)),
                        c = l ? s.toUpperCase() : null,
                        d = (null != (a = e.currency) ? a : "").toUpperCase(),
                        u = (0, i.HN)(d) ? d : i.a7;
                    let p = null != (n = e.phonePrefix) ? n : "";
                    p = p.includes("+") ? p : `+${p}`;
                    const m = (null == l ? void 0 : l.prefix) === p ? l : null != (o = r.hW.find((e => e.prefix === p))) ? o : null;
                    return u && m && c ? {
                        countryCode: c,
                        currency: u,
                        phoneCountry: m
                    } : null
                },
                c = (e, t, a) => {
                    let i = r.hW;
                    const s = t.replace("+", "");
                    if ((null == e ? void 0 : e.length) && (i = r.hW.filter((t => e.includes(t.code)))), s) {
                        const e = /^\d+/.test(s),
                            t = new n.Z(i, e && a ? {
                                threshold: 0,
                                keys: ["prefix"]
                            } : {
                                threshold: .3,
                                keys: ["name"]
                            });
                        i = (0, o.Z)(t.search(e ? `+${s}` : s).map((({
                            item: e
                        }) => e)), "code")
                    }
                    return i
                },
                d = e => {
                    var t, a;
                    const n = null != (t = s.appConfig.options.defaultCountry) ? t : e,
                        o = null != (a = r.hW.find((e => e.code === n))) ? a : r.hW[0];
                    return l({
                        country: o.code,
                        currency: i.a7,
                        phonePrefix: o.prefix
                    })
                }
        },
        570834: (e, t, a) => {
            "use strict";
            a.d(t, {
                CouponNotificationsKeys: () => i,
                CouponStatusTypes: () => l,
                W: () => r,
                h: () => s
            });
            var n = a(417105),
                o = a(655528);
            const r = [n.Z, o.Z],
                i = Object.freeze({
                    BET_ACCEPTED: Symbol("coupon-notification:bet-accepted"),
                    REMOVED: Symbol("coupon-notification:removed")
                }),
                s = {
                    [i.BET_ACCEPTED]: {
                        defaultTime: 3,
                        timerId: null
                    },
                    [i.REMOVED]: {
                        defaultTime: 5,
                        timerId: null
                    }
                },
                l = Object.freeze({
                    SUCCESS: Symbol("coupon-status:success"),
                    ERROR: Symbol("coupon-status:error"),
                    NOTIFY: Symbol("coupon-status:notify"),
                    DISABLED: Symbol("coupon-status:disabled"),
                    LOADING: Symbol("coupon-status:loading")
                })
        },
        923741: (e, t, a) => {
            "use strict";
            a.d(t, {
                Bf: () => n,
                PZ: () => i,
                RU: () => o,
                Zj: () => r
            });

            function n(e, t) {
                if (!(e instanceof HTMLElement) || !t) return;
                const a = window.getComputedStyle(e);
                let n = t;
                return Array.isArray(n) || (n = [n]), Object.fromEntries(n.map((e => [e, a[e]])))
            }

            function o(e) {
                return null == e ? null : 0 !== e.clientHeight && e.scrollHeight > e.clientHeight ? e : o(e.parentNode)
            }
            const r = (e, t) => {
                    if (null === e || e === t) return {
                        top: 0,
                        left: 0
                    };
                    const {
                        offsetLeft: a,
                        offsetTop: n,
                        offsetParent: o
                    } = e, {
                        left: i,
                        top: s
                    } = r(o, t);
                    return {
                        top: n + s,
                        left: a + i
                    }
                },
                i = e => {
                    const {
                        top: t,
                        left: a,
                        bottom: n,
                        right: o
                    } = e.getBoundingClientRect();
                    return t >= 0 && a >= 0 && n <= (window.innerHeight || document.documentElement.clientHeight) && o <= (window.innerWidth || document.documentElement.clientWidth)
                }
        },
        685491: (e, t, a) => {
            "use strict";
            a.d(t, {
                FW: () => h,
                Gr: () => b,
                IE: () => g,
                PA: () => v,
                ae: () => y,
                o6: () => _
            });
            var n = a(470781),
                o = a(301374),
                r = Object.defineProperty,
                i = Object.defineProperties,
                s = Object.getOwnPropertyDescriptors,
                l = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                u = (e, t, a) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                p = (e, t) => {
                    for (var a in t || (t = {})) c.call(t, a) && u(e, a, t[a]);
                    if (l)
                        for (var a of l(t)) d.call(t, a) && u(e, a, t[a]);
                    return e
                },
                m = (e, t) => i(e, s(t));
            const _ = ({
                    S1: e,
                    S2: t,
                    Sc1: a,
                    Sc2: n,
                    name: o
                } = {}) => ({
                    Sc1: e || a || 0,
                    Sc2: t || n || 0,
                    name: o
                }),
                h = e => {
                    const t = "string" === typeof e ? JSON.parse(e) : e;
                    return t.map((e => _(e)))
                },
                g = (e = {}, t = void 0) => {
                    var a;
                    const n = p({}, e);
                    return Object.prototype.hasOwnProperty.call(n, "periodsScore") && (n.scorePeriodList = h(n.periodsScore)), Object.prototype.hasOwnProperty.call(n, "matchScore") && (n.scoreTotal = _(n.matchScore)), Object.prototype.hasOwnProperty.call(n, "dateOfMatch") && (n.startDateTime = new Date(1e3 * n.dateOfMatch)), Object.prototype.hasOwnProperty.call(n, "homeTeamId") && (n.teamIdFirst = n.homeTeamId), Object.prototype.hasOwnProperty.call(n, "awayTeamId") && (n.teamIdSecond = n.awayTeamId), Object.prototype.hasOwnProperty.call(n, "homeTeamName") && (n.teamNameFirst = n.homeTeamName), Object.prototype.hasOwnProperty.call(n, "awayTeamName") && (n.teamNameSecond = n.awayTeamName), Object.prototype.hasOwnProperty.call(n, "activeTeamId") && (n.activeTeam = n.activeTeamId), n.showOnPrematchPage = null != (a = null != t ? t : e.showOnPrematchPage) && a, n
                },
                y = (e, t) => (0, o.Z)(p({}, g(e, t))),
                v = (e, {
                    baseOddsConfig: t
                }) => {
                    const a = [];
                    if (e && t) {
                        let e = "";
                        for (const o of t) {
                            if (o.isSpecialValue) {
                                const {
                                    oddTypeName: t
                                } = o.oddsMap || o.oddType;
                                a.push({
                                    en: t,
                                    ru: t,
                                    uniqueId: t
                                }), e = t
                            }
                            for (const {
                                    title: t
                                } of o.cellList) a.push(m(p({}, t), {
                                uniqueId: `${e}${JSON.stringify(t)}`
                            }));
                            (0, n.bf)(a)
                        }
                    }
                    return a
                },
                b = e => e.sort(((e, t) => new Date(e.startDateTime) - new Date(t.startDateTime)))
        },
        383722: (e, t, a) => {
            "use strict";
            a.d(t, {
                j: () => l,
                n: () => c
            });
            var n = a(520287),
                o = a(438643),
                r = a(682736),
                i = a(735292);
            const s = 2,
                l = e => e && e.tab === r.AE && o.Hw.includes(e.currency) && n.hW.map((e => e.code)).includes(e.country) && Boolean(e.autoSubmit),
                c = e => e && e.tab === r.wg && e.step === s && i.Lw.map((e => e.code)).includes(e.social) && o.Hw.includes(e.currency)
        },
        292108: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ek: () => b,
                Ky: () => k,
                O4: () => _,
                cZ: () => m,
                fb: () => p,
                h9: () => g,
                j2: () => v,
                vQ: () => S,
                vq: () => f,
                yM: () => w
            });
            var n = Object.defineProperty,
                o = Object.defineProperties,
                r = Object.getOwnPropertyDescriptors,
                i = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                c = (e, t, a) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                d = (e, t) => {
                    for (var a in t || (t = {})) s.call(t, a) && c(e, a, t[a]);
                    if (i)
                        for (var a of i(t)) l.call(t, a) && c(e, a, t[a]);
                    return e
                },
                u = (e, t) => o(e, r(t));
            const p = "hardcodedSortingKey",
                m = -10,
                _ = "sortingKey",
                h = "burger-divider",
                g = Object.freeze(u(d({
                    HOME: "home",
                    LIVE: "live",
                    LINE: "line",
                    CASINO: "casino",
                    LIVE_GAMES: "liveGames",
                    CYBERSPORT: "cyberSport",
                    INVEST: "invest",
                    GAMES: "games",
                    TRADING: "trading",
                    FASTSPORT: "fastsport",
                    TVBET: "tvbet",
                    BETGAMES: "betGames",
                    VSPORT: "vSport",
                    POKER: "poker",
                    TV: "tv",
                    STATISTICS: "statistics",
                    RESULTS: "results"
                }, {
                    FANTASY_SPORT: "fantasySport"
                }), {
                    PROMO_LANDING_VIP_TOURNAMENT: "promoLandingVipTournament",
                    CASINO_GAME_AVIATOR: "casinoGameAviator",
                    CASINO_GAME_JETX: "casinoGameJetx",
                    CASINO_GAME_LUCKY_JET: "casinoGameLuckyJet",
                    CASINO_GAME_SPEED_AND_CASH: "casinoGameSpeedAndCash",
                    CASINO_GAME_NARDS: "casinoGameNards",
                    LEADERBOARDS: "leaderboards",
                    BONUSES: "bonuses",
                    GAMES_ONE_WIN: "gamesOneWin",
                    TWAINSPORT: "twainSport",
                    BURGER_DIVIDER_1: `${h}-1`,
                    BURGER_DIVIDER_2: `${h}-2`,
                    BURGER_DIVIDER_3: `${h}-3`,
                    BURGER_DIVIDER_4: `${h}-4`,
                    VIP_CLUB: "vipClub",
                    LOYALTY_PROGRAM: "loyaltyProgram"
                })),
                y = (e, t) => [...t, ...e.filter((e => !t.includes(e)))],
                v = e => {
                    const t = [g.HOME, g.LIVE, g.LINE, g.CASINO, g.LIVE_GAMES, g.CASINO_GAME_LUCKY_JET, g.CASINO_GAME_SPEED_AND_CASH, g.CASINO_GAME_AVIATOR, g.CASINO_GAME_JETX, g.GAMES, g.TRADING, g.POKER, g.VSPORT, g.VIP_CLUB, g.CYBERSPORT, g.CASINO_GAME_NARDS, g.FANTASY_SPORT, g.PROMO_LANDING_VIP_TOURNAMENT, g.BETGAMES, g.TWAINSPORT, g.FASTSPORT, g.TVBET, g.GAMES_ONE_WIN, g.TV, g.INVEST, g.STATISTICS, g.RESULTS],
                        a = e ? y(t, [g.HOME, g.LINE, g.CYBERSPORT]) : t;
                    return a.filter(Boolean)
                },
                b = e => {
                    const t = [g.LOYALTY_PROGRAM, g.VIP_CLUB, g.BURGER_DIVIDER_1, g.LIVE, g.LINE, g.CASINO, g.LIVE_GAMES, g.CASINO_GAME_NARDS, g.FANTASY_SPORT, g.CYBERSPORT, g.BURGER_DIVIDER_2, g.CASINO_GAME_LUCKY_JET, g.CASINO_GAME_SPEED_AND_CASH, g.CASINO_GAME_AVIATOR, g.CASINO_GAME_JETX, g.BURGER_DIVIDER_3, g.GAMES, g.TRADING, g.BETGAMES, g.FASTSPORT, g.TVBET, g.GAMES_ONE_WIN, g.TV, g.BURGER_DIVIDER_4, g.POKER, g.INVEST, g.VSPORT, g.LEADERBOARDS, g.BONUSES],
                        a = e ? y(t, [g.LOYALTY_PROGRAM, g.VIP_CLUB, g.LIVE, g.BURGER_DIVIDER_1, g.CASINO, g.LIVE_GAMES, g.FANTASY_SPORT, g.LINE]) : t;
                    return a.filter(Boolean)
                },
                f = [g.BONUSES],
                k = (e, t) => {
                    const a = [...e],
                        n = t.filter((e => e.startsWith(h)));
                    for (const o of n) a.push({
                        IS_DIVIDER: !0,
                        [_]: o
                    });
                    return a
                },
                w = e => {
                    let t;
                    return e.reduce(((e, a) => a.IS_DIVIDER ? (t = a, e) : (e.length > 0 && t && e.push(t), t = null, e.push(a), e)), [])
                },
                S = (e, t) => {
                    if (!Array.isArray(t) || 0 === t.length) return e;
                    const a = t.reduce(((e, t, a) => (e[t] = a, e)), {});
                    return [...e].sort(((e, t) => {
                        const n = e[p],
                            o = void 0 === n ? a[e[_]] : n,
                            r = t[p],
                            i = void 0 === r ? a[t[_]] : r;
                        return (void 0 === o ? 999 : o) - (void 0 === i ? 999 : i)
                    }))
                }
        },
        951744: (e, t, a) => {
            "use strict";
            a.d(t, {
                n: () => o
            });
            var n = a(166252);

            function o(e) {
                return new Promise((e => {
                    (0, n.Y3)((() => requestAnimationFrame((() => requestAnimationFrame(e)))))
                })).then((() => {
                    "function" === typeof e && e()
                }))
            }
        },
        212628: (e, t, a) => {
            "use strict";
            a.d(t, {
                R$: () => d,
                UF: () => y,
                Uc: () => u,
                _I: () => p,
                cO: () => v,
                g5: () => _,
                we: () => g,
                ze: () => c
            });
            var n = Object.defineProperty,
                o = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                s = (e, t, a) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                l = (e, t) => {
                    for (var a in t || (t = {})) r.call(t, a) && s(e, a, t[a]);
                    if (o)
                        for (var a of o(t)) i.call(t, a) && s(e, a, t[a]);
                    return e
                };
            const c = "1win_cash",
                d = "card-1win-p2p",
                u = "card-p2p",
                p = "1winvest",
                m = {
                    "Access Bank Nigeria": "access-bank-nigeria",
                    "Access Bank": "access-bank-nigeria",
                    "First Bank of Nigeria": "first-bank-of-nigeria",
                    "First Bank PLC": "first-bank-of-nigeria",
                    "GTBank Plc": "gtbank-plc",
                    "Kuda Micro-finance Bank": "kuda-micro-finance-bank",
                    Kuda: "kuda-micro-finance-bank",
                    "Zenith Bank Plc": "zenith-bank-plc",
                    "Zenith bank PLC": "zenith-bank-plc",
                    "Wema Bank": "wema-bank",
                    "Wema Bank PLC": "wema-bank",
                    "Sterling Bank": "sterling-bank",
                    "Sterling Bank PLC": "sterling-bank",
                    "Fidelity Bank": "fidelity-bank",
                    "Stanbic IBTC Bank": "stanbic-ibtc-bank",
                    "9 Payment Service Bank": "9-payment-service-bank",
                    "Banco de Crédito": "banco_de_credito",
                    "BBVA Continental": "bbva",
                    "Caja Arequipa": "caja_arequipa",
                    "Caja Huancayo": "caja_huancayo",
                    "Caja Tacna": "caja_tacna",
                    "Caja Trujillo": "caja_trujillo",
                    Interbank: "interbank",
                    Scotiabank: "scotiabank",
                    "BANCO DAVIVIENDA": "banco_davivienda",
                    "Banco Davivienda": "banco_davivienda",
                    "Banco Davivienda Desarrollo": "banco_davivienda",
                    "BANCO PICHINCHA S.A.": "banco_pichincha",
                    "Banco Pichincha S.A.": "banco_pichincha",
                    "BANCO SANTANDER COLOMBIA": "banco_santander_colombia",
                    "Banco Santander Colombia": "banco_santander_colombia",
                    "Santander Consumer Colombia": "banco_santander_colombia",
                    BANCOLOMBIA: "bancolombia",
                    "Bancolombia Datapower": "bancolombia",
                    "Bancolombia Desarrollo": "bancolombia",
                    "Bancolombia QA": "bancolombia",
                    CITIBANK: "citi_bank",
                    "Citibank Colombia S.A.": "citi_bank",
                    DAVIPLATA: "daviplata",
                    Daviplata: "daviplata",
                    "MOVII S.A.": "movii",
                    "Movii S.A": "movii",
                    NEQUI: "nequi",
                    "Nequi Certificacion": "nequi",
                    RAPPIPAY: "rappipay",
                    Rappipay: "rappipay",
                    "Rappipay - Davivienda": "rappipay",
                    "Banco PSE": "pse",
                    "BBVA Colombia S.A.": "bbva",
                    "BBVA Desarrollo": "bbva",
                    "Scotiabank Colpatria Desarrollo": "scotiabank",
                    "Scotiabank Colpatria UAT": "scotiabank",
                    "BANCO DEL PUEBLO SOBERANO, BANCO DE DESARROLLO": "bdt_trabajadores",
                    "BANCO INTERNACIONAL DE DESARROLLO, C.A. BANCO UNIVERSAL": "bdt_trabajadores",
                    "NOVO BANCO, S.A. SUCURSAL VENEZUELA BANCO UNIVERSAL": "bdt_trabajadores",
                    "BANCO BICENTENARIO BANCO UNIVERSAL, C.A.": "banfanb",
                    "BANCO DE LA FUERZA ARMADA NACIONAL BOLIVARIANA, B.U.": "banfanb",
                    "BANCAMIGA BANCO MICROFINANCIERO, C.A.": "microfinanc",
                    "BANCO ACTIVO, C.A. BANCO UNIVERSAL": "activo",
                    "BANCO AGRICOLA DE VENEZUELA, C.A. BANCO UNIVERSAL": "agricola",
                    "BANCO CARONI, C.A. BANCO UNIVERSAL": "caroni",
                    "BANCO DE LA GENTE EMPRENDEDORA BANGENTE, C.A.": "emprededora",
                    "BANCO DE VENEZUELA S.A.C.A. BANCO UNIVERSAL": "saca",
                    "BANCO DEL CARIBE, C.A. BANCO UNIVERSAL": "caribe",
                    "BANCO DEL TESORO, C.A. BANCO UNIVERSAL": "tesoro",
                    "BANCO EXTERIOR, C.A. BANCO UNIVERSAL": "exterior",
                    "BANCO MERCANTIL, C.A. S.A.C.A. BANCO UNIVERSAL": "mercantil",
                    "BANCO NACIONAL CRÉDITO, C.A. BANCO UNIVERSAL": "nacional_credito",
                    "BANCO PLAZA, BANCO UNIVERSAL C.A.": "plaza",
                    "BANCO PROVINCIAL, S.A. BANCO UNIVERSAL": "provincial_sa",
                    "BANCO SOFITASA BANCO UNIVERSAL, C.A.": "sofitasa",
                    "BANCRECER S.A. BANCO DE DESARROLLO": "desarrollo",
                    "BANESCO BANCO UNIVERSAL S.A.C.A.": "banesco",
                    "BANPLUS BANCO UNIVERSAL, C.A.": "banplus",
                    "BFC BANCO FONDO COMUN C.A. BANCO UNIVERSAL": "fondo_comun",
                    "DELSUR BANCO UNIVERSAL, C.A.": "delsur",
                    "MI BANCO, BANCO MICROFINANCIERO, C.A.": "microfinancero",
                    "VENEZOLANO DE CRÉDITO, S.A. BANCO UNIVERSAL": "venezolano_de_credito",
                    "Access Bank Plc": "access-bank-plc",
                    "Guaranty Trust Bank": "guaranty-trust-bank",
                    "First Bank Nigeria": "first-bank-nigeria",
                    "BANCO DE BOGOTA": "bogota",
                    "BANCO DE OCCIDENTE": "occidente",
                    "BANCO POPULAR": "popular",
                    "LULO BANK": "lulo",
                    IRIS: "iris",
                    DALE: "dale",
                    "COOFINEP COOPERATIVA FINANCIERA": "coofiner",
                    "CFA COOPERATIVA FINANCIERA": "cfa",
                    "BANCOOMEVA S.A.": "bancoomeva",
                    "BANCO UNION antes GIROS": "union-giros",
                    "BANCO SERFINANZA": "serfinanza",
                    "BANCO ITAU": "itau",
                    "BANCO GNB SUDAMERIS": "sudameris",
                    "BANCO COOPERATIVO COOPCENTRAL": "cooperativo-coopcentral",
                    "BANCO CAJA SOCIAL": "caja-social",
                    "BANCO BBVA COLOMBIA S.A.": "bbva-colombia",
                    "BANCO AV VILLAS": "av-villas",
                    "BANCO AGRARIO": "agrario",
                    "BANCAMIA S.A.": "bancamia",
                    BAN100: "ban100"
                },
                _ = l({
                    [c]: "cash",
                    advcash_rub: "advcash",
                    advcash_wallet: "advcash",
                    khalti: "khalti",
                    esewa_direct: "esewa_direct",
                    airtm: "airtm",
                    atf24: "atf24",
                    bank_transfer_nigeria: "bank_transfer_main",
                    bank_transfer_pakistan: "bank_transfer_main",
                    beeline_rub: "beeline",
                    btc_usd: "btc",
                    card: "card",
                    card_azn: "card",
                    card_rub: "card",
                    card_full: "card",
                    card_usd: "card",
                    card_btc: "card",
                    card_short: "card",
                    card_method: "card",
                    cash_methods: "cash_methods",
                    card_visa: "visa",
                    card_mastercard: "mastercard",
                    card_mir: "mir",
                    card_p2p: "card_p2p",
                    cash: "cash",
                    cashtocode: "cashtocode",
                    cepbank: "cepbank",
                    eth_usd: "ethereum",
                    globepay: "globepay",
                    hizliqr: "hizliqr",
                    jetonWalletV3: "jetonWalletV3",
                    kassa24: "kassa24",
                    megafon_rub: "megafon",
                    mobile: "mobile",
                    mobile_with_email: "mobile",
                    mobile_with_name: "mobile",
                    mts_rub: "mts",
                    cash_agente: "cash_agente",
                    pichincha: "pichincha",
                    bcp: "bcp",
                    caja_paita: "caja_paita",
                    financiera_qapaq: "financiera_qapaq",
                    edpyme_alternativa: "edpyme_alternativa",
                    "online-indonesian-banks": "online-indonesian-banks",
                    "online-malaysian-banks": "online-malaysian-fpx",
                    "online-malaysian-banks-document": "online-malaysian-banks",
                    "indian-methods-grouped": "indian-methods-grouped",
                    "online-thailand-banks": "online-thailand-banks",
                    "online-vietnam-banks": "online-vietnam-banks",
                    "papara-wallet": "papara-wallet",
                    payeer_rub: "payeer",
                    piastrix_rub: "piastrix",
                    payplus: "payplus",
                    p2p_methods_azerbaijan: "card_transfer",
                    p2p_methods_turkey: "card_transfer",
                    "cash-guatemala-grouped": "cash-guatemala-grouped",
                    rechcompt: "rechcompt",
                    qiwi_rub: "qiwi",
                    qiwi_eur: "qiwi",
                    qiwi_usd: "qiwi",
                    tele2_rub: "tele2",
                    tether: "tether",
                    webmoney_usd: "webmoney",
                    yamoney_rub: "yandex",
                    kyivstar_uah: "kyivstar",
                    lifecell_uah: "lifecell",
                    vodafone_uah: "vodafone",
                    intertelecom_uah: "intertelecom",
                    uzcard: "uzcard",
                    umob: "u-mob",
                    apple_pay: "apple-pay",
                    perfectmoney: "perfect-money",
                    china_union_pay: "china-union-pay",
                    rbk_bank_kz: "rbk-bank-kz",
                    "online-brazil-banks": "brazil-online-banking",
                    oxxo: "oxxo",
                    eco_voucher: "eco-voucher",
                    "alfa-click": "alfa-click",
                    alfa_one_click: "alfa_one_click",
                    homebank: "homebank",
                    rapipago: "rapipago",
                    pago: "pago",
                    boleto: "boleto",
                    "online-mexico-banks": "mexico-online-banking",
                    "online-argentina-banks": "argentina-online-banking",
                    "payturka-qr": "cmt-cuzdan",
                    "payturka-cmt": "cmt-cuzdan",
                    fixturka: "fixturka",
                    cashback: "partner",
                    advcash: "advcash",
                    loterica: "loterica",
                    "carga-virtual": "cargavirtual",
                    link: "link",
                    "online-india-banks": "online-india-banks",
                    "online-philippines-banks": "banks-of-the-philippines",
                    "online-thailand-qr-banks": "online-thailand-qr-banks",
                    "card-p2p-kgs": "p2p_methods_kyrgyzstan",
                    pay_wafe: "pay-wafe",
                    paytm: "paytm",
                    paytm_qr: "paytm-eazepe",
                    paytm_onewin: "paytm",
                    paytm_gate2way: "paytm-gate2way",
                    upi: "upi",
                    upi_qr: "upi",
                    upi_onewin: "upi",
                    upi_full: "upi",
                    upi_gate2way: "upi",
                    imps: "imps",
                    imps_gate2way: "imps",
                    phone_pe: "phone-pe",
                    phone_pe_qr: "phone-pe-eazepe",
                    phonepe_onewin: "phone-pe",
                    vietcombank: "vietcombank",
                    bkash: "b-kash",
                    bkash_onewin: "bkash",
                    bkash_p2p: "b-kash",
                    provincianet: "provincianet",
                    gpay: "gpay",
                    tmoney_tg: "tmoney_tg",
                    gpay_qr: "gpay-eazepe",
                    gpay_icici: "gpay",
                    gpay_onewin: "gpay",
                    gpay_gate2way: "gpay",
                    nganluong_email: "nganluong",
                    fk_wallet: "fk-wallet",
                    snapscan: "snapscan",
                    ozow: "ozow",
                    african_bank_payment_ussd: "african_bank",
                    african_bank_payment_qr: "african_bank",
                    mybux_voucher: "mybux_voucher",
                    muchbetter: "muchbetter",
                    phonepe: "phonepe",
                    phonepe_gate2way: "phonepe-gate2way",
                    airtel: "airtel",
                    mobikwik: "mobikwik",
                    ecopayz: "ecopayz-in-out",
                    cashu: "e-wallet-cashu",
                    momo_qr: "momopay",
                    zalo_qr: "zalopay",
                    qiwi_kzt: "qiwi",
                    qiwi_kzt_cash_in: "qiwi",
                    nbi: "nbi",
                    rupay: "rupay",
                    imps_paywize: "imps",
                    world_ep: "world_ep",
                    clapay: "clapay",
                    monetix: "monetix",
                    bhim_onewin: "bhim",
                    bank_transfer_onewin: "bank-transfer",
                    [u]: "p2p",
                    card_p2p_vip: "p2p",
                    "card-p2p_v2": "p2p",
                    "card-p2p-tjs": "card-p2p-tjs",
                    bank_transfer_krw: "south-korea-bank-transfer",
                    [d]: "p2p",
                    humo_card: "humo_card",
                    reliance_jio: "reliance_jio",
                    ola_money: "ola_money",
                    freecharge: "freecharge",
                    webmoney_uah: "webmoney_uah",
                    "orange-burkina": "orange-burkina",
                    "moov-burkina": "moov-burkina",
                    litecoin: "litecoin",
                    monero: "monero",
                    bitcoin_cash: "bitcoin_cash",
                    dash: "dash",
                    neo: "neo",
                    cardano: "cardano",
                    doge: "doge",
                    zcash: "zcash",
                    ripple: "ripple",
                    nem: "nem",
                    stellar: "stellar",
                    eos: "eos",
                    binance: "binance",
                    binance_pay: "binance",
                    ton: "ton",
                    tron: "tron",
                    usdc: "usdc",
                    btc: "btc",
                    eth: "ethereum",
                    money_go: "money_go",
                    money_go_voucher: "money_go",
                    "express-havale": "express-havale",
                    express_havale_mpay_turkey: "express-havale",
                    "vip-havale": "vip-havale",
                    mft: "paratim",
                    peple: "peple",
                    secpay: "secpay",
                    interac: "interac",
                    "interac-ach": "interac-ach",
                    "interac-eto": "interac-eto",
                    "cash-mexico-online": "cash-mexico-online",
                    "online-colombian-wallets": "online-colombian-wallets",
                    "online-colombian-banks": "online-colombian-wallets",
                    "online-peruvian-banks": "bank_transfer_main",
                    "online-nigerian-banks": "online-nigerian-banks",
                    "short-nigerian-banks": "bank_transfer_main",
                    "online-kenyan-banks": "bank_transfer_main",
                    spei: "spei",
                    spei_mexico: "spei",
                    spei_unlimint: "spei",
                    spei_multi: "spei",
                    ouipay: "ouipay",
                    card_unionpay: "card_unionpay",
                    pix: "pix",
                    pix_new: "pix",
                    american_express: "american_express",
                    diners_club: "diners_club",
                    carnet_credito: "carnet",
                    lider: "lider",
                    lider_cash: "lider",
                    lider_cash_redirect: "lider",
                    express_lider: "lider_express",
                    express_lider_cash: "lider_express",
                    express_lider_cash_redirect: "lider_express",
                    acuenta: "acuenta",
                    acuenta_cash: "acuenta",
                    acuenta_cash_redirect: "acuenta",
                    sencillito_cash_redirect: "sencillito",
                    magna: "magna_rewards",
                    hipercard: "hipercard",
                    neosurf: "neosurf",
                    fawry: "fawry",
                    bancomer_voucher: "bancomer",
                    efecty_voucher: "efecty",
                    safetypay_voucher: "safetypay",
                    trustly: "trustly",
                    volt: "volt",
                    "online-uk-banks": "online-uk-banks",
                    "online-france-banks": "online-france-banks",
                    "online-norway-banks": "online-norway-banks",
                    "online-denmark-banks": "online-denmark-banks",
                    "online-austria-banks": "online-austria-banks",
                    "online-switzerland-banks": "online-switzerland-banks",
                    "online-eastern-europe-banks": "online-eastern-europe-banks",
                    "online-southern-europe-banks": "online-southern-europe-banks",
                    "online-italian-banks": "online-italian-banks",
                    "online-germany-banks": "online-germany-banks",
                    "online-portugal-banks": "online-portugal-banks",
                    "online-spain-banks": "online-spain-banks",
                    "online-south-africa-banks": "online-south-africa-banks",
                    "online-ecuador-banks": "online-ecuador-banks",
                    "online-chile-banks": "online-chile-banks",
                    "online-ghana-banks": "online-ghana-banks",
                    "online-cameroon-banks": "online-cameroon-banks",
                    "online-senegal-banks": "online-senegal-banks",
                    "online-kenya-banks": "online-kenya-banks",
                    "online-sweden-banks": "online-sweden-banks",
                    "online-finland-banks": "online-finland-banks",
                    "online-czech-banks": "online-czech-banks",
                    "online-estonia-banks": "online-estonia-banks",
                    "online-lithuania-banks": "online-lithuania-banks",
                    "online-slovakia-banks": "online-slovakia-banks",
                    "online-poland-banks": "online-poland-banks",
                    "online-netherlands-banks": "online-netherlands-banks",
                    "online-latvia-banks": "online-latvia-banks",
                    "online-belgium-banks": "online-belgium-banks",
                    "online-pakistan-banks": "online-pakistan-banks",
                    "cash-colombia": "cash",
                    "cash-brazil": "cash",
                    "cash-chile": "cash",
                    "cash-mexico": "cash",
                    "cash-spain": "cash",
                    "cash-portugal": "cash",
                    "cash-ecuador": "cash",
                    "cash-peru": "cash",
                    "cash-uruguay": "cash",
                    "cash-panama": "cash",
                    "cash-paraguay": "cash",
                    "cash-sierra-leone": "cash",
                    ligdicash: "ligdicash",
                    upi_short: "upi",
                    astropay: "astropay",
                    card_visa_astropay: "visa_astropay",
                    card_mastercard_astropay: "mastercard_astropay",
                    innopay: "innopay",
                    card_sbp: "sbp",
                    lottery: "lottery",
                    promptpay: "promptpay",
                    true_money: "true_money",
                    true_money_full: "true_money",
                    momo_pay: "momopay",
                    skypay: "skypay_v2",
                    tether_erc20: "tether_erc20",
                    tether_trc20: "tether_trc20",
                    tether_bep20: "tether_bep20",
                    pay4fun: "pay4fun",
                    korti_milli: "korti_milli",
                    pay_zapp: "pay_zapp",
                    pix_unlimint: "pix",
                    pix_open_finance: "pix_open_finance",
                    paydo_ewallet: "paydoewallet",
                    grabpay: "grabpay",
                    wechatpay: "wechatpay",
                    alipay: "alipay",
                    sepa: "sepa",
                    sepa_instant: "sepa",
                    usdc_bep20: "usdc_bep20",
                    usdc_erc20: "usdc_erc20",
                    usdc_trc20: "usdc_trc20",
                    bnb: "bnb",
                    bnb_bep20: "bnb_bep20",
                    bnb_dex: "bnb_dex",
                    busd_bep20: "busd_bep20",
                    busd_erc20: "busd_erc20",
                    bybit_pay: "bybit_pay",
                    "online-southkorea-banks": "online-southkorea-banks",
                    nagad: "nagad",
                    nagad_onewin: "nagad",
                    nagad_p2p: "nagad",
                    bank_of_india: "bank-of-india",
                    bank_of_maharashtra: "bank-of-maharashtra",
                    canara_bank: "canara-bank",
                    central_bank_of_india: "central-bank-of-india",
                    city_union_bank: "city-union-bank",
                    cosmos_bank: "cosmos-bank",
                    deutsche_bank: "deutsche-bank",
                    development_credit_bank: "development-credit-bank",
                    dhanlaxmi_bank: "dhanlaxmi-bank",
                    federal_bank: "federal-bank",
                    hdfc_bank: "hdfc-bank",
                    icici_bank: "icici-bank",
                    idfc_bank: "idfc-bank",
                    indian_bank: "indian-bank",
                    indian_overseas_bank: "indian-overseas-bank",
                    indusind_bank: "indusind-bank",
                    industrial_development_bank_of_india: "industrial-development-bank-of-india",
                    jammu_and_kashmir_bank: "jammu-and-kashmir-bank",
                    karnatka_bank: "karnatka-bank",
                    karurvysya_bank: "karurvysya-bank",
                    kotak_bank: "kotak-bank",
                    lakshmi_vilas_bank: "lakshmi-vilas-bank",
                    punjab_national_bank: "punjab-national-bank",
                    shamrao_vithal_cooperative_bank: "shamrao-vithal-cooperative-bank",
                    south_indian_bank: "south-indian-bank",
                    state_bank_of_india: "state-bank-of-india",
                    tamilnad_mercantile_bank: "tamilnad-mercantile-bank",
                    uco_bank: "uco-bank",
                    yes_bank: "yes-bank",
                    punjab_and_sind_bank: "punjab-and-sind-bank",
                    standard_chartered_bank: "standard-chartered-bank",
                    union_bank_of_india: "union-bank-of-india",
                    bank_of_baroda: "bank-of-baroda",
                    rocket: "rocket",
                    rocket_onewin: "rocket",
                    qiwi_h2h: "qiwi",
                    yamoney_h2h: "yandex",
                    "online-japan-banks": "bank_transfer_main",
                    "community-bank-transfer": "community-bank-transfer",
                    "instant-qr": "instant-qr",
                    clapay_ci_mtn: "mtn",
                    clapay_cm_mtn: "mtn",
                    clapay_bj_mtn: "mtn",
                    clapay_gn_mtn: "mtn",
                    clapay_ml_malitel: "malitel",
                    clapay_bf_mobicash: "mobicash",
                    clapay_ci_moov: "moov_money",
                    clapay_bj_moov: "moov_money",
                    clapay_tg_moov: "moov_money",
                    clapay_ci_orange: "orange_money",
                    clapay_bf_orange: "orange_money",
                    clapay_cm_orange: "orange_money",
                    clapay_ml_orange: "orange_money",
                    clapay_gn_orange: "orange_money",
                    clapay_sn_orange: "orange_money",
                    clapay_sn_tigo: "tigo",
                    clapay_sn_tigo_freemoney: "free_money",
                    clapay_sn_emoney: "emoney",
                    clapay_tg_togo_com: "togocom",
                    clapay_sn_wave: "wave",
                    clapay_sn_wizall: "wizall",
                    mpayment_sn_wizall: "wizall",
                    bank_transfer_main: "bank_transfer_main",
                    picpay: "picpay",
                    pse: "pse",
                    walmart: "walmart",
                    waldos: "waldos",
                    seven_eleven: "seven_eleven",
                    soriana: "soriana",
                    comercial_mexicana: "comercial_mexicana",
                    bancomer: "bancomer",
                    bodega_aurrera: "bodega_aurrera",
                    sams_club: "sams_club",
                    superama: "superama",
                    calimax: "calimax",
                    tiendas_extra: "tiendas_extra",
                    circulo_k: "circulo_k",
                    telecomm: "telecomm",
                    banorte: "banorte",
                    farmacias_benavides: "farmacias_benavides",
                    farmacias_del_ahorro: "farmacias_del_ahorro",
                    el_asturiano: "el_asturiano",
                    alsuper: "alsuper",
                    kiosko: "kiosko",
                    farmacias_santa_maria: "farmacias_santa_maria",
                    farmacias_la_mas_barata: "farmacias_la_mas_barata",
                    farmacias_roma: "farmacias_roma",
                    farmacias911: "farmacias911",
                    farmacias_economicas: "farmacias_economicas",
                    farmacias_medicity: "farmacias_medicity",
                    rianxeira: "rianxeira",
                    western_union: "western_union",
                    zona_pago: "zona_pago",
                    card2card: "card2card",
                    imps_einpayz: "imps",
                    imps_interkassa: "imps",
                    imps_eazepe: "imps",
                    gpay_einpayz: "gpay",
                    phone_pe_einpayz: "phone-pe",
                    upi_einpayz: "upi",
                    paytm_einpayz: "paytm",
                    bhim: "bhim",
                    whatsapp_pay: "whatsapp_pay",
                    paytm_upi: "paytm_upi",
                    pagstar: "pagstar",
                    easypaisa: "easypaisa",
                    jazzcash: "jazzcash_v2",
                    upi_payments_ng: "upi",
                    upi_interkassa: "upi",
                    upi_h2h: "upi",
                    phone_pe_h2h: "phone-pe",
                    paytm_h2h: "paytm",
                    todito: "todito",
                    icbc: "icbc",
                    bbva: "bbva",
                    "online-bbva": "bbva",
                    nagad_p2c: "nagad",
                    cashmaal: "cashmaal",
                    emanat: "emanat",
                    hay_hay: "hay_hay",
                    smartpay_card: "smartpay_card",
                    indonesia_va: "indonesia_va",
                    indonesia_va_grouped: "indonesia_va",
                    upay: "upay",
                    "eziopay-crypto": "eziopay-crypto",
                    "eziopay-crypto-p2p": "eziopay-crypto",
                    netbanking_t365: "online-india-banks",
                    south_korea_bank_transfer: "bank_transfer_main",
                    vietnam_bank_transfer: "vietnam-bank-transfer",
                    virtual_accounts: "virtual_accounts",
                    thai_qr: "thai_qr",
                    paytm_game_changer_onewin: "paytm",
                    upi_elvis_onewin: "upi",
                    upi_game_changer_onewin: "upi",
                    phonepe_elvis_onewin: "phone-pe",
                    phonepe_game_changer_onewin: "phone-pe",
                    phonepe_sunil_onewin: "phone-pe",
                    gpay_elvis_onewin: "gpay",
                    gpay_game_changer_onewin: "gpay",
                    bank_transfer_game_changer_onewin: "bank-transfer",
                    "bkash-no-fields": "b-kash",
                    bkash_c2c: "b-kash",
                    paytm_upi_onewin: "paytm_upi",
                    pay_zapp_onewin: "pay_zapp",
                    ghanem_pay: "ghanem_pay",
                    mobikwik_onewin: "mobikwik",
                    airtel_onewin: "airtel",
                    freecharge_onewin: "freecharge",
                    whatsapp_pay_onewin: "whatsapp_pay",
                    amazon_pay_onewin: "amazon_pay",
                    bharatpe_onewin: "bharatpe",
                    m10: "m10",
                    m10_p2p: "m10_p2p",
                    m10_QR: "m10_QR",
                    card_p2p_azn: "p2p",
                    tpaga: "tpaga",
                    card_jcb: "jcb",
                    clapay_ci_wave: "wave",
                    elo: "elo",
                    spei_full: "spei",
                    efecty_cash: "efecty",
                    efecty_cash_new: "efecty",
                    pse_full: "pse",
                    "online-chile-banks-short": "online-chile-banks",
                    alianspay: "alianspay",
                    card_visa_full_name: "visa",
                    card_mastercard_full_name: "mastercard",
                    orange_money_phone: "orange_money",
                    momo_phone: "momopay",
                    wave_phone: "wave",
                    am_bank: "am_bank",
                    hongleong_bank: "hongleong_bank",
                    public_bank: "public_bank",
                    rhb_bank: "rhb_bank",
                    cimb_bank: "cimb_bank",
                    cimb_bank_thailand: "cimb",
                    maybank: "maybank",
                    maybank_indonesia: "maybank",
                    maybank_indonesia_h2h: "maybank",
                    bca_bank: "bca_bank",
                    cimb_niaga_bank: "cimb_niaga_bank",
                    cimb_niaga_bank_indonesia: "cimb_niaga_bank",
                    cimb_niaga_bank_indonesia_h2h: "cimb_niaga_bank",
                    mandiri_bank: "mandiri_bank",
                    mandiri_bank_indonesia: "mandiri_bank",
                    mandiri_bank_indonesia_h2h: "mandiri_bank",
                    bsi_indonesia: "bank_syariah_indonesia",
                    grabpay_qr: "grabpay",
                    bangkok_bank: "bangkok_bank",
                    gsb_bank: "gsb_bank",
                    scb_bank: "scb_bank",
                    ttb_internet_banking: "ttb_internet_banking",
                    bigpay_qr: "bigpay",
                    boost_qr: "boost",
                    shopee_pay_qr: "shopee_pay",
                    touchngo_qr: "touchngo",
                    duitnow_qr: "duitnow",
                    promptpay_qr: "promptpay",
                    doku_qr: "doku",
                    gopay_qr: "gopay",
                    gopay: "gopay",
                    ovo_qr: "ovo",
                    ovo_h2h: "ovo",
                    dana_qr: "dana_qr",
                    indonesia_dana_groupes_category: "dana",
                    dana_grouped: "dana_grouped",
                    sakuku_qr: "sakuku",
                    linkaja_qr: "linkaja",
                    qris_qr: "qris",
                    qris_h2h: "qris",
                    kasikornbank: "kasikornbank",
                    krungsri_bank: "krungsri_bank",
                    ocbc_bank: "ocbc_bank",
                    ocbc_bank_malaysia: "ocbc_bank",
                    "online-indonesian-banks-grouped": "online-indonesian-banks-grouped",
                    "online-malaysian-banks-grouped": "online-malaysian-banks-grouped",
                    "online-thailand-banks-grouped": "online-thailand-banks-grouped",
                    "online-vietnam-banks-grouped": "online-vietnam-banks-grouped",
                    "online-thailand-banks-qr-grouped": "online-thailand-banks-qr-grouped",
                    "online-argentina-banks-grouped": "argentina-online-banking",
                    mobile_wallets_grouped: "mobile_wallets_grouped",
                    btvoucher: "btvoucher",
                    pago_efectivo: "pago_efectivo",
                    imps_wallet: "imps",
                    swiffy_eft: "swiffy_eft",
                    clapay_ga_airtel: "airtel_money",
                    clapay_ga_moov: "moov_gabon",
                    pix_retailers: "pix",
                    khipu: "khipu",
                    khipu_chile: "khipu",
                    cash_brazil_retailers: "cash",
                    cash_chile_retailers: "cash",
                    cash_mexico_retailers: "cash",
                    cash_ecuador_retailers: "cash",
                    cash_peru_retailers: "cash",
                    cash_guatemala_retailers: "cash",
                    cash_costa_rica_retailers: "cash",
                    cash_panama_retailers: "cash",
                    "online-brazil-banks-retailers": "brazil-online-banking",
                    "online-chile-banks-retailers": "online-chile-banks",
                    "online-mexico-banks-retailers": "mexico-online-banking",
                    "online-ecuador-banks-retailers": "online-ecuador-banks",
                    "online-peru-banks-retailers": "bank_transfer_main",
                    "online-costa-rica-banks-retailers": "online-costa-rica-banking",
                    codi_mexico: "codi_mexico",
                    card_p2p_kg_el_cart: "el_cart",
                    card_p2p_ua_privat_bank: "privat_bank",
                    ua_privat_bank: "privat_bank",
                    card_p2p_ua_mono_bank: "mono_bank",
                    ua_mono_bank: "mono_bank",
                    card_p2p_ua_a_bank: "a_bank",
                    card_p2p_ua_pumb_bank: "pumb_bank",
                    ua_pumb_bank: "pumb_bank",
                    card_p2p_ua_izi_bank: "izi_bank",
                    card_p2p_ua_raiffeisen_bank: "raifaisen_bank",
                    card_p2p_ua_otp: "otp",
                    ua_otp: "otp",
                    card_p2p_ua_sense: "sense",
                    ua_sense: "sense",
                    card_p2p_az_azerturkbank: "azerturkbank",
                    az_azerturkbank: "azerturkbank",
                    card_p2p_az_leobank: "leobank",
                    az_leobank: "leobank",
                    card_p2p_az_abb: "abb",
                    az_abb: "abb",
                    card_p2p_az_kapitalbank: "kapital_bank",
                    az_kapitalbank: "kapital_bank",
                    card_p2p_az_rabitabank: "rabita_bank",
                    az_rabitabank: "rabita_bank",
                    card_p2p_az_unibank: "unibank",
                    az_unibank: "unibank",
                    card_p2p_tr_garanti_bbva: "garanti_bbva",
                    card_p2p_tr_turkiye_finans: "turkiye_finans",
                    card_p2p_tr_ziraat: "ziraat",
                    card_p2p_kg_demir_bank: "demir_bank",
                    card_p2p_kg_optima_bank: "optima_bank",
                    card_p2p_kg_halyk_bank: "halyk_bank",
                    card_p2p_kg_bakai_bank: "bakai_bank",
                    card_p2p_kg_m_bank: "m_bank",
                    card_p2p_kg_kicb_bank: "kicb_logo",
                    card_p2p_kg_bai_tushum_bank: "btb_bank",
                    card_p2p_kg_keremet_bank: "keremet_bank",
                    card_p2p_kg_kompanion_bank: "kompanion_bank",
                    card_p2p_kg_dcb_360_bank: "dcb_bank",
                    phone_p2p_kg_o_bank: "o_money",
                    cash_chile_grouped: "cash_chile_grouped",
                    cash_chile_redirect_grouped: "cash_chile_grouped",
                    p2p_methods_ukraine: "p2p_methods_ukraine",
                    p2p_methods_kyrgyzstan: "p2p_methods_kyrgyzstan",
                    "p2p-methods-tajikistan": "p2p-methods-tajikistan",
                    indonesia_uni: "indonesia_uni",
                    dana: "dana",
                    ovo: "ovo",
                    qris: "qris",
                    pix_short: "pix",
                    chek: "chek",
                    cleo: "cleo",
                    fpay: "fpay",
                    hites: "hites",
                    klap_cash: "klap_cash",
                    klap_bank_transfer: "klap_bank_transfer",
                    mach: "mach",
                    pago46_cash: "pago46_cash",
                    red_compra_bank_payments: "red_compra_bank_payments",
                    one_pay_transbank: "one-pay-transbank",
                    servifacil_cash: "servifacil_cash",
                    chile_bank_transfer: "online-chile-banks",
                    mpesa: "mpesa",
                    sticpay: "sticpay",
                    card_p2p_ua_other_bank: "other_bank",
                    ua_other_bank: "other_bank",
                    card_visa_peru: "visa",
                    card_mastercard_peru: "mastercard",
                    card_amex_peru: "american_express",
                    card_magna_peru: "magna",
                    card_diners_peru: "diners_club",
                    card_visa_chile: "visa",
                    card_mastercard_chile: "mastercard",
                    card_amex_chile: "american_express",
                    card_diners_chile: "diners_club",
                    card_magna_chile: "magna",
                    card_redcompra_chile: "red_compra",
                    card_webpay_chile: "webpay",
                    "online-australia-banks": "online-australia-banks",
                    mach_chile: "mach",
                    webpay_chile: "webpay",
                    bank_transfer_chile: "online-chile-banks",
                    card_p2p_uz_uzcard: "uzcard",
                    card_p2p_uz_humo: "humo_card",
                    settlepay_wallet: "settlepay_wallet",
                    smartpay: "smartpay",
                    oxxo_pay: "oxxo_pay",
                    paytm_luckystar: "paytm",
                    gpay_luckystar: "gpay",
                    phonepe_luckystar: "phone-pe",
                    mobikwik_luckystar: "mobikwik",
                    pay_zapp_luckystar: "pay_zapp",
                    amazon_pay_luckystar: "amazon_pay",
                    bank_transfer_luckystar: "bank-transfer",
                    whatsapp_pay_luckystar: "whatsapp_pay",
                    bhim_luckystar: "bhim",
                    freecharge_luckystar: "freecharge",
                    airtel_luckystar: "airtel",
                    upi_luckystar: "upi",
                    pix_light: "pix",
                    pix_light_h2h: "pix",
                    "online-scotiabank": "scotiabank",
                    paraguay_bank_transfer: "bank_transfer_blue",
                    bank_transfer_paraguay: "bank_transfer_blue",
                    uruguay_bank_transfer: "bank_transfer_blue",
                    bolivia_bank_transfer: "bank_transfer_blue",
                    mtn_cm: "mtn",
                    orange_cm: "orange_money",
                    mpesa_ke: "mpesa",
                    airtel_ke: "airtel",
                    equitel_ke: "equitel",
                    virtual_account_bt: "virtual_account",
                    dc_next: "dc_next",
                    boleto_smartfastpay: "boleto_v2",
                    ted: "ted",
                    transfiya_full: "transfiya",
                    oxxo_pay_h2h: "oxxo_pay",
                    skrill: "skrill",
                    skrill_utorg: "skrill",
                    skrill_ftd: "skrill_ftd",
                    skrill_ftd_utorg: "skrill_ftd",
                    skrill_utorg_ftd: "skrill_ftd",
                    skrill_utorg_std: "skrill",
                    neteller: "neteller",
                    neteller_utorg: "neteller",
                    neteller_ftd: "neteller_ftd",
                    neteller_ftd_utorg: "neteller_ftd",
                    neteller_utorg_ftd: "neteller_ftd",
                    neteller_utorg_std: "neteller",
                    giropay: "giropay",
                    sofort: "sofort",
                    paysafecash: "paysafecash",
                    rapid_transfer: "rapid_transfer",
                    paysafecard: "paysafecard",
                    online_argentina_banks: "argentina-online-banking",
                    banktransfer_argentina: "argentina-online-banking",
                    banktransfer_argentina_astropay: "astropay_bank_transfer",
                    interac_short: "interac",
                    bank_transfer_ws: "bank_transfer",
                    interbanking: "interbanking",
                    city_club: "city_club",
                    super_norte: "super_norte",
                    santander_cash: "santander_cash",
                    pse_v2: "pse",
                    pse_v2_withdrawal: "transfiya",
                    pago_efectivo_astropay: "pago_efectivo_astropay",
                    bank_transfer_peru_astropay: "online-peruvian-banks",
                    cash_peru_astropay: "cash-peruvian-astropay",
                    plin_astropay: "plin",
                    yape_astropay: "yape",
                    yape_redirect: "yape",
                    bank_transfer_peru: "bank_transfer_peru",
                    cash_peru: "cash_peru",
                    cards_peru: "cards_peru",
                    mpayment_ci_orange: "orange_money",
                    mpayment_ci_orange_payhost: "orange_money",
                    mpayment_ci_moov: "moov_money",
                    mpayment_ci_moov_h2h: "moov_money",
                    mpayment_ci_mtn: "mtn",
                    mpayment_ci_mtn_h2h: "mtn",
                    mpayment_ci_wave: "wave",
                    mpayment_bf_orange: "orange_money",
                    mpayment_bf_mobicash: "moov_money",
                    mpayment_bf_mobicash_h2h: "moov_money",
                    mpayment_ml_orange: "orange_money",
                    mpayment_ml_orange_h2h: "orange_money",
                    mpayment_ml_wave: "wave",
                    mpayment_ml_mobicash: "mobicash",
                    mpayment_ml_mobicash_h2h: "mobicash",
                    mpayment_sl_orange: "orange_money",
                    mpayment_gn_orange: "orange_money",
                    mpayment_gn_mtn: "mtn",
                    mpayment_gn_mtn_h2h: "mtn",
                    mpayment_sn_orange: "orange_money",
                    mpayment_sn_orange_payhost: "orange_money",
                    mpayment_sn_orange_h2h: "orange_money",
                    mpayment_sn_freemoney: "free_money",
                    mpayment_sn_freemoney_h2h: "free_money",
                    mpayment_sn_wave: "wave",
                    mpayment_sn_wave_h2h: "wave",
                    mpayment_bj_mtn: "mtn",
                    mpayment_bj_mtn_h2h: "mtn",
                    mpayment_cm_mtn: "mtn",
                    mpayment_cm_mtn_h2h: "mtn",
                    mpayment_cm_orange: "orange_money",
                    mpayment_tj_mtn: "mtn",
                    mpayment_tj_moov: "moov_money",
                    mpayment_tg_mtn: "mtn",
                    mpayment_tg_moov: "moov_money",
                    mpayment_ke_safaricom: "safaricom",
                    mpayment_ke_airtel: "airtel_money",
                    mpayment_ga_airtel: "airtel_money",
                    mpayment_ga_airtel_h2h: "airtel_money",
                    mpayment_ga_moov: "moov_gabon",
                    "astropay_online-chile-banks": "astropay_bank_transfer",
                    cash_astropay_chile: "cash_astropay_chile",
                    astropay_card_webpay_chile: "astropay_webpay",
                    pagofacil: "pagofacil",
                    mercadopago: "mercadopago_v2",
                    mercadopago_wallet: "mercado_pago",
                    mtn_cm_astropay: "mtn_cm_astropay",
                    orange_cm_astropay: "orange_cm_astropay",
                    pse_astropay: "pse",
                    efecty_cash_astropay: "efecty_cash_astropay",
                    nequi_astropay: "nequi",
                    bancolombia_astropay: "bancolombia",
                    cash_astropay_colombia: "cash_astropay_colombia",
                    almacenes_exito: "almacenes_exito",
                    carulla: "carulla",
                    surtimax: "surtimax",
                    edeq: "edeq",
                    payco: "payco",
                    bkash_full_name: "b-kash",
                    nagad_full_name: "nagad",
                    rocket_full_name: "rocket",
                    upay_full_name: "upay",
                    banco_national_bt: "banco_national_bt",
                    banco_national_cash: "banco_national_cash",
                    payser: "payser",
                    puntos_hey: "puntos_hey",
                    bam: "bam",
                    banco_gt_continental: "banco_gt_continental",
                    western_union_panama: "western_union",
                    el_machetazo: "el_machetazo",
                    super_xtra: "super_xtra",
                    pse_v3: "pse",
                    popypara: "popypara",
                    mpay_qr: "mpay_qr",
                    mpay_h2h: "mpay",
                    mtn_ug: "mtn",
                    airtel_ug: "airtel",
                    airtel_ug_short: "airtel_money",
                    mtn_ug_short: "mtn",
                    mpesa_ke_short: "mpesa",
                    airtel_ke_short: "airtel_money",
                    equitel_ke_short: "equitel",
                    viet_qr: "viet_qr",
                    hsbc_bank: "hsbc_bank",
                    uob_bank: "uob_bank",
                    uob_bank_thai: "uob_bank",
                    krung_thai_bank: "krung_thai_bank",
                    acb_bank: "acb_bank",
                    bidv_bank: "bidv_bank",
                    donga_bank: "donga_bank",
                    sacom_bank: "sacom_bank",
                    tp_bank: "tp_bank",
                    vietin_bank: "vietin_bank",
                    exim_bank: "exim_bank",
                    vp_bank: "vp_bank",
                    techcom_bank: "techcom_bank",
                    rakyat_bank: "rakyat_bank",
                    rakyat_bank_h2h: "rakyat_bank",
                    bni_bank: "bni_bank",
                    bni_bank_h2h: "bni_bank",
                    permata_bank: "permata_bank",
                    permata_bank_h2h: "permata_bank",
                    sinarmas_bank: "sinarmas_bank",
                    sahabat_bank: "sahabat_bank",
                    yamoney_rub_phone: "yandex",
                    pago_efectivo_luqapay: "pago_efectivo",
                    mach_online_bank: "mach",
                    transfiya: "transfiya",
                    nequi: "nequi",
                    nequi_new: "nequi",
                    bancolombia: "bancolombia",
                    bancolombia_new: "bancolombia",
                    efecty_cash_payok: "efecty",
                    pse_short: "pse",
                    pse_short_new: "pse",
                    daviplata: "daviplata",
                    daviplata_new: "daviplata",
                    colombian_banks_payok: "online-colombian-wallets",
                    hay_hay_banks: "hay_hay",
                    tiger_pay: "tiger_pay",
                    nigerian_bank_transfer: "bank_transfer_main",
                    pay_attitude: "pay_attitude",
                    "online-ecuador-banks-decard": "online-ecuador-banks",
                    "cash-ecuador-decard": "cash",
                    tunki_pagsmile: "tunki_pagsmile",
                    plin_pagsmile: "plin",
                    yape_pagsmile: "yape",
                    "virtual-account-korea": "virtual-account-korea",
                    nigerian_virtual_accounts: "nigerian_virtual_accounts",
                    steam_coin: "steam_coin",
                    airtel_gh: "airtel",
                    airtel_gh_h2h: "airtel",
                    airtel_gh_payhost: "airtel_tigo",
                    mtn_gh: "mtn",
                    mtn_gh_payhost: "mtn",
                    mtn_gh_redirect: "mtn",
                    mtn_gh_h2h: "mtn",
                    airtel_gh_redirect: "airtel",
                    vodafone_gh_redirect: "telecel",
                    vodafone_gh: "telecel",
                    vodafone_gh_payhost: "telecel",
                    emoney_sn: "emoney",
                    card_paystack: "card_paystack",
                    opay_paystack: "opay_paystack",
                    payattitude_paystack: "payattitude_paystack",
                    apple_pay_paystack: "apple_pay_paystack",
                    visa_qr_paystack: "visa_qr_paystack",
                    ussd_paystack: "ussd_paystack",
                    nigerian_banks_paystack: "nigerian_banks_paystack",
                    nigerian_bank_transfer_paystack: "nigerian_bank_transfer_paystack",
                    banco_de_credito: "banco_de_credito",
                    bbva_continental: "bbva",
                    caja_huancayo: "caja_huancayo",
                    caja_arequipa: "caja_arequipa",
                    caja_tacna: "caja_tacna",
                    caja_trujillo: "caja_trujillo",
                    interbank: "interbank",
                    tambo: "tambo",
                    kasnet: "kasnet",
                    scotiabank: "scotiabank",
                    cash_kasnet: "kasnet",
                    cash_tambo: "tambo",
                    cash_ripley: "ripley",
                    cash_western_union: "western_union",
                    cash_caja_huancayo: "caja_huancayo",
                    cash_caja_arequipa: "caja_arequipa",
                    cash_caja_tacna: "caja_tacna",
                    cash_caja_trujillo: "caja_trujillo",
                    cash_banco_de_credito: "banco_de_credito",
                    cash_bbva_continental: "bbva",
                    cash_scotiabank: "scotiabank",
                    etisalat_cash: "etisalat_cash",
                    vodafone_cash: "vodafone_cash",
                    orange_cash: "orange_cash",
                    cib_smart_wallet: "cib_smart_wallet",
                    etisalat_cash_h2h: "etisalat_cash",
                    vodafone_cash_h2h: "vodafone_cash",
                    orange_cash_h2h: "orange_cash",
                    cib_smart_wallet_h2h: "cib_smart_wallet",
                    instapay_h2h: "instapay",
                    we_pay_egp_h2h: "we_pay_egp",
                    bm_wallet_h2h: "bm_wallet",
                    instapay: "instapay",
                    instapay_eg: "instapay",
                    instapay_account_id: "instapay",
                    new_zealand_banks: "new_zealand_banks",
                    we_pay_egp: "we_pay_egp",
                    bm_wallet: "bm_wallet",
                    bca_bank_va: "bca_bank",
                    danamon_bank: "danamon_bank",
                    danamon_bank_h2h: "danamon_bank",
                    "online-indonesian-banks-wowspay": "online-indonesian-banks",
                    tmb_bank: "tmb_bank",
                    tmb_bank_qr: "tmb_bank",
                    cimb_bank_qr: "cimb",
                    kiatnakin_phatra_bank: "kiatnakin_phatra_bank",
                    kiatnakin_phatra_bank_qr: "kiatnakin_phatra_bank",
                    citi_bank: "citi_bank",
                    citi_bank_qr: "citi_bank",
                    smbc_bank: "smbc_bank",
                    smbc_bank_qr: "smbc_bank",
                    anz_bank: "anz_bank",
                    anz_bank_qr: "anz_bank",
                    agriculture_bank: "agriculture_bank",
                    agriculture_bank_qr: "agriculture_bank",
                    government_housing_bank: "government_housing_bank",
                    government_housing_bank_qr: "government_housing_bank",
                    islamic_bank: "islamic_bank",
                    islamic_bank_qr: "islamic_bank",
                    mizuho_bank: "mizuho_bank",
                    mizuho_bank_qr: "mizuho_bank",
                    tcr_bank: "tcr_bank",
                    tcr_bank_qr: "tcr_bank",
                    china_thailand_bank: "china_thailand_bank",
                    china_thailand_bank_qr: "china_thailand_bank",
                    tisco_bank: "tisco_bank",
                    tisco_bank_qr: "tisco_bank",
                    lh_bank: "lh_bank",
                    lh_bank_qr: "lh_bank",
                    gsb_bank_qr: "gsb_bank",
                    chartered_bank: "standard-chartered-bank",
                    chartered_bank_qr: "standard-chartered-bank",
                    icbc_bank: "icbc",
                    icbc_bank_qr: "icbc",
                    hsbc_thai_bank: "hsbc_bank",
                    hsbc_thai_bank_qr: "hsbc_bank",
                    deutsche_thai_bank: "deutsche-bank",
                    deutsche_thai_bank_qr: "deutsche-bank",
                    bangkok_bank_qr: "bangkok_bank",
                    kasikornbank_qr: "kasikornbank",
                    scb_bank_qr: "scb_bank",
                    krung_thai_bank_qr: "krung_thai_bank",
                    uob_bank_thai_qr: "uob_bank",
                    krungsri_bank_qr: "krungsri_bank",
                    okt_okc_rub: "p2p",
                    philippines_va: "bank_transfer_main",
                    philippines_qr: "philippines_qr",
                    philippines_qr_h2h: "philippines_qr",
                    philippines_bt: "bank_transfer_main",
                    viettelpay: "viettelpay",
                    kashio: "kashio",
                    bankalfalah: "bankalfalah",
                    etisalat_online_eg: "etisalat",
                    wepay_online_eg: "wepay",
                    orange_online_eg: "orange-burkina",
                    vodafone_online_eg: "vodafone",
                    vodafone_eg: "vodafone",
                    fawry_eg: "fawry",
                    fawry_eg_phone: "fawry",
                    fawry_eg_document: "fawry",
                    orange_eg: "orange_cash",
                    portmanat: "portmanat",
                    orange_ci_otp: "orange_money",
                    moov_ci_otp: "moov_money",
                    orange_bf_otp: "orange_money",
                    moov_bf_otp: "moov_money",
                    card_visa_nigeria: "visa",
                    card_mastercard_nigeria: "mastercard",
                    card_verve_nigeria: "verve",
                    bank_transfer_malaysia: "bank_transfer_main",
                    gcash_direct: "gcash_direct",
                    gcash_native: "gcash_direct",
                    bank_rakyat_malaysia: "bank_rakyat_malaysia",
                    bank_simpanan_nasional: "bank_simpanan_nasional",
                    linkaja: "linkaja",
                    mb_bank: "mb_bank",
                    vietcom_bank: "vietcombank",
                    maritime_bank: "maritime_bank",
                    vib_bank: "vib_bank",
                    momo_pay_vn: "momopay",
                    mpayment_bf_wave: "wave",
                    nagad_no_fields: "nagad",
                    open_finance: "open_finance",
                    nequi_accentpay: "nequi",
                    swiffy_eft_interkassa: "swiffy_eft",
                    payme: "payme",
                    click: "click",
                    payme_p2p: "payme",
                    click_p2p: "click",
                    click_h2h: "click",
                    paymaya: "paymaya",
                    south_korea_bank_transfer_card: "south-korea-bank-transfer",
                    south_korea_bank_transfer_name: "bank_transfer_main",
                    bank_transfer_gh: "bank_transfer_main",
                    upi_pos_qr: "upi",
                    phone_p2p: "sbp",
                    phone_p2p_vip: "sbp",
                    phone_p2p_v2: "sbp",
                    phone_international: "sbp",
                    card_sberpay: "card_sberpay",
                    mercado_pago_astropay: "mercado_pago_astropay",
                    card_p2p_account: "mir",
                    card_sbp_p2p: "sbp",
                    card_sberpay_p2p: "sberpay",
                    p2p_methods_russia: "p2p_russia",
                    sberpay_paylink: "sberpay",
                    "online-vietnam-banks-short": "online-vietnam-banks",
                    "online-thailand-banks-short": "online-thailand-banks",
                    "online-indonesian-banks-short": "online-indonesian-banks",
                    "online-malaysian-banks-short": "online-malaysian-banks",
                    standard_chartered_bank_malaysia: "standard_chartered_bank_malaysia",
                    bank_islam_malaysia: "bank_islam_malaysia",
                    alliance_bank_malaysia: "alliance_bank_malaysia",
                    affin_bank_berhad_malaysia: "affin_bank_berhad_malaysia",
                    virtual_account_sulifu: "virtual_account",
                    easypaisa_account: "easypaisa",
                    jazzcash_account: "jazzcash",
                    "card-p2p_kapital": "kapital_bank",
                    "card-p2p_m10": "card-p2p_m10",
                    coins: "coins",
                    omnipay: "omnipay",
                    "online-philippines-banks-short": "banks-of-the-philippines",
                    payvalida: "payvalida",
                    payvalida_ecuador: "payvalida",
                    card_flutterwave: "card_flutterwave",
                    bank_account_flutterwave: "bank_account_flutterwave",
                    qr_flutterwave: "qr_flutterwave",
                    ussd_flutterwave: "ussd_flutterwave",
                    bank_transfer_flutterwave: "bank_transfer_flutterwave",
                    banbif: "banbif",
                    banco_ripley: "banco_ripley",
                    niubiz_agents: "niubiz_agents",
                    red_digital: "red_digital",
                    cash_caja_cusco: "cash_caja_cusco",
                    cash_caja_ica: "cash_caja_ica",
                    cash_caja_piura: "cash_caja_piura",
                    upi_phone: "upi",
                    gpay_einpayz_phone: "gpay",
                    paytm_phone: "paytm",
                    phone_pe_phone: "phone-pe",
                    ma7fazty: "ma7fazty",
                    qnb_wallet: "qnb_wallet",
                    aib_wallet: "aib_wallet",
                    cashati: "cashati",
                    halan_cash: "halan_cash",
                    nbk_wallet: "nbk_wallet",
                    floussy: "floussy",
                    faisal_cash: "faisal_cash",
                    blom_wallet: "blom_wallet",
                    gebe: "gebe",
                    phone_cash: "phone_cash",
                    easy_cash: "easy_cash",
                    qahera_cash: "qahera_cash",
                    ameen: "ameen",
                    banki_wallet: "banki_wallet",
                    audi2pay: "audi2pay",
                    abk_wallet: "abk_wallet",
                    katarun_3altayer: "katarun_3altayer",
                    scb_e_wallet: "scb_e_wallet",
                    ub_wallet: "ub_wallet",
                    e_pocket: "e_pocket",
                    adcb_wallet: "adcb_wallet",
                    agri_wallet: "agri_wallet",
                    upi_id: "upi",
                    gpay_upi_id: "gpay",
                    paytm_upi_id: "paytm",
                    phonepe_upi_id: "phonepe",
                    paytgstar: "paytgstar",
                    kuchinga: "kuchinga",
                    virtual_account_idr: "bank_transfer_main",
                    "africa-mobile-grouped": "africa-mobile-grouped",
                    mpayment_bj_moov: "moov_money",
                    mpayment_bj_moov_h2h: "moov_money",
                    tether_ton: "tether_ton",
                    santander_argentina: "santander_cash",
                    hsbc_bank_argentina: "hsbc_bank",
                    banco_provincia_argentina: "banco_provincia_argentina",
                    macro_argentina: "macro_argentina",
                    bdl_nation_argentina: "bdl_nation_argentina",
                    ipay: "ipay",
                    upay_manual: "upay_manual",
                    banktransfer_sri_lanka: "bank_transfer_blue",
                    mtn_rw: "mtn",
                    airtel_rw: "airtel",
                    south_africa_bank_transfer: "bank_transfer_main",
                    terminals: "terminals",
                    exito: "exito",
                    exito_new: "exito",
                    movii: "movii",
                    movii_new: "movii",
                    rappipay: "rappipay",
                    rappipay_new: "rappipay",
                    esewa: "esewa_direct",
                    imepay: "imepay",
                    cellpay: "cellpay",
                    kassatj_tg: "kassatj_tg",
                    mickbet_bo_wa: "mickbet_bo_wa",
                    apay_py_wa: "apay_py_wa",
                    bank_transfer_nepal: "bank_transfer_main",
                    bank_transfer_panama: "bank_transfer_no_words",
                    upi_vpa: "upi",
                    gpay_vpa: "gpay",
                    paytm_vpa: "paytm",
                    phone_pe_vpa: "phonepe",
                    nequi_payok: "nequi",
                    telegram_pay: "telegram",
                    brubank: "brubank",
                    prex: "prex",
                    mercado_pago: "mercado_pago",
                    jazzcash_cnic: "jazzcash_v2",
                    easypaisa_cnic: "easypaisa",
                    card_visa_cr: "visa",
                    card_mastercard_cr: "mastercard",
                    discover: "discover",
                    card_amex_mexico: "american_express",
                    card_amex_cr: "american_express",
                    card_diners_cr: "diners_club",
                    card_visa_ecuador: "visa",
                    card_mastercard_ecuador: "mastercard",
                    card_amex_ecuador: "american_express",
                    card_diners_ecuador: "diners_club",
                    tia: "tia",
                    facilito: "facilito",
                    farmacias911_ecuador: "farmacias911",
                    western_union_ecuador: "western_union_v2",
                    activa_western_union: "activa_western_union",
                    red_activa: "red_activa",
                    amazonas_online_bank: "banco_amazonas",
                    pacifico_online_bank: "banco_pacifico",
                    fast_recharge_ma: "fast_recharge_ma",
                    internacional_online_bank: "banco_internacional",
                    banco_del_barrio: "banco_del_barrio",
                    pichincha_mi_vecino: "pichincha_mi_vecino",
                    pago_agil: "pago_agil",
                    servipagos: "servipagos",
                    payphone: "payphone",
                    bank_transfer_ecuador: "bank_transfer_main",
                    ecuador_cash_grouped: "ecuador_cash_grouped",
                    "express-havale-short": "express-havale",
                    "peple-short": "peple",
                    "papara-wallet-short": "papara-wallet",
                    paybol: "paybol",
                    "popypara-short": "popypara",
                    transfer_by_sber: "transfer_by_sber",
                    transfer_by_sber_redirect: "transfer_by_sber",
                    kbzpay: "kbzpay",
                    wavepay: "wavepay",
                    wavepay_l: "wavepay",
                    vietnam_banks_payok: "vietnam_banks_payok",
                    momo_phone_payok: "momo_phone_payok",
                    viettelpay_payok: "viettelpay_payok",
                    viet_qr_payok: "viet_qr_payok",
                    mtn_zambia_h2h: "mtn",
                    mtn_zambia: "mtn",
                    mtn_malawi: "mtn",
                    zamtel_zambia: "zamtel",
                    zamtel_zambia_h2h: "zamtel",
                    airtel_zambia: "airtel",
                    airtel_malawi: "airtel",
                    card_sberpay_one_click: "card_sberpay_one_click",
                    card_p2p_krw: "argospay",
                    africell_congo: "africell",
                    vodacom_congo: "vodacom_tz",
                    airtel_congo: "airtel",
                    orange_congo: "orange_money",
                    spei_h2h: "spei",
                    card_visa_mexico: "visa",
                    card_mastercard_mexico: "mastercard",
                    banko_guayaquil: "banko_guayaquil",
                    banco_amazonas: "banco_amazonas",
                    mi_comisariato: "mi_comisariato",
                    banco_coopnacional: "banco_coopnacional",
                    tigo_tz: "tigo_tz",
                    tigo_tz_h2h: "tigo_tz",
                    airtel_tz: "airtel_tz",
                    airtel_tz_h2h: "airtel_tz",
                    vodacom_tz: "vodacom_tz",
                    kuchinga_sn: "kuchinga",
                    bank_transfer_thb: "bank_transfer_main",
                    tbc_bank: "tbc_bank",
                    bank_of_georgia: "bank_of_georgia",
                    santander: "santander_cash",
                    paypal: "paypal",
                    baz_super_app: "baz_super_app",
                    paynet: "paynet",
                    banco_azteca: "banco_azteca",
                    banco_afirme: "banco_afirme",
                    walmart_express: "walmart_express",
                    paymaya_payhost: "paymaya",
                    gcash_native_payhost: "gcash_direct",
                    "online-philippines-banks-short_payhost": "banks-of-the-philippines",
                    mercadopago_short: "mercado_pago",
                    mercadopago_h2h_tax: "mercado_pago",
                    payout_by_sber: "sber",
                    expresso: "expresso",
                    payout_by_t_bank: "t_bank",
                    card_full_epulw: "card",
                    payout_in_alfa: "alfa-click",
                    smartpay_card_h2h: "smartpay_card",
                    smartpay_h2h: "smartpay",
                    emanat_h2h: "emanat",
                    p2p_market: "t_bank",
                    indonesia_va_h2h: "indonesia_va",
                    mpayment_bf_orange_payhost: "orange_money",
                    mpayment_gn_orange_payhost: "orange_money",
                    mpayment_ml_orange_payhost: "orange_money",
                    mpayment_cm_orange_payhost: "orange_money",
                    orange_congo_payhost: "orange_money",
                    celtiis_bj: "celtiis",
                    kakaopay: "kakaopay",
                    kakaopay_fast_transfer: "kakaopay_fast_transfer",
                    toss_fast_transfer: "toss_fast_transfer",
                    nayapay: "nayapay",
                    hatton_national_bank: "hatton_national_bank",
                    commercial_bank: "commercial_bank",
                    tg_wallet: "tg_wallet",
                    shopee_pay: "shopee_pay",
                    tigo_money: "tigo",
                    ficohsa: "ficohsa",
                    promptpay_full: "promptpay",
                    akisi_cash: "akisi_cash",
                    interbanco_cash: "interbanco_cash",
                    interbanco_bt: "interbanco_bt",
                    banco_industrial_bt: "banco_industrial_bt",
                    online_guatemala_banks: "online_guatemala_banks",
                    sinpe_movil: "sinpe_movil",
                    sinpe: "sinpe",
                    palmpay_paystack: "palmpay_paystack",
                    onebuyio: "onebuyio_new",
                    linkaja_payout: "linkaja",
                    shopee_pay_payout_idr: "shopee_pay",
                    mach_wallet: "mach",
                    card_visa_honduras: "visa",
                    card_mastercard_honduras: "mastercard",
                    card_visa_guatemala: "visa",
                    card_mastercard_guatemala: "mastercard",
                    super24_cash: "super24",
                    fundacion_genesis_cash: "fundacion_genesis",
                    caja_desarrollo_cash: "caja_desarrollo",
                    punto_xpress_cash: "punto_xpress",
                    paycash_cash: "paycash",
                    paycash_bt: "paycash",
                    paycash: "paycash",
                    easypaisa_account_cnic: "easypaisa",
                    jazzcash_account_cnic: "jazzcash_v2",
                    pago_movil_p2c: "pago_movil",
                    pago_movil_c2p: "pago_movil_direct",
                    boton_pago: "bank_transfer_main",
                    biopago: "biopago",
                    venezuela_bank_transfer: "venezuela_bank_transfer",
                    sbp_payout_tbank: "t_bank",
                    sbp_payout_sber: "sber",
                    deuna_qr: "deuna",
                    steamcoin_mobile: "steamcoin_mobile",
                    sbp_transgran_rabbit: "sbp_t_bank_sber",
                    capitec_pay_me: "capitec_pay_me",
                    cambodian_banks: "cambodian_banks",
                    khqr: "khqr",
                    tapbank_namba: "t_bank",
                    account_transfer_cis: "account_transfer_cis",
                    easypaisa_phone: "easypaisa",
                    easypaisa_transfer: "easypaisa",
                    jazzcash_phone: "jazzcash_v2",
                    jazzcash_transfer: "jazzcash",
                    poli: "poli",
                    sbp_transgran_rabbit_sber: "sber",
                    sbp_transgran_rabbit_tbank: "t_bank",
                    "sbp-transgran-grouped": "sbp_t_bank_sber",
                    tpay_one_click: "tpay_one_click",
                    punto_pago: "punto_pago",
                    linepay: "linepay",
                    cash_speed: "cash_speed",
                    beshoy_al_wazer: "beshoy_al_wazer",
                    winbalance: "winbalance",
                    mercado_pago_h2h: "mercado_pago",
                    mercadopago_short_2: "mercado_pago",
                    parazula: "parazula",
                    ekono_stores: "ekono_stores",
                    banco_popular: "banco_popular",
                    banco_popular_digital_banking: "banco_popular",
                    banco_popular_agencies: "banco_popular",
                    banco_promerica: "banco_promerica",
                    farmacia_fischel: "farmacia_fischel",
                    farmacia_bomba: "farmacia_bomba",
                    bank_transfer_south_korea: "card",
                    super_farmacia: "super_farmacia",
                    via: "via",
                    "card-p2p-tjs-amonat-bank": "amonat_bank",
                    "card-p2p-tjs-eshata-bank": "eshata_bank",
                    "card-p2p-tjs-alif-bank": "alif_bank",
                    "card-p2p-tjs-dushanbe-bank": "dushanbe_bank",
                    "card-p2p-tjs-other-bank": "other_bank",
                    sys_tienda: "sys_tienda",
                    bank_transfer_guatemala: "bank_transfer_no_words",
                    bank_transfer_cr: "bank_transfer_main",
                    d17: "d17",
                    d17_h2h: "d17",
                    online_honduras_banks: "bank_transfer_main",
                    halopesa_tz: "halopesa_tz",
                    bank_transfer_japan: "bank_transfer_main",
                    voucher: "voucher",
                    debin: "debin",
                    paybol_full: "paybol",
                    troy: "troy",
                    parolapara: "parolapara",
                    papel: "papel",
                    mefete: "paratim",
                    paycell: "paycell",
                    card_ua: "card_ua",
                    bank_transfer_ars_h2h: "bank_transfer_ars",
                    naverpay: "naverpay",
                    payco_south_korea: "payco_south_korea",
                    lemoncash: "lemoncash",
                    lemoncash_peru: "lemoncash",
                    lemoncash_short: "lemoncash",
                    khan_bank_p2p_card: "khan_bank",
                    khan_bank_p2p_phone: "khan_bank",
                    capitron_bank_p2p_card: "capitron_bank",
                    capitron_bank_p2p_phone: "capitron_bank",
                    state_bank_p2p_card: "state_bank",
                    state_bank_p2p_phone: "state_bank",
                    hostapay_mongolia_p2p_card: "hostapay_mongolia",
                    hostapay_mongolia_p2p_phone: "hostapay_mongolia",
                    phone_p2p_tjs: "p2p-methods-tajikistan",
                    pagomovil_h2h: "pago_movil",
                    bank_transfer_ve_h2h: "bank_transfer_main",
                    online_venezuela_banks: "online_venezuela_banks",
                    bank_transfer_sl: "bank_transfer_main",
                    hot_voucher: "hot_voucher",
                    c_voucher: "c_voucher",
                    credit_card_japan: "card",
                    payphone_wallet: "payphone",
                    sured: "sured",
                    gana: "gana",
                    bank_transfer_venezuela_delta: "bank_transfer_main",
                    onebuy: "1buy",
                    lemoncash_cvu: "lemoncash",
                    online_costa_rica_banks: "bank_transfer_main",
                    dopayment_chile_bank_transfer: "bank_transfer_main",
                    mpayment_mw_mtn: "mtn",
                    mpayment_mw_airtel: "airtel_money",
                    mpayment_mw_airtel_redirect: "airtel_money",
                    vtb_one_click: "vtb_one_click",
                    garpa: "garpa",
                    lemoncash_redirect: "lemoncash",
                    paratim: "paratim",
                    premium_voucher: "premium_voucher",
                    touchngo_native: "touchngo",
                    bank_transfer_cm: "bank_transfer_main",
                    bank_transfer_tz: "bank_transfer_main",
                    flouci: "flouci",
                    flouci_h2h: "flouci",
                    biat: "biat",
                    biat_h2h: "biat",
                    airtel_congo_cg: "airtel",
                    online_japan_banks_short: "bank_transfer_main",
                    ababank: "ababank",
                    wing: "wing",
                    bank_transfer_malawi: "bank_transfer_main",
                    tnm_mobile_money_malawi: "tnm_mobile_money",
                    tnm_mobile_money_malawi_redirect: "tnm_mobile_money",
                    bank_transfer_bw: "bank_transfer_main",
                    bank_transfer_mw: "bank_transfer_main",
                    bank_transfer_cg: "bank_transfer_main",
                    wallet_co: "wallet_co",
                    card_visa_document: "visa",
                    card_mastercard_document: "mastercard",
                    virtual_bank_trasfer: "japan_online_banking",
                    physical_bank_trasfer: "japan_online_banking",
                    bemovil: "bemovil",
                    omniswitch: "omniswitch",
                    rapi_activo: "rapi_activo",
                    orange_mg: "orange_money",
                    mvola_mg: "mvola",
                    airtel_mg: "airtel_tz",
                    zamani_cash_ne: "zamani_cash",
                    bank_transfer_ne: "bank_transfer_blue",
                    mpayment_ne_zamani: "zamani",
                    mpayment_ne_zamani_h2h: "zamani",
                    mpayment_ne_airtel: "airtel_money",
                    mpayment_ne_moov: "moov_money",
                    swiffy_eft_redirect: "swiffy_eft",
                    kh_qr_h2h: "khqr",
                    pipay: "pipay",
                    fawry_mwallet: "fawry",
                    fawry_voucher: "fawry",
                    banco_gt_continental_guatemala: "banco_gt_continental",
                    one_agent: "agent",
                    open_banking: "open_banking",
                    open_banking_utorg: "open_banking",
                    mpayment_cg_mtn: "mtn",
                    bank_transfer_h2h: "online-ecuador-banks",
                    bolivia_bank_transfer_full: "bank_transfer_blue",
                    mpayment_td_airtel: "airtel_money",
                    zazer_pay_tg: "zazer_pay_tg",
                    zazer_pay_whatsapp: "zazer_pay_whatsapp",
                    multibanco: "multibanco",
                    multibanco_h2h: "multibanco",
                    mbway: "mbway",
                    mbway_h2h: "mbway",
                    tele2_kzt: "tele2",
                    beeline_kzt: "beeline",
                    kcell_kzt: "kcell",
                    activ_kzt: "activ",
                    altel_kzt: "altel",
                    przelewy24: "przelewy24",
                    blik: "blik",
                    blik_ftd: "blik",
                    epay_bg: "epay_bg",
                    pay_now: "pay_now",
                    papara_h2h: "papara-wallet",
                    enpara_h2h: "enpara",
                    phone_p2p_kgs: "visa_mastercard",
                    mybank: "mybank",
                    revolut_pay: "revolut_pay",
                    n26: "n26",
                    wise: "wise",
                    rapid_transfer_v2: "cv_rpdt",
                    rapid_transfer_redirect: "rapid_transfer",
                    eps: "eps",
                    liberpay: "sepa",
                    applepay: "applepay_mastercard",
                    bank_transfer_turkey: "bank_transfer_main",
                    bank_transfer_bolivia_h2h: "bolivia_bank_transfer",
                    yape: "yape",
                    tmoney_tg_h2h: "tmoney_tg",
                    mpayment_tg_moov_h2h: "moov_money",
                    service_rapide: "service_rapide",
                    attijariwafa_bank: "attijariwafa_bank",
                    bank_tranfsfer_mad: "bank_tranfsfer_mad",
                    mpesa_et: "mpesa",
                    bank_transfer_ethiopia: "bank_transfer_main",
                    telebirr: "telebirr",
                    cbe_birr: "cbe_birr",
                    ebirr: "ebirr",
                    kacha: "kacha",
                    enat_bank: "enat_bank",
                    payid_aud: "payid_aud",
                    googlepay: "googlepay_mastercard",
                    one_agent_vo: "agent_vo",
                    one_agent_ji: "agent_ji",
                    one_agent_on: "agent_on",
                    one_agent_bm: "agent_bm",
                    one_agent_d17: "agent_d17",
                    one_agent_fl: "agent_fl",
                    one_agent_wb: "attijariwafa_bank",
                    one_agent_cp: "cashplus",
                    one_agent_dp: "agent_dp",
                    one_agent_bc: "agent_bc",
                    one_agent_bb: "agent_bb",
                    one_agent_ip: "instapay",
                    one_agent_fp: "fawry",
                    one_agent_es: "etisalat",
                    one_agent_cm: "agent",
                    one_agent_gh: "agent",
                    one_agent_tunis: "agent",
                    one_agent_ci: "agent",
                    one_agent_dz: "agent",
                    wave_ci_cash: "agent_wave",
                    orange_cm_cash: "orange_cm_cash",
                    mtn_cm_cash: "mtn_cm_cash",
                    orange_gh_cash: "agent_orange",
                    mtn_gh_cash: "agent_mtn",
                    vodafone_gh_cash: "agent_vodafone",
                    bank_transfer_cambodia: "bank_transfer_main",
                    bank_transfer_myanmar: "bank_transfer_main",
                    bank_transfer_japan_h2h: "bank_transfer_main",
                    cash_out_gtq: "akisi_cash_gtq",
                    baridimob: "baridimob",
                    bank_of_africa: "bank_of_africa",
                    cih: "cih",
                    credit_agricole: "credit_agricole",
                    banque_populaire: "banque_populaire",
                    attijariwafa: "attijariwafa_bank",
                    morocco_bank_transfer_grouped: "morocco_bank_transfer_grouped",
                    cih_bank: "cih",
                    cashplus: "cashplus",
                    attijari_bank: "attijariwafa_bank",
                    societe_generale: "societe_generale",
                    easy_pay_bd_tg: "easy_pay_bd_tg",
                    easy_pay_bd_wa: "easy_pay_bd_wa",
                    fast_pay_bd_tg: "fast_pay_bd_tg",
                    fast_pay_bd_wa: "fast_pay_bd_wa",
                    fast_payment_np_wa: "fast_payment_np_wa",
                    fast_payment_np_tg: "fast_payment_np_tg",
                    mick_bet: "mick_bet",
                    kassa_tj: "kassa_tj",
                    apay: "apay",
                    matchpay: "matchpay",
                    one_click_kgs: "payin_qr",
                    gotyme: "gotyme",
                    bank_transfer_mnt: "bank_transfer_main",
                    kbzpay_account: "kbzpay",
                    benefit_pay: "benefit_pay",
                    ila_bank: "ila_bank",
                    benefit_pay_h2h: "benefit_pay",
                    ila_bank_h2h: "ila_bank",
                    online_pakistan_banks: "online_pakistan_banks",
                    khalti_qr: "khalti",
                    klarna: "klarna",
                    baridimob_account: "baridimob",
                    metrobank_philippines: "metrobank",
                    landbank_philippines: "landbank",
                    bdo_bank_philippines: "banco_de_oro",
                    bpi_bank_philippines: "philippines_banks",
                    ubp_bank_philippines: "ubp_bank_philippines",
                    redotpay: "redotpay",
                    garpa_h2h: "garpa_h2h",
                    vodacom_tz_redirect: "vodacom_tz",
                    p2p_methods_russia_banks: "p2p_methods_russia_banks",
                    south_korea_va: "south_korea_va",
                    "card-p2p-kzt": "card_p2p",
                    cih_bank_h2h: "cih",
                    vtb_p2p: "vtb_one_click",
                    sber_p2p: "sber",
                    alfa_p2p: "alfa-click",
                    tbank_p2p: "t_bank",
                    phone_tjs_dushanbe: "p2p-methods-tajikistan",
                    korti_milli_h2h: "korti_milli",
                    pak_deposit_wa: "pak_deposit_wa",
                    onrampchangelly: "onrampchangelly",
                    momopay_vn: "momopay",
                    viettelpay_vn: "viettelpay",
                    zalopay_vn: "zalopay",
                    ideal: "ideal",
                    vodafone_gh_h2h: "telecel",
                    mpayment_ne_airtel_h2h: "airtel_money",
                    one_agent_morocco: "agent",
                    airtel_zambia_h2h: "airtel",
                    mpayment_ne_moov_h2h: "moov_money",
                    account_transfer_cis_h2h: "account_transfer_cis_h2h",
                    mypayz: "mypayz",
                    ozon_one_click: "ozon_one_click",
                    qr_universal_h2h: "qr_universal_h2h",
                    qr_universal: "qr_universal",
                    payme_h2h: "payme_h2h",
                    cashplus_h2h: "cashplus",
                    jibi_h2h: "jibi",
                    chaabi_h2h: "chaabi_cash",
                    mtcash_h2h: "mtcash",
                    orange_mad_h2h: "orange_money",
                    inwimoney_h2h: "inwi_money",
                    vodacom_tz_h2h: "vodacom_tz",
                    halopesa_tz_h2h: "halopesa_tz",
                    mtc_one_click: "mtc",
                    pagomovil_h2h_stblfinance: "pago_movil",
                    bank_transfer_bwp: "bank_transfer_main",
                    mpayment_bw_orange: "orange_money",
                    card_sbp_h2h: "sbp",
                    tbank_me2me: "t_bank",
                    sber_me2me: "sber",
                    mpayment_gm_qmoney: "qmoney",
                    mpayment_gm_afrimoney: "afrimoney",
                    mpayment_gm_wave: "wave",
                    rcgcard_pc_groupes_category: "rcgcard_pc_groupes_category",
                    "viettel-vnd-giftcard": "viettel_vnd_giftcard",
                    "vinaphone-vnd-giftcard": "vinaphone_vnd_giftcard",
                    "mobifone-vnd-giftcard": "mobifone_vnd_giftcard",
                    "vietnammobile-vnd-giftcard": "vietnammobile_vnd_giftcard",
                    "tpay-1click_h2h": "tpay_one_click",
                    online_banks_ecuador_grouped: "online-ecuador-banks",
                    "tpay-1click_h2h_ios": "tpay_one_click",
                    "tpay-1click_h2h_android": "tpay_one_click",
                    skypay_rub: "skypay_rub",
                    zapper: "zapper",
                    pay_fas: "pay_fas",
                    mtc_mobile_money: "mtc_mobile",
                    fnb_ewallet: "fnb",
                    mpesa_mz: "mpesa_mz",
                    mkesh: "mkesh",
                    emola: "emola",
                    pol: "pol",
                    tether_pol: "tether_pol",
                    tether_arb: "tether_arb",
                    eth_arb: "eth_arb",
                    eth_base: "eth_base",
                    usdc_arb: "usdc_arb",
                    usdc_base: "usdc_base",
                    usdc_pol: "usdc_pol",
                    mypay: "mypay",
                    ababank_redirect: "ababank",
                    wing_redirect: "wing",
                    acleda_redirect: "acleda",
                    acleda: "acleda",
                    lbankalik: "lbankalik",
                    albarid: "albarid",
                    damane: "damane",
                    jibi: "jibi",
                    chaabi: "chaabi_cash",
                    baridimob_dz: "baridimob",
                    iban: "bank_transfer_main",
                    "1kassa_kg": "1kassa_kg",
                    revolut: "revolut",
                    pay_go_kg: "pay_go_kg",
                    payshop: "payshop",
                    bank_transfer_gel: "bank_transfer_main",
                    qr_turkey: "fast_qr",
                    mercado_one_click: "mercado_pago",
                    bim: "bim",
                    global66: "global66",
                    izipayya: "izipayya",
                    ligo: "ligo",
                    ohpay: "ohpay",
                    bank_transfer_zar: "bank_transfer_main",
                    qr_wallet_peru_grouped: "qr_universal",
                    paya_ar_wa: "paya_ar_wa",
                    payment_tj_tg: "payment_tj_tg",
                    payavandpay_tg: "payavandpay_tg"
                }, m);

            function h(e, t) {
                let a = t;
                if (a < 2) return [e];
                const n = e.length,
                    o = [];
                let r, i = 0;
                if (n % a === 0) {
                    r = Math.floor(n / a);
                    while (i < n) o.push(e.slice(i, i += r))
                } else
                    while (i < n) r = Math.ceil((n - i) / a), a -= 1, o.push(e.slice(i, i += r));
                return o
            }

            function g(e, t, a = 5) {
                const n = [5, 10, 25, 50, 75, 100, 150, 250, 500, 1e3, 3e3, 5e3, 1e4, 15e3, 25e3, 5e4, 15e4, 25e4].filter((a => (!t || a <= t) && a >= e));
                return h(n, a).map(((e, t) => 0 === t ? e[0] : e[e.length - 1]))
            }
            const y = e => {
                    const t = {
                        phone: {
                            name: "tel",
                            autocomplete: "tel",
                            type: "tel"
                        },
                        operator: {
                            name: "tel",
                            autocomplete: "tel",
                            type: "tel"
                        },
                        "e-money": {
                            name: "e-money",
                            autocomplete: "cc-number"
                        }
                    }[e];
                    return l({
                        name: "wallet",
                        autocomplete: "off",
                        type: "text"
                    }, t)
                },
                v = e => _[e]
        },
        301374: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(176072),
                o = Object.defineProperty,
                r = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                l = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                c = (e, t) => {
                    for (var a in t || (t = {})) i.call(t, a) && l(e, a, t[a]);
                    if (r)
                        for (var a of r(t)) s.call(t, a) && l(e, a, t[a]);
                    return e
                },
                d = (e, t) => {
                    var a = {};
                    for (var n in e) i.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                    if (null != e && r)
                        for (var n of r(e)) t.indexOf(n) < 0 && s.call(e, n) && (a[n] = e[n]);
                    return a
                };
            const u = e => {
                var t = e,
                    {
                        broadcastUrl: a
                    } = t,
                    n = d(t, ["broadcastUrl"]);
                return c({
                    broadcastUrl: "N/A" === a ? null : a
                }, n)
            };
            var p = a(285834);
            const m = ({
                activeTeam: e,
                baseOdds: t = [],
                categoryId: a,
                enabledOddsCount: o,
                externalId: r,
                gameScore: i,
                id: s,
                isHot: l,
                matchScore: c,
                matchTime: d,
                meta: m = {},
                outright: _,
                periodsScore: h,
                providerId: g,
                scorePeriodList: y,
                scoreTotal: v,
                service: b,
                showOnPrematchPage: f,
                sportId: k,
                startDateTime: w,
                status: S,
                teamIdFirst: C,
                teamIdSecond: I,
                teamNameFirst: O,
                teamNameSecond: T,
                tournamentId: P,
                timestamp: A,
                dateOfMatch: L
            }) => {
                const B = i && i.Sc1 && i.Sc2 && ("0" !== i.Sc1 || "0" !== i.Sc2) ? i : null,
                    M = w - Date.now() > 63072e6;
                return {
                    type: p.p.MATCH,
                    activeTeam: e,
                    baseOdds: t,
                    categoryId: a,
                    startTime: M ? void 0 : 1e3 * L,
                    date: M ? void 0 : (0, n.S)(new Date(w)),
                    enabledOddsCount: o,
                    externalId: r,
                    gameScore: B,
                    id: s,
                    isHot: l,
                    matchScore: c,
                    matchTime: d,
                    meta: u(m),
                    outright: _,
                    periodsScore: h,
                    providerId: g,
                    scorePeriodList: y,
                    scoreTotal: v,
                    service: b,
                    showOnPrematchPage: f,
                    showStatLink: !1,
                    sportId: k,
                    startDateTime: M ? void 0 : w,
                    status: S,
                    teamIdFirst: C,
                    teamIdSecond: I,
                    teamNameFirst: O,
                    teamNameSecond: T,
                    tournamentId: P,
                    timestamp: A
                }
            }
        },
        880361: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => n,
                U: () => o
            });
            const n = ({
                    Sc1: e,
                    Sc2: t
                }) => `${e}:${t}`,
                o = e => e.map((({
                    Sc1: e,
                    Sc2: t
                }) => `${e}:${t}`)).join(" - ")
        },
        655528: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(932256),
                o = a(27720);
            class r {
                constructor({
                    sport: e,
                    tournament: t,
                    match: a,
                    odd: n,
                    amount: o = null,
                    freeBet: r = null,
                    group: i
                }) {
                    this.sport = e, this.tournament = t, this.match = a, this.odd = n, this.amount = o, this.freeBet = r, this.group = i, this.maxBetAmount = {}, this.providerId = this.odd.providerId
                }
                get coefficient() {
                    return this.odd.coefficient
                }
                get disabled() {
                    return this.odd.disabled
                }
                get id() {
                    return this.odd.id
                }
                get name() {
                    var e, t, a;
                    const o = [];
                    return this.group && o.push(this.group.name), o.push(this.odd.name), [n.HaS, n.bc0].includes(this.providerId) ? (null == (e = this.odd.specialValueDescription) ? void 0 : e.trim()) && o.push(this.odd.specialValueDescription) : ((null == (t = this.odd.specialValueDescription) ? void 0 : t.trim()) || (null == (a = this.odd.specialValue) ? void 0 : a.trim())) && o.push(this.odd.specialValueDescription || this.odd.specialValue), o.join(", ")
                }
                get isLive() {
                    return this.match.service === n.PTO
                }
                get matchId() {
                    return this.match.id
                }
                get amountDto() {
                    return {
                        coefficient: this.coefficient,
                        providerId: this.odd.providerId,
                        match: {
                            matchId: this.match.id,
                            sportId: this.match.sportId,
                            categoryId: this.match.categoryId,
                            tournamentId: this.match.tournamentId
                        },
                        odd: {
                            id: this.odd.id,
                            service: this.match.service,
                            outCome: "0",
                            specialValue: this.odd.specialValue || "0",
                            coefficient: this.odd.coefficient,
                            subTypeId: this.odd.typeId,
                            typeId: this.odd.groupId
                        }
                    }
                }
                get dto() {
                    return {
                        id: this.id,
                        coefficient: this.coefficient,
                        providerId: this.odd.providerId
                    }
                }
                get modelView() {
                    var e;
                    return new o.Z({
                        id: this.id,
                        name: this.name,
                        coefficient: this.coefficient,
                        isLive: this.match.service === n.PTO,
                        firstString: this.match.teamNameFirst,
                        secondString: this.match.outright ? void 0 : this.match.teamNameSecond,
                        bottomString: (null == (e = this.tournament) ? void 0 : e.name) || "",
                        isDisabled: this.disabled,
                        amount: this.amount,
                        maxBetAmount: this.maxBetAmount,
                        sportId: this.match.sportId,
                        sportTagKey: this.sport.sportTagKey,
                        sportIconUrl: this.sport.iconUrl,
                        matchId: this.matchId,
                        providerId: this.odd.providerId,
                        match: this.match,
                        freeBet: this.freeBet,
                        tournamentId: this.tournament.id
                    })
                }
            }
            const i = r
        },
        285834: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p,
                p: () => d
            });
            var n = a(240380),
                o = Object.defineProperty,
                r = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                l = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                c = (e, t) => {
                    for (var a in t || (t = {})) i.call(t, a) && l(e, a, t[a]);
                    if (r)
                        for (var a of r(t)) s.call(t, a) && l(e, a, t[a]);
                    return e
                };
            const d = Object.freeze({
                    SPORT: "sport",
                    CATEGORY: "category",
                    TOURNAMENT: "tournament",
                    MATCH: "match",
                    SUBGAME: "subgame",
                    ODD: "odd"
                }),
                u = (e, t = []) => {
                    const a = (0, n.Z)(e),
                        o = `${e}Map`,
                        r = `${o}Loaded`,
                        i = t.map((t => ({
                            key: `${t}Id`,
                            stateKey: `${e}MapBy${(0,n.Z)(t)}Id`,
                            name: t
                        }))),
                        s = (e, t) => t in e[o],
                        l = (e, t) => {
                            e[o][t.id] = t
                        },
                        u = (e, t) => {
                            delete e[o][t.id]
                        },
                        p = (t, a) => {
                            var n;
                            const r = t[o][a.id];
                            if (e === d.MATCH) {
                                const e = null != (n = a.timestamp) ? n : 0;
                                if (r.timestamp && r.timestamp > e) return void console.warn("Race condition issue skip update")
                            }
                            Object.assign(r, a)
                        },
                        m = {
                            add(e, t) {
                                s(e, t.id) || l(e, t)
                            },
                            addOrUpdate(e, t) {
                                s(e, t.id) ? p(e, t) : l(e, t)
                            },
                            delete(e, t) {
                                const a = e[o][t];
                                a && u(e, a)
                            },
                            update(e, t) {
                                s(e, t.id) && p(e, t)
                            },
                            set(e, t) {
                                s(e, t.id) ? p(e, t) : l(e, t)
                            }
                        };
                    return {
                        state: {
                            [o]: {},
                            [r]: !1
                        },
                        getters: c({
                            [`has${a}`]: e => t => s(e, t)
                        }, i.reduce(((e, t) => (e[t.stateKey] = e => Object.values(e[o]).reduce(((e, a) => (e[a[t.key]] ? e[a[t.key]][a.id] = a : e[a[t.key]] = {
                            [a.id]: a
                        }, e)), {}), e)), {})),
                        mutations: {
                            [`set${(0,n.Z)(r)}`](e, t) {
                                e[r] = t
                            },
                            [`set${a}Map`](e, t) {
                                e[o] = t
                            },
                            [`add${a}`]: m.add,
                            [`add${a}List`]: (e, t) => {
                                for (const a of t) m.add(e, a)
                            },
                            [`addOrUpdate${a}`]: m.addOrUpdate,
                            [`addOrUpdate${a}List`]: (e, t) => {
                                for (const a of t) m.addOrUpdate(e, a)
                            },
                            [`delete${a}`]: m.delete,
                            [`delete${a}List`]: (e, t) => {
                                for (const a of t) m.delete(e, a)
                            },
                            [`update${a}`]: m.update,
                            [`update${a}List`]: (e, t) => {
                                for (const a of t) m.update(e, a)
                            },
                            [`set${a}`]: m.set,
                            [`set${a}List`]: (e, t) => {
                                for (const a of t) m.set(e, a)
                            }
                        }
                    }
                },
                p = u
        },
        69302: (e, t, a) => {
            "use strict";
            a.d(t, {
                T: () => r
            });
            var n = a(399925);
            const o = "demo";

            function r(e, t, a, r) {
                const i = e.matched.some((e => !0 === e.meta[n.Tl]));
                i && r || a(), "casino" === r[o] && a({
                    path: "/"
                }), a()
            }
        },
        771001: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => v
            });
            var n = a(932256),
                o = a(515440),
                r = a(811833),
                i = a(878417),
                s = a(656459),
                l = a(894710),
                c = a(59394),
                d = a(173870),
                u = Object.defineProperty,
                p = Object.getOwnPropertySymbols,
                m = Object.prototype.hasOwnProperty,
                _ = Object.prototype.propertyIsEnumerable,
                h = (e, t, a) => t in e ? u(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                g = (e, t) => {
                    for (var a in t || (t = {})) m.call(t, a) && h(e, a, t[a]);
                    if (p)
                        for (var a of p(t)) _.call(t, a) && h(e, a, t[a]);
                    return e
                },
                y = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const v = (e, t, a, u, p) => y(void 0, null, (function*() {
                const m = (0, i.L)(),
                    {
                        isShowPhilippinesPhoneVerificationOnGame: _
                    } = (0, o.k)(),
                    {
                        isMandatoryVerificationWithdrawalModal: h,
                        getPhonePrefixMatch: y
                    } = (0, r.b)(),
                    v = e.matched.some((e => !0 === e.meta[n.vY4]));
                if (m.isAuthed && v)
                    if (_.value || h.value) {
                        try {
                            yield p.dispatch("verification/phone/loadInfo");
                            const {
                                data: n
                            } = yield p.getters.socket.send((0, s.YT)("deposit-history"), {
                                limit: 1
                            }), {
                                isMobile: o
                            } = p.getters, r = n.count > 0 && p.getters["verification/phone/isVerificationRequired"] && _.value, i = y(p.getters.user.phone), m = h.value && !p.getters.user.phone_verification && e.name === d.Z.WALLET_WITHDRAWAL;
                            if (i && (r || m)) return t.name ? a(!1) : a({
                                path: "/"
                            }), void(yield p.dispatch("modal/open", {
                                name: o ? c.B1 : l.B1,
                                options: {
                                    props: g({
                                        onConfirmed: () => {
                                            u.push(e)
                                        }
                                    }, r && {
                                        type: "game"
                                    })
                                }
                            }))
                        } catch (b) {
                            console.error("Phone Verification Guard failed with error:", {
                                err: b
                            })
                        }
                        a()
                    } else a();
                else a()
            }))
        },
        676213: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(42532);
            const s = (0, n.aZ)({
                __name: "ActiveBonusTimer",
                props: {
                    endTime: {}
                },
                emits: ["onCompletion"],
                setup(e, {
                    emit: t
                }) {
                    const a = e,
                        s = t,
                        {
                            valueFormatted: l,
                            onCompletion: c
                        } = (0, i.o)((() => a.endTime));
                    return c((() => {
                        s("onCompletion")
                    })), (e, t) => ((0, n.wg)(), (0, n.iD)("span", null, (0, o.zw)((0, r.SU)(l)), 1))
                }
            })
        },
        681227: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(166252),
                o = a(749963),
                r = a(3577);
            const i = ["src", "width", "height", "data-testid"],
                s = (0, n.aZ)({
                    __name: "CountryIcon",
                    props: {
                        code: {},
                        size: {
                            default: 18
                        },
                        rounded: {
                            type: Boolean,
                            default: !1
                        },
                        testId: {
                            default: void 0
                        }
                    },
                    emits: ["load", "error"],
                    setup(e, {
                        emit: t
                    }) {
                        (0, o.sj)((e => ({
                            "84d42944": e.size
                        })));
                        const a = e,
                            s = t,
                            l = (0, n.Fl)((() => `/cdn/img/flags/${a.code}.svg`));
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, r.C_)(e.$style.root)
                        }, [(0, n._)("img", {
                            alt: "Country flag",
                            class: (0, r.C_)([e.$style.image, e.rounded && e.$style.rounded]),
                            src: l.value,
                            width: e.size,
                            height: e.size,
                            "data-testid": e.testId,
                            onLoad: t[0] || (t[0] = e => s("load")),
                            onError: t[1] || (t[1] = e => s("error"))
                        }, null, 42, i)], 2))
                    }
                })
        },
        37632: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => k
            });
            var n = a(166252),
                o = a(3577),
                r = a(602262),
                i = a(749963),
                s = a(556978),
                l = a(932077),
                c = a(358192),
                d = a(44963),
                u = a(509426),
                p = Object.defineProperty,
                m = Object.defineProperties,
                _ = Object.getOwnPropertyDescriptors,
                h = Object.getOwnPropertySymbols,
                g = Object.prototype.hasOwnProperty,
                y = Object.prototype.propertyIsEnumerable,
                v = (e, t, a) => t in e ? p(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                b = (e, t) => {
                    for (var a in t || (t = {})) g.call(t, a) && v(e, a, t[a]);
                    if (h)
                        for (var a of h(t)) y.call(t, a) && v(e, a, t[a]);
                    return e
                },
                f = (e, t) => m(e, _(t));
            const k = (0, n.aZ)({
                __name: "Tooltip",
                props: {
                    referenceRef: {},
                    floatingRef: {},
                    middleware: {},
                    placement: {},
                    strategy: {},
                    updateOptions: {},
                    arrowWidth: {},
                    arrowHeight: {},
                    delay: {},
                    callback: {},
                    controlled: {
                        type: Boolean,
                        default: !1
                    },
                    isOpen: {},
                    overlay: {
                        type: Boolean,
                        default: !0
                    },
                    teleport: {
                        type: Boolean,
                        default: !1
                    },
                    hideArrow: {
                        type: Boolean,
                        default: !1
                    },
                    className: {
                        default: void 0
                    },
                    closeOnOutside: {
                        type: Boolean
                    },
                    animated: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup(e) {
                    const t = e,
                        a = (0, n.Fl)((() => {
                            var e;
                            return null != (e = t.delay) ? e : 120
                        })),
                        p = Math.random().toString(),
                        m = (0, u.I)(),
                        {
                            isOpen: _,
                            triggerProps: h,
                            tooltipProps: g,
                            arrowProps: y,
                            toggle: v,
                            close: k,
                            open: w
                        } = (0, d.lL)(f(b({}, t), {
                            delay: a.value,
                            callback: e => {
                                t.overlay && (null == m || m.toggle(p, e))
                            }
                        })),
                        S = () => {
                            t.controlled || w()
                        },
                        C = () => {
                            t.controlled || k()
                        },
                        I = () => {
                            t.closeOnOutside && _.value && k()
                        };
                    return (e, a) => ((0, n.wg)(), (0, n.iD)("div", {
                        class: (0, o.C_)(e.$style.root),
                        onMouseleave: C
                    }, [(0, n.WI)(e.$slots, "default", (0, o.vs)((0, n.F4)((0, r.SU)(h)))), (0, n.Wm)(c.Z, {
                        enabled: e.overlay || e.teleport
                    }, {
                        default: (0, n.w5)((() => [(0, n.Wm)(l.Z, {
                            name: "light"
                        }, {
                            default: (0, n.w5)((() => [(0, n.Wm)(i.uT, {
                                css: e.animated,
                                "enter-active-class": e.$style.fadeEnterActive,
                                "leave-active-class": e.$style.fadeLeaveActive,
                                "enter-from-class": e.$style.fadeEnterFrom,
                                "leave-to-class": e.$style.fadeLeaveTo
                            }, {
                                default: (0, n.w5)((() => [(0, r.SU)(_) ? (0, n.wy)(((0, n.wg)(), (0, n.iD)("div", (0, n.dG)({
                                    key: 0,
                                    class: e.$style.tooltipWrapper
                                }, (0, r.SU)(g)), [(0, n._)("div", {
                                    class: (0, o.C_)([e.$style.tooltip, null == t ? void 0 : t.className]),
                                    onMouseleave: C,
                                    onMouseover: S
                                }, [(0, n.WI)(e.$slots, "tooltip", (0, o.vs)((0, n.F4)({
                                    toggle: (0, r.SU)(v),
                                    close: (0, r.SU)(k)
                                }))), e.hideArrow ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.iD)("div", (0, n.dG)({
                                    key: 0,
                                    class: e.$style.arrow
                                }, (0, r.SU)(y)), null, 16))], 34)], 16)), [
                                    [(0, r.SU)(s.hs), I]
                                ]) : (0, n.kq)("", !0)])),
                                _: 3
                            }, 8, ["css", "enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])])),
                            _: 3
                        })])),
                        _: 3
                    }, 8, ["enabled"])], 34))
                }
            })
        },
        908554: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(166252);
            const o = (0, n.aZ)({
                __name: "TooltipTeleport",
                props: {
                    enabled: {
                        type: Boolean,
                        default: !0
                    }
                },
                setup(e) {
                    return (e, t) => e.enabled ? ((0, n.wg)(), (0, n.j4)(n.lR, {
                        key: 0,
                        to: "#portal"
                    }, [(0, n.WI)(e.$slots, "default")])) : (0, n.WI)(e.$slots, "default", {
                        key: 1
                    })
                }
            })
        },
        585400: (e, t, a) => {
            "use strict";
            a.d(t, {
                cT: () => i,
                qV: () => n,
                sB: () => o,
                uH: () => r
            });
            const n = {
                    HOME: "betting-frame",
                    PREMATCH: "betting-frame-prematch",
                    LIVE: "betting-frame-live",
                    HISTORY: "betting-frame-history",
                    CYBER_SPORT: "betting-frame-cyber-sport",
                    EVENT: "betting-frame-event",
                    STATS: "betting-frame-stats"
                },
                o = "/img/betting-frame",
                r = "/img/betting-frame/1win",
                i = "/betting"
        },
        323733: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => h
            });
            var n = a(166252),
                o = a(322201),
                r = a(585400),
                i = a(399925),
                s = a(939308),
                l = a(112808),
                c = Object.defineProperty,
                d = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                m = (e, t, a) => t in e ? c(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                _ = (e, t) => {
                    for (var a in t || (t = {})) u.call(t, a) && m(e, a, t[a]);
                    if (d)
                        for (var a of d(t)) p.call(t, a) && m(e, a, t[a]);
                    return e
                };

            function h() {
                const {
                    isBettingFrame: e
                } = (0, s.sW)(), t = (0, o.yj)(), a = (0, o.tv)();
                (0, n.YP)(e, (() => {
                    const n = !0 === t.meta[i.$S],
                        o = a.hasRoute(r.qV.HOME);
                    l.appConfig.modules.bets && e.value && !o && window.location.reload(), e.value && n && a.push({
                        name: r.qV.HOME,
                        query: _({}, t.query)
                    })
                }), {
                    immediate: !0
                })
            }
        },
        439609: (e, t, a) => {
            "use strict";
            a.d(t, {
                _: () => n
            });
            const n = ["AE", "MO"]
        },
        571488: (e, t, a) => {
            "use strict";
            a.d(t, {
                P: () => _
            });
            var n = a(602262),
                o = a(166252),
                r = a(322201),
                i = a(280894),
                s = a(920346),
                l = a(945436),
                c = a(894710),
                d = a(305653),
                u = a(59394),
                p = a(173870),
                m = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const _ = e => {
                const t = (0, i.oR)(),
                    a = (0, s.uP)(),
                    _ = (0, s.dd)(),
                    h = (0, l.gD)(),
                    g = (0, r.tv)(),
                    y = (0, s.lm)(),
                    v = ((0, s.Jr)("desktop.CurrencyActionDropdown"), (0, n.Vh)((() => t.getters.user.currency))),
                    b = (0, o.Fl)((() => e === v.value)),
                    f = t => {
                        a.handleAccManageEvent(t, {
                            currency: e
                        })
                    },
                    k = () => m(void 0, null, (function*() {
                        yield t.dispatch("setCurrency", e), f("other_to_main"), _.close()
                    })),
                    w = () => {
                        const e = t.getters.isMobile ? c.Fc : u.Fc;
                        h.isNewBonusBalance && h.isActivatedWithdrawalBlocker && _.open(e, {
                            listeners: {
                                removeBonus: () => {
                                    h.setWithadrawalBlockerActivity(!1), _.close(t.getters.isMobile ? c.Fc : u.Fc)
                                },
                                changeMethod: () => {
                                    g.push({
                                        name: d.Z.HOME
                                    }), _.closeAll()
                                }
                            },
                            props: {
                                type: "withdrawalBlocked"
                            }
                        })
                    },
                    S = () => m(void 0, null, (function*() {
                        try {
                            t.getters.isMobile && _.close(), yield t.getters.isMobile ? g.push({
                                name: p.Z.WALLET_WITHDRAWAL,
                                query: {
                                    currency: e
                                }
                            }) : _.open(c.$M, {
                                props: {
                                    currencyDefault: e
                                },
                                closeOnBackgroundClick: !1
                            }), w(), f(b.value ? "main_withdraw" : "other_withdraw")
                        } catch (a) {
                            y.error(a)
                        }
                    })),
                    C = () => m(void 0, null, (function*() {
                        h.isNewBonusBalance && (yield h.updateAdditionalCurrencyBonuses(e)), t.getters.isMobile ? (g.push({
                            name: p.Z.WALLET_DEPOSIT,
                            query: {
                                currency: e
                            }
                        }), _.close()) : _.open(c.bZ, {
                            props: {
                                currencyDefault: e
                            },
                            closeOnBackgroundClick: !1
                        }), f(b.value ? "main_deposit" : "other_deposit")
                    }));
                return {
                    deposit: C,
                    withdraw: S,
                    makePrimary: k,
                    isMainCurrency: b
                }
            }
        },
        99290: (e, t, a) => {
            "use strict";
            a.d(t, {
                assets: () => c,
                winAssets: () => d
            });
            a(82223);
            var n = a(276826),
                o = a(112808);
            const r = n.mainAssets,
                i = {},
                s = () => {
                    var e;
                    const t = (null == (e = o.appConfig.options.brand) ? void 0 : e.name) ? i[o.appConfig.options.brand.name] : void 0;
                    return null != t ? t : r
                },
                l = () => {
                    var e;
                    const t = (null == (e = o.appConfig.options.brand) ? void 0 : e.name) ? i[o.appConfig.options.brand.name] : void 0;
                    return null != t ? t : n.mainAssets
                },
                c = s(),
                d = l()
        },
        76931: (e, t, a) => {
            "use strict";
            a.d(t, {
                B0: () => w,
                ZI: () => S,
                pu: () => C,
                sO: () => f,
                x6: () => k,
                xF: () => h,
                yQ: () => _
            });
            var n = a(934405),
                o = Object.defineProperty,
                r = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                s = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                d = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                u = (e, t) => {
                    for (var a in t || (t = {})) l.call(t, a) && d(e, a, t[a]);
                    if (s)
                        for (var a of s(t)) c.call(t, a) && d(e, a, t[a]);
                    return e
                },
                p = (e, t) => r(e, i(t));
            const m = {
                    FIRST: 1,
                    SECOND: 2,
                    THIRD: 3
                },
                _ = p(u({}, m), {
                    titles: {
                        [m.FIRST]: "first",
                        [m.SECOND]: "second",
                        [m.THIRD]: "third"
                    },
                    values: Object.values(m)
                }),
                h = {
                    [_.FIRST]: 3,
                    [_.SECOND]: 2,
                    [_.THIRD]: 1
                },
                g = {
                    FIRST: 1,
                    SECOND: 2,
                    THIRD: 3
                },
                y = {
                    [_.FIRST]: {
                        [g.SECOND]: "#6E29ED",
                        [g.THIRD]: "#F44F87"
                    },
                    [_.SECOND]: {
                        [g.SECOND]: "#F96931",
                        [g.THIRD]: "#7B17D4"
                    },
                    [_.THIRD]: {
                        [g.SECOND]: "#5AA603",
                        [g.THIRD]: "#5AA603"
                    }
                },
                v = "#FAC82E",
                b = "#94A6CD",
                f = (e, t) => {
                    var a, n;
                    return t === g.FIRST ? v : null != (n = null == (a = y[e]) ? void 0 : a[t]) ? n : b
                },
                k = Object.values(g),
                w = (0, n.IM)({
                    nickname: (0, n.Z_)(),
                    userId: (0, n.Z_)(),
                    scores: (0, n.Rx)(),
                    prize: (0, n.Rx)()
                }),
                S = (0, n.kw)(_.values),
                C = (0, n.kw)(k)
        },
        388124: (e, t, a) => {
            "use strict";
            a.d(t, {
                Tv: () => r,
                qN: () => n,
                x: () => o
            });
            const n = ["bronze_1", "bronze_2", "bronze_3", "silver_1", "silver_2", "silver_3", "gold_1", "gold_2", "gold_3", "platinum_1", "platinum_2", "platinum_3", "diamond_1", "diamond_2", "diamond_3"],
                o = ["bronze", "silver", "gold", "platinum", "diamond"],
                r = {
                    bronze: "#FAAE64",
                    silver: "#D3D3D3",
                    gold: "#F1B900",
                    platinum: "#9086FF",
                    diamond: "#5878FE"
                }
        },
        548173: (e, t, a) => {
            "use strict";
            a.d(t, {
                A9: () => l,
                K4: () => o,
                NZ: () => n,
                _Q: () => s,
                fr: () => c,
                nR: () => r,
                sF: () => i
            });
            var n = (e => (e["KYC_MX"] = "mx", e["KYC_IN"] = "in", e["KYC_BR"] = "br", e["KYC_CL"] = "cl", e["KYC_TR"] = "tr", e["KYC_AZ"] = "az", e))(n || {}),
                o = (e => (e[e["INTERNAL_NATIVE"] = 0] = "INTERNAL_NATIVE", e[e["NATIVE"] = 1] = "NATIVE", e))(o || {}),
                r = (e => (e["NATIVE"] = "native", e["INTERNAL"] = "internal", e))(r || {}),
                i = (e => (e["DEFAULT"] = "default", e["PENDING"] = "pending", e["SUCCESS"] = "success", e["ERROR"] = "error", e))(i || {}),
                s = (e => (e["WRITE_TO_SUPPORT"] = "writeToSupport", e["PASS_VERIFICATION"] = "passVerification", e))(s || {}),
                l = (e => (e["DOB"] = "dob", e["CPF_NUMBER"] = "cpfNumber", e["TIN_NUMBER"] = "tinNumber", e["FIRST_NAME"] = "firstName", e["LAST_NAME"] = "lastName", e))(l || {}),
                c = (e => (e["ADULT"] = "adult", e["DUPLICATED_IDENTITY"] = "duplicatedIdentity", e))(c || {})
        },
        558425: (e, t, a) => {
            "use strict";
            a.d(t, {
                ZN: () => s,
                Ze: () => i,
                _n: () => r,
                eW: () => o
            });
            var n = a(384754),
                o = (e => (e["SET_LANG"] = "SET_LANG", e["SET_TOKEN"] = "SET_TOKEN", e["SET_USER_ID"] = "SET_USER_ID", e["SET_CURRENCY"] = "SET_CURRENCY", e["SET_USER_DATA"] = "SET_USER_DATA", e["SET_VERSION"] = "SET_VERSION", e["SET_DOMAIN"] = "SET_DOMAIN", e))(o || {}),
                r = (e => (e["SET_REDIRECT"] = "SET_REDIRECT", e["SET_HEIGHT"] = "SET_HEIGHT", e["SET_SCROLL"] = "SET_SCROLL", e["SET_TABS_VISIBLE"] = "SET_TABS_VISIBLE", e))(r || {}),
                i = (e => (e["VIP_TOURNAMENT"] = "ff-1way-to-luxury", e))(i || {});
            const s = {
                ["ff-1way-to-luxury"]: {
                    id: "5118",
                    path: "/v3/5118/vip-tournament",
                    domains: ["https://1winstories.com", "https://1winstoriess.com"],
                    amplitudeFeatureFlag: "ff-1way-to-luxury",
                    amplitudeIsLandingAvailableCheckerFnc: () => !n.Rb
                }
            }
        },
        939308: (e, t, a) => {
            "use strict";
            a.d(t, {
                qg: () => g,
                F: () => y,
                sW: () => c,
                $R: () => v
            });
            var n = a(585400),
                o = a(763873),
                r = a(399925),
                i = a(305653),
                s = a(173870),
                l = a(602262);
            const c = () => {
                const e = (0, l.Vh)((() => !0));
                return {
                    isBettingFrame: e
                }
            };
            var d = Object.defineProperty,
                u = Object.getOwnPropertySymbols,
                p = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                _ = (e, t, a) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                h = (e, t) => {
                    for (var a in t || (t = {})) p.call(t, a) && _(e, a, t[a]);
                    if (u)
                        for (var a of u(t)) m.call(t, a) && _(e, a, t[a]);
                    return e
                };

            function g(e, t, a) {
                const {
                    isBettingFrame: o
                } = c(), s = e.matched.some((e => !0 === e.meta[r.$S]));
                s && o.value || a(), e.name === i.Z.BETS_HISTORY && a({
                    name: n.qV.HISTORY
                }), e.name === i.Z.BETS_CYBERSPORT && (e.params.matchId && a({
                    name: n.qV.EVENT,
                    params: {
                        sportId: e.params.sportId,
                        tournamentId: e.params.tournamentId,
                        id: e.params.matchId,
                        sportType: "esport",
                        categoryId: e.params.categoryId
                    }
                }), a({
                    name: n.qV.CYBER_SPORT,
                    params: {
                        sportId: e.params.sportId,
                        tournamentId: e.params.tournamentId
                    }
                })), e.name === i.Z.BETS && (e.params.match && a({
                    name: n.qV.EVENT,
                    params: {
                        sportId: e.params.sport,
                        tournamentId: e.params.tournament,
                        id: e.params.match,
                        sportType: "sport",
                        categoryId: e.params.category
                    }
                }), "live" === e.params.service ? a({
                    name: n.qV.LIVE,
                    params: {
                        sportId: e.params.sport,
                        tournamentId: e.params.tournament
                    }
                }) : a({
                    name: n.qV.PREMATCH,
                    params: {
                        sportId: e.params.sport,
                        tournamentId: e.params.tournament,
                        categoryId: e.params.category
                    }
                })), e.name === i.Z.STATS && a({
                    name: n.qV.STATS
                }), o.value && a({
                    name: n.qV.HOME
                })
            }

            function y(e, t, a) {
                const {
                    isBettingFrame: o
                } = c(), i = e.matched.some((e => !0 === e.meta[r.$S]));
                i && o.value || a(), e.name === s.Z.PROFILE_BETS_HISTORY && a({
                    name: n.qV.HISTORY
                }), e.name === s.Z.BETS_MATCH && a({
                    name: n.qV.EVENT,
                    params: {
                        sportId: e.params.sportId,
                        tournamentId: e.params.tournamentId,
                        id: e.params.matchId,
                        categoryId: e.params.categoryId,
                        sportType: "sport"
                    }
                }), e.name !== s.Z.BETS_CYBERSPORT && e.name !== s.Z.BETS_CYBERSPORT_SPORT && e.name !== s.Z.BETS_CYBERSPORT_TOURNAMENT && e.name !== s.Z.BETS_CYBERSPORT_MATCH || a({
                    name: n.qV.CYBER_SPORT,
                    params: {
                        sportId: e.params.sportId,
                        tournamentId: e.params.tournamentId
                    }
                }), e.name !== s.Z.BETS && e.name !== s.Z.BETS_TOURNAMENT && e.name !== s.Z.BETS_SPORT || ("live" === e.params.service ? a({
                    name: n.qV.LIVE,
                    params: {
                        sportId: e.params.sportId,
                        tournamentId: e.params.tournamentId
                    }
                }) : a({
                    name: n.qV.PREMATCH,
                    params: {
                        sportId: e.params.sportId,
                        categoryId: e.params.categoryId,
                        tournamentId: e.params.tournamentId
                    }
                })), e.name === s.Z.STATS && a({
                    name: n.qV.STATS
                }), o.value && a({
                    name: n.qV.HOME
                })
            }

            function v() {
                const {
                    isBettingFrame: e
                } = c();
                return (t, a, n) => {
                    e.value ? n() : n({
                        name: i.Z.BETS,
                        params: {
                            service: o.d_
                        },
                        query: h({}, t.query)
                    })
                }
            }
            a(428490), a(982090)
        },
        543238: (e, t, a) => {
            "use strict";
            a.d(t, {
                S: () => i
            });
            var n = a(602262),
                o = a(982090);
            const r = "route-3500-backgammonon-header",
                i = () => {
                    const {
                        value: e
                    } = (0, o.y)(r), t = (0, n.Vh)((() => "on" === e.value && !0));
                    return {
                        isShowBackgammon: t
                    }
                }
        },
        680890: (e, t, a) => {
            "use strict";
            a.d(t, {
                v: () => i
            });
            var n = a(166252),
                o = a(982090);
            const r = "route-2780-entry_point_to_sport_ls",
                i = () => {
                    const {
                        value: e
                    } = (0, o.y)(r), t = (0, n.Fl)((() => !1));
                    return {
                        isEntryPointToSportVisible: t
                    }
                }
        },
        238177: (e, t, a) => {
            "use strict";
            a.d(t, {
                t: () => i
            });
            var n = a(166252),
                o = a(982090);
            const r = "growth-3584-form_vip-old-design",
                i = () => {
                    const {
                        value: e
                    } = (0, o.y)(r), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isFormExchangeAvailable: t
                    }
                }
        },
        14839: (e, t, a) => {
            "use strict";
            a.d(t, {
                s: () => m
            });
            var n = a(166252),
                o = a(428490),
                r = a(548173),
                i = a(982090);
            const s = "ff_india_kycaid",
                l = "route-4460-ff_india_kycaid",
                c = "an-9371-kycaid-brazil",
                d = "an-9519-kycaid-chile-v2",
                u = "an-9924-kycaid-turkey",
                p = "an-10075-kycaid-azerbaijan",
                m = () => {
                    const {
                        value: e
                    } = (0, i.y)(s), {
                        value: t
                    } = (0, i.y)(l), {
                        value: a
                    } = (0, i.y)(c), {
                        value: m
                    } = (0, i.y)(d), {
                        value: _
                    } = (0, i.y)(u), {
                        value: h
                    } = (0, i.y)(p);
                    return {
                        [r.NZ.KYC_IN]: (0, n.Fl)((() => "on" === e.value)),
                        [r.NZ.KYC_BR]: (0, n.Fl)((() => a.value === o.nN.GROUP_B)),
                        [r.NZ.KYC_CL]: (0, n.Fl)((() => m.value === o.nN.GROUP_B)),
                        [r.NZ.KYC_TR]: (0, n.Fl)((() => _.value === o.nN.GROUP_B)),
                        [r.NZ.KYC_AZ]: (0, n.Fl)((() => h.value === o.nN.GROUP_B))
                    }
                }
        },
        50714: (e, t, a) => {
            "use strict";
            a.d(t, {
                y: () => I
            });
            var n = a(479697),
                o = a(280894),
                r = a(920346),
                i = a(627120),
                s = a(453706),
                l = a(166252),
                c = a(884297),
                d = a(878417),
                u = a(909997),
                p = a(378194),
                m = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const _ = () => {
                const {
                    trackUserOnAuth: e
                } = (0, r.AZ)(), {
                    login: t
                } = (0, p.x)(), a = (0, d.L)(), {
                    sendFingerprint: n
                } = a, o = (0, l.Fl)((() => {
                    const e = c.J_.reactiveStorageObject[c.rv];
                    return null == e ? void 0 : e.activeTab
                })), i = a => m(void 0, null, (function*() {
                    var r, i;
                    yield e(a.trackCode), (null == (r = a.flags) ? void 0 : r.disableSendEvent) || u.L_.handleLoginSuccess(null, null, o.value, a.formName), (null == (i = a.flags) ? void 0 : i.disableSendFingerPrint) || (yield n()), t()
                }));
                return {
                    handleOnAuthRedirect: i
                }
            };
            var h = a(95575),
                g = a(656459),
                y = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const v = () => {
                const e = e => y(void 0, null, (function*() {
                    try {
                        const t = yield h.vuexStore.getters.socket.send((0, g.ON)("api-v1-password-create"), {
                            credentialsRequestId: e
                        });
                        return h.vuexStore.commit("userProfile", t.data), !0
                    } catch (t) {
                        return console.error(t), !1
                    }
                }));
                return {
                    getCredentials: e
                }
            };
            var b = a(435709),
                f = a(765740),
                k = a(927572),
                w = a(945436),
                S = a(361476),
                C = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const I = () => {
                const e = (0, o.oR)(),
                    t = (0, d.L)(),
                    {
                        handleOnAuthRedirect: a
                    } = _(),
                    {
                        handleSocialAuthRedirect: l,
                        sendOnSuccessLoginAnalytics: p,
                        sendOnSuccessRegisterAnalytics: m
                    } = (0, r.xh)(),
                    h = (0, b.Z)(),
                    g = (0, w.gD)(),
                    y = (0, r.lm)(),
                    {
                        getCredentials: I
                    } = v(),
                    O = e => C(void 0, null, (function*() {
                        const t = (0, f.$)();
                        yield a(e.baseOptions);
                        const {
                            credentialsRequestId: n
                        } = e.baseOptions;
                        let o = !1;
                        n && (o = yield I(n)), c.J_.remove(c.Jj), yield t.open({
                            showCredentials: Boolean(n) && o
                        })
                    })),
                    T = e => C(void 0, null, (function*() {
                        if (yield a(e.baseOptions), !(0, n.Z)(e.options)) {
                            const t = e.options;
                            if (t.password && (0, k.q)().currentPasswordStorage.setPassword(t.password), t.callbackDepositOpenBonusId) {
                                const e = g.openDepositModalWithBonus(t.callbackDepositOpenBonusId);
                                if (e) return
                            }
                            yield h.open()
                        }
                    })),
                    P = e => C(void 0, null, (function*() {
                        yield a(e.baseOptions);
                        const t = e.options;
                        u.L_.handleRestorePasswordEvent("success", {
                            recovery_method: t.recoveryMethod
                        });
                        const n = (0, r.Jr)("common.actions");
                        y.success(n.passwordChanged)
                    })),
                    A = t => C(void 0, null, (function*() {
                        var o, r, i;
                        const s = (0, f.$)();
                        yield a(t.baseOptions);
                        const d = null == (o = c.J_.get(c.rv)) ? void 0 : o.activeTab,
                            u = null == (r = c.J_.get(c.Jj)) ? void 0 : r.currency,
                            _ = Boolean(t.baseOptions.credentialsRequestId),
                            g = t.options;
                        _ ? m(e.getters.userId, g.socialWebCode, null != (i = g.promocode) ? i : null, g.registrationInitiator, u) : p(e.getters.userId, g.socialWebCode, d, t.baseOptions.formName);
                        const {
                            credentialsRequestId: y
                        } = t.baseOptions;
                        let v = !1;
                        y && (v = yield I(y)), (0, n.Z)(g) || (yield l(g.redirect), yield _ ? s.open({
                            showCredentials: v
                        }) : h.open())
                    })),
                    L = () => C(void 0, null, (function*() {
                        const e = c.J_.get(c.tP);
                        if (e) try {
                            const t = (0, S.mz)(e),
                                a = JSON.parse(t);
                            if (a.type) switch (a.type) {
                                case s.k.onRegistration:
                                    yield O(a);
                                    break;
                                case s.k.onLogin:
                                    yield T(a);
                                    break;
                                case s.k.onPasswordRecovery:
                                    yield P(a);
                                    break;
                                case s.k.onSocialAuth:
                                    yield A(a);
                                    break;
                                default:
                                    break
                            }
                        } finally {
                            c.J_.remove(c.tP)
                        } else t.isAuthed && (0, i.Mj)()
                    }));
                return {
                    init: L
                }
            }
        },
        645445: (e, t, a) => {
            "use strict";
            a.d(t, {
                OS: () => w,
                cK: () => k,
                Ms: () => S
            });
            var n = a(632453),
                o = a(352423),
                r = a(93356),
                i = a(166252),
                s = a(602262),
                l = a(280894),
                c = a(920346),
                d = a(81948),
                u = a(982090);
            const p = () => {
                const {
                    value: e
                } = (0, u.y)(d.jf), t = (0, i.Fl)((() => "on" === e.value));
                return {
                    isFreeBetInAccount: t
                }
            };
            var m = a(800231),
                _ = a(878417),
                h = a(813627),
                g = a(656459),
                y = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const v = {
                    1: ["ordinary"],
                    2: ["express"],
                    3: ["ordinary", "express"]
                },
                b = "free-bets",
                f = e => e.map((e => {
                    var t;
                    return {
                        id: e.id,
                        betId: e.betId,
                        currency: e.currency,
                        amount: e.amount,
                        status: e.status,
                        coefMin: e.betCoefMin,
                        coefMax: e.betCoefMax,
                        expiresAt: +new Date(e.expiresAt),
                        betType: v[e.betType],
                        tournamentIds: null != (t = e.tournamentIds) ? t : []
                    }
                })),
                k = e => {
                    const t = (0, _.L)(),
                        a = (0, l.oR)(),
                        o = (0, m.u)({
                            requiredSocket: !0
                        }),
                        r = (0, i.Fl)((() => t.authToken)),
                        s = (0, i.Fl)((() => !!r.value)),
                        d = (0, c.mw)(a),
                        {
                            data: u,
                            isLoading: p,
                            failureCount: v
                        } = (0, n.a)({
                            queryKey: [b, e, r],
                            queryFn: e => y(void 0, [e], (function*({
                                queryKey: e
                            }) {
                                try {
                                    const {
                                        result: t
                                    } = yield o({
                                        name: (0, g.RY)("freebets-get-many"),
                                        payload: {
                                            limit: e[1]
                                        }
                                    });
                                    return f(t.items)
                                } catch (t) {
                                    throw (0, h.h)("FREEBET_GETS_ERROR", {
                                        failureCount: v.value,
                                        error: d(t)
                                    }), t
                                }
                            })),
                            staleTime: Number.POSITIVE_INFINITY,
                            enabled: s
                        }),
                        k = (0, i.Fl)((() => {
                            var e;
                            return null == (e = u.value) ? void 0 : e[0]
                        }));
                    return {
                        freeBets: u,
                        isLoadingBets: p,
                        nearestFreeBet: k
                    }
                },
                w = () => {
                    const e = (0, o.N)(),
                        t = () => e.invalidateQueries({
                            queryKey: [b]
                        });
                    return {
                        invalidateFreeBets: t
                    }
                },
                S = (0, r.Dt)((e => {
                    const {
                        isFreeBetInAccount: t
                    } = p(), a = (0, _.L)(), n = (0, m.u)({
                        requiredSocket: !0
                    }), o = (0, s.iH)([]), l = (0, i.Fl)((() => t.value && o.value.length > 0)), c = (0, i.Fl)((() => t.value && a.isAuthed)), d = (0, i.Fl)((() => o.value[0])), u = () => y(void 0, null, (function*() {
                        try {
                            const {
                                result: t
                            } = yield n({
                                name: (0, g.RY)("freebets-get-many"),
                                payload: {
                                    limit: e
                                }
                            });
                            o.value = f(t.items)
                        } catch (t) {
                            console.error("Failed to fetch freebets-get-many:", t)
                        }
                    }));
                    return (0, r.rk)((() => c.value), (e => {
                        e && u()
                    })), {
                        freeBets: o,
                        isFreeBetsContentVisible: l,
                        nearestFreeBet: d
                    }
                }))
        },
        42532: (e, t, a) => {
            "use strict";
            a.d(t, {
                o: () => c
            });
            var n = a(93356),
                o = a(602262),
                r = a(166252),
                i = a(920346),
                s = a(563637),
                l = a(677137);
            const c = (e, t, a, c) => {
                const d = (0, o.iH)((0, l.EE)((0, o.Tn)(e).getTime()));
                let u;
                const p = (0, n.Wg)(),
                    m = (0, i.Jr)("common.bonuses"),
                    _ = (0, r.Fl)((() => {
                        const e = (0, o.Tn)(t) ? "activeBonusTimerMiddle" : "activeBonusTimer";
                        return m[e]
                    })),
                    h = (0, i.Jr)("common.datetime"),
                    g = (0, r.Fl)((() => {
                        var e;
                        if (!d.value) return [];
                        const t = {
                            minutes: Number(d.value.minutes) > 0 ? d.value.minutes : "00",
                            seconds: Number(d.value.minutes) > 0 ? d.value.seconds : "00",
                            days: Number(d.value.minutes) > 0 ? d.value.days : "00",
                            hours: Number(d.value.minutes) > 0 ? d.value.hours : "00"
                        };
                        return [{
                            value: t.days,
                            label: (0, o.Tn)(c) ? (0, s.wG)(null != (e = Number(t.days)) ? e : 0, h.day) : _.value.days
                        }, {
                            value: t.hours,
                            label: (0, o.Tn)(c) ? (0, s.wG)(Number(t.hours), h.hour) : _.value.hours
                        }, {
                            value: t.minutes,
                            label: (0, o.Tn)(c) ? (0, s.wG)(Number(t.minutes), h.minute) : _.value.minutes
                        }, {
                            value: t.seconds,
                            label: (0, o.Tn)(c) ? (0, s.wG)(Number(t.seconds), h.second) : _.value.seconds
                        }]
                    })),
                    y = (0, r.Fl)((() => (0, o.Tn)(a) ? g.value.map(((e, t) => {
                        const a = (0, o.Tn)(c) ? (0, s.wG)(Number(e.value), h.day) : `${_.value.days}.`,
                            n = 0 === t ? ` ${a}` : "";
                        return `${e.value}${n}`
                    })).join(" : ") : g.value.map((e => `${e.value}${e.label}`)).join(" : "))),
                    v = () => {
                        d.value = (0, l.EE)((0, o.Tn)(e).getTime());
                        const t = Object.values(d.value).every((e => "00" === e)),
                            a = (0, o.Tn)(e).getTime() < Date.now();
                        t && u && (u.stop(), p.trigger(void 0)), a && p.trigger(void 0)
                    };
                return u = (0, i.Yz)(1e3, v, {
                    immediateStart: !0,
                    immediateCallback: !0
                }), (0, o.EB)((() => {
                    u.stop()
                })), {
                    valueParts: g,
                    valueFormatted: y,
                    onCompletion: p.on
                }
            }
        },
        947640: (e, t, a) => {
            "use strict";
            a.d(t, {
                i: () => l
            });
            var n = a(602262),
                o = a(982090),
                r = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const i = "an-16652-smartico-wheel-of-fortune-india",
                s = "group_b",
                l = () => {
                    const {
                        value: e,
                        isReady: t
                    } = (0, o.y)(i), a = (0, n.iH)(!1), l = () => r(void 0, null, (function*() {
                        return yield t.value, e.value === s
                    }));
                    return l().then((e => {
                        a.value = e
                    })), {
                        isAvailableFortuneWheel: a,
                        getIsAvailableFortuneWheel: l
                    }
                }
        },
        278037: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => l
            });
            var n = a(205658),
                o = a(753501),
                r = a(779547),
                i = a(878417),
                s = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const l = () => {
                const e = (0, n.X)(),
                    t = (0, r.N)(),
                    a = (0, i.L)(),
                    l = () => s(void 0, null, (function*() {
                        if (!a.isAuthed) return !1;
                        const {
                            isOptionalKycEnabled: n
                        } = (0, o.G)(), r = yield e.getKycGeo();
                        if (!r && !n.value) return !1;
                        if (void 0 === t.data.status) try {
                            yield t.loadStatusData()
                        } catch (i) {
                            return console.error("Loading of kyc status has been failed"), !1
                        }
                        return !t.data.isDisabled
                    }));
                return {
                    getIsKycAvailable: l
                }
            }
        },
        597989: (e, t, a) => {
            "use strict";
            a.d(t, {
                d: () => w
            });
            var n = a(166252),
                o = a(322201),
                r = a(278037),
                i = a(205658),
                s = a(753501),
                l = a(776030),
                c = a(779547),
                d = a(156253),
                u = a(544579),
                p = Object.defineProperty,
                m = Object.defineProperties,
                _ = Object.getOwnPropertyDescriptors,
                h = Object.getOwnPropertySymbols,
                g = Object.prototype.hasOwnProperty,
                y = Object.prototype.propertyIsEnumerable,
                v = (e, t, a) => t in e ? p(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                b = (e, t) => {
                    for (var a in t || (t = {})) g.call(t, a) && v(e, a, t[a]);
                    if (h)
                        for (var a of h(t)) y.call(t, a) && v(e, a, t[a]);
                    return e
                },
                f = (e, t) => m(e, _(t)),
                k = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const w = () => {
                let e;
                const t = (0, c.N)(),
                    a = (0, o.tv)(),
                    p = (0, l.l)(),
                    m = (0, r.l)(),
                    _ = (0, i.X)(),
                    h = () => {
                        t.updateData({
                            frameSrc: void 0
                        })
                    },
                    g = (e = !1) => k(void 0, null, (function*() {
                        if (h(), (yield m.getIsKycAvailable()) && (e || !t.data.status)) try {
                            yield t.loadStatusData()
                        } catch (a) {
                            p.error(a)
                        }
                    })),
                    y = n => k(void 0, null, (function*() {
                        var o;
                        if (h(), !(yield m.getIsKycAvailable())) return;
                        n || (n = (0, d.ZP)());
                        const {
                            isOptionalKycEnabled: r
                        } = (0, s.G)();
                        try {
                            yield r.value ? t.loadOptionalFrameSrc() : t.loadFrameSrc(), n.resolve()
                        } catch (i) {
                            const t = i;
                            400 === (null == (o = t.data) ? void 0 : o.status) && "kyc.data.verification.inProgress" === t.data.message ? e = setTimeout((() => {
                                y(n)
                            }), 5e3) : (p.error(i), yield a.push("/"))
                        }
                        yield n
                    })),
                    v = () => k(void 0, null, (function*() {
                        try {
                            yield t.sendInternalKycDocs()
                        } catch (e) {
                            const t = e,
                                a = (0, u.Gf)((0, u.Te)(yield _.getKycGeo()), t),
                                n = null == a ? void 0 : a.errorLangCode;
                            return n && (t.data = f(b({}, t.data), {
                                code: `common.verificationKyc.errors.${n}`
                            })), p.error(t), t
                        }
                    }));
                return (0, n.Ah)((() => {
                    clearTimeout(e)
                })), {
                    loadStatusData: g,
                    loadFrameSrc: y,
                    sendInternalKycDocs: v
                }
            }
        },
        205658: (e, t, a) => {
            "use strict";
            a.d(t, {
                X: () => p
            });
            var n = a(381711),
                o = a(384754),
                r = a(548173),
                i = a(14839),
                s = a(982090),
                l = a(95575),
                c = a(495119),
                d = a(112808),
                u = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const p = () => {
                const e = (0, i.s)(),
                    t = (0, s.i)(),
                    a = () => {
                        var e, t;
                        if (null == (e = d.appConfig.modules.kyc) ? void 0 : e.geo) return d.appConfig.modules.kyc.geo;
                        if (o.Rb || o.iz) return;
                        const {
                            country: a
                        } = l.vuexStore.state, i = null == (t = l.vuexStore.getters.user) ? void 0 : t.currency;
                        return "IN" === a && i === n.NE.INR ? r.NZ.KYC_IN : "CL" === a && i === n.NE.CLP ? r.NZ.KYC_CL : "BR" === a && i === n.NE.BRL ? r.NZ.KYC_BR : "TR" === a && i === n.NE.TRY ? r.NZ.KYC_TR : "AZ" === a && i === n.NE.AZN ? r.NZ.KYC_AZ : void 0
                    },
                    p = () => {
                        const t = a();
                        if (t) return t === r.NZ.KYC_MX || e[t].value ? t : void 0
                    },
                    m = () => u(void 0, null, (function*() {
                        return yield Promise.all([l.vuexStore.getters.promiseByName[c.l.COUNTRY], l.vuexStore.getters.promiseByName[c.l.AUTH], t.isReady]), p()
                    }));
                return {
                    getKycGeo: m,
                    getKycGeoSync: p
                }
            }
        },
        753501: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => r
            });
            var n = a(602262),
                o = a(95575);
            const r = () => {
                const e = (0, n.Vh)((() => {
                    var e;
                    return null == (e = o.vuexStore.getters.user) ? void 0 : e.is_optional_kyc_enabled
                }));
                return {
                    isOptionalKycEnabled: e
                }
            }
        },
        326660: (e, t, a) => {
            "use strict";
            a.d(t, {
                P: () => p
            });
            var n = a(93356),
                o = a(602262),
                r = a(982090);
            const i = "route-2429-front-for-vip-landing",
                s = "on",
                l = () => {
                    const {
                        value: e,
                        isReady: t
                    } = (0, r.y)(i), a = (0, o.Vh)((() => e.value === s));
                    return {
                        isLandingAvailable: a,
                        isReady: t
                    }
                };
            var c = a(894987),
                d = a(800231);
            const u = (0, n.Dt)((() => {
                    const e = (0, o.iH)(),
                        t = (0, d.u)({
                            requiredSocket: !0
                        }),
                        a = t({
                            name: "PROXY-SERVICE-CDP:v1-landings-list",
                            payload: {}
                        }).then((t => (e.value = t.landings, !!e.value))).catch((() => !1));
                    return {
                        isRequestSuccessfulPromise: a,
                        landings: e
                    }
                })),
                p = (0, n.Dt)((() => {
                    const {
                        isLandingAvailable: e,
                        isReady: t
                    } = l(), {
                        isRequestSuccessfulPromise: a,
                        landings: n
                    } = u(), r = Promise.all([t, a]).then((e => e.every(Boolean))), i = (0, o.Vh)((() => {
                        var t;
                        return Boolean(e.value && (null == (t = n.value) ? void 0 : t.some((e => e.landingId === c.O.VIP))))
                    })), s = (0, o.iH)(!1);
                    return {
                        isLandingVipClubLoadedPromise: r,
                        isLandingVipClubAvailable: i,
                        isTabsForcelyHidden: s
                    }
                }))
        },
        477700: (e, t, a) => {
            "use strict";
            a.d(t, {
                a: () => p
            });
            var n = a(602262),
                o = a(280894),
                r = a(988598),
                i = a(967031),
                s = a(498750),
                l = a(909997),
                c = a(894710),
                d = a(59394),
                u = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));

            function p() {
                const e = (0, o.oR)(),
                    {
                        openQueue: t
                    } = (0, s.O)(),
                    a = (0, n.Vh)((() => e.getters.isMobile)),
                    p = () => u(this, null, (function*() {
                        const {
                            enabledPromise: e,
                            isDepositAfterRegHiddenPromise: n
                        } = (0, i.n)(), {
                            shouldOpenDepositPromise: o
                        } = (0, r.c)(), s = [{
                            name: a.value ? d.tt : c.tt,
                            isActive: () => e.value,
                            onClose: e => {
                                e.isBackgroundClick && l.L_.handleBonusesEvent("modal_сlose", {
                                    modal_name: "aviator_freebet",
                                    close_type: "misclick"
                                })
                            }
                        }, {
                            name: a.value ? d.bZ : c.bZ,
                            isActive: () => Promise.all([o.value, n.value]).then((([e, t]) => !t && e)),
                            params: {
                                closeOnBackgroundClick: !1
                            }
                        }];
                        yield t(s)
                    }));
                return {
                    open: p
                }
            }
        },
        565670: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => p
            });
            var n = a(602262),
                o = a(322201),
                r = a(280894),
                i = a(498750),
                s = a(884297),
                l = a(878417),
                c = a(894710),
                d = a(59394),
                u = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));

            function p() {
                const {
                    openQueue: e
                } = (0, i.O)(), t = () => u(this, null, (function*() {
                    const t = (0, r.oR)(),
                        a = (0, l.L)(),
                        i = (0, o.tv)(),
                        u = (0, n.Vh)((() => a.isAuthed)),
                        p = (0, n.Vh)((() => t.getters.isMobile)),
                        m = new URLSearchParams(window.location.search),
                        _ = m.get("zvonobot"),
                        h = u.value && (s.J_.get(s.VT) || _),
                        g = [{
                            name: p.value ? d.bZ : c.bZ,
                            isActive: () => h,
                            onShow: () => {
                                _ && i.replace({
                                    query: {}
                                }), s.J_.get(s.VT) && s.J_.remove(s.VT)
                            }
                        }];
                    yield e(g)
                }));
                return {
                    init: t
                }
            }
        },
        529342: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => B
            });
            var n = a(93356),
                o = a(166252),
                r = a(322201),
                i = a(280894),
                s = a(399925),
                l = a(238177),
                c = a(477700),
                d = a(137101),
                u = a(495119),
                p = a(878417),
                m = a(809329),
                _ = a(782528),
                h = a(894710),
                g = a(59394),
                y = a(173870),
                v = Object.defineProperty,
                b = Object.defineProperties,
                f = Object.getOwnPropertyDescriptors,
                k = Object.getOwnPropertySymbols,
                w = Object.prototype.hasOwnProperty,
                S = Object.prototype.propertyIsEnumerable,
                C = (e, t, a) => t in e ? v(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                I = (e, t) => {
                    for (var a in t || (t = {})) w.call(t, a) && C(e, a, t[a]);
                    if (k)
                        for (var a of k(t)) S.call(t, a) && C(e, a, t[a]);
                    return e
                },
                O = (e, t) => b(e, f(t)),
                T = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const P = {
                    [m.w.MOBILE]: {
                        ["login"]: g._w,
                        ["register"]: g.Ko,
                        ["deposit"]: g.bZ,
                        ["voucher"]: g.cp,
                        ["verification-email"]: g.te,
                        ["promotion-rules"]: g.Zj,
                        ["promotion-prizes"]: g.j3,
                        ["promotion-scoring-system"]: g.ee,
                        ["promotion-custom-modal"]: g.Xs,
                        ["change-password"]: g.zD,
                        ["form-exchange"]: g.dz
                    },
                    [m.w.DESKTOP]: {
                        ["login"]: h._w,
                        ["register"]: h.bn,
                        ["deposit"]: h.bZ,
                        ["deposit-status"]: h.xX,
                        ["voucher"]: h.Uj,
                        ["verification-email"]: h.te,
                        ["profile"]: h.KD,
                        ["change-password"]: h.zD,
                        ["promotion-rules"]: h.Zj,
                        ["promotion-prizes"]: h.j3,
                        ["promotion-scoring-system"]: h.ee,
                        ["promotion-custom-modal"]: h.Xs,
                        ["form-exchange"]: h.dz
                    }
                },
                A = "modal-bonus_universal",
                L = e => e === A ? "modal-bonus-universal" : e,
                B = (0, n.Dt)((() => {
                    const e = (0, d.d)(),
                        t = (0, r.tv)(),
                        a = (0, i.oR)(),
                        n = (0, p.L)(),
                        h = (0, c.a)(),
                        {
                            isFormExchangeAvailable: g
                        } = (0, l.t)(),
                        v = (0, o.Fl)((() => P[a.getters.isMobile ? m.w.MOBILE : m.w.DESKTOP])),
                        b = () => T(void 0, null, (function*() {
                            yield t.replace({
                                query: O(I({}, t.currentRoute.value.query), {
                                    modal: void 0,
                                    open: void 0,
                                    "promotion-id": void 0
                                })
                            })
                        })),
                        f = () => {
                            let e, t;
                            try {
                                const {
                                    modal: a
                                } = (0, _.Z)(document.location.search);
                                if (a) {
                                    const n = JSON.parse(a);
                                    e = L(n.name), t = n.props
                                }
                            } catch (a) {
                                console.warn("Modal query data parsing has been failed.")
                            }
                            return {
                                modalName: e,
                                props: t
                            }
                        },
                        k = (a, ...n) => T(void 0, [a, ...n], (function*(a, n = {}, o) {
                            a && !e.isModalOpened(a) && (yield e.open(a, {
                                props: n,
                                onClose: () => T(void 0, null, (function*() {
                                    try {
                                        t.currentRoute.value.meta = {
                                            [s.rE]: !0
                                        }, null == o || o()
                                    } catch (e) {}
                                }))
                            }))
                        })),
                        w = (t, ...r) => T(void 0, [t, ...r], (function*(t, r = {}) {
                            if (n.isAuthed) return void(yield k(t, r));
                            const i = v.value["login"];
                            yield k(i);
                            const s = v.value["deposit"],
                                l = (0, o.YP)((() => e.isModalOpened(s)), (t => {
                                    t && (l(), e.close(s))
                                })),
                                c = (0, o.YP)((() => e.isOpen), (e => T(void 0, null, (function*() {
                                    e || (l(), c(), yield a.getters.promiseByName[u.l.AUTH], n.isAuthed && (yield k(t, r)))
                                }))))
                        })),
                        S = () => T(void 0, null, (function*() {
                            const {
                                oauth_key: e,
                                open: o
                            } = (0, _.Z)(document.location.search), r = ["promotion-rules", "promotion-prizes", "promotion-scoring-system", "promotion-custom-modal"].includes(o);
                            if (r && (yield k(v.value[o])), yield Promise.all([a.getters.promiseByName[u.l.AUTH], a.getters.promiseByName[u.l.AUTH_TOKEN]]), "register" === o && !n.isAuthed && !e) {
                                const e = v.value[o];
                                yield k(e)
                            }
                            if ("deposit" === o || "voucher" === o || "deposit-status" === o) {
                                const e = v.value[o];
                                return void(yield w(e))
                            }
                            if ("verification-email" === o) {
                                const e = v.value[o];
                                yield k(e)
                            }
                            if ("profile" === o)
                                if (a.getters.isMobile) t.replace({
                                    name: y.Z.PROFILE
                                });
                                else {
                                    const e = v.value[o];
                                    yield k(e)
                                }
                            if ("change-password" === o) {
                                if (n.isAuthed) {
                                    const e = v.value[o];
                                    yield k(e)
                                } else {
                                    const e = v.value.login;
                                    yield k(e, {
                                        openForgotForm: !0,
                                        forceDividedForgotForm: !0
                                    })
                                }
                                return
                            }
                            if ("landing-registration" === o) return yield h.open(), void(yield b());
                            if ("form-exchange" === o) {
                                if (!g.value) return;
                                const e = v.value[o];
                                if (n.isAuthed) yield k(e);
                                else {
                                    const t = v.value.register;
                                    yield k(t, {}, (() => {
                                        n.isAuthed && k(e)
                                    }))
                                }
                                return
                            }
                            const {
                                modalName: i,
                                props: s = {}
                            } = f();
                            if (!i) return;
                            const l = "express-bonus-modal" === i && !1;
                            l ? yield b(): yield k(i, s)
                        }));
                    return (0, o.YP)((() => a.state.modal.queue), (e => T(void 0, null, (function*() {
                        var a;
                        if (!t.currentRoute.value.query.modal && !t.currentRoute.value.query.open) return;
                        let {
                            modalName: n
                        } = f();
                        n = null != n ? n : t.currentRoute.value.query.open, n && (null == (a = e.at(-1)) ? void 0 : a.name) !== n && (yield b())
                    })))), {
                        handleModalQueryParameters: S
                    }
                }))
        },
        195888: (e, t, a) => {
            "use strict";
            a.d(t, {
                g: () => s
            });
            var n = a(280894),
                o = a(920346),
                r = a(178160),
                i = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const s = () => {
                const e = (0, n.oR)(),
                    {
                        signOut: t
                    } = (0, o.f0)();
                e.getters.socket.on("security:logout", (() => i(void 0, null, (function*() {
                    t({
                        skipCdaLogout: !0
                    }).then((() => {
                        (0, r.W)({
                            module: "useSecurityLogout"
                        }), window.location.reload()
                    }))
                }))))
            }
        },
        995173: (e, t, a) => {
            "use strict";
            a.d(t, {
                d: () => i
            });
            var n = a(280894),
                o = a(776030),
                r = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const i = () => {
                const e = (0, o.l)(),
                    t = (0, n.oR)(),
                    a = () => r(void 0, null, (function*() {
                        window._smartico_user_id = t.getters.user.id, window._smartico_language = t.getters.currentLang, window._smartico_allow_localhost = !1
                    })),
                    i = (t = "dp:gf_saw") => r(void 0, null, (function*() {
                        try {
                            yield window.initSmartico({
                                labelKey: "70e1d1c7-9c8d-4cb1-abf5-93dce4d53662-5",
                                brandKey: "3e00cc02"
                            }), yield a(), window._smartico.dp(t)
                        } catch (n) {
                            e.error(n)
                        }
                    }));
                return {
                    openWidget: i,
                    initSettings: a
                }
            }
        },
        735037: (e, t, a) => {
            "use strict";
            a.d(t, {
                E: () => r
            });
            var n = a(567476),
                o = a(602262);
            const r = (0, n.Q_)("depositStatus", (() => {
                const e = (0, o.iH)(),
                    t = () => {
                        e.value = void 0
                    },
                    a = t => {
                        e.value = t
                    };
                return {
                    depositStatusData: e,
                    clearDepositStatusData: t,
                    setDepositStatusData: a
                }
            }))
        },
        628978: (e, t, a) => {
            "use strict";
            a.d(t, {
                Wt: () => ve,
                jY: () => be,
                SX: () => fe,
                hx: () => ke
            });
            const n = a.p + "media/ambient.67e89bb2.mp3",
                o = a.p + "media/spin.79fd0f02.mp3",
                r = a.p + "media/win.fd5b297c.mp3";
            var i = a(92886),
                s = a.n(i),
                l = a(435471),
                c = a.n(l),
                d = a(353640),
                u = a.n(d),
                p = a(879765),
                m = a.n(p),
                _ = a(481),
                h = a.n(_),
                g = a(112758),
                y = a.n(g),
                v = a(574019),
                b = a.n(v),
                f = a(62689),
                k = a.n(f),
                w = a(786645),
                S = a.n(w),
                C = a(71960),
                I = a.n(C),
                O = a(551647),
                T = a.n(O),
                P = a(765982),
                A = a.n(P),
                L = a(427120),
                B = a.n(L),
                M = a(641660),
                E = a.n(M),
                N = a(506899),
                D = a.n(N),
                x = a(787217),
                R = a.n(x),
                j = a(216811),
                F = a.n(j),
                $ = a(470428),
                z = a.n($),
                U = a(331554),
                Z = a.n(U),
                G = a(784315),
                H = a.n(G),
                q = a(5547),
                V = a.n(q),
                W = a(721492),
                Y = a.n(W),
                K = a(141533),
                J = a.n(K),
                X = a(894661),
                Q = a.n(X),
                ee = a(82699),
                te = a.n(ee),
                ae = a(494053),
                ne = a.n(ae),
                oe = a(722434),
                re = a.n(oe),
                ie = a(625419),
                se = a.n(ie),
                le = a(80608),
                ce = a.n(le),
                de = a(548978),
                ue = a.n(de),
                pe = a(45357),
                me = a.n(pe),
                _e = a(787803),
                he = a.n(_e),
                ge = a(920490),
                ye = a.n(ge),
                ve = (e => (e["CRYPTO"] = "CRYPTO", e["COIN"] = "COIN", e["VOUCHER"] = "VOUCHER", e["MONEY"] = "MONEY", e["FREEBETS"] = "FREEBETS", e["FREESPIN"] = "freespin", e))(ve || {});
            const be = {
                    LOADING: "loading",
                    AVAILABLE: "available",
                    BLOCKED: "blocked",
                    ERROR: "error"
                },
                fe = {
                    sound: {
                        AmbientSound: n,
                        WinSound: r,
                        SpinSound: o
                    },
                    prizes: {
                        72: {
                            ["freespin"]: se(),
                            ["COIN"]: ne(),
                            ["VOUCHER"]: ue(),
                            ["MONEY"]: ce(),
                            ["CRYPTO"]: te(),
                            ["FREEBETS"]: re()
                        },
                        36: {
                            ["CRYPTO"]: Z(),
                            ["MONEY"]: J(),
                            ["COIN"]: H(),
                            ["VOUCHER"]: Q(),
                            ["freespin"]: Y(),
                            ["FREEBETS"]: V()
                        }
                    },
                    wheel: {
                        luckyWinPlate: F(),
                        mainImage: he(),
                        wheelAllSectors: me(),
                        lights: b(),
                        winningSector: ye(),
                        prizePointer: z(),
                        backgroundLayout: {
                            smoke: u(),
                            default: c(),
                            prize: s()
                        }
                    },
                    freemoney: {
                        mobile: {
                            background: S(),
                            backgroundShadow: T(),
                            wheel: A()
                        },
                        desktop: {
                            backgroundShadow: I(),
                            background: k(),
                            wheel: A()
                        }
                    },
                    logo: R(),
                    headerLink: {
                        image: B(),
                        backgroundShadow: E()
                    },
                    burgerLink: {
                        image: m(),
                        backgroundShadow: y(),
                        background: h()
                    },
                    infoModal: D()
                },
                ke = {
                    ["freespin"]: "linear-gradient(to bottom, rgba(106, 0, 244, 0.5) 1.6%, #BD00FF 67.19%, #E100FF 84.78%), linear-gradient(to bottom, #6A00F4 0.5%, #BD00FF 34.38%, #E100FF 52.32%)",
                    ["FREEBETS"]: "linear-gradient(241deg,rgba(159, 66, 32, 0.85) 59%, rgba(255, 61, 0, 1) 69%, rgba(255, 109, 0, 1) 76%, rgba(255, 158, 0, 1) 84%, rgba(248, 226, 194, 1) 94%)",
                    ["COIN"]: "linear-gradient(241deg,rgba(180, 0, 81, 1) 59%, rgba(255, 23, 15, 1) 91%, rgba(211, 63, 58, 1) 100%)",
                    ["VOUCHER"]: "linear-gradient(241deg,rgba(10, 10, 42, 1) 35%, rgba(46, 95, 102, 1) 65%, rgba(80, 163, 187, 1) 77%, rgba(165, 255, 238, 1) 94%)",
                    ["MONEY"]: "radial-gradient(59.01% 246.43% at 50% 0%, rgba(165, 255, 238, 0.93) 0%, #40AB36 37.28%, #2A6E3F 74.79%)",
                    ["CRYPTO"]: "radial-gradient(100.62% 101.09% at 50% 100%, #FFD700 61.24%, rgba(247, 147, 26, 0.8) 89.08%)"
                }
        },
        365346: (e, t, a) => {
            "use strict";
            a.d(t, {
                U: () => b
            });
            var n, o = a(567476),
                r = a(602262),
                i = a(166252),
                s = a(280894),
                l = a(920346),
                c = a(947640),
                d = a(995173),
                u = a(628978),
                p = a(878417),
                m = a(112808),
                _ = a(894710),
                h = a(59394),
                g = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const y = null == (n = m.appConfig.modules.smartico) ? void 0 : n.fortuneWheelId,
                v = 10,
                b = (0, o.Q_)("fortuneWheelStore", (() => {
                    const e = (0, s.oR)(),
                        t = (0, l.dd)(),
                        {
                            initSettings: a
                        } = (0, d.d)(),
                        n = (0, p.L)(),
                        {
                            isAvailableFortuneWheel: o
                        } = (0, c.i)(),
                        m = (0, r.iH)([]),
                        b = (0, r.iH)(y ? u.jY.LOADING : u.jY.ERROR),
                        f = (0, r.iH)(),
                        k = (0, r.Vh)((() => o.value && b.value !== u.jY.ERROR)),
                        {
                            time: w,
                            startTimer: S
                        } = (0, l.J7)(),
                        C = () => g(void 0, null, (function*() {
                            var e, t;
                            const a = yield null == (t = null == (e = window._smartico.api) ? void 0 : e.getMiniGames) ? void 0 : t.call(e);
                            if (a) return a.find((e => e.id === y))
                        })),
                        I = e => g(void 0, null, (function*() {
                            if (!y) return void(b.value = u.jY.ERROR);
                            f.value = void 0;
                            const t = yield C();
                            t && t.prizes.length === v ? (t.next_available_spin_ts > Date.now() ? (b.value = u.jY.BLOCKED, f.value = t.next_available_spin_ts) : b.value = u.jY.AVAILABLE, (null == e ? void 0 : e.onlyTimer) || (t.prizes = t.prizes.sort(((e, t) => {
                                var a, n;
                                return (null != (a = e.sectors[0]) ? a : 0) - (null != (n = t.sectors[0]) ? n : 0)
                            })), m.value = t.prizes.map((e => {
                                const t = u.Wt[e.custom_data.bonus_type];
                                return {
                                    id: e.id,
                                    name: e.name,
                                    type: t,
                                    amount: e.custom_data.bonus_amount,
                                    currency: e.custom_data.currency,
                                    imgClass: `${t.toLowerCase()}Image`,
                                    config: {
                                        wheel: {
                                            color: u.hx[t],
                                            image: u.SX.prizes["36"][t].src || ""
                                        },
                                        prize: {
                                            image: u.SX.prizes["72"][t].src || ""
                                        }
                                    }
                                }
                            })))) : b.value = u.jY.ERROR
                        })),
                        O = () => g(void 0, null, (function*() {
                            yield window.initSmartico({
                                labelKey: "70e1d1c7-9c8d-4cb1-abf5-93dce4d53662-5",
                                brandKey: "3e00cc02"
                            }), a(), window._smartico.on("init", I)
                        })),
                        T = () => {
                            if (!n.isAuthed) return t.open(e.getters.isMobile ? h._w : _._w), !0;
                            const a = [u.jY.LOADING, u.jY.ERROR, u.jY.BLOCKED].includes(b.value);
                            return !a && (t.open(e.getters.isMobile ? h.Rb : _.Rb), !0)
                        },
                        P = () => g(void 0, null, (function*() {
                            var e, t;
                            const a = yield null == (t = null == (e = window._smartico.api) ? void 0 : e.playMiniGame) ? void 0 : t.call(e, y);
                            if (a.prize_id) return m.value.find((e => e.id === a.prize_id))
                        }));
                    return (0, i.YP)((() => n.isAuthed), (() => {
                        n.isAuthed && O()
                    }), {
                        immediate: !0
                    }), (0, i.YP)((() => f.value), (() => {
                        S(f.value, I)
                    })), {
                        visible: k,
                        prizes: m,
                        wheelStatus: b,
                        nextSpinTime: f,
                        timer: w,
                        openModal: T,
                        initFortuneWheelData: O,
                        playGame: P,
                        resolveGameData: I
                    }
                }))
        },
        903091: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => V,
                q: () => W
            });
            var n = a(567476),
                o = a(602262),
                r = a(166252),
                i = a(322201),
                s = a(280894),
                l = a(920346),
                c = a(800231),
                d = a(95575),
                u = a(878417),
                p = a(536452),
                m = Object.defineProperty,
                _ = Object.defineProperties,
                h = Object.getOwnPropertyDescriptors,
                g = Object.getOwnPropertySymbols,
                y = Object.prototype.hasOwnProperty,
                v = Object.prototype.propertyIsEnumerable,
                b = (e, t, a) => t in e ? m(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                f = (e, t) => {
                    for (var a in t || (t = {})) y.call(t, a) && b(e, a, t[a]);
                    if (g)
                        for (var a of g(t)) v.call(t, a) && b(e, a, t[a]);
                    return e
                },
                k = (e, t) => _(e, h(t));
            const w = {
                    title: "1win дарит спорткар! ",
                    subtitle: "Забирайте билеты каждый день и получите шанс выиграть машину от 1win!",
                    hint: "Каждый билет – это шанс выиграть авто.",
                    welcome: "Выполняйте шаги \nи выиграйте авто",
                    bannerHeader: "1win дарит спорткар! ",
                    bannerText: "и 50 призов от Apple",
                    headingImageMobile: "https://d16q5vvir3f28d.cloudfront.net/raffle-20231227/texts/mobile/ru.svg",
                    headingImageDesktopDefault: "https://d16q5vvir3f28d.cloudfront.net/raffle-20231227/texts/desktopDefault/ru.svg",
                    headingImageDesktopActive: "https://d16q5vvir3f28d.cloudfront.net/raffle-20231227/texts/desktopActive/ru.svg"
                },
                S = {
                    nextRaffleTimerCaption: "После розыгрыша\n        Mercedes-Benz через:",
                    nextRaffleTimerImageDesktop: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/timerTexts/desktop/ru.png",
                    nextRaffleTimerImageMobile: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/timerTexts/mobile/en.png"
                },
                C = {
                    garageTranslationLink: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
                    raffleTranslationLink: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
                },
                I = 864e5,
                O = e => e * I,
                T = e => new Date(Date.now() + e).toISOString(),
                P = {
                    beforeStart: {
                        startsAt: T(O(1)),
                        raffleTranslationStartsAt: T(O(2)),
                        raffleTranslationEndsAt: T(O(4)),
                        endsAt: T(O(4))
                    },
                    afterEnd: {
                        startsAt: T(-O(4)),
                        raffleTranslationStartsAt: T(-O(3)),
                        raffleTranslationEndsAt: T(-O(1)),
                        endsAt: T(-O(1))
                    },
                    beforeTranslation: {
                        startsAt: T(-O(1)),
                        raffleTranslationStartsAt: T(O(1)),
                        raffleTranslationEndsAt: T(O(3)),
                        endsAt: T(O(3))
                    },
                    inTranslation: {
                        startsAt: T(-O(2)),
                        raffleTranslationStartsAt: T(-O(1)),
                        raffleTranslationEndsAt: T(O(2)),
                        endsAt: T(O(2))
                    }
                },
                A = {
                    awardTranslationLink: "https://youtube.com",
                    awardTranslationStartsAt: T(O(1)),
                    awardTranslationEndsAt: T(O(1))
                },
                L = {
                    main: {
                        mobile: {
                            gradient: "linear-gradient(0deg, #4C01C8 0%, #4C01C8 100%), #3E3E3E",
                            mainImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/mobile-mainImage.png",
                            backgroundImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/mobile-backgroundImage.png"
                        },
                        desktopActive: {
                            gradient: "#4C01C8",
                            mainImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/desktop-active-mainImage.png",
                            backgroundImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/desktop-active-backgroundImage.png"
                        }
                    },
                    steps: {
                        mobile: {
                            image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/steps-image-mobile.png",
                            gradient: "linear-gradient(326deg, #2836B8 0%, #8839FF 100%), linear-gradient(326deg, #4C01C8 0%, #B4A8FF 100%)"
                        },
                        desktop: {
                            image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/steps-image-desktop.png",
                            gradient: "linear-gradient(326deg, #2836B8 0%, #8839FF 100%), linear-gradient(326deg, #4C01C8 0%, #B4A8FF 100%), linear-gradient(142deg, #00DD65 0%, #0167FF 61.06%)"
                        }
                    },
                    homepageLink: {
                        gradient: "linear-gradient(310deg, #2836B8 9.25%, #8839FF 93.27%)",
                        image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/homepageLink.png"
                    },
                    headerLink: {
                        gradient: "linear-gradient(326deg, #2836B8 0%, #8839FF 100%)",
                        image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240314/headerLink.png"
                    },
                    nextRaffleTimer: {
                        gradient: "radial-gradient(317.48% 132.58% at 96.52% -19.38%, #CA94FF 0%, #4C00C7 100%), linear-gradient(86deg, #7000FF 2.74%, #CA32FF 26.08%, #E63232 51.31%, #FF4E3E 69.16%, #F90 96.09%)"
                    },
                    version: 1
                },
                B = {
                    headerLink: {
                        gradient: "linear-gradient(161deg, #00B3FF 1%, #003DDA 100%)",
                        image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/headerLink.png"
                    },
                    homepageLink: {
                        gradient: "linear-gradient(161deg, #00B3FF 1%, #003DDA 100%)",
                        image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/homepageLink.png"
                    },
                    main: {
                        desktopActive: {
                            mainImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/desktop-active-mainImage.png",
                            backgroundImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/desktop-active-backgroundImage.png",
                            gradient: "#DD834E"
                        },
                        mobile: {
                            mainImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/mobile-mainImage.png",
                            backgroundImage: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/mobile-backgroundImage.png",
                            gradient: "#DD834E"
                        }
                    },
                    steps: {
                        desktop: {
                            image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/steps-image-desktop.png",
                            gradient: "linear-gradient(161deg, #00B3FF 1%, #003DDA 100%)"
                        },
                        mobile: {
                            image: "https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/steps-image-mobile.png",
                            gradient: "linear-gradient(161deg, #00B3FF 1%, #003DDA 100%)"
                        }
                    },
                    nextRaffleTimer: {
                        gradient: "linear-gradient(356deg, #B65B2D -4.16%, #DD834E 71.54%)",
                        backgroundMobile: 'url("https://d16q5vvir3f28d.cloudfront.net/raffle-20240411/timer-background-mobile.png") #DD834E'
                    },
                    version: 1
                },
                M = {
                    noneTaken: [(0, p.N)("available"), ...(0, p.o)(3, "future")],
                    allTypes: [...(0, p.o)(3, "taken"), (0, p.N)("missed"), ...(0, p.o)(5, "taken"), (0, p.N)("missed"), ...(0, p.o)(8, "taken"), (0, p.N)("missed"), (0, p.N)("takenToday"), (0, p.N)("available"), ...(0, p.o)(10, "future")],
                    takenAll: (0, p.o)(10, "taken")
                },
                E = {
                    isParticipant: {
                        isParticipant: !0,
                        tickets: M.noneTaken
                    },
                    isNotParticipant: {
                        isParticipant: !1,
                        isEmailVerified: !0,
                        isDepositVerified: !1,
                        deposit: 1069,
                        currency: "USD"
                    }
                },
                N = [{
                    raffleData: k(f(f(f({
                        id: 4,
                        cardId: 54,
                        texts: k(f(f({}, w), S), {
                            subtitle: `Next raffle: ${w.subtitle}`
                        }),
                        design: B
                    }, C), A), P.beforeTranslation), {
                        startsAt: T(O(-1))
                    }),
                    userData: E.isNotParticipant
                }, {
                    raffleData: f(f(f({
                        id: 3,
                        cardId: 54,
                        texts: k(f({}, w), {
                            subtitle: `Current raffle: ${w.subtitle}`
                        }),
                        design: L
                    }, C), A), P.beforeTranslation),
                    userData: E.isParticipant
                }],
                D = e => JSON.parse(JSON.stringify(e)),
                x = (e = !1) => new Promise((t => {
                    setTimeout((() => {
                        t(D({
                            success: !0,
                            data: N.map((t => f(f({}, t.raffleData), e ? {
                                userData: t.userData
                            } : {})))
                        }))
                    }), 1e3)
                }));
            var R, j = a(644540),
                F = a(656459),
                $ = a(112808),
                z = a(305653),
                U = a(173870),
                Z = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const G = !1,
                H = {
                    isMockRaffleData: !1
                },
                q = 216e5,
                V = ((null == (R = $.appConfig.options.brand) ? void 0 : R.name) ? `${$.appConfig.options.brand.name} ` : "") + "Lucky Drive",
                W = (0, n.Q_)("carRaffle", (() => {
                    const e = (0, u.L)(),
                        t = (0, s.oR)(),
                        a = (0, l.Fe)(),
                        n = (0, l.lm)(),
                        p = (0, c.u)(),
                        m = (0, c.u)(),
                        _ = (0, c.u)(),
                        h = (0, o.iH)([]),
                        g = (0, o.iH)([]),
                        y = (0, o.iH)(!1),
                        v = (0, r.Fl)((() => h.value.filter((({
                            activityState: e
                        }) => "hidden" !== e)))),
                        b = (0, r.Fl)((() => {
                            const e = v.value.find((({
                                activityState: e
                            }) => "active" === e));
                            if (e) return {
                                design: e.data.design,
                                texts: e.data.texts
                            }
                        }));
                    let f = !1,
                        k = [];
                    const w = e => {
                            var t;
                            h.value = e.map((e => ({
                                data: e,
                                activityState: "hidden"
                            })));
                            for (const n of k) clearTimeout(n);
                            k = [];
                            const a = Date.now();
                            for (const n of h.value) {
                                const e = Number(new Date(n.data.startsAt)),
                                    o = Number(new Date(n.data.endsAt)),
                                    r = a < e && n.data.texts.nextRaffleTimerCaption && (null == (t = n.data.design) ? void 0 : t.nextRaffleTimer);
                                n.activityState = r ? "pending" : a > e && a < o ? "active" : "hidden";
                                const i = e - a,
                                    s = o - a;
                                i > 0 && i < q && (k[k.length] = setTimeout((() => {
                                    n.activityState = "active"
                                }), i)), s > 0 && s < q && (k[k.length] = setTimeout((() => {
                                    n.activityState = "hidden"
                                }), s))
                            }
                        },
                        S = () => H.isMockRaffleData ? x(e.isAuthed) : p({
                            name: (0, F.Yj)("v2-raffle-getCurrent"),
                            payload: {
                                currency: d.vuexStore.getters.viewCurrency,
                                clientLanguage: d.vuexStore.getters.currentLang
                            }
                        }),
                        C = () => Z(void 0, null, (function*() {
                            var e;
                            if (!(null == (e = $.appConfig.modules.freeMoney) ? void 0 : e.isTemporaryUnavailable)) {
                                f = !0, y.value = !0;
                                try {
                                    const e = yield S();
                                    if (!e.success) throw new Error("Error fetching raffle data");
                                    w(e.data)
                                } catch (t) {
                                    w([]), console.error(t)
                                } finally {
                                    y.value = !1
                                }
                            }
                        })),
                        I = (0, r.Fl)((() => j.A ? "android-apk" : a.pwa.any && a.mobile.apple.any ? "pwa-IOS" : a.pwa.any && a.mobile.android.any ? "pwa-android" : a.mobile.any ? "web-mobile" : "web-desktop")),
                        O = e => Z(void 0, null, (function*() {
                            try {
                                const t = yield m({
                                    name: (0, F.Yj)("v1-raffle-grabTicket"),
                                    payload: {
                                        tzOffsetMinutes: (new Date).getTimezoneOffset(),
                                        deviceType: I.value
                                    }
                                });
                                if (!t.success) throw new Error("Error loading tickets");
                                const a = h.value.find((({
                                    data: {
                                        id: t
                                    }
                                }) => t === e));
                                a && (a.data.userData = t.userData)
                            } catch (t) {
                                console.error(t), n.error(t)
                            }
                        })),
                        T = (e, t) => {
                            const a = h.value.find((({
                                    data: {
                                        id: t
                                    }
                                }) => e === t)),
                                n = {
                                    email: "isEmailVerified",
                                    deposit: "isDepositVerified"
                                }[t];
                            (null == a ? void 0 : a.data.userData) && (a.data.userData[n] = !0)
                        },
                        P = () => Z(void 0, null, (function*() {
                            if (g.value.length > 0) return g.value;
                            try {
                                const e = yield _({
                                    name: (0, F.Yj)("v1-raffle-getWinningParticipants")
                                });
                                return g.value = e.data, e.data
                            } catch (e) {
                                return console.error(e), n.error(e), []
                            }
                        })),
                        A = (0, i.yj)(),
                        {
                            isMobile: L
                        } = d.vuexStore.getters,
                        B = L ? U.Z.FREE_MONEY : z.Z.FREE_MONEY;
                    return (0, r.YP)(A, (({
                        name: e
                    }) => {
                        !G && e && (e !== B && f || C())
                    }), {
                        immediate: !0
                    }), (0, r.YP)((() => e.isAuthed), (() => {
                        G || A.name !== B || C()
                    })), (0, r.YP)((() => t.getters.currency), (() => {
                        G || A.name !== B || C()
                    })), {
                        activeRaffles: v,
                        rafflesList: h,
                        raffleLinkData: b,
                        isLoadingRaffleData: y,
                        fetchBlockData: C,
                        claimTicket: O,
                        completeVerificationStep: T,
                        fetchRaffleWinnersData: P
                    }
                }))
        },
        373817: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => p,
                R: () => m
            });
            var n = a(567476),
                o = a(602262),
                r = a(166252),
                i = a(280894),
                s = a(920346),
                l = a(878417),
                c = a(656459),
                d = a(112808),
                u = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const p = {
                    HIDDEN: "hidden",
                    NOT_AUTHED: "not-authed",
                    PENDING: "pending",
                    IN_PROGRESS: "in-progress",
                    DONE: "done"
                },
                m = (0, n.Q_)("freemoneyTelegram", (() => {
                    var e;
                    const t = (0, i.oR)(),
                        a = (0, l.L)(),
                        n = (0, s.lm)(),
                        m = (0, s.Jr)("common.freemoneyV2.telegramBlock.accountLinked"),
                        _ = (0, o.iH)(),
                        h = (0, o.iH)(!1),
                        g = (0, o.iH)(!1),
                        y = (0, o.iH)(),
                        v = null == (e = d.appConfig.modules.freeMoney) ? void 0 : e.isDisabledTelegram,
                        b = (0, r.Fl)((() => v || g.value || !t.getters.socialLinks.telegram ? p.HIDDEN : a.isAuthed ? h.value ? p.PENDING : 2 === _.value ? p.DONE : 0 === _.value || 1 === _.value ? p.IN_PROGRESS : p.HIDDEN : p.NOT_AUTHED)),
                        f = () => u(void 0, null, (function*() {
                            if (!v) try {
                                h.value = !0;
                                const {
                                    data: e
                                } = yield t.getters.socket.send((0, c.Yj)("tg-subscription-status"));
                                if (!e.success || ![0, 1, 2].includes(e.completedStep) || 0 === e.completedStep && !e.tgBotUrl) throw new Error(JSON.stringify(e));
                                _.value = e.completedStep, y.value = e.tgBotUrl
                            } catch (e) {
                                throw n.error(e), console.error(e), e
                            } finally {
                                h.value = !1
                            }
                        })),
                        k = () => u(void 0, null, (function*() {
                            if (!v)
                                if (g.value = !0, a.isAuthed) try {
                                    yield f(), g.value = !1
                                } catch (e) {} else g.value = !1
                        })),
                        w = () => u(void 0, null, (function*() {
                            if (!a.isAuthed) return _.value = void 0, void(y.value = void 0);
                            try {
                                yield f()
                            } catch (e) {
                                g.value = !0
                            }
                        }));
                    v || (0, r.YP)((() => a.isAuthed), w);
                    const S = ({
                        event: e
                    }) => {
                        "account-already-linked-error" === e && n.open(m)
                    };
                    return {
                        blockState: b,
                        stepsCompleted: _,
                        tgBotUrl: y,
                        isBlockDisabled: v,
                        isForcedHidden: g,
                        init: k,
                        refresh: f,
                        handleTgBonusPush: S
                    }
                }))
        },
        779547: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => _
            });
            var n = a(567476),
                o = a(602262),
                r = a(166252),
                i = a(548173),
                s = a(205658),
                l = a(753501),
                c = a(800231),
                d = a(878417),
                u = a(544579),
                p = a(656459),
                m = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const _ = (0, n.Q_)("kyc", (() => {
                const e = (0, d.L)(),
                    t = (0, o.qj)({}),
                    a = (0, c.u)(),
                    n = (0, c.u)(),
                    _ = (0, c.u)(),
                    h = (0, c.u)(),
                    g = (0, c.u)(),
                    y = (0, c.u)(),
                    v = (0, s.X)(),
                    b = (0, r.Fl)((() => v.getKycGeoSync())),
                    f = (0, r.Fl)((() => t.isInitialKyc || t.status !== i.sF.DEFAULT ? t.status : i.sF.ERROR)),
                    k = (0, r.Fl)((() => (0, u.Pw)(b.value) === i.K4.NATIVE)),
                    w = e => {
                        const a = e.verified,
                            n = e.attemptsLeft > 0;
                        (a || n) && (t.activeType = i.nR.INTERNAL, e.attemptsLeft === e.verificationsCount ? t.status = i.sF.DEFAULT : t.status = a ? i.sF.SUCCESS : i.sF.ERROR, t.remainingVerifications = e.attemptsLeft, t.verificationsCount = e.verificationsCount, t.documentsData = (0, u.Sj)(e, t.status, (0, u.Te)(b.value)), t.isInitialKyc = !0, t.isDisabled = e.isDisabled)
                    },
                    S = e => {
                        t.activeType = i.nR.NATIVE, t.status = (0, u.qD)(e), t.documentsData = [], t.remainingVerifications = e.remainingVerifications, t.isInitialKyc = k.value, t.isDisabled = e.isDisabled
                    },
                    C = e => {
                        for (const a of Object.keys(e)) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
                    },
                    I = () => m(void 0, null, (function*() {
                        if (!b.value) throw new Error("Unknown kyc path");
                        const e = yield a({
                            name: (0, p.Ty)(`internal-${b.value}-status`)
                        }), t = e.verified || e.attemptsLeft > 0;
                        return t && w(e), t
                    })),
                    O = () => m(void 0, null, (function*() {
                        if (!b.value) throw new Error("Unknown kyc path");
                        const e = yield _({
                            name: (0, p.Ty)("kyc-status"),
                            payload: {
                                formType: "primary",
                                country: b.value
                            }
                        });
                        S(e)
                    })),
                    T = () => m(void 0, null, (function*() {
                        const e = yield g({
                            name: (0, p.Ty)("kyc-status"),
                            payload: {
                                formType: "primary",
                                country: "default"
                            }
                        });
                        S(e)
                    })),
                    P = () => m(void 0, null, (function*() {
                        if (!k.value) {
                            const e = yield I();
                            if (e) return
                        }
                        const {
                            isOptionalKycEnabled: e
                        } = (0, l.G)();
                        e.value ? yield T(): yield O()
                    })),
                    A = () => m(void 0, null, (function*() {
                        if (!b.value) throw new Error("Unknown kyc path");
                        const e = yield h({
                            name: (0, p.Ty)("kyc-url"),
                            payload: {
                                formType: "primary",
                                country: b.value
                            }
                        });
                        t.frameSrc = (0, u.Kv)(e.url)
                    })),
                    L = () => m(void 0, null, (function*() {
                        const e = yield y({
                            name: (0, p.Ty)("kyc-url"),
                            payload: {
                                formType: "primary",
                                country: "default"
                            }
                        });
                        t.frameSrc = (0, u.Kv)(e.url)
                    })),
                    B = () => m(void 0, null, (function*() {
                        var e, a;
                        b.value && (yield n({
                            name: (0, p.Ty)(`internal-${b.value}-validate`),
                            payload: null != (a = null == (e = t.documentsData) ? void 0 : e.reduce(((e, t) => (void 0 !== t.value && (e[t.type] = u.QT[t.type].normalizePayloadValue(t.value)), e)), {})) ? a : {}
                        }))
                    }));
                return (0, r.YP)((() => e.isAuthed), (() => {
                    C(Object.fromEntries(Object.keys(t).map((e => [e, void 0]))))
                })), {
                    data: (0, o.OT)(t),
                    formStatus: f,
                    updateData: C,
                    setNativeKycData: S,
                    loadStatusData: P,
                    loadFrameSrc: A,
                    loadOptionalFrameSrc: L,
                    sendInternalKycDocs: B
                }
            }))
        },
        375189: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => _
            });
            var n = a(567476),
                o = a(602262),
                r = a(280894),
                i = a(388124),
                s = a(920346),
                l = a(800231),
                c = a(198347),
                d = a(891652),
                u = a(894710),
                p = a(59394),
                m = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const _ = (0, n.Q_)("loyaltyProgram", (() => {
                const e = (0, l.u)(),
                    t = (0, l.u)(),
                    a = (0, s.dd)(),
                    n = (0, s.lm)(),
                    _ = (0, r.oR)(),
                    {
                        closePopup: h
                    } = (0, s.AZ)(),
                    g = (0, s.Jr)("common.loyalty_program.error"),
                    {
                        isMobile: y
                    } = _.getters,
                    v = (0, o.iH)(null),
                    b = (0, o.iH)(null),
                    f = (0, o.iH)(null),
                    k = (0, o.iH)(),
                    w = (0, o.iH)(!1),
                    S = t => m(void 0, null, (function*() {
                        if (!v.value) try {
                            const t = yield e({
                                name: "LOYALTY-PROGRAM:get-levels-config",
                                payload: {
                                    user_currency: "USD"
                                }
                            });
                            v.value = t.levels_config
                        } catch (a) {
                            if (d.L.sendLoyalEvents("pageload_error"), t) return void n.error(g.message, {
                                props: {
                                    title: g.title
                                }
                            });
                            S(!0)
                        }
                    })),
                    C = e => m(void 0, null, (function*() {
                        try {
                            const e = yield t({
                                name: "LOYALTY-PROGRAM:get-user-level"
                            });
                            b.value = {
                                currentLevel: e.current_level,
                                nextLevel: e.next_level,
                                nextLevelProgress: e.next_level_progress
                            }
                        } catch (a) {
                            if (d.L.sendLoyalEvents("pageload_error"), e) return void n.error(g.message, {
                                props: {
                                    title: g.title
                                }
                            });
                            C(!0)
                        }
                    })),
                    I = () => {
                        clearTimeout(k.value), k.value = setTimeout((() => {
                            if (!f.value || w.value) return;
                            const e = f.value;
                            f.value = null, w.value = !0, a.open(y ? p._A : u._A, {
                                props: {
                                    levelupBonus: e.content.data.levelupBonus.amount,
                                    levelSysname: e.content.data.levelSysname,
                                    levelGroup: e.content.data.levelGroup
                                },
                                onClose: ({
                                    сloseType: t
                                }) => {
                                    w.value = !1, h(e.id), I(), t !== c.Z.UNKNOWN && d.L.sendLoyalEvents("modal_close", {
                                        modal_name: "new_level",
                                        close_type: t === c.Z.MISCLICK ? "misclick" : "cross"
                                    })
                                }
                            })
                        }), 1e3)
                    },
                    O = e => {
                        f.value && f.value.createdAt > e.createdAt || !i.qN.includes(e.content.data.levelSysname) || !i.x.includes(e.content.data.levelGroup) ? h(e.id) : (f.value && h(f.value.id), f.value = e, I())
                    };
                return {
                    levelsConfig: v,
                    loadLevelsConfig: S,
                    loadUserLevel: C,
                    userLevel: b,
                    resolveLoyaltyPushCDP: O
                }
            }))
        },
        25083: (e, t, a) => {
            "use strict";
            a.d(t, {
                m: () => Yi
            });
            var n = {};
            a.r(n), a.d(n, {
                loadBgImages: () => M,
                loadMaxBetAmount: () => E,
                makeBet: () => N,
                makeBets: () => D
            });
            var o = {};
            a.r(o), a.d(o, {
                bgImageForMatch: () => x,
                currentTranslation: () => R,
                matchStatsUrl: () => j
            });
            var r = {};
            a.r(r), a.d(r, {
                addBgImageForMatch: () => U,
                setBetMaking: () => z,
                setCurrentTranslation: () => Z,
                setOpenBets: () => F,
                setOpenBetsLoading: () => $
            });
            var i = {};
            a.r(i), a.d(i, {
                cancelWithdrawal: () => Xe,
                getDisabledSelections: () => Je,
                getHistoryForSelection: () => Ke,
                getHistoryForSingleSelection: () => Ye
            });
            var s = {};
            a.r(s), a.d(s, {
                addHistoryItems: () => ct,
                changeDetailingItem: () => dt,
                clearAllHistory: () => it,
                clearHistory: () => rt,
                setDisabledSelections: () => lt,
                setHistory: () => st
            });
            var l = {};
            a.r(l), a.d(l, {
                confirmWithdrawal: () => pa,
                createDeposit: () => ma,
                createWithdrawal: () => ua,
                depositPrepare: () => va,
                getBankInfo: () => ba,
                getUserDataPaymentSnippet: () => ga,
                loadMethodsCountrySelector: () => fa,
                loadPaymentMethods: () => _a,
                loadWithdrawalMethods: () => ha,
                withdrawalPrepare: () => ya
            });
            var c = {};
            a.r(c), a.d(c, {
                depositBankingVersion: () => Ea,
                getInstructionByPaymentMethod: () => Aa,
                isDirectGeo: () => Ma,
                moneyCountries: () => Ba,
                moneyCountry: () => La,
                paymentMethodMap: () => Ia,
                sortedPaymentMethodsList: () => Oa,
                sortedWithdrawalMethodsList: () => Pa,
                withdrawalBankingVersion: () => Na,
                withdrawalMethodMap: () => Ta
            });
            var d = {};
            a.r(d), a.d(d, {
                setDepositBankingVersion: () => $a,
                setMoneyCountries: () => Fa,
                setMoneyCountry: () => ja,
                setPaymentMethodMap: () => xa,
                setWithdrawalBankingVersion: () => za,
                setWithdrawalMethodMap: () => Ra
            });
            var u = {};
            a.r(u), a.d(u, {
                get: () => Ha
            });
            var p = {};
            a.r(p), a.d(p, {
                get: () => qa
            });
            var m = {};
            a.r(m), a.d(m, {
                set: () => Va
            });
            var _ = {};
            a.r(_), a.d(_, {
                loadDataList: () => vn,
                loadDetails: () => bn
            });
            var h = {};
            a.r(h), a.d(h, {
                bonusList: () => wn,
                dataList: () => fn,
                faqList: () => Cn,
                leaderBoardList: () => Sn,
                ruleList: () => kn
            });
            var g = {};
            a.r(g), a.d(g, {
                setDataList: () => In,
                setDetails: () => On
            });
            var y = {};
            a.r(y), a.d(y, {
                connectToServer: () => wo,
                connectToServerSports: () => So,
                disconnectServerSports: () => Co,
                initSocketClient: () => ko,
                socketConnected: () => Io,
                socketPushConnected: () => Oo
            });
            var v = {};
            a.r(v), a.d(v, {
                connectedPushServer: () => Ao,
                socket: () => To,
                socketAlive: () => Po
            });
            var b = {};
            a.r(b), a.d(b, {
                socketConnected: () => Bo,
                socketInstance: () => Lo,
                socketPushConnected: () => Mo
            });
            var f = a(438643),
                k = a(813627),
                w = a(200847),
                S = a(545931),
                C = a(656459),
                I = Object.defineProperty,
                O = Object.getOwnPropertySymbols,
                T = Object.prototype.hasOwnProperty,
                P = Object.prototype.propertyIsEnumerable,
                A = (e, t, a) => t in e ? I(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                L = (e, t) => {
                    for (var a in t || (t = {})) T.call(t, a) && A(e, a, t[a]);
                    if (O)
                        for (var a of O(t)) P.call(t, a) && A(e, a, t[a]);
                    return e
                },
                B = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const M = (e, t) => B(void 0, [e, t], (function*({
                    state: e,
                    rootGetters: t,
                    commit: a
                }, n) {
                    if (Object.values(e.listBgImagesForMatch).length > 0) return;
                    const {
                        data: o
                    } = yield t.socket.send("MS-SMALL-THINGS:backgrounds-all", {
                        type: n
                    }), r = o.map((e => ({
                        id: e.objectId,
                        image: e.fileId
                    })));
                    for (const i of r) a("addBgImageForMatch", i)
                })),
                E = (e, t) => B(void 0, [e, t], (function*({
                    rootGetters: e
                }, t) {
                    var a;
                    const n = yield e.socket.send((0, C.RY)("bets-maxBetAmount"), {
                        couponList: t.map((e => e.amountDto))
                    }), o = (null == (a = n.data) ? void 0 : a.maxBetAmount) || {};
                    for (const r of f.Hw) o[r] || (o[r] = 0), o[r] = (0, S.f)(o[r], r);
                    return o
                })),
                N = (e, t) => B(void 0, [e, t], (function*({
                    rootGetters: e
                }, {
                    freeBetId: t,
                    amount: a,
                    selections: n,
                    isLive: o
                }) {
                    var r, i, s, l, c;
                    const d = n.length > 1 ? (0, w.q)(n) : n[0].id,
                        u = {
                            [d]: {
                                amount: t || !a ? 0 : a,
                                freebetId: t,
                                couponList: n.map((e => e.dto))
                            }
                        };
                    try {
                        const t = yield e.socket.send((0, C.RY)("bets-make"), {
                            betsMap: u,
                            isCoeffChangeable: e.isCoeffChangeable,
                            pushInfo: {
                                up: null != (i = null == (r = e.socket.socketPush) ? void 0 : r.connected) && i,
                                timestamp: null != (s = e.socket.lastPushServerTs) ? s : void 0,
                                transformTs: null != (l = e.socket.lastPushServerTransformTs) ? l : void 0,
                                userAgent: window.navigator.userAgent,
                                service: o ? "live" : "prematch"
                            }
                        });
                        return 200 !== t.status ? {
                            [d]: {
                                status: t.status,
                                error: {
                                    errorMessage: t.message
                                }
                            }
                        } : (delete t.data.status, t.data)
                    } catch (p) {
                        const e = "data" in p;
                        return e || (0, k.h)("BETS_MAKE_ERROR"), {
                            [d]: {
                                status: 400,
                                error: {
                                    messageLangKey: 429 === (null == (c = null == p ? void 0 : p.data) ? void 0 : c.status) ? "notification.error.many-request" : "notification.error.make-bet"
                                }
                            }
                        }
                    }
                })),
                D = (e, t) => B(void 0, [e, t], (function*({
                    state: e,
                    dispatch: t,
                    commit: a
                }, {
                    couponList: n,
                    express: o,
                    amount: r,
                    freeBetId: i
                }) {
                    if (e.isBetMaking) return;
                    const s = o ? [{
                            amount: r,
                            isLive: n.some((({
                                isLive: e
                            }) => e)),
                            freeBetId: i,
                            selections: n
                        }] : n.map((e => {
                            var t;
                            return {
                                amount: e.amount,
                                freeBetId: null == (t = e.freeBet) ? void 0 : t.id,
                                isLive: e.isLive,
                                selections: [e]
                            }
                        })),
                        l = s.map((({
                            amount: e,
                            selections: a,
                            isLive: n,
                            freeBetId: o
                        }) => t("makeBet", {
                            freeBetId: o,
                            amount: e,
                            selections: a,
                            isLive: n
                        })));
                    a("setBetMaking", !0);
                    const c = yield Promise.all(l);
                    return a("setBetMaking", !1), t("requestBalance", null, {
                        root: !0
                    }), c.reduce(((e, t) => L(L({}, e), t)), {})
                })),
                x = e => t => e.listBgImagesForMatch && e.listBgImagesForMatch[t],
                R = e => e.currentTranslation,
                j = (e, t, a, n) => e => `https://s5.sir.sportradar.com/firstbet/${n.currentLang}/${e}`;

            function F(e, t) {
                e.openBetsMap = t
            }

            function $(e, t) {
                e.isOpenBetsLoading = t
            }

            function z(e, t) {
                e.isBetMaking = t
            }
            const U = (e, {
                    id: t,
                    image: a
                }) => {
                    e.listBgImagesForMatch[t] = a
                },
                Z = (e, t = null) => {
                    e.currentTranslation = t
                };
            var G = a(932256);
            const H = "is_digitain_betting";

            function q(e) {
                const t = e.match(/(.+)\s([+-]?[0-9]+(\.[0-9]+)?)$/);
                if (null === t) return [e, null];
                const [, a, n] = t;
                return [a, n]
            }

            function V(e) {
                if ("object" === typeof e.name)
                    for (const t of Object.keys(e.name)) {
                        const [a, n = e.specialValue] = q(e.name[t]);
                        e.name[t] = a, e.specialValue = n
                    } else {
                        const [t, a = e.specialValue] = q(e.name);
                        e.name = t, e.specialValue = a
                    }
            }
            const W = e => e.sort(((e, t) => {
                var a, n;
                return (null != (a = e.description.game.dateOfMatch) ? a : 0) - (null != (n = t.description.game.dateOfMatch) ? n : 0) || e.id - t.id
            }));
            var Y = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));

            function K(e) {
                for (const t of e) t.providerId === G.aEp && V(t.description.odd)
            }

            function J(e) {
                e.selectionList = e.selections, delete e.selections, e.id = e.betId, delete e.betId, e.total_coefficient = e.coefficient, delete e.coefficient, e.time_open = e.timeOpen, delete e.timeOpen;
                for (const [t, a] of Object.entries(e.selectionList)) {
                    if (a.providerId !== G.WaB) return;
                    a.id = t, a.description = {
                        odd: {
                            coefficient: a.coefficient,
                            groupName: a.groupName,
                            name: {
                                [G.hnV]: a.typeName
                            },
                            dgTypeName: a.typeName
                        },
                        game: {
                            dateOfMatch: a.dateOfMatch,
                            tournamentName: a.tournamentName,
                            homeTeamName: {
                                [G.hnV]: a.homeTeamName
                            },
                            awayTeamName: {
                                [G.hnV]: a.awayTeamName
                            },
                            matchScore: a.score
                        }
                    }, delete a.coefficient, delete a.groupName, delete a.typeName, delete a.tournamentName, delete a.homeTeamName, delete a.awayTeamName, delete a.matchScore
                }
            }
            const X = {
                    namespaced: !0,
                    state: () => ({
                        entries: [],
                        openBetsMap: {},
                        total: 0,
                        timeFilter: {
                            hour: !1,
                            date: []
                        }
                    }),
                    actions: {
                        loadBetsHistory(e, t) {
                            return Y(this, arguments, (function*({
                                rootGetters: {
                                    socket: e,
                                    currentLang: t
                                },
                                rootGetters: a
                            }, {
                                page: n,
                                recordsPerPage: o,
                                where: r
                            }) {
                                const i = "boolean" === typeof a.user[H],
                                    s = i ? {
                                        language: t,
                                        withRefundData: !0,
                                        limit: o,
                                        offset: n * o,
                                        where: r
                                    } : {
                                        language: t,
                                        withRefundData: !0,
                                        order: ["id", "DESC"],
                                        limit: [n * o, o],
                                        where: r
                                    },
                                    l = i ? (0, C.yN)("history-get") : (0, C.RY)("bets-history"),
                                    c = yield e.send(l, s), [d, u] = i ? [c.data.history.totalCount, c.data.history.items] : [c.data.totalCount, Object.values(c.data.betsMap)];
                                for (const p of u) i && J(p), K(p.selectionList);
                                return u.sort((({
                                    time_open: e
                                }, {
                                    time_open: t
                                }) => t - e)), {
                                    entries: u,
                                    total: d
                                }
                            }))
                        },
                        loadOpenBets(e) {
                            return Y(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }) {
                                try {
                                    const a = yield t.socket.send((0, C.RY)("bets-history"), {
                                        withRefundData: !0,
                                        order: ["id", "DESC"],
                                        where: {
                                            status: [G.Ed7.OPEN]
                                        },
                                        language: t.currentLang,
                                        limit: [0, 1e4]
                                    });
                                    e("setOpenBets", a.data.betsMap)
                                } catch (a) {
                                    throw console.error("loadOpenBets", a.message), (0, k.h)("BETS_HISTORY_ERROR"), a
                                }
                            }))
                        },
                        getBetById(e, t) {
                            return Y(this, arguments, (function*({
                                rootGetters: {
                                    socket: e,
                                    currentLang: t
                                },
                                rootGetters: a
                            }, {
                                bettingProvider: n,
                                id: o
                            }) {
                                const r = "boolean" === typeof a.user[H],
                                    i = r ? (0, C.yN)("history-getOne") : (0, C.RY)("bets-get"),
                                    s = r ? {
                                        id: o,
                                        provider: n,
                                        withRefundData: !0,
                                        language: t
                                    } : {
                                        id: o.toString(),
                                        withRefundData: !0,
                                        language: t
                                    },
                                    l = yield e.send(i, s), c = r ? l.data.item : l.data;
                                return r && J(c), W(c.selectionList), K(c.selectionList), c
                            }))
                        },
                        betsRefund(e, t) {
                            return Y(this, arguments, (function*({
                                rootGetters: e,
                                dispatch: t
                            }, {
                                id: a,
                                price: n
                            }) {
                                try {
                                    const {
                                        data: o
                                    } = yield e.socket.send((0, C.RY)("bets-refund"), {
                                        betId: a,
                                        price: n
                                    });
                                    return t("requestBalance", {}, {
                                        root: !0
                                    }), o
                                } catch (o) {
                                    throw console.error("betsRefund", o.message), o
                                }
                            }))
                        }
                    },
                    mutations: {
                        updateBetsHistory(e, {
                            entries: t,
                            total: a
                        }) {
                            for (const n of t) W(n.selectionList);
                            e.total = a, e.entries = t
                        },
                        updateBet(e, t) {
                            const a = e.entries.findIndex((e => e.id === t.id));
                            e.entries[a] = t
                        },
                        setBetsHistoryTimeFilter(e, t) {
                            e.timeFilter = t
                        },
                        setOpenBets(e, t) {
                            e.openBetsMap = t
                        }
                    },
                    getters: {
                        betsHistoryEntries: e => e.entries,
                        betsHistoryTimeFilterActive: e => {
                            var t, a, n;
                            return Boolean((null == (t = e.timeFilter) ? void 0 : t.hour) || (null == (n = null == (a = e.timeFilter) ? void 0 : a.date) ? void 0 : n.length))
                        },
                        timeFilter: e => e.timeFilter,
                        isBetRefundable: () => e => {
                            var t;
                            return e.status === G.Ed7.OPEN && (null == (t = e.refundInfo) ? void 0 : t.allowed)
                        }
                    }
                },
                Q = {
                    namespaced: !0,
                    modules: {
                        history: X
                    },
                    state: () => ({
                        isBetMaking: !1,
                        listBgImagesForMatch: {},
                        currentTranslation: null
                    }),
                    getters: o,
                    mutations: r,
                    actions: n
                };
            var ee = a(84018),
                te = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const ae = {
                    namespaced: !0,
                    actions: {
                        loadGroups() {
                            return te(this, null, (function*() {
                                return []
                            }))
                        },
                        loadEvents() {
                            return te(this, null, (function*() {
                                return []
                            }))
                        },
                        loadEvent() {
                            return te(this, null, (function*() {
                                return {}
                            }))
                        }
                    }
                },
                ne = ae;
            var oe = Object.defineProperty,
                re = Object.getOwnPropertySymbols,
                ie = Object.prototype.hasOwnProperty,
                se = Object.prototype.propertyIsEnumerable,
                le = (e, t, a) => t in e ? oe(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                ce = (e, t) => {
                    for (var a in t || (t = {})) ie.call(t, a) && le(e, a, t[a]);
                    if (re)
                        for (var a of re(t)) se.call(t, a) && le(e, a, t[a]);
                    return e
                },
                de = (e, t) => {
                    var a = {};
                    for (var n in e) ie.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                    if (null != e && re)
                        for (var n of re(e)) t.indexOf(n) < 0 && se.call(e, n) && (a[n] = e[n]);
                    return a
                },
                ue = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const pe = {
                    namespaced: !0,
                    modules: {
                        api: ne
                    },
                    state: () => ({
                        state: G.S0q,
                        group: null,
                        groupMap: {},
                        groupList: [],
                        eventMap: {},
                        event: null
                    }),
                    getters: {
                        state: e => e.state,
                        groupList: e => e.groupList,
                        group: e => e.group,
                        getGroupById: e => t => e.groupMap[t],
                        eventList: e => Object.values(e.eventMap).flat(),
                        event: e => e.event,
                        getEventById: (e, t) => e => t.eventList.find((t => t.id === e))
                    },
                    mutations: {
                        setGroupMap(e, t) {
                            e.groupMap = t
                        },
                        setGroupList(e, t) {
                            e.groupList = t
                        },
                        setGroup(e, t) {
                            e.group = t
                        },
                        setEventMap(e, {
                            groupId: t,
                            events: a
                        }) {
                            e.eventMap[t] = a
                        },
                        addToEventMap(e, t) {
                            const a = e.eventMap[t.groupId] || [],
                                n = a.some((e => e.id === t.id)) ? [...a.filter((e => e.id !== t.id)), t] : [...a, t];
                            e.eventMap[t.groupId] = n
                        },
                        setEvent(e, t) {
                            e.event = t
                        },
                        setState(e, t) {
                            e.state = t
                        }
                    },
                    actions: {
                        loadData(e) {
                            return ue(this, arguments, (function*({
                                commit: e,
                                getters: t,
                                dispatch: a
                            }) {
                                t.state !== G.ik$ && (e("setState", G.ik$), yield a("loadGroups"), e("setState", G.fEQ))
                            }))
                        },
                        loadEvents(e, t) {
                            return ue(this, arguments, (function*({
                                state: e,
                                getters: t,
                                commit: a,
                                dispatch: n
                            }, o) {
                                const r = [o, ...t.groupList.filter((t => t.parentId === +o && !e.eventMap[t.id])).map((e => e.id))];
                                return Promise.all(r.map((e => n("api/loadEvents", {
                                    groupId: e
                                }).then((t => {
                                    a("setEventMap", {
                                        groupId: e,
                                        events: t.map((e => (0, ee.ci)(e))).sort(((e, t) => (e.rank || Number.POSITIVE_INFINITY) - (t.rank || Number.POSITIVE_INFINITY)))
                                    })
                                })))))
                            }))
                        },
                        loadGroups(e) {
                            return ue(this, arguments, (function*({
                                commit: e,
                                dispatch: t
                            }) {
                                yield t("api/loadGroups").then((t => {
                                    e("setGroupList", t.map((e => (0, ee.WE)(e)))), e("setGroupMap", Object.fromEntries(t.map((e => {
                                        var t = e,
                                            {
                                                id: a
                                            } = t,
                                            n = de(t, ["id"]);
                                        return [a, (0, ee.WE)(ce({
                                            id: a
                                        }, n))]
                                    }))))
                                }))
                            }))
                        },
                        loadEvent(e, t) {
                            return ue(this, arguments, (function*({
                                dispatch: e,
                                commit: t
                            }, a) {
                                const n = yield e("api/loadEvent", {
                                    id: a
                                }), o = (0, ee.ci)(n);
                                t("setEvent", o), t("addToEventMap", o)
                            }))
                        }
                    }
                },
                me = pe;
            var _e = a(407760),
                he = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const ge = {
                namespaced: !0,
                state: () => ({
                    info: {},
                    state: G.S0q
                }),
                getters: {
                    countryInfoIsLoaded: e => e.state === G.fEQ,
                    countryInfoIsLoading: e => e.state === G.ik$,
                    countryInfo: e => e.info
                },
                mutations: {
                    setCountryInfoSuccess: (e, t) => {
                        e.state = G.fEQ, e.info = t
                    },
                    setCountryInfoLoading: e => {
                        e.state = G.ik$
                    }
                },
                actions: {
                    fetchCountryInfo(e) {
                        return he(this, arguments, (function*({
                            commit: e,
                            state: t,
                            rootGetters: a
                        }, n = !0) {
                            if (n || t.state === G.S0q) try {
                                e("setCountryInfoLoading");
                                const {
                                    data: t
                                } = yield a.socket.send("USER:profile-countryInfo"), n = (0, _e.oi)(t);
                                if (!n) throw new Error("Country info data normalization has been failed, language based data will be used");
                                e("setCountryInfoSuccess", n)
                            } catch (o) {
                                console.error(o), e("setCountryInfoSuccess", (0, _e.Gi)(a.currentLang))
                            }
                        }))
                    }
                }
            };
            var ye = a(166252),
                ve = a(570834),
                be = a(655528),
                fe = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const {
                REMOVED: ke
            } = ve.CouponNotificationsKeys, we = {
                toggleCoupon({
                    rootState: e,
                    rootGetters: t,
                    getters: a,
                    dispatch: n,
                    state: o
                }, r) {
                    var i;
                    if (!r) return;
                    if (o.isSubmitPending) return;
                    if (a.checkCouponAdded(r.id)) return void n("deleteCoupon", r.id);
                    if (r.disabled) return;
                    const s = e.xbet[r.service].matchMap[r.matchId],
                        l = t[`xbet/${r.service}/getTournamentMap`][s.tournamentId],
                        c = t["xbet/sports/getSportMap"][s.sportId],
                        d = null == (i = t["xbet/oddGroups/getOddGroupMap"]) ? void 0 : i[r.groupId],
                        u = new be.Z({
                            sport: c,
                            tournament: l,
                            match: s,
                            odd: r,
                            group: d
                        });
                    n("addCoupon", u)
                },
                getTotalMaxBetAmount(e, t) {
                    return fe(this, arguments, (function*({
                        dispatch: e,
                        commit: t
                    }, a) {}))
                },
                getMaxBetAmount(e, t) {
                    return fe(this, arguments, (function*({
                        dispatch: e
                    }, t) {
                        return 0
                    }))
                },
                addCoupon({
                    commit: e,
                    getters: t,
                    state: a
                }, n) {
                    a.isSubmitPending || a.couponList.some((e => e.id === n.id)) || (a.couponList.unshift(n), a.betType === G.edR && e("leaveOnlyLastCouponForEveryMatch"), a.betTypePrev || t.isExpressDisabled || (a.betTypePrev = a.betType, a.betType = G.edR, e("leaveOnlyLastCouponForEveryMatch")), a.betType === G.edR && t.isExpressDisabled && (a.betTypePrev = a.betType, a.betType = G.bqD))
                },
                deleteCoupon({
                    getters: e,
                    state: t
                }, a) {
                    if (t.isSubmitPending) return !1;
                    const n = t.couponList.findIndex((e => e.id === a));
                    return -1 !== n && (t.couponList.splice(n, 1), delete t.statusMapByCouponId[a], (t.betType === G.iQC && e.isSeriesDisabled || t.betType === G.edR && e.isExpressDisabled) && (t.betTypePrev = t.betType, t.betType = G.bqD), 0 === t.couponList.length && (t.betTypePrev = null), !0)
                },
                deleteRecoverableCoupon({
                    state: e,
                    commit: t,
                    dispatch: a
                }, n) {
                    const o = e.couponList.find((e => e.id === n)),
                        r = a("deleteCoupon", n);
                    r && (t("setLastRemovedCoupons", [o]), a("showCouponRemovedNotification"))
                },
                restoreLastRemovedCoupons({
                    state: e,
                    commit: t,
                    dispatch: a
                }) {
                    for (const n of e.lastRemovedCoupons) a("addCoupon", n);
                    t("setLastRemovedCoupons", [])
                },
                forgetRecoverableCoupons({
                    state: e,
                    commit: t
                }) {
                    t("setLastRemovedCoupons", []);
                    const a = ve.h[ke];
                    clearInterval(a.timerId), delete e.notificationsCurrentTime[ke], delete e.notificationsTimeoutTime[ke]
                },
                setActiveCouponModels({
                    getters: e,
                    state: t
                }, a) {
                    t.activeCouponModels = a, (t.betType === G.iQC && e.isSeriesDisabled || t.betType === G.edR && e.isExpressDisabled) && (t.betType = G.bqD)
                },
                setBetType({
                    commit: e,
                    getters: t,
                    state: a
                }, n) {
                    n === G.iQC && t.isSeriesDisabled || n === G.edR && t.isExpressDisabled ? a.betType = G.bqD : (a.betTypePrev = a.betType, a.betType = n, n === G.edR && e("leaveOnlyLastCouponForEveryMatch"))
                },
                updateCoupons(e) {
                    return fe(this, arguments, (function*({
                        commit: e,
                        dispatch: t,
                        state: a
                    }) {
                        if (0 === a.couponList.length) return;
                        const n = a.couponList.map((e => e.odd.matchId)),
                            o = yield t("xbet/api/getRawMatches", {
                                matchIds: n
                            }, {
                                root: !0
                            }), r = a.couponList.reduce(((e, t) => {
                                const a = -1 !== o.findIndex((e => e.id === t.odd.matchId));
                                return a ? e : [...e, t.odd.id]
                            }), []);
                        e("deleteCoupons", r)
                    }))
                },
                showNotification({
                    state: e
                }, t) {
                    const a = ve.h[t];
                    e.notificationsCurrentTime[t] = a.defaultTime, e.notificationsTimeoutTime[t] = Date.now() + 1e3 * a.defaultTime, clearInterval(a.timerId), a.timerId = setInterval((() => {
                        e.notificationsCurrentTime[t] -= 1, e.notificationsCurrentTime[t] <= 0 && (clearInterval(a.timerId), delete e.notificationsCurrentTime[t], delete e.notificationsTimeoutTime[t])
                    }), 1e3)
                },
                hideNotification({
                    state: e
                }, t) {
                    const a = ve.h[t];
                    clearInterval(a.timerId), delete e.notificationsCurrentTime[t]
                },
                clearCouponList({
                    state: e,
                    commit: t,
                    dispatch: a
                }) {
                    t("setLastRemovedCoupons", [...e.couponList]), t("clearCouponList"), a("showCouponRemovedNotification")
                },
                showCouponRemovedNotification(e) {
                    return fe(this, arguments, (function*({
                        commit: e,
                        dispatch: t
                    }) {
                        t("showNotification", ke), yield(0, ye.Y3)(), e("toggleRemovedNotificationHighlightTrigger")
                    }))
                }
            }, {
                BET_ACCEPTED: Se,
                REMOVED: Ce
            } = ve.CouponNotificationsKeys, Ie = (e, t) => e.add(Object.getPrototypeOf(t)), Oe = {
                activeCouponsList: e => e.couponList.filter((t => e.activeCouponModels.some((e => e instanceof Object && t instanceof e)))),
                isSeriesDisabled: (e, t) => t.activeCouponsList.length < 2,
                isExpressDisabled: (e, t) => {
                    const a = new Set(t.activeCouponsList.map((e => {
                            var t;
                            return null == (t = e.match) ? void 0 : t.id
                        }))).size,
                        n = t.activeCouponsList.some((e => {
                            var t;
                            return null == (t = e.match) ? void 0 : t.outright
                        })),
                        o = t.activeCouponsList.reduce(((e, t) => Ie(e, t)), new Set).size > 1;
                    return a < 2 || o || n
                },
                couponIdList: ({
                    couponList: e
                }) => e.map((e => e.id)),
                checkCouponAdded: (e, t) => e => t.couponIdList.includes(e),
                betTypeIsExpress: e => e.betType === G.edR,
                totalCoefficient: e => e.couponList.reduce(((e, t) => e * t.coefficient), 1),
                couponList: e => e.couponList,
                showBetAcceptedNotification: e => Se in e.notificationsCurrentTime,
                showCouponRemovedNotification: e => Ce in e.notificationsCurrentTime
            }, Te = {
                clearCouponList(e) {
                    e.couponList = [], e.betType = G.bqD, e.betTypePrev = null
                },
                deleteCoupons(e, t) {
                    e.couponList = e.couponList.filter((e => !t.includes(e.id)))
                },
                deleteStatus(e, t) {
                    var a;
                    clearTimeout(null == (a = e.statusMapByCouponId[t]) ? void 0 : a.resetTimeoutId), delete e.statusMapByCouponId[t]
                },
                setStatus(e, t) {
                    var a;
                    clearTimeout(null == (a = e.statusMapByCouponId[t.couponId]) ? void 0 : a.resetTimeoutId), e.statusMapByCouponId[t.couponId] = t
                },
                setTotalMaxBetAmount(e, t) {
                    e.totalMaxBetAmount = t
                },
                setBetAmount(e, {
                    couponId: t,
                    value: a
                }) {
                    const n = e.couponList.find((e => e.id === t));
                    n.amount = 0 === a ? null : a
                },
                setFreeBet(e, {
                    couponId: t,
                    value: a
                }) {
                    var n;
                    const o = e.couponList.find((e => e.id === t));
                    o.freeBet = (null == (n = o.freeBet) ? void 0 : n.id) === (null == a ? void 0 : a.id) ? void 0 : a
                },
                setFreeBetForAll(e, t) {
                    var a;
                    for (const n of e.couponList) n.freeBet = (null == (a = null == n ? void 0 : n.freeBet) ? void 0 : a.id) === (null == t ? void 0 : t.id) ? void 0 : t
                },
                setBetAmountForAll(e, t) {
                    for (const a of e.couponList) a.amount = 0 === t ? null : t
                },
                leaveOnlyLastCouponForEveryMatch(e) {
                    var t;
                    const a = [],
                        n = [];
                    for (const o of e.couponList) {
                        const e = null == (t = o.match) ? void 0 : t.id;
                        e ? a.includes(e) || (a.push(e), n.push(o)) : n.push(o)
                    }
                    e.couponList = n
                },
                setActiveMainTabKey(e, t) {
                    e.activeMainTabKey = t
                },
                setLastRemovedCoupons(e, t) {
                    e.lastRemovedCoupons = t
                },
                toggleRemovedNotificationHighlightTrigger(e) {
                    e.removedNotificationHighlightTrigger = !e.removedNotificationHighlightTrigger
                },
                sortCouponList(e, t) {
                    e.couponList = [...e.couponList].sort(t)
                },
                setLastSubmittedCoupons(e, t) {
                    e.lastSubmittedCoupons = void 0 === t ? [] : t
                },
                setIsSubmitPending(e, t) {
                    e.isSubmitPending = t
                }
            }, Pe = () => ({
                betType: G.bqD,
                betTypePrev: null,
                couponList: [],
                statusMapByCouponId: {},
                totalMaxBetAmount: {},
                notificationsCurrentTime: {},
                notificationsTimeoutTime: {},
                activeMainTabKey: null,
                lastRemovedCoupons: [],
                removedNotificationHighlightTrigger: !1,
                activeCouponModels: ve.W,
                lastSubmittedCoupons: [],
                isSubmitPending: !1
            }), Ae = {
                namespaced: !0,
                actions: we,
                getters: Oe,
                mutations: Te,
                state: Pe
            };
            var Le = a(112808),
                Be = a(945436),
                Me = a(212628),
                Ee = Object.defineProperty,
                Ne = Object.defineProperties,
                De = Object.getOwnPropertyDescriptors,
                xe = Object.getOwnPropertySymbols,
                Re = Object.prototype.hasOwnProperty,
                je = Object.prototype.propertyIsEnumerable,
                Fe = (e, t, a) => t in e ? Ee(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                $e = (e, t) => {
                    for (var a in t || (t = {})) Re.call(t, a) && Fe(e, a, t[a]);
                    if (xe)
                        for (var a of xe(t)) je.call(t, a) && Fe(e, a, t[a]);
                    return e
                },
                ze = (e, t) => Ne(e, De(t)),
                Ue = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const Ze = e => Object.values(e).sort(((e, t) => t.id - e.id)),
                Ge = e => e.filter((e => e.payment_system !== Me._I)),
                He = (e, t) => e.map((e => {
                    var a;
                    return Object.freeze({
                        origin: t,
                        id: e.id,
                        amount: e.amount,
                        status: null != (a = e.statusId) ? a : e.status,
                        timestamp: e.time || e.time_open || e.createdAt,
                        currency: e.currency,
                        data: e
                    })
                }));

            function qe(e) {
                return ({
                    data: {
                        items: t,
                        count: a
                    }
                }) => ({
                    count: a,
                    items: He(t, e)
                })
            }

            function Ve({
                apiRouteName: e = null,
                detailingOrigin: t = null,
                getNormalizedResponseData: a = qe(t),
                limit: n = null,
                childSelectionsList: o = []
            }) {
                return {
                    apiRouteName: e,
                    getNormalizedResponseData: a,
                    limit: n,
                    childSelectionsList: o
                }
            }
            const We = {
                [G.cgf.BETS]: Ve({
                    apiRouteName: (0, C.RY)("bets-history"),
                    getNormalizedResponseData: ({
                        data: {
                            betsMap: e,
                            totalCount: t
                        }
                    }) => ({
                        count: t,
                        items: He(Ze(e), G.Au.BETS)
                    }),
                    limit: 10
                }),
                [G.cgf.CASINO]: Ve({
                    apiRouteName: "USER:history-casino",
                    detailingOrigin: G.Au.CASINO
                }),
                [G.cgf.DEPOSITS]: Ve({
                    apiRouteName: (0, C.YT)("deposit-history"),
                    detailingOrigin: G.Au.DEPOSITS
                }),
                [G.cgf.RESUME]: Ve({
                    apiRouteName: (0, C.YT)("all-transactions-history"),
                    detailingOrigin: G.Au.RESUME
                }),
                [G.cgf.WITHDRAWALS]: Ve({
                    apiRouteName: (0, C.YT)("withdrawal-history"),
                    getNormalizedResponseData: ({
                        data: {
                            items: e,
                            count: t
                        }
                    }) => ({
                        count: t,
                        items: He(Ge(e), G.Au.WITHDRAWALS)
                    })
                }),
                [G.K2R.BONUSES]: Ve({
                    apiRouteName: "MS-BONUS-BALANCES:bonus-history",
                    detailingOrigin: G.Au.BONUSES
                })
            };

            function Ye(e, t) {
                return Ue(this, arguments, (function*({
                    rootGetters: e,
                    state: t,
                    commit: a
                }, {
                    selection: n,
                    more: o
                }) {
                    const {
                        items: r
                    } = t[n], i = r.length > 0 && o, {
                        apiRouteName: s,
                        getNormalizedResponseData: l,
                        limit: c
                    } = We[n];
                    i || a("clearHistory", n);
                    const d = {
                        [G.K2R.BONUSES]: {
                            paymentSystem: ["deposit", "payout"]
                        }
                    };
                    let u = $e({
                        language: e.currentLang
                    }, d[n]);
                    if (c) u = ze($e({}, u), {
                        order: ["id", "DESC"],
                        limit: [i ? r.length : 0, c]
                    });
                    else if (i) {
                        const e = G.Au.RESUME || G.Au.DEPOSITS || G.Au.WITHDRAWALS,
                            {
                                timestamp: t
                            } = r[r.length - 1],
                            {
                                id: a
                            } = r[r.length - 1];
                        u = $e($e({}, u), e ? {
                            lastTimestamp: t
                        } : {
                            lastId: a
                        })
                    }
                    const {
                        count: p,
                        items: m
                    } = l(yield e.socket.send(s, u));
                    a(i ? "addHistoryItems" : "setHistory", {
                        selection: n,
                        count: p,
                        items: m
                    })
                }))
            }

            function Ke(e, t) {
                return Ue(this, arguments, (function*({
                    commit: e,
                    dispatch: t,
                    state: a
                }, {
                    selection: n,
                    more: o = !1
                }) {
                    const r = We[n];
                    if (r.childSelectionsList.length > 0) return yield Promise.all(r.childSelectionsList.map((e => t("getHistoryForSelection", {
                        selection: e,
                        more: o
                    })))), void e("setHistory", {
                        selection: n,
                        items: r.childSelectionsList.flatMap((e => a[e].items)).sort(((e, t) => t.timestamp - e.timestamp)),
                        count: r.childSelectionsList.reduce(((e, t) => e + a[t].count), 0)
                    });
                    yield t("getHistoryForSingleSelection", {
                        selection: n,
                        more: o
                    })
                }))
            }

            function Je(e) {
                return Ue(this, arguments, (function*({
                    commit: e,
                    rootGetters: t
                }) {
                    const a = (0, Be.gD)();
                    if (a.isNewBonusBalance) {
                        const {
                            data: {
                                hasTransactions: a
                            }
                        } = yield t.socket.send("MS-BONUS-BALANCES:user-data");
                        e("setDisabledSelections", {
                            [G.K2R.BONUSES]: a
                        })
                    }
                }))
            }

            function Xe(e, t) {
                return Ue(this, arguments, (function*({
                    rootGetters: e,
                    commit: t
                }, a) {
                    yield e.socket.send((0, C.YT)("withdrawal-cancel"), {
                        withdrawalId: a.id
                    }), t("changeDetailingItem", {
                        item: a,
                        changedFields: {
                            status: G.GZh.CANCELED
                        },
                        selection: G.cgf.WITHDRAWALS
                    })
                }))
            }
            var Qe = Object.defineProperty,
                et = Object.getOwnPropertySymbols,
                tt = Object.prototype.hasOwnProperty,
                at = Object.prototype.propertyIsEnumerable,
                nt = (e, t, a) => t in e ? Qe(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                ot = (e, t) => {
                    for (var a in t || (t = {})) tt.call(t, a) && nt(e, a, t[a]);
                    if (et)
                        for (var a of et(t)) at.call(t, a) && nt(e, a, t[a]);
                    return e
                };
            const rt = (e, t) => {
                    t && (e[t].count = null, e[t].items = [])
                },
                it = e => {
                    for (const t of Object.values(G.K2R)) rt(e, t)
                },
                st = (e, {
                    selection: t,
                    count: a,
                    items: n
                }) => {
                    e[t].count = a, e[t].items = n
                },
                lt = (e, t) => {
                    for (const [a, n] of Object.entries(t)) e.selectionsAvailability[a] = n
                },
                ct = (e, {
                    selection: t,
                    items: a
                }) => {
                    e[t].items.push(...a)
                },
                dt = (e, {
                    item: t,
                    changedFields: a,
                    selection: n
                }) => {
                    const o = [n, G.cgf.RESUME];
                    for (const r of o) {
                        const n = e[r].items.findIndex((e => e.id === t.id));
                        n > -1 && (e[r].items[n] = ot(ot({}, t), a))
                    }
                };
            var ut = Object.defineProperty,
                pt = Object.defineProperties,
                mt = Object.getOwnPropertyDescriptors,
                _t = Object.getOwnPropertySymbols,
                ht = Object.prototype.hasOwnProperty,
                gt = Object.prototype.propertyIsEnumerable,
                yt = (e, t, a) => t in e ? ut(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                vt = (e, t) => {
                    for (var a in t || (t = {})) ht.call(t, a) && yt(e, a, t[a]);
                    if (_t)
                        for (var a of _t(t)) gt.call(t, a) && yt(e, a, t[a]);
                    return e
                },
                bt = (e, t) => pt(e, mt(t));
            const ft = {
                namespaced: !0,
                state: () => bt(vt({}, Object.fromEntries(Object.values(G.K2R).map((e => [e, {
                    count: null,
                    items: []
                }])))), {
                    selectionsAvailability: Object.fromEntries(Object.values(G.K2R).map((e => {
                        var t;
                        const a = null == (t = G.oNc[e]) || t,
                            n = !G.KXK.includes(e) || Boolean(Le.appConfig.modules[e]);
                        return [e, a && n]
                    })))
                }),
                actions: i,
                mutations: s
            };
            var kt = a(495119),
                wt = a(878417),
                St = a(156253),
                Ct = Object.defineProperty,
                It = Object.getOwnPropertySymbols,
                Ot = Object.prototype.hasOwnProperty,
                Tt = Object.prototype.propertyIsEnumerable,
                Pt = (e, t, a) => t in e ? Ct(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                At = (e, t) => {
                    for (var a in t || (t = {})) Ot.call(t, a) && Pt(e, a, t[a]);
                    if (It)
                        for (var a of It(t)) Tt.call(t, a) && Pt(e, a, t[a]);
                    return e
                },
                Lt = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const Bt = (e, t) => Lt(void 0, null, (function*() {
                    e.favouriteLoaded || (yield e.favouritesIdsPromise instanceof Promise ? e.favouritesIdsPromise : t("loadFavouritesIds"))
                })),
                Mt = {
                    namespaced: !0,
                    state: () => ({
                        favouriteLoaded: !1,
                        favouriteMatchCode: "bets-1:match",
                        favouriteTournamentCode: "bets-1:tournament",
                        favouriteCustomCode: "bets:custom",
                        favouritesMap: {},
                        favouritesIdsPromise: null
                    }),
                    getters: {
                        favouritesCountIgnoreTimeFilter(e) {
                            return Object.keys(e.favouritesMap).reduce(((t, a) => t + e.favouritesMap[a].length || 0), 0)
                        },
                        favouritesCount(e, t, a) {
                            return a.xbet.timeFilter ? t.favouriteMatches.length + t.favouriteTournaments.length + t.favouriteCustom.length : Object.keys(e.favouritesMap).reduce(((t, a) => t + e.favouritesMap[a].length || 0), 0)
                        },
                        favouriteTournamentsIds(e) {
                            return e.favouritesMap[e.favouriteTournamentCode] || []
                        },
                        favouriteMatchesIds(e) {
                            return e.favouritesMap[e.favouriteMatchCode] || []
                        },
                        favoriteCustomIds(e) {
                            return e.favouritesMap[e.favouriteCustomCode] || []
                        },
                        isTournamentFavourite(e, t) {
                            return e => t.favouriteTournamentsIds.includes(e)
                        },
                        isMatchFavourite(e, t) {
                            return e => t.favouriteMatchesIds.includes(e)
                        },
                        isCustomFavourite(e, t) {
                            return e => t.favoriteCustomIds.includes(e)
                        },
                        favouriteMatches(e, t, a, n) {
                            const o = [...n["xbet/live/matchList"], ...n["xbet/prematch/matchList"]];
                            return o.filter((e => t.isMatchFavourite(e.id))).filter((e => {
                                const t = a.xbet.timeFilter;
                                if (!t) return !0;
                                if (t.date) return e.date.dateMonth === t.date;
                                const n = new Date,
                                    o = n.setHours(n.getHours() + t.hoursToStart);
                                return e.startDateTime <= o
                            })).sort(((e, t) => (e.startDateTime || Number.MAX_SAFE_INTEGER) - (t.startDateTime || Number.MAX_SAFE_INTEGER)))
                        },
                        favouriteTournaments(e, t, a, n) {
                            const o = Object.values(n["xbet/live/getTournamentMap"]),
                                r = Object.values(n["xbet/prematch/getTournamentMap"]);
                            for (const i of r) o.some((e => e.id === i.id)) || o.push(i);
                            return o.filter((e => t.isTournamentFavourite(e.id)))
                        },
                        favouriteCustom(e, t, a, n) {
                            return n["betsCustom/eventList"].filter((e => t.isCustomFavourite(e.id)))
                        }
                    },
                    mutations: {
                        setFavourites(e, t) {
                            e.favouritesMap = At(At({}, e.favouritesMap), t)
                        },
                        clearFavourites(e) {
                            e.favouritesMap = {}, e.favouriteLoaded = !1, e.favouritesIdsPromise = null
                        },
                        setFavouriteLoaded(e, t) {
                            e.favouriteLoaded = t
                        },
                        setFavouritesIdsPromise(e, t) {
                            e.favouritesIdsPromise = t
                        },
                        toggleFavourite(e, {
                            type: t,
                            id: a
                        }) {
                            var n;
                            const o = null != (n = e.favouritesMap[t]) ? n : [],
                                r = o.includes(a) ? o.filter((e => e !== a)) : [...o, a];
                            e.favouritesMap[t] = r
                        }
                    },
                    actions: {
                        loadFavouritesIds(e) {
                            return Lt(this, arguments, (function*({
                                state: e,
                                commit: t,
                                rootGetters: a
                            }) {
                                if (e.favouriteLoaded) return;
                                const n = (0, St.ZP)({
                                    onResolve: () => t("setFavouritesIdsPromise", null)
                                });
                                t("setFavouritesIdsPromise", n), yield Promise.all([a.promiseByName[kt.l.AUTH], a.promiseByName[kt.l.AUTH_TOKEN]]);
                                const o = (0, wt.L)();
                                if (o.isAuthed) try {
                                    const {
                                        data: n
                                    } = yield a.socket.send("MS-FAVOURITE:favourites-get", {
                                        type: [e.favouriteMatchCode, e.favouriteTournamentCode]
                                    });
                                    t("setFavourites", n), t("setFavouriteLoaded", !0)
                                } catch (r) {
                                    console.error(r)
                                } finally {
                                    n.resolve()
                                } else n.resolve()
                            }))
                        },
                        loadFavouritesMatchesAndTournaments(e) {
                            return Lt(this, arguments, (function*({
                                state: e,
                                getters: t,
                                commit: a,
                                dispatch: n
                            }) {
                                yield Bt(e, n);
                                const o = t.favouriteMatchesIds,
                                    r = yield n("xbet/api/getMatchList", {
                                        matchIds: o
                                    }, {
                                        root: !0
                                    }), i = [...new Set([...t.favouriteTournamentsIds, ...r.map((e => e.tournamentId))])], [s, l] = yield Promise.all([n("xbet/api/getTournamentList", {
                                        service: G.PTO
                                    }, {
                                        root: !0
                                    }), n("xbet/api/getTournamentList", {
                                        tournamentIds: i,
                                        service: G.d_J
                                    }, {
                                        root: !0
                                    })]), c = r.filter((e => e.service === G.PTO)), d = r.filter((e => e.service === G.d_J));
                                a("xbet/live/addMatchList", c, {
                                    root: !0
                                }), a("xbet/prematch/addMatchList", d, {
                                    root: !0
                                }), a("xbet/live/addTournamentList", s, {
                                    root: !0
                                }), a("xbet/prematch/addTournamentList", l, {
                                    root: !0
                                })
                            }))
                        },
                        loadFavoritesCustom(e) {
                            return Lt(this, arguments, (function*({
                                state: e,
                                getters: t,
                                dispatch: a
                            }) {
                                yield Bt(e, a), yield Promise.all([a("betsCustom/loadGroups", null, {
                                    root: !0
                                }), ...t.favoriteCustomIds.map((e => a("betsCustom/loadEvent", e, {
                                    root: !0
                                })))])
                            }))
                        },
                        toggleFavourite(e, t) {
                            return Lt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }, a) {
                                try {
                                    yield t.socket.send("MS-FAVOURITE:favourites-toggle", a), e("toggleFavourite", a)
                                } catch (n) {
                                    console.error(n)
                                }
                            }))
                        }
                    }
                };
            var Et = a(513962),
                Nt = a(76931),
                Dt = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const xt = e => `LEADERBOARDS:${e}`,
                Rt = {
                    namespaced: !0,
                    state: () => ({
                        config: {},
                        leaderboards: {},
                        rating: {},
                        timePeriod: {}
                    }),
                    mutations: {
                        setConfig(e, t) {
                            e.config = t
                        },
                        setLeaderboards(e, t) {
                            e.leaderboards = t
                        },
                        setRating(e, t) {
                            e.rating = t
                        },
                        clearPersonalData(e) {
                            e.rating = {}
                        },
                        setTimePeriod(e, t) {
                            e.timePeriod = t
                        }
                    },
                    getters: {
                        isLeaderboardOffStatsLoaded(e, t, a, n) {
                            return "leaderboard_off" in n.user
                        },
                        leaderboardOff(e, t, a, n) {
                            return Boolean(n.user.leaderboard_off)
                        },
                        isParticipant(e) {
                            return Array.isArray(e.rating.status)
                        },
                        leaderboardsData(e) {
                            return e.leaderboards.groups && e.config ? Object.fromEntries(e.leaderboards.groups.map((({
                                group: t,
                                places: a
                            }) => [Nt.xF[t], a.map((([a, n, o], r) => ({
                                userId: a,
                                nickname: n,
                                scores: o,
                                prize: e.config[t].prizes[r + 1]
                            })))]))) : null
                        },
                        leaderboardTimeRemaining(e) {
                            return e.timePeriod.endDate
                        }
                    },
                    actions: {
                        loadLeaderboardData(e) {
                            return Dt(this, arguments, (function*({
                                dispatch: e
                            }) {
                                yield Promise.all([e("fetchConfig"), e("fetchLeaderboards"), e("fetchTimePeriod"), e("fetchUserRating")])
                            }))
                        },
                        fetchConfig(e) {
                            return Dt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }) {
                                const {
                                    data: a
                                } = yield t.socket.send(xt("leaderboard-config"));
                                e("setConfig", a)
                            }))
                        },
                        fetchLeaderboards(e) {
                            return Dt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }) {
                                const {
                                    data: a
                                } = yield t.socket.send(xt("leaderboard-all"));
                                e("setLeaderboards", a)
                            }))
                        },
                        fetchUserRating(e) {
                            return Dt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }) {
                                const {
                                    data: a
                                } = yield t.socket.send(xt("leaderboard-me"));
                                e("setRating", a)
                            }))
                        },
                        refreshLeaderboardOffIfNeeded(e) {
                            return Dt(this, arguments, (function*({
                                getters: e,
                                dispatch: t
                            }) {
                                const a = (0, wt.L)();
                                a.isAuthed && !e.isLeaderboardOffStatsLoaded && (yield t("updateMeta", null, {
                                    root: !0
                                }))
                            }))
                        },
                        setLeaderboardOff(e, t) {
                            return Dt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }, a) {
                                yield t.socket.send("USER:profile-leaderboard", {
                                    off: a
                                }), e("userProfile", {
                                    leaderboard_off: a
                                }, {
                                    root: !0
                                })
                            }))
                        },
                        participate(e) {
                            return Dt(this, arguments, (function*({
                                dispatch: e,
                                rootGetters: t
                            }) {
                                yield t.socket.send(xt("leaderboard-participate")), yield e("fetchUserRating")
                            }))
                        },
                        fetchTimePeriod(e) {
                            return Dt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }) {
                                const {
                                    data: a
                                } = yield t.socket.send(xt("leaderboard-dates"));
                                e("setTimePeriod", a)
                            }))
                        }
                    }
                };
            var jt = a(381711),
                Ft = a(153415),
                $t = Object.defineProperty,
                zt = Object.defineProperties,
                Ut = Object.getOwnPropertyDescriptors,
                Zt = Object.getOwnPropertySymbols,
                Gt = Object.prototype.hasOwnProperty,
                Ht = Object.prototype.propertyIsEnumerable,
                qt = (e, t, a) => t in e ? $t(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                Vt = (e, t) => {
                    for (var a in t || (t = {})) Gt.call(t, a) && qt(e, a, t[a]);
                    if (Zt)
                        for (var a of Zt(t)) Ht.call(t, a) && qt(e, a, t[a]);
                    return e
                },
                Wt = (e, t) => zt(e, Ut(t)),
                Yt = (e, t) => {
                    var a = {};
                    for (var n in e) Gt.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                    if (null != e && Zt)
                        for (var n of Zt(e)) t.indexOf(n) < 0 && Ht.call(e, n) && (a[n] = e[n]);
                    return a
                };
            const Kt = e => {
                var t = e,
                    {
                        min_points: a
                    } = t,
                    n = Yt(t, ["min_points"]);
                return Wt(Vt({}, n), {
                    minPoints: a
                })
            };
            var Jt = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const Xt = e => `LOYALITY:${e}`,
                Qt = {
                    namespaced: !0,
                    state: () => ({
                        points: null,
                        exchangeInfo: null
                    }),
                    mutations: {
                        setPoints(e, t) {
                            e.points = t
                        },
                        setExchangeInfo(e, t) {
                            e.exchangeInfo = t.map((e => Kt(e)))
                        }
                    },
                    actions: {
                        getPoints(e) {
                            return Jt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }) {
                                const {
                                    data: {
                                        points: a
                                    }
                                } = yield t.socket.send(Xt("balance"));
                                e("setPoints", a)
                            }))
                        },
                        getExchangeInfo(e) {
                            return Jt(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }) {
                                const {
                                    data: a
                                } = yield t.socket.send(Xt("exchange-info"));
                                e("setExchangeInfo", a)
                            }))
                        },
                        withdraw(e, t) {
                            return Jt(this, arguments, (function*({
                                rootGetters: e,
                                dispatch: t
                            }, {
                                points: a,
                                currency: n
                            }) {
                                yield e.socket.send(Xt("balance-withdraw"), {
                                    points: a,
                                    currency: n
                                }), t("getPoints"), t("requestBalance", null, {
                                    root: !0
                                })
                            }))
                        }
                    },
                    getters: {
                        currentExchangeInfo(e, t, a) {
                            var n, o;
                            const r = (0, Ft.oS)(null == (n = a.user) ? void 0 : n.currency) ? jt.NE.USD : null == (o = a.user) ? void 0 : o.currency;
                            if (r && e.exchangeInfo) return e.exchangeInfo.find((({
                                currency: e
                            }) => r === e))
                        }
                    }
                };
            var ea = a(754084),
                ta = a(634030),
                aa = a(228513),
                na = a(95575),
                oa = Object.defineProperty,
                ra = Object.getOwnPropertySymbols,
                ia = Object.prototype.hasOwnProperty,
                sa = Object.prototype.propertyIsEnumerable,
                la = (e, t, a) => t in e ? oa(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                ca = (e, t) => {
                    for (var a in t || (t = {})) ia.call(t, a) && la(e, a, t[a]);
                    if (ra)
                        for (var a of ra(t)) sa.call(t, a) && la(e, a, t[a]);
                    return e
                },
                da = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const ua = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e
                }, t) {
                    return e.socket.send((0, C.YT)("withdrawal-create"), t).then((({
                        data: e
                    }) => e))
                })),
                pa = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e
                }, t) {
                    return e.socket.send((0, C.YT)("withdrawal-confirm"), t)
                })),
                ma = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e
                }, t) {
                    return e.socket.send((0, C.qc)("deposit-create"), t).then((({
                        data: e
                    }) => e))
                })),
                _a = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e,
                    commit: t
                }, {
                    currency: a,
                    country: n,
                    pendingGroup: o,
                    language: r,
                    abTestGroup: i
                }) {
                    t("setPaymentMethodMap", {});
                    const s = ca({
                            currency: a,
                            country: n,
                            abTestGroup: i,
                            language: r
                        }, o ? {
                            pending_group: o
                        } : {}),
                        l = (0, C.MP)("methods-payment-v3");
                    return e.socket.send(l, s).then((({
                        data: e
                    }) => {
                        const {
                            v: a,
                            methods: n
                        } = e;
                        return t("setDepositBankingVersion", a), a ? n : e
                    })).then((e => {
                        var a, n, o, r, i;
                        const s = ca({}, e);
                        for (const t of Object.values(s)) {
                            const e = null == (a = t.iconIds) ? void 0 : a.find((e => "icon_id_light" === e.type));
                            e ? t.s3GatewayObjectId = e.iconId : (null == (o = null == (n = t.icons) ? void 0 : n[0]) ? void 0 : o.imageId) && (t.s3GatewayObjectId = null == (i = null == (r = t.icons) ? void 0 : r[0]) ? void 0 : i.imageId)
                        }
                        t("setPaymentMethodMap", s)
                    }))
                })),
                ha = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e,
                    commit: t
                }, {
                    currency: a,
                    country: n,
                    pendingGroup: o
                }) {
                    t("setWithdrawalMethodMap", {});
                    const r = ca({
                        currency: a,
                        country: n
                    }, o ? {
                        pending_group: o
                    } : {});
                    return e.socket.send((0, C.YT)("methods-withdrawal"), r).then((({
                        data: e
                    }) => {
                        const {
                            v: a,
                            methods: n
                        } = e;
                        return t("setWithdrawalBankingVersion", a), a ? n : e
                    })).then((e => {
                        const a = ca({}, e);
                        t("setWithdrawalMethodMap", a)
                    }))
                })),
                ga = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e
                }, {
                    currency: t,
                    country: a
                }) {
                    return e.socket.send((0, C.qc)("userdata-payment-snippet"), {
                        currency: t,
                        country: a
                    }).then((({
                        data: e
                    }) => e))
                })),
                ya = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e
                }, t) {
                    return e.socket.send((0, C.YT)("withdrawal-prepare"), t)
                })),
                va = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e
                }, t) {
                    return e.socket.send((0, C.YT)("deposit-prepare"), {
                        paymentMethod: t
                    })
                })),
                ba = (e, t) => da(void 0, [e, t], (function*({
                    rootGetters: e
                }, t) {
                    return e.socket.send((0, C.qc)("bank-get"), t)
                })),
                fa = e => da(void 0, [e], (function*({
                    rootGetters: e,
                    commit: t,
                    getters: a
                }) {
                    if (a.moneyCountries.length > 0) return;
                    const {
                        data: n
                    } = yield e.socket.send((0, C.qc)("methods-country-selector"));
                    t("setMoneyCountries", n)
                })),
                ka = (...e) => t => 1 === e.length ? e[0](t) : ka(...e.slice(1))(e.shift()(t)),
                wa = e => t => t.map((t => e(t)));
            var Sa = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const Ca = e => ka(Object.entries, wa((([e, t]) => ({
                    [e]: void 0 === t.position ? 1e5 : t.position
                }))), (e => Object.assign(...e)))(e),
                Ia = e => e.paymentMethodMap,
                Oa = (e, t) => {
                    const a = t.paymentMethodMap;
                    if (0 === Object.entries(a).length) return [];
                    const n = Ca(a);
                    return Object.values(a).sort(((e, t) => n[e.name] - n[t.name]))
                },
                Ta = e => e.withdrawalMethodMap || {},
                Pa = (e, t) => {
                    const a = t.withdrawalMethodMap;
                    if (0 === Object.entries(a).length) return [];
                    const n = Ca(a);
                    return Object.values(a).sort(((e, t) => n[e.name] - n[t.name]))
                },
                Aa = (e, t, n, o) => (e, t = 3) => Sa(void 0, null, (function*() {
                    if (!G.BOt.includes(e)) throw new Error(`instruction for "${e}" not supported`);
                    const n = Array.from({
                            length: t
                        }, ((e, t) => t + 1)),
                        r = t => a(423336)(`./${e}/${t}.png`).then((e => e.default)),
                        i = o.langCommon.paymentInstruction[e],
                        s = yield Promise.all(n.map((e => r(e)))), l = e => {
                            const {
                                title: t,
                                description: a
                            } = i[`step${e}`], {
                                src: n,
                                height: o,
                                width: r
                            } = s[e - 1];
                            return {
                                title: t,
                                description: a,
                                image: {
                                    src: n,
                                    height: o,
                                    width: r
                                }
                            }
                        };
                    return {
                        url: G.hTN[e],
                        urlText: i.linkButton,
                        name: i.name,
                        steps: n.map((e => l(e)))
                    }
                })),
                La = e => e.moneyCountry,
                Ba = e => e.moneyCountries,
                Ma = e => e.isDirectGeo,
                Ea = e => e.depositBankingVersion,
                Na = e => e.withdrawalBankingVersion;
            var Da = a(470781);
            const xa = (e, t) => {
                    for (const n of Object.values(t))(0, Da.q_)(n, ["regex_text", "text", "placeholder_text"]);
                    const a = {};
                    for (const n of Object.keys(t))
                        if (t[n].ios_only || (a[n] = t[n]), t[n].ios_only) {
                            const e = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
                            e && (a[n] = t[n])
                        }
                    e.isDirectGeo = t.isDirectGeo, e.paymentMethodMap = a
                },
                Ra = (e, t) => {
                    for (const a of Object.values(t))(0, Da.q_)(a, ["regex_text", "text", "placeholder_text"]);
                    e.withdrawalMethodMap = t
                },
                ja = (e, t) => {
                    e.moneyCountry = t
                },
                Fa = (e, t) => {
                    e.moneyCountries = t
                },
                $a = (e, t) => {
                    e.depositBankingVersion = t
                },
                za = (e, t) => {
                    e.withdrawalBankingVersion = t
                },
                Ua = {
                    state: () => ({
                        paymentMethodMap: {},
                        withdrawalMethodMap: {},
                        moneyCountry: void 0,
                        moneyCountries: [],
                        isDirectGeo: !1,
                        depositBankingVersion: void 0,
                        withdrawalBankingVersion: void 0
                    }),
                    getters: c,
                    mutations: d,
                    actions: l
                },
                Za = Ua;
            var Ga = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const Ha = (e, t) => Ga(void 0, [e, t], (function*({
                    rootGetters: e,
                    commit: t
                }, a) {
                    try {
                        const {
                            data: n
                        } = yield e.socket.send(`MS-SMALL-THINGS:offer-${a}`);
                        t("set", {
                            id: a,
                            data: n
                        })
                    } catch (n) {}
                })),
                qa = e => t => {
                    var a;
                    return null != (a = e[t]) ? a : {
                        is_active: 0
                    }
                },
                Va = (e, {
                    id: t,
                    data: a
                }) => {
                    a.is_active = Number.parseInt(a.is_active, 10), e[t] = a
                },
                Wa = {
                    namespaced: !0,
                    state: () => ({}),
                    actions: u,
                    getters: p,
                    mutations: m
                };
            var Ya = Object.defineProperty,
                Ka = Object.defineProperties,
                Ja = Object.getOwnPropertyDescriptors,
                Xa = Object.getOwnPropertySymbols,
                Qa = Object.prototype.hasOwnProperty,
                en = Object.prototype.propertyIsEnumerable,
                tn = (e, t, a) => t in e ? Ya(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                an = (e, t) => {
                    for (var a in t || (t = {})) Qa.call(t, a) && tn(e, a, t[a]);
                    if (Xa)
                        for (var a of Xa(t)) en.call(t, a) && tn(e, a, t[a]);
                    return e
                },
                nn = (e, t) => Ka(e, Ja(t)),
                on = (e, t) => {
                    var a = {};
                    for (var n in e) Qa.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                    if (null != e && Xa)
                        for (var n of Xa(e)) t.indexOf(n) < 0 && en.call(e, n) && (a[n] = e[n]);
                    return a
                },
                rn = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));

            function sn(e) {
                return 60 * e * 1e3
            }

            function ln(e) {
                const {
                    card: t,
                    created: a,
                    depositId: n,
                    fields: o,
                    error: r,
                    exists: i,
                    isFieldsRequired: s,
                    passedAmount: l,
                    passedCurrency: c,
                    payment_amount: d,
                    payment_currency: u,
                    timeout_minutes: p,
                    isBankLogoHidden: m,
                    unifiedFlow: _,
                    instruction: h,
                    processingAmount: g,
                    processingCurrency: y,
                    requisites: v,
                    inputFields: b,
                    buttons: f,
                    lifetime: k
                } = e;
                return {
                    card: nn(an({}, t), {
                        paymentAmount: d,
                        paymentCurrency: u,
                        passedAmount: l,
                        passedCurrency: c
                    }),
                    created: new Date(a).getTime(),
                    depositId: n,
                    fields: o,
                    error: r,
                    exists: i,
                    isFieldsRequired: s,
                    isBankLogoHidden: m,
                    lifetime: null != k ? k : sn(p),
                    unifiedFlow: _,
                    instruction: h,
                    processingAmount: g,
                    processingCurrency: y,
                    requisites: v,
                    inputFields: b,
                    buttons: f
                }
            }
            const cn = {
                    namespaced: !0,
                    actions: {
                        checkDeposit(e, t) {
                            return rn(this, arguments, (function*({
                                rootGetters: {
                                    socket: e
                                }
                            }, t) {
                                const {
                                    data: a
                                } = yield e.send((0, C.qc)("deposit-check"), t), n = ln(a), {
                                    exists: o
                                } = n, r = on(n, ["exists"]);
                                return o ? an({
                                    exists: o
                                }, r) : {
                                    exists: o
                                }
                            }))
                        },
                        depositCreate(e, t) {
                            return rn(this, arguments, (function*({
                                rootGetters: {
                                    socket: e
                                }
                            }, t) {
                                const {
                                    data: a
                                } = yield e.send((0, C.qc)("deposit-create-p2p"), t);
                                return ln(a)
                            }))
                        },
                        depositLeave(e, t) {
                            return rn(this, arguments, (function*({
                                rootGetters: {
                                    socket: e
                                }
                            }, t) {
                                const {
                                    data: a
                                } = yield e.send((0, C.YT)("session-form-on-close-modal"), t);
                                return ln(a)
                            }))
                        },
                        depositCancel(e, t) {
                            return rn(this, arguments, (function*({
                                rootGetters: {
                                    socket: e
                                }
                            }, t) {
                                const {
                                    data: {
                                        cancelled: a
                                    }
                                } = yield e.send((0, C.qc)("deposit-cancel"), t);
                                return a
                            }))
                        },
                        depositStatus(e, t) {
                            return rn(this, arguments, (function*({
                                rootGetters: {
                                    socket: e
                                }
                            }, t) {
                                const {
                                    data: {
                                        status: a
                                    }
                                } = yield e.send((0, C.qc)("deposit-status"), t);
                                return a
                            }))
                        },
                        complete(e, t) {
                            return rn(this, arguments, (function*({
                                rootGetters: {
                                    socket: e
                                }
                            }, t) {
                                const {
                                    data: a
                                } = yield e.send((0, C.YT)("deposit-complete"), t);
                                return a
                            }))
                        }
                    }
                },
                dn = {
                    namespaced: !0,
                    getters: {
                        isTester(e, t, a, n) {
                            var o, r, i, s, l;
                            return (null == (r = null == (o = n.user) ? void 0 : o.games) ? void 0 : r[G.yFi]) || (null == (s = null == (i = n.user) ? void 0 : i.games) ? void 0 : s[G.CX9]) || (null == (l = n.user) ? void 0 : l[G.ghU])
                        },
                        isWithdrawalAllowed(e, t, a, n) {
                            return !n.user[G.$N2]
                        }
                    }
                };
            var un = a(682736);
            const pn = {
                namespaced: !0,
                state: () => ({
                    activeItem: Le.appConfig.options.defaultRegistration,
                    list: Le.appConfig.options.registrations
                }),
                mutations: {
                    setActiveItem(e, t) {
                        e.list.includes(t) && (e.activeItem = t)
                    }
                },
                actions: {
                    setActiveItem({
                        getters: e,
                        commit: t
                    }, a) {
                        e.filteredList.includes(a) && t("setActiveItem", a)
                    }
                },
                getters: {
                    filteredList(e, t, a, n) {
                        return e.list.filter((e => !(e === un.d_ && n.currentLang !== G.AOg)))
                    },
                    desktopTabsDictionary(e, t, a, n) {
                        const o = n.langDesktop.registration.modal;
                        return {
                            [un.AE]: {
                                id: un.AE,
                                text: o.type_one_click,
                                form: "FormShort",
                                icon: "rocket"
                            },
                            [un.d_]: {
                                id: un.d_,
                                text: o.type_phone,
                                form: "FormPhone",
                                icon: "phone"
                            },
                            [un.wg]: {
                                id: un.wg,
                                text: o.type_social,
                                form: "FormSocial",
                                icon: "comment-social"
                            },
                            [un.j0]: {
                                id: un.j0,
                                text: o.type_quick,
                                form: "FormFull",
                                icon: "envelope"
                            },
                            [un.oG]: {
                                id: un.oG,
                                text: "KZ",
                                form: "FormKZ"
                            }
                        }
                    },
                    desktopTabs(e, t) {
                        return t.filteredList.map((e => t.desktopTabsDictionary[e]))
                    },
                    desktopActiveTab(e, t) {
                        return t.desktopTabsDictionary[e.activeItem]
                    },
                    mobileTabsDictionary(e, t, a, n) {
                        var o;
                        const r = null != (o = n.lang["registration-modal"]) ? o : {};
                        return {
                            [un.AE]: {
                                id: un.AE,
                                text: r.oneClick
                            },
                            [un.d_]: {
                                id: un.d_,
                                text: r.phone
                            },
                            [un.wg]: {
                                id: un.wg,
                                text: r.social
                            },
                            [un.j0]: {
                                id: un.j0,
                                text: r.quick
                            },
                            [un.oG]: {
                                id: un.oG,
                                text: "KZ"
                            }
                        }
                    },
                    mobileTabs(e, t) {
                        return t.filteredList.map((e => t.mobileTabsDictionary[e]))
                    },
                    mobileActiveTab(e, t) {
                        return t.mobileTabsDictionary[e.activeItem]
                    }
                }
            };
            var mn = a(934405),
                _n = a(479810),
                hn = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const gn = e => {
                    if ((0, mn.kJ)(e))
                        for (const t of e) gn(t);
                    else e.content && (e.content = e.content.replace(/(style|class)="[^"]+"/gim, "").replace(/<(p|h[1-6])\s*>\s*(&nbsp;|<span\s*>\s*&nbsp;\s*<\/span>|<br>)\s*<\/(p|h[1-6])>/gim, ""));
                    return e
                },
                yn = (e, t = "all") => hn(void 0, null, (function*() {
                    const a = "";
                    try {
                        const n = "all" === t ? "/compact" : "";
                        return yield _n.steadyApiClient.get(`/common/api/v1/rules${n}/${t}/${e}${a}`).then((e => gn(e.data)))
                    } catch (n) {
                        return e === G.hnV ? null : yn(G.hnV, t)
                    }
                })),
                vn = e => hn(void 0, [e], (function*({
                    commit: e,
                    rootGetters: t,
                    state: a
                }) {
                    if (a.isLoaded) return;
                    const n = yield yn(t.currentLangBcp47);
                    null != n && e("setDataList", n)
                })),
                bn = (e, t) => hn(void 0, [e, t], (function*({
                    commit: e,
                    rootGetters: t
                }, a) {
                    const n = yield yn(t.currentLangBcp47, a);
                    null != n && (n.id = a, e("setDetails", n))
                })),
                fn = e => e.dataList.sort(((e, t) => e.position - t.position)),
                kn = (e, t) => t.dataList.filter((e => "primary" === e.type)),
                wn = (e, t) => t.dataList.filter((e => "secondary" === e.type)),
                Sn = (e, t) => t.dataList.filter((e => "leaderboard" === e.type)),
                Cn = (e, t) => t.dataList.filter((e => "faq" === e.type)),
                In = (e, t = []) => {
                    for (const a of e.dataList) {
                        const e = t.findIndex((e => +e.id === +a.id)); - 1 !== e && (t[e] = a)
                    }
                    e.dataList = t, e.isLoaded = !0
                },
                On = (e, t) => {
                    if (!t) return;
                    const a = e.dataList.findIndex((e => Number(e.id) === Number(t.id))); - 1 === a ? e.dataList.push(t) : e.dataList.splice(a, 1, t)
                },
                Tn = () => ({
                    dataList: [],
                    isLoaded: !1
                }),
                Pn = {
                    namespaced: !0,
                    state: Tn,
                    getters: h,
                    mutations: g,
                    actions: _
                };
            var An = a(602262),
                Ln = a(517563),
                Bn = a(588867),
                Mn = a(384754),
                En = a(884297),
                Nn = a(735037),
                Dn = a(373817),
                xn = a(779547),
                Rn = a(567476),
                jn = a(920346);
            const Fn = (0, Rn.Q_)("popupDetails", (() => {
                const {
                    open: e
                } = (0, jn.lm)(), t = t => {
                    e(t)
                };
                return {
                    showPopupDetailsNotification: t
                }
            }));
            var $n = a(909997);

            function zn() {
                const e = {};
                return {
                    off(t, a) {
                        var n, o;
                        e[t] = null != (o = null == (n = e[t]) ? void 0 : n.filter((e => e !== a))) ? o : []
                    },
                    on(t, a) {
                        var n;
                        return e[t] || (e[t] = []), null == (n = e[t]) || n.push(a), () => {
                            this.off(t, a)
                        }
                    },
                    emit(t, a) {
                        var n;
                        for (const o of null != (n = e[t]) ? n : []) o(a)
                    }
                }
            }
            var Un = a(377823),
                Zn = a(329666),
                Gn = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));

            function Hn(e) {
                return Gn(this, null, (function*() {
                    const t = new DecompressionStream("gzip"),
                        a = e.stream().pipeThrough(t),
                        n = yield new Response(a).blob();
                    return n
                }))
            }

            function qn() {
                return "DecompressionStream" in window
            }
            var Vn, Wn, Yn, Kn, Jn = Object.defineProperty,
                Xn = Object.defineProperties,
                Qn = Object.getOwnPropertyDescriptors,
                eo = Object.getOwnPropertySymbols,
                to = Object.prototype.hasOwnProperty,
                ao = Object.prototype.propertyIsEnumerable,
                no = (e, t, a) => t in e ? Jn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                oo = (e, t) => {
                    for (var a in t || (t = {})) to.call(t, a) && no(e, a, t[a]);
                    if (eo)
                        for (var a of eo(t)) ao.call(t, a) && no(e, a, t[a]);
                    return e
                },
                ro = (e, t) => Xn(e, Qn(t)),
                io = (e, t, a) => {
                    if (!t.has(e)) throw TypeError("Cannot " + a)
                },
                so = (e, t, a) => (io(e, t, "read from private field"), a ? a.call(e) : t.get(e)),
                lo = (e, t, a) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, a)
                },
                co = (e, t, a, n) => (io(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a),
                uo = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const po = {
                    "MATCH-STORAGE-3:sport-all": "MATCH-STORAGE-3:sport-all",
                    "MATCH-STORAGE-3:sport-categories": "MATCH-STORAGE-3:sport-categories",
                    "MATCH-STORAGE-3:sport-tournaments": "MATCH-STORAGE-3:sport-tournaments",
                    "MATCH-STORAGE-3:tournament-matches": "MATCH-STORAGE-3:tournament-matches",
                    "MATCH-STORAGE-3:category-tournaments": "MATCH-STORAGE-3:category-tournaments",
                    "MATCH-STORAGE-3:match-odds": "MATCH-STORAGE-3:match-odds",
                    "RESULT:results-all": "RESULT:results-all",
                    "USERS-REGISTRATION-LANDINGS:exchange-vip-status": "USERS-REGISTRATION-LANDINGS:exchange-vip-status"
                },
                mo = Object.freeze({
                    MAIN: 1,
                    PUSH: 2
                }),
                _o = {
                    origins: "*",
                    timeout: 1e4,
                    transports: ["websocket"],
                    forceNew: !0,
                    reconnection: !1,
                    withCredentials: !0
                },
                ho = e => {
                    var t;
                    if (e === mo.PUSH) return [() => "https://ps.top-parser.com"];
                    const a = "",
                        n = [];
                    return (null == (t = window.INITIAL_DATA) ? void 0 : t.coreServerHost) && n.push((() => window.INITIAL_DATA.coreServerHost)), n.push((() => "https://cf.1win.direct")), n.push((() => a)), Mn.Rb || n.push((() => uo(void 0, null, (function*() {
                        const e = yield(0, $n.dF)();
                        return null != e ? e : a
                    })))), n
                },
                go = e => {
                    const t = ho(e),
                        a = 1,
                        n = 5e3,
                        o = 1e3,
                        r = 1e3,
                        i = 6e4;
                    let s = !0,
                        l = Date.now(),
                        c = 0,
                        d = 0,
                        u = null;
                    return (e = !0) => uo(void 0, null, (function*() {
                        if (!e && u) return u;
                        let p, m;
                        u = (0, St.ZP)(), Date.now() - l > i ? (s = !0, p = 0, m = 1) : d >= a ? (p = c + 1 < t.length ? c + 1 : 0, m = 1) : (p = c, m = d + 1);
                        const _ = p !== c,
                            h = p === t.length - 1 && m === a;
                        let g;
                        return h && (s = !1), g = s ? 0 : h ? n : _ ? r : o, l = Date.now(), c = p, d = m, u.resolve({
                            url: yield t[p](), delayBeforeNextReconnect: g
                        }), u
                    }))
                },
                yo = e => {
                    try {
                        return e.io.engine.transport.ws
                    } catch (t) {
                        return void console.error(t)
                    }
                },
                vo = e => uo(void 0, null, (function*() {
                    if (qn()) try {
                        const t = new Blob([e]),
                            a = yield Hn(t), n = yield a.text();
                        return JSON.parse(n)
                    } catch (t) {
                        return void console.error(t)
                    }
                })),
                bo = class e {
                    constructor({
                        cacheTime: e = Date.now(),
                        commit: t,
                        dispatch: a,
                        getters: n,
                        rootGetters: o,
                        Vue: r,
                        communicationType: i
                    } = {}) {
                        lo(this, Vn, go(mo.MAIN)), lo(this, Wn, go(mo.PUSH)), lo(this, Yn, !1), lo(this, Kn, void 0), this.hash = Date.now() + Math.floor(100 * Math.random()), this.commit = t, this.getters = n, this.rootGetters = o, this.dispatch = a, this.requestMap = {}, this.cacheTime = e, this.cachesData = [], this.cancelTokens = {}, this.vue = r, this.communicationType = i, this.lastPushServerTs = void 0, this.lastPushServerTransformTs = void 0, co(this, Kn, zn()), window.socket = this
                    }
                    disconnectSportsPush() {
                        this.dispatch("socketPushConnected", !1), co(this, Yn, !1), this.socketPush.disconnect(), this.socketPush = void 0
                    }
                    connectToSportsPush() {
                        return uo(this, null, (function*() {
                            if (co(this, Yn, !0), !Le.appConfig.modules.bets || this.communicationType === G.BJ8.DEPOSIT) return;
                            if (this.rootGetters.connectedPushServer) return;
                            const {
                                url: e,
                                delayBeforeNextReconnect: t
                            } = yield so(this, Wn).call(this), a = ro(oo({}, _o), {
                                path: "/push-server-v2",
                                query: {
                                    Language: this.rootGetters.currentLang,
                                    snapshot_time: this.cacheTime,
                                    shouldCompress: !0,
                                    updateType: "object"
                                }
                            });
                            this.socketPush = (0, Bn.ZP)(e, a);
                            const n = yo(this.socketPush);
                            n instanceof WebSocket && n.addEventListener("message", (e => uo(this, null, (function*() {
                                if (e.data instanceof ArrayBuffer) {
                                    const t = yield vo(e.data);
                                    "object" === typeof t && "match-snapshot" === t.type && this.dispatch("xbet/matchSnapshot", t)
                                }
                            })))), this.socketPush.on("connect", (() => {
                                console.socket(`Push socket, connected to ${e}`), this.dispatch("socketPushConnected", !0)
                            }));
                            let o = !1;
                            const r = () => {
                                o || (console.socket("Push socket is reconnecting"), o = !0, setTimeout((() => this.connectToSportsPush()), t))
                            };
                            this.socketPush.on("connect_error", (e => {
                                so(this, Yn) && (console.critical("Push socket failed to connect, reconnecting", e.message), r())
                            })), this.socketPush.on("disconnect", (() => {
                                so(this, Yn) && (this.dispatch("socketPushConnected", !1), this.isForceDisconnecting || (console.critical("Push socket disconnected, reconnecting"), r()))
                            })), this.socketPush.on("a", (e => {
                                const t = "string" === typeof e ? JSON.parse(e) : e;
                                this.cacheTime = Date.now(), t.timestamp && (this.lastPushServerTs = t.timestamp), t.transformTs && (this.lastPushServerTransformTs = t.transformTs), this.dispatch("xbet/update", t)
                            })), this.socketPush.request = (e, t = {}) => new Promise((a => {
                                const n = {
                                    subscriptions: t
                                };
                                this.socketPush.send(e, n, (e => {
                                    a(JSON.parse(null != e ? e : "{}"))
                                }))
                            })), this.socketPush.send = (e, t, a = (() => {})) => {
                                this.socketPush.emit(e, t, a)
                            }
                        }))
                    }
                    connect() {
                        return uo(this, null, (function*() {
                            const {
                                authToken: e
                            } = (0, wt.L)();
                            if (this.rootGetters.connected) return;
                            const {
                                url: t,
                                delayBeforeNextReconnect: a
                            } = yield so(this, Vn).call(this), n = En.J_.get(En.ir), o = ro(oo({}, _o), {
                                path: Le.appConfig.server.path,
                                query: oo({
                                    Language: this.rootGetters.currentLang,
                                    xorigin: Le.appConfig.domain
                                }, n ? {
                                    platform: n
                                } : {})
                            });
                            En.J_.get(En.RF) && (o.query.clientVersion = En.J_.get(En.RF)), yield this.rootGetters.promiseByName[kt.l.AUTH_TOKEN], e && (o.query.Authorization = e.trim()), o.query = oo(oo({}, o.query), (0, Zn.O)()), o.query = Ln.stringify(o.query, {
                                strict: !1
                            }), this.socket = (0, Bn.ZP)(t, o), $n.L_.handleSocketConnectionAttemptEvent({
                                target_origin: t,
                                lang: this.rootGetters.currentLang
                            });
                            let r = !1;
                            const i = () => {
                                r || (console.socket("Main socket is reconnecting"), r = !0, setTimeout((() => this.connect()), a))
                            };
                            this.socket.on("connect", (() => {
                                console.socket(`Main socket, connected to ${t}`), $n.L_.handleSocketConnectedEvent({
                                    target_origin: t,
                                    lang: this.rootGetters.currentLang
                                }), this.dispatch("socketConnected", !0)
                            })), this.socket.on("connect_error", (e => {
                                console.critical(`Main socket failed to connect to url ${t}, reconnecting`, e.message), $n.L_.handleSocketErrorEvent({
                                    target_origin: t,
                                    error_message: e.message,
                                    lang: this.rootGetters.currentLang
                                }), i()
                            })), this.socket.on("disconnect", (() => {
                                this.dispatch("socketConnected", !1), $n.L_.handleSocketDisconnectedEvent({
                                    target_origin: t,
                                    lang: this.rootGetters.currentLang
                                });
                                const e = Object.values(this.requestMap).filter((e => e.type === (0, C.ON)("auth-login-session")));
                                for (const t of e) t.resolve();
                                this.isForceDisconnecting || (console.critical("Main socket disconnected, reconnecting"), i())
                            })), this.socket.on("system", (e => {
                                console.socket("SOCKET SYSTEM EVENT", e)
                            })), this.socket.on("a", this.handleResponse.bind(this)), this.socket.on("current_node", (({
                                cl: e
                            }) => console.warn(`------------ Current node is: ${e}`)))
                        }))
                    }
                    startConnect() {
                        return uo(this, null, (function*() {
                            return this.connect()
                        }))
                    }
                    handleResponse(t) {
                        var a, n;
                        if (t.msgid) {
                            const a = this.requestMap[t.msgid],
                                n = ((Date.now() - a.sendTime) / 1e3).toFixed(2);
                            console.socket(`<<< ${n}s length:${`${t.data}`.length}`, a.type, a, t), t.needParse && t.data && (t.data = JSON.parse(t.data));
                            try {
                                a.resolve(e.responseUpdate(t))
                            } catch (o) {
                                a.reject(o)
                            } finally {
                                delete this.requestMap[t.msgid]
                            }
                        } else {
                            if (console.socket("Server push!", this.hash, t.type, t), this.communicationType === G.BJ8.DEPOSIT && !["country", "login.token"].includes(t.type)) return;
                            switch (so(this, Kn).emit(t.type, t.data), t.type) {
                                case "login.token":
                                    {
                                        (0, Un.Wi)("login.token");
                                        const e = !1 !== t.data;e ? (this.commit("userProfile", t.data), this.dispatch("requestBalance"), this.communicationType === G.BJ8.COMMON && this.dispatch("favourites/loadFavouritesIds", null, {
                                            root: !0
                                        })) : this.commit("userProfile", t.data);
                                        const {
                                            setIsAuthed: a,
                                            setAuthTokenAndResolve: n
                                        } = (0, wt.L)();a(e),
                                        this.commit("resolvePromiseByName", kt.l.AUTH, {
                                            root: !0
                                        }),
                                        e || n(void 0);
                                        break
                                    }
                                case "balance:update:v2":
                                    {
                                        const {
                                            amount: e,
                                            currency: a,
                                            timestamp: n
                                        } = t;this.commit("setBalanceForCurrency", {
                                            amount: Number(e),
                                            currency: a,
                                            timestamp: n
                                        });
                                        break
                                    }
                                case "meta:update":
                                    this.commit("userProfile", t.data);
                                    break;
                                case "country":
                                    {
                                        const e = null != (a = window.testManager.geo.country.get()) ? a : t.data;this.commit("setCountry", e),
                                        this.commit("resolvePromiseByName", kt.l.COUNTRY),
                                        setTimeout((() => {
                                            this.commit("resolvePromiseByName", kt.l.COUNTRY_SUBDIVISION)
                                        }), 1e3);
                                        break
                                    }
                                case "country_subdivision":
                                    {
                                        const e = null != (n = window.testManager.geo.countrySubdivision.get()) ? n : t.data;this.commit("setCountrySubdivision", e),
                                        this.commit("resolvePromiseByName", kt.l.COUNTRY_SUBDIVISION);
                                        break
                                    }
                                case "ip":
                                    this.commit("setIp", t.data);
                                    break;
                                case "cases-stats":
                                    break;
                                case "update_auth_token":
                                    {
                                        const {
                                            token: e
                                        } = t.data;
                                        if (!e) break;
                                        (() => {
                                            uo(this, null, (function*() {
                                                const {
                                                    setAuthTokenAndResolve: t
                                                } = (0, wt.L)();
                                                t(e), this.commit("userProfile", {
                                                    token: e
                                                })
                                            }))
                                        })();
                                        break
                                    }
                                case "bonus-balance":
                                    break;
                                case "bonus-freespin":
                                    break;
                                case "tg-bonus":
                                    {
                                        const e = (0, Dn.R)();e.handleTgBonusPush(t.data);
                                        break
                                    }
                                case "casino-jackpot":
                                case "license_allowed":
                                case "sportdata:update":
                                case "domain_content_type":
                                case "domain_meta":
                                    break;
                                case "kyc:status-update":
                                    {
                                        const e = (0, xn.N)();e.setNativeKycData(t.data),
                                        $n.L_.handleKycVerificationEvent("kyc_update", {
                                            form_status: e.formStatus
                                        });
                                        break
                                    }
                                case "deposit.status":
                                    {
                                        const {
                                            setDepositStatusData: e
                                        } = (0, Nn.E)();e(t.data);
                                        break
                                    }
                                case "popup.details":
                                    {
                                        const {
                                            showPopupDetailsNotification: e
                                        } = Fn();e(t.data.text);
                                        break
                                    }
                                default:
                                    console.unexpected(`Unknown message type: ${t.type}`)
                            }
                        }
                    }
                    send(t) {
                        return uo(this, arguments, (function*(t, a = {}, {
                            cancelable: n = !0,
                            requiredSocket: o = !1
                        } = {}) {
                            var r;
                            const i = {
                                    sendTime: Date.now(),
                                    msgid: Math.random().toString(36).slice(2, 8),
                                    type: t,
                                    data: a
                                },
                                s = (o, r) => uo(this, null, (function*() {
                                    const s = null != o ? o : (yield so(this, Vn).call(this, !1)).url,
                                        l = po[t] || t;
                                    console.warn(`HTTP: >>> ${t}`, i);
                                    const c = {
                                            "Accept-Language": this.rootGetters.currentLang
                                        },
                                        {
                                            authToken: d
                                        } = (0, wt.L)();
                                    return d && (c.Authorization = d.trim()), _n.apiClient.post("/microservice/ask", {
                                        name: l,
                                        payload: r || a
                                    }, {
                                        baseURL: s,
                                        headers: c,
                                        cancelToken: new _n.axios.CancelToken((e => {
                                            n && G.L7x.includes(t) && (this.cancelTokens[i.msgid] = e)
                                        }))
                                    }).then((t => {
                                        delete this.cancelTokens[i.msgid];
                                        const a = ((Date.now() - i.sendTime) / 1e3).toFixed(2);
                                        return console.warn(`HTTP: <<< ${a}s length:${`${t.data}`.length}`, i.type, i, t), e.responseUpdate(t)
                                    })).catch((e => {
                                        throw delete this.cancelTokens[i.msgid], e
                                    }))
                                })),
                                l = () => uo(this, null, (function*() {
                                    var o;
                                    const r = "https://match-storage-parsed.top-parser.com",
                                        [, s] = t.split(":");
                                    return console.warn(`HTTP: >>> ${t}`, i), _n.apiClient.get(`/${s.replace("-","/")}`, {
                                        baseURL: r,
                                        params: {
                                            isTestUser: (null == (o = this.rootGetters.user) ? void 0 : o[G.ghU]) || void 0,
                                            data: a ? JSON.stringify(a) : void 0
                                        },
                                        cancelToken: new _n.axios.CancelToken((e => {
                                            n && G.L7x.includes(t) && (this.cancelTokens[i.msgid] = e)
                                        }))
                                    }).then((t => {
                                        delete this.cancelTokens[i.msgid];
                                        const a = ((Date.now() - i.sendTime) / 1e3).toFixed(2);
                                        return console.warn(`HTTP: <<< ${a}s length:${`${t.data}`.length}`, i.type, i, t), e.responseUpdate(t)
                                    })).catch((e => {
                                        throw delete this.cancelTokens[i.msgid], e
                                    }))
                                })),
                                c = () => uo(this, null, (function*() {
                                    var e;
                                    (null == (e = this.socket) ? void 0 : e.connected) || (yield new Promise((e => {
                                        const t = setInterval((() => {
                                            var a;
                                            (null == (a = this.socket) ? void 0 : a.connected) && (clearInterval(t), e())
                                        }), 16)
                                    })));
                                    const a = new Promise(((e, t) => {
                                        i.resolve = e, i.reject = t
                                    }));
                                    return this.requestMap[i.msgid] = i, console.socket(">>> Server.send", t, i), this.socket.emit("d", i), a
                                })),
                                d = () => {
                                    const e = this.cachesData.findIndex((e => {
                                        const {
                                            headers: {
                                                type: n,
                                                data: o = {}
                                            } = {}
                                        } = e;
                                        return n === t && Object.entries(a).every((([e, t]) => {
                                            const a = JSON.stringify({
                                                    data: t
                                                }),
                                                n = JSON.stringify({
                                                    data: o[e]
                                                });
                                            return n === a
                                        }))
                                    }));
                                    if (-1 === e) throw new Error;
                                    const n = this.cachesData[e];
                                    return console.warn(`CACHE: <<< ${t}`, {
                                        request: i,
                                        cache: n
                                    }), this.cachesData.splice(e, 1), Promise.resolve({
                                        data: n.body
                                    })
                                };
                            try {
                                return d()
                            } catch (u) {
                                try {
                                    return t.includes("MATCH-STORAGE-PARSED") && !t.includes("banners-list") ? (yield this.rootGetters.promiseByName[kt.l.AUTH], l()) : po[t] || t.includes("MATCH-STORAGE-PARSED") ? (yield this.rootGetters.promiseByName[kt.l.AUTH], s(void 0, oo({
                                        isTestUser: null == (r = this.rootGetters.user) ? void 0 : r[G.ghU]
                                    }, a))) : (o && (yield this.rootGetters.promiseByName[kt.l.AUTH]), c())
                                } catch (p) {
                                    return s()
                                }
                            }
                        }))
                    }
                    forceDisconnect() {
                        var e, t;
                        try {
                            console.warn("Socket force disconnect"), this.isForceDisconnecting = !0, null == (e = this.socket) || e.disconnect(), null == (t = this.socketPush) || t.disconnect()
                        } catch (a) {
                            console.error("Unable to force disconnect the socket", {
                                err: a
                            })
                        }
                    }
                    abortHttp() {
                        for (const e of Object.keys(this.cancelTokens)) this.cancelTokens[e](), delete this.cancelTokens[e]
                    }
                    static responseUpdate(e) {
                        const {
                            data: t
                        } = e.data.status || e.data.data ? e : {
                            data: {
                                status: e.status,
                                data: e.data
                            }
                        };
                        e.data = t;
                        const {
                            status: a,
                            message: n
                        } = t, o = "object" === typeof t.data ? t.data : {}, r = Object.keys(o), {
                            status: i,
                            message: s
                        } = ["status", "message"].every((e => r.includes(e))) && o || {}, l = i || a, c = s || n;
                        return void 0 !== c && (e.data.message = c), l && l >= 200 && l < 300 || l < 100 || l > 600 ? Promise.resolve(e.data) : Promise.reject(e.data)
                    }
                    on(e, t) {
                        return so(this, Kn).on(e, t)
                    }
                    off(e, t) {
                        so(this, Kn).off(e, t)
                    }
                };
            Vn = new WeakMap, Wn = new WeakMap, Yn = new WeakMap, Kn = new WeakMap;
            let fo = bo;

            function ko({
                commit: e,
                dispatch: t,
                getters: a,
                rootGetters: n
            }, o = G.BJ8.COMMON) {
                a.socket || e("socketInstance", (0, An.XI)(new fo({
                    commit: e,
                    dispatch: t,
                    getters: a,
                    rootGetters: n,
                    communicationType: o,
                    Vue: this._vm
                })))
            }
            const wo = ({
                    getters: e
                }) => e.socket.connect(),
                So = ({
                    getters: e
                }) => e.socket.connectToSportsPush(),
                Co = ({
                    getters: e
                }) => e.socket.disconnectSportsPush(),
                Io = ({
                    commit: e
                }, t) => {
                    e("socketConnected", t)
                },
                Oo = ({
                    commit: e
                }, t) => {
                    e("socketPushConnected", t)
                },
                To = e => e.instance,
                Po = e => e.connected,
                Ao = e => e.connectedPushServer,
                Lo = (e, t) => {
                    e.instance = t
                },
                Bo = (e, t) => {
                    e.connected = t
                },
                Mo = (e, t) => {
                    e.connectedPushServer = t
                },
                Eo = {
                    state: () => ({
                        instance: null,
                        connected: !0,
                        connectedPushServer: !1
                    }),
                    actions: y,
                    getters: v,
                    mutations: b
                },
                No = Eo;
            var Do = a(38336),
                xo = a(149766),
                Ro = a(730259),
                jo = Object.defineProperty,
                Fo = Object.getOwnPropertySymbols,
                $o = Object.prototype.hasOwnProperty,
                zo = Object.prototype.propertyIsEnumerable,
                Uo = (e, t, a) => t in e ? jo(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                Zo = (e, t) => {
                    for (var a in t || (t = {})) $o.call(t, a) && Uo(e, a, t[a]);
                    if (Fo)
                        for (var a of Fo(t)) zo.call(t, a) && Uo(e, a, t[a]);
                    return e
                },
                Go = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const Ho = e => `VERIFICATION:${e}`,
                qo = 400,
                Vo = 422,
                Wo = {
                    email: null,
                    lastVerifiedEmail: null,
                    isVerified: null,
                    isDisabled: null,
                    isEmailChangeable: null,
                    waitForMs: null,
                    tokenStatus: null,
                    resultId: null,
                    errorStatus: null,
                    domains: null
                },
                Yo = () => ({
                    namespaced: !0,
                    state: () => {
                        var e;
                        return {
                            emailInfo: Zo({}, Wo),
                            isModuleActive: !!(null == (e = Le.appConfig.modules.verification) ? void 0 : e.email)
                        }
                    },
                    mutations: {
                        setState(e, t) {
                            Object.assign(e.emailInfo, t)
                        },
                        resetState(e) {
                            e.emailInfo = Zo({}, Wo)
                        }
                    },
                    getters: {
                        getInfo: e => e.emailInfo,
                        timeBeforeNextAttempt(e) {
                            return e.emailInfo.waitForMs <= 1e3 ? 0 : e.emailInfo.waitForMs + Date.now()
                        },
                        isDataReady(e) {
                            return null !== e.emailInfo.isVerified
                        },
                        isVerified(e, t) {
                            return e.isModuleActive && t.isDataReady && t.getInfo.isVerified
                        },
                        isVerifiedEventStatus(e, t) {
                            return t.isVerified ? "verificated" : "notverificated"
                        },
                        isVerificationEnabled(e, t) {
                            return e.isModuleActive && !(t.isDataReady && t.getInfo.isDisabled)
                        },
                        isEmailChangeable(e, t) {
                            return e.isModuleActive && t.isDataReady && t.getInfo.isEmailChangeable
                        },
                        isVerificationRequired(e, t, a, n) {
                            return t.isVerificationEnabled && !n.user.is_email_verified && !t.getInfo.isVerified
                        }
                    },
                    actions: {
                        loadInfo(e) {
                            return Go(this, arguments, (function*({
                                state: e,
                                getters: t,
                                commit: a,
                                rootGetters: n
                            }, o = !1) {
                                if (!e.isModuleActive) return;
                                if (!o && t.isDataReady) return;
                                const {
                                    data: {
                                        isVerified: r,
                                        lastVerifiedEmail: i,
                                        isEmailChangeable: s,
                                        waitForMs: l,
                                        isDisabled: c,
                                        email: d,
                                        domains: u
                                    } = {}
                                } = yield n.socket.send(Ho("email-info"));
                                a("setState", {
                                    isVerified: r,
                                    lastVerifiedEmail: i,
                                    isEmailChangeable: s,
                                    waitForMs: l,
                                    isDisabled: c,
                                    email: d,
                                    domains: u
                                }), l && a("setState", {
                                    errorStatus: Do.DI.LIMIT_OF_TRIES
                                })
                            }))
                        },
                        verify(e, t) {
                            return Go(this, arguments, (function*({
                                state: e,
                                commit: t,
                                rootGetters: a
                            }, n) {
                                var o;
                                const r = yield(0, Ro.p)(null != (o = e.emailInfo.domains) ? o : []), {
                                    isEmailVerificationDoi: i
                                } = (0, xo.z)();
                                if (!r) return void t("setState", {
                                    errorStatus: Do.DI.LOCKED
                                });
                                const {
                                    data: {
                                        resultId: s
                                    } = {}
                                } = yield a.socket.send(Ho("email-verify"), Zo(Zo({
                                    email: n
                                }, r && {
                                    domain: r
                                }), i.value && {
                                    doi_on: !0
                                }));
                                s && t("setState", {
                                    resultId: s,
                                    errorStatus: null,
                                    waitForMs: 0
                                }), t("setState", {
                                    tokenStatus: null
                                })
                            }))
                        },
                        confirmToken(e, t) {
                            return Go(this, arguments, (function*({
                                commit: e,
                                getters: t,
                                rootGetters: a
                            }, n) {
                                var o, r, i;
                                try {
                                    yield a.socket.send(Ho("email-confirm"), {
                                        token: n
                                    })
                                } catch (s) {
                                    if ($n.L_.handleMailVerificationEvent("error", {
                                            error_text: null == (o = s.data) ? void 0 : o.message,
                                            title: Do._j[Do.BP.TOKEN_ERROR],
                                            verif_status: t.isVerifiedEventStatus
                                        }), (null == (r = s.data) ? void 0 : r.status) === qo) {
                                        const t = s.data.message.split(".");
                                        e("setState", {
                                            tokenStatus: t[t.length - 1]
                                        })
                                    } else {
                                        if ((null == (i = s.data) ? void 0 : i.status) !== Vo) throw s;
                                        e("setState", {
                                            tokenStatus: "wrong"
                                        })
                                    }
                                }
                            }))
                        }
                    }
                });
            var Ko = a(993191);
            const Jo = {
                namespaced: !0,
                modules: {
                    email: Yo(),
                    phone: (0, Ko.D)()
                }
            };
            var Xo = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const Qo = {
                namespaced: !0,
                state: () => ({}),
                actions: {
                    voucherActivate(e, t) {
                        return Xo(this, arguments, (function*({
                            rootGetters: e,
                            dispatch: t
                        }, a) {
                            const n = yield t("addCaptchaToData", {
                                requestData: a
                            }, {
                                root: !0
                            }), {
                                data: o
                            } = yield e.socket.send("VOUCHERS:activate-v2", n);
                            return t("requestBalance", null, {
                                root: !0
                            }), o
                        }))
                    }
                }
            };
            var er = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const tr = {
                    namespaced: !0,
                    state: () => ({
                        widgets: {}
                    }),
                    actions: {
                        loadWidget(e, t) {
                            return er(this, arguments, (function*({
                                rootGetters: e,
                                commit: t
                            }, {
                                widgetId: a,
                                matchId: n
                            }) {
                                const {
                                    data: o
                                } = yield e.socket.send(`MS-SMALL-THINGS:widgets-${a}`, {
                                    matchId: n
                                });
                                if (a === G.SG8 && 0 === Number(o.isDisabled)) {
                                    const {
                                        data: {
                                            match: t
                                        }
                                    } = yield e.socket.send("MATCH-STORAGE-3:match-one", {
                                        service: G.d_J,
                                        matchId: o.data.matchId
                                    }, {
                                        cancelable: !1
                                    });
                                    t && (o.data.matchRow = t, o.data.matchRow.date = new Date(t.dateOfMatch))
                                }
                                t("storeWidget", o)
                            }))
                        }
                    },
                    getters: {
                        getWidget(e) {
                            return t => e.widgets[t] || {
                                isDisabled: 1,
                                data: {}
                            }
                        }
                    },
                    mutations: {
                        storeWidget(e, t) {
                            e.widgets[t.id] = t
                        }
                    }
                },
                ar = e => e,
                nr = (e, t = ar, a = "id") => e.reduce(((e, n) => (e[n[a]] = t(n), e)), {});
            var or = a(685491),
                rr = a(285834);
            const ir = ({
                    id: e,
                    sportId: t,
                    key: a,
                    name: n,
                    iconUrl: o,
                    isTopSport: r
                }) => ({
                    type: rr.p.CATEGORY,
                    iconUrl: o,
                    id: e,
                    isTopSport: r,
                    key: a,
                    name: n,
                    providerId: G.HaS,
                    sportId: t
                }),
                sr = ({
                    id: e,
                    name: t,
                    sportId: a,
                    order: n,
                    oddGroupsOrder: o = []
                }) => ({
                    id: e,
                    name: t,
                    sportId: a,
                    order: n,
                    oddGroupsOrder: o
                }),
                lr = ({
                    coefficient: e,
                    status: t,
                    blocked: a = t,
                    group: n,
                    groupId: o = String(n),
                    id: r,
                    providerId: i,
                    matchId: s,
                    name: l,
                    outCome: c,
                    outComeDescription: d,
                    specialValue: u,
                    specialValueDescription: p,
                    type: m,
                    typeId: _ = String(m),
                    subGamesId: h,
                    service: g,
                    render: y,
                    timestamp: v,
                    meta: {
                        legacyOutcomeName: b
                    }
                }) => {
                    "outCome" === y.renderKey && (y.renderKey = "legacyOutcomeName"), "outCome" === y.renderValue && (y.renderValue = "legacyOutcomeName");
                    const f = {
                        blocked: !!a,
                        isOddDisabled: !!a,
                        disabled: !!a,
                        coefficient: a && 1 === e ? null : e,
                        groupId: o,
                        id: r,
                        matchId: s,
                        name: l,
                        outComeDescription: d || l,
                        outCome: c,
                        specialValue: u,
                        specialValueDescription: p,
                        typeId: _,
                        providerId: i,
                        subGamesId: h,
                        service: g,
                        render: y,
                        legacyOutcomeName: b,
                        timestamp: v
                    };
                    return i === G.aEp && u && (V(f), f.specialValueDescription = f.specialValueDescription || u), f
                },
                cr = ({
                    id: e,
                    providerId: t,
                    categoryId: a,
                    sportId: n,
                    key: o,
                    service: r,
                    name: i,
                    isTop: s,
                    isTopSport: l,
                    isEsport: c,
                    iconUrl: d,
                    countLive: u,
                    countPrematch: p,
                    countOutright: m,
                    viewOutrightInPrematch: _,
                    viewOutrightInLongTerm: h,
                    liveOrder: g,
                    topLiveOrder: y
                }) => ({
                    id: e,
                    providerId: t,
                    categoryId: a,
                    sportId: n,
                    key: o,
                    service: r,
                    isTop: s,
                    isTopSport: l,
                    name: i,
                    isEsport: c,
                    iconUrl: d,
                    countLive: u,
                    countPrematch: p,
                    countOutright: m,
                    viewOutrightInPrematch: _,
                    viewOutrightInLongTerm: h,
                    liveOrder: g,
                    topLiveOrder: y,
                    type: rr.p.TOURNAMENT
                });
            var dr = Object.defineProperty,
                ur = Object.defineProperties,
                pr = Object.getOwnPropertyDescriptors,
                mr = Object.getOwnPropertySymbols,
                _r = Object.prototype.hasOwnProperty,
                hr = Object.prototype.propertyIsEnumerable,
                gr = (e, t, a) => t in e ? dr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                yr = (e, t) => {
                    for (var a in t || (t = {})) _r.call(t, a) && gr(e, a, t[a]);
                    if (mr)
                        for (var a of mr(t)) hr.call(t, a) && gr(e, a, t[a]);
                    return e
                },
                vr = (e, t) => ur(e, pr(t)),
                br = (e, t) => {
                    var a = {};
                    for (var n in e) _r.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                    if (null != e && mr)
                        for (var n of mr(e)) t.indexOf(n) < 0 && hr.call(e, n) && (a[n] = e[n]);
                    return a
                },
                fr = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const kr = e => t => cr(vr(yr({}, t), {
                    service: e
                })),
                wr = {
                    namespaced: !0,
                    actions: {
                        getCategoryMap(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e
                            }, {
                                service: t,
                                sportId: a
                            }) {
                                var n;
                                const o = yield e.socket.send((0, C.$U)("categories-list"), {
                                    lang: e.currentLang,
                                    service: t,
                                    sportId: a
                                });
                                return nr(null != (n = o.data.categories) ? n : [], ir)
                            }))
                        },
                        getSubgameMap(e) {
                            return fr(this, arguments, (function*({
                                rootGetters: e
                            }) {
                                var t;
                                const a = yield e.socket.send((0, C.$U)("sports-subgameList"), {
                                    lang: e.currentLang
                                });
                                return nr(null != (t = a.data.subgames) ? t : [], sr)
                            }))
                        },
                        getTournamentsRaw(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e,
                                rootState: t
                            }, {
                                service: a,
                                sportId: n,
                                timeFilter: o,
                                tournamentIds: r
                            }) {
                                var i;
                                const s = yield e.socket.send((0, C.$U)("tournaments-list"), {
                                    localeId: t.locale,
                                    lang: e.currentLang,
                                    service: a,
                                    sportId: n,
                                    tournamentIds: r,
                                    timeFilter: o
                                });
                                return null != (i = s.data.tournaments) ? i : []
                            }))
                        },
                        getTournamentMap(e, t) {
                            return fr(this, arguments, (function*({
                                dispatch: e
                            }, t) {
                                var a = t,
                                    {
                                        service: n
                                    } = a,
                                    o = br(a, ["service"]);
                                const r = yield e("getTournamentsRaw", yr({
                                    service: n
                                }, o)), i = kr(n);
                                return nr(r, i)
                            }))
                        },
                        getTournamentList(e, t) {
                            return fr(this, arguments, (function*({
                                dispatch: e
                            }, t) {
                                var a = t,
                                    {
                                        service: n
                                    } = a,
                                    o = br(a, ["service"]);
                                const r = yield e("getTournamentsRaw", yr({
                                    service: n
                                }, o)), i = kr(n);
                                return r.map((e => i(e)))
                            }))
                        },
                        getRawMatches(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e,
                                rootState: t
                            }, {
                                service: a,
                                sportId: n,
                                tournamentIds: o,
                                matchIds: r,
                                timeFilter: i,
                                categoryId: s,
                                onlyOutrights: l,
                                limit: c
                            }) {
                                var d;
                                const u = yield e.socket.send((0, C.$U)("matches-list"), {
                                    lang: e.currentLang,
                                    localeId: t.locale,
                                    service: a,
                                    sportId: n,
                                    tournamentIds: o,
                                    matchIds: r,
                                    timeFilter: i,
                                    categoryId: s,
                                    onlyOutrights: l,
                                    limit: c
                                });
                                return null != (d = u.data.matches) ? d : []
                            }))
                        },
                        getMatchMap(e, t) {
                            return fr(this, arguments, (function*({
                                dispatch: e
                            }, t) {
                                const a = yield e("getRawMatches", t);
                                return nr(a, or.ae)
                            }))
                        },
                        getHotMatchList(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e,
                                rootState: t
                            }, {
                                service: a
                            }) {
                                var n, o;
                                const r = yield e.socket.send((0, C.$U)("matches-hot"), {
                                    service: a,
                                    lang: e.currentLang,
                                    localeId: t.locale
                                });
                                return null != (o = null == (n = r.data.matches) ? void 0 : n.map((e => (0, or.ae)(e, !0)))) ? o : []
                            }))
                        },
                        getMatchList(e, t) {
                            return fr(this, arguments, (function*({
                                dispatch: e
                            }, t) {
                                const a = yield e("getRawMatches", t);
                                return a.map((e => (0, or.ae)(e)))
                            }))
                        },
                        getOddMap(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e,
                                rootState: t
                            }, {
                                matchId: a,
                                providerId: n,
                                service: o,
                                sportId: r,
                                withTimestamp: i = !1
                            }) {
                                var s, l;
                                const c = yield e.socket.send((0, C.$U)("odds-list"), {
                                    providerId: n,
                                    lang: e.currentLang,
                                    localeId: t.locale,
                                    service: o,
                                    sportId: r,
                                    matchId: a.toString()
                                }), d = t => {
                                    var a, n = t,
                                        {
                                            name: r
                                        } = n,
                                        i = br(n, ["name"]);
                                    return lr(vr(yr({}, i), {
                                        service: o,
                                        name: null != (a = r[e.currentLang]) ? a : r
                                    }))
                                }, u = nr(null != (s = c.data.odds) ? s : [], d);
                                return i ? {
                                    timestamp: null != (l = c.data.timestamp) ? l : 0,
                                    map: u
                                } : {
                                    map: u
                                }
                            }))
                        },
                        toggleFavourite(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e
                            }, t) {
                                yield e.socket.send("MS-FAVOURITE:favourites-toggle", t)
                            }))
                        },
                        getMatchIdForLive(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e
                            }, t) {
                                const a = yield e.socket.send((0, C.$U)("matches-getLiveId"), {
                                    matchId: t
                                });
                                return a.data.matchId
                            }))
                        },
                        searchEvents(e, t) {
                            return fr(this, arguments, (function*({
                                rootGetters: e,
                                rootState: t
                            }, {
                                search: a,
                                service: n,
                                isCybersport: o
                            }) {
                                const {
                                    data: {
                                        matches: r = [],
                                        tournaments: i = []
                                    }
                                } = yield e.socket.send((0, C.$U)("events-search"), {
                                    lang: e.currentLang,
                                    localeId: t.locale,
                                    search: a,
                                    service: n,
                                    isEsport: o
                                }), s = r.map((e => (0, or.ae)(vr(yr({}, e), {
                                    isLive: e.service === G.PTO,
                                    gameScore: (0, or.o6)(e.gameScore || {}),
                                    dateOfMatch: e.dateOfMatch
                                })))), l = i.map(kr(n));
                                return {
                                    matches: s,
                                    tournaments: l
                                }
                            }))
                        }
                    }
                },
                Sr = wr;
            var Cr = a(827601),
                Ir = a(880361);
            const Or = e => {
                if (!e) return;
                const t = JSON.parse(JSON.stringify(e));
                if (t.date) {
                    const [e, a] = t.date.split("/"), n = new Date;
                    n.setDate(+e), n.setMonth(a - 1), t.date = {}, n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0), t.date.start = +n, n.setHours(23), n.setMinutes(59), n.setSeconds(59), t.date.end = +n
                }
                return t
            };
            var Tr = Object.defineProperty,
                Pr = Object.defineProperties,
                Ar = Object.getOwnPropertyDescriptors,
                Lr = Object.getOwnPropertySymbols,
                Br = Object.prototype.hasOwnProperty,
                Mr = Object.prototype.propertyIsEnumerable,
                Er = (e, t, a) => t in e ? Tr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                Nr = (e, t) => {
                    for (var a in t || (t = {})) Br.call(t, a) && Er(e, a, t[a]);
                    if (Lr)
                        for (var a of Lr(t)) Mr.call(t, a) && Er(e, a, t[a]);
                    return e
                },
                Dr = (e, t) => Pr(e, Ar(t)),
                xr = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const Rr = e => {
                    const {
                        state: {
                            categoryMapLoaded: t,
                            categoryMap: a = {}
                        },
                        mutations: {
                            setCategoryMapLoaded: n,
                            setCategoryMap: o,
                            addCategory: r,
                            addCategoryList: i,
                            deleteCategory: s,
                            deleteCategoryList: l,
                            updateCategory: c,
                            updateCategoryList: d
                        }
                    } = (0, rr.Z)(rr.p.CATEGORY), {
                        state: {
                            subgameMapLoaded: u,
                            subgameMap: p = {}
                        },
                        mutations: {
                            setSubgameMapLoaded: m,
                            setSubgameMap: _
                        }
                    } = (0, rr.Z)(rr.p.SUBGAME), {
                        state: {
                            tournamentMapLoaded: h,
                            tournamentMap: g = {}
                        },
                        mutations: {
                            setTournamentMapLoaded: y,
                            setTournamentMap: v,
                            addTournament: b,
                            addTournamentList: f,
                            deleteTournament: k,
                            deleteTournamentList: w,
                            updateTournament: S,
                            updateTournamentList: C
                        }
                    } = (0, rr.Z)(rr.p.TOURNAMENT), {
                        state: {
                            matchMap: I = {}
                        },
                        mutations: {
                            setMatchMap: O,
                            addMatch: T,
                            addMatchList: P,
                            addOrUpdateMatchList: A,
                            deleteMatch: L,
                            deleteMatchList: B,
                            updateMatch: M,
                            updateMatchList: E
                        }
                    } = (0, rr.Z)(rr.p.MATCH), {
                        state: {
                            oddMap: N = {}
                        },
                        mutations: {
                            setOddMap: D,
                            addOdd: x,
                            addOddList: R,
                            deleteOdd: j,
                            deleteOddList: F,
                            updateOdd: $,
                            updateOddList: z,
                            setOdd: U,
                            setOddList: Z
                        },
                        getters: {
                            oddMapByMatchId: H
                        }
                    } = (0, rr.Z)(rr.p.ODD, [rr.p.MATCH]);
                    return {
                        namespaced: !0,
                        state: () => ({
                            categoryMapLoaded: t,
                            categoryMap: a,
                            tournamentMapLoaded: h,
                            tournamentMap: g,
                            matchMap: I,
                            removedMatchMap: {},
                            oddMap: N,
                            matchCountBySportId: {},
                            subgameMapLoaded: u,
                            subgameMap: p,
                            loading: !1,
                            isCybersportLoading: !1
                        }),
                        getters: {
                            matchMap: e => e.matchMap,
                            matchMapByEntity: e => Object.values(e.matchMap).reduce(((e, t) => (e[rr.p.CATEGORY][t.categoryId] || (e[rr.p.CATEGORY][t.categoryId] = []), e[rr.p.TOURNAMENT][t.tournamentId] || (e[rr.p.TOURNAMENT][t.tournamentId] = []), e[rr.p.CATEGORY][t.categoryId].push(t), e[rr.p.TOURNAMENT][t.tournamentId].push(t), e)), {
                                [rr.p.CATEGORY]: {},
                                [rr.p.TOURNAMENT]: {}
                            }),
                            oddMapByMatchId: H,
                            getMatchListByTournament: (e, t) => e => t.matchMapByEntity[rr.p.TOURNAMENT][e] || [],
                            getCategoryMap: e => e.categoryMap,
                            haveMatchInCategory: e => t => Object.values(e.matchMap).some((e => t === e.categoryId)),
                            categoryList: (e, t) => Object.values(t.getCategoryMap).filter((e => t.getTournamentListByCategoryId(e.id).length > 0)).sort(((e, t) => e.sportId - t.sportId)),
                            getCategoryMapBySportId: e => t => nr(Object.values(e.categoryMap).filter((e => e.sportId === t))),
                            getCategoryListBySportId: (e, t) => e => Object.values(t.getCategoryMapBySportId(e) || {}).filter((e => Object.keys(t.getTournamentMapByCategoryId(e.id) || {}).length > 0)),
                            getCategoryListBySportIdFiltered: (t, a) => t => a.getCategoryListBySportId(t).filter((t => (e === G.d_J || a.haveMatchInCategory(t.id)) && a.getTournamentListByCategoryId(t.id).length > 0)),
                            getTournamentMap: e => e.tournamentMap,
                            tournamentFavoriteList: (...[, e, , t]) => {
                                var a;
                                return null == (a = t.favourites("bets-1:tournament")) ? void 0 : a.map((t => e.getTournamentMap[t])).filter(Boolean)
                            },
                            matchFavoriteList: (...[e, , t, a]) => {
                                var n;
                                return null == (n = a.favourites("bets-1:match")) ? void 0 : n.map((t => e.matchMap[t])).filter(Boolean).filter((e => {
                                    const a = t.xbet.timeFilter;
                                    if (!a) return !0;
                                    if (a.date) return e.date.dateMonth === a.date;
                                    const n = new Date,
                                        o = n.setHours(n.getHours() + a.hoursToStart);
                                    return e.startDateTime <= o
                                }))
                            },
                            isTournamentFavourite: (...[, e]) => t => e.tournamentFavoriteList.some((e => e.id === t)),
                            isMatchFavourite: (...[, e]) => t => e.matchFavoriteList.some((e => e.id === t)),
                            sportListAll: (...[, , e]) => Object.values(e.xbet.sports.sportList).sort(((e, t) => e.isEsport - t.isEsport)),
                            sportList: (e, t) => t.sportListAll.filter((t => e.matchCountBySportId[t.id] > 0)),
                            sportListCybersport(e, t) {
                                return t.sportList.filter((e => e.isEsport))
                            },
                            tournamentList: (e, t) => Object.values(t.getTournamentMap).filter((e => e.service === G.d_J || t.getMatchesByTournamentAndTimeFilter(e.id).length > 0)).sort(((e, t) => e.isEsport - t.isEsport)),
                            topTournamentList: (e, t) => t.matchList.filter((e => e.showOnPrematchPage)).reduce(((e, t) => (e.includes(t.tournamentId) || e.push(t.tournamentId), e)), []).map((e => t.getTournamentMap[e])).filter(Boolean).sort(((e, t) => e.isEsport - t.isEsport)),
                            getTournamentListBySportId: (e, t) => e => t.tournamentList.filter((t => t.sportId === e)).filter((e => t.getMatchesByTournamentAndTimeFilter(e.id).length > 0)).sort(((e, t) => e.isEsport - t.isEsport)),
                            getTournamentsByTimeFilter: (e, t) => t.tournamentList.sort(((e, t) => e.isEsport - t.isEsport)),
                            getTournamentMapByCategoryId: (e, t) => e => nr(t.tournamentList.filter((t => t.categoryId === e))),
                            getTournamentListByCategoryId: (t, a) => t => Object.values(a.getTournamentMapByCategoryId(t)).filter((t => e === G.d_J || a.getMatchesByTournamentAndTimeFilter(t.id).length > 0)).sort(((e, t) => e.isEsport - t.isEsport)),
                            getMatchListBySportId: e => t => Object.values(e.matchMap).filter((e => e.sportId === t)),
                            getSportTournamentsAllowedForLongTerm: (e, {
                                tournamentList: t
                            }) => e => t.filter((t => t.sportId === e)).filter((({
                                countOutright: e,
                                viewOutrightInLongTerm: t
                            }) => e > 0 && t)),
                            getOutrightMatchesBySportId: (e, t) => e => t.getMatchListBySportId(e).filter((e => e.outright)),
                            getOddMapByGroupId: (...[, e, , t]) => a => Object.entries(e.oddMapByMatchId[a] || {}).reduce(((e, [a, n]) => (!t["xbet/oddGroups/getOddGroupMap"][n.groupId] || n.subGamesId.length > 0 || (e[n.groupId] || (e[n.groupId] = {}), e[n.groupId][a] = n), e)), {}),
                            getOddMapBySubGameId: (e, t) => e => Object.entries(t.oddMapByMatchId[e] || {}).reduce(((e, [t, a]) => {
                                const {
                                    subGamesId: n = []
                                } = a;
                                e["main-tab"] || (e["main-tab"] = {}), e["main-tab"][a.groupId] || (e["main-tab"][a.groupId] = {}), e["main-tab"][a.groupId][t] = a;
                                for (const o of n) e[o] || (e[o] = {}), e[o][a.groupId] || (e[o][a.groupId] = {}), e[o][a.groupId][t] = a;
                                return e
                            }), {}),
                            topSportTournaments(e, t) {
                                return t.tournamentList.filter((e => e.isTopSport))
                            },
                            getTopSportTournamentsBySportId(e, t) {
                                return e => t.topSportTournaments.filter((t => t.sportId === e))
                            },
                            matchList(e) {
                                return Object.values(e.matchMap).sort(((e, t) => (e.startDateTime || Number.MAX_SAFE_INTEGER) - (t.startDateTime || Number.MAX_SAFE_INTEGER)))
                            },
                            getMatchesByTimeFilter(e, t, a) {
                                return t.matchList.filter((e => {
                                    const t = a.xbet.timeFilter;
                                    if (!t) return !0;
                                    if (t.date) return e.date.dateMonth === t.date;
                                    const n = new Date,
                                        o = n.setHours(n.getHours() + t.hoursToStart);
                                    return e.startDateTime <= o
                                }))
                            },
                            getMatchesByTournamentAndTimeFilter(e, t) {
                                return e => t.getMatchesByTimeFilter.filter((t => t.tournamentId === e))
                            },
                            getMatchById: (t, a, n, o) => n => {
                                var r, i, s;
                                const l = t.matchMap[n];
                                if (l) return Dr(Nr({}, l), {
                                    service: e,
                                    matchId: l.id,
                                    homeTeamId: +l.teamIdFirst,
                                    homeTeamName: l.teamNameFirst,
                                    awayTeamId: +l.teamIdSecond,
                                    awayTeamName: l.teamNameSecond,
                                    sportName: null == (r = o["xbet/sports/getSportMap"][l.sportId]) ? void 0 : r.name,
                                    categoryName: null == (i = a.getCategoryMap[l.categoryId]) ? void 0 : i.name,
                                    tournamentName: null == (s = a.getTournamentMap[l.tournamentId]) ? void 0 : s.name,
                                    matchScore: l.matchScore ? `${l.matchScore.Sc1}:${l.matchScore.Sc2}` : "-:-",
                                    matchTime: (0, Cr.Z)(l.matchTime) ? l.matchTime : Math.trunc(l.matchTime / 1e3 / 60),
                                    gameScore: l.gameScore ? (0, Ir.G)(l.gameScore) : null,
                                    periodsScore: (l.scorePeriodList || []).map((e => Object.values(e).filter((e => !(0, Cr.Z)(e))).join(":"))).join(" - "),
                                    scorePeriodList: l.scorePeriodList,
                                    dateOfMatch: l.startDateTime
                                })
                            },
                            isMatchRemoved: e => t => !!e.removedMatchMap[t]
                        },
                        mutations: {
                            setCategoryMapLoaded: n,
                            setCategoryMap: o,
                            addCategory: r,
                            addCategoryList: i,
                            deleteCategory: s,
                            deleteCategoryList: l,
                            updateCategory: c,
                            updateCategoryList: d,
                            setTournamentMapLoaded: y,
                            setTournamentMap: v,
                            addTournament: b,
                            addTournamentList: f,
                            deleteTournament: k,
                            deleteTournamentList: w,
                            updateTournament: S,
                            updateTournamentList: C,
                            setMatchMap: O,
                            addMatch: T,
                            addMatchList: P,
                            addOrUpdateMatchList: A,
                            deleteMatch: L,
                            deleteMatchList: B,
                            updateMatch: M,
                            updateMatchList: E,
                            setOddMap: D,
                            addOdd: x,
                            addOddList: R,
                            deleteOdd: j,
                            deleteOddList: F,
                            updateOdd: $,
                            updateOddList: z,
                            setOdd: U,
                            setOddList: Z,
                            setSubgameMapLoaded: m,
                            setSubgameMap: _,
                            setMatchCountBySportId(e, t) {
                                e.matchCountBySportId = t
                            },
                            incrementMatchCountBySportId({
                                matchCountBySportId: e
                            }, t) {
                                e[t] || (e[t] = 0), e[t] += 1
                            },
                            decrementMatchCountBySportId({
                                matchCountBySportId: e
                            }, t) {
                                e[t] && 0 !== e[t] && (e[t] -= 1)
                            },
                            setLoading(e, t) {
                                e.loading = t
                            },
                            setMatchRemoved({
                                removedMatchMap: e
                            }, {
                                matchId: t,
                                value: a
                            }) {
                                e[t] = a
                            }
                        },
                        actions: {
                            loadDataService(t) {
                                return xr(this, arguments, (function*({
                                    state: t,
                                    commit: a,
                                    dispatch: n,
                                    rootState: o
                                }, {
                                    force: r,
                                    loadHot: i = !0
                                } = {}) {
                                    r && a("setMatchMap", {});
                                    const s = [!t.categoryMapLoaded || r ? n("loadCategories") : null, !t.subgameMapLoaded || r ? n("loadSubgameMap") : null, !t.tournamentMapLoaded || r ? n("loadTournaments", {
                                        save: !0
                                    }) : null];
                                    e === G.PTO ? s.push(n("loadAllMatches")) : !o.xbet.timeFilter && i && s.push(n("xbet/api/getHotMatchList", {
                                        service: e
                                    }, {
                                        root: !0
                                    }).then((e => xr(this, null, (function*() {
                                        a("addOrUpdateMatchList", e), yield n("setMatchBaseOdds", e)
                                    }))))), yield Promise.all(s)
                                }))
                            },
                            loadTournaments(t) {
                                return xr(this, arguments, (function*({
                                    commit: t,
                                    dispatch: a,
                                    rootState: n
                                }, {
                                    tournamentIds: o,
                                    save: r,
                                    hidden: i
                                } = {}) {
                                    const s = yield a("xbet/api/getTournamentMap", {
                                        service: e,
                                        tournamentIds: o,
                                        timeFilter: Or(n.xbet.timeFilter)
                                    }, {
                                        root: !0
                                    });
                                    return r && (t("setTournamentMap", s), i || t("setTournamentMapLoaded", !0)), s
                                }))
                            },
                            loadCategories(t) {
                                return xr(this, arguments, (function*({
                                    commit: t,
                                    dispatch: a
                                }) {
                                    const n = yield a("xbet/api/getCategoryMap", {
                                        service: e
                                    }, {
                                        root: !0
                                    });
                                    t("setCategoryMap", n), t("setCategoryMapLoaded", !0)
                                }))
                            },
                            loadSubgameMap(e) {
                                return xr(this, arguments, (function*({
                                    commit: e,
                                    dispatch: t
                                }) {
                                    const a = yield t("xbet/api/getSubgameMap", null, {
                                        root: !0
                                    });
                                    e("setSubgameMap", a), e("setSubgameMapLoaded", !0)
                                }))
                            },
                            loadAllMatches({
                                dispatch: t,
                                commit: a
                            }) {
                                return t("xbet/api/getMatchMap", {
                                    service: e
                                }, {
                                    root: !0
                                }).then((e => xr(this, null, (function*() {
                                    a("setMatchMap", e);
                                    const n = Object.values(e),
                                        o = n.reduce(((e, t) => (e[t.sportId] || (e[t.sportId] = 0), e[t.sportId] += 1, e)), {});
                                    yield t("setMatchBaseOdds", n), a("setMatchCountBySportId", o)
                                }))))
                            },
                            loadDataMatchesBySport(t, a) {
                                return xr(this, arguments, (function*({
                                    rootState: t,
                                    commit: a,
                                    dispatch: n
                                }, {
                                    sportId: o,
                                    onlyOutrights: r
                                }) {
                                    if (!o) return;
                                    const i = yield n("xbet/api/getMatchMap", {
                                        service: e,
                                        sportId: `${o}`,
                                        timeFilter: Or(t.xbet.timeFilter),
                                        onlyOutrights: r
                                    }, {
                                        root: !0
                                    }), s = Object.values(i);
                                    yield n("setMatchBaseOdds", s), a("addMatchList", s)
                                }))
                            },
                            loadDataMatchesByCategory(t, a) {
                                return xr(this, arguments, (function*({
                                    getters: t,
                                    rootState: a,
                                    commit: n,
                                    dispatch: o
                                }, {
                                    categoryId: r,
                                    onlyOutrights: i
                                }) {
                                    if (!r) return;
                                    const s = yield o("xbet/api/getMatchMap", {
                                        service: e,
                                        categoryId: r,
                                        timeFilter: Or(a.xbet.timeFilter),
                                        onlyOutrights: i
                                    }, {
                                        root: !0
                                    }), l = Object.values(s);
                                    if (yield o("setMatchBaseOdds", l), e === G.d_J) {
                                        const e = t.matchMapByEntity[rr.p.CATEGORY][r] || [];
                                        n("deleteMatchList", e.map((({
                                            id: e
                                        }) => e)))
                                    }
                                    n("addMatchList", l)
                                }))
                            },
                            loadDataMatchesByTournament(t, a) {
                                return xr(this, arguments, (function*({
                                    getters: t,
                                    rootState: a,
                                    commit: n,
                                    dispatch: o
                                }, r) {
                                    if (!r || 0 === r.length) return;
                                    const i = yield o("xbet/api/getMatchMap", {
                                        service: e,
                                        tournamentIds: r,
                                        timeFilter: Or(a.xbet.timeFilter)
                                    }, {
                                        root: !0
                                    }), s = Object.values(i);
                                    if (e === G.d_J) {
                                        const e = r.flatMap((e => t.matchMapByEntity[rr.p.TOURNAMENT][e] || []));
                                        n("deleteMatchList", e.map((({
                                            id: e
                                        }) => e)))
                                    }
                                    yield o("setMatchBaseOdds", s), n("addMatchList", s)
                                }))
                            },
                            loadOddMap(t, a) {
                                return xr(this, arguments, (function*({
                                    commit: t,
                                    dispatch: a,
                                    state: n
                                }, {
                                    matchId: o,
                                    providerId: r
                                }) {
                                    yield a("xbet/api/getOddMap", {
                                        service: e,
                                        matchId: o,
                                        providerId: r,
                                        withTimestamp: !0
                                    }, {
                                        root: !0
                                    }).then((e => xr(this, [e], (function*({
                                        timestamp: e,
                                        map: a
                                    }) {
                                        const r = Object.values(a);
                                        if (e) {
                                            const t = r.some((t => {
                                                const a = n.oddMap[t.id];
                                                return !!(null == a ? void 0 : a.timestamp) && a.timestamp >= e
                                            }));
                                            if (t) return void console.log(`Skip odd-list for match: ${o}`)
                                        }
                                        t("setOddList", r)
                                    }))))
                                }))
                            },
                            setMatchBaseOdds({
                                commit: t
                            }, a) {
                                const n = a.flatMap((e => e.baseOdds)).map((t => lr(Dr(Nr({}, t), {
                                    service: e
                                }))));
                                t("addOddList", n)
                            },
                            loadBaseMatchData(t, a) {
                                return xr(this, arguments, (function*({
                                    commit: t,
                                    dispatch: a
                                }, n) {
                                    if (!n) return;
                                    const o = yield a("xbet/api/getMatchMap", {
                                        service: e,
                                        matchIds: [n]
                                    }, {
                                        root: !0
                                    });
                                    t(`xbet/${e}/addOrUpdateMatchList`, Object.values(o), {
                                        root: !0
                                    })
                                }))
                            },
                            loadMatchData(t, a) {
                                return xr(this, arguments, (function*({
                                    dispatch: t
                                }, a) {
                                    a && (yield Promise.all([t("xbet/loadDataBase", {
                                        needCounters: e === G.PTO
                                    }, {
                                        root: !0
                                    }), t("loadBaseMatchData", a), t("loadOddMap", {
                                        matchId: a
                                    })]))
                                }))
                            },
                            removeMatch({
                                commit: e
                            }, t) {
                                e("deleteMatch", t), e("setMatchRemoved", {
                                    matchId: t,
                                    value: !0
                                })
                            }
                        }
                    }
                },
                jr = Rr,
                Fr = ({
                    groups: e,
                    hasSpecialValue: t,
                    id: a,
                    order: n,
                    outcomes: o,
                    reserveConfigId: r,
                    service: i,
                    sportId: s
                }) => ({
                    groups: e,
                    hasSpecialValue: !!t,
                    id: a,
                    order: n,
                    outcomes: o,
                    reserveConfigId: r,
                    service: i,
                    sportId: s
                });
            var $r = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const zr = {
                    namespaced: !0,
                    state: () => ({
                        loaded: !1,
                        oddBaseConfigMap: {}
                    }),
                    getters: {
                        getOddBaseConfigForTournament({
                            oddBaseConfigMap: e
                        }, t, a, n) {
                            return (t, a, o) => {
                                var r, i;
                                const s = n[`xbet/${t}/getMatchListByTournament`](o),
                                    l = null != (i = null == (r = e[t]) ? void 0 : r[a]) ? i : [];
                                return l.filter((({
                                    id: e
                                }) => !l.some((({
                                    reserveConfigId: t
                                }) => e === t)))).map((e => {
                                    if (null === e.reserveConfigId) return e;
                                    const a = s.map((({
                                        id: e
                                    }) => n[`xbet/${t}/oddMapByMatchId`][e])).flatMap((e => Object.values(null != e ? e : {}))).filter((({
                                        groupId: t
                                    }) => e.groups.includes(+t)));
                                    return 0 === a.length ? l.find((({
                                        id: t
                                    }) => t === e.reserveConfigId)) : e
                                })).sort(((e, t) => e.order - t.order))
                            }
                        }
                    },
                    actions: {
                        fetch(e) {
                            return $r(this, arguments, (function*({
                                state: e,
                                commit: t,
                                rootGetters: a
                            }, {
                                force: n
                            } = {}) {
                                if (e.loaded && !n) return;
                                const o = yield a.socket.send((0, C.$U)("odds-baseConfig"), {
                                    lang: a.currentLang
                                }), r = o.data.config.reduce(((e, t) => {
                                    const a = t.service.toLowerCase();
                                    return e[a][t.sportId] || (e[a][t.sportId] = []), e[a][t.sportId].push(Fr(t)), e
                                }), {
                                    [G.PTO]: {},
                                    [G.d_J]: {}
                                });
                                t("setOddBaseConfigMap", Object.freeze(r)), e.loaded = !0
                            }))
                        }
                    },
                    mutations: {
                        setOddBaseConfigMap(e, t) {
                            e.oddBaseConfigMap = t
                        }
                    }
                },
                Ur = ({
                    id: e,
                    name: t,
                    order: a
                }) => ({
                    id: e,
                    name: t,
                    order: a
                });
            var Zr = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const Gr = {
                    namespaced: !0,
                    state: () => ({
                        oddGroupMap: {}
                    }),
                    actions: {
                        fetch(e) {
                            return Zr(this, arguments, (function*({
                                rootGetters: e,
                                commit: t
                            }, {
                                base: a = !1
                            } = {}) {
                                var n;
                                const o = yield e.socket.send((0, C.$U)("odds-groups"), {
                                    base: a,
                                    lang: e.currentLang
                                }), r = nr(null != (n = o.data.groups) ? n : [], Ur);
                                t("setOddGroupMap", Object.freeze(r))
                            }))
                        }
                    },
                    mutations: {
                        setOddGroupMap(e, t) {
                            e.oddGroupMap = t
                        }
                    },
                    getters: {
                        getOddGroupMap(e) {
                            return e.oddGroupMap
                        },
                        oddGroupList(e, t) {
                            return Object.values(t.getOddGroupMap)
                        }
                    }
                },
                Hr = ({
                    oddTypeName: e = null,
                    oddsMap: t = null,
                    typeId: a = null,
                    subTypeId: n = null,
                    render: o = null,
                    order: r
                }) => ({
                    id: `${a}_${n}`,
                    oddTypeName: e,
                    typeId: a,
                    subTypeId: n,
                    oddsList: t,
                    render: o,
                    order: r
                }),
                qr = "main-tab",
                Vr = {
                    namespaced: !0,
                    state: {
                        oddsSelectedList: {}
                    },
                    mutations: {
                        setOddsSelectedList(e, {
                            matchId: t,
                            oddsSelectedList: a
                        }) {
                            e.oddsSelectedList[t] = a
                        }
                    },
                    getters: {
                        getTabs: (e, t, a, n) => ({
                            service: e,
                            matchId: t
                        }) => {
                            const o = n[`xbet/${e}/getOddMapBySubGameId`](t),
                                r = [];
                            Object.values(o[qr] || {}).length > 0 && r.push({
                                id: qr,
                                name: n.langCommon.tabs.all,
                                order: 0
                            });
                            const i = a.xbet[e].subgameMap || {};
                            for (const a of Object.values(i)) o[a.id] && r.push(a);
                            return r.sort(((e, t) => e.order - t.order))
                        },
                        getOddListFiltered: (e, t, a, n) => ({
                            service: a,
                            matchId: o
                        }) => {
                            var r;
                            const i = n["xbet/oddGroups/getOddGroupMap"],
                                s = n[`xbet/${a}/getOddMapBySubGameId`](o);
                            let l = t.getTabs({
                                service: a,
                                matchId: o
                            });
                            return l = (null == (r = e.oddsSelectedList[o]) ? void 0 : r.length) ? l.filter((t => e.oddsSelectedList[o].find((({
                                id: e
                            }) => t.id === e)))) : l.filter((e => e.id === qr)), l.reduce(((e, t) => {
                                const a = s[t.id],
                                    n = Object.entries(a || {}).map((([e, t]) => {
                                        const a = i[e],
                                            n = Object.values(t)[0];
                                        return Hr({
                                            oddTypeName: (null == a ? void 0 : a.name) || "",
                                            typeId: n.typeId,
                                            subTypeId: n.subTypeId,
                                            render: n.render,
                                            oddsMap: t,
                                            order: (null == a ? void 0 : a.order) || 0
                                        })
                                    })).filter((({
                                        oddTypeName: e
                                    }) => e)).sort(((e, t) => e.order - t.order));
                                return [...e, ...n]
                            }), [])
                        }
                    }
                },
                Wr = ({
                    id: e,
                    countPrematch: t,
                    countLive: a,
                    countOutright: n,
                    sportTagKey: o,
                    name: r,
                    isEsport: i,
                    iconUrl: s,
                    order: l
                }) => ({
                    id: e,
                    sportTagKey: o,
                    providerId: G.HaS,
                    countPrematch: t,
                    countLive: a,
                    countOutright: n,
                    name: r,
                    isEsport: Boolean(i),
                    iconUrl: s,
                    order: l,
                    type: rr.p.SPORT
                });
            var Yr = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const Kr = {
                namespaced: !0,
                state: () => ({
                    loaded: !1,
                    sportMap: {},
                    sportList: []
                }),
                actions: {
                    fetch(e) {
                        return Yr(this, arguments, (function*({
                            commit: e,
                            rootGetters: t,
                            rootState: a,
                            state: n
                        }, {
                            force: o,
                            needCounters: r = !0
                        } = {}) {
                            var i;
                            if (n.loaded && !o) return;
                            const s = yield t.socket.send((0, C.$U)("sports-list"), {
                                needCounters: r,
                                timeFilter: Or(a.xbet.timeFilter),
                                localeId: a.locale,
                                lang: t.currentLang
                            }), l = e => e.countPrematch + e.countOutright, c = nr(null != (i = s.data.sports) ? i : [], l);
                            e("xbet/prematch/setMatchCountBySportId", c, {
                                root: !0
                            });
                            const d = s.data.sports.map((e => Wr(e))),
                                u = nr(d);
                            e("setSportList", d), e("setSportMap", Object.freeze(u)), n.loaded = !0
                        }))
                    }
                },
                mutations: {
                    setSportMap(e, t) {
                        e.sportMap = t
                    },
                    setSportList(e, t) {
                        e.sportList = t
                    }
                },
                getters: {
                    getSportMap(e) {
                        return e.sportMap
                    }
                }
            };
            var Jr = a(963001),
                Xr = a(239370),
                Qr = a(822783),
                ei = a(674073),
                ti = a(121162),
                ai = a(759548),
                ni = 200;

            function oi(e, t, a, n) {
                var o = -1,
                    r = Xr.Z,
                    i = !0,
                    s = e.length,
                    l = [],
                    c = t.length;
                if (!s) return l;
                a && (t = (0, ei.Z)(t, (0, ti.Z)(a))), n ? (r = Qr.Z, i = !1) : t.length >= ni && (r = ai.Z, i = !1, t = new Jr.Z(t));
                e: while (++o < s) {
                    var d = e[o],
                        u = null == a ? d : a(d);
                    if (d = n || 0 !== d ? d : 0, i && u === u) {
                        var p = c;
                        while (p--)
                            if (t[p] === u) continue e;
                        l.push(d)
                    } else r(t, u, n) || l.push(d)
                }
                return l
            }
            const ri = oi;
            var ii = a(159188),
                si = a(369162),
                li = a(469581),
                ci = a(600836),
                di = a(200935),
                ui = (0, li.Z)((function(e, t) {
                    var a = (0, di.Z)(t);
                    return (0, ci.Z)(a) && (a = void 0), (0, ci.Z)(e) ? ri(e, (0, ii.Z)(t, 1, ci.Z, !0), (0, si.Z)(a, 2)) : []
                }));
            const pi = ui;
            var mi = Math.min;

            function _i(e, t, a) {
                var n = a ? Qr.Z : Xr.Z,
                    o = e[0].length,
                    r = e.length,
                    i = r,
                    s = Array(r),
                    l = 1 / 0,
                    c = [];
                while (i--) {
                    var d = e[i];
                    i && t && (d = (0, ei.Z)(d, (0, ti.Z)(t))), l = mi(d.length, l), s[i] = !a && (t || o >= 120 && d.length >= 120) ? new Jr.Z(i && d) : void 0
                }
                d = e[0];
                var u = -1,
                    p = s[0];
                e: while (++u < o && c.length < l) {
                    var m = d[u],
                        _ = t ? t(m) : m;
                    if (m = a || 0 !== m ? m : 0, !(p ? (0, ai.Z)(p, _) : n(c, _, a))) {
                        i = r;
                        while (--i) {
                            var h = s[i];
                            if (!(h ? (0, ai.Z)(h, _) : n(e[i], _, a))) continue e
                        }
                        p && p.push(_), c.push(m)
                    }
                }
                return c
            }
            const hi = _i;

            function gi(e) {
                return (0, ci.Z)(e) ? e : []
            }
            const yi = gi;
            var vi = (0, li.Z)((function(e) {
                var t = (0, di.Z)(e),
                    a = (0, ei.Z)(e, yi);
                return t === (0, di.Z)(a) ? t = void 0 : a.pop(), a.length && a[0] === e[0] ? hi(a, (0, si.Z)(t, 2)) : []
            }));
            const bi = vi;
            var fi = a(300111),
                ki = a(606982),
                wi = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));

            function Si(e) {
                let t = {};
                const a = (0, fi.Z)((() => {
                    Object.values(t).forEach((e => wi(this, null, (function*() {
                        yield Promise.all(e.map((e => e.operationDelayPromise)));
                        for (const {
                                operation: t
                            } of e) t()
                    })))), t = {}
                }), e, {
                    leading: !1,
                    trailing: !0
                });

                function n(e, n, o = null) {
                    t[n] || (t[n] = []), t[n].push({
                        operation: e,
                        operationDelayPromise: o && (0, ki.g)(o)
                    }), a()
                }
                return n
            }
            var Ci = a(301374);
            const Ii = ({
                rootGetters: e
            }, {
                match: t,
                service: a,
                providerId: n,
                matchId: o,
                timestamp: r
            }) => {
                const {
                    activeTeam: i,
                    activeTeamId: s,
                    awayTeamId: l,
                    awayTeamName: c,
                    categoryId: d,
                    dateOfMatch: u,
                    enabledOddsCount: p,
                    gameScore: m,
                    homeTeamId: _,
                    homeTeamName: h,
                    isHot: g,
                    matchScore: y,
                    matchTime: v,
                    meta: b,
                    odds: f,
                    outright: k,
                    periodsScore: w,
                    sportId: S,
                    status: C,
                    tournamentId: I,
                    externalId: O
                } = t, T = "object" === typeof h ? h[e.currentLang] || h.en : h, P = "object" === typeof c ? c[e.currentLang] || c.en : c, A = (0, Ci.Z)({
                    categoryId: d,
                    id: o,
                    matchTime: v,
                    scoreTotal: (0, or.o6)(y),
                    gameScore: (0, or.o6)(m),
                    matchScore: (0, or.o6)(y),
                    periodsScore: w,
                    scorePeriodList: (0, or.FW)(w),
                    service: a,
                    sportId: S,
                    startDateTime: 1e3 * u,
                    activeTeam: null != i ? i : s,
                    teamIdFirst: _,
                    teamIdSecond: l,
                    teamNameFirst: T,
                    teamNameSecond: P,
                    tournamentId: I,
                    status: C,
                    enabledOddsCount: p || f.length > 0,
                    meta: b,
                    providerId: n,
                    isHot: g,
                    outright: k,
                    externalId: O,
                    timestamp: r
                }), L = e[`xbet/${a}/getMatchById`](o);
                return L && (A.teamNameFirst = L.teamNameFirst, A.teamNameSecond = L.teamNameSecond), A
            };
            var Oi = Object.defineProperty,
                Ti = Object.defineProperties,
                Pi = Object.getOwnPropertyDescriptors,
                Ai = Object.getOwnPropertySymbols,
                Li = Object.prototype.hasOwnProperty,
                Bi = Object.prototype.propertyIsEnumerable,
                Mi = (e, t, a) => t in e ? Oi(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                Ei = (e, t) => {
                    for (var a in t || (t = {})) Li.call(t, a) && Mi(e, a, t[a]);
                    if (Ai)
                        for (var a of Ai(t)) Bi.call(t, a) && Mi(e, a, t[a]);
                    return e
                },
                Ni = (e, t) => Ti(e, Pi(t)),
                Di = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const xi = Si(1e3),
                Ri = e => {
                    const {
                        S1: t,
                        S2: a,
                        Sc1: n,
                        Sc2: o,
                        name: r
                    } = null != e ? e : {};
                    return {
                        Sc1: t || n || 0,
                        Sc2: a || o || 0,
                        name: r
                    }
                },
                ji = e => {
                    const t = "string" === typeof e ? JSON.parse(e) : e;
                    return t.map((e => Ri(e)))
                },
                Fi = ({
                    odds: e,
                    matchId: t,
                    lang: a,
                    providerId: n,
                    service: o
                }) => e.map((e => {
                    const r = "object" === typeof e.name ? e.name[a] || e.name.en : e.name,
                        i = "string" === typeof e.subGamesId ? JSON.parse(e.subGamesId) : e.subGamesId,
                        s = "object" === typeof e.specialValueDescription && null !== e.specialValueDescription ? e.specialValueDescription[a] || e.specialValueDescription.en : e.specialValueDescription,
                        l = "object" === typeof e.outComeDescription && null !== e.outComeDescription ? e.outComeDescription[a] || e.outComeDescription.en : e.outComeDescription;
                    return lr(Ni(Ei({}, e), {
                        meta: {
                            legacyOutcomeName: e.legacyOutcomeName
                        },
                        matchId: t,
                        name: r,
                        subGamesId: i,
                        providerId: n,
                        service: o,
                        specialValueDescription: s,
                        outComeDescription: l || r
                    }))
                })),
                $i = new Set;

            function zi(e) {
                return Di(this, null, (function*() {
                    return $i.add(e), yield new Promise((e => {
                        setTimeout(e, G.ErZ)
                    })), $i.delete(e)
                }))
            }
            const Ui = {
                    "add-new-match": "addMatch",
                    "remove-match": "removeMatch",
                    "update-match-properties": "updateMatch",
                    "add-new-odds": "addOddList",
                    "remove-odds": "removeOddList",
                    "update-odds-properties": "updateOddList",
                    "hide-tournaments": "removeTournament",
                    "hide-odds-group": "hideOddsGroup",
                    "hide-provider": "hideProvider"
                },
                Zi = {
                    actions: {
                        update(e, t) {
                            return Di(this, arguments, (function*({
                                dispatch: e
                            }, t) {
                                const a = Ui[t.type];
                                e(a, t)
                            }))
                        },
                        removeTournament(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e,
                                dispatch: t,
                                rootGetters: a
                            }, {
                                tournamentIds: n = []
                            }) {
                                var o, r;
                                e("live/deleteTournamentList", n), e("prematch/deleteTournamentList", n);
                                for (const i of n) {
                                    const e = [...Object.values(null != (o = a["xbet/live/matchMapByEntity"][rr.p.TOURNAMENT][i]) ? o : {}), ...Object.values(null != (r = a["xbet/prematch/matchMapByEntity"][rr.p.TOURNAMENT][i]) ? r : {})];
                                    for (const {
                                            service: a,
                                            sportId: n,
                                            id: o
                                        } of e) t("removeMatch", {
                                        service: a,
                                        matchId: o,
                                        sportId: n
                                    })
                                }
                            }))
                        },
                        hideOddsGroup(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e,
                                rootState: t
                            }, {
                                oddsGroupId: a,
                                tournamentIds: n
                            }) {
                                const o = Object.values(t.xbet.live.oddMap).filter((e => {
                                        const o = t.xbet.live.matchMap[e.matchId];
                                        return !o || +e.groupId === +a && n.includes(+o.tournamentId)
                                    })).map((e => e.id)),
                                    r = Object.values(t.xbet.prematch.oddMap).filter((e => {
                                        const o = t.xbet.prematch.matchMap[e.matchId];
                                        return !o || +e.groupId === +a && n.includes(+o.tournamentId)
                                    })).map((e => e.id));
                                e("live/deleteOddList", o), e("prematch/deleteOddList", r)
                            }))
                        },
                        hideProvider(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e,
                                dispatch: t,
                                rootState: a
                            }, {
                                providerId: n
                            }) {
                                t("xbet/sports/fetch", {
                                    force: !0
                                }, {
                                    root: !0
                                });
                                const o = Object.values(a.xbet.live.matchMap || {}).filter((e => e.providerId === n)),
                                    r = Object.values(a.xbet.prematch.matchMap || {}).filter((e => e.providerId === n));
                                for (const l of o) e("live/decrementMatchCountBySportId", l.sportId);
                                e("live/deleteMatchList", o.map((e => e.id))), e("prematch/deleteMatchList", r.map((e => e.id)));
                                const i = Object.values(a.xbet.live.oddMap).filter((e => o.some((t => t.id === e.matchId)))).map((e => e.id)),
                                    s = Object.values(a.xbet.prematch.oddMap).filter((e => r.some((t => t.id === e.matchId)))).map((e => e.id));
                                t("removeOddList", {
                                    service: "live",
                                    oddsIds: i
                                }), t("removeOddList", {
                                    service: "prematch",
                                    oddsIds: s
                                })
                            }))
                        },
                        addMatch(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e,
                                dispatch: t,
                                rootState: a,
                                rootGetters: n
                            }, {
                                matchId: o,
                                providerId: r = G.dPb,
                                service: i,
                                match: {
                                    activeTeam: s,
                                    awayTeamId: l,
                                    awayTeamName: c,
                                    categoryId: d,
                                    dateOfMatch: u,
                                    enabledOddsCount: p,
                                    gameScore: m,
                                    homeTeamId: _,
                                    homeTeamName: h,
                                    isHot: g,
                                    matchScore: y,
                                    matchTime: v,
                                    meta: b,
                                    odds: f = [],
                                    periodsScore: k,
                                    sportId: w,
                                    status: S,
                                    tournamentId: C,
                                    outright: I
                                }
                            }) {
                                var O;
                                if (a.xbet[i].matchMap[o]) return;
                                if (!(yield zi(o))) return;
                                if (!a.xbet[i].tournamentMap[C]) {
                                    const a = yield t(`xbet/${i}/loadTournaments`, {
                                        tournamentIds: [C]
                                    }, {
                                        root: !0
                                    }), n = Object.values(a)[0];
                                    if (void 0 === n) return;
                                    e(`${i}/addTournament`, n)
                                }
                                if (a.xbet.sports.sportMap[w] || (yield t("xbet/sports/fetch", {
                                        force: !0
                                    }, {
                                        root: !0
                                    })), (null == (O = a.xbet[i].tournamentMap[C]) ? void 0 : O.providerId) !== r) return;
                                const T = "object" === typeof h ? h[n.currentLang] || h.en : h,
                                    P = "object" === typeof c ? c[n.currentLang] || c.en : c,
                                    A = (0, Ci.Z)({
                                        categoryId: d,
                                        id: o,
                                        matchTime: v,
                                        scoreTotal: Ri(y),
                                        gameScore: Ri(m),
                                        periodsScore: k,
                                        scorePeriodList: ji(k),
                                        service: i,
                                        sportId: w,
                                        startDateTime: 1e3 * u,
                                        activeTeam: s,
                                        teamIdFirst: _,
                                        teamIdSecond: l,
                                        teamNameFirst: T,
                                        teamNameSecond: P,
                                        tournamentId: C,
                                        status: S,
                                        enabledOddsCount: p || f.length > 0,
                                        meta: b,
                                        providerId: r,
                                        isHot: g,
                                        outright: I
                                    });
                                e(`${i}/addMatch`, A), e(`${i}/setMatchRemoved`, {
                                    matchId: o,
                                    value: !1
                                }), e(`${i}/incrementMatchCountBySportId`, w), t("addOddList", {
                                    service: i,
                                    matchId: o,
                                    odds: f,
                                    providerId: r
                                })
                            }))
                        },
                        removeMatch(e, t) {
                            return Di(this, arguments, (function*({
                                rootState: e,
                                commit: t,
                                dispatch: a
                            }, {
                                service: n,
                                matchId: o,
                                sportId: r
                            }) {
                                if ($i.delete(o), e.xbet[n].matchMap[o]) {
                                    a(`${n}/removeMatch`, o), t(`${n}/decrementMatchCountBySportId`, r);
                                    const i = Object.values(e.xbet[n].oddMap).filter((e => +e.matchId === +o)).map((e => e.id));
                                    t(`xbet/${n}/deleteOddList`, i, {
                                        root: !0
                                    })
                                }
                            }))
                        },
                        updateMatch(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e
                            }, {
                                matchId: t,
                                service: a,
                                updatedProperties: n,
                                timestamp: o
                            }) {
                                e(`${a}/updateMatch`, (0, or.IE)(Ni(Ei({
                                    id: t
                                }, n), {
                                    timestamp: o
                                })))
                            }))
                        },
                        matchSnapshot(e, t) {
                            return Di(this, arguments, (function*({
                                rootState: e,
                                rootGetters: t,
                                commit: a,
                                dispatch: n
                            }, {
                                service: o,
                                matchId: r,
                                providerId: i,
                                match: s,
                                timestamp: l
                            }) {
                                const c = (0, or.IE)(Ni(Ei({}, Ii({
                                    rootGetters: t
                                }, {
                                    match: s,
                                    service: o,
                                    providerId: i,
                                    timestamp: l,
                                    matchId: r
                                })), {
                                    id: r
                                }));
                                a(`${o}/updateMatch`, c), a(`${o}/setMatchRemoved`, {
                                    matchId: r,
                                    value: !1
                                });
                                const d = Object.values(e.xbet[o].oddMap).filter((e => +e.matchId === +r)),
                                    u = pi(d, s.odds, (e => e.id)),
                                    p = pi(s.odds, d, (e => e.id)).map((e => Ni(Ei({}, e), {
                                        timestamp: l
                                    }))),
                                    m = bi(s.odds, d, (e => e.id)).map((e => Ni(Ei({}, e), {
                                        timestamp: l
                                    })));
                                n("removeOddList", {
                                    service: o,
                                    matchId: s.id,
                                    oddsIds: u.map((e => e.id))
                                }), n("updateOddList", {
                                    service: o,
                                    providerId: i,
                                    matchId: r,
                                    odds: m
                                }), n("addOddList", {
                                    service: o,
                                    providerId: i,
                                    matchId: r,
                                    odds: p
                                })
                            }))
                        },
                        addOddList(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e,
                                rootGetters: t
                            }, {
                                service: a,
                                matchId: n,
                                odds: o,
                                providerId: r
                            }) {
                                const i = `${a}_${n}`,
                                    s = Fi({
                                        odds: o,
                                        matchId: n,
                                        providerId: r,
                                        service: a,
                                        lang: t.currentLang
                                    });
                                xi((() => e(`xbet/${a}/addOddList`, s, {
                                    root: !0
                                })), i, 300)
                            }))
                        },
                        removeOddList(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e,
                                dispatch: t,
                                rootState: a,
                                rootGetters: n
                            }, {
                                service: o,
                                oddsIds: r,
                                matchId: i
                            }) {
                                const s = `${o}_${i}`,
                                    {
                                        oddMap: l
                                    } = a.xbet[o],
                                    c = n["coupon/activeCouponsList"],
                                    d = r.filter((e => l[e] && c.some((t => t.id === e))));
                                for (const u of d) t("coupon/deleteCoupon", u, {
                                    root: !0
                                });
                                xi((() => e(`${o}/deleteOddList`, r)), s)
                            }))
                        },
                        updateOddList(e, t) {
                            return Di(this, arguments, (function*({
                                commit: e,
                                rootGetters: t,
                                rootState: a
                            }, {
                                service: n,
                                odds: o,
                                matchId: r,
                                providerId: i
                            }) {
                                const s = `${n}_${r}`,
                                    {
                                        oddMap: l
                                    } = a.xbet[n];
                                xi((() => e(`${n}/updateOddList`, Fi({
                                    odds: o.filter((e => l[e.id])).map((e => Ei(Ei({}, l[e.id]), e))),
                                    matchId: r,
                                    service: n,
                                    providerId: i,
                                    lang: t.currentLang
                                }))), s)
                            }))
                        }
                    }
                },
                Gi = Zi;
            var Hi = (e, t, a) => new Promise(((n, o) => {
                var r = e => {
                        try {
                            s(a.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    i = e => {
                        try {
                            s(a.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                s((a = a.apply(e, t)).next())
            }));
            const qi = {
                    namespaced: !0,
                    modules: {
                        api: Sr,
                        [G.PTO]: jr(G.PTO),
                        [G.d_J]: jr(G.d_J),
                        update: Gi,
                        sports: Kr,
                        oddGroups: Gr,
                        oddBaseConfig: zr,
                        oddTabs: Vr
                    },
                    state: () => ({
                        timeFilter: null
                    }),
                    getters: {
                        matchHaveBroadcast: () => e => !G.RbG && "string" === typeof e.meta.broadcastUrl,
                        matchBroadcastUrl: () => e => e.meta.broadcastUrl
                    },
                    mutations: {
                        setTimeFilter(e, t) {
                            e.timeFilter = t
                        }
                    },
                    actions: {
                        loadDataBase(e) {
                            return Hi(this, arguments, (function*({
                                dispatch: e
                            }, {
                                force: t,
                                needCounters: a
                            } = {}) {
                                yield Promise.all([e("sports/fetch", {
                                    force: t,
                                    needCounters: a
                                }), e("oddGroups/fetch", {
                                    force: t
                                }), e("oddBaseConfig/fetch")])
                            }))
                        }
                    }
                },
                Vi = qi,
                Wi = {
                    bets: Q,
                    betsCustom: me,
                    countryInfo: ge,
                    coupon: Ae,
                    detailing: ft,
                    favourites: Mt,
                    lang: Et.Z,
                    leaderboard: Rt,
                    loyalty: Qt,
                    money: Za,
                    offer: Wa,
                    p2p: cn,
                    permissions: dn,
                    promise: kt.Z,
                    registrationTypeList: pn,
                    rules: Pn,
                    socket: No,
                    verification: Jo,
                    vouchers: Qo,
                    widgets: tr,
                    xbet: Vi
                },
                Yi = () => {
                    na.vuexStore.hotUpdate({
                        getters: ta,
                        actions: ea,
                        mutations: aa
                    });
                    for (const [e, t] of Object.entries(Wi)) na.vuexStore.registerModule(e, t)
                }
        },
        724120: (e, t, a) => {
            "use strict";
            a.d(t, {
                K: () => K,
                r: () => J
            });
            var n = a(567476),
                o = a(602262),
                r = a(166252),
                i = a(322201),
                s = a(399925),
                l = a(920346),
                c = a(982090);
            const d = "an-20802-push-modal",
                u = "group_b",
                p = "group_c",
                m = "group_d",
                _ = "group_e",
                h = () => {
                    const {
                        value: e
                    } = (0, c.y)(d), t = (0, r.Fl)((() => {
                        switch (e.value) {
                            case u:
                                return "withoutBonusB";
                            case p:
                                return "withoutBonusC";
                            case m:
                                return "withoutBonusD";
                            case _:
                                return "withoutBonusE";
                            default:
                                return ""
                        }
                    }));
                    return {
                        currentText: t
                    }
                };
            var g = a(884297),
                y = a(198876),
                v = a(497242),
                b = a(631127),
                f = a(95575),
                k = a(903673),
                w = a(800231),
                S = a(644540),
                C = Object.defineProperty,
                I = Object.defineProperties,
                O = Object.getOwnPropertyDescriptors,
                T = Object.getOwnPropertySymbols,
                P = Object.prototype.hasOwnProperty,
                A = Object.prototype.propertyIsEnumerable,
                L = (e, t, a) => t in e ? C(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                B = (e, t) => {
                    for (var a in t || (t = {})) P.call(t, a) && L(e, a, t[a]);
                    if (T)
                        for (var a of T(t)) A.call(t, a) && L(e, a, t[a]);
                    return e
                },
                M = (e, t) => I(e, O(t));
            const E = () => {
                const e = (0, l.Fe)(),
                    t = (0, w.u)(),
                    a = (0, w.u)(),
                    n = (0, w.u)(),
                    o = (0, r.Fl)((() => S.A ? "android-apk" : e.pwa.any && e.mobile.apple.any ? "pwa-IOS" : e.pwa.any && e.mobile.android.any ? "pwa-android" : e.mobile.any ? "web-mobile" : "web-desktop")),
                    i = () => t({
                        name: "MS-SUBSCRIPTION-BONUS:v1-push-bonus-meta",
                        payload: {
                            deviceType: o.value
                        }
                    }),
                    s = (e, t = !0, a, r) => n({
                        name: "PROXY-SERVICE-CDP:v1-user-device-register",
                        payload: M(B({}, a ? {
                            userId: a
                        } : {}), {
                            token: e,
                            platform: "WEB",
                            provider: "GMS",
                            isEnablePush: t,
                            meta: {
                                deviceType: o.value,
                                popupId: r
                            }
                        })
                    }),
                    c = (e, t) => a({
                        name: "PROXY-SERVICE-CDP:v1-user-device-revokeToken",
                        payload: {
                            deviceToken: e,
                            reason: t
                        }
                    });
                return {
                    userMetaRequest: i,
                    registerDevice: s,
                    revokeToken: c
                }
            };
            var N = a(563637);
            const D = {
                    notificationsTurnedOn: "success",
                    getCoinsLater: "open",
                    allowMessagesLater: "open"
                },
                x = {
                    notificationsTurnedOn: {
                        title: "notificationsTurnedOnTitle",
                        message: "notificationsTurnedOnDescription"
                    },
                    getCoinsLater: {
                        title: "getCoinsLaterTitle",
                        message: "getCoinsLaterDescription"
                    },
                    allowMessagesLater: {
                        title: "allowMessagesLaterTitle",
                        message: "allowMessagesLaterDescription"
                    }
                },
                R = () => {
                    const e = (0, l.lm)(),
                        t = (0, l.Jr)("common.pushNotificationsPopup.messages"),
                        a = (a, n) => {
                            const o = t[x[a].title],
                                r = t[x[a].message],
                                i = void 0 === n ? o : (0, N.Uw)(o, n),
                                s = void 0 === n ? r : (0, N.Uw)(r, n);
                            e[D[a]](s, {
                                props: {
                                    title: i
                                }
                            })
                        },
                        n = a => {
                            let n;
                            n = a ? S.A ? t.blockedNotificationsApk : t.blockedNotifications : S.A ? t.blockedNotificationsApkNoBonus : t.blockedNotificationsNoBonus, e.error((0, N.Uw)(n, "🔒", null != a ? a : ""))
                        };
                    return {
                        showMessage: a,
                        showPermissionDeniedMessage: n
                    }
                },
                j = "notification-subscription-refused",
                F = e => `${j}-${e}`,
                $ = e => g.J_.getOr(F(e), {}),
                z = (e, t) => {
                    g.J_.set(F(e), t)
                },
                U = () => {
                    const e = e => {
                            var t;
                            const a = $(e),
                                n = null == (t = f.vuexStore.getters.user) ? void 0 : t.id;
                            n && (a[n] = Date.now(), z(e, a))
                        },
                        t = e => {
                            var t;
                            const a = $(e)[null == (t = f.vuexStore.getters.user) ? void 0 : t.id];
                            return a ? new Date(a) : void 0
                        };
                    return {
                        setSubscriptionRefusedDate: e,
                        getSubscriptionRefusedDate: t
                    }
                };
            var Z = a(878417),
                G = a(112808),
                H = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const q = 1728e5,
                V = 6048e5,
                W = "notifications-user-id",
                Y = "prev-user-firebase-token",
                K = e => {
                    var t;
                    return `${e} ${G.appConfig.options.coinsCurrencyName}${(null==(t=G.appConfig.options.coinsCurrencyName)?void 0:t.endsWith("s"))?"":"s"}`
                },
                J = (0, n.Q_)("notificationsStore", (() => {
                    const e = (0, Z.L)(),
                        t = (0, i.yj)(),
                        a = (0, l.lm)(),
                        {
                            userMetaRequest: n,
                            registerDevice: c,
                            revokeToken: d
                        } = E(),
                        {
                            showMessage: u,
                            showPermissionDeniedMessage: p
                        } = R(),
                        {
                            getSubscriptionRefusedDate: m,
                            setSubscriptionRefusedDate: _
                        } = U(),
                        {
                            currentText: w
                        } = h(),
                        S = (0, o.iH)(!1),
                        C = (0, o.iH)(!1),
                        I = (0, o.iH)(!1),
                        O = (0, o.iH)(),
                        T = (0, o.iH)(!1),
                        P = (0, o.iH)(0),
                        A = (0, o.iH)(),
                        L = (0, o.iH)(),
                        B = (0, o.iH)(!1),
                        M = (0, r.Fl)((() => T.value && P.value > 0)),
                        N = (0, r.Fl)((() => M.value && 100 === P.value && w.value.length > 0)),
                        D = (0, r.Fl)((() => B.value && t.matched.every((e => !e.meta[s.cT])))),
                        x = () => H(void 0, null, (function*() {
                            var e, t;
                            const [a, n] = yield Promise.all([null == (t = (e = y["default"].controller).isNotAllRequiredPluginsImplemented) ? void 0 : t.call(e), y["default"].controller.isOk()]);
                            return !a && n
                        })),
                        j = () => H(void 0, null, (function*() {
                            const {
                                success: e,
                                reason: t,
                                data: a
                            } = yield n();
                            e && a ? (O.value = a.status, T.value = a.isBonusDomain, P.value = a.nextCoinAccrual, A.value = a.currentStatusSince ? new Date(a.currentStatusSince) : void 0, L.value = a.token) : console.error("Error loading user notification meta", null != t ? t : a)
                        })),
                        F = () => {
                            M.value ? u("getCoinsLater", K(P.value)) : u("allowMessagesLater")
                        },
                        $ = (e = 6e4, t = 2e3) => new Promise((a => {
                            const n = Date.now(),
                                o = () => {
                                    const r = y["default"].controller.isPermissionsDenied();
                                    r ? Date.now() - n >= e ? a(!1) : setTimeout(o, t) : a(!0)
                                };
                            o()
                        })),
                        z = e => H(void 0, null, (function*() {
                            if (!(0, b.isAndroidBridge)() && (yield y["default"].controller.isPermissionsDenied())) return p(M.value ? K(P.value) : void 0), !1;
                            if ((0, b.isAndroidBridge)() && (yield y["default"].controller.isPermissionsDenied())) {
                                (0, v.requestNotificationsPermission)();
                                const e = yield $();
                                if (!e) return !1
                            }
                            try {
                                S.value = !0;
                                const t = yield y["default"].controller.start();
                                if (!t) throw new Error("No token");
                                g.J_.set(Y, t);
                                const a = O.value === k.G.ACTIVE && L.value && L.value !== t;
                                return a && L.value && (yield d(L.value, "REFRESH")), (O.value !== k.G.ACTIVE || a) && (yield c(t, !0, void 0, e), M.value && u("notificationsTurnedOn", K(P.value)), O.value = k.G.ACTIVE), !0
                            } catch (t) {
                                return console.error(t), !1
                            } finally {
                                S.value = !1
                            }
                        })),
                        G = () => H(void 0, null, (function*() {
                            const e = m("unsubscribe");
                            (e && Date.now() - Number(e) > V || !e && Date.now() - Number(A.value) > q) && (B.value = !0)
                        })),
                        J = () => H(void 0, null, (function*() {
                            if (yield y["default"].controller.isPermissionsGranted()) return void(yield z());
                            if (O.value === k.G.ACTIVE && L.value) return yield d(L.value, "UNSUBSCRIBE"), O.value = k.G.UNSUBSCRIBE, void((0, b.isAndroidBridge)() && y["default"].controller.stop());
                            if (O.value === k.G.UNSUBSCRIBE) return void(yield G());
                            const e = m("default");
                            e && Date.now() - Number(e) < V || (B.value = !0)
                        })),
                        X = e => H(void 0, null, (function*() {
                            const t = yield z(e);
                            t ? B.value = !1 : a.error("Failed to enable notifications")
                        })),
                        Q = () => {
                            _(O.value === k.G.UNSUBSCRIBE ? "unsubscribe" : "default"), F(), B.value = !1
                        },
                        ee = () => H(void 0, null, (function*() {
                            const e = g.J_.get(W),
                                t = f.vuexStore.getters.user.id,
                                a = g.J_.get(Y);
                            e && e !== t && a && (yield c(a, !1, e)), g.J_.set(W, t)
                        })),
                        te = () => H(void 0, null, (function*() {
                            C.value = yield x(), C.value && (0, r.YP)((() => e.isAuthed), (e => H(void 0, null, (function*() {
                                e ? (yield ee(), yield j(), I.value = !0, yield J()) : I.value = !1
                            }))), {
                                immediate: !0
                            })
                        }));
                    return te(), {
                        arePushesAvailable: C,
                        isUserMetaFetched: I,
                        isSubscriptionPending: S,
                        subscriptionStatus: O,
                        isPopupOpened: D,
                        isWithBonus: M,
                        currentText: w,
                        bonusAmount: P,
                        trySubscribe: z,
                        onConfirmButtonClick: X,
                        isTestTextShown: N,
                        onRefuseButtonClick: Q
                    }
                }))
        },
        903673: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => n
            });
            const n = {
                UNKNOWN_OR_PROVIDER_ERROR: 0,
                UNSUBSCRIBE: 1,
                ACTIVE: 2,
                REFRESH: 3,
                NOT_SUBSCRIBED: 4
            }
        },
        995751: (e, t, a) => {
            "use strict";
            a.d(t, {
                r: () => I
            });
            var n = a(166252),
                o = a(81948),
                r = a(920346),
                i = a(945436),
                s = a(375189),
                l = a(878417),
                c = a(112808),
                d = Object.defineProperty,
                u = Object.defineProperties,
                p = Object.getOwnPropertyDescriptors,
                m = Object.getOwnPropertySymbols,
                _ = Object.prototype.hasOwnProperty,
                h = Object.prototype.propertyIsEnumerable,
                g = (e, t, a) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                y = (e, t) => {
                    for (var a in t || (t = {})) _.call(t, a) && g(e, a, t[a]);
                    if (m)
                        for (var a of m(t)) h.call(t, a) && g(e, a, t[a]);
                    return e
                },
                v = (e, t) => u(e, p(t)),
                b = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const f = () => {
                    const e = (0, l.L)(),
                        t = (0, i.gD)(),
                        a = (0, s.l)(),
                        {
                            cdpSseReady: d,
                            initToken: u,
                            initCdpSse: p,
                            closeCdpServiceEvents: m,
                            popupsSubscribe: _,
                            notificationsSubscribe: h
                        } = (0, r.AZ)();
                    (0, n.YP)((() => e.isAuthed), (e => b(void 0, null, (function*() {
                        e ? (yield p(), c.appConfig.modules.cdpPopups && _(y(y({}, [...o.N9].reduce(((e, a) => v(y({}, e), {
                            [a]: t.resolveBonusPushCDP
                        })), {})), c.appConfig.modules.loyaltyProgram ? {
                            "loyalty-levelup": a.resolveLoyaltyPushCDP
                        } : {})), h()) : (d.value && m(), u.value = void 0)
                    }))))
                },
                k = e => {
                    const t = (0, l.L)();
                    (0, n.YP)((() => t.isAuthed), (() => {
                        e.dispatch("coupon/updateCoupons")
                    }))
                },
                w = e => {
                    const t = (0, l.L)();
                    (0, n.YP)((() => t.isAuthed), (t => {
                        t ? e.dispatch("loyalty/getPoints") : e.commit("loyalty/setPoints", null)
                    }))
                };
            var S = a(95575);
            const C = e => {
                    const t = (0, l.L)();
                    (0, n.YP)((() => t.isAuthed), (() => {
                        e.state.verification.email.isModuleActive && e.commit("verification/email/resetState"), e.getters["verification/phone/isModuleActive"] && e.commit("verification/phone/resetState")
                    }))
                },
                I = () => {
                    k(S.vuexStore), w(S.vuexStore), C(S.vuexStore), f()
                }
        },
        894987: (e, t, a) => {
            "use strict";
            a.d(t, {
                O: () => n
            });
            var n = (e => (e["VIP"] = "VIP", e))(n || {})
        },
        809329: (e, t, a) => {
            "use strict";
            a.d(t, {
                w: () => n
            });
            var n = (e => (e["MOBILE"] = "mobile", e["DESKTOP"] = "desktop", e))(n || {})
        },
        845919: (e, t, a) => {
            "use strict";
            a.d(t, {
                ResponsivePictureTypesEnum: () => r,
                X: () => s
            });
            var n = a(934405);
            const o = [1, 2, 3],
                r = Object.freeze({
                    DUMMY: {
                        name: "dummy",
                        width: 100,
                        scaleSizes: [1]
                    },
                    BANNER_DESKTOP_MAIN: {
                        name: "banner_desktop_main",
                        width: 1123,
                        scaleSizes: o
                    },
                    BANNER_DESKTOP_BETS: {
                        name: "banner_desktop_bets",
                        width: 1303,
                        scaleSizes: o
                    },
                    BANNER_DESKTOP_CASINO: {
                        name: "banner_desktop_casino",
                        width: 1055,
                        scaleSizes: o
                    },
                    BANNER_MOBILE: {
                        name: "banner_mobile",
                        width: 384,
                        scaleSizes: [1, 2, 3, 4, 5]
                    },
                    CASINO_HOME: {
                        name: "casino_home",
                        width: 255,
                        scaleSizes: [1, 2]
                    },
                    CASINO_LIST_BIG: {
                        name: "casino_list_big",
                        width: 210,
                        scaleSizes: [1, 2]
                    },
                    CASINO_LIST_MEDIUM: {
                        name: "casino_list_medium",
                        width: 99,
                        scaleSizes: [1, 2]
                    },
                    TV_DESKTOP_SLIDER: {
                        name: "tv_desktop_slider",
                        width: 137,
                        scaleSizes: o
                    },
                    TV_DESKTOP_CARD: {
                        name: "tv_desktop_card",
                        width: 154,
                        scaleSizes: o
                    },
                    TV_DESKTOP_POSTER: {
                        name: "tv_desktop_poster",
                        width: 240,
                        scaleSizes: o
                    },
                    TV_MOBILE_SLIDER: {
                        name: "tv_mobile_slider",
                        width: 79,
                        scaleSizes: o
                    },
                    TV_MOBILE_CARD: {
                        name: "tv_mobile_card",
                        width: 90,
                        scaleSizes: o
                    },
                    TV_MOBILE_POSTER: {
                        name: "tv_mobile_poster",
                        scaleSizes: [1]
                    },
                    СDP_NOTIFICATION_FEED_MAIN: {
                        name: "cdp_notification_feed_main",
                        width: 286,
                        scaleSizes: [2, 3]
                    },
                    CDP_NOTIFICATION_POPUP_BIG: {
                        name: "cdp_notification_popup_big",
                        width: 390,
                        scaleSizes: [2, 3]
                    },
                    CDP_NOTIFICATION_POPUP_SMALL: {
                        name: "cdp_notification_popup_small",
                        width: 55,
                        scaleSizes: [2, 3]
                    }
                }),
                i = Object.values(r),
                s = (0, n.kw)(i)
        },
        816243: (e, t, a) => {
            "use strict";
            a.d(t, {
                _: () => o
            });
            var n = a(929948);

            function o() {
                const e = n.Z.getPartnerSearchParams();
                if (!e || 0 === Object.keys(e).length) return;
                const t = new URLSearchParams(window.location.search),
                    a = new URLSearchParams;
                for (const [n, i] of Object.entries(e)) i && a.set(n, i), t.delete(n);
                const o = `${t.toString()}&${a.toString()}`.replace(/^&+|&+$/g, ""),
                    r = o ? `?${o}` : "";
                window.location.search !== r && window.history.replaceState(window.history.state, "", `${window.location.pathname}${r}`)
            }
        },
        813627: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => i
            });
            var n = a(982090),
                o = a(479810),
                r = a(95575);

            function i(e, t) {
                var a;
                const i = !1;
                if (i) return void console.warn("Betting error was not sent from local frontend with production");
                const s = r.vuexStore.getters.isMobile,
                    l = null == (a = r.vuexStore.getters.user) ? void 0 : a.id,
                    c = "https://match-storage-parsed.monxxnom.com";
                if (!c) return;
                const d = `${c}/monitoring`,
                    {
                        experiment: u
                    } = (0, n.i)(),
                    p = Object.entries(u.all()),
                    m = p.length > 0 ? Object.fromEntries(p.map((([e, t]) => [e, t.key]))) : void 0;
                o.apiClient.get(d, {
                    params: {
                        type: e,
                        userId: l,
                        flags: m ? JSON.stringify(m) : void 0,
                        deviceType: s ? "mobile" : "desktop",
                        countryCode: r.vuexStore.state.country,
                        payload: t ? JSON.stringify(t) : void 0
                    }
                }).catch((() => {
                    console.error("Can not track betting error")
                }))
            }
        },
        240380: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = e => e.charAt(0).toUpperCase() + e.slice(1)
        },
        536452: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => o,
                o: () => r
            });
            let n = 0;
            const o = e => (n += 1, {
                    id: String(n),
                    status: e
                }),
                r = (e, t) => Array.from({
                    length: e
                }).fill(t).map((e => o(e)))
        },
        200847: (e, t, a) => {
            "use strict";
            a.d(t, {
                q: () => o,
                v: () => r
            });
            var n = a(313871);
            const o = e => (0, n.Z)(e, "id").join("?"),
                r = e => e.split("?")
        },
        730259: (e, t, a) => {
            "use strict";
            a.d(t, {
                n: () => r,
                p: () => i
            });
            var n = a(669671),
                o = (e, t, a) => new Promise(((n, o) => {
                    var r = e => {
                            try {
                                s(a.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        i = e => {
                            try {
                                s(a.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
                    s((a = a.apply(e, t)).next())
                }));
            const r = e => fetch(`${e}/1.txt?${Date.now()}`).then((e => e.text())).then((e => "fuckrkn" === e.trim())).catch((() => !1)),
                i = (e, t = 5) => o(void 0, null, (function*() {
                    return [
                        [e[0]], ...(0, n.Z)(e.slice(1), t)
                    ].reduce(((e, t) => o(void 0, null, (function*() {
                        const a = yield e;
                        return a || Promise.any(t.map((e => fetch(`https://${e}/1.txt?${Date.now()}`).then((e => e.text())).then((t => {
                            if ("fuckrkn" !== t.trim()) throw new Error("Wrong content");
                            return e
                        }))))).catch((() => null))
                    }))), null)
                }))
        },
        545931: (e, t, a) => {
            "use strict";
            a.d(t, {
                f: () => r
            });
            var n = a(438643),
                o = Math.pow;
            const r = (e, t) => {
                const a = n.Mf[t];
                if (!a) return console.warn(`Currency ${t} is not supported`), e;
                const {
                    decimals: r
                } = a;
                return null == r ? e : Math.floor(e * o(10, r)) / o(10, r)
            }
        },
        544579: (e, t, a) => {
            "use strict";
            a.d(t, {
                Gf: () => f,
                Kv: () => b,
                Pw: () => h,
                QT: () => _,
                Sj: () => v,
                Te: () => g,
                qD: () => y
            });
            var n = a(510760),
                o = a(998424),
                r = a.n(o),
                i = a(3521),
                s = a(716082),
                l = a(548173),
                c = a(240380);
            const d = new RegExp("(\\p{L}|\\s)", "u"),
                u = e => Array.from({
                    length: e.length
                }).fill(d),
                p = new Set([s.bP.LANG_EN.isoKey, s.bP.LANG_RU.isoKey, s.bP.LANG_UA.isoKey, s.bP.LANG_KZ.isoKey, s.bP.LANG_PT.isoKey, s.bP.LANG_ES.isoKey, s.bP.LANG_DE.isoKey, s.bP.LANG_FR.isoKey, s.bP.LANG_BD.isoKey, s.bP.LANG_MX.isoKey, s.bP.LANG_TR.isoKey]),
                m = {
                    [l.fr.DUPLICATED_IDENTITY]: "duplicatedIdentity",
                    [l.fr.ADULT]: "MinAgeValidator(data.dob)"
                },
                _ = {
                    [l.A9.CPF_NUMBER]: {
                        placeholder: "132.123.123-12",
                        mask: [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/],
                        normalizePayloadValue: e => e.replace(/[.-]/g, ""),
                        validators: {
                            [`kyc${(0,c.Z)(l.A9.CPF_NUMBER)}`]: n.C1
                        }
                    },
                    [l.A9.DOB]: {
                        placeholder: "11.05.1995",
                        mask: [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/],
                        pipe: r()("dd.mm.yyyy", {
                            minYear: (new Date).getFullYear() - 100,
                            maxYear: (new Date).getFullYear()
                        }),
                        normalizeInitialValue: e => {
                            const [t, a, n] = e.split("-");
                            return `${n}.${a}.${t}`
                        },
                        normalizePayloadValue: e => {
                            const [t, a, n] = e.split(".");
                            return `${n}-${a}-${t}`
                        },
                        validators: {
                            [`kyc${(0,c.Z)(l.A9.DOB)}`]: n.C1
                        }
                    },
                    [l.A9.TIN_NUMBER]: {
                        placeholder: "12345678910",
                        mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
                        normalizePayloadValue: e => e,
                        validators: {
                            [`kyc${(0,c.Z)(l.A9.TIN_NUMBER)}`]: n.C1
                        }
                    },
                    [l.A9.FIRST_NAME]: {
                        mask: u,
                        pipe: e => (0, c.Z)(e),
                        normalizePayloadValue: e => e,
                        validators: {
                            [`kyc${(0,c.Z)(l.A9.FIRST_NAME)}`]: n.C1
                        }
                    },
                    [l.A9.LAST_NAME]: {
                        mask: u,
                        pipe: e => (0, c.Z)(e),
                        normalizePayloadValue: e => e,
                        validators: {
                            [`kyc${(0,c.Z)(l.A9.LAST_NAME)}`]: n.C1
                        }
                    }
                },
                h = e => {
                    switch (e) {
                        case l.NZ.KYC_BR:
                        case l.NZ.KYC_TR:
                            return l.K4.INTERNAL_NATIVE;
                        default:
                            return l.K4.NATIVE
                    }
                },
                g = e => {
                    switch (e) {
                        case l.NZ.KYC_BR:
                            return [l.A9.CPF_NUMBER, l.A9.DOB];
                        case l.NZ.KYC_TR:
                            return [l.A9.TIN_NUMBER, l.A9.FIRST_NAME, l.A9.LAST_NAME, l.A9.DOB];
                        default:
                            return []
                    }
                },
                y = e => {
                    const {
                        status: t
                    } = e;
                    return "unused" === t ? e.verificationsCount > 0 ? l.sF.ERROR : l.sF.DEFAULT : "invalid" === t ? l.sF.ERROR : "valid" === t ? l.sF.SUCCESS : l.sF.PENDING
                },
                v = (e, t, a) => a.map((t => [t, e[t]])).reduce(((e, [a, n]) => {
                    if (void 0 !== n) {
                        const o = _[a].normalizeInitialValue,
                            r = o ? o(n) : n,
                            {
                                conformedValue: s
                            } = (0, i.conformToMask)(r, _[a].mask, {
                                guide: !1
                            });
                        return [...e, {
                            type: a,
                            status: t === l.sF.ERROR ? l.sF.DEFAULT : t,
                            value: s,
                            disabled: [l.sF.SUCCESS, l.sF.PENDING].includes(t)
                        }]
                    }
                    return e
                }), []),
                b = e => {
                    const t = s.bP.getByLang(window.lang.defaultState.lang),
                        a = t && p.has(t.isoKey) ? t.isoKey : s.bP.LANG_EN.isoKey;
                    return `${e}?lang=${a}`
                },
                f = (e, t) => {
                    var a, n, o, r;
                    const i = null == (n = null == (a = t.data) ? void 0 : a.message) ? void 0 : n.endsWith(m[l.fr.DUPLICATED_IDENTITY]);
                    if (i && e[0]) return {
                        document: e[0],
                        errorLangCode: l.fr.DUPLICATED_IDENTITY
                    };
                    const s = null == (r = null == (o = t.data) ? void 0 : o.message) ? void 0 : r.startsWith(m[l.fr.ADULT]);
                    return s && e.includes(l.A9.DOB) ? {
                        document: l.A9.DOB,
                        errorLangCode: l.fr.ADULT
                    } : void 0
                }
        },
        814670: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => r
            });
            const n = (e, t = {}) => {
                    if (!Array.isArray(e)) return e;
                    const a = e.find((e => {
                        var a;
                        const {
                            dir: n
                        } = null != (a = e.traits) ? a : {};
                        return void 0 === t.dir || n === t.dir
                    }));
                    return null != a ? a : e[0]
                },
                o = e => e ? "string" === typeof e ? [{
                    value: e,
                    traits: {
                        dir: "ltr"
                    }
                }] : Array.isArray(e) ? e : [{
                    value: e,
                    traits: {
                        dir: "ltr"
                    }
                }] : [],
                r = (e, t) => {
                    if ("string" === typeof e) return e;
                    const a = o(e);
                    if (0 === a.length) return;
                    const r = n(a, {
                        dir: t
                    }).value;
                    return "string" === typeof r ? r : r.src
                }
        },
        474376: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o,
                q: () => n
            });
            const n = () => {
                    const {
                        clientWidth: e
                    } = document.body;
                    document.body.style.overflow = "hidden", document.body.style.paddingRight = document.body.clientWidth - e + "px"
                },
                o = () => {
                    document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow")
                }
        },
        207945: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => o,
                p: () => r
            });
            var n = a(166252);
            const o = Symbol(""),
                r = (0, n.aZ)({
                    props: ["value"],
                    setup(e, {
                        slots: t
                    }) {
                        return (0, n.JJ)(o, e.value), () => {
                            var e;
                            return null == (e = t.default) ? void 0 : e.call(t)
                        }
                    }
                })
        },
        455239: (e, t, a) => {
            "use strict";
            a.d(t, {
                g: () => o
            });
            var n = a(602262);
            const o = e => {
                const t = (0, n.iH)(),
                    a = a => {
                        clearTimeout(t.value), t.value = setTimeout((() => {
                            a(), t.value = void 0
                        }), e)
                    },
                    o = () => {
                        clearTimeout(t.value), t.value = void 0
                    };
                return {
                    runWithDelay: a,
                    clearDelay: o
                }
            }
        },
        282950: (e, t, a) => {
            "use strict";
            a.d(t, {
                q: () => i
            });
            var n = a(93356),
                o = a(602262),
                r = a(455239);
            const i = ({
                value: e = !1,
                delay: t = 0,
                callback: a
            } = {}) => {
                const i = (0, o.iH)(e),
                    {
                        runWithDelay: s
                    } = (0, r.g)(t),
                    l = (e, t = !0) => {
                        const n = () => {
                            const t = null != e ? e : !i.value;
                            i.value = t, null == a || a(t)
                        };
                        t ? s(n) : n()
                    };
                (0, o.dq)(e) && (0, n.JL)(e, i, {
                    immediate: !0
                });
                const c = (e = !0) => {
                        l(!0, e)
                    },
                    d = (e = !0) => {
                        l(!1, e)
                    };
                return {
                    isOpen: i,
                    open: c,
                    close: d,
                    toggle: l
                }
            }
        },
        137347: (e, t, a) => {
            "use strict";
            a.d(t, {
                S: () => s
            });
            var n = a(428959),
                o = a(66037),
                r = a(602262),
                i = a(166252);
            const s = e => {
                const {
                    referenceRef: t = (0, r.iH)(),
                    floatingRef: a = (0, r.iH)(),
                    isOpen: s = !1,
                    middleware: l,
                    placement: c = "bottom",
                    strategy: d = "fixed",
                    updateOptions: u = {}
                } = e, {
                    strategy: p,
                    x: m,
                    y: _,
                    middlewareData: h,
                    placement: g,
                    isPositioned: y
                } = (0, n.YF)(t, a, {
                    strategy: d,
                    placement: c,
                    open: s,
                    middleware: l,
                    whileElementsMounted(...e) {
                        return (0, o.Me)(...e, u)
                    }
                }), v = (0, i.Fl)((() => {
                    var e, t;
                    return {
                        position: p.value,
                        top: `${null!=(e=_.value)?e:0}px`,
                        left: `${null!=(t=m.value)?t:0}px`
                    }
                }));
                return {
                    referenceRef: t,
                    floatingRef: a,
                    style: v,
                    middlewareData: h,
                    placement: g,
                    isPositioned: y
                }
            }
        },
        44963: (e, t, a) => {
            "use strict";
            a.d(t, {
                lL: () => n.l
            });
            var n = a(707525)
        },
        509426: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => r
            });
            var n = a(166252),
                o = a(207945);
            const r = () => (0, n.f3)(o.$)
        },
        707525: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => n.l
            });
            var n = a(201037)
        },
        201037: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => y
            });
            var n = a(185983),
                o = a(66037),
                r = a(428959),
                i = a(602262),
                s = a(166252),
                l = a(282950),
                c = a(137347),
                d = Object.defineProperty,
                u = Object.getOwnPropertySymbols,
                p = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                _ = (e, t, a) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                h = (e, t) => {
                    for (var a in t || (t = {})) p.call(t, a) && _(e, a, t[a]);
                    if (u)
                        for (var a of u(t)) m.call(t, a) && _(e, a, t[a]);
                    return e
                },
                g = (e, t) => {
                    var a = {};
                    for (var n in e) p.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                    if (null != e && u)
                        for (var n of u(e)) t.indexOf(n) < 0 && m.call(e, n) && (a[n] = e[n]);
                    return a
                };
            const y = e => {
                const t = e,
                    {
                        placement: a = "top",
                        strategy: d,
                        middleware: u,
                        arrowWidth: p = "10px",
                        arrowHeight: m = "7px",
                        delay: _,
                        callback: y
                    } = t,
                    v = g(t, ["placement", "strategy", "middleware", "arrowWidth", "arrowHeight", "delay", "callback"]),
                    b = (0, i.iH)(null),
                    {
                        isOpen: f,
                        open: k,
                        close: w,
                        toggle: S
                    } = (0, l.q)({
                        value: e.isOpen,
                        delay: _,
                        callback: y
                    }),
                    C = (0, s.Fl)((() => {
                        var e;
                        return [...null != (e = (0, i.SU)(u)) ? e : [(0, n.cv)(8), (0, o.uY)({
                            padding: -5
                        }), (0, o.RR)({
                            crossAxis: !1
                        })], (0, r.x7)({
                            element: b
                        })]
                    })),
                    {
                        style: I,
                        middlewareData: O,
                        placement: T,
                        referenceRef: P,
                        floatingRef: A,
                        isPositioned: L
                    } = (0, c.S)(h({
                        isOpen: f,
                        placement: a,
                        strategy: d,
                        middleware: C
                    }, v)),
                    B = () => {
                        if (O.value.arrow) {
                            const {
                                x: e,
                                y: t
                            } = O.value.arrow, a = (0, i.SU)(T).split("-")[0];
                            return {
                                position: "absolute",
                                width: p,
                                height: m,
                                top: t ? `${t}px` : "",
                                left: e ? `${e}px` : "",
                                rotate: `${[{top:"180",right:"270",bottom:"0",left:"90"}[a]]}deg`,
                                [{
                                    top: "bottom",
                                    right: "left",
                                    bottom: "top",
                                    left: "right"
                                }[a]]: `calc(${m} / -2)`
                            }
                        }
                        return {}
                    },
                    M = (0, s.Fl)((() => ({
                        ref: P,
                        open: k,
                        close: w,
                        toggle: S,
                        isOpen: f.value
                    }))),
                    E = (0, s.Fl)((() => ({
                        ref: A,
                        style: I.value
                    }))),
                    N = (0, s.Fl)((() => ({
                        ref: b,
                        style: B()
                    })));
                return {
                    referenceRef: P,
                    floatingRef: A,
                    arrowRef: b,
                    style: (0, s.Fl)((() => ({
                        floating: I.value,
                        arrow: B()
                    }))),
                    isOpen: f,
                    isPositioned: L,
                    open: k,
                    close: w,
                    toggle: S,
                    triggerProps: M,
                    tooltipProps: E,
                    arrowProps: N
                }
            }
        },
        694843: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = {
                fadeEnterActive: "Tooltip_fadeEnterActive_vCLvz",
                fadeLeaveActive: "Tooltip_fadeLeaveActive_sgodE",
                fadeEnterFrom: "Tooltip_fadeEnterFrom_bXnP_",
                fadeLeaveTo: "Tooltip_fadeLeaveTo_HL5bZ",
                root: "Tooltip_root_sF__N",
                tooltip: "Tooltip_tooltip_rmZyO",
                tooltipWrapper: "Tooltip_tooltipWrapper_pRTd2",
                arrow: "Tooltip_arrow_uyH5T"
            }
        },
        66196: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = {
                root: "CountryIcon_root_Uixdl",
                image: "CountryIcon_image_cLYV2",
                rounded: "CountryIcon_rounded_hPm2C"
            }
        },
        140987: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = {
                root: "ModalLayout_root_VGmhv",
                darkenBg: "ModalLayout_darkenBg_GYPvi",
                darkBg: "ModalLayout_darkBg_tMJbd",
                wrapper: "ModalLayout_wrapper_YHJoC",
                backdrop: "ModalLayout_backdrop_PKyuG",
                modal: "ModalLayout_modal_wTuv7"
            }
        },
        286621: () => {},
        817606: () => {},
        945633: () => {},
        806200: () => {},
        891674: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/bonus-cap.692ef8027-23.png 23w",
                images: [{
                    path: a.p + "img/bonus-cap.692ef8027-23.png",
                    width: 23,
                    height: 23
                }],
                src: a.p + "img/bonus-cap.692ef8027-23.png",
                toString: function() {
                    return a.p + "img/bonus-cap.692ef8027-23.png"
                },
                width: 23,
                height: 23
            }
        },
        823696: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/bonus-link-image.03a1536cd-166.png 166w",
                images: [{
                    path: a.p + "img/bonus-link-image.03a1536cd-166.png",
                    width: 166,
                    height: 198
                }],
                src: a.p + "img/bonus-link-image.03a1536cd-166.png",
                toString: function() {
                    return a.p + "img/bonus-link-image.03a1536cd-166.png"
                },
                width: 166,
                height: 198
            }
        },
        546420: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/bonus-slot.e5aee126d-25.png 25w",
                images: [{
                    path: a.p + "img/bonus-slot.e5aee126d-25.png",
                    width: 25,
                    height: 25
                }],
                src: a.p + "img/bonus-slot.e5aee126d-25.png",
                toString: function() {
                    return a.p + "img/bonus-slot.e5aee126d-25.png"
                },
                width: 25,
                height: 25
            }
        },
        481: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/BurgerLinkBackground.06f16da46-908.png 908w",
                images: [{
                    path: a.p + "img/BurgerLinkBackground.06f16da46-908.png",
                    width: 908,
                    height: 200
                }],
                src: a.p + "img/BurgerLinkBackground.06f16da46-908.png",
                toString: function() {
                    return a.p + "img/BurgerLinkBackground.06f16da46-908.png"
                },
                width: 908,
                height: 200
            }
        },
        112758: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/BurgerLinkShadow.5fe2c136d-592.png 592w",
                images: [{
                    path: a.p + "img/BurgerLinkShadow.5fe2c136d-592.png",
                    width: 592,
                    height: 610
                }],
                src: a.p + "img/BurgerLinkShadow.5fe2c136d-592.png",
                toString: function() {
                    return a.p + "img/BurgerLinkShadow.5fe2c136d-592.png"
                },
                width: 592,
                height: 610
            }
        },
        574019: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/FortuneWheelLights.b5ca24432-1500.png 1500w",
                images: [{
                    path: a.p + "img/FortuneWheelLights.b5ca24432-1500.png",
                    width: 1500,
                    height: 1500
                }],
                src: a.p + "img/FortuneWheelLights.b5ca24432-1500.png",
                toString: function() {
                    return a.p + "img/FortuneWheelLights.b5ca24432-1500.png"
                },
                width: 1500,
                height: 1500
            }
        },
        216811: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/LuckyWinPlate.ac76efaef-1480.png 1480w",
                images: [{
                    path: a.p + "img/LuckyWinPlate.ac76efaef-1480.png",
                    width: 1480,
                    height: 444
                }],
                src: a.p + "img/LuckyWinPlate.ac76efaef-1480.png",
                toString: function() {
                    return a.p + "img/LuckyWinPlate.ac76efaef-1480.png"
                },
                width: 1480,
                height: 444
            }
        },
        92886: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/backgroundImagesDesktopPrize.741159063-2756.png 2756w",
                images: [{
                    path: a.p + "img/backgroundImagesDesktopPrize.741159063-2756.png",
                    width: 2756,
                    height: 2824
                }],
                src: a.p + "img/backgroundImagesDesktopPrize.741159063-2756.png",
                toString: function() {
                    return a.p + "img/backgroundImagesDesktopPrize.741159063-2756.png"
                },
                width: 2756,
                height: 2824
            }
        },
        435471: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/backgroundLayout.f0b3e76ec-2912.png 2912w",
                images: [{
                    path: a.p + "img/backgroundLayout.f0b3e76ec-2912.png",
                    width: 2912,
                    height: 2536
                }],
                src: a.p + "img/backgroundLayout.f0b3e76ec-2912.png",
                toString: function() {
                    return a.p + "img/backgroundLayout.f0b3e76ec-2912.png"
                },
                width: 2912,
                height: 2536
            }
        },
        353640: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/backgroundLayoutSmoke.2cf24b1c7-3409.png 3409w",
                images: [{
                    path: a.p + "img/backgroundLayoutSmoke.2cf24b1c7-3409.png",
                    width: 3409,
                    height: 2578
                }],
                src: a.p + "img/backgroundLayoutSmoke.2cf24b1c7-3409.png",
                toString: function() {
                    return a.p + "img/backgroundLayoutSmoke.2cf24b1c7-3409.png"
                },
                width: 3409,
                height: 2578
            }
        },
        879765: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/burgerLink.5213ab7a1-360.png 360w",
                images: [{
                    path: a.p + "img/burgerLink.5213ab7a1-360.png",
                    width: 360,
                    height: 252
                }],
                src: a.p + "img/burgerLink.5213ab7a1-360.png",
                toString: function() {
                    return a.p + "img/burgerLink.5213ab7a1-360.png"
                },
                width: 360,
                height: 252
            }
        },
        62689: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/FreemoneyBackgroundLines.6be418976-2880.png 2880w",
                images: [{
                    path: a.p + "img/FreemoneyBackgroundLines.6be418976-2880.png",
                    width: 2880,
                    height: 1304
                }],
                src: a.p + "img/FreemoneyBackgroundLines.6be418976-2880.png",
                toString: function() {
                    return a.p + "img/FreemoneyBackgroundLines.6be418976-2880.png"
                },
                width: 2880,
                height: 1304
            }
        },
        786645: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/FreemoneyBackgroundLinesMobile.607e4d924-1380.png 1380w",
                images: [{
                    path: a.p + "img/FreemoneyBackgroundLinesMobile.607e4d924-1380.png",
                    width: 1380,
                    height: 1508
                }],
                src: a.p + "img/FreemoneyBackgroundLinesMobile.607e4d924-1380.png",
                toString: function() {
                    return a.p + "img/FreemoneyBackgroundLinesMobile.607e4d924-1380.png"
                },
                width: 1380,
                height: 1508
            }
        },
        71960: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/FreemoneyShadow.7d1a71a96-2470.png 2470w",
                images: [{
                    path: a.p + "img/FreemoneyShadow.7d1a71a96-2470.png",
                    width: 2470,
                    height: 1304
                }],
                src: a.p + "img/FreemoneyShadow.7d1a71a96-2470.png",
                toString: function() {
                    return a.p + "img/FreemoneyShadow.7d1a71a96-2470.png"
                },
                width: 2470,
                height: 1304
            }
        },
        551647: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/FreemoneyShadowMobile.9586bb719-1380.png 1380w",
                images: [{
                    path: a.p + "img/FreemoneyShadowMobile.9586bb719-1380.png",
                    width: 1380,
                    height: 1438
                }],
                src: a.p + "img/FreemoneyShadowMobile.9586bb719-1380.png",
                toString: function() {
                    return a.p + "img/FreemoneyShadowMobile.9586bb719-1380.png"
                },
                width: 1380,
                height: 1438
            }
        },
        765982: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/FreemoneyWheel.c1a4eaf81-1712.png 1712w",
                images: [{
                    path: a.p + "img/FreemoneyWheel.c1a4eaf81-1712.png",
                    width: 1712,
                    height: 1252
                }],
                src: a.p + "img/FreemoneyWheel.c1a4eaf81-1712.png",
                toString: function() {
                    return a.p + "img/FreemoneyWheel.c1a4eaf81-1712.png"
                },
                width: 1712,
                height: 1252
            }
        },
        427120: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/headerLinkImage.95fa36464-128.png 128w",
                images: [{
                    path: a.p + "img/headerLinkImage.95fa36464-128.png",
                    width: 128,
                    height: 128
                }],
                src: a.p + "img/headerLinkImage.95fa36464-128.png",
                toString: function() {
                    return a.p + "img/headerLinkImage.95fa36464-128.png"
                },
                width: 128,
                height: 128
            }
        },
        641660: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/headerLinkShadow.189ca54e3-210.png 210w",
                images: [{
                    path: a.p + "img/headerLinkShadow.189ca54e3-210.png",
                    width: 210,
                    height: 200
                }],
                src: a.p + "img/headerLinkShadow.189ca54e3-210.png",
                toString: function() {
                    return a.p + "img/headerLinkShadow.189ca54e3-210.png"
                },
                width: 210,
                height: 200
            }
        },
        506899: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/infoModalImage.fa7ab71ac-720.png 720w",
                images: [{
                    path: a.p + "img/infoModalImage.fa7ab71ac-720.png",
                    width: 720,
                    height: 432
                }],
                src: a.p + "img/infoModalImage.fa7ab71ac-720.png",
                toString: function() {
                    return a.p + "img/infoModalImage.fa7ab71ac-720.png"
                },
                width: 720,
                height: 432
            }
        },
        787217: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/logo.2195eba20-560.png 560w",
                images: [{
                    path: a.p + "img/logo.2195eba20-560.png",
                    width: 560,
                    height: 326
                }],
                src: a.p + "img/logo.2195eba20-560.png",
                toString: function() {
                    return a.p + "img/logo.2195eba20-560.png"
                },
                width: 560,
                height: 326
            }
        },
        470428: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/prizePointer.25b2e3a1c-1500.png 1500w",
                images: [{
                    path: a.p + "img/prizePointer.25b2e3a1c-1500.png",
                    width: 1500,
                    height: 1500
                }],
                src: a.p + "img/prizePointer.25b2e3a1c-1500.png",
                toString: function() {
                    return a.p + "img/prizePointer.25b2e3a1c-1500.png"
                },
                width: 1500,
                height: 1500
            }
        },
        331554: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/btc.aba392232-252.png 252w",
                images: [{
                    path: a.p + "img/btc.aba392232-252.png",
                    width: 252,
                    height: 144
                }],
                src: a.p + "img/btc.aba392232-252.png",
                toString: function() {
                    return a.p + "img/btc.aba392232-252.png"
                },
                width: 252,
                height: 144
            }
        },
        784315: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/coin.d6a1d7c37-252.png 252w",
                images: [{
                    path: a.p + "img/coin.d6a1d7c37-252.png",
                    width: 252,
                    height: 144
                }],
                src: a.p + "img/coin.d6a1d7c37-252.png",
                toString: function() {
                    return a.p + "img/coin.d6a1d7c37-252.png"
                },
                width: 252,
                height: 144
            }
        },
        5547: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/freebet.d3777d228-224.png 224w",
                images: [{
                    path: a.p + "img/freebet.d3777d228-224.png",
                    width: 224,
                    height: 128
                }],
                src: a.p + "img/freebet.d3777d228-224.png",
                toString: function() {
                    return a.p + "img/freebet.d3777d228-224.png"
                },
                width: 224,
                height: 128
            }
        },
        721492: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/freespin.64c5e49ab-252.png 252w",
                images: [{
                    path: a.p + "img/freespin.64c5e49ab-252.png",
                    width: 252,
                    height: 144
                }],
                src: a.p + "img/freespin.64c5e49ab-252.png",
                toString: function() {
                    return a.p + "img/freespin.64c5e49ab-252.png"
                },
                width: 252,
                height: 144
            }
        },
        141533: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/money.ddc3b2568-252.png 252w",
                images: [{
                    path: a.p + "img/money.ddc3b2568-252.png",
                    width: 252,
                    height: 144
                }],
                src: a.p + "img/money.ddc3b2568-252.png",
                toString: function() {
                    return a.p + "img/money.ddc3b2568-252.png"
                },
                width: 252,
                height: 144
            }
        },
        894661: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/voucher.75b964dfe-224.png 224w",
                images: [{
                    path: a.p + "img/voucher.75b964dfe-224.png",
                    width: 224,
                    height: 128
                }],
                src: a.p + "img/voucher.75b964dfe-224.png",
                toString: function() {
                    return a.p + "img/voucher.75b964dfe-224.png"
                },
                width: 224,
                height: 128
            }
        },
        82699: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/btc.03b96c97b-312.png 312w",
                images: [{
                    path: a.p + "img/btc.03b96c97b-312.png",
                    width: 312,
                    height: 312
                }],
                src: a.p + "img/btc.03b96c97b-312.png",
                toString: function() {
                    return a.p + "img/btc.03b96c97b-312.png"
                },
                width: 312,
                height: 312
            }
        },
        494053: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/coin.08bf69e29-224.png 224w",
                images: [{
                    path: a.p + "img/coin.08bf69e29-224.png",
                    width: 224,
                    height: 128
                }],
                src: a.p + "img/coin.08bf69e29-224.png",
                toString: function() {
                    return a.p + "img/coin.08bf69e29-224.png"
                },
                width: 224,
                height: 128
            }
        },
        722434: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/freebet.ce359c67b-224.png 224w",
                images: [{
                    path: a.p + "img/freebet.ce359c67b-224.png",
                    width: 224,
                    height: 128
                }],
                src: a.p + "img/freebet.ce359c67b-224.png",
                toString: function() {
                    return a.p + "img/freebet.ce359c67b-224.png"
                },
                width: 224,
                height: 128
            }
        },
        625419: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/freespin.16d525408-224.png 224w",
                images: [{
                    path: a.p + "img/freespin.16d525408-224.png",
                    width: 224,
                    height: 128
                }],
                src: a.p + "img/freespin.16d525408-224.png",
                toString: function() {
                    return a.p + "img/freespin.16d525408-224.png"
                },
                width: 224,
                height: 128
            }
        },
        80608: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/money.a129bd816-224.png 224w",
                images: [{
                    path: a.p + "img/money.a129bd816-224.png",
                    width: 224,
                    height: 128
                }],
                src: a.p + "img/money.a129bd816-224.png",
                toString: function() {
                    return a.p + "img/money.a129bd816-224.png"
                },
                width: 224,
                height: 128
            }
        },
        548978: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/voucher.017dd9531-224.png 224w",
                images: [{
                    path: a.p + "img/voucher.017dd9531-224.png",
                    width: 224,
                    height: 128
                }],
                src: a.p + "img/voucher.017dd9531-224.png",
                toString: function() {
                    return a.p + "img/voucher.017dd9531-224.png"
                },
                width: 224,
                height: 128
            }
        },
        45357: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/wheelAllSectors.4cea6af03-1500.png 1500w",
                images: [{
                    path: a.p + "img/wheelAllSectors.4cea6af03-1500.png",
                    width: 1500,
                    height: 1500
                }],
                src: a.p + "img/wheelAllSectors.4cea6af03-1500.png",
                toString: function() {
                    return a.p + "img/wheelAllSectors.4cea6af03-1500.png"
                },
                width: 1500,
                height: 1500
            }
        },
        787803: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/wheelMain.191892ac5-1500.png 1500w",
                images: [{
                    path: a.p + "img/wheelMain.191892ac5-1500.png",
                    width: 1500,
                    height: 1500
                }],
                src: a.p + "img/wheelMain.191892ac5-1500.png",
                toString: function() {
                    return a.p + "img/wheelMain.191892ac5-1500.png"
                },
                width: 1500,
                height: 1500
            }
        },
        920490: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/wheelWinningSector.c727bfc44-1500.png 1500w",
                images: [{
                    path: a.p + "img/wheelWinningSector.c727bfc44-1500.png",
                    width: 1500,
                    height: 1500
                }],
                src: a.p + "img/wheelWinningSector.c727bfc44-1500.png",
                toString: function() {
                    return a.p + "img/wheelWinningSector.c727bfc44-1500.png"
                },
                width: 1500,
                height: 1500
            }
        },
        173753: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/present-with-light.bd57fb068-151.png 151w",
                images: [{
                    path: a.p + "img/present-with-light.bd57fb068-151.png",
                    width: 151,
                    height: 161
                }],
                src: a.p + "img/present-with-light.bd57fb068-151.png",
                toString: function() {
                    return a.p + "img/present-with-light.bd57fb068-151.png"
                },
                width: 151,
                height: 161
            }
        },
        271500: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "img/slots-machine.90d45c051-54.png 54w",
                images: [{
                    path: a.p + "img/slots-machine.90d45c051-54.png",
                    width: 54,
                    height: 54
                }],
                src: a.p + "img/slots-machine.90d45c051-54.png",
                toString: function() {
                    return a.p + "img/slots-machine.90d45c051-54.png"
                },
                width: 54,
                height: 54
            }
        },
        998424: function(e) {
            ! function(t, a) {
                e.exports = a()
            }(0, (function() {
                return function(e) {
                    function t(n) {
                        if (a[n]) return a[n].exports;
                        var o = a[n] = {
                            exports: {},
                            id: n,
                            loaded: !1
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
                    }
                    var a = {};
                    return t.m = e, t.c = a, t.p = "", t(0)
                }([function(e, t, a) {
                    e.exports = a(1)
                }, function(e, t) {
                    "use strict";

                    function a() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mm dd yyyy",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = t.minYear,
                            r = void 0 === a ? 1 : a,
                            i = t.maxYear,
                            s = void 0 === i ? 9999 : i,
                            l = e.split(/[^dmyHMS]+/).sort((function(e, t) {
                                return o.indexOf(e) - o.indexOf(t)
                            }));
                        return function(t) {
                            var a = [],
                                o = {
                                    dd: 31,
                                    mm: 12,
                                    yy: 99,
                                    yyyy: s,
                                    HH: 23,
                                    MM: 59,
                                    SS: 59
                                },
                                i = {
                                    dd: 1,
                                    mm: 1,
                                    yy: 0,
                                    yyyy: r,
                                    HH: 0,
                                    MM: 0,
                                    SS: 0
                                },
                                c = t.split("");
                            l.forEach((function(t) {
                                var n = e.indexOf(t),
                                    r = parseInt(o[t].toString().substr(0, 1), 10);
                                parseInt(c[n], 10) > r && (c[n + 1] = c[n], c[n] = 0, a.push(n))
                            }));
                            var d = 0,
                                u = l.some((function(a) {
                                    var l = e.indexOf(a),
                                        c = a.length,
                                        u = t.substr(l, c).replace(/\D/g, ""),
                                        p = parseInt(u, 10);
                                    "mm" === a && (d = p || 0);
                                    var m = "dd" === a ? n[d] : o[a];
                                    if ("yyyy" === a && (1 !== r || 9999 !== s)) {
                                        var _ = parseInt(o[a].toString().substring(0, u.length), 10),
                                            h = parseInt(i[a].toString().substring(0, u.length), 10);
                                        return p < h || p > _
                                    }
                                    return p > m || u.length === c && p < i[a]
                                }));
                            return !u && {
                                value: c.join(""),
                                indexesOfPipedChars: a
                            }
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = a;
                    var n = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                        o = ["yyyy", "yy", "mm", "dd", "HH", "MM", "SS"]
                }])
            }))
        },
        791136: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => g
            });
            var n = a(166252),
                o = a(762990),
                r = Object.defineProperty,
                i = Object.defineProperties,
                s = Object.getOwnPropertyDescriptors,
                l = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                u = (e, t, a) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                p = (e, t) => {
                    for (var a in t || (t = {})) c.call(t, a) && u(e, a, t[a]);
                    if (l)
                        for (var a of l(t)) d.call(t, a) && u(e, a, t[a]);
                    return e
                },
                m = (e, t) => i(e, s(t));
            const _ = (e, t) => (0, n.h)(o.Z, m(p({}, t.attrs), {
                    initialWidth: 16,
                    initialHeight: 16,
                    innerHTML: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.726 6.614a.953.953 0 000-1.337.928.928 0 00-1.252-.065l-.07.065L8 8.717l-3.403-3.44a.928.928 0 00-1.252-.065l-.071.065a.953.953 0 00-.064 1.265l.064.072 4.065 4.11a.928.928 0 001.251.064l.071-.065 4.065-4.109z"/>'
                })),
                h = _,
                g = h
        },
        512659: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => g
            });
            var n = a(166252),
                o = a(762990),
                r = Object.defineProperty,
                i = Object.defineProperties,
                s = Object.getOwnPropertyDescriptors,
                l = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                u = (e, t, a) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                p = (e, t) => {
                    for (var a in t || (t = {})) c.call(t, a) && u(e, a, t[a]);
                    if (l)
                        for (var a of l(t)) d.call(t, a) && u(e, a, t[a]);
                    return e
                },
                m = (e, t) => i(e, s(t));
            const _ = (e, t) => (0, n.h)(o.Z, m(p({}, t.attrs), {
                    initialWidth: 16,
                    initialHeight: 16,
                    innerHTML: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.114 3.274a.953.953 0 00-1.337 0 .928.928 0 00-.065 1.252l.065.07L9.217 8l-3.44 3.403a.928.928 0 00-.065 1.252l.065.071a.953.953 0 001.265.064l.072-.064 4.11-4.065a.928.928 0 00.064-1.251l-.065-.071-4.109-4.065z"/>'
                })),
                h = _,
                g = h
        },
        423336: (e, t, a) => {
            var n = {
                "./btc_usd/1.png": [690099, 90099],
                "./btc_usd/2.png": [704812, 4812],
                "./btc_usd/3.png": [575575, 75575],
                "./fk_wallet/1.png": [585338, 85338],
                "./fk_wallet/2.png": [331419, 31419],
                "./fk_wallet/3.png": [494051, 94051]
            };

            function o(e) {
                if (!a.o(n, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = n[e],
                    o = t[0];
                return a.e(t[1]).then((() => a.t(o, 23)))
            }
            o.keys = () => Object.keys(n), o.id = 423336, e.exports = o
        },
        540521: (e, t, a) => {
            var n = {
                "./AED.svg": [530052, 30052],
                "./AMD.svg": [206957, 6957],
                "./ARS.svg": [170710, 70710],
                "./AUD.svg": [802859, 2859],
                "./AZN.svg": [87967, 87967],
                "./BCH.svg": [962346, 62346],
                "./BDT.svg": [807472, 7472],
                "./BNB.svg": [318740, 18740],
                "./BOB.svg": [446596, 46596],
                "./BRL.svg": [626361, 26361],
                "./BTC.svg": [613926, 13926],
                "./BWP.svg": [418645, 18645],
                "./BYN.svg": [561141, 61141],
                "./CAD.svg": [722600, 22600],
                "./CDF.svg": [195809, 95809],
                "./CLP.svg": [39893, 39893],
                "./COP.svg": [871440, 71440],
                "./CRC.svg": [681807, 81807],
                "./CUP.svg": [935520, 35520],
                "./CZK.svg": [956469, 56469],
                "./DASH.svg": [756876, 56876],
                "./DOGE.svg": [952957, 52957],
                "./DZD.svg": [459978, 59978],
                "./EGP.svg": [738960, 38960],
                "./ETH.svg": [663038, 63038],
                "./EUR.svg": [343526, 43526],
                "./GEL.svg": [716933, 16933],
                "./GHS.svg": [126985, 26985],
                "./GNF.svg": [665638, 65638],
                "./GTQ.svg": [470889, 70889],
                "./HKD.svg": [632708, 32708],
                "./HNL.svg": [687897, 87897],
                "./IDR.svg": [334497, 34497],
                "./ILS.svg": [632760, 32760],
                "./INR.svg": [849534, 49534],
                "./IQD.svg": [487491, 87491],
                "./IRR.svg": [663771, 63771],
                "./JOD.svg": [829363, 29363],
                "./JPY.svg": [93350, 93350],
                "./KES.svg": [323689, 23689],
                "./KGS.svg": [289699, 89699],
                "./KHR.svg": [761211, 61211],
                "./KRW.svg": [322239, 22239],
                "./KWD.svg": [341309, 41309],
                "./KZT.svg": [479714, 79714],
                "./LKR.svg": [338129, 38129],
                "./LTC.svg": [735835, 35835],
                "./MAD.svg": [469297, 69297],
                "./MDL.svg": [315731, 15731],
                "./MMK.svg": [616802, 16802],
                "./MWK.svg": [377185, 77185],
                "./MXN.svg": [846317, 46317],
                "./MYR.svg": [437090, 37090],
                "./NGN.svg": [441020, 41020],
                "./NPR.svg": [503214, 3214],
                "./NZD.svg": [982503, 82503],
                "./OMR.svg": [465141, 65141],
                "./PAB.svg": [901215, 1215],
                "./PEN.svg": [664061, 64061],
                "./PHP.svg": [138705, 38705],
                "./PKR.svg": [198172, 98172],
                "./PLN.svg": [962101, 62101],
                "./PYG.svg": [715395, 15395],
                "./QAR.svg": [628645, 28645],
                "./RUB.svg": [18580, 18580],
                "./RWF.svg": [408038, 8038],
                "./SEK.svg": [229184, 29184],
                "./SGD.svg": [124421, 24421],
                "./SLE.svg": [878048, 78048],
                "./SOS.svg": [353536, 53536],
                "./THB.svg": [180616, 80616],
                "./TJS.svg": [42859, 42859],
                "./TND.svg": [183679, 83679],
                "./TON.svg": [944304, 44304],
                "./TRX.svg": [49426, 49426],
                "./TRY.svg": [373669, 73669],
                "./TZS.svg": [284232, 84232],
                "./UAH.svg": [273602, 73602],
                "./UGX.svg": [669019, 69019],
                "./USD.svg": [829649, 29649],
                "./USDC.svg": [267123, 67123],
                "./USDT.svg": [175294, 75294],
                "./UYU.svg": [13719, 13719],
                "./UZS.svg": [505062, 5062],
                "./VES.svg": [650404, 50404],
                "./VND.svg": [769211, 69211],
                "./XAF.svg": [105278, 5278],
                "./XLM.svg": [363834, 63834],
                "./XMR.svg": [839124, 39124],
                "./XOF.svg": [858081, 58081],
                "./XRP.svg": [898741, 98741],
                "./ZAR.svg": [314107, 14107],
                "./ZEC.svg": [955237, 55237],
                "./ZMW.svg": [53200, 53200]
            };

            function o(e) {
                if (!a.o(n, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = n[e],
                    o = t[0];
                return a.e(t[1]).then((() => a(o)))
            }
            o.keys = () => Object.keys(n), o.id = 540521, e.exports = o
        },
        756732: e => {
            "use strict";
            e.exports = '<svg height="0" width="0" style="position: absolute;">\n    <defs>\n        <radialGradient id="favorite-gradient" r="51.063%" fx="50%" fy="50%">\n            <stop offset="0%" stop-color="#FFD551"></stop>\n            <stop offset="100%" stop-color="#FFA500"></stop>\n        </radialGradient>\n        <linearGradient id="favourite-icon-gradient" x1="25%" y1="0%" x2="75%" y2="100%">\n            <stop offset="0.071" stop-color="#ffed1e"></stop>\n            <stop offset="0.9" stop-color="#ffa500"></stop>\n        </linearGradient>\n        <linearGradient id="jackpot-star-gradient" x1="0" y1="100%" x2="100%" y2="0">\n            <stop offset="0%" stop-color="#c5991e"></stop>\n            <stop offset="5%" stop-color="#b68100"></stop>\n            <stop offset="48%" stop-color="#fff29d"></stop>\n            <stop offset="82%" stop-color="#b57f00"></stop>\n            <stop offset="100%" stop-color="#c7940f"></stop>\n        </linearGradient>\n        <radialGradient id="jackpot-star-radial-gradient" r="100%" fx="0%" fy="135%">\n            <stop offset="0%" stop-color="#c5991e"></stop>\n            <stop offset="8%" stop-color="#b68100"></stop>\n            <stop offset="68%" stop-color="#fff29d"></stop>\n            <stop offset="117%" stop-color="#b57f00"></stop>\n            <stop offset="142%" stop-color="#c7940f"></stop>\n        </radialGradient>\n        <linearGradient id="blue-gradient" x1="0" y1="100%" x2="100%" y2="0">\n            <stop offset="-40%" stop-color="#108de7"></stop>\n            <stop offset="99%" stop-color="#0855c4"></stop>\n        </linearGradient>\n        <linearGradient id="blue-gradient-vertical" x1="0" y1="-80%" x2="0" y2="93%">\n            <stop offset="0" stop-color="#0095ff"></stop>\n            <stop offset="100%" stop-color="#0855c4"></stop>\n        </linearGradient>\n        <linearGradient id="green-gradient" x1="102.7%" y1="46.97%" x2="-2.7%" y2="53.03%">\n            <stop stop-color="#adff00"></stop>\n            <stop offset="1.061" stop-color="#e8ffb9"></stop>\n        </linearGradient>\n        <linearGradient id="android-pwa-icon-gradient" x1="73.578%" x2="0%" y1="-18.564%" y2="109.578%">\n            <stop offset="0%" stop-color="#A9E200"></stop>\n            <stop offset="100%" stop-color="#6C8B10"></stop>\n        </linearGradient>\n        <linearGradient id="ios-pwa-icon-gradient" x1="100%" x2="20.632%" y1="0%" y2="110.9%">\n            <stop offset="0%" stop-color="#FFF"></stop>\n            <stop offset="100%" stop-color="#BCBCBC"></stop>\n        </linearGradient>\n        <linearGradient id="social-tg-gradient" x1="77.731%" x2="17.84%" y1="0%" y2="100%">\n            <stop offset="0%" stop-color="#0EAACF"></stop>\n            <stop offset="100%" stop-color="#027CB2"></stop>\n        </linearGradient>\n        <linearGradient id="social-vk-gradient" x1="100%" x2="20.632%" y1="0%" y2="110.9%">\n            <stop offset="0%" stop-color="#4172AC"></stop>\n            <stop offset="100%" stop-color="#306099"></stop>\n        </linearGradient>\n        <linearGradient id="social-ok-gradient" x1="100%" x2="20.632%" y1="0%" y2="110.9%">\n            <stop offset="0%" stop-color="#f9c240"></stop>\n            <stop offset="100%" stop-color="#ff8900"></stop>\n        </linearGradient>\n        <linearGradient id="social-inst-gradient" x1="123.259%" x2="-16.716%" y1="19.8%" y2="144.132%">\n            <stop offset="0%" stop-color="#C10E7D"></stop>\n            <stop offset="31.598%" stop-color="#D91358"></stop>\n            <stop offset="100%" stop-color="#F06D2F"></stop>\n        </linearGradient>\n        <linearGradient id="provider-blue" x1="0" y1="100%" x2="100%" y2="0">\n            <stop offset="-40%" stop-color="#00deff"></stop>\n            <stop offset="99%" stop-color="#00bbff"></stop>\n        </linearGradient>\n        <linearGradient id="provider-green" x1="73.578%" x2="0%" y1="-18.564%" y2="109.578%">\n            <stop offset="0%" stop-color="#d8ef5b"></stop>\n            <stop offset="100%" stop-color="#7ba200"></stop>\n        </linearGradient>\n        <linearGradient id="provider-pink" x1="73.578%" x2="0%" y1="-18.564%" y2="109.578%">\n            <stop offset="0%" stop-color="#ff4edf"></stop>\n            <stop offset="100%" stop-color="#ff2958"></stop>\n        </linearGradient>\n    </defs>\n</svg>\n'
        },
        991008: (e, t, a) => {
            "use strict";
            e.exports = a.p + "img/aviator-game-logo.2fb50dc03.svg"
        },
        273633: (e, t, a) => {
            "use strict";
            e.exports = a.p + "img/jetx.64787fc5c.svg"
        },
        779015: (e, t, a) => {
            "use strict";
            e.exports = a.p + "img/lucky-jet.f927485da.svg"
        },
        535807: (e, t, a) => {
            "use strict";
            e.exports = a.p + "img/speed-and-cash.dffacd6c5.svg"
        },
        449811: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            var n = a(2693),
                o = a(750585);

            function r(e, t) {
                return function(a, n) {
                    if (null == a) return a;
                    if (!(0, o.Z)(a)) return e(a, n);
                    var r = a.length,
                        i = t ? r : -1,
                        s = Object(a);
                    while (t ? i-- : ++i < r)
                        if (!1 === n(s[i], i, s)) break;
                    return a
                }
            }
            const i = r;
            var s = i(n.Z);
            const l = s
        },
        313871: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => u
            });
            var n = a(674073),
                o = a(369162),
                r = a(449811),
                i = a(750585);

            function s(e, t) {
                var a = -1,
                    n = (0, i.Z)(e) ? Array(e.length) : [];
                return (0, r.Z)(e, (function(e, o, r) {
                    n[++a] = t(e, o, r)
                })), n
            }
            const l = s;
            var c = a(427771);

            function d(e, t) {
                var a = (0, c.Z)(e) ? n.Z : l;
                return a(e, (0, o.Z)(t, 3))
            }
            const u = d
        }
    }
]);