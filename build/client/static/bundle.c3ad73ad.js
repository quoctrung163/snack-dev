!(function (e) {
    function a(a) {
        for (var A, s, c = a[0], l = a[1], o = a[2], m = 0, u = []; m < c.length; m++)
            (s = c[m]),
                Object.prototype.hasOwnProperty.call(n, s) && n[s] && u.push(n[s][0]),
                (n[s] = 0);
        for (A in l) Object.prototype.hasOwnProperty.call(l, A) && (e[A] = l[A]);
        for (i && i(a); u.length; ) u.shift()();
        return r.push.apply(r, o || []), t();
    }
    function t() {
        for (var e, a = 0; a < r.length; a++) {
            for (var t = r[a], A = !0, c = 1; c < t.length; c++) {
                var l = t[c];
                0 !== n[l] && (A = !1);
            }
            A && (r.splice(a--, 1), (e = s((s.s = t[0]))));
        }
        return e;
    }
    var A = {},
        n = { 0: 0 },
        r = [];
    function s(a) {
        if (A[a]) return A[a].exports;
        var t = (A[a] = { i: a, l: !1, exports: {} });
        return e[a].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
    }
    (s.m = e),
        (s.c = A),
        (s.d = function (e, a, t) {
            s.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
        }),
        (s.r = function (e) {
            'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (s.t = function (e, a) {
            if ((1 & a && (e = s(e)), 8 & a)) return e;
            if (4 & a && 'object' === typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (
                (s.r(t),
                Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
                2 & a && 'string' != typeof e)
            )
                for (var A in e)
                    s.d(
                        t,
                        A,
                        function (a) {
                            return e[a];
                        }.bind(null, A)
                    );
            return t;
        }),
        (s.n = function (e) {
            var a =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return s.d(a, 'a', a), a;
        }),
        (s.o = function (e, a) {
            return Object.prototype.hasOwnProperty.call(e, a);
        }),
        (s.p = '/static/');
    var c = (window.webpackJsonp = window.webpackJsonp || []),
        l = c.push.bind(c);
    (c.push = a), (c = c.slice());
    for (var o = 0; o < c.length; o++) a(c[o]);
    var i = l;
    r.push([0, 1]), t();
})({
    './src/client/index.tsx': function (e, a, t) {
        'use strict';
        t.r(a);
        var A = t('./node_modules/react/index.js'),
            n = t.n(A),
            r = t('./node_modules/react-dom/index.js'),
            s = t('./node_modules/react-redux/es/index.js'),
            c = t('./node_modules/react-router/esm/react-router.js'),
            l = t('./node_modules/react-helmet-async/lib/index.module.js'),
            o = t('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
            i = t('./node_modules/redux-thunk/es/index.js'),
            m = t('./node_modules/redux/es/redux.js'),
            u = t('./node_modules/immer/dist/immer.esm.js'),
            f = 'app/set-locale',
            d = Object.freeze({ locale: 'en_US' }),
            p = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                    a = arguments.length > 1 ? arguments[1] : void 0;
                return Object(u.a)(e, function (e) {
                    switch (a.type) {
                        case f:
                            return void (e.locale = a.payload);
                    }
                });
            };
        function E(e) {
            return (E =
                'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              'function' === typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      })(e);
        }
        var v = function (e) {
                return (
                    void 0 === e ||
                    null === e ||
                    ('object' === E(e) && 0 === Object.keys(e).length) ||
                    ('string' === typeof e && 0 === e.trim().length)
                );
            },
            g = 'SET_CURRENT_USER',
            y = function (e) {
                return { type: g, payload: e };
            },
            h = Object.freeze({ auth: { isAuthenticated: !1, users: {} } }),
            b = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                    a = arguments.length > 1 ? arguments[1] : void 0;
                return Object(u.a)(e, function (t) {
                    switch (a.type) {
                        case g:
                            return (
                                (t.auth.isAuthenticated = !v(a.payload)),
                                void (t.auth.users = a.payload)
                            );
                        default:
                            return e;
                    }
                });
            },
            N = 'GET_ERRORS',
            w = Object.freeze({ errors: {} }),
            j = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
                    a = arguments.length > 1 ? arguments[1] : void 0;
                return Object(u.a)(e, function (t) {
                    switch (a.type) {
                        case N:
                            return a.payload;
                        default:
                            return e;
                    }
                });
            },
            _ = 'GET_PROFILE',
            x = 'GET_PROFILES',
            O = 'PROFILE_LOADING',
            S = 'CLEAR_CURRENT_PROFILE',
            P = function (e) {
                return { type: _, payload: e };
            },
            I = function () {
                return { type: O };
            },
            M = Object.freeze({ profile: { profile: null, profiles: null, loading: !1 } }),
            B = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
                    a = arguments.length > 1 ? arguments[1] : void 0;
                return Object(u.a)(e, function (t) {
                    switch (a.type) {
                        case O:
                            return void (t.profile.loading = !0);
                        case _:
                            return (t.profile.profile = a.payload), void (t.profile.loading = !1);
                        case x:
                            return (t.profile.profiles = a.payload), void (t.profile.loading = !1);
                        case S:
                            return void (t.profile.profile = null);
                        default:
                            return e;
                    }
                });
            },
            k = function () {
                return Object(m.c)({ app: p, auth: b, errors: j, profile: B });
            };
        function L(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return z(e);
                })(e) ||
                (function (e) {
                    if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
                        return Array.from(e);
                })(e) ||
                (function (e, a) {
                    if (!e) return;
                    if ('string' === typeof e) return z(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    'Object' === t && e.constructor && (t = e.constructor.name);
                    if ('Map' === t || 'Set' === t) return Array.from(e);
                    if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                        return z(e, a);
                })(e) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function z(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, A = new Array(a); t < a; t++) A[t] = e[t];
            return A;
        }
        var D = function (e) {
                var a,
                    t = e.initialState,
                    A = e.middleware,
                    n = void 0 === A ? [] : A,
                    r =
                        ('undefined' !== typeof window &&
                            'function' === typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
                            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                                actionsBlacklist: [],
                            })) ||
                        m.d;
                return Object(m.e)(
                    k(),
                    t,
                    r(m.a.apply(void 0, L((a = [i.a]).concat.apply(a, L(n)))))
                );
            },
            T = t('./node_modules/jwt-decode/build/jwt-decode.esm.js'),
            Q = t.p + 'assets/favicon.d2e685d3.png',
            q = t('./node_modules/axios/index.js'),
            C = t.n(q),
            H = function (e) {
                e
                    ? (C.a.defaults.headers.common.Authorization = e)
                    : delete C.a.defaults.headers.common.Authorization;
            };
        var U = function (e, a) {
                e(J(a)),
                    e(function (e) {
                        e(I()),
                            C()({ method: 'get', url: '/api/profile' })
                                .then(function (a) {
                                    return e(P(a.data));
                                })
                                .catch(function (a) {
                                    return e(P({}));
                                });
                    });
            },
            R = function (e, a) {
                e(J(a)), e({ type: S });
            },
            J = function (e) {
                return function (a) {
                    a(y(e));
                };
            },
            G = function (e) {
                return function (a) {
                    localStorage.removeItem('jwtToken'), H(!1), R(a, {}), e();
                };
            },
            W = t('./node_modules/react-i18next/dist/es/useTranslation.js'),
            X = t('./node_modules/react-countup/build/index.js'),
            Z = t.n(X),
            F = t('./node_modules/react-visibility-sensor/dist/visibility-sensor.js'),
            V = t.n(F);
        t('./src/shared/components/Introduction/Introduction.Styles.css');
        function Y(e, a) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, a) {
                    if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        A = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (
                            var s, c = e[Symbol.iterator]();
                            !(A = (s = c.next()).done) && (t.push(s.value), !a || t.length !== a);
                            A = !0
                        );
                    } catch (l) {
                        (n = !0), (r = l);
                    } finally {
                        try {
                            A || null == c.return || c.return();
                        } finally {
                            if (n) throw r;
                        }
                    }
                    return t;
                })(e, a) ||
                (function (e, a) {
                    if (!e) return;
                    if ('string' === typeof e) return K(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    'Object' === t && e.constructor && (t = e.constructor.name);
                    if ('Map' === t || 'Set' === t) return Array.from(e);
                    if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                        return K(e, a);
                })(e, a) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function K(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, A = new Array(a); t < a; t++) A[t] = e[t];
            return A;
        }
        var $ = function () {
                var e = Y(Object(A.useState)(!1), 2),
                    a = e[0],
                    t = e[1];
                return n.a.createElement(
                    'section',
                    { className: 'about-two' },
                    n.a.createElement(
                        'div',
                        { className: 'container' },
                        n.a.createElement(
                            'div',
                            { className: 'row' },
                            n.a.createElement(
                                'div',
                                { className: 'col-xl-6' },
                                n.a.createElement(
                                    'div',
                                    { className: 'about-two__content' },
                                    n.a.createElement(
                                        'div',
                                        { className: 'block-title text-left' },
                                        n.a.createElement(
                                            'h2',
                                            { className: 'block-title__title' },
                                            'Welcome to online ',
                                            n.a.createElement('br', null),
                                            'learning center'
                                        )
                                    ),
                                    n.a.createElement(
                                        'p',
                                        { className: 'about-two__text' },
                                        'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which dont look.'
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'about-two__single-wrap' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'about-two__single' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'about-two__single-icon' },
                                                n.a.createElement('i', {
                                                    className: 'fad fa-graduation-cap',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'about-two__single-content' },
                                                n.a.createElement(
                                                    'p',
                                                    { className: 'about-two__single-text' },
                                                    'Start learning from our experts'
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            'div',
                                            { className: 'about-two__single' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'about-two__single-icon' },
                                                n.a.createElement('i', {
                                                    className: 'fad fa-lightbulb-on',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'about-two__single-content' },
                                                n.a.createElement(
                                                    'p',
                                                    { className: 'about-two__single-text' },
                                                    'Enhance your skills with us now'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'a',
                                        { href: '#none', className: 'thm-btn' },
                                        'Learn More'
                                    )
                                )
                            ),
                            n.a.createElement(
                                'div',
                                {
                                    className:
                                        'col-xl-6 d-flex justify-content-xl-end justify-content-sm-center',
                                },
                                n.a.createElement(
                                    'div',
                                    { className: 'about-two__image' },
                                    n.a.createElement('span', {
                                        className: 'about-two__image-dots',
                                    }),
                                    n.a.createElement('img', {
                                        style: { borderRadius: '100% !important' },
                                        src: 'https://picsum.photos/1000/1000',
                                        alt: '',
                                    }),
                                    n.a.createElement(
                                        'div',
                                        { className: 'about-two__count' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'about-two__count-text' },
                                            'Trusted by',
                                            n.a.createElement(
                                                'span',
                                                { className: 'counter' },
                                                n.a.createElement(
                                                    V.a,
                                                    {
                                                        onChange: function (e) {
                                                            e && t(!0);
                                                        },
                                                        offset: { top: 10 },
                                                        delayedCall: !0,
                                                    },
                                                    n.a.createElement(Z.a, { end: a ? 4890 : 0 })
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            ee = t('./node_modules/react-id-swiper/lib/index.js'),
            ae = t.n(ee),
            te =
                (t('./src/shared/components/Partners/Partners.Styles.css'),
                t.p + 'assets/logo-directi.18dd051e.png'),
            Ae = t.p + 'assets/logo-gojek.23eb1ffd.png',
            ne = t.p + 'assets/logo-make-my-trip.a2496fca.png',
            re = t.p + 'assets/logo-microsoft.cbde2802.png',
            se = t.p + 'assets/logo-paytm.5b526b60.png',
            ce = t.p + 'assets/logo-swiggy.e9cca04e.png',
            le = t.p + 'assets/logo-zomato.b934be76.png',
            oe = function () {
                var e = {
                    slidesPerView: 5,
                    loop: !0,
                    speed: 1e3,
                    spaceBetween: 30,
                    autoplay: { delay: 3e3, disableOnInteraction: !1 },
                    breakpoints: {
                        1024: { slidesPerView: 5 },
                        768: { slidesPerView: 4 },
                        640: { slidesPerView: 3 },
                        320: { slidesPerView: 2 },
                    },
                };
                return n.a.createElement(
                    'section',
                    { className: 'brand-two' },
                    n.a.createElement(
                        'div',
                        { className: 'container' },
                        n.a.createElement(
                            'div',
                            { className: 'block-title' },
                            n.a.createElement(
                                'h2',
                                { className: 'block-title__title' },
                                'Our students work at'
                            )
                        ),
                        n.a.createElement(
                            'div',
                            { className: 'brand-one__carousel' },
                            n.a.createElement(
                                ae.a,
                                e,
                                n.a.createElement(
                                    'div',
                                    { className: 'item' },
                                    n.a.createElement('img', { src: te, alt: '' })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'item' },
                                    n.a.createElement('img', { src: Ae, alt: '' })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'item' },
                                    n.a.createElement('img', { src: ne, alt: '' })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'item' },
                                    n.a.createElement('img', { src: re, alt: '' })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'item' },
                                    n.a.createElement('img', { src: se, alt: '' })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'item' },
                                    n.a.createElement('img', { src: ce, alt: '' })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'item' },
                                    n.a.createElement('img', { src: le, alt: '' })
                                )
                            )
                        )
                    )
                );
            },
            ie =
                (t('./src/shared/components/CourseOne/CourseOne.Styles.css'),
                t('./node_modules/swiper/css/swiper.css'),
                t.p + 'assets/course-1-1.d65ab613.jpg'),
            me = t.p + 'assets/course-1-2.d65ab613.jpg',
            ue = t.p + 'assets/course-1-3.d65ab613.jpg',
            fe = t.p + 'assets/course-1-4.d65ab613.jpg',
            de = t.p + 'assets/course-1-5.d65ab613.jpg',
            pe = t.p + 'assets/course-1-6.d65ab613.jpg',
            Ee =
                'data:image/jpeg;base64,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',
            ve =
                'data:image/jpeg;base64,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',
            ge =
                'data:image/jpeg;base64,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',
            ye = function () {
                var e = {
                    slidesPerView: 3,
                    loop: !0,
                    speed: 1e3,
                    spaceBetween: 30,
                    autoplay: { delay: 3e3, disableOnInteraction: !1 },
                    pagination: { el: '.swiper-pagination', clickable: !0 },
                    breakpoints: {
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        320: { slidesPerView: 1 },
                    },
                };
                return n.a.createElement(
                    'div',
                    {
                        style: {
                            fontFamily: 'Poppins, sans-serif',
                            marginTop: '6%',
                            borderBottom: '1px solid #eee',
                        },
                    },
                    n.a.createElement(
                        'div',
                        { className: 'block-title' },
                        n.a.createElement(
                            'h2',
                            { className: 'block-title__title' },
                            'Explore our ',
                            n.a.createElement('br', null),
                            'popular courses'
                        )
                    ),
                    n.a.createElement(
                        'section',
                        { className: 'course-one course-one__teacher-details home-one' },
                        n.a.createElement(
                            'div',
                            { className: 'container' },
                            n.a.createElement(
                                'div',
                                { className: 'course-one__carousel' },
                                n.a.createElement(
                                    ae.a,
                                    e,
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-1' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: ie, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'development'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', { src: Ee, alt: '' }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Lou Guerrero'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'New react bootcamp'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-2' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: me, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'It & Software'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', { src: ve, alt: '' }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Cora Diaz'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'Improve editing skills'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-3' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: ue, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'marketing'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', { src: ge, alt: '' }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Ruth Becker'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'Marketing strategies'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-4' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: fe, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'Photography'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', {
                                                        src:
                                                            'data:image/jpeg;base64,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',
                                                        alt: '',
                                                    }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Ernest Rodriquez'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'Basics of photography'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-5' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: de, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'marketing'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', {
                                                        src:
                                                            'data:image/jpeg;base64,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',
                                                        alt: '',
                                                    }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Isabella Stanley'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'Affiliate bootcamp'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-6' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: pe, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'Health & Fitness'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', {
                                                        src:
                                                            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADOAM4DASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAMEAgUBB//EADIQAAICAgECAwUIAgMBAAAAAAABAgMREgQTITFBURQicYGRBSMyQmGhwdGx8CQzkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLy6bOROmtZ6OW7cPGfRGow/aXK6Eaq1Z0uq2nZjOqXjj9QMtk1wZcuvjyfTjUnjOdJN4Lezx4F/GnW5feS6dmZN7Nrx+px/xORwLuLw5bT12fZ5k0/Ns79ojz7+NCtS+7l1LMxa1aXh9QIXT4t3IvfKucXGTrqWX7uPPt+p6tKkuPBSmrJar3l4S/U85WUcOzl13we1s3KPut7p+S+eTZwYSo4FULe0ox758gJr7Q2hFKr7+VnTdW3g14vPpg12bqqfTWZ6vX4+R5MJuPLX2jKKVNkun4d0vBS/Y9W2xVVTsfhGLk/kB5d3GXE41V+0vbNo5ezezb7oouPHn28qybltCbrqxJrTC8V8yPF5fDc1yOTyFPkPwTi8Q/Rdiy5EeBbyq5qW05uyrEW98rwXzA4s5XW4XEVtjhG3LslnHaK7/U0fZ6pTsfFtUqHjEO/uv5kJcdcajg2XQco053WM65Xj8mW4rjfz7uTUn0XBR2xjZ+oG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJZfdB3zTr0qklq4vL91Pxz+voBrBD2qPU11nrtpvj3c+n17HS5Feyi21JzcEn6oCoIe0x1g4wnJzzrFJZaXn8P7EuVCNdc1GcupLVRS757/0wLghLlRi3mueIpbvCxDPr3/xknzOTpRfGEbHKMHmcfyvHYDWCPLk48O+UW01XJpry7CHIU2107Iy12SklmS/QCwJRvhPpa5fUWVjyX6nNvIhTfXGycIQlGTzJ47pr+2BcGaPId9s4ce2pqMYvbG3jtldmvRE1fyfYY35qlOxQ1jq0ls0u/fv4gbQY7OY8UOpJ7uO+35U5JfXL/Zmiuxzsui8YhPVf+U/5AoCV1kq1FQSc5y1jnw9f8JnzeyqqydzhJRjtmCa+PmBYGbqcivSdqr0k1FxinmOey7+ff4HFfMeL3aktHLTH5km19cr90BsBHi2WW0KVqip7Si1Hw7Nr+CwAAAAAAIx4tSustlCEpykmm4rK7JYz8iwAz+zS2x1Put+ppr3znPj6Z7nNnD3tssVjUpJa9vwvt3/ZfQ1ADNbw4WQqilBupax3hssfD5HUeOoxpScV05OWIxwnlNeHl4lwBkt4MLLpWYqzPG29ak/Ts/L9z7fxZ2K6MLtI2r3lrnvjHbv6YNQA4ur61FlWcbxcc+mUThVKE+rbZ1HGLSxDHbz+L7IuAM3Eq16lrTjvJuMX+WOf/r+ZZ15vhbn8MZRx8Wv6OwBwq8Xztz+KMY4+Df8AZNcfHFqp2/69O+PHVp/wXAEJcWv3tFq5TjOT8c4ln/fifOjdG2yVdtaU5bYlW3jsl6r0NAAlZTKxPNjTUlKDS/D2x8/P6iNc5QnG6cZqSxiMdVj6sqAM8ePY3FWXbwg00tcN48Mvz/Y+x4tfu7rZxnKcX4YzLP8AvwLgDiqvpQcc5zKUvq2/5OwAP//Z',
                                                        alt: '',
                                                    }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Katherine Collins'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'Healthy workout tips '
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-1' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: ie, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'development'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', { src: Ee, alt: '' }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Lou Guerrero'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'New react bootcamp'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-2' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: me, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'It & Software'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', { src: ve, alt: '' }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Cora Diaz'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'Improve editing skills'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        'div',
                                        { className: 'item' },
                                        n.a.createElement(
                                            'div',
                                            { className: 'course-one__single color-3' },
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__image' },
                                                n.a.createElement('img', { src: ue, alt: '' }),
                                                n.a.createElement('i', {
                                                    className: 'far fa-heart',
                                                })
                                            ),
                                            n.a.createElement(
                                                'div',
                                                { className: 'course-one__content' },
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__category',
                                                    },
                                                    'marketing'
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__admin' },
                                                    n.a.createElement('img', { src: ge, alt: '' }),
                                                    'by ',
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/teacher-details' },
                                                        'Ruth Becker'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'h2',
                                                    { className: 'course-one__title' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        'Marketing strategies'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__stars' },
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-wrap' },
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        }),
                                                        n.a.createElement('i', {
                                                            className: 'fa fa-star',
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__count' },
                                                        '4.8'
                                                    ),
                                                    n.a.createElement(
                                                        'span',
                                                        { className: 'course-one__stars-count' },
                                                        '250'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: 'course-one__meta' },
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-clock',
                                                        }),
                                                        ' 10 Hours'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        n.a.createElement('i', {
                                                            className: 'far fa-folder-open',
                                                        }),
                                                        ' 6 Lectures'
                                                    ),
                                                    n.a.createElement(
                                                        'a',
                                                        { href: '/course-details' },
                                                        '$18'
                                                    )
                                                ),
                                                n.a.createElement(
                                                    'a',
                                                    {
                                                        href: '#none',
                                                        className: 'course-one__link',
                                                    },
                                                    'See Preview'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            he = function () {
                Object(W.a)().t;
                var e = Object(s.b)();
                Object(A.useCallback)(
                    function (a) {
                        var t;
                        e(((t = a.currentTarget.value), { type: f, payload: t }));
                    },
                    [e]
                );
                return n.a.createElement(
                    n.a.Fragment,
                    null,
                    n.a.createElement($, null),
                    n.a.createElement(ye, null),
                    n.a.createElement(oe, null)
                );
            },
            be = t('./node_modules/react-toastify/dist/react-toastify.esm.js'),
            Ne = t('./node_modules/react-router-dom/esm/react-router-dom.js');
        function we() {
            var e = _e(['\n    color: white !important;\n']);
            return (
                (we = function () {
                    return e;
                }),
                e
            );
        }
        function je() {
            var e = _e(['\n    color: black !important;\n']);
            return (
                (je = function () {
                    return e;
                }),
                e
            );
        }
        function _e(e, a) {
            return (
                a || (a = e.slice(0)),
                Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(a) } }))
            );
        }
        var xe = Object(o.c)(Ne.a)(je()),
            Oe = Object(o.c)(Ne.a)(we()),
            Se =
                (t('./node_modules/react-toastify/dist/ReactToastify.css'),
                t('./src/shared/styles/Form.Styles.css'),
                function (e) {
                    var a = e.roleParams,
                        t = e.clickSubmit,
                        A = e.handleChange,
                        r = e.values;
                    return n.a.createElement(
                        'div',
                        { className: 'signup-signin' },
                        n.a.createElement('img', {
                            src: 'https://imgur.com/aILP3CD.png',
                            alt: 'login',
                            className: 'signup-signin-image',
                        }),
                        n.a.createElement(
                            'div',
                            { className: 'signup-signin-container' },
                            n.a.createElement(
                                'div',
                                { className: 'tab' },
                                n.a.createElement(
                                    'div',
                                    { className: 'tab-item' },
                                    n.a.createElement(xe, { to: '/register/'.concat(a) }, 'Sign up')
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'tab-item is-active' },
                                    n.a.createElement(Oe, { to: '/login/'.concat(a) }, 'Sign in')
                                )
                            ),
                            n.a.createElement(
                                'h1',
                                { className: 'signup-signin-heading' },
                                'Sign in'
                            ),
                            n.a.createElement(
                                'form',
                                {
                                    action: 'post',
                                    className: 'signup-signin-form',
                                    autoComplete: 'off',
                                    onSubmit: t,
                                },
                                n.a.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    n.a.createElement(
                                        'label',
                                        { htmlFor: 'email', className: 'form-label' },
                                        'Email'
                                    ),
                                    n.a.createElement('input', {
                                        type: 'email',
                                        id: 'email',
                                        className: 'form-input',
                                        placeholder: 'Ex: johndoe@email.com',
                                        value: r.email,
                                        onChange: A('email'),
                                        required: !0,
                                        name: 'email',
                                    })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    n.a.createElement(
                                        'label',
                                        { htmlFor: 'password', className: 'form-label' },
                                        'Password'
                                    ),
                                    n.a.createElement('input', {
                                        type: 'password',
                                        id: 'password',
                                        className: 'form-input',
                                        placeholder: '************',
                                        value: r.password,
                                        onChange: A('password'),
                                        required: !0,
                                        name: 'password',
                                    })
                                ),
                                n.a.createElement(
                                    'div',
                                    { className: 'form-group signup-signin-term' },
                                    'Don\u2019t have an account?',
                                    ' ',
                                    n.a.createElement(
                                        Ne.a,
                                        {
                                            className: 'signup-signin-term-link',
                                            to: '/register/student',
                                        },
                                        'Sign up (student)'
                                    ),
                                    ' / ',
                                    n.a.createElement(
                                        Ne.a,
                                        {
                                            className: 'signup-signin-term-link',
                                            to: '/register/instructor',
                                        },
                                        'Sign up (instructor)'
                                    )
                                ),
                                n.a.createElement(
                                    'button',
                                    { type: 'submit', className: 'btn btn--gradient' },
                                    'Sign in'
                                )
                            ),
                            n.a.createElement(be.a, null)
                        )
                    );
                });
        function Pe() {
            var e = (function (e, a) {
                a || (a = e.slice(0));
                return Object.freeze(
                    Object.defineProperties(e, { raw: { value: Object.freeze(a) } })
                );
            })([
                '\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n',
            ]);
            return (
                (Pe = function () {
                    return e;
                }),
                e
            );
        }
        var Ie = o.c.div(Pe());
        function Me(e, a) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                a &&
                    (A = A.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    t.push.apply(t, A);
            }
            return t;
        }
        function Be(e) {
            for (var a = 1; a < arguments.length; a++) {
                var t = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? Me(Object(t), !0).forEach(function (a) {
                          ke(e, a, t[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : Me(Object(t)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                      });
            }
            return e;
        }
        function ke(e, a, t) {
            return (
                a in e
                    ? Object.defineProperty(e, a, {
                          value: t,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[a] = t),
                e
            );
        }
        function Le(e, a) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, a) {
                    if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        A = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (
                            var s, c = e[Symbol.iterator]();
                            !(A = (s = c.next()).done) && (t.push(s.value), !a || t.length !== a);
                            A = !0
                        );
                    } catch (l) {
                        (n = !0), (r = l);
                    } finally {
                        try {
                            A || null == c.return || c.return();
                        } finally {
                            if (n) throw r;
                        }
                    }
                    return t;
                })(e, a) ||
                (function (e, a) {
                    if (!e) return;
                    if ('string' === typeof e) return ze(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    'Object' === t && e.constructor && (t = e.constructor.name);
                    if ('Map' === t || 'Set' === t) return Array.from(e);
                    if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                        return ze(e, a);
                })(e, a) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function ze(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, A = new Array(a); t < a; t++) A[t] = e[t];
            return A;
        }
        var De = function (e) {
                var a = e.match,
                    t = Object(s.b)(),
                    r = Object(c.f)(),
                    l = a.params.role,
                    o = Le(Object(A.useState)({ email: '', password: '' }), 2),
                    i = o[0],
                    m = o[1];
                return n.a.createElement(
                    Ie,
                    null,
                    n.a.createElement(Se, {
                        roleParams: l,
                        clickSubmit: function (e) {
                            e.preventDefault();
                            var a,
                                A,
                                n,
                                s,
                                c = { email: i.email, password: i.password };
                            t(
                                ((a = c),
                                (A = function (e) {
                                    return Object(be.b)(e);
                                }),
                                (n = function () {
                                    return m({ email: '', password: '' });
                                }),
                                (s = function () {
                                    return r.push('/');
                                }),
                                function (e) {
                                    var t = {
                                        method: 'post',
                                        url: '/users/login',
                                        headers: { 'Content-Type': 'application/json' },
                                        data: a,
                                    };
                                    C()(t)
                                        .then(function (e) {
                                            return e.data;
                                        })
                                        .then(function (a) {
                                            var t = a.token;
                                            localStorage.setItem('jwtToken', t), H(t);
                                            var A = Object(T.a)(t);
                                            U(e, A), n(), s();
                                        })
                                        .catch(function (e) {
                                            n(),
                                                A(
                                                    e.response.data.email ||
                                                        e.response.data.password
                                                );
                                        });
                                })
                            );
                        },
                        handleChange: function (e) {
                            return function (a) {
                                m(Be(Be({}, i), {}, ke({}, e, a.target.value)));
                            };
                        },
                        values: i,
                    })
                );
            },
            Te = function (e) {
                var a = e.roleParams,
                    t = e.capitalizeFirstLetter,
                    A = e.clickSubmit,
                    r = e.handleChange,
                    s = e.values;
                return n.a.createElement(
                    'div',
                    { className: 'signup-signin' },
                    n.a.createElement('img', {
                        src: 'https://imgur.com/aILP3CD.png',
                        alt: 'login',
                        className: 'signup-signin-image',
                    }),
                    n.a.createElement(
                        'div',
                        { className: 'signup-signin-container' },
                        n.a.createElement(
                            'div',
                            { className: 'tab' },
                            n.a.createElement(
                                'div',
                                { className: 'tab-item is-active' },
                                n.a.createElement(Oe, { to: '/register/'.concat(a) }, 'Sign up')
                            ),
                            n.a.createElement(
                                'div',
                                { className: 'tab-item' },
                                n.a.createElement(xe, { to: '/login/'.concat(a) }, 'Sign in')
                            )
                        ),
                        n.a.createElement(
                            'h1',
                            { className: 'signup-signin-heading' },
                            'Sign up ',
                            '(for '.concat(a ? ''.concat(t(a)) : '', ')')
                        ),
                        n.a.createElement(
                            'form',
                            {
                                action: 'post',
                                className: 'signup-signin-form',
                                autoComplete: 'off',
                                onSubmit: A,
                            },
                            n.a.createElement(
                                'div',
                                { className: 'form-group' },
                                n.a.createElement(
                                    'label',
                                    { htmlFor: 'firstName', className: 'form-label' },
                                    'First name'
                                ),
                                n.a.createElement('input', {
                                    type: 'text',
                                    id: 'firstName',
                                    className: 'form-input',
                                    placeholder: 'Ex: Trung',
                                    value: s.first_name,
                                    onChange: r('first_name'),
                                    required: !0,
                                    name: 'firstName',
                                })
                            ),
                            n.a.createElement(
                                'div',
                                { className: 'form-group' },
                                n.a.createElement(
                                    'label',
                                    { htmlFor: 'lastName', className: 'form-label' },
                                    'Last name'
                                ),
                                n.a.createElement('input', {
                                    type: 'text',
                                    id: 'lastName',
                                    className: 'form-input',
                                    placeholder: 'Ex: Phan',
                                    value: s.last_name,
                                    onChange: r('last_name'),
                                    required: !0,
                                    name: 'lastName',
                                })
                            ),
                            n.a.createElement(
                                'div',
                                { className: 'form-group' },
                                n.a.createElement(
                                    'label',
                                    { htmlFor: 'email', className: 'form-label' },
                                    'Email'
                                ),
                                n.a.createElement('input', {
                                    type: 'email',
                                    id: 'email',
                                    className: 'form-input',
                                    placeholder: 'Ex: trungphan@email.com',
                                    value: s.email,
                                    onChange: r('email'),
                                    required: !0,
                                    name: 'email',
                                })
                            ),
                            n.a.createElement(
                                'div',
                                { className: 'form-group' },
                                n.a.createElement(
                                    'label',
                                    { htmlFor: 'password', className: 'form-label' },
                                    'Password'
                                ),
                                n.a.createElement('input', {
                                    type: 'password',
                                    id: 'password',
                                    className: 'form-input',
                                    placeholder: '************',
                                    value: s.password,
                                    onChange: r('password'),
                                    required: !0,
                                    name: 'password',
                                })
                            ),
                            n.a.createElement(
                                'div',
                                { className: 'form-group' },
                                n.a.createElement(
                                    'label',
                                    { htmlFor: 're-password', className: 'form-label' },
                                    'Repeat password'
                                ),
                                n.a.createElement('input', {
                                    type: 'password',
                                    id: 're-password',
                                    className: 'form-input',
                                    placeholder: '************',
                                    value: s.password2,
                                    onChange: r('password2'),
                                    required: !0,
                                    name: 're-password',
                                })
                            ),
                            n.a.createElement(
                                'div',
                                { className: 'form-group signup-signin-term' },
                                'Already have an account?',
                                ' ',
                                n.a.createElement(
                                    Ne.a,
                                    {
                                        className: 'signup-signin-term-link',
                                        to: '/login/'.concat(a),
                                    },
                                    'Log in'
                                )
                            ),
                            n.a.createElement(
                                'button',
                                { type: 'submit', className: 'btn btn--gradient' },
                                'Sign up'
                            )
                        ),
                        n.a.createElement(be.a, null)
                    )
                );
            };
        function Qe(e, a) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                a &&
                    (A = A.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable;
                    })),
                    t.push.apply(t, A);
            }
            return t;
        }
        function qe(e) {
            for (var a = 1; a < arguments.length; a++) {
                var t = null != arguments[a] ? arguments[a] : {};
                a % 2
                    ? Qe(Object(t), !0).forEach(function (a) {
                          Ce(e, a, t[a]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : Qe(Object(t)).forEach(function (a) {
                          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                      });
            }
            return e;
        }
        function Ce(e, a, t) {
            return (
                a in e
                    ? Object.defineProperty(e, a, {
                          value: t,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[a] = t),
                e
            );
        }
        function He(e, a) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, a) {
                    if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        A = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (
                            var s, c = e[Symbol.iterator]();
                            !(A = (s = c.next()).done) && (t.push(s.value), !a || t.length !== a);
                            A = !0
                        );
                    } catch (l) {
                        (n = !0), (r = l);
                    } finally {
                        try {
                            A || null == c.return || c.return();
                        } finally {
                            if (n) throw r;
                        }
                    }
                    return t;
                })(e, a) ||
                (function (e, a) {
                    if (!e) return;
                    if ('string' === typeof e) return Ue(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    'Object' === t && e.constructor && (t = e.constructor.name);
                    if ('Map' === t || 'Set' === t) return Array.from(e);
                    if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                        return Ue(e, a);
                })(e, a) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function Ue(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, A = new Array(a); t < a; t++) A[t] = e[t];
            return A;
        }
        var Re = function (e) {
                var a = e.match,
                    t = Object(s.b)(),
                    r = a.params.role,
                    l = Object(c.f)(),
                    o = He(
                        Object(A.useState)({
                            first_name: '',
                            last_name: '',
                            email: '',
                            password: '',
                            password2: '',
                        }),
                        2
                    ),
                    i = o[0],
                    m = o[1];
                return n.a.createElement(
                    Ie,
                    null,
                    n.a.createElement(Te, {
                        roleParams: r,
                        capitalizeFirstLetter: function (e) {
                            return e.charAt(0).toUpperCase() + e.slice(1);
                        },
                        clickSubmit: function (e) {
                            e.preventDefault();
                            var a,
                                A,
                                n,
                                s,
                                c,
                                o = {
                                    first_name: i.first_name || '',
                                    last_name: i.last_name || '',
                                    email: i.email || '',
                                    password: i.password || '',
                                    password2: i.password2 || '',
                                    role: r || '',
                                };
                            t(
                                ((a = JSON.stringify(o)),
                                (A = function (e) {
                                    return Object(be.b)(e);
                                }),
                                (n = function (e) {
                                    return Object(be.b)(e);
                                }),
                                (s = function () {
                                    return m({
                                        first_name: '',
                                        last_name: '',
                                        email: '',
                                        password: '',
                                        password2: '',
                                    });
                                }),
                                (c = function () {
                                    return l.push('/login/'.concat(r));
                                }),
                                function (e) {
                                    var t = {
                                        method: 'post',
                                        url: '/users/register',
                                        headers: { 'Content-Type': 'application/json' },
                                        data: a,
                                    };
                                    C()(t)
                                        .then(function () {
                                            s(), A('Register successfully! Thank You <3'), c();
                                        })
                                        .catch(function (e) {
                                            s(),
                                                n(
                                                    e.response.data.first_name ||
                                                        e.response.data.last_name ||
                                                        e.response.data.email ||
                                                        e.response.data.password ||
                                                        e.response.data.password2
                                                );
                                        });
                                })
                            );
                        },
                        handleChange: function (e) {
                            return function (a) {
                                m(qe(qe({}, i), {}, Ce({}, e, a.target.value)));
                            };
                        },
                        values: i,
                    })
                );
            },
            Je = t('./node_modules/reselect/es/index.js'),
            Ge = Object(Je.a)(
                [
                    function (e) {
                        return e.auth;
                    },
                ],
                function (e) {
                    return e.auth;
                }
            );
        function We() {
            var e = (function (e, a) {
                a || (a = e.slice(0));
                return Object.freeze(
                    Object.defineProperties(e, { raw: { value: Object.freeze(a) } })
                );
            })([
                '\n    background-color: white;\n    overflow-x: auto;\n    margin-bottom: 25px;\n    border-top: 1px solid #eee;\n    padding: 25px 20px;\n    display: flex;\n    justify-content: center;\n    &::-webkit-scrollbar {\n        display: none;\n        width: 0;\n    }\n    @media screen and (max-width: 767px) {\n        justify-content: left;\n    }\n    .filter-item {\n        display: inline-block;\n        padding: 15px;\n        border-radius: 6px;\n        color: #999;\n        transition: 0.25s linear;\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 500;\n        white-space: nowrap;\n        &.active {\n            background-color: #eee;\n            color: #333;\n            pointer-events: none;\n        }\n    }\n',
            ]);
            return (
                (We = function () {
                    return e;
                }),
                e
            );
        }
        var Xe = o.c.div(We());
        function Ze() {
            var e = (function (e, a) {
                a || (a = e.slice(0));
                return Object.freeze(
                    Object.defineProperties(e, { raw: { value: Object.freeze(a) } })
                );
            })([
                "\n    padding: 2.5rem 0;\n    text-align: center;\n    background-color: white;\n    .love {\n        position: fixed;\n        right: 3rem;\n        bottom: 3rem;\n        z-index: 99;\n        display: flex;\n        flex-flow: column nowrap;\n        align-items: center;\n        &-count {\n            color: #999;\n            display: inline-block;\n            margin-bottom: 5px;\n            font-size: 14px;\n        }\n        &-icon {\n            position: relative;\n            width: 50px;\n            height: 50px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 50px;\n            cursor: pointer;\n            color: rgb(226, 45, 72);\n            background-color: white;\n            box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);\n            i {\n                pointer-events: none;\n            }\n            &.active {\n                animation: clicked 0.05s forwards alternate 1 linear;\n            }\n        }\n        &-heart {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            &.active {\n                animation: loveFly 0.25s forwards 1 linear;\n            }\n        }\n    }\n    @keyframes loveFly {\n        to {\n            transform: translate(-50%, -10rem);\n            opacity: 0;\n        }\n    }\n    @keyframes clicked {\n        from {\n            transform: scale(1) translateY(0);\n        }\n        to {\n            transform: scale(0.9) translateY(5px);\n        }\n    }\n    .logo {\n        max-width: 75px;\n        margin: 0 auto 20px;\n    }\n    .heading {\n        text-transform: uppercase;\n        font-weight: bold;\n        font-size: 40px;\n        color: #5e6b79;\n        letter-spacing: 2.5px;\n        font-family: 'Poppins', sans-serif;\n    }\n    .heading strong {\n        font-weight: 800;\n        color: transparent;\n        -webkit-background-clip: text;\n        background-clip: text;\n        background-image: linear-gradient(to right, #1abcf4, #5defb8);\n    }\n    .slogan {\n        font-family: 'Poppins', sans-serif;\n        font-size: 14px;\n        line-height: 1.6;\n        max-width: 40rem;\n        margin: 1rem auto 0;\n        color: #999;\n    }\n    .contact-me {\n        display: inline-block;\n        padding: 1.5rem 3rem;\n        border-radius: 4px;\n        color: white;\n        text-transform: uppercase;\n        font-size: 14px;\n        background-color: #001940;\n        margin-top: 3rem;\n        font-weight: 600;\n        background-image: linear-gradient(to right, #784ba0, #2b86c5);\n    }\n",
            ]);
            return (
                (Ze = function () {
                    return e;
                }),
                e
            );
        }
        var Fe = o.c.header(Ze()),
            Ve = function (e) {
                var a,
                    t = e.logout,
                    A = e.auth,
                    r = e.classNameHome,
                    s = e.classNameDashboard,
                    c = e.classNameUsers,
                    l = e.classNameCourse,
                    o = e.classNameCategory,
                    i = e.classNameEnroll,
                    m = e.classMyCourses,
                    u = e.classAddCourse,
                    f = e.classAddLecture,
                    d = e.classAllCourses,
                    p = e.classProfile,
                    E = e.classAllProfile,
                    v = e.classNameLogin,
                    g = e.classNameInstructor;
                return n.a.createElement(
                    n.a.Fragment,
                    null,
                    n.a.createElement(
                        Fe,
                        null,
                        n.a.createElement(
                            'div',
                            { className: 'container' },
                            n.a.createElement(
                                'h1',
                                { className: 'heading' },
                                'Snack',
                                n.a.createElement('strong', null, 'Dev')
                            ),
                            n.a.createElement(
                                'p',
                                { className: 'slogan' },
                                'Share all knowledge we have with \ud83d\ude18'
                            )
                        )
                    ),
                    'admin' ===
                        (null === A || void 0 === A || null === (a = A.users) || void 0 === a
                            ? void 0
                            : a.role)
                        ? n.a.createElement(
                              Xe,
                              null,
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/' },
                                  n.a.createElement('span', { className: r }, 'Home')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/dashboard' },
                                  n.a.createElement('span', { className: s }, 'DashBoard')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/allusers' },
                                  n.a.createElement('span', { className: c }, 'Users')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/ShowCourseList' },
                                  n.a.createElement('span', { className: l }, 'Courses')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/ShowCategoryList' },
                                  n.a.createElement('span', { className: o }, 'Categories')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/EnrollmentList' },
                                  n.a.createElement('span', { className: i }, 'Enrolled Users')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '', onClick: t },
                                  n.a.createElement('span', { className: 'filter-item' }, 'Logout')
                              )
                          )
                        : 'instructor' === A.users.role
                        ? n.a.createElement(
                              Xe,
                              null,
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/' },
                                  n.a.createElement('span', { className: r }, 'Home')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/services/'.concat(A.users.id) },
                                  n.a.createElement('span', { className: m }, 'My Courses')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/addcourse/'.concat(A.users.id) },
                                  n.a.createElement('span', { className: u }, 'Add Courses')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/add-lecture/'.concat(A.users.id) },
                                  n.a.createElement('span', { className: f }, 'Add Lecture')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/services' },
                                  n.a.createElement('span', { className: d }, 'All Courses')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/finaldashboard' },
                                  n.a.createElement('span', { className: p }, 'Profile')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/finalprofiles' },
                                  n.a.createElement('span', { className: E }, 'All Profiles')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '', onClick: t },
                                  n.a.createElement('span', { className: 'filter-item' }, 'Logout')
                              )
                          )
                        : 'student' === A.users.role
                        ? n.a.createElement(
                              Xe,
                              null,
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/' },
                                  n.a.createElement('span', { className: r }, 'Home')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/servicesforstudent/'.concat(A.users.id) },
                                  n.a.createElement('span', { className: m }, 'My Courses')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/services' },
                                  n.a.createElement('span', { className: d }, 'All Courses')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '', onClick: t },
                                  n.a.createElement('span', { className: 'filter-item' }, 'Logout')
                              )
                          )
                        : n.a.createElement(
                              Xe,
                              null,
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/' },
                                  n.a.createElement('span', { className: r }, 'Home')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/login/student' },
                                  n.a.createElement('span', { className: v }, 'Login')
                              ),
                              n.a.createElement(
                                  Ne.a,
                                  { to: '/register/instructor' },
                                  n.a.createElement('span', { className: g }, 'Teach On SnackDev')
                              )
                          )
                );
            };
        function Ye() {
            return (Ye =
                Object.assign ||
                function (e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var A in t)
                            Object.prototype.hasOwnProperty.call(t, A) && (e[A] = t[A]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var Ke = function () {
            var e,
                a,
                t,
                A,
                r,
                l = Object(s.c)(Ge),
                o = Object(s.b)(),
                i = Object(c.g)(),
                m = Object(c.f)(),
                u = '/' === (null === i || void 0 === i ? void 0 : i.pathname),
                f =
                    null === i || void 0 === i || null === (e = i.pathname) || void 0 === e
                        ? void 0
                        : e.includes('login'),
                d = '/register/instructor' === (null === i || void 0 === i ? void 0 : i.pathname),
                p = '/dashboard' === (null === i || void 0 === i ? void 0 : i.pathname),
                E = '/allusers' === (null === i || void 0 === i ? void 0 : i.pathname),
                v = '/ShowCourseList' === (null === i || void 0 === i ? void 0 : i.pathname),
                g = '/ShowCategoryList' === (null === i || void 0 === i ? void 0 : i.pathname),
                y = '/EnrollmentList' === (null === i || void 0 === i ? void 0 : i.pathname),
                h =
                    (null === i || void 0 === i || null === (a = i.pathname) || void 0 === a
                        ? void 0
                        : a.includes('/services/'.concat(l.users.id))) ||
                    (null === i || void 0 === i || null === (t = i.pathname) || void 0 === t
                        ? void 0
                        : t.includes('/servicesforstudent/')),
                b =
                    null === i || void 0 === i || null === (A = i.pathname) || void 0 === A
                        ? void 0
                        : A.includes('addcourse'),
                N =
                    null === i || void 0 === i || null === (r = i.pathname) || void 0 === r
                        ? void 0
                        : r.includes('add-lecture'),
                w = '/services' === (null === i || void 0 === i ? void 0 : i.pathname),
                j = '/finaldashboard' === (null === i || void 0 === i ? void 0 : i.pathname),
                _ = '/finalprofiles' === (null === i || void 0 === i ? void 0 : i.pathname),
                x = {
                    classNameHome: 'filter-item '.concat(u ? 'active' : ''),
                    classNameInstructor: 'filter-item '.concat(d ? 'active' : ''),
                    classNameLogin: 'filter-item '.concat(f ? 'active' : ''),
                    classNameDashboard: 'filter-item '.concat(p ? 'active' : ''),
                    classNameUsers: 'filter-item '.concat(E ? 'active' : ''),
                    classNameCourse: 'filter-item '.concat(v ? 'active' : ''),
                    classNameCategory: 'filter-item '.concat(g ? 'active' : ''),
                    classNameEnroll: 'filter-item '.concat(y ? 'active' : ''),
                    classMyCourses: 'filter-item '.concat(h ? 'active' : ''),
                    classAddCourse: 'filter-item '.concat(b ? 'active' : ''),
                    classAddLecture: 'filter-item '.concat(N ? 'active' : ''),
                    classAllCourses: 'filter-item '.concat(w ? 'active' : ''),
                    classProfile: 'filter-item '.concat(j ? 'active' : ''),
                    classAllProfile: 'filter-item '.concat(_ ? 'active' : ''),
                };
            'undefined' !== typeof window &&
                (localStorage.setItem('userid', JSON.stringify(l.users.id)),
                localStorage.setItem('userRole', JSON.stringify(l.users.role)));
            return n.a.createElement(
                Ve,
                Ye(
                    {
                        logout: function (e) {
                            e.preventDefault(),
                                o(
                                    G(function () {
                                        return null === m || void 0 === m ? void 0 : m.push('/');
                                    })
                                );
                        },
                        auth: l,
                    },
                    x
                )
            );
        };
        function $e(e, a) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, a) {
                    if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        A = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (
                            var s, c = e[Symbol.iterator]();
                            !(A = (s = c.next()).done) && (t.push(s.value), !a || t.length !== a);
                            A = !0
                        );
                    } catch (l) {
                        (n = !0), (r = l);
                    } finally {
                        try {
                            A || null == c.return || c.return();
                        } finally {
                            if (n) throw r;
                        }
                    }
                    return t;
                })(e, a) ||
                (function (e, a) {
                    if (!e) return;
                    if ('string' === typeof e) return ea(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    'Object' === t && e.constructor && (t = e.constructor.name);
                    if ('Map' === t || 'Set' === t) return Array.from(e);
                    if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                        return ea(e, a);
                })(e, a) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function ea(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, A = new Array(a); t < a; t++) A[t] = e[t];
            return A;
        }
        var aa = function () {
            var e = $e(Object(A.useState)(!1), 2),
                a = e[0],
                t = e[1];
            Object(A.useEffect)(function () {
                return (
                    window.addEventListener('scroll', r),
                    function () {
                        window.removeEventListener('scroll', r);
                    }
                );
            });
            var r = function () {
                !a && window.pageYOffset > 400 && t(!0), a && window.pageYOffset <= 400 && t(!1);
            };
            return n.a.createElement(
                'div',
                {
                    className: 'back-to-top',
                    onClick: function () {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    },
                    style: { display: a ? 'flex' : 'none' },
                },
                n.a.createElement('i', { className: 'fal fa-arrow-up' })
            );
        };
        function ta() {
            var e = (function (e, a) {
                a || (a = e.slice(0));
                return Object.freeze(
                    Object.defineProperties(e, { raw: { value: Object.freeze(a) } })
                );
            })([
                "\n    font-family: 'Poppins', sans-serif;\n    padding: 2rem 0;\n    text-align: center;\n    color: #999;\n    font-size: 0.8rem;\n    margin-top: 2.5rem;\n    background-color: white;\n    .heart {\n        color: #ff7870;\n    }\n    a {\n        color: #ff7870;\n    }\n",
            ]);
            return (
                (ta = function () {
                    return e;
                }),
                e
            );
        }
        var Aa = o.c.footer(ta()),
            na = function () {
                return A.createElement(
                    A.Fragment,
                    null,
                    A.createElement(
                        Aa,
                        { style: { marginTop: '20%' } },
                        A.createElement(
                            'div',
                            { className: 'container' },
                            'Development by',
                            ' ',
                            A.createElement(
                                'a',
                                {
                                    href: 'https://www.github.com/quoctrung163',
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                },
                                'quoctrung163'
                            ),
                            ' ',
                            'with ',
                            A.createElement('i', { className: 'fa fa-heart heart' }),
                            ' \xa9\xa0',
                            new Date().getFullYear()
                        )
                    ),
                    A.createElement(aa, null)
                );
            };
        function ra() {
            var e = (function (e, a) {
                a || (a = e.slice(0));
                return Object.freeze(
                    Object.defineProperties(e, { raw: { value: Object.freeze(a) } })
                );
            })([
                '\n\n  .sweet-noti {\n\t\tpadding: 2rem;\n\t\tbackground-color: white;\n\t\tbox-shadow: 0px 2px 7px rgba(63, 63, 122, 0.1);\n\t\tborder-radius: 8px;\n\t\tposition: fixed;\n\t\ttop: 1rem;\n\t\tright: 1rem;\n\t\tz-index: 100000;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\ttransition: 0.2s linear;\n\t\tanimation: fadeAlert 2s forwards 1 linear;\n        color: #13D2B8;\n\t\t&:before {\n\t\t\tcontent: "";\n\t\t\twidth: 100%;\n\t\t\theight: 4px;\n\t\t\tborder-radius: 8px;\n\t\t\tbackground-color: currentColor;\n\t\t\tposition: absolute;\n\t\t\ttop: -4px;\n\t\t\tleft: 0;\n\t\t}\n\t\t@media screen and (max-width: 767px) {\n\t\t\twidth: auto;\n\t\t\tleft: 1rem;\n\t\t\tright: 1rem;\n\t\t\ttop: 1rem;\n\t\t\tpadding: 1.5rem;\n\t\t}\n\t}\n\ti.sweet-noti__icon {\n\t\tfont-size: 4rem;\n\t\tmargin-right: 1.5rem;\n\t\tflex-shrink: 0;\n\n\t}\n\t.sweet-noti__content{\n\t\twidth: 100%;\n\t\tcolor: #474747;\n\t\tletter-spacing: 0.015em;\n\t}\n\t.sweet-noti__title {\n\t\tmargin-bottom: 5px;\n    text-transform: uppercase;\n    font-weight: bold;\n\t}\n\t.sweet-noti__message {\n\t\tfont-size: 1.4rem;\n\t\tline-height: 1.4;\n\n\t}\n\n\t@keyframes fadeAlert {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t}\n\t\t10%,90% {\n\t\t\topacity: 1;\n\t\t\tvisibility: visible;\n\t\t}\n\t\t100% {\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t}\n\t}\n\n\t.back-to-top {\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tposition: fixed;\n\t\tright: 30px;\n\t\tbottom: 30px;\n\t\tz-index: 10;\n\t\tbackground-color: #ff7870;\n\t\tdisplay:flex;\n\t\talign-items:center;\n\t\tjustify-content:center;\n\t\tfont-size: 20px;\n\t\tcolor: white;\n\t\topacity: 0.5;\n\t\t&:hover {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\n',
            ]);
            return (
                (ra = function () {
                    return e;
                }),
                e
            );
        }
        var sa = Object(o.b)(ra());
        var ca = { home: '/', login: '/login/:role', register: '/register/:role' },
            la = ca,
            oa = t('./src/shared/App.module.css'),
            ia = t.n(oa),
            ma = function () {
                var e = Object(s.b)(),
                    a = Object(c.f)();
                return (
                    A.useEffect(
                        function () {
                            if (localStorage.jwtToken) {
                                H(localStorage.jwtToken);
                                var t = Object(T.a)(localStorage.jwtToken);
                                U(e, t);
                                var A = Date.now() / 1e3;
                                t.exp < A &&
                                    e(
                                        G(function () {
                                            return null === a || void 0 === a
                                                ? void 0
                                                : a.push('/');
                                        })
                                    );
                            }
                        },
                        [e, a]
                    ),
                    A.createElement(
                        'div',
                        { className: ia.a.wrapper },
                        A.createElement(sa, null),
                        A.createElement(l.a, {
                            defaultTitle: 'React SSR Starter \u2013 TypeScript Edition',
                            titleTemplate: '%s \u2013 React SSR Starter \u2013 TypeScript Edition',
                            link: [{ rel: 'icon', type: 'image/png', href: Q }],
                        }),
                        A.createElement(Ke, null),
                        A.createElement(
                            c.c,
                            null,
                            A.createElement(c.a, { exact: !0, path: la.home, component: he }),
                            A.createElement(c.a, { exact: !0, path: la.login, component: De }),
                            A.createElement(c.a, { exact: !0, path: la.register, component: Re }),
                            A.createElement(c.a, {
                                render: function () {
                                    return '404!';
                                },
                            })
                        ),
                        A.createElement(na, null)
                    )
                );
            },
            ua = t('./node_modules/i18next/dist/esm/i18next.js'),
            fa = t('./node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js'),
            da = t('./node_modules/react-i18next/dist/es/I18nextProvider.js'),
            pa = Object(Je.a)(
                [
                    function (e) {
                        return e.app;
                    },
                ],
                function (e) {
                    return e.locale;
                }
            ),
            Ea = t('./src/shared/i18n/locales/de_DE/translation.json'),
            va = t('./src/shared/i18n/locales/en_US/translation.json');
        ua.a.use(fa.a),
            ua.a.init({
                backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
                react: { useSuspense: !1, wait: !0 },
                debug: !1,
                fallbackLng: 'en_US',
                fallbackNS: ['translation'],
                partialBundledLanguages: !0,
                resources: { de_DE: { translation: Ea }, en_US: { translation: va } },
                parseMissingKeyHandler: function (e) {
                    return e;
                },
            }),
            (ua.a.languages = ['de_DE', 'en_US']);
        var ga = n.a.memo(function (e) {
                var a = e.children,
                    t = Object(s.c)(pa);
                return (
                    Object(A.useEffect)(
                        function () {
                            ua.a.changeLanguage(t);
                        },
                        [t]
                    ),
                    n.a.createElement(da.a, { i18n: ua.a }, a)
                );
            }),
            ya = t('./node_modules/history/esm/history.js'),
            ha = (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = (e.initialEntries, window.browserHistory || Object(ya.a)());
                return a;
            })(),
            ba = window.store || D({ initialState: window.__PRELOADED_STATE__ });
        Object(r.hydrate)(
            A.createElement(
                s.a,
                { store: ba },
                A.createElement(
                    c.b,
                    { history: ha },
                    A.createElement(
                        ga,
                        null,
                        A.createElement(
                            l.b,
                            null,
                            A.createElement(
                                o.a,
                                { theme: { primary: '#08aeea', secondary: '#13D2B8' } },
                                A.createElement(ma, null)
                            )
                        )
                    )
                )
            ),
            document.getElementById('app')
        );
    },
    './src/shared/App.module.css': function (e, a, t) {
        e.exports = {
            'wrapper': 'xoYdvC1E',
            'reactLogo': '_3eiyJz2m',
            'container': '_2TaVOGxN',
            'point-none': 'Tfa3Dvfz',
            'pointNone': 'Tfa3Dvfz',
            'flex': '_3mf_ds6I',
            'align-center': '_1asXhTz3',
            'alignCenter': '_1asXhTz3',
            'justify-between': '_2gap5ocU',
            'justifyBetween': '_2gap5ocU',
        };
    },
    './src/shared/components/CourseOne/CourseOne.Styles.css': function (e, a, t) {},
    './src/shared/components/Introduction/Introduction.Styles.css': function (e, a, t) {},
    './src/shared/components/Partners/Partners.Styles.css': function (e, a, t) {},
    './src/shared/i18n/locales/de_DE/translation.json': function (e) {
        e.exports = JSON.parse(
            '{"features":"Funktionen","i18n-example":"i18n Beispiel","i18n-support":"i18n Unterst\xfctzung (durch React i18Next)","router-headline":"Router Beispiel","nav":{"home":"Startseite","page-1":"Beispiel Seite 1","page-2":"Beispiel Seite 2"}}'
        );
    },
    './src/shared/i18n/locales/en_US/translation.json': function (e) {
        e.exports = JSON.parse(
            '{"nav":{"home":"Home","login":"Login","teachOnSnackDev":"Teach On SnackDev"}}'
        );
    },
    './src/shared/styles/Form.Styles.css': function (e, a, t) {},
    0: function (e, a, t) {
        e.exports = t('./src/client/index.tsx');
    },
});
//# sourceMappingURL=bundle.c3ad73ad.js.map
