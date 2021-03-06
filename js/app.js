"use strict";
var _createClass = (function () {
    function a(b, d) {
        for (var h, i = 0; i < d.length; i++) (h = d[i]), (h.enumerable = h.enumerable || !1), (h.configurable = !0), "value" in h && (h.writable = !0), Object.defineProperty(b, h.key, h);
    }
    return function (b, d, h) {
        return d && a(b.prototype, d), h && a(b, h), b;
    };
})();
function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}
var _ = (function () {
    function a(b) {
        return _classCallCheck(this, a), this instanceof a ? void (this.el = document.querySelector(b)) : new a(b);
    }
    return (
        _createClass(a, [
            {
                key: "fade",
                value: function (b, d) {
                    var h = "in" === b,
                        i = h ? 0 : 1,
                        l = 50,
                        m = l / d,
                        n = this;
                    h && ((n.el.style.display = "inline"), (n.el.style.opacity = i));
                    var o = window.setInterval(function () {
                        (i = h ? i + m : i - m), (n.el.style.opacity = i), 0 >= i && (n.el.style.display = "none"), (0 >= i || 1 <= i) && window.clearInterval(o);
                    }, l);
                },
            },
        ]),
        a
    );
})();
window.onload = function () {
    function a() {
        document.querySelectorAll("#main-menu").forEach(function (l) {
            return l.classList.add("main-menu-pgactive");
        }),
            document.querySelectorAll("#section-home").forEach(function (l) {
                return l.classList.add("section-vcardbody-pgactive");
            }),
            document.querySelectorAll(".profileActive").forEach(function (l) {
                return l.classList.remove("profileActive");
            }),
            document.querySelectorAll("#profile2").forEach(function (l) {
                return l.classList.add("profileActive");
            }),
            (h = 1);
    }
    function b() {
        document.querySelectorAll(".section-page-active").forEach(function (l) {
            return l.classList.remove("section-page-active");
        }),
            document.querySelectorAll("#main-menu").forEach(function (l) {
                return l.classList.remove("main-menu-pgactive");
            }),
            document.querySelectorAll("#section-home").forEach(function (l) {
                return l.classList.remove("section-vcardbody-pgactive");
            }),
            document.querySelectorAll(".profileActive").forEach(function (l) {
                return l.classList.remove("profileActive");
            }),
            document.querySelectorAll("#profile1").forEach(function (l) {
                return l.classList.add("profileActive");
            }),
            (h = 0);
    }
    var d = new _("#page-loader");
    setTimeout(function () {
        d.fade("out", 400);
    }, 300),
        document.querySelectorAll("#loader-name").forEach(function (l) {
            var m = l.classList;
            return m.add("loader-left");
        }),
        document.querySelectorAll("#loader-job").forEach(function (l) {
            var m = l.classList;
            return m.add("loader-right");
        }),
        document.querySelectorAll("#loader-animation").forEach(function (l) {
            var m = l.classList;
            return m.add("loader-hide");
        });
    var h = 0,
        i = "";
    document.querySelectorAll(".link-page").forEach(function (l) {
        return l.addEventListener("click", function (m) {
            var n = l.getAttribute("href");
            "https://github.com/alexcpr/" === n || "https://www.linkedin.com/in/alexandrecipor/" === n || "cv/cv_pro.pdf" === n || m.preventDefault(),
                document.querySelectorAll(".menuActive").forEach(function (o) {
                    return o.classList.remove("menuActive");
                }),
                l.classList.add("menuActive"),
                (i = n),
                document.querySelectorAll(".section-page-active").forEach(function (o) {
                    return o.classList.remove("section-page-active");
                }),
                document.querySelectorAll(i).forEach(function (o) {
                    return o.classList.add("section-page-active");
                }),
                a();
        });
    }),
        document.querySelectorAll(".link-home").forEach(function (l) {
            return l.addEventListener("click", function (m) {
                m.preventDefault(),
                    0 == h ||
                        (1 == h &&
                            (document.querySelectorAll(".menuActive").forEach(function (n) {
                                return n.classList.remove("menuActive");
                            }),
                            document.querySelectorAll(".link-home").forEach(function (n) {
                                return n.classList.add("menuActive");
                            }),
                            b()));
            });
        });
};