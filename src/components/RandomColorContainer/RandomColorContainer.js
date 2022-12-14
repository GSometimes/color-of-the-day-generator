// import React, { useState } from 'react';
// import { colorOfTheDay } from '../../data/color-data';
import ColorButton from '../ColorButton/ColorButton';
import CopyButton from '../CopyButton/CopyButton';
import './style.css';

const RandomColorContainer = ({ color, generateColor }) => {
  // const [color, setColor] = useState(colorOfTheDay[0]);

  // const generateColor = () => {
  //   const random =
  //     colorOfTheDay[
  //       Math.floor(Math.random() * colorOfTheDay.length)
  //     ].toUpperCase();

  //   setColor(random);
  // };

  return (
    <>
      <div style={{ backgroundColor: color }} className='random-container'>
        <ColorButton color={color} generateColor={generateColor} />
        <CopyButton color={color} />
      </div>
    </>
  );
};

export default RandomColorContainer;
