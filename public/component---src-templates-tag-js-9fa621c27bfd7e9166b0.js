(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"pageQuery",function(){return m});var a=n(16),r=n.n(a),o=n(0),i=n.n(o),l=n(246),c=n.n(l),u=n(245),s=n(249),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pageContext,n=e.data,a=t.tag;return i.a.createElement(u.a,{location:this.props.location,metadata:this.props.data.site.siteMetadata},i.a.createElement("div",{className:"tag-container"},i.a.createElement(c.a,{title:'Posts tagged "'+a+'"'}),i.a.createElement("h2",null,"Posts tagged with ",a),i.a.createElement(s.a,{posts:n.allMarkdownRemark.edges})))},t}(i.a.Component),m="2904424308"},239:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return g});var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(238),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(240),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(46);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),g=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},240:function(e,t,n){var a;e.exports=(a=n(243))&&a.default||a},241:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(251),r=n.n(a),o=n(252),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a),c=l.rhythm,u=l.scale},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(47),c=n(1),u=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},244:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(239),i=n(242),l=function(e){var t=e.category;return r.a.createElement("span",null,"Category: ",r.a.createElement(o.Link,{to:"/category/"+Object(i.kebabCase)(t)+"/"},t))},c=(n(118),function(e){var t=e.tags;return t.length<1?null:r.a.createElement("span",null,"Tags:"," ",r.a.createElement("ul",{style:{listStyle:"none",display:"inline"}},t.map(function(e,n){return r.a.createElement("li",{key:Object(i.kebabCase)(e)+"-"+n,style:{display:"inline-block",marginLeft:3}},r.a.createElement(o.Link,{to:"/tags/"+Object(i.kebabCase)(e)+"/"},e),n<t.length-1?", ":"")})))}),u=function(){return r.a.createElement("span",null," • ")};t.a=function(e){var t=e.date,n=e.category,a=e.tags;return r.a.createElement("div",null,t?r.a.createElement("small",null,t):null,t&&(n||a.length>0)?r.a.createElement(u,null):null,r.a.createElement(l,{category:n}),(t||n)&&a.length>0?r.a.createElement(u,null):null,r.a.createElement(c,{tags:a}))}},245:function(e,t,n){"use strict";n(72);var a=n(16),r=n.n(a),o=n(0),i=n.n(o),l=n(239),c=n(241),u=function(e){var t=e.headerStyle,n=e.title;return i.a.createElement("h1",{style:t},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n))},s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.metadata,r=t.children;return e="/"===n.pathname?Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0}):{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)},i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(32),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement(u,{headerStyle:e,title:a.title}),r)},t}(i.a.Component);t.a=s},249:function(e,t,n){"use strict";n(118);var a=n(0),r=n.n(a),o=n(239),i=n(241),l=n(242),c=n(244);t.a=function(e){var t=e.posts;return r.a.createElement(r.a.Fragment,null,t.map(function(e){var t=e.node,n=Object(l.get)(t,"frontmatter.title")||t.fields.slug,a=Object(l.get)(t,"frontmatter.date")||"",u=Object(l.get)(t,"frontmatter.category")||[],s=Object(l.get)(t,"frontmatter.tags")||[];return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(i.a)(.25)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.a.createElement(c.a,{date:a,category:u,tags:s}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-9fa621c27bfd7e9166b0.js.map