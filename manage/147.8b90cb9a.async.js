(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[147],{XxHG:function(e,t,l){"use strict";var a=l("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("IzEo");var n=a(l("bx4M"));l("+L6B");var o=a(l("2/Rp"));l("+BJd");var r=a(l("mr32"));l("miYZ");var u=a(l("tsqr")),d=a(l("2Taf")),c=a(l("vZ4D")),f=a(l("MhPg")),i=a(l("l4Ni")),s=a(l("ujKo"));l("Znn+");var m,p,y=a(l("ZTPi")),E=N(l("q1tI")),h=l("MuoO"),k=a(l("zHco")),b=a(l("ufQ4")),v=a(l("/KDg")),g=a(l("Ccfq")),C=a(l("/Jys")),x=a(l("sGao")),I=a(l("LUqK")),P=a(l("pxT5")),w=a(l("UiA6")),O=a(l("umRe")),R=a(l("ioW3")),T=a(l("hhsJ")),D=a(l("sgoz")),U=a(l("7Cz3")),W=a(l("jT3W")),M=a(l("RACn")),j=a(l("wIJn")),A=a(l("migu")),L=a(l("QF0O")),z=a(l("WqhS")),B=a(l("GIYs")),F=a(l("arKZ")),J=a(l("HMeQ")),Z=a(l("ZWFD")),q=a(l("X8Tn"));function K(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(K=function(e){return e?l:t})(e)}function N(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var l=K(t);if(l&&l.has(e))return l.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=n?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}function _(e){var t=H();return function(){var l,a=(0,s.default)(e);if(t){var n=(0,s.default)(this).constructor;l=Reflect.construct(a,arguments,n)}else l=a.apply(this,arguments);return(0,i.default)(this,l)}}function H(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var G=y.default.TabPane,Q=(m=(0,h.connect)(function(e){var t=e.entConfig,l=e.user,a=e.apimodels,n=e.loading;return{entConfigData:t.entConfigData,currentUser:l.currentUser,token:a.token,loading:n.effects["apimodels/get"]}}),(0,b.default)(p=m(p=function(e){(0,f.default)(l,e);var t=_(l);function l(e){var a;(0,d.default)(this,l),a=t.call(this,e),a.toCopy=function(){var e=a.props.token,t=e;t||(t="");var l=document.createElement("textarea");l.value="".concat(t),l.setAttribute("readonly",""),l.style={position:"absolute",left:"-9999px"},document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l),u.default.info("\u5df2\u7ecf\u6210\u529f\u590d\u5236")},a.toCopyUrl=function(){var e=a.props.entConfigData,t=document.createElement("textarea");t.value="".concat(null===e||void 0===e?void 0:e.apiUrl),t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),u.default.info("\u5df2\u7ecf\u6210\u529f\u590d\u5236")};var n=e.currentUser,o=e.entConfigData;return a.state={host:n&&n.entCode&&n.entCode.length<=4?"".concat(null===o||void 0===o?void 0:o.apiUrl).concat("v1","/"):"http://[host]/".concat("v1","/")},a}return(0,c.default)(l,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"apimodels/get"})}},{key:"renderSimpleForm",value:function(){var e=this.props,t=e.token,l=e.entConfigData,a=t;return a||(a=""),E.default.createElement("div",null,E.default.createElement("ul",null,E.default.createElement("li",null,E.default.createElement("h6",{style:{marginRight:8,display:"inline",fontWeight:"bolder"}},"API\u63a5\u53e3Token:"),E.default.createElement(r.default,{color:"magenta"},a),E.default.createElement(o.default,{type:"danger",size:"small",ghost:!0,onClick:this.toCopy},"\u590d\u5236")),E.default.createElement("li",{style:{marginTop:10}},E.default.createElement("h6",{style:{marginRight:8,display:"inline",fontWeight:"bolder"}},"API\u63a5\u53e3\u5730\u5740:"),E.default.createElement("span",{style:{marginLeft:10}},E.default.createElement(r.default,{color:"blue"},"".concat(null===l||void 0===l?void 0:l.apiUrl)),E.default.createElement(o.default,{type:"danger",size:"small",ghost:!0,onClick:this.toCopyUrl},"\u590d\u5236"))),E.default.createElement("li",{style:{marginTop:10}},E.default.createElement("h6",{style:{marginRight:8,display:"inline",fontWeight:"bolder"}},"API\u63a5\u53e3\u6587\u6863:"),E.default.createElement("a",{style:{marginLeft:10},rel:"noopener noreferrer",target:"_blank",href:"".concat(null===l||void 0===l?void 0:l.resUrl,"/card/api/\u7269\u8054\u7f51\u5361\u7ba1\u7406\u5e73\u53f0\u63a5\u53e3\u5f00\u53d1\u6587\u6863.pdf")},"\u4e0b\u8f7d")),E.default.createElement("li",{style:{marginTop:10}},E.default.createElement("h6",{style:{marginRight:8,display:"inline",fontWeight:"bolder"}},"\u8bf4\u660e:"),E.default.createElement("span",null,"API\u63a5\u53e3Token\uff0c\u957f\u671f\u6709\u6548\uff0c\u56e0\u6b64\u907f\u514d\u6cc4\u9732\u3002\u5982\u9700\u8981\u66f4\u6362\uff0c\u8bf7\u8054\u7cfb\u5ba2\u6237\u7ecf\u7406\u3002"))))}},{key:"render",value:function(){var e=this.state.host,t=this.props.token,l=t;l||(l="");var a=[{title:"\u5b57\u6bb5",dataIndex:"name"},{title:"\u5fc5\u586b",dataIndex:"must"},{title:"\u957f\u5ea6",dataIndex:"len"},{title:"\u4f4d\u7f6e",dataIndex:"postion"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u63cf\u8ff0",dataIndex:"desc"}];return E.default.createElement(k.default,null,E.default.createElement(n.default,{bordered:!1},E.default.createElement("div",{className:v.default.tableList},E.default.createElement("div",{className:v.default.tableListForm},this.renderSimpleForm()))),E.default.createElement(n.default,{bordered:!1},E.default.createElement("div",{className:v.default.tableList,style:{borderBottom:"1px solid #d9d9d9",paddingBottom:"10px"}},E.default.createElement("div",{className:v.default.tableListForm},"\u63a5\u53e3\u8bf4\u660e")),E.default.createElement(y.default,{defaultActiveKey:"1",tabPosition:"left",style:{minHeight:"380px",paddingTop:"10px"}},E.default.createElement(G,{tab:"\u5361\u4fe1\u606f\u67e5\u8be2",key:"1"},E.default.createElement(g.default,{title:"\u5361\u4fe1\u606f\u67e5\u8be2",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u7eed\u8d39",key:"2"},E.default.createElement(C.default,{title:"\u7eed\u8d39",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u53ef\u8ba2\u8d2d\u5957\u9910",key:"3"},E.default.createElement(w.default,{title:"\u53ef\u8ba2\u8d2d\u5957\u9910",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u5df2\u8ba2\u8d2d\u5957\u9910",key:"4"},E.default.createElement(j.default,{title:"\u5df2\u8ba2\u8d2d\u5957\u9910",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u5361\u5217\u8868\u6587\u4ef6",key:"5"},E.default.createElement(x.default,{title:"\u5361\u5217\u8868\u6587\u4ef6",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u5b9a\u4f4d",key:"6"},E.default.createElement(I.default,{title:"\u5b9a\u4f4d",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u77ed\u4fe1",key:"7"},E.default.createElement(P.default,{title:"\u53d1\u9001\u77ed\u4fe1",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u8bed\u97f3\u767d\u540d\u5355",key:"8"},E.default.createElement(O.default,{title:"\u8bed\u97f3\u767d\u540d\u5355",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u673a\u5361\u7ed1\u5b9a",key:"9"},E.default.createElement(R.default,{title:"\u673a\u5361\u7ed1\u5b9a",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u65ad\u7f51\u590d\u7f51",key:"10"},E.default.createElement(T.default,{title:"\u65ad\u7f51\u590d\u7f51",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u72b6\u6001\u53d8\u66f4",key:"11"},E.default.createElement(D.default,{title:"\u72b6\u6001\u53d8\u66f4",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u5b9e\u540d",key:"12"},E.default.createElement(U.default,{title:"\u5b9e\u540d",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u672c\u6708\u5b9e\u65f6\u6d41\u91cf",key:"13"},E.default.createElement(W.default,{title:"\u672c\u6708\u5b9e\u65f6\u6d41\u91cf",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u5b9e\u65f6\u72b6\u6001",key:"14"},E.default.createElement(M.default,{title:"\u5b9e\u65f6\u72b6\u6001",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u524d\u7aef\u7eed\u8d39",key:"15"},E.default.createElement(A.default,{title:"\u524d\u7aef\u7eed\u8d39",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u6d41\u91cf\u6c60",key:"16"},E.default.createElement(L.default,{title:"\u6d41\u91cf\u6c60",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u6fc0\u6d3b",key:"17"},E.default.createElement(z.default,{title:"\u6fc0\u6d3b",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"Imei\u67e5\u8be2",key:"18"},E.default.createElement(B.default,{title:"Imei\u67e5\u8be2",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u4e0a\u7f51\u529f\u80fd",key:"19"},E.default.createElement(F.default,{title:"\u4e0a\u7f51\u529f\u80fd\u67e5\u8be2",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u5728\u7ebf\u4fe1\u606f",key:"20"},E.default.createElement(J.default,{title:"\u5728\u7ebf\u4fe1\u606f\u67e5\u8be2",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u6d4b\u8bd5\u6d41\u91cf",key:"21"},E.default.createElement(Z.default,{title:"\u6d4b\u8bd5\u6d41\u91cf\u67e5\u8be2",host:e,token:l,columns:a})),E.default.createElement(G,{tab:"\u8bbe\u5907\u72b6\u6001",key:"22"},E.default.createElement(q.default,{title:"\u8bbe\u5907\u72b6\u6001\u67e5\u8be2",host:e,token:l,columns:a})))))}}]),l}(E.PureComponent))||p)||p),S=Q;t.default=S}}]);