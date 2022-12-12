import React from 'react';
import './style.css';
import { colorOfTheDay } from '../../data/color-data';

const AllColorsContainer = () => {
  return (
    <div className='all-container'>
      {colorOfTheDay.map((item) => {
        return (
          <div className='card-wrapper'>
            <div style={{ backgroundColor: item }} className='color'></div>
            <div style={{ color: item }} className='card-text'>
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllColorsContainer;
