(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{BtNc:function(t,e,n){"use strict";var a=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.get=s,e.tenant=i,e.toRecharge=p;var r=a(n("o0o1")),u=a(n("yXPU")),c=a(n("t3Un"));function s(){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/account")));case 1:case"end":return t.stop()}},t,this)})),o.apply(this,arguments)}function i(){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/tenant")));case 1:case"end":return t.stop()}},t,this)})),l.apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/account/recharge"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}},owJz:function(t,e,n){"use strict";var a=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("MVZn")),u=a(n("o0o1"));n("miYZ");var c=a(n("tsqr")),s=n("BtNc"),o={namespace:"myaccount",state:{account:[],tenantInfo:{}},effects:{toRecharge:u.default.mark(function t(e,n){var a,r,o,i;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,r=n.call,t.next=4,r(s.toRecharge,a);case 4:o=t.sent,o?(i=o.result,i?c.default.info("\u63d0\u4ea4\u6210\u529f"):c.default.error(o.message?o.message:"\u63d0\u4ea4\u5931\u8d25")):c.default.error("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return t.stop()}},t,this)}),getAccount:u.default.mark(function t(e,n){var a,r,c;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.call,r=n.put,t.next=3,a(s.get);case 3:if(c=t.sent,!c||!c.result){t.next=7;break}return t.next=7,r({type:"setAccount",payload:c.result});case 7:case"end":return t.stop()}},t,this)}),getTenant:u.default.mark(function t(e,n){var a,r,c;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.call,r=n.put,t.next=3,a(s.tenant);case 3:if(c=t.sent,!c||!c.result){t.next=7;break}return t.next=7,r({type:"setTenant",payload:c.result});case 7:case"end":return t.stop()}},t,this)})},reducers:{setAccount:function(t,e){return(0,r.default)({},t,{account:e.payload})},setTenant:function(t,e){return(0,r.default)({},t,{tenantInfo:e.payload})}}};e.default=o}}]);