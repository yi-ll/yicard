(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{"5xwK":function(e,t,n){"use strict";var a=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("sRBo");var r=a(n("kaz8"));n("fOrg");var o,l,u=a(n("+KLJ")),i=a(n("2Taf")),f=a(n("vZ4D")),s=a(n("MhPg")),c=a(n("l4Ni")),d=a(n("ujKo")),p=w(n("q1tI")),g=n("MuoO"),m=n("LLXN"),h=a(n("QBZU")),v=a(n("9XZ3")),y=a(n("gtgc"));function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}function E(e){var t=M();return function(){var n,a=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var k=h.default.UserName,O=h.default.Password,P=h.default.Submit,L=(o=(0,g.connect)(function(e){var t=e.login,n=e.loading;return{login:t,submitting:n.effects["login/login"]}}),o(l=function(e){(0,s.default)(n,e);var t=E(n);function n(){var e;(0,i.default)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={type:"account",autoLogin:!0},e.onTabChange=function(t){e.setState({type:t})},e.handleSubmit=function(t,n){var a=n.password,r=n.userName;if(!t){var o=e.props.dispatch,l=(new v.default).update(a).digest("hex").toUpperCase();o({type:"login/login",payload:{userName:r,passWord:l}})}},e.changeAutoLogin=function(t){e.setState({autoLogin:t.target.checked})},e.renderMessage=function(e){return p.default.createElement(u.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},e}return(0,f.default)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.login,a=t.submitting,o=this.state,l=o.type,u=o.autoLogin;return p.default.createElement("div",{style:{background:"#fff"}},p.default.createElement("div",{className:y.default.main},p.default.createElement(h.default,{defaultActiveKey:l,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,ref:function(t){e.loginForm=t}},!1===n.status&&!a&&this.renderMessage(n.message),p.default.createElement(k,{name:"userName",placeholder:(0,m.formatMessage)({id:"app.login.placeholder.username"})}),p.default.createElement(O,{name:"password",placeholder:(0,m.formatMessage)({id:"app.login.placeholder.password"}),onPressEnter:function(){return e.loginForm.validateFields(e.handleSubmit)}}),p.default.createElement("div",null,p.default.createElement(r.default,{checked:u,onChange:this.changeAutoLogin},p.default.createElement(m.FormattedMessage,{id:"app.login.remember-me"}))),p.default.createElement(P,{loading:a},p.default.createElement(m.FormattedMessage,{id:"app.login.login"})),p.default.createElement("div",{style:{textAlign:"center"}},p.default.createElement("a",{href:"../changelog",title:"\u66f4\u65b0\u65e5\u5fd7",target:"_blank",rel:"noopener noreferrer"},"\u66f4\u65b0\u65e5\u5fd7"),p.default.createElement("a",{href:"../faq",title:"FAQ",target:"_blank",rel:"noopener noreferrer",style:{marginLeft:30}},"FAQ")))))}}]),n}(p.Component))||l),j=L;t.default=j},gtgc:function(e,t,n){e.exports={main:"antd-pro\\pages\\-user\\bdn\\-login-main",icon:"antd-pro\\pages\\-user\\bdn\\-login-icon",other:"antd-pro\\pages\\-user\\bdn\\-login-other",register:"antd-pro\\pages\\-user\\bdn\\-login-register"}}}]);