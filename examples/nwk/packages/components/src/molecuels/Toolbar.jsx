import React from 'react';

export function Toolbar({ onHinzufuegen = () => {}, renderTitle = () => null, isEnabled = false }) {
  return (
    <div>
      <div>{renderTitle()}</div>
      <button disabled={!isEnabled} onClick={() => onHinzufuegen()}>
        Hinzufügen
      </button>
      <button>Entfernen</button>
    </div>
  );
}
