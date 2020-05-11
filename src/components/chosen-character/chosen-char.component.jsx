import React from 'react';

export const ChosenCharacter = ({img, name}) => (
  <div className="chosen-char-box">
    <img src={img} alt="char" />
    <h2>{name}</h2>
  </div>
)