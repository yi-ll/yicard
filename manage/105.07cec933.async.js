(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{SbBZ:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("d6i3"));a("miYZ");var u=n(a("tsqr")),c=n(a("p0pE")),d=n(a("yOhT")),o={namespace:"actionrecord",state:{pageData:[]},effects:{page:r.default.mark(function e(t,a){var n,o,s,i,p,l,f,g,b;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=a.call,s=a.put,i=n.pageSize,p=n.downTask,l=(0,c.default)({},n,{pageIndex:n.pageIndex}),e.next=6,o(d.default,l);case 6:if(f=e.sent,g=f.result,!f.message){e.next=12;break}u.default.error(f.message),e.next=19;break;case 12:if(!p||!g){e.next=16;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=19;break;case 16:return b={list:g.data,pagination:{total:g.totalCount,pageSize:i,current:n.pageIndex+1}},e.next=19,s({type:"listSet",payload:b});case 19:case"end":return e.stop()}},e)})},reducers:{listSet:function(e,t){return(0,c.default)({},e,{pageData:t.payload})}}};t.default=o},yOhT:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r=n(a("d6i3")),u=n(a("1l/V")),c=n(a("t3Un"));function d(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/actionrecord/page"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}}}]);