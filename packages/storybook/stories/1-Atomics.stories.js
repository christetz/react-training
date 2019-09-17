import React from 'react';
import { action } from '@storybook/addon-actions';
import { SimpleButton, AdvancedButton, StateButton } from '@advanced-react/components';

export default {
  title: '1-Atomics',
};

export const simpleButton = () => <SimpleButton text="😀 😎 👍 💯" />;
export const advancedButton = () => <AdvancedButton onDoSomething={action('clicked')} />;
export const stateButton = () => <StateButton />;
