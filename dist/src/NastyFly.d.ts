import { LitElement, TemplateResult } from 'lit';
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
export declare class NastyFly extends LitElement {
  /**
   * Basic component of the fly's speed
   *
   * @protected
   * @static
   * @type {number}
   * @memberof NastyFly
   */
  protected static БАЗОВИЙ_КРОК: number;

  /**
   * Distance at which fly 'sees' the edge of the page and turns away
   *
   * @protected
   * @static
   * @type {number}
   * @memberof NastyFly
   */
  protected static БАЗОВИЙ_ПОРІГ: number;

  /**
   * A state fly is currently in.
   *
   * @type {('сидить' | 'літає' | 'прибита')}
   * @memberof NastyFly
   */
  стан: 'сидить' | 'літає' | 'прибита';

  /**
   * Liveliness of a fly - a period it can constantly be flying
   * 0 - exactly 1 second
   * n (up to 10) - random time from 1 to n/2 seconds.
   * This also increases speed and reduces takeoff timeout.
   *
   * @type {number}
   * @memberof NastyFly
   */
  set liveliness(val: number);

  get liveliness(): number;

  private __liveliness;

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
  private __buzz;

  private __x;

  private __y;

  private __кут;

  private __затримкаЗльоту;

  private __CANBUZZ;

  static get styles(): import('lit').CSSResult;

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
  protected _зліт(): Promise<void>;

  /**
   * A method that requests a change of placement and orientation of a fly
   * on the next animation frame
   *
   * @private
   * @param {[number, number]} точка - new place to render the fly
   * @returns {[number, number]} - the same point
   * @memberof NastyFly
   */
  private __рухатисяДо;

  /**
   * Randomized spot ahead the fly to jump to on the next tick
   *
   * @readonly
   * @private
   * @type {[number, number]}
   * @memberof NastyFly
   */
  private get __випадковеМісцеПопереду();

  /**
   * A method to launch flying process for specified time
   *
   * @param {number} час - time to fly in seconds
   * @returns {Promise<void>} resolves when flying is done
   * @memberof NastyFly
   */
  літатиПротягом(час: number): Promise<void>;

  /**
   * Seats the fly down
   *
   * @protected
   * @memberof NastyFly
   *
   * @fires NastyFly#сидить
   */
  protected _сісти(): void;

  /**
   * A command for the fly to die
   *
   * @memberof NastyFly
   *
   * @fires NastyFly#смерть
   */
  вмерти(): void;

  /**
   * Creates an instance of NastyFly.
   * @memberof NastyFly
   */
  constructor();

  /**
   * Renders the fly's appearance
   *
   * @returns {TemplateResult}
   * @memberof NastyFly
   */
  render(): TemplateResult;
}
