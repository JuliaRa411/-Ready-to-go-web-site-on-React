
import {useState } from "react";
import {data} from './data';
import "./App.css";
import Buttons from "./Buttons";
import ContactForm from "./ContactForm";
 
 

function Vehicles(){

const [vehicles, setVehicles] = useState(data);
 const [showMore,setShowMore] = useState(false)
  
  
 const chosenCars = (searchTerm) => {
 const newCars = data.filter( element => 
 element.searchTerm===searchTerm )
 setVehicles(newCars)
 
 
 }

return (
<div>

<Buttons filteredCars ={chosenCars} />
 
    

  <div className="products">  
  
{vehicles.map ((vehicle =>{
  const {id, name, image,text,features} = vehicle;
  return(
  

  <div key={id}>
     
  <div className="product-card">
<h5 className="name">{name} </h5>
<img src={image}  width =" 550px"alt ="car" className="pictires"/>
   <h5 className="text">{text} </h5>
 
   <div className="product-card">
    <p className="features"> {showMore? features:features.substring(0,10) +  "...."} 
   <button onClick={() => setShowMore (!showMore)} className ="showMore">{showMore? "Show less" : "Show more"} </button></p>
     </div>
 
     </div>
   <div className="order">
   <ContactForm />
      </div>
      </div>

   
  )
}

 ))}




</div>
  </div>
)
    
}
 
 
export default Vehicles;