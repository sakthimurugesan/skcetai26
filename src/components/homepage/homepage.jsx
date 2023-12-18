import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './homepage.css'
import React, { useEffect, useState } from 'react';
import birthdayData from './birthday.json';

export default function HomePage() {
    const [birthdayData1, setBirthdayData] = useState([]);
 
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

            <video width="100%" autoPlay loop muted src="" >
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
              <img src="https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg"></img>
              <h3>Happy Birthday {person.Name}</h3>
          </div>
          ))}
                               
                                </div>
                            </div>
                        </div>:""}

            <div className='event-outer-div'>
                <div className='event-div'>
                    <h1>Events</h1>
                    <div className='event-card-outer'>
                        <div className='event-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='event-detail-div'>
                                <h3>Event Name</h3>
                                <h3>Event Date</h3>
                                <h3>More...</h3>
                            </div>
                        </div>
                        <div className='event-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='event-detail-div'>
                                <h3>Event Name</h3>
                                <h3>Event Date</h3>
                                <h3>More...</h3>
                            </div>
                        </div>
                        <div className='event-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='event-detail-div'>
                                <h3>Event Name</h3>
                                <h3>Event Date</h3>
                                <h3>More...</h3>
                            </div>
                        </div>
                        <div className='event-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='event-detail-div'>

                                <h3>More Events ...</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='activities-outer-div'>
                <div className='activities-div'>
                    <h1>Student Activities</h1>
                    <div className='activities-card-outer'>
                        <div className='activities-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='activities-detail-div'>
                                <h3>Event Name</h3>
                                <h3>Event Date</h3>
                                <h3>More...</h3>
                            </div>
                        </div>
                        <div className='activities-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='activities-detail-div'>
                                <h3>Event Name</h3>
                                <h3>Event Date</h3>
                                <h3>More...</h3>
                            </div>
                        </div>
                        <div className='activities-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='activities-detail-div'>
                                <h3>Event Name</h3>
                                <h3>Event Date</h3>
                                <h3>More...</h3>
                            </div>
                        </div>
                        <div className='event-card'>
                            <img src='https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg'></img>
                            <div className='event-detail-div'>

                                <h3>More Events ...</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}