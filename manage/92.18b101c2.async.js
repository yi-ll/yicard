(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{"qyc/":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=n(a("d6i3")),u=n(a("1l/V")),c=n(a("t3Un"));function s(){return l.apply(this,arguments)}function l(){return l=(0,u.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/realnameauth")));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}},xEEG:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3")),c=n(a("qyc/")),s={namespace:"nameauth",state:{authDatas:[]},effects:{get:u.default.mark(function e(t,a){var n,r,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(c.default,n);case 4:return l=e.sent,e.next=7,s({type:"getSet",payload:l.result});case 7:case"end":return e.stop()}},e)})},reducers:{getSet:function(e,t){return(0,r.default)({},e,{authDatas:t.payload})}}};t.default=s}}]);