(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{lKTT:function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-config\\-redis\\index-tableList",tableListOperator:"antd-pro\\pages\\-config\\-redis\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-config\\-redis\\index-tableListForm",submitButtons:"antd-pro\\pages\\-config\\-redis\\index-submitButtons"}},ztV7:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("J+/v");var d=n(a("MoRW"));a("IzEo");var r=n(a("bx4M"));a("qVdP");var i=n(a("jsC+"));a("Pwec");var o=n(a("CtXQ"));a("+L6B");var u=n(a("2/Rp"));a("lUTK");var c=n(a("BvKs")),s=n(a("MVZn"));a("2qtc");var f=n(a("kLXV"));a("/zsF");var p=n(a("PArb")),g=n(a("lwsE")),m=n(a("W8MJ")),h=n(a("a1gu")),v=n(a("Nsbk")),b=n(a("7W2i"));a("y8nQ");var y,k,E,w,x,S=n(a("Vl3Y")),C=l(a("q1tI")),I=a("MuoO"),z=n(a("usdK")),L=n(a("8WVO")),M=n(a("HZnN")),R=n(a("zHco")),T=n(a("ufQ4")),V=n(a("lKTT")),D=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},O=(y=(0,I.connect)(function(e){var t=e.redisconfig,a=e.loading;return{pageData:t.pageData,delData:t.delData,pageConfigLoading:a.effects["redisconfig/page"],delConfigLoading:a.effects["redisconfig/del"]}}),k=M.default.Secured("/config/redis"),E=S.default.create(),(0,T.default)(w=y(w=k(w=E((x=function(e){function t(){var e,a;(0,g.default)(this,t);for(var n=arguments.length,l=new Array(n),d=0;d<n;d++)l[d]=arguments[d];return a=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(l))),a.state={selectedRows:[],formValues:{},pageIndex:1,pageSize:10},a.columns=[{title:"\u670d\u52a1\u5730\u5740",dataIndex:"redisServer"},{title:"\u670d\u52a1\u5bc6\u7801",dataIndex:"password"},{title:"\u7aef\u53e3",dataIndex:"redisPort"},{title:"\u6570\u636e\u5e93\u7f16\u53f7",dataIndex:"dbNo"},{title:"\u64cd\u4f5c",render:function(e,t){var n=a.props.location.pathname;return C.default.createElement(C.Fragment,null,C.default.createElement(M.default,{authority:[n,"edit"]},C.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("edit",t)}},"\u914d\u7f6e")),C.default.createElement(M.default,{authority:[n,"delete"]},C.default.createElement(p.default,{type:"vertical"}),C.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("del",t)}},"\u5220\u9664")))}}],a.loadData=function(){var e=a.state,t=e.pageIndex,n=e.pageSize,l=a.props.dispatch;l({type:"redisconfig/page",payload:{pageIndex:t,pageSize:n}})},a.deleteItem=function(e){var t=a.props,n=t.dispatch,l=t.pageData,d=a.state,r=d.pageSize,i=d.pageIndex,o=i,u=l.list.length;1===u&&i>1&&(o-=1),n({type:"redisconfig/del",payload:{id:e.id,pageIndex:o,pageSize:r}})},a.handleUpdateModalVisible=function(e,t){switch(e){case"del":f.default.confirm({title:"\u5220\u9664\u914d\u7f6e",content:"\u786e\u5b9a\u5220\u9664\u8be5\u914d\u7f6e\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.deleteItem(t)}});break;case"edit":z.default.push("/config/redis/edit/".concat(t.id));break;default:break}},a.handleStandardTableChange=function(e,t,n){var l=a.props.dispatch,d=a.state.formValues,r=Object.keys(t).reduce(function(e,a){var n=(0,s.default)({},e);return n[a]=D(t[a]),n},{});a.setState({pageIndex:e.current}),a.setState({pageSize:e.pageSize});var i=(0,s.default)({pageIndex:e.current,pageSize:e.pageSize},d,r);n.field&&(i.sorter="".concat(n.field,"_").concat(n.order)),l({type:"redisconfig/page",payload:i})},a.handleMenuClick=function(e){var t=a.props.dispatch,n=a.state.selectedRows;if(n)switch(e.key){case"remove":t({type:"redisconfig/del",payload:{key:n.map(function(e){return e.key})}});break;default:break}},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleAdd=function(){z.default.push("/config/redis/add")},a}return(0,b.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.pageData,n=t.loading,l=t.location.pathname,s=t.currentUser,f=s&&s.entCode&&s.entCode.length<=4,p=this.state.selectedRows,g=C.default.createElement(c.default,{onClick:this.handleMenuClick,selectedKeys:[]},C.default.createElement(c.default.Item,{key:"remove"},"\u5220\u9664"));return C.default.createElement(R.default,null,f?C.default.createElement(r.default,{bordered:!1},C.default.createElement("div",{className:V.default.tableList},C.default.createElement("div",{className:V.default.tableListOperator},C.default.createElement(M.default,{authority:[l,"add"]},C.default.createElement(u.default,{icon:"plus",type:"primary",onClick:function(){return e.handleAdd()}},"\u65b0\u5efa")),C.default.createElement(u.default,{style:{marginLeft:8},icon:"reload",shape:"circle",onClick:this.loadData}),p.length>0&&C.default.createElement("span",null,C.default.createElement(u.default,null,"\u6279\u91cf\u64cd\u4f5c"),C.default.createElement(i.default,{overlay:g},C.default.createElement(u.default,null,"\u66f4\u591a\u64cd\u4f5c ",C.default.createElement(o.default,{type:"down"}))))),C.default.createElement(L.default,{scrollX:1e3,rowKey:"id",selectedRows:p,loading:n,data:a,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange}))):C.default.createElement(d.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),t}(C.PureComponent),w=x))||w)||w)||w)||w),K=O;t.default=K}}]);