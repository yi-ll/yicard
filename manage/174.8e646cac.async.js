(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[174],{oZhN:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var r=l(a("/wGt"));a("OaEy");var d=l(a("2fM7"));a("iQDF");var o=l(a("+eQT"));a("5NDa");var u=l(a("5rEg"));a("14J3");var i=l(a("BMrR"));a("jCWc");var s=l(a("kPKH"));a("+BJd");var c=l(a("mr32"));a("qVdP");var f=l(a("jsC+"));a("lUTK");var m=l(a("BvKs"));a("miYZ");var p=l(a("tsqr"));a("+L6B");var h=l(a("2/Rp"));a("5Dmo");var g=l(a("3S7+"));a("Pwec");var y=l(a("CtXQ")),v=l(a("lwsE")),E=l(a("W8MJ")),C=l(a("a1gu")),S=l(a("Nsbk")),w=l(a("7W2i")),k=l(a("MVZn"));a("y8nQ");var x=l(a("Vl3Y"));a("2qtc");var O,b,I,T,D,N=l(a("kLXV")),M=n(a("q1tI")),U=a("MuoO"),F=l(a("EUZL")),Y=l(a("ZhIB")),z=l(a("HZnN")),P=l(a("KLZ9")),R=l(a("ufQ4")),B=l(a("YYr7")),q=l(a("Qpvk")),H=N.default.confirm,L=x.default.Item,V=(O=x.default.create(),b=(0,U.connect)(function(e){var t=e.entConfig,a=e.user,l=e.payOrderModel,n=e.loading;return(0,k.default)({entConfigData:t.entConfigData,currentUser:a.currentUser},l,{loading:n.effects["payOrderModel/page"]})}),I=z.default.Secured("/record/payorder"),(0,R.default)(T=O(T=b(T=I((D=function(e){function t(e){var a;return(0,v.default)(this,t),a=(0,C.default)(this,(0,S.default)(t).call(this,e)),a.columns=[{title:"\u5361\u53f7",dataIndex:"msisdn",width:120},{title:"ICCID",dataIndex:"iccid",width:180},{title:"\u5957\u9910\u540d\u79f0",dataIndex:"pName",width:200},{title:"\u5957\u9910\u7c7b\u578b",dataIndex:"pTypeTxt",width:100},{title:"\u652f\u4ed8\u5ba2\u6237",dataIndex:"enterpriseName",width:220},{title:"\u9500\u552e\u5ba2\u6237",dataIndex:"customer",width:220},{title:"\u652f\u4ed8\u65b9\u5f0f",dataIndex:"payTypeStr",width:100},{title:"\u652f\u4ed8\u901a\u9053",dataIndex:"payChannel",width:100,align:"center",render:function(e,t){var l=a.props.entConfigData,n="--";if(e>0){var r="".concat(null===l||void 0===l?void 0:l.resUrl,"/card/pay/").concat(1===e?"alipay":"wx",".png");n=M.default.createElement("img",{title:t.payChannelTxt,style:{width:16},alt:"",src:r})}return n}},{title:"\u652f\u4ed8\u91d1\u989d",dataIndex:"payPrice",width:100,render:function(e){return"\xa5 ".concat((0,Y.default)(e).format("0,0.00"))}},{title:"\u7eed\u8d39\u5ba2\u6237",dataIndex:"priceType",width:100},{title:"\u5957\u9910\u6570\u91cf",dataIndex:"pNum",width:100},{title:"\u652f\u4ed8\u8ba2\u5355",dataIndex:"payOrderNo",width:240},{title:"\u8ba2\u5355\u65f6\u95f4",dataIndex:"oTime",width:160}],a.colOption={title:"\u7b2c\u4e09\u65b9\u7eed\u8d39",align:"right",width:150,render:function(e,t){return M.default.createElement(M.Fragment,null,t.msisdn&&t.orderNo?M.default.createElement(M.Fragment,null,t.packageUionOrder?M.default.createElement(M.Fragment,null,M.default.createElement("span",{title:t.packageUionOrder.message,style:{color:1===t.packageUionOrder.result?"green":"red"}},2===t.packageUionOrder.result?M.default.createElement(g.default,{title:t.packageUionOrder.message},M.default.createElement(y.default,{type:"question-circle-o"})," "):null,t.packageUionOrder.resultTxt)):null,t.pName&&t.pName.indexOf("TS")<0&&M.default.createElement(h.default,{type:"link",onClick:function(){return a.showDrawer(t)}},"\u67e5\u770b")):"--")}},a.colSettlement=[{title:M.default.createElement("span",null,"\u7ed3\u7b97\u72b6\u6001\xa0",M.default.createElement(g.default,{title:"\u5df2\u51fa\u8d26->\u5df2\u5bf9\u8d26->\u5df2\u7ed3\u7b97"},M.default.createElement(y.default,{type:"question-circle-o"}))),dataIndex:"settlementStateTxt",width:100,render:function(e,t){var a="red";return 1===t.settlementState&&(a="red"),2===t.settlementState&&(a="blue"),3===t.settlementState&&(a="green"),M.default.createElement("span",{style:{color:a}},e)}},{title:"\u7ed3\u7b97\u65f6\u95f4",dataIndex:"settlementTime",width:160}],a.handleStandardTableChange=function(e,t,l){var n=a.props.currentUser,r=a.state,d=r.formValues,o=r.entCode,u=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},i=Object.keys(t).reduce(function(e,a){var l=(0,k.default)({},e);return l[a]=u(t[a]),l},{});a.setState({pageSize:e.pageSize});var s=(0,k.default)({pageIndex:e.current-1,pageSize:e.pageSize,entCode:o||n.entCode},d,i);l.field&&(s.sorter="".concat(l.field,"_").concat(l.order)),a.loadData(s)},a.onSelect=function(e){a.setState({entCode:e[0]});var t=a.state.pageSize,l=a.props.currentUser;a.loadData({pageIndex:0,pageSize:t,entCode:e[0]||l.entCode})},a.loadData=function(e){var t=a.props,l=t.dispatch,n=t.currentUser;l({type:"payOrderModel/page",payload:e});var r=n&&n.entCode&&n.entCode.length>1;r&&a.queryStatistics(e)},a.queryStatistics=function(e){var t=a.props.dispatch;t({type:"payOrderModel/queryStatistics",payload:e})},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.currentUser;t.resetFields(),a.setState({formValues:{}});var n=a.state,r=n.pageSize,d=n.entCode;a.loadData({pageIndex:0,pageSize:r,entCode:d||l.entCode})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.form,n=t.currentUser,r=a.state,d=r.pageSize,o=r.entCode;l.validateFields(function(e,t){if(!e){var l=(0,k.default)({},t,{pageIndex:0,pageSize:d,entCode:o||n.entCode,begin:t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null});a.setState({formValues:t}),a.loadData(l)}})},a.showDrawer=function(e){a.setState({msisdn:e.msisdn,orderNo:e.payOrderNo,visible:!0})},a.onClose=function(){a.setState({msisdn:null,orderNo:null,visible:!1})},a.handleExport=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=t.currentUser,d=a.state,o=d.pageSize,u=d.entCode;n.validateFields(function(e,t){if(!e){a.setState({exporting:!0});var n=(0,k.default)({},t,{pageIndex:0,pageSize:o,entCode:u||r.entCode,begin:t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null,downTask:!0});a.setState({formValues:t}),l({type:"payOrderModel/page",payload:n}).then(function(){a.setState({exporting:!1})})}})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleMenuClick=function(e){var t=a.state.selectedRows;if(0!==t.length){var l=[];if(t.forEach(function(t){1===t.settlementState&&"2"===e.key&&l.push(t.id),2===t.settlementState&&"3"===e.key&&l.push(t.id)}),0!==l.length){var n=a.props.dispatch;H({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u5bf9\u7eed\u8d39\u8bb0\u5f55\u53d8\u66f4\u4e3a\u3010".concat("2"===e.key?"\u5df2\u5bf9\u5e10!":"\u5df2\u7ed3\u7b97","\u3011?"),onOk:function(){n({type:"payOrderModel/doSettlement",payload:{ids:l,state:e.key}})}})}else p.default.error("2"===e.key?"\u6ca1\u6709\u53ef\u4ee5\u5df2\u5bf9\u5e10\u8bb0\u5f55!":"\u6ca1\u6709\u53ef\u4ee5\u5df2\u7ed3\u7b97\u8bb0\u5f55!")}else p.default.error("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.downLoad=function(){var e=a.state.selectedRows;0!==e.length?(a.setState({exporting:!0}),a.exportToFile(e),a.setState({exporting:!1})):p.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.exportToFile=function(e){var t=[];t=e.map(function(e){return{"\u5361\u53f7":e.msisdn,ICCID:e.iccid,"\u5957\u9910\u540d\u79f0":e.pName,"\u5957\u9910\u7c7b\u578b":e.pTypeTxt,"\u652f\u4ed8\u5ba2\u6237":e.enterpriseName,"\u9500\u552e\u5ba2\u6237":e.customer,"\u652f\u4ed8\u65b9\u5f0f":e.payTypeStr,"\u652f\u4ed8\u901a\u9053":e.payChannel>0?1===e.payChannel?"\u652f\u4ed8\u5b9d":"\u5fae\u4fe1":"--","\u652f\u4ed8\u91d1\u989d":e.payPrice.toFixed(3),"\u7eed\u8d39\u5ba2\u6237":e.priceType,"\u5957\u9910\u6570\u91cf":e.pNum,"\u652f\u4ed8\u8ba2\u5355":e.oTime,"\u7ed3\u7b97\u72b6\u6001":e.settlementStateTxt,"\u7ed3\u7b97\u65f6\u95f4":e.settlementTime}});var a=F.default.utils.json_to_sheet(t),l=F.default.utils.book_new();F.default.utils.book_append_sheet(l,a,"renewlist"),F.default.writeFile(l,"\u7eed\u8d39\u8bb0\u5f55.xlsx")},a.state={selectEntKey:[],selectedRows:[],formValues:{},pageSize:10,entCode:void 0,exporting:!1,orderNo:null,msisdn:null,visible:!1},a}return(0,w.default)(t,e),(0,E.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.currentUser,l=t.location.pathname;this.setState({entCode:a.entCode});var n=z.default.CheckPermissions([l,"showUionOrder"],!0,!1),r=z.default.CheckPermissions([l,"settlementOperation"],!0,!1),d=this.columns.length;r&&(this.colSettlement.map(function(t,a){return e.columns.splice(d+a,0,t)}),d+=2),n&&this.columns.splice(d+1,0,this.colOption)}},{key:"defalutParams",value:function(e){var t=this.state,a=t.formValues,l=t.pageSize,n=t.selectEntKey,r={entCode:e?e[0]:n[0],KeyWord:a.name,PageSize:l,Page:0};return r}},{key:"renderOperator",value:function(){var e=this.state.exporting,t=this.props.location.pathname,a=M.default.createElement(m.default,{onClick:this.handleMenuClick},M.default.createElement(m.default.Item,{key:"2"},M.default.createElement(y.default,{type:"interaction"}),"\u5df2\u5bf9\u5e10"),M.default.createElement(m.default.Item,{key:"3"},M.default.createElement(y.default,{type:"red-envelope"}),"\u5df2\u7ed3\u7b97")),l=z.default.CheckPermissions([t,"settlementOperation"],!0,!1);return M.default.createElement(M.Fragment,null,M.default.createElement(h.default,{onClick:this.downLoad,icon:"download"},"\u6279\u91cf\u5bfc\u51fa"),M.default.createElement(h.default,{style:{marginLeft:8},type:"primary",icon:"file-excel",loading:e,onClick:this.handleExport},"\u5bfc\u51fa\u5168\u90e8"),l&&M.default.createElement(M.Fragment,null,M.default.createElement(f.default,{overlay:a},M.default.createElement(h.default,null,M.default.createElement(y.default,{type:"money-collect"}),"\u7ed3\u7b97\u64cd\u4f5c")),M.default.createElement(c.default,{style:{marginLeft:8},color:"red"},"\u8bf4\u660e\uff1a\u4ec5\u652f\u4ed8\u5ba2\u6237\u53ca\u5176\u4e0a\u7ea7\u5ba2\u6237\u6709\u6743\u7ed3\u7b97\u64cd\u4f5c")))}},{key:"renderSimpleForm",value:function(){var e,t,a,l=this.props,n=l.form.getFieldDecorator,r=l.statisticsData,f=l.currentUser,m=f&&f.entCode&&f.entCode.length>1;return M.default.createElement("div",{style:{marginLeft:10,paddingBottom:10}},m&&M.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:"10px"}},M.default.createElement(s.default,{md:8,sm:24,lg:24,xl:48},M.default.createElement(c.default,{color:"cyan"},"\u5361\u603b\u6570\uff1a",null!==(e=null===r||void 0===r?void 0:r.total)&&void 0!==e?e:0),M.default.createElement(c.default,{color:"green"},"\u5957\u9910\u6570\uff1a",null!==(t=null===r||void 0===r?void 0:r.pNum)&&void 0!==t?t:0),M.default.createElement(c.default,{color:"magenta"},"\u652f\u4ed8\u989d\uff1a","\xa5".concat((0,Y.default)(null!==(a=null===r||void 0===r?void 0:r.payPrice)&&void 0!==a?a:0).format("0,0.00"))))),M.default.createElement(x.default,{onSubmit:this.handleSearch,layout:"inline"},M.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u5361\u53f7"},n("msisdn")(M.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u5361\u53f7",allowClear:!0})))),M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u5957\u9910\u540d\u79f0"},n("pName")(M.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u540d\u79f0",allowClear:!0})))),M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u652f\u4ed8\u5ba2\u6237"},n("entName")(M.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u652f\u4ed8\u5ba2\u6237",allowClear:!0}))))),M.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u8ba2\u5355\u53f7"},n("payOrderNo")(M.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u8ba2\u5355\u53f7",allowClear:!0})))),M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u8ba2\u5355\u5f00\u59cb"},n("begin")(M.default.createElement(o.default,{showTime:!0,placeholder:"\u5f00\u59cb\u65f6\u95f4"})))),M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u8ba2\u5355\u622a\u6b62"},n("end")(M.default.createElement(o.default,{showTime:!0,placeholder:"\u622a\u6b62\u65f6\u95f4"}))))),M.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u652f\u4ed8\u65b9\u5f0f"},n("payType")(M.default.createElement(d.default,{style:{width:180},allowClear:!0,placeholder:"\u8bf7\u9009\u62e9\u652f\u4ed8\u65b9\u5f0f"},M.default.createElement(d.default.Option,{key:1,value:1},"\u5728\u7ebf\u652f\u4ed8"),M.default.createElement(d.default.Option,{key:2,value:2},"\u94f6\u884c\u8f6c\u8d26"),M.default.createElement(d.default.Option,{key:3,value:3},"\u8d26\u6237\u6263\u8d39"),M.default.createElement(d.default.Option,{key:4,value:4},"\u8d26\u6237\u900f\u652f"))))),M.default.createElement(s.default,{md:8,sm:24},M.default.createElement(L,{label:"\u7ed3\u7b97\u72b6\u6001"},n("settlementState")(M.default.createElement(d.default,{style:{width:180},allowClear:!0,placeholder:"\u8bf7\u9009\u62e9\u7ed3\u7b97\u72b6\u6001"},M.default.createElement(d.default.Option,{key:0,value:0},"\u672a\u7ed3\u7b97"),M.default.createElement(d.default.Option,{key:1,value:1},"\u5df2\u51fa\u5e10"),M.default.createElement(d.default.Option,{key:2,value:2},"\u5df2\u5bf9\u5e10"),M.default.createElement(d.default.Option,{key:3,value:3},"\u5df2\u7ed3\u7b97"))))),M.default.createElement(s.default,{md:8,sm:24},M.default.createElement("span",{className:B.default.submitButtons},M.default.createElement(h.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),M.default.createElement(h.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))),M.default.createElement(s.default,{md:8,sm:24}))))}},{key:"render",value:function(){var e=this.props,t=e.pageData,a=e.loading,l=e.currentUser,n=this.state,d=n.selectedRows,o=n.msisdn,u=n.orderNo,i=n.visible,s={onSelect:this.onSelect,defaultSelectedKeys:[l.entCode]},c={scrollX:1e3,columns:this.columns,selectedRows:d,data:t,onChange:this.handleStandardTableChange,onSelectRow:this.handleSelectRows,checkBox:!0,loading:a,size:"small"};return M.default.createElement(M.default.Fragment,null,M.default.createElement(P.default,{entpriseInit:s,SearchForm:this.renderSimpleForm(),tableInit:c,Operator:this.renderOperator()}),M.default.createElement(r.default,{title:"\u7b2c\u4e09\u65b9\u7eed\u8d39\u8be6\u60c5",width:"70%",onClose:this.onClose,visible:i,destroyOnClose:!0},M.default.createElement(q.default,{msisdn:o,orderNo:u})))}}]),t}(M.Component),T=D))||T)||T)||T)||T),K=V;t.default=K}}]);