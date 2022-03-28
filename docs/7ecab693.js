import{R as t,i as e,t as i,b as s,e as n,s as o,r,o as a,$ as c}from"./85fc58f8.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function h(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const l=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function d(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):l(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(t){return d({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _;null===(_=window.HTMLSlotElement)||void 0===_||_.prototype.assignedElements;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{H:p}=t,f=()=>document.createComment(""),v=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),v(t,e);return!0},m=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},$=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),A(e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(t){void 0!==this._$AN?(m(this),this._$AM=t,$(this)):this._$AM=t}function w(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)v(s[t],!1),m(s[t]);else null!=s&&(v(s,!1),m(s));else v(this,t)}const A=t=>{var e,s,n,o;t.type==i.CHILD&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=w),null!==(s=(o=t)._$AQ)&&void 0!==s||(o._$AQ=y))};class b extends e{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),$(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(v(this,t),m(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class C{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x extends b{constructor(){super(...arguments),this._$CG=new g(this),this._$CK=new C}render(t,e){return s}update(t,[e,i]){if(this.isConnected||this.disconnected(),e===this._$CJ)return;this._$CJ=e;let n=0;const{_$CG:o,_$CK:r}=this;return(async(t,e)=>{for await(const i of t)if(!1===await e(i))return})(e,(async t=>{for(;r.get();)await r.get();const s=o.deref();if(void 0!==s){if(s._$CJ!==e)return!1;void 0!==i&&(t=i(t,n)),s.commitValue(t,n),n++}return!0})),s}commitValue(t,e){this.setValue(t)}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=n(class extends x{constructor(t){if(super(t),t.type!==i.CHILD)throw Error("asyncAppend can only be used in child expressions")}update(t,e){return this._$CX=t,super.update(t,e)}commitValue(t,e){0===e&&(t=>{t._$AR()})(this._$CX);const i=((t,e,i)=>{var s;const n=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(f(),o),s=n.insertBefore(f(),o);i=new p(e,s,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,a=r!==t;if(a){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==o||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,o),t=e}}}return i})(this._$CX);((t,e,i=t)=>{t._$AI(e,i)})(i,t)}}),k=new URL(new URL("4619654e.svg",import.meta.url).href,import.meta.url).href,z=new URL(new URL("f6cb2ad3.svg",import.meta.url).href,import.meta.url).href,P=new URL(new URL("a773a733.mp3",import.meta.url).href,import.meta.url).href;class U extends o{constructor(){super(),this.стан="сидить",this.__liveliness=5,this.__buzz=new Audio(P),this.__x=0,this.__y=0,this.__кут=Math.random()*(2*Math.PI),this.__CANBUZZ=!1,this.__buzz.addEventListener("canplaythrough",(()=>{this.__CANBUZZ=!0,this.dispatchEvent(new CustomEvent("readytofly",{bubbles:!1,composed:!0}))})),this.__x=Math.round(Math.random()*window.innerWidth),this.__y=Math.round(Math.random()*window.innerHeight),this.addEventListener("click",(t=>{const e=t.target;e&&("сидить"===e.стан?e.літатиПротягом(1+Math.random()*(this.liveliness/2)):"літає"===e.стан&&e.вмерти())}))}set liveliness(t){let e=t;t>10&&(e=10),t<0&&(e=0),this.__liveliness=e}get liveliness(){return this.__liveliness}static get styles(){return r`.муха{display:block;position:absolute;width:50px;height:50px;border-radius:50%;touch-action:manipulation;overflow:visible;background-position:center;background-repeat:no-repeat;background-size:cover;background-image:url(${a(k)});transform-origin:0 0}.муха[is='літає']{background-image:url(${a(z)})}.муха[is='прибита']{background-image:url(${a(z)});background-color:pink}`}"_зліт"(){return this.стан="літає",this.__CANBUZZ&&this.__buzz.play(),new Promise((t=>{this.__затримкаЗльоту=window.setTimeout((()=>{clearTimeout(this.__затримкаЗльоту),this.dispatchEvent(new CustomEvent("літає",{bubbles:!0,composed:!0})),t()}),100+Math.random()*(90-3*this.liveliness))}))}"__рухатисяДо"(t){let e=this.shadowRoot.querySelector("div.муха");const[i,s]=[e.offsetLeft,e.offsetTop],[n,o]=t,r=Math.atan((o-s)/(n-i))+(n>=i?1:-1)*Math.PI/2;return e=this,window.requestAnimationFrame((()=>{e.__кут=r,e.__x=n,e.__y=o})),t}get"__випадковеМісцеПопереду"(){const t=["sin","cos"],e=Math.random(),i=1-e;const s=this.__кут+(e*Math.PI/4-Math.PI/8);return[this.__x,this.__y].map(((e,n)=>{const o=(U.БАЗОВИЙ_КРОК+3*this.liveliness)*(1+Math.random()+i)*((n?-1:1)*Math[t[n]](s)+function(t,e,i){const s=[window.innerWidth,window.innerHeight];return t<i?(i-t)/i:t>s[e]-i?(s[e]-i-t)/i:0}(e,n,U.БАЗОВИЙ_ПОРІГ));return e+o}))}"літатиПротягом"(t){const e=Date.now()+Math.round(1e3*t),i=this;let s;return i._зліт().then((()=>new Promise((t=>{s=window.setInterval((()=>{Date.now()<e&&"літає"===i.стан?i.__рухатисяДо(i.__випадковеМісцеПопереду):(clearInterval(s),"літає"===i.стан&&i._сісти(),t())}),10)}))))}"_сісти"(){this.стан="сидить",this.__buzz.pause(),this.dispatchEvent(new CustomEvent("сидить",{bubbles:!0,composed:!0}))}"вмерти"(){this.стан="прибита",this.__buzz.pause(),this.dispatchEvent(new CustomEvent("смерть",{bubbles:!0,composed:!0}))}render(){return c` <div class="муха" style="left:${this.__x}px;top:${this.__y}px;transform:rotateZ(${this.__кут}rad) translate(-50%,-50%) scale(1)" is="${this.стан}"></div> `}}U.БАЗОВИЙ_КРОК=20,U.БАЗОВИЙ_ПОРІГ=95,h([d({type:String})],U.prototype,"стан",void 0),h([d({type:Number})],U.prototype,"liveliness",null),h([u()],U.prototype,"__buzz",void 0),h([u()],U.prototype,"__x",void 0),h([u()],U.prototype,"__y",void 0),h([u()],U.prototype,"__кут",void 0),h([u()],U.prototype,"__затримкаЗльоту",void 0),h([u()],U.prototype,"__CANBUZZ",void 0),window.customElements.define("nasty-fly",U);class E extends o{constructor(){super(...arguments),this.counter=0,this.maxcount=50,this.мухи=this.щемухи()}async*"щемухи"(){for(;this.counter<this.maxcount;){let t=c``;const e=new Promise((e=>{t=c` <nasty-fly liveliness="${this.counter}" @смерть="${()=>setTimeout(e,4e3*Math.random())}"></nasty-fly> `}));yield t,await e,this.counter+=1}}render(){return c` <div class="fly-counter" ondblclick="function(e){e.preventDefault()}"> <h2>${this.counter}</h2> </div> ${M(this.мухи)} `}}E.styles=r`.fly-counter{position:fixed;bottom:10px;right:10px}`,h([d({type:Number})],E.prototype,"counter",void 0),h([d({type:Number})],E.prototype,"maxcount",void 0),window.customElements.define("nasty-fly-game",E);
