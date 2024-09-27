import React from 'react';
import '../styles/contact.scss'
const Contact = () => {
  return (
    <div className='contact'>
      <main>
      <h1>Contact Us</h1>
        <form>
 
          <div>
            <label>Name</label>
            <input type="text" placeholder='abc' name="username" />
          </div>
          
          <div>
            <label>Email</label>
            <input type="email" placeholder='abc@mail.com' name="email" />
          </div>
          
          <div>
            <label>Message</label>
            <input type="text" placeholder="Tell us about your query" name="username" />
          </div>
          
          <button type="submit">Send</button>

        </form>
      </main>
      
    </div>
  );
}

export default Contact;
