(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{tyca:function(e,t,l){"use strict";var a=l("TqRt"),n=l("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("bbsP");var o=a(l("/wGt"));l("14J3");var d=a(l("BMrR"));l("jCWc");var r=a(l("kPKH"));l("5NDa");var i=a(l("5rEg"));l("5Dmo");var u=a(l("3S7+"));l("+L6B");var f=a(l("2/Rp"));l("Pwec");var c=a(l("CtXQ"));l("miYZ");var s=a(l("tsqr"));l("2qtc");var p=a(l("kLXV"));l("/zsF");var m=a(l("PArb")),h=a(l("lwsE")),w=a(l("W8MJ")),y=a(l("a1gu")),g=a(l("Nsbk")),E=a(l("7W2i")),x=a(l("MVZn"));l("Znn+");var C=a(l("ZTPi"));l("y8nQ");var v,T,b,k,F=a(l("Vl3Y")),S=n(l("q1tI")),I=a(l("KLZ9")),L=a(l("HZnN")),D=l("MuoO"),R=a(l("EUZL")),M=a(l("ufQ4")),U=a(l("76Ib")),z=a(l("rG3/")),V=a(l("4Qg3")),A=a(l("rckD")),O=a(l("0p+5")),N=F.default.Item,G=C.default.TabPane,W=(v=F.default.create(),T=(0,D.connect)(function(e){var t=e.user,l=e.flowpoolmodels,a=e.loading;return(0,x.default)({currentUser:t.currentUser},l,{loading:a.effects["flowpoolmodels/page"],recountLoading:a.effects["flowpoolmodels/recount"]})}),b=L.default.Secured("/business/flowpool"),(0,M.default)(k=v(k=T(k=b(k=function(e){function t(e){var l;(0,h.default)(this,t),l=(0,y.default)(this,(0,g.default)(t).call(this,e)),l.columns=[{title:"\u7f16\u7801",dataIndex:"id",fixed:"left",width:80,render:function(e){return S.default.createElement("span",null,e>0?"31".concat((Array(6).join(0)+e).slice(-6)):"--")}},{title:"\u540d\u79f0",dataIndex:"name",fixed:"left",width:350},{title:"\u7c7b\u578b",dataIndex:"poolTypeTxt",width:120,render:function(e,t){return S.default.createElement("span",{style:{color:1===t.poolType?"#F65327":"#17A05D"}},e)}},{title:"\u5361\u603b\u6570",dataIndex:"total",width:120},{title:"\u6fc0\u6d3b\u6570",dataIndex:"activeCount",width:120,render:function(e){return-1===e?"--":e}},{title:"\u53ef\u7528\u6d41\u91cf(M)",dataIndex:"tflow",width:120,render:function(e){return e>1024?S.default.createElement("div",null,(e/1024).toFixed(3),S.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):e.toFixed(3)}},{title:"\u5df2\u7528\u6d41\u91cf(M)",dataIndex:"poolType",width:120,render:function(e,t){return t.uflow>1024?S.default.createElement("div",null,(t.uflow/1024).toFixed(3),S.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):t.uflow.toFixed(3)}},{title:"\u5269\u4f59\u6d41\u91cf(M)",dataIndex:"uflow",width:120,render:function(e,t){return t.tflow-e>1024||-1*(t.tflow-e)>1024?S.default.createElement("div",null,((t.tflow-e)/1024).toFixed(3),S.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):(t.tflow-e).toFixed(3)}},{title:"\u4f7f\u7528\u7387(%)",dataIndex:"oType",width:120,sorter:!0,render:function(e,t){var l=(1*t.uflow/(t.tflow?t.tflow:1)*100).toFixed(2);return S.default.createElement("span",{style:{color:l>=80?"#F65327":"#17A05D"}},l,"%")}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"upTime",width:160},{title:"\u5ba2\u6237",dataIndex:"enterpriseName",width:280},{title:"\u64cd\u4f5c",width:180,render:function(e,t){var a=l.props,n=a.location.pathname,o=a.currentUser;return S.default.createElement(S.Fragment,null,2===t.poolType&&t.enterprise!==o.enterprise?S.default.createElement(L.default,{authority:[n,"edit"]},S.default.createElement("a",{onClick:function(){return l.handleUpdateModalVisible("edit",t)}},"\u7f16\u8f91"),S.default.createElement(m.default,{type:"vertical"})):null,S.default.createElement("a",{title:"\u67e5\u770b\u7edf\u8ba1\u660e\u7ec6",onClick:function(){return l.handleUpdateModalVisible("list",t)}},"\u660e\u7ec6"),2===t.poolType?S.default.createElement(S.Fragment,null,S.default.createElement(m.default,{type:"vertical"}),S.default.createElement("a",{title:"\u67e5\u770b\u5f52\u5c5e\u6210\u5458",onClick:function(){return l.handleUpdateModalVisible("card",t)}},"\u6210\u5458")):null,2===t.poolType&&t.enterprise!==o.enterprise?S.default.createElement(L.default,{authority:[n,"delete"]},S.default.createElement(m.default,{type:"vertical"}),S.default.createElement("a",{onClick:function(){return l.handleUpdateModalVisible("del",t)}},"\u5220\u9664")):null)}}],l.baseColumns=[{title:"\u540d\u79f0",dataIndex:"name",fixed:"left",width:350},{title:"\u8fd0\u8425\u5546",dataIndex:"oTypeTxt",width:60,render:function(e,t){return S.default.createElement("span",{style:{color:1===t.oType?"#F65327":"#17A05D"}},e)}},{title:"\u7f16\u7801",dataIndex:"operatorGroupId",width:160,render:function(e){return e||"--"}},{title:"\u5361\u6e90",dataIndex:"groupName",width:160,render:function(e){return e||"--"}},{title:"\u5361\u603b\u6570",dataIndex:"total",width:80},{title:"\u6fc0\u6d3b\u6570",width:80,dataIndex:"activeCount",render:function(e){return-1===e?"--":e}},{title:"\u53ef\u7528\u6d41\u91cf(M)",dataIndex:"tflow",width:80,render:function(e){return e>1024?S.default.createElement("div",null,(e/1024).toFixed(3),S.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):e.toFixed(3)}},{title:"\u5df2\u7528\u6d41\u91cf(M)",dataIndex:"poolType",width:80,render:function(e,t){return t.uflow>1024?S.default.createElement("div",null,(t.uflow/1024).toFixed(3),S.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):t.uflow.toFixed(3)}},{title:"\u5269\u4f59\u6d41\u91cf(M)",dataIndex:"uflow",width:80,render:function(e,t){return t.tflow-e>1024||-1*(t.tflow-e)>1024?S.default.createElement("div",null,((t.tflow-e)/1024).toFixed(3),S.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):(t.tflow-e).toFixed(3)}},{title:"\u4f7f\u7528\u7387",dataIndex:"id",sorter:!0,width:80,render:function(e,t){var l=(1*t.uflow/(t.tflow?t.tflow:1)*100).toFixed(2);return S.default.createElement("span",{style:{color:l>=80?"#F65327":"#17A05D"}},l,"%")}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"upTime",width:160},{title:"\u64cd\u4f5c",width:160,render:function(e,t){var a=l.props,n=a.location.pathname,o=a.currentUser,d=o&&o.entCode&&o.entCode.length<5;return S.default.createElement(S.Fragment,null,S.default.createElement("a",{title:"\u67e5\u770b\u7edf\u8ba1\u660e\u7ec6",onClick:function(){return l.handleUpdateModalVisible("list",t)}},"\u660e\u7ec6"),S.default.createElement(m.default,{type:"vertical"}),S.default.createElement("a",{title:"\u67e5\u770b\u5f52\u5c5e\u6210\u5458",onClick:function(){return l.handleUpdateModalVisible("card",t)}},"\u6210\u5458"),1===t.poolType&&d?S.default.createElement(L.default,{authority:[n,"delete"]},S.default.createElement(m.default,{type:"vertical"}),S.default.createElement("a",{onClick:function(){return l.handleUpdateModalVisible("del",t)}},"\u5220\u9664")):null)}}],l.components={cardList:!1,detailList:!1,edit:!1,add:!1},l.handleUpdateModalVisible=function(e,t){switch(e){case"del":p.default.confirm({title:"\u5220\u9664\u6d41\u91cf\u6c60\u3010".concat(t.name,"\u3011"),content:"\u5f52\u5c5e\u6210\u5458\u53ca\u7edf\u8ba1\u4fe1\u606f\u5e76\u540c\u5220\u9664\uff0c\u786e\u5b9a\u5220\u9664\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return l.deleteItem(t)}});break;case"edit":l.doDrawer("edit",t,!0);break;case"list":l.doDrawer("detailList",t,!0);break;case"card":l.doDrawer("cardList",t,!0);break;default:break}},l.doDrawer=function(e,t,a){l.components[e]=a,l.setState({flowpool:t})},l.toAdd=function(){l.doDrawer("add",null,!0)},l.deleteItem=function(e){var t=l.props,a=t.dispatch,n=t.currentUser,o=l.state.pageSize;a({type:"flowpoolmodels/del",payload:{id:e.id,pageIndex:1,pageSize:o,entCode:n.entCode}})},l.handleStandardTableChange=function(e,t,a){var n=l.props.dispatch,o=l.state,d=o.formValues,r=o.curEntCode,i=o.flowpoolType,u=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},f=Object.keys(t).reduce(function(e,l){var a=(0,x.default)({},e);return a[l]=u(t[l]),a},{});l.setState({pageSize:e.pageSize});var c=(0,x.default)({pageIndex:e.current,pageSize:e.pageSize,entCode:r},d,f,{flowpoolType:i});a.field&&(c.sorter="".concat(a.field,"_").concat(a.order)),n({type:"flowpoolmodels/page",payload:c})},l.handleSelectRows=function(e){l.setState({selectedRows:e})},l.onSelect=function(e){l.setState({curEntCode:e[0]});var t=l.state,a=t.pageSize,n=t.flowpoolType,o=l.props.dispatch;o({type:"flowpoolmodels/page",payload:{pageIndex:1,pageSize:a,entCode:e[0],flowpoolType:n}})},l.handleSearch=function(e){e.preventDefault();var t=l.props,a=t.dispatch,n=t.form,o=l.state,d=o.pageSize,r=o.curEntCode,i=o.flowpoolType;n.validateFields(function(e,t){if(!e){var n=(0,x.default)({},t,{pageIndex:1,pageSize:d,entCode:r,flowpoolType:i});l.setState({formValues:t}),a({type:"flowpoolmodels/page",payload:n})}})},l.handleFormReset=function(){l.handleReset()},l.handleReset=function(e){var t=l.state,a=t.pageSize,n=t.curEntCode,o=t.flowpoolType,d=l.props,r=d.form,i=d.dispatch;r.resetFields(),l.setState({formValues:{}}),i({type:"flowpoolmodels/page",payload:{pageIndex:1,pageSize:a,entCode:n,flowpoolType:e||o}})},l.handleExport=function(){var e=l.state.selectedRows;0!==e.length?l.exportToFile(e):s.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},l.handleExportAll=function(){var e=l.props.dispatch,t=l.state,a=t.formValues,n=t.curEntCode,o=t.flowpoolType,d=(0,x.default)({entCode:n},a,{pageSize:1e6,pageIndex:1,flowpoolType:o});l.setState({exporting1:!0}),e({type:"flowpoolmodels/page",payload:d}).then(function(){var e=l.props.pageData,t=e.list;l.exportToFile(t),l.setState({exporting1:!1})})},l.exportToFile=function(e){if(e&&0!==e.length){var t=e.map(function(e){return{"\u540d\u79f0":e.name,"\u5ba2\u6237":e.enterpriseName,"\u7c7b\u578b":e.poolTypeTxt,"\u5361\u603b\u6570":e.total,"\u6fc0\u6d3b\u6570\u91cf":e.activeCount,"\u81ea\u8425\u53ef\u7528\u6d41\u91cf":e.tflow,"\u5df2\u7528\u6d41\u91cf":e.uflow}}),a=l.props.currentUser;a&&a.entCode&&a.entCode.length<5&&(t=e.map(function(e){return{"\u540d\u79f0":e.name,"\u5ba2\u6237":e.enterpriseName,"\u7c7b\u578b":e.poolTypeTxt,"\u5361\u603b\u6570":e.total,"\u6fc0\u6d3b\u6570\u91cf":e.activeCount,"\u81ea\u8425\u53ef\u7528\u6d41\u91cf":e.tflow,"\u5df2\u7528\u6d41\u91cf":e.uflow,"\u8fd0\u8425\u5546\u53ef\u7528\u6d41\u91cf":e.oflow}}));var n=R.default.utils.json_to_sheet(t),o=R.default.utils.book_new();R.default.utils.book_append_sheet(o,n,"flowpool"),R.default.writeFile(o,"\u6d41\u91cf\u6c60\u8bb0\u5f55.xlsx")}else s.default.warning("\u65e0\u6570\u636e!")},l.setRowClassName=function(e,t){var l="";return t%2===0&&(l=O.default.darkRow),l},l.onTabsChange=function(e){l.setState({flowpoolType:e}),l.handleReset(e)},l.recount=function(e){var t=l.props.dispatch;t({type:"flowpoolmodels/recount",payload:{poolType:e}})},l.renderOperator=function(){var e=l.state,t=e.exporting,a=e.exporting1,n=e.flowpoolType,o=l.props,d=o.location.pathname,r=o.currentUser,i=o.recountLoading,u=r&&r.entCode&&r.entCode.length<5;return S.default.createElement(S.Fragment,null,u?S.default.createElement(C.default,{type:"card",size:"small",style:{background:"#ffffff"},onChange:l.onTabsChange,defaultActiveKey:n},S.default.createElement(G,{tab:S.default.createElement("span",null,S.default.createElement(c.default,{type:"star",theme:"twoTone",twoToneColor:"#52c41a"}),"\u81ea\u8425"),key:"2"},S.default.createElement(L.default,{authority:[d,"add"]},S.default.createElement(f.default,{type:"primary",icon:"plus",onClick:l.toAdd},"\u65b0\u5efa\u6d41\u91cf\u6c60")),S.default.createElement(f.default,{style:{marginLeft:8},icon:"reload",shape:"circle",onClick:l.handleFormReset}),S.default.createElement(f.default,{style:{marginLeft:8},type:"primary",ghost:!0,onClick:function(){return l.recount(2)},loading:i,icon:"pull-request"},"\u91cd\u65b0\u7edf\u8ba1"),S.default.createElement(f.default,{style:{marginLeft:8},onClick:l.handleExport,loading:t,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),S.default.createElement(f.default,{style:{marginLeft:8},loading:a,onClick:l.handleExportAll,icon:"download"},"\u5bfc\u51fa\u5168\u90e8")),S.default.createElement(G,{tab:S.default.createElement("span",null,S.default.createElement(c.default,{type:"gold",theme:"twoTone",twoToneColor:"#eb2f96"}),"\u8fd0\u8425\u5546"),key:"1"},S.default.createElement(f.default,{icon:"reload",shape:"circle",onClick:l.handleFormReset}),S.default.createElement(f.default,{style:{marginLeft:8},type:"primary",ghost:!0,onClick:function(){return l.recount(1)},loading:i,icon:"pull-request"},"\u91cd\u65b0\u540c\u6b65"),S.default.createElement(f.default,{style:{marginLeft:8},onClick:l.handleExport,loading:t,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),S.default.createElement(f.default,{style:{marginLeft:8},loading:a,onClick:l.handleExportAll,icon:"download"},"\u5bfc\u51fa\u5168\u90e8"))):S.default.createElement(S.Fragment,null,S.default.createElement(L.default,{authority:[d,"add"]},S.default.createElement(f.default,{type:"primary",icon:"plus",onClick:l.toAdd},"\u65b0\u5efa\u6d41\u91cf\u6c60")),S.default.createElement(f.default,{style:{marginLeft:8},icon:"reload",shape:"circle",onClick:l.handleFormReset}),S.default.createElement(f.default,{style:{marginLeft:8},type:"primary",ghost:!0,onClick:function(){return l.recount(2)},loading:i,icon:"pull-request"},"\u91cd\u65b0\u7edf\u8ba1"),S.default.createElement(f.default,{style:{marginLeft:8},onClick:l.handleExport,loading:t,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),S.default.createElement(f.default,{style:{marginLeft:8},loading:a,onClick:l.handleExportAll,icon:"download"},"\u5bfc\u51fa\u5168\u90e8")))},l.state={selectedRows:[],formValues:{},pageSize:10,exporting:!1,exporting1:!1,flowpoolType:"2",flowpool:null};var a=e.currentUser;return a&&a.entCode&&a.entCode.length<5&&(l.columns.splice(10,0,{title:S.default.createElement("span",null,S.default.createElement(u.default,{title:"\u8fd0\u8425\u5546\u53ef\u7528\uff1a\u7531\u3010\u6fc0\u6d3b\u3011\u7684\u5361\u4e2d\u3010\u8fd0\u8425\u5546\u5957\u9910\u3011\u6d41\u91cf\u7d2f\u52a0"},S.default.createElement(c.default,{type:"question-circle-o"})),"\xa0\u8fd0\u8425\u5546\u53ef\u7528(M)"),dataIndex:"oflow",width:130,render:function(e,t){return 2===t.poolType?e>1024?S.default.createElement("div",null,(e/1024).toFixed(3),S.default.createElement("span",{style:{fontWeight:"bold"}},"(G)")):e.toFixed(3):"--"}}),l.columns.splice(11,0,{title:S.default.createElement("span",null,S.default.createElement(u.default,{title:"\u5df2\u7528\u6d41\u91cf\u4e0e\u8fd0\u8425\u5546\u53ef\u7528\u6d41\u91cf\u7684\u6bd4\u4f8b"},S.default.createElement(c.default,{type:"question-circle-o"})),"\xa0(\u8fd0\u8425\u5546)\u4f7f\u7528\u7387(%)"),width:150,dataIndex:"createTime",render:function(e,t){var l=(100*(t.oflow?1*t.uflow/t.oflow:0)).toFixed(2);return S.default.createElement("span",{style:{color:l>=80?"#F65327":"#17A05D"}},2===t.poolType?"".concat(l,"%"):"--")}})),l}return(0,E.default)(t,e),(0,w.default)(t,[{key:"renderSearchForm",value:function(){var e=this.props.form.getFieldDecorator;return S.default.createElement(F.default,{onSubmit:this.handleSearch,layout:"inline"},S.default.createElement(d.default,{gutter:{md:8,lg:24,xl:48}},S.default.createElement(r.default,{md:8,sm:24},S.default.createElement(N,{label:"\u540d\u79f0"},e("name")(S.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165\u540d\u79f0",allowClear:!0})))),S.default.createElement(r.default,{md:8,sm:24},S.default.createElement("span",{className:O.default.submitButtons},S.default.createElement(f.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),S.default.createElement(f.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))}},{key:"render",value:function(){var e=this,t=this.props,l=t.pageData,a=t.loading,n=t.currentUser,d=this.state,r=d.selectedRows,i=d.flowpoolType,u=d.flowpool,f={onSelect:this.onSelect,defaultSelectedKeys:[n.entCode],limit:4},c={columns:"2"===i?this.columns:this.baseColumns,selectedRows:r,data:l,onChange:this.handleStandardTableChange,loading:a,onSelectRow:this.handleSelectRows,checkBox:!0,scroll:{x:1800},size:"small",rowClassName:this.setRowClassName};return S.default.createElement(S.default.Fragment,null,S.default.createElement(I.default,{entpriseInit:f,tableInit:c,SearchForm:this.renderSearchForm(),Operator:this.renderOperator()}),u&&S.default.createElement(o.default,{title:"\u6d41\u91cf\u6c60\u6210\u5458",width:"70%",onClose:function(){return e.doDrawer("cardList",null,!1)},visible:this.components.cardList,destroyOnClose:!0,placement:"right"},S.default.createElement(U.default,{flowpool:u})),u&&S.default.createElement(o.default,{title:"\u6d41\u91cf\u6c60\u660e\u7ec6",width:"70%",onClose:function(){return e.doDrawer("detailList",null,!1)},visible:this.components.detailList,destroyOnClose:!0,placement:"right"},S.default.createElement(z.default,{id:u.id})),S.default.createElement(o.default,{title:"\u65b0\u589e\u6d41\u91cf\u6c60",width:"70%",onClose:function(){return e.doDrawer("add",null,!1)},visible:this.components.add,destroyOnClose:!0,placement:"right"},S.default.createElement(V.default,{onClose:function(){return e.doDrawer("add",null,!1)}})),u&&S.default.createElement(o.default,{title:"\u7f16\u8f91\u6d41\u91cf\u6c60",width:"70%",onClose:function(){return e.doDrawer("edit",null,!1)},visible:this.components.edit,destroyOnClose:!0,placement:"right"},S.default.createElement(A.default,{id:u.id,onClose:function(){return e.doDrawer("edit",null,!1)}})))}}]),t}(S.Component))||k)||k)||k)||k),q=W;t.default=q}}]);