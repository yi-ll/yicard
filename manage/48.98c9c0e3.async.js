(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{QVFD:function(e,a,t){"use strict";var l=t("TqRt"),r=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var u=l(t("bx4M"));t("+L6B");var n=l(t("2/Rp"));t("7Kak");var d=l(t("9yH6")),p=l(t("pVnL")),s=l(t("lwsE")),f=l(t("W8MJ")),i=l(t("a1gu")),o=l(t("Nsbk")),m=l(t("7W2i"));t("5NDa");var c=l(t("5rEg"));t("y8nQ");var b,y,E=l(t("Vl3Y")),v=r(t("q1tI")),g=E.default.Item,h=c.default.TextArea,S=(b=E.default.create(),b(y=function(e){function a(){var e,t;(0,s.default)(this,a);for(var l=arguments.length,r=new Array(l),u=0;u<l;u++)r[u]=arguments[u];return t=(0,i.default)(this,(e=(0,o.default)(a)).call.apply(e,[this].concat(r))),t.handleSubmit=function(e){var a=t.props,l=a.onSubmit,r=a.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,a){e||l(a)})},t}return(0,m.default)(a,e),(0,f.default)(a,[{key:"render",value:function(){var e=this.props.submitting,a=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},l={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},r=this.props,s=r.value,f=r.onCancel,i={};return s&&(i=s),v.default.createElement(u.default,{bordered:!1},v.default.createElement(E.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},v.default.createElement(g,(0,p.default)({},t,{label:"\u5ba2\u6237\u7f16\u7801"}),a("pNo",{initialValue:i.pNo,rules:[{required:!0,message:"\u5ba2\u6237\u7f16\u7801\u5fc5\u586b"}]})(v.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u7f16\u7801"}))),v.default.createElement(g,(0,p.default)({},t,{label:"AppKey"}),a("appKey",{initialValue:i.appKey,rules:[{required:!0,message:"AppKey\u5fc5\u586b"},{max:200,message:"\u5b57\u7b26\u4e0d\u80fd\u8d85\u8fc7200"}]})(v.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165AppKey"}))),v.default.createElement(g,(0,p.default)({},t,{label:"AppSecret"}),a("appSecret",{initialValue:i.appSecret,rules:[{required:!0,message:"AppSecret\uff1a\u5fc5\u586b"},{max:200,message:"\u5b57\u7b26\u4e0d\u80fd\u8d85\u8fc7200"}]})(v.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165AppSecret"}))),v.default.createElement(g,(0,p.default)({},t,{label:"\u6570\u636e\u5e93\u7c7b\u578b"}),a("dbType",{initialValue:i.dbType,rules:[{required:!0,message:"\u6570\u636e\u5e93\u7c7b\u578b\uff1a\u5fc5\u586b"}]})(v.default.createElement(d.default.Group,null,v.default.createElement(d.default,{value:0},"MySql"),v.default.createElement(d.default,{value:1,disabled:!0},"SqlServer")))),v.default.createElement(g,(0,p.default)({},t,{label:"\u6570\u636e\u5e93\u8fde\u63a5\u7b26"}),a("dbConn",{initialValue:i.dbConn,rules:[{required:!0,message:"\u6570\u636e\u5e93\u8fde\u63a5\u7b26\u5fc5\u586b"},{max:1e3,message:"\u5b57\u7b26\u4e0d\u80fd\u8d85\u8fc71000"}]})(v.default.createElement(h,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u6570\u636e\u5e93\u8fde\u63a5\u7b26",rows:4}))),v.default.createElement(g,(0,p.default)({},l,{style:{marginTop:32}}),v.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:e},"\u63d0\u4ea4"),v.default.createElement(n.default,{style:{marginLeft:8},onClick:f},"\u53d6\u6d88"))))}}]),a}(v.PureComponent))||y),w=S;a.default=w}}]);