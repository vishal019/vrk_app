import React, { Component } from 'react'
import '../Portfolio/Portfolio.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default class Portfolio extends Component {
  render() {
    return (
      <div>

        <div className="heraderPortfolio">
          <h1>Portfolio</h1>
          <h3>My Amazing Works</h3>

          <div className="Laravelpro">

            <Card id='projectcard'>
              <Card.Header as="h7">Laravel</Card.Header>
              <Card.Body>
                <Card.Title>V-mart Ecommerce Web Project</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="light">View Project</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="Laravelpro">
          <Card id='projectcard'>
              <Card.Header as="h7">React</Card.Header>
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="light">View Project</Button>
              </Card.Body>
            </Card>
          </div>







        </div>
      </div>
    )
  }
}
