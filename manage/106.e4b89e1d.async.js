(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{"69jC":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),s=n(a("o0o1"));a("miYZ");var c=n(a("tsqr")),u=a("lsMz"),i={namespace:"synctransfer",state:{syncDatas:[]},effects:{sync:s.default.mark(function e(t,a){var n,r,i,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(u.sync,n);case 4:i=e.sent,i?(o=i.result,o?c.default.info(o?"\u63d0\u4ea4\u6210\u529f":i.message||"\u63d0\u4ea4\u5931\u8d25"):c.default.error(i.message||"\u63d0\u4ea4\u5931\u8d25")):c.default.error("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return e.stop()}},e,this)}),page:s.default.mark(function e(t,a){var n,r,c,i,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(u.page,n);case 4:if(i=e.sent,!i){e.next=10;break}if(o=i.result,!o){e.next=10;break}return e.next=10,c({type:"pageSet",payload:o});case 10:case"end":return e.stop()}},e,this)})},reducers:{pageSet:function(e,t){return(0,r.default)({},e,{syncDatas:t.payload})}}};t.default=i},lsMz:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.sync=i,t.page=l;var r=n(a("o0o1")),s=n(a("yXPU")),c=a("Qyje"),u=n(a("t3Un"));function i(e){return o.apply(this,arguments)}function o(){return o=(0,s.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/sync/transfer?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e,this)})),o.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=(0,s.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/sync/transfer/list?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e,this)})),p.apply(this,arguments)}}}]);