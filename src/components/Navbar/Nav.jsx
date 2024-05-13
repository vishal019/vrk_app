import React, { Component } from 'react';
import logo from  "../../assets/logo.jpg";
import '../Navbar/Nav.css';
import { useState } from 'react';
import { Link } from "react-scroll";
import m from "../../assets/menu.png"
import digital_dairies from '../../assets/digital_diaries.png';


export default function Nav() {
  const [showmenu,setmenu]=useState(false);
  return (
    <div>
      <nav className='navbar'>
    
    <img src={digital_dairies} alt="" id='logo' />

<span className='desktopmenu'>
  <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuListitem'>Home</Link>
  <Link activeClass='active' to="services" spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuListitem'>Services</Link>
  <Link activeClass='active' to="portfolio" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenuListitem'>Portfollio</Link>
  <Link activeClass='active' to="aboutus" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenuListitem'>About</Link>
 
  
</span>

  <Link to='/contactusdiv'><button className='desktopmenubtn' onClick={()=>{
    document.getElementById('contactus').scrollIntoView();
  }} >
       <span class="material-symbols-outlined">call</span> Contact Me
    </button></Link>
    <img src={m} alt="menu"  className='mobmenu' onClick={()=>setmenu(!showmenu)}/>
 <div className="navMenu" style={{display: showmenu?'flex':'none'}}>

 <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuListitem'onClick={()=>setmenu(false)}>Home</Link>
  <Link activeClass='active' to="services" spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuListitem'onClick={()=>setmenu(false)}>Services</Link>
  <Link activeClass='active' to="portfolio" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenuListitem'onClick={()=>setmenu(false)}>Portfollio</Link>
  <Link activeClass='active' to="aboutus" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenuListitem'onClick={()=>setmenu(false)}>About</Link>
  <Link activeClass='active' to="contactus" spy={true} smooth={true} offset={-100} duration={500}className='desktopmenuListitem'onClick={()=>setmenu(false)}>Contact Me</Link>
 </div>
</nav>
    </div>
  )
}
