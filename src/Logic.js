import {useState } from "react";
import {mainscreen} from './mainscreen'
import left from './left.png'
import right from './right.png'
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
    
    <div className="banner">
        
     <button  className='navigation btn1' onClick={prevPhoto} ><img src ={left}  width ="70px"  height ="70px"alt =""/> </button>

     <img id="slide"  src={image}  width = "800px" height="500px"  alt='car'/> 
            
    <button className='navigation btn2' onClick= {nextPhoto}> <img src ={right}  width ="70px"  height ="70px"alt =" " /> </button>
   
    </div> 
   
    </div>
          )  

   
 
    }
   
    export default Logic;