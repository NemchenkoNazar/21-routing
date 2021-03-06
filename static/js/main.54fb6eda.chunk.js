(this["webpackJsonprouting-between-hw"] = this["webpackJsonprouting-between-hw"] || []).push([[0], {
    32: function (e, t, a) {
    }, 33: function (e, t, a) {
    }, 34: function (e, t, a) {
    }, 35: function (e, t, a) {
    }, 36: function (e, t, a) {
        "use strict";
        a.r(t);
        var s = a(1), n = a.n(s), c = a(20), r = a.n(c), i = a(7), o = a(9), l = a(2), m = a(0), h = function (e) {
            var t = e.links;
            return Object(m.jsx)("nav", {
                className: "navigation",
                children: Object(m.jsx)("ul", {
                    className: "navigation_menu", children: t.map((function (e) {
                        return Object(m.jsx)("li", {
                            className: "navigation_item",
                            children: Object(m.jsx)(o.b, {to: e.to, children: e.label})
                        }, e.to)
                    }))
                })
            })
        }, d = (a(32), function (e) {
            var t = e.level, a = void 0 === t ? "h1" : t, s = e.children;
            return Object(m.jsx)(a, {children: s})
        });
        a(33);
        var u = function (e) {
            return Object(m.jsxs)("div", {
                className: "UserInfo",
                children: [Object(m.jsx)("img", {
                    className: "Avatar",
                    src: e.user.photo,
                    alt: e.user.name
                }), Object(m.jsx)("div", {
                    className: "UserInfo-name",
                    children: e.user.name
                }), Object(m.jsx)("div", {
                    className: "UserInfo-nickname",
                    children: e.user.nickname
                }), Object(m.jsx)("div", {className: "Comment-date", children: e.user.date})]
            })
        };

        function j(e) {
            return Object(m.jsx)("div", {
                className: "App-header",
                children: Object(m.jsxs)("div", {
                    className: "Comment",
                    children: [Object(m.jsx)(u, {user: e.author}), Object(m.jsxs)("div", {
                        children: [Object(m.jsx)("div", {
                            className: "Comment-text",
                            children: e.comment
                        }), Object(m.jsx)("img", {className: "Image", src: e.image, alt: e.image})]
                    })]
                })
            })
        }

        var f = [{
            author: {
                name: "Anakin skywalker",
                photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
                nickname: "@dart_vader",
                date: "26 fev."
            },
            comment: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
        }, {
            author: {
                name: "Hermione Granger",
                photo: "https://i.pinimg.com/originals/b0/49/db/b049dbae23f549bb8782e20d5ea76e92.jpg",
                nickname: "@hermione",
                date: "18 apr."
            },
            comment: "I mean, you could claim that anything\u2019s real if the only basis for believing in it is that nobody\u2019s proved it doesn\u2019t exist!",
            image: "https://image.winudf.com/v2/image1/Y29tLm1hZ2ljZmx1aWRzLmRlbW9fc2NyZWVuXzFfMTYwODIyODg5Nl8wMDY/screen-1.jpg?fakeurl=1&type=.jpg"
        }];
        var b = function () {
            return Object(m.jsx)(m.Fragment, {
                children: f.map((function (e) {
                    return Object(m.jsx)(j, {author: Object(i.a)({}, e.author), comment: e.comment, image: e.image})
                }))
            })
        };
        a(34), a(35);
        var p = a(11), x = a(12), g = a(14), O = a(13), v = function (e) {
            var t = e.firstName, a = e.lastName, s = e.phone, n = e.gender, c = "anon", r = n ? c = n : c;
            return Object(m.jsxs)("div", {
                className: "Person",
                children: [Object(m.jsx)("p", {className: r}), Object(m.jsxs)("p", {
                    className: "Name",
                    children: [t, " ", a]
                }), Object(m.jsx)("div", {className: "phone", children: s})]
            })
        }, w = function (e) {
            Object(g.a)(a, e);
            var t = Object(O.a)(a);

            function a() {
                var e;
                Object(p.a)(this, a);
                for (var s = arguments.length, n = new Array(s), c = 0; c < s; c++) n[c] = arguments[c];
                return (e = t.call.apply(t, [this].concat(n))).state = {searchText: ""}, e.changeSearchText = function (t) {
                    e.setState({searchText: t.target.value})
                }, e.sortContacts = function () {
                    "" !== e.state.searchText && (e.props.addSearchName(e.state.searchText), e.setState({searchText: ""}))
                }, e
            }

            return Object(x.a)(a, [{
                key: "render", value: function () {
                    return Object(m.jsxs)("div", {
                        className: "Search",
                        children: [Object(m.jsx)("input", {
                            type: "text",
                            placeholder: "Search contacts...",
                            value: this.state.searchText,
                            onChange: this.changeSearchText
                        }), Object(m.jsx)("button", {type: "submit", onClick: this.sortContacts})]
                    })
                }
            }]), a
        }(s.Component), N = function (e) {
            Object(g.a)(a, e);
            var t = Object(O.a)(a);

            function a() {
                var e;
                Object(p.a)(this, a);
                for (var s = arguments.length, n = new Array(s), c = 0; c < s; c++) n[c] = arguments[c];
                return (e = t.call.apply(t, [this].concat(n))).state = {
                    contacts: [{
                        firstName: "\u0411\u0430\u0440\u043d\u0435\u0439",
                        lastName: "\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",
                        phone: "+380955865425",
                        gender: "male"
                    }, {
                        firstName: "\u0420\u043e\u0431\u0456\u043d",
                        lastName: "\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",
                        phone: "+380938997577",
                        gender: "female"
                    }, {
                        firstName: "\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",
                        lastName: "\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",
                        phone: "+380777777777"
                    }, {
                        firstName: "\u041b\u0456\u043b\u0456\u044f",
                        lastName: "\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",
                        phone: "+380504691254",
                        gender: "female"
                    }, {
                        firstName: "\u041c\u0430\u0440\u0448\u0435\u043d",
                        lastName: "\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",
                        phone: "+380735565584",
                        gender: "male"
                    }, {
                        firstName: "\u0422\u0435\u043e\u0434\u043e\u0440",
                        lastName: "\u041c\u043e\u0442\u0441\u0431\u0435\u0441",
                        phone: "+380958965748",
                        gender: "male"
                    }], filteredContacts: [], search: [""]
                }, e.addSearchName = function (t) {
                    e.setState({search: t});
                    var a = e.state.contacts.filter((function (e) {
                        return e.lastName.toLowerCase().startsWith(t.toLowerCase()) || e.firstName.toLowerCase().startsWith(t.toLowerCase()) || e.phone.includes(t)
                    }));
                    e.setState({filteredContacts: a})
                }, e
            }

            return Object(x.a)(a, [{
                key: "render", value: function () {
                    var e = "" !== this.state.search[0] ? this.state.filteredContacts : this.state.contacts;
                    return console.log(this.state.search), Object(m.jsxs)("div", {
                        className: "Contacts",
                        children: [Object(m.jsx)(w, {addSearchName: this.addSearchName}), e.map((function (e) {
                            return Object(s.createElement)(v, Object(i.a)(Object(i.a)({}, e), {}, {key: e.index}))
                        }))]
                    })
                }
            }]), a
        }(s.Component);
        var y = function () {
            return Object(m.jsx)("div", {children: Object(m.jsx)(N, {})})
        };
        var k = [{
            src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg",
            alt: "A Toyota Previa covered in graffiti"
        }, {
            src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg",
            alt: "Sara on a red bike"
        }, {
            src: "https://images.unsplash.com/photo-1585245542456-a772781e40b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt: "XOXO venue in between talks"
        }, {
            src: "https://images.unsplash.com/photo-1579613174353-41dd4f8701ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
            alt: "Landscape"
        }, {
            src: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt: "Sara on a red bike"
        }, {
            src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg",
            alt: "XOXO venue in between talks"
        }, {
            src: "https://images.unsplash.com/photo-1618972078577-80ad6b66fd72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            alt: "Turtle"
        }, {
            src: "https://images.unsplash.com/photo-1576277747552-32882dcf0d9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt: "A Toyota Previa covered in graffiti"
        }, {
            src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            alt: "XOXO venue in between talks"
        }, {
            src: "https://images.unsplash.com/photo-1591625852203-5527f81387b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
            alt: "Trees lit by green light during dusk"
        }];
        var M = [{
            path: "/21-routing", component: function () {
                return Object(m.jsxs)(m.Fragment, {
                    children: [Object(m.jsx)(d, {
                        className: "home",
                        children: "Home"
                    }), Object(m.jsx)("img", {
                        className: "homeImage",
                        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
                        alt: "HomepageImg"
                    })]
                })
            }
        }, {
            path: "/photos", component: function () {
                return Object(m.jsxs)(m.Fragment, {
                    children: [Object(m.jsx)(d, {children: "Photos"}), Object(m.jsx)("ul", {
                        className: "photos",
                        children: k.map((function (e) {
                            return Object(m.jsx)("li", {
                                children: Object(m.jsx)("img", {
                                    src: e.src,
                                    alt: e.alt,
                                    loading: "lazy"
                                })
                            })
                        }))
                    })]
                })
            }
        }, {
            path: "/media", component: function () {
                return Object(m.jsxs)(m.Fragment, {children: [Object(m.jsx)(d, {children: "Media"}), Object(m.jsx)(b, {})]})
            }
        }, {
            path: "/contacts", component: function () {
                return Object(m.jsx)(m.Fragment, {children: Object(m.jsx)(y, {})})
            }
        }];

        function H() {
            return Object(m.jsxs)(m.Fragment, {
                children: [Object(m.jsx)(d, {
                    className: "home",
                    children: "Oops! 404"
                }), Object(m.jsx)("img", {
                    className: "restricted",
                    src: "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "NoPathFound"
                })]
            })
        }

        var D = [{to: "/21-routing", label: "Home"}, {to: "/photos", label: "Photos"}, {
            to: "/media",
            label: "Media"
        }, {to: "/contacts", label: "Contacts"}];

        function C() {
            return Object(m.jsx)(o.a, {
                children: Object(m.jsxs)("div", {
                    className: "App",
                    children: [Object(m.jsx)("header", {
                        className: "header",
                        children: Object(m.jsx)(h, {links: D})
                    }), Object(m.jsxs)(l.c, {
                        children: [M.map((function (e) {
                            return Object(m.jsx)(l.a, Object(i.a)({}, e), e.path)
                        })), Object(m.jsx)(l.a, {path: "*", children: Object(m.jsx)(H, {})})]
                    })]
                })
            })
        }

        var B = function (e) {
            e && e instanceof Function && a.e(3).then(a.bind(null, 37)).then((function (t) {
                var a = t.getCLS, s = t.getFID, n = t.getFCP, c = t.getLCP, r = t.getTTFB;
                a(e), s(e), n(e), c(e), r(e)
            }))
        };
        r.a.render(Object(m.jsx)(n.a.StrictMode, {children: Object(m.jsx)(o.a, {children: Object(m.jsx)(C, {})})}), document.getElementById("root")), B()
    }
}, [[36, 1, 2]]]);
//# sourceMappingURL=main.54fb6eda.chunk.js.map