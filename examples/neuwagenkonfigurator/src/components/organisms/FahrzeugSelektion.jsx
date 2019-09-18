import React, { useState, useContext } from 'react';
import { SelectionContext } from '../providers/SelectionProvider';

export function FahrzeugSelektion() {
  const [carList, setCarList] = useState(['Audi A3', 'MAN TGX', 'VW Käfer']);
  const selectionContext = useContext(SelectionContext);

  function addCar(newCar) {
    setCarList([...carList, newCar]);
  }

  function removeCar() {
    // TODO setCarList(); --index
  }

  return (
    <div style={{ border: '1px black dotted' }}>
      <h2>FahrzeugSelektion</h2>
      <form>
        {carList.map((value, index) => {
          return (
            <label key={index} style={{ display: 'block' }}>
              <input
                type="radio"
                name="radgroup"
                value={index}
                onClick={() => selectionContext.selectFahrzeug(carList[index])}
              />
              {value}
            </label>
          );
        })}
      </form>
    </div>
  );
}
