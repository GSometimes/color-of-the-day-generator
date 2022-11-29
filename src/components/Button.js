import React from 'react';

const Button = ({ color, generateColor }) => {
  return (
    <button style={{ color }} onClick={generateColor}>
      {color}
    </button>
  );
};

export default Button;
