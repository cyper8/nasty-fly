import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { asyncAppend } from 'lit/directives/async-append.js';
import { NastyFly } from './NastyFly.js';
import './NastyFly.js';

/**
 * Custom Element based on LitElement that creates flies on the page,
 * one at a time, and when it gets smashed by doubleclick, creates new one,
 * maintaining a counter in the bottom of a page.
 *
 * @export
 * @class NastyFlyGame
 * @extends {LitElement}
 */
@customElement('nasty-fly-game')
export class NastyFlyGame extends LitElement {
  static styles = css`
    .fly-counter {
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
  `;

  /**
   * A counter of smashed flies.
   *
   * @type {number}
   * @memberof NastyFlyGame
   */
  @property({ type: Number }) accessor counter: number = 0;

  /**
   * Create new flies until this count.
   *
   * @type {number}
   * @memberof NastyFlyGame
   */
  @property({ type: Number }) accessor maxcount: number = 50;

  /**
   * Async generator to create new fly when previous violently dies.
   *
   * @memberof NastyFlyGame
   */
  async *щемухи(): AsyncGenerator<TemplateResult, void, unknown> {
    // let новаМуха: TemplateResult;
    while (this.counter < this.maxcount) {
      let новаМуха: TemplateResult = html``;

      const смертьМухи: Promise<void> = new Promise<void>(перейти => {
        новаМуха = html`
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

  мухи = this.щемухи();

  render() {
    return html`
      <div class="fly-counter" ondblclick="function(e){e.preventDefault()}">
        <h2>${this.counter}</h2>
      </div>
      ${asyncAppend(this.мухи) /* this.мухи */}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nasty-fly': NastyFly,
    'nasty-fly-game': NastyFlyGame
  }
}