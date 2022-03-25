import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { asyncAppend } from 'lit/directives/async-append.js';
import './nasty-fly.js';
/**
 * Custom Element based on LitElement that creates flies on the page,
 * one at a time, and when it gets smashed by doubleclick, creates new one,
 * maintaining a counter in the bottom of a page.
 *
 * @export
 * @class NastyFlyGame
 * @extends {LitElement}
 */
export class NastyFlyGame extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * A counter of smashed flies.
         *
         * @type {number}
         * @memberof NastyFlyGame
         */
        this.counter = 0;
        /**
         * Create new flies until this count.
         *
         * @type {number}
         * @memberof NastyFlyGame
         */
        this.maxcount = 50;
        this.мухи = this.щемухи();
    }
    /**
     * Async generator to create new fly when previous violently dies.
     *
     * @memberof NastyFlyGame
     */
    async *щемухи() {
        // let новаМуха: TemplateResult;
        while (this.counter < this.maxcount) {
            let новаМуха = html ``;
            const смертьМухи = new Promise(перейти => {
                новаМуха = html `
          <nasty-fly
            liveliness=${this.counter}
            @смерть=${() => setTimeout(перейти, 4000 * Math.random())}
          ></nasty-fly>
        `;
            });
            yield новаМуха;
            // eslint-disable-next-line no-await-in-loop
            await смертьМухи;
            this.counter += 1;
        }
    }
    render() {
        return html `
      <div class="fly-counter" ondblclick="function(e){e.preventDefault()}">
        <h2>${this.counter}</h2>
      </div>
      ${asyncAppend(this.мухи) /* this.мухи */}
    `;
    }
}
NastyFlyGame.styles = css `
    .fly-counter {
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
  `;
__decorate([
    property({ type: Number })
], NastyFlyGame.prototype, "counter", void 0);
__decorate([
    property({ type: Number })
], NastyFlyGame.prototype, "maxcount", void 0);
//# sourceMappingURL=NastyFlyGame.js.map