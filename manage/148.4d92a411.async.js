(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[148],{dVxg:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("o0o1"));a("miYZ");var u=n(a("tsqr")),c=n(a("MVZn")),s=a("rp+u"),o={namespace:"cardfloat",state:{pageData:[],oldData:{},newData:[],delData:[],listData:[]},effects:{list:r.default.mark(function t(e,a){var n,o,l,p,i,d,f,h,y,w;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,o=a.call,l=a.put,p=n.pageIndex,i=n.pageSize,d=n.downTask,f=(0,c.default)({},n,{pageIndex:p-1}),t.next=7,o(s.list,f);case 7:if(h=t.sent,!h){t.next=18;break}if(y=h.result,!y){t.next=18;break}if(!d||!y){t.next=15;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=18;break;case 15:return w={list:y.data,pagination:{total:y.totalCount,pageSize:i,current:p}},t.next=18,l({type:"setList",payload:w});case 18:case"end":return t.stop()}},t,this)}),update:r.default.mark(function t(e,a){var n,c,o,l,p;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,c=a.call,o=a.put,t.next=4,c(s.update,n);case 4:return l=t.sent,p=l.result,t.next=8,o({type:"postSet",payload:p});case 8:p?u.default.info("\u5df2\u7ecf\u63d0\u4ea4\u5904\u7406"):l.message?u.default.error("\u63d0\u4ea4\u5931\u8d25,".concat(l.message)):u.default.error("\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return t.stop()}},t,this)}),post:r.default.mark(function t(e,a){var n,c,o,l,p;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,c=a.call,o=a.put,t.next=4,c(s.post,n);case 4:return l=t.sent,p=l.result,t.next=8,o({type:"postSet",payload:p});case 8:p?u.default.info("\u5df2\u7ecf\u63d0\u4ea4\u5904\u7406"):l.message?u.default.error("\u63d0\u4ea4\u5931\u8d25,".concat(l.message)):u.default.error("\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return t.stop()}},t,this)}),get:r.default.mark(function t(e,a){var n,u,c,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,u=a.call,c=a.put,t.next=4,u(s.get,n);case 4:return o=t.sent,t.next=7,c({type:"getSet",payload:o.result});case 7:case"end":return t.stop()}},t,this)}),page:r.default.mark(function t(e,a){var n,o,l,p,i,d,f,h,y,w;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,o=a.call,l=a.put,p=n.pageIndex,i=n.pageSize,d=n.downTask,f=(0,c.default)({},n,{pageIndex:p-1}),t.next=7,o(s.page,f);case 7:if(h=t.sent,y=h.result,!d||!y){t.next=13;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=16;break;case 13:return w={list:y.data,pagination:{total:y.totalCount,pageSize:i,current:p}},t.next=16,l({type:"pageSet",payload:w});case 16:case"end":return t.stop()}},t,this)}),del:r.default.mark(function t(e,a){var n,c,o,l,p,i,d,f,h,y;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,c=a.call,o=a.put,l=n.pageSize,p=n.pageIndex,i=n.id,d=n.entCode,f=n.setType,t.next=5,c(s.del,i);case 5:if(h=t.sent,y=h.result,!y){t.next=15;break}return t.next=10,o({type:"delSet",payload:y});case 10:return u.default.info("\u5220\u9664\u6210\u529f"),t.next=13,o({type:"page",payload:{pageIndex:p,pageSize:l,entCode:d,setType:f}});case 13:t.next=16;break;case 15:u.default.error(h.message?h.message:"\u5220\u9664\u5931\u8d25");case 16:case"end":return t.stop()}},t,this)})},reducers:{getSet:function(t,e){return(0,c.default)({},t,{oldData:e.payload})},postSet:function(t,e){return(0,c.default)({},t,{newData:e.payload})},pageSet:function(t,e){return(0,c.default)({},t,{pageData:e.payload})},setList:function(t,e){return(0,c.default)({},t,{listData:e.payload})},delSet:function(t,e){return(0,c.default)({},t,{delData:e.payload})}}};e.default=o},"rp+u":function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.post=o,e.update=p,e.get=d,e.page=h,e.del=w,e.list=x;var r=n(a("o0o1")),u=n(a("yXPU")),c=a("Qyje"),s=n(a("t3Un"));function o(t){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/cardfloatconfig"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),l.apply(this,arguments)}function p(t){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/cardfloatconfig"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t,this)})),i.apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/cardfloatconfig/").concat(e)));case 1:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}function h(t){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/cardfloatconfig/page?").concat((0,c.stringify)(e))));case 1:case"end":return t.stop()}},t,this)})),y.apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/cardfloatconfig/").concat(e),{method:"delete"}));case 1:case"end":return t.stop()}},t,this)})),g.apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return v=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/cardfloatconfig/list?").concat((0,c.stringify)(e))));case 1:case"end":return t.stop()}},t,this)})),v.apply(this,arguments)}}}]);