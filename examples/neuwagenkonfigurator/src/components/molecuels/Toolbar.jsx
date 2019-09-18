import React from 'react';

export function Toolbar({ onHinzufuegen = () => {}, renderTitle = () => null }) {
  return (
    <div>
      <div>{renderTitle()}</div>
      <button onClick={() => onHinzufuegen()}>Hinzufügen</button>
      <button>Entfernen</button>
    </div>
  );
}
