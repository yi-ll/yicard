(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[140],{eAV9:function(t,e,n){"use strict";var o=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("J+/v");var a,r,l=o(n("MoRW")),f=o(n("p0pE")),u=o(n("2Taf")),c=o(n("vZ4D")),i=o(n("MhPg")),p=o(n("l4Ni")),d=o(n("ujKo")),s=w(n("q1tI")),v=n("MuoO"),y=o(n("3a4m")),g=o(n("ufQ4")),h=o(n("zHco")),m=o(n("ccVU"));function b(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(b=function(t){return t?n:e})(t)}function w(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var n=b(e);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var l=a?Object.getOwnPropertyDescriptor(t,r):null;l&&(l.get||l.set)?Object.defineProperty(o,r,l):o[r]=t[r]}return o.default=t,n&&n.set(t,o),o}function O(t){var e=M();return function(){var n,o=(0,d.default)(t);if(e){var a=(0,d.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,p.default)(this,n)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}var j=(a=(0,v.connect)(function(t){var e=t.localplatformconfig,n=t.loading;return{oldData:e.oldData,getConfigLoading:n.effects["localplatformconfig/get"],postConfigLoading:n.effects["localplatformconfig/post"]}}),(0,g.default)(r=a(r=function(t){(0,i.default)(n,t);var e=O(n);function n(){var t;(0,u.default)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a)),t.onSubmit=function(e){var n=t.props,o=n.dispatch,a=n.match;if(e){var r=(0,f.default)({},e,{id:a.params.id});o({type:"localplatformconfig/post",payload:r})}},t.onCancel=function(){y.default.push("/config/localplatformconfig")},t}return(0,c.default)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.dispatch,n=t.match,o=n.params.id;o&&e({type:"localplatformconfig/get",payload:{id:o}})}},{key:"render",value:function(){var t=this.props,e=t.oldData,n=t.currentUser,o=n&&n.entCode&&n.entCode.length<=4;return s.default.createElement(h.default,null,o?s.default.createElement(m.default,{value:e,onSubmit:this.onSubmit,editable:!0,onCancel:this.onCancel}):s.default.createElement(l.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),n}(s.Component))||r)||r),C=j;e.default=C}}]);