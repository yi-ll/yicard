(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{7259:function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-config\\-operator-sync\\index-tableList",tableListOperator:"antd-pro\\pages\\-config\\-operator-sync\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-config\\-operator-sync\\index-tableListForm",submitButtons:"antd-pro\\pages\\-config\\-operator-sync\\index-submitButtons"}},YfdR:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("14J3");var l=n(a("BMrR"));a("+L6B");var o=n(a("2/Rp"));a("7Kak");var u=n(a("9yH6"));a("jCWc");var c=n(a("kPKH"));a("iQDF");var d=n(a("+eQT"));a("2qtc");var f=n(a("kLXV"));a("/zsF");var i=n(a("PArb"));a("Awhp");var s=n(a("KrTs")),p=n(a("2Taf")),m=n(a("vZ4D")),v=n(a("MhPg")),y=n(a("l4Ni")),h=n(a("ujKo")),Y=n(a("p0pE"));a("y8nQ");var g,D,E,b=n(a("Vl3Y")),M=F(a("q1tI")),x=a("MuoO"),k=n(a("8WVO")),I=n(a("wd/R")),O=n(a("7259"));function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(w=function(e){return e?a:t})(e)}function F(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=w(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}function L(e){var t=P();return function(){var a,n=(0,h.default)(e);if(t){var r=(0,h.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,y.default)(this,a)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var R=b.default.Item,j=(g=(0,x.connect)(function(e){var t=e.operatorsync,a=e.loading,n=e.user;return(0,Y.default)({},t,{currentUser:n.currentUser,loading:a.effects["operatorsync/page"],syncLoing:a.effects["operatorsync/sync"]})}),D=b.default.create(),g(E=D(E=function(e){(0,v.default)(a,e);var t=L(a);function a(e){var n;return(0,p.default)(this,a),n=t.call(this,e),n.columns=[{title:"\u65e5\u671f",dataIndex:"reportDate",render:function(e,t){return(0,I.default)(e).format(0===t.month?"YYYY-MM-DD":"YYYY-MM")}},{title:"\u6570\u636e\u65e5\u671f",dataIndex:"realDate",render:function(e,t){return(0,I.default)(e).format(0===t.month?"YYYY-MM-DD":"YYYY-MM")}},{title:"\u6b63\u786e",dataIndex:"id",render:function(e,t){var a=0===t.month?t.reportDate===t.realDate:(0,I.default)(t.reportDate).format("YYYY-MM")===(0,I.default)(t.realDate).format("YYYY-MM");return M.default.createElement("span",null,M.default.createElement(s.default,{status:a?"success":"error"}),a?"\u662f":"\u5426")}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updateTime"},{title:"\u6570\u636e\u603b\u6570",dataIndex:"dataCount"},{title:"\u5904\u7406",dataIndex:"processing",render:function(e){return M.default.createElement("span",null,M.default.createElement(s.default,{status:0===e?"error":"success"}),0===e?"\u8fdb\u884c":"\u5b8c\u6210")}},{title:"\u5730\u65b9",dataIndex:"localplatform",render:function(e){return M.default.createElement("span",null,M.default.createElement(s.default,{status:0===e?"success":"error"}),0===e?"\u5426":"\u662f")}},{title:"\u7f16\u7801",dataIndex:"comId"},{title:"\u96c6\u56e2",dataIndex:"cName"},{title:"\u5ba2\u6237",dataIndex:"enterpriseName"},{title:"\u64cd\u4f5c",render:function(e,t){var a=n.state.month;return 0===a?M.default.createElement(M.Fragment,null,M.default.createElement("a",{onClick:function(){return n.syncData(0,t)}},"\u65e5\u5e38\u540c\u6b65"),M.default.createElement(i.default,{type:"vertical"}),M.default.createElement("a",{onClick:function(){return n.syncData(1,t)}},"\u6708\u62a5\u540c\u6b65")):null}}],n.loadData=function(e){var t=n.props.dispatch;t({type:"operatorsync/page",payload:e||{date:null,month:0}})},n.syncData=function(e,t){f.default.confirm({title:"\u540c\u6b65",content:"\u786e\u5b9a\u540c\u6b65".concat(t.cName).concat(0===e?"\u65e5\u5e38":"\u6708\u62a5","\u6570\u636e\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){var a=n.props.dispatch;a({type:"operatorsync/sync",payload:{comId:t.comId,month:e}})}})},n.handleFormReset=function(){var e=n.props.form;e.resetFields(),n.loadData()},n.handleSearch=function(e){e.preventDefault();var t=n.props.form;t.validateFields(function(e,t){if(!e){var a=t.date?"".concat(t.date.format("YYYY-MM-DD HH:mm:ss")):null,r=(0,Y.default)({},t,{date:a});n.loadData(r)}})},n.onChange=function(e){var t=n.props.form;n.setState({month:e.target.value}),t.validateFields(function(t,a){if(!t){var r={month:e.target.value,date:a.date?"".concat(a.date.format("YYYY-MM-DD HH:mm:ss")):null};n.loadData(r)}})},n.state={month:0},n}return(0,m.default)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"renderSearchForm",value:function(){var e=this.props.form.getFieldDecorator;return M.default.createElement(b.default,{onSubmit:this.handleSearch,layout:"inline"},M.default.createElement(l.default,{gutter:{md:8,lg:24,xl:48}},M.default.createElement(c.default,{md:8,sm:24},M.default.createElement(R,{label:"\u65f6\u95f4"},e("date")(M.default.createElement(d.default,{placeholder:"\u65f6\u95f4"})))),M.default.createElement(c.default,{md:8,sm:24},M.default.createElement(R,{label:"\u7c7b\u578b"},e("month",{initialValue:0})(M.default.createElement(u.default.Group,{onChange:this.onChange},M.default.createElement(u.default.Button,{value:0},"\u65e5\u5e38\u6570\u636e"),M.default.createElement(u.default.Button,{value:1},"\u6708\u62a5\u6570\u636e"))))),M.default.createElement(c.default,{md:8,sm:24},M.default.createElement("span",{className:O.default.submitButtons},M.default.createElement(o.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),M.default.createElement(o.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))}},{key:"render",value:function(){var e=this.props,t=e.syncDatas,a=e.loading;return M.default.createElement(r.default,{bordered:!1},M.default.createElement("div",{className:O.default.tableList},M.default.createElement("div",{className:O.default.tableListOperator},this.renderSearchForm()),M.default.createElement(k.default,{scrollX:1e3,rowKey:"id",loading:a,data:t,columns:this.columns})))}}]),a}(M.PureComponent))||E)||E),B=j;t.default=B}}]);