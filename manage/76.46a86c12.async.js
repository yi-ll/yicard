(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{KOFc:function(e,t,a){e.exports={tableListForm:"antd-pro\\pages\\-my-account\\-over-draft\\index-tableListForm",submitButtons:"antd-pro\\pages\\-my-account\\-over-draft\\index-submitButtons",tableAlert:"antd-pro\\pages\\-my-account\\-over-draft\\index-tableAlert"}},WZdV:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("jehZ"));a("iQDF");var l=n(a("+eQT"));a("5NDa");var d=n(a("5rEg"));a("/zsF");var o=n(a("PArb"));a("14J3");var u=n(a("BMrR"));a("+L6B");var i=n(a("2/Rp"));a("jCWc");var c=n(a("kPKH"));a("+BJd");var s=n(a("mr32"));a("Pwec");var f=n(a("CtXQ")),m=n(a("2Taf")),p=n(a("vZ4D")),g=n(a("rlhR")),v=n(a("MhPg")),h=n(a("l4Ni")),y=n(a("ujKo")),E=n(a("p0pE"));a("y8nQ");var b=n(a("Vl3Y"));a("2qtc");var S,C,x,w,M=n(a("kLXV")),k=O(a("q1tI")),D=a("MuoO"),I=n(a("ZhIB")),F=n(a("HZnN")),z=n(a("KLZ9")),N=n(a("ufQ4")),V=n(a("wIm1")),Y=n(a("KOFc"));function B(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(B=function(e){return e?a:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=B(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=r?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(n,l,d):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}function T(e){var t=P();return function(){var a,n=(0,y.default)(e);if(t){var r=(0,y.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,h.default)(this,a)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var R=M.default.confirm,j=b.default.Item,L=(S=b.default.create(),C=(0,D.connect)(function(e){var t=e.user,a=e.overdraft,n=e.loading;return(0,E.default)({currentUser:t.currentUser},a,{loading:n.effects["overdraft/page"]})}),x=F.default.Secured("/myaccount/overdraft"),(0,N.default)(w=S(w=C(w=x(w=function(e){(0,v.default)(a,e);var t=T(a);function a(e){var n;return(0,m.default)(this,a),n=t.call(this,e),n.columns=[{title:"\u5ba2\u6237",dataIndex:"enterpriseName"},{title:"\u7533\u8bf7\u7528\u6237",dataIndex:"userName"},{title:"\u5ba1\u6838\u7528\u6237",dataIndex:"checkName"},{title:"\u72b6\u6001",dataIndex:"stateTxt",render:function(e,t){return k.default.createElement("div",null,k.default.createElement(f.default,{type:3===t.state?"arrow-down":"arrow-up",style:{color:3===t.state?"#eb2f96":"#52c41a"}})," ",e)}},{title:"\u8c03\u6574\u524d",dataIndex:"preAmount",render:function(e){return"\xa5 ".concat((0,I.default)(e).format("0,0.00"))}},{title:"\u8c03\u6574\u540e",dataIndex:"amount",render:function(e){return"\xa5 ".concat((0,I.default)(e).format("0,0.00"))}},{title:"\u7533\u8bf7\u989d\u5ea6",dataIndex:"requestQuota",render:function(e){return"\xa5 ".concat((0,I.default)(e).format("0,0.00"))}},{title:"\u6279\u51c6\u989d\u5ea6",dataIndex:"approvalQuota",render:function(e){return"\xa5 ".concat((0,I.default)(e).format("0,0.00"))}},{title:"\u65f6\u95f4",dataIndex:"updateTime"},{title:"\u5907\u6ce8",dataIndex:"remark",render:function(e){return k.default.createElement("div",{title:e},e&&e.length>5?"".concat(e.substring(0,5),"..."):e)}}],n.loadData=function(e){var t=n.props.dispatch;t({type:"overdraft/page",payload:e})},n.handleStandardTableChange=function(e,t,a){var r=n.props.currentUser,l=n.state,d=l.formValues,o=l.entCode,u=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},i=Object.keys(t).reduce(function(e,a){var n=(0,E.default)({},e);return n[a]=u(t[a]),n},{});n.setState({pageSize:e.pageSize});var c=(0,E.default)({pageIndex:e.current-1,pageSize:e.pageSize,entCode:o||r.entCode},d,i);a.field&&(c.sorter="".concat(a.field,"_").concat(a.order)),n.loadData(c)},n.onSelect=function(e,t){t&&t.selectedNodes&&t.selectedNodes.length>0&&(n.setState({selectEnterpriseName:t.selectedNodes[0].props.title}),n.loadAccount(t.selectedNodes[0].props.dataRef.id)),n.setState({entCode:e[0]});var a=n.state.pageSize,r=n.props.currentUser;n.loadData({pageIndex:0,pageSize:a,entCode:e[0]||r.entCode})},n.loadAccount=function(e){var t=n.props,a=t.dispatch,r=t.currentUser;a({type:"overdraft/clearAccount"}),n.setState({enterprise:e||r.enterprise}),a({type:"overdraft/getAccount",payload:e||r.enterprise})},n.handleFormReset=function(){var e=n.props,t=e.form,a=e.currentUser;t.resetFields(),n.setState({formValues:{}});var r=n.state.pageSize;n.loadData({pageIndex:0,pageSize:r,entCode:a.entCode})},n.handleSearch=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.currentUser,l=n.state.pageSize;a.validateFields(function(e,t){if(!e){var a=(0,E.default)({},t,{pageIndex:0,pageSize:l,entCode:r.entCode,begin:t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null});n.setState({formValues:t}),n.loadData(a)}})},n.handleExport=function(e){e.preventDefault();var t=n.props,a=t.dispatch,r=t.form,l=t.currentUser,d=n.state.pageSize;r.validateFields(function(e,t){if(!e){n.setState({exporting:!0});var r=(0,E.default)({},t,{pageIndex:0,pageSize:d,entCode:l.entCode,begin:t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,end:t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null,downTask:!0});n.setState({formValues:t}),a({type:"overdraft/page",payload:r}).then(function(){n.setState({exporting:!1})})}})},n.handleModalVisible=function(e){n.setState({updateModalVisible:!!e})},n.showModal=function(e){n.setState({updateModalVisible:!0,increase:e})},n.handleAdd=function(e){var t=(0,g.default)(n),a=n.state,r=a.enterprise,l=a.entCode,d=a.pageSize,o=a.increase;if(e){var u={requestQuota:e.requestQuota,destType:e.destType,enterprise:r,entCode:l,increase:o,remark:e.remark},i="".concat(o?"\u65b0\u589e\u989d\u5ea6":"\u9500\u552e\u6263\u8d39");R({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4".concat(i,"?"),onOk:function(){t.handleModalVisible();var e=t.props.dispatch;e({type:"overdraft/add",payload:u}).then(function(){t.loadData({pageIndex:0,pageSize:d,entCode:l})})}})}},n.state={selectEntKey:[],selectedRows:[],formValues:{},pageSize:10,entCode:void 0,exporting:!1,selectEnterpriseName:void 0,updateModalVisible:!1,enterprise:void 0,increase:!1},n}return(0,p.default)(a,[{key:"componentDidMount",value:function(){var e=this.props.currentUser;this.setState({entCode:e.entCode,selectEnterpriseName:e.enterpriseName}),this.loadAccount(e.enterprise)}},{key:"defalutParams",value:function(e){var t=this.state,a=t.formValues,n=t.pageSize,r=t.selectEntKey,l={entCode:e?e[0]:r[0],KeyWord:a.name,PageSize:n,Page:0};return l}},{key:"renderSimpleForm",value:function(){var e=this,t=this.props,a=t.form.getFieldDecorator,n=t.account,r=t.currentUser,f=r&&r.entCode&&r.entCode.length<=4,m=this.state,p=m.exporting,g=m.selectEnterpriseName;return k.default.createElement("div",{style:{marginLeft:10,paddingBottom:10}},f?k.default.createElement("div",{style:{marginBottom:10,paddingTop:20,backgroundColor:"#FFFBE5",border:"1px solid",borderColor:"#FDCC9B"}},k.default.createElement("div",null,k.default.createElement("p",null,k.default.createElement(s.default,{style:{marginLeft:30},color:"magenta"},"\u65b0\u589e\u989d\u5ea6/\u9500\u552e\u6263\u8d39\u6d41\u7a0b\uff1a")),k.default.createElement("p",null,k.default.createElement(s.default,{style:{marginLeft:60},color:"magenta"},"1\u3001\u8bf7\u5728\u5de6\u8fb9\u3010\u5ba2\u6237\u6811\u5217\u3011\u4e2d\u3010\u9009\u4e2d\u3011\u8981\u64cd\u4f5c\u7684\u3010\u76ee\u6807\u5ba2\u6237\u3011")),k.default.createElement("p",null,k.default.createElement(s.default,{style:{marginLeft:60},color:"magenta"},"2\u3001\u70b9\u51fb\u3010\u53f3\u8fb9\u3011\u6309\u94ae\u3010\u65b0\u589e\u989d\u5ea6\u3011\u6216\u3010\u9500\u552e\u6263\u8d39\u3011"))),k.default.createElement(u.default,{gutter:{md:8,lg:24,xl:48},style:{marginLeft:5,marginBottom:10}},k.default.createElement(c.default,{md:6,sm:24},k.default.createElement(j,{label:"\u76ee\u6807\u5ba2\u6237"},g)),k.default.createElement(c.default,{md:6,sm:24},k.default.createElement(j,{label:"\u5df2\u900f\u652f/\u53ef\u900f\u652f(\xa5)"},n.overdrawn||0,"/",n.overdraft||0)),k.default.createElement(c.default,{md:6,sm:24},k.default.createElement(j,{label:"\u5269\u4f59\u900f\u652f(\xa5)"},(n.overdraft||0)-(n.overdrawn||0).toFixed(3))),k.default.createElement(c.default,{md:6,sm:24},k.default.createElement(i.default,{type:"primary",onClick:function(){return e.showModal(!0)}},"\u65b0\u589e\u989d\u5ea6"),k.default.createElement(i.default,{type:"danger",style:{marginLeft:8},onClick:function(){return e.showModal(!1)}},"\u9500\u552e\u6263\u8d39")))):null,k.default.createElement(b.default,{onSubmit:this.handleSearch,layout:"inline"},f&&k.default.createElement(o.default,null,"\u8c03\u6574\u8bb0\u5f55"),k.default.createElement(u.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},k.default.createElement(c.default,{md:8,sm:24},k.default.createElement(j,{label:"\u5ba2\u6237"},a("enterpriseName")(k.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237",allowClear:!0})))),k.default.createElement(c.default,{md:8,sm:24},k.default.createElement(j,{label:"\u8c03\u6574\u5f00\u59cb"},a("begin")(k.default.createElement(l.default,{showTime:!0,placeholder:"\u8c03\u6574\u5f00\u59cb"})))),k.default.createElement(c.default,{md:8,sm:24},k.default.createElement(j,{label:"\u8c03\u6574\u622a\u6b62"},a("end")(k.default.createElement(l.default,{showTime:!0,placeholder:"\u8c03\u6574\u622a\u6b62"}))))),k.default.createElement(u.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},k.default.createElement(c.default,{md:8,sm:24},k.default.createElement("span",{className:Y.default.submitButtons},k.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),k.default.createElement(i.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),k.default.createElement(i.default,{style:{marginLeft:8},type:"primary",icon:"file-excel",loading:p,onClick:this.handleExport},"\u5bfc\u51fa\u5168\u90e8"))))))}},{key:"render",value:function(){var e=this.props,t=e.pageData,a=e.loading,n=e.currentUser,l=this.state,d=l.updateModalVisible,o=l.selectedRows,u=l.selectEnterpriseName,i=l.increase,c=n&&n.entCode&&n.entCode.length<=4,s={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible},f={onSelect:this.onSelect,defaultSelectedKeys:[n.entCode]},m={columns:this.columns,selectedRows:o,data:t,onChange:this.handleStandardTableChange,loading:a,size:"small"};return k.default.createElement("div",null,k.default.createElement(z.default,{entpriseInit:f,SearchForm:this.renderSimpleForm(),tableInit:m}),c?k.default.createElement(V.default,(0,r.default)({},s,{entName:u,increase:i,modalVisible:d})):null)}}]),a}(k.Component))||w)||w)||w)||w),A=L;t.default=A}}]);