// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import './HomePage.css';
import locationsData from '../data/locationsData';
import doctor from '../assests/doctor.jpeg'
import prathap from '../assests/prathap-reddy-img.jpg'
import ahmedabad from '../assests/ahmedabad_city.svg'
import bangalore from '../assests/bangalore_city.svg'
import bhubaneshwar from '../assests/bhubaneshwar_city.svg'
import bhopal from '../assests/lucknow_city.svg'
import chennai from '../assests/chennai_city.svg'
import delhi from '../assests/delhi_city.svg'
import guwahati from '../assests/guwahati_city.svg'
import hyderabad from '../assests/hyderabad_city.svg'
import indore from '../assests/indore_city.svg'
import kakinada from '../assests/kakinada_city.svg'
import kolkata from '../assests/kolkata_city.svg'
import madhurai from '../assests/madurai_city.svg'
import mumbai from '../assests/mumbai_city.svg'
import mysore from '../assests/mysore_city.svg'
import nashik from '../assests/nashik_city.svg'
import rourkela from '../assests/rourkela-main.svg'

function HomePage() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);

  const handleChange = (index) => {
    setSelectedLocationIndex(index)
  }
  return (
    <>
      <Navbar />
      <div className='content'>
        <div className="section">
          <img src={doctor} alt="doctor image" />
          <p>Welcome to Mediconnect! We’re dedicated to providing compassionate healthcare services to our community. Whether you’re seeking medical advice, booking appointments, or exploring our range of specialties, you’ve come to the right place. Our commitment extends beyond medical care; we prioritize your well-being, fostering a supportive environment where patients feel heard, respected, and empowered. With personalized attention, we offer comprehensive services from routine check-ups to innovative treatments, ensuring you live your healthiest life.</p>
        </div>
        <div className="section">
          <p>Established by Dr. C Prathap Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness and preventive healthcare to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 200 million lives from over 120 countries. Our relentless pursuit of excellence in healthcare delivery has earned us the trust of patients worldwide. With state-of-the-art facilities, world-class medical expertise, and a patient-centric approach, we continue to set benchmarks in healthcare innovation and patient care. At Apollo, we are committed to not just treating diseases but also promoting overall well-being, ensuring that every individual receives comprehensive and compassionate care tailored to their needs.</p>
          <img src={prathap} alt="photo" />
        </div>
        <div className="section-2">
          <h3>LOCATION</h3>
          <h1>Hospitals In India</h1>
        </div>
        <div className='places'>
          <div className="location-section">
            <div className="card" id="Ahmedabad" onClick={() => handleChange(0)}>
              <img src={ahmedabad} alt="Ahmedabad" />
              <p>Ahmedabad</p>
            </div>
            <div className="card" id="Aragonda" onClick={() => handleChange(1)}>
              <img src={ahmedabad} alt="Aragonda" />
              <p>Aragonda</p>
            </div>
            <div className="card" id="Bangalore" onClick={() => handleChange(2)}>
              <img src={bangalore} alt="Bangalore" />
              <p>Bangalore</p>
            </div>
            <div className="card" id="Bhubaneshwar" onClick={() => handleChange(3)}>
              <img src={bhubaneshwar} alt="Bhubaneshwar" />
              <p>Bhubaneshwar</p>
            </div>
            <div className='card' id="Bilaspur" onClick={() => handleChange(4)}>
              <img src={bangalore} alt="Bilaspur" />
              <p>Bilaspur</p>
            </div>
            <div className="card" id="Bhopal" onClick={() => handleChange(5)}>
              <img src={bhopal} alt="Bhopal" />
              <p>Bhopal</p>
            </div>
            <div className="card" id="Chennai" onClick={() => handleChange(6)}>
              <img src={chennai} alt="Chennai" />
              <p>Chennai</p>
            </div>
            <div className="card" id="Delhi" onClick={() => handleChange(7)}>
              <img src={delhi} alt="Delhi" />
              <p>Delhi</p>
            </div>
            <div className="card" id="Guwahati" onClick={() => handleChange(8)}>
              <img src={guwahati} alt="Guwahati" />
              <p>Guwahati</p>
            </div>
            <div className="card" id="Hyderabad" onClick={() => handleChange(9)}>
              <img src={hyderabad} alt="Hyderabad" />
              <p>Hyderabad</p>
            </div>
            <div className="card" id="Indore" onClick={() => handleChange(10)}>
              <img src={indore} alt="Indore" />
              <p>Indore</p>
            </div>
            <div className="card" id="Kakinada" onClick={() => handleChange(11)}>
              <img src={kakinada} alt="Kakinada" />
              <p>Kakinada</p>
            </div>
            <div className="card" id="Karur" onClick={() => handleChange(12)}>
              <img src={kakinada} alt="Karur" />
              <p>Karur</p>
            </div>
            <div className="card" id="Kolkata" onClick={() => handleChange(13)}>
              <img src={kolkata} alt="Kolkata" />
              <p>Kolkata</p>
            </div>
            <div className="card" id="Kochi" onClick={() => handleChange(14)}>
              <img src={kakinada} alt="Kochi" />
              <p>Kochi</p>
            </div>
            <div className="card" id="Lucknow" onClick={() => handleChange(15)}>
              <img src={bhopal} alt="Lucknow" />
              <p>Lucknow</p>
            </div>
            <div className="card" id="Madhurai" onClick={() => handleChange(16)}>
              <img src={madhurai} alt="Madhurai" />
              <p>Madhurai</p>
            </div>
            <div className="card" id="Mumbai" onClick={() => handleChange(17)}>
              <img src={mumbai} alt="Mumbai" />
              <p>Mumbai</p>
            </div>
            <div className="card" id="Mysore" onClick={() => handleChange(18)}>
              <img src={mysore} alt="Mysore" />
              <p>Mysore</p>
            </div>
            <div className="card" id="Nashik" onClick={() => handleChange(19)}>
              <img src={nashik} alt="Nashik" />
              <p>Nashik</p>
            </div>
            <div className="card" id="Nellore" onClick={() => handleChange(20)}>
              <img src={bhopal} alt="Nellore" />
              <p>Nellore</p>
            </div>
            <div className="card" id="Noida" onClick={() => handleChange(21)}>
              <img src={delhi} alt="Noida" />
              <p>Noida</p>
            </div>
            <div className="card" id="Rourkela" onClick={() => handleChange(22)}>
              <img src={rourkela} alt="Rourkela" />
              <p>Rourkela</p>
            </div>
            <div className="card" id="Trichy" onClick={() => handleChange(23)}>
              <img src={mumbai} alt="Trichy" />
              <p>Trichy</p>
            </div>
            <div className="card" id="Visakhapatnam" onClick={() => handleChange(24)}>
              <img src={bhopal} alt="Visakhapatnam" />
              <p>Visakhapatnam</p>
            </div>
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
  )
}

export default HomePage