(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{aPun:function(e,t,a){e.exports={baseView:"antd-pro\\pages\\-account\\-settings-baseView",left:"antd-pro\\pages\\-account\\-settings-left",right:"antd-pro\\pages\\-account\\-settings-right",avatar_title:"antd-pro\\pages\\-account\\-settings-avatar_title",avatar:"antd-pro\\pages\\-account\\-settings-avatar",button_view:"antd-pro\\pages\\-account\\-settings-button_view"}},dUIO:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var n=r(a("5rEg")),l=r(a("p0pE")),s=r(a("2Taf")),i=r(a("vZ4D")),u=r(a("MhPg")),c=r(a("l4Ni")),o=r(a("ujKo"));a("DZo9");var f=r(a("8z0m"));a("+L6B");var d=r(a("2/Rp"));a("OaEy");var p=r(a("2fM7"));a("y8nQ");var m,g,v,b=r(a("Vl3Y")),h=N(a("q1tI")),y=a("LLXN"),E=a("MuoO"),M=r(a("ufQ4")),w=r(a("HZnN")),k=r(a("aPun")),O=r(a("6LTJ"));function D(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(D=function(e){return e?a:t})(e)}function N(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=D(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=n?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(r,l,s):r[l]=e[l]}return r.default=e,a&&a.set(e,r),r}function P(e){var t=U();return function(){var a,r=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,c.default)(this,a)}}function U(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var _=b.default.Item,j=p.default.Option,R=function(e){var t=e.avatar;return h.default.createElement(h.Fragment,null,h.default.createElement("div",{className:k.default.avatar_title},h.default.createElement(y.FormattedMessage,{id:"app.settings.basic.avatar",defaultMessage:"Avatar"})),h.default.createElement("div",{className:k.default.avatar},h.default.createElement("img",{src:t,alt:"avatar"})),h.default.createElement(f.default,{fileList:[]},h.default.createElement("div",{className:k.default.button_view},h.default.createElement(d.default,{icon:"upload"},h.default.createElement(y.FormattedMessage,{id:"app.settings.basic.change-avatar",defaultMessage:"Change avatar"})))))},F=function(e,t,a){if(t){var r=t.province,n=t.city;r.key||a("\u8bf7\u9009\u62e9\u7701\u4efd!"),n.key||a("\u8bf7\u9009\u62e9\u57ce\u5e02!"),a()}else a()},V=(m=b.default.create(),g=(0,E.connect)(function(e){var t=e.loading;return{submitting:t.effects["account/putCurrent"]}}),(0,M.default)(v=m(v=g(v=function(e){(0,u.default)(a,e);var t=P(a);function a(){var e;(0,s.default)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),e.setBaseInfo=function(){var t=e.props,a=t.currentUser,r=t.form;Object.keys(r.getFieldsValue()).forEach(function(e){var t={};if("geographic"===e){var n=a.province,l=a.city;t[e]={province:{key:n||"",label:""},city:{key:l||"",label:""}}}else t[e]=a[e]||null;r.setFieldsValue(t)})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,r=a.currentUser,n=a.form;n.validateFields(function(t,a){if(!t){var n=a.geographic,s=n.province,i=n.city,u=(0,l.default)({},r,a,{province:s.key,city:i.key});delete u.geographic;var c=e.props.dispatch;c({type:"account/putCurrent",payload:u})}})},e.getViewDom=function(t){e.view=t},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"componentDidUpdate",value:function(e){var t=e.currentUser,a=this.props.currentUser;t.id!==a.id&&this.setBaseInfo()}},{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e.avatar)return e.avatar;var t="https://res.yi-ll.com/template/boy-4.png";return t}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.location.pathname,r=e.submitting;return h.default.createElement("div",{className:k.default.baseView,ref:this.getViewDom},h.default.createElement("div",{className:k.default.left},h.default.createElement(b.default,{layout:"vertical",onSubmit:this.handleSubmit,hideRequiredMark:!0},h.default.createElement(_,{label:(0,y.formatMessage)({id:"app.settings.basic.email"})},t("eMail")(h.default.createElement(n.default,{placeholder:(0,y.formatMessage)({id:"app.settings.basic.email-message"})}))),h.default.createElement(_,{label:(0,y.formatMessage)({id:"app.settings.basic.nickname"})},t("name")(h.default.createElement(n.default,{placeholder:(0,y.formatMessage)({id:"app.settings.basic.nickname-message"})}))),h.default.createElement(_,{label:(0,y.formatMessage)({id:"app.settings.basic.introduce"})},t("introduce")(h.default.createElement(n.default.TextArea,{placeholder:(0,y.formatMessage)({id:"app.settings.basic.introduce-placeholder"}),rows:4}))),h.default.createElement(_,{label:(0,y.formatMessage)({id:"app.settings.basic.country"})},t("country")(h.default.createElement(p.default,{placeholder:"\u8bf7\u9009\u62e9\u56fd\u5bb6/\u5730\u533a",style:{maxWidth:220}},h.default.createElement(j,{value:"China"},"\u4e2d\u56fd")))),h.default.createElement(_,{label:(0,y.formatMessage)({id:"app.settings.basic.geographic"})},t("geographic",{rules:[{validator:F}]})(h.default.createElement(O.default,null))),h.default.createElement(_,{label:(0,y.formatMessage)({id:"app.settings.basic.address"})},t("address")(h.default.createElement(n.default,{placeholder:(0,y.formatMessage)({id:"app.settings.basic.address-message"})}))),h.default.createElement(_,{label:(0,y.formatMessage)({id:"app.settings.basic.mobile"})},t("mobile",{rules:[{pattern:/^1[3|4|5|7|8][0-9]{9}$/,message:(0,y.formatMessage)({id:"app.settings.basic.mobile-error"})}]})(h.default.createElement(n.default,{placeholder:(0,y.formatMessage)({id:"app.settings.basic.mobile-message"})}))),h.default.createElement(w.default,{authority:[a,"edit"]},h.default.createElement(d.default,{loading:r,type:"primary",htmlType:"submit"},h.default.createElement(y.FormattedMessage,{id:"app.settings.basic.update",defaultMessage:"Update Information"}))))),h.default.createElement("div",{className:k.default.right},h.default.createElement(R,{avatar:this.getAvatarURL()})))}}]),a}(h.Component))||v)||v)||v),I=V;t.default=I}}]);