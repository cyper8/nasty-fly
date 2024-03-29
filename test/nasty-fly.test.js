import { html, fixture, expect } from '@open-wc/testing';
import '../src/nasty-fly.js';
describe('NastyFly element', () => {
    it('exists', async () => {
        const NastyFlyElementInstance = await fixture(html `<nasty-fly></nasty-fly>`);
        expect(NastyFlyElementInstance).to.exist;
        // expect(NastyFlyElementInstance).to.be.accessible();
    });
    it('has fly', async () => {
        const aFly = await fixture(html `<nasty-fly></nasty-fly>`);
        const theFly = aFly.shadowRoot.querySelector('div.муха');
        expect(theFly).to.be.instanceOf(HTMLDivElement);
    });
    it('sits', async () => {
        const aFly = await fixture(html `<nasty-fly></nasty-fly>`);
        expect(aFly.стан).equals('сидить');
    });
    it('looks like a fly', async () => {
        const aFly = await fixture(html `<nasty-fly></nasty-fly>`);
        const theFly = aFly.shadowRoot.querySelector('div.муха');
        await aFly.updateComplete;
        expect(window.getComputedStyle(theFly).backgroundImage).to.include('fly.svg');
    });
    it('is properly styled', async () => {
        const aFly = await fixture(html `<nasty-fly></nasty-fly>`);
        const theFly = aFly.shadowRoot.querySelector('div.муха');
        expect(window.getComputedStyle(theFly).backgroundColor).not.equal('pink');
    });
    it('can fly', done => {
        fixture(html `<nasty-fly liveliness="0" @літає=${() => done()}></nasty-fly>`).then(aFly => {
            aFly.click();
        });
    });
    it('looks like a flying fly, while flying', async () => {
        const aFly = await fixture(html `<nasty-fly liveliness="0"></nasty-fly>`);
        const theFly = aFly.shadowRoot.querySelector('div.муха');
        aFly.click();
        await new Promise(resolve => {
            aFly.addEventListener('літає', () => {
                expect(window.getComputedStyle(theFly).backgroundImage).to.include('fly-flies.svg');
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
    it('can be smashed', done => {
        fixture(html `<nasty-fly liveliness="0"></nasty-fly>`).then(aFly => {
            aFly.addEventListener('літає', () => {
                aFly.click();
            });
            aFly.addEventListener('смерть', () => {
                done();
            });
            aFly.addEventListener('readytofly', () => {
                aFly.click();
            });
        });
    });
    it('flies until eventually sits herself down', done => {
        fixture(html `<nasty-fly liveliness="0"></nasty-fly>`).then(aFly => {
            aFly.addEventListener('readytofly', () => aFly.click());
            aFly.addEventListener('літає', () => {
                aFly.addEventListener('сидить', () => {
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=nasty-fly.test.js.map