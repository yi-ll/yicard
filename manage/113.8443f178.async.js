(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[113],{Iakz:function(t,e,n){"use strict";var a=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("Mwp2");var r=a(n("VXEj"));n("BoS7");var i=a(n("Sdc0")),o=a(n("2Taf")),s=a(n("vZ4D")),c=a(n("MhPg")),f=a(n("l4Ni")),u=a(n("ujKo")),l=g(n("q1tI")),d=n("LLXN");function p(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(p=function(t){return t?n:e})(t)}function g(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var n=p(e);if(n&&n.has(t))return n.get(t);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var o=r?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=t[i]}return a.default=t,n&&n.set(t,a),a}function m(t){var e=v();return function(){var n,a=(0,u.default)(t);if(e){var r=(0,u.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,f.default)(this,n)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}var y=function(t){(0,c.default)(n,t);var e=m(n);function n(){var t;(0,o.default)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r)),t.getData=function(){var t=l.default.createElement(i.default,{checkedChildren:(0,d.formatMessage)({id:"app.settings.open"}),unCheckedChildren:(0,d.formatMessage)({id:"app.settings.close"}),defaultChecked:!0});return[{title:(0,d.formatMessage)({id:"app.settings.notification.password"},{}),description:(0,d.formatMessage)({id:"app.settings.notification.password-description"},{}),actions:[t]},{title:(0,d.formatMessage)({id:"app.settings.notification.messages"},{}),description:(0,d.formatMessage)({id:"app.settings.notification.messages-description"},{}),actions:[t]},{title:(0,d.formatMessage)({id:"app.settings.notification.todo"},{}),description:(0,d.formatMessage)({id:"app.settings.notification.todo-description"},{}),actions:[t]}]},t}return(0,s.default)(n,[{key:"render",value:function(){return l.default.createElement(l.Fragment,null,l.default.createElement(r.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(t){return l.default.createElement(r.default.Item,{actions:t.actions},l.default.createElement(r.default.Item.Meta,{title:t.title,description:t.description}))}}))}}]),n}(l.Component),h=y;e.default=h}}]);