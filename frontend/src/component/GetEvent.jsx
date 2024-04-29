import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/events');
        setEvents(response.data.events);
        
        
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); 

  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:4000/events/${eventId}`);
      setEvents(events.filter(event => event.id !== eventId));
      
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };



  return (
    <div>
    <h1>Events</h1>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          {event.summary} - {new Date(event.start.dateTime).toLocaleString()}
          <button onClick={() => deleteEvent(event.id)}>Delete</button> {/* Delete button */}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default GetEvent;
