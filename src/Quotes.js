import React from 'react';
 import  {useState} from 'react';
import './App.css';
import axios from 'axios';
 

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [show, setShow] = useState(false);

  const showQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQuote(res.data.content);
      setAuthor(res.data.author);
    })
    setShow(true);
  }

  return(
 <div> 
    <div className='quotes'> 
    <p className='inspiration'>  {show ? `${quote} -  ${author}` : ''}</p>
    
     
     </div>
         <div className='quotes'> 
     <button   onClick={() => showQuote()} className ="get"> Get your inspiration for today </button>
         </div>
         </div>
  )
}

export default App;