(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{eL9R:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var r=n(a("BMrR"));a("+L6B");var l=n(a("2/Rp"));a("jCWc");var s=n(a("kPKH"));a("5NDa");var u=n(a("5rEg")),d=n(a("p0pE"));a("2qtc");var o=n(a("kLXV"));a("/zsF");var i=n(a("PArb"));a("+BJd");var f=n(a("mr32")),c=n(a("2Taf")),m=n(a("vZ4D")),p=n(a("MhPg")),g=n(a("l4Ni")),h=n(a("ujKo"));a("y8nQ");var M,y,v,w,x=n(a("Vl3Y")),b=O(a("q1tI")),E=n(a("KLZ9")),S=a("LLXN"),k=n(a("wd/R")),P=n(a("HZnN")),N=n(a("EUZL")),R=n(a("3a4m")),D=a("MuoO"),F=n(a("wfWd"));function C(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(C=function(e){return e?a:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=C(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=r?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(n,l,s):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}function I(e){var t=L();return function(){var a,n=(0,h.default)(e);if(t){var r=(0,h.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,g.default)(this,a)}}function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var z=x.default.Item,T=(M=x.default.create(),y=(0,D.connect)(function(e){var t=e.user,a=e.userManager,n=e.loading;return{currentUser:t.currentUser,tableData:a.data,downloadData:a.downloadData,downloadLoading:n.effects["userManager/download"],loading:n.effects["userManager/getPage"]}}),v=P.default.Secured("/baseManager/userManager"),M(w=y(w=v(w=function(e){(0,p.default)(a,e);var t=I(a);function a(e){var n;return(0,c.default)(this,a),n=t.call(this,e),n.columns=[{width:80,key:"one",title:(0,S.formatMessage)({id:"user.index.columns.title.serialNumber",defaultMessage:"\u5e8f\u53f7"}),render:function(e,t,a){var r=n.state,l=r.pageIndex,s=r.pageSize;return l*s+a+1}},{width:150,title:(0,S.formatMessage)({id:"user.index.columns.title.loginName",defaultMessage:"\u7528\u6237\u540d"}),dataIndex:"userName"},{width:150,title:(0,S.formatMessage)({id:"user.index.columns.title.name",defaultMessage:"\u663e\u793a\u540d\u79f0"}),dataIndex:"name"},{width:150,title:(0,S.formatMessage)({id:"user.index.columns.title.state",defaultMessage:"\u72b6\u6001"}),dataIndex:"statusName",render:function(e,t){var a=0===t.status?"geekblue":"volcano";return b.default.createElement(f.default,{color:a},t.statusName," ")}},{width:250,title:(0,S.formatMessage)({id:"user.index.columns.title.organization",defaultMessage:"\u5f52\u5c5e\u7ec4\u7ec7"}),dataIndex:"enterpriseName"},{width:200,title:(0,S.formatMessage)({id:"user.index.columns.title.role",defaultMessage:"\u89d2\u8272"}),dataIndex:"roleName",render:function(e,t){var a=0===t.status?"geekblue":"volcano";return b.default.createElement(f.default,{color:a},t.roleName," ")}},{width:200,title:(0,S.formatMessage)({id:"user.index.columns.title.createTime",defaultMessage:"\u521b\u5efa\u65f6\u95f4"}),dataIndex:"createTime",render:function(e){return b.default.createElement("span",null,(0,k.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{fixed:"right",key:"opt",title:(0,S.formatMessage)({id:"user.index.columns.title.action",defaultMessage:"\u64cd\u4f5c"}),render:function(e,t){var a=n.props,r=a.location.pathname,l=a.currentUser;return t.enterprise===l.enterprise?null:b.default.createElement(b.Fragment,null,b.default.createElement(P.default,{authority:[r,"resetPassword"]},b.default.createElement("a",{onClick:function(){return n.handleResetPassword(!0,t)}}," ",(0,S.formatMessage)({id:"user.index.link.changePassword",defaultMessage:"\u4fee\u6539\u5bc6\u7801"})," ")),b.default.createElement(P.default,{authority:[r,"edit"]},b.default.createElement(i.default,{type:"vertical"}),b.default.createElement("a",{onClick:function(){return n.handleUpdate(!0,t)}}," ",(0,S.formatMessage)({id:"user.index.link.edit",defaultMessage:"\u7f16\u8f91"})," ")),b.default.createElement(P.default,{authority:[r,"delete"]},l.userName!==t.userName?b.default.createElement(b.Fragment,null,b.default.createElement(i.default,{type:"vertical"}),b.default.createElement("a",{onClick:function(){return n.handleDel(!0,t)}},(0,S.formatMessage)({id:"user.index.link.delete",defaultMessage:"\u5220\u9664"})," ")):null))}}],n.handleResetPassword=function(e,t){R.default.push("/baseManager/usermanager/resetpassword/".concat(t.userName))},n.handleFormCreate=function(){R.default.push("/baseManager/usermanager/create")},n.handleUpdate=function(e,t){R.default.push("/baseManager/usermanager/edit/".concat(t.id))},n.handleDel=function(e,t){o.default.confirm({title:(0,S.formatMessage)({id:"user.index.modal.title",defaultMessage:"\u5220\u9664\u7528\u6237"}),content:(0,S.formatMessage)({id:"user.index.modal.content",defaultMessage:"\u786e\u5b9a\u5220\u9664\u6b64\u7528\u6237\u5417\uff1f"}),okText:(0,S.formatMessage)({id:"user.index.modal.okText",defaultMessage:"\u786e\u5b9a"}),cancelText:(0,S.formatMessage)({id:"user.index.modal.cancelText",defaultMessage:"\u53d6\u6d88"}),onOk:function(){var e=n.state,a=e.selectEntKey,r=e.pageIndex,l=n.props.tableData,s=n.defalutParams(a),u=r;1===l.list.length&&u>=1&&(s.Page=u-1);var d=n.props.dispatch;d({type:"userManager/delete",payload:{record:t,pageArgs:s}})}})},n.handleStandardTableChange=function(e){var t=n.state.selectEntKey,a=n.defalutParams(t);n.setState({pageIndex:e.current-1,pageSize:e.pageSize},function(){a.pageSize=e.pageSize,a.page=e.current-1;var t=n.props.dispatch;t({type:"userManager/getPage",payload:a})})},n.handleSelectRows=function(e){n.setState({selectedRows:e})},n.onSelect=function(e){if(0!==e.length){n.setState({selectEntKey:e});var t=n.defalutParams(e),a=n.props.dispatch;a({type:"userManager/getPage",payload:t})}},n.handleSearch=function(e){e.preventDefault();var t=n.props,a=t.dispatch,r=t.form;r.validateFields(function(e,t){e||n.setState({formValues:t},function(){var e=n.defalutParams();a({type:"userManager/getPage",payload:e})})})},n.handleFormReset=function(){var e=n.props,t=e.form,a=e.dispatch;t.resetFields(),n.setState({formValues:{}},function(){var e=n.defalutParams();a({type:"userManager/getPage",payload:e})})},n.download=function(){var e=n.props,t=e.dispatch,a=e.form;a.validateFields(function(e,a){e||n.setState({formValues:a},function(){var e=n.defalutParams(),a=(0,d.default)({},e,{page:0,pageSize:2e6});t({type:"userManager/download",payload:a}).then(function(){var e=n.props.downloadData;if(e){var t=e.list.map(function(e){return{"\u7528\u6237\u540d":e.userName,"\u663e\u793a\u540d\u79f0":e.name,"\u72b6\u6001":e.statusName,"\u7ec4\u7ec7":e.enterpriseName,"\u89d2\u8272":e.roleName,"\u521b\u5efa\u65f6\u95f4":(0,k.default)(e.createTime).format("YYYY-MM-DD HH:mm:ss")}}),a=N.default.utils.json_to_sheet(t),r=N.default.utils.book_new();N.default.utils.book_append_sheet(r,a,"\u6570\u636e"),N.default.writeFile(r,"\u7528\u6237\u6570\u636e.xlsx")}})})})},n.handleMenuClick=function(){},n.renderSearchForm=function(){var e=n.props,t=e.form.getFieldDecorator,a=e.downloadLoading;return b.default.createElement(x.default,{layout:"inline",onSubmit:n.handleSearch},b.default.createElement(r.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},b.default.createElement(s.default,{md:8,sm:24},b.default.createElement(z,{label:(0,S.formatMessage)({id:"user.index.lable.loginName",defaultMessage:"\u7528\u6237\u540d"})},t("loginName")(b.default.createElement(u.default,{placeholder:(0,S.formatMessage)({id:"user.index.input.please.input",defaultMessage:"\u8bf7\u8f93\u5165"})})))),b.default.createElement(s.default,{md:8,sm:24},b.default.createElement(z,{label:(0,S.formatMessage)({id:"user.index.lable.name",defaultMessage:"\u663e\u793a\u540d\u79f0"})},t("name")(b.default.createElement(u.default,{placeholder:(0,S.formatMessage)({id:"user.index.input.please.input",defaultMessage:"\u8bf7\u8f93\u5165"})})))),b.default.createElement(s.default,{md:8,sm:24},b.default.createElement("span",{className:F.default.submitButtons},b.default.createElement(l.default,{type:"primary",htmlType:"submit",icon:"search"},(0,S.formatMessage)({id:"user.index.button.search",defaultMessage:"\u67e5\u8be2"})),b.default.createElement(l.default,{style:{marginLeft:8},onClick:n.handleFormReset},(0,S.formatMessage)({id:"user.index.button.reset",defaultMessage:"\u91cd\u7f6e"})),b.default.createElement(l.default,{style:{marginLeft:8},onClick:n.download,icon:"download",loading:a},(0,S.formatMessage)({id:"user.index.button.download",defaultMessage:"\u5bfc\u51fa"}))))))},n.renderOperator=function(){var e=n.props.location.pathname;return b.default.createElement(b.Fragment,null,b.default.createElement(P.default,{authority:[e,"add"]},b.default.createElement(l.default,{icon:"plus",type:"primary",onClick:n.handleFormCreate},(0,S.formatMessage)({id:"user.index.button.create",defaultMessage:"\u65b0\u5efa"}))))},n.state={selectEntKey:[],selectedRows:[],formValues:{},pageSize:10,pageIndex:0},n}return(0,m.default)(a,[{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"userManager/setData",payload:{list:[],pagination:{}}})}},{key:"defalutParams",value:function(e){var t=this.state,a=t.formValues,n=t.pageSize,r=t.selectEntKey,l={entCode:e?e[0]:r[0],loginName:a.loginName,name:a.name,pageSize:n,page:0};return l}},{key:"render",value:function(){var e=this.props,t=e.tableData,a=e.loading,n=e.currentUser,r=this.state.selectedRows,l={onSelect:this.onSelect,defaultSelectedKeys:[n.entCode]},s={columns:this.columns,selectedRows:r,data:t,onChange:this.handleStandardTableChange,loading:a,onSelectRow:this.handleSelectRows,rowKey:"id",scroll:{x:1366}};return b.default.createElement(b.default.Fragment,null,b.default.createElement(E.default,{entpriseInit:l,tableInit:s,SearchForm:this.renderSearchForm(),Operator:this.renderOperator()}))}}]),a}(b.Component))||w)||w)||w),j=T;t.default=j},wfWd:function(e,t,a){e.exports={tableListForm:"antd-pro\\pages\\-base-manager\\-user-manager\\index-tableListForm",submitButtons:"antd-pro\\pages\\-base-manager\\-user-manager\\index-submitButtons",tableAlert:"antd-pro\\pages\\-base-manager\\-user-manager\\index-tableAlert"}}}]);