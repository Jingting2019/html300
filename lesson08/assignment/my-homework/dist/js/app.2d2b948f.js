(function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({desertification:"desertification",history:"history",recovery:"recovery"}[e]||e)+"."+{desertification:"95db9ed3",history:"ecc78b92",recovery:"4b8a277e"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={history:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({desertification:"desertification",history:"history",recovery:"recovery"}[e]||e)+"."+{desertification:"31d6cfe0",history:"1334c880",recovery:"31d6cfe0"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"0418":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"jumbotron"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"text-primary mt-5"},[e._v("Restoration of Mu Us Desert Ecosystems")]),r("p",[e._v(e._s(e._f("uppercase")(e.text)))]),e._t("page",[e._v("In Half Centery")])],2)])},o=[],a={name:"Header",data:function(){return{text:"a desert's story"}},filters:{uppercase:function(e){return e.toUpperCase()}}},i=a,s=r("2877"),c=Object(s["a"])(i,n,o,!1,null,null,null);t["a"]=c.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/history"}},[e._v("History")]),e._v(" | "),r("router-link",{attrs:{to:"/desertification"}},[e._v("Desertification")]),e._v(" | "),r("router-link",{attrs:{to:"/recovery"}},[e._v("Recovery")])],1),r("router-view")],1)},a=[],i=(r("034f"),r("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=(r("d3b7"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Header"),r("h1",{attrs:{slot:"page"},slot:"page"},[e._v("The overview about the desert")]),e._m(0)],1)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mt-5"},[r("p",[e._v("What did the explorer say when he found water in three different places in the desert?")]),r("button",{staticClass:"btn-success m-5",attrs:{type:"button","data-toggle":"tooltip","data-placement":"right",title:"Well, well, well."}},[e._v("Hover here to see the answer")])])}],p=r("0418"),h={components:{Header:p["a"]}},v=h,m=Object(i["a"])(v,f,d,!1,null,null,null),y=m.exports;n["default"].use(l["a"]);var b=[{path:"/",name:"Home",component:y},{path:"/history",name:"History",component:function(){return r.e("history").then(r.bind(null,"e4bb"))}},{path:"/desertification",name:"Desertification",component:function(){return r.e("desertification").then(r.bind(null,"9705"))}},{path:"/recovery",name:"Recovery",component:function(){return r.e("recovery").then(r.bind(null,"7624"))}}],g=new l["a"]({mode:"history",base:"/",routes:b}),_=g,w=(r("4989"),r("5f5b"));r("abe2");n["default"].use(w["a"]),n["default"].config.productionTip=!1,new n["default"]({router:_,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){},abe2:function(e,t,r){}});
//# sourceMappingURL=app.2d2b948f.js.map