(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[152],{csov:function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-business\\-biz-sales\\-list\\index-tableList",tableListOperator:"antd-pro\\pages\\-business\\-biz-sales\\-list\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-business\\-biz-sales\\-list\\index-tableListForm",submitButtons:"antd-pro\\pages\\-business\\-biz-sales\\-list\\index-submitButtons"}},hpvC:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("bbsP");var d=l(a("/wGt"));a("14J3");var o=l(a("BMrR"));a("5NDa");var i=l(a("5rEg"));a("jCWc");var s=l(a("kPKH"));a("iQDF");var u=l(a("+eQT"));a("+L6B");var c=l(a("2/Rp"));a("miYZ");var f=l(a("tsqr")),p=l(a("MVZn"));a("2qtc");var m=l(a("kLXV"));a("/zsF");var g=l(a("PArb"));a("T2oS");var h=l(a("W9HT")),b=l(a("lwsE")),E=l(a("W8MJ")),y=l(a("a1gu")),v=l(a("Nsbk")),w=l(a("7W2i"));a("Pwec");var C=l(a("CtXQ"));a("y8nQ");var x,k,z,S,D,I,N=l(a("Vl3Y")),T=n(a("q1tI")),M=a("MuoO"),F=l(a("usdK")),Y=l(a("EUZL")),L=l(a("ufQ4")),R=l(a("HZnN")),O=l(a("KLZ9")),U=l(a("ktxK")),V=l(a("nC3p")),H=l(a("wX7W")),B=l(a("2FF3")),_=l(a("YGR+")),j=l(a("csov")),A=N.default.Item,P=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},W=T.default.createElement(C.default,{type:"loading",style:{fontSize:24},spin:!0}),Q=(x=N.default.create(),k=(0,M.connect)(function(e){var t=e.bizsalecfg,a=e.loading;return{pageData:t.pageData,delData:t.delData,pageLoading:a.effects["bizsalecfg/page"],delLoading:a.effects["bizsalecfg/del"]}}),z=R.default.Secured("/business/bizsales/list"),S=N.default.create(),(0,L.default)(D=x(D=k(D=z(D=S((I=function(e){function t(){var e,a;(0,b.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,y.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(n))),a.state={selectedRows:[],formValues:{},pageIndex:1,pageSize:10,orderNo:null},a.components={canceltransferring:!1,cancel:!1,transferring:!1,edit:!1,detail:!1},a.columns=[{title:"\u9500\u552e\u6279\u6b21\u53f7",dataIndex:"orderNo"},{title:"\u51fa\u5e93\u5ba2\u6237",dataIndex:"outEntName"},{title:"\u5165\u5e93\u5ba2\u6237",dataIndex:"inEntName"},{title:"\u603b\u6570",align:"left",dataIndex:"total",render:function(e){return T.default.createElement("span",null,T.default.createElement(C.default,{type:"smile",theme:"twoTone"})," ",e)}},{title:"\u6210\u529f",align:"left",dataIndex:"success",render:function(e,t){return T.default.createElement("span",null,T.default.createElement(C.default,{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"})," ",0===t.state?"\u5904\u7406\u4e2d":e)}},{title:"\u5931\u8d25",align:"left",dataIndex:"failure",render:function(e,t){return T.default.createElement("span",null,T.default.createElement(C.default,{type:"close-circle",theme:"twoTone",twoToneColor:"#eb2f96"})," ",0===t.state?"\u5904\u7406\u4e2d":e)}},{title:"\u64a4\u9500",align:"left",dataIndex:"cancel",render:function(e,t){return T.default.createElement("span",null,T.default.createElement(C.default,{type:"rest",theme:"twoTone",twoToneColor:"#ff0000"})," ",0===t.state?"\u5904\u7406\u4e2d":e)}},{title:"\u51fa\u5e93\u65f6\u95f4",dataIndex:"oTime"},{title:"\u64cd\u4f5c",align:"center",render:function(e,t){var l=a.props.location.pathname;return 0===t.state?T.default.createElement(h.default,{indicator:W}):T.default.createElement(T.Fragment,null,T.default.createElement(R.default,{authority:[l,"edit"]},T.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("edit",t)}},"\u67e5\u770b")),t.success&&t.success!==t.cancel?T.default.createElement(R.default,{authority:[l,"edit"]},T.default.createElement(g.default,{type:"vertical"}),T.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("cancel",t)}},"\u64a4\u9500")):null,T.default.createElement(R.default,{authority:[l,"detail"]},T.default.createElement(g.default,{type:"vertical"}),T.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("detail",t)}},"\u660e\u7ec6")))}}],a.loadData=function(){var e=a.state,t=e.pageIndex,l=e.pageSize,n=a.props,r=n.dispatch,d=n.currentUser;r({type:"bizsalecfg/page",payload:{pageIndex:t,pageSize:l,entCode:d.entCode}})},a.deleteItem=function(e){var t=a.props,l=t.dispatch,n=t.pageData,r=t.currentUser,d=a.state,o=d.pageSize,i=d.pageIndex,s=i,u=n.list.length;1===u&&i>1&&(s-=1),l({type:"bizsalecfg/del",payload:{id:e.id,pageIndex:s,pageSize:o,entCode:r.entCode}})},a.handleUpdateModalVisible=function(e,t){switch(e){case"del":m.default.confirm({title:"\u5220\u9664\u914d\u7f6e",content:"\u786e\u5b9a\u5220\u9664\u8be5\u914d\u7f6e\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.deleteItem(t)}});break;case"cancel":a.doDrawer(1===t.transferring?"canceltransferring":"cancel",t.orderNo,!0);break;case"edit":a.doDrawer(1===t.transferring?"transferring":"edit",t.orderNo,!0);break;case"detail":a.doDrawer("detail",t.orderNo,!0);break;default:break}},a.doDrawer=function(e,t,l){a.components[e]=l,a.setState({orderNo:t})},a.handleStandardTableChange=function(e,t,l){var n=a.props,r=n.dispatch,d=n.currentUser,o=a.state.formValues,i=Object.keys(t).reduce(function(e,a){var l=(0,p.default)({},e);return l[a]=P(t[a]),l},{});a.setState({pageIndex:e.current}),a.setState({pageSize:e.pageSize});var s=(0,p.default)({pageIndex:e.current,pageSize:e.pageSize,entCode:d.entCode},o,i);l.field&&(s.sorter="".concat(l.field,"_").concat(l.order)),r({type:"bizsalecfg/page",payload:s})},a.handleMenuClick=function(e){var t=a.props.dispatch,l=a.state.selectedRows;if(l)switch(e.key){case"remove":t({type:"bizsalecfg/del",payload:{key:l.map(function(e){return e.key})}});break;default:break}},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleAdd=function(){F.default.push("/business/bizsales/add")},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.dispatch,n=e.currentUser;t.resetFields(),a.setState({formValues:{}});var r=a.state.pageSize;l({type:"bizsalecfg/page",payload:{pageIndex:1,pageSize:r,entCode:n.entCode}})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=t.currentUser,d=a.state.pageSize;n.validateFields(function(e,t){if(!e){var n=(0,p.default)({},t,{pageIndex:1,pageSize:d,entCode:r.entCode,begin:t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null});a.setState({formValues:t}),l({type:"bizsalecfg/page",payload:n})}})},a.handleExport=function(){var e=a.state.selectedRows;if(0!==e.length){var t=a.props,l=t.dispatch,n=t.currentUser,r=a.state,d=r.formValues,o=r.pageSize,i=[];e.map(function(e){return i.push(e.orderNo)});var s=(0,p.default)({},d,{pageIndex:1,pageSize:o,entCode:n.entCode,downTask:!0,orderNo:i});l({type:"bizsalecfg/page",payload:s})}else f.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.handleExport=function(){var e=a.state.selectedRows;0!==e.length?a.exportToFile(e):f.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.exportToFile=function(e){if(e&&0!==e.length){var t=e.map(function(e){return{"\u9500\u552e\u6279\u6b21\u53f7":e.orderNo,"\u51fa\u5e93\u5ba2\u6237":e.outEntName,"\u5165\u5e93\u5ba2\u6237":e.inEntName,"\u603b\u6570":e.total,"\u6210\u529f":e.success,"\u5931\u8d25":e.failure,"\u64a4\u9500":e.cancel,"\u51fa\u5e93\u65f6\u95f4":e.oTime}}),a=Y.default.utils.json_to_sheet(t),l=Y.default.utils.book_new();Y.default.utils.book_append_sheet(l,a,"ws"),Y.default.writeFile(l,"\u51fa\u5e93\u8bb0\u5f55.xlsx")}else f.default.warning("\u65e0\u6570\u636e!")},a.exportAll=function(){var e=a.props,t=e.dispatch,l=e.currentUser,n=a.state,r=n.formValues,d=n.pageSize,o=(0,p.default)({},r,{pageIndex:1,pageSize:d,entCode:l.entCode,begin:r.begin?"".concat(r.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:r.end?"".concat(r.end.format("YYYY-MM-DD HH:mm:ss")):null,downTask:!0,detail:!1});t({type:"bizsalecfg/page",payload:o})},a.renderOperator=function(){var e=a.props.location.pathname;return T.default.createElement(T.Fragment,null,T.default.createElement(R.default,{authority:[e,"add"]},T.default.createElement(c.default,{icon:"plus",type:"primary",onClick:function(){return a.handleAdd()}},"\u65b0\u5efa")),T.default.createElement(c.default,{style:{marginLeft:8},icon:"reload",shape:"circle",onClick:a.loadData}),T.default.createElement(c.default,{style:{marginLeft:8},onClick:a.handleExport,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),T.default.createElement(c.default,{style:{marginLeft:8},type:"primary",ghost:!0,icon:"file-excel",onClick:a.exportAll},"\u5bfc\u51fa\u5168\u90e8"))},a}return(0,w.default)(t,e),(0,E.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser,t=e&&e.entCode&&e.entCode.length<=4;t&&this.columns.splice(7,0,{title:"\u8c03\u62e8",align:"left",dataIndex:"transferring",render:function(e){return 1===e?T.default.createElement("span",{title:"\u53cb\u5546\u8c03\u62e8\u5165\u5e93\u7684\u5361",style:{color:"#52c41a"}},"\u662f"):T.default.createElement("span",{title:"\u8fd0\u8425\u5546\u5165\u5e93\u7684\u5361"},"\u5426")}}),this.loadData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return T.default.createElement("div",{style:{marginLeft:10,paddingBottom:10}},T.default.createElement(N.default,{onSubmit:this.handleSearch,layout:"inline"},T.default.createElement(o.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},T.default.createElement(s.default,{md:8,sm:24},T.default.createElement(A,{label:"\u51fa\u5e93\u5f00\u59cb"},e("begin")(T.default.createElement(u.default,{showTime:!0,placeholder:"\u5f00\u59cb\u65f6\u95f4"})))),T.default.createElement(s.default,{md:8,sm:24},T.default.createElement(A,{label:"\u51fa\u5e93\u622a\u6b62"},e("end")(T.default.createElement(u.default,{showTime:!0,placeholder:"\u622a\u6b62\u65f6\u95f4"})))),T.default.createElement(s.default,{md:8,sm:24},T.default.createElement(A,{label:"\u5ba2\u6237"},e("inEntName")(T.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237",allowClear:!0}))))),T.default.createElement(o.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},T.default.createElement(s.default,{md:8,sm:24},T.default.createElement(A,{label:"\u5361\u53f7"},e("cNo")(T.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165\u5361\u53f7",allowClear:!0})))),T.default.createElement(s.default,{md:8,sm:24},T.default.createElement("span",{className:j.default.submitButtons},T.default.createElement(c.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),T.default.createElement(c.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))))))}},{key:"render",value:function(){var e=this,t=this.props,a=t.location.pathname,l=t.pageData,n=t.pageLoading,o=this.state,i=o.selectedRows,s=o.orderNo,u={columns:this.columns,selectedRows:i,data:l,onChange:this.handleStandardTableChange,loading:n,onSelectRow:this.handleSelectRows,checkBox:!0,size:"small"};return T.default.createElement(r.default,{bordered:!1},T.default.createElement(O.default,{tableInit:u,SearchForm:this.renderSimpleForm(),Operator:this.renderOperator()}),T.default.createElement(d.default,{title:"\u64a4\u9500\u8c03\u62e8",width:"70%",onClose:function(){return e.doDrawer("canceltransferring",null,!1)},visible:this.components.canceltransferring,destroyOnClose:!0,placement:"right"},T.default.createElement(U.default,{orderNo:s,onClose:function(){return e.doDrawer("canceltransferring",null,!1)}})),T.default.createElement(d.default,{title:"\u64a4\u9500\u51fa\u5e93",width:"70%",onClose:function(){return e.doDrawer("cancel",null,!1)},visible:this.components.cancel,destroyOnClose:!0,placement:"right"},T.default.createElement(V.default,{orderNo:s,onClose:function(){return e.doDrawer("cancel",null,!1)}})),T.default.createElement(d.default,{title:"\u8c03\u62e8",width:"70%",onClose:function(){return e.doDrawer("transferring",null,!1)},visible:this.components.transferring,destroyOnClose:!0,placement:"right"},T.default.createElement(H.default,{orderNo:s})),T.default.createElement(d.default,{title:"\u67e5\u770b\u51fa\u5e93",width:"70%",onClose:function(){return e.doDrawer("edit",null,!1)},visible:this.components.edit,destroyOnClose:!0,placement:"right"},T.default.createElement(B.default,{orderNo:s,pathname:a})),T.default.createElement(d.default,{title:"\u51fa\u5e93\u660e\u7ec6",width:"70%",onClose:function(){return e.doDrawer("detail",null,!1)},visible:this.components.detail,destroyOnClose:!0,placement:"right"},T.default.createElement(_.default,{orderNo:s})))}}]),t}(T.PureComponent),D=I))||D)||D)||D)||D)||D),Z=Q;t.default=Z}}]);