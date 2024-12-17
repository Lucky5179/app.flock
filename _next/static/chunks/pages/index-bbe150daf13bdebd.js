(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(86382);
        },
      ]);
    },
    52074: function (e, t, l) {
      "use strict";
      l.d(t, {
        K: function () {
          return PrimaryButton;
        },
      });
      var o = l(85893),
        r = l(1958);
      let PrimaryButton = (e) => {
        let { ...t } = e;
        return (0, o.jsx)(r.z, { primary: !0, ...t });
      };
    },
    6e4: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return ContentUpload;
        },
      });
      var o = l(85893),
        r = l(9719),
        i = l(81392),
        s = l(9213),
        a = l(96184),
        n = l(58769),
        d = l(45504),
        c = l(23902),
        m = l(67294),
        x = l(80530),
        h = l(87478);
      let ContentUpload = (e) => {
        let { files: t, setFiles: l, onFilesChange: p } = e,
          [u, g] = (0, m.useState)(""),
          [f, w] = (0, m.useState)(""),
          [j, b] = (0, m.useState)(!0),
          C = (0, m.useRef)(null);
        (0, m.useEffect)(() => {
          (t && t.length) || !C.current || (C.current.value = "");
        }, [t, C.current]);
        let isValidUrlCheck = (e) =>
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              e
            ),
          handleRemove = (e) => {
            l(t.filter((t) => t.name !== e.name));
          };
        return (0, o.jsxs)(r.x, {
          children: [
            (0, o.jsxs)(r.x, {
              round: "none",
              border: { size: "1px", color: "#2F2F2F" },
              gap: "small",
              background: "#161616",
              width: "100%",
              children: [
                (0, o.jsx)("p", {
                  className: "mt-4 ml-4",
                  children: "Your Knowledge",
                }),
                (0, o.jsx)(r.x, {
                  fill: !0,
                  children: (0, o.jsx)(i.N.Extend, {
                    value: {
                      tabs: { gap: "medium" },
                      tab: {
                        border: {
                          side: "bottom",
                          size: "small",
                          color: "none",
                          active: { color: "#03BFD4" },
                          hover: { color: "white" },
                        },
                        color: "#B0B0B0",
                        margin: { left: "medium", bottom: "none" },
                      },
                    },
                    children: (0, o.jsxs)(s.m, {
                      alignControls: "start",
                      children: [
                        (0, o.jsx)(a.O, {
                          title: "Upload",
                          style: { fontWeight: 600 },
                          children: (0, o.jsx)(r.x, {
                            style: { borderTop: "3px solid #2F2F2F" },
                            pad: "small",
                            children: (0, o.jsx)("div", {
                              className:
                                "w-full items-center justify-center py-10",
                              children: (0, o.jsxs)("label", {
                                htmlFor: "file-drop",
                                className: "font-semibold text-sm text-center",
                                children: [
                                  (0, o.jsx)("h2", {
                                    className: "text-lg",
                                    children: "Drag & Drop",
                                  }),
                                  (0, o.jsxs)("p", {
                                    children: [
                                      "or ",
                                      (0, o.jsx)("span", {
                                        className: "text-[#03BFD4]",
                                        children: "browse",
                                      }),
                                      " to choose file",
                                    ],
                                  }),
                                  (0, o.jsx)("p", {
                                    className:
                                      "text-sm font-medium text-[#879095]",
                                    children: "(PDF or TXT) Max 30mb",
                                  }),
                                  (0, o.jsx)("input", {
                                    ref: C,
                                    type: "file",
                                    id: "file-drop",
                                    accept: ".pdf,.txt",
                                    onChange: (e) => {
                                      let o = e.target.files[0];
                                      if (o.size > 3e7) {
                                        alert("File size exceeds 30mb");
                                        return;
                                      }
                                      if (
                                        "application/pdf" !== o.type &&
                                        "text/plain" !== o.type
                                      ) {
                                        alert("File type not supported");
                                        return;
                                      }
                                      let r = (0, h.gQ)(o, (0, h.Vh)(o.name));
                                      l([...t, r]);
                                      let i = [...t, r];
                                      l(i), p && p(i);
                                    },
                                    className: "hidden",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, o.jsx)(a.O, {
                          title: "Input",
                          style: { fontWeight: 600 },
                          children: (0, o.jsxs)(r.x, {
                            gap: "small",
                            style: { borderTop: "3px solid #2F2F2F" },
                            pad: "small",
                            children: [
                              (0, o.jsx)(r.x, {
                                fill: !0,
                                children: (0, o.jsx)(n.K, {
                                  fill: !0,
                                  resize: !1,
                                  name: "exampleData",
                                  value: u,
                                  onChange: (e) => {
                                    g(e.target.value);
                                  },
                                  placeholder:
                                    "Copy & Paste your text here (Website links not supported)",
                                }),
                              }),
                              (0, o.jsx)(r.x, {
                                alignSelf: "end",
                                width: "small",
                                fill: "vertical",
                                children: (0, o.jsx)("button", {
                                  onClick: () => {
                                    let e = new Blob([u], {
                                      type: "text/plain",
                                    });
                                    l([
                                      ...t,
                                      new File(
                                        [e],
                                        "".concat(
                                          u
                                            .slice(0, 30)
                                            .replace(/[^a-zA-Z0-9]/g, "_"),
                                          ".txt"
                                        ),
                                        { type: "text/plain" }
                                      ),
                                    ]),
                                      g("");
                                  },
                                  className:
                                    "self-end px-2 sm:px-[14px] py-2 bg-black border border-white text-center hover:border-customBlue hover:bg-customBlue transition-all duration-300",
                                  disabled: 0 === u.trim().length,
                                  children: "Confirm",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, o.jsx)(a.O, {
                          title: "Links",
                          style: { fontWeight: 600 },
                          children: (0, o.jsxs)(r.x, {
                            gap: "small",
                            style: { borderTop: "3px solid #2F2F2F" },
                            pad: "small",
                            children: [
                              (0, o.jsxs)(r.x, {
                                fill: !0,
                                children: [
                                  (0, o.jsx)(d.o, {
                                    name: "link",
                                    value: f,
                                    onChange: (e) => {
                                      let t = e.target.value;
                                      t.length > 0
                                        ? b(isValidUrlCheck(t))
                                        : b(!0),
                                        w(t);
                                    },
                                    placeholder: "Copy & Paste your link here",
                                  }),
                                  !j &&
                                    (0, o.jsx)(c.x, {
                                      color: "status-critical",
                                      children:
                                        "Invalid URL. Please try again.",
                                    }),
                                ],
                              }),
                              (0, o.jsx)(r.x, {
                                alignSelf: "end",
                                width: "small",
                                fill: "vertical",
                                children: (0, o.jsx)("button", {
                                  onClick: () => {
                                    let e = new Blob([f], {
                                      type: "text/plain",
                                    });
                                    l([
                                      ...t,
                                      new File(
                                        [e],
                                        ""
                                          .concat(x.d3)
                                          .concat(
                                            f
                                              .replace("http://", "")
                                              .replace("https://", "")
                                              .slice(0, 30)
                                              .replaceAll(" ", "")
                                              .trim(),
                                            ".txt"
                                          ),
                                        { type: "text/plain" }
                                      ),
                                    ]),
                                      w("");
                                  },
                                  className:
                                    "self-end px-2 sm:px-[14px] py-2 bg-black border border-white text-center hover:border-customBlue hover:bg-customBlue transition-all duration-300",
                                  disabled: 0 === f.trim().length || !j,
                                  children: "Confirm",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, o.jsx)(r.x, {
              gap: "xsmall",
              margin: { top: "small" },
              children: t.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className:
                      "flex flex-row justify-between text-sm p-4 border border-customGray",
                    children: [
                      (0, o.jsx)("p", { children: (0, h.KU)(e.name) }),
                      (0, o.jsx)("button", {
                        className: "text-[#6C93EC] font-semibold",
                        onClick: () => handleRemove(e),
                        children: "Remove",
                      }),
                    ],
                  },
                  e.name
                )
              ),
            }),
          ],
        });
      };
    },
    12504: function (e, t, l) {
      "use strict";
      l.d(t, {
        k: function () {
          return SecondaryButton;
        },
      });
      var o = l(85893),
        r = l(1958);
      l(67294);
      let SecondaryButton = (e) => {
        let { href: t, disabled: l = !1, ...i } = e;
        return (0, o.jsx)(r.z, {
          secondary: !0,
          onClick: (e) => {
            if (l) {
              e.preventDefault();
              return;
            }
            t && (window.location.href = t);
          },
          disabled: l,
          ...i,
        });
      };
    },
    8821: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return ToasterList;
        },
      });
      var o = l(82729),
        r = l(85893),
        i = l(67294),
        s = l(186),
        a = l(18315);
      function _templateObject() {
        let e = (0, o._)([
          "\n  display: flex;\n  width: 100%;\n  max-width: 292px;\n  max-height: 100px;\n  animation: move 250ms;\n  transition: transform 250ms, opacity 250ms, box-shadow 250ms ease-in-out;\n\n  @keyframes move {\n    from {\n      transform: translateX(100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n",
        ]);
        return (
          (_templateObject = function () {
            return e;
          }),
          e
        );
      }
      let n = {
          error: {
            color: "error",
            toasterIconComponent: (0, r.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                d: "M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97981 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43734 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46927 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77325 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.37799 15.1571C3.75357 13.6496 3.59019 11.9908 3.90852 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32015 5.01259 8.79016 4.22685 10.3905 3.90852C11.9908 3.59019 13.6496 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM11.25 12.75V7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75C12.1989 6.75 12.3897 6.82902 12.5303 6.96967C12.671 7.11032 12.75 7.30109 12.75 7.5V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75ZM13.125 16.125C13.125 16.3475 13.059 16.565 12.9354 16.75C12.8118 16.935 12.6361 17.0792 12.4305 17.1644C12.225 17.2495 11.9988 17.2718 11.7805 17.2284C11.5623 17.185 11.3618 17.0778 11.2045 16.9205C11.0472 16.7632 10.94 16.5627 10.8966 16.3445C10.8532 16.1262 10.8755 15.9 10.9606 15.6945C11.0458 15.4889 11.19 15.3132 11.375 15.1896C11.56 15.066 11.7775 15 12 15C12.2984 15 12.5845 15.1185 12.7955 15.3295C13.0065 15.5405 13.125 15.8266 13.125 16.125Z",
                fill: "#FF4343",
              }),
            }),
          },
          success: {
            color: "success",
            toasterIconComponent: (0, r.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                d: "M16.2806 9.21937C16.3504 9.28903 16.4057 9.37175 16.4434 9.46279C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1217 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57864 13.1399 7.49958 12.949 7.49958 12.75C7.49958 12.551 7.57864 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44902 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.289 9.14964 15.3717 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21937ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46927 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43734 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97981 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6496 3.75357 11.9908 3.59019 10.3905 3.90852C8.79016 4.22685 7.32015 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90852 10.3905C3.59019 11.9908 3.75357 13.6496 4.37799 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77325 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z",
                fill: "#3CD48D",
              }),
            }),
          },
          warning: {
            color: "#4B5458",
            toasterIconComponent: (0, r.jsx)(a.b, { color: "#4B5458" }),
          },
        },
        d = s.default.div.withConfig({ componentId: "sc-f25da40b-0" })(
          _templateObject()
        );
      function Toaster(e) {
        let { type: t, title: l, message: o } = e,
          { color: i, toasterIconComponent: s } = n[t];
        return (0, r.jsx)(d, {
          children: (0, r.jsxs)("div", {
            className:
              "flex flex-col gap-6 w-[292px] p-6 text-[#B0B0B0] bg-[#161616]",
            children: [
              (0, r.jsxs)("div", {
                className: "flex flex-row gap-[10px] items-center",
                children: [
                  s,
                  (0, r.jsx)("p", {
                    className: "font-medium text-[#FDFCFC]",
                    children: l,
                  }),
                ],
              }),
              (0, r.jsx)("p", { className: "text-sm", children: o }),
            ],
          }),
        });
      }
      var c = l(9719);
      function ToasterList_templateObject() {
        let e = (0, o._)([
          "\n  position: fixed;\n  width: 100%;\n  max-width: 292px;\n  max-height: 100vh;\n  top: 80px;\n  right: 24px;\n  z-index: 25;\n  transition: transform 250ms, opacity 250ms, box-shadow 250ms ease-in-out;\n",
        ]);
        return (
          (ToasterList_templateObject = function () {
            return e;
          }),
          e
        );
      }
      let m = s.default.div.withConfig({ componentId: "sc-852a6013-0" })(
        ToasterList_templateObject()
      );
      function ToasterList(e) {
        let { toasts: t } = e,
          l = (0, i.useRef)(null),
          handleScrolling = (e) => {
            null == e || e.scrollTo(0, e.scrollHeight);
          };
        return (
          (0, i.useEffect)(() => {
            handleScrolling(l.current);
          }, [t]),
          (0, r.jsx)(m, {
            ref: l,
            children: (0, r.jsx)(c.x, {
              gap: "small",
              children: t.map((e, t) =>
                (0, i.createElement)(Toaster, { ...e.content, key: t })
              ),
            }),
          })
        );
      }
    },
    46931: function (e, t, l) {
      "use strict";
      l.d(t, {
        Ar: function () {
          return o.A;
        },
        KM: function () {
          return r.K;
        },
      });
      var o = l(35914);
      l(85893), l(11163), l(67294), l(68216);
      var r = l(52074);
      l(12504);
    },
    13952: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return useToaster;
        },
      });
      var o = l(67294);
      function useToaster() {
        let [e, t] = (0, o.useState)([]),
          removeToast = (e) => {
            t((t) => t.filter((t) => t.id !== e));
          };
        return {
          toasts: e,
          addToast: (e) => {
            let l = { id: Date.now(), content: e };
            t((e) => [...e, l]), setTimeout(() => removeToast(l.id), 5e3);
          },
        };
      }
    },
    86382: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return IndexPage;
          },
        });
      var o,
        r,
        i = l(85893),
        s = l(9719),
        a = l(14915),
        n = l(25009),
        d = l(46931),
        c = l(67294),
        m = l(69019),
        x = l(81392),
        h = l(58083),
        p = l(58769),
        u = l(23902),
        g = l(1958),
        f = l(45504),
        w = l(57670),
        j = l(6984),
        b = l(84099),
        C = l(52074),
        v = l(12504),
        y = l(6e4),
        k = l(13096),
        F = l(39904),
        N = l(69253),
        B = l(49921);
      let ModelCreationStepper = (e) => {
        let { selectedStep: t } = e;
        return (0, i.jsxs)(s.x, {
          direction: "row",
          align: "center",
          gap: "medium",
          justify: "center",
          children: [
            (0, i.jsxs)(s.x, {
              background: 1 === t ? "#598BFF" : "white",
              round: "large",
              elevation: 2 === t ? "" : "small",
              border: 1 === t ? { color: "black", size: "small" } : {},
              pad: { horizontal: "medium", vertical: "xsmall" },
              direction: "row",
              align: "center",
              gap: "small",
              children: [
                (0, i.jsx)(N.E, {
                  src: "model/Contribute.png",
                  alt: "contribute",
                }),
                (0, i.jsx)(u.x, {
                  weight: "bold",
                  color: 1 === t ? "white" : "#879095",
                  children: "1. Model Definition",
                }),
              ],
            }),
            (0, i.jsx)(B.M, {}),
            (0, i.jsxs)(s.x, {
              background: 2 === t ? "#598BFF" : "white",
              round: "large",
              elevation: 2 === t ? "" : "small",
              border: 2 === t ? { color: "black", size: "small" } : {},
              pad: { horizontal: "medium", vertical: "xsmall" },
              direction: "row",
              align: "center",
              gap: "small",
              children: [
                (0, i.jsx)(N.E, { src: "model/Reward.png", alt: "rewards" }),
                (0, i.jsx)(u.x, {
                  weight: "bold",
                  color: 2 === t ? "white" : "#879095",
                  children: "2. Receive Rewards",
                }),
              ],
            }),
          ],
        });
      };
      var S = l(8821),
        M = l(13952),
        T = l(80530);
      let StepHeader = (e) => {
        let { isFirst: t, messages: l, icons: o } = e;
        return (0, i.jsxs)(s.x, {
          direction: "row",
          align: "center",
          gap: "medium",
          justify: "center",
          children: [
            (0, i.jsxs)(s.x, {
              background: t ? "#598BFF" : "white",
              round: "large",
              border: t && { color: "black", size: "small" },
              pad: { horizontal: "medium", vertical: "xsmall" },
              direction: "row",
              align: "center",
              gap: "small",
              elevation: t ? "none" : "small",
              children: [
                (0, i.jsx)(N.E, { src: t ? o[0] : o[1], alt: "preview" }),
                (0, i.jsx)(u.x, {
                  weight: "bold",
                  color: t ? "white" : "brand",
                  children: l[0],
                }),
              ],
            }),
            (0, i.jsx)(B.M, {}),
            (0, i.jsxs)(s.x, {
              background: t ? "white" : "#598BFF",
              round: "large",
              border: !t && { color: "black", size: "small" },
              pad: { horizontal: "medium", vertical: "xsmall" },
              direction: "row",
              align: "center",
              gap: "small",
              elevation: t ? "small" : "none",
              children: [
                (0, i.jsx)(N.E, { src: t ? o[2] : o[3], alt: "preview" }),
                (0, i.jsx)(u.x, {
                  weight: "bold",
                  color: t ? "#879095" : "white",
                  children: l[1],
                }),
              ],
            }),
          ],
        });
      };
      var L = l(68216),
        I = l(76472),
        R = l(11163);
      let ModelDefinitionForm = (e) => {
          let {
              value: t,
              setValue: l,
              setErrors: o,
              handleFileChange: r,
              exampleFiles: a,
              setExampleFiles: n,
              errors: d,
            } = e,
            w = [
              "AI",
              "Blockchain",
              "Project discovery",
              "Solidity",
              "Move",
              "Rust",
            ],
            [b, C] = (0, c.useState)([]),
            [v, k] = (0, c.useState)(""),
            [F, N] = (0, c.useState)(w),
            [B, S] = (0, c.useState)(""),
            handleImageChange = (e) => {
              if (e.target.files) {
                let t = e.target.files[0];
                S(URL.createObjectURL(t));
              }
            },
            handleTagsChange = (e) => {
              C(e),
                l({ ...t, tags: e }),
                e.length > 0
                  ? o({ ...d, tags: void 0 })
                  : o({ ...d, tags: "Please add at least one tag" });
            };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(m.l, {
              value: t,
              onChange: l,
              children: (0, i.jsxs)(x.N.Extend, {
                value: {
                  formField: {
                    border: "",
                    content: {
                      margin: { horizontal: "small", vertical: "xsmall" },
                    },
                  },
                },
                children: [
                  (0, i.jsx)(h.W, {
                    label: "Model Name",
                    required: !0,
                    error: d.modelName,
                    children: (0, i.jsx)(p.K, {
                      id: "modelName",
                      name: "modelName",
                      placeholder: "Create your model name here",
                      style: {
                        border: "1px solid #B2BABE",
                        borderRadius: "10px",
                        height: "50px",
                        backgroundColor: "white",
                      },
                      onChange: (e) => {
                        let r = e.target.value;
                        l({ ...t, modelName: r }),
                          "" !== r.trim() && o({ ...d, modelName: void 0 });
                      },
                      value: t.modelName,
                    }),
                  }),
                  (0, i.jsxs)(h.W, {
                    label: "Upload your model icon",
                    children: [
                      (0, i.jsx)(u.x, {
                        size: "xsmall",
                        children: "A stunning icon will attract more users",
                      }),
                      (0, i.jsx)("div", {
                        className: "flex items-start justify-start w-full",
                        children: (0, i.jsxs)("label", {
                          htmlFor: "dropzone-file",
                          className:
                            "w-[80px] h-[80px] rounded-[80px] border-2 border-gray-300 border-dashed cursor-pointer hover:border-gray-400",
                          children: [
                            B
                              ? (0, i.jsx)("img", {
                                  src: B,
                                  alt: "modelIcon",
                                  className: "rounded-[80px] object-cover",
                                })
                              : (0, i.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, i.jsx)("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 22 22",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, i.jsx)("path", {
                                      d: "M20 12.4971H12.5V19.9971C12.5 20.3949 12.342 20.7764 12.0607 21.0577C11.7794 21.339 11.3978 21.4971 11 21.4971C10.6022 21.4971 10.2206 21.339 9.93934 21.0577C9.65804 20.7764 9.5 20.3949 9.5 19.9971V12.4971H2C1.60218 12.4971 1.22064 12.339 0.93934 12.0577C0.658036 11.7764 0.5 11.3949 0.5 10.9971C0.5 10.5992 0.658036 10.2177 0.93934 9.93641C1.22064 9.65511 1.60218 9.49707 2 9.49707H9.5V1.99707C9.5 1.59925 9.65804 1.21771 9.93934 0.93641C10.2206 0.655105 10.6022 0.49707 11 0.49707C11.3978 0.49707 11.7794 0.655105 12.0607 0.93641C12.342 1.21771 12.5 1.59925 12.5 1.99707V9.49707H20C20.3978 9.49707 20.7794 9.65511 21.0607 9.93641C21.342 10.2177 21.5 10.5992 21.5 10.9971C21.5 11.3949 21.342 11.7764 21.0607 12.0577C20.7794 12.339 20.3978 12.4971 20 12.4971Z",
                                      fill: "#879095",
                                    }),
                                  }),
                                }),
                            (0, i.jsx)("input", {
                              id: "dropzone-file",
                              type: "file",
                              name: "modelIcon",
                              onChange: (e) => {
                                r(e), handleImageChange(e);
                              },
                              accept: ".jpg, .jpeg, .png, .svg",
                              className: "hidden",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(h.W, {
                    htmlFor: "description",
                    label: "Description",
                    required: !0,
                    error: d.description,
                    children: [
                      (0, i.jsx)(u.x, {
                        size: "xsmall",
                        children:
                          "Please provide a detailed description of the purpose and functionalities of this model.",
                      }),
                      (0, i.jsx)(p.K, {
                        id: "description",
                        name: "description",
                        maxLength: 8e3,
                        style: {
                          border: "1px solid #B2BABE",
                          borderRadius: "10px",
                          height: "250px",
                          backgroundColor: "white",
                        },
                        onChange: (e) => {
                          let r = e.target.value;
                          l({ ...t, description: r }),
                            "" !== r.trim() && o({ ...d, description: void 0 });
                        },
                        value: t.description,
                      }),
                    ],
                  }),
                  (0, i.jsxs)(h.W, {
                    required: !0,
                    label: "Tags",
                    error: d.tags,
                    children: [
                      b.length > 0 &&
                        (0, i.jsxs)(s.x, {
                          direction: "row-responsive",
                          wrap: !0,
                          align: "center",
                          justify: "start",
                          gap: "small",
                          margin: { bottom: "small" },
                          children: [
                            (0, i.jsxs)(u.x, {
                              size: "14px",
                              margin: { top: "xsmall" },
                              children: [b.length, " of 2"],
                            }),
                            b.map((e, o) =>
                              (0, i.jsxs)(
                                s.x,
                                {
                                  background: "#F2F6FF",
                                  round: "medium",
                                  pad: {
                                    horizontal: "small",
                                    vertical: "xsmall",
                                  },
                                  margin: { top: "xsmall" },
                                  direction: "row",
                                  children: [
                                    (0, i.jsx)(u.x, {
                                      size: "14px",
                                      children: e.trim(),
                                    }),
                                    (0, i.jsx)(g.z, {
                                      size: "small",
                                      plain: !0,
                                      onClick: () => {
                                        C(b.filter((t) => t !== e)),
                                          l({
                                            ...t,
                                            tags: b.filter((t) => t !== e),
                                          }),
                                          handleTagsChange([...b, v]);
                                      },
                                      icon: (0, i.jsx)(j.n, { size: "small" }),
                                    }),
                                  ],
                                },
                                o
                              )
                            ),
                          ],
                        }),
                      (0, i.jsxs)(s.x, {
                        direction: "row",
                        align: "center",
                        gap: "small",
                        children: [
                          (0, i.jsx)(f.o, {
                            disabled: b.length >= 2,
                            type: "search",
                            suggestions: F.filter((e) => !b.includes(e)),
                            placeholder: "Add tags...",
                            onSuggestionSelect: (e) => {
                              b.length >= 2 ||
                                (C([...b, e.suggestion]),
                                l({ ...t, tags: [...b, e.suggestion] }),
                                k(""),
                                handleTagsChange([...b, e.suggestion]));
                            },
                            value: v,
                            onChange: (e) => {
                              k(e.target.value);
                              let t = e.target.value;
                              if ((l(t), t)) {
                                let e = new RegExp("^".concat(t));
                                N(w.filter((t) => e.test(t)));
                              } else N(w);
                            },
                            style: {
                              border: "1px solid #B2BABE",
                              borderRadius: "10px",
                              height: "50px",
                              backgroundColor: "white",
                            },
                          }),
                          (0, i.jsx)(g.z, {
                            size: "small",
                            label: "Add",
                            disabled: !v,
                            onClick: () => {
                              C([...b, v]),
                                l({ ...t, tags: [...b, v] }),
                                k(""),
                                console.log("Add tag:", t.tags),
                                handleTagsChange([...b, v]);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)(h.W, {
                    label: "Data required",
                    required: !0,
                    error: d.dataRequired,
                    children: [
                      (0, i.jsx)(u.x, {
                        size: "xsmall",
                        children:
                          "The description of datasources requirements. For example, you expect the data to be Web3 related tweets from Twitter or crypto market news from Google search.",
                      }),
                      (0, i.jsx)(p.K, {
                        style: {
                          border: "1px solid #B2BABE",
                          borderRadius: "10px",
                          height: "250px",
                          backgroundColor: "white",
                        },
                        id: "dataRequired",
                        name: "dataRequired",
                        maxLength: 8e3,
                        onChange: (e) => {
                          let r = e.target.value;
                          l({ ...t, dataRequired: r }),
                            "" !== r.trim() &&
                              o({ ...d, dataRequired: void 0 });
                        },
                        value: t.dataRequired,
                      }),
                    ],
                  }),
                  (0, i.jsx)(h.W, {
                    label: "Example knowledge",
                    required: !0,
                    error: d.ExampleKnowledge,
                    children: (0, i.jsxs)(s.x, {
                      children: [
                        (0, i.jsx)(u.x, {
                          size: "xsmall",
                          children:
                            "Please give three examples (text, PDF, txt files) for the type of knowledge your model requires.",
                        }),
                        (0, i.jsx)(y.Z, {
                          files: a,
                          setFiles: n,
                          onFilesChange: (e) => {
                            n(e),
                              l({ ...t, exampleFiles: e }),
                              e.length >= 3
                                ? o({ ...d, exampleKnowledge: void 0 })
                                : o({
                                    ...d,
                                    exampleKnowledge:
                                      "Please upload at least three files",
                                  });
                          },
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        ReceiveRewardsPage = (e) => {
          let { setShowCreateModel: t } = e,
            l = (0, R.useRouter)();
          return (0, i.jsx)(s.x, {
            fill: !0,
            align: "center",
            justify: "center",
            children: (0, i.jsxs)(s.x, {
              width: "medium",
              pad: "medium",
              gap: "small",
              align: "center",
              background: "light-1",
              round: "small",
              elevation: "small",
              style: { position: "relative" },
              children: [
                (0, i.jsx)(s.x, {
                  align: "end",
                  style: { position: "absolute", right: 5, top: 5 },
                  onClick: () => {
                    t(!1);
                  },
                  children: (0, i.jsx)(j.n, {}),
                }),
                (0, i.jsx)(a.$, { color: "black", size: "medium" }),
                (0, i.jsx)(w.X, {
                  level: "3",
                  weight: "bolder",
                  children:
                    "After your model passes the verification, you will receive",
                }),
                (0, i.jsx)(s.x, {
                  style: {
                    display: "inline-block",
                    backgroundColor: "#F2F6FF",
                    borderRadius: "40px",
                    padding: "10px 24px",
                    margin: "10px 0",
                  },
                  children: (0, i.jsxs)(w.X, {
                    level: "3",
                    color: "#6C93EC",
                    weight: "bolder",
                    children: ["+", T.p9.REWARD_FOR_MODEL_CREATION, " Points"],
                  }),
                }),
                (0, i.jsx)(s.x, {
                  children: (0, i.jsx)(u.x, {
                    textAlign: "center",
                    children:
                      "This process will take approximately 10 minutes to 1 hour.",
                  }),
                }),
                (0, i.jsx)(g.z, {
                  primary: !0,
                  label: "Go to my models",
                  style: {
                    width: "300px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    border: "2px solid black",
                    borderRadius: "40px",
                    backgroundColor: "#598BFF",
                    color: "white",
                  },
                  onClick: () => l.push("/myModels"),
                }),
              ],
            }),
          });
        };
      ((o = r || (r = {}))[(o.CreateView = 0)] = "CreateView"),
        (o[(o.PendingView = 1)] = "PendingView"),
        (o[(o.ConfirmedView = 2)] = "ConfirmedView"),
        (o[(o.SuccessView = 3)] = "SuccessView"),
        (o[(o.FailureView = 4)] = "FailureView");
      let E = {
          width: "300px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",
          border: "2px solid black",
          borderRadius: "40px",
        },
        P = {
          display: "inline-block",
          backgroundColor: "#F2F6FF",
          borderRadius: "40px",
          padding: "10px 24px",
          margin: "10px 0",
        },
        CreateModel = (e) => {
          let t,
            { setShowCreateModel: l } = e,
            [o, r] = (0, c.useState)({}),
            [a, n] = (0, c.useState)({}),
            [d, m] = (0, c.useState)(!1),
            [x, h] = (0, c.useState)(0),
            { address: p, isConnected: f } = (0, c.useContext)(L.w),
            { signature: y, timestamp: N } = (0, c.useContext)(I.J),
            [B, A] = (0, c.useState)(null),
            [z, D] = (0, c.useState)([]),
            [O, W] = (0, c.useState)([, , ,].fill("")),
            [V, _] = (0, c.useState)(),
            [q, Z] = (0, c.useState)(),
            resetFormState = () => {
              r({}), n({}), A(null), D([]), W([, , ,].fill(""));
            };
          (0, k.Z)(
            F.Hi,
            (e) => {
              h(2);
            },
            window
          );
          let getModelData = async (e) => {
            let t = await fetch("/api/rag/getModel?modelId=".concat(e)),
              l = await t.json();
            if (l.error) {
              console.log(l.error);
              return;
            }
            Z(l),
              "SUCCESS" === l.dataValidationStatus
                ? h(3)
                : "FAILURE" === l.dataValidationStatus && h(4);
          };
          (0, c.useEffect)(() => {
            2 === x && V && getModelData(V);
          }, [x, V]);
          let checkVerificationResult = async (e, t, l) => {
              await fetch("/api/rag/verifyContributionToMlBackend", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(y),
                },
                body: JSON.stringify({
                  auth_key: N,
                  modelId: e,
                  contributionID: t,
                  fileName: l,
                }),
              });
            },
            delay = (e) => new Promise((t) => setTimeout(t, e)),
            { toasts: J, addToast: X } = (0, M.Z)(),
            showToaster = (e) => {
              let { toast: t } = e;
              return X(t);
            },
            { walletType: G } = (0, c.useContext)(L.w),
            handleComplete = async () => {
              m(!0);
              let e = {},
                t = !1;
              if (
                (o.modelName ||
                  ((e.modelName = "Model name is required"), (t = !0)),
                o.description ||
                  ((e.description = "Description is required"), (t = !0)),
                o.dataRequired ||
                  ((e.dataRequired = "Data required is required"), (t = !0)),
                (o.tags && 0 !== o.tags.length) ||
                  ((e.tags = "Tags are required"), (t = !0)),
                z.length < 3 &&
                  ((e.ExampleKnowledge = "At least 3 examples are required"),
                  (t = !0)),
                n(e),
                t)
              ) {
                showToaster({
                  toast: {
                    type: "warning",
                    title: "Warning",
                    message:
                      "Please fill in all the required fields to continue.",
                  },
                }),
                  m(!1);
                return;
              }
              if (!p) {
                console.error("User address is not available.");
                return;
              }
              try {
                let e;
                let t = null == B ? void 0 : B.name,
                  l = !0;
                if (t) {
                  let o = await fetch("../api/rag/uploadPublic", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(y),
                      },
                      body: JSON.stringify({ auth_key: N, filename: t }),
                    }),
                    r = await o.json(),
                    { url: i, fields: s } = r,
                    a = new FormData();
                  Object.keys(s).forEach((e) => {
                    a.append(e, s[e]);
                  }),
                    a.append("file", B);
                  let n = await fetch(i, { method: "POST", body: a });
                  n.ok ? (e = "".concat(i).concat(s.key)) : (l = !1);
                } else {
                  let t = await fetch(
                      "../api/rag/generateImage?topic=" + o.modelName,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer ".concat(y),
                        },
                        body: JSON.stringify({ auth_key: N }),
                      }
                    ),
                    r = await t.json();
                  t.ok ? (e = r.modelIconPath) : (l = !1);
                }
                if (l) {
                  let t = await fetch("/api/rag/defineModel", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(y),
                      },
                      body: JSON.stringify({
                        auth_key: N,
                        userId: null == p ? void 0 : p.toLowerCase(),
                        modelName: o.modelName,
                        modelIcon: o.modelIcon,
                        description: o.description,
                        tags: o.tags.join(","),
                        dataRequired: o.dataRequired,
                        modelIconPath: e,
                        wallet_type: G,
                      }),
                    }),
                    l = await t.json();
                  if (t.ok) {
                    console.log("Model added successfully:", l), _(l.model.id);
                    let e = [],
                      t = [];
                    for (let o = 0; o < z.length; o++) {
                      let r = z[o],
                        i = await fetch("../api/rag/upload", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(y),
                          },
                          body: JSON.stringify({
                            auth_key: N,
                            filename: r.name,
                          }),
                        }),
                        s = await i.json();
                      if (!i.ok) {
                        console.error("Error uploading file to S3:", s.message);
                        continue;
                      }
                      console.log(
                        "Post request sent to upload successfully",
                        s
                      );
                      let a = s.url,
                        n = s.fields;
                      t[o] = n.key;
                      let d = new FormData();
                      Object.keys(n).forEach((e) => {
                        d.append(e, n[e]);
                      }),
                        d.append("file", r),
                        console.log(d.get("file"));
                      let c = await fetch(a, { method: "POST", body: d });
                      if (
                        (console.log("responseFromS3", c),
                        console.log("fields", n),
                        !c.ok)
                      ) {
                        console.error(
                          "Error uploading real file to S3:",
                          s.message
                        );
                        continue;
                      }
                      console.log("File uploaded to S3 successfully"),
                        (e[o] = await fetch("../api/rag/postContribution", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(y),
                          },
                          body: JSON.stringify({
                            auth_key: N,
                            userId: null == p ? void 0 : p.toLowerCase(),
                            modelId: l.model.id,
                            filePath: n.key,
                            walletType: G,
                          }),
                        }));
                    }
                    for (let o = 0; o < z.length; o++) {
                      let r = z[o],
                        i = e[o],
                        s = t[o],
                        a = await i.json();
                      if (i.ok) {
                        await checkVerificationResult(
                          l.model.id,
                          a.dataContribution.id,
                          s
                        ),
                          console.log("Contribution added successfully:", a);
                        let e = 0,
                          t = !1;
                        for (; e < 10 && !t; )
                          try {
                            let l = await fetch(
                                "/api/rag/getModel?modelId=".concat(
                                  a.dataContribution.modelId
                                )
                              ),
                              o = await l.json();
                            if (!l.ok)
                              throw Error(
                                "Error fetching model: ".concat(o.message)
                              );
                            let i = r.name;
                            console.log("modelData", o),
                              console.log("filePath", i);
                            let s = [...o.exampleKnowledge, i],
                              n = o.version,
                              d = await fetch("/api/rag/updateModel", {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: "Bearer ".concat(y),
                                },
                                body: JSON.stringify({
                                  auth_key: N,
                                  modelId: o.id,
                                  exampleKnowledge: s,
                                  version: n,
                                }),
                              }),
                              c = await d.json();
                            if (d.ok)
                              console.log(
                                "Model updated successfully with new exampleKnowledge",
                                c
                              ),
                                (t = !0);
                            else if ("Version mismatch" === c.message)
                              await delay(5e3), e++;
                            else
                              throw Error(
                                "Error updating model: ".concat(c.message)
                              );
                          } catch (t) {
                            if (
                              (console.error("Error:", t),
                              await delay(5e3),
                              e >= 9)
                            )
                              break;
                            e++;
                          }
                        if (t)
                          try {
                            let e = await fetch(
                                "/api/rag/addDataContributionToModel",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer ".concat(y),
                                  },
                                  body: JSON.stringify({
                                    auth_key: N,
                                    modelId: l.model.id,
                                    dataContributionId: a.dataContribution,
                                  }),
                                }
                              ),
                              t = await e.json();
                            e.ok
                              ? (console.log(
                                  "Called addDataContributionToModel API successfully:",
                                  t
                                ),
                                m(!1),
                                h(1))
                              : console.error(
                                  "Error adding data contribution:",
                                  t.message
                                );
                          } catch (e) {
                            console.error("Error:", e);
                          }
                        else
                          console.error(
                            "Failed to update model after retries."
                          );
                      } else
                        console.error("Error adding contribution:", a.message);
                    }
                  } else console.error("Error adding model:", l.message);
                }
              } catch (e) {
                console.error("Error:", e), m(!1);
              }
            };
          o.modelName &&
            o.description &&
            o.dataRequired &&
            (O.filter((e) => "" !== e.trim()).length, z.length),
            Object.keys(a).length;
          let U = (0, R.useRouter)();
          return (
            (t = f
              ? 0 === x
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(S.Z, { toasts: J }),
                      (0, i.jsxs)(s.x, {
                        children: [
                          (0, i.jsx)(s.x, {
                            pad: { bottom: "large" },
                            children: (0, i.jsx)(StepHeader, {
                              isFirst: !0,
                              messages: [
                                "1. Model Definition",
                                "2. Receive Rewards",
                              ],
                              icons: [
                                "model/Contribute.png",
                                "/static/images/blueTick.png",
                                "model/Reward.png",
                                "model/WhiteReward.png",
                              ],
                            }),
                          }),
                          (0, i.jsx)(ModelDefinitionForm, {
                            value: o,
                            errors: a,
                            setErrors: n,
                            setValue: r,
                            selectedFile: A,
                            handleFileChange: (e) => {
                              if (
                                "modelIcon" === e.target.name &&
                                e.target.files
                              ) {
                                A(e.target.files[0]);
                                return;
                              }
                              if (
                                e.target.name.startsWith("fileInput") &&
                                e.target.files
                              ) {
                                let t = Array.from(e.target.files);
                                D((e) => [...e, ...t]);
                              }
                            },
                            exampleTexts: O,
                            handleTextChange: (e) => {
                              let t =
                                  parseInt(
                                    e.target.name.replace("exampleData", "")
                                  ) - 1,
                                l = [...O];
                              (l[t] = e.target.value), W(l);
                            },
                            handleComplete: handleComplete,
                            setShowCreateModel: l,
                            exampleFiles: z,
                            setExampleFiles: D,
                            isProcessing: d,
                          }),
                          (0, i.jsxs)(s.x, {
                            direction: "row",
                            justify: "end",
                            gap: "medium",
                            pad: { bottom: "medium" },
                            margin: { top: "medium", bottom: "large" },
                            children: [
                              (0, i.jsx)(s.x, {
                                margin: { bottom: "medium" },
                                pad: { bottom: "large" },
                                children: (0, i.jsx)(v.k, {
                                  label: "Cancel",
                                  onClick: () => l(!1),
                                }),
                              }),
                              (0, i.jsx)(s.x, {
                                children: (0, i.jsx)(C.K, {
                                  label: "Create",
                                  busy: d,
                                  onClick: handleComplete,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : 1 === x
                ? (0, i.jsxs)(s.x, {
                    children: [
                      (0, i.jsx)(s.x, {
                        pad: { bottom: "large" },
                        children: (0, i.jsx)(StepHeader, {
                          isFirst: !1,
                          messages: [
                            "1. Model Definition",
                            "2. Receive Rewards",
                          ],
                          icons: [
                            "model/Contribute.png",
                            "/static/images/blueTick.png",
                            "model/Reward.png",
                            "model/WhiteReward.png",
                          ],
                        }),
                      }),
                      (0, i.jsx)(ReceiveRewardsPage, {
                        setStep: h,
                        setErrors: n,
                        setValue: r,
                        setSelectedFile: A,
                        setExampleFiles: D,
                        setExampleTexts: W,
                        setShowCreateModel: l,
                      }),
                    ],
                  })
                : 3 === x && q
                ? (0, i.jsxs)(s.x, {
                    children: [
                      (0, i.jsx)(s.x, {
                        pad: { bottom: "large" },
                        children: (0, i.jsx)(ModelCreationStepper, {
                          selectedStep: 2,
                        }),
                      }),
                      (0, i.jsx)(s.x, {
                        fill: !0,
                        align: "center",
                        justify: "center",
                        children: (0, i.jsxs)(s.x, {
                          width: "medium",
                          pad: "medium",
                          gap: "small",
                          align: "center",
                          background: "light-1",
                          round: "small",
                          elevation: "small",
                          style: { position: "relative" },
                          children: [
                            (0, i.jsx)(s.x, {
                              align: "end",
                              style: { position: "absolute", right: 5, top: 5 },
                              onClick: () => l(!1),
                              children: (0, i.jsx)(j.n, {}),
                            }),
                            (0, i.jsx)(w.X, {
                              level: "3",
                              weight: "bolder",
                              children: "Verification succeeded!",
                            }),
                            (0, i.jsx)(s.x, {
                              children: (0, i.jsx)(u.x, {
                                textAlign: "center",
                                color: "#879095",
                                children: "You have been awarded",
                              }),
                            }),
                            (0, i.jsx)(s.x, {
                              style: P,
                              children: (0, i.jsxs)(w.X, {
                                level: "3",
                                color: "#6C93EC",
                                weight: "bolder",
                                children: [
                                  "+",
                                  T.p9.REWARD_FOR_MODEL_CREATION,
                                  " Points",
                                ],
                              }),
                            }),
                            (0, i.jsx)(g.z, {
                              primary: !0,
                              label: "Go to my models",
                              style: {
                                ...E,
                                backgroundColor: "#598BFF",
                                color: "white",
                              },
                              onClick: () => U.push("/myModels"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : 4 === x && q
                ? (0, i.jsxs)(s.x, {
                    children: [
                      (0, i.jsx)(s.x, {
                        pad: { bottom: "large" },
                        children: (0, i.jsx)(ModelCreationStepper, {
                          selectedStep: 2,
                        }),
                      }),
                      (0, i.jsx)(s.x, {
                        fill: !0,
                        align: "center",
                        justify: "center",
                        children: (0, i.jsxs)(s.x, {
                          width: "medium",
                          pad: "medium",
                          gap: "small",
                          align: "center",
                          background: "light-1",
                          round: "small",
                          elevation: "small",
                          style: { position: "relative" },
                          children: [
                            (0, i.jsx)(s.x, {
                              align: "end",
                              style: { position: "absolute", right: 5, top: 5 },
                              onClick: () => l(!1),
                              children: (0, i.jsx)(j.n, {}),
                            }),
                            (0, i.jsx)(w.X, {
                              level: "3",
                              weight: "bolder",
                              children: "Verification failed!",
                            }),
                            (0, i.jsx)(s.x, {
                              children: (0, i.jsx)(u.x, {
                                textAlign: "center",
                                children:
                                  "Please review the guidelines to recreate your model.",
                              }),
                            }),
                            (0, i.jsx)(g.z, {
                              primary: !0,
                              label: "Recreate",
                              style: {
                                ...E,
                                backgroundColor: "#598BFF",
                                color: "white",
                              },
                              onClick: () => {
                                resetFormState(), h(0);
                              },
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : null
              : (0, i.jsx)(s.x, {
                  width: "100%",
                  gap: "medium",
                  pad: "medium",
                  align: "end",
                  children: (0, i.jsx)(s.x, {
                    background: "white",
                    round: "small",
                    pad: "medium",
                    children: (0, i.jsx)(w.X, {
                      level: "3",
                      margin: "none",
                      children: "Connect wallet to continue",
                    }),
                  }),
                })),
            (0, i.jsx)(s.x, {
              overflow: "auto",
              pad: "medium",
              background: "#F8FAFB",
              fill: !0,
              children: (0, i.jsxs)(s.x, {
                gap: "large",
                fill: !0,
                children: [
                  (0, i.jsxs)(s.x, {
                    direction: "row",
                    align: "center",
                    alignSelf: "start",
                    onClick: () => l(!1),
                    children: [
                      (0, i.jsx)(b.x, { size: "medium", color: "lightblue" }),
                      (0, i.jsx)(u.x, { weight: "bold", children: "Back" }),
                    ],
                  }),
                  (0, i.jsx)(s.x, {
                    pad: { horizontal: "xlarge", vertical: "small" },
                    direction: "column",
                    align: "center",
                    justify: "start",
                    children: t,
                  }),
                ],
              }),
            })
          );
        },
        validateToken = async (e) => {
          let t = await fetch("/api/validateRecaptchaToken", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: e }),
            }),
            l = await t.json();
          return l.valid;
        };
      var A = l(69498);
      let ReCaptchaPageView = () => {
        let { push: e } = (0, R.useRouter)(),
          [t, l] = (0, c.useState)(),
          handleTokenValidation = async (t) => {
            let l = await validateToken(t);
            l || (console.error("Invalid token"), e("/"));
          };
        return (
          (0, c.useEffect)(() => {
            t && handleTokenValidation(t);
          }, [t]),
          (0, i.jsx)(A.ee, { onValidate: l, action: "page_view" })
        );
      };
      l(85035);
      var z = l(10615),
        D = l(70021),
        O = l(41664),
        W = l.n(O);
      let CarouselCard = (e) => {
          let {
            title: t,
            description: l,
            tags: o,
            image: r,
            link: s,
            outlineColor: a,
          } = e;
          return (0, i.jsx)("div", {
            className: "mx-0 sm:mx-6 md:mx-2",
            children: (0, i.jsx)("a", {
              href: "" !== s ? s : void 0,
              children: (0, i.jsxs)("div", {
                className:
                  "w-full flex flex-col sm:flex-row border border-borderWhite hover:border-customBlue bg-bgGray hover:bg-[#3773FF1A] transition-all duration-300 flex-shrink-0 cursor-pointer p-6 gap-4 sm:gap-0 sm:h-[220px]",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-full sm:w-fit h-full items-center",
                    children: (0, i.jsx)("img", {
                      src: r,
                      style: { backgroundColor: a },
                      alt: "icon",
                      className: "object-contain w-full sm:w-[169px] h-[169px]",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col justify-between text-textWhite text-start sm:pl-4 w-full sm:w-2/3",
                    children: [
                      (0, i.jsx)("h3", {
                        className: "text-[22px] text-textWhite",
                        children: t,
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-base pt-4 sm:pt-0 font-normal text-[#B0B0B0]",
                        children: l,
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "flex flex-col leading-3 pt-4 sm:pt-0 sm:flex-row gap-2 sm:gap-4",
                        children: o
                          .slice(0, 2)
                          .map((e, t) =>
                            (0, i.jsx)(
                              "div",
                              {
                                className: "bg-[#2F2F2F] py-[6px] px-2 w-fit",
                                children: (0, i.jsx)("p", {
                                  className: "text-[12px] text-textWhite",
                                  children: e,
                                }),
                              },
                              t
                            )
                          ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ModelCard = (e) => {
          let {
              title: t,
              description: l,
              tag: o,
              image: r,
              link1: s,
              link2: a,
              colorSpec: n,
              callBack: d,
            } = e,
            c = n.split("/-/")[0],
            m = n.split("/-/")[1];
          return (0, i.jsxs)("div", {
            className: "flex flex-col border border-borderWhite",
            children: [
              (0, i.jsxs)("div", {
                style: { backgroundColor: c, backgroundImage: m },
                className: "flex items-center h-48 relative",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex absolute py-[19px] px-[25px] top-0 left-0 flex-row justify-between w-full",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "flex px-[7px] py-1 h-fit bg-[#2F2F2F] text-[#FDFCFC] text-[10px] leading-3 font-normal border-[0.7px] border-[#FDFCFC]",
                        children: o.toLocaleUpperCase(),
                      }),
                      (0, i.jsxs)("div", {
                        onClick: () => d(a || s),
                        className:
                          "cursor-pointer flex flex-col items-end group",
                        children: [
                          (0, i.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "29",
                            height: "29",
                            viewBox: "0 0 29 29",
                            fill: "none",
                            children: [
                              (0, i.jsx)("rect", {
                                width: "29",
                                height: "29",
                                fill: "#2F2F2F",
                              }),
                              (0, i.jsx)("path", {
                                d: "M12.3027 17.0261L17.905 11.4238M17.905 11.4238H12.9252M17.905 11.4238V16.4036",
                                stroke: "#FDFCFC",
                                strokeWidth: "1.24495",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "mt-1 hidden group-hover:block bg-[#2F2F2F] text-[#FDFCFC] text-[10px] leading-3 px-[7px] py-1 font-normal",
                            children: "VIEW MODEL SOURCE",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("img", {
                    src: r,
                    alt: "icon",
                    className: "object-contain w-full h-32",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col h-32 py-[19px] px-[25px] gap-1 bg-[#FFFFFF0A]",
                children: [
                  (0, i.jsx)("p", {
                    className:
                      "text-xl sm:text-[25px] font-medium line-clamp-1 text-white",
                    children: t,
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-row justify-between",
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "text-base sm:text-lg font-normal w-[75%] line-clamp-2 text-[#B0B0B0]",
                        children: l,
                      }),
                      (0, i.jsx)("div", {
                        onClick: () => d(s),
                        className:
                          "self-end cursor-pointer h-[46px] w-[46px] flex items-center justify-center border border-white hover:border-customBlue hover:bg-customBlue transition-all duration-300",
                        children: (0, i.jsx)("svg", {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 20 20",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, i.jsx)("path", {
                            d: "M6.62521 7.94643H9.91092M6.62521 10.8214H12.3752M9.91092 17.3929C13.9939 17.3929 17.3038 14.083 17.3038 10C17.3038 5.91704 13.9939 2.60714 9.91092 2.60714C5.82796 2.60714 2.51807 5.91704 2.51807 10C2.51807 10.9834 2.71006 11.9219 3.05862 12.7801C3.12533 12.9444 3.15868 13.0265 3.17356 13.0929C3.18812 13.1579 3.19344 13.2059 3.19345 13.2725C3.19346 13.3405 3.18111 13.4146 3.15641 13.5628L2.66931 16.4854C2.61831 16.7914 2.5928 16.9444 2.64026 17.0551C2.6818 17.1519 2.75898 17.2291 2.85583 17.2707C2.96648 17.3181 3.1195 17.2926 3.42555 17.2416L6.3481 16.7545C6.49632 16.7298 6.57042 16.7175 6.63846 16.7175C6.70501 16.7175 6.75307 16.7228 6.81801 16.7374C6.8844 16.7522 6.96653 16.7856 7.13079 16.8523C7.98903 17.2009 8.92756 17.3929 9.91092 17.3929Z",
                            stroke: "white",
                            strokeWidth: "1.64286",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        V = [
          {
            createdAt: new Date(),
            updatedAt: new Date(),
            id: "cls3bm1yf00017drv1rv2p137",
            modelName: "Bitcoin GPT",
            shortDescription: "",
            description:
              "The platform with incentivized collaboration, enabling easy integration of external data and enhancing domain-specific LLM accuracy through Retrieval-Augmented Generation technology.",
            tags: "Contribute to earn points,Contribute to additional incentives",
            modelIcon:
              "https://sagfodibrxntykfiwcaa.supabase.co/storage/v1/object/sign/model-images/Bitcoin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb2RlbC1pbWFnZXMvQml0Y29pbi5wbmciLCJpYXQiOjE3MjU2MjY3MjMsImV4cCI6MjA0MDk4NjcyM30.WYn05yJWKLodGgKClac0mujicxZnid6c8JyS_bfS9X4&t=2024-09-06T12%3A45%3A23.848Z",
            colorSpec: "#F5B300",
            hgLink: "",
            chatLink: "/model/cls3bm1yf00017drv1rv2p137",
            examplePrompts: "",
          },
          {
            createdAt: new Date(),
            updatedAt: new Date(),
            id: "cls4frht2000njy824nn3c7g5",
            modelName: "Ethereum GPT",
            shortDescription: "",
            description:
              "Ethereum GPT is an open knowledge question-and-answer data model. We welcome you to join our community and explore the future of intelligent conversations together.",
            tags: "Blockchain",
            modelIcon:
              "https://sagfodibrxntykfiwcaa.supabase.co/storage/v1/object/sign/model-images/Ethereum%20GPT.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb2RlbC1pbWFnZXMvRXRoZXJldW0gR1BULnBuZyIsImlhdCI6MTcyNDIyOTMyNCwiZXhwIjoyMDM5NTg5MzI0fQ.zN3qo163ZWSK9L27aVYnAEXj0giHbqMnuH4ddvqk5Wk&t=2024-08-21T08%3A35%3A24.739Z",
            colorSpec: "#000000",
            hgLink: "",
            chatLink: "/model/cls4frht2000njy824nn3c7g5",
            examplePrompts: "",
          },
          {
            createdAt: new Date(),
            updatedAt: new Date(),
            id: "cls4fv9ev0019jy82egcigw4a",
            modelName: "Scroll GPT",
            shortDescription: "",
            description:
              "Scroll GPT is an open knowledge question-and-answer data model. We welcome you to join our community and explore the future of intelligent conversations together.",
            tags: "Blockchain",
            modelIcon:
              "https://sagfodibrxntykfiwcaa.supabase.co/storage/v1/object/sign/model-images/Scroll%20GPT.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb2RlbC1pbWFnZXMvU2Nyb2xsIEdQVC5wbmciLCJpYXQiOjE3MjQyMjkzNTAsImV4cCI6MjAzOTU4OTM1MH0.h9135d7lg7xx-FYDb1VGzhdqGB_FRdwVEW0Xt2xX-yk&t=2024-08-21T08%3A35%3A51.005Z",
            colorSpec: "#FFEEDA",
            hgLink: "",
            chatLink: "/model/cls4fv9ev0019jy82egcigw4a",
            examplePrompts: "",
          },
        ],
        _ = [
          "AI Assistant",
          "Community Co-Creation",
          "Web3 Agent",
          "AI Companion",
        ];
      function CoCreationPage() {
        let [e, t] = (0, c.useState)(!1),
          [l, o] = (0, c.useState)(!1),
          {
            isConnected: r,
            openWalletModal: m,
            address: x,
          } = (0, c.useContext)(L.w),
          [h, p] = (0, c.useState)(""),
          [u, g] = (0, c.useState)([]),
          [f, w] = (0, c.useState)(!1),
          [j, b] = (0, c.useState)(0),
          C = (0, R.useRouter)(),
          checkWalletConnectionBeforeRedirect = (e) => {
            r ? C.push(e) : m();
          },
          fetchTasks = async (e) => {
            let t = await fetch(
              "/api/rag/getFLockModels?skip=".concat((e - 1) * 30),
              { method: "GET", headers: { "Content-Type": "application/json" } }
            );
            if (!t.ok) throw Error("Failed to fetch data");
            let l = await t.json(),
              o = l.models.map((e) => ({
                id: e.id,
                modelName: e.modelName,
                shortDescription: e.shortDescription,
                description: e.description,
                tags: e.tags,
                modelIcon: e.modelIcon,
                colorSpec: e.colorSpec,
                hgLink: e.hgLink,
                chatLink: e.chatLink,
                createdAt: new Date(e.createdAt),
                updatedAt: new Date(e.updatedAt),
              }));
            return {
              items: o,
              meta: { currentPage: e, totalItems: l.total, pageSize: 30 },
            };
          },
          {
            data: v,
            isError: y,
            fetchNextPage: k,
            hasNextPage: F,
            isPending: N,
            isFetchingNextPage: B,
          } = (0, D.N)({
            queryKey: ["models"],
            queryFn: (e) => fetchTasks(e.pageParam),
            initialPageParam: 1,
            getNextPageParam: (e, t) => {
              if (e.meta.currentPage * e.meta.pageSize < e.meta.totalItems)
                return e.meta.currentPage + 1;
            },
          }),
          S =
            (null == v
              ? void 0
              : v.pages
                  .reduce((e, t) => {
                    let { items: l } = t;
                    return [...e, ...l];
                  }, [])
                  .filter(
                    (e) =>
                      0 === u.length ||
                      u.some((t) => {
                        var l;
                        return null === (l = e.tags) || void 0 === l
                          ? void 0
                          : l.toLocaleLowerCase().split(",").includes(t);
                      })
                  )
                  .filter(
                    (e) =>
                      "" === h ||
                      e.modelName.toLowerCase().includes(h.toLowerCase()) ||
                      e.shortDescription.toLowerCase().includes(h.toLowerCase())
                  )) || [],
          trimText = (e, t) => (e.length > t ? e.substring(0, t) + "..." : e);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(ReCaptchaPageView, {}),
            (0, i.jsxs)(d.Ar, {
              children: [
                (0, i.jsxs)(s.x, {
                  justify: "center",
                  alignSelf: "center",
                  width: "full",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "w-full sm:h-[90vh] flex justify-center bg-homePageMobile sm:bg-homePageMain bg-no-repeat bg-cover bg-center",
                      children: (0, i.jsxs)("div", {
                        className:
                          "w-[90%] sm:w-5/6 pt-[440px] sm:pt-80 pb-10 sm:pb-20 relative",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "text-black space-y-4 sm:space-y-8",
                            children: [
                              (0, i.jsx)("h1", {
                                className:
                                  "hidden sm:block text-[55px] sm:text-[80px] text-white font-medium text-start sm:leading-[60px]",
                                children: "FLock Model Store",
                              }),
                              (0, i.jsx)("h1", {
                                className:
                                  "block sm:hidden text-[55px] sm:text-[80px] text-white font-medium text-start",
                                children: "FLock",
                              }),
                              (0, i.jsx)("h1", {
                                className:
                                  "block sm:hidden text-[55px] sm:text-[80px] pt-2 text-white font-medium text-start",
                                children: "Model Store",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-sm sm:text-lg font-normal text-[#B0B0B0] pt-2 sm:w-1/2 text-start",
                                children:
                                  "A hub for the FLock model ecosystem, the Model Store platform makes it easy to explore, contribute to, and use models trained on FLock.",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex flex-row gap-4 sm:gap-5 mt-8 sm:mt-10",
                            children: [
                              (0, i.jsx)(W(), {
                                href: "https://app.uniswap.org",
                                className:
                                  "px-2 sm:px-[14px] py-2 bg-black border border-white text-center hover:border-customBlue hover:bg-customBlue transition-all duration-300",
                                children: "$Buy Point",
                              }),
                              (0, i.jsx)("button", {
                                className:
                                  "px-2 sm:px-[14px] py-2 bg-black border border-white text-center hover:border-customBlue hover:bg-customBlue transition-all duration-300",
                                onClick: () => {
                                  let e =
                                    document.getElementById("models-showcase");
                                  null == e ||
                                    e.scrollIntoView({ behavior: "smooth" });
                                },
                                children: "Explore Our Models",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex flex-row text-[#212121] items-center text-sm sm:text-base gap-2 sm:gap-3 mt-4 sm:mt-10",
                            children: [
                              (0, i.jsx)("p", {
                                className: "text-[#B0B0B0]",
                                children: "Wanted to train with FLock?",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "w-full flex flex-col items-center mt-8 sm:mt-32 pb-20 sm:bg-homePageDefault bg-no-repeat bg-cover bg-center",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "w-[90%] sm:w-5/6 text-white flex flex-row",
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex flex-col space-y-1 sm:space-y-6 w-full text-start",
                            children: [
                              (0, i.jsxs)("h3", {
                                className:
                                  "text-[28px] sm:text-5xl text-[#FDFCFC]",
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "bg-customBlue px-4",
                                    children: "Featured",
                                  }),
                                  " Models",
                                ],
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-base sm:text-lg pt-[14px] sm:pt-0 font-normal text-[#B0B0B0]",
                                children:
                                  "Discover the Best Models in the FLock Model Store",
                              }),
                            ],
                          }),
                        }),
                        V.length > 0 &&
                          (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "relative hidden sm:block w-full bg-bgGray border border-y-[#366FFF54] border-x-black py-10 mt-10",
                                children: [
                                  (0, i.jsx)(z.lr, {
                                    showStatus: !1,
                                    showThumbs: !1,
                                    infiniteLoop: !0,
                                    stopOnHover: !0,
                                    autoPlay: !0,
                                    centerMode: !0,
                                    centerSlidePercentage: 48,
                                    showIndicators: !1,
                                    showArrows: !1,
                                    selectedItem: j,
                                    children: V.slice(0, 3).map((e, t) => {
                                      var l;
                                      return (0, i.jsx)(
                                        CarouselCard,
                                        {
                                          title: e.modelName,
                                          description: trimText(
                                            e.description,
                                            150
                                          ),
                                          tags:
                                            (null === (l = e.tags) ||
                                            void 0 === l
                                              ? void 0
                                              : l.split(",")) || [],
                                          image: e.modelIcon || "",
                                          outlineColor: e.colorSpec,
                                        },
                                        t
                                      );
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none",
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "hidden sm:flex w-full justify-center mt-6",
                                children: (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-row gap-[10px] items-center",
                                  children: [
                                    (0, i.jsx)("button", {
                                      onClick: () =>
                                        b((j - 1 + V.length) % V.length),
                                      className:
                                        "p-2 flex items-center justify-center border border-customBlue hover:bg-customBlue group/arrow1 transition-all duration-300 bg-black",
                                      children: (0, i.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "25",
                                        viewBox: "0 0 24 25",
                                        className:
                                          " group-hover/arrow1:fill-white fill-customBlue",
                                        children: (0, i.jsx)("path", {
                                          fillRule: "evenodd",
                                          clipRule: "evenodd",
                                          d: "M15.5303 5.93744C15.8232 6.23034 15.8232 6.70521 15.5303 6.9981L10.0607 12.4678L15.5303 17.9374C15.8232 18.2303 15.8232 18.7052 15.5303 18.9981C15.2374 19.291 14.7626 19.291 14.4697 18.9981L8.46967 12.9981C8.17678 12.7052 8.17678 12.2303 8.46967 11.9374L14.4697 5.93744C14.7626 5.64455 15.2374 5.64455 15.5303 5.93744Z",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("button", {
                                      onClick: () => b((j + 1) % V.length),
                                      className:
                                        "p-2 flex items-center justify-center border border-customBlue hover:bg-customBlue group/arrow1 transition-all duration-300 bg-black",
                                      children: (0, i.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "25",
                                        viewBox: "0 0 24 25",
                                        className:
                                          " group-hover/arrow1:fill-white fill-customBlue",
                                        children: (0, i.jsx)("path", {
                                          fillRule: "evenodd",
                                          clipRule: "evenodd",
                                          d: "M8.46967 5.93744C8.17678 6.23034 8.17678 6.70521 8.46967 6.9981L13.9393 12.4678L8.46967 17.9374C8.17678 18.2303 8.17678 18.7052 8.46967 18.9981C8.76256 19.291 9.23744 19.291 9.53033 18.9981L15.5303 12.9981C15.8232 12.7052 15.8232 12.2303 15.5303 11.9374L9.53033 5.93744C9.23744 5.64455 8.76256 5.64455 8.46967 5.93744Z",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "flex flex-col sm:hidden gap-5 mt-[54px] w-[90%] sm:w-5/6",
                                children: V.slice(0, 3).map((e, t) => {
                                  var l;
                                  return (0, i.jsx)(
                                    CarouselCard,
                                    {
                                      title: e.modelName,
                                      description: trimText(e.description, 150),
                                      tags:
                                        (null === (l = e.tags) || void 0 === l
                                          ? void 0
                                          : l.split(",")) || [],
                                      image: e.modelIcon || "",
                                      link: e.chatLink || e.hgLink,
                                      outlineColor: e.colorSpec,
                                    },
                                    t
                                  );
                                }),
                              }),
                            ],
                          }),

                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "bg-[#1A1A1A] py-14 flex justify-center",
                      children: (0, i.jsxs)("div", {
                        className: "w-[95%] sm:w-5/6 px-4",
                        children: [
                          (0, i.jsx)("h1", {
                            className:
                              "text-[28px] sm:text-3xl leading-10 sm:leading-7 text-white text-start",
                            children: "Check your contributions",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex flex-col md:flex-row gap-[30px] md:justify-between items-center mt-3",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "w-full md:w-2/5 text-base sm:text-lg font-normal sm:font-medium text-[#B0B0B0] text-start",
                                children:
                                  "View the models you have created or contributed to the knowledge base",
                              }),
                              (0, i.jsx)("button", {
                                onClick: () =>
                                  checkWalletConnectionBeforeRedirect(
                                    "/myModels"
                                  ),
                                className:
                                  "bg-black text-textWhite px-[45px] py-4 font-medium text-center border border-white self-start hover:border-customBlue hover:bg-customBlue transition-all duration-300",
                                children: "Go to my contribution",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e &&
                  (0, i.jsx)(n.m, {
                    responsive: !0,
                    full: !0,
                    margin: { horizontal: "250px" },
                    children: (0, i.jsx)(CreateModel, {
                      setShowCreateModel: t,
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function IndexPage() {
        return (0, i.jsx)(CoCreationPage, {});
      }
    },
  },
  function (e) {
    e.O(0, [392, 688, 21, 465, 914, 774, 888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
