(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[139],{F6pP:function(t,e,n){"use strict";var r=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("J+/v");var o,a,u=r(n("MoRW")),f=r(n("2Taf")),c=r(n("vZ4D")),l=r(n("MhPg")),i=r(n("l4Ni")),p=r(n("ujKo")),s=w(n("q1tI")),d=n("MuoO"),v=r(n("3a4m")),y=r(n("ufQ4")),h=r(n("zHco")),g=r(n("ccVU"));function b(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(b=function(t){return t?n:e})(t)}function w(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var n=b(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var u=o?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=t[a]}return r.default=t,n&&n.set(t,r),r}function m(t){var e=O();return function(){var n,r=(0,p.default)(t);if(e){var o=(0,p.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}var P=(o=(0,d.connect)(function(t){var e=t.localplatformconfig,n=t.loading;return{newData:e.newData,postConfigLoading:n.effects["localplatformconfig/post"]}}),(0,y.default)(a=o(a=function(t){(0,l.default)(n,t);var e=m(n);function n(){var t;(0,f.default)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),t.onSubmit=function(e){var n=t.props.dispatch;e&&n({type:"localplatformconfig/post",payload:e})},t.onCancel=function(){v.default.push("/config/localplatformconfig")},t}return(0,c.default)(n,[{key:"render",value:function(){var t=this.props.currentUser,e=t&&t.entCode&&t.entCode.length<=4,n={binding:1,state:1};return s.default.createElement(h.default,null,e?s.default.createElement(g.default,{value:n,onSubmit:this.onSubmit,onCancel:this.onCancel}):s.default.createElement(u.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),n}(s.Component))||a)||a),j=P;e.default=j}}]);