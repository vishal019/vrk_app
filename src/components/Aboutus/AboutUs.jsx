import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import img from '../../assets/react.gif'
import '../Aboutus/AboutUs.css'
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="headerAboutus">
          <h1>What I Do</h1>

          <Card id='projectcard'>
              {/* <Card.Header as="h7">React</Card.Header> */}
              <Card.Body>
                <img id='image' src={img} alt="" /><Card.Title id='cardtitle'>Portfolio</Card.Title>
                {/* <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text> */}
              </Card.Body>
            </Card>

        </div>
      </div>
    )
  }
}
