(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{ESES:function(e,t,a){"use strict";var n=a("284h"),i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var d=i(a("VXEj"));a("Pwec");var s=i(a("CtXQ")),l=i(a("lwsE")),r=i(a("W8MJ")),u=i(a("a1gu")),o=i(a("Nsbk")),c=i(a("7W2i")),f=n(a("q1tI")),g=a("LLXN"),p=function(e){function t(){var e,a;(0,l.default)(this,t);for(var n=arguments.length,i=new Array(n),d=0;d<n;d++)i[d]=arguments[d];return a=(0,u.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(i))),a.getData=function(){return[{title:(0,g.formatMessage)({id:"app.settings.binding.taobao"},{}),description:(0,g.formatMessage)({id:"app.settings.binding.taobao-description"},{}),actions:[f.default.createElement("a",null,f.default.createElement(g.FormattedMessage,{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:f.default.createElement(s.default,{type:"taobao",className:"taobao"})},{title:(0,g.formatMessage)({id:"app.settings.binding.alipay"},{}),description:(0,g.formatMessage)({id:"app.settings.binding.alipay-description"},{}),actions:[f.default.createElement("a",null,f.default.createElement(g.FormattedMessage,{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:f.default.createElement(s.default,{type:"alipay",className:"alipay"})},{title:(0,g.formatMessage)({id:"app.settings.binding.dingding"},{}),description:(0,g.formatMessage)({id:"app.settings.binding.dingding-description"},{}),actions:[f.default.createElement("a",null,f.default.createElement(g.FormattedMessage,{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:f.default.createElement(s.default,{type:"dingding",className:"dingding"})}]},a}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return f.default.createElement(f.Fragment,null,f.default.createElement(d.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return f.default.createElement(d.default.Item,{actions:e.actions},f.default.createElement(d.default.Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),t}(f.Component),m=p;t.default=m}}]);