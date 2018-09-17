!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
!function(){"use strict";var t,e=!1,n=[],s=!1;function i(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function o(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback(function(e){t=e,s&&t()})}function r(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),e=!0,a().then(i)}function a(){s=!1;return Promise.all(n.map(function(t){return t instanceof Function?t():t})).then(function(){s=!0,n.length=0,t&&t()}).catch(function(t){console.error(t)})}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(t){t&&(n.push(t),e&&a())},window.WebComponents._batchCustomElements=o;var l="webcomponents-loader.js",d=[];(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&d.push("sd"),window.customElements&&!window.customElements.forcePolyfill||d.push("ce");var c=function(){var t=document.createElement("template");if(!("content"in t))return!0;if(!(t.content.cloneNode()instanceof DocumentFragment))return!0;var e=document.createElement("template");e.content.appendChild(document.createElement("div")),t.content.appendChild(e);var n=t.cloneNode(!0);return 0===n.content.childNodes.length||0===n.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!c||(d=["sd-ce-pf"]),d.length){var u,h="bundles/webcomponents-"+d.join("-")+".js";if(window.WebComponents.root)u=window.WebComponents.root+h;else{var p=document.querySelector('script[src*="'+l+'"]');u=p.src.replace(l,h)}var m=document.createElement("script");m.src=u,"loading"===document.readyState?(m.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(m.outerHTML),document.addEventListener("DOMContentLoaded",r)):(m.addEventListener("load",function(){o(),r()}),m.addEventListener("error",function(){throw new Error("Could not load polyfill bundle"+u)}),document.head.appendChild(m))}else e=!0,"complete"===document.readyState?i():(window.addEventListener("load",r),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",r),r()}))}()},function(t,e,n){"use strict";n.r(e);n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${i}`),r=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,i=0;const a=[],l=e=>{const u=e.content,h=document.createTreeWalker(u,133,null,!1);let p,m;for(;h.nextNode();){n++,p=m;const e=m=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let l=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(s)>=0&&l++;for(;l-- >0;){const s=t.strings[i],a=c.exec(s)[2],l=r&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),d=e.getAttribute(l).split(o);this.parts.push({type:"attribute",index:n,name:a,strings:d}),e.removeAttribute(l),i+=d.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(s)<0)continue;const r=e.parentNode,l=t.split(o),c=l.length-1;i+=c;for(let t=0;t<c;t++)r.insertBefore(""===l[t]?d():document.createTextNode(l[t]),e),this.parts.push({type:"node",index:n++});r.insertBefore(""===l[c]?d():document.createTextNode(l[c]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===s){const t=e.parentNode,s=e.previousSibling;null===s||s!==p||s.nodeType!==Node.TEXT_NODE?t.insertBefore(d(),e):n--,this.parts.push({type:"node",index:n++}),a.push(e),null===e.nextSibling?t.insertBefore(d(),e):n--,m=p,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(s,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of a)t.parentNode.removeChild(t)}}const l=t=>-1!==t.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,u=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;const h=t=>{let e=1;const n=document.createTreeWalker(t,u,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,f=(t,e,n=null)=>{let s=e;for(;s!==n;){const e=s.nextSibling;t.removeChild(s),s=e}},_=new WeakMap,y=t=>"function"==typeof t&&_.has(t),g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this._getTemplate=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=m?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,s=0;const i=t=>{const o=document.createTreeWalker(t,133,null,!1);let r=o.nextNode();for(;n<e.length&&null!==r;){const t=e[n];if(l(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this._getTemplate);t.insertAfterNode(r),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings));n++}else s++,"TEMPLATE"===r.nodeName&&i(r.content),r=o.nextNode();else this._parts.push(void 0),n++}};return i(t),m&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class w{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!0;for(let o=0;o<t;o++){const t=this.strings[o];e+=t;const a=t.lastIndexOf(">");!(n=(a>-1||n)&&-1===t.indexOf("<",a+1))&&r&&(e=e.replace(c,(t,e,n,s)=>"style"===n?`${e}style$${s}`:t)),e+=n?i:s}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=t=>null===t||!("object"==typeof t||"function"==typeof t);class x{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||b(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this._pendingValue=void 0,this.templateFactory=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=d()),t._insert(this.endNode=d())}insertAfterPart(t){t._insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=g,t(this)}const t=this._pendingValue;t!==g&&(b(t)?t!==this.value&&this._commitText(t):t instanceof w?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new v(e,t.processor,this.templateFactory),s=n._clone();n.update(t.values),this._commitNode(s),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)void 0===(n=e[s])&&(n=new S(this.templateFactory),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){f(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=g,t(this)}if(this._pendingValue===g)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=g}}class E extends x{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends P{}class C{constructor(t,e){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=g,t(this)}this._pendingValue!==g&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=g)}handleEvent(t){"function"==typeof this.value?this.value.call(this.element,t):"function"==typeof this.value.handleEvent&&this.value.handleEvent(t)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(t,e,n=function(t){let e=M.get(t.type);void 0===e&&(e=new Map,M.set(t.type,e));let n=e.get(t.strings);return void 0===n&&(n=new a(t,t.getTemplateElement()),e.set(t.strings,n)),n}){let s=V.get(e);void 0===s&&(f(e,e.firstChild),V.set(e,s=new S(n)),s.appendInto(e)),s.setValue(t),s.commit()}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new class{handleAttributeExpressions(t,e,n){const s=e[0];return"."===s?new E(t,e.slice(1),n).parts:"@"===s?[new C(t,e.slice(1))]:"?"===s?[new N(t,e.slice(1),n)]:new x(t,e,n).parts}handleTextExpression(t){return new S(t)}},W=(t,...e)=>new w(t,e,"html",O),k=(t,e)=>`${t}--${e}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const F=t=>e=>{const n=k(e.type,t);let s=M.get(n);void 0===s&&(s=new Map,M.set(n,s));let i=s.get(e.strings);if(void 0===i){const n=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,t),i=new a(e,n),s.set(e.strings,i)}return i},R=["html","svg"];function $(t){R.forEach(e=>{const n=M.get(k(e,t));void 0!==n&&n.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),function(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,u,null,!1);let o=0,r=s[0],a=-1,l=0;const d=[];let c=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,r=s[++o]}d.forEach(t=>t.parentNode.removeChild(t))}(t,n)})})}const j=new Set,I=(t,e,n)=>{j.add(n);const s=t.querySelectorAll("style"),i=document.createDocumentFragment();for(let t=0;t<s.length;t++)i.appendChild(s[t]);if($(n),function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null===n||void 0===n)return void s.appendChild(e);const o=document.createTreeWalker(s,u,null,!1);let r=p(i),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(n.parentNode.insertBefore(e,n),a=h(e));-1!==r&&i[r].index===l;){if(a>0){for(;-1!==r;)i[r].index+=a,r=p(i,r);return}r=p(i,r)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");null!==n&&t.insertBefore(n.cloneNode(!0),t.firstChild)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q=t=>null!==t,U=t=>t?"":null,z=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,reflect:!1,hasChanged:z},D=new Promise(t=>t(!0)),B=1,X=4,Z=8;class G extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,n]of this._classProperties){const s=this._attributeNameForProperty(e,n);void 0!==s&&(this._attributeToPropertyMap.set(s,e),t.push(s))}return t}static createProperty(t,e=H){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(s){const i=this[t];this[n]=s,this._requestPropertyUpdate(t,i,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of n)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=z){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const s=n===Boolean?q:"function"==typeof n?n:n.fromAttribute;return s?s(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?U:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&B?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=H){const s=this.constructor,i=s._propertyValueToAttribute(e,n);if(void 0!==i){const e=s._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|Z,null===i?this.removeAttribute(e):this.setAttribute(e,i),this._updateState=this._updateState&~Z)}}_attributeToProperty(t,e){if(!(this._updateState&Z)){const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s);this[s]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||H;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|X;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&X}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t);const e=!(this._updateState&B);this._markUpdated(),e&&this.firstUpdated(t),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X|B}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}G._attributeToPropertyMap=new Map,G._finalized=!0,G._classProperties=new Map,G.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class J extends G{update(t){if(super.update(t),"function"!=typeof this.render)throw new Error("render() not implemented");this.constructor.render(this.render(),this.renderRoot,this.localName)}}J.render=function(t,e,n){const s=e instanceof ShadowRoot&&L,i=j.has(n);if(s&&i&&window.ShadyCSS.styleElement(e.host),A(t,e,F(n)),s&&!i&&t instanceof w){const t=V.get(e).value;I(e,t.template,n)}};const K=50,Q=95;class Y extends J{static get properties(){return{"стан":String,x:Number,y:Number,"кут":Number}}static get is(){return"nasty-fly"}"_зліт"(){return this.стан="літає",this.shadowRoot.querySelector("audio#дзижчання").play(),new Promise(t=>this.__затримка_зльоту=setTimeout(t,100+80*Math.random()))}"__рухатисяДо"(t){let e=this.shadowRoot.querySelector("div.муха"),[n,s]=[e.offsetLeft,e.offsetTop],[i,o]=t,r=Math.atan((o-s)/(i-n))+(i>=n?1:-1)*Math.PI/2;return e=this,window.requestAnimationFrame(()=>{e.кут=r,e.x=i,e.y=o}),t}get"__випадковеМісцеПопереду"(){const t=["sin","cos"],e=Math.random(),n=1-e;let s=this.кут;return s+=e*(Math.random()*Math.PI/4-Math.PI/8),[this.x,this.y].map(function(e,i){return e+(K/2+Math.random()*K*n)*((i?-1:1)*Math[t[i]](s)+function(t,e,n){const s=[window.innerWidth,window.innerHeight];return t<n?(n-t)/n:t>s[e]-n?(s[e]-n-t)/n:0}(e,i,Q))})}"літатиПротягом"(t){const e=Date.now()+Math.round(1e3*t),n=this;var s;return n._зліт().then(()=>new Promise(function(t,i){s=setInterval(function(){Date.now()<e&&"літає"==n.стан?n.__рухатисяДо(n.__випадковеМісцеПопереду):(clearInterval(s),"літає"==n.стан&&n._сісти(),t())},10)}))}"_сісти"(){this.стан="сидить",this.shadowRoot.querySelector("audio#дзижчання").pause()}"_вмерти"(){this.стан="прибита",this.shadowRoot.querySelector("audio#дзижчання").pause(),this.dispatchEvent(new CustomEvent("смерть",{bubbles:!0,composed:!0}))}constructor(){super(),this.стан="сидить",this.кут=Math.random()*(2*Math.PI),this.x=Math.round(Math.random()*window.innerWidth),this.y=Math.round(Math.random()*window.innerHeight),this.addEventListener("click",function(t){let e=t.target;"сидить"==e.стан?e.літатиПротягом(1+5*Math.random()):"літає"==e.стан&&e._вмерти()})}render(){return W`
      <style>
        .муха {
          display: block;
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          touch-action: manipulation;
          /* border: solid 1px; */
          overflow: visible;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url('./fly.svg');
          left: ${this.x}px;
          top: ${this.y}px;
          transform-origin: 0px 0px;
          transform: rotateZ(${this.кут}rad) translate(-50%,-50%) scale(1);
        }

        .муха[is="літає"] {
          background-image: url('./fly-flies.svg');
        }

        .муха[is="прибита"] {
          background-image: url('./fly-flies.svg');
          background-color: pink;
        }
      </style>
      <div class="муха" is=${this.стан}></div>
      <audio id="дзижчання" preload="auto" loop>
        <source src="buzz.mp3" type="audio/mp3">
      </audio>
      `}}customElements.define(Y.is,Y);class tt extends J{static get is(){return"fly-game"}static get properties(){return{"мухи":Array}}"нова_муха"(){return W`<nasty-fly @смерть=${t=>setTimeout(function(){let t=this.мухи.slice();t.push(this.нова_муха()),this.мухи=t}.bind(this),4e3*Math.random())}></nasty-fly>`}constructor(){super(),this.мухи=[this.нова_муха()]}render(){return W`
      <style>
        .fly-counter {
          position: fixed;
          bottom: 10px;
          right: 10px;
        }
      </style>
      <div class="fly-counter" ondblclick="function(e){e.preventDefault()}">
        <h2>${this.мухи.length-1}</h2>
      </div>
      ${this.мухи}
      `}}window.customElements.define(tt.is,tt)}]);