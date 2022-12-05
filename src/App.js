import './App.css';
import { Route, Routes } from 'react-router-dom';
import RandomColorContainer from './components/RandomColorContainer/RandomColorContainer';
import Navbar from './components/Navbar/Navbar';
import AllColorsContainer from './components/AllColorsContainer/AllColorsContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <RandomColorContainer /> */}
      <Routes>
        <Route path='random-color' element={<RandomColorContainer />} />
        <Route path='all-colors' element={<AllColorsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
