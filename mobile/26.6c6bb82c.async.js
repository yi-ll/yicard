(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"bP9/":function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("XGli");var f=l(a("NHyu"));a("0mAl");var d=l(a("Ng4X"));a("ufv1");var r=l(a("QYgq"));a("Pwec");var c=l(a("CtXQ"));a("QE6f");var u=l(a("Xo8F"));a("HVTF");var o=l(a("OT5E")),s=l(a("lwsE")),i=l(a("W8MJ")),m=l(a("a1gu")),p=l(a("Nsbk")),E=l(a("7W2i")),w=l(a("MVZn"));a("e3Tq");var F,N,g=l(a("n+tp")),h=n(a("q1tI")),x=a("MuoO"),v=l(a("q2qD")),y=l(a("54rv")),P=l(a("1GfE")),k=l(a("HF/w")),I=l(a("UsAz")),T=l(a("Jwi+")),C=l(a("5+h1"));a("lIpO");var S=g.default.Item,b=(F=(0,x.connect)(function(e){var t=e.renewmodel,a=e.loading;return(0,w.default)({},t,{querying:a.effects["renewmodel/get"]})}),F(N=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,m.default)(this,(0,p.default)(t).call(this,e)),a.onSearch=function(){var e=a.props.match.params.id;if(e){a.setState({msisdn:e});var t=a.props.dispatch;if(e){if(e.length<11||e.length>30||!new RegExp("^[A-Za-z0-9]+$").test(e))return void o.default.info("\u8bf7\u8f93\u516511\u81f330\u4f4d\u7684\u6570\u5b57\u3001\u5b57\u6bcd",5,null,!1);o.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),t({type:"renewmodel/get",payload:{cNo:e}}).then(function(){o.default.hide();var l=a.props.cardInfo;l&&l.city&&l.city.indexOf("59")>-1&&t({type:"renewmodel/checkordered",payload:{msisdn:e}})})}}},a.onClick=function(e,t){var l=a.state.msisdn;if(!l||l.length<11)o.default.fail("\u8bf7\u8f93\u5165SIM/IMSI/ICCID",1,null,!1);else switch(e){case"history":window.location.href="../renew/history/".concat(l);break;case"renew":window.location.href="../renew/packagelist/".concat(l);break;case"auth":window.location.href="../renew/auth/".concat(t);break;default:window.location.href="../list/".concat(l);break}},a.getImg=function(e){return 3===e?P.default:2===e?y.default:v.default},a.renderFlow=function(){var e=a.props.cardInfo,t=0;return e&&e.uPFlow&&e.tPFlow&&(t=e.uPFlow/e.tPFlow*100),h.default.createElement("div",{className:C.default.flexcontainer},h.default.createElement(u.default,{className:2===e.oType?C.default.flowPanelBg_lt:C.default.flowPanelBg},h.default.createElement(u.default.Item,{className:C.default.felxImg},h.default.createElement(T.default,{className:C.default.CircularProgressbar,percentage:t,text:"\u5df2\u7528".concat(e.uPFlow?e.uPFlow:0,"M"),background:!0,backgroundPadding:6,styles:{background:{fill:2===e.oType?"#F59F56":"#618dd2"},text:{fill:"#eee",fontSize:"12px"},path:{stroke:"#ff0"},trail:{stroke:"transparent"}}})),h.default.createElement(u.default.Item,{className:C.default.felxSpan},h.default.createElement("div",{className:C.default.felxItem},h.default.createElement(c.default,{type:"wifi",style:{color:"#FFFFFF"}}),h.default.createElement("span",{className:C.default.flowPanelTitle},"\u603b\u6d41\u91cf\uff1a"),h.default.createElement("span",{className:C.default.flowPanelContent},e.tPFlow?e.tPFlow:0,"M")),h.default.createElement("div",{className:C.default.felxItem},h.default.createElement(c.default,{type:"wifi",style:{color:"#FFFFFF"}}),h.default.createElement("span",{className:C.default.flowPanelTitle},"\u5269\u4f59\u6d41\u91cf\uff1a"),h.default.createElement("span",{className:C.default.flowPanelContent},((e.tPFlow||0)-(e.uPFlow||0)).toFixed(3),"M")))))},a.renderVoice=function(){var e=a.props.cardInfo,t=0;return e&&e.uPVoice&&e.tPVoice&&(t=e.uPVoice/e.tPVoice*100),h.default.createElement("div",{className:C.default.flexcontainer},h.default.createElement(u.default,{className:2===e.oType?C.default.flowPanelBg_lt:C.default.flowPanelBg},h.default.createElement(u.default.Item,{className:C.default.felxImg},h.default.createElement(T.default,{className:C.default.CircularProgressbar,percentage:t,text:"\u5df2\u7528".concat(e.uPVoice?e.uPVoice:0,"\u5206\u949f"),background:!0,backgroundPadding:6,styles:{background:{fill:2===e.oType?"#F59F56":"#618dd2"},text:{fill:"#eee",fontSize:"12px"},path:{stroke:"#ff0"},trail:{stroke:"transparent"}}})),h.default.createElement(u.default.Item,{className:C.default.felxSpan},h.default.createElement("div",{className:C.default.felxItem},h.default.createElement(c.default,{type:"phone",style:{color:"#FFFFFF"}}),h.default.createElement("span",{className:C.default.flowPanelTitle},"\u603b\u8bed\u97f3\uff1a"),h.default.createElement("span",{className:C.default.flowPanelContent},e.tPVoice||0,"\u5206\u949f")),h.default.createElement("div",{className:C.default.felxItem},h.default.createElement(c.default,{type:"phone",style:{color:"#FFFFFF"}}),h.default.createElement("span",{className:C.default.flowPanelTitle},"\u5269\u4f59\u8bed\u97f3\uff1a"),h.default.createElement("span",{className:C.default.flowPanelContent},(e.tPVoice||0)-(e.uPVoice||0),"\u5206\u949f")))))},a.state={msisdn:null},a}return(0,E.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.onSearch()}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"renewmodel/clearRenew"})}},{key:"render",value:function(){var e=this,t=this.props.cardInfo,a=t.statusTxt||"--",l=t.opStateTxt||"--";return t&&4860===t.bNo&&1===t.closed&&t.uPFlow>=t.tPFlow&&(a="\u6b20\u8d39\u6ce8\u9500"),t&&1===t.opState&&(l="\u65e0"),h.default.createElement("div",null,h.default.createElement("div",{className:C.default.header},h.default.createElement("div",{className:C.default.flexcontainer},h.default.createElement(u.default,{className:C.default.felxBg},h.default.createElement(u.default.Item,{className:C.default.felxImg},h.default.createElement("img",{src:this.getImg(t.oType),alt:"",className:C.default.imgWidth})),h.default.createElement(u.default.Item,{className:C.default.felxSpan},h.default.createElement("div",{className:C.default.felxItem},h.default.createElement("span",{className:C.default.cardHeaderTitle},"SIM\u5361\uff1a"),h.default.createElement("span",{className:C.default.flexSpan},t.msisdn)),h.default.createElement("div",{className:C.default.felxItem},h.default.createElement("span",{className:C.default.cardHeaderTitle},"\u5361\u72b6\u6001\uff1a"),h.default.createElement("span",{className:C.default.flexSpan},a,h.default.createElement(c.default,{type:"reload",size:"lg",style:{marginLeft:10,color:"#0182CD"},onClick:function(){return e.onSearch()}}))),h.default.createElement("div",{className:C.default.felxItem},h.default.createElement("span",{className:C.default.cardHeaderTitle},"\u64cd\u4f5c\u72b6\u6001\uff1a"),h.default.createElement("span",{className:C.default.flexSpan},l)))),h.default.createElement(r.default,{size:"lg"}))),h.default.createElement("div",{className:C.default.container},t&&t.voicePkgNo?h.default.createElement(d.default,{autoplay:!1,infinite:!0,dotActiveStyle:{backgroundColor:"#FFFF00"},dotStyle:{backgroundColor:"#FFFFFF"}},this.renderFlow(),this.renderVoice()):this.renderFlow(),h.default.createElement(g.default,{className:C.default.amlistextra},h.default.createElement(S,{extra:t.effDateTxt&&t.invDateTxt?"".concat(t.effDateTxt,"\u81f3").concat(t.invDateTxt):"--"},"\u670d\u52a1\u671f\uff1a"),h.default.createElement(S,{extra:"".concat(t.tPSms||0-(t.uPSms||0),"\u6761")},"\u5269\u4f59\u77ed\u4fe1\uff1a"),h.default.createElement(S,{extra:t.packageName||"--"},"\u4e3b\u5957\u9910\uff1a"),t.voicePkgName?h.default.createElement(S,{extra:t.voicePkgName||"--"},"\u8bed\u97f3\u5957\u9910\uff1a"):null,h.default.createElement(S,{extra:t.aDateTxt||"--"},"\u6fc0\u6d3b\u65e5\u671f\uff1a"),h.default.createElement(S,{extra:t.wStatTxte||"--"},"\u8bbe\u5907\u72b6\u6001\uff1a"),h.default.createElement(S,{extra:t.iccid},"ICCID\uff1a"),h.default.createElement(S,{extra:t.imsi},"IMSI\uff1a")),h.default.createElement(g.default,{renderHeader:function(){return"\u5386\u53f2\u6570\u636e"}},h.default.createElement(S,{thumb:k.default,arrow:"horizontal",onClick:function(){return e.onClick("history")}},h.default.createElement("span",{style:{fontSize:"14px"}},"\u8fd17\u65e5\u5185\u8fde\u63a5\u8bb0\u5f55(\u4e0d\u5305\u542b\u5f53\u65e5)")),h.default.createElement(S,{thumb:I.default,arrow:"horizontal",onClick:function(){return e.onClick("renew")}},h.default.createElement("span",{style:{fontSize:"14px"}},"\u7eed\u8d39\u8bb0\u5f55")),h.default.createElement(S,{thumb:I.default,arrow:"horizontal",onClick:function(){return e.onClick("auth",t.oType)}},h.default.createElement("span",{style:{fontSize:"14px"}},"\u5b9e\u540d\u8ba4\u8bc1"))),t.contacts?h.default.createElement(S,{align:"middle"},h.default.createElement(u.default,{className:C.default.flexcontainer},h.default.createElement(u.default.Item,{className:C.default.left},"\u670d\u52a1\u5546\uff1a"),h.default.createElement(u.default.Item,{className:C.default.right},t.contacts)),h.default.createElement(u.default,{className:C.default.flexcontainer},h.default.createElement(u.default.Item,{className:C.default.left},"\u670d\u52a1\u7535\u8bdd\uff1a"),h.default.createElement(u.default.Item,{className:C.default.right},t.tel))):null),h.default.createElement("div",{className:C.default.bottom},h.default.createElement(f.default,{style:{backgroundColor:2===t.oType?"#F17103":""},type:"primary",onClick:function(){return e.onClick("pay")}},"\u5145\u503c\u7eed\u8d39")))}}]),t}(h.Component))||N),V=b;t.default=V}}]);