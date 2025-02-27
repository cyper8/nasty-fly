import { ssrFixture } from '@lit-labs/testing/fixtures.js';
import { NastyFlyGame } from '../src/NastyFlyGame.js';
import { html } from 'lit';
import { expect, describe, it, vi } from 'vitest';

describe('NastyFlyGame', () => {
  it('exists', async () => {
    const aFlyGame = await ssrFixture<NastyFlyGame>(
      html`<nasty-fly-game></nasty-fly-game>`,
      {modules: ['../src/nasty-fly-game.js']}
    );
    expect(aFlyGame).to.exist;
  });

  it('creates a fly', async () => {
    const aFlyGame = await ssrFixture<NastyFlyGame>(
      html`<nasty-fly-game></nasty-fly-game>`,
      {modules: ['../src/nasty-fly-game.js']}
    );
    expect(
      aFlyGame.shadowRoot?.querySelectorAll('nasty-fly').length
    ).to.be.above(0);
  });

  // eslint-disable-next-line prefer-arrow-callback
  it('creates more of them when they die', async () => {
    const aFlyGame = await ssrFixture<NastyFlyGame>(
      html`<nasty-fly-game></nasty-fly-game>`,
      {modules: ['../src/nasty-fly-game.js']}
    );
    const oldcount =
      aFlyGame.shadowRoot?.querySelectorAll('nasty-fly').length;
    const theFly = aFlyGame.shadowRoot?.querySelector('nasty-fly');
    theFly?.вмерти();
    const newLength = await vi.waitUntil(
      () =>
        aFlyGame.shadowRoot?.querySelectorAll('nasty-fly').length,
      { timeout: 5000 }
    );
    expect(newLength > oldcount!).toBeTruthy();
  });
});
