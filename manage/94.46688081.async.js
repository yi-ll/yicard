(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{FPQw:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.post=s,t.page=o,t.del=d;var r=n(a("d6i3")),u=n(a("1l/V")),c=a("Qyje"),p=n(a("t3Un"));function s(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesspackage"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function o(e){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesspackage/list?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e)})),i.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/businesspackage/").concat(t),{method:"delete"}));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}},d4Xs:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3"));a("miYZ");var c=n(a("tsqr")),p=a("FPQw"),s={namespace:"customerpackagecfg",state:{pageData:[],newData:[]},effects:{delPkg:u.default.mark(function e(t,a){var n,r,s,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(p.del,n);case 4:if(l=e.sent,o=l.result,!o||!0!==o){e.next=12;break}return c.default.info("\u5220\u9664\u6210\u529f"),e.next=10,s({type:"delSet",payload:null});case 10:e.next=13;break;case 12:c.default.info("\u5220\u9664\u5931\u8d25");case 13:case"end":return e.stop()}},e)}),post:u.default.mark(function e(t,a){var n,r,s,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(p.post,n);case 4:if(l=e.sent,o=l.result,!o){e.next=9;break}return e.next=9,s({type:"postSet",payload:o});case 9:o&&o.id>0?c.default.info("\u63d0\u4ea4\u6210\u529f"):l&&l.message?c.default.error(l.message):c.default.error("\u63d0\u4ea4\u5931\u8d25");case 10:case"end":return e.stop()}},e)}),page:u.default.mark(function e(t,a){var n,c,s,l,o,i,d,f,w;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,c=a.call,s=a.put,l=n.pageIndex,o=n.pageSize,i=(0,r.default)({},n,{pageIndex:l-1}),e.next=7,c(p.page,i);case 7:if(d=e.sent,!d){e.next=14;break}if(f=d.result,!f){e.next=14;break}return w={list:f.data,pagination:{total:f.totalCount,pageSize:o,current:l}},e.next=14,s({type:"pageSet",payload:w});case 14:case"end":return e.stop()}},e)})},reducers:{delSet:function(e){return(0,r.default)({},e)},postSet:function(e,t){return(0,r.default)({},e,{newData:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})},clearRenew:function(e){return(0,r.default)({},e,{pageData:null})}}};t.default=s}}]);