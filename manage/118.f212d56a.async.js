(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[118],{"9GnL":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M"));a("+L6B");var r=n(a("2/Rp"));a("Telt");var u=n(a("Tckk")),o=n(a("jehZ")),f=n(a("2Taf")),c=n(a("vZ4D")),i=n(a("MhPg")),d=n(a("l4Ni")),p=n(a("ujKo"));a("y8nQ");var s,y,b,m,v=n(a("Vl3Y")),g=N(a("q1tI")),h=n(a("HZnN")),w=a("MuoO"),k=n(a("3a4m")),E=n(a("ufQ4")),O=n(a("zHco"));function M(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(M=function(e){return e?a:t})(e)}function N(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=M(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=l?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}function j(e){var t=P();return function(){var a,n=(0,p.default)(e);if(t){var l=(0,p.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,d.default)(this,a)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var C=v.default.Item,S=(s=(0,w.connect)(function(e){var t=e.publicno,a=e.loading;return{publicNoInfo:t.publicNoInfo,loading:a.effects["publicno/get"]}}),y=h.default.Secured("/baseManager/entmanager/publicNo/:id"),b=v.default.create(),s(m=(0,E.default)(m=y(m=b(m=function(e){(0,i.default)(a,e);var t=j(a);function a(){var e;(0,f.default)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l)),e.onCancel=function(){k.default.goBack()},e}return(0,c.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match,n=a.params.id;n&&t({type:"publicno/get",payload:n})}},{key:"render",value:function(){var e=this.props,t=e.publicNoInfo,a=e.loading,n={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},f={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return g.default.createElement(O.default,null,g.default.createElement(l.default,{bordered:!1,loading:a},g.default.createElement(v.default,{style:{marginTop:8}},g.default.createElement(C,(0,o.default)({},n,{label:"\u673a\u6784\u540d\u79f0"}),t.enterpriseName),g.default.createElement(C,(0,o.default)({},n,{label:"\u5b9e\u4f8bKey"}),t.instanceKey),g.default.createElement(C,(0,o.default)({},n,{label:"\u7528\u6237\u540d"}),null!=t.bodyStr?t.bodyStr.UserName:null),g.default.createElement(C,(0,o.default)({},n,{label:"\u6635\u79f0"}),null!=t.bodyStr?t.bodyStr.NickName:null),g.default.createElement(C,(0,o.default)({},n,{label:"\u5934\u50cf"}),g.default.createElement(u.default,{size:64,shape:"square",src:null!=t.bodyStr?t.bodyStr.HeadPicture:null})),g.default.createElement(C,(0,o.default)({},f,{style:{marginTop:32}}),g.default.createElement(r.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),a}(g.Component))||m)||m)||m)||m),I=S;t.default=I}}]);