(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1GPU":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a("q1tI"),i=a.n(n),r=a("Nhdc"),l=a("Wbzz"),s=a("9eSz"),o=a.n(s),d=a("vOnD"),m=d.a.ol.withConfig({displayName:"blog__PostList",componentId:"sc-11q50ar-0"})(["list-style:none;width:70%;"]),c=d.a.li.withConfig({displayName:"blog__PostListItem",componentId:"sc-11q50ar-1"})(["width:100%;padding:0.5rem;border:2px solid transparent;transition:all 0.5s ease;&:not(:last-child){margin-bottom:0.5rem !important;}&:hover{border:2px solid #ff812e;}"]),p=Object(d.a)(l.Link).withConfig({displayName:"blog__PostLink",componentId:"sc-11q50ar-2"})(["display:flex;"]),g=d.a.div.withConfig({displayName:"blog__PostListItemContent",componentId:"sc-11q50ar-3"})(["padding:.25rem;"]),h=d.a.div.withConfig({displayName:"blog__PostImageWrapper",componentId:"sc-11q50ar-4"})(["width:200px;border-radius:5px;.gatsby-image-wrapper{width:180px;border-radius:5px;img{border-radius:5px;}}"]);function b(e){var t=e.data,a=t.blog.edges.slice(0,5),n=t.blog.edges.slice(5,15);return i.a.createElement(r.d,null,i.a.createElement(r.f,{title:"Blog"}),i.a.createElement("div",{style:{display:"flex",padding:"0 3rem"}},i.a.createElement(m,null,a.map((function(e,t){var a=e.node,n=a.frontmatter,r=a.excerpt,l=n.slug,s=n.title,d=n.coverImage,m=n.date;return i.a.createElement(c,{key:t,className:"has-background-grey-dark box"},i.a.createElement(p,{to:l},i.a.createElement(h,null,i.a.createElement(o.a,{fluid:Object.assign({},d.childImageSharp.fluid)})),i.a.createElement(g,null,i.a.createElement("h1",{className:"has-text-warning has-text-weight-semibold is-size-5"},s),i.a.createElement("p",{className:"has-text-grey-light mb-2"},"Published on ",m),i.a.createElement("p",{className:"has-text-light"},r))))}))),i.a.createElement(r.b,{data:t,otherPosts:n})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-059b7a51e6e86dc790f5.js.map