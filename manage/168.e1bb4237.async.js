(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[168],{"9GnL":function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var u=l(a("bx4M"));a("+L6B");var r=l(a("2/Rp"));a("Telt");var d=l(a("Tckk")),o=l(a("pVnL")),f=l(a("lwsE")),c=l(a("W8MJ")),s=l(a("a1gu")),i=l(a("Nsbk")),p=l(a("7W2i"));a("y8nQ");var m,b,y,g,v,E=l(a("Vl3Y")),h=n(a("q1tI")),k=l(a("HZnN")),w=a("MuoO"),N=l(a("usdK")),C=l(a("ufQ4")),S=l(a("zHco")),I=E.default.Item,M=(m=(0,w.connect)(function(e){var t=e.publicno,a=e.loading;return{publicNoInfo:t.publicNoInfo,loading:a.effects["publicno/get"]}}),b=k.default.Secured("/baseManager/entmanager/publicNo/:id"),y=E.default.create(),m(g=(0,C.default)(g=b(g=y((v=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,s.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(n))),a.onCancel=function(){N.default.goBack()},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match,l=a.params.id;l&&t({type:"publicno/get",payload:l})}},{key:"render",value:function(){var e=this.props,t=e.publicNoInfo,a=e.loading,l={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return h.default.createElement(S.default,null,h.default.createElement(u.default,{bordered:!1,loading:a},h.default.createElement(E.default,{style:{marginTop:8}},h.default.createElement(I,(0,o.default)({},l,{label:"\u673a\u6784\u540d\u79f0"}),t.enterpriseName),h.default.createElement(I,(0,o.default)({},l,{label:"\u5b9e\u4f8bKey"}),t.instanceKey),h.default.createElement(I,(0,o.default)({},l,{label:"\u7528\u6237\u540d"}),null!=t.bodyStr?t.bodyStr.UserName:null),h.default.createElement(I,(0,o.default)({},l,{label:"\u6635\u79f0"}),null!=t.bodyStr?t.bodyStr.NickName:null),h.default.createElement(I,(0,o.default)({},l,{label:"\u5934\u50cf"}),h.default.createElement(d.default,{size:64,shape:"square",src:null!=t.bodyStr?t.bodyStr.HeadPicture:null})),h.default.createElement(I,(0,o.default)({},n,{style:{marginTop:32}}),h.default.createElement(r.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),t}(h.Component),g=v))||g)||g)||g)||g),T=M;t.default=T}}]);