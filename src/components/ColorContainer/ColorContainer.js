import React, { useState } from 'react';
import { colorOfTheDay } from '../../data/color-data';
import Button from '../Button/Button';
import './style.css';

// const random =
//   colorOfTheDay[Math.floor(Math.random() * colorOfTheDay.length)].toUpperCase();
// console.log(random);

const ColorContainer = () => {
  const [color, setColor] = useState(colorOfTheDay[0]);

  const generateColor = () => {
    const random =
      colorOfTheDay[
        Math.floor(Math.random() * colorOfTheDay.length)
      ].toUpperCase();

    setColor(random);
  };

  return (
    <>
      <div style={{ backgroundColor: color }} className='container'>
        {/* <button style={{ color }} onClick={generateColor}>
          {color}
        </button> */}
        <Button color={color} generateColor={generateColor} />
      </div>
    </>
  );
};

export default ColorContainer;
