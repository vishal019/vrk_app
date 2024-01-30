import React, { Component } from 'react';
import '../services/Services.css';
import reactGif from '../../assets/react.gif';
import laravelImg from '../../assets/laravel.png';


export default class Services extends Component {
  render() {
    return (
      <div>

          <h1 id='services'>Services</h1>
     

       
        {/* <div className="card1" id='card'>
          <figure>
          <img src={laravelImg} alt="" id='laravelImg' />
          </figure>
          <figure>
          <img src={reactGif} alt="" id='reactImg' />
          </figure>
        </div> */}



      <center>  <div class="row">
  <div class="col-sm-6">
    <div className='card'>
    <figure>
    <img src={reactGif} alt="" id='reactImg' />
    </figure>
    </div>
  </div>
  <div class="col-sm-6">
    <div className='card'>
    <figure>
    <img src={laravelImg} alt="" id='laravelImg' />
    </figure>
    </div>
  </div>
</div></center>
         
      </div>
    )
  }
}
