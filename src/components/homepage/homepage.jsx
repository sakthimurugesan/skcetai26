import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './homepage.css'
import '../student_activities_page/activitiespage.css'
import React, { useEffect, useState } from 'react';
import birthdayData from './birthday.json';
import eventss from '../eventpage/events.json'
import act from '../student_activities_page/actvities.json'
export default function HomePage() {
    const [birthdayData1, setBirthdayData] = useState([]);
    const lastEvents = eventss.slice(-3).reverse();
const lastActs = act.slice(-3).reverse();

    useEffect(() => {

      const today = new Date();
      const formattedToday = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
    
      const filteredData = birthdayData.filter(person => {
        const [day, month, year] = person.DOB.split('.').map(Number); // Split and convert to numbers
       
    

        if(day==today.getDate() && month==today.getMonth()+1)
        return true;
        return false;
      });
    
      setBirthdayData(filteredData);
    }, [birthdayData]);
    
    return (
        <>
            <Navbar />

            <video width="100%" autoPlay loop muted src="https://res.cloudinary.com/dfiyrqut1/video/upload/v1702895161/homepage_kkzmbd.mp4" >
            </video>
            {birthdayData1.length>0?
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "auto",
                            marginBottom: "40px",
                            marginTop: "40px",
                        }}>
                            <div className="birthday-div">
                                <h1>Birthday !!</h1>
                                <div className="birthday-card-outer">
                                {birthdayData1.map((person, index) => (
              <div className="birthday-card" key={index}>
              <img src="a.png"></img>
              <h3>Happy Birthday</h3>
              <h3> {person.Name}</h3>
          </div>
          ))}
                               
                                </div>
                            </div>
                        </div>:""}

            <div className='event-outer-div'>
                <div className='event-div'>
                    <h1>Events</h1>
                    <div className='event-card-outer'>
                    {lastEvents.map((event) => (
              <div className='event-card' key={event.id}>
                <img src={event.card_url} alt={event.event_card_name} />
                <div className='event-detail-div'>
                  <h3>{event.event_card_name}</h3>
                  <h3><i class="fa fa-calendar" aria-hidden="true"></i> {event.event_date}</h3>
                  <h3><i class="fa fa-map-marker" aria-hidden="true"></i> {event.venue}</h3>
                  <a href={`/events/${event.id}`}><h3>More...</h3></a>
                </div>
              </div>
            ))}
                        <div className='event-card'>
                            <img src='event.jpg'></img>
                            <div className='event-detail-div'>

                                <a href="/events"><h3>More Events ...</h3></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='activities-outer-div'>
                <div className='activities-div'>
                    <h1>Student Activities</h1>
                    <div className='activities-card-outer'>
                    {lastActs.map((activity) => (
              <div className='activities-card' key={activity.id}>
                <img src={activity.card_url} alt={activity.event_card_name} />
                <div className='activities-detail-div'>
                  <h3>{activity.activities_card_name}</h3>
                  <h3><i class="fa fa-calendar" aria-hidden="true"></i> {activity.activities_date}</h3>
                  <h3><i class="fa fa-map-marker" aria-hidden="true"></i> {activity.venue}</h3>
                  <a href={`/activities/${activity.id}`}><h3>More...</h3></a>
                </div>
              </div>
            ))}
                      
                        <div className='event-card'>
                            <img src='act.jpg'></img>
                            <div className='event-detail-div'>

                                <a href="/activities"><h3>More Actvities ...</h3></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}