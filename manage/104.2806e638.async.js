(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{BR22:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE")),u=r(a("d6i3"));a("miYZ");var s=r(a("tsqr")),p=r(a("3a4m")),c=a("Pdby"),o={namespace:"platformorders",state:{pageData:[],submitting:!1},effects:{toChange:u.default.mark(function e(t,a){var r,n,o,i,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,o=a.put,e.next=4,o({type:"setSubmitting",payload:!0});case 4:return e.next=6,n(c.toChange,r);case 6:return i=e.sent,i?(d=i.result,l=i.code,d&&0===l&&(s.default.success("\u63d0\u4ea4\u6210\u529f"),p.default.push("./orders")),1===l&&s.default.error(i.message?i.message:"\u63d0\u4ea4\u5931\u8d25")):s.default.error("\u63d0\u4ea4\u5931\u8d25"),e.next=10,o({type:"setSubmitting",payload:!1});case 10:case"end":return e.stop()}},e)}),page:u.default.mark(function e(t,a){var r,s,p,o,i,d,l,f;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,p=a.put,o=r.pageSize,i=(0,n.default)({},r,{pageIndex:r.pageIndex}),e.next=6,s(c.page,i);case 6:if(d=e.sent,!d){e.next=13;break}if(l=d.result,!l){e.next=13;break}return f={list:l.data,pagination:{total:l.totalCount,pageSize:o,current:r.pageIndex+1}},e.next=13,p({type:"setList",payload:f});case 13:case"end":return e.stop()}},e)})},reducers:{setList:function(e,t){return(0,n.default)({},e,{pageData:t.payload})},setSubmitting:function(e,t){return(0,n.default)({},e,{submitting:t.payload})}}};t.default=o},Pdby:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.page=c,t.toChange=i;var n=r(a("d6i3")),u=r(a("1l/V")),s=a("Qyje"),p=r(a("t3Un"));function c(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/platformorder/page?").concat((0,s.stringify)(t))));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function i(e){return d.apply(this,arguments)}function d(){return d=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/platformorder"),{method:"PUT",body:t},!1));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}}}]);