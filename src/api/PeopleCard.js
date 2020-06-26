import React from 'react';
import {Card,Button } from 'react-bootstrap';
import "./Box.css";
const PeopleCard = (props) => {
  const {  image_url, id , name ,price}= props;
   
    return (
      <div >
      <Card style={{ width: '18rem' }} key={id} className="box">
        <Card.Img variant="top"  className="image1" src={image_url}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
            <Card.Text>
              {price}
            </Card.Text>
          <Button variant="primary" >buy now</Button>{' '}{' '}{' '}
          <Button variant="success">Add to cart</Button>
        </Card.Body>
    </Card>
    
      </div>
    );
  }

export default PeopleCard;
