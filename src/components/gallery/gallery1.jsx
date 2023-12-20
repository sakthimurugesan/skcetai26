import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './gallery.css'
import data from './gallery.json'
export default function Gallery() {
  return (
    <>
      <Navbar />
      <div >
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "50px",
          marginBottom: "50px"
        }} class="parent-container">
       
         {data.map((i)=>(
           <div class="child-container">

           <img src={i.image} />
         </div>
         ))}
        </div>
      </div>

      <Footer />
    </>
  )
}