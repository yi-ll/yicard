(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{MqCd:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("d6i3"));a("miYZ");var u=n(a("tsqr")),p=n(a("p0pE")),i=n(a("ia4W")),c={namespace:"profit",state:{pageData:[]},effects:{page:r.default.mark(function e(t,a){var n,c,d,o,l,s,f,g,w;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,c=a.call,d=a.put,o=n.pageSize,l=n.downTask,s=(0,p.default)({},n,{pageIndex:n.pageIndex}),e.next=6,c(i.default,s);case 6:if(f=e.sent,!f){e.next=17;break}if(g=f.result,!g){e.next=17;break}if(!l||!g){e.next=14;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=17;break;case 14:return w={list:g.data,pagination:{total:g.totalCount,pageSize:o,current:n.pageIndex+1}},e.next=17,d({type:"pageSet",payload:w});case 17:case"end":return e.stop()}},e)})},reducers:{pageSet:function(e,t){return(0,p.default)({},e,{pageData:t.payload})}}};t.default=c},ia4W:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(a("d6i3")),u=n(a("1l/V")),p=n(a("t3Un"));function i(e){return c.apply(this,arguments)}function c(){return c=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/account/page"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),c.apply(this,arguments)}}}]);