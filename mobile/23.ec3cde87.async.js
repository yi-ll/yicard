(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{hFKe:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("R9oj");var l=n(a("ECub"));a("KklG");var r=n(a("Zrtv"));a("QE6f");var o=n(a("Xo8F"));a("5NDa");var i=n(a("5rEg"));a("Pwec");var c=n(a("CtXQ"));a("1Cgs");var f=n(a("zvbH"));a("Telt");var u=n(a("Tckk"));a("mw1O");var d=n(a("nJCp"));a("ufv1");var s=n(a("QYgq"));a("tLCQ");var p=n(a("XYLF"));a("+L6B");var g=n(a("2/Rp"));a("HVTF");var h=n(a("OT5E")),m=n(a("2Taf")),v=n(a("vZ4D")),y=n(a("rlhR")),w=n(a("MhPg")),E=n(a("l4Ni")),C=n(a("ujKo")),k=n(a("p0pE"));a("e3Tq");var S,b,I=n(a("n+tp")),x=D(a("q1tI")),R=a("MuoO"),M=a("jYtE"),O=n(a("5+h1"));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(j=function(e){return e?a:t})(e)}function D(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=j(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}function L(e){var t=P();return function(){var a,n=(0,C.default)(e);if(t){var l=(0,C.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,E.default)(this,a)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var T="fjvoicephone",B=I.default.Item,N=(S=(0,R.connect)(function(e){var t=e.renewmodel,a=e.loading;return(0,k.default)({},t,{checking:a.effects["cardinfocfg/checkVoiceCard"],loading:a.effects["cardinfocfg/getVoiceCard"]})}),S(b=function(e){(0,w.default)(a,e);var t=L(a);function a(e){var n;return(0,m.default)(this,a),n=t.call(this,e),n.onChange=function(e){n.setState({value:e.target.value})},n.onQueryClick=function(e){window.location.href="/renew/".concat(e)},n.onWhiteListClick=function(e){window.location.href="/renew/voice/whitelist/".concat(e)},n.onClick=function(){var e=n.state.value;n.onSubmit(e)},n.onSubmit=function(e){if(!e||e.length<11)h.default.fail("\u8bf7\u8f93\u5165\u5361\u53f7",1,null,!1);else{var t=localStorage.getItem(T),a=n.props.dispatch,l=(0,y.default)(n);h.default.loading("\u6570\u636e\u63d0\u4ea4\u4e2d..."),a({type:"renewmodel/checkVoiceCard",payload:{mobile:t,msisdn:e}}).then(function(){h.default.hide();var e=n.props.checkVoiceCardResult;e&&l.loadData(0,!0)})}},n.onRefresh=function(){var e=n.state,t=e.pages,a=e.pageIndex;a+1<t?(n.setState({refreshing:!0}),n.loadData(a+1,!1)):h.default.info("\u5df2\u52a0\u8f7d\u5168\u90e8\u6570\u636e!!!",1)},n.loadData=function(e,t){var a=localStorage.getItem(T),l=n.props.dispatch,r=n.state,o=r.pageSize,i=r.datas;h.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),l({type:"renewmodel/getVoiceCard",payload:{mobile:a,pageIndex:e,pageSize:o}}).then(function(){var a=n.props.voiceCards;a&&(n.setState({pageIndex:e}),a.pagination&&a.pagination.total&&n.setState({pages:parseInt((a.pagination.total+o-1)/o,10)}),a.list&&(t||n.setState({refreshing:!1}),t?n.setState({datas:a.list}):n.setState({datas:i.concat(a.list)}))),h.default.hide()})},n.onScan=function(){(0,M.getQrCode)().then(function(e){e&&(n.setState({value:e}),n.onSubmit(e))})},n.handleMessage=function(e){if(!e)return null;var t=e.map(function(e){return x.default.createElement(d.default,{size:"lg",key:e.id},x.default.createElement(p.default,{className:O.default.voiceCard},x.default.createElement(p.default.Body,null,x.default.createElement("div",{style:{display:"flex",padding:"15px 0"}},x.default.createElement("img",{style:{backgroundColor:"#fff",borderRadius:50,height:"64px",marginRight:"15px"},src:"https://res.yi-ll.com/card/images/yd.png",alt:""}),x.default.createElement("div",{style:{lineHeight:1}},x.default.createElement("div",{className:O.default.msisdn,style:{marginBottom:"8px",color:"#ffffff",fontWeight:"bold"}},e.msisdn),x.default.createElement("div",null,x.default.createElement("span",{style:{fontSize:"30px"}},x.default.createElement(g.default,{type:"ghost",style:{color:"#ffffff"},onClick:function(){return n.onQueryClick(e.msisdn)},icon:"snippets"},"\u8be6\u60c5")),x.default.createElement(g.default,{type:"ghost",style:{color:"#ffffff",marginLeft:"30px"},onClick:function(){return n.onWhiteListClick(e.msisdn)},icon:"idcard"},"\u767d\u540d\u5355")))))),x.default.createElement(s.default,{size:"lg"}))});return t},n.state={value:null,refreshing:!1,down:!1,height:document.documentElement.clientHeight,datas:[],pageIndex:0,pages:1,pageSize:2},n}return(0,v.default)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=localStorage.getItem(T);e||(window.location.href="/renew/voice/signup");var t=window.location.href;(0,M.qrCodeLoader)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/getwxconfig?url=").concat(t)),this.loadData(0,!0)}},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.datas,d=t.height,s=t.down,p=t.refreshing,h=this.props.checking;return x.default.createElement("div",{className:O.default.renewbg},x.default.createElement(f.default,{mode:"dark",icon:x.default.createElement(u.default,{src:"https://res.yi-ll.com/card/favicon.png"})},"\u767d\u540d\u5355\u7ba1\u7406\u670d\u52a1"),x.default.createElement(B,{align:"middle",style:{marginTop:10,background:"#F5F5F9"}},x.default.createElement(o.default,null,x.default.createElement(o.default.Item,{className:O.default.felxVoiceBindImg},x.default.createElement(i.default,{maxLength:21,addonAfter:x.default.createElement(c.default,{onClick:this.onScan,type:"scan",style:{color:"green"}}),placeholder:"\u8bf7\u8f93\u5165SIM/ICCID",allowClear:!0,value:a,onChange:this.onChange}),x.default.createElement(g.default,{loading:h,onClick:this.onClick,style:{marginLeft:15},icon:"shop"},"\u7ed1\u5b9a")))),x.default.createElement("div",{className:O.default.voiceBindList},x.default.createElement("div",{style:{textAlign:"center",color:"gray",marginBottom:5}},"\u4e0a\u62c9\u53ef\u4ee5\u5237\u65b0"),n&&n.length>0?x.default.createElement(r.default,{damping:60,ref:function(t){return e.ptr=t},style:{height:d||1,overflow:"auto"},indicator:s?{deactivate:"\u4e0a\u62c9\u53ef\u4ee5\u5237\u65b0"}:{},direction:s?"down":"up",refreshing:p,onRefresh:this.onRefresh},this.handleMessage(n)):x.default.createElement(l.default,{image:l.default.PRESENTED_IMAGE_SIMPLE})))}}]),a}(x.Component))||b),z=N;t.default=z}}]);