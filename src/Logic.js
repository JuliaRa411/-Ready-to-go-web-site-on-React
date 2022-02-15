import {useState } from "react";
import {mainscreen} from './mainscreen'
 
 
import Quotes from "./Quotes";
 
 
function Logic() {
  

    const [photo, setPhoto] =useState(0)
    const {image} = mainscreen[photo];
    console.log(image)
    const prevPhoto =()=>{
        setPhoto((photo=>{
          photo --;
          if (photo <0) {
            photo = mainscreen.length-1
          }
          return photo
        }))
      }
    
      const nextPhoto =()=>{
      setPhoto((photo=>{
          photo ++;
          if (photo > mainscreen.length-1) {
            photo=0;
          }
          return photo;
        }))
      }
    
      return (
     

      <div>
           <Quotes/>
    
    <div className="slideshow-container">
    <div className="mySlides fade">
    <img  src={image}  width ="100%" alt='car'/> 
     </div> 

     <button  className='prev' onClick={prevPhoto} > ❮ </button>
     <button className='next' onClick= {nextPhoto}>  ❯ </button>
 
    </div>
    </div>

          )  

   
 
    }
   
    export default Logic;