import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { WithLoading } from '@advanced-react/components';

export default {
  title: '6-Hocs',
};

const MyDemoComponent = () => <div>Hello World</div>;
const MyDemoComponentWithLoading = WithLoading(MyDemoComponent);

export const withLoading = () => <MyDemoComponentWithLoading isLoading={boolean('isLoading', false)} />;
