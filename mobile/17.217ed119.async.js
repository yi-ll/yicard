(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{cqpi:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("R9oj");var r=n(a("ECub"));a("1Cgs");var o=n(a("zvbH"));a("D2jH");var d=n(a("2ROE"));a("ufv1");var c=n(a("QYgq"));a("+L6B");var u=n(a("2/Rp"));a("tLCQ");var f=n(a("XYLF"));a("HVTF");var i=n(a("OT5E")),p=n(a("lwsE")),m=n(a("W8MJ")),s=n(a("a1gu")),E=n(a("Nsbk")),g=n(a("7W2i"));a("fu2T");var v=n(a("gK9i"));a("e3Tq");var h=n(a("n+tp"));a("puyI");var y,k,w=n(a("xZH1")),x=l(a("q1tI")),D=a("MuoO"),P=n(a("usdK")),Y=n(a("wd/R")),b=n(a("yY4C")),F=w.default.alert,N=h.default.Item,T=v.default.Panel,M={overflow:"hidden"},I=(y=(0,D.connect)(function(e){var t=e.renewmodel,a=e.loading;return{orderPackages:t.orderPackages,loading:a.effects["renewmodel/getorderpackage"]}}),y(k=function(e){function t(){var e,a;(0,p.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,s.default)(this,(e=(0,E.default)(t)).call.apply(e,[this].concat(l))),a.loadData=function(){var e=a.props,t=e.dispatch,n=e.match.params.id;n&&(i.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),t({type:"renewmodel/getorderpackage",payload:{cNo:n}}).then(function(){i.default.hide()}))},a.handleBack=function(){P.default.goBack()},a.onActive=function(e){var t=a.props.dispatch,n=a.props.match.params.id;F("\u6fc0\u6d3b","\u786e\u5b9a\u6fc0\u6d3b\u3010".concat(e.pName,"\u3011\u5957\u9910?"),[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(){t({type:"renewmodel/activePackage",payload:e.id}).then(function(){i.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),t({type:"renewmodel/getorderpackage",payload:{cNo:n}}).then(function(){i.default.hide()})})}}])},a.onReleasePackage=function(e){var t=a.props.dispatch,n=a.props.match.params.id;F("\u63d0\u524d\u91ca\u653e","\u786e\u5b9a\u63d0\u524d\u91ca\u653e\u5e76\u4f7f\u7528\u3010".concat(e.pName,"\u3011\u5957\u9910?"),[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(){t({type:"renewmodel/releasePackage",payload:{cNo:n,id:e.id}}).then(function(){i.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),t({type:"renewmodel/getorderpackage",payload:{cNo:n}}).then(function(){i.default.hide()})})}}])},a.handelPackage=function(e){if(!e)return null;var t=[];return e.forEach(function(e){0===e.state&&1!==e.tag&&t.push(x.default.createElement(N,{key:e.id},x.default.createElement(v.default,{accordion:!0},x.default.createElement(T,{header:x.default.createElement("span",null,x.default.createElement("span",{style:{color:"#1890FF"}},"[",e.pTypeName,"]"),"\xa0\xa0",e.pName),style:M,bordered:!1,showArrow:!1,key:e.id,extra:x.default.createElement("div",null,"\u751f\u6548\uff1a",x.default.createElement("span",{style:{color:3===e.effImm?"red":""}},e.effImmTxt))},x.default.createElement(f.default.Footer,{content:"\u5957\u9910\u7c7b\u578b",extra:x.default.createElement("div",null,e.pTypeName)}),x.default.createElement(f.default.Footer,{content:"\u6570\u91cf",extra:x.default.createElement("div",null,e.pNum)}),x.default.createElement(f.default.Footer,{content:"\u5df2\u7528/\u53ef\u7528(\u989d\u5ea6)",extra:"".concat(e.uQuota,"/").concat(e.quota," (").concat(e.unit,")")}),x.default.createElement(f.default.Footer,{content:"\u5957\u9910\u5468\u671f",extra:x.default.createElement("div",null,"".concat(e.pPeriod).concat(0===e.periodUnit?"\u4e2a\u6708":"\u65e5"))}),x.default.createElement(f.default.Footer,{content:"\u6e05\u96f6\u5468\u671f",extra:x.default.createElement("div",null,"".concat(e.cPeriod).concat(0===e.periodUnit?"\u4e2a\u6708":"\u65e5"))}),x.default.createElement(f.default.Footer,{content:"\u670d\u52a1\u671f",extra:"".concat(e.pEffDate?(0,Y.default)(e.pEffDate).format("YYYY-MM-DD"):""," / ").concat(e.pInvDate?(0,Y.default)(e.pInvDate).format("YYYY-MM-DD"):"")}),x.default.createElement(f.default.Footer,{content:"\u8ba1\u8d39\u7c7b\u578b",extra:x.default.createElement("div",null,e.bTypeName)}),x.default.createElement(f.default.Footer,{content:"\u8ba2\u5355\u65f6\u95f4",extra:x.default.createElement("span",null,e.oTime)}),x.default.createElement(f.default.Footer,{content:"\u8ba2\u5355",extra:x.default.createElement("span",null,e.oNo)}),x.default.createElement(f.default.Footer,{content:"\u63cf\u8ff0",extra:x.default.createElement("span",null,e.remark)}))),x.default.createElement("div",{style:{textAlign:"center",marginTop:5}},3===e.effImm?x.default.createElement(u.default,{type:"primary",htmlType:"submit",onClick:function(){return a.onActive(e)}},"\u9a6c\u4e0a\u6fc0\u6d3b"):null,3===e.pType&&e.pEffDate&&3!==e.effImm&&e.pPeriod>1&&e.pPeriod!==e.cPeriod&&e.pInvDate&&(0,Y.default)(e.pInvDate).format("YYYY-MM-DD")>(0,Y.default)(new Date).format("YYYY-MM-DD")?x.default.createElement(u.default,{type:"primary",htmlType:"submit",onClick:function(){return a.onReleasePackage(e)}},"\u63d0\u524d\u91ca\u653e"):null),x.default.createElement(c.default,{size:"xs"})))}),t},a}return(0,g.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"renewmodel/clearOrderpackage"})}},{key:"render",value:function(){var e=this.props.orderPackages;return x.default.createElement(x.Fragment,null,x.default.createElement(o.default,{mode:"light",icon:x.default.createElement(d.default,{type:"left"}),onLeftClick:this.handleBack,rightContent:[x.default.createElement(u.default,{key:"1",size:"small",icon:"reload",shape:"circle",onClick:this.loadData})]},"\u7eed\u8d39\u8bb0\u5f55"),x.default.createElement("div",{className:b.default.tableList},e&&e.length>0?this.handelPackage(e):x.default.createElement(r.default,{image:r.default.PRESENTED_IMAGE_SIMPLE})))}}]),t}(x.PureComponent))||k),L=I;t.default=L},yY4C:function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-renew\\-package-list\\index-tableList",tableListOperator:"antd-pro\\pages\\-renew\\-package-list\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-renew\\-package-list\\index-tableListForm",submitButtons:"antd-pro\\pages\\-renew\\-package-list\\index-submitButtons"}}}]);