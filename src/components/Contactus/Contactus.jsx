import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contactus/Contactus.css';

export default function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akigacl', 'template_ggnifwb', form.current, '7H5GArl0XbyGkhEv3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      {/* <div id='contactusdiv'>
        <div>
          <h1 id='contactus'>Contact Me</h1>  
       <center> <p id='dis'> Please fillout the form below to discuss any work opportunities</p></center> 
     <div className='contactform'>
     <form ref={form} onSubmit={sendEmail} id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
       
        
      <input type="text" placeholder='Your name' name="user_name" />
      <input type="text" placeholder='Your email' name="user_email" />
      <textarea   placeholder='Your message' cols="30" rows="10" name="message"></textarea>

      <button type="submit" value="Send" class="btn btn-outline-secondary">Send</button>

      
    </form>
    </div>
    
    </div>
    
    
      </div> */}




      <section className='contactpage' id='contactus'>

      <div id='contact'>

        <h1 className='contactpagetitle'>Contact Us</h1>
        <span className="contactdescription">Please fillout the form below to discuss any work opportunities</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="name" placeholder='Enter the name' />
          <input type="email" name="user_email" className="email" placeholder='Enter the email' />
          <textarea className='msg' name="message" id="" cols="30" rows="10" placeholder='Enter the message'></textarea>
          <br />
          <button value='Send' className='submitbtn' type="submit">Send</button>
          <div className="links">

          </div>
        </form>
      </div>
        
      </section>
    </div>
  )
}
