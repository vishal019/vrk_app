import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import Nav from '../Navbar/Nav';


const Navbar = () => {
  return (
    
      <header>
        <NavLink to='/'><img src={logo} alt="" /></NavLink>
        <Nav/>
      </header>
    

  );
}

export default Navbar
