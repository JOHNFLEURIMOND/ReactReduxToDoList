!function(n,t){for(var e in t)n[e]=t[e]}(exports,function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";function r(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,u=function(){};return{s:u,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function u(n,t,e,r,o,u,i){try{var a=n[u](i),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(r,o)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){u(i,r,o,a,c,"next",n)}function c(n){u(i,r,o,a,c,"throw",n)}a(void 0)}))}}e.r(t),e.d(t,"handler",(function(){return c}));var a={"content-type":"application/json","Access-Control-Allow-Origin":"*"};function c(){return f.apply(this,arguments)}function f(){return(f=i(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],"https://setfive-public.s3.amazonaws.com/api.json","https://cors-anywhere.herokuapp.com/",n.next=5,fetch("".concat("https://cors-anywhere.herokuapp.com/").concat("https://setfive-public.s3.amazonaws.com/api.json"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(n){n.ok&&n.json().then((function(n){var e,o=r(n);try{for(o.s();!(e=o.n()).done;){var u=e.value;"Taven 730"!==u.name&&"ABC Pizza"!==u.name||t.push(u)}}catch(n){o.e(n)}finally{o.f()}return t}))})).catch((function(n){console.log(n)}));case 5:return n.abrupt("return",{body:JSON.stringify(t),statusCode:200,headers:a});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}]));