(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[174],{RanM:function(t,e,r){"use strict";var n=r("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("IzEo");var a=n(r("bx4M")),o=n(r("2Taf")),u=n(r("vZ4D")),c=n(r("MhPg")),f=n(r("l4Ni")),l=n(r("ujKo"));r("y8nQ");var i,s,p=n(r("Vl3Y")),d=h(r("q1tI")),v=n(r("IujW"));function y(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(y=function(t){return t?r:e})(t)}function h(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var r=y(e);if(r&&r.has(t))return r.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var u=a?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=t[o]}return n.default=t,r&&r.set(t,n),n}function w(t){var e=b();return function(){var r,n=(0,l.default)(t);if(e){var a=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}var m=(i=p.default.create(),i(s=function(t){(0,c.default)(r,t);var e=w(r);function r(){var t;(0,o.default)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a)),t.state={markdown:""},t}return(0,u.default)(r,[{key:"componentWillMount",value:function(){var t=this;fetch("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/changelog")).then(function(t){return t.text()}).then(function(e){return t.setState({markdown:e?JSON.parse(e).result:null})})}},{key:"render",value:function(){var t=this.state.markdown;return d.default.createElement(a.default,{bordered:!1},d.default.createElement(v.default,{className:"markdown-body",source:t,skipHtml:!0,escapeHtml:!1}))}}]),r}(d.Component))||s),k=m;e.default=k}}]);