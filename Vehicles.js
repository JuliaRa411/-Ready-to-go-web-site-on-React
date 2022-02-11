
import {useState } from "react";
import {data} from './data';
import "./App.css";
import Buttons from "./Buttons";

function Vehicles(){

const [vehicles, setVehicles] = useState(data);
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
   <h5 className="features ">{features} </h5>
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