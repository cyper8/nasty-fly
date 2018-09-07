import { LitElement, html } from "@polymer/lit-element";
// import { asyncAppend } from 'lit-html/directives/async-append';

import { НабридливаМуха } from './NastyFly.js';

export
class ГраВМуху extends LitElement {
  static get is(){
    return 'fly-game';
  }
  
  static get properties(){
    return {
      мухи: Array
    }
  }
  
  нова_муха(){
    function перехід(){
      let мухи = this.мухи.slice();
      мухи.push(this.нова_муха());
      this.мухи = мухи;
    }
    return html`<nasty-fly @смерть=${e=>setTimeout(перехід.bind(this),4000*Math.random())}></nasty-fly>`
  }
  
  constructor(){
    super();
    this.мухи=[this.нова_муха()];
  }
  
  // async *мухи() {
  //   while (true){
  //     let нова_муха, смерть_мухи;
      
  //     смерть_мухи = new Promise(
  //       перейти=>{
  //         нова_муха = html`<nasty-fly @смерть=${e=>setTimeout(перейти,4000*Math.random())}></nasty-fly>`;
  //       }
  //     );
  //     yield нова_муха;
  //     await смерть_мухи;
  //   }
  // }
  
  render(){
    // return html`${asyncAppend(this.мухи())}`;
    return html`${this.мухи}`;
  }
}

window.customElements.define(ГраВМуху.is,ГраВМуху);