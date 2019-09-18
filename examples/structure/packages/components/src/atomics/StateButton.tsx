import * as React from 'react';
import { useState } from 'react';

interface StateButtonProps {
  isDisabled?: boolean;
}

export function StateButton({ isDisabled = false }: StateButtonProps): JSX.Element {
  const [disabled, setDisabled] = useState(isDisabled);

  return (
    <button disabled={disabled} onClick={() => setDisabled(true)}>
      Click Me!
    </button>
  );
}
