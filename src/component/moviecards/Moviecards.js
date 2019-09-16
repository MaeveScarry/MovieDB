import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Moviecards.css";

function Moviecards() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv0ZNSwBwp4-O1lbm-0dWeVt3u88csIRTqCf6inDlPy9WhQ5vs" />
        <Card.Body>
          <Card.Title>Hi sonya</Card.Title>
          <Card.Text>
            What's you favourite film?
          </Card.Text>
          <Button variant="primary">Click here</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default Moviecards;
  
