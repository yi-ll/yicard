(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{TZO6:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("MVZn")),c=n(a("o0o1"));a("miYZ");var u=n(a("tsqr")),s=a("y/sZ"),i={namespace:"payOrderModel",state:{pageData:[],packageUnionOrder:{},statisticsData:{}},effects:{doSettlement:c.default.mark(function t(e,a){var n,r,i,o,p;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,i=a.put,t.next=4,r(s.doSettlement,n);case 4:if(o=t.sent,!o){t.next=16;break}if(p=o.result,!p){t.next=13;break}return t.next=10,i({type:"\u5904\u7406\u6210\u529f",payload:p});case 10:u.default.success("\u6210\u529f\u5904\u7406".concat(p,"\u6761\u8bb0\u5f55")),t.next=14;break;case 13:u.default.error("\u5904\u7406\u5931\u8d25\uff0c\u8bf7\u81f3\u6279\u91cf\u5904\u7406\u8bb0\u5f55\u67e5\u770b");case 14:t.next=17;break;case 16:u.default.error("\u5904\u7406\u5931\u8d25\uff0c\u8bf7\u81f3\u6279\u91cf\u5904\u7406\u8bb0\u5f55\u67e5\u770b");case 17:case"end":return t.stop()}},t,this)}),page:c.default.mark(function t(e,a){var n,r,i,o,p,d,l,f,y;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,i=a.put,o=n.pageSize,p=n.pageIndex,d=n.downTask,t.next=5,r(s.page,n);case 5:if(l=t.sent,!l){t.next=16;break}if(f=l.result,!f){t.next=16;break}if(!d||!f){t.next=13;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=16;break;case 13:return y={list:f.data,pagination:{total:f.totalCount,pageSize:o,pageIndex:p}},t.next=16,i({type:"pageSet",payload:y});case 16:case"end":return t.stop()}},t,this)}),queryStatistics:c.default.mark(function t(e,a){var n,r,u,i,o;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,u=a.put,t.next=4,r(s.doStatistics,n);case 4:if(i=t.sent,o=i.result,!o){t.next=9;break}return t.next=9,u({type:"setStatisticsData",payload:o});case 9:case"end":return t.stop()}},t,this)}),getPackageUnionOrder:c.default.mark(function t(e,a){var n,r,u,i,o;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,u=a.put,t.next=4,r(s.getPackageUnionOrder,n);case 4:if(i=t.sent,o=i.result,!o){t.next=9;break}return t.next=9,u({type:"setPackageUnionOrder",payload:o});case 9:case"end":return t.stop()}},t,this)})},reducers:{setStatisticsData:function(t,e){return(0,r.default)({},t,{statisticsData:e.payload})},clear:function(t){return(0,r.default)({},t,{packageUnionOrder:{},statisticsData:{}})},setPackageUnionOrder:function(t,e){return(0,r.default)({},t,{packageUnionOrder:e.payload})},pageSet:function(t,e){return(0,r.default)({},t,{pageData:e.payload})}}};e.default=i},"y/sZ":function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.page=i,e.getPackageUnionOrder=p,e.doSettlement=l,e.doStatistics=y;var r=n(a("o0o1")),c=n(a("yXPU")),u=a("Qyje"),s=n(a("t3Un"));function i(t){return o.apply(this,arguments)}function o(){return o=(0,c.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/payorder/").concat(e.entCode,"/").concat(e.pageIndex?e.pageIndex:0,"/").concat(e.pageSize?e.pageSize:10,"?").concat((0,u.stringify)(e))));case 1:case"end":return t.stop()}},t,this)})),o.apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return d=(0,c.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/packageunionorder/").concat(e.msisdn,"?orderNo=").concat(e.orderNo)));case 1:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return f=(0,c.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/payorder/settlement"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}function y(t){return h.apply(this,arguments)}function h(){return h=(0,c.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/payorder/").concat(e.entCode,"?").concat((0,u.stringify)(e))));case 1:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}}}]);