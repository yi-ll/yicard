(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{fWm8:function(e,a,t){e.exports={card:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-card",desc:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-desc",heading:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-heading",steps:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-steps",errorIcon:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-errorIcon",errorPopover:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-errorPopover",errorListItem:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-errorListItem",errorField:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-errorField",editable:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-editable",advancedForm:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-advancedForm",optional:"antd-pro\\pages\\-base-manager\\-role-manager\\edit\\index-optional"}},"oa/6":function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var n=r(t("bx4M"));t("/zsF");var l=r(t("PArb"));t("P2fV");var o=r(t("NJEC"));t("+L6B");var u=r(t("2/Rp"));t("Pwec");var d=r(t("CtXQ")),i=r(t("jehZ"));t("5NDa");var f=r(t("5rEg")),c=r(t("p0pE")),s=r(t("2Taf")),p=r(t("vZ4D")),m=r(t("MhPg")),g=r(t("l4Ni")),v=r(t("ujKo"));t("y8nQ");var h,y,b,E,x=r(t("Vl3Y")),M=F(t("q1tI")),w=r(t("3a4m")),P=t("MuoO"),k=r(t("HZnN")),C=r(t("6v3/")),O=r(t("zHco")),R=r(t("ufQ4")),j=r(t("fWm8"));function D(e){if("function"!==typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(D=function(e){return e?t:a})(e)}function F(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=D(a);if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}return r.default=e,t&&t.set(e,r),r}function I(e){var a=L();return function(){var t,r=(0,v.default)(e);if(a){var n=(0,v.default)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,g.default)(this,t)}}function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var W=x.default.Item,A=(h=x.default.create(),y=(0,P.connect)(function(e){var a=e.roleManager,t=e.loading;return{auths:a.auths,getLoading:t.effects["roleManager/get"],submitting:t.effects["roleManager/put"]}}),b=k.default.Secured("/baseManager/roleManager/edit/:id"),(0,R.default)(E=h(E=y(E=b(E=function(e){(0,m.default)(t,e);var a=I(t);function t(){var e;(0,s.default)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return e=a.call.apply(a,[this].concat(n)),e.handleSubmit=function(a){var t=e.props,r=t.form,n=t.dispatch,l=t.auths;a.preventDefault(),r.validateFieldsAndScroll(function(e,a){if(!e){var t=(0,c.default)({},l,a,{authRange:a.authRange.join(",")});n({type:"roleManager/put",payload:t})}})},e.onCancel=function(){w.default.goBack()},e}return(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.match,r=t.params.id;a({type:"roleManager/get",payload:r})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"roleManager/setAuths",payload:{}})}},{key:"render",value:function(){var e=this.props,a=e.form.getFieldDecorator,t=e.submitting,r=e.getLoading,c=e.auths,s={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},p={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return M.default.createElement(O.default,null,M.default.createElement(n.default,{bordered:!1,loading:r},M.default.createElement(x.default,{style:{marginTop:8}},M.default.createElement(W,(0,i.default)({},s,{label:"\u89d2\u8272\u540d\u79f0"}),a("name",{initialValue:c.name,rules:[{required:!0,message:"\u89d2\u8272\u540d\u79f0\u5fc5\u586b"}]})(M.default.createElement(f.default,{placeholder:"\u8bf7\u8f93\u5165"}))),M.default.createElement(W,(0,i.default)({},s,{label:M.default.createElement("span",null,"\u89d2\u8272\u8303\u56f4")}),a("authRange",{initialValue:c.authRange?c.authRange.split(","):[],rules:[{required:!1,message:"\u89d2\u8272\u8303\u56f4\u5fc5\u586b"}]})(M.default.createElement(C.default,{multiple:!0,attributeValue:"id",treeCheckStrictly:!0}))),M.default.createElement(W,(0,i.default)({},p,{style:{marginTop:32,textAlign:"center"}}),M.default.createElement(o.default,{placement:"topLeft",title:"\u786e\u5b9a\u4fee\u6539\u89d2\u8272\u5417",icon:M.default.createElement(d.default,{type:"question-circle-o",style:{color:"red"}}),okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:this.handleSubmit},M.default.createElement(u.default,{type:"primary",loading:t},"\u63d0\u4ea4")),M.default.createElement(u.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de"))),M.default.createElement(l.default,{style:{margin:"40px 0 24px"}}),M.default.createElement("div",{className:j.default.desc},M.default.createElement("h3",null,"\u8bf4\u660e"),M.default.createElement("h4",null,"\u89d2\u8272\u8303\u56f4\uff1a"),M.default.createElement("p",null,"\u9009\u62e9\u6240\u5c5e\u673a\u6784\u53ef\u7528\uff0c\u4e0d\u9009\u62e9\u662f\u6240\u6709\u673a\u6784\u53ef\u7528"),M.default.createElement("p",null,"\u4f8b\u5982\uff1a\u9009\u62e9\u7535\u52a8\u8f66\u673a\u6784\u6b64\u89d2\u8272\u8303\u56f4\u6307\u5728\u7535\u52a8\u8f66\u673a\u6784\u53ef\u4ee5\u7528"))))}}]),t}(M.PureComponent))||E)||E)||E)||E),N=A;a.default=N}}]);