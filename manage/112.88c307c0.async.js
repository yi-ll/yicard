(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[112],{"4w84":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var r=n(a("d6i3")),u=n(a("1l/V")),c=a("Qyje"),o=n(a("t3Un"));function p(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/location/page/").concat(t.entCode,"?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}},PkUC:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("d6i3"));a("miYZ");var u=n(a("tsqr")),c=n(a("p0pE")),o=n(a("4w84")),p={namespace:"locmodels",state:{pageData:[]},effects:{page:r.default.mark(function e(t,a){var n,p,s,d,i,l,f,g,w;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,p=a.call,s=a.put,d=n.pageSize,i=n.downTask,l=(0,c.default)({},n,{pageIndex:n.pageIndex}),e.next=6,p(o.default,l);case 6:if(f=e.sent,g=f.result,!f.message){e.next=12;break}u.default.error(f.message),e.next=19;break;case 12:if(!i||!g){e.next=16;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=19;break;case 16:return w={list:g.data,pagination:{total:g.totalCount,pageSize:d,current:n.pageIndex+1}},e.next=19,s({type:"pageSet",payload:w});case 19:case"end":return e.stop()}},e)})},reducers:{pageSet:function(e,t){return(0,c.default)({},e,{pageData:t.payload})}}};t.default=p}}]);