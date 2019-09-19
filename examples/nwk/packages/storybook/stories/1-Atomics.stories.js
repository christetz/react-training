import React from 'react';
import { Headline } from 'components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Atomics',
};

export const headLineOhneText = () => <Headline />;
export const headLineMitText = () => <Headline text={text('text', 'Hello BTC')} />;
