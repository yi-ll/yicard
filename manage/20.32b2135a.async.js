(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"5MvO":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.post=o,t.get=i,t.page=s,t.del=y,t.doExport=h;var r=n(a("d6i3")),u=n(a("1l/V")),c=a("Qyje"),p=n(a("t3Un"));function o(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/packageunion"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function i(e){return d.apply(this,arguments)}function d(){return d=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/packageunion/getbyid?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function s(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/packageunion/page/").concat(t.pageIndex,"/").concat(t.pageSize).concat(t.name?"?name=".concat(t.name):"")));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return g=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/packageunion?id=").concat(t.id),{method:"delete"}));case 1:case"end":return e.stop()}},e)})),g.apply(this,arguments)}function h(e){return w.apply(this,arguments)}function w(){return w=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/packageunion/export?").concat((0,c.stringify)(t))));case 1:case"end":return e.stop()}},e)})),w.apply(this,arguments)}},"e9o/":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3"));a("miYZ");var c=n(a("tsqr")),p=n(a("3a4m")),o=a("5MvO"),l={namespace:"packageunionconfig",state:{pageData:[],oldData:[],newData:[],delData:[]},effects:{doExport:u.default.mark(function e(t,a){var n,r,p,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(o.doExport,n);case 4:p=e.sent,l=p.result,l?c.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"):c.default.info("\u63d0\u4ea4\u5931\u8d25");case 7:case"end":return e.stop()}},e)}),post:u.default.mark(function e(t,a){var n,r,l,i,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,l=a.put,e.next=4,r(o.post,n);case 4:return i=e.sent,d=i.result,e.next=8,l({type:"postSet",payload:d});case 8:d&&d.id>0?(c.default.info("\u63d0\u4ea4\u6210\u529f"),p.default.push("/config/packageunion")):c.default.info("\u63d0\u4ea4\u5931\u8d25");case 9:case"end":return e.stop()}},e)}),get:u.default.mark(function e(t,a){var n,r,c,p;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(o.get,n);case 4:return p=e.sent,e.next=7,c({type:"getSet",payload:p.result});case 7:case"end":return e.stop()}},e)}),page:u.default.mark(function e(t,a){var n,c,p,l,i,d,s,f,y,g;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,c=a.call,p=a.put,l=n.pageSize,i=n.pageIndex,d=i,s=(0,r.default)({},n,{pageIndex:d-1}),e.next=7,c(o.page,s);case 7:if(f=e.sent,y=f.result,!y){e.next=13;break}return g={list:y.data,pagination:{total:y.totalCount,pageSize:l,current:d}},e.next=13,p({type:"pageSet",payload:g});case 13:case"end":return e.stop()}},e)}),del:u.default.mark(function e(t,a){var n,r,p,l,i,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,p=a.put,l=n.pageSize,i=n.pageIndex,e.next=5,r(o.del,n);case 5:return d=e.sent,s=d.result,e.next=9,p({type:"delSet",payload:s});case 9:if(!s||!0!==s){e.next=15;break}return c.default.info("\u5220\u9664\u6210\u529f"),e.next=13,p({type:"page",payload:{pageIndex:i,pageSize:l}});case 13:e.next=16;break;case 15:c.default.info("\u5220\u9664\u5931\u8d25");case 16:case"end":return e.stop()}},e)})},reducers:{getSet:function(e,t){return(0,r.default)({},e,{oldData:t.payload})},postSet:function(e,t){return(0,r.default)({},e,{newData:t.payload})},pageSet:function(e,t){return(0,r.default)({},e,{pageData:t.payload})},delSet:function(e,t){return(0,r.default)({},e,{delData:t.payload})}}};t.default=l}}]);