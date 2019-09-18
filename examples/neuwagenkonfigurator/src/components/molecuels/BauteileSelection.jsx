import React from "react";
import { Bauteil } from "../atomics/Bauteil";

export function BauteileSelection({
  onBauteilSelected = (selectedBauteil, isSelected) => {},
  bauteile = [
    { name: "motor", isSelected: false },
    { name: "aussenspiegel", isSelected: false },
    { name: "reifen", isSelected: false },
    { name: "innenspiegel", isSelected: false },
    { name: "navi", isSelected: false },
    { name: "Lenkrad", isSelected: false },
    { name: "Rueckleuchten", isSelected: false },
    { name: "Sitzklimatik", isSelected: false }
  ]
}) {
  const bauteilecomponents = bauteile.map(teil => {
    return (
      <Bauteil
        name={teil.name}
        key={teil.name}
        isSelected={teil.isSelected}
        onSelectHandler={selected => onBauteilSelected(teil.name, selected)}
      ></Bauteil>
    );
  });
  return <div>{bauteilecomponents}</div>;
}
