(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{Mxbm:function(e,t,n){"use strict";var r=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,a=r(n("2Taf")),f=r(n("vZ4D")),c=r(n("MhPg")),l=r(n("l4Ni")),i=r(n("ujKo")),p=r(n("p0pE")),d=w(n("q1tI")),s=n("MuoO"),v=r(n("mlPr"));function y(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}function h(e){var t=m();return function(){var n,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var b=(o=(0,s.connect)(function(e){var t=e.renewmodel,n=e.loading;return(0,p.default)({},t,{querying:n.effects["renewmodel/get"]})}),o(u=function(e){(0,c.default)(n,e);var t=h(n);function n(){return(0,a.default)(this,n),t.apply(this,arguments)}return(0,f.default)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"renewmodel/clearRenew"})}},{key:"render",value:function(){var e=this.props.match.params.id;return d.default.createElement(v.default,{value:e})}}]),n}(d.Component))||u),O=b;t.default=O}}]);