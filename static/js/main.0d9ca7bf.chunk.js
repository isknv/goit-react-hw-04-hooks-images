(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{16:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),o=n.n(r),s=(n(16),n(3)),i=n(0),u=function(e){var t=e.submitFunction,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(i.jsx)("header",{className:"Searchbar",children:Object(i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===r)return alert("Search field must not be empty");t(r),o("")},className:"SearchForm",children:[Object(i.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(i.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(i.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value.toLowerCase())},name:"search",value:r})]})})},l=n(9),j=n(10),b=n.n(j),f=(n(38),n(8)),h=n.n(f),m=n(11),d={search:"",page:1,fetchArticles:function(){var e=this;return Object(m.a)(h.a.mark((function t(){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pixabay.com/api/?q=".concat(e.search,"&page=").concat(e.page,"&key=20337481-672a40f89241c2a553d794fbd&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=t.sent,t.next=5,n.json();case 5:if((c=t.sent).totalHits){t.next=8;break}return t.abrupt("return",alert("Nothing found for this question."));case 8:return console.log(e.page),e.loadMoreImg(),t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})))()},query:function(e){this.search=e},loadMoreImg:function(){this.page+=1},reset:function(){this.page=1}},O=function(e){var t=e.id,n=e.webformatURL,c=e.alt,a=e.largeImgClick;return Object(i.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(t)},children:Object(i.jsx)("img",{src:n,alt:c,className:"ImageGalleryItem-image"})},t)},p=function(e){var t=e.loadMore;return Object(i.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},g=function(e){var t=e.closeModal,n=e.children;Object(c.useEffect)((function(){window.addEventListener("keydown",(function(e){"Escape"===e.code&&t()}))}));return Object(r.createPortal)(Object(i.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&t()},className:"Overlay",children:Object(i.jsx)("div",{className:"Modal",children:n})}),document.querySelector("#modal-root"))},x=function(e){var t=e.search,n=Object(c.useState)([]),a=Object(s.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)(""),j=Object(s.a)(u,2),f=j[0],h=j[1],m=Object(c.useState)(!1),x=Object(s.a)(m,2),v=x[0],y=x[1];Object(c.useEffect)((function(){t&&(o([]),d.query(t),d.reset(),S())}),[t]),Object(c.useEffect)((function(){1!==d.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[r]);var w=function(e){var t=r.find((function(t,n){return n===e})).largeImageURL;h(t)},S=function(){y(!0),d.fetchArticles().then((function(e){var t=e.hits;return o((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))}))})).catch((function(e){return console.log(e)})).finally((function(){return y(!1)}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("ul",{className:"ImageGallery",children:r.map((function(e,t){var n=e.webformatURL,c=e.tags;return Object(i.jsx)(O,{webformatURL:n,alt:c,id:t,largeImgClick:w},t)}))}),f&&Object(i.jsx)(g,{closeModal:function(){h("")},children:Object(i.jsx)("img",{src:f,alt:"Modal"})}),Object(i.jsx)("div",{className:"container-btn",children:!!r.length&&!v&&Object(i.jsx)(p,{loadMore:function(){S()}})}),Object(i.jsx)("div",{className:"container-loader",children:v&&Object(i.jsx)(b.a,{type:"Puff",color:"#00BFFF",height:200,width:200})})]})},v=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{submitFunction:a}),Object(i.jsx)(x,{search:n})]})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0d9ca7bf.chunk.js.map