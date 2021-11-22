import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo, LogoProps } from '.';

import logoImg from './assets/logo.svg';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    logo: logoImg,
  },
} as Meta;

export const Basic: Story<LogoProps> = args => <Logo {...args} />;

export const BasicWithLabel: Story<LogoProps> = args => <Logo {...args} />;

BasicWithLabel.args = {
  children: 'Texto',
};
