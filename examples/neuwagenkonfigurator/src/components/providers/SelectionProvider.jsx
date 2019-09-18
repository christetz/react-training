import React, { createContext, useState } from 'react';

export const SelectionContext = createContext({});

export const SelectionProvider = ({ children }) => {
  const [fahrzeug, setFahrzeug] = useState();
  const [bauteil, setBauteil] = useState();

  const value = {
    shouldToolbarButtonEnabled: Boolean(bauteil) && Boolean(fahrzeug),
    hasFahrzeug: Boolean(fahrzeug),
    hasBauteil: Boolean(bauteil),
    bauteil,
    fahrzeug,
    selectFahrzeug(value) {
      setFahrzeug(value);
    },
    selectBauteil(value) {
      setBauteil(value);
    },
  };

  return <SelectionContext.Provider value={value}>{children(value)}</SelectionContext.Provider>;
};
