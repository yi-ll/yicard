(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{lEZX:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.page=c,t.del=i,t.post=d,t.get=h,t.edit=w,t.getrole=g,t.getauth=b,t.publicnoAuth=k;var r=n(a("d6i3")),u=n(a("1l/V")),s=n(a("t3Un")),o=n(a("Qyje"));function c(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function e(t){var a,n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/enterprise/list/").concat(t.entCode,"?").concat(o.default.stringify(t)));case 2:return a=e.sent,a&&(n={list:a.result.items,pagination:{total:a.result.totalCount,current:t.page+1}},a.result=n),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/","/").concat("v1","/enterprise/").concat(t.id),{method:"DELETE",body:t}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/enterprise"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/enterprise/").concat(t)));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return m=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/enterprise"),{method:"PUT",body:t}));case 1:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return v=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/role/").concat(t)));case 1:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function b(e){return x.apply(this,arguments)}function x(){return x=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/role/superrole/code/").concat(t)));case 1:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function k(e){return M.apply(this,arguments)}function M(){return M=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/yiboss","/").concat("v1","/publicnoauth/getauthinstancekey"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),M.apply(this,arguments)}},xYAy:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3"));a("miYZ");var s=n(a("tsqr")),o=a("LLXN"),c=n(a("3a4m")),l=a("lEZX"),i={namespace:"entManager",state:{entInfo:{},downloadInfo:void 0,data:{list:[],pagination:{}},roles:[],authData:null},effects:{post:u.default.mark(function e(t,a){var n,r,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(l.post,n);case 4:i=e.sent,i?(s.default.success((0,o.formatMessage)({id:"organization.models.submitSuccessfully",defaultMessage:"\u6210\u529f!"})),c.default.push("/baseManager/entmanager")):i.message?s.default.info(i.message):s.default.error((0,o.formatMessage)({id:"organization.models.submitFailure",defaultMessage:"\u5931\u8d25!"}));case 6:case"end":return e.stop()}},e)}),put:u.default.mark(function e(t,a){var n,r,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(l.edit,n);case 4:i=e.sent,i&&(0===i.code?(s.default.success((0,o.formatMessage)({id:"organization.models.submitSuccessfully",defaultMessage:"\u6210\u529f!"})),c.default.push("/baseManager/entmanager")):i.message?s.default.info(i.message):s.default.error((0,o.formatMessage)({id:"organization.models.submitFailure",defaultMessage:"\u5931\u8d25!"})));case 6:case"end":return e.stop()}},e)}),get:u.default.mark(function e(t,a){var n,r,s,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(l.get,n);case 4:if(o=e.sent,!o){e.next=8;break}return e.next=8,s({type:"setEntInfo",payload:o.result});case 8:case"end":return e.stop()}},e)}),download:u.default.mark(function e(t,a){var n,r,s,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(l.page,n);case 4:if(o=e.sent,!o){e.next=8;break}return e.next=8,s({type:"setDownloadInfo",payload:o.result});case 8:case"end":return e.stop()}},e)}),getrole:u.default.mark(function e(t,a){var n,r,s,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(l.getrole,n);case 4:if(o=e.sent,!o){e.next=8;break}return e.next=8,s({type:"setRole",payload:o.result});case 8:case"end":return e.stop()}},e)}),getauth:u.default.mark(function e(t,a){var n,r,s,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(l.getauth,n);case 4:if(o=e.sent,!o){e.next=8;break}return e.next=8,s({type:"setAuthInfo",payload:o.result});case 8:case"end":return e.stop()}},e)}),getPage:u.default.mark(function e(t,a){var n,r,s,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(l.page,n);case 4:if(o=e.sent,!o){e.next=8;break}return e.next=8,s({type:"setData",payload:o.result});case 8:case"end":return e.stop()}},e)}),delete:u.default.mark(function e(t,a){var n,r,c,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(l.del,n.record);case 4:if(i=e.sent,!i){e.next=9;break}return s.default.success((0,o.formatMessage)({id:"organization.models.submitSuccessfully",defaultMessage:"\u6210\u529f!"})),e.next=9,c({type:"getPage",payload:n.pageArgs});case 9:case"end":return e.stop()}},e)}),publicnoAuth:u.default.mark(function e(t,a){var n,r,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(l.publicnoAuth,n);case 4:o=e.sent,0===o.code?window.open(o.result.authAddress,"_blank"):s.default.error(o.message);case 6:case"end":return e.stop()}},e)})},reducers:{setData:function(e,t){var a=t.payload;return(0,r.default)({},e,{data:a})},setRole:function(e,t){var a=t.payload;return(0,r.default)({},e,{roles:a})},setEntInfo:function(e,t){var a=t.payload;return(0,r.default)({},e,{entInfo:a})},setDownloadInfo:function(e,t){var a=t.payload;return(0,r.default)({},e,{downloadInfo:a})},setAuthInfo:function(e,t){var a=t.payload;return(0,r.default)({},e,{authData:a})},clearAuthsInfo:function(e){return(0,r.default)({},e,{authData:null})}}};t.default=i}}]);