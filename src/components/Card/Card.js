import React from 'react';
import './style.css';

const Card = (props) => {
  return (
    // add on click for copying text on the card itself
    <div className='card-wrapper'>
      <div style={{ backgroundColor: props.item }} className='color'></div>
      <div className='card-text'>
        {`Day ${props.index + 1}`}: {props.item}
      </div>
    </div>
  );
};

export default Card;
