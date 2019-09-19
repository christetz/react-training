import React, { useEffect } from 'react';
import styles from './MainPage.css';

export function MainPage() {
  async function foo() {
    const r = await fetch('https://api.chucknorris.io/jokes/random');
    const d = await r.json();
  }
  useEffect(() => {
    foo();
  }, []);

  console.log(styles);
  return (
    <h1 data-test-id="headline" className="headline">
      Hello World
    </h1>
  );
}
