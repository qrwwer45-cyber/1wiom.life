(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [40482], {
        296861: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => f
            });
            var n = i(602262),
                r = i(166252),
                s = i(3577),
                a = i(749963),
                o = i(280894),
                c = i(920346),
                u = i(534862),
                p = i(59394);
            const g = {
                    __name: "NotifyLayout",
                    setup(e) {
                        const t = (0, c.lm)(),
                            g = (0, o.oR)(),
                            l = (0, c.dd)(),
                            {
                                notificationsPosition: h
                            } = (0, u.u)(),
                            d = (0, n.Vh)((() => g.getters.isMobile)),
                            m = (0, n.Vh)((() => l.isModalOpened(p.Ko))),
                            f = (0, r.Fl)((() => d.value && "top" === h.value && m.value)),
                            b = (0, r.RC)((() => i.e(64268).then(i.bind(i, 764268))));
                        return (e, i) => (0, n.SU)(t).store.notifications.length > 0 ? ((0, r.wg)(), (0, r.iD)("div", {
                            key: 0,
                            class: (0, s.C_)([e.$style.root, (0, n.SU)(t).store.notifications.length > 0 && e.$style.visible, !d.value && e.$style.desktop, f.value && e.$style.mobileTop])
                        }, [(0, r.Wm)(a.W3, {
                            name: "notify",
                            tag: "div",
                            "enter-active-class": e.$style.transition,
                            "leave-active-class": e.$style.transition,
                            "enter-from-class": e.$style.transitionEnter,
                            "leave-from-class": e.$style.transitionLeaveFrom,
                            "leave-to-class": e.$style.transitionLeaveTo,
                            "move-class": e.$style.transition,
                            class: (0, s.C_)(e.$style.notificationsContainer)
                        }, {
                            default: (0, r.w5)((() => [((0, r.wg)(!0), (0, r.iD)(r.HY, null, (0, r.Ko)((0, n.SU)(t).store.notifications, (i => {
                                var s, a;
                                return (0, r.wg)(), (0, r.j4)((0, r.LL)(null != (s = i.options.component) ? s : (0, n.SU)(b)), (0, r.dG)({
                                    key: i.id,
                                    ref_for: !0
                                }, i.options.props, {
                                    class: i.options.deleted && e.$style.deleted
                                }, (0, r.mx)(null != (a = i.options.listeners) ? a : {}), {
                                    onClose: e => (0, n.SU)(t).close(i.id)
                                }), null, 16, ["class", "onClose"])
                            })), 128))])),
                            _: 1
                        }, 8, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-from-class", "leave-to-class", "move-class", "class"]), i[0] || (i[0] = (0, r._)("div", null, null, -1))], 2)) : (0, r.kq)("", !0)
                    }
                },
                l = {
                    root: "NotifyLayout_root_pzv5J",
                    desktop: "NotifyLayout_desktop_HN13V",
                    mobileTop: "NotifyLayout_mobileTop_W0kBS",
                    notificationsContainer: "NotifyLayout_notificationsContainer_kH8Gb",
                    deleted: "NotifyLayout_deleted_ItNjY",
                    transitionEnter: "NotifyLayout_transitionEnter_aqCzN",
                    transitionLeaveTo: "NotifyLayout_transitionLeaveTo_uZh78",
                    transitionLeaveFrom: "NotifyLayout_transitionLeaveFrom_a71Fh",
                    transition: "NotifyLayout_transition_PL_RG"
                };
            var h = i(348118);
            const d = {};
            d["$style"] = l;
            const m = (0, h.Z)(g, [
                    ["__cssModules", d]
                ]),
                f = m
        },
        535382: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => d
            });
            var n = i(166252),
                r = i(749963),
                s = i(602262),
                a = i(3577),
                o = i(280894),
                c = i(615459);
            const u = (0, n.aZ)({
                    __name: "TopNotification",
                    setup(e) {
                        (0, r.sj)((e => ({
                            "6fe3e974": (0, s.SU)(p),
                            b79832f8: (0, s.SU)(i)
                        })));
                        const t = (0, o.oR)(),
                            {
                                height: i,
                                isVisible: u,
                                position: p
                            } = (0, c.j)();
                        return (e, i) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, a.C_)([e.$style.root, !(0, s.SU)(t).getters.isMobile && e.$style.desktop, (0, s.SU)(u) && e.$style.visible])
                        }, [(0, n.Wm)(r.uT, {
                            name: "slide-" + ((0, s.SU)(t).getters.isMobile ? "mobile" : "desktop")
                        }, {
                            default: (0, n.w5)((() => [(0, s.SU)(u) ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: (0, a.C_)(e.$style.messageContainer)
                            }, (0, a.zw)((0, s.SU)(t).getters.langCommon.notify.no_connection), 3)) : (0, n.kq)("", !0)])),
                            _: 1
                        }, 8, ["name"])], 2))
                    }
                }),
                p = {
                    root: "TopNotification_root_pj4Qx",
                    visible: "TopNotification_visible_QkcJq",
                    desktop: "TopNotification_desktop_krl9m",
                    messageContainer: "TopNotification_messageContainer_XVhIE"
                };
            var g = i(348118);
            const l = {};
            l["$style"] = p;
            const h = (0, g.Z)(u, [
                    ["__cssModules", l]
                ]),
                d = h
        },
        634030: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                activeBalanceSecondaryList: () => Q,
                activeCurrencySecondaryList: () => U,
                appHashData: () => Le,
                availableCurrencies: () => N,
                availableMulticurrency: () => K,
                balance: () => x,
                balanceCurrentEmpty: () => L,
                balanceSecondaryList: () => E,
                balanceTotalEmpty: () => M,
                bonusAmount: () => ue,
                bonusCasino: () => pe,
                casinoAllowed: () => $,
                country: () => O,
                countryDefaultPayment: () => H,
                countrySubdivision: () => A,
                currency: () => P,
                currencySecondaryList: () => T,
                currencySymbol: () => G,
                favourites: () => W,
                fullscreen: () => X,
                hasBonus: () => re,
                hideDownloadMobileApp: () => ye,
                inactiveBalanceSecondaryList: () => R,
                inactiveCurrencySecondaryList: () => B,
                ip: () => Me,
                isAllowedInvest: () => fe,
                isAllowedTv: () => Ie,
                isBlockable: () => Oe,
                isCoeffChangeable: () => ce,
                isCountryAllowed: () => Fe,
                isDesktopApp: () => Y,
                isDisabledFastsport: () => Ne,
                isMobile: () => z,
                isOnlyCryptoGeo: () => D,
                isPwaCardAllowed: () => Ge,
                isPwaIgnored: () => we,
                isRegLs: () => De,
                isRuCountry: () => Ee,
                isShowDepositModalAfterLogin: () => ne,
                isSiteForbidden: () => V,
                isSiteFullyForbidden: () => j,
                isSitePartiallyForbidden: () => Z,
                isThreeSymbolsCurrency: () => me,
                isTradingAllowed: () => qe,
                isTwoSymbolsCurrency: () => de,
                isUACountry: () => Te,
                isVipUser: () => ge,
                lastDeposits: () => J,
                licenseText: () => Ae,
                locale: () => ve,
                localeCode: () => Ce,
                navMenuOpened: () => ee,
                profileInfo: () => be,
                registrationCurrency: () => F,
                responsibleGamingText: () => Pe,
                rightMenu: () => te,
                showBalance: () => ie,
                showLocaleFlag: () => xe,
                showVipDomain: () => le,
                socialLinks: () => Se,
                socialsWithLinks: () => ke,
                supportNumber: () => _e,
                timeZone: () => se,
                user: () => ae,
                userId: () => oe,
                viewCurrency: () => q,
                viewCurrencySymbol: () => I,
                vipDomain: () => he
            });
            var n = i(381711),
                r = i(479697),
                s = i(932256),
                a = i(438643),
                o = i(384754),
                c = i(370359),
                u = i(631526),
                p = i(893279),
                g = i(643422),
                l = i(899437),
                h = i(153415),
                d = i(135058),
                m = i(878417),
                f = i(142291),
                b = i(644540),
                y = i(112808),
                w = Object.defineProperty,
                v = Object.getOwnPropertySymbols,
                _ = Object.prototype.hasOwnProperty,
                S = Object.prototype.propertyIsEnumerable,
                k = (e, t, i) => t in e ? w(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                C = (e, t) => {
                    for (var i in t || (t = {})) _.call(t, i) && k(e, i, t[i]);
                    if (v)
                        for (var i of v(t)) S.call(t, i) && k(e, i, t[i]);
                    return e
                };
            const x = (e, t) => {
                    var i, n, r;
                    return (null == (r = null == (i = t.user) ? void 0 : i.balanceMap) ? void 0 : r[null == (n = t.user) ? void 0 : n.currency]) || 0
                },
                L = (e, t) => 0 === t.balance,
                M = (e, t) => {
                    var i;
                    return !(null == (i = t.user) ? void 0 : i.balanceMap) || 0 === Object.values(t.user.balanceMap).reduce(((e, t) => e + t), 0)
                },
                O = e => e.country,
                D = e => {
                    var t;
                    return (0, f.c)((null == (t = y.appConfig.options.geoRestrictions) ? void 0 : t.onlyCrypto) || [], e.country, e.countrySubdivision)
                },
                A = e => e.countrySubdivision,
                P = (e, t) => {
                    var i, r;
                    return (null == (i = t.user) ? void 0 : i.currency) ? null == (r = t.user) ? void 0 : r.currency : y.appConfig.options.defaultCurrency ? y.appConfig.options.defaultCurrency : t.currentLang === s.AOg ? n.xn : n.qY
                },
                F = (e, t) => {
                    var i;
                    return t.isOnlyCryptoGeo ? n.NE.USDT : null != (i = y.appConfig.options.defaultCurrency) ? i : t.availableCurrencies[0]
                },
                q = (e, t) => (0, h.oS)(t.currency) ? n.NE.USD : t.currency,
                G = (e, t) => a.wO[t.currency],
                I = (e, t) => a.wO[t.viewCurrency],
                N = (e, t, i) => {
                    var r, s;
                    const o = (0, m.L)(),
                        {
                            isCryptoRegistrationAllowed: c
                        } = (0, u.p)(),
                        {
                            isTonAvailable: g
                        } = (0, p.a)(),
                        {
                            isNewCurrenciesAvailable: h
                        } = (0, l._)();
                    let d = null != (r = y.appConfig.options.currencies) ? r : a.Hw;
                    if (o.isAuthed || t.isOnlyCryptoGeo || c.value || (d = d.filter((e => !a.Mf[e].crypto))), t.isOnlyCryptoGeo && (d = d.filter((e => {
                            var i, n;
                            const r = o.isAuthed && (null == (n = null == (i = t.user) ? void 0 : i.balanceMap) ? void 0 : n[e]);
                            return a.Mf[e].crypto || r
                        }))), !g.value) {
                        const e = new Set([n.NE.TON]);
                        d = d.filter((t => !e.has(t)))
                    }
                    if (d = d.filter((e => e !== n.NE.NEO)), !h.value) {
                        const e = new Set([n.NE.USDC, n.NE.BNB, n.NE.XMR, n.NE.DOGE, n.NE.BCH, n.NE.DASH, n.NE.ZEC, n.NE.XLM, n.NE.XRP]);
                        d = d.filter((t => !e.has(t)))
                    }
                    t.isUACountry && (d = d.filter((e => {
                        var i, r;
                        const s = ![n.NE.RUB, n.NE.BYN].includes(e),
                            a = o.isAuthed && (null == (r = null == (i = t.user) ? void 0 : i.balanceMap) ? void 0 : r[e]);
                        return s || a
                    }))), !o.isAuthed && t.isRuCountry && (d = d.filter((e => n.NE.UAH !== e)));
                    const f = new Set(null != (s = y.appConfig.options.disabledInactiveCurrencies) ? s : []);
                    return d = d.filter((e => {
                        var i, n;
                        return !f.has(e) || (null == (n = null == (i = t.user) ? void 0 : i.activatedMap) ? void 0 : n[e])
                    })), t.isOnlyCryptoGeo && (d = d.filter((e => a.Mf[e].crypto))), d
                },
                T = (e, t) => t.availableCurrencies.filter((e => e !== t.currency)),
                E = ({
                    user: e
                }, t) => t.currencySecondaryList.map((t => {
                    var i, n;
                    return {
                        currency: t,
                        amount: (null == (i = null == e ? void 0 : e.balanceMap) ? void 0 : i[t]) || 0,
                        activated: (null == (n = null == e ? void 0 : e.activatedMap) ? void 0 : n[t]) || !1
                    }
                })),
                Q = (e, t) => t.balanceSecondaryList.filter((e => e.activated)),
                R = (e, t) => t.balanceSecondaryList.filter((e => !e.activated)),
                U = (e, t) => t.activeBalanceSecondaryList.map((e => e.currency)),
                B = (e, t) => {
                    const {
                        isLimitationOfFiatCurrencies: i
                    } = (0, g.I)();
                    let n = t.inactiveBalanceSecondaryList.map((e => e.currency));
                    const r = !a.Mf[t.currency].crypto,
                        s = t.activeCurrencySecondaryList.filter((e => !a.Mf[e].crypto)).length,
                        o = Number(r) + s;
                    return (i.value && o >= 2 && !t["permissions/isTester"] || t.isOnlyCryptoGeo) && (n = n.filter((e => a.Mf[e].crypto))), n
                },
                K = (e, t) => {
                    var i;
                    return t.availableCurrencies.length > 1 || t.inactiveBalanceSecondaryList.length > 0 || !t.availableCurrencies.includes(null == (i = t.user) ? void 0 : i.currency)
                },
                V = e => {
                    var t, i, n, r, a, c, u, p, g, l, h, b;
                    const w = (0, m.L)();
                    return !!o.Rb || !(0, f.c)([], e.country, e.countrySubdivision) && ((!(0, f.c)([...null != (i = null == (t = y.appConfig.options.geoRestrictions) ? void 0 : t.partiallyForbiddenExceptAuthed) ? i : [], ...null != (r = null == (n = y.appConfig.options.geoRestrictions) ? void 0 : n.fullyForbiddenExceptAuthed) ? r : []], e.country, e.countrySubdivision) || !w.isAuthedByToken) && (!s.UgI.includes(window.location.hostname) && (!d.oC.value.isPrerender && (!d.oC.value.isSearchBot && (("1wscju.top" !== window.location.hostname || !["KZ", "UA", "PE"].includes(e.country) || !w.isAuthed) && (0, f.c)([...null != (c = null == (a = y.appConfig.options.geoRestrictions) ? void 0 : a.partiallyForbidden) ? c : [], ...null != (p = null == (u = y.appConfig.options.geoRestrictions) ? void 0 : u.partiallyForbiddenExceptAuthed) ? p : [], ...null != (l = null == (g = y.appConfig.options.geoRestrictions) ? void 0 : g.fullyForbidden) ? l : [], ...null != (b = null == (h = y.appConfig.options.geoRestrictions) ? void 0 : h.fullyForbiddenExceptAuthed) ? b : []], e.country, e.countrySubdivision))))))
                },
                j = (e, t) => {
                    var i, n, r, s;
                    return !!o.Rb || !!t.isSiteForbidden && (0, f.c)([...null != (n = null == (i = y.appConfig.options.geoRestrictions) ? void 0 : i.fullyForbidden) ? n : [], ...null != (s = null == (r = y.appConfig.options.geoRestrictions) ? void 0 : r.fullyForbiddenExceptAuthed) ? s : []], e.country, e.countrySubdivision)
                },
                Z = (e, t) => t.isSiteForbidden && !t.isSiteFullyForbidden,
                H = e => s.h0b[e.country],
                $ = e => !0,
                W = e => t => e.favourites[t] || [],
                X = e => e.fullscreen,
                Y = e => e.isDesktopApp,
                z = e => e.isMobile,
                J = e => e.lastDeposits,
                ee = e => e.navMenuOpened,
                te = e => e.rightMenu,
                ie = e => e.showBalance,
                ne = (e, t) => {
                    var i;
                    return "B" === (null == (i = t.user) ? void 0 : i.toDepPaymentFormGroup)
                },
                re = () => !0,
                se = () => -1 * (new Date).getTimezoneOffset(),
                ae = (e, t) => t.isSiteForbidden ? {} : e.user,
                oe = (e, t) => {
                    var i, n;
                    return null != (n = null == (i = t.user) ? void 0 : i.id) ? n : null
                },
                ce = (e, t) => {
                    var i, n;
                    return null == (n = null == (i = t.user) ? void 0 : i.is_coeff_changeable) || n
                },
                ue = (e, t) => {
                    var i;
                    return (null == (i = t.user) ? void 0 : i.bonus_amount) || 0
                },
                pe = (e, t) => {
                    var i;
                    return (null == (i = t.user) ? void 0 : i.bonus_casino) || 0
                },
                ge = (e, t) => {
                    var i;
                    return !1 === (null == (i = t.user) ? void 0 : i.is_vip_domain) && t.vipDomain
                },
                le = (e, t) => !(0, d.So)() && t.isVipUser && y.appConfig.modules.vipDomain,
                he = (e, t) => {
                    var i;
                    return null == (i = t.user) ? void 0 : i.personal_domain
                },
                de = (e, t) => 2 === t.viewCurrency.length,
                me = (e, t) => 3 === t.viewCurrency.length,
                fe = (e, t, i, n) => y.appConfig.modules.invest && !n.isBlockable && n.user.has_investments && ["ru"].includes(n.currentLang),
                be = ({
                    user: {
                        name: e,
                        country: t,
                        phone: i,
                        email: n,
                        birthday: r
                    }
                }) => ({
                    name: e,
                    country: t,
                    phone: i,
                    email: n,
                    birthday: Number.parseInt(r, 10)
                }),
                ye = (e, t) => {
                    const i = (0, m.L)();
                    return b.A || t.isPwaIgnored || i.isAuthed && t.currency !== n.xn
                },
                we = e => e.isPwaIgnored,
                ve = e => e.locale && e.localeData ? Object.values(e.localeData).find((({
                    id: t
                }) => e.locale === t)) : null,
                _e = (e, t) => t.locale ? t.locale.supportNumber : t.currentLang === s.AOg ? y.appConfig.phone : null,
                Se = (e, t) => {
                    var i, n, a, o, c, u, p, g, l, h;
                    const d = s.bPV.isoKeysByLang.en,
                        m = (e = {}, i = t.currentLang) => Object.fromEntries(Object.entries(e).map((([e, {
                            lang: t
                        }]) => {
                            var n;
                            const r = null != (n = t[s.bPV.isoKeysByLang[i]]) ? n : t[i];
                            return [e, r]
                        })).filter((([, e]) => !!e)));
                    if (y.appConfig.options.socialsOnlyLocal) return m(null == (n = null == (i = e.localeData) ? void 0 : i.local) ? void 0 : n.social);
                    const f = C(C({}, m(null == (o = null == (a = e.localeData) ? void 0 : a.global) ? void 0 : o.social)), m(null == (u = null == (c = e.localeData) ? void 0 : c.local) ? void 0 : u.social)),
                        b = C(C({}, m(null == (g = null == (p = e.localeData) ? void 0 : p.global) ? void 0 : g.social, d)), m(null == (h = null == (l = e.localeData) ? void 0 : l.local) ? void 0 : h.social, d));
                    return (0, r.Z)(f) ? b : f
                },
                ke = (e, t) => Object.values(c.Z).filter((e => t.socialLinks[e])),
                Ce = (e, t) => {
                    var i, n;
                    return null == (n = null == (i = t.locale) ? void 0 : i.code) ? void 0 : n.toLowerCase()
                },
                xe = (e, t) => {
                    var i, n;
                    return Boolean((null == (i = t.locale) ? void 0 : i.id) !== s.guZ && (null == (n = t.locale) ? void 0 : n.code))
                },
                Le = e => e.appHashData,
                Me = e => e.ip,
                Oe = e => {
                    var t;
                    return s.lHM.includes(null == (t = e.appHashData) ? void 0 : t.domain)
                },
                De = () => !1,
                Ae = (e, t) => {
                    if (o.nI.includes(y.appConfig.domain)) return t.langCommon.license.game;
                    const i = t.isBlockable;
                    return i ? t.langCommon.license.blockable : t.langCommon.license.description
                },
                Pe = (e, t) => {
                    if (o.nI.includes(y.appConfig.domain)) return t.langCommon.responsibleGaming.game;
                    const i = t.isBlockable;
                    return i ? t.langCommon.responsibleGaming.blockable : ""
                },
                Fe = e => t => t.includes(e.country),
                qe = (e, t) => t.isCountryAllowed(s.v4t),
                Ge = (e, t) => !(b.A || (0, d.So)() || t.isPwaIgnored || t.isDesktopApp),
                Ie = (e, t) => y.appConfig.modules.tv && !t.isBlockable && s.flK.includes(t.currentLang),
                Ne = (e, t) => t.isCountryAllowed(s.l3u),
                Te = e => "UA" === e.country,
                Ee = e => "RU" === e.country
        },
        228513: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                checkSlide: () => M,
                clearProfile: () => _,
                clearTelegramHash: () => w,
                setAppHashData: () => B,
                setBalance: () => k,
                setBalanceData: () => S,
                setBalanceForCurrency: () => C,
                setCountry: () => A,
                setCountrySubdivision: () => F,
                setCurrency: () => N,
                setFullscreen: () => G,
                setIp: () => P,
                setIsDesktopApp: () => b,
                setIsMobile: () => I,
                setIsPwaIgnored: () => E,
                setLastDeposits: () => q,
                setLocale: () => U,
                setLocalesData: () => R,
                setShowBalance: () => T,
                setTelegramHash: () => y,
                setUserCountry: () => x,
                setUserPhoneVerification: () => K,
                setUserPokerNickname: () => L,
                setUserPreferCollapsedOddsGroups: () => Q,
                showNavMenu: () => O,
                showRightMenu: () => D,
                userProfile: () => v
            });
            var n = i(836808),
                r = i.n(n),
                s = i(932256),
                a = i(884297),
                o = Object.defineProperty,
                c = Object.defineProperties,
                u = Object.getOwnPropertyDescriptors,
                p = Object.getOwnPropertySymbols,
                g = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                h = (e, t, i) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                d = (e, t) => {
                    for (var i in t || (t = {})) g.call(t, i) && h(e, i, t[i]);
                    if (p)
                        for (var i of p(t)) l.call(t, i) && h(e, i, t[i]);
                    return e
                },
                m = (e, t) => c(e, u(t)),
                f = (e, t) => {
                    var i = {};
                    for (var n in e) g.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
                    if (null != e && p)
                        for (var n of p(e)) t.indexOf(n) < 0 && l.call(e, n) && (i[n] = e[n]);
                    return i
                };
            const b = (e, t) => {
                    e.isDesktopApp = !!t
                },
                y = (e, t) => {
                    a.J_.set(a.sW, t), e.telegramHash = t
                },
                w = e => {
                    e.telegramHash = null
                },
                v = (e, t) => {
                    const i = t,
                        {
                            meta: n = {},
                            balanceData: r = {}
                        } = i,
                        s = f(i, ["meta", "balanceData"]),
                        a = r,
                        {
                            primary: {
                                currency: o,
                                amount: c
                            } = {}
                        } = a,
                        u = f(a, ["primary"]),
                        p = d(d(d(d({}, e.user.balanceMap), u), o && {
                            [o]: c
                        }), t.balanceMap),
                        g = m(d(d(d({}, e.user), s), n), {
                            balanceMap: p
                        }),
                        {
                            country: l
                        } = g,
                        h = f(g, ["country"]);
                    e.user = m(d({}, h), {
                        country: null == l ? void 0 : l.toLowerCase()
                    }), void 0 !== t.match_groups_collapsed && (e.userPreferCollapsedOddsGroups = t.match_groups_collapsed)
                },
                _ = e => {
                    e.user = {}
                },
                S = (e, t) => {
                    for (const [i, n] of Object.entries(t))
                        for (const [t, r] of Object.entries(n)) e.user[i] || (e.user[i] = {}), e.user[i][t] = r
                },
                k = ({
                    user: e
                }, t, i = e.currency) => {
                    e.balanceMap[i] = t
                },
                C = ({
                    user: e
                }, {
                    amount: t,
                    currency: i,
                    timestamp: n
                }) => {
                    var r;
                    const s = null == (r = e.balanceTimestampMap) ? void 0 : r[i];
                    s && n && s > n || (e.balanceMap[i] = t)
                },
                x = ({
                    user: e
                }, t) => {
                    e.country = t.toLowerCase()
                },
                L = (e, t) => {
                    e.user.poker_nickname = t
                },
                M = (e, t) => {
                    e.components.slider.init = !0, e.components.slider.active = t
                },
                O = (e, t) => {
                    e.navMenuOpened = t
                },
                D = (e, t) => {
                    e.rightMenu = t
                },
                A = (e, t) => {
                    e.country || (e.country = t)
                },
                P = (e, t) => {
                    e.ip = t
                },
                F = (e, t) => {
                    e.countrySubdivision = t
                },
                q = (e, t) => {
                    e.lastDeposits = t
                },
                G = (e, t) => {
                    e.fullscreen = void 0 === t ? !e.fullscreen : t
                },
                I = (e, t) => {
                    e.isMobile = t
                },
                N = (e, t) => {
                    e.user.currency = t
                },
                T = (e, t) => {
                    e.showBalance = t
                },
                E = (e, t) => {
                    a.J_.set(a.te, t), e.isPwaIgnored = t
                },
                Q = (e, t) => {
                    e.userPreferCollapsedOddsGroups = t
                },
                R = (e, t) => {
                    e.localeData = t
                },
                U = (e, t) => {
                    const i = Number(r().get(s.S7x));
                    t !== i && a.J_.remove(a.Jj), e.locale = t
                },
                B = (e, t) => {
                    e.appHashData = t
                },
                K = (e, t) => {
                    e.user.phone_verification = t
                }
        },
        46452: (e, t, i) => {
            "use strict";
            i.d(t, {
                NC: () => o,
                fZ: () => a,
                n2: () => s,
                o_: () => c
            });
            var n = i(932256);
            const r = new WeakMap,
                s = (e, t, i, s) => {
                    var a, o;
                    return null != (o = r.get(s)) ? o : r.set(s, new e(null != (a = n.bPV.isoKeysByLang[i]) ? a : i, s)[t]).get(s)
                },
                a = {},
                o = {
                    maximumFractionDigits: 2
                },
                c = {
                    numberingSystem: "latn",
                    style: "currency"
                }
        },
        753931: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                initLang: () => v,
                loadLanguages: () => S,
                setCurrentLanguage: () => _,
                switchLanguage: () => k
            });
            var n = i(932256),
                r = i(479810),
                s = i(495119),
                a = i(878417),
                o = i(606982),
                c = i(377823),
                u = i(470781),
                p = i(112808),
                g = Object.defineProperty,
                l = Object.getOwnPropertySymbols,
                h = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                m = (e, t, i) => t in e ? g(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                f = (e, t) => {
                    for (var i in t || (t = {})) h.call(t, i) && m(e, i, t[i]);
                    if (l)
                        for (var i of l(t)) d.call(t, i) && m(e, i, t[i]);
                    return e
                },
                b = (e, t, i) => new Promise(((n, r) => {
                    var s = e => {
                            try {
                                o(i.next(e))
                            } catch (t) {
                                r(t)
                            }
                        },
                        a = e => {
                            try {
                                o(i.throw(e))
                            } catch (t) {
                                r(t)
                            }
                        },
                        o = e => e.done ? n(e.value) : Promise.resolve(e.value).then(s, a);
                    o((i = i.apply(e, t)).next())
                }));
            const y = e => b(void 0, null, (function*() {
                    var t, i, n;
                    const s = () => b(void 0, null, (function*() {
                        return yield(0, o.g)(1e3), y(e)
                    }));
                    try {
                        const a = new URLSearchParams;
                        a.set("appName", "web");
                        const o = null == (i = null == (t = window.INITIAL_DATA) ? void 0 : t.hashes) ? void 0 : i.transls;
                        o && a.set("h", o);
                        const c = `/fss/translations/${e}?${a.toString()}`,
                            u = yield r.apiClient.get(c);
                        return null != (n = u.data) ? n : s()
                    } catch (a) {
                        console.error("Unable to fetch lang data", {
                            originalError: a
                        })
                    }
                    return s()
                })),
                w = (e, t) => {
                    (0, c.Wi)("lang");
                    const i = (0, a.L)();
                    i.isAuthed && t.dispatch("updateLocale", e, {
                        root: !0
                    }), t.commit("resolvePromiseByName", s.l.LANG, {
                        root: !0
                    })
                },
                v = e => b(void 0, null, (function*() {
                    try {
                        const t = e.rootGetters.currentLang;
                        if (e.dispatch("setCurrentLanguage", {
                                lang: t,
                                isInitial: !0
                            }), e.state.text) return void w(t, e);
                        const i = yield y(t);
                        e.commit("setLangData", i), w(t, e)
                    } catch (t) {
                        console.error("Unable to load lang", {
                            originalError: t
                        })
                    }
                })),
                _ = (e, t) => {
                    const {
                        lang: i,
                        isInitial: r = !1
                    } = (() => (null == t ? void 0 : t.ignoreAvailability) ? f({}, t) : t.lang === n.bPV.LANG_RU.lang && n.BOQ ? {
                        lang: n.bPV.DEFAULT.lang
                    } : (0, u.Mv)(t.lang) ? f({}, t) : {
                        lang: p.appConfig.options.defaultLang || n.bPV.DEFAULT.lang
                    })();
                    window.lang.save(i), e.state.current = i, r ? document.documentElement.setAttribute("lang", n.bPV.isoKeysByLang[i]) : e.dispatch("updateLocale").then((() => {
                        window.location.reload()
                    }))
                },
                S = e => b(void 0, [e], (function*({
                    commit: e,
                    rootGetters: t
                }) {
                    const {
                        data: i = []
                    } = yield t.socket.send("LOCALIZATION:languages-get");
                    e("setLanguages", i)
                })),
                k = (e, t) => b(void 0, null, (function*() {
                    e.dispatch("setCurrentLanguage", {
                        lang: t,
                        isInitial: !0
                    });
                    const i = yield y(t);
                    e.commit("setLangData", i), w(t, e)
                }))
        },
        576386: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                currentLang: () => F,
                currentLangBcp47: () => q,
                currentLangIsoCode: () => G,
                dateTimeFormat: () => T,
                declensionWord: () => x,
                formatLanguageMessage: () => Z,
                formatPercent: () => R,
                getCommonLangObjectByKey: () => V,
                getCommonWordByKey: () => K,
                getDesktopWordByKey: () => B,
                getNamespacedWordByKey: () => U,
                getWordByKey: () => j,
                isSNGCountryLanguage: () => I,
                lang: () => P,
                langCommon: () => D,
                langDesktop: () => M,
                langMobile: () => O,
                langPaymentMethods: () => A,
                langText: () => L,
                languages: () => H,
                localeFormat: () => N,
                numberCurrencyFormat: () => Q,
                numberFormat: () => E
            });
            var n = i(934405),
                r = i(845542),
                s = i(932256),
                a = i(438643),
                o = i(56101),
                c = i(72258),
                u = i(773145),
                p = i(563637),
                g = i(470781),
                l = i(112808),
                h = i(46452),
                d = Object.defineProperty,
                m = Object.defineProperties,
                f = Object.getOwnPropertyDescriptors,
                b = Object.getOwnPropertySymbols,
                y = Object.prototype.hasOwnProperty,
                w = Object.prototype.propertyIsEnumerable,
                v = (e, t, i) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                _ = (e, t) => {
                    for (var i in t || (t = {})) y.call(t, i) && v(e, i, t[i]);
                    if (b)
                        for (var i of b(t)) w.call(t, i) && v(e, i, t[i]);
                    return e
                },
                S = (e, t) => m(e, f(t));
            const k = (e, t, i = !0) => {
                    const n = t.split(".");
                    let r = e;
                    for (const s of n)
                        if (r = r[s], !r) return i ? t : null;
                    return "string" === typeof r ? r : i ? t : null
                },
                C = (e, t) => {
                    const i = t.split(".");
                    let n = e;
                    for (const r of i)
                        if (n = n[r], !n) return;
                    return n
                },
                x = (e, t) => (e, i) => {
                    if ("string" === typeof i) return i;
                    let n = Number(1 !== e);
                    return t.currentLang !== s.hnV && (e % 10 === 1 && e % 100 !== 11 && (n = 0), e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) && (n = 1), n = 2), i[n]
                },
                L = e => e.text,
                M = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.desktop
                },
                O = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.mobile
                },
                D = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.common
                },
                A = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.paymentMethods
                },
                P = (e, t, i, n) => n.isMobile ? t.langMobile : t.langDesktop,
                F = e => {
                    var t;
                    return null != (t = e.current) ? t : s.bPV.DEFAULT.lang
                },
                q = (e, t) => window.LangEnum.itemsByLang[t.currentLang].bcp47,
                G = (e, t) => s.bPV.isoKeysByLang[t.currentLang],
                I = (e, t) => s.Rmi.includes(t.currentLang),
                N = ({
                    current: e
                }) => (t = "") => {
                    var i, r;
                    return (0, n.Kn)(t) ? null != (r = null != (i = t[e]) ? i : t[s.hnV]) ? r : "" : null != t ? t : ""
                },
                T = ({
                    current: e
                }) => (t = h.fZ) => (0, h.n2)(Intl.DateTimeFormat, "format", e, t),
                E = ({
                    current: e
                }) => (t = h.NC) => (0, h.n2)(Intl.NumberFormat, "format", e, t),
                Q = ({
                    current: e
                }) => (t, i = {}) => n => {
                    var r, s;
                    const o = Intl.NumberFormat(e, S(_(_({}, h.o_), i), {
                        currency: t
                    }));
                    return null != (s = null == (r = o.formatToParts) ? void 0 : r.call(o, n).map((({
                        type: e,
                        value: i
                    }) => {
                        var n;
                        return "currency" === e ? null != (n = a.wO[t]) ? n : t : i
                    })).join("")) ? s : o.format(n)
                },
                R = (e, t) => e => Number(e).toLocaleString(t.currentLang, {
                    style: "percent"
                }),
                U = e => (t, i) => {
                    const n = [...t.split("."), ...i.split(".")];
                    return n.reduce(((e, t) => null == e ? void 0 : e[t]), e.text) || i
                },
                B = (e, t) => (e, i = !0) => k(t.langDesktop, e, i),
                K = (e, t) => (e, i = !0) => k(t.langCommon, e, i),
                V = (e, t) => e => C(t.langCommon, e),
                j = (e, t) => (e, i = !0) => k(t.langText, e, i),
                Z = (e, t) => ({
                    key: e,
                    args: i,
                    returnCode: n = !0
                }) => {
                    const r = t.getDesktopWordByKey(e, n),
                        s = (i || []).map((e => e.langKey ? t.formatLanguageMessage({
                            key: e.langKey,
                            args: e.langArgs,
                            returnCode: n
                        }) : e));
                    return (0, p.Uw)(r, ...s)
                },
                H = (e, t, i, n) => {
                    const a = new Set(e.languages.map((e => e.language))),
                        {
                            isNewLanguagesEnabled: p,
                            newLanguages: h
                        } = (0, c.e)(),
                        {
                            isTagalLanguagesEnabled: d
                        } = (0, u.C)(),
                        {
                            exclusionLanguages: m
                        } = (0, o.e)(),
                        f = s.bPV.items.filter((({
                            lang: e
                        }) => {
                            if (!(0, g.Mv)(e)) return !1;
                            if (e === s.bPV.LANG_TL.isoKey && !d.value && !n["permissions/isTester"]) return !1;
                            const t = p.value || n["permissions/isTester"] || !h.has(e);
                            return !!t && (!s.BOQ || e !== s.bPV.LANG_RU.lang)
                        })),
                        b = f.reduce(((e, i) => {
                            const n = a.has(i.lang) && !l.appConfig.options.hideSuggestedLanguages ? e.popular : e.others;
                            return n.push(S(_({}, i), {
                                name: t.langCommon.languages.list[i.lang]
                            })), e
                        }), {
                            popular: [],
                            others: []
                        }),
                        {
                            popular: y
                        } = b,
                        {
                            others: w
                        } = b,
                        v = new Map(e.languages.map((e => [e.language, e.index])));
                    return y.sort(((e, t) => v.get(e.lang) - v.get(t.lang))), w.sort(((e, t) => e.name.localeCompare(t.name, void 0, {
                        sensitivity: "base"
                    }))), t.isUACountry && (0, r.Z)(y, (e => e.lang === s.AOg)), {
                        popular: y,
                        others: w,
                        langs: f
                    }
                }
        },
        445069: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                setLangData: () => n,
                setLanguages: () => r
            });
            const n = (e, t) => {
                    e.text = t
                },
                r = (e, t) => {
                    e.languages = [...t.languages]
                }
        },
        513962: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => o
            });
            var n = i(753931),
                r = i(576386),
                s = i(445069);
            const a = {
                    state() {
                        const {
                            lang: e,
                            translations: t
                        } = window.lang.defaultState;
                        return {
                            current: e,
                            text: t,
                            languages: []
                        }
                    },
                    mutations: s,
                    actions: n,
                    getters: r
                },
                o = a
        },
        606982: (e, t, i) => {
            "use strict";
            i.d(t, {
                g: () => n
            });
            const n = e => new Promise((t => {
                setTimeout(t, e)
            }))
        },
        82223: (e, t, i) => {
            "use strict";
            var n = i(757893),
                r = i.n(n),
                s = i(637924),
                a = i.n(s),
                o = i(869349),
                c = i.n(o),
                u = i(992197),
                p = i.n(u),
                g = i(295016),
                l = i.n(g),
                h = i(753101),
                d = i.n(h),
                m = i(202008),
                f = i.n(m),
                b = i(779915),
                y = i.n(b),
                w = i(874418),
                v = i.n(w),
                _ = i(599119);
            const S = i.p + "img/luckystar-white.6008c50b9.svg";
            var k = i(669926),
                C = i.n(k),
                x = i(495140),
                L = i.n(x),
                M = i(959549),
                O = i.n(M),
                D = i(309138),
                A = i.n(D),
                P = i(24587),
                F = i.n(P),
                q = i(940881),
                G = i.n(q),
                I = i(298947),
                N = i.n(I),
                T = i(987137),
                E = i.n(T),
                Q = i(640271),
                R = i.n(Q),
                U = i(537604),
                B = i.n(U),
                K = i(268084),
                V = i.n(K),
                j = i(833707),
                Z = i.n(j),
                H = i(132887),
                $ = i.n(H),
                W = i(47096),
                X = i.n(W),
                Y = i(803679),
                z = i.n(Y),
                J = i(698424),
                ee = i.n(J),
                te = i(277083),
                ie = i.n(te),
                ne = i(925205),
                re = i.n(ne),
                se = i(715764),
                ae = i(494515),
                oe = i.n(ae),
                ce = i(649737),
                ue = i.n(ce),
                pe = i(155677),
                ge = i.n(pe),
                le = i(594088),
                he = i.n(le),
                de = i(129664),
                me = i.n(de),
                fe = i(357523),
                be = i.n(fe),
                ye = i(5792),
                we = i.n(ye),
                ve = i(319771);
            const _e = i.p + "media/pwa-ios-luckystar-en.hevc.fea45098.mp4",
                Se = i.p + "media/pwa-ios-luckystar-en.be28330c.mp4",
                ke = i.p + "media/pwa-ios-luckystar-ru.hevc.9b4cad06.mp4",
                Ce = i.p + "media/pwa-ios-luckystar-ru.d5c502ae.mp4",
                xe = i.p + "img/logo-luckystar.0b86b0d62.svg";
            se.p.PLATFORM_ANDROID, he(), ge(), se.p.PLATFORM_IOS, be(), me(), we(), y(), v(), l(), d(), c(), p(), f(), re(), V(), Z(), $(), X(), z(), ee(), ie(), B(), R(), E(), N(), F(), G(), O(), A(), r(), a(), C(), L(), ue(), oe()
        },
        276826: (e, t, i) => {
            "use strict";
            i.d(t, {
                mainAssets: () => ot
            });
            const n = i.p + "img/1win-normal.5a6f93b4b.svg",
                r = i.p + "img/1win-white.23d8929b3.svg";
            var s = i(475781),
                a = i.n(s),
                o = i(588490),
                c = i.n(o),
                u = i(293693),
                p = i.n(u),
                g = i(582576),
                l = i.n(g),
                h = i(251972),
                d = i.n(h),
                m = i(903588),
                f = i.n(m),
                b = i(187722),
                y = i.n(b),
                w = i(409948),
                v = i.n(w),
                _ = i(242835),
                S = i.n(_),
                k = i(309443),
                C = i.n(k),
                x = i(759456),
                L = i.n(x),
                M = i(31716),
                O = i.n(M),
                D = i(906349),
                A = i.n(D),
                P = i(604955),
                F = i.n(P),
                q = i(149592),
                G = i.n(q),
                I = i(902327),
                N = i.n(I),
                T = i(745751),
                E = i.n(T),
                Q = i(992815),
                R = i.n(Q),
                U = i(846570),
                B = i.n(U),
                K = i(640600),
                V = i.n(K),
                j = i(126850),
                Z = i.n(j),
                H = i(930472),
                $ = i.n(H),
                W = i(185084),
                X = i.n(W),
                Y = i(659486),
                z = i.n(Y),
                J = i(278504),
                ee = i.n(J),
                te = i(32429),
                ie = i.n(te),
                ne = i(15940),
                re = i.n(ne),
                se = i(830046),
                ae = i.n(se),
                oe = i(226475),
                ce = i.n(oe),
                ue = i(96629),
                pe = i.n(ue),
                ge = i(788873),
                le = i.n(ge),
                he = i(996903),
                de = i.n(he),
                me = i(124202),
                fe = i.n(me),
                be = i(923771),
                ye = i.n(be),
                we = i(109869),
                ve = i.n(we),
                _e = i(276766),
                Se = i.n(_e),
                ke = i(466032),
                Ce = i.n(ke),
                xe = i(974936),
                Le = i.n(xe),
                Me = i(890741),
                Oe = i.n(Me),
                De = i(781993),
                Ae = i.n(De),
                Pe = i(715764),
                Fe = i(139107),
                qe = i.n(Fe),
                Ge = i(600708),
                Ie = i.n(Ge);
            const Ne = i.p + "img/logo.1d22c4a43.svg";
            var Te = i(814488),
                Ee = i.n(Te),
                Qe = i(316456),
                Re = i.n(Qe),
                Ue = i(531560),
                Be = i.n(Ue),
                Ke = i(335240),
                Ve = i.n(Ke),
                je = i(723204),
                Ze = i.n(je),
                He = i(319771),
                $e = i(931701),
                We = i.n($e),
                Xe = i(533800),
                Ye = i.n(Xe),
                ze = i(407127),
                Je = i.n(ze),
                et = i(852829),
                tt = i.n(et);
            const it = i.p + "media/pwa-ios-en.hevc.edb2e5a3.mp4",
                nt = i.p + "media/pwa-ios-en.70e8c8c1.mp4",
                rt = i.p + "media/pwa-ios-ru.hevc.e2942e43.mp4",
                st = i.p + "media/pwa-ios-ru.30cdac5e.mp4",
                at = i.p + "img/logo.f3c0d4bc3.svg",
                ot = {
                    logo: {
                        white: r,
                        normal: n
                    },
                    iosInstructionVideo: {
                        default: [{
                            src: it,
                            type: "video/mp4; codecs=hevc"
                        }, {
                            src: nt,
                            type: "video/mp4"
                        }],
                        ru: [{
                            src: rt,
                            type: "video/mp4; codecs=hevc"
                        }, {
                            src: st,
                            type: "video/mp4"
                        }]
                    },
                    mobilePWATooltipImages: {
                        [Pe.p.PLATFORM_ANDROID]: {
                            ru: Re(),
                            en: Ee()
                        },
                        [Pe.p.PLATFORM_IOS]: {
                            ru: Ve(),
                            en: Be()
                        }
                    },
                    burgerPwaImage: Ze(),
                    cashbackTimerBackground: N(),
                    cashbackTimerTight: E(),
                    casinoCashbackModal: {
                        header: [l(), d()],
                        footer: [f(), y()],
                        outsidePic: p()
                    },
                    vipDomain: {
                        logo: at
                    },
                    freeMoney: {
                        stepsModal: {
                            coinImage: Ae()
                        },
                        coins: {
                            coinIcon: fe(),
                            coinModalMain: ye()
                        },
                        background: {
                            bear: ve()
                        },
                        pwaBonus: {
                            phonesEn: Se(),
                            phonesRu: Se(),
                            phonesMobileEn: Ce(),
                            phonesMobileRu: Ce()
                        },
                        cashback: {
                            machine: pe(),
                            machineMobile: ce(),
                            coin: ae(),
                            coinMobile: re()
                        },
                        loyalty: {
                            background: ie(),
                            backgroundMobile: ee()
                        },
                        lottery: {
                            icon: "lotteryLogo"
                        },
                        clicker: {
                            image: le(),
                            imageMobile: de()
                        },
                        referral: {
                            image: Le(),
                            imageMobile: Oe()
                        }
                    },
                    poker: {
                        pokerTable: R(),
                        logo: Ne
                    },
                    forbiddenAuth: {
                        image: {
                            webp: Z(),
                            png: $()
                        },
                        imageWoman: {
                            webp: z(),
                            png: X()
                        }
                    },
                    bonuses: {
                        bonus500: a(),
                        expressBonus: G(),
                        cashback: c(),
                        expressCoins: {
                            expressCoin1: v(),
                            expressCoin2: S(),
                            expressCoin3: C(),
                            expressCoin4: O(),
                            expressCoin5: F(),
                            expressCoin4m: L(),
                            expressCoin5m: A()
                        },
                        notificationPopup: {
                            imageDesktop: B(),
                            imageMobile: V()
                        }
                    },
                    banners: {
                        cashback: Ie(),
                        bonus: qe()
                    },
                    cybersport: {
                        logoForStream: "cybersport-team-stub"
                    },
                    slider: {
                        increaseBonusImagesByBrand: {
                            en: {
                                png: We(),
                                webp: Ye()
                            },
                            ru: {
                                png: Je(),
                                webp: tt()
                            }
                        }
                    },
                    installAndroid: {
                        notification: He
                    }
                }
        },
        631526: (e, t, i) => {
            "use strict";
            i.d(t, {
                p: () => a
            });
            var n = i(166252),
                r = i(982090);
            const s = "registration_form_crypto_enabled",
                a = () => {
                    const {
                        value: e
                    } = (0, r.y)(s), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isCryptoRegistrationAllowed: t
                    }
                }
        },
        893279: (e, t, i) => {
            "use strict";
            i.d(t, {
                a: () => a
            });
            var n = i(166252),
                r = i(982090);
            const s = "new_currency_ton",
                a = () => {
                    const {
                        value: e
                    } = (0, r.y)(s), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isTonAvailable: t
                    }
                }
        },
        643422: (e, t, i) => {
            "use strict";
            i.d(t, {
                I: () => a
            });
            var n = i(166252),
                r = i(982090);
            const s = "ff-limitation-of-fiat-currencies",
                a = () => {
                    const {
                        value: e
                    } = (0, r.y)(s), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isLimitationOfFiatCurrencies: t
                    }
                }
        },
        899437: (e, t, i) => {
            "use strict";
            i.d(t, {
                _: () => a
            });
            var n = i(166252),
                r = i(982090);
            const s = "growth-5284-new-crypto-currencies",
                a = () => {
                    const {
                        value: e
                    } = (0, r.y)(s), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isNewCurrenciesAvailable: t
                    }
                }
        },
        56101: (e, t, i) => {
            "use strict";
            i.d(t, {
                e: () => f
            });
            var n = i(166252),
                r = i(716082),
                s = i(982090);
            const a = "ff-azeri-lang-enable-ls",
                o = "ff-turkish-lang-enable-ls",
                c = "ff-uzbek-lang-enable-ls",
                u = "ff-thailand-lang-enable-ls",
                p = "ff-bengali-lang-enable-ls",
                g = "ff-indonesian-lang-enable-ls",
                l = "ff-melayu-lang-enable-ls",
                h = "ls-ff-route-2705-chinese-lang-enable",
                d = "ls-ff-route-2705-kazakh-lang-enable",
                m = "on",
                f = () => {
                    const e = [{
                            flag: a,
                            lang: r.bP.LANG_AZ.lang
                        }, {
                            flag: o,
                            lang: r.bP.LANG_TR.lang
                        }, {
                            flag: c,
                            lang: r.bP.LANG_UZ.lang
                        }, {
                            flag: u,
                            lang: r.bP.LANG_TH.lang
                        }, {
                            flag: p,
                            lang: r.bP.LANG_BD.lang
                        }, {
                            flag: g,
                            lang: r.bP.LANG_ID.lang
                        }, {
                            flag: l,
                            lang: r.bP.LANG_MS.lang
                        }, {
                            flag: h,
                            lang: r.bP.LANG_CN.lang
                        }, {
                            flag: d,
                            lang: r.bP.LANG_KZ.lang
                        }],
                        t = e.map((({
                            flag: e
                        }) => (0, s.y)(e))),
                        i = (0, n.Fl)((() => new Set(e.map(((e, i) => {
                            var n;
                            return (null == (n = t[i]) ? void 0 : n.value.value) === m ? void 0 : e.lang
                        })).filter(Boolean))));
                    return {
                        exclusionLanguages: i
                    }
                }
        },
        72258: (e, t, i) => {
            "use strict";
            i.d(t, {
                e: () => o
            });
            var n = i(166252),
                r = i(716082),
                s = i(982090);
            const a = "new_langs_enabled",
                o = () => {
                    const {
                        value: e
                    } = (0, s.y)(a), t = (0, n.Fl)((() => "on" === e.value)), i = new Set([r.bP.LANG_VI.isoKey]);
                    return {
                        isNewLanguagesEnabled: t,
                        newLanguages: i
                    }
                }
        },
        773145: (e, t, i) => {
            "use strict";
            i.d(t, {
                C: () => a
            });
            var n = i(166252),
                r = i(982090);
            const s = "route-2134-tagal-language-on",
                a = () => {
                    const {
                        value: e
                    } = (0, r.y)(s), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isTagalLanguagesEnabled: t
                    }
                }
        },
        615459: (e, t, i) => {
            "use strict";
            i.d(t, {
                j: () => s
            });
            var n = i(166252),
                r = i(280894);
            const s = () => {
                const e = (0, r.oR)(),
                    t = (0, n.Fl)((() => e.getters.isMobile ? "30px" : "40px")),
                    i = (0, n.Fl)((() => !e.getters.socketAlive)),
                    s = (0, n.Fl)((() => e.getters.isMobile ? "static" : "absolute")),
                    a = (0, n.Fl)((() => i.value && !["static", "absolute"].includes(s.value) ? t.value : "0px"));
                return {
                    isVisible: i,
                    position: s,
                    indent: a,
                    height: t
                }
            }
        },
        142291: (e, t, i) => {
            "use strict";
            i.d(t, {
                c: () => r
            });
            var n = i(934405);
            const r = (e, t, i) => e.find((e => {
                const r = (0, n.HD)(e) ? e : e.countryCode,
                    s = !(0, n.HD)(e) && e.subdivisions || [],
                    a = !(0, n.HD)(e) && e.notSubdivisions || [];
                return t === r && (!a.includes(i) && (!(s.length > 0 && !s.includes(i)) && !(a.length > 0 && a.includes(i))))
            }))
        },
        998643: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => n
            });
            const n = {
                queryClientConfig: {
                    defaultOptions: {
                        queries: {
                            refetchOnMount: !1,
                            refetchOnReconnect: !1,
                            refetchOnWindowFocus: !1,
                            staleTime: Number.POSITIVE_INFINITY,
                            refetchInterval: Number.POSITIVE_INFINITY
                        }
                    }
                }
            }
        },
        992815: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/poker-table.e2769cd43-900.png 900w",
                images: [{
                    path: i.p + "img/poker-table.e2769cd43-900.png",
                    width: 900,
                    height: 559
                }],
                src: i.p + "img/poker-table.e2769cd43-900.png",
                toString: function() {
                    return i.p + "img/poker-table.e2769cd43-900.png"
                },
                width: 900,
                height: 559
            }
        },
        757893: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bonus-500-luckystar.b97722060-274.png 274w",
                images: [{
                    path: i.p + "img/bonus-500-luckystar.b97722060-274.png",
                    width: 274,
                    height: 337
                }],
                src: i.p + "img/bonus-500-luckystar.b97722060-274.png",
                toString: function() {
                    return i.p + "img/bonus-500-luckystar.b97722060-274.png"
                },
                width: 274,
                height: 337
            }
        },
        475781: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bonus-500.ff9ad472c-477.png 477w",
                images: [{
                    path: i.p + "img/bonus-500.ff9ad472c-477.png",
                    width: 477,
                    height: 588
                }],
                src: i.p + "img/bonus-500.ff9ad472c-477.png",
                toString: function() {
                    return i.p + "img/bonus-500.ff9ad472c-477.png"
                },
                width: 477,
                height: 588
            }
        },
        637924: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback-luckystar.4d7d3b80a-274.png 274w",
                images: [{
                    path: i.p + "img/cashback-luckystar.4d7d3b80a-274.png",
                    width: 274,
                    height: 337
                }],
                src: i.p + "img/cashback-luckystar.4d7d3b80a-274.png",
                toString: function() {
                    return i.p + "img/cashback-luckystar.4d7d3b80a-274.png"
                },
                width: 274,
                height: 337
            }
        },
        588490: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback.092c124f0-477.png 477w",
                images: [{
                    path: i.p + "img/cashback.092c124f0-477.png",
                    width: 477,
                    height: 588
                }],
                src: i.p + "img/cashback.092c124f0-477.png",
                toString: function() {
                    return i.p + "img/cashback.092c124f0-477.png"
                },
                width: 477,
                height: 588
            }
        },
        293693: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/chip-1.b186aa8f8-630.png 630w",
                images: [{
                    path: i.p + "img/chip-1.b186aa8f8-630.png",
                    width: 630,
                    height: 468
                }],
                src: i.p + "img/chip-1.b186aa8f8-630.png",
                toString: function() {
                    return i.p + "img/chip-1.b186aa8f8-630.png"
                },
                width: 630,
                height: 468
            }
        },
        582576: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/chip-2.80f51199c-399.png 399w",
                images: [{
                    path: i.p + "img/chip-2.80f51199c-399.png",
                    width: 399,
                    height: 529
                }],
                src: i.p + "img/chip-2.80f51199c-399.png",
                toString: function() {
                    return i.p + "img/chip-2.80f51199c-399.png"
                },
                width: 399,
                height: 529
            }
        },
        251972: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/chip-3.2b98465b0-549.png 549w",
                images: [{
                    path: i.p + "img/chip-3.2b98465b0-549.png",
                    width: 549,
                    height: 599
                }],
                src: i.p + "img/chip-3.2b98465b0-549.png",
                toString: function() {
                    return i.p + "img/chip-3.2b98465b0-549.png"
                },
                width: 549,
                height: 599
            }
        },
        903588: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/chip-4.91eccfc49-285.png 285w",
                images: [{
                    path: i.p + "img/chip-4.91eccfc49-285.png",
                    width: 285,
                    height: 326
                }],
                src: i.p + "img/chip-4.91eccfc49-285.png",
                toString: function() {
                    return i.p + "img/chip-4.91eccfc49-285.png"
                },
                width: 285,
                height: 326
            }
        },
        187722: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/chip-5.c807a1a5c-391.png 391w",
                images: [{
                    path: i.p + "img/chip-5.c807a1a5c-391.png",
                    width: 391,
                    height: 391
                }],
                src: i.p + "img/chip-5.c807a1a5c-391.png",
                toString: function() {
                    return i.p + "img/chip-5.c807a1a5c-391.png"
                },
                width: 391,
                height: 391
            }
        },
        869349: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/footer-1.b8f2e8566-127.png 127w",
                images: [{
                    path: i.p + "img/footer-1.b8f2e8566-127.png",
                    width: 127,
                    height: 148
                }],
                src: i.p + "img/footer-1.b8f2e8566-127.png",
                toString: function() {
                    return i.p + "img/footer-1.b8f2e8566-127.png"
                },
                width: 127,
                height: 148
            }
        },
        992197: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/footer-2.ddd5d6706-180.png 180w",
                images: [{
                    path: i.p + "img/footer-2.ddd5d6706-180.png",
                    width: 180,
                    height: 180
                }],
                src: i.p + "img/footer-2.ddd5d6706-180.png",
                toString: function() {
                    return i.p + "img/footer-2.ddd5d6706-180.png"
                },
                width: 180,
                height: 180
            }
        },
        295016: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/header-1.dfddc18dc-184.png 184w",
                images: [{
                    path: i.p + "img/header-1.dfddc18dc-184.png",
                    width: 184,
                    height: 249
                }],
                src: i.p + "img/header-1.dfddc18dc-184.png",
                toString: function() {
                    return i.p + "img/header-1.dfddc18dc-184.png"
                },
                width: 184,
                height: 249
            }
        },
        753101: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/header-2.92ca75eb4-275.png 275w",
                images: [{
                    path: i.p + "img/header-2.92ca75eb4-275.png",
                    width: 275,
                    height: 300
                }],
                src: i.p + "img/header-2.92ca75eb4-275.png",
                toString: function() {
                    return i.p + "img/header-2.92ca75eb4-275.png"
                },
                width: 275,
                height: 300
            }
        },
        202008: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/outside-pic.ea001d549-315.png 315w",
                images: [{
                    path: i.p + "img/outside-pic.ea001d549-315.png",
                    width: 315,
                    height: 234
                }],
                src: i.p + "img/outside-pic.ea001d549-315.png",
                toString: function() {
                    return i.p + "img/outside-pic.ea001d549-315.png"
                },
                width: 315,
                height: 234
            }
        },
        149592: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-bonus.8f63e79b8-477.png 477w",
                images: [{
                    path: i.p + "img/express-bonus.8f63e79b8-477.png",
                    width: 477,
                    height: 588
                }],
                src: i.p + "img/express-bonus.8f63e79b8-477.png",
                toString: function() {
                    return i.p + "img/express-bonus.8f63e79b8-477.png"
                },
                width: 477,
                height: 588
            }
        },
        409948: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-coupon-1.90f9143ac-651.png 651w",
                images: [{
                    path: i.p + "img/express-coupon-1.90f9143ac-651.png",
                    width: 651,
                    height: 610
                }],
                src: i.p + "img/express-coupon-1.90f9143ac-651.png",
                toString: function() {
                    return i.p + "img/express-coupon-1.90f9143ac-651.png"
                },
                width: 651,
                height: 610
            }
        },
        242835: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-coupon-2.b0a9246f8-482.png 482w",
                images: [{
                    path: i.p + "img/express-coupon-2.b0a9246f8-482.png",
                    width: 482,
                    height: 334
                }],
                src: i.p + "img/express-coupon-2.b0a9246f8-482.png",
                toString: function() {
                    return i.p + "img/express-coupon-2.b0a9246f8-482.png"
                },
                width: 482,
                height: 334
            }
        },
        309443: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-coupon-3.e0cdba214-796.png 796w",
                images: [{
                    path: i.p + "img/express-coupon-3.e0cdba214-796.png",
                    width: 796,
                    height: 384
                }],
                src: i.p + "img/express-coupon-3.e0cdba214-796.png",
                toString: function() {
                    return i.p + "img/express-coupon-3.e0cdba214-796.png"
                },
                width: 796,
                height: 384
            }
        },
        759456: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-coupon-4-m.99cf57f5c-237.png 237w",
                images: [{
                    path: i.p + "img/express-coupon-4-m.99cf57f5c-237.png",
                    width: 237,
                    height: 471
                }],
                src: i.p + "img/express-coupon-4-m.99cf57f5c-237.png",
                toString: function() {
                    return i.p + "img/express-coupon-4-m.99cf57f5c-237.png"
                },
                width: 237,
                height: 471
            }
        },
        31716: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-coupon-4.ffbacc8e3-658.png 658w",
                images: [{
                    path: i.p + "img/express-coupon-4.ffbacc8e3-658.png",
                    width: 658,
                    height: 536
                }],
                src: i.p + "img/express-coupon-4.ffbacc8e3-658.png",
                toString: function() {
                    return i.p + "img/express-coupon-4.ffbacc8e3-658.png"
                },
                width: 658,
                height: 536
            }
        },
        906349: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-coupon-5-m.36c37f6c3-330.png 330w",
                images: [{
                    path: i.p + "img/express-coupon-5-m.36c37f6c3-330.png",
                    width: 330,
                    height: 573
                }],
                src: i.p + "img/express-coupon-5-m.36c37f6c3-330.png",
                toString: function() {
                    return i.p + "img/express-coupon-5-m.36c37f6c3-330.png"
                },
                width: 330,
                height: 573
            }
        },
        604955: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/express-coupon-5.b84584333-908.png 908w",
                images: [{
                    path: i.p + "img/express-coupon-5.b84584333-908.png",
                    width: 908,
                    height: 344
                }],
                src: i.p + "img/express-coupon-5.b84584333-908.png",
                toString: function() {
                    return i.p + "img/express-coupon-5.b84584333-908.png"
                },
                width: 908,
                height: 344
            }
        },
        779915: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback-circle-luckystar.5bcd9ac73-164.png 164w",
                images: [{
                    path: i.p + "img/cashback-circle-luckystar.5bcd9ac73-164.png",
                    width: 164,
                    height: 172
                }],
                src: i.p + "img/cashback-circle-luckystar.5bcd9ac73-164.png",
                toString: function() {
                    return i.p + "img/cashback-circle-luckystar.5bcd9ac73-164.png"
                },
                width: 164,
                height: 172
            }
        },
        902327: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback-circle.42f6ae9c8-140.png 140w",
                images: [{
                    path: i.p + "img/cashback-circle.42f6ae9c8-140.png",
                    width: 140,
                    height: 152
                }],
                src: i.p + "img/cashback-circle.42f6ae9c8-140.png",
                toString: function() {
                    return i.p + "img/cashback-circle.42f6ae9c8-140.png"
                },
                width: 140,
                height: 152
            }
        },
        874418: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback-img-luckystar.71547b5f6-232.png 232w",
                images: [{
                    path: i.p + "img/cashback-img-luckystar.71547b5f6-232.png",
                    width: 232,
                    height: 268
                }],
                src: i.p + "img/cashback-img-luckystar.71547b5f6-232.png",
                toString: function() {
                    return i.p + "img/cashback-img-luckystar.71547b5f6-232.png"
                },
                width: 232,
                height: 268
            }
        },
        745751: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback-img.0a9e09fba-232.png 232w",
                images: [{
                    path: i.p + "img/cashback-img.0a9e09fba-232.png",
                    width: 232,
                    height: 268
                }],
                src: i.p + "img/cashback-img.0a9e09fba-232.png",
                toString: function() {
                    return i.p + "img/cashback-img.0a9e09fba-232.png"
                },
                width: 232,
                height: 268
            }
        },
        846570: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/imageDesktop.70271e338-426.png 426w",
                images: [{
                    path: i.p + "img/imageDesktop.70271e338-426.png",
                    width: 426,
                    height: 273
                }],
                src: i.p + "img/imageDesktop.70271e338-426.png",
                toString: function() {
                    return i.p + "img/imageDesktop.70271e338-426.png"
                },
                width: 426,
                height: 273
            }
        },
        669926: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/imageDesktopLuckystar.92a9facd2-426.png 426w",
                images: [{
                    path: i.p + "img/imageDesktopLuckystar.92a9facd2-426.png",
                    width: 426,
                    height: 273
                }],
                src: i.p + "img/imageDesktopLuckystar.92a9facd2-426.png",
                toString: function() {
                    return i.p + "img/imageDesktopLuckystar.92a9facd2-426.png"
                },
                width: 426,
                height: 273
            }
        },
        640600: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/imageMobile.7de97808d-352.png 352w",
                images: [{
                    path: i.p + "img/imageMobile.7de97808d-352.png",
                    width: 352,
                    height: 278
                }],
                src: i.p + "img/imageMobile.7de97808d-352.png",
                toString: function() {
                    return i.p + "img/imageMobile.7de97808d-352.png"
                },
                width: 352,
                height: 278
            }
        },
        495140: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/imageMobileLuckystar.34057305f-352.png 352w",
                images: [{
                    path: i.p + "img/imageMobileLuckystar.34057305f-352.png",
                    width: 352,
                    height: 278
                }],
                src: i.p + "img/imageMobileLuckystar.34057305f-352.png",
                toString: function() {
                    return i.p + "img/imageMobileLuckystar.34057305f-352.png"
                },
                width: 352,
                height: 278
            }
        },
        126850: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bear.7b736fe37-290.webp 290w",
                images: [{
                    path: i.p + "img/bear.7b736fe37-290.webp",
                    width: 290,
                    height: 250
                }],
                src: i.p + "img/bear.7b736fe37-290.webp",
                toString: function() {
                    return i.p + "img/bear.7b736fe37-290.webp"
                },
                width: 290,
                height: 250
            }
        },
        930472: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bear.2291b4b10-290.png 290w",
                images: [{
                    path: i.p + "img/bear.2291b4b10-290.png",
                    width: 290,
                    height: 250
                }],
                src: i.p + "img/bear.2291b4b10-290.png",
                toString: function() {
                    return i.p + "img/bear.2291b4b10-290.png"
                },
                width: 290,
                height: 250
            }
        },
        959549: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/clover.d8ff2b176-234.webp 234w",
                images: [{
                    path: i.p + "img/clover.d8ff2b176-234.webp",
                    width: 234,
                    height: 243
                }],
                src: i.p + "img/clover.d8ff2b176-234.webp",
                toString: function() {
                    return i.p + "img/clover.d8ff2b176-234.webp"
                },
                width: 234,
                height: 243
            }
        },
        309138: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/clover.fb691d276-234.png 234w",
                images: [{
                    path: i.p + "img/clover.fb691d276-234.png",
                    width: 234,
                    height: 243
                }],
                src: i.p + "img/clover.fb691d276-234.png",
                toString: function() {
                    return i.p + "img/clover.fb691d276-234.png"
                },
                width: 234,
                height: 243
            }
        },
        185084: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/woman.bfd6b6540-780.png 780w",
                images: [{
                    path: i.p + "img/woman.bfd6b6540-780.png",
                    width: 780,
                    height: 370
                }],
                src: i.p + "img/woman.bfd6b6540-780.png",
                toString: function() {
                    return i.p + "img/woman.bfd6b6540-780.png"
                },
                width: 780,
                height: 370
            }
        },
        659486: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/woman.bcda85a02-780.webp 780w",
                images: [{
                    path: i.p + "img/woman.bcda85a02-780.webp",
                    width: 780,
                    height: 370
                }],
                src: i.p + "img/woman.bcda85a02-780.webp",
                toString: function() {
                    return i.p + "img/woman.bcda85a02-780.webp"
                },
                width: 780,
                height: 370
            }
        },
        24587: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bg-luckystar.3b4569bc4-1019.png 1019w",
                images: [{
                    path: i.p + "img/bg-luckystar.3b4569bc4-1019.png",
                    width: 1019,
                    height: 902
                }],
                src: i.p + "img/bg-luckystar.3b4569bc4-1019.png",
                toString: function() {
                    return i.p + "img/bg-luckystar.3b4569bc4-1019.png"
                },
                width: 1019,
                height: 902
            }
        },
        940881: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bg-mobile-luckystar.d3f461157-690.png 690w",
                images: [{
                    path: i.p + "img/bg-mobile-luckystar.d3f461157-690.png",
                    width: 690,
                    height: 902
                }],
                src: i.p + "img/bg-mobile-luckystar.d3f461157-690.png",
                toString: function() {
                    return i.p + "img/bg-mobile-luckystar.d3f461157-690.png"
                },
                width: 690,
                height: 902
            }
        },
        278504: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bg-mobile.1279d7351-690.png 690w",
                images: [{
                    path: i.p + "img/bg-mobile.1279d7351-690.png",
                    width: 690,
                    height: 902
                }],
                src: i.p + "img/bg-mobile.1279d7351-690.png",
                toString: function() {
                    return i.p + "img/bg-mobile.1279d7351-690.png"
                },
                width: 690,
                height: 902
            }
        },
        32429: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bg.51f8fae5b-1019.png 1019w",
                images: [{
                    path: i.p + "img/bg.51f8fae5b-1019.png",
                    width: 1019,
                    height: 902
                }],
                src: i.p + "img/bg.51f8fae5b-1019.png",
                toString: function() {
                    return i.p + "img/bg.51f8fae5b-1019.png"
                },
                width: 1019,
                height: 902
            }
        },
        15940: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coin-mobile.13c177c02-314.png 314w",
                images: [{
                    path: i.p + "img/coin-mobile.13c177c02-314.png",
                    width: 314,
                    height: 343
                }],
                src: i.p + "img/coin-mobile.13c177c02-314.png",
                toString: function() {
                    return i.p + "img/coin-mobile.13c177c02-314.png"
                },
                width: 314,
                height: 343
            }
        },
        298947: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coin-mobile_luckystar.ea1bc44b6-312.png 312w",
                images: [{
                    path: i.p + "img/coin-mobile_luckystar.ea1bc44b6-312.png",
                    width: 312,
                    height: 340
                }],
                src: i.p + "img/coin-mobile_luckystar.ea1bc44b6-312.png",
                toString: function() {
                    return i.p + "img/coin-mobile_luckystar.ea1bc44b6-312.png"
                },
                width: 312,
                height: 340
            }
        },
        830046: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coin.05d04a569-479.png 479w",
                images: [{
                    path: i.p + "img/coin.05d04a569-479.png",
                    width: 479,
                    height: 479
                }],
                src: i.p + "img/coin.05d04a569-479.png",
                toString: function() {
                    return i.p + "img/coin.05d04a569-479.png"
                },
                width: 479,
                height: 479
            }
        },
        987137: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coin_luckystar.29aaba59e-480.png 480w",
                images: [{
                    path: i.p + "img/coin_luckystar.29aaba59e-480.png",
                    width: 480,
                    height: 480
                }],
                src: i.p + "img/coin_luckystar.29aaba59e-480.png",
                toString: function() {
                    return i.p + "img/coin_luckystar.29aaba59e-480.png"
                },
                width: 480,
                height: 480
            }
        },
        226475: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/machine-mobile.05749859d-462.png 462w",
                images: [{
                    path: i.p + "img/machine-mobile.05749859d-462.png",
                    width: 462,
                    height: 596
                }],
                src: i.p + "img/machine-mobile.05749859d-462.png",
                toString: function() {
                    return i.p + "img/machine-mobile.05749859d-462.png"
                },
                width: 462,
                height: 596
            }
        },
        640271: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/machine-mobile_luckystar.2e0900109-690.png 690w",
                images: [{
                    path: i.p + "img/machine-mobile_luckystar.2e0900109-690.png",
                    width: 690,
                    height: 598
                }],
                src: i.p + "img/machine-mobile_luckystar.2e0900109-690.png",
                toString: function() {
                    return i.p + "img/machine-mobile_luckystar.2e0900109-690.png"
                },
                width: 690,
                height: 598
            }
        },
        96629: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/machine.5215290ed-998.png 998w",
                images: [{
                    path: i.p + "img/machine.5215290ed-998.png",
                    width: 998,
                    height: 798
                }],
                src: i.p + "img/machine.5215290ed-998.png",
                toString: function() {
                    return i.p + "img/machine.5215290ed-998.png"
                },
                width: 998,
                height: 798
            }
        },
        537604: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/machine_luckystar.9d7000595-1420.png 1420w",
                images: [{
                    path: i.p + "img/machine_luckystar.9d7000595-1420.png",
                    width: 1420,
                    height: 798
                }],
                src: i.p + "img/machine_luckystar.9d7000595-1420.png",
                toString: function() {
                    return i.p + "img/machine_luckystar.9d7000595-1420.png"
                },
                width: 1420,
                height: 798
            }
        },
        788873: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/image.ddb0a49ea-920.png 920w",
                images: [{
                    path: i.p + "img/image.ddb0a49ea-920.png",
                    width: 920,
                    height: 712
                }],
                src: i.p + "img/image.ddb0a49ea-920.png",
                toString: function() {
                    return i.p + "img/image.ddb0a49ea-920.png"
                },
                width: 920,
                height: 712
            }
        },
        996903: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/imageMobile.69a846d55-790.png 790w",
                images: [{
                    path: i.p + "img/imageMobile.69a846d55-790.png",
                    width: 790,
                    height: 1086
                }],
                src: i.p + "img/imageMobile.69a846d55-790.png",
                toString: function() {
                    return i.p + "img/imageMobile.69a846d55-790.png"
                },
                width: 790,
                height: 1086
            }
        },
        124202: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coinIcon.a2a446529-111.png 111w",
                images: [{
                    path: i.p + "img/coinIcon.a2a446529-111.png",
                    width: 111,
                    height: 111
                }],
                src: i.p + "img/coinIcon.a2a446529-111.png",
                toString: function() {
                    return i.p + "img/coinIcon.a2a446529-111.png"
                },
                width: 111,
                height: 111
            }
        },
        268084: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coinIconLuckystar.694466c56-111.png 111w",
                images: [{
                    path: i.p + "img/coinIconLuckystar.694466c56-111.png",
                    width: 111,
                    height: 106
                }],
                src: i.p + "img/coinIconLuckystar.694466c56-111.png",
                toString: function() {
                    return i.p + "img/coinIconLuckystar.694466c56-111.png"
                },
                width: 111,
                height: 106
            }
        },
        923771: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coinModalMain.dcf56194c-260.png 260w",
                images: [{
                    path: i.p + "img/coinModalMain.dcf56194c-260.png",
                    width: 260,
                    height: 261
                }],
                src: i.p + "img/coinModalMain.dcf56194c-260.png",
                toString: function() {
                    return i.p + "img/coinModalMain.dcf56194c-260.png"
                },
                width: 260,
                height: 261
            }
        },
        833707: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/coinModalMainLuckystar.35401e03c-260.png 260w",
                images: [{
                    path: i.p + "img/coinModalMainLuckystar.35401e03c-260.png",
                    width: 260,
                    height: 247
                }],
                src: i.p + "img/coinModalMainLuckystar.35401e03c-260.png",
                toString: function() {
                    return i.p + "img/coinModalMainLuckystar.35401e03c-260.png"
                },
                width: 260,
                height: 247
            }
        },
        47096: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/phones-en_luckystar.e8314f1e8-1286.png 1286w",
                images: [{
                    path: i.p + "img/phones-en_luckystar.e8314f1e8-1286.png",
                    width: 1286,
                    height: 1046
                }],
                src: i.p + "img/phones-en_luckystar.e8314f1e8-1286.png",
                toString: function() {
                    return i.p + "img/phones-en_luckystar.e8314f1e8-1286.png"
                },
                width: 1286,
                height: 1046
            }
        },
        803679: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/phones-ru_luckystar.5cc6a9deb-1286.png 1286w",
                images: [{
                    path: i.p + "img/phones-ru_luckystar.5cc6a9deb-1286.png",
                    width: 1286,
                    height: 1046
                }],
                src: i.p + "img/phones-ru_luckystar.5cc6a9deb-1286.png",
                toString: function() {
                    return i.p + "img/phones-ru_luckystar.5cc6a9deb-1286.png"
                },
                width: 1286,
                height: 1046
            }
        },
        276766: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/phones.2d1888519-1286.png 1286w",
                images: [{
                    path: i.p + "img/phones.2d1888519-1286.png",
                    width: 1286,
                    height: 1046
                }],
                src: i.p + "img/phones.2d1888519-1286.png",
                toString: function() {
                    return i.p + "img/phones.2d1888519-1286.png"
                },
                width: 1286,
                height: 1046
            }
        },
        466032: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/phonesMobile.2373da0ed-790.png 790w",
                images: [{
                    path: i.p + "img/phonesMobile.2373da0ed-790.png",
                    width: 790,
                    height: 722
                }],
                src: i.p + "img/phonesMobile.2373da0ed-790.png",
                toString: function() {
                    return i.p + "img/phonesMobile.2373da0ed-790.png"
                },
                width: 790,
                height: 722
            }
        },
        698424: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/phonesMobileEn_luckystar.6c7a14cd2-967.png 967w",
                images: [{
                    path: i.p + "img/phonesMobileEn_luckystar.6c7a14cd2-967.png",
                    width: 967,
                    height: 906
                }],
                src: i.p + "img/phonesMobileEn_luckystar.6c7a14cd2-967.png",
                toString: function() {
                    return i.p + "img/phonesMobileEn_luckystar.6c7a14cd2-967.png"
                },
                width: 967,
                height: 906
            }
        },
        277083: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/phonesMobileRu_luckystar.0549f5c8c-979.png 979w",
                images: [{
                    path: i.p + "img/phonesMobileRu_luckystar.0549f5c8c-979.png",
                    width: 979,
                    height: 904
                }],
                src: i.p + "img/phonesMobileRu_luckystar.0549f5c8c-979.png",
                toString: function() {
                    return i.p + "img/phonesMobileRu_luckystar.0549f5c8c-979.png"
                },
                width: 979,
                height: 904
            }
        },
        109869: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bear.a11bc64c8-968.png 968w",
                images: [{
                    path: i.p + "img/bear.a11bc64c8-968.png",
                    width: 968,
                    height: 1143
                }],
                src: i.p + "img/bear.a11bc64c8-968.png",
                toString: function() {
                    return i.p + "img/bear.a11bc64c8-968.png"
                },
                width: 968,
                height: 1143
            }
        },
        132887: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bear_luckystar.8b6d02f2c-704.png 704w",
                images: [{
                    path: i.p + "img/bear_luckystar.8b6d02f2c-704.png",
                    width: 704,
                    height: 736
                }],
                src: i.p + "img/bear_luckystar.8b6d02f2c-704.png",
                toString: function() {
                    return i.p + "img/bear_luckystar.8b6d02f2c-704.png"
                },
                width: 704,
                height: 736
            }
        },
        974936: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/desktop.3464f55ef-1020.png 1020w",
                images: [{
                    path: i.p + "img/desktop.3464f55ef-1020.png",
                    width: 1020,
                    height: 776
                }],
                src: i.p + "img/desktop.3464f55ef-1020.png",
                toString: function() {
                    return i.p + "img/desktop.3464f55ef-1020.png"
                },
                width: 1020,
                height: 776
            }
        },
        890741: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/mobile.4fd2cb8f8-426.png 426w",
                images: [{
                    path: i.p + "img/mobile.4fd2cb8f8-426.png",
                    width: 426,
                    height: 361
                }],
                src: i.p + "img/mobile.4fd2cb8f8-426.png",
                toString: function() {
                    return i.p + "img/mobile.4fd2cb8f8-426.png"
                },
                width: 426,
                height: 361
            }
        },
        781993: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/1win-coin.911927093-35.png 35w",
                images: [{
                    path: i.p + "img/1win-coin.911927093-35.png",
                    width: 35,
                    height: 36
                }],
                src: i.p + "img/1win-coin.911927093-35.png",
                toString: function() {
                    return i.p + "img/1win-coin.911927093-35.png"
                },
                width: 35,
                height: 36
            }
        },
        925205: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/lucky-coin.d8890e9d9-35.png 35w",
                images: [{
                    path: i.p + "img/lucky-coin.d8890e9d9-35.png",
                    width: 35,
                    height: 33
                }],
                src: i.p + "img/lucky-coin.d8890e9d9-35.png",
                toString: function() {
                    return i.p + "img/lucky-coin.d8890e9d9-35.png"
                },
                width: 35,
                height: 33
            }
        },
        494515: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bonus-luckystar.faa29716f-540.png 540w",
                images: [{
                    path: i.p + "img/bonus-luckystar.faa29716f-540.png",
                    width: 540,
                    height: 640
                }],
                src: i.p + "img/bonus-luckystar.faa29716f-540.png",
                toString: function() {
                    return i.p + "img/bonus-luckystar.faa29716f-540.png"
                },
                width: 540,
                height: 640
            }
        },
        139107: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/bonus.8be9e8f98-362.png 362w",
                images: [{
                    path: i.p + "img/bonus.8be9e8f98-362.png",
                    width: 362,
                    height: 429
                }],
                src: i.p + "img/bonus.8be9e8f98-362.png",
                toString: function() {
                    return i.p + "img/bonus.8be9e8f98-362.png"
                },
                width: 362,
                height: 429
            }
        },
        649737: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback-luckystar.afac8af9d-540.png 540w",
                images: [{
                    path: i.p + "img/cashback-luckystar.afac8af9d-540.png",
                    width: 540,
                    height: 640
                }],
                src: i.p + "img/cashback-luckystar.afac8af9d-540.png",
                toString: function() {
                    return i.p + "img/cashback-luckystar.afac8af9d-540.png"
                },
                width: 540,
                height: 640
            }
        },
        600708: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/cashback.f5a548e68-399.png 399w",
                images: [{
                    path: i.p + "img/cashback.f5a548e68-399.png",
                    width: 399,
                    height: 472
                }],
                src: i.p + "img/cashback.f5a548e68-399.png",
                toString: function() {
                    return i.p + "img/cashback.f5a548e68-399.png"
                },
                width: 399,
                height: 472
            }
        },
        814488: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_android_en.b229a444a-690.png 690w",
                images: [{
                    path: i.p + "img/pwa_android_en.b229a444a-690.png",
                    width: 690,
                    height: 450
                }],
                src: i.p + "img/pwa_android_en.b229a444a-690.png",
                toString: function() {
                    return i.p + "img/pwa_android_en.b229a444a-690.png"
                },
                width: 690,
                height: 450
            }
        },
        155677: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_android_en_luckystar.f5d1ec15e-609.png 609w",
                images: [{
                    path: i.p + "img/pwa_android_en_luckystar.f5d1ec15e-609.png",
                    width: 609,
                    height: 408
                }],
                src: i.p + "img/pwa_android_en_luckystar.f5d1ec15e-609.png",
                toString: function() {
                    return i.p + "img/pwa_android_en_luckystar.f5d1ec15e-609.png"
                },
                width: 609,
                height: 408
            }
        },
        316456: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_android_ru.fe3cd4bac-690.png 690w",
                images: [{
                    path: i.p + "img/pwa_android_ru.fe3cd4bac-690.png",
                    width: 690,
                    height: 450
                }],
                src: i.p + "img/pwa_android_ru.fe3cd4bac-690.png",
                toString: function() {
                    return i.p + "img/pwa_android_ru.fe3cd4bac-690.png"
                },
                width: 690,
                height: 450
            }
        },
        594088: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_android_ru_luckystar.37341d9b8-609.png 609w",
                images: [{
                    path: i.p + "img/pwa_android_ru_luckystar.37341d9b8-609.png",
                    width: 609,
                    height: 408
                }],
                src: i.p + "img/pwa_android_ru_luckystar.37341d9b8-609.png",
                toString: function() {
                    return i.p + "img/pwa_android_ru_luckystar.37341d9b8-609.png"
                },
                width: 609,
                height: 408
            }
        },
        531560: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_ios_en.f08ddb1e6-690.png 690w",
                images: [{
                    path: i.p + "img/pwa_ios_en.f08ddb1e6-690.png",
                    width: 690,
                    height: 450
                }],
                src: i.p + "img/pwa_ios_en.f08ddb1e6-690.png",
                toString: function() {
                    return i.p + "img/pwa_ios_en.f08ddb1e6-690.png"
                },
                width: 690,
                height: 450
            }
        },
        129664: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_ios_en_luckystar.589bac9fe-609.png 609w",
                images: [{
                    path: i.p + "img/pwa_ios_en_luckystar.589bac9fe-609.png",
                    width: 609,
                    height: 408
                }],
                src: i.p + "img/pwa_ios_en_luckystar.589bac9fe-609.png",
                toString: function() {
                    return i.p + "img/pwa_ios_en_luckystar.589bac9fe-609.png"
                },
                width: 609,
                height: 408
            }
        },
        335240: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_ios_ru.7693e541d-690.png 690w",
                images: [{
                    path: i.p + "img/pwa_ios_ru.7693e541d-690.png",
                    width: 690,
                    height: 450
                }],
                src: i.p + "img/pwa_ios_ru.7693e541d-690.png",
                toString: function() {
                    return i.p + "img/pwa_ios_ru.7693e541d-690.png"
                },
                width: 690,
                height: 450
            }
        },
        357523: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/pwa_ios_ru_luckystar.aed244bb7-609.png 609w",
                images: [{
                    path: i.p + "img/pwa_ios_ru_luckystar.aed244bb7-609.png",
                    width: 609,
                    height: 408
                }],
                src: i.p + "img/pwa_ios_ru_luckystar.aed244bb7-609.png",
                toString: function() {
                    return i.p + "img/pwa_ios_ru_luckystar.aed244bb7-609.png"
                },
                width: 609,
                height: 408
            }
        },
        723204: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/burger_pwa_card.a1ca62b40-195.png 195w",
                images: [{
                    path: i.p + "img/burger_pwa_card.a1ca62b40-195.png",
                    width: 195,
                    height: 198
                }],
                src: i.p + "img/burger_pwa_card.a1ca62b40-195.png",
                toString: function() {
                    return i.p + "img/burger_pwa_card.a1ca62b40-195.png"
                },
                width: 195,
                height: 198
            }
        },
        5792: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/burger_pwa_card_luckystar.0881e48e1-266.png 266w",
                images: [{
                    path: i.p + "img/burger_pwa_card_luckystar.0881e48e1-266.png",
                    width: 266,
                    height: 224
                }],
                src: i.p + "img/burger_pwa_card_luckystar.0881e48e1-266.png",
                toString: function() {
                    return i.p + "img/burger_pwa_card_luckystar.0881e48e1-266.png"
                },
                width: 266,
                height: 224
            }
        },
        931701: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/increase_bonus_en.6d0fd63a5-1024.png 1024w," + i.p + "img/increase_bonus_en.50f23d97f-760.png 760w," + i.p + "img/increase_bonus_en.ca28e80a6-400.png 400w," + i.p + "img/increase_bonus_en.f2603f395-320.png 320w",
                images: [{
                    path: i.p + "img/increase_bonus_en.6d0fd63a5-1024.png",
                    width: 1024,
                    height: 331
                }, {
                    path: i.p + "img/increase_bonus_en.50f23d97f-760.png",
                    width: 760,
                    height: 246
                }, {
                    path: i.p + "img/increase_bonus_en.ca28e80a6-400.png",
                    width: 400,
                    height: 129
                }, {
                    path: i.p + "img/increase_bonus_en.f2603f395-320.png",
                    width: 320,
                    height: 103
                }],
                src: i.p + "img/increase_bonus_en.f2603f395-320.png",
                toString: function() {
                    return i.p + "img/increase_bonus_en.f2603f395-320.png"
                },
                width: 320,
                height: 103
            }
        },
        533800: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/increase_bonus_en.9db42071f-1024.webp 1024w," + i.p + "img/increase_bonus_en.e4b6d1253-760.webp 760w," + i.p + "img/increase_bonus_en.80525e9fe-400.webp 400w," + i.p + "img/increase_bonus_en.36f6dd58c-320.webp 320w",
                images: [{
                    path: i.p + "img/increase_bonus_en.9db42071f-1024.webp",
                    width: 1024,
                    height: 331
                }, {
                    path: i.p + "img/increase_bonus_en.e4b6d1253-760.webp",
                    width: 760,
                    height: 246
                }, {
                    path: i.p + "img/increase_bonus_en.80525e9fe-400.webp",
                    width: 400,
                    height: 129
                }, {
                    path: i.p + "img/increase_bonus_en.36f6dd58c-320.webp",
                    width: 320,
                    height: 103
                }],
                src: i.p + "img/increase_bonus_en.36f6dd58c-320.webp",
                toString: function() {
                    return i.p + "img/increase_bonus_en.36f6dd58c-320.webp"
                },
                width: 320,
                height: 103
            }
        },
        407127: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/increase_bonus_ru.5b8a27bea-1024.png 1024w," + i.p + "img/increase_bonus_ru.e36209704-760.png 760w," + i.p + "img/increase_bonus_ru.6bdb3c512-400.png 400w," + i.p + "img/increase_bonus_ru.1f2ebceae-320.png 320w",
                images: [{
                    path: i.p + "img/increase_bonus_ru.5b8a27bea-1024.png",
                    width: 1024,
                    height: 331
                }, {
                    path: i.p + "img/increase_bonus_ru.e36209704-760.png",
                    width: 760,
                    height: 246
                }, {
                    path: i.p + "img/increase_bonus_ru.6bdb3c512-400.png",
                    width: 400,
                    height: 129
                }, {
                    path: i.p + "img/increase_bonus_ru.1f2ebceae-320.png",
                    width: 320,
                    height: 103
                }],
                src: i.p + "img/increase_bonus_ru.1f2ebceae-320.png",
                toString: function() {
                    return i.p + "img/increase_bonus_ru.1f2ebceae-320.png"
                },
                width: 320,
                height: 103
            }
        },
        852829: (e, t, i) => {
            e.exports = {
                srcSet: i.p + "img/increase_bonus_ru.fd279aff4-1024.webp 1024w," + i.p + "img/increase_bonus_ru.574f22fbc-760.webp 760w," + i.p + "img/increase_bonus_ru.a744a09de-400.webp 400w," + i.p + "img/increase_bonus_ru.4473fdbe5-320.webp 320w",
                images: [{
                    path: i.p + "img/increase_bonus_ru.fd279aff4-1024.webp",
                    width: 1024,
                    height: 331
                }, {
                    path: i.p + "img/increase_bonus_ru.574f22fbc-760.webp",
                    width: 760,
                    height: 246
                }, {
                    path: i.p + "img/increase_bonus_ru.a744a09de-400.webp",
                    width: 400,
                    height: 129
                }, {
                    path: i.p + "img/increase_bonus_ru.4473fdbe5-320.webp",
                    width: 320,
                    height: 103
                }],
                src: i.p + "img/increase_bonus_ru.4473fdbe5-320.webp",
                toString: function() {
                    return i.p + "img/increase_bonus_ru.4473fdbe5-320.webp"
                },
                width: 320,
                height: 103
            }
        },
        599119: (e, t, i) => {
            "use strict";
            e.exports = i.p + "img/luckystar-normal.c57ea566b.svg"
        },
        319771: (e, t, i) => {
            "use strict";
            e.exports = i.p + "img/notification.0311d6bd4.svg"
        },
        95260: (e, t, i) => {
            "use strict";

            function n(e) {
                if (e) return r(e)
            }

            function r(e) {
                for (var t in n.prototype) e[t] = n.prototype[t];
                return e
            }
            i.d(t, {
                Q: () => n
            }), n.prototype.on = n.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
            }, n.prototype.once = function(e, t) {
                function i() {
                    this.off(e, i), t.apply(this, arguments)
                }
                return i.fn = t, this.on(e, i), this
            }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var i, n = this._callbacks["$" + e];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var r = 0; r < n.length; r++)
                    if (i = n[r], i === t || i.fn === t) {
                        n.splice(r, 1);
                        break
                    }
                return 0 === n.length && delete this._callbacks["$" + e], this
            }, n.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                for (var t = new Array(arguments.length - 1), i = this._callbacks["$" + e], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                if (i) {
                    i = i.slice(0);
                    n = 0;
                    for (var r = i.length; n < r; ++n) i[n].apply(this, t)
                }
                return this
            }, n.prototype.emitReserved = n.prototype.emit, n.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
            }, n.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
        },
        570576: (e, t, i) => {
            "use strict";
            i.d(t, {
                P: () => C
            });
            var n = i(686121),
                r = i(432161),
                s = i(602262),
                a = i(430819),
                o = i(130081),
                c = i(772379),
                u = i(789643);
            class p extends u.F {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || a._, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || g(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    const i = (0, r.oE)(this.state.data, e, this.options);
                    return this.dispatch({
                        data: i,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), i
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    const i = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), i ? i.then(r.ZT).catch(r.ZT) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some((e => !1 !== e.options.enabled))
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e => e.getCurrentResult().isStale))
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, r.Kp)(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnWindowFocus()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnReconnect()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers.includes(e) && (this.observers = this.observers.filter((t => t !== e)), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var i, n;
                    if ("idle" !== this.state.fetchStatus)
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) {
                        var s;
                        return null == (s = this.retryer) || s.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        const e = this.observers.find((e => e.options.queryFn));
                        e && this.setOptions(e.options)
                    }
                    const a = (0, r.G9)(),
                        o = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        u = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (a) return this.abortSignalConsumed = !0, a.signal
                                }
                            })
                        };
                    u(o);
                    const p = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"),
                        g = {
                            fetchOptions: t,
                            options: this.options,
                            queryKey: this.queryKey,
                            state: this.state,
                            fetchFn: p
                        };
                    var l;
                    (u(g), null == (i = this.options.behavior) || i.onFetch(g), this.revertState = this.state, "idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (n = g.fetchOptions) ? void 0 : n.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (l = g.fetchOptions) ? void 0 : l.meta
                    });
                    const h = e => {
                        var t, i, n, r;
                        ((0, c.DV)(e) && e.silent || this.dispatch({
                            type: "error",
                            error: e
                        }), (0, c.DV)(e)) || (null == (t = (i = this.cache.config).onError) || t.call(i, e, this), null == (n = (r = this.cache.config).onSettled) || n.call(r, this.state.data, e, this));
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, c.Mz)({
                        fn: g.fetchFn,
                        abort: null == a ? void 0 : a.abort.bind(a),
                        onSuccess: e => {
                            var t, i, n, r;
                            "undefined" !== typeof e ? (this.setData(e), null == (t = (i = this.cache.config).onSuccess) || t.call(i, e, this), null == (n = (r = this.cache.config).onSettled) || n.call(r, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1) : h(new Error(this.queryHash + " data is undefined"))
                        },
                        onError: h,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: g.options.retry,
                        retryDelay: g.options.retryDelay,
                        networkMode: g.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    const t = t => {
                        var i, n;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (i = e.meta) ? i : null,
                                    fetchStatus: (0, c.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                const r = e.error;
                                return (0, c.DV)(r) && r.revert && this.revertState ? { ...this.revertState,
                                    fetchStatus: "idle"
                                } : { ...t,
                                    error: r,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: r,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    };
                    this.state = t(this.state), o.V.batch((() => {
                        this.observers.forEach((t => {
                            t.onQueryUpdate(e)
                        })), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    }))
                }
            }

            function g(e) {
                const t = "function" === typeof e.initialData ? e.initialData() : e.initialData,
                    i = "undefined" !== typeof t,
                    n = i ? "function" === typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                return {
                    data: t,
                    dataUpdateCount: 0,
                    dataUpdatedAt: i ? null != n ? n : Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: i ? "success" : "loading",
                    fetchStatus: "idle"
                }
            }
            var l = i(133989);
            class h extends l.l {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, i) {
                    var n;
                    const s = t.queryKey,
                        a = null != (n = t.queryHash) ? n : (0, r.Rm)(s, t);
                    let o = this.get(a);
                    return o || (o = new p({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: s,
                        queryHash: a,
                        options: e.defaultQueryOptions(t),
                        state: i,
                        defaultOptions: e.getQueryDefaults(s)
                    }), this.add(o)), o
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    const t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter((t => t !== e)), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    o.V.batch((() => {
                        this.queries.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    const [i] = (0, r.I6)(e, t);
                    return "undefined" === typeof i.exact && (i.exact = !0), this.queries.find((e => (0, r._x)(i, e)))
                }
                findAll(e, t) {
                    const [i] = (0, r.I6)(e, t);
                    return Object.keys(i).length > 0 ? this.queries.filter((e => (0, r._x)(i, e))) : this.queries
                }
                notify(e) {
                    o.V.batch((() => {
                        this.listeners.forEach((({
                            listener: t
                        }) => {
                            t(e)
                        }))
                    }))
                }
                onFocus() {
                    o.V.batch((() => {
                        this.queries.forEach((e => {
                            e.onFocus()
                        }))
                    }))
                }
                onOnline() {
                    o.V.batch((() => {
                        this.queries.forEach((e => {
                            e.onOnline()
                        }))
                    }))
                }
            }
            var d = i(389886);
            class m extends l.l {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, i) {
                    const n = new d.m({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: i,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(n), n
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter((t => t !== e)), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    o.V.batch((() => {
                        this.mutations.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return "undefined" === typeof e.exact && (e.exact = !0), this.mutations.find((t => (0, r.X7)(e, t)))
                }
                findAll(e) {
                    return this.mutations.filter((t => (0, r.X7)(e, t)))
                }
                notify(e) {
                    o.V.batch((() => {
                        this.listeners.forEach((({
                            listener: t
                        }) => {
                            t(e)
                        }))
                    }))
                }
                resumePausedMutations() {
                    var e;
                    return this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then((() => {
                        const e = this.mutations.filter((e => e.state.isPaused));
                        return o.V.batch((() => e.reduce(((e, t) => e.then((() => t.continue().catch(r.ZT)))), Promise.resolve())))
                    })).then((() => {
                        this.resuming = void 0
                    })), this.resuming
                }
            }
            var f = i(115761),
                b = i(896474),
                y = i(209499);
            class w {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new h, this.mutationCache = e.mutationCache || new m, this.logger = e.logger || a._, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = f.j.subscribe((() => {
                        f.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    })), this.unsubscribeOnline = b.N.subscribe((() => {
                        b.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    })))
                }
                unmount() {
                    var e, t;
                    this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (t = this.unsubscribeOnline) || t.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(e, t) {
                    const [i] = (0, r.I6)(e, t);
                    return i.fetchStatus = "fetching", this.queryCache.findAll(i).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var i;
                    return null == (i = this.queryCache.find(e, t)) ? void 0 : i.state.data
                }
                ensureQueryData(e, t, i) {
                    const n = (0, r._v)(e, t, i),
                        s = this.getQueryData(n.queryKey);
                    return s ? Promise.resolve(s) : this.fetchQuery(n)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map((({
                        queryKey: e,
                        state: t
                    }) => {
                        const i = t.data;
                        return [e, i]
                    }))
                }
                setQueryData(e, t, i) {
                    const n = this.queryCache.find(e),
                        s = null == n ? void 0 : n.state.data,
                        a = (0, r.SE)(t, s);
                    if ("undefined" === typeof a) return;
                    const o = (0, r._v)(e),
                        c = this.defaultQueryOptions(o);
                    return this.queryCache.build(this, c).setData(a, { ...i,
                        manual: !0
                    })
                }
                setQueriesData(e, t, i) {
                    return o.V.batch((() => this.getQueryCache().findAll(e).map((({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, i)]))))
                }
                getQueryState(e, t) {
                    var i;
                    return null == (i = this.queryCache.find(e, t)) ? void 0 : i.state
                }
                removeQueries(e, t) {
                    const [i] = (0, r.I6)(e, t), n = this.queryCache;
                    o.V.batch((() => {
                        n.findAll(i).forEach((e => {
                            n.remove(e)
                        }))
                    }))
                }
                resetQueries(e, t, i) {
                    const [n, s] = (0, r.I6)(e, t, i), a = this.queryCache, c = {
                        type: "active",
                        ...n
                    };
                    return o.V.batch((() => (a.findAll(n).forEach((e => {
                        e.reset()
                    })), this.refetchQueries(c, s))))
                }
                cancelQueries(e, t, i) {
                    const [n, s = {}] = (0, r.I6)(e, t, i);
                    "undefined" === typeof s.revert && (s.revert = !0);
                    const a = o.V.batch((() => this.queryCache.findAll(n).map((e => e.cancel(s)))));
                    return Promise.all(a).then(r.ZT).catch(r.ZT)
                }
                invalidateQueries(e, t, i) {
                    const [n, s] = (0, r.I6)(e, t, i);
                    return o.V.batch((() => {
                        var e, t;
                        if (this.queryCache.findAll(n).forEach((e => {
                                e.invalidate()
                            })), "none" === n.refetchType) return Promise.resolve();
                        const i = { ...n,
                            type: null != (e = null != (t = n.refetchType) ? t : n.type) ? e : "active"
                        };
                        return this.refetchQueries(i, s)
                    }))
                }
                refetchQueries(e, t, i) {
                    const [n, s] = (0, r.I6)(e, t, i), a = o.V.batch((() => this.queryCache.findAll(n).filter((e => !e.isDisabled())).map((e => {
                        var t;
                        return e.fetch(void 0, { ...s,
                            cancelRefetch: null == (t = null == s ? void 0 : s.cancelRefetch) || t,
                            meta: {
                                refetchPage: n.refetchPage
                            }
                        })
                    }))));
                    let c = Promise.all(a).then(r.ZT);
                    return null != s && s.throwOnError || (c = c.catch(r.ZT)), c
                }
                fetchQuery(e, t, i) {
                    const n = (0, r._v)(e, t, i),
                        s = this.defaultQueryOptions(n);
                    "undefined" === typeof s.retry && (s.retry = !1);
                    const a = this.queryCache.build(this, s);
                    return a.isStaleByTime(s.staleTime) ? a.fetch(s) : Promise.resolve(a.state.data)
                }
                prefetchQuery(e, t, i) {
                    return this.fetchQuery(e, t, i).then(r.ZT).catch(r.ZT)
                }
                fetchInfiniteQuery(e, t, i) {
                    const n = (0, r._v)(e, t, i);
                    return n.behavior = (0, y.Gm)(), this.fetchQuery(n)
                }
                prefetchInfiniteQuery(e, t, i) {
                    return this.fetchInfiniteQuery(e, t, i).then(r.ZT).catch(r.ZT)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    const i = this.queryDefaults.find((t => (0, r.yF)(e) === (0, r.yF)(t.queryKey)));
                    i ? i.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    const t = this.queryDefaults.find((t => (0, r.to)(e, t.queryKey)));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    const i = this.mutationDefaults.find((t => (0, r.yF)(e) === (0, r.yF)(t.mutationKey)));
                    i ? i.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    const t = this.mutationDefaults.find((t => (0, r.to)(e, t.mutationKey)));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    const t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = (0, r.Rm)(t.queryKey, t)), "undefined" === typeof t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), "undefined" === typeof t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
            var v = i(59680);
            class _ extends h {
                find(e, t) {
                    const i = (0, v.G5)(e),
                        n = (0, v.G5)(t);
                    return super.find(i, n)
                }
                findAll(e, t) {
                    const i = (0, v.G5)(e),
                        n = (0, v.G5)(t);
                    return (0, v.es)(i) ? super.findAll(i, n) : super.findAll(i)
                }
            }
            class S extends m {
                find(e) {
                    return super.find((0, v.G5)(e))
                }
                findAll(e) {
                    return super.findAll((0, v.G5)(e))
                }
            }
            class k extends w {
                constructor(e = {}) {
                    const t = (0, v.G5)(e),
                        i = {
                            logger: (0, v.G5)(t.logger),
                            defaultOptions: (0, v.G5)(t.defaultOptions),
                            queryCache: t.queryCache || new _,
                            mutationCache: t.mutationCache || new S
                        };
                    super(i), this.isRestoring = (0, s.iH)(!1)
                }
                isFetching(e, t) {
                    const i = (0, v.G5)(e),
                        n = (0, v.G5)(t);
                    return (0, v.es)(i) ? super.isFetching(i, n) : super.isFetching(i)
                }
                isMutating(e) {
                    return super.isMutating((0, v.G5)(e))
                }
                getQueryData(e, t) {
                    return super.getQueryData((0, v.G5)(e), (0, v.G5)(t))
                }
                getQueriesData(e) {
                    const t = (0, v.G5)(e);
                    return (0, v.es)(t), super.getQueriesData(t)
                }
                setQueryData(e, t, i) {
                    return super.setQueryData((0, v.G5)(e), t, (0, v.G5)(i))
                }
                setQueriesData(e, t, i) {
                    const n = (0, v.G5)(e),
                        r = (0, v.G5)(i);
                    return (0, v.es)(n), super.setQueriesData(n, t, r)
                }
                getQueryState(e, t) {
                    return super.getQueryState((0, v.G5)(e), (0, v.G5)(t))
                }
                removeQueries(e, t) {
                    const i = (0, v.G5)(e);
                    return (0, v.es)(i) ? super.removeQueries(i, (0, v.G5)(t)) : super.removeQueries(i)
                }
                resetQueries(e, t, i) {
                    const n = (0, v.G5)(e),
                        r = (0, v.G5)(t);
                    return (0, v.es)(n) ? super.resetQueries(n, r, (0, v.G5)(i)) : super.resetQueries(n, r)
                }
                cancelQueries(e, t, i) {
                    const n = (0, v.G5)(e),
                        r = (0, v.G5)(t);
                    return (0, v.es)(n) ? super.cancelQueries(n, r, (0, v.G5)(i)) : super.cancelQueries(n, r)
                }
                invalidateQueries(e, t, i) {
                    const n = (0, v.G5)(e),
                        r = (0, v.G5)(t);
                    return (0, v.es)(n) ? super.invalidateQueries(n, r, (0, v.G5)(i)) : super.invalidateQueries(n, r)
                }
                refetchQueries(e, t, i) {
                    const n = (0, v.G5)(e),
                        r = (0, v.G5)(t);
                    return (0, v.es)(n) ? super.refetchQueries(n, r, (0, v.G5)(i)) : super.refetchQueries(n, r)
                }
                fetchQuery(e, t, i) {
                    const n = (0, v.G5)(e),
                        r = (0, v.G5)(t);
                    return (0, v.es)(n) ? super.fetchQuery(n, r, (0, v.G5)(i)) : super.fetchQuery(n)
                }
                prefetchQuery(e, t, i) {
                    return super.prefetchQuery((0, v.G5)(e), (0, v.G5)(t), (0, v.G5)(i))
                }
                fetchInfiniteQuery(e, t, i) {
                    const n = (0, v.G5)(e),
                        r = (0, v.G5)(t);
                    return (0, v.es)(n) ? super.fetchInfiniteQuery(n, r, (0, v.G5)(i)) : super.fetchInfiniteQuery(n)
                }
                prefetchInfiniteQuery(e, t, i) {
                    return super.prefetchInfiniteQuery((0, v.G5)(e), (0, v.G5)(t), (0, v.G5)(i))
                }
                setDefaultOptions(e) {
                    super.setDefaultOptions((0, v.G5)(e))
                }
                setQueryDefaults(e, t) {
                    super.setQueryDefaults((0, v.G5)(e), (0, v.G5)(t))
                }
                getQueryDefaults(e) {
                    return super.getQueryDefaults((0, v.G5)(e))
                }
                setMutationDefaults(e, t) {
                    super.setMutationDefaults((0, v.G5)(e), (0, v.G5)(t))
                }
                getMutationDefaults(e) {
                    return super.getMutationDefaults((0, v.G5)(e))
                }
            }
            const C = {
                install: (e, t = {}) => {
                    const i = (0, v.LM)(t.queryClientKey);
                    let s;
                    if ("queryClient" in t && t.queryClient) s = t.queryClient;
                    else if (t.contextSharing && "undefined" !== typeof window)
                        if (window.__VUE_QUERY_CONTEXT__) s = window.__VUE_QUERY_CONTEXT__;
                        else {
                            const e = "queryClientConfig" in t ? t.queryClientConfig : void 0;
                            s = new k(e), window.__VUE_QUERY_CONTEXT__ = s
                        }
                    else {
                        const e = "queryClientConfig" in t ? t.queryClientConfig : void 0;
                        s = new k(e)
                    }
                    r.sk || s.mount();
                    let a = () => {};
                    if (t.clientPersister) {
                        s.isRestoring.value = !0;
                        const [e, i] = t.clientPersister(s);
                        a = e, i.then((() => {
                            s.isRestoring.value = !1, null == t.clientPersisterOnSuccess || t.clientPersisterOnSuccess(s)
                        }))
                    }
                    const o = () => {
                        s.unmount(), a()
                    };
                    if (e.onUnmount) e.onUnmount(o);
                    else {
                        const t = e.unmount;
                        e.unmount = function() {
                            o(), t()
                        }
                    }
                    n.$Qs ? e.mixin({
                        beforeCreate() {
                            if (!this._provided) {
                                const e = {};
                                Object.defineProperty(this, "_provided", {
                                    get: () => e,
                                    set: t => Object.assign(e, t)
                                })
                            }
                            this._provided[i] = s
                        }
                    }) : e.provide(i, s)
                }
            }
        },
        279180: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => c
            });
            var n = i(60337),
                r = i(856009),
                s = Array.prototype,
                a = s.splice;

            function o(e, t) {
                var i = e ? t.length : 0,
                    s = i - 1;
                while (i--) {
                    var o = t[i];
                    if (i == s || o !== c) {
                        var c = o;
                        (0, r.Z)(o) ? a.call(e, o, 1): (0, n.Z)(e, o)
                    }
                }
                return e
            }
            const c = o
        },
        845542: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => a
            });
            var n = i(369162),
                r = i(279180);

            function s(e, t) {
                var i = [];
                if (!e || !e.length) return i;
                var s = -1,
                    a = [],
                    o = e.length;
                t = (0, n.Z)(t, 3);
                while (++s < o) {
                    var c = e[s];
                    t(c, s, e) && (i.push(c), a.push(s))
                }
                return (0, r.Z)(e, a), i
            }
            const a = s
        }
    }
]);