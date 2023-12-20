import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { useParams } from "react-router-dom";
import eventss from './events.json';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './EventDetails.css'
export default function EventsDetails() {
  const { id } = useParams();

  // Find the selected event based on the id
  const selectedEvent = eventss.find(event => event.id.toString() === id);

  if (!selectedEvent) {
    return <h2>Event not found</h2>;
  }

  const {
    event_card_name,
    event_date,event_main_title,
    venue,
    card_url,
    event_desc,
    imgs,
    videos,
  } = selectedEvent;

  return (
   <>
   <Navbar></Navbar>
   <div className='product-main-div'>
        <div className='product-main-div-1'>
          <div className='product-img-div'>
          <Carousel className='car-img'>
            {
                imgs.map( (item, i) => <img  src={item} /> )
            }
        </Carousel>
          </div>
          <div className='product-detail-div'>
            <h1>{event_main_title}</h1>
            <h2><i class="fa fa-map-marker" aria-hidden="true"></i>     {venue}</h2>
            <h2><i class="fa fa-calendar" aria-hidden="true"></i>     {event_date}</h2>
            <p style={{
                marginTop:"25px"
            }}>
             {event_desc}
            </p>
       
          </div>
        </div>
      </div>
      <div className='video-outer-div'>
            <div className='video-85-div'>
         
            <iframe width="600" height="350" src="https://www.youtube.com/embed/QdHvS0D1zAI?si=jQMLt0x5-7SeeeBT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="600" height="350" src="https://www.youtube.com/embed/QdHvS0D1zAI?si=jQMLt0x5-7SeeeBT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="600" height="350" src="https://www.youtube.com/embed/QdHvS0D1zAI?si=jQMLt0x5-7SeeeBT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="600" height="350" src="https://www.youtube.com/embed/QdHvS0D1zAI?si=jQMLt0x5-7SeeeBT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
      </div>
   <Footer></Footer>
   </>
  );
}
