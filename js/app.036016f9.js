(function(e){function t(t){for(var n,c,o=t[0],i=t[1],u=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var i=s[o];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0841":function(e,t,s){"use strict";var n=s("b8d3"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header",{staticClass:"app-header"}),s("router-link",{attrs:{to:{name:"home"}}}),s("router-view",{key:e.$route.path}),s("Footer",{staticClass:"app-footer"})],1)},r=[],c=(s("caad"),s("b0c0"),s("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{on:{click:e.goHome}},[n("router-link",{attrs:{to:{name:"home"},title:"Go Home"}},[n("img",{attrs:{src:s("d5c4"),alt:"NYT Logo"}})])],1)}),o=[],i=s("5530"),u=s("2f62"),l={methods:Object(i["a"])({goHome:function(){this.setCurrentSection()}},Object(u["b"])(["setCurrentSection"]))},d=l,f=(s("ab47"),s("2877")),j=Object(f["a"])(d,c,o,!1,null,"089d0a8f",null),b=j.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",[s("p",[e._v("Copyright © Ely Saakian "+e._s((new Date).getFullYear()))])])},p=[],h=(s("0841"),{}),A=Object(f["a"])(h,m,p,!1,null,"12910277",null),g=A.exports,v={components:{Header:b,Footer:g},methods:Object(u["b"])(["fetchNewsData","setCurrentSection"]),mounted:function(){this.$route.query.name&&this.$store.state.sections.includes(this.$route.query.name)&&this.setCurrentSection(this.$route.query.name),this.fetchNewsData()}},C=v,w=(s("5c0b"),Object(f["a"])(C,a,r,!1,null,null,null)),y=w.exports,k=(s("d3b7"),s("96cf"),s("1da1")),E={state:{newsData:{results:[]},currentSection:"home"},getters:{getNewsData:function(e){return e.newsData},getCurrentSection:function(e){return e.currentSection}},actions:{fetchNewsData:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var s,n,a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,n=e.state,a="https://api.nytimes.com/svc/topstories/v2/".concat(n.currentSection,".json?api-key=4GhbfMEL630l9Lw7NWcGAPd7J3cf5Ewx"),t.next=4,window.fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,s("setNewsData",c);case 9:case"end":return t.stop()}}),t)})))()},setCurrentSection:function(e){var t=e.commit,s=e.dispatch,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"home";t("setCurrentSection",n),s("fetchNewsData")}},mutations:{setNewsData:function(e,t){e.newsData=t},setCurrentSection:function(e,t){e.currentSection=t}}},Q={state:["arts","automobiles","books","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"]},B=s("3f9b");n["a"].use(u["a"]),n["a"].use(B["a"]);var S=new u["a"].Store({modules:{news:E,sections:Q}}),_=s("8c4f"),I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Search"),s("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"cards-container",attrs:{"fit-width":"true","item-selector":".container"}},e._l(e.getNewsData.results,(function(e,t){return s("NewsCard",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t,attrs:{article:e}})})),1)],1)},O=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",on:{click:function(t){return e.openArticle(e.article.url)}}},[n("div",{staticClass:"header"},[e.article.multimedia?n("img",{attrs:{src:e.article.multimedia[3].url,alt:e.article.multimedia[3].caption}}):n("img",{attrs:{src:s("c548"),alt:"Image Not Available"}}),n("div",{staticClass:"section-name"},[e._v(e._s(e.article.section))])]),n("div",{staticClass:"body"},[n("p",{staticClass:"date"},[e._v(e._s(e.publishedDate(e.article.published_date)))]),n("p",{staticClass:"title"},[e._v(e._s(e.article.title))]),n("p",{staticClass:"abstract"},[e._v(e._s(e.article.abstract))])]),n("div",{staticClass:"footer"},[e.article.byline?n("p",{staticClass:"byline"},[e._v(e._s(e.article.byline))]):e._e()])])},N=[],z=s("c1df"),F=s.n(z),D={props:["article"],methods:{publishedDate:function(e){return F()(e).format("MMM D YYYY h:mm A")},openArticle:function(e){window.open(e)}}},J=D,q=(s("71d8"),Object(f["a"])(J,x,N,!1,null,"64f912c0",null)),H=q.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Top Stories in")]),s("Select"),e.getNewsData?s("p",[e._v("Found "+e._s(e.getNewsData.results.length)+" stories")]):e._e()],1)},U=[],Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"custom-select-wrapper"},[s("div",{staticClass:"custom-select",class:{open:e.isOpen}},[s("div",{staticClass:"custom-select__trigger",on:{click:e.open}},[s("span",{key:e.getCurrentSection},[e._v(e._s(e.getCurrentSection))]),s("div",{staticClass:"arrow"})]),s("div",{staticClass:"custom-options"},e._l(e.sections,(function(t){return s("span",{key:t,on:{click:e.select}},[s("router-link",{staticClass:"custom-option",attrs:{title:"View Top Stories in section",to:{name:"home",query:{name:t}}}},[e._v(e._s(t)+" ")])],1)})),0)])])},M=[],W={data:function(){return{sections:this.$store.state.sections,isOpen:!1}},computed:Object(u["c"])(["getCurrentSection"]),methods:Object(i["a"])({open:function(){this.isOpen=!this.isOpen},select:function(e){var t=e.target;this.setCurrentSection(t.innerText),t.classList.contains("selected")||(t.parentNode.querySelector(".custom-option.selected")&&t.parentNode.querySelector(".custom-option.selected").classList.remove("selected"),t.classList.add("selected"),t.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=t.textContent),this.open()}},Object(u["b"])(["setCurrentSection"]))},T=W,V=(s("c90c"),Object(f["a"])(T,Y,M,!1,null,"06513e54",null)),K=V.exports,L={components:{Select:K},computed:Object(u["c"])(["getNewsData"])},X=L,G=(s("8ac5"),Object(f["a"])(X,P,U,!1,null,"40e25e1c",null)),$=G.exports,R={components:{NewsCard:H,Search:$},methods:Object(u["b"])(["fetchNewsData"]),computed:Object(i["a"])({},Object(u["c"])(["getNewsData","getCurrentSection"])),updated:function(){document.title="Stories in "+this.getCurrentSection,this.$redrawVueMasonry()}},Z=R,ee=(s("a29f"),Object(f["a"])(Z,I,O,!1,null,null,null)),te=ee.exports;n["a"].use(_["a"]);var se=new _["a"]({base:"/NewsTopStories/",mode:"history",routes:[{path:"/",name:"home",component:te}]});n["a"].config.productionTip=!1,new n["a"]({router:se,store:S,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},6901:function(e,t,s){},"71d8":function(e,t,s){"use strict";var n=s("8043"),a=s.n(n);a.a},"785c":function(e,t,s){},8043:function(e,t,s){},"8ac5":function(e,t,s){"use strict";var n=s("de0e"),a=s.n(n);a.a},"9c0c":function(e,t,s){},a213:function(e,t,s){},a29f:function(e,t,s){"use strict";var n=s("785c"),a=s.n(n);a.a},ab47:function(e,t,s){"use strict";var n=s("a213"),a=s.n(n);a.a},b8d3:function(e,t,s){},c548:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAACMCAYAAAAJHffFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPCSURBVHgB7dixMlxRHMfxm0xKeh5Aj57eC3gAPT16enp6eh7A1jyAB6CnT/I/Mydzs0Myyf42wXw+M5llrz17i/PNOfd8mkwmXwdgJp8HYGZCggAhQYCQIEBIECAkCBASBAgJAoQEAUKCACFBgJAgQEgQICQIEBIECAkChAQBQoIAIUGAkCBASBAgJAgQEgQICQKEBAFCggAhQYCQIEBIECAkCBASBAgJAoQEAUKCACFBgJAgQEgQICQIEBIECAkChAQBQoIAIUGAkCBASBAgJAgQEgQICQKEBAFCggAhQYCQIEBIECAkCBASBAgJAoQEAUKCACFBgJAgQEgQICQIEBIECAkChPRGnJ2dDc/PzwPvk5DeiI2NjWFhYWHgffoyMLNaSe7v74elpaXh5uZmWF5ebmF0T09Pw/X1dQtlbW2tXZ/2+Pg4rKystLEeHh5+jNnHuru7++n37rX36zsnk0l7rfdrvBp/+n42NzcFHGBFCqhJWluzmpwVSk3sq6urdq2iODg4aJO4JvvR0VF7b9rFxcWPsfb399sYNVaFsru721772P1v6zsq3L6a1ee64+PjFnZ95vLyst1fv5+6h34/48/w94QUUhN5Z2enTdDt7e028cvJyUkLqSZ0/dvb22sT+1fW19fbGH2s8dj12seuEGq8eq2xFxcX2/t1va9+9Zn6m/78dX5+3n7v99NXO2Zjaxcy3h7Vz7VVKzWBx1u5mth9RXlNrSSvjd3HLBVCjdV/r9Wq1Hevrq6+OHZt6/rq1Mea/j7+nJD+g9TpXG3Rtra2WlClx/s7h4eHA1m2dnPWn3O6eq4ZHwrMoj9Hdbe3t+21xq/ntW78TFYr4vh+aoVidlakOatnnNpK1aFAV88oCbUa1WFBP+2rLWRF00/wasWqbeF4BaxnrHpu66d2da0OM/rzFX/n0/cj0q8Dc9f/509P2Bp3+jlsfK1/Z8Vyenr64jVmZ0X6R+Y1YWvcl8auVadWrFp16qSufp7+HDlWpA+qtnj1LFQHEP2om/mxIn1QtdV7abvHfDi1gwAhQYCQIEBIECAkCBASBAgJAoQEAUKCACFBgJAgQEgQICQIEBIECAkChAQBQoIAIUGAkCBASBAgJAgQEgQICQKEBAFCggAhQYCQIEBIECAkCBASBAgJAoQEAUKCACFBgJAgQEgQICQIEBIECAkChAQBQoIAIUGAkCBASBAgJAgQEgQICQKEBAFCggAhQYCQIEBIECAkCBASBAgJAoQEAUKCACFBgJAgQEgQICQIEBIEfAOHrDBG2dvSFAAAAABJRU5ErkJggg=="},c90c:function(e,t,s){"use strict";var n=s("6901"),a=s.n(n);a.a},d5c4:function(e,t,s){e.exports=s.p+"img/NewYorkTimes.fba6274e.svg"},de0e:function(e,t,s){}});
//# sourceMappingURL=app.036016f9.js.map