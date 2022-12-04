import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColorContainer from './components/ColorContainer/ColorContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ColorContainer />
    </div>
  );
}

export default App;
