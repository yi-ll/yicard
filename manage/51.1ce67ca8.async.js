(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{QNpK:function(e,t,a){e.exports={desc:"antd-pro\\pages\\-base-manager\\-role-manager\\create\\index-desc"}},Y2nc:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=r(a("bx4M"));a("/zsF");var l=r(a("PArb"));a("+L6B");var u=r(a("2/Rp")),f=r(a("jehZ"));a("5NDa");var o=r(a("5rEg")),c=r(a("p0pE")),i=r(a("2Taf")),d=r(a("vZ4D")),s=r(a("MhPg")),p=r(a("l4Ni")),m=r(a("ujKo"));a("y8nQ");var g,v,y,h,b=r(a("Vl3Y")),E=C(a("q1tI")),w=r(a("HZnN")),M=a("MuoO"),O=r(a("6v3/")),j=r(a("zHco")),x=r(a("3a4m")),P=r(a("ufQ4")),k=r(a("QNpK"));function R(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(R=function(e){return e?a:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=R(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=n?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(r,l,u):r[l]=e[l]}return r.default=e,a&&a.set(e,r),r}function D(e){var t=N();return function(){var a,r=(0,m.default)(e);if(t){var n=(0,m.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,p.default)(this,a)}}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var S=b.default.Item,A=(g=b.default.create(),v=(0,M.connect)(function(e){var t=e.loading;return{submitting:t.effects["roleManager/post"]}}),y=w.default.Secured("/baseManager/roleManager/create"),(0,P.default)(h=g(h=v(h=y(h=function(e){(0,s.default)(a,e);var t=D(a);function a(){var e;(0,i.default)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n)),e.handleSubmit=function(t){var a=e.props,r=a.form,n=a.currentUser,l=a.dispatch;t.preventDefault(),r.validateFieldsAndScroll(function(e,t){if(!e){var a=(0,c.default)({},t,{authRange:t.authRange.join(","),enterprise:n.enterprise});l({type:"roleManager/post",payload:a})}})},e.onCancel=function(){x.default.goBack()},e}return(0,d.default)(a,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=e.currentUser,c=t.getFieldDecorator,i={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},d={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return E.default.createElement(j.default,null,E.default.createElement(n.default,{bordered:!1},E.default.createElement(b.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},E.default.createElement(S,(0,f.default)({},i,{label:"\u89d2\u8272\u540d\u79f0"}),c("name",{rules:[{required:!0,message:"\u89d2\u8272\u540d\u79f0\u5fc5\u586b"}]})(E.default.createElement(o.default,{placeholder:"\u8bf7\u8f93\u5165"}))),E.default.createElement(S,(0,f.default)({},i,{label:E.default.createElement("span",null,"\u89d2\u8272\u8303\u56f4")}),c("authRange",{initialValue:[r.enterprise],rules:[{required:!1,message:"\u89d2\u8272\u8303\u56f4\u5fc5\u586b"}]})(E.default.createElement(O.default,{multiple:!0,attributeValue:"id",treeCheckStrictly:!0}))),E.default.createElement(S,(0,f.default)({},d,{style:{marginTop:32,textAlign:"center"}}),E.default.createElement(u.default,{type:"primary",htmlType:"submit",loading:a},"\u63d0\u4ea4"),E.default.createElement(u.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de"))),E.default.createElement(l.default,{style:{margin:"40px 0 24px"}}),E.default.createElement("div",{className:k.default.desc},E.default.createElement("h3",null,"\u8bf4\u660e"),E.default.createElement("h4",null,"\u89d2\u8272\u8303\u56f4\uff1a"),E.default.createElement("p",null,"\u9ed8\u8ba4\u9009\u62e9\u662f\u5f53\u524d\u7528\u6237\u6240\u5c5e\u673a\u6784\u53ef\u7528\uff0c\u4e0d\u9009\u62e9\u662f\u6240\u6709\u673a\u6784\u53ef\u7528"),E.default.createElement("p",null,"\u4f8b\u5982\uff1a\u9009\u62e9\u7535\u52a8\u8f66\u673a\u6784\u6b64\u89d2\u8272\u8303\u56f4\u6307\u5728\u7535\u52a8\u8f66\u673a\u6784\u53ef\u4ee5\u7528"))))}}]),a}(E.PureComponent))||h)||h)||h)||h),B=A;t.default=B}}]);