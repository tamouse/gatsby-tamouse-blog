(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d}),n(118);var a=n(0),r=n.n(a),i=n(242),o=n(244),u=n(246),c=n.n(u),l=n(238),s=n.n(l);t.default=function(e){var t=e.location,n=e.data,a=n.allMarkdownRemark.group,u=n.site.siteMetadata;return r.a.createElement(o.a,{location:t,metadata:u},r.a.createElement(c.a,{title:u.title}),r.a.createElement("div",null,r.a.createElement("h1",null,"Categories"),r.a.createElement("ul",{style:{listStyle:"none"}},a.map(function(e){return r.a.createElement("li",{key:e.fieldValue},r.a.createElement(s.a,{to:"/category/"+Object(i.kebabCase)(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))};var d="3552589489"},239:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(12),o=n.n(i),u=n(238),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(240),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(46);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},240:function(e,t,n){var a;e.exports=(a=n(243))&&a.default||a},241:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var a=n(249),r=n.n(a),i=n(250),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var u=new r.a(o.a),c=u.rhythm,l=u.scale},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),u=n(47),c=n(1),l=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(u.a,{location:t,pageResources:n})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},244:function(e,t,n){"use strict";n(72);var a=n(16),r=n.n(a),i=n(0),o=n.n(i),u=n(239),c=n(241),l=function(e){var t=e.headerStyle,n=e.title;return o.a.createElement("h1",{style:t},o.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n))},s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.metadata,r=t.children;return e="/"===n.pathname?Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0}):{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)},o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(32),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},o.a.createElement(l,{headerStyle:e,title:a.title}),r)},t}(o.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-category-js-9c06134811492db9da18.js.map