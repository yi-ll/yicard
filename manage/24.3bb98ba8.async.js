(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{TZO6:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),c=n(a("d6i3"));a("miYZ");var u=n(a("tsqr")),o=a("y/sZ"),i={namespace:"payOrderModel",state:{pageData:[],packageUnionOrder:{},statisticsData:{}},effects:{doSettlement:c.default.mark(function e(t,a){var n,r,i,s,p;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,i=a.put,e.next=4,r(o.doSettlement,n);case 4:if(s=e.sent,!s){e.next=16;break}if(p=s.result,!p){e.next=13;break}return e.next=10,i({type:"\u5904\u7406\u6210\u529f",payload:p});case 10:u.default.success("\u6210\u529f\u5904\u7406".concat(p,"\u6761\u8bb0\u5f55")),e.next=14;break;case 13:u.default.error("\u5904\u7406\u5931\u8d25\uff0c\u8bf7\u81f3\u6279\u91cf\u5904\u7406\u8bb0\u5f55\u67e5\u770b");case 14:e.next=17;break;case 16:u.default.error("\u5904\u7406\u5931\u8d25\uff0c\u8bf7\u81f3\u6279\u91cf\u5904\u7406\u8bb0\u5f55\u67e5\u770b");case 17:case"end":return e.stop()}},e)}),page:c.default.mark(function e(t,a){var n,r,i,s,p,d,l,f,y;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,i=a.put,s=n.pageSize,p=n.pageIndex,d=n.downTask,e.next=5,r(o.page,n);case 5:if(l=e.sent,!l){e.next=16;break}if(f=l.result,!f){e.next=16;break}if(!d||!f){e.next=13;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=16;break;case 13:return y={list:f.data,pagination:{total:f.totalCount,pageSize:s,pageIndex:p}},e.next=16,i({type:"pageSet",payload:y});case 16:case"end":return e.stop()}},e)}),queryStatistics:c.default.mark(function e(t,a){var n,r,u,i,s;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(o.doStatistics,n);case 4:if(i=e.sent,s=i.result,!s){e.next=9;break}return e.next=9,u({type:"setStatisticsData",payload:s});case 9:case"end":return e.stop()}},e)}),getPackageUnionOrder:c.default.mark(function e(t,a){var n,r,u,i,s;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(o.getPackageUnionOrder,n);case 4:if(i=e.sent,s=i.result,!s){e.next=9;break}return e.next=9,u({type:"setPackageUnionOrder",payload:s});case 9:case"end":return e.stop()}},e)})},reducers:{setStatisticsData:function(e,t){return(0,r.default)({},e,{statisticsData:t.payload})},clear:function(e){return(0,r.default)({},e,{packageUnionOrder:{},statisticsData:{}})},setPackageUnionOrder:function(e,t){return(0,r.default)({},e,{packageUnionOrder:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})}}};t.default=i},"y/sZ":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.page=i,t.getPackageUnionOrder=p,t.doSettlement=l,t.doStatistics=y;var r=n(a("d6i3")),c=n(a("1l/V")),u=a("Qyje"),o=n(a("t3Un"));function i(e){return s.apply(this,arguments)}function s(){return s=(0,c.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/payorder/").concat(t.entCode,"/").concat(t.pageIndex?t.pageIndex:0,"/").concat(t.pageSize?t.pageSize:10,"?").concat((0,u.stringify)(t))));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return d=(0,c.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/packageunionorder/").concat(t.msisdn,"?orderNo=").concat(t.orderNo)));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return f=(0,c.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/payorder/settlement"),{method:"PUT",body:t}));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return g=(0,c.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/payorder/").concat(t.entCode,"?").concat((0,u.stringify)(t))));case 1:case"end":return e.stop()}},e)})),g.apply(this,arguments)}}}]);