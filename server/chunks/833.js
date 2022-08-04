"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 4833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Experience)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(6842);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(4931);
;// CONCATENATED MODULE: ./components/ExperienceCard.jsx




const ExperienceCard = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
        lg: "6",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_reveal_.Fade, {
            left: true,
            duration: 2000,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                style: {
                    flex: 1
                },
                className: "shadow-lg--hover mb-3 shadow border-0 text-center rounded",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardBody, {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: data.companylogo,
                            style: {
                                objectFit: "cover",
                                left: 0,
                                right: 0,
                                top: "7rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "8rem",
                                height: "8rem",
                                borderRadius: "50%"
                            },
                            className: "shadow mb-3",
                            alt: data.companylogo
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardTitle, {
                            tag: "h4",
                            className: "mb-2",
                            children: data.company
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardSubtitle, {
                            tag: "h5",
                            className: "mb-2",
                            children: data.role
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardSubtitle, {
                            children: data.date
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardText, {
                            tag: "div",
                            className: "description my-3 text-left",
                            children: [
                                data.desc,
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: data.descBullets ? data.descBullets.map((desc)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: desc
                                        }, desc);
                                    }) : null
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_ExperienceCard = (ExperienceCard);

;// CONCATENATED MODULE: ./containers/Experience.jsx






const Experience = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section section-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ni ni-briefcase-24 text-info"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "display-3 text-info",
                                children: "Experience"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                    className: "row-grid align-items-start",
                    children: portfolio/* experience.map */.b8.map((data, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(components_ExperienceCard, {
                            data: data
                        }, i);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const containers_Experience = (Experience);


/***/ })

};
;