import { html, render } from 'lit';
import { expect, describe, it, beforeAll, afterAll } from 'vitest';
import { NastyFly } from '../src/NastyFly.js';

const makeAFly = async () => {
  return import('../src/NastyFly.js').then(() => {
    let root = document.body;
    render(html`<nasty-fly></nasty-fly>`, root, );
    let fly = root.querySelector('nasty-fly');
    if (!fly) {throw new Error('failed to render NastyFly')} else 
    {
      return fly
    }
  })
}

describe('NastyFly element', async () => {
  var aFly: NastyFly;
  beforeAll(async () => {
    console.log('create a fly');
    aFly = await makeAFly();
  });
  afterAll(() => {
    console.log('desctroy a fly');
    aFly.remove();
  });

  describe('initially', async () => {
    it('exists', async () => {
      expect(aFly).to.exist;
    });

    it('has fly', async () => {
      
      const theFly: HTMLDivElement | null =
        aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
      expect(theFly).to.be.instanceOf(HTMLDivElement);
    });

    it('sits', async () => {
      expect(aFly.стан).equals('сидить');
    });

    it('looks like a fly', async () => {
      const theFly: HTMLDivElement | null =
        aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
      await aFly.updateComplete;
      expect(window.getComputedStyle(theFly!).backgroundImage).to.include(
        'fly.svg'
      );
    });

    it('is properly styled', async () => {
      const theFly: HTMLDivElement | null =
        aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
      expect(window.getComputedStyle(theFly!).backgroundColor).not.equal('pink');
    });
  });

  describe('in flight mode', async () => {
    beforeAll(async () => {
      aFly.liveliness = 0;
      await aFly.updateComplete
      console.log('launch a fly');
      aFly.click();
    });

    it('flies', async () => {
      await aFly.updateComplete;
      await expect.poll(() => aFly.стан).to.equal('літає');
    });

    it('looks like a flying fly, while flying', async () => {
      const theFly: HTMLDivElement | null =
        aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
      if (aFly.стан !== 'літає') aFly.click();
      await expect.poll(() => window.getComputedStyle(theFly!).backgroundImage).to.include(
        'fly-flies.svg'
      );
    });

    it('flies until eventually sits herself down', async () => {
      if (aFly.стан !== 'літає') aFly.click();
      await expect.poll(() => aFly.стан, {timeout: 5000}).to.equal('сидить');
    });

    it('can be smashed', async () => {
      if (aFly.стан !== 'літає') aFly.click();
      await expect.poll(() => aFly.стан === 'літає').toBeTruthy();
      aFly.click();
      await expect.poll(() => aFly.стан === "прибита").toBeTruthy();
    });

  })
//   // TODO: Cannot test audio playback for now
//   // xit('buzzes, while flying', (done) => {
//   //   fixture<NastyFly>(html`<nasty-fly liveliness=0></nasty-fly>`)
//   //     .then(aFly => {
//   //       aFly.addEventListener('літає', () => {
//   //         expect(aFly.buzz).to.be.instanceOf(HTMLAudioElement);
//   //         expect(aFly.buzz.src).to.include('buzz.mp3');
//   //         expect(aFly.buzz.paused).to.be.false;
//   //         done();
//   //       });
//   //       aFly.addEventListener('readytofly', () => {
//   //         aFly.click();
//   //       })
//   //     });
//   // });

//   // TODO: test liveliness changes effects



//   
});
