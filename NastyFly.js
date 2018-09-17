import { LitElement, html } from "@polymer/lit-element";

const БАЗОВИЙ_КРОК = 50;
const БАЗОВИЙ_ПОРІГ = 95;

export
class НабридливаМуха extends LitElement {
  static get properties() {
    return {
      стан: String,
      x: Number,
      y: Number,
      кут: Number
    };
  }

  static get is() {
    return "nasty-fly";
  }

  _зліт() {
    this.стан = 'літає';
    this.shadowRoot.querySelector('audio#дзижчання').play();
    return new Promise(resolve =>
      this.__затримка_зльоту = setTimeout(
        resolve,
        /* не менше, мс */100+(Math.random()*80)/* плюс не більше, мс*/
      )
    );
  }

  __рухатисяДо(точка) {
    let муха = this.shadowRoot.querySelector('div.муха');
    let [x, y] = [муха.offsetLeft, муха.offsetTop];
    let [X, Y] = точка;
    let новий_напрям = Math.atan((Y - y) / (X - x)) + (X >= x ? 1 : -1) * Math.PI / 2;
    муха = this;
    window.requestAnimationFrame(
      () => {
        муха.кут = новий_напрям;
        муха.x = X;
        муха.y = Y;
      }
    );
    return точка;
  }

  get __випадковеМісцеПопереду() {
    const f = ["sin", "cos"];
    const випадковий_коефіцієнт_напряму = Math.random(); // що швидше рухається, то менше відхилення вбік
    const випадковий_коефіцієнт_швидкості = 1 - випадковий_коефіцієнт_напряму;

    function поправкаНаближенняДоКраю(положення, напрям, поріг) {
      const розміри_поля = [window.innerWidth, window.innerHeight];

      if (положення < поріг) {
        return (поріг - положення) / поріг;
      } else if (положення > розміри_поля[напрям] - поріг) {
        return (розміри_поля[напрям] - поріг - положення) / поріг;
      } else {
        return 0;
      }
    }

    let кут = this.кут;
    кут += випадковий_коефіцієнт_напряму * (Math.random() * Math.PI / 4 - Math.PI / 8);
    return [this.x, this.y].map(function (координата, напрям) { // напрям: горизонтальний - 0, вертикальний - 1
      let зсув = (
        БАЗОВИЙ_КРОК / 2 + Math.random() * БАЗОВИЙ_КРОК * випадковий_коефіцієнт_швидкості
      ) * (
        (напрям ? -1 : 1) * Math[f[напрям]](кут) + поправкаНаближенняДоКраю(координата, напрям, БАЗОВИЙ_ПОРІГ)
      );
      return координата + зсув;
    });
  }

  літатиПротягом(час) {
    const кінець = Date.now() + Math.round(час * 1000);
    const муха = this;
    var кроки;
    return муха._зліт()
    .then(
      () => new Promise(function(resolve,reject){
        кроки = setInterval(function(){
          if ((Date.now() < кінець) && (муха.стан == "літає")) {
            муха.__рухатисяДо(муха.__випадковеМісцеПопереду);
          } else {
            clearInterval(кроки);
            if (муха.стан == "літає") муха._сісти();
            resolve();
          }
        },10)
      })
    )
  }

  _сісти() {
    this.стан = 'сидить';
    this.shadowRoot.querySelector('audio#дзижчання').pause();
  }

  _вмерти() {
    this.стан = 'прибита';
    this.shadowRoot.querySelector('audio#дзижчання').pause();
    this.dispatchEvent(new CustomEvent("смерть",{bubbles: true, composed: true}));
  }

  constructor() {
    super();
    this.стан = 'сидить';
    this.кут = Math.random()*(Math.PI*2);
    this.x = Math.round(Math.random()*window.innerWidth);
    this.y = Math.round(Math.random()*window.innerHeight);
    this.addEventListener('click',function(e){
      let муха = e.target;
      if (муха.стан == "сидить") {
        муха.літатиПротягом(/* від */1+Math.random() * /* до приблизно +*/5/* секунд */);
      } else if (муха.стан == "літає") {
        муха._вмерти();
      }
    });
  }

  render() {
    return html`
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
      `;
  }
}

customElements.define(НабридливаМуха.is, НабридливаМуха);
