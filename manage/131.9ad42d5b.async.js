(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[131],{S8IL:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("5Dmo");var u=n(a("3S7+"));a("/zsF");var d=n(a("PArb"));a("+BJd");var o=n(a("mr32"));a("qVdP");var c=n(a("jsC+"));a("lUTK");var f=n(a("BvKs")),i=n(a("pVnL"));a("Pwec");var s=n(a("CtXQ")),p=n(a("SA+Z")),m=n(a("RIqP"));a("14J3");var h=n(a("BMrR"));a("+L6B");var g=n(a("2/Rp"));a("jCWc");var y=n(a("kPKH"));a("5NDa");var v=n(a("5rEg"));a("2qtc");var E=n(a("kLXV")),k=n(a("lwsE")),S=n(a("W8MJ")),C=n(a("a1gu")),x=n(a("Nsbk")),M=n(a("7W2i"));a("y8nQ");var w=n(a("Vl3Y"));a("ozfa");var b,K,I,P,A=n(a("MJZm")),R=l(a("q1tI")),D=n(a("KLZ9")),T=n(a("ufQ4")),N=n(a("wd/R")),F=n(a("HZnN")),L=n(a("usdK")),z=a("MuoO"),V=n(a("xTVP")),O=A.default.TreeNode,B=w.default.Item,j=(b=w.default.create(),K=(0,z.connect)(function(e){var t=e.roleManager,a=e.loading;return{roleAuths:t.roleAuths,roleAuthsLoading:a.effects["roleManager/getAuthById"],currentAuthsLoading:a.effects["roleManager/getcurrentauths"],treeData:t.treeData.tree,tableData:t.data,loading:a.effects["roleManager/getPage"],putLoading:a.effects["roleManager/put"]}}),I=F.default.Secured("/baseManager/roleManager"),(0,T.default)(P=b(P=K(P=I(P=function(e){function t(e){var a;return(0,k.default)(this,t),a=(0,C.default)(this,(0,x.default)(t).call(this,e)),a.handleFormCreate=function(){L.default.push("/baseManager/roleManager/create")},a.handleUpdate=function(e,t){L.default.push("/baseManager/roleManager/edit/".concat(t.id))},a.handleDel=function(e,t){E.default.confirm({title:"\u5220\u9664\u89d2\u8272",content:"\u5c5e\u4e8e\u8be5\u89d2\u8272\u7684\u7528\u6237\u4e5f\u4f1a\u88ab\u5220\u9664\uff0c\u786e\u5b9a\u5220\u9664[".concat(t.name,"]\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){var e=a.state,n=e.selectEntKey,l=e.pageIndex,r=a.props.tableData,u=a.defalutParams(n),d=l;1===r.list.length&&d>=1&&(u.page=d-1);var o=a.props.dispatch;o({type:"roleManager/delete",payload:{record:t,pageArgs:u}})}})},a.handleAuth=function(e){a.setState({activeIndex:e.id},function(){var t=a.props.dispatch;t({type:"roleManager/getAuthById",payload:e.id}).then(function(){var e=a.props.roleAuths.tree;a.setState({checkKeys:e})})})},a.handleStandardTableChange=function(e){var t=a.state.selectEntKey,n=a.defalutParams(t);a.setState({pageIndex:e.current-1,pageSize:e.pageSize},function(){n.pageSize=e.pageSize,n.page=e.current-1;var t=a.props.dispatch;t({type:"roleManager/getPage",payload:n})})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.onSelect=function(e){if(0!==e.length){a.setState({selectEntKey:e});var t=a.defalutParams(e),n=a.props.dispatch;n({type:"roleManager/getPage",payload:t})}},a.handleSearch=function(e){e.preventDefault();var t=a.props,n=t.dispatch,l=t.form;l.validateFields(function(e,t){e||a.setState({formValues:t},function(){var e=a.defalutParams();n({type:"roleManager/getPage",payload:e})})})},a.handleFormReset=function(){var e=a.props,t=e.form,n=e.dispatch;t.resetFields(),a.setState({formValues:{}},function(){var e=a.defalutParams();n({type:"roleManager/getPage",payload:e})})},a.handleMenuClick=function(){},a.renderSearchForm=function(){var e=a.props.form.getFieldDecorator;return R.default.createElement(w.default,{layout:"inline",onSubmit:a.handleSearch},R.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},R.default.createElement(y.default,{md:12,sm:24},R.default.createElement(B,{label:"\u89d2\u8272\u540d"},e("name")(R.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165"})))),R.default.createElement(y.default,{md:12,sm:24},R.default.createElement("span",{className:V.default.submitButtons},R.default.createElement(g.default,{type:"primary",htmlType:"submit",icon:"search"},"\u67e5\u8be2"),R.default.createElement(g.default,{style:{marginLeft:8},onClick:a.handleFormReset},"\u91cd\u7f6e")))))},a.savaAuths=function(){var e=a.props,t=e.roleAuths,n=e.dispatch,l=a.state.checkKeys,r=function(e){return l.filter(function(t){return t.key.indexOf(e)>-1}).map(function(e){var t=e.key.lastIndexOf("-")+1;return e.key.substr(t,e.key.length-t)})};t.menu=r("m-").join(),t.linkAuth=r("l-").join(),t.optAuth=r("o-").join(),n({type:"roleManager/put",payload:t})},a.treeChecked=function(e,t){var n=a.props.treeData,l=a.state.checkKeys,r=[];if(t.checked){var u=function e(t,a){var n=t.filter(function(e){return e.key===a});if(n.length>0)for(var l=0;l<n.length;l+=1)r.push(n[l]),e(t,n[l].pid)},d=e.checked[e.checked.length-1];u(n,d);var o=new Map;r.concat((0,m.default)(l)).forEach(function(e){o.set(e.key,e)}),a.setState({checkKeys:Array.from(o.values())})}else{var c=e.checked,f=l.filter(function(e){return-1===c.indexOf(e.key)})[0];r.push(f);var i=function e(t,a){var n=t.filter(function(e){return e.pid===a});if(n.length>0)for(var l=0;l<n.length;l+=1)r.push(n[l]),e(t,n[l].key)};i(l,f.key);for(var s=function(e){var t=l.findIndex(function(t){return t.key===r[e].key});l.splice(t,1)},p=0;p<r.length;p+=1)s(p);a.setState({checkKeys:l})}},a.allChecked=function(){var e=a.props.treeData,t=(0,p.default)(e),n=t.slice(0);a.setState({checkKeys:n})},a.noAllChecked=function(){a.setState({checkKeys:[]})},a.allExpand=function(){var e=a.props.treeData,t=e.map(function(e){return e.key});a.setState({defaultExpandedKeys:t})},a.allColse=function(){a.setState({defaultExpandedKeys:[]})},a.onExpand=function(e){a.setState({defaultExpandedKeys:e})},a.renderTreeNodes=function(e,t){for(var n=[],l=0;l<e.length;l+=1){var r=e[l];if(r.pid===t){var u=R.default.createElement(O,(0,i.default)({},r,{icon:R.default.createElement(s.default,{type:r.iconId,theme:"twoTone"})}),a.renderTreeNodes(e,r.key));n.push(u)}}return n},a.renderOperator=function(){var e=a.state.selectedRows,t=a.props.location.pathname,n=R.default.createElement(f.default,{onClick:a.handleMenuClick,selectedKeys:[]},R.default.createElement(f.default.Item,{key:"remove"},"\u5220\u9664"),R.default.createElement(f.default.Item,{key:"approval"},"\u6279\u91cf\u5ba1\u6279"));return R.default.createElement(R.Fragment,null,R.default.createElement(F.default,{authority:[t,"add"]},R.default.createElement(g.default,{icon:"plus",type:"primary",onClick:a.handleFormCreate},"\u65b0\u5efa")),e.length>0&&R.default.createElement("span",null,R.default.createElement(g.default,null,"\u6279\u91cf\u64cd\u4f5c"),R.default.createElement(c.default,{overlay:n},R.default.createElement(g.default,null,"\u66f4\u591a\u64cd\u4f5c ",R.default.createElement(s.default,{type:"down"})))))},a.rowClassName=function(e){var t=a.state.activeIndex;return e.id===t?"".concat(V.default["l-table-row-active"]):""},a.state={selectEntKey:[],selectedRows:[],formValues:{},pageSize:10,pageIndex:0,activeIndex:-1,checkKeys:[],defaultExpandedKeys:[]},a}return(0,M.default)(t,e),(0,S.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"roleManager/getcurrentauths"})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"roleManager/setcurrentauths",payload:{}}),e({type:"roleManager/setData",payload:{list:[],pagination:{}}})}},{key:"defalutParams",value:function(e){var t=this.state,a=t.formValues,n=t.pageSize,l=t.selectEntKey,r={entCode:e?e[0]:l[0],roleName:a.name,entName:a.entName,pageSize:n,page:0};return r}},{key:"render",value:function(){var e=this,t=this.props,a=t.tableData,n=t.loading,l=t.currentUser,c=t.roleAuthsLoading,f=t.treeData,i=t.putLoading,p=t.currentAuthsLoading,m=this.state,v=m.checkKeys,E=m.defaultExpandedKeys,k=m.activeIndex,S=m.selectedRows,C={onSelect:this.onSelect,defaultSelectedKeys:[l.entCode]},x={columns:[{width:80,title:"\u5e8f\u53f7",render:function(t,a,n){var l=e.state,r=l.pageIndex,u=l.pageSize;return r*u+n+1}},{title:"\u89d2\u8272\u540d",dataIndex:"name"},{title:"\u89d2\u8272\u8303\u56f4",dataIndex:"authRangeStr",render:function(e,t){var a=t.authRange?"volcano":"geekblue",n=20;return t.authRangeStr.length>n?R.default.createElement(o.default,{color:a},"".concat(t.authRangeStr.substr(0,20),"....")," "):R.default.createElement(o.default,{color:a},t.authRangeStr," ")}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime",render:function(e){return R.default.createElement("span",null,(0,N.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u64cd\u4f5c",render:function(t,a,n){var r=e.props.location.pathname;return R.default.createElement(R.Fragment,null,a.entCode>=l.entCode?R.default.createElement(R.Fragment,null,R.default.createElement(F.default,{authority:[r,"edit"]},R.default.createElement("a",{onClick:function(){return e.handleUpdate(!0,a)}},"\u7f16\u8f91")),R.default.createElement(F.default,{authority:[r,"delete"]},R.default.createElement(d.default,{type:"vertical"}),R.default.createElement("a",{onClick:function(t){t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),e.handleDel(!0,a)}},"\u5220\u9664")),R.default.createElement(d.default,{type:"vertical"}),R.default.createElement(F.default,{authority:[r,"edit"]},R.default.createElement("a",{onClick:function(t){t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),e.handleAuth(a,n)}},"\u6743\u9650\u5206\u914d"))):null)}}],selectedRows:S,data:a,onChange:this.handleStandardTableChange,loading:n,onSelectRow:this.handleSelectRows,rowKey:"id",rowClassName:this.rowClassName},M=function(){return R.default.createElement(R.Fragment,null,R.default.createElement(s.default,{type:"appstore",theme:"twoTone"}),"-",R.default.createElement("span",null,"\u83dc\u5355"),R.default.createElement(d.default,{type:"vertical"}),R.default.createElement(s.default,{type:"file",theme:"twoTone"}),"-",R.default.createElement("span",null,"\u9875\u9762"),R.default.createElement(d.default,{type:"vertical"}),R.default.createElement(s.default,{type:"tool",theme:"twoTone"}),"-",R.default.createElement("span",null,"\u64cd\u4f5c"))};return R.default.createElement(R.default.Fragment,null,R.default.createElement(h.default,{className:V.default.main,gutter:8},R.default.createElement(y.default,{span:18},R.default.createElement(D.default,{entpriseInit:C,tableInit:x,SearchForm:this.renderSearchForm(),Operator:this.renderOperator()})),R.default.createElement(y.default,{span:6},R.default.createElement(r.default,{title:M(),extra:k>-1?R.default.createElement(g.default,{type:"primary",onClick:this.savaAuths,loading:i},"\u4fdd\u5b58\u6743\u9650"):null,loading:c||p},R.default.createElement("div",{className:V.default.operation},R.default.createElement(u.default,{title:"\u5168\u9009"},R.default.createElement(s.default,{type:"check",className:V.default.icon,onClick:this.allChecked})),R.default.createElement(d.default,{type:"vertical"}),R.default.createElement(u.default,{title:"\u4e0d\u9009"},R.default.createElement(s.default,{type:"close",onClick:this.noAllChecked})),R.default.createElement(d.default,{type:"vertical"}),R.default.createElement(u.default,{title:"\u5168\u5c55\u5f00"},R.default.createElement(s.default,{type:"bars",onClick:this.allExpand})),R.default.createElement(d.default,{type:"vertical"}),R.default.createElement(u.default,{title:"\u6536\u7f29"},R.default.createElement(s.default,{type:"minus",onClick:this.allColse}))),f&&R.default.createElement(A.default,{onExpand:this.onExpand,expandedKeys:E,showIcon:!0,checkable:!0,checkStrictly:!0,onCheck:this.treeChecked,checkedKeys:v.map(function(e){return e.key})},this.renderTreeNodes(f,"m-0"))))))}}]),t}(R.Component))||P)||P)||P)||P),J=j;t.default=J},xTVP:function(e,t,a){e.exports={main:"antd-pro\\pages\\-base-manager\\-role-manager\\index-main","l-table-row-active":"antd-pro\\pages\\-base-manager\\-role-manager\\index-l-table-row-active"}}}]);