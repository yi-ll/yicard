(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125],{tyca:function(e,t,l){"use strict";var a=l("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("bbsP");var n=a(l("/wGt"));l("14J3");var o=a(l("BMrR"));l("jCWc");var r=a(l("kPKH"));l("5NDa");var d=a(l("5rEg"));l("5Dmo");var i=a(l("3S7+"));l("+L6B");var u=a(l("2/Rp"));l("Pwec");var f=a(l("CtXQ"));l("miYZ");var c=a(l("tsqr"));l("2qtc");var s=a(l("kLXV"));l("/zsF");var p=a(l("PArb")),m=a(l("2Taf")),w=a(l("vZ4D")),h=a(l("MhPg")),y=a(l("l4Ni")),g=a(l("ujKo")),E=a(l("p0pE"));l("Znn+");var v=a(l("ZTPi"));l("y8nQ");var x,C,b,T,k=a(l("Vl3Y")),F=j(l("q1tI")),S=a(l("KLZ9")),I=a(l("HZnN")),D=l("MuoO"),L=a(l("EUZL")),R=a(l("ufQ4")),M=a(l("76Ib")),O=a(l("rG3/")),z=a(l("4Qg3")),U=a(l("rckD")),A=a(l("0p+5"));function V(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(V=function(e){return e?l:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var l=V(t);if(l&&l.has(e))return l.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=n?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}function P(e){var t=N();return function(){var l,a=(0,g.default)(e);if(t){var n=(0,g.default)(this).constructor;l=Reflect.construct(a,arguments,n)}else l=a.apply(this,arguments);return(0,y.default)(this,l)}}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var W=k.default.Item,G=v.default.TabPane,_=(x=k.default.create(),C=(0,D.connect)(function(e){var t=e.user,l=e.flowpoolmodels,a=e.loading;return(0,E.default)({currentUser:t.currentUser},l,{loading:a.effects["flowpoolmodels/page"],recountLoading:a.effects["flowpoolmodels/recount"]})}),b=I.default.Secured("/business/flowpool"),(0,R.default)(T=x(T=C(T=b(T=function(e){(0,h.default)(l,e);var t=P(l);function l(e){var a;(0,m.default)(this,l),a=t.call(this,e),a.columns=[{title:"\u7f16\u7801",dataIndex:"id",fixed:"left",width:80,render:function(e){return F.default.createElement("span",null,e>0?"31".concat((Array(6).join(0)+e).slice(-6)):"--")}},{title:"\u540d\u79f0",dataIndex:"name",fixed:"left",width:350},{title:"\u7c7b\u578b",dataIndex:"poolTypeTxt",width:120,render:function(e,t){return F.default.createElement("span",{style:{color:1===t.poolType?"#F65327":"#17A05D"}},e)}},{title:"\u5361\u603b\u6570",dataIndex:"total",width:120},{title:"\u6fc0\u6d3b\u6570",dataIndex:"activeCount",width:120,render:function(e){return-1===e?"--":e}},{title:"\u53ef\u7528\u6d41\u91cf(M)",dataIndex:"tflow",width:120,render:function(e){return e>1024?F.default.createElement("div",null,(e/1024).toFixed(3),F.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):e.toFixed(3)}},{title:"\u5df2\u7528\u6d41\u91cf(M)",dataIndex:"poolType",width:120,render:function(e,t){return t.uflow>1024?F.default.createElement("div",null,(t.uflow/1024).toFixed(3),F.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):t.uflow.toFixed(3)}},{title:"\u5269\u4f59\u6d41\u91cf(M)",dataIndex:"uflow",width:120,render:function(e,t){return t.tflow-e>1024||-1*(t.tflow-e)>1024?F.default.createElement("div",null,((t.tflow-e)/1024).toFixed(3),F.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):(t.tflow-e).toFixed(3)}},{title:"\u4f7f\u7528\u7387(%)",dataIndex:"oType",width:120,sorter:!0,render:function(e,t){var l=(1*t.uflow/(t.tflow?t.tflow:1)*100).toFixed(2);return F.default.createElement("span",{style:{color:l>=80?"#F65327":"#17A05D"}},l,"%")}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"upTime",width:160},{title:"\u5ba2\u6237",dataIndex:"enterpriseName",width:280},{title:"\u64cd\u4f5c",width:180,render:function(e,t){var l=a.props,n=l.location.pathname,o=l.currentUser;return F.default.createElement(F.Fragment,null,2===t.poolType&&t.enterprise!==o.enterprise?F.default.createElement(I.default,{authority:[n,"edit"]},F.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("edit",t)}},"\u7f16\u8f91"),F.default.createElement(p.default,{type:"vertical"})):null,F.default.createElement("a",{title:"\u67e5\u770b\u7edf\u8ba1\u660e\u7ec6",onClick:function(){return a.handleUpdateModalVisible("list",t)}},"\u660e\u7ec6"),2===t.poolType?F.default.createElement(F.Fragment,null,F.default.createElement(p.default,{type:"vertical"}),F.default.createElement("a",{title:"\u67e5\u770b\u5f52\u5c5e\u6210\u5458",onClick:function(){return a.handleUpdateModalVisible("card",t)}},"\u6210\u5458")):null,2===t.poolType&&t.enterprise!==o.enterprise?F.default.createElement(I.default,{authority:[n,"delete"]},F.default.createElement(p.default,{type:"vertical"}),F.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("del",t)}},"\u5220\u9664")):null)}}],a.baseColumns=[{title:"\u540d\u79f0",dataIndex:"name",fixed:"left",width:350},{title:"\u8fd0\u8425\u5546",dataIndex:"oTypeTxt",width:60,render:function(e,t){return F.default.createElement("span",{style:{color:1===t.oType?"#F65327":"#17A05D"}},e)}},{title:"\u7f16\u7801",dataIndex:"operatorGroupId",width:160,render:function(e){return e||"--"}},{title:"\u5361\u6e90",dataIndex:"groupName",width:160,render:function(e){return e||"--"}},{title:"\u5361\u603b\u6570",dataIndex:"total",width:80},{title:"\u53ef\u7528\u6d41\u91cf(M)",dataIndex:"tflow",width:120,render:function(e,t){var l=e>1024?F.default.createElement("div",null,(e/1024).toFixed(3),F.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):e.toFixed(3);return 1===t.backward&&(l=F.default.createElement("span",{style:{color:"blue",fontSize:18},title:"\u540e\u5411\u6d41\u91cf\u6c60\u65e0\u9650"},"\u221e")),l}},{title:"\u5df2\u7528\u6d41\u91cf(M)",dataIndex:"poolType",width:120,render:function(e,t){return t.uflow>1024?F.default.createElement("div",null,(t.uflow/1024).toFixed(3),F.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):t.uflow.toFixed(3)}},{title:"\u5269\u4f59\u6d41\u91cf(M)",dataIndex:"uflow",width:120,render:function(e,t){var l=t.tflow-e>1024||-1*(t.tflow-e)>1024?F.default.createElement("div",null,((t.tflow-e)/1024).toFixed(3),F.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):(t.tflow-e).toFixed(3);return 1===t.backward&&(l=F.default.createElement("span",{style:{color:"blue",fontSize:18},title:"\u540e\u5411\u6d41\u91cf\u6c60\u65e0\u9650"},"\u221e")),l}},{title:"\u4f7f\u7528\u7387",dataIndex:"id",sorter:!0,width:80,render:function(e,t){var l=(1*t.uflow/(t.tflow?t.tflow:1)*100).toFixed(2),a=F.default.createElement("span",{style:{color:l>=80?"#F65327":"#17A05D"}},l,"%");return 1===t.backward&&(a=F.default.createElement("span",{style:{color:"#17A05D"},title:"\u540e\u5411\u6d41\u91cf\u6c60\u65e0\u9650"},"0.00%")),a}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"upTime",width:160},{title:"\u64cd\u4f5c",width:160,render:function(e,t){var l=a.props,n=l.location.pathname,o=l.currentUser,r=o&&o.entCode&&o.entCode.length<5;return F.default.createElement(F.Fragment,null,F.default.createElement("a",{title:"\u67e5\u770b\u7edf\u8ba1\u660e\u7ec6",onClick:function(){return a.handleUpdateModalVisible("list",t)}},"\u660e\u7ec6"),F.default.createElement(p.default,{type:"vertical"}),F.default.createElement("a",{title:"\u67e5\u770b\u5f52\u5c5e\u6210\u5458",onClick:function(){return a.handleUpdateModalVisible("card",t)}},"\u6210\u5458"),1===t.poolType&&r?F.default.createElement(I.default,{authority:[n,"delete"]},F.default.createElement(p.default,{type:"vertical"}),F.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("del",t)}},"\u5220\u9664")):null)}}],a.components={cardList:!1,detailList:!1,edit:!1,add:!1},a.handleUpdateModalVisible=function(e,t){switch(e){case"del":s.default.confirm({title:"\u5220\u9664\u6d41\u91cf\u6c60\u3010".concat(t.name,"\u3011"),content:"\u5f52\u5c5e\u6210\u5458\u53ca\u7edf\u8ba1\u4fe1\u606f\u5e76\u540c\u5220\u9664\uff0c\u786e\u5b9a\u5220\u9664\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.deleteItem(t)}});break;case"edit":a.doDrawer("edit",t,!0);break;case"list":a.doDrawer("detailList",t,!0);break;case"card":a.doDrawer("cardList",t,!0);break;default:break}},a.doDrawer=function(e,t,l){a.components[e]=l,a.setState({flowpool:t})},a.toAdd=function(){a.doDrawer("add",null,!0)},a.deleteItem=function(e){var t=a.props,l=t.dispatch,n=t.currentUser,o=a.state.pageSize;l({type:"flowpoolmodels/del",payload:{id:e.id,pageIndex:1,pageSize:o,entCode:n.entCode}})},a.handleStandardTableChange=function(e,t,l){var n=a.props.dispatch,o=a.state,r=o.formValues,d=o.curEntCode,i=o.flowpoolType,u=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},f=Object.keys(t).reduce(function(e,l){var a=(0,E.default)({},e);return a[l]=u(t[l]),a},{});a.setState({pageSize:e.pageSize});var c=(0,E.default)({pageIndex:e.current,pageSize:e.pageSize,entCode:d},r,f,{flowpoolType:i});l.field&&(c.sorter="".concat(l.field,"_").concat(l.order)),n({type:"flowpoolmodels/page",payload:c})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.onSelect=function(e){a.setState({curEntCode:e[0]});var t=a.state,l=t.pageSize,n=t.flowpoolType,o=a.props.dispatch;o({type:"flowpoolmodels/page",payload:{pageIndex:1,pageSize:l,entCode:e[0],flowpoolType:n}})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,o=a.state,r=o.pageSize,d=o.curEntCode,i=o.flowpoolType;n.validateFields(function(e,t){if(!e){var n=(0,E.default)({},t,{pageIndex:1,pageSize:r,entCode:d,flowpoolType:i});a.setState({formValues:t}),l({type:"flowpoolmodels/page",payload:n})}})},a.handleFormReset=function(){a.handleReset()},a.handleReset=function(e){var t=a.state,l=t.pageSize,n=t.curEntCode,o=t.flowpoolType,r=a.props,d=r.form,i=r.dispatch;d.resetFields(),a.setState({formValues:{}}),i({type:"flowpoolmodels/page",payload:{pageIndex:1,pageSize:l,entCode:n,flowpoolType:e||o}})},a.handleExport=function(){var e=a.state.selectedRows;0!==e.length?a.exportToFile(e):c.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.handleExportAll=function(){var e=a.props.dispatch,t=a.state,l=t.formValues,n=t.curEntCode,o=t.flowpoolType,r=(0,E.default)({entCode:n},l,{pageSize:1e6,pageIndex:1,flowpoolType:o});a.setState({exporting1:!0}),e({type:"flowpoolmodels/page",payload:r}).then(function(){var e=a.props.pageData,t=e.list;a.exportToFile(t),a.setState({exporting1:!1})})},a.exportToFile=function(e){if(e&&0!==e.length){var t=e.map(function(e){return{"\u540d\u79f0":e.name,"\u5ba2\u6237":e.enterpriseName,"\u7c7b\u578b":e.poolTypeTxt,"\u5361\u603b\u6570":e.total,"\u6fc0\u6d3b\u6570\u91cf":e.activeCount,"\u81ea\u8425\u53ef\u7528\u6d41\u91cf":e.tflow,"\u5df2\u7528\u6d41\u91cf":e.uflow}}),l=a.props.currentUser;l&&l.entCode&&l.entCode.length<5&&(t=e.map(function(e){return{"\u540d\u79f0":e.name,"\u5ba2\u6237":e.enterpriseName,"\u7c7b\u578b":e.poolTypeTxt,"\u5361\u603b\u6570":e.total,"\u6fc0\u6d3b\u6570\u91cf":e.activeCount,"\u81ea\u8425\u53ef\u7528\u6d41\u91cf":e.tflow,"\u5df2\u7528\u6d41\u91cf":e.uflow,"\u8fd0\u8425\u5546\u53ef\u7528\u6d41\u91cf":e.oflow}}));var n=L.default.utils.json_to_sheet(t),o=L.default.utils.book_new();L.default.utils.book_append_sheet(o,n,"flowpool"),L.default.writeFile(o,"\u6d41\u91cf\u6c60\u8bb0\u5f55.xlsx")}else c.default.warning("\u65e0\u6570\u636e!")},a.setRowClassName=function(e,t){var l="";return t%2===0&&(l=A.default.darkRow),l},a.onTabsChange=function(e){a.setState({flowpoolType:e}),a.handleReset(e)},a.recount=function(e){var t=a.props.dispatch;t({type:"flowpoolmodels/recount",payload:{poolType:e}})},a.renderOperator=function(){var e=a.state,t=e.exporting,l=e.exporting1,n=e.flowpoolType,o=a.props,r=o.location.pathname,d=o.currentUser,i=o.recountLoading,c=d&&d.entCode&&d.entCode.length<5;return F.default.createElement(F.Fragment,null,c?F.default.createElement(v.default,{type:"card",size:"small",style:{background:"#ffffff"},onChange:a.onTabsChange,defaultActiveKey:n},F.default.createElement(G,{tab:F.default.createElement("span",null,F.default.createElement(f.default,{type:"star",theme:"twoTone",twoToneColor:"#52c41a"}),"\u81ea\u8425"),key:"2"},F.default.createElement(I.default,{authority:[r,"add"]},F.default.createElement(u.default,{type:"primary",icon:"plus",onClick:a.toAdd},"\u65b0\u5efa\u6d41\u91cf\u6c60")),F.default.createElement(u.default,{style:{marginLeft:8},icon:"reload",shape:"circle",onClick:a.handleFormReset}),F.default.createElement(u.default,{style:{marginLeft:8},type:"primary",ghost:!0,onClick:function(){return a.recount(2)},loading:i,icon:"pull-request"},"\u91cd\u65b0\u7edf\u8ba1"),F.default.createElement(u.default,{style:{marginLeft:8},onClick:a.handleExport,loading:t,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),F.default.createElement(u.default,{style:{marginLeft:8},loading:l,onClick:a.handleExportAll,icon:"download"},"\u5bfc\u51fa\u5168\u90e8")),F.default.createElement(G,{tab:F.default.createElement("span",null,F.default.createElement(f.default,{type:"gold",theme:"twoTone",twoToneColor:"#eb2f96"}),"\u8fd0\u8425\u5546"),key:"1"},F.default.createElement(u.default,{icon:"reload",shape:"circle",onClick:a.handleFormReset}),F.default.createElement(u.default,{style:{marginLeft:8},type:"primary",ghost:!0,onClick:function(){return a.recount(1)},loading:i,icon:"pull-request"},"\u91cd\u65b0\u540c\u6b65"),F.default.createElement(u.default,{style:{marginLeft:8},onClick:a.handleExport,loading:t,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),F.default.createElement(u.default,{style:{marginLeft:8},loading:l,onClick:a.handleExportAll,icon:"download"},"\u5bfc\u51fa\u5168\u90e8"))):F.default.createElement(F.Fragment,null,F.default.createElement(I.default,{authority:[r,"add"]},F.default.createElement(u.default,{type:"primary",icon:"plus",onClick:a.toAdd},"\u65b0\u5efa\u6d41\u91cf\u6c60")),F.default.createElement(u.default,{style:{marginLeft:8},icon:"reload",shape:"circle",onClick:a.handleFormReset}),F.default.createElement(u.default,{style:{marginLeft:8},type:"primary",ghost:!0,onClick:function(){return a.recount(2)},loading:i,icon:"pull-request"},"\u91cd\u65b0\u7edf\u8ba1"),F.default.createElement(u.default,{style:{marginLeft:8},onClick:a.handleExport,loading:t,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),F.default.createElement(u.default,{style:{marginLeft:8},loading:l,onClick:a.handleExportAll,icon:"download"},"\u5bfc\u51fa\u5168\u90e8")))},a.state={selectedRows:[],formValues:{},pageSize:10,exporting:!1,exporting1:!1,flowpoolType:"2",flowpool:null};var n=e.currentUser;return n&&n.entCode&&n.entCode.length<5&&(a.columns.splice(10,0,{title:F.default.createElement("span",null,F.default.createElement(i.default,{title:"\u8fd0\u8425\u5546\u53ef\u7528\uff1a\u7531\u3010\u6fc0\u6d3b\u3011\u7684\u5361\u4e2d\u3010\u8fd0\u8425\u5546\u5957\u9910\u3011\u6d41\u91cf\u7d2f\u52a0"},F.default.createElement(f.default,{type:"question-circle-o"})),"\xa0\u8fd0\u8425\u5546\u53ef\u7528(M)"),dataIndex:"oflow",width:130,render:function(e,t){return 2===t.poolType?e>1024?F.default.createElement("div",null,(e/1024).toFixed(3),F.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):e.toFixed(3):"--"}}),a.columns.splice(11,0,{title:F.default.createElement("span",null,F.default.createElement(i.default,{title:"\u5df2\u7528\u6d41\u91cf\u4e0e\u8fd0\u8425\u5546\u53ef\u7528\u6d41\u91cf\u7684\u6bd4\u4f8b"},F.default.createElement(f.default,{type:"question-circle-o"})),"\xa0(\u8fd0\u8425\u5546)\u4f7f\u7528\u7387(%)"),width:150,dataIndex:"createTime",render:function(e,t){var l=(100*(t.oflow?1*t.uflow/t.oflow:0)).toFixed(2);return F.default.createElement("span",{style:{color:l>=80?"#F65327":"#17A05D"}},2===t.poolType?"".concat(l,"%"):"--")}})),a}return(0,w.default)(l,[{key:"renderSearchForm",value:function(){var e=this.props.form.getFieldDecorator;return F.default.createElement(k.default,{onSubmit:this.handleSearch,layout:"inline"},F.default.createElement(o.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},F.default.createElement(r.default,{md:8,sm:24},F.default.createElement(W,{label:"\u540d\u79f0"},e("name")(F.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165\u540d\u79f0",allowClear:!0})))),F.default.createElement(r.default,{md:8,sm:24},F.default.createElement("span",{className:A.default.submitButtons},F.default.createElement(u.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),F.default.createElement(u.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))}},{key:"render",value:function(){var e=this,t=this.props,l=t.pageData,a=t.loading,o=t.currentUser,r=this.state,d=r.selectedRows,i=r.flowpoolType,u=r.flowpool,f={onSelect:this.onSelect,defaultSelectedKeys:[o.entCode],limit:4},c={columns:"2"===i?this.columns:this.baseColumns,selectedRows:d,data:l,onChange:this.handleStandardTableChange,loading:a,onSelectRow:this.handleSelectRows,checkBox:!0,scroll:{x:1800},size:"small",rowClassName:this.setRowClassName};return F.default.createElement(F.default.Fragment,null,F.default.createElement(S.default,{entpriseInit:f,tableInit:c,SearchForm:this.renderSearchForm(),Operator:this.renderOperator()}),u&&F.default.createElement(n.default,{title:"\u6d41\u91cf\u6c60\u6210\u5458",width:"70%",onClose:function(){return e.doDrawer("cardList",null,!1)},visible:this.components.cardList,destroyOnClose:!0,placement:"right"},F.default.createElement(M.default,{flowpool:u})),u&&F.default.createElement(n.default,{title:"\u6d41\u91cf\u6c60\u660e\u7ec6",width:"70%",onClose:function(){return e.doDrawer("detailList",null,!1)},visible:this.components.detailList,destroyOnClose:!0,placement:"right"},F.default.createElement(O.default,{id:u.id})),F.default.createElement(n.default,{title:"\u65b0\u589e\u6d41\u91cf\u6c60",width:"70%",onClose:function(){return e.doDrawer("add",null,!1)},visible:this.components.add,destroyOnClose:!0,placement:"right"},F.default.createElement(z.default,{onClose:function(){return e.doDrawer("add",null,!1)}})),u&&F.default.createElement(n.default,{title:"\u7f16\u8f91\u6d41\u91cf\u6c60",width:"70%",onClose:function(){return e.doDrawer("edit",null,!1)},visible:this.components.edit,destroyOnClose:!0,placement:"right"},F.default.createElement(U.default,{id:u.id,onClose:function(){return e.doDrawer("edit",null,!1)}})))}}]),l}(F.Component))||T)||T)||T)||T),q=_;t.default=q}}]);