(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{GkZV:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("AcIj");var d=l(a("Vz9s"));a("Pwec");var c=l(a("CtXQ"));a("QE6f");var u=l(a("Xo8F"));a("7Kak");var r=l(a("9yH6"));a("14J3");var f=l(a("BMrR"));a("jCWc");var i=l(a("kPKH"));a("DR4Q");var o=l(a("gumZ"));a("HVTF");var s=l(a("OT5E")),m=l(a("lwsE")),p=l(a("W8MJ")),v=l(a("a1gu")),g=l(a("Nsbk")),E=l(a("7W2i")),h=l(a("MVZn"));a("puyI");var y=l(a("xZH1"));a("e3Tq");var N,k,P=l(a("n+tp")),b=n(a("q1tI")),T=a("MuoO"),S=a("Y3KF"),w=l(a("ZhIB")),C=l(a("5+h1")),x="fjvoicephone",I=P.default.Item,A="\u8bed\u97f3\u5957\u9910",B="\u6d41\u91cf\u5957\u9910",F=y.default.alert,V=(N=(0,T.connect)(function(e){var t=e.renewmodel,a=e.loading;return(0,h.default)({},t,{querying:a.effects["renewmodel/get"]})}),N(k=function(e){function t(e){var a;return(0,m.default)(this,t),a=(0,v.default)(this,(0,g.default)(t).call(this,e)),a.onSearch=function(e){var t=a.state.business,l=a.props.dispatch;if(e){if(e.length<11||e.length>30||!new RegExp("^[A-Za-z0-9]+$").test(e))return void s.default.info("\u8bf7\u8f93\u516511\u81f330\u4f4d\u7684\u6570\u5b57\u3001\u5b57\u6bcd",5,null,!1);s.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),l({type:"renewmodel/checkordered",payload:{msisdn:e}}).then(function(){var n=a.props.ordered;n||l({type:"renewmodel/getvoicepackage",payload:{msisdn:e,business:t}}).then(function(){var e=a.props.voicePackages,t=a.state,l=t.selectedPackage,n=t.selectedVoicePackage;if(e&&e[A]){var d=e[A][0];n||(a.setState({selectedVoicePackage:d}),d&&1===d.pPeriod&&a.setState({voiceCount:12}))}if(e&&e[B]){var c=e[B][0];l||(a.setState({selectedPackage:c}),c&&1===c.pPeriod&&a.setState({count:12}))}s.default.hide()}),l({type:"renewmodel/get",payload:{cNo:e}}).then(function(){s.default.hide()})})}},a.renderTabBar=function(e){return b.default.createElement(S.Sticky,{bottomOffset:80},function(t){var a=t.styles;return b.default.createElement("div",{style:(0,h.default)({},a,{zIndex:1,background:"#fff"})},b.default.createElement(o.default.DefaultTabBar,e))})},a.isActive=function(e){var t=a.state,l=t.selectedPackage,n=t.selectedVoicePackage,d=t.currentTabKey;return d===A?!!n&&n.id===e:d===B&&(!!l&&l.id===e)},a.setActiveTab=function(e){1===e.bType?(a.setState({selectedPackage:e}),e&&1===e.pPeriod?a.setState({count:12}):a.setState({count:1})):(a.setState({selectedVoicePackage:e}),e&&1===e.pPeriod?a.setState({voiceCount:12}):a.setState({voiceCount:1}))},a.genTabItem=function(e,t){return 1===t?b.default.createElement("div",{className:C.default.gutterexample,key:e[0].id},b.default.createElement(f.default,{gutter:2,key:e[0].id},b.default.createElement(i.default,{className:C.default.gutterrow,span:12},b.default.createElement("div",{className:a.isActive(e[0].id)?C.default.placeholderActive:C.default.placeholder,onClick:function(){return a.setActiveTab(e[0])}},b.default.createElement("div",{className:C.default.info,style:{height:"50%",marginTop:-10}},e[0].pName),b.default.createElement("div",{style:{height:"50%",marginTop:-5}},"\uffe5",e[0].renewPrice,"\u5143"))))):2===t?b.default.createElement("div",{className:C.default.gutterexample,key:e[0].id},b.default.createElement(f.default,{gutter:2,key:e[0].id},b.default.createElement(i.default,{className:C.default.gutterrow,span:12},b.default.createElement("div",{className:a.isActive(e[0].id)?C.default.placeholderActive:C.default.placeholder,onClick:function(){return a.setActiveTab(e[0])}},b.default.createElement("div",{className:C.default.info,style:{height:"50%",marginTop:-10}},e[0].pName),b.default.createElement("div",{style:{height:"50%",marginTop:-5}},"\uffe5",e[0].renewPrice,"\u5143"))),b.default.createElement(i.default,{className:C.default.gutterrow,span:12},b.default.createElement("div",{className:a.isActive(e[1].id)?C.default.placeholderActive:C.default.placeholder,onClick:function(){return a.setActiveTab(e[1])}},b.default.createElement("div",{className:C.default.info,style:{height:"50%",marginTop:-10}},e[1].pName),b.default.createElement("div",{style:{height:"50%",marginTop:-5}},"\uffe5",e[1].renewPrice,"\u5143"))))):null},a.getRow=function(e){for(var t=[],l=2,n=0;n<e.length;n+=l){var d=e.slice(n,n+l);if(d&&d.length>0){var c=a.genTabItem(d,d.length);t.push(c)}}return t},a.onTabsChange=function(e){a.setState({currentTabKey:e.title});var t=a.props.voicePackages,l=a.state,n=l.selectedPackage,d=l.selectedVoicePackage;if(t){var c=t[e.title][0];1===c.bType?n||(a.setState({selectedPackage:c}),c&&1===c.pPeriod?a.setState({count:12}):a.setState({count:1})):d||(a.setState({selectedVoicePackage:c}),c&&1===c.pPeriod?a.setState({voiceCount:12}):a.setState({voiceCount:1}))}},a.onChangeCount=function(e){var t=a.state.currentTabKey;t===B?a.setState({count:e.target.value}):a.setState({voiceCount:e.target.value})},a.initalTab=function(e){if(!e)return null;var t=[],l=[],n=a.state,d=n.count,c=n.voiceCount,u=n.selectedPackage,f=n.selectedVoicePackage,i=n.currentTabKey,s={};for(var m in i===A&&f&&f.pPeriod&&(s=f,s.count=c),i===B&&u&&u.pPeriod&&(s=u,s.count=d),e)l.push({title:m}),{}.hasOwnProperty.call(e,m)&&t.push(b.default.createElement("div",{key:m,style:{paddingTop:20,height:"100%",backgroundColor:"#fff"}},a.getRow(e[m]),s&&1===s.pPeriod?b.default.createElement("div",null,b.default.createElement(I,{align:"middle"},b.default.createElement("div",{style:{color:"#EF7C6A",fontWeight:"bolder",fontSize:15}},b.default.createElement("span",null,"\u8d2d\u4e70\u65f6\u957f\uff1a"),b.default.createElement("span",{className:C.default.cardHeaderTitle,style:{color:"#f5222d",fontWeight:"bold",fontSize:10}},"\uff08\u5e94\u4ed8\u91d1\u989d\uff1a"),b.default.createElement("span",{className:C.default.flexSpan,style:{color:"#f5222d",fontWeight:"bold",fontSize:10}},"-"!==s.renewPrice?"".concat((0,w.default)(s.renewPrice*d).format("0,0.00")):"-","\u5143\uff09")),b.default.createElement(r.default.Group,{onChange:a.onChangeCount,value:s.count,buttonStyle:"solid",style:{marginTop:"25px"}},b.default.createElement(r.default.Button,{value:1},"1\u4e2a\u6708"),b.default.createElement(r.default.Button,{value:3},"3\u4e2a\u6708"),b.default.createElement(r.default.Button,{value:6},"6\u4e2a\u6708"),b.default.createElement(r.default.Button,{value:9},"9\u4e2a\u6708"),b.default.createElement(r.default.Button,{value:12},"1\u5e74")))):null));return b.default.createElement(o.default,{style:{background:"#ffffff"},tabs:l,onChange:a.onTabsChange,defaultActiveKey:B,activeKey:i,renderTabBar:a.renderTabBar},t)},a.toLink=function(e){window.location.href=e},a.onWhiteList=function(){var e=a.props.match.params.id;window.location.href="../whitelist/".concat(e)},a.onSubmit=function(){var e=a.props.match.params.id,t=a.state,l=t.selectedPackage,n=t.selectedVoicePackage,d=t.count,c=t.voiceCount;if(l&&l.id)if(n&&n.id){var u=a.props.dispatch,r=localStorage.getItem(x)||"";F("\u8ba2\u8d2d\u5957\u9910","\u786e\u5b9a\u8ba2\u8d2d\u3010".concat(l.pName,"\u3011\u4e0e\u3010").concat(n.pName,"\u3011\u5957\u9910\u5417\uff1f"),[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(){s.default.loading("\u8ba2\u8d2d\u4e2d..."),u({type:"renewmodel/renewvoice",payload:{cNo:e,basePkg:{pkgNo:l.id,count:d},voicePkg:{pkgNo:n.id,count:c},mobile:r}}).then(function(){s.default.hide()})}}])}else s.default.info("\u8bf7\u9009\u62e9\u8bed\u97f3\u5957\u9910\uff01",1,null,!1);else s.default.info("\u8bf7\u9009\u62e9\u6d41\u91cf\u5957\u9910\uff01",1,null,!1)},a.state={selectedPackage:null,selectedVoicePackage:null,qrCode:null,business:!1,count:1,voiceCount:1,currentTabKey:B},a}return(0,E.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=localStorage.getItem(x);e||(window.location.href="/renew/voice/signup");var t=this.props.match.params.id;t&&this.onSearch(t)}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"renewmodel/clearRenew"})}},{key:"render",value:function(){var e=this.props,t=e.cardInfo,a=e.voicePackages,l=e.ordered,n=this.state,r=n.selectedPackage,o=n.selectedVoicePackage,s=n.qrCode,m=n.count,p=n.voiceCount,v=n.currentTabKey,g={pName:"-",pType:"-",renewPrice:"-",pPeriod:"-",note:"",count:1};v===A&&o&&o.pPeriod&&(g=o,g.count=p),v===B&&r&&r.pPeriod&&(g=r,g.count=m);var E="";r&&o&&(E="".concat((0,w.default)((r.renewPrice||0)*m+(o.renewPrice||0)*p).format("0,0.00"),"\u5143,"));var h=t&&t.pkgNo&&t.voicePkgNo&&l;return b.default.createElement("div",{style:{height:"100%"}},h?b.default.createElement("div",null,b.default.createElement(S.StickyContainer,null,b.default.createElement("div",{className:C.default.header},b.default.createElement("div",{className:C.default.flexcontainer},b.default.createElement("div",null,b.default.createElement(u.default,{className:C.default.felxBg,style:{paddingLeft:20,paddingTop:30}},b.default.createElement(u.default.Item,{className:C.default.felxSpan},b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("span",{className:C.default.cardHeaderTitle},"\u5361\u53f7\uff1a"),b.default.createElement("span",{className:C.default.flexSpan},t.msisdn||"-")),b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("span",{className:C.default.cardHeaderTitle},"ICCID\uff1a"),b.default.createElement("span",{className:C.default.flexSpan},t.iccid||"-")),b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("span",{className:C.default.cardHeaderTitle},"IMSI\uff1a"),b.default.createElement("span",{className:C.default.flexSpan},t.imsi||"-"))))),b.default.createElement("div",{style:{borderTop:"2px solid #F5F5F9"}},b.default.createElement(u.default,{className:C.default.felxBg,style:{paddingLeft:20,paddingTop:30}},b.default.createElement(u.default.Item,{className:C.default.felxSpan},b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("span",{className:C.default.cardHeaderTitle,style:{color:"#EF7C6A",fontWeight:"bolder",fontSize:15}},"\u5df2\u8d2d\u5957\u9910\uff1a"))))),b.default.createElement("div",null,b.default.createElement(u.default,{style:{minHeight:60,alignItems:"normal"}},b.default.createElement(u.default.Item,{className:C.default.felxSpan},b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("div",{className:C.default.placeholderActive},b.default.createElement(c.default,{type:"wifi",style:{color:"#EF7C6A",paddingRight:5}}),t.packageName))),b.default.createElement(u.default.Item,{className:C.default.felxSpan},b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("div",{className:C.default.placeholderActive},b.default.createElement(c.default,{type:"phone",style:{color:"#EF7C6A",paddingRight:5}}),t.voicePkgName))))))),b.default.createElement("div",{className:C.default.paybottom},b.default.createElement(f.default,null,b.default.createElement(i.default,{span:24,className:2===t.oType?C.default.paybtnlt:C.default.paybtnyd,onClick:this.onWhiteList},"\u767d\u540d\u5355\u7ba1\u7406"))))):b.default.createElement("div",{style:{height:"100%"}},s?b.default.createElement(b.Fragment,null,this.toLink(s)):b.default.createElement("div",{style:{height:"100%"}},b.default.createElement("div",{className:C.default.header},b.default.createElement("div",{className:C.default.flexcontainer},b.default.createElement("div",{style:{borderBottom:"2px solid #F5F5F9"}},b.default.createElement(u.default,{className:C.default.felxBg,style:{paddingLeft:20}},b.default.createElement(u.default.Item,{className:C.default.felxSpan},b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("span",{className:C.default.cardHeaderTitle},"\u5957\u9910\u8d44\u8d39\uff1a"),b.default.createElement("span",{className:C.default.flexSpan},"-"!==g.renewPrice?"".concat((0,w.default)(g.renewPrice).format("0,0.00")):"-","\u5143"))),b.default.createElement(u.default.Item,{className:C.default.felxSpan},b.default.createElement("div",{className:C.default.felxItem},b.default.createElement("span",{className:C.default.cardHeaderTitle},"\u5957\u9910\u5468\u671f\uff1a"),b.default.createElement("span",{className:C.default.flexSpan},g&&g.pPeriod?(parseInt(g.pPeriod,10)||0)*g.count:"-","\u4e2a\u6708"))))))),b.default.createElement("div",{style:{paddingTop:80,height:"100%"}},b.default.createElement(S.StickyContainer,null,this.initalTab(a))),b.default.createElement("div",{className:C.default.paybottom},r?b.default.createElement(d.default,{style:{textAlign:"left"},icon:null},"\u9009\u8d2d\u6d41\u91cf\u5957\u9910\uff1a","".concat(r.pName,",\u6570\u91cf=").concat(m)):null,o?b.default.createElement(d.default,{style:{textAlign:"left"},icon:null},"\u9009\u8d2d\u8bed\u97f3\u5957\u9910\uff1a","".concat(o.pName,",\u6570\u91cf=").concat(p)):null,b.default.createElement(f.default,null,b.default.createElement(i.default,{span:12,className:C.default.paybottomtip},b.default.createElement("div",{className:C.default.paybottomlefttop},t.msisdn||"-"),b.default.createElement("div",{className:C.default.voicebottomleft},"ICCID\uff1a",t.iccid||"-"),b.default.createElement("div",{className:C.default.voicebottomleft},"IMSI\uff1a",t.imsi||"-")),b.default.createElement(i.default,{span:12,className:2===t.oType?C.default.paybtnlt:C.default.paybtnyd,onClick:this.onSubmit},E,"\u7acb\u5373\u4ed8\u6b3e"))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.renewVoiceData,l=t.qrCode;return a&&l!==a?{qrCode:a}:null}}]),t}(b.Component))||k),H=V;t.default=H}}]);