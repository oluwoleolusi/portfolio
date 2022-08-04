"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(6842);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.jsx




function SEO({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "Oluwole Olusi"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: data.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: data.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: data.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: data.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: data.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: data.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: data.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: data.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: data.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: data.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
SEO.prototype = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string.isRequired,
        description: (external_prop_types_default()).string,
        image: (external_prop_types_default()).string,
        url: (external_prop_types_default()).string,
        keywords: external_prop_types_default().arrayOf((external_prop_types_default()).string)
    }).isRequired
};
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: ./pages/index.js



const Navigation = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(311), __webpack_require__.e(952), __webpack_require__.e(910), __webpack_require__.e(664), __webpack_require__.e(703)]).then(__webpack_require__.bind(__webpack_require__, 9703)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(567), __webpack_require__.e(686)]).then(__webpack_require__.bind(__webpack_require__, 9686)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 598).then(__webpack_require__.bind(__webpack_require__, 7660)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Skills"
        ]
    }
});
const Proficiency = dynamic_default()(()=>__webpack_require__.e(/* import() */ 424).then(__webpack_require__.bind(__webpack_require__, 9424)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Proficiency"
        ]
    }
});
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 351).then(__webpack_require__.bind(__webpack_require__, 5351)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 833).then(__webpack_require__.bind(__webpack_require__, 4833)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Experience"
        ]
    }
});
const Projects = dynamic_default()(()=>__webpack_require__.e(/* import() */ 295).then(__webpack_require__.bind(__webpack_require__, 9295)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Projects"
        ]
    }
});
const Feedbacks = dynamic_default()(()=>__webpack_require__.e(/* import() */ 842).then(__webpack_require__.bind(__webpack_require__, 842)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../containers/Feedbacks"
        ]
    }
});
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(311), __webpack_require__.e(910), __webpack_require__.e(675), __webpack_require__.e(567), __webpack_require__.e(546)]).then(__webpack_require__.bind(__webpack_require__, 3546)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/GithubProfileCard"
        ]
    }
});


