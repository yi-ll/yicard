(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{ilPF:function(e,t,n){"use strict";var a=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("J+/v");var r=a(n("MoRW"));n("IzEo");var l=a(n("bx4M"));n("g9YV");var c=a(n("wCAj"));n("14J3");var o=a(n("BMrR"));n("jCWc");var d=a(n("kPKH"));n("iQDF");var u=a(n("+eQT"));n("2qtc");var i=a(n("kLXV"));n("MXD1");var s=a(n("CFYs"));n("T2oS");var f=a(n("W9HT"));n("+L6B");var p=a(n("2/Rp"));n("5Dmo");var m=a(n("3S7+"));n("Pwec");var y=a(n("CtXQ"));n("+BJd");var g=a(n("mr32")),v=a(n("2Taf")),h=a(n("vZ4D")),w=a(n("MhPg")),b=a(n("l4Ni")),E=a(n("ujKo")),k=a(n("p0pE"));n("y8nQ");var R,S,x,T,D=a(n("Vl3Y")),C=Y(n("q1tI")),M=n("MuoO"),I=a(n("wd/R")),O=a(n("HZnN")),L=a(n("ufQ4")),P=a(n("zHco")),F=a(n("s2ei"));function N(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(N=function(e){return e?n:t})(e)}function Y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=N(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=r?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(a,l,c):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}function j(e){var t=B();return function(){var n,a=(0,E.default)(e);if(t){var r=(0,E.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,b.default)(this,n)}}function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var z=D.default.Item,H=(R=(0,M.connect)(function(e){var t=e.synctransfer,n=e.loading,a=e.user;return(0,k.default)({},t,{currentUser:a.currentUser,loading:n.effects["synctransfer/page"],syncLoing:n.effects["synctransfer/sync"]})}),S=O.default.Secured("/config/synctransfer"),x=D.default.create(),R(T=S(T=(0,L.default)(T=x(T=function(e){(0,w.default)(n,e);var t=j(n);function n(){var e;(0,v.default)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),e.columns=[{title:"\u5361\u6e90",dataIndex:"id",width:220,className:"".concat(F.default.clickRowStyle0),render:function(t,n,a){var r=e.props.currentUser,l=r&&r.entCode&&1===r.entCode.length,c=l?4:3,o=n.cName,d=n.enterpriseName,u=l&&d,i=u?C.default.createElement(g.default,{color:"green"},d):"",s=u?C.default.createElement("span",null,C.default.createElement("br",null)):"",f={children:C.default.createElement("span",null,o,s,i),props:{}};return(a+1)%c!==1&&(f.props.colSpan=0),f.props.rowSpan=c,f}},{title:"\u7c7b\u578b",dataIndex:"comId",width:180,render:function(t,n){var a=n.syncType,r=n.syncTypeTxt,l=e.props.syncLoing,c="\u3010\u5b9e\u65f6\u72b6\u6001\u3011\u5305\u62ec\uff1a\u5361\u72b6\u6001\u7b49",o="cyan";return 2===a&&(c="\u3010\u9759\u6001\u6570\u636e\u3011\u5305\u62ec\uff1a\u4e09\u7801\uff08Msisdn,Iccid,Imsi\uff09\u3001\u5f00\u6237\u65e5\u671f\u3001\u6fc0\u6d3b\u65e5\u671f\u7b49",o="volcano"),3===a&&(c="\u3010\u5b9e\u65f6\u6570\u636e\u3011\u5305\u62ec\uff1a\u5df2\u7528\u6d41\u91cf\u3001\u5957\u9910\u6d41\u91cf\u3001\u5df2\u7528\u77ed\u4fe1\u3001\u5957\u9910\u77ed\u4fe1\u3001\u5df2\u7528\u8bed\u97f3\u3001,\u5957\u9910\u8bed\u97f3\u3001\u6570\u636e\u65e5\u671f\u7b49",o="green"),4===a&&(c="\u3010\u5b9e\u65f6\u6570\u636e\u3011\u5305\u62ec\uff1a\u5df2\u7528\u6d41\u91cf\u3001\u5957\u9910\u6d41\u91cf\u3001\u5df2\u7528\u77ed\u4fe1\u3001\u5957\u9910\u77ed\u4fe1\u3001\u5df2\u7528\u8bed\u97f3\u3001,\u5957\u9910\u8bed\u97f3\u3001\u6570\u636e\u65e5\u671f\u7b49",o="geekblue"),C.default.createElement("div",null,C.default.createElement(g.default,{color:o},r),C.default.createElement(m.default,{title:c},C.default.createElement(y.default,{type:"question-circle-o"})),"\xa0\xa0",C.default.createElement(p.default,{loading:l,icon:"cloud-sync",title:"\u70b9\u51fb\u5f00\u59cb\u540c\u6b65-".concat(r),type:"primary",ghost:!0,size:"small",onClick:function(){return e.syncData(t,a,r)}},"\u540c\u6b65"))}},{title:"\u5f00\u59cb",width:150,dataIndex:"beginTime",render:function(e){return e||"--"}},{title:"\u7ed3\u675f",width:150,dataIndex:"endTime",render:function(e,t){var n=e||C.default.createElement("div",null,C.default.createElement(f.default,{size:"small"}),"\xa0\xa0\u540c\u6b65\u4e2d...");return t.beginTime||(n="--"),n}},{title:"\u8017\u65f6",width:100,dataIndex:"duration",render:function(e){return e||"--"}},{title:"\u8fdb\u5ea6",dataIndex:"percentage",width:150,render:function(e){return C.default.createElement("div",{style:{marginRight:15}},C.default.createElement(s.default,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:e,status:"active"}))}},{title:"\u6210\u529f/\u603b\u6570",dataIndex:"total",render:function(e,t){var n=t.success;return C.default.createElement("span",null,n,"/",e)}},{title:"\u66f4\u65b0",width:150,dataIndex:"updateTime",render:function(e,t){var n=e;return t.beginTime||(n="--"),n}},{title:"\u6570\u636e\u65e5\u671f",width:120,dataIndex:"dataTime",render:function(e){return e?(0,I.default)(e).format("YYYY-MM-DD"):"--"}}],e.loadData=function(t){var n=e.props,a=n.dispatch,r=n.currentUser,l=4===r.entCode.length?r.enterprise:null;a({type:"synctransfer/page",payload:(0,k.default)({},t,{enterprise:l})||{date:null,enterprise:l}})},e.syncData=function(t,n,a){i.default.confirm({title:"\u540c\u6b65",content:"\u786e\u5b9a\u540c\u6b65".concat(a,"\u6570\u636e\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){var a=e.props.dispatch;a({type:"synctransfer/sync",payload:{comId:t,syncType:n}})}})},e.handleFormReset=function(){var t=e.props.form;t.resetFields(),e.loadData()},e.handleSearch=function(t){t.preventDefault();var n=e.props.form;n.validateFields(function(t,n){if(!t){var a=n.date?"".concat(n.date.format("YYYY-MM-DD HH:mm:ss")):null,r=(0,k.default)({},n,{date:a});e.loadData(r)}})},e.setRowClassName=function(e){return 1===e.syncType?F.default.clickRowStyle1:2===e.syncType?F.default.clickRowStyle2:3===e.syncType?F.default.clickRowStyle3:F.default.clickRowStyle4},e}return(0,h.default)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"renderSearchForm",value:function(){var e=this.props.form.getFieldDecorator;return C.default.createElement(D.default,{onSubmit:this.handleSearch,layout:"inline"},C.default.createElement(o.default,{gutter:{md:8,lg:24,xl:48}},C.default.createElement(d.default,{md:8,sm:8},C.default.createElement(z,{label:"\u65f6\u95f4"},e("date")(C.default.createElement(u.default,{placeholder:"\u65f6\u95f4"})))),C.default.createElement(d.default,{md:8,sm:8},C.default.createElement("span",{className:F.default.submitButtons},C.default.createElement(p.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),C.default.createElement(p.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),C.default.createElement(g.default,{style:{marginLeft:8},color:"green"},"\u6700\u8fd1\u4e00\u6b21\u6570\u636e\u540c\u6b65\u4fe1\u606f")))))}},{key:"render",value:function(){var e=this.props,t=e.syncDatas,n=e.loading,a=e.currentUser,o=a&&a.entCode&&a.entCode.length<=4,d=a&&a.entCode&&1===a.entCode.length,u=d?12:9,i={defaultPageSize:u,total:t.length||0,pageSize:u,showTotal:function(e,t){return"\u5f53\u524d\uff1a".concat(t[0],"-").concat(t[1],"  \u603b\u6570\uff1a").concat(e)}};return C.default.createElement(P.default,null,o?C.default.createElement(l.default,{bordered:!1},C.default.createElement("div",{className:F.default.tableList},C.default.createElement("div",{className:F.default.tableListOperator},this.renderSearchForm()),C.default.createElement(c.default,{loading:n,pagination:i,columns:this.columns,dataSource:t,bordered:!0,rowClassName:this.setRowClassName,size:"middle"}))):C.default.createElement(r.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),n}(C.PureComponent))||T)||T)||T)||T),W=H;t.default=W},s2ei:function(e,t,n){e.exports={tableList:"antd-pro\\pages\\-config\\-sync-transfer\\index-tableList",tableListOperator:"antd-pro\\pages\\-config\\-sync-transfer\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-config\\-sync-transfer\\index-tableListForm",submitButtons:"antd-pro\\pages\\-config\\-sync-transfer\\index-submitButtons",clickRowStyle0:"antd-pro\\pages\\-config\\-sync-transfer\\index-clickRowStyle0",clickRowStyle1:"antd-pro\\pages\\-config\\-sync-transfer\\index-clickRowStyle1",clickRowStyle2:"antd-pro\\pages\\-config\\-sync-transfer\\index-clickRowStyle2",clickRowStyle3:"antd-pro\\pages\\-config\\-sync-transfer\\index-clickRowStyle3",clickRowStyle4:"antd-pro\\pages\\-config\\-sync-transfer\\index-clickRowStyle4"}}}]);