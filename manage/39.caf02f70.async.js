(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{aCoL:function(e,t,a){e.exports={main:"antd-pro\\pages\\-account\\_layout-main",leftmenu:"antd-pro\\pages\\-account\\_layout-leftmenu",right:"antd-pro\\pages\\-account\\_layout-right",title:"antd-pro\\pages\\-account\\_layout-title"}},sHX4:function(e,t,a){"use strict";var n=a("284h"),i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("lwsE")),l=i(a("W8MJ")),u=i(a("a1gu")),r=i(a("Nsbk")),c=i(a("7W2i"));a("lUTK");var o=i(a("BvKs")),d=n(a("q1tI")),m=i(a("usdK")),f=a("LLXN"),p=i(a("v99g")),g=i(a("aCoL")),h=o.default.Item,v=function(e){function t(e){var a;(0,s.default)(this,t),a=(0,u.default)(this,(0,r.default)(t).call(this,e)),a.getmenu=function(){var e=a.state.menuMap;return Object.keys(e).map(function(t){return d.default.createElement(h,{key:t},e[t])})},a.getRightTitle=function(){var e=a.state,t=e.selectKey,n=e.menuMap;return n[t]},a.selectKey=function(e){var t=e.key;m.default.push("/account/settings/".concat("base"===t?"":"".concat(t))),a.setState({selectKey:t})},a.resize=function(){a.main&&requestAnimationFrame(function(){if(a.main){var e="inline",t=a.main.offsetWidth;t<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),a.setState({mode:e})}})};var n=e.match,i=e.location,l={base:d.default.createElement(f.FormattedMessage,{id:"app.settings.menuMap.basic",defaultMessage:"Basic Settings"}),security:d.default.createElement(f.FormattedMessage,{id:"app.settings.menuMap.security",defaultMessage:"Security Settings"}),publicSet:d.default.createElement(f.FormattedMessage,{id:"app.settings.menuMap.platform.settings",defaultMessage:"Service Expire"})},c=i.pathname.replace("".concat(n.path,"/"),"");return a.state={mode:"inline",menuMap:l,selectKey:l[c]?c:"base"},a}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.state,n=a.mode,i=a.selectKey;return d.default.createElement(p.default,null,d.default.createElement("div",{className:g.default.main,ref:function(t){e.main=t}},d.default.createElement("div",{className:g.default.leftmenu},d.default.createElement(o.default,{mode:n,selectedKeys:[i],onClick:this.selectKey},this.getmenu())),d.default.createElement("div",{className:g.default.right},d.default.createElement("div",{className:g.default.title},this.getRightTitle()),t)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.location,n=a.pathname.split("/"),i=n[n.length-1];return i=t.menuMap[i]?i:"base",i!==t.selectKey?{selectKey:i}:null}}]),t}(d.Component),y=v;t.default=y}}]);