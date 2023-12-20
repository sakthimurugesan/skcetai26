import './Footer.css'
export default function Footer() {
    return (
        
            <div class="footer">
                <div class="heading">
                    <h2>SKCETAI26<sup>&trade;</sup></h2>
                </div>
                <div class="content">
                
                    <div class="social-media">
                        <h4>Social</h4>
                    
                        <p>
                            <a href="https://twitter.com/Sanket46171296"
                            ><i class="fab fa-x"></i> Twitter</a
                            >
                        </p>
                        <p>
                            <a href="https://www.instagram.com/imsanketbodke/?hl=en"
                            ><i class="fab fa-instagram"></i> Instagram</a
                            >
                        </p>
                        <p>
                        <a href="https://www.instagram.com/imsanketbodke/?hl=en"
                            ><i class="fab fa-youtube"></i> Youtube</a
                            >
                        </p>
                        <p>
                        <a href="https://www.instagram.com/imsanketbodke/?hl=en"
                            ><i class="fab fa-threads"></i> Threads</a
                            >
                        </p>
                        <p>
                        <a href="https://www.instagram.com/imsanketbodke/?hl=en"
                            ><i class="fab fa-tiktok"></i> Moj</a
                            >
                        </p>
                    </div>
                    <div class="links">
                        <h4>Quick links</h4>
                        <p><a href="/">Home</a></p>
                        <p><a href="/events">Events</a></p>
                        <p><a href="/activities">Student Activities</a></p>
                        <p><a href="/gallery">Gallery</a></p>
                    </div>
                    <div class="details">
                        <h4 class="address">Address</h4>
                        <p>
                        BK Pudur, Sugunapuram East, <br></br> Kuniyamuthur, Tamil Nadu 641008
                        </p>
                      
                        <h4 class="mail">Email</h4>
                        <p><a href="#">msakthi150@gmail.com</a></p>
                    </div>
                </div>
                <footer>
                    <hr />
                    &copy; {new Date().getFullYear()} SKCETAI26
                </footer>
            </div>
        
    )
}