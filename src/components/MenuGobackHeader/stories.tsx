import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuGobackHeader, MenuGobackHeaderProps } from '.';

import logoImg from '../Logo/assets/logo.svg';

export default {
  title: 'MenuGobackHeader',
  component: MenuGobackHeader,
  args: {
    logoImage: logoImg,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<MenuGobackHeaderProps> = args => (
  <MenuGobackHeader {...args} />
);
