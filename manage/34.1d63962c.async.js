(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{E0wk:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1"));a("miYZ");var s=n(a("tsqr")),c=a("YfiC"),p={namespace:"enterpriseConfig",state:{pageData:{},handleOver:!1},effects:{update:u.default.mark(function e(t,a){var n,r,p,i,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,p=a.put,e.next=4,p({type:"setHandlerOver",payload:!1});case 4:return e.next=6,r(c.update,n);case 6:if(i=e.sent,o=i.result,!o){e.next=14;break}return s.default.info("\u63d0\u4ea4\u6210\u529f"),e.next=12,p({type:"setHandlerOver",payload:!0});case 12:e.next=15;break;case 14:s.default.error(i&&i.message?i.message:"\u63d0\u4ea4\u5931\u8d25");case 15:case"end":return e.stop()}},e,this)}),post:u.default.mark(function e(t,a){var n,r,p,i,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,p=a.put,e.next=4,p({type:"setHandlerOver",payload:!1});case 4:return e.next=6,r(c.post,n);case 6:if(i=e.sent,o=i.result,!(o&&o.id>0)){e.next=14;break}return s.default.info("\u63d0\u4ea4\u6210\u529f"),e.next=12,p({type:"setHandlerOver",payload:!0});case 12:e.next=15;break;case 14:s.default.error(i&&i.message?i.message:"\u63d0\u4ea4\u5931\u8d25");case 15:case"end":return e.stop()}},e,this)}),page:u.default.mark(function e(t,a){var n,s,p,i,o,l,d,f,h;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,p=a.put,i=n.pageIndex,o=n.pageSize,l=(0,r.default)({},n,{pageIndex:i-1}),e.next=7,s(c.page,l);case 7:return d=e.sent,f=d.result,h={list:f.data,pagination:{total:f.totalCount,pageSize:o,current:i}},e.next=12,p({type:"setPageData",payload:h});case 12:case"end":return e.stop()}},e,this)}),del:u.default.mark(function e(t,a){var n,r,p,i,o,l,d,f,h;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,p=a.put,i=n.pageSize,o=n.pageIndex,l=n.id,d=n.entCode,e.next=5,r(c.del,l);case 5:if(f=e.sent,h=f.result,!h||!0!==h){e.next=13;break}return s.default.info("\u5220\u9664\u6210\u529f"),e.next=11,p({type:"page",payload:{pageIndex:o,pageSize:i,entCode:d}});case 11:e.next=14;break;case 13:s.default.error(f&&f.message?f.message:"\u5220\u9664\u5931\u8d25");case 14:case"end":return e.stop()}},e,this)})},reducers:{setHandlerOver:function(e,t){return(0,r.default)({},e,{handleOver:t.payload})},setPageData:function(e,t){return(0,r.default)({},e,{pageData:t.payload})}}};t.default=p},YfiC:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.post=p,t.page=o,t.del=d,t.update=h;var r=n(a("o0o1")),u=n(a("yXPU")),s=a("Qyje"),c=n(a("t3Un"));function p(e){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/enterpriseconfig"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),i.apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/enterpriseconfig/page?").concat((0,s.stringify)(t))));case 1:case"end":return e.stop()}},e,this)})),l.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/enterpriseconfig/").concat(t),{method:"delete"}));case 1:case"end":return e.stop()}},e,this)})),f.apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/enterpriseconfig/").concat(t.id),{method:"PUT",body:t}));case 1:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}}}]);