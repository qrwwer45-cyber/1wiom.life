(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [82369], {
        382369: (s, g, t) => {
            "use strict";
            t.d(g, {
                Z: () => n
            });
            var e = t(166252),
                i = t(3577),
                r = t(602262),
                a = t(559166);
            const p = ["alt", "src"],
                o = (0, e.aZ)({
                    __name: "CasinoProviderIcon",
                    props: {
                        providerName: {},
                        logo: {}
                    },
                    setup(s) {
                        const g = ["stub-circle", "stub-pentagon", "stub-square"],
                            o = ["pink", "blue", "green"],
                            v = (s = "") => {
                                var t;
                                return null != (t = g[s.length % g.length]) ? t : g[0]
                            },
                            c = (s = "") => {
                                var g, t;
                                return null != (t = o[(null != (g = s.match(/[astro]/gi)) ? g : []).length % o.length]) ? t : o[0]
                            },
                            m = s,
                            u = (0, r.iH)(!1),
                            n = () => {
                                m.logo && (u.value = !0)
                            },
                            l = (0, e.Fl)((() => {
                                if (m.logo && !u.value) return m.logo;
                                try {
                                    return t(948629)(`./${m.providerName.toLowerCase()}.svg`)
                                } catch (s) {
                                    return
                                }
                            }));
                        return (s, g) => l.value ? ((0, e.wg)(), (0, e.iD)("img", {
                            key: 0,
                            alt: s.providerName,
                            src: l.value,
                            loading: "lazy",
                            onError: n
                        }, null, 40, p)) : ((0, e.wg)(), (0, e.iD)("div", {
                            key: 1,
                            class: (0, i.C_)(s.$style.stub)
                        }, [(0, e.Wm)(a.Z, {
                            class: (0, i.C_)([s.$style.figure, s.$style.default, s.$style[c(s.providerName)]]),
                            icon: v(s.providerName)
                        }, null, 8, ["class", "icon"]), ((0, e.wg)(), (0, e.j4)(a.Z, {
                            key: 1,
                            class: (0, i.C_)([s.$style.logo, s.$style.default]),
                            icon: "logo-short"
                        }, null, 8, ["class"]))], 2))
                    }
                }),
                v = {
                    stub: "CasinoProviderIcon_stub_hyyk0",
                    figure: "CasinoProviderIcon_figure_cCHqq",
                    default: "CasinoProviderIcon_default_F6uOd",
                    pink: "CasinoProviderIcon_pink_U_wMC",
                    blue: "CasinoProviderIcon_blue_rI71F",
                    green: "CasinoProviderIcon_green_PhTRn",
                    ls: "CasinoProviderIcon_ls_qXsHN",
                    logo: "CasinoProviderIcon_logo_qGdW2"
                };
            var c = t(348118);
            const m = {};
            m["$style"] = v;
            const u = (0, c.Z)(o, [
                    ["__cssModules", m]
                ]),
                n = u
        },
        948629: (s, g, t) => {
            var e = {
                "./100hp gaming.svg": 272636,
                "./1spin4win.svg": 10251,
                "./1win games.svg": 132684,
                "./1x2 multiplayer.svg": 652916,
                "./1x2.svg": 868854,
                "./1x2gaming.svg": 509143,
                "./2by2.svg": 299683,
                "./3 oaks gaming.svg": 164159,
                "./4theplayer.svg": 690893,
                "./5 men gaming.svg": 403455,
                "./5men gaming.svg": 902723,
                "./7777 gaming.svg": 672518,
                "./7777.svg": 778622,
                "./7mojos live.svg": 814909,
                "./7mojos slots.svg": 658928,
                "./Betsy.svg": 268514,
                "./EA gaming.svg": 80605,
                "./ae sexy.svg": 473570,
                "./agt.svg": 3841,
                "./ainsworthgame.svg": 10775,
                "./alchemy gaming.svg": 734388,
                "./alg.svg": 117332,
                "./all.svg": 472865,
                "./all41 studios.svg": 944262,
                "./all41.svg": 316257,
                "./allwayspin.svg": 528471,
                "./amatic.svg": 632224,
                "./amigogaming.svg": 925438,
                "./amusnet interactive.svg": 819661,
                "./apollo play.svg": 918440,
                "./apollo.svg": 203039,
                "./apparat.svg": 324741,
                "./atmosfera.svg": 624157,
                "./aura gaming.svg": 327664,
                "./aurumsignature.svg": 578755,
                "./authenticgaming.svg": 952649,
                "./avatarux.svg": 93074,
                "./aviatrix.svg": 873723,
                "./barbara bang.svg": 208030,
                "./belatra.svg": 150825,
                "./bet2tech.svg": 251506,
                "./beter live.svg": 20180,
                "./betgames.svg": 484633,
                "./betradarvs.svg": 41887,
                "./betsoft.svg": 982163,
                "./betsolutions.svg": 298675,
                "./bf games.svg": 595649,
                "./bgaming.svg": 247036,
                "./big time gaming.svg": 709646,
                "./blackpudding.svg": 838419,
                "./blue horn.svg": 846518,
                "./bluehorn.svg": 500980,
                "./blueprint.svg": 803292,
                "./boldplay.svg": 829916,
                "./bombay live.svg": 402553,
                "./boomerang.svg": 22214,
                "./booming games.svg": 333422,
                "./booming.svg": 697701,
                "./booongo.svg": 11225,
                "./caleta.svg": 92829,
                "./champion.svg": 849084,
                "./charismatic.svg": 390357,
                "./clawbuster.svg": 835750,
                "./cool games.svg": 889684,
                "./cq9.svg": 627605,
                "./crazy tooth studio.svg": 776776,
                "./ct gaming.svg": 742017,
                "./ct interactive.svg": 963086,
                "./cyberslots.svg": 96541,
                "./darwin gaming.svg": 828848,
                "./dicelab.svg": 25057,
                "./dwg.svg": 315586,
                "./eagaming.svg": 842019,
                "./edict.svg": 503606,
                "./egt.svg": 732401,
                "./elbet.svg": 454853,
                "./electric elephant .svg": 576765,
                "./electricelephant.svg": 740162,
                "./elk.svg": 534068,
                "./elysium.svg": 398720,
                "./endorphina.svg": 63895,
                "./eurasian gaming.svg": 839363,
                "./evolution gaming.svg": 696762,
                "./evolution.svg": 342483,
                "./evoplay.svg": 672434,
                "./eyecon.svg": 483088,
                "./ezugi.svg": 133580,
                "./fa chai.svg": 603927,
                "./fantasma.svg": 74360,
                "./fazi.svg": 743700,
                "./felix gaming.svg": 993094,
                "./felt.svg": 752557,
                "./fortune factory studios.svg": 734088,
                "./foxium.svg": 319780,
                "./fugaso.svg": 32225,
                "./funky games.svg": 740543,
                "./gacha.svg": 19181,
                "./galaxsys.svg": 928686,
                "./gameart.svg": 270040,
                "./gamebeat.svg": 267013,
                "./gameburger studios.svg": 715485,
                "./gameburger.svg": 13556,
                "./games global.svg": 517001,
                "./games inc.svg": 799394,
                "./games lab.svg": 478968,
                "./gameslab.svg": 563665,
                "./gamevy.svg": 488105,
                "./gaming corps.svg": 517821,
                "./gamomat premium.svg": 285983,
                "./gamomat standard.svg": 279799,
                "./gamomat.svg": 9707,
                "./gamshy.svg": 535584,
                "./gamzix.svg": 439184,
                "./ganapati.svg": 365528,
                "./genesis.svg": 142761,
                "./genii.svg": 806039,
                "./givme games.svg": 578426,
                "./givme.svg": 528035,
                "./gold coin studios.svg": 735910,
                "./golden hero games.svg": 749187,
                "./golden hero.svg": 995239,
                "./goldenrace.svg": 319842,
                "./goldenrock.svg": 489407,
                "./gonggaming.svg": 22438,
                "./green jade.svg": 879990,
                "./groove.svg": 201685,
                "./habanero.svg": 973148,
                "./hacksaw.svg": 935017,
                "./half pixel studios.svg": 770948,
                "./high 5.svg": 28089,
                "./high5.svg": 806398,
                "./hogaming.svg": 334740,
                "./holle games.svg": 45858,
                "./hollegames.svg": 24103,
                "./hub88 green jade.svg": 931755,
                "./hub88 onetouch.svg": 295681,
                "./iconic21.svg": 977241,
                "./igrosoft.svg": 173225,
                "./imoon.svg": 373713,
                "./infinitydragon.svg": 68068,
                "./ino games.svg": 509286,
                "./ino.svg": 77053,
                "./iron dog studio.svg": 710874,
                "./iron dog.svg": 923303,
                "./isoftbet.svg": 908338,
                "./jade rabbit.svg": 419038,
                "./jdb.svg": 230155,
                "./jftw.svg": 758617,
                "./jili games.svg": 20701,
                "./ka gaming.svg": 619078,
                "./kalamba.svg": 606033,
                "./king midas.svg": 279787,
                "./kiron.svg": 866006,
                "./leander games.svg": 578149,
                "./leander.svg": 77471,
                "./leap.svg": 391036,
                "./leep.svg": 145359,
                "./lightning box.svg": 391269,
                "./lightningbox.svg": 774366,
                "./liw.svg": 610527,
                "./lucky_streak.svg": 231697,
                "./luckystreak.svg": 483423,
                "./mancala gaming.svg": 765434,
                "./mascot gaming.svg": 226070,
                "./mascot.svg": 207779,
                "./mascotgaming.svg": 12389,
                "./max win gaming.svg": 62176,
                "./mg.svg": 674053,
                "./mga.svg": 490520,
                "./mgplus.svg": 433017,
                "./microgaming.svg": 66722,
                "./mrslotty.svg": 858056,
                "./naga games.svg": 167332,
                "./nailedit.svg": 388208,
                "./neko.svg": 971323,
                "./neon valley studios.svg": 400653,
                "./neonvalley.svg": 521256,
                "./netent.svg": 503782,
                "./netgame.svg": 693946,
                "./netgaming.svg": 605235,
                "./no limit city.svg": 516085,
                "./nolimit city.svg": 310500,
                "./northern lights gaming.svg": 87937,
                "./northern lights.svg": 330235,
                "./northernlights.svg": 918549,
                "./novomatic.svg": 731368,
                "./nsoft.svg": 6360,
                "./nucleus gaming.svg": 913060,
                "./nucleus.svg": 17169,
                "./octoplay.svg": 382928,
                "./oldskool.svg": 774971,
                "./onetouch.svg": 23260,
                "./onlyplay.svg": 522659,
                "./oryx.svg": 154754,
                "./pariplay.svg": 48519,
                "./pearfiction.svg": 101885,
                "./peter & sons.svg": 355333,
                "./pg soft.svg": 377509,
                "./pgsoft.svg": 14764,
                "./phoenix 7.svg": 654006,
                "./platipus.svg": 710201,
                "./play pearls.svg": 572568,
                "./playbro.svg": 474370,
                "./playngo.svg": 511661,
                "./playpearls.svg": 58906,
                "./playson.svg": 585183,
                "./playsondirect.svg": 310664,
                "./playtech.svg": 262878,
                "./playzia.svg": 939011,
                "./play’n go.svg": 161460,
                "./popiplay.svg": 192044,
                "./pragmatic play.svg": 594371,
                "./pragmatic.svg": 384874,
                "./prospect gaming.svg": 951337,
                "./pulse 8.svg": 932051,
                "./pulse8.svg": 821765,
                "./push gaming.svg": 502545,
                "./qubit.svg": 398578,
                "./quickspin.svg": 458879,
                "./rabcat.svg": 346332,
                "./raw igaming.svg": 594479,
                "./realistic.svg": 552912,
                "./red rake.svg": 227801,
                "./red tiger.svg": 506897,
                "./red_rake.svg": 537223,
                "./redrake.svg": 524023,
                "./redtiger.svg": 450348,
                "./reelplay.svg": 886332,
                "./relax.svg": 859317,
                "./retrogames.svg": 681324,
                "./revolver.svg": 63876,
                "./rogue.svg": 782156,
                "./royal gaming.svg": 194092,
                "./rtg slots.svg": 889794,
                "./rubyplay.svg": 457346,
                "./sa gaming.svg": 668939,
                "./sagaming.svg": 109461,
                "./salsa.svg": 669605,
                "./sapphire gaming.svg": 870300,
                "./silverback.svg": 41445,
                "./simpleplay.svg": 4294,
                "./skillzzgaming.svg": 770256,
                "./skywind.svg": 130913,
                "./slingshot.svg": 483834,
                "./slotmill.svg": 91907,
                "./slotopia.svg": 271093,
                "./smartsoft.svg": 8153,
                "./snowborn.svg": 931643,
                "./softswiss.svg": 460161,
                "./spadegaming.svg": 454987,
                "./spearhead.svg": 998584,
                "./spin oro.svg": 866609,
                "./spinmatic.svg": 460249,
                "./spinomenal.svg": 152764,
                "./spinplay games.svg": 235430,
                "./spinplay.svg": 137082,
                "./spinthon.svg": 897226,
                "./spribe.svg": 449646,
                "./stakelogic.svg": 942728,
                "./sthlm gaming.svg": 795440,
                "./stormcraft.svg": 492572,
                "./streambet.svg": 411285,
                "./superlotto.svg": 23666,
                "./swintt.svg": 691543,
                "./switch.svg": 317918,
                "./synot.svg": 395127,
                "./tadagaming.svg": 520152,
                "./thunderkick.svg": 532878,
                "./thunderspin.svg": 963299,
                "./tom horn.svg": 919438,
                "./tomhorn.svg": 154320,
                "./tpg.svg": 387777,
                "./triple edge studios.svg": 178370,
                "./triplecherry.svg": 563302,
                "./truelab.svg": 395506,
                "./turbo games.svg": 459919,
                "./tvbet.svg": 544234,
                "./upgaming.svg": 755951,
                "./vela gaming.svg": 728032,
                "./velagaming.svg": 503452,
                "./vibra gaming.svg": 448659,
                "./vibragaming.svg": 360548,
                "./virtual generation.svg": 256426,
                "./vivo gaming.svg": 155768,
                "./vivogaming.svg": 928927,
                "./wazdan.svg": 123410,
                "./winfinity.svg": 204776,
                "./worldmatch.svg": 81669,
                "./yggdrasil.svg": 889232,
                "./zeus play.svg": 175631,
                "./zeusplay.svg": 315444,
                "./zillion games.svg": 807526,
                "./zillion.svg": 737862
            };

            function i(s) {
                var g = r(s);
                return t(g)
            }

            function r(s) {
                if (!t.o(e, s)) {
                    var g = new Error("Cannot find module '" + s + "'");
                    throw g.code = "MODULE_NOT_FOUND", g
                }
                return e[s]
            }
            i.keys = function() {
                return Object.keys(e)
            }, i.resolve = r, s.exports = i, i.id = 948629
        },
        272636: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/100hp gaming.8352a77d8.svg"
        },
        10251: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/1spin4win.bb21057a4.svg"
        },
        132684: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/1win games.55f699199.svg"
        },
        652916: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/1x2 multiplayer.6636fe414.svg"
        },
        868854: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/1x2.6636fe414.svg"
        },
        509143: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/1x2gaming.6636fe414.svg"
        },
        299683: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/2by2.08548eaa3.svg"
        },
        164159: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/3 oaks gaming.a6d146d58.svg"
        },
        690893: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/4theplayer.f89265cdd.svg"
        },
        403455: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/5 men gaming.57e6f8e8e.svg"
        },
        902723: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/5men gaming.57e6f8e8e.svg"
        },
        672518: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/7777 gaming.728b84431.svg"
        },
        778622: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/7777.728b84431.svg"
        },
        814909: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/7mojos live.cb6749a25.svg"
        },
        658928: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/7mojos slots.c8ad63b4f.svg"
        },
        268514: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/Betsy.d514fefea.svg"
        },
        80605: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/EA gaming.b45fedde6.svg"
        },
        473570: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ae sexy.b10dd5bd0.svg"
        },
        3841: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/agt.893343a61.svg"
        },
        10775: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ainsworthgame.a0c569608.svg"
        },
        734388: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/alchemy gaming.0920ec870.svg"
        },
        117332: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/alg.46ce1f2fd.svg"
        },
        472865: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/all.8ddd52f93.svg"
        },
        944262: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/all41 studios.064ea508d.svg"
        },
        316257: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/all41.064ea508d.svg"
        },
        528471: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/allwayspin.d647c199a.svg"
        },
        632224: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/amatic.6a3b0b3c0.svg"
        },
        925438: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/amigogaming.552a396d7.svg"
        },
        819661: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/amusnet interactive.428b45c71.svg"
        },
        918440: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/apollo play.610da8846.svg"
        },
        203039: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/apollo.640794a29.svg"
        },
        324741: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/apparat.ce7d6f1e1.svg"
        },
        624157: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/atmosfera.32402e33f.svg"
        },
        327664: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/aura gaming.5e972a6c0.svg"
        },
        578755: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/aurumsignature.b6d0da355.svg"
        },
        952649: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/authenticgaming.2fd8f66a1.svg"
        },
        93074: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/avatarux.69af8da4e.svg"
        },
        873723: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/aviatrix.f66d23b1c.svg"
        },
        208030: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/barbara bang.4c6e37f30.svg"
        },
        150825: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/belatra.b7d8c5288.svg"
        },
        251506: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/bet2tech.d3b2d0d0e.svg"
        },
        20180: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/beter live.8751ff763.svg"
        },
        484633: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/betgames.f9572e26f.svg"
        },
        41887: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/betradarvs.e9687b781.svg"
        },
        982163: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/betsoft.e2b6126a1.svg"
        },
        298675: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/betsolutions.5d0a153ca.svg"
        },
        595649: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/bf games.981f6c089.svg"
        },
        247036: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/bgaming.ae3573ff9.svg"
        },
        709646: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/big time gaming.e2bd46001.svg"
        },
        838419: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/blackpudding.3f56f468c.svg"
        },
        846518: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/blue horn.1046a5d23.svg"
        },
        500980: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/bluehorn.1046a5d23.svg"
        },
        803292: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/blueprint.b87ba32a3.svg"
        },
        829916: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/boldplay.70a46bd71.svg"
        },
        402553: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/bombay live.ab678ab94.svg"
        },
        22214: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/boomerang.76d2d35c4.svg"
        },
        333422: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/booming games.dcdb710e5.svg"
        },
        697701: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/booming.dcdb710e5.svg"
        },
        11225: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/booongo.9d8eb0e7f.svg"
        },
        92829: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/caleta.67834e596.svg"
        },
        849084: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/champion.6b0ab1e4f.svg"
        },
        390357: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/charismatic.5f3a76021.svg"
        },
        835750: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/clawbuster.cbee8c496.svg"
        },
        889684: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/cool games.019d15340.svg"
        },
        627605: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/cq9.5d5072e17.svg"
        },
        776776: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/crazy tooth studio.742fc01b9.svg"
        },
        742017: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ct gaming.74b20dbc3.svg"
        },
        963086: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ct interactive.74b20dbc3.svg"
        },
        96541: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/cyberslots.988fdd12e.svg"
        },
        828848: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/darwin gaming.c2a3ae0e1.svg"
        },
        25057: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/dicelab.b6d3872b5.svg"
        },
        315586: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/dwg.48f43ad65.svg"
        },
        842019: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/eagaming.b45fedde6.svg"
        },
        503606: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/edict.8b3e4dc54.svg"
        },
        732401: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/egt.428b45c71.svg"
        },
        454853: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/elbet.701d0b0cd.svg"
        },
        576765: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/electric elephant .dd56c804d.svg"
        },
        740162: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/electricelephant.dd56c804d.svg"
        },
        534068: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/elk.c0f58697d.svg"
        },
        398720: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/elysium.f27454bd7.svg"
        },
        63895: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/endorphina.20b721ba6.svg"
        },
        839363: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/eurasian gaming.d2a5e56b2.svg"
        },
        696762: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/evolution gaming.acb5f3085.svg"
        },
        342483: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/evolution.acb5f3085.svg"
        },
        672434: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/evoplay.ea6a25e14.svg"
        },
        483088: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/eyecon.689dde899.svg"
        },
        133580: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ezugi.a9c66babd.svg"
        },
        603927: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/fa chai.8d7d92bec.svg"
        },
        74360: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/fantasma.a04f2b12f.svg"
        },
        743700: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/fazi.19d7f4b72.svg"
        },
        993094: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/felix gaming.86fd6e4d4.svg"
        },
        752557: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/felt.55bc4ad1f.svg"
        },
        734088: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/fortune factory studios.4be914639.svg"
        },
        319780: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/foxium.f1a971707.svg"
        },
        32225: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/fugaso.90ac21190.svg"
        },
        740543: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/funky games.dcf6a7494.svg"
        },
        19181: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gacha.42ea00c16.svg"
        },
        928686: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/galaxsys.e2e9aafd5.svg"
        },
        270040: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gameart.7beff0d18.svg"
        },
        267013: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gamebeat.5649e97f9.svg"
        },
        715485: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gameburger studios.a8f51400d.svg"
        },
        13556: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gameburger.a8f51400d.svg"
        },
        517001: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/games global.0ca2594db.svg"
        },
        799394: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/games inc.64fb099a0.svg"
        },
        478968: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/games lab.f7ad4ef73.svg"
        },
        563665: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gameslab.f7ad4ef73.svg"
        },
        488105: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gamevy.ba118d702.svg"
        },
        517821: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gaming corps.88eb0eda9.svg"
        },
        285983: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gamomat premium.593230062.svg"
        },
        279799: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gamomat standard.593230062.svg"
        },
        9707: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gamomat.593230062.svg"
        },
        535584: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gamshy.a7cab2c99.svg"
        },
        439184: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gamzix.7bd980c59.svg"
        },
        365528: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ganapati.34b86935e.svg"
        },
        142761: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/genesis.b2e408153.svg"
        },
        806039: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/genii.367222bbe.svg"
        },
        578426: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/givme games.28b4357aa.svg"
        },
        528035: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/givme.144dc6403.svg"
        },
        735910: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gold coin studios.e49164d9a.svg"
        },
        749187: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/golden hero games.fbd6c084f.svg"
        },
        995239: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/golden hero.fbd6c084f.svg"
        },
        319842: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/goldenrace.6cac2dde8.svg"
        },
        489407: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/goldenrock.da2498b32.svg"
        },
        22438: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/gonggaming.a20ad013e.svg"
        },
        879990: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/green jade.2e82869df.svg"
        },
        201685: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/groove.d1a0dcbe3.svg"
        },
        973148: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/habanero.92654c79c.svg"
        },
        935017: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/hacksaw.5f0e80ecd.svg"
        },
        770948: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/half pixel studios.8f87caf61.svg"
        },
        28089: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/high 5.9606c1f07.svg"
        },
        806398: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/high5.9606c1f07.svg"
        },
        334740: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/hogaming.2ac610f79.svg"
        },
        45858: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/holle games.c8636a862.svg"
        },
        24103: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/hollegames.c8636a862.svg"
        },
        931755: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/hub88 green jade.5cdfdfbb1.svg"
        },
        295681: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/hub88 onetouch.aa2be7f10.svg"
        },
        977241: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/iconic21.61f2554de.svg"
        },
        173225: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/igrosoft.32f208d8a.svg"
        },
        373713: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/imoon.61484976d.svg"
        },
        68068: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/infinitydragon.e6be29d4a.svg"
        },
        509286: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ino games.7f80bd34e.svg"
        },
        77053: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ino.7f80bd34e.svg"
        },
        710874: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/iron dog studio.50834cffd.svg"
        },
        923303: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/iron dog.50834cffd.svg"
        },
        908338: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/isoftbet.8914c9cb0.svg"
        },
        419038: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/jade rabbit.1229410d3.svg"
        },
        230155: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/jdb.c54699db0.svg"
        },
        758617: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/jftw.b2aeb8946.svg"
        },
        20701: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/jili games.8abdc5eca.svg"
        },
        619078: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/ka gaming.b92968928.svg"
        },
        606033: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/kalamba.6e06f7faa.svg"
        },
        279787: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/king midas.46eadc03e.svg"
        },
        866006: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/kiron.277734550.svg"
        },
        578149: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/leander games.b94509f4b.svg"
        },
        77471: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/leander.b67d8ad3b.svg"
        },
        391036: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/leap.f4cfad944.svg"
        },
        145359: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/leep.f4cfad944.svg"
        },
        391269: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/lightning box.0e26c8a8d.svg"
        },
        774366: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/lightningbox.0e26c8a8d.svg"
        },
        610527: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/liw.6fd6f40a6.svg"
        },
        231697: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/lucky_streak.f73da4105.svg"
        },
        483423: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/luckystreak.f73da4105.svg"
        },
        765434: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mancala gaming.441ae5f23.svg"
        },
        226070: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mascot gaming.21cafbe70.svg"
        },
        207779: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mascot.21cafbe70.svg"
        },
        12389: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mascotgaming.21cafbe70.svg"
        },
        62176: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/max win gaming.d7fd61c4b.svg"
        },
        674053: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mg.f4faa6ad7.svg"
        },
        490520: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mga.4a09a7841.svg"
        },
        433017: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mgplus.8993d2272.svg"
        },
        66722: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/microgaming.ec2c3af38.svg"
        },
        858056: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/mrslotty.386b24cd0.svg"
        },
        167332: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/naga games.bef3103a4.svg"
        },
        388208: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/nailedit.d1bad4491.svg"
        },
        971323: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/neko.77a9f716c.svg"
        },
        400653: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/neon valley studios.c29bae2d5.svg"
        },
        521256: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/neonvalley.c29bae2d5.svg"
        },
        503782: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/netent.832d3ac87.svg"
        },
        693946: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/netgame.8e28ed366.svg"
        },
        605235: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/netgaming.15e873e77.svg"
        },
        516085: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/no limit city.5b7440267.svg"
        },
        310500: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/nolimit city.5b7440267.svg"
        },
        87937: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/northern lights gaming.45b12b0bd.svg"
        },
        330235: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/northern lights.45b12b0bd.svg"
        },
        918549: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/northernlights.45b12b0bd.svg"
        },
        731368: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/novomatic.ef5fc0af9.svg"
        },
        6360: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/nsoft.c2fa75ca3.svg"
        },
        913060: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/nucleus gaming.689a48544.svg"
        },
        17169: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/nucleus.689a48544.svg"
        },
        382928: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/octoplay.998a500f2.svg"
        },
        774971: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/oldskool.3ab291fe8.svg"
        },
        23260: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/onetouch.b026a50c5.svg"
        },
        522659: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/onlyplay.15398cd2b.svg"
        },
        154754: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/oryx.ddc50c514.svg"
        },
        48519: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pariplay.c9acc798f.svg"
        },
        101885: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pearfiction.1a59ef3b4.svg"
        },
        355333: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/peter & sons.3daf8394c.svg"
        },
        377509: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pg soft.fdb9d6567.svg"
        },
        14764: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pgsoft.fdb9d6567.svg"
        },
        654006: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/phoenix 7.4d0107ac2.svg"
        },
        710201: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/platipus.89b7c6a63.svg"
        },
        572568: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/play pearls.2b22f4f7c.svg"
        },
        474370: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/playbro.6853e7d6a.svg"
        },
        511661: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/playngo.c99175608.svg"
        },
        58906: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/playpearls.2b22f4f7c.svg"
        },
        585183: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/playson.2ff1c7d85.svg"
        },
        310664: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/playsondirect.2ff1c7d85.svg"
        },
        262878: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/playtech.37dbca5ed.svg"
        },
        939011: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/playzia.3bf069544.svg"
        },
        161460: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/play’n go.c99175608.svg"
        },
        192044: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/popiplay.87bfe20c1.svg"
        },
        594371: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pragmatic play.362d671f3.svg"
        },
        384874: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pragmatic.362d671f3.svg"
        },
        951337: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/prospect gaming.732c526de.svg"
        },
        932051: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pulse 8.36d2273dc.svg"
        },
        821765: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/pulse8.36d2273dc.svg"
        },
        502545: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/push gaming.c52dccc10.svg"
        },
        398578: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/qubit.68ee1cf4b.svg"
        },
        458879: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/quickspin.d9067a98a.svg"
        },
        346332: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/rabcat.2c420db80.svg"
        },
        594479: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/raw igaming.925b07db7.svg"
        },
        552912: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/realistic.a22ebe0df.svg"
        },
        227801: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/red rake.9fdc4fde5.svg"
        },
        506897: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/red tiger.157f419e2.svg"
        },
        537223: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/red_rake.77b0a6e2e.svg"
        },
        524023: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/redrake.77b0a6e2e.svg"
        },
        450348: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/redtiger.9bc88b677.svg"
        },
        886332: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/reelplay.48f33ff68.svg"
        },
        859317: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/relax.1a68769f8.svg"
        },
        681324: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/retrogames.bb592a878.svg"
        },
        63876: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/revolver.4377b394a.svg"
        },
        782156: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/rogue.f414ab313.svg"
        },
        194092: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/royal gaming.6051bcfa1.svg"
        },
        889794: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/rtg slots.dd0fa2f39.svg"
        },
        457346: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/rubyplay.b4553f39e.svg"
        },
        668939: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/sa gaming.396c34ca4.svg"
        },
        109461: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/sagaming.8b02b0968.svg"
        },
        669605: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/salsa.8d18d113d.svg"
        },
        870300: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/sapphire gaming.eaf220b09.svg"
        },
        41445: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/silverback.297288e25.svg"
        },
        4294: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/simpleplay.0d23a237f.svg"
        },
        770256: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/skillzzgaming.8284f5bc8.svg"
        },
        130913: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/skywind.9cd4f870b.svg"
        },
        483834: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/slingshot.5680a5113.svg"
        },
        91907: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/slotmill.5edc170d2.svg"
        },
        271093: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/slotopia.c697aa64c.svg"
        },
        8153: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/smartsoft.d4a2c90f3.svg"
        },
        931643: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/snowborn.911e596aa.svg"
        },
        460161: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/softswiss.956b36fd8.svg"
        },
        454987: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spadegaming.8dc1e9a8e.svg"
        },
        998584: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spearhead.27c37f3dd.svg"
        },
        866609: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spin oro.cdaeeedf5.svg"
        },
        460249: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spinmatic.f74cf69af.svg"
        },
        152764: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spinomenal.e0cf93b3a.svg"
        },
        235430: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spinplay games.ae3a2dd5e.svg"
        },
        137082: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spinplay.ae3a2dd5e.svg"
        },
        897226: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spinthon.15b96de40.svg"
        },
        449646: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/spribe.81737e382.svg"
        },
        942728: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/stakelogic.a359f5eb8.svg"
        },
        795440: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/sthlm gaming.722906be2.svg"
        },
        492572: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/stormcraft.796339337.svg"
        },
        411285: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/streambet.9f65157ae.svg"
        },
        23666: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/superlotto.0b2069aeb.svg"
        },
        691543: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/swintt.7c851d380.svg"
        },
        317918: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/switch.be50a6ae3.svg"
        },
        395127: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/synot.4987c08e6.svg"
        },
        520152: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/tadagaming.049fea1ab.svg"
        },
        532878: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/thunderkick.6962312e1.svg"
        },
        963299: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/thunderspin.c2166ddfc.svg"
        },
        919438: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/tom horn.5ecc223d7.svg"
        },
        154320: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/tomhorn.5ecc223d7.svg"
        },
        387777: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/tpg.5385fed76.svg"
        },
        178370: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/triple edge studios.83529da72.svg"
        },
        563302: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/triplecherry.3eacb6a26.svg"
        },
        395506: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/truelab.fc8d60be5.svg"
        },
        459919: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/turbo games.ce61b6653.svg"
        },
        544234: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/tvbet.fea6d0222.svg"
        },
        755951: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/upgaming.f46450101.svg"
        },
        728032: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/vela gaming.a9a6e60fa.svg"
        },
        503452: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/velagaming.a9a6e60fa.svg"
        },
        448659: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/vibra gaming.e9d992d94.svg"
        },
        360548: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/vibragaming.e9d992d94.svg"
        },
        256426: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/virtual generation.eb4d59dbd.svg"
        },
        155768: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/vivo gaming.358375d3b.svg"
        },
        928927: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/vivogaming.358375d3b.svg"
        },
        123410: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/wazdan.041e0ef3e.svg"
        },
        204776: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/winfinity.84ed6fd84.svg"
        },
        81669: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/worldmatch.9f3d40aa7.svg"
        },
        889232: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/yggdrasil.a6bc350dc.svg"
        },
        175631: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/zeus play.9f45a8226.svg"
        },
        315444: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/zeusplay.9f45a8226.svg"
        },
        807526: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/zillion games.c0e3dd6f0.svg"
        },
        737862: (s, g, t) => {
            "use strict";
            s.exports = t.p + "img/zillion.c0e3dd6f0.svg"
        }
    }
]);