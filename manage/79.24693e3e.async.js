(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{EizR:function(e,t,a){e.exports={tableListForm:"antd-pro\\pages\\-record\\-location\\index-tableListForm",submitButtons:"antd-pro\\pages\\-record\\-location\\index-submitButtons",tableAlert:"antd-pro\\pages\\-record\\-location\\index-tableAlert"}},"pV+/":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var l=n(a("BMrR"));a("iQDF");var r=n(a("+eQT"));a("jCWc");var o=n(a("kPKH"));a("5NDa");var d=n(a("5rEg"));a("+L6B");var i=n(a("2/Rp"));a("miYZ");var u=n(a("tsqr")),c=n(a("p0pE"));a("Awhp");var s=n(a("KrTs")),f=n(a("2Taf")),m=n(a("vZ4D")),p=n(a("MhPg")),h=n(a("l4Ni")),g=n(a("ujKo"));a("y8nQ");var y,b,v,w,E=n(a("Vl3Y")),x=O(a("q1tI")),T=n(a("KLZ9")),S=n(a("HZnN")),C=a("MuoO"),I=n(a("EUZL")),k=n(a("ufQ4")),R=n(a("EizR"));function F(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(F=function(e){return e?a:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=F(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}function z(e){var t=D();return function(){var a,n=(0,g.default)(e);if(t){var l=(0,g.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,h.default)(this,a)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var j=E.default.Item,M=(y=E.default.create(),b=(0,C.connect)(function(e){var t=e.user,a=e.locmodels,n=e.loading;return{currentUser:t.currentUser,tableData:a.pageData,loading:n.effects["locmodels/page"]}}),v=S.default.Secured("/record/location"),(0,k.default)(w=y(w=b(w=v(w=function(e){(0,p.default)(a,e);var t=z(a);function a(e){var n;return(0,f.default)(this,a),n=t.call(this,e),n.columns=[{title:"\u5361\u53f7",dataIndex:"msisdn",width:160},{title:"Iccid",dataIndex:"iccid",width:180},{title:"\u5ba2\u6237",dataIndex:"sName",width:220},{title:"\u6279\u6b21",dataIndex:"batch",width:220,render:function(e){return e||"--"}},{title:"\u7c7b\u578b",width:150,dataIndex:"locationTypeTxt"},{title:"\u7ecf\u7eac\u5ea6",width:150,dataIndex:"lng",render:function(e,t){return x.default.createElement(x.Fragment,null,null===e||void 0===e?"-":"".concat(e,";"),null===t.lat||void 0===t.lat?"-":t.lat,e&&t.lat?x.default.createElement("a",{href:"https://uri.amap.com/marker?position=".concat(e,",").concat(t.lat),target:"_blank",rel:"noopener noreferrer"}," ","\u5730\u56fe"):null)}},{title:"\u56fd\u5bb6",width:120,dataIndex:"countryName",render:function(e,t){return e||t.countryCode||"--"}},{title:"\u533a\u57df",width:120,dataIndex:"cityName",render:function(e,t){return e||t.cityCode||"--"}},{title:"\u72b6\u6001",width:120,dataIndex:"stateTxt",render:function(e,t){return x.default.createElement(x.Fragment,null,x.default.createElement(s.default,{status:n.showTips(t.state)}),e)}},{title:"\u5b9a\u4f4d\u65f6\u95f4",width:160,dataIndex:"locationTime"},{title:"\u63cf\u8ff0",width:200,dataIndex:"message"},{title:"\u65f6\u95f4",width:160,dataIndex:"updateTime"}],n.showTips=function(e){return 1===e?"success":0===e?"error":"processing"},n.handleStandardTableChange=function(e,t,a){var l=n.props.dispatch,r=n.state,o=r.formValues,d=r.curEntCode,i=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},u=Object.keys(t).reduce(function(e,a){var n=(0,c.default)({},e);return n[a]=i(t[a]),n},{});n.setState({pageSize:e.pageSize});var s=(0,c.default)({pageIndex:e.current-1,pageSize:e.pageSize,entCode:d},o,u);a.field&&(s.sorter="".concat(a.field,"_").concat(a.order)),l({type:"locmodels/page",payload:s})},n.handleSelectRows=function(e){n.setState({selectedRows:e})},n.onSelect=function(e){n.setState({curEntCode:e[0]});var t=n.state.pageSize,a=n.props.dispatch;a({type:"locmodels/page",payload:{pageIndex:0,pageSize:t,entCode:e[0]}})},n.handleSearch=function(e){e.preventDefault();var t=n.props,a=t.dispatch,l=t.form,r=n.state,o=r.pageSize,d=r.curEntCode;l.validateFields(function(e,t){if(!e){var l=t.bTime?"".concat(t.bTime.format("YYYY-MM-DD HH:mm:ss")):null,r=t.eTime?"".concat(t.eTime.format("YYYY-MM-DD HH:mm:ss")):null,i=(0,c.default)({},t,{pageIndex:0,pageSize:o,entCode:d,bTime:l,eTime:r});n.setState({formValues:t,bTime:l,eTime:r}),a({type:"locmodels/page",payload:i})}})},n.handleFormReset=function(){var e=n.state,t=e.pageSize,a=e.curEntCode,l=n.props,r=l.form,o=l.dispatch;r.resetFields(),n.setState({formValues:{}}),o({type:"locmodels/page",payload:{pageIndex:0,pageSize:t,entCode:a}})},n.handleExport=function(){var e=n.state.selectedRows;0!==e.length?n.exportToFile(e):u.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},n.handleExportAll=function(){var e=n.props.dispatch,t=n.state,a=t.formValues,l=t.curEntCode,r=t.eTime,o=t.bTime,d=(0,c.default)({entCode:l},a,{pageSize:10,pageIndex:0,bTime:o,eTime:r,downTask:!0});e({type:"locmodels/page",payload:d})},n.exportToFile=function(e){if(e&&0!==e.length){var t=e.map(function(e){return{"\u5361\u53f7":e.msisdn,Iccid:e.iccid,"\u5ba2\u6237":e.sName,"\u7ecf\u5ea6":e.lng,"\u7eac\u5ea6":e.lat,"\u56fd\u5bb6":e.countryName||e.countryCode,"\u533a\u57df":e.cityName||e.cityCode,"\u5b9a\u4f4d\u65f6\u95f4":e.locationTime,"\u72b6\u6001":e.stateTxt,"\u6279\u6b21":e.batch,"\u7c7b\u578b":e.locationTypeTxt,"\u63cf\u8ff0":e.message,"\u65f6\u95f4":e.updateTime}}),a=I.default.utils.json_to_sheet(t),n=I.default.utils.book_new();I.default.utils.book_append_sheet(n,a,"location"),I.default.writeFile(n,"\u5b9a\u4f4d\u8bb0\u5f55.xlsx")}else u.default.warning("\u65e0\u5b9a\u4f4d\u6570\u636e!")},n.renderOperator=function(){var e=n.state.exporting;return x.default.createElement(x.Fragment,null,x.default.createElement(i.default,{onClick:n.handleExport,loading:e,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),x.default.createElement(i.default,{style:{marginLeft:8},loading:e,onClick:n.handleExportAll},"\u5bfc\u51fa\u5168\u90e8"))},n.state={selectedRows:[],formValues:{},pageSize:10,exporting:!1,bTime:null,eTime:null},n}return(0,m.default)(a,[{key:"renderSearchForm",value:function(){var e=this.props.form.getFieldDecorator;return x.default.createElement(E.default,{onSubmit:this.handleSearch,layout:"inline"},x.default.createElement(l.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},x.default.createElement(o.default,{md:8,sm:24},x.default.createElement(j,{label:"\u5361\u53f7"},e("cNo")(x.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165\u5361\u53f7",allowClear:!0})))),x.default.createElement(o.default,{md:8,sm:24},x.default.createElement(j,{label:"\u5f00\u59cb\u65f6\u95f4"},e("bTime")(x.default.createElement(r.default,{showTime:!0,placeholder:"\u5f00\u59cb\u65f6\u95f4"})))),x.default.createElement(o.default,{md:8,sm:24},x.default.createElement(j,{label:"\u622a\u6b62\u65f6\u95f4"},e("eTime")(x.default.createElement(r.default,{showTime:!0,placeholder:"\u622a\u6b62\u65f6\u95f4"}))))),x.default.createElement(l.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},x.default.createElement(o.default,{md:8,sm:24},x.default.createElement(j,{label:"\u6279\u6b21"},e("batch")(x.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165\u6279\u6b21",allowClear:!0})))),x.default.createElement(o.default,{md:8,sm:24},x.default.createElement("span",{className:R.default.submitButtons},x.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),x.default.createElement(i.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))}},{key:"render",value:function(){var e=this.props,t=e.tableData,a=e.loading,n=e.currentUser,l=this.state.selectedRows,r={onSelect:this.onSelect,defaultSelectedKeys:[n.entCode]},o={scrollX:1e3,columns:this.columns,selectedRows:l,data:t,onChange:this.handleStandardTableChange,loading:a,onSelectRow:this.handleSelectRows,checkBox:!0,size:"small"};return x.default.createElement(x.default.Fragment,null,x.default.createElement(T.default,{entpriseInit:r,tableInit:o,SearchForm:this.renderSearchForm(),Operator:this.renderOperator()}))}}]),a}(x.Component))||w)||w)||w)||w),N=M;t.default=N}}]);