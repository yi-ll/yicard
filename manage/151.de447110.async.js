(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[151],{"4w84":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=n(a("o0o1")),u=n(a("yXPU")),o=a("Qyje"),c=n(a("t3Un"));function s(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/location/page/").concat(t.entCode,"?").concat((0,o.stringify)(t))));case 1:case"end":return e.stop()}},e,this)})),p.apply(this,arguments)}},PkUC:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("o0o1"));a("miYZ");var u=n(a("tsqr")),o=n(a("MVZn")),c=n(a("4w84")),s={namespace:"locmodels",state:{pageData:[]},effects:{page:r.default.mark(function e(t,a){var n,s,p,i,d,l,f,g,w;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,p=a.put,i=n.pageSize,d=n.downTask,l=(0,o.default)({},n,{pageIndex:n.pageIndex}),e.next=6,s(c.default,l);case 6:if(f=e.sent,g=f.result,!f.message){e.next=12;break}u.default.error(f.message),e.next=19;break;case 12:if(!d||!g){e.next=16;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=19;break;case 16:return w={list:g.data,pagination:{total:g.totalCount,pageSize:i,current:n.pageIndex+1}},e.next=19,p({type:"pageSet",payload:w});case 19:case"end":return e.stop()}},e,this)})},reducers:{pageSet:function(e,t){return(0,o.default)({},e,{pageData:t.payload})}}};t.default=s}}]);