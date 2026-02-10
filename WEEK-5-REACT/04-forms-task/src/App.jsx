import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="upper-part">
        <h3>Contact info form</h3>
        <p>please fill the form to submit</p>
      </div>
      <div className="full-part">
        <form className="contact-form">
          <label htmlFor="name">Name<span style={{ color: 'red' }}> *</span></label>
          <input type="text"  placeholder="Your name" required  />

          <label htmlFor="email">Email<span style={{ color: 'red' }}> *</span></label>
          <input type="email"  placeholder="Your email" required/>

          <label htmlFor="number">Phone Number<span style={{ color: 'red' }}> *</span></label>
          <input type="number"  placeholder="Your phone number" required/>

          <label htmlFor="website">Website<span style={{ color: 'red' }}> *</span></label>
          <input type="url"  placeholder="Your website" required/>

          <label htmlFor="message">Message</label>
          <textarea  placeholder="Write something"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
