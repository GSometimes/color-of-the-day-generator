import React from 'react';
import './style.css';

const CopyButton = ({ color }) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(`${color}`);
      }}
      className='copy-button'
    >
      Pick Me!
    </button>
  );
};

export default CopyButton;
