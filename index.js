import { LitElement, html } from '@polymer/lit-element';

const BASE_STEP = 40;
const BOUNDARY_BACKOFF = 75;

export class NastyFly extends LitElement {

  static get properties() {
    return {
      state: String,
      x: Number,
      y: Number,
      fi: Number
    }
  }

  static get is(){
    return "nasty-fly";
  }

  _launch(){
    this.state = 'flies';
    this.shadowRoot.querySelector('audio#buzzing').play();
  }

  _moveTo(waypoint){
    const fly = this.shadowRoot.querySelector('div.fly');
    let [x,y] = [
      fly.offsetLeft,
      fly.offsetTop
    ];
    let [X,Y] = waypoint;
    this.fi = Math.atan((Y-y)/(X-x))+(((X>=x)?1:-1)*Math.PI/2);
    this.x = X;
    this.y = Y;
    return waypoint;
  }

  _MoveWithRandomStepAndDirection(){
    const funcs = ["sin","cos"];
    const rnd_dir = Math.random();
    const rnd_rate = 1-rnd_dir;

    function getProximity(value,direction,offset){
      const boundaries = [window.innerWidth,window.innerHeight];
      if (value<offset) {
        //console.log(`${['x','y'][direction]}: Proximity k=${(offset-value)/offset}`);
        return (offset-value)/offset;
      }
      else if (value>(boundaries[direction]-offset)) {
        //console.log(`${['x','y'][direction]}: Proximity k=${(boundaries[direction]-offset-value)/offset}`);
        return (boundaries[direction]-offset-value)/offset;
      }
      else {
        return 0;
      }
    }

    let fi = this.fi;
    this.fi = fi = fi+rnd_dir*((Math.random()*Math.PI/4)-(Math.PI/8));
    let new_waypoint = [this.x,this.y].map(function(axe,i){
      let rnd_b = (
        (BASE_STEP/2)+(Math.random()*BASE_STEP)*rnd_rate
      )*(
        (i?-1:1)*Math[funcs[i]](fi)+getProximity(axe,i,BOUNDARY_BACKOFF)
      );
      //console.log(`${['x','y'][i]}: Randomized and directed step: ${rnd_b}`);
      return axe+(rnd_b);
    });
    return this._moveTo(new_waypoint);
  }

  flyFor(time){
    const starttime = Date.now();
    const endtime = starttime+Math.round(time*1000);
    const fly = this;
    var frame;

    function stopFlying(){
      window.cancelAnimationFrame(frame);
      fly._sit();
    }

    this._launch();
    (function Movement(){
      if (Date.now()<endtime) {
        fly._MoveWithRandomStepAndDirection();
        frame = window.requestAnimationFrame(Movement)
      }
      else {
        stopFlying();
      }
    })();

    return stopFlying
  }

  _sit(){
    this.state = 'sits';
    this.shadowRoot.querySelector('audio#buzzing').pause();
  }

  constructor(){
    super();
    this.state = 'sits';
    this.fi = 0;
    this.x = 50;
    this.y = 50;
    this.addEventListener('mouseenter',function(e){
      let fly = e.target;
      if (fly.state == "sits") {
        var stop = fly.flyFor(Math.random()*10);
        e.target.addEventListener(
          'click',
          function(e){
            stop();
          }
        )
      }
    })
  }

  _render({state,x,y,fi}){

    return html`
      <style>
        .fly {
          display: block;
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          /* border: solid 1px; */
          overflow: visible;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url('./fly.svg');
          left: ${x}px;
          top: ${y}px;
          transform: rotateZ(${fi}rad) translate(-50%,-50%) scale(1);
          transform-origin: center;
        }

        .fly[do="flies"] {
          background-image: url('./fly-flies.svg');
          /* transform: rotateZ(${fi}rad) translate(-50%,-50%) scale(1.3); */
        }
      </style>
      <div class="fly" do$=${state}></div>
      <audio id="buzzing" preload="auto" loop>
        <source src="buzz.mp3" type="audio/mp3">
      </audio>
      `;
  }
}

customElements.define(NastyFly.is,NastyFly);
