(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1GPU":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a("q1tI"),i=a.n(n),l=a("Nhdc"),r=a("Wbzz"),s=a("9eSz"),o=a.n(s),d=a("vOnD"),c=d.a.ol.withConfig({displayName:"blog__PostList",componentId:"sc-11q50ar-0"})(["list-style:none;width:70%;"]),m=d.a.li.withConfig({displayName:"blog__PostListItem",componentId:"sc-11q50ar-1"})(["width:100%;padding:0.5rem;border:2px solid transparent;transition:all 0.5s ease;&:not(:last-child){margin-bottom:0.5rem !important;}&:hover{border:2px solid #ff812e;}"]),p=Object(d.a)(r.Link).withConfig({displayName:"blog__PostLink",componentId:"sc-11q50ar-2"})(["display:flex;"]),g=d.a.div.withConfig({displayName:"blog__PostListItemContent",componentId:"sc-11q50ar-3"})(["padding:.5rem;"]),h=d.a.div.withConfig({displayName:"blog__PostImageWrapper",componentId:"sc-11q50ar-4"})(["width:200px;border-radius:5px;.gatsby-image-wrapper{width:180px;border-radius:5px;img{border-radius:5px;}}"]);function b(e){var t=e.data,a=t.blog.edges.slice(0,5),n=t.blog.edges.slice(5,15);return i.a.createElement(l.d,null,i.a.createElement(l.f,{title:"Blog"}),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(c,null,a.map((function(e,t){var a=e.node,n=a.frontmatter,l=a.excerpt,r=n.slug,s=n.title,d=n.coverImage,c=n.date;return i.a.createElement(m,{key:t,className:"has-background-grey-dark box"},i.a.createElement(p,{to:r},i.a.createElement(h,null,i.a.createElement(o.a,{fluid:Object.assign({},d.childImageSharp.fluid)})),i.a.createElement(g,null,i.a.createElement("h1",{className:"has-text-warning has-text-weight-semibold is-size-5"},s),i.a.createElement("p",{className:"has-text-grey-light mb-2"},"Published on ",c),i.a.createElement("p",{className:"has-text-light"},l))))}))),i.a.createElement(l.b,{data:t,otherPosts:n})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-e0900e9da3c81d4a9bcf.js.map