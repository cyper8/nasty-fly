import { html, render } from 'lit';
import { expect, describe, it, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { NastyFly } from '../src/NastyFly.js';
import { aF } from 'vitest/dist/chunks/reporters.QZ837uWx.js';


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
    aFly = await makeAFly();
  });
  afterAll(() => {
    aFly.remove();
  });

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

  it('can fly', async () => {
    let success: boolean = false;
    aFly.liveliness = 0;
    aFly.addEventListener('літає', (_e) => {
      success = true;
    });
    await aFly.updateComplete
    .then(() => {
      aFly.click();
    })
    await expect.poll(() => success).toBeTruthy();
  });

  it('looks like a flying fly, while flying', async () => {
    const theFly: HTMLDivElement | null =
      aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
    aFly.click();
    await expect.poll(() => window.getComputedStyle(theFly!).backgroundImage).to.include(
      'fly-flies.svg'
    );
  });

  it('flies until eventually sits herself down', async () => {
    let success: boolean = false;
    
    aFly.addEventListener('readytofly', () => aFly.click());
    aFly.addEventListener('літає', () => {
      aFly.addEventListener('сидить', () => {
        success = true;
      });
    });

    await expect.poll(() => success, {timeout: 5000}).toBeTruthy();
  });
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

//   it('can be smashed', async () => {
//     let success: boolean = false;
//     await csrFixture<NastyFly>(html`<nasty-fly liveliness="0"></nasty-fly>`,
//     {
//       modules: ['../src/nasty-fly.js']
//     }).then(
//       aFly => {
//         aFly.addEventListener('літає', () => {
//           aFly.click();
//         });
//         aFly.addEventListener('смерть', () => {
//           success = true;
//         });
//         aFly.addEventListener('readytofly', () => {
//           aFly.click();
//         });
//       }
//     );
//     expect(success).toBeTruthy();
//   });

//   
});
