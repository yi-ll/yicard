(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[159],{vh6a:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=r(a("bx4M"));a("+L6B");var l=r(a("2/Rp")),u=r(a("jehZ"));a("7Kak");var o=r(a("9yH6")),f=r(a("2Taf")),c=r(a("vZ4D")),d=r(a("MhPg")),i=r(a("l4Ni")),s=r(a("ujKo")),p=r(a("p0pE"));a("5NDa");var m=r(a("5rEg"));a("y8nQ");var y=r(a("Vl3Y"));a("2qtc");var v,h,b,g,w=r(a("kLXV")),E=M(a("q1tI")),j=a("MuoO"),O=r(a("3a4m")),k=r(a("HZnN")),x=r(a("zHco")),C=r(a("ufQ4"));function T(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(T=function(e){return e?a:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=T(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=n?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(r,l,u):r[l]=e[l]}return r.default=e,a&&a.set(e,r),r}function P(e){var t=D();return function(){var a,r=(0,s.default)(e);if(t){var n=(0,s.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,i.default)(this,a)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var R=w.default.confirm,q=y.default.Item,S=m.default.TextArea,V=(v=y.default.create(),h=(0,j.connect)(function(e){var t=e.user,a=e.jobmanage,r=e.loading;return(0,p.default)({currentUser:t.currentUser},a,{loading:r.effects["jobmanage/add"]})}),b=k.default.Secured("/other/jobmanage"),(0,C.default)(g=v(g=h(g=b(g=function(e){(0,d.default)(a,e);var t=P(a);function a(){var e;(0,f.default)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n)),e.componentDidMount=function(){var t=e.props,a=t.dispatch,r=t.currentUser;a({type:"jobmanage/fetchCustomer",payload:{entCode:r.entCode}})},e.handleSubmit=function(t){var a=e.props,r=a.dispatch,n=a.form;t.preventDefault(),n.validateFieldsAndScroll(function(e,t){e||R({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4?",onOk:function(){r({type:"jobmanage/add",payload:t})}})})},e.onCancel=function(){O.default.push("/other/jobmanage")},e}return(0,c.default)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},a={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},r={workOrderType:1};return E.default.createElement(x.default,null,E.default.createElement(n.default,{bordered:!1},E.default.createElement(y.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},E.default.createElement(q,(0,u.default)({},t,{label:"\u7c7b\u578b"}),e("workOrderType",{initialValue:r.workOrderType,rules:[{required:!0,message:"\u7c7b\u578b\u5fc5\u9009"}]})(E.default.createElement(o.default.Group,null,E.default.createElement(o.default,{value:1},"\u4e00\u822c"),E.default.createElement(o.default,{value:2},"\u91cd\u8981")))),E.default.createElement(q,(0,u.default)({},t,{label:"\u6807\u9898"}),e("title",{initialValue:r.title,rules:[{required:!0,message:"\u6807\u9898\u5fc5\u586b"},{max:50,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e50"}]})(E.default.createElement(m.default,{placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f\u6807\u9898"}))),E.default.createElement(q,(0,u.default)({},t,{label:"\u5de5\u5355\u63cf\u8ff0"}),e("content",{initialValue:r.content,rules:[{required:!0,message:"\u5de5\u5355\u63cf\u8ff0\u5fc5\u586b"},{max:1500,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e1500"}]})(E.default.createElement(S,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u5de5\u5355\u63cf\u8ff0",rows:4}))),E.default.createElement(q,(0,u.default)({},a,{style:{marginTop:32}}),E.default.createElement(l.default,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),E.default.createElement(l.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),a}(E.Component))||g)||g)||g)||g),H=V;t.default=H}}]);