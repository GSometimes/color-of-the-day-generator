// import React, { useState } from 'react';
// import { colorOfTheDay } from '../../data/color-data';
import Button from '../Button/Button';
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
        <Button color={color} generateColor={generateColor} />
      </div>
    </>
  );
};

export default RandomColorContainer;
