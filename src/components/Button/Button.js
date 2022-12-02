import React from 'react';
import './style.css';

const Button = ({ color, generateColor }) => {
  return (
    <button style={{ color }} onClick={generateColor}>
      {color}
    </button>
  );
};

export default Button;
