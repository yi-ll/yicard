(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[160],{e1S8:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=r(a("bx4M"));a("+L6B");var n=r(a("2/Rp")),u=r(a("jehZ"));a("7Kak");var o=r(a("9yH6")),f=r(a("2Taf")),d=r(a("vZ4D")),i=r(a("MhPg")),c=r(a("l4Ni")),s=r(a("ujKo")),p=r(a("p0pE"));a("5NDa");var m=r(a("5rEg"));a("y8nQ");var y,b,h,v=r(a("Vl3Y")),g=x(a("q1tI")),E=a("MuoO"),w=r(a("3a4m")),j=r(a("zHco")),k=r(a("ufQ4"));function O(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(O=function(e){return e?a:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=O(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=l?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(r,n,u):r[n]=e[n]}return r.default=e,a&&a.set(e,r),r}function M(e){var t=D();return function(){var a,r=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;a=Reflect.construct(r,arguments,l)}else a=r.apply(this,arguments);return(0,c.default)(this,a)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var P=v.default.Item,T=m.default.TextArea,C=(y=v.default.create(),b=(0,E.connect)(function(e){var t=e.user,a=e.jobmanage,r=e.loading;return(0,p.default)({currentUser:t.currentUser},a,{loading:r.effects["jobmanage/read"]})}),(0,k.default)(h=y(h=b(h=function(e){(0,i.default)(a,e);var t=M(a);function a(){var e;(0,f.default)(this,a);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return e=t.call.apply(t,[this].concat(l)),e.onCancel=function(){w.default.push("/other/jobmanage")},e.handleSubmit=function(t){var a=e.props,r=a.form,l=a.dispatch,n=a.match.params.id;t.preventDefault(),r.validateFieldsAndScroll(function(e,t){e||l({type:"jobmanage/handle",payload:(0,p.default)({},t,{id:n})})})},e}return(0,d.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match.params.id;a&&t({type:"jobmanage/read",payload:a})}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.jobData,r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},f={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},d={messageType:1};return a&&(d=a),g.default.createElement(j.default,null,g.default.createElement(l.default,{bordered:!1},g.default.createElement(v.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},g.default.createElement(P,(0,u.default)({},r,{label:"\u7c7b\u578b"}),t("workOrderType",{initialValue:d.workOrderType,rules:[{required:!0,message:"\u7c7b\u578b\u5fc5\u9009"}]})(g.default.createElement(o.default.Group,{disabled:!0},g.default.createElement(o.default,{value:1},"\u4e00\u822c"),g.default.createElement(o.default,{value:2},"\u91cd\u8981")))),g.default.createElement(P,(0,u.default)({},r,{label:"\u6807\u9898"}),t("title",{initialValue:d.title,rules:[{required:!0,message:"\u6807\u9898\u5fc5\u586b"},{max:50,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e50"}]})(g.default.createElement(m.default,{disabled:!0,placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f\u6807\u9898"}))),g.default.createElement(P,(0,u.default)({},r,{label:"\u5de5\u5355\u63cf\u8ff0"}),t("content",{initialValue:d.content,rules:[{required:!0,message:"\u5de5\u5355\u63cf\u8ff0\u5fc5\u586b"},{max:1500,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e1500"}]})(g.default.createElement(T,{disabled:!0,style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u5de5\u5355\u63cf\u8ff0",rows:4}))),g.default.createElement(P,(0,u.default)({},r,{label:"\u53cd\u9988\u63cf\u8ff0"}),t("feedback",{initialValue:d.feedback,rules:[{required:!0,message:"\u53cd\u9988\u63cf\u8ff0\u5fc5\u586b"},{max:1500,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e1500"}]})(g.default.createElement(T,{disabled:d&&d.state,style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u53cd\u9988\u63cf\u8ff0",rows:4}))),g.default.createElement(P,(0,u.default)({},f,{style:{marginTop:32}}),0===d.state?g.default.createElement(n.default,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"):null,g.default.createElement(n.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),a}(g.Component))||h)||h)||h),R=C;t.default=R}}]);