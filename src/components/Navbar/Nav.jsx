import React, { Component } from 'react';
import logo from  "../../assets/logo.jpg";
import '../Navbar/Nav.css';
import { Link } from "react-scroll";

export default class Nav extends Component {
  render() {
    return (
        <nav className='navbar'>
    
            <img src={logo} alt="" id='logo' />
       
        <span>
          <Link to="/" className='desktopmenuListitem'>Home</Link>
          <Link to="#services" className='desktopmenuListitem'>Services</Link>
          <Link to="/portfolio" className='desktopmenuListitem'>Portfollio</Link>
          <Link to="/about" className='desktopmenuListitem'>About</Link>
        </span>
       
            <button className='desktopmenubtn'>
               <span class="material-symbols-outlined">call</span> Contact Me
            </button>
       
   
      </nav>
    )
  }
}
