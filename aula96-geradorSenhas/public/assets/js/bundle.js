(()=>{var n={958:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>c});var o=r(354),t=r.n(o),i=r(314),a=r.n(i)()(t());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),a.push([n.id,":root {\n  --primary-color: #D93B3B;\n  --primary-color-darker: #591616;\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0px;\n}\n\ninput[type='checkbox'] {\n  width: 15px;\n  height: 15px;\n}\n\nbutton {\n  display: block;\n  margin: 40px 0px;\n  font-size: 1em;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,wBAAwB;EACxB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: #D93B3B;\n  --primary-color-darker: #591616;\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0px;\n}\n\ninput[type='checkbox'] {\n  width: 15px;\n  height: 15px;\n}\n\nbutton {\n  display: block;\n  margin: 40px 0px;\n  font-size: 1em;\n}\n"],sourceRoot:""}]);const c=a},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,o,t,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var A=0;A<n.length;A++){var u=[].concat(n[A]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),e.push(u))}},e}},354:n=>{"use strict";n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(t," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},779:(n,e,r)=>{var o=r(72),t=r(958);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.id,t,""]]);o(t,{insert:"head",singleton:!1}),n.exports=t.locals||{}},72:(n,e,r)=>{"use strict";var o,t=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function a(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},o=[],t=0;t<n.length;t++){var c=n[t],s=e.base?c[0]+e.base:c[0],A=r[s]||0,u="".concat(s," ").concat(A);r[s]=A+1;var p=a(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(d)):i.push({identifier:u,updater:m(d,e),references:1}),o.push(u)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=r.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=t(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var A,u=(A=[],function(n,e){return A[n]=e,A.filter(Boolean).join("\n")});function p(n,e,r,o){var t=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,t);else{var i=document.createTextNode(t),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,r){var o=r.css,t=r.media,i=r.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var l=null,f=0;function m(n,e){var r,o,t;if(e.singleton){var i=f++;r=l||(l=s(e)),o=p.bind(null,r,i,!1),t=p.bind(null,r,i,!0)}else r=s(e),o=d.bind(null,r,e),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else t()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<r.length;o++){var t=a(r[o]);i[t].references--}for(var s=c(n,e),A=0;A<r.length;A++){var u=a(r[A]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=s}}}}},e={};function r(o){var t=e[o];if(void 0!==t)return t.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var o in e)r.o(e,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nc=void 0,(()=>{"use strict";var n=function(n,e){return Math.floor(Math.random()*(e-n)+n)},e=function(){return",.;[]{}!@#$%*()_-+="[n(0,19)]},o=document.querySelector(".senha-gerada"),t=document.querySelector(".qtd-caracteres"),i=document.querySelector(".chk-maiusculas"),a=document.querySelector(".chk-minusculas"),c=document.querySelector(".chk-numero"),s=document.querySelector(".chk-simbolos"),A=document.querySelector(".gerar-senha");r(779),A.addEventListener("click",(function(){o.innerHTML=function(r,o,t,i,a){var c=[];r=Number(r);for(var s=0;s<r;s++)o&&c.push(String.fromCharCode(n(65,91))),t&&c.push(String.fromCharCode(n(97,123))),i&&c.push(String.fromCharCode(n(48,58))),a&&c.push(e());return c.join("").slice(0,r)}(t.value,i.checked,a.checked,c.checked,s.checked)}))})()})();
//# sourceMappingURL=bundle.js.map