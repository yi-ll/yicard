(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{hf1U:function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("MVZn")),u=r(a("o0o1"));a("miYZ");var c=r(a("tsqr")),s=r(a("usdK")),o=a("scNQ"),i={namespace:"overdraft",state:{pageData:[],account:{}},effects:{page:u.default.mark(function t(e,a){var r,n,s,i,d,l,p,f,h;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,s=a.put,i=r.pageSize,d=r.pageIndex,l=r.downTask,t.next=5,n(o.page,r);case 5:if(p=t.sent,!p){t.next=16;break}if(f=p.result,!f){t.next=16;break}if(!l||!f){t.next=13;break}c.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=16;break;case 13:return h={list:f.data,pagination:{total:f.totalCount,pageSize:i,pageIndex:d}},t.next=16,s({type:"pageSet",payload:h});case 16:case"end":return t.stop()}},t,this)}),add:u.default.mark(function t(e,a){var r,n,s,i,d;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,s=a.put,t.next=4,n(o.batch,r);case 4:if(i=t.sent,!i){t.next=16;break}if(d=i.result,!d){t.next=13;break}return c.default.info("\u63d0\u4ea4\u6210\u529f"),t.next=11,s({type:"setOverdraft",payload:d});case 11:t.next=14;break;case 13:c.default.error(i.message?i.message:"\u63d0\u4ea4\u5931\u8d25");case 14:t.next=17;break;case 16:c.default.error("\u63d0\u4ea4\u5931\u8d25");case 17:case"end":return t.stop()}},t,this)}),chkOverdraft:u.default.mark(function t(e,a){var r,n,i,d;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,t.next=4,n(o.check,r);case 4:i=t.sent,i?(d=i.result,d?(c.default.info("\u63d0\u4ea4\u6210\u529f"),s.default.push("/myaccount/overdraft")):c.default.error(i.message?i.message:"\u63d0\u4ea4\u5931\u8d25")):c.default.error("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return t.stop()}},t,this)}),getAccount:u.default.mark(function t(e,a){var r,n,c,s;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,c=a.put,t.next=4,n(o.get,r);case 4:if(s=t.sent,!s||!s.result){t.next=8;break}return t.next=8,c({type:"setAccount",payload:s.result});case 8:case"end":return t.stop()}},t,this)})},reducers:{setOverdraft:function(t){return(0,n.default)({},t)},setAccount:function(t,e){return(0,n.default)({},t,{account:e.payload})},pageSet:function(t,e){return(0,n.default)({},t,{pageData:e.payload})},clearAccount:function(t){return(0,n.default)({},t,{account:{}})}}};e.default=i},scNQ:function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.page=s,e.batch=i,e.check=l,e.get=f;var n=r(a("o0o1")),u=r(a("yXPU")),c=r(a("t3Un"));function s(t){return o.apply(this,arguments)}function o(){return o=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/overdraft/page"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),o.apply(this,arguments)}function i(t){return d.apply(this,arguments)}function d(){return d=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/overdraft/batch"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return p=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/withdrawdetail?id=").concat(e.id),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t,this)})),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/account/").concat(e)));case 1:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}}}]);