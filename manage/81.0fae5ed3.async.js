(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[81],{KOFc:function(e,t,a){e.exports={tableListForm:"antd-pro\\pages\\-my-account\\-over-draft\\index-tableListForm",submitButtons:"antd-pro\\pages\\-my-account\\-over-draft\\index-submitButtons",tableAlert:"antd-pro\\pages\\-my-account\\-over-draft\\index-tableAlert"}},WZdV:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL"));a("iQDF");var d=n(a("+eQT"));a("5NDa");var o=n(a("5rEg"));a("/zsF");var u=n(a("PArb"));a("14J3");var i=n(a("BMrR"));a("+L6B");var s=n(a("2/Rp"));a("jCWc");var c=n(a("kPKH"));a("+BJd");var f=n(a("mr32"));a("Pwec");var m=n(a("CtXQ")),p=n(a("lwsE")),g=n(a("W8MJ")),v=n(a("a1gu")),h=n(a("Nsbk")),E=n(a("7W2i")),y=n(a("PJYZ")),b=n(a("MVZn"));a("y8nQ");var S=n(a("Vl3Y"));a("2qtc");var C,x,M,w,k,D=n(a("kLXV")),I=r(a("q1tI")),F=a("MuoO"),V=n(a("ZhIB")),z=n(a("HZnN")),N=n(a("KLZ9")),Y=n(a("ufQ4")),T=n(a("wIm1")),B=n(a("KOFc")),L=D.default.confirm,A=S.default.Item,U=(C=S.default.create(),x=(0,F.connect)(function(e){var t=e.user,a=e.overdraft,n=e.loading;return(0,b.default)({currentUser:t.currentUser},a,{loading:n.effects["overdraft/page"]})}),M=z.default.Secured("/myaccount/overdraft"),(0,Y.default)(w=C(w=x(w=M((k=function(e){function t(e){var a;return(0,p.default)(this,t),a=(0,v.default)(this,(0,h.default)(t).call(this,e)),a.columns=[{title:"\u5ba2\u6237",dataIndex:"enterpriseName"},{title:"\u7533\u8bf7\u7528\u6237",dataIndex:"userName"},{title:"\u5ba1\u6838\u7528\u6237",dataIndex:"checkName"},{title:"\u72b6\u6001",dataIndex:"stateTxt",render:function(e,t){return I.default.createElement("div",null,I.default.createElement(m.default,{type:3===t.state?"arrow-down":"arrow-up",style:{color:3===t.state?"#eb2f96":"#52c41a"}})," ",e)}},{title:"\u8c03\u6574\u524d",dataIndex:"preAmount",render:function(e){return"\xa5 ".concat((0,V.default)(e).format("0,0.00"))}},{title:"\u8c03\u6574\u540e",dataIndex:"amount",render:function(e){return"\xa5 ".concat((0,V.default)(e).format("0,0.00"))}},{title:"\u7533\u8bf7\u989d\u5ea6",dataIndex:"requestQuota",render:function(e){return"\xa5 ".concat((0,V.default)(e).format("0,0.00"))}},{title:"\u6279\u51c6\u989d\u5ea6",dataIndex:"approvalQuota",render:function(e){return"\xa5 ".concat((0,V.default)(e).format("0,0.00"))}},{title:"\u65f6\u95f4",dataIndex:"updateTime"},{title:"\u5907\u6ce8",dataIndex:"remark",render:function(e){return I.default.createElement("div",{title:e},e&&e.length>5?"".concat(e.substring(0,5),"..."):e)}}],a.loadData=function(e){var t=a.props.dispatch;t({type:"overdraft/page",payload:e})},a.handleStandardTableChange=function(e,t,n){var r=a.props.currentUser,l=a.state,d=l.formValues,o=l.entCode,u=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},i=Object.keys(t).reduce(function(e,a){var n=(0,b.default)({},e);return n[a]=u(t[a]),n},{});a.setState({pageSize:e.pageSize});var s=(0,b.default)({pageIndex:e.current-1,pageSize:e.pageSize,entCode:o||r.entCode},d,i);n.field&&(s.sorter="".concat(n.field,"_").concat(n.order)),a.loadData(s)},a.onSelect=function(e,t){t&&t.selectedNodes&&t.selectedNodes.length>0&&(a.setState({selectEnterpriseName:t.selectedNodes[0].props.title}),a.loadAccount(t.selectedNodes[0].props.dataRef.id)),a.setState({entCode:e[0]});var n=a.state.pageSize,r=a.props.currentUser;a.loadData({pageIndex:0,pageSize:n,entCode:e[0]||r.entCode})},a.loadAccount=function(e){var t=a.props,n=t.dispatch,r=t.currentUser;n({type:"overdraft/clearAccount"}),a.setState({enterprise:e||r.enterprise}),n({type:"overdraft/getAccount",payload:e||r.enterprise})},a.handleFormReset=function(){var e=a.props,t=e.form,n=e.currentUser;t.resetFields(),a.setState({formValues:{}});var r=a.state.pageSize;a.loadData({pageIndex:0,pageSize:r,entCode:n.entCode})},a.handleSearch=function(e){e.preventDefault();var t=a.props,n=t.form,r=t.currentUser,l=a.state.pageSize;n.validateFields(function(e,t){if(!e){var n=(0,b.default)({},t,{pageIndex:0,pageSize:l,entCode:r.entCode,begin:t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null});a.setState({formValues:t}),a.loadData(n)}})},a.handleExport=function(e){e.preventDefault();var t=a.props,n=t.dispatch,r=t.form,l=t.currentUser,d=a.state.pageSize;r.validateFields(function(e,t){if(!e){a.setState({exporting:!0});var r=(0,b.default)({},t,{pageIndex:0,pageSize:d,entCode:l.entCode,begin:t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null,downTask:!0});a.setState({formValues:t}),n({type:"overdraft/page",payload:r}).then(function(){a.setState({exporting:!1})})}})},a.handleModalVisible=function(e){a.setState({updateModalVisible:!!e})},a.showModal=function(e){a.setState({updateModalVisible:!0,increase:e})},a.handleAdd=function(e){var t=(0,y.default)((0,y.default)(a)),n=a.state,r=n.enterprise,l=n.entCode,d=n.pageSize,o=n.increase;if(e){var u={requestQuota:e.requestQuota,destType:e.destType,enterprise:r,entCode:l,increase:o,remark:e.remark},i="".concat(o?"\u65b0\u589e\u989d\u5ea6":"\u9500\u552e\u6263\u8d39");L({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4".concat(i,"?"),onOk:function(){t.handleModalVisible();var e=t.props.dispatch;e({type:"overdraft/add",payload:u}).then(function(){t.loadData({pageIndex:0,pageSize:d,entCode:l})})}})}},a.state={selectEntKey:[],selectedRows:[],formValues:{},pageSize:10,entCode:void 0,exporting:!1,selectEnterpriseName:void 0,updateModalVisible:!1,enterprise:void 0,increase:!1},a}return(0,E.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser;this.setState({entCode:e.entCode,selectEnterpriseName:e.enterpriseName}),this.loadAccount(e.enterprise)}},{key:"defalutParams",value:function(e){var t=this.state,a=t.formValues,n=t.pageSize,r=t.selectEntKey,l={entCode:e?e[0]:r[0],KeyWord:a.name,PageSize:n,Page:0};return l}},{key:"renderSimpleForm",value:function(){var e=this,t=this.props,a=t.form.getFieldDecorator,n=t.account,r=t.currentUser,l=r&&r.entCode&&r.entCode.length<=4,m=this.state,p=m.exporting,g=m.selectEnterpriseName;return I.default.createElement("div",{style:{marginLeft:10,paddingBottom:10}},l?I.default.createElement("div",{style:{marginBottom:10,paddingTop:20,backgroundColor:"#FFFBE5",border:"1px solid",borderColor:"#FDCC9B"}},I.default.createElement("div",null,I.default.createElement("p",null,I.default.createElement(f.default,{style:{marginLeft:30},color:"magenta"},"\u65b0\u589e\u989d\u5ea6/\u9500\u552e\u6263\u8d39\u6d41\u7a0b\uff1a")),I.default.createElement("p",null,I.default.createElement(f.default,{style:{marginLeft:60},color:"magenta"},"1\u3001\u8bf7\u5728\u5de6\u8fb9\u3010\u5ba2\u6237\u6811\u5217\u3011\u4e2d\u3010\u9009\u4e2d\u3011\u8981\u64cd\u4f5c\u7684\u3010\u76ee\u6807\u5ba2\u6237\u3011")),I.default.createElement("p",null,I.default.createElement(f.default,{style:{marginLeft:60},color:"magenta"},"2\u3001\u70b9\u51fb\u3010\u53f3\u8fb9\u3011\u6309\u94ae\u3010\u65b0\u589e\u989d\u5ea6\u3011\u6216\u3010\u9500\u552e\u6263\u8d39\u3011"))),I.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginLeft:5,marginBottom:10}},I.default.createElement(c.default,{md:6,sm:24},I.default.createElement(A,{label:"\u76ee\u6807\u5ba2\u6237"},g)),I.default.createElement(c.default,{md:6,sm:24},I.default.createElement(A,{label:"\u5df2\u900f\u652f/\u53ef\u900f\u652f(\xa5)"},n.overdrawn||0,"/",n.overdraft||0)),I.default.createElement(c.default,{md:6,sm:24},I.default.createElement(A,{label:"\u5269\u4f59\u900f\u652f(\xa5)"},(n.overdraft||0)-(n.overdrawn||0).toFixed(3))),I.default.createElement(c.default,{md:6,sm:24},I.default.createElement(s.default,{type:"primary",onClick:function(){return e.showModal(!0)}},"\u65b0\u589e\u989d\u5ea6"),I.default.createElement(s.default,{type:"danger",style:{marginLeft:8},onClick:function(){return e.showModal(!1)}},"\u9500\u552e\u6263\u8d39")))):null,I.default.createElement(S.default,{onSubmit:this.handleSearch,layout:"inline"},l&&I.default.createElement(u.default,null,"\u8c03\u6574\u8bb0\u5f55"),I.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},I.default.createElement(c.default,{md:8,sm:24},I.default.createElement(A,{label:"\u5ba2\u6237"},a("enterpriseName")(I.default.createElement(o.default,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237",allowClear:!0})))),I.default.createElement(c.default,{md:8,sm:24},I.default.createElement(A,{label:"\u8c03\u6574\u5f00\u59cb"},a("begin")(I.default.createElement(d.default,{showTime:!0,placeholder:"\u8c03\u6574\u5f00\u59cb"})))),I.default.createElement(c.default,{md:8,sm:24},I.default.createElement(A,{label:"\u8c03\u6574\u622a\u6b62"},a("end")(I.default.createElement(d.default,{showTime:!0,placeholder:"\u8c03\u6574\u622a\u6b62"}))))),I.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},I.default.createElement(c.default,{md:8,sm:24},I.default.createElement("span",{className:B.default.submitButtons},I.default.createElement(s.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),I.default.createElement(s.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),I.default.createElement(s.default,{style:{marginLeft:8},type:"primary",icon:"file-excel",loading:p,onClick:this.handleExport},"\u5bfc\u51fa\u5168\u90e8"))))))}},{key:"render",value:function(){var e=this.props,t=e.pageData,a=e.loading,n=e.currentUser,r=this.state,d=r.updateModalVisible,o=r.selectedRows,u=r.selectEnterpriseName,i=r.increase,s=n&&n.entCode&&n.entCode.length<=4,c={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible},f={onSelect:this.onSelect,defaultSelectedKeys:[n.entCode]},m={columns:this.columns,selectedRows:o,data:t,onChange:this.handleStandardTableChange,loading:a,size:"small"};return I.default.createElement("div",null,I.default.createElement(N.default,{entpriseInit:f,SearchForm:this.renderSimpleForm(),tableInit:m}),s?I.default.createElement(T.default,(0,l.default)({},c,{entName:u,increase:i,modalVisible:d})):null)}}]),t}(I.Component),w=k))||w)||w)||w)||w),H=U;t.default=H}}]);