(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[114],{t5XU:function(t,e,n){"use strict";var r=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("jehZ"));n("+L6B");var u=r(n("2/Rp"));n("8dk+");var l=r(n("eZ87")),i=r(n("2Taf")),f=r(n("vZ4D")),o=r(n("MhPg")),c=r(n("l4Ni")),s=r(n("ujKo")),p=r(n("p0pE"));n("y8nQ");var d,v,y,g=r(n("Vl3Y")),m=O(n("q1tI")),h=n("MuoO");function b(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(b=function(t){return t?n:e})(t)}function O(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var n=b(e);if(n&&n.has(t))return n.get(t);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var l=a?Object.getOwnPropertyDescriptor(t,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=t[u]}return r.default=t,n&&n.set(t,r),r}function w(t){var e=M();return function(){var n,r=(0,s.default)(t);if(e){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}var j=(d=g.default.create(),v=(0,h.connect)(function(t){var e=t.setting,n=t.loading;return{setting:(0,p.default)({},e),submitting:n.effects["setting/putSetting"]}}),d(y=v(y=function(t){(0,o.default)(n,t);var e=w(n);function n(){var t;(0,i.default)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a)),t.handleSubmit=function(e){var n=t.props,r=n.form,a=n.dispatch,u=n.setting;e.preventDefault(),r.validateFieldsAndScroll(function(t,e){t||(u.signOutMinute=e.signOutMinute,a({type:"setting/putSetting",payload:u}))})},t}return(0,f.default)(n,[{key:"render",value:function(){var t=this.props,e=t.form.getFieldDecorator,n=t.submitting,r=t.setting.signOutMinute,i=void 0===r?30:r,f={labelCol:{span:6},wrapperCol:{span:14}},o={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return m.default.createElement(g.default,(0,a.default)({},f,{onSubmit:this.handleSubmit}),m.default.createElement(g.default.Item,{label:"\u4e0d\u64cd\u4f5c\u81ea\u52a8\u9000\u51fa (\u5206)"},e("signOutMinute",{initialValue:i})(m.default.createElement(l.default,{style:{marginLeft:20},min:0,max:60,marks:{0:"\u4e0d\u9000\u51fa",5:"5",10:"10",20:"20",30:"30",40:"40",50:"50",60:"60"}}))),m.default.createElement(g.default.Item,(0,a.default)({},o,{style:{marginTop:32}}),m.default.createElement(u.default,{type:"primary",htmlType:"submit",loading:n},"\u63d0\u4ea4"),m.default.createElement(u.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))}}]),n}(m.Component))||y)||y),k=j;e.default=k}}]);