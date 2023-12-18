import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './homepage.css'
export default function HomePage() {
    return (
        <>
            <Navbar />

            <video width="100%" autoPlay loop muted src="https://res.cloudinary.com/dfiyrqut1/video/upload/v1702895161/homepage_kkzmbd.mp4" >
            </video>

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
                        <div className="birthday-card">
                            <img src="https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg"></img>
                            <h3>Happy Birthday Ranga</h3>
                        </div>
                        <div className="birthday-card">
                            <img src="https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg"></img>
                            <h3>Happy Birthday Ranga</h3>
                        </div>
                        <div className="birthday-card">
                            <img src="https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg"></img>
                            <h3>Happy Birthday Ranga</h3>
                        </div>
                        <div className="birthday-card">
                            <img src="https://res.cloudinary.com/dfiyrqut1/image/upload/v1702896336/727722EUAI050_rmoini.jpg"></img>
                            <h3>Happy Birthday Ranga</h3>
                        </div>
                    </div>
                </div>
            </div>
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