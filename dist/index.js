module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t,n){var r=n(17),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=c(n(5)),a=c(n(6)),i=c(n(8));function c(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=(0,o.default)();if(l||(l=(0,a.default)(c)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(c);var u=new Promise((function(n){"object"===(void 0===e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):l.then((function(r){var o=new r.Player(e,t);return c.on("ready",(function(){n(o)})),null}))})),s=i.default.promisifyPlayer(u,n);return s.on=c.on,s.off=c.off,s},e.exports=t.default},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=n(1),l=n.n(c);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){return o.a.createElement("svg",e,o.a.createElement("defs",null,o.a.createElement("style",null,".fil0","{","fill:#fff","}")),o.a.createElement("path",{className:"fil0",d:"M0 0h115v476H0zM232 0h115v476H232z"}))};d.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 347 476",fillRule:"evenodd",clipRule:"evenodd",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality"};var f=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M0 0l75 50-75 50z"}))};f.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 100"};var p=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M100 39.925H87.105v-21.03h-21.03V6H100zM100 93.221H66.075V80.326h21.03V59.295H100zM33.925 93.221H0V59.295h12.895v21.031h21.03zM12.895 39.925H0V6h33.925v12.895h-21.03z"}))};p.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var m=function(e){return o.a.createElement("svg",e,o.a.createElement("defs",null,o.a.createElement("style",null,".fil0","{","fill:#fff;fill-rule:nonzero","}")),o.a.createElement("path",{className:"fil0",d:"M.279 1.394v-.279H0V.929h.465v.465H.279zM1.115 0v.279h.279v.186H.929V0h.186zm-.65 0v.465H0V.279h.279V0h.186zm.464 1.394V.929h.465v.186h-.279v.279H.929z"}))};m.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1.394 1.394",fillRule:"evenodd",clipRule:"evenodd",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality"};var h=function(e){return o.a.createElement("svg",e,o.a.createElement("g",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},o.a.createElement("path",{d:"M2 10h3v10H2zM13.443 19.949L17 16.393v-2.786l-3.558-3.557 2.829-2.828.729.728V4L6 11v8l11 7v-3.949l-.729.728z"}),o.a.createElement("path",{d:"M27.586 10.05l-1.415-1.414-4.95 4.95L17 9.364l-.729-.728-1.414 1.414L17 12.193 19.807 15 17 17.807l-2.143 2.142 1.414 1.415.729-.728 4.221-4.222 4.95 4.95 1.415-1.415L22.635 15z"})))};h.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"};var v=function(e){return o.a.createElement("svg",e,o.a.createElement("g",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},o.a.createElement("path",{d:"M2 10h3v10H2zM17 26L6 19v-8l11-7zM22 14.682a5.996 5.996 0 0 1-2.738 5.029l.944 1.763C22.478 20.062 24 17.549 24 14.682s-1.522-5.379-3.794-6.792l-.944 1.763A5.997 5.997 0 0 1 22 14.682z"}),o.a.createElement("path",{d:"M28 14.682c0-4.39-2.377-8.225-5.904-10.318l-.945 1.764c2.9 1.752 4.85 4.926 4.85 8.555 0 3.629-1.949 6.803-4.85 8.556l.945 1.763C25.623 22.908 28 19.072 28 14.682z"})))};v.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"};t.default=function(e){var t=e.children,n=e.containerClassName,a=e.videoId,c=e.playButtonColor,s=void 0===c?"black":c,g=e.sliderPrimaryColor,y=void 0===g?"red":g,b=e.sliderSecondaryColor,w=void 0===b?"white":b,x=u(Object(r.useState)(15),2),E=x[0],S=x[1],M=u(Object(r.useState)(null),2),T=M[0],C=M[1],P=u(Object(r.useState)(!1),2),N=P[0],_=P[1],L=u(Object(r.useState)(!1),2),A=L[0],j=L[1],O=u(Object(r.useState)(0),2),k=O[0],V=O[1],I=u(Object(r.useState)(200),2),B=I[0],D=I[1],F=u(Object(r.useState)(100),2),R=F[0],H=F[1],z=u(Object(r.useState)(0),2),U=z[0],X=z[1],J=u(Object(r.useState)(null),2),Q=J[0],q=J[1],Y=u(Object(r.useState)(!1),2),G=Y[0],Z=Y[1],W=u(Object(r.useState)(300),2),K=W[0],$=W[1],ee=function(){var e=document.getElementById("progressSlider-".concat(a)).getBoundingClientRect().width;$(e)};Object(r.useEffect)((function(){return ee(),window.addEventListener("resize",ee),window.innerWidth<600&&S(20),function(){return window.removeEventListener("resize",ee)}}),[]),Object(r.useEffect)((function(){return C(new i.a("player-".concat(a),{videoId:a,playerVars:{controls:0,enablejsapi:1,rel:0,fs:0}})),document.addEventListener("fullscreenchange",re),document.addEventListener("mozfullscreenchange",re),document.addEventListener("webkitfullscreenchange",re),document.addEventListener("msfullscreenchange",re),function(){document.removeEventListener("fullscreenchange",re),document.removeEventListener("mozfullscreenchange",re),document.removeEventListener("webkitfullscreenchange",re),document.removeEventListener("msfullscreenchange",re)}}),[]),Object(r.useEffect)((function(){if(null!==T){var e=T.on("ready",oe),t=T.on("stateChange",ae);return function(){T.off(e),T.off(t)}}}),[T]),Object(r.useEffect)((function(){return function(){return clearInterval(Q)}}),[Q]);var te,ne,re=function(){j((function(e){return!e})),ee()},oe=function(e){q(setInterval((function(){return ie(e)}),1e3)),D(e.target.getDuration()),e.target.setVolume(R)},ae=function(e){1===e.data?_(!0):_(!1)},ie=function(e){var t=document.getElementById("progressSlider-".concat(a)).getAttribute("data-is-progress-drag");t&&"false"!==t||V(e.target.getCurrentTime())},ce=function(){if(0!==R)X(R),T.setVolume(0),H(0);else{var e=U;X(R),T.setVolume(e),H(e)}},le=function(e,t,n){var r=(e+Math.floor(E/2))/t*n;return r<0?0:r>n?n:r},ue=function(e){var t=le(e,K,B);V(t)},se=function(e){var t=le(e,80,100);H(t),T.setVolume(t)},de=function(e){var t,n;e.preventDefault(),e.target.id==="progressThumb-".concat(a)?(t=document.getElementById("progressSlider-".concat(a)),n=ue,t.setAttribute("data-is-progress-drag",!0)):e.target.id==="volumeThumb-".concat(a)&&(t=document.getElementById("volumeSlider-".concat(a)),n=se),document.onmousemove=pe(e.target,t,n),document.onmouseup=fe,document.ontouchmove=pe(e.target,t,n,!0),document.ontouchend=fe},fe=function(e){e.preventDefault();var t=document.getElementById("progressSlider-".concat(a));"true"===t.getAttribute("data-is-progress-drag")&&V((function(e){return T.seekTo(e,!0),e})),document.onmousemove=null,document.onmouseup=null,document.ontouchmove=null,document.ontouchend=null,t.setAttribute("data-is-progress-drag",!1)},pe=function(e,t,n){var r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Z(!0),!t)return null;var a=Math.floor(E/2),i=-1*a,c=t.getBoundingClientRect().width-a;return function(t){if(r){var a=(o?t.changedTouches[0].clientX:t.clientX)-r,l=e.offsetLeft+a;e.style.left=l<i?i:l>c?c:"".concat(l,"px"),n(l),r=o?t.changedTouches[0].clientX:t.clientX}else r=o?t.changedTouches[0].clientX:t.clientX}};return o.a.createElement("div",{id:"parent-".concat(a),className:"".concat(l.a.parentContainer," ").concat(n||"")},o.a.createElement("div",{id:"player-".concat(a),className:l.a.video}),!N&&o.a.createElement("div",{className:l.a.playButton,onClick:function(){return T.playVideo()},style:{backgroundColor:s}},o.a.createElement(f,null)),o.a.createElement("div",{className:l.a.controlsContainer,onMouseLeave:function(){return Z(!1)}},o.a.createElement("div",{className:l.a.controls},o.a.createElement("div",{onClick:function(){N?T.pauseVideo():T.playVideo()}},N?o.a.createElement(d,{className:"".concat(l.a.button," ").concat(l.a.play)}):o.a.createElement(f,{className:"".concat(l.a.button," ").concat(l.a.play)})),o.a.createElement("div",{id:"progressSlider-".concat(a),className:l.a.progressBar,style:{backgroundColor:"".concat(w,"80")}},o.a.createElement("div",{id:"progressThumb-".concat(a),className:l.a.thumb,onMouseDown:de,onTouchStart:de,onMouseEnter:function(){return Z(!0)},style:{width:"".concat(E,"px"),height:"".concat(E,"px"),left:"".concat(k/B*K-E/2,"px"),top:"".concat(E<20?-1*E/4:-1*E/4-2,"px"),backgroundColor:y}},G&&o.a.createElement("div",{className:l.a.progressDisplay},(te=Math.floor(k/60),ne="".concat(Math.floor(k%60)).padStart(2,"0"),"".concat(te,":").concat(ne)))),o.a.createElement("div",{className:l.a.innerBar,style:{width:"".concat(k/B*K,"px"),background:y}})),o.a.createElement("div",{className:l.a.volumeContainer},R<1?o.a.createElement(h,{className:l.a.button,onClick:ce}):o.a.createElement(v,{className:l.a.button,onClick:ce}),o.a.createElement("div",{id:"volumeSlider-".concat(a),className:l.a.volumeBar,style:{width:"".concat(80,"px"),backgroundColor:"".concat(w,"80")}},o.a.createElement("div",{id:"volumeThumb-".concat(a),className:l.a.thumb,onMouseDown:de,onTouchStart:de,style:{width:"".concat(E,"px"),height:"".concat(E,"px"),left:"".concat(R/100*80-E/2,"px"),top:"".concat(E<20?-1*E/4:-1*E/4-2,"px"),backgroundColor:y}}),o.a.createElement("div",{className:l.a.innerBar,style:{width:"".concat(R/100*80,"px"),background:y}}))),o.a.createElement("div",{onClick:function(){A?document.exitFullscreen():document.getElementById("parent-".concat(a)).requestFullscreen(),ee()}},A?o.a.createElement(m,{className:l.a.button}):o.a.createElement(p,{className:l.a.button})))),t)}},function(e,t,n){"use strict";var r;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/r=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(9)),o=c(n(13)),a=c(n(14)),i=c(n(15));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),u={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var c,u=a.default[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){n(c.value)}}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,c=!1,l=void 0;try{for(var u,s=o.default[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var d=u.value;r(d)}}catch(e){c=!0,l=e}finally{try{!a&&s.return&&s.return()}finally{if(c)throw l}}return n}};t.default=u,e.exports=t.default},function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n(11)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())}).call(this,n(10))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,u=[],s=!1,d=-1;function f(){s&&l&&(s=!1,l.length?u=l.concat(u):d=-1,u.length&&p())}function p(){if(!s){var e=c(f);s=!0;for(var t=u.length;t;){for(l=u,u=[];++d<t;)l&&l[d].run();d=-1,t=u.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"==typeof o){var a=i[l];n=o.call(e,a),i.splice(l,1),l--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(12),t.names=[],t.skips=[],t.formatters={}},function(e,t){var n=1e3,r=6e4,o=60*r,a=24*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?i(c=e,a,"day")||i(c,o,"hour")||i(c,r,"minute")||i(c,n,"second")||c+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(16),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var d=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:s,updater:v(f,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r)()(!1);o.push([e.i,"._3lT4LSMrNQT2NEQSwJurIJ {\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n}\n\n._3lT4LSMrNQT2NEQSwJurIJ:hover > ._1nGL5IV69Q4oTW6Ke0LfBN {\n  opacity: 1;\n}\n\n.PxxPHPNcdS2shXMlNGoTJ {\n  height: 100%;\n  width: 100%;\n}\n\n.vhgNaYyypqW2wZXMdQ7M8 {\n  position: absolute;\n  width: 100px;\n  height: 75px;\n  top: calc(50% - 75px / 2);\n  left: calc(50% - 100px / 2);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n.vhgNaYyypqW2wZXMdQ7M8 > svg {\n  width: 25%;\n}\n\n._1nGL5IV69Q4oTW6Ke0LfBN {\n  opacity: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  transition: ease-in-out 0.1s opacity;\n  padding-top: 20px;\n  background: linear-gradient(rgba(255,255,255,0) 10%, rgba(0,0,0, 0.8));\n}\n\n._3CPhyNoeXJSDNryfNspq8N {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(100% - 40px);\n  height: 45px;\n}\n\n._2c7yB-Va2Hxo3qD779C7IE {\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 5px;\n}\n\n._2c7yB-Va2Hxo3qD779C7IE:hover {\n  background-color: #ffffff80;\n}\n\n._9ebVU2PBVaOHCAgew56DD {\n  margin-left: 10px;\n}\n._9ebVU2PBVaOHCAgew56DD:hover {\n  background-color: transparent;\n}\n\n.TkRloLZn6KyI8X7vJGgyK {\n  border-radius: 15px;\n  height: 100%;\n}\n\n\n._2cxJP2yQsktXl1XaElsD8s {\n  display: flex;\n  align-items: center;\n}\n\n._2cxJP2yQsktXl1XaElsD8s > svg {\n  cursor: default;\n}\n\n._3TrdPjA_9KrHv9_Lzpl2Fi,\n.dymcPOMaqMrYmHxy4Fvio {\n  position: relative;\n  margin-bottom: 0;\n  height: 6px;\n  border-radius: 15px;\n  margin: 0 10px;\n}\n\n.dymcPOMaqMrYmHxy4Fvio {\n  flex: 1;\n  max-width: 90%;\n}\n\n._3H6SMHhI9bZ7LZA2Wdjmne {\n  position: absolute;\n  cursor: pointer;\n  border-radius: 50%;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n._1_2M68AwZTfGTrDE9U_9nJ {\n  position: absolute;\n  height: 20px;\n  width: 35px;\n  top: -25px;\n  left: -8px;\n  color: white;\n  text-shadow: 0px 0px 2px black;\n  font-weight: bold;\n}\n\n",""]),o.locals={parentContainer:"_3lT4LSMrNQT2NEQSwJurIJ",controlsContainer:"_1nGL5IV69Q4oTW6Ke0LfBN",video:"PxxPHPNcdS2shXMlNGoTJ",playButton:"vhgNaYyypqW2wZXMdQ7M8",controls:"_3CPhyNoeXJSDNryfNspq8N",button:"_2c7yB-Va2Hxo3qD779C7IE",play:"_9ebVU2PBVaOHCAgew56DD",innerBar:"TkRloLZn6KyI8X7vJGgyK",volumeContainer:"_2cxJP2yQsktXl1XaElsD8s",volumeBar:"_3TrdPjA_9KrHv9_Lzpl2Fi",progressBar:"dymcPOMaqMrYmHxy4Fvio",thumb:"_3H6SMHhI9bZ7LZA2Wdjmne",progressDisplay:"_1_2M68AwZTfGTrDE9U_9nJ"},t.default=o}]);