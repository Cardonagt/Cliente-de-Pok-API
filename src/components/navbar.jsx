import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ title }) => (
  <div className='navbar'>
    <span className='navbar__title'>{title}</span>
  </div>
);

export default Navbar;
