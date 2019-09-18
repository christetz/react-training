import * as React from 'react';

interface AdvancedButtonProps {
  text?: string;
  onDoSomething?: () => void;
}

export function AdvancedButton({ text = 'empty', onDoSomething = () => {} }: AdvancedButtonProps): JSX.Element {
  return <button onClick={onDoSomething}>{text}</button>;
}
