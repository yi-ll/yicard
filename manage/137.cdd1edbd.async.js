(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[137],{jWWH:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("o0o1"));a("miYZ");var u=n(a("tsqr")),o=n(a("MVZn")),d=n(a("xdMR")),s={namespace:"downtask",state:{pubData:[]},effects:{list:r.default.mark(function e(t,a){var n,s,i,c,p,l,f,w,b;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,i=a.put,c=n.pageSize,p=n.downTask,l=(0,o.default)({},n,{pageIndex:n.pageIndex}),e.next=6,s(d.default,l);case 6:if(f=e.sent,!f){e.next=17;break}if(w=f.result,!p||!w){e.next=13;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=17;break;case 13:if(!w){e.next=17;break}return b={list:w.data,pagination:{total:w.totalCount,pageSize:c,current:n.pageIndex+1}},e.next=17,i({type:"setPub",payload:b});case 17:case"end":return e.stop()}},e,this)})},reducers:{setPub:function(e,t){return(0,o.default)({},e,{pubData:t.payload})}}};t.default=s},xdMR:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r=n(a("o0o1")),u=n(a("yXPU")),o=n(a("t3Un"));function d(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/downloadtask/page"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),s.apply(this,arguments)}}}]);