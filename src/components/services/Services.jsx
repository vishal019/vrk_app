import React, { Component } from 'react';
import '../services/Services.css';
// import reactGif from '../../assets/react.gif';
// import laravelImg from '../../assets/laravel.png';
import laravel_gig from '../../assets/laravel_gig.png';
import app_development from '../../assets/Mobile_app_development.gif';
import web_dev from '../../assets/web_dev.gif';
import { colors } from '@mui/material';


export default class Services extends Component {
  render() {
  
    return (

      
      <div>

          <h1 id='services'>Services</h1>
     
        <div className="container">
        <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={laravel_gig} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={laravel_gig} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={laravel_gig} alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>




        </div>
       
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
    <img src={app_development} alt="" id='reactImg' />
    </figure>
    <h3 id='card_content'>Mobile App Development</h3>
    </div>
  </div>
  <div class="col-sm-6">
    <div className='card'>
    <figure>
    <img src={web_dev} alt="" id='laravelImg' />
    </figure>
    <h3 id='card_content'>Website Development</h3>
    </div>
  </div>
</div> </center>
         
      </div>
    )
  }
}
