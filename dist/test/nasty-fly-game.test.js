import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import '../src/nasty-fly-game.js';
describe('NastyFlyGame', () => {
    it('exists', async () => {
        const aFlyGame = await fixture(html `<nasty-fly-game></nasty-fly-game>`);
        expect(aFlyGame).to.exist;
    });
    it('creates a fly', async () => {
        var _a;
        const aFlyGame = await fixture(html `<nasty-fly-game></nasty-fly-game>`);
        expect((_a = aFlyGame.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('nasty-fly').length).to.be.above(0);
    });
    // eslint-disable-next-line prefer-arrow-callback
    it('creates more of them when they die', async () => {
        var _a, _b;
        const aFlyGame = await fixture(html `<nasty-fly-game></nasty-fly-game>`);
        const oldcount = (_a = aFlyGame.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('nasty-fly').length;
        const theFly = (_b = aFlyGame.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('nasty-fly');
        theFly === null || theFly === void 0 ? void 0 : theFly.вмерти();
        await waitUntil(() => {
            var _a;
            return ((_a = aFlyGame.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('nasty-fly').length) >
                oldcount;
        }, 'should be reborn', { timeout: 5000 });
    });
});
//# sourceMappingURL=nasty-fly-game.test.js.map