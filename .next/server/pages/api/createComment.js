"use strict";
(() => {
var exports = {};
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ createComment)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/createComment.ts

const config = {
    dataset: "production",
    projectId: "a92jehh3",
    // apiVersion: "2021-03-25",
    useCdn: "production" === "production",
    token: process.env.SANITY_API_TOKEN
};
const client = client_default()(config);
async function createComment(req, res) {
    const { _id , name , email , comment  } = JSON.parse(req.body);
    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id
            },
            name,
            email,
            comment
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Couldnt submit the commnt",
            err
        });
    }
    res.status(200).json({
        message: "Comment submitted"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(851));
module.exports = __webpack_exports__;

})();