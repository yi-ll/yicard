(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{MeNf:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1")),o=n(a("z1l4")),c={namespace:"map",state:{data:null},effects:{getLocation:u.default.mark(function e(t,a){var n,r,c,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(o.default,n);case 4:if(s=e.sent,!s){e.next=8;break}return e.next=8,c({type:"setLocation",payload:s.geocodes});case 8:case"end":return e.stop()}},e,this)})},reducers:{setLocation:function(e,t){var a=t.payload;return(0,r.default)({},e,{data:a})}}};t.default=c},z1l4:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=n(a("o0o1")),u=n(a("yXPU")),o=n(a("PkBI"));function c(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(r.default.mark(function e(t){var a,n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a="http://restapi.amap.com/v3/geocode/geo?key=29c015bdea56ea532e38417b9fe175b6&address=".concat(t,"&city="),e.next=3,(0,o.default)(a).then(function(e){return 204===e.status?"ok":e.json()});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)})),s.apply(this,arguments)}}}]);