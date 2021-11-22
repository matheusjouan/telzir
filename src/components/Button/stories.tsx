import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

export const Basic: Story<ButtonProps> = args => <Button {...args} />;
