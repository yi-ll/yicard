(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111],{beF7:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.get=c;var a=r(n("o0o1")),u=r(n("yXPU")),s=r(n("t3Un"));function c(){return l.apply(this,arguments)}function l(){return l=(0,u.default)(a.default.mark(function e(){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/speedlevel")));case 1:case"end":return e.stop()}},e,this)})),l.apply(this,arguments)}},fSEz:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("MVZn")),u=r(n("o0o1")),s=n("beF7"),c={namespace:"speedlevel",state:{speedLevels:[]},effects:{get:u.default.mark(function e(t,n){var r,a,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.call,a=n.put,e.next=3,r(s.get);case 3:if(c=e.sent,!c||!c.result){e.next=7;break}return e.next=7,a({type:"setPush",payload:c.result});case 7:case"end":return e.stop()}},e,this)})},reducers:{setPush:function(e,t){return(0,a.default)({},e,{speedLevels:t.payload})}}};t.default=c}}]);