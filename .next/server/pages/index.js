"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__(505);
// EXTERNAL MODULE: ./sanity.js
var sanity = __webpack_require__(994);
;// CONCATENATED MODULE: ./pages/index.tsx





function Home({ posts  }) {
    // console.log(posts);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Medium Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-10 space-y-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "text-6xl max-w-xl font-serif ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "underline decoration-black decoration-4",
                                        children: "Medium"
                                    }),
                                    "  is a place to read write and connect"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: " It is easy and free to post your thinking and Ideas and get inspired"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "hidden md:inline-flex h-32 lg:h-full bg-yellow-400",
                        src: "https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 cursor-pointer",
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/post/${post.slug.current}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " border rounded-lg group overflow-hidden",
                            children: [
                                post.mainImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out",
                                    src: (0,sanity/* urlFor */.uH)(post.mainImage).url(),
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-between p-5 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-lg font-bold",
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-xs",
                                                    children: [
                                                        post.description,
                                                        " by ",
                                                        post.author.name
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-12 w-12 rounded-full",
                                            src: (0,sanity/* urlFor */.uH)(post.author.image).url()
                                        })
                                    ]
                                })
                            ]
                        })
                    }, post._id)
                )
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    const query = `*[_type== "post"]{
        _id,
        title,
        author -> {
        name,image
      },
        description,
      mainImage,
      slug
      }`;
    const posts = await sanity/* sanityClient.fetch */.i3.fetch(query);
    return {
        props: {
            posts
        }
    };
};


/***/ }),

/***/ 791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,752], () => (__webpack_exec__(790)));
module.exports = __webpack_exports__;

})();