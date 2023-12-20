import * as React from 'react';
import './activitiespage.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import act from './actvities.json'
export default function Activities() {
  const temp=[...act].reverse()
  return (
   <>
   <Navbar />
  <div className='activities-outer-div'>
    <div className='activities-div'>
    <h1>Student Activities</h1>
      <div className='activities-card-outer'>
    
      {temp.map((activities) => (
              <div className='activities-card' key={activities.id}>
                <img src={activities.card_url} alt={activities.activities_card_name} />
                <div className='activities-detail-div'>
                  <h3>{activities.activities_main_title}</h3>
                  <h3><i class="fa fa-calendar" aria-hidden="true"></i>         {activities.activities_date}</h3>
                  <h3><i class="fa fa-map-marker" aria-hidden="true"></i>          {activities.venue}</h3>
                  <h3><a href={'/activities/'+activities.id}>More...</a></h3>
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
