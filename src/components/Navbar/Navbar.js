import React from 'react';
import { navLinks } from '../../data/nav-data';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <>
      {/* {navLinks.map((link, index) => {
        return (
          <div className='nav-container'>
            <span key={index} className='logo'>
              <Link to={link.path}>{link.title}</Link>
            </span>
            <ul className='nav-links'>
              <li key={index}>
                <Link to={link.path}></Link>
              </li>
            </ul>
          </div>
        );
      })} */}
    </>
  );
};

export default Navbar;
