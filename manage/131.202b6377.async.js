(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[131],{"458h":function(e,t,a){e.exports={tableListForm:"antd-pro\\pages\\-base-manager\\-user-audit-status\\index-tableListForm",submitButtons:"antd-pro\\pages\\-base-manager\\-user-audit-status\\index-submitButtons",tableAlert:"antd-pro\\pages\\-base-manager\\-user-audit-status\\index-tableAlert"}},tMJF:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var u=n(a("BMrR"));a("7Kak");var r=n(a("9yH6"));a("jCWc");var d=n(a("kPKH"));a("5NDa");var s=n(a("5rEg")),i=n(a("MVZn"));a("2qtc");var c=n(a("kLXV"));a("/zsF");var o=n(a("PArb"));a("+L6B");var f=n(a("2/Rp"));a("Telt");var p=n(a("Tckk"));a("Awhp");var m=n(a("KrTs")),h=n(a("lwsE")),g=n(a("W8MJ")),S=n(a("a1gu")),v=n(a("Nsbk")),y=n(a("7W2i"));a("y8nQ");var E,k,b,C,w=n(a("Vl3Y")),P=l(a("q1tI")),x=n(a("KLZ9")),F=n(a("HZnN")),R=a("MuoO"),T=n(a("ufQ4")),M=n(a("458h")),B=w.default.Item,I=function(e){return 1===e?"success":0===e?"error":"warning"},K=(E=w.default.create(),k=(0,R.connect)(function(e){var t=e.auditStatus,a=e.loading;return{tableData:t.data,loading:a.effects["auditStatus/getPage"]}}),b=F.default.Secured("/baseManager/userAuditStatus"),(0,T.default)(C=E(C=k(C=b(C=function(e){function t(e){var a;return(0,h.default)(this,t),a=(0,S.default)(this,(0,v.default)(t).call(this,e)),a.columns=[{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"auditStatusText",render:function(e,t){return P.default.createElement("span",null,P.default.createElement(m.default,{status:I(t.auditStatus)}),e)}},{title:"\u5fae\u4fe1\u6635\u79f0",dataIndex:"name"},{title:"\u5934\u50cf",dataIndex:"avatar",render:function(e){return P.default.createElement(p.default,{src:e})}},{title:"\u673a\u6784\u540d",dataIndex:"enterpriseName"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime"},{title:"\u5ba1\u6838",align:"left",render:function(e,t){var n=a.props.location.pathname;return P.default.createElement(P.Fragment,null,P.default.createElement(F.default,{authority:[n,"check"]},function(){switch(t.auditStatus){case 0:return P.default.createElement(P.Fragment,null,P.default.createElement(f.default,{type:"primary",htmlType:"submit",onClick:function(){return a.handleMenuClick(1,t)}},"\u5173\u6ce8"),P.default.createElement(o.default,{type:"vertical"}),P.default.createElement(f.default,{onClick:function(){return a.handleMenuClick(2,t)}},"\u53d6\u6d88\u5173\u6ce8"));case 1:return P.default.createElement(f.default,{onClick:function(){return a.handleMenuClick(2,t)}},"\u53d6\u6d88\u5173\u6ce8");default:return null}}()))}}],a.handleStandardTableChange=function(e){var t=a.state.selectEntKey,n=a.defalutParams(t);a.setState({pageSize:e.pageSize},function(){n.pageSize=e.pageSize,n.page=e.current-1;var t=a.props.dispatch;t({type:"auditStatus/getPage",payload:n})})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleSearch=function(e){e.preventDefault();var t=a.props,n=t.dispatch,l=t.form;l.validateFields(function(e,t){e||a.setState({formValues:t},function(){var e=a.defalutParams();n({type:"auditStatus/getPage",payload:e})})})},a.handleFormReset=function(){var e=a.props,t=e.form,n=e.dispatch;a.setState({auditstatus:99}),t.resetFields(),a.setState({formValues:{}},function(){var e=a.defalutParams();e.auditstatus=99,n({type:"auditStatus/getPage",payload:e})})},a.handleMenuClick=function(e,t){var n=a.props.dispatch;c.default.confirm({title:"\u5ba1\u6838",content:"\u786e\u5b9a".concat(2===e?"\u53d6\u6d88\u5173\u6ce8":"\u5141\u8bb8\u5173\u6ce8","\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){n({type:"auditStatus/put",payload:[(0,i.default)({},t,{auditStatus:e})]}).then(function(){var e=a.defalutParams();n({type:"auditStatus/getPage",payload:e})})}})},a.onSelect=function(e){if(0!==e.length){a.setState({selectEntKey:e});var t=a.defalutParams(e),n=a.props.dispatch;n({type:"auditStatus/getPage",payload:t})}},a.defalutParams=function(e){var t=a.state,n=t.formValues,l=t.pageSize,u=t.selectEntKey,r=t.auditstatus,d={entCode:e?e[0]:u[0],wxname:n.wxname,pageSize:l,page:0,auditstatus:r};return d},a.onChange=function(e){var t=a.props.dispatch;a.setState({auditstatus:e.target.value});var n=a.defalutParams();n.auditstatus=e.target.value,t({type:"auditStatus/getPage",payload:n})},a.handleCheck=function(e){for(var t=a.state.selectedRows,n=t,l=0;l<n.length;l+=1)n[l].auditStatus=e;var u=a.props.dispatch;u({type:"auditStatus/put",payload:n}).then(function(){var e=a.defalutParams();u({type:"auditStatus/getPage",payload:e})})},a.renderSearchForm=function(){var e=a.props.form.getFieldDecorator;return P.default.createElement(w.default,{layout:"inline",onSubmit:a.handleSearch},P.default.createElement(u.default,{gutter:{md:8,lg:24,xl:48}},P.default.createElement(d.default,{md:8,sm:24},P.default.createElement(B,{label:"\u5fae\u4fe1\u6635\u79f0"},e("wxname")(P.default.createElement(s.default,{placeholder:"\u8bf7\u8f93\u5165\u5fae\u4fe1\u6635\u79f0"})))),P.default.createElement(d.default,{md:8,sm:24},P.default.createElement(B,null,e("auditstatus",{initialValue:"99"})(P.default.createElement(r.default.Group,{buttonStyle:"solid",onChange:a.onChange},P.default.createElement(r.default.Button,{value:"99"},"\u5168\u90e8"),P.default.createElement(r.default.Button,{value:"0"},"\u5ba1\u6838\u4e2d"),P.default.createElement(r.default.Button,{value:"1"},"\u5df2\u901a\u8fc7"),P.default.createElement(r.default.Button,{value:"2"},"\u4e0d\u901a\u8fc7"))))),P.default.createElement(d.default,{md:8,sm:24},P.default.createElement("span",{className:M.default.submitButtons},P.default.createElement(f.default,{type:"primary",htmlType:"submit",icon:"search"},"\u67e5\u8be2"),P.default.createElement(f.default,{style:{marginLeft:8},onClick:a.handleFormReset},"\u91cd\u7f6e")))))},a.renderOperator=function(){var e=a.state.selectedRows,t=a.props.location.pathname;return P.default.createElement(P.Fragment,null,e.length>0&&P.default.createElement("span",null,P.default.createElement(F.default,{authority:[t,"check"]},P.default.createElement(f.default,{type:"primary",htmlType:"submit",onClick:function(){return a.handleCheck(1)}},"\u5173\u6ce8"),P.default.createElement(f.default,{style:{marginLeft:8},onClick:function(){return a.handleCheck(2)}},"\u53d6\u6d88\u5173\u6ce8"))))},a.state={selectEntKey:[],selectedRows:[],formValues:{},pageSize:10,auditstatus:99},a}return(0,y.default)(t,e),(0,g.default)(t,[{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"auditStatus/setPage",payload:{list:[],pagination:{}}})}},{key:"render",value:function(){var e=this.props,t=e.tableData,a=e.loading,n=e.currentUser,l=this.state.selectedRows,u={onSelect:this.onSelect,defaultSelectedKeys:[n.entCode]},r={columns:this.columns,selectedRows:l,data:t,onChange:this.handleStandardTableChange,loading:a,onSelectRow:this.handleSelectRows,checkBox:!0};return P.default.createElement(P.default.Fragment,null,P.default.createElement(x.default,{entpriseInit:u,tableInit:r,SearchForm:this.renderSearchForm(),Operator:this.renderOperator()}))}}]),t}(P.Component))||C)||C)||C)||C),z=K;t.default=z}}]);