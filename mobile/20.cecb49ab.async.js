(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{g3xg:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("oByq");var n=l(a("Wx4G"));a("Pwec");var o=l(a("CtXQ"));a("HVTF");var r=l(a("OT5E")),u=l(a("2Taf")),i=l(a("vZ4D")),s=l(a("MhPg")),d=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("p0pE"));a("e3Tq");var p,m,h=l(a("n+tp")),y=E(a("q1tI")),g=a("MuoO"),S=l(a("5+h1"));function v(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(v=function(e){return e?a:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=v(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=n?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(l,o,r):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}function x(e){var t=w();return function(){var a,l=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,d.default)(this,a)}}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var k=h.default.Item,T=(p=(0,g.connect)(function(e){var t=e.renewmodel,a=e.loading;return(0,f.default)({},t,{querying:a.effects["renewmodel/get"]})}),p(m=function(e){(0,s.default)(a,e);var t=x(a);function a(){var e;(0,u.default)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),e.reLoadDiagnosis=function(){var t=e.props,a=t.cardInfo,l=t.stopReason,n=t.sessionStatus,o=t.gprsStatus;e.loadDiagnosis(),!l&&a&&1===a.oType&&e.loadStopReason(!0),n||e.loadSessionStatus(!0),!o&&a&&1===a.oType&&e.loadGprsStatus(!0),a&&(a.imei||e.loadImei(!0),a.statusTxt||e.loadStatus(!0),a.wStateTxt||e.loadTerminalStatus(!0))},e.loadDiagnosis=function(){var t=e.props,a=t.match.params.id,l=t.dispatch;a&&(r.default.loading("\u6570\u636e\u67e5\u8be2\u4e2d..."),l({type:"renewmodel/queryDiagnosis",payload:a}).then(function(){r.default.hide()}))},e.loadStatus=function(t){var a=e.props,l=a.dispatch,n=a.match.params.id;r.default.loading("\u6570\u636e\u67e5\u8be2\u4e2d..."),n&&l({type:"renewmodel/queryStatus",payload:{id:n,auto:t}}).then(function(){r.default.hide()})},e.loadSessionStatus=function(t){var a=e.props,l=a.dispatch,n=a.match.params.id;n&&(r.default.loading("\u6570\u636e\u67e5\u8be2\u4e2d..."),l({type:"renewmodel/querySessionStatus",payload:{id:n,auto:t}}).then(function(){r.default.hide()}))},e.loadTerminalStatus=function(t){var a=e.props,l=a.dispatch,n=a.match.params.id;n&&(r.default.loading("\u6570\u636e\u67e5\u8be2\u4e2d..."),l({type:"renewmodel/queryTerminalStatus",payload:{id:n,auto:t}}).then(function(){r.default.hide()}))},e.loadGprsStatus=function(t){var a=e.props,l=a.match.params.id,n=a.dispatch;l&&(r.default.loading("\u6570\u636e\u67e5\u8be2\u4e2d..."),n({type:"renewmodel/queryGprsStatus",payload:{id:l,auto:t}}).then(function(){r.default.hide()}))},e.loadStopReason=function(t){var a=e.props,l=a.match.params.id,n=a.dispatch;l&&(r.default.loading("\u6570\u636e\u67e5\u8be2\u4e2d..."),n({type:"renewmodel/queryStopReason",payload:{id:l,auto:t}}).then(function(){r.default.hide()}))},e.loadImei=function(t){var a=e.props,l=a.match.params.id,n=a.dispatch;l&&(r.default.loading("\u6570\u636e\u67e5\u8be2\u4e2d..."),n({type:"renewmodel/queryImei",payload:{id:l,auto:t}}).then(function(){r.default.hide()}))},e.onRefresh=function(t){var a=e.state.msisdn;if(!a||a.length<11)r.default.fail("\u8bf7\u8f93\u5165SIM/IMSI/ICCID",1,null,!1);else switch(t){case"loadStatus":e.loadStatus();break;case"loadSessionStatus":e.loadSessionStatus();break;case"loadTerminalStatus":e.loadTerminalStatus();break;default:break}},e.getColor=function(e){return"\u5f00"===e||"\u5728\u7ebf"===e||"\u5f00\u673a"===e||"\u5df2\u6fc0\u6d3b"===e?"green":"\u5173"===e||"\u79bb\u7ebf"===e||"\u5173\u673a"===e||"\u5df2\u5230\u671f"===e||"\u5df2\u505c\u673a"===e||"\u5df2\u505c\u7528"===e||"\u9884\u9500\u6237"===e||"\u5df2\u9500\u6237"===e||"\u5df2\u62c6\u673a"===e||"\u5df2\u5931\u6548"===e||"\u8fbe\u91cf\u65ad\u7f51"===e||"\u8fbe\u91cf\u505c\u673a"===e||"\u5230\u671f\u65ad\u7f51"===e||"\u5230\u671f\u505c\u673a"===e||"\u4eba\u5de5\u65ad\u7f51"===e||"\u4eba\u5de5\u505c\u673a"===e||"\u505c\u673a"===e?"red":"\u5f85\u6fc0\u6d3b"===e?"blue":""},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){this.reLoadDiagnosis()}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"renewmodel/clearDiagnosis"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.cardInfo,l=t.sessionStatus,r=t.diagnosisInfo,u=t.gprsStatus,i=t.stopReason,s=a||{},d=s.statusTxt||"--",c=s.opStateTxt||"--";s&&4860===s.bNo&&1===s.closed&&s.uPFlow>=s.tPFlow&&(d="\u6b20\u8d39\u6ce8\u9500"),s&&1===s.opState&&(c="\u65e0");var f=[{info:y.default.createElement("span",{style:{color:this.getColor(d)}},d),text:"\u5361\u72b6\u6001",click:"loadStatus"},{info:y.default.createElement("span",{style:{color:this.getColor(s.wStateTxt)}},s.wStateTxt||"\u672a\u77e5"),text:"\u8bbe\u5907\u72b6\u6001",click:"loadTerminalStatus"},{info:y.default.createElement("span",{style:{color:this.getColor(l)}},l||"\u672a\u77e5"),text:"\u5728\u7ebf\u72b6\u6001",click:"loadSessionStatus"},{info:y.default.createElement("span",{style:{color:this.getColor(c)}},c),text:"\u64cd\u4f5c\u72b6\u6001",click:""}];return y.default.createElement("div",null,y.default.createElement("div",{className:S.default.header},y.default.createElement("div",{className:S.default.flexcontainer},y.default.createElement(h.default,{className:S.default.amlistextra},y.default.createElement(k,{extra:y.default.createElement("span",{className:S.default.flexSpan,style:{fontSize:14,color:"#000"}},s.msisdn),align:"top",multipleLine:!0},y.default.createElement("span",{className:S.default.cardHeaderTitle},"SIM\u5361\uff1a"))),y.default.createElement(n.default,{data:f,columnNum:4,className:S.default.grid,style:{height:"20px"},itemStyle:{height:50,padding:0},renderItem:function(t){return y.default.createElement("div",{style:{fontSize:"12px",height:"100%"}},y.default.createElement("div",{style:{color:"#A9ACB1",fontSize:"10px",height:"40%",marginTop:3}},y.default.createElement("span",null,t.text)),y.default.createElement("div",{style:{color:"#000000",paddingTop:5}},t.info,t.click&&y.default.createElement("span",{className:S.default.flexSpan},y.default.createElement(o.default,{type:"reload",size:"lg",style:{marginLeft:10,color:"#0182CD"},onClick:function(){return e.onRefresh(t.click)}}))))}}))),y.default.createElement("div",{className:S.default.container},y.default.createElement(h.default,{className:S.default.amlistextra},y.default.createElement(k,{extra:y.default.createElement("span",{style:{color:this.getColor(u||"--")}},u||"--")},"\u901a\u4fe1\u529f\u80fd\uff1a"),y.default.createElement(k,{extra:y.default.createElement("span",null,s.imei||"--",y.default.createElement("span",{className:S.default.flexSpan},y.default.createElement(o.default,{type:"reload",size:"lg",style:{marginLeft:10,color:"#0182CD"},onClick:function(){return e.loadImei(!1)}})))},"IMEI\uff1a"),y.default.createElement(k,{extra:y.default.createElement("span",null,r.apn||"--",y.default.createElement(o.default,{type:"reload",size:"lg",style:{marginLeft:10,color:"#0182CD"},onClick:function(){return e.loadDiagnosis()}}))},"APN\u540d\u79f0\uff1a"),y.default.createElement(k,{extra:y.default.createElement("span",{style:{color:this.getColor(r.status||"--")}},r.status||"--")},"\u4f1a\u8bdd\u72b6\u6001\uff1a"),y.default.createElement(k,{extra:r.createDate||"--"},"\u6700\u8fd1\u4f1a\u8bdd\uff1a"),y.default.createElement(k,{extra:r.rat||"--"},"\u7f51\u7edc\u7c7b\u578b\uff1a"),y.default.createElement(k,{extra:r.ip||"--"},"IPv4\uff1a"),y.default.createElement(k,{extra:r.ipv6||"--"},"IPv6\uff1a"),y.default.createElement(k,{extra:i||"--"},"\u505c\u673a\u539f\u56e0\uff1a"))))}}]),a}(y.Component))||m),I=T;t.default=I}}]);