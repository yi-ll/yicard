(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{E0Wi:function(e,t,a){"use strict";var n=a("TqRt"),o=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("J+/v");var u,i,c=n(a("MoRW")),l=n(a("MVZn")),d=n(a("lwsE")),f=n(a("W8MJ")),r=n(a("a1gu")),p=n(a("Nsbk")),s=n(a("7W2i")),g=o(a("q1tI")),h=a("MuoO"),v=n(a("usdK")),m=n(a("ufQ4")),k=n(a("zHco")),b=n(a("dNe8")),y=(u=(0,h.connect)(function(e){var t=e.packageunionconfig,a=e.loading;return{oldData:t.oldData,getConfigLoading:a.effects["packageunionconfig/get"],postConfigLoading:a.effects["packageunionconfig/post"]}}),(0,m.default)(i=u(i=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return a=(0,r.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(o))),a.onSubmit=function(e){var t=a.props,n=t.dispatch,o=t.match;if(e){var u=(0,l.default)({},e,{id:o.params.id});n({type:"packageunionconfig/post",payload:u})}},a.onCancel=function(){v.default.push("/config/packageunion")},a}return(0,s.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match,n=a.params.id;n&&t({type:"packageunionconfig/get",payload:{id:n}})}},{key:"render",value:function(){var e=this.props,t=e.oldData,a=e.currentUser,n=a&&a.entCode&&a.entCode.length<=4;return g.default.createElement(k.default,null,n?g.default.createElement(b.default,{value:t,onSubmit:this.onSubmit,editable:!0,onCancel:this.onCancel}):g.default.createElement(c.default,{status:"403",title:"403",subTitle:"\u62b1\u6b49\uff0c\u975e\u5361\u5546\u7ba1\u7406\u5458\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"}))}}]),t}(g.Component))||i)||i),w=y;t.default=w}}]);