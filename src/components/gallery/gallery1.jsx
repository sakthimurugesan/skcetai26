import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './gallery.css'
import data from './gallery.json'
export default function Gallery() {
  const temp=[...data].reverse()
  return (
    <>
      <Navbar />

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "25px",
          columnGap:"15px",
          rowGap:"15px"
        }} >
       
         {temp.map((i)=>(
          
        <img src={i.image} alt="Hi" style={{height:"300px", width:"450px"}}></img>
        
         ))}
        </div>
  

      <Footer />
    </>
  )
}