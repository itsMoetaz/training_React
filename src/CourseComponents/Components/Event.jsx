import { use, useEffect } from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Event(props) {
  const [nbTickets, setNbTickets] = useState(props.event.nbTickets);
  const [nbParticipants, setNbParticipants] = useState(props.event.nbParticipants);
  const [showAlert, setShowAlert] = useState(false);
  const [liked, setLiked] = useState(false);


  const handleClick = () => {
    setNbTickets(nbTickets - 1);
    setNbParticipants(nbParticipants + 1);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const handleLike = () => {
    setLiked(!liked);
  }

    

    return (

        <div style={{display: 'inline-block', margin: '10px'}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${props.event.img}`} />
        <Card.Body style={{textAlign: 'left'}}>
          <Card.Title>{props.event.name}</Card.Title>
          <Card.Text>price: {props.event.price}</Card.Text>
          <Card.Text>number of tickets: {nbTickets}</Card.Text>
          <Card.Text>number of participants: {nbParticipants}</Card.Text>
          <Button variant="secondary" onClick={handleLike} >
            {liked ? 'Dislike' : 'Like'}
          </Button>
          <Button variant="primary" onClick={handleClick} disabled={nbTickets === 0}>{nbTickets === 0 ? 'sold out' : 'book an event'}</Button>

          {showAlert && (
                    <Alert variant="success">
                  You have booked an event
              </Alert>
          )}
        </Card.Body>
      </Card>
      </div>
    );
}