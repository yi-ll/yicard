(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[100],{a5jZ:function(e,t,n){"use strict";var r=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("p0pE"));n("miYZ");var s=r(n("tsqr")),u=r(n("d6i3")),o=n("pqMf"),i={namespace:"apipermission",state:{permissionOptions:{},account:{},token:null},effects:{getToken:u.default.mark(function e(t,n){var r,a,s,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,a=n.call,s=n.put,e.next=4,a(o.getToken,r);case 4:return i=e.sent,e.next=7,s({type:"setToken",payload:i.result});case 7:case"end":return e.stop()}},e)}),get:u.default.mark(function e(t,n){var r,a,s,i,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,a=n.call,s=n.put,e.next=4,a(o.get,r);case 4:if(i=e.sent,!i||!i.result){e.next=9;break}return c={list:i.result,pagination:{total:i.result.length,pageSize:100,pageIndex:1}},e.next=9,s({type:"setPermissionOptions",payload:c});case 9:case"end":return e.stop()}},e)}),post:u.default.mark(function e(t,n){var r,a,i,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,a=n.call,e.next=4,a(o.post,r);case 4:i=e.sent,c=i.result,c?s.default.info("\u63d0\u4ea4\u6210\u529f"):s.default.info(i&&i.message?i.message:"\u63d0\u4ea4\u5931\u8d25");case 7:case"end":return e.stop()}},e)})},reducers:{setToken:function(e,t){return(0,a.default)({},e,{token:t.payload})},setPermissionOptions:function(e,t){return(0,a.default)({},e,{permissionOptions:t.payload})},clearPermissionOptions:function(e){return(0,a.default)({},e,{permissionOptions:{}})}}};t.default=i},pqMf:function(e,t,n){"use strict";var r=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.get=o,t.post=c,t.getToken=l;var a=r(n("d6i3")),s=r(n("1l/V")),u=r(n("t3Un"));function o(e){return i.apply(this,arguments)}function i(){return i=(0,s.default)(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/enterprisepermission/").concat(t)));case 1:case"end":return e.stop()}},e)})),i.apply(this,arguments)}function c(e){return p.apply(this,arguments)}function p(){return p=(0,s.default)(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/enterprisepermission"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=(0,s.default)(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/token/").concat(t)));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}}}]);