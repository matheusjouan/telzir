import { Meta, Story } from '@storybook/react/types-6-0';
import { MainMenuHeader, MainMenuHeaderProps } from '.';

import logoImg from '../Logo/assets/logo.svg';

export default {
  title: 'MainMenuHeader',
  component: MainMenuHeader,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<MainMenuHeaderProps> = args => (
  <MainMenuHeader {...args} />
);

Basic.args = {
  logoImage: logoImg,
  buttonText: 'Contratar',
};
