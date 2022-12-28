import React from 'react';
import { navLinks } from '../../data/nav-data';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  // const [scrollShadow]
  return (
    <>
      <div className='nav-container'>
        <span className='logo'>
          <Link to='/'>Color of the Day</Link>
        </span>
        <ul className='nav-links'>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
