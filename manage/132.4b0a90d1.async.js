(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[132],{"Bw/+":function(e,a,t){"use strict";var r=t("TqRt"),l=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var s=r(t("bx4M"));t("+L6B");var u=r(t("2/Rp"));t("OaEy");var d=r(t("2fM7")),n=r(t("pVnL"));t("5NDa");var o=r(t("5rEg")),f=r(t("MVZn")),i=r(t("lwsE")),m=r(t("W8MJ")),c=r(t("a1gu")),p=r(t("Nsbk")),g=r(t("7W2i"));t("y8nQ");var M,b,h,y,v=r(t("Vl3Y")),E=l(t("q1tI")),I=t("LLXN"),w=r(t("HZnN")),C=t("MuoO"),q=r(t("usdK")),k=r(t("6v3/")),R=r(t("zHco")),x=r(t("ufQ4")),L=r(t("9XZ3")),N=v.default.Item,S=(M=(0,C.connect)(function(e){var a=e.userManager,t=e.loading;return{roles:a.roles,submitting:t.effects["userManager/post"],roleLoading:t.effects["userManager/getrole"]}}),b=w.default.Secured("/baseManager/userManager/create"),h=v.default.create(),M(y=(0,x.default)(y=b(y=h(y=function(e){function a(){var e,t;(0,i.default)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return t=(0,c.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(l))),t.state={type:"text"},t.onChange=function(e){var a=t.props.dispatch;a({type:"userManager/getrole",payload:e})},t.handleSubmit=function(e){var a=t.props,r=a.form,l=a.dispatch;e.preventDefault(),r.validateFieldsAndScroll(function(e,a){if(!e){var t=(new L.default).update(a.password).digest("hex").toUpperCase(),r=(0,f.default)({},a,{password:t});l({type:"userManager/post",payload:r})}})},t.onCancel=function(){q.default.goBack()},t.changeType=function(){t.setState({type:"password"})},t}return(0,g.default)(a,e),(0,m.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.currentUser;a({type:"userManager/getrole",payload:t.entCode})}},{key:"render",value:function(){var e=this.props,a=e.form.getFieldDecorator,t=e.submitting,r=e.roleLoading,l=e.roles,f=e.location.state,i={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},m={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},c=this.state.type;return E.default.createElement(R.default,null,E.default.createElement(s.default,{bordered:!1},E.default.createElement(v.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},E.default.createElement(N,(0,n.default)({},i,{label:(0,I.formatMessage)({id:"user.create.formItem.label.loginName",defaultMessage:"\u7528\u6237\u540d"})}),a("userName",{rules:[{required:!0,message:(0,I.formatMessage)({id:"user.create.formItem.label.loginNameRequired",defaultMessage:"\u7528\u6237\u540d\u5fc5\u586b"})}]})(E.default.createElement(o.default,{placeholder:(0,I.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),E.default.createElement(N,(0,n.default)({},i,{label:(0,I.formatMessage)({id:"user.create.formItem.label.password",defaultMessage:"\u5bc6\u7801"})}),a("password",{rules:[{required:!0,message:(0,I.formatMessage)({id:"user.create.formItem.label.passwordRequired",defaultMessage:"\u5bc6\u7801\u5fc5\u586b"})}]})(E.default.createElement(o.default,{type:c,onClick:this.changeType,placeholder:(0,I.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),E.default.createElement(N,(0,n.default)({},i,{label:(0,I.formatMessage)({id:"user.create.formItem.label.organization",defaultMessage:"\u5f52\u5c5e\u7ec4\u7ec7"}),extra:"\u6bd4\u5982\uff1a\u65b0\u589e\u4e00\u4e2a\u8d26\u6237\u5206\u914d\u5230\u5176\u4e2d\u7ec4\u7ec7"}),a("entCode",{initialValue:f,rules:[{required:!0,message:(0,I.formatMessage)({id:"user.create.formItem.label.organizationRequired",defaultMessage:"\u5f52\u5c5e\u7ec4\u7ec7\u5fc5\u586b"})}]})(E.default.createElement(k.default,{onChange:this.onChange}))),E.default.createElement(N,(0,n.default)({},i,{label:(0,I.formatMessage)({id:"user.create.formItem.label.role",defaultMessage:"\u5f52\u5c5e\u89d2\u8272"})}),a("role",{rules:[{required:!0,message:(0,I.formatMessage)({id:"user.create.formItem.label.roleRequired",defaultMessage:"\u5f52\u5c5e\u89d2\u8272\u5fc5\u586b"})}]})(E.default.createElement(d.default,{placeholder:(0,I.formatMessage)({id:"user.create.formItem.selectRole",defaultMessage:"\u8bf7\u9009\u62e9"}),loading:r,mode:"multiple"},l.map(function(e){return E.default.createElement(d.default.Option,{key:e.id,value:e.id},e.name)})))),E.default.createElement(N,(0,n.default)({},i,{label:(0,I.formatMessage)({id:"user.create.formItem.label.name",defaultMessage:"\u663e\u793a\u540d\u79f0"})}),a("name",{rules:[{required:!0,message:(0,I.formatMessage)({id:"user.create.formItem.label.nameRequired",defaultMessage:"\u663e\u793a\u540d\u79f0\u5fc5\u586b"})}]})(E.default.createElement(o.default,{placeholder:(0,I.formatMessage)({id:"user.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),E.default.createElement(N,(0,n.default)({},m,{style:{marginTop:32}}),E.default.createElement(u.default,{type:"primary",htmlType:"submit",loading:t},(0,I.formatMessage)({id:"user.create.formItem.button.sumbit",defaultMessage:"\u63d0\u4ea4"})),E.default.createElement(u.default,{style:{marginLeft:8},onClick:this.onCancel},(0,I.formatMessage)({id:"user.create.formItem.button.goBack",defaultMessage:"\u8fd4\u56de"}))))))}}]),a}(E.Component))||y)||y)||y)||y),T=S;a.default=T}}]);