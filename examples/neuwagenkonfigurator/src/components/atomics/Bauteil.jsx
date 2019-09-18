import React from 'react';

export function Bauteil({ name = 'no name', isSelected = false, onSelectHandler = selected => {} }) {
  const style = {
    backgroundColor: isSelected ? 'lightgreen' : 'transparent',
    transition: 'all 1s',
  };
  return (
    <div style={style} onClick={() => onSelectHandler(!isSelected)}>
      <img
        src="https://image.stern.de/8873922/16x9-940-529/9a9b53a3f7eedefe7622f4712cf81bbe/Qu/donald-trump-wehrt-sich-gegen--fieses--bettwanzen-geruecht.jpg"
        style={{ width: '140px', height: '100px', objectFit: 'contain' }}
      />
      {name}
    </div>
  );
}
