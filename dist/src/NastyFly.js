import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
/**
 * LitElement based component depicting a fly which can sit somewhere
 * on the page, fly over the page buzzing, and be smashed
 *
 * The fly will try to escape when clicked
 * When clicked while flying it will die
 * Try to doubleclick on it realy fast
 *
 * @export
 * @class NastyFly
 * @extends {LitElement}
 */
export class NastyFly extends LitElement {
    /**
     * Creates an instance of NastyFly.
     * @memberof NastyFly
     */
    constructor() {
        super();
        /**
         * A state fly is currently in.
         *
         * @type {('сидить' | 'літає' | 'прибита')}
         * @memberof NastyFly
         */
        this.стан = 'сидить';
        this.__liveliness = 5;
        /**
         * An audio element to do buzzing
         *
         * @private
         * @type {HTMLAudioElement}
         * @memberof NastyFly
         *
         * @fires HTMLAudioElement#canplaythrough
         * @fires NastyFly#readytofly when ready to play
         */
        this.__buzz = new Audio('../assets/buzz.mp3');
        this.__x = 0;
        this.__y = 0;
        this.__кут = Math.random() * (Math.PI * 2);
        this.__CANBUZZ = false;
        this.__buzz.addEventListener('canplaythrough', () => {
            this.__CANBUZZ = true;
            /**
             * An event indicating the fly is ready to fly
             * Meaning - really, with buzzing and all ;)
             *
             * @event NastyFly#readytofly
             * @type CustomEvent
             */
            this.dispatchEvent(new CustomEvent('readytofly', { bubbles: false, composed: true }));
        });
        this.__x = Math.round(Math.random() * window.innerWidth);
        this.__y = Math.round(Math.random() * window.innerHeight);
        /**
         * The fly will try to escape when clicked
         * When clicked while flying it will die
         * Try to doubleclick realy fast
         */
        this.addEventListener('click', e => {
            const муха = e.target;
            if (!муха)
                return;
            if (муха.стан === 'сидить') {
                муха.літатиПротягом(
                /* від */ 1 +
                    Math.random() *
                        /* до приблизно +*/ (this.liveliness / 2) /* секунд */);
            }
            else if (муха.стан === 'літає') {
                муха.вмерти();
            }
        });
    }
    /**
     * Liveliness of a fly - a period it can constantly be flying
     * 0 - exactly 1 second
     * n (up to 10) - random time from 1 to n/2 seconds.
     * This also increases speed and reduces takeoff timeout.
     *
     * @type {number}
     * @memberof NastyFly
     */
    set liveliness(val) {
        let newval = val;
        if (val > 10) {
            newval = 10;
        }
        if (val < 0) {
            newval = 0;
        }
        this.__liveliness = newval;
    }
    get liveliness() {
        return this.__liveliness;
    }
    static get styles() {
        return css `
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
        background-image: url('../assets/fly.svg');
        transform-origin: 0px 0px;
      }

      .муха[is='літає'] {
        background-image: url('../assets/fly-flies.svg');
      }

      .муха[is='прибита'] {
        background-image: url('../assets/fly-flies.svg');
        background-color: pink;
      }
    `;
    }
    /**
     * Initiates a takeoff
     *
     * @protected
     * @returns {Promise<void>} resolves when takeoff is over
     * @memberof NastyFly
     *
     * Emits upon takeoff
     *
     * @fires HastyFly#літає
     */
    _зліт() {
        this.стан = 'літає';
        if (this.__CANBUZZ) {
            this.__buzz.play();
        }
        return new Promise(resolve => {
            this.__затримкаЗльоту = window.setTimeout(() => {
                clearTimeout(this.__затримкаЗльоту);
                /**
                 * An 'літає' event meaning the fly has taken off
                 *
                 * @event NastyFly#літає
                 * @type CustomEvent
                 */
                this.dispatchEvent(new CustomEvent('літає', { bubbles: true, composed: true }));
                resolve();
            }, /* не менше, мс */ 100 + Math.random() * (90 - this.liveliness * 3) /* плюс не більше, мс */);
        });
    }
    /**
     * A method that requests a change of placement and orientation of a fly
     * on the next animation frame
     *
     * @private
     * @param {[number, number]} точка - new place to render the fly
     * @returns {[number, number]} - the same point
     * @memberof NastyFly
     */
    __рухатисяДо(точка) {
        let муха = this.shadowRoot.querySelector('div.муха');
        const [x, y] = [муха.offsetLeft, муха.offsetTop];
        const [X, Y] = точка;
        const новийНапрям = Math.atan((Y - y) / (X - x)) + ((X >= x ? 1 : -1) * Math.PI) / 2;
        муха = this;
        window.requestAnimationFrame(() => {
            муха.__кут = новийНапрям;
            муха.__x = X;
            муха.__y = Y;
        });
        return точка;
    }
    /**
     * Randomized spot ahead the fly to jump to on the next tick
     *
     * @readonly
     * @private
     * @type {[number, number]}
     * @memberof NastyFly
     */
    get __випадковеМісцеПопереду() {
        const f = ['sin', 'cos'];
        const випадковийКоефіцієнтНапряму = Math.random(); // що швидше рухається, то менше відхилення вбік
        const випадковийКоефіцієнтШвидкості = 1 - випадковийКоефіцієнтНапряму;
        function поправкаНаближенняДоКраю(положення, напрям, поріг) {
            const розміриПоля = [window.innerWidth, window.innerHeight];
            // підлітає до краю (лівого або верхнього)
            if (положення < поріг) {
                return (поріг - положення) / поріг;
            }
            // підлітає до краю (правого або нижнього)
            if (положення > розміриПоля[напрям] - поріг) {
                return (розміриПоля[напрям] - поріг - положення) / поріг;
            }
            return 0;
        }
        const кут = this.__кут + ((випадковийКоефіцієнтНапряму * Math.PI) / 4 - Math.PI / 8);
        return [this.__x, this.__y].map((координата, напрям) => {
            // напрям: горизонтальний - 0, вертикальний - 1
            const зсув = (NastyFly.БАЗОВИЙ_КРОК + this.liveliness * 3) *
                (1 + Math.random() + випадковийКоефіцієнтШвидкості) *
                ((напрям ? -1 : 1) * Math[f[напрям]](кут) +
                    поправкаНаближенняДоКраю(координата, напрям, NastyFly.БАЗОВИЙ_ПОРІГ));
            return координата + зсув;
        });
    }
    /**
     * A method to launch flying process for specified time
     *
     * @param {number} час - time to fly in seconds
     * @returns {Promise<void>} resolves when flying is done
     * @memberof NastyFly
     */
    літатиПротягом(час) {
        const кінець = Date.now() + Math.round(час * 1000);
        const муха = this;
        let кроки;
        return муха._зліт().then(() => new Promise(resolve => {
            кроки = window.setInterval(() => {
                if (Date.now() < кінець && муха.стан === 'літає') {
                    муха.__рухатисяДо(муха.__випадковеМісцеПопереду);
                }
                else {
                    clearInterval(кроки);
                    if (муха.стан === 'літає')
                        муха._сісти();
                    resolve();
                }
            }, 10);
        }));
    }
    /**
     * Seats the fly down
     *
     * @protected
     * @memberof NastyFly
     *
     * @fires NastyFly#сидить
     */
    _сісти() {
        this.стан = 'сидить';
        this.__buzz.pause();
        /**
         * An event indicating the fly is seated
         *
         * @event NastyFly#сидить
         * @type CustomEvent
         */
        this.dispatchEvent(new CustomEvent('сидить', { bubbles: true, composed: true }));
    }
    /**
     * A command for the fly to die
     *
     * @memberof NastyFly
     *
     * @fires NastyFly#смерть
     */
    вмерти() {
        this.стан = 'прибита';
        this.__buzz.pause();
        /**
         * An event indicating the fly is dead
         *
         * @event NastyFly#смерть
         * @type CustomEvent
         */
        this.dispatchEvent(new CustomEvent('смерть', { bubbles: true, composed: true }));
    }
    /**
     * Renders the fly's appearance
     *
     * @returns {TemplateResult}
     * @memberof NastyFly
     */
    render() {
        return html `
      <div
        class="муха"
        style="left: ${this.__x}px; top: ${this
            .__y}px; transform: rotateZ(${this
            .__кут}rad) translate(-50%,-50%) scale(1);"
        is=${this.стан}
      ></div>
    `;
    }
}
/**
 * Basic component of the fly's speed
 *
 * @protected
 * @static
 * @type {number}
 * @memberof NastyFly
 */
NastyFly.БАЗОВИЙ_КРОК = 20;
/**
 * Distance at which fly 'sees' the edge of the page and turns away
 *
 * @protected
 * @static
 * @type {number}
 * @memberof NastyFly
 */
NastyFly.БАЗОВИЙ_ПОРІГ = 95;
__decorate([
    property({ type: String })
], NastyFly.prototype, "\u0441\u0442\u0430\u043D", void 0);
__decorate([
    property({ type: Number })
], NastyFly.prototype, "liveliness", null);
__decorate([
    state()
], NastyFly.prototype, "__buzz", void 0);
__decorate([
    state()
], NastyFly.prototype, "__x", void 0);
__decorate([
    state()
], NastyFly.prototype, "__y", void 0);
__decorate([
    state()
], NastyFly.prototype, "__\u043A\u0443\u0442", void 0);
__decorate([
    state()
], NastyFly.prototype, "__\u0437\u0430\u0442\u0440\u0438\u043C\u043A\u0430\u0417\u043B\u044C\u043E\u0442\u0443", void 0);
__decorate([
    state()
], NastyFly.prototype, "__CANBUZZ", void 0);
//# sourceMappingURL=NastyFly.js.map