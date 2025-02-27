import { ssrFixture } from '@lit-labs/testing/fixtures.js';
import { html } from 'lit';
import { expect, describe, it } from 'vitest';
import { NastyFly } from '../src/NastyFly.js';

describe('NastyFly element', () => {
  it('exists', async () => {
    const NastyFlyElementInstance = await ssrFixture<NastyFly>(
      html`<nasty-fly></nasty-fly>`,
      {
        modules: ['../src/nasty-fly.js']
      }
    );
    expect(NastyFlyElementInstance).to.exist;
    // expect(NastyFlyElementInstance).to.be.accessible();
  });

  it('has fly', async () => {
    const aFly: NastyFly = await ssrFixture<NastyFly>(
      html`<nasty-fly></nasty-fly>`,
      {
        modules: ['../src/nasty-fly.js']
      }
    );
    const theFly: HTMLDivElement | null =
      aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
    expect(theFly).to.be.instanceOf(HTMLDivElement);
  });

  it('sits', async () => {
    const aFly: NastyFly = await ssrFixture<NastyFly>(
      html`<nasty-fly></nasty-fly>`,
      {
        modules: ['../src/nasty-fly.js']
      }
    );
    expect(aFly.стан).equals('сидить');
  });

  it('looks like a fly', async () => {
    const aFly: NastyFly = await ssrFixture<NastyFly>(
      html`<nasty-fly></nasty-fly>`,
      {
        modules: ['../src/nasty-fly.js']
      }
    );
    const theFly: HTMLDivElement | null =
      aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
    await aFly.updateComplete;
    expect(window.getComputedStyle(theFly!).backgroundImage).to.include(
      'fly.svg'
    );
  });

  it('is properly styled', async () => {
    const aFly: NastyFly = await ssrFixture<NastyFly>(
      html`<nasty-fly></nasty-fly>`,
      {
        modules: ['../src/nasty-fly.js']
      }
    );
    const theFly: HTMLDivElement | null =
      aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
    expect(window.getComputedStyle(theFly!).backgroundColor).not.equal('pink');
  });

  it('can fly', async () => {
    let success: boolean = false;
    await ssrFixture<NastyFly>(
      html`<nasty-fly liveliness="0" @літає=${() => {success = true}}></nasty-fly>`,
      {
        modules: ['../src/nasty-fly.js']
      }
    ).then(aFly => {
      aFly.click();
    });
    expect(success).toBeTruthy();
  });

  it('looks like a flying fly, while flying', async () => {
    const aFly: NastyFly = await ssrFixture<NastyFly>(
      html`<nasty-fly liveliness="0"></nasty-fly>`,
      {
        modules: ['../src/nasty-fly.js']
      }
    );
    const theFly: HTMLDivElement | null =
      aFly.shadowRoot!.querySelector<HTMLDivElement>('div.муха');
    aFly.click();
    await new Promise<void>(resolve => {
      aFly.addEventListener('літає', () => {
        expect(window.getComputedStyle(theFly!).backgroundImage).to.include(
          'fly-flies.svg'
        );
        resolve();
      });
    });
  });

  // TODO: Cannot test audio playback for now
  // xit('buzzes, while flying', (done) => {
  //   fixture<NastyFly>(html`<nasty-fly liveliness=0></nasty-fly>`)
  //     .then(aFly => {
  //       aFly.addEventListener('літає', () => {
  //         expect(aFly.buzz).to.be.instanceOf(HTMLAudioElement);
  //         expect(aFly.buzz.src).to.include('buzz.mp3');
  //         expect(aFly.buzz.paused).to.be.false;
  //         done();
  //       });
  //       aFly.addEventListener('readytofly', () => {
  //         aFly.click();
  //       })
  //     });
  // });

  // TODO: test liveliness changes effects

  it('can be smashed', async () => {
    let success: boolean = false;
    await ssrFixture<NastyFly>(html`<nasty-fly liveliness="0"></nasty-fly>`,
    {
      modules: ['../src/nasty-fly.js']
    }).then(
      aFly => {
        aFly.addEventListener('літає', () => {
          aFly.click();
        });
        aFly.addEventListener('смерть', () => {
          success = true;
        });
        aFly.addEventListener('readytofly', () => {
          aFly.click();
        });
      }
    );
    expect(success).toBeTruthy();
  });

  it('flies until eventually sits herself down', async () => {
    let success: boolean = false;
    await ssrFixture<NastyFly>(html`<nasty-fly liveliness="0"></nasty-fly>`,
    {
      modules: ['../src/nasty-fly.js']
    }).then(
      aFly => {
        aFly.addEventListener('readytofly', () => aFly.click());
        aFly.addEventListener('літає', () => {
          aFly.addEventListener('сидить', () => {
            success = true;
          });
        });
      }
    );
    expect(success).toBeTruthy();
  });
});