function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {
                data: {
                    title: "Oluwole Olusi",
                    description: "A passionate full stack developer and graphic designer",
                    image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
                    url: "https://developer-portfolio-1hanzla100.vercel.app",
                    keywords: [
                        "Oluwole Olusi",
                        "Web Developer",
                        "React Developer",
                        "CSS",
                        "HTML",
                        "Javascript",
                        "Flask",
                        "API",
                        "Flask-SQLAlchemy",
                        "Python", 
                    ]
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Proficiency, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(GithubProfileCard, {
                prof: githubProfileData
            })
        ]
    });
};
Home.prototype = {
    githubProfileData: (external_prop_types_default()).object.isRequired
};
async function getStaticProps(_) {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 6842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.js

const greetings = {
    name: "Oluwole Olusi",
    title: "Hi, I'm Wole",
    description: "I am Oluwole Olusi, a full stack developer and graphic designer. I work with React, and integrate backend functionality using PHP/MySQL or Python's Flask SQLAlchemy library. I love to create new things. Let's create something amazing.",
    resumeLink: "https://drive.google.com/file/d/16RVIttw9OhhU1KvQ6NsnXJQhNOglLDLv/view?usp=sharing"
};
const openSource = {
    githubUserName: "oluwoleolusi"
};
const contact = {};
const socialLinks = {
    facebook: "https://www.facebook.com/oluwolebabatundeolusi/",
    // instagram: "https://www.instagram.com/1hanzla100",
    twitter: "https://twitter.com/wolei_sway",
    github: "https://github.com/oluwoleolusi"
};
const skillsSection = {
    title: "What I Do",
    subTitle: "Full Stack Developer and Experienced Designer",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/lottie/skills/fullstack.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Building responsive web applications in React.js"),
                external_react_easy_emoji_default()("⚡ Building responsive static websites using React.js"),
                external_react_easy_emoji_default()("⚡ Building RESTful APIs in Flask"), 
            ],
            softwareSkills: [
                {
                    skillName: "HTML-5",
                    fontAwesomeClassname: "vscode-icons:file-type-html"
                },
                {
                    skillName: "CSS-3",
                    fontAwesomeClassname: "vscode-icons:file-type-css"
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript"
                },
                {
                    skillName: "Reactjs",
                    fontAwesomeClassname: "vscode-icons:file-type-reactjs"
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "logos:python"
                },
                {
                    skillName: "PHP",
                    fontAwesomeClassname: "logos:php"
                },
                {
                    skillName: "mySQL",
                    fontAwesomeClassname: "logos:mysql"
                },
                {
                    skillName: "Postgresql",
                    fontAwesomeClassname: "logos:postgresql"
                },
                {
                    skillName: "Flask",
                    fontAwesomeClassname: "logos:flask"
                },
                {
                    skillName: "JQuery",
                    fontAwesomeClassname: "logos:jquery"
                }
            ]
        }
    ]
};
const SkillBars = [
    {
        Stack: "HTML5",
        progressPercentage: "90"
    },
    {
        Stack: "CSS3",
        progressPercentage: "80"
    },
    {
        Stack: "Javascript",
        progressPercentage: "80"
    },
    {
        Stack: "PHP/MYSQL",
        progressPercentage: "75"
    },
    {
        Stack: "Python",
        progressPercentage: "70"
    },
    {
        Stack: "Flask SQLAlchemy",
        progressPercentage: "85"
    },
    {
        Stack: "Postgresql",
        progressPercentage: "80"
    },
    {
        Stack: "React",
        progressPercentage: "80"
    },
    {
        Stack: "JQuery",
        progressPercentage: "90"
    }
];
const educationInfo = [
    {
        schoolName: "University of Ibadan",
        subHeader: "Bachelor of Science in Economics",
        duration: "December 2011 - December 2015"
    },
    {
        schoolName: "W3Schools",
        subHeader: "HTML5 Certification"
    },
    {
        schoolName: "W3Schools",
        subHeader: "CSS3 Certification"
    },
    {
        schoolName: "W3Schools",
        subHeader: "Javascript Certification"
    },
    {
        schoolName: "Udemy",
        subHeader: "Complete UI/UX Design Course"
    },
    {
        schoolName: "Free Code Camp",
        subHeader: "PHP Programming Language Tutorial – Full Course"
    },
    {
        schoolName: "Free Code Camp",
        subHeader: "MySQL Tutorial – Full Database Course"
    },
    {
        schoolName: "Udemy",
        subHeader: "JQuery Full Course"
    },
    {
        schoolName: "Coursera",
        subHeader: "Full React Digest"
    },
    {
        schoolName: "Udacity",
        subHeader: "Full Stack Developer"
    }
];
const experience = [
    {
        role: "Tech Support Lead",
        company: "Shindara Co",
        companylogo: "/img/shindara_logo.png",
        date: "May 2021 – Feb 2022",
        desc: "I worked as a Graphic Designer, and Full Stack Developer for an online fashion store.",
        descBullets: [
            "Produced all marketing design content used to promote products, events etc.",
            "Provided all design assets used on the website.",
            "Designed and developed the company website within the Shopify framework.",
            "Edited product photos and photos from photoshoots used on banners and marketing communication.",
            "Produced all marketing design content used to promote products, events etc.",
            "Provided all design assets used on the website.",
            "Designed and developed the company website within the Shopify framework.",
            "Edited product photos and photos from photoshoots used on banners and marketing communication.", 
        ]
    },
    {
        role: "Graphic Designer & Content Creator",
        company: "JeJe LLC",
        companylogo: "/img/jeje_logo.png",
        date: "Jan 2017 - June 2018",
        desc: "Worked remotely as a graphic designer, and I was in charge of their social media.",
        descBullets: [
            "Drafted and executed a new identity for the brand, consistent across various media.",
            "Conceptualized and created all designs related to the company’s day-to-day business.",
            "Produced all marketing design content used to promote products, events etc.",
            "Provided all design assets needed by the resident web developer.",
            "Supervised and advised the social media manager regarding design-related issues and copy writing.",
            "Catalogued and wrote detailed product descriptions for every single product in the company’s line.", 
        ]
    }, 
];
const projects = [
    {
        name: "Shindara Co",
        desc: "An online fashion store, built using a mix of Javascript, HTML/CSS, and Shopify's Liquid",
        link: "https://shindara.co"
    },
    {
        name: "Design Portfolio",
        desc: "You can check out my design portfolio on Behance",
        des_link: "https://behance.net/oluwoleolusi"
    }
];
const feedbacks = [
    {
        name: "John Smith",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur."
    },
    {
        name: "John Smith",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur."
    }, 
];


/***/ }),

/***/ 5895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 4931:
/***/ ((module) => {

module.exports = require("react-reveal");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(9902)));
module.exports = __webpack_exports__;

})();