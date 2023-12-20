import * as React from 'react';
import './eventpage.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import eventss from './events.json';

export default function EventPage() {
  const temp=[...eventss].reverse()
  return (
    <>
      <Navbar />
      <div className='event-outer-div'>
        <div className='event-div'>
          <h1>Events</h1>
          <div className='event-card-outer'>
            {temp.map((event) => (
              <div className='event-card' key={event.id}>
                <img src={event.card_url} alt={event.event_card_name} />
                <div className='event-detail-div'>
                  <h3>{event.event_main_title}</h3>
                  <h3><i class="fa fa-calendar" aria-hidden="true"></i>      {event.event_date}</h3>
                  <h3><i class="fa fa-map-marker" aria-hidden="true"></i>     {event.venue}</h3>
                  <h3><a href={'/events/'+event.id}>More...</a></h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
