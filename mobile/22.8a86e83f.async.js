(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{GkZV:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("AcIj");var n=l(a("Vz9s"));a("Pwec");var c=l(a("CtXQ"));a("QE6f");var d=l(a("Xo8F"));a("7Kak");var r=l(a("9yH6"));a("14J3");var u=l(a("BMrR"));a("jCWc");var f=l(a("kPKH"));a("DR4Q");var o=l(a("gumZ"));a("HVTF");var i=l(a("OT5E")),s=l(a("2Taf")),m=l(a("vZ4D")),p=l(a("MhPg")),v=l(a("l4Ni")),g=l(a("ujKo")),E=l(a("p0pE"));a("puyI");var h=l(a("xZH1"));a("e3Tq");var y,N,P=l(a("n+tp")),k=x(a("q1tI")),b=a("MuoO"),w=a("Y3KF"),T=l(a("ZhIB")),S=l(a("5+h1"));function C(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(C=function(e){return e?a:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=C(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var d=n?Object.getOwnPropertyDescriptor(e,c):null;d&&(d.get||d.set)?Object.defineProperty(l,c,d):l[c]=e[c]}return l.default=e,a&&a.set(e,l),l}function I(e){var t=A();return function(){var a,l=(0,g.default)(e);if(t){var n=(0,g.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,v.default)(this,a)}}function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var B="fjvoicephone",F=P.default.Item,O="\u8bed\u97f3\u5957\u9910",V="\u6d41\u91cf\u5957\u9910",R=h.default.alert,H=(y=(0,b.connect)(function(e){var t=e.renewmodel,a=e.loading;return(0,E.default)({},t,{querying:a.effects["renewmodel/get"]})}),y(N=function(e){(0,p.default)(a,e);var t=I(a);function a(e){var l;return(0,s.default)(this,a),l=t.call(this,e),l.onSearch=function(e){var t=l.state.business,a=l.props.dispatch;if(e){if(e.length<11||e.length>30||!new RegExp("^[A-Za-z0-9]+$").test(e))return void i.default.info("\u8bf7\u8f93\u516511\u81f330\u4f4d\u7684\u6570\u5b57\u3001\u5b57\u6bcd",5,null,!1);i.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),a({type:"renewmodel/checkordered",payload:{msisdn:e}}).then(function(){var n=l.props.ordered;n||a({type:"renewmodel/getvoicepackage",payload:{msisdn:e,business:t}}).then(function(){var e=l.props.voicePackages,t=l.state,a=t.selectedPackage,n=t.selectedVoicePackage;if(e&&e[O]){var c=e[O][0];n||(l.setState({selectedVoicePackage:c}),c&&1===c.pPeriod&&l.setState({voiceCount:12}))}if(e&&e[V]){var d=e[V][0];a||(l.setState({selectedPackage:d}),d&&1===d.pPeriod&&l.setState({count:12}))}i.default.hide()}),a({type:"renewmodel/get",payload:{cNo:e}}).then(function(){i.default.hide()})})}},l.renderTabBar=function(e){return k.default.createElement(w.Sticky,{bottomOffset:80},function(t){var a=t.styles;return k.default.createElement("div",{style:(0,E.default)({},a,{zIndex:1,background:"#fff"})},k.default.createElement(o.default.DefaultTabBar,e))})},l.isActive=function(e){var t=l.state,a=t.selectedPackage,n=t.selectedVoicePackage,c=t.currentTabKey;return c===O?!!n&&n.id===e:c===V&&(!!a&&a.id===e)},l.setActiveTab=function(e){1===e.bType?(l.setState({selectedPackage:e}),e&&1===e.pPeriod?l.setState({count:12}):l.setState({count:1})):(l.setState({selectedVoicePackage:e}),e&&1===e.pPeriod?l.setState({voiceCount:12}):l.setState({voiceCount:1}))},l.genTabItem=function(e,t){return 1===t?k.default.createElement("div",{className:S.default.gutterexample,key:e[0].id},k.default.createElement(u.default,{gutter:2,key:e[0].id},k.default.createElement(f.default,{className:S.default.gutterrow,span:12},k.default.createElement("div",{className:l.isActive(e[0].id)?S.default.placeholderActive:S.default.placeholder,onClick:function(){return l.setActiveTab(e[0])}},k.default.createElement("div",{className:S.default.info,style:{height:"50%",marginTop:-10}},e[0].pName),k.default.createElement("div",{style:{height:"50%",marginTop:-5}},"\uffe5",e[0].renewPrice,"\u5143"))))):2===t?k.default.createElement("div",{className:S.default.gutterexample,key:e[0].id},k.default.createElement(u.default,{gutter:2,key:e[0].id},k.default.createElement(f.default,{className:S.default.gutterrow,span:12},k.default.createElement("div",{className:l.isActive(e[0].id)?S.default.placeholderActive:S.default.placeholder,onClick:function(){return l.setActiveTab(e[0])}},k.default.createElement("div",{className:S.default.info,style:{height:"50%",marginTop:-10}},e[0].pName),k.default.createElement("div",{style:{height:"50%",marginTop:-5}},"\uffe5",e[0].renewPrice,"\u5143"))),k.default.createElement(f.default,{className:S.default.gutterrow,span:12},k.default.createElement("div",{className:l.isActive(e[1].id)?S.default.placeholderActive:S.default.placeholder,onClick:function(){return l.setActiveTab(e[1])}},k.default.createElement("div",{className:S.default.info,style:{height:"50%",marginTop:-10}},e[1].pName),k.default.createElement("div",{style:{height:"50%",marginTop:-5}},"\uffe5",e[1].renewPrice,"\u5143"))))):null},l.getRow=function(e){for(var t=[],a=2,n=0;n<e.length;n+=a){var c=e.slice(n,n+a);if(c&&c.length>0){var d=l.genTabItem(c,c.length);t.push(d)}}return t},l.onTabsChange=function(e){l.setState({currentTabKey:e.title});var t=l.props.voicePackages,a=l.state,n=a.selectedPackage,c=a.selectedVoicePackage;if(t){var d=t[e.title][0];1===d.bType?n||(l.setState({selectedPackage:d}),d&&1===d.pPeriod?l.setState({count:12}):l.setState({count:1})):c||(l.setState({selectedVoicePackage:d}),d&&1===d.pPeriod?l.setState({voiceCount:12}):l.setState({voiceCount:1}))}},l.onChangeCount=function(e){var t=l.state.currentTabKey;t===V?l.setState({count:e.target.value}):l.setState({voiceCount:e.target.value})},l.initalTab=function(e){if(!e)return null;var t=[],a=[],n=l.state,c=n.count,d=n.voiceCount,u=n.selectedPackage,f=n.selectedVoicePackage,i=n.currentTabKey,s={};for(var m in i===O&&f&&f.pPeriod&&(s=f,s.count=d),i===V&&u&&u.pPeriod&&(s=u,s.count=c),e)a.push({title:m}),{}.hasOwnProperty.call(e,m)&&t.push(k.default.createElement("div",{key:m,style:{paddingTop:20,height:"100%",backgroundColor:"#fff"}},l.getRow(e[m]),s&&1===s.pPeriod?k.default.createElement("div",null,k.default.createElement(F,{align:"middle"},k.default.createElement("div",{style:{color:"#EF7C6A",fontWeight:"bolder",fontSize:15}},k.default.createElement("span",null,"\u8d2d\u4e70\u65f6\u957f\uff1a"),k.default.createElement("span",{className:S.default.cardHeaderTitle,style:{color:"#f5222d",fontWeight:"bold",fontSize:10}},"\uff08\u5e94\u4ed8\u91d1\u989d\uff1a"),k.default.createElement("span",{className:S.default.flexSpan,style:{color:"#f5222d",fontWeight:"bold",fontSize:10}},"-"!==s.renewPrice?"".concat((0,T.default)(s.renewPrice*c).format("0,0.00")):"-","\u5143\uff09")),k.default.createElement(r.default.Group,{onChange:l.onChangeCount,value:s.count,buttonStyle:"solid",style:{marginTop:"25px"}},k.default.createElement(r.default.Button,{value:1},"1\u4e2a\u6708"),k.default.createElement(r.default.Button,{value:3},"3\u4e2a\u6708"),k.default.createElement(r.default.Button,{value:6},"6\u4e2a\u6708"),k.default.createElement(r.default.Button,{value:9},"9\u4e2a\u6708"),k.default.createElement(r.default.Button,{value:12},"1\u5e74")))):null));return k.default.createElement(o.default,{style:{background:"#ffffff"},tabs:a,onChange:l.onTabsChange,defaultActiveKey:V,activeKey:i,renderTabBar:l.renderTabBar},t)},l.toLink=function(e){window.location.href=e},l.onWhiteList=function(){var e=l.props.match.params.id;window.location.href="../whitelist/".concat(e)},l.onSubmit=function(){var e=l.props.match.params.id,t=l.state,a=t.selectedPackage,n=t.selectedVoicePackage,c=t.count,d=t.voiceCount;if(a&&a.id)if(n&&n.id){var r=l.props.dispatch,u=localStorage.getItem(B)||"";R("\u8ba2\u8d2d\u5957\u9910","\u786e\u5b9a\u8ba2\u8d2d\u3010".concat(a.pName,"\u3011\u4e0e\u3010").concat(n.pName,"\u3011\u5957\u9910\u5417\uff1f"),[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(){i.default.loading("\u8ba2\u8d2d\u4e2d..."),r({type:"renewmodel/renewvoice",payload:{cNo:e,basePkg:{pkgNo:a.id,count:c},voicePkg:{pkgNo:n.id,count:d},mobile:u}}).then(function(){i.default.hide()})}}])}else i.default.info("\u8bf7\u9009\u62e9\u8bed\u97f3\u5957\u9910\uff01",1,null,!1);else i.default.info("\u8bf7\u9009\u62e9\u6d41\u91cf\u5957\u9910\uff01",1,null,!1)},l.state={selectedPackage:null,selectedVoicePackage:null,qrCode:null,business:!1,count:1,voiceCount:1,currentTabKey:V},l}return(0,m.default)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=localStorage.getItem(B);e||(window.location.href="/renew/voice/signup");var t=this.props.match.params.id;t&&this.onSearch(t)}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"renewmodel/clearRenew"})}},{key:"render",value:function(){var e=this.props,t=e.cardInfo,a=e.voicePackages,l=e.ordered,r=this.state,o=r.selectedPackage,i=r.selectedVoicePackage,s=r.qrCode,m=r.count,p=r.voiceCount,v=r.currentTabKey,g={pName:"-",pType:"-",renewPrice:"-",pPeriod:"-",note:"",count:1};v===O&&i&&i.pPeriod&&(g=i,g.count=p),v===V&&o&&o.pPeriod&&(g=o,g.count=m);var E="";o&&i&&(E="".concat((0,T.default)((o.renewPrice||0)*m+(i.renewPrice||0)*p).format("0,0.00"),"\u5143,"));var h=t&&t.pkgNo&&t.voicePkgNo&&l;return k.default.createElement("div",{style:{height:"100%"}},h?k.default.createElement("div",null,k.default.createElement(w.StickyContainer,null,k.default.createElement("div",{className:S.default.header},k.default.createElement("div",{className:S.default.flexcontainer},k.default.createElement("div",null,k.default.createElement(d.default,{className:S.default.felxBg,style:{paddingLeft:20,paddingTop:30}},k.default.createElement(d.default.Item,{className:S.default.felxSpan},k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("span",{className:S.default.cardHeaderTitle},"\u5361\u53f7\uff1a"),k.default.createElement("span",{className:S.default.flexSpan},t.msisdn||"-")),k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("span",{className:S.default.cardHeaderTitle},"ICCID\uff1a"),k.default.createElement("span",{className:S.default.flexSpan},t.iccid||"-")),k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("span",{className:S.default.cardHeaderTitle},"IMSI\uff1a"),k.default.createElement("span",{className:S.default.flexSpan},t.imsi||"-"))))),k.default.createElement("div",{style:{borderTop:"2px solid #F5F5F9"}},k.default.createElement(d.default,{className:S.default.felxBg,style:{paddingLeft:20,paddingTop:30}},k.default.createElement(d.default.Item,{className:S.default.felxSpan},k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("span",{className:S.default.cardHeaderTitle,style:{color:"#EF7C6A",fontWeight:"bolder",fontSize:15}},"\u5df2\u8d2d\u5957\u9910\uff1a"))))),k.default.createElement("div",null,k.default.createElement(d.default,{style:{minHeight:60,alignItems:"normal"}},k.default.createElement(d.default.Item,{className:S.default.felxSpan},k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("div",{className:S.default.placeholderActive},k.default.createElement(c.default,{type:"wifi",style:{color:"#EF7C6A",paddingRight:5}}),t.packageName))),k.default.createElement(d.default.Item,{className:S.default.felxSpan},k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("div",{className:S.default.placeholderActive},k.default.createElement(c.default,{type:"phone",style:{color:"#EF7C6A",paddingRight:5}}),t.voicePkgName))))))),k.default.createElement("div",{className:S.default.paybottom},k.default.createElement(u.default,null,k.default.createElement(f.default,{span:24,className:2===t.oType?S.default.paybtnlt:S.default.paybtnyd,onClick:this.onWhiteList},"\u767d\u540d\u5355\u7ba1\u7406"))))):k.default.createElement("div",{style:{height:"100%"}},s?k.default.createElement(k.Fragment,null,this.toLink(s)):k.default.createElement("div",{style:{height:"100%"}},k.default.createElement("div",{className:S.default.header},k.default.createElement("div",{className:S.default.flexcontainer},k.default.createElement("div",{style:{borderBottom:"2px solid #F5F5F9"}},k.default.createElement(d.default,{className:S.default.felxBg,style:{paddingLeft:20}},k.default.createElement(d.default.Item,{className:S.default.felxSpan},k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("span",{className:S.default.cardHeaderTitle},"\u5957\u9910\u8d44\u8d39\uff1a"),k.default.createElement("span",{className:S.default.flexSpan},"-"!==g.renewPrice?"".concat((0,T.default)(g.renewPrice).format("0,0.00")):"-","\u5143"))),k.default.createElement(d.default.Item,{className:S.default.felxSpan},k.default.createElement("div",{className:S.default.felxItem},k.default.createElement("span",{className:S.default.cardHeaderTitle},"\u5957\u9910\u5468\u671f\uff1a"),k.default.createElement("span",{className:S.default.flexSpan},g&&g.pPeriod?(parseInt(g.pPeriod,10)||0)*g.count:"-","\u4e2a\u6708"))))))),k.default.createElement("div",{style:{paddingTop:80,height:"100%"}},k.default.createElement(w.StickyContainer,null,this.initalTab(a))),k.default.createElement("div",{className:S.default.paybottom},o?k.default.createElement(n.default,{style:{textAlign:"left"},icon:null},"\u9009\u8d2d\u6d41\u91cf\u5957\u9910\uff1a","".concat(o.pName,",\u6570\u91cf=").concat(m)):null,i?k.default.createElement(n.default,{style:{textAlign:"left"},icon:null},"\u9009\u8d2d\u8bed\u97f3\u5957\u9910\uff1a","".concat(i.pName,",\u6570\u91cf=").concat(p)):null,k.default.createElement(u.default,null,k.default.createElement(f.default,{span:12,className:S.default.paybottomtip},k.default.createElement("div",{className:S.default.paybottomlefttop},t.msisdn||"-"),k.default.createElement("div",{className:S.default.voicebottomleft},"ICCID\uff1a",t.iccid||"-"),k.default.createElement("div",{className:S.default.voicebottomleft},"IMSI\uff1a",t.imsi||"-")),k.default.createElement(f.default,{span:12,className:2===t.oType?S.default.paybtnlt:S.default.paybtnyd,onClick:this.onSubmit},E,"\u7acb\u5373\u4ed8\u6b3e"))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.renewVoiceData,l=t.qrCode;return a&&l!==a?{qrCode:a}:null}}]),a}(k.Component))||N),K=H;t.default=K}}]);