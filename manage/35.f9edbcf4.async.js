(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{OZgU:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1")),c=a("YJ04"),o={namespace:"smmodels",state:{pageData:[],objData:{}},effects:{get:u.default.mark(function t(e,a){var n,r,o,p;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,o=a.put,t.next=4,r(c.get,n);case 4:return p=t.sent,t.next=7,o({type:"getSet",payload:p.result});case 7:case"end":return t.stop()}},t,this)}),page:u.default.mark(function t(e,a){var n,o,p,s,i,l,d,f;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,o=a.call,p=a.put,s=n.pageSize,i=(0,r.default)({},n,{pageIndex:n.pageIndex}),t.next=6,o(c.page,i);case 6:return l=t.sent,d=l.result,f={list:d.data,pagination:{total:d.totalCount,pageSize:s,current:n.pageIndex+1}},t.next=11,p({type:"pageSet",payload:f});case 11:case"end":return t.stop()}},t,this)})},reducers:{getSet:function(t,e){return(0,r.default)({},t,{objData:e.payload})},pageSet:function(t,e){return(0,r.default)({},t,{pageData:e.payload})},clear:function(t){return(0,r.default)({},t,{objData:{}})}}};e.default=o},YJ04:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.get=p,e.page=i;var r=n(a("o0o1")),u=n(a("yXPU")),c=a("Qyje"),o=n(a("t3Un"));function p(t){return s.apply(this,arguments)}function s(){return s=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/shortmessage/").concat(e)));case 1:case"end":return t.stop()}},t,this)})),s.apply(this,arguments)}function i(t){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/shortmessage/page/").concat(e.entCode,"?").concat((0,c.stringify)(e))));case 1:case"end":return t.stop()}},t,this)})),l.apply(this,arguments)}}}]);