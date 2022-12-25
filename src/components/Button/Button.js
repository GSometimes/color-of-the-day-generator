import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button
      // style={props}
      onClick={props.passFunc}
      className='button'
      type='button'
    >
      {props.text}
    </button>
  );
};

export default Button;
