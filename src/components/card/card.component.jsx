import React from 'react';
import './card.styles.css';

export const Card = ({props, handler}) => (
  <div className='card-container' onClick={handler}>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set&180x180`} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
)