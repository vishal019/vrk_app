import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className='menu-icon'>

    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
    </ul>

        </div>
    </nav>
  )
}

export default Nav
