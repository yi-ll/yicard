(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{LTst:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn"));a("miYZ");var u=n(a("tsqr")),p=n(a("o0o1")),c=n(a("usdK")),s=a("Yu7n"),l={namespace:"partner",state:{pageData:[],oldData:[],newData:[],delData:[],enterprises:[]},effects:{getEnter:p.default.mark(function e(t,a){var n,r,u;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,r=a.put,e.next=3,n(s.getenterprise);case 3:return u=e.sent,e.next=6,r({type:"setEnterprise",payload:u.result});case 6:case"end":return e.stop()}},e,this)}),post:p.default.mark(function e(t,a){var n,r,l,i,o;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,l=a.put,e.next=4,r(s.post,n);case 4:return i=e.sent,o=i.result,e.next=8,l({type:"postSet",payload:o});case 8:o&&o.id>0?(u.default.info("\u63d0\u4ea4\u6210\u529f"),c.default.push("/config/partner")):u.default.error(i&&i.message||"\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return e.stop()}},e,this)}),get:p.default.mark(function e(t,a){var n,r,u,c;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(s.get,n);case 4:return c=e.sent,e.next=7,u({type:"getSet",payload:c.result});case 7:case"end":return e.stop()}},e,this)}),page:p.default.mark(function e(t,a){var n,u,c,l,i,o,d,f,h;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,u=a.call,c=a.put,l=n.pageIndex,i=n.pageSize,o=(0,r.default)({},n,{pageIndex:l-1}),e.next=7,u(s.page,o);case 7:return d=e.sent,f=d.result,h={list:f.data,pagination:{total:f.totalCount,pageSize:i,current:l}},e.next=12,c({type:"pageSet",payload:h});case 12:case"end":return e.stop()}},e,this)}),del:p.default.mark(function e(t,a){var n,r,c,l,i,o,d;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,l=n.pageSize,i=n.pageIndex,e.next=5,r(s.del,n);case 5:return o=e.sent,d=o.result,e.next=9,c({type:"delSet",payload:d});case 9:if(!d||!0!==d){e.next=15;break}return u.default.info("\u5220\u9664\u6210\u529f"),e.next=13,c({type:"page",payload:{pageIndex:i,pageSize:l}});case 13:e.next=16;break;case 15:u.default.error(o&&o.message||"\u63d0\u4ea4\u5931\u8d25");case 16:case"end":return e.stop()}},e,this)})},reducers:{setEnterprise:function(e,t){return(0,r.default)({},e,{enterprises:t.payload})},getSet:function(e,t){return(0,r.default)({},e,{oldData:t.payload})},postSet:function(e,t){return(0,r.default)({},e,{newData:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})},delSet:function(e,t){return(0,r.default)({},e,{delData:t.payload})}}};t.default=l},Yu7n:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.post=s,t.get=i,t.page=d,t.del=h,t.getenterprise=w;var r=n(a("o0o1")),u=n(a("yXPU")),p=a("Qyje"),c=n(a("t3Un"));function s(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/partner"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),l.apply(this,arguments)}function i(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/partner/").concat((0,p.stringify)(t))));case 1:case"end":return e.stop()}},e,this)})),o.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/partner/page/").concat(t.pageIndex?t.pageIndex:0,"/").concat(t.pageSize?t.pageSize:10)));case 1:case"end":return e.stop()}},e,this)})),f.apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/partner/").concat(t.id),{method:"delete"}));case 1:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/partner")));case 1:case"end":return e.stop()}},e,this)})),g.apply(this,arguments)}}}]);