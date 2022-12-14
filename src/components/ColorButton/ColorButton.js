import React from 'react';
import './style.css';

const ColorButton = ({ color, generateColor }) => {
  return (
    <button className='color-button' style={{ color }} onClick={generateColor}>
      {color}
    </button>
  );
};

export default ColorButton;
