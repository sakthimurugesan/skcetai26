
import './Navbar.css'
export default function Navbar() {

   return (
      <>
         <header>
            <div class="container">
               <input type="checkbox" name="check" id="check" />
               <div class="logo-container">
                 <a href='/' className='logo-link'> <h3 class="logo">SKCETAI26</h3></a>
               </div>
               <div class="nav-btn">
                  <div class="nav-links">
                     <ul className="ulist">
                        <li class="nav-link" style={{ "--i": ".6s" }}>
                           <a href="/">Home</a>
                        </li>

                        <li class="nav-link" style={{ "--i": "1.1s" }}>
                           <a href="/events">Events</a>
                        </li>
                        <li class="nav-link" style={{ "--i": "1.1s" }}>
                           <a href="/activities">Student Activities</a>
                        </li>
                        <li class="nav-link" style={{ "--i": "1.1s" }}>
                           <a href="/gallery">Gallery</a>
                        </li>

                     </ul>
                  </div>


               </div>
               <div class="hamburger-menu-container">
                  <div class="hamburger-menu">
                     <div></div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}