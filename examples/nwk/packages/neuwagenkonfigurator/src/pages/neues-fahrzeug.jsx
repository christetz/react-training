import React, { useState, useEffect, useRef } from 'react';
import { Headline } from 'components';

export function sum(a, b) {
  return a + b;
}

export function NeuesFahrzeugSeite({ name = '...' }) {
  const [newName, setNewName] = useState(name);

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setNewName('dauert lange');
    }, 5000);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, []);

  return (
    <div>
      <Headline text="Hello ..." />
      <h1> Fahrzeug {newName}</h1>
      <label>Name</label>
      <input
        type="text"
        onChange={event => {
          setNewName(event.target.value);
        }}
      />
      <button>OK</button>
      <button>Abbrechen</button>
    </div>
  );
}
