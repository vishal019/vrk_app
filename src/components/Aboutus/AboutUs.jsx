import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import img from '../../assets/react.gif'
import laravel from '../../assets/laravel.png'
import '../Aboutus/AboutUs.css'
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="headerAboutus" id='aboutus'>
          

         <section id='skill'>
       <center><span className='skilltitle'>What I Do</span></center>
       <center>  <span className='skilldesc'>I am a skilled and passionate web developer with experience in creating user friendly websites.</span></center>
          <div className='skillbar'>

          <div className='skillBar'>

            <img src={img} alt="" className='skillBarImg' />
            <div>
              <h2>
                React Native and React Development
              </h2>
              {/* <p>this is the demo text</p> */}
            </div>
          </div>


          <div className='skillBar'>

            <img src={laravel} alt="" className='skillBarImg' />
            <div className='skillbartext'>
              <h2>
                Laravel Development
              </h2>
              {/* <p>this is the demo text</p> */}
            </div>
          </div>

      
          </div>

         </section>

        </div>
      </div>
    )
  }
}
