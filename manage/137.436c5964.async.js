(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[137],{BRKV:function(e,a,t){"use strict";var s=t("TqRt"),r=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var l=s(t("bx4M"));t("+L6B");var d=s(t("2/Rp")),o=s(t("pVnL"));t("5NDa");var u=s(t("5rEg")),n=s(t("MVZn")),f=s(t("lwsE")),i=s(t("W8MJ")),m=s(t("a1gu")),p=s(t("Nsbk")),c=s(t("7W2i"));t("y8nQ");var g,w,M,b,h=s(t("Vl3Y")),y=r(t("q1tI")),v=t("LLXN"),I=s(t("HZnN")),P=t("MuoO"),E=s(t("usdK")),N=s(t("zHco")),C=s(t("ufQ4")),k=s(t("9XZ3")),T=h.default.Item,x=(g=I.default.Secured("/baseManager/userManager/resetpassword/:loginName"),w=h.default.create(),M=(0,P.connect)(function(e){var a=e.loading;return{submitting:a.effects["userManager/resetPassword"]}}),(0,C.default)(b=g(b=w(b=M(b=function(e){function a(){var e,t;(0,f.default)(this,a);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return t=(0,m.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(r))),t.state={loginName:"",type:"text"},t.handleSubmit=function(e){var a=t.props,s=a.form,r=a.dispatch;e.preventDefault(),s.validateFieldsAndScroll(function(e,a){var t={rePassWord:(new k.default).update(a.rePassWord).digest("hex").toUpperCase(),newPassword:(new k.default).update(a.newPassword).digest("hex").toUpperCase()};e||r({type:"userManager/resetPassword",payload:(0,n.default)({},a,t)})})},t.changeType=function(){t.setState({type:"password"})},t.onCancel=function(){E.default.goBack()},t.compareToFirstPassword=function(e,a,s){var r=t.props.form;a&&a!==r.getFieldValue("newPassword")?s("\u60a8\u8f93\u5165\u7684\u4e24\u4e2a\u5bc6\u7801\u4e0d\u4e00\u81f4!"):s()},t}return(0,c.default)(a,e),(0,i.default)(a,[{key:"componentDidMount",value:function(){var e=this.props.match,a=e.params.loginName;a&&this.setState({loginName:a})}},{key:"render",value:function(){var e=this.props,a=e.form.getFieldDecorator,t=e.submitting,s=this.state,r=s.loginName,n=s.type,f={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},i={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return y.default.createElement(N.default,null,y.default.createElement(l.default,{bordered:!1},y.default.createElement(h.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},y.default.createElement(h.default.Item,(0,o.default)({},f,{label:(0,v.formatMessage)({id:"user.resetpassword.formItem.label.loginName",defaultMessage:"\u7528\u6237\u540d"})}),a("userName",{initialValue:r,rules:[{required:!0,message:(0,v.formatMessage)({id:"user.resetpassword.formItem.label.loginNameRequired",defaultMessage:"\u7528\u6237\u540d\u5fc5\u586b"})}]})(y.default.createElement(u.default,{disabled:!0}))),y.default.createElement(h.default.Item,(0,o.default)({},f,{label:(0,v.formatMessage)({id:"user.resetpassword.formItem.label.newPassword",defaultMessage:"\u65b0\u5bc6\u7801"})}),a("newPassword",{rules:[{required:!0,message:(0,v.formatMessage)({id:"user.resetpassword.formItem.label.reenterPassword",defaultMessage:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}]})(y.default.createElement(u.default,{type:n,onClick:this.changeType,placeholder:(0,v.formatMessage)({id:"user.resetpassword.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),y.default.createElement(h.default.Item,(0,o.default)({},f,{label:(0,v.formatMessage)({id:"user.resetpassword.formItem.label.confirmPassword",defaultMessage:"\u786e\u8ba4\u5bc6\u7801"})}),a("rePassWord",{rules:[{required:!0,message:(0,v.formatMessage)({id:"user.resetpassword.formItem.label.confirmPassword",defaultMessage:"\u8bf7\u8f93\u5165\u786e\u8ba4\u5bc6\u7801"})},{validator:this.compareToFirstPassword}]})(y.default.createElement(u.default,{type:n,onClick:this.changeType,placeholder:(0,v.formatMessage)({id:"user.resetpassword.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),y.default.createElement(T,(0,o.default)({},i,{style:{marginTop:32}}),y.default.createElement(d.default,{type:"primary",htmlType:"submit",loading:t},(0,v.formatMessage)({id:"user.resetpassword.formItem.button.sumbit",defaultMessage:"\u63d0\u4ea4"})),y.default.createElement(d.default,{style:{marginLeft:8},onClick:this.onCancel},(0,v.formatMessage)({id:"user.resetpassword.formItem.button.goBack",defaultMessage:"\u8fd4\u56de"}))))))}}]),a}(y.Component))||b)||b)||b)||b),S=x;a.default=S}}]);