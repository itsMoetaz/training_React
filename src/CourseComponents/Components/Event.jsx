import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Event(props) {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${props.event.img}`} />
        <Card.Body>
          <Card.Title>{props.event.name}</Card.Title>
          <Card.Text>
            {props.event.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}