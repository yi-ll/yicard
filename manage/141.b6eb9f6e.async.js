(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[141],{vh6a:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("+L6B");var u=l(a("2/Rp")),d=l(a("pVnL"));a("7Kak");var o=l(a("9yH6")),f=l(a("lwsE")),s=l(a("W8MJ")),c=l(a("a1gu")),i=l(a("Nsbk")),m=l(a("7W2i")),p=l(a("MVZn"));a("5NDa");var h=l(a("5rEg"));a("y8nQ");var g=l(a("Vl3Y"));a("2qtc");var v,b,y,E,w=l(a("kLXV")),k=n(a("q1tI")),C=a("MuoO"),T=l(a("usdK")),x=l(a("HZnN")),j=l(a("zHco")),V=l(a("ufQ4")),q=w.default.confirm,M=g.default.Item,O=h.default.TextArea,S=(v=g.default.create(),b=(0,C.connect)(function(e){var t=e.user,a=e.jobmanage,l=e.loading;return(0,p.default)({currentUser:t.currentUser},a,{loading:l.effects["jobmanage/add"]})}),y=x.default.Secured("/other/jobmanage"),(0,V.default)(E=v(E=b(E=y(E=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,c.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(n))),a.componentDidMount=function(){var e=a.props,t=e.dispatch,l=e.currentUser;t({type:"jobmanage/fetchCustomer",payload:{entCode:l.entCode}})},a.handleSubmit=function(e){var t=a.props,l=t.dispatch,n=t.form;e.preventDefault(),n.validateFieldsAndScroll(function(e,t){e||q({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4?",onOk:function(){l({type:"jobmanage/add",payload:t})}})})},a.onCancel=function(){T.default.push("/other/jobmanage")},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},a={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},l={workOrderType:1};return k.default.createElement(j.default,null,k.default.createElement(r.default,{bordered:!1},k.default.createElement(g.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},k.default.createElement(M,(0,d.default)({},t,{label:"\u7c7b\u578b"}),e("workOrderType",{initialValue:l.workOrderType,rules:[{required:!0,message:"\u7c7b\u578b\u5fc5\u9009"}]})(k.default.createElement(o.default.Group,null,k.default.createElement(o.default,{value:1},"\u4e00\u822c"),k.default.createElement(o.default,{value:2},"\u91cd\u8981")))),k.default.createElement(M,(0,d.default)({},t,{label:"\u6807\u9898"}),e("title",{initialValue:l.title,rules:[{required:!0,message:"\u6807\u9898\u5fc5\u586b"},{max:50,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e50"}]})(k.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f\u6807\u9898"}))),k.default.createElement(M,(0,d.default)({},t,{label:"\u5de5\u5355\u63cf\u8ff0"}),e("content",{initialValue:l.content,rules:[{required:!0,message:"\u5de5\u5355\u63cf\u8ff0\u5fc5\u586b"},{max:1500,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e1500"}]})(k.default.createElement(O,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u5de5\u5355\u63cf\u8ff0",rows:4}))),k.default.createElement(M,(0,d.default)({},a,{style:{marginTop:32}}),k.default.createElement(u.default,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),k.default.createElement(u.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),t}(k.Component))||E)||E)||E)||E),D=S;t.default=D}}]);