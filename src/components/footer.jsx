import { colors } from '@mui/material'
import React, { Component } from 'react'
import '../components/footer.css';

export default class footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-body-grey text-center">
  {/* Grid container */}
  <center>
  <div className="container p-5 pb-0" id='socialmediaicon'>
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      {/* Twitter */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter" />
      </a>
      {/* Google */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#dd4b39" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-google" />
      </a>
      {/* Instagram */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  </center>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3" 
    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color:'white' }}
  >
    © 2024 Copyright: 
    <a className="text-body" href="https://mdbootstrap.com/">
      iamvrk.com
    </a>
  </div>
  {/* Copyright */}
</footer>

      </>
    )
  }
}
