(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[120],{MqCd:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("o0o1"));a("miYZ");var u=n(a("tsqr")),o=n(a("MVZn")),p=n(a("ia4W")),i={namespace:"profit",state:{pageData:[]},effects:{page:r.default.mark(function e(t,a){var n,i,c,d,s,l,f,w,g;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,i=a.call,c=a.put,d=n.pageSize,s=n.downTask,l=(0,o.default)({},n,{pageIndex:n.pageIndex}),e.next=6,i(p.default,l);case 6:if(f=e.sent,!f){e.next=17;break}if(w=f.result,!w){e.next=17;break}if(!s||!w){e.next=14;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=17;break;case 14:return g={list:w.data,pagination:{total:w.totalCount,pageSize:d,current:n.pageIndex+1}},e.next=17,c({type:"pageSet",payload:g});case 17:case"end":return e.stop()}},e,this)})},reducers:{pageSet:function(e,t){return(0,o.default)({},e,{pageData:t.payload})}}};t.default=i},ia4W:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var r=n(a("o0o1")),u=n(a("yXPU")),o=n(a("t3Un"));function p(e){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/account/page"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),i.apply(this,arguments)}}}]);