// import React, { useState } from 'react';
// import { colorOfTheDay } from '../../data/color-data';
import Button from '../Button/Button';
// import ColorButton from '../ColorButton/ColorButton';
// import CopyButton from '../CopyButton/CopyButton';
import './style.css';

const RandomColorContainer = ({ color, generateColor, copyColor }) => {
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
        {/* <button
          className='color-button'
          style={{ color }}
          onClick={generateColor}
          >
          {color}
          </button>
          <button
          onClick={() => {
            navigator.clipboard.writeText(`${color}`);
          }}
          className='copy-button'
          >
          Pick Me!
        </button> */}
        {/* <ColorButton color={color} generateColor={generateColor} />
        <CopyButton color={color} /> */}
        <Button
          text={color}
          passFunc={generateColor}
        />
        <Button text={'Pick Me!'} passFunc={copyColor} />
      </div>
    </>
  );
};

export default RandomColorContainer;
