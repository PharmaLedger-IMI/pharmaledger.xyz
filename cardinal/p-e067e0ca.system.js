var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r};System.register(["./p-51da6f80.system.js","./p-fdcca78d.system.js"],(function(n){"use strict";var e,t,r,i,o,s;return{setters:[function(n){e=n.g},function(n){t=n.h;r=n.i;i=n.c;o=n.j;s=n.k}],execute:function(){n("T",a);function a(n){return function(a,c){var f=a.connectedCallback,l=a.componentWillLoad,u=a.componentDidLoad,v=a.render;var d="psk-send-events";var p=o;var m=t;var h="definedEvents";a.componentWillLoad=function(){var n=this;var i=e(n);if(!i.hasAttribute(t)&&!i.hasAttribute(r)){return l&&l.call(n)}};a.componentDidLoad=function(){var n=this;var i=e(n);if(!i.hasAttribute(t)&&!i.hasAttribute(r)){return u&&u.call(n)}};a.connectedCallback=function(){var t=this;var i=e(t);if(n.controllerInteraction){m=r;h="definedControllers";p=s;d="psk-send-controllers"}if(i.hasAttribute(m)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[h]=[Object.assign(Object.assign({},n),{eventName:String(c)})];return f&&f.call(t)}var o=t.componentDefinitions;var a=Object.assign(Object.assign({},n),{eventName:String(c)});if(o&&o.hasOwnProperty(p)){var l=__spreadArrays(o[p]);l.push(a);o[p]=__spreadArrays(l)}else{o[p]=[a]}t.componentDefinitions=Object.assign({},o)}return f&&f.call(t)};a.render=function(){var n=this;if(!n.componentDefinitions||!(n.componentDefinitions&&n.componentDefinitions[p])){return v&&v.call(n)}var e=n.componentDefinitions[p];if(e){e=e.reverse()}i(d,{composed:true,bubbles:true,cancelable:true,detail:e},true)}}}}}}));