import { LitElement, html } from "@polymer/lit-element";
import { asyncAppend } from 'lit-html/directives/async-append';

import { НабридливаМуха } from './NastyFly.js';

export
class ГраВМуху extends LitElement {
  static get is(){
    return 'fly-game';
  }
  
  async * мухи() {
    while (true){
      let нова_муха, смерть_мухи;
      
      смерть_мухи = new Promise(
        перейти=>{
          нова_муха = html`<nasty-fly @смерть=${e=>setTimeout(перейти,4000*Math.random())}></nasty-fly>`;
        }
      );
      yield нова_муха;
      await смерть_мухи;
    }
  }
  
  render(){
    return html`${asyncAppend(this.мухи())}`;
  }
}

window.customElements.define(ГраВМуху.is,ГраВМуху);