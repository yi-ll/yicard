(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[108],{"7/iX":function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("MVZn"));a("miYZ");var u=n(a("tsqr")),s=n(a("o0o1")),c=a("w+Yb"),p={namespace:"smgateway",state:{tenants:[],pageData:[],oldData:{},newData:[],delData:[],operators:[],operatorsmgateways:[],addResult:!1},effects:{getTenant:s.default.mark(function t(e,a){var n,r,u;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=a.call,r=a.put,t.next=3,n(c.gettenant);case 3:if(u=t.sent,!u||!u.result){t.next=7;break}return t.next=7,r({type:"setTenant",payload:u.result});case 7:case"end":return t.stop()}},t,this)}),add:s.default.mark(function t(e,a){var n,r,p,o,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,p=a.put,t.next=4,r(c.add,n);case 4:return o=t.sent,l=o.result,t.next=8,p({type:"setAdd",payload:l});case 8:l?u.default.info("\u63d0\u4ea4\u6210\u529f"):o.message?u.default.error("\u63d0\u4ea4\u5931\u8d25,".concat(o.message)):u.default.error("\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return t.stop()}},t,this)}),query:s.default.mark(function t(e,a){var n,r,u,p,o;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,u=a.put,t.next=4,r(c.query,n);case 4:if(p=t.sent,!p){t.next=9;break}return o=p.result,t.next=9,u({type:"setQuery",payload:o});case 9:case"end":return t.stop()}},t,this)}),list:s.default.mark(function t(e,a){var n,r,u,p,o;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,u=a.put,t.next=4,r(c.list,n);case 4:if(p=t.sent,!p){t.next=9;break}return o=p.result,t.next=9,u({type:"setList",payload:o});case 9:case"end":return t.stop()}},t,this)}),update:s.default.mark(function t(e,a){var n,r,p,o,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,p=a.put,t.next=4,r(c.update,n);case 4:return o=t.sent,l=o.result,t.next=8,p({type:"postSet",payload:l});case 8:l?u.default.info("\u63d0\u4ea4\u6210\u529f"):o.message?u.default.error("\u63d0\u4ea4\u5931\u8d25,".concat(o.message)):u.default.error("\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return t.stop()}},t,this)}),post:s.default.mark(function t(e,a){var n,r,p,o,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,p=a.put,t.next=4,r(c.post,n);case 4:return o=t.sent,l=o.result,t.next=8,p({type:"postSet",payload:l});case 8:l?u.default.info("\u63d0\u4ea4\u6210\u529f"):o.message?u.default.error("\u63d0\u4ea4\u5931\u8d25,".concat(o.message)):u.default.error("\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return t.stop()}},t,this)}),page:s.default.mark(function t(e,a){var n,p,o,l,d,i,f,y,h,w;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,p=a.call,o=a.put,l=n.pageIndex,d=n.pageSize,i=n.downTask,f=(0,r.default)({},n,{pageIndex:l-1}),t.next=7,p(c.page,f);case 7:if(y=t.sent,h=y.result,!i||!h){t.next=13;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=16;break;case 13:return w={list:h.data,pagination:{total:h.totalCount,pageSize:d,current:l}},t.next=16,o({type:"pageSet",payload:w});case 16:case"end":return t.stop()}},t,this)}),del:s.default.mark(function t(e,a){var n,r,p,o,l,d,i,f,y,h;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,p=a.put,o=n.pageSize,l=n.pageIndex,d=n.id,i=n.entCode,f=n.setType,t.next=5,r(c.del,d);case 5:if(y=t.sent,h=y.result,!h){t.next=15;break}return t.next=10,p({type:"delSet",payload:h});case 10:return u.default.info("\u5220\u9664\u6210\u529f"),t.next=13,p({type:"page",payload:{pageIndex:l,pageSize:o,entCode:i,setType:f}});case 13:t.next=16;break;case 15:u.default.error(y.message?y.message:"\u5220\u9664\u5931\u8d25");case 16:case"end":return t.stop()}},t,this)})},reducers:{setTenant:function(t,e){return(0,r.default)({},t,{tenants:e.payload})},setAdd:function(t,e){return(0,r.default)({},t,{addResult:e.payload})},setQuery:function(t,e){return(0,r.default)({},t,{operatorsmgateways:e.payload})},setList:function(t,e){return(0,r.default)({},t,{operators:e.payload})},postSet:function(t,e){return(0,r.default)({},t,{newData:e.payload})},pageSet:function(t,e){return(0,r.default)({},t,{pageData:e.payload})},delSet:function(t,e){return(0,r.default)({},t,{delData:e.payload})}}};e.default=p},"w+Yb":function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.post=p,e.update=l,e.page=i,e.del=y,e.add=w,e.query=x,e.list=v,e.gettenant=b;var r=n(a("o0o1")),u=n(a("yXPU")),s=a("Qyje"),c=n(a("t3Un"));function p(t){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/smgateway"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),o.apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return d=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/smgateway/").concat(e.id),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}function i(t){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/smgateway/page?").concat((0,s.stringify)(e))));case 1:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}function y(t){return h.apply(this,arguments)}function h(){return h=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/smgateway/").concat(e),{method:"delete"}));case 1:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function w(t){return m.apply(this,arguments)}function m(){return m=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/operatorsmgateway"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),m.apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/operatorsmgateway?").concat((0,s.stringify)(e))));case 1:case"end":return t.stop()}},t,this)})),g.apply(this,arguments)}function v(t){return k.apply(this,arguments)}function k(){return k=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/operatorsmgateway/").concat(e)));case 1:case"end":return t.stop()}},t,this)})),k.apply(this,arguments)}function b(){return S.apply(this,arguments)}function S(){return S=(0,u.default)(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/partner")));case 1:case"end":return t.stop()}},t,this)})),S.apply(this,arguments)}}}]);