(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[138],{PSo5:function(e,t,n){"use strict";var r=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("J+/v");var o,a,u=r(n("MoRW")),c=r(n("2Taf")),f=r(n("vZ4D")),i=r(n("MhPg")),l=r(n("l4Ni")),p=r(n("ujKo")),s=w(n("q1tI")),d=n("MuoO"),v=r(n("3a4m")),y=r(n("ufQ4")),g=r(n("zHco")),h=r(n("dNe8"));function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function O(e){var t=k();return function(){var n,r=(0,p.default)(e);if(t){var o=(0,p.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var m=(o=(0,d.connect)(function(e){var t=e.packageunionconfig,n=e.loading;return{newData:t.newData,postConfigLoading:n.effects["packageunionconfig/post"]}}),(0,y.default)(a=o(a=function(e){(0,i.default)(n,e);var t=O(n);function n(){var e;(0,c.default)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),e.onSubmit=function(t){var n=e.props.dispatch;t&&n({type:"packageunionconfig/post",payload:t})},e.onCancel=function(){v.default.push("/config/packageunion")},e}return(0,f.default)(n,[{key:"render",value:function(){var e=this.props.currentUser,t=e&&e.entCode&&e.entCode.length<=4,n={sType:0};return s.default.createElement(g.default,null,t?s.default.createElement(h.default,{value:n,onSubmit:this.onSubmit,onCancel:this.onCancel}):s.default.createElement(u.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),n}(s.Component))||a)||a),P=m;t.default=P}}]);