(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{lqUh:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1"));a("miYZ");var s=n(a("tsqr")),c=n(a("usdK")),o=a("zKyw"),i={namespace:"inStockModel",state:{pageData:[],oldData:[],newData:[],delData:[],detailData:[],bindPackage:{},operators:[]},effects:{queryCardInfo:u.default.mark(function t(e,a){var n,r,c;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,t.next=4,r(o.queryCardInfo,n);case 4:c=t.sent,c?c.message?s.default.info(c.message):s.default.info("\u63d0\u4ea4\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\u81f3\u5165\u5e93\u8bb0\u5f55\u67e5\u8be2"):s.default.error("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return t.stop()}},t,this)}),readOperators:u.default.mark(function t(e,a){var n,r,s;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=a.call,r=a.put,t.next=3,n(o.getOperators);case 3:return s=t.sent,t.next=6,r({type:"setOperators",payload:s.result});case 6:case"end":return t.stop()}},t,this)}),postInStock:u.default.mark(function t(e,a){var n,r,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,t.next=4,r(o.post,n);case 4:i=t.sent,l=i.result,l&&l.id>0?(s.default.info("\u63d0\u4ea4\u6210\u529f"),c.default.push("/business/bizsales/instock/list")):i.message?s.default.info("\u63d0\u4ea4\u5931\u8d25,".concat(i.message)):s.default.info("\u63d0\u4ea4\u5931\u8d25");case 7:case"end":return t.stop()}},t,this)}),get:u.default.mark(function t(e,a){var n,r,s,c;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,s=a.put,t.next=4,r(o.get,n);case 4:return c=t.sent,t.next=7,s({type:"getSet",payload:c.result});case 7:case"end":return t.stop()}},t,this)}),page:u.default.mark(function t(e,a){var n,c,i,l,p,d,f,h,y,w;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,c=a.call,i=a.put,l=n.pageIndex,p=n.pageSize,d=n.downTask,f=(0,r.default)({},n,{pageIndex:l-1}),t.next=7,c(o.page,f);case 7:if(h=t.sent,y=h.result,!d||!y){t.next=13;break}s.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=16;break;case 13:return w={list:y.data,pagination:{total:y.totalCount,pageSize:p,current:l}},t.next=16,i({type:"pageSet",payload:w});case 16:case"end":return t.stop()}},t,this)}),detailpage:u.default.mark(function t(e,a){var n,c,i,l,p,d,f,h,y,w;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,c=a.call,i=a.put,l=n.pageIndex,p=n.pageSize,d=n.downTask,f=(0,r.default)({},n,{pageIndex:l-1}),t.next=7,c(o.detailpage,f);case 7:if(h=t.sent,y=h.result,!d||!y){t.next=13;break}s.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=16;break;case 13:return w={list:y.data,pagination:{total:y.totalCount,pageSize:p,current:l}},t.next=16,i({type:"detailpageSet",payload:w});case 16:case"end":return t.stop()}},t,this)})},reducers:{setOperators:function(t,e){return(0,r.default)({},t,{operators:e.payload})},getSet:function(t,e){return(0,r.default)({},t,{oldData:e.payload})},pageSet:function(t,e){return(0,r.default)({},t,{pageData:e.payload})},detailpageSet:function(t,e){return(0,r.default)({},t,{detailData:e.payload})}}};e.default=i},zKyw:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.get=o,e.page=l,e.detailpage=d,e.getOperators=h,e.post=w,e.queryCardInfo=v;var r=n(a("o0o1")),u=n(a("yXPU")),s=a("Qyje"),c=n(a("t3Un"));function o(t){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesssales/").concat(e.orderNo)));case 1:case"end":return t.stop()}},t,this)})),i.apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesssales/page"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),p.apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function t(e){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.orderNo,delete e.orderNo,t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesssalesdetail/page/").concat(a,"?").concat((0,s.stringify)(e))));case 3:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}function h(){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/instock")));case 1:case"end":return t.stop()}},t,this)})),y.apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/instock"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),g.apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return x=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/querycardinfo"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),x.apply(this,arguments)}}}]);