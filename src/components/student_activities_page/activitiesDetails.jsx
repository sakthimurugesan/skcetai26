import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { useParams } from "react-router-dom";
import act from './actvities.json';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './activitiespage.css'
export default function ActivitesDetails() {
  const { id } = useParams();

  // Find the selected activities based on the id
  const selectedEvent = act.find(activities => activities.id.toString() === id);

  if (!selectedEvent) {
    return <h2>Event not found</h2>;
  }

  const {
    activities_card_name,
    activities_date,activities_main_title,
    venue,
    card_url,
    activities_desc,
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
            <h1>{activities_main_title}</h1>
            <h2><i class="fa fa-map-marker" aria-hidden="true"></i>     {venue}</h2>
            <h2><i class="fa fa-calendar" aria-hidden="true"></i>     {activities_date}</h2>
            <p style={{
                marginTop:"25px"
            }}>
             {activities_desc}
            </p>
       
          </div>
        </div>
      </div>
     
         
          {videos && Array.isArray(videos) && videos.length>0 && (
             <div className='video-outer-div'>
             <div className='video-85-div'>
                {videos.map((vid,index)=>
                (
<iframe width="600" height="350" src={vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                ))}
                </div>
                </div>
          )
          }
            
           
   <Footer></Footer>
   </>
  );
}
