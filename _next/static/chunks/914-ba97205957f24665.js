"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [914],
  {
    35914: function (e, t, l) {
      l.d(t, {
        A: function () {
          return Layout;
        },
      });
      var i = l(85893),
        s = l(9719),
        o = l(25009),
        n = l(34077),
        r = l(67294),
        a = l(1958),
        c = l(69253),
        d = l(11163),
        h = l(5709),
        m = l(22999),
        u = l(13096),
        C = l(39904),
        f = l(68216),
        p = l(76472),
        w = l(41664),
        g = l.n(w),
        components_CustomParticleWallet = function () {
          let [e, t] = (0, r.useState)(0),
            [l, s] = (0, r.useState)(),
            [o, n] = (0, r.useState)(!1),
            {
              address: a,
              openWalletModal: c,
              disconnectWallet: d,
              walletType: h,
            } = (0, r.useContext)(f.w),
            { signature: w, timestamp: b } = (0, r.useContext)(p.J),
            fetchLogin = async () => {
              let e = localStorage.getItem("referral_code"),
                t = {
                  auth_key: b,
                  wallet: a.toLocaleLowerCase(),
                  wallet_type: h,
                  referral_code: e,
                };
              try {
                await fetch("/api/quest/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(w),
                  },
                  body: JSON.stringify(t),
                });
              } catch (e) {
                console.log("Error while fetching login");
              }
            };
          (0, r.useEffect)(() => {
            a &&
              w &&
              h &&
              (console.log("Attempting to fetch login with:", h), fetchLogin());
          }, [a, w, h]);
          let getPoints = async () => {
            try {
              let e = await fetch(
                ""
                  .concat(
                    window.location.origin,
                    "/api/rag/getMyPoints?wallet="
                  )
                  .concat(null == a ? void 0 : a.toLowerCase())
              );
              if (!e.ok) throw Error("Failed to load user points");
              let l = await e.json();
              t(l.totalRewardAmount);
            } catch (e) {
              console.log(e);
            }
          };
          return (
            (0, u.Z)(
              C.te,
              (e) => {
                getPoints().then();
              },
              l
            ),
            (0, r.useEffect)(() => {
              a && getPoints(), window && s(window);
            }, [a]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                !a &&
                  (0, i.jsx)("button", {
                    onClick: c,
                    disabled: !!a,
                    className:
                      "text-center px-4 py-2 bg-black text-white border border-white hover:border-customBlue hover:bg-customBlue transition-all duration-300",
                    children: "Connect Wallet",
                  }),
                a &&
                  (0, i.jsxs)("div", {
                    className: "flex flex-row items-center gap-3",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "text-center px-4 py-2 bg-black text-white border border-white",
                        children: "".concat(e || 0, " POINTS"),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-row px-4 py-2 group relative ".concat(
                            a ? "bg-[#3773FF]" : "bg-black",
                            " border text-white border-white gap-2 items-center"
                          ),
                        children: [
                          (0, i.jsx)("p", { children: (0, m.Z)(a) }),
                          (0, i.jsx)("svg", {
                            width: "21",
                            height: "20",
                            viewBox: "0 0 21 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "M5.99268 7.49863L10.9913 12.5L15.9927 7.50146",
                              stroke: "white",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "group-hover:block hidden absolute z-10 pt-8 top-6 w-52 sm:w-[172px] right-0 h-14 text-white",
                            children: (0, i.jsxs)("div", {
                              className:
                                "flex flex-col bg-black p-3 text-sm font-semibold gap-1 text-start border border-white",
                              children: [
                                (0, i.jsx)(g(), {
                                  className:
                                    "hover:border-white border border-black py-1 px-3 text-start transition-all duration-300",
                                  href: "/profile",
                                  children: "Profile",
                                }),
                                (0, i.jsx)(g(), {
                                  className:
                                    "hover:border-white border border-black py-1 px-3 text-start transition-all duration-300",
                                  href: "/referral",
                                  children: "Referral Detail",
                                }),
                                (0, i.jsx)("button", {
                                  className:
                                    "hover:border-white border border-black py-1 px-3 text-start transition-all duration-300",
                                  onClick: () => {
                                    d(), n(!1);
                                  },
                                  children: "Disconnect",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        };
      let MenuItem = (e) => {
          let { selected: t, text: l, ...s } = e;
          return (0, i.jsx)(a.z, {
            ...s,
            plain: !0,
            children: (0, i.jsx)("p", {
              className: "text-white text-base ".concat(
                t ? "font-extrabold" : "font-medium"
              ),
              children: l,
            }),
          });
        },
        BurgerMenu = (e) => {
          let { setShowSidebar: t } = e,
            { pathname: l } = (0, d.useRouter)(),
            { openWalletModal: o, isConnected: n } = (0, r.useContext)(f.w),
            [m, u] = (0, r.useState)(l);
          return (
            (0, r.useEffect)(() => {
              l && u(l);
            }, [l]),
            (0, i.jsxs)("div", {
              className: "pt-8 text-white",
              children: [
                (0, i.jsx)("div", {
                  className: "w-full border-b border-b-white",
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex flex-row justify-between items-center px-4 pb-4",
                    children: [
                      (0, i.jsx)("div", {
                        className: "flex",
                        children: (0, i.jsx)(s.x, {
                          width: { max: "100px" },
                          children: (0, i.jsx)(c.E, {
                            src: "/static/images/flockLogoV2.svg",
                            alt: "logo",
                          }),
                        }),
                      }),
                      (0, i.jsx)(a.z, {
                        onClick: () => t(!1),
                        children: (0, i.jsx)(h.x, {}),
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-col items-center gap-5 mt-7",
                  children: [
                    (0, i.jsx)(MenuItem, {
                      href: "/",
                      onClick: () => u("/"),
                      hoverIndicator: !1,
                      selected: "/" === m,
                      text: "Explore Models",
                    }),
                    (0, i.jsx)(MenuItem, {
                      href: n ? "/chat" : void 0,
                      onClick: () => (n ? u("/chat") : o()),
                      hoverIndicator: !1,
                      selected: "/chat" === m,
                      text: "Chat",
                    }),
                    (0, i.jsx)(MenuItem, {
                      href: n ? "/points" : void 0,
                      onClick: () => (n ? u("/points") : o()),
                      hoverIndicator: !1,
                      selected: "/points" === m,
                      text: "Earn Points",
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(components_CustomParticleWallet, {}),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var b = l(37571),
        v = l(25675),
        j = l.n(v),
        x = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsx)("svg", {
            width: "21",
            height: "20",
            viewBox: "0 0 21 20",
            fill: "#3773FF",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: (0, i.jsx)("path", {
              d: "M15.465 2.3457H18.1114L12.3298 8.9537L19.1314 17.9457H13.805L9.63385 12.4921L4.86105 17.9457H2.21305L8.39705 10.8777L1.87305 2.3457H7.33305L11.1034 7.3305L15.4634 2.3457H15.465ZM14.5362 16.3617H16.0026L6.53705 3.8465H4.96345L14.5362 16.3617Z",
            }),
          });
        },
        github = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsx)("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: (0, i.jsx)("path", {
              d: "M20.6154 6.43295C20.5342 6.32517 20.4474 6.2217 20.3554 6.12295C20.448 5.87639 20.5183 5.62204 20.5654 5.36295C20.7048 4.41515 20.5838 3.4473 20.2154 2.56295C20.2154 2.56295 19.0954 2.21295 16.5254 3.94295C15.4344 3.64169 14.3074 3.4903 13.1754 3.49295C12.0403 3.49096 10.9101 3.64233 9.81544 3.94295C7.24545 2.19295 6.12545 2.56295 6.12545 2.56295C5.76153 3.43794 5.6406 4.39495 5.77545 5.33295C5.8229 5.60282 5.89658 5.86741 5.99545 6.12295C5.90545 6.22295 5.81545 6.33295 5.73545 6.43295C4.98923 7.36897 4.59312 8.53609 4.61545 9.73295C4.61307 10.0168 4.62643 10.3006 4.65545 10.583C4.97545 15.013 7.92545 16.043 10.7354 16.363C10.3377 16.7328 10.068 17.2196 9.96544 17.753C9.8725 18.1086 9.82876 18.4754 9.83545 18.843V20.153C8.71645 20.253 7.56845 20.09 7.21245 19.092C6.8303 18.1367 6.19652 17.3029 5.37845 16.679C5.31866 16.6466 5.26178 16.6091 5.20845 16.567C5.13661 16.3782 5.00934 16.2155 4.84335 16.1004C4.67737 15.9853 4.48044 15.9231 4.27845 15.922H4.27345C4.00909 15.9219 3.75549 16.0266 3.5681 16.2131C3.38071 16.3995 3.27477 16.6526 3.27345 16.917C3.27045 17.729 4.08345 18.254 4.41645 18.432C4.8055 18.824 5.11846 19.2848 5.33945 19.791C5.70345 20.814 6.76845 22.369 9.80544 22.167L9.80744 22.265L9.81145 22.533C9.81145 22.7982 9.9168 23.0525 10.1043 23.2401C10.2919 23.4276 10.5462 23.533 10.8114 23.533H15.5254C15.7907 23.533 16.045 23.4276 16.2326 23.2401C16.4201 23.0525 16.5254 22.7982 16.5254 22.533C16.5254 22.533 16.5334 19.373 16.5334 18.843C16.5401 18.4754 16.4964 18.1086 16.4034 17.753L16.4014 17.747L16.4054 17.753C16.3964 17.718 16.3834 17.69 16.3734 17.656C16.262 17.1605 16.0042 16.71 15.6334 16.363L15.6454 16.384L15.6254 16.364C18.4354 16.044 21.3654 14.994 21.6854 10.584C21.7145 10.3016 21.7278 10.0178 21.7254 9.73395C21.7432 8.53946 21.3515 7.3749 20.6154 6.43395V6.43295Z",
            }),
          });
        },
        discord = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsx)("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.1432 6.1769C18.3304 4.78009 15.4628 4.54379 15.3409 4.53375C15.1496 4.51824 14.9677 4.62225 14.8897 4.79012C14.884 4.80107 14.8211 4.93884 14.7516 5.15324C15.9503 5.34666 17.4231 5.73714 18.756 6.52998C18.9693 6.65679 19.035 6.92594 18.9026 7.13122C18.8169 7.26442 18.6675 7.33741 18.5151 7.33741C18.4333 7.33741 18.3504 7.31642 18.2752 7.27172C15.9845 5.91049 13.1226 5.84206 12.5723 5.84206C12.022 5.84206 9.15918 5.91049 6.87041 7.27172C6.6562 7.39945 6.37629 7.33558 6.243 7.13122C6.10971 6.92594 6.17636 6.65771 6.38962 6.52998C7.72251 5.73806 9.19441 5.34666 10.394 5.15324C10.3236 4.93792 10.2607 4.80107 10.256 4.79012C10.1769 4.62225 9.99605 4.51642 9.80373 4.53466C9.68282 4.54379 6.81519 4.78009 4.97771 6.19697C4.01802 7.04637 2.09961 12.0169 2.09961 16.314C2.09961 16.3898 2.12055 16.4646 2.15959 16.5303C3.48391 18.7591 7.09605 19.343 7.91959 19.3686C7.92435 19.3686 7.92911 19.3686 7.93387 19.3686C8.07954 19.3686 8.21663 19.302 8.30232 19.1889L9.13538 18.0922C6.88945 17.5357 5.74221 16.5914 5.67557 16.5357C5.48706 16.3761 5.46897 16.1005 5.63558 15.9199C5.80219 15.7393 6.08877 15.7219 6.27728 15.8807C6.30488 15.9044 8.41752 17.6223 12.5723 17.6223C16.7348 17.6223 18.8474 15.8971 18.8683 15.8798C19.0569 15.7228 19.3444 15.7393 19.51 15.9208C19.6757 16.1015 19.6576 16.3761 19.4701 16.5348C19.4034 16.5914 18.2562 17.5348 16.0102 18.0913L16.8433 19.1879C16.929 19.3011 17.0661 19.3677 17.2118 19.3677C17.2165 19.3677 17.2213 19.3677 17.226 19.3677C18.0496 19.343 21.6617 18.7591 22.986 16.5294C23.0241 16.4637 23.0451 16.3898 23.0451 16.314C23.0451 12.0169 21.1266 7.04637 20.1432 6.1769ZM9.61236 14.5687C8.73265 14.5687 8.0186 13.7868 8.0186 12.8234C8.0186 11.8599 8.7317 11.0781 9.61236 11.0781C10.493 11.0781 11.2061 11.8599 11.2061 12.8234C11.2061 13.7868 10.493 14.5687 9.61236 14.5687ZM15.5323 14.5687C14.6526 14.5687 13.9386 13.7868 13.9386 12.8234C13.9386 11.8599 14.6516 11.0781 15.5323 11.0781C16.412 11.0781 17.1261 11.8599 17.1261 12.8234C17.1261 13.7868 16.412 14.5687 15.5323 14.5687Z",
            }),
          });
        },
        medium = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsx)("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: (0, i.jsx)("path", {
              d: "M14.2367 12.5322C14.2367 16.2597 11.2067 19.2822 7.46722 19.2822C6.57961 19.2834 5.70047 19.1098 4.87998 18.7712C4.05948 18.4326 3.31371 17.9357 2.68525 17.3089C2.05678 16.6821 1.55792 15.9377 1.21716 15.1181C0.876396 14.2985 0.7004 13.4198 0.699219 12.5322C0.699219 8.80323 3.72922 5.78223 7.46722 5.78223C8.35495 5.78085 9.23426 5.95437 10.0549 6.29286C10.8756 6.63135 11.6215 7.12819 12.2502 7.755C12.8788 8.38182 13.3778 9.12633 13.7186 9.94601C14.0595 10.7657 14.2355 11.6445 14.2367 12.5322ZM21.6617 12.5322C21.6617 16.0422 20.1467 18.8862 18.2777 18.8862C16.4087 18.8862 14.8937 16.0407 14.8937 12.5322C14.8937 9.02223 16.4087 6.17823 18.2777 6.17823C20.1467 6.17823 21.6617 9.02373 21.6617 12.5322ZM24.6992 12.5322C24.6992 15.6762 24.1667 18.2247 23.5082 18.2247C22.8512 18.2247 22.3187 15.6747 22.3187 12.5322C22.3187 9.38823 22.8512 6.83973 23.5097 6.83973C24.1667 6.83973 24.6992 9.38823 24.6992 12.5322Z",
            }),
          });
        },
        telegram = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsx)("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: (0, i.jsx)("path", {
              d: "M19.9654 4.6426L2.23539 11.4796C1.02539 11.9656 1.03239 12.6406 2.01339 12.9416L6.56539 14.3616L17.0974 7.7166C17.5954 7.4136 18.0504 7.5766 17.6764 7.9086L9.14339 15.6096H9.14139L9.14339 15.6106L8.82939 20.3026C9.28939 20.3026 9.49239 20.0916 9.75039 19.8426L11.9614 17.6926L16.5604 21.0896C17.4084 21.5566 18.0174 21.3166 18.2284 20.3046L21.2474 6.0766C21.5564 4.8376 20.7744 4.2766 19.9654 4.6426Z",
            }),
          });
        },
        linkedin = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsxs)("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: [
              (0, i.jsx)("path", {
                d: "M16.5 8.53223C18.0913 8.53223 19.6174 9.16437 20.7426 10.2896C21.8679 11.4148 22.5 12.9409 22.5 14.5322V21.5322H18.5V14.5322C18.5 14.0018 18.2893 13.4931 17.9142 13.118C17.5391 12.7429 17.0304 12.5322 16.5 12.5322C15.9696 12.5322 15.4609 12.7429 15.0858 13.118C14.7107 13.4931 14.5 14.0018 14.5 14.5322V21.5322H10.5V14.5322C10.5 12.9409 11.1321 11.4148 12.2574 10.2896C13.3826 9.16437 14.9087 8.53223 16.5 8.53223Z",
              }),
              (0, i.jsx)("path", {
                d: "M6.5 9.53223H2.5V21.5322H6.5V9.53223Z",
              }),
              (0, i.jsx)("path", {
                d: "M4.5 6.53223C5.60457 6.53223 6.5 5.6368 6.5 4.53223C6.5 3.42766 5.60457 2.53223 4.5 2.53223C3.39543 2.53223 2.5 3.42766 2.5 4.53223C2.5 5.6368 3.39543 6.53223 4.5 6.53223Z",
              }),
            ],
          });
        },
        mailbox = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsx)("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: (0, i.jsx)("path", {
              d: "M10.25 14.4707C10.25 14.6696 10.171 14.8604 10.0303 15.001C9.88968 15.1417 9.69891 15.2207 9.5 15.2207H5.75C5.55109 15.2207 5.36032 15.1417 5.21967 15.001C5.07902 14.8604 5 14.6696 5 14.4707C5 14.2718 5.07902 14.081 5.21967 13.9404C5.36032 13.7997 5.55109 13.7207 5.75 13.7207H9.5C9.69891 13.7207 9.88968 13.7997 10.0303 13.9404C10.171 14.081 10.25 14.2718 10.25 14.4707ZM23 11.0957V16.7207C23 17.1185 22.842 17.5001 22.5607 17.7814C22.2794 18.0627 21.8978 18.2207 21.5 18.2207H13.25V21.2207C13.25 21.4196 13.171 21.6104 13.0303 21.751C12.8897 21.8917 12.6989 21.9707 12.5 21.9707C12.3011 21.9707 12.1103 21.8917 11.9697 21.751C11.829 21.6104 11.75 21.4196 11.75 21.2207V18.2207H3.5C3.10218 18.2207 2.72064 18.0627 2.43934 17.7814C2.15804 17.5001 2 17.1185 2 16.7207V11.0957C2.00174 9.60439 2.59493 8.17466 3.64944 7.12015C4.70396 6.06563 6.13369 5.47244 7.625 5.4707H14.75V2.4707C14.75 2.27179 14.829 2.08103 14.9697 1.94037C15.1103 1.79972 15.3011 1.7207 15.5 1.7207H18.5C18.6989 1.7207 18.8897 1.79972 19.0303 1.94037C19.171 2.08103 19.25 2.27179 19.25 2.4707C19.25 2.66962 19.171 2.86038 19.0303 3.00103C18.8897 3.14169 18.6989 3.2207 18.5 3.2207H16.25V5.4707H17.375C18.8663 5.47244 20.296 6.06563 21.3506 7.12015C22.4051 8.17466 22.9983 9.60439 23 11.0957ZM11.75 16.7207V11.0957C11.75 10.0017 11.3154 8.95248 10.5418 8.17889C9.76823 7.4053 8.71902 6.9707 7.625 6.9707C6.53098 6.9707 5.48177 7.4053 4.70818 8.17889C3.9346 8.95248 3.5 10.0017 3.5 11.0957V16.7207H11.75ZM21.5 11.0957C21.4988 10.0021 21.0638 8.95358 20.2904 8.18026C19.5171 7.40694 18.4686 6.97194 17.375 6.9707H16.25V13.7207C16.25 13.9196 16.171 14.1104 16.0303 14.251C15.8897 14.3917 15.6989 14.4707 15.5 14.4707C15.3011 14.4707 15.1103 14.3917 14.9697 14.251C14.829 14.1104 14.75 13.9196 14.75 13.7207V6.9707H11.4453C12.0146 7.49642 12.4689 8.13434 12.7795 8.84428C13.0901 9.55422 13.2503 10.3208 13.25 11.0957V16.7207H21.5V11.0957Z",
              fill: "#3773FF",
            }),
          });
        },
        burger = (e) =>
          (0, i.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.25 18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H3C2.58579 17.25 2.25 17.5858 2.25 18ZM2.25 12C2.25 12.4142 2.58579 12.75 3 12.75H21C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25H3C2.58579 11.25 2.25 11.5858 2.25 12ZM2.25 6C2.25 6.41421 2.58579 6.75 3 6.75L21 6.75C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25L3 5.25C2.58579 5.25 2.25 5.58579 2.25 6Z",
              fill: "#FFFFFF",
            }),
          }),
        youtube = (e) => {
          let { className: t, ...l } = e;
          return (0, i.jsx)("svg", {
            width: "25",
            height: "15",
            viewBox: "0 0 25 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            ...l,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1.82515 0.53125C1.09329 0.53125 0.5 1.12454 0.5 1.8564V13.3411C0.5 14.0729 1.09329 14.6662 1.82515 14.6662H23.1748C23.9067 14.6662 24.5 14.0729 24.5 13.3411V1.8564C24.5 1.12454 23.9067 0.53125 23.1748 0.53125H1.82515ZM15.6109 7.80081C15.7888 7.68459 15.7888 7.42397 15.6109 7.30775L11.2327 4.44734C11.0368 4.31938 10.7771 4.45991 10.7771 4.69387V10.4147C10.7771 10.6486 11.0368 10.7892 11.2327 10.6612L15.6109 7.80081Z",
            }),
          });
        },
        components_Footer = () =>
          (0, i.jsx)("footer", {
            className: "w-full bg-[#0E0E0E] py-8",
            children: (0, i.jsx)("div", {
              className: "container mx-auto px-4",
              children: (0, i.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row justify-between py-[98px] gap-10 flex-wrap",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col gap-10 xl:max-w-[380px] w-full md:mr-[168px]",
                    children: [
                      (0, i.jsx)("div", {
                        className: "mb-6 md:mb-0",
                        children: (0, i.jsx)(j(), {
                          src: b.Z,
                          alt: "FLock",
                          width: 158,
                          height: 46,
                        }),
                      }),
                      (0, i.jsx)("form", {
                        action:
                          "https://flock.us21.list-manage.com/subscribe/post?u=cf2df2da902eb8d1a5a6a553f&id=5b5347bc6d&f_id=00d6e7e1f0",
                        method: "post",
                        id: "mc-embedded-subscribe-form",
                        name: "mc-embedded-subscribe-form",
                        target: "_blank",
                        children: (0, i.jsxs)("div", {
                          className:
                            "border border-[#FFFFFF24] p-2 gap-2 flex items-center",
                          children: [
                            (0, i.jsx)("input", {
                              type: "email",
                              name: "EMAIL",
                              id: "mce-EMAIL",
                              placeholder: "Your email address",
                              className:
                                "bg-[#0E0E0E] border-none outline-none text-textWhite w-full focus:ring-0",
                            }),
                            (0, i.jsx)("button", {
                              className:
                                "text-white text-base font-medium border border-white hover:border-customBlue hover:bg-customBlue transition-all duration-300 px-4 py-2",
                              children: "Subscribe",
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "gap-3 flex flex-col",
                        children: [
                          (0, i.jsx)("p", {
                            className: "text-textWhite text-sm font-semibold",
                            children: "Follow us",
                          }),
                          (0, i.jsx)("div", {
                            className: "flex gap-3",
                            children: [
                              {
                                icon: (0, i.jsx)(x, {
                                  className:
                                    "fill-textWhite group-hover:fill-customBlue transition-all duration-300",
                                }),
                                link: "https://twitter.com/flock_io",
                              },
                              {
                                icon: (0, i.jsx)(youtube, {
                                  className:
                                    "fill-textWhite group-hover:fill-customBlue transition-all duration-300",
                                }),
                                link: "https://www.youtube.com/@flock-io",
                              },
                              {
                                icon: (0, i.jsx)(github, {
                                  className:
                                    "fill-textWhite group-hover:fill-customBlue transition-all duration-300",
                                }),
                                link: "https://github.com/FLock-io",
                              },
                              {
                                icon: (0, i.jsx)(discord, {
                                  className:
                                    "fill-textWhite group-hover:fill-customBlue transition-all duration-300",
                                }),
                                link: "https://discord.com/invite/ay8MnJCg2W",
                              },
                              {
                                icon: (0, i.jsx)(medium, {
                                  className:
                                    "fill-textWhite group-hover:fill-customBlue transition-all duration-300",
                                }),
                                link: "https://flock-io.medium.com/",
                              },
                              {
                                icon: (0, i.jsx)(telegram, {
                                  className:
                                    "fill-textWhite group-hover:fill-customBlue transition-all duration-300",
                                }),
                                link: "https://t.me/flock_io_community",
                              },
                              {
                                icon: (0, i.jsx)(linkedin, {
                                  className:
                                    "fill-textWhite group-hover:fill-customBlue transition-all duration-300",
                                }),
                                link: "https://www.linkedin.com/company/flock-io/people/",
                              },
                            ].map((e, t) =>
                              (0, i.jsx)(
                                "a",
                                {
                                  href: e.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-textWhite w-10 h-10 flex items-center justify-center border border-textWhite hover:border-customBlue hover:text-customBlue group transition-all duration-300",
                                  children: e.icon,
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 grow",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-col gap-8 w-full xl:max-w-[200px] justify-self-end mt-8",
                        children: [
                          (0, i.jsx)("h3", {
                            className: "text-textWhite text-base font-semibold",
                            children: "Navigation",
                          }),
                          (0, i.jsx)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              {
                                title: "Home",
                                link: "https://www.flock.io/",
                                target: "_blank",
                              },
                              {
                                title: "Platform",
                                link: "https://www.flock.io/platform",
                                target: "_blank",
                              },
                              {
                                title: "Docs",
                                link: "https://docs.flock.io/",
                                target: "_blank",
                              },
                              {
                                title: "Blog",
                                link: "https://www.flock.io/blog",
                                target: "_blank",
                              },
                            ].map((e, t) =>
                              (0, i.jsx)(
                                "a",
                                {
                                  href: e.link,
                                  target: e.target,
                                  className:
                                    "text-textWhite text-base leading-[24px] hover:text-customBlue transition-all duration-300",
                                  children: e.title,
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-col gap-8 w-full xl:max-w-[200px] justify-self-end mt-8",
                        children: [
                          (0, i.jsx)("h3", {
                            className: "text-textWhite text-base font-semibold",
                            children: "License",
                          }),
                          (0, i.jsx)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              {
                                title: "Privacy Policy",
                                link: "https://blog.flock.io/flock-website-privacy-policy",
                                target: "_blank",
                              },
                              {
                                title: "Terms & Conditions",
                                link: "https://blog.flock.io/documents/flock-terms-of-use",
                                target: "_blank",
                              },
                            ].map((e, t) =>
                              (0, i.jsx)(
                                "a",
                                {
                                  href: e.link,
                                  target: e.target,
                                  className:
                                    "text-textWhite text-base leading-[24px] hover:text-customBlue transition-all duration-300",
                                  children: e.title,
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-col gap-8 w-full xl:max-w-[200px] justify-self-end mt-8",
                        children: [
                          (0, i.jsx)("h3", {
                            className: "text-textWhite text-base font-semibold",
                            children: "Contact",
                          }),
                          (0, i.jsx)("div", {
                            className: "flex flex-col gap-3 items-center",
                            children: (0, i.jsxs)("a", {
                              href: "mailto:hello@flock.io",
                              className:
                                "w-full flex gap-2 items-center justify-start text-textWhite",
                              children: [
                                (0, i.jsx)(mailbox, {}),
                                " hello@flock.io",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        k = l(86501),
        N = l(82729),
        L = l(23902),
        y = l(186);
      function _templateObject() {
        let e = (0, N._)([
          "\n  background-color: ",
          ";\n  width: 300px;\n  height: 130px;\n  border-radius: 12px;\n  border: 2px solid black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n",
        ]);
        return (
          (_templateObject = function () {
            return e;
          }),
          e
        );
      }
      let M = (0, y.default)(s.x).withConfig({ componentId: "sc-126630b4-0" })(
          _templateObject(),
          (e) => (e.isSuccess ? "#54875D" : "#B8482B")
        ),
        VerificationNotif = (e) => {
          let { title: t, content: l, isSuccess: o } = e;
          return (0, i.jsxs)(M, {
            isSuccess: o,
            children: [
              (0, i.jsx)(s.x, {
                width: "150px",
                children: o
                  ? (0, i.jsx)("svg", {
                      width: "48",
                      height: "49",
                      viewBox: "0 0 48 49",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M24 0.5C10.7464 0.5 0 11.2464 0 24.5C0 37.7536 10.7464 48.5 24 48.5C37.2536 48.5 48 37.7536 48 24.5C48 11.2464 37.2536 0.5 24 0.5ZM35.6268 17.6636C36.2693 16.7651 36.0618 15.5159 35.1634 14.8734C34.2649 14.2309 33.0157 14.4384 32.3732 15.3369L21.5632 30.4535L15.3876 24.5043C14.5921 23.738 13.326 23.7616 12.5596 24.5571C11.7933 25.3526 11.8169 26.6187 12.6124 27.3851L20.4556 34.9406C20.8741 35.3438 21.4474 35.545 22.0262 35.4919C22.6049 35.4387 23.1319 35.1364 23.47 34.6636L35.6268 17.6636Z",
                        fill: "#F4F5F6",
                      }),
                    })
                  : (0, i.jsx)("svg", {
                      width: "49",
                      height: "49",
                      viewBox: "0 0 49 49",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M24.9033 48.9149C38.1582 48.9149 48.9033 38.1698 48.9033 24.9149C48.9033 11.6601 38.1582 0.914917 24.9033 0.914917C11.6485 0.914917 0.90332 11.6601 0.90332 24.9149C0.90332 38.1698 11.6485 48.9149 24.9033 48.9149ZM19.4004 16.0179C18.4631 15.0806 16.9435 15.0806 16.0063 16.0179C15.069 16.9551 15.069 18.4747 16.0063 19.412L21.5092 24.9149L16.0063 30.4179C15.069 31.3551 15.069 32.8747 16.0063 33.812C16.9435 34.7492 18.4631 34.7492 19.4004 33.812L24.9033 28.309L30.4063 33.812C31.3435 34.7492 32.8631 34.7492 33.8004 33.812C34.7376 32.8747 34.7376 31.3551 33.8004 30.4179L28.2974 24.9149L33.8004 19.412C34.7376 18.4747 34.7376 16.9551 33.8004 16.0179C32.8631 15.0806 31.3435 15.0806 30.4063 16.0179L24.9033 21.5208L19.4004 16.0179Z",
                        fill: "#FDFDFD",
                      }),
                    }),
              }),
              (0, i.jsxs)(s.x, {
                pad: "0 16px",
                children: [
                  (0, i.jsx)(L.x, {
                    color: "white",
                    weight: "bold",
                    children: t,
                  }),
                  (0, i.jsx)(s.x, { children: l }),
                ],
              }),
            ],
          });
        },
        VerificationResultNotif = (e) => {
          let { isSuccess: t, channel: l, reward: s } = e,
            o = t
              ? (0, i.jsxs)(L.x, {
                  style: { lineHeight: "12px" },
                  size: "xsmall",
                  margin: { bottom: "none" },
                  color: "white",
                  weight: 500,
                  children: [
                    "Your ",
                    (0, i.jsx)(L.x, {
                      size: "xsmall",
                      style: { lineHeight: "12px" },
                      color: "yellow",
                      children: l,
                    }),
                    " has successfully passed the verification. You've been awarded ",
                    s,
                    " Points.",
                  ],
                })
              : (0, i.jsxs)(L.x, {
                  style: { lineHeight: "12px" },
                  size: "xsmall",
                  margin: { bottom: "none" },
                  color: "white",
                  weight: 500,
                  children: [
                    "Your ",
                    (0, i.jsx)(L.x, {
                      size: "xsmall",
                      style: { lineHeight: "12px" },
                      color: "yellow",
                      children: l,
                    }),
                    " hasn't passed the verification. Please review the guidelines to reupload your knowledge.",
                  ],
                });
          return (0, i.jsx)(VerificationNotif, {
            title: t ? "Verification Succeeded" : "Verification Failed",
            content: o,
            isSuccess: t,
          });
        };
      var E = l(35767),
        H = l(93334);
      let Notification = (e) => {
        let { children: t, onMessageReceived: l } = e,
          { address: s } = (0, r.useContext)(f.w),
          { setMessage: o } = (0, H.l)();
        return (0, i.jsx)(E.CourierProvider, {
          userId: null == s ? void 0 : s.toLowerCase(),
          clientKey: "MjliNGRhNTktMGJmYi00MzMzLThiODEtNjYyMTFiNjAxY2Zl",
          onMessage: (e) => (
            console.log("message from courier", e), l && l(e), o(e), e
          ),
          children: t,
        });
      };
      var F = l(80530);
      let Layout = (e) => {
        let { children: t, withFooter: l = !0, blurred: a = !1 } = e,
          [c, d] = (0, r.useState)(!1),
          [h, m] = (0, r.useState)(!1),
          notifyVerified = (e, t, l) => {
            ["SUCCESS", "FAILURE"].includes(e) &&
              (0, k.Am)(
                (0, i.jsx)(VerificationResultNotif, {
                  isSuccess: "SUCCESS" === e,
                  channel: t,
                  reward: l,
                }),
                {
                  duration: 3e3,
                  position: "top-right",
                  style: {
                    border: "1px solid #713200",
                    padding: "0px",
                    margin: "0px",
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    boxShadow: "none",
                  },
                }
              );
          };
        return (
          (0, r.useEffect)(() => {
            let checkScroll = () => {
              window.scrollY > 0 ? m(!0) : m(!1);
            };
            return (
              window.addEventListener("scroll", checkScroll),
              () => {
                window.removeEventListener("scroll", checkScroll);
              }
            );
          }, []),
          (0, i.jsxs)(s.x, {
            background: "black",
            fill: !0,
            className: "font-everett ".concat(a && "blur-sm"),
            children: [
              (0, i.jsx)(k.x7, { gutter: 0 }),
              (0, i.jsx)("header", {
                className: "w-full fixed z-[3] bg-brand-black-v2 bg-[#0E0E0E]",
                children: (0, i.jsx)("div", {
                  className:
                    "container mx-auto py-3 md:py-[26px] px-4 border-b border-brand-white-v2 w-[90%] sm:w-5/6 max-w-[90%]",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, i.jsx)(g(), {
                        href: "/",
                        className:
                          "flex items-center w-[84px] md:w-[158px] h-[24px] md:h-[48px]",
                        children: (0, i.jsx)(j(), {
                          src: b.Z,
                          alt: "FLock logo",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "items-center space-x-8 hidden md:flex",

                      }),
                      (0, i.jsx)("div", {
                        className: "flex md:hidden cursor-pointer",
                        onClick: () => d(!c),
                        children: (0, i.jsx)(burger, {}),
                      }),
                      (0, i.jsx)("div", {
                        className: "hidden md:flex",
                        children: (0, i.jsx)(
                          components_CustomParticleWallet,
                          {}
                        ),
                      }),
                    ],
                  }),
                }),
              }),
              c &&
                (0, i.jsx)(o.m, {
                  onEsc: () => d(!1),
                  onClickOutside: () => d(!1),
                  animation: "slide",
                  position: "left",
                  full: "vertical",
                  children: (0, i.jsx)(s.x, {
                    children: (0, i.jsx)(BurgerMenu, { setShowSidebar: d }),
                  }),
                }),
              (0, i.jsx)(n.o, {
                children: (0, i.jsx)(s.x, {
                  fill: !0,
                  className: "pt-[50px] md:pt-[100px]",
                  children: t,
                }),
              }),
              l && (0, i.jsx)(components_Footer, {}),
              (0, i.jsx)(Notification, {
                children: null,
                onMessageReceived: (e) => {
                  switch (e.data.notificationType) {
                    case C.i4: {
                      let {
                        contributionId: t,
                        dataValidationStatus: l,
                        filePath: i,
                      } = e.data;
                      console.log("notificaiton received:".concat(C.i4)),
                        dispatchEvent(
                          new CustomEvent(C.i4, { bubbles: !0, detail: e.data })
                        ),
                        notifyVerified(
                          l,
                          "".concat(i, " in Contribution ").concat(t),
                          F.p9.REWARD_FOR_CONTRIBUTORS
                        );
                      break;
                    }
                    case C.Hi: {
                      let { dataValidationStatus: t, modelName: l } = e.data;
                      console.log("notificaiton received:".concat(C.Hi)),
                        dispatchEvent(
                          new CustomEvent(C.Hi, { bubbles: !0, detail: e.data })
                        ),
                        notifyVerified(
                          t,
                          "Model ".concat(l),
                          F.p9.REWARD_FOR_MODEL_CREATION
                        );
                      break;
                    }
                    case C.te:
                      console.log("ryon notification received"),
                        dispatchEvent(
                          new CustomEvent(C.te, { bubbles: !0, detail: e.data })
                        );
                  }
                },
              }),
            ],
          })
        );
      };
    },
    39904: function (e, t, l) {
      l.d(t, {
        Hi: function () {
          return s;
        },
        i4: function () {
          return i;
        },
        te: function () {
          return o;
        },
      });
      let i = "notification_verified",
        s = "model_verified",
        o = "reward_updated";
    },
    13096: function (e, t, l) {
      var i = l(67294);
      t.Z = (e, t, l) => {
        (0, i.useEffect)(
          () => (
            (null == l ? void 0 : l.addEventListener) &&
              l.addEventListener(e, t),
            () => {
              (null == t ? void 0 : t.cancel) && t.cancel(),
                (null == l ? void 0 : l.removeEventListener) &&
                  l.removeEventListener(e, t);
            }
          ),
          [e, t, l]
        );
      };
    },
  },
]);
