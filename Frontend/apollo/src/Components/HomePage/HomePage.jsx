import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './HomePage.css';
import locationsData from '../data/locationsData';
import doctor from '../assests/doctor.jpeg';
import ahmedabad from '../assests/ahmedabad_city.svg';
import bangalore from '../assests/bangalore_city.svg';
import bhubaneshwar from '../assests/bhubaneshwar_city.svg';
import bhopal from '../assests/lucknow_city.svg';
import chennai from '../assests/chennai_city.svg';
import delhi from '../assests/delhi_city.svg';
import guwahati from '../assests/guwahati_city.svg';
import hyderabad from '../assests/hyderabad_city.svg';
import indore from '../assests/indore_city.svg';
import kakinada from '../assests/kakinada_city.svg';
import kolkata from '../assests/kolkata_city.svg';
import madhurai from '../assests/madurai_city.svg';
import mumbai from '../assests/mumbai_city.svg';
import mysore from '../assests/mysore_city.svg';
import nashik from '../assests/nashik_city.svg';
import rourkela from '../assests/rourkela-main.svg';

function HomePage() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);

  const handleChange = (index) => {
    setSelectedLocationIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className='content'>
        <div className="section">
          <img src={doctor} alt="Doctor" className="doctor-img" />
          <div className="section-text">
            <p>
              Welcome to Mediconnect! We’re dedicated to providing compassionate healthcare services to our community. 
              Whether you’re seeking medical advice, booking appointments, or exploring our range of specialties, 
              you’ve come to the right place. Our commitment extends beyond medical care; we prioritize your well-being, 
              fostering a supportive environment where patients feel heard, respected, and empowered. 
              With personalized attention, we offer comprehensive services from routine check-ups 
              to innovative treatments, ensuring you live your healthiest life.
            </p>
          </div>
        </div>

        <div className="section-2">
          <h3>LOCATION</h3>
          <h1>Hospitals In India</h1>
        </div>

        <div className='places'>
          <div className="location-section">
            {[ahmedabad, bangalore, bhubaneshwar, bhopal, chennai, delhi, guwahati, hyderabad, 
              indore, kakinada, kolkata, madhurai, mumbai, mysore, nashik, rourkela].map((image, index) => (
              <div className="card" key={index} onClick={() => handleChange(index)}>
                <img src={image} alt={`Location-${index}`} />
                <p>{locationsData[index].name}</p>
              </div>
            ))}
          </div>

          <div className='detailed-information'>
            {selectedLocationIndex !== null && (
              <div className='selecteditem'>
                <img src={locationsData[selectedLocationIndex].image} alt={selectedLocationIndex} />
                <div className="card-info">
                  <h4>{locationsData[selectedLocationIndex].name}</h4>
                  <p>Address: {locationsData[selectedLocationIndex].address}</p>
                  <p>Phone: {locationsData[selectedLocationIndex].phoneNumber}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
