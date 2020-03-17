import{r as e,h as t,g as n}from"./p-9835b40a.js";import{G as s,p as r,q as o}from"./p-869e3fb2.js";import{T as i}from"./p-61f24b9e.js";import{C as a}from"./p-ec895615.js";var l=function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const u=class{constructor(t){e(this,t),this.columns=null,this.layout=null}render(){let e=Array.from(this._host.children),n=[];if(!this.columns||!this.layout)return t("slot",null);let r=this._createLayoutRules.call(this);if(0===r.length)return t("slot",null);let o=0;e.forEach(e=>{if(s.indexOf(e.tagName.toLowerCase())>=0)return;let t="";r.forEach(e=>{switch(e.breakpoint){case"xs":t+=this._getClass("xs",e.values[o]);break;case"s":t+=this._getClass("sm",e.values[o]);break;case"m":t+=this._getClass("md",e.values[o]);break;case"l":t+=this._getClass("lg",e.values[o]);break;case"xl":t+=this._getClass("xl",e.values[o])}}),e.className=`${e.className.trim()} ${t.trim()}`.trim(),o=(o+1)%this.columns,n.push(e.parentNode.removeChild(e))});let i=!1;for(;!i;){let e=n.splice(0,Math.min(this.columns,n.length)),t=document.createElement("div");t.className="row",e.forEach((function(e){t.appendChild(e)})),this._host.appendChild(t),i=0===n.length}return t("slot",null)}_getClass(e,t){let n="";switch(t){case"0":n+=`${o[e]} `;break;default:n+=`col-${e}-${t} `}return n}_createLayoutRules(){let e=this;return this.layout.split("]").map((function(e){return`${e.trim().toLowerCase()}]`})).filter((function(t){let n=t.split("=");return 0!==n.length&&-1!==r.indexOf(n[0].trim())&&n[1].replace("[","").replace("]","").split(",").map((function(e){return e.trim()})).filter((function(e){return"auto"===e||parseInt(e)<13&&parseInt(e)>=0})).length===e.columns})).map((function(e){let t=e.split("=");return{breakpoint:t[0].trim(),values:t[1].replace("[","").replace("]","").split(",").map((function(e){return e.trim()}))}}))}get _host(){return n(this)}};l([a(),i({isMandatory:!0,propertyType:"number",description:"This is the number of columns for the bootstrap columns class. ",defaultValue:"null",specialNote:"That number can only be an integer between 1 and 12."})],u.prototype,"columns",void 0),l([i({isMandatory:!0,propertyType:"string",description:["This attribute will set the layout for the components inside the grid, according to the number of columns.",'Example: <psk-grid columns="3" layout="xs=[12,12,12] s=[6,6,12] m=[3,3,6] l=[3,4,5]" xl=[3,4,5]>',"There are 5 possible breakpoints, according to Bootstrap documentation: xs, s, m, l and xl. For each breakpoint you want to use, the number of the values must be the same with the number of the columns, otherwise, the breakpoint will be ignored.",'Each breakpoint will be written in the following manner: breakpoint=[value1, value2,... valueN], where N is the number of columns and the value accepts numbers between 0 and 12 included, or the string "auto".',"If a value is 0, then the element for that column will be hidden. If a value is auto, it will have no bootstrap class and will inherit the design.","If any other value is set, the breakpoint will be ignored even if it has the same number of columns."],defaultValue:"null"})],u.prototype,"layout",void 0);export{u as psk_grid};