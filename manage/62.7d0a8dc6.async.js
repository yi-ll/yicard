(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{"1sJy":function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-business\\-package\\-customer-package\\index-tableList",tableListOperator:"antd-pro\\pages\\-business\\-package\\-customer-package\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-business\\-package\\-customer-package\\index-tableListForm",submitButtons:"antd-pro\\pages\\-business\\-package\\-customer-package\\index-submitButtons",editableRow:"antd-pro\\pages\\-business\\-package\\-customer-package\\index-editableRow","ant-form-explain":"antd-pro\\pages\\-business\\-package\\-customer-package\\index-ant-form-explain"}},"sw+P":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M")),r=n(a("jehZ"));a("Pwec");var d=n(a("CtXQ"));a("14J3");var u=n(a("BMrR"));a("jCWc");var o=n(a("kPKH"));a("5NDa");var i=n(a("5rEg"));a("+L6B");var c=n(a("2/Rp"));a("+BJd");var p=n(a("mr32"));a("miYZ");var s=n(a("tsqr")),f=n(a("p0pE"));a("/zsF");var m=n(a("PArb"));a("Awhp");var g=n(a("KrTs")),y=n(a("2Taf")),h=n(a("vZ4D")),v=n(a("rlhR")),b=n(a("MhPg")),k=n(a("l4Ni")),E=n(a("ujKo"));a("Znn+");var T=n(a("ZTPi"));a("y8nQ");var C=n(a("Vl3Y"));a("2qtc");var x,S,D,P,z=n(a("kLXV")),w=A(a("q1tI")),I=a("MuoO"),V=n(a("ZhIB")),M=n(a("HZnN")),O=n(a("8WVO")),L=n(a("ufQ4")),R=n(a("zHco")),F=n(a("1sJy")),N=n(a("oVyD"));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(j=function(e){return e?a:t})(e)}function A(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=j(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=l?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(n,r,d):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}function B(e){var t=W();return function(){var a,n=(0,E.default)(e);if(t){var l=(0,E.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,k.default)(this,a)}}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var Z=z.default.confirm,J=C.default.Item,K=T.default.TabPane,U=(x=(0,I.connect)(function(e){var t=e.entConfig,a=e.customerpackagecfg,n=e.loading;return{entConfigData:t.entConfigData,pageData:a.pageData,delData:a.delData,entCode:a.entCode,pageLoading:n.effects["customerpackagecfg/page"],delLoading:n.effects["customerpackagecfg/del"]}}),S=C.default.create(),D=M.default.Secured("/business/package/customerpackage"),x(P=(0,L.default)(P=S(P=D(P=function(e){(0,b.default)(a,e);var t=B(a);function a(){var e;(0,y.default)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l)),e.state={pageIndex:1,pageSize:10,updateModalVisible:!1,formValues:{},price:0,uType:2,pType:1},e.columns=[{title:"\u7f16\u7801",dataIndex:"pkgNo",render:function(e){return w.default.createElement("span",null,e>0?"31".concat((Array(6).join(0)+e).slice(-6)):"--")}},{title:"\u5957\u9910\u540d\u79f0",dataIndex:"pName"},{title:"\u5957\u9910\u7c7b\u578b",dataIndex:"pTypeName"},{title:"\u6388\u6743",dataIndex:"id",render:function(e){return w.default.createElement("span",null,w.default.createElement(g.default,{status:e>0?"success":"error"}),e>0?"\u5df2\u6388\u6743":"\u672a\u6388\u6743")}},{title:"\u6807\u51c6\u8d44\u8d39",dataIndex:"guidingPrice",render:function(e){return w.default.createElement("span",{style:{color:"blue"}},"\xa5 ".concat((0,V.default)(e).format("0,0.00")))}},{title:"\u5957\u9910\u4ef7\u683c",dataIndex:"price",render:function(e){return w.default.createElement("span",{style:{color:"red"}},"\xa5 ".concat((0,V.default)(e).format("0,0.00")))}},{title:"\u5c5e\u6027",dataIndex:"oTypeTxt"},{title:"\u64cd\u4f5c",render:function(t,a){var n=e.props.location.pathname;return w.default.createElement("div",null,w.default.createElement(M.default,{authority:[n,"edit"]},w.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible("edit",a)}},a.id>0?"\u4fee\u6539\u5b9a\u4ef7":"\u5b9a\u4ef7\u6388\u6743")),a.id>0?w.default.createElement(w.Fragment,null,w.default.createElement(m.default,{type:"vertical"}),w.default.createElement(M.default,{authority:[n,"edit"]},w.default.createElement("a",{onClick:function(){return e.delPkg(a)}},"\u53d6\u6d88\u6388\u6743"))):null)}}],e.delPkg=function(t){var a=(0,v.default)(e),n=e.props.dispatch;Z({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u53d6\u6d88\u6388\u6743\u5e76\u5220\u9664\u5957\u9910\u3010".concat(t.pName,"\u3011\u4ef7\u683c\u914d\u7f6e?"),onOk:function(){n({type:"customerpackagecfg/delPkg",payload:t.id}).then(function(){var e={current:1,pageSize:10};a.handleStandardTableChange(e)})}})},e.handleStandardTableChange=function(t){e.setState({pageIndex:t.current}),e.setState({pageSize:t.pageSize});var a=e.state,n=a.uType,l=a.pType,r={pageIndex:t.current,pageSize:t.pageSize,uType:n,pType:l};e.loadData(r)},e.handleModalVisible=function(t){e.setState({updateModalVisible:!!t})},e.handleUpdateModalVisible=function(t,a){e.setState({updateModalVisible:!!t,formValues:a||{},price:a.price||0,guidingPrice:a.guidingPrice||0})},e.handleAdd=function(t){var a=e.props,n=a.dispatch,l=a.currentUser,r=e.state,d=r.formValues,u=r.pType;if(t){var o=(0,f.default)({},d,{price:t.price,uType:2,entCode:l.entCode,pType:u});n({type:"customerpackagecfg/post",payload:o}).then(function(){var t=e.state,a=t.pageIndex,n=t.pageSize,l=t.uType;e.loadData({pageIndex:a,pageSize:n,uType:l,pType:u})})}e.handleModalVisible()},e.toCopy=function(){var t=e.props.entConfigData,a=document.createElement("textarea");a.value="".concat(null===t||void 0===t?void 0:t.mobileUrl),a.setAttribute("readonly",""),a.style={position:"absolute",left:"-9999px"},document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),s.default.info("\u5df2\u7ecf\u6210\u529f\u590d\u5236")},e.handleFormReset=function(){var t=e.props.form;t.resetFields(),e.setState({formValues:{}});var a=e.state,n=a.uType,l=a.pageSize,r=a.entCode,d=a.pType;e.loadData({pageIndex:0,pageSize:l,uType:n,entCode:r,pType:d})},e.handleSearch=function(t){t.preventDefault();var a=e.props.form,n=e.state,l=n.uType,r=n.pageSize,d=n.entCode,u=n.pType;a.validateFields(function(t,a){if(!t){var n=(0,f.default)({},a,{pageIndex:0,pageSize:r,uType:l,entCode:d,pType:u});e.setState({formValues:a}),e.loadData(n)}})},e.onChange=function(t){e.setState({pType:t});var a=e.props.form;a.resetFields(),e.setState({formValues:{}});var n=e.state,l=n.uType,r=n.pageSize,d=n.entCode;e.loadData({pageIndex:0,pageSize:r,uType:l,entCode:d,pType:t})},e.loadData=function(t){var a=e.props.dispatch;a({type:"customerpackagecfg/page",payload:t})},e}return(0,h.default)(a,[{key:"componentDidMount",value:function(){var e=this.state,t=e.pageIndex,a=e.pageSize,n=e.uType,l=e.pType;this.loadData({pageIndex:t,pageSize:a,uType:n,pType:l})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"customerpackagecfg/clearRenew"})}},{key:"renderSimpleForm",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.entConfigData;return w.default.createElement("div",null,w.default.createElement("div",null,w.default.createElement("p",{style:{marginRight:12,display:"inline",fontWeight:"bolder"}},"C\u7aef\u5ba2\u6237\u516c\u4f17\u53f7 -> \u7eed\u8d39\u5730\u5740:"),w.default.createElement(p.default,{color:"magenta"},null===a||void 0===a?void 0:a.mobileUrl),w.default.createElement(c.default,{type:"danger",size:"small",ghost:!0,onClick:this.toCopy},"\u590d\u5236"),w.default.createElement("p",{style:{paddingTop:10}},w.default.createElement(p.default,{color:"blue"},"\u3010\u5f53\u524d\u4f01\u4e1a\u5ba2\u6237\u3011\u7ed9\u5176\u4e0b\u3010\u7ec8\u7aef\u5ba2\u6237\u3011\u914d\u7f6e\u3010\u5957\u9910\u7eed\u8d39\u3011\u4ef7\u683c\u3002\u3010\u6ce8\u610f\uff1a\u6b64\u4ef7\u683c\u4e0d\u5f97\u4f4e\u4e8e\u4ee3\u7406\u4ef7\u683c\uff0c\u5efa\u8bae\u53c2\u8003\u6307\u5bfc\u4ef7\u3011"))),w.default.createElement("div",{style:{paddingTop:20}},w.default.createElement(C.default,{onSubmit:this.handleSearch,layout:"inline"},w.default.createElement(u.default,{gutter:{md:8,lg:24,xl:48}},w.default.createElement(o.default,{md:8,sm:24},w.default.createElement(J,{label:"\u5957\u9910\u540d\u79f0"},t("pName")(w.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u540d\u79f0",allowClear:!0})))),w.default.createElement(o.default,{md:16,sm:24},w.default.createElement("span",{className:F.default.submitButtons},w.default.createElement(c.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),w.default.createElement(c.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))))}},{key:"render",value:function(){var e=this.props,t=e.pageData,a=e.pageLoading,n=this.state,u=n.updateModalVisible,o=n.price,i=n.guidingPrice,c={};t&&(c=t);var p={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible};return w.default.createElement(R.default,null,w.default.createElement(l.default,{bordered:!1},w.default.createElement("div",{className:F.default.tableList},w.default.createElement("div",{className:F.default.tableListForm},this.renderSimpleForm()),w.default.createElement(T.default,{defaultActiveKey:"1",onChange:this.onChange},w.default.createElement(K,{tab:w.default.createElement("span",null," ",w.default.createElement(d.default,{type:"fund"}),"\u57fa\u7840\u5305"),key:"1"},w.default.createElement(O.default,{scrollX:1e3,rowKey:"pkgNo",loading:a,data:c,columns:this.columns,size:"small",onChange:this.handleStandardTableChange})),w.default.createElement(K,{tab:w.default.createElement("span",null," ",w.default.createElement(d.default,{type:"rocket"}),"\u52a0\u6cb9\u5305"),key:"3"},w.default.createElement(O.default,{scrollX:1e3,rowKey:"pkgNo",loading:a,data:c,columns:this.columns,size:"small",onChange:this.handleStandardTableChange})))),w.default.createElement(N.default,(0,r.default)({},p,{price:o,guidingPrice:i,modalVisible:u}))))}}]),a}(w.PureComponent))||P)||P)||P)||P),X=U;t.default=X}}]);