import { Meta, Story } from '@storybook/react/types-6-0';
import { CardPlan, CardPlanProps } from '.';

import blob1 from '../Blob/assets/blob1.svg';
import customBlob from '../Blob/assets/blobCustom.svg';

export default {
  title: 'CardPlan',
  component: CardPlan,
  args: {},
} as Meta;

export const Basic: Story<CardPlanProps> = args => (
  <div style={{ maxWidth: '31rem' }}>
    <CardPlan {...args} />
  </div>
);

Basic.args = {
  plan: 'FaleMais 30',
  price: '10,00',
  describe: 'For organizing every corner of your life.',
  additionalText: 'Everything in Personal, plus',
  additionalList: [
    'Unlimited file uploads',
    'Unlimited file uploads',
    'Unlimited file uploads',
  ],
  isBlobCustom: false,
  blobText: '30',
  blobImage: blob1,
  buttonText: 'Contratar',
};

export const PlanCustomCard: Story<CardPlanProps> = args => (
  <div style={{ maxWidth: '31rem' }}>
    <CardPlan {...args} />
  </div>
);

PlanCustomCard.args = {
  plan: 'FaleMais 30',
  price: '10,00',
  describe: 'For organizing every corner of your life.',
  additionalText: 'Everything in Personal, plus',
  additionalList: [
    'Unlimited file uploads',
    'Unlimited file uploads',
    'Unlimited file uploads',
  ],
  isBlobCustom: true,
  blobText: 'Personalizado',
  blobImage: customBlob,
  buttonText: 'Contratar',
};
