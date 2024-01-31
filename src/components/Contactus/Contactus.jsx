import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contactus/Contactus.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contactus() {
  const form = useRef();

  const notify = () => toast("Thanks for contacting us! We will be in touch with you shortly.");

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

      <section className='contactpage' id='contactus'>

      <div id='contact'>

        <h1 className='contactpagetitle'>Contact Us</h1>
        <span className="contactdescription">Please fillout the form below to discuss any work opportunities</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="name" placeholder='Enter the name' required />
          <input type="email" name="user_email" className="email" placeholder='Enter the email' required />
          <textarea className='msg' name="message" id="" cols="30" rows="10" placeholder='Enter the message' required></textarea>
          <br />
          <button value='Send' data-dismiss="alert" className='submitbtn' type="submit" onClick={notify}>Send</button>
          <div className="links">

          </div>
        </form>
      </div>
      <ToastContainer />
        
      </section>
    </div>
  )
}
