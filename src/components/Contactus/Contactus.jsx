import React, { Component } from 'react'
import { MDBInput,MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import '../Contactus/Contactus.css';

export default class Contactus extends Component {
  render() {
    return (
      
       <div id='contactusdiv'>
        <div>
          <h1>Contact Me</h1>  
       <center> <p id='dis'> Please fillout the form below to discuss any work opportunities</p></center> 
     <div className='container'>
     <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
       

      <input type="text" placeholder='Your name' />
      <input type="text" placeholder='Your email' />
      <textarea name="" id=""  placeholder='Your message' cols="30" rows="10"></textarea>

      <button type="button" class="btn btn-outline-secondary">Send</button>
    </form>
    </div>
    </div>
    
      </div>
    )
  }
}
