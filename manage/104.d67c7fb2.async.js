(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{jWWH:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("d6i3"));a("miYZ");var u=n(a("tsqr")),d=n(a("p0pE")),o=n(a("xdMR")),p={namespace:"downtask",state:{pubData:[]},effects:{list:r.default.mark(function e(t,a){var n,p,s,i,c,l,f,b,w;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,p=a.call,s=a.put,i=n.pageSize,c=n.downTask,l=(0,d.default)({},n,{pageIndex:n.pageIndex}),e.next=6,p(o.default,l);case 6:if(f=e.sent,!f){e.next=17;break}if(b=f.result,!c||!b){e.next=13;break}u.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),e.next=17;break;case 13:if(!b){e.next=17;break}return w={list:b.data,pagination:{total:b.totalCount,pageSize:i,current:n.pageIndex+1}},e.next=17,s({type:"setPub",payload:w});case 17:case"end":return e.stop()}},e)})},reducers:{setPub:function(e,t){return(0,d.default)({},e,{pubData:t.payload})}}};t.default=p},xdMR:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(a("d6i3")),u=n(a("1l/V")),d=n(a("t3Un"));function o(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/downloadtask/page"),{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}}}]);