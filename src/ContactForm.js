import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xayvonje");
  if (state.succeeded) {
  
      return <p className='contactForm'>Thank for your order!</p>;
  
  }
  return (
      <form onSubmit={handleSubmit}>

<div className="submit">    
        <input
        id="email"
        type="email" 
        name="email"
        placeholder='email'  className='style'
      />
      </div>
      <div className="submit">
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea  
        id="message"
        name="message"
        placeholder='message' className='style'
      />
      </div>
      <div > 
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
    
 
   <div className="submit">
  
  <button className="bookSubmit">  Book</button>

  </div>
     
    </form>
  );
}

export default ContactForm;