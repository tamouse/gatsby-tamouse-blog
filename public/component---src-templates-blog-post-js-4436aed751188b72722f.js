(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{237:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a.n(n),i=a(0),o=a.n(i),l=a(314),u=a.n(l),s=a(246),c=a.n(s),m=a(239),p=a(279),d=a.n(p),f=a(262),h=function(e){var t=e.previous;return o.a.createElement("li",null,o.a.createElement(m.Link,{to:t.fields.slug,rel:"prev"},"← ",t.frontmatter.title))},g=function(e){var t=e.next;return o.a.createElement("li",null,o.a.createElement(m.Link,{to:t.fields.slug,rel:"next"},t.frontmatter.title," →"))},y=function(e){var t=e.previous,a=e.next;return o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},t&&o.a.createElement(h,{previous:t}),a&&o.a.createElement(g,{next:a}))},b=a(245),v=a(244),E=a(241);a(383),a.d(t,"pageQuery",function(){return x});var w=new u.a({createElement:o.a.createElement,components:{}}).Compiler,k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=d()(this.props,"data.markdownRemark"),t=d()(this.props,"data.site.siteMetadata"),a=d()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,r=this.props.pageContext,i=r.previous,l=r.next,u=d()(this.props,"data.markdownRemark.frontmatter.categories"),s=d()(this.props,"data.markdownRemark.frontmatter.tags");return o.a.createElement(b.a,{location:this.props.location,metadata:t},o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+a}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement(v.a,{date:e.frontmatter.date,categories:u,tags:s}),o.a.createElement("div",null,w(e.htmlAst)),o.a.createElement("hr",{style:{marginBottom:Object(E.a)(1)}}),o.a.createElement(f.a,null),o.a.createElement(y,{previous:i,next:l}))},t}(o.a.Component),x=(t.default=k,"1516738114")},239:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=a(238),u=a.n(l);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(240),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var m=a(46);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},240:function(e,t,a){var n;e.exports=(n=a(243))&&n.default||n},241:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return s});var n=a(251),r=a.n(n),i=a(252),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a),u=l.rhythm,s=l.scale},243:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=a(47),u=a(1),s=function(e){var t=e.location,a=u.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},244:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(239),o=a(242),l=function(e){var t=e.category;return r.a.createElement("span",null,"Category: ",r.a.createElement(i.Link,{to:"/category/"+Object(o.kebabCase)(t)+"/"},t))},u=(a(118),function(e){var t=e.tags;return t.length<1?null:r.a.createElement("span",null,"Tags:"," ",r.a.createElement("ul",{style:{listStyle:"none",display:"inline"}},t.map(function(e,a){return r.a.createElement("li",{key:Object(o.kebabCase)(e)+"-"+a,style:{display:"inline-block",marginLeft:3}},r.a.createElement(i.Link,{to:"/tags/"+Object(o.kebabCase)(e)+"/"},e),a<t.length-1?", ":"")})))}),s=function(){return r.a.createElement("span",null," • ")};t.a=function(e){var t=e.date,a=e.category,n=e.tags;return r.a.createElement("div",null,t?r.a.createElement("small",null,t):null,t&&(a||n.length>0)?r.a.createElement(s,null):null,r.a.createElement(l,{category:a}),(t||a)&&n.length>0?r.a.createElement(s,null):null,r.a.createElement(u,{tags:n}))}},245:function(e,t,a){"use strict";a(72);var n=a(16),r=a.n(n),i=a(0),o=a.n(i),l=a(239),u=a(241),s=function(e){var t=e.headerStyle,a=e.title;return o.a.createElement("h1",{style:t},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a))},c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.metadata,r=t.children;return e="/"===a.pathname?Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0}):{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(u.a)(-1)},o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(32),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},o.a.createElement(s,{headerStyle:e,title:n.title}),r)},t}(o.a.Component);t.a=c},262:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(0),o=a.n(i),l=a(283),u=a.n(l),s=a(263),c=a.n(s),m=(a(284),a(285),a(241)),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(m.a)(2.5)}},o.a.createElement("img",{src:c.a.userAvatar,alt:c.a.userName,style:{marginRight:Object(m.a)(.5),marginBottom:0,width:Object(m.a)(2),height:Object(m.a)(2)}}),o.a.createElement("p",null,c.a.userName," lives in ",c.a.userLocation,". You should follow"," ",c.a.userPronouns[1]," on Twitter at"," ",o.a.createElement("a",{href:u()("https://twitter.com/",c.a.userTwitter),target:"_blank"},c.a.userTwitter),"."))},t}(o.a.Component);t.a=p},263:function(e,t){e.exports={siteTitle:"Tamouse Blog",siteTitleShort:"tamouse-blog",siteTitleAlt:"Tamouse Blog",siteUrl:"https://tamouse.github.io",pathPrefix:"/gatsby-tamouse-blog",siteDescription:"the rumblings and ramblings of a well-traveled techmouse",userName:"Tamara Temple",userTwitter:"tamouse",userLocation:"Twin Cities, Minnesota, USA",userAvatar:"https://secure.gravatar.com/avatar/899efa3678918b168a8c7f0ef3817c34",userPronouns:["she","her","hers"]}},383:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4436aed751188b72722f.js.map