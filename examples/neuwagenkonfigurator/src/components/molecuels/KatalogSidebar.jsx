import React from 'react';
import './KatalogSidebar.css';

export const katalogEnum = {
  FAHRZEUGE: 'fahrzeuge',
  BAUTEILE: 'bauteile',
};

export function KatalogSidebar({
  activeKatalog = null,
  onFahrzeugeSelected = () => null,
  onBauteileSelected = () => null,
}) {
  const styleSelected = { backgroundColor: 'peachpuff' };
  const styleDeselected = { backgroundColor: 'inherit' };

  return (
    <nav style={{ border: '1px solid black' }}>
      <ul>
        <li>
          <button
            className={
              activeKatalog && activeKatalog === katalogEnum.FAHRZEUGE
                ? 'catalog-sidebar-button-selected'
                : 'catalog-sidebar-button'
            }
            onClick={() => onFahrzeugeSelected()}>
            Fahrzeuge
          </button>
        </li>
        <li>
          <button
            className={
              activeKatalog && activeKatalog === katalogEnum.BAUTEILE
                ? 'catalog-sidebar-button-selected'
                : 'catalog-sidebar-button'
            }
            onClick={() => onBauteileSelected()}>
            Bauteile
          </button>
        </li>
      </ul>
    </nav>
  );
}
