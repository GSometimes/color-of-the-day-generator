import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button onClick={props.testMethod} className='button' type='button'>
      {props.text}
    </button>
  );
};

export default Button;
