import { useState, useEffect } from 'react';

export function useLocalStorageState(key: string, defaultValue: object) {
  const [state, setState] = useState(() =>
    JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue))
  );

  useEffect(() => {
    if (!state) return window.localStorage.removeItem(key);

    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
