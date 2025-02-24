import React from 'react'
import { useParams } from 'react-router-dom'
import events from '../../../events.json'

const EventDetails = () => {
  const { eventName } = useParams()
  const event = events.find(e => e.name === eventName)
  console.log(event);
  

  if (!event) {
    return <h2>Event not founds</h2>
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <img src={`/${event.img}`} alt={event.name} style={{ width: '50%', height: 'auto' }} />
      <p>Price: ${event.price}</p>
      <p>Tickets Available: {event.nbTickets}</p>
      <p>Participants: {event.nbParticipants}</p>
    </div>
  )
}

export default EventDetails