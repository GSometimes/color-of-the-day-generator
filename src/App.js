import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RandomColorContainer from './components/RandomColorContainer/RandomColorContainer';
import Navbar from './components/Navbar/Navbar';
import AllColorsContainer from './components/AllColorsContainer/AllColorsContainer';

import { colorOfTheDay } from './data/color-data';

function App() {
  const [color, setColor] = useState(colorOfTheDay[0]);

  const generateColor = () => {
    const random =
      colorOfTheDay[
        Math.floor(Math.random() * colorOfTheDay.length)
      ].toUpperCase();

    setColor(random);
  };
  return (
    <div className='App'>
      <Navbar />
      {/* <RandomColorContainer /> */}
      <Routes>
        <Route
          path='random-color'
          element={
            <RandomColorContainer color={color} generateColor={generateColor} />
          }
        />
        <Route path='all-colors' element={<AllColorsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
