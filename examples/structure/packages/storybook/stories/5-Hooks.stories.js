import React from 'react';
import { useLocalStorageState } from '@advanced-react/components';

export default {
  title: '5-Hooks',
};

export const myLocalStorageHookComponent = () => {
  const [foo, setFoo] = useLocalStorageState('my-foo-key', { count: 1 });

  return (
    <>
      <pre>{JSON.stringify(foo, null, 4)}</pre>
      <button onClick={() => setFoo({ count: foo.count + 1 })}>Set Value</button>
      <button onClick={() => setFoo({ count: 1 })}>Reset Value</button>
      <button onClick={() => setFoo()}>Remove Value</button>
    </>
  );
};
