import { html } from 'lit';
import '../src/nasty-fly-game.js';
export default {
    title: 'NastyFlyGame',
    component: 'nasty-fly-game',
    argTypes: {
        counter: { control: 'number' },
        maxcount: { control: 'number' },
    },
};
const Template = ({ maxcount = 10 }) => html `
  <nasty-fly-game .maxcount=${maxcount}> </nasty-fly-game>
`;
export const Regular = Template.bind({});
export const CustomMaxcount = Template.bind({});
CustomMaxcount.args = {
    maxcount: 5,
};
//# sourceMappingURL=index.stories.js.map