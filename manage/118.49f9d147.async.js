(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[118],{"Bw/+":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=r(a("bx4M"));a("+L6B");var s=r(a("2/Rp"));a("OaEy");var u=r(a("2fM7")),n=r(a("jehZ"));a("5NDa");var o=r(a("5rEg")),f=r(a("p0pE")),d=r(a("2Taf")),i=r(a("vZ4D")),c=r(a("MhPg")),m=r(a("l4Ni")),p=r(a("ujKo"));a("y8nQ");var g,M,y,b,h=r(a("Vl3Y")),v=x(a("q1tI")),w=a("LLXN"),E=r(a("HZnN")),I=a("MuoO"),C=r(a("3a4m")),O=r(a("6v3/")),k=r(a("zHco")),R=r(a("ufQ4")),q=r(a("9XZ3"));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(j=function(e){return e?a:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=j(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=l?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(r,s,u):r[s]=e[s]}return r.default=e,a&&a.set(e,r),r}function P(e){var t=D();return function(){var a,r=(0,p.default)(e);if(t){var l=(0,p.default)(this).constructor;a=Reflect.construct(r,arguments,l)}else a=r.apply(this,arguments);return(0,m.default)(this,a)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var N=h.default.Item,B=(g=(0,I.connect)(function(e){var t=e.userManager,a=e.loading;return{roles:t.roles,submitting:a.effects["userManager/post"],roleLoading:a.effects["userManager/getrole"]}}),M=E.default.Secured("/baseManager/userManager/create"),y=h.default.create(),g(b=(0,R.default)(b=M(b=y(b=function(e){(0,c.default)(a,e);var t=P(a);function a(){var e;(0,d.default)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return e=t.call.apply(t,[this].concat(l)),e.state={type:"text"},e.onChange=function(t){var a=e.props.dispatch;a({type:"userManager/getrole",payload:t})},e.handleSubmit=function(t){var a=e.props,r=a.form,l=a.dispatch;t.preventDefault(),r.validateFieldsAndScroll(function(e,t){if(!e){var a=(new q.default).update(t.password).digest("hex").toUpperCase(),r=(0,f.default)({},t,{password:a});l({type:"userManager/post",payload:r})}})},e.onCancel=function(){C.default.goBack()},e.changeType=function(){e.setState({type:"password"})},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.currentUser;t({type:"userManager/getrole",payload:a.entCode})}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.submitting,r=e.roleLoading,f=e.roles,d=e.location.state,i={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},c={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},m=this.state.type;return v.default.createElement(k.default,null,v.default.createElement(l.default,{bordered:!1},v.default.createElement(h.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},v.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.loginName",defaultMessage:"\u7528\u6237\u540d"})}),t("userName",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.loginNameRequired",defaultMessage:"\u7528\u6237\u540d\u5fc5\u586b"})}]})(v.default.createElement(o.default,{placeholder:(0,w.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),v.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.password",defaultMessage:"\u5bc6\u7801"})}),t("password",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.passwordRequired",defaultMessage:"\u5bc6\u7801\u5fc5\u586b"})}]})(v.default.createElement(o.default,{type:m,onClick:this.changeType,placeholder:(0,w.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),v.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.organization",defaultMessage:"\u5f52\u5c5e\u7ec4\u7ec7"}),extra:"\u6bd4\u5982\uff1a\u65b0\u589e\u4e00\u4e2a\u8d26\u6237\u5206\u914d\u5230\u5176\u4e2d\u7ec4\u7ec7"}),t("entCode",{initialValue:d,rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.organizationRequired",defaultMessage:"\u5f52\u5c5e\u7ec4\u7ec7\u5fc5\u586b"})}]})(v.default.createElement(O.default,{onChange:this.onChange}))),v.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.role",defaultMessage:"\u5f52\u5c5e\u89d2\u8272"})}),t("role",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.roleRequired",defaultMessage:"\u5f52\u5c5e\u89d2\u8272\u5fc5\u586b"})}]})(v.default.createElement(u.default,{placeholder:(0,w.formatMessage)({id:"user.create.formItem.selectRole",defaultMessage:"\u8bf7\u9009\u62e9"}),loading:r,mode:"multiple"},f.map(function(e){return v.default.createElement(u.default.Option,{key:e.id,value:e.id},e.name)})))),v.default.createElement(N,(0,n.default)({},i,{label:(0,w.formatMessage)({id:"user.create.formItem.label.name",defaultMessage:"\u663e\u793a\u540d\u79f0"})}),t("name",{rules:[{required:!0,message:(0,w.formatMessage)({id:"user.create.formItem.label.nameRequired",defaultMessage:"\u663e\u793a\u540d\u79f0\u5fc5\u586b"})}]})(v.default.createElement(o.default,{placeholder:(0,w.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),v.default.createElement(N,(0,n.default)({},c,{style:{marginTop:32}}),v.default.createElement(s.default,{type:"primary",htmlType:"submit",loading:a},(0,w.formatMessage)({id:"user.create.formItem.button.sumbit",defaultMessage:"\u63d0\u4ea4"})),v.default.createElement(s.default,{style:{marginLeft:8},onClick:this.onCancel},(0,w.formatMessage)({id:"user.create.formItem.button.goBack",defaultMessage:"\u8fd4\u56de"}))))))}}]),a}(v.Component))||b)||b)||b)||b),L=B;t.default=L}}]);