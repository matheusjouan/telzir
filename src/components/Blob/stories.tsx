import { Meta, Story } from '@storybook/react/types-6-0';
import { Blob, BlobProps } from '.';

import blob1 from './assets/blob1.svg';
import blob3 from './assets/blob3.svg';
import customBlob from './assets/blobCustom.svg';

export default {
  title: 'Blob',
  component: Blob,
  args: {},
} as Meta;

export const Basic: Story<BlobProps> = args => <Blob {...args} />;

Basic.args = {
  children: '30',
  blobImg: blob1,
};

export const Blop2: Story<BlobProps> = args => <Blob {...args} />;

Blop2.args = {
  children: '120',
  blobImg: blob3,
};

export const CustumBlop: Story<BlobProps> = args => <Blob {...args} />;

CustumBlop.args = {
  children: 'Personalizado',
  blobImg: customBlob,
  customText: true,
};
