import React from 'react';
import './style.css';
import { colorOfTheDay } from '../../data/color-data';

const AllColorsContainer = () => {
  return (
    <div className='all-container'>
      {colorOfTheDay.map((item, index) => {
        return (
          <div key={index} className='card-wrapper'>
            <div style={{ backgroundColor: item }} className='color'></div>
            <div className='card-text'>
              {`Day ${index + 1}`}: {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllColorsContainer;
