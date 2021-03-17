import { html, fixture, expect, waitUntil } from '@open-wc/testing';

import { NastyFlyGame } from '../src/NastyFlyGame.js';
import '../nasty-fly-game.js';
import { NastyFly } from '../src/NastyFly.js';

describe('NastyFlyGame', () => {
  it('exists', async () => {
    const aFlyGame = await fixture<NastyFlyGame>(
      html`<nasty-fly-game></nasty-fly-game>`
    );
    expect(aFlyGame).to.exist;
  });

  it('creates a fly', async () => {
    const aFlyGame = await fixture<NastyFlyGame>(
      html`<nasty-fly-game></nasty-fly-game>`
    );
    expect(
      aFlyGame.shadowRoot?.querySelectorAll<NastyFly>('nasty-fly').length
    ).to.be.above(0);
  });

  // eslint-disable-next-line prefer-arrow-callback
  it('creates more of them when they die', async function () {
    this.timeout(5000);
    const aFlyGame = await fixture<NastyFlyGame>(
      html`<nasty-fly-game></nasty-fly-game>`
    );
    const oldcount = aFlyGame.shadowRoot?.querySelectorAll<NastyFly>(
      'nasty-fly'
    ).length;
    const theFly = aFlyGame.shadowRoot?.querySelector<NastyFly>('nasty-fly');
    theFly?.вмерти();
    await waitUntil(
      () =>
        aFlyGame.shadowRoot?.querySelectorAll<NastyFly>('nasty-fly').length! >
        oldcount!,
      'should be reborn',
      { timeout: 5000 }
    );
  });
});
