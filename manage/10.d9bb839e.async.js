(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{a1zM:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.page=c,t.post=p,t.get=d,t.update=f;var n=r(a("o0o1")),u=r(a("yXPU")),o=r(a("t3Un"));function c(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/workorder/page"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),s.apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/workorder"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),l.apply(this,arguments)}function d(e){return i.apply(this,arguments)}function i(){return i=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/workorder/").concat(t)));case 1:case"end":return e.stop()}},e,this)})),i.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/workorder"),{method:"PUT",body:t}));case 1:case"end":return e.stop()}},e,this)})),h.apply(this,arguments)}},ojPk:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("miYZ");var n=r(a("tsqr")),u=r(a("o0o1")),o=r(a("MVZn")),c=r(a("usdK")),s=a("a1zM"),p={namespace:"jobmanage",state:{pubData:[],recData:[],jobData:{}},effects:{pubpage:u.default.mark(function e(t,a){var r,n,c,p,l,d,i,f;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,c=a.put,p=r.pageSize,l=(0,o.default)({},r,{pageIndex:r.pageIndex}),e.next=6,n(s.page,(0,o.default)({},l,{type:0}));case 6:if(d=e.sent,!d){e.next=13;break}if(i=d.result,!i){e.next=13;break}return f={list:i.data,pagination:{total:i.totalCount,pageSize:p,current:r.pageIndex+1}},e.next=13,c({type:"setPub",payload:f});case 13:case"end":return e.stop()}},e,this)}),recpage:u.default.mark(function e(t,a){var r,n,c,p,l,d,i,f;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,c=a.put,p=r.pageSize,l=(0,o.default)({},r,{pageIndex:r.pageIndex}),e.next=6,n(s.page,(0,o.default)({},l,{type:1}));case 6:if(d=e.sent,!d){e.next=13;break}if(i=d.result,!i){e.next=13;break}return f={list:i.data,pagination:{total:i.totalCount,pageSize:p,current:r.pageIndex+1}},e.next=13,c({type:"setRec",payload:f});case 13:case"end":return e.stop()}},e,this)}),add:u.default.mark(function e(t,a){var r,o,p,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,o=a.call,e.next=4,o(s.post,r);case 4:p=e.sent,p?(l=p.result,l?(n.default.info("\u63d0\u4ea4\u6210\u529f"),c.default.push("/other/jobmanage")):n.default.error(p.message?p.message:"\u63d0\u4ea4\u5931\u8d25")):n.default.error("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return e.stop()}},e,this)}),read:u.default.mark(function e(t,a){var r,n,o,c,p;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,o=a.put,e.next=4,n(s.get,r);case 4:if(c=e.sent,p=c.result,!p){e.next=9;break}return e.next=9,o({type:"setInfo",payload:p});case 9:case"end":return e.stop()}},e,this)}),handle:u.default.mark(function e(t,a){var r,o,p,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,o=a.call,e.next=4,o(s.update,r);case 4:p=e.sent,p?(l=p.result,l?(n.default.info("\u63d0\u4ea4\u6210\u529f"),c.default.push("/other/jobmanage")):n.default.error(p.message?p.message:"\u63d0\u4ea4\u5931\u8d25")):n.default.error("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return e.stop()}},e,this)})},reducers:{setInfo:function(e,t){return(0,o.default)({},e,{jobData:t.payload})},setPub:function(e,t){return(0,o.default)({},e,{pubData:t.payload})},setRec:function(e,t){return(0,o.default)({},e,{recData:t.payload})}}};t.default=p}}]);