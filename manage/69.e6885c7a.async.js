(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"m6+R":function(e,t,a){e.exports={card:"antd-pro\\pages\\-config\\-tenant-config\\index-card",heading:"antd-pro\\pages\\-config\\-tenant-config\\index-heading",steps:"antd-pro\\pages\\-config\\-tenant-config\\index-steps",errorIcon:"antd-pro\\pages\\-config\\-tenant-config\\index-errorIcon",errorPopover:"antd-pro\\pages\\-config\\-tenant-config\\index-errorPopover",errorListItem:"antd-pro\\pages\\-config\\-tenant-config\\index-errorListItem",errorField:"antd-pro\\pages\\-config\\-tenant-config\\index-errorField",editable:"antd-pro\\pages\\-config\\-tenant-config\\index-editable",advancedForm:"antd-pro\\pages\\-config\\-tenant-config\\index-advancedForm",optional:"antd-pro\\pages\\-config\\-tenant-config\\index-optional",formHeight:"antd-pro\\pages\\-config\\-tenant-config\\index-formHeight"}},qeNj:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("J+/v");var l=n(a("MoRW"));a("IzEo");var r=n(a("bx4M"));a("T2oS");var i=n(a("W9HT"));a("7Kak");var o=n(a("9yH6"));a("iQDF");var f=n(a("+eQT"));a("giR+");var u=n(a("fyUT"));a("/zsF");var d=n(a("PArb")),c=n(a("jehZ"));a("+L6B");var s=n(a("2/Rp"));a("miYZ");var p=n(a("tsqr")),g=n(a("2Taf")),m=n(a("vZ4D")),y=n(a("MhPg")),h=n(a("l4Ni")),v=n(a("ujKo")),E=n(a("p0pE"));a("OaEy");var C=n(a("2fM7"));a("y8nQ");var D=n(a("Vl3Y"));a("2qtc");var b,x,w,M,Y=n(a("kLXV")),T=R(a("q1tI")),O=a("MuoO"),k=n(a("wd/R")),H=n(a("zHco")),S=n(a("ufQ4")),P=n(a("HZnN")),N=n(a("m6+R"));function V(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(V=function(e){return e?a:t})(e)}function R(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=V(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}function j(e){var t=F();return function(){var a,n=(0,v.default)(e);if(t){var l=(0,v.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,h.default)(this,a)}}function F(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var q=Y.default.confirm,A=D.default.Item,U=C.default.Option,z=(b=D.default.create(),x=(0,O.connect)(function(e){var t=e.tenantConfig,a=e.loading;return(0,E.default)({},t,{submitting:a.effects["tenantConfig/update"],loading:a.effects["tenantConfig/get"],tenantLoading:a.effects["tenantConfig/getTenant"]})}),w=P.default.Secured("/config/tenantconfig"),b(M=(0,S.default)(M=x(M=w(M=function(e){(0,y.default)(a,e);var t=j(a);function a(){var e;(0,g.default)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l)),e.state={enterprise:null},e.loadData=function(){var t=e.props.dispatch;t({type:"tenantConfig/getTenant"})},e.loadConfig=function(t){e.setState({enterprise:t});var a=e.props,n=a.dispatch,l=a.form;n({type:"tenantConfig/get",payload:{enterprise:t}}).then(function(){var t=e.props.data;l.setFieldsValue({capacity:t.capacity,beginDate:t.beginDate?(0,k.default)(t.beginDate,"YYYY-MM-DD"):null,endDate:t.beginDate?(0,k.default)(t.endDate,"YYYY-MM-DD"):null,expiryMonth:t.tenantConfig?t.tenantConfig.expiryMonth:0,expiryDay:t.tenantConfig?t.tenantConfig.expiryDay:0,expiryOrderTimeType:t.tenantConfig?t.tenantConfig.expiryOrderTimeType:0,version:t.tenantConfig?t.tenantConfig.version:2020})})},e.handleSubmit=function(t){var a=e.props,n=a.dispatch,l=a.form,r=a.data;t.preventDefault(),l.validateFields(function(e,t){if(!e){if(!r||!r.id)return void p.default.error("\u8bf7\u9009\u62e9\u5ba2\u6237");var a=t.beginDate?"".concat(t.beginDate.format("YYYY-MM-DD")," 00:00:00"):null,l=t.endDate?"".concat(t.endDate.format("YYYY-MM-DD")," 00:00:00"):null,i={expiryMonth:t.expiryMonth,expiryDay:t.expiryDay,expiryOrderTimeType:t.expiryOrderTimeType,showOriginalStatus:t.showOriginalStatus,showPackageUpgrade:t.showPackageUpgrade,version:t.version};q({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4?",onOk:function(){n({type:"tenantConfig/update",payload:(0,E.default)({},r,t,{beginDate:a,endDate:l,tenantConfig:i})})}})}})},e}return(0,m.default)(a,[{key:"componentDidMount",value:function(){var e=this.props.currentUser,t=e&&e.entCode&&e.entCode.length<4;t?this.loadData():this.loadConfig(e.enterprise)}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"tenantConfig/clear"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form.getFieldDecorator,n=t.currentUser,p=t.tenants,g=t.submitting,m=t.data,y=t.tenantLoading,h=t.loading,v=n&&n.entCode&&n.entCode.length<=4,E=n&&n.entCode&&n.entCode.length<4,b=this.state.enterprise,x={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},w={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return T.default.createElement(H.default,null,v?T.default.createElement(r.default,null,T.default.createElement(s.default,{style:{marginLeft:8},icon:"reload",shape:"circle",onClick:function(){return e.loadConfig(b)}}),T.default.createElement(D.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},E?T.default.createElement(A,(0,c.default)({},x,{label:"\u5ba2\u6237",className:N.default.formHeight}),T.default.createElement(C.default,{loading:y,placeholder:"\u8bf7\u9009\u62e9\u5ba2\u6237",onSelect:this.loadConfig,showSearch:!0,allowClear:!0},p.map(function(e){return T.default.createElement(U,{key:e.id,value:e.id},e.name)}))):null,T.default.createElement(i.default,{spinning:b&&h,tip:"\u6b63\u5728\u52a0\u8f7d..."},E?T.default.createElement(T.Fragment,null,T.default.createElement(d.default,{orientation:"left",style:{fontSize:12,color:"green"}},"\u5361\u5bb9\u91cf\u4e0e\u670d\u52a1\u671f\uff1a"),T.default.createElement(A,(0,c.default)({},x,{label:"\u5361\u5bb9\u91cf",className:N.default.formHeight}),a("capacity",{initialValue:m.capacity||0,rules:[{required:!0,message:"\u5361\u5bb9\u91cf\u5fc5\u586b"}]})(T.default.createElement(u.default,{min:0,max:1e7,step:5e4,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u5361\u5bb9\u91cf",formatter:function(e){return"".concat(e," \u5f20")}}))),T.default.createElement(A,(0,c.default)({},x,{label:"\u51fa\u5e93\u5bb9\u91cf",className:N.default.formHeight}),a("deliveryCapacity",{initialValue:m.deliveryCapacity||0})(T.default.createElement(u.default,{style:{width:180},placeholder:"\u51fa\u5e93\u5bb9\u91cf",formatter:function(e){return"".concat(e," \u5f20")}}))),T.default.createElement(A,(0,c.default)({},x,{label:"\u8ba1\u8d39\u7248\u672c",className:N.default.formHeight}),a("version",{initialValue:m.version||2020,rules:[{required:!0,message:"\u8ba1\u8d39\u7248\u672c\u5fc5\u586b"}]})(T.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u8ba1\u8d39\u7248\u672c",style:{width:180},allowClear:!0},T.default.createElement(U,{key:2019,value:2019},"2019\u5e74"),T.default.createElement(U,{key:2020,value:2020},"2020\u5e74")))),T.default.createElement(A,(0,c.default)({},x,{label:"\u670d\u52a1\u5f00\u59cb",className:N.default.formHeight}),a("beginDate",{initialValue:m.beginDate?(0,k.default)(m.beginDate,"YYYY-MM-DD"):null,rules:[{required:!0,message:"\u670d\u52a1\u5f00\u59cb\u65e5\u671f\u5fc5\u586b"}]})(T.default.createElement(f.default,{placeholder:"\u8bf7\u9009\u62e9\u670d\u52a1\u5f00\u59cb\u65e5\u671f"}))),T.default.createElement(A,(0,c.default)({},x,{label:"\u670d\u52a1\u622a\u6b62",className:N.default.formHeight}),a("endDate",{initialValue:m.endDate?(0,k.default)(m.endDate,"YYYY-MM-DD"):null,rules:[{required:!0,message:"\u670d\u52a1\u622a\u6b62\u65e5\u671f\u5fc5\u586b"}]})(T.default.createElement(f.default,{placeholder:"\u8bf7\u9009\u62e9\u670d\u52a1\u622a\u6b62\u65e5\u671f"})))):null,T.default.createElement(d.default,{orientation:"left",style:{fontSize:12,color:"magenta"}},"\u5361\u7eed\u8d39\u622a\u6b62\u65e5\u671f=\u5361\u670d\u52a1\u622a\u6b62\u65e5\u671f + \u5ef6\u957f\u6708\u6570 + \u5ef6\u957f\u5929\u6570"),T.default.createElement(A,(0,c.default)({},x,{label:"\u5ef6\u957f\u6708\u6570",className:N.default.formHeight}),a("expiryMonth",{initialValue:m.tenantConfig?m.tenantConfig.expiryMonth:0})(T.default.createElement(u.default,{min:0,max:24,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u5ef6\u957f\u6708\u6570",formatter:function(e){return"".concat(e," \u4e2a\u6708")}}))),T.default.createElement(A,(0,c.default)({},x,{label:"\u5ef6\u957f\u5929\u6570",className:N.default.formHeight,extra:T.default.createElement("span",{style:{color:"red"}},"\u6ce8\u610f\uff1a\u3010\u5361\u5546\u7ba1\u7406\u5458\u3011\u64cd\u4f5c\u7eed\u8d39\u65e0\u7eed\u8d39\u622a\u6b62\u65e5\u671f\u9650\u5236")}),a("expiryDay",{initialValue:m.tenantConfig?m.tenantConfig.expiryDay:0})(T.default.createElement(u.default,{min:0,max:1e6,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u5ef6\u957f\u5929\u6570",formatter:function(e){return"".concat(e," \u5929")}}))),T.default.createElement(d.default,{orientation:"left",style:{fontSize:12,color:"blue"}},"\u5df2\u5931\u6548\u5361\u57fa\u7840\u5957\u9910\u7eed\u8d39\u540e\u670d\u52a1\u8d77\u59cb\u65e5\u671f\u8ba1\u65f6\u65b9\u5f0f"),T.default.createElement(A,(0,c.default)({},x,{label:"\u8ba1\u65f6\u65b9\u5f0f",className:N.default.formHeight}),a("expiryOrderTimeType",{initialValue:m.tenantConfig?m.tenantConfig.expiryOrderTimeType:0})(T.default.createElement(o.default.Group,null,T.default.createElement(o.default,{value:0},"\u6309\u5931\u6548\u65e5\u671f\u8ba1"),T.default.createElement(o.default,{value:1},"\u6309\u7eed\u8d39\u65e5\u671f\u8ba1"))),T.default.createElement("div",{style:{lineHeight:1,color:"red"}},T.default.createElement("p",null," "),T.default.createElement("p",{style:{lineHeight:1.5}},"(1)\u3001\u6309\u5931\u6548\u65e5\u671f\u8ba1\uff1a\u5df2\u5931\u6548\u5361\u57fa\u7840\u5957\u9910\u7eed\u8d39\u540e\u670d\u52a1\u8d77\u59cb\u65e5\u671f\u8ba1\u7b97\u65b9\u5f0f->\u4ece\u5931\u6548\u65e5\u671f\u7684\u4e0b\u4e2a\u65e5\u671f\u7b97\u8d77\u3002 \u4f8b\uff1a\u5361A\u57282020-10-31\u540e\u8fc7\u671f\uff0c2021-01-08\u7eed\u8d39\u57fa\u7840\u5957\u9910A\uff0c\u5219\u7eed\u8d39\u57fa\u7840\u5957\u9910A\u7684\u670d\u52a1\u8d77\u59cb\u65e5\u671f\u4ece2020-11-01\u8ba1\u7b97\u3002"),T.default.createElement("p",null,"(2)\u3001\u6309\u7eed\u8d39\u65e5\u671f\u8ba1\uff1a\u5df2\u5931\u6548\u5361\u57fa\u7840\u5957\u9910\u7eed\u8d39\u540e\u670d\u52a1\u8d77\u59cb\u65e5\u671f\u8ba1\u7b97\u65b9\u5f0f->\u4ece\u7eed\u8d39\u65e5\u671f\u7b97\u8d77\u3002 \u4f8b\uff1a\u5361A\u57282020-10-31\u540e\u8fc7\u671f\uff0c2021-01-08\u7eed\u8d39\u57fa\u7840\u5957\u9910A\uff0c\u5219\u7eed\u8d39\u57fa\u7840\u5957\u9910A\u7684\u670d\u52a1\u8d77\u59cb\u65e5\u671f\u4ece2021-01-08\u8ba1\u7b97\u3002"),T.default.createElement("p",null,"(3)\u3001\u6b64\u9600\u503c\u4fee\u6539\uff0c\u9884\u8ba11~10\u5206\u949f\u751f\u6548\uff0c\u4e14\u53ea\u5bf9\u4fee\u6539\u540e\u7684\u7eed\u8d39\u7ed3\u679c\u4ea7\u751f\u5f71\u54cd\u3002"))),T.default.createElement(d.default,{orientation:"left",style:{fontSize:12,color:"green"}},"\u5176\u4ed6"),T.default.createElement(A,(0,c.default)({},x,{label:"\u663e\u793a\u8fd0\u8425\u5546\u539f\u59cb\u3010\u5361\u72b6\u6001\u3011",className:N.default.formHeight}),a("showOriginalStatus",{initialValue:m.tenantConfig?m.tenantConfig.showOriginalStatus:0})(T.default.createElement(o.default.Group,null,T.default.createElement(o.default,{value:0},"\u5426"),T.default.createElement(o.default,{value:1},"\u662f")))),T.default.createElement(A,(0,c.default)({},x,{label:"\u5957\u9910\u5347\u7ea7",className:N.default.formHeight}),a("showPackageUpgrade",{initialValue:m.tenantConfig?m.tenantConfig.showPackageUpgrade:0})(T.default.createElement(o.default.Group,null,T.default.createElement(o.default,{value:0},"\u5173"),T.default.createElement(o.default,{value:1},"\u5f00")))),T.default.createElement(A,(0,c.default)({},w,{style:{marginTop:32}}),T.default.createElement(s.default,{type:"primary",htmlType:"submit",loading:g},"\u63d0\u4ea4"))))):T.default.createElement(l.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),a}(T.Component))||M)||M)||M)||M),I=z;t.default=I}}]);