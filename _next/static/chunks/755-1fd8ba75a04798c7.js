"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [755],
  {
    9755: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return b;
        },
      });
      var l = s(5893),
        n = s(7294),
        i = (s(4480), s(1070), s(2920)),
        c = (s(1399), s(3977)),
        t = s(8121),
        d = s(8887),
        o = (s(5297), s(6082), s(3756)),
        r = s(7918),
        m = s.n(r),
        x = s(5353),
        v = s(9332),
        p = s(7814),
        h = s(9417),
        u = s(9253);
      function j(e) {
        let { selectedIndex: a = 0, account: s, disconnect: i } = e;
        var c, t, d, o, r, m, x, j, b, N, g;
        const { push: k } = (0, v.useRouter)(),
          [f, w] = (0, n.useState)(s);
        return (
          (0, n.useEffect)(() => {
            w(null !== s ? s : ""), console.log("account", s);
          }, [s]),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("nav", {
              id: "sidebarMenu",
              className:
                "col-md-3 col-lg-2 d-md-block sidebar bg-dark collapse",
              style: { maxHeight: "100vh", overflowY: "auto" },
              children: (0, l.jsxs)("div", {
                className: "position-sticky pt-md-5 pt-0",
                children: [
                  (0, l.jsxs)("ul", {
                    className: "nav flex-column",
                    children: [
                      (0, l.jsx)("li", {
                        className: "nav-item d-md-none d-flex",
                        children: (0, l.jsx)("a", {
                          className: "nav-link px-3",
                          href: "#",
                          children: s
                            ? (0, l.jsxs)("button", {
                                className:
                                  "btn btn-cloudgpu-primary-outline rounded-pill me-4",
                                onClick: () => {
                                  i();
                                },
                                children: [
                                  " ",
                                  s
                                    .slice(0, 6)
                                    .concat("...".concat(s.slice(-4))),
                                ],
                              })
                            : (0, l.jsx)("button", {
                                className:
                                  "btn btn-cloudgpu-primary rounded-pill",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#connect-wallet-modal",
                                children: "Connect Wallet",
                              }),
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className: "nav-item",
                        children: (0, l.jsxs)("a", {
                          className:
                            a ==
                            (null === (c = u.c0) || void 0 === c
                              ? void 0
                              : c.home)
                              ? "nav-link active"
                              : "nav-link",
                          onClick: () => {
                            k("/");
                          },
                          style: { cursor: "pointer" },
                          children: [
                            (0, l.jsx)(p.G, {
                              icon: h.J9Y,
                              style: { width: "32px" },
                              className: " mx-3",
                            }),
                            "Home",
                          ],
                        }),
                      }),

                      (0, l.jsx)("li", {
                        className: "nav-item",
                        children: (0, l.jsxs)("a", {
                          className:
                            a ==
                            (null === (o = u.c0) || void 0 === o
                              ? void 0
                              : o.rdp)
                              ? "nav-link active"
                              : "nav-link",
                          onClick: () => {
                            k("/dapps/rdp");
                          },
                          style: { cursor: "pointer" },
                          children: [
                            (0, l.jsx)(p.G, {
                              icon: h.qQ1,
                              style: { width: "32px" },
                              className: " mx-3",
                            }),
                            "RDP",
                          ],
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className: "nav-item",
                        children: (0, l.jsxs)("a", {
                          className:
                            a ==
                            (null === (r = u.c0) || void 0 === r
                              ? void 0
                              : r.gpu)
                              ? "nav-link active"
                              : "nav-link",
                          onClick: () => {
                            k("/dapps/gpu");
                          },
                          style: { cursor: "pointer" },
                          children: [
                            (0, l.jsx)(p.G, {
                              icon: h.jOs,
                              style: { width: "32px" },
                              className: " mx-3",
                            }),
                            "GPU",
                          ],
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className: "nav-item",
                        children: (0, l.jsxs)("a", {
                          className:
                            a ==
                            (null === (m = u.c0) || void 0 === m
                              ? void 0
                              : m.staking)
                              ? "nav-link active"
                              : "nav-link",
                          onClick: () => {
                            k("/dapps/staking");
                          },
                          style: { cursor: "pointer" },
                          children: [
                            (0, l.jsx)(p.G, {
                              icon: h.PUc,
                              style: { width: "32px" },
                              className: " mx-3",
                            }),
                            "Staking",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("h6", {
                    className:
                      "sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",
                    children: [
                      (0, l.jsx)("span", { children: "Account" }),
                      (0, l.jsx)("a", {
                        className: "link-secondary",
                        href: "#",
                        "aria-label": "Add a new report",
                        children: (0, l.jsx)("span", {
                          "data-feather": "plus-circle",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("ul", {
                    className: "nav flex-column mb-2",
                    children: [
                      (0, l.jsx)("li", {
                        className:
                          a ==
                          (null === (x = u.c0) || void 0 === x
                            ? void 0
                            : x.profile)
                            ? "nav-item active"
                            : "nav-item",
                        onClick: () => {
                          k("/dapps/profile");
                        },
                        children: (0, l.jsxs)("a", {
                          className:
                            a == u.c0.profile ? "nav-link active" : "nav-link",
                          children: [
                            (0, l.jsx)("i", {
                              style: { width: "32px" },
                              className: "text-center fa fa-user mx-3",
                            }),
                            "Profile",
                          ],
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className:
                          a ==
                          (null === (j = u.c0) || void 0 === j
                            ? void 0
                            : j.docs)
                            ? "nav-item active"
                            : "nav-item",
                        onClick: () => {
                          window.open("https://maxims-organization-22.gitbook.io/spora-whitepaper");
                        },
                        children: (0, l.jsxs)("a", {
                          className: 7 == a ? "nav-link active" : "nav-link",
                          children: [
                            (0, l.jsx)("i", {
                              style: { width: "32px" },
                              className: "text-center fa fa-file-alt mx-3",
                            }),
                            "Docs",
                          ],
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className:
                          a ==
                          (null === (b = u.c0) || void 0 === b
                            ? void 0
                            : b.telegram)
                            ? "nav-item active"
                            : "nav-item",
                        onClick: () => window.open("https://t.me/"),
                        children: (0, l.jsxs)("a", {
                          className: 7 == a ? "nav-link active" : "nav-link",
                          children: [
                            (0, l.jsx)("i", {
                              style: { width: "32px" },
                              className: "text-center fab fa-telegram mx-3",
                            }),
                            "Telegram",
                          ],
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className:
                          a ==
                          (null === (N = u.c0) || void 0 === N
                            ? void 0
                            : N.twitter)
                            ? "nav-item active"
                            : "nav-item",
                        onClick: () => window.open("https://x.com/"),
                        children: (0, l.jsxs)("a", {
                          className: 7 == a ? "nav-link active" : "nav-link",
                          children: [
                            (0, l.jsx)("i", {
                              style: { width: "32px" },
                              className: "text-center fab fa-twitter mx-3",
                            }),
                            "Twitter",
                          ],
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className:
                          a ==
                          (null === (g = u.c0) || void 0 === g
                            ? void 0
                            : g.dextool)
                            ? "nav-item active"
                            : "nav-item",
                        onClick: () => {
                          window.open("https://www.dextools.io/");
                        },
                        children: (0, l.jsxs)("a", {
                          className: 7 == a ? "nav-link active" : "nav-link",
                          children: [
                            (0, l.jsx)("i", {
                              style: { width: "32px" },
                              className: "text-center fa fa-chart-bar mx-3",
                            }),
                            "Dextool",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function b(e) {
        let { children: a, selectedIndex: s } = e;
        const { push: r } = (0, v.useRouter)(),
          {
            connect: u,
            disconnect: b,
            isActive: N,
            account: g,
            walletModal: k,
            handleWalletModal: f,
            chainId: w,
            switchNetwork: y,
          } = (0, x.ZP)();
        return (
          (0, n.useEffect)(() => {
            if (window) {
              const e = (0, c.ZF)(t.M);
              (0, d.IH)(e);
            }
          }, []),
          (0, n.useEffect)(() => {}, [g]),
          (0, l.jsx)(o.Ht, {
            getLibrary: function (e) {
              return new (m())(e);
            },
            children: (0, l.jsxs)(x.og, {
              children: [
                (0, l.jsx)(i.Ix, { position: "top-center", theme: "dark" }),
                (0, l.jsxs)("header", {
                  className:
                    "navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow",
                  children: [
                    (0, l.jsx)("a", {
                      className: "navbar-brand col-md-3 col-lg-2 me-0 px-3",
                      onClick: () => {
                        r("/");
                      },
                      children: (0, l.jsx)("img", {
                        className: "img-brand",
                        src: "/assets/img/logo/logo-text.png",
                      }),
                    }),
                    (0, l.jsx)("button", {
                      className:
                        "navbar-toggler position-absolute d-md-none collapsed",
                      type: "button",
                      "data-bs-toggle": "collapse",
                      "data-bs-target": "#sidebarMenu",
                      "aria-controls": "sidebarMenu",
                      "aria-expanded": "false",
                      "aria-label": "Toggle navigation",
                      children: (0, l.jsx)("span", {
                        className: "navbar-toggler-icon",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "navbar-nav d-md-flex d-none",
                      children: (0, l.jsx)("div", {
                        className: "nav-item text-nowrap pb-lg-0 pb-3",
                        children: (0, l.jsx)("a", {
                          className: "nav-link px-3",
                          href: "#",
                          children: g
                            ? (0, l.jsxs)("button", {
                                className:
                                  "btn btn-cloudgpu-primary-outline rounded-pill me-4",
                                onClick: () => {
                                  b();
                                },
                                children: [
                                  " ",
                                  g
                                    .slice(0, 6)
                                    .concat("...".concat(g.slice(-4))),
                                  " ",
                                  (0, l.jsx)(p.G, {
                                    icon: h.oTz,
                                    style: { fontSize: 14, color: "#fff" },
                                  }),
                                ],
                              })
                            : (0, l.jsx)("button", {
                                className:
                                  "btn btn-cloudgpu-primary rounded-pill",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#connect-wallet-modal",
                                children: "Connect Wallet",
                              }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "",
                  children: (0, l.jsxs)("div", {
                    className: "row m-0 p-0",
                    children: [
                      (0, l.jsx)(j, {
                        selectedIndex: s,
                        account: g,
                        disconnect: b,
                      }),
                      (0, l.jsx)("main", {
                        className: "col-md-9 ms-sm-auto col-lg-10 m-0 p-0",
                        style: { position: "relative" },
                        children: a,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "modal fade ",
                  id: "connect-wallet-modal",
                  "data-bs-backdrop": "static",
                  "data-bs-keyboard": "false",
                  tabIndex: "-1",
                  "aria-labelledby": "connect-wallet-modal",
                  "aria-hidden": "true",
                  children: (0, l.jsx)("div", {
                    className: "modal-dialog modal-dialog-centered",
                    children: (0, l.jsx)("div", {
                      className: "modal-content bg-dark",
                      children: (0, l.jsxs)("div", {
                        className: "modal-body p-4",
                        children: [
                          (0, l.jsx)("div", {
                            className: "text-end",
                            children: (0, l.jsx)("i", {
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                              className: "fa fa-times",
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              N
                                ? (0, l.jsxs)("div", {
                                    className:
                                      "d-flex p-3 bg-black mb-2 rounded list-wallet justify-content-between",
                                    onClick: () => u("metaMask", "0X4"),
                                    children: [
                                      (0, l.jsxs)("div", {
                                        className: "d-flex",
                                        children: [
                                          (0, l.jsx)("img", {
                                            src: "/assets/img/wallet/metamask_icon.png",
                                            style: {
                                              width: "24px",
                                              marginRight: "16px",
                                            },
                                          }),
                                          "  ",
                                          g
                                            ? (0, l.jsxs)("div", {
                                                className: "name",
                                                children: [
                                                  " ",
                                                  g
                                                    .slice(0, 6)
                                                    .concat(
                                                      "...".concat(g.slice(-4))
                                                    ),
                                                ],
                                              })
                                            : "",
                                        ],
                                      }),
                                      (0, l.jsx)("div", {
                                        children: (0, l.jsx)(p.G, {
                                          icon: h.fV7,
                                          style: {
                                            fontSize: 20,
                                            color: "#00CB6F",
                                          },
                                        }),
                                      }),
                                    ],
                                  })
                                : (0, l.jsxs)("div", {
                                    className:
                                      "d-flex p-3 bg-black mb-2 rounded list-wallet",
                                    onClick: () => u("metaMask", "0X4"),
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: "/assets/img/wallet/metamask_icon.png",
                                        style: {
                                          width: "24px",
                                          marginRight: "16px",
                                        },
                                      }),
                                      " Metamask",
                                    ],
                                  }),
                              (0, l.jsxs)("div", {
                                className:
                                  "d-flex p-3 bg-black mb-2 rounded list-wallet",
                                children: [
                                  (0, l.jsx)("img", {
                                    src: "/assets/img/wallet/walletconnect_icon.png",
                                    style: {
                                      width: "24px",
                                      marginRight: "16px",
                                    },
                                  }),
                                  " Wallet Connect",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
  },
]);
