(function(e){function t(t){for(var n,r,o=t[0],i=t[1],u=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],n=!0,o=1;o<s.length;o++){var i=s[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},c=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"05cb":function(e,t,s){},"0841":function(e,t,s){"use strict";var n=s("b8d3"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=c(e);return s(t)}function c(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header",{staticClass:"app-header"}),s("router-link",{attrs:{to:{name:"home"}}}),s("router-view",{key:e.$route.path}),s("Footer",{staticClass:"app-footer"})],1)},c=[],r=(s("caad"),s("b0c0"),s("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{on:{click:e.goHome}},[n("router-link",{attrs:{to:{name:"home"},title:"Go Home"}},[n("img",{attrs:{src:s("d5c4"),alt:"NYT Logo"}})])],1)}),o=[],i=s("5530"),u=s("2f62"),l={methods:Object(i["a"])({goHome:function(){this.setCurrentSection()}},Object(u["b"])(["setCurrentSection"]))},d=l,f=(s("ab47"),s("2877")),b=Object(f["a"])(d,r,o,!1,null,"089d0a8f",null),j=b.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",[s("p",[e._v("Copyright © Ely Saakian "+e._s((new Date).getFullYear()))])])},p=[],h=(s("0841"),{}),v=Object(f["a"])(h,m,p,!1,null,"12910277",null),g=v.exports,y={components:{Header:j,Footer:g},methods:Object(u["b"])(["fetchNewsData","setCurrentSection"]),mounted:function(){this.$route.query.name&&this.$store.state.sections.includes(this.$route.query.name)&&this.setCurrentSection(this.$route.query.name),this.fetchNewsData()}},w=y,_=(s("5c0b"),Object(f["a"])(w,a,c,!1,null,null,null)),k=_.exports,C=(s("d3b7"),s("96cf"),s("1da1")),O={state:{newsData:{results:[]},currentSection:"home"},getters:{getNewsData:function(e){return e.newsData},getCurrentSection:function(e){return e.currentSection}},actions:{fetchNewsData:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){var s,n,a,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,n=e.state,a="https://api.nytimes.com/svc/topstories/v2/".concat(n.currentSection,".json?api-key=4GhbfMEL630l9Lw7NWcGAPd7J3cf5Ewx"),t.next=4,window.fetch(a);case 4:return c=t.sent,t.next=7,c.json();case 7:r=t.sent,s("setNewsData",r);case 9:case"end":return t.stop()}}),t)})))()},setCurrentSection:function(e){var t=e.commit,s=e.dispatch,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"home";t("setCurrentSection",n),s("fetchNewsData")}},mutations:{setNewsData:function(e,t){e.newsData=t},setCurrentSection:function(e,t){e.currentSection=t}}},S={state:["arts","automobiles","books","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"]};n["a"].use(u["a"]);var z=new u["a"].Store({modules:{news:O,sections:S}}),N=s("8c4f"),x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Search"),s("div",{staticClass:"cards-container"},e._l(e.getNewsData.results,(function(e,t){return s("NewsCard",{key:t,attrs:{article:e}})})),1)],1)},D=[],$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",on:{click:function(t){return e.openArticle(e.article.url)}}},[s("div",{staticClass:"header"},[s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{selector: 'img'}"}],staticClass:"img-container"},[s("img",{attrs:{"data-src":e.article.multimedia[0].url,"data-loading":e.article.multimedia[3].url,"data-error":"../assets/NoImage.jpg",alt:e.article.multimedia[0].caption}})]),s("div",{staticClass:"section-name"},[e._v(e._s(e.article.section))])]),s("div",{staticClass:"body"},[s("p",{staticClass:"date"},[e._v(e._s(e.publishedDate(e.article.published_date)))]),s("p",{staticClass:"title"},[e._v(e._s(e.article.title))]),s("p",{staticClass:"abstract"},[e._v(e._s(e.article.abstract))])]),s("div",{staticClass:"footer"},[e.article.byline?s("p",{staticClass:"byline"},[e._v(e._s(e.article.byline))]):e._e()])])},E=[],M=s("c1df"),T=s.n(M),q={name:"NewsCard",props:["article"],methods:{publishedDate:function(e){return T()(e).format("MMM D YYYY h:mm A")},openArticle:function(e){window.open(e)}}},P=q,L=(s("6824"),Object(f["a"])(P,$,E,!1,null,"7cd201b0",null)),Y=L.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Top Stories in")]),s("Select"),e.getNewsData?s("p",[e._v("Found "+e._s(e.getNewsData.results.length)+" stories")]):e._e()],1)},H=[],A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"custom-select-wrapper"},[s("div",{staticClass:"custom-select",class:{open:e.isOpen}},[s("div",{staticClass:"custom-select__trigger",on:{click:e.open}},[s("span",{key:e.getCurrentSection},[e._v(e._s(e.getCurrentSection))]),s("div",{staticClass:"arrow"})]),s("div",{staticClass:"custom-options"},e._l(e.sections,(function(t){return s("span",{key:t,on:{click:e.select}},[s("router-link",{staticClass:"custom-option",attrs:{title:"View Top Stories in section",to:{name:"home",query:{name:t}}}},[e._v(e._s(t)+" ")])],1)})),0)])])},G=[],J={data:function(){return{sections:this.$store.state.sections,isOpen:!1}},computed:Object(u["c"])(["getCurrentSection"]),methods:Object(i["a"])({open:function(){this.isOpen=!this.isOpen},select:function(e){var t=e.target;this.setCurrentSection(t.innerText),t.classList.contains("selected")||(t.parentNode.querySelector(".custom-option.selected")&&t.parentNode.querySelector(".custom-option.selected").classList.remove("selected"),t.classList.add("selected"),t.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=t.textContent),this.open()}},Object(u["b"])(["setCurrentSection"]))},R=J,U=(s("c90c"),Object(f["a"])(R,A,G,!1,null,"06513e54",null)),I=U.exports,V={components:{Select:I},computed:Object(u["c"])(["getNewsData"])},W=V,B=(s("8ac5"),Object(f["a"])(W,F,H,!1,null,"40e25e1c",null)),K=B.exports,Q={components:{NewsCard:Y,Search:K},methods:Object(u["b"])(["fetchNewsData"]),computed:Object(i["a"])({},Object(u["c"])(["getNewsData","getCurrentSection"])),updated:function(){document.title="Stories in "+this.getCurrentSection}},X=Q,Z=(s("a29f"),Object(f["a"])(X,x,D,!1,null,null,null)),ee=Z.exports;n["a"].use(N["a"]);var te=new N["a"]({base:"/NewsTopStories/",mode:"history",routes:[{path:"/",name:"home",component:ee}]}),se=s("caf9");n["a"].config.productionTip=!1,n["a"].use(se["a"],{observer:!0,observerOptions:{rootMargin:"100%"}}),new n["a"]({router:te,store:z,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},6824:function(e,t,s){"use strict";var n=s("05cb"),a=s.n(n);a.a},6901:function(e,t,s){},"785c":function(e,t,s){},"8ac5":function(e,t,s){"use strict";var n=s("de0e"),a=s.n(n);a.a},"9c0c":function(e,t,s){},a213:function(e,t,s){},a29f:function(e,t,s){"use strict";var n=s("785c"),a=s.n(n);a.a},ab47:function(e,t,s){"use strict";var n=s("a213"),a=s.n(n);a.a},b8d3:function(e,t,s){},c90c:function(e,t,s){"use strict";var n=s("6901"),a=s.n(n);a.a},d5c4:function(e,t,s){e.exports=s.p+"img/NewYorkTimes.fba6274e.svg"},de0e:function(e,t,s){}});
//# sourceMappingURL=app.06c89ab4.js.map