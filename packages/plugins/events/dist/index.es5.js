!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.gondelPluginEvents={})}(this,function(e){"use strict";var t=function(e,n,t){return t(e)},o=window.__gondelPluginEvents||{};function n(e,r){o[e]||(o[e]=t);var n=o[e];o[e]=function(e,o,i){n(e,o,function(e,n,t){r(e,o,function(e){i(e,o,t)})})}}window.__gondelPluginEvents=o;window.__gondelRegistries=window.__gondelRegistries||{};var r="_gondel_";function m(e,n){void 0===n&&(n="g");var t,o=void 0!==(t=e).nodeType?t:t[0],i=o[r+n];if(i&&i._ctx)return i;throw new Error("Could not find any gondel component under "+o.nodeName+' in namespace "'+n+"\", \n    please check if your component is mounted via 'hasMountedGondelComponent'")}var i=window.__gondelDomEvents||{};window.__gondelDomEvents=i;var d=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector;function f(i,r,e){var c=function(e){for(var n=[],t=e;t;t=t.parentElement)n.push(t);return n}(e),u=[];c.forEach(function(e,n){var t=e.getAttribute(i),o=t&&r[t];o&&u.push({index:n,handlers:o})});var a=[];return u.forEach(function(e){var t=e.index,o=e.handlers;Object.keys(o).forEach(function(e){if(!e)return a.push({index:t,ctx:c[t],handlerOptions:o[e]});for(var n=t;0<=--n;)if(d.call(c[n],e))return a.push({index:n,ctx:c[t],handlerOptions:o[e]})})}),0===a.length?[]:(a.sort(function(e,n){return e.index>n.index?1:e.index===n.index?0:-1}),a)}function s(e,n,t){for(var o=[],i=0;i<e.length&&!n.cancelBubble;i++){var r=e[i],c=r.handlerOptions,u=m(r.ctx,t);if(u)for(var a=0;a<c.length&&!n.cancelBubble;a++){var d=u[c[a].handlerName].call(u,n);"function"==typeof d&&o.push(d)}}o.forEach(function(e){e()})}function l(e,n){var t=Object.keys(e).map(function(e){return"[data-"+n+'-name="'+e+'"]'}).join(",");if(!t)return[];for(var o=document.documentElement.querySelectorAll(t),i=[],r=0;r<o.length;r++){var c=m(o[r],n);c&&i.push(c)}return i}var c={resize:function(o,i){var r,c,u=!1,a=!1;function d(){a?requestAnimationFrame(d):(u=!1,c=void 0)}function m(o){if(a=!1,c){var i=c.map(function(e){var n=e.node;return{width:n.clientWidth,height:n.clientHeight}}),r=[];c.forEach(function(n,e){var t=i[e];t.width===n.width&&t.height===n.height||n.component._stopped||(n.component.__resizeSize=t,n.width=t.width,n.height=t.height,n.selectors.forEach(function(e){return e.forEach(function(e){return r.push(e.call(n.component,o,t))})}))}),r.forEach(function(e){"function"==typeof e&&e()})}}window.addEventListener("resize",function(e){var n,t;u?a||(a=!0,window.requestAnimationFrame(m.bind(e))):(n=e,t=l(o,i),u=!0,c=t.map(function(n){var e=n.__resizeSize||{width:0,height:0},t=o[n._componentName];return{component:n,node:n._ctx,selectors:Object.keys(t).map(function(e){return t[e].map(function(e){return n[e.handlerName]})}),width:e.width,height:e.height}}),m(n)),clearTimeout(r),r=setTimeout(d,250)})},key:function(i,n){window.addEventListener("keydown",function(t){var e=l(i,n),o=[];e.forEach(function(n){Object.keys(i[n._componentName]).forEach(function(e){""!==e&&t.key!==e||i[n._componentName][e].forEach(function(e){o.push(n[e.handlerName].call(n,t))})})}),o.forEach(function(e){"function"==typeof e&&e()})})},"swipe-left":function(a,d){document.documentElement.addEventListener("mousedown",function(e){var n,t,o=f("data-"+d+"-name",a,e.target);function i(e){(n=e).preventDefault(),t||(t=requestAnimationFrame(r))}function r(){t=void 0,n.x-e.x<-100&&(s(o,n,d),c())}function c(){document.documentElement.removeEventListener("mousemove",i),document.documentElement.removeEventListener("mouseup",u),t&&cancelAnimationFrame(t)}function u(e){e.preventDefault(),c()}0!==o.length&&(e.preventDefault(),document.documentElement.addEventListener("mousemove",i),document.documentElement.addEventListener("mouseup",u))})},"swipe-right":function(a,d){document.documentElement.addEventListener("mousedown",function(e){var n,t,o=f("data-"+d+"-name",a,e.target);function i(e){(n=e).preventDefault(),t||(t=requestAnimationFrame(r))}function r(){t=void 0,100<n.x-e.x&&(s(o,n,d),c())}function c(){document.documentElement.removeEventListener("mousemove",i),document.documentElement.removeEventListener("mouseup",u),t&&cancelAnimationFrame(t)}function u(e){e.preventDefault(),c()}0!==o.length&&(e.preventDefault(),document.documentElement.addEventListener("mousemove",i),document.documentElement.addEventListener("mouseup",u))})}};e.initEventPlugin=function(){n("registerEvent",function(e,n,t){var o=n.eventName,i=n.namespace,r=n.eventRegistry;c[o]?(c[o](r,i),t(!1)):t(e)}),n("sync",function(e,n,t){setTimeout(function(){e.forEach(function(e){e.__resizeSize={width:e._ctx.clientWidth,height:e._ctx.clientHeight}})}),t(e)})},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.es5.js.map
