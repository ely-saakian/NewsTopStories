(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"151d":function(t,e,n){t.exports=n.p+"img/NoImage.5ac88d4d.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-app-bar",{staticStyle:{cursor:"pointer"},attrs:{color:"black",app:""},on:{click:t.goHome}},[n("TheHeader")],1),n("v-main",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:{name:"home"}}}),n("router-link",{attrs:{to:{name:"section"}}}),n("router-view")],1),n("v-footer",{attrs:{app:""}},[t._v(" Footer ")])],1)],1)},o=[],s=n("5530"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("TheLogo")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{attrs:{"max-width":"300px",src:n("d5c4")}})},u=[],p={},f=p,d=n("2877"),m=n("6544"),h=n.n(m),v=n("adda"),b=Object(d["a"])(f,l,u,!1,null,null,null),g=b.exports;h()(b,{VImg:v["a"]});var w={components:{TheLogo:g}},y=w,_=n("a523"),S=n("0fd9"),j=Object(d["a"])(y,i,c,!1,null,"135dc700",null),C=j.exports;h()(j,{VContainer:_["a"],VRow:S["a"]});var x=n("2f62"),O={components:{TheHeader:C},methods:Object(s["a"])({goHome:function(){this.$router.push({name:"home"})}},Object(x["b"])(["fetchNewsData","setCurrentSection"])),created:function(){this.fetchNewsData()}},V=O,N=(n("5c0b"),n("7496")),k=n("40dc"),D=n("553a"),L=n("f6c4"),$=Object(d["a"])(V,a,o,!1,null,null,null),E=$.exports;h()($,{VApp:N["a"],VAppBar:k["a"],VFooter:D["a"],VMain:L["a"]});n("d3b7"),n("96cf");var T=n("1da1"),P={state:{isLoading:!1,newsData:{},currentSection:"home"},getters:{NewsData:function(t){return t.newsData.results},CurrentSection:function(t){return t.currentSection}},actions:{fetchNewsData:function(t){return Object(T["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,r=t.state,r.isLoading=!0,a="https://api.nytimes.com/svc/topstories/v2/".concat(r.currentSection,".json?api-key=4GhbfMEL630l9Lw7NWcGAPd7J3cf5Ewx"),window.fetch(a).then((function(t){return t.json()})).then((function(t){n("setNewsData",t)}));case 4:case"end":return e.stop()}}),e)})))()},setCurrentSection:function(t){var e=t.commit,n=t.dispatch,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"home";e("setCurrentSection",r),n("fetchNewsData"),this.isLoading=!0}},mutations:{setNewsData:function(t,e){t.newsData=e,t.isLoading=!1},setCurrentSection:function(t,e){t.currentSection=e}}},H={state:["arts","automobiles","books","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"],getters:{getSections:function(t){return t}}};r["a"].use(x["a"]);var M=new x["a"].Store({modules:{news:P,sections:H}}),R=n("8c4f"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HomeScreen")},A=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("h1",{staticClass:"text-h1"},[t._v("View top stories by category.")])]),n("v-row",{staticClass:"text-h2",attrs:{justify:"center"}},[n("h2",[t._v("What are you looking for?")])]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("SectionSelect")],1)],1)],1)},J=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-select",{staticClass:"pa-10",attrs:{outlined:"",filled:"","hide-details":"",items:t.getSections,"item-text":t.getSections,"item-value":t.getSections,label:"Please make a selection"},on:{change:t.select}})},G=[],W={computed:Object(s["a"])({},Object(x["c"])(["getSections"])),methods:Object(s["a"])(Object(s["a"])({},Object(x["b"])(["setCurrentSection"])),{},{select:function(t){this.setCurrentSection(t),this.$router.push({name:"section"})}})},B=W,Y=n("b974"),q=Object(d["a"])(B,F,G,!1,null,null,null),K=q.exports;h()(q,{VSelect:Y["a"]});var Q={components:{SectionSelect:K}},U=Q,X=n("62ad"),Z=Object(d["a"])(U,I,J,!1,null,null,null),tt=Z.exports;h()(Z,{VCol:X["a"],VContainer:_["a"],VRow:S["a"]});var et={components:{HomeScreen:tt}},nt=et,rt=Object(d["a"])(nt,z,A,!1,null,null,null),at=rt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DisplayNewsCards")},st=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-overlay",{attrs:{value:t.isLoading}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"primary"}})],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("p",{staticClass:"ma-0 text-h6 center"},[t._v("View top stories in:")]),n("SectionSelect")],1)],1)],1),t.NewsData?n("v-row",{staticClass:"flex-wrap",attrs:{justify:"space-between"}},t._l(t.NewsData,(function(t){return n("VerticalNewsCard",{key:t.uri,attrs:{article:t}})})),1):t._e()],1)},ct=[],lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[r("v-card",{staticClass:"ma-6",attrs:{href:t.url,target:"_blank",outlined:"",hover:""}},[r("v-card-title",[t._v(" "+t._s(t.title)+" ")]),r("v-card-subtitle",{staticClass:"pt-2"},[t._v(" "+t._s(t.byline)+" ")]),null===t.imgLarge?r("v-img",{attrs:{src:n("151d")}},[r("v-chip",{staticClass:"rounded-0 black white--text",staticStyle:{position:"absolute",bottom:"0"},attrs:{label:""}},[t._v(" "+t._s(t.section)+" ")])],1):r("v-img",{attrs:{src:t.imgLarge,"lazy-src":t.imgSmall}},[r("v-chip",{staticClass:"rounded-0 black white--text",staticStyle:{position:"absolute",bottom:"0"},attrs:{label:""}},[t._v(" "+t._s(t.section)+" ")])],1),r("v-card-text",{staticClass:"text-h6 font-weight-medium"},[t._v(" "+t._s(t.abstract)+" ")])],1)],1)},ut=[],pt={props:["article"],data:function(){return{section:this.article.section,url:this.article.url,title:this.article.title,abstract:this.article.abstract,byline:this.article.byline,imgLarge:this.article.multimedia?this.article.multimedia[0].url:null,imgSmall:this.article.multimedia?this.article.multimedia[3].url:null}}},ft=pt,dt=n("b0af"),mt=n("99d9"),ht=n("cc20"),vt=Object(d["a"])(ft,lt,ut,!1,null,null,null),bt=vt.exports;h()(vt,{VCard:dt["a"],VCardSubtitle:mt["a"],VCardText:mt["b"],VCardTitle:mt["c"],VChip:ht["a"],VCol:X["a"],VImg:v["a"]});var gt={components:{VerticalNewsCard:bt,SectionSelect:K},computed:Object(s["a"])({isLoading:function(){return this.$store.state.news.isLoading}},Object(x["c"])(["NewsData"]))},wt=gt,yt=n("a797"),_t=n("490a"),St=Object(d["a"])(wt,it,ct,!1,null,null,null),jt=St.exports;h()(St,{VCol:X["a"],VContainer:_["a"],VOverlay:yt["a"],VProgressCircular:_t["a"],VRow:S["a"]});var Ct={components:{DisplayNewsCards:jt}},xt=Ct,Ot=Object(d["a"])(xt,ot,st,!1,null,null,null),Vt=Ot.exports;r["a"].use(R["a"]);var Nt=new R["a"]({base:"/NewsTopStories/",mode:"history",routes:[{path:"/",name:"home",component:at},{path:"/section",name:"section",component:Vt}]}),kt=n("f309");r["a"].use(kt["a"]);var Dt=new kt["a"]({});n("d5e8"),n("5363");r["a"].config.productionTip=!1,new r["a"]({router:Nt,store:M,vuetify:Dt,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(t,e,n){},d5c4:function(t,e,n){t.exports=n.p+"img/NewYorkTimes.fba6274e.svg"}});
//# sourceMappingURL=app.2c556ec5.js.map