import { LitElement, TemplateResult } from 'lit';
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
export declare class NastyFlyGame extends LitElement {
  static styles: import('lit').CSSResult;

  /**
   * A counter of smashed flies.
   *
   * @type {number}
   * @memberof NastyFlyGame
   */
  counter: number;

  /**
   * Create new flies until this count.
   *
   * @type {number}
   * @memberof NastyFlyGame
   */
  maxcount: number;

  /**
   * Async generator to create new fly when previous violently dies.
   *
   * @memberof NastyFlyGame
   */
  щемухи(): AsyncGenerator<TemplateResult, void, unknown>;

  мухи: AsyncGenerator<TemplateResult<1 | 2>, void, unknown>;

  render(): TemplateResult<1>;
}
