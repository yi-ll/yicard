(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{GYi8:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("J+/v");var d=l(a("MoRW"));a("IzEo");var r=l(a("bx4M"));a("bbsP");var u=l(a("/wGt"));a("+BJd");var c=l(a("mr32"));a("OaEy");var i=l(a("2fM7"));a("14J3");var o=l(a("BMrR"));a("jCWc");var f=l(a("kPKH"));a("2qtc");var s=l(a("kLXV"));a("Q9mQ");var p=l(a("diRs"));a("+L6B");var m=l(a("2/Rp"));a("/zsF");var g=l(a("PArb"));a("5NDa");var h=l(a("5rEg"));a("5Dmo");var E=l(a("3S7+"));a("Pwec");var y=l(a("CtXQ")),k=l(a("lwsE")),v=l(a("W8MJ")),x=l(a("a1gu")),b=l(a("Nsbk")),C=l(a("7W2i")),T=l(a("PJYZ")),S=l(a("MVZn"));a("Znn+");var w=l(a("ZTPi"));a("y8nQ");var I,z,P,D,B=l(a("Vl3Y")),N=n(a("q1tI")),O=a("MuoO"),L=l(a("usdK")),F=l(a("8WVO")),M=l(a("ZhIB")),V=l(a("HZnN")),A=l(a("zHco")),R=l(a("ufQ4")),j=l(a("Xcz4")),U=l(a("phbF")),q=l(a("jQSo")),J=l(a("f+jP")),Q=B.default.Item,W=w.default.TabPane,Z=["","M","\u6761","\u6b21","\u5206\u949f"],K=["","\u6d41\u91cf","\u77ed\u4fe1","\u5b9a\u4f4d","\u8bed\u97f3"],X=["","\u57fa\u7840\u5305","\u7eed\u8d39\u5305","\u52a0\u6cb9\u5305"],H=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},Y=(I=(0,O.connect)(function(e){var t=e.packagecfg,a=e.loading;return(0,S.default)({},t,{tagsLoading:a.effects["packagecfg/getTags"],loading:a.effects["packagecfg/page"],delConfigLoading:a.effects["packagecfg/del"]})}),z=V.default.Secured("/config/package"),P=B.default.create(),(0,R.default)(D=I(D=z(D=P(D=function(e){function t(){var e,a;(0,k.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,x.default)(this,(e=(0,b.default)(t)).call.apply(e,[this].concat(n))),a.state={formValues:{},pageIndex:1,pageSize:10,pType:1,pkgId:null,addpkg:!1,editpkg:!1,relatedPkg:!1,selectTag:null},a.columns=[{title:"\u7f16\u7801",dataIndex:"id",width:80,render:function(e){return N.default.createElement("span",null,e>0?"31".concat((Array(6).join(0)+e).slice(-6)):"--")}},{title:N.default.createElement("span",null,"\u540d\u79f0\xa0",N.default.createElement(E.default,{title:"\u4fee\u6539\u540e\uff0c\u6309\u56de\u8f66\u63d0\u4ea4"},N.default.createElement(y.default,{type:"info-circle-o"}))),dataIndex:"pName",width:200,render:function(e,t,l){return N.default.createElement(h.default,{style:{width:190},className:J.default.inputNoBorder,maxLength:30,value:e,onPressEnter:function(e){return a.onChangeSubmit(e.target.value,t,"pName","\u540d\u79f0")},onChange:function(e){return a.handleChange(e.target.value,"pName",l)}})}},{title:"\u989d\u5ea6",dataIndex:"quota",width:80,render:function(e,t){return"".concat(e).concat(Z[t.bType])}},{title:N.default.createElement("span",null,"\u6807\u6ce8\xa0",N.default.createElement(E.default,{title:"\u4fee\u6539\u540e\uff0c\u6309\u56de\u8f66\u63d0\u4ea4"},N.default.createElement(y.default,{type:"info-circle-o"}))),dataIndex:"tags",width:200,render:function(e,t,l){return N.default.createElement(h.default,{style:{width:190},className:J.default.inputNoBorder,value:e,maxLength:30,onPressEnter:function(e){return a.onChangeSubmit(e.target.value,t,"tags","\u6807\u6ce8")},onChange:function(e){return a.handleChange(e.target.value,"tags",l)}})}},{title:"\u7c7b\u578b",dataIndex:"bType",width:80,render:function(e){return N.default.createElement("span",null,K[e])}},{title:"\u5468\u671f\u5355\u4f4d",dataIndex:"periodUnit",width:80,render:function(e){return 0===e?"\u81ea\u7136\u6708":"\u65e5"}},{title:"\u670d\u52a1\u671f",dataIndex:"pPeriod",width:80,render:function(e,t){return"".concat(e).concat(0===t.periodUnit?"\u4e2a\u6708":"\u65e5")}},{title:"\u6e05\u96f6\u5468\u671f",dataIndex:"cPeriod",width:80,render:function(e,t){return"".concat(e).concat(0===t.periodUnit?"\u4e2a\u6708":"\u65e5")}},{title:"\u5c5e\u6027",width:80,dataIndex:"oTypeTxt"},{title:"\u5305\u7c7b\u578b",width:80,dataIndex:"pType",render:function(e){return N.default.createElement("span",null,X[e])}},{title:"\u6807\u51c6\u8d44\u8d39",width:80,dataIndex:"price",render:function(e){return N.default.createElement("span",{style:{color:"blue"}},"\xa5 ".concat((0,M.default)(e).format("0,0.00")))}},{title:N.default.createElement("span",null,"\u7eed\u8d39\u6388\u6743\xa0",N.default.createElement(E.default,{title:"\u7eed\u8d39\u6388\u6743->A\u3001\u6388\u6743\u53ef\u7528\uff1a\u5219\u9700\u8981\u5361\u5f52\u5c5e\u7ec8\u7aef\u5ba2\u6237\u6388\u6743\u5b9a\u4ef7\u540e\u624d\u53ef\u4ee5\u7eed\u8d39\uff1bB\u3001\u59cb\u7ec8\u53ef\u7528\uff1a\u5361\u5f52\u5c5e\u7ec8\u7aef\u5ba2\u6237\u65e0\u9700\u6388\u6743\u5b9a\u4ef7\u4e5f\u53ef\u4ee5\u7eed\u8d39\uff0c\u4ef7\u683c\u6309\u5ba2\u6237\u7531\u4f4e\u5230\u9ad8\u9010\u7ea7\u8ffd\u6714"},N.default.createElement(y.default,{type:"question-circle-o"}))),dataIndex:"available",width:120,render:function(e){return N.default.createElement("span",{style:{color:0===e?"red":""}},0===e?"\u6388\u6743\u53ef\u7528":"\u59cb\u7ec8\u53ef\u7528")}},{title:"\u64cd\u4f5c",width:150,render:function(e,t){var l=a.props.location.pathname;return N.default.createElement(N.Fragment,null,N.default.createElement(V.default,{authority:[l,"edit"]},N.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("edit",t)}},"\u7f16\u8f91"),1===t.bType&&1===t.pType&&N.default.createElement(N.Fragment,null,N.default.createElement(g.default,{type:"vertical"}),N.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("related",t)}},"\u5173\u8054"))),N.default.createElement(V.default,{authority:[l,"delete"]},N.default.createElement(g.default,{type:"vertical"}),N.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("del",t)}},"\u5220\u9664")))}}],a.baseColumns=[],a.extendColumns=[],a.colExtend={title:N.default.createElement("span",null,"\u72ec\u7acb\u670d\u52a1\u671f\xa0",N.default.createElement(E.default,{title:"\u52a0\u6cb9\u5305\uff1a\u4ece\u6b64\u5957\u9910\u751f\u6548\u65e5\u671f\u5f00\u59cb\uff0c\u6839\u636e\u6b64\u5957\u9910\u670d\u52a1\u671f\u8ba1\u7b97\u3010\u622a\u6b62\u65e5\u671f\u3011\uff0c\u5982\u679c\u3010\u5361\u539f\u670d\u52a1\u622a\u6b62\u65e5\u671f\u3011\u5c0f\u4e8e\u3010\u6b64\u5957\u9910\u7684\u622a\u6b62\u65e5\u671f\u3011\uff0c\u5219\u53ef\u5ef6\u957f\u5361\u670d\u52a1\u671f\u81f3\u3010\u6b64\u5957\u9910\u7684\u622a\u6b62\u65e5\u671f\u3011"},N.default.createElement(y.default,{type:"question-circle-o"}))),dataIndex:"extend",width:120,render:function(e){return N.default.createElement("span",{style:{color:0===e?"":"red"}},0===e?"\u5426":"\u662f")}},a.colRelated={title:N.default.createElement("span",null,"\u5173\u8054\xa0",N.default.createElement(E.default,{title:"\u52a0\u6cb9\u5305\uff1a0=\u59cb\u7ec8\u53ef\u7528\uff08\u6b64\u52a0\u6cb9\u5305\u65e0\u9700\u4e0e\u57fa\u7840\u5305\u5173\u8054\u4e5f\u53ef\u7528\uff09\uff0c1=\u5173\u8054\u53ef\u7528\uff08\u6b64\u52a0\u6cb9\u5305\u5fc5\u987b\u4e0e\u57fa\u7840\u5305\u5173\u8054\u540e\u624d\u53ef\u7528\uff09"},N.default.createElement(y.default,{type:"question-circle-o"}))),dataIndex:"related",width:120,render:function(e){return N.default.createElement("span",{style:{color:0===e?"":"red"}},0===e?"\u59cb\u7ec8\u53ef\u7528":"\u5173\u8054\u53ef\u7528")}},a.colEntExtend={title:"\u5f52\u5c5e\u5ba2\u6237",dataIndex:"enterpriseName",align:"left",width:200},a.colBasePacakge={title:N.default.createElement("span",{style:{color:"red"}},"\u5173\u8054\u57fa\u7840\u5305"),align:"left",width:120,render:function(e,t){var l=a.props.basePackages,n=0===t.related?"--":N.default.createElement(p.default,{content:N.default.createElement("div",{style:{width:300,minHeight:300,overflowY:"auto"}},l?l.map(function(e){return N.default.createElement("div",{key:e},e)}):"\u6682\u65e0\u6570\u636e"),trigger:"click"},N.default.createElement(m.default,{onClick:function(){a.getBasePackage(t.id)}},"\u67e5\u770b"));return n}},a.colExpiry={title:N.default.createElement("span",null,"\u622a\u6b62\u65e5\u671f\xa0",N.default.createElement(E.default,{title:"\u7eed\u8d39\u622a\u6b62\u65e5\u671f\u914d\u7f6e\uff1a0=\u5168\u5c40\u914d\u7f6e\uff08\u91c7\u7528\u5168\u5c40\u914d\u7f6e\uff09\uff0c1=\u72ec\u7acb\u914d\u7f6e\uff08\u51fa\u5e93\u5361\u91c7\u7528\u6b64\u5957\u9910\u914d\u7f6e\uff09"},N.default.createElement(y.default,{type:"question-circle-o"}))),dataIndex:"expiry",width:120,render:function(e){return N.default.createElement("span",{style:{color:0===e?"":"red"}},0===e?"\u5168\u5c40\u914d\u7f6e":"\u72ec\u7acb\u914d\u7f6e")}},a.getBasePackage=function(e){var t=a.props.dispatch;e&&t({type:"packagecfg/getBasePackage",payload:{refuelPackage:e}})},a.getTags=function(e){var t=a.props.dispatch;t({type:"packagecfg/getTags",payload:{pType:e,pageIndex:1,pageSize:2e3}})},a.onChangeSubmit=function(e,t,l,n){var d=(0,S.default)({},t);d["".concat(l)]=e,s.default.confirm({title:"\u4fee\u6539".concat(n),content:"\u786e\u5b9a\u4fee\u6539".concat(n,"\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.onSubmit(d)}})},a.onSubmit=function(e){var t=a.props.dispatch;t({type:"packagecfg/post",payload:e})},a.handleChange=function(e,t,l){var n=e,d=a.props.pageData;d.list[l]["".concat(t)]=n;var r=a.props.dispatch;r({type:"packagecfg/pageSet",payload:(0,S.default)({},d)})},a.deleteItem=function(e){var t=a.props,l=t.dispatch,n=t.pageData,d=a.state,r=d.pageSize,u=d.pageIndex,c=u,i=n.list.length;1===i&&u>1&&(c-=1),l({type:"packagecfg/del",payload:{id:e.id,pageIndex:c,pageSize:r}})},a.handleUpdateModalVisible=function(e,t){switch(e){case"del":s.default.confirm({title:"\u5220\u9664\u914d\u7f6e",content:"\u786e\u5b9a\u5220\u9664\u8be5\u914d\u7f6e\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.deleteItem(t)}});break;case"edit":a.doDrawer(t.id,!0);break;case"related":a.doRelated(t.id,!0);break;case"com":L.default.push("/config/package/comb/".concat(t.id));break;default:break}},a.handleStandardTableChange=function(e,t,l){var n=a.state,d=n.formValues,r=n.pType,u=n.selectTag,c=Object.keys(t).reduce(function(e,a){var l=(0,S.default)({},e);return l[a]=H(t[a]),l},{});a.setState({pageIndex:e.current}),a.setState({pageSize:e.pageSize});var i=d.tags,o=(0,S.default)({pageIndex:e.current,pageSize:e.pageSize},d,c,{pType:r,tags:i||u});l.field&&(o.sorter="".concat(l.field,"_").concat(l.order)),a.loadData(o)},a.handleFormReset=function(){var e=a.state,t=e.pageSize,l=e.pType,n=a.props.form;n.resetFields(),a.setState({formValues:{}}),a.loadData({pageIndex:1,pageSize:t,pType:l})},a.handleSearch=function(e){e.preventDefault();var t=a.props.form,l=a.state,n=l.pageSize,d=l.pType;t.validateFields(function(e,t){if(!e){var l=(0,S.default)({},t,{pageIndex:1,pageSize:n,pType:d}),r=t.tags;r&&a.setState({selectTag:null}),a.setState({formValues:t}),a.loadData(l)}})},a.handleAdd=function(e,t){if(a.setState({addpkg:e}),!e&&t){var l=a.state,n=l.pageIndex,d=l.pageSize,r=l.pType;a.loadData({pageIndex:n,pageSize:d,pType:r})}},a.doDrawer=function(e,t,l){if(a.setState({pkgId:e,editpkg:t}),!t&&l){var n=a.state,d=n.pageIndex,r=n.pageSize,u=n.pType;a.loadData({pageIndex:d,pageSize:r,pType:u})}},a.doRelated=function(e,t){a.setState({pkgId:e,relatedPkg:t})},a.onChange=function(e){a.setState({pType:e,selectTag:null});var t=a.state.pageSize,l=a.props.form;l.resetFields(),a.setState({formValues:{}}),a.loadData({pageIndex:1,pageSize:t,pType:e}),a.getTags(e)},a.loadData=function(e){var t=a.props.dispatch;t({type:"packagecfg/page",payload:e})},a.handleExportAll=function(){var e=(0,T.default)((0,T.default)(a));s.default.confirm({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u5bfc\u51fa\u5168\u90e8?",onOk:function(){e.exportAll()}})},a.exportAll=function(){var e=a.state,t=e.formValues,l=e.pType,n=(0,S.default)({},t,{pType:l}),d=a.props.dispatch;d({type:"packagecfg/doExport",payload:n})},a.onTabClick=function(e){var t=a.state,l=t.selectTag,n=t.pageSize,d=t.pType;a.setState({selectTag:l===e?null:e}),a.loadData({pageIndex:1,pageSize:n,pType:d,tags:e})},a}return(0,C.default)(t,e),(0,v.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.currentUser,a=t&&t.entCode&&t.entCode.length<4;this.columns.map(function(t,a){return e.baseColumns.splice(a,0,t)}),this.columns.map(function(t,a){return e.extendColumns.splice(a,0,t)}),this.extendColumns.splice(10,0,this.colExtend),this.extendColumns.splice(11,0,this.colBasePacakge),this.extendColumns.splice(12,0,this.colRelated),a&&(this.baseColumns.splice(12,0,this.colEntExtend),this.extendColumns.splice(12,0,this.colEntExtend)),this.baseColumns.splice(11,0,this.colExpiry);var l=this.state,n=l.pageIndex,d=l.pageSize,r=l.pType;this.loadData({pageIndex:n,pageSize:d,pType:r}),this.getTags(r)}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return N.default.createElement("div",{style:{marginLeft:10,paddingBottom:10}},N.default.createElement(B.default,{onSubmit:this.handleSearch,layout:"inline"},N.default.createElement(o.default,{gutter:{md:8,lg:24,xl:48}},N.default.createElement(f.default,{md:8,sm:24},N.default.createElement(Q,{label:"\u540d\u79f0"},e("name")(N.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u540d\u79f0",allowClear:!0})))),N.default.createElement(f.default,{md:8,sm:24},N.default.createElement(Q,{label:"\u6807\u6ce8"},e("tags")(N.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u6ce8",allowClear:!0})))),N.default.createElement(f.default,{md:8,sm:24},N.default.createElement(Q,{label:"\u7f16\u7801"},e("pkgNo")(N.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u7f16\u7801",allowClear:!0}))))),N.default.createElement(o.default,{gutter:{md:8,lg:24,xl:48}},N.default.createElement(f.default,{md:8,sm:24},N.default.createElement(Q,{label:"\u7c7b\u578b"},e("bType")(N.default.createElement(i.default,{style:{minWidth:160},placeholder:"\u8bf7\u9009\u62e9\u7c7b\u578b",allowClear:!0},N.default.createElement(i.default.Option,{key:1,value:1},"\u6d41\u91cf"),N.default.createElement(i.default.Option,{key:2,value:2},"\u77ed\u4fe1"),N.default.createElement(i.default.Option,{key:3,value:3},"\u5b9a\u4f4d"),N.default.createElement(i.default.Option,{key:4,value:4},"\u8bed\u97f3"))))),N.default.createElement(f.default,{md:8,sm:24},N.default.createElement("span",{className:J.default.submitButtons},N.default.createElement(m.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),N.default.createElement(m.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))),N.default.createElement(f.default,{md:8,sm:24}," "))))}},{key:"render",value:function(){var e=this,t=this.props,a=t.pageData,l=t.loading,n=t.location.pathname,i=t.currentUser,o=t.tags,f=i&&i.entCode&&i.entCode.length<=4,s=this.state,p=s.pkgId,g=s.addpkg,h=s.editpkg,E=s.relatedPkg,k=s.selectTag,v="80%";return N.default.createElement(A.default,null,f?N.default.createElement(r.default,{bordered:!1},N.default.createElement("div",{className:J.default.tableList},N.default.createElement("div",{className:J.default.tableListOperator},this.renderSimpleForm(),N.default.createElement(V.default,{authority:[n,"add"]},N.default.createElement(m.default,{style:{marginLeft:8},icon:"plus",type:"primary",onClick:function(){return e.handleAdd(!0)}},"\u65b0\u5efa"),N.default.createElement(m.default,{style:{marginLeft:8},onClick:this.handleExportAll},"\u5bfc\u51fa\u5168\u90e8"),N.default.createElement(c.default,{color:"red"},"\u8bf4\u660e\uff1a\u76f4\u63a5\u5728\u5217\u8868\u4e2d\u4fee\u6539\u5957\u9910\u540d\u79f0\u3001\u6807\u6ce8\u540e\uff0c\u8bf7\u6309\u56de\u8f66\u952e\u63d0\u4ea4"))),N.default.createElement("div",{className:J.default.tags},o&&o.list&&o.list.length>0&&N.default.createElement(w.default,{style:{height:40},onTabClick:function(t){return e.onTabClick(t)},tabBarGutter:0,className:J.default.tags},o.list.map(function(e){return N.default.createElement(W,{tab:N.default.createElement(c.default,{title:"\u9009\u62e9\u6807\u6ce8\uff1a".concat(e.name),color:k===e.name?"magenta":""},e.name),key:e.name})}))),N.default.createElement(w.default,{defaultActiveKey:"1",onChange:this.onChange},N.default.createElement(W,{tab:N.default.createElement("span",null," ",N.default.createElement(y.default,{type:"fund"}),"\u57fa\u7840\u5305"),key:"1"},N.default.createElement(F.default,{scrollX:1e3,rowKey:"id",rowSelection:null,loading:l,data:a,columns:this.baseColumns,onChange:this.handleStandardTableChange})),N.default.createElement(W,{tab:N.default.createElement("span",null," ",N.default.createElement(y.default,{type:"rocket"}),"\u52a0\u6cb9\u5305"),key:"3"},N.default.createElement(F.default,{scrollX:1e3,rowKey:"id",rowSelection:null,loading:l,data:a,columns:this.extendColumns,onChange:this.handleStandardTableChange}))),N.default.createElement(u.default,{title:"\u65b0\u589e\u5957\u9910",width:v,onClose:function(){return e.handleAdd(!1,!1)},visible:g,destroyOnClose:!0,placement:"right"},N.default.createElement(j.default,{onClose:function(){return e.handleAdd(!1,!0)}})),N.default.createElement(u.default,{title:"\u7f16\u8f91\u5957\u9910",width:v,onClose:function(){return e.doDrawer(null,!1,!1)},visible:h,destroyOnClose:!0,placement:"right"},N.default.createElement(U.default,{id:p,onClose:function(){return e.doDrawer(null,!1,!0)}})),N.default.createElement(u.default,{title:"\u5173\u8054\u52a0\u6cb9\u5305",width:"100%",onClose:function(){return e.doRelated(null,!1)},visible:E,destroyOnClose:!0,placement:"right"},N.default.createElement(q.default,{id:p,onClose:function(){return e.doRelated(null,!1)}})))):N.default.createElement(d.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),t}(N.PureComponent))||D)||D)||D)||D),G=Y;t.default=G},"f+jP":function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-config\\-package\\index-tableList",tableListOperator:"antd-pro\\pages\\-config\\-package\\index-tableListOperator",tags:"antd-pro\\pages\\-config\\-package\\index-tags",tableListForm:"antd-pro\\pages\\-config\\-package\\index-tableListForm",submitButtons:"antd-pro\\pages\\-config\\-package\\index-submitButtons",inputNoBorder:"antd-pro\\pages\\-config\\-package\\index-inputNoBorder"}}}]);