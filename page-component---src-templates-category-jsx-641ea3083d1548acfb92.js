webpackJsonp([5],{"./src/components/PostListing/PostListing.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),u=r(s),d=n("./src/components/PostPreview/PostPreview.jsx"),c=r(d),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"getPostList",value:function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e}},{key:"render",value:function(){var e=this.getPostList();return u.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},u.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return u.default.createElement(c.default,{key:e.title,postInfo:e})})))}}]),t}(u.default.Component);t.default=f,e.exports=t.default},"./src/components/PostPreview/PostPreview.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),u=r(s),d=n("./node_modules/react-md/lib/Cards/Card.js"),c=r(d),f=n("./node_modules/react-md/lib/Cards/CardTitle.js"),p=r(f),m=n("./node_modules/react-md/lib/Buttons/index.js"),b=r(m),y=n("./node_modules/react-md/lib/Avatars/index.js"),h=r(y),g=n("./node_modules/react-md/lib/Cards/CardText.js"),_=r(g),j=n("./node_modules/react-md/lib/FontIcons/index.js"),v=r(j),x=n("./node_modules/gatsby-link/index.js"),w=r(x),P=n("./node_modules/react-md/lib/Media/index.js"),E=r(P),O=n("./src/components/PostTags/PostTags.jsx"),k=r(O),C=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={mobile:!0},n.handleResize=n.handleResize.bind(n),n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})}},{key:"render",value:function(){var e=this.props.postInfo,t=this.state.mobile,n=t,r=t?"16-9":"4-1";return u.default.createElement(c.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},u.default.createElement(w.default,{style:{textDecoration:"none"},to:e.path},u.default.createElement(E.default,{aspectRatio:r},u.default.createElement("img",{src:e.cover,alt:e.title}),u.default.createElement(P.MediaOverlay,null,u.default.createElement(p.default,{title:e.title},u.default.createElement(b.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),u.default.createElement(p.default,{expander:n,avatar:u.default.createElement(h.default,{icon:u.default.createElement(v.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),u.default.createElement(_.default,{expandable:n},e.excerpt,u.default.createElement(k.default,{tags:e.tags})))}}]),t}(s.Component);t.default=C,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/ruben/Git/gatsby-starter-material/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-lodash/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/ruben/Git/gatsby-starter-material/node_modules/babel-preset-env/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-preset-stage-0/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/category.jsx':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),u=r(s),d=n("./node_modules/react-helmet/lib/Helmet.js"),c=r(d),f=n("./src/components/PostListing/PostListing.jsx"),p=r(f),m=n("./data/SiteConfig.js"),b=r(m),y=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.pathContext.category,t=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"category-container"},u.default.createElement(c.default,{title:'Posts in category "'+e+'" | '+b.default.siteTitle}),u.default.createElement(p.default,{postEdges:t}))}}]),t}(u.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-templates-category-jsx-641ea3083d1548acfb92.js.map