(self.webpackChunkcoin_flip_app_ts = self.webpackChunkcoin_flip_app_ts || []).push([
    [1463], {
        5523: function(n, o, s) {
            "use strict";
            s.d(o, {
                J: function() {
                    return j
                }
            });
            var e = s(3433),
                r = s(9439),
                i = s(2791),
                t = s(8182),
                l = s(184),
                j = function(n) {
                    var o = n.id,
                        s = n.spanId,
                        j = n.text,
                        u = n.classes,
                        C = n.isBlock,
                        a = n.clickHandler,
                        c = n.buttonColor,
                        d = n.icon,
                        h = n.disabled,
                        f = n.fullHeight,
                        m = n.size,
                        w = n.fullWidth,
                        p = (0, i.useState)([]),
                        v = (0, r.Z)(p, 2),
                        x = v[0],
                        k = v[1],
                        b = (0, i.useCallback)((function() {
                            k([m]), "big" === m && k((function(n) {
                                var o = [].concat((0, e.Z)(n), ["games-".concat(null !== c && void 0 !== c ? c : "blue", "-bg")]);
                                return "orange" === c ? o.push("main-light-text cashout") : o.push("text-white"), o
                            }))
                        }), [c, m]);
                    (0, i.useEffect)((function() {
                        b()
                    }), [b, c, m]);
                    return (0, l.jsx)("button", {
                        id: o,
                        type: "button",
                        onClick: function() {
                            return a()
                        },
                        disabled: h,
                        className: (0, t.Z)("app-button", u, x, "".concat(h ? "cursor-not-allowed" : "cursor-pointer"), {
                            block: C,
                            "h-full": f,
                            "w-full": w
                        }),
                        children: null !== d && j ? (0, l.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, l.jsx)("div", {
                                children: d
                            }), (0, l.jsx)("span", {
                                id: s,
                                children: j
                            })]
                        }) : null === d || j ? (0, l.jsx)("span", {
                            children: j
                        }) : (0, l.jsx)("div", {
                            children: d
                        })
                    })
                };
            j.defaultProps = {
                text: "",
                buttonColor: "gray",
                icon: null,
                isBlock: !1,
                classes: "",
                disabled: !1,
                fullHeight: !1,
                fullWidth: !1,
                size: "big",
                clickHandler: function() {}
            }
        },
        4535: function(n, o, s) {
            "use strict";
            s.d(o, {
                z: function() {
                    return v
                }
            });
            var e = s(2791),
                r = s(5523),
                i = s(184),
                t = function() {
                    return (0, i.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("path", {
                            d: "M13.0359 7.76193C12.9975 7.39054 12.9575 7.00521 12.859 6.62071C12.5907 5.70085 11.8476 5.12696 11.0509 5.12696C10.6065 5.12532 10.0443 5.39915 9.72565 5.67625L7.08398 7.889H5.70109C4.68335 7.889 3.86498 8.67359 3.71044 9.80579C3.57911 10.8929 3.54708 12.945 3.71044 14.1411C3.85217 15.3373 4.6337 16.1104 5.70109 16.1104H7.08398L9.7769 18.3559C10.0532 18.5961 10.5408 18.8716 10.9892 18.8716C11.0181 18.8724 11.0437 18.8724 11.0693 18.8724C11.8813 18.8724 12.5963 18.2772 12.8646 17.3598C12.9663 16.9696 13.0015 16.6039 13.0359 16.2506L13.072 15.9005C13.2097 14.765 13.2097 9.22698 13.072 8.0997L13.0359 7.76193Z",
                            fill: "#97A3CB"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.5673 5.29577C17.886 5.06949 18.324 5.1523 18.5426 5.47613C19.7406 7.23961 20.4004 9.5573 20.4004 11.9996C20.4004 14.4435 19.7406 16.7604 18.5426 18.5239C18.4121 18.7166 18.1967 18.8321 17.9669 18.8321C17.8244 18.8321 17.6866 18.7879 17.5681 18.7043C17.251 18.4772 17.1726 18.0303 17.392 17.7057C18.4281 16.1791 18.9991 14.1525 18.9991 11.9996C18.9991 9.84752 18.4281 7.82088 17.392 6.29433C17.1726 5.9705 17.251 5.52286 17.5673 5.29577ZM15.1531 7.61594C15.4726 7.39049 15.909 7.47165 16.1292 7.79631C16.9027 8.93589 17.3295 10.4288 17.3295 12.0004C17.3295 13.5721 16.9027 15.065 16.1292 16.2046C15.9979 16.3973 15.7833 16.5128 15.5534 16.5128C15.4109 16.5128 15.2724 16.4686 15.1539 16.385C14.8368 16.1579 14.7583 15.7102 14.9785 15.3864C15.5911 14.4837 15.9282 13.281 15.9282 12.0004C15.9282 10.719 15.5911 9.51715 14.9785 8.61451C14.7583 8.29067 14.8368 7.84304 15.1531 7.61594Z",
                            fill: "#97A3CB"
                        })]
                    })
                },
                l = function() {
                    return (0, i.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.6154 4.49563C12.6117 4.47815 12.6087 4.46083 12.6063 4.44369C12.5618 4.11996 12.2701 3.88961 11.9513 3.90829C11.6275 3.9307 11.3767 4.20089 11.3767 4.52836V15.6224C10.8589 15.3061 10.2212 15.1119 9.52302 15.1119C7.82013 15.1119 6.43359 16.2287 6.43359 17.6021C6.43359 18.9755 7.82013 20.0924 9.52302 20.0924C11.2259 20.0924 12.6124 18.9755 12.6124 17.6021V10.3456C12.6134 10.3459 12.6144 10.3463 12.6154 10.3467V4.49563Z",
                            fill: "#97A3CB"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.6152 10.348V4.4873C12.6767 4.79839 12.9439 5.1612 13.1816 5.48296L13.257 5.58506C13.6767 6.15722 14.2703 6.55791 14.8986 6.98201L14.9006 6.98333L14.9009 6.98358C15.7436 7.55252 16.6159 8.14144 17.1237 9.18968C17.4475 9.85706 17.597 10.5668 17.5563 11.2429C17.492 12.2963 17.1608 13.3608 16.6616 14.2025C16.6492 14.2237 16.6356 14.2424 16.6208 14.2598C16.4799 14.4914 16.3328 14.713 16.1672 14.9023C15.9411 15.16 15.5506 15.1874 15.296 14.9583C15.039 14.7317 15.0143 14.3383 15.2404 14.0805C15.3055 14.0055 15.3636 13.9164 15.4216 13.8276C15.4407 13.7984 15.4597 13.7692 15.4789 13.7406C15.0614 11.6158 13.5434 10.7055 12.6152 10.348Z",
                            fill: "#97A3CB"
                        })]
                    })
                },
                j = function() {
                    return (0, i.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.3927 8.64256L3.02352 18.0865C2.62758 18.4471 2.62758 19.0318 3.02352 19.3924C3.41947 19.753 4.06143 19.753 4.45738 19.3924L20.9751 4.34855C21.371 3.98793 21.371 3.40325 20.9751 3.04263C20.5791 2.68201 19.9371 2.68201 19.5412 3.04263L16.78 5.55749C16.4004 5.28723 16.0565 4.99502 15.7745 4.64766L15.6789 4.53067C15.364 4.14547 15.0083 3.70889 14.9518 3.34223C14.8954 2.97129 14.5256 2.70735 14.1213 2.72875C13.7108 2.75443 13.3927 3.06403 13.3927 3.43925V8.64256ZM10.6725 15.5788L7.15594 18.7816C7.40094 20.1849 9.05099 21.273 11.0421 21.273C13.2015 21.273 14.9597 19.9932 14.9597 18.4196V11.6741L13.3927 13.1013V16.1511C12.5806 15.703 11.616 15.5142 10.6725 15.5788ZM18.592 13.9925C18.2142 12.255 17.1256 11.2263 16.1054 10.6307L19.5967 7.45079C20.0186 7.8194 20.3932 8.24732 20.6777 8.77796C21.0883 9.54267 21.2779 10.3559 21.2262 11.1306C21.1447 12.3376 20.7248 13.5574 20.0917 14.5219C20.0761 14.5461 20.0588 14.5675 20.04 14.5875C19.8613 14.8528 19.6749 15.1068 19.4649 15.3237C19.1781 15.619 18.6829 15.6504 18.3601 15.3879C18.0342 15.1282 18.0028 14.6774 18.2896 14.382C18.3722 14.2961 18.4459 14.194 18.5194 14.0922C18.5435 14.0588 18.5676 14.0253 18.592 13.9925Z",
                            fill: "#97A3CB"
                        })
                    })
                },
                u = function() {
                    return (0, i.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.5785 4.14318C19.9024 3.81927 20.4188 3.81737 20.7552 4.14222C21.082 4.46898 21.082 4.99675 20.7561 5.32256L5.32228 20.7555C5.16888 20.9089 4.94784 20.9994 4.73251 20.9994C4.52195 20.9994 4.31425 20.9137 4.14656 20.7584C3.81881 20.4183 3.81881 19.901 4.1437 19.5762L6.68759 17.0326H6.66186C5.39373 17.0326 4.4705 16.1371 4.29901 14.7462C4.1075 13.3553 4.14561 10.9737 4.29901 9.70667C4.47908 8.39201 5.45185 7.48794 6.66186 7.48794H8.3092L11.4533 4.91578C11.8354 4.59187 12.5118 4.28607 13.0349 4.2775C13.9877 4.2775 14.8642 4.9434 15.1786 6.01037C15.3025 6.45907 15.3511 6.90587 15.3892 7.33552L15.4645 7.94426C15.4769 8.03762 15.4883 8.12717 15.4978 8.22243L19.5785 4.14318ZM14.5941 13.558C14.7227 13.4323 15.0105 13.3418 15.14 13.3751C15.4897 13.4637 15.5583 13.9658 15.5526 14.3602C15.5364 15.5053 15.4983 16.3017 15.4373 16.7942L15.3944 17.2L15.3937 17.2075C15.3529 17.6158 15.3108 18.0383 15.1896 18.489C14.8723 19.554 14.0215 20.2457 13.0544 20.2457C13.023 20.2457 12.9916 20.2457 12.9592 20.2447C12.4247 20.2447 11.8454 19.9246 11.5167 19.6455L10.3457 18.7395C9.90078 18.4089 10.0323 17.8812 10.2819 17.5754C10.4683 17.3477 12.7088 15.2909 13.8856 14.2107C14.2846 13.8444 14.5613 13.5904 14.5941 13.558Z",
                            fill: "#97A3CB"
                        })
                    })
                },
                C = function() {
                    return (0, i.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            d: "M3.3457 12.0002C3.3457 16.7775 7.22294 20.6547 12.0002 20.6547C16.7776 20.6547 20.6548 16.7775 20.6548 12.0002C20.6548 7.22288 16.7776 3.34564 12.0002 3.34564C7.22294 3.34564 3.3457 7.22288 3.3457 12.0002ZM10.9184 17.4093V16.9766C10.9184 16.4986 11.3059 16.1111 11.7839 16.1111H12.2166C12.6946 16.1111 13.0821 16.4986 13.0821 16.9766V17.4093C13.0821 17.8873 12.6946 18.2747 12.2166 18.2747H11.7839C11.3059 18.2747 10.9184 17.8873 10.9184 17.4093ZM13.8783 12.1473C13.415 12.617 13.081 13.0245 12.94 13.736C12.9335 13.7688 12.9273 13.8066 12.9214 13.8493C12.8624 14.2775 12.4964 14.5966 12.0641 14.5966H12.0002C11.5425 14.5966 11.1715 14.2255 11.1715 13.7678C11.1715 13.7443 11.1725 13.7209 11.1745 13.6975C11.1817 13.613 11.1895 13.5491 11.1979 13.5057C11.3318 12.8161 11.6714 12.1972 12.1474 11.7146L13.2205 10.6241C13.5408 10.3126 13.7312 9.87982 13.7312 9.40382C13.7312 8.45182 12.9522 7.67291 12.0002 7.67291C11.3953 7.67291 10.8603 7.98741 10.5506 8.46097C10.4958 8.54475 10.4463 8.65701 10.4021 8.79775C10.2888 9.15843 9.95445 9.40382 9.57639 9.40382H9.40388C8.99575 9.40382 8.66489 9.07296 8.66489 8.66483C8.66489 8.60989 8.67101 8.55513 8.68317 8.50156C8.73551 8.27051 8.79491 8.08375 8.86137 7.94128C9.41236 6.7601 10.6103 5.94201 12.0002 5.94201C13.9129 5.94201 15.4621 7.49117 15.4621 9.40382C15.4621 10.1654 15.1505 10.8578 14.6572 11.3511L13.8783 12.1473Z",
                            fill: "#97A3CB"
                        })
                    })
                },
                a = function(n) {
                    var o = n.clickHandler,
                        s = n.isPlayMusic;
                    return (0, i.jsx)(r.J, {
                        clickHandler: o,
                        size: "small",
                        classes: "mx-2 mobile:mx-1",
                        icon: s ? (0, i.jsx)(u, {}) : (0, i.jsx)(t, {})
                    })
                },
                c = s(3168),
                d = function(n) {
                    var o = n.clickHandler,
                        s = (0, c.$)().t;
                    return (0, i.jsx)(r.J, {
                        id: "show_guide_button",
                        clickHandler: o,
                        size: "small",
                        icon: (0, i.jsx)(C, {}),
                        text: s("HowToPlay"),
                        classes: "px-2"
                    })
                },
                h = s(9439),
                f = s(1845),
                m = function() {
                    var n = (0, e.useState)(!1),
                        o = (0, h.Z)(n, 2),
                        s = o[0],
                        t = o[1];
                    f.Howler.autoUnlock = !1, (0, e.useEffect)((function() {
                        f.Howler.mute(!s)
                    }), [s]);
                    return (0, i.jsx)(r.J, {
                        id: "sound_btn",
                        clickHandler: function() {
                            t((function(n) {
                                return !n
                            }))
                        },
                        size: "small",
                        classes: "mx-2 mobile:mx-1",
                        icon: s ? (0, i.jsx)(l, {}) : (0, i.jsx)(j, {})
                    })
                },
                w = function() {
                    return (0, i.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.4975 7.46273H14.5334C13.154 7.46516 12.0365 8.55469 12.0341 9.89962C12.0322 11.2476 13.1509 12.342 14.5334 12.3438H17.5V12.5579C17.5 14.9093 16.0746 16.2997 13.6623 16.2997H7.33898C4.92612 16.2997 3.50067 14.9093 3.50067 12.5579V7.43664C3.50067 5.08529 4.92612 3.70032 7.33898 3.70032H13.6598C16.0721 3.70032 17.4975 5.08529 17.4975 7.43664V7.46273ZM6.81758 7.45771H10.7654H10.7679H10.7729C11.0684 7.4565 11.3073 7.22172 11.3061 6.93296C11.3048 6.64481 11.0634 6.41185 10.7679 6.41307H6.81758C6.52391 6.41428 6.28561 6.64663 6.28436 6.93357C6.28312 7.22172 6.52204 7.4565 6.81758 7.45771Z"
                        }), (0, i.jsx)("path", {
                            opacity: "0.4",
                            d: "M13.3267 10.2076C13.473 10.8734 14.0568 11.3418 14.7232 11.3297H16.9981C17.2754 11.3297 17.5003 11.1 17.5003 10.8162V9.04415C17.4997 8.7609 17.2754 8.53064 16.9981 8.53003H14.6697C13.9116 8.53247 13.2993 9.16171 13.3005 9.93716C13.3005 10.0279 13.3094 10.1187 13.3267 10.2076Z"
                        }), (0, i.jsx)("ellipse", {
                            cx: "21",
                            cy: "21",
                            rx: "0.699968",
                            ry: "0.699967"
                        })]
                    })
                },
                p = function(n) {
                    var o = n.clickHandler,
                        s = n.balance;
                    return (0, i.jsx)(r.J, {
                        spanId: "walletValue",
                        clickHandler: o,
                        size: "small",
                        disabled: !0,
                        icon: (0, i.jsx)(w, {}),
                        text: s,
                        classes: "px-2 mx-2"
                    })
                },
                v = function(n) {
                    var o, s = n.toggleModalAboutGame,
                        e = n.isGameWithMusic,
                        r = n.togglePlayMusic,
                        t = n.isPlayMusic,
                        l = n.balance,
                        j = n.sx;
                    return (0, i.jsx)("div", {
                        className: "game-header",
                        children: (0, i.jsxs)("div", {
                            className: "game-header__button ".concat(null !== (o = null === j || void 0 === j ? void 0 : j.buttonClass) && void 0 !== o ? o : ""),
                            children: [e && (0, i.jsx)(a, {
                                clickHandler: null !== r && void 0 !== r ? r : function() {},
                                isPlayMusic: null !== t && void 0 !== t && t
                            }), (0, i.jsx)(m, {}), (0, i.jsx)(p, {
                                clickHandler: function() {
                                    return null
                                },
                                balance: l
                            }), (0, i.jsx)(d, {
                                clickHandler: s
                            })]
                        })
                    })
                };
            v.defaultProps = {
                togglePlayMusic: function() {},
                isPlayMusic: !1,
                sx: {}
            }
        },
        6761: function(n, o, s) {
            "use strict";
            s.d(o, {
                G3: function() {
                    return i
                },
                He: function() {
                    return r
                },
                _3: function() {
                    return l
                },
                pD: function() {
                    return t
                }
            });
            var e = s(1426),
                r = function() {
                    return null !== new URLSearchParams(window.location.search).get("b") ? new URLSearchParams(window.location.search).get("b") : e.env.REACT_APP_DEFAULT_AUTH_KEY
                },
                i = function() {
                    return new URLSearchParams(window.location.search).get("language")
                },
                t = function(n) {
                    return new Date(n).toTimeString().split(" ")[0].slice(0, 5)
                },
                l = function(n) {
                    var o = new Date(n).toLocaleDateString("ru-RU").split(".");
                    return n && o.length && o.splice(2, 1, o[2].slice(2)), o.join(".")
                }
        },
        8077: function(n, o, s) {
            "use strict";
            s.d(o, {
                L: function() {
                    return j.ZP
                }
            });
            var e, r = s(6761),
                i = s(6662),
                t = s(8589),
                l = s(5733),
                j = s(8825),
                u = {
                    lng: null !== (e = (0, r.G3)()) && void 0 !== e ? e : "en",
                    interpolation: {
                        escapeValue: !1
                    }
                };
            j.ZP.use(t.Db).use(l.A).use((0, i.Z)((function(n, o, e) {
                s(3063)("./".concat(n, ".json")).then((function(n) {
                    e(null, n)
                })).catch((function(n) {
                    e(n, null)
                }))
            }))).init(u)
        },
        4761: function(n, o, s) {
            "use strict";
            s.d(o, {
                F: function() {
                    return r
                },
                GC: function() {
                    return e
                }
            });
            var e = function(n) {
                    return n[n["Not started"] = 0] = "Not started", n[n.Active = 1] = "Active", n[n.Inactive = 2] = "Inactive", n[n.Win = 3] = "Win", n[n.Loss = 4] = "Loss", n[n.Planned = 5] = "Planned", n
                }({}),
                r = function(n) {
                    return n.EUR = "\u20ac", n.UAH = "\u20b4", n.RUB = "\u20bd", n.USD = "$", n.KZT = "\u20b8", n.AZN = "\u20bc", n.TJS = "\u0421", n.UZS = "S", n.TRY = "\u20ba", n.INR = "\u20b9", n.AUD = "$", n.XOF = "\u20a3", n.PLN = "Z\u0142", n.ARS = "$", n.BRL = "R$", n.CLP = "$", n.COP = "$", n.CRC = "\u20a1", n.MXN = "$", n.PAB = "B", n.PEN = "S/", n.XAF = "\u20a3", n.KES = "KSh", n.UGX = "Ush", n.GHS = "GH\u20b5", n.RWF = "FRw", n.TZS = "TSh", n.ZMW = "ZK", n.HKD = "HK$", n.IDR = "Rp", n.MYR = "RM", n.PHP = "PhP", n.BDT = "Tk", n.IRR = "IRR", n.IQD = "IQD", n.VND = "\u20ab", n.THB = "\u0e3f", n.LKR = "Rs", n.KRW = "\u20a9", n.SGD = "S$", n.QAR = "QR", n.PKR = "Rs", n.OMR = "OMR", n.KWD = "KD", n.JOD = "JD", n.AED = "DH", n.CAD = "$", n.BYN = "Br", n.AMD = "\u058f", n.CUP = "$MN", n.CZK = "K\u010d", n.DZD = "DA", n.GEL = "\u20be", n.KGS = "\u0441", n.MDL = "L", n.NGN = "N", n.NPR = "Re", n.SEK = "kr", n.SOS = "So", n.OWT = "1WT", n
                }({})
        },
        4731: function(n, o, s) {
            "use strict";
            s.d(o, {
                p: function() {
                    return a
                }
            });
            var e = s(4165),
                r = s(1413),
                i = s(5861),
                t = s(8825),
                l = s(8589),
                j = s(6761),
                u = s(5733),
                C = s(6662);

            function a(n) {
                return c.apply(this, arguments)
            }

            function c() {
                return c = (0, i.Z)((0, e.Z)().mark((function n(o) {
                    var i, a, c, d, h = arguments;
                    return (0, e.Z)().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return a = h.length > 1 && void 0 !== h[1] && h[1], c = {
                                    lng: null !== (i = (0, j.G3)()) && void 0 !== i ? i : "en",
                                    interpolation: {
                                        escapeValue: !1
                                    }
                                }, d = t.ZP.createInstance(), n.next = 5, d.use(l.Db).use(u.A).use((0, C.Z)((function(n, e, i) {
                                    Promise.all([s(3063)("./".concat(n, ".json")), s(5407)("./".concat(o, "/").concat(n, ".json")), a ? s(2789)("./".concat(n, ".json")) : {}]).then((function(n) {
                                        i(null, (0, r.Z)((0, r.Z)((0, r.Z)({}, n[0]), n[1]), a ? n[2] : {}))
                                    })).catch((function(n) {
                                        i(n, null)
                                    }))
                                }))).init(c);
                            case 5:
                                return n.abrupt("return", d);
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                }))), c.apply(this, arguments)
            }
        },
        3063: function(n, o, s) {
            var e = {
                "./af.json": [1561, 1561],
                "./az.json": [5065, 5065],
                "./bn.json": [2079, 2079],
                "./de.json": [3430, 3430],
                "./el.json": [5187, 5187],
                "./en.json": [2151, 2151],
                "./es.json": [9255, 9255],
                "./fr.json": [7115, 7115],
                "./hi.json": [9043, 9043],
                "./id.json": [1003, 1003],
                "./it.json": [9169, 9169],
                "./ja.json": [9394, 9394],
                "./kk.json": [9938, 9938],
                "./ko.json": [6622, 6622],
                "./ky.json": [2461, 2461],
                "./mo.json": [4635, 4635],
                "./mr.json": [4196, 4196],
                "./pl.json": [5476, 5476],
                "./pt.json": [5047, 5047],
                "./ro.json": [7356, 7356],
                "./ru.json": [70, 70],
                "./sw.json": [3576, 3576],
                "./tg.json": [6773, 6773],
                "./tr.json": [9656, 9656],
                "./uk.json": [8653, 8653],
                "./uz.json": [3059, 3059],
                "./zh.json": [5588, 5588]
            };

            function r(n) {
                if (!s.o(e, n)) return Promise.resolve().then((function() {
                    var o = new Error("Cannot find module '" + n + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }));
                var o = e[n],
                    r = o[0];
                return s.e(o[1]).then((function() {
                    return s.t(r, 19)
                }))
            }
            r.keys = function() {
                return Object.keys(e)
            }, r.id = 3063, n.exports = r
        },
        2789: function(n, o, s) {
            var e = {
                "./af.json": [1971, 1971],
                "./az.json": [7565, 7565],
                "./bn.json": [7719, 7719],
                "./de.json": [5784, 5784],
                "./el.json": [5647, 5647],
                "./en.json": [7654, 7654],
                "./es.json": [8679, 8679],
                "./fr.json": [4690, 4690],
                "./hi.json": [6210, 6210],
                "./id.json": [2060, 2060],
                "./it.json": [6550, 6550],
                "./ja.json": [9837, 9837],
                "./kk.json": [2464, 2464],
                "./ko.json": [4127, 4127],
                "./ky.json": [2579, 2579],
                "./mo.json": [6804, 6804],
                "./mr.json": [2799, 2799],
                "./pl.json": [6344, 6344],
                "./pt.json": [6e3, 6e3],
                "./ro.json": [1447, 1447],
                "./ru.json": [3918, 3918],
                "./sw.json": [6364, 6364],
                "./tg.json": [3378, 3378],
                "./tr.json": [9655, 9655],
                "./uk.json": [1247, 1247],
                "./uz.json": [7102, 7102],
                "./zh.json": [4943, 2140]
            };

            function r(n) {
                if (!s.o(e, n)) return Promise.resolve().then((function() {
                    var o = new Error("Cannot find module '" + n + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }));
                var o = e[n],
                    r = o[0];
                return s.e(o[1]).then((function() {
                    return s.t(r, 19)
                }))
            }
            r.keys = function() {
                return Object.keys(e)
            }, r.id = 2789, n.exports = r
        },
        5407: function(n, o, s) {
            var e = {
                "./Coin/af.json": [6316, 6316],
                "./Coin/az.json": [5755, 5755],
                "./Coin/bn.json": [2128, 2128],
                "./Coin/de.json": [9831, 9831],
                "./Coin/el.json": [4277, 4277],
                "./Coin/en.json": [7179, 7179],
                "./Coin/es.json": [9013, 9013],
                "./Coin/fr.json": [8474, 739],
                "./Coin/hi.json": [4651, 4651],
                "./Coin/id.json": [6950, 6950],
                "./Coin/it.json": [2950, 2950],
                "./Coin/ja.json": [3551, 3551],
                "./Coin/kk.json": [9072, 9072],
                "./Coin/ko.json": [3906, 3906],
                "./Coin/ky.json": [2389, 2389],
                "./Coin/mo.json": [9418, 9418],
                "./Coin/mr.json": [2351, 2351],
                "./Coin/pl.json": [4555, 4555],
                "./Coin/pt.json": [9382, 9382],
                "./Coin/ro.json": [4145, 4145],
                "./Coin/ru.json": [9024, 9024],
                "./Coin/sw.json": [2023, 2023],
                "./Coin/tg.json": [8306, 8306],
                "./Coin/tr.json": [6020, 6020],
                "./Coin/uk.json": [3372, 3372],
                "./Coin/uz.json": [1073, 1073],
                "./Coin/zh.json": [6592, 6592],
                "./Common/af.json": [1561, 1561],
                "./Common/az.json": [5065, 5065],
                "./Common/bn.json": [2079, 2079],
                "./Common/de.json": [3430, 3430],
                "./Common/el.json": [5187, 5187],
                "./Common/en.json": [2151, 2151],
                "./Common/es.json": [9255, 9255],
                "./Common/fr.json": [7115, 7115],
                "./Common/hi.json": [9043, 9043],
                "./Common/id.json": [1003, 1003],
                "./Common/it.json": [9169, 9169],
                "./Common/ja.json": [9394, 9394],
                "./Common/kk.json": [9938, 9938],
                "./Common/ko.json": [6622, 6622],
                "./Common/ky.json": [2461, 2461],
                "./Common/mo.json": [4635, 4635],
                "./Common/mr.json": [4196, 4196],
                "./Common/pl.json": [5476, 5476],
                "./Common/pt.json": [5047, 5047],
                "./Common/ro.json": [7356, 7356],
                "./Common/ru.json": [70, 70],
                "./Common/sw.json": [3576, 3576],
                "./Common/tg.json": [6773, 6773],
                "./Common/tr.json": [9656, 9656],
                "./Common/uk.json": [8653, 8653],
                "./Common/uz.json": [3059, 3059],
                "./Common/zh.json": [5588, 5588],
                "./CrashErrors/af.json": [1971, 1971],
                "./CrashErrors/az.json": [7565, 7565],
                "./CrashErrors/bn.json": [7719, 7719],
                "./CrashErrors/de.json": [5784, 5784],
                "./CrashErrors/el.json": [5647, 5647],
                "./CrashErrors/en.json": [7654, 7654],
                "./CrashErrors/es.json": [8679, 8679],
                "./CrashErrors/fr.json": [4690, 4690],
                "./CrashErrors/hi.json": [6210, 6210],
                "./CrashErrors/id.json": [2060, 2060],
                "./CrashErrors/it.json": [6550, 6550],
                "./CrashErrors/ja.json": [9837, 9837],
                "./CrashErrors/kk.json": [2464, 2464],
                "./CrashErrors/ko.json": [4127, 4127],
                "./CrashErrors/ky.json": [2579, 2579],
                "./CrashErrors/mo.json": [6804, 6804],
                "./CrashErrors/mr.json": [2799, 2799],
                "./CrashErrors/pl.json": [6344, 6344],
                "./CrashErrors/pt.json": [6e3, 6e3],
                "./CrashErrors/ro.json": [1447, 1447],
                "./CrashErrors/ru.json": [3918, 3918],
                "./CrashErrors/sw.json": [6364, 6364],
                "./CrashErrors/tg.json": [3378, 3378],
                "./CrashErrors/tr.json": [9655, 9655],
                "./CrashErrors/uk.json": [1247, 1247],
                "./CrashErrors/uz.json": [7102, 7102],
                "./CrashErrors/zh.json": [4943, 2140],
                "./Double/af.json": [354, 354],
                "./Double/az.json": [6150, 6150],
                "./Double/bn.json": [1176, 1176],
                "./Double/de.json": [8790, 8790],
                "./Double/el.json": [9414, 9414],
                "./Double/en.json": [352, 352],
                "./Double/es.json": [4757, 4757],
                "./Double/fr.json": [4154, 8474],
                "./Double/hi.json": [9833, 9833],
                "./Double/id.json": [9816, 9816],
                "./Double/it.json": [8933, 8933],
                "./Double/ja.json": [7374, 7374],
                "./Double/kk.json": [7256, 7256],
                "./Double/ko.json": [9808, 9808],
                "./Double/ky.json": [1760, 1760],
                "./Double/mo.json": [6463, 6463],
                "./Double/mr.json": [8856, 8856],
                "./Double/pl.json": [8125, 8125],
                "./Double/pt.json": [9828, 5251],
                "./Double/ro.json": [9968, 9968],
                "./Double/ru.json": [7734, 7734],
                "./Double/sw.json": [9252, 9252],
                "./Double/tg.json": [9956, 9956],
                "./Double/tr.json": [472, 472],
                "./Double/uk.json": [7617, 7617],
                "./Double/uz.json": [6918, 6918],
                "./Double/zh.json": [2580, 2580],
                "./Mines/af.json": [9258, 9258],
                "./Mines/az.json": [3446, 3446],
                "./Mines/bn.json": [2189, 2189],
                "./Mines/de.json": [9708, 9708],
                "./Mines/el.json": [2368, 2368],
                "./Mines/en.json": [9096, 9096],
                "./Mines/es.json": [5790, 5790],
                "./Mines/fr.json": [5566, 5566],
                "./Mines/hi.json": [9645, 9645],
                "./Mines/id.json": [9423, 9423],
                "./Mines/it.json": [8554, 8554],
                "./Mines/ja.json": [1187, 1187],
                "./Mines/kk.json": [5038, 5038],
                "./Mines/ko.json": [6360, 6360],
                "./Mines/ky.json": [8622, 8622],
                "./Mines/mo.json": [264, 264],
                "./Mines/mr.json": [3345, 3345],
                "./Mines/pl.json": [9565, 9565],
                "./Mines/pt.json": [299, 299],
                "./Mines/ro.json": [7055, 7055],
                "./Mines/ru.json": [674, 674],
                "./Mines/sw.json": [7208, 7208],
                "./Mines/tg.json": [2651, 2651],
                "./Mines/tr.json": [1284, 1284],
                "./Mines/uk.json": [5097, 5097],
                "./Mines/uz.json": [5668, 5668],
                "./Mines/zh.json": [966, 966],
                "./Predictor/en.json": [7033, 7033],
                "./Predictor/in.json": [7041, 7041],
                "./Predictor/ru.json": [2673, 5331],
                "./Predictor/uk.json": [9370, 9370],
                "./Tower/af.json": [4563, 4563],
                "./Tower/az.json": [1875, 9849],
                "./Tower/bn.json": [7975, 7975],
                "./Tower/de.json": [8148, 8148],
                "./Tower/el.json": [6008, 6008],
                "./Tower/en.json": [8979, 8979],
                "./Tower/es.json": [5351, 5351],
                "./Tower/fr.json": [5053, 5053],
                "./Tower/hi.json": [8744, 8744],
                "./Tower/id.json": [7268, 7268],
                "./Tower/it.json": [6670, 6670],
                "./Tower/ja.json": [9029, 9029],
                "./Tower/kk.json": [9579, 9579],
                "./Tower/ko.json": [3655, 3655],
                "./Tower/ky.json": [1736, 1736],
                "./Tower/mo.json": [9276, 9276],
                "./Tower/mr.json": [8542, 8542],
                "./Tower/pl.json": [5982, 5982],
                "./Tower/pt.json": [9641, 9641],
                "./Tower/ro.json": [8582, 8582],
                "./Tower/ru.json": [4851, 4851],
                "./Tower/sw.json": [9062, 9062],
                "./Tower/tg.json": [1483, 1483],
                "./Tower/tr.json": [3750, 3750],
                "./Tower/uk.json": [2702, 2702],
                "./Tower/uz.json": [8697, 8697],
                "./Tower/zh.json": [1773, 1773]
            };

            function r(n) {
                if (!s.o(e, n)) return Promise.resolve().then((function() {
                    var o = new Error("Cannot find module '" + n + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }));
                var o = e[n],
                    r = o[0];
                return s.e(o[1]).then((function() {
                    return s.t(r, 19)
                }))
            }
            r.keys = function() {
                return Object.keys(e)
            }, r.id = 5407, n.exports = r
        }
    }
]);
//# sourceMappingURL=1463.f69f93e8.chunk.js.map