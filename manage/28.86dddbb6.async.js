(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{LTst:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE"));a("miYZ");var u=n(a("tsqr")),p=n(a("d6i3")),c=n(a("3a4m")),l=a("Yu7n"),s={namespace:"partner",state:{pageData:[],oldData:[],newData:[],delData:[],enterprises:[]},effects:{getEnter:p.default.mark(function e(t,a){var n,r,u;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,r=a.put,e.next=3,n(l.getenterprise);case 3:return u=e.sent,e.next=6,r({type:"setEnterprise",payload:u.result});case 6:case"end":return e.stop()}},e)}),post:p.default.mark(function e(t,a){var n,r,s,o,d;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(l.post,n);case 4:return o=e.sent,d=o.result,e.next=8,s({type:"postSet",payload:d});case 8:d&&d.id>0?(u.default.info("\u63d0\u4ea4\u6210\u529f"),c.default.push("/config/partner")):u.default.error(o&&o.message||"\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return e.stop()}},e)}),get:p.default.mark(function e(t,a){var n,r,u,c;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(l.get,n);case 4:return c=e.sent,e.next=7,u({type:"getSet",payload:c.result});case 7:case"end":return e.stop()}},e)}),page:p.default.mark(function e(t,a){var n,u,c,s,o,d,i,f,y;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,c=a.put,s=n.pageIndex,o=n.pageSize,d=(0,r.default)({},n,{pageIndex:s-1}),e.next=7,u(l.page,d);case 7:return i=e.sent,f=i.result,y={list:f.data,pagination:{total:f.totalCount,pageSize:o,current:s}},e.next=12,c({type:"pageSet",payload:y});case 12:case"end":return e.stop()}},e)}),del:p.default.mark(function e(t,a){var n,r,c,s,o,d,i;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,s=n.pageSize,o=n.pageIndex,e.next=5,r(l.del,n);case 5:return d=e.sent,i=d.result,e.next=9,c({type:"delSet",payload:i});case 9:if(!i||!0!==i){e.next=15;break}return u.default.info("\u5220\u9664\u6210\u529f"),e.next=13,c({type:"page",payload:{pageIndex:o,pageSize:s}});case 13:e.next=16;break;case 15:u.default.error(d&&d.message||"\u63d0\u4ea4\u5931\u8d25");case 16:case"end":return e.stop()}},e)})},reducers:{setEnterprise:function(e,t){return(0,r.default)({},e,{enterprises:t.payload})},getSet:function(e,t){return(0,r.default)({},e,{oldData:t.payload})},postSet:function(e,t){return(0,r.default)({},e,{newData:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})},delSet:function(e,t){return(0,r.default)({},e,{delData:t.payload})}}};t.default=s},Yu7n:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.post=l,t.get=o,t.page=i,t.del=y,t.getenterprise=w;var r=n(a("d6i3")),u=n(a("1l/V")),p=a("Qyje"),c=n(a("t3Un"));function l(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/partner"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}function o(e){return d.apply(this,arguments)}function d(){return d=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/partner/").concat((0,p.stringify)(t))));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function i(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/partner/page/").concat(t.pageIndex?t.pageIndex:0,"/").concat(t.pageSize?t.pageSize:10)));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return h=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/partner/").concat(t.id),{method:"delete"}));case 1:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("http://api-prod.yi-ll.com/card/").concat("v1","/partner")));case 1:case"end":return e.stop()}},e)})),g.apply(this,arguments)}}}]);