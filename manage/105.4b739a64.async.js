(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{Xtz9:function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.page=o,e.toOrder=l,e.tenant=d,e.getProduct=y;var n=r(a("d6i3")),u=r(a("1l/V")),c=a("Qyje"),p=r(a("t3Un"));function o(t){return s.apply(this,arguments)}function s(){return s=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/platformproduct/page?").concat((0,c.stringify)(e))));case 1:case"end":return t.stop()}},t)})),s.apply(this,arguments)}function l(t){return i.apply(this,arguments)}function i(){return i=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/platformproduct"),{method:"POST",body:e},!1));case 1:case"end":return t.stop()}},t)})),i.apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return f=(0,u.default)(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/tenant")));case 1:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function y(){return h.apply(this,arguments)}function h(){return h=(0,u.default)(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/platformproduct")));case 1:case"end":return t.stop()}},t)})),h.apply(this,arguments)}},cPQF:function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("p0pE"));a("miYZ");var u=r(a("tsqr")),c=r(a("d6i3")),p=r(a("3a4m")),o=a("Xtz9"),s={namespace:"platformproduct",state:{pageData:[],submitting:!1,tenantInfo:{},prevProduct:null},effects:{getTenant:c.default.mark(function t(e,a){var r,n,u;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=a.call,n=a.put,t.next=3,r(o.tenant);case 3:if(u=t.sent,!u||!u.result){t.next=7;break}return t.next=7,n({type:"setTenant",payload:u.result});case 7:case"end":return t.stop()}},t)}),toOrder:c.default.mark(function t(e,a){var r,n,s,l,i,d;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,s=a.put,t.next=4,s({type:"setSubmitting",payload:!0});case 4:return t.next=6,n(o.toOrder,r);case 6:return l=t.sent,l?(i=l.result,d=l.code,i&&0===d&&(u.default.success("\u8ba2\u8d2d\u6210\u529f"),p.default.push("/platformservice/orders")),1===d&&u.default.error(l.message?l.message:"\u8ba2\u8d2d\u5931\u8d25")):u.default.error("\u8ba2\u8d2d\u5931\u8d25"),t.next=10,s({type:"setSubmitting",payload:!1});case 10:case"end":return t.stop()}},t)}),page:c.default.mark(function t(e,a){var r,u,p,s,l,i,d,f;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,u=a.call,p=a.put,s=r.pageSize,l=(0,n.default)({},r,{pageIndex:r.pageIndex}),t.next=6,u(o.page,l);case 6:if(i=t.sent,!i){t.next=13;break}if(d=i.result,!d){t.next=13;break}return f={list:d.data,pagination:{total:d.totalCount,pageSize:s,current:r.pageIndex+1}},t.next=13,p({type:"setList",payload:f});case 13:case"end":return t.stop()}},t)}),getProduct:c.default.mark(function t(e,a){var r,n,u,p;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=a.call,n=a.put,t.next=3,r(o.getProduct);case 3:if(u=t.sent,!u){t.next=9;break}if(p=u.result,!p){t.next=9;break}return t.next=9,n({type:"setPrevProduct",payload:p});case 9:case"end":return t.stop()}},t)})},reducers:{setPrevProduct:function(t,e){return(0,n.default)({},t,{prevProduct:e.payload})},setList:function(t,e){return(0,n.default)({},t,{pageData:e.payload})},setSubmitting:function(t,e){return(0,n.default)({},t,{submitting:e.payload})},setTenant:function(t,e){return(0,n.default)({},t,{tenantInfo:e.payload})}}};e.default=s}}]);