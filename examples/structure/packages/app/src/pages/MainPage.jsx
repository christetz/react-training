import React, { useEffect } from 'react';

export function MainPage() {
  async function foo() {
    const r = await fetch('https://api.chucknorris.io/jokes/random');
    const d = await r.json();
  }
  useEffect(() => {
    foo();
  }, []);
  return <h1 data-test-id="headline">Hello World</h1>;
}
