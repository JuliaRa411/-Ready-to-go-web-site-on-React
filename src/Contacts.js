import {useState} from "react"
function Contacts(){
 const [services, setServises] = useState(true)
 const showServices =() =>{
setServises( !services)
 }
 
 
 
 return ( <div className="schedule">
<div className="box">
<h2> Hours of Operation</h2>
<p> Monday - Friday     8:00 AM - 5:00 PM</p>
<p>Saturday  9:00 AM - 4:00 PM   </p>
<p> Sunday  Closed  </p>
 
 <div className="box">
 
 <button  onClick={() => showServices()} className ="get"> Special Services</button>
 <p className="display"> {services}</p>
 {services? ("") :(
         
 <ul className="box3">
 <li> Child Seat </li>
 <li> Hand Controls</li>
 <li> Booster Seats</li>
  <li>After hours drop off available</li>
  <li>After hours drop off available</li>
  <li> Infant Seat</li>
  </ul>
     )
 }
 </div>
 </div>
 <div className="schedule">
<div className="box2">
        <h2> 2022 Holiday Hours:</h2>
        <p>FAMILY DAY   February  21  09:00AM - 02:00PM </p>
        <p>GOOD FRIDAY   April  15  09:00AM - 02:00PM</p>
        <p>VICTORIA DAY   May  23  09:00AM - 02:00PM </p>
        <p>CANADA DAY   July  1  closed</p>
        <p>CIVIC DAY   August  1  09:00AM - 02:00PM </p>
        <p>LABOUR DAY   September  5  09:00AM - 02:00PM</p>
        <p>THANKSGIVING   October  10  09:00AM - 02:00PM</p>
        <p>CHRISTMAS EVE   December  24  08:00AM - 02:00PM</p>
        <p>CHRISTMAS HDY   December  25 - December  26    closed</p>
        <p>NEW YEARS EVE   December  31  08:00AM - 02:00PM</p>
  </div>
 </div>
    </div>
 
 
 
)
}
 
 
export default Contacts ;

