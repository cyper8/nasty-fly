import { html, TemplateResult } from 'lit';
import '../src/nasty-fly-game.js';

export default {
  title: 'NastyFlyGame',
  component: 'nasty-fly-game',
  argTypes: {
    counter: { control: 'number' },
    maxcount: { control: 'number' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  counter?: number;
  maxcount?: number;
}

const Template: Story<ArgTypes> = ({ maxcount = 10 }: ArgTypes) => html`
  <nasty-fly-game .maxcount=${maxcount}> </nasty-fly-game>
`;

export const Regular = Template.bind({});

export const CustomMaxcount = Template.bind({});
CustomMaxcount.args = {
  maxcount: 5,
};
