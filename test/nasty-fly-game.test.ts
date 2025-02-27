import { NastyFlyGame } from '../src/NastyFlyGame.js';
import { html, render } from 'lit';
import { expect, describe, it, vi, beforeAll, afterAll } from 'vitest';

const makeAFlyGame = async () => {
  return import('../src/NastyFlyGame.js').then(() => {
    let root = document.body;
    render(html`<nasty-fly-game></nasty-fly-game>`, root, );
    let game = root.querySelector('nasty-fly-game');
    if (!game) {throw new Error('failed to render NastyFlyGame')} else 
    {
      return game
    }
  })
}

describe('NastyFlyGame', async () => {
  var aFlyGame: NastyFlyGame;
  beforeAll(async () => {
    aFlyGame = await makeAFlyGame();
  });
  afterAll(() => {
    aFlyGame.remove();
  })
  it('exists', async () => {
    expect(aFlyGame).to.exist;
    expect(aFlyGame).instanceOf(NastyFlyGame);
  });

  it('creates a fly', async () => {
    expect(
      aFlyGame.shadowRoot?.querySelectorAll('nasty-fly').length
    ).to.be.above(0);
  });

  it('creates more of them when they die', async () => {
    const oldcount =
      aFlyGame.shadowRoot?.querySelectorAll('nasty-fly').length;
    const theFly = aFlyGame.shadowRoot?.querySelector('nasty-fly');
    expect(theFly, 'no fly').to.exist;
    theFly!.вмерти();
    await theFly!.updateComplete;
    expect(theFly!.стан).to.equal('прибита');
    await expect.poll(() => aFlyGame.counter, {timeout: 2000}).toBeGreaterThan(0);
    const newLength = await aFlyGame.updateComplete
    .then(() => aFlyGame.shadowRoot?.querySelectorAll('nasty-fly').length);    
    expect(newLength || 0).toBeGreaterThan(oldcount || 0);
  });
});
