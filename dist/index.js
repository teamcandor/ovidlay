module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t,n){var r=n(17),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=c(n(5)),a=c(n(6)),i=c(n(8));function c(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=(0,o.default)();if(l||(l=(0,a.default)(c)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(c);var u=new Promise((function(n){"object"===(void 0===e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):l.then((function(r){var o=new r.Player(e,t);return c.on("ready",(function(){n(o)})),null}))})),s=i.default.promisifyPlayer(u,n);return s.on=c.on,s.off=c.off,s},e.exports=t.default},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=n(1),l=n.n(c);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){return o.a.createElement("svg",e,o.a.createElement("defs",null,o.a.createElement("style",null,".fil0","{","fill:#fff","}")),o.a.createElement("path",{className:"fil0",d:"M0 0h115v476H0zM232 0h115v476H232z"}))};d.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 347 476",fillRule:"evenodd",clipRule:"evenodd",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality"};var f=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M0 0l75 50-75 50z"}))};f.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 100"};var p=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M16.006 12.408a3.423 3.423 0 0 0-2.97 1.469 3.423 3.423 0 0 0-.062.062 3.425 3.425 0 0 0-.094.187 3.423 3.423 0 0 0-.062.125 3.423 3.423 0 0 0-.25.532 3.423 3.423 0 0 0-.031.094 3.425 3.425 0 0 0-.031.218 3.423 3.423 0 0 0-.031.094 3.425 3.425 0 0 0-.031.25 3.423 3.423 0 0 0 0 .125 3.425 3.425 0 0 0-.031.22 3.423 3.423 0 0 0 0 .061 3.425 3.425 0 0 0 .03.281v14.75a3.423 3.423 0 1 0 6.813.031V19.345l11.594-.031a3.423 3.423 0 0 0 2.5-5.844 3.423 3.423 0 0 0-2.5-1H16.569a3.423 3.423 0 0 0-.375-.03 3.423 3.423 0 0 0-.188-.032zm67.968 0a3.423 3.423 0 0 0-.187.031 3.423 3.423 0 0 0-.375.031H69.13a3.423 3.423 0 0 0-2.47 1 3.423 3.423 0 0 0 2.47 5.844l11.593.03v11.563a3.423 3.423 0 1 0 6.813-.03v-14.75a3.425 3.425 0 0 0 .03-.282 3.423 3.423 0 0 0 0-.062 3.425 3.425 0 0 0-.03-.219 3.423 3.423 0 0 0 0-.125 3.425 3.425 0 0 0-.031-.25 3.423 3.423 0 0 0-.031-.094 3.425 3.425 0 0 0-.031-.218 3.423 3.423 0 0 0-.031-.094 3.423 3.423 0 0 0-.25-.532 3.423 3.423 0 0 0-.063-.125 3.425 3.425 0 0 0-.094-.187 3.423 3.423 0 0 0-.062-.062 3.423 3.423 0 0 0-2.969-1.469zm-68.031 53.25a3.423 3.423 0 0 0-2.469 1 3.423 3.423 0 0 0-1.031 2.469l.031 14.312a3.423 3.423 0 0 0-.031.344 3.423 3.423 0 0 0 1.406 3.156 3.423 3.423 0 0 0 .094.062 3.425 3.425 0 0 0 .188.125 3.423 3.423 0 0 0 .094.062 3.423 3.423 0 0 0 .531.22 3.423 3.423 0 0 0 .094.03 3.425 3.425 0 0 0 .219.062 3.423 3.423 0 0 0 .125 0 3.425 3.425 0 0 0 .25.031 3.423 3.423 0 0 0 .094.031 3.425 3.425 0 0 0 .25.031 3.423 3.423 0 0 0 .03 0 3.425 3.425 0 0 0 .313-.03h14.75a3.423 3.423 0 1 0 .031-6.844H19.32l-.031-11.594a3.423 3.423 0 0 0-3.344-3.469zm68.094 0a3.423 3.423 0 0 0-3.344 3.469l-.031 11.594H69.068a3.423 3.423 0 1 0 .031 6.843h14.75a3.425 3.425 0 0 0 .313.031 3.423 3.423 0 0 0 .03 0 3.425 3.425 0 0 0 .25-.03 3.423 3.423 0 0 0 .095-.032 3.425 3.425 0 0 0 .25-.03 3.423 3.423 0 0 0 .125 0 3.425 3.425 0 0 0 .219-.063 3.423 3.423 0 0 0 .094-.03 3.423 3.423 0 0 0 .53-.22 3.423 3.423 0 0 0 .095-.061 3.425 3.425 0 0 0 .187-.125 3.423 3.423 0 0 0 .094-.062 3.423 3.423 0 0 0 1.438-3.157 3.423 3.423 0 0 0-.062-.343l.03-14.313a3.423 3.423 0 0 0-1.03-2.469 3.423 3.423 0 0 0-2.47-1z",style:{textIndent:"0",textTransform:"none",blockProgression:"tb"},overflow:"visible",color:"#000"}))};p.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var m=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{style:{textIndent:"0",textTransform:"none",blockProgression:"tb"},d:"M30.706 12.408a3.423 3.423 0 0 0-3.281 3.687v11.563l-11.594.03a3.423 3.423 0 0 0-2.468 5.813 3.423 3.423 0 0 0 2.468 1.032l14.313-.031a3.423 3.423 0 0 0 .344.062 3.423 3.423 0 0 0 3.156-1.438 3.423 3.423 0 0 0 .063-.062 3.425 3.425 0 0 0 .125-.219 3.423 3.423 0 0 0 .062-.094 3.423 3.423 0 0 0 .219-.53 3.423 3.423 0 0 0 .03-.095 3.425 3.425 0 0 0 .064-.219 3.423 3.423 0 0 0 0-.125 3.425 3.425 0 0 0 .03-.25 3.423 3.423 0 0 0 .032-.094 3.425 3.425 0 0 0 0-.25 3.423 3.423 0 0 0 0-.03 3.425 3.425 0 0 0 0-.282V16.095a3.423 3.423 0 0 0-3.563-3.688zm38.125 0a3.423 3.423 0 0 0-3.187 3.687v14.782a3.425 3.425 0 0 0-.031.28 3.423 3.423 0 0 0 0 .032 3.425 3.425 0 0 0 .03.25 3.423 3.423 0 0 0 0 .094 3.425 3.425 0 0 0 .032.25 3.423 3.423 0 0 0 .03.125 3.425 3.425 0 0 0 .032.219 3.423 3.423 0 0 0 .062.094 3.423 3.423 0 0 0 .218.53 3.423 3.423 0 0 0 .063.095 3.425 3.425 0 0 0 .094.219 3.423 3.423 0 0 0 .062.062 3.423 3.423 0 0 0 3.188 1.437 3.423 3.423 0 0 0 .344-.062l14.28.031a3.423 3.423 0 0 0 2.5-1.031 3.423 3.423 0 0 0-2.5-5.813l-11.593-.03V16.095a3.423 3.423 0 0 0-3.625-3.688zm-53.125 53.25a3.425 3.425 0 1 0 .313 6.844h11.594v11.625a3.423 3.423 0 0 0 5.843 2.468 3.423 3.423 0 0 0 1.032-2.468l-.032-14.313a3.423 3.423 0 0 0 .031-.344 3.423 3.423 0 0 0-1.437-3.156 3.423 3.423 0 0 0-.062-.062 3.425 3.425 0 0 0-.188-.125 3.423 3.423 0 0 0-.125-.062 3.423 3.423 0 0 0-.531-.219 3.423 3.423 0 0 0-.062-.062 3.425 3.425 0 0 0-.219-.03 3.423 3.423 0 0 0-.125-.032 3.425 3.425 0 0 0-.25 0 3.423 3.423 0 0 0-.094-.03 3.425 3.425 0 0 0-.25-.032 3.423 3.423 0 0 0-.03 0 3.425 3.425 0 0 0-.313.031H16.05a3.423 3.423 0 0 0-.344-.03zm53.063 0a3.425 3.425 0 0 0-.25.03 3.423 3.423 0 0 0-.125.032 3.425 3.425 0 0 0-.25 0 3.423 3.423 0 0 0-.094.03 3.425 3.425 0 0 0-.219.032 3.423 3.423 0 0 0-.094.062 3.423 3.423 0 0 0-.531.219 3.423 3.423 0 0 0-.125.062 3.425 3.425 0 0 0-.188.125 3.423 3.423 0 0 0-.062.062 3.423 3.423 0 0 0-1.437 3.156 3.423 3.423 0 0 0 .03.344v14.312a3.423 3.423 0 0 0 1 2.469 3.423 3.423 0 0 0 5.844-2.469L72.3 72.5h11.563a3.423 3.423 0 1 0-.031-6.812H69.08a3.425 3.425 0 0 0-.281-.031 3.423 3.423 0 0 0-.031 0z",overflow:"visible",color:"#000"}))};m.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var h=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M59.651 17.247v61.67l-25.67-13h-10v-33h10z"}),o.a.createElement("path",{d:"M61.151 81.36L33.623 67.417H22.481v-36H33.56L61.15 14.574V81.36zm-35.67-16.942h8.859L58.15 76.477V19.92L34.403 34.418h-8.922v30zM87.276 34.205l2.122 2.122-21.989 21.988-2.121-2.121z"}),o.a.createElement("g",null,o.a.createElement("path",{d:"M67.41 34.205l21.988 21.989-2.122 2.12-21.988-21.987z"})))};h.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var v=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M64.812 21.163v61.67l-25.67-13h-10v-33h10z"}),o.a.createElement("path",{d:"M66.313 85.275L38.784 71.334H27.643v-36H38.72L66.313 18.49v66.785zm-35.67-16.941H39.5l23.812 12.059V23.836L39.564 38.334h-8.921v30z"}),o.a.createElement("g",null,o.a.createElement("path",{d:"M75.976 34.871v34.25M74.476 34.871h3v34.25h-3z"})))};v.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var g=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M60.77 21.163v61.67l-25.66-13-2.754-.71-7.246.37v-33h10z"}),o.a.createElement("path",{d:"M62.27 85.274L34.577 71.245l-2.373-.612-8.595.438V34.993h11.086L62.27 18.52v66.754zm-29.761-17.66l3.278.881L59.27 80.392V23.807L35.523 37.993H26.61v29.922l5.9-.302zM71.94 34.873v34.25M70.439 34.873h3v34.25h-3z"}),o.a.createElement("g",null,o.a.createElement("path",{d:"M80.773 30.519v42.959M79.273 30.52h3v42.958h-3z"})))};g.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var y=function(e){return o.a.createElement("svg",e,o.a.createElement("path",{d:"M57.632 21.163v61.67l-25.67-13-10-.34v-33h10z"}),o.a.createElement("path",{d:"M59.132 85.275L31.58 71.322l-11.118-.379v-35.95h11.086l27.584-16.472v66.754zm-35.67-17.232l8.882.303 23.788 12.047V23.806L32.376 37.993h-8.914v30.05zM66.795 39.271v25.448M65.295 39.271h3v25.448h-3z"}),o.a.createElement("g",null,o.a.createElement("path",{d:"M74.879 35.324v33.343M73.379 35.323h3v33.344h-3z"})),o.a.createElement("g",null,o.a.createElement("path",{d:"M82.962 32.157v39.677M81.462 32.157h3v39.677h-3z"})))};y.defaultProps={height:"100",width:"100",fill:"#FFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};t.default=function(e){var t=e.children,n=e.containerClassName,a=e.videoId,c=e.playButtonColor,s=void 0===c?"black":c,b=e.sliderPrimaryColor,w=void 0===b?"red":b,x=e.sliderSecondaryColor,E=void 0===x?"white":x,M=u(Object(r.useState)(null),2),S=M[0],T=M[1],P=u(Object(r.useState)(!1),2),C=P[0],N=P[1],L=u(Object(r.useState)(!1),2),_=L[0],A=L[1],j=u(Object(r.useState)(0),2),O=j[0],k=j[1],I=u(Object(r.useState)(200),2),V=I[0],B=I[1],z=u(Object(r.useState)(100),2),D=z[0],F=z[1],H=u(Object(r.useState)(0),2),R=H[0],U=H[1],J=u(Object(r.useState)(null),2),X=J[0],Q=J[1],q=u(Object(r.useState)(!1),2),Y=q[0],G=q[1],Z=u(Object(r.useState)(300),2),K=Z[0],W=Z[1],$=function(){var e=document.getElementById("progressSlider-".concat(a)).getBoundingClientRect().width;W(e)};Object(r.useEffect)((function(){return $(),window.addEventListener("resize",$),function(){return window.removeEventListener("resize",$)}}),[]),Object(r.useEffect)((function(){return T(new i.a("player-".concat(a),{videoId:a,playerVars:{controls:0,enablejsapi:1,rel:0,fs:0}})),document.addEventListener("fullscreenchange",ne),document.addEventListener("mozfullscreenchange",ne),document.addEventListener("webkitfullscreenchange",ne),document.addEventListener("msfullscreenchange",ne),function(){document.removeEventListener("fullscreenchange",ne),document.removeEventListener("mozfullscreenchange",ne),document.removeEventListener("webkitfullscreenchange",ne),document.removeEventListener("msfullscreenchange",ne)}}),[]),Object(r.useEffect)((function(){if(null!==S){var e=S.on("ready",re),t=S.on("stateChange",oe);return function(){S.off(e),S.off(t)}}}),[S]),Object(r.useEffect)((function(){return function(){return clearInterval(X)}}),[X]);var ee,te,ne=function(){A((function(e){return!e})),$()},re=function(e){Q(setInterval((function(){return ae(e)}),1e3)),B(e.target.getDuration()),e.target.setVolume(D)},oe=function(e){1===e.data?N(!0):N(!1)},ae=function(e){var t=document.getElementById("progressSlider-".concat(a)).getAttribute("data-is-progress-drag");t&&"false"!==t||k(e.target.getCurrentTime())},ie=function(){if(0!==D)U(D),S.setVolume(0),F(0);else{var e=R;U(D),S.setVolume(e),F(e)}},ce=function(e,t,n){var r=(e+Math.floor(7.5))/t*n;return r<0?0:r>n?n:r},le=function(e){var t=ce(e,K,V);k(t)},ue=function(e){var t=ce(e,80,100);F(t),S.setVolume(t)},se=function(e){var t,n;e.preventDefault(),e.target.id==="progressThumb-".concat(a)?(t=document.getElementById("progressSlider-".concat(a)),n=le,t.setAttribute("data-is-progress-drag",!0)):e.target.id==="volumeThumb-".concat(a)&&(t=document.getElementById("volumeSlider-".concat(a)),n=ue),document.onmousemove=fe(e.target,t,n),document.onmouseup=de,document.ontouchmove=fe(e.target,t,n,!0),document.ontouchend=de},de=function(e){e.preventDefault();var t=document.getElementById("progressSlider-".concat(a));"true"===t.getAttribute("data-is-progress-drag")&&k((function(e){return S.seekTo(e,!0),e})),document.onmousemove=null,document.onmouseup=null,document.ontouchmove=null,document.ontouchend=null,t.setAttribute("data-is-progress-drag",!1)},fe=function(e,t,n){var r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(G(!0),!t)return null;var a=Math.floor(7.5),i=-1*a,c=t.getBoundingClientRect().width-a;return function(t){if(r){var a=(o?t.changedTouches[0].clientX:t.clientX)-r,l=e.offsetLeft+a;e.style.left=l<i?i:l>c?c:"".concat(l,"px"),n(l),r=o?t.changedTouches[0].clientX:t.clientX}else r=o?t.changedTouches[0].clientX:t.clientX}};return o.a.createElement("div",{id:"parent-".concat(a),className:"".concat(l.a.parentContainer," ").concat(n||"")},o.a.createElement("div",{id:"player-".concat(a),className:l.a.video}),!C&&o.a.createElement("div",{className:l.a.playButton,onClick:function(){return S.playVideo()},style:{backgroundColor:s}},o.a.createElement(f,null)),o.a.createElement("div",{className:l.a.controlsContainer,onMouseLeave:function(){return G(!1)}},o.a.createElement("div",{className:l.a.controls},o.a.createElement("div",{onClick:function(){C?S.pauseVideo():S.playVideo()}},C?o.a.createElement(d,{className:"".concat(l.a.button," ").concat(l.a.play)}):o.a.createElement(f,{className:"".concat(l.a.button," ").concat(l.a.play)})),o.a.createElement("div",{id:"progressSlider-".concat(a),className:l.a.progressBar,style:{backgroundColor:"".concat(E,"80")}},o.a.createElement("div",{id:"progressThumb-".concat(a),className:l.a.thumb,onMouseDown:se,onTouchStart:se,onMouseEnter:function(){return G(!0)},style:{width:"".concat(15,"px"),height:"".concat(15,"px"),left:"".concat(O/V*K-7.5,"px"),top:"".concat(-3.75,"px"),backgroundColor:w}},Y&&o.a.createElement("div",{className:l.a.progressDisplay},(ee=Math.floor(O/60),te="".concat(Math.floor(O%60)).padStart(2,"0"),"".concat(ee,":").concat(te)))),o.a.createElement("div",{className:l.a.innerBar,style:{width:"".concat(O/V*K,"px"),background:w}})),o.a.createElement("div",{className:l.a.volumeContainer},D<1?o.a.createElement(h,{className:l.a.button,onClick:ie}):D<33?o.a.createElement(v,{className:l.a.button,onClick:ie}):D<66?o.a.createElement(g,{className:l.a.button,onClick:ie}):o.a.createElement(y,{className:l.a.button,onClick:ie}),o.a.createElement("div",{id:"volumeSlider-".concat(a),className:l.a.volumeBar,style:{width:"".concat(80,"px"),backgroundColor:"".concat(E,"80")}},o.a.createElement("div",{id:"volumeThumb-".concat(a),className:l.a.thumb,onMouseDown:se,onTouchStart:se,style:{width:"".concat(15,"px"),height:"".concat(15,"px"),left:"".concat(D/100*80-7.5,"px"),top:"".concat(-3.75,"px"),backgroundColor:w}}),o.a.createElement("div",{className:l.a.innerBar,style:{width:"".concat(D/100*80,"px"),background:w}}))),o.a.createElement("div",{onClick:function(){_?document.exitFullscreen():document.getElementById("parent-".concat(a)).requestFullscreen(),$()}},_?o.a.createElement(m,{className:l.a.button}):o.a.createElement(p,{className:l.a.button})))),t)}},function(e,t,n){"use strict";var r;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/r=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(9)),o=c(n(13)),a=c(n(14)),i=c(n(15));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),u={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var c,u=a.default[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){n(c.value)}}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,c=!1,l=void 0;try{for(var u,s=o.default[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var d=u.value;r(d)}}catch(e){c=!0,l=e}finally{try{!a&&s.return&&s.return()}finally{if(c)throw l}}return n}};t.default=u,e.exports=t.default},function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n(11)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())}).call(this,n(10))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,u=[],s=!1,d=-1;function f(){s&&l&&(s=!1,l.length?u=l.concat(u):d=-1,u.length&&p())}function p(){if(!s){var e=c(f);s=!0;for(var t=u.length;t;){for(l=u,u=[];++d<t;)l&&l[d].run();d=-1,t=u.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"==typeof o){var a=i[l];n=o.call(e,a),i.splice(l,1),l--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(12),t.names=[],t.skips=[],t.formatters={}},function(e,t){var n=1e3,r=6e4,o=60*r,a=24*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?i(c=e,a,"day")||i(c,o,"hour")||i(c,r,"minute")||i(c,n,"second")||c+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(16),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var d=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:s,updater:v(f,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r)()(!1);o.push([e.i,"._3lT4LSMrNQT2NEQSwJurIJ {\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n}\n\n._3lT4LSMrNQT2NEQSwJurIJ:hover > ._1nGL5IV69Q4oTW6Ke0LfBN {\n  opacity: 1;\n}\n\n.PxxPHPNcdS2shXMlNGoTJ {\n  height: 100%;\n  width: 100%;\n}\n\n.vhgNaYyypqW2wZXMdQ7M8 {\n  position: absolute;\n  width: 100px;\n  height: 75px;\n  top: calc(50% - 75px / 2);\n  left: calc(50% - 100px / 2);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n.vhgNaYyypqW2wZXMdQ7M8 > svg {\n  width: 25%;\n}\n\n._1nGL5IV69Q4oTW6Ke0LfBN {\n  opacity: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  transition: ease-in-out 0.1s opacity;\n  padding-top: 20px;\n  background: linear-gradient(rgba(255,255,255,0) 10%, rgba(0,0,0, 0.8));\n}\n\n._3CPhyNoeXJSDNryfNspq8N {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(100% - 40px);\n  height: 45px;\n}\n\n._2c7yB-Va2Hxo3qD779C7IE {\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 5px;\n}\n\n._2c7yB-Va2Hxo3qD779C7IE:hover {\n  background-color: #ffffff80;\n}\n\n._9ebVU2PBVaOHCAgew56DD {\n  margin-left: 10px;\n}\n._9ebVU2PBVaOHCAgew56DD:hover {\n  background-color: transparent;\n}\n\n.TkRloLZn6KyI8X7vJGgyK {\n  border-radius: 15px;\n  height: 100%;\n}\n\n\n._2cxJP2yQsktXl1XaElsD8s {\n  display: flex;\n  align-items: center;\n}\n\n._2cxJP2yQsktXl1XaElsD8s > svg {\n  cursor: default;\n}\n\n._3TrdPjA_9KrHv9_Lzpl2Fi,\n.dymcPOMaqMrYmHxy4Fvio {\n  position: relative;\n  margin-bottom: 0;\n  height: 6px;\n  border-radius: 15px;\n  margin: 0 10px;\n}\n\n.dymcPOMaqMrYmHxy4Fvio {\n  flex: 1;\n  max-width: 90%;\n}\n\n._3H6SMHhI9bZ7LZA2Wdjmne {\n  position: absolute;\n  cursor: pointer;\n  border-radius: 50%;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n._1_2M68AwZTfGTrDE9U_9nJ {\n  position: absolute;\n  height: 20px;\n  width: 35px;\n  top: -25px;\n  left: -8px;\n  color: white;\n  text-shadow: 0px 0px 2px black;\n  font-weight: bold;\n}\n\n",""]),o.locals={parentContainer:"_3lT4LSMrNQT2NEQSwJurIJ",controlsContainer:"_1nGL5IV69Q4oTW6Ke0LfBN",video:"PxxPHPNcdS2shXMlNGoTJ",playButton:"vhgNaYyypqW2wZXMdQ7M8",controls:"_3CPhyNoeXJSDNryfNspq8N",button:"_2c7yB-Va2Hxo3qD779C7IE",play:"_9ebVU2PBVaOHCAgew56DD",innerBar:"TkRloLZn6KyI8X7vJGgyK",volumeContainer:"_2cxJP2yQsktXl1XaElsD8s",volumeBar:"_3TrdPjA_9KrHv9_Lzpl2Fi",progressBar:"dymcPOMaqMrYmHxy4Fvio",thumb:"_3H6SMHhI9bZ7LZA2Wdjmne",progressDisplay:"_1_2M68AwZTfGTrDE9U_9nJ"},t.default=o}]);