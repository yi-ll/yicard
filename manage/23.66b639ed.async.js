(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"/koN":function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("d6i3"));a("miYZ");var u=r(a("tsqr")),c=r(a("p0pE")),o=a("rEEz"),p={namespace:"monthmodel",state:{pageData:[],statisticsTotal:null,costData:{},cardtypes:[],loadingcardtype:!1,operators:[]},effects:{list:n.default.mark(function t(e,a){var r,p,s,l,d,i;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,p=a.call,s=r.downTask,l=(0,c.default)({},r,{pageIndex:r.pageIndex}),t.next=6,p(o.page,l);case 6:d=t.sent,i=d.result,d.message?u.default.error(d.message):s&&i&&u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b");case 9:case"end":return t.stop()}},t)}),page:n.default.mark(function t(e,a){var r,p,s,l,d,i,f,y,h;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,p=a.call,s=a.put,l=r.pageSize,d=r.downTask,i=(0,c.default)({},r,{pageIndex:r.pageIndex}),t.next=6,p(o.page,i);case 6:if(f=t.sent,!f){t.next=14;break}if(y=f.result,d&&y&&u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),!y){t.next=14;break}return h={list:y.data,pagination:{total:y.totalCount,pageSize:l,current:r.pageIndex+1}},t.next=14,s({type:"pageSet",payload:h});case 14:case"end":return t.stop()}},t)}),getstockCount:n.default.mark(function t(e,a){var r,u,c,p;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,u=a.call,c=a.put,t.next=4,u(o.stockcount,r);case 4:if(p=t.sent,!p||!p.result){t.next=8;break}return t.next=8,c({type:"setStockCount",payload:p.result});case 8:case"end":return t.stop()}},t)}),getCost:n.default.mark(function t(e,a){var r,u,c,p;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,u=a.call,c=a.put,t.next=4,u(o.monthcost,r);case 4:if(p=t.sent,!p||!p.result){t.next=8;break}return t.next=8,c({type:"setCost",payload:p.result});case 8:case"end":return t.stop()}},t)}),fetchcardtype:n.default.mark(function t(e,a){var r,u,c;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=a.call,u=a.put,t.next=3,u({type:"cardtypeLoading",payload:!0});case 3:return t.next=5,r(o.cardtypelist);case 5:if(c=t.sent,!c||!c.result){t.next=9;break}return t.next=9,u({type:"setCardType",payload:c.result});case 9:return t.next=11,u({type:"cardtypeLoading",payload:!1});case 11:case"end":return t.stop()}},t)}),queryOperator:n.default.mark(function t(e,a){var r,c,p,s;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=a.call,c=a.put,t.next=3,r(o.queryOperator);case 3:if(p=t.sent,s=p.result,!s){t.next=10;break}return t.next=8,c({type:"setOperator",payload:s});case 8:t.next=11;break;case 10:u.default.error(p.message?p.message:"\u67e5\u8be2\u5931\u8d25");case 11:case"end":return t.stop()}},t)})},reducers:{setCardType:function(t,e){return(0,c.default)({},t,{cardtypes:e.payload})},cardtypeLoading:function(t,e){return(0,c.default)({},t,{loadingcardtype:e.payload})},pageSet:function(t,e){return(0,c.default)({},t,{pageData:e.payload})},setStockCount:function(t,e){return(0,c.default)({},t,{statisticsTotal:e.payload})},setCost:function(t,e){return(0,c.default)({},t,{costData:e.payload})},setOperator:function(t,e){return(0,c.default)({},t,{operators:e.payload})}}};e.default=p},rEEz:function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.page=o,e.stockcount=s,e.monthcost=d,e.cardtypelist=f,e.queryOperator=h;var n=r(a("d6i3")),u=r(a("1l/V")),c=r(a("t3Un"));function o(t){return p.apply(this,arguments)}function p(){return p=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/monthreport/list"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return l=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/monthreport/statistics/").concat(e.month)));case 1:case"end":return t.stop()}},t)})),l.apply(this,arguments)}function d(t){return i.apply(this,arguments)}function i(){return i=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/monthreport/cost/").concat(e.month,"/").concat(e.entCode)));case 1:case"end":return t.stop()}},t)})),i.apply(this,arguments)}function f(){return y.apply(this,arguments)}function y(){return y=(0,u.default)(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/cardtype")));case 1:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function h(){return w.apply(this,arguments)}function w(){return w=(0,u.default)(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/operator")));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}}}]);