import { TemplateResult } from 'lit';
import '../src/nasty-fly-game.js';

declare const _default: {
  title: string;
  component: string;
  argTypes: {
    counter: {
      control: string;
    };
    maxcount: {
      control: string;
    };
  };
};
export default _default;
interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}
interface ArgTypes {
  counter?: number;
  maxcount?: number;
}
export declare const Regular: Story<ArgTypes>;
export declare const CustomMaxcount: Story<ArgTypes>;
