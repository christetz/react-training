import * as React from 'react';

interface SimpleButtonProps {
  text: string;
}

export function SimpleButton({ text }: SimpleButtonProps): JSX.Element {
  return <button>{text}</button>;
}
