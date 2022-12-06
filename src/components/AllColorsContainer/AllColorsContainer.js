import React from 'react';
import './style.css';
import { colorOfTheDay } from '../../data/color-data';

const AllColorsContainer = ({ color, generateColor }) => {
  return (
    <div className='all-container'>
      {colorOfTheDay.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default AllColorsContainer;

// <Button color={color} generateColor={generateColor} />
