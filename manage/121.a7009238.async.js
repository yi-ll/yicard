(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{"Bw/+":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=r(a("bx4M"));a("+L6B");var u=r(a("2/Rp"));a("OaEy");var s=r(a("2fM7")),n=r(a("jehZ"));a("5NDa");var o=r(a("5rEg")),f=r(a("p0pE")),d=r(a("2Taf")),i=r(a("vZ4D")),c=r(a("MhPg")),m=r(a("l4Ni")),p=r(a("ujKo"));a("y8nQ");var g,M,b,y,v=r(a("Vl3Y")),h=x(a("q1tI")),w=a("LLXN"),E=a("MuoO"),I=r(a("3a4m")),C=r(a("9XZ3")),O=r(a("HZnN")),R=r(a("6v3/")),k=r(a("zHco")),q=r(a("ufQ4"));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(j=function(e){return e?a:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=j(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=l?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(r,u,s):r[u]=e[u]}return r.default=e,a&&a.set(e,r),r}function P(e){var t=D();return function(){var a,r=(0,p.default)(e);if(t){var l=(0,p.default)(this).constructor;a=Reflect.construct(r,arguments,l)}else a=r.apply(this,arguments);return(0,m.default)(this,a)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var N=v.default.Item,B=(g=(0,E.connect)(function(e){var t=e.userManager,a=e.loading;return{roles:t.roles,submitting:a.effects["userManager/post"],roleLoading:a.effects["userManager/getrole"]}}),M=O.default.Secured("/baseManager/userManager/create"),b=v.default.create(),g(y=(0,q.default)(y=M(y=b(y=function(e){(0,c.default)(a,e);var t=P(a);function a(){var e;(0,d.default)(this,a);for(var r=arguments.length,l=new Array(r),u=0;u<r;u++)l[u]=arguments[u];return e=t.call.apply(t,[this].concat(l)),e.onChange=function(t){var a=e.props.dispatch;a({type:"userManager/getrole",payload:t})},e.handleSubmit=function(t){var a=e.props,r=a.form,l=a.dispatch;t.preventDefault(),r.validateFieldsAndScroll(function(e,t){if(!e){var a=(new C.default).update(t.password).digest("hex").toUpperCase(),r=(0,f.default)({},t,{password:a});l({type:"userManager/post",payload:r})}})},e.onCancel=function(){I.default.goBack()},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.currentUser;t({type:"userManager/getrole",payload:a.entCode})}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.submitting,r=e.roleLoading,f=e.roles,d=e.location.state,i={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},c={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return h.default.createElement(k.default,null,h.default.createElement(l.default,{bordered:!1},h.default.createElement(v.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},h.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.loginName",defaultMessage:"\u7528\u6237\u540d"})}),t("userName",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.loginNameRequired",defaultMessage:"\u7528\u6237\u540d\u5fc5\u586b"})}]})(h.default.createElement(o.default,{placeholder:(0,w.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),h.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.password",defaultMessage:"\u5bc6\u7801"})}),t("password",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.passwordRequired",defaultMessage:"\u5bc6\u7801\u5fc5\u586b"})}]})(h.default.createElement(o.default,{type:"text",placeholder:(0,w.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),h.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.organization",defaultMessage:"\u5f52\u5c5e\u7ec4\u7ec7"}),extra:"\u6bd4\u5982\uff1a\u65b0\u589e\u4e00\u4e2a\u8d26\u6237\u5206\u914d\u5230\u5176\u4e2d\u7ec4\u7ec7"}),t("entCode",{initialValue:d,rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.organizationRequired",defaultMessage:"\u5f52\u5c5e\u7ec4\u7ec7\u5fc5\u586b"})}]})(h.default.createElement(R.default,{onChange:this.onChange}))),h.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.role",defaultMessage:"\u5f52\u5c5e\u89d2\u8272"})}),t("role",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.roleRequired",defaultMessage:"\u5f52\u5c5e\u89d2\u8272\u5fc5\u586b"})}]})(h.default.createElement(s.default,{placeholder:(0,w.formatMessage)({id:"user.create.formItem.selectRole",defaultMessage:"\u8bf7\u9009\u62e9"}),loading:r,mode:"multiple"},f.map(function(e){return h.default.createElement(s.default.Option,{key:e.id,value:e.id},e.name)})))),h.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.name",defaultMessage:"\u663e\u793a\u540d\u79f0"})}),t("name",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.nameRequired",defaultMessage:"\u663e\u793a\u540d\u79f0\u5fc5\u586b"})}]})(h.default.createElement(o.default,{placeholder:(0,w.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),h.default.createElement(N,(0,n.default)({},c,{style:{marginTop:32}}),h.default.createElement(u.default,{type:"primary",htmlType:"submit",loading:a},(0,w.formatMessage)({id:"user.create.formItem.button.sumbit",defaultMessage:"\u63d0\u4ea4"})),h.default.createElement(u.default,{style:{marginLeft:8},onClick:this.onCancel},(0,w.formatMessage)({id:"user.create.formItem.button.goBack",defaultMessage:"\u8fd4\u56de"}))))))}}]),a}(h.Component))||y)||y)||y)||y),L=B;t.default=L}}]);