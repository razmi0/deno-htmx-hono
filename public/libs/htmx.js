(() => {
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __commonJS = (cb, mod) =>
        function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
        };

    // client/index.ts
    var require_client = __commonJS({
        "client/index.ts"(exports, module) {
            var htmx = (function () {
                "use strict";
                const Q = {
                    onLoad: null,
                    process: null,
                    on: null,
                    off: null,
                    trigger: null,
                    ajax: null,
                    find: null,
                    findAll: null,
                    closest: null,
                    values: function (e2, t2) {
                        const n2 = cn(e2, t2 || "post");
                        return n2.values;
                    },
                    remove: null,
                    addClass: null,
                    removeClass: null,
                    toggleClass: null,
                    takeClass: null,
                    swap: null,
                    defineExtension: null,
                    removeExtension: null,
                    logAll: null,
                    logNone: null,
                    logger: null,
                    config: {
                        historyEnabled: true,
                        historyCacheSize: 10,
                        refreshOnHistoryMiss: false,
                        defaultSwapStyle: "innerHTML",
                        defaultSwapDelay: 0,
                        defaultSettleDelay: 20,
                        includeIndicatorStyles: true,
                        indicatorClass: "htmx-indicator",
                        requestClass: "htmx-request",
                        addedClass: "htmx-added",
                        settlingClass: "htmx-settling",
                        swappingClass: "htmx-swapping",
                        allowEval: true,
                        allowScriptTags: true,
                        inlineScriptNonce: "",
                        inlineStyleNonce: "",
                        attributesToSettle: ["class", "style", "width", "height"],
                        withCredentials: false,
                        timeout: 0,
                        wsReconnectDelay: "full-jitter",
                        wsBinaryType: "blob",
                        disableSelector: "[hx-disable], [data-hx-disable]",
                        scrollBehavior: "instant",
                        defaultFocusScroll: false,
                        getCacheBusterParam: false,
                        globalViewTransitions: false,
                        methodsThatUseUrlParams: ["get", "delete"],
                        selfRequestsOnly: true,
                        ignoreTitle: false,
                        scrollIntoViewOnBoost: true,
                        triggerSpecsCache: null,
                        disableInheritance: false,
                        responseHandling: [
                            { code: "204", swap: false },
                            { code: "[23]..", swap: true },
                            { code: "[45]..", swap: false, error: true },
                        ],
                        allowNestedOobSwaps: true,
                    },
                    parseInterval: null,
                    _: null,
                    version: "2.0.4",
                };
                Q.onLoad = j;
                Q.process = kt;
                Q.on = ye;
                Q.off = be;
                Q.trigger = he;
                Q.ajax = Rn;
                Q.find = u;
                Q.findAll = x;
                Q.closest = g;
                Q.remove = z;
                Q.addClass = K;
                Q.removeClass = G;
                Q.toggleClass = W;
                Q.takeClass = Z;
                Q.swap = $e;
                Q.defineExtension = Fn;
                Q.removeExtension = Bn;
                Q.logAll = V;
                Q.logNone = _;
                Q.parseInterval = d;
                Q._ = e;
                const n = {
                    addTriggerHandler: St,
                    bodyContains: le,
                    canAccessLocalStorage: B,
                    findThisElement: Se,
                    filterValues: hn,
                    swap: $e,
                    hasAttribute: s,
                    getAttributeValue: te,
                    getClosestAttributeValue: re,
                    getClosestMatch: o,
                    getExpressionVars: En,
                    getHeaders: fn,
                    getInputValues: cn,
                    getInternalData: ie,
                    getSwapSpecification: gn,
                    getTriggerSpecs: st,
                    getTarget: Ee,
                    makeFragment: P,
                    mergeObjects: ce,
                    makeSettleInfo: xn,
                    oobSwap: He,
                    querySelectorExt: ae,
                    settleImmediately: Kt,
                    shouldCancel: ht,
                    triggerEvent: he,
                    triggerErrorEvent: fe,
                    withExtensions: Ft,
                };
                const r = ["get", "post", "put", "delete", "patch"];
                const H = r
                    .map(function (e2) {
                        return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
                    })
                    .join(", ");
                function d(e2) {
                    if (e2 == void 0) {
                        return void 0;
                    }
                    let t2 = NaN;
                    if (e2.slice(-2) == "ms") {
                        t2 = parseFloat(e2.slice(0, -2));
                    } else if (e2.slice(-1) == "s") {
                        t2 = parseFloat(e2.slice(0, -1)) * 1e3;
                    } else if (e2.slice(-1) == "m") {
                        t2 = parseFloat(e2.slice(0, -1)) * 1e3 * 60;
                    } else {
                        t2 = parseFloat(e2);
                    }
                    return isNaN(t2) ? void 0 : t2;
                }
                function ee(e2, t2) {
                    return e2 instanceof Element && e2.getAttribute(t2);
                }
                function s(e2, t2) {
                    return !!e2.hasAttribute && (e2.hasAttribute(t2) || e2.hasAttribute("data-" + t2));
                }
                function te(e2, t2) {
                    return ee(e2, t2) || ee(e2, "data-" + t2);
                }
                function c(e2) {
                    const t2 = e2.parentElement;
                    if (!t2 && e2.parentNode instanceof ShadowRoot) return e2.parentNode;
                    return t2;
                }
                function ne() {
                    return document;
                }
                function m(e2, t2) {
                    return e2.getRootNode ? e2.getRootNode({ composed: t2 }) : ne();
                }
                function o(e2, t2) {
                    while (e2 && !t2(e2)) {
                        e2 = c(e2);
                    }
                    return e2 || null;
                }
                function i(e2, t2, n2) {
                    const r2 = te(t2, n2);
                    const o2 = te(t2, "hx-disinherit");
                    var i2 = te(t2, "hx-inherit");
                    if (e2 !== t2) {
                        if (Q.config.disableInheritance) {
                            if (i2 && (i2 === "*" || i2.split(" ").indexOf(n2) >= 0)) {
                                return r2;
                            } else {
                                return null;
                            }
                        }
                        if (o2 && (o2 === "*" || o2.split(" ").indexOf(n2) >= 0)) {
                            return "unset";
                        }
                    }
                    return r2;
                }
                function re(t2, n2) {
                    let r2 = null;
                    o(t2, function (e2) {
                        return !!(r2 = i(t2, ue(e2), n2));
                    });
                    if (r2 !== "unset") {
                        return r2;
                    }
                }
                function h(e2, t2) {
                    const n2 =
                        e2 instanceof Element &&
                        (e2.matches ||
                            e2.matchesSelector ||
                            e2.msMatchesSelector ||
                            e2.mozMatchesSelector ||
                            e2.webkitMatchesSelector ||
                            e2.oMatchesSelector);
                    return !!n2 && n2.call(e2, t2);
                }
                function T(e2) {
                    const t2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
                    const n2 = t2.exec(e2);
                    if (n2) {
                        return n2[1].toLowerCase();
                    } else {
                        return "";
                    }
                }
                function q(e2) {
                    const t2 = new DOMParser();
                    return t2.parseFromString(e2, "text/html");
                }
                function L(e2, t2) {
                    while (t2.childNodes.length > 0) {
                        e2.append(t2.childNodes[0]);
                    }
                }
                function A(e2) {
                    const t2 = ne().createElement("script");
                    se(e2.attributes, function (e3) {
                        t2.setAttribute(e3.name, e3.value);
                    });
                    t2.textContent = e2.textContent;
                    t2.async = false;
                    if (Q.config.inlineScriptNonce) {
                        t2.nonce = Q.config.inlineScriptNonce;
                    }
                    return t2;
                }
                function N(e2) {
                    return (
                        e2.matches("script") &&
                        (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")
                    );
                }
                function I(e2) {
                    Array.from(e2.querySelectorAll("script")).forEach((e3) => {
                        if (N(e3)) {
                            const t2 = A(e3);
                            const n2 = e3.parentNode;
                            try {
                                n2.insertBefore(t2, e3);
                            } catch (e4) {
                                O(e4);
                            } finally {
                                e3.remove();
                            }
                        }
                    });
                }
                function P(e2) {
                    const t2 = e2.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i, "");
                    const n2 = T(t2);
                    let r2;
                    if (n2 === "html") {
                        r2 = new DocumentFragment();
                        const i2 = q(e2);
                        L(r2, i2.body);
                        r2.title = i2.title;
                    } else if (n2 === "body") {
                        r2 = new DocumentFragment();
                        const i2 = q(t2);
                        L(r2, i2.body);
                        r2.title = i2.title;
                    } else {
                        const i2 = q('<body><template class="internal-htmx-wrapper">' + t2 + "</template></body>");
                        r2 = i2.querySelector("template").content;
                        r2.title = i2.title;
                        var o2 = r2.querySelector("title");
                        if (o2 && o2.parentNode === r2) {
                            o2.remove();
                            r2.title = o2.innerText;
                        }
                    }
                    if (r2) {
                        if (Q.config.allowScriptTags) {
                            I(r2);
                        } else {
                            r2.querySelectorAll("script").forEach((e3) => e3.remove());
                        }
                    }
                    return r2;
                }
                function oe(e2) {
                    if (e2) {
                        e2();
                    }
                }
                function t(e2, t2) {
                    return Object.prototype.toString.call(e2) === "[object " + t2 + "]";
                }
                function k(e2) {
                    return typeof e2 === "function";
                }
                function D(e2) {
                    return t(e2, "Object");
                }
                function ie(e2) {
                    const t2 = "htmx-internal-data";
                    let n2 = e2[t2];
                    if (!n2) {
                        n2 = e2[t2] = {};
                    }
                    return n2;
                }
                function M(t2) {
                    const n2 = [];
                    if (t2) {
                        for (let e2 = 0; e2 < t2.length; e2++) {
                            n2.push(t2[e2]);
                        }
                    }
                    return n2;
                }
                function se(t2, n2) {
                    if (t2) {
                        for (let e2 = 0; e2 < t2.length; e2++) {
                            n2(t2[e2]);
                        }
                    }
                }
                function X(e2) {
                    const t2 = e2.getBoundingClientRect();
                    const n2 = t2.top;
                    const r2 = t2.bottom;
                    return n2 < window.innerHeight && r2 >= 0;
                }
                function le(e2) {
                    return e2.getRootNode({ composed: true }) === document;
                }
                function F(e2) {
                    return e2.trim().split(/\s+/);
                }
                function ce(e2, t2) {
                    for (const n2 in t2) {
                        if (t2.hasOwnProperty(n2)) {
                            e2[n2] = t2[n2];
                        }
                    }
                    return e2;
                }
                function S(e2) {
                    try {
                        return JSON.parse(e2);
                    } catch (e3) {
                        O(e3);
                        return null;
                    }
                }
                function B() {
                    const e2 = "htmx:localStorageTest";
                    try {
                        localStorage.setItem(e2, e2);
                        localStorage.removeItem(e2);
                        return true;
                    } catch (e3) {
                        return false;
                    }
                }
                function U(t2) {
                    try {
                        const e2 = new URL(t2);
                        if (e2) {
                            t2 = e2.pathname + e2.search;
                        }
                        if (!/^\/$/.test(t2)) {
                            t2 = t2.replace(/\/+$/, "");
                        }
                        return t2;
                    } catch (e2) {
                        return t2;
                    }
                }
                function e(e) {
                    return vn(ne().body, function () {
                        return eval(e);
                    });
                }
                function j(t2) {
                    const e2 = Q.on("htmx:load", function (e3) {
                        t2(e3.detail.elt);
                    });
                    return e2;
                }
                function V() {
                    Q.logger = function (e2, t2, n2) {
                        if (console) {
                            console.log(t2, e2, n2);
                        }
                    };
                }
                function _() {
                    Q.logger = null;
                }
                function u(e2, t2) {
                    if (typeof e2 !== "string") {
                        return e2.querySelector(t2);
                    } else {
                        return u(ne(), e2);
                    }
                }
                function x(e2, t2) {
                    if (typeof e2 !== "string") {
                        return e2.querySelectorAll(t2);
                    } else {
                        return x(ne(), e2);
                    }
                }
                function E() {
                    return window;
                }
                function z(e2, t2) {
                    e2 = y(e2);
                    if (t2) {
                        E().setTimeout(function () {
                            z(e2);
                            e2 = null;
                        }, t2);
                    } else {
                        c(e2).removeChild(e2);
                    }
                }
                function ue(e2) {
                    return e2 instanceof Element ? e2 : null;
                }
                function $(e2) {
                    return e2 instanceof HTMLElement ? e2 : null;
                }
                function J(e2) {
                    return typeof e2 === "string" ? e2 : null;
                }
                function f(e2) {
                    return e2 instanceof Element || e2 instanceof Document || e2 instanceof DocumentFragment
                        ? e2
                        : null;
                }
                function K(e2, t2, n2) {
                    e2 = ue(y(e2));
                    if (!e2) {
                        return;
                    }
                    if (n2) {
                        E().setTimeout(function () {
                            K(e2, t2);
                            e2 = null;
                        }, n2);
                    } else {
                        e2.classList && e2.classList.add(t2);
                    }
                }
                function G(e2, t2, n2) {
                    let r2 = ue(y(e2));
                    if (!r2) {
                        return;
                    }
                    if (n2) {
                        E().setTimeout(function () {
                            G(r2, t2);
                            r2 = null;
                        }, n2);
                    } else {
                        if (r2.classList) {
                            r2.classList.remove(t2);
                            if (r2.classList.length === 0) {
                                r2.removeAttribute("class");
                            }
                        }
                    }
                }
                function W(e2, t2) {
                    e2 = y(e2);
                    e2.classList.toggle(t2);
                }
                function Z(e2, t2) {
                    e2 = y(e2);
                    se(e2.parentElement.children, function (e3) {
                        G(e3, t2);
                    });
                    K(ue(e2), t2);
                }
                function g(e2, t2) {
                    e2 = ue(y(e2));
                    if (e2 && e2.closest) {
                        return e2.closest(t2);
                    } else {
                        do {
                            if (e2 == null || h(e2, t2)) {
                                return e2;
                            }
                        } while ((e2 = e2 && ue(c(e2))));
                        return null;
                    }
                }
                function l(e2, t2) {
                    return e2.substring(0, t2.length) === t2;
                }
                function Y(e2, t2) {
                    return e2.substring(e2.length - t2.length) === t2;
                }
                function ge(e2) {
                    const t2 = e2.trim();
                    if (l(t2, "<") && Y(t2, "/>")) {
                        return t2.substring(1, t2.length - 2);
                    } else {
                        return t2;
                    }
                }
                function p(t2, r2, n2) {
                    if (r2.indexOf("global ") === 0) {
                        return p(t2, r2.slice(7), true);
                    }
                    t2 = y(t2);
                    const o2 = [];
                    {
                        let t3 = 0;
                        let n3 = 0;
                        for (let e2 = 0; e2 < r2.length; e2++) {
                            const l2 = r2[e2];
                            if (l2 === "," && t3 === 0) {
                                o2.push(r2.substring(n3, e2));
                                n3 = e2 + 1;
                                continue;
                            }
                            if (l2 === "<") {
                                t3++;
                            } else if (l2 === "/" && e2 < r2.length - 1 && r2[e2 + 1] === ">") {
                                t3--;
                            }
                        }
                        if (n3 < r2.length) {
                            o2.push(r2.substring(n3));
                        }
                    }
                    const i2 = [];
                    const s2 = [];
                    while (o2.length > 0) {
                        const r3 = ge(o2.shift());
                        let e2;
                        if (r3.indexOf("closest ") === 0) {
                            e2 = g(ue(t2), ge(r3.substr(8)));
                        } else if (r3.indexOf("find ") === 0) {
                            e2 = u(f(t2), ge(r3.substr(5)));
                        } else if (r3 === "next" || r3 === "nextElementSibling") {
                            e2 = ue(t2).nextElementSibling;
                        } else if (r3.indexOf("next ") === 0) {
                            e2 = pe(t2, ge(r3.substr(5)), !!n2);
                        } else if (r3 === "previous" || r3 === "previousElementSibling") {
                            e2 = ue(t2).previousElementSibling;
                        } else if (r3.indexOf("previous ") === 0) {
                            e2 = me(t2, ge(r3.substr(9)), !!n2);
                        } else if (r3 === "document") {
                            e2 = document;
                        } else if (r3 === "window") {
                            e2 = window;
                        } else if (r3 === "body") {
                            e2 = document.body;
                        } else if (r3 === "root") {
                            e2 = m(t2, !!n2);
                        } else if (r3 === "host") {
                            e2 = t2.getRootNode().host;
                        } else {
                            s2.push(r3);
                        }
                        if (e2) {
                            i2.push(e2);
                        }
                    }
                    if (s2.length > 0) {
                        const e2 = s2.join(",");
                        const c2 = f(m(t2, !!n2));
                        i2.push(...M(c2.querySelectorAll(e2)));
                    }
                    return i2;
                }
                var pe = function (t2, e2, n2) {
                    const r2 = f(m(t2, n2)).querySelectorAll(e2);
                    for (let e3 = 0; e3 < r2.length; e3++) {
                        const o2 = r2[e3];
                        if (o2.compareDocumentPosition(t2) === Node.DOCUMENT_POSITION_PRECEDING) {
                            return o2;
                        }
                    }
                };
                var me = function (t2, e2, n2) {
                    const r2 = f(m(t2, n2)).querySelectorAll(e2);
                    for (let e3 = r2.length - 1; e3 >= 0; e3--) {
                        const o2 = r2[e3];
                        if (o2.compareDocumentPosition(t2) === Node.DOCUMENT_POSITION_FOLLOWING) {
                            return o2;
                        }
                    }
                };
                function ae(e2, t2) {
                    if (typeof e2 !== "string") {
                        return p(e2, t2)[0];
                    } else {
                        return p(ne().body, e2)[0];
                    }
                }
                function y(e2, t2) {
                    if (typeof e2 === "string") {
                        return u(f(t2) || document, e2);
                    } else {
                        return e2;
                    }
                }
                function xe(e2, t2, n2, r2) {
                    if (k(t2)) {
                        return { target: ne().body, event: J(e2), listener: t2, options: n2 };
                    } else {
                        return { target: y(e2), event: J(t2), listener: n2, options: r2 };
                    }
                }
                function ye(t2, n2, r2, o2) {
                    Vn(function () {
                        const e3 = xe(t2, n2, r2, o2);
                        e3.target.addEventListener(e3.event, e3.listener, e3.options);
                    });
                    const e2 = k(n2);
                    return e2 ? n2 : r2;
                }
                function be(t2, n2, r2) {
                    Vn(function () {
                        const e2 = xe(t2, n2, r2);
                        e2.target.removeEventListener(e2.event, e2.listener);
                    });
                    return k(n2) ? n2 : r2;
                }
                const ve = ne().createElement("output");
                function we(e2, t2) {
                    const n2 = re(e2, t2);
                    if (n2) {
                        if (n2 === "this") {
                            return [Se(e2, t2)];
                        } else {
                            const r2 = p(e2, n2);
                            if (r2.length === 0) {
                                O('The selector "' + n2 + '" on ' + t2 + " returned no matches!");
                                return [ve];
                            } else {
                                return r2;
                            }
                        }
                    }
                }
                function Se(e2, t2) {
                    return ue(
                        o(e2, function (e3) {
                            return te(ue(e3), t2) != null;
                        })
                    );
                }
                function Ee(e2) {
                    const t2 = re(e2, "hx-target");
                    if (t2) {
                        if (t2 === "this") {
                            return Se(e2, "hx-target");
                        } else {
                            return ae(e2, t2);
                        }
                    } else {
                        const n2 = ie(e2);
                        if (n2.boosted) {
                            return ne().body;
                        } else {
                            return e2;
                        }
                    }
                }
                function Ce(t2) {
                    const n2 = Q.config.attributesToSettle;
                    for (let e2 = 0; e2 < n2.length; e2++) {
                        if (t2 === n2[e2]) {
                            return true;
                        }
                    }
                    return false;
                }
                function Oe(t2, n2) {
                    se(t2.attributes, function (e2) {
                        if (!n2.hasAttribute(e2.name) && Ce(e2.name)) {
                            t2.removeAttribute(e2.name);
                        }
                    });
                    se(n2.attributes, function (e2) {
                        if (Ce(e2.name)) {
                            t2.setAttribute(e2.name, e2.value);
                        }
                    });
                }
                function Re(t2, e2) {
                    const n2 = Un(e2);
                    for (let e3 = 0; e3 < n2.length; e3++) {
                        const r2 = n2[e3];
                        try {
                            if (r2.isInlineSwap(t2)) {
                                return true;
                            }
                        } catch (e4) {
                            O(e4);
                        }
                    }
                    return t2 === "outerHTML";
                }
                function He(e2, o2, i2, t2) {
                    t2 = t2 || ne();
                    let n2 = "#" + ee(o2, "id");
                    let s2 = "outerHTML";
                    if (e2 === "true") {
                    } else if (e2.indexOf(":") > 0) {
                        s2 = e2.substring(0, e2.indexOf(":"));
                        n2 = e2.substring(e2.indexOf(":") + 1);
                    } else {
                        s2 = e2;
                    }
                    o2.removeAttribute("hx-swap-oob");
                    o2.removeAttribute("data-hx-swap-oob");
                    const r2 = p(t2, n2, false);
                    if (r2) {
                        se(r2, function (e3) {
                            let t3;
                            const n3 = o2.cloneNode(true);
                            t3 = ne().createDocumentFragment();
                            t3.appendChild(n3);
                            if (!Re(s2, e3)) {
                                t3 = f(n3);
                            }
                            const r3 = { shouldSwap: true, target: e3, fragment: t3 };
                            if (!he(e3, "htmx:oobBeforeSwap", r3)) return;
                            e3 = r3.target;
                            if (r3.shouldSwap) {
                                qe(t3);
                                _e(s2, e3, e3, t3, i2);
                                Te();
                            }
                            se(i2.elts, function (e4) {
                                he(e4, "htmx:oobAfterSwap", r3);
                            });
                        });
                        o2.parentNode.removeChild(o2);
                    } else {
                        o2.parentNode.removeChild(o2);
                        fe(ne().body, "htmx:oobErrorNoTarget", { content: o2 });
                    }
                    return e2;
                }
                function Te() {
                    const e2 = u("#--htmx-preserve-pantry--");
                    if (e2) {
                        for (const t2 of [...e2.children]) {
                            const n2 = u("#" + t2.id);
                            n2.parentNode.moveBefore(t2, n2);
                            n2.remove();
                        }
                        e2.remove();
                    }
                }
                function qe(e2) {
                    se(x(e2, "[hx-preserve], [data-hx-preserve]"), function (e3) {
                        const t2 = te(e3, "id");
                        const n2 = ne().getElementById(t2);
                        if (n2 != null) {
                            if (e3.moveBefore) {
                                let e4 = u("#--htmx-preserve-pantry--");
                                if (e4 == null) {
                                    ne().body.insertAdjacentHTML(
                                        "afterend",
                                        "<div id='--htmx-preserve-pantry--'></div>"
                                    );
                                    e4 = u("#--htmx-preserve-pantry--");
                                }
                                e4.moveBefore(n2, null);
                            } else {
                                e3.parentNode.replaceChild(n2, e3);
                            }
                        }
                    });
                }
                function Le(l2, e2, c2) {
                    se(e2.querySelectorAll("[id]"), function (t2) {
                        const n2 = ee(t2, "id");
                        if (n2 && n2.length > 0) {
                            const r2 = n2.replace("'", "\\'");
                            const o2 = t2.tagName.replace(":", "\\:");
                            const e3 = f(l2);
                            const i2 = e3 && e3.querySelector(o2 + "[id='" + r2 + "']");
                            if (i2 && i2 !== e3) {
                                const s2 = t2.cloneNode();
                                Oe(t2, i2);
                                c2.tasks.push(function () {
                                    Oe(t2, s2);
                                });
                            }
                        }
                    });
                }
                function Ae(e2) {
                    return function () {
                        G(e2, Q.config.addedClass);
                        kt(ue(e2));
                        Ne(f(e2));
                        he(e2, "htmx:load");
                    };
                }
                function Ne(e2) {
                    const t2 = "[autofocus]";
                    const n2 = $(h(e2, t2) ? e2 : e2.querySelector(t2));
                    if (n2 != null) {
                        n2.focus();
                    }
                }
                function a(e2, t2, n2, r2) {
                    Le(e2, n2, r2);
                    while (n2.childNodes.length > 0) {
                        const o2 = n2.firstChild;
                        K(ue(o2), Q.config.addedClass);
                        e2.insertBefore(o2, t2);
                        if (o2.nodeType !== Node.TEXT_NODE && o2.nodeType !== Node.COMMENT_NODE) {
                            r2.tasks.push(Ae(o2));
                        }
                    }
                }
                function Ie(e2, t2) {
                    let n2 = 0;
                    while (n2 < e2.length) {
                        t2 = ((t2 << 5) - t2 + e2.charCodeAt(n2++)) | 0;
                    }
                    return t2;
                }
                function Pe(t2) {
                    let n2 = 0;
                    if (t2.attributes) {
                        for (let e2 = 0; e2 < t2.attributes.length; e2++) {
                            const r2 = t2.attributes[e2];
                            if (r2.value) {
                                n2 = Ie(r2.name, n2);
                                n2 = Ie(r2.value, n2);
                            }
                        }
                    }
                    return n2;
                }
                function ke(t2) {
                    const n2 = ie(t2);
                    if (n2.onHandlers) {
                        for (let e2 = 0; e2 < n2.onHandlers.length; e2++) {
                            const r2 = n2.onHandlers[e2];
                            be(t2, r2.event, r2.listener);
                        }
                        delete n2.onHandlers;
                    }
                }
                function De(e2) {
                    const t2 = ie(e2);
                    if (t2.timeout) {
                        clearTimeout(t2.timeout);
                    }
                    if (t2.listenerInfos) {
                        se(t2.listenerInfos, function (e3) {
                            if (e3.on) {
                                be(e3.on, e3.trigger, e3.listener);
                            }
                        });
                    }
                    ke(e2);
                    se(Object.keys(t2), function (e3) {
                        if (e3 !== "firstInitCompleted") delete t2[e3];
                    });
                }
                function b(e2) {
                    he(e2, "htmx:beforeCleanupElement");
                    De(e2);
                    if (e2.children) {
                        se(e2.children, function (e3) {
                            b(e3);
                        });
                    }
                }
                function Me(t2, e2, n2) {
                    if (t2 instanceof Element && t2.tagName === "BODY") {
                        return Ve(t2, e2, n2);
                    }
                    let r2;
                    const o2 = t2.previousSibling;
                    const i2 = c(t2);
                    if (!i2) {
                        return;
                    }
                    a(i2, t2, e2, n2);
                    if (o2 == null) {
                        r2 = i2.firstChild;
                    } else {
                        r2 = o2.nextSibling;
                    }
                    n2.elts = n2.elts.filter(function (e3) {
                        return e3 !== t2;
                    });
                    while (r2 && r2 !== t2) {
                        if (r2 instanceof Element) {
                            n2.elts.push(r2);
                        }
                        r2 = r2.nextSibling;
                    }
                    b(t2);
                    if (t2 instanceof Element) {
                        t2.remove();
                    } else {
                        t2.parentNode.removeChild(t2);
                    }
                }
                function Xe(e2, t2, n2) {
                    return a(e2, e2.firstChild, t2, n2);
                }
                function Fe(e2, t2, n2) {
                    return a(c(e2), e2, t2, n2);
                }
                function Be(e2, t2, n2) {
                    return a(e2, null, t2, n2);
                }
                function Ue(e2, t2, n2) {
                    return a(c(e2), e2.nextSibling, t2, n2);
                }
                function je(e2) {
                    b(e2);
                    const t2 = c(e2);
                    if (t2) {
                        return t2.removeChild(e2);
                    }
                }
                function Ve(e2, t2, n2) {
                    const r2 = e2.firstChild;
                    a(e2, r2, t2, n2);
                    if (r2) {
                        while (r2.nextSibling) {
                            b(r2.nextSibling);
                            e2.removeChild(r2.nextSibling);
                        }
                        b(r2);
                        e2.removeChild(r2);
                    }
                }
                function _e(t2, e2, n2, r2, o2) {
                    switch (t2) {
                        case "none":
                            return;
                        case "outerHTML":
                            Me(n2, r2, o2);
                            return;
                        case "afterbegin":
                            Xe(n2, r2, o2);
                            return;
                        case "beforebegin":
                            Fe(n2, r2, o2);
                            return;
                        case "beforeend":
                            Be(n2, r2, o2);
                            return;
                        case "afterend":
                            Ue(n2, r2, o2);
                            return;
                        case "delete":
                            je(n2);
                            return;
                        default:
                            var i2 = Un(e2);
                            for (let e3 = 0; e3 < i2.length; e3++) {
                                const s2 = i2[e3];
                                try {
                                    const l2 = s2.handleSwap(t2, n2, r2, o2);
                                    if (l2) {
                                        if (Array.isArray(l2)) {
                                            for (let e4 = 0; e4 < l2.length; e4++) {
                                                const c2 = l2[e4];
                                                if (
                                                    c2.nodeType !== Node.TEXT_NODE &&
                                                    c2.nodeType !== Node.COMMENT_NODE
                                                ) {
                                                    o2.tasks.push(Ae(c2));
                                                }
                                            }
                                        }
                                        return;
                                    }
                                } catch (e4) {
                                    O(e4);
                                }
                            }
                            if (t2 === "innerHTML") {
                                Ve(n2, r2, o2);
                            } else {
                                _e(Q.config.defaultSwapStyle, e2, n2, r2, o2);
                            }
                    }
                }
                function ze(e2, n2, r2) {
                    var t2 = x(e2, "[hx-swap-oob], [data-hx-swap-oob]");
                    se(t2, function (e3) {
                        if (Q.config.allowNestedOobSwaps || e3.parentElement === null) {
                            const t3 = te(e3, "hx-swap-oob");
                            if (t3 != null) {
                                He(t3, e3, n2, r2);
                            }
                        } else {
                            e3.removeAttribute("hx-swap-oob");
                            e3.removeAttribute("data-hx-swap-oob");
                        }
                    });
                    return t2.length > 0;
                }
                function $e(e2, t2, r2, o2) {
                    if (!o2) {
                        o2 = {};
                    }
                    e2 = y(e2);
                    const i2 = o2.contextElement ? m(o2.contextElement, false) : ne();
                    const n2 = document.activeElement;
                    let s2 = {};
                    try {
                        s2 = { elt: n2, start: n2 ? n2.selectionStart : null, end: n2 ? n2.selectionEnd : null };
                    } catch (e3) {}
                    const l2 = xn(e2);
                    if (r2.swapStyle === "textContent") {
                        e2.textContent = t2;
                    } else {
                        let n3 = P(t2);
                        l2.title = n3.title;
                        if (o2.selectOOB) {
                            const u2 = o2.selectOOB.split(",");
                            for (let t3 = 0; t3 < u2.length; t3++) {
                                const a2 = u2[t3].split(":", 2);
                                let e3 = a2[0].trim();
                                if (e3.indexOf("#") === 0) {
                                    e3 = e3.substring(1);
                                }
                                const f2 = a2[1] || "true";
                                const h2 = n3.querySelector("#" + e3);
                                if (h2) {
                                    He(f2, h2, l2, i2);
                                }
                            }
                        }
                        ze(n3, l2, i2);
                        se(x(n3, "template"), function (e3) {
                            if (e3.content && ze(e3.content, l2, i2)) {
                                e3.remove();
                            }
                        });
                        if (o2.select) {
                            const d2 = ne().createDocumentFragment();
                            se(n3.querySelectorAll(o2.select), function (e3) {
                                d2.appendChild(e3);
                            });
                            n3 = d2;
                        }
                        qe(n3);
                        _e(r2.swapStyle, o2.contextElement, e2, n3, l2);
                        Te();
                    }
                    if (s2.elt && !le(s2.elt) && ee(s2.elt, "id")) {
                        const g2 = document.getElementById(ee(s2.elt, "id"));
                        const p2 = {
                            preventScroll: r2.focusScroll !== void 0 ? !r2.focusScroll : !Q.config.defaultFocusScroll,
                        };
                        if (g2) {
                            if (s2.start && g2.setSelectionRange) {
                                try {
                                    g2.setSelectionRange(s2.start, s2.end);
                                } catch (e3) {}
                            }
                            g2.focus(p2);
                        }
                    }
                    e2.classList.remove(Q.config.swappingClass);
                    se(l2.elts, function (e3) {
                        if (e3.classList) {
                            e3.classList.add(Q.config.settlingClass);
                        }
                        he(e3, "htmx:afterSwap", o2.eventInfo);
                    });
                    if (o2.afterSwapCallback) {
                        o2.afterSwapCallback();
                    }
                    if (!r2.ignoreTitle) {
                        kn(l2.title);
                    }
                    const c2 = function () {
                        se(l2.tasks, function (e3) {
                            e3.call();
                        });
                        se(l2.elts, function (e3) {
                            if (e3.classList) {
                                e3.classList.remove(Q.config.settlingClass);
                            }
                            he(e3, "htmx:afterSettle", o2.eventInfo);
                        });
                        if (o2.anchor) {
                            const e3 = ue(y("#" + o2.anchor));
                            if (e3) {
                                e3.scrollIntoView({ block: "start", behavior: "auto" });
                            }
                        }
                        yn(l2.elts, r2);
                        if (o2.afterSettleCallback) {
                            o2.afterSettleCallback();
                        }
                    };
                    if (r2.settleDelay > 0) {
                        E().setTimeout(c2, r2.settleDelay);
                    } else {
                        c2();
                    }
                }
                function Je(e2, t2, n2) {
                    const r2 = e2.getResponseHeader(t2);
                    if (r2.indexOf("{") === 0) {
                        const o2 = S(r2);
                        for (const i2 in o2) {
                            if (o2.hasOwnProperty(i2)) {
                                let e3 = o2[i2];
                                if (D(e3)) {
                                    n2 = e3.target !== void 0 ? e3.target : n2;
                                } else {
                                    e3 = { value: e3 };
                                }
                                he(n2, i2, e3);
                            }
                        }
                    } else {
                        const s2 = r2.split(",");
                        for (let e3 = 0; e3 < s2.length; e3++) {
                            he(n2, s2[e3].trim(), []);
                        }
                    }
                }
                const Ke = /\s/;
                const v = /[\s,]/;
                const Ge = /[_$a-zA-Z]/;
                const We = /[_$a-zA-Z0-9]/;
                const Ze = ['"', "'", "/"];
                const w = /[^\s]/;
                const Ye = /[{(]/;
                const Qe = /[})]/;
                function et(e2) {
                    const t2 = [];
                    let n2 = 0;
                    while (n2 < e2.length) {
                        if (Ge.exec(e2.charAt(n2))) {
                            var r2 = n2;
                            while (We.exec(e2.charAt(n2 + 1))) {
                                n2++;
                            }
                            t2.push(e2.substring(r2, n2 + 1));
                        } else if (Ze.indexOf(e2.charAt(n2)) !== -1) {
                            const o2 = e2.charAt(n2);
                            var r2 = n2;
                            n2++;
                            while (n2 < e2.length && e2.charAt(n2) !== o2) {
                                if (e2.charAt(n2) === "\\") {
                                    n2++;
                                }
                                n2++;
                            }
                            t2.push(e2.substring(r2, n2 + 1));
                        } else {
                            const i2 = e2.charAt(n2);
                            t2.push(i2);
                        }
                        n2++;
                    }
                    return t2;
                }
                function tt(e2, t2, n2) {
                    return (
                        Ge.exec(e2.charAt(0)) &&
                        e2 !== "true" &&
                        e2 !== "false" &&
                        e2 !== "this" &&
                        e2 !== n2 &&
                        t2 !== "."
                    );
                }
                function nt(r2, o2, i2) {
                    if (o2[0] === "[") {
                        o2.shift();
                        let e2 = 1;
                        let t2 = " return (function(" + i2 + "){ return (";
                        let n2 = null;
                        while (o2.length > 0) {
                            const s2 = o2[0];
                            if (s2 === "]") {
                                e2--;
                                if (e2 === 0) {
                                    if (n2 === null) {
                                        t2 = t2 + "true";
                                    }
                                    o2.shift();
                                    t2 += ")})";
                                    try {
                                        const l2 = vn(
                                            r2,
                                            function () {
                                                return Function(t2)();
                                            },
                                            function () {
                                                return true;
                                            }
                                        );
                                        l2.source = t2;
                                        return l2;
                                    } catch (e3) {
                                        fe(ne().body, "htmx:syntax:error", { error: e3, source: t2 });
                                        return null;
                                    }
                                }
                            } else if (s2 === "[") {
                                e2++;
                            }
                            if (tt(s2, n2, i2)) {
                                t2 += "((" + i2 + "." + s2 + ") ? (" + i2 + "." + s2 + ") : (window." + s2 + "))";
                            } else {
                                t2 = t2 + s2;
                            }
                            n2 = o2.shift();
                        }
                    }
                }
                function C(e2, t2) {
                    let n2 = "";
                    while (e2.length > 0 && !t2.test(e2[0])) {
                        n2 += e2.shift();
                    }
                    return n2;
                }
                function rt(e2) {
                    let t2;
                    if (e2.length > 0 && Ye.test(e2[0])) {
                        e2.shift();
                        t2 = C(e2, Qe).trim();
                        e2.shift();
                    } else {
                        t2 = C(e2, v);
                    }
                    return t2;
                }
                const ot = "input, textarea, select";
                function it(e2, t2, n2) {
                    const r2 = [];
                    const o2 = et(t2);
                    do {
                        C(o2, w);
                        const l2 = o2.length;
                        const c2 = C(o2, /[,\[\s]/);
                        if (c2 !== "") {
                            if (c2 === "every") {
                                const u2 = { trigger: "every" };
                                C(o2, w);
                                u2.pollInterval = d(C(o2, /[,\[\s]/));
                                C(o2, w);
                                var i2 = nt(e2, o2, "event");
                                if (i2) {
                                    u2.eventFilter = i2;
                                }
                                r2.push(u2);
                            } else {
                                const a2 = { trigger: c2 };
                                var i2 = nt(e2, o2, "event");
                                if (i2) {
                                    a2.eventFilter = i2;
                                }
                                C(o2, w);
                                while (o2.length > 0 && o2[0] !== ",") {
                                    const f2 = o2.shift();
                                    if (f2 === "changed") {
                                        a2.changed = true;
                                    } else if (f2 === "once") {
                                        a2.once = true;
                                    } else if (f2 === "consume") {
                                        a2.consume = true;
                                    } else if (f2 === "delay" && o2[0] === ":") {
                                        o2.shift();
                                        a2.delay = d(C(o2, v));
                                    } else if (f2 === "from" && o2[0] === ":") {
                                        o2.shift();
                                        if (Ye.test(o2[0])) {
                                            var s2 = rt(o2);
                                        } else {
                                            var s2 = C(o2, v);
                                            if (
                                                s2 === "closest" ||
                                                s2 === "find" ||
                                                s2 === "next" ||
                                                s2 === "previous"
                                            ) {
                                                o2.shift();
                                                const h2 = rt(o2);
                                                if (h2.length > 0) {
                                                    s2 += " " + h2;
                                                }
                                            }
                                        }
                                        a2.from = s2;
                                    } else if (f2 === "target" && o2[0] === ":") {
                                        o2.shift();
                                        a2.target = rt(o2);
                                    } else if (f2 === "throttle" && o2[0] === ":") {
                                        o2.shift();
                                        a2.throttle = d(C(o2, v));
                                    } else if (f2 === "queue" && o2[0] === ":") {
                                        o2.shift();
                                        a2.queue = C(o2, v);
                                    } else if (f2 === "root" && o2[0] === ":") {
                                        o2.shift();
                                        a2[f2] = rt(o2);
                                    } else if (f2 === "threshold" && o2[0] === ":") {
                                        o2.shift();
                                        a2[f2] = C(o2, v);
                                    } else {
                                        fe(e2, "htmx:syntax:error", { token: o2.shift() });
                                    }
                                    C(o2, w);
                                }
                                r2.push(a2);
                            }
                        }
                        if (o2.length === l2) {
                            fe(e2, "htmx:syntax:error", { token: o2.shift() });
                        }
                        C(o2, w);
                    } while (o2[0] === "," && o2.shift());
                    if (n2) {
                        n2[t2] = r2;
                    }
                    return r2;
                }
                function st(e2) {
                    const t2 = te(e2, "hx-trigger");
                    let n2 = [];
                    if (t2) {
                        const r2 = Q.config.triggerSpecsCache;
                        n2 = (r2 && r2[t2]) || it(e2, t2, r2);
                    }
                    if (n2.length > 0) {
                        return n2;
                    } else if (h(e2, "form")) {
                        return [{ trigger: "submit" }];
                    } else if (h(e2, 'input[type="button"], input[type="submit"]')) {
                        return [{ trigger: "click" }];
                    } else if (h(e2, ot)) {
                        return [{ trigger: "change" }];
                    } else {
                        return [{ trigger: "click" }];
                    }
                }
                function lt(e2) {
                    ie(e2).cancelled = true;
                }
                function ct(e2, t2, n2) {
                    const r2 = ie(e2);
                    r2.timeout = E().setTimeout(function () {
                        if (le(e2) && r2.cancelled !== true) {
                            if (!gt(n2, e2, Mt("hx:poll:trigger", { triggerSpec: n2, target: e2 }))) {
                                t2(e2);
                            }
                            ct(e2, t2, n2);
                        }
                    }, n2.pollInterval);
                }
                function ut(e2) {
                    return location.hostname === e2.hostname && ee(e2, "href") && ee(e2, "href").indexOf("#") !== 0;
                }
                function at(e2) {
                    return g(e2, Q.config.disableSelector);
                }
                function ft(t2, n2, e2) {
                    if (
                        (t2 instanceof HTMLAnchorElement && ut(t2) && (t2.target === "" || t2.target === "_self")) ||
                        (t2.tagName === "FORM" && String(ee(t2, "method")).toLowerCase() !== "dialog")
                    ) {
                        n2.boosted = true;
                        let r2, o2;
                        if (t2.tagName === "A") {
                            r2 = "get";
                            o2 = ee(t2, "href");
                        } else {
                            const i2 = ee(t2, "method");
                            r2 = i2 ? i2.toLowerCase() : "get";
                            o2 = ee(t2, "action");
                            if (o2 == null || o2 === "") {
                                o2 = ne().location.href;
                            }
                            if (r2 === "get" && o2.includes("?")) {
                                o2 = o2.replace(/\?[^#]+/, "");
                            }
                        }
                        e2.forEach(function (e3) {
                            pt(
                                t2,
                                function (e4, t3) {
                                    const n3 = ue(e4);
                                    if (at(n3)) {
                                        b(n3);
                                        return;
                                    }
                                    de(r2, o2, n3, t3);
                                },
                                n2,
                                e3,
                                true
                            );
                        });
                    }
                }
                function ht(e2, t2) {
                    const n2 = ue(t2);
                    if (!n2) {
                        return false;
                    }
                    if (e2.type === "submit" || e2.type === "click") {
                        if (n2.tagName === "FORM") {
                            return true;
                        }
                        if (h(n2, 'input[type="submit"], button') && (h(n2, "[form]") || g(n2, "form") !== null)) {
                            return true;
                        }
                        if (
                            n2 instanceof HTMLAnchorElement &&
                            n2.href &&
                            (n2.getAttribute("href") === "#" || n2.getAttribute("href").indexOf("#") !== 0)
                        ) {
                            return true;
                        }
                    }
                    return false;
                }
                function dt(e2, t2) {
                    return (
                        ie(e2).boosted &&
                        e2 instanceof HTMLAnchorElement &&
                        t2.type === "click" &&
                        (t2.ctrlKey || t2.metaKey)
                    );
                }
                function gt(e2, t2, n2) {
                    const r2 = e2.eventFilter;
                    if (r2) {
                        try {
                            return r2.call(t2, n2) !== true;
                        } catch (e3) {
                            const o2 = r2.source;
                            fe(ne().body, "htmx:eventFilter:error", { error: e3, source: o2 });
                            return true;
                        }
                    }
                    return false;
                }
                function pt(l2, c2, e2, u2, a2) {
                    const f2 = ie(l2);
                    let t2;
                    if (u2.from) {
                        t2 = p(l2, u2.from);
                    } else {
                        t2 = [l2];
                    }
                    if (u2.changed) {
                        if (!("lastValue" in f2)) {
                            f2.lastValue = /* @__PURE__ */ new WeakMap();
                        }
                        t2.forEach(function (e3) {
                            if (!f2.lastValue.has(u2)) {
                                f2.lastValue.set(u2, /* @__PURE__ */ new WeakMap());
                            }
                            f2.lastValue.get(u2).set(e3, e3.value);
                        });
                    }
                    se(t2, function (i2) {
                        const s2 = function (e3) {
                            if (!le(l2)) {
                                i2.removeEventListener(u2.trigger, s2);
                                return;
                            }
                            if (dt(l2, e3)) {
                                return;
                            }
                            if (a2 || ht(e3, l2)) {
                                e3.preventDefault();
                            }
                            if (gt(u2, l2, e3)) {
                                return;
                            }
                            const t3 = ie(e3);
                            t3.triggerSpec = u2;
                            if (t3.handledFor == null) {
                                t3.handledFor = [];
                            }
                            if (t3.handledFor.indexOf(l2) < 0) {
                                t3.handledFor.push(l2);
                                if (u2.consume) {
                                    e3.stopPropagation();
                                }
                                if (u2.target && e3.target) {
                                    if (!h(ue(e3.target), u2.target)) {
                                        return;
                                    }
                                }
                                if (u2.once) {
                                    if (f2.triggeredOnce) {
                                        return;
                                    } else {
                                        f2.triggeredOnce = true;
                                    }
                                }
                                if (u2.changed) {
                                    const n2 = event.target;
                                    const r2 = n2.value;
                                    const o2 = f2.lastValue.get(u2);
                                    if (o2.has(n2) && o2.get(n2) === r2) {
                                        return;
                                    }
                                    o2.set(n2, r2);
                                }
                                if (f2.delayed) {
                                    clearTimeout(f2.delayed);
                                }
                                if (f2.throttle) {
                                    return;
                                }
                                if (u2.throttle > 0) {
                                    if (!f2.throttle) {
                                        he(l2, "htmx:trigger");
                                        c2(l2, e3);
                                        f2.throttle = E().setTimeout(function () {
                                            f2.throttle = null;
                                        }, u2.throttle);
                                    }
                                } else if (u2.delay > 0) {
                                    f2.delayed = E().setTimeout(function () {
                                        he(l2, "htmx:trigger");
                                        c2(l2, e3);
                                    }, u2.delay);
                                } else {
                                    he(l2, "htmx:trigger");
                                    c2(l2, e3);
                                }
                            }
                        };
                        if (e2.listenerInfos == null) {
                            e2.listenerInfos = [];
                        }
                        e2.listenerInfos.push({ trigger: u2.trigger, listener: s2, on: i2 });
                        i2.addEventListener(u2.trigger, s2);
                    });
                }
                let mt = false;
                let xt = null;
                function yt() {
                    if (!xt) {
                        xt = function () {
                            mt = true;
                        };
                        window.addEventListener("scroll", xt);
                        window.addEventListener("resize", xt);
                        setInterval(function () {
                            if (mt) {
                                mt = false;
                                se(
                                    ne().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"),
                                    function (e2) {
                                        bt(e2);
                                    }
                                );
                            }
                        }, 200);
                    }
                }
                function bt(e2) {
                    if (!s(e2, "data-hx-revealed") && X(e2)) {
                        e2.setAttribute("data-hx-revealed", "true");
                        const t2 = ie(e2);
                        if (t2.initHash) {
                            he(e2, "revealed");
                        } else {
                            e2.addEventListener(
                                "htmx:afterProcessNode",
                                function () {
                                    he(e2, "revealed");
                                },
                                { once: true }
                            );
                        }
                    }
                }
                function vt(e2, t2, n2, r2) {
                    const o2 = function () {
                        if (!n2.loaded) {
                            n2.loaded = true;
                            he(e2, "htmx:trigger");
                            t2(e2);
                        }
                    };
                    if (r2 > 0) {
                        E().setTimeout(o2, r2);
                    } else {
                        o2();
                    }
                }
                function wt(t2, n2, e2) {
                    let i2 = false;
                    se(r, function (r2) {
                        if (s(t2, "hx-" + r2)) {
                            const o2 = te(t2, "hx-" + r2);
                            i2 = true;
                            n2.path = o2;
                            n2.verb = r2;
                            e2.forEach(function (e3) {
                                St(t2, e3, n2, function (e4, t3) {
                                    const n3 = ue(e4);
                                    if (g(n3, Q.config.disableSelector)) {
                                        b(n3);
                                        return;
                                    }
                                    de(r2, o2, n3, t3);
                                });
                            });
                        }
                    });
                    return i2;
                }
                function St(r2, e2, t2, n2) {
                    if (e2.trigger === "revealed") {
                        yt();
                        pt(r2, n2, t2, e2);
                        bt(ue(r2));
                    } else if (e2.trigger === "intersect") {
                        const o2 = {};
                        if (e2.root) {
                            o2.root = ae(r2, e2.root);
                        }
                        if (e2.threshold) {
                            o2.threshold = parseFloat(e2.threshold);
                        }
                        const i2 = new IntersectionObserver(function (t3) {
                            for (let e3 = 0; e3 < t3.length; e3++) {
                                const n3 = t3[e3];
                                if (n3.isIntersecting) {
                                    he(r2, "intersect");
                                    break;
                                }
                            }
                        }, o2);
                        i2.observe(ue(r2));
                        pt(ue(r2), n2, t2, e2);
                    } else if (!t2.firstInitCompleted && e2.trigger === "load") {
                        if (!gt(e2, r2, Mt("load", { elt: r2 }))) {
                            vt(ue(r2), n2, t2, e2.delay);
                        }
                    } else if (e2.pollInterval > 0) {
                        t2.polling = true;
                        ct(ue(r2), n2, e2);
                    } else {
                        pt(r2, n2, t2, e2);
                    }
                }
                function Et(e2) {
                    const t2 = ue(e2);
                    if (!t2) {
                        return false;
                    }
                    const n2 = t2.attributes;
                    for (let e3 = 0; e3 < n2.length; e3++) {
                        const r2 = n2[e3].name;
                        if (l(r2, "hx-on:") || l(r2, "data-hx-on:") || l(r2, "hx-on-") || l(r2, "data-hx-on-")) {
                            return true;
                        }
                    }
                    return false;
                }
                const Ct = new XPathEvaluator().createExpression(
                    './/*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]'
                );
                function Ot(e2, t2) {
                    if (Et(e2)) {
                        t2.push(ue(e2));
                    }
                    const n2 = Ct.evaluate(e2);
                    let r2 = null;
                    while ((r2 = n2.iterateNext())) t2.push(ue(r2));
                }
                function Rt(e2) {
                    const t2 = [];
                    if (e2 instanceof DocumentFragment) {
                        for (const n2 of e2.childNodes) {
                            Ot(n2, t2);
                        }
                    } else {
                        Ot(e2, t2);
                    }
                    return t2;
                }
                function Ht(e2) {
                    if (e2.querySelectorAll) {
                        const n2 = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
                        const r2 = [];
                        for (const i2 in Mn) {
                            const s2 = Mn[i2];
                            if (s2.getSelectors) {
                                var t2 = s2.getSelectors();
                                if (t2) {
                                    r2.push(t2);
                                }
                            }
                        }
                        const o2 = e2.querySelectorAll(
                            H +
                                n2 +
                                ", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]" +
                                r2
                                    .flat()
                                    .map((e3) => ", " + e3)
                                    .join("")
                        );
                        return o2;
                    } else {
                        return [];
                    }
                }
                function Tt(e2) {
                    const t2 = g(ue(e2.target), "button, input[type='submit']");
                    const n2 = Lt(e2);
                    if (n2) {
                        n2.lastButtonClicked = t2;
                    }
                }
                function qt(e2) {
                    const t2 = Lt(e2);
                    if (t2) {
                        t2.lastButtonClicked = null;
                    }
                }
                function Lt(e2) {
                    const t2 = g(ue(e2.target), "button, input[type='submit']");
                    if (!t2) {
                        return;
                    }
                    const n2 = y("#" + ee(t2, "form"), t2.getRootNode()) || g(t2, "form");
                    if (!n2) {
                        return;
                    }
                    return ie(n2);
                }
                function At(e2) {
                    e2.addEventListener("click", Tt);
                    e2.addEventListener("focusin", Tt);
                    e2.addEventListener("focusout", qt);
                }
                function Nt(t2, e2, n2) {
                    const r2 = ie(t2);
                    if (!Array.isArray(r2.onHandlers)) {
                        r2.onHandlers = [];
                    }
                    let o2;
                    const i2 = function (e3) {
                        vn(t2, function () {
                            if (at(t2)) {
                                return;
                            }
                            if (!o2) {
                                o2 = new Function("event", n2);
                            }
                            o2.call(t2, e3);
                        });
                    };
                    t2.addEventListener(e2, i2);
                    r2.onHandlers.push({ event: e2, listener: i2 });
                }
                function It(t2) {
                    ke(t2);
                    for (let e2 = 0; e2 < t2.attributes.length; e2++) {
                        const n2 = t2.attributes[e2].name;
                        const r2 = t2.attributes[e2].value;
                        if (l(n2, "hx-on") || l(n2, "data-hx-on")) {
                            const o2 = n2.indexOf("-on") + 3;
                            const i2 = n2.slice(o2, o2 + 1);
                            if (i2 === "-" || i2 === ":") {
                                let e3 = n2.slice(o2 + 1);
                                if (l(e3, ":")) {
                                    e3 = "htmx" + e3;
                                } else if (l(e3, "-")) {
                                    e3 = "htmx:" + e3.slice(1);
                                } else if (l(e3, "htmx-")) {
                                    e3 = "htmx:" + e3.slice(5);
                                }
                                Nt(t2, e3, r2);
                            }
                        }
                    }
                }
                function Pt(t2) {
                    if (g(t2, Q.config.disableSelector)) {
                        b(t2);
                        return;
                    }
                    const n2 = ie(t2);
                    const e2 = Pe(t2);
                    if (n2.initHash !== e2) {
                        De(t2);
                        n2.initHash = e2;
                        he(t2, "htmx:beforeProcessNode");
                        const r2 = st(t2);
                        const o2 = wt(t2, n2, r2);
                        if (!o2) {
                            if (re(t2, "hx-boost") === "true") {
                                ft(t2, n2, r2);
                            } else if (s(t2, "hx-trigger")) {
                                r2.forEach(function (e3) {
                                    St(t2, e3, n2, function () {});
                                });
                            }
                        }
                        if (t2.tagName === "FORM" || (ee(t2, "type") === "submit" && s(t2, "form"))) {
                            At(t2);
                        }
                        n2.firstInitCompleted = true;
                        he(t2, "htmx:afterProcessNode");
                    }
                }
                function kt(e2) {
                    e2 = y(e2);
                    if (g(e2, Q.config.disableSelector)) {
                        b(e2);
                        return;
                    }
                    Pt(e2);
                    se(Ht(e2), function (e3) {
                        Pt(e3);
                    });
                    se(Rt(e2), It);
                }
                function Dt(e2) {
                    return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
                }
                function Mt(e2, t2) {
                    let n2;
                    if (window.CustomEvent && typeof window.CustomEvent === "function") {
                        n2 = new CustomEvent(e2, { bubbles: true, cancelable: true, composed: true, detail: t2 });
                    } else {
                        n2 = ne().createEvent("CustomEvent");
                        n2.initCustomEvent(e2, true, true, t2);
                    }
                    return n2;
                }
                function fe(e2, t2, n2) {
                    he(e2, t2, ce({ error: t2 }, n2));
                }
                function Xt(e2) {
                    return e2 === "htmx:afterProcessNode";
                }
                function Ft(e2, t2) {
                    se(Un(e2), function (e3) {
                        try {
                            t2(e3);
                        } catch (e4) {
                            O(e4);
                        }
                    });
                }
                function O(e2) {
                    if (console.error) {
                        console.error(e2);
                    } else if (console.log) {
                        console.log("ERROR: ", e2);
                    }
                }
                function he(e2, t2, n2) {
                    e2 = y(e2);
                    if (n2 == null) {
                        n2 = {};
                    }
                    n2.elt = e2;
                    const r2 = Mt(t2, n2);
                    if (Q.logger && !Xt(t2)) {
                        Q.logger(e2, t2, n2);
                    }
                    if (n2.error) {
                        O(n2.error);
                        he(e2, "htmx:error", { errorInfo: n2 });
                    }
                    let o2 = e2.dispatchEvent(r2);
                    const i2 = Dt(t2);
                    if (o2 && i2 !== t2) {
                        const s2 = Mt(i2, r2.detail);
                        o2 = o2 && e2.dispatchEvent(s2);
                    }
                    Ft(ue(e2), function (e3) {
                        o2 = o2 && e3.onEvent(t2, r2) !== false && !r2.defaultPrevented;
                    });
                    return o2;
                }
                let Bt = location.pathname + location.search;
                function Ut() {
                    const e2 = ne().querySelector("[hx-history-elt],[data-hx-history-elt]");
                    return e2 || ne().body;
                }
                function jt(t2, e2) {
                    if (!B()) {
                        return;
                    }
                    const n2 = _t(e2);
                    const r2 = ne().title;
                    const o2 = window.scrollY;
                    if (Q.config.historyCacheSize <= 0) {
                        localStorage.removeItem("htmx-history-cache");
                        return;
                    }
                    t2 = U(t2);
                    const i2 = S(localStorage.getItem("htmx-history-cache")) || [];
                    for (let e3 = 0; e3 < i2.length; e3++) {
                        if (i2[e3].url === t2) {
                            i2.splice(e3, 1);
                            break;
                        }
                    }
                    const s2 = { url: t2, content: n2, title: r2, scroll: o2 };
                    he(ne().body, "htmx:historyItemCreated", { item: s2, cache: i2 });
                    i2.push(s2);
                    while (i2.length > Q.config.historyCacheSize) {
                        i2.shift();
                    }
                    while (i2.length > 0) {
                        try {
                            localStorage.setItem("htmx-history-cache", JSON.stringify(i2));
                            break;
                        } catch (e3) {
                            fe(ne().body, "htmx:historyCacheError", { cause: e3, cache: i2 });
                            i2.shift();
                        }
                    }
                }
                function Vt(t2) {
                    if (!B()) {
                        return null;
                    }
                    t2 = U(t2);
                    const n2 = S(localStorage.getItem("htmx-history-cache")) || [];
                    for (let e2 = 0; e2 < n2.length; e2++) {
                        if (n2[e2].url === t2) {
                            return n2[e2];
                        }
                    }
                    return null;
                }
                function _t(e2) {
                    const t2 = Q.config.requestClass;
                    const n2 = e2.cloneNode(true);
                    se(x(n2, "." + t2), function (e3) {
                        G(e3, t2);
                    });
                    se(x(n2, "[data-disabled-by-htmx]"), function (e3) {
                        e3.removeAttribute("disabled");
                    });
                    return n2.innerHTML;
                }
                function zt() {
                    const e2 = Ut();
                    const t2 = Bt || location.pathname + location.search;
                    let n2;
                    try {
                        n2 = ne().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
                    } catch (e3) {
                        n2 = ne().querySelector('[hx-history="false"],[data-hx-history="false"]');
                    }
                    if (!n2) {
                        he(ne().body, "htmx:beforeHistorySave", { path: t2, historyElt: e2 });
                        jt(t2, e2);
                    }
                    if (Q.config.historyEnabled) history.replaceState({ htmx: true }, ne().title, window.location.href);
                }
                function $t(e2) {
                    if (Q.config.getCacheBusterParam) {
                        e2 = e2.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
                        if (Y(e2, "&") || Y(e2, "?")) {
                            e2 = e2.slice(0, -1);
                        }
                    }
                    if (Q.config.historyEnabled) {
                        history.pushState({ htmx: true }, "", e2);
                    }
                    Bt = e2;
                }
                function Jt(e2) {
                    if (Q.config.historyEnabled) history.replaceState({ htmx: true }, "", e2);
                    Bt = e2;
                }
                function Kt(e2) {
                    se(e2, function (e3) {
                        e3.call(void 0);
                    });
                }
                function Gt(o2) {
                    const e2 = new XMLHttpRequest();
                    const i2 = { path: o2, xhr: e2 };
                    he(ne().body, "htmx:historyCacheMiss", i2);
                    e2.open("GET", o2, true);
                    e2.setRequestHeader("HX-Request", "true");
                    e2.setRequestHeader("HX-History-Restore-Request", "true");
                    e2.setRequestHeader("HX-Current-URL", ne().location.href);
                    e2.onload = function () {
                        if (this.status >= 200 && this.status < 400) {
                            he(ne().body, "htmx:historyCacheMissLoad", i2);
                            const e3 = P(this.response);
                            const t2 = e3.querySelector("[hx-history-elt],[data-hx-history-elt]") || e3;
                            const n2 = Ut();
                            const r2 = xn(n2);
                            kn(e3.title);
                            qe(e3);
                            Ve(n2, t2, r2);
                            Te();
                            Kt(r2.tasks);
                            Bt = o2;
                            he(ne().body, "htmx:historyRestore", {
                                path: o2,
                                cacheMiss: true,
                                serverResponse: this.response,
                            });
                        } else {
                            fe(ne().body, "htmx:historyCacheMissLoadError", i2);
                        }
                    };
                    e2.send();
                }
                function Wt(e2) {
                    zt();
                    e2 = e2 || location.pathname + location.search;
                    const t2 = Vt(e2);
                    if (t2) {
                        const n2 = P(t2.content);
                        const r2 = Ut();
                        const o2 = xn(r2);
                        kn(t2.title);
                        qe(n2);
                        Ve(r2, n2, o2);
                        Te();
                        Kt(o2.tasks);
                        E().setTimeout(function () {
                            window.scrollTo(0, t2.scroll);
                        }, 0);
                        Bt = e2;
                        he(ne().body, "htmx:historyRestore", { path: e2, item: t2 });
                    } else {
                        if (Q.config.refreshOnHistoryMiss) {
                            window.location.reload(true);
                        } else {
                            Gt(e2);
                        }
                    }
                }
                function Zt(e2) {
                    let t2 = we(e2, "hx-indicator");
                    if (t2 == null) {
                        t2 = [e2];
                    }
                    se(t2, function (e3) {
                        const t3 = ie(e3);
                        t3.requestCount = (t3.requestCount || 0) + 1;
                        e3.classList.add.call(e3.classList, Q.config.requestClass);
                    });
                    return t2;
                }
                function Yt(e2) {
                    let t2 = we(e2, "hx-disabled-elt");
                    if (t2 == null) {
                        t2 = [];
                    }
                    se(t2, function (e3) {
                        const t3 = ie(e3);
                        t3.requestCount = (t3.requestCount || 0) + 1;
                        e3.setAttribute("disabled", "");
                        e3.setAttribute("data-disabled-by-htmx", "");
                    });
                    return t2;
                }
                function Qt(e2, t2) {
                    se(e2.concat(t2), function (e3) {
                        const t3 = ie(e3);
                        t3.requestCount = (t3.requestCount || 1) - 1;
                    });
                    se(e2, function (e3) {
                        const t3 = ie(e3);
                        if (t3.requestCount === 0) {
                            e3.classList.remove.call(e3.classList, Q.config.requestClass);
                        }
                    });
                    se(t2, function (e3) {
                        const t3 = ie(e3);
                        if (t3.requestCount === 0) {
                            e3.removeAttribute("disabled");
                            e3.removeAttribute("data-disabled-by-htmx");
                        }
                    });
                }
                function en(t2, n2) {
                    for (let e2 = 0; e2 < t2.length; e2++) {
                        const r2 = t2[e2];
                        if (r2.isSameNode(n2)) {
                            return true;
                        }
                    }
                    return false;
                }
                function tn(e2) {
                    const t2 = e2;
                    if (t2.name === "" || t2.name == null || t2.disabled || g(t2, "fieldset[disabled]")) {
                        return false;
                    }
                    if (
                        t2.type === "button" ||
                        t2.type === "submit" ||
                        t2.tagName === "image" ||
                        t2.tagName === "reset" ||
                        t2.tagName === "file"
                    ) {
                        return false;
                    }
                    if (t2.type === "checkbox" || t2.type === "radio") {
                        return t2.checked;
                    }
                    return true;
                }
                function nn(t2, e2, n2) {
                    if (t2 != null && e2 != null) {
                        if (Array.isArray(e2)) {
                            e2.forEach(function (e3) {
                                n2.append(t2, e3);
                            });
                        } else {
                            n2.append(t2, e2);
                        }
                    }
                }
                function rn(t2, n2, r2) {
                    if (t2 != null && n2 != null) {
                        let e2 = r2.getAll(t2);
                        if (Array.isArray(n2)) {
                            e2 = e2.filter((e3) => n2.indexOf(e3) < 0);
                        } else {
                            e2 = e2.filter((e3) => e3 !== n2);
                        }
                        r2.delete(t2);
                        se(e2, (e3) => r2.append(t2, e3));
                    }
                }
                function on(t2, n2, r2, o2, i2) {
                    if (o2 == null || en(t2, o2)) {
                        return;
                    } else {
                        t2.push(o2);
                    }
                    if (tn(o2)) {
                        const s2 = ee(o2, "name");
                        let e2 = o2.value;
                        if (o2 instanceof HTMLSelectElement && o2.multiple) {
                            e2 = M(o2.querySelectorAll("option:checked")).map(function (e3) {
                                return e3.value;
                            });
                        }
                        if (o2 instanceof HTMLInputElement && o2.files) {
                            e2 = M(o2.files);
                        }
                        nn(s2, e2, n2);
                        if (i2) {
                            sn(o2, r2);
                        }
                    }
                    if (o2 instanceof HTMLFormElement) {
                        se(o2.elements, function (e2) {
                            if (t2.indexOf(e2) >= 0) {
                                rn(e2.name, e2.value, n2);
                            } else {
                                t2.push(e2);
                            }
                            if (i2) {
                                sn(e2, r2);
                            }
                        });
                        new FormData(o2).forEach(function (e2, t3) {
                            if (e2 instanceof File && e2.name === "") {
                                return;
                            }
                            nn(t3, e2, n2);
                        });
                    }
                }
                function sn(e2, t2) {
                    const n2 = e2;
                    if (n2.willValidate) {
                        he(n2, "htmx:validation:validate");
                        if (!n2.checkValidity()) {
                            t2.push({ elt: n2, message: n2.validationMessage, validity: n2.validity });
                            he(n2, "htmx:validation:failed", { message: n2.validationMessage, validity: n2.validity });
                        }
                    }
                }
                function ln(n2, e2) {
                    for (const t2 of e2.keys()) {
                        n2.delete(t2);
                    }
                    e2.forEach(function (e3, t2) {
                        n2.append(t2, e3);
                    });
                    return n2;
                }
                function cn(e2, t2) {
                    const n2 = [];
                    const r2 = new FormData();
                    const o2 = new FormData();
                    const i2 = [];
                    const s2 = ie(e2);
                    if (s2.lastButtonClicked && !le(s2.lastButtonClicked)) {
                        s2.lastButtonClicked = null;
                    }
                    let l2 =
                        (e2 instanceof HTMLFormElement && e2.noValidate !== true) || te(e2, "hx-validate") === "true";
                    if (s2.lastButtonClicked) {
                        l2 = l2 && s2.lastButtonClicked.formNoValidate !== true;
                    }
                    if (t2 !== "get") {
                        on(n2, o2, i2, g(e2, "form"), l2);
                    }
                    on(n2, r2, i2, e2, l2);
                    if (
                        s2.lastButtonClicked ||
                        e2.tagName === "BUTTON" ||
                        (e2.tagName === "INPUT" && ee(e2, "type") === "submit")
                    ) {
                        const u2 = s2.lastButtonClicked || e2;
                        const a2 = ee(u2, "name");
                        nn(a2, u2.value, o2);
                    }
                    const c2 = we(e2, "hx-include");
                    se(c2, function (e3) {
                        on(n2, r2, i2, ue(e3), l2);
                        if (!h(e3, "form")) {
                            se(f(e3).querySelectorAll(ot), function (e4) {
                                on(n2, r2, i2, e4, l2);
                            });
                        }
                    });
                    ln(r2, o2);
                    return { errors: i2, formData: r2, values: An(r2) };
                }
                function un(e2, t2, n2) {
                    if (e2 !== "") {
                        e2 += "&";
                    }
                    if (String(n2) === "[object Object]") {
                        n2 = JSON.stringify(n2);
                    }
                    const r2 = encodeURIComponent(n2);
                    e2 += encodeURIComponent(t2) + "=" + r2;
                    return e2;
                }
                function an(e2) {
                    e2 = qn(e2);
                    let n2 = "";
                    e2.forEach(function (e3, t2) {
                        n2 = un(n2, t2, e3);
                    });
                    return n2;
                }
                function fn(e2, t2, n2) {
                    const r2 = {
                        "HX-Request": "true",
                        "HX-Trigger": ee(e2, "id"),
                        "HX-Trigger-Name": ee(e2, "name"),
                        "HX-Target": te(t2, "id"),
                        "HX-Current-URL": ne().location.href,
                    };
                    bn(e2, "hx-headers", false, r2);
                    if (n2 !== void 0) {
                        r2["HX-Prompt"] = n2;
                    }
                    if (ie(e2).boosted) {
                        r2["HX-Boosted"] = "true";
                    }
                    return r2;
                }
                function hn(n2, e2) {
                    const t2 = re(e2, "hx-params");
                    if (t2) {
                        if (t2 === "none") {
                            return new FormData();
                        } else if (t2 === "*") {
                            return n2;
                        } else if (t2.indexOf("not ") === 0) {
                            se(t2.slice(4).split(","), function (e3) {
                                e3 = e3.trim();
                                n2.delete(e3);
                            });
                            return n2;
                        } else {
                            const r2 = new FormData();
                            se(t2.split(","), function (t3) {
                                t3 = t3.trim();
                                if (n2.has(t3)) {
                                    n2.getAll(t3).forEach(function (e3) {
                                        r2.append(t3, e3);
                                    });
                                }
                            });
                            return r2;
                        }
                    } else {
                        return n2;
                    }
                }
                function dn(e2) {
                    return !!ee(e2, "href") && ee(e2, "href").indexOf("#") >= 0;
                }
                function gn(e2, t2) {
                    const n2 = t2 || re(e2, "hx-swap");
                    const r2 = {
                        swapStyle: ie(e2).boosted ? "innerHTML" : Q.config.defaultSwapStyle,
                        swapDelay: Q.config.defaultSwapDelay,
                        settleDelay: Q.config.defaultSettleDelay,
                    };
                    if (Q.config.scrollIntoViewOnBoost && ie(e2).boosted && !dn(e2)) {
                        r2.show = "top";
                    }
                    if (n2) {
                        const s2 = F(n2);
                        if (s2.length > 0) {
                            for (let e3 = 0; e3 < s2.length; e3++) {
                                const l2 = s2[e3];
                                if (l2.indexOf("swap:") === 0) {
                                    r2.swapDelay = d(l2.slice(5));
                                } else if (l2.indexOf("settle:") === 0) {
                                    r2.settleDelay = d(l2.slice(7));
                                } else if (l2.indexOf("transition:") === 0) {
                                    r2.transition = l2.slice(11) === "true";
                                } else if (l2.indexOf("ignoreTitle:") === 0) {
                                    r2.ignoreTitle = l2.slice(12) === "true";
                                } else if (l2.indexOf("scroll:") === 0) {
                                    const c2 = l2.slice(7);
                                    var o2 = c2.split(":");
                                    const u2 = o2.pop();
                                    var i2 = o2.length > 0 ? o2.join(":") : null;
                                    r2.scroll = u2;
                                    r2.scrollTarget = i2;
                                } else if (l2.indexOf("show:") === 0) {
                                    const a2 = l2.slice(5);
                                    var o2 = a2.split(":");
                                    const f2 = o2.pop();
                                    var i2 = o2.length > 0 ? o2.join(":") : null;
                                    r2.show = f2;
                                    r2.showTarget = i2;
                                } else if (l2.indexOf("focus-scroll:") === 0) {
                                    const h2 = l2.slice("focus-scroll:".length);
                                    r2.focusScroll = h2 == "true";
                                } else if (e3 == 0) {
                                    r2.swapStyle = l2;
                                } else {
                                    O("Unknown modifier in hx-swap: " + l2);
                                }
                            }
                        }
                    }
                    return r2;
                }
                function pn(e2) {
                    return (
                        re(e2, "hx-encoding") === "multipart/form-data" ||
                        (h(e2, "form") && ee(e2, "enctype") === "multipart/form-data")
                    );
                }
                function mn(t2, n2, r2) {
                    let o2 = null;
                    Ft(n2, function (e2) {
                        if (o2 == null) {
                            o2 = e2.encodeParameters(t2, r2, n2);
                        }
                    });
                    if (o2 != null) {
                        return o2;
                    } else {
                        if (pn(n2)) {
                            return ln(new FormData(), qn(r2));
                        } else {
                            return an(r2);
                        }
                    }
                }
                function xn(e2) {
                    return { tasks: [], elts: [e2] };
                }
                function yn(e2, t2) {
                    const n2 = e2[0];
                    const r2 = e2[e2.length - 1];
                    if (t2.scroll) {
                        var o2 = null;
                        if (t2.scrollTarget) {
                            o2 = ue(ae(n2, t2.scrollTarget));
                        }
                        if (t2.scroll === "top" && (n2 || o2)) {
                            o2 = o2 || n2;
                            o2.scrollTop = 0;
                        }
                        if (t2.scroll === "bottom" && (r2 || o2)) {
                            o2 = o2 || r2;
                            o2.scrollTop = o2.scrollHeight;
                        }
                    }
                    if (t2.show) {
                        var o2 = null;
                        if (t2.showTarget) {
                            let e3 = t2.showTarget;
                            if (t2.showTarget === "window") {
                                e3 = "body";
                            }
                            o2 = ue(ae(n2, e3));
                        }
                        if (t2.show === "top" && (n2 || o2)) {
                            o2 = o2 || n2;
                            o2.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior });
                        }
                        if (t2.show === "bottom" && (r2 || o2)) {
                            o2 = o2 || r2;
                            o2.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior });
                        }
                    }
                }
                function bn(r2, e2, o2, i2) {
                    if (i2 == null) {
                        i2 = {};
                    }
                    if (r2 == null) {
                        return i2;
                    }
                    const s2 = te(r2, e2);
                    if (s2) {
                        let e3 = s2.trim();
                        let t2 = o2;
                        if (e3 === "unset") {
                            return null;
                        }
                        if (e3.indexOf("javascript:") === 0) {
                            e3 = e3.slice(11);
                            t2 = true;
                        } else if (e3.indexOf("js:") === 0) {
                            e3 = e3.slice(3);
                            t2 = true;
                        }
                        if (e3.indexOf("{") !== 0) {
                            e3 = "{" + e3 + "}";
                        }
                        let n2;
                        if (t2) {
                            n2 = vn(
                                r2,
                                function () {
                                    return Function("return (" + e3 + ")")();
                                },
                                {}
                            );
                        } else {
                            n2 = S(e3);
                        }
                        for (const l2 in n2) {
                            if (n2.hasOwnProperty(l2)) {
                                if (i2[l2] == null) {
                                    i2[l2] = n2[l2];
                                }
                            }
                        }
                    }
                    return bn(ue(c(r2)), e2, o2, i2);
                }
                function vn(e2, t2, n2) {
                    if (Q.config.allowEval) {
                        return t2();
                    } else {
                        fe(e2, "htmx:evalDisallowedError");
                        return n2;
                    }
                }
                function wn(e2, t2) {
                    return bn(e2, "hx-vars", true, t2);
                }
                function Sn(e2, t2) {
                    return bn(e2, "hx-vals", false, t2);
                }
                function En(e2) {
                    return ce(wn(e2), Sn(e2));
                }
                function Cn(t2, n2, r2) {
                    if (r2 !== null) {
                        try {
                            t2.setRequestHeader(n2, r2);
                        } catch (e2) {
                            t2.setRequestHeader(n2, encodeURIComponent(r2));
                            t2.setRequestHeader(n2 + "-URI-AutoEncoded", "true");
                        }
                    }
                }
                function On(t2) {
                    if (t2.responseURL && typeof URL !== "undefined") {
                        try {
                            const e2 = new URL(t2.responseURL);
                            return e2.pathname + e2.search;
                        } catch (e2) {
                            fe(ne().body, "htmx:badResponseUrl", { url: t2.responseURL });
                        }
                    }
                }
                function R(e2, t2) {
                    return t2.test(e2.getAllResponseHeaders());
                }
                function Rn(t2, n2, r2) {
                    t2 = t2.toLowerCase();
                    if (r2) {
                        if (r2 instanceof Element || typeof r2 === "string") {
                            return de(t2, n2, null, null, { targetOverride: y(r2) || ve, returnPromise: true });
                        } else {
                            let e2 = y(r2.target);
                            if ((r2.target && !e2) || (r2.source && !e2 && !y(r2.source))) {
                                e2 = ve;
                            }
                            return de(t2, n2, y(r2.source), r2.event, {
                                handler: r2.handler,
                                headers: r2.headers,
                                values: r2.values,
                                targetOverride: e2,
                                swapOverride: r2.swap,
                                select: r2.select,
                                returnPromise: true,
                            });
                        }
                    } else {
                        return de(t2, n2, null, null, { returnPromise: true });
                    }
                }
                function Hn(e2) {
                    const t2 = [];
                    while (e2) {
                        t2.push(e2);
                        e2 = e2.parentElement;
                    }
                    return t2;
                }
                function Tn(e2, t2, n2) {
                    let r2;
                    let o2;
                    if (typeof URL === "function") {
                        o2 = new URL(t2, document.location.href);
                        const i2 = document.location.origin;
                        r2 = i2 === o2.origin;
                    } else {
                        o2 = t2;
                        r2 = l(t2, document.location.origin);
                    }
                    if (Q.config.selfRequestsOnly) {
                        if (!r2) {
                            return false;
                        }
                    }
                    return he(e2, "htmx:validateUrl", ce({ url: o2, sameHost: r2 }, n2));
                }
                function qn(e2) {
                    if (e2 instanceof FormData) return e2;
                    const t2 = new FormData();
                    for (const n2 in e2) {
                        if (e2.hasOwnProperty(n2)) {
                            if (e2[n2] && typeof e2[n2].forEach === "function") {
                                e2[n2].forEach(function (e3) {
                                    t2.append(n2, e3);
                                });
                            } else if (typeof e2[n2] === "object" && !(e2[n2] instanceof Blob)) {
                                t2.append(n2, JSON.stringify(e2[n2]));
                            } else {
                                t2.append(n2, e2[n2]);
                            }
                        }
                    }
                    return t2;
                }
                function Ln(r2, o2, e2) {
                    return new Proxy(e2, {
                        get: function (t2, e3) {
                            if (typeof e3 === "number") return t2[e3];
                            if (e3 === "length") return t2.length;
                            if (e3 === "push") {
                                return function (e4) {
                                    t2.push(e4);
                                    r2.append(o2, e4);
                                };
                            }
                            if (typeof t2[e3] === "function") {
                                return function () {
                                    t2[e3].apply(t2, arguments);
                                    r2.delete(o2);
                                    t2.forEach(function (e4) {
                                        r2.append(o2, e4);
                                    });
                                };
                            }
                            if (t2[e3] && t2[e3].length === 1) {
                                return t2[e3][0];
                            } else {
                                return t2[e3];
                            }
                        },
                        set: function (e3, t2, n2) {
                            e3[t2] = n2;
                            r2.delete(o2);
                            e3.forEach(function (e4) {
                                r2.append(o2, e4);
                            });
                            return true;
                        },
                    });
                }
                function An(o2) {
                    return new Proxy(o2, {
                        get: function (e2, t2) {
                            if (typeof t2 === "symbol") {
                                const r2 = Reflect.get(e2, t2);
                                if (typeof r2 === "function") {
                                    return function () {
                                        return r2.apply(o2, arguments);
                                    };
                                } else {
                                    return r2;
                                }
                            }
                            if (t2 === "toJSON") {
                                return () => Object.fromEntries(o2);
                            }
                            if (t2 in e2) {
                                if (typeof e2[t2] === "function") {
                                    return function () {
                                        return o2[t2].apply(o2, arguments);
                                    };
                                } else {
                                    return e2[t2];
                                }
                            }
                            const n2 = o2.getAll(t2);
                            if (n2.length === 0) {
                                return void 0;
                            } else if (n2.length === 1) {
                                return n2[0];
                            } else {
                                return Ln(e2, t2, n2);
                            }
                        },
                        set: function (t2, n2, e2) {
                            if (typeof n2 !== "string") {
                                return false;
                            }
                            t2.delete(n2);
                            if (e2 && typeof e2.forEach === "function") {
                                e2.forEach(function (e3) {
                                    t2.append(n2, e3);
                                });
                            } else if (typeof e2 === "object" && !(e2 instanceof Blob)) {
                                t2.append(n2, JSON.stringify(e2));
                            } else {
                                t2.append(n2, e2);
                            }
                            return true;
                        },
                        deleteProperty: function (e2, t2) {
                            if (typeof t2 === "string") {
                                e2.delete(t2);
                            }
                            return true;
                        },
                        ownKeys: function (e2) {
                            return Reflect.ownKeys(Object.fromEntries(e2));
                        },
                        getOwnPropertyDescriptor: function (e2, t2) {
                            return Reflect.getOwnPropertyDescriptor(Object.fromEntries(e2), t2);
                        },
                    });
                }
                function de(t2, n2, r2, o2, i2, D2) {
                    let s2 = null;
                    let l2 = null;
                    i2 = i2 != null ? i2 : {};
                    if (i2.returnPromise && typeof Promise !== "undefined") {
                        var e2 = new Promise(function (e3, t3) {
                            s2 = e3;
                            l2 = t3;
                        });
                    }
                    if (r2 == null) {
                        r2 = ne().body;
                    }
                    const M2 = i2.handler || Dn;
                    const X2 = i2.select || null;
                    if (!le(r2)) {
                        oe(s2);
                        return e2;
                    }
                    const c2 = i2.targetOverride || ue(Ee(r2));
                    if (c2 == null || c2 == ve) {
                        fe(r2, "htmx:targetError", { target: te(r2, "hx-target") });
                        oe(l2);
                        return e2;
                    }
                    let u2 = ie(r2);
                    const a2 = u2.lastButtonClicked;
                    if (a2) {
                        const L2 = ee(a2, "formaction");
                        if (L2 != null) {
                            n2 = L2;
                        }
                        const A2 = ee(a2, "formmethod");
                        if (A2 != null) {
                            if (A2.toLowerCase() !== "dialog") {
                                t2 = A2;
                            }
                        }
                    }
                    const f2 = re(r2, "hx-confirm");
                    if (D2 === void 0) {
                        const K2 = function (e3) {
                            return de(t2, n2, r2, o2, i2, !!e3);
                        };
                        const G2 = {
                            target: c2,
                            elt: r2,
                            path: n2,
                            verb: t2,
                            triggeringEvent: o2,
                            etc: i2,
                            issueRequest: K2,
                            question: f2,
                        };
                        if (he(r2, "htmx:confirm", G2) === false) {
                            oe(s2);
                            return e2;
                        }
                    }
                    let h2 = r2;
                    let d2 = re(r2, "hx-sync");
                    let g2 = null;
                    let F2 = false;
                    if (d2) {
                        const N2 = d2.split(":");
                        const I2 = N2[0].trim();
                        if (I2 === "this") {
                            h2 = Se(r2, "hx-sync");
                        } else {
                            h2 = ue(ae(r2, I2));
                        }
                        d2 = (N2[1] || "drop").trim();
                        u2 = ie(h2);
                        if (d2 === "drop" && u2.xhr && u2.abortable !== true) {
                            oe(s2);
                            return e2;
                        } else if (d2 === "abort") {
                            if (u2.xhr) {
                                oe(s2);
                                return e2;
                            } else {
                                F2 = true;
                            }
                        } else if (d2 === "replace") {
                            he(h2, "htmx:abort");
                        } else if (d2.indexOf("queue") === 0) {
                            const W2 = d2.split(" ");
                            g2 = (W2[1] || "last").trim();
                        }
                    }
                    if (u2.xhr) {
                        if (u2.abortable) {
                            he(h2, "htmx:abort");
                        } else {
                            if (g2 == null) {
                                if (o2) {
                                    const P2 = ie(o2);
                                    if (P2 && P2.triggerSpec && P2.triggerSpec.queue) {
                                        g2 = P2.triggerSpec.queue;
                                    }
                                }
                                if (g2 == null) {
                                    g2 = "last";
                                }
                            }
                            if (u2.queuedRequests == null) {
                                u2.queuedRequests = [];
                            }
                            if (g2 === "first" && u2.queuedRequests.length === 0) {
                                u2.queuedRequests.push(function () {
                                    de(t2, n2, r2, o2, i2);
                                });
                            } else if (g2 === "all") {
                                u2.queuedRequests.push(function () {
                                    de(t2, n2, r2, o2, i2);
                                });
                            } else if (g2 === "last") {
                                u2.queuedRequests = [];
                                u2.queuedRequests.push(function () {
                                    de(t2, n2, r2, o2, i2);
                                });
                            }
                            oe(s2);
                            return e2;
                        }
                    }
                    const p2 = new XMLHttpRequest();
                    u2.xhr = p2;
                    u2.abortable = F2;
                    const m2 = function () {
                        u2.xhr = null;
                        u2.abortable = false;
                        if (u2.queuedRequests != null && u2.queuedRequests.length > 0) {
                            const e3 = u2.queuedRequests.shift();
                            e3();
                        }
                    };
                    const B2 = re(r2, "hx-prompt");
                    if (B2) {
                        var x2 = prompt(B2);
                        if (x2 === null || !he(r2, "htmx:prompt", { prompt: x2, target: c2 })) {
                            oe(s2);
                            m2();
                            return e2;
                        }
                    }
                    if (f2 && !D2) {
                        if (!confirm(f2)) {
                            oe(s2);
                            m2();
                            return e2;
                        }
                    }
                    let y2 = fn(r2, c2, x2);
                    if (t2 !== "get" && !pn(r2)) {
                        y2["Content-Type"] = "application/x-www-form-urlencoded";
                    }
                    if (i2.headers) {
                        y2 = ce(y2, i2.headers);
                    }
                    const U2 = cn(r2, t2);
                    let b2 = U2.errors;
                    const j2 = U2.formData;
                    if (i2.values) {
                        ln(j2, qn(i2.values));
                    }
                    const V2 = qn(En(r2));
                    const v2 = ln(j2, V2);
                    let w2 = hn(v2, r2);
                    if (Q.config.getCacheBusterParam && t2 === "get") {
                        w2.set("org.htmx.cache-buster", ee(c2, "id") || "true");
                    }
                    if (n2 == null || n2 === "") {
                        n2 = ne().location.href;
                    }
                    const S2 = bn(r2, "hx-request");
                    const _2 = ie(r2).boosted;
                    let E2 = Q.config.methodsThatUseUrlParams.indexOf(t2) >= 0;
                    const C2 = {
                        boosted: _2,
                        useUrlParams: E2,
                        formData: w2,
                        parameters: An(w2),
                        unfilteredFormData: v2,
                        unfilteredParameters: An(v2),
                        headers: y2,
                        target: c2,
                        verb: t2,
                        errors: b2,
                        withCredentials: i2.credentials || S2.credentials || Q.config.withCredentials,
                        timeout: i2.timeout || S2.timeout || Q.config.timeout,
                        path: n2,
                        triggeringEvent: o2,
                    };
                    if (!he(r2, "htmx:configRequest", C2)) {
                        oe(s2);
                        m2();
                        return e2;
                    }
                    n2 = C2.path;
                    t2 = C2.verb;
                    y2 = C2.headers;
                    w2 = qn(C2.parameters);
                    b2 = C2.errors;
                    E2 = C2.useUrlParams;
                    if (b2 && b2.length > 0) {
                        he(r2, "htmx:validation:halted", C2);
                        oe(s2);
                        m2();
                        return e2;
                    }
                    const z2 = n2.split("#");
                    const $2 = z2[0];
                    const O2 = z2[1];
                    let R2 = n2;
                    if (E2) {
                        R2 = $2;
                        const Z2 = !w2.keys().next().done;
                        if (Z2) {
                            if (R2.indexOf("?") < 0) {
                                R2 += "?";
                            } else {
                                R2 += "&";
                            }
                            R2 += an(w2);
                            if (O2) {
                                R2 += "#" + O2;
                            }
                        }
                    }
                    if (!Tn(r2, R2, C2)) {
                        fe(r2, "htmx:invalidPath", C2);
                        oe(l2);
                        return e2;
                    }
                    p2.open(t2.toUpperCase(), R2, true);
                    p2.overrideMimeType("text/html");
                    p2.withCredentials = C2.withCredentials;
                    p2.timeout = C2.timeout;
                    if (S2.noHeaders) {
                    } else {
                        for (const k2 in y2) {
                            if (y2.hasOwnProperty(k2)) {
                                const Y2 = y2[k2];
                                Cn(p2, k2, Y2);
                            }
                        }
                    }
                    const H2 = {
                        xhr: p2,
                        target: c2,
                        requestConfig: C2,
                        etc: i2,
                        boosted: _2,
                        select: X2,
                        pathInfo: { requestPath: n2, finalRequestPath: R2, responsePath: null, anchor: O2 },
                    };
                    p2.onload = function () {
                        try {
                            const t3 = Hn(r2);
                            H2.pathInfo.responsePath = On(p2);
                            M2(r2, H2);
                            if (H2.keepIndicators !== true) {
                                Qt(T2, q2);
                            }
                            he(r2, "htmx:afterRequest", H2);
                            he(r2, "htmx:afterOnLoad", H2);
                            if (!le(r2)) {
                                let e3 = null;
                                while (t3.length > 0 && e3 == null) {
                                    const n3 = t3.shift();
                                    if (le(n3)) {
                                        e3 = n3;
                                    }
                                }
                                if (e3) {
                                    he(e3, "htmx:afterRequest", H2);
                                    he(e3, "htmx:afterOnLoad", H2);
                                }
                            }
                            oe(s2);
                            m2();
                        } catch (e3) {
                            fe(r2, "htmx:onLoadError", ce({ error: e3 }, H2));
                            throw e3;
                        }
                    };
                    p2.onerror = function () {
                        Qt(T2, q2);
                        fe(r2, "htmx:afterRequest", H2);
                        fe(r2, "htmx:sendError", H2);
                        oe(l2);
                        m2();
                    };
                    p2.onabort = function () {
                        Qt(T2, q2);
                        fe(r2, "htmx:afterRequest", H2);
                        fe(r2, "htmx:sendAbort", H2);
                        oe(l2);
                        m2();
                    };
                    p2.ontimeout = function () {
                        Qt(T2, q2);
                        fe(r2, "htmx:afterRequest", H2);
                        fe(r2, "htmx:timeout", H2);
                        oe(l2);
                        m2();
                    };
                    if (!he(r2, "htmx:beforeRequest", H2)) {
                        oe(s2);
                        m2();
                        return e2;
                    }
                    var T2 = Zt(r2);
                    var q2 = Yt(r2);
                    se(["loadstart", "loadend", "progress", "abort"], function (t3) {
                        se([p2, p2.upload], function (e3) {
                            e3.addEventListener(t3, function (e4) {
                                he(r2, "htmx:xhr:" + t3, {
                                    lengthComputable: e4.lengthComputable,
                                    loaded: e4.loaded,
                                    total: e4.total,
                                });
                            });
                        });
                    });
                    he(r2, "htmx:beforeSend", H2);
                    const J2 = E2 ? null : mn(p2, r2, w2);
                    p2.send(J2);
                    return e2;
                }
                function Nn(e2, t2) {
                    const n2 = t2.xhr;
                    let r2 = null;
                    let o2 = null;
                    if (R(n2, /HX-Push:/i)) {
                        r2 = n2.getResponseHeader("HX-Push");
                        o2 = "push";
                    } else if (R(n2, /HX-Push-Url:/i)) {
                        r2 = n2.getResponseHeader("HX-Push-Url");
                        o2 = "push";
                    } else if (R(n2, /HX-Replace-Url:/i)) {
                        r2 = n2.getResponseHeader("HX-Replace-Url");
                        o2 = "replace";
                    }
                    if (r2) {
                        if (r2 === "false") {
                            return {};
                        } else {
                            return { type: o2, path: r2 };
                        }
                    }
                    const i2 = t2.pathInfo.finalRequestPath;
                    const s2 = t2.pathInfo.responsePath;
                    const l2 = re(e2, "hx-push-url");
                    const c2 = re(e2, "hx-replace-url");
                    const u2 = ie(e2).boosted;
                    let a2 = null;
                    let f2 = null;
                    if (l2) {
                        a2 = "push";
                        f2 = l2;
                    } else if (c2) {
                        a2 = "replace";
                        f2 = c2;
                    } else if (u2) {
                        a2 = "push";
                        f2 = s2 || i2;
                    }
                    if (f2) {
                        if (f2 === "false") {
                            return {};
                        }
                        if (f2 === "true") {
                            f2 = s2 || i2;
                        }
                        if (t2.pathInfo.anchor && f2.indexOf("#") === -1) {
                            f2 = f2 + "#" + t2.pathInfo.anchor;
                        }
                        return { type: a2, path: f2 };
                    } else {
                        return {};
                    }
                }
                function In(e2, t2) {
                    var n2 = new RegExp(e2.code);
                    return n2.test(t2.toString(10));
                }
                function Pn(e2) {
                    for (var t2 = 0; t2 < Q.config.responseHandling.length; t2++) {
                        var n2 = Q.config.responseHandling[t2];
                        if (In(n2, e2.status)) {
                            return n2;
                        }
                    }
                    return { swap: false };
                }
                function kn(e2) {
                    if (e2) {
                        const t2 = u("title");
                        if (t2) {
                            t2.innerHTML = e2;
                        } else {
                            window.document.title = e2;
                        }
                    }
                }
                function Dn(o2, i2) {
                    const s2 = i2.xhr;
                    let l2 = i2.target;
                    const e2 = i2.etc;
                    const c2 = i2.select;
                    if (!he(o2, "htmx:beforeOnLoad", i2)) return;
                    if (R(s2, /HX-Trigger:/i)) {
                        Je(s2, "HX-Trigger", o2);
                    }
                    if (R(s2, /HX-Location:/i)) {
                        zt();
                        let e3 = s2.getResponseHeader("HX-Location");
                        var t2;
                        if (e3.indexOf("{") === 0) {
                            t2 = S(e3);
                            e3 = t2.path;
                            delete t2.path;
                        }
                        Rn("get", e3, t2).then(function () {
                            $t(e3);
                        });
                        return;
                    }
                    const n2 = R(s2, /HX-Refresh:/i) && s2.getResponseHeader("HX-Refresh") === "true";
                    if (R(s2, /HX-Redirect:/i)) {
                        i2.keepIndicators = true;
                        location.href = s2.getResponseHeader("HX-Redirect");
                        n2 && location.reload();
                        return;
                    }
                    if (n2) {
                        i2.keepIndicators = true;
                        location.reload();
                        return;
                    }
                    if (R(s2, /HX-Retarget:/i)) {
                        if (s2.getResponseHeader("HX-Retarget") === "this") {
                            i2.target = o2;
                        } else {
                            i2.target = ue(ae(o2, s2.getResponseHeader("HX-Retarget")));
                        }
                    }
                    const u2 = Nn(o2, i2);
                    const r2 = Pn(s2);
                    const a2 = r2.swap;
                    let f2 = !!r2.error;
                    let h2 = Q.config.ignoreTitle || r2.ignoreTitle;
                    let d2 = r2.select;
                    if (r2.target) {
                        i2.target = ue(ae(o2, r2.target));
                    }
                    var g2 = e2.swapOverride;
                    if (g2 == null && r2.swapOverride) {
                        g2 = r2.swapOverride;
                    }
                    if (R(s2, /HX-Retarget:/i)) {
                        if (s2.getResponseHeader("HX-Retarget") === "this") {
                            i2.target = o2;
                        } else {
                            i2.target = ue(ae(o2, s2.getResponseHeader("HX-Retarget")));
                        }
                    }
                    if (R(s2, /HX-Reswap:/i)) {
                        g2 = s2.getResponseHeader("HX-Reswap");
                    }
                    var p2 = s2.response;
                    var m2 = ce(
                        {
                            shouldSwap: a2,
                            serverResponse: p2,
                            isError: f2,
                            ignoreTitle: h2,
                            selectOverride: d2,
                            swapOverride: g2,
                        },
                        i2
                    );
                    if (r2.event && !he(l2, r2.event, m2)) return;
                    if (!he(l2, "htmx:beforeSwap", m2)) return;
                    l2 = m2.target;
                    p2 = m2.serverResponse;
                    f2 = m2.isError;
                    h2 = m2.ignoreTitle;
                    d2 = m2.selectOverride;
                    g2 = m2.swapOverride;
                    i2.target = l2;
                    i2.failed = f2;
                    i2.successful = !f2;
                    if (m2.shouldSwap) {
                        if (s2.status === 286) {
                            lt(o2);
                        }
                        Ft(o2, function (e4) {
                            p2 = e4.transformResponse(p2, s2, o2);
                        });
                        if (u2.type) {
                            zt();
                        }
                        var x2 = gn(o2, g2);
                        if (!x2.hasOwnProperty("ignoreTitle")) {
                            x2.ignoreTitle = h2;
                        }
                        l2.classList.add(Q.config.swappingClass);
                        let n3 = null;
                        let r3 = null;
                        if (c2) {
                            d2 = c2;
                        }
                        if (R(s2, /HX-Reselect:/i)) {
                            d2 = s2.getResponseHeader("HX-Reselect");
                        }
                        const y2 = re(o2, "hx-select-oob");
                        const b2 = re(o2, "hx-select");
                        let e3 = function () {
                            try {
                                if (u2.type) {
                                    he(ne().body, "htmx:beforeHistoryUpdate", ce({ history: u2 }, i2));
                                    if (u2.type === "push") {
                                        $t(u2.path);
                                        he(ne().body, "htmx:pushedIntoHistory", { path: u2.path });
                                    } else {
                                        Jt(u2.path);
                                        he(ne().body, "htmx:replacedInHistory", { path: u2.path });
                                    }
                                }
                                $e(l2, p2, x2, {
                                    select: d2 || b2,
                                    selectOOB: y2,
                                    eventInfo: i2,
                                    anchor: i2.pathInfo.anchor,
                                    contextElement: o2,
                                    afterSwapCallback: function () {
                                        if (R(s2, /HX-Trigger-After-Swap:/i)) {
                                            let e4 = o2;
                                            if (!le(o2)) {
                                                e4 = ne().body;
                                            }
                                            Je(s2, "HX-Trigger-After-Swap", e4);
                                        }
                                    },
                                    afterSettleCallback: function () {
                                        if (R(s2, /HX-Trigger-After-Settle:/i)) {
                                            let e4 = o2;
                                            if (!le(o2)) {
                                                e4 = ne().body;
                                            }
                                            Je(s2, "HX-Trigger-After-Settle", e4);
                                        }
                                        oe(n3);
                                    },
                                });
                            } catch (e4) {
                                fe(o2, "htmx:swapError", i2);
                                oe(r3);
                                throw e4;
                            }
                        };
                        let t3 = Q.config.globalViewTransitions;
                        if (x2.hasOwnProperty("transition")) {
                            t3 = x2.transition;
                        }
                        if (
                            t3 &&
                            he(o2, "htmx:beforeTransition", i2) &&
                            typeof Promise !== "undefined" &&
                            document.startViewTransition
                        ) {
                            const v2 = new Promise(function (e4, t4) {
                                n3 = e4;
                                r3 = t4;
                            });
                            const w2 = e3;
                            e3 = function () {
                                document.startViewTransition(function () {
                                    w2();
                                    return v2;
                                });
                            };
                        }
                        if (x2.swapDelay > 0) {
                            E().setTimeout(e3, x2.swapDelay);
                        } else {
                            e3();
                        }
                    }
                    if (f2) {
                        fe(
                            o2,
                            "htmx:responseError",
                            ce(
                                {
                                    error:
                                        "Response Status Error Code " + s2.status + " from " + i2.pathInfo.requestPath,
                                },
                                i2
                            )
                        );
                    }
                }
                const Mn = {};
                function Xn() {
                    return {
                        init: function (e2) {
                            return null;
                        },
                        getSelectors: function () {
                            return null;
                        },
                        onEvent: function (e2, t2) {
                            return true;
                        },
                        transformResponse: function (e2, t2, n2) {
                            return e2;
                        },
                        isInlineSwap: function (e2) {
                            return false;
                        },
                        handleSwap: function (e2, t2, n2, r2) {
                            return false;
                        },
                        encodeParameters: function (e2, t2, n2) {
                            return null;
                        },
                    };
                }
                function Fn(e2, t2) {
                    if (t2.init) {
                        t2.init(n);
                    }
                    Mn[e2] = ce(Xn(), t2);
                }
                function Bn(e2) {
                    delete Mn[e2];
                }
                function Un(e2, n2, r2) {
                    if (n2 == void 0) {
                        n2 = [];
                    }
                    if (e2 == void 0) {
                        return n2;
                    }
                    if (r2 == void 0) {
                        r2 = [];
                    }
                    const t2 = te(e2, "hx-ext");
                    if (t2) {
                        se(t2.split(","), function (e3) {
                            e3 = e3.replace(/ /g, "");
                            if (e3.slice(0, 7) == "ignore:") {
                                r2.push(e3.slice(7));
                                return;
                            }
                            if (r2.indexOf(e3) < 0) {
                                const t3 = Mn[e3];
                                if (t3 && n2.indexOf(t3) < 0) {
                                    n2.push(t3);
                                }
                            }
                        });
                    }
                    return Un(ue(c(e2)), n2, r2);
                }
                var jn = false;
                ne().addEventListener("DOMContentLoaded", function () {
                    jn = true;
                });
                function Vn(e2) {
                    if (jn || ne().readyState === "complete") {
                        e2();
                    } else {
                        ne().addEventListener("DOMContentLoaded", e2);
                    }
                }
                function _n() {
                    if (Q.config.includeIndicatorStyles !== false) {
                        const e2 = Q.config.inlineStyleNonce ? ` nonce="${Q.config.inlineStyleNonce}"` : "";
                        ne().head.insertAdjacentHTML(
                            "beforeend",
                            "<style" +
                                e2 +
                                ">      ." +
                                Q.config.indicatorClass +
                                "{opacity:0}      ." +
                                Q.config.requestClass +
                                " ." +
                                Q.config.indicatorClass +
                                "{opacity:1; transition: opacity 200ms ease-in;}      ." +
                                Q.config.requestClass +
                                "." +
                                Q.config.indicatorClass +
                                "{opacity:1; transition: opacity 200ms ease-in;}      </style>"
                        );
                    }
                }
                function zn() {
                    const e2 = ne().querySelector('meta[name="htmx-config"]');
                    if (e2) {
                        return S(e2.content);
                    } else {
                        return null;
                    }
                }
                function $n() {
                    const e2 = zn();
                    if (e2) {
                        Q.config = ce(Q.config, e2);
                    }
                }
                Vn(function () {
                    $n();
                    _n();
                    let e2 = ne().body;
                    kt(e2);
                    const t2 = ne().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
                    e2.addEventListener("htmx:abort", function (e3) {
                        const t3 = e3.target;
                        const n3 = ie(t3);
                        if (n3 && n3.xhr) {
                            n3.xhr.abort();
                        }
                    });
                    const n2 = window.onpopstate ? window.onpopstate.bind(window) : null;
                    window.onpopstate = function (e3) {
                        if (e3.state && e3.state.htmx) {
                            Wt();
                            se(t2, function (e4) {
                                he(e4, "htmx:restored", { document: ne(), triggerEvent: he });
                            });
                        } else {
                            if (n2) {
                                n2(e3);
                            }
                        }
                    };
                    E().setTimeout(function () {
                        he(e2, "htmx:load", {});
                        e2 = null;
                    }, 0);
                });
                return Q;
            })();
        },
    });
    require_client();
})();
