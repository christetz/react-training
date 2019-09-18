import React from 'react';

export const katalogEnum = {
  FAHRZEUGE: 'fahrzeuge',
  BAUTEILE: 'bauteile',
}

export function KatalogSidebar({activeKatalog = null, onFahrzeugeSelected = () => null, onBauteileSelected = () => null}) {
  
  const styleSelected = { backgroundColor: 'peachpuff' };
  const styleDeselected = { backgroundColor: 'inherit' };

  return (
    <nav style={{ border: '1px solid black' }}>
      <ul>
        <li><button style={(activeKatalog && activeKatalog === katalogEnum.FAHRZEUGE) ? styleSelected : styleDeselected} onClick={() => onFahrzeugeSelected()}>Fahrzeuge</button></li>
        <li><button style={(activeKatalog && activeKatalog === katalogEnum.BAUTEILE) ? styleSelected : styleDeselected} onClick={() => onBauteileSelected()}>Bauteile</button></li>
      </ul>
    </nav>
  );
}
