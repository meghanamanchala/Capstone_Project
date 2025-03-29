// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar/Navbar.jsx';
import './Queries.css'; 

function Queries() {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
      <div className='mt-5 mb-5'>
        <h1 className='question-query-page'>Have Questions? We’re Here to Help!</h1>
        <p className='para-query'>Welcome to our Queries section! If you have any questions about our services, appointment bookings, or any other inquiries, feel free to reach out to us. We’re dedicated to providing you with the information and assistance you need.</p>
      </div>
      <div className='mt-5 mb-5'>
        <h2 className='quer'>Submit Your Query:</h2>
        <p className='para-query'>Please use the form below to submit your query. Our team will review it and get back to you as soon as possible. Thank you for reaching out to us!</p>
        <textarea className='query-textarea'>  </textarea>
        <button className='btn btn-primary submit-btn'>Submit</button>
      </div>
      <div className='mt-5 mb-5'>
        <h2 className='question-query-page'>Contact Information:</h2>
        <p className='para-query'>For further assistance, you can contact us directly:</p>   
          <li className='para-query'>Phone: 1234567890</li>
          <li className='para-query'>Email: apollohospital@gmail.com</li>
          <li className='para-query'>Office Hours: 24/7</li>
      </div>
      </div>
    </>
  )
}

export default Queries