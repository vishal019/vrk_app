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
        <span className="introtext">I'm <span className="introName">{props.name}</span> <br /> Web Developer</span>
        <p className='intropara'>I am a skilled and passionate web developer with experience in creating user friendly websites. </p>
    <Link> <button className='btn'><span class="material-symbols-outlined">
cases
</span> Hire Me</button></Link>    </div>
  
  <figure>  <img src={profile} alt=""  className='bg'/></figure>
    </section>
    



  )
}

export default Intro
