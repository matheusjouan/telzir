import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from '.';

import logoImg from '../Logo/assets/logo.svg';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    logoImage: logoImg,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<FooterProps> = args => <Footer {...args} />;
