(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){t.exports=n(24)},17:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(17),n(3)),u=(n(23),n(5)),l={isMatchLit:!1,matchCount:12,weather:"Clear"},h=n(11);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){Object(h.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=Object(u.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_MATCH":return e.payload?"Rain"===t.weather&&e.payload?m({},t,{isMatchLit:!1,matchCount:0}):t.matchCount>0&&!t.isMatchLit?m({},t,{isMatchLit:e.payload,matchCount:t.matchCount-1}):t:m({},t,{isMatchLit:!1});case"GET_MATCHES":var n=20,a=t.matchCount+e.payload;return"Rain"===t.weather||"Snow"===t.weather?m({},t,{matchCount:0}):m({},t,a>n?{matchCount:20}:{matchCount:a});case"CHANGE_WEATHER":return"Snow"===e.payload?m({},t,{isMatchLit:!1,matchCount:0,weather:e.payload}):"Rain"===e.payload?m({},t,{isMatchLit:!1,weather:e.payload}):m({},t,{weather:e.payload});default:return t}}),l),f=Object(i.b)((function(t){return{matchCount:t.matchCount,isMatchLit:t.isMatchLit}}),{getMatches:function(t){return{type:"GET_MATCHES",payload:t}},setMatch:function(t){return{type:"SET_MATCH",payload:t}}}),y=Object(i.b)((function(t){return{weather:t.weather}}),{changeWeather:function(t){return{type:"CHANGE_WEATHER",payload:t}}}),E=function(t){var e=t.weather,n=t.changeWeather;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Current weather is ",e,"."),r.a.createElement("button",{onClick:function(){return n("Clear")}},"Make it clear"),r.a.createElement("button",{onClick:function(){return n("Cloudy")}},"Make it cloudy"),r.a.createElement("button",{onClick:function(){return n("Rain")}},"Make it rain"),r.a.createElement("button",{onClick:function(){return n("Snow")}},"Make it snow"))},w=f((function(t){var e=t.matchCount,n=t.getMatches,a=t.isMatchLit,o=t.setMatch;return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Your match is ",a?"lit":"not lit","."),r.a.createElement("p",null,"You have ",e," matches."),r.a.createElement("button",{onClick:function(){return n(5)}},"Get matches"),a?r.a.createElement("button",{onClick:function(){return o(!1)}},"Put out match"):r.a.createElement("button",{onClick:function(){return o(!0)}},"Light one match"))})),C=y(E),b=function(){return r.a.createElement(i.a,{store:p},r.a.createElement(w,null),r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.8f4ec8a0.chunk.js.map