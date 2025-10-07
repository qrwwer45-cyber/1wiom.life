"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [75329], {
        262626: (e, a, t) => {
            t.d(a, {
                Z: () => p
            });
            var o = t(166252),
                i = t(3577);

            function s(e, a) {
                return (0, o.wg)(), (0, o.iD)("div", {
                    class: (0, i.C_)(e.$style.root)
                }, null, 2)
            }
            const n = {
                root: "SkeletonPlaceholder_root_kmrJR",
                shimmer: "SkeletonPlaceholder_shimmer_j0qiN"
            };
            var l = t(348118);
            const r = {},
                c = {};
            c["$style"] = n;
            const u = (0, l.Z)(r, [
                    ["render", s],
                    ["__cssModules", c]
                ]),
                p = u
        },
        763925: (e, a, t) => {
            t.d(a, {
                Z: () => v
            });
            var o = t(166252);
            const i = ["src", "alt", "title"];

            function s(e, a, t, s, n, l) {
                var r;
                const c = (0, o.up)("VIcon");
                return !1 === e.isBadImageUrl && t.imageUrl ? ((0, o.wg)(), (0, o.iD)("img", {
                    key: 0,
                    src: t.imageUrl,
                    loading: "lazy",
                    alt: null != (r = t.title) ? r : "icon",
                    title: t.title,
                    onError: a[0] || (a[0] = a => e.isBadImageUrl = !0)
                }, null, 40, i)) : ((0, o.wg)(), (0, o.j4)(c, {
                    key: 1,
                    icon: l.icon
                }, null, 8, ["icon"]))
            }
            var n, l, r = t(559166),
                c = t(432519),
                u = t(112808);
            const p = null != (l = null == (n = u.appConfig.modules.casino) ? void 0 : n.categories) ? l : {},
                d = Object.freeze({
                    [p.favorites]: "favorite",
                    [p.popular]: "popular",
                    [p.all]: "all",
                    [p.slots]: "slots",
                    [p.roulette]: "roulette",
                    [p.live]: "live",
                    [p.blackJacks]: "blackjack",
                    [p.new]: "new",
                    [p.table]: "table",
                    [p.videoPoker]: "poker",
                    [p.multiplayer]: "multiply",
                    [p.scratchCards]: "scratch",
                    [p.other]: "other",
                    [c.B5.WARM]: "hot"
                }),
                g = {
                    components: {
                        VIcon: r.Z
                    },
                    props: {
                        categoryId: {
                            type: [String, Number],
                            default: p.all
                        },
                        imageUrl: {
                            type: String,
                            required: !1
                        },
                        title: {
                            type: String,
                            required: !1
                        }
                    },
                    data: () => ({
                        isBadImageUrl: !1
                    }),
                    computed: {
                        icon() {
                            var e;
                            const a = null != (e = d[this.categoryId]) ? e : "all";
                            return `casino/category/${a}`
                        }
                    }
                };
            var _ = t(348118);
            const m = (0, _.Z)(g, [
                    ["render", s]
                ]),
                v = m
        },
        244619: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => x
            });
            var o = t(166252),
                i = t(602262),
                s = t(3577),
                n = t(453434),
                l = t(322201),
                r = t(810979),
                c = t(541272),
                u = t(262626),
                p = t(432519),
                d = t(920346),
                g = t(695139),
                _ = t(909997),
                m = t(678316),
                v = t(112808),
                y = t(305653),
                C = t(382369),
                h = t(559166),
                w = t(763925);
            const I = ["data-pw"],
                N = ["data-pw"],
                k = (0, o.aZ)({
                    __name: "CasinoNavigationBody",
                    props: {
                        categoriesTitle: {},
                        providersTitle: {},
                        widgetName: {},
                        categoryId: {},
                        ownerName: {},
                        dataPwHandler: {
                            type: Function
                        },
                        widgetWarm: {},
                        categories: {},
                        groupedOwners: {}
                    },
                    emits: ["click:navigation"],
                    setup(e, {
                        emit: a
                    }) {
                        const t = a;
                        return (e, a) => {
                            const n = (0, o.up)("RouterLink");
                            return (0, o.wg)(), (0, o.iD)("main", {
                                class: (0, s.C_)(e.$style.root),
                                "data-pw": "SIDEBAR-MAIN-CONTAINER"
                            }, [(0, o._)("h2", {
                                class: (0, s.C_)(e.$style.title),
                                "data-pw": "CATEGORIES-TITLE"
                            }, (0, s.zw)(e.categoriesTitle), 3), (0, o._)("div", {
                                class: (0, s.C_)(e.$style.buttons)
                            }, [e.widgetWarm.amount > 0 ? ((0, o.wg)(), (0, o.j4)(n, {
                                key: 0,
                                class: (0, s.C_)(e.$style.hotButton),
                                to: {
                                    name: (0, i.SU)(y.Z).CASINO_WIDGET,
                                    params: {
                                        widgetId: e.widgetWarm.id
                                    }
                                },
                                "data-pw": "HOT-BUTTON",
                                onClick: a[0] || (a[0] = a => t("click:navigation", e.widgetWarm.id))
                            }, {
                                default: (0, o.w5)((() => [(0, o.Wm)(h.Z, {
                                    class: (0, s.C_)(e.$style.hotpopularButtonIcon),
                                    icon: "casino/category/hot"
                                }, null, 8, ["class"]), (0, o._)("div", {
                                    class: (0, s.C_)(e.$style.hotpopularButtonText)
                                }, [(0, o._)("p", {
                                    class: (0, s.C_)(e.$style.hotpopularButtonTitle)
                                }, (0, s.zw)(e.widgetName), 3), (0, o._)("p", {
                                    class: (0, s.C_)(e.$style.hotpopularButtonValue)
                                }, (0, s.zw)(e.widgetWarm.amount), 3)], 2)])),
                                _: 1
                            }, 8, ["class", "to"])) : (0, o.kq)("", !0), e.categories.popular ? ((0, o.wg)(), (0, o.j4)(n, {
                                key: 1,
                                class: (0, s.C_)(e.$style.popularButton),
                                "data-pw": "POPULAR-BUTTON",
                                to: {
                                    name: (0, i.SU)(y.Z).CASINO_LIST,
                                    params: {
                                        category: e.categories.popular.id
                                    }
                                },
                                onClick: a[1] || (a[1] = e => t("click:navigation", "Popular"))
                            }, {
                                default: (0, o.w5)((() => [(0, o.Wm)(h.Z, {
                                    class: (0, s.C_)(e.$style.hotpopularButtonIcon),
                                    icon: "casino/category/popular"
                                }, null, 8, ["class"]), (0, o._)("div", {
                                    class: (0, s.C_)(e.$style.hotpopularButtonText)
                                }, [(0, o._)("p", {
                                    class: (0, s.C_)(e.$style.hotpopularButtonTitle)
                                }, (0, s.zw)(e.categories.popular.nameLocalized), 3), (0, o._)("p", {
                                    class: (0, s.C_)(e.$style.hotpopularButtonValue)
                                }, (0, s.zw)(e.categories.popular.amount), 3)], 2)])),
                                _: 1
                            }, 8, ["class", "to"])) : (0, o.kq)("", !0)], 2), e.categories.navigationList.length > 0 ? ((0, o.wg)(), (0, o.iD)("ul", {
                                key: 0,
                                class: (0, s.C_)([e.$style.list, e.$style.category])
                            }, [((0, o.wg)(!0), (0, o.iD)(o.HY, null, (0, o.Ko)(e.categories.navigationList, (a => ((0, o.wg)(), (0, o.iD)("li", {
                                key: a.id,
                                class: (0, s.C_)([e.$style.listItem, a.id === e.categoryId && e.$style.active]),
                                "data-pw": e.dataPwHandler(a)
                            }, [(0, o.Wm)(n, {
                                class: (0, s.C_)(e.$style.itemLink),
                                to: {
                                    name: (0, i.SU)(y.Z).CASINO_LIST,
                                    params: {
                                        category: a.id,
                                        preset: e.$route.params.preset
                                    }
                                },
                                onClick: e => t("click:navigation", a.nameEn)
                            }, {
                                default: (0, o.w5)((() => {
                                    var t, i;
                                    return [(0, o.Wm)(w.Z, {
                                        class: (0, s.C_)(e.$style.itemIcon),
                                        "category-id": a.id,
                                        "image-url": null != (t = a.imageUrl) ? t : void 0,
                                        title: null != (i = a.nameLocalized) ? i : a.nameEn
                                    }, null, 8, ["class", "category-id", "image-url", "title"]), (0, o._)("p", {
                                        class: (0, s.C_)(e.$style.itemName)
                                    }, (0, s.zw)(a.nameLocalized), 3), (0, o._)("p", {
                                        class: (0, s.C_)(e.$style.itemCount)
                                    }, (0, s.zw)(a.amount), 3)]
                                })),
                                _: 2
                            }, 1032, ["class", "to", "onClick"])], 10, I)))), 128))], 2)) : (0, o.kq)("", !0), (0, o._)("h2", {
                                class: (0, s.C_)(e.$style.title),
                                "data-pw": "PROVIDERS-TITLE"
                            }, (0, s.zw)(e.providersTitle), 3), (0, o._)("ul", {
                                class: (0, s.C_)([e.$style.list, e.$style.providers])
                            }, [((0, o.wg)(!0), (0, o.iD)(o.HY, null, (0, o.Ko)(e.groupedOwners, ((a, l) => ((0, o.wg)(), (0, o.iD)("li", {
                                key: l
                            }, [(0, o._)("div", {
                                class: (0, s.C_)(e.$style.groupTitle)
                            }, (0, s.zw)(l), 3), (0, o._)("ul", null, [((0, o.wg)(!0), (0, o.iD)(o.HY, null, (0, o.Ko)(a, (a => ((0, o.wg)(), (0, o.iD)("li", {
                                key: a.name,
                                class: (0, s.C_)([e.$style.listItem, a.name === e.ownerName && e.$style.active]),
                                "data-pw": `PROVIDERS-ITEM-${a.name}`
                            }, [(0, o.Wm)(n, {
                                class: (0, s.C_)(e.$style.itemLink),
                                to: {
                                    name: (0, i.SU)(y.Z).CASINO_OWNER,
                                    params: {
                                        ownerName: a.name
                                    }
                                },
                                onClick: e => t("click:navigation", a.name)
                            }, {
                                default: (0, o.w5)((() => {
                                    var t, i;
                                    return [(0, o.Wm)(C.Z, {
                                        class: (0, s.C_)(e.$style.itemIcon),
                                        "provider-name": a.name,
                                        logo: null != (i = null != (t = a.imageUrl) ? t : a.imageBigUrl) ? i : void 0
                                    }, null, 8, ["class", "provider-name", "logo"]), (0, o._)("p", {
                                        class: (0, s.C_)(e.$style.itemName)
                                    }, (0, s.zw)(a.name), 3), (0, o._)("p", {
                                        class: (0, s.C_)(e.$style.itemCount)
                                    }, (0, s.zw)(a.amount), 3)]
                                })),
                                _: 2
                            }, 1032, ["class", "to", "onClick"])], 10, N)))), 128))])])))), 128))], 2)], 2)
                        }
                    }
                }),
                B = {
                    root: "CasinoNavigationBody_root_h9l4n",
                    hotButton: "CasinoNavigationBody_hotButton_WdWB_",
                    popularButton: "CasinoNavigationBody_popularButton_hFE8C",
                    hotpopularButtonIcon: "CasinoNavigationBody_hotpopularButtonIcon_OjgtI",
                    hotpopularButtonText: "CasinoNavigationBody_hotpopularButtonText_kU16e",
                    hotpopularButtonTitle: "CasinoNavigationBody_hotpopularButtonTitle_YtkWh",
                    hotpopularButtonValue: "CasinoNavigationBody_hotpopularButtonValue_E7ZcN",
                    category: "CasinoNavigationBody_category_A16Gb",
                    providers: "CasinoNavigationBody_providers_q5ft_",
                    list: "CasinoNavigationBody_list_WK_qw",
                    itemName: "CasinoNavigationBody_itemName_ah4Qx",
                    groupTitle: "CasinoNavigationBody_groupTitle_JaOJS",
                    title: "CasinoNavigationBody_title_xOyOr",
                    buttons: "CasinoNavigationBody_buttons_YVT07",
                    listItem: "CasinoNavigationBody_listItem_LuE6B",
                    itemLink: "CasinoNavigationBody_itemLink__5TlO",
                    itemIcon: "CasinoNavigationBody_itemIcon_lxKj4",
                    itemCount: "CasinoNavigationBody_itemCount_DGpaB",
                    active: "CasinoNavigationBody_active_jmj4H"
                };
            var S = t(348118);
            const $ = {};
            $["$style"] = B;
            const f = (0, S.Z)(k, [
                    ["__cssModules", $]
                ]),
                O = f;
            var T = t(749963);
            const E = ["value", "placeholder"],
                b = (0, o.aZ)({
                    __name: "CasinoNavigationHeader",
                    props: {
                        search: {},
                        searchPlaceholder: {},
                        gamesLength: {},
                        isFavoritesRoute: {
                            type: Boolean
                        },
                        linkFavorites: {}
                    },
                    emits: ["submit:search", "input:search", "focus:search", "blur:search", "click:navigation"],
                    setup(e, {
                        emit: a
                    }) {
                        const t = a;
                        return (e, a) => {
                            const i = (0, o.up)("RouterLink");
                            return (0, o.wg)(), (0, o.iD)("header", {
                                class: (0, s.C_)(e.$style.root),
                                "data-pw": "SIDEBAR-HEADER-CONTAINER"
                            }, [(0, o._)("form", {
                                class: (0, s.C_)(e.$style.searchField),
                                onSubmit: a[3] || (a[3] = (0, T.iM)((e => t("submit:search")), ["prevent"]))
                            }, [(0, o._)("input", {
                                class: (0, s.C_)(e.$style.searchInput),
                                value: e.search,
                                type: "search",
                                placeholder: e.searchPlaceholder,
                                "data-pw": "SEARCH-INPUT",
                                onInput: a[0] || (a[0] = e => t("input:search", e)),
                                onFocus: a[1] || (a[1] = e => t("focus:search")),
                                onBlur: a[2] || (a[2] = e => t("blur:search"))
                            }, null, 42, E), (0, o.Wm)(h.Z, {
                                class: (0, s.C_)(e.$style.searchIcon),
                                icon: "search-bold"
                            }, null, 8, ["class"])], 34), e.gamesLength > 0 ? ((0, o.wg)(), (0, o.j4)(i, {
                                key: 0,
                                "data-pw": "FAVORITES-BUTTON",
                                to: e.linkFavorites,
                                class: (0, s.C_)([e.$style.favorites, e.isFavoritesRoute && e.$style.active]),
                                onClick: a[4] || (a[4] = e => t("click:navigation", "favourite"))
                            }, {
                                default: (0, o.w5)((() => [(0, o.Wm)(h.Z, {
                                    class: (0, s.C_)(e.$style.favoritesIcon),
                                    icon: "star"
                                }, null, 8, ["class"])])),
                                _: 1
                            }, 8, ["to", "class"])) : (0, o.kq)("", !0)], 2)
                        }
                    }
                }),
                Z = {
                    root: "CasinoNavigationHeader_root_Cqw4F",
                    favorites: "CasinoNavigationHeader_favorites_Nc2Iq",
                    active: "CasinoNavigationHeader_active_K3CUY",
                    favoritesIcon: "CasinoNavigationHeader_favoritesIcon_O61aQ",
                    searchField: "CasinoNavigationHeader_searchField_nS7Kc",
                    searchIcon: "CasinoNavigationHeader_searchIcon_ZtuCO",
                    searchInput: "CasinoNavigationHeader_searchInput_oFk3F"
                },
                A = {};
            A["$style"] = Z;
            const R = (0, S.Z)(b, [
                    ["__cssModules", A]
                ]),
                U = R;
            var L = Object.defineProperty,
                W = Object.defineProperties,
                F = Object.getOwnPropertyDescriptors,
                D = Object.getOwnPropertySymbols,
                H = Object.prototype.hasOwnProperty,
                P = Object.prototype.propertyIsEnumerable,
                j = (e, a, t) => a in e ? L(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t,
                V = (e, a) => {
                    for (var t in a || (a = {})) H.call(a, t) && j(e, t, a[t]);
                    if (D)
                        for (var t of D(a)) P.call(a, t) && j(e, t, a[t]);
                    return e
                },
                z = (e, a) => W(e, F(a));
            const q = (0, o.aZ)({
                    __name: "CasinoNavigation",
                    props: {
                        categoryId: {},
                        ownerName: {},
                        preset: {}
                    },
                    setup(e) {
                        var a, t;
                        const C = null != (t = null == (a = v.appConfig.modules.casino) ? void 0 : a.categories) ? t : {},
                            h = e,
                            w = (0, l.yj)(),
                            I = (0, l.tv)(),
                            N = (0, i.Vh)((() => w.name === y.Z.CASINO_FAVORITES)),
                            k = (0, o.Fl)((() => {
                                var e;
                                return w.name === y.Z.CASINO_FAVORITES ? null != (e = I.options.history.state.back) ? e : {
                                    name: y.Z.CASINO
                                } : {
                                    name: y.Z.CASINO_FAVORITES
                                }
                            })),
                            B = () => {
                                const e = I.options.history.state.back;
                                "string" === typeof e && e.length > 0 ? I.back() : I.push({
                                    name: y.Z.CASINO
                                })
                            },
                            S = (0, d.Jr)("desktop.casino-navigation"),
                            $ = (0, d.Jr)("common.nameWidget.warm"),
                            {
                                data: f,
                                isLoading: T
                            } = (0, g.z8)(),
                            E = (0, o.Fl)((() => f.value ? (0, m.IB)(f.value) : {})),
                            {
                                data: b
                            } = (0, g.eI)(),
                            Z = (0, i.Vh)((() => {
                                var e, a;
                                return null != (a = null == (e = b.value) ? void 0 : e.length) ? a : 0
                            }));
                        (0, o.YP)(Z, (e => {
                            0 === e && w.name === y.Z.CASINO_FAVORITES && B()
                        }));
                        const {
                            gameCategories: A,
                            isLoading: R
                        } = (0, d.bg)({
                            deleteEmpty: !0,
                            preset: (0, i.Vh)((() => h.preset))
                        }), L = (0, o.Fl)((() => A.value.reduce(((e, a) => a.id === C.popular ? z(V({}, e), {
                            popular: a
                        }) : a.id !== C.favorites ? z(V({}, e), {
                            navigationList: [...e.navigationList, a]
                        }) : e), {
                            navigationList: [],
                            popular: void 0
                        }))), {
                            data: W
                        } = (0, g.$l)(), F = (0, o.Fl)((() => {
                            var e, a;
                            const t = p.B5.WARM,
                                {
                                    amount: o = 0
                                } = null != (a = null == (e = W.value) ? void 0 : e[t]) ? a : {};
                            return {
                                id: t,
                                amount: o
                            }
                        })), D = (0, i.iH)(""), H = (0, i.iH)(!1), P = (0, o.f3)(p.ut), {
                            sendSearchEvent: j,
                            cancelSearchEvent: q
                        } = (0, g.DE)({
                            page: (0, i.Vh)((() => h.preset)),
                            hasSearchResults: (0, i.Vh)((() => {
                                var e;
                                return null != (e = null == P ? void 0 : P.value) && e
                            })),
                            search: D
                        }), M = (e, a = {}) => {
                            _.L_.handleCasinoEvent(e, a, {
                                page: h.preset
                            })
                        }, Y = (0, n.Z)((() => {
                            const e = {
                                    name: y.Z.CASINO,
                                    query: {
                                        search: D.value || void 0
                                    }
                                },
                                a = I.options.history.state.back,
                                t = /casino\/(list|widget\/warm|provider)/;
                            "string" === typeof a && "" === D.value && a.length > 0 && t.test(a) ? I.back() : w.name === y.Z.CASINO ? I.replace(e) : I.push(e)
                        }), 300), K = e => {
                            if (!(e.target instanceof HTMLInputElement)) return;
                            const {
                                target: {
                                    value: a
                                }
                            } = e;
                            (!H.value || "" === D.value && a) && M("filter_field"), H.value || (H.value = !0), D.value = a, j(), Y()
                        };
                        (0, o.YP)((() => w.query.search), (e => {
                            D.value = "string" === typeof e ? e : ""
                        }), {
                            immediate: !0
                        });
                        const x = e => {
                                M("filter_category", {
                                    category_name: e
                                })
                            },
                            G = e => e.id === C.all ? "CATEGORIES-ITEM-ALL-GAMES" : `CATEGORIES-ITEM-${e.nameEn}`;
                        return (e, a) => (0, i.SU)(T) || (0, i.SU)(R) ? ((0, o.wg)(), (0, o.j4)(u.Z, {
                            key: 0,
                            class: (0, s.C_)(e.$style.skeleton)
                        }, null, 8, ["class"])) : ((0, o.wg)(), (0, o.iD)("div", {
                            key: 1,
                            class: (0, s.C_)(e.$style.root)
                        }, [(0, o.Wm)(c.Z, null, {
                            default: (0, o.w5)((({
                                hidePromo: a,
                                showPromo: t
                            }) => [t ? ((0, o.wg)(), (0, o.j4)(r.Z, {
                                key: 0,
                                class: (0, s.C_)(e.$style.bonusFreespins),
                                mode: (0, i.SU)(p.wN).WIDE,
                                onHide: a
                            }, null, 8, ["class", "mode", "onHide"])) : (0, o.kq)("", !0)])),
                            _: 1
                        }), (0, o._)("section", {
                            class: (0, s.C_)(e.$style.content),
                            "data-pw": "CASINO-SIDEBAR-CONTAINER"
                        }, [(0, o.Wm)(U, {
                            search: D.value,
                            "search-placeholder": (0, i.SU)(S).search,
                            "games-length": Z.value,
                            "link-favorites": k.value,
                            "is-favorites-route": N.value,
                            "onSubmit:search": (0, i.SU)(Y),
                            "onInput:search": K,
                            "onBlur:search": (0, i.SU)(q),
                            "onClick:navigation": x
                        }, null, 8, ["search", "search-placeholder", "games-length", "link-favorites", "is-favorites-route", "onSubmit:search", "onBlur:search"]), (0, o.Wm)(O, {
                            class: (0, s.C_)(e.$style.body),
                            "owner-name": e.ownerName,
                            "category-id": e.categoryId,
                            "categories-title": (0, i.SU)(S).titleCategories,
                            "providers-title": (0, i.SU)(S).titleProviders,
                            "widget-name": (0, i.SU)($),
                            "data-pw-handler": G,
                            "widget-warm": F.value,
                            categories: L.value,
                            "grouped-owners": E.value,
                            "onClick:navigation": x
                        }, null, 8, ["class", "owner-name", "category-id", "categories-title", "providers-title", "widget-name", "widget-warm", "categories", "grouped-owners"])], 2)], 2))
                    }
                }),
                M = {
                    root: "CasinoNavigation_root_L9SUW",
                    body: "CasinoNavigation_body_WZun9",
                    skeleton: "CasinoNavigation_skeleton_FZV3e",
                    bonusFreespins: "CasinoNavigation_bonusFreespins_MKH6W",
                    content: "CasinoNavigation_content_hFkfY"
                },
                Y = {};
            Y["$style"] = M;
            const K = (0, S.Z)(q, [
                    ["__cssModules", Y]
                ]),
                x = K
        }
    }
]);