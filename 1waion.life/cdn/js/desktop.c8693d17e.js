(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [99380, 25084, 23543], {
        690817: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var a = n(166252),
                o = n(3577),
                i = n(602262),
                r = n(280894),
                s = n(112808),
                l = n(550418),
                c = n(559166),
                p = n(909997),
                d = n(203842);
            const u = ["onClick"],
                m = {
                    __name: "LanguagesList",
                    props: {
                        list: {
                            type: Array,
                            default: () => []
                        },
                        isOtherLanguages: Boolean,
                        placeOpening: {
                            type: String,
                            required: !0,
                            validator: e => ["header", "footer", "burger"].includes(e)
                        }
                    },
                    setup(e) {
                        const t = e,
                            n = (0, r.oR)(),
                            i = (0, a.Fl)((() => n.getters.currentLang)),
                            s = e => {
                                (0, d.DV)(), p.L_.handleChangeLanguageEvent("change", {
                                    platform_language: e,
                                    place: t.placeOpening,
                                    is_rec: !t.isOtherLanguages
                                }), n.dispatch("setCurrentLanguage", {
                                    lang: e
                                })
                            };
                        return (t, n) => ((0, a.wg)(), (0, a.iD)("ul", {
                            class: (0, o.C_)([t.$style.root, e.isOtherLanguages && t.$style.rootOthers])
                        }, [((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(e.list, (e => ((0, a.wg)(), (0, a.iD)("li", {
                            key: e.label,
                            class: (0, o.C_)(e.lang === i.value ? t.$style.itemActive : t.$style.item)
                        }, [(0, a._)("button", {
                            type: "button",
                            class: (0, o.C_)(t.$style.itemButton),
                            onClick: t => s(e.lang)
                        }, [(0, a.Wm)(l.Z, {
                            code: e.flag,
                            size: 20,
                            rounded: ""
                        }, null, 8, ["code"]), (0, a._)("span", {
                            class: (0, o.C_)(t.$style.itemInner)
                        }, [(0, a._)("span", {
                            class: (0, o.C_)(t.$style.itemTitle)
                        }, (0, o.zw)(e.label), 3), (0, a._)("span", {
                            class: (0, o.C_)(t.$style.itemCaption)
                        }, (0, o.zw)(e.name), 3)], 2), (0, a.Wm)(c.Z, {
                            class: (0, o.C_)(t.$style.itemIcon),
                            icon: "line"
                        }, null, 8, ["class"])], 10, u)], 2)))), 128))], 2))
                    }
                },
                h = {
                    root: "LanguagesList_root_z8xst",
                    rootOthers: "LanguagesList_rootOthers_CAR1M",
                    itemActive: "LanguagesList_itemActive_TC9Ls LanguagesList_item_ITMix",
                    item: "LanguagesList_item_ITMix",
                    itemIcon: "LanguagesList_itemIcon_wPrty",
                    itemButton: "LanguagesList_itemButton_l1VGg",
                    itemInner: "LanguagesList_itemInner_YiFFQ",
                    itemTitle: "LanguagesList_itemTitle_A98V0",
                    itemCaption: "LanguagesList_itemCaption_NuAGO"
                };
            var g = n(348118);
            const v = {};
            v["$style"] = h;
            const _ = (0, g.Z)(m, [
                    ["__cssModules", v]
                ]),
                b = _,
                f = (0, a.aZ)({
                    __name: "LanguagesBlock",
                    props: {
                        placeOpening: {}
                    },
                    setup(e) {
                        const t = (0, r.oR)(),
                            n = (0, a.Fl)((() => {
                                const e = [];
                                return s.appConfig.options.hideSuggestedLanguages || e.push({
                                    subtitle: t.getters.langCommon.languages.recommended,
                                    list: t.getters.languages.popular,
                                    other: !1
                                }), e.push({
                                    subtitle: t.getters.langCommon.languages.all,
                                    list: t.getters.languages.others,
                                    other: !0
                                }), e
                            }));
                        return (e, r) => ((0, a.wg)(), (0, a.iD)("div", {
                            class: (0, o.C_)((0, i.SU)(t).getters.isMobile ? e.$style.rootMobile : e.$style.root)
                        }, [(0, i.SU)(t).getters.isMobile ? ((0, a.wg)(), (0, a.iD)("div", {
                            key: 0,
                            class: (0, o.C_)(e.$style.title)
                        }, (0, o.zw)((0, i.SU)(t).getters.langCommon.languages.title), 3)) : (0, a.kq)("", !0), ((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(n.value, ((t, n) => ((0, a.wg)(), (0, a.iD)(a.HY, {
                            key: `${n}-subtitle`
                        }, [t.list.length > 0 ? ((0, a.wg)(), (0, a.iD)(a.HY, {
                            key: 0
                        }, [(0, a._)("div", {
                            class: (0, o.C_)(e.$style.subtitle)
                        }, (0, o.zw)(t.subtitle), 3), ((0, a.wg)(), (0, a.j4)(b, {
                            key: n,
                            list: t.list,
                            "is-other-languages": t.other,
                            "place-opening": e.placeOpening
                        }, null, 8, ["list", "is-other-languages", "place-opening"]))], 64)) : (0, a.kq)("", !0)], 64)))), 128))], 2))
                    }
                }),
                y = {
                    root: "LanguagesBlock_root_cix6n",
                    rootMobile: "LanguagesBlock_rootMobile_k4CWB LanguagesBlock_root_cix6n",
                    subtitle: "LanguagesBlock_subtitle_Ag3lt",
                    title: "LanguagesBlock_title_Ccgha"
                },
                w = {};
            w["$style"] = y;
            const C = (0, g.Z)(f, [
                    ["__cssModules", w]
                ]),
                S = C
        },
        336373: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var a = n(422554),
                o = n(293646),
                i = n(348118);
            const r = (0, i.Z)(o.Z, [
                    ["render", a.s]
                ]),
                s = r
        },
        159248: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var a = n(166252),
                o = n(3577),
                i = n(749963);
            const r = {
                    key: 0,
                    ref: "menu",
                    class: "dropdown-menu"
                },
                s = {
                    key: 0,
                    class: "dropdown-top-angle"
                };

            function l(e, t, n, l, c, p) {
                const d = (0, a.up)("RoundedAngleTop");
                return (0, a.wg)(), (0, a.iD)("div", {
                    class: (0, o.C_)(["dropdown", p.classObject]),
                    style: (0, o.j5)(p.cssVars),
                    onMouseover: t[1] || (t[1] = (...e) => p.onMouseOver && p.onMouseOver(...e)),
                    onMouseleave: t[2] || (t[2] = (...e) => p.onMouseLeave && p.onMouseLeave(...e))
                }, [(0, a._)("div", {
                    class: "dropdown-trigger",
                    onClick: t[0] || (t[0] = (...e) => p.toggle && p.toggle(...e))
                }, [(0, a.WI)(e.$slots, "trigger", {
                    isActive: e.isActive
                }, void 0, !0)]), (0, a.Wm)(i.uT, {
                    name: "fade"
                }, {
                    default: (0, a.w5)((() => [p.isShowMenu ? ((0, a.wg)(), (0, a.iD)("div", r, [(0, a._)("div", {
                        class: (0, o.C_)(["dropdown-content", [`theme-${n.theme}`]]),
                        style: (0, o.j5)({
                            maxHeight: n.maxHeight,
                            padding: n.padding
                        }),
                        "data-body-scroll-lock-ignore": ""
                    }, [n.angle ? ((0, a.wg)(), (0, a.iD)("div", s)) : (0, a.kq)("", !0), n.roundedAngle ? ((0, a.wg)(), (0, a.j4)(d, {
                        key: 1,
                        class: "dropdown-top-rounded-angle"
                    })) : (0, a.kq)("", !0), (0, a.WI)(e.$slots, "default", {}, void 0, !0)], 6)], 512)) : (0, a.kq)("", !0)])),
                    _: 3
                })], 38)
            }
            var c = n(425084);
            const p = {
                name: "VDropdown",
                components: {
                    RoundedAngleTop: c["default"]
                },
                inject: ["$platform"],
                props: {
                    active: Boolean,
                    disabled: Boolean,
                    noTransparency: Boolean,
                    hoverable: Boolean,
                    preventClose: Boolean,
                    preventOpen: Boolean,
                    angle: Boolean,
                    roundedAngle: Boolean,
                    maxHeight: {
                        type: String,
                        default: null
                    },
                    align: {
                        type: String,
                        default: "left",
                        validator(e) {
                            return ["top-left", "top-right", "left", "right", "center", "bottom-right"].includes(e)
                        }
                    },
                    padding: {
                        type: String,
                        default: null
                    },
                    closeDropdownTrigger: Boolean,
                    theme: {
                        type: String,
                        default: "default",
                        validator: e => ["default", "dark", "dark-2", "hard-shadow"].includes(e)
                    },
                    angleColor: {
                        type: String,
                        default: "#fff",
                        validator: e => ["#fff", "#f7f8f9"].includes(e)
                    }
                },
                emits: ["close", "heightDropdown", "open"],
                data: () => ({
                    isActive: !1
                }),
                computed: {
                    classObject() {
                        return {
                            [`align-${this.align}`]: this.align,
                            disabled: this.disabled,
                            "no-transparency": this.noTransparency,
                            active: this.isActive
                        }
                    },
                    isShowMenu() {
                        return !this.disabled && this.isActive || this.active
                    },
                    cssVars() {
                        return {
                            "--v-dropdown__angle-color": this.angleColor
                        }
                    }
                },
                watch: {
                    isShowMenu(e) {
                        e ? (0, a.Y3)((() => {
                            this.onResize(), window.addEventListener("resize", this.onResize)
                        })) : window.removeEventListener("resize", this.onResize)
                    },
                    closeDropdownTrigger() {
                        this.close(), this.$el.querySelector("input").blur()
                    }
                },
                beforeUnmount() {
                    window.removeEventListener("resize", this.onResize)
                },
                methods: {
                    open() {
                        this.disabled || this.preventOpen || (this.isActive = !0, this.$emit("open"), setTimeout((() => document.addEventListener("click", this.clicked))))
                    },
                    close() {
                        this.isActive = !1, this.$emit("close"), document.removeEventListener("click", this.clicked)
                    },
                    onMouseOver() {
                        this.hoverable && !this.$platform.isTouchDevice && this.open()
                    },
                    onMouseLeave() {
                        this.hoverable && !this.$platform.isTouchDevice && this.close()
                    },
                    clicked(e) {
                        if (this.preventClose) {
                            const t = e.target,
                                n = this.$refs.menu;
                            let a = t.parentNode;
                            while (null !== a) {
                                if (a === n) return;
                                a = a.parentNode
                            }
                        }
                        this.close()
                    },
                    toggle() {
                        this.isActive ? this.close() : this.open()
                    },
                    onResize() {
                        this.$emit("heightDropdown", this.$refs.menu.getBoundingClientRect().height)
                    }
                }
            };
            var d = n(348118);
            const u = (0, d.Z)(p, [
                    ["render", l],
                    ["__scopeId", "data-v-4dc26244"]
                ]),
                m = u
        },
        490028: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var a = n(166252);

            function o(e, t, n, o, i, r) {
                return (0, a.wg)(), (0, a.j4)((0, a.LL)(r.routeObject.is), (0, a.dG)(r.routeObject, {
                    ref: "dropdownElement",
                    class: "dropdown-item",
                    onClick: r.onClick
                }), {
                    default: (0, a.w5)((() => [(0, a.WI)(e.$slots, "default", {}, void 0, !0)])),
                    _: 3
                }, 16, ["onClick"])
            }
            var i = Object.defineProperty,
                r = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                c = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                p = (e, t) => {
                    for (var n in t || (t = {})) s.call(t, n) && c(e, n, t[n]);
                    if (r)
                        for (var n of r(t)) l.call(t, n) && c(e, n, t[n]);
                    return e
                };
            const d = {
                name: "VDropdownItem",
                props: {
                    nowrap: Boolean,
                    centered: Boolean,
                    mobile: Boolean,
                    route: {
                        type: Object,
                        default: () => ({})
                    },
                    theme: {
                        type: String,
                        default: "default",
                        validator: e => ["default", "dark"].includes(e)
                    }
                },
                emits: ["click"],
                computed: {
                    classObject() {
                        return {
                            nowrap: this.nowrap,
                            centered: this.centered,
                            [`theme-${this.theme}`]: !0,
                            mobile: this.mobile
                        }
                    },
                    isLink() {
                        return Object.keys(this.route).length
                    },
                    routeObject() {
                        return p({
                            class: this.classObject
                        }, this.isLink ? {
                            is: "router-link",
                            to: this.route
                        } : {
                            is: "div"
                        })
                    }
                },
                methods: {
                    onClick() {
                        this.$emit("click")
                    }
                }
            };
            var u = n(348118);
            const m = (0, u.Z)(d, [
                    ["render", o],
                    ["__scopeId", "data-v-74dc17ba"]
                ]),
                h = m
        },
        200238: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(166252);

            function o(e, t, n, o, i, r) {
                const s = (0, a.up)("VIcon");
                return (0, a.wg)(), (0, a.iD)("button", (0, a.dG)({
                    class: "bets-navigation-middle-button-slide",
                    type: "button"
                }, e.$attrs), [(0, a.Wm)(s, {
                    icon: "left" === n.direction ? "angle-left" : "angle-right"
                }, null, 8, ["icon"])], 16)
            }
            var i = n(559166);
            const r = {
                name: "BetsNavigationMiddleButtonSlide",
                components: {
                    VIcon: i.Z
                },
                props: {
                    direction: {
                        type: String,
                        default: "left",
                        validator: e => ["left", "right"].includes(e)
                    }
                }
            };
            var s = n(348118);
            const l = (0, s.Z)(r, [
                    ["render", o],
                    ["__scopeId", "data-v-23f4c8b6"]
                ]),
                c = l
        },
        127058: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(166252);
            const o = {
                class: "LiveDot"
            };

            function i(e, t, n, i, r, s) {
                return (0, a.wg)(), (0, a.iD)("div", o)
            }
            const r = {
                name: "LiveDot"
            };
            var s = n(348118);
            const l = (0, s.Z)(r, [
                    ["render", i],
                    ["__scopeId", "data-v-43543602"]
                ]),
                c = l
        },
        636406: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var a = n(166252),
                o = n(3577),
                i = n(602262),
                r = n(280894),
                s = n(550418),
                l = n(559166),
                c = n(932256),
                p = n(749963),
                d = n(690817);
            const u = {
                    __name: "ChangeLanguageDropdown",
                    props: {
                        isOpen: Boolean,
                        direction: {
                            type: String,
                            default: "bottom",
                            validator: e => ["top", "bottom"].includes(e)
                        },
                        placeOpening: {
                            type: String,
                            default: "",
                            required: !0
                        }
                    },
                    setup(e) {
                        const t = (0, a.f3)("$filters");
                        return (n, r) => ((0, a.wg)(), (0, a.j4)(p.uT, {
                            name: "fade",
                            duration: "200",
                            mode: "out-in"
                        }, {
                            default: (0, a.w5)((() => [e.isOpen ? ((0, a.wg)(), (0, a.iD)("div", {
                                key: 0,
                                class: (0, o.C_)([n.$style.root, n.$style[`rootDirection${(0,i.SU)(t).capitalize(e.direction)}`]])
                            }, [(0, a.Wm)(l.Z, {
                                class: (0, o.C_)(n.$style.decor),
                                icon: "tooltip-arrow-2"
                            }, null, 8, ["class"]), (0, a._)("div", {
                                class: (0, o.C_)(n.$style.wrapper)
                            }, [(0, a.Wm)(d.Z, {
                                "place-opening": e.placeOpening
                            }, null, 8, ["place-opening"])], 2)], 2)) : (0, a.kq)("", !0)])),
                            _: 1
                        }))
                    }
                },
                m = {
                    root: "ChangeLanguageDropdown_root_X4LnD",
                    rootDirectionBottom: "ChangeLanguageDropdown_rootDirectionBottom_YSGc1",
                    decor: "ChangeLanguageDropdown_decor_YdiR1",
                    rootDirectionTop: "ChangeLanguageDropdown_rootDirectionTop_wOAie",
                    wrapper: "ChangeLanguageDropdown_wrapper_cA7ZV"
                };
            var h = n(348118);
            const g = {};
            g["$style"] = m;
            const v = (0, h.Z)(u, [
                    ["__cssModules", g]
                ]),
                _ = v,
                b = {
                    __name: "ChangeLanguage",
                    props: {
                        isFooterTheme: Boolean
                    },
                    setup(e) {
                        const t = e,
                            n = (0, r.oR)(),
                            p = (0, i.iH)(null),
                            d = (0, i.iH)(!1),
                            u = (0, a.Fl)((() => c.bPV.getByLang(n.getters.currentLang))),
                            m = (0, a.Fl)((() => t.isFooterTheme ? "top" : "bottom")),
                            h = (0, a.Fl)((() => t.isFooterTheme ? "footer" : "header")),
                            g = () => {
                                d.value = !d.value
                            },
                            v = e => {
                                p.value.contains(e.target) || (d.value = !1)
                            },
                            b = (0, a.Fl)((() => n.getters.languages.langs.length));
                        return (0, a.bv)((() => {
                            document.body.addEventListener("click", v)
                        })), (0, a.Jd)((() => {
                            document.body.removeEventListener("click", v)
                        })), (t, n) => ((0, a.wg)(), (0, a.iD)("div", {
                            ref_key: "root",
                            ref: p,
                            class: (0, o.C_)([t.$style.root, 1 === b.value && t.$style.unselectable])
                        }, [(0, a._)("button", {
                            class: (0, o.C_)([d.value ? t.$style.buttonActive : t.$style.button, e.isFooterTheme && t.$style.buttonFooterTheme]),
                            type: "button",
                            onClick: g
                        }, [(0, a._)("span", {
                            class: (0, o.C_)(t.$style.buttonTitle)
                        }, (0, o.zw)(u.value.labelAlpha2), 3), e.isFooterTheme ? (0, a.kq)("", !0) : ((0, a.wg)(), (0, a.j4)(l.Z, {
                            key: 0,
                            class: (0, o.C_)(t.$style.buttonIcon),
                            icon: "smooth-arrow-up"
                        }, null, 8, ["class"])), (0, a.Wm)(s.Z, {
                            size: e.isFooterTheme ? 15 : 16,
                            code: u.value.flag,
                            rounded: ""
                        }, null, 8, ["size", "code"])], 2), (0, a.Wm)(_, {
                            "is-open": d.value,
                            direction: m.value,
                            "place-opening": h.value
                        }, null, 8, ["is-open", "direction", "place-opening"])], 2))
                    }
                },
                f = {
                    root: "ChangeLanguage_root_xbrQJ",
                    button: "ChangeLanguage_button_kffnJ",
                    unselectable: "ChangeLanguage_unselectable_O9yER",
                    buttonActive: "ChangeLanguage_buttonActive_CjOll ChangeLanguage_button_kffnJ",
                    buttonIcon: "ChangeLanguage_buttonIcon_mtO76",
                    buttonFooterTheme: "ChangeLanguage_buttonFooterTheme_VirTp",
                    buttonTitle: "ChangeLanguage_buttonTitle_eh_mm"
                },
                y = {};
            y["$style"] = f;
            const w = (0, h.Z)(b, [
                    ["__cssModules", y]
                ]),
                C = w
        },
        857707: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var a = n(166252),
                o = n(3577);
            const i = {
                    class: "pwa-button"
                },
                r = {
                    class: "pwa-button-title"
                },
                s = {
                    class: "pwa-button-text"
                };

            function l(e, t, n, l, c, p) {
                const d = (0, a.up)("VIcon");
                return (0, a.wg)(), (0, a.iD)("div", {
                    class: (0, o.C_)(["pwa", {
                        small: n.small
                    }])
                }, [(0, a._)("div", {
                    class: "pwa-container",
                    onClick: t[0] || (t[0] = (...e) => p.onClick && p.onClick(...e))
                }, [(0, a._)("div", i, [(0, a._)("div", r, (0, o.zw)(p.os), 1), (0, a._)("div", s, (0, o.zw)(e.$store.getters.lang.button.pwa), 1)]), (0, a.Wm)(d, {
                    class: "pwa-icon",
                    icon: p.icon
                }, null, 8, ["icon"])])], 2)
            }
            var c = n(559166),
                p = n(715983);
            const d = {
                name: "PwaButton",
                components: {
                    VIcon: c.Z
                },
                inject: ["$platform"],
                props: {
                    small: Boolean
                },
                emits: ["click"],
                computed: {
                    isApple() {
                        return this.$platform.desktop.apple.mac
                    },
                    os() {
                        return this.isApple ? "Mac OS" : "Windows"
                    },
                    icon() {
                        return this.isApple ? "apple" : "windows"
                    }
                },
                methods: {
                    onClick() {
                        this.$emit("click"), p.Z.popup()
                    }
                }
            };
            var u = n(348118);
            const m = (0, u.Z)(d, [
                    ["render", l],
                    ["__scopeId", "data-v-47f19f5f"]
                ]),
                h = m
        },
        772569: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var a = n(166252);
            const o = ["src"],
                i = {
                    key: 2,
                    class: "CybersportTeamIcon CybersportTeamIcon--stub"
                };

            function r(e, t, n, r, s, l) {
                const c = (0, a.up)("VIcon");
                return e.src ? ((0, a.wg)(), (0, a.iD)("img", {
                    key: 0,
                    class: "CybersportTeamIcon",
                    src: e.src
                }, null, 8, o)) : n.hot ? ((0, a.wg)(), (0, a.j4)(c, {
                    key: 1,
                    class: "CybersportTeamIcon CybersportTeamIcon--stub-hot",
                    icon: e.$options.assets.cybersport.logoForStream
                }, null, 8, ["icon"])) : ((0, a.wg)(), (0, a.iD)("div", i))
            }
            var s = n(559166),
                l = n(99290);
            const c = {
                components: {
                    VIcon: s.Z
                },
                props: {
                    eSportTeamId: {
                        type: [Number, String]
                    },
                    hot: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    src: null
                }),
                created() {
                    try {
                        this.src = `${n(620249)(`./${this.eSportTeamId}.png`)}`
                    } catch (e) {}
                },
                assets: l.assets
            };
            var p = n(348118);
            const d = (0, p.Z)(c, [
                    ["render", r]
                ]),
                u = d
        },
        754689: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var a = n(166252),
                o = n(3577);
            const i = {
                    class: "translation"
                },
                r = ["src"],
                s = {
                    key: 1,
                    class: "translation-no-auth"
                },
                l = {
                    class: "translation-no-auth-title"
                },
                c = {
                    class: "translation-no-auth-subtitle"
                };

            function p(e, t, n, p, d, u) {
                return (0, a.wg)(), (0, a.iD)("div", i, [p.userStore.isAuthed ? ((0, a.wg)(), (0, a.iD)("iframe", {
                    key: 0,
                    ref: "iframe",
                    class: "translation-iframe",
                    src: u.urlNormalized,
                    allowfullscreen: "",
                    mozallowfullscreen: "",
                    webkitallowfullscreen: "",
                    scrolling: "no"
                }, null, 8, r)) : ((0, a.wg)(), (0, a.iD)("div", s, [(0, a._)("div", l, (0, o.zw)(u.text.title), 1), (0, a._)("div", c, [(0, a.Uk)((0, o.zw)(u.text.subtitle) + " ", 1), (0, a._)("span", {
                    class: "translation-link",
                    onClick: t[0] || (t[0] = (...e) => u.openModalRegister && u.openModalRegister(...e))
                }, (0, o.zw)(u.text.reg), 1), (0, a.Uk)(" " + (0, o.zw)(u.text.or) + " ", 1), (0, a._)("span", {
                    class: "translation-link",
                    onClick: t[1] || (t[1] = (...e) => u.openModalLogin && u.openModalLogin(...e))
                }, (0, o.zw)(u.text.login), 1), (0, a.Uk)(" " + (0, o.zw)(u.text.gg), 1)])]))])
            }
            var d = n(878417),
                u = n(657041),
                m = n(894710);
            const h = {
                inject: ["$modal"],
                props: {
                    url: {
                        type: String,
                        required: !0
                    }
                },
                setup() {
                    const e = (0, d.L)();
                    return {
                        userStore: e
                    }
                },
                computed: {
                    text() {
                        return this.$store.getters.lang.match_translation_info
                    },
                    urlNormalized() {
                        return this.url.includes("twitch") ? (0, u.J)(this.url) : this.url
                    }
                },
                methods: {
                    openModalRegister() {
                        this.$modal.open(m.bn)
                    },
                    openModalLogin() {
                        this.$modal.open(m._w)
                    }
                }
            };
            var g = n(348118);
            const v = (0, g.Z)(h, [
                    ["render", p],
                    ["__scopeId", "data-v-5fa18ed4"]
                ]),
                _ = v
        },
        350516: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var a = n(166252),
                o = n(3577);

            function i(e, t, n, i, r, s) {
                const l = (0, a.up)("VIcon"),
                    c = (0, a.up)("VButton");
                return (0, a.wg)(), (0, a.j4)(c, {
                    class: (0, o.C_)(["support-button", {
                        navigation: n.navigation
                    }]),
                    size: "sm",
                    rounded: n.rounded,
                    onClick: s.onClick
                }, {
                    default: (0, a.w5)((() => [(0, a.Wm)(l, {
                        icon: s.icon,
                        spin: i.spin
                    }, null, 8, ["icon", "spin"])])),
                    _: 1
                }, 8, ["rounded", "class", "onClick"])
            }
            var r = n(559166),
                s = n(583582),
                l = n(920346),
                c = n(894710);
            const p = "chat",
                d = "call",
                u = {
                    components: {
                        VButton: s.Z,
                        VIcon: r.Z
                    },
                    inject: ["$modal"],
                    props: {
                        type: {
                            type: String,
                            default: p,
                            validator: e => [p, d].includes(e)
                        },
                        rounded: Boolean,
                        navigation: Boolean
                    },
                    setup(e) {
                        const {
                            isLoading: t,
                            open: n
                        } = (0, l.YW)(), o = (0, a.Fl)((() => e.type === p && t.value));
                        return {
                            isSupportChatLoading: t,
                            spin: o,
                            supportChatOpen: n
                        }
                    },
                    computed: {
                        icon() {
                            switch (this.type) {
                                case p:
                                    return this.isSupportChatLoading ? "spinner" : "comment";
                                case d:
                                    return "phone";
                                default:
                                    throw new ReferenceError(`Unexpected button type: ${this.type}`)
                            }
                        }
                    },
                    methods: {
                        onClick() {
                            switch (this.type) {
                                case p:
                                    this.supportChatOpen();
                                    break;
                                case d:
                                    this.openModalCallSupport();
                                    break;
                                default:
                                    throw new ReferenceError(`Unexpected button type: ${this.type}`)
                            }
                        },
                        openModalCallSupport() {
                            this.$modal.open(c.zu)
                        }
                    }
                };
            var m = n(348118);
            const h = (0, m.Z)(u, [
                    ["render", i],
                    ["__scopeId", "data-v-74c04630"]
                ]),
                g = h
        },
        967861: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => V
            });
            var a = n(166252);
            const o = {
                    class: "mobile-pwa-info"
                },
                i = {
                    class: "mobile-pwa-info-text"
                },
                r = ["innerHTML"];

            function s(e, t, n, s, l, c) {
                const p = (0, a.up)("VImage"),
                    d = (0, a.up)("Spinner"),
                    u = (0, a.up)("PwaInfoDescription");
                return (0, a.wg)(), (0, a.iD)("div", o, [c.image ? ((0, a.wg)(), (0, a.j4)(p, {
                    key: 0,
                    image: c.image
                }, null, 8, ["image"])) : (0, a.kq)("", !0), (0, a._)("div", i, [(0, a.Wm)(u, {
                    "raw-message": c.text.message
                }, {
                    default: (0, a.w5)((({
                        message: e,
                        isLoading: t
                    }) => [(0, a._)("div", null, [t ? ((0, a.wg)(), (0, a.j4)(d, {
                        key: 0,
                        class: "mobile-pwa-info-spinner"
                    })) : ((0, a.wg)(), (0, a.iD)("div", {
                        key: 1,
                        innerHTML: s.DOMPurify.sanitize(e)
                    }, null, 8, r))])])),
                    _: 1
                }, 8, ["raw-message"])])])
            }
            var l = n(827856),
                c = n.n(l),
                p = n(280894),
                d = n(172539),
                u = n(575913),
                m = n(3577);
            const h = {
                class: "v-image"
            };

            function g(e, t, n, o, i, r) {
                return (0, a.wg)(), (0, a.iD)("div", h, [r.imageRatio ? ((0, a.wg)(), (0, a.iD)("div", {
                    key: 0,
                    class: (0, m.C_)(["v-image-sizing", {
                        loading: e.loading
                    }]),
                    style: (0, m.j5)(r.sizingStyle)
                }, null, 6)) : (0, a.kq)("", !0), (0, a._)("img", (0, a.dG)(r.vBind, {
                    onLoad: t[0] || (t[0] = (...e) => r.loaded && r.loaded(...e))
                }), null, 16)])
            }
            var v = Object.defineProperty,
                _ = Object.defineProperties,
                b = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                y = Object.prototype.hasOwnProperty,
                w = Object.prototype.propertyIsEnumerable,
                C = (e, t, n) => t in e ? v(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                S = (e, t) => {
                    for (var n in t || (t = {})) y.call(t, n) && C(e, n, t[n]);
                    if (f)
                        for (var n of f(t)) w.call(t, n) && C(e, n, t[n]);
                    return e
                },
                k = (e, t) => _(e, b(t));
            const A = {
                name: "VImage",
                props: {
                    image: {
                        type: [Object, String],
                        required: !0
                    },
                    ratio: {
                        type: Number,
                        default: null
                    }
                },
                data: () => ({
                    loading: !0
                }),
                computed: {
                    vBind() {
                        const {
                            srcSet: e,
                            src: t
                        } = this.image;
                        return k(S({}, e ? {
                            srcset: e
                        } : {}), {
                            src: t || this.image,
                            class: {
                                "v-image-ratio": this.imageRatio
                            }
                        })
                    },
                    sizingStyle() {
                        return {
                            paddingBottom: `calc(100% * ${this.imageRatio})`
                        }
                    },
                    imageRatio() {
                        const {
                            width: e = 1,
                            height: t = 0
                        } = this.image;
                        return this.ratio || t / e
                    }
                },
                created() {
                    window.addEventListener("orientationchange", this.$forceUpdate, !0)
                },
                unmounted() {
                    window.removeEventListener("orientationchange", this.$forceUpdate, !0)
                },
                methods: {
                    loaded() {
                        this.loading = !1
                    }
                }
            };
            var O = n(348118);
            const I = (0, O.Z)(A, [
                    ["render", g],
                    ["__scopeId", "data-v-1bb8a4fc"]
                ]),
                T = I;
            var E = n(99290),
                P = n(715764),
                M = n(823827),
                N = Object.defineProperty,
                L = Object.defineProperties,
                $ = Object.getOwnPropertyDescriptors,
                R = Object.getOwnPropertySymbols,
                Z = Object.prototype.hasOwnProperty,
                B = Object.prototype.propertyIsEnumerable,
                H = (e, t, n) => t in e ? N(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                D = (e, t) => {
                    for (var n in t || (t = {})) Z.call(t, n) && H(e, n, t[n]);
                    if (R)
                        for (var n of R(t)) B.call(t, n) && H(e, n, t[n]);
                    return e
                },
                W = (e, t) => L(e, $(t));
            const x = {
                    name: "MobilePWAInfoTooltip",
                    components: {
                        Spinner: u.Z,
                        PwaInfoDescription: d.Z,
                        VImage: T
                    },
                    props: {
                        platform: {
                            type: String,
                            validator: e => [P.p.PLATFORM_ANDROID, P.p.PLATFORM_IOS].includes(e),
                            default: P.p.PLATFORM_ANDROID
                        }
                    },
                    setup() {
                        const {
                            isNativeAppAvailable: e,
                            assetMobileApp: t
                        } = (0, M.M)();
                        return {
                            DOMPurify: c(),
                            isNativeAppAvailable: e,
                            assetMobileApp: t
                        }
                    },
                    computed: W(D({}, (0, p.Se)(["lang", "currentLang", "currency"])), {
                        image() {
                            return this.isNativeAppAvailable ? this.assetMobileApp.infoTooltip : E.assets.mobilePWATooltipImages[this.platform][this.currentLang] || E.assets.mobilePWATooltipImages[this.platform].en
                        },
                        text() {
                            return this.lang.MobilePWAInfoTooltip
                        }
                    })
                },
                j = (0, O.Z)(x, [
                    ["render", s],
                    ["__scopeId", "data-v-6d30a2ea"]
                ]),
                V = j
        },
        293646: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a.Z
            });
            var a = n(106964)
        },
        106964: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var a = n(995198),
                o = n(496393);
            const i = {
                components: {
                    Tooltip: a.ZP,
                    TooltipContent: o.Z
                },
                props: {
                    hide: Boolean,
                    placement: {
                        default: "bottom-start",
                        required: !1,
                        type: String,
                        validator: a.CE
                    },
                    strategy: {
                        default: "fixed",
                        required: !1,
                        type: String,
                        validator: a.Pl
                    },
                    offset: {
                        type: Array,
                        default: () => [0, 4],
                        validator: a.j7
                    },
                    backgroundColor: {
                        type: String,
                        default: "#fff"
                    }
                },
                data: () => ({
                    isOpen: !1
                }),
                methods: {
                    close() {
                        this.hide || (this.isOpen = !1)
                    },
                    open() {
                        this.hide || (this.isOpen = !0)
                    }
                }
            }
        },
        422554: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => o
            });
            var a = n(166252);

            function o(e, t, n, o, i, r) {
                const s = (0, a.up)("TooltipContent"),
                    l = (0, a.up)("Tooltip");
                return (0, a.wg)(), (0, a.j4)(l, {
                    "is-open": e.isOpen,
                    placement: n.placement,
                    strategy: n.strategy,
                    offset: n.offset,
                    onMouseover: r.open,
                    onMouseleave: r.close
                }, {
                    tooltip: (0, a.w5)((({
                        placement: t
                    }) => [(0, a.WI)(e.$slots, "content", {
                        placement: t
                    }, (() => [(0, a.Wm)(s, {
                        placement: t,
                        "background-color": n.backgroundColor
                    }, {
                        default: (0, a.w5)((() => [(0, a.WI)(e.$slots, "tooltip")])),
                        _: 2
                    }, 1032, ["placement", "background-color"])]))])),
                    default: (0, a.w5)((() => [(0, a.WI)(e.$slots, "default")])),
                    _: 3
                }, 8, ["is-open", "placement", "strategy", "offset", "onMouseover", "onMouseleave"])
            }
        },
        123543: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => o.Z,
                w: () => a.Z
            });
            var a = n(159248),
                o = n(490028)
        },
        657041: (e, t, n) => {
            "use strict";

            function a(e) {
                return `${e}&parent=${window.location.hostname}`
            }
            n.d(t, {
                J: () => a
            })
        },
        987706: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            const a = ({
                odd: e,
                outcome: t,
                config: n,
                specialValue: a,
                isSpecial: o
            }) => {
                var i;
                const r = (null == e ? void 0 : e.coefficient) > 99 ? 0 : 2,
                    s = null == (i = null == e ? void 0 : e.coefficient) ? void 0 : i.toFixed(r),
                    l = a;
                return {
                    odd: e,
                    config: n,
                    outcome: t,
                    specialValue: a,
                    isSpecial: !!o,
                    key: e ? e.id : `${n.groups.join(",")}${null==t?void 0:t.outcome}`,
                    name: null == t ? void 0 : t.translations,
                    disabled: !(!(null == e ? void 0 : e.disabled) && !l),
                    special: l,
                    value: l || s,
                    coefficient: s
                }
            }
        },
        230770: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            const a = 3e3,
                o = new WeakMap,
                i = e => {
                    o.has(e) && (clearTimeout(o.get(e)), e.classList.remove("up", "down"), o.delete(e))
                },
                r = (e, t) => {
                    e.classList.add(t), o.set(e, setTimeout((() => {
                        i(e)
                    }), a))
                },
                s = (e, t, n) => {
                    if (!e || !t) return;
                    const a = Number.parseFloat(e),
                        o = Number.parseFloat(t);
                    a !== o && (i(n), r(n, a > o ? "up" : "down"))
                },
                l = s
        },
        927551: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createApp: () => Ap
            });
            var a = n(570576),
                o = n(567476),
                i = n(749963),
                r = n(835925);
            const s = {
                updated(e, t) {
                    t.value !== t.oldValue && t.arg(t.value, t.oldValue, e)
                }
            };
            var l = n(920346),
                c = n(736645),
                p = n(470575),
                d = n(135058),
                u = n(922810),
                m = n(957079),
                h = n(384714),
                g = n(95575),
                v = n(25083),
                _ = n(995751),
                b = n(998643),
                f = n(932256),
                y = n(957009);
            const w = Symbol("Call support rule"),
                C = (e, t) => void 0 === e || "boolean" === typeof e && t.rootGetters.supportNumber;
            var S = n(894710);
            const k = {
                [S.g4]: {
                    component: () => n.e(3747).then(n.bind(n, 603747))
                },
                [S.P1]: {
                    component: () => n.e(97134).then(n.bind(n, 97134)),
                    meta: {
                        [y.Bp]: !1
                    }
                },
                [S._w]: {
                    component: () => Promise.all([n.e(94998), n.e(16736), n.e(3673), n.e(64935)]).then(n.bind(n, 846247)),
                    meta: {
                        [y.Bp]: !1,
                        [f.Fgf]: !0,
                        [f.LU8]: !0
                    }
                },
                [S.Ou]: {
                    component: () => n.e(61582).then(n.bind(n, 606754)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.bn]: {
                    component: () => n.e(18857).then(n.bind(n, 618857)),
                    meta: {
                        [y.Bp]: !1,
                        [f.$qw]: !0,
                        [f.bW2]: !0,
                        [f.Fgf]: !0,
                        [f.LU8]: !0
                    }
                },
                [S.KD]: {
                    component: () => Promise.all([n.e(94998), n.e(6353), n.e(97266), n.e(84776), n.e(99760)]).then(n.bind(n, 999760)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.Uj]: {
                    component: () => n.e(52354).then(n.bind(n, 952354)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.$M]: {
                    component: () => Promise.all([n.e(74217), n.e(33375), n.e(60861), n.e(6353), n.e(39487), n.e(39048), n.e(26925), n.e(92758)]).then(n.bind(n, 754759)),
                    meta: {
                        [y.Bp]: !0,
                        [f.tRn]: !0,
                        [f.vY4]: !0,
                        [f.Ewr]: !0,
                        [f.Fgf]: !0
                    }
                },
                [S.bZ]: {
                    component: () => Promise.all([n.e(94998), n.e(46233), n.e(88627), n.e(74217), n.e(33375), n.e(60861), n.e(3121), n.e(6353), n.e(39487), n.e(87286), n.e(24052), n.e(55496), n.e(75891), n.e(52797), n.e(39048), n.e(84227)]).then(n.bind(n, 619303)),
                    meta: {
                        [y.Bp]: !0,
                        [f.Fgf]: !0,
                        [f.Z4M]: !0
                    }
                },
                [S.xX]: {
                    component: () => Promise.all([n.e(74217), n.e(3121), n.e(3387)]).then(n.bind(n, 79191)),
                    meta: {
                        [y.Bp]: !0,
                        [f.Fgf]: !0
                    }
                },
                [S.cj]: {
                    component: () => Promise.all([n.e(33375), n.e(67207)]).then(n.bind(n, 350043)),
                    meta: {
                        [y.Bp]: !0,
                        [f.Fgf]: !0
                    }
                },
                [S.ji]: {
                    component: () => Promise.all([n.e(94998), n.e(53687)]).then(n.bind(n, 962211)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.lD]: {
                    component: () => n.e(61725).then(n.bind(n, 461725))
                },
                [S.Mw]: {
                    component: () => n.e(26692).then(n.bind(n, 626692))
                },
                [S.hR]: {
                    component: () => n.e(39523).then(n.bind(n, 633080))
                },
                [S.zu]: {
                    component: () => n.e(30708).then(n.bind(n, 430708)),
                    meta: {
                        [w]: !0
                    }
                },
                [S.YY]: {
                    component: () => n.e(30190).then(n.bind(n, 830190))
                },
                [S.sJ]: {
                    component: () => n.e(81022).then(n.bind(n, 881022)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.pg]: {
                    component: () => n.e(89536).then(n.bind(n, 389536)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.Qh]: {
                    component: () => n.e(99063).then(n.bind(n, 499063))
                },
                [S.EJ]: {
                    component: () => n.e(52791).then(n.bind(n, 252791)),
                    [y.Bp]: !0
                },
                [S.hJ]: {
                    component: () => n.e(3209).then(n.bind(n, 103209))
                },
                [S.WA]: {
                    component: () => n.e(18975).then(n.bind(n, 418975))
                },
                [S.Zf]: {
                    component: () => n.e(16408).then(n.bind(n, 916408))
                },
                [S.D9]: {
                    component: () => n.e(15634).then(n.bind(n, 215634))
                },
                [S.kt]: {
                    component: () => Promise.all([n.e(6310), n.e(59114), n.e(66980)]).then(n.bind(n, 419833))
                },
                [S.nL]: {
                    component: () => Promise.all([n.e(82155), n.e(76816)]).then(n.bind(n, 479153))
                },
                [S.Nh]: {
                    component: () => Promise.all([n.e(22759), n.e(32103)]).then(n.bind(n, 708233))
                },
                [S.L3]: {
                    component: () => Promise.all([n.e(6310), n.e(65923), n.e(70734)]).then(n.bind(n, 905489))
                },
                [S.vZ]: {
                    component: () => Promise.all([n.e(170), n.e(99106)]).then(n.bind(n, 211422))
                },
                [S.zj]: {
                    component: () => n.e(60771).then(n.bind(n, 260771)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.sF]: {
                    component: () => n.e(56256).then(n.bind(n, 256256)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.VX]: {
                    component: () => n.e(25270).then(n.bind(n, 325270)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.ug]: {
                    component: () => n.e(91706).then(n.bind(n, 391706)),
                    meta: {
                        [y.Bp]: !0,
                        [f.Fgf]: !0
                    }
                },
                [S.y2]: {
                    component: () => n.e(66326).then(n.bind(n, 66326)),
                    meta: {
                        [y.Bp]: !0,
                        [f.Fgf]: !0
                    }
                },
                [S.IB]: {
                    component: () => n.e(66136).then(n.bind(n, 766136)),
                    meta: {
                        [y.Bp]: !0,
                        [f.Fgf]: !0
                    }
                },
                [S.cW]: {
                    component: () => n.e(71267).then(n.bind(n, 871267))
                },
                [S.NM]: {
                    component: () => n.e(20082).then(n.bind(n, 620082)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.dE]: {
                    component: () => Promise.all([n.e(59278), n.e(81189)]).then(n.bind(n, 771325)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.Rq]: {
                    component: () => n.e(84454).then(n.bind(n, 984454)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.pJ]: {
                    component: () => Promise.all([n.e(64496), n.e(4594)]).then(n.bind(n, 544005)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.te]: {
                    component: () => Promise.all([n.e(26323), n.e(58456)]).then(n.bind(n, 23847))
                },
                [S.B1]: {
                    component: () => Promise.all([n.e(94998), n.e(16736), n.e(65451), n.e(79031)]).then(n.bind(n, 681113))
                },
                [S.J9]: {
                    component: () => n.e(78331).then(n.bind(n, 878331)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.ju]: {
                    component: () => Promise.all([n.e(87880), n.e(17186)]).then(n.bind(n, 503298)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.a1]: {
                    component: () => n.e(77387).then(n.bind(n, 577387)),
                    meta: {
                        [y.Bp]: !1,
                        [f.Fgf]: !0
                    }
                },
                [S.A7]: {
                    component: () => n.e(78093).then(n.bind(n, 778093))
                },
                [S.iF]: {
                    component: () => n.e(87486).then(n.bind(n, 87486))
                },
                [S.j4]: {
                    component: () => n.e(75974).then(n.bind(n, 975974))
                },
                [S.Fc]: {
                    component: () => n.e(38096).then(n.bind(n, 938096))
                },
                [S.lT]: {
                    component: () => n.e(17054).then(n.bind(n, 817054))
                },
                [S._I]: {
                    component: () => n.e(85737).then(n.bind(n, 985737))
                },
                [S.ui]: {
                    component: () => n.e(75413).then(n.bind(n, 875413))
                },
                [S.RS]: {
                    component: () => n.e(42223).then(n.bind(n, 242223))
                },
                [S.sQ]: {
                    component: () => n.e(33560).then(n.bind(n, 533560))
                },
                [S.Fg]: {
                    component: () => n.e(72855).then(n.bind(n, 872855))
                },
                [S.X3]: {
                    component: () => n.e(58306).then(n.bind(n, 158306))
                },
                [S.T2]: {
                    component: () => n.e(94673).then(n.bind(n, 994673))
                },
                [S.C3]: {
                    component: () => Promise.all([n.e(93057), n.e(41055)]).then(n.bind(n, 290173))
                },
                [S.GO]: {
                    component: () => n.e(38016).then(n.bind(n, 938016))
                },
                [S.si]: {
                    component: () => n.e(27423).then(n.bind(n, 427423))
                },
                [S.Qv]: {
                    component: () => n.e(57417).then(n.bind(n, 157417))
                },
                [S.tt]: {
                    component: () => n.e(42583).then(n.bind(n, 742583))
                },
                [S.Y9]: {
                    component: () => Promise.all([n.e(54256), n.e(3742)]).then(n.bind(n, 717655))
                },
                [S.rF]: {
                    component: () => n.e(28519).then(n.bind(n, 28519))
                },
                [S.tw]: {
                    component: () => n.e(40117).then(n.bind(n, 540117)),
                    meta: {
                        [f.Fgf]: !0
                    }
                },
                [S.go]: {
                    component: () => n.e(14625).then(n.bind(n, 914625)),
                    meta: {
                        [f.Fgf]: !0
                    }
                },
                [S.N5]: {
                    component: () => n.e(27462).then(n.bind(n, 227462))
                },
                [S.fE]: {
                    component: () => n.e(41733).then(n.bind(n, 641733))
                },
                [S.Xy]: {
                    component: () => n.e(77721).then(n.bind(n, 477721)),
                    meta: {
                        [y.Bp]: !0
                    }
                },
                [S.zD]: {
                    component: () => Promise.all([n.e(31894), n.e(60358)]).then(n.bind(n, 743002))
                },
                [S.JT]: {
                    component: () => n.e(56065).then(n.bind(n, 156065))
                },
                [S.WV]: {
                    component: () => n.e(41578).then(n.bind(n, 741578))
                },
                [S.mU]: {
                    component: () => n.e(53709).then(n.bind(n, 453709))
                },
                [S.k]: {
                    component: () => n.e(40798).then(n.bind(n, 840798))
                },
                [S.yL]: {
                    component: () => n.e(82513).then(n.bind(n, 682513))
                },
                [S.JM]: {
                    component: () => n.e(36993).then(n.bind(n, 536993))
                },
                [S.dz]: {
                    component: () => Promise.all([n.e(94998), n.e(82591), n.e(16736), n.e(17599), n.e(71839)]).then(n.bind(n, 611163))
                },
                [S.Ub]: {
                    component: () => n.e(87031).then(n.bind(n, 287031))
                },
                [S._W]: {
                    component: () => n.e(57354).then(n.bind(n, 757354))
                },
                [S.y6]: {
                    component: () => n.e(71897).then(n.bind(n, 224943))
                },
                [S._A]: {
                    component: () => n.e(59001).then(n.bind(n, 859001))
                },
                [S.Rb]: {
                    component: () => Promise.all([n.e(94998), n.e(47315)]).then(n.bind(n, 347315))
                },
                [S.Fe]: {
                    component: () => n.e(73485).then(n.bind(n, 473485))
                },
                [S.pQ]: {
                    component: () => n.e(98757).then(n.bind(n, 398757))
                },
                [S.zG]: {
                    component: () => n.e(43285).then(n.bind(n, 343285))
                },
                [S.yy]: {
                    component: () => n.e(75109).then(n.bind(n, 975109))
                },
                [S.B0]: {
                    component: () => n.e(65576).then(n.bind(n, 865576))
                },
                [S.Zj]: {
                    component: () => n.e(2937).then(n.bind(n, 202937))
                },
                [S.j3]: {
                    component: () => n.e(89084).then(n.bind(n, 389084))
                },
                [S.ee]: {
                    component: () => n.e(14530).then(n.bind(n, 314530))
                },
                [S.Xs]: {
                    component: () => n.e(95500).then(n.bind(n, 195500))
                }
            };
            var A = n(548173),
                O = n(510284),
                I = n(278037),
                T = n(597989),
                E = n(811833),
                P = n(443999),
                M = n(779547),
                N = (e, t, n) => new Promise(((a, o) => {
                    var i = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                    s((n = n.apply(e, t)).next())
                }));
            const L = (e, t) => {
                    const {
                        meta: n = {}
                    } = e;
                    if (w in n) {
                        const e = C(n[w], t);
                        if (!e) throw new Error("Call support not allowed")
                    }
                },
                $ = (e, t, n) => N(void 0, null, (function*() {
                    var a;
                    const {
                        meta: o = {}
                    } = e, {
                        isMandatoryVerificationWithdrawalModal: i,
                        getPhonePrefixMatch: r
                    } = (0, E.b)(), {
                        isShowGhanaPhoneVerificationRegistration: s
                    } = (0, O.M)();
                    let l = !1;
                    const c = i.value && r(t.rootGetters.user.phone) && !t.rootGetters.user.phone_verification,
                        p = (null == (a = t.rootGetters) ? void 0 : a.user.phone_verification) && (i.value || s.value);
                    if (!0 === o[f.tRn] && !p && !c) try {
                        yield t.dispatch("verification/email/loadInfo", null, {
                            root: !0
                        }), l = !0
                    } catch (d) {}
                    if (l && t.rootGetters["verification/email/isVerificationRequired"]) throw n(S.te), new Error("Email is not verified")
                })),
                R = (e, t, n) => N(void 0, null, (function*() {
                    const {
                        meta: a = {}
                    } = e, {
                        isMandatoryVerificationWithdrawalModal: o,
                        getPhonePrefixMatch: i
                    } = (0, E.b)(), r = o.value && i(t.rootGetters.user.phone) && !t.rootGetters.user.phone_verification;
                    if (!0 === a[f.vY4] && r) throw t.dispatch("open", {
                        name: S.B1,
                        options: {
                            props: {
                                onConfirmed: () => {
                                    n(S.$M)
                                }
                            }
                        }
                    }), new Error("Phone is not verified")
                })),
                Z = (e, t) => N(void 0, null, (function*() {
                    const {
                        meta: n = {}
                    } = e, a = (0, I.l)(), o = (0, M.N)(), i = (0, T.d)(), r = f.Ewr in n && (yield a.getIsKycAvailable());
                    if (r && (yield i.loadStatusData(), o.data.status !== A.sF.SUCCESS)) throw t(S.ju), new Error("Kyc: verification guard failed")
                }));

            function B(e, t, n) {
                return N(this, null, (function*() {
                    yield Promise.all([(0, P.Z)(e, t, n), L(e, t), R(e, t, n), $(e, t, n), Z(e, n)])
                }))
            }
            var H = n(166252),
                D = n(602262),
                W = n(322201),
                x = n(280894),
                j = n(323733),
                V = n(887228),
                G = n(908869),
                U = n(693418),
                F = n(296861),
                z = n(932116),
                Y = n(535382),
                q = n(50714),
                K = n(565670),
                J = n(195888),
                X = n(377823),
                Q = n(3577);

            function ee(e, t, n, a, o, i) {
                const r = (0, H.up)("MatchTranslation"),
                    s = (0, H.up)("VIcon");
                return (0, H.wg)(), (0, H.iD)("div", {
                    class: (0, Q.C_)(["translation-container", {
                        active: e.isDrag
                    }])
                }, [((0, H.wg)(), (0, H.j4)(r, {
                    key: e.currentTranslation,
                    class: "translation-container-iframe",
                    url: e.currentTranslation
                }, null, 8, ["url"])), t[3] || (t[3] = (0, H._)("div", {
                    class: "translation-container-overlay"
                }, null, -1)), (0, H._)("div", {
                    class: "translation-container-drag",
                    onMousedown: t[0] || (t[0] = (...e) => i.mousedown && i.mousedown(...e)),
                    onMouseup: t[1] || (t[1] = (...e) => i.mouseup && i.mouseup(...e))
                }, [(0, H.Wm)(s, {
                    icon: "arrows",
                    square: ""
                })], 32), (0, H._)("div", {
                    class: "translation-container-close",
                    onClick: t[2] || (t[2] = (...e) => i.closeTranslation && i.closeTranslation(...e))
                }, [(0, H.Wm)(s, {
                    icon: "times",
                    square: ""
                })])], 2)
            }
            var te = n(559166),
                ne = n(754689),
                ae = Object.defineProperty,
                oe = Object.defineProperties,
                ie = Object.getOwnPropertyDescriptors,
                re = Object.getOwnPropertySymbols,
                se = Object.prototype.hasOwnProperty,
                le = Object.prototype.propertyIsEnumerable,
                ce = (e, t, n) => t in e ? ae(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                pe = (e, t) => {
                    for (var n in t || (t = {})) se.call(t, n) && ce(e, n, t[n]);
                    if (re)
                        for (var n of re(t)) le.call(t, n) && ce(e, n, t[n]);
                    return e
                },
                de = (e, t) => oe(e, ie(t));
            const ue = 10,
                me = 2,
                he = {
                    name: "TranslationContainer",
                    components: {
                        MatchTranslation: ne.Z,
                        VIcon: te.Z
                    },
                    data: () => ({
                        prevMouseX: 0,
                        prevMouseY: 0,
                        startX: 5,
                        startY: 5,
                        isDrag: !1
                    }),
                    computed: pe({}, (0, x.Se)({
                        currentTranslation: "bets/currentTranslation"
                    })),
                    mounted() {
                        this.setPosition(document.body.clientWidth, 0), document.addEventListener("mousemove", this.mousemove), document.addEventListener("mouseup", this.mouseup)
                    },
                    beforeUnmount() {
                        document.removeEventListener("mousemove", this.mousemove), document.removeEventListener("mouseup", this.mouseup)
                    },
                    methods: de(pe({}, (0, x.OI)("bets", ["setCurrentTranslation"])), {
                        closeTranslation() {
                            this.setCurrentTranslation()
                        },
                        mousedown(e) {
                            this.isDrag = !0;
                            const {
                                x: t,
                                y: n
                            } = this.getPosition();
                            this.startX = t, this.startY = n, this.prevMouseX = e.clientX, this.prevMouseY = e.clientY
                        },
                        mouseup() {
                            this.isDrag = !1
                        },
                        mousemove(e) {
                            if (!this.isDrag) return;
                            const t = e.clientX,
                                n = e.clientY,
                                a = this.startX + (t - this.prevMouseX),
                                o = this.startY + (n - this.prevMouseY);
                            this.setPosition(a, o)
                        },
                        setPosition(e, t) {
                            const {
                                x: n,
                                y: a
                            } = this.fixCollision(e, t);
                            this.$el.style.left = `${n}px`, this.$el.style.top = `${a}px`
                        },
                        getPosition(e = this.$el) {
                            return {
                                x: Number.parseInt(e.style.left, 10),
                                y: Number.parseInt(e.style.top, 10)
                            }
                        },
                        fixCollision(e, t) {
                            const n = document.body.clientWidth,
                                a = document.body.clientHeight,
                                o = this.$el.clientWidth,
                                i = this.$el.clientHeight;
                            let r = Math.floor(e / me) * me,
                                s = Math.floor(t / me) * me;
                            return n - ue < r + o && (r = n - ue - o), ue > r && (r = ue), a - ue < s + i && (s = a - ue - i), ue > s && (s = ue), {
                                x: r,
                                y: s
                            }
                        }
                    })
                };
            var ge = n(348118);
            const ve = (0, ge.Z)(he, [
                    ["render", ee],
                    ["__scopeId", "data-v-c63db8f6"]
                ]),
                _e = ve;
            var be = n(932077),
                fe = n(376739);
            const ye = {
                    id: "app"
                },
                we = (0, H.aZ)({
                    __name: "RootLayout",
                    setup(e) {
                        const t = (0, H.f3)("userIntention"),
                            n = (0, x.oR)(),
                            a = (0, W.tv)();
                        null == t || t.resolve(), (0, q.y)().init(), (0, K.I)().init(), (0, j.G)(), (0, J.g)();
                        const o = () => {
                            (0, X.HF)("end", a.options.history.state.back, a.options.history.state.current)
                        };
                        return (e, t) => {
                            const a = (0, H.up)("RouterView");
                            return (0, H.wg)(), (0, H.j4)(be.Z, {
                                name: "dark"
                            }, {
                                default: (0, H.w5)((() => [(0, H._)("div", ye, [(0, H.Wm)(fe.Z, null, {
                                    default: (0, H.w5)((() => [(0, H.Wm)(z.Z), (0, H.Wm)(U.Z), (0, H.Wm)(F.Z), (0, H.Wm)(Y.Z), (0, H.Wm)(V.Z), (0, H.Wm)(G.Z), (0, D.SU)(n).state.bets.currentTranslation ? ((0, H.wg)(), (0, H.j4)(_e, {
                                        key: 0
                                    })) : (0, H.kq)("", !0), (0, H.Wm)(a, null, {
                                        default: (0, H.w5)((({
                                            Component: e
                                        }) => [((0, H.wg)(), (0, H.j4)((0, H.LL)(e), {
                                            onVnodeMounted: o,
                                            onVnodeUpdated: o
                                        }, null, 512))])),
                                        _: 1
                                    }), t[0] || (t[0] = (0, H._)("div", {
                                        id: "portal"
                                    }, null, -1)), t[1] || (t[1] = (0, H._)("div", {
                                        id: "depositBonusInstruction"
                                    }, null, -1))])),
                                    _: 1
                                })])])),
                                _: 1
                            })
                        }
                    }
                }),
                Ce = we,
                Se = Ce;
            var ke = n(827601),
                Ae = n(939308),
                Oe = n(54793);
            class Ie {
                constructor() {
                    window.addEventListener("popstate", (() => {
                        this._isPopStateHandlerInvoked = !0
                    }))
                }
                registerRouterBeforeEachHook(e) {
                    e.beforeEach(((t, n, a) => {
                        e.isPopstateAction = this._isPopStateHandlerInvoked, this._resetIsPopStateInvokedMark(), a()
                    }))
                }
                _resetIsPopStateInvokedMark() {
                    this._isPopStateHandlerInvoked = !1
                }
            }
            const Te = new Ie,
                Ee = Te;
            var Pe = n(816243),
                Me = n(203842),
                Ne = n(305653),
                Le = n(69302),
                $e = n(771001),
                Re = n(585400),
                Ze = n(432519),
                Be = n(558425),
                He = n(326660),
                De = n(283779),
                We = n(952425),
                xe = n(909997),
                je = n(112808);

            function Ve(e, t, n, a, o, i) {
                const r = (0, H.up)("RouterView"),
                    s = (0, H.up)("BetsContentLayout");
                return (0, H.wg)(), (0, H.iD)("div", null, [(0, H._)("div", {
                    class: (0, Q.C_)(e.$style.main)
                }, [(0, H.Wm)(r, {
                    class: (0, Q.C_)(e.$style.aside),
                    name: "left"
                }, null, 8, ["class"]), (0, H.Wm)(s, (0, H.dG)({
                    class: e.$style.mainContent,
                    "is-overflow-visible": n.isOverflowVisible
                }, e.$attrs, {
                    onScroll: i.onScroll
                }), null, 16, ["class", "is-overflow-visible", "onScroll"]), (0, H.Wm)(r, {
                    class: (0, Q.C_)([e.$style.aside, e.$style.asideRight]),
                    name: "right"
                }, null, 8, ["class"])], 2), (0, H.Wm)(r, {
                    class: (0, Q.C_)(e.$style.footer),
                    name: "footer"
                }, null, 8, ["class"])])
            }

            function Ge(e, t, n, a, o, i) {
                const r = (0, H.up)("RouterView");
                return (0, H.wg)(), (0, H.iD)("div", (0, H.dG)({
                    class: ["main-content", {
                        "scrollbar-transparent": i.hideScrollbar && !o.isScrolling,
                        visible: n.isOverflowVisible
                    }],
                    onScroll: t[0] || (t[0] = (...e) => i.onScroll && i.onScroll(...e))
                }, (0, H.mx)(e.$attrs, !0)), [(0, H.Wm)(r, {
                    name: "slider"
                }), (0, H.Wm)(r, {
                    key: "$route.path"
                })], 16)
            }
            const Ue = {
                    name: "BetsContentLayout",
                    props: {
                        isOverflowVisible: {
                            default: !1,
                            type: Boolean
                        }
                    },
                    data() {
                        return {
                            isScrolling: !1,
                            timeout: null
                        }
                    },
                    computed: {
                        hideScrollbar() {
                            return void 0 !== this.$route.params.match
                        }
                    },
                    methods: {
                        onScroll() {
                            this.timeout && clearTimeout(this.timeout), this.isScrolling || (this.isScrolling = !0), this.timeout = setTimeout(this.setStatic, 100)
                        },
                        setStatic() {
                            this.isScrolling = !1
                        }
                    }
                },
                Fe = (0, ge.Z)(Ue, [
                    ["render", Ge],
                    ["__scopeId", "data-v-416d0af4"]
                ]),
                ze = Fe,
                Ye = {
                    name: "BetsLayout",
                    components: {
                        BetsContentLayout: ze
                    },
                    props: {
                        isOverflowVisible: {
                            default: !1,
                            type: Boolean
                        }
                    },
                    data() {
                        return {
                            isShowGarland: !0
                        }
                    },
                    methods: {
                        onScroll(e) {
                            this.isShowGarland = e.target.scrollTop < 50
                        }
                    }
                },
                qe = {
                    main: "BetsLayout_main_uIRNt",
                    aside: "BetsLayout_aside_CxHuq",
                    asideRight: "BetsLayout_asideRight_Cy1vF",
                    mainContent: "BetsLayout_mainContent_W0uGf"
                },
                Ke = {};
            Ke["$style"] = qe;
            const Je = (0, ge.Z)(Ye, [
                    ["render", Ve],
                    ["__cssModules", Ke]
                ]),
                Xe = Je;

            function Qe(e, t, n, a, o, r) {
                const s = (0, H.up)("Forbidden"),
                    l = (0, H.up)("HeaderRules"),
                    c = (0, H.up)("HeaderTop"),
                    p = (0, H.up)("HeaderBottom"),
                    d = (0, H.up)("ChangePasswordNotification"),
                    u = (0, H.up)("PushNotificationsPopup"),
                    m = (0, H.up)("router-view"),
                    h = (0, H.up)("SupportPanel");
                return (0, H.wg)(), (0, H.iD)("div", null, [r.isSiteForbidden ? ((0, H.wg)(), (0, H.j4)(s, {
                    key: 0
                })) : ((0, H.wg)(), (0, H.iD)("div", {
                    key: 1,
                    id: "main-container",
                    class: (0, Q.C_)(r.allowFullScreenModeClass)
                }, [r.isRulesPage ? ((0, H.wg)(), (0, H.j4)(l, {
                    key: 0
                })) : ((0, H.wg)(), (0, H.iD)(H.HY, {
                    key: 1
                }, [(0, H.Wm)(c), (0, H.Wm)(p), (0, H.Wm)(d)], 64)), e.$options.appConfig.modules.bonuses ? ((0, H.wg)(), (0, H.j4)(u, {
                    key: 2
                })) : (0, H.kq)("", !0), (0, H._)("main", {
                    class: (0, Q.C_)(["content-wrapper", r.allowFullScreenModeClass])
                }, [((0, H.wg)(), (0, H.j4)(m, {
                    key: e.layoutKey
                }, {
                    default: (0, H.w5)((({
                        Component: t
                    }) => [(0, H.Wm)(i.uT, {
                        mode: "out-in",
                        name: e.transition
                    }, {
                        default: (0, H.w5)((() => [((0, H.wg)(), (0, H.j4)((0, H.LL)(t)))])),
                        _: 2
                    }, 1032, ["name"])])),
                    _: 1
                }))], 2)], 2)), (0, H.Wm)(h)])
            }
            var et = n(22726),
                tt = n(25697),
                nt = n(878417),
                at = n(470942);
            const ot = (0, H.aZ)({
                    __name: "PushNotificationsPopup",
                    setup(e) {
                        return (e, t) => ((0, H.wg)(), (0, H.iD)("div", {
                            class: (0, Q.C_)(e.$style.root)
                        }, [(0, H.Wm)(at.Z, {
                            class: (0, Q.C_)(e.$style.popup)
                        }, null, 8, ["class"])], 2))
                    }
                }),
                it = {
                    root: "PushNotificationsPopup_root_GMHep",
                    popup: "PushNotificationsPopup_popup_gY0Wj"
                },
                rt = {};
            rt["$style"] = it;
            const st = (0, ge.Z)(ot, [
                    ["__cssModules", rt]
                ]),
                lt = st,
                ct = {
                    ref: "container",
                    class: "level-list"
                },
                pt = {
                    ref: "logo",
                    class: "level-item"
                },
                dt = {
                    ref: "leftBottomNav",
                    class: "level-item fill"
                },
                ut = {
                    ref: "rightBottomNav",
                    class: "level-item"
                };

            function mt(e, t, n, a, o, r) {
                const s = (0, H.up)("Logo"),
                    l = (0, H.up)("RouterLink"),
                    c = (0, H.up)("NavigationItemCoverLine"),
                    p = (0, H.up)("Navigation"),
                    d = (0, H.up)("FluidCoverWrapper"),
                    u = (0, H.up)("HeaderUserMenu"),
                    m = (0, H.up)("HeaderAuth"),
                    h = (0, H.Q2)("resize");
                return (0, H.wy)(((0, H.wg)(), (0, H.iD)("div", {
                    class: (0, Q.C_)(["header__line--bottom", r.headerClass])
                }, [(0, H._)("div", ct, [(0, H._)("div", pt, [(0, H.wy)(((0, H.wg)(), (0, H.iD)("div", {
                    class: "logo-container",
                    onClickCapture: t[0] || (t[0] = t => r.onAnalyticsClick("logo", {
                        name: e.$options.ROUTE_NAME.HOME
                    }))
                }, [(0, H.Wm)(l, {
                    class: "logo-link",
                    to: {
                        name: e.$options.ROUTE_NAME.HOME
                    }
                }, {
                    default: (0, H.w5)((() => [(0, H.Wm)(s)])),
                    _: 1
                }, 8, ["to"])], 32)), [
                    [h, r.setMaxWidth]
                ])], 512), (0, H._)("div", dt, [(0, H.Wm)(d, {
                    "gpu-scaling-initial-height": e.$options.COVER_LINE_INITIAL_HEIGHT,
                    "gpu-scaling-initial-width": e.$options.COVER_LINE_INITIAL_WIDTH
                }, {
                    cover: (0, H.w5)((() => [(0, H.Wm)(c)])),
                    default: (0, H.w5)((({
                        updateFluidCover: t
                    }) => [(0, H.wy)((0, H.Wm)(p, {
                        items: a.navItems,
                        "max-width": e.maxWidth,
                        onUpdateActiveLine: t
                    }, null, 8, ["items", "max-width", "onUpdateActiveLine"]), [
                        [i.F8, e.loaded]
                    ])])),
                    _: 1
                }, 8, ["gpu-scaling-initial-height", "gpu-scaling-initial-width"])], 512), (0, H.wy)(((0, H.wg)(), (0, H.iD)("div", ut, [a.userStore.isAuthed ? ((0, H.wg)(), (0, H.j4)(u, {
                    key: 0
                })) : ((0, H.wg)(), (0, H.j4)(m, {
                    key: 1
                }))])), [
                    [h, r.setMaxWidth]
                ])], 512)], 2)), [
                    [h, r.setMaxWidth]
                ])
            }

            function ht(e, t, n, a, o, i) {
                const r = (0, H.Q2)("resize");
                return (0, H.wy)(((0, H.wg)(), (0, H.iD)("div", {
                    class: (0, Q.C_)(e.$style.wrapper)
                }, [(0, H.WI)(e.$slots, "default", {
                    updateFluidCover: i.updateFluidCover
                }), (0, H._)("div", {
                    class: (0, Q.C_)(e.$style.cover),
                    style: (0, Q.j5)(i.coverStyleVariablesObject)
                }, [(0, H.WI)(e.$slots, "cover")], 6)], 2)), [
                    [r, i.onResize]
                ])
            }
            var gt = n(923741),
                vt = n(951744),
                _t = (e, t, n) => new Promise(((a, o) => {
                    var i = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                    s((n = n.apply(e, t)).next())
                }));
            const bt = 500,
                ft = bt / 1e3 + "s",
                yt = Object.freeze({
                    STAGE_APPEARING_BEFORE: "appearing before",
                    STAGE_APPEARING_AFTER: "appearing after",
                    STAGE_DISAPPEARING_BEFORE: "disappearing before",
                    STAGE_DISAPPEARING_AFTER: "disappearing after",
                    STAGE_TRANSFORM_BEFORE: "transform before",
                    STAGE_TRANSFORM_AFTER: "transform after"
                }),
                wt = {
                    props: {
                        gpuScalingInitialHeight: {
                            type: Number,
                            default: null
                        },
                        gpuScalingInitialWidth: {
                            type: Number,
                            default: null
                        }
                    },
                    data() {
                        return {
                            stage: yt.STAGE_DISAPPEARING_AFTER,
                            elementOffsetInWrapperLeft: null,
                            elementOffsetInWrapperTop: null,
                            elementUnderCoverHeight: null,
                            elementUnderCoverWidth: null,
                            isAnimationDisabled: !1
                        }
                    },
                    computed: {
                        useVerticalGPUScaling() {
                            return null != this.gpuScalingInitialHeight
                        },
                        useHorizontalGPUScaling() {
                            return null != this.gpuScalingInitialWidth
                        },
                        cssVariableHeight() {
                            const e = this.useVerticalGPUScaling ? this.gpuScalingInitialHeight : this.elementUnderCoverHeight;
                            return e ? `${e}px` : void 0
                        },
                        cssVariableWidth() {
                            const e = this.useHorizontalGPUScaling ? this.gpuScalingInitialWidth : this.elementUnderCoverWidth;
                            return e ? `${e}px` : void 0
                        },
                        cssVariableOpacity() {
                            return [yt.STAGE_APPEARING_BEFORE, yt.STAGE_DISAPPEARING_AFTER].includes(this.stage) ? 0 : 1
                        },
                        cssVariableTransform() {
                            if (null === this.elementOffsetInWrapperLeft || null === this.elementOffsetInWrapperTop) return null;
                            let e = `translate(${this.elementOffsetInWrapperLeft}px, ${this.elementOffsetInWrapperTop}px)`;
                            return this.useHorizontalGPUScaling && (e += ` scaleX(${this.elementUnderCoverWidth/this.gpuScalingInitialWidth})`), this.useVerticalGPUScaling && (e += ` scaleY(${this.elementUnderCoverHeight/this.gpuScalingInitialHeight})`), e
                        },
                        cssVariableTransition() {
                            if (this.isAnimationDisabled) return null;
                            if ([yt.STAGE_APPEARING_BEFORE, yt.STAGE_DISAPPEARING_BEFORE].includes(this.stage)) return null;
                            let e = `opacity ${ft}`;
                            return [yt.STAGE_APPEARING_AFTER, yt.STAGE_DISAPPEARING_AFTER].includes(this.stage) || (e += `, transform ${ft}`, this.useVerticalGPUScaling || (e += `, height ${ft}`), this.useHorizontalGPUScaling || (e += `, width ${ft}`)), e
                        },
                        coverStyleVariablesObject() {
                            return {
                                "--fluid-cover-height": this.cssVariableHeight,
                                "--fluid-cover-width": this.cssVariableWidth,
                                "--fluid-cover-opacity": this.cssVariableOpacity,
                                "--fluid-cover-transition": this.cssVariableTransition,
                                "--fluid-cover-transform": this.cssVariableTransform
                            }
                        }
                    },
                    created() {
                        this.lastUpdateParams = [], window.addEventListener("orientationchange", this.onResize)
                    },
                    beforeUnmount() {
                        window.removeEventListener("orientationchange", this.onResize)
                    },
                    methods: {
                        updateFluidCover(e, t) {
                            return _t(this, null, (function*() {
                                const n = !e || t;
                                if (n && this.stage === yt.STAGE_DISAPPEARING_AFTER) return;
                                this.isAnimationDisabled = !1, n ? (this.stage = yt.STAGE_DISAPPEARING_BEFORE, e && e === this.lastUpdateParams[0] && !(0, gt.PZ)(e) && (this.isAnimationDisabled = !0)) : this.stage === yt.STAGE_DISAPPEARING_AFTER ? this.stage = yt.STAGE_APPEARING_BEFORE : this.stage = yt.STAGE_TRANSFORM_BEFORE, this.lastUpdateParams = [e, n];
                                const a = this.stage;
                                if (e && a !== yt.STAGE_DISAPPEARING_BEFORE) {
                                    const t = (0, gt.Zj)(e, this.$el);
                                    this.elementOffsetInWrapperLeft = t.left, this.elementOffsetInWrapperTop = t.top, this.elementUnderCoverHeight = e.offsetHeight, this.elementUnderCoverWidth = e.offsetWidth
                                }
                                switch (yield(0, vt.n)(), a) {
                                    case yt.STAGE_DISAPPEARING_BEFORE:
                                        this.stage = yt.STAGE_DISAPPEARING_AFTER;
                                        break;
                                    case yt.STAGE_APPEARING_BEFORE:
                                        this.stage = yt.STAGE_APPEARING_AFTER;
                                        break;
                                    default:
                                        this.stage = yt.STAGE_TRANSFORM_AFTER
                                }
                            }))
                        },
                        onResize() {
                            this.updateFluidCover(...this.lastUpdateParams)
                        }
                    }
                },
                Ct = {
                    wrapper: "FluidCoverWrapper_wrapper_G9VqC",
                    cover: "FluidCoverWrapper_cover_GbYY4"
                },
                St = {};
            St["$style"] = Ct;
            const kt = (0, ge.Z)(wt, [
                    ["render", ht],
                    ["__cssModules", St]
                ]),
                At = kt;
            var Ot = n(248625);
            const It = {
                    class: "header-auth"
                },
                Tt = {
                    class: "header-auth__item"
                },
                Et = {
                    class: "header-auth__item"
                };

            function Pt(e, t, n, a, o, i) {
                const r = (0, H.up)("VButton");
                return (0, H.wg)(), (0, H.iD)("div", It, [(0, H._)("div", Tt, [(0, H.Wm)(r, {
                    class: "header-button login",
                    type: "secondary",
                    "class-name": "df-aic-jcc",
                    "data-pw": "HEADER-AUTH-BUTTON",
                    onClick: i.openModalLogin
                }, {
                    default: (0, H.w5)((() => [(0, H._)("span", null, (0, Q.zw)(i.text["login-box"].login), 1)])),
                    _: 1
                }, 8, ["onClick"])]), (0, H._)("div", Et, [(0, H.Wm)(r, {
                    class: "header-button",
                    type: "green",
                    "class-name": "df-aic-jcc",
                    icon: "plus",
                    onClick: i.openModalRegister
                }, {
                    default: (0, H.w5)((() => [(0, H._)("span", null, (0, Q.zw)(i.registrationButtonText), 1)])),
                    _: 1
                }, 8, ["onClick"])])])
            }
            var Mt = n(479697),
                Nt = n(583582),
                Lt = n(884297);
            const $t = {
                    components: {
                        VButton: Nt.Z
                    },
                    inject: ["$modal"],
                    setup() {
                        const {
                            isShowPhoneVerificationByCountryAndNg: e
                        } = (0, E.b)();
                        return {
                            isShowPhoneVerificationByCountryAndNg: e
                        }
                    },
                    computed: {
                        text() {
                            return this.$store.getters.lang.header
                        },
                        registrationButtonText() {
                            const e = Lt.J_.reactiveStorageObject[Lt.x8],
                                t = Lt.J_.reactiveStorageObject[Lt.Jj];
                            return (null == t ? void 0 : t.currency) && (null == t ? void 0 : t.country) || this.isShowPhoneVerificationByCountryAndNg && !(0, Mt.Z)(e) ? this.text.completeRegistration : this.text.registration
                        }
                    },
                    methods: {
                        openModalLogin() {
                            this.$modal.open(S._w)
                        },
                        openModalRegister() {
                            this.$googleTagManager.handleHeaderEvent("navigation", {
                                element_name: "registration"
                            }), this.$modal.open(S.bn)
                        }
                    }
                },
                Rt = (0, ge.Z)($t, [
                    ["render", Pt],
                    ["__scopeId", "data-v-69a8e984"]
                ]),
                Zt = Rt;

            function Bt(e, t, n, a, o, i) {
                const r = (0, H.up)("HeaderBalance"),
                    s = (0, H.up)("HeaderUser"),
                    l = (0, H.up)("HeaderUserDropdown"),
                    c = (0, H.up)("HeaderUserNotifications");
                return (0, H.wg)(), (0, H.iD)("div", {
                    class: (0, Q.C_)(e.$style.root)
                }, [(0, H._)("div", {
                    class: (0, Q.C_)(e.$style.balance)
                }, [e.showBalance ? ((0, H.wg)(), (0, H.j4)(r, {
                    key: 0,
                    onOnButtonClick: a.depositButtonHandler
                }, null, 8, ["onOnButtonClick"])) : ((0, H.wg)(), (0, H.j4)(s, {
                    key: 1,
                    onOnButtonClick: a.depositButtonHandler
                }, null, 8, ["onOnButtonClick"]))], 2), (0, H._)("div", {
                    class: (0, Q.C_)(e.$style.buttons)
                }, [(0, H.Wm)(l), (0, H.Wm)(c)], 2)], 2)
            }
            var Ht = n(317384),
                Dt = n(374711);
            const Wt = {
                    class: "user-menu__toggle"
                },
                xt = {
                    class: "user-menu__item"
                };

            function jt(e, t, n, a, o, i) {
                const r = (0, H.up)("BadgeWarning"),
                    s = (0, H.up)("HeaderUserAvatar"),
                    l = (0, H.up)("VIcon"),
                    c = (0, H.up)("VDropdownItem"),
                    p = (0, H.up)("VDropdown");
                return (0, H.wg)(), (0, H.j4)(p, {
                    class: "user-menu",
                    angle: "",
                    align: "center"
                }, {
                    trigger: (0, H.w5)((e => [(0, H._)("div", {
                        class: "user-menu__avatar",
                        onClick: t[0] || (t[0] = (...e) => i.onTriggerClick && i.onTriggerClick(...e))
                    }, [(0, H._)("div", {
                        class: (0, Q.C_)(["user-menu__avatar-background", i.isWarningBadgeVisible && "with-badge"])
                    }, null, 2), i.isWarningBadgeVisible ? ((0, H.wg)(), (0, H.j4)(r, {
                        key: 0,
                        class: "user-menu__avatar-badge"
                    })) : (0, H.kq)("", !0), (0, H.Wm)(s), (0, H._)("div", Wt, [((0, H.wg)(), (0, H.j4)(l, {
                        key: e.isActive,
                        class: "user-menu-toggle__icon",
                        icon: e.isActive ? "times" : "dots"
                    }, null, 8, ["icon"]))])])])),
                    default: (0, H.w5)((() => [((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(i.menu, ((e, t) => ((0, H.wg)(), (0, H.j4)(c, {
                        key: t,
                        route: e.route,
                        class: "user-menu-toggle__item",
                        onClick: t => i.onClick(e)
                    }, {
                        default: (0, H.w5)((() => [(0, H._)("span", xt, (0, Q.zw)(e.name), 1), ((0, H.wg)(), (0, H.j4)((0, H.LL)(e.badge), {
                            class: "user-menu__badge"
                        }))])),
                        _: 2
                    }, 1032, ["route", "onClick"])))), 128))])),
                    _: 1
                })
            }
            var Vt = n(81950),
                Gt = n(159248),
                Ut = n(490028),
                Ft = n(16875),
                zt = n(945436);
            const Yt = {
                    __name: "HeaderUserAvatar",
                    setup(e) {
                        return (e, t) => ((0, H.wg)(), (0, H.iD)("div", {
                            class: (0, Q.C_)(e.$store.getters.showVipDomain ? e.$style.rootVip : e.$style.root)
                        }, [(0, H._)("div", {
                            class: (0, Q.C_)(e.$style.imageContainer)
                        }, [(0, H.Wm)(te.Z, {
                            icon: "profile"
                        })], 2)], 2))
                    }
                },
                qt = {
                    root: "HeaderUserAvatar_root_e75WO",
                    rootVip: "HeaderUserAvatar_rootVip__KKkc HeaderUserAvatar_root_e75WO",
                    imageContainer: "HeaderUserAvatar_imageContainer_aY2X9"
                },
                Kt = {};
            Kt["$style"] = qt;
            const Jt = (0, ge.Z)(Yt, [
                    ["__cssModules", Kt]
                ]),
                Xt = Jt;

            function Qt(e, t) {
                return (0, H.wg)(), (0, H.iD)("span", {
                    class: (0, Q.C_)(e.$style.root)
                }, "NEW", 2)
            }
            const en = {
                    root: "BadgeNew_root_PoYtG"
                },
                tn = {},
                nn = {};
            nn["$style"] = en;
            const an = (0, ge.Z)(tn, [
                    ["render", Qt],
                    ["__cssModules", nn]
                ]),
                on = an;
            var rn = Object.defineProperty,
                sn = Object.defineProperties,
                ln = Object.getOwnPropertyDescriptors,
                cn = Object.getOwnPropertySymbols,
                pn = Object.prototype.hasOwnProperty,
                dn = Object.prototype.propertyIsEnumerable,
                un = (e, t, n) => t in e ? rn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                mn = (e, t) => {
                    for (var n in t || (t = {})) pn.call(t, n) && un(e, n, t[n]);
                    if (cn)
                        for (var n of cn(t)) dn.call(t, n) && un(e, n, t[n]);
                    return e
                },
                hn = (e, t) => sn(e, ln(t)),
                gn = (e, t, n) => new Promise(((a, o) => {
                    var i = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                    s((n = n.apply(e, t)).next())
                }));
            const vn = {
                    name: "HeaderUserDropdown",
                    components: {
                        BadgeWarning: Vt.Z,
                        HeaderUserAvatar: Xt,
                        VDropdown: Gt.Z,
                        VDropdownItem: Ut.Z,
                        VIcon: te.Z
                    },
                    inject: ["$modal", "$notify"],
                    setup() {
                        const e = (0, zt.gD)(),
                            {
                                isReferralPageAvailable: t
                            } = (0, Ft.s)();
                        return {
                            bonusStore: e,
                            isReferralPageAvailable: t
                        }
                    },
                    computed: hn(mn({}, (0, x.Se)(["showVipDomain"])), {
                        isWarningBadgeVisible() {
                            return this.$store.getters["verification/email/isVerificationRequired"] || this.$store.getters["verification/phone/isVerificationRequired"]
                        },
                        customHeader() {
                            var e;
                            return null == (e = this.$route.meta) ? void 0 : e[f.AoL]
                        },
                        menu() {
                            var e, t;
                            const n = (null == (e = this.$store.getters.lang.header) ? void 0 : e["user-box"]) || {},
                                a = (null == (t = je.appConfig.modules.profile) ? void 0 : t.menu) || [],
                                o = [{
                                    id: "voucher",
                                    name: this.$store.getters.lang.promocode.title,
                                    action: () => this.$modal.open(S.Uj),
                                    hidden: !je.appConfig.modules.bonuses,
                                    analyticsName: "voucher"
                                }, {
                                    id: "withdraw",
                                    name: n.withdrawal,
                                    action: () => {
                                        this.onWithdrawalClick(n.withdrawal)
                                    },
                                    analyticsName: "withdraw"
                                }, {
                                    id: "referral",
                                    name: n.referral,
                                    route: {
                                        name: Ne.Z.REFERRAL_PROGRAM
                                    },
                                    action: () => {},
                                    hidden: !this.isReferralPageAvailable,
                                    analyticsName: "referral"
                                }, {
                                    id: "coins",
                                    name: je.appConfig.options.coinsCurrencyName || "",
                                    action: () => this.$modal.open(S.NM),
                                    badge: on,
                                    hidden: !je.appConfig.modules.bonuses,
                                    analyticsName: "1win_coin_exchange"
                                }, {
                                    id: "bets_history",
                                    name: n.bets_history,
                                    route: {
                                        path: "/bets-history"
                                    },
                                    action: () => {},
                                    hidden: !je.appConfig.modules.bets,
                                    analyticsName: "bets_history"
                                }, {
                                    id: "settings",
                                    name: n.settings,
                                    action: () => {
                                        this.$modal.open(S.KD)
                                    },
                                    badge: this.isWarningBadgeVisible ? Vt.Z : null,
                                    analyticsName: "settings"
                                }, {
                                    id: "detalization",
                                    name: n.detailing,
                                    action: () => this.$modal.open(S.pg),
                                    analyticsName: "detalization"
                                }, {
                                    id: "vip_domain",
                                    name: n.vipDomain,
                                    action: () => this.$modal.open(S.Qh, {
                                        saveRoute: !1
                                    }),
                                    hidden: !this.showVipDomain,
                                    analyticsName: "vip"
                                }, {
                                    id: "logout",
                                    name: n.exit,
                                    action: () => this.$modal.open(S.Ou),
                                    analyticsName: "logout"
                                }];
                            return o.filter((({
                                id: e,
                                hidden: t
                            }) => {
                                const n = ["logout", "referral"];
                                return !t && [...n, ...a].includes(e)
                            }))
                        }
                    }),
                    methods: {
                        onTriggerClick() {
                            this.$googleTagManager.handleMainPageEvent("header", {
                                element_name: "profile"
                            })
                        },
                        onClick({
                            action: e,
                            analyticsName: t
                        }) {
                            e(), t && this.$googleTagManager.handleProfileEvent("button", {
                                element_name: t
                            })
                        },
                        closeDepositErrorBonus() {
                            return gn(this, null, (function*() {
                                yield this.$router.push({
                                    name: Ne.Z.HOME
                                }), yield this.$modal.closeAll()
                            }))
                        },
                        onWithdrawalClick(e) {
                            return gn(this, null, (function*() {
                                yield this.$modal.open(S.$M);
                                const {
                                    isNewBonusBalance: t
                                } = this.bonusStore;
                                t && this.bonusStore.isActivatedWithdrawalBlocker && this.$modal.open(S.Fc, {
                                    listeners: {
                                        removeBonus: () => {
                                            this.bonusStore.setWithadrawalBlockerActivity(!1), this.$modal.close()
                                        },
                                        changeMethod: () => {
                                            this.closeDepositErrorBonus()
                                        }
                                    },
                                    props: {
                                        type: "withdrawalBlocked",
                                        openButtonText: e
                                    }
                                })
                            }))
                        }
                    }
                },
                _n = (0, ge.Z)(vn, [
                    ["render", jt],
                    ["__scopeId", "data-v-7aed7553"]
                ]),
                bn = _n;
            var fn = n(90865);
            const yn = (0, H.aZ)({
                    __name: "HeaderUserNotifications",
                    setup(e) {
                        const {
                            openNotifications: t
                        } = (0, fn._)(), {
                            hasNotifications: n
                        } = (0, l.AZ)(), a = (0, W.yj)(), o = () => {
                            xe.L_.sendNotificationCenterEvent("icon", {
                                notification_tab: a.path,
                                notifications_availability: n.value ? "yes" : "no"
                            }), t()
                        };
                        return (e, t) => ((0, H.wg)(), (0, H.j4)(Nt.Z, {
                            type: "secondary",
                            "square-size": "40px",
                            class: (0, Q.C_)(e.$style.notificationIcon),
                            onClick: o
                        }, {
                            default: (0, H.w5)((() => [(0, H.Wm)(te.Z, {
                                icon: "bell",
                                size: "md"
                            }), (0, D.SU)(n) ? ((0, H.wg)(), (0, H.j4)(Vt.Z, {
                                key: 0,
                                class: (0, Q.C_)(e.$style.badge),
                                variant: "error"
                            }, null, 8, ["class"])) : (0, H.kq)("", !0)])),
                            _: 1
                        }, 8, ["class"]))
                    }
                }),
                wn = {
                    notificationIcon: "HeaderUserNotifications_notificationIcon_YKaXE",
                    hasNotifications: "HeaderUserNotifications_hasNotifications_cnTFx",
                    badge: "HeaderUserNotifications_badge_v6VkK"
                },
                Cn = {};
            Cn["$style"] = wn;
            const Sn = (0, ge.Z)(yn, [
                    ["__cssModules", Cn]
                ]),
                kn = Sn;
            var An = Object.defineProperty,
                On = Object.getOwnPropertySymbols,
                In = Object.prototype.hasOwnProperty,
                Tn = Object.prototype.propertyIsEnumerable,
                En = (e, t, n) => t in e ? An(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Pn = (e, t) => {
                    for (var n in t || (t = {})) In.call(t, n) && En(e, n, t[n]);
                    if (On)
                        for (var n of On(t)) Tn.call(t, n) && En(e, n, t[n]);
                    return e
                };
            const Mn = {
                    name: "HeaderUserMenu",
                    components: {
                        HeaderUser: Dt.Z,
                        HeaderBalance: Ht.Z,
                        HeaderUserDropdown: bn,
                        HeaderUserNotifications: kn
                    },
                    setup() {
                        const e = (0, l.dd)(),
                            t = (0, l.uP)(),
                            n = () => {
                                t.handleHeaderEvent("navigation", {
                                    element_name: "deposit"
                                }), e.open(S.bZ, {
                                    closeOnBackgroundClick: !1
                                })
                            };
                        return {
                            depositButtonHandler: n
                        }
                    },
                    computed: Pn({}, (0, x.Se)(["showVipDomain", "currency", "balance", "showBalance", "user"]))
                },
                Nn = {
                    root: "HeaderUserMenu_root_qLsrQ",
                    buttonDeposit: "HeaderUserMenu_buttonDeposit_AmmP6",
                    buttons: "HeaderUserMenu_buttons_g4hCM",
                    balance: "HeaderUserMenu_balance_tlt5D",
                    spinner: "HeaderUserMenu_spinner_BZwYZ",
                    jiggle1: "HeaderUserMenu_jiggle1_vHCex",
                    jiggle2: "HeaderUserMenu_jiggle2_bxTkf",
                    flare: "HeaderUserMenu_flare_vQDzq",
                    "flare-2": "HeaderUserMenu_flare-2_ivt7l",
                    "flare-3": "HeaderUserMenu_flare-3_AScsU"
                },
                Ln = {};
            Ln["$style"] = Nn;
            const $n = (0, ge.Z)(Mn, [
                    ["render", Bt],
                    ["__cssModules", Ln]
                ]),
                Rn = $n,
                Zn = {
                    ref: "navbar",
                    class: "navigation-navbar"
                },
                Bn = ["hidden", "onClickCapture"],
                Hn = ["src"],
                Dn = {
                    key: 2,
                    class: "item-text-block"
                },
                Wn = {
                    class: "item-text"
                },
                xn = {
                    class: "item-text-active"
                },
                jn = {
                    class: "item-text"
                },
                Vn = {
                    class: "item-text-active"
                },
                Gn = {
                    class: "sub-item-text"
                },
                Un = {
                    class: "more-item-trigger-wrapper"
                },
                Fn = {
                    class: "more-item-trigger"
                },
                zn = {
                    class: "item-text"
                },
                Yn = ["src"],
                qn = ["textContent"],
                Kn = ["textContent"];

            function Jn(e, t, n, a, o, i) {
                const r = (0, H.up)("VDropdownItem"),
                    s = (0, H.up)("VDropdown"),
                    l = (0, H.up)("RouterLinkWrapper"),
                    c = (0, H.up)("VIcon");
                return (0, H.wg)(), (0, H.iD)("nav", {
                    class: (0, Q.C_)(["navigation", {
                        loaded: e.loaded
                    }]),
                    style: (0, Q.j5)(i.navigationMaxWidth)
                }, [(0, H._)("div", Zn, [((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(i.navList, (e => ((0, H.wg)(), (0, H.j4)(l, (0, H.dG)({
                    key: e.key,
                    class: "navigation-item df-aic-jcc",
                    ref_for: !0
                }, i.attributes(e), (0, H.mx)(i.events(e))), {
                    default: (0, H.w5)((() => [(0, H._)("div", {
                        ref_for: !0,
                        ref: e === i.activeItem ? "activeItemRef" : null,
                        class: "navigation-item-wrapper df-aic-jcc",
                        hidden: e.hidden,
                        onClickCapture: t => i.onAnalyticsClick(e)
                    }, [e.badge ? ((0, H.wg)(), (0, H.iD)("div", {
                        key: 0,
                        class: "navigation-item-badge",
                        style: (0, Q.j5)({
                            background: e.badge.background
                        })
                    }, (0, Q.zw)(e.badge.text), 5)) : (0, H.kq)("", !0), e.image ? ((0, H.wg)(), (0, H.iD)("img", (0, H.dG)({
                        key: 1,
                        class: "navigation-item-image",
                        src: e.image,
                        ref_for: !0
                    }, e.imageProps), null, 16, Hn)) : e.items && e.items.length > 0 ? ((0, H.wg)(), (0, H.j4)(s, {
                        key: 3,
                        class: "item-text-block",
                        align: "center",
                        angle: "",
                        hoverable: ""
                    }, {
                        trigger: (0, H.w5)((() => [(0, H._)("div", jn, (0, Q.zw)(e.name), 1), (0, H._)("div", Vn, (0, Q.zw)(e.name), 1)])),
                        default: (0, H.w5)((() => [((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(e.items, ((t, n) => ((0, H.wg)(), (0, H.j4)(r, {
                            key: n,
                            target: t.target,
                            route: {
                                name: t.routeName || e.routeName,
                                params: t.routeParams,
                                query: t.routeQuery
                            },
                            nowrap: "",
                            onClickCapture: n => i.onTailLinkClick(t, e)
                        }, {
                            default: (0, H.w5)((() => [(0, H._)("span", Gn, (0, Q.zw)(t.name), 1)])),
                            _: 2
                        }, 1032, ["target", "route", "onClickCapture"])))), 128))])),
                        _: 2
                    }, 1024)) : ((0, H.wg)(), (0, H.iD)("div", Dn, [(0, H._)("div", Wn, (0, Q.zw)(e.name), 1), (0, H._)("div", xn, (0, Q.zw)(e.name), 1)]))], 40, Bn)])),
                    _: 2
                }, 1040)))), 128)), (0, H._)("div", {
                    key: "more-dropdown",
                    class: (0, Q.C_)(["more-item df-aic-jcc", {
                        "sub-menu-opened": "more-dropdown" === e.subMenuOpen,
                        "hidden-item": !e.moreNumItems
                    }]),
                    onMouseover: t[0] || (t[0] = (...e) => i.onHoverMore && i.onHoverMore(...e)),
                    onMouseout: t[1] || (t[1] = (...e) => i.onBlur && i.onBlur(...e))
                }, [(0, H.Wm)(s, {
                    class: "item-text-block",
                    align: "center",
                    angle: "",
                    hoverable: ""
                }, {
                    trigger: (0, H.w5)((() => [(0, H._)("div", Un, [(0, H._)("div", Fn, [(0, H._)("div", zn, (0, Q.zw)(i.text.more), 1), (0, H.Wm)(c, {
                        class: "more-item-icon",
                        icon: "dots"
                    })])])])),
                    default: (0, H.w5)((() => [((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(i.tailNavList, (e => ((0, H.wg)(), (0, H.j4)(r, {
                        key: e.key,
                        target: e.target,
                        route: {
                            name: e.routeName,
                            params: e.routeParams
                        },
                        nowrap: "",
                        onClickCapture: t => i.onTailLinkClick(e)
                    }, {
                        default: (0, H.w5)((() => [e.image && !e.hideImageInDropdown ? ((0, H.wg)(), (0, H.iD)("img", {
                            key: 0,
                            class: "navigation-item-image",
                            src: e.image
                        }, null, 8, Yn)) : ((0, H.wg)(), (0, H.iD)(H.HY, {
                            key: 1
                        }, [(0, H._)("span", {
                            class: "sub-item-text",
                            textContent: (0, Q.zw)(e.name)
                        }, null, 8, qn), e.badge ? ((0, H.wg)(), (0, H.iD)("div", {
                            key: 0,
                            class: "navigation-item-badge",
                            style: (0, Q.j5)({
                                background: e.badge.background
                            }),
                            textContent: (0, Q.zw)(e.badge.text)
                        }, null, 12, Kn)) : (0, H.kq)("", !0)], 64))])),
                        _: 2
                    }, 1032, ["target", "route", "onClickCapture"])))), 128))])),
                    _: 1
                })], 34)], 512)], 6)
            }
            var Xn = n(123543),
                Qn = n(495119);

            function ea(e, t, n, a, o, i) {
                const r = (0, H.up)("RouterLink");
                return (0, H.wg)(), (0, H.j4)(r, {
                    to: n.to,
                    onMouseover: e.$attrs.onMouseover,
                    onMouseout: e.$attrs.onMouseout,
                    onClick: e.$attrs.onClick
                }, {
                    default: (0, H.w5)((() => [(0, H.WI)(e.$slots, "default")])),
                    _: 3
                }, 8, ["to", "onMouseover", "onMouseout", "onClick"])
            }
            const ta = {
                    name: "RouterLinkWrapper",
                    props: {
                        to: {
                            type: Object,
                            default: () => ({})
                        }
                    }
                },
                na = (0, ge.Z)(ta, [
                    ["render", ea]
                ]),
                aa = na;
            var oa = Object.defineProperty,
                ia = Object.defineProperties,
                ra = Object.getOwnPropertyDescriptors,
                sa = Object.getOwnPropertySymbols,
                la = Object.prototype.hasOwnProperty,
                ca = Object.prototype.propertyIsEnumerable,
                pa = (e, t, n) => t in e ? oa(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                da = (e, t) => {
                    for (var n in t || (t = {})) la.call(t, n) && pa(e, n, t[n]);
                    if (sa)
                        for (var n of sa(t)) ca.call(t, n) && pa(e, n, t[n]);
                    return e
                },
                ua = (e, t) => ia(e, ra(t)),
                ma = (e, t, n) => new Promise(((a, o) => {
                    var i = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                    s((n = n.apply(e, t)).next())
                }));

            function ha(e, t) {
                return e.find((e => e.name === t.name && Object.entries(e.params).every((([e, n]) => t.params[e] === n))))
            }
            const ga = {
                    components: {
                        RouterLinkWrapper: aa,
                        VDropdown: Xn.w,
                        VDropdownItem: Xn.h,
                        VIcon: te.Z
                    },
                    props: {
                        items: {
                            type: Array,
                            required: !0
                        },
                        maxWidth: {
                            type: Number,
                            default: null
                        }
                    },
                    emits: ["updateActiveLine"],
                    setup() {
                        const e = (0, D.iH)(null),
                            {
                                isBettingFrame: t
                            } = (0, Ae.sW)();
                        return (0, H.Xn)((() => {
                            e.value = []
                        })), {
                            activeItemRef: e,
                            isBettingFrame: t
                        }
                    },
                    data: () => ({
                        linePosition: -200,
                        lineWidth: 20,
                        active: null,
                        subMenuOpen: null,
                        hoverActive: null,
                        loaded: !1,
                        moreNumItems: 0
                    }),
                    computed: ua(da(da({}, (0, x.Se)(["isDesktopApp", "casinoAllowed", "user", "lang"])), (0, x.Se)("permissions", ["isTester"])), {
                        text() {
                            return this.lang.navigation
                        },
                        navList() {
                            return this.items.map(((e, t, n) => ua(da({}, e), {
                                hidden: t >= n.length - this.moreNumItems
                            })))
                        },
                        activeItem() {
                            return this.navList.find((e => this.isActive(e)))
                        },
                        tailNavList() {
                            const e = this.navList.filter((e => e.hidden)),
                                t = [];
                            for (const n of e) t.push(...n.items && n.items.length > 0 ? n.items : [n]);
                            return t
                        },
                        navigationMaxWidth() {
                            return `max-width: ${this.maxWidth}px`
                        },
                        recalcNavItemsVisibilityTrigger() {
                            return this.maxWidth + this.navList.length
                        }
                    }),
                    watch: {
                        $route: {
                            handler() {
                                this.active = this.$route, this.updateActiveLine()
                            },
                            immediate: !0
                        },
                        recalcNavItemsVisibilityTrigger: {
                            handler() {
                                return ma(this, null, (function*() {
                                    this.loaded = !1, yield this.$store.getters.promiseByName[Qn.l.AUTH], this.sliceNav(), yield(0, vt.n)(), this.loaded = !0
                                }))
                            },
                            immediate: !0
                        },
                        moreNumItems: "updateActiveLine"
                    },
                    methods: {
                        attributes(e) {
                            return {
                                key: e.key || e.routeName,
                                class: {
                                    "is-active": this.isActive(e), "sub-menu-opened": this.subMenuOpen === e.routeName, "hidden-item": e.hidden
                                },
                                to: {
                                    name: e.routeName,
                                    params: e.routeParams,
                                    hash: e.hash,
                                    query: e.routeQuery
                                }
                            }
                        },
                        events(e) {
                            return {
                                mouseover: this.onHover.bind(this, e),
                                mouseout: this.onBlur,
                                click: () => {
                                    this.navigate.bind(this, e), e.scrollTop && window.scrollTo({
                                        left: 0,
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }
                            }
                        },
                        isActive({
                            routeName: e,
                            routeParams: t,
                            alias: n,
                            items: a,
                            hash: o = "",
                            excludeHighlightRoutes: i = [],
                            includeHighlightRoutes: r = []
                        }) {
                            var s, l, c, p, d;
                            return !!this.active && (this.active.name === e && e === Ne.Z.BETS ? this.isBettingFrame || this.active.params.service === t.service : !ha(i, this.active) && (!!ha(r, this.active) || ((null == (s = this.active.params) ? void 0 : s.preset) || (null == t ? void 0 : t.preset) ? (null != (p = null == (c = null == (l = this.active) ? void 0 : l.params) ? void 0 : c.preset) ? p : Ze.Py.CASINO) === (null != (d = null == t ? void 0 : t.preset) ? d : Ze.Py.CASINO) : (this.active.name === e || (null == n ? void 0 : n.includes(this.active.name)) || (null == a ? void 0 : a.find((e => this.active.name === e.routeName)))) && this.active.hash === o)))
                        },
                        navigate() {
                            this.subMenuOpen = null
                        },
                        onHover({
                            items: e,
                            routeName: t
                        }) {
                            this.hoverActive = t, e && (this.subMenuOpen = t)
                        },
                        onHoverMore() {
                            this.subMenuOpen = "more-dropdown"
                        },
                        onBlur() {
                            this.hoverActive = null, this.subMenuOpen = null
                        },
                        updateActiveLine() {
                            (0, H.Y3)((() => {
                                var e, t;
                                this.$emit("updateActiveLine", null == (e = this.activeItemRef) ? void 0 : e[0], !(null == (t = this.activeItemRef) ? void 0 : t[0]) || this.activeItem.hidden)
                            }))
                        },
                        getWidthIncludeMargin(e) {
                            const t = getComputedStyle(e);
                            return e.offsetWidth + Number.parseInt(t.marginLeft, 10) + Number.parseInt(t.marginRight, 10)
                        },
                        sliceNav() {
                            if (!this.$refs.navbar) return;
                            const e = [...this.$refs.navbar.children],
                                t = e.filter((e => [...e.classList].find((e => "navigation-item" === e)))).map((e => this.getWidthIncludeMargin(e))),
                                n = () => t.reduce(((e, t) => e + t), 0);
                            let a = 0;
                            if (n() > this.maxWidth) {
                                const o = e.slice(t.length).map((e => this.getWidthIncludeMargin(e))).reduce(((e, t) => e + t), 0);
                                while (n() + o > this.maxWidth) t.pop(), a += 1
                            }
                            this.moreNumItems = a
                        },
                        onTailLinkClick(e, t) {
                            let {
                                routeName: n
                            } = e;
                            !n && t && (n = t.routeName), "aviator" === e.key && (n = "aviator-game-promo"), this.onAnalyticsClick(e)
                        },
                        onAnalyticsClick(e) {
                            const t = this.$route.path;
                            this.$router.resolve({
                                name: e.routeName,
                                params: e.routeParams
                            }).href !== t && this.$googleTagManager.handleHeaderEvent("navigation", {
                                element_name: e.analyticsName,
                                section_name: t
                            })
                        }
                    }
                },
                va = (0, ge.Z)(ga, [
                    ["render", Jn],
                    ["__scopeId", "data-v-1bb13ef9"]
                ]),
                _a = va;

            function ba(e, t) {
                return (0, H.wg)(), (0, H.iD)("div", {
                    class: (0, Q.C_)(e.$style.cover)
                }, [(0, H._)("div", {
                    class: (0, Q.C_)(e.$style.line)
                }, null, 2)], 2)
            }
            const fa = {
                    cover: "NavigationItemCoverLine_cover_IJ4Is",
                    line: "NavigationItemCoverLine_line_uWXLC"
                },
                ya = {},
                wa = {};
            wa["$style"] = fa;
            const Ca = (0, ge.Z)(ya, [
                    ["render", ba],
                    ["__cssModules", wa]
                ]),
                Sa = Ca;
            var ka, Aa, Oa = n(991008),
                Ia = n(273633),
                Ta = n(779015),
                Ea = n(535807),
                Pa = n(543238),
                Ma = n(680890),
                Na = n(560093),
                La = n(292108),
                $a = Object.defineProperty,
                Ra = Object.defineProperties,
                Za = Object.getOwnPropertyDescriptors,
                Ba = Object.getOwnPropertySymbols,
                Ha = Object.prototype.hasOwnProperty,
                Da = Object.prototype.propertyIsEnumerable,
                Wa = (e, t, n) => t in e ? $a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                xa = (e, t) => {
                    for (var n in t || (t = {})) Ha.call(t, n) && Wa(e, n, t[n]);
                    if (Ba)
                        for (var n of Ba(t)) Da.call(t, n) && Wa(e, n, t[n]);
                    return e
                },
                ja = (e, t) => Ra(e, Za(t));
            const Va = je.appConfig.modules.casino,
                Ga = null != (Aa = null == (ka = je.appConfig.modules.casino) ? void 0 : ka.categories) ? Aa : {},
                Ua = {
                    text: "NEW",
                    background: "linear-gradient(-260deg, #7F66D2 0%, #5484F2 100%)"
                },
                Fa = (0, o.Q_)("navigationMenu", (() => {
                    const {
                        isBettingFrame: e
                    } = (0, Ae.sW)(), {
                        isEntryPointToSportVisible: t
                    } = (0, Ma.v)(), {
                        isLandingVipClubAvailable: n
                    } = (0, He.P)(), {
                        isAviatorHidden: a
                    } = (0, Na.K)(), {
                        isShowBackgammon: o
                    } = (0, Pa.S)(), {
                        isQuickGamesHidden: i
                    } = (0, l.s4)(), r = (0, x.oR)(), s = (0, H.Fl)((() => {
                        var e, t;
                        return null == (t = null == (e = je.appConfig.modules.bets) ? void 0 : e.disabledStatisticsGeos) ? void 0 : t.includes(r.state.country)
                    })), c = (0, H.Fl)((() => [{
                        routeName: Ne.Z.HOME,
                        key: "home",
                        name: g.vuexStore.getters.lang.navigation.home,
                        analyticsName: "home",
                        [La.O4]: La.h9.HOME,
                        [La.fb]: La.cZ
                    }, ...e.value ? [{
                        routeName: Re.qV.HOME,
                        key: "bets",
                        name: g.vuexStore.getters.lang.navigation.sports,
                        analyticsName: "sports",
                        [La.O4]: La.h9.LINE,
                        alias: [Re.qV.EVENT, Re.qV.LIVE, Re.qV.PREMATCH]
                    }] : [{
                        routeName: Ne.Z.BETS,
                        routeParams: {
                            service: f.PTO
                        },
                        key: "bets-live",
                        name: g.vuexStore.getters.lang.navigation.live,
                        analyticsName: "live",
                        [La.O4]: La.h9.LIVE
                    }, {
                        routeName: Ne.Z.BETS,
                        routeParams: {
                            service: f.d_J
                        },
                        key: "bets-prematch",
                        name: g.vuexStore.getters.lang.navigation.prematch,
                        alias: [Ne.Z.BETS_CUSTOM, Ne.Z.BETS_OUTRIGHTS],
                        analyticsName: "line",
                        [La.O4]: La.h9.LINE
                    }], {
                        routeName: Ne.Z.CASINO,
                        key: "casino",
                        alias: [Ne.Z.CASINO_WIDGET, Ne.Z.CASINO_OWNER, Ne.Z.CASINO_LIST, Ne.Z.CASINO_FAVORITES, Ne.Z.CASINO_GAME],
                        excludeHighlightRoutes: [...[Ze.QX.AVIATOR, Ze.QX.SPRIBE_AVIATOR, Ze.QX.SCOUT_FANTASY, Ze.QX.JETX].filter(Boolean).map((e => ({
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: e
                            }
                        }))), {
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: Ze.PB.LUCKYJET.id
                            }
                        }, {
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: Ze.PB.SPEED_AND_CASH.id
                            }
                        }],
                        name: g.vuexStore.getters.lang.navigation["casino-list"],
                        analyticsName: "casino",
                        [La.O4]: La.h9.CASINO
                    }, ...(null == Va ? void 0 : Va.liveGames) ? [{
                        routeName: Ne.Z.CASINO,
                        routeParams: {
                            preset: Ze.Py.LIVE_GAMES
                        },
                        key: "casino-live",
                        name: g.vuexStore.getters.lang.navigation["casino-live"],
                        analyticsName: "live-games",
                        [La.O4]: La.h9.LIVE_GAMES
                    }] : [], ...(null == Va ? void 0 : Va.quickGames) ? [{
                        routeName: Ne.Z.CASINO,
                        routeParams: {
                            preset: Ze.Py.QUICK_GAMES
                        },
                        key: "games",
                        name: g.vuexStore.getters.lang.navigation["fast-games"],
                        hidden: i.value,
                        analyticsName: Ne.Z.CASINO_QUICK_GAMES,
                        [La.O4]: La.h9.GAMES
                    }] : [], {
                        routeName: Ne.Z.VIP_CLUB,
                        key: "vip-club",
                        name: "VIP club",
                        hidden: !n.value,
                        badge: Ua,
                        analyticsName: "vip-club",
                        [La.O4]: La.h9.VIP_CLUB
                    }, ...(null == Va ? void 0 : Va.vSport) && Ga.vSport ? [{
                        routeName: Ne.Z.CASINO_LIST,
                        routeParams: {
                            category: Ga.vSport
                        },
                        key: "virtual-sport",
                        name: g.vuexStore.getters.lang["virtual-games"].title,
                        alias: ["virtual-sport-game", "virtual-sport-game-betradar"],
                        analyticsName: "vsport",
                        [La.O4]: La.h9.VSPORT
                    }] : [], ...(null == Va ? void 0 : Va.oneWinGames) && Ga.oneWin ? [{
                        routeName: Ne.Z.CASINO_LIST,
                        routeParams: {
                            category: Ga.oneWin
                        },
                        key: "games-one-win",
                        name: g.vuexStore.getters.lang.navigation["casino-games-one-win"],
                        analyticsName: "games-one-win",
                        [La.O4]: La.h9.GAMES_ONE_WIN
                    }] : [], {
                        routeName: Ne.Z.BETS_CYBERSPORT_REDIRECT,
                        key: "bets-cybersport",
                        name: g.vuexStore.getters.langCommon.bets.cybersport,
                        alias: [Ne.Z.BETS_CYBERSPORT, Re.qV.CYBER_SPORT],
                        analyticsName: "cybersport",
                        [La.O4]: La.h9.CYBERSPORT
                    }, {
                        routeName: Ne.Z.CASINO_GAME_NARDS,
                        key: "nards",
                        name: g.vuexStore.getters.lang.navigation["casino-game-nards"],
                        hidden: !o.value,
                        badge: Ua,
                        analyticsName: "vsport",
                        [La.O4]: La.h9.CASINO_GAME_NARDS
                    }, ...!Ne.Z.CASINO_GAME_FANTASY_SPORT || r.getters.isBlockable && "JP" === r.state.country ? [] : [xa({
                        routeName: Ne.Z.CASINO_GAME_FANTASY_SPORT,
                        key: "fantasy-sport",
                        name: g.vuexStore.getters.lang.navigation["casino-game-fantasy-sport"],
                        includeHighlightRoutes: Ze.QX.SCOUT_FANTASY ? [{
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: Ze.QX.SCOUT_FANTASY
                            }
                        }] : void 0,
                        analyticsName: "fantasy-sport"
                    }, La.h9.FANTASY_SPORT ? {
                        [La.O4]: La.h9.FANTASY_SPORT
                    } : {})], {
                        routeName: Ne.Z.INVEST,
                        key: "invest",
                        name: "1win invest",
                        hidden: !g.vuexStore.getters.isAllowedInvest,
                        scrollTop: !0,
                        analyticsName: "invest",
                        [La.O4]: La.h9.INVEST
                    }, {
                        routeName: Ne.Z.TRADING_GAME,
                        key: "trading",
                        name: g.vuexStore.getters.lang.navigation.trading,
                        analyticsName: "trading",
                        hidden: !g.vuexStore.getters.isTradingAllowed,
                        [La.O4]: La.h9.TRADING
                    }, {
                        routeName: Ne.Z.BETGAMES_GAME,
                        key: "betgames",
                        name: "Betgames",
                        badge: Ua,
                        analyticsName: "betgames",
                        [La.O4]: La.h9.BETGAMES
                    }, {
                        routeName: Ne.Z.FASTSPORT_GAME,
                        key: "fastsport",
                        name: g.vuexStore.getters.lang.navigation.fastsport,
                        hidden: g.vuexStore.getters.isDisabledFastsport,
                        badge: Ua,
                        analyticsName: "fastsport",
                        [La.O4]: La.h9.FASTSPORT
                    }, {
                        routeName: Ne.Z.TVBET_GAME,
                        key: "tvbet",
                        name: "TVBET",
                        analyticsName: "tv-bet",
                        [La.O4]: La.h9.TVBET
                    }, {
                        routeName: Ne.Z.POKER,
                        key: "poker",
                        name: g.vuexStore.getters.lang.navigation.poker,
                        alias: [Ne.Z.POKER_GAME],
                        analyticsName: "poker",
                        [La.O4]: La.h9.POKER
                    }, ...[...Ne.Z.CASINO_GAME_AVIATOR && La.h9.CASINO_GAME_AVIATOR ? [{
                        routeName: Ne.Z.CASINO_GAME_AVIATOR,
                        navSortingKey: La.h9.CASINO_GAME_AVIATOR,
                        hidden: (0, D.SU)(a),
                        image: Oa,
                        imageProps: {
                            height: 15,
                            width: 60
                        },
                        includeHighlightRoutes: [Ze.QX.AVIATOR, Ze.QX.SPRIBE_AVIATOR].filter(Boolean).map((e => ({
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: e
                            }
                        }))),
                        analyticsName: "aviator"
                    }] : [], ...Ne.Z.CASINO_GAME_JETX && La.h9.CASINO_GAME_JETX ? [{
                        routeName: Ne.Z.CASINO_GAME_JETX,
                        name: "JetX",
                        hideImageInDropdown: !0,
                        navSortingKey: La.h9.CASINO_GAME_JETX,
                        image: Ia,
                        imageProps: {
                            height: 15,
                            width: 35
                        },
                        includeHighlightRoutes: Ze.QX.JETX ? [{
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: Ze.QX.JETX
                            }
                        }] : void 0,
                        analyticsName: "jetx"
                    }] : [], {
                        routeName: Ne.Z.CASINO_GAME_LUCKY_JET,
                        navSortingKey: La.h9.CASINO_GAME_LUCKY_JET,
                        image: Ta,
                        imageProps: {
                            height: 15,
                            width: 58
                        },
                        includeHighlightRoutes: [{
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: Ze.PB.LUCKYJET.id
                            }
                        }],
                        analyticsName: "lucky-jet"
                    }, {
                        routeName: Ne.Z.CASINO_GAME_SPEED_AND_CASH,
                        navSortingKey: La.h9.CASINO_GAME_SPEED_AND_CASH,
                        image: Ea,
                        imageProps: {
                            height: 15,
                            width: 51
                        },
                        includeHighlightRoutes: [{
                            name: Ne.Z.CASINO_GAME,
                            params: {
                                id: Ze.PB.SPEED_AND_CASH.id
                            }
                        }],
                        analyticsName: "speed-and-cash"
                    }].map((({
                        analyticsName: e,
                        hideImageInDropdown: t,
                        image: n,
                        imageProps: a,
                        includeHighlightRoutes: o,
                        name: i,
                        navSortingKey: r,
                        routeName: s,
                        hidden: l
                    }) => ({
                        analyticsName: e,
                        hideImageInDropdown: t,
                        image: n,
                        imageProps: a,
                        includeHighlightRoutes: o,
                        name: i,
                        key: s,
                        routeName: s,
                        hidden: l,
                        [La.O4]: r
                    }))), {
                        routeName: Ne.Z.LEADERBOARD,
                        key: "leaderboard",
                        name: g.vuexStore.getters.lang.navigation.leaderboard,
                        hidden: !g.vuexStore.getters["permissions/isTester"],
                        analyticsName: "leaderboards",
                        [La.O4]: La.h9.LEADERBOARDS
                    }, {
                        routeName: Ne.Z.TV,
                        key: "tv",
                        name: "1win Tv",
                        alias: [Ne.Z.TV_FILM],
                        hidden: !g.vuexStore.getters.isAllowedTv,
                        analyticsName: "tv",
                        [La.O4]: La.h9.TV
                    }, {
                        routeName: Ne.Z.STATS,
                        key: "stats",
                        name: g.vuexStore.getters.lang.navigation.statistics,
                        hidden: s.value && e.value,
                        items: [...s.value ? [] : [{
                            name: g.vuexStore.getters.lang.navigation.statistics,
                            navSortingKey: La.h9.STATISTICS,
                            routeName: Ne.Z.STATS,
                            analyticsName: "statistics"
                        }], ...e.value ? [] : [{
                            name: g.vuexStore.getters.lang.navigation.results,
                            navSortingKey: La.h9.RESULTS,
                            routeName: Ne.Z.BETS_RESULT,
                            analyticsName: "results"
                        }]].map((({
                            name: t,
                            navSortingKey: n,
                            routeName: a,
                            analyticsName: o
                        }, i) => ja(xa({
                            key: i,
                            name: t,
                            routeParams: {},
                            routeName: a,
                            routeQuery: {}
                        }, t !== g.vuexStore.getters.lang.navigation.statistics || e.value ? {} : {
                            target: "_blank"
                        }), {
                            [La.O4]: n,
                            analyticsName: o
                        })))
                    }, {
                        routeName: Ne.Z.TWAINSPORT_GAME,
                        key: "twain-sport",
                        name: "Twain sport",
                        badge: Ua,
                        analyticsName: "twain-sport",
                        [La.O4]: La.h9.TWAINSPORT
                    }].filter((e => !e.hidden && (e.routeName !== Ne.Z.CASINO_LIST || g.vuexStore.getters.casinoAllowed))))), p = e => {
                        const n = c.value.filter((t => e.hasRoute(t.routeName)));
                        return (0, La.vQ)(n, (0, La.j2)(t.value))
                    };
                    return {
                        orderedTopNavigationMenuItems: p,
                        allowedNavigationItemsList: c
                    }
                }));
            var za, Ya, qa = Object.defineProperty,
                Ka = Object.defineProperties,
                Ja = Object.getOwnPropertyDescriptors,
                Xa = Object.getOwnPropertySymbols,
                Qa = Object.prototype.hasOwnProperty,
                eo = Object.prototype.propertyIsEnumerable,
                to = (e, t, n) => t in e ? qa(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                no = (e, t) => {
                    for (var n in t || (t = {})) Qa.call(t, n) && to(e, n, t[n]);
                    if (Xa)
                        for (var n of Xa(t)) eo.call(t, n) && to(e, n, t[n]);
                    return e
                },
                ao = (e, t) => Ka(e, Ja(t));
            const oo = {
                    name: "HeaderBottom",
                    components: {
                        FluidCoverWrapper: At,
                        Logo: Ot.Z,
                        Navigation: _a,
                        NavigationItemCoverLine: Sa,
                        HeaderAuth: Zt,
                        HeaderUserMenu: Rn
                    },
                    setup() {
                        const e = (0, W.tv)(),
                            t = (0, nt.L)(),
                            n = Fa(),
                            a = (0, H.Fl)((() => n.orderedTopNavigationMenuItems(e)));
                        return {
                            navItems: a,
                            userStore: t
                        }
                    },
                    data: () => ({
                        loaded: !1,
                        maxWidth: null,
                        isSticky: !1
                    }),
                    computed: ao(no({}, (0, x.Se)(["user", "hideDownloadMobileApp", "fullscreen"])), {
                        text() {
                            return no({}, this.$store.getters.lang.header)
                        },
                        headerClass() {
                            return {
                                sticky: this.isSticky,
                                "allow-fullscreen": this.fullscreen,
                                "leaderboard-theme": this.isLeaderboardPage
                            }
                        },
                        isLeaderboardPage() {
                            return this.customHeader === f.Pa7
                        },
                        customHeader() {
                            var e;
                            return null == (e = this.$route.meta) ? void 0 : e[f.AoL]
                        }
                    }),
                    watch: {
                        navItems: {
                            handler() {
                                this.setMaxWidth()
                            },
                            deep: !0
                        }
                    },
                    mounted() {
                        this.setMaxWidth(), new IntersectionObserver(this.intersectionObserverCallback, {
                            threshold: [.05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1, 0],
                            rootMargin: "-5px 0px 0px 0px"
                        }).observe(this.$el)
                    },
                    methods: {
                        intersectionObserverCallback([e]) {
                            this.isSticky = e.boundingClientRect.top <= 1
                        },
                        getMarginBorderPadding(e) {
                            const t = getComputedStyle(e);
                            return Number.parseInt(t.marginLeft || 0, 10) + Number.parseInt(t.marginRight || 0, 10) + Number.parseInt(t.borderLeft || 0, 10) + Number.parseInt(t.borderRight || 0, 10) + Number.parseInt(t.paddingLeft || 0, 10) + Number.parseInt(t.paddingRight || 0, 10)
                        },
                        getBorderPadding(e) {
                            const t = getComputedStyle(e);
                            return Number.parseInt(t.paddingLeft || 0, 10) + Number.parseInt(t.paddingRight || 0, 10) + Number.parseInt(t.borderLeft || 0, 10) + Number.parseInt(t.borderRight || 0, 10)
                        },
                        getWidthIncludeMargin(e) {
                            const t = getComputedStyle(e);
                            return e.offsetWidth + Number.parseInt(t.marginLeft, 10) + Number.parseInt(t.marginRight, 10)
                        },
                        getWidthExcludePadding(e) {
                            const t = getComputedStyle(e);
                            return e.clientWidth - (Number.parseInt(t.paddingLeft, 10) + Number.parseInt(t.paddingRight, 10))
                        },
                        setMaxWidth() {
                            const e = this.getWidthExcludePadding(this.$refs.container),
                                t = this.getMarginBorderPadding(this.$refs.leftBottomNav),
                                n = this.getWidthIncludeMargin(this.$refs.rightBottomNav),
                                a = this.getWidthIncludeMargin(this.$refs.logo),
                                o = this.getBorderPadding(this.$refs.container);
                            this.maxWidth = e - (t + n + a + o), this.loaded = !0
                        },
                        onAnalyticsClick(e, t) {
                            const n = this.$route.path;
                            this.$router.resolve(t).href !== n && this.$googleTagManager.handleHeaderEvent("navigation", {
                                element_name: e,
                                section_name: n
                            })
                        }
                    },
                    COVER_LINE_INITIAL_HEIGHT: 47,
                    COVER_LINE_INITIAL_WIDTH: 100,
                    ROUTE_NAME: Ne.Z,
                    brand: (null == (za = je.appConfig.options.brand) ? void 0 : za.name) && `customBrand${null==(Ya=je.appConfig.options.brand)?void 0:Ya.name}`
                },
                io = (0, ge.Z)(oo, [
                    ["render", mt],
                    ["__scopeId", "data-v-3bccdc58"]
                ]),
                ro = io,
                so = {
                    id: "header-rules"
                },
                lo = {
                    class: "header-rules-container"
                },
                co = {
                    class: "header-rules"
                },
                po = {
                    class: "level-item"
                },
                uo = {
                    class: "logo-container"
                },
                mo = {
                    class: "level-item"
                },
                ho = {
                    key: 0,
                    class: "header-line-right--item"
                },
                go = {
                    class: "df"
                },
                vo = {
                    class: "header-line-right--item"
                },
                _o = {
                    class: "header-line-right--item"
                };

            function bo(e, t, n, a, o, i) {
                const r = (0, H.up)("Logo"),
                    s = (0, H.up)("RouterLink"),
                    l = (0, H.up)("HeaderDesktopApps"),
                    c = (0, H.up)("HeaderMobileApps"),
                    p = (0, H.up)("ChangeLanguage"),
                    d = (0, H.up)("HeaderSupportPanel");
                return (0, H.wg)(), (0, H.iD)("div", so, [(0, H._)("div", lo, [(0, H._)("div", co, [(0, H._)("div", po, [(0, H._)("div", uo, [(0, H.Wm)(s, {
                    class: "logo-link",
                    to: {
                        name: e.ROUTE_NAME.HOME
                    }
                }, {
                    default: (0, H.w5)((() => [(0, H.Wm)(r, {
                        size: "small"
                    })])),
                    _: 1
                }, 8, ["to"])])]), (0, H._)("div", mo, [i.isHeaderDesktopAppsBlockShown ? ((0, H.wg)(), (0, H.iD)("div", ho, [(0, H._)("div", go, [(0, H.Wm)(l), t[0] || (t[0] = (0, H._)("div", {
                    class: "spacer"
                }, null, -1)), (0, H.Wm)(c)])])) : (0, H.kq)("", !0), (0, H._)("div", vo, [(0, H.Wm)(p)]), (0, H._)("div", _o, [(0, H.Wm)(d)])])])])])
            }
            var fo = n(715983),
                yo = n(636406);

            function wo(e, t, n, a, o, i) {
                const r = (0, H.up)("RulesSupportButton");
                return (0, H.wg)(), (0, H.iD)("div", {
                    class: (0, Q.C_)(e.$style.container)
                }, [(0, H._)("div", {
                    class: (0, Q.C_)(e.$style.text)
                }, [(0, H._)("div", {
                    class: (0, Q.C_)(e.$style.title)
                }, (0, Q.zw)(i.text.title), 3), (0, H._)("div", {
                    class: (0, Q.C_)(e.$style.subtitle)
                }, (0, Q.zw)(i.text.header.subtitle1), 3)], 2), e.supportNumber ? ((0, H.wg)(), (0, H.j4)(r, {
                    key: 0,
                    type: "call",
                    class: (0, Q.C_)(e.$style.call),
                    onClick: t[0] || (t[0] = t => e.$emit("click", "call"))
                }, null, 8, ["class"])) : (0, H.kq)("", !0), (0, H.Wm)(r, {
                    type: "chat",
                    onClick: t[1] || (t[1] = t => e.$emit("click", "chat"))
                })], 2)
            }
            var Co = n(350516),
                So = Object.defineProperty,
                ko = Object.defineProperties,
                Ao = Object.getOwnPropertyDescriptors,
                Oo = Object.getOwnPropertySymbols,
                Io = Object.prototype.hasOwnProperty,
                To = Object.prototype.propertyIsEnumerable,
                Eo = (e, t, n) => t in e ? So(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Po = (e, t) => {
                    for (var n in t || (t = {})) Io.call(t, n) && Eo(e, n, t[n]);
                    if (Oo)
                        for (var n of Oo(t)) To.call(t, n) && Eo(e, n, t[n]);
                    return e
                },
                Mo = (e, t) => ko(e, Ao(t));
            const No = {
                    components: {
                        RulesSupportButton: Co.Z
                    },
                    emits: ["click"],
                    computed: Mo(Po({}, (0, x.Se)(["lang", "supportNumber"])), {
                        text() {
                            return this.lang.rules
                        }
                    })
                },
                Lo = {
                    container: "HeaderSupportPanel_container_HcTkg",
                    call: "HeaderSupportPanel_call_g1Bh2",
                    text: "HeaderSupportPanel_text_kMhzu",
                    title: "HeaderSupportPanel_title_xo0ZY",
                    subtitle: "HeaderSupportPanel_subtitle_OsP0n"
                },
                $o = {};
            $o["$style"] = Lo;
            const Ro = (0, ge.Z)(No, [
                    ["render", wo],
                    ["__cssModules", $o]
                ]),
                Zo = Ro,
                Bo = {
                    class: "header-desktop-apps"
                },
                Ho = {
                    class: "text"
                },
                Do = {
                    class: "bold"
                },
                Wo = {
                    key: 0
                },
                xo = {
                    key: 1
                };

            function jo(e, t, n, a, o, i) {
                const r = (0, H.up)("PWAButton");
                return (0, H.wg)(), (0, H.iD)("div", Bo, [(0, H._)("div", Ho, [(0, H._)("div", Do, (0, Q.zw)(e.$store.getters.lang.header.app), 1), i.isApple ? ((0, H.wg)(), (0, H.iD)("div", Wo, (0, Q.zw)(e.$store.getters.lang.header["app-mac"]), 1)) : ((0, H.wg)(), (0, H.iD)("div", xo, (0, Q.zw)(e.$store.getters.lang.header["app-windows"]), 1))]), (0, H.Wm)(r, {
                    class: "app-icon",
                    small: "",
                    onClick: t[0] || (t[0] = t => e.$emit("click"))
                })])
            }
            var Vo = n(857707);
            const Go = {
                    name: "HeaderDesktopApps",
                    components: {
                        PWAButton: Vo.Z
                    },
                    inject: ["$platform"],
                    emits: ["click"],
                    computed: {
                        isApple() {
                            return this.$platform.desktop.apple.mac
                        }
                    }
                },
                Uo = (0, ge.Z)(Go, [
                    ["render", jo],
                    ["__scopeId", "data-v-7ce49f57"]
                ]),
                Fo = Uo,
                zo = {
                    class: "header-mobile-apps"
                },
                Yo = {
                    class: "app-button"
                },
                qo = {
                    class: "app-button"
                };

            function Ko(e, t, n, a, o, i) {
                const r = (0, H.up)("VIconSvgGradient"),
                    s = (0, H.up)("MobilePWAInfoTooltip"),
                    l = (0, H.up)("TooltipHover");
                return (0, H.wg)(), (0, H.j4)(l, {
                    placement: "bottom",
                    offset: [0, 15]
                }, {
                    tooltip: (0, H.w5)((() => [(0, H.Wm)(s)])),
                    default: (0, H.w5)((() => [(0, H._)("div", zo, [(0, H._)("div", Yo, [(0, H.Wm)(r, {
                        icon: "android",
                        gradient: "android-pwa-icon-gradient",
                        "gradient-tag-name": "path"
                    })]), (0, H._)("div", qo, [(0, H.Wm)(r, {
                        icon: "ios",
                        gradient: "ios-pwa-icon-gradient",
                        "gradient-tag-name": "path"
                    })])])])),
                    _: 1
                })
            }
            var Jo = n(633644),
                Xo = n(336373),
                Qo = n(967861);
            const ei = {
                    name: "HeaderMobileApps",
                    components: {
                        VIconSvgGradient: Jo.Z,
                        TooltipHover: Xo.Z,
                        MobilePWAInfoTooltip: Qo.Z
                    }
                },
                ti = (0, ge.Z)(ei, [
                    ["render", Ko],
                    ["__scopeId", "data-v-76f50cf7"]
                ]),
                ni = ti;
            var ai = Object.defineProperty,
                oi = Object.defineProperties,
                ii = Object.getOwnPropertyDescriptors,
                ri = Object.getOwnPropertySymbols,
                si = Object.prototype.hasOwnProperty,
                li = Object.prototype.propertyIsEnumerable,
                ci = (e, t, n) => t in e ? ai(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                pi = (e, t) => {
                    for (var n in t || (t = {})) si.call(t, n) && ci(e, n, t[n]);
                    if (ri)
                        for (var n of ri(t)) li.call(t, n) && ci(e, n, t[n]);
                    return e
                },
                di = (e, t) => oi(e, ii(t));
            const ui = {
                    name: "HeaderTop",
                    components: {
                        Logo: Ot.Z,
                        HeaderDesktopApps: Fo,
                        HeaderMobileApps: ni,
                        ChangeLanguage: yo.Z,
                        HeaderSupportPanel: Zo
                    },
                    inject: ["$platform"],
                    data: () => ({
                        ROUTE_NAME: Ne.Z,
                        PWA: fo.Z
                    }),
                    computed: di(pi({}, (0, x.Se)(["isDesktopApp", "isPwaIgnored", "lang"])), {
                        text() {
                            return this.lang.rules
                        },
                        isPwa() {
                            return this.$platform.pwa.any
                        },
                        isHeaderDesktopAppsBlockShown() {
                            return !this.isPwaIgnored && !this.isDesktopApp && !this.isPwa && je.appConfig.modules.applications
                        }
                    })
                },
                mi = (0, ge.Z)(ui, [
                    ["render", bo],
                    ["__scopeId", "data-v-62e09f50"]
                ]),
                hi = mi,
                gi = {
                    class: "header-line-left"
                },
                vi = {
                    key: 0,
                    class: "level-item"
                },
                _i = {
                    class: "header-line-right"
                },
                bi = {
                    key: 0,
                    class: "header-line-right--item"
                },
                fi = {
                    class: "df"
                },
                yi = {
                    key: 1,
                    class: "header-line-right--item"
                },
                wi = {
                    class: "df"
                },
                Ci = {
                    class: "header-line-right--item"
                },
                Si = {
                    key: 2,
                    class: "header-line-right--item"
                };

            function ki(e, t, n, a, o, i) {
                var r, s;
                const l = (0, H.up)("VIcon"),
                    c = (0, H.up)("VButton"),
                    p = (0, H.up)("FreeMoneyLink"),
                    d = (0, H.up)("FortuneWheelHeaderLink"),
                    u = (0, H.up)("SmarticoLink"),
                    m = (0, H.up)("HeaderLoyaltyLink"),
                    h = (0, H.up)("HeaderTopCurrentPromotion"),
                    g = (0, H.up)("BonusLink"),
                    v = (0, H.up)("HeaderTopCarRaffle"),
                    _ = (0, H.up)("CashbackTimer"),
                    b = (0, H.up)("CashbackInfo"),
                    f = (0, H.up)("VDropdown"),
                    y = (0, H.up)("HeaderDesktopApps"),
                    w = (0, H.up)("HeaderMobileApps"),
                    C = (0, H.up)("ChangeLanguage"),
                    S = (0, H.up)("HeaderSupportPanel");
                return (0, H.wg)(), (0, H.iD)("div", {
                    class: (0, Q.C_)(["header__line--top", i.headerClass])
                }, [(0, H._)("div", gi, [e.isDesktopApp ? (0, H.kq)("", !0) : ((0, H.wg)(), (0, H.iD)("div", vi, [e.$options.appConfig.modules.accessModal ? ((0, H.wg)(), (0, H.j4)(c, {
                    key: 0,
                    class: "ttn header-button df-aic-jcc",
                    type: "mini-icon",
                    onClick: i.openModalAccess
                }, {
                    default: (0, H.w5)((() => [(0, H.Wm)(l, {
                        class: "access-icon",
                        icon: "lock",
                        inline: ""
                    })])),
                    _: 1
                }, 8, ["onClick"])) : (0, H.kq)("", !0), i.isPwa ? (0, H.kq)("", !0) : ((0, H.wg)(), (0, H.j4)(c, {
                    key: 1,
                    class: "ttn header-button",
                    "class-name": "df-aic-jcc",
                    type: "mini-icon",
                    onClick: i.goToMobile
                }, {
                    default: (0, H.w5)((() => [(0, H.Wm)(l, {
                        class: "access-icon",
                        icon: "mobile",
                        inline: ""
                    })])),
                    _: 1
                }, 8, ["onClick"]))])), e.$options.appConfig.modules.freeMoney ? ((0, H.wg)(), (0, H.iD)(H.HY, {
                    key: 1
                }, [t[8] || (t[8] = (0, H._)("div", {
                    class: "divider"
                }, null, -1)), (0, H.Wm)(p, {
                    onClickCapture: t[0] || (t[0] = t => i.onElementClick("free-money", {
                        name: e.$options.ROUTE_NAME.FREE_MONEY
                    }))
                })], 64)) : (0, H.kq)("", !0), i.isShownFortuneWheelLink ? ((0, H.wg)(), (0, H.j4)(d, {
                    key: 2
                })) : (0, H.kq)("", !0), a.userStore.isAuthed && a.isSmarticoWidgetVisible ? ((0, H.wg)(), (0, H.j4)(u, {
                    key: 3,
                    class: "smarticoLink"
                })) : (0, H.kq)("", !0)]), (0, H._)("div", _i, [e.$options.appConfig.modules.bonuses ? ((0, H.wg)(), (0, H.iD)("div", bi, [(0, H._)("div", fi, [a.isLoyaltyProgramEnabled ? ((0, H.wg)(), (0, H.j4)(m, {
                    key: 0,
                    onClick: t[1] || (t[1] = e => i.sendGtmHeaderEvent("loyalty"))
                })) : (0, H.kq)("", !0), i.promotion ? ((0, H.wg)(), (0, H.j4)(h, {
                    key: 1,
                    promotion: i.promotion,
                    onClick: t[2] || (t[2] = e => {
                        var t;
                        return i.sendGtmHeaderEvent(null == (t = i.promotion) ? void 0 : t.analytics_name)
                    })
                }, null, 8, ["promotion"])) : (0, H.kq)("", !0), (0, H.Wm)(g, {
                    onClick: t[3] || (t[3] = t => i.onElementClick("bonuses", {
                        name: e.$options.ROUTE_NAME.BONUSES
                    }))
                }), i.isShownCarRaffle ? ((0, H.wg)(), (0, H.j4)(v, {
                    key: 2,
                    onClick: t[4] || (t[4] = e => i.sendGtmHeaderEvent("lucky_drive"))
                })) : a.userStore.isAuthed ? ((0, H.wg)(), (0, H.iD)(H.HY, {
                    key: 3
                }, [t[9] || (t[9] = (0, H._)("div", {
                    class: "spacer-l"
                }, null, -1)), (0, H.Wm)(f, {
                    angle: "",
                    hoverable: "",
                    align: "center"
                }, {
                    trigger: (0, H.w5)((() => [(0, H.Wm)(_, {
                        onClick: t[5] || (t[5] = e => i.sendGtmHeaderEvent("cashback"))
                    })])),
                    default: (0, H.w5)((() => [(0, H.Wm)(b, {
                        onClick: t[6] || (t[6] = e => i.onElementClick("cashback"))
                    })])),
                    _: 1
                })], 64)) : (0, H.kq)("", !0)])])) : (0, H.kq)("", !0), i.isHeaderDesktopAppsBlockShown && e.$options.appConfig.modules.applications ? ((0, H.wg)(), (0, H.iD)("div", yi, [(0, H._)("div", wi, [(null == (r = e.$options.appConfig.modules.applications) ? void 0 : r.desktop) ? ((0, H.wg)(), (0, H.j4)(y, {
                    key: 0,
                    onClick: i.onAppsDownload
                }, null, 8, ["onClick"])) : (0, H.kq)("", !0), t[10] || (t[10] = (0, H._)("div", {
                    class: "spacer"
                }, null, -1)), (null == (s = e.$options.appConfig.modules.applications) ? void 0 : s.mobile) ? ((0, H.wg)(), (0, H.j4)(w, {
                    key: 1
                })) : (0, H.kq)("", !0)])])) : (0, H.kq)("", !0), (0, H._)("div", Ci, [(0, H.Wm)(C)]), i.isCasinoGamePage ? ((0, H.wg)(), (0, H.iD)("div", Si, [(0, H.Wm)(S, {
                    onClick: t[7] || (t[7] = e => i.onElementClick(`support-${e}`))
                })])) : (0, H.kq)("", !0)])], 2)
            }
            var Ai = n(439609),
                Oi = n(876074),
                Ii = n(982090);
            const Ti = "ff-an-10843-smartico-widgets",
                Ei = () => {
                    const {
                        value: e
                    } = (0, Ii.y)(Ti), t = (0, H.Fl)((() => "on" === e.value));
                    return {
                        isSmarticoWidgetVisible: t
                    }
                },
                Pi = 12096e5;
            let Mi;
            const Ni = e => Date.now() - Pi + e,
                Li = e => {
                    Lt.J_.set(Lt.On, e)
                },
                $i = (e, t) => {
                    let n = t;
                    if (clearTimeout(Mi), void 0 === t) {
                        const e = +Lt.J_.getOr(Lt.On, Ni(6e5));
                        n = e + Pi <= Date.now() ? 0 : e + Pi - Date.now()
                    }
                    Li(Ni(n)), Mi = setTimeout((() => {
                        e(), Li(Date.now())
                    }), n)
                };
            var Ri = n(628978),
                Zi = n(365346),
                Bi = n(903091),
                Hi = n(538834);
            const Di = ["src"],
                Wi = ["src"],
                xi = (0, H.aZ)({
                    __name: "FortuneWheelHeaderLink",
                    setup(e) {
                        const {
                            openModal: t
                        } = (0, Zi.U)(), n = (0, l.Jr)("common.bonuses.fortuneWheel.headerLink.title");
                        return (e, a) => ((0, H.wg)(), (0, H.iD)("div", {
                            class: (0, Q.C_)(e.$style.root),
                            onClick: a[0] || (a[0] = (...e) => (0, D.SU)(t) && (0, D.SU)(t)(...e))
                        }, [(0, H._)("img", {
                            class: (0, Q.C_)(e.$style.icon),
                            src: (0, D.SU)(Ri.SX).headerLink.image.src
                        }, null, 10, Di), (0, H._)("img", {
                            class: (0, Q.C_)(e.$style.background),
                            src: (0, D.SU)(Ri.SX).headerLink.backgroundShadow.src
                        }, null, 10, Wi), (0, H._)("p", {
                            class: (0, Q.C_)(e.$style.text)
                        }, (0, Q.zw)((0, D.SU)(n)), 3), (0, H.Wm)(te.Z, {
                            class: (0, Q.C_)(e.$style.arrow),
                            size: 9,
                            icon: "arrow-right"
                        }, null, 8, ["class"])], 2))
                    }
                }),
                ji = {
                    root: "FortuneWheelHeaderLink_root_XG9J2",
                    icon: "FortuneWheelHeaderLink_icon_tkmZO",
                    background: "FortuneWheelHeaderLink_background_HTCgn",
                    text: "FortuneWheelHeaderLink_text_m5gT6",
                    arrow: "FortuneWheelHeaderLink_arrow_bgV1D"
                },
                Vi = {};
            Vi["$style"] = ji;
            const Gi = (0, ge.Z)(xi, [
                    ["__cssModules", Vi]
                ]),
                Ui = Gi;

            function Fi(e, t, n, a, o, i) {
                const r = (0, H.up)("VIcon"),
                    s = (0, H.up)("RouterLink");
                return (0, H.wg)(), (0, H.j4)(s, {
                    to: {
                        name: e.$options.ROUTE_NAME.FREE_MONEY
                    },
                    class: (0, Q.C_)(e.$style.root)
                }, {
                    default: (0, H.w5)((() => [(0, H._)("span", {
                        class: (0, Q.C_)(e.$style.text)
                    }, "Free Money!", 2), (0, H._)("span", {
                        class: (0, Q.C_)(e.$style.image),
                        style: (0, Q.j5)({
                            backgroundImage: `url(${e.$options.FreeMoneyLinkImage})`
                        })
                    }, null, 6), (0, H.Wm)(r, {
                        class: (0, Q.C_)(e.$style.arrow),
                        size: 9,
                        icon: "arrow-right"
                    }, null, 8, ["class"])])),
                    _: 1
                }, 8, ["to", "class"])
            }
            var zi = n(297784),
                Yi = n.n(zi);
            const qi = {
                    components: {
                        VIcon: te.Z
                    },
                    ROUTE_NAME: Ne.Z,
                    FreeMoneyLinkImage: Yi()
                },
                Ki = {
                    root: "FreeMoneyLink_root_sudSD",
                    text: "FreeMoneyLink_text_qBSgN",
                    image: "FreeMoneyLink_image_qU_wg",
                    arrow: "FreeMoneyLink_arrow_cMaRG"
                },
                Ji = {};
            Ji["$style"] = Ki;
            const Xi = (0, ge.Z)(qi, [
                    ["render", Fi],
                    ["__cssModules", Ji]
                ]),
                Qi = Xi;

            function er(e, t, n, a, o, i) {
                const r = (0, H.up)("BaseInfo");
                return (0, H.wg)(), (0, H.j4)(r, {
                    title: i.formattedTitle,
                    message: i.formattedMessage,
                    "link-text": i.text.link,
                    onLinkClick: i.clickLinkHandler
                }, null, 8, ["title", "message", "link-text", "onLinkClick"])
            }
            var tr = n(563637);
            const nr = {
                    class: "base-info"
                },
                ar = {
                    class: "base-info__header"
                },
                or = {
                    class: "base-info__title"
                },
                ir = {
                    class: "base-info__content"
                };

            function rr(e, t, n, a, o, i) {
                return (0, H.wg)(), (0, H.iD)("section", nr, [(0, H._)("div", ar, [(0, H._)("div", or, (0, Q.zw)(n.title), 1), n.linkText ? ((0, H.wg)(), (0, H.iD)("a", {
                    key: 0,
                    class: "base-info__link",
                    onClick: t[0] || (t[0] = t => e.$emit("link-click"))
                }, (0, Q.zw)(n.linkText), 1)) : (0, H.kq)("", !0)]), (0, H._)("div", ir, (0, Q.zw)(n.message), 1)])
            }
            const sr = {
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        message: {
                            type: String,
                            default: ""
                        },
                        linkText: {
                            type: String,
                            default: ""
                        }
                    },
                    emits: ["link-click"]
                },
                lr = (0, ge.Z)(sr, [
                    ["render", rr],
                    ["__scopeId", "data-v-43a8dee0"]
                ]),
                cr = lr;
            var pr = Object.defineProperty,
                dr = Object.defineProperties,
                ur = Object.getOwnPropertyDescriptors,
                mr = Object.getOwnPropertySymbols,
                hr = Object.prototype.hasOwnProperty,
                gr = Object.prototype.propertyIsEnumerable,
                vr = (e, t, n) => t in e ? pr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                _r = (e, t) => {
                    for (var n in t || (t = {})) hr.call(t, n) && vr(e, n, t[n]);
                    if (mr)
                        for (var n of mr(t)) gr.call(t, n) && vr(e, n, t[n]);
                    return e
                },
                br = (e, t) => dr(e, ur(t)),
                fr = (e, t, n) => new Promise(((a, o) => {
                    var i = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                    s((n = n.apply(e, t)).next())
                }));
            const yr = 30,
                wr = {
                    components: {
                        BaseInfo: cr
                    },
                    inject: ["$modal"],
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        message: {
                            type: String,
                            default: ""
                        },
                        linkText: {
                            type: String,
                            default: ""
                        }
                    },
                    emits: ["click"],
                    computed: br(_r({}, (0, x.Se)(["langCommon"])), {
                        text() {
                            return this.langCommon.paymentMethod.cashback.info
                        },
                        formattedTitle() {
                            return (0, tr.Uw)(this.text.title, yr)
                        },
                        formattedMessage() {
                            return (0, tr.Uw)(this.text.message, yr)
                        }
                    }),
                    methods: {
                        clickLinkHandler() {
                            return fr(this, null, (function*() {
                                this.$emit("click"), this.$router.currentRoute.name !== Ne.Z.BONUSES && (yield this.$router.push({
                                    name: Ne.Z.BONUSES
                                })), yield this.$modal.open(S.kt)
                            }))
                        }
                    }
                },
                Cr = (0, ge.Z)(wr, [
                    ["render", er]
                ]),
                Sr = Cr,
                kr = ["onClick"],
                Ar = ["src"];

            function Or(e, t, n, a, o, i) {
                const r = (0, H.up)("VIcon"),
                    s = (0, H.up)("RouterLink");
                return (0, H.wg)(), (0, H.j4)(s, {
                    to: {
                        name: e.$options.ROUTE_NAME.BONUSES
                    },
                    custom: ""
                }, {
                    default: (0, H.w5)((({
                        navigate: t
                    }) => [(0, H._)("div", {
                        class: (0, Q.C_)([e.$style.root, i.isNewBonusBalance && e.$style.rootNewBonusBalance]),
                        onClick: e => i.onClick(t, e)
                    }, [(0, H._)("div", {
                        class: (0, Q.C_)(e.$style.circle)
                    }, [(0, H.Wm)(r, {
                        size: 15,
                        icon: "present-bonus"
                    })], 2), (0, H._)("div", {
                        class: (0, Q.C_)(e.$style.text)
                    }, (0, Q.zw)(i.text.promotions), 3), (0, H._)("img", {
                        class: (0, Q.C_)(e.$style.image),
                        src: i.isNewBonusBalance ? e.$options.bonusLinkImage : e.$options.presentWithLight
                    }, null, 10, Ar), i.isNewBonusBalance ? ((0, H.wg)(), (0, H.iD)(H.HY, {
                        key: 0
                    }, (0, H.Ko)(2, (t => (0, H._)("div", {
                        key: t,
                        class: (0, Q.C_)(e.$style[`light${t}`])
                    }, null, 2))), 64)) : (0, H.kq)("", !0)], 10, kr)])),
                    _: 1
                }, 8, ["to"])
            }
            var Ir = n(823696),
                Tr = n.n(Ir),
                Er = n(173753),
                Pr = n.n(Er),
                Mr = Object.defineProperty,
                Nr = Object.defineProperties,
                Lr = Object.getOwnPropertyDescriptors,
                $r = Object.getOwnPropertySymbols,
                Rr = Object.prototype.hasOwnProperty,
                Zr = Object.prototype.propertyIsEnumerable,
                Br = (e, t, n) => t in e ? Mr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Hr = (e, t) => {
                    for (var n in t || (t = {})) Rr.call(t, n) && Br(e, n, t[n]);
                    if ($r)
                        for (var n of $r(t)) Zr.call(t, n) && Br(e, n, t[n]);
                    return e
                },
                Dr = (e, t) => Nr(e, Lr(t));
            const Wr = {
                    name: "BonusLink",
                    components: {
                        VIcon: te.Z
                    },
                    emits: ["click"],
                    setup() {
                        const e = (0, zt.gD)();
                        return {
                            bonusStore: e
                        }
                    },
                    computed: Dr(Hr({}, (0, x.Se)(["lang"])), {
                        text() {
                            return this.lang.help
                        },
                        isNewBonusBalance() {
                            return this.bonusStore.isNewBonusBalance
                        }
                    }),
                    methods: {
                        onClick(e, t) {
                            this.$emit("click"), e(t)
                        }
                    },
                    ROUTE_NAME: Ne.Z,
                    presentWithLight: Pr(),
                    bonusLinkImage: Tr()
                },
                xr = {
                    root: "BonusLink_root_fPfSB",
                    circle: "BonusLink_circle_kBCQX",
                    text: "BonusLink_text_qr3iZ",
                    image: "BonusLink_image_LmUxS",
                    rootNewBonusBalance: "BonusLink_rootNewBonusBalance_fvWd0 BonusLink_root_fPfSB",
                    light: "BonusLink_light_GTbpg",
                    light1: "BonusLink_light1_vYoVp BonusLink_light_GTbpg",
                    light2: "BonusLink_light2_jb0eM BonusLink_light_GTbpg"
                },
                jr = {};
            jr["$style"] = xr;
            const Vr = (0, ge.Z)(Wr, [
                    ["render", Or],
                    ["__cssModules", jr]
                ]),
                Gr = Vr;
            var Ur = n(995173);
            const Fr = n.p + "img/dots.4c0db5030.svg";
            var zr = n(45472),
                Yr = n.n(zr),
                qr = n(609999),
                Kr = n.n(qr);
            const Jr = (0, H.aZ)({
                    __name: "SmarticoLink",
                    setup(e) {
                        const t = (0, l.Jr)("common.smartico"),
                            {
                                openWidget: n
                            } = (0, Ur.d)(),
                            a = () => {
                                n()
                            };
                        return (e, n) => ((0, H.wg)(), (0, H.iD)("div", {
                            class: (0, Q.C_)(e.$style.root),
                            onClick: a
                        }, [(0, H._)("div", {
                            class: (0, Q.C_)(e.$style.textContainer)
                        }, [(0, H._)("span", {
                            class: (0, Q.C_)(e.$style.text)
                        }, (0, Q.zw)((0, D.SU)(t).widgetText), 3), (0, H._)("span", {
                            class: (0, Q.C_)([e.$style.image, e.$style.imageDots]),
                            style: (0, Q.j5)({
                                backgroundImage: `url(${(0,D.SU)(Fr)})`
                            })
                        }, null, 6), (0, H._)("span", {
                            class: (0, Q.C_)([e.$style.image, e.$style.imageDots2]),
                            style: (0, Q.j5)({
                                backgroundImage: `url(${(0,D.SU)(Fr)})`
                            })
                        }, null, 6)], 2), (0, H._)("span", {
                            class: (0, Q.C_)([e.$style.image, e.$style.imageWheel]),
                            style: (0, Q.j5)({
                                backgroundImage: `url(${(0,D.SU)(Kr())})`
                            })
                        }, null, 6), (0, H._)("span", {
                            class: (0, Q.C_)([e.$style.image, e.$style.imageCup]),
                            style: (0, Q.j5)({
                                backgroundImage: `url(${(0,D.SU)(Yr())})`
                            })
                        }, null, 6)], 2))
                    }
                }),
                Xr = {
                    root: "SmarticoLink_root_Dh_B1",
                    textContainer: "SmarticoLink_textContainer_bjYDH",
                    image: "SmarticoLink_image_liOFg",
                    imageWheel: "SmarticoLink_imageWheel_IVWC4",
                    imageCup: "SmarticoLink_imageCup_ybMlR",
                    imageDots: "SmarticoLink_imageDots_kpDqv",
                    imageDots2: "SmarticoLink_imageDots2_G9eyE",
                    text: "SmarticoLink_text_aKdni"
                },
                Qr = {};
            Qr["$style"] = Xr;
            const es = (0, ge.Z)(Jr, [
                    ["__cssModules", Qr]
                ]),
                ts = es;
            var ns = n(99290);
            const as = ["src"],
                os = (0, H.aZ)({
                    __name: "CashbackTimer",
                    setup(e) {
                        const {
                            cashbackDescription: t,
                            cashbackText: n
                        } = (0, l.Ys)();
                        return (e, a) => ((0, H.wg)(), (0, H.iD)("div", {
                            class: (0, Q.C_)(e.$style.cashbackTimer)
                        }, [(0, H._)("div", {
                            class: (0, Q.C_)(e.$style.cashbackImgContainer)
                        }, [(0, H._)("img", {
                            src: String((0, D.SU)(ns.assets).cashbackTimerBackground),
                            class: (0, Q.C_)(e.$style.cashbackImg)
                        }, null, 10, as)], 2), (0, H._)("div", {
                            class: (0, Q.C_)(e.$style.cashbackArrowIconContainer)
                        }, [(0, H.Wm)(te.Z, {
                            icon: "cashback-arrow",
                            class: (0, Q.C_)(e.$style.cashbackArrowIcon)
                        }, null, 8, ["class"])], 2), (0, H._)("div", {
                            class: (0, Q.C_)(e.$style.cashbackDescription)
                        }, (0, Q.zw)((0, D.SU)(t)), 3), (0, H._)("div", {
                            class: (0, Q.C_)(e.$style.cashbackText)
                        }, (0, Q.zw)((0, D.SU)(n)), 3)], 2))
                    }
                }),
                is = {
                    cashbackTimer: "CashbackTimer_cashbackTimer_IGeCD",
                    cashbackImgContainer: "CashbackTimer_cashbackImgContainer_Zqr6Y",
                    cashbackImg: "CashbackTimer_cashbackImg_We7Jk",
                    cashbackArrowIconContainer: "CashbackTimer_cashbackArrowIconContainer_ss6yU",
                    cashbackArrowIcon: "CashbackTimer_cashbackArrowIcon_XjIX_",
                    "arrow-icon": "CashbackTimer_arrow-icon__M8_E",
                    cashbackDescription: "CashbackTimer_cashbackDescription_Uxtoq",
                    cashbackText: "CashbackTimer_cashbackText_Frruq"
                },
                rs = {};
            rs["$style"] = is;
            const ss = (0, ge.Z)(os, [
                    ["__cssModules", rs]
                ]),
                ls = ss;
            var cs = n(290505),
                ps = n.n(cs),
                ds = n(55254);
            const us = ["src"],
                ms = (0, H.aZ)({
                    __name: "HeaderLoyaltyLink",
                    setup(e) {
                        const t = (0, l.Jr)("common.loyalty_program.common");
                        return (e, n) => {
                            const a = (0, H.up)("RouterLink");
                            return (0, H.wg)(), (0, H.j4)(a, {
                                class: (0, Q.C_)(e.$style.root),
                                to: {
                                    name: (0, D.SU)(Ne.Z).LOYALTY_PROGRAM
                                }
                            }, {
                                default: (0, H.w5)((() => [(0, H._)("span", {
                                    class: (0, Q.C_)(e.$style.prefix)
                                }, [(0, H.Wm)((0, D.SU)(ds.Z), {
                                    class: (0, Q.C_)(e.$style.cup)
                                }, null, 8, ["class"])], 2), (0, H._)("p", {
                                    class: (0, Q.C_)(e.$style.text)
                                }, (0, Q.zw)((0, D.SU)(t).loyaltyProgram), 3), (0, H._)("img", {
                                    src: (0, D.SU)(ps()).src,
                                    class: (0, Q.C_)(e.$style.image)
                                }, null, 10, us)])),
                                _: 1
                            }, 8, ["class", "to"])
                        }
                    }
                }),
                hs = {
                    root: "HeaderLoyaltyLink_root_SV0Xf",
                    prefix: "HeaderLoyaltyLink_prefix_wqBCM",
                    cup: "HeaderLoyaltyLink_cup_n0RyP",
                    text: "HeaderLoyaltyLink_text_ow9ft",
                    image: "HeaderLoyaltyLink_image_vT11n"
                },
                gs = {};
            gs["$style"] = hs;
            const vs = (0, ge.Z)(ms, [
                    ["__cssModules", gs]
                ]),
                _s = vs;
            var bs = n(564999),
                fs = n.n(bs);
            const ys = n.p + "img/carRaffleDesktopHeaderTicket.1a4740acc.svg";
            var ws = n(473614);
            const Cs = ["src"],
                Ss = ["src"],
                ks = (0, H.aZ)({
                    __name: "HeaderTopCarRaffle",
                    setup(e) {
                        const t = (0, Bi.q)(),
                            n = (0, H.Fl)((() => {
                                var e, n;
                                return (null == (n = null == (e = t.raffleLinkData) ? void 0 : e.design) ? void 0 : n.version) ? t.raffleLinkData.design.headerLink : void 0
                            }));
                        return (e, t) => {
                            const a = (0, H.up)("RouterLink");
                            return (0, H.wg)(), (0, H.j4)(a, {
                                class: (0, Q.C_)(e.$style.root),
                                to: {
                                    name: (0, D.SU)(Ne.Z).FREE_MONEY,
                                    query: {
                                        anchor: "luckyDrive"
                                    }
                                }
                            }, {
                                default: (0, H.w5)((() => {
                                    var t, a;
                                    return [(0, H._)("span", {
                                        class: (0, Q.C_)(e.$style.prefix),
                                        style: (0, Q.j5)({
                                            backgroundImage: null == (t = n.value) ? void 0 : t.gradient
                                        })
                                    }, [(0, H._)("img", {
                                        style: (0, Q.j5)(e.$style.prefixIcon),
                                        src: (0, D.SU)(ys)
                                    }, null, 12, Cs)], 6), (0, H._)("p", {
                                        class: (0, Q.C_)(e.$style.text)
                                    }, [(0, H.Uk)((0, Q.zw)((0, D.SU)(Bi.h)) + " ", 1), (0, H.Wm)(ws.Z, {
                                        class: (0, Q.C_)(e.$style.textBadge),
                                        size: "small"
                                    }, null, 8, ["class"])], 2), (0, H._)("img", {
                                        src: (null == (a = n.value) ? void 0 : a.image) || (0, D.SU)(fs()).src,
                                        class: (0, Q.C_)(e.$style.image)
                                    }, null, 10, Ss)]
                                })),
                                _: 1
                            }, 8, ["class", "to"])
                        }
                    }
                }),
                As = {
                    root: "HeaderTopCarRaffle_root_cjP3m",
                    text: "HeaderTopCarRaffle_text_xl8mW",
                    textBadge: "HeaderTopCarRaffle_textBadge_L0yhK",
                    image: "HeaderTopCarRaffle_image_Crqu5",
                    prefix: "HeaderTopCarRaffle_prefix_NNQsu",
                    prefixIcon: "HeaderTopCarRaffle_prefixIcon_hVjjB"
                },
                Os = {};
            Os["$style"] = As;
            const Is = (0, ge.Z)(ks, [
                    ["__cssModules", Os]
                ]),
                Ts = Is;
            var Es = n(814670),
                Ps = n(173870);
            const Ms = ["src"],
                Ns = {
                    key: 1
                },
                Ls = (0, H.aZ)({
                    __name: "HeaderTopCurrentPromotion",
                    props: {
                        promotion: {}
                    },
                    setup(e) {
                        const t = e,
                            n = (0, W.tv)(),
                            a = (0, x.oR)(),
                            o = (0, D.Vh)((() => a.getters.isMobile)),
                            i = () => {
                                n.push({
                                    name: o.value ? Ps.Z.PROMOTION : Ne.Z.PROMOTION,
                                    params: {
                                        promotionSlug: t.promotion.slug
                                    }
                                })
                            };
                        return (e, t) => {
                            var n, a, o, r, s, l;
                            return e.promotion ? ((0, H.wg)(), (0, H.iD)("div", {
                                key: 0,
                                class: (0, Q.C_)(e.$style.root),
                                style: (0, Q.j5)({
                                    background: null == (a = null == (n = e.promotion.layout.entrypoints) ? void 0 : n.desktopHeader) ? void 0 : a.background
                                }),
                                onClick: i
                            }, [(null == (r = null == (o = e.promotion.layout.entrypoints) ? void 0 : o.desktopHeader) ? void 0 : r.image) ? ((0, H.wg)(), (0, H.iD)("img", {
                                key: 0,
                                src: (0, D.SU)(Es.l)(e.promotion.layout.entrypoints.desktopHeader.image, "ltr"),
                                class: (0, Q.C_)(e.$style.image)
                            }, null, 10, Ms)) : (0, H.kq)("", !0), (null == (l = null == (s = e.promotion.texts.entrypoints) ? void 0 : s.desktopHeader) ? void 0 : l.text) ? ((0, H.wg)(), (0, H.iD)("p", Ns, (0, Q.zw)(e.promotion.texts.entrypoints.desktopHeader.text), 1)) : (0, H.kq)("", !0), (0, H.Wm)(te.Z, {
                                class: (0, Q.C_)(e.$style.arrow),
                                size: 9,
                                icon: "arrow-right"
                            }, null, 8, ["class"])], 6)) : (0, H.kq)("", !0)
                        }
                    }
                }),
                $s = {
                    root: "HeaderTopCurrentPromotion_root_irC34",
                    image: "HeaderTopCurrentPromotion_image_VaC5l",
                    arrow: "HeaderTopCurrentPromotion_arrow_a1hHD"
                },
                Rs = {};
            Rs["$style"] = $s;
            const Zs = (0, ge.Z)(Ls, [
                    ["__cssModules", Rs]
                ]),
                Bs = Zs;
            var Hs = Object.defineProperty,
                Ds = Object.defineProperties,
                Ws = Object.getOwnPropertyDescriptors,
                xs = Object.getOwnPropertySymbols,
                js = Object.prototype.hasOwnProperty,
                Vs = Object.prototype.propertyIsEnumerable,
                Gs = (e, t, n) => t in e ? Hs(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Us = (e, t) => {
                    for (var n in t || (t = {})) js.call(t, n) && Gs(e, n, t[n]);
                    if (xs)
                        for (var n of xs(t)) Vs.call(t, n) && Gs(e, n, t[n]);
                    return e
                },
                Fs = (e, t) => Ds(e, Ws(t));
            const zs = {
                    name: "HeaderTop",
                    components: {
                        HeaderTopCurrentPromotion: Bs,
                        FortuneWheelHeaderLink: Ui,
                        SmarticoLink: ts,
                        VButton: Nt.Z,
                        HeaderDesktopApps: Fo,
                        HeaderMobileApps: ni,
                        ChangeLanguage: yo.Z,
                        FreeMoneyLink: Qi,
                        CashbackTimer: ls,
                        CashbackInfo: Sr,
                        BonusLink: Gr,
                        VDropdown: Xn.w,
                        HeaderSupportPanel: Zo,
                        VIcon: te.Z,
                        HeaderTopCarRaffle: Ts,
                        HeaderLoyaltyLink: _s
                    },
                    inject: ["$modal", "$platform"],
                    setup() {
                        const e = (0, nt.L)(),
                            t = (0, Bi.q)(),
                            {
                                isSmarticoWidgetVisible: n
                            } = Ei(),
                            a = (0, Zi.U)(),
                            {
                                isLoyaltyProgramEnabled: o
                            } = (0, Oi.I)(),
                            {
                                promotionsList: i
                            } = (0, Hi.B)();
                        return {
                            userStore: e,
                            carRaffleStore: t,
                            isSmarticoWidgetVisible: n,
                            isLoyaltyProgramEnabled: o,
                            promotionsList: i,
                            fortuneWheelStore: a
                        }
                    },
                    computed: Fs(Us(Us({}, (0, x.Se)(["isDesktopApp", "isPwaIgnored"])), (0, x.rn)(["country"])), {
                        headerClass() {
                            return {
                                "leaderboard-theme": this.isLeaderboardPage
                            }
                        },
                        promotion() {
                            var e;
                            return (null != (e = this.promotionsList) ? e : []).find((e => {
                                var t;
                                return (null != (t = e.entrypoints) ? t : []).includes("desktopHeader")
                            }))
                        },
                        isLeaderboardPage() {
                            return this.customHeader === f.Pa7
                        },
                        isCasinoGamePage() {
                            return this.customHeader === f.EMm
                        },
                        customHeader() {
                            var e;
                            return null == (e = this.$route.meta) ? void 0 : e[f.AoL]
                        },
                        isPwa() {
                            return this.$platform.pwa.any
                        },
                        isHeaderDesktopAppsBlockShown() {
                            return !this.isPwaIgnored && !this.isDesktopApp && !this.isPwa && je.appConfig.modules.applications
                        },
                        isShownCarRaffle() {
                            return this.carRaffleStore.raffleLinkData && !Ai._.includes(this.country)
                        },
                        isShownFortuneWheelLink() {
                            return this.fortuneWheelStore.visible && (!this.userStore.isAuthed || this.fortuneWheelStore.wheelStatus === Ri.jY.AVAILABLE)
                        }
                    }),
                    methods: {
                        sendGtmHeaderEvent(e) {
                            this.$googleTagManager.handleMainPageEvent("header", {
                                element_name: e
                            })
                        },
                        sendGtmNavigationEvent(e, t = {}) {
                            this.$googleTagManager.handleHeaderEvent("navigation", Us({
                                element_name: e
                            }, t))
                        },
                        openModalAccess() {
                            $i((() => {
                                this.$modal.open(S.hR, {
                                    toQueue: !0
                                })
                            }), 0), this.onElementClick("access")
                        },
                        goToMobile() {
                            Lt.J_.set(Lt.pM, f.mvW), window.location.reload(), this.onElementClick("mobile")
                        },
                        onAppsDownload() {
                            const e = this.$platform.desktop.apple.mac ? d.GV.MACOS : d.GV.WINDOWS;
                            this.$googleTagManager.handleHeaderEvent("app", {
                                app_platform: e
                            })
                        },
                        onElementClick(e, t) {
                            const n = this.$route.path;
                            t && this.$router.resolve(t).href === n || this.sendGtmNavigationEvent(e, {
                                section_name: n
                            })
                        }
                    },
                    ROUTE_NAME: Ne.Z,
                    appConfig: je.appConfig
                },
                Ys = (0, ge.Z)(zs, [
                    ["render", ki],
                    ["__scopeId", "data-v-661c9191"]
                ]),
                qs = Ys;

            function Ks(e, t, n, a, o, i) {
                return i.hideSupportPanel ? (0, H.kq)("", !0) : ((0, H.wg)(), (0, H.j4)((0, H.LL)(i.supportPanel), {
                    key: 0
                }))
            }
            var Js = n(809283);
            const Xs = {
                    components: {
                        FixedSupportPanel: Js.Z
                    },
                    computed: {
                        supportPanel() {
                            return this.$route.matched.map((e => e.meta[f.bpw])).find((e => !!e)) || Js.Z
                        },
                        hideSupportPanel() {
                            return this.$route.matched.map((e => e.meta[f.EC8])).some(Boolean)
                        }
                    }
                },
                Qs = (0, ge.Z)(Xs, [
                    ["render", Ks]
                ]),
                el = Qs;
            var tl = Object.defineProperty,
                nl = Object.defineProperties,
                al = Object.getOwnPropertyDescriptors,
                ol = Object.getOwnPropertySymbols,
                il = Object.prototype.hasOwnProperty,
                rl = Object.prototype.propertyIsEnumerable,
                sl = (e, t, n) => t in e ? tl(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                ll = (e, t) => {
                    for (var n in t || (t = {})) il.call(t, n) && sl(e, n, t[n]);
                    if (ol)
                        for (var n of ol(t)) rl.call(t, n) && sl(e, n, t[n]);
                    return e
                },
                cl = (e, t) => nl(e, al(t)),
                pl = (e, t, n) => new Promise(((a, o) => {
                    var i = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                    s((n = n.apply(e, t)).next())
                }));
            const dl = {
                    components: {
                        PushNotificationsPopup: lt,
                        HeaderBottom: ro,
                        HeaderTop: qs,
                        HeaderRules: hi,
                        Forbidden: tt.Z,
                        SupportPanel: el,
                        ChangePasswordNotification: et.Z
                    },
                    inject: ["$modal", "$notify"],
                    setup() {
                        const e = (0, nt.L)();
                        return {
                            userStore: e
                        }
                    },
                    data: () => ({
                        transition: "fade",
                        layoutKey: 0
                    }),
                    computed: cl(ll(ll({}, (0, x.rn)(["telegramHash"])), (0, x.Se)(["langCommon", "isSiteFullyForbidden", "casinoAllowed", "fullscreen", "lang", "user"])), {
                        allowFullScreenModeClass() {
                            return {
                                "allow-fullscreen": this.fullscreen
                            }
                        },
                        isRulesPage() {
                            return this.customHeader === f.KzZ
                        },
                        customHeader() {
                            var e;
                            return null == (e = this.$route.meta) ? void 0 : e[f.zPZ]
                        },
                        isSiteForbidden() {
                            return (!f.vP_ || Ne.Z.OAUTH !== this.$route.name) && this.isSiteFullyForbidden
                        }
                    }),
                    watch: {
                        $route: {
                            handler(e, t) {
                                this.transition = t.name === e.name ? "" : "fade";
                                const n = t.name === Ne.Z.OAUTH;
                                n && (this.layoutKey += 1)
                            },
                            deep: !0
                        },
                        "userStore.isAuthed": {
                            handler() {
                                return pl(this, null, (function*() {
                                    if (this.telegramHash) try {
                                        yield this.$store.dispatch("sendTelegramHash", {
                                            hash: this.telegramHash,
                                            token: this.user.token
                                        })
                                    } catch (e) {
                                        yield this.$notify.error(this.lang.ERROR_1001)
                                    }
                                }))
                            }
                        }
                    },
                    created() {
                        this.$route.meta[y.XC] && !this.userStore.isAuthed && this.$modal.open(S.bn, {
                            onClose: () => {
                                (0, H.Y3)((() => {
                                    this.userStore.isAuthed || this.$router.push({
                                        name: Ne.Z.HOME
                                    })
                                }))
                            }
                        })
                    },
                    mounted() {
                        var e;
                        null == (e = document.querySelector("#call-support_2")) || e.remove(), (0, Me.Mh)(this.$route, Ne.Z.OAUTH) || (0, Me.r4)()
                    },
                    methods: {
                        openModalCallSupport() {
                            this.$modal.open(S.zu)
                        }
                    },
                    appConfig: je.appConfig
                },
                ul = (0, ge.Z)(dl, [
                    ["render", Qe],
                    ["__scopeId", "data-v-21a29de1"]
                ]),
                ml = ul;

            function hl(e, t, n, a, o, i) {
                const r = (0, H.up)("router-view");
                return (0, H.wg)(), (0, H.j4)(r, null, {
                    default: (0, H.w5)((({
                        Component: e
                    }) => [((0, H.wg)(), (0, H.j4)(H.Ob, {
                        exclude: "home-page,live-page,prematch-page"
                    }, [((0, H.wg)(), (0, H.j4)((0, H.LL)(e)))], 1024))])),
                    _: 1
                })
            }
            const gl = {
                    name: "BetsSubLayout"
                },
                vl = (0, ge.Z)(gl, [
                    ["render", hl]
                ]),
                _l = vl,
                bl = {
                    key: 0,
                    class: "CybersportBroadcasts"
                },
                fl = {
                    key: 0,
                    class: "CybersportBroadcasts__broadcast"
                };

            function yl(e, t, n, a, o, i) {
                const r = (0, H.up)("MatchTranslation"),
                    s = (0, H.up)("CybersportHotMatch");
                return n.show && null !== i.activeMatch ? ((0, H.wg)(), (0, H.iD)("div", bl, [i.activeMatch ? ((0, H.wg)(), (0, H.iD)("div", fl, [(0, H.Wm)(r, {
                    class: "CybersportBroadcasts__broadcast-transliation",
                    url: i.activeMatchBroadcastUrl
                }, null, 8, ["url"])])) : (0, H.kq)("", !0), null !== i.activeMatch ? ((0, H.wg)(), (0, H.j4)(s, {
                    key: 1,
                    class: "CybersportBroadcasts__match",
                    match: i.activeMatch,
                    "show-button-slide": i.matchesWithTranslation.length > 1,
                    onSlidePrev: i.switchToPrevMatch,
                    onSlideNext: i.switchToNextMatch
                }, null, 8, ["match", "show-button-slide", "onSlidePrev", "onSlideNext"])) : (0, H.kq)("", !0)])) : (0, H.kq)("", !0)
            }
            const wl = {
                    key: 0,
                    class: "CybersportHotMatch"
                },
                Cl = {
                    class: "CybersportHotMatch__top"
                },
                Sl = {
                    class: "CybersportHotMatch__title"
                },
                kl = {
                    key: 0,
                    class: "CybersportHotMatch__buttons-slide"
                },
                Al = {
                    class: "CybersportHotMatch__center"
                },
                Ol = {
                    class: "CybersportHotMatch__team"
                },
                Il = {
                    class: "CybersportHotMatch__team-img-container"
                },
                Tl = {
                    class: "CybersportHotMatch__team-name"
                },
                El = {
                    class: "CybersportHotMatch__info"
                },
                Pl = {
                    class: "CybersportHotMatch__info-datetime"
                },
                Ml = {
                    class: "CybersportHotMatch__info-date"
                },
                Nl = {
                    class: "CybersportHotMatch__info-time"
                },
                Ll = {
                    class: "CybersportHotMatch__info-score"
                },
                $l = {
                    class: "CybersportHotMatch__team"
                },
                Rl = {
                    class: "CybersportHotMatch__team-img-container"
                },
                Zl = {
                    class: "CybersportHotMatch__team-name"
                },
                Bl = {
                    key: 0,
                    class: "CybersportHotMatch__odds"
                },
                Hl = {
                    class: "CybersportHotMatch__odds-row"
                },
                Dl = ["onClick"],
                Wl = {
                    class: "CybersportHotMatch__odd-coefficient"
                };

            function xl(e, t, n, a, o, i) {
                const r = (0, H.up)("LiveDot"),
                    s = (0, H.up)("ButtonSlide"),
                    l = (0, H.up)("CybersportTeamIcon"),
                    c = (0, H.Q2)("watch");
                return n.match ? ((0, H.wg)(), (0, H.iD)("div", wl, [(0, H._)("div", Cl, [(0, H._)("div", Sl, [(0, H.Wm)(r, {
                    class: "CybersportHotMatch__title-dot"
                }), (0, H._)("span", null, (0, Q.zw)(i.text.broadcast), 1)]), n.showButtonSlide ? ((0, H.wg)(), (0, H.iD)("div", kl, [(0, H.Wm)(s, {
                    class: "CybersportHotMatch__button-slide",
                    onClick: t[0] || (t[0] = t => e.$emit("slidePrev"))
                }), (0, H.Wm)(s, {
                    class: "CybersportHotMatch__button-slide",
                    direction: "right",
                    onClick: t[1] || (t[1] = t => e.$emit("slideNext"))
                })])) : (0, H.kq)("", !0)]), (0, H._)("div", Al, [(0, H._)("div", Ol, [(0, H._)("div", Il, [(0, H.Wm)(l, {
                    class: "team-image",
                    hot: "",
                    "e-sport-team-id": n.match.homeTeamId
                }, null, 8, ["e-sport-team-id"]), (0, H.Wm)(l, {
                    class: "team-image CybersportHotMatch__team-img-blur",
                    hot: "",
                    "e-sport-team-id": n.match.homeTeamId
                }, null, 8, ["e-sport-team-id"])]), (0, H._)("div", Tl, (0, Q.zw)(i.teamNames[0]), 1)]), (0, H._)("div", El, [(0, H._)("div", Pl, [(0, H._)("div", Ml, (0, Q.zw)(i.$filters.dateString(n.match.date.date, n.match.date.month, e.full)), 1), (0, H._)("div", Nl, (0, Q.zw)(n.match.date.time), 1)]), (0, H._)("div", Ll, (0, Q.zw)(i.matchScore), 1)]), (0, H._)("div", $l, [(0, H._)("div", Rl, [(0, H.Wm)(l, {
                    class: "team-image",
                    hot: "",
                    "e-sport-team-id": n.match.awayTeamId
                }, null, 8, ["e-sport-team-id"]), (0, H.Wm)(l, {
                    class: "team-image CybersportHotMatch__team-img-blur",
                    hot: "",
                    "e-sport-team-id": n.match.awayTeamId
                }, null, 8, ["e-sport-team-id"])]), (0, H._)("div", Zl, (0, Q.zw)(i.teamNames[1]), 1)])]), i.oddBaseConfig ? ((0, H.wg)(), (0, H.iD)("table", Bl, [(0, H._)("tbody", null, [(0, H._)("tr", null, [((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(i.oddBaseConfig, (e => ((0, H.wg)(), (0, H.iD)(H.HY, null, [e.hasSpecialValue ? ((0, H.wg)(), (0, H.iD)("td", {
                    key: `${e.id}|name`,
                    class: "CybersportHotMatch__odd-header"
                }, (0, Q.zw)(i.groupName(e.groups[0])), 1)) : (0, H.kq)("", !0), ((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(e.outcomes, (e => ((0, H.wg)(), (0, H.iD)("td", {
                    key: e.id,
                    class: "CybersportHotMatch__odd-header"
                }, (0, Q.zw)(i.$filters.locale(e.translations)), 1)))), 128))], 64)))), 256))]), (0, H._)("tr", Hl, [((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(i.oddBaseConfig, (e => ((0, H.wg)(), (0, H.iD)(H.HY, null, [((0, H.wg)(!0), (0, H.iD)(H.HY, null, (0, H.Ko)(i.oddConfigList(e), (t => ((0, H.wg)(), (0, H.iD)("td", {
                    key: `${e.id}|${t.key}`,
                    class: (0, Q.C_)(["CybersportHotMatch__odd", i.getOddClass(t)]),
                    onClick: e => i.toggleBaseCoupon(t)
                }, [(0, H.wy)(((0, H.wg)(), (0, H.iD)("div", Wl, [(0, H.Uk)((0, Q.zw)(t.value || "-"), 1)])), [
                    [c, t.value, i.setDifferenceClass]
                ])], 10, Dl)))), 128))], 64)))), 256))])])])) : (0, H.kq)("", !0)])) : (0, H.kq)("", !0)
            }
            var jl = n(685491),
                Vl = n(987706),
                Gl = n(880361),
                Ul = n(230770),
                Fl = n(200238),
                zl = n(127058),
                Yl = n(772569),
                ql = Object.defineProperty,
                Kl = Object.defineProperties,
                Jl = Object.getOwnPropertyDescriptors,
                Xl = Object.getOwnPropertySymbols,
                Ql = Object.prototype.hasOwnProperty,
                ec = Object.prototype.propertyIsEnumerable,
                tc = (e, t, n) => t in e ? ql(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                nc = (e, t) => {
                    for (var n in t || (t = {})) Ql.call(t, n) && tc(e, n, t[n]);
                    if (Xl)
                        for (var n of Xl(t)) ec.call(t, n) && tc(e, n, t[n]);
                    return e
                },
                ac = (e, t) => Kl(e, Jl(t));
            const oc = {
                    components: {
                        ButtonSlide: Fl.Z,
                        LiveDot: zl.Z,
                        CybersportTeamIcon: Yl.Z
                    },
                    inject: ["$filters"],
                    props: {
                        match: {
                            type: Object
                        },
                        showButtonSlide: {
                            type: Boolean
                        }
                    },
                    emits: ["slidePrev", "slideNext"],
                    computed: ac(nc(nc(nc({}, (0, x.Se)("xbet/oddBaseConfig", ["getOddBaseConfigForTournament"])), (0, x.Se)(["lang"])), (0, x.Se)("coupon", ["checkCouponAdded"])), {
                        text() {
                            return this.lang.esport["hot-match"]
                        },
                        oddBaseConfig() {
                            return this.getOddBaseConfigForTournament(this.match.service, this.match.sportId, this.match.tournamentId)
                        },
                        oddList() {
                            const e = this.$store.getters[`xbet/${this.match.service}/oddMapByMatchId`][this.match.id];
                            return Object.values(e || {}).filter((e => null !== e.outcome))
                        },
                        tableHeader() {
                            return (0, jl.PA)(this.match.sport, this.match)
                        },
                        teamNames() {
                            return [this.match.teamNameFirst, this.match.teamNameSecond]
                        },
                        matchScore() {
                            return (0, Gl.G)(this.match.matchScore)
                        }
                    }),
                    methods: ac(nc({}, (0, x.nv)("coupon", ["toggleCoupon"])), {
                        groupName(e) {
                            var t;
                            return null == (t = this.$store.getters["xbet/oddGroups/getOddGroupMap"][e]) ? void 0 : t.name
                        },
                        oddConfigList(e) {
                            let t = null;
                            const n = e.outcomes.map((n => {
                                const a = this.oddList.find((a => {
                                    const o = e.groups.find((e => +a.groupId === e)),
                                        i = a.outCome === n.outcome,
                                        r = !e.hasSpecialValue || null === t || a.specialValue === t;
                                    return o && i && r
                                }));
                                return e.hasSpecialValue && (t = null == a ? void 0 : a.specialValue), (0, Vl.Z)({
                                    odd: a,
                                    config: e,
                                    outcome: n,
                                    isSpecial: e.hasSpecialValue
                                })
                            }));
                            return e.hasSpecialValue ? [(0, Vl.Z)({
                                config: e,
                                specialValue: t
                            }), ...n] : n
                        },
                        toggleBaseCoupon({
                            odd: e,
                            special: t
                        }) {
                            e && !t && this.toggleCoupon(e)
                        },
                        getOddClass(e) {
                            return {
                                "CybersportHotMatch__odd--added": this.checkCouponAdded(e.key),
                                "CybersportHotMatch__odd--disabled": e.disabled || !e.value,
                                "CybersportHotMatch__odd--special": e.isSpecial
                            }
                        },
                        setDifferenceClass: Ul.Z
                    })
                },
                ic = (0, ge.Z)(oc, [
                    ["render", xl]
                ]),
                rc = ic;
            var sc = Object.defineProperty,
                lc = Object.defineProperties,
                cc = Object.getOwnPropertyDescriptors,
                pc = Object.getOwnPropertySymbols,
                dc = Object.prototype.hasOwnProperty,
                uc = Object.prototype.propertyIsEnumerable,
                mc = (e, t, n) => t in e ? sc(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                hc = (e, t) => {
                    for (var n in t || (t = {})) dc.call(t, n) && mc(e, n, t[n]);
                    if (pc)
                        for (var n of pc(t)) uc.call(t, n) && mc(e, n, t[n]);
                    return e
                },
                gc = (e, t) => lc(e, cc(t));
            const vc = {
                    components: {
                        MatchTranslation: ne.Z,
                        CybersportHotMatch: rc
                    },
                    props: {
                        show: Boolean
                    },
                    data: () => ({
                        activeMatchId: null
                    }),
                    computed: gc(hc({}, (0, x.Se)("xbet", ["matchHaveBroadcast", "matchBroadcastUrl"])), {
                        matchesWithTranslation() {
                            return this.$store.getters["xbet/live/matchList"].filter((e => {
                                var t;
                                return null == (t = this.$store.state.xbet.sports.sportMap[e.sportId]) ? void 0 : t.isEsport
                            })).filter((e => this.matchHaveBroadcast(e)))
                        },
                        activeMatch() {
                            var e;
                            return !this.activeMatchId && this.matchesWithTranslation.length > 0 ? this.matchesWithTranslation[0] : null != (e = this.matchesWithTranslation.find((e => e.id === this.activeMatchId))) ? e : null
                        },
                        activeMatchIndex() {
                            return this.matchesWithTranslation.findIndex((e => e.id === this.activeMatchId))
                        },
                        activeMatchBroadcastUrl() {
                            return null === this.activeMatch ? null : this.matchBroadcastUrl(this.activeMatch)
                        }
                    }),
                    watch: {
                        matchesWithTranslation() {
                            null === this.activeMatch && (this.activeMatchId = this.matchesWithTranslation.length > 0 ? this.matchesWithTranslation[0].id : null)
                        }
                    },
                    created() {
                        this.matchesWithTranslation.length > 0 && (this.activeMatchId = this.matchesWithTranslation[0].id)
                    },
                    methods: {
                        switchToNextMatch() {
                            this.activeMatchId = this.activeMatchIndex === this.matchesWithTranslation.length - 1 ? this.matchesWithTranslation[0].id : this.matchesWithTranslation[this.activeMatchIndex + 1].id
                        },
                        switchToPrevMatch() {
                            this.activeMatchId = 0 === this.activeMatchIndex ? this.matchesWithTranslation[this.matchesWithTranslation.length - 1].id : this.matchesWithTranslation[this.activeMatchIndex - 1].id
                        }
                    }
                },
                _c = (0, ge.Z)(vc, [
                    ["render", yl],
                    ["__scopeId", "data-v-0ce84059"]
                ]),
                bc = _c;
            var fc = Object.defineProperty,
                yc = Object.defineProperties,
                wc = Object.getOwnPropertyDescriptors,
                Cc = Object.getOwnPropertySymbols,
                Sc = Object.prototype.hasOwnProperty,
                kc = Object.prototype.propertyIsEnumerable,
                Ac = (e, t, n) => t in e ? fc(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Oc = (e, t) => {
                    for (var n in t || (t = {})) Sc.call(t, n) && Ac(e, n, t[n]);
                    if (Cc)
                        for (var n of Cc(t)) kc.call(t, n) && Ac(e, n, t[n]);
                    return e
                },
                Ic = (e, t) => yc(e, wc(t)),
                Tc = (e, t, n) => new Promise(((a, o) => {
                    var i = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                    s((n = n.apply(e, t)).next())
                }));
            const Ec = () => Promise.all([n.e(20948), n.e(60385), n.e(47875), n.e(72908), n.e(44685), n.e(59901)]).then(n.bind(n, 392820)),
                Pc = () => Promise.all([n.e(20948), n.e(64560), n.e(78937)]).then(n.bind(n, 9663)),
                Mc = () => Promise.all([n.e(20948), n.e(64560), n.e(32061), n.e(24065)]).then(n.bind(n, 550852)),
                Nc = () => Promise.all([n.e(20948), n.e(37752), n.e(17450), n.e(44685), n.e(31307)]).then(n.bind(n, 855805)),
                Lc = () => Promise.all([n.e(52674), n.e(39094)]).then(n.bind(n, 315180)),
                $c = () => n.e(21148).then(n.bind(n, 321148)),
                Rc = () => Promise.all([n.e(82369), n.e(44829), n.e(43794), n.e(90392)]).then(n.bind(n, 34765)),
                Zc = () => Promise.all([n.e(82369), n.e(44829), n.e(43794), n.e(78207)]).then(n.bind(n, 533126)),
                Bc = () => Promise.all([n.e(82369), n.e(44829), n.e(43794), n.e(6646)]).then(n.bind(n, 891574)),
                Hc = () => n.e(34627).then(n.bind(n, 34627)),
                Dc = () => Promise.all([n.e(82369), n.e(44829), n.e(43794), n.e(75079), n.e(97534)]).then(n.bind(n, 697534)),
                Wc = () => Promise.all([n.e(82369), n.e(52674), n.e(48961)]).then(n.bind(n, 322027)),
                xc = () => Promise.all([n.e(82369), n.e(60385), n.e(75329)]).then(n.bind(n, 244619)),
                jc = () => Promise.all([n.e(82369), n.e(44829), n.e(43794), n.e(66547)]).then(n.bind(n, 662982)),
                Vc = () => Promise.all([n.e(82369), n.e(44829), n.e(43794), n.e(42820)]).then(n.bind(n, 26407)),
                Gc = () => Promise.all([n.e(82369), n.e(44829), n.e(88627), n.e(52674), n.e(60385), n.e(32845), n.e(47699)]).then(n.bind(n, 833045)),
                Uc = () => n.e(75192).then(n.bind(n, 775192)),
                Fc = () => Promise.all([n.e(20948), n.e(37752), n.e(17450), n.e(64560), n.e(32061), n.e(82033)]).then(n.bind(n, 275286)),
                zc = () => n.e(7222).then(n.bind(n, 107222)),
                Yc = () => n.e(64135).then(n.bind(n, 64135)),
                qc = () => n.e(37879).then(n.bind(n, 237879)),
                Kc = () => Promise.all([n.e(37752), n.e(17450), n.e(88627), n.e(55570), n.e(3281), n.e(54676)]).then(n.bind(n, 753629)),
                Jc = () => Promise.all([n.e(37752), n.e(17450), n.e(88627), n.e(55570), n.e(86670), n.e(95906)]).then(n.bind(n, 929860)),
                Xc = () => Promise.all([n.e(20948), n.e(64560), n.e(6605), n.e(21066), n.e(60061)]).then(n.bind(n, 460061)),
                Qc = () => Promise.all([n.e(20948), n.e(64560), n.e(6605), n.e(21066), n.e(47299)]).then(n.bind(n, 747299)),
                ep = () => Promise.all([n.e(20948), n.e(64560), n.e(32061), n.e(44239)]).then(n.bind(n, 777370)),
                tp = () => Promise.all([n.e(37752), n.e(17450), n.e(175), n.e(74404)]).then(n.bind(n, 528921)),
                np = () => n.e(693).then(n.bind(n, 800693)),
                ap = () => Promise.all([n.e(37752), n.e(17450), n.e(20749)]).then(n.bind(n, 241760)),
                op = () => Promise.all([n.e(37752), n.e(17450), n.e(6233), n.e(91351)]).then(n.bind(n, 735587)),
                ip = () => Promise.all([n.e(37752), n.e(17450), n.e(85199), n.e(3018), n.e(59878)]).then(n.bind(n, 415189)),
                rp = () => Promise.all([n.e(37752), n.e(17450), n.e(76491), n.e(19946)]).then(n.bind(n, 161247)),
                sp = () => Promise.all([n.e(37752), n.e(17450), n.e(52674), n.e(26023), n.e(54118)]).then(n.bind(n, 456977)),
                lp = () => Promise.all([n.e(37752), n.e(17450), n.e(89883)]).then(n.bind(n, 617450)),
                cp = () => n.e(63868).then(n.bind(n, 763868)),
                pp = () => Promise.all([n.e(37752), n.e(17450), n.e(3932), n.e(91821)]).then(n.bind(n, 681032)),
                dp = () => Promise.all([n.e(37752), n.e(17450), n.e(85724)]).then(n.bind(n, 505773)),
                up = () => Promise.all([n.e(37752), n.e(17450), n.e(52797), n.e(88486)]).then(n.bind(n, 176563)),
                mp = () => Promise.all([n.e(37752), n.e(17450), n.e(28682)]).then(n.bind(n, 304523)),
                hp = {
                    name: Ne.Z.BETS_HISTORY,
                    path: "bets-history",
                    component: Nc,
                    meta: {
                        [y.Bp]: !0,
                        [f.Tl7]: !0,
                        [f.$SL]: !0
                    }
                },
                gp = "main-layout-root",
                vp = e => {
                    var t;
                    return [{
                        path: "",
                        name: gp,
                        component: ml,
                        children: [{
                            path: "/registration",
                            redirect: {
                                path: "",
                                query: {
                                    open: "register"
                                }
                            }
                        }, {
                            path: "",
                            component: _l,
                            children: [{
                                path: "",
                                component: Xe,
                                children: [{
                                    name: Ne.Z.HOME,
                                    path: "",
                                    components: {
                                        default: Gc,
                                        footer: lp
                                    },
                                    meta: {
                                        [f.g6z]: !0
                                    }
                                }]
                            }]
                        }, ...je.appConfig.modules.leaderboard ? [{
                            name: Ne.Z.LEADERBOARD,
                            path: "leaderboard",
                            component: tp,
                            props: e => ({
                                showHistory: Boolean(e.query.history)
                            }),
                            meta: {
                                [f.AoL]: f.Pa7,
                                [f.VdB]: f.$s0,
                                [We.W]: !0
                            }
                        }] : [], {
                            name: Ne.Z.KYC,
                            path: "kyc",
                            component: cp,
                            meta: {
                                [y.Bp]: !0
                            }
                        }, {
                            name: Ne.Z.VIP_CLUB,
                            path: "vip-club",
                            component: pp,
                            beforeEnter: (e, t, n) => Tc(void 0, null, (function*() {
                                const {
                                    isLandingVipClubAvailable: e,
                                    isLandingVipClubLoadedPromise: t
                                } = (0, He.P)();
                                (yield t) && e.value ? n() : n({
                                    path: Ne.Z.HOME
                                })
                            }))
                        }, ...je.appConfig.modules.trading ? [{
                            path: "trading",
                            component: Yc,
                            children: [{
                                path: "",
                                name: Ne.Z.TRADING,
                                redirect: "/trading/play"
                            }, {
                                name: Ne.Z.TRADING_GAME,
                                path: "play",
                                component: qc,
                                props: () => ({
                                    gameType: Ze.AK.TRADING
                                }),
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0
                                }
                            }],
                            meta: {
                                [f.cAy]: f.v4t,
                                [f.sYn]: !0,
                                [f.asJ]: !0
                            }
                        }] : [], ...je.appConfig.modules.tvBet ? [{
                            path: "tvbet",
                            component: Yc,
                            children: [{
                                path: "",
                                name: Ne.Z.TVBET,
                                redirect: "/tvbet/play"
                            }, {
                                name: Ne.Z.TVBET_GAME,
                                path: "play",
                                component: qc,
                                props: () => ({
                                    gameType: Ze.AK.TVBET_GAME
                                }),
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0
                                }
                            }],
                            meta: {
                                [f.sYn]: !0,
                                [f.asJ]: !0
                            }
                        }] : [], ...je.appConfig.modules.betGames ? [{
                            path: "betgames",
                            component: Yc,
                            children: [{
                                path: "",
                                name: Ne.Z.BETGAMES,
                                redirect: "/betgames/play"
                            }, {
                                name: Ne.Z.BETGAMES_GAME,
                                path: "play",
                                component: qc,
                                props: () => ({
                                    gameType: Ze.AK.BETGAME_TV
                                }),
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0
                                }
                            }],
                            meta: {
                                [f.sYn]: !0,
                                [f.asJ]: !0
                            }
                        }] : [], ...je.appConfig.modules.fastSport ? [{
                            path: "fastsport",
                            component: Yc,
                            children: [{
                                path: "",
                                name: Ne.Z.FASTSPORT,
                                redirect: "/fastsport/play"
                            }, {
                                name: Ne.Z.FASTSPORT_GAME,
                                path: "play",
                                component: qc,
                                props: () => ({
                                    gameType: Ze.AK.FAST_SPORT
                                }),
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0
                                }
                            }],
                            meta: {
                                [f.sYn]: !0,
                                [f.asJ]: !0
                            }
                        }] : [], ...je.appConfig.modules.twainSport ? [{
                            path: "twain-sport",
                            component: Yc,
                            children: [{
                                path: "",
                                name: Ne.Z.TWAINSPORT,
                                redirect: "/twain-sport/play"
                            }, {
                                name: Ne.Z.TWAINSPORT_GAME,
                                path: "play",
                                component: qc,
                                props: () => ({
                                    gameType: Ze.AK.TWAINSPORT_TV
                                }),
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0
                                }
                            }],
                            meta: {
                                [f.sYn]: !0,
                                [f.asJ]: !0
                            }
                        }] : [], ...(null == (t = je.appConfig.modules.casino) ? void 0 : t.fantasySport) && Ne.Z.CASINO_GAME_FANTASY_SPORT ? [{
                            path: "fantasy-sport",
                            component: Yc,
                            children: [{
                                path: "",
                                redirect: "/fantasy-sport/play"
                            }, {
                                name: Ne.Z.CASINO_GAME_FANTASY_SPORT,
                                path: "play",
                                component: qc,
                                props: () => ({
                                    gameType: Ze.AK.FANTASY_SPORT
                                }),
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0
                                }
                            }],
                            meta: {
                                [f.sYn]: !0,
                                [f.asJ]: !0
                            }
                        }, {
                            path: "play/vinfotech_lobby/:any?",
                            redirect: {
                                name: Ne.Z.CASINO_GAME_FANTASY_SPORT
                            }
                        }] : [], ...je.appConfig.modules.poker ? [{
                            path: "/",
                            redirect: "/poker/play"
                        }, {
                            path: "poker",
                            name: Ne.Z.POKER,
                            component: sp
                        }, {
                            path: "poker",
                            component: Yc,
                            children: [{
                                name: Ne.Z.POKER_GAME,
                                path: "play",
                                component: qc,
                                props: () => ({
                                    gameType: Ze.AK.POKER
                                }),
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0
                                }
                            }],
                            meta: {
                                [f.sYn]: !0,
                                [f.asJ]: !0
                            }
                        }] : [], ...je.appConfig.modules.casino ? [...je.appConfig.modules.casino.vSport ? [{
                            path: "/virtual-sport",
                            redirect: {
                                name: Ne.Z.CASINO_LIST,
                                params: {
                                    category: je.appConfig.modules.casino.categories.vSport
                                }
                            }
                        }, {
                            path: "/virtual-sport/play/:id/:isDemo?",
                            redirect: ({
                                params: e
                            }) => ({
                                name: Ne.Z.CASINO_GAME,
                                params: e
                            })
                        }] : [], ...["/games", "/casino/games", "/casino/fast-games"].map((e => ({
                            path: e,
                            redirect: {
                                name: Ne.Z.CASINO_QUICK_GAMES
                            }
                        }))), ...["/live-games", "/casino/live"].map((e => ({
                            path: e,
                            redirect: {
                                name: Ne.Z.CASINO,
                                params: {
                                    preset: Ze.Py.LIVE_GAMES
                                }
                            }
                        }))), ...je.appConfig.modules.casino.oneWinGames ? [{
                            path: "/games-1win",
                            redirect: {
                                name: Ne.Z.CASINO_LIST,
                                params: {
                                    category: je.appConfig.modules.casino.categories.oneWin
                                }
                            }
                        }] : [], ...je.appConfig.modules.casino.categories.slots ? [{
                            path: "/casino/slots",
                            redirect: {
                                name: Ne.Z.CASINO_LIST,
                                params: {
                                    category: je.appConfig.modules.casino.categories.slots
                                }
                            }
                        }] : [], {
                            path: "casino/:preset?",
                            component: $c,
                            children: [{
                                name: Ne.Z.CASINO,
                                path: "",
                                components: {
                                    default: Dc,
                                    topPanel: Wc,
                                    navigation: xc
                                },
                                props: {
                                    default: e => ({
                                        preset: e.params.preset || Ze.cV
                                    }),
                                    topPanel: e => ({
                                        preset: e.params.preset || Ze.cV
                                    }),
                                    navigation: e => ({
                                        preset: e.params.preset || Ze.cV
                                    })
                                },
                                meta: {
                                    [f.g6z]: !0
                                }
                            }, {
                                name: Ne.Z.CASINO_LIST,
                                path: "list/:category?",
                                components: {
                                    default: Rc,
                                    topPanel: Wc,
                                    navigation: xc
                                },
                                props: {
                                    default: e => ({
                                        categoryId: +e.params.category || je.appConfig.modules.casino.categories.popular
                                    }),
                                    topPanel: e => ({
                                        categoryId: +e.params.category || je.appConfig.modules.casino.categories.popular,
                                        preset: e.params.preset || Ze.cV
                                    }),
                                    navigation: e => ({
                                        categoryId: +e.params.category,
                                        preset: e.params.preset || Ze.cV
                                    })
                                }
                            }, {
                                name: Ne.Z.CASINO_FAVORITES,
                                path: "favourite",
                                components: {
                                    default: Rc,
                                    topPanel: Wc,
                                    navigation: xc
                                },
                                props: {
                                    default: {
                                        categoryId: je.appConfig.modules.casino.categories.favorites
                                    },
                                    topPanel: {
                                        categoryId: je.appConfig.modules.casino.categories.favorites
                                    },
                                    navigation: {
                                        categoryId: je.appConfig.modules.casino.categories.favorites
                                    }
                                }
                            }, {
                                name: Ne.Z.CASINO_WIDGET,
                                path: "widget/:widgetId",
                                components: {
                                    default: Vc,
                                    topPanel: Wc,
                                    navigation: xc
                                },
                                props: {
                                    default: e => ({
                                        widgetId: e.params.widgetId
                                    })
                                }
                            }, {
                                name: Ne.Z.CASINO_OWNER,
                                path: "provider/:ownerName",
                                components: {
                                    default: jc,
                                    topPanel: Wc,
                                    navigation: xc
                                },
                                props: {
                                    default: e => ({
                                        ownerName: e.params.ownerName
                                    }),
                                    navigation: e => ({
                                        ownerName: e.params.ownerName
                                    })
                                }
                            }, {
                                name: Ne.Z.CASINO_PROMO,
                                path: "promo/:id?",
                                components: {
                                    default: Zc,
                                    topPanel: Wc,
                                    navigation: xc
                                },
                                props: {
                                    default: e => ({
                                        id: Number(e.params.id)
                                    })
                                }
                            }, {
                                name: Ne.Z.CASINO_FREESPIN_GAMES,
                                path: "freespin-games/:freespinId?",
                                components: {
                                    default: Bc,
                                    topPanel: Wc,
                                    navigation: xc
                                },
                                props: {
                                    default: e => ({
                                        freespinId: Number(e.params.freespinId)
                                    })
                                }
                            }, ...Ne.Z.CASINO_GAME_AVIATOR && Ze.QX.SPRIBE_AVIATOR && je.appConfig.modules.casino.promotedGames ? [{
                                path: `play/${Ze.QX.SPRIBE_AVIATOR}/:any?`,
                                redirect: {
                                    name: Ne.Z.CASINO_GAME_AVIATOR
                                },
                                meta: {
                                    [f.vY4]: !0
                                }
                            }] : [], ...[...je.appConfig.modules.casino.promotedGames ? [...Ne.Z.CASINO_GAME_AVIATOR && Ze.QX.AVIATOR ? [{
                                name: Ne.Z.CASINO_GAME_AVIATOR,
                                id: Ze.QX.AVIATOR
                            }] : [], ...Ne.Z.CASINO_GAME_JETX && Ze.QX.JETX ? [{
                                name: Ne.Z.CASINO_GAME_JETX,
                                id: encodeURIComponent(Ze.QX.JETX)
                            }] : [], {
                                name: Ne.Z.CASINO_GAME_LUCKY_JET,
                                id: encodeURIComponent(Ze.PB.LUCKYJET.id)
                            }, {
                                name: Ne.Z.CASINO_GAME_SPEED_AND_CASH,
                                id: encodeURIComponent(Ze.PB.SPEED_AND_CASH.id)
                            }] : []].map((({
                                name: e,
                                id: t
                            }) => ({
                                name: e,
                                path: `play/${t}`,
                                redirect: {
                                    name: Ne.Z.CASINO_GAME,
                                    params: {
                                        id: decodeURIComponent(t)
                                    },
                                    meta: {
                                        [f.vY4]: !0
                                    }
                                }
                            }))), {
                                name: Ne.Z.CASINO_GAME_NARDS,
                                path: `play/${Ze.JE}`,
                                redirect: {
                                    name: Ne.Z.CASINO_GAME,
                                    params: {
                                        id: decodeURIComponent(`${Ze.JE}:Nards36`)
                                    },
                                    meta: {
                                        [f.vY4]: !0
                                    }
                                }
                            }, {
                                name: Ne.Z.CASINO_GAME,
                                path: "play/:id/:isDemo?",
                                components: {
                                    default: Hc,
                                    navigation: xc
                                },
                                props: {
                                    navigation: e => ({
                                        preset: e.params.preset || Ze.cV
                                    })
                                },
                                meta: {
                                    [f.AoL]: f.EMm,
                                    [f.EC8]: !0,
                                    [f.sYn]: !0,
                                    [f.asJ]: !0,
                                    [f.uFh]: !0,
                                    [f.vY4]: !0
                                }
                            }]
                        }] : [], ...je.appConfig.modules.oauth ? [{
                            path: "oauth/:type",
                            name: Ne.Z.OAUTH,
                            component: Uc,
                            meta: {}
                        }] : [], ...e.getters.isAllowedTv ? [{
                            path: "tv",
                            name: Ne.Z.TV,
                            component: Kc,
                            meta: {
                                [De.b]: f.flK,
                                [f.r4l]: !0
                            }
                        }, {
                            path: "tv/:filmId",
                            name: Ne.Z.TV_FILM,
                            component: Jc,
                            props: ({
                                params: e
                            }) => ({
                                filmId: e.filmId
                            }),
                            meta: {
                                [De.b]: f.flK,
                                [f.r4l]: !0,
                                [f.asJ]: !0
                            }
                        }, {
                            path: "/tv/:filmId/view",
                            redirect: {
                                name: Ne.Z.TV_FILM
                            }
                        }] : [], ...je.appConfig.modules.invest ? [{
                            path: "invest",
                            name: Ne.Z.INVEST,
                            meta: {
                                [f.$fK]: S.Zf
                            }
                        }] : [], ...je.appConfig.modules.bonuses ? [{
                            path: "bonuses",
                            name: Ne.Z.BONUSES,
                            component: op
                        }] : [], ...je.appConfig.modules.freeMoney ? [{
                            path: "/free-money",
                            name: Ne.Z.FREE_MONEY,
                            component: ip
                        }] : [], ...je.appConfig.modules.loyaltyProgram ? [{
                            path: "/loyalty-program",
                            name: Ne.Z.LOYALTY_PROGRAM,
                            component: up
                        }] : [], {
                            path: "/referral-program",
                            name: Ne.Z.REFERRAL_PROGRAM,
                            component: rp
                        }, {
                            path: "auth/token/:token",
                            name: Ne.Z.AUTH_TOKEN,
                            component: np,
                            meta: {}
                        }, {
                            path: "rule/:ruleId?",
                            redirect: e => Ic(Oc({}, e), {
                                name: Ne.Z.RULES
                            })
                        }, {
                            path: "/rules.html",
                            redirect: e => Ic(Oc({}, e), {
                                name: Ne.Z.RULES
                            })
                        }, {
                            path: "rules/:ruleId?",
                            name: Ne.Z.RULES,
                            component: ap,
                            meta: {
                                [f.zPZ]: f.KzZ,
                                [f.EC8]: !0
                            },
                            props: e => e.params.ruleId ? {
                                ruleId: Number(e.params.ruleId)
                            } : null,
                            beforeEnter: (e, t, n) => {
                                e.hash && !e.params.ruleId ? n({
                                    name: Ne.Z.RULES,
                                    params: {
                                        ruleId: e.hash.slice(1)
                                    }
                                }) : n()
                            }
                        }, {
                            path: "vip-tournament",
                            name: Ne.Z.PROMO_LANDING_VIP_TOURNAMENT,
                            component: dp,
                            props: () => ({
                                landingType: Be.Ze.VIP_TOURNAMENT,
                                withFooter: !0
                            }),
                            beforeEnter: (e, t, n) => Tc(void 0, null, (function*() {
                                n({
                                    path: Ne.Z.HOME
                                })
                            }))
                        }, {
                            path: "promotion/:promotionSlug",
                            name: Ne.Z.PROMOTION,
                            component: mp
                        }]
                    }, ...je.appConfig.modules.bets ? [{
                        name: Ne.Z.STATS,
                        path: "/stats/:externalId?",
                        component: zc,
                        props: ({
                            params: e
                        }) => ({
                            externalId: e.externalId
                        }),
                        meta: {
                            [f.Tl7]: !0,
                            [f.$SL]: !0
                        }
                    }] : [], {
                        name: "NotFound",
                        path: "/:pathMatch(.*)*",
                        redirect: "/"
                    }]
                },
                _p = () => {
                    if (!je.appConfig.modules.bets) return [];
                    const e = (0, Ae.$R)();
                    return [{
                        parent: gp,
                        add: [{
                            path: ":service(live|prematch)",
                            redirect: "/bets/:service"
                        }, {
                            path: "new",
                            redirect: "/bets/live"
                        }, {
                            path: "/bets/new",
                            redirect: "/bets/live"
                        }, {
                            path: "/bets/new/:service(live|prematch)/:sport?/:category?/:tournament?/:match?",
                            redirect: "/bets/:service/:sport?/:category?/:tournament?/:match?"
                        }, {
                            path: "bets",
                            alias: "match",
                            component: _l,
                            children: [{
                                path: "/",
                                redirect: {
                                    name: Ne.Z.HOME
                                }
                            }, {
                                name: Ne.Z.BETS_CYBERSPORT_REDIRECT,
                                path: "cybersport",
                                redirect: {
                                    name: Ne.Z.BETS_CYBERSPORT,
                                    params: {
                                        service: f.PTO
                                    }
                                }
                            }, {
                                path: "",
                                component: Xe,
                                children: [{
                                    name: Ne.Z.BETS,
                                    path: ":service(live|prematch)/:sport?/:category?/:tournament?/:match?",
                                    components: {
                                        default: Xc,
                                        left: Mc,
                                        right: Ec,
                                        slider: Lc,
                                        footer: lp
                                    },
                                    props: Ic(Oc({}, (0, xe.o9)()), {
                                        slider: e => {
                                            var t, n;
                                            return {
                                                show: (null == (n = null == (t = je.appConfig.modules.bets) ? void 0 : t.modules) ? void 0 : n.slider) && !e.params.match
                                            }
                                        }
                                    })
                                }, {
                                    name: Ne.Z.BETS_CYBERSPORT,
                                    path: "cybersport/:service/:sportId?/:categoryId?/:tournamentId?/:matchId?",
                                    components: {
                                        default: Qc,
                                        left: ep,
                                        right: Ec,
                                        slider: bc,
                                        footer: lp
                                    },
                                    props: Ic(Oc({}, (0, xe.o9)()), {
                                        slider: ({
                                            params: e
                                        }) => ({
                                            show: !e.matchId && e.service === f.PTO,
                                            service: e.service
                                        })
                                    })
                                }, {
                                    name: Ne.Z.BETS_OUTRIGHTS,
                                    path: "outrights/:sport?/:category?/:tournament?",
                                    components: {
                                        default: Xc,
                                        left: Mc,
                                        right: Ec,
                                        slider: Lc,
                                        footer: lp
                                    },
                                    props: Ic(Oc({}, (0, xe.o9)((() => ({
                                        service: f.d_J,
                                        outrightsOnly: !0
                                    })))), {
                                        slider: e => {
                                            var t, n;
                                            return {
                                                show: (null == (n = null == (t = je.appConfig.modules.bets) ? void 0 : t.modules) ? void 0 : n.slider) && !e.params.tournament
                                            }
                                        }
                                    })
                                }, {
                                    name: Ne.Z.BETS_CUSTOM,
                                    path: "custom/:group?/:child?",
                                    components: {
                                        default: Pc,
                                        left: Mc,
                                        right: Ec,
                                        slider: Lc,
                                        footer: lp
                                    },
                                    props: Ic(Oc({}, ["default", "left"].reduce(((e, t) => Object.assign(e, {
                                        [t]: e => (e.params.service = f.d_J, e.params)
                                    })), {})), {
                                        slider: () => {
                                            var e, t;
                                            return {
                                                show: null == (t = null == (e = je.appConfig.modules.bets) ? void 0 : e.modules) ? void 0 : t.slider,
                                                service: f.d_J
                                            }
                                        }
                                    })
                                }],
                                meta: {
                                    [f.$SL]: !0,
                                    [f.Tl7]: !0,
                                    [f._WK]: !0
                                }
                            }]
                        }, hp, {
                            name: Ne.Z.BETS_RESULT,
                            path: "results",
                            component: Fc,
                            meta: {
                                [f._WK]: !0,
                                [f.Tl7]: !0,
                                [f.$SL]: !0
                            }
                        }, {
                            path: Re.cT,
                            component: Xe,
                            redirect: {
                                name: Re.qV.HOME
                            },
                            props: {
                                isOverflowVisible: !0
                            },
                            children: [{
                                name: Re.qV.HOME,
                                path: ":all(.*)?",
                                components: {
                                    default: () => Promise.all([n.e(94998), n.e(84156)]).then(n.bind(n, 784156)),
                                    footer: lp
                                },
                                beforeEnter: e,
                                meta: {
                                    [f.Tl7]: !0
                                },
                                children: [{
                                    name: Re.qV.LIVE,
                                    path: "sport/live/:sportId?/:tournamentId?"
                                }, {
                                    name: Re.qV.PREMATCH,
                                    path: "sport/prematch/:sportId?/:categoryId?/:tournamentId?"
                                }, {
                                    name: Re.qV.CYBER_SPORT,
                                    path: "esport/:sportId?/:tournamentId?"
                                }, {
                                    name: Re.qV.EVENT,
                                    path: ":sportType(sport|esport)/match/:sportId/:categoryId/:tournamentId/:id"
                                }, {
                                    name: Re.qV.STATS,
                                    path: "stats"
                                }, {
                                    name: Re.qV.HISTORY,
                                    path: "bets-history"
                                }]
                            }]
                        }]
                    }]
                },
                bp = () => {
                    const e = _p();
                    return [...e]
                };

            function fp(e) {
                const t = vp(e);
                let n;
                const a = (0, W.p7)({
                    routes: t,
                    history: (0, W.PO)(),
                    linkActiveClass: "active",
                    scrollBehavior(e, t, n) {
                        return e.name === t.name ? null != n ? n : null : null != n ? n : {
                            top: 0,
                            left: 0
                        }
                    }
                });
                return a.beforeEach(((e, t, n) => {
                    setTimeout(n), (0, X.HF)("start")
                })), a.beforeEach(((t, n, o) => {
                    (0, Oe.Z)(t, n, o, a, e)
                })), Ee.registerRouterBeforeEachHook(a), a.beforeEach(((e, t, n) => {
                    (0, Ae.qg)(e, t, n), n()
                })), a.beforeEach(((e, t, n) => {
                    (0, Me.Mh)(e, Ne.Z.OAUTH), n()
                })), a.beforeEach(((t, n, a) => {
                    (0, Le.T)(t, n, a, e.getters.user), a()
                })), a.beforeEach(((t, n, o) => {
                    (0, $e.Z)(t, n, o, a, e)
                })), a.afterEach(((e, t) => {
                    (0, Pe._)(), e.fullPath !== n && (n = e.fullPath, (0, X.gX)(t, e))
                })), a
            }
            const yp = e => {
                const t = bp();
                for (const {
                        parent: n,
                        add: a = [],
                        remove: o = []
                    } of t) {
                    if ((0, ke.Z)(n))
                        for (const t of a) e.addRoute(t);
                    else
                        for (const t of a) e.addRoute(n, t);
                    for (const t of o) e.hasRoute(t) && e.removeRoute(t)
                }
            };
            var wp = (e, t, n) => new Promise(((a, o) => {
                var i = e => {
                        try {
                            s(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    r = e => {
                        try {
                            s(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    },
                    s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
                s((n = n.apply(e, t)).next())
            }));
            const Cp = ({
                    app: e
                }) => {
                    e.directive("resize", r.S), e.directive("watch", s)
                },
                Sp = ({
                    app: e,
                    router: t,
                    store: n
                }) => {
                    e.use(a.P, b.Q), e.use(c.$, {
                        router: t,
                        store: n
                    }), e.use(d.Ob), e.use(p.L), e.use(u.Y, {
                        store: n
                    }), e.use(m.o, {
                        store: n
                    }), e.use(n)
                },
                kp = ({
                    app: e,
                    router: t,
                    store: n
                }) => {
                    const a = (0, l.mw)(n),
                        o = (0, l.pE)(n, k, B),
                        i = (0, l.qc)(a, n),
                        r = (0, l.bU)(n),
                        s = (0, l.pU)(n, t),
                        c = (0, l.yE)(n);
                    e.provide("$filters", c), e.provide("$modal", o), e.provide("$notify", i), e.provide("parseError", a), e.provide("locale", r), e.provide("userIntention", s)
                },
                Ap = () => wp(void 0, null, (function*() {
                    (0, v.m)();
                    const e = fp(g.vuexStore);
                    h.Z.start(e);
                    const t = (0, i.ri)(Se),
                        n = (0, o.WB)();
                    return t.use(n), Cp({
                        app: t
                    }), Sp({
                        app: t,
                        router: e,
                        store: g.vuexStore
                    }), kp({
                        app: t,
                        router: e,
                        store: g.vuexStore
                    }), (0, _.r)(), {
                        app: t,
                        router: e,
                        store: g.vuexStore,
                        mount(n) {
                            yp(e), t.use(e), t.mount(n)
                        }
                    }
                }))
        },
        16875: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => s
            });
            var a = n(166252),
                o = n(982090);
            const i = "an-17995-referral-program-india",
                r = "group_b",
                s = () => {
                    const {
                        value: e
                    } = (0, o.y)(i), t = (0, a.Fl)((() => e.value === r && !0));
                    return {
                        isReferralPageAvailable: t
                    }
                }
        },
        564999: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "img/carRaffleDesktopHeaderIcon.70d8912f3-124.png 124w",
                images: [{
                    path: n.p + "img/carRaffleDesktopHeaderIcon.70d8912f3-124.png",
                    width: 124,
                    height: 56
                }],
                src: n.p + "img/carRaffleDesktopHeaderIcon.70d8912f3-124.png",
                toString: function() {
                    return n.p + "img/carRaffleDesktopHeaderIcon.70d8912f3-124.png"
                },
                width: 124,
                height: 56
            }
        },
        290505: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "img/desktopHeaderCup.77cec057f-78.png 78w",
                images: [{
                    path: n.p + "img/desktopHeaderCup.77cec057f-78.png",
                    width: 78,
                    height: 52
                }],
                src: n.p + "img/desktopHeaderCup.77cec057f-78.png",
                toString: function() {
                    return n.p + "img/desktopHeaderCup.77cec057f-78.png"
                },
                width: 78,
                height: 52
            }
        },
        297784: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "img/free-money-link-image.1ada0c9e1-120.png 120w",
                images: [{
                    path: n.p + "img/free-money-link-image.1ada0c9e1-120.png",
                    width: 120,
                    height: 97
                }],
                src: n.p + "img/free-money-link-image.1ada0c9e1-120.png",
                toString: function() {
                    return n.p + "img/free-money-link-image.1ada0c9e1-120.png"
                },
                width: 120,
                height: 97
            }
        },
        45472: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "img/cup.df06e61a8-447.png 447w",
                images: [{
                    path: n.p + "img/cup.df06e61a8-447.png",
                    width: 447,
                    height: 443
                }],
                src: n.p + "img/cup.df06e61a8-447.png",
                toString: function() {
                    return n.p + "img/cup.df06e61a8-447.png"
                },
                width: 447,
                height: 443
            }
        },
        609999: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "img/wheel.24f0be013-228.png 228w",
                images: [{
                    path: n.p + "img/wheel.24f0be013-228.png",
                    width: 228,
                    height: 210
                }],
                src: n.p + "img/wheel.24f0be013-228.png",
                toString: function() {
                    return n.p + "img/wheel.24f0be013-228.png"
                },
                width: 228,
                height: 210
            }
        },
        425084: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => l
            });
            var a = n(166252);

            function o(e, t) {
                return (0, a.wg)(), (0, a.iD)("svg", (0, a.dG)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "33",
                    height: "8",
                    viewBox: "0 0 33 8"
                }, e.$attrs), t[0] || (t[0] = [(0, a._)("g", {
                    fill: "none",
                    "fill-rule": "evenodd"
                }, [(0, a._)("g", {
                    fill: "#FFF"
                }, [(0, a._)("path", {
                    d: "M16.5 0C11.55 0 6.6 8 0 8h33c-6.559 0-11.55-8-16.5-8z"
                })])], -1)]), 16)
            }
            var i = n(983744);
            const r = {},
                s = (0, i.Z)(r, [
                    ["render", o]
                ]),
                l = s
        },
        55254: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var a = n(166252),
                o = n(762990),
                i = Object.defineProperty,
                r = Object.defineProperties,
                s = Object.getOwnPropertyDescriptors,
                l = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                d = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t) => {
                    for (var n in t || (t = {})) c.call(t, n) && d(e, n, t[n]);
                    if (l)
                        for (var n of l(t)) p.call(t, n) && d(e, n, t[n]);
                    return e
                },
                m = (e, t) => r(e, s(t));
            const h = (e, t) => (0, a.h)(o.Z, m(u({}, t.attrs), {
                    initialWidth: 16,
                    initialHeight: 16,
                    innerHTML: '<path clip-rule="evenodd" d="M9.83 4.96l-.525.503.123.707a.54.54 0 01-.779.566l-.682-.356-.614.356a.522.522 0 01-.408.037.53.53 0 01-.316-.264.521.521 0 01-.056-.334l.125-.71-.522-.501a.53.53 0 01-.014-.756.535.535 0 01.316-.159l.758-.109.285-.639a.538.538 0 01.957-.009l.003.008.342.682.706.068a.532.532 0 01.302.91zm6.146-2.34a.615.615 0 00-.611-.546h-2.021c.028-.46.03-.766.03-.829a.41.41 0 00-.41-.41H3.036a.41.41 0 00-.41.41c0 .064.002.37.03.829H.636a.615.615 0 00-.612.546c-.016.143-.363 3.513 2.225 5.215a.617.617 0 00.676-1.028c-1.416-.931-1.661-2.63-1.69-3.503h1.537c.32 2.568 1.343 6.658 4.611 7.12v1.44H5.46a.412.412 0 00-.392.285l-.571 1.786H3.404a.616.616 0 000 1.23h9.309a.616.616 0 000-1.23H11.62l-.571-1.785a.41.41 0 00-.39-.285H8.613v-1.439c3.275-.456 4.297-4.552 4.616-7.122h1.535c-.029.873-.274 2.572-1.69 3.503a.616.616 0 10.676 1.028c2.588-1.702 2.241-5.072 2.225-5.215z"/>'
                })),
                g = h,
                v = g
        },
        620249: e => {
            function t(e) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            t.keys = () => [], t.resolve = t, t.id = 620249, e.exports = t
        }
    }
]);