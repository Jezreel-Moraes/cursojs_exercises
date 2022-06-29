(()=>{"use strict";var r,n,e,o,t,a,i,c,s,u,A,l,p,d,f={122:(r,n,e)=>{e.d(n,{Z:()=>c});var o=e(537),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([r.id,":root {\r\n  --primary-color: rgb(19, 56, 124);\r\n  --secondary-color: rgb(24, 83, 192);\r\n  --tertiary-color: rgb(33, 107, 247);\r\n\r\n  --white-color: rgb(255, 255, 255);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  outline: none;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-size: 2rem;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  color: var(--primary-color);\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.container {\r\n  max-width: 60rem;\r\n  margin: 15rem auto;\r\n  padding: 4rem;\r\n  border-radius: 1.5rem;\r\n  background-color: var(--white-color);\r\n}\r\n\r\n.container > h1 {\r\n  font-size: 4rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.container p {\r\n  text-align: justify;\r\n}\r\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;EACE,iCAAiC;EACjC,mCAAmC;EACnC,mCAAmC;;EAEnC,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gDAAgD;EAChD,2BAA2B;EAC3B,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,qBAAqB;EACrB,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:[":root {\r\n  --primary-color: rgb(19, 56, 124);\r\n  --secondary-color: rgb(24, 83, 192);\r\n  --tertiary-color: rgb(33, 107, 247);\r\n\r\n  --white-color: rgb(255, 255, 255);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  outline: none;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-size: 2rem;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  color: var(--primary-color);\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.container {\r\n  max-width: 60rem;\r\n  margin: 15rem auto;\r\n  padding: 4rem;\r\n  border-radius: 1.5rem;\r\n  background-color: var(--white-color);\r\n}\r\n\r\n.container > h1 {\r\n  font-size: 4rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.container p {\r\n  text-align: justify;\r\n}\r\n"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var A=[].concat(r[u]);o&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),e&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=e):A[2]=e),t&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=t):A[4]="".concat(t)),n.push(A))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */"),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=o.base?s[0]+o.base:s[0],A=a[u]||0,l="".concat(u," ").concat(A);a[u]=A+1;var p=e(l),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var f=t(d,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=o(r,t),u=0;u<a.length;u++){var A=e(a[u]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},m={};function v(r){var n=m[r];if(void 0!==n)return n.exports;var e=m[r]={id:r,exports:{}};return f[r](e,e.exports,v),e.exports}v.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return v.d(n,{a:n}),n},v.d=(r,n)=>{for(var e in n)v.o(n,e)&&!v.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},v.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),v.nc=void 0,r=v(379),n=v.n(r),e=v(795),o=v.n(e),t=v(569),a=v.n(t),i=v(565),c=v.n(i),s=v(216),u=v.n(s),A=v(589),l=v.n(A),p=v(122),(d={}).styleTagTransform=l(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=u(),n()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals,console.log("alo")})();
//# sourceMappingURL=bundle.js.map