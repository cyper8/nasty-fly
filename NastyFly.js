import { LitElement, html } from "./node_modules/@polymer/lit-element/lit-element.js";

const БАЗОВИЙ_ЗСУВ = 40;
const БАЗОВИЙ_ПОРІГ = 75;

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
    return Promise.resolve();
  }

  __рухатисяДо(точка) {
    const муха = this.shadowRoot.querySelector('div.муха');
    let [x, y] = [муха.offsetLeft, муха.offsetTop];
    let [X, Y] = точка;
    this.кут = Math.atan((Y - y) / (X - x)) + (X >= x ? 1 : -1) * Math.PI / 2;
    this.x = X;
    this.y = Y;
    return точка;
  }

  _рухУВипадковомуНапряміНаВипадковуВідстань() {
    const f = ["sin", "cos"];
    const випадковий_коефіцієнт_напряму = Math.random(); // що швидше рухається, то менше відхилення вбік
    const випадковий_коефіцієнт_швидкості = 1 - випадковий_коефіцієнт_напряму;

    function поправкаНаближення(положення, напрям, поріг) {
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
    this.кут = кут = кут + випадковий_коефіцієнт_напряму * (Math.random() * Math.PI / 4 - Math.PI / 8);
    let нове_положення = [this.x, this.y].map(function (координата, напрям) {
      let зсув = (
        БАЗОВИЙ_ЗСУВ / 2 + Math.random() * БАЗОВИЙ_ЗСУВ * випадковий_коефіцієнт_швидкості
      ) * (
        (напрям ? -1 : 1) * Math[f[напрям]](кут) + поправкаНаближення(координата, напрям, БАЗОВИЙ_ПОРІГ)
      );
      return координата + зсув;
    });
    return this.__рухатисяДо(нове_положення);
  }

  літатиПротягом(час) {
    const кінець = Date.now() + Math.round(час * 1000);
    const муха = this;
    var секундомір;
    return function(){
      return new Promise(function(resolve,reject){
        function Рух() {
          if ((Date.now() < кінець) && (муха.стан == "літає")) {
            муха._рухУВипадковомуНапряміНаВипадковуВідстань();
            секундомір = window.requestAnimationFrame(Рух);
          } else {
            window.cancelAnimationFrame(секундомір);
            resolve();
          }
        }
        Рух();
      });
    }
  }

  _сісти() {
    this.стан = 'сидить';
    this.shadowRoot.querySelector('audio#дзижчання').pause();
  }

  _вмерти() {
    this.стан = 'прибита';
    this.shadowRoot.querySelector('audio#дзижчання').pause();
  }

  constructor() {
    super();
    this.стан = 'сидить';
    this.кут = 0;
    this.x = 50;
    this.y = 50;
    this.addEventListener('click',function(e){
      let муха = e.target;

      if (муха.стан == "сидить") {
        муха._зліт()
        .then(муха.літатиПротягом(Math.random() * 10))
        .then(муха._сісти.bind(муха));
      } else if (муха.стан == "літає") {
        муха._вмерти();
      }
    });
  }

  _render({
    стан,
    x,
    y,
    кут
  }) {
    return html`
      <style>
        .муха {
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
          transform: rotateZ(${кут}rad) translate(-50%,-50%) scale(1);
          transform-origin: center;
        }

        .муха[is="літає"] {
          background-image: url('./fly-flies.svg');
          /* transform: rotateZ(${кут}rad) translate(-50%,-50%) scale(1.3); */
        }

        .муха[is="прибита"] {
          background-image: url('./fly-flies.svg');
          background-color: pink;
        }
      </style>
      <div class="муха" is$=${стан}></div>
      <audio id="дзижчання" preload="auto" loop>
        <source src="buzz.mp3" type="audio/mp3">
      </audio>
      `;
  }
}

customElements.define(НабридливаМуха.is, НабридливаМуха);
