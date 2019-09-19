import React, { useState, useEffect } from 'react';
import { Bauteil } from '../atomics/Bauteil';

export function BauteileSelection({ onBauteilSelected = (selectedBauteil, isSelected) => {} }) {
  const [bauteile, setBauteile] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/bauteile')
      .then(response => response.json())
      .then(data => setBauteile(data));
  }, []);

  const bauteilecomponents = bauteile.map(teil => {
    return (
      <Bauteil
        name={teil.name}
        key={teil.name}
        isSelected={teil.isSelected}
        onSelectHandler={selected => onBauteilSelected(teil.name, selected)}></Bauteil>
    );
  });
  return <div>{bauteilecomponents}</div>;
}
