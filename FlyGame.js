import { LitElement, html } from "@polymer/lit-element";
import { asyncAppend } from 'lit-html/directives/async-append';
import { НабридливаМуха } from './NastyFly.js';

export
class FlyGame extends LitElement {
  static get is(){
    return 'fly-game';
  }
  
  async * flies() {
    while (true){
      let fly
      , flydeath=new Promise(resolve=>{
          fly=html`<nasty-fly @die=${e=>setTimeout(resolve,4000*Math.random())}></nasty-fly>`;
        });
      yield fly;
      await flydeath;
    }
  }
  
  render(){
    return html`${asyncAppend(this.flies())}`;
  }
}

window.customElements.define(FlyGame.is,FlyGame);