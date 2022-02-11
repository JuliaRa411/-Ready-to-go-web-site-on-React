import Swal from 'sweetalert2'
import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjwgnbe");
  if (state.succeeded) {
      return <p>Thank you for your order!</p>;

    }
   
   
  return (
  
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email  
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        type="text" 
      />
      <ValidationError 
        
        field="message"
        errors={state.errors}
      />
  <div> 
      <button type="submit" disabled={state.submitting} className="bookCar"  >  
       Book
      </button>
      </div>
    </form>
  
  );
}

export default ContactForm;