(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{"5K8u":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("d6i3"));a("miYZ");var u=n(a("tsqr")),c=n(a("p0pE")),s=n(a("cJaf")),i={namespace:"speedaction",state:{pageData:[]},effects:{page:r.default.mark(function e(t,a){var n,i,p,d,o,l,f,g,w;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,i=a.call,p=a.put,d=n.pageSize,o=n.downTask,l=(0,c.default)({},n,{pageIndex:n.pageIndex}),e.next=6,i(s.default,l);case 6:if(f=e.sent,g=f.result,!f.message){e.next=12;break}u.default.error(f.message),e.next=19;break;case 12:if(!o||!g){e.next=16;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=19;break;case 16:return w={list:g.data,pagination:{total:g.totalCount,pageSize:d,current:n.pageIndex+1}},e.next=19,p({type:"listSet",payload:w});case 19:case"end":return e.stop()}},e)})},reducers:{listSet:function(e,t){return(0,c.default)({},e,{pageData:t.payload})}}};t.default=i},cJaf:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(a("d6i3")),u=n(a("1l/V")),c=n(a("t3Un")),s=a("Qyje");function i(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/speedaction/page?").concat((0,s.stringify)(t))));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}}}]);