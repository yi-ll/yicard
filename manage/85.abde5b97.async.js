(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[85],{"69mD":function(t,e,a){"use strict";var n=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("p0pE"));a("miYZ");var u=n(a("tsqr")),s=n(a("d6i3")),c=a("vLjk"),i={namespace:"auditStatus",state:{data:{list:[],pagination:{}},delData:[],hostInfo:{}},effects:{getPage:s.default.mark(function t(e,a){var n,r,u,i;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,u=a.put,t.next=4,r(c.page,n);case 4:if(i=t.sent,!i){t.next=8;break}return t.next=8,u({type:"setPage",payload:i.result});case 8:case"end":return t.stop()}},t)}),put:s.default.mark(function t(e,a){var n,r,i,o;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,t.next=4,r(c.update,n);case 4:i=t.sent,i&&(o=i.result,o&&!0===o?u.default.info("\u63d0\u4ea4\u6210\u529f"):i.message?u.default.info("\u63d0\u4ea4\u5931\u8d25,".concat(i.message)):u.default.info("\u63d0\u4ea4\u5931\u8d25"));case 6:case"end":return t.stop()}},t)})},reducers:{setPage:function(t,e){var a=e.payload;return(0,r.default)({},t,{data:a})}}};e.default=i},vLjk:function(t,e,a){"use strict";var n=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.page=i,e.update=l;var r=n(a("d6i3")),u=n(a("1l/V")),s=n(a("t3Un")),c=n(a("Qyje"));function i(t){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function t(e){var a,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/useraudit/list?").concat(c.default.stringify(e)));case 2:return a=t.sent,a&&(n={list:a.result.items,pagination:{total:a.result.totalCount,current:e.page+1}},a.result=n),t.abrupt("return",a);case 5:case"end":return t.stop()}},t)})),o.apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/useraudit/updatestatus"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}}}]);