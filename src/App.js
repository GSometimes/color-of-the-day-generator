import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RandomColorContainer from './pages/RandomColorContainer/RandomColorContainer';
import Navbar from './components/Navbar/Navbar';
import AllColorsContainer from './pages/AllColorsContainer/AllColorsContainer';

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

  const copyColor = () => {
    navigator.clipboard.writeText(`${color}`);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='random-color'
          element={
            <RandomColorContainer
              color={color}
              generateColor={generateColor}
              copyColor={copyColor}
            />
          }
        />
        <Route path='all-colors' element={<AllColorsContainer />} />
      </Routes>
    </>
  );
}

export default App;
