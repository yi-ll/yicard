(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[123],{eAV9:function(t,e,a){"use strict";var o=a("TqRt"),n=a("284h");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("J+/v");var l,u,c,f=o(a("MoRW")),i=o(a("MVZn")),r=o(a("lwsE")),d=o(a("W8MJ")),p=o(a("a1gu")),s=o(a("Nsbk")),g=o(a("7W2i")),m=n(a("q1tI")),h=a("MuoO"),v=o(a("usdK")),b=o(a("ufQ4")),y=o(a("zHco")),w=o(a("ccVU")),C=(l=(0,h.connect)(function(t){var e=t.localplatformconfig,a=t.loading;return{oldData:e.oldData,getConfigLoading:a.effects["localplatformconfig/get"],postConfigLoading:a.effects["localplatformconfig/post"]}}),(0,b.default)(u=l((c=function(t){function e(){var t,a;(0,r.default)(this,e);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return a=(0,p.default)(this,(t=(0,s.default)(e)).call.apply(t,[this].concat(n))),a.onSubmit=function(t){var e=a.props,o=e.dispatch,n=e.match;if(t){var l=(0,i.default)({},t,{id:n.params.id});o({type:"localplatformconfig/post",payload:l})}},a.onCancel=function(){v.default.push("/config/localplatformconfig")},a}return(0,g.default)(e,t),(0,d.default)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.dispatch,a=t.match,o=a.params.id;o&&e({type:"localplatformconfig/get",payload:{id:o}})}},{key:"render",value:function(){var t=this.props,e=t.oldData,a=t.currentUser,o=a&&a.entCode&&a.entCode.length<=4;return m.default.createElement(y.default,null,o?m.default.createElement(w.default,{value:e,onSubmit:this.onSubmit,editable:!0,onCancel:this.onCancel}):m.default.createElement(f.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),e}(m.Component),u=c))||u)||u),M=C;e.default=M}}]);