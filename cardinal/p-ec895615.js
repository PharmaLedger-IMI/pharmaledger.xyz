import{g as e}from"./p-9835b40a.js";function t(){return t=>{const{componentWillLoad:o}=t;t.getInnerContent=function(t){const o=e(this);if(o[t]){let e=o.querySelector("link");if(e){let n=o[t].replace(e.outerHTML,"");return o[t]=e.outerHTML,n}return o[t]}console.error(`${t} is not a property`)},t.componentWillLoad=function(){const t=e(this);if(!t)return o&&o.call(this);if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let e=t.tagName.toLowerCase();return new Promise(n=>{let i="/themes/"+globalConfig.theme+"/components/"+e+"/"+e+".css",s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",i);let l=t.shadowRoot?t.shadowRoot:t;setTimeout(()=>{l.prepend(s)},0);let r=!1,f=()=>{r||(r=!0,n(o&&o.call(this)))};s.onload=f,s.onerror=()=>{console.log(`File ${i} was not found`),f()},setTimeout(()=>{!1===r&&(r=!0,n(o&&o.call(this)))},100)})}console.error("Theme or globalConfig is not defined!")}}}export{t as C};