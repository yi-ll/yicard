(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[171],{EcrP:function(e,t,n){"use strict";var a=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14J3");var r=a(n("BMrR"));n("jCWc");var o=a(n("kPKH"));n("sRBo");var l=a(n("kaz8"));n("+L6B");var i=a(n("2/Rp")),d=a(n("jehZ"));n("miYZ");var u=a(n("tsqr")),s=a(n("2Taf")),c=a(n("vZ4D")),f=a(n("rlhR")),h=a(n("MhPg")),p=a(n("l4Ni")),m=a(n("ujKo")),g=a(n("p0pE"));n("2qtc");var v,y,w,x=a(n("kLXV")),S=b(n("q1tI")),C=n("MuoO"),D=a(n("EUZL")),P=a(n("wd/R")),F=a(n("ufQ4")),T=a(n("HZnN")),I=a(n("KLZ9")),k=a(n("wwJy")),M=a(n("j2WA")),E=a(n("TGaQ"));function Y(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(Y=function(e){return e?n:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=Y(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}function R(e){var t=O();return function(){var n,a=(0,m.default)(e);if(t){var r=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,p.default)(this,n)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var z="YYYYMM",B=x.default.confirm,j=[{title:"\u8fd0\u8425\u5546",dataIndex:"oTypeTxt",sorter:!0,width:130},{title:"\u9500\u552e\u5ba2\u6237",dataIndex:"sName",width:230},{title:"\u4e3b\u5957\u9910",dataIndex:"packageName",width:200},{title:"\u5361\u72b6\u6001",dataIndex:"statusTxt",sorter:!0,width:100},{title:"\u672c\u6708\u7528\u91cf(M)",dataIndex:"uFlow",sorter:!0,width:120},{title:"\u5df2\u7528\u6d41\u91cf(M)",dataIndex:"uPFlow",sorter:!0,width:120},{title:"\u53ef\u7528\u6d41\u91cf(M)",dataIndex:"tPFlow",sorter:!0,width:120},{title:"\u5df2\u7528\u77ed\u4fe1(\u6761)",dataIndex:"uPSms",sorter:!0,width:120},{title:"\u53ef\u7528\u77ed\u4fe1(\u6761)",dataIndex:"tPSms",sorter:!0,width:120},{title:"\u77ed\u4fe1\u8d39(\u5143)",dataIndex:"uSms",width:100,render:function(e,t){return.01*t.uPSms}},{title:"\u5df2\u7528\u5b9a\u4f4d(\u6b21)",dataIndex:"uPLbs",sorter:!0,width:120},{title:"\u53ef\u7528\u5b9a\u4f4d(\u6b21)",dataIndex:"tPLbs",sorter:!0,width:120},{title:"\u6fc0\u6d3b\u65e5\u671f",dataIndex:"aDateTxt",sorter:!0,width:100},{title:"\u670d\u52a1\u5f00\u59cb",dataIndex:"effDateTxt",sorter:!0,width:130},{title:"\u670d\u52a1\u622a\u6b62",dataIndex:"invDateTxt",sorter:!0,width:130}],A=(v=(0,C.connect)(function(e){var t=e.user,n=e.monthmodel,a=e.loading;return(0,g.default)({},n,{currentUser:t.currentUser,loading:a.effects["monthmodel/page"],Downloading:a.effects["monthmodel/list"],loadingcardtype:a.effects["monthmodel/fetchcardtype"]})}),y=T.default.Secured("/record/monthreport"),(0,F.default)(w=v(w=y(w=function(e){(0,h.default)(n,e);var t=R(n);function n(e){var a;return(0,s.default)(this,n),a=t.call(this,e),a.scrollX=2300,a.headColumns=[{title:"\u5361\u53f7",dataIndex:"msisdn",sorter:!0,fixed:"left",width:120},{title:"ICCID",dataIndex:"iccid",sorter:!0,fixed:"left",width:170}],a.columns=[],a.doCount=function(e){var t=a.props,n=t.dispatch,r=t.currentUser;n({type:"monthmodel/getstockCount",payload:{month:e}}),n({type:"monthmodel/getCost",payload:{month:e,entCode:r.entCode}})},a.handleStandardTableChange=function(e,t,n){var r=null;if(n){var o=n.field,l=n.order;r={field:o,order:l}}var i=e.current;a.setState({currentPage:i,pageSize:e.pageSize});var d=a.state,u=d.formValues,s=d.entCode,c=d.isAdvanced,f=d.forePage;if(!f){var h=(0,g.default)({segmentsQuery:c,pageIndex:i-1,pageSize:e.pageSize,entCode:s},u,{sorter:r});a.loadData(h)}},a.loadData=function(e){var t=a.props.dispatch,n=a.state.month;if(e.month){var r="".concat(e.month.format(z));r!==n&&a.doCount(r)}var o=e.month?"".concat(e.month.format(z)):n;t({type:"monthmodel/page",payload:(0,g.default)({},e,{month:o})})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.onSelect=function(e){a.setState({entCode:e[0]});var t=a.state.pageSize,n={pageIndex:0,pageSize:t,entCode:e[0]};a.loadData(n)},a.isforePage=function(e){return!(!e.iccid&&!e.msisdn)},a.handleSearch=function(e){var t=a.state,n=t.pageSize,r=t.entCode,o=t.isAdvanced,l=a.isforePage(e),i=(0,g.default)({forePage:l,segmentsQuery:o},e,{pageIndex:0,pageSize:n,entCode:r,effDateBegin:e.effDateBegin?"".concat(e.effDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,effDateEnd:e.effDateEnd?"".concat(e.effDateEnd.format("YYYY-MM-DD")," 00:00:00"):null,invDateBegin:e.invDateBegin?"".concat(e.invDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,invDateEnd:e.invDateEnd?"".concat(e.invDateEnd.format("YYYY-MM-DD")," 00:00:00"):null});a.setState({forePage:l,currentPage:0,formValues:e,month:"".concat(e.month.format(z))}),a.loadData(i)},a.handleFormReset=function(){var e=a.state,t=e.pageSize,n=e.entCode;a.setState({formValues:{}});var r={pageIndex:0,pageSize:t,entCode:n};a.loadData(r)},a.onQueryTypeChange=function(e){a.setState({queryType:e})},a.handleExport=function(){var e=(0,f.default)(a);B({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u5bfc\u51fa\u5168\u90e8?",onOk:function(){e.exportAll()}})},a.exportAll=function(){var e=a.props.dispatch,t=a.state,n=t.formValues,r=t.entCode,o=t.month,l=t.isAdvanced,i=a.isforePage(n),d=(0,g.default)({segmentsQuery:l,forePage:i,entCode:r},n,{pageSize:1e6,pageIndex:0,month:o,downTask:!0});a.setState({exporting:!0}),e({type:"monthmodel/list",payload:d}).then(function(){a.setState({exporting:!1})})},a.downLoad=function(){var e=a.state.selectedRows;0!==e.length?(a.setState({exporting:!0}),a.exportToFile(e),a.setState({exporting:!1})):u.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.exportToFile=function(e){var t=e.map(function(e){return{"\u5361\u53f7":e.msisdn,ICCID:e.iccid,"\u8fd0\u8425\u5546":e.oTypeTxt,"\u9500\u552e\u5ba2\u6237":e.sName,"\u4e3b\u5957\u9910":e.packageName,"\u5361\u72b6\u6001":e.statusTxt,"\u672c\u6708\u7528\u91cf":e.uFlow,"\u5df2\u7528\u6d41\u91cf":e.uPFlow,"\u53ef\u7528\u6d41\u91cf":e.tPFlow,"\u5df2\u7528\u77ed\u4fe1":e.uPSms,"\u53ef\u7528\u77ed\u4fe1":e.tPSms,"\u77ed\u4fe1\u8d39":.01*e.uPSms,"\u5df2\u7528\u5b9a\u4f4d":e.uPLbs,"\u53ef\u7528\u5b9a\u4f4d":e.tPLbs,"\u6fc0\u6d3b\u65e5\u671f":e.aDateTxt}}),n=D.default.utils.json_to_sheet(t),a=D.default.utils.book_new();D.default.utils.book_append_sheet(a,n,"cardinfo"),D.default.writeFile(a,"\u6708\u62a5\u8868".concat((0,P.default)().format("YYYY-MM-DD hh_mm"),".xlsx"))},a.toggleForm=function(){var e=a.state.isAdvanced;a.setState({isAdvanced:!e,queryType:0})},a.filterForm=function(){var e=a.state.filterFormVisible;a.setState({filterFormVisible:!e})},a.filterOk=function(){a.filterForm()},a.onFilterChange=function(e){e&&(a.columns=[],a.headColumns.map(function(e,t){return a.columns.splice(t,0,e)}),e.map(function(e,t){var n=j.find(function(t){return t.dataIndex===e});return a.columns.splice(t+2,0,n)}),a.scrollX=0,a.columns.map(function(e){return a.scrollX+=e.width}),a.scrollX<1e3&&(a.scrollX=1100))},a.getPreMonth=function(){var e=new Date;return e.setMonth(e.getMonth()-1),(0,P.default)(e).format(z)},a.state={selectedRows:[],formValues:{},currentPage:0,pageSize:10,exporting:!1,filterFormVisible:!1,forePage:!1,month:a.getPreMonth(),isAdvanced:!1,queryType:0},a.columns=[],a.headColumns.map(function(e,t){return a.columns.splice(t,0,e)}),j.map(function(e,t){return a.columns.splice(t+2,0,e)}),a.scrollX=0,a.columns.map(function(e){return a.scrollX+=e.width?e.width:120}),a}return(0,c.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.month;this.doCount(t),setTimeout(function(){e.loadCardType()},2e3);var n=this.props.currentUser,a=n&&n.entCode&&n.entCode.length<=4;a&&setTimeout(function(){e.loadOperator()},1e3)}},{key:"loadCardType",value:function(){var e=this.props.dispatch;e({type:"monthmodel/fetchcardtype"})}},{key:"loadOperator",value:function(){var e=this.props.dispatch;e({type:"monthmodel/queryOperator"})}},{key:"renderSimpleForm",value:function(){return S.default.createElement(M.default,(0,d.default)({},this.props,{monthDate:(0,P.default)(this.getPreMonth(),z),handleFormReset:this.handleFormReset,handleSearch:this.handleSearch,toggleForm:this.toggleForm}))}},{key:"renderAdvancedForm",value:function(){var e=this.state,t=e.uBegin,n=e.uEnd,a=e.queryType,r=e.invDateBegin,o=e.invDateEnd,l=e.oType;return S.default.createElement(k.default,(0,d.default)({},this.props,{monthDate:(0,P.default)(this.getPreMonth(),z),oType:l,queryType:a,uBegin:t,uEnd:n,invDateBegin:r,invDateEnd:o,handleFormReset:this.handleFormReset,handleSearch:this.handleSearch,toggleForm:this.toggleForm,onQueryTypeChange:this.onQueryTypeChange}))}},{key:"renderOperator",value:function(){var e=this.state.exporting;return S.default.createElement(S.Fragment,null,S.default.createElement("span",null,S.default.createElement(i.default,{onClick:this.downLoad,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),S.default.createElement(i.default,{style:{marginLeft:8},type:"primary",icon:"file-excel",loading:e,onClick:this.handleExport},"\u5bfc\u51fa\u5168\u90e8"),S.default.createElement(i.default,{style:{marginLeft:8},onClick:this.filterForm,icon:"filter"},"\u6570\u636e\u5217\u7b5b\u9009")))}},{key:"render",value:function(){var e=this.props,t=e.pageData,n=e.loading,a=e.currentUser,i=e.statisticsTotal,d=this.state,u=d.selectedRows,s=d.isAdvanced,c=d.filterFormVisible,f=d.forePage,h=d.currentPage,p=d.pageSize,m={onSelect:this.onSelect,defaultSelectedKeys:[a.entCode],limit:8,statisticsTotal:i,property:["inStock"],propertyColor:"#F65327",treeHeight:E.default.treeHeight},v={columns:this.columns,selectedRows:u,onChange:this.handleStandardTableChange,loading:n,onSelectRow:this.handleSelectRows,checkBox:!0,scroll:{x:this.scrollX},size:"small"};if(f){var y=t.list,w=t.pagination;v.data={list:y,pagination:(0,g.default)({},w,{current:h,pageSize:p})}}else v.data=t;var C=s?this.renderAdvancedForm():this.renderSimpleForm();return S.default.createElement(S.default.Fragment,null,S.default.createElement(I.default,{entpriseInit:m,tableInit:v,SearchForm:C,Operator:this.renderOperator()}),S.default.createElement(x.default,{destroyOnClose:!0,title:"\u6570\u636e\u5217\u8fc7\u6ee4",visible:c,onOk:this.filterOk,onCancel:this.filterForm},S.default.createElement(l.default.Group,{style:{width:"100%"},defaultValue:this.columns.map(function(e){return e.dataIndex}),onChange:this.onFilterChange},S.default.createElement(r.default,null,j.map(function(e){return S.default.createElement(o.default,{key:e.dataIndex,span:8},S.default.createElement(l.default,{value:e.dataIndex},e.title))})))))}}]),n}(S.Component))||w)||w)||w),L=A;t.default=L}}]);