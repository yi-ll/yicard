(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{lqUh:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3"));a("miYZ");var c=n(a("tsqr")),s=n(a("3a4m")),o=a("zKyw"),p={namespace:"inStockModel",state:{pageData:[],oldData:[],newData:[],delData:[],detailData:[],bindPackage:{},operators:[]},effects:{queryCardInfo:u.default.mark(function e(t,a){var n,r,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(o.queryCardInfo,n);case 4:s=e.sent,s?s.message?c.default.info(s.message):c.default.info("\u63d0\u4ea4\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\u81f3\u5165\u5e93\u8bb0\u5f55\u67e5\u8be2"):c.default.error("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return e.stop()}},e)}),readOperators:u.default.mark(function e(t,a){var n,r,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,r=a.put,e.next=3,n(o.getOperators);case 3:return c=e.sent,e.next=6,r({type:"setOperators",payload:c.result});case 6:case"end":return e.stop()}},e)}),postInStock:u.default.mark(function e(t,a){var n,r,p,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(o.post,n);case 4:p=e.sent,l=p.result,l&&l.id>0?(c.default.info("\u63d0\u4ea4\u6210\u529f"),s.default.push("/business/bizsales/instock/list")):p.message?c.default.info("\u63d0\u4ea4\u5931\u8d25,".concat(p.message)):c.default.info("\u63d0\u4ea4\u5931\u8d25");case 7:case"end":return e.stop()}},e)}),get:u.default.mark(function e(t,a){var n,r,c,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(o.get,n);case 4:return s=e.sent,e.next=7,c({type:"getSet",payload:s.result});case 7:case"end":return e.stop()}},e)}),page:u.default.mark(function e(t,a){var n,s,p,l,i,d,f,h,y,w;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,p=a.put,l=n.pageIndex,i=n.pageSize,d=n.downTask,f=(0,r.default)({},n,{pageIndex:l-1}),e.next=7,s(o.page,f);case 7:if(h=e.sent,y=h.result,!d||!y){e.next=13;break}c.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=16;break;case 13:return w={list:y.data,pagination:{total:y.totalCount,pageSize:i,current:l}},e.next=16,p({type:"pageSet",payload:w});case 16:case"end":return e.stop()}},e)}),detailpage:u.default.mark(function e(t,a){var n,s,p,l,i,d,f,h,y,w;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,p=a.put,l=n.pageIndex,i=n.pageSize,d=n.downTask,f=(0,r.default)({},n,{pageIndex:l-1}),e.next=7,s(o.detailpage,f);case 7:if(h=e.sent,y=h.result,!d||!y){e.next=13;break}c.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=16;break;case 13:return w={list:y.data,pagination:{total:y.totalCount,pageSize:i,current:l}},e.next=16,p({type:"detailpageSet",payload:w});case 16:case"end":return e.stop()}},e)})},reducers:{setOperators:function(e,t){return(0,r.default)({},e,{operators:t.payload})},getSet:function(e,t){return(0,r.default)({},e,{oldData:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})},detailpageSet:function(e,t){return(0,r.default)({},e,{detailData:t.payload})}}};t.default=p},zKyw:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.get=o,t.page=l,t.detailpage=d,t.getOperators=h,t.post=w,t.queryCardInfo=v;var r=n(a("d6i3")),u=n(a("1l/V")),c=a("Qyje"),s=n(a("t3Un"));function o(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesssales/").concat(t.orderNo)));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function l(e){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesssales/page"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),i.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){var a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.orderNo,delete t.orderNo,e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesssalesdetail/page/").concat(a,"?").concat((0,c.stringify)(t))));case 3:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function h(){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/instock")));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/instock"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),g.apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return x=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/querycardinfo"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),x.apply(this,arguments)}}}]);