import React from 'react'
import '../intro/Intro.css';
import profile from '../../assets/profile.png'
import {Link} from 'react-scroll';
import Typewriter from 'typewriter-effect/dist/core';


const Intro = (props) => {

  
  return (
    <section id='intro'>

    <div className="inroContent">
        <span className="hello">Hello,</span>
        <span className="introtext">We Provide Exclusive
 <br /> Web & App Development Services</span>
        <p className='intropara'>We are skilled and passionate web developer with experience in creating user friendly websites & Mobile Applications. </p>
    <Link> <button className='btn'><span class="material-symbols-outlined">
cases
</span>Learn More</button></Link>    </div>
  
  <figure>  <img src={profile} alt=""  className='bg'/></figure>
    </section>
    



  )
}

export default Intro
