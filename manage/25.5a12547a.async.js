(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"4GNL":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.page=l,t.batchpost=i,t.getdetails=d,t.getbatch=h,t.getOperators=b;var r=n(a("d6i3")),u=n(a("1l/V")),c=a("Qyje"),s=n(a("t3Un"));function l(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/batch/").concat(t.entCode,"/").concat(t.pageIndex,"/").concat(t.pageSize,"?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function i(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/batch"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/batch/detail/").concat(t.id,"?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function h(e){return w.apply(this,arguments)}function w(){return w=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/batch/").concat(t)));case 1:case"end":return e.stop()}},e)})),w.apply(this,arguments)}function b(){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/instock")));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}},hvwn:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE"));a("miYZ");var u=n(a("tsqr")),c=n(a("d6i3")),s=n(a("3a4m")),l=a("4GNL"),p={namespace:"batch",state:{pageData:{},details:{},renewData:null,batchId:null,batch:null,renewDetials:[],renewViews:[],operators:[]},effects:{readOperators:c.default.mark(function e(t,a){var n,r,u;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,r=a.put,e.next=3,n(l.getOperators);case 3:return u=e.sent,e.next=6,r({type:"setOperators",payload:u.result});case 6:case"end":return e.stop()}},e)}),send:c.default.mark(function e(t,a){var n,r,p,i,o;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,p=a.put,e.next=4,r(l.batchpost,n);case 4:if(i=e.sent,!i){e.next=36;break}if(o=i.result,!o){e.next=33;break}if(24!==n.bType){e.next=12;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=31;break;case 12:if(19!==n.bType){e.next=17;break}return e.next=15,p({type:"setRenewDetial",payload:o});case 15:e.next=31;break;case 17:if(4!==n.bType){e.next=29;break}if(u.default.info("\u63d0\u4ea4\u6210\u529f"),0!==o.indexOf("http")){e.next=24;break}return e.next=22,p({type:"setRenew",payload:o});case 22:e.next=27;break;case 24:return e.next=26,p({type:"setBatch",payload:parseInt(i.message,10)});case 26:s.default.push("/business/batch");case 27:e.next=31;break;case 29:u.default.info("\u63d0\u4ea4\u6210\u529f"),s.default.push("/business/batch");case 31:e.next=34;break;case 33:19!==n.bType||0!==i.code||i.message?u.default.error(i.message?i.message:"\u63d0\u4ea4\u5931\u8d25"):u.default.error("\u65e0\u6ee1\u8db3\u6761\u4ef6\u7eed\u8d39\u6570\u636e");case 34:e.next=37;break;case 36:u.default.error("\u63d0\u4ea4\u5931\u8d25");case 37:case"end":return e.stop()}},e)}),page:c.default.mark(function e(t,a){var n,u,s,p,i,o,d,f;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,s=a.put,p=n.pageSize,i=(0,r.default)({},n,{pageIndex:n.pageIndex}),e.next=6,u(l.page,i);case 6:if(o=e.sent,!o){e.next=13;break}if(d=o.result,!d){e.next=13;break}return f={list:d.data,pagination:{total:d.totalCount,pageSize:p,current:n.pageIndex+1}},e.next=13,s({type:"pageSet",payload:f});case 13:case"end":return e.stop()}},e)}),detail:c.default.mark(function e(t,a){var n,s,p,i,o,d,f,h,w,b;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,p=a.put,i=n.pageIndex,o=n.pageSize,d=n.downTask,f=(0,r.default)({},n,{pageIndex:i-1}),e.next=7,s(l.getdetails,f);case 7:if(h=e.sent,!h){e.next=18;break}if(w=h.result,!w){e.next=18;break}if(!d||!w){e.next=15;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=18;break;case 15:return b={list:w.data,pagination:{total:w.totalCount,pageSize:o,current:i}},e.next=18,p({type:"detailSet",payload:b});case 18:case"end":return e.stop()}},e)}),readbatch:c.default.mark(function e(t,a){var n,r,u,s,p;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(l.getbatch,n);case 4:if(s=e.sent,p=s.result,!p){e.next=9;break}return e.next=9,u({type:"setBatchInfo",payload:p});case 9:case"end":return e.stop()}},e)})},reducers:{setOperators:function(e,t){return(0,r.default)({},e,{operators:t.payload})},setBatchInfo:function(e,t){return(0,r.default)({},e,{batch:t.payload})},setBatch:function(e,t){return(0,r.default)({},e,{batchId:t.payload})},setRenew:function(e,t){return(0,r.default)({},e,{renewData:t.payload})},setRenewDetial:function(e,t){return(0,r.default)({},e,{renewViews:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})},detailSet:function(e,t){return(0,r.default)({},e,{details:t.payload})},clearRenew:function(e){return(0,r.default)({},e,{renewData:null,batchId:null,batch:null,details:{},renewDetials:[],renewViews:[]})},updateRenewDetail:function(e,t){var a=t.payload.data;return(0,r.default)({},e,{renewViews:a})}}};t.default=p}}]);