(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[163],{MjRw:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("+L6B");var r=l(a("2/Rp")),u=l(a("jehZ"));a("7Kak");var o=l(a("9yH6")),f=l(a("2Taf")),d=l(a("vZ4D")),s=l(a("MhPg")),i=l(a("l4Ni")),c=l(a("ujKo")),p=l(a("p0pE"));a("OaEy");var m=l(a("2fM7"));a("5NDa");var y=l(a("5rEg"));a("y8nQ");var h=l(a("Vl3Y"));a("2qtc");var v,g,E,b,w=l(a("kLXV")),O=P(a("q1tI")),C=a("MuoO"),T=l(a("3a4m")),k=l(a("HZnN")),M=l(a("zHco")),j=l(a("ufQ4"));function x(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}function P(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=n?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(l,r,u):l[r]=e[r]}return l.default=e,a&&a.set(e,l),l}function D(e){var t=R();return function(){var a,l=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,i.default)(this,a)}}function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var S=w.default.confirm,V=h.default.Item,q=y.default.TextArea,H=m.default.Option,_=(v=h.default.create(),g=(0,C.connect)(function(e){var t=e.user,a=e.msgmodel,l=e.loading;return(0,p.default)({currentUser:t.currentUser},a,{loading:l.effects["msgmodel/add"]})}),E=k.default.Secured("/other/message"),(0,j.default)(b=v(b=g(b=E(b=function(e){(0,s.default)(a,e);var t=D(a);function a(e){var l;return(0,f.default)(this,a),l=t.call(this,e),l.componentDidMount=function(){var e=l.props,t=e.dispatch,a=e.currentUser;t({type:"msgmodel/fetchCustomer",payload:{entCode:a.entCode}})},l.handleSubmit=function(e){var t=l.props,a=t.dispatch,n=t.form;e.preventDefault(),n.validateFieldsAndScroll(function(e,t){e||S({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4?",onOk:function(){a({type:"msgmodel/add",payload:t})}})})},l.onCancel=function(){T.default.push("/other/message")},l.onChange=function(e){l.setState({type:e.target.value})},l.state={type:1},l}return(0,d.default)(a,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.datas,l=this.state.type,f={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},d={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},s={messageType:1,destType:1};return O.default.createElement(M.default,null,O.default.createElement(n.default,{bordered:!1},O.default.createElement(h.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},O.default.createElement(V,(0,u.default)({},f,{label:"\u7c7b\u578b"}),t("messageType",{initialValue:s.messageType,rules:[{required:!0,message:"\u7c7b\u578b\u5fc5\u9009"}]})(O.default.createElement(o.default.Group,null,O.default.createElement(o.default,{value:1},"\u516c\u544a")))),O.default.createElement(V,(0,u.default)({},f,{label:"\u6807\u9898"}),t("title",{initialValue:s.title,rules:[{required:!0,message:"\u6807\u9898\u5fc5\u586b"},{max:50,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e50"}]})(O.default.createElement(y.default,{placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f\u6807\u9898"}))),O.default.createElement(V,(0,u.default)({},f,{label:"\u76ee\u6807"}),t("destType",{initialValue:s.destType})(O.default.createElement(o.default.Group,{onChange:this.onChange},O.default.createElement(o.default,{value:1},"\u6240\u6709\u5ba2\u6237"),O.default.createElement(o.default,{value:2},"\u4e0b\u7ea7\u5ba2\u6237"),O.default.createElement(o.default,{value:3},"\u7279\u5b9a\u5ba2\u6237")))),O.default.createElement(V,(0,u.default)({style:{display:3!==l?"none":""}},f,{label:"\u7279\u5b9a\u5ba2\u6237"}),t("enterprises",{initialValue:s.enterprises,rules:[{required:3===l,message:"\u7279\u5b9a\u5ba2\u6237\u5fc5\u9009"}]})(O.default.createElement(m.default,{mode:"multiple",showSearch:!0,optionFilterProp:"children",placeholder:"\u8bf7\u9009\u62e9\u7279\u5b9a\u5ba2\u6237"},a?a.map(function(e){return O.default.createElement(H,{key:e.id,value:e.id,title:e.name},e.name)}):null))),O.default.createElement(V,(0,u.default)({},f,{label:"\u6d88\u606f\u5185\u5bb9"}),t("content",{initialValue:s.content,rules:[{required:!0,message:"\u6d88\u606f\u5185\u5bb9\u5fc5\u586b"},{max:1500,message:"\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e1500"}]})(O.default.createElement(q,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f\u5185\u5bb9",rows:4}))),O.default.createElement(V,(0,u.default)({},d,{style:{marginTop:32}}),O.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),O.default.createElement(r.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),a}(O.Component))||b)||b)||b)||b),B=_;t.default=B}}]);