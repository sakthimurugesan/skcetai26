import * as React from 'react';
import './eventpage.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
export default function EventPage() {
  return (
   <>
   <Navbar />
  <div className='event-outer-div'>
    <div className='event-div'>
    <h1>Events</h1>
      <div className='event-card-outer'>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      <div className='event-card'>
        <img src='/video/727722euai050.jpg'></img>
       <div className='event-detail-div'>
       <h3>Event Name</h3>
        <h3>Event Date</h3>
        <h3>More...</h3>
       </div>
      </div>
      </div>
    </div>
  </div>
   <Footer />
   </>
  );
}