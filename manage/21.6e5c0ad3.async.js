(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{JIE2:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3"));a("miYZ");var p=n(a("tsqr")),c=n(a("3a4m")),i=a("tzrH"),l={namespace:"redisconfig",state:{pageData:[],oldData:[],newData:[],delData:[]},effects:{post:u.default.mark(function e(t,a){var n,r,l,d,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,l=a.put,e.next=4,r(i.post,n);case 4:return d=e.sent,o=d.result,e.next=8,l({type:"postSet",payload:o});case 8:o&&o.id>0?(p.default.info("\u63d0\u4ea4\u6210\u529f"),c.default.push("/config/redis")):p.default.info("\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return e.stop()}},e)}),get:u.default.mark(function e(t,a){var n,r,p,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,p=a.put,e.next=4,r(i.get,n);case 4:return c=e.sent,e.next=7,p({type:"getSet",payload:c.result});case 7:case"end":return e.stop()}},e)}),page:u.default.mark(function e(t,a){var n,p,c,l,d,o,s,f,y;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,p=a.call,c=a.put,l=n.pageIndex,d=n.pageSize,o=(0,r.default)({},n,{pageIndex:l-1}),e.next=7,p(i.page,o);case 7:return s=e.sent,f=s.result,y={list:f.data,pagination:{total:f.totalCount,pageSize:d,current:l}},e.next=12,c({type:"pageSet",payload:y});case 12:case"end":return e.stop()}},e)}),del:u.default.mark(function e(t,a){var n,r,c,l,d,o,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,l=n.pageSize,d=n.pageIndex,e.next=5,r(i.del,n);case 5:return o=e.sent,s=o.result,e.next=9,c({type:"delSet",payload:s});case 9:if(!s||!0!==s){e.next=15;break}return p.default.info("\u5220\u9664\u6210\u529f"),e.next=13,c({type:"page",payload:{pageIndex:d,pageSize:l}});case 13:e.next=16;break;case 15:p.default.info("\u5220\u9664\u5931\u8d25");case 16:case"end":return e.stop()}},e)})},reducers:{getSet:function(e,t){return(0,r.default)({},e,{oldData:t.payload})},postSet:function(e,t){return(0,r.default)({},e,{newData:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})},delSet:function(e,t){return(0,r.default)({},e,{delData:t.payload})}}};t.default=l},tzrH:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.post=i,t.get=d,t.page=s,t.del=y;var r=n(a("d6i3")),u=n(a("1l/V")),p=a("Qyje"),c=n(a("t3Un"));function i(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/","redisconfig/post"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function d(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/","redisconfig/getbyid?").concat((0,p.stringify)(t))));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function s(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/","redisconfig/page?").concat((0,p.stringify)(t))));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/","redisconfig/delete?").concat((0,p.stringify)(t)),{method:"delete"}));case 1:case"end":return e.stop()}},e)})),g.apply(this,arguments)}}}]);