(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[164],{uqC1:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("+L6B");var n=l(a("2/Rp")),u=l(a("jehZ"));a("7Kak");var f=l(a("9yH6")),o=l(a("2Taf")),d=l(a("vZ4D")),c=l(a("MhPg")),s=l(a("l4Ni")),i=l(a("ujKo")),p=l(a("p0pE"));a("5NDa");var m=l(a("5rEg"));a("y8nQ");var y,v,g,h=l(a("Vl3Y")),E=j(a("q1tI")),b=a("MuoO"),w=l(a("3a4m")),O=l(a("zHco")),k=l(a("ufQ4"));function C(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(C=function(e){return e?a:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=C(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=r?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(l,n,u):l[n]=e[n]}return l.default=e,a&&a.set(e,l),l}function M(e){var t=P();return function(){var a,l=(0,i.default)(e);if(t){var r=(0,i.default)(this).constructor;a=Reflect.construct(l,arguments,r)}else a=l.apply(this,arguments);return(0,s.default)(this,a)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var T=h.default.Item,x=m.default.TextArea,D=(y=h.default.create(),v=(0,b.connect)(function(e){var t=e.user,a=e.msgmodel,l=e.loading;return(0,p.default)({currentUser:t.currentUser},a,{loading:l.effects["msgmodel/read"]})}),(0,k.default)(g=y(g=v(g=function(e){(0,c.default)(a,e);var t=M(a);function a(){var e;(0,o.default)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),e.onCancel=function(){w.default.push("/other/message")},e}return(0,d.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match.params.id,l=e.currentUser;a&&t({type:"msgmodel/read",payload:a}),t({type:"customermodel/fetchPackage",payload:{entCode:l.entCode}})}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.messageData,l={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},o={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},d={messageType:1};return a&&(d=a),E.default.createElement(O.default,null,E.default.createElement(r.default,{bordered:!1},E.default.createElement(h.default,{style:{marginTop:8}},E.default.createElement(T,(0,u.default)({},l,{label:"\u7c7b\u578b"}),t("messageType",{initialValue:d.messageType,rules:[{required:!0,message:"\u7c7b\u578b\u5fc5\u9009"}]})(E.default.createElement(f.default.Group,{disabled:!0},E.default.createElement(f.default,{value:1},"\u516c\u544a"),E.default.createElement(f.default,{value:2},"\u6d88\u606f"),E.default.createElement(f.default,{value:3},"\u544a\u8b66")))),E.default.createElement(T,(0,u.default)({},l,{label:"\u76ee\u6807"}),t("destType",{initialValue:d.destType})(E.default.createElement(f.default.Group,{disabled:!0},E.default.createElement(f.default,{value:1},"\u6240\u6709\u5ba2\u6237"),E.default.createElement(f.default,{value:2},"\u4e0b\u7ea7\u5ba2\u6237"),E.default.createElement(f.default,{value:3},"\u7279\u5b9a\u5ba2\u6237")))),E.default.createElement(T,(0,u.default)({},l,{label:"\u6807\u9898"}),t("title",{initialValue:d.title,rules:[{required:!0,message:"\u6807\u9898\u5fc5\u586b"},{max:50,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e1500"}]})(E.default.createElement(m.default,{disabled:!0,placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f\u6807\u9898"}))),E.default.createElement(T,(0,u.default)({},l,{label:"\u6d88\u606f\u5185\u5bb9"}),t("content",{initialValue:d.content,rules:[{required:!0,message:"\u6d88\u606f\u5185\u5bb9\u5fc5\u586b"},{max:1500,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e1500"}]})(E.default.createElement(x,{disabled:!0,style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f\u5185\u5bb9",rows:4}))),E.default.createElement(T,(0,u.default)({},o,{style:{marginTop:32}}),E.default.createElement(n.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),a}(E.Component))||g)||g)||g),R=D;t.default=R}}]);